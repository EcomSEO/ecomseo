"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * IClosedFloatingLauncher — site-wide floating icon that opens a compact
 * booking card (not a fullscreen modal). No auto-open; strictly user-initiated.
 *
 * Behaviour:
 *   - Always-visible circular icon bottom-right.
 *   - Click → slide-up compact card (~420×640) anchored above the icon.
 *   - Close via ×, outside click, or Esc.
 *   - Loads the iClosed widget script lazily on first open, then the widget
 *     mounts the booking flow inside the card.
 *   - Skipped on /demo (the inline widget is the primary CTA there).
 */

const BOOKING_URL = "https://app.iclosed.io/e/fabian/seo-fit-call";
const SCRIPT_SRC = "https://app.iclosed.io/assets/widget.js";
const TITLE = "EcomSEO | Free 30-min SEO Fit Call";

function isDemoPath(path: string | null | undefined) {
  return !!path && /\/demo(\/|$)/.test(path);
}

export default function IClosedFloatingLauncher() {
  const [pathname, setPathname] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Track pathname via router events / popstate without pulling next/navigation
  // (keeps this component resilient in both app router + static exports).
  useEffect(() => {
    if (typeof window === "undefined") return;
    setPathname(window.location.pathname);
    const update = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", update);
    return () => window.removeEventListener("popstate", update);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  // Lazy-load the iClosed widget script only once the user opens the card.
  useEffect(() => {
    if (!open) return;
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      // Re-trigger so the newly-mounted .iclosed-widget element is initialised.
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.async = true;
      document.body.appendChild(s);
      return;
    }
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    document.body.appendChild(s);
  }, [open]);

  // Esc to close; outside click to close.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onClickAway = (e: MouseEvent) => {
      const card = cardRef.current;
      if (!card) return;
      if (card.contains(e.target as Node)) return;
      // Ignore the launcher button itself
      const launcher = document.getElementById("iclosed-launcher-btn");
      if (launcher && launcher.contains(e.target as Node)) return;
      close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickAway);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickAway);
    };
  }, [open, close]);

  // Don't render on /demo — inline widget lives there.
  if (isDemoPath(pathname)) return null;

  return (
    <>
      {/* Floating launcher icon — Maison Commerce style: 60×60 round button
          with an animated orbiting crescent highlight and a chevron that
          rotates between closed (down) and open (up) states. */}
      <button
        id="iclosed-launcher-btn"
        type="button"
        aria-label="Book a 30-minute SEO fit call with Fabian"
        title="Book a 30-minute SEO fit call with Fabian"
        onClick={() => setOpen((v) => !v)}
        className="fixed z-[1000] inline-flex items-center justify-center w-[60px] h-[60px] rounded-full bg-primary hover:bg-primary-hover text-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-0.5 overflow-hidden"
        style={{
          bottom: "calc(env(safe-area-inset-bottom, 0px) + 28px)",
          right: "24px",
        }}
      >
        {/* Animated orbiting crescent highlight (inside the circle) */}
        <span
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ mixBlendMode: "screen", opacity: 0.45 }}
        >
          <span
            className="block w-full h-full"
            style={{
              transformOrigin: "50% 50%",
              animation: "iclosedOrbit 3s linear infinite",
            }}
          >
            <svg
              width="44"
              height="25"
              viewBox="0 0 44 25"
              fill="none"
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, 0)",
              }}
            >
              <path
                d="M44 4.16747C44 15.673 34.1503 25 22 25C9.84974 25 0 15.673 0 4.16747C0 -7.33803 9.84974 8.62795 22 8.62795C34.1503 8.62795 44 -7.33803 44 4.16747Z"
                fill="#ffffff"
              />
            </svg>
          </span>
        </span>

        {/* Chevron: down when closed, up when open (rotates 180°) */}
        <span
          className="relative z-[1] transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          aria-hidden
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>

      {/* Compact card — anchored above the launcher, NOT fullscreen. No backdrop.
          The rest of the page stays visible and scrollable. */}
      {open && (
        <div
          ref={cardRef}
          role="dialog"
          aria-modal="false"
          aria-label={TITLE}
          className="fixed z-[1001] bg-bg-card border border-border rounded-2xl shadow-[0_25px_80px_-15px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col animate-[iclosedCardIn_.2s_ease-out]"
          style={{
            bottom: "calc(env(safe-area-inset-bottom, 0px) + 100px)",
            right: "24px",
            width: "min(420px, calc(100vw - 32px))",
            height: "min(640px, calc(100vh - 128px))",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/70 bg-bg-card">
            <div className="min-w-0">
              <div className="text-[14px] font-semibold text-heading leading-tight truncate">
                Book a 30-min call with Fabian
              </div>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="flex-shrink-0 w-8 h-8 grid place-items-center rounded-full bg-white/5 hover:bg-white/10 border border-border text-white/80 hover:text-white transition"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          {/* iClosed widget mounts here */}
          <div
            className="iclosed-widget flex-1 min-h-0 bg-white"
            data-url={BOOKING_URL}
            title={TITLE}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}

      {/* Entrance animation + orbiting crescent keyframes */}
      <style jsx global>{`
        @keyframes iclosedCardIn {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes iclosedOrbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
