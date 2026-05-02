"use client";

/**
 * Per-locale page error boundary. Catches errors thrown by any page or
 * client component below /[locale]/. Keeps Navigation/Footer (rendered
 * by the locale layout) intact, so users don't lose context.
 *
 * Logs to console + GTM dataLayer so we can diagnose intermittent crashes.
 */

import { useEffect } from "react";

export default function LocaleError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        // eslint-disable-next-line no-console
        console.error("[LocaleError]", {
          message: error?.message,
          stack: error?.stack,
          digest: error?.digest,
          path: window.location.pathname,
          ua: navigator.userAgent,
        });
        const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({
          event: "client_exception",
          exception_scope: "page",
          exception_message: error?.message ?? "unknown",
          exception_digest: error?.digest ?? null,
          exception_path: window.location.pathname,
        });
      } catch {
        /* logging must never throw */
      }
    }
  }, [error]);

  return (
    <main
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        background: "#0B0D14",
        color: "#E6E8F0",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <div style={{ maxWidth: 520, textAlign: "center" }}>
        <h1
          style={{
            fontSize: 28,
            lineHeight: 1.2,
            fontWeight: 600,
            margin: "0 0 12px",
          }}
        >
          This page hit an unexpected error.
        </h1>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.55,
            color: "rgba(230,232,240,0.7)",
            margin: "0 0 24px",
          }}
        >
          Reload usually fixes it. If it keeps happening, drop us a line at{" "}
          <a
            href="mailto:hello@ecomseo.co"
            style={{ color: "#9DB4FF", textDecoration: "underline" }}
          >
            hello@ecomseo.co
          </a>
          .
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
          <button
            onClick={() => reset()}
            style={{
              background: "#4E7BFF",
              color: "white",
              border: 0,
              padding: "12px 20px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
          <a
            href="/"
            style={{
              background: "transparent",
              color: "#E6E8F0",
              border: "1px solid rgba(230,232,240,0.2)",
              padding: "12px 20px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Go home
          </a>
        </div>
        {error?.digest ? (
          <div
            style={{
              marginTop: 24,
              fontSize: 12,
              color: "rgba(230,232,240,0.35)",
            }}
          >
            Reference: {error.digest}
          </div>
        ) : null}
      </div>
    </main>
  );
}
