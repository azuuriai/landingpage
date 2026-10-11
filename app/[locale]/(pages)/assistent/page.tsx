import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import { JsonLd } from "@/app/_components/site-chrome";
import { detailPage, getContent } from "@/app/content";
import type { AssistantCopy } from "@/app/content/types";
import { localeFromParams, resolveLocale, type LocaleParams } from "@/app/locale";
import { ASSISTANT_PATH, ASSISTANT_PRICES, offersJsonLd } from "@/app/offers-data";
import {
  absoluteUrl,
  breadcrumbList,
  languageTag,
  localizedPaths,
  pageMetadata,
  SITE_URL,
} from "@/app/seo";
import { AssistantContent } from "./assistant-content";

export async function generateMetadata(props: LocaleParams): Promise<Metadata> {
  const locale = await localeFromParams(props);
  const { page } = getContent(locale).assistant;
  return pageMetadata({
    locale,
    path: ASSISTANT_PATH,
    title: page.metaTitle,
    description: page.metaDescription,
  });
}

function assistantJsonLd(copy: AssistantCopy, locale: Locale, servicesLabel: string) {
  const url = absoluteUrl(localizedPaths(ASSISTANT_PATH)[locale]);
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
        { name: copy.page.breadcrumb, path: ASSISTANT_PATH },
      ]),
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: copy.service.name,
        serviceType: copy.service.type,
        description: copy.page.description,
        provider: { "@id": `${SITE_URL}/#person` },
        availableLanguage: ["de", "en"],
        offers: offersJsonLd([...copy.plans, copy.ongoing], ASSISTANT_PRICES, url),
      },
    ],
  };
}

// Not a navigation page: like /studios it brings its own opening, so the
// shared SubpageHero renders nothing here.
export default async function AssistantPage(props: LocaleParams) {
  const locale = await resolveLocale(props);
  const content = getContent(locale);
  const services = detailPage(content, "services");

  return (
    <>
      <JsonLd data={assistantJsonLd(content.assistant, locale, services.navLabel)} />
      <AssistantContent copy={content.assistant} backLabel={services.navLabel} />
    </>
  );
}
