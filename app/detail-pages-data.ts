import type { DetailPath, DetailSlug } from "./content/types";

// The navigation pages' structure, shared by both languages. The words live
// in app/content/<locale>/pages.ts.

export const detailPageNavOrder: DetailSlug[] = ["services", "work", "about", "faq", "contact"];

const updated = new Date("2026-09-24T00:00:00.000Z");

export const detailPageBase = {
  services: { slug: "services", path: "/services", lastModified: updated },
  work: { slug: "work", path: "/work", lastModified: new Date("2026-10-06T00:00:00.000Z") },
  about: { slug: "about", path: "/about", lastModified: updated },
  faq: { slug: "faq", path: "/faq", lastModified: updated },
  contact: { slug: "contact", path: "/contact", lastModified: updated },
} satisfies Record<DetailSlug, { slug: DetailSlug; path: DetailPath; lastModified: Date }>;

export const PORTRAITS = {
  standing: { src: "/profile/lukas-standing.jpg", width: 800, height: 1200 },
  seated: { src: "/profile/lukas-seated.jpg", width: 733, height: 1100 },
};
