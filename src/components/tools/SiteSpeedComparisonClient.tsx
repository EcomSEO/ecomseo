"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { SiteSpeedComparisonTranslation } from "@/lib/i18n/translations/seoTools";
import LocaleLink from "@/components/ui/LocaleLink";

interface SpeedResult {
  url: string;
  score: number;
  fcp: number;
  lcp: number;
  tbt: number;
  cls: number;
  speedIndex: number;
  error?: boolean;
}

function getDomain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function scoreColor(score: number): string {
  if (score > 89) return "text-green-400";
  if (score >= 50) return "text-yellow-400";
  return "text-red-400";
}

function scoreBg(score: number): string {
  if (score > 89) return "stroke-green-400";
  if (score >= 50) return "stroke-yellow-400";
  return "stroke-red-400";
}

function scoreLabel(score: number, t: SiteSpeedComparisonTranslation): string {
  if (score > 89) return t.good;
  if (score >= 50) return t.needsImprovement;
  return t.poor;
}

function formatMs(value: number): string {
  return Math.round(value).toLocaleString("en-US") + " ms";
}

function formatCls(value: number): string {
  return value.toFixed(3);
}

function isBest(value: number, allValues: number[], lowerIsBetter: boolean): boolean {
  const validValues = allValues.filter((v) => v > 0 || !lowerIsBetter);
  if (validValues.length === 0) return false;
  if (lowerIsBetter) {
    return value === Math.min(...validValues) && value > 0;
  }
  return value === Math.max(...validValues);
}

function ScoreCircle({ score }: { score: number }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative w-20 h-20">
      <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
        <circle
          cx="40"
          cy="40"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          className="text-white/10"
        />
        <circle
          cx="40"
          cy="40"
          r={radius}
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={scoreBg(score)}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-lg font-medium ${scoreColor(score)}`}>{score}</span>
      </div>
    </div>
  );
}

export default function SiteSpeedComparisonClient({ t }: { t: SiteSpeedComparisonTranslation }) {
  const [urls, setUrls] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<SpeedResult[] | null>(null);

  const handleCheck = async () => {
    const lines = urls
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    if (lines.length === 0) { setError(t.errorEmpty); return; }
    if (lines.length < 2) { setError(t.errorTooFew); return; }
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
      const res = await fetch("/api/speed-compare", {
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

  const metrics: {
    key: keyof Pick<SpeedResult, "fcp" | "lcp" | "tbt" | "cls" | "speedIndex">;
    label: string;
    format: (v: number) => string;
    lowerIsBetter: boolean;
  }[] = [
    { key: "fcp", label: t.fcpLabel, format: formatMs, lowerIsBetter: true },
    { key: "lcp", label: t.lcpLabel, format: formatMs, lowerIsBetter: true },
    { key: "tbt", label: t.tbtLabel, format: formatMs, lowerIsBetter: true },
    { key: "cls", label: t.clsLabel, format: formatCls, lowerIsBetter: true },
    { key: "speedIndex", label: t.speedIndexLabel, format: formatMs, lowerIsBetter: true },
  ];

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
            className="space-y-6"
          >
            {/* Score circles */}
            <div className="rounded-2xl border border-border bg-bg-card p-6">
              <h3 className="text-sm font-medium text-heading mb-5">{t.performanceScore}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {results.map((r, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    {r.error ? (
                      <div className="w-20 h-20 rounded-full border-4 border-red-500/20 flex items-center justify-center">
                        <span className="text-xs text-red-400">Error</span>
                      </div>
                    ) : (
                      <ScoreCircle score={r.score} />
                    )}
                    <span className="text-xs font-mono text-body max-w-[120px] truncate text-center">
                      {getDomain(r.url)}
                    </span>
                    {!r.error && (
                      <span className={`text-xs font-medium ${scoreColor(r.score)}`}>
                        {scoreLabel(r.score, t)}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison table */}
            <div className="rounded-2xl border border-border bg-bg-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-white/3">
                      <th className="px-4 py-3 text-left text-xs font-medium text-body">Metric</th>
                      {results.map((r, i) => (
                        <th key={i} className="px-4 py-3 text-center text-xs font-mono font-medium text-heading">
                          {getDomain(r.url)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {/* Performance Score row */}
                    <tr>
                      <td className="px-4 py-3 text-xs font-medium text-body whitespace-nowrap">
                        {t.performanceScore}
                      </td>
                      {results.map((r, i) => {
                        const allScores = results.filter((x) => !x.error).map((x) => x.score);
                        const best = isBest(r.score, allScores, false);
                        return (
                          <td key={i} className="px-4 py-3 text-center">
                            {r.error ? (
                              <span className="text-xs text-red-400">--</span>
                            ) : (
                              <span
                                className={`text-sm font-medium font-mono ${scoreColor(r.score)} ${
                                  best ? "bg-green-500/10 px-2 py-0.5 rounded-lg" : ""
                                }`}
                              >
                                {r.score}
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>

                    {/* Metric rows */}
                    {metrics.map((metric) => {
                      const allValues = results
                        .filter((r) => !r.error)
                        .map((r) => r[metric.key]);
                      return (
                        <tr key={metric.key}>
                          <td className="px-4 py-3 text-xs font-medium text-body whitespace-nowrap">
                            {metric.label}
                          </td>
                          {results.map((r, i) => {
                            const value = r[metric.key];
                            const best = !r.error && isBest(value, allValues, metric.lowerIsBetter);
                            return (
                              <td key={i} className="px-4 py-3 text-center">
                                {r.error ? (
                                  <span className="text-xs text-red-400">--</span>
                                ) : (
                                  <span
                                    className={`text-sm font-mono ${
                                      best
                                        ? "text-green-400 bg-green-500/10 px-2 py-0.5 rounded-lg font-medium"
                                        : "text-body-strong"
                                    }`}
                                  >
                                    {metric.format(value)}
                                  </span>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Best label legend */}
            <div className="flex items-center gap-2 justify-center">
              <span className="inline-block w-3 h-3 rounded bg-green-500/10 border border-green-500/20" />
              <span className="text-xs text-body">{t.best}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
