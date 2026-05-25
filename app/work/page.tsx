import { createDetailMetadata, DetailPage } from "../detail-page";

export const metadata = createDetailMetadata("work");

export default function WorkPage() {
  return <DetailPage slug="work" />;
}
