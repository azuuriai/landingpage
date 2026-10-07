import { notFound } from "next/navigation";

// Catches every path under a locale that no page matches, so the 404 renders
// in the visitor's language (not-found.tsx next to the layout).
export default function CatchAllPage() {
  notFound();
}
