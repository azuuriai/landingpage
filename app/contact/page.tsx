import { InfoPage } from "@/components/info-page";

export default function ContactPage() {
  return (
    <InfoPage
      eyebrow="Kontakt"
      title="Eine grobe Produktidee im Kopf?"
      intro="Schick mir die Idee, den aktuellen Engpass oder die Seite, die besser funktionieren soll. Ich helfe dabei, daraus den nächsten klaren Schritt zu machen."
      ctaHref="mailto:hello@lukaskaffer.com"
      ctaLabel="E-Mail"
    >
      <div className="space-y-5">
        <a
          href="mailto:hello@lukaskaffer.com"
          className="block rounded-[22px] bg-[#1d1d1b] px-6 py-5 text-[18px] font-semibold text-white transition hover:bg-black"
        >
          hello@lukaskaffer.com
        </a>
        <p className="text-[15px] leading-7 text-[#74746f]">
          Bester Startpunkt: ein Absatz dazu, was du launchen möchtest, für wen es ist und was als Nächstes passieren soll.
        </p>
      </div>
    </InfoPage>
  );
}
