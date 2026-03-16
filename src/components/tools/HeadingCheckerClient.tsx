"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { exportToPDF } from "@/lib/export-utils";
import type { HeadingCheckerTranslation } from "@/lib/i18n/translations/seoTools";

/* ── Types matching the upgraded API ── */

interface Heading {
  level: number;
  text: string;
  index: number;
}

interface Issue {
  type: "error" | "warning" | "info";
  message: string;
}

interface HeadingStats {
  total: number;
  h1Count: number;
  h2Count: number;
  h3Count: number;
  h4Count: number;
  h5Count: number;
  h6Count: number;
  wordCount: number;
  contentToHeadingRatio: string;
}

interface HeadingResult {
  url: string;
  pageTitle: string;
  headings: Heading[];
  issues: Issue[];
  stats: HeadingStats;
  score: number;
}

/* ── Helpers ── */

const LEVEL_COLORS: Record<number, string> = {
  1: "text-accent font-semibold",
  2: "text-heading",
  3: "text-body-strong",
  4: "text-body",
  5: "text-body/80",
  6: "text-body/60",
};

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

function getIssueIcon(type: "error" | "warning" | "info") {
  if (type === "error")
    return (
      <svg className="w-4 h-4 text-red-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      </svg>
    );
  if (type === "warning")
    return (
      <svg className="w-4 h-4 text-yellow-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    );
  return (
    <svg className="w-4 h-4 text-blue-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
  );
}

function getIssueBgClass(type: "error" | "warning" | "info") {
  if (type === "error") return "bg-red-500/10 border-red-500/20";
  if (type === "warning") return "bg-yellow-500/10 border-yellow-500/20";
  return "bg-blue-500/10 border-blue-500/20";
}

function getHeadingStatus(heading: Heading, allHeadings: Heading[]): "ok" | "warning" | "error" {
  if (!heading.text) return "error";
  if (heading.text.length > 70) return "warning";
  if (heading.index > 0) {
    const prevIdx = heading.index - 1;
    const prev = allHeadings[prevIdx];
    if (prev && heading.level > prev.level + 1) return "warning";
  }
  const key = `${heading.level}:${heading.text.toLowerCase()}`;
  const dupes = allHeadings.filter(
    (h) => `${h.level}:${h.text.toLowerCase()}` === key
  );
  if (dupes.length > 1) return "warning";
  return "ok";
}

function headingStatusIcon(status: "ok" | "warning" | "error") {
  if (status === "ok")
    return (
      <svg className="w-3.5 h-3.5 text-green-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    );
  if (status === "warning")
    return (
      <svg className="w-3.5 h-3.5 text-yellow-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    );
  return (
    <svg className="w-3.5 h-3.5 text-red-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
  );
}

/* ── Score Badge Component ── */

function ScoreBadge({ score }: { score: number }) {
  const grade = getScoreGrade(score);
  return (
    <div className={`flex flex-col items-center justify-center w-16 h-16 rounded-xl border ${getScoreBg(score)}`}>
      <span className={`text-lg font-semibold ${getScoreColor(score)}`}>{score}</span>
      <span className={`text-[10px] font-medium ${getScoreColor(score)} opacity-80`}>{grade}</span>
    </div>
  );
}

/* ── Stats Bar Chart ── */

function StatsBarChart({ stats }: { stats: HeadingStats }) {
  const counts = [
    { label: "H1", count: stats.h1Count, color: "bg-accent" },
    { label: "H2", count: stats.h2Count, color: "bg-purple-400" },
    { label: "H3", count: stats.h3Count, color: "bg-blue-400" },
    { label: "H4", count: stats.h4Count, color: "bg-cyan-400" },
    { label: "H5", count: stats.h5Count, color: "bg-teal-400" },
    { label: "H6", count: stats.h6Count, color: "bg-emerald-400" },
  ];
  const max = Math.max(...counts.map((c) => c.count), 1);

  return (
    <div className="space-y-2">
      {counts.map((item) => (
        <div key={item.label} className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-body/60 w-6 text-right">{item.label}</span>
          <div className="flex-1 h-5 bg-white/5 rounded-md overflow-hidden relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.max((item.count / max) * 100, item.count > 0 ? 8 : 0)}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`h-full ${item.color} rounded-md`}
            />
          </div>
          <span className="text-xs font-mono text-body w-6 text-right">{item.count}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Keyword Highlighter ── */

function highlightKeyword(text: string, keyword: string): React.ReactNode {
  if (!keyword) return text;
  const lowerText = text.toLowerCase();
  const lowerKw = keyword.toLowerCase();
  const idx = lowerText.indexOf(lowerKw);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-accent/30 text-heading rounded px-0.5">{text.slice(idx, idx + keyword.length)}</mark>
      {text.slice(idx + keyword.length)}
    </>
  );
}

/* ── Heading Tree Renderer (reusable for both main and competitor) ── */

function HeadingTree({
  headings,
  keyword,
  compact = false,
}: {
  headings: Heading[];
  keyword: string;
  compact?: boolean;
}) {
  if (headings.length === 0) {
    return <p className="text-xs text-body/60 italic">-</p>;
  }

  return (
    <div className="space-y-0.5">
      {headings.map((h, j) => {
        const status = getHeadingStatus(h, headings);
        const indent = (h.level - 1) * (compact ? 14 : 20);
        const containsKw = keyword && h.text.toLowerCase().includes(keyword.toLowerCase());

        return (
          <div
            key={j}
            className={`flex items-center gap-2 ${compact ? "py-1 px-1.5" : "py-1.5 px-2"} rounded-lg transition-colors ${
              containsKw ? "bg-accent/10" : "hover:bg-white/[0.03]"
            }`}
            style={{ paddingLeft: `${indent + 8}px` }}
          >
            {h.level > 1 && (
              <span
                className="border-l-2 border-b-2 border-white/10 rounded-bl-sm w-3 h-3 shrink-0"
                style={{ marginLeft: "-12px" }}
              />
            )}
            {headingStatusIcon(status)}
            <span className={`${compact ? "text-[9px]" : "text-[10px]"} font-mono text-body/40 shrink-0 w-6`}>
              H{h.level}
            </span>
            <span
              className={`${compact ? "text-xs" : "text-sm"} ${LEVEL_COLORS[h.level]} ${
                !h.text ? "italic text-white/20" : ""
              }`}
            >
              {h.text
                ? keyword
                  ? highlightKeyword(h.text, keyword)
                  : h.text
                : "(empty)"}
            </span>
            {h.text.length > 70 && (
              <span className="text-[10px] text-yellow-400/60 shrink-0">
                ({h.text.length} chars)
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ── Export Helpers ── */

function generateMarkdown(result: HeadingResult): string {
  const lines: string[] = [`# Heading Structure: ${result.url}`, ""];
  for (const h of result.headings) {
    const prefix = "#".repeat(h.level);
    lines.push(`${prefix} ${h.text || "(empty)"}`);
  }
  return lines.join("\n");
}

function generateCsv(results: HeadingResult[]): string {
  const rows: string[] = ["URL,Level,Heading Text,Score"];
  for (const r of results) {
    for (const h of r.headings) {
      const escaped = h.text.replace(/"/g, '""');
      rows.push(`"${r.url}",H${h.level},"${escaped}",${r.score}`);
    }
  }
  return rows.join("\n");
}

function downloadFile(content: string, filename: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ── Main Component ── */

type TabType = "tree" | "issues" | "stats";

export default function HeadingCheckerClient({ t }: { t: HeadingCheckerTranslation }) {
  const [urls, setUrls] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<HeadingResult[] | null>(null);
  const [activeTab, setActiveTab] = useState<Record<number, TabType>>({});
  const [selectedResult, setSelectedResult] = useState<number>(0);
  const [keyword, setKeyword] = useState("");
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  // Competitor comparison state
  const [competitorUrl, setCompetitorUrl] = useState("");
  const [competitorResult, setCompetitorResult] = useState<HeadingResult | null>(null);
  const [competitorLoading, setCompetitorLoading] = useState(false);

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
    setSelectedResult(0);
    setCompetitorResult(null);

    try {
      const res = await fetch("/api/heading-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ urls: normalized }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setResults(data.results);
      const tabs: Record<number, TabType> = {};
      data.results.forEach((_: HeadingResult, i: number) => { tabs[i] = "tree"; });
      setActiveTab(tabs);
    } catch {
      setError(t.errorFetch);
    } finally {
      setLoading(false);
    }
  };

  // Competitor comparison
  const handleCompare = async () => {
    if (!competitorUrl.trim()) return;
    const normalized = /^https?:\/\//i.test(competitorUrl.trim())
      ? competitorUrl.trim()
      : "https://" + competitorUrl.trim();
    try { new URL(normalized); } catch { return; }

    setCompetitorLoading(true);
    setCompetitorResult(null);
    try {
      const res = await fetch("/api/heading-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ urls: [normalized] }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        setCompetitorResult(data.results[0]);
      }
    } catch {
      // silently fail competitor fetch
    } finally {
      setCompetitorLoading(false);
    }
  };

  const handleCopyMarkdown = useCallback(
    (idx: number) => {
      if (!results) return;
      const md = generateMarkdown(results[idx]);
      navigator.clipboard.writeText(md).then(() => {
        setCopiedIdx(idx);
        setTimeout(() => setCopiedIdx(null), 2000);
      });
    },
    [results]
  );

  const handleExportMarkdown = useCallback(
    (idx: number) => {
      if (!results) return;
      const md = generateMarkdown(results[idx]);
      const host = new URL(results[idx].url).hostname.replace(/\./g, "_");
      downloadFile(md, `headings_${host}.md`, "text/markdown");
    },
    [results]
  );

  const handleExportCsv = useCallback(() => {
    if (!results) return;
    downloadFile(generateCsv(results), "heading_audit.csv", "text/csv");
  }, [results]);

  // Computed values
  const totalIssues = results?.reduce((sum, r) => sum + r.issues.length, 0) ?? 0;
  const avgScore = results
    ? Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length)
    : 0;

  const isBulk = results && results.length > 1;
  const activeResult = results ? results[selectedResult] : null;

  // Keyword match count for active result
  const keywordMatches = useMemo(() => {
    if (!activeResult || !keyword) return 0;
    const lk = keyword.toLowerCase();
    return activeResult.headings.filter((h) => h.text.toLowerCase().includes(lk)).length;
  }, [activeResult, keyword]);

  // Keyword in H1/H2 check
  const keywordInH1 = useMemo(() => {
    if (!activeResult || !keyword) return false;
    const lk = keyword.toLowerCase();
    return activeResult.headings.some((h) => h.level === 1 && h.text.toLowerCase().includes(lk));
  }, [activeResult, keyword]);

  const keywordInH2Count = useMemo(() => {
    if (!activeResult || !keyword) return 0;
    const lk = keyword.toLowerCase();
    return activeResult.headings.filter((h) => h.level === 2 && h.text.toLowerCase().includes(lk)).length;
  }, [activeResult, keyword]);

  return (
    <div className="w-full max-w-[900px] mx-auto space-y-6">
      {/* Input Card */}
      <div className="rounded-2xl border border-border bg-bg-card p-6 space-y-4">
        <label className="block text-sm font-medium text-heading">{t.urlsLabel}</label>
        <textarea
          value={urls}
          onChange={(e) => setUrls(e.target.value)}
          placeholder={t.urlsPlaceholder}
          rows={5}
          className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-body placeholder:text-white/20 focus:outline-none focus:border-accent/50 font-mono resize-y"
        />

        {/* Keyword + Competitor fields */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <label className="block text-[11px] font-medium text-body mb-1.5">{t.keywordLabel}</label>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder={t.keywordPlaceholder}
              className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-body placeholder:text-white/20 focus:outline-none focus:border-accent/50"
            />
          </div>
          <div className="flex-1">
            <label className="block text-[11px] font-medium text-body mb-1.5">{t.compareLabel}</label>
            <input
              type="text"
              value={competitorUrl}
              onChange={(e) => setCompetitorUrl(e.target.value)}
              placeholder={t.compareUrlPlaceholder}
              className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-body placeholder:text-white/20 focus:outline-none focus:border-accent/50 font-mono"
            />
          </div>
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleCheck}
            disabled={loading}
            className="px-8 py-3 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? t.checkingButton : t.checkButton}
          </button>
        </div>
      </div>

      {/* Results */}
      <AnimatePresence>
        {results && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Top Summary Row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-heading">{results.length}</div>
                <div className="text-xs text-body mt-1">{t.pagesChecked}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className={`text-2xl font-medium ${totalIssues > 0 ? "text-red-400" : "text-green-400"}`}>
                  {totalIssues}
                </div>
                <div className="text-xs text-body mt-1">{t.issuesFound}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 flex flex-col items-center justify-center">
                <div className={`text-2xl font-medium ${getScoreColor(avgScore)}`}>{avgScore}</div>
                <div className="text-xs text-body mt-1">{t.avgScore}</div>
              </div>
            </div>

            {/* Export bar */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={handleExportCsv}
                className="px-4 py-2 rounded-lg border border-border bg-bg-card text-xs font-medium text-body hover:text-heading hover:border-accent/40 transition-colors flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                {t.exportCsv}
              </button>
              <button
                onClick={() => {
                  if (!results) return;
                  exportToPDF({
                    title: "Heading Structure Report",
                    data: results.flatMap((r) =>
                      r.headings.map((h) => ({
                        URL: r.url,
                        Level: `H${h.level}`,
                        Text: h.text || "(empty)",
                        Score: r.score,
                      }))
                    ),
                  });
                }}
                className="px-4 py-2 rounded-lg border border-border bg-bg-card text-xs font-medium text-body hover:text-heading hover:border-accent/40 transition-colors flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13 2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 2v4h4M8 10h4M8 13h6" strokeLinecap="round" />
                </svg>
                PDF
              </button>
              {competitorUrl.trim() && !competitorResult && (
                <button
                  onClick={handleCompare}
                  disabled={competitorLoading}
                  className="px-4 py-2 rounded-lg border border-accent/30 bg-accent/10 text-xs font-medium text-accent hover:bg-accent/20 disabled:opacity-50 transition-colors flex items-center gap-1.5"
                >
                  {competitorLoading ? t.comparingButton : t.compareButton}
                </button>
              )}
            </div>

            {/* Bulk summary table (if >1 URL) */}
            {isBulk && (
              <div className="rounded-2xl border border-border bg-bg-card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left px-4 py-3 text-[11px] font-medium text-body uppercase tracking-wider">URL</th>
                        <th className="text-center px-3 py-3 text-[11px] font-medium text-body uppercase tracking-wider">{t.scoreLabel}</th>
                        <th className="text-center px-3 py-3 text-[11px] font-medium text-body uppercase tracking-wider">H1-H6</th>
                        <th className="text-center px-3 py-3 text-[11px] font-medium text-body uppercase tracking-wider">{t.issuesTab}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((r, i) => (
                        <tr
                          key={i}
                          onClick={() => setSelectedResult(i)}
                          className={`cursor-pointer border-b border-border last:border-0 transition-colors ${
                            selectedResult === i
                              ? "bg-accent/10"
                              : "hover:bg-white/[0.03]"
                          }`}
                        >
                          <td className="px-4 py-3 font-mono text-xs text-body truncate max-w-[300px]">
                            <div className="flex items-center gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${r.issues.length > 0 ? "bg-red-400" : "bg-green-400"}`} />
                              {r.url.replace(/^https?:\/\//, "")}
                            </div>
                          </td>
                          <td className="px-3 py-3 text-center">
                            <span className={`font-medium ${getScoreColor(r.score)}`}>{r.score}</span>
                          </td>
                          <td className="px-3 py-3 text-center text-body">{r.stats.total}</td>
                          <td className="px-3 py-3 text-center">
                            <span className={r.issues.length > 0 ? "text-red-400" : "text-green-400"}>
                              {r.issues.length}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Detail card for selected/single result */}
            {activeResult && (
              <div className="rounded-2xl border border-border bg-bg-card overflow-hidden">
                {/* Card header */}
                <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-border">
                  <div className="flex items-center gap-3 min-w-0">
                    <ScoreBadge score={activeResult.score} />
                    <div className="min-w-0">
                      <div className="text-sm font-mono text-body truncate">
                        {activeResult.url.replace(/^https?:\/\//, "")}
                      </div>
                      {activeResult.pageTitle && (
                        <div className="text-xs text-body/50 mt-0.5 truncate">
                          {t.titleLabel}: {activeResult.pageTitle}
                        </div>
                      )}
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-[11px] text-body/40">{activeResult.stats.total} {t.headingsFound}</span>
                        <span className="text-[11px] text-body/40">{activeResult.stats.wordCount.toLocaleString()} {t.wordsLabel}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleCopyMarkdown(selectedResult)}
                      className="px-3 py-1.5 rounded-lg border border-border text-[11px] font-medium text-body hover:text-heading hover:border-accent/40 transition-colors"
                    >
                      {copiedIdx === selectedResult ? t.copied : t.copyClipboard}
                    </button>
                    <button
                      onClick={() => handleExportMarkdown(selectedResult)}
                      className="px-3 py-1.5 rounded-lg border border-border text-[11px] font-medium text-body hover:text-heading hover:border-accent/40 transition-colors"
                    >
                      {t.exportMarkdown}
                    </button>
                  </div>
                </div>

                {/* Keyword match indicator */}
                {keyword && (
                  <div className="px-5 py-2 border-b border-border bg-white/[0.02]">
                    <div className="flex flex-wrap items-center gap-4">
                      {keywordMatches > 0 ? (
                        <span className="text-xs text-green-400">
                          {keywordMatches} {t.keywordFound}
                        </span>
                      ) : (
                        <span className="text-xs text-red-400">{t.keywordNotFound}</span>
                      )}
                      <span className={`text-[10px] px-2 py-0.5 rounded border ${keywordInH1 ? "bg-green-500/10 border-green-500/20 text-green-400" : "bg-red-500/10 border-red-500/20 text-red-400"}`}>
                        H1: {keywordInH1 ? "Yes" : "No"}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded border ${keywordInH2Count > 0 ? "bg-green-500/10 border-green-500/20 text-green-400" : "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"}`}>
                        H2s: {keywordInH2Count}
                      </span>
                    </div>
                  </div>
                )}

                {/* Tab switcher */}
                <div className="flex border-b border-border">
                  {(["tree", "issues", "stats"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() =>
                        setActiveTab((prev) => ({ ...prev, [selectedResult]: tab }))
                      }
                      className={`px-4 py-2.5 text-xs font-medium transition-colors ${
                        (activeTab[selectedResult] || "tree") === tab
                          ? "text-heading border-b-2 border-accent"
                          : "text-body hover:text-heading"
                      }`}
                    >
                      {tab === "tree"
                        ? t.headingTree
                        : tab === "issues"
                        ? t.issuesTab
                        : t.statsTab}
                      {tab === "issues" && activeResult.issues.length > 0 && (
                        <span className="ml-1.5 px-1.5 py-0.5 rounded-full bg-red-500/20 text-red-400 text-[10px]">
                          {activeResult.issues.length}
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                <div className="p-5">
                  {/* Heading Tree Tab */}
                  {(activeTab[selectedResult] || "tree") === "tree" && (
                    <HeadingTree headings={activeResult.headings} keyword={keyword} />
                  )}

                  {/* Issues Tab */}
                  {(activeTab[selectedResult] || "tree") === "issues" && (
                    <>
                      {activeResult.issues.length === 0 ? (
                        <p className="text-xs text-green-400">{t.noIssues}</p>
                      ) : (
                        <div className="space-y-2">
                          {activeResult.issues.map((issue, j) => (
                            <div
                              key={j}
                              className={`flex items-start gap-3 p-3 rounded-xl border ${getIssueBgClass(issue.type)}`}
                            >
                              {getIssueIcon(issue.type)}
                              <div>
                                <span className="text-xs font-medium text-heading capitalize">
                                  {issue.type}
                                </span>
                                <p className="text-xs text-body mt-0.5">{issue.message}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}

                  {/* Stats Tab */}
                  {(activeTab[selectedResult] || "tree") === "stats" && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-medium text-heading mb-3">
                          Heading Distribution
                        </h4>
                        <StatsBarChart stats={activeResult.stats} />
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="rounded-xl border border-border bg-white/[0.02] p-3 text-center">
                          <div className="text-lg font-medium text-heading">
                            {activeResult.stats.total}
                          </div>
                          <div className="text-[10px] text-body mt-0.5">
                            Total Headings
                          </div>
                        </div>
                        <div className="rounded-xl border border-border bg-white/[0.02] p-3 text-center">
                          <div className="text-lg font-medium text-heading">
                            {activeResult.stats.wordCount.toLocaleString()}
                          </div>
                          <div className="text-[10px] text-body mt-0.5">{t.wordsLabel}</div>
                        </div>
                        <div className="rounded-xl border border-border bg-white/[0.02] p-3 text-center col-span-2">
                          <div className="text-sm font-medium text-heading">
                            {activeResult.stats.contentToHeadingRatio}
                          </div>
                          <div className="text-[10px] text-body mt-0.5">{t.ratioLabel}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Competitor Comparison Panel */}
            {competitorResult && activeResult && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-accent/30 bg-bg-card overflow-hidden"
              >
                <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                  <h3 className="text-sm font-medium text-heading">{t.compareHeadingTree}</h3>
                  <button
                    onClick={() => setCompetitorResult(null)}
                    className="text-xs text-body hover:text-heading transition-colors"
                  >
                    &times;
                  </button>
                </div>

                <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border">
                  {/* Your site */}
                  <div className="flex-1 p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <ScoreBadge score={activeResult.score} />
                      <div>
                        <div className="text-[10px] font-medium text-accent mb-0.5">{t.yourSite}</div>
                        <div className="text-xs font-mono text-body truncate max-w-[200px]">
                          {activeResult.url.replace(/^https?:\/\//, "")}
                        </div>
                        <div className="text-[10px] text-body/40 mt-0.5">
                          {activeResult.stats.total} headings / {activeResult.stats.wordCount.toLocaleString()} words
                        </div>
                      </div>
                    </div>
                    <HeadingTree headings={activeResult.headings} keyword={keyword} compact />
                  </div>

                  {/* Competitor */}
                  <div className="flex-1 p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <ScoreBadge score={competitorResult.score} />
                      <div>
                        <div className="text-[10px] font-medium text-purple-400 mb-0.5">{t.competitor}</div>
                        <div className="text-xs font-mono text-body truncate max-w-[200px]">
                          {competitorResult.url.replace(/^https?:\/\//, "")}
                        </div>
                        <div className="text-[10px] text-body/40 mt-0.5">
                          {competitorResult.stats.total} headings / {competitorResult.stats.wordCount.toLocaleString()} words
                        </div>
                      </div>
                    </div>
                    <HeadingTree headings={competitorResult.headings} keyword={keyword} compact />
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
