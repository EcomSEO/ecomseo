"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExportButtons from "./ExportButtons";
import { exportToPDF } from "@/lib/export-utils";
import type { ThinContentCheckerTranslation } from "@/lib/i18n/translations/seoTools";

type ThinContentStatus = "ok" | "thin" | "empty" | "fetch_error";
type DetectedPageType = "product" | "category" | "blog" | "homepage" | "other";

interface QualitySignals {
  hasHeadings: boolean;
  hasImages: boolean;
  hasLists: boolean;
  hasInternalLinks: boolean;
  paragraphCount: number;
  avgSentenceLength: number | null;
  uniqueWordRatio: number | null;
}

interface ThinContentResult {
  url: string;
  wordCount: number | null;
  status: ThinContentStatus;
  pageType: DetectedPageType;
  threshold: number;
  readingLevel: number | null;
  fleschScore: number | null;
  qualitySignals: QualitySignals;
}

function StatusBadge({ status, t }: { status: ThinContentStatus; t: ThinContentCheckerTranslation }) {
  const config: Record<ThinContentStatus, { label: string; cls: string }> = {
    ok:          { label: t.statusOk,         cls: "bg-green-500/15 text-green-400 border-green-500/20" },
    thin:        { label: t.statusThin,        cls: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20" },
    empty:       { label: t.statusEmpty,       cls: "bg-red-500/15 text-red-400 border-red-500/20" },
    fetch_error: { label: t.statusFetchError,  cls: "bg-white/10 text-body border-white/10" },
  };
  const { label, cls } = config[status] ?? config.fetch_error;
  return (
    <span className={`inline-block px-2.5 py-1 rounded-lg text-xs border font-medium ${cls}`}>
      {label}
    </span>
  );
}

function PageTypeBadge({ type }: { type: DetectedPageType }) {
  const config: Record<DetectedPageType, { label: string; cls: string }> = {
    product:  { label: "Product",  cls: "bg-blue-500/15 text-blue-400 border-blue-500/20" },
    category: { label: "Category", cls: "bg-purple-500/15 text-purple-400 border-purple-500/20" },
    blog:     { label: "Blog",     cls: "bg-green-500/15 text-green-400 border-green-500/20" },
    homepage: { label: "Homepage", cls: "bg-accent/15 text-accent border-accent/20" },
    other:    { label: "Other",    cls: "bg-white/10 text-body border-white/10" },
  };
  const { label, cls } = config[type] ?? config.other;
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-[10px] border font-medium ${cls}`}>
      {label}
    </span>
  );
}

function ReadingLevelBadge({ score }: { score: number | null }) {
  if (score === null) return <span className="text-xs text-white/20">-</span>;
  let color = "text-green-400";
  let label = "Easy";
  if (score < 30) { color = "text-red-400"; label = "Very Hard"; }
  else if (score < 50) { color = "text-yellow-400"; label = "Hard"; }
  else if (score < 60) { color = "text-yellow-400"; label = "Average"; }
  else if (score < 70) { color = "text-green-400"; label = "Easy"; }
  else { color = "text-green-400"; label = "Very Easy"; }
  return (
    <div className="flex items-center gap-1">
      <span className={`text-xs font-medium ${color}`}>{Math.round(score)}</span>
      <span className="text-[10px] text-body">({label})</span>
    </div>
  );
}

function QualitySignalDots({ signals }: { signals: QualitySignals }) {
  const checks = [
    { ok: signals.hasHeadings, label: "Headings" },
    { ok: signals.hasImages, label: "Images" },
    { ok: signals.hasLists, label: "Lists" },
    { ok: signals.hasInternalLinks, label: "Links" },
  ];
  return (
    <div className="flex items-center gap-1">
      {checks.map((c, i) => (
        <span
          key={i}
          title={c.label}
          className={`w-5 h-5 rounded text-[9px] font-medium flex items-center justify-center ${
            c.ok
              ? "bg-green-500/15 text-green-400 border border-green-500/20"
              : "bg-white/5 text-white/20 border border-white/5"
          }`}
        >
          {c.label[0]}
        </span>
      ))}
    </div>
  );
}

function isIssue(status: ThinContentStatus): boolean {
  return status !== "ok";
}

function WordCountChart({ results }: { results: ThinContentResult[] }) {
  const validResults = results.filter((r) => r.wordCount !== null && r.status !== "fetch_error");
  if (validResults.length === 0) return null;

  const maxWords = Math.max(...validResults.map((r) => r.wordCount!));
  const chartMax = Math.max(maxWords, 1000);

  return (
    <div className="rounded-2xl border border-border bg-bg-card p-5 space-y-3">
      <h3 className="text-sm font-medium text-heading">Word Count Distribution</h3>
      <div className="space-y-2">
        {validResults.map((r, i) => {
          const pct = (r.wordCount! / chartMax) * 100;
          const barColor =
            r.status === "ok" ? "bg-green-500" :
            r.status === "thin" ? "bg-yellow-500" :
            "bg-red-500";
          const shortUrl = r.url.replace(/^https?:\/\//, "").slice(0, 40);
          return (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-body w-[150px] truncate shrink-0" title={r.url}>
                {shortUrl}
              </span>
              <div className="flex-1 h-6 bg-white/5 rounded-lg overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.max(pct, 1)}%` }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`h-full rounded-lg ${barColor}`}
                />
                <div
                  className="absolute top-0 bottom-0 w-px bg-white/30"
                  style={{ left: `${(r.threshold / chartMax) * 100}%` }}
                  title={`Threshold: ${r.threshold}`}
                />
              </div>
              <span className="text-xs font-mono text-heading w-[50px] text-right shrink-0">
                {r.wordCount!.toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-2 pt-1">
        <div className="w-px h-3 bg-white/30" />
        <span className="text-[10px] text-body">Vertical line = threshold for page type</span>
      </div>
    </div>
  );
}

