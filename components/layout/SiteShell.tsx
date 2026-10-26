import type { ReactNode } from "react";
import { getSettings } from "@/lib/content";
import { businessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PromoPopup } from "@/components/layout/PromoPopup";
import { ChatWidget } from "@/components/layout/ChatWidget";
import { Analytics } from "@/components/layout/Analytics";
import { AttributionCapture } from "@/components/layout/AttributionCapture";

/** Header, footer and site-wide behaviors. Used by the site layout and the 404 page. */
export async function SiteShell({ children }: { children: ReactNode }) {
  const settings = await getSettings();
  return (
    <>
      <JsonLd data={businessSchema(settings)} />
      <a href="#content" className="sr-only z-[10000] bg-white px-5 py-3 text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <Header menu={settings.header.menu} button={settings.header.button} logo={settings.logo} />
      <main id="content" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <Footer settings={settings} />
      <PromoPopup popup={settings.promoPopup} />
      <ChatWidget />
      <AttributionCapture />
      <Analytics />
    </>
  );
}
