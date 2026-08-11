export const SITE_URL = "https://lukaskaffer.com";
export const SITE_NAME = "Lukas Kaffer";
export const CONTACT_EMAIL = "hello@lukaskaffer.com";
export const HOME_LAST_MODIFIED = new Date("2026-08-11T00:00:00.000Z");

export const SITE_DESCRIPTION =
  "Lukas Kaffer verbindet Bildungshintergrund, Produktdenken und AI-assisted Development. Vienna Event Radar belegt die Umsetzung mit Next.js, Supabase und einer nativen SwiftUI-App.";

export const OG_DESCRIPTION =
  "Produktdenken, klare Vermittlung und AI-assisted Development. Vienna Event Radar läuft im Web und nativ auf iOS.";

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
      jobTitle: "AI-native Product Builder",
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
