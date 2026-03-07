"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { SitemapExtractorTranslation } from "@/lib/i18n/translations/seoTools";

interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: string;
}

interface ExtractResult {
  urls: SitemapEntry[];
  sitemapCount: number;
  isSitemapIndex: boolean;
}

export default function SitemapExtractorClient({ t }: { t: SitemapExtractorTranslation }) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<ExtractResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  async function handleSubmit() {
    setError("");
    setResults(null);
    setSearch("");

    const url = input.trim();
    if (!url) {
      setError(t.errorEmpty);
      return;
    }

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      setError(t.errorInvalid);
      return;
    }

    try {
      new URL(url);
    } catch {
      setError(t.errorInvalid);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/sitemap-extract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setResults(data);
    } catch {
      setError(t.errorFetch);
    } finally {
      setLoading(false);
    }
  }

  function handleExportCsv() {
    if (!results) return;
    const header = "URL,Last Modified,Change Frequency,Priority\n";
    const rows = results.urls
      .map(
        (u) =>
          `"${u.loc}","${u.lastmod || ""}","${u.changefreq || ""}","${u.priority || ""}"`
      )
      .join("\n");
    const csv = header + rows;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "sitemap-urls.csv";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  const filtered = results
    ? search
      ? results.urls.filter((u) => u.loc.toLowerCase().includes(search.toLowerCase()))
      : results.urls
    : [];

  return (
    <div className="space-y-6 max-w-[900px] mx-auto">
      {/* Input */}
      <div className="rounded-2xl border border-border bg-bg-card p-6 space-y-4">
        <label className="block text-sm font-medium text-heading">{t.urlLabel}</label>
        <div className="flex gap-3">
          <input
            type="url"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.urlPlaceholder}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            className="flex-1 rounded-xl border border-border bg-bg px-4 py-3 text-sm text-heading placeholder:text-body/50 focus:outline-none focus:ring-2 focus:ring-accent/40"
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-6 py-2.5 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors disabled:opacity-50 shrink-0"
          >
            {loading ? t.extracting : t.extractButton}
          </button>
        </div>
        <p className="text-xs text-body">{t.urlHint}</p>
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      {/* Results */}
      <AnimatePresence mode="wait">
        {results && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {/* Sitemap index badge */}
            {results.isSitemapIndex && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20">
                <svg className="w-4 h-4 text-accent" viewBox="0 0 20 20" fill="none">
                  <path d="M9 3H5a2 2 0 00-2 2v4m6-6h6a2 2 0 012 2v4M9 3v14m0 0H5a2 2 0 01-2-2v-4m6 6h6a2 2 0 002-2v-4m0-2H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="text-xs font-medium text-accent">{t.isSitemapIndexLabel}</span>
              </div>
            )}

            {/* Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-semibold text-heading">{results.urls.length.toLocaleString()}</div>
                <div className="text-xs text-body mt-1">{t.totalUrls}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-semibold text-heading">{results.sitemapCount}</div>
                <div className="text-xs text-body mt-1">{t.sitemapsProcessed}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-semibold text-emerald-400">
                  {results.urls.filter((u) => u.lastmod).length.toLocaleString()}
                </div>
                <div className="text-xs text-body mt-1">{t.urlsWithLastmod}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-semibold text-accent">
                  {results.urls.filter((u) => u.priority).length.toLocaleString()}
                </div>
                <div className="text-xs text-body mt-1">{t.urlsWithPriority}</div>
              </div>
            </div>

            {/* Search + Export */}
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-body/50"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M14 14l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="w-full rounded-xl border border-border bg-bg pl-10 pr-4 py-2.5 text-sm text-heading placeholder:text-body/50 focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
              </div>
              <button
                onClick={handleExportCsv}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-bg-card text-sm font-medium text-heading hover:border-accent/30 transition-colors shrink-0"
              >
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
                  <path d="M10 3v10m0 0l-3-3m3 3l3-3M4 14v2a1 1 0 001 1h10a1 1 0 001-1v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t.exportCsv}
              </button>
            </div>

            {/* URL Table */}
            {filtered.length > 0 ? (
              <div className="rounded-xl border border-border bg-bg-card overflow-hidden">
                <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
                  <table className="w-full text-xs">
                    <thead className="sticky top-0 bg-bg-card z-10">
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-body font-medium">{t.locHeader}</th>
                        <th className="text-left py-3 px-4 text-body font-medium w-[140px]">{t.lastmodHeader}</th>
                        <th className="text-left py-3 px-4 text-body font-medium w-[110px]">{t.changefreqHeader}</th>
                        <th className="text-left py-3 px-4 text-body font-medium w-[80px]">{t.priorityHeader}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filtered.map((entry, i) => (
                        <tr key={i} className="border-b border-border/50 hover:bg-white/[0.02]">
                          <td className="py-2 px-4 text-heading truncate max-w-[400px]">
                            <a
                              href={entry.loc}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-accent transition-colors"
                            >
                              {entry.loc}
                            </a>
                          </td>
                          <td className="py-2 px-4 text-body font-mono">{entry.lastmod || "—"}</td>
                          <td className="py-2 px-4 text-body">{entry.changefreq || "—"}</td>
                          <td className="py-2 px-4 text-body font-mono">{entry.priority || "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {search && filtered.length < results.urls.length && (
                  <div className="px-4 py-2 border-t border-border text-xs text-body">
                    Showing {filtered.length.toLocaleString()} of {results.urls.length.toLocaleString()} URLs
                  </div>
                )}
              </div>
            ) : results.urls.length === 0 ? (
              <div className="rounded-xl border border-border bg-bg-card p-8 text-center">
                <p className="text-sm text-body">{t.noUrls}</p>
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <div className="rounded-2xl border border-border bg-bg-card p-8 text-center space-y-4">
        <h3 className="text-lg font-medium text-heading">{t.ctaBottom}</h3>
        <p className="text-sm text-body max-w-md mx-auto">{t.ctaBottomDesc}</p>
        <a
          href="https://ecomseo.co/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
        >
          {t.ctaBottomButton}
        </a>
      </div>
    </div>
  );
}
