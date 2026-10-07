import type { Metadata } from "next";
import { ArrowUpRight, Plus } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { ICON_UP, TEXT_LINK } from "@/app/_components/button-styles";
import { ContactForm } from "@/app/_components/contact-form";
import { ContactBand, JsonLd } from "@/app/_components/site-chrome";
import { detailPage, getContent, type Content } from "@/app/content";
import type { DetailPageData, DetailSlug } from "@/app/content/types";
import { localeFromParams, type LocaleParams } from "@/app/locale";
import { absoluteUrl, languageTag, pageMetadata, SITE_URL } from "@/app/seo";
import { ServicesContent } from "./services/services-content";
import { ProjectsOverview } from "./work/projects-overview";

export async function detailMetadata(slug: DetailSlug, props: LocaleParams): Promise<Metadata> {
  const locale = await localeFromParams(props);
  const page = detailPage(getContent(locale), slug);
  return pageMetadata({
    locale,
    path: page.path,
    title: page.metaTitle,
    description: page.metaDescription,
  });
}

function detailJsonLd(page: DetailPageData, locale: Locale) {
  const graph: object[] = [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}${page.path}#webpage`,
      url: absoluteUrl(page.path),
      name: page.metaTitle,
      description: page.metaDescription,
      inLanguage: languageTag(locale),
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
function FaqList({ page, askLabel }: { page: DetailPageData; askLabel: string }) {
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
            {askLabel}
            <ArrowUpRight size={15} aria-hidden="true" className={ICON_UP} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContactFormSection({ content }: { content: Content }) {
  const { contactSection, contactForm, ui } = content;

  return (
    <section className="border-t border-[#deded8]">
      <div className="mx-auto grid w-full max-w-[1180px] gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[minmax(220px,0.65fr)_minmax(0,1fr)] lg:px-10 lg:py-12">
        <div className="min-w-0">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#006f68]">
            {contactSection.eyebrow}
          </p>
          <h2 className="mt-4 text-pretty font-display text-[31px] font-medium leading-[1.05] tracking-[-0.02em] text-[#181811] sm:text-[40px]">
            {contactSection.title}
          </h2>
          <p className="mt-5 max-w-[38ch] text-[15px] leading-7 text-[#6c6c61] sm:text-[16px]">
            {contactSection.body}
          </p>
        </div>
        <div className="min-w-0 border-t border-[#e1e1dc] pt-7 lg:border-t-0 lg:pt-0">
          <ContactForm copy={contactForm} privacyLabel={ui.privacy} />
        </div>
      </div>
    </section>
  );
}

// Content below the shared hero (see subpage-hero.tsx); header, hero and
// footer come from the (pages) layout.
export function DetailPage({ slug, locale }: { slug: DetailSlug; locale: Locale }) {
  const content = getContent(locale);
  const page = detailPage(content, slug);

  return (
    <>
      <JsonLd data={detailJsonLd(page, locale)} />
      {slug === "work" ? <ProjectsOverview entries={content.showcaseEntries} ui={content.ui} /> : null}
      {slug === "services" ? (
        <ServicesContent services={content.services} launch={content.launch} />
      ) : null}
      {page.faq ? (
        <FaqList page={page} askLabel={content.ui.askAnotherQuestion} />
      ) : (
        <DetailSections page={page} />
      )}
      {slug === "contact" ? <ContactFormSection content={content} /> : null}
      {page.closing ? <ContactBand heading={page.closing} action={content.ui.sendIdea} /> : null}
    </>
  );
}
