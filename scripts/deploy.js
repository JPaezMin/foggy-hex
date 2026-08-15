#!/usr/bin/env node
const { execSync, spawnSync } = require('child_process');
const fs = require('fs');
const https = require('https');
const os = require('os');
const path = require('path');

function run(cmd, opts = {}) {
  return execSync(cmd, { stdio: 'inherit', ...opts });
}

function git(cmd) {
  return execSync(`git ${cmd}`, { encoding: 'utf8' }).trim();
}

function findGithubRepo() {
  try {
    const url = execSync('git config --get remote.origin.url', { encoding: 'utf8' }).trim();
    // handle forms: git@github.com:owner/repo.git or https://github.com/owner/repo.git
    let m = url.match(/github.com[:/](.+?)(?:\.git)?$/i);
    if (m && m[1]) return m[1];
  } catch (e) {
    return null;
  }
  return null;
}

function ghAvailable() {
  try {
    execSync('gh --version', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

function hasCmd(cmd) {
  try {
    const res = spawnSync(cmd, ['--version'], { stdio: 'ignore' });
    return res.status === 0 || res.status === null;
  } catch (e) {
    return false;
  }
}

function apiGetJson(repo, pathSuffix, token) {
  const options = {
    hostname: 'api.github.com',
    path: `/repos/${repo}${pathSuffix}`,
    method: 'GET',
    headers: {
      'User-Agent': 'deploy-script',
      Accept: 'application/vnd.github.v3+json',
    },
  };
  if (token) options.headers.Authorization = `token ${token}`;

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        try {
          const json = JSON.parse(body);
          resolve(json);
        } catch (e) {
          reject(new Error('Failed to parse JSON from GitHub API'));
        }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

function main() {
  console.log('Starting local deploy helper — pushing HEAD to remote branch "deploy"');

  // Check git repo
  try {
    git('status --porcelain');
  } catch (e) {
    console.error('Not a git repository or git not available. Aborting.');
    process.exit(1);
  }

  // Stage all changes
  const status = git('status --porcelain');
  if (status) {
    console.log('Staging local changes...');
    run('git add -A');
    const message = process.argv.slice(2).join(' ') || `Deploy: ${new Date().toISOString()}`;
    try {
      run(`git commit -m "${message.replace(/\"/g, '\\"')}"`);
    } catch (e) {
      console.error('Nothing to commit or commit failed.', e.message);
    }
  } else {
    console.log('No local changes to commit. Proceeding to push current HEAD.');
  }

  // Push current HEAD to deploy branch on origin
  try {
    console.log('Pushing current HEAD to origin/deploy...');
    run('git push origin HEAD:deploy');
    console.log('\nPush complete. GitHub Actions will build and deploy to your server.');
  } catch (e) {
    console.error('git push failed. Please check your remote and authentication.');
    process.exit(1);
  }

  // Optional: stream GitHub Actions logs if requested
  if (process.argv.includes('--watch') || process.env.WATCH_ACTIONS === '1') {
    const repo = process.env.GITHUB_REPO || findGithubRepo();
    if (!repo) {
      console.error('Cannot detect GitHub repo slug. Set environment variable GITHUB_REPO=owner/repo to enable watch.');
      return;
    }

    if (ghAvailable()) {
      console.log(`Opening GitHub Actions run logs for ${repo} (this requires gh to be authenticated)...`);
      try {
        const res = spawnSync('gh', ['run', 'watch', '--repo', repo], { stdio: 'inherit' });
        if (res.error) throw res.error;
        return;
      } catch (e) {
        console.error('Failed to run `gh run watch`', e.message || e);
      }
    }

    // Fallback: use GITHUB_TOKEN and GitHub API to poll the run and download logs
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      console.error('Neither `gh` is available nor `GITHUB_TOKEN` is set. Install gh or set GITHUB_TOKEN to enable API fallback.');
      console.error(`You can view the run at: https://github.com/${repo}/actions`);
      return;
    }

    (async () => {
      try {
        const headSha = execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim();
        console.log('Waiting for GitHub Actions run for commit', headSha);

        let run = null;
        // Poll to find a run matching our head_sha
        for (let i = 0; i < 30; i++) {
          const resp = await apiGetJson(repo, `/actions/runs?per_page=10`, token);
          if (resp && resp.workflow_runs) {
            run = resp.workflow_runs.find((r) => r.head_sha === headSha);
            if (run) break;
          }
          await sleep(2000);
        }

        if (!run) {
          console.error('Could not find a workflow run for this commit yet. Check https://github.com/' + repo + '/actions');
          return;
        }

        console.log('Found run:', run.html_url);

        // Wait for completion
        let status = run.status;
        while (status !== 'completed') {
          await sleep(5000);
          const rinfo = await apiGetJson(repo, `/actions/runs/${run.id}`, token);
          status = rinfo.status;
          const conclusion = rinfo.conclusion;
          console.log(`Run status: ${status}` + (conclusion ? ` — conclusion: ${conclusion}` : ''));
        }

        console.log('Run completed. Attempting to download logs...');

        const curlAvailable = hasCmd('curl');
        const unzipAvailable = hasCmd('unzip');
        const tmpZip = path.join(os.tmpdir(), `gh_run_${run.id}.zip`);

        if (curlAvailable) {
          const logsUrl = `https://api.github.com/repos/${repo}/actions/runs/${run.id}/logs`;
          console.log('Downloading logs to', tmpZip);
          const curlCmd = `curl -fsSL -H "Authorization: token ${token}" -H "Accept: application/vnd.github.v3+json" "${logsUrl}" -o "${tmpZip}"`;
          try {
            execSync(curlCmd, { stdio: 'inherit' });
          } catch (e) {
            console.error('Failed to download logs with curl:', e.message || e);
            console.error('You can view the run at', run.html_url);
            return;
          }

          if (unzipAvailable) {
            try {
              // list files
              const list = execSync(`unzip -Z1 "${tmpZip}"`, { encoding: 'utf8' });
              const files = list.split(/\r?\n/).filter(Boolean);
              for (const f of files) {
                console.log('\n==== ' + f + ' ====' );
                try {
                  execSync(`unzip -p "${tmpZip}" "${f}"`, { stdio: 'inherit' });
                } catch (e) {
                  console.error('Failed to extract file from logs zip:', f, e.message || e);
                }
              }
            } catch (e) {
              console.error('Failed to extract logs with unzip:', e.message || e);
              console.error('Logs saved at', tmpZip);
            }
          } else {
            console.log('`unzip` is not available; logs saved at', tmpZip);
            console.log('Please extract the zip and inspect logs, or install unzip to auto-print logs.');
          }
        } else {
          console.error('`curl` is not available to download logs. View the run at:', run.html_url);
        }
      } catch (e) {
        console.error('Error while using GitHub API fallback:', e.message || e);
      }
    })();
  }
}

main();
