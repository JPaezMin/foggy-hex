#!/bin/bash
set -euo pipefail

PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$PROJECT_DIR"

echo "🚀 Starting deployment from $(pwd)"

# 1. Ensure main branch is clean and up-to-date
git checkout main
git pull origin main

if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "❌ You have uncommitted changes on main. Commit or stash before deploying."
  exit 1
fi

if [ ! -f ".cpanel.yml" ]; then
  echo "❌ .cpanel.yml is missing on main. Deployment aborted."
  exit 1
fi

# 2. Build fresh static output
echo "🛠️ Generating static site..."
yarn generate

if [ ! -d ".output/public" ]; then
  echo "❌ Build failed: .output/public not found"
  exit 1
fi

# 3. Copy build to a temp folder
echo "📦 Preparing temp deploy folder..."
rm -rf .deploy-tmp
mkdir .deploy-tmp
rsync -a .output/public/ .deploy-tmp/

# 4. Switch/create deploy branch
if git show-ref --quiet refs/heads/deploy; then
  git checkout deploy
else
  git checkout -b deploy
fi

# Safety check
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "deploy" ]; then
  echo "❌ Not on deploy branch! Aborting."
  exit 1
fi

# 5. Clean deploy branch except .git
echo "🧹 Cleaning deploy branch..."
find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +

# 6. Copy build + .cpanel.yml into deploy
echo "📂 Copying build + .cpanel.yml..."
rsync -a .deploy-tmp/ .
git checkout main -- .cpanel.yml

# 7. Commit changes if any
git add -A
if git diff --cached --quiet; then
  echo "ℹ️ No changes to commit."
else
  git commit -m "Deploy fresh static build"
fi

# 8. Push deploy branch
echo "⬆️ Pushing deploy branch..."
git push origin deploy --force-with-lease

# 9. Cleanup and return to main
rm -rf .deploy-tmp
git checkout main

echo "✅ Deployment finished successfully!"
