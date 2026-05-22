import { DetailList, InfoPage } from "@/components/info-page";

const items = [
  "Premium Websites und Landingpages",
  "MVPs und Full-Stack-Web-Apps",
  "Native iOS 26 Apps mit App Store Launch",
  "Backend-Logiken und API-Flows",
  "AI-gestützte Automationen und interne Tools",
  "UX/UI- und Conversion-Audits",
];

export default function ServicesPage() {
  return (
    <InfoPage
      eyebrow="Leistungen"
      title="Von der Landingpage bis zur nativen iOS App."
      intro="Produktdenken, Interface, Backend und nativer iOS Build in einer Person. Kurze Wege vom Konzept zum Launch, ohne Übergaben zwischen Disziplinen."
      ctaHref="mailto:hello@lukaskaffer.com"
      ctaLabel="Idee schicken"
    >
      <DetailList items={items} />
    </InfoPage>
  );
}
