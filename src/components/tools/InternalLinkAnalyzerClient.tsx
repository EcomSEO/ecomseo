"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExportButtons from "./ExportButtons";
import { exportToPDF } from "@/lib/export-utils";
import type { InternalLinkAnalyzerTranslation } from "@/lib/i18n/translations/seoTools";
import LocaleLink from "@/components/ui/LocaleLink";

/* ── Types ────────────────────────────────────────────────────────────── */

interface CrawledPage {
  url: string;
  title: string;
  depth: number;
  internalLinksOut: number;
  internalLinksIn: number;
  externalLinksOut: number;
  status: number;
  broken: boolean;
}

interface GraphNode {
  id: string;
  label: string;
  depth: number;
  linksOut: number;
  linksIn: number;
}

interface GraphEdge {
  source: string;
  target: string;
}

interface BrokenLink {
  url: string;
  status: number;
  foundOn: string;
  anchor: string;
}

interface AnchorItem {
  text: string;
  count: number;
  isGeneric: boolean;
}

interface CrawlResult {
  url: string;
  mode: "crawl";
  pages: CrawledPage[];
  graphNodes: GraphNode[];
  graphEdges: GraphEdge[];
  orphanPages: string[];
  brokenLinks: BrokenLink[];
  topAnchors: AnchorItem[];
  genericAnchorCount: number;
  depthDistribution: Record<string, number>;
  ecommerceRecs: string[];
  stats: {
    totalPages: number;
    totalEdges: number;
    maxDepth: number;
    brokenCount: number;
    orphanCount: number;
  };
  score: number;
}

interface SingleResult {
  url: string;
  mode: "single";
  internalLinks: { href: string; anchorText: string; isGeneric: boolean; position: string }[];
  externalLinks: { href: string; anchorText: string }[];
  stats: {
    totalLinks: number;
    uniqueInternal: number;
    external: number;
    genericAnchors: number;
  };
  issues: string[];
  score: number;
}

type AnalysisResult = CrawlResult | SingleResult;

/* ── Score ring helper ───────────────────────────────────────────────── */

function getScoreColor(score: number): string {
  if (score >= 80) return "#4ade80";
  if (score >= 60) return "#facc15";
  if (score >= 40) return "#fb923c";
  return "#f87171";
}

/* ── Link Graph (SVG force-simulation-like layout) ───────────────────── */

interface SimNode {
  id: string;
  label: string;
  x: number;
  y: number;
  depth: number;
  linksIn: number;
  linksOut: number;
}

