# lukaskaffer.com

Persönliche Portfolio-Website von Lukas Kaffer. Die Seite positioniert ihn als
AI-native Product Builder mit Bildungshintergrund und belegt die Arbeitsweise an
zwei Live-Projekten:

- **Indeed Unique**: Website eines Tanzstudios in Wien und
  Mödling mit Astro, Sanity CMS zum Selbstpflegen, Eversports-Buchung und
  Hosting auf Cloudflare. Der Footer von indeedunique.com verlinkt hierher.
- **Vienna Event Radar**: Next.js-Webprodukt,
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
  bewusst nicht bei Hover; bei reduzierter Bewegung läuft nichts automatisch.
  Desktop ist ein fester Einzelbildschirm.
- `app/_components/button-styles.ts` – einheitlicher Hover nach dem Vorbild von
  Indeed Unique: keine Füllfarbe, ein Teal-Rahmen zieht sich von außen zusammen.
- `app/_components/` – gemeinsame Bausteine (Seitenrahmen, Formular,
  Autoplay-Video, iPhone-Rahmen)
- `app/projects-data.ts` – eine Quelle für Projekte (Startseite, Case Studies,
  Sitemap), die iOS-App (`iosApp`) und die drei Einträge der Showcase-Seite
  (`showcaseEntries`)
- `app/media.ts` – Bildschirmaufnahmen (H.264-MP4 plus Poster)
- `app/services-data.ts` – Leistungen-Seite: drei Produktformen (Websites,
  Web-Apps, iOS-Apps), jede mit Standbild aus einem Live-Projekt, und die fünf
  Schritte von „Launch inklusive“. Die Formen stehen als Sprunglinks im Hero.
- `app/(pages)/` – alle Unterseiten in einer Route-Gruppe. Ihr `layout.tsx` hält
  Kopfzeile, Hero (`subpage-hero.tsx`, feste Höhe) und Fußzeile beim
  Seitenwechsel stehen; nur Texte, Bild und Inhalt darunter wechseln.
  `work/` enthält Showcase-Übersicht und Case Studies. Case Studies teilen sich
  Rahmen (`case-study-page.tsx`: Titel, Eckdaten, Links, Medien) und Bausteine
  (`case-study-blocks.tsx`); Abschnitte zeigen zuerst das Produkt und kommen
  ohne Eyebrow-Labels aus. Zahlen nur mit Quelle in der Projektdoku.

Das iPhone ist Apples offizieller iPhone-17-Pro-Rahmen
(`public/devices/iphone-17-pro-frame.png`). Die Aufnahme liegt darunter und wird
per Maske aus dem Alpha-Kanal des Rahmens auf die Displayform zugeschnitten.
Desktop- und Handy-Aufnahme eines Projekts sind gleich lang (Vienna Event
Radar 26,4 s = das komplette App-Video, Indeed Unique 28,6 s mit Einstiegsanimation,
Schaukasten, Eversports-Stundenplan und Videoarchiv). Websites werden
mit `scripts/record-site.mjs` aufgenommen; die Abläufe liegen als Konfiguration
in `scripts/recordings/*.json`. Das Skript spielt CSS-Animationen verlangsamt
ab, taktet `requestAnimationFrame` und `performance.now()` der Seite selbst und
erfasst Bilder in festen Abständen – Scrollen, Modals und die 3D-Galerie laufen
dadurch bei 30 fps ruckelfrei (Desktop 1152 × 720 mit `"scale": 2`, ausgeliefert
als 1440 × 900; iPhone 402 × 874 pt, ausgeliefert als 540 × 1174). Der
App-Clip von Vienna Event Radar ist die komplette Szenenfolge des
App-Store-Vorschauvideos im iOS-Repo (`Marketing/wer-reels/src/AppPreview.tsx`,
`SCENES`), gerendert ohne Texte, Rahmen und Musik; die App-Screens stammen aus
`AppStorePreviews/final/`.

## Routen

