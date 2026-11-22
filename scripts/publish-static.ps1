param(
  [string]$Message = "Deploy static build"
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$switchedToDeploy = $false
$TempDeploy = Join-Path ([System.IO.Path]::GetTempPath()) ("foggyhex-deploy-" + [System.Guid]::NewGuid().ToString("N"))

function Run-Git {
  param([Parameter(Position = 0, ValueFromRemainingArguments = $true)][string[]]$GitArgs)
  & git @GitArgs
  if ($LASTEXITCODE -ne 0) {
    throw "git $($GitArgs -join ' ') failed with exit code $LASTEXITCODE"
  }
}

function Run-Robocopy {
  param([string]$Source, [string]$Destination)
  robocopy $Source $Destination /MIR /XD .git node_modules .nuxt .output .data /XF .cpanel.yml /NFL /NDL /NJH /NJS /NP
  if ($LASTEXITCODE -gt 7) {
    throw "robocopy failed with exit code $LASTEXITCODE"
  }
}

Push-Location $RepoRoot
try {
  $branch = (Run-Git branch --show-current).Trim()
  if ($branch -ne "main") {
    throw "Start from main. Current branch is '$branch'."
  }

  $status = (Run-Git status --porcelain)
  if ($status) {
    throw "main has uncommitted changes. Commit and push main before publishing deploy."
  }

  Run-Git fetch origin main deploy
  $sourceCommit = Run-Git rev-parse HEAD
  $remoteSourceCommit = Run-Git rev-parse origin/main
  if ($sourceCommit -ne $remoteSourceCommit) {
    throw "main must match origin/main before publishing. Synchronize approved source changes first."
  }

  Run-Git merge-base --is-ancestor origin/deploy deploy

  npm run generate
  if ($LASTEXITCODE -ne 0) {
    throw "npm run generate failed with exit code $LASTEXITCODE"
  }

  if (-not (Test-Path -LiteralPath ".output/public")) {
    throw "Build output not found at .output/public"
  }

  New-Item -ItemType Directory -Path $TempDeploy | Out-Null
  Run-Robocopy ".output/public" $TempDeploy

  Run-Git switch deploy
  $switchedToDeploy = $true
  Run-Robocopy $TempDeploy "."

  Run-Git add -u
  $untrackedFiles = @(
    Run-Git status --porcelain |
      Where-Object { $_.StartsWith("?? ") } |
      ForEach-Object { $_.Substring(3) } |
      Where-Object { $_ -notmatch "^(\.nuxt|\.output|node_modules|\.data)(/|\\|$)" }
  )
  if ($untrackedFiles.Count -gt 0) {
    & git add -- @untrackedFiles
    if ($LASTEXITCODE -ne 0) {
      throw "git add -- <new build files> failed with exit code $LASTEXITCODE"
    }
  }

  $staged = (Run-Git diff --cached --name-only)
  if ($staged) {
    Run-Git commit -m $Message
  }

  Run-Git push origin deploy
  Write-Host "Deployment branch published successfully."
}
finally {
  try {
    if ($switchedToDeploy) {
      try {
        Run-Git switch main | Out-Null
      } catch {
        throw "Could not return to main. Inspect git status before continuing. $($_.Exception.Message)"
      }
    }
  } finally {
    try {
      if (Test-Path -LiteralPath $TempDeploy) {
        Remove-Item -LiteralPath $TempDeploy -Recurse -Force
      }
    } finally {
      Pop-Location
    }
  }
}