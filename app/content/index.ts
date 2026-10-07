import "server-only";
import type { Locale } from "@/i18n/routing";
import { de } from "./de";
import { en } from "./en";
import type { Content, DetailPageData, DetailSlug } from "./types";

export type { Content } from "./types";

// Every text of the site in one language. Only server code may import this
// module ("server-only" fails the build otherwise), so the other language
// never ships to the browser; client components get the strings they need as
// props.
export function getContent(locale: Locale): Content {
  return locale === "en" ? en : de;
}

export function detailPage(content: Content, slug: DetailSlug): DetailPageData {
  const page = content.detailPages.find((item) => item.slug === slug);
  if (!page) throw new Error(`Missing detail page "${slug}"`);
  return page;
}
