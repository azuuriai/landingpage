import { DetailList, InfoPage } from "@/components/info-page";
import { capabilities } from "@/lib/content";

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="Über mich"
      title="Ich mache aus groben Ideen nutzbare Produkte."
      intro="Ich verbinde Produktdenken, Interface-Gefühl, Backend-Logiken und Full-Stack-Umsetzung in einer Person. Mein Arbeitsmodus ist AI-first, mein Output sind hochwertige Webprodukte und native iOS 26 Apple App Experiences."
    >
      <DetailList items={capabilities.map((capability) => capability.label)} />
    </InfoPage>
  );
}
