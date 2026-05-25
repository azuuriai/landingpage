import { createDetailMetadata, DetailPage } from "../detail-page";

export const metadata = createDetailMetadata("contact");

export default function ContactPage() {
  return <DetailPage slug="contact" />;
}
