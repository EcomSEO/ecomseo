"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExportButtons from "./ExportButtons";
import { exportToPDF } from "@/lib/export-utils";
import type { CanonicalCheckerTranslation } from "@/lib/i18n/translations/seoTools";

type CanonicalStatus =
  | "ok"
  | "self_referencing"
  | "points_elsewhere"
  | "missing"
  | "relative_url"
  | "http_mismatch"
  | "trailing_slash_mismatch"
  | "cross_domain"
  | "canonical_chain"
  | "fetch_error";

interface CanonicalResult {
  url: string;
  canonical: string | null;
  status: CanonicalStatus;
  detail: string;
  score: number;
}

function StatusBadge({ status, t }: { status: CanonicalStatus; t: CanonicalCheckerTranslation }) {
  const config: Record<CanonicalStatus, { label: string; cls: string }> = {
    self_referencing: { label: t.selfReferencing, cls: "bg-green-500/15 text-green-400 border-green-500/20" },
    ok: { label: t.noIssue, cls: "bg-green-500/15 text-green-400 border-green-500/20" },
    points_elsewhere: { label: t.pointsElsewhere, cls: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20" },
    missing: { label: t.missingCanonical, cls: "bg-red-500/15 text-red-400 border-red-500/20" },
    relative_url: { label: t.relativeUrl, cls: "bg-red-500/15 text-red-400 border-red-500/20" },
    http_mismatch: { label: t.httpMismatch, cls: "bg-red-500/15 text-red-400 border-red-500/20" },
    trailing_slash_mismatch: { label: "Trailing slash", cls: "bg-orange-500/15 text-orange-400 border-orange-500/20" },
    cross_domain: { label: "Cross-domain", cls: "bg-purple-500/15 text-purple-400 border-purple-500/20" },
    canonical_chain: { label: "Chain detected", cls: "bg-red-500/15 text-red-400 border-red-500/20" },
    fetch_error: { label: "Fetch error", cls: "bg-white/10 text-body border-white/10" },
  };
  const { label, cls } = config[status] ?? config.fetch_error;
  return (
    <span className={`inline-block px-2.5 py-1 rounded-lg text-xs border font-medium ${cls}`}>
      {label}
    </span>
  );
}

function isIssue(status: CanonicalStatus): boolean {
  return !["self_referencing", "ok"].includes(status);
}

/* ── Pie Chart SVG ───────────────────────────────────────────────────── */

function PieChart({ segments }: { segments: { label: string; count: number; color: string }[] }) {
  const total = segments.reduce((sum, s) => sum + s.count, 0);
  if (total === 0) return null;

  const size = 120;
  const cx = size / 2;
  const cy = size / 2;
  const r = 48;
  let currentAngle = -90;

  const paths = segments
    .filter((s) => s.count > 0)
    .map((seg) => {
      const angle = (seg.count / total) * 360;
      const startAngle = currentAngle;
      const endAngle = currentAngle + angle;
      currentAngle = endAngle;

      if (angle >= 359.99) {
        return <circle key={seg.label} cx={cx} cy={cy} r={r} fill={seg.color} opacity={0.8} />;
      }

      const startRad = (startAngle * Math.PI) / 180;
      const endRad = (endAngle * Math.PI) / 180;
      const x1 = cx + r * Math.cos(startRad);
      const y1 = cy + r * Math.sin(startRad);
      const x2 = cx + r * Math.cos(endRad);
      const y2 = cy + r * Math.sin(endRad);
      const largeArc = angle > 180 ? 1 : 0;

      return (
        <path
          key={seg.label}
          d={`M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${largeArc},1 ${x2},${y2} Z`}
          fill={seg.color}
          opacity={0.8}
        />
      );
    });

  return (
    <div className="flex items-center gap-6 flex-wrap">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={cx} cy={cy} r={r + 2} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        {paths}
      </svg>
      <div className="space-y-1.5">
        {segments.filter((s) => s.count > 0).map((seg) => (
          <div key={seg.label} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: seg.color, opacity: 0.8 }} />
            <span className="text-xs text-body">
              {seg.label}: <span className="text-heading font-medium">{seg.count}</span> ({total > 0 ? Math.round((seg.count / total) * 100) : 0}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CanonicalCheckerClient({ t }: { t: CanonicalCheckerTranslation }) {
  const [urls, setUrls] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<CanonicalResult[] | null>(null);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [filterStatus, setFilterStatus] = useState<CanonicalStatus | "all">("all");

  const handleCheck = async () => {
    const lines = urls
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    if (lines.length === 0) { setError(t.errorEmpty); return; }
    if (lines.length > 50) { setError("Maximum 50 URLs allowed"); return; }

    const normalized = lines.map((l) =>
      /^https?:\/\//i.test(l) ? l : "https://" + l
    );
    for (const u of normalized) {
      try { new URL(u); } catch { setError(t.errorInvalid); return; }
    }

    setError("");
    setLoading(true);
    setResults(null);
    setExpandedRow(null);
    setFilterStatus("all");

    try {
      const res = await fetch("/api/canonical-check", {
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

  const totalIssues = results?.filter((r) => isIssue(r.status)).length ?? 0;

  const pieSegments = useMemo(() => {
    if (!results) return [];
    const selfRef = results.filter((r) => r.status === "self_referencing" || r.status === "ok").length;
    const missing = results.filter((r) => r.status === "missing").length;
    const chain = results.filter((r) => r.status === "canonical_chain").length;
    const httpMismatch = results.filter((r) => r.status === "http_mismatch").length;
    const trailingSlash = results.filter((r) => r.status === "trailing_slash_mismatch").length;
    const crossDomain = results.filter((r) => r.status === "cross_domain").length;
    const pointsElsewhere = results.filter((r) => r.status === "points_elsewhere").length;
    const fetchError = results.filter((r) => r.status === "fetch_error").length;

    return [
      { label: "Self-referencing (OK)", count: selfRef, color: "#4ade80" },
      { label: "Missing canonical", count: missing, color: "#f87171" },
      { label: "Canonical chain", count: chain, color: "#fb923c" },
      { label: "HTTP/HTTPS mismatch", count: httpMismatch, color: "#c084fc" },
      { label: "Trailing slash mismatch", count: trailingSlash, color: "#fbbf24" },
      { label: "Cross-domain", count: crossDomain, color: "#a78bfa" },
      { label: "Points elsewhere", count: pointsElsewhere, color: "#60a5fa" },
      { label: "Fetch error", count: fetchError, color: "#6b7280" },
    ];
  }, [results]);

  const availableStatuses = useMemo(() => {
    if (!results) return [];
    const statuses = new Set(results.map((r) => r.status));
    return Array.from(statuses);
  }, [results]);

  const filteredResults = useMemo(() => {
    if (!results) return [];
    if (filterStatus === "all") return results;
    return results.filter((r) => r.status === filterStatus);
  }, [results, filterStatus]);

  const avgScore = useMemo(() => {
    if (!results || results.length === 0) return 0;
    return Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length);
  }, [results]);

  return (
    <div className="w-full max-w-[900px] mx-auto space-y-6">
      {/* Input */}
      <div className="rounded-2xl border border-border bg-bg-card p-6 space-y-4">
        <label className="block text-sm font-medium text-heading">{t.urlsLabel}</label>
        <p className="text-xs text-body -mt-2">Enter up to 50 URLs, one per line</p>
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
            {/* Export */}
            <div className="flex justify-end">
              <ExportButtons
                onExportPDF={() => {
                  if (!results) return;
                  exportToPDF({
                    title: "Canonical Check Report",
                    data: results.map((r) => ({
                      URL: r.url,
                      Canonical: r.canonical ?? "Missing",
                      Status: r.status,
                      Detail: r.detail,
                      Score: r.score,
                    })),
                  });
                }}
              />
            </div>

            {/* Summary */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-heading">{results.length}</div>
                <div className="text-xs text-body mt-1">{t.pagesChecked}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className={`text-2xl font-medium ${totalIssues > 0 ? "text-red-400" : "text-green-400"}`}>{totalIssues}</div>
                <div className="text-xs text-body mt-1">{t.issuesFound}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className={`text-2xl font-medium ${avgScore >= 70 ? "text-green-400" : avgScore >= 40 ? "text-yellow-400" : "text-red-400"}`}>{avgScore}</div>
                <div className="text-xs text-body mt-1">Avg Score</div>
              </div>
            </div>

            {/* Pie Chart */}
            <div className="rounded-2xl border border-border bg-bg-card p-6">
              <h3 className="text-sm font-medium text-heading mb-4">Canonical Status Distribution</h3>
              <PieChart segments={pieSegments} />
            </div>

            {/* Filter */}
            {availableStatuses.length > 1 && (
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setFilterStatus("all")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    filterStatus === "all" ? "bg-accent text-white" : "bg-white/[0.05] border border-border text-body hover:text-heading"
                  }`}
                >
                  All ({results.length})
                </button>
                {availableStatuses.map((st) => {
                  const count = results.filter((r) => r.status === st).length;
                  return (
                    <button
                      key={st}
                      onClick={() => setFilterStatus(st)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        filterStatus === st ? "bg-accent text-white" : "bg-white/[0.05] border border-border text-body hover:text-heading"
                      }`}
                    >
                      {st.replace(/_/g, " ")} ({count})
                    </button>
                  );
                })}
              </div>
            )}

            {/* Results Cards */}
            <div className="space-y-2">
              {filteredResults.map((r, i) => {
                const globalIdx = results.indexOf(r);
                const isExpanded = expandedRow === globalIdx;
                return (
                  <div
                    key={globalIdx}
                    className={`rounded-xl border bg-bg-card overflow-hidden ${
                      isIssue(r.status) ? "border-red-500/20" : "border-border"
                    }`}
                  >
                    <button
                      onClick={() => setExpandedRow(isExpanded ? null : globalIdx)}
                      className="w-full flex items-center justify-between gap-3 px-5 py-3.5 text-left hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-mono text-body break-all">
                          {r.url.replace(/^https?:\/\//, "").slice(0, 60)}{r.url.length > 68 ? "..." : ""}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className={`text-xs font-medium ${r.score >= 70 ? "text-green-400" : r.score >= 40 ? "text-yellow-400" : "text-red-400"}`}>
                          {r.score}
                        </span>
                        <StatusBadge status={r.status} t={t} />
                        <svg
                          className={`w-4 h-4 text-body transition-transform ${isExpanded ? "rotate-180" : ""}`}
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
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
                          <div className="px-5 pb-4 border-t border-border pt-3 space-y-3">
                            {/* Canonical URL */}
                            <div>
                              <span className="text-xs text-body">Canonical URL: </span>
                              {r.canonical ? (
                                <span className="text-xs font-mono text-heading break-all">{r.canonical}</span>
                              ) : (
                                <span className="text-xs text-red-400 italic">None found</span>
                              )}
                            </div>

                            {/* Detail message */}
                            <div className={`rounded-lg p-3 text-xs ${
                              r.status === "canonical_chain" ? "bg-red-400/5 border border-red-400/10 text-red-400" :
                              r.status === "http_mismatch" ? "bg-red-400/5 border border-red-400/10 text-red-400" :
                              r.status === "trailing_slash_mismatch" ? "bg-orange-400/5 border border-orange-400/10 text-orange-400" :
                              r.status === "cross_domain" ? "bg-purple-400/5 border border-purple-400/10 text-purple-400" :
                              r.status === "missing" ? "bg-red-400/5 border border-red-400/10 text-red-400" :
                              isIssue(r.status) ? "bg-yellow-400/5 border border-yellow-400/10 text-yellow-400" :
                              "bg-green-400/5 border border-green-400/10 text-green-400"
                            }`}>
                              {r.detail}
                            </div>

                            {/* Chain visualization */}
                            {r.status === "canonical_chain" && (
                              <div className="rounded-lg border border-border bg-white/[0.02] p-3">
                                <p className="text-xs text-body-strong mb-2">Canonical Chain:</p>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
                                    {r.url.replace(/^https?:\/\//, "").slice(0, 40)}
                                  </span>
                                  <svg className="w-4 h-4 text-body shrink-0" viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                  <span className="text-xs font-mono text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">
                                    {r.canonical ? r.canonical.replace(/^https?:\/\//, "").slice(0, 40) : "?"}
                                  </span>
                                  <svg className="w-4 h-4 text-body shrink-0" viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                  <span className="text-xs font-mono text-red-400 bg-red-400/10 px-2 py-1 rounded">
                                    different target
                                  </span>
                                </div>
                              </div>
                            )}

                            {/* HTTP mismatch highlight */}
                            {r.status === "http_mismatch" && r.canonical && (
                              <div className="rounded-lg border border-border bg-white/[0.02] p-3">
                                <p className="text-xs text-body-strong mb-2">Protocol Mismatch:</p>
                                <div className="flex items-center gap-3 flex-wrap">
                                  <div>
                                    <span className="text-[10px] text-body block mb-1">Page</span>
                                    <span className={`text-xs font-mono px-2 py-1 rounded ${
                                      r.url.startsWith("https") ? "bg-green-400/10 text-green-400" : "bg-red-400/10 text-red-400"
                                    }`}>
                                      {r.url.startsWith("https") ? "HTTPS" : "HTTP"}
                                    </span>
                                  </div>
                                  <svg className="w-4 h-4 text-body shrink-0 mt-4" viewBox="0 0 20 20" fill="none">
                                    <path d="M7.5 7.5l5 5M12.5 7.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                  </svg>
                                  <div>
                                    <span className="text-[10px] text-body block mb-1">Canonical</span>
                                    <span className={`text-xs font-mono px-2 py-1 rounded ${
                                      r.canonical.startsWith("https") ? "bg-green-400/10 text-green-400" : "bg-red-400/10 text-red-400"
                                    }`}>
                                      {r.canonical.startsWith("https") ? "HTTPS" : "HTTP"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Trailing slash highlight */}
                            {r.status === "trailing_slash_mismatch" && r.canonical && (
                              <div className="rounded-lg border border-border bg-white/[0.02] p-3">
                                <p className="text-xs text-body-strong mb-2">Trailing Slash Mismatch:</p>
                                <div className="space-y-1">
                                  <div className="text-xs font-mono">
                                    <span className="text-body">Page: </span>
                                    <span className="text-heading">{new URL(r.url).pathname}</span>
                                    <span className={`ml-2 px-1.5 py-0.5 rounded text-[10px] ${
                                      new URL(r.url).pathname.endsWith("/") ? "bg-yellow-400/10 text-yellow-400" : "bg-white/10 text-body"
                                    }`}>
                                      {new URL(r.url).pathname.endsWith("/") ? "has /" : "no /"}
                                    </span>
                                  </div>
                                  <div className="text-xs font-mono">
                                    <span className="text-body">Canon: </span>
                                    <span className="text-heading">{(() => { try { return new URL(r.canonical).pathname; } catch { return r.canonical; } })()}</span>
                                    <span className={`ml-2 px-1.5 py-0.5 rounded text-[10px] ${
                                      (() => { try { return new URL(r.canonical).pathname.endsWith("/"); } catch { return false; } })() ? "bg-yellow-400/10 text-yellow-400" : "bg-white/10 text-body"
                                    }`}>
                                      {(() => { try { return new URL(r.canonical).pathname.endsWith("/") ? "has /" : "no /"; } catch { return "?"; } })()}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
