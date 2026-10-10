// Plain constants that client components may import; everything that pulls
// in the content modules lives in app/seo.ts instead.
export const SITE_URL = "https://lukaskaffer.com";
export const SITE_NAME = "Lukas Kaffer";
export const CONTACT_EMAIL = "hello@lukaskaffer.com";
// The business's entry in the Economic Chamber's directory (WKO Firmen A–Z).
export const WKO_PROFILE_URL = "https://firmen.wko.at/lukas-kaffer/nieder%C3%B6sterreich/";
// The Upwork profile, linked from the FAQ and the structured data.
export const UPWORK_PROFILE_URL = "https://www.upwork.com/freelancers/lukaskaffer";

// Fills the "{name}" placeholder of a UI string with a project name.
export function withName(template: string, name: string) {
  return template.replace("{name}", name);
}
