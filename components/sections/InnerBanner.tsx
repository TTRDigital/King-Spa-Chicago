/**
 * The red lion banner at the top of inner pages, with per-page sizes: the old
 * pages set the Korean word, title and padding differently on phones, so the
 * caller passes those classes. Desktop: 636px tall, text from 244px.
 */
export function InnerBanner({
  korean,
  title,
  subtitle,
  as = "h2",
  className = "pt-[100px] pb-[184px] md:h-[636px]",
  koreanClass = "text-[32px] leading-[32px]",
  titleClass = "text-[60px] leading-[60px] md:text-[96px] md:leading-[96px]",
  subtitleClass = "",
}: {
  korean: string;
  title: string;
  subtitle?: string;
  as?: "h1" | "h2";
  className?: string;
  koreanClass?: string;
  titleClass?: string;
  subtitleClass?: string;
}) {
  const Title = as;
  return (
    <section className={`banner-red bg-cover bg-left-top text-center md:pt-[244px] md:pb-0 ${className}`}>
      <h2 className={`font-sans font-medium text-sand md:text-[32px] md:leading-[32px] ${koreanClass}`}>{korean}</h2>
      <Title className={`mt-[20px] font-recoleta font-medium text-white ${titleClass}`}>{title}</Title>
      {subtitle ? <h2 className={`mt-[20px] font-recoleta font-medium text-white ${subtitleClass}`}>{subtitle}</h2> : null}
    </section>
  );
}
