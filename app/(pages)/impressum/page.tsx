import type { Metadata } from "next";
import { LegalPage } from "@/app/legal-page";

export const metadata: Metadata = {
  title: "Impressum · Lukas Kaffer",
  description: "Impressum und Offenlegung für lukaskaffer.com.",
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <LegalPage
      eyebrow="Rechtliches"
      title="Impressum"
      intro="Angaben nach § 5 ECG, § 63 GewO und § 25 MedienG."
    >
      <h2>Unternehmen</h2>
      <p>
        Lukas Alexander Kaffer
        <br />
        Einzelunternehmen
        <br />
        Klederinger Straße 15/2/27
        <br />
        2320 Schwechat
        <br />
        Österreich
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href="mailto:hello@lukaskaffer.com">hello@lukaskaffer.com</a>
        <br />
        Kontaktformular: <a href="/contact">lukaskaffer.com/contact</a>
      </p>

      <h2>Unternehmensgegenstand</h2>
      <p>
        Design und Entwicklung von Websites, Apps und Software sowie Betreuung und
        Hosting; Werbung.
      </p>

      <h2>Gewerbeberechtigungen</h2>
      <p>
        Dienstleistungen in der automatischen Datenverarbeitung und
        Informationstechnik (GISA-Zahl 40194523)
        <br />
        Werbegrafik-Designer (GISA-Zahl 40194530)
        <br />
        Werbeagentur (GISA-Zahl 40194547)
        <br />
        Ankündigungsunternehmen (GISA-Zahl 40194554)
      </p>
      <p>
        Gewerbebehörde: Bezirkshauptmannschaft Bruck an der Leitha
        <br />
        Kammerzugehörigkeit: Wirtschaftskammer Niederösterreich, Fachgruppen
        Unternehmensberatung, Buchhaltung und Informationstechnologie sowie
        Werbung und Marktkommunikation
        <br />
        Berufsrecht: Gewerbeordnung 1994, abrufbar unter{" "}
        <a href="https://www.ris.bka.gv.at">www.ris.bka.gv.at</a>
      </p>

      <h2>Offenlegung nach § 25 MedienG</h2>
      <p>
        Medieninhaber und Herausgeber: Lukas Alexander Kaffer, Schwechat
        <br />
        Unternehmensgegenstand: siehe oben
      </p>
      <p>
        Grundlegende Richtung: lukaskaffer.com informiert über die Leistungen, die
        Arbeitsweise und ausgewählte Projekte von Lukas Kaffer und dient der
        Kontaktaufnahme für berufliche und projektbezogene Anfragen.
      </p>

      <h2>Haftung für Inhalte und externe Links</h2>
      <p>
        Die Inhalte dieser Website werden mit Sorgfalt erstellt und aktualisiert.
        Eine Gewähr für die Aktualität, Richtigkeit und Vollständigkeit externer
        Informationen kann nicht übernommen werden. Für Inhalte verlinkter Websites
        sind ausschließlich deren jeweilige Betreiber verantwortlich.
      </p>
    </LegalPage>
  );
}
