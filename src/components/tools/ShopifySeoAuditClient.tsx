"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { SeoToolTranslation } from "@/lib/i18n/translations/seoTools";

/* ── Types ─────────────────────────────────────────────────── */

interface AuditCheck {
  label: string;
  status: "pass" | "warning" | "fail";
  detail: string;
  priority?: "critical" | "high" | "medium" | "low";
  howToFix?: string;
}

interface AuditCategory {
  name: string;
  weight: number;
  checks: AuditCheck[];
}

interface AuditResult {
  score: number;
  grade: string;
  passed: number;
  warnings: number;
  critical: number;
  isShopify: boolean;
  shopifyTheme: string | null;
  categories: AuditCategory[];
  responseTimeMs: number;
  url: string;
  comparisonResult?: AuditResult;
}

/* ── Helpers ───────────────────────────────────────────────── */

function normalizeUrl(raw: string): string {
  let url = raw.trim();
  if (!url) return "";
  if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
  try { return new URL(url).href; } catch { return ""; }
}

function scoreColor(s: number) {
  if (s >= 80) return "text-emerald-400";
  if (s >= 50) return "text-amber-400";
  return "text-red-400";
}

function scoreBg(s: number) {
  if (s >= 80) return "bg-emerald-400/10 border-emerald-400/20";
  if (s >= 50) return "bg-amber-400/10 border-amber-400/20";
  return "bg-red-400/10 border-red-400/20";
}

function scoreRingHex(s: number) {
  if (s >= 80) return "#34d399";
  if (s >= 50) return "#fbbf24";
  return "#f87171";
}

function gradeColor(s: number) {
  if (s >= 80) return "text-emerald-400";
  if (s >= 60) return "text-amber-400";
  return "text-red-400";
}

function priorityBadge(p?: string) {
  if (!p) return null;
  const cls: Record<string, string> = {
    critical: "bg-red-400/15 text-red-400 border-red-400/30",
    high: "bg-orange-400/15 text-orange-400 border-orange-400/30",
    medium: "bg-amber-400/15 text-amber-400 border-amber-400/30",
    low: "bg-blue-400/15 text-blue-400 border-blue-400/30",
  };
  return (
    <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded border ${cls[p] || ""}`}>
      {p}
    </span>
  );
}

const CATEGORY_LABELS: Record<string, string> = {
  meta: "Meta Tags & On-Page",
  "shopify-technical": "Shopify Technical SEO",
  performance: "Page Speed & Performance",
  "structured-data": "Structured Data",
  content: "Content Quality",
  security: "Security & Headers",
  mobile: "Mobile Optimization",
  links: "Links & Navigation",
  social: "Social & Sharing",
  accessibility: "Accessibility",
};

const CATEGORY_ICONS: Record<string, string> = {
  meta: "M4 7h5l2-3h2l2 3h5M3 7h18v13a2 2 0 01-2 2H5a2 2 0 01-2-2zM8 12h8M8 16h5",
  "shopify-technical": "M12 15a3 3 0 100-6 3 3 0 000 6z",
  performance: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  "structured-data": "M16 18l6-6-6-6M8 6l-6 6 6 6",
  content: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8",
  security: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  mobile: "M5 2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2zM12 18h.01",
  links: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71",
  social: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  accessibility: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM9 12l2 2 4-4",
};

/* ── Score Ring SVG ────────────────────────────────────────── */

function ScoreRing({ score, size = 120 }: { score: number; size?: number }) {
  const sw = 8;
  const r = (size - sw) / 2;
  const c = 2 * Math.PI * r;
  const off = c - (score / 100) * c;
  const col = scoreRingHex(score);
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeWidth={sw} className="text-white/5" />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={col} strokeWidth={sw} strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round" className="transition-all duration-1000" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[28px] font-bold" style={{ color: col }}>{score}</span>
        <span className="text-[10px] text-white/30">/100</span>
      </div>
    </div>
  );
}

/* ── Status Icon ───────────────────────────────────────────── */

function StatusIcon({ status }: { status: "pass" | "warning" | "fail" }) {
  if (status === "pass")
    return <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3.5 3.5 6.5-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (status === "warning")
    return <svg className="w-4 h-4 text-amber-400 shrink-0" viewBox="0 0 16 16" fill="none"><path d="M8 5v4M8 11h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M7.13 2.53L1.53 12.47A1 1 0 002.4 14h11.2a1 1 0 00.87-1.53L8.87 2.53a1 1 0 00-1.74 0z" stroke="currentColor" strokeWidth="1.2" /></svg>;
  return <svg className="w-4 h-4 text-red-400 shrink-0" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2" /><path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>;
}

/* ── Loading Skeleton ──────────────────────────────────────── */

function LoadingSkeleton() {
  return (
    <div className="w-full max-w-[1000px] mx-auto space-y-6 animate-pulse">
      <div className="rounded-2xl border border-border bg-bg-card p-8">
        <div className="flex items-center gap-8">
          <div className="w-[120px] h-[120px] rounded-full bg-white/5" />
          <div className="flex-1 space-y-3">
            <div className="h-5 w-48 bg-white/10 rounded" />
            <div className="grid grid-cols-4 gap-3">
              {[...Array(4)].map((_, i) => <div key={i} className="h-16 rounded-xl bg-white/5" />)}
            </div>
          </div>
        </div>
      </div>
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

/* ── Export: CSV ────────────────────────────────────────────── */

function resultsToCsv(result: AuditResult): string {
  const rows = [["Category", "Check", "Status", "Priority", "Detail", "How to Fix"].join(",")];
  for (const cat of result.categories) {
    const catLabel = CATEGORY_LABELS[cat.name] || cat.name;
    for (const check of cat.checks) {
      rows.push([
        `"${catLabel}"`,
        `"${check.label}"`,
        check.status,
        check.priority || "",
        `"${check.detail.replace(/"/g, '""')}"`,
        `"${(check.howToFix || "").replace(/"/g, '""')}"`,
      ].join(","));
    }
  }
  return rows.join("\n");
}

