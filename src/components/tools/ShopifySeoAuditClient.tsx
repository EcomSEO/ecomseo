"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { exportToPDF } from "@/lib/export-utils";
import type { SeoToolTranslation } from "@/lib/i18n/translations/seoTools";

/* ------------------------------------------------------------------ */
/*  Types (mirrors API response)                                       */
/* ------------------------------------------------------------------ */

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
  isShopify: boolean;
  shopifyTheme: string | null;
  categories: AuditCategory[];
  comparisonResult?: AuditResult;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

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

function letterGrade(score: number) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 65) return "C";
  if (score >= 50) return "D";
  return "F";
}

function gradeColor(score: number) {
  if (score >= 90) return "text-emerald-400";
  if (score >= 80) return "text-emerald-300";
  if (score >= 65) return "text-amber-400";
  if (score >= 50) return "text-amber-500";
  return "text-red-400";
}

function scoreRingColor(score: number) {
  if (score >= 80) return "#34d399";
  if (score >= 50) return "#fbbf24";
  return "#f87171";
}

function statusIcon(status: "pass" | "warning" | "fail") {
  if (status === "pass")
    return (
      <svg
        className="w-4 h-4 text-emerald-400 shrink-0"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M3 8.5l3.5 3.5 6.5-8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (status === "warning")
    return (
      <svg
        className="w-4 h-4 text-amber-400 shrink-0"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M8 5v4M8 11h.01"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7.13 2.53L1.53 12.47A1 1 0 002.4 14h11.2a1 1 0 00.87-1.53L8.87 2.53a1 1 0 00-1.74 0z"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    );
  return (
    <svg
      className="w-4 h-4 text-red-400 shrink-0"
      viewBox="0 0 16 16"
      fill="none"
    >
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M5.5 5.5l5 5M10.5 5.5l-5 5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Score Ring SVG                                                     */
/* ------------------------------------------------------------------ */

function ScoreRing({ score, size = 120 }: { score: number; size?: number }) {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = scoreRingColor(score);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-white/5"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[28px] font-bold" style={{ color }}>
          {score}
        </span>
        <span className="text-[10px] text-white/30">/100</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  CSV / Copy / PDF helpers                                           */
/* ------------------------------------------------------------------ */

function buildCsvRows(result: AuditResult): string {
  const rows = ["Category,Check,Status,Detail"];
  const catLabels: Record<string, string> = {
    meta: "Meta & On-Page",
    "shopify-technical": "Shopify Technical SEO",
    performance: "Performance",
    "structured-data": "Structured Data",
    mobile: "Mobile & Accessibility",
  };
  for (const cat of result.categories) {
    for (const check of cat.checks) {
      const safeDetail = check.detail.replace(/"/g, '""');
      rows.push(
        `"${catLabels[cat.name] || cat.name}","${check.label}","${check.status}","${safeDetail}"`
      );
    }
  }
  return rows.join("\n");
}

function buildPlainText(result: AuditResult, url?: string): string {
  const lines: string[] = [
    `Shopify SEO Audit - Score: ${result.score}/100 (${letterGrade(result.score)})`,
    url ? `URL: ${url}` : "",
    `Passed: ${result.passed} | Warnings: ${result.warnings} | Critical: ${result.critical}`,
    result.shopifyTheme ? `Theme: ${result.shopifyTheme}` : "",
    "",
  ];
  const catLabels: Record<string, string> = {
    meta: "Meta & On-Page",
    "shopify-technical": "Shopify Technical SEO",
    performance: "Performance",
    "structured-data": "Structured Data",
    mobile: "Mobile & Accessibility",
  };
  for (const cat of result.categories) {
    lines.push(`--- ${catLabels[cat.name] || cat.name} ---`);
    for (const check of cat.checks) {
      const icon =
        check.status === "pass"
          ? "[PASS]"
          : check.status === "warning"
          ? "[WARN]"
          : "[FAIL]";
      lines.push(`  ${icon} ${check.label}: ${check.detail}`);
    }
    lines.push("");
  }
  return lines.filter(Boolean).join("\n");
}

function buildPdfHtml(result: AuditResult, url: string, compResult?: AuditResult, compUrl?: string): string {
  const catLabels: Record<string, string> = {
    meta: "Meta & On-Page",
    "shopify-technical": "Shopify Technical SEO",
    performance: "Performance",
    "structured-data": "Structured Data",
    mobile: "Mobile & Accessibility",
  };

  const statusBadge = (s: string) => {
    const colors: Record<string, string> = {
      pass: "background:#065f46;color:#6ee7b7",
      warning: "background:#78350f;color:#fde68a",
      fail: "background:#7f1d1d;color:#fca5a5",
    };
    return `<span style="display:inline-block;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600;${colors[s] || ""}">${s.toUpperCase()}</span>`;
  };

  const renderResult = (r: AuditResult, title: string, targetUrl: string) => `
    <div style="margin-bottom:40px">
      <h2 style="color:#e2e8f0;font-size:20px;margin-bottom:4px">${title}</h2>
      <p style="color:#94a3b8;font-size:13px;margin-bottom:16px">${targetUrl}</p>
      <div style="display:flex;gap:16px;margin-bottom:24px">
        <div style="background:#1e293b;border-radius:12px;padding:16px 24px;text-align:center;border:1px solid #334155">
          <div style="color:#94a3b8;font-size:11px">Score</div>
          <div style="font-size:36px;font-weight:bold;color:${scoreRingColor(r.score)}">${r.score}</div>
          <div style="color:#94a3b8;font-size:11px">Grade: ${letterGrade(r.score)}</div>
        </div>
        <div style="background:#1e293b;border-radius:12px;padding:16px 24px;text-align:center;border:1px solid #064e3b">
          <div style="color:#94a3b8;font-size:11px">Passed</div>
          <div style="font-size:28px;font-weight:bold;color:#34d399">${r.passed}</div>
        </div>
        <div style="background:#1e293b;border-radius:12px;padding:16px 24px;text-align:center;border:1px solid #78350f">
          <div style="color:#94a3b8;font-size:11px">Warnings</div>
          <div style="font-size:28px;font-weight:bold;color:#fbbf24">${r.warnings}</div>
        </div>
        <div style="background:#1e293b;border-radius:12px;padding:16px 24px;text-align:center;border:1px solid #7f1d1d">
          <div style="color:#94a3b8;font-size:11px">Critical</div>
          <div style="font-size:28px;font-weight:bold;color:#f87171">${r.critical}</div>
        </div>
      </div>
      ${r.categories.map((cat) => `
        <div style="margin-bottom:20px">
          <h3 style="color:#e2e8f0;font-size:15px;margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid #334155">${catLabels[cat.name] || cat.name}</h3>
          <table style="width:100%;border-collapse:collapse;font-size:12px">
            ${cat.checks.map((c) => `
              <tr style="border-bottom:1px solid #1e293b">
                <td style="padding:6px 8px;color:#e2e8f0;width:200px">${c.label}</td>
                <td style="padding:6px 8px;width:70px">${statusBadge(c.status)}</td>
                <td style="padding:6px 8px;color:#94a3b8">${c.detail}</td>
              </tr>
            `).join("")}
          </table>
        </div>
      `).join("")}
    </div>
  `;

  return `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Shopify SEO Audit Report</title></head>
<body style="background:#0f172a;color:#e2e8f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;padding:40px;max-width:900px;margin:0 auto">
  <div style="text-align:center;margin-bottom:32px;padding-bottom:24px;border-bottom:1px solid #334155">
    <h1 style="color:#a78bfa;font-size:24px;margin-bottom:4px">Shopify SEO Audit Report</h1>
    <p style="color:#64748b;font-size:13px">Generated by ecomseo.ai</p>
  </div>
  ${renderResult(result, "Primary Store", url)}
  ${compResult && compUrl ? renderResult(compResult, "Comparison Store", compUrl) : ""}
  ${compResult ? `
    <div style="background:#1e293b;border-radius:12px;padding:24px;border:1px solid #334155;margin-top:24px">
      <h3 style="color:#e2e8f0;font-size:16px;margin-bottom:12px">Score Comparison</h3>
      <div style="display:flex;gap:24px;align-items:center">
        <div style="flex:1;text-align:center">
          <div style="font-size:48px;font-weight:bold;color:${scoreRingColor(result.score)}">${result.score}</div>
          <div style="color:#94a3b8;font-size:12px">Your Store</div>
        </div>
        <div style="color:#64748b;font-size:24px">vs</div>
        <div style="flex:1;text-align:center">
          <div style="font-size:48px;font-weight:bold;color:${scoreRingColor(compResult.score)}">${compResult.score}</div>
          <div style="color:#94a3b8;font-size:12px">Competitor</div>
        </div>
      </div>
    </div>
  ` : ""}
  <div style="text-align:center;margin-top:40px;padding-top:20px;border-top:1px solid #334155">
    <p style="color:#64748b;font-size:11px">Report generated on ${new Date().toLocaleDateString()} | ecomseo.ai</p>
  </div>
</body></html>`;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ShopifySeoAuditClient({
  t,
}: {
  t: SeoToolTranslation;
}) {
  const [url, setUrl] = useState("");
  const [compareUrl, setCompareUrl] = useState("");
  const [showCompare, setShowCompare] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<AuditResult | null>(null);
  const [expandedCat, setExpandedCat] = useState<string | null>(null);
  const [filterIssuesOnly, setFilterIssuesOnly] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"primary" | "comparison">("primary");
  const resultsRef = useRef<HTMLDivElement>(null);

  const categoryLabels: Record<string, string> = {
    meta: t.categoryMeta,
    "shopify-technical": "Shopify Technical SEO",
    performance: t.categoryPerformance,
    "structured-data": t.categoryStructuredData,
    mobile: t.categoryMobile,
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    meta: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 7h5l2-3h2l2 3h5" />
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 12h8M8 16h5" />
      </svg>
    ),
    "shopify-technical": (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
    performance: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    "structured-data": (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
    mobile: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
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

        const res = await fetch("/api/shopify-audit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bodyPayload),
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => null);
          setError(
            errData?.error || `Server returned ${res.status}. ${t.errorFetch}`
          );
          return;
        }

        const data: AuditResult = await res.json();

        if (!data.isShopify) {
          setError(
            "This does not appear to be a Shopify store. We could not detect Shopify on the provided URL. Please enter a valid Shopify store URL."
          );
          return;
        }

        setResult(data);
        setExpandedCat(data.categories[0]?.name || null);
        setFilterIssuesOnly(false);
        setActiveTab("primary");
        setTimeout(() => {
          resultsRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      } catch {
        setError(t.errorFetch);
      } finally {
        setLoading(false);
      }
    },
    [url, compareUrl, showCompare, t]
  );

  const handleExportCsv = useCallback(() => {
    if (!result) return;
    const csv = buildCsvRows(result);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "shopify-seo-audit.csv";
    link.click();
    URL.revokeObjectURL(link.href);
  }, [result]);

  const handleCopy = useCallback(() => {
    if (!result) return;
    const text = buildPlainText(result, url);
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [result, url]);

  const handleExportPdf = useCallback(() => {
    if (!result) return;
    exportToPDF({
      title: "Shopify SEO Audit Report",
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
  }, [result, url]);

  // Determine which result to display
  const displayResult = activeTab === "comparison" && result?.comparisonResult
    ? result.comparisonResult
    : result;

  // Compute filtered categories for display
  const displayCategories = displayResult
    ? displayResult.categories.map((cat) => ({
        ...cat,
        checks: filterIssuesOnly
          ? cat.checks.filter((c) => c.status !== "pass")
          : cat.checks,
      }))
    : [];

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
                    <svg
                      className="w-4 h-4 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="opacity-25"
                      />
                      <path
                        d="M4 12a8 8 0 018-8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="opacity-75"
                      />
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
                showCompare
                  ? "text-accent"
                  : "text-body hover:text-heading"
              }`}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M8 1v14M1 8h14" strokeLinecap="round" />
              </svg>
              Compare with another store
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
                      placeholder="e.g. competitor-store.myshopify.com"
                      className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-heading text-sm placeholder:text-body/50 focus:outline-none focus:border-accent transition-colors"
                    />
                    <p className="text-[11px] text-white/30 mt-1.5">
                      Enter a competitor Shopify store URL for side-by-side comparison
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          {/* Stats row */}
          <div className="flex items-center gap-6 pt-2">
            <span className="text-xs text-white/30 flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <circle cx="8" cy="8" r="6" />
                <path d="M8 5v3l2 2" strokeLinecap="round" />
              </svg>
              {t.statsTime}
            </span>
            <span className="text-xs text-white/30 flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path
                  d="M8 2l1.5 4.5H14l-3.5 3 1.2 4.5L8 11l-3.7 3 1.2-4.5L2 6.5h4.5z"
                  strokeLinejoin="round"
                />
              </svg>
              {t.statsRating}
            </span>
            <span className="text-xs text-white/30 flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path
                  d="M8 1v2M8 13v2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M1 8h2M13 8h2M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41"
                  strokeLinecap="round"
                />
              </svg>
              {t.statsUsers}
            </span>
          </div>
        </form>
      </div>

      {/* Results */}
      <AnimatePresence>
        {result && (
          <motion.div
            ref={resultsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-[900px] mx-auto space-y-8"
          >
            {/* Shopify Detection Badge + Theme */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-sm font-medium">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8.5l3.5 3.5 6.5-8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Shopify Detected
              </span>
              {result.shopifyTheme && (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm">
                  Theme: {result.shopifyTheme}
                </span>
              )}
            </div>

            {/* Comparison Tab Switcher */}
            {result.comparisonResult && (
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => { setActiveTab("primary"); setExpandedCat(null); }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === "primary"
                      ? "bg-accent/10 border border-accent/30 text-accent"
                      : "border border-border text-body hover:text-heading"
                  }`}
                >
                  Your Store
                </button>
                <span className="text-white/20 text-sm px-2">vs</span>
                <button
                  onClick={() => { setActiveTab("comparison"); setExpandedCat(null); }}
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
                    <span className="text-xs text-white/50">Your Store</span>
                    <span className={`text-lg font-bold ${gradeColor(result.score)}`}>
                      {letterGrade(result.score)}
                    </span>
                  </div>
                  <div className="text-white/20 text-2xl font-light">vs</div>
                  <div className="flex flex-col items-center gap-2">
                    <ScoreRing score={result.comparisonResult.score} size={100} />
                    <span className="text-xs text-white/50">Competitor</span>
                    <span className={`text-lg font-bold ${gradeColor(result.comparisonResult.score)}`}>
                      {letterGrade(result.comparisonResult.score)}
                    </span>
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
            {displayResult && (
              <div className="rounded-2xl border border-border bg-bg-card p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-[20px] font-medium text-heading">
                    {t.resultsTitle}
                  </h2>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopy}
                      className="px-3 py-1.5 rounded-lg border border-border text-xs text-body hover:text-heading hover:border-accent/40 transition-colors"
                    >
                      {copied ? "Copied!" : "Copy"}
                    </button>
                    <button
                      onClick={handleExportCsv}
                      className="px-3 py-1.5 rounded-lg border border-border text-xs text-body hover:text-heading hover:border-accent/40 transition-colors"
                    >
                      CSV
                    </button>
                    <button
                      onClick={handleExportPdf}
                      className="px-3 py-1.5 rounded-lg border border-border text-xs text-body hover:text-heading hover:border-accent/40 transition-colors flex items-center gap-1"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <path d="M8 2v8M5 7l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 11v2a1 1 0 001 1h10a1 1 0 001-1v-2" strokeLinecap="round" />
                      </svg>
                      Report
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {/* Overall Score */}
                  <div
                    className={`rounded-xl border p-5 text-center ${scoreBg(
                      displayResult.score
                    )}`}
                  >
                    <p className="text-xs text-white/40 mb-1">
                      {t.overallScore}
                    </p>
                    <p
                      className={`text-[36px] font-bold ${scoreColor(
                        displayResult.score
                      )}`}
                    >
                      {displayResult.score}
                    </p>
                    <p className="text-xs text-white/30">/100</p>
                  </div>
                  {/* Letter Grade */}
                  <div
                    className={`rounded-xl border p-5 text-center ${scoreBg(
                      displayResult.score
                    )}`}
                  >
                    <p className="text-xs text-white/40 mb-1">Grade</p>
                    <p
                      className={`text-[36px] font-bold ${gradeColor(
                        displayResult.score
                      )}`}
                    >
                      {letterGrade(displayResult.score)}
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-5 text-center">
                    <p className="text-xs text-white/40 mb-1">
                      {t.passedChecks}
                    </p>
                    <p className="text-[28px] font-bold text-emerald-400">
                      {displayResult.passed}
                    </p>
                  </div>
                  <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-5 text-center">
                    <p className="text-xs text-white/40 mb-1">{t.warnings}</p>
                    <p className="text-[28px] font-bold text-amber-400">
                      {displayResult.warnings}
                    </p>
                  </div>
                  <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5 text-center">
                    <p className="text-xs text-white/40 mb-1">
                      {t.criticalIssues}
                    </p>
                    <p className="text-[28px] font-bold text-red-400">
                      {displayResult.critical}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Filter Toggle */}
            <div className="flex justify-end">
              <button
                onClick={() => setFilterIssuesOnly(!filterIssuesOnly)}
                className={`px-4 py-2 rounded-lg text-xs font-medium border transition-colors ${
                  filterIssuesOnly
                    ? "bg-accent/10 border-accent/30 text-accent"
                    : "bg-transparent border-border text-body hover:text-heading"
                }`}
              >
                {filterIssuesOnly
                  ? "Showing issues only"
                  : "Show issues only"}
              </button>
            </div>

            {/* Category Breakdown */}
            <div className="space-y-3">
              {displayCategories.map((cat) => {
                const origCat = displayResult!.categories.find(
                  (c) => c.name === cat.name
                )!;
                const passCount = origCat.checks.filter(
                  (c) => c.status === "pass"
                ).length;
                const catScore = Math.round(
                  (passCount / origCat.checks.length) * 100
                );
                const isExpanded = expandedCat === cat.name;

                // If filtering and no issues in this category, hide it
                if (filterIssuesOnly && cat.checks.length === 0)
                  return null;

                return (
                  <div
                    key={cat.name}
                    className="rounded-xl border border-border bg-bg-card overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setExpandedCat(isExpanded ? null : cat.name)
                      }
                      className="w-full flex items-center gap-4 p-5 hover:bg-white/[0.02] transition-colors text-left"
                    >
                      <span className="text-accent">
                        {categoryIcons[cat.name]}
                      </span>
                      <span className="flex-1 text-sm font-medium text-heading">
                        {categoryLabels[cat.name] || cat.name}
                      </span>
                      <span className="text-xs text-white/30 mr-2">
                        {origCat.checks.filter((c) => c.status === "pass")
                          .length}
                        /{origCat.checks.length} passed
                      </span>
                      <span
                        className={`text-sm font-bold ${scoreColor(
                          catScore
                        )}`}
                      >
                        {catScore}%
                      </span>
                      <svg
                        className={`w-4 h-4 text-white/30 transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 6l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
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
                            {cat.checks.length === 0 ? (
                              <p className="text-xs text-white/30 py-2">
                                All checks passed in this category.
                              </p>
                            ) : (
                              cat.checks.map((check, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02]"
                                >
                                  {statusIcon(check.status)}
                                  <div className="min-w-0">
                                    <p className="text-sm font-medium text-heading">
                                      {check.label}
                                    </p>
                                    <p className="text-xs text-body mt-0.5">
                                      {check.detail}
                                    </p>
                                  </div>
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

            {/* CTA Bottom */}
            <div className="rounded-2xl border border-accent/20 bg-purple-darker/30 p-8 md:p-10 text-center space-y-4">
              <h3 className="text-[22px] font-medium text-heading">
                {t.ctaBottom}
              </h3>
              <p className="text-body text-sm max-w-[500px] mx-auto">
                {t.ctaBottomDesc}
              </p>
              <a
                href="https://w35pmime997.typeform.com/to/eqeeLQvb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-primary-hover text-white font-medium text-sm transition-colors"
              >
                {t.ctaBottomButton}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
