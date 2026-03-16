"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExportButtons from "./ExportButtons";
import { exportToPDF } from "@/lib/export-utils";
import type { PageTypeClassifierTranslation } from "@/lib/i18n/translations/seoTools";

type PageType =
  | "product"
  | "category"
  | "blog"
  | "blog_post"
  | "blog_index"
  | "homepage"
  | "about"
  | "contact"
  | "faq"
  | "cart"
  | "checkout"
  | "legal"
  | "search"
  | "account"
  | "landing_page"
  | "other";

interface PageTypeResult {
  url: string;
  pageType: PageType;
  confidence: number;
  signals: string[];
  recommendations: string[];
}

const TYPE_CONFIG: Record<string, { label: string; cls: string; color: string }> = {
  product:      { label: "Product",        cls: "bg-blue-500/15 text-blue-400 border-blue-500/20",     color: "#60a5fa" },
  category:     { label: "Category",       cls: "bg-purple-500/15 text-purple-400 border-purple-500/20", color: "#a78bfa" },
  blog:         { label: "Blog / Article", cls: "bg-green-500/15 text-green-400 border-green-500/20",   color: "#4ade80" },
  blog_post:    { label: "Blog Post",      cls: "bg-green-500/15 text-green-400 border-green-500/20",   color: "#4ade80" },
  blog_index:   { label: "Blog Index",     cls: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20", color: "#34d399" },
  homepage:     { label: "Homepage",       cls: "bg-accent/15 text-accent border-accent/20",            color: "#818cf8" },
  about:        { label: "About",          cls: "bg-sky-500/15 text-sky-400 border-sky-500/20",         color: "#38bdf8" },
  contact:      { label: "Contact",        cls: "bg-teal-500/15 text-teal-400 border-teal-500/20",      color: "#2dd4bf" },
  faq:          { label: "FAQ",            cls: "bg-indigo-500/15 text-indigo-400 border-indigo-500/20", color: "#818cf8" },
  cart:         { label: "Cart",           cls: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20", color: "#facc15" },
  checkout:     { label: "Checkout",       cls: "bg-orange-500/15 text-orange-400 border-orange-500/20", color: "#fb923c" },
  legal:        { label: "Legal / Policy", cls: "bg-white/10 text-body border-white/10",                color: "#94a3b8" },
  search:       { label: "Search Results", cls: "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",      color: "#22d3ee" },
  account:      { label: "Account",        cls: "bg-rose-500/15 text-rose-400 border-rose-500/20",      color: "#fb7185" },
  landing_page: { label: "Landing Page",   cls: "bg-pink-500/15 text-pink-400 border-pink-500/20",      color: "#f472b6" },
  other:        { label: "Other",          cls: "bg-white/10 text-body border-white/10",                color: "#64748b" },
};

function getTypeLabel(type: PageType, t: PageTypeClassifierTranslation): string {
  const translationMap: Partial<Record<PageType, string>> = {
    product: t.typeProduct,
    category: t.typeCategory,
    blog: t.typeBlog,
    blog_post: t.typeBlog,
    homepage: t.typeHomepage,
    cart: t.typeCart,
    checkout: t.typeCheckout,
    legal: t.typeLegal,
    search: t.typeSearch,
    other: t.typeOther,
  };
  return translationMap[type] || TYPE_CONFIG[type]?.label || type;
}

function TypeBadge({ type, t }: { type: PageType; t: PageTypeClassifierTranslation }) {
  const cfg = TYPE_CONFIG[type] ?? TYPE_CONFIG.other;
  const label = getTypeLabel(type, t);
  return (
    <span className={`inline-block px-2.5 py-1 rounded-lg text-xs border font-medium ${cfg.cls}`}>
      {label}
    </span>
  );
}

function ConfidenceBadge({ confidence }: { confidence: number }) {
  const color = confidence >= 80 ? "text-green-400" : confidence >= 60 ? "text-yellow-400" : "text-red-400";
  return (
    <span className={`text-xs font-medium ${color}`}>
      {confidence}%
    </span>
  );
}

/* ---------- Pie Chart ---------- */
function PieChart({ distribution }: { distribution: { type: PageType; count: number; pct: number }[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const total = distribution.reduce((s, d) => s + d.count, 0);
  if (total === 0) return null;

  // Build SVG arcs
  const size = 160;
  const cx = size / 2;
  const cy = size / 2;
  const r = 60;
  let cumAngle = -90; // start top

  const slices = distribution.map((d, i) => {
    const angle = (d.count / total) * 360;
    const startAngle = cumAngle;
    cumAngle += angle;
    const endAngle = cumAngle;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    const x1 = cx + r * Math.cos(startRad);
    const y1 = cy + r * Math.sin(startRad);
    const x2 = cx + r * Math.cos(endRad);
    const y2 = cy + r * Math.sin(endRad);
    const largeArc = angle > 180 ? 1 : 0;
    const path = `M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${largeArc},1 ${x2},${y2} Z`;
    const color = TYPE_CONFIG[d.type]?.color || "#64748b";

    return { path, color, ...d, index: i };
  });

  return (
    <div className="rounded-2xl border border-border bg-bg-card p-6">
      <h3 className="text-sm font-medium text-heading mb-4 text-center">Page Type Distribution</h3>
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="shrink-0">
          {slices.map((s) => (
            <path
              key={s.index}
              d={s.path}
              fill={s.color}
              stroke="var(--bg-card, #1a1a2e)"
              strokeWidth="1.5"
              opacity={hovered === null || hovered === s.index ? 1 : 0.3}
              onMouseEnter={() => setHovered(s.index)}
              onMouseLeave={() => setHovered(null)}
              className="transition-opacity cursor-pointer"
            />
          ))}
          {/* Center label */}
          <text x={cx} y={cx - 6} textAnchor="middle" className="fill-heading text-lg font-medium" fontSize="18">{total}</text>
          <text x={cx} y={cx + 12} textAnchor="middle" className="fill-body" fontSize="10">pages</text>
        </svg>
        <div className="flex flex-wrap gap-x-4 gap-y-1.5">
          {slices.map((s) => (
            <div
              key={s.index}
              className={`flex items-center gap-2 cursor-pointer transition-opacity ${hovered !== null && hovered !== s.index ? "opacity-30" : ""}`}
              onMouseEnter={() => setHovered(s.index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: s.color }} />
              <span className="text-xs text-body">{TYPE_CONFIG[s.type]?.label || s.type}</span>
              <span className="text-xs text-heading font-medium">{s.count} ({s.pct}%)</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Recommendations Panel ---------- */
function RecommendationsPanel({ recommendations, type, t }: { recommendations: string[]; type: PageType; t: PageTypeClassifierTranslation }) {
  if (!recommendations || recommendations.length === 0) return null;
  return (
    <div className="mt-3 rounded-xl border border-border bg-white/[0.02] p-4 space-y-2">
      <p className="text-xs font-medium text-heading">SEO Recommendations for {getTypeLabel(type, t)} pages:</p>
      <ul className="space-y-1.5">
        {recommendations.map((rec, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-body">
            <svg className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
              <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {rec}
          </li>
        ))}
      </ul>
    </div>
  );
}

function exportByType(results: PageTypeResult[], filterType: string | null) {
  const filtered = filterType ? results.filter((r) => r.pageType === filterType) : results;
  const csv = "URL,Page Type,Confidence,Signals,Recommendations\n" + filtered.map((r) =>
    `"${r.url}","${r.pageType}","${r.confidence}%","${r.signals.join("; ")}","${r.recommendations.join("; ")}"`
  ).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `page-types${filterType ? `-${filterType}` : ""}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
}

export default function PageTypeClassifierClient({ t }: { t: PageTypeClassifierTranslation }) {
  const [urls, setUrls] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<PageTypeResult[] | null>(null);
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());
  const [filterType, setFilterType] = useState<string | null>(null);

  const toggleRow = (i: number) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };

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
    setExpandedRows(new Set());
    setFilterType(null);

    try {
      const res = await fetch("/api/page-type-check", {
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

  const distribution = useMemo(() => {
    if (!results) return [];
    const counts: Record<string, number> = {};
    for (const r of results) {
      counts[r.pageType] = (counts[r.pageType] || 0) + 1;
    }
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([type, count]) => ({
        type: type as PageType,
        count,
        pct: Math.round((count / results.length) * 100),
      }));
  }, [results]);

  const uniqueTypes = useMemo(() => {
    if (!results) return [];
    return [...new Set(results.map((r) => r.pageType))].sort();
  }, [results]);

  const filteredResults = useMemo(() => {
    if (!results) return [];
    if (!filterType) return results;
    return results.filter((r) => r.pageType === filterType);
  }, [results, filterType]);

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
        {results && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Export */}
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <ExportButtons
                onExportPDF={() => {
                  if (!results) return;
                  exportToPDF({
                    title: "Page Type Classification Report",
                    data: filteredResults.map((r) => ({
                      URL: r.url,
                      Type: r.pageType,
                      Confidence: `${r.confidence}%`,
                      Signals: r.signals.join(", "),
                      Recommendations: r.recommendations.join(", "),
                    })),
                  });
                }}
              />
              <button
                onClick={() => exportByType(results, filterType)}
                className="text-xs text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="none">
                  <path d="M10 3v10m0 0l-3-3m3 3l3-3M4 14v2a1 1 0 001 1h10a1 1 0 001-1v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Export CSV{filterType ? ` (${TYPE_CONFIG[filterType]?.label || filterType})` : ""}
              </button>
            </div>

            {/* Summary row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-heading">{results.length}</div>
                <div className="text-xs text-body mt-1">{t.pagesClassified}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-accent">{uniqueTypes.length}</div>
                <div className="text-xs text-body mt-1">Page Types</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-green-400">
                  {results.length > 0 ? Math.round(results.reduce((s, r) => s + r.confidence, 0) / results.length) : 0}%
                </div>
                <div className="text-xs text-body mt-1">Avg Confidence</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-yellow-400">
                  {results.filter((r) => r.confidence < 60).length}
                </div>
                <div className="text-xs text-body mt-1">Low Confidence</div>
              </div>
            </div>

            {/* Pie Chart */}
            {distribution.length > 0 && <PieChart distribution={distribution} />}

            {/* Filter tabs */}
            <div className="flex gap-1 p-1 rounded-xl bg-white/[0.03] border border-border flex-wrap max-w-fit">
              <button
                onClick={() => setFilterType(null)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  filterType === null ? "bg-accent text-white" : "text-body hover:text-heading"
                }`}
              >
                All ({results.length})
              </button>
              {uniqueTypes.map((pt) => {
                const count = results.filter((r) => r.pageType === pt).length;
                const cfg = TYPE_CONFIG[pt] ?? TYPE_CONFIG.other;
                return (
                  <button
                    key={pt}
                    onClick={() => setFilterType(pt)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                      filterType === pt ? "bg-accent text-white" : "text-body hover:text-heading"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-sm shrink-0" style={{ backgroundColor: cfg.color }} />
                    {cfg.label} ({count})
                  </button>
                );
              })}
            </div>

            {/* Results list */}
            <div className="space-y-3">
              {filteredResults.map((r, i) => {
                const origIdx = results.indexOf(r);
                const isExpanded = expandedRows.has(origIdx);
                const cfg = TYPE_CONFIG[r.pageType] ?? TYPE_CONFIG.other;

                return (
                  <div key={origIdx} className="rounded-2xl border border-border bg-bg-card overflow-hidden">
                    <button
                      onClick={() => toggleRow(origIdx)}
                      className="w-full flex items-center gap-3 p-5 text-left hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: cfg.color }} />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-heading truncate font-mono">
                          {r.url.replace(/^https?:\/\//, "").slice(0, 60)}{r.url.length > 68 ? "..." : ""}
                        </div>
                      </div>
                      <TypeBadge type={r.pageType} t={t} />
                      <ConfidenceBadge confidence={r.confidence} />
                      <svg className={`w-4 h-4 text-body shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="none">
                        <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                          <div className="px-5 pb-5 space-y-4 border-t border-border pt-4">
                            {/* Signals */}
                            <div>
                              <p className="text-xs text-body mb-2">{t.signalsColumn}</p>
                              <div className="flex flex-wrap gap-1.5">
                                {r.signals.map((s, j) => (
                                  <span key={j} className="text-xs bg-white/5 border border-border rounded px-2 py-1 text-body">
                                    {s}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Recommendations */}
                            <RecommendationsPanel recommendations={r.recommendations} type={r.pageType} t={t} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {filteredResults.length === 0 && filterType && (
              <div className="rounded-2xl border border-border bg-bg-card p-8 text-center">
                <p className="text-sm text-body">No pages classified as {TYPE_CONFIG[filterType]?.label || filterType}.</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
