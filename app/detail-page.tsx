import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { ICON_UP, TEXT_LINK } from "./_components/button-styles";
import { ContactForm } from "./_components/contact-form";
import { ContactBand, JsonLd } from "./_components/site-chrome";
import {
  detailPageMap,
  type DetailPageData,
  type DetailSlug,
} from "./detail-pages-data";
import { absoluteUrl, pageMetadata, SITE_URL } from "./seo";
import { ServicesContent } from "./(pages)/services/services-content";
import { ProjectsOverview } from "./(pages)/work/projects-overview";

export function createDetailMetadata(slug: DetailSlug): Metadata {
  const page = detailPageMap[slug];
  return pageMetadata({
    path: page.path,
    title: page.metaTitle,
    description: page.metaDescription,
  });
}

function detailJsonLd(page: DetailPageData) {
  const graph: object[] = [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}${page.path}#webpage`,
      url: absoluteUrl(page.path),
      name: page.metaTitle,
      description: page.metaDescription,
      inLanguage: "de-AT",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
    },
  ];

  if (page.faq) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${SITE_URL}${page.path}#faq`,
      mainEntity: page.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

function DetailSections({ page }: { page: DetailPageData }) {
  if (page.sections.length === 0) return null;

  return (
    <section className="border-t border-[#deded8]">
      <div className="mx-auto grid w-full max-w-[1180px] gap-0 px-6 sm:px-8 lg:px-10">
        {page.sections.map((section) => (
          <div
            key={section.label}
            className="reveal-on-scroll grid gap-x-12 gap-y-3 border-b border-[#e1e1dc] py-10 md:grid-cols-[10rem_minmax(0,1fr)] lg:py-12"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#006f68]">
              {section.label}
            </p>
            <div className="min-w-0">
              <h2 className="text-pretty font-display text-[25px] font-medium leading-[1.12] tracking-[-0.018em] text-[#181811] sm:text-[32px]">
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

// Questions as a quiet accordion under the shared hero: no numbering, no
// count — each row gets the same teal hover ring as every other list.
function FaqList({ page }: { page: DetailPageData }) {
  if (!page.faq) return null;

  return (
    <section className="border-t border-[#deded8]">
      <div className="mx-auto w-full max-w-[1180px] px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="max-w-[860px]">
          {page.faq.map((item) => (
            <details key={item.question} className="group border-b border-[#e1e1dc] first:border-t">
              <summary
                className="ui-row [--ui-row-bottom:0px] flex cursor-pointer list-none items-center justify-between gap-6 py-4 [&::-webkit-details-marker]:hidden"
              >
                <h2 className="font-display text-[18px] font-medium leading-[1.3] tracking-[-0.01em] text-[#181811] sm:text-[20px]">
                  {item.question}
                </h2>
                <Plus
                  size={18}
                  aria-hidden="true"
                  className="shrink-0 text-[#006f68] transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="max-w-[64ch] pb-6 pr-10 text-[15px] leading-7 text-[#6c6c61]">
                {item.answer}
              </p>
            </details>
          ))}
          <Link
            href="/contact"
            className={`${TEXT_LINK} mt-8 text-[15px] text-[#006f68]`}
          >
            Andere Frage stellen
            <ArrowUpRight size={15} aria-hidden="true" className={ICON_UP} />
          </Link>
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
          <h2 className="mt-4 text-pretty font-display text-[31px] font-medium leading-[1.05] tracking-[-0.02em] text-[#181811] sm:text-[40px]">
            Schick mir die Kurzfassung.
          </h2>
          <p className="mt-5 max-w-[38ch] text-[15px] leading-7 text-[#6c6c61] sm:text-[16px]">
            Du brauchst noch kein fertiges Briefing. Zwei, drei Sätze reichen,
            damit ich einschätzen kann, wie wir am besten starten.
          </p>
        </div>
        <div className="min-w-0 border-t border-[#e1e1dc] pt-7 lg:border-t-0 lg:pt-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

const CLOSING_HEADING: Record<Exclude<DetailSlug, "contact">, string> = {
  services: "Klingt nach deinem Projekt? Dann lass es uns angehen.",
  work: "Du willst etwas Ähnliches bauen? Schreib mir.",
  about: "Klingt nach einer Zusammenarbeit? Schreib mir.",
  faq: "Frage war nicht dabei? Frag mich direkt.",
};

// Content below the shared hero (see app/(pages)/subpage-hero.tsx); header,
// hero and footer come from the (pages) layout.
export function DetailPage({ slug }: { slug: DetailSlug }) {
  const page = detailPageMap[slug];

  return (
    <>
      <JsonLd data={detailJsonLd(page)} />
      {slug === "work" ? <ProjectsOverview /> : null}
      {slug === "services" ? <ServicesContent /> : null}
      {page.faq ? <FaqList page={page} /> : <DetailSections page={page} />}
      {slug === "contact" ? <ContactFormSection /> : null}
      {slug !== "contact" ? <ContactBand heading={CLOSING_HEADING[slug]} /> : null}
    </>
  );
}