- `/work` – Showcase: Website Indeed Unique, Plattform Vienna Event Radar, iOS-App
- `/work/indeed-unique` – Case Study Indeed Unique
- `/work/vienna-event-radar` – Case Study Vienna Event Radar (Webplattform)
- `/work/wien-event-radar-ios` – Case Study Wien Event Radar für iOS
- `/about` – Profil und Arbeitsweise
- `/services` – Leistungen: Websites, Web-Apps, iOS-Apps und der Weg bis zum Launch
- `/faq` – Fragen zur Zusammenarbeit
- `/contact` – Kontaktformular und E-Mail
- `/impressum` – Betreiberangaben und Offenlegung
- `/datenschutz` – Datenverarbeitung, Dienste und Betroffenenrechte

Die Clinic-Konzeptstudie (Aurea Clinic) ist keine eigene Seite: Aufrufe von
`/clinic` und `/clinic/index.html` werden auf `/work` umgeleitet. Ein Ausschnitt
daraus (`public/case-studies/aurea/treatments.jpg`) ist das Vorschaubild für
Websites im Hero der Leistungen-Seite.

Die Einstiegsanimation von Indeed Unique liegt als eigener Clip vor
(`public/case-studies/indeed-unique/entry.mp4`, 2304 × 1440, aufgenommen mit
`scripts/recordings/iu-entry.json` und `"scale": 2`). Clips, die groß gezeigt
werden, in doppelter Auflösung aufnehmen: Auf 4K-Monitoren mit 1920er-Skalierung
wirken 1152-px-Aufnahmen sonst unscharf. Ausgeliefert werden die Clips mit
1440 × 900.

Die Touren von Indeed Unique entstehen aus mehreren Aufnahmen, verbunden mit
ffmpeg `xfade` (0,6 s): Desktop = `iu-home` + `iu-schedule` + `iu-videos` (auf 222
Bilder gekürzt), iPhone = `iu-mobile` + `iu-mobile-schedule`. Ändert sich die
Einstiegsanimation auf indeedunique.com, müssen `iu-entry`, `iu-home` und
`iu-mobile` neu aufgenommen werden.

Die Aufnahme-Uhr folgt der Dokument-Zeitleiste, die `Animation.setPlaybackRate`
zusammen mit allen CSS-Animationen verlangsamt. `requestAnimationFrame`,
`performance.now()` und Timer sehen damit dieselbe Zeit wie die CSS-Animationen –
wichtig für Seiten, die eine Canvas-Animation an CSS-Animationen ausrichten (der
Einstieg von Indeed Unique rechnet Figur-Zeit = rAF-Zeit − `animation.startTime`).
Eine eigene Uhr lief dort rund 160 ms vor, die Figur landete vor dem Schriftring.
Gegenprobe: `?frame=<Sekunden>` im Dev-Server von Indeed Unique zeigt das Soll-Bild.
Der Recorder lässt auch `setTimeout` und `setInterval` der Seite auf seiner
Aufnahme-Uhr laufen. Früher liefen Timer in Echtzeit, während die Animationen
sechsfach verlangsamt waren: Die Einstiegsanimation brach dadurch ab (die
Startseite sprang auf), die Filmgalerie zuckte. Stundenplan-Aufnahmen starten mit
`"startAt": "dom"`, damit die Hero-Animation der Seite mit drauf ist.

Weitere Clips der Case Study Indeed Unique:
- `news.mp4` (`iu-news.json`): Startseite mit `?entry=0`, Scroll-Snapping per
  `eval` abgeschaltet, Plakate Beitrag für Beitrag, dann das Regal nach rechts.
- `entry.mp4` endet, kurz bevor sich das Logo auflöst (die ersten 120 Bilder).
- `archive.mp4` (`iu-archive.json`): 3D-Filmgalerie, langsam gescrollt; die
  ersten 100 Bilder (Seitenkopf) sind beim Kodieren weggelassen. Die Galerie
  rastet 160 ms nach dem letzten Scroll per `setTimeout` ein; der Scroll endet
  deshalb genau auf einem Film (1182 px).
- `booking.mp4`: drei Aufnahmen (`iu-book-schedule`, `iu-book-prices`,
  `iu-book-voucher`), mit ffmpeg `xfade` (0,6 s) zu einem Clip verbunden.
  Klicks in Eversports-Widgets laufen über eine Suche durch die Shadow-DOMs;
  die Motiv-Kacheln des Gutschein-Widgets reagieren darauf nicht.
