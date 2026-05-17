import { DetailList, InfoPage } from "@/components/info-page";
import { caseStudyFacts } from "@/lib/content";

export default function WorkPage() {
  return (
    <InfoPage
      eyebrow="Featured work"
      title="Vienna Event Radar"
      intro="A real product case: built from zero to launch as a full-stack web product, now extended toward iOS."
    >
      <DetailList items={caseStudyFacts} />
    </InfoPage>
  );
}
