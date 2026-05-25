import { createDetailMetadata, DetailPage } from "../detail-page";

export const metadata = createDetailMetadata("faq");

export default function FaqPage() {
  return <DetailPage slug="faq" />;
}
