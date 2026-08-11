import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

const WEB_URL = "https://viennaeventradar.at";
const APP_STORE_URL =
  "https://apps.apple.com/at/app/wien-event-radar/id6771109823";

const systemSteps = [
  {
    label: "01 · Recherche",
    text: "Mehrere Quellen und API-gestützte Recherche liefern strukturierte Kandidaten.",
  },
  {
    label: "02 · Review",
    text: "Staging, Quellenprüfung und Admin-Entscheidungen verhindern ungeprüftes Publishing.",
  },
  {
    label: "03 · Datenbasis",
    text: "Supabase hält Events, Termine, Auth, Nutzerkontexte und Zugriffsregeln zusammen.",
  },
  {
    label: "04 · Produkt",
    text: "Next.js-Webprodukt und native SwiftUI-App greifen auf denselben Backend-Vertrag zu.",
  },
];

const decisions = [
  {
    label: "Datenhaltung",
    title: "Von lokalem JSON zu Supabase.",
    text: "Die erste Version las kuratierte Events direkt aus data/events.json. Mit dem Wechsel zu Supabase entstand die Grundlage für laufende Aktualisierung, Review, Auth und gemeinsame Daten für Web und App.",
  },
  {
    label: "AI im Produkt",
    title: "Recherche beschleunigen, Veröffentlichung kontrollieren.",
    text: "AI unterstützt das Finden und Strukturieren von Event-Kandidaten. Bevor Inhalte öffentlich werden, laufen sie durch definierte Verträge, Quellenchecks und einen Admin-Review.",
  },
  {
    label: "Plattform",
    title: "Geteiltes Backend, eigenständige Oberflächen.",
    text: "Web und iOS teilen Datenmodell und Nutzerkontexte. Die Interfaces bleiben dennoch plattformspezifisch: responsive Discovery im Web, native Navigation und Systemfunktionen auf dem iPhone.",
  },
];

const appScreens = [
  {
    src: "/case-studies/appstore/02_entdecken.png",
    alt: "Wien Event Radar App – Entdecken-Ansicht",
  },
  {
    src: "/case-studies/appstore/04_event_details.png",
    alt: "Wien Event Radar App – Eventdetails",
  },
  {
    src: "/case-studies/appstore/06_merken_teilen_kalender.png",
    alt: "Wien Event Radar App – Merken, Teilen und Kalender",
  },
];

function ExternalLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex h-11 items-center gap-2 rounded-full px-5 text-[13px] font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007a72]/45 ${
        secondary
          ? "border border-[#cdcdc6] bg-white/60 text-[#181811] hover:bg-white"
          : "bg-[#181811] text-[#f2f2f0] hover:bg-black"
      }`}
    >
      {children}
      <ArrowUpRight size={15} />
    </a>
  );
}

export function WorkCaseStudy() {
  return (
    <>
      <section className="border-t border-[#d9d9d3] bg-[#fafafa]">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-20 lg:px-10 lg:py-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#006f68]">
              Mein Beitrag
            </p>
            <h2 className="mt-4 max-w-[18ch] font-display text-[31px] font-medium leading-[1.06] tracking-[-0.025em] text-[#181811] sm:text-[42px]">
              Produktlogik, Datenfluss und Auslieferung in eigener Verantwortung.
            </h2>
          </div>
          <div className="grid gap-7 text-[15px] leading-7 text-[#5f5f56] sm:text-[16px]">
            <p>
              Ich habe das Ausgangsproblem geschärft, den MVP gescoped und die
              Informationsarchitektur, Nutzerflüsse und technischen Verträge
              aufgebaut. Dazu gehören Web- und iOS-Interface, Supabase-Datenmodell,
              Recherche- und Review-Logik, Tests, Monitoring und Deployment.
            </p>
            <p>
              Claude Code und ChatGPT nutze ich als Entwicklungswerkzeuge für Tempo
              und Iteration. Entscheidungen zu Produktumfang, Architektur,
              Validierung und Veröffentlichung treffe und prüfe ich selbst.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <ExternalLink href={WEB_URL}>Live-Webprodukt öffnen</ExternalLink>
              <ExternalLink href={APP_STORE_URL} secondary>
                App Store öffnen
              </ExternalLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#d9d9d3] bg-[#111714] text-[#f2f2f0]">
        <div className="mx-auto w-full max-w-[1180px] px-6 py-12 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)] lg:gap-20">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#61d3ca]">
                Datenfluss
              </p>
              <h2 className="mt-4 max-w-[17ch] font-display text-[30px] font-medium leading-[1.08] tracking-[-0.02em] sm:text-[40px]">
                AI unterstützt die Recherche. Der Review entscheidet, was live geht.
              </h2>
            </div>
            <p className="max-w-[62ch] text-[15px] leading-7 text-[#c9d0cc] sm:text-[16px]">
              Die technische Kette ist bewusst nachvollziehbar aufgebaut. Ein
              Recherchetreffer ist noch kein veröffentlichter Event; Quellen,
              Status und Admin-Entscheidungen bleiben Teil des Systems.
            </p>
          </div>

          <ol className="mt-10 grid border-y border-white/15 md:grid-cols-2 xl:grid-cols-4">
            {systemSteps.map((step, index) => (
              <li
                key={step.label}
                className={`py-6 md:px-6 ${
                  index > 0 ? "border-t border-white/15 md:border-l md:border-t-0" : ""
                } ${index === 2 ? "md:border-l-0 xl:border-l" : ""}`}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#61d3ca]">
                  {step.label}
                </p>
                <p className="mt-3 text-[14px] leading-6 text-[#d5dad7]">{step.text}</p>
              </li>
            ))}
          </ol>

          <p className="mt-7 max-w-[100ch] font-mono text-[11px] leading-6 text-[#aeb8b3]">
            Next.js · React · TypeScript · Supabase · Vercel · Perplexity API ·
            Sentry · SwiftUI · Git
          </p>
        </div>
      </section>

      <section className="border-t border-[#d9d9d3]">
        <div className="mx-auto w-full max-w-[1180px] px-6 py-12 sm:px-8 lg:px-10 lg:py-20">
          <div className="max-w-[760px]">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#006f68]">
              Drei belegbare Entscheidungen
            </p>
            <h2 className="mt-4 max-w-[22ch] font-display text-[31px] font-medium leading-[1.08] tracking-[-0.025em] text-[#181811] sm:text-[42px]">
              Nicht nur was gebaut wurde, sondern warum das System so aussieht.
            </h2>
          </div>
          <div className="mt-10 border-t border-[#d9d9d3]">
            {decisions.map((decision) => (
              <article
                key={decision.label}
                className="grid gap-4 border-b border-[#d9d9d3] py-8 md:grid-cols-[11rem_minmax(0,0.8fr)_minmax(0,1fr)] md:gap-8 lg:py-10"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.17em] text-[#006f68]">
                  {decision.label}
                </p>
                <h3 className="font-display text-[23px] font-medium leading-[1.14] tracking-[-0.018em] text-[#181811] sm:text-[27px]">
                  {decision.title}
                </h3>
                <p className="text-[15px] leading-7 text-[#5f5f56]">{decision.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#d9d9d3] bg-[#fafafa]">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(320px,1fr)] lg:items-start lg:px-10 lg:py-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#006f68]">
              Native iOS-App
            </p>
            <h2 className="mt-4 max-w-[20ch] font-display text-[31px] font-medium leading-[1.08] tracking-[-0.025em] text-[#181811] sm:text-[42px]">
              Eigenständige SwiftUI-Oberfläche auf demselben Produktkern.
            </h2>
            <p className="mt-5 max-w-[58ch] text-[15px] leading-7 text-[#5f5f56] sm:text-[16px]">
              Die App nutzt native Navigation und Systemfunktionen für Merken,
              Teilen, Kalender, Suche, Karte und persönliche Radar-Ansichten. Die
              Veröffentlichung im App Store ist Teil des Produkts, nicht nur eine
              Designstudie.
            </p>
            <div className="mt-7">
              <ExternalLink href={APP_STORE_URL}>Im App Store ansehen</ExternalLink>
            </div>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-3 [scrollbar-width:thin]">
            {appScreens.map((screen) => (
              <Image
                key={screen.src}
                src={screen.src}
                alt={screen.alt}
                width={720}
                height={1561}
                className="h-[390px] w-auto shrink-0 rounded-[10px] border border-[#d9d9d3] sm:h-[430px]"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#d9d9d3]">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-6 py-12 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#006f68]">
              Qualität und Betrieb
            </p>
            <h2 className="mt-4 font-display text-[28px] font-medium leading-[1.1] tracking-[-0.02em] text-[#181811] sm:text-[34px]">
              Tests und Monitoring gehören zum Produkt.
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#5f5f56]">
              Vitest deckt unter anderem Datenverträge, Deduplizierung, Security und
              Terminlogik ab. Die iOS-Codebasis enthält Unit- und UI-Tests. Sentry,
              App-Fehler-Tracking und Vercel Speed Insights unterstützen den Betrieb.
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#006f68]">
              Ehrliche Grenze
            </p>
            <h2 className="mt-4 font-display text-[28px] font-medium leading-[1.1] tracking-[-0.02em] text-[#181811] sm:text-[34px]">
              Live belegt – Reichweite nicht behauptet.
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#5f5f56]">
              Webprodukt und App sind öffentlich nutzbar und werden weiterentwickelt.
              Solange keine belastbaren Nutzungsmetriken dokumentiert sind, dient der
              Case als Beleg für Produkt- und Delivery-Verantwortung, nicht für
              behauptete Skalierung.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
