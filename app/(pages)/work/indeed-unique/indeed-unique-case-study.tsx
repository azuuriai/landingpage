import Image from "next/image";
import { AutoplayVideo } from "@/app/_components/autoplay-video";
import { PhoneFrame } from "@/app/_components/phone-frame";
import { RECORDINGS } from "@/app/media";

// Facts below are taken from the project's own documentation (Sanity status,
// deployment and migration notes, September 2026). Keep them in sync when the
// site changes — no numbers without a source.

const goals = [
  {
    label: "01 · Klare Wege",
    text: "Besucher:innen finden in wenigen Klicks zu Kursen, Stundenplan, Preisen und Anmeldung.",
  },
  {
    label: "02 · Selbst pflegbar",
    text: "Das Studio ändert Texte, Bilder und Beiträge selbst, ohne dabei das Design verändern zu können.",
  },
  {
    label: "03 · Schlank im Betrieb",
    text: "Kein eigener Server, keine Datenbank, die jemand warten muss, und niedrige laufende Kosten.",
  },
];

const editorialStats = [
  { value: "24", label: "feste Seiten, alle im CMS bearbeitbar" },
  { value: "22", label: "Bausteine für neue Seiten ohne Code" },
  { value: "182", label: "Beiträge aus der alten Website übernommen" },
  { value: "1–3", label: "Minuten vom Veröffentlichen bis live" },
];

const publishingSteps = [
  {
    label: "01 · Bearbeiten",
    text: "Eine deutsche Oberfläche mit einem Menüpunkt pro Aufgabe, Zeichenlimits und Pflicht-Bildbeschreibungen.",
  },
  {
    label: "02 · Gegenlesen",
    text: "Ein Klick baut eine Entwurfsvorschau, die man zum Gegenlesen einfach weiterschicken kann.",
  },
  {
    label: "03 · Veröffentlichen",
    text: "Ein Webhook stößt den Neuaufbau auf Cloudflare an. Kurz danach ist die Änderung live.",
  },
  {
    label: "04 · Absichern",
    text: "Fehlen Inhalte, baut die Website mit geprüften Ausgangswerten. Eine nächtliche Sicherung hält alles fest.",
  },
];

const decisions = [
  {
    label: "Buchung",
    title: "Eversports bleibt die einzige Quelle.",
    text: "Stundenplan, Preise, freie Plätze und Buchung kommen direkt aus Eversports, mit dem das Studio ohnehin arbeitet. Die Website pflegt davon nichts doppelt: Sie erklärt die Kurse und führt dann an die richtige Stelle. Die Widgets laden nur auf den Seiten, die sie brauchen, mit sichtbarem Datenschutzhinweis.",
  },
  {
    label: "Hosting",
    title: "Statisch ausgeliefert, ohne eigenen Server.",
    text: "Astro rendert alle Seiten beim Build, Cloudflare liefert sie aus. Es gibt keinen Server und keine Datenbank, die gewartet werden müssen. CMS, Hosting und Sicherung laufen in kostenlosen Plänen.",
  },
  {
    label: "Umzug",
    title: "Beim Umzug geht nichts verloren.",
    text: "Alle 182 Beiträge der alten Seite liegen jetzt im CMS, rund 280 alte Adressen leiten dauerhaft auf ihre neue Seite weiter. Links in Social Media und Suchergebnissen laufen dadurch nicht ins Leere.",
  },
];

const motionShots = [
  {
    src: "/case-studies/indeed-unique/video-archive.jpg",
    alt: "Videoarchiv von Indeed Unique als räumliche Galerie aus Filmvorschauen",
    caption: "Videoarchiv: Die Performances drehen sich beim Scrollen als räumliche Galerie.",
  },
  {
    src: "/case-studies/indeed-unique/news-shelf.jpg",
    alt: "Beitragsregal auf der Startseite von Indeed Unique",
    caption: "Startseite: Aktuelles als Schaukasten, darunter alle Beiträge als Regal.",
  },
];

