param(
  [string]$Message = "Deploy static build"
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$TempDeploy = Join-Path ([System.IO.Path]::GetTempPath()) ("foggyhex-deploy-" + [System.Guid]::NewGuid().ToString("N"))

function Run-Git {
  param([Parameter(ValueFromRemainingArguments = $true)][string[]]$Args)
  & git @Args
  if ($LASTEXITCODE -ne 0) {
    throw "git $($Args -join ' ') failed with exit code $LASTEXITCODE"
  }
}

function Run-Robocopy {
  param([string]$Source, [string]$Destination)
  robocopy $Source $Destination /MIR /XD .git node_modules .nuxt .output .data /NFL /NDL /NJH /NJS /NP
  if ($LASTEXITCODE -gt 7) {
    throw "robocopy failed with exit code $LASTEXITCODE"
  }
}

Push-Location $RepoRoot
try {
  $branch = (& git branch --show-current).Trim()
  if ($branch -ne "main") {
    throw "Start from main. Current branch is '$branch'."
  }

  $status = (& git status --porcelain)
  if ($status) {
    throw "main has uncommitted changes. Commit and push main before publishing deploy."
  }

  npm run generate
  if ($LASTEXITCODE -ne 0) {
    throw "npm run generate failed with exit code $LASTEXITCODE"
  }

  if (-not (Test-Path -LiteralPath ".output/public")) {
    throw "Build output not found at .output/public"
  }

  New-Item -ItemType Directory -Path $TempDeploy | Out-Null
  Run-Robocopy ".output/public" $TempDeploy
  Copy-Item -LiteralPath ".cpanel.yml" -Destination (Join-Path $TempDeploy ".cpanel.yml") -Force

  Run-Git switch deploy
  Run-Robocopy $TempDeploy "."

  Run-Git add -A -- . ":!.nuxt" ":!.output" ":!node_modules" ":!.data"
  $staged = (& git diff --cached --name-only)
  if ($staged) {
    Run-Git commit -m $Message
    Run-Git push origin deploy
  } else {
    Write-Host "No deploy changes to publish."
  }
}
finally {
  if (Test-Path -LiteralPath $TempDeploy) {
    Remove-Item -LiteralPath $TempDeploy -Recurse -Force
  }

  try {
    & git switch main | Out-Null
  } catch {
    Write-Warning "Could not switch back to main automatically."
  }

  Pop-Location
}