export default function ThinContentCheckerClient({ t }: { t: ThinContentCheckerTranslation }) {
  const [urls, setUrls] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<ThinContentResult[] | null>(null);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const handleCheck = async () => {
    const lines = urls
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    if (lines.length === 0) { setError(t.errorEmpty); return; }
    if (lines.length > 50) { setError("Maximum 50 URLs at a time"); return; }

    const normalized = lines.map((l) =>
      /^https?:\/\//i.test(l) ? l : "https://" + l
    );
    for (const u of normalized) {
      try { new URL(u); } catch { setError(t.errorInvalid); return; }
    }

    setError("");
    setLoading(true);
    setResults(null);
    setExpandedIdx(null);

    try {
      const res = await fetch("/api/thin-content-check", {
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

  const totalIssues = results?.filter((r) => isIssue(r.status)).length ?? 0;
  const avgWordCount = useMemo(() => {
    if (!results) return 0;
    const valid = results.filter((r) => r.wordCount !== null);
    if (valid.length === 0) return 0;
    return Math.round(valid.reduce((s, r) => s + r.wordCount!, 0) / valid.length);
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
        <div className="flex items-center justify-between">
          <p className="text-xs text-body">Up to 50 URLs. Page type auto-detected for smart thresholds.</p>
          <button
            onClick={handleCheck}
            disabled={loading}
            className="px-8 py-3 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? t.checkingButton : t.checkButton}
          </button>
        </div>
        {error && <p className="text-red-400 text-sm">{error}</p>}
      </div>

      {/* Results */}
      <AnimatePresence>
        {results && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Export */}
            <div className="flex justify-end">
              <ExportButtons
                onExportPDF={() => {
                  if (!results) return;
                  exportToPDF({
                    title: "Thin Content Check Report",
                    data: results.map((r) => ({
                      URL: r.url,
                      "Word Count": r.wordCount !== null ? r.wordCount : "N/A",
                      "Page Type": r.pageType,
                      "Threshold": r.threshold,
                      "Flesch Score": r.fleschScore !== null ? r.fleschScore : "N/A",
                      Status: r.status,
                    })),
                  });
                }}
              />
            </div>

            {/* Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-heading">{results.length}</div>
                <div className="text-xs text-body mt-1">{t.pagesChecked}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className={`text-2xl font-medium ${totalIssues > 0 ? "text-yellow-400" : "text-green-400"}`}>{totalIssues}</div>
                <div className="text-xs text-body mt-1">{t.issuesFound}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-heading">{avgWordCount.toLocaleString()}</div>
                <div className="text-xs text-body mt-1">Avg. Words</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-accent">
                  {results.filter((r) => r.status === "ok").length}
                </div>
                <div className="text-xs text-body mt-1">Passing</div>
              </div>
            </div>

            {/* Word count chart */}
            <WordCountChart results={results} />

            {/* Table */}
            <div className="rounded-2xl border border-border bg-bg-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="px-4 py-3 text-xs font-medium text-body">{t.urlColumn}</th>
                      <th className="px-4 py-3 text-xs font-medium text-body">Type</th>
                      <th className="px-4 py-3 text-xs font-medium text-body">{t.wordCountColumn}</th>
                      <th className="px-4 py-3 text-xs font-medium text-body">Reading</th>
                      <th className="px-4 py-3 text-xs font-medium text-body">Quality</th>
                      <th className="px-4 py-3 text-xs font-medium text-body">{t.statusColumn}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {results.map((r, i) => (
                      <tr
                        key={i}
                        className={`cursor-pointer hover:bg-white/[0.02] transition-colors ${isIssue(r.status) ? "bg-yellow-500/5" : ""}`}
                        onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
                      >
                        <td className="px-4 py-3 max-w-[200px]">
                          <span className="text-xs font-mono text-body break-all">
                            {r.url.replace(/^https?:\/\//, "").slice(0, 45)}{r.url.length > 50 ? "..." : ""}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <PageTypeBadge type={r.pageType} />
                        </td>
                        <td className="px-4 py-3">
                          {r.wordCount !== null ? (
                            <div className="flex items-center gap-2">
                              <span className={`text-sm font-medium ${r.wordCount < r.threshold ? "text-yellow-400" : "text-heading"}`}>
                                {r.wordCount.toLocaleString()}
                              </span>
                              <span className="text-[10px] text-body">/ {r.threshold}</span>
                            </div>
                          ) : (
                            <span className="text-xs text-white/20 italic">-</span>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          <ReadingLevelBadge score={r.fleschScore} />
                        </td>
                        <td className="px-4 py-3">
                          <QualitySignalDots signals={r.qualitySignals} />
                        </td>
                        <td className="px-4 py-3">
                          <StatusBadge status={r.status} t={t} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Expanded detail */}
            <AnimatePresence>
              {expandedIdx !== null && results[expandedIdx] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  {(() => {
                    const r = results[expandedIdx];
                    const q = r.qualitySignals;
                    return (
                      <div className="rounded-2xl border border-border bg-bg-card p-5 space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-heading truncate flex-1 mr-4">{r.url}</h3>
                          <button onClick={() => setExpandedIdx(null)} className="text-xs text-body hover:text-heading transition-colors">Close</button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          <div className="rounded-lg border border-border p-3">
                            <div className="text-xs text-body mb-1">Word Count</div>
                            <div className="text-lg font-medium text-heading">{r.wordCount?.toLocaleString() ?? "-"}</div>
                            <div className="text-[10px] text-body">Threshold: {r.threshold}</div>
                          </div>
                          <div className="rounded-lg border border-border p-3">
                            <div className="text-xs text-body mb-1">Flesch Score</div>
                            <div className="text-lg font-medium text-heading">{r.fleschScore !== null ? Math.round(r.fleschScore) : "-"}</div>
                            <div className="text-[10px] text-body">Grade: {r.readingLevel !== null ? r.readingLevel.toFixed(1) : "-"}</div>
                          </div>
                          <div className="rounded-lg border border-border p-3">
                            <div className="text-xs text-body mb-1">Paragraphs</div>
                            <div className="text-lg font-medium text-heading">{q.paragraphCount}</div>
                            <div className="text-[10px] text-body">Avg sentence: {q.avgSentenceLength ?? "-"} words</div>
                          </div>
                          <div className="rounded-lg border border-border p-3">
                            <div className="text-xs text-body mb-1">Unique Words</div>
                            <div className="text-lg font-medium text-heading">{q.uniqueWordRatio !== null ? `${Math.round(q.uniqueWordRatio * 100)}%` : "-"}</div>
                            <div className="text-[10px] text-body">Vocabulary diversity</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {[
                            { label: "Headings", ok: q.hasHeadings },
                            { label: "Images", ok: q.hasImages },
                            { label: "Lists", ok: q.hasLists },
                            { label: "Internal Links", ok: q.hasInternalLinks },
                          ].map((sig, j) => (
                            <div key={j} className={`flex items-center gap-2 rounded-lg p-2 border ${sig.ok ? "border-green-500/20 bg-green-500/5" : "border-red-500/20 bg-red-500/5"}`}>
                              <span className={`text-xs ${sig.ok ? "text-green-400" : "text-red-400"}`}>
                                {sig.ok ? "\u2713" : "\u2717"}
                              </span>
                              <span className="text-xs text-body">{sig.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
