import { caseStudyBase } from "@/app/projects-data";
import { iosAppsMedia, webAppsMedia, websitesMedia } from "@/app/services-data";
import type { LaunchCopy, Service } from "../types";

export const services: Service[] = [
  {
    id: "websites",
    name: "Websites",
    teaser: "Design, CMS, Buchung und Launch",
    title: "Websites, die du selbst in der Hand hast.",
    body: "Für Angebote, die in wenigen Sekunden verständlich und glaubwürdig sein müssen. Struktur, Text, Design und Code entstehen zusammen, damit die Seite Anfragen und Buchungen auslöst.",
    includes: [
      "CMS, in dem du Texte, Bilder und Beiträge selbst änderst",
      "Buchung und Stundenplan eingebunden, etwa über Eversports",
      "Wo es passt, laufen CMS und Hosting in kostenlosen Plänen: Dann zahlst du nur die Domain",
      "Schnell auf jedem Gerät, mit SEO-Basics",
    ],
    proofs: [{ label: "Indeed Unique ansehen", href: caseStudyBase["indeed-unique"].path }],
    media: websitesMedia("Startseite von Indeed Unique mit dem Schaukasten zur neuen Tanzsaison"),
  },
  {
    id: "web-apps",
    name: "Web-Apps",
    teaser: "Plattformen, Portale und interne Tools",
    title: "Web-Apps mit echter Produktlogik statt loser Demo.",
    body: "Genug Substanz, um mit echten Nutzern zu lernen, ohne sich in einem übergroßen ersten Release zu verlieren. Und wenn wiederkehrende Arbeit bremst, baue ich interne Werkzeuge, die sie abnehmen.",
    includes: [
      "Login, Rollen und Datenbank",
      "Admin-Bereich und Review-Abläufe für Inhalte",
      "E-Mails, Newsletter und Schnittstellen zu anderen Diensten",
      "AI-Funktionen wie ein Assistent, wenn sie echten Nutzen bringen",
      "Dashboards, Backoffices und Automationen für interne Abläufe",
    ],
    proofs: [
      { label: "Vienna Event Radar ansehen", href: caseStudyBase["vienna-event-radar"].path },
      // The internal-tools line above, shown working: a native iOS tool on a
      // Next.js backend, so it is listed under iOS apps as well.
      {
        label: "Operations-App ansehen, ein iOS-Tool mit Next.js-Backend",
        href: caseStudyBase["operations-app"].path,
      },
    ],
    media: webAppsMedia(
      "Vienna Event Radar: Der Assistent „Frag dein Radar“ schlägt passende Events vor",
    ),
  },
  {
    id: "ios-apps",
    name: "iOS-Apps",
    teaser: "Nativ, bis in den App Store",
    title: "iOS-Apps, die sich wie iOS anfühlen.",
    body: "Wenn dein Produkt aufs iPhone gehört, baue ich es nativ in SwiftUI und nicht als Website im App-Kostüm: mit Apple-typischer Navigation, System-Gesten und allem, was die Veröffentlichung braucht.",
    includes: [
      "SwiftUI mit Apple-nativer Navigation und Gesten",
      "Karten, Kalender und Teilen über die Systemfunktionen",
      "Widgets, Live-Aktivitäten, Kurzbefehle und Spotlight",
      "Mit Apple anmelden und Push-Benachrichtigungen",
      "Ein Backend, geteilt mit deiner Web-App: Konten und Daten bleiben überall gleich",
      "Unit- und UI-Tests plus Fehlerüberwachung",
      "App-Store-Einreichung mit Screenshots und Vorschauvideo",
    ],
    proofs: [
      { label: "Wien Event Radar für iOS ansehen", href: caseStudyBase["wien-event-radar-ios"].path },
      { label: "Operations-App ansehen, ein internes iOS-Werkzeug", href: caseStudyBase["operations-app"].path },
    ],
    media: iosAppsMedia(
      "Wien Event Radar für iOS: Entdecken-Ansicht mit Empfehlungen",
      "Wien Event Radar für iOS: Events auf der Karte von Wien",
    ),
  },
];

// "Launch inklusive" from the homepage headline, spelled out. A real
// sequence, so the steps are numbered.
export const launch: LaunchCopy = {
  title: "Launch inklusive.",
  intro: "Von der ersten Nachricht bis nach dem Go-live: ein Ansprechpartner für den ganzen Weg.",
  steps: [
    {
      title: "Idee schärfen",
      body: "Ziel, Zielgruppe und die eine Sache, die der erste Release können muss.",
    },
    {
      title: "Umfang und Preis",
      body: "Ein klarer Vorschlag mit Umfang, Preis und nächsten Schritten, bevor gebaut wird.",
    },
    {
      title: "Design und Bau",
      body: "Interface, Interaktion und Code entstehen zusammen, in kurzen Runden mit dir.",
    },
    {
      title: "Launch",
      body: "Domain, Hosting, SEO- und Security-Basics, CMS-Übergabe oder App-Store-Einreichung.",
    },
    {
      title: "Danach",
      body: "Fixes, Anpassungen und Weiterentwicklung. Code und Accounts gehören dir.",
    },
  ],
};
