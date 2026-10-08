import type {
  CaseStudyCopy,
  IndeedUniqueCopy,
  IndeedUniqueStudioCopy,
  OperationsAppCopy,
  ViennaEventRadarCopy,
  WienEventRadarIosCopy,
} from "../types";

// Facts are taken from the project's own documentation (docs/SANITY_STATUS.md,
// DEPLOYMENT.md, DECISION_LOG.md, MIGRATION_PLAN, September 2026) and its
// source. Keep them in sync when the site changes — no numbers without a source.
const indeedUnique: IndeedUniqueCopy = {
  tour: {
    title: "Eine Website, die sich nach Tanz anfühlt.",
    intro: "Bewegung ist das Handwerk des Studios, also auch das der Website.",
    entry: {
      label: "Einstiegsanimation von Indeed Unique: Eine Figur tanzt sich zum Logo zusammen",
      title: "Einstieg",
      text: "Eine Strichfigur tanzt sich zum Logo zusammen.",
    },
    news: {
      label:
        "Startseite von Indeed Unique: Beiträge blättern im Tablet, danach fährt das Regal mit allen Beiträgen nach rechts",
      title: "Neuigkeiten",
      text: "Aktuelles blättert im Tablet um, dahinter zieht das ganze Archiv vorbei.",
    },
    archive: {
      label:
        "Videoarchiv von Indeed Unique: Filmvorschauen drehen sich beim Scrollen als räumliche Galerie",
      title: "Videoarchiv",
      text: "Auftritte aus zehn Jahren, als Galerie, die sich beim Scrollen dreht.",
    },
    booking: {
      label:
        "Buchung bei Indeed Unique: Stundenplan, Semesterblöcke und Gutscheinkauf aus Eversports im Design der Website",
      title: "Buchung",
      text: "Kurs finden, Semesterblock wählen, Gutschein verschenken, alles im Design der Website.",
    },
  },
  cms: {
    title: "Das Studio pflegt seine Website selbst.",
    figures: [
      { value: "24", label: "feste Seiten, alle im CMS bearbeitbar" },
      { value: "22", label: "Bausteine für neue Seiten" },
      { value: "182", label: "Beiträge aus der alten Website übernommen" },
      { value: "279", label: "alte Adressen dauerhaft weitergeleitet" },
    ],
    tools: [
      {
        title: "Ein Menüpunkt pro Aufgabe",
        text: "Neuigkeiten posten, Kurse und Team sortieren, Tanzjahr und kursfreie Tage eintragen.",
      },
      {
        title: "Neue Seiten aus Bausteinen",
        text: "22 gestaltete Abschnitte, frei kombinierbar. Jede Seite wird individuell und bleibt im Look der Marke.",
      },
      {
        title: "Vorschau vor dem Veröffentlichen",
        text: "Ein Klick baut eine Vorschau der ganzen Website, die man zum Gegenlesen weiterschicken kann.",
      },
      {
        title: "Status immer sichtbar",
        text: "Eine Leiste zeigt, ob die letzte Änderung schon live ist. Veröffentlichen stößt den Neuaufbau automatisch an.",
      },
    ],
  },
  booking: {
    title: "Buchung direkt aus Eversports.",
    intro:
      "Stundenplan, Semesterblöcke und Gutscheine kommen direkt aus Eversports, dem System, mit dem das Studio ohnehin arbeitet, und sehen trotzdem aus wie die Website. Nichts wird doppelt gepflegt.",
    items: [
      {
        title: "Stundenpläne für Wien und Mödling",
        text: "Semesterkurse und offene Klassen, Woche für Woche, mit direktem Weg zur Buchung.",
      },
      {
        title: "Semesterblöcke und Preise",
        text: "Vom einen Training pro Woche bis zum großen Paket, online gekauft und bezahlt.",
      },
      {
        title: "Gutscheine",
        text: "Betrag wählen, Motiv aussuchen und verschenken, einlösbar an beiden Standorten.",
      },
      {
        title: "Plan B",
        text: "Ist Eversports einmal nicht erreichbar, führen ein Direktlink und der Stundenplan als PDF weiter.",
      },
    ],
  },
  mobile: {
    title: "Auf dem Handy genauso vollständig.",
    text: "Die mobile Version war von Anfang an gleichwertig geplant und ist kein Nachtrag: dieselben Inhalte, eine eigene Navigation, Einstieg und Schaukasten für den kleinen Bildschirm gebaut und kurze Wege zu Stundenplan und Anmeldung.",
    label: "Indeed Unique auf dem iPhone: Einstieg, Schaukasten und Stundenplan",
  },
  operations: {
    title: "Läuft, ohne dass jemand daran denken muss.",
    intro:
      "Eine Website für ein Studio muss vor allem zuverlässig sein. Deshalb gibt es keinen Server, keine Datenbank und keine Plattformgebühren, dafür automatische Prüfungen und Sicherungen.",
    items: [
      {
        title: "Kein eigener Server",
        text: "Alle Seiten werden vorab gebaut und über Cloudflare ausgeliefert. Nichts, das jemand warten muss.",
      },
      {
        title: "Laufende Kosten: nur die Domain",
        text: "CMS, Hosting und Sicherungen laufen in kostenlosen Plänen.",
      },
      {
        title: "Geprüft vor jedem Release",
        text: "Automatische Tests für Typen, SEO, Inhaltsregeln, Eversports-Anbindung und Sicherungen, dazu ein kompletter Probe-Build.",
      },
      {
        title: "Tägliche Sicherung und Aktualisierung",
        text: "Alle Inhalte werden täglich gesichert, zeitabhängige Seiten jeden Morgen neu gebaut.",
      },
    ],
  },
};

