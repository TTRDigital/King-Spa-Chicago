/**
 * The red lion banner at the top of inner pages: a small Korean word over a
 * large Recoleta title (both h2 on the old site). 636px tall on desktop.
 */
export function PageBanner({ korean, title, as = "h2" }: { korean: string; title: string; as?: "h1" | "h2" }) {
  const Title = as;
  return (
    <section
      className="banner-red bg-cover bg-left-top px-[1px] pt-[100px] pb-[100px] text-center md:pt-[244px] md:pb-0 md:h-[636px]">
      <h2 className="font-sans text-[25px] leading-[25px] font-medium text-sand md:text-[32px] md:leading-[32px]">{korean}</h2>
      <Title className="mt-[20px] font-recoleta text-[60px] leading-[60px] font-medium text-white md:text-[96px] md:leading-[96px]">{title}</Title>
    </section>
  );
}
