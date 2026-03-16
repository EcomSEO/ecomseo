"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { SitemapComparisonTranslation } from "@/lib/i18n/translations/seoTools";

type Tab = "onlyInFirst" | "onlyInSecond" | "inBoth" | "changed";

interface ChangedUrl {
  url: string;
  lastmod1?: string;
  lastmod2?: string;
}

interface CompareResult {
  totalFirst: number;
  totalSecond: number;
  onlyInFirst: string[];
  onlyInSecond: string[];
  inBoth: string[];
  onlyInFirstTotal: number;
  onlyInSecondTotal: number;
  inBothTotal: number;
  overlapPercent: number;
  changed: ChangedUrl[];
  changedTotal: number;
  dirStatsA: Record<string, number>;
  dirStatsB: Record<string, number>;
}

function VennDiagram({ result }: { result: CompareResult }) {
  const total = result.totalFirst + result.totalSecond - result.inBothTotal;
  const leftPct = total > 0 ? ((result.onlyInFirstTotal) / total) * 100 : 33;
  const overlapPct = total > 0 ? (result.inBothTotal / total) * 100 : 33;
  const rightPct = total > 0 ? ((result.onlyInSecondTotal) / total) * 100 : 33;

  return (
    <div className="rounded-2xl border border-border bg-bg-card p-6">
      <h3 className="text-sm font-medium text-heading mb-4 text-center">URL Overlap</h3>
      <div className="flex items-center justify-center gap-0 relative h-[120px]">
        {/* Left circle */}
        <div className="w-[140px] h-[120px] rounded-full border-2 border-red-400/50 bg-red-500/10 flex items-center justify-center relative z-10 -mr-8">
          <div className="text-center pr-6">
            <div className="text-lg font-medium text-red-400">{result.onlyInFirstTotal}</div>
            <div className="text-[10px] text-body">Only A ({leftPct.toFixed(0)}%)</div>
          </div>
        </div>
        {/* Overlap */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
          <div className="text-lg font-medium text-green-400">{result.inBothTotal}</div>
          <div className="text-[10px] text-body">Both ({overlapPct.toFixed(0)}%)</div>
        </div>
        {/* Right circle */}
        <div className="w-[140px] h-[120px] rounded-full border-2 border-yellow-400/50 bg-yellow-500/10 flex items-center justify-center relative z-10 -ml-8">
          <div className="text-center pl-6">
            <div className="text-lg font-medium text-yellow-400">{result.onlyInSecondTotal}</div>
            <div className="text-[10px] text-body">Only B ({rightPct.toFixed(0)}%)</div>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <span className="text-xs text-body">Overlap: <span className="text-heading font-medium">{result.overlapPercent}%</span></span>
      </div>
    </div>
  );
}

function exportSegment(urls: string[], filename: string) {
  const csv = "URL\n" + urls.map((u) => `"${u}"`).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

export default function SitemapComparisonClient({ t }: { t: SitemapComparisonTranslation }) {
  const [sitemap1, setSitemap1] = useState("");
  const [sitemap2, setSitemap2] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<CompareResult | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("onlyInFirst");

  const handleCompare = async () => {
    const s1 = sitemap1.trim();
    const s2 = sitemap2.trim();

    if (!s1 || !s2) { setError(t.errorEmpty); return; }

    const norm1 = /^https?:\/\//i.test(s1) ? s1 : "https://" + s1;
    const norm2 = /^https?:\/\//i.test(s2) ? s2 : "https://" + s2;

    try { new URL(norm1); new URL(norm2); } catch { setError(t.errorInvalid); return; }

    setError("");
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/sitemap-compare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sitemap1: norm1, sitemap2: norm2 }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "");
      }
      const data = await res.json();
      setResult(data);
      setActiveTab("onlyInFirst");
    } catch (e) {
      setError(e instanceof Error && e.message ? e.message : t.errorFetch);
    } finally {
      setLoading(false);
    }
  };

  const tabs: { key: Tab; label: string; count: number; cls: string }[] = result
    ? [
        { key: "onlyInFirst", label: t.onlyInFirst, count: result.onlyInFirstTotal, cls: "text-red-400" },
        { key: "onlyInSecond", label: t.onlyInSecond, count: result.onlyInSecondTotal, cls: "text-yellow-400" },
        { key: "inBoth", label: t.inBoth, count: result.inBothTotal, cls: "text-green-400" },
        { key: "changed", label: "Changed", count: result.changedTotal, cls: "text-accent" },
      ]
    : [];

  const activeUrls = result
    ? activeTab === "onlyInFirst"
      ? result.onlyInFirst
      : activeTab === "onlyInSecond"
      ? result.onlyInSecond
      : activeTab === "inBoth"
      ? result.inBoth
      : []
    : [];

  return (
    <div className="w-full max-w-[900px] mx-auto space-y-6">
      {/* Inputs */}
      <div className="rounded-2xl border border-border bg-bg-card p-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-heading">{t.sitemap1Label}</label>
            <input
              type="url"
              value={sitemap1}
              onChange={(e) => setSitemap1(e.target.value)}
              placeholder={t.sitemap1Placeholder}
              className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-body placeholder:text-white/20 focus:outline-none focus:border-accent/50 font-mono"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-heading">{t.sitemap2Label}</label>
            <input
              type="url"
              value={sitemap2}
              onChange={(e) => setSitemap2(e.target.value)}
              placeholder={t.sitemap2Placeholder}
              className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-body placeholder:text-white/20 focus:outline-none focus:border-accent/50 font-mono"
            />
          </div>
        </div>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button
          onClick={handleCompare}
          disabled={loading}
          className="w-full sm:w-auto px-8 py-3 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? t.comparingButton : t.compareButton}
        </button>
      </div>

      {/* Results */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Venn Diagram */}
            <VennDiagram result={result} />

            {/* Summary */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-heading">{result.totalFirst}</div>
                <div className="text-xs text-body mt-1">{t.totalFirst}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-heading">{result.totalSecond}</div>
                <div className="text-xs text-body mt-1">{t.totalSecond}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className={`text-2xl font-medium ${result.onlyInFirstTotal > 0 ? "text-red-400" : "text-green-400"}`}>{result.onlyInFirstTotal}</div>
                <div className="text-xs text-body mt-1">{t.onlyInFirst}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-green-400">{result.inBothTotal}</div>
                <div className="text-xs text-body mt-1">{t.inBoth}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-accent">{result.changedTotal}</div>
                <div className="text-xs text-body mt-1">Changed</div>
              </div>
            </div>

            {/* Tabs + Export */}
            <div className="rounded-2xl border border-border bg-bg-card overflow-hidden">
              <div className="flex border-b border-border">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex-1 px-4 py-3 text-xs font-medium transition-colors ${
                      activeTab === tab.key
                        ? "bg-white/5 text-heading border-b-2 border-accent"
                        : "text-body hover:text-heading"
                    }`}
                  >
                    {tab.label}{" "}
                    <span className={`${activeTab === tab.key ? tab.cls : "text-body"}`}>
                      ({tab.count})
                    </span>
                  </button>
                ))}
              </div>

              {/* Export button */}
              {activeTab !== "changed" && activeUrls.length > 0 && (
                <div className="px-4 py-2 border-b border-border flex justify-end">
                  <button
                    onClick={() => exportSegment(activeUrls, `sitemap-${activeTab}.csv`)}
                    className="text-xs text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="none">
                      <path d="M10 3v10m0 0l-3-3m3 3l3-3M4 14v2a1 1 0 001 1h10a1 1 0 001-1v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Export CSV
                  </button>
                </div>
              )}

              {/* URL list */}
              {activeTab !== "changed" ? (
                <div className="divide-y divide-border max-h-[400px] overflow-y-auto">
                  {activeUrls.length === 0 ? (
                    <p className="px-4 py-8 text-sm text-body text-center italic">-</p>
                  ) : (
                    activeUrls.map((url, i) => (
                      <div key={i} className="px-4 py-2.5">
                        <span className="text-xs font-mono text-body break-all">{url}</span>
                      </div>
                    ))
                  )}
                </div>
              ) : (
                <div className="divide-y divide-border max-h-[400px] overflow-y-auto">
                  {result.changed.length === 0 ? (
                    <p className="px-4 py-8 text-sm text-body text-center italic">No lastmod changes detected</p>
                  ) : (
                    result.changed.map((ch, i) => (
                      <div key={i} className="px-4 py-2.5 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                        <span className="text-xs font-mono text-body break-all flex-1">{ch.url}</span>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-[10px] text-red-400 font-mono">{ch.lastmod1}</span>
                          <svg className="w-3 h-3 text-body" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-[10px] text-green-400 font-mono">{ch.lastmod2}</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Directory breakdown */}
            {(Object.keys(result.dirStatsA).length > 0 || Object.keys(result.dirStatsB).length > 0) && (
              <div className="grid md:grid-cols-2 gap-4">
                {Object.keys(result.dirStatsA).length > 0 && (
                  <div className="rounded-xl border border-border bg-bg-card p-4">
                    <h4 className="text-xs font-medium text-heading mb-2">Only in A - by directory</h4>
                    <div className="space-y-1 max-h-[200px] overflow-y-auto">
                      {Object.entries(result.dirStatsA).sort((a, b) => b[1] - a[1]).slice(0, 15).map(([dir, count]) => (
                        <div key={dir} className="flex items-center justify-between text-xs">
                          <span className="font-mono text-body truncate mr-2">{dir}</span>
                          <span className="text-red-400 font-medium shrink-0">{count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {Object.keys(result.dirStatsB).length > 0 && (
                  <div className="rounded-xl border border-border bg-bg-card p-4">
                    <h4 className="text-xs font-medium text-heading mb-2">Only in B - by directory</h4>
                    <div className="space-y-1 max-h-[200px] overflow-y-auto">
                      {Object.entries(result.dirStatsB).sort((a, b) => b[1] - a[1]).slice(0, 15).map(([dir, count]) => (
                        <div key={dir} className="flex items-center justify-between text-xs">
                          <span className="font-mono text-body truncate mr-2">{dir}</span>
                          <span className="text-yellow-400 font-medium shrink-0">{count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