/* ── Export: PDF ────────────────────────────────────────────── */

function exportAuditPDF(result: AuditResult, storeUrl: string) {
  const dateStr = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const sc = result.score >= 80 ? "#22c55e" : result.score >= 50 ? "#eab308" : "#ef4444";
  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  const priorityFixes = result.categories
    .flatMap(cat => cat.checks.map(ch => ({ ...ch, category: CATEGORY_LABELS[cat.name] || cat.name })))
    .filter(ch => ch.status !== "pass" && (ch.priority === "critical" || ch.priority === "high"))
    .sort((a, b) => (a.priority === "critical" ? 0 : 1) - (b.priority === "critical" ? 0 : 1));

  const catSummaries = result.categories.map(cat => {
    const p = cat.checks.filter(c => c.status === "pass").length;
    const catScore = cat.checks.length > 0 ? Math.round((p / cat.checks.length) * 100) : 100;
    const catColor = catScore >= 80 ? "#22c55e" : catScore >= 50 ? "#eab308" : "#ef4444";
    return { name: CATEGORY_LABELS[cat.name] || cat.name, score: catScore, color: catColor, total: cat.checks.length, passed: p, warnings: cat.checks.filter(c => c.status === "warning").length, fails: cat.checks.filter(c => c.status === "fail").length, weight: cat.weight };
  });

  const priorityRows = priorityFixes.slice(0, 15).map((fix, i) => {
    const bg = i % 2 === 0 ? "#0f0f1a" : "#13132a";
    const pColor = fix.priority === "critical" ? "#f87171" : "#fb923c";
    return `<tr style="background:${bg}"><td style="padding:10px 14px;font-size:12px;color:${pColor};border-bottom:1px solid #1e1e35;font-weight:600;text-transform:uppercase">${fix.priority}</td><td style="padding:10px 14px;font-size:12px;color:#e2e8f0;border-bottom:1px solid #1e1e35">${esc(fix.category)}</td><td style="padding:10px 14px;font-size:12px;color:#e2e8f0;border-bottom:1px solid #1e1e35;font-weight:500">${esc(fix.label)}</td><td style="padding:10px 14px;font-size:11px;color:#94a3b8;border-bottom:1px solid #1e1e35;max-width:300px;word-break:break-word">${esc(fix.howToFix || fix.detail)}</td></tr>`;
  }).join("");

  const catRows = catSummaries.map((cat, i) => {
    const bg = i % 2 === 0 ? "#0f0f1a" : "#13132a";
    return `<tr style="background:${bg}"><td style="padding:10px 14px;font-size:12px;color:#e2e8f0;border-bottom:1px solid #1e1e35;font-weight:500">${esc(cat.name)}</td><td style="padding:10px 14px;border-bottom:1px solid #1e1e35"><div style="display:flex;align-items:center;gap:8px"><div style="flex:1;height:6px;background:#1e1e35;border-radius:3px;overflow:hidden"><div style="width:${cat.score}%;height:100%;background:${cat.color};border-radius:3px"></div></div><span style="font-size:12px;font-weight:700;color:${cat.color};min-width:35px">${cat.score}%</span></div></td><td style="padding:10px 14px;font-size:11px;color:#94a3b8;border-bottom:1px solid #1e1e35;text-align:center">${cat.weight}%</td><td style="padding:10px 14px;font-size:11px;border-bottom:1px solid #1e1e35;text-align:center"><span style="color:#34d399">${cat.passed}</span> / <span style="color:#fbbf24">${cat.warnings}</span> / <span style="color:#f87171">${cat.fails}</span></td></tr>`;
  }).join("");

  const checkRows = result.categories.flatMap(cat =>
    cat.checks.map((check, i) => {
      const bg = i % 2 === 0 ? "#0f0f1a" : "#13132a";
      const statusColor = check.status === "pass" ? "#34d399" : check.status === "warning" ? "#fbbf24" : "#f87171";
      return `<tr style="background:${bg}"><td style="padding:8px 12px;font-size:11px;color:#94a3b8;border-bottom:1px solid #1e1e35">${esc(CATEGORY_LABELS[cat.name] || cat.name)}</td><td style="padding:8px 12px;font-size:12px;color:#e2e8f0;border-bottom:1px solid #1e1e35;font-weight:500">${esc(check.label)}</td><td style="padding:8px 12px;font-size:11px;border-bottom:1px solid #1e1e35"><span style="color:${statusColor};font-weight:700">${check.status.toUpperCase()}</span></td><td style="padding:8px 12px;font-size:11px;color:#94a3b8;border-bottom:1px solid #1e1e35;max-width:250px;word-break:break-word">${esc(check.detail)}</td><td style="padding:8px 12px;font-size:11px;color:#64748b;border-bottom:1px solid #1e1e35;max-width:200px;word-break:break-word">${esc(check.howToFix || "")}</td></tr>`;
    })
  ).join("");

  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"/><title>Shopify SEO Audit - ${esc(storeUrl)}</title><style>@media print{body{-webkit-print-color-adjust:exact;print-color-adjust:exact}@page{margin:0.4in;size:landscape}}*{margin:0;padding:0;box-sizing:border-box}body{background:#0b0b14;color:#e2e8f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;padding:32px}table{width:100%;border-collapse:collapse}h2{font-size:16px;font-weight:600;color:#e2e8f0;margin:28px 0 14px;padding-bottom:8px;border-bottom:1px solid #2d2d44}th{text-align:left;padding:10px 14px;font-size:10px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid #2d2d44;white-space:nowrap}</style></head><body>
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;padding-bottom:16px;border-bottom:1px solid #2d2d44"><div><div style="display:flex;align-items:center;gap:10px;margin-bottom:4px"><div style="width:28px;height:28px;background:linear-gradient(135deg,#a78bfa,#7c3aed);border-radius:6px;display:flex;align-items:center;justify-content:center"><span style="color:white;font-weight:700;font-size:14px">E</span></div><span style="font-size:16px;font-weight:600;color:#a78bfa">EcomSEO</span></div><h1 style="font-size:22px;font-weight:700;color:#f1f5f9;margin-top:6px">Shopify SEO Audit Report</h1><p style="font-size:12px;color:#64748b;margin-top:2px">${esc(storeUrl)}</p></div><div style="text-align:right"><div style="font-size:12px;color:#94a3b8">${dateStr}</div><div style="font-size:11px;color:#64748b;margin-top:2px">${result.passed + result.warnings + result.critical} checks &middot; ${result.categories.length} categories &middot; ${(result.responseTimeMs / 1000).toFixed(1)}s</div></div></div>
<div style="display:flex;gap:20px;margin-bottom:24px"><div style="padding:24px;background:#1a1a2e;border:1px solid #2d2d44;border-radius:12px;text-align:center;min-width:140px"><div style="font-size:48px;font-weight:800;color:${sc};line-height:1">${result.score}</div><div style="font-size:11px;color:#94a3b8;margin-top:4px">/100</div><div style="font-size:28px;font-weight:700;color:${sc};margin-top:4px">${result.grade}</div></div><div style="flex:1;display:grid;grid-template-columns:repeat(3,1fr);gap:12px"><div style="padding:16px;background:#064e3b20;border:1px solid #06543830;border-radius:10px;text-align:center"><div style="font-size:10px;color:#94a3b8">Passed</div><div style="font-size:28px;font-weight:700;color:#34d399">${result.passed}</div></div><div style="padding:16px;background:#78350f20;border:1px solid #92400e30;border-radius:10px;text-align:center"><div style="font-size:10px;color:#94a3b8">Warnings</div><div style="font-size:28px;font-weight:700;color:#fbbf24">${result.warnings}</div></div><div style="padding:16px;background:#7f1d1d20;border:1px solid #991b1b30;border-radius:10px;text-align:center"><div style="font-size:10px;color:#94a3b8">Critical</div><div style="font-size:28px;font-weight:700;color:#f87171">${result.critical}</div></div></div></div>
${result.shopifyTheme ? `<div style="font-size:12px;color:#a78bfa;margin-bottom:20px;padding:8px 14px;background:#7c3aed15;border:1px solid #7c3aed30;border-radius:8px;display:inline-block">Shopify Theme: ${esc(result.shopifyTheme)}</div>` : ""}
<h2>Category Breakdown</h2><div style="border:1px solid #2d2d44;border-radius:10px;overflow:hidden;margin-bottom:8px"><table><thead><tr style="background:#13132a"><th>Category</th><th>Score</th><th>Weight</th><th>P / W / F</th></tr></thead><tbody>${catRows}</tbody></table></div>
${priorityFixes.length > 0 ? `<h2>Priority Fixes (${priorityFixes.length})</h2><div style="border:1px solid #2d2d44;border-radius:10px;overflow:hidden;margin-bottom:8px"><table><thead><tr style="background:#13132a"><th>Priority</th><th>Category</th><th>Issue</th><th>How to Fix</th></tr></thead><tbody>${priorityRows}</tbody></table></div>` : ""}
<h2>All Checks (${result.passed + result.warnings + result.critical})</h2><div style="border:1px solid #2d2d44;border-radius:10px;overflow:hidden"><table><thead><tr style="background:#13132a"><th>Category</th><th>Check</th><th>Status</th><th>Detail</th><th>Fix</th></tr></thead><tbody>${checkRows}</tbody></table></div>
<div style="margin-top:24px;padding-top:12px;border-top:1px solid #2d2d44;display:flex;justify-content:space-between"><span style="font-size:11px;color:#64748b">Generated by EcomSEO &mdash; ecomseo.co</span><span style="font-size:11px;color:#64748b">${dateStr}</span></div>
<script>window.onload=function(){setTimeout(function(){window.print()},400)}<\/script></body></html>`;

  const w = window.open("", "_blank");
  if (w) { w.document.write(html); w.document.close(); }
}

/* ── Main Component ────────────────────────────────────────── */

export default function ShopifySeoAuditClient({ t }: { t: SeoToolTranslation }) {
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
  const [expandedFix, setExpandedFix] = useState<number | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const toggleCategory = useCallback((name: string) => {
    setExpandedCats(prev => { const n = new Set(prev); if (n.has(name)) n.delete(name); else n.add(name); return n; });
  }, []);

  const handleCopy = useCallback(() => {
    if (!result) return;
    const lines: string[] = [`Shopify SEO Audit — Score: ${result.score}/100 (${result.grade})`, `URL: ${result.url}`, `Passed: ${result.passed} | Warnings: ${result.warnings} | Critical: ${result.critical}`, ""];
    for (const cat of result.categories) {
      lines.push(`--- ${CATEGORY_LABELS[cat.name] || cat.name} ---`);
      for (const ch of cat.checks) {
        lines.push(`  [${ch.status.toUpperCase()}] ${ch.label}: ${ch.detail}`);
        if (ch.howToFix) lines.push(`    Fix: ${ch.howToFix}`);
      }
      lines.push("");
    }
    navigator.clipboard.writeText(lines.join("\n")).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  }, [result]);

  const handleCsv = useCallback(() => {
    if (!result) return;
    const csv = resultsToCsv(result);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `shopify-seo-audit-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  }, [result]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(""); setResult(null);
    if (!url.trim()) { setError(t.errorEmpty); return; }
    const normalized = normalizeUrl(url);
    if (!normalized) { setError(t.errorInvalid); return; }

    setLoading(true);
    try {
      const body: Record<string, string> = { url: normalized };
      if (showCompare && compareUrl.trim()) {
        const nc = normalizeUrl(compareUrl);
        if (nc) body.compareUrl = nc;
      }
      const res = await fetch("/api/shopify-audit", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
      });
      if (!res.ok) { const d = await res.json().catch(() => ({})); setError(d.error || t.errorFetch); return; }
      const data: AuditResult = await res.json();

      if (!data.isShopify) {
        setError("This doesn't appear to be a Shopify store. Please enter a valid Shopify store URL.");
        return;
      }

      setResult(data);
      setExpandedCats(new Set(data.categories.map(c => c.name)));
      setShowOnlyIssues(false); setActiveTab("primary"); setExpandedFix(null);
      setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    } catch { setError(t.errorFetch); } finally { setLoading(false); }
  }

  const dr = result && activeTab === "comparison" && result.comparisonResult ? result.comparisonResult : result;

  const priorityFixes = dr
    ? dr.categories
        .flatMap(cat => cat.checks.map(ch => ({ ...ch, category: CATEGORY_LABELS[cat.name] || cat.name })))
        .filter(ch => ch.status !== "pass" && (ch.priority === "critical" || ch.priority === "high"))
        .sort((a, b) => (a.priority === "critical" ? 0 : 1) - (b.priority === "critical" ? 0 : 1))
    : [];

  return (
    <div className="space-y-12">
      {/* ─── Input Form ──────────────────────────────────── */}
      <div className="w-full max-w-[800px] mx-auto rounded-2xl border border-border bg-bg-card p-8 md:p-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-body text-sm mb-2">{t.label}</label>
            <div className="flex gap-3">
              <input type="text" value={url} onChange={e => setUrl(e.target.value)} placeholder={t.placeholder}
                className="flex-1 px-4 py-3 rounded-xl bg-bg border border-border text-heading text-sm placeholder:text-body/50 focus:outline-none focus:border-accent transition-colors" />
              <button type="submit" disabled={loading}
                className="px-6 py-3 rounded-xl bg-accent hover:bg-accent/90 text-white font-medium text-sm transition-colors shrink-0 disabled:opacity-60 disabled:cursor-not-allowed">
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" className="opacity-25" /><path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-75" /></svg>
                    {t.ctaLoading}
                  </span>
                ) : t.cta}
              </button>
            </div>
          </div>

          <button type="button" onClick={() => setShowCompare(!showCompare)}
            className={`flex items-center gap-2 text-xs font-medium transition-colors ${showCompare ? "text-accent" : "text-body hover:text-heading"}`}>
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M8 1v14M1 8h14" strokeLinecap="round" /></svg>
            Compare with a competitor
          </button>
          <AnimatePresence>
            {showCompare && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <input type="text" value={compareUrl} onChange={e => setCompareUrl(e.target.value)} placeholder="e.g. competitor-store.com"
                  className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-heading text-sm placeholder:text-body/50 focus:outline-none focus:border-accent transition-colors" />
              </motion.div>
            )}
          </AnimatePresence>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <div className="flex items-center gap-6 pt-2">
            <span className="text-xs text-white/30 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="8" cy="8" r="6" /><path d="M8 5v3l2 2" strokeLinecap="round" /></svg>
              {t.statsTime}
            </span>
            <span className="text-xs text-white/30 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M8 2l1.5 4.5H14l-3.5 3 1.2 4.5L8 11l-3.7 3 1.2-4.5L2 6.5h4.5z" strokeLinejoin="round" /></svg>
              {t.statsRating}
            </span>
            <span className="text-xs text-white/30 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M8 1v2M8 13v2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M1 8h2M13 8h2M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" strokeLinecap="round" /></svg>
              {t.statsUsers}
            </span>
          </div>
        </form>
      </div>

      {loading && <LoadingSkeleton />}

      <AnimatePresence>
        {result && dr && !loading && (
          <motion.div ref={resultsRef} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
            className="w-full max-w-[1000px] mx-auto space-y-6">

            {/* Shopify badge */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium text-emerald-400 bg-emerald-400/10 border-emerald-400/20">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3.5 3.5 6.5-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Shopify Detected
              </span>
              {dr.shopifyTheme && (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium text-purple-400 bg-purple-400/10 border-purple-400/20">
                  Theme: {dr.shopifyTheme}
                </span>
              )}
            </div>

            {/* Comparison tabs */}
            {result.comparisonResult && (
              <div className="flex items-center justify-center gap-2">
                <button onClick={() => { setActiveTab("primary"); setExpandedCats(new Set(result.categories.map(c => c.name))); }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "primary" ? "bg-accent/10 border border-accent/30 text-accent" : "border border-border text-body hover:text-heading"}`}>
                  Your Store
                </button>
                <span className="text-white/20 text-sm px-2">vs</span>
                <button onClick={() => { setActiveTab("comparison"); setExpandedCats(new Set(result.comparisonResult!.categories.map(c => c.name))); }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "comparison" ? "bg-accent/10 border border-accent/30 text-accent" : "border border-border text-body hover:text-heading"}`}>
                  Competitor
                </button>
              </div>
            )}

            {/* Score comparison */}
            {result.comparisonResult && (
              <div className="rounded-2xl border border-border bg-bg-card p-8">
                <div className="flex items-center justify-center gap-8 md:gap-16">
                  <div className="flex flex-col items-center gap-1">
                    <ScoreRing score={result.score} size={100} />
                    <span className="text-xs text-white/50 mt-1">Your Store</span>
                    <span className={`text-lg font-bold ${gradeColor(result.score)}`}>{result.grade}</span>
                  </div>
                  <div className="text-white/20 text-2xl font-light">vs</div>
                  <div className="flex flex-col items-center gap-1">
                    <ScoreRing score={result.comparisonResult.score} size={100} />
                    <span className="text-xs text-white/50 mt-1">Competitor</span>
                    <span className={`text-lg font-bold ${gradeColor(result.comparisonResult.score)}`}>{result.comparisonResult.grade}</span>
                  </div>
                </div>
              </div>
            )}

            {/* ─── Score Overview ───────────────────────────── */}
            <div className="rounded-2xl border border-border bg-bg-card p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[20px] font-medium text-heading">{t.resultsTitle}</h2>
                <div className="flex items-center gap-2">
                  <button onClick={handleCopy} className="px-3 py-1.5 rounded-lg border border-border text-xs text-body hover:text-heading hover:border-white/20 transition-colors flex items-center gap-1.5">
                    {copied ? <><svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3.5 3.5 6.5-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Copied</> : <>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="5" y="5" width="8" height="8" rx="1" /><path d="M3 11V3h8" strokeLinecap="round" /></svg>Copy</>}
                  </button>
                  <button onClick={handleCsv} className="px-3 py-1.5 rounded-lg border border-border text-xs text-body hover:text-heading hover:border-white/20 transition-colors flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M8 2v8M5 7l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 11v2a1 1 0 001 1h10a1 1 0 001-1v-2" strokeLinecap="round" /></svg>CSV
                  </button>
                  <button onClick={() => exportAuditPDF(dr, dr.url)} className="px-3 py-1.5 rounded-lg border border-accent/30 bg-accent/5 text-xs text-accent hover:bg-accent/10 transition-colors flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M10 1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4z" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 1v3h3M7 8h2M7 10.5h4" strokeLinecap="round" /></svg>PDF Report
                  </button>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <ScoreRing score={dr.score} size={130} />
                <div className="flex-1 w-full">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className={`rounded-xl border p-4 text-center ${scoreBg(dr.score)}`}>
                      <p className="text-[10px] text-white/40 mb-0.5">Grade</p>
                      <p className={`text-[32px] font-bold ${gradeColor(dr.score)}`}>{dr.grade}</p>
                    </div>
                    <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4 text-center">
                      <p className="text-[10px] text-white/40 mb-0.5">{t.passedChecks}</p>
                      <p className="text-[28px] font-bold text-emerald-400">{dr.passed}</p>
                    </div>
                    <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-center">
                      <p className="text-[10px] text-white/40 mb-0.5">{t.warnings}</p>
                      <p className="text-[28px] font-bold text-amber-400">{dr.warnings}</p>
                    </div>
                    <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-4 text-center">
                      <p className="text-[10px] text-white/40 mb-0.5">{t.criticalIssues}</p>
                      <p className="text-[28px] font-bold text-red-400">{dr.critical}</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-white/25 mt-3">
                    {dr.passed + dr.warnings + dr.critical} checks across {dr.categories.length} categories
                    {dr.responseTimeMs ? ` — analyzed in ${(dr.responseTimeMs / 1000).toFixed(1)}s` : ""}
                  </p>
                </div>
              </div>
            </div>

            {/* ─── Priority Fixes ──────────────────────────── */}
            {priorityFixes.length > 0 && (
              <div className="rounded-2xl border border-red-400/20 bg-red-400/[0.03] p-6">
                <h3 className="text-base font-medium text-heading mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 9v4M12 17h.01" strokeLinecap="round" /><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /></svg>
                  Priority Fixes ({priorityFixes.length})
                </h3>
                <div className="space-y-2">
                  {priorityFixes.slice(0, 10).map((fix, i) => (
                    <div key={i} className="rounded-lg bg-white/[0.02] border border-border overflow-hidden">
                      <button onClick={() => setExpandedFix(expandedFix === i ? null : i)}
                        className="w-full flex items-center gap-3 p-3 hover:bg-white/[0.02] transition-colors text-left">
                        <StatusIcon status={fix.status} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-heading">{fix.label}</p>
                          <p className="text-[11px] text-white/30">{fix.category}</p>
                        </div>
                        {priorityBadge(fix.priority)}
                        <svg className={`w-3.5 h-3.5 text-white/20 transition-transform ${expandedFix === i ? "rotate-180" : ""}`} viewBox="0 0 16 16" fill="none">
                          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {expandedFix === i && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="px-3 pb-3 space-y-2 border-t border-border pt-3">
                              <p className="text-xs text-body">{fix.detail}</p>
                              {fix.howToFix && (
                                <div className="flex items-start gap-2 p-2.5 rounded-lg bg-accent/5 border border-accent/10">
                                  <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M6 8.5l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="8" cy="8" r="6" /></svg>
                                  <p className="text-xs text-accent/80">{fix.howToFix}</p>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ─── Filter Toggle ──────────────────────────── */}
            <div className="flex items-center justify-end">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <span className="text-xs text-body">Show issues only</span>
                <button type="button" role="switch" aria-checked={showOnlyIssues} onClick={() => setShowOnlyIssues(v => !v)}
                  className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${showOnlyIssues ? "bg-accent" : "bg-white/10"}`}>
                  <span className={`inline-block h-3.5 w-3.5 rounded-full bg-white transition-transform ${showOnlyIssues ? "translate-x-[18px]" : "translate-x-[3px]"}`} />
                </button>
              </label>
            </div>

            {/* ─── Category Breakdown ──────────────────────── */}
            <div className="space-y-3">
              {dr.categories.map(cat => {
                const passCount = cat.checks.filter(c => c.status === "pass").length;
                const catScore = cat.checks.length > 0 ? Math.round((passCount / cat.checks.length) * 100) : 100;
                const isExpanded = expandedCats.has(cat.name);
                const visibleChecks = showOnlyIssues ? cat.checks.filter(c => c.status !== "pass") : cat.checks;
                const warnCount = cat.checks.filter(c => c.status === "warning").length;
                const failCount = cat.checks.filter(c => c.status === "fail").length;

                if (showOnlyIssues && visibleChecks.length === 0) {
                  return (
                    <div key={cat.name} className="rounded-xl border border-border bg-bg-card overflow-hidden opacity-50">
                      <div className="w-full flex items-center gap-4 p-5 text-left">
                        <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={CATEGORY_ICONS[cat.name] || "M12 2v20"} /></svg>
                        <span className="flex-1 text-sm font-medium text-heading">{CATEGORY_LABELS[cat.name] || cat.name}</span>
                        <span className="text-xs text-emerald-400/70">All passed</span>
                        <span className={`text-sm font-bold ${scoreColor(catScore)}`}>{catScore}%</span>
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={cat.name} className="rounded-xl border border-border bg-bg-card overflow-hidden">
                    <button onClick={() => toggleCategory(cat.name)}
                      className="w-full flex items-center gap-4 p-5 hover:bg-white/[0.02] transition-colors text-left">
                      <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={CATEGORY_ICONS[cat.name] || "M12 2v20"} /></svg>
                      <span className="flex-1 text-sm font-medium text-heading">{CATEGORY_LABELS[cat.name] || cat.name}</span>
                      <span className="hidden sm:flex items-center gap-2 text-[11px]">
                        {passCount > 0 && <span className="text-emerald-400/70">{passCount} passed</span>}
                        {warnCount > 0 && <span className="text-amber-400/70">{warnCount} warn</span>}
                        {failCount > 0 && <span className="text-red-400/70">{failCount} fail</span>}
                      </span>
                      <div className="hidden md:block w-16">
                        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <div className="h-full rounded-full transition-all duration-500" style={{ width: `${catScore}%`, background: scoreRingHex(catScore) }} />
                        </div>
                      </div>
                      <span className={`text-sm font-bold min-w-[36px] text-right ${scoreColor(catScore)}`}>{catScore}%</span>
                      <svg className={`w-4 h-4 text-white/30 transition-transform ${isExpanded ? "rotate-180" : ""}`} viewBox="0 0 16 16" fill="none">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                          <div className="px-5 pb-5 space-y-2 border-t border-border pt-4">
                            {visibleChecks.map((check, idx) => (
                              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02]">
                                <StatusIcon status={check.status} />
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <p className="text-sm font-medium text-heading">{check.label}</p>
                                    {priorityBadge(check.priority)}
                                  </div>
                                  <p className="text-xs text-body mt-0.5">{check.detail}</p>
                                  {check.howToFix && check.status !== "pass" && (
                                    <div className="flex items-start gap-1.5 mt-2 p-2 rounded bg-accent/5 border border-accent/10">
                                      <svg className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M6 8.5l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="8" cy="8" r="6" /></svg>
                                      <p className="text-[11px] text-accent/70">{check.howToFix}</p>
                                    </div>
                                  )}
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

            {/* ─── CTA Bottom ──────────────────────────────── */}
            <div className="rounded-2xl border border-accent/20 bg-purple-darker/30 p-8 md:p-10 text-center space-y-4">
              <h3 className="text-[22px] font-medium text-heading">{t.ctaBottom}</h3>
              <p className="text-body text-sm max-w-[500px] mx-auto">{t.ctaBottomDesc}</p>
              <a href="https://w35pmime997.typeform.com/to/eqeeLQvb" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-primary-hover text-white font-medium text-sm transition-colors">
                {t.ctaBottomButton}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
