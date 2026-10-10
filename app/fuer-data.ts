import type { AppPathname } from "@/i18n/routing";
import type { StudioPlan } from "./content/types";

// Personal preview pages for the Swiss test (round 9, Business Studio OS):
// one unlisted page per studio at /fuer/<slug>, reached only through a
// hand-written mail. The slug carries a random suffix so it cannot be
// guessed, the page is noindex and never in the sitemap. Treated as public
// all the same: marked as a draft, nothing confidential, and the studio's
// current website is never shown or judged — improvements are described as
// possibilities, not as faults.

// What makes the studio special (from its own website) and where the
// draft picks it up. Positive only: never a fault of today's website.
export type FuerInsight = { fact: string; title: string; text: string };

// A second look into the draft: two pages, each opened at a section
// (?ansicht=<id>, see OpenAtSection in the draft).
export type FuerShowcase = {
  title: string;
  intro: string;
  laptop: { path: string; caption: string };
  phone: { path: string; caption: string };
};

// The same card as on /studios, with Swiss prices.
export type FuerPlan = StudioPlan;

// How people sign up, in steps the studio can choose from. Only studio
// websites, CMS and existing booking services; never an own booking system.
export type FuerBooking = {
  title: string;
  intro: string;
  options: { name: string; text: string; note: string }[];
};

export type FuerReference = { title: string; text: string; href: AppPathname; linkLabel: string };

export type FuerPage = {
  slug: string;
  studio: string;
  // Domain shown in the browser frame of the draft.
  domain: string;
  eyebrow: string;
  title: string;
  intro: string;
  insightsTitle: string;
  insightsIntro: string;
  insights: FuerInsight[];
  // Optional: Lukas prefers the personal page to show the homepage only;
  // further pages go into the mail as pictures.
  showcase?: FuerShowcase;
  booking: FuerBooking;
  reference: FuerReference;
  plansTitle: string;
  plansQuestion: string;
  plans: FuerPlan[];
  stepsTitle: string;
  steps: { title: string; body: string }[];
  closingTitle: string;
  closingText: string;
  cta: string;
  mailSubject: string;
  // Where the draft's content comes from, shown at the end of the page.
  sourceNote: string;
};

// Swiss prices, agreed in round 9 (Claude and Codex, blind), not yet final:
// CHF 3’400 and CHF 1’690 + 169/month (Swiss thousands separator), no introductory discount.
// Formal address: Swiss studio owners are written to with "Sie".
const plansSie: FuerPlan[] = [
  {
    id: "individuell",
    choice: "Sie pflegen selbst",
    name: "Studio Individuell",
    price: "CHF 3’400",
    priceNote: "einmalig",
    tagline: "Ihre Website liegt ganz in Ihrer Hand.",
    includes: [
      "Individuell für Ihre Schule und Ihre Marke gestaltet",
      "Ein eigener Bearbeitungsbereich: Kurse, Team, Bilder und Neuigkeiten ändern Sie ohne Technikwissen",
      "Ich zeige Ihnen und Ihrem Team persönlich, wie alles funktioniert",
    ],
  },
  {
    id: "aktuell",
    choice: "Ich pflege für Sie",
    name: "Studio Aktuell",
    price: "CHF 169",
    priceNote: "im Monat",
    priceExtra: "12 Monate · plus CHF 1’690 zum Start",
    tagline: "Sie kümmern sich um Ihre Schule, ich mich um Ihre Website.",
    includes: [
      "Gestaltet im Stil Ihrer Schule",
      "Schreiben Sie mir, was sich ändert: Kurse, Preise, Team oder Ferienzeiten trage ich für Sie ein",
      "Um die Technik kümmere ich mich im Hintergrund",
    ],
  },
];

const stepsSie = [
  {
    title: "Gespräch",
    body: "15 Minuten online. Ich zeige Ihnen den Entwurf, und wir klären, was Ihnen wichtig ist.",
  },
  {
    title: "Konzept",
    body: "Was gehört wohin, und wie finden Interessierte am schnellsten zu Kurs und Anmeldung?",
  },
  {
    title: "Umsetzung mit Vorschau",
    body: "Ihre Inhalte ziehen mit um. Sie sehen jeden Zwischenstand, bevor etwas öffentlich wird.",
  },
  {
    title: "Onlinegang",
    body: "Nach Ihrem letzten Okay geht die neue Website online.",
  },
];

