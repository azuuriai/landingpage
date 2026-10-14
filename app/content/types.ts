import type { ReactNode } from "react";
import type { Recording } from "@/app/media";
import type { AppPathname } from "@/i18n/routing";

// Shapes of everything that is written in a language. app/content/de and
// app/content/en each fill one Content object. Structure that is the same in
// both languages (paths, recordings, dates, image files) lives in
// app/projects-data.ts, app/services-data.ts and app/detail-pages-data.ts and
// is spread into these objects.

export type Fact = { label: string; value: string };
export type Still = { src: string; alt: string; width: number; height: number };
export type TitledItem = { title: string; text: string };
export type Figure = { value: string; label: string };

// ---------- Site-wide ----------

export type SiteCopy = {
  title: string;
  description: string;
  ogDescription: string;
  ogImageAlt: string;
  keywords: string[];
  jobTitle: string;
  knowsAbout: string[];
  // The generated Open Graph image.
  og: { headline: string; location: string; stack: string };
};

// Strings with "{name}" are filled with a project name (see withName()).
export type UiCopy = {
  skipToContent: string;
  logoLabel: string;
  headerNav: string;
  homeNav: string;
  contact: string;
  sendIdea: string;
  backHome: string;
  backShowcase: string;
  learnMore: string;
  askAnotherQuestion: string;
  imprint: string;
  privacy: string;
  copyright: string;
  copyrightHome: string;
  updatedLabel: string;
  showcaseLabel: string;
  caseStudyLink: string;
  siteTour: string;
  appRecording: string;
  siteRecording: string;
  phoneRecording: string;
  serviceIndexLabel: string;
  languageSwitch: string;
  languageNames: Record<"de" | "en", string>;
  notFound: { title: string; text: string };
};

export type HomeCopy = {
  descriptor: string;
  headline: string;
  // Under the headline: the portrait, the name and one line on who the
  // visitor will be working with. Links to the About page.
  byline: { name: string; text: string };
};

export type ContactSectionCopy = { title: string; body: string };

export type ContactFormCopy = {
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
  sending: string;
  note: string;
  successTitle: string;
  successBody: string;
  errorBody: string;
  fallbackPrefix: string;
  // Subject line of the email; the sender's name is appended.
  subject: string;
  // Noted in the email, so a reply can be written in the visitor's language.
  languageLabel: string;
  languageName: string;
  // /contact?thema=studio|launch|assistent, linked from the offer pages:
  // the same form asking questions that fit the offer. Each overrides the
  // fields above.
  studio: ContactTopicCopy;
  launch: ContactTopicCopy;
  assistant: ContactTopicCopy;
};

export type ContactTopicCopy = {
  message: string;
  messageHint: string;
  messagePlaceholder: string;
  submit: string;
  subject: string;
  // Noted in the email, so the request is recognised as one for this offer.
  topicLine: string;
};

// ---------- Navigation pages ----------

export type DetailSlug = "services" | "work" | "about" | "faq" | "contact";
export type DetailPath = `/${DetailSlug}`;
export type DetailSection = { label: string; title: string; body: string };
// `link`: an optional outbound link under the answer, e.g. the Upwork profile.
export type DetailFaq = {
  question: string;
  answer: string;
  link?: { label: string; href: string };
};

export type DetailPageData = {
  slug: DetailSlug;
  path: DetailPath;
  navLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  chips: string[];
  lastModified: Date;
  image?: Still;
  sections: DetailSection[];
  faq?: DetailFaq[];
  // Heading of the contact band at the end; the contact page has none.
  closing?: string;
};

// ---------- Projects and case studies ----------

export type ProjectSlug = "indeed-unique" | "vienna-event-radar";
export type CaseStudySlug =
  | ProjectSlug
  | "wien-event-radar-ios"
  | "operations-app"
  | "betreiber-cms"
  | "mission-control";
export type CaseStudyPath = `/work/${CaseStudySlug}`;

// `internal` links stay on this site; all others open the live product.
export type ProjectLink =
  | { label: string; href: string; internal?: false }
  | { label: string; href: AppPathname; internal: true };

export type CaseStudyData = {
  slug: CaseStudySlug;
  path: CaseStudyPath;
  name: string;
  summary: string;
  eyebrow: string;
  title: string;
  description: string;
  facts: Fact[];
  links: ProjectLink[];
  metaTitle: string;
  metaDescription: string;
  lastModified: Date;
  // Accessible label of the recording in the page opening.
  tourLabel: string;
  // Heading of the contact band at the end.
  closing: string;
};

// The two web projects also drive the homepage showcase (desktop + phone).
export type ProjectData = CaseStudyData & {
  slug: ProjectSlug;
  desktop: Recording;
  phone: Recording;
};

export type ShowcaseId =
  | "indeed-unique"
  | "vienna-event-radar-web"
  | "vienna-event-radar-ios"
  | "operations-app"
  | "betreiber-cms"
  | "mission-control";

