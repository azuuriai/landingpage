import type { Content } from "../types";
import { assistant } from "./assistant";
import { caseStudyCopy } from "./case-studies";
import { datenschutz, impressum } from "./legal";
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
import { launchOffer } from "./launch-offer";
import { fixedPrices, launch, services } from "./services";
import { contactForm, contactSection, home, site, ui } from "./site";
import { studios } from "./studios";

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
  missionControl,
  caseStudies,
  showcaseEntries,
  services,
  launch,
  studios,
  launchOffer,
  assistant,
  fixedPrices,
  caseStudyCopy,
  legal: { impressum, datenschutz },
};