// Facts come from the product's repositories (web: Vienna Event Dashboard,
// admin: radar-admin-ios, docs/research-system.md and
// docs/admin-operations-playbook.md, September 2026). No usage numbers until
// they are documented.
const viennaEventRadar: ViennaEventRadarCopy = {
  features: {
    title: "Vom Stöbern bis zur Verabredung.",
    intro:
      "Die Plattform beantwortet eine einfache Frage: Was machen wir heute, am Wochenende oder mit Freunden? Jeder Schritt dahin ist gebaut, vom ersten Filter bis zum Vorschlag, auf den andere antworten.",
    items: [
      {
        image: "dashboard",
        alt: "Startseite von Vienna Event Radar mit schnellen Filtern und Top Picks",
        title: "Entdecken",
        text: "Eine Startseite statt dreißig Tabs: Top Picks, Heute und Morgen und schnelle Filter für Wochenende, Kostenlos und Outdoor.",
      },
      {
        image: "event-detail",
        alt: "Eventdetails zur Wiener Kaiser Wiesn mit Beschreibung und nächsten Terminen",
        title: "Eventdetails",
        text: "Termine, Ort, Preis, Quelle und was einen erwartet, in einer Ansicht. Merken, bewerten und teilen direkt von dort.",
      },
      {
        image: "proposal",
        alt: "Dialog „Vorschlag teilen“ für das SLASH Filmfestival mit Teilen per E-Mail und WhatsApp",
        title: "Vorschlagen",
        text: "Ein Event per Link an Freunde schicken, samt Kalendereintrag. Sie antworten mit „Bin dabei“ oder „Eher nicht“.",
      },
      {
        image: "radar-assistant",
        alt: "Der Assistent „Frag dein Radar“ schlägt Outdoor-Events für morgen vor",
        title: "Frag dein Radar",
        text: "Ein Assistent, der Wünsche wie „Outdoor, morgen, mit Freunden“ versteht. Welche Events passen, entscheidet eine nachvollziehbare Suche, nicht das Sprachmodell.",
      },
    ],
  },
  platform: {
    title: "Mehr als eine Liste von Events.",
    intro:
      "Dahinter steckt ein vollständiges Produkt mit Konten, Gruppen, Newsletter und Seiten, die in Suchmaschinen gefunden werden.",
    items: [
      {
        title: "Konten auf jedem Weg",
        text: "Anmelden mit Google, Apple, Passwort oder Magic Link. Favoriten und eigene Events sind überall dieselben.",
      },
      {
        title: "Gemeinsam planen",
        text: "In Gruppen schlagen Mitglieder Events vor, stimmen ab und legen einen Termin fest.",
      },
      {
        title: "Montagsradar",
        text: "Ein wöchentlicher Newsletter mit den besten Tipps für die kommende Woche, mit Double-Opt-in.",
      },
      {
        title: "Gefunden werden",
        text: "Eigene Seiten für jedes Event und jede Kategorie, etwa „Heute in Wien“ oder „Gratis in Wien“, in Deutsch und Englisch.",
      },
    ],
  },
  backstage: {
    title: "Hinter den Kulissen: Recherche, Prüfung, Freigabe.",
    intro:
      "AI beschleunigt die Recherche, veröffentlicht aber nichts von allein. Jedes Event läuft durch eine Prüfung, bevor es online geht, und der Betrieb lässt sich vom Schreibtisch und vom iPhone aus steuern.",
    items: [
      {
        title: "Recherche mit Duplikat-Check",
        text: "Neue Events kommen aus einer AI-gestützten Recherche. Bevor ein Treffer ins System darf, wird geprüft, ob es ihn schon gibt.",
      },
      {
        title: "Freigabe statt Autopilot",
        text: "Eine Warteschlange im Admin-Bereich: Quelle, Termine und Ort prüfen, dann bewusst veröffentlichen.",
      },
      {
        title: "Redaktion an einem Ort",
        text: "Top Picks, Übersetzungen, Newsletter, Moderation und ein Social Studio für Beiträge in sozialen Netzwerken.",
      },
      {
        title: "Eigene Nutzungsanalyse",
        text: "Welche Events geöffnet, gemerkt und geteilt werden und wonach gesucht wird, datensparsam und ohne Drittanbieter.",
      },
      {
        title: "Admin-App fürs iPhone",
        text: "Betrieb, Nutzung, Reichweite, Newsletter und Social Studio auch unterwegs, geschützt mit Face ID. Sie hat eine eigene Case Study, oben verlinkt.",
      },
      {
        title: "Überwachter Betrieb",
        text: "Automatisierte Tests für Datenverträge, Duplikate, Sicherheit und Terminlogik. Sentry meldet Fehler aus Web und App.",
      },
    ],
    stack: "Next.js, React, TypeScript, Supabase, Vercel, Sentry",
  },
  ios: {
    title: "Auch als native iOS-App.",
    text: "Web und App teilen sich Backend, Konten und Gruppen. Die Oberflächen bleiben trotzdem eigenständig: responsiv im Browser, nativ in SwiftUI auf dem iPhone, mit Widgets, Live-Aktivität und Kalender.",
    button: "iOS-App ansehen",
    discoverAlt: "Wien Event Radar für iOS: Entdecken",
    mapAlt: "Wien Event Radar für iOS: Karte",
  },
};

