import { notFound } from "next/navigation";

// Catches every path under a locale that no page matches, so the 404 renders
// in the visitor's language inside the shared frame (not-found.tsx next to
// the (pages) layout).
export default function CatchAllPage() {
  notFound();
}
