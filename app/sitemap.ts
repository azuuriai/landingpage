import type { MetadataRoute } from "next";
import { detailPages } from "./detail-pages-data";
import { HOME_LAST_MODIFIED, SITE_URL } from "./seo";

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
  ];
}
