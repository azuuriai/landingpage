import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import { JsonLd } from "@/app/_components/site-chrome";
import { detailPage, getContent } from "@/app/content";
import type { LaunchOfferCopy } from "@/app/content/types";
import { localeFromParams, resolveLocale, type LocaleParams } from "@/app/locale";
import { LAUNCH_PATH, LAUNCH_PRICES, offersJsonLd } from "@/app/offers-data";
import {
  absoluteUrl,
  breadcrumbList,
  languageTag,
  localizedPaths,
  pageMetadata,
  SITE_URL,
} from "@/app/seo";
import { withName } from "@/app/site";
import { LaunchContent } from "./launch-content";

export async function generateMetadata(props: LocaleParams): Promise<Metadata> {
  const locale = await localeFromParams(props);
  const { page } = getContent(locale).launchOffer;
  return pageMetadata({
    locale,
    path: LAUNCH_PATH,
    title: page.metaTitle,
    description: page.metaDescription,
  });
}

function launchJsonLd(copy: LaunchOfferCopy, locale: Locale, servicesLabel: string) {
  const url = absoluteUrl(localizedPaths(LAUNCH_PATH)[locale]);
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
        { name: copy.page.breadcrumb, path: LAUNCH_PATH },
      ]),
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: copy.service.name,
        serviceType: copy.service.type,
        description: copy.page.description,
        provider: { "@id": `${SITE_URL}/#person` },
        // Remote work for founders anywhere; the site speaks German and English.
        availableLanguage: ["de", "en"],
        offers: offersJsonLd([...copy.plans, copy.ongoing], LAUNCH_PRICES, url),
      },
    ],
  };
}

// Not a navigation page: like /studios it brings its own opening, so the
// shared SubpageHero renders nothing here.
export default async function LaunchPage(props: LocaleParams) {
  const locale = await resolveLocale(props);
  const content = getContent(locale);
  const services = detailPage(content, "services");
  const project = content.projects["vienna-event-radar"];

  return (
    <>
      <JsonLd data={launchJsonLd(content.launchOffer, locale, services.navLabel)} />
      <LaunchContent
        copy={content.launchOffer}
        backLabel={services.navLabel}
        project={project}
        phoneLabel={withName(content.ui.appRecording, content.iosApp.name)}
      />
    </>
  );
}
