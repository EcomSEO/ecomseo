"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { exportToPDF } from "@/lib/export-utils";
import type { MetaTagsCheckerTranslation } from "@/lib/i18n/translations/seoTools";

/* ── Types matching the upgraded API ── */

interface MetaTagResult {
  url: string;
  status: number;
  title: string | null;
  titleLength: number;
  titlePixelWidth: number;
  description: string | null;
  descLength: number;
  descPixelWidth: number;
  robots: string | null;
  canonical: string | null;
  canonicalIsSelfReferencing: boolean;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: string | null;
  ogType: string | null;
  ogUrl: string | null;
  twitterCard: string | null;
  twitterTitle: string | null;
  twitterDescription: string | null;
  twitterImage: string | null;
  viewport: string | null;
  charset: string | null;
  language: string | null;
  allMeta: Array<{ name: string; content: string; property?: string }>;
  issues: string[];
  score: number;
}

type SortField = "url" | "score" | "issues" | "titleLength" | "descLength";
type SortDir = "asc" | "desc";

/* ── Helpers ── */

function getScoreColor(score: number): string {
  if (score >= 90) return "text-green-400";
  if (score >= 70) return "text-yellow-400";
  if (score >= 50) return "text-orange-400";
  return "text-red-400";
}

function getScoreBg(score: number): string {
  if (score >= 90) return "bg-green-500/15 border-green-500/30";
  if (score >= 70) return "bg-yellow-500/15 border-yellow-500/30";
  if (score >= 50) return "bg-orange-500/15 border-orange-500/30";
  return "bg-red-500/15 border-red-500/30";
}

function getScoreGrade(score: number): string {
  if (score >= 95) return "A+";
  if (score >= 90) return "A";
  if (score >= 85) return "A-";
  if (score >= 80) return "B+";
  if (score >= 75) return "B";
  if (score >= 70) return "B-";
  if (score >= 65) return "C+";
  if (score >= 60) return "C";
  if (score >= 55) return "C-";
  if (score >= 50) return "D";
  return "F";
}

const CRITICAL_ISSUES = ["missing_title", "missing_description", "missing_canonical", "missing_viewport"];

