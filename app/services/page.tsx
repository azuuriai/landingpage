import { DetailList, InfoPage } from "@/components/info-page";

const items = [
  "Premium mobile-first Websites und Landingpages",
  "MVPs und Full-Stack Web Apps",
  "KI-Automationen und interne Tools",
  "UX/UI und Conversion Audits",
];

export default function ServicesPage() {
  return (
    <InfoPage
      eyebrow="Leistungen"
      title="Fokussierte Builds für Gründer und kleine Teams."
      intro="Ich verbinde Produktdenken, Interface Design und Umsetzung, damit der Weg von Idee zu Launch kompakt bleibt."
    >
      <DetailList items={items} />
    </InfoPage>
  );
}
