import { LAUNCH_PROOF } from "@/app/offers-data";
import type { LaunchOfferCopy } from "../types";

// Texts of /launch, from Business Studio OS/einnahmen/vorlagen/
// 05-festpreis-angebote.md, smoothed into Lukas' voice. Prices decided by
// Lukas on 11.10.2026: Launch Check 290 €, Launch Sprint from 1,200 €,
// App-Store-Start 450 € (one review round, code fixes up to two hours
// included), Baubegleitung 590 € per month (two hours of help included,
// 75 € per hour beyond). The limits stand in the cards, not in fine print.
// No discounts, no trial months. Prices in euros, no tax line (small
// business, like the FAQ).
export const launchOffer: LaunchOfferCopy = {
  page: {
    eyebrow: "Für Gründer mit fast fertigen Apps",
    title: "Deine App ist fast fertig. Ich bringe sie sicher online.",
    description:
      "Du hast etwas Echtes gebaut, vielleicht mit Lovable, Bolt, Cursor oder Claude Code. Auf deinem Bildschirm funktioniert es. Bevor echte Nutzer und echte Zahlungen durchlaufen, schaue ich unter die Haube: erst eine Prüfung zum Festpreis, danach, wenn du willst, die Behebung, der App-Store-Start oder eine laufende Begleitung.",
    metaTitle: "Launch Check, Launch Sprint und App-Store-Start zum Festpreis",
    metaDescription:
      "Festpreise für Gründer mit fast fertigen oder KI-gebauten Apps: Launch Check 290 €, Launch Sprint ab 1.200 €, App-Store-Start 450 €, Baubegleitung 590 € im Monat. Bericht in zwei Werktagen, ohne Zugang zu deinem Live-System.",
    breadcrumb: "Launch zum Festpreis",
  },
  cta: "Launch Check anfragen",
  offersLink: "Angebote ansehen",
  fit: {
    title: "Wo KI-gebaute Apps am häufigsten brechen.",
    intro:
      "Ich baue selbst mit KI-Werkzeugen und habe eigene Produkte in Produktion und in den App Store gebracht. Die Stellen, an denen es schiefgeht, sind fast immer dieselben.",
    items: [
      {
        problem: "Jeder sieht alles",
        title: "Datenbankregeln",
        text: "Ob Nutzer nur ihre eigenen Daten lesen und ändern können, entscheiden Regeln in der Datenbank. Oft stehen sie offen.",
      },
      {
        problem: "Schlüssel im Browser",
        title: "Zugangsdaten und Schlüssel",
        text: "Schlüssel mit vollen Rechten landen leicht im Browser-Code oder im Verlauf des Codes. Dort kann sie jeder auslesen.",
      },
      {
        problem: "Bezahlt, oder nur so getan?",
        title: "Zahlungen und Anmeldung",
        text: "Die Freischaltung muss der Zahlungsanbieter bestätigen, nicht der Browser. Anmeldung, Passwort-Zurücksetzen und Mails müssen mit deiner echten Domain laufen.",
      },
      {
        problem: "Von Apple abgelehnt",
        title: "Die Prüfung bei Apple",
        text: "Signierung, Datenschutzangaben, Kontolöschung, Altersfreigabe: Apple prüft genau, und die Anforderungen ändern sich laufend.",
      },
    ],
  },
  offer: {
    title: "Vier Angebote, je nachdem, wo du stehst.",
    question: "Fang mit dem Check an. Alles Weitere baut darauf auf, und du entscheidest Punkt für Punkt.",
  },
  plans: [
    {
      id: "check",
      choice: "Schritt 1 · Prüfung",
      name: "Launch Check",
      price: "290 €",
      priceNote: "Festpreis",
      tagline:
        "Eine erfahrene zweite Meinung, bevor du live gehst. Kein Penetrationstest und kein Sicherheitszertifikat.",
      includes: [
        "Ich prüfe Anmeldung, Datenbankregeln, Schlüssel, Zahlungen und den Weg online; bei iOS-Apps dazu Signierung und die Punkte, die Apple am häufigsten ablehnt",
        "Kein Zugang zu deinem Live-System: Ich arbeite mit deinem Code und einem Export deiner Datenbankstruktur ohne Inhalte, die Daten deiner Nutzer sehe ich nicht",
        "Innerhalb von zwei Werktagen ein Bericht in klarer Sprache: Was ist kritisch, was kann warten, was ist in Ordnung",
        "Zu jeder Behebung ein Festpreis, damit du Punkt für Punkt entscheidest",
        "Ein Gespräch von 20 Minuten, in dem wir den Bericht durchgehen",
        "Beauftragst du innerhalb von 14 Tagen den Launch Sprint, werden die 290 € angerechnet",
      ],
    },
    {
      id: "sprint",
      choice: "Schritt 2 · Behebung",
      name: "Launch Sprint",
      price: "ab 1.200 €",
      priceNote: "Festpreis, vor dem Start vereinbart",
      tagline:
        "Nach dem Check weißt du, was fehlt. Im Sprint behebe ich es und bringe die App sauber online, auf deinen Konten.",
      includes: [
        "Datenbank so absichern, dass Nutzer nur ihre eigenen Daten sehen",
        "Anmeldung, Passwort-Zurücksetzen und Mailversand zuverlässig machen",
        "Zahlungen richtig anbinden, etwa mit Stripe, mit Bestätigung vom Anbieter",
        "Schlüssel aus dem Browser-Code holen",
        "Online stellen auf deinen Konten, mit deiner Domain, Fehlerüberwachung und Sicherungen",
        "Jeden Werktag ein kurzes Update, am Ende eine Übergabe, damit du selbst weiterbauen kannst",
        "Fünf bis zehn Werktage",
      ],
    },
    {
      id: "app-store",
      choice: "Schritt 2 · für iOS-Apps",
      name: "App-Store-Start",
      price: "450 €",
      priceNote: "Festpreis",
      tagline:
        "Deine App läuft auf deinem iPhone. Dass sie auf allen anderen landet, ist ein eigener Job.",
      includes: [
        "Prüfung deines Builds gegen Apples aktuelle Anforderungen",
        "Signierung und TestFlight in deinem Entwicklerkonto einrichten",
        "Store-Seite vorbereiten: Texte, Screenshots, Datenschutzangaben, Altersfreigabe",
        "Einreichen und eine Prüfrunde mit Apple begleiten",
        "Code-Korrekturen aus der Apple-Prüfung bis zwei Stunden inklusive, darüber nach Angebot",
        "Die App erscheint in deinem Konto. Apple verlangt das, und für dich ist es besser",
        "Drei bis sieben Werktage, plus die Wartezeit bei Apple",
      ],
    },
  ],
  ongoing: {
    id: "partner",
    choice: "Danach · als Anschluss an Check oder Sprint",
    name: "Baubegleitung",
    price: "590 €",
    priceNote: "im Monat",
    priceExtra: "monatlich kündbar, zum Monatsende",
    tagline:
      "Du baust selbst mit KI-Werkzeugen weiter. Ich sage dir früh, wenn etwas später brechen wird.",
    includes: [
      "Ein Gespräch von 45 Minuten pro Woche: deine Fragen, dein Bildschirm, dein nächster Schritt",
      "Ich lese jede Codeänderung innerhalb eines Werktags und melde Probleme",
      "Bis zwei Stunden Hilfe im Monat inklusive, darüber 75 € je Stunde",
    ],
  },
  stepsTitle: "So läuft der Launch Check.",
  steps: [
    {
      title: "Aufnahmebogen",
      body: "Sieben kurze Fragen per Mail: Was macht die App, womit ist sie gebaut, welche Dienste hängen daran, gibt es schon echte Nutzer, und wo hakt es gerade.",
    },
    {
      title: "Code und Datenbankstruktur",
      body: "Du lädst mich mit Leserecht in deinen Code ein und schickst mir einen Export deiner Datenbankstruktur ohne Inhalte; für Supabase und Firebase bekommst du dazu eine kurze Anleitung. Schlüssel bitte nicht mitschicken. Finde ich trotzdem welche im Code, ist das der erste Punkt im Bericht.",
    },
    {
      title: "Bericht in zwei Werktagen",
      body: "Jeder Punkt bekommt einen Status von kritisch bis in Ordnung, dazu ein Festpreis je Behebung und eine Liste dessen, was schon gut ist.",
    },
    {
      title: "Gespräch, 20 Minuten",
      body: "Wir gehen das Urteil, die fünf wichtigsten Punkte und den Plan durch. Wenn du willst, bekommst du noch am selben Tag das Angebot für den Sprint.",
    },
  ],
  proof: {
    title: "Ich war selbst an diesen Stellen.",
    body: "Vienna Event Radar ist mein eigenes Produkt: eine Plattform mit Konten, geprüften Inhalten, Newsletter, zeitgesteuerten Abläufen und Admin-Bereich, dazu eine native iOS-App im App Store. Beides habe ich gebaut, online gebracht und betreibe es. Mit der App bin ich mehrmals durch die Prüfung bei Apple gegangen.",
    trust:
      "Code, Daten und Befunde bleiben zwischen uns. Ich arbeite mit KI-Werkzeugen; deren Nutzung zum Training ist ausgeschaltet, und wer das nicht möchte, sagt es vorher.",
    links: [
      { label: "Case Study Vienna Event Radar", path: LAUNCH_PROOF.webCaseStudyPath },
      { label: "Case Study Wien Event Radar für iOS", path: LAUNCH_PROOF.iosCaseStudyPath },
    ],
  },
  closing: "Fast fertig? Dann ist jetzt der richtige Moment für den Check.",
  service: {
    name: "Launch Check, Launch Sprint, App-Store-Start und Baubegleitung",
    type: "Prüfung und Fertigstellung von Web- und iOS-Apps",
  },
};
