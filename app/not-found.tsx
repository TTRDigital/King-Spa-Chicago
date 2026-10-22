import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";
import { NotFoundView } from "@/components/pages/NotFound";

export const metadata = { title: { absolute: "Page not found – King Spa Chicago" }, robots: { index: false } };

export default function NotFound() {
  return (
    <SiteShell>
      <NotFoundView />
    </SiteShell>
  );
}
