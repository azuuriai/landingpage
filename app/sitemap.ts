import type { MetadataRoute } from "next";

const SITE_URL = "https://lukaskaffer.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-05-23T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
