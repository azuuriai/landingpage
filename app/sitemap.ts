import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing, type AppPathname, type Locale } from "@/i18n/routing";
import { detailPageBase } from "./detail-pages-data";
import { caseStudyBase } from "./projects-data";
import { HOME_LAST_MODIFIED, SITE_URL } from "./seo";

// Last changes of the legal pages (imprint: link to the WKO entry; privacy policy:
// the date it names) and the day the English version went live. An English
// entry is never older than that day.
const IMPRINT_LAST_MODIFIED = new Date("2026-10-08T00:00:00.000Z");
const PRIVACY_LAST_MODIFIED = new Date("2026-10-01T00:00:00.000Z");
const ENGLISH_LAUNCHED = new Date("2026-10-07T00:00:00.000Z");

type Entry = {
  path: AppPathname;
  lastModified: Date;
  changeFrequency: "monthly" | "yearly";
  priority: number;
};

function lastModifiedFor(locale: Locale, date: Date) {
  return locale === "en" && date < ENGLISH_LAUNCHED ? ENGLISH_LAUNCHED : date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [
    { path: "/", lastModified: HOME_LAST_MODIFIED, changeFrequency: "monthly", priority: 1 },
    ...Object.values(detailPageBase).map((page) => ({
      path: page.path,
      lastModified: page.lastModified,
      changeFrequency: "monthly" as const,
      priority: page.slug === "contact" ? 0.7 : 0.8,
    })),
    ...Object.values(caseStudyBase).map((study) => ({
      path: study.path,
      lastModified: study.lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      path: "/impressum",
      lastModified: IMPRINT_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      path: "/datenschutz",
      lastModified: PRIVACY_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Every page once per language, each entry naming both versions and the
  // English one as the default for every other language.
  return entries.flatMap(({ path, lastModified, ...rest }) => {
    const urls = Object.fromEntries(
      routing.locales.map((locale) => [locale, `${SITE_URL}${getPathname({ href: path, locale })}`]),
    ) as Record<Locale, string>;
    const languages = { ...urls, "x-default": urls.en };
    return routing.locales.map((locale) => ({
      url: urls[locale],
      lastModified: lastModifiedFor(locale, lastModified),
      ...rest,
      alternates: { languages },
    }));
  });
}
