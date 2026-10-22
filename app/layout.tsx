import type { Metadata, Viewport } from "next";
import { siteUrl } from "@/lib/site";
import { fontVariables } from "./fonts";

/*
 * Root layout is intentionally bare: the website's styles and chrome live
 * in app/(site)/layout.tsx so the embedded Sanity Studio at /cms loads
 * without them.
 */

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "King Spa Chicago", template: "%s – King Spa Chicago" },
  applicationName: "King Spa Chicago",
  formatDetection: { telephone: false, address: false, email: false },
  icons: {
    icon: [
      { url: "/images/brand/site-icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/brand/site-icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/images/brand/site-icon-180.png",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#57050d" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={fontVariables} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
