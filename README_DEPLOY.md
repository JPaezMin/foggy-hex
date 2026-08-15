# Deploy instructions (CI + local)

This document explains how to set up GitHub Actions to build your Nuxt/Nitro site and deploy the generated static files to your cPanel host via SSH/rsync.

Required GitHub Secrets
- `DEPLOY_SSH_KEY` — the private SSH key (PEM or ED25519) for the deploy user.
- `DEPLOY_HOST` — foggyhexbcn.com
- `DEPLOY_USER` — foggyhex
- `DEPLOY_PATH` — /home/foggyhex/public_html
- `DEPLOY_PORT` — (optional) SSH port, default 22

Steps to create a key and add it to the server
1. On your local machine (or WSL / Git Bash), generate a key:

```bash
ssh-keygen -t ed25519 -C "github-deploy@your-repo" -f ~/.ssh/foggyhex_deploy_key
```

2. Copy the public key (`~/.ssh/foggyhex_deploy_key.pub`) to the server's `~/.ssh/authorized_keys` for the `foggyhex` user. If you have cPanel "SSH Access" you can paste it there, or upload the file to `~/.ssh/authorized_keys` using the cPanel File Manager.

3. Add the private key content to GitHub Secrets as `DEPLOY_SSH_KEY`. Paste the full contents of `~/.ssh/foggyhex_deploy_key` (not the `.pub`).

4. Add the other secrets in the repository settings: `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_PATH`, and optionally `DEPLOY_PORT`.

Testing locally

Load your private key into your local agent and run a dry-run rsync:

```bash
ssh-add ~/.ssh/foggyhex_deploy_key
rsync -avz --delete -e "ssh -p 22" public/ foggyhex@foggyhexbcn.com:/home/foggyhex/public_html/ --dry-run
```

To deploy from your machine using the helper script:

```bash
chmod +x deploy.sh
DEPLOY_USER=foggyhex DEPLOY_HOST=foggyhexbcn.com DEPLOY_PATH=/home/foggyhex/public_html PORT=22 ./deploy.sh
```

What the GitHub Actions workflow does
- Runs on `push` to the `deploy` branch
- Installs Node, runs `npm ci` and `npm run build`
- Adds the SSH key via `webfactory/ssh-agent`
- Uses `rsync` to sync the `public/` folder, `_nuxt/` folder, and top-level HTML files into `DEPLOY_PATH`

If anything fails, check the Actions logs in GitHub for the step that failed and verify the secrets are set correctly.
