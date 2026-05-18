import { DetailList, InfoPage } from "@/components/info-page";

const items = [
  "Premium Websites und Landingpages",
  "MVPs und Full-Stack-Web-Apps",
  "Backend-Logiken und API-Flows",
  "Native iOS 26 Apple Apps",
  "AI-first Automationen und interne Tools",
  "UX/UI- und Conversion-Audits",
];

export default function ServicesPage() {
  return (
    <InfoPage
      eyebrow="Leistungen"
      title="Von der Landingpage bis zur nativen iOS App."
      intro="Produktdenken, Interface Design, Backend-Logiken und AI-first Umsetzung in einer Person, damit der Weg von Idee zu Launch kurz, klar und hochwertig bleibt."
    >
      <DetailList items={items} />
    </InfoPage>
  );
}
