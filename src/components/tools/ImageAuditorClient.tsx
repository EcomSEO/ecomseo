"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ImageAuditorTranslation } from "@/lib/i18n/translations/seoTools";

interface ImageInfo {
  src: string;
  alt: string | null;
  hasAlt: boolean;
  hasDimensions: boolean;
  isLazy: boolean;
  fileSize: number | null;
  format: string;
}

interface PageResult {
  url: string;
  totalImages: number;
  issues: {
    missingAlt: number;
    emptyAlt: number;
    longAlt: number;
    missingDimensions: number;
    oversized: number;
    legacyFormat: number;
  };
  images: ImageInfo[];
}

function totalIssueCount(issues: PageResult["issues"]): number {
  return (
    issues.missingAlt +
    issues.emptyAlt +
    issues.longAlt +
    issues.missingDimensions +
    issues.oversized +
    issues.legacyFormat
  );
}

function formatBytes(bytes: number | null): string {
  if (bytes === null) return "-";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function IssueBadge({ label, count, color }: { label: string; count: number; color: "red" | "yellow" | "green" }) {
  if (count === 0) return null;
  const cls =
    color === "red"
      ? "bg-red-500/15 text-red-400 border-red-500/20"
      : color === "yellow"
      ? "bg-yellow-500/15 text-yellow-400 border-yellow-500/20"
      : "bg-green-500/15 text-green-400 border-green-500/20";
  return (
    <span className={`inline-block px-2 py-0.5 rounded-lg text-[10px] border font-medium ${cls}`}>
      {count} {label}
    </span>
  );
}

function ImageIssueBadges({ img, t }: { img: ImageInfo; t: ImageAuditorTranslation }) {
  const badges: { label: string; color: "red" | "yellow" | "green" }[] = [];

  if (img.alt === null) {
    badges.push({ label: t.missingAlt, color: "red" });
  } else if (img.alt.length === 0) {
    badges.push({ label: t.emptyAlt, color: "yellow" });
  } else if (img.alt.length > 125) {
    badges.push({ label: t.longAlt, color: "yellow" });
  }
  if (!img.hasDimensions) badges.push({ label: t.missingDimensions, color: "yellow" });
  if (img.fileSize !== null && img.fileSize > 200 * 1024) badges.push({ label: t.oversized, color: "red" });
  if (["jpg", "png", "gif", "bmp"].includes(img.format)) badges.push({ label: t.legacyFormat, color: "yellow" });

  if (badges.length === 0) {
    return (
      <span className="inline-block px-2 py-0.5 rounded-lg text-[10px] border font-medium bg-green-500/15 text-green-400 border-green-500/20">
        {t.noIssues}
      </span>
    );
  }

  return (
    <div className="flex flex-wrap gap-1">
      {badges.map((b, i) => (
        <span
          key={i}
          className={`inline-block px-2 py-0.5 rounded-lg text-[10px] border font-medium ${
            b.color === "red"
              ? "bg-red-500/15 text-red-400 border-red-500/20"
              : b.color === "yellow"
              ? "bg-yellow-500/15 text-yellow-400 border-yellow-500/20"
              : "bg-green-500/15 text-green-400 border-green-500/20"
          }`}
        >
          {b.label}
        </span>
      ))}
    </div>
  );
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

  const grandTotalImages = results?.reduce((s, r) => s + r.totalImages, 0) ?? 0;
  const grandTotalIssues = results?.reduce((s, r) => s + totalIssueCount(r.issues), 0) ?? 0;

  return (
    <div className="w-full max-w-[900px] mx-auto space-y-6">
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
        {results && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Summary boxes */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-heading">{results.length}</div>
                <div className="text-xs text-body mt-1">{t.pagesChecked}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-accent">{grandTotalImages}</div>
                <div className="text-xs text-body mt-1">{t.totalImages}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className={`text-2xl font-medium ${grandTotalIssues > 0 ? "text-red-400" : "text-green-400"}`}>
                  {grandTotalIssues}
                </div>
                <div className="text-xs text-body mt-1">{t.issuesFound}</div>
              </div>
            </div>

            {/* Per-URL cards */}
            <div className="space-y-3">
              {results.map((r, i) => {
                const issueCount = totalIssueCount(r.issues);
                const isOpen = expanded[i] ?? false;
                return (
                  <div
                    key={i}
                    className={`rounded-2xl border bg-bg-card overflow-hidden ${
                      issueCount > 0 ? "border-yellow-500/30" : "border-border"
                    }`}
                  >
                    {/* Header row */}
                    <button
                      onClick={() => toggleExpand(i)}
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-mono text-body break-all">
                          {r.url.replace(/^https?:\/\//, "").slice(0, 60)}
                          {r.url.length > 68 ? "..." : ""}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-[11px] text-body">
                          {r.totalImages} img
                        </span>
                        <div className="flex gap-1">
                          <IssueBadge label={t.missingAlt} count={r.issues.missingAlt} color="red" />
                          <IssueBadge label={t.emptyAlt} count={r.issues.emptyAlt} color="yellow" />
                          <IssueBadge label={t.longAlt} count={r.issues.longAlt} color="yellow" />
                          <IssueBadge label={t.missingDimensions} count={r.issues.missingDimensions} color="yellow" />
                          <IssueBadge label={t.oversized} count={r.issues.oversized} color="red" />
                          <IssueBadge label={t.legacyFormat} count={r.issues.legacyFormat} color="yellow" />
                        </div>
                        {issueCount === 0 && (
                          <span className="inline-block px-2.5 py-1 rounded-lg text-xs border font-medium bg-green-500/15 text-green-400 border-green-500/20">
                            {t.noIssues}
                          </span>
                        )}
                        <svg
                          className={`w-4 h-4 text-body transition-transform ${isOpen ? "rotate-180" : ""}`}
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M5 7.5l5 5 5-5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </button>

                    {/* Expanded detail */}
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
                              <p className="text-xs text-body italic">{t.noIssues}</p>
                            ) : (
                              r.images.map((img, j) => (
                                <div
                                  key={j}
                                  className="flex flex-col gap-1.5 p-3 rounded-xl border border-border bg-bg"
                                >
                                  {/* Src */}
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-[10px] text-body/60 uppercase tracking-wide shrink-0">src</span>
                                    <span className="text-xs font-mono text-body break-all">
                                      {img.src.length > 80 ? img.src.slice(0, 80) + "..." : img.src}
                                    </span>
                                  </div>
                                  {/* Alt */}
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-[10px] text-body/60 uppercase tracking-wide shrink-0">{t.altLabel}</span>
                                    <span className={`text-xs ${img.alt === null ? "text-red-400 italic" : img.alt.length === 0 ? "text-yellow-400 italic" : "text-body"}`}>
                                      {img.alt === null
                                        ? t.missingAlt
                                        : img.alt.length === 0
                                        ? t.emptyAlt
                                        : img.alt.length > 60
                                        ? img.alt.slice(0, 60) + "..."
                                        : img.alt}
                                    </span>
                                  </div>
                                  {/* Size + Format row */}
                                  <div className="flex items-center gap-4 flex-wrap">
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-[10px] text-body/60 uppercase tracking-wide">{t.sizeLabel}</span>
                                      <span className={`text-xs font-mono ${img.fileSize !== null && img.fileSize > 200 * 1024 ? "text-red-400" : "text-body"}`}>
                                        {formatBytes(img.fileSize)}
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-[10px] text-body/60 uppercase tracking-wide">{t.formatLabel}</span>
                                      <span className={`text-xs font-mono ${["jpg", "png", "gif", "bmp"].includes(img.format) ? "text-yellow-400" : "text-body"}`}>
                                        {img.format}
                                      </span>
                                    </div>
                                  </div>
                                  {/* Badges */}
                                  <ImageIssueBadges img={img} t={t} />
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
