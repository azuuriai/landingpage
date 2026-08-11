import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ContactForm } from "./contact-form";
import { detailPageMap, detailPages, type DetailPageData, type DetailSlug } from "./detail-pages-data";
import { absoluteUrl, SITE_NAME, SITE_URL } from "./seo";
import { SiteLogo } from "./site-logo";
import { WorkCaseStudy } from "./work-case-study";

export function createDetailMetadata(slug: DetailSlug): Metadata {
  const page = detailPageMap[slug];

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: page.path,
      siteName: SITE_NAME,
      type: "website",
      locale: "de_AT",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Lukas Kaffer · Webprodukte und native iOS Apps",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: ["/opengraph-image"],
    },
  };
}

function JsonLd({ page }: { page: DetailPageData }) {
  const graph: object[] = [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}${page.path}#webpage`,
      url: absoluteUrl(page.path),
      name: page.metaTitle,
      description: page.metaDescription,
      inLanguage: "de-AT",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#person`,
      },
    },
  ];

  if (page.faq) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${SITE_URL}${page.path}#faq`,
      mainEntity: page.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function PageHeader({ activeSlug }: { activeSlug?: DetailSlug }) {
  return (
    <header className="border-b border-[#e4e4e1]">
      <div className="mx-auto flex w-full max-w-[1180px] min-w-0 flex-col gap-5 px-6 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Link href="/" className="inline-flex w-fit items-center gap-3">
          <SiteLogo priority />
        </Link>
        <nav aria-label="Seitennavigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[#5f5f56]">
            {detailPages.map((item) => (
              <li key={item.slug} className="shrink-0 whitespace-nowrap">
                <Link
                  href={item.path}
                  aria-current={item.slug === activeSlug ? "page" : undefined}
                  className={`transition hover:text-[#181811] ${
                    item.slug === activeSlug ? "text-[#006f68]" : ""
                  }`}
                >
                  {item.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function HeroVisual({ page }: { page: DetailPageData }) {
  if (page.slug === "work") {
    return (
      <div className="rise relative mt-10 lg:mt-0" style={{ animationDelay: "0.1s" }}>
        <a
          href="https://viennaeventradar.at"
          target="_blank"
          rel="noreferrer"
          aria-label="Vienna Event Radar als Live-Webprodukt öffnen"
          className="group block overflow-hidden rounded-[8px] border border-[#151817] bg-[#0a1113] shadow-[0_34px_90px_-46px_rgba(17,18,17,0.5)] outline-none focus-visible:ring-2 focus-visible:ring-[#006f68]/45"
        >
          <div className="flex items-center gap-2 border-b border-white/[0.08] px-3.5 py-2">
            <span className="h-[8px] w-[8px] rounded-full bg-[#00b8ad]" />
            <span className="font-mono text-[9.5px] uppercase tracking-[0.15em] text-white/70">
              viennaeventradar.at
            </span>
            <span className="ml-auto inline-flex items-center gap-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-white/80 transition group-hover:text-white">
              Live öffnen <ArrowUpRight size={11} />
            </span>
          </div>
          <Image
            src="/case-studies/vienna-web-desktop.png"
            alt="Vienna Event Radar Webprodukt"
            width={2400}
            height={1500}
            priority
            className="block w-full"
          />
        </a>
      </div>
    );
  }

  if (!page.image) return null;

  return (
    <div className="rise relative mt-10 lg:mt-0" style={{ animationDelay: "0.1s" }}>
      <div className="overflow-hidden rounded-[8px] border border-[#e0e0dc] bg-[#e9e9e4]">
        <Image
          src={page.image.src}
          alt={page.image.alt}
          width={page.image.width}
          height={page.image.height}
          priority
          sizes="(min-width: 1024px) 430px, 100vw"
          className={`block w-full ${page.slug === "about" || page.slug === "contact" ? "aspect-[4/5] object-cover object-[50%_18%]" : ""}`}
        />
      </div>
    </div>
  );
}

function DetailSections({ page }: { page: DetailPageData }) {
  if (page.faq) {
    return (
      <section className="border-t border-[#deded8]">
        <div className="mx-auto w-full max-w-[900px] px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="border-y border-[#e1e1dc]">
            {page.faq.map((item, index) => (
              <details
                key={item.question}
                className={index > 0 ? "border-t border-[#e1e1dc]" : ""}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 [&::-webkit-details-marker]:hidden">
                  <h2 className="font-display text-[20px] font-medium leading-[1.22] tracking-[-0.01em] text-[#181811] sm:text-[24px]">
                    {item.question}
                  </h2>
                  <span className="shrink-0 text-[#006f68]">+</span>
                </summary>
                <p className="max-w-[68ch] pb-6 text-[15px] leading-7 text-[#6c6c61]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-[#deded8]">
      <div className="mx-auto grid w-full max-w-[1180px] gap-0 px-6 sm:px-8 lg:px-10">
        {page.sections.map((section) => (
          <div
            key={section.label}
            className="reveal-on-scroll grid gap-x-12 gap-y-3 border-b border-[#e1e1dc] py-10 md:grid-cols-[10rem_minmax(0,1fr)] lg:py-12"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#006f68]">
                {section.label}
              </p>
            </div>
            <div className="min-w-0">
              <h2 className="max-w-[32ch] text-balance font-display text-[25px] font-medium leading-[1.12] tracking-[-0.018em] text-[#181811] sm:text-[32px]">
                {section.title}
              </h2>
              <p className="mt-4 max-w-[72ch] text-[15px] leading-7 text-[#6c6c61] sm:text-[16px]">
                {section.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FaqSplitPage({ page }: { page: DetailPageData }) {
  if (!page.faq) return null;

  return (
    <section className="mx-auto grid w-full max-w-[1180px] gap-11 px-6 py-12 sm:px-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:items-start lg:gap-20 lg:px-10 lg:py-20 xl:gap-24">
      <div className="rise min-w-0">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#5f5f56] transition hover:text-[#181811]"
        >
          <ArrowLeft size={13} />
          Startseite
        </Link>
        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-[#006f68]">
          {page.eyebrow}
        </p>
        <h1 className="mt-5 max-w-[11ch] text-balance font-display text-[43px] font-semibold leading-[1] tracking-[-0.03em] text-[#181811] sm:text-[58px] lg:text-[64px] xl:text-[68px]">
          {page.title}
        </h1>
        <p className="mt-6 max-w-[36ch] text-[16px] leading-7 text-[#6c6c61] sm:text-[17px] sm:leading-8">
          {page.description}
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {page.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-[#d5d5cf] bg-white/55 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[#5f5f56]"
            >
              {chip}
            </span>
          ))}
        </div>
        <Link
          href="/contact"
          className="mt-9 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[#006f68] transition hover:text-[#181811]"
        >
          Andere Frage stellen
          <ArrowUpRight size={13} />
        </Link>
      </div>

      <div className="reveal-on-scroll min-w-0 lg:pt-[92px]">
        <div className="mb-3 flex items-center justify-between gap-4 border-b border-[#deded8] pb-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#5f5f56]">
            Fragen & Antworten
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6c6c61]">
            {page.faq.length} Fragen
          </p>
        </div>
        <div>
        {page.faq.map((item, index) => (
          <details
            key={item.question}
            className="group border-b border-[#e1e1dc]"
          >
            <summary className="grid cursor-pointer list-none grid-cols-[2rem_minmax(0,1fr)_1.25rem] items-baseline gap-4 py-[1.15rem] outline-none transition focus-visible:ring-2 focus-visible:ring-[#00b8ad]/25 [&::-webkit-details-marker]:hidden sm:grid-cols-[2.75rem_minmax(0,1fr)_1.25rem]">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6c6c61]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display text-[18px] font-medium leading-[1.24] tracking-[-0.01em] text-[#181811] sm:text-[21px]">
                {item.question}
              </h2>
              <span className="text-right text-[#006f68] transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="max-w-[58ch] pb-6 pl-12 text-[14.5px] leading-7 text-[#6c6c61] sm:pl-[4.75rem]">
              {item.answer}
            </p>
          </details>
        ))}
        </div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  return (
    <section className="border-t border-[#deded8]">
      <div className="mx-auto grid w-full max-w-[1180px] gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[minmax(220px,0.65fr)_minmax(0,1fr)] lg:px-10 lg:py-12">
        <div className="min-w-0">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#006f68]">
            Direkt an mich
          </p>
          <h2 className="mt-4 max-w-[13ch] font-display text-[31px] font-medium leading-[1.05] tracking-[-0.02em] text-[#181811] sm:text-[40px]">
            Schick mir die Kurzfassung.
          </h2>
          <p className="mt-5 max-w-[38ch] text-[15px] leading-7 text-[#6c6c61] sm:text-[16px]">
            Du brauchst noch kein fertiges Briefing. Zwei, drei Sätze reichen,
            damit ich einschätzen kann, wie wir am besten starten.
          </p>
        </div>
        <div className="min-w-0 border-t border-[#e1e1dc] pt-7 lg:border-t-0 lg:pt-0">
          <ContactForm language="de" />
        </div>
      </div>
    </section>
  );
}

const CLOSING_COPY: Record<DetailSlug, { eyebrow: string; heading: string }> = {
  services: {
    eyebrow: "Nächster Schritt",
    heading: "Klingt nach deinem Projekt? Dann lass es uns angehen.",
  },
  work: {
    eyebrow: "Zum Case",
    heading: "Fragen zu den Entscheidungen oder zum Build? Schreib mir.",
  },
  about: {
    eyebrow: "Nächster Schritt",
    heading: "Klingt nach einer Zusammenarbeit? Schreib mir.",
  },
  faq: {
    eyebrow: "Noch offen?",
    heading: "Frage war nicht dabei? Frag mich direkt.",
  },
  contact: {
    eyebrow: "Nächster Schritt",
    heading: "Erzähl mir, was du bauen willst.",
  },
};

function ContactBand({ slug }: { slug: DetailSlug }) {
  const copy = CLOSING_COPY[slug];

  return (
    <section className="border-t border-[#deded8]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 px-6 py-10 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-10 lg:py-12">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#5f5f56]">
            {copy.eyebrow}
          </p>
          <h2 className="mt-3 max-w-[30ch] font-display text-[25px] font-medium leading-[1.14] tracking-[-0.018em] text-[#181811] sm:text-[32px]">
            {copy.heading}
          </h2>
        </div>
        <Link
          href="/contact"
          className="inline-flex h-11 w-fit items-center gap-2 rounded-full bg-[#181811] pl-5 pr-4 text-[13px] font-medium text-[#f2f2f0] transition hover:bg-black"
        >
          Zum Formular
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#deded8]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-3 px-6 py-6 font-mono text-[11px] uppercase tracking-[0.12em] text-[#5f5f56] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <span>© 2026 · Lukas Kaffer · Wien</span>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link href="/impressum" className="transition hover:text-[#181811]">
            Impressum
          </Link>
          <Link href="/datenschutz" className="transition hover:text-[#181811]">
            Datenschutz
          </Link>
          <a href="mailto:hello@lukaskaffer.com" className="transition hover:text-[#181811]">
            hello@lukaskaffer.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export function DetailPage({ slug }: { slug: DetailSlug }) {
  const page = detailPageMap[slug];
  const isFaq = slug === "faq";

  return (
    <>
      <JsonLd page={page} />
      <a
        href="#content"
        className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-full bg-[#181811] px-4 py-2 text-[13px] text-white transition focus:translate-y-0"
      >
        Zum Inhalt springen
      </a>
      <main id="content" className="min-h-svh overflow-x-hidden bg-[#f2f2f0] text-[#181811]">
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_-8%,rgba(255,255,255,0.85),transparent_46%)]" />
        <div className="grain" />
        <div className="relative z-10">
          <PageHeader activeSlug={slug} />
          {isFaq ? (
            <FaqSplitPage page={page} />
          ) : (
            <>
              <section className="mx-auto grid w-full max-w-[1180px] gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,430px)] lg:items-center lg:px-10 lg:py-20">
                <div className="rise min-w-0">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#5f5f56] transition hover:text-[#181811]"
                  >
                    <ArrowLeft size={13} />
                    Startseite
                  </Link>
                  <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-[#006f68]">
                    {page.eyebrow}
                  </p>
                  <h1 className="mt-5 max-w-[13ch] text-balance font-display text-[43px] font-semibold leading-[0.98] tracking-[-0.03em] text-[#181811] sm:max-w-[15ch] sm:text-[60px] lg:text-[72px]">
                    {page.title}
                  </h1>
                  <p className="mt-6 max-w-[60ch] text-[16px] leading-7 text-[#6c6c61] sm:text-[18px] sm:leading-8">
                    {page.description}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {page.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-[#d5d5cf] bg-white/55 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[#5f5f56]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
                <HeroVisual page={page} />
              </section>
              {slug === "work" ? <WorkCaseStudy /> : <DetailSections page={page} />}
              {slug === "contact" ? <ContactFormSection /> : null}
            </>
          )}
          {slug !== "contact" ? <ContactBand slug={slug} /> : null}
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
