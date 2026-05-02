"use client";

import { useEffect } from "react";

/**
 * VideoAutoUnmute — unmute all <video> elements on the page at the earliest
 * possible moment allowed by browsers.
 *
 * Browsers block audio autoplay on cold page loads. We can't bypass that.
 * What we CAN do: the moment the user makes any interaction (click, scroll,
 * tap, keypress), the page qualifies as "user-engaged" and we can safely
 * unmute + call .play() on every video element.
 *
 * After the listener fires once, it tears itself down — no overhead for the
 * rest of the session.
 */
export default function VideoAutoUnmute() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const unmuteAll = () => {
      document.querySelectorAll<HTMLVideoElement>("video").forEach((v) => {
        try {
          v.muted = false;
          v.volume = 1;
          // Nudge playback in case the browser paused on the mute-state change.
          const p = v.play();
          if (p && typeof p.catch === "function") p.catch(() => {});
        } catch {
          /* ignore — some videos may be on cross-origin iframes */
        }
      });
      cleanup();
    };

    const events = ["pointerdown", "keydown", "scroll", "touchstart"] as const;
    events.forEach((evt) =>
      window.addEventListener(evt, unmuteAll, {
        once: true,
        passive: true,
        capture: true,
      }),
    );

    function cleanup() {
      events.forEach((evt) =>
        window.removeEventListener(evt, unmuteAll, true),
      );
    }

    return cleanup;
  }, []);

  return null;
}
