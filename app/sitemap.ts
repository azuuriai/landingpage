import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing, type AppPathname } from "@/i18n/routing";
import { detailPageBase } from "./detail-pages-data";
import { caseStudyBase } from "./projects-data";
import { HOME_LAST_MODIFIED, SITE_URL } from "./seo";

const LEGAL_LAST_MODIFIED = new Date("2026-08-11T00:00:00.000Z");

type Entry = {
  path: AppPathname;
  lastModified: Date;
  changeFrequency: "monthly" | "yearly";
  priority: number;
};

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
    ...(["/impressum", "/datenschutz"] as const).map((path) => ({
      path,
      lastModified: LEGAL_LAST_MODIFIED,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];

  // Every page once per language, each entry naming both versions.
  return entries.flatMap(({ path, ...rest }) => {
    const languages = Object.fromEntries(
      routing.locales.map((locale) => [locale, `${SITE_URL}${getPathname({ href: path, locale })}`]),
    );
    return routing.locales.map((locale) => ({
      url: languages[locale],
      ...rest,
      alternates: { languages },
    }));
  });
}
