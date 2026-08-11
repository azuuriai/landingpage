# lukaskaffer.com

Persönliche Portfolio-Website von Lukas Kaffer. Die Seite positioniert ihn als
AI-native Product Builder mit Bildungshintergrund und belegt die Arbeitsweise an
Vienna Event Radar: öffentliches Next.js-Webprodukt, Supabase-Backend,
Research- und Review-Workflow sowie native SwiftUI-App im App Store.

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

## Routen

- `/work` – teilbare Vienna-Event-Radar-Case-Study
- `/about` – Profil und Arbeitsweise
- `/services` – Leistungsrahmen
- `/faq` – Fragen zur Zusammenarbeit
- `/contact` – Kontaktformular und E-Mail
- `/impressum` – Betreiberangaben und Offenlegung
- `/datenschutz` – Datenverarbeitung, Dienste und Betroffenenrechte

Die alte Clinic-Konzeptstudie ist nicht Teil des veröffentlichten Portfolios.
Aufrufe von `/clinic` und `/clinic/index.html` werden auf `/work` umgeleitet;
die Quelldateien bleiben für eine mögliche spätere Überarbeitung im Repository.
