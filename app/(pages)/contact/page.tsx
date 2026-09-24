import { createDetailMetadata, DetailPage } from "@/app/detail-page";

export const metadata = createDetailMetadata("contact");

export default function ContactPage() {
  return <DetailPage slug="contact" />;
}
