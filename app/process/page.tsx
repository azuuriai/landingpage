import { DetailList, InfoPage } from "@/components/info-page";
import { processSteps } from "@/lib/content";

export default function ProcessPage() {
  return (
    <InfoPage
      eyebrow="Prozess"
      title="Schärfen, gestalten, bauen, launchen."
      intro="Ein kompakter Ablauf, um schnell zu arbeiten, ohne Produktgefühl, Struktur oder Produktionsqualität zu verlieren."
    >
      <DetailList items={processSteps.map((step) => `${step.title}: ${step.description}`)} />
    </InfoPage>
  );
}