// Facts come from the iOS repository (Wien Event Radar, version 1.3.4,
// docs/shared-supabase-contract.md, September 2026). Screens are the clean
// App Store captures from AppStorePreviews/assets/2026-09.
const wienEventRadarIos: WienEventRadarIosCopy = {
  tabs: {
    title: "Vier Tabs, ein Radar.",
    intro:
      "Entdecken, Für dich, Favoriten und Suche: Die App folgt den Mustern, die man von iOS kennt, mit nativer Navigation, Gesten und Systemfunktionen statt einer Website im App-Kostüm.",
    items: [
      {
        image: "entdecken",
        alt: "Entdecken-Ansicht mit Empfehlungen und Heute & Morgen",
        title: "Entdecken",
        text: "Empfehlungen zum Durchwischen und alles für heute und morgen auf einen Blick.",
      },
      {
        image: "fuer-dich",
        alt: "Für dich: das persönliche Radar mit gewählten Interessen",
        title: "Für dich",
        text: "Ein persönliches Radar: ein paar Interessen wählen, und der Feed wird mit jedem Tipp genauer.",
      },
      {
        image: "suche",
        alt: "Suche mit schnellen Filtern und Kategorien",
        title: "Suche",
        text: "Kategorien, schnelle Filter und freie Suche. Ab iOS 26 versteht sie Wünsche in natürlicher Sprache, direkt auf dem Gerät.",
      },
      {
        image: "details",
        alt: "Eventdetails zu Weinwandern Wien mit Zeitraum, Ort und Route",
        title: "Eventdetails",
        text: "Zeitraum, Ort, Route und Quelle in einer Ansicht, mit einem Tipp in Karten oder Google Maps.",
      },
      {
        image: "aktionen",
        alt: "Aktionen: Countdown vormerken, Teilnahme speichern, Quelle öffnen",
        title: "Merken und planen",
        text: "Speichern, in den Kalender eintragen, mit der Gruppe planen oder teilen. Der Countdown lässt sich vormerken.",
      },
      {
        image: "karte",
        alt: "Karte von Wien mit Events als Markierungen",
        title: "Karte",
        text: "Alle Events auf der Karte von Wien, gefiltert nach heute, dieser Woche oder gratis.",
      },
    ],
  },
  system: {
    title: "Eng mit dem iPhone verzahnt.",
    text: "Die App lebt nicht nur in ihrem Icon. Sie zeigt sich dort, wo man ohnehin hinschaut: auf dem Sperrbildschirm, im Kalender und in der Systemsuche.",
    items: [
      {
        title: "Widgets „Heute in Wien“",
        text: "Für Home- und Sperrbildschirm. Events lassen sich direkt aus dem Widget merken.",
      },
      {
        title: "Live-Aktivität",
        text: "Ein Countdown zum Event auf dem Sperrbildschirm, der einige Stunden vor Beginn von selbst startet.",
      },
      {
        title: "Kalender und Mitteilungen",
        text: "Events in den Apple-Kalender übernehmen, dazu Erinnerungen und Push-Mitteilungen.",
      },
      {
        title: "Kurzbefehle und Spotlight",
        text: "Events über Kurzbefehle und die Systemsuche des iPhones finden.",
      },
      {
        title: "Anmelden mit Apple",
        text: "Oder mit Google. Ein Konto für App und Webplattform.",
      },
    ],
    liveActivityAlt:
      "Live-Aktivität von Wien Event Radar auf dem Sperrbildschirm: Weinwandern Wien läuft jetzt",
  },
  foundation: {
    title: "Eigenständige App, gemeinsamer Kern.",
    intro:
      "Web und iPhone teilen sich Daten, Konten und Gruppen. Die Oberfläche ist trotzdem ganz für iOS gebaut und wird wie ein eigenes Produkt gepflegt, getestet und veröffentlicht.",
    items: [
      {
        title: "Ein Backend für Web und App",
        text: "Dieselbe Datenbank wie die Webplattform. Konten, Favoriten und Gruppen sind überall synchron.",
      },
      {
        title: "Gemeinsam planen",
        text: "Gruppen schlagen Events vor, stimmen ab und legen einen Termin fest, egal ob im Browser oder auf dem iPhone.",
      },
      {
        title: "Getestet und überwacht",
        text: "Unit- und UI-Tests, dazu Fehler-Monitoring mit Sentry.",
      },
      {
        title: "Der Auftritt im App Store",
        text: "Screenshots und Vorschauvideo selbst gestaltet und produziert.",
      },
    ],
    stack: "SwiftUI, MapKit, EventKit, WidgetKit, ActivityKit, App Intents, Supabase, Sentry",
  },
};

