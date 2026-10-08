import { Link } from "@/i18n/navigation";
import { WKO_PROFILE_URL } from "@/app/site";
import type { LegalPageCopy } from "../types";

// Translations of the German legal pages. The German versions are the
// binding ones; both pages say so at the top.
const bindingNote = (
  <p>
    This English version is provided for convenience. The German version is the
    legally binding one.
  </p>
);

export const imprint: LegalPageCopy = {
  metaTitle: "Legal notice · Lukas Kaffer",
  metaDescription: "Legal notice and disclosure for lukaskaffer.com.",
  eyebrow: "Legal",
  title: "Legal notice",
  intro:
    "Information required by § 5 of the Austrian E-Commerce Act (ECG), § 63 of the Austrian Trade Act (GewO) and § 25 of the Austrian Media Act (MedienG).",
  body: (
    <>
      {bindingNote}

      <h2>Business</h2>
      <p>
        Lukas Alexander Kaffer
        <br />
        Sole proprietorship
        <br />
        Klederinger Straße 15/2/27
        <br />
        2320 Schwechat
        <br />
        Austria
      </p>
      <p>VAT ID: ATU83708169</p>

      <h2>Contact</h2>
      <p>
        Email: <a href="mailto:hello@lukaskaffer.com">hello@lukaskaffer.com</a>
        <br />
        Contact form: <Link href="/contact">lukaskaffer.com/en/contact</Link>
      </p>

      <h2>Business purpose</h2>
      <p>
        Design and development of websites, apps and software, as well as support and
        hosting; advertising.
      </p>

      <h2>Trade licenses</h2>
      <p>
        Services in automatic data processing and information technology
        (Dienstleistungen in der automatischen Datenverarbeitung und
        Informationstechnik, GISA number 40194523)
        <br />
        Advertising graphic designer (Werbegrafik-Designer, GISA number 40194530)
        <br />
        Advertising agency (Werbeagentur, GISA number 40194547)
        <br />
        Announcement services (Ankündigungsunternehmen, GISA number 40194554)
      </p>
      <p>
        Trade authority: District Administrative Authority (Bezirkshauptmannschaft)
        Bruck an der Leitha
        <br />
        Chamber membership: Economic Chamber of Lower Austria (Wirtschaftskammer
        Niederösterreich), professional groups (Fachgruppen) for management
        consulting, accounting and information technology, and for advertising and
        market communication
        <br />
        Entry in the chamber’s company directory (WKO Firmen A–Z):{" "}
        <a href={WKO_PROFILE_URL}>firmen.wko.at/lukas-kaffer</a>
        <br />
        Professional law: Austrian Trade Act 1994 (Gewerbeordnung), available at{" "}
        <a href="https://www.ris.bka.gv.at">www.ris.bka.gv.at</a>
      </p>

      <h2>Disclosure under § 25 of the Austrian Media Act</h2>
      <p>
        Media owner and publisher: Lukas Alexander Kaffer, Schwechat
        <br />
        Business purpose: see above
      </p>
      <p>
        Editorial direction: lukaskaffer.com presents the services, the way of working
        and selected projects of Lukas Kaffer and serves as a point of contact for
        professional and project-related inquiries.
      </p>

      <h2>Liability for content and external links</h2>
      <p>
        The content of this website is created and updated with care. No guarantee
        can be given for the timeliness, accuracy and completeness of external
        information. The operators of linked websites are solely responsible for
        their content.
      </p>
    </>
  ),
};

