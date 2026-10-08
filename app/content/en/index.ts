import type { Content } from "../types";
import { caseStudyCopy } from "./case-studies";
import { imprint, privacy } from "./legal";
import { detailPages } from "./pages";
import {
  caseStudies,
  indeedUniqueStudio,
  iosApp,
  operationsApp,
  projects,
  showcaseEntries,
} from "./projects";
import { launch, services } from "./services";
import { contactForm, contactSection, home, site, ui } from "./site";

export const en: Content = {
  site,
  ui,
  home,
  contactSection,
  contactForm,
  detailPages,
  projects,
  iosApp,
  operationsApp,
  indeedUniqueStudio,
  caseStudies,
  showcaseEntries,
  services,
  launch,
  caseStudyCopy,
  legal: { impressum: imprint, datenschutz: privacy },
};