// Facts come from the radar-admin-ios repository (build 26, README, Sources and
// the 53 unit and UI tests, October 2026). Screens are the app's preview mode
// with sample data, captured in the iOS Simulator; the story graphics are real
// exports from the Social Studio (docs/screenshots, build 23).
const operationsApp: OperationsAppCopy = {
  areas: {
    title: "Der Alltag einer Plattform, in einer App.",
    intro:
      "Dazu kommt die Newsletter-Redaktion. Die Daten kommen live aus dem Backend; zu sehen ist der Vorschaumodus mit Beispieldaten.",
    items: [
      {
        image: "monitor",
        alt: "Monitor: Alles im Blick, mit Nutzung, Reichweite, Zustellung, Nutzern und Feedback-Frage",
        title: "Monitor",
        text: "Hintergrund-Jobs, Fehler, Nutzung und Reichweite auf einer Seite. Probleme fallen auf, bevor sie jemand meldet.",
      },
      {
        image: "social-editor",
        alt: "Social Studio: Editor mit der Titelgrafik „Wien hat was vor.“",
        title: "Social Studio",
        text: "Aus aktuellen Inhalten entstehen Karussells und Stories im Design der Marke.",
      },
      {
        image: "top-picks",
        alt: "Top Picks: die vier Plätze der Startseite, einer fest gesetzt, drei automatisch",
        title: "Top Picks",
        text: "Festlegen, was oben auf der Startseite steht, oder die Auswahl der Automatik überlassen.",
      },
    ],
  },
  studio: {
    title: "Aus Inhalten werden fertige Posts.",
    items: [
      {
        title: "Vorlagen mit echten Inhalten",
        text: "Für die Woche, das Wochenende oder ein Event. Termine und Bilder kommen direkt aus der Plattform.",
      },
      {
        title: "Export für Instagram",
        text: "Karussell in 1080 × 1350 und Story in 1080 × 1920, direkt ins Teilen-Menü.",
      },
      {
        title: "Bewusst halbautomatisch",
        text: "Die App entwirft, der Mensch entscheidet und veröffentlicht.",
      },
    ],
    stories: [
      { image: "story-cover", alt: "Story-Grafik: „Wien hat was vor.“ mit zwei Ideen fürs Wochenende" },
      { image: "story-event", alt: "Story-Grafik zum Event „Ein Abend im Museum“ mit iPhone-Ansicht" },
      { image: "story-closing", alt: "Abschluss-Grafik der Story mit Hinweis auf die App" },
    ],
  },
  foundation: {
    title: "Gebaut wie ein Produkt, nicht wie ein Skript.",
    figures: [
      { value: "4", label: "Bereiche in einer App" },
      { value: "11", label: "überwachte Hintergrund-Jobs" },
      { value: "53", label: "automatisierte Unit- und UI-Tests" },
      { value: "2", label: "Exportformate für Instagram" },
    ],
    items: [
      { title: "Google-Login und Face ID", text: "Sitzung nur im Schlüsselbund, Sperre beim erneuten Öffnen." },
      { title: "Rollen im Backend geprüft", text: "Jede Anfrage prüft Token und Admin-Rolle auf dem Server." },
    ],
    stack:
      "SwiftUI, AuthenticationServices, LocalAuthentication, Keychain, Next.js, Supabase, PostgreSQL, Sentry",
  },
};


