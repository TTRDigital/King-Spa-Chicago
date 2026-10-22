/** Post date and time as WordPress showed them ("April 14, 2026", "1:04 pm"), read from the stored local time without time-zone shifts. */
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function postDate(iso: string) {
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?/);
  if (!m) return { date: iso, time: "" };
  const [, y, mo, d, h = "0", mi = "00"] = m;
  const hour = Number(h);
  return { date: `${MONTHS[Number(mo) - 1]} ${Number(d)}, ${y}`, time: `${hour % 12 || 12}:${mi} ${hour < 12 ? "am" : "pm"}` };
}

/** The first `words` words of a text (the blog grid's excerpt length). */
export const firstWords = (text: string, words: number) => text.replace(/\s*\[…\]\s*$/, "").split(/\s+/).slice(0, words).join(" ");