export const fuerPages: FuerPage[] = [
  {
    slug: "dance-it-7kq3",
    studio: "Dance it",
    domain: "dance-it.ch",
    eyebrow: "Für Dance it, Tanzschule Zürich",
    title: "Ein Entwurf für Ihre neue Website.",
    intro:
      "Guten Tag Frau Stirnimann. Ich habe skizziert, wie die Website von Dance it aussehen könnte: Startseite, Wochenplan und Anmeldung, mit Ihren Kursen, Preisen und Farben, am Laptop und am Handy.",
    insightsTitle: "Aus Ihrer Schule entworfen.",
    insightsIntro:
      "Der Entwurf baut auf dem auf, was Dance it heute schon ausmacht. Alle Kurse, Zeiten, Preise und Daten stammen von Ihrer Website.",
    insights: [
      {
        fact: "Paartanz in aufbauenden Stufen, dazu Kinder, 60 plus und Fitness",
        title: "Ein Wochenplan, der filtert",
        text: "Paare, Familien oder Seniorinnen wählen ihre Gruppe und sehen sofort, an welchem Abend sie kommen können.",
      },
      {
        fact: "Paartanz Kurs 1 an drei Abenden pro Woche",
        title: "Anmelden direkt beim Termin",
        text: "Termin antippen, zu zweit oder allein wählen, Preis sehen und absenden. Wer lieber anruft, findet Telefon und WhatsApp gleich daneben.",
      },
      {
        fact: "Foxtrott statt Slowfox, dazu 4,7 Sterne bei 46 Google-Bewertungen",
        title: "Ihre Haltung und Ihr Ruf als Kern",
        text: "Was Dance it von einer Turnierschule unterscheidet, steht gross auf der Startseite, mit Ihren eigenen Worten und Ihrer Bewertung.",
      },
      {
        fact: "Everdance®-Ausbildnerin, Kurse an fünf Orten, im SRF zu sehen",
        title: "Everdance® mit eigenem Auftritt",
        text: "Kursorte, Fernsehbeitrag und das Everdance-Wochenende auf einen Blick.",
      },
      {
        fact: "Ein lichtdurchfluteter Saal mit 108 m²",
        title: "Saalmiete sichtbar machen",
        text: "Wer einen Raum für Yoga, Fitness oder einen Apéro sucht, findet Zeiten und Anfrage direkt auf der Startseite.",
      },
      {
        fact: "Viele Kurse auch auf Englisch, fünf Minuten von Uni und ETH",
        title: "Auf Wunsch zweisprachig",
        text: "Eine englische Fassung öffnet die Kurse für internationale Studierende und Zugezogene.",
      },
    ],
    booking: {
      title: "Anmelden, so einfach wie möglich.",
      intro:
        "Viele Ihrer Kundinnen und Kunden kommen zu zweit, viele sind über 60, und bezahlt wird am ersten Abend. Deshalb schlage ich drei Stufen vor. Sie entscheiden, wie weit es gehen soll.",
      options: [
        {
          name: "Anmeldung beim Kurs",
          text: "Termin wählen, zu zweit oder allein, Preis sehen, absenden. Ohne Konto und ohne Passwort. Sie und Ihre Gäste erhalten sofort eine Bestätigung per E-Mail. Bezahlt wird wie bisher am ersten Abend.",
          note: "Im Entwurf zu sehen, in beiden Modellen enthalten",
        },
        {
          name: "Mit Plätzen und QR-Rechnung",
          text: "Dazu freie Plätze pro Kurs und eine QR-Rechnung in der Bestätigung. Weniger Bargeld, verbindlichere Anmeldungen, weiterhin ohne Konto.",
          note: "Ausbau nach Absprache",
        },
        {
          name: "Online buchen und bezahlen",
          text: "Ein Buchungssystem wie SportsNow oder Eversports, mit TWINT, Warteliste und Vorauszahlung, eingebunden im Design Ihrer Website. Sinnvoll, wenn Sie Vorauszahlung möchten.",
          note: "Laufende Kosten beim Anbieter",
        },
      ],
    },
    reference: {
      title: "Ein Beispiel aus Wien.",
      text: "Für das Tanzstudio Indeed Unique habe ich die Website gestaltet und gebaut, mit eigenem Bearbeitungsbereich und eingebundenem Buchungssystem.",
      href: "/work/indeed-unique",
      linkLabel: "Case Study ansehen",
    },
    plansTitle: "Zwei Wege zur neuen Website.",
    plansQuestion: "Möchten Sie Änderungen selbst erledigen, oder soll ich mich darum kümmern?",
    plans: plansSie,
    stepsTitle: "So geht es weiter.",
    steps: stepsSie,
    closingTitle: "Soll ich Ihnen den Entwurf in 15 Minuten zeigen?",
    closingText: "Online, zu einer Zeit, die Ihnen passt. Ein kurzes Nein genügt auch, dann melde ich mich nicht mehr.",
    cta: "Gespräch vereinbaren",
    mailSubject: "Entwurf Dance it",
    sourceNote:
      "Unverbindlicher Entwurf von Lukas Kaffer, nicht die Website von Dance it. Kurse, Zeiten, Preise und Kontaktdaten stammen von dance-it.ch (Stand September 2026). Diese Seite ist nur über den persönlichen Link erreichbar und wird nicht in Suchmaschinen aufgenommen.",
  },
];

export function getFuerPage(slug: string) {
  return fuerPages.find((page) => page.slug === slug);
}
