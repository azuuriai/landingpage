import { DetailList, InfoPage } from "@/components/info-page";
import { capabilities } from "@/lib/content";

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="Über mich"
      title="Ich baue Dinge, die wirklich fertig werden."
      intro="Solo Product Builder aus Wien. Ich verbinde Produktdenken, Interface, Backend und nativen iOS Build in einer Person. Der Output sind hochwertige Webprodukte und iOS Apps, die wirklich im Store landen."
    >
      <DetailList items={capabilities.map((capability) => capability.label)} />
    </InfoPage>
  );
}
