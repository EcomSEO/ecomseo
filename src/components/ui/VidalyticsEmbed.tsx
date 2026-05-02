"use client";

import { useEffect, useRef } from "react";

/**
 * VidalyticsEmbed — renders a Vidalytics player for a given embed ID.
 *
 * Vidalytics handles autoplay, sound, analytics, and the UI internally. The
 * embed is a responsive 16:9 container; the script injects the player iframe
 * into our target div.
 */
interface VidalyticsEmbedProps {
  /** The embed ID from the Vidalytics snippet, e.g. "wrphd1mXJaLobXJK". */
  embedId: string;
  /** Channel path. Defaults to the EcomSEO account. */
  channel?: string;
  /** Optional extra className applied to the outer wrapper. */
  className?: string;
}

const DEFAULT_CHANNEL = "HpcIb4y5";

export default function VidalyticsEmbed({
  embedId,
  channel = DEFAULT_CHANNEL,
  className = "",
}: VidalyticsEmbedProps) {
  const initializedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (initializedRef.current) return;
    initializedRef.current = true;

    // Wrap the whole bootstrap in try/catch. The vendor script has been
    // observed to define `window.Vidalytics` / `window.VidalyticsL` /
    // `window._vidalytics` as read-only (non-writable / non-configurable)
    // properties after first load. On client-side navigation between two
    // pages that both embed a Vidalytics player, our second-mount effect
    // would try to re-assign those globals (`v[d] = v[d] || {}`) — the
    // assignment runs even when the value already exists, hits the
    // read-only descriptor, and throws a TypeError that escapes React
    // render and trips the page-level error boundary. Guard with explicit
    // existence checks AND a try/catch so a future vendor change can't
    // crash the whole page again.
    try {
      const base = `https://fast.vidalytics.com/embeds/${channel}/${embedId}/`;
      const targetId = `vidalytics_embed_${embedId}`;

      const v = window as unknown as Record<string, unknown>;
      const d = "Vidalytics";
      const yKey = "_" + d.toLowerCase();
      const cKey = d + "L";

      // Only assign if the property isn't already set. This avoids touching
      // read-only descriptors set by the vendor script on a previous page.
      const ensureBucket = (key: string) => {
        if (!v[key]) {
          try {
            v[key] = {};
          } catch {
            /* read-only — vendor already initialised it; safe to ignore */
          }
        }
      };
      ensureBucket(d);
      ensureBucket(cKey);
      ensureBucket(yKey);

      const loadScript = (url: string, cb: () => void) => {
        const existing = document.querySelector<HTMLScriptElement>(
          `script[src="${url}"]`,
        );
        if (existing) {
          if (existing.dataset.loaded === "1") cb();
          else existing.addEventListener("load", cb, { once: true });
          return;
        }
        const s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = url;
        s.onload = () => {
          s.dataset.loaded = "1";
          cb();
        };
        document.head.appendChild(s);
      };

      loadScript(base + "loader.min.js", () => {
        try {
          const vlBucket = (v[cKey] || {}) as Record<string, unknown>;
          const yBucket = (v[yKey] || {}) as Record<string, unknown>;
          const LoaderCtor = vlBucket.Loader as
            | (new () => { loadScript: (u: string, cb: () => void) => void })
            | undefined;
          if (!LoaderCtor) return;
          let loader = yBucket.Loader as
            | { loadScript: (u: string, cb: () => void) => void }
            | undefined;
          if (!loader) {
            loader = new LoaderCtor();
            try {
              yBucket.Loader = loader;
            } catch {
              /* yBucket may be a frozen vendor object — fall through, we
                 still have a local `loader` instance to use immediately */
            }
          }
          loader.loadScript(base + "player.min.js", () => {
            try {
              const dBucket = (v[d] || {}) as Record<string, unknown>;
              const EmbedCtor = dBucket.Embed as
                | (new () => { run: (a: string) => void })
                | undefined;
              if (!EmbedCtor) return;
              const embed = new EmbedCtor();
              embed.run(targetId);
            } catch (err) {
              // eslint-disable-next-line no-console
              console.warn("[VidalyticsEmbed] embed.run failed", err);
            }
          });
        } catch (err) {
          // eslint-disable-next-line no-console
          console.warn("[VidalyticsEmbed] loader bootstrap failed", err);
        }
      });
    } catch (err) {
      // Never let a player init error escape React render and trip the
      // page-level error boundary.
      // eslint-disable-next-line no-console
      console.warn("[VidalyticsEmbed] init failed", err);
    }
  }, [embedId, channel]);

  return (
    <div
      id={`vidalytics_embed_${embedId}`}
      className={className}
      style={{ width: "100%", position: "relative", paddingTop: "56.25%" }}
    />
  );
}
