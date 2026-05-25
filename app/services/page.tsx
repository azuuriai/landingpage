import { createDetailMetadata, DetailPage } from "../detail-page";

export const metadata = createDetailMetadata("services");

export default function ServicesPage() {
  return <DetailPage slug="services" />;
}
