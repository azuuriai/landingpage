import { DetailList, InfoPage } from "@/components/info-page";
import { capabilities } from "@/lib/content";

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="Über mich"
      title="Produktgefühl mit Full-Stack Tiefe."
      intro="Ich baue wie ein Produktpartner: Angebot schärfen, Interaktion gestalten, Stack umsetzen und das Ding live bringen."
    >
      <DetailList items={capabilities.map((capability) => capability.label)} />
    </InfoPage>
  );
}
