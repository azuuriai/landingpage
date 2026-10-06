import Image from "next/image";
import { PhoneFrame } from "@/app/_components/phone-frame";
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
    text: "Hintergrund-Jobs, Fehler, Nutzung und Zustellung: Probleme fallen auf, bevor sie jemand meldet.",
  },
  {
    still: screen("social-editor", "Social Studio: Editor mit der Titelgrafik „Wien hat was vor.“"),
    title: "Social Studio",
    text: "Aus aktuellen Inhalten entstehen Karussells und Stories im Design der Marke.",
  },
  {
    still: screen("newsletter", "Newsletter: Vorschau der Ausgabe „Deine Woche in Wien“ und die Auswahl der Events"),
    title: "Newsletter",
    text: "Bis zu fünf Events wählen, Einleitung schreiben, Vorschau prüfen, Testmail an sich selbst.",
  },
  {
    still: screen("top-picks", "Top Picks: die vier Plätze der Startseite, einer fest gesetzt, drei automatisch"),
    title: "Top Picks",
    text: "Die vier Plätze oben auf der Startseite festlegen, Events ausblenden oder der Automatik zurückgeben.",
  },
];

const studio = [
  {
    title: "Vorlagen mit echten Inhalten",
    text: "Für die Woche, das Wochenende, ein einzelnes Event oder ein Feature. Events, Termine und Bilder kommen direkt aus der Plattform.",
  },
  {
    title: "Gestaltung im Detail",
    text: "Texte überschreiben, eigene Fotos und Bildausschnitte, Reihenfolge der Slides, Größe von Überschrift und iPhone-Ansicht.",
  },
  {
    title: "Export für Instagram",
    text: "PNG in 1080 × 1350 für Karussells und 1080 × 1920 für Stories, direkt ins Teilen-Menü oder in die Fotos.",
  },
  {
    title: "Bewusst halbautomatisch",
    text: "Die App entwirft, der Mensch entscheidet. Veröffentlicht wird von Hand, die App vermerkt nur, was online ist.",
  },
];

const monitor = [
  {
    title: "Hintergrund-Jobs",
    text: "Elf geplante Dienste mit letztem Aufruf, letztem Erfolg und nächstem Termin, dazu der Verlauf der letzten Läufe.",
  },
  {
    title: "Fehler und Stabilität",
    text: "Fehler aus Sentry und aus der Plattform selbst, getrennt nach Versionen.",
  },
  {
    title: "Nutzung und Reichweite",
    text: "Zähler für 24 Stunden, 7 und 30 Tage im Vergleich zur Vorperiode, Suchklicks aus Google und Downloads aus dem App Store.",
  },
  {
    title: "Ehrlich bei Lücken",
    text: "Fehlende Daten erscheinen als unbekannt, nie als grün.",
  },
];

const foundation = [
  {
    title: "Anmeldung mit Google",
    text: "Über das Anmeldefenster von iOS mit PKCE. Die Sitzung liegt nur im Schlüsselbund des Geräts.",
  },
  {
    title: "Face ID beim Öffnen",
    text: "Die App sperrt sich selbst und fragt beim erneuten Öffnen nach Face ID oder dem Gerätecode.",
  },
  {
    title: "Rollen im Backend geprüft",
    text: "Jede Anfrage prüft Token und Admin-Rolle auf dem Server, nicht nur in der App.",
  },
  {
    title: "Offline-fest",
    text: "Entwürfe überstehen Funkloch und Neustart. Gleichzeitige Änderungen werden erkannt, nicht überschrieben.",
  },
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
          title="Vier Bereiche, eine App."
          intro="Jeder Bereich nimmt eine wiederkehrende Aufgabe ab, für die es sonst Laptop, Dashboard und mehrere Logins bräuchte. Die Daten kommen live aus dem Backend der Plattform. Zu sehen ist hier der Vorschaumodus mit Beispieldaten."
        />
        <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((item) => (
            <PhoneFeature key={item.title} {...item} />
          ))}
        </div>
      </CaseSection>

      <CaseSection>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="min-w-0">
            <h2 className="text-pretty font-display text-[31px] font-semibold leading-[1.04] tracking-[-0.025em] text-[#181811] sm:text-[42px]">
              Aus Inhalten werden fertige Posts.
            </h2>
            <p className="mt-5 max-w-[56ch] text-[15px] leading-7 text-[#5f5f56] sm:text-[16px]">
              Das Social Studio beginnt mit einer Vorlage und füllt sie mit dem, was auf der
              Plattform gerade aktuell ist. Danach bleibt der Mensch am Steuer: anpassen,
              exportieren, posten.
            </p>
            <div className="mt-8">
              <CapabilityList items={studio} columns={1} />
            </div>
          </div>
          <StoryStrip />
        </div>
      </CaseSection>

      <CaseSection tone="tinted">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(220px,300px)_minmax(0,1fr)] lg:gap-20">
          <div className="order-last mx-auto w-full max-w-[280px] drop-shadow-[0_30px_40px_rgba(17,18,17,0.22)] md:order-first">
            <PhoneFrame>
              <Image
                src="/case-studies/operations-app/monitor-jobs.jpg"
                alt="Monitor mit den Cron-Jobs: Research und Bilder mit letztem Aufruf und letztem Erfolg"
                fill
                sizes="280px"
                className="object-cover"
              />
            </PhoneFrame>
          </div>
          <div className="min-w-0">
            <h2 className="text-pretty font-display text-[31px] font-semibold leading-[1.04] tracking-[-0.025em] text-[#181811] sm:text-[42px]">
              Ein Blick, ob alles läuft.
            </h2>
            <p className="mt-5 max-w-[56ch] text-[15px] leading-7 text-[#5f5f56] sm:text-[16px]">
              Eine Plattform mit vielen automatischen Abläufen braucht einen Ort, an dem man sieht,
              was gerade passiert. Der Monitor zeigt es auf einer Seite, mit Uhrzeiten in Wiener Zeit.
            </p>
            <div className="mt-8">
              <CapabilityList items={monitor} columns={1} />
            </div>
          </div>
        </div>
      </CaseSection>

      <CaseSection tone="dark">
        <SectionHeading
          dark
          stacked
          title="Gebaut wie ein Produkt, nicht wie ein Skript."
          intro="Ein internes Werkzeug kommt an alles heran. Deshalb gelten dieselben Maßstäbe wie für eine öffentliche App: sichere Anmeldung, Prüfung auf dem Server und Tests."
        />
        <div className="mt-12">
          <FigureRow
            items={[
              { value: "4", label: "Bereiche in einer App" },
              { value: "11", label: "überwachte Hintergrund-Jobs" },
              { value: "53", label: "automatisierte Unit- und UI-Tests" },
              { value: "2", label: "Exportformate für Instagram" },
            ]}
          />
        </div>
        <div className="mt-12">
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
            sizes="(min-width: 1024px) 200px, 30vw"
            className="block h-auto w-full"
          />
        </figure>
      ))}
    </div>
  );
}
