import { headerFallbackFont } from "@/components/sections/archiveHeaderFont";
import { HELLO_COLUMN } from "@/components/pages/Archive";

/** 404 page: the old theme's plain "page can't be found" message (system font, no banner, Hello column widths). */
export function NotFoundView() {
  return (
    <section className={`${HELLO_COLUMN} pt-[8px] pb-[14px]`}>
      <style>{headerFallbackFont}</style>
      <h1 className="px-[10px] font-sans text-[40px] leading-[48px] font-medium text-body min-[576px]:px-0">The page can’t be found.</h1>
      <p className="mt-[16px] font-sans text-[16px] leading-[24px] text-body">It looks like nothing was found at this location.</p>
    </section>
  );
}
