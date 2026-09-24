# Tutorial: Screen Recording perfekt ins offizielle iPhone-Bezel einbetten

> **Stand September 2026:** Die Website nutzt diesen Weg (Video mit Alphakanal)
> nicht mehr. Das iPhone ist jetzt `public/devices/iphone-17-pro-frame.png` über
> einem normalen MP4, zugeschnitten per CSS-Maske
> (`public/devices/iphone-17-pro-screen-mask.png`, siehe
> `app/_components/phone-frame.tsx`). Wichtig: Die Maske muss die Displayform im
> **Alphakanal** tragen – CSS-Masken ignorieren Helligkeit. Das Original-Bezel
> liegt im iOS-Repo unter `AppStorePreviews/assets/`.

End-to-End Anleitung, um aus einem Apple iPhone Bezel-PNG (Marketing Resource) und einem iOS Simulator Recording ein **freistehendes Video mit transparentem Hintergrund** für die Website zu bauen — pixelgenau, ohne weiße Ecken, ohne rechtliches Risiko durch iPhone-Nachbauten.

Das Tutorial entstand aus realer Arbeit an dieser Codebase. Stand: Mai 2026, getestet mit iPhone 17 Pro Cosmic Orange, ffmpeg 7, macOS 26.

Ziel-Output: zwei Video-Files (`.webm` für Chrome/Firefox/Edge, `.mov` für Safari), beide mit echter Transparenz, beide identische Quelle — das iPhone steht "frei" auf jedem Hintergrund.

---

## Inhalt

