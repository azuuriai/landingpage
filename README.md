# lukaskaffer.com

**English summary.** Portfolio site of Lukas Kaffer, a web and iOS developer in
Vienna who designs, builds and ships end to end. Built with Next.js (App Router),
React, TypeScript and Tailwind, deployed on Vercel. The site shows four live
pieces of work, each with its own case study and screen recordings:

- **Indeed Unique** – dance studio website (Astro, Sanity CMS edited by the
  studio team, Eversports booking, Cloudflare)
- **Vienna Event Radar** – event platform for Vienna (Next.js, Supabase,
  scheduled jobs, admin area, AI assistant)
- **Wien Event Radar for iOS** – native SwiftUI app on the App Store
  (widgets, Live Activities, maps)
- **Operations app** – internal SwiftUI tool that runs the platform from an
  iPhone, including a semi-automated social media studio

The rest of this README is in German.

## Überblick

Persönliche Portfolio-Website von Lukas Kaffer, Web- und iOS-Entwickler in
Wien: Er gestaltet, baut und veröffentlicht Websites, Web-Apps und iOS-Apps.
Die Seite belegt die Arbeitsweise an vier Live-Projekten:

- **Indeed Unique**: Website eines Tanzstudios in Wien und Mödling mit Astro,
  Sanity CMS zum Selbstpflegen, Eversports-Buchung und Hosting auf Cloudflare.
  Der Footer von indeedunique.com verlinkt hierher.
- **Vienna Event Radar**: Next.js-Webprodukt mit Supabase-Backend, Research- und
  Review-Workflow, Admin-Bereich und Assistent.
- **Wien Event Radar für iOS**: native SwiftUI-App im App Store mit Widgets,
  Live-Aktivität und Karte.
- **Operations-App**: internes SwiftUI-Werkzeug, mit dem die Plattform vom
  iPhone aus betrieben wird, inklusive halbautomatischem Social-Media-Studio.

## Stack

- Next.js App Router, React und TypeScript
- next-intl für das Routing der zwei Sprachen
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

## Sprachen

Die Site gibt es auf Deutsch und Englisch. Deutsch bleibt an der Wurzel
(`/services`), Englisch liegt unter `/en` (`/en/services`); nur die Rechtsseiten
haben übersetzte Slugs (`/impressum` ↔ `/en/imprint`, `/datenschutz` ↔
`/en/privacy`). Niemand wird nach Browsersprache umgeleitet: Besucher wählen
über den Umschalter `DE / EN` in der Kopfzeile, der immer auf dieselbe Seite in
der anderen Sprache führt. `/en`-Links lassen sich direkt teilen, etwa im
Upwork-Profil.

- `i18n/routing.ts` – Sprachen, Präfix-Regel und die Liste aller internen
  Pfade (`pathnames`). Interne Links nutzen `Link` aus `i18n/navigation.ts`,
  damit Präfix und übersetzte Slugs stimmen; `usePathname()` von dort liefert
  den internen Pfad ohne Präfix. Einzige Ausnahme ist der Umschalter selbst:
  Er baut seine Ziele mit `getPathname()` und nutzt `next/link`, weil
  next-intls `Link` mit `locale`-Prop das Präfix immer erzwingen würde
  (`/de/about` statt `/about`).
- `proxy.ts` – bildet die öffentlichen URLs auf das Segment `app/[locale]` ab
  (`/services` → `/de/services`, `/de/services` leitet auf `/services` um).
- `app/content/de/` und `app/content/en/` – jeder Text der Site, je Sprache ein
  Satz Module (`site`, `pages`, `projects`, `services`, `case-studies`,
  `legal`). `app/content/types.ts` gibt die Form vor, deshalb fehlt in keiner
  Sprache ein Text. Was in beiden Sprachen gleich ist (Pfade, Daten,
  Aufnahmen, Bilddateien), liegt in `app/projects-data.ts`,
  `app/services-data.ts` und `app/detail-pages-data.ts` und wird in die
  Sprachmodule hineingespreizt.
- Server-Komponenten holen sich `getContent(locale)`; Client-Komponenten
  bekommen nur die Strings, die sie brauchen, als Props. So landet die jeweils
  andere Sprache nicht im Browser-Bundle.
- Unbekannte Pfade fängt `app/[locale]/(pages)/[...rest]` und zeigt die
  übersetzte 404-Seite im Seitenrahmen. Next liefert solche dynamischen 404s
  als leere Fehler-Hülle aus und rendert die Seite erst im Browser; Status
  404 und Texte stimmen, das erste HTML hat aber kein `lang`. Ein
  serverseitig gerendertes 404 bräuchte Nexts experimentelles
  `global-not-found`.
- Jede Seite trägt `canonical`, `hreflang` für `de`, `en` und `x-default`
  (zeigt auf Englisch), das OG-Bild je Sprache (`/opengraph-image/de|en`) und
  steht zweimal in der Sitemap. JSON-LD und `<html lang>` folgen der Sprache.
- Die englische Fassung ist eine Lokalisierung, keine Übersetzung: US-Englisch,
  Wien als Ort in Österreich, Remote-Arbeit und Zeitzonen auf FAQ und Kontakt.
  Produktnamen bleiben; Funktionsnamen folgen der englischen Oberfläche der
  Produkte. Bei den Rechtsseiten ist die deutsche Fassung maßgeblich, beide
  englischen Seiten sagen das oben.

## Inhaltsprinzipien

