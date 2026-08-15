#!/usr/bin/env bash
set -euo pipefail

# Local deploy helper. Expects your SSH key to be loaded in your agent or uses
# SSH config. You can override with environment variables.
DEPLOY_USER=${DEPLOY_USER:-foggyhex}
DEPLOY_HOST=${DEPLOY_HOST:-foggyhexbcn.com}
DEPLOY_PATH=${DEPLOY_PATH:-/home/foggyhex/public_html}
PORT=${PORT:-22}

RSYNC_SSH="ssh -p ${PORT}"

echo "Deploying to ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH} (port ${PORT})"

if [ -d public ]; then
  rsync -avz --delete -e "$RSYNC_SSH" public/ ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/
fi

if [ -d _nuxt ]; then
  rsync -avz --delete -e "$RSYNC_SSH" _nuxt/ ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/_nuxt/
fi

for f in index.html 200.html 404.html; do
  if [ -f "$f" ]; then
    rsync -avz -e "$RSYNC_SSH" "$f" ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/
  fi
done

echo "Deploy finished."
