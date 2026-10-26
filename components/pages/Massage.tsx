import "./massage.css";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { massagePage } from "@/lib/data/pages/massage";
import { images } from "@/lib/data/images";
import { getSettings } from "@/lib/content";
import { Inline } from "@/components/ui/RichText";
import { Reviews } from "@/components/ui/Reviews";
import { TreatmentBanner } from "@/components/sections/TreatmentBanner";

/* The old page's card icons, drawn inline (the "icon" field of each card picks one). */
const ICONS: Record<string, ReactNode> = {
  swedish: (
    <>
      <path d="M32 8c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24S45.255 8 32 8zm0 42c-9.941 0-18-8.059-18-18s8.059-18 18-18 18 8.059 18 18-8.059 18-18 18z" />
      <circle cx="32" cy="32" r="10" />
      <path d="M32 18c-1.657 0-3 1.343-3 3v8h6v-8c0-1.657-1.343-3-3-3zM21 32c0 1.657 1.343 3 3 3h8v-6h-8c-1.657 0-3 1.343-3 3zM32 46c1.657 0 3-1.343 3-3v-8h-6v8c0 1.657 1.343 3 3 3zM43 32c0-1.657-1.343-3-3-3h-8v6h8c1.657 0 3-1.343 3-3z" />
    </>
  ),
  acupressure: (
    <>
      <circle cx="32" cy="12" r="5" />
      <circle cx="14" cy="24" r="5" />
      <circle cx="50" cy="24" r="5" />
      <circle cx="14" cy="40" r="5" />
      <circle cx="50" cy="40" r="5" />
      <circle cx="32" cy="52" r="5" />
      <circle cx="32" cy="32" r="7" />
      <line
        stroke="currentColor"
        strokeWidth="2"
        x1="32"
        x2="32"
        y1="17"
        y2="25"
      />
      <line
        stroke="currentColor"
        strokeWidth="2"
        x1="19"
        x2="25"
        y1="24"
        y2="28"
      />
      <line
        stroke="currentColor"
        strokeWidth="2"
        x1="45"
        x2="39"
        y1="24"
        y2="28"
      />
      <line
        stroke="currentColor"
        strokeWidth="2"
        x1="19"
        x2="25"
        y1="40"
        y2="36"
      />
      <line
        stroke="currentColor"
        strokeWidth="2"
        x1="45"
        x2="39"
        y1="40"
        y2="36"
      />
      <line
        stroke="currentColor"
        strokeWidth="2"
        x1="32"
        x2="32"
        y1="39"
        y2="47"
      />
    </>
  ),
  cbd: (
    <>
      <path d="M44 26H20c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V30c0-2.2-1.8-4-4-4z" />
      <path d="M26 12h12v10H26z" />
      <path d="M32 4c-3 0-5 2-5 5v3h10V9c0-3-2-5-5-5z" />
      <path
        d="M32 32c0 0-5 6-5 9 0 3 2 5 5 5s5-2 5-5c0-3-5-9-5-9z"
        fill="var(--ks-burgundy)"
      />
    </>
  ),
  royal: (
    <>
      <path d="M32 4l-4 8-8 2 6 6-1 9 7-4 7 4-1-9 6-6-8-2z" />
      <path d="M20 26v6c0 6.627 5.373 12 12 12s12-5.373 12-12v-6H20z" />
      <rect height="4" rx="2" width="28" x="18" y="44" />
      <rect height="4" rx="2" width="32" x="16" y="50" />
      <rect height="4" rx="2" width="36" x="14" y="56" />
    </>
  ),
  foot: (
    <>
      <path d="M32 8c-8 0-14 6-14 14v24c0 6 5 11 11 11h6c6 0 11-5 11-11V22c0-8-6-14-14-14z" />
      <ellipse cx="24" cy="20" rx="4" ry="5" />
      <ellipse cx="40" cy="20" rx="4" ry="5" />
      <ellipse cx="24" cy="30" rx="3" ry="4" />
      <ellipse cx="40" cy="30" rx="3" ry="4" />
      <ellipse cx="32" cy="42" rx="6" ry="8" />
      <path
        d="M20 46c-1 2-1 4 0 6 1 1 3 2 5 2h14c2 0 4-1 5-2 1-2 1-4 0-6H20z"
        opacity="0.3"
      />
    </>
  ),
  chair: (
    <>
      <rect height="6" rx="3" width="36" x="14" y="12" />
      <rect height="24" rx="2" width="36" x="14" y="18" />
      <path d="M18 42v8c0 2 1 3 3 3h4c2 0 3-1 3-3v-8H18zM36 42v8c0 2 1 3 3 3h4c2 0 3-1 3-3v-8h-10z" />
      <circle cx="24" cy="28" r="3" />
      <circle cx="40" cy="28" r="3" />
      <rect height="4" opacity="0.3" rx="2" width="24" x="20" y="34" />
    </>
  ),
};
const STEP_ICONS = [
  <path
    key="0"
    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  />,
  <path
    key="1"
    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  />,
  <path key="2" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />,
];
const CHECK = <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />;

