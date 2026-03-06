"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CoreWebVitalsTranslation } from "@/lib/i18n/translations/seoTools";

type CWVRating = "good" | "needs_improvement" | "poor" | "n/a";

interface CWVMetric {
  value: number | null;
  rating: CWVRating;
  displayValue: string;
}

interface CWVDeviceResult {
  lcp: CWVMetric;
  cls: CWVMetric;
  inp: CWVMetric;
  overall: CWVRating;
}

interface CWVResult {
  url: string;
  mobile: CWVDeviceResult | null;
  desktop: CWVDeviceResult | null;
  error?: string;
}

function RatingBadge({ rating, t }: { rating: CWVRating; t: CoreWebVitalsTranslation }) {
  const config: Record<CWVRating, { label: string; cls: string }> = {
    good:             { label: t.good,             cls: "bg-green-500/15 text-green-400 border-green-500/20" },
    needs_improvement:{ label: t.needsImprovement, cls: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20" },
    poor:             { label: t.poor,             cls: "bg-red-500/15 text-red-400 border-red-500/20" },
    "n/a":            { label: "N/A",              cls: "bg-white/10 text-body border-white/10" },
  };
  const { label, cls } = config[rating] ?? config["n/a"];
  return (
    <span className={`inline-block px-2.5 py-1 rounded-lg text-xs border font-medium ${cls}`}>
      {label}
    </span>
  );
}

function MetricCell({ metric, t }: { metric: CWVMetric | undefined; t: CoreWebVitalsTranslation }) {
  if (!metric) return <span className="text-xs text-white/20 italic">—</span>;
  const ratingCls: Record<CWVRating, string> = {
    good: "text-green-400",
    needs_improvement: "text-yellow-400",
    poor: "text-red-400",
    "n/a": "text-body",
  };
  return (
    <div className="flex flex-col gap-0.5">
      <span className={`text-sm font-medium ${ratingCls[metric.rating]}`}>{metric.displayValue}</span>
      <RatingBadge rating={metric.rating} t={t} />
    </div>
  );
}

export default function CoreWebVitalsClient({ t }: { t: CoreWebVitalsTranslation }) {
  const [urls, setUrls] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<CWVResult[] | null>(null);

  const handleCheck = async () => {
    const lines = urls
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    if (lines.length === 0) { setError(t.errorEmpty); return; }
    if (lines.length > 5) { setError(t.errorTooMany); return; }

    const normalized = lines.map((l) =>
      /^https?:\/\//i.test(l) ? l : "https://" + l
    );
    for (const u of normalized) {
      try { new URL(u); } catch { setError(t.errorInvalid); return; }
    }

    setError("");
    setLoading(true);
    setResults(null);

    try {
      const res = await fetch("/api/core-web-vitals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ urls: normalized }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setResults(data.results);
    } catch {
      setError(t.errorFetch);
    } finally {
      setLoading(false);
    }
  };

  const overallGood = results?.filter(
    (r) => r.mobile?.overall === "good" && r.desktop?.overall === "good"
  ).length ?? 0;

  return (
    <div className="w-full max-w-[960px] mx-auto space-y-6">
      {/* Input */}
      <div className="rounded-2xl border border-border bg-bg-card p-6 space-y-4">
        <label className="block text-sm font-medium text-heading">{t.urlsLabel}</label>
        <textarea
          value={urls}
          onChange={(e) => setUrls(e.target.value)}
          placeholder={t.urlsPlaceholder}
          rows={4}
          className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-body placeholder:text-white/20 focus:outline-none focus:border-accent/50 font-mono resize-y"
        />
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button
          onClick={handleCheck}
          disabled={loading}
          className="w-full sm:w-auto px-8 py-3 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? t.checkingButton : t.checkButton}
        </button>
      </div>

      {/* Results */}
      <AnimatePresence>
        {results && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Summary */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-heading">{results.length}</div>
                <div className="text-xs text-body mt-1">{t.pagesChecked}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className={`text-2xl font-medium ${overallGood === results.length ? "text-green-400" : "text-yellow-400"}`}>{overallGood}</div>
                <div className="text-xs text-body mt-1">{t.good}</div>
              </div>
            </div>

            {/* Per-URL results */}
            <div className="space-y-4">
              {results.map((r, i) => (
                <div key={i} className="rounded-2xl border border-border bg-bg-card overflow-hidden">
                  {/* URL header */}
                  <div className="px-5 py-3 border-b border-border bg-white/3 flex items-center justify-between gap-3 flex-wrap">
                    <span className="text-xs font-mono text-body-strong break-all">
                      {r.url.replace(/^https?:\/\//, "")}
                    </span>
                    {r.error && (
                      <span className="text-xs text-red-400">{r.error}</span>
                    )}
                  </div>

                  {/* Mobile + Desktop */}
                  <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                    {(["mobile", "desktop"] as const).map((device) => {
                      const d = r[device];
                      return (
                        <div key={device} className="p-5">
                          <div className="flex items-center gap-2 mb-4">
                            {device === "mobile" ? (
                              <svg className="w-4 h-4 text-body" viewBox="0 0 24 24" fill="none">
                                <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                                <circle cx="12" cy="18" r="1" fill="currentColor"/>
                              </svg>
                            ) : (
                              <svg className="w-4 h-4 text-body" viewBox="0 0 24 24" fill="none">
                                <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                                <path d="M8 22h8M12 18v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                              </svg>
                            )}
                            <span className="text-xs font-medium text-heading capitalize">
                              {device === "mobile" ? t.mobile : t.desktop}
                            </span>
                            {d && <RatingBadge rating={d.overall} t={t} />}
                            {!d && <span className="text-xs text-white/20 italic">N/A</span>}
                          </div>

                          {d && (
                            <div className="grid grid-cols-3 gap-3">
                              <div className="space-y-1.5">
                                <div className="text-xs text-body font-medium">{t.lcp}</div>
                                <MetricCell metric={d.lcp} t={t} />
                              </div>
                              <div className="space-y-1.5">
                                <div className="text-xs text-body font-medium">{t.cls}</div>
                                <MetricCell metric={d.cls} t={t} />
                              </div>
                              <div className="space-y-1.5">
                                <div className="text-xs text-body font-medium">{t.inp}</div>
                                <MetricCell metric={d.inp} t={t} />
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