function LinkGraph({ nodes, edges }: { nodes: GraphNode[]; edges: GraphEdge[] }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [simNodes, setSimNodes] = useState<SimNode[]>([]);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ w: 700, h: 400 });

  useEffect(() => {
    const container = svgRef.current?.parentElement;
    if (container) {
      const rect = container.getBoundingClientRect();
      setDimensions({ w: Math.max(400, rect.width - 32), h: 400 });
    }
  }, []);

  useEffect(() => {
    if (nodes.length === 0) return;
    const w = dimensions.w;
    const h = dimensions.h;
    const cx = w / 2;
    const cy = h / 2;

    // Radial layout by depth
    const maxDepth = Math.max(...nodes.map((n) => n.depth), 1);
    const byDepth: Record<number, GraphNode[]> = {};
    for (const n of nodes) {
      if (!byDepth[n.depth]) byDepth[n.depth] = [];
      byDepth[n.depth].push(n);
    }

    const positioned: SimNode[] = [];
    for (const n of nodes) {
      const ring = n.depth;
      const nodesAtDepth = byDepth[ring];
      const idx = nodesAtDepth.indexOf(n);
      const count = nodesAtDepth.length;
      const radius = ring === 0 ? 0 : (ring / maxDepth) * Math.min(w, h) * 0.38;
      const angle = count === 1 ? 0 : (idx / count) * 2 * Math.PI - Math.PI / 2;

      positioned.push({
        id: n.id,
        label: n.label,
        x: cx + radius * Math.cos(angle) + (Math.random() - 0.5) * 10,
        y: cy + radius * Math.sin(angle) + (Math.random() - 0.5) * 10,
        depth: n.depth,
        linksIn: n.linksIn,
        linksOut: n.linksOut,
      });
    }
    setSimNodes(positioned);
  }, [nodes, dimensions]);

  const nodeMap = useMemo(() => {
    const map = new Map<string, SimNode>();
    for (const n of simNodes) map.set(n.id, n);
    return map;
  }, [simNodes]);

  if (nodes.length === 0) return null;

  const depthColors = ["#818cf8", "#60a5fa", "#34d399", "#fbbf24", "#f87171", "#c084fc"];

  return (
    <div className="rounded-xl border border-border bg-white/[0.02] p-4 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-xs font-medium text-body-strong">Link Graph</h4>
        <div className="flex gap-2">
          {Object.keys(depthColors).slice(0, Math.min(depthColors.length, (Math.max(...nodes.map(n => n.depth)) || 0) + 1)).map((d) => (
            <div key={d} className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: depthColors[parseInt(d)] }} />
              <span className="text-[10px] text-body">Depth {d}</span>
            </div>
          ))}
        </div>
      </div>
      <svg
        ref={svgRef}
        width={dimensions.w}
        height={dimensions.h}
        viewBox={`0 0 ${dimensions.w} ${dimensions.h}`}
        className="w-full"
      >
        {/* Edges */}
        {edges.map((e, i) => {
          const source = nodeMap.get(e.source);
          const target = nodeMap.get(e.target);
          if (!source || !target) return null;
          const isHighlighted = hoveredNode === e.source || hoveredNode === e.target;
          return (
            <line
              key={i}
              x1={source.x}
              y1={source.y}
              x2={target.x}
              y2={target.y}
              stroke={isHighlighted ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.06)"}
              strokeWidth={isHighlighted ? 1.5 : 0.5}
            />
          );
        })}
        {/* Nodes */}
        {simNodes.map((n) => {
          const r = Math.max(4, Math.min(12, 3 + n.linksIn));
          const color = depthColors[Math.min(n.depth, depthColors.length - 1)];
          const isHovered = hoveredNode === n.id;
          return (
            <g
              key={n.id}
              onMouseEnter={() => setHoveredNode(n.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer"
            >
              <circle
                cx={n.x}
                cy={n.y}
                r={isHovered ? r + 3 : r}
                fill={color}
                opacity={isHovered ? 1 : 0.7}
                stroke={isHovered ? "white" : "none"}
                strokeWidth={1}
              />
              {isHovered && (
                <foreignObject x={n.x + r + 4} y={n.y - 20} width="200" height="60">
                  <div className="bg-bg-card border border-border rounded-lg px-2 py-1.5 shadow-lg">
                    <div className="text-[10px] font-medium text-heading truncate">{n.label}</div>
                    <div className="text-[9px] text-body">In: {n.linksIn} | Out: {n.linksOut} | Depth: {n.depth}</div>
                  </div>
                </foreignObject>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ── Component ────────────────────────────────────────────────────────── */

export default function InternalLinkAnalyzerClient({ t }: { t: InternalLinkAnalyzerTranslation }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "graph" | "pages" | "anchors" | "broken" | "orphans" | "ecommerce">("overview");
  const [maxPages, setMaxPages] = useState(50);
  const [crawlMode, setCrawlMode] = useState(true);

  const handleCheck = useCallback(async () => {
    const trimmed = url.trim();

    if (!trimmed) {
      setError(t.errorEmpty);
      return;
    }

    const normalized = /^https?:\/\//i.test(trimmed) ? trimmed : "https://" + trimmed;

    try {
      new URL(normalized);
    } catch {
      setError(t.errorInvalid);
      return;
    }

    setError("");
    setLoading(true);
    setResult(null);
    setActiveTab("overview");

    try {
      const res = await fetch("/api/internal-link-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: normalized,
          crawl: crawlMode,
          maxPages,
        }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setResult(data);
    } catch {
      setError(t.errorFetch);
    } finally {
      setLoading(false);
    }
  }, [url, crawlMode, maxPages, t]);

  const isCrawl = result?.mode === "crawl";
  const crawlData = isCrawl ? (result as CrawlResult) : null;
  const singleData = !isCrawl && result ? (result as SingleResult) : null;

  return (
    <div className="w-full max-w-[900px] mx-auto space-y-6">
      {/* Input */}
      <div className="rounded-2xl border border-border bg-bg-card p-6 space-y-4">
        <label className="block text-sm font-medium text-heading">{t.urlLabel}</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder={t.urlPlaceholder}
          onKeyDown={(e) => { if (e.key === "Enter") handleCheck(); }}
          className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-body placeholder:text-white/20 focus:outline-none focus:border-accent/50 font-mono"
        />

        {/* Crawl options */}
        <div className="flex items-center gap-4 flex-wrap">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={crawlMode}
              onChange={(e) => setCrawlMode(e.target.checked)}
              className="w-4 h-4 rounded border-border bg-white/[0.03] accent-accent"
            />
            <span className="text-xs text-body">Multi-page crawl</span>
          </label>
          {crawlMode && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-body">Max pages:</span>
              <select
                value={maxPages}
                onChange={(e) => setMaxPages(parseInt(e.target.value))}
                className="rounded-lg border border-border bg-white/[0.03] px-2 py-1 text-xs text-heading focus:outline-none focus:border-accent/50"
              >
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value={100}>100</option>
              </select>
            </div>
          )}
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button
          onClick={handleCheck}
          disabled={loading}
          className="w-full sm:w-auto px-8 py-3 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? (crawlMode ? "Crawling site..." : t.checkingButton) : t.checkButton}
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
            {/* Export */}
            <div className="flex justify-end">
              <ExportButtons
                onExportPDF={() => {
                  if (!result) return;
                  if (isCrawl && crawlData) {
                    exportToPDF({
                      title: "Internal Link Analysis Report",
                      data: crawlData.pages.map((p) => ({
                        URL: p.url,
                        Title: p.title,
                        Depth: p.depth,
                        "Links In": p.internalLinksIn,
                        "Links Out": p.internalLinksOut,
                        Status: p.status,
                      })),
                      url: result.url,
                    });
                  } else if (singleData) {
                    exportToPDF({
                      title: "Internal Link Analysis Report",
                      data: singleData.internalLinks.map((l) => ({
                        URL: l.href,
                        Anchor: l.anchorText,
                        Position: l.position,
                        Generic: l.isGeneric ? "Yes" : "No",
                      })),
                      url: result.url,
                    });
                  }
                }}
              />
            </div>

            {/* ── Crawl mode results ──────────────────────────────── */}
            {isCrawl && crawlData && (
              <>
                {/* Score + Summary */}
                <div className="rounded-2xl border border-border bg-bg-card p-6">
                  <div className="flex items-center gap-6 flex-wrap">
                    {/* Score ring */}
                    <div className="relative w-20 h-20 shrink-0">
                      <svg viewBox="0 0 80 80" className="w-20 h-20 -rotate-90">
                        <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
                        <circle
                          cx="40" cy="40" r="34" fill="none"
                          stroke={getScoreColor(crawlData.score)}
                          strokeWidth="6" strokeLinecap="round"
                          strokeDasharray={`${(crawlData.score / 100) * 213.6} 213.6`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-lg font-bold" style={{ color: getScoreColor(crawlData.score) }}>
                          {crawlData.score}
                        </span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex-1 grid grid-cols-2 sm:grid-cols-5 gap-4">
                      <div>
                        <div className="text-2xl font-bold text-heading">{crawlData.stats.totalPages}</div>
                        <div className="text-xs text-body">Pages Crawled</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-heading">{crawlData.stats.totalEdges}</div>
                        <div className="text-xs text-body">Internal Links</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-heading">{crawlData.stats.maxDepth}</div>
                        <div className="text-xs text-body">Max Depth</div>
                      </div>
                      <div>
                        <div className={`text-2xl font-bold ${crawlData.stats.brokenCount > 0 ? "text-red-400" : "text-green-400"}`}>
                          {crawlData.stats.brokenCount}
                        </div>
                        <div className="text-xs text-body">Broken</div>
                      </div>
                      <div>
                        <div className={`text-2xl font-bold ${crawlData.stats.orphanCount > 0 ? "text-yellow-400" : "text-green-400"}`}>
                          {crawlData.stats.orphanCount}
                        </div>
                        <div className="text-xs text-body">Orphans</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex gap-1 p-1 rounded-xl bg-white/[0.03] border border-border max-w-fit mx-auto flex-wrap">
                  {(["overview", "graph", "pages", "anchors", "broken", "orphans", "ecommerce"] as const).map((tab) => {
                    let label = tab.charAt(0).toUpperCase() + tab.slice(1);
                    if (tab === "broken") label = `Broken (${crawlData.stats.brokenCount})`;
                    if (tab === "orphans") label = `Orphans (${crawlData.stats.orphanCount})`;
                    return (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                          activeTab === tab ? "bg-accent text-white" : "text-body hover:text-heading hover:bg-white/[0.05]"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>

                {/* ── Overview tab ──────────────────────────────────── */}
                {activeTab === "overview" && (
                  <div className="space-y-4">
                    {/* Depth distribution */}
                    <div className="rounded-xl border border-border bg-bg-card p-5">
                      <h3 className="text-sm font-medium text-heading mb-3">Link Depth Distribution</h3>
                      <p className="text-xs text-body mb-4">Number of clicks from homepage to reach each page.</p>
                      <div className="space-y-2">
                        {Object.entries(crawlData.depthDistribution)
                          .sort(([a], [b]) => parseInt(a) - parseInt(b))
                          .map(([depth, count]) => {
                            const maxCount = Math.max(...Object.values(crawlData.depthDistribution));
                            const pct = (count / maxCount) * 100;
                            const isDeep = parseInt(depth) > 3;
                            return (
                              <div key={depth} className="flex items-center gap-3">
                                <span className="text-xs text-body w-16 shrink-0">Depth {depth}</span>
                                <div className="flex-1 h-6 bg-white/[0.03] rounded-lg overflow-hidden">
                                  <div
                                    className={`h-full rounded-lg flex items-center px-2 transition-all ${
                                      isDeep ? "bg-yellow-400/20" : "bg-accent/20"
                                    }`}
                                    style={{ width: `${Math.max(pct, 8)}%` }}
                                  >
                                    <span className="text-[10px] font-medium text-heading">{count} pages</span>
                                  </div>
                                </div>
                                {isDeep && (
                                  <span className="text-[10px] text-yellow-400 shrink-0">deep</span>
                                )}
                              </div>
                            );
                          })}
                      </div>
                    </div>

                    {/* Quick issues summary */}
                    {(crawlData.stats.brokenCount > 0 || crawlData.stats.orphanCount > 0 || crawlData.genericAnchorCount > 5) && (
                      <div className="rounded-xl border border-border bg-bg-card p-5 space-y-3">
                        <h3 className="text-sm font-medium text-heading">Key Issues</h3>
                        {crawlData.stats.brokenCount > 0 && (
                          <div className="flex items-center gap-2 text-xs text-red-400">
                            <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 20 20" fill="none">
                              <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
                              <path d="M7.5 7.5l5 5M12.5 7.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            {crawlData.stats.brokenCount} broken internal link(s) found
                          </div>
                        )}
                        {crawlData.stats.orphanCount > 0 && (
                          <div className="flex items-center gap-2 text-xs text-yellow-400">
                            <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 20 20" fill="none">
                              <path d="M10 6v4M10 14h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                              <path d="M3.5 16.5L10 4l6.5 12.5H3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            </svg>
                            {crawlData.stats.orphanCount} orphan page(s) with no incoming internal links
                          </div>
                        )}
                        {crawlData.genericAnchorCount > 5 && (
                          <div className="flex items-center gap-2 text-xs text-yellow-400">
                            <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 20 20" fill="none">
                              <path d="M10 6v4M10 14h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                              <path d="M3.5 16.5L10 4l6.5 12.5H3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            </svg>
                            {crawlData.genericAnchorCount} links use generic anchor text (e.g. &quot;click here&quot;, &quot;read more&quot;)
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* ── Graph tab ─────────────────────────────────────── */}
                {activeTab === "graph" && (
                  <LinkGraph nodes={crawlData.graphNodes} edges={crawlData.graphEdges} />
                )}

                {/* ── Pages tab ─────────────────────────────────────── */}
                {activeTab === "pages" && (
                  <div className="rounded-2xl border border-border bg-bg-card overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border text-left">
                          <th className="px-4 py-3 text-xs font-medium text-body">Page</th>
                          <th className="px-4 py-3 text-xs font-medium text-body text-center">Depth</th>
                          <th className="px-4 py-3 text-xs font-medium text-body text-center">Links In</th>
                          <th className="px-4 py-3 text-xs font-medium text-body text-center">Links Out</th>
                          <th className="px-4 py-3 text-xs font-medium text-body text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {crawlData.pages.map((p, i) => (
                          <tr key={i} className={p.broken ? "bg-red-500/5" : p.depth > 3 ? "bg-yellow-500/5" : ""}>
                            <td className="px-4 py-3 max-w-[300px]">
                              <div className="text-xs font-mono text-body break-all">
                                {p.url.replace(/^https?:\/\//, "").slice(0, 60)}
                              </div>
                              <div className="text-[10px] text-body/60 mt-0.5 truncate">{p.title}</div>
                            </td>
                            <td className="px-4 py-3 text-center">
                              <span className={`text-xs font-medium ${p.depth > 3 ? "text-yellow-400" : "text-heading"}`}>
                                {p.depth}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-center">
                              <span className={`text-xs font-medium ${p.internalLinksIn === 0 ? "text-yellow-400" : "text-heading"}`}>
                                {p.internalLinksIn}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-center">
                              <span className="text-xs text-heading">{p.internalLinksOut}</span>
                            </td>
                            <td className="px-4 py-3 text-center">
                              <span className={`inline-block px-2 py-0.5 rounded-lg text-[10px] border font-medium ${
                                p.status >= 200 && p.status < 300 ? "bg-green-500/15 text-green-400 border-green-500/20" :
                                p.status >= 300 && p.status < 400 ? "bg-yellow-500/15 text-yellow-400 border-yellow-500/20" :
                                p.status === 0 ? "bg-white/10 text-body border-white/10" :
                                "bg-red-500/15 text-red-400 border-red-500/20"
                              }`}>
                                {p.status || "ERR"}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* ── Anchors tab ───────────────────────────────────── */}
                {activeTab === "anchors" && (
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-border bg-bg-card p-5">
                      <h3 className="text-sm font-medium text-heading mb-3">Top Anchor Texts</h3>
                      <p className="text-xs text-body mb-4">Most commonly used anchor texts across internal links. Generic anchors are flagged.</p>
                      <div className="space-y-2">
                        {crawlData.topAnchors.map((a, i) => (
                          <div key={i} className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                            a.isGeneric ? "bg-yellow-400/5 border border-yellow-400/10" : "bg-white/[0.02] border border-border"
                          }`}>
                            <span className="text-xs font-mono text-heading flex-1 break-all">
                              &quot;{a.text}&quot;
                            </span>
                            <span className="text-xs text-body shrink-0">{a.count}x</span>
                            {a.isGeneric && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 shrink-0">
                                generic
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl border border-border bg-bg-card p-5">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className={`text-2xl font-bold ${crawlData.genericAnchorCount > 5 ? "text-yellow-400" : "text-green-400"}`}>
                            {crawlData.genericAnchorCount}
                          </div>
                          <div className="text-xs text-body mt-1">Generic Anchors</div>
                        </div>
                        <div className="flex-1 text-xs text-body">
                          Use descriptive, keyword-rich anchor text for internal links instead of generic phrases like &quot;click here&quot; or &quot;read more&quot;. This helps search engines understand the context of linked pages.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── Broken tab ────────────────────────────────────── */}
                {activeTab === "broken" && (
                  <div className="space-y-3">
                    {crawlData.brokenLinks.length === 0 ? (
                      <div className="text-center py-12">
                        <svg className="w-12 h-12 text-green-400/40 mx-auto mb-3" viewBox="0 0 20 20" fill="none">
                          <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-sm text-body">No broken internal links found.</p>
                      </div>
                    ) : (
                      crawlData.brokenLinks.map((bl, i) => (
                        <div key={i} className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                          <div className="flex items-start gap-3">
                            <span className="inline-block px-2 py-0.5 rounded-lg text-[10px] border font-medium bg-red-500/15 text-red-400 border-red-500/20 shrink-0 mt-0.5">
                              {bl.status || "ERR"}
                            </span>
                            <div className="min-w-0 flex-1">
                              <div className="text-xs font-mono text-heading break-all">{bl.url}</div>
                              <div className="text-[10px] text-body/60 mt-1">
                                Found on: <span className="text-body">{bl.foundOn.replace(/^https?:\/\//, "").slice(0, 50)}</span>
                              </div>
                              {bl.anchor && (
                                <div className="text-[10px] text-body/60">
                                  Anchor: <span className="text-body">{bl.anchor}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}

                {/* ── Orphans tab ───────────────────────────────────── */}
                {activeTab === "orphans" && (
                  <div className="space-y-3">
                    {crawlData.orphanPages.length === 0 ? (
                      <div className="text-center py-12">
                        <svg className="w-12 h-12 text-green-400/40 mx-auto mb-3" viewBox="0 0 20 20" fill="none">
                          <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-sm text-body">No orphan pages found. All crawled pages have incoming links.</p>
                      </div>
                    ) : (
                      <>
                        <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4">
                          <p className="text-xs text-body">
                            Orphan pages have no incoming internal links. Search engines may not discover these pages efficiently. Add internal links from your navigation, related content, or sitemap.
                          </p>
                        </div>
                        {crawlData.orphanPages.map((orphan, i) => {
                          const page = crawlData.pages.find((p) => p.url === orphan);
                          return (
                            <div key={i} className="rounded-xl border border-yellow-500/20 bg-bg-card p-4 flex items-center gap-3">
                              <svg className="w-4 h-4 text-yellow-400 shrink-0" viewBox="0 0 20 20" fill="none">
                                <path d="M10 6v4M10 14h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M3.5 16.5L10 4l6.5 12.5H3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                              </svg>
                              <div className="min-w-0 flex-1">
                                <div className="text-xs font-mono text-heading break-all">{orphan.replace(/^https?:\/\//, "")}</div>
                                {page && (
                                  <div className="text-[10px] text-body/60 mt-0.5">{page.title} - Depth: {page.depth}</div>
                                )}
                              </div>
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 shrink-0">
                                0 incoming links
                              </span>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </div>
                )}

                {/* ── Ecommerce tab ─────────────────────────────────── */}
                {activeTab === "ecommerce" && (
                  <div className="space-y-3">
                    <div className="rounded-xl border border-border bg-bg-card p-5">
                      <h3 className="text-sm font-medium text-heading mb-3">Ecommerce Recommendations</h3>
                      {crawlData.ecommerceRecs.length === 0 ? (
                        <p className="text-xs text-body">No specific ecommerce link recommendations. Your internal linking looks solid.</p>
                      ) : (
                        <div className="space-y-3">
                          {crawlData.ecommerceRecs.map((rec, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-accent/15 bg-accent/5">
                              <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                                <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M10 9v5M10 6.5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                              </svg>
                              <p className="text-xs text-body">{rec}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* ── Single page mode results ────────────────────────── */}
            {!isCrawl && singleData && (
              <>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                    <div className="text-2xl font-medium text-heading">{singleData.stats.totalLinks}</div>
                    <div className="text-xs text-body mt-1">{t.totalLinks}</div>
                  </div>
                  <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                    <div className="text-2xl font-medium text-heading">{singleData.stats.uniqueInternal}</div>
                    <div className="text-xs text-body mt-1">{t.internalLinks}</div>
                  </div>
                  <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                    <div className="text-2xl font-medium text-heading">{singleData.stats.external}</div>
                    <div className="text-xs text-body mt-1">{t.externalLinks}</div>
                  </div>
                  <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                    <div className={`text-2xl font-medium ${singleData.stats.genericAnchors > 0 ? "text-yellow-400" : "text-green-400"}`}>
                      {singleData.stats.genericAnchors}
                    </div>
                    <div className="text-xs text-body mt-1">Generic Anchors</div>
                  </div>
                </div>

                {/* Issues */}
                {singleData.issues.length > 0 && (
                  <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4 space-y-2">
                    {singleData.issues.map((issue, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-yellow-400">
                        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 20 20" fill="none">
                          <path d="M10 6v4M10 14h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M3.5 16.5L10 4l6.5 12.5H3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                        {issue}
                      </div>
                    ))}
                  </div>
                )}

                {/* Links table */}
                <div className="rounded-2xl border border-border bg-bg-card overflow-x-auto">
                  <div className="px-5 py-4 border-b border-border">
                    <h3 className="text-sm font-medium text-heading">{t.allLinksSection}</h3>
                  </div>
                  {singleData.internalLinks.length === 0 && singleData.externalLinks.length === 0 ? (
                    <div className="px-5 py-8 text-center">
                      <p className="text-xs text-body/60 italic">{t.noLinks}</p>
                    </div>
                  ) : (
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border text-left">
                          <th className="px-4 py-3 text-xs font-medium text-body">URL</th>
                          <th className="px-4 py-3 text-xs font-medium text-body">{t.anchor}</th>
                          <th className="px-4 py-3 text-xs font-medium text-body">Position</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {singleData.internalLinks.map((link, i) => (
                          <tr key={i} className={link.isGeneric ? "bg-yellow-500/5" : ""}>
                            <td className="px-4 py-3 max-w-[250px]">
                              <span className="text-xs font-mono text-body break-all">
                                {link.href.replace(/^https?:\/\//, "").slice(0, 60)}
                              </span>
                            </td>
                            <td className="px-4 py-3 max-w-[180px]">
                              <span className={`text-xs truncate block ${link.isGeneric ? "text-yellow-400" : "text-body"}`}>
                                {link.anchorText}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <span className="inline-block px-2 py-0.5 rounded-lg text-[10px] border font-medium bg-accent/15 text-accent border-accent/20">
                                {link.position}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </>
            )}

            {/* Bottom CTA */}
            <div className="rounded-2xl border border-border bg-bg-card p-6 text-center space-y-4">
              <h3 className="text-lg font-medium text-heading">{t.ctaBottom}</h3>
              <p className="text-sm text-body max-w-[480px] mx-auto">{t.ctaBottomDesc}</p>
              <LocaleLink
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                {t.ctaBottomButton}
              </LocaleLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
