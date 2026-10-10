import type { routing } from "./i18n/routing";

// Narrows next-intl's Locale type to the two languages of this site.
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
  }
}