type Price = { price: string; duration: string };
const Prices = ({
  prices,
  style,
}: {
  prices: Price[];
  style?: React.CSSProperties;
}) => (
  <div className="ks-prices" style={style}>
    {prices.map((p) => (
      <div key={p.duration} className="ks-price-item">
        <span className="ks-price-val">{p.price}</span>
        <span className="ks-price-lbl">{p.duration}</span>
      </div>
    ))}
  </div>
);

type Card = {
  icon: string;
  title: string;
  description: string;
  benefits?: string[];
  prices: Price[];
};
const MassageCard = ({ c }: { c: Card }) => (
  <article className="ks-card">
    <div className="ks-card-header">
      <div className="ks-card-icon">
        <svg viewBox="0 0 64 64" aria-hidden="true">
          {ICONS[c.icon] ?? ICONS.swedish}
        </svg>
      </div>
      <h3 className="ks-card-title">{c.title}</h3>
    </div>
    <div className="ks-card-body">
      <p className="ks-card-desc">{c.description}</p>
      {c.benefits?.length ? (
        <ul className="ks-benefits">
          {c.benefits.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}
      <Prices prices={c.prices} />
    </div>
  </article>
);

/** Massage Therapy (/massagetherapy/): the old page's own layout and stylesheet (massage.css). */
export async function MassageView({ data }: { data: typeof massagePage }) {
  const settings = await getSettings();
  const {
    banner,
    intro,
    booking,
    menu,
    featured,
    foot,
    guide,
    reviewsTitle,
    cta,
  } = data;
  return (
    <>
      <TreatmentBanner
        {...banner}
        image={images.bannerRed}
        className="h-[417px] px-[10px] pt-[150px] md:h-[627px] md:px-0 md:pt-[244px]"
        koreanClassName="font-['Tang_Garland',serif] text-[32px] leading-[32px] font-normal"
        titleClassName="text-[38px] leading-[38px] font-normal md:text-[68px] md:leading-[68px]"
        subtitleClassName="text-[20px] leading-[20px] font-normal md:text-[32px] md:leading-[32px]"
      />
      <div className="pg-massage">
        <div className="ks-wrapper">
          <section className="ks-intro">
            <div className="ks-intro-inner">
              <span className="ks-intro-symbol">{intro.symbol}</span>
              <span className="ks-intro-sub">{intro.symbolLabel}</span>
              <div className="ks-intro-image-wrapper">
                <Image
                  src={intro.image.src}
                  alt={intro.image.alt}
                  width={intro.image.width}
                  height={intro.image.height}
                  sizes="(max-width: 940px) 100vw, 900px"
                />
              </div>
              <p className="ks-intro-quote">{intro.quote}</p>
              <div className="ks-intro-grid">
                {intro.columns.map((p, i) => (
                  <p key={i}>
                    <Inline text={p} />
                  </p>
                ))}
              </div>
            </div>
          </section>

          <div className="ks-booking-bar">
            <Inline text={booking} />
          </div>

          <section className="ks-menu-section">
            <div className="ks-section-header">
              <span className="ks-section-label">{menu.label}</span>
              <h2 className="ks-section-title">{menu.title}</h2>
              <div className="ks-divider" />
            </div>
            <div className="ks-grid">
              {menu.cards.map((c) => (
                <MassageCard key={c.title} c={c} />
              ))}
            </div>
          </section>

          <section className="ks-feat-section">
            <div className="ks-feat-wrapper">
              <div className="ks-feat-visual">
                <div className="ks-feat-badge">{featured.badge}</div>
                <svg viewBox="0 0 64 64" aria-hidden="true">
                  <ellipse cx="32" cy="54" opacity="0.3" rx="22" ry="7" />
                  <ellipse cx="32" cy="42" opacity="0.4" rx="18" ry="6" />
                  <ellipse cx="32" cy="32" opacity="0.5" rx="14" ry="5" />
                  <path d="M20 24c0-6 5-12 12-12s12 6 12 12c0 4-3 8-6 10-2 1-4 2-6 2s-4-1-6-2c-3-2-6-6-6-10z" />
                  <path
                    d="M32 6c-2 0-4 2-5 4-1 3-1 6 0 9 1 2 3 4 5 5 2-1 4-3 5-5 1-3 1-6 0-9-1-2-3-4-5-4z"
                    opacity="0.6"
                  />
                </svg>
                <h3
                  style={{
                    color: "var(--ks-cream)",
                    margin: 0,
                    fontSize: "2rem",
                  }}
                >
                  {featured.title}
                </h3>
              </div>
              <div className="ks-feat-content">
                <h3 className="ks-feat-title">{featured.title}</h3>
                <p className="ks-feat-desc">{featured.description}</p>
                <div className="ks-feat-grid">
                  {featured.features.map((f) => (
                    <div key={f} className="ks-feat-item">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        {CHECK}
                      </svg>{" "}
                      {f}
                    </div>
                  ))}
                </div>
                <Prices
                  prices={featured.prices}
                  style={{
                    justifyContent: "flex-start",
                    border: "none",
                    marginTop: 0,
                  }}
                />
              </div>
            </div>
          </section>

          <section className="ks-foot-section">
            <div className="ks-section-header" style={{ paddingTop: 0 }}>
              <span className="ks-section-label">{foot.label}</span>
              <h2 className="ks-section-title">{foot.title}</h2>
              <div className="ks-divider" />
            </div>
            <div className="ks-grid">
              {foot.cards.map((c) => (
                <MassageCard key={c.title} c={c} />
              ))}
            </div>
          </section>

          <section className="ks-guide">
            <div className="ks-section-header" style={{ paddingTop: 0 }}>
              <span className="ks-section-label">{guide.label}</span>
              <h2 className="ks-section-title">{guide.title}</h2>
              <div className="ks-divider" />
            </div>
            <div className="ks-steps">
              {guide.steps.map((s, i) => (
                <div key={s.title} className="ks-step-card">
                  <div className="ks-step-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      {STEP_ICONS[i % STEP_ICONS.length]}
                    </svg>
                  </div>
                  <h4 className="ks-step-title">{s.title}</h4>
                  <ul className="ks-step-list">
                    {s.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="ks-enhance">
              <h3 style={{ color: "var(--ks-burgundy)", marginBottom: 10 }}>
                {guide.enhanceTitle}
              </h3>
              <p style={{ color: "var(--ks-text-light)" }}>
                {guide.enhanceText}
              </p>
              <div className="ks-pair-grid">
                {guide.pairings.map((p) => (
                  <div key={p.title} className="ks-pair-item">
                    <h4 style={{ color: "var(--ks-burgundy)" }}>{p.title}</h4>
                    <p style={{ fontSize: "0.9rem", margin: 0 }}>{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Elementor boxed container on the old site: 1400px wide, centred, 10px side padding. */}
        <section className="bg-white pt-[30px] pb-[10px]">
          <div className="mx-auto max-w-[1420px] px-[10px]">
            {/* `!`: the page stylesheet's h2 rule would otherwise win (Elementor heading on the old site). */}
            <h2 className="m-0! text-center font-recoleta! text-[47px]! leading-[47px]! font-normal! text-[#333]!">
              {reviewsTitle}
            </h2>
            {/* The old site's widget wrapper spacing (20px above, 40px below the reviews). */}
            <div className="pt-[20px] pb-[40px]">
              <Reviews widgetId={settings.reviews.pagesWidgetId} />
            </div>
          </div>
        </section>

        <div className="ks-cta-wrapper">
          <section className="ks-cta-section">
            <div className="ks-cta-content">
              <h2 className="ks-cta-title">{cta.title}</h2>
              <p className="ks-cta-text">{cta.text}</p>
              <Link className="ks-cta-button" href={cta.button.href}>
                {cta.button.label}
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