function SectionIntro({
  label,
  title,
  dark = false,
}: {
  label: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div>
      <p
        className={`font-mono text-[11px] uppercase tracking-[0.18em] ${
          dark ? "text-[#61d3ca]" : "text-[#006f68]"
        }`}
      >
        {label}
      </p>
      <h2
        className={`mt-4 max-w-[20ch] text-balance font-display text-[30px] font-medium leading-[1.08] tracking-[-0.025em] sm:text-[42px] ${
          dark ? "text-[#f2f2f0]" : "text-[#181811]"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

export function IndeedUniqueCaseStudy() {
  return (
    <>
      <section className="border-t border-[#d9d9d3] bg-[#fafafa]">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-20 lg:px-10 lg:py-20">
          <SectionIntro label="Ausgangslage" title="Ein Relaunch mit drei klaren Vorgaben." />
          <div>
            <p className="max-w-[62ch] text-[15px] leading-7 text-[#5f5f56] sm:text-[16px]">
              Indeed Unique unterrichtet Tanz in Wien und Mödling, mit 25 Kursen
              und 23 Trainer:innen. Die alte Website lief auf Jimdo. Für den
              Neuaufbau haben wir drei Ziele festgelegt, an denen sich jede
              Entscheidung messen musste.
            </p>
            <ol className="mt-8 border-t border-[#d9d9d3]">
              {goals.map((goal) => (
                <li
                  key={goal.label}
                  className="grid gap-2 border-b border-[#e1e1dc] py-5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#006f68]">
                    {goal.label}
                  </p>
                  <p className="text-[15px] leading-7 text-[#181811]">{goal.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-[#d9d9d3] bg-[#111714] text-[#f2f2f0]">
        <div className="mx-auto w-full max-w-[1180px] px-6 py-12 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)] lg:gap-20">
            <SectionIntro
              dark
              label="Redaktion mit Sanity"
              title="Das Studio pflegt die Website selbst. Das Design bleibt geschützt."
            />
            <p className="max-w-[62ch] text-[15px] leading-7 text-[#c9d0cc] sm:text-[16px] lg:pt-8">
              Im Sanity Studio gibt es für jede Aufgabe eine eigene Maske:
              Beiträge posten, Kurse und Team sortieren, Seiten ändern oder neue
              Seiten aus fertigen Bausteinen zusammenstellen. Layout, Farben,
              Schriften und Animationen liegen im Code und lassen sich aus dem
              CMS heraus nicht versehentlich zerstören.
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-8 lg:grid-cols-4">
            {editorialStats.map((stat) => (
              <li key={stat.label}>
                <span className="block font-display text-[40px] font-semibold leading-none tracking-[-0.03em] text-white sm:text-[52px]">
                  {stat.value}
                </span>
                <span className="mt-3 block max-w-[22ch] text-[13.5px] leading-5 text-[#aeb8b3]">
                  {stat.label}
                </span>
              </li>
            ))}
          </ul>

          <ol className="mt-12 grid border-y border-white/15 md:grid-cols-2 xl:grid-cols-4">
            {publishingSteps.map((step, index) => (
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
            Astro · TypeScript · Sanity · Eversports Widgets · Cloudflare Workers ·
            GitHub Actions
          </p>
        </div>
      </section>

      <section className="border-t border-[#d9d9d3]">
        <div className="mx-auto w-full max-w-[1180px] px-6 py-12 sm:px-8 lg:px-10 lg:py-20">
          <SectionIntro label="Drei Entscheidungen" title="Warum die Website so gebaut ist." />
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
        <div className="mx-auto w-full max-w-[1180px] px-6 py-12 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-20">
            <SectionIntro label="Bewegung" title="Animationen, die zu einem Tanzstudio passen." />
            <p className="max-w-[62ch] text-[15px] leading-7 text-[#5f5f56] sm:text-[16px] lg:pt-8">
              Beim ersten Besuch zeichnet sich eine Figur, springt und wird zum
              Logo. Wer zurückkommt, sieht die Einstiegsanimation nicht noch
              einmal, überspringen lässt sie sich jederzeit. Das Videoarchiv
              zeigt die Performances als räumliche Galerie, YouTube lädt erst,
              wenn jemand einen Film startet.
            </p>
          </div>

          <figure className="mt-10">
            <div className="overflow-hidden rounded-[10px] border border-[#e0e0dc] bg-[#fbf9f7]">
              <Image
                src="/case-studies/indeed-unique/entry-sequence.jpg"
                alt="Einstiegsanimation von Indeed Unique in drei Phasen: Figur steht, springt und wird zum Logo"
                width={1440}
                height={450}
                sizes="(min-width: 1180px) 1100px, 100vw"
                className="block h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-[13px] leading-5 text-[#6c6c61]">
              Einstieg: Aus der Strichfigur wird in wenigen Sekunden das Logo.
            </figcaption>
          </figure>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {motionShots.map((shot) => (
              <figure key={shot.src}>
                <div className="overflow-hidden rounded-[10px] border border-[#e0e0dc] bg-[#fbf9f7]">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1440}
                    height={900}
                    sizes="(min-width: 1180px) 540px, (min-width: 768px) 50vw, 100vw"
                    className="block h-auto w-full"
                  />
                </div>
                <figcaption className="mt-3 text-[13px] leading-5 text-[#6c6c61]">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#d9d9d3]">
        <div className="mx-auto grid w-full max-w-[1180px] items-center gap-12 px-6 py-12 sm:px-8 md:grid-cols-[minmax(0,1fr)_minmax(220px,300px)] lg:gap-20 lg:px-10 lg:py-20">
          <div>
            <SectionIntro label="Mobil" title="Auf dem Handy genauso vollständig." />
            <p className="mt-5 max-w-[58ch] text-[15px] leading-7 text-[#5f5f56] sm:text-[16px]">
              Mobile Nutzung war von Anfang an gleichwertig zum Desktop geplant:
              dieselben Inhalte, eine eigene Navigation und kurze Wege zu
              Stundenplan und Anmeldung. Auch die Einstiegsanimation und der
              Schaukasten sind für den kleinen Bildschirm gebaut.
            </p>
          </div>
          <div className="mx-auto w-full max-w-[260px] drop-shadow-[0_30px_40px_rgba(17,18,17,0.22)]">
            <PhoneFrame>
              <AutoplayVideo
                recording={RECORDINGS.indeedUniqueMobile}
                label="Indeed Unique auf dem iPhone: Einstiegsanimation und Startseite"
                className="h-full w-full object-cover"
              />
            </PhoneFrame>
          </div>
        </div>
      </section>

      <section className="border-t border-[#d9d9d3] bg-[#fafafa]">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-6 py-12 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#006f68]">
              Qualität und Betrieb
            </p>
            <h2 className="mt-4 font-display text-[28px] font-medium leading-[1.1] tracking-[-0.02em] text-[#181811] sm:text-[34px]">
              Jede Änderung wird geprüft, bevor sie live geht.
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#5f5f56]">
              Code-Änderungen laufen durch automatische Prüfungen für Typen,
              Formatierung, SEO, Inhaltsregeln, Eversports-Einbindung und
              Sicherungen, gefolgt von einem vollständigen Build mit Rauchtest.
              Ein täglicher Neuaufbau hält zeitabhängige Inhalte aktuell.
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#006f68]">
              Mein Beitrag
            </p>
            <h2 className="mt-4 font-display text-[28px] font-medium leading-[1.1] tracking-[-0.02em] text-[#181811] sm:text-[34px]">
              Vom Konzept bis zum Umzug der Domain.
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#5f5f56]">
              Informationsarchitektur, Design, Umsetzung, CMS-Einrichtung,
              Migration und Go-live lagen bei mir. Claude Code und Codex nutze
              ich als Entwicklungswerkzeuge; Entscheidungen, Prüfung und
              Abstimmung mit dem Studio bleiben bei mir. Inhalte und Freigaben
              kamen vom Studio.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
