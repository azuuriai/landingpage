import { createDetailMetadata, DetailPage } from "@/app/detail-page";

export const metadata = createDetailMetadata("services");

export default function ServicesPage() {
  return <DetailPage slug="services" />;
}
