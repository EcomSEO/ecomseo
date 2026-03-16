"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { DuplicateContentTranslation } from "@/lib/i18n/translations/seoTools";

interface PageInfo {
  url: string;
  wordCount: number;
  title: string;
  canonical: string;
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

interface DuplicateCheckResult {
  pages: PageInfo[];
  pairs: PairResult[];
  matrix: number[][];
  clusters: Cluster[];
}

type ViewTab = "pairs" | "heatmap" | "clusters";

function VerdictBadge({ verdict, t }: { verdict: PairResult["verdict"]; t: DuplicateContentTranslation }) {
  const config: Record<PairResult["verdict"], { label: string; cls: string }> = {
    duplicate: { label: t.duplicate, cls: "bg-red-500/15 text-red-400 border-red-500/20" },
    similar:   { label: t.similar,   cls: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20" },
    unique:    { label: t.unique,    cls: "bg-green-500/15 text-green-400 border-green-500/20" },
  };
  const { label, cls } = config[verdict];
  return (
    <span className={`inline-block px-2.5 py-1 rounded-lg text-xs border font-medium ${cls}`}>
      {label}
    </span>
  );
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

function shortUrl(url: string, maxLen = 25): string {
  const clean = url.replace(/^https?:\/\//, "");
  return clean.length > maxLen ? clean.slice(0, maxLen) + "..." : clean;
}

function HeatmapGrid({ pages, matrix }: { pages: PageInfo[]; matrix: number[][] }) {
  if (pages.length === 0 || matrix.length === 0) return null;

  return (
    <div className="rounded-2xl border border-border bg-bg-card p-5 overflow-x-auto">
      <h3 className="text-sm font-medium text-heading mb-4">Similarity Matrix</h3>
      <div className="inline-block">
        <table className="text-xs">
          <thead>
            <tr>
              <th className="p-1" />
              {pages.map((p, i) => (
                <th key={i} className="p-1 text-body font-normal">
                  <div className="truncate -rotate-45 origin-bottom-left w-[60px] text-[10px] font-mono" title={p.url}>
                    {shortUrl(p.url, 15)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pages.map((p, i) => (
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
                      title={`${pages[i]?.url} vs ${pages[j]?.url}: ${val}%`}
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

function ClusterView({ clusters, pages }: { clusters: Cluster[]; pages: PageInfo[] }) {
  if (clusters.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-bg-card p-8 text-center">
        <p className="text-sm text-body">No duplicate/similar clusters found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {clusters.map((cluster, ci) => (
        <div key={ci} className="rounded-2xl border border-yellow-500/30 bg-bg-card p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-heading">Cluster {ci + 1}</h4>
            <span className="text-xs text-body">{cluster.urls.length} pages</span>
          </div>
          <div className="space-y-2">
            {cluster.urls.map((url, ui) => {
              const page = pages.find((p) => p.url === url);
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
  );
}

export default function DuplicateContentClient({ t }: { t: DuplicateContentTranslation }) {
  const [urls, setUrls] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<DuplicateCheckResult | null>(null);
  const [threshold, setThreshold] = useState(40);
  const [activeView, setActiveView] = useState<ViewTab>("pairs");
  const [expandedPair, setExpandedPair] = useState<number | null>(null);

  const handleCheck = async () => {
    const lines = urls
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    if (lines.length === 0) { setError(t.errorEmpty); return; }
    if (lines.length < 2) { setError(t.errorTooFew); return; }
    if (lines.length > 20) { setError(t.errorTooMany); return; }

    const normalized = lines.map((l) =>
      /^https?:\/\//i.test(l) ? l : "https://" + l
    );
    for (const u of normalized) {
      try { new URL(u); } catch { setError(t.errorInvalid); return; }
    }

    setError("");
    setLoading(true);
    setResults(null);
    setExpandedPair(null);

    try {
      const res = await fetch("/api/duplicate-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ urls: normalized }),
      });
      if (!res.ok) throw new Error();
      const data: DuplicateCheckResult = await res.json();
      setResults(data);
    } catch {
      setError(t.errorFetch);
    } finally {
      setLoading(false);
    }
  };

  const filteredPairs = useMemo(() => {
    if (!results) return [];
    return results.pairs.filter((p) => p.similarity * 100 >= threshold);
  }, [results, threshold]);

  const duplicateCount = results?.pairs.filter((p) => p.verdict === "duplicate").length ?? 0;
  const similarCount = results?.pairs.filter((p) => p.verdict === "similar").length ?? 0;

  const wordCountForUrl = (url: string): number => {
    return results?.pages.find((p) => p.url === url)?.wordCount ?? 0;
  };

  const viewTabs: { key: ViewTab; label: string }[] = [
    { key: "pairs", label: "Pair Comparison" },
    { key: "heatmap", label: "Similarity Matrix" },
    { key: "clusters", label: "Clusters" },
  ];

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
            className="space-y-4"
          >
            {/* Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-heading">{results.pages.length}</div>
                <div className="text-xs text-body mt-1">{t.pagesAnalyzed}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className={`text-2xl font-medium ${duplicateCount > 0 ? "text-red-400" : "text-green-400"}`}>
                  {duplicateCount}
                </div>
                <div className="text-xs text-body mt-1">{t.duplicatePairs}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className={`text-2xl font-medium ${similarCount > 0 ? "text-yellow-400" : "text-green-400"}`}>
                  {similarCount}
                </div>
                <div className="text-xs text-body mt-1">{t.similarPairs}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-accent">{results.clusters.length}</div>
                <div className="text-xs text-body mt-1">Clusters</div>
              </div>
            </div>

            {/* Threshold slider */}
            <div className="rounded-xl border border-border bg-bg-card p-4">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs text-body">Similarity Threshold</label>
                <span className="text-sm font-medium text-heading">{threshold}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={threshold}
                onChange={(e) => setThreshold(Number(e.target.value))}
                className="w-full accent-accent h-1.5 rounded-full appearance-none bg-white/10 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-body mt-1">
                <span>0% (Show All)</span>
                <span>100%</span>
              </div>
            </div>

            {/* View tabs */}
            <div className="flex gap-1 p-1 rounded-xl bg-white/[0.03] border border-border max-w-fit">
              {viewTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveView(tab.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeView === tab.key
                      ? "bg-accent text-white"
                      : "text-body hover:text-heading hover:bg-white/[0.05]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeView === "heatmap" && (
              <HeatmapGrid pages={results.pages} matrix={results.matrix} />
            )}

            {activeView === "clusters" && (
              <ClusterView clusters={results.clusters} pages={results.pages} />
            )}

            {activeView === "pairs" && (
              <div className="space-y-3">
                {filteredPairs.length === 0 && (
                  <div className="rounded-2xl border border-border bg-bg-card p-8 text-center">
                    <p className="text-sm text-body">No pairs above {threshold}% similarity.</p>
                  </div>
                )}
                {filteredPairs.map((pair, i) => (
                  <div key={i} className="rounded-2xl border border-border bg-bg-card overflow-hidden">
                    <div
                      className="p-5 space-y-4 cursor-pointer hover:bg-white/[0.01] transition-colors"
                      onClick={() => setExpandedPair(expandedPair === i ? null : i)}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                        <div className="flex-1 min-w-0">
                          <span className="text-xs font-mono text-body break-all">
                            {pair.urlA.replace(/^https?:\/\//, "").slice(0, 60)}
                          </span>
                          <div className="text-xs text-white/30 mt-0.5">
                            {t.wordCount}: {wordCountForUrl(pair.urlA).toLocaleString()}
                          </div>
                        </div>
                        <div className="text-xs font-medium text-white/30 shrink-0 uppercase">{t.vsLabel}</div>
                        <div className="flex-1 min-w-0 sm:text-right">
                          <span className="text-xs font-mono text-body break-all">
                            {pair.urlB.replace(/^https?:\/\//, "").slice(0, 60)}
                          </span>
                          <div className="text-xs text-white/30 mt-0.5">
                            {t.wordCount}: {wordCountForUrl(pair.urlB).toLocaleString()}
                          </div>
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
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
