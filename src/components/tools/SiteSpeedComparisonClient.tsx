"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { SiteSpeedComparisonTranslation } from "@/lib/i18n/translations/seoTools";

interface ResourceBreakdown {
  scripts: number;
  stylesheets: number;
  images: number;
  fonts: number;
  other: number;
  totalSize: number;
  totalRequests: number;
}

interface SpeedResult {
  url: string;
  score: number;
  fcp: number;
  lcp: number;
  tbt: number;
  cls: number;
  ttfb: number;
  speedIndex: number;
  resources: ResourceBreakdown;
  error?: boolean;
}

function getDomain(url: string): string {
  try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return url; }
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

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function isBest(value: number, allValues: number[], lowerIsBetter: boolean): boolean {
  const validValues = allValues.filter((v) => v > 0 || !lowerIsBetter);
  if (validValues.length === 0) return false;
  if (lowerIsBetter) return value === Math.min(...validValues) && value > 0;
  return value === Math.max(...validValues);
}

function ScoreCircle({ score }: { score: number }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative w-20 h-20">
      <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r={radius} fill="none" stroke="currentColor" strokeWidth="4" className="text-white/10" />
        <circle cx="40" cy="40" r={radius} fill="none" strokeWidth="4" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} className={scoreBg(score)} />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-lg font-medium ${scoreColor(score)}`}>{score}</span>
      </div>
    </div>
  );
}

const RACE_COLORS = ["bg-blue-500", "bg-purple-500", "bg-green-500", "bg-orange-500", "bg-pink-500"];

export default function SiteSpeedComparisonClient({ t }: { t: SiteSpeedComparisonTranslation }) {
  const [urls, setUrls] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<SpeedResult[] | null>(null);

  const handleCheck = async () => {
    const lines = urls.split("\n").map((l) => l.trim()).filter(Boolean);

    if (lines.length === 0) { setError(t.errorEmpty); return; }
    if (lines.length < 2) { setError(t.errorTooFew); return; }
    if (lines.length > 5) { setError(t.errorTooMany); return; }

    const normalized = lines.map((l) => /^https?:\/\//i.test(l) ? l : "https://" + l);
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

  const winner = useMemo(() => {
    if (!results) return null;
    const valid = results.filter((r) => !r.error);
    if (valid.length === 0) return null;
    return valid.sort((a, b) => b.score - a.score)[0];
  }, [results]);

  const metrics: {
    key: keyof Pick<SpeedResult, "fcp" | "lcp" | "tbt" | "cls" | "ttfb" | "speedIndex">;
    label: string;
    format: (v: number) => string;
    lowerIsBetter: boolean;
  }[] = [
    { key: "ttfb", label: "TTFB", format: formatMs, lowerIsBetter: true },
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
            {/* Score circles with winner badge */}
            <div className="rounded-2xl border border-border bg-bg-card p-6">
              <h3 className="text-sm font-medium text-heading mb-5">{t.performanceScore}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {results.map((r, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 relative">
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
                    {winner && winner.url === r.url && (
                      <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-500/15 text-green-400 border border-green-500/20">
                        Winner
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Race visualization */}
            <div className="rounded-2xl border border-border bg-bg-card p-6 space-y-4">
              <h3 className="text-sm font-medium text-heading">Speed Race</h3>
              {(["lcp", "fcp", "ttfb"] as const).map((metric) => {
                const validResults = results.filter((r) => !r.error);
                const maxValue = Math.max(...validResults.map((r) => r[metric]), 1);
                return (
                  <div key={metric} className="space-y-2">
                    <span className="text-xs text-body uppercase tracking-wider">{metric.toUpperCase()}</span>
                    <div className="space-y-1.5">
                      {results.map((r, i) => {
                        if (r.error) return null;
                        const pct = (r[metric] / maxValue) * 100;
                        const allVals = validResults.map((vr) => vr[metric]);
                        const best = isBest(r[metric], allVals, true);
                        return (
                          <div key={i} className="flex items-center gap-3">
                            <span className="text-[10px] font-mono text-body w-[100px] truncate shrink-0">
                              {getDomain(r.url)}
                            </span>
                            <div className="flex-1 h-6 bg-white/5 rounded-lg overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${Math.max(pct, 2)}%` }}
                                transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                                className={`h-full rounded-lg ${RACE_COLORS[i % RACE_COLORS.length]} flex items-center justify-end pr-2`}
                              >
                                {best && (
                                  <span className="text-[9px] text-white font-medium">FASTEST</span>
                                )}
                              </motion.div>
                            </div>
                            <span className="text-xs font-mono text-heading w-[70px] text-right shrink-0">
                              {formatMs(r[metric])}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Detailed comparison table */}
            <div className="rounded-2xl border border-border bg-bg-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-white/[0.02]">
                      <th className="px-4 py-3 text-left text-xs font-medium text-body">Metric</th>
                      {results.map((r, i) => (
                        <th key={i} className="px-4 py-3 text-center text-xs font-mono font-medium text-heading">
                          <div className="flex items-center justify-center gap-1.5">
                            <div className={`w-2 h-2 rounded-full ${RACE_COLORS[i % RACE_COLORS.length]}`} />
                            {getDomain(r.url)}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3 text-xs font-medium text-body">{t.performanceScore}</td>
                      {results.map((r, i) => {
                        const allScores = results.filter((x) => !x.error).map((x) => x.score);
                        const best = isBest(r.score, allScores, false);
                        return (
                          <td key={i} className="px-4 py-3 text-center">
                            {r.error ? (
                              <span className="text-xs text-red-400">--</span>
                            ) : (
                              <span className={`text-sm font-medium font-mono ${scoreColor(r.score)} ${best ? "bg-green-500/10 px-2 py-0.5 rounded-lg" : ""}`}>
                                {r.score}
                                {best && <span className="ml-1 text-[9px]">BEST</span>}
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                    {metrics.map((metric) => {
                      const allValues = results.filter((r) => !r.error).map((r) => r[metric.key]);
                      return (
                        <tr key={metric.key}>
                          <td className="px-4 py-3 text-xs font-medium text-body whitespace-nowrap">{metric.label}</td>
                          {results.map((r, i) => {
                            const value = r[metric.key];
                            const best = !r.error && isBest(value, allValues, metric.lowerIsBetter);
                            return (
                              <td key={i} className="px-4 py-3 text-center">
                                {r.error ? (
                                  <span className="text-xs text-red-400">--</span>
                                ) : (
                                  <span className={`text-sm font-mono ${best ? "text-green-400 bg-green-500/10 px-2 py-0.5 rounded-lg font-medium" : "text-body-strong"}`}>
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

            {/* Resource breakdown */}
            <div className="rounded-2xl border border-border bg-bg-card p-6 space-y-4">
              <h3 className="text-sm font-medium text-heading">Resource Breakdown</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-4 py-2 text-left text-xs font-medium text-body">Resource</th>
                      {results.filter((r) => !r.error).map((r, i) => (
                        <th key={i} className="px-4 py-2 text-center text-xs font-mono font-medium text-heading">
                          {getDomain(r.url)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {(["scripts", "stylesheets", "images", "fonts", "other"] as const).map((resType) => (
                      <tr key={resType}>
                        <td className="px-4 py-2 text-xs text-body capitalize">{resType}</td>
                        {results.filter((r) => !r.error).map((r, i) => (
                          <td key={i} className="px-4 py-2 text-center text-xs font-mono text-heading">
                            {r.resources[resType]}
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr className="border-t-2 border-border">
                      <td className="px-4 py-2 text-xs font-medium text-heading">Total Requests</td>
                      {results.filter((r) => !r.error).map((r, i) => (
                        <td key={i} className="px-4 py-2 text-center text-xs font-mono font-medium text-heading">
                          {r.resources.totalRequests}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-xs font-medium text-heading">Total Size</td>
                      {results.filter((r) => !r.error).map((r, i) => (
                        <td key={i} className="px-4 py-2 text-center text-xs font-mono font-medium text-heading">
                          {formatBytes(r.resources.totalSize)}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4 justify-center flex-wrap">
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded bg-green-500/10 border border-green-500/20" />
                <span className="text-xs text-body">{t.best}</span>
              </div>
              {results.map((r, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className={`w-2.5 h-2.5 rounded-full ${RACE_COLORS[i % RACE_COLORS.length]}`} />
                  <span className="text-xs text-body font-mono">{getDomain(r.url)}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
