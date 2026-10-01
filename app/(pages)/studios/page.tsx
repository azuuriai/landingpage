import { JsonLd } from "@/app/_components/site-chrome";
import { absoluteUrl, pageMetadata, SITE_URL } from "@/app/seo";
import { studiosPage } from "@/app/studios-data";
import { StudiosContent } from "./studios-content";

export const metadata = pageMetadata({
  path: studiosPage.path,
  title: studiosPage.metaTitle,
  description: studiosPage.metaDescription,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}${studiosPage.path}#webpage`,
      url: absoluteUrl(studiosPage.path),
      name: studiosPage.metaTitle,
      description: studiosPage.metaDescription,
      inLanguage: "de-AT",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}${studiosPage.path}#service` },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}${studiosPage.path}#service`,
      name: "Websites für Studios und Kursanbieter",
      serviceType: "Webdesign und Webentwicklung",
      description: studiosPage.description,
      provider: { "@id": `${SITE_URL}/#person` },
      areaServed: { "@type": "Country", name: "Österreich" },
    },
  ],
};

// Not a navigation page: like the case studies it brings its own opening,
// so the shared SubpageHero renders nothing here.
export default function StudiosPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <StudiosContent />
    </>
  );
}
