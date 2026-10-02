import type { Metadata } from "next";

export const SITE_URL = "https://lukaskaffer.com";
export const SITE_NAME = "Lukas Kaffer";
export const CONTACT_EMAIL = "hello@lukaskaffer.com";
export const HOME_LAST_MODIFIED = new Date("2026-09-24T00:00:00.000Z");

export const SITE_DESCRIPTION =
  "Lukas Kaffer baut Websites, Webprodukte und native iOS-Apps von der Idee bis zum Launch. Live-Belege: die Website des Tanzstudios Indeed Unique mit Sanity CMS und Eversports sowie Vienna Event Radar im Web und im App Store.";

export const OG_DESCRIPTION =
  "Live-Belege: die Website des Tanzstudios Indeed Unique mit eigenem CMS und Vienna Event Radar im Web und im App Store.";

export const googleSiteVerification =
  process.env.GOOGLE_SITE_VERIFICATION ??
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      url: SITE_URL,
      image: absoluteUrl("/profile/lukas-standing.jpg"),
      email: CONTACT_EMAIL,
      jobTitle: "Webdesigner und Entwickler",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vienna",
        addressCountry: "AT",
      },
      knowsAbout: [
        "Webentwicklung",
        "Native iOS Apps",
        "SwiftUI",
        "Next.js",
        "React",
        "TypeScript",
        "Supabase",
        "Produktdesign",
        "AI-assisted Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "de-AT",
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
    },
  ],
};

export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Lukas Kaffer · Websites, Webprodukte und native iOS Apps",
};

export function pageMetadata({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      locale: "de_AT",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
