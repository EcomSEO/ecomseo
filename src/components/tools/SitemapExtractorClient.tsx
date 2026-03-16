"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { exportToPDF } from "@/lib/export-utils";
import type { SitemapExtractorTranslation } from "@/lib/i18n/translations/seoTools";

interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: string;
}

interface ExtractResult {
  sitemapUrl: string;
  isIndex: boolean;
  childSitemaps: string[];
  urls: SitemapEntry[];
  totalUrls: number;
  sitemapCount: number;
  stats: { byDirectory: Record<string, number> };
}

function isStale(lastmod: string | undefined): boolean {
  if (!lastmod) return false;
  try {
    const date = new Date(lastmod);
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    return date < oneYearAgo;
  } catch {
    return false;
  }
}

/* ---------- Directory Tree ---------- */
interface TreeNode {
  name: string;
  count: number;
  children: TreeNode[];
}

function buildTree(dirStats: Record<string, number>): TreeNode {
  const root: TreeNode = { name: "/", count: 0, children: [] };

  for (const [dir, count] of Object.entries(dirStats)) {
    const parts = dir.replace(/^\//, "").split("/").filter(Boolean);
    let node = root;
    root.count += count;

    for (const part of parts) {
      let child = node.children.find((c) => c.name === part);
      if (!child) {
        child = { name: part, count: 0, children: [] };
        node.children.push(child);
      }
      child.count += count;
      node = child;
    }
  }

  // Sort children by count descending
  const sortNode = (n: TreeNode) => {
    n.children.sort((a, b) => b.count - a.count);
    n.children.forEach(sortNode);
  };
  sortNode(root);
  return root;
}

function TreeBranch({ node, depth, totalUrls }: { node: TreeNode; depth: number; totalUrls: number }) {
  const [expanded, setExpanded] = useState(depth < 2);
  const hasChildren = node.children.length > 0;
  const pct = totalUrls > 0 ? ((node.count / totalUrls) * 100).toFixed(1) : "0";

  return (
    <div>
      <button
        onClick={() => hasChildren && setExpanded(!expanded)}
        className={`flex items-center gap-1.5 w-full text-left py-0.5 hover:bg-white/[0.02] rounded transition-colors ${hasChildren ? "cursor-pointer" : "cursor-default"}`}
        style={{ paddingLeft: `${depth * 16 + 4}px` }}
      >
        {hasChildren ? (
          <svg className={`w-3 h-3 text-body shrink-0 transition-transform ${expanded ? "rotate-90" : ""}`} viewBox="0 0 12 12" fill="none">
            <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <span className="w-3 shrink-0" />
        )}
        <svg className={`w-3.5 h-3.5 shrink-0 ${hasChildren ? "text-accent" : "text-body/50"}`} viewBox="0 0 16 16" fill="none">
          {hasChildren ? (
            <path d="M2 4h4l2-2h6v10H2V4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
          ) : (
            <path d="M4 2h8v12H4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
          )}
        </svg>
        <span className="text-xs text-heading font-mono truncate">{node.name === "/" ? "/" : `/${node.name}`}</span>
        <span className="text-[10px] text-body ml-auto shrink-0 tabular-nums">{node.count.toLocaleString()} ({pct}%)</span>
      </button>
      {expanded && hasChildren && (
        <div>
          {node.children.slice(0, 25).map((child) => (
            <TreeBranch key={child.name} node={child} depth={depth + 1} totalUrls={totalUrls} />
          ))}
          {node.children.length > 25 && (
            <p className="text-[10px] text-body italic" style={{ paddingLeft: `${(depth + 1) * 16 + 24}px` }}>
              ...{node.children.length - 25} more
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default function SitemapExtractorClient({ t }: { t: SitemapExtractorTranslation }) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<ExtractResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [showStaleOnly, setShowStaleOnly] = useState(false);
  const [dirExpanded, setDirExpanded] = useState(false);
  const [dirView, setDirView] = useState<"tree" | "chart">("tree");

  async function handleSubmit() {
    setError("");
    setResults(null);
    setSearch("");
    setDateFrom("");
    setDateTo("");
    setShowStaleOnly(false);

    let url = input.trim();
    if (!url) {
      setError(t.errorEmpty);
      return;
    }

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url;
      setInput(url);
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

  const filtered = useMemo(() => {
    if (!results) return [];
    let items = results.urls;

    if (search) {
      const q = search.toLowerCase();
      items = items.filter((u) => u.loc.toLowerCase().includes(q));
    }

    if (dateFrom) {
      const from = new Date(dateFrom);
      items = items.filter((u) => {
        if (!u.lastmod) return false;
        return new Date(u.lastmod) >= from;
      });
    }

    if (dateTo) {
      const to = new Date(dateTo);
      to.setHours(23, 59, 59, 999);
      items = items.filter((u) => {
        if (!u.lastmod) return false;
        return new Date(u.lastmod) <= to;
      });
    }

    if (showStaleOnly) {
      items = items.filter((u) => isStale(u.lastmod));
    }

    return items;
  }, [results, search, dateFrom, dateTo, showStaleOnly]);

  const staleCount = useMemo(() => {
    if (!results) return 0;
    return results.urls.filter((u) => isStale(u.lastmod)).length;
  }, [results]);

  const sortedDirs = useMemo(() => {
    if (!results) return [];
    return Object.entries(results.stats.byDirectory)
      .sort((a, b) => b[1] - a[1]);
  }, [results]);

  const dirTree = useMemo(() => {
    if (!results) return null;
    return buildTree(results.stats.byDirectory);
  }, [results]);

  function handleExportCsv() {
    if (!results) return;
    const header = "URL,Last Modified,Change Frequency,Priority,Stale\n";
    const rows = filtered
      .map(
        (u) =>
          `"${u.loc}","${u.lastmod || ""}","${u.changefreq || ""}","${u.priority || ""}","${isStale(u.lastmod) ? "Yes" : "No"}"`
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
        <p className="text-xs text-body">
          {t.urlHint} &mdash; or enter a domain to auto-detect /sitemap.xml
        </p>
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
            {results.isIndex && (
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20">
                  <svg className="w-4 h-4 text-accent" viewBox="0 0 20 20" fill="none">
                    <path d="M9 3H5a2 2 0 00-2 2v4m6-6h6a2 2 0 012 2v4M9 3v14m0 0H5a2 2 0 01-2-2v-4m6 6h6a2 2 0 002-2v-4m0-2H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="text-xs font-medium text-accent">{t.isSitemapIndexLabel}</span>
                </div>
                {results.childSitemaps.length > 0 && (
                  <span className="text-xs text-body">
                    {results.childSitemaps.length} child sitemaps found
                  </span>
                )}
              </div>
            )}

            {/* Summary stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-semibold text-heading">{results.totalUrls.toLocaleString()}</div>
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
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className={`text-2xl font-semibold ${staleCount > 0 ? "text-yellow-400" : "text-emerald-400"}`}>
                  {staleCount.toLocaleString()}
                </div>
                <div className="text-xs text-body mt-1">Stale (&gt;1yr)</div>
              </div>
            </div>

            {/* Directory distribution */}
            {sortedDirs.length > 0 && (
              <div className="rounded-xl border border-border bg-bg-card p-4 space-y-3">
                <button
                  onClick={() => setDirExpanded(!dirExpanded)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-sm font-medium text-heading">
                    URL Distribution by Directory ({sortedDirs.length} directories)
                  </span>
                  <svg
                    className={`w-4 h-4 text-body transition-transform ${dirExpanded ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
                {dirExpanded && (
                  <div className="space-y-3 mt-2">
                    {/* View toggle */}
                    <div className="flex gap-1 p-0.5 rounded-lg bg-white/[0.03] border border-border max-w-fit">
                      <button
                        onClick={() => setDirView("tree")}
                        className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${dirView === "tree" ? "bg-accent text-white" : "text-body hover:text-heading"}`}
                      >
                        Tree View
                      </button>
                      <button
                        onClick={() => setDirView("chart")}
                        className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${dirView === "chart" ? "bg-accent text-white" : "text-body hover:text-heading"}`}
                      >
                        Bar Chart
                      </button>
                    </div>

                    {dirView === "tree" && dirTree ? (
                      <div className="max-h-[400px] overflow-y-auto rounded-lg border border-border bg-white/[0.01] p-2">
                        {dirTree.children.map((child) => (
                          <TreeBranch key={child.name} node={child} depth={0} totalUrls={results.totalUrls} />
                        ))}
                        {dirTree.children.length === 0 && (
                          <div className="flex items-center gap-1.5 py-0.5 pl-1">
                            <span className="text-xs text-body font-mono">/</span>
                            <span className="text-[10px] text-body ml-auto">{results.totalUrls.toLocaleString()}</span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {sortedDirs.slice(0, 30).map(([dir, count]) => {
                          const pct = results.totalUrls > 0 ? (count / results.totalUrls) * 100 : 0;
                          return (
                            <div key={dir} className="flex items-center gap-3">
                              <span className="text-xs font-mono text-body truncate w-[200px] shrink-0" title={dir}>
                                {dir}
                              </span>
                              <div className="flex-1 h-5 bg-white/5 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-accent/60 rounded-full"
                                  style={{ width: `${Math.max(pct, 1)}%` }}
                                />
                              </div>
                              <span className="text-xs font-mono text-heading w-[60px] text-right shrink-0">
                                {count.toLocaleString()}
                              </span>
                              <span className="text-xs text-body w-[45px] text-right shrink-0">
                                {pct.toFixed(1)}%
                              </span>
                            </div>
                          );
                        })}
                        {sortedDirs.length > 30 && (
                          <p className="text-xs text-body italic">...and {sortedDirs.length - 30} more directories</p>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex-1 min-w-[200px] relative">
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
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="rounded-xl border border-border bg-bg px-3 py-2.5 text-xs text-heading focus:outline-none focus:ring-2 focus:ring-accent/40"
                title="From date"
              />
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="rounded-xl border border-border bg-bg px-3 py-2.5 text-xs text-heading focus:outline-none focus:ring-2 focus:ring-accent/40"
                title="To date"
              />
              <label className="flex items-center gap-2 text-xs text-body cursor-pointer shrink-0">
                <input
                  type="checkbox"
                  checked={showStaleOnly}
                  onChange={(e) => setShowStaleOnly(e.target.checked)}
                  className="rounded border-border accent-accent"
                />
                Stale only
              </label>
              <button
                onClick={handleExportCsv}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-bg-card text-sm font-medium text-heading hover:border-accent/30 transition-colors shrink-0"
              >
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
                  <path d="M10 3v10m0 0l-3-3m3 3l3-3M4 14v2a1 1 0 001 1h10a1 1 0 001-1v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t.exportCsv}
              </button>
              <button
                onClick={() => {
                  if (!results) return;
                  exportToPDF({
                    title: "Sitemap Extraction Report",
                    data: filtered.slice(0, 500).map((u) => ({
                      URL: u.loc,
                      "Last Modified": u.lastmod || "-",
                      "Change Freq": u.changefreq || "-",
                      Priority: u.priority || "-",
                    })),
                    subtitle: `${results.totalUrls} total URLs from ${results.sitemapCount} sitemap(s)`,
                    url: results.sitemapUrl,
                  });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-bg-card text-sm font-medium text-heading hover:border-accent/30 transition-colors shrink-0"
              >
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13 2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 2v4h4M8 10h4M8 13h6" strokeLinecap="round" />
                </svg>
                PDF
              </button>
            </div>

            {/* Filtered count */}
            {(search || dateFrom || dateTo || showStaleOnly) && (
              <p className="text-xs text-body">
                Showing {filtered.length.toLocaleString()} of {results.urls.length.toLocaleString()} URLs
              </p>
            )}

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
                        <th className="text-left py-3 px-4 text-body font-medium w-[70px]">Fresh?</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filtered.map((entry, i) => {
                        const stale = isStale(entry.lastmod);
                        return (
                          <tr key={i} className={`border-b border-border/50 hover:bg-white/[0.02] ${stale ? "bg-yellow-500/5" : ""}`}>
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
                            <td className="py-2 px-4 text-body font-mono">{entry.lastmod || "-"}</td>
                            <td className="py-2 px-4 text-body">{entry.changefreq || "-"}</td>
                            <td className="py-2 px-4 text-body font-mono">{entry.priority || "-"}</td>
                            <td className="py-2 px-4">
                              {entry.lastmod ? (
                                stale ? (
                                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-yellow-500/15 text-yellow-400 border border-yellow-500/20">
                                    Stale
                                  </span>
                                ) : (
                                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-green-500/15 text-green-400 border border-green-500/20">
                                    Fresh
                                  </span>
                                )
                              ) : (
                                <span className="text-body/30">-</span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
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
