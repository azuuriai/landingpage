#!/bin/zsh
# Captures one mail picture for a personal preview page at 2x.
# Usage: scripts/fuer-bild.sh <slug> <output.png> [start|woche|anmeldung]
# Needs the dev server on :3200.
set -e
SLUG="$1"; OUT="$2"; MOTIV="${3:-start}"
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
  --hide-scrollbars --force-device-scale-factor=2 --window-size=1200,720 \
  --virtual-time-budget=8000 --screenshot="$OUT" "http://localhost:3200/fuer/$SLUG/bild?motiv=$MOTIV" >/dev/null 2>&1
echo "$OUT"
