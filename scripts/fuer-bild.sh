#!/bin/zsh
# Captures one mail picture for a personal preview page at 2x.
# Usage: scripts/fuer-bild.sh <slug> <output.png> [start|woche|anmeldung] [tageslicht|sand]
# Needs the site on :3200 (launch.json "landingpage-prod" after `npm run build`,
# or `next dev --port 3200`). The fourth argument previews a colour variant of
# the draft (app/_fuer/dance-it/farben.ts); without it the fixed one is pictured.
set -e
SLUG="$1"; OUT="$2"; MOTIV="${3:-start}"; VARIANTE="$4"
URL="http://localhost:3200/fuer/$SLUG/bild?motiv=$MOTIV"
[ -n "$VARIANTE" ] && URL="$URL&variante=$VARIANTE"
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
  --hide-scrollbars --force-device-scale-factor=2 --window-size=1200,720 \
  --virtual-time-budget=8000 --screenshot="$OUT" "$URL" >/dev/null 2>&1
echo "$OUT"
