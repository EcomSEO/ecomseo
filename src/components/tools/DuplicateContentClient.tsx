"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { DuplicateContentTranslation } from "@/lib/i18n/translations/seoTools";
import { exportToPDF } from "@/lib/export-utils";

/* ═══════════════════════ Types ═══════════════════════ */

interface PageInfo {
  url: string;
  wordCount: number;
  title: string;
  canonical: string;
  htmlSize?: number;
  textToHtmlRatio?: number;
  internalLinks?: number;
  externalLinks?: number;
  status?: number;
  isRedirect?: boolean;
  isNoindex?: boolean;
  pageError?: string | null;
  duplicatePct?: number;
  matchPages?: number;
  matchWords?: number;
}

interface PairResult {
  urlA: string;
  urlB: string;
  similarity: number;
  verdict: "duplicate" | "similar" | "unique";
  sharedShingles: number;
  totalShingles: number;
  diffSnippetA: string;
  diffSnippetB: string;
}

interface Cluster {
  urls: string[];
  canonical: string;
}

interface Issue {
  type: string;
  message: string;
  count?: number;
}

// URL list mode result
interface UrlCheckResult {
  pages: PageInfo[];
  pairs: PairResult[];
  matrix: number[][];
  clusters: Cluster[];
}

// Domain crawl mode result
interface SiteCrawlResult {
  mode: "domain";
  domain: string;
  crawledAt: string;
  totalFound: number;
  totalScanned: number;
  normalPages: number;
  redirectPages: number;
  noindexPages: number;
  errorPages: number;
  duplicateContentPct: number;
  commonContentPct: number;
  uniqueContentPct: number;
  avgPageSize: number;
  avgWordCount: number;
  avgTextToHtmlRatio: number;
  avgInternalLinks: number;
  avgExternalLinks: number;
  totalInternalLinks: number;
  totalExternalLinks: number;
  issues: Issue[];
  pages: PageInfo[];
  pairs: PairResult[];
  matrix: number[][];
  clusters: Cluster[];
}

type InputMode = "domain" | "urls";
type ResultTab = "dashboard" | "pages" | "pairs" | "heatmap";
type PageFilter = "all" | "duplicates" | "errors" | "redirects";
type SortKey = "url" | "wordCount" | "htmlSize" | "duplicatePct" | "matchPages" | "internalLinks" | "externalLinks" | "status";

/* ═══════════════════════ SVG Components ═══════════════════════ */