1. [Voraussetzungen](#1-voraussetzungen)
2. [Bezel-PNG besorgen und vermessen](#2-bezel-png-besorgen-und-vermessen)
3. [Screen Recording aufnehmen](#3-screen-recording-aufnehmen)
4. [Loop-Punkt sauber bestimmen](#4-loop-punkt-sauber-bestimmen)
5. [Display-Form-Maske generieren](#5-display-form-maske-generieren)
6. [Compositing: Video × Maske + Bezel](#6-compositing-video--maske--bezel)
7. [Web-Versionen rendern](#7-web-versionen-rendern)
8. [HTML/CSS-Integration (die größte Stolperfalle)](#8-htmlcss-integration-die-größte-stolperfalle)
9. [Troubleshooting](#9-troubleshooting)
10. [Cheat-Sheet für Modell/Bezel-Maße](#10-cheat-sheet-für-modellbezel-maße)

---

## 1. Voraussetzungen

| Tool | Zweck | Install |
|---|---|---|
| **macOS** | Simulator + Hardware-HEVC-Encoder | — |
| **Xcode** (mit iOS Simulator) | Screen Recording | App Store |
| **ffmpeg 6+** | Video-Compositing | `brew install ffmpeg` |
| **Python 3 + Pillow** | Maske aus Bezel-Alpha generieren | `pip install Pillow` |
| **iPhone Bezel-PNG** | Offizielles Apple Marketing Asset | siehe Schritt 2 |

Du brauchst **macOS**. Auf Linux geht das HEVC-Encoding für die Safari-Variante nicht ohne Workarounds.

---

## 2. Bezel-PNG besorgen und vermessen

### Wo bekomme ich das offizielle Bezel?

Apple stellt iPhone-Bezels (auch "Device Frames" oder "Product Images") als Marketing Resources zur Verfügung:

- **Apple Design Resources** → https://developer.apple.com/design/resources/
- **Apple Marketing Resources** für App Store Devs → https://developer.apple.com/app-store/marketing/guidelines/

Such nach "iPhone 17 Pro Portrait" o.ä. — du willst die **PNG mit transparentem Hintergrund**, NICHT eine Render mit Studio-Background.

### Lizenz / Recht

Diese Assets sind für die Bewerbung von Apps und Diensten freigegeben, die auf Apple-Hardware laufen. Solange du das Asset **unverändert** verwendest (nur als Container für deinen App-Screen) und die App auch wirklich auf iOS läuft, bist du innerhalb der Marketing Guidelines. Nachbauten (CSS-gezeichnete iPhones, eigene 3D-Renders) sind heikler.

### Bezel vermessen — der wichtigste Schritt

Apple-Bezels haben einen **transparenten inneren Bereich**, der exakt der nativen Display-Auflösung des Geräts entspricht. Du musst zwei Dinge wissen:

1. **Größe** des inneren transparenten Bereichs (= Recording-Auflösung)
2. **Position (Offset)** des inneren Bereichs im PNG (= wo das Recording reinkommt)

Bei iPhone 17 Pro Cosmic Orange Portrait (1350×2760 PNG): **1206×2622 px Display-Bereich an Offset (72, 69)**. Bei anderen Modellen anders — siehe [Cheat-Sheet](#10-cheat-sheet-für-modellbezel-maße) am Ende.

So messt du selbst:

```python
from PIL import Image
from collections import deque

im = Image.open("iPhone 17 Pro - Cosmic Orange - Portrait.png").convert("RGBA")
px = im.load()
W, H = im.size

# Flood-fill von Bildmitte → findet alle Display-Pixel (transparente Region mitten im Bezel)
visited = {(W//2, H//2)}
queue = deque([(W//2, H//2)])
display = set()
while queue:
    x, y = queue.popleft()
    if px[x, y][3] >= 10:  # opak = Boundary erreicht
        continue
    display.add((x, y))
    for dx, dy in [(-1,0),(1,0),(0,-1),(0,1)]:
        nx, ny = x+dx, y+dy
        if 0 <= nx < W and 0 <= ny < H and (nx,ny) not in visited:
            visited.add((nx,ny))
            queue.append((nx, ny))

xs = sorted(set(p[0] for p in display))
ys = sorted(set(p[1] for p in display))
print(f"Display: {xs[-1]-xs[0]+1} x {ys[-1]-ys[0]+1} px at offset ({xs[0]}, {ys[0]})")
```

Vergleiche das Ergebnis mit der nativen Display-Auflösung des Geräts (Google: "iPhone 17 Pro screen resolution"). Wenn beide Werte exakt matchen, ist dein Bezel ein offizielles, unverändertes Asset.

> ⚠ **Stolperfalle:** Bei manchen Apple-Bezels lecken die Phone-Material-Pixel um 1 Pixel — dann erfasst der Flood-Fill versehentlich auch die Außenregion. Verwende **`alpha < 10`** als Boundary-Schwelle (nicht `< 30`) und constrain den Flood-Fill auf die Display-Bounding-Box, siehe Schritt 5.

---

## 3. Screen Recording aufnehmen

### Simulator vorbereiten

1. Xcode → Window → Devices and Simulators → einen iPhone-Simulator booten, dessen Modell zu deinem Bezel passt.
2. App im Simulator starten, **auf den Screen navigieren, den du aufnehmen willst**.
3. Wenn der Screen eine Loop-Animation hat (Carousel, Auto-Scroll), kurz warten bis die Animation in einem stabilen Rhythmus läuft.

### Recording starten

```bash
xcrun simctl io booted recordVideo --codec=h264 --force raw_recording.mov
```

- `--codec=h264` ist universal kompatibel, gut für Zwischenschritte.
- `--force` überschreibt vorhandene Datei.
- Recording läuft, bis du `Ctrl-C` drückst oder `kill -INT <pid>` schickst.

Aus einem Script heraus:

```bash
xcrun simctl io booted recordVideo --codec=h264 --force raw.mov &
REC_PID=$!
sleep 45                  # Aufnahmedauer: für 18-20s-Loops nimm 40-50s (2 volle Cycles)
kill -INT $REC_PID
wait $REC_PID 2>/dev/null
```

> 💡 **Faustregel:** Nimm immer **mindestens 2 volle Loop-Zyklen** auf. So kannst du den sauberen Loop-Start-Punkt zuverlässig finden (Schritt 4).

### Recording verifizieren

```bash
ffprobe -v error -select_streams v:0 \
  -show_entries stream=width,height,duration,avg_frame_rate \
  -of default=nw=1 raw.mov
```

Width/Height müssen mit dem inneren Bezel-Bereich übereinstimmen (z.B. 1206×2622). Die Framerate ist meist **variabel** (`avg_frame_rate` ist ein gemittelter Bruch wie `224560/90147`) — das wandeln wir gleich um.

### Variable Framerate normalisieren

`simctl` schreibt VFR (variable frame rate). Für sauberes Trimmen + Compositing brauchst du CFR (constant frame rate):

```bash
ffmpeg -y -i raw.mov -vf "fps=30" \
  -c:v libx264 -crf 16 -preset fast raw_30fps.mp4
```

Ab jetzt arbeite mit `raw_30fps.mp4`.

---

## 4. Loop-Punkt sauber bestimmen

Wenn dein Screen eine Loop-Animation hat (Carousel, Auto-Scroll), willst du genau **einen vollständigen Zyklus** schneiden — und der erste Frame des Schnitts muss visuell identisch mit dem letzten sein, sonst springt der Loop sichtbar.

### Algorithmus: Brute-Force-Suche per Pixel-Diff

```python
from PIL import Image
import glob

# Frames bei 8 fps aus dem normalisierten Recording extrahieren:
#   ffmpeg -y -i raw_30fps.mp4 -vf "fps=8,scale=300:-1" frames/f_%04d.jpg
frames = [Image.open(f).convert("RGB") for f in sorted(glob.glob("frames/f_*.jpg"))]

def diff(a, b):
    pa, pb = a.load(), b.load()
    w, h = a.size
    s, n = 0, 0
    for y in range(0, h, 4):
        for x in range(0, w, 4):
            ra,ga,ba = pa[x,y]; rb,gb,bb = pb[x,y]
            s += abs(ra-rb)+abs(ga-gb)+abs(ba-bb); n += 1
    return s / n

# Erwartete Loop-Länge im Bereich von z.B. 15-22s → bei 8fps = 120-176 frames
best = (1e9, None, None)
for ref_idx in range(0, 32):              # Referenz-Frame in den ersten 4s
    for loop_len in range(120, 176):       # Loop-Länge in Frames
        if ref_idx + loop_len >= len(frames): continue
        d = diff(frames[ref_idx], frames[ref_idx + loop_len])
        if d < best[0]:
            best = (d, ref_idx, loop_len)

d, ref_idx, loop_len = best
print(f"Loop: start={ref_idx/8:.2f}s, length={loop_len/8:.2f}s, diff={d:.2f}")
```

- **Diff < 5** = praktisch perfekt, der Loop ist visuell unsichtbar.
- **Diff 5-15** = noch okay.
- **Diff > 20** = Loop ist wahrscheinlich nicht da, wo du gesucht hast, oder die Animation ist nicht periodisch.

### Loop schneiden

```bash
ffmpeg -y -ss 3.75 -i raw_30fps.mp4 -t 20.0 \
  -c:v libx264 -crf 16 -preset fast loop.mp4
```

`-ss 3.75 -t 20.0` = schneide ab Sekunde 3.75, Länge 20 Sekunden. Ersetz das durch die von der Python-Suche gefundenen Werte.

---

## 5. Display-Form-Maske generieren

Hier passiert das Wichtigste — und hier sind die größten Stolperfallen.

**Warum brauchen wir eine Maske?** Das Recording ist ein **rechteckiges Video** (z.B. 1206×2622). Das echte iPhone-Display ist **gerundet** (Eck-Radius + Dynamic Island Aussparung). Wenn du das Recording einfach unter das Bezel-PNG legst, schauen die rechteckigen Eck-Pixel hinter der gerundeten Bezel-Form heraus und sehen aus wie "weiße Blatt-Ecken hinterm iPhone". Die Maske beschneidet das Video auf die gerundete Display-Form.

### Maske aus dem Bezel-Alpha extrahieren

```python
from PIL import Image, ImageFilter
from collections import deque

BEZEL_PNG  = "iPhone 17 Pro - Cosmic Orange - Portrait.png"
# Display-Bounding-Box im Bezel (aus Schritt 2 ermittelt)
LEFT, TOP, RIGHT, BOTTOM = 72, 69, 1278, 2691  # rechts/unten exklusiv

im = Image.open(BEZEL_PNG).convert("RGBA")
px = im.load()
W, H = im.size

# CONSTRAINED Flood-Fill: nur innerhalb der Display-Bounding-Box,
# nur Pixel mit alpha < 10 (strikter Rand)
display = set()
seed = (W // 2, H // 2)
visited = {seed}
queue = deque([seed])
while queue:
    x, y = queue.popleft()
    if px[x, y][3] >= 10:
        continue
    display.add((x, y))
    for dx, dy in [(-1,0),(1,0),(0,-1),(0,1)]:
        nx, ny = x+dx, y+dy
        # WICHTIG: auf Display-Box beschränken, sonst leakt der Flood-Fill
        # durch Sub-Pixel-Lücken im Bezel ins Außen-Transparent
        if LEFT <= nx < RIGHT and TOP <= ny < BOTTOM and (nx,ny) not in visited:
            visited.add((nx, ny))
            queue.append((nx, ny))

# Maske mit Größe = Display-Box (NICHT Bezel-Größe!)
mask = Image.new("L", (RIGHT - LEFT, BOTTOM - TOP), 0)
mp = mask.load()
for (x, y) in display:
    mp[x - LEFT, y - TOP] = 255

# Leichter Blur glättet sub-pixel-Anti-Aliasing.
# KEINE Erosion — die brauchst du nur, wenn du am Ende stark herunterskalierst
# (siehe Stolperfalle Chroma-Bleed in Schritt 7).
mask.filter(ImageFilter.GaussianBlur(radius=0.6)).save("display_mask.png")
```

### Was die zwei "WICHTIG"-Kommentare bedeuten

**1. `alpha < 10` statt `< 30`:**
Der Flood-Fill braucht eine harte Grenze. Wenn du `< 30` nimmst, behandelt der Algorithmus halbtransparente Anti-Aliasing-Pixel als "Display" und die Maske ist 1-2 Pixel zu groß → Video scheint über die Bezel-Rundung raus.

**2. Constrained auf Display-Box:**
Offizielle Apple-Bezels haben gelegentlich **1-Pixel-Lücken** im Phone-Material-Ring (Encoding-Artefakte des Original-Renders). Ein unconstrained Flood-Fill quillt durch so eine Lücke aus dem Display heraus in die Außenregion und markiert dort Pixel als "Display". Resultat: Die Maske beschneidet das Video an einer Ecke korrekt, an einer anderen Ecke gar nicht. Sieht aus wie ein Bug nur an EINER Ecke — ist es aber nicht, das ist Flood-Fill-Leak. Die Constraint auf die Display-Box garantiert, dass die Maske nicht raus kann.

### Maske visuell verifizieren

```python
mask.save("mask_check.png")
```

Öffne das PNG. Du musst sehen:
- **Weiße gerundete Rechteck-Form** (das Display)
- **Schwarze Dynamic-Island-Cutout** oben
- **Schwarze gerundete Ecken**

Wenn irgendwo asymmetrisch ist oder eine Ecke fehlt → die Bezel-Box-Werte sind falsch oder der Bezel hat einen Defekt; Recording wird an dieser Stelle leaken.

---

## 6. Compositing: Video × Maske + Bezel

Drei Layer von unten nach oben:

1. **Transparenter Canvas** in Bezel-Größe (z.B. 1350×2760)
2. **Video × Display-Maske** an Offset (LEFT, TOP) → nur Display-Form sichtbar
3. **Bezel-PNG** als Overlay → Bezel-Material auf dem Frame

### Der eine ffmpeg-Befehl

```bash
ffmpeg -y \
  -i loop.mp4 \
  -loop 1 -i display_mask.png \
  -i "iPhone 17 Pro - Cosmic Orange - Portrait.png" \
  -filter_complex "
    [0:v]format=rgba,setpts=PTS-STARTPTS[vid];
    [1:v]format=gray,setpts=PTS-STARTPTS[mask];
    [vid][mask]alphamerge[masked];
    color=c=black@0:s=1350x2760:r=30:d=20,format=yuva420p[bg];
    [bg][masked]overlay=72:69:shortest=1:format=auto[bgvid];
    [bgvid][2:v]overlay=0:0:format=auto[out]
  " \
  -map "[out]" -an \
  -c:v libvpx-vp9 -pix_fmt yuva420p -b:v 0 -crf 28 \
  -row-mt 1 -threads 4 \
  master.webm
```

Anpassen:
- `1350x2760` → deine Bezel-Größe
- `overlay=72:69` → dein `(LEFT, TOP)` Offset
- `d=20` → Länge deines Loops in Sekunden
- `r=30` → Framerate (passend zu deinem CFR-Recording)

### Was die Filter machen

| Filter | Was passiert |
|---|---|
| `[0:v]format=rgba` | Video als RGBA interpretieren |
| `[1:v]format=gray` | Maske als Single-Channel Y |
| `alphamerge` | Y-Wert der Maske wird zum Alpha des Videos → außerhalb der Display-Form transparent |
| `color=…@0` | Transparenter schwarzer Canvas (Bezel-Größe, 20s Dauer, 30fps) |
| `overlay=72:69:shortest=1` | Maskiertes Video an (72,69) auf Canvas — `shortest=1` stoppt nach Video-Ende |
| `overlay=0:0` | Bezel-PNG als Top-Layer |

### Verifikation: Magenta-Test

Render einen einzelnen Frame auf knall-magenta Background — jeder nicht-magenta Pixel außerhalb des iPhones ist ein Leak:

```bash
ffmpeg -y -c:v libvpx-vp9 -i master.webm -ss 5 -frames:v 1 \
  -filter_complex "color=c=#ff00ff:s=1350x2760,format=rgba[bg];
                   [bg][0:v]overlay=0:0:format=auto" \
  magenta_check.png
```

Öffne `magenta_check.png` und zoom in alle vier Ecken. Du musst sehen:
- iPhone sauber gerundet
- Magenta-Background klar getrennt vom Phone-Material durch die schwarze Inner-Lip
- Keine weißen/grauen Pixel, die über die Rundung herausragen

Wenn doch — siehe [Troubleshooting](#9-troubleshooting).

---

## 7. Web-Versionen rendern

Web-Browser unterstützen **kein H.264 mit Alpha-Channel** (kein "MP4 mit Transparenz"). Du brauchst zwei Formate, die der Browser parallel anbietet:

| Codec | Container | Browser | Datei-Endung |
|---|---|---|---|
| **VP9 + Alpha** | WebM | Chrome, Firefox, Edge (Safari 16+) | `.webm` |
| **HEVC + Alpha** | QuickTime/MP4 | Safari (alle Versionen mit Alpha-Support) | `.mov` |

### WebM (VP9 mit Alpha) für Chrome/Firefox/Edge

```bash
ffmpeg -y -c:v libvpx-vp9 -i master.webm \
  -vf "scale=1080:2208:flags=lanczos" \
  -an \
  -c:v libvpx-vp9 -pix_fmt yuva420p -b:v 0 -crf 34 \
  -row-mt 1 -threads 4 \
  iphone-spotlight.webm
```

### HEVC `.mov` mit Alpha für Safari

```bash
# Master HEVC zuerst (aus dem master.webm)
ffmpeg -y -c:v libvpx-vp9 -i master.webm \
  -an \
  -c:v hevc_videotoolbox -alpha_quality 0.85 -q:v 65 \
  -tag:v hvc1 -allow_sw 1 \
  master.mov

# Web-optimierte Version
ffmpeg -y -i master.mov \
  -vf "scale=1080:2208:flags=lanczos" \
  -an \
  -c:v hevc_videotoolbox -alpha_quality 0.80 -q:v 55 \
  -tag:v hvc1 -allow_sw 1 \
  iphone-spotlight.mov
```

> 🔴 **Stolperfalle Chroma-Bleed:** Wenn du auf eine deutlich kleinere Auflösung herunterskalierst (z.B. von 1350×2760 auf 720×1472 = 1.875× Downscale), bleed't beim Chroma-Subsampling (`yuva420p`) der weiße App-Hintergrund über die schwarze Bezel-Inner-Lip. Sichtbar als "verwaschene Display-Ecke". Lösung: **nicht stark herunterskalieren**. 1080×2208 hat 1.25× Downscale und bleibt sauber. Wenn du kleiner brauchst, render in `yuva444p` (kein Chroma-Subsampling, aber Browser-Support einschränkter) oder verkleinere die Display-Maske um 4-12 Pixel via Erosion (`mask.filter(ImageFilter.MinFilter(9))` für 4px).

> 💡 **KEIN MP4 mit H.264 als Fallback verwenden.** H.264 hat keinen Alpha-Channel — die Datei zeigt einen opaken schwarzen Rahmen ums iPhone. Wenn dein Site-Background nicht schwarz ist, sieht das schlimm aus. Die zwei Sources oben decken alle modernen Browser ab.

### Dateigrößen — Richtwerte für 20s Loop bei 1080×2208

- WebM (VP9, CRF 34): ~2-3 MB
- HEVC `.mov` (Q 55): ~5-6 MB

Wenn das zu groß ist, erhöhe `crf` (WebM) / `q:v` (HEVC). Qualitäts-Sweet-Spot liegt meistens bei `crf 36` / `q 60`.

---

## 8. HTML/CSS-Integration (die größte Stolperfalle)

Das hier hat in unserer realen Session **die meiste Zeit gekostet** — nicht das Video, sondern das HTML drumrum. Die Files können perfekt sein, und du siehst trotzdem weiße Rechteck-Ecken hinter dem iPhone. Hier ist warum:

### Minimal-Setup das funktioniert

```tsx
function IPhonePreview() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => { videoRef.current?.play().catch(() => undefined); }, []);

  return (
    <div className="aspect-[1350/2760] w-full">
      <video
        ref={videoRef}
        className="h-full w-full object-contain"
        autoPlay muted loop playsInline preload="auto"
      >
        {/* Reihenfolge wichtig: Safari nimmt den ersten Treffer */}
        <source src="/iphone-spotlight.mov"  type='video/mp4; codecs="hvc1"' />
        <source src="/iphone-spotlight.webm" type="video/webm" />
      </video>
    </div>
  );
}
```

### Die drei Don'ts

**❌ Don't 1: `next/image` (oder ähnliche Image-Optimizer) für Alpha-PNGs**

Wenn du ein PNG-Standbild als Poster verwenden willst (`<Image src="/poster.png" />`), wird Next.js das in WebP/AVIF re-encoden. **In einigen Setups verliert dabei der Alpha-Channel** — Resultat: das gerenderte Bild ist ein opakes weißes Rechteck unter dem transparenten Video. Sieht aus wie "ein weißes Blatt Papier liegt unter dem iPhone, und die Ecken des Blattes ragen hinter den gerundeten Ecken raus".

Wenn du unbedingt ein Poster willst:
- Nutze das native `<video poster="/poster.webp">` Attribut (Browser optimiert nichts)
- ODER `<Image>` mit `unoptimized={true}` und direkt `.webp` als Source

**❌ Don't 2: H.264 MP4 als Fallback**

Hatten wir oben schon — der opake schwarze Rahmen ist hässlich.

**❌ Don't 3: Container mit Background-Color**

Wenn das `<div>` um das Video einen `background-color` hat (auch versehentlich durch CSS-Reset oder Theme), scheint der durch die transparenten Außenbereiche des Videos. Container muss **vollständig transparent** sein.

### Die zwei Do's

**✅ Do 1: `aspect-ratio` matchen**

Das `<div>` um das Video MUSS dieselbe Aspect-Ratio wie das Video haben, sonst macht `object-contain` ein Letterboxing und ein Teil des Containers ist leer. Verwende `aspect-[1350/2760]` (oder dein Bezel-Verhältnis).

**✅ Do 2: Bei Drop-Shadow auf Browser achten**

`filter: drop-shadow(...)` folgt dem Alpha-Channel des Videos in Chrome zuverlässig. In Safari mit HEVC-Alpha-Video gelegentlich nicht — Schatten erscheint als Rechteck statt iPhone-Form. Workaround: Schatten auf ein separates Element legen, das nur die opaken Pixel hat (z.B. ein zweites Element mit Mask-Image). Oder Schatten ganz weglassen — bei sauber gerundetem iPhone sieht man's eh kaum.

### Diagnose-Reihenfolge wenn weiße/farbige Ecken auftauchen

1. **Öffne das Video-File direkt im Browser** (`http://localhost:3000/case-studies/iphone-spotlight.webm`). Wenn dort schon Leaks sind → Video-File ist kaputt, zurück zu Schritt 5/6.
2. **Wenn das direkte File sauber ist:** Problem liegt im HTML/CSS. Suche in dieser Reihenfolge:
   - Wird ein next/image Poster verwendet? → entferne es
   - Hat irgendein Parent-Container `bg-white` oder `background: white`? → entferne
   - Wird im Komponenten-Layer noch ein Image/SVG/Element hinter dem Video gerendert? → entferne

---

## 9. Troubleshooting

### Weiße/rechteckige Ecken im Master-Video

Magenta-Test zeigt Leaks → die **Display-Maske ist nicht groß genug** oder hat falsche Form.

- Lass dir `display_mask.png` als Bild ausgeben und prüfe visuell: gerundete Ecken? Dynamic Island ausgeschnitten?
- Wenn die Maske nur an EINER Ecke leakt → Flood-Fill ist durch eine Bezel-Pixel-Lücke nach außen gequollen. Schau, ob deine Constraint auf die Display-Box im Code drin ist (Schritt 5).
- Wenn alle Ecken leaken → `(LEFT, TOP, RIGHT, BOTTOM)` falsch. Nochmal vermessen (Schritt 2).

### Loop springt sichtbar

Loop-Suche hat den falschen Punkt gefunden:
- Diff war > 10 → Animation ist nicht streng periodisch. Such einen anderen Bereich oder akzeptiere einen kleinen Sprung mit Crossfade: `-vf "fade=t=in:st=0:d=0.3,fade=t=out:st=19.7:d=0.3"`
- Diff war < 5, aber sieht trotzdem komisch aus → CFR-Konvertierung in Schritt 3 vergessen? Bei VFR sind Schnitt-Zeitpunkte ungenau.

### Video flackert / bricht in Safari

- Stelle sicher dass `.mov` mit `-tag:v hvc1` getaggt ist (nicht `hev1`) — Safari ist da pingelig.
- Verifiziere Alpha: `ffmpeg -i your.mov -ss 5 -frames:v 1 -pix_fmt rgba test.png` und check `(5,5)` → muss alpha=0 sein.

### "Weißes Blatt Papier"-Effekt trotz sauberem Master

Klassiker — der HTML-Layer killt die Transparenz. Diagnose siehe Schritt 8.

### Datei zu groß

- VP9 WebM: `-crf 36` bis `-crf 40` (höher = kleiner)
- HEVC mov: `-q:v 60` bis `-q:v 70`
- Auflösung runter (z.B. 900×1840) — aber Achtung Chroma-Bleed, eventuell Maske dann um 4-6 Pixel erodieren

### Recording-Maus / Recording-Indikator drin

Du hast vergessen, das Recording vor Start sauber zu starten — der Recording-Pille im Status-Bar wird mit aufgenommen. Im Simulator: Hardware → Erase All Content and Settings, dann neu booten, App starten, dann Recording.

---

## 10. Cheat-Sheet für Modell/Bezel-Maße

| Gerät | Bezel-PNG Größe | Inner Display | Offset |
|---|---|---|---|
| iPhone 17 Pro | 1350 × 2760 | 1206 × 2622 | (72, 69) |
| iPhone 16 Pro | analog, eigene Messung empfohlen | 1206 × 2622 | analog |
| iPhone 15 Pro | analog | 1179 × 2556 | analog |
| iPad Pro 13" | analog | 2064 × 2752 | analog |

**Verlass dich NIE auf diese Tabelle blind**, wenn dein Bezel von einer anderen Quelle kommt — vermisst die Maße immer mit dem Python-Snippet aus Schritt 2.

---

## TL;DR Befehlsabfolge

```bash
# 1. Recording
xcrun simctl io booted recordVideo --codec=h264 --force raw.mov &
sleep 45; kill -INT $!

# 2. CFR
ffmpeg -y -i raw.mov -vf "fps=30" -c:v libx264 -crf 16 raw_30.mp4

# 3. Loop schneiden (Werte aus Python-Suche)
ffmpeg -y -ss 3.75 -i raw_30.mp4 -t 20 -c:v libx264 -crf 16 loop.mp4

# 4. Maske (Python-Snippet aus Schritt 5 ausführen) → display_mask.png

# 5. Compositing → master.webm (ffmpeg-Befehl aus Schritt 6)

# 6. Web-Versionen
ffmpeg -y -c:v libvpx-vp9 -i master.webm \
  -vf "scale=1080:2208:flags=lanczos" -an \
  -c:v libvpx-vp9 -pix_fmt yuva420p -b:v 0 -crf 34 \
  web.webm

ffmpeg -y -c:v libvpx-vp9 -i master.webm -an \
  -c:v hevc_videotoolbox -alpha_quality 0.85 -q:v 65 \
  -tag:v hvc1 -allow_sw 1 master.mov

ffmpeg -y -i master.mov -vf "scale=1080:2208:flags=lanczos" -an \
  -c:v hevc_videotoolbox -alpha_quality 0.80 -q:v 55 \
  -tag:v hvc1 -allow_sw 1 web.mov

# 7. Magenta-Verifikation
ffmpeg -y -c:v libvpx-vp9 -i web.webm -ss 5 -frames:v 1 \
  -filter_complex "color=c=#ff00ff:s=1080x2208,format=rgba[bg];
                   [bg][0:v]overlay=0:0:format=auto" check.png
# → check.png in allen 4 Ecken auf Leaks prüfen

# 8. HTML einbinden mit BEIDEN sources (.mov zuerst!),
#    KEIN next/image Poster, KEIN H.264 Fallback
```

---

**Letzte Empfehlung:** Wenn du das öfter machst, automatisier die Schritte 4-7 als Shell-Script. Schritt 2 (Maße ermitteln) machst du einmal pro Bezel-Modell und schreibst die Werte ins Script.
