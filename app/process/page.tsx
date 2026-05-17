import { DetailList, InfoPage } from "@/components/info-page";
import { processSteps } from "@/lib/content";

export default function ProcessPage() {
  return (
    <InfoPage
      eyebrow="Process"
      title="Shape, design, build, launch."
      intro="A compact workflow for moving fast without losing taste, structure or production quality."
    >
      <DetailList items={processSteps.map((step) => `${step.title}: ${step.description}`)} />
    </InfoPage>
  );
}
