import type { MetadataRoute } from "next";
import { detailPages } from "./detail-pages-data";
import { caseStudies } from "./projects-data";
import { HOME_LAST_MODIFIED, SITE_URL } from "./seo";

const LEGAL_LAST_MODIFIED = new Date("2026-08-11T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: HOME_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...detailPages.map((page) => ({
      url: `${SITE_URL}${page.path}`,
      lastModified: page.lastModified,
      changeFrequency: "monthly" as const,
      priority: page.slug === "contact" ? 0.7 : 0.8,
    })),
    ...caseStudies.map((study) => ({
      url: `${SITE_URL}${study.path}`,
      lastModified: study.lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...["/impressum", "/datenschutz"].map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: LEGAL_LAST_MODIFIED,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
