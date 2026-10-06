import Image from "next/image";
import { CapabilityList, CaseSection, FigureRow, PhoneFeature, SectionHeading } from "../case-study-blocks";

// Facts come from the radar-admin-ios repository (build 26, README, Sources and
// the 53 unit and UI tests, October 2026). Screens are the app's preview mode
// with sample data, captured in the iOS Simulator; the story graphics are real
// exports from the Social Studio (docs/screenshots, build 23).

function screen(name: string, alt: string) {
  return { src: `/case-studies/operations-app/${name}.jpg`, alt, width: 603, height: 1311 };
}

const areas = [
  {
    still: screen("monitor", "Monitor: Alles im Blick, mit Nutzung, Reichweite, Zustellung, Nutzern und Feedback-Frage"),
    title: "Monitor",
    text: "Hintergrund-Jobs, Fehler, Nutzung und Reichweite auf einer Seite. Probleme fallen auf, bevor sie jemand meldet.",
  },
  {
    still: screen("social-editor", "Social Studio: Editor mit der Titelgrafik „Wien hat was vor.“"),
    title: "Social Studio",
    text: "Aus aktuellen Inhalten entstehen Karussells und Stories im Design der Marke.",
  },
  {
    still: screen("top-picks", "Top Picks: die vier Plätze der Startseite, einer fest gesetzt, drei automatisch"),
    title: "Top Picks",
    text: "Festlegen, was oben auf der Startseite steht, oder die Auswahl der Automatik überlassen.",
  },
];

const studio = [
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
];

const foundation = [
  { title: "Google-Login und Face ID", text: "Sitzung nur im Schlüsselbund, Sperre beim erneuten Öffnen." },
  { title: "Rollen im Backend geprüft", text: "Jede Anfrage prüft Token und Admin-Rolle auf dem Server." },
];

const stories = [
  { src: "story-cover", alt: "Story-Grafik: „Wien hat was vor.“ mit zwei Ideen fürs Wochenende" },
  { src: "story-event", alt: "Story-Grafik zum Event „Ein Abend im Museum“ mit iPhone-Ansicht" },
  { src: "story-closing", alt: "Abschluss-Grafik der Story mit Hinweis auf die App" },
];

export function OperationsAppCaseStudy() {
  return (
    <>
      <CaseSection tone="tinted">
        <SectionHeading
          stacked
          title="Der Alltag einer Plattform, in einer App."
          intro="Dazu kommt die Newsletter-Redaktion. Die Daten kommen live aus dem Backend; zu sehen ist der Vorschaumodus mit Beispieldaten."
        />
        <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((item) => (
            <PhoneFeature key={item.title} {...item} />
          ))}
        </div>
      </CaseSection>

      <CaseSection>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="min-w-0">
            <h2 className="text-pretty font-display text-[31px] font-semibold leading-[1.04] tracking-[-0.025em] text-[#181811] sm:text-[42px]">
              Aus Inhalten werden fertige Posts.
            </h2>
            <div className="mt-8">
              <CapabilityList items={studio} columns={1} />
            </div>
          </div>
          <StoryStrip />
        </div>
      </CaseSection>

      <CaseSection tone="dark">
        <SectionHeading dark stacked title="Gebaut wie ein Produkt, nicht wie ein Skript." />
        <div className="mt-10">
          <FigureRow
            items={[
              { value: "4", label: "Bereiche in einer App" },
              { value: "11", label: "überwachte Hintergrund-Jobs" },
              { value: "53", label: "automatisierte Unit- und UI-Tests" },
              { value: "2", label: "Exportformate für Instagram" },
            ]}
          />
        </div>
        <div className="mt-10">
          <CapabilityList dark items={foundation} />
        </div>
        <p className="mt-8 text-[13.5px] leading-6 text-[#aeb8b3]">
          SwiftUI, AuthenticationServices, LocalAuthentication, Keychain, Next.js, Supabase,
          PostgreSQL, Sentry
        </p>
      </CaseSection>
    </>
  );
}

// Three real story exports, the middle one raised, like a carousel in motion.
function StoryStrip() {
  return (
    <div className="grid min-w-0 grid-cols-3 items-center gap-3 sm:gap-5">
      {stories.map((story, index) => (
        <figure
          key={story.src}
          className={`overflow-hidden rounded-[14px] border border-[#181811]/10 bg-[#f6f6f4] shadow-[0_34px_90px_-50px_rgba(17,18,17,0.5)] ${
            index === 1 ? "-translate-y-6 sm:-translate-y-10" : ""
          }`}
        >
          <Image
            src={`/case-studies/operations-app/${story.src}.jpg`}
            alt={story.alt}
            width={720}
            height={1280}
            sizes="(min-width: 1024px) 220px, 30vw"
            className="block h-auto w-full"
          />
        </figure>
      ))}
    </div>
  );
}
