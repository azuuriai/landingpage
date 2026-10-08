import type { Content } from "../types";
import { caseStudyCopy } from "./case-studies";
import { datenschutz, impressum } from "./legal";
import { detailPages } from "./pages";
import {
  caseStudies,
  ownerCms,
  iosApp,
  operationsApp,
  projects,
  showcaseEntries,
} from "./projects";
import { launch, services } from "./services";
import { contactForm, contactSection, home, site, ui } from "./site";

export const de: Content = {
  site,
  ui,
  home,
  contactSection,
  contactForm,
  detailPages,
  projects,
  iosApp,
  operationsApp,
  ownerCms,
  caseStudies,
  showcaseEntries,
  services,
  launch,
  caseStudyCopy,
  legal: { impressum, datenschutz },
};
