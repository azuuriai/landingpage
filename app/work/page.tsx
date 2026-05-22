import { DetailList, InfoPage } from "@/components/info-page";
import { caseStudyFacts } from "@/lib/content";

export default function WorkPage() {
  return (
    <InfoPage
      eyebrow="Ausgewählte Arbeit"
      title="Vienna Event Radar"
      intro="Ein echtes Produkt: von der Idee bis in den App Store, allein konzipiert, designt und gebaut. Web online, iOS App nativ in Apples Store."
      ctaHref="mailto:hello@lukaskaffer.com"
      ctaLabel="Idee schicken"
    >
      <DetailList items={caseStudyFacts} />
    </InfoPage>
  );
}
