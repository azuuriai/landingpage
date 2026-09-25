import Image from "next/image";
import { PhoneFrame } from "@/app/_components/phone-frame";
import { iosApp } from "@/app/projects-data";
import { ProjectButton } from "../case-study-page";
import { CapabilityList, CaseSection, Feature, SectionHeading } from "../case-study-blocks";

// Facts come from the product's repositories (web: Vienna Event Dashboard,
// admin: radar-admin-ios, docs/research-system.md and
// docs/admin-operations-playbook.md, September 2026). No usage numbers until
// they are documented.

const features = [
  {
    still: {
      src: "/case-studies/vienna-event-radar/dashboard.jpg",
      alt: "Startseite von Vienna Event Radar mit schnellen Filtern und Top Picks",
      width: 1152,
      height: 720,
    },
    title: "Entdecken",
    text: "Eine Startseite statt dreißig Tabs: Top Picks, Heute und Morgen und schnelle Filter für Wochenende, Kostenlos und Outdoor.",
  },
  {
    still: {
      src: "/case-studies/vienna-event-radar/event-detail.jpg",
      alt: "Eventdetails zur Wiener Kaiser Wiesn mit Beschreibung und nächsten Terminen",
      width: 1152,
      height: 720,
    },
    title: "Eventdetails",
    text: "Termine, Ort, Preis, Quelle und was einen erwartet, in einer Ansicht. Merken, bewerten und teilen direkt von dort.",
  },
  {
    still: {
      src: "/case-studies/vienna-event-radar/proposal.jpg",
      alt: "Dialog „Vorschlag teilen“ für das SLASH Filmfestival mit Teilen per E-Mail und WhatsApp",
      width: 1152,
      height: 720,
    },
    title: "Vorschlagen",
    text: "Ein Event per Link an Freunde schicken, samt Kalendereintrag. Sie antworten mit „Bin dabei“ oder „Eher nicht“.",
  },
  {
    still: {
      src: "/case-studies/vienna-event-radar/radar-assistant.jpg",
      alt: "Der Assistent „Frag dein Radar“ schlägt Outdoor-Events für morgen vor",
      width: 1152,
      height: 720,
    },
    title: "Frag dein Radar",
    text: "Ein Assistent, der Wünsche wie „Outdoor, morgen, mit Freunden“ versteht. Welche Events passen, entscheidet eine nachvollziehbare Suche, nicht das Sprachmodell.",
  },
];

const platform = [
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
];

const backstage = [
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
    text: "Betrieb, Nutzung, Reichweite, Newsletter und Social Studio auch unterwegs, geschützt mit Face ID.",
  },
  {
    title: "Überwachter Betrieb",
    text: "Automatisierte Tests für Datenverträge, Duplikate, Sicherheit und Terminlogik. Sentry meldet Fehler aus Web und App.",
  },
];

export function ViennaEventRadarCaseStudy() {
  return (
    <>
      <CaseSection tone="tinted">
        <SectionHeading
          title="Vom Stöbern bis zur Verabredung."
          intro="Die Plattform beantwortet eine einfache Frage: Was machen wir heute, am Wochenende oder mit Freunden? Jeder Schritt dahin ist gebaut, vom ersten Filter bis zum Vorschlag, auf den andere antworten."
        />
        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-10">
          {features.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </CaseSection>

      <CaseSection>
        <SectionHeading
          title="Mehr als eine Liste von Events."
          intro="Dahinter steckt ein vollständiges Produkt mit Konten, Gruppen, Newsletter und Seiten, die in Suchmaschinen gefunden werden."
        />
        <div className="mt-12">
          <CapabilityList items={platform} />
        </div>
      </CaseSection>

      <CaseSection tone="dark">
        <SectionHeading
          dark
          title="Hinter den Kulissen: Recherche, Prüfung, Freigabe."
          intro="AI beschleunigt die Recherche, veröffentlicht aber nichts von allein. Jedes Event läuft durch eine Prüfung, bevor es online geht, und der Betrieb lässt sich vom Schreibtisch und vom iPhone aus steuern."
        />
        <div className="mt-12">
          <CapabilityList dark items={backstage} />
        </div>
        <p className="mt-8 text-[13.5px] leading-6 text-[#aeb8b3]">
          Next.js, React, TypeScript, Supabase, Vercel, Sentry
        </p>
      </CaseSection>

      <CaseSection tone="tinted">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-20">
          <div>
            <h2 className="text-pretty font-display text-[31px] font-semibold leading-[1.04] tracking-[-0.025em] text-[#181811] sm:text-[42px]">
              Auch als native iOS-App.
            </h2>
            <p className="mt-5 max-w-[56ch] text-[15px] leading-7 text-[#5f5f56] sm:text-[16px]">
              Web und App teilen sich Backend, Konten und Gruppen. Die Oberflächen bleiben trotzdem
              eigenständig: responsiv im Browser, nativ in SwiftUI auf dem iPhone, mit Widgets,
              Live-Aktivität und Kalender.
            </p>
            <div className="mt-8">
              <ProjectButton
                link={{ label: "iOS-App ansehen", href: iosApp.path, internal: true }}
              />
            </div>
          </div>
          <div className="flex items-end justify-center gap-[6%]">
            {["entdecken", "karte"].map((screen, index) => (
              <div
                key={screen}
                className={`w-[44%] max-w-[190px] drop-shadow-[0_26px_32px_rgba(17,18,17,0.22)] ${index === 1 ? "mb-[8%]" : ""}`}
              >
                <PhoneFrame>
                  <Image
                    src={`/case-studies/wien-event-radar-ios/${screen}.jpg`}
                    alt={
                      index === 0
                        ? "Wien Event Radar für iOS: Entdecken"
                        : "Wien Event Radar für iOS: Karte"
                    }
                    fill
                    sizes="190px"
                    className="object-cover"
                  />
                </PhoneFrame>
              </div>
            ))}
          </div>
        </div>
      </CaseSection>
    </>
  );
}
