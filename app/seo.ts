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

const faqItems = [
  {
    question: "Was kostet ein Projekt und wie lange dauert es?",
    answer:
      "Beides hängt vom Umfang ab. Nach einem kurzen, kostenlosen Erstgespräch bekommst du einen klaren Festpreis für einen klar definierten Umfang. Weil Strategie, Design und Umsetzung bei einer Person bleiben, bewegt sich das Projekt ohne Agentur-Übergaben deutlich schneller.",
  },
  {
    question: "Baust du native iOS Apps?",
    answer:
      "Ja. Native iOS Apps in SwiftUI, von der Idee bis zum echten App-Store-Release. Wenn dein Produkt aufs iPhone gehört, baue ich es nativ und nicht als verpackte Website.",
  },
  {
    question: "Was passiert nach dem Launch?",
    answer:
      "Du wirst nach dem Go-live nicht allein gelassen. Launch umfasst die SEO- und Security-Basics; danach bin ich für Fixes und Anpassungen verfügbar. Code und Accounts gehören dir.",
  },
  {
    question: "Entwirfst du auch das Design?",
    answer:
      "Ja. Interface, Interaktion und Code entstehen zusammen, damit das Ergebnis konsistent bleibt und nicht zwischen Design- und Entwicklungsübergaben zerfällt.",
  },
];

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
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};