export const privacy: LegalPageCopy = {
  metaTitle: "Privacy · Lukas Kaffer",
  metaDescription: "Privacy policy for lukaskaffer.com.",
  eyebrow: "Privacy",
  title: "Privacy policy",
  intro:
    "This policy describes which personal data is processed when you use lukaskaffer.com.",
  updated: "October 1, 2026",
  body: (
    <>
      {bindingNote}

      <h2>Controller</h2>
      <p>
        Lukas Alexander Kaffer (sole proprietorship)
        <br />
        Klederinger Straße 15/2/27
        <br />
        2320 Schwechat
        <br />
        Austria
      </p>
      <p>
        Privacy contact:{" "}
        <a href="mailto:hello@lukaskaffer.com">hello@lukaskaffer.com</a>
      </p>

      <h2>Accessing and serving the website</h2>
      <p>
        When you access the website, technically necessary access data is processed.
        This may include in particular your IP address, the time of access, the
        requested URL, the referrer and information about your browser, device and
        operating system. This processing serves the secure, stable and technically
        error-free delivery of the website.
      </p>
      <p>
        The website is hosted on Vercel and delivered through Cloudflare. Cloudflare
        also handles the email forwarding for the domain. The technical data named
        above may therefore be processed by Vercel Inc. and Cloudflare, Inc.
      </p>

      <h2>Contact form and email</h2>
      <p>
        If you use the contact form, your name, email address, message and the
        technically necessary transmission data are processed in order to deliver
        and answer your inquiry. The form data is sent directly from your browser to
        Web3Forms and then forwarded as an email.
      </p>
      <p>
        Web3Forms is operated by Web3Creative, based in Kerala, India, and according
        to the provider uses servers in the US-East region. According to the
        provider’s current information, form submissions are not stored permanently;
        server logs may contain personal technical data and are deleted regularly,
        currently after two months at the latest. Please do not send confidential or
        sensitive information through the form unless it is necessary for your
        inquiry.
      </p>
      <p>
        You can also write directly to{" "}
        <a href="mailto:hello@lukaskaffer.com">hello@lukaskaffer.com</a>. In that
        case, the data you include in your message is processed.
      </p>

      <h2>Business outreach</h2>
      <p>
        To initiate projects, I may contact companies individually and selectively.
        For this I use only business contact details the company itself has
        published, for example on its own website: company name, contact person,
        business email address and publicly available information about the company.
        The legal basis is my legitimate interest in initiating business
        relationships under Art. 6(1)(f) GDPR. You can object to this processing at
        any time, informally, at{" "}
        <a href="mailto:hello@lukaskaffer.com">hello@lukaskaffer.com</a>; your data
        will then be deleted, and only an entry on a suppression list is kept to make
        sure you are not contacted again.
      </p>

      <h2>Clients and projects</h2>
      <p>
        For quotes, contracts, project delivery, invoices and ongoing support, I
        process the contact, contract and payment data this requires under Art.
        6(1)(b) GDPR. Records subject to retention obligations under tax and
        commercial law are kept for seven years under Art. 6(1)(c) GDPR in
        conjunction with § 132 of the Austrian Federal Fiscal Code (BAO).
      </p>

      <h2>Legal bases</h2>
      <p>
        Technical access data is processed on the basis of Art. 6(1)(f) GDPR. The
        legitimate interest lies in the secure and reliable operation of the website.
        Contact inquiries are processed, depending on their content, to take steps
        prior to entering into a contract under Art. 6(1)(b) GDPR or on the basis of
        the legitimate interest in handling incoming inquiries under Art. 6(1)(f)
        GDPR.
      </p>

      <h2>Recipients and processing in third countries</h2>
      <p>
        Vercel, Cloudflare and Web3Forms are used for hosting, delivery, email
        forwarding and form transmission. This may involve processing outside the
        European Union or the European Economic Area. Such processing takes place
        in accordance with the applicable data protection requirements and the
        safeguards available with the respective provider.
      </p>
      <ul>
        <li>
          <a href="https://vercel.com/legal/privacy-policy">Vercel’s privacy policy</a>
        </li>
        <li>
          <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare’s privacy policy</a>
        </li>
        <li>
          <a href="https://docs.web3forms.com/getting-started/faq">Web3Forms’ privacy information</a>
        </li>
      </ul>

      <h2>Cookies and local storage</h2>
      <p>
        lukaskaffer.com itself sets no marketing or analytics cookies and uses no
        third-party analytics. Technically necessary security mechanisms of the
        infrastructure may in individual cases use comparable technical identifiers.
      </p>

      <h2>External links</h2>
      <p>
        The website links to external sites, including Vienna Event Radar and the
        Apple App Store. Only once you open such a link do the privacy terms of the
        respective external provider apply in addition.
      </p>

      <h2>Retention period</h2>
      <p>
        Personal data is stored only as long as necessary for the purposes named
        above, for handling an inquiry or for statutory retention obligations.
        Inquiry data that is no longer needed is deleted unless legal obligations or
        legitimate reasons require further storage.
      </p>

      <h2>Your rights</h2>
      <p>
        Under the GDPR, data subjects have in particular the rights to access,
        rectification, erasure, restriction of processing, data portability and
        objection. Requests can be sent to{" "}
        <a href="mailto:hello@lukaskaffer.com">hello@lukaskaffer.com</a>.
      </p>
      <p>
        You also have the right to lodge a complaint with a data protection
        supervisory authority, in particular the Austrian Data Protection Authority,
        Barichgasse 40–42, 1030 Vienna, Austria,{" "}
        <a href="https://www.dsb.gv.at">www.dsb.gv.at</a>.
      </p>
    </>
  ),
};
