// Plain constants that client components may import; everything that pulls
// in the content modules lives in app/seo.ts instead.
export const SITE_URL = "https://lukaskaffer.com";
export const SITE_NAME = "Lukas Kaffer";
export const CONTACT_EMAIL = "hello@lukaskaffer.com";

// Fills the "{name}" placeholder of a UI string with a project name.
export function withName(template: string, name: string) {
  return template.replace("{name}", name);
}
