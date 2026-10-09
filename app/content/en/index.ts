import type { Content } from "../types";
import { caseStudyCopy } from "./case-studies";
import { imprint, privacy } from "./legal";
import { detailPages } from "./pages";
import {
  caseStudies,
  missionControl,
  ownerCms,
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
  ownerCms,
  missionControl,
  caseStudies,
  showcaseEntries,
  services,
  launch,
  caseStudyCopy,
  legal: { impressum: imprint, datenschutz: privacy },
};
