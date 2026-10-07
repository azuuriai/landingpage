import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware replacements for next/link and next/navigation: a Link to
// "/impressum" renders as /impressum in German and /en/imprint in English,
// and usePathname() returns the internal pathname without the prefix.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
