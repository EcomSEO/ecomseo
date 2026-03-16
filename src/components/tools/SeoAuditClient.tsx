"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { exportToPDF } from "@/lib/export-utils";
import type { SeoToolTranslation } from "@/lib/i18n/translations/seoTools";

interface AuditCheck {
  label: string;
  status: "pass" | "warning" | "fail";
  detail: string;
}

interface AuditCategory {
  name: string;
  checks: AuditCheck[];
}

interface AuditResult {
  score: number;
  passed: number;
  warnings: number;
  critical: number;
  categories: AuditCategory[];
  responseTimeMs: number;
  platform: string | null;
  comparisonResult?: AuditResult;
}

function normalizeUrl(raw: string): string {
  let url = raw.trim();
  if (!url) return "";
  if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
  try {
    return new URL(url).href;
  } catch {
    return "";
  }
}

function scoreColor(score: number) {
  if (score >= 80) return "text-emerald-400";
  if (score >= 50) return "text-amber-400";
  return "text-red-400";
}

function scoreBg(score: number) {
  if (score >= 80) return "bg-emerald-400/10 border-emerald-400/20";
  if (score >= 50) return "bg-amber-400/10 border-amber-400/20";
  return "bg-red-400/10 border-red-400/20";
}

function letterGrade(score: number): string {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function gradeColor(score: number): string {
  if (score >= 90) return "text-emerald-400";
  if (score >= 80) return "text-emerald-400";
  if (score >= 70) return "text-amber-400";
  if (score >= 60) return "text-amber-400";
  return "text-red-400";
}

function statusIcon(status: "pass" | "warning" | "fail") {
  if (status === "pass")
    return (
      <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 16 16" fill="none">
        <path d="M3 8.5l3.5 3.5 6.5-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  if (status === "warning")
    return (
      <svg className="w-4 h-4 text-amber-400 shrink-0" viewBox="0 0 16 16" fill="none">
        <path d="M8 5v4M8 11h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.13 2.53L1.53 12.47A1 1 0 002.4 14h11.2a1 1 0 00.87-1.53L8.87 2.53a1 1 0 00-1.74 0z" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  return (
    <svg className="w-4 h-4 text-red-400 shrink-0" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function scoreRingColor(score: number) {
  if (score >= 80) return "#34d399";
  if (score >= 50) return "#fbbf24";
  return "#f87171";
}

function ScoreRing({ score, size = 120 }: { score: number; size?: number }) {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = scoreRingColor(score);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={strokeWidth} className="text-white/5" />
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" className="transition-all duration-1000" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[28px] font-bold" style={{ color }}>{score}</span>
        <span className="text-[10px] text-white/30">/100</span>
      </div>
    </div>
  );
}

function platformColor(platform: string | null): string {
  switch (platform) {
    case "Shopify": return "text-emerald-400 bg-emerald-400/10 border-emerald-400/20";
    case "WooCommerce": return "text-purple-400 bg-purple-400/10 border-purple-400/20";
    case "Magento": return "text-orange-400 bg-orange-400/10 border-orange-400/20";
    case "BigCommerce": return "text-blue-400 bg-blue-400/10 border-blue-400/20";
    case "PrestaShop": return "text-pink-400 bg-pink-400/10 border-pink-400/20";
    case "Wix": return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
    case "Squarespace": return "text-white bg-white/10 border-white/20";
    default: return "text-body bg-white/5 border-border";
  }
}

/* ── Loading Skeleton ────────────────────────────────────── */

function LoadingSkeleton() {
  return (
    <div className="w-full max-w-[900px] mx-auto space-y-8 animate-pulse">
      {/* Score skeleton */}
      <div className="rounded-2xl border border-border bg-bg-card p-8">
        <div className="h-5 w-48 bg-white/10 rounded mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="rounded-xl border border-white/5 bg-white/[0.03] p-5 flex flex-col items-center gap-2">
              <div className="h-3 w-16 bg-white/10 rounded" />
              <div className="h-9 w-14 bg-white/10 rounded" />
            </div>
          ))}
        </div>
      </div>
      {/* Category skeletons */}
      {[...Array(6)].map((_, i) => (
        <div key={i} className="rounded-xl border border-border bg-bg-card p-5 flex items-center gap-4">
          <div className="w-5 h-5 bg-white/10 rounded" />
          <div className="flex-1 h-4 bg-white/10 rounded w-40" />
          <div className="h-4 w-10 bg-white/10 rounded" />
        </div>
      ))}
    </div>
  );
}

/* ── Export Helpers ───────────────────────────────────────── */

function resultsToCsv(result: AuditResult): string {
  const rows = [["Category", "Check", "Status", "Detail"].join(",")];
  for (const cat of result.categories) {
    for (const check of cat.checks) {
      rows.push(
        [
          `"${cat.name}"`,
          `"${check.label}"`,
          check.status,
          `"${check.detail.replace(/"/g, '""')}"`,
        ].join(",")
      );
    }
  }
  return rows.join("\n");
}

function resultsToText(result: AuditResult): string {
  const lines: string[] = [
    `SEO Audit Results - Score: ${result.score}/100 (${letterGrade(result.score)})`,
    `Passed: ${result.passed} | Warnings: ${result.warnings} | Critical: ${result.critical}`,
    "",
  ];
  for (const cat of result.categories) {
    lines.push(`--- ${cat.name.toUpperCase()} ---`);
    for (const check of cat.checks) {
      const icon = check.status === "pass" ? "[PASS]" : check.status === "warning" ? "[WARN]" : "[FAIL]";
      lines.push(`  ${icon} ${check.label}: ${check.detail}`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

/* ── Main Component ──────────────────────────────────────── */

export default function SeoAuditClient({ t }: { t: SeoToolTranslation }) {
  const [url, setUrl] = useState("");
  const [compareUrl, setCompareUrl] = useState("");
  const [showCompare, setShowCompare] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<AuditResult | null>(null);
  const [expandedCats, setExpandedCats] = useState<Set<string>>(new Set());
  const [showOnlyIssues, setShowOnlyIssues] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"primary" | "comparison">("primary");
  const resultsRef = useRef<HTMLDivElement>(null);

  const categoryLabels: Record<string, string> = {
    meta: t.categoryMeta,
    content: t.categoryContent,
    technical: t.categoryTechnical,
    performance: t.categoryPerformance,
    "structured-data": t.categoryStructuredData,
    mobile: t.categoryMobile,
    ecommerce: "Ecommerce SEO",
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    meta: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7h5l2-3h2l2 3h5" /><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 12h8M8 16h5" />
      </svg>
    ),
    content: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    technical: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
    performance: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    "structured-data": (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
    mobile: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><path d="M12 18h.01" />
      </svg>
    ),
    ecommerce: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
      </svg>
    ),
  };

  const toggleCategory = useCallback((name: string) => {
    setExpandedCats((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }, []);

  const handleCopyToClipboard = useCallback(() => {
    if (!result) return;
    navigator.clipboard.writeText(resultsToText(result)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [result]);

  const handleExportCsv = useCallback(() => {
    if (!result) return;
    const csv = resultsToCsv(result);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "seo-audit-results.csv";
    a.click();
    URL.revokeObjectURL(url);
  }, [result]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!url.trim()) {
      setError(t.errorEmpty);
      return;
    }

    const normalized = normalizeUrl(url);
    if (!normalized) {
      setError(t.errorInvalid);
      return;
    }

    setLoading(true);
    try {
      const bodyPayload: Record<string, string> = { url: normalized };
      if (showCompare && compareUrl.trim()) {
        const normalizedComp = normalizeUrl(compareUrl);
        if (normalizedComp) bodyPayload.compareUrl = normalizedComp;
      }

      const res = await fetch("/api/ecommerce-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyPayload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || t.errorFetch);
        return;
      }

      const data: AuditResult = await res.json();
      setResult(data);
      // Expand all categories initially
      setExpandedCats(new Set(data.categories.map((c) => c.name)));
      setShowOnlyIssues(false);
      setActiveTab("primary");
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } catch {
      setError(t.errorFetch);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-12">
      {/* Audit Form */}
      <div className="w-full max-w-[800px] mx-auto rounded-2xl border border-border bg-bg-card p-8 md:p-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-body text-sm mb-2">{t.label}</label>
            <div className="flex gap-3">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={t.placeholder}
                className="flex-1 px-4 py-3 rounded-xl bg-bg border border-border text-heading text-sm placeholder:text-body/50 focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 rounded-xl bg-accent hover:bg-accent/90 text-white font-medium text-sm transition-colors shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" className="opacity-25" />
                      <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-75" />
                    </svg>
                    {t.ctaLoading}
                  </span>
                ) : (
                  t.cta
                )}
              </button>
            </div>
          </div>

          {/* Compare toggle */}
          <div>
            <button
              type="button"
              onClick={() => setShowCompare(!showCompare)}
              className={`flex items-center gap-2 text-xs font-medium transition-colors ${
                showCompare ? "text-accent" : "text-body hover:text-heading"
              }`}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M8 1v14M1 8h14" strokeLinecap="round" />
              </svg>
              Compare with a competitor
            </button>

            <AnimatePresence>
              {showCompare && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pt-3">
                    <input
                      type="text"
                      value={compareUrl}
                      onChange={(e) => setCompareUrl(e.target.value)}
                      placeholder="e.g. competitor-store.com"
                      className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-heading text-sm placeholder:text-body/50 focus:outline-none focus:border-accent transition-colors"
                    />
                    <p className="text-[11px] text-white/30 mt-1.5">
                      Enter a competitor URL for side-by-side SEO comparison
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          {/* Stats row */}
          <div className="flex items-center gap-6 pt-2">
            <span className="text-xs text-white/30 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="8" cy="8" r="6" /><path d="M8 5v3l2 2" strokeLinecap="round" />
              </svg>
              {t.statsTime}
            </span>
            <span className="text-xs text-white/30 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M8 2l1.5 4.5H14l-3.5 3 1.2 4.5L8 11l-3.7 3 1.2-4.5L2 6.5h4.5z" strokeLinejoin="round" />
              </svg>
              {t.statsRating}
            </span>
            <span className="text-xs text-white/30 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M8 1v2M8 13v2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M1 8h2M13 8h2M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" strokeLinecap="round" />
              </svg>
              {t.statsUsers}
            </span>
          </div>
        </form>
      </div>

      {/* Loading Skeleton */}
      {loading && <LoadingSkeleton />}

      {/* Results */}
      <AnimatePresence>
        {result && !loading && (
          <motion.div
            ref={resultsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-[900px] mx-auto space-y-8"
          >
            {/* Platform Badge */}
            {result.platform && (
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium ${platformColor(result.platform)}`}>
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8.5l3.5 3.5 6.5-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {result.platform} Detected
                </span>
              </div>
            )}

            {/* Comparison Tab Switcher */}
            {result.comparisonResult && (
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => { setActiveTab("primary"); setExpandedCats(new Set(result.categories.map((c) => c.name))); }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === "primary"
                      ? "bg-accent/10 border border-accent/30 text-accent"
                      : "border border-border text-body hover:text-heading"
                  }`}
                >
                  Your Site
                </button>
                <span className="text-white/20 text-sm px-2">vs</span>
                <button
                  onClick={() => { setActiveTab("comparison"); setExpandedCats(new Set(result.comparisonResult!.categories.map((c) => c.name))); }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === "comparison"
                      ? "bg-accent/10 border border-accent/30 text-accent"
                      : "border border-border text-body hover:text-heading"
                  }`}
                >
                  Competitor
                </button>
              </div>
            )}

            {/* Side-by-side score comparison */}
            {result.comparisonResult && (
              <div className="rounded-2xl border border-border bg-bg-card p-8">
                <h3 className="text-center text-sm font-medium text-white/40 mb-6">Score Comparison</h3>
                <div className="flex items-center justify-center gap-8 md:gap-16">
                  <div className="flex flex-col items-center gap-2">
                    <ScoreRing score={result.score} size={100} />
                    <span className="text-xs text-white/50">Your Site</span>
                    <span className={`text-lg font-bold ${gradeColor(result.score)}`}>
                      {letterGrade(result.score)}
                    </span>
                    {result.platform && (
                      <span className="text-[10px] text-white/30">{result.platform}</span>
                    )}
                  </div>
                  <div className="text-white/20 text-2xl font-light">vs</div>
                  <div className="flex flex-col items-center gap-2">
                    <ScoreRing score={result.comparisonResult.score} size={100} />
                    <span className="text-xs text-white/50">Competitor</span>
                    <span className={`text-lg font-bold ${gradeColor(result.comparisonResult.score)}`}>
                      {letterGrade(result.comparisonResult.score)}
                    </span>
                    {result.comparisonResult.platform && (
                      <span className="text-[10px] text-white/30">{result.comparisonResult.platform}</span>
                    )}
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center text-xs">
                  <div>
                    <span className="text-white/30">Passed</span>
                    <div className="flex items-center justify-center gap-3 mt-1">
                      <span className="text-emerald-400 font-bold">{result.passed}</span>
                      <span className="text-white/20">vs</span>
                      <span className="text-emerald-400 font-bold">{result.comparisonResult.passed}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-white/30">Warnings</span>
                    <div className="flex items-center justify-center gap-3 mt-1">
                      <span className="text-amber-400 font-bold">{result.warnings}</span>
                      <span className="text-white/20">vs</span>
                      <span className="text-amber-400 font-bold">{result.comparisonResult.warnings}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-white/30">Critical</span>
                    <div className="flex items-center justify-center gap-3 mt-1">
                      <span className="text-red-400 font-bold">{result.critical}</span>
                      <span className="text-white/20">vs</span>
                      <span className="text-red-400 font-bold">{result.comparisonResult.critical}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Score Overview */}
            <div className="rounded-2xl border border-border bg-bg-card p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[20px] font-medium text-heading">{t.resultsTitle}</h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyToClipboard}
                    className="px-3 py-1.5 rounded-lg border border-border text-xs text-body hover:text-heading hover:border-white/20 transition-colors flex items-center gap-1.5"
                  >
                    {copied ? (
                      <>
                        <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8.5l3.5 3.5 6.5-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Copied
                      </>
                    ) : (
                      <>
                        <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                          <rect x="5" y="5" width="8" height="8" rx="1" />
                          <path d="M3 11V3h8" strokeLinecap="round" />
                        </svg>
                        Copy
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleExportCsv}
                    className="px-3 py-1.5 rounded-lg border border-border text-xs text-body hover:text-heading hover:border-white/20 transition-colors flex items-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M8 2v8M5 7l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 11v2a1 1 0 001 1h10a1 1 0 001-1v-2" strokeLinecap="round" />
                    </svg>
                    CSV
                  </button>
                  <button
                    onClick={() => {
                      if (!result) return;
                      exportToPDF({
                        title: "SEO Audit Report",
                        score: result.score,
                        grade: letterGrade(result.score),
                        data: result.categories.flatMap((cat) =>
                          cat.checks.map((check) => ({
                            Category: cat.name,
                            Check: check.label,
                            Status: check.status,
                            Detail: check.detail,
                          }))
                        ),
                        url: url.startsWith("http") ? url : `https://${url}`,
                      });
                    }}
                    className="px-3 py-1.5 rounded-lg border border-border text-xs text-body hover:text-heading hover:border-white/20 transition-colors flex items-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M10 1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4z" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 1v3h3M7 8h2M7 10.5h4" strokeLinecap="round" />
                    </svg>
                    PDF
                  </button>
                </div>
              </div>
              {(() => {
                const dr = activeTab === "comparison" && result.comparisonResult ? result.comparisonResult : result;
                return (
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className={`rounded-xl border p-5 text-center ${scoreBg(dr.score)}`}>
                      <p className="text-xs text-white/40 mb-1">{t.overallScore}</p>
                      <p className={`text-[36px] font-bold ${scoreColor(dr.score)}`}>{dr.score}</p>
                      <p className="text-xs text-white/30">/100</p>
                    </div>
                    <div className={`rounded-xl border p-5 text-center ${scoreBg(dr.score)}`}>
                      <p className="text-xs text-white/40 mb-1">Grade</p>
                      <p className={`text-[36px] font-bold ${gradeColor(dr.score)}`}>{letterGrade(dr.score)}</p>
                    </div>
                    <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-5 text-center">
                      <p className="text-xs text-white/40 mb-1">{t.passedChecks}</p>
                      <p className="text-[28px] font-bold text-emerald-400">{dr.passed}</p>
                    </div>
                    <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-5 text-center">
                      <p className="text-xs text-white/40 mb-1">{t.warnings}</p>
                      <p className="text-[28px] font-bold text-amber-400">{dr.warnings}</p>
                    </div>
                    <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5 text-center">
                      <p className="text-xs text-white/40 mb-1">{t.criticalIssues}</p>
                      <p className="text-[28px] font-bold text-red-400">{dr.critical}</p>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Toolbar: filter toggle */}
            <div className="flex items-center justify-between">
              <p className="text-xs text-body">
                {(activeTab === "comparison" && result.comparisonResult ? result.comparisonResult : result).passed + (activeTab === "comparison" && result.comparisonResult ? result.comparisonResult : result).warnings + (activeTab === "comparison" && result.comparisonResult ? result.comparisonResult : result).critical} checks across {(activeTab === "comparison" && result.comparisonResult ? result.comparisonResult : result).categories.length} categories
                {(activeTab === "comparison" && result.comparisonResult ? result.comparisonResult : result).responseTimeMs ? ` (analyzed in ${((activeTab === "comparison" && result.comparisonResult ? result.comparisonResult : result).responseTimeMs / 1000).toFixed(1)}s)` : ""}
              </p>
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <span className="text-xs text-body">Show only issues</span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={showOnlyIssues}
                  onClick={() => setShowOnlyIssues((v) => !v)}
                  className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${showOnlyIssues ? "bg-accent" : "bg-white/10"}`}
                >
                  <span
                    className={`inline-block h-3.5 w-3.5 rounded-full bg-white transition-transform ${showOnlyIssues ? "translate-x-[18px]" : "translate-x-[3px]"}`}
                  />
                </button>
              </label>
            </div>

            {/* Category Breakdown */}
            <div className="space-y-3">
              {(activeTab === "comparison" && result.comparisonResult ? result.comparisonResult : result).categories.map((cat) => {
                const passCount = cat.checks.filter((c) => c.status === "pass").length;
                const catScore = Math.round((passCount / cat.checks.length) * 100);
                const isExpanded = expandedCats.has(cat.name);

                const visibleChecks = showOnlyIssues
                  ? cat.checks.filter((c) => c.status !== "pass")
                  : cat.checks;

                const warnCount = cat.checks.filter((c) => c.status === "warning").length;
                const failCount = cat.checks.filter((c) => c.status === "fail").length;

                // If filtering and no issues, still show the category header but collapsed
                if (showOnlyIssues && visibleChecks.length === 0) {
                  return (
                    <div key={cat.name} className="rounded-xl border border-border bg-bg-card overflow-hidden opacity-50">
                      <div className="w-full flex items-center gap-4 p-5 text-left">
                        <span className="text-accent">{categoryIcons[cat.name]}</span>
                        <span className="flex-1 text-sm font-medium text-heading">
                          {categoryLabels[cat.name] || cat.name}
                        </span>
                        <span className="text-xs text-emerald-400/70">All passed</span>
                        <span className={`text-sm font-bold ${scoreColor(catScore)}`}>
                          {catScore}%
                        </span>
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={cat.name} className="rounded-xl border border-border bg-bg-card overflow-hidden">
                    <button
                      onClick={() => toggleCategory(cat.name)}
                      className="w-full flex items-center gap-4 p-5 hover:bg-white/[0.02] transition-colors text-left"
                    >
                      <span className="text-accent">{categoryIcons[cat.name]}</span>
                      <span className="flex-1 text-sm font-medium text-heading">
                        {categoryLabels[cat.name] || cat.name}
                      </span>
                      {/* Mini stats */}
                      <span className="hidden sm:flex items-center gap-2 text-[11px]">
                        {passCount > 0 && <span className="text-emerald-400/70">{passCount} passed</span>}
                        {warnCount > 0 && <span className="text-amber-400/70">{warnCount} warn</span>}
                        {failCount > 0 && <span className="text-red-400/70">{failCount} fail</span>}
                      </span>
                      <span className={`text-sm font-bold ${scoreColor(catScore)}`}>
                        {catScore}%
                      </span>
                      <svg
                        className={`w-4 h-4 text-white/30 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 space-y-2 border-t border-border pt-4">
                            {visibleChecks.map((check, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02]"
                              >
                                {statusIcon(check.status)}
                                <div className="min-w-0">
                                  <p className="text-sm font-medium text-heading">{check.label}</p>
                                  <p className="text-xs text-body mt-0.5">{check.detail}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* CTA Bottom */}
            <div className="rounded-2xl border border-accent/20 bg-purple-darker/30 p-8 md:p-10 text-center space-y-4">
              <h3 className="text-[22px] font-medium text-heading">{t.ctaBottom}</h3>
              <p className="text-body text-sm max-w-[500px] mx-auto">{t.ctaBottomDesc}</p>
              <a
                href="https://w35pmime997.typeform.com/to/eqeeLQvb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-primary-hover text-white font-medium text-sm transition-colors"
              >
                {t.ctaBottomButton}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