function truncateUrl(url: string, max = 40): string {
  const short = url.replace(/^https?:\/\//, "");
  return short.length > max ? short.slice(0, max) + "..." : short;
}

function truncate(text: string | null, max: number) {
  if (!text) return <span className="text-white/20 italic">-</span>;
  return text.length > max ? text.slice(0, max) + "..." : text;
}

/* ── Pixel Progress Bar ── */

function PixelProgressBar({
  value,
  max,
  optimalMin,
  optimalMax,
  label,
  unit = "px",
}: {
  value: number;
  max: number;
  optimalMin: number;
  optimalMax: number;
  label: string;
  unit?: string;
}) {
  const pct = Math.min((value / max) * 100, 100);
  const optMinPct = (optimalMin / max) * 100;
  const optMaxPct = (optimalMax / max) * 100;
  const isOptimal = value >= optimalMin && value <= optimalMax;
  const barColor = value === 0 ? "bg-red-500" : isOptimal ? "bg-green-500" : "bg-yellow-500";

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-[10px]">
        <span className="text-body/60">{label}</span>
        <span className={`font-mono ${value === 0 ? "text-red-400" : isOptimal ? "text-green-400" : "text-yellow-400"}`}>
          {value}{unit}
        </span>
      </div>
      <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
        {/* Optimal zone indicator */}
        <div
          className="absolute h-full bg-green-500/10 border-x border-green-500/20"
          style={{ left: `${optMinPct}%`, width: `${optMaxPct - optMinPct}%` }}
        />
        {/* Progress bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`h-full rounded-full ${barColor}`}
        />
      </div>
    </div>
  );
}

/* ── Score Badge ── */

function ScoreBadge({ score }: { score: number }) {
  const grade = getScoreGrade(score);
  return (
    <div className={`flex flex-col items-center justify-center w-14 h-14 rounded-xl border ${getScoreBg(score)}`}>
      <span className={`text-base font-semibold ${getScoreColor(score)}`}>{score}</span>
      <span className={`text-[9px] font-medium ${getScoreColor(score)} opacity-80`}>{grade}</span>
    </div>
  );
}

/* ── Issue Badge ── */

function IssueBadge({ label, critical }: { label: string; critical: boolean }) {
  const cls = critical
    ? "bg-red-500/20 text-red-400 border-red-500/30"
    : "bg-yellow-500/15 text-yellow-400 border-yellow-500/25";
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-[10px] border font-medium mr-1 mb-1 ${cls}`}>
      {label}
    </span>
  );
}

/* ── Sort Icon ── */

function SortIcon({ active, dir }: { active: boolean; dir: SortDir }) {
  if (!active) return <span className="text-white/10 ml-1">&#8597;</span>;
  return <span className="text-accent ml-1">{dir === "asc" ? "\u2191" : "\u2193"}</span>;
}

/* ── Suggestions Generator ── */

function generateSuggestions(r: MetaTagResult): string[] {
  const suggestions: string[] = [];
  if (!r.title) {
    suggestions.push("Add a title tag to this page");
  } else {
    if (r.titleLength > 60) suggestions.push(`Title is ${r.titleLength} chars — keep it under 60 characters to avoid truncation`);
    if (r.titlePixelWidth > 600) suggestions.push(`Title is ${r.titlePixelWidth}px wide — exceeds Google's ~600px display limit and will be truncated in SERPs`);
    if (r.titlePixelWidth < 200) suggestions.push("Title is very short — consider making it more descriptive");
    if (r.title && !r.title.includes("|") && !r.title.includes(" - ") && !r.title.includes(" - ")) {
      suggestions.push("Title doesn't appear to contain a brand name separator (| or -)");
    }
  }
  if (!r.description) {
    suggestions.push("Add a meta description to improve click-through rates");
  } else {
    if (r.descLength > 158) suggestions.push(`Description is ${r.descLength} chars — keep it under 158 characters to avoid truncation`);
    if (r.descPixelWidth > 960) suggestions.push(`Description is ${r.descPixelWidth}px wide — exceeds Google's ~960px display limit`);
    if (r.descPixelWidth < 400) suggestions.push("Description is too short to be compelling in SERPs");
  }
  if (!r.ogImage) suggestions.push("Add an OG image for better social media sharing previews");
  if (!r.ogTitle) suggestions.push("Add OG title for social sharing optimization");
  if (!r.ogDescription) suggestions.push("Add OG description for social sharing optimization");
  if (!r.canonical) suggestions.push("Add a canonical tag to prevent duplicate content issues");
  if (!r.viewport) suggestions.push("Add a viewport meta tag for mobile responsiveness");
  if (!r.twitterCard) suggestions.push("Add Twitter Card tags for optimized Twitter sharing");
  if (r.canonical && !r.canonicalIsSelfReferencing) suggestions.push("Canonical tag points to a different URL - verify this is intentional");
  return suggestions;
}

/* ── Meta Tag Detail Row ── */

function MetaRow({ label, value }: { label: string; value: string | null }) {
  return (
    <div className="flex items-start gap-3 py-2 border-b border-border last:border-0">
      <span className="text-[11px] font-medium text-body/60 w-28 shrink-0">{label}</span>
      <span className="text-xs text-body break-all">{value || <span className="text-red-400/60 italic">missing</span>}</span>
    </div>
  );
}

/* ── Main Component ── */

export default function MetaTagsCheckerClient({ t }: { t: MetaTagsCheckerTranslation }) {
  const [urls, setUrls] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<MetaTagResult[] | null>(null);

  // UI state
  const [showOnlyIssues, setShowOnlyIssues] = useState(false);
  const [sortField, setSortField] = useState<SortField>("url");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [compareMode, setCompareMode] = useState(false);
  const [compareSelection, setCompareSelection] = useState<number[]>([]);

  const handleCheck = async () => {
    const lines = urls
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    if (lines.length === 0) { setError(t.errorEmpty); return; }
    if (lines.length > 50) { setError(t.errorTooMany); return; }

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
    setCompareMode(false);
    setCompareSelection([]);

    try {
      const res = await fetch("/api/meta-tags-check", {
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

  // Sorting
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDir("asc");
    }
  };

  // Filtered + sorted results
  const displayResults = useMemo(() => {
    if (!results) return [];
    const filtered = showOnlyIssues ? results.filter((r) => r.issues.length > 0) : results;
    const sorted = [...filtered].sort((a, b) => {
      let cmp = 0;
      switch (sortField) {
        case "url": cmp = a.url.localeCompare(b.url); break;
        case "score": cmp = a.score - b.score; break;
        case "issues": cmp = a.issues.length - b.issues.length; break;
        case "titleLength": cmp = a.titlePixelWidth - b.titlePixelWidth; break;
        case "descLength": cmp = a.descPixelWidth - b.descPixelWidth; break;
      }
      return sortDir === "asc" ? cmp : -cmp;
    });
    return sorted;
  }, [results, showOnlyIssues, sortField, sortDir]);

  // Compare pair
  const comparePair = useMemo(() => {
    if (!results || compareSelection.length !== 2) return null;
    return [results[compareSelection[0]], results[compareSelection[1]]];
  }, [results, compareSelection]);

  const handleCompareToggle = (origIdx: number) => {
    setCompareSelection((prev) => {
      if (prev.includes(origIdx)) return prev.filter((i) => i !== origIdx);
      if (prev.length >= 2) return [prev[1], origIdx];
      return [...prev, origIdx];
    });
  };

  // Issue label map
  const issueLabel = useCallback((issue: string): string => {
    const map: Record<string, string> = {
      missing_title: t.missingTitle,
      missing_description: t.missingDescription,
      title_too_long: t.titleTooLong,
      title_too_short: t.titleTooShort,
      desc_too_long: t.descTooLong,
      desc_too_short: t.descTooShort,
      duplicate_title: t.duplicateTitle,
      duplicate_description: t.duplicateDescription,
      missing_canonical: t.missingCanonical,
      canonical_mismatch: t.canonicalMismatch,
      missing_viewport: t.missingViewport,
      missing_og_title: t.missingOgTitle,
      missing_og_description: t.missingOgDescription,
      missing_og_image: t.missingOgImage,
      no_twitter_card: t.noTwitterCard,
      fetch_error: t.fetchError,
    };
    return map[issue] || issue;
  }, [t]);

  // CSV export
  const exportCsv = () => {
    if (!results) return;
    const header = ["URL", "Score", "Title", "Title Chars", "Title Pixels", "Description", "Desc Chars", "Desc Pixels", "OG Title", "OG Desc", "OG Image", "Twitter Card", "Canonical", "Viewport", "Issues"];
    const rows = results.map((r) => [
      r.url,
      String(r.score),
      r.title ?? "",
      String(r.titleLength),
      String(r.titlePixelWidth),
      r.description ?? "",
      String(r.descLength),
      String(r.descPixelWidth),
      r.ogTitle ?? "",
      r.ogDescription ?? "",
      r.ogImage ?? "",
      r.twitterCard ?? "",
      r.canonical ?? "",
      r.viewport ?? "",
      r.issues.map((i) => issueLabel(i)).join("; "),
    ]);
    const csv = [header, ...rows].map((row) => row.map((c) => `"${c.replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "meta-tags-report.csv";
    a.click();
  };

  // Stats
  const totalIssues = results?.reduce((sum, r) => sum + r.issues.length, 0) ?? 0;
  const avgScore = results ? Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length) : 0;

  /* ── Detail Card for a single result ── */
  const renderDetailCard = (r: MetaTagResult) => {
    const suggestions = generateSuggestions(r);
    return (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className="border-t border-border bg-white/[0.02]"
      >
        <div className="p-5 space-y-5">
          {/* Top row: Score + Pixel & Char bars */}
          <div className="flex items-start gap-5">
            <ScoreBadge score={r.score} />
            <div className="flex-1 space-y-3">
              <PixelProgressBar value={r.titleLength} max={70} optimalMin={30} optimalMax={60} label={`${t.titleColumn} Characters (max 60)`} />
              <PixelProgressBar value={r.titlePixelWidth} max={700} optimalMin={200} optimalMax={600} label={`${t.titleColumn} ${t.pixelWidth} (max 600px)`} />
              <PixelProgressBar value={r.descLength} max={180} optimalMin={70} optimalMax={158} label={`${t.descriptionColumn} Characters (max 158)`} />
              <PixelProgressBar value={r.descPixelWidth} max={1100} optimalMin={400} optimalMax={960} label={`${t.descriptionColumn} ${t.pixelWidth} (max 960px)`} />
            </div>
          </div>

          {/* Title & Description full text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border bg-white/[0.02] p-3">
              <div className="text-[10px] font-medium text-body/50 mb-1">{t.titleColumn}</div>
              <div className="text-xs text-heading break-all">{r.title || <span className="text-red-400/60 italic">missing</span>}</div>
              <div className={`text-[10px] mt-1 font-mono ${r.titleLength > 60 ? "text-yellow-400" : "text-body/40"}`}>
                {r.titleLength}/60 chars &middot; {r.titlePixelWidth}/600px
              </div>
            </div>
            <div className="rounded-xl border border-border bg-white/[0.02] p-3">
              <div className="text-[10px] font-medium text-body/50 mb-1">{t.descriptionColumn}</div>
              <div className="text-xs text-body break-all">{r.description || <span className="text-red-400/60 italic">missing</span>}</div>
              <div className={`text-[10px] mt-1 font-mono ${r.descLength > 158 ? "text-yellow-400" : "text-body/40"}`}>
                {r.descLength}/158 chars &middot; {r.descPixelWidth}/960px
              </div>
            </div>
          </div>

          {/* OG Tags */}
          <div className="rounded-xl border border-border bg-white/[0.02] p-4 space-y-2">
            <div className="text-xs font-medium text-heading mb-2">{t.ogTags}</div>
            <MetaRow label="OG Title" value={r.ogTitle} />
            <MetaRow label="OG Description" value={r.ogDescription} />
            <MetaRow label="OG Type" value={r.ogType} />
            <MetaRow label="OG URL" value={r.ogUrl} />
            {r.ogImage && (
              <div className="mt-2">
                <div className="text-[10px] text-body/50 mb-1">OG Image Preview</div>
                <div className="rounded-lg overflow-hidden border border-border max-w-[300px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.ogImage} alt="OG Image" className="w-full h-auto" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                </div>
                <div className="text-[10px] text-body/40 mt-1 break-all">{r.ogImage}</div>
              </div>
            )}
            {!r.ogImage && <MetaRow label="OG Image" value={null} />}
          </div>

          {/* Twitter Card */}
          <div className="rounded-xl border border-border bg-white/[0.02] p-4 space-y-2">
            <div className="text-xs font-medium text-heading mb-2">{t.twitterTags}</div>
            <MetaRow label="Card Type" value={r.twitterCard} />
            <MetaRow label="Twitter Title" value={r.twitterTitle} />
            <MetaRow label="Twitter Desc" value={r.twitterDescription} />
            {r.twitterImage && (
              <div className="mt-2">
                <div className="text-[10px] text-body/50 mb-1">Twitter Image</div>
                <div className="rounded-lg overflow-hidden border border-border max-w-[300px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.twitterImage} alt="Twitter Image" className="w-full h-auto" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                </div>
              </div>
            )}
            {!r.twitterImage && <MetaRow label="Twitter Image" value={null} />}
          </div>

          {/* Technical Tags */}
          <div className="rounded-xl border border-border bg-white/[0.02] p-4 space-y-2">
            <div className="text-xs font-medium text-heading mb-2">{t.technicalTags}</div>
            <MetaRow label={t.canonical} value={r.canonical} />
            {r.canonical && (
              <div className="pl-[7.75rem] -mt-1">
                <span className={`text-[10px] ${r.canonicalIsSelfReferencing ? "text-green-400/70" : "text-yellow-400/70"}`}>
                  {r.canonicalIsSelfReferencing ? t.selfReferencing : t.canonicalMismatch}
                </span>
              </div>
            )}
            <MetaRow label={t.robots} value={r.robots} />
            <MetaRow label={t.viewport} value={r.viewport} />
            <MetaRow label={t.charset} value={r.charset} />
            <MetaRow label={t.language} value={r.language} />
            <MetaRow label={t.httpStatus} value={String(r.status)} />
          </div>

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4">
              <div className="text-xs font-medium text-yellow-400 mb-2">Suggestions</div>
              <ul className="space-y-1.5">
                {suggestions.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-body">
                    <svg className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  /* ── Side-by-side Comparison ── */
  const renderComparison = () => {
    if (!comparePair) return null;
    const [a, b] = comparePair;

    const renderSide = (r: MetaTagResult) => (
      <div className="flex-1 min-w-0 space-y-3">
        <div className="flex items-center gap-2">
          <ScoreBadge score={r.score} />
          <div className="min-w-0">
            <div className="text-xs font-mono text-body truncate">{truncateUrl(r.url, 50)}</div>
            <div className="text-[10px] text-body/40 mt-0.5">{t.httpStatus}: {r.status}</div>
          </div>
        </div>
        <PixelProgressBar value={r.titleLength} max={70} optimalMin={30} optimalMax={60} label={`${t.titleColumn} (${r.titleLength}/60ch)`} />
        <PixelProgressBar value={r.titlePixelWidth} max={700} optimalMin={200} optimalMax={600} label={`${t.titleColumn} (${r.titlePixelWidth}/600px)`} />
        <PixelProgressBar value={r.descLength} max={180} optimalMin={70} optimalMax={158} label={`${t.descriptionColumn} (${r.descLength}/158ch)`} />
        <PixelProgressBar value={r.descPixelWidth} max={1100} optimalMin={400} optimalMax={960} label={`${t.descriptionColumn} (${r.descPixelWidth}/960px)`} />
        <div className="space-y-1 text-xs">
          <div><span className="text-body/50">{t.titleColumn}:</span> <span className="text-heading">{r.title || "-"}</span></div>
          <div><span className="text-body/50">{t.descriptionColumn}:</span> <span className="text-body">{truncate(r.description, 120)}</span></div>
          <div><span className="text-body/50">{t.canonical}:</span> <span className="text-body">{r.canonical || "-"}</span></div>
          <div><span className="text-body/50">OG Title:</span> <span className="text-body">{r.ogTitle || "-"}</span></div>
          <div><span className="text-body/50">OG Image:</span> <span className="text-body">{r.ogImage ? "Yes" : "-"}</span></div>
          <div><span className="text-body/50">Twitter Card:</span> <span className="text-body">{r.twitterCard || "-"}</span></div>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {r.issues.filter((iss) => iss !== "fetch_error").map((issue, j) => (
            <IssueBadge key={j} label={issueLabel(issue)} critical={CRITICAL_ISSUES.includes(issue)} />
          ))}
          {r.issues.length === 0 && <span className="text-[10px] text-green-400">{t.goodLength}</span>}
        </div>
      </div>
    );

    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-accent/30 bg-bg-card p-5 space-y-4"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-heading">{t.compareTitle}</h3>
          <button
            onClick={() => { setCompareMode(false); setCompareSelection([]); }}
            className="text-xs text-body hover:text-heading transition-colors"
          >
            {t.closeComparison}
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          {renderSide(a)}
          <div className="hidden md:block w-px bg-border shrink-0" />
          <div className="block md:hidden h-px bg-border" />
          {renderSide(b)}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="w-full max-w-[900px] mx-auto space-y-6">
      {/* Input Card */}
      <div className="rounded-2xl border border-border bg-bg-card p-6 space-y-4">
        <label className="block text-sm font-medium text-heading">{t.urlsLabel}</label>
        <textarea
          value={urls}
          onChange={(e) => setUrls(e.target.value)}
          placeholder={t.urlsPlaceholder}
          rows={6}
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
            {/* Summary Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-heading">{results.length}</div>
                <div className="text-xs text-body mt-1">{t.pagesChecked}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className={`text-2xl font-medium ${totalIssues > 0 ? "text-red-400" : "text-green-400"}`}>{totalIssues}</div>
                <div className="text-xs text-body mt-1">{t.issuesFound}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 flex flex-col items-center justify-center">
                <div className={`text-2xl font-medium ${getScoreColor(avgScore)}`}>{avgScore}</div>
                <div className="text-xs text-body mt-1">{t.avgScore}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 flex flex-col items-center justify-center">
                <div className="text-2xl font-medium text-heading">{getScoreGrade(avgScore)}</div>
                <div className="text-xs text-body mt-1">Grade</div>
              </div>
            </div>

            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-3">
              <label className="flex items-center gap-2 text-xs text-body cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={showOnlyIssues}
                  onChange={(e) => setShowOnlyIssues(e.target.checked)}
                  className="rounded border-border accent-accent w-3.5 h-3.5"
                />
                {t.showOnlyIssues}
              </label>
              <div className="flex-1" />
              {results.length > 1 && (
                <button
                  onClick={() => { setCompareMode(!compareMode); if (compareMode) setCompareSelection([]); }}
                  className={`px-4 py-2 rounded-lg border text-xs font-medium transition-colors ${
                    compareMode
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border bg-bg-card text-body hover:text-heading hover:border-accent/30"
                  }`}
                >
                  {t.compareMode}
                </button>
              )}
              <button
                onClick={exportCsv}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-bg-card text-xs font-medium text-body hover:text-heading hover:border-accent/30 transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {t.exportCsv}
              </button>
              <button
                onClick={() => {
                  if (!results) return;
                  exportToPDF({
                    title: "Meta Tags Check Report",
                    data: results.map((r) => ({
                      URL: r.url,
                      Score: r.score,
                      Title: r.title ?? "-",
                      "Title Px": r.titlePixelWidth,
                      Description: (r.description ?? "-").slice(0, 80),
                      "Desc Px": r.descPixelWidth,
                      Issues: r.issues.map((i) => issueLabel(i)).join(", ") || "None",
                    })),
                  });
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-bg-card text-xs font-medium text-body hover:text-heading hover:border-accent/30 transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12V4a1 1 0 011-1h4l4 4v5a1 1 0 01-1 1H5a1 1 0 01-1-1z" />
                  <path d="M9 3v4h4" />
                  <path d="M7 10v2M9 9v3M11 10v2" />
                </svg>
                PDF
              </button>
            </div>

            {/* Compare instruction */}
            {compareMode && compareSelection.length < 2 && (
              <div className="text-xs text-accent/80 text-center py-2">
                {t.compareSelect} ({compareSelection.length}/2)
              </div>
            )}

            {/* Comparison panel */}
            {comparePair && renderComparison()}

            {/* Sortable Results Table */}
            <div className="rounded-2xl border border-border bg-bg-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {compareMode && <th className="px-3 py-3 w-10"></th>}
                      <th className="px-4 py-3 text-[11px] font-medium text-body cursor-pointer select-none" onClick={() => handleSort("url")}>
                        {t.urlColumn}<SortIcon active={sortField === "url"} dir={sortDir} />
                      </th>
                      <th className="px-3 py-3 text-[11px] font-medium text-body text-center cursor-pointer select-none whitespace-nowrap" onClick={() => handleSort("score")}>
                        {t.scoreColumn}<SortIcon active={sortField === "score"} dir={sortDir} />
                      </th>
                      <th className="px-3 py-3 text-[11px] font-medium text-body cursor-pointer select-none whitespace-nowrap" onClick={() => handleSort("titleLength")}>
                        {t.titleColumn} <span className="text-body/40 font-normal">(ch/px)</span><SortIcon active={sortField === "titleLength"} dir={sortDir} />
                      </th>
                      <th className="px-3 py-3 text-[11px] font-medium text-body cursor-pointer select-none whitespace-nowrap" onClick={() => handleSort("descLength")}>
                        {t.descriptionColumn} <span className="text-body/40 font-normal">(ch/px)</span><SortIcon active={sortField === "descLength"} dir={sortDir} />
                      </th>
                      <th className="px-3 py-3 text-[11px] font-medium text-body text-center cursor-pointer select-none" onClick={() => handleSort("issues")}>
                        {t.issuesColumn}<SortIcon active={sortField === "issues"} dir={sortDir} />
                      </th>
                      <th className="px-3 py-3 w-10"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {displayResults.map((r) => {
                      const origIdx = results.indexOf(r);
                      const isExpanded = expandedIdx === origIdx;
                      const isSelected = compareSelection.includes(origIdx);

                      return (
                        <tr key={origIdx} className="group">
                          <td colSpan={compareMode ? 7 : 6} className="p-0">
                            <div
                              className={`flex items-center cursor-pointer transition-colors ${
                                isExpanded ? "bg-white/[0.03]" : r.issues.length > 0 ? "bg-red-500/[0.03] hover:bg-red-500/[0.05]" : "hover:bg-white/[0.03]"
                              }`}
                              onClick={() => setExpandedIdx(isExpanded ? null : origIdx)}
                            >
                              <table className="w-full"><tbody><tr>
                                {compareMode && (
                                  <td className="px-3 py-3 w-10" onClick={(e) => e.stopPropagation()}>
                                    <input
                                      type="checkbox"
                                      checked={isSelected}
                                      onChange={() => handleCompareToggle(origIdx)}
                                      className="rounded border-border accent-accent w-3.5 h-3.5"
                                    />
                                  </td>
                                )}
                                <td className="px-4 py-3 max-w-[160px]">
                                  <div className="flex items-center gap-2">
                                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${r.issues.length > 0 ? "bg-red-400" : "bg-green-400"}`} />
                                    <span className="text-xs text-body font-mono truncate">{truncateUrl(r.url)}</span>
                                  </div>
                                </td>
                                <td className="px-3 py-3 text-center">
                                  <span className={`text-sm font-semibold ${getScoreColor(r.score)}`}>{r.score}</span>
                                </td>
                                <td className="px-3 py-3 max-w-[220px]">
                                  <div className="space-y-1">
                                    <span className="text-xs text-heading truncate block">{truncate(r.title, 40)}</span>
                                    {/* Char bar */}
                                    <div className="flex items-center gap-1.5">
                                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden flex-1 max-w-[100px]">
                                        <div
                                          className={`h-full rounded-full ${
                                            r.titleLength === 0 ? "bg-red-500" : r.titleLength <= 60 && r.titleLength >= 30 ? "bg-green-500" : "bg-yellow-500"
                                          }`}
                                          style={{ width: `${Math.min((r.titleLength / 70) * 100, 100)}%` }}
                                        />
                                      </div>
                                      <span className={`text-[10px] font-mono whitespace-nowrap ${r.titleLength === 0 ? "text-red-400" : r.titleLength <= 60 ? "text-green-400" : "text-yellow-400"}`}>
                                        {r.titleLength}<span className="text-body/30">/60ch</span>
                                      </span>
                                    </div>
                                    {/* Pixel bar */}
                                    <div className="flex items-center gap-1.5">
                                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden flex-1 max-w-[100px]">
                                        <div
                                          className={`h-full rounded-full ${
                                            r.titlePixelWidth === 0 ? "bg-red-500" : r.titlePixelWidth <= 600 && r.titlePixelWidth >= 200 ? "bg-green-500" : "bg-yellow-500"
                                          }`}
                                          style={{ width: `${Math.min((r.titlePixelWidth / 700) * 100, 100)}%` }}
                                        />
                                      </div>
                                      <span className={`text-[10px] font-mono whitespace-nowrap ${r.titlePixelWidth === 0 ? "text-red-400" : r.titlePixelWidth <= 600 ? "text-green-400" : "text-yellow-400"}`}>
                                        {r.titlePixelWidth}<span className="text-body/30">/600px</span>
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-3 py-3 max-w-[220px]">
                                  <div className="space-y-1">
                                    <span className="text-xs text-body truncate block">{truncate(r.description, 50)}</span>
                                    {/* Char bar */}
                                    <div className="flex items-center gap-1.5">
                                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden flex-1 max-w-[100px]">
                                        <div
                                          className={`h-full rounded-full ${
                                            r.descLength === 0 ? "bg-red-500" : r.descLength <= 158 && r.descLength >= 70 ? "bg-green-500" : "bg-yellow-500"
                                          }`}
                                          style={{ width: `${Math.min((r.descLength / 180) * 100, 100)}%` }}
                                        />
                                      </div>
                                      <span className={`text-[10px] font-mono whitespace-nowrap ${r.descLength === 0 ? "text-red-400" : r.descLength <= 158 ? "text-green-400" : "text-yellow-400"}`}>
                                        {r.descLength}<span className="text-body/30">/158ch</span>
                                      </span>
                                    </div>
                                    {/* Pixel bar */}
                                    <div className="flex items-center gap-1.5">
                                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden flex-1 max-w-[100px]">
                                        <div
                                          className={`h-full rounded-full ${
                                            r.descPixelWidth === 0 ? "bg-red-500" : r.descPixelWidth <= 960 && r.descPixelWidth >= 400 ? "bg-green-500" : "bg-yellow-500"
                                          }`}
                                          style={{ width: `${Math.min((r.descPixelWidth / 1100) * 100, 100)}%` }}
                                        />
                                      </div>
                                      <span className={`text-[10px] font-mono whitespace-nowrap ${r.descPixelWidth === 0 ? "text-red-400" : r.descPixelWidth <= 960 ? "text-green-400" : "text-yellow-400"}`}>
                                        {r.descPixelWidth}<span className="text-body/30">/960px</span>
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-3 py-3 text-center">
                                  {r.issues.length === 0 ? (
                                    <span className="text-xs text-green-400">{t.goodLength}</span>
                                  ) : (
                                    <div className="flex flex-wrap justify-center gap-0.5">
                                      {r.issues.filter((iss) => iss !== "fetch_error").slice(0, 3).map((issue, j) => (
                                        <IssueBadge key={j} label={issueLabel(issue)} critical={CRITICAL_ISSUES.includes(issue)} />
                                      ))}
                                      {r.issues.length > 3 && (
                                        <span className="text-[10px] text-body/40">+{r.issues.length - 3}</span>
                                      )}
                                    </div>
                                  )}
                                </td>
                                <td className="px-3 py-3 w-10">
                                  <svg
                                    className={`w-4 h-4 text-body/30 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                </td>
                              </tr></tbody></table>
                            </div>
                            <AnimatePresence>
                              {isExpanded && renderDetailCard(r)}
                            </AnimatePresence>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
