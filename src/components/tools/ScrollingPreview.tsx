"use client";

import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  /** Actual image intrinsic width (for next/image). */
  imgWidth: number;
  /** Actual image intrinsic height (for next/image). */
  imgHeight: number;
  /** The URL that appears in the browser-chrome address bar. */
  url?: string;
};

/**
 * Browser-chrome framed card displaying a tool-result screenshot.
 *
 * Behaviour depends on the image's aspect ratio:
 *  - If the rendered image is TALLER than the viewport → auto-scroll loop (reveals content).
 *  - If the image is SHORTER/EQUAL → static display, no scroll (the whole result already fits).
 *
 * Pauses on hover. Respects prefers-reduced-motion.
 */
export default function ScrollingPreview({
  src,
  alt,
  imgWidth,
  imgHeight,
  url = "ecomseo.co/tools/ecommerce-seo-audit",
}: Props) {
  // Assume the frame renders at ~1000px wide at desktop
  const DISPLAY_WIDTH = 1000;
  const renderedHeight = imgHeight * (DISPLAY_WIDTH / imgWidth);

  // Decide viewport height based on image shape.
  // Tall images → use fixed frame height (400 mobile / 580 desktop) and scroll.
  // Short/landscape images → size the viewport to the image's rendered height (no scroll).
  const isScrollable = renderedHeight > 640;
  const scrollDistance = Math.max(renderedHeight - 580, 0);
  const panSeconds = scrollDistance / 320;
  const totalSeconds = Math.min(Math.max(panSeconds / 0.9, 10), 40);

  const viewportStyle = isScrollable
    ? undefined
    : ({ aspectRatio: `${imgWidth} / ${imgHeight}` } as React.CSSProperties);
  const viewportClass = isScrollable
    ? "relative overflow-hidden h-[400px] md:h-[580px] bg-[rgb(10,10,10)]"
    : "relative overflow-hidden bg-[rgb(10,10,10)]";

  const durationStyle = isScrollable
    ? ({ animationDuration: `${totalSeconds.toFixed(1)}s` } as React.CSSProperties)
    : undefined;

  return (
    <div className="relative group">
      {/* Subtle glow backdrop */}
      <div
        className="absolute -inset-6 md:-inset-12 bg-gradient-to-br from-accent/15 via-transparent to-accent/10 blur-3xl opacity-50 pointer-events-none"
        aria-hidden
      />

      {/* Browser-chrome frame */}
      <div className="relative rounded-xl border border-white/[0.08] bg-[rgb(12,12,14)] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
        {/* Chrome top bar */}
        <div className="flex items-center gap-3 px-4 py-2.5 border-b border-white/[0.05] bg-[rgb(16,16,18)]">
          <div className="flex items-center gap-[5px]">
            <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f56]" />
            <span className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e]" />
            <span className="w-[10px] h-[10px] rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex-1 mx-2 px-3 py-[5px] rounded-md bg-white/[0.04] border border-white/[0.05] flex items-center justify-center gap-1.5">
            <svg
              className="w-3 h-3 text-white/40 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="text-[11px] md:text-xs text-white/45 font-mono truncate">{url}</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-white/20">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </div>
        </div>

        {/* Viewport (scrolling or static depending on image shape) */}
        <div className={viewportClass} style={viewportStyle}>
          <div
            className={isScrollable ? "scrolling-preview-track will-change-transform" : ""}
            style={durationStyle}
          >
            <Image
              src={src}
              alt={alt}
              width={imgWidth}
              height={imgHeight}
              className="w-full h-auto block select-none pointer-events-none"
              sizes="(min-width: 1100px) 1000px, 100vw"
              priority={false}
              draggable={false}
            />
          </div>

          {/* Edge fades — only for scrolling views */}
          {isScrollable && (
            <>
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[rgb(10,10,10)] to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[rgb(10,10,10)] to-transparent"
                aria-hidden
              />
            </>
          )}

          {/* Live indicator */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-[3px] rounded-full bg-black/60 border border-white/[0.08] backdrop-blur-sm">
            <span className="relative flex w-[6px] h-[6px]">
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
              <span className="relative inline-flex w-[6px] h-[6px] rounded-full bg-emerald-400" />
            </span>
            <span className="text-[9px] font-medium text-white/70 tracking-[0.15em] uppercase">Live</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollingPreviewLoop {
          0%   { transform: translateY(0); }
          5%   { transform: translateY(0); }
          50%  { transform: translateY(calc(-100% + 400px)); }
          55%  { transform: translateY(calc(-100% + 400px)); }
          100% { transform: translateY(0); }
        }
        @media (min-width: 768px) {
          @keyframes scrollingPreviewLoop {
            0%   { transform: translateY(0); }
            5%   { transform: translateY(0); }
            50%  { transform: translateY(calc(-100% + 580px)); }
            55%  { transform: translateY(calc(-100% + 580px)); }
            100% { transform: translateY(0); }
          }
        }
        .scrolling-preview-track {
          animation-name: scrollingPreviewLoop;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .group:hover .scrolling-preview-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .scrolling-preview-track { animation: none; }
        }
      `}</style>
    </div>
  );
}