// `screen`: a desktop app shown full screen, without a browser bar.
export type ShowcaseMedia =
  | { kind: "web"; domain: string; desktop: Recording; phone?: Recording }
  | { kind: "app"; phone: Recording }
  | { kind: "screen"; desktop: Recording };

// Entries on the Showcase page. Private tools have no `live` link.
export type ShowcaseEntry = {
  id: ShowcaseId;
  name: string;
  summary: string;
  facts: Fact[];
  href: CaseStudyPath;
  live?: { label: string; href: string };
  media: ShowcaseMedia;
};

// ---------- Services ----------

export type ServiceId = "websites" | "web-apps" | "ios-apps";

export type ServiceMedia =
  // thumb: the hero thumbnail. With `zoomFocus` it is a close-up of that
  // point (CSS position), otherwise the image is shown as it is.
  | { kind: "web"; domain: string; still: Still; thumb: { src: string; zoomFocus?: string } }
  | { kind: "app"; stills: [Still, Still] };

export type Service = {
  id: ServiceId;
  name: string;
  teaser: string;
  title: string;
  body: string;
  includes: string[];
  // The projects that show this form working, first one leading.
  proofs: { label: string; href: CaseStudyPath }[];
  media: ServiceMedia;
};

export type LaunchStep = { title: string; body: string };
export type LaunchCopy = { title: string; intro: string; steps: LaunchStep[] };

// ---------- Studios (/studios) ----------

// One of the two models on the studio offer page. Also the shape of the
// prices on the personal preview pages (app/fuer-data.ts).
export type StudioPlan = {
  id: "individuell" | "aktuell";
  // The actual choice, shown as the card's head line.
  choice: string;
  name: string;
  price: string;
  priceNote: string;
  // A small second price line (term and start fee).
  priceExtra?: string;
  tagline: string;
  includes: string[];
};

// The studio offer page. Everything here must stay provable: no
// testimonials, usage or booking figures, rankings or guarantees. Plain
// words for studio owners, no trade terms (no CMS, launch, editorial), no
// fine print. The structure (path, recordings) is in app/studios-data.ts.
export type StudiosCopy = {
  page: {
    eyebrow: string;
    title: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    // Name in the breadcrumb trail (Lukas Kaffer › Leistungen › …).
    breadcrumb: string;
  };
  // The page's only two buttons (opening and closing band) and the quiet
  // link to the models.
  cta: string;
  modelsLink: string;
  // "Kennst du das?" and the answer: the everyday problem as a small line,
  // the answer as title and one sentence.
  fit: { title: string; intro: string; items: { problem: string; title: string; text: string }[] };
  // Two recordings from a studio website, shown as examples.
  examples: {
    title: string;
    intro: string;
    caseStudyLabel: string;
    tiles: { label: string; title: string; text: string }[];
  };
  offer: { title: string; question: string };
  plans: StudioPlan[];
  stepsTitle: string;
  steps: LaunchStep[];
  closing: string;
  // schema.org Service on the page.
  service: { name: string; type: string };
};

// ---------- Fixed-price offers (/launch, /assistent, block on /services) ----------

// One priced card on an offer page: the same shape as a StudioPlan, with an
// id that matches the price table in app/offers-data.ts. No fine print: a
// limit (hours included, what costs extra) is a line in `includes`.
export type PriceCard = {
  id: string;
  // The small line above the name: the step, stage or role of this card.
  choice: string;
  name: string;
  price: string;
  priceNote: string;
  priceExtra?: string;
  tagline: string;
  includes: string[];
};

// Shared shape of the two offer pages. Everything must stay provable: no
// customer stories, no figures without a source, no guarantees. Plain words
// for founders and business owners, no trade terms.
export type OfferPageCopy = {
  page: {
    eyebrow: string;
    title: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    breadcrumb: string;
  };
  // The page's only two buttons (opening and closing band) and the quiet
  // link to the offers.
  cta: string;
  offersLink: string;
  // The everyday problem as a small line, the answer as title and sentence.
  fit: { title: string; intro: string; items: { problem: string; title: string; text: string }[] };
  offer: { title: string; question: string };
  // The main cards, side by side.
  plans: PriceCard[];
  // The ongoing offer below them (Baubegleitung, Betreuung), full width.
  ongoing: PriceCard;
  stepsTitle: string;
  steps: LaunchStep[];
  // What backs the offer: Lukas' own products, linked to their case studies.
  proof: { title: string; body: string; trust?: string; links: { label: string; path: AppPathname }[] };
  closing: string;
  // schema.org Service on the page.
  service: { name: string; type: string };
};

export type LaunchOfferCopy = OfferPageCopy;

// The assistant page adds the conditions as a visible list.
export type AssistantCopy = OfferPageCopy & {
  terms: { title: string; items: TitledItem[] };
  // Alt text of the Telegram phone still in the opening.
  phoneAlt: string;
  loopLabel: string;
};

