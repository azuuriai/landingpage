import { ASSISTANT_PROOF } from "@/app/offers-data";
import type { AssistantCopy } from "../types";

// Texts of /assistent. Prices released by Lukas on 08.10.2026 (Business
// Studio OS/einnahmen/vorlagen/01-profile.md, direct customers): 890 /
// 1.490 / 2.290 € one-time, care 149 € per month. Conditions from the same
// source: everything runs on the customer's accounts, AI usage is paid by
// the customer, appointments only after an explicit yes, a data processing
// agreement when business mail is read. The proof is Mission Control; every
// claim about it comes from its case study.
export const assistant: AssistantCopy = {
  page: {
    eyebrow: "Persönlicher KI-Assistent",
    title: "Ein Assistent, der deinen Tag kennt.",
    description:
      "Jeden Morgen eine Nachricht mit Terminen, wichtigen Mails und offenen Aufgaben. Unterwegs fragst du per Text oder Sprachnachricht, und er antwortet. Alles läuft auf deinen eigenen Konten, eingerichtet zum Festpreis.",
    metaTitle: "KI-Assistent einrichten · Telegram, Kalender und E-Mail zum Festpreis",
    metaDescription:
      "Persönlicher KI-Assistent auf Telegram mit Google-Kalender, Gmail und Aufgabenliste: Morgen-Briefing, Fragen, Termine nach Bestätigung, Sprachnachrichten. Einrichtung 890, 1.490 oder 2.290 €, Betreuung 149 € im Monat.",
    breadcrumb: "KI-Assistent",
  },
  cta: "Assistenten besprechen",
  offersLink: "Stufen ansehen",
  phoneAlt:
    "Telegram-Chat mit einem Assistenten: ein Update für heute, eine Frage als Sprachnachricht und die gesprochene Antwort mit Text darunter",
  loopLabel: "Mission Control, mein eigenes Organisationstool: Zoom in das Gehirn mit allen Projekten",
  fit: {
    title: "Was der Assistent dir abnimmt.",
    intro:
      "Kalender, Postfach und Aufgabenliste sind drei Orte. Der Assistent macht daraus eine Nachricht am Morgen und eine Antwort, wenn du fragst.",
    items: [
      {
        problem: "Morgens alles zusammensuchen",
        title: "Ein Briefing am Morgen",
        text: "Termine des Tages, Mails, die etwas von dir wollen, und offene Aufgaben, als eine Nachricht auf Telegram.",
      },
      {
        problem: "Was war nochmal?",
        title: "Fragen und notieren",
        text: "„Was steht heute an?“, „Notier mir …“, „Trag den Termin ein“: Er antwortet, notiert und trägt Termine ein, nachdem du bestätigt hast.",
      },
      {
        problem: "Unterwegs tippen",
        title: "Sprechen statt tippen",
        text: "Sprachnachricht hin, Sprachnachricht zurück, mit dem Text darunter.",
      },
    ],
  },
  offer: {
    title: "Drei Stufen, eine Betreuung.",
    question: "Du entscheidest, wie viel der Assistent können soll. Jede Stufe enthält die vorherige.",
  },
  plans: [
    {
      id: "briefing",
      choice: "Stufe 1",
      name: "Briefing",
      price: "890 €",
      priceNote: "einmalig",
      tagline: "Die tägliche Morgen-Nachricht, mehr nicht. Ein guter erster Schritt.",
      includes: [
        "Jeden Morgen eine Nachricht auf Telegram aus Google-Kalender, Gmail und deiner Aufgabenliste",
        "Uhrzeit und Inhalt der Nachricht nach deinen Wünschen",
        "Eingerichtet auf deinen Konten: dein Bot, dein KI-Schlüssel, dein Google-Zugang",
        "Eine kurze Anleitung, und der Code gehört dir",
      ],
    },
    {
      id: "assistant",
      choice: "Stufe 2",
      name: "Assistent",
      price: "1.490 €",
      priceNote: "einmalig",
      tagline: "Dazu ein Bot, der antwortet, notiert und Termine einträgt.",
      includes: [
        "Alles aus Stufe 1",
        "Fragen zu Terminen, Mails und Aufgaben beantworten",
        "Aufgaben notieren und abhaken",
        "Termine eintragen, aber nur nach deinem ausdrücklichen Ja; „eingetragen“ meldet er erst, wenn der Eintrag geprüft ist",
      ],
    },
    {
      id: "voice",
      choice: "Stufe 3",
      name: "Assistent mit Stimme",
      price: "2.290 €",
      priceNote: "einmalig",
      tagline: "Dazu Sprachnachrichten in beide Richtungen und ein zweiter Zugang.",
      includes: [
        "Alles aus Stufe 2",
        "Sprachnachrichten verstehen und mit einer natürlichen Stimme antworten",
        "Ein zweites Konto oder ein Zugang für dein Team",
      ],
    },
  ],
  ongoing: {
    id: "care",
    choice: "Wenn du willst · laufend",
    name: "Betreuung",
    price: "149 €",
    priceNote: "im Monat",
    tagline: "Der Assistent läuft weiter, auch wenn sich deine Werkzeuge ändern.",
    includes: [
      "Ich halte den Assistenten am Laufen und reagiere, wenn etwas hakt",
      "Kleine Anpassungen, wenn sich dein Kalender, dein Postfach oder deine Wünsche ändern",
      "Ein fester Ansprechpartner",
    ],
  },
  terms: {
    title: "Gut zu wissen, bevor wir starten.",
    items: [
      {
        title: "Läuft auf deinen Konten",
        text: "Bot, KI-Schlüssel und Google-Zugang gehören dir. Du kannst jederzeit alles abschalten.",
      },
      {
        title: "KI-Kosten zahlst du direkt",
        text: "Die Nutzung des KI-Anbieters rechnest du direkt mit ihm ab. Sie ist nicht im Preis enthalten.",
      },
      {
        title: "Termine nur nach Bestätigung",
        text: "Der Assistent trägt nichts ein, was du nicht mit einem ausdrücklichen Ja bestätigt hast.",
      },
      {
        title: "Wenn Mails von Kunden dabei sind",
        text: "Liest der Assistent geschäftliche Mails, schließen wir vorher eine Vereinbarung zur Auftragsverarbeitung, wie die DSGVO sie verlangt.",
      },
    ],
  },
  stepsTitle: "So kommt der Assistent zu dir.",
  steps: [
    {
      title: "Gespräch",
      body: "Welche Werkzeuge nutzt du, was soll der Assistent tun, und was auf keinen Fall?",
    },
    {
      title: "Plan mit Festpreis",
      body: "Du bekommst einen kurzen schriftlichen Plan: Stufe, Umfang, Preis und Termin.",
    },
    {
      title: "Einrichtung auf deinen Konten",
      body: "Bot, KI-Schlüssel und Google-Zugang entstehen in deinen Konten, Schritt für Schritt mit dir.",
    },
    {
      title: "Übergabe",
      body: "Wir testen den Assistenten gemeinsam. Du bekommst eine kurze Anleitung, und der Code gehört dir.",
    },
  ],
  proof: {
    title: "Meinen eigenen nutze ich jeden Tag.",
    body: "Mission Control ist mein persönliches Organisationstool: Ich frage per Stimme und höre die Antwort, Agenten prüfen Aufgaben im Hintergrund, Termine und wichtige Mails sind eingebunden, und unterwegs antwortet derselbe Assistent im Telegram-Bot. Jeden Morgen kommen die Termine und die wichtigsten Punkte des Tages, auch wenn der Mac aus ist.",
    links: [{ label: "Case Study Mission Control", path: ASSISTANT_PROOF.caseStudyPath }],
  },
  closing: "Soll dein Tag morgen mit einer Nachricht beginnen?",
  service: {
    name: "Persönlicher KI-Assistent einrichten",
    type: "KI-Assistenten und Automatisierung",
  },
};
