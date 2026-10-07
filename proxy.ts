import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Maps the public URLs onto the [locale] segment: /services renders as
// /de/services, /en/services stays as it is, /de/services redirects to
// /services.
export default createMiddleware(routing);

export const config = {
  // Pages only. Files with an extension, Next's internals and the generated
  // metadata routes are served as they are.
  matcher: ["/((?!api|_next|_vercel|opengraph-image|.*\\..*).*)"],
};
