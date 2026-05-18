import { DetailList, InfoPage } from "@/components/info-page";
import { caseStudyFacts } from "@/lib/content";

export default function WorkPage() {
  return (
    <InfoPage
      eyebrow="Ausgewählte Arbeit"
      title="Vienna Event Radar"
      intro="Ein echtes Produkt: von null bis Launch als Full-Stack-Webprodukt mit Backend-Logiken, AI-first Recherchepipeline und nativer iOS 26 App Experience gebaut."
    >
      <DetailList items={caseStudyFacts} />
    </InfoPage>
  );
}
