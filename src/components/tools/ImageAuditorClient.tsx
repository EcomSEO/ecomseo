"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ImageAuditorTranslation } from "@/lib/i18n/translations/seoTools";

interface ImageIssue {
  message: string;
  severity: "critical" | "warning" | "info";
}

interface ImageInfo {
  src: string;
  alt: string | null;
  width: string | null;
  height: string | null;
  loading: string | null;
  fileExtension: string;
  isModernFormat: boolean;
  isCDN: boolean;
  cdnProvider: string | null;
  estimatedSize: string | null;
  estimatedSizeBytes: number | null;
  issues: ImageIssue[];
}

interface PageStats {
  total: number;
  missingAlt: number;
  emptyAlt: number;
  missingLazyLoad: number;
  oldFormat: number;
  missingDimensions: number;
  onCDN: number;
  withSrcset: number;
  genericAlt: number;
  longAlt: number;
  nonSeoFilename: number;
  oversized: number;
}

interface PageResult {
  url: string;
  images: ImageInfo[];
  stats: PageStats;
  score: number;
}

function formatBytes(bytes: number | null): string {
  if (bytes === null) return "-";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function ScoreCircle({ score }: { score: number }) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 80 ? "stroke-green-400" : score >= 50 ? "stroke-yellow-400" : "stroke-red-400";
  const textColor = score >= 80 ? "text-green-400" : score >= 50 ? "text-yellow-400" : "text-red-400";

  return (
    <div className="relative w-16 h-16">
      <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r={radius} fill="none" stroke="currentColor" strokeWidth="3" className="text-white/10" />
        <circle cx="32" cy="32" r={radius} fill="none" strokeWidth="3" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} className={color} />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-sm font-medium ${textColor}`}>{score}</span>
      </div>
    </div>
  );
}

function SeverityDot({ severity }: { severity: "critical" | "warning" | "info" }) {
  const cls = severity === "critical" ? "bg-red-400" : severity === "warning" ? "bg-yellow-400" : "bg-blue-400";
  return <span className={`inline-block w-2 h-2 rounded-full ${cls} shrink-0`} />;
}

export default function ImageAuditorClient({ t }: { t: ImageAuditorTranslation }) {
  const [urls, setUrls] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<PageResult[] | null>(null);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const handleCheck = async () => {
    const lines = urls
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    if (lines.length === 0) { setError(t.errorEmpty); return; }
    if (lines.length > 20) { setError(t.errorTooMany); return; }

    const normalized = lines.map((l) =>
      /^https?:\/\//i.test(l) ? l : "https://" + l
    );
    for (const u of normalized) {
      try { new URL(u); } catch { setError(t.errorInvalid); return; }
    }

    setError("");
    setLoading(true);
    setResults(null);
    setExpanded({});

    try {
      const res = await fetch("/api/image-audit", {
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

  const toggleExpand = (i: number) => {
    setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  // Aggregate stats
  const agg = useMemo(() => {
    if (!results) return null;
    const total = results.reduce((s, r) => s + r.stats.total, 0);
    const missingAlt = results.reduce((s, r) => s + r.stats.missingAlt, 0);
    const emptyAlt = results.reduce((s, r) => s + r.stats.emptyAlt, 0);
    const oldFormat = results.reduce((s, r) => s + r.stats.oldFormat, 0);
    const missingDimensions = results.reduce((s, r) => s + r.stats.missingDimensions, 0);
    const missingLazyLoad = results.reduce((s, r) => s + r.stats.missingLazyLoad, 0);
    const onCDN = results.reduce((s, r) => s + r.stats.onCDN, 0);
    const oversized = results.reduce((s, r) => s + r.stats.oversized, 0);
    const nonSeoFilename = results.reduce((s, r) => s + r.stats.nonSeoFilename, 0);
    const genericAlt = results.reduce((s, r) => s + r.stats.genericAlt, 0);

    // Estimate savings: oversized images could save ~60% typically
    const totalOversizedBytes = results.reduce((s, r) =>
      s + r.images.filter((img) => img.estimatedSizeBytes !== null && img.estimatedSizeBytes > 200 * 1024)
        .reduce((ss, img) => ss + (img.estimatedSizeBytes! * 0.6), 0), 0);
    // Format conversion savings estimate
    const legacyFormatBytes = results.reduce((s, r) =>
      s + r.images.filter((img) => !img.isModernFormat && img.estimatedSizeBytes !== null)
        .reduce((ss, img) => ss + (img.estimatedSizeBytes! * 0.3), 0), 0);

    const totalSavings = totalOversizedBytes + legacyFormatBytes;
    const avgScore = results.length > 0 ? Math.round(results.reduce((s, r) => s + r.score, 0) / results.length) : 0;

    return { total, missingAlt, emptyAlt, oldFormat, missingDimensions, missingLazyLoad, onCDN, oversized, nonSeoFilename, genericAlt, totalSavings, avgScore };
  }, [results]);

  const totalIssues = useMemo(() => {
    if (!results) return 0;
    return results.reduce((s, r) => s + r.images.reduce((ss, img) => ss + img.issues.length, 0), 0);
  }, [results]);

  return (
    <div className="w-full max-w-[960px] mx-auto space-y-6">
      {/* Input */}
      <div className="rounded-2xl border border-border bg-bg-card p-6 space-y-4">
        <label className="block text-sm font-medium text-heading">{t.urlsLabel}</label>
        <textarea
          value={urls}
          onChange={(e) => setUrls(e.target.value)}
          placeholder={t.urlsPlaceholder}
          rows={5}
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
        {results && agg && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Summary dashboard */}
            <div className="rounded-2xl border border-border bg-bg-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-heading">Image SEO Dashboard</h3>
                <ScoreCircle score={agg.avgScore} />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="rounded-lg border border-border p-3 text-center">
                  <div className="text-xl font-medium text-heading">{agg.total}</div>
                  <div className="text-[10px] text-body mt-0.5">{t.totalImages}</div>
                </div>
                <div className="rounded-lg border border-border p-3 text-center">
                  <div className={`text-xl font-medium ${agg.missingAlt > 0 ? "text-red-400" : "text-green-400"}`}>{agg.missingAlt}</div>
                  <div className="text-[10px] text-body mt-0.5">{t.missingAlt}</div>
                </div>
                <div className="rounded-lg border border-border p-3 text-center">
                  <div className={`text-xl font-medium ${agg.oversized > 0 ? "text-red-400" : "text-green-400"}`}>{agg.oversized}</div>
                  <div className="text-[10px] text-body mt-0.5">&gt;200KB</div>
                </div>
                <div className="rounded-lg border border-border p-3 text-center">
                  <div className={`text-xl font-medium ${agg.oldFormat > 0 ? "text-yellow-400" : "text-green-400"}`}>{agg.oldFormat}</div>
                  <div className="text-[10px] text-body mt-0.5">Legacy Format</div>
                </div>
                <div className="rounded-lg border border-border p-3 text-center">
                  <div className={`text-xl font-medium ${agg.missingLazyLoad > 0 ? "text-yellow-400" : "text-green-400"}`}>{agg.missingLazyLoad}</div>
                  <div className="text-[10px] text-body mt-0.5">No Lazy Load</div>
                </div>
                <div className="rounded-lg border border-border p-3 text-center">
                  <div className="text-xl font-medium text-accent">{agg.onCDN}</div>
                  <div className="text-[10px] text-body mt-0.5">On CDN</div>
                </div>
                <div className="rounded-lg border border-border p-3 text-center">
                  <div className={`text-xl font-medium ${agg.nonSeoFilename > 0 ? "text-yellow-400" : "text-green-400"}`}>{agg.nonSeoFilename}</div>
                  <div className="text-[10px] text-body mt-0.5">Bad Filenames</div>
                </div>
                <div className="rounded-lg border border-border p-3 text-center">
                  <div className={`text-xl font-medium ${agg.genericAlt > 0 ? "text-yellow-400" : "text-green-400"}`}>{agg.genericAlt}</div>
                  <div className="text-[10px] text-body mt-0.5">Generic Alt</div>
                </div>
              </div>

              {/* Savings estimate */}
              {agg.totalSavings > 0 && (
                <div className="mt-4 rounded-lg border border-accent/20 bg-accent/5 p-3 flex items-center justify-between">
                  <span className="text-xs text-body">Estimated savings from optimization:</span>
                  <span className="text-sm font-medium text-accent">{formatBytes(agg.totalSavings)}</span>
                </div>
              )}
            </div>

            {/* Per-URL cards */}
            <div className="space-y-3">
              {results.map((r, i) => {
                const isOpen = expanded[i] ?? false;
                return (
                  <div
                    key={i}
                    className={`rounded-2xl border bg-bg-card overflow-hidden ${
                      r.score < 50 ? "border-red-500/30" : r.score < 80 ? "border-yellow-500/30" : "border-border"
                    }`}
                  >
                    <button
                      onClick={() => toggleExpand(i)}
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-mono text-body break-all">
                          {r.url.replace(/^https?:\/\//, "").slice(0, 60)}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-[11px] text-body">{r.stats.total} img</span>
                        <ScoreCircle score={r.score} />
                        <span className={`text-xs ${totalIssues > 0 ? "text-yellow-400" : "text-green-400"}`}>
                          {r.images.reduce((s, img) => s + img.issues.length, 0)} issues
                        </span>
                        <svg
                          className={`w-4 h-4 text-body transition-transform ${isOpen ? "rotate-180" : ""}`}
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-4 border-t border-border pt-3 space-y-2">
                            {r.images.length === 0 ? (
                              <p className="text-xs text-body italic">No images found</p>
                            ) : (
                              r.images.map((img, j) => (
                                <div key={j} className="flex flex-col gap-1.5 p-3 rounded-xl border border-border bg-bg">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-[10px] text-body/60 uppercase tracking-wide shrink-0">src</span>
                                    <span className="text-xs font-mono text-body break-all">
                                      {img.src.length > 80 ? img.src.slice(0, 80) + "..." : img.src}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-[10px] text-body/60 uppercase tracking-wide shrink-0">{t.altLabel}</span>
                                    <span className={`text-xs ${img.alt === null ? "text-red-400 italic" : img.alt.length === 0 ? "text-yellow-400 italic" : "text-body"}`}>
                                      {img.alt === null ? t.missingAlt : img.alt.length === 0 ? t.emptyAlt : img.alt.length > 60 ? img.alt.slice(0, 60) + "..." : img.alt}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-4 flex-wrap">
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-[10px] text-body/60 uppercase tracking-wide">{t.sizeLabel}</span>
                                      <span className={`text-xs font-mono ${img.estimatedSizeBytes !== null && img.estimatedSizeBytes > 200 * 1024 ? "text-red-400" : "text-body"}`}>
                                        {img.estimatedSize || "-"}
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-[10px] text-body/60 uppercase tracking-wide">{t.formatLabel}</span>
                                      <span className={`text-xs font-mono ${!img.isModernFormat && img.fileExtension !== "unknown" ? "text-yellow-400" : "text-body"}`}>
                                        {img.fileExtension}
                                      </span>
                                    </div>
                                    {img.isCDN && (
                                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                                        {img.cdnProvider || "CDN"}
                                      </span>
                                    )}
                                    {img.loading === "lazy" && (
                                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                                        lazy
                                      </span>
                                    )}
                                  </div>
                                  {img.issues.length > 0 && (
                                    <div className="flex flex-wrap gap-1 mt-1">
                                      {img.issues.map((issue, k) => (
                                        <div key={k} className="flex items-center gap-1 text-[10px]">
                                          <SeverityDot severity={issue.severity} />
                                          <span className="text-body">{issue.message}</span>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
