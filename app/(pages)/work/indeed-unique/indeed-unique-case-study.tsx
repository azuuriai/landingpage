import { AutoplayVideo } from "@/app/_components/autoplay-video";
import { PhoneFrame } from "@/app/_components/phone-frame";
import { RECORDINGS } from "@/app/media";
import {
  CapabilityList,
  CaseSection,
  FigureRow,
  SectionHeading,
  VideoFeature,
} from "../case-study-blocks";

// Facts are taken from the project's own documentation (docs/SANITY_STATUS.md,
// DEPLOYMENT.md, DECISION_LOG.md, MIGRATION_PLAN, September 2026) and its
// source. Keep them in sync when the site changes — no numbers without a source.

const booking = [
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
];

const cmsTools = [
  {
    title: "Ein Menüpunkt pro Aufgabe",
    text: "Neuigkeiten posten, Kurse und Team sortieren, Tanzjahr und kursfreie Tage eintragen.",
  },
  {
    title: "Neue Seiten aus Bausteinen",
    text: "22 gestaltete Abschnitte, frei kombinierbar. Jede Seite wird individuell und bleibt im Look der Marke.",
  },
  {
    title: "Startseite mit offenen Aufgaben",
    text: "Das Studio sieht auf einen Blick, was noch fehlt, und alle Entwürfe, die noch nicht online sind.",
  },
  {
    title: "Vorschau vor dem Veröffentlichen",
    text: "Ein Klick baut eine Vorschau der ganzen Website, die man zum Gegenlesen weiterschicken kann.",
  },
  {
    title: "Hilfen, die Fehler verhindern",
    text: "Zeichenlimits, Pflicht-Bildbeschreibungen, eine Vorschau des Bildzuschnitts und eine Seitenauswahl für Links.",
  },
  {
    title: "Status immer sichtbar",
    text: "Eine Leiste zeigt, ob die letzte Änderung schon live ist. Veröffentlichen stößt den Neuaufbau automatisch an.",
  },
];

const cmsFigures = [
  { value: "24", label: "feste Seiten, alle im CMS bearbeitbar" },
  { value: "22", label: "Bausteine für neue Seiten" },
  { value: "182", label: "Beiträge aus der alten Website übernommen" },
  { value: "279", label: "alte Adressen dauerhaft weitergeleitet" },
];

const operations = [
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
];

export function IndeedUniqueCaseStudy() {
  return (
    <>
      <CaseSection tone="tinted">
        <SectionHeading
          title="Eine Website, die sich nach Tanz anfühlt."
          intro="Bewegung ist das Handwerk des Studios, also auch das der Website."
          stacked
        />
        {/* Four recordings of the live site side by side, one size each. */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-5">
          <VideoFeature
            recording={RECORDINGS.indeedUniqueEntry}
            label="Einstiegsanimation von Indeed Unique: Eine Figur tanzt sich zum Logo zusammen"
            title="Einstieg"
            text="Eine Strichfigur tanzt sich zum Logo zusammen."
          />
          <VideoFeature
            recording={RECORDINGS.indeedUniqueNews}
            label="Startseite von Indeed Unique: Beiträge blättern im Tablet, danach fährt das Regal mit allen Beiträgen nach rechts"
            title="Neuigkeiten"
            text="Aktuelles blättert im Tablet um, dahinter zieht das ganze Archiv vorbei."
          />
          <VideoFeature
            recording={RECORDINGS.indeedUniqueArchive}
            label="Videoarchiv von Indeed Unique: Filmvorschauen drehen sich beim Scrollen als räumliche Galerie"
            title="Videoarchiv"
            text="Auftritte aus zehn Jahren, als Galerie, die sich beim Scrollen dreht."
          />
          <VideoFeature
            recording={RECORDINGS.indeedUniqueBooking}
            label="Buchung bei Indeed Unique: Stundenplan, Semesterblöcke und Gutscheinkauf aus Eversports im Design der Website"
            title="Buchung"
            text="Kurs finden, Semesterblock wählen, Gutschein verschenken, alles im Design der Website."
          />
        </div>
      </CaseSection>

      <CaseSection tone="dark">
        <SectionHeading dark title="Das Studio pflegt seine Website selbst." />
        <div className="mt-12">
          <FigureRow items={cmsFigures} />
        </div>
        <div className="mt-12">
          <CapabilityList dark items={cmsTools} />
        </div>
      </CaseSection>

      <CaseSection>
        <SectionHeading
          title="Buchung direkt aus Eversports."
          intro="Stundenplan, Semesterblöcke und Gutscheine kommen direkt aus Eversports, dem System, mit dem das Studio ohnehin arbeitet, und sehen trotzdem aus wie die Website. Nichts wird doppelt gepflegt."
        />
        <div className="mt-12">
          <CapabilityList items={booking} />
        </div>
      </CaseSection>

      <CaseSection tone="tinted">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(220px,300px)] lg:gap-20">
          <div>
            <h2 className="text-pretty font-display text-[31px] font-semibold leading-[1.04] tracking-[-0.025em] text-[#181811] sm:text-[42px]">
              Auf dem Handy genauso vollständig.
            </h2>
            <p className="mt-5 max-w-[56ch] text-[15px] leading-7 text-[#5f5f56] sm:text-[16px]">
              Die mobile Version war von Anfang an gleichwertig geplant und ist kein Nachtrag:
              dieselben Inhalte, eine eigene Navigation, Einstieg und Schaukasten für den kleinen
              Bildschirm gebaut und kurze Wege zu Stundenplan und Anmeldung.
            </p>
          </div>
          <div className="mx-auto w-full max-w-[260px] drop-shadow-[0_30px_40px_rgba(17,18,17,0.22)]">
            <PhoneFrame>
              <AutoplayVideo
                recording={RECORDINGS.indeedUniqueMobile}
                label="Indeed Unique auf dem iPhone: Einstieg, Schaukasten und Stundenplan"
                className="h-full w-full object-cover"
              />
            </PhoneFrame>
          </div>
        </div>
      </CaseSection>

      <CaseSection>
        <SectionHeading
          title="Läuft, ohne dass jemand daran denken muss."
          intro="Eine Website für ein Studio muss vor allem zuverlässig sein. Deshalb gibt es keinen Server, keine Datenbank und keine Plattformgebühren, dafür automatische Prüfungen und Sicherungen."
        />
        <div className="mt-12">
          <CapabilityList items={operations} />
        </div>
      </CaseSection>
    </>
  );
}
