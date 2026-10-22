"use client";

import { useState } from "react";

/**
 * YouTube video that loads only when clicked (a thumbnail until then), so the
 * page never waits for YouTube. Same videos as the old site's "How to Enjoy
 * King Spa" section.
 */
export function VideoFacade({ id, title, className }: { id: string; title: string; className?: string }) {
  const [play, setPlay] = useState(false);
  return (
    <div className={`relative aspect-video overflow-hidden rounded-[20px] bg-black ${className ?? ""}`}>
      {play ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button type="button" onClick={() => setPlay(true)} aria-label={`Play video: ${title}`} className="group absolute inset-0 h-full w-full">
          {/* eslint-disable-next-line @next/next/no-img-element -- YouTube's own thumbnail, not a site image */}
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          <span aria-hidden="true" className="absolute left-1/2 top-1/2 flex h-[48px] w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[12px] bg-[#212121]/80 transition-colors group-hover:bg-[#f00]">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M8 5v14l11-7z" /></svg>
          </span>
        </button>
      )}
    </div>
  );
}
