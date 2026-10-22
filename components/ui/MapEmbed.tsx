/** Google Maps embed, lazy-loaded (below the fold on every page that has one). */
export function MapEmbed({ src, title, className }: { src: string; title: string; className?: string }) {
  return <iframe src={src} title={title} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className={`block w-full border-0 ${className ?? ""}`} />;
}
