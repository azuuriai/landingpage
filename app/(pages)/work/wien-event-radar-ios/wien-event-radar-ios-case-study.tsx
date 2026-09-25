import Image from "next/image";
import { PhoneFrame } from "@/app/_components/phone-frame";
import { CapabilityList, CaseSection, PhoneFeature, SectionHeading } from "../case-study-blocks";

// Facts come from the iOS repository (Wien Event Radar, version 1.3.4,
// docs/shared-supabase-contract.md, September 2026). Screens are the clean
// App Store captures from AppStorePreviews/assets/2026-09.

function screen(name: string, alt: string) {
  return { src: `/case-studies/wien-event-radar-ios/${name}.jpg`, alt, width: 603, height: 1311 };
}

const screens = [
  {
    still: screen("entdecken", "Entdecken-Ansicht mit Empfehlungen und Heute & Morgen"),
    title: "Entdecken",
    text: "Empfehlungen zum Durchwischen und alles für heute und morgen auf einen Blick.",
  },
  {
    still: screen("fuer-dich", "Für dich: das persönliche Radar mit gewählten Interessen"),
    title: "Für dich",
    text: "Ein persönliches Radar: ein paar Interessen wählen, und der Feed wird mit jedem Tipp genauer.",
  },
  {
    still: screen("suche", "Suche mit schnellen Filtern und Kategorien"),
    title: "Suche",
    text: "Kategorien, schnelle Filter und freie Suche. Ab iOS 26 versteht sie Wünsche in natürlicher Sprache, direkt auf dem Gerät.",
  },
  {
    still: screen("details", "Eventdetails zu Weinwandern Wien mit Zeitraum, Ort und Route"),
    title: "Eventdetails",
    text: "Zeitraum, Ort, Route und Quelle in einer Ansicht, mit einem Tipp in Karten oder Google Maps.",
  },
  {
    still: screen("aktionen", "Aktionen: Countdown vormerken, Teilnahme speichern, Quelle öffnen"),
    title: "Merken und planen",
    text: "Speichern, in den Kalender eintragen, mit der Gruppe planen oder teilen. Der Countdown lässt sich vormerken.",
  },
  {
    still: screen("karte", "Karte von Wien mit Events als Markierungen"),
    title: "Karte",
    text: "Alle Events auf der Karte von Wien, gefiltert nach heute, dieser Woche oder gratis.",
  },
];

const system = [
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
];

const foundation = [
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
];

export function WienEventRadarIosCaseStudy() {
  return (
    <>
      <CaseSection tone="tinted">
        <SectionHeading
          title="Vier Tabs, ein Radar."
          intro="Entdecken, Für dich, Favoriten und Suche: Die App folgt den Mustern, die man von iOS kennt, mit nativer Navigation, Gesten und Systemfunktionen statt einer Website im App-Kostüm."
        />
        <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {screens.map((item) => (
            <PhoneFeature key={item.title} {...item} />
          ))}
        </div>
      </CaseSection>

      <CaseSection>
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(220px,300px)] lg:gap-20">
          <div>
            <h2 className="text-pretty font-display text-[31px] font-semibold leading-[1.04] tracking-[-0.025em] text-[#181811] sm:text-[42px]">
              Eng mit dem iPhone verzahnt.
            </h2>
            <p className="mt-5 max-w-[56ch] text-[15px] leading-7 text-[#5f5f56] sm:text-[16px]">
              Die App lebt nicht nur in ihrem Icon. Sie zeigt sich dort, wo man ohnehin hinschaut:
              auf dem Sperrbildschirm, im Kalender und in der Systemsuche.
            </p>
            <div className="mt-8">
              <CapabilityList items={system} columns={1} />
            </div>
          </div>
          <div className="mx-auto w-full max-w-[280px] drop-shadow-[0_30px_40px_rgba(17,18,17,0.22)]">
            <PhoneFrame>
              <Image
                src="/case-studies/wien-event-radar-ios/live-activity.jpg"
                alt="Live-Aktivität von Wien Event Radar auf dem Sperrbildschirm: Weinwandern Wien läuft jetzt"
                fill
                sizes="280px"
                className="object-cover"
              />
            </PhoneFrame>
          </div>
        </div>
      </CaseSection>

      <CaseSection tone="dark">
        <SectionHeading
          dark
          title="Eigenständige App, gemeinsamer Kern."
          intro="Web und iPhone teilen sich Daten, Konten und Gruppen. Die Oberfläche ist trotzdem ganz für iOS gebaut und wird wie ein eigenes Produkt gepflegt, getestet und veröffentlicht."
        />
        <div className="mt-12">
          <CapabilityList dark items={foundation} />
        </div>
        <p className="mt-8 text-[13.5px] leading-6 text-[#aeb8b3]">
          SwiftUI, MapKit, EventKit, WidgetKit, ActivityKit, App Intents, Supabase, Sentry
        </p>
      </CaseSection>
    </>
  );
}
