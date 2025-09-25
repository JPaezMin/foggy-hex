#!/bin/bash
set -euo pipefail

# Always resolve to repo root (where this script lives)
PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$PROJECT_DIR"

echo "🚀 Starting deployment from $(pwd)"

# 1. Ensure we are on main and up-to-date
git checkout main
git pull origin main

# 1.1 Refuse if uncommitted changes
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "❌ You have uncommitted changes on main. Commit or stash before deploying."
  exit 1
fi

# 1.2 Ensure .cpanel.yml exists on main
if [ ! -f ".cpanel.yml" ]; then
  echo "❌ .cpanel.yml is missing on main branch. Deployment aborted."
  exit 1
fi

# 2. Build fresh static output
echo "🛠️ Generating static site..."
yarn generate

# 2.1 Verify build exists
if [ ! -d ".output/public" ]; then
  echo "❌ Build failed: .output/public not found"
  exit 1
fi

# 3. Switch/create deploy branch
if git show-ref --quiet refs/heads/deploy; then
  git checkout deploy
else
  git checkout -b deploy
fi

# 4. Clean everything except .git
echo "🧹 Cleaning deploy branch..."
find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +

# 5. Copy static build + .cpanel.yml
echo "📂 Copying build and .cpanel.yml..."
rsync -a .output/public/ .
git checkout main -- .cpanel.yml

# 6. Commit changes if any
git add -A
if git diff --cached --quiet; then
  echo "ℹ️ No changes to commit."
else
  git commit -m "Deploy fresh static build"
fi

# 7. Push deploy branch
echo "⬆️ Pushing deploy branch..."
git push origin deploy --force-with-lease

# 8. Switch back to main
git checkout main

echo "✅ Deployment finished successfully!"