// The block on the Leistungen page: three cards, each a link to its page.
export type FixedPricesCopy = {
  title: string;
  intro: string;
  cards: {
    path: AppPathname;
    name: string;
    price: string;
    priceNote: string;
    text: string;
    link: string;
  }[];
};

// ---------- Case study bodies ----------

export type Clip = { label: string; title: string; text: string };
export type ScreenCopy<Image extends string> = {
  image: Image;
  alt: string;
  title: string;
  text: string;
};

export type IndeedUniqueCopy = {
  tour: { title: string; intro: string; entry: Clip; news: Clip; archive: Clip; booking: Clip };
  cms: { title: string; figures: Figure[]; tools: TitledItem[] };
  booking: { title: string; intro: string; items: TitledItem[] };
  mobile: { title: string; text: string; label: string };
  operations: { title: string; intro: string; items: TitledItem[] };
};

export type ViennaEventRadarImage = "dashboard" | "event-detail" | "proposal" | "radar-assistant";
export type ViennaEventRadarCopy = {
  features: { title: string; intro: string; items: ScreenCopy<ViennaEventRadarImage>[] };
  platform: { title: string; intro: string; items: TitledItem[] };
  backstage: { title: string; intro: string; items: TitledItem[]; stack: string };
  ios: { title: string; text: string; button: string; discoverAlt: string; mapAlt: string };
};

export type WienEventRadarIosImage =
  | "entdecken"
  | "fuer-dich"
  | "suche"
  | "details"
  | "aktionen"
  | "karte";
export type WienEventRadarIosCopy = {
  tabs: { title: string; intro: string; items: ScreenCopy<WienEventRadarIosImage>[] };
  system: { title: string; text: string; items: TitledItem[]; liveActivityAlt: string };
  foundation: { title: string; intro: string; items: TitledItem[]; stack: string };
};

export type OperationsAppImage = "monitor" | "social-editor" | "top-picks";
export type OperationsAppStory = "story-cover" | "story-event" | "story-closing";
export type OperationsAppCopy = {
  areas: { title: string; intro: string; items: ScreenCopy<OperationsAppImage>[] };
  studio: { title: string; items: TitledItem[]; stories: { image: OperationsAppStory; alt: string }[] };
  foundation: { title: string; figures: Figure[]; items: TitledItem[]; stack: string };
};

// The owner-facing CMS on Sanity (in use at Indeed Unique): six screens, the
// guardrails, the machinery between CMS and website.
export type OwnerCmsImage =
  | "start"
  | "bausteine"
  | "seiten-picker"
  | "zuschnitt"
  | "kursfreie-tage"
  | "hilfe";
export type OwnerCmsCopy = {
  screens: { title: string; intro: string; items: ScreenCopy<OwnerCmsImage>[] };
  guards: { title: string; items: TitledItem[] };
  foundation: { title: string; figures: Figure[]; items: TitledItem[]; stack: string };
};

// Mission Control, a personal tool shown in its demo mode (invented data):
// the showreel, four screens, what agents may and may not do, the machinery.
export type MissionControlImage = "frage" | "bericht" | "termine" | "gewebe";
// mobile: the Telegram bot, a still of the showreel's phone scene.
export type MissionControlCopy = {
  // The button on the showreel's title.
  playLabel: string;
  screens: { title: string; intro: string; items: ScreenCopy<MissionControlImage>[] };
  mobile: { title: string; items: TitledItem[]; alt: string };
  guards: { title: string; items: TitledItem[] };
  foundation: { title: string; figures: Figure[]; items: TitledItem[]; stack: string };
};

export type CaseStudyCopy = {
  indeedUnique: IndeedUniqueCopy;
  ownerCms: OwnerCmsCopy;
  missionControl: MissionControlCopy;
  viennaEventRadar: ViennaEventRadarCopy;
  wienEventRadarIos: WienEventRadarIosCopy;
  operationsApp: OperationsAppCopy;
};

// ---------- Legal ----------

export type LegalPageCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  updated?: string;
  body: ReactNode;
};

// ---------- Everything ----------

export type Content = {
  site: SiteCopy;
  ui: UiCopy;
  home: HomeCopy;
  contactSection: ContactSectionCopy;
  contactForm: ContactFormCopy;
  detailPages: DetailPageData[];
  projects: Record<ProjectSlug, ProjectData>;
  iosApp: CaseStudyData;
  operationsApp: CaseStudyData;
  ownerCms: CaseStudyData;
  missionControl: CaseStudyData;
  caseStudies: CaseStudyData[];
  showcaseEntries: ShowcaseEntry[];
  services: Service[];
  launch: LaunchCopy;
  studios: StudiosCopy;
  launchOffer: LaunchOfferCopy;
  assistant: AssistantCopy;
  fixedPrices: FixedPricesCopy;
  caseStudyCopy: CaseStudyCopy;
  legal: { impressum: LegalPageCopy; datenschutz: LegalPageCopy };
};