// The Sanity studio behind the website. Facts: docs/SANITY_STATUS.md and
// apps/studio/src of the Indeed Unique repository (September/October 2026).
// Nine custom tools: Start, SiteStatus, DraftsPane, HelpPane, CropPreview,
// LinkTargetInput, PreviewButton, ViewOnSite, CoursePlanCheck.
const indeedUniqueStudio: IndeedUniqueStudioCopy = {
  screens: {
    title: "Gebaut für die Person, die damit arbeitet.",
    intro:
      "Jede Ansicht beantwortet eine Frage der Redaktion, nicht des Entwicklers. Zu sehen ist das echte Studio im Alltag des Tanzstudios.",
    items: [
      {
        image: "start",
        alt: "Startseite des Studios: neun Aufgaben-Knöpfe, darunter „Zu erledigen“ mit einem Hinweis zur Schnupperwoche",
        title: "Start nach Aufgaben",
        text: "Neun Knöpfe für die häufigsten Aufgaben. Darunter „Zu erledigen“: offene Entwürfe, Erinnerungen zum Tanzjahr, Kurse, die in der Übersicht fehlen.",
      },
      {
        image: "bausteine",
        alt: "Menü „Element hinzufügen“ mit Vorschaubildern der Bausteine Karten, Zahlen, Termine, Fragen, Schritte, Zeitleiste und PDF",
        title: "22 Bausteine mit Vorschaubild",
        text: "Neue Seiten entstehen aus gestalteten Abschnitten, nach Aufgabe gruppiert. Jeder Baustein hat genau eine Gestaltung; Farben und Abstände bleiben im Code.",
      },
      {
        image: "seiten-picker",
        alt: "Feld „Ziel“ mit der Eingabe „Preis“ und zwei gefundenen Seiten: Preise Semesterkurse und Preise Offene Klassen",
        title: "Seiten-Picker für Links",
        text: "Seiten werden beim Namen gesucht statt als Adresse getippt. Veraltete Adressen erkennt das Studio und stellt sie mit einem Klick richtig.",
      },
      {
        image: "zuschnitt",
        alt: "Bilddialog mit Bildbeschreibung und der Vorschau „So erscheint das Bild auf der Website“",
        title: "So erscheint das Bild auf der Website",
        text: "Unter jedem Bildfeld mit festem Format steht die echte Ausgabe: Ausschnitt und Fokuspunkt genau wie im Code der Website berechnet.",
      },
      {
        image: "kursfreie-tage",
        alt: "Maske „Kursfreie Tage“ mit Herbstpause, einem kursfreien Tag und Winterpause",
        title: "Kursfreie Tage und Tanzjahr",
        text: "Pausen und Ferien als einfache Liste; Vergangenes verschwindet von selbst. Ist die Schnupperwoche vorbei, erinnert das Studio daran.",
      },
      {
        image: "hilfe",
        alt: "Hilfeseite im Studio mit kurzen Anleitungen, etwa „Wann sehe ich meine Änderung auf der Website?“",
        title: "Hilfe direkt im Werkzeug",
        text: "Kurze Anleitungen zu jeder Aufgabe, dort, wo sie gebraucht werden. Kein Handbuch, das niemand findet.",
      },
    ],
  },
  guards: {
    title: "Geschützt bleibt, was geschützt bleiben soll.",
    items: [
      {
        title: "Feste Seiten bleiben bestehen",
        text: "Einstellungen, Seiten, Team, Kursübersicht und Studios lassen sich weder löschen noch duplizieren noch zurückziehen.",
      },
      {
        title: "Ausblenden statt löschen",
        text: "Kurse, Personen und freie Seiten verschwinden von der Website, bleiben aber im Studio erhalten.",
      },
      {
        title: "Adressen sind gesperrt",
        text: "Nach der ersten Veröffentlichung ändert sich keine Adresse mehr; reservierte Adressen sind für neue Seiten tabu.",
      },
      {
        title: "Verständliche Regeln an jedem Feld",
        text: "Zeichenlimits, Pflicht-Bildbeschreibung, Mindestauflösung und Fokuspunkt, jeweils mit einer Meldung, die sagt, was zu tun ist.",
      },
      {
        title: "Design und Buchung im Code",
        text: "Farben, Schriften, Animationen, Weiterleitungen und die Eversports-Widgets sind im Studio nicht erreichbar.",
      },
      {
        title: "Nur Formate, die die Website zeigt",
        text: "Der Beitragstext bietet genau die Absätze, Überschriften und Auszeichnungen, die auch dargestellt werden.",
      },
    ],
  },
  foundation: {
    title: "Zwischen Studio und Website.",
    figures: [
      { value: "9", label: "eigene Werkzeuge im Studio" },
      { value: "22", label: "Bausteine mit Vorschaubild" },
      { value: "24", label: "feste Seiten aus einem Seitenverzeichnis" },
      { value: "2–3 Min.", label: "bis eine Veröffentlichung online ist" },
    ],
    items: [
      {
        title: "Statuszeile",
        text: "Vergleicht den Stand der Website mit Sanity: grün, gelb oder rot, dazu die Zahl der offenen Entwürfe.",
      },
      {
        title: "Vorschau auf Knopfdruck",
        text: "Ein Klick baut die ganze Website mit allen Entwürfen auf einen geschützten Vorschau-Server, zum Gegenlesen vor dem Veröffentlichen.",
      },
      {
        title: "Ein Seitenverzeichnis für alles",
        text: "Felder, Ausgangswerte und Limits stehen einmal im Code. Daraus entstehen die Masken im Studio, die Werte der Website und der Import.",
      },
      {
        title: "Sicherung und Überwachung",
        text: "Nächtliche Sicherung aller Inhalte, täglicher Neuaufbau zeitabhängiger Seiten und eine Warnung, bevor das Limit des Gratis-Tarifs erreicht ist.",
      },
    ],
    stack:
      "Sanity Studio mit eigenen React-Werkzeugen, deutsche Oberfläche, Astro-Website auf Cloudflare, Webhooks und GitHub Actions. Sanity stellt Editor, Datenhaltung und Bildpipeline; die Redaktionslogik darauf ist eigene Arbeit.",
  },
};

export const caseStudyCopy: CaseStudyCopy = {
  indeedUnique,
  indeedUniqueStudio,
  viennaEventRadar,
  wienEventRadarIos,
  operationsApp,
};
