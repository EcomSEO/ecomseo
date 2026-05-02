"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * iClosed popup — renders a trigger button that opens a modal containing
 * the same inline iClosed widget the /audit page uses. Matches the two-step
 * "Fill the form → Book your event" flow from the live event.
 *
 * Usage:
 *   <IClosedPopup label="Book a call →" />
 *   <IClosedPopup label="Grab a slot" className="btn btn-primary" />
 */

interface IClosedPopupProps {
  label?: string;
  className?: string;
  dataUrl?: string;
  title?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
}

const SCRIPT_SRC = "https://app.iclosed.io/assets/widget.js";
const DEFAULT_URL = "https://app.iclosed.io/e/fabian/seo-fit-call";
const DEFAULT_TITLE = "EcomSEO | Free 30-min SEO Fit Call";

export default function IClosedPopup({
  label = "Book a call →",
  className,
  dataUrl = DEFAULT_URL,
  title = DEFAULT_TITLE,
  children,
  ariaLabel,
}: IClosedPopupProps) {
  const [open, setOpen] = useState(false);
  const mountRef = useRef<HTMLDivElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  // Inject the iClosed widget script once per page.
  useEffect(() => {
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  // Lock body scroll + close on Esc while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);

    // Re-run iClosed auto-init so the modal's .iclosed-widget mounts.
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    document.body.appendChild(s);

    return () => {
      document.documentElement.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setOpen(true)}
        aria-label={ariaLabel}
      >
        {children ?? label}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-[2000] flex items-center justify-center p-6"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
            onClick={close}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-[960px] h-[min(760px,calc(100vh-48px))] bg-bg-card border border-border rounded-[14px] shadow-2xl overflow-hidden flex flex-col">
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-border text-white text-xl leading-none flex items-center justify-center transition"
            >
              ×
            </button>
            <div
              ref={mountRef}
              className="iclosed-widget flex-1 min-h-0"
              data-url={dataUrl}
              title={title}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
