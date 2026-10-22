import "./vsteam.css";
import Image from "next/image";
import Link from "next/link";
import type { vSteamPage } from "@/lib/data/pages/vSteam";
import { images } from "@/lib/data/images";
import { faqPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { TreatmentBanner } from "@/components/sections/TreatmentBanner";
import { ActiveAccordion } from "@/components/sections/ActiveAccordion";

const HERB_ICONS: Record<string, string> = {
  wormwood:
    "M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z",
  mugwort:
    "M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z",
  rutin: "M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z",
  dandelion:
    "M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z",
};
const FLOW_CLASSES = ["heat", "cleanse", "steam", "rest"];

/** *Korean term* in this page's copy -> the old page's highlighted span. */
function Korean({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/g).map((part, i) =>
        part.startsWith("*") && part.endsWith("*") && part.length > 2 ? (
          <span key={i} className="ks-korean">
            {part.slice(1, -1)}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

const Header = ({
  label,
  title,
  text,
}: {
  label?: string;
  title: string;
  text?: string;
}) => (
  <div className="ks-section-header centered">
    {label ? <span className="ks-label">{label}</span> : null}
    <h2>{title}</h2>
    {text ? <p>{text}</p> : null}
  </div>
);

/** V-Steam (/v-steam/): the old page's own layout and stylesheet (vsteam.css). */
export function VSteamView({ data }: { data: typeof vSteamPage }) {
  const {
    banner,
    intro,
    herbs,
    benefits,
    experience,
    journey,
    who,
    tips,
    pricing,
    faq,
    cta,
  } = data;
  return (
    <>
      <JsonLd data={faqPageSchema(faq.items)} />
      <TreatmentBanner
        {...banner}
        image={images.bannerRed}
        className="px-[10px] py-[150px] md:h-[688px] md:px-0 md:py-[244px]"
        koreanClassName="font-sans text-[32px] leading-[32px] font-medium"
        titleClassName="text-[45px] leading-[45px] font-medium md:text-[96px] md:leading-[96px]"
        subtitleClassName="text-[18px] leading-[18px] font-medium md:text-[32px] md:leading-[32px]"
      />
      <div className="pg-vsteam">
        <div className="ks-vsteam">
          <section className="ks-section ks-intro">
            <div className="ks-container">
              <div className="ks-intro-image-wrapper">
                <Image
                  src={intro.image.src}
                  alt={intro.image.alt}
                  width={intro.image.width}
                  height={intro.image.height}
                  sizes="(max-width: 1140px) 100vw, 1100px"
                />
              </div>
              <div className="ks-intro-grid">
                <div className="ks-intro-content">
                  <div className="ks-section-header">
                    <span className="ks-label">{intro.label}</span>
                    <h2>{intro.title}</h2>
                  </div>
                  {intro.paragraphs.map((p, i) => (
                    <p key={i}>
                      <Korean text={p} />
                    </p>
                  ))}
                </div>
                <div className="ks-history-card">
                  <h3>{intro.historyTitle}</h3>
                  {intro.history.map((p, i) => (
                    <p key={i}>
                      <Korean text={p} />
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="ks-section ks-herbs">
            <div className="ks-container">
              <Header
                label={herbs.label}
                title={herbs.title}
                text={herbs.text}
              />
              <div className="ks-herbs-grid">
                {herbs.items.map((h) => (
                  <div key={h.name} className="ks-herb-card">
                    <div className="ks-herb-icon">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d={HERB_ICONS[h.icon] ?? HERB_ICONS.wormwood} />
                      </svg>
                    </div>
                    <h4>{h.name}</h4>
                    <span className="ks-herb-sub">{h.sub}</span>
                    <p>{h.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="ks-section ks-benefits">
            <div className="ks-container">
              <Header
                label={benefits.label}
                title={benefits.title}
                text={benefits.text}
              />
              <div className="ks-benefits-grid">
                {benefits.boxes.map((b) => (
                  <div key={b.title} className="ks-benefit-box">
                    <h3>{b.title}</h3>
                    <ul className="ks-benefit-list">
                      {b.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="ks-section ks-experience">
            <div className="ks-container">
              <Header
                label={experience.label}
                title={experience.title}
                text={experience.text}
              />
              <div className="ks-steps-grid">
                {experience.steps.map((s) => (
                  <div key={s.step} className="ks-step-card">
                    <div className="ks-step-num">{s.step}</div>
                    <div className="ks-step-content">
                      <h4>{s.title}</h4>
                      <p>{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="ks-section ks-journey">
            <div className="ks-container">
              <Header
                label={journey.label}
                title={journey.title}
                text={journey.text}
              />
              <div className="ks-flow">
                {journey.flow.map((f, i) => (
                  <span key={f} className="contents">
                    {i ? <span className="ks-flow-arrow">→</span> : null}
                    <span
                      className={`ks-flow-badge ${FLOW_CLASSES[i] ?? "rest"}`}
                    >
                      {f}
                    </span>
                  </span>
                ))}
              </div>
              <div className="ks-journey-grid">
                {journey.steps.map((s) => (
                  <div key={s.step} className="ks-journey-card">
                    <span>{s.step}</span>
                    <div className="ks-journey-content">
                      <h4>{s.title}</h4>
                      <p>{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="ks-section ks-who">
            <div className="ks-container">
              <Header label={who.label} title={who.title} />
              <div className="ks-who-grid">
                <div className="ks-who-card ideal">
                  <h3>
                    <span className="ks-who-icon">✓</span> {who.idealTitle}
                  </h3>
                  <ul className="ks-who-list">
                    {who.ideal.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
                <div className="ks-who-card avoid">
                  <h3>
                    <span className="ks-who-icon">✕</span> {who.avoidTitle}
                  </h3>
                  <ul className="ks-who-list">
                    {who.avoid.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                  <div className="ks-who-note">{who.note}</div>
                </div>
              </div>
            </div>
          </section>

          <section className="ks-section ks-tips">
            <div className="ks-container">
              <Header title={tips.title} />
              <div className="ks-tips-grid">
                {tips.cards.map((c) => (
                  <div key={c.title} className="ks-tips-card">
                    <h3>{c.title}</h3>
                    <ul>
                      {c.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="ks-section ks-pricing">
            <div className="ks-container">
              <Header label={pricing.label} title={pricing.title} />
              <div className="ks-pricing-card">
                <h3>{pricing.name}</h3>
                <div className="ks-price">
                  <span className="ks-price-symbol">{pricing.symbol}</span>
                  <span className="ks-price-amount">{pricing.amount}</span>
                </div>
                <div className="ks-price-duration">{pricing.duration}</div>
                <p className="ks-pricing-note">{pricing.note}</p>
              </div>
            </div>
          </section>

          <section className="ks-section ks-faq">
            <div className="ks-container">
              <Header label={faq.label} title={faq.title} />
              <div className="ks-faq-list">
                <ActiveAccordion
                  itemClassName="ks-faq-item"
                  buttonClassName="ks-faq-question"
                  contentClassName="ks-faq-answer"
                  items={faq.items.map((f, i) => ({
                    key: `vfaq-${i}`,
                    button: (
                      <>
                        <span>{f.question}</span>
                        <span className="ks-faq-icon">
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                          </svg>
                        </span>
                      </>
                    ),
                    body: (
                      <div className="ks-faq-answer-inner">
                        <p>{f.answer}</p>
                      </div>
                    ),
                  }))}
                />
              </div>
            </div>
          </section>

          <section className="ks-cta">
            <div className="ks-container">
              <h2>{cta.title}</h2>
              <p>{cta.text}</p>
              <div className="ks-cta-buttons">
                <Link className="ks-btn" href={cta.button.href}>
                  {cta.button.label}
                </Link>
              </div>
              <div className="ks-cta-links">
                {cta.links.map((l) => (
                  <Link key={l.href} href={l.href}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
