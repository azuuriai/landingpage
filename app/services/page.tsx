import { DetailList, InfoPage } from "@/components/info-page";

const items = [
  "Premium mobile-first websites and landing pages",
  "MVPs and full-stack web apps",
  "AI automations and internal tools",
  "UX/UI and conversion audits",
];

export default function ServicesPage() {
  return (
    <InfoPage
      eyebrow="Services"
      title="Focused builds for founders and small teams."
      intro="I combine product thinking, interface design and implementation so the path from idea to launch stays tight."
    >
      <DetailList items={items} />
    </InfoPage>
  );
}
