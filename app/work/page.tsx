import { DetailList, InfoPage } from "@/components/info-page";
import { caseStudyFacts } from "@/lib/content";

export default function WorkPage() {
  return (
    <InfoPage
      eyebrow="Ausgewählte Arbeit"
      title="Vienna Event Radar"
      intro="Ein echter Produktcase: von null bis Launch als Full-Stack Webprodukt gebaut und inzwischen in Richtung iOS erweitert."
    >
      <DetailList items={caseStudyFacts} />
    </InfoPage>
  );
}
