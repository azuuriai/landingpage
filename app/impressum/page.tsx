import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

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
      intro="Angaben zur verantwortlichen Person hinter lukaskaffer.com."
    >
      <h2>Betreiber und Medieninhaber</h2>
      <p>
        Lukas Kaffer
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

      <h2>Rechtsform</h2>
      <p>Privatperson, nicht im Firmenbuch eingetragen.</p>

      <h2>Offenlegung nach § 25 MedienG</h2>
      <p>Medieninhaber und Herausgeber: Lukas Kaffer</p>
      <p>
        Tätigkeitsbereich: Betrieb der persönlichen Portfolio- und Projektwebsite
        lukaskaffer.com.
      </p>

      <h2>Grundlegende Richtung</h2>
      <p>
        lukaskaffer.com informiert über das berufliche Profil, die Arbeitsweise und
        ausgewählte digitale Projekte von Lukas Kaffer. Die Website dient außerdem
        der Kontaktaufnahme für berufliche und projektbezogene Anfragen.
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
