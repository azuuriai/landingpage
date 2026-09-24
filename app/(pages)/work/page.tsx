import { createDetailMetadata, DetailPage } from "@/app/detail-page";

export const metadata = createDetailMetadata("work");

export default function WorkPage() {
  return <DetailPage slug="work" />;
}
