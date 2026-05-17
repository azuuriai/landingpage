import { DetailList, InfoPage } from "@/components/info-page";
import { capabilities } from "@/lib/content";

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="About"
      title="Product taste with full-stack depth."
      intro="I build like a product partner: shaping the offer, designing the interaction, implementing the stack and pushing the thing live."
    >
      <DetailList items={capabilities.map((capability) => capability.label)} />
    </InfoPage>
  );
}
