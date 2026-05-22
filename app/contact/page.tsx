import { InfoPage } from "@/components/info-page";

export default function ContactPage() {
  return (
    <InfoPage
      eyebrow="Kontakt"
      title="Eine grobe Produktidee im Kopf?"
      intro="Schick mir die Idee, den aktuellen Engpass oder die Seite, die besser funktionieren soll. Du bekommst eine ehrliche Einschätzung und einen klaren ersten Schritt, auch wenn wir am Ende nicht zusammenarbeiten."
      ctaHref="mailto:hello@lukaskaffer.com"
      ctaLabel="Idee schicken"
    >
      <div className="space-y-5">
        <a
          href="mailto:hello@lukaskaffer.com"
          className="block rounded-[22px] bg-[#1d1d1b] px-6 py-5 text-[18px] font-semibold text-white transition hover:bg-black"
        >
          hello@lukaskaffer.com
        </a>
        <p className="text-[15px] leading-7 text-[#74746f]">
          Bester Startpunkt: ein Absatz dazu, was du launchen willst, für wen es ist und wo es gerade hakt.
        </p>
      </div>
    </InfoPage>
  );
}
