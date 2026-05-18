import { DetailList, InfoPage } from "@/components/info-page";
import { processSteps } from "@/lib/content";

export default function ProcessPage() {
  return (
    <InfoPage
      eyebrow="Prozess"
      title="Schärfen, gestalten, bauen, launchen."
      intro="Eine einfache Arbeitsweise: schnell vorankommen, ohne Struktur, Interface-Qualität oder Production-Standards zu verlieren."
    >
      <DetailList items={processSteps.map((step) => `${step.title}: ${step.description}`)} />
    </InfoPage>
  );
}
