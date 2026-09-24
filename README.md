# lukaskaffer.com

Persönliche Portfolio-Website von Lukas Kaffer. Die Seite positioniert ihn als
AI-native Product Builder mit Bildungshintergrund und belegt die Arbeitsweise an
zwei Live-Projekten:

- **Indeed Unique** (Kundenprojekt): Website eines Tanzstudios in Wien und
  Mödling mit Astro, Sanity CMS zum Selbstpflegen, Eversports-Buchung und
  Hosting auf Cloudflare. Der Footer von indeedunique.com verlinkt hierher.
- **Vienna Event Radar** (eigenes Produkt): Next.js-Webprodukt,
  Supabase-Backend, Research- und Review-Workflow sowie native SwiftUI-App im
  App Store.

## Stack

- Next.js App Router, React und TypeScript
- Tailwind CSS
- Web3Forms für das Kontaktformular
- Vercel als Zielumgebung

## Lokal starten

```bash
npm install
npm run dev
```

Vor einem Release prüft `npm run check` nacheinander ESLint, TypeScript und den
Production-Build.

## Inhaltsprinzipien

- Öffentliche Produktbelege vor generischen Fähigkeitslisten
- Keine behaupteten Reichweiten- oder Nutzungszahlen ohne dokumentierte Quelle
- AI-assisted Development transparent benennen; Scope, Datenfluss,
  Architekturentscheidungen, Validierung und Deployment bleiben in Lukas'
  Verantwortung
- Konzeptarbeiten klar als fiktiv kennzeichnen und nicht als Kundenarbeit zeigen

## Struktur

- `app/_home/` – Startseite: Kopfzeile mit Kurzbeschreibung, Headline, vier
  Links, ein Button und der Showcase (`showcase.tsx`). Monitor und iPhone
  wechseln ohne Beschriftung selbständig zwischen den Projekten; jedes bleibt so
  lange, wie seine Aufnahmen dauern (`durationMs` in `app/media.ts`), mit
  weicher Überblendung. Die Projekte wechseln strikt abwechselnd und pausieren
  bewusst nicht bei Hover; bei reduzierter Bewegung läuft nichts automatisch. Desktop ist ein fester
  Einzelbildschirm.
- `app/_components/button-styles.ts` – einheitlicher Hover nach dem Vorbild von
  Indeed Unique: keine Füllfarbe, ein Teal-Rahmen zieht sich von außen zusammen.
- `app/_components/` – gemeinsame Bausteine (Seitenrahmen, Formular,
  Autoplay-Video, iPhone-Rahmen)
- `app/projects-data.ts` – eine Quelle für Projekte (Startseite, Case Studies,
  Sitemap) und die drei Einträge der Showcase-Seite (`showcaseEntries`)
- `app/media.ts` – Bildschirmaufnahmen (H.264-MP4 plus Poster)
- `app/(pages)/` – alle Unterseiten in einer Route-Gruppe. Ihr `layout.tsx` hält
  Kopfzeile, Hero (`subpage-hero.tsx`, feste Höhe) und Fußzeile beim
  Seitenwechsel stehen; nur Texte, Bild und Inhalt darunter wechseln.
  `work/` enthält Showcase-Übersicht und Case Studies.

Das iPhone ist Apples offizieller iPhone-17-Pro-Rahmen
(`public/devices/iphone-17-pro-frame.png`). Die Aufnahme liegt darunter und wird
per Maske aus dem Alpha-Kanal des Rahmens auf die Displayform zugeschnitten.
Desktop- und Handy-Aufnahme eines Projekts sind gleich lang (Vienna Event
Radar 26,4 s = das komplette App-Video, Indeed Unique 27 s mit Einstiegsanimation,
Schaukasten, Eversports-Stundenplan und Videoarchiv). Websites werden
mit `scripts/record-site.mjs` aufgenommen; die Abläufe liegen als Konfiguration
in `scripts/recordings/*.json`. Das Skript spielt CSS-Animationen verlangsamt
ab, taktet `requestAnimationFrame` und `performance.now()` der Seite selbst und
erfasst Bilder in festen Abständen – Scrollen, Modals und die 3D-Galerie laufen
dadurch bei 30 fps ruckelfrei (Desktop 1152 × 720, iPhone 402 × 812 pt). Der
App-Clip von Vienna Event Radar ist die komplette Szenenfolge des
App-Store-Vorschauvideos im iOS-Repo (`Marketing/wer-reels/src/AppPreview.tsx`,
`SCENES`), gerendert ohne Texte, Rahmen und Musik; die App-Screens stammen aus
`AppStorePreviews/final/`.

## Routen

- `/work` – Showcase: Website Indeed Unique, Plattform Vienna Event Radar, iOS-App
- `/work/indeed-unique` – Case Study Indeed Unique
- `/work/vienna-event-radar` – Case Study Vienna Event Radar
- `/about` – Profil und Arbeitsweise
- `/services` – Leistungsrahmen
- `/faq` – Fragen zur Zusammenarbeit
- `/contact` – Kontaktformular und E-Mail
- `/impressum` – Betreiberangaben und Offenlegung
- `/datenschutz` – Datenverarbeitung, Dienste und Betroffenenrechte

Die alte Clinic-Konzeptstudie ist nicht Teil des veröffentlichten Portfolios.
Aufrufe von `/clinic` und `/clinic/index.html` werden auf `/work` umgeleitet;
die Quelldateien bleiben für eine mögliche spätere Überarbeitung im Repository.
