export const SITE_URL = "https://lukaskaffer.com";
export const SITE_NAME = "Lukas Kaffer";
export const CONTACT_EMAIL = "hello@lukaskaffer.com";
export const HOME_LAST_MODIFIED = new Date("2026-05-25T00:00:00.000Z");

export const SITE_DESCRIPTION =
  "Ich konzipiere, designe und baue Webprodukte und native iOS Apps. Solo, von der Idee bis in den App Store. Kurze Wege, direkter Kontakt, ohne Agentur dazwischen.";

export const OG_DESCRIPTION =
  "Webprodukte und iOS Apps, gebaut bis in den App Store statt bis zum Mockup. Vienna Event Radar online und in Apples Store.";

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
      jobTitle: "Web- und iOS-Produktentwickler",
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
        "Produktdesign",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: ["de-AT", "en"],
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: SITE_NAME,
      url: SITE_URL,
      image: absoluteUrl("/profile/lukas-seated.jpg"),
      email: CONTACT_EMAIL,
      description: SITE_DESCRIPTION,
      areaServed: ["Austria", "Germany", "Switzerland", "Europe"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vienna",
        addressCountry: "AT",
      },
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Websites und Landing Pages",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "MVPs und Webprodukte",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Native iOS Apps",
          },
        },
      ],
    },
  ],
};