- Öffentliche Produktbelege vor generischen Fähigkeitslisten
- Keine behaupteten Reichweiten- oder Nutzungszahlen ohne dokumentierte Quelle
- AI-assisted Development transparent benennen; Scope, Datenfluss,
  Architekturentscheidungen, Validierung und Deployment bleiben in Lukas'
  Verantwortung
- Konzeptarbeiten klar als fiktiv kennzeichnen und nicht als Kundenarbeit zeigen

## Struktur

- `app/_home/` – Startseite: Kopfzeile mit Kurzbeschreibung, Headline, die
  Byline (Porträt aus `public/mail/lukas-kaffer.png`, dasselbe Bild wie in
  E-Mail-Signatur und Google-Profil, Name und ein Satz, verlinkt auf Über
  mich), vier Links, ein Button und der Showcase (`showcase.tsx`). Monitor und iPhone
  wechseln ohne Beschriftung selbständig zwischen den Projekten; jedes bleibt so
  lange, wie seine Aufnahmen dauern (`durationMs` in `app/media.ts`), mit
  weicher Überblendung. Die Projekte wechseln strikt abwechselnd und pausieren
  bewusst nicht bei Hover; bei reduzierter Bewegung läuft nichts automatisch.
  Desktop ist ein fester Einzelbildschirm.
- `app/_components/button-styles.ts` – einheitlicher Hover nach dem Vorbild von
  Indeed Unique: keine Füllfarbe, ein Teal-Rahmen zieht sich von außen zusammen.
- `app/_components/` – gemeinsame Bausteine (Seitenrahmen, Formular,
  Autoplay-Video, iPhone-Rahmen)
- `app/projects-data.ts` – Struktur der Projekte (Pfade, Daten, Live-URLs,
  Aufnahmen); die Texte dazu stehen in `app/content/<sprache>/projects.ts`
  (Case Studies, `iosApp`, `operationsApp`, `showcaseEntries`)
- `app/media.ts` – Bildschirmaufnahmen (H.264-MP4 plus Poster)
- `app/services-data.ts` – Standbilder der Leistungen-Seite; die drei
  Produktformen (Websites, Web-Apps, iOS-Apps) und die fünf Schritte von
  „Launch inklusive“ stehen in `app/content/<sprache>/services.ts`. Die Formen
  stehen als Sprunglinks im Hero.
- `app/[locale]/` – Root-Layout (`<html lang>`, Metadaten je Sprache) und die
  Startseite; `[...rest]` fängt unbekannte Pfade für die übersetzte 404-Seite.
- `app/[locale]/(pages)/` – alle Unterseiten in einer Route-Gruppe. Ihr `layout.tsx` hält
  Kopfzeile, Hero (`subpage-hero.tsx`, feste Höhe) und Fußzeile beim
  Seitenwechsel stehen; nur Texte, Bild und Inhalt darunter wechseln.
  `work/` enthält Showcase-Übersicht und Case Studies. Case Studies teilen sich
  Rahmen (`case-study-page.tsx`: Titel, Eckdaten, Links, Medien) und Bausteine
  (`case-study-blocks.tsx`); Abschnitte zeigen zuerst das Produkt und kommen
  ohne Eyebrow-Labels aus. Zahlen nur mit Quelle in der Projektdoku. Die
  Case-Study-Komponenten entscheiden nur, welche Aufnahme wo steht; ihre Worte
  kommen aus `app/content/<sprache>/case-studies.ts`.

Der Monitor (`app/_components/monitor-frame.tsx`) ist gezeichnet, kein Bild:
Korpus in CSS (Alu-Hairline, matte schwarze Front mit schmaler Blende und
Kamerapunkt, Panel mit kaum gerundeten Ecken), Standarm und Fußplatte als
Inline-SVG mit Licht von oben links, Kontakt- und Umgebungsschatten. Alle Maße
sind Container-Query-Einheiten der Monitorbreite (`cqw` bzw. viewBox), damit
die Proportionen bei jeder Größe und Pixeldichte gleich bleiben.

Das iPhone ist Apples offizieller iPhone-17-Pro-Rahmen
(`public/devices/iphone-17-pro-frame.png` als Vorlage, ausgeliefert als
`iphone-17-pro-frame.webp`, erzeugt mit `cwebp -q 90 -alpha_q 100`; das WebP
behält den Alpha-Kanal, ist aber nur ein Fünftel so groß). Die Aufnahme liegt darunter und wird
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

Jede Route gibt es auch unter `/en` (`/en/work`, `/en/about` …); die Rechtsseiten
heißen dort `/en/imprint` und `/en/privacy`.

- `/work` – Showcase: Website Indeed Unique, Plattform Vienna Event Radar, iOS-App
- `/work/indeed-unique` – Case Study Indeed Unique
- `/work/vienna-event-radar` – Case Study Vienna Event Radar (Webplattform)
- `/work/wien-event-radar-ios` – Case Study Wien Event Radar für iOS
- `/work/operations-app` – Case Study Operations-App mit Social Studio
- `/about` – Profil und Arbeitsweise
- `/services` – Leistungen: Websites, Web-Apps, iOS-Apps und der Weg bis zum Launch
- `/faq` – Fragen zur Zusammenarbeit
- `/contact` – Kontaktformular und E-Mail
- `/impressum` – Betreiberangaben und Offenlegung
- `/datenschutz` – Datenverarbeitung, Dienste und Betroffenenrechte

Das Vorschaubild für Websites im Hero der Leistungen-Seite
(`public/case-studies/aurea/treatments.jpg`) stammt aus einer fiktiven
Designstudie (Aurea Clinic); die Studie selbst ist nicht Teil der Site, alte
Links auf `/clinic` landen auf `/work`.

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
