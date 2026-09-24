import { createDetailMetadata, DetailPage } from "@/app/detail-page";

export const metadata = createDetailMetadata("about");

export default function AboutPage() {
  return <DetailPage slug="about" />;
}
