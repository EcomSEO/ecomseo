"use client";

/**
 * Top-level error boundary. Catches errors thrown in the root layout itself.
 * Must include its own <html> + <body> because it replaces the root layout
 * when it renders. Keep this file dependency-free (no shared components,
 * no font imports) — it has to render even when the rest of the app is broken.
 */

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to console with full context so it shows up in Sentry/console captures.
    // Also forward to GTM dataLayer so we can build a tag/trigger to alert on it.
    if (typeof window !== "undefined") {
      try {
        // eslint-disable-next-line no-console
        console.error("[GlobalError]", {
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
          exception_scope: "global",
          exception_message: error?.message ?? "unknown",
          exception_digest: error?.digest ?? null,
          exception_path: window.location.pathname,
        });
      } catch {
        /* swallow — logging must never re-throw inside an error boundary */
      }
    }
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background: "#0B0D14",
          color: "#E6E8F0",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        <div style={{ maxWidth: 480, textAlign: "center" }}>
          <div
            style={{
              fontSize: 13,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(230,232,240,0.45)",
              marginBottom: 12,
            }}
          >
            EcomSEO
          </div>
          <h1
            style={{
              fontSize: 28,
              lineHeight: 1.2,
              fontWeight: 600,
              margin: "0 0 12px",
            }}
          >
            Something went wrong loading this page.
          </h1>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.55,
              color: "rgba(230,232,240,0.7)",
              margin: "0 0 24px",
            }}
          >
            Sorry about that. A quick reload usually fixes it. If it keeps
            happening, please email{" "}
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
      </body>
    </html>
  );
}
