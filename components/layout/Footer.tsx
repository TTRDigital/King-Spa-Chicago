import Image from "next/image";
import Link from "next/link";
import type { SiteSettings } from "@/lib/data/site";
import { FooterHoursToggle } from "./FooterHoursToggle";

const isExternal = (href: string) => /^(https?:|tel:|mailto:)/.test(href);

function A({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  if (isExternal(href)) return <a href={href} className={className} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}>{children}</a>;
  // No prefetch: some footer links lead to pages the old site never had (kept as they were), which would log 404s.
  return <Link href={href} className={className} prefetch={false}>{children}</Link>;
}

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  facebook: <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h4.6v-7H9.2v-2.8h2.4V10c0-2.4 1.5-3.7 3.6-3.7 1 0 2 .1 2.3.2V9h-1.6c-1.2 0-1.4.6-1.4 1.4v1.8h2.8l-.4 2.8h-2.4v7H17a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z" />,
  instagram: <path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM21.9 8c-.1-1.5-.4-2.8-1.5-3.9S17.9 2.7 16.4 2.6c-1.5-.1-6.1-.1-7.6 0-1.5.1-2.8.4-3.9 1.5S3.5 6.5 3.4 8c-.1 1.5-.1 6.1 0 7.6.1 1.5.4 2.8 1.5 3.9s2.4 1.4 3.9 1.5c1.5.1 6.1.1 7.6 0 1.5-.1 2.8-.4 3.9-1.5s1.4-2.4 1.5-3.9c.1-1.5.1-6.1 0-7.6zm-2 9.2a3 3 0 0 1-1.7 1.7c-1.2.5-4 .4-5.3.4s-4.1.1-5.3-.4a3 3 0 0 1-1.7-1.7c-.5-1.2-.4-4-.4-5.3s-.1-4.1.4-5.3a3 3 0 0 1 1.7-1.7c1.2-.5 4-.4 5.3-.4s4.1-.1 5.3.4a3 3 0 0 1 1.7 1.7c.5 1.2.4 4 .4 5.3s.1 4.1-.4 5.3z" />,
  youtube: <path d="M22.5 7.2a2.8 2.8 0 0 0-2-2C18.8 4.8 12 4.8 12 4.8s-6.8 0-8.5.4a2.8 2.8 0 0 0-2 2C1.1 8.9 1.1 12 1.1 12s0 3.1.4 4.8a2.8 2.8 0 0 0 2 2c1.7.4 8.5.4 8.5.4s6.8 0 8.5-.4a2.8 2.8 0 0 0 2-2c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM9.9 15.1V8.9l5.6 3.1z" />,
};
const iconFor = (label: string) => SOCIAL_ICONS[Object.keys(SOCIAL_ICONS).find((k) => label.toLowerCase().includes(k)) ?? "facebook"];

/**
 * Maroon footer as on the old site (Elementor section, boxed 1408px). Column headings render in the bold sans the old site fell back to.
 * Like the old footer section it is layered above the sticky header (z-index 999 against 99), so it slides over the header when scrolled under it.
 */
export function Footer({ settings }: { settings: SiteSettings }) {
  const f = settings.footer;
  const heading = "font-[Arial,Helvetica,sans-serif] text-[24px] leading-[24px] font-bold text-white";
  const item = "inline-block font-mulish text-[16px] leading-[24px] font-semibold text-white";
  return (
    <footer className="relative z-[999] bg-maroon py-[62px]">
      <div className="mx-auto max-w-[1408px]">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
          <Link href="/" className="block w-full md:w-[21.64%]" aria-label="King Spa & Sauna home">
            <Image src={settings.logo.src} alt={settings.logo.alt} width={settings.logo.width} height={settings.logo.height} sizes="(max-width: 767px) 100vw, 22vw" loading="lazy" className="h-auto w-full" />
          </Link>
          <ul className="mt-[64px] flex gap-[18px] md:mt-[10px] md:mr-[calc(9px+0.75%)]">
            {f.social.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener" aria-label={s.label} className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-maroon transition-all duration-300 hover:bg-maroon hover:text-white hover:opacity-90">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">{iconFor(s.label)}</svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-[41px] grid grid-cols-1 gap-y-[20px] md:mt-[30px] md:grid-cols-4 md:gap-y-0">
          {f.columns.map((col) => (
            <div key={col.heading} className="px-[10px]">
              <h4 className={heading}>
                <A href={col.headingHref}>{col.heading}</A>
              </h4>
              <ul className="mt-[10px] space-y-[10px]">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <A href={l.href} className={item}>{l.label}</A>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="px-[10px]">
            <FooterHoursToggle label={f.openingHoursToggle} text={f.hours} />
            <h4 className={`hidden md:block ${heading}`}>
              <A href={f.hoursHeadingHref}>{f.hoursHeading}</A>
            </h4>
            <p className="hidden items-center font-mulish text-[16px] leading-[24px] font-semibold text-white md:mt-[6px] md:flex">
              <span aria-hidden="true" className="inline-flex w-[18px] shrink-0">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              </span>
              <span>{f.hours}</span>
            </p>
            <h4 className={`mt-[20px] md:mt-[18px] ${heading}`}>
              <A href={f.addressHeadingHref}>{f.addressHeading}</A>
            </h4>
            <p className="mt-[5px] md:mt-[8px]"><span className={item}>{f.address}</span></p>
          </div>
        </div>

        <div className="mt-[30px] border-t-2 border-white/30 px-[10px] pt-[10px] pb-[24px] text-center font-mulish text-[13px] leading-[19.5px] text-white md:mt-[30px]">
          <p className="whitespace-pre-line">{f.copyright}</p>
          <p className="mt-[68px]">
            {f.creditLabel}{" "}
            <a href={f.credit.href} target="_blank" rel="noopener" className="footer-credit text-[#dbdbdb]">
              {f.credit.label}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
