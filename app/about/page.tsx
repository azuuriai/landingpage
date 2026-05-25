import { createDetailMetadata, DetailPage } from "../detail-page";

export const metadata = createDetailMetadata("about");

export default function AboutPage() {
  return <DetailPage slug="about" />;
}