function DonutChart({ segments }: { segments: { label: string; value: number; color: string }[] }) {
  const total = segments.reduce((s, seg) => s + seg.value, 0);
  if (total === 0) return null;

  const radius = 80;
  const strokeWidth = 28;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="flex flex-col items-center gap-4">
      <svg width="220" height="220" viewBox="0 0 220 220">
        <circle cx="110" cy="110" r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={strokeWidth} />
        {segments.map((seg, i) => {
          const pct = seg.value / total;
          const dashLen = circumference * pct;
          const dashOff = circumference * offset;
          offset += pct;
          return (
            <circle
              key={i}
              cx="110"
              cy="110"
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${dashLen} ${circumference - dashLen}`}
              strokeDashoffset={-dashOff}
              strokeLinecap="round"
              transform="rotate(-90 110 110)"
              className="transition-all duration-700"
            />
          );
        })}
        <text x="110" y="105" textAnchor="middle" className="fill-heading text-2xl font-semibold" fontSize="28">
          {segments[0]?.value ?? 0}%
        </text>
        <text x="110" y="128" textAnchor="middle" className="fill-body text-xs" fontSize="12">
          {segments[0]?.label ?? ""}
        </text>
      </svg>
      <div className="flex flex-wrap justify-center gap-4">
        {segments.map((seg, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ background: seg.color }} />
            <span className="text-xs text-body">{seg.label}: <span className="text-heading font-medium">{seg.value}%</span></span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SemiGauge({ value, max, label, unit }: { value: number; max: number; label: string; unit?: string }) {
  const pct = Math.min(value / max, 1);
  const angle = pct * 180;
  const radius = 50;
  const cx = 60;
  const cy = 58;

  // Arc path
  const startX = cx - radius;
  const startY = cy;
  const endAngle = (Math.PI * angle) / 180;
  const endX = cx - radius * Math.cos(endAngle);
  const endY = cy - radius * Math.sin(endAngle);
  const largeArc = angle > 180 ? 1 : 0;

  const color = pct < 0.3 ? "#22c55e" : pct < 0.6 ? "#eab308" : pct < 0.8 ? "#f97316" : "#ef4444";

  return (
    <div className="flex flex-col items-center">
      <svg width="120" height="70" viewBox="0 0 120 70">
        <path
          d={`M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy}`}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {angle > 0 && (
          <path
            d={`M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArc} 1 ${endX} ${endY}`}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            className="transition-all duration-700"
          />
        )}
        <text x={cx} y={cy - 8} textAnchor="middle" className="fill-heading font-semibold" fontSize="16">
          {typeof value === "number" && value % 1 !== 0 ? value.toFixed(1) : value}
          {unit && <tspan className="fill-body" fontSize="10">{unit}</tspan>}
        </text>
      </svg>
      <span className="text-[11px] text-body text-center mt-0.5">{label}</span>
    </div>
  );
}

/* ═══════════════════════ Helpers ═══════════════════════ */

function shortUrl(url: string, maxLen = 40): string {
  const clean = url.replace(/^https?:\/\//, "");
  return clean.length > maxLen ? clean.slice(0, maxLen) + "..." : clean;
}

function similarityBarColor(similarity: number): string {
  if (similarity >= 0.7) return "bg-red-500";
  if (similarity >= 0.4) return "bg-yellow-500";
  return "bg-green-500";
}

function heatmapColor(pct: number): string {
  if (pct >= 90) return "bg-red-600";
  if (pct >= 70) return "bg-red-500/80";
  if (pct >= 50) return "bg-yellow-500/70";
  if (pct >= 30) return "bg-yellow-500/40";
  if (pct >= 10) return "bg-green-500/30";
  return "bg-white/5";
}

function dupColor(pct: number): string {
  if (pct >= 50) return "text-red-400";
  if (pct >= 25) return "text-yellow-400";
  return "text-green-400";
}

function calculateScore(result: SiteCrawlResult): number {
  let score = 100;
  const dup = result.duplicateContentPct;
  if (dup > 30) score -= 25;
  else if (dup > 15) score -= 15;
  else if (dup > 5) score -= 5;
  if (result.avgTextToHtmlRatio < 3) score -= 10;
  if (result.errorPages > result.totalScanned * 0.2) score -= 15;
  if (result.avgWordCount < 300) score -= 10;
  score -= Math.min(result.issues.length * 3, 20);
  return Math.max(0, Math.min(100, score));
}

function scoreColor(score: number): string {
  if (score >= 80) return "text-green-400";
  if (score >= 60) return "text-yellow-400";
  if (score >= 40) return "text-orange-400";
  return "text-red-400";
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

/* ═══════════════════════ Sub-Components ═══════════════════════ */

function VerdictBadge({ verdict, t }: { verdict: PairResult["verdict"]; t: DuplicateContentTranslation }) {
  const config: Record<PairResult["verdict"], { label: string; cls: string }> = {
    duplicate: { label: t.duplicate, cls: "bg-red-500/15 text-red-400 border-red-500/20" },
    similar: { label: t.similar, cls: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20" },
    unique: { label: t.unique, cls: "bg-green-500/15 text-green-400 border-green-500/20" },
  };
  const { label, cls } = config[verdict];
  return (
    <span className={`inline-block px-2.5 py-1 rounded-lg text-xs border font-medium ${cls}`}>
      {label}
    </span>
  );
}

/* ────────── Dashboard Tab ────────── */

function DashboardView({ result }: { result: SiteCrawlResult }) {
  const score = calculateScore(result);

  return (
    <div className="space-y-6">
      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 }}
          className="rounded-2xl border border-border bg-bg-card p-5 text-center">
          <div className="text-3xl font-semibold text-heading">{result.totalScanned}</div>
          <div className="text-xs text-body mt-1.5">Pages Scanned</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          className="rounded-2xl border border-border bg-bg-card p-5 text-center">
          <div className={`text-3xl font-semibold ${result.duplicateContentPct > 30 ? "text-red-400" : result.duplicateContentPct > 15 ? "text-yellow-400" : "text-green-400"}`}>
            {result.duplicateContentPct}%
          </div>
          <div className="text-xs text-body mt-1.5">Duplicate Content</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="rounded-2xl border border-border bg-bg-card p-5 text-center">
          <div className={`text-3xl font-semibold ${result.issues.length > 3 ? "text-red-400" : result.issues.length > 0 ? "text-yellow-400" : "text-green-400"}`}>
            {result.issues.length}
          </div>
          <div className="text-xs text-body mt-1.5">Issues Found</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="rounded-2xl border border-border bg-bg-card p-5 text-center">
          <div className={`text-3xl font-semibold ${scoreColor(score)}`}>{score}</div>
          <div className="text-xs text-body mt-1.5">Site Score</div>
        </motion.div>
      </div>

      {/* Content breakdown + page type */}
      <div className="grid md:grid-cols-2 gap-4">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="rounded-2xl border border-border bg-bg-card p-6">
          <h3 className="text-sm font-medium text-heading mb-5">Content Breakdown</h3>
          <DonutChart segments={[
            { label: "Duplicate", value: result.duplicateContentPct, color: "#ef4444" },
            { label: "Common", value: result.commonContentPct, color: "#eab308" },
            { label: "Unique", value: result.uniqueContentPct, color: "#22c55e" },
          ]} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
          className="rounded-2xl border border-border bg-bg-card p-6">
          <h3 className="text-sm font-medium text-heading mb-5">Page Breakdown</h3>
          <div className="space-y-4">
            {[
              { label: "Normal Pages", value: result.normalPages, color: "bg-green-500", total: result.totalScanned },
              { label: "Redirects", value: result.redirectPages, color: "bg-blue-500", total: result.totalScanned },
              { label: "Noindex", value: result.noindexPages, color: "bg-yellow-500", total: result.totalScanned },
              { label: "Errors", value: result.errorPages, color: "bg-red-500", total: result.totalScanned },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-body">{item.label}</span>
                  <span className="text-heading font-medium">{item.value}</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color} transition-all duration-700`}
                    style={{ width: `${item.total > 0 ? (item.value / item.total) * 100 : 0}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Top Issues */}
      {result.issues.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="rounded-2xl border border-border bg-bg-card p-6">
          <h3 className="text-sm font-medium text-heading mb-4">Top Issues</h3>
          <div className="space-y-2.5">
            {result.issues.map((issue, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-border">
                <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${issue.type === "critical" ? "bg-red-500" : issue.type === "warning" ? "bg-yellow-500" : "bg-blue-500"}`} />
                <span className="text-sm text-body">{issue.message}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Site Metrics */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
        className="rounded-2xl border border-border bg-bg-card p-6">
        <h3 className="text-sm font-medium text-heading mb-5">Site Metrics</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          <SemiGauge value={Math.round(result.avgPageSize / 1024)} max={200} label="Avg Page Size" unit=" KB" />
          <SemiGauge value={result.avgWordCount} max={2000} label="Avg Words/Page" />
          <SemiGauge value={result.avgTextToHtmlRatio} max={50} label="Text:HTML Ratio" unit="%" />
          <SemiGauge value={result.duplicateContentPct} max={100} label="Duplicate %" unit="%" />
          <SemiGauge value={result.avgInternalLinks} max={100} label="Int. Links/Page" />
          <SemiGauge value={result.avgExternalLinks} max={50} label="Ext. Links/Page" />
        </div>
      </motion.div>
    </div>
  );
}

/* ────────── Pages Tab ────────── */

function PagesView({ pages }: { pages: PageInfo[] }) {
  const [filter, setFilter] = useState<PageFilter>("all");
  const [sortKey, setSortKey] = useState<SortKey>("duplicatePct");
  const [sortAsc, setSortAsc] = useState(false);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const filtered = useMemo(() => {
    let list = [...pages];
    switch (filter) {
      case "duplicates": list = list.filter((p) => (p.duplicatePct ?? 0) > 0); break;
      case "errors": list = list.filter((p) => p.pageError); break;
      case "redirects": list = list.filter((p) => p.isRedirect); break;
    }
    list.sort((a, b) => {
      const av = (a as unknown as Record<string, unknown>)[sortKey] ?? 0;
      const bv = (b as unknown as Record<string, unknown>)[sortKey] ?? 0;
      if (typeof av === "string" && typeof bv === "string") return sortAsc ? av.localeCompare(bv) : bv.localeCompare(av);
      return sortAsc ? (av as number) - (bv as number) : (bv as number) - (av as number);
    });
    return list;
  }, [pages, filter, sortKey, sortAsc]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(false); }
  };

  const SortHeader = ({ k, label, className }: { k: SortKey; label: string; className?: string }) => (
    <th
      className={`p-3 text-left text-[11px] font-medium text-body uppercase tracking-wider cursor-pointer hover:text-heading transition-colors ${className ?? ""}`}
      onClick={() => toggleSort(k)}
    >
      {label} {sortKey === k ? (sortAsc ? "\u2191" : "\u2193") : ""}
    </th>
  );

  const filterButtons: { key: PageFilter; label: string }[] = [
    { key: "all", label: `All (${pages.length})` },
    { key: "duplicates", label: `Duplicates (${pages.filter((p) => (p.duplicatePct ?? 0) > 0).length})` },
    { key: "errors", label: `Errors (${pages.filter((p) => p.pageError).length})` },
    { key: "redirects", label: `Redirects (${pages.filter((p) => p.isRedirect).length})` },
  ];

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {filterButtons.map((fb) => (
          <button
            key={fb.key}
            onClick={() => setFilter(fb.key)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filter === fb.key ? "bg-accent text-white" : "bg-white/[0.05] text-body hover:text-heading"
            }`}
          >
            {fb.label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-border bg-bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead className="border-b border-border">
              <tr>
                <SortHeader k="url" label="URL" className="min-w-[200px]" />
                <SortHeader k="status" label="Status" />
                <SortHeader k="wordCount" label="Words" />
                <SortHeader k="htmlSize" label="Size" />
                <SortHeader k="duplicatePct" label="Dup %" />
                <SortHeader k="matchPages" label="Matches" />
                <SortHeader k="internalLinks" label="Int." />
                <SortHeader k="externalLinks" label="Ext." />
              </tr>
            </thead>
            <tbody>
              {filtered.map((page, i) => (
                <tr
                  key={i}
                  className="border-b border-border/50 hover:bg-white/[0.02] cursor-pointer transition-colors"
                  onClick={() => setExpandedRow(expandedRow === i ? null : i)}
                >
                  <td className="p-3">
                    <div className="max-w-[280px]">
                      <div className="font-mono text-body truncate" title={page.url}>{shortUrl(page.url, 45)}</div>
                      {page.title && <div className="text-[10px] text-white/30 truncate mt-0.5">{page.title}</div>}
                    </div>
                  </td>
                  <td className="p-3">
                    {page.isRedirect ? (
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-blue-500/15 text-blue-400 border border-blue-500/20">301</span>
                    ) : page.pageError ? (
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-red-500/15 text-red-400 border border-red-500/20">{page.pageError}</span>
                    ) : page.isNoindex ? (
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-yellow-500/15 text-yellow-400 border border-yellow-500/20">noindex</span>
                    ) : (
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-green-500/15 text-green-400 border border-green-500/20">{page.status || 200}</span>
                    )}
                  </td>
                  <td className="p-3 text-body tabular-nums">{page.wordCount.toLocaleString()}</td>
                  <td className="p-3 text-body tabular-nums">{formatBytes(page.htmlSize ?? 0)}</td>
                  <td className="p-3">
                    <span className={`font-medium tabular-nums ${dupColor(page.duplicatePct ?? 0)}`}>
                      {page.duplicatePct ?? 0}%
                    </span>
                  </td>
                  <td className="p-3 text-body tabular-nums">{page.matchPages ?? 0}</td>
                  <td className="p-3 text-body tabular-nums">{page.internalLinks ?? 0}</td>
                  <td className="p-3 text-body tabular-nums">{page.externalLinks ?? 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ────────── Heatmap Grid ────────── */

function HeatmapGrid({ pages, matrix }: { pages: PageInfo[]; matrix: number[][] }) {
  if (pages.length === 0 || matrix.length === 0) return null;

  // Only show pages that have matrix data
  const mappedPages = pages.filter((_, i) => i < matrix.length);

  return (
    <div className="rounded-2xl border border-border bg-bg-card p-5 overflow-x-auto">
      <h3 className="text-sm font-medium text-heading mb-4">Similarity Matrix</h3>
      <div className="inline-block">
        <table className="text-xs">
          <thead>
            <tr>
              <th className="p-1" />
              {mappedPages.map((p, i) => (
                <th key={i} className="p-1 text-body font-normal">
                  <div className="truncate -rotate-45 origin-bottom-left w-[60px] text-[10px] font-mono" title={p.url}>
                    {shortUrl(p.url, 15)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mappedPages.map((p, i) => (
              <tr key={i}>
                <td className="p-1 text-[10px] font-mono text-body max-w-[100px] truncate" title={p.url}>
                  {shortUrl(p.url, 15)}
                </td>
                {matrix[i]?.map((val, j) => (
                  <td key={j} className="p-0.5">
                    <div
                      className={`w-10 h-10 rounded flex items-center justify-center text-[10px] font-medium ${
                        i === j ? "bg-white/10 text-white/30" : `${heatmapColor(val)} ${val >= 50 ? "text-white" : "text-body"}`
                      }`}
                      title={`${mappedPages[i]?.url} vs ${mappedPages[j]?.url}: ${val}%`}
                    >
                      {i === j ? "-" : `${val}%`}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <span className="text-[10px] text-body">Low</span>
        <div className="flex gap-0.5">
          {["bg-white/5", "bg-green-500/30", "bg-yellow-500/40", "bg-yellow-500/70", "bg-red-500/80", "bg-red-600"].map((c, i) => (
            <div key={i} className={`w-6 h-3 rounded-sm ${c}`} />
          ))}
        </div>
        <span className="text-[10px] text-body">High</span>
      </div>
    </div>
  );
}

/* ────────── Pairs View ────────── */

function PairsView({ pairs, pages, t }: { pairs: PairResult[]; pages: PageInfo[]; t: DuplicateContentTranslation }) {
  const [threshold, setThreshold] = useState(30);
  const [expandedPair, setExpandedPair] = useState<number | null>(null);

  const filtered = useMemo(() => pairs.filter((p) => p.similarity * 100 >= threshold), [pairs, threshold]);

  const wordCountForUrl = (url: string): number => pages.find((p) => p.url === url)?.wordCount ?? 0;

  return (
    <div className="space-y-4">
      {/* Threshold slider */}
      <div className="rounded-xl border border-border bg-bg-card p-4">
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs text-body">Similarity Threshold</label>
          <span className="text-sm font-medium text-heading">{threshold}%</span>
        </div>
        <input
          type="range"
          min={0} max={100}
          value={threshold}
          onChange={(e) => setThreshold(Number(e.target.value))}
          className="w-full accent-accent h-1.5 rounded-full appearance-none bg-white/10 cursor-pointer"
        />
      </div>

      {filtered.length === 0 && (
        <div className="rounded-2xl border border-border bg-bg-card p-8 text-center">
          <p className="text-sm text-body">No pairs above {threshold}% similarity.</p>
        </div>
      )}

      {filtered.map((pair, i) => (
        <div key={i} className="rounded-2xl border border-border bg-bg-card overflow-hidden">
          <div
            className="p-5 space-y-4 cursor-pointer hover:bg-white/[0.01] transition-colors"
            onClick={() => setExpandedPair(expandedPair === i ? null : i)}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <div className="flex-1 min-w-0">
                <span className="text-xs font-mono text-body break-all">{shortUrl(pair.urlA, 55)}</span>
                <div className="text-xs text-white/30 mt-0.5">{t.wordCount}: {wordCountForUrl(pair.urlA).toLocaleString()}</div>
              </div>
              <div className="text-xs font-medium text-white/30 shrink-0 uppercase">{t.vsLabel}</div>
              <div className="flex-1 min-w-0 sm:text-right">
                <span className="text-xs font-mono text-body break-all">{shortUrl(pair.urlB, 55)}</span>
                <div className="text-xs text-white/30 mt-0.5">{t.wordCount}: {wordCountForUrl(pair.urlB).toLocaleString()}</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-body">{t.similarity}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-heading">{Math.round(pair.similarity * 100)}%</span>
                  <VerdictBadge verdict={pair.verdict} t={t} />
                </div>
              </div>
              <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${similarityBarColor(pair.similarity)}`}
                  style={{ width: `${Math.round(pair.similarity * 100)}%` }}
                />
              </div>
            </div>
          </div>

          <AnimatePresence>
            {expandedPair === i && (pair.diffSnippetA || pair.diffSnippetB) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 border-t border-border pt-4 space-y-3">
                  <h4 className="text-xs font-medium text-heading uppercase tracking-wider">Content Difference Preview</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="rounded-lg border border-border bg-bg p-3">
                      <div className="text-[10px] text-body mb-1 uppercase">Page A</div>
                      <p className="text-xs text-body leading-relaxed">{pair.diffSnippetA || "(empty)"}</p>
                    </div>
                    <div className="rounded-lg border border-border bg-bg p-3">
                      <div className="text-[10px] text-body mb-1 uppercase">Page B</div>
                      <p className="text-xs text-body leading-relaxed">{pair.diffSnippetB || "(empty)"}</p>
                    </div>
                  </div>
                  <div className="text-[10px] text-white/30">
                    Shared shingles: {pair.sharedShingles} / {pair.totalShingles}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════ Main Component ═══════════════════════ */

export default function DuplicateContentClient({ t }: { t: DuplicateContentTranslation }) {
  const [inputMode, setInputMode] = useState<InputMode>("domain");
  const [domainInput, setDomainInput] = useState("");
  const [urls, setUrls] = useState("");
  const [loading, setLoading] = useState(false);
  const [scanProgress, setScanProgress] = useState("");
  const [error, setError] = useState("");

  // Results - can be either mode
  const [domainResult, setDomainResult] = useState<SiteCrawlResult | null>(null);
  const [urlResult, setUrlResult] = useState<UrlCheckResult | null>(null);

  const [activeTab, setActiveTab] = useState<ResultTab>("dashboard");

  const hasResults = domainResult !== null || urlResult !== null;
  const isDomainMode = domainResult !== null;

  // Get pages/pairs/matrix/clusters from whichever mode
  const resultPages = useMemo(() => isDomainMode ? domainResult.pages : urlResult?.pages ?? [], [isDomainMode, domainResult, urlResult]);
  const resultPairs = useMemo(() => isDomainMode ? domainResult.pairs : urlResult?.pairs ?? [], [isDomainMode, domainResult, urlResult]);
  const resultMatrix = useMemo(() => isDomainMode ? domainResult.matrix : urlResult?.matrix ?? [], [isDomainMode, domainResult, urlResult]);
  const resultClusters = useMemo(() => isDomainMode ? domainResult.clusters : urlResult?.clusters ?? [], [isDomainMode, domainResult, urlResult]);

  /* ────────── Scan Domain ────────── */
  const handleScanDomain = useCallback(async () => {
    const domain = domainInput.trim();
    if (!domain) { setError("Please enter a domain"); return; }

    setError("");
    setLoading(true);
    setDomainResult(null);
    setUrlResult(null);
    setScanProgress("Discovering pages...");

    try {
      const res = await fetch("/api/duplicate-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Scan failed");
      }

      const data: SiteCrawlResult = await res.json();
      setDomainResult(data);
      setActiveTab("dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Scan failed. Please try again.");
    } finally {
      setLoading(false);
      setScanProgress("");
    }
  }, [domainInput]);

  /* ────────── Check URLs ────────── */
  const handleCheckUrls = useCallback(async () => {
    const lines = urls.split("\n").map((l) => l.trim()).filter(Boolean);
    if (lines.length === 0) { setError(t.errorEmpty); return; }
    if (lines.length < 2) { setError(t.errorTooFew); return; }
    if (lines.length > 20) { setError(t.errorTooMany); return; }

    const normalized = lines.map((l) => (/^https?:\/\//i.test(l) ? l : "https://" + l));
    for (const u of normalized) {
      try { new URL(u); } catch { setError(t.errorInvalid); return; }
    }

    setError("");
    setLoading(true);
    setDomainResult(null);
    setUrlResult(null);

    try {
      const res = await fetch("/api/duplicate-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ urls: normalized }),
      });
      if (!res.ok) throw new Error();
      const data: UrlCheckResult = await res.json();
      setUrlResult(data);
      setActiveTab("pairs");
    } catch {
      setError(t.errorFetch);
    } finally {
      setLoading(false);
    }
  }, [urls, t]);

  /* ────────── Export ────────── */
  const handleExportCSV = useCallback(() => {
    if (!hasResults) return;
    const rows = [
      ["URL", "Title", "Status", "Words", "Size (bytes)", "Duplicate %", "Match Pages", "Internal Links", "External Links"].join(","),
      ...resultPages.map((p) =>
        [
          `"${p.url}"`, `"${(p.title ?? "").replace(/"/g, '""')}"`, p.status ?? "", p.wordCount,
          p.htmlSize ?? 0, p.duplicatePct ?? 0, p.matchPages ?? 0, p.internalLinks ?? 0, p.externalLinks ?? 0,
        ].join(",")
      ),
      "",
      ["URL A", "URL B", "Similarity", "Verdict"].join(","),
      ...resultPairs.map((p) => [`"${p.urlA}"`, `"${p.urlB}"`, Math.round(p.similarity * 100) + "%", p.verdict].join(",")),
    ].join("\n");

    const blob = new Blob([rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `duplicate-content-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }, [hasResults, resultPages, resultPairs]);

  const handleExportPDF = useCallback(() => {
    if (!hasResults) return;
    exportToPDF({
      title: "Duplicate Content Report",
      subtitle: isDomainMode ? domainResult.domain : "URL Comparison",
      score: isDomainMode ? calculateScore(domainResult) : undefined,
      data: resultPages.map((p) => ({
        URL: p.url,
        Title: p.title ?? "",
        Words: p.wordCount,
        "Dup %": `${p.duplicatePct ?? 0}%`,
        Matches: p.matchPages ?? 0,
      })),
    });
  }, [hasResults, isDomainMode, domainResult, resultPages]);

  /* ────────── Tabs config ────────── */
  const tabs: { key: ResultTab; label: string; domainOnly?: boolean }[] = [
    { key: "dashboard", label: "Dashboard", domainOnly: true },
    { key: "pages", label: "Pages" },
    { key: "pairs", label: "Pair Comparison" },
    { key: "heatmap", label: "Heatmap" },
  ];

  const visibleTabs = tabs.filter((tab) => !tab.domainOnly || isDomainMode);

  return (
    <div className="w-full max-w-[1100px] mx-auto space-y-6">
      {/* ─────── Input Section ─────── */}
      <div className="rounded-2xl border border-border bg-bg-card p-6 space-y-5">
        {/* Mode tabs */}
        <div className="flex gap-1 p-1 rounded-xl bg-white/[0.03] border border-border max-w-fit">
          <button
            onClick={() => setInputMode("domain")}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              inputMode === "domain" ? "bg-accent text-white" : "text-body hover:text-heading hover:bg-white/[0.05]"
            }`}
          >
            Scan Domain
          </button>
          <button
            onClick={() => setInputMode("urls")}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              inputMode === "urls" ? "bg-accent text-white" : "text-body hover:text-heading hover:bg-white/[0.05]"
            }`}
          >
            Compare URLs
          </button>
        </div>

        <AnimatePresence mode="wait">
          {inputMode === "domain" ? (
            <motion.div key="domain" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 8 }} transition={{ duration: 0.15 }}
              className="space-y-4"
            >
              <label className="block text-sm font-medium text-heading">Enter domain to scan</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={domainInput}
                  onChange={(e) => setDomainInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !loading && handleScanDomain()}
                  placeholder="example.com"
                  className="flex-1 rounded-xl border border-border bg-bg px-4 py-3.5 text-sm text-body placeholder:text-white/20 focus:outline-none focus:border-accent/50 font-mono"
                />
                <button
                  onClick={handleScanDomain}
                  disabled={loading}
                  className="px-8 py-3.5 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
                >
                  {loading ? "Scanning..." : "Scan Site"}
                </button>
              </div>
              <p className="text-xs text-white/30">We&apos;ll crawl up to 50 pages via sitemap or homepage links and analyze for duplicate content.</p>
            </motion.div>
          ) : (
            <motion.div key="urls" initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: 0.15 }}
              className="space-y-4"
            >
              <label className="block text-sm font-medium text-heading">{t.urlsLabel}</label>
              <textarea
                value={urls}
                onChange={(e) => setUrls(e.target.value)}
                placeholder={t.urlsPlaceholder}
                rows={5}
                className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-body placeholder:text-white/20 focus:outline-none focus:border-accent/50 font-mono resize-y"
              />
              <button
                onClick={handleCheckUrls}
                disabled={loading}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? t.checkingButton : t.checkButton}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        {/* Loading progress */}
        {loading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
              <span className="text-sm text-body">{scanProgress || "Analyzing pages..."}</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                className="h-full bg-accent rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "85%" }}
                transition={{ duration: 30, ease: "linear" }}
              />
            </div>
          </motion.div>
        )}
      </div>

      {/* ─────── Results ─────── */}
      <AnimatePresence>
        {hasResults && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">

            {/* Domain info banner */}
            {isDomainMode && (
              <div className="rounded-xl border border-border bg-bg-card px-5 py-3 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono text-accent">{domainResult.domain}</span>
                  <span className="text-xs text-white/30">Scanned {new Date(domainResult.crawledAt).toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-body">{domainResult.totalFound} found, {domainResult.totalScanned} scanned</span>
                </div>
              </div>
            )}

            {/* Tab bar + export buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex gap-1 p-1 rounded-xl bg-white/[0.03] border border-border">
                {visibleTabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === tab.key ? "bg-accent text-white" : "text-body hover:text-heading hover:bg-white/[0.05]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={handleExportCSV} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.05] text-body hover:text-heading hover:bg-white/[0.08] transition-colors border border-border">
                  Export CSV
                </button>
                <button onClick={handleExportPDF} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.05] text-body hover:text-heading hover:bg-white/[0.08] transition-colors border border-border">
                  Export PDF
                </button>
              </div>
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              {activeTab === "dashboard" && isDomainMode && (
                <motion.div key="dashboard" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.15 }}>
                  <DashboardView result={domainResult} />
                </motion.div>
              )}

              {activeTab === "pages" && (
                <motion.div key="pages" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.15 }}>
                  <PagesView pages={resultPages} />
                </motion.div>
              )}

              {activeTab === "pairs" && (
                <motion.div key="pairs" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.15 }}>
                  <PairsView pairs={resultPairs} pages={resultPages} t={t} />
                </motion.div>
              )}

              {activeTab === "heatmap" && (
                <motion.div key="heatmap" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.15 }}>
                  <HeatmapGrid pages={resultPages} matrix={resultMatrix} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Clusters section (always visible at bottom if exists) */}
            {resultClusters.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h3 className="text-sm font-medium text-heading mb-3">Duplicate Clusters</h3>
                <div className="space-y-4">
                  {resultClusters.map((cluster, ci) => (
                    <div key={ci} className="rounded-2xl border border-yellow-500/30 bg-bg-card p-5 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium text-heading">Cluster {ci + 1}</h4>
                        <span className="text-xs text-body">{cluster.urls.length} pages</span>
                      </div>
                      <div className="space-y-2">
                        {cluster.urls.map((url, ui) => {
                          const page = resultPages.find((p) => p.url === url);
                          const isCanonical = cluster.canonical === url;
                          return (
                            <div key={ui} className={`flex items-center gap-3 p-3 rounded-lg border ${isCanonical ? "border-accent/30 bg-accent/5" : "border-border"}`}>
                              {isCanonical && (
                                <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-medium bg-accent/15 text-accent border border-accent/20">
                                  Canonical
                                </span>
                              )}
                              <div className="flex-1 min-w-0">
                                <span className="text-xs font-mono text-body break-all">{shortUrl(url, 60)}</span>
                                {page && (
                                  <div className="text-[10px] text-white/30 mt-0.5">{page.wordCount.toLocaleString()} words</div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="text-xs text-body">
                        Suggested canonical: <span className="font-mono text-accent">{shortUrl(cluster.canonical, 50)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
