import "./facials.css";
import Image from "next/image";
import Link from "next/link";
import type { facialsPage } from "@/lib/data/pages/facials";
import { images } from "@/lib/data/images";
import { getSettings } from "@/lib/content";
import { faqPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Inline } from "@/components/ui/RichText";
import { Reviews } from "@/components/ui/Reviews";
import { TreatmentBanner } from "@/components/sections/TreatmentBanner";

/** Facials (/facials/): the old page's own layout and stylesheet (facials.css). */
export async function FacialsView({ data }: { data: typeof facialsPage }) {
  const settings = await getSettings();
  const {
    banner,
    intro,
    philosophy,
    booking,
    menu,
    why,
    prep,
    faq,
    reviews,
    cta,
  } = data;
  return (
    <>
      <JsonLd data={faqPageSchema(faq.items)} />
      <TreatmentBanner
        {...banner}
        image={images.bannerRed}
        className="px-[10px] py-[150px] md:px-0 md:py-[244px]"
        koreanClassName="font-['Tang_Garland',serif] text-[32px] leading-[32px] font-normal"
        titleClassName="text-[45px] leading-[45px] font-normal md:text-[96px] md:leading-[96px]"
        subtitleClassName="text-[20px] leading-[20px] font-normal md:text-[32px] md:leading-[32px]"
      />
      <div className="pg-facials">
        <div className="ks-wrapper">
          <section className="ks-intro">
            <div className="ks-intro-inner">
              <span className="ks-intro-symbol">{intro.symbol}</span>
              <span className="ks-intro-symbol-label">{intro.symbolLabel}</span>
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
              <div className="ks-intro-columns">
                {intro.columns.map((p, i) => (
                  <p key={i}>
                    <Inline text={p} />
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section className="ks-philosophy">
            <div className="ks-philosophy-inner">
              <div>
                <p className="ks-philosophy-label">{philosophy.label}</p>
                <h2 className="ks-philosophy-title">{philosophy.title}</h2>
                <div className="ks-philosophy-divider" />
                {philosophy.paragraphs.map((p, i) => (
                  <p key={i} className="ks-philosophy-text">
                    <Inline text={p} />
                  </p>
                ))}
              </div>
              <div className="ks-philosophy-accent">
                <span className="ks-philosophy-korean">
                  {philosophy.korean}
                </span>
                <span className="ks-philosophy-translation">
                  {philosophy.translation}
                </span>
              </div>
            </div>
          </section>

          <div className="ks-booking-bar">
            <strong>{booking.label}</strong> {booking.text}
          </div>

          <section className="ks-menu-section">
            <div className="ks-section-header">
              <span className="ks-section-label">{menu.label}</span>
              <h2 className="ks-section-title">{menu.title}</h2>
              <div className="ks-divider" />
            </div>
            <div className="ks-grid">
              {menu.cards.map((c) => (
                <article key={c.title} className="ks-card">
                  <div className="ks-card-header">
                    <h3 className="ks-card-title">{c.title}</h3>
                  </div>
                  <div className="ks-card-body">
                    <p className="ks-card-desc">{c.description}</p>
                    <div className="ks-best-for">
                      <p className="ks-best-for-label">{menu.bestForLabel}</p>
                      <p className="ks-best-for-text">{c.bestFor}</p>
                    </div>
                    <ul className="ks-benefits">
                      {c.benefits.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    <div className="ks-prices">
                      {c.prices.map((p) => (
                        <div key={p.duration} className="ks-price-item">
                          <span className="ks-price-val">
                            {p.price}
                            {p.vip ? (
                              <span className="ks-price-vip">*</span>
                            ) : null}
                          </span>
                          <span className="ks-price-lbl">{p.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="ks-why-section">
            <div className="ks-section-header" style={{ paddingTop: 0 }}>
              <span className="ks-section-label">{why.label}</span>
              <h2 className="ks-section-title">{why.title}</h2>
              <div className="ks-divider" />
            </div>
            <div className="ks-why-content">
              <div className="ks-why-grid">
                {why.items.map((w) => (
                  <div key={w.title} className="ks-why-item">
                    <h4>{w.title}</h4>
                    <p>{w.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="ks-prep-section">
            <div className="ks-section-header" style={{ paddingTop: 0 }}>
              <span className="ks-section-label">{prep.label}</span>
              <h2 className="ks-section-title">{prep.title}</h2>
              <div className="ks-divider" />
            </div>
            <h3
              style={{
                textAlign: "center",
                fontFamily: "var(--ks-heading-font)",
                fontSize: "1.5rem",
                color: "var(--ks-burgundy)",
                marginBottom: 24,
              }}
            >
              {prep.subtitle}
            </h3>
            <div className="ks-prep-grid">
              {prep.cards.map((c) => (
                <div key={c.title} className="ks-prep-card">
                  <h4 className="ks-prep-card-title">{c.title}</h4>
                  <ul className="ks-prep-list">
                    {c.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="ks-enhance-block">
              <h3 className="ks-enhance-title">{prep.enhanceTitle}</h3>
              <p className="ks-enhance-text">{prep.enhanceText}</p>
              <ul className="ks-pairing-list">
                {prep.pairings.map((p) => (
                  <li key={p.name} className="ks-pairing-item">
                    <p className="ks-pairing-name">{p.name}</p>
                    <p className="ks-pairing-desc">{p.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="ks-faq-section">
            <div className="ks-section-header" style={{ paddingTop: 0 }}>
              <span className="ks-section-label">{faq.label}</span>
              <h2 className="ks-section-title">{faq.title}</h2>
              <div className="ks-divider" />
            </div>
            <div className="ks-faq-container">
              {faq.items.map((f) => (
                <details key={f.question} className="ks-accordion-item">
                  <summary>
                    {f.question}
                    <div className="ks-accordion-icon" />
                  </summary>
                  <div className="ks-accordion-content">
                    <Inline text={f.answer} />
                  </div>
                </details>
              ))}
            </div>
          </section>

          <section className="ks-testimonials-section">
            <div className="ks-section-header" style={{ paddingTop: 0 }}>
              <span className="ks-section-label">{reviews.label}</span>
              <h2 className="ks-section-title">{reviews.title}</h2>
              <div className="ks-divider" />
            </div>
            <div style={{ maxWidth: 1100, margin: "40px auto 0" }}>
              <Reviews widgetId={settings.reviews.pagesWidgetId} />
            </div>
          </section>

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
