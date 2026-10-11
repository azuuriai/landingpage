import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import { JsonLd } from "@/app/_components/site-chrome";
import { detailPage, getContent } from "@/app/content";
import type { StudiosCopy } from "@/app/content/types";
import { localeFromParams, resolveLocale, type LocaleParams } from "@/app/locale";
import {
  absoluteUrl,
  breadcrumbList,
  languageTag,
  localizedPaths,
  pageMetadata,
  SITE_URL,
} from "@/app/seo";
import { withName } from "@/app/site";
import { offersJsonLd, STUDIO_PRICES } from "@/app/offers-data";
import { STUDIOS_PATH } from "@/app/studios-data";
import { StudiosContent } from "./studios-content";

export async function generateMetadata(props: LocaleParams): Promise<Metadata> {
  const locale = await localeFromParams(props);
  const { page } = getContent(locale).studios;
  return pageMetadata({
    locale,
    path: STUDIOS_PATH,
    title: page.metaTitle,
    description: page.metaDescription,
  });
}

function studiosJsonLd(copy: StudiosCopy, locale: Locale, servicesLabel: string) {
  // The page's own URL in this language; person and website ids are shared.
  const url = absoluteUrl(localizedPaths(STUDIOS_PATH)[locale]);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: copy.page.metaTitle,
        description: copy.page.metaDescription,
        inLanguage: languageTag(locale),
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      breadcrumbList(locale, url, [
        { name: servicesLabel, path: "/services" },
        { name: copy.page.breadcrumb, path: STUDIOS_PATH },
      ]),
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: copy.service.name,
        serviceType: copy.service.type,
        description: copy.page.description,
        provider: { "@id": `${SITE_URL}/#person` },
        areaServed: { "@type": "Country", name: "Österreich" },
        offers: offersJsonLd(copy.plans, STUDIO_PRICES, url),
      },
    ],
  };
}

// Not a navigation page: like the case studies it brings its own opening,
// so the shared SubpageHero renders nothing here.
export default async function StudiosPage(props: LocaleParams) {
  const locale = await resolveLocale(props);
  const content = getContent(locale);
  const services = detailPage(content, "services");
  const project = content.projects["indeed-unique"];

  return (
    <>
      <JsonLd data={studiosJsonLd(content.studios, locale, services.navLabel)} />
      <StudiosContent
        copy={content.studios}
        backLabel={services.navLabel}
        project={project}
        phoneLabel={withName(content.ui.phoneRecording, project.name)}
      />
    </>
  );
}
