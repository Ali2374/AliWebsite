#!/usr/bin/env bash
# Open sampatt-template/index.html from Git Bash on Windows (or other OS)
set -e
cd "$(dirname "$0")" || exit 1
# Prefer Windows cmd start when available (Git Bash)
if command -v cmd.exe >/dev/null 2>&1; then
  # Try to get a Windows-style path from pwd
  if winpwd=$(pwd -W 2>/dev/null); then
    cmd.exe /c start "" "$winpwd\\index.html"
    exit 0
  fi
  # Fallback to serving and opening localhost
  python -m http.server 8000 >/dev/null 2>&1 &
  sleep 0.4
  cmd.exe /c start "" "http://localhost:8000/index.html"
  exit 0
fi

# Linux / macOS fallbacks
if command -v xdg-open >/dev/null 2>&1; then
  xdg-open index.html
elif command -v open >/dev/null 2>&1; then
  open index.html
else
  python -m webbrowser -t index.html
fi
