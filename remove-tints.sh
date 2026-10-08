#!/usr/bin/env bash
# Run from the amaryllis-frontend root: bash remove-tints.sh
set -euo pipefail
A=src/components/sections/AgricultureSection.tsx
C=src/components/sections/ConstructionSection.tsx
[ -f "$A" ] && [ -f "$C" ] || { echo "Run from the amaryllis-frontend root." >&2; exit 1; }
cp "$A" "$A.bak"; cp "$C" "$C.bak"
grep -v 'radial-gradient(ellipse_at_bottom,rgba(34,197,94' "$A.bak" > "$A"
grep -v 'radial-gradient(circle_at_78%_20%,rgba(168,85,247' "$C.bak" > "$C"
rm -rf .next
echo "Removed green tint from $A and purple/orange tint from $C (originals saved as .bak)."
