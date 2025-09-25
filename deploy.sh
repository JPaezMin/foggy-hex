#!/bin/bash
set -e

# 1. Make sure we’re on main and up-to-date
git checkout main
git pull origin main

# 2. Generate fresh static build
yarn generate

# 3. Switch to deploy branch (create if missing)
git checkout deploy || git checkout -b deploy

# 4. Clean everything except .git
find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +

# 5. Copy over static build + .cpanel.yml from main
rsync -a .output/public/ .      # copy static build
git checkout main -- .cpanel.yml   # grab .cpanel.yml from main

# 6. Stage and commit changes
git add -A
git commit -m "Deploy fresh static build" || echo "No changes to commit"

# 7. Push to remote deploy branch
git push origin deploy --force-with-lease

# 8. Switch back to main
git checkout main
