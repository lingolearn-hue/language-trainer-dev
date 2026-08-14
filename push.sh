#!/usr/bin/env bash
set -euo pipefail

# =============================================================================
# push.sh — Deploy source + GitHub Pages build together
#
# GUARDRAILS (for Claude / any assistant operating this script):
#   1. NEVER run this script unless the user has explicitly requested a push
#      in their current message. Finishing a feature, fixing a bug, or the
#      user saying "looks good" is NOT a push request on its own.
#   2. ALWAYS ask the user for the passphrase before running this script,
#      EVERY time, even if they gave it earlier in this same conversation
#      and even if they just asked you to push. Do not reuse a
#      previously-given passphrase from memory or context — ask fresh,
#      every push, no exceptions.
#        - Dev repo (language-trainer-dev)  passphrase: "Kindle"
#        - Prod repo (language-trainer)      passphrase: "Forge"
#   3. If the passphrase given does not match the target repo, stop and
#      tell the user, do not push anyway.
#   4. Always push source (main) and the Pages build (gh-pages) together in
#      the same operation — never one without the other.
# =============================================================================

REPO="$1"           # "dev" or "prod"
PASSPHRASE="$2"     # passphrase supplied by the user for this push

if [ "$REPO" = "dev" ]; then
  EXPECTED="Kindle"
  REMOTE="https://${GH_TOKEN}@github.com/lingolearn-hue/language-trainer-dev.git"
elif [ "$REPO" = "prod" ]; then
  EXPECTED="Forge"
  REMOTE="https://${GH_TOKEN}@github.com/lingolearn-hue/language-trainer.git"
else
  echo "Usage: push.sh <dev|prod> <passphrase>"
  exit 1
fi

if [ "$PASSPHRASE" != "$EXPECTED" ]; then
  echo "Passphrase mismatch for '$REPO' repo. Aborting — no push performed."
  exit 1
fi

echo "Passphrase OK. Pushing source (main) to $REPO..."
# REMINDER: source and Pages must always be pushed together in the same
# push.sh run — never push main without also rebuilding and pushing
# gh-pages right after, and never push gh-pages on its own.
git push origin main

echo "Building and pushing GitHub Pages (gh-pages) to $REPO..."
npm run build
rm -rf /tmp/gh-pages-deploy
mkdir /tmp/gh-pages-deploy
cp -r dist/* /tmp/gh-pages-deploy/
(
  cd /tmp/gh-pages-deploy
  git init -q
  git checkout -b gh-pages
  git add -A
  git -c user.email="claude@anthropic.com" -c user.name="Claude" commit -m "Pages deploy" -q
  git remote add origin "$REMOTE"
  git push -f origin gh-pages
)

echo "Done: source + Pages pushed together to $REPO."
