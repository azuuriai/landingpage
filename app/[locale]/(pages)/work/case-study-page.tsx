import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { BackLink, ContactBand, JsonLd } from "@/app/_components/site-chrome";
import { ICON_UP, PRIMARY_BUTTON, SECONDARY_BUTTON } from "@/app/_components/button-styles";
import { getContent } from "@/app/content";
import type { CaseStudyData, ProjectLink } from "@/app/content/types";
import { absoluteUrl, languageTag, localizedPaths, pageMetadata, SITE_URL } from "@/app/seo";

export function caseStudyMetadata(study: CaseStudyData, locale: Locale): Metadata {
  return pageMetadata({
    locale,
    path: study.path,
    title: study.metaTitle,
    description: study.metaDescription,
  });
}

function caseStudyJsonLd(study: CaseStudyData, locale: Locale) {
  // Private tools have no live link; the case study page stands in for it.
  const liveLink = study.links.find((link) => !link.internal) ?? study.links[0];
  // The page's own URL in this language; the project itself is one entity in
  // both languages and keeps a shared id.
  const url = absoluteUrl(localizedPaths(study.path)[locale]);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: study.metaTitle,
        description: study.metaDescription,
        inLanguage: languageTag(locale),
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}${study.path}#project` },
      },
      {
        "@type": "CreativeWork",
        "@id": `${SITE_URL}${study.path}#project`,
        name: study.name,
        description: study.summary,
        url: liveLink?.href ?? url,
        creator: { "@id": `${SITE_URL}/#person` },
      },
    ],
  };
}

// The first link is the primary action; internal links (to the sibling
// case study) stay in the same tab and carry no outbound arrow.
export function ProjectButton({
  link,
  secondary = false,
}: {
  link: ProjectLink;
  secondary?: boolean;
}) {
  const className = secondary ? SECONDARY_BUTTON : PRIMARY_BUTTON;

  if (link.internal) {
    return (
      <Link href={link.href} className={className}>
        {link.label}
      </Link>
    );
  }

  return (
    <a href={link.href} target="_blank" rel="noreferrer" className={className}>
      {link.label}
      <ArrowUpRight size={15} aria-hidden="true" className={ICON_UP} />
    </a>
  );
}

// Opening of every case study: what it is and does, the key facts a client
// would ask about, the live product, and a large look at it on the right.
export function CaseStudyPage({
  study,
  locale,
  media,
  children,
}: {
  study: CaseStudyData;
  locale: Locale;
  media: ReactNode;
  children: ReactNode;
}) {
  const { ui } = getContent(locale);

  return (
    <>
      <JsonLd data={caseStudyJsonLd(study, locale)} />
      <section className="mx-auto grid w-full max-w-[1180px] gap-12 px-6 pb-14 pt-8 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16 lg:px-10 lg:pb-20 lg:pt-8">
        <div className="rise min-w-0">
          <BackLink href="/work" label={ui.backShowcase} />
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-[#006f68]">
            {study.eyebrow}
          </p>
          <h1 className="mt-4 text-pretty font-display text-[40px] font-semibold leading-[1] tracking-[-0.03em] text-[#181811] sm:text-[54px] lg:text-[58px]">
            {study.title}
          </h1>
          <p className="mt-6 max-w-[58ch] text-[16px] leading-7 text-[#5f5f56] sm:text-[17px] sm:leading-8">
            {study.description}
          </p>
          <dl className="mt-7 max-w-[58ch] border-t border-[#deded8]">
            {study.facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-[8rem_minmax(0,1fr)] gap-4 border-b border-[#e6e6e1] py-2.5"
              >
                <dt className="text-[13.5px] leading-6 text-[#6c6c61]">{fact.label}</dt>
                <dd className="text-[14.5px] leading-6 text-[#181811]">{fact.value}</dd>
              </div>
            ))}
          </dl>
          {study.links.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {study.links.map((link, index) => (
                <ProjectButton key={link.href} link={link} secondary={index > 0} />
              ))}
            </div>
          ) : null}
        </div>
        <div className="rise min-w-0" style={{ animationDelay: "0.1s" }}>
          {media}
        </div>
      </section>
      {children}
      <ContactBand heading={study.closing} action={ui.sendIdea} />
    </>
  );
}
