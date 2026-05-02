"use client";

import { useEffect, useRef, useState } from "react";

/**
 * AutoplayVideo — a reusable <video> wrapper that:
 *   1. Starts muted + autoplay (the only way browsers allow autoplay)
 *   2. Shows a prominent "Tap for sound" overlay while muted
 *   3. Unmutes on the first click/tap/key/scroll the user performs
 *   4. Syncs the overlay with the real muted state (in case the user toggles
 *      mute via native controls)
 */

interface AutoplayVideoProps {
  src: string;
  poster?: string;
  /** Extra classes to merge onto the <video> element. */
  videoClassName?: string;
  ariaLabel?: string;
  /** Show the native <video controls> bar. Default true. */
  controls?: boolean;
  /** Tailwind "object-contain" or "object-cover". Default "object-cover". */
  objectFit?: "contain" | "cover";
  /** Background color while the video is loading (for "contain"). */
  backgroundClass?: string;
}

/**
 * NOTE: this component renders a <video> plus an overlay button as siblings
 * (React Fragment — no wrapper div) so its caller's existing positioned
 * container (must be `position: relative`) serves as the positioning context.
 * This avoids a class-order bug where a wrapper carrying both `relative` and
 * `absolute` collapses to height 0 on some Tailwind builds.
 */
export default function AutoplayVideo({
  src,
  poster,
  videoClassName = "",
  ariaLabel,
  controls = true,
  objectFit = "cover",
  backgroundClass = "bg-black",
}: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  // Force playback on mount; keep muted state in React.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    setMuted(true);
    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };
    tryPlay();
    v.addEventListener("loadedmetadata", tryPlay, { once: true });
    v.addEventListener("canplay", tryPlay, { once: true });
    // Keep React in sync if user toggles mute via native controls
    const onVolumeChange = () => setMuted(v.muted);
    v.addEventListener("volumechange", onVolumeChange);
    return () => {
      v.removeEventListener("loadedmetadata", tryPlay);
      v.removeEventListener("canplay", tryPlay);
      v.removeEventListener("volumechange", onVolumeChange);
    };
  }, []);

  // Unmute on any user interaction anywhere on the page.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!muted) return;
    const unmute = () => {
      const v = videoRef.current;
      if (!v) return;
      v.muted = false;
      v.volume = 1;
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
      setMuted(false);
    };
    const events = ["pointerdown", "keydown", "scroll", "touchstart"] as const;
    events.forEach((e) =>
      window.addEventListener(e, unmute, {
        once: true,
        passive: true,
        capture: true,
      }),
    );
    return () => {
      events.forEach((e) =>
        window.removeEventListener(e, unmute, true),
      );
    };
  }, [muted]);

  const unmuteOnClick = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.volume = 1;
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
    setMuted(false);
  };

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        controls={controls}
        preload="auto"
        aria-label={ariaLabel}
        className={`absolute inset-0 w-full h-full object-${objectFit} ${backgroundClass} ${videoClassName}`}
      />
      {/* Prominent "Tap for sound" overlay — visible ONLY while muted.
          Clicking anywhere on it unmutes and plays with sound. */}
      {muted && (
        <button
          type="button"
          onClick={unmuteOnClick}
          aria-label="Tap for sound"
          className="absolute top-4 right-4 z-10 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/75 backdrop-blur-sm text-white text-[12.5px] font-semibold border border-white/15 shadow-lg hover:bg-black/90 transition-all animate-pulse"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
          Tap for sound
        </button>
      )}
    </>
  );
}
