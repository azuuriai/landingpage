import type { Metadata } from "next";
import { LegalPage } from "@/app/legal-page";

export const metadata: Metadata = {
  title: "Datenschutz · Lukas Kaffer",
  description: "Datenschutzerklärung für lukaskaffer.com.",
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <LegalPage
      eyebrow="Datenschutz"
      title="Datenschutzerklärung"
      intro="Diese Erklärung beschreibt, welche personenbezogenen Daten bei der Nutzung von lukaskaffer.com verarbeitet werden."
      updated="1. Oktober 2026"
    >
      <h2>Verantwortlicher</h2>
      <p>
        Lukas Alexander Kaffer (Einzelunternehmen)
        <br />
        Klederinger Straße 15/2/27
        <br />
        2320 Schwechat
        <br />
        Österreich
      </p>
      <p>
        Datenschutz-Kontakt:{" "}
        <a href="mailto:hello@lukaskaffer.com">hello@lukaskaffer.com</a>
      </p>

      <h2>Aufruf und Bereitstellung der Website</h2>
      <p>
        Beim Aufruf der Website werden technisch erforderliche Zugriffsdaten
        verarbeitet. Dazu können insbesondere IP-Adresse, Zeitpunkt des Zugriffs,
        angefragte URL, Referrer sowie Browser-, Geräte- und
        Betriebssysteminformationen gehören. Die Verarbeitung dient der sicheren,
        stabilen und technisch fehlerfreien Bereitstellung der Website.
      </p>
      <p>
        Die Website wird über Vercel gehostet und über Cloudflare ausgeliefert.
        Cloudflare wird außerdem für die E-Mail-Weiterleitung der Domain eingesetzt.
        Dabei können die genannten technischen Daten durch Vercel Inc. und
        Cloudflare, Inc. verarbeitet werden.
      </p>

      <h2>Kontaktformular und E-Mail</h2>
      <p>
        Wenn du das Kontaktformular verwendest, werden Name, E-Mail-Adresse,
        Nachricht und technisch erforderliche Übermittlungsdaten verarbeitet, um
        deine Anfrage zuzustellen und zu beantworten. Die Formularangaben werden
        direkt aus deinem Browser an Web3Forms übermittelt und anschließend als
        E-Mail weitergeleitet.
      </p>
      <p>
        Web3Forms wird von Web3Creative mit Sitz in Kerala, Indien, betrieben und
        nutzt nach eigenen Angaben Server in der Region US-East. Nach den aktuellen
        Anbieterangaben werden Formulareinsendungen nicht dauerhaft gespeichert;
        Serverprotokolle können personenbezogene technische Angaben enthalten und
        werden nach Anbieterangaben regelmäßig, derzeit spätestens nach zwei
        Monaten, gelöscht. Bitte übermittle über das Formular keine vertraulichen
        oder sensiblen Informationen, die für deine Anfrage nicht erforderlich sind.
      </p>
      <p>
        Du kannst alternativ direkt an{" "}
        <a href="mailto:hello@lukaskaffer.com">hello@lukaskaffer.com</a> schreiben.
        In diesem Fall werden die Angaben verarbeitet, die du selbst mit deiner
        Nachricht übermittelst.
      </p>

      <h2>Geschäftliche Kontaktaufnahme</h2>
      <p>
        Für die Anbahnung von Aufträgen kann ich Unternehmen gezielt und einzeln
        ansprechen. Dafür verwende ich ausschließlich geschäftliche Kontaktdaten, die
        das Unternehmen selbst veröffentlicht hat, etwa auf der eigenen Website:
        Name des Unternehmens, Ansprechperson, geschäftliche E-Mail-Adresse und
        öffentlich einsehbare Angaben zum Unternehmen. Rechtsgrundlage ist mein
        berechtigtes Interesse an der Anbahnung von Geschäftsbeziehungen nach Art. 6
        Abs. 1 lit. f DSGVO. Du kannst dieser Verarbeitung jederzeit formlos an{" "}
        <a href="mailto:hello@lukaskaffer.com">hello@lukaskaffer.com</a>{" "}
        widersprechen; deine Daten werden dann gelöscht und nur zur Sicherstellung,
        dass keine weitere Kontaktaufnahme erfolgt, in einer Sperrliste vermerkt.
      </p>

      <h2>Kunden und Aufträge</h2>
      <p>
        Für Angebote, Verträge, die Projektabwicklung, Rechnungen und die laufende
        Betreuung verarbeite ich die dafür erforderlichen Kontakt-, Vertrags- und
        Zahlungsdaten nach Art. 6 Abs. 1 lit. b DSGVO. Unterlagen, die steuer- und
        unternehmensrechtlichen Aufbewahrungspflichten unterliegen, werden nach
        Art. 6 Abs. 1 lit. c DSGVO in Verbindung mit § 132 BAO sieben Jahre
        aufbewahrt.
      </p>

      <h2>Rechtsgrundlagen</h2>
      <p>
        Die Verarbeitung technischer Zugriffsdaten erfolgt auf Grundlage von Art. 6
        Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt im sicheren und
        zuverlässigen Betrieb der Website. Die Verarbeitung von Kontaktanfragen
        erfolgt – je nach Inhalt der Anfrage – zur Durchführung vorvertraglicher
        Maßnahmen nach Art. 6 Abs. 1 lit. b DSGVO oder auf Grundlage des berechtigten
        Interesses an der Bearbeitung eingehender Anfragen nach Art. 6 Abs. 1 lit. f
        DSGVO.
      </p>

      <h2>Empfänger und Drittlandverarbeitung</h2>
      <p>
        Für Hosting, Auslieferung, E-Mail-Weiterleitung und Formularübermittlung
        werden Vercel, Cloudflare und Web3Forms eingesetzt. Dabei kann es zu einer
        Verarbeitung außerhalb der Europäischen Union beziehungsweise des
        Europäischen Wirtschaftsraums kommen. Eine solche Verarbeitung erfolgt nach
        Maßgabe der anwendbaren datenschutzrechtlichen Voraussetzungen und der beim
        jeweiligen Anbieter verfügbaren Garantien.
      </p>
      <ul>
        <li>
          <a href="https://vercel.com/legal/privacy-policy">Datenschutz bei Vercel</a>
        </li>
        <li>
          <a href="https://www.cloudflare.com/privacypolicy/">Datenschutz bei Cloudflare</a>
        </li>
        <li>
          <a href="https://docs.web3forms.com/getting-started/faq">Datenschutzangaben von Web3Forms</a>
        </li>
      </ul>

      <h2>Cookies und lokale Speicherung</h2>
      <p>
        lukaskaffer.com setzt selbst keine Marketing- oder Analyse-Cookies ein und
        verwendet keine Drittanbieter-Analytics. Technisch notwendige
        Sicherheitsmechanismen der Infrastruktur können im Einzelfall vergleichbare
        technische Kennungen verwenden.
      </p>

      <h2>Externe Links</h2>
      <p>
        Die Website verlinkt unter anderem zu Vienna Event Radar und zum Apple App
        Store. Erst wenn du einen solchen Link öffnest, gelten zusätzlich die
        Datenschutzbestimmungen des jeweiligen externen Anbieters.
      </p>

      <h2>Speicherdauer</h2>
      <p>
        Personenbezogene Daten werden nur so lange gespeichert, wie dies für die
        genannten Zwecke, die Bearbeitung einer Anfrage oder gesetzliche
        Aufbewahrungspflichten erforderlich ist. Nicht mehr benötigte Anfragedaten
        werden gelöscht, sofern keine gesetzlichen Pflichten oder berechtigten
        Gründe für eine weitere Speicherung bestehen.
      </p>

      <h2>Deine Rechte</h2>
      <p>
        Betroffene Personen haben nach Maßgabe der DSGVO insbesondere Rechte auf
        Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
        Datenübertragbarkeit und Widerspruch. Anfragen dazu können an{" "}
        <a href="mailto:hello@lukaskaffer.com">hello@lukaskaffer.com</a> gerichtet
        werden.
      </p>
      <p>
        Außerdem besteht ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde,
        insbesondere bei der Österreichischen Datenschutzbehörde, Barichgasse 40–42,
        1030 Wien, Österreich, <a href="https://www.dsb.gv.at">www.dsb.gv.at</a>.
      </p>
    </LegalPage>
  );
}
