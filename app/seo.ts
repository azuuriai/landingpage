import type { Metadata } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing, type AppPathname, type Locale } from "@/i18n/routing";
import { getContent } from "./content";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL, UPWORK_PROFILE_URL, WKO_PROFILE_URL } from "./site";

export { CONTACT_EMAIL, SITE_NAME, SITE_URL };

export const HOME_LAST_MODIFIED = new Date("2026-09-24T00:00:00.000Z");

// Profiles elsewhere that belong to the same person and business (schema.org
// sameAs): marketplaces, the chamber's directory and the Google Business Profile.
const PROFILE_URLS = [
  UPWORK_PROFILE_URL,
  "https://www.freelancermap.de/profil/lukas-kaffer",
  WKO_PROFILE_URL,
  "https://maps.google.com/?cid=3022797824933993693",
];

export const googleSiteVerification =
  process.env.GOOGLE_SITE_VERIFICATION ??
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

const OG_LOCALE: Record<Locale, string> = { de: "de_AT", en: "en_US" };
const LANGUAGE_TAG: Record<Locale, string> = { de: "de-AT", en: "en-US" };

// BCP 47 tag for schema.org's inLanguage.
export function languageTag(locale: Locale) {
  return LANGUAGE_TAG[locale];
}

export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

// The generated Open Graph image, one per language (app/opengraph-image.tsx).
export function ogImage(locale: Locale) {
  return {
    url: `/opengraph-image/${locale}`,
    ...OG_IMAGE_SIZE,
    alt: getContent(locale).site.ogImageAlt,
  };
}

// A page's URL in both languages, e.g. /impressum and /en/imprint.
export function localizedPaths(path: AppPathname): Record<Locale, string> {
  return {
    de: getPathname({ href: path, locale: "de" }),
    en: getPathname({ href: path, locale: "en" }),
  };
}

// Canonical and hreflang links of one page. x-default points to English:
// it is the better guess for every visitor whose language is neither.
function alternates(path: AppPathname, locale: Locale): Metadata["alternates"] {
  const paths = localizedPaths(path);
  return {
    canonical: paths[locale],
    languages: { de: paths.de, en: paths.en, "x-default": paths.en },
  };
}

export function pageMetadata({
  locale,
  path,
  title,
  description,
  ogDescription = description,
}: {
  locale: Locale;
  path: AppPathname;
  title: string;
  description: string;
  ogDescription?: string;
}): Metadata {
  const image = ogImage(locale);
  const otherLocales = routing.locales.filter((item) => item !== locale);

  return {
    title,
    description,
    alternates: alternates(path, locale),
    openGraph: {
      title,
      description: ogDescription,
      url: localizedPaths(path)[locale],
      siteName: SITE_NAME,
      type: "website",
      locale: OG_LOCALE[locale],
      alternateLocale: otherLocales.map((item) => OG_LOCALE[item]),
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: ogDescription,
      images: [image.url],
    },
  };
}

// Metadata of the root layout: the homepage's own plus everything that is
// inherited by every page.
export function siteMetadata(locale: Locale): Metadata {
  const { site } = getContent(locale);

  return {
    ...pageMetadata({
      locale,
      path: "/",
      title: site.title,
      description: site.description,
      ogDescription: site.ogDescription,
    }),
    applicationName: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    category: "technology",
    creator: SITE_NAME,
    publisher: SITE_NAME,
    keywords: site.keywords,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
        { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
        { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      shortcut: "/favicon.ico",
      apple: { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    ...(googleSiteVerification
      ? { verification: { google: googleSiteVerification } }
      : {}),
  };
}

// Breadcrumb trail of a page below the homepage, e.g. Lukas Kaffer › Showcase
// › Indeed Unique; Google shows it in place of the bare URL.
export function breadcrumbList(
  locale: Locale,
  url: string,
  trail: { name: string; path: AppPathname }[],
) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [{ name: SITE_NAME, path: "/" as AppPathname }, ...trail].map(
      (step, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: step.name,
        item: absoluteUrl(localizedPaths(step.path)[locale]),
      }),
    ),
  };
}

export function structuredData(locale: Locale) {
  const { site } = getContent(locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: SITE_NAME,
        url: SITE_URL,
        image: absoluteUrl("/profile/lukas-standing.jpg"),
        email: CONTACT_EMAIL,
        jobTitle: site.jobTitle,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Vienna",
          addressCountry: "AT",
        },
        knowsAbout: site.knowsAbout,
        knowsLanguage: ["de", "en"],
        sameAs: PROFILE_URLS,
      },
      // The business behind the person: what it offers and where. Remote work
      // reaches further, but these are the markets the site speaks to.
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#business`,
        name: SITE_NAME,
        url: SITE_URL,
        image: absoluteUrl("/profile/lukas-standing.jpg"),
        email: CONTACT_EMAIL,
        description: site.description,
        founder: { "@id": `${SITE_URL}/#person` },
        areaServed: [
          { "@type": "City", name: "Wien" },
          { "@type": "Country", name: "Österreich" },
          { "@type": "Country", name: "Deutschland" },
          { "@type": "Country", name: "Schweiz" },
        ],
        availableLanguage: ["de", "en"],
        sameAs: PROFILE_URLS,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: routing.locales.map(languageTag),
        publisher: {
          "@id": `${SITE_URL}/#person`,
        },
      },
    ],
  };
}
