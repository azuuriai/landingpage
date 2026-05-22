import { DetailList, InfoPage } from "@/components/info-page";
import { processSteps } from "@/lib/content";

export default function ProcessPage() {
  return (
    <InfoPage
      eyebrow="Prozess"
      title="Scharf ziehen, gestalten, bauen, launchen."
      intro="Eine einfache Arbeitsweise, die Struktur und Interface-Qualität durch das ganze Projekt zieht. Weil Konzept, Design und Code in einem Kopf bleiben, sind die Wege kurz und die Iterationen schnell."
    >
      <DetailList items={processSteps.map((step) => `${step.title}: ${step.description}`)} />
    </InfoPage>
  );
}
