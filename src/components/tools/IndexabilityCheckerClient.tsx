"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExportButtons from "./ExportButtons";
import { exportToPDF } from "@/lib/export-utils";
import type { IndexabilityCheckerTranslation } from "@/lib/i18n/translations/seoTools";

/* ── Types ────────────────────────────────────────────────────────────── */

type IndexabilityVerdict = "indexable" | "mixed_signals" | "not_indexable";

interface IndexabilityResult {
  url: string;
  httpStatus: number | null;
  metaRobots: string | null;
  xRobotsTag: string | null;
  canonical: string | null;
  canonicalPointsElsewhere: boolean;
  robotsTxtBlocked: boolean;
  verdict: IndexabilityVerdict;
  reasons: string[];
  score: number;
}

/* ── Signal badge component ──────────────────────────────────────────── */

function SignalBadge({ label, ok, detail }: { label: string; ok: boolean | null; detail?: string }) {
  if (ok === null) {
    return (
      <div className="flex items-center gap-2 rounded-lg px-3 py-2 bg-white/[0.03] border border-border">
        <div className="w-2.5 h-2.5 rounded-full bg-white/20 shrink-0" />
        <div>
          <div className="text-xs font-medium text-body">{label}</div>
          {detail && <div className="text-[10px] text-body/60 mt-0.5">{detail}</div>}
        </div>
      </div>
    );
  }
  return (
    <div className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
      ok ? "bg-green-400/5 border border-green-400/15" : "bg-red-400/5 border border-red-400/15"
    }`}>
      <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${ok ? "bg-green-400" : "bg-red-400"}`} />
      <div>
        <div className={`text-xs font-medium ${ok ? "text-green-400" : "text-red-400"}`}>{label}</div>
        {detail && <div className="text-[10px] text-body/60 mt-0.5">{detail}</div>}
      </div>
    </div>
  );
}

/* ── Verdict badge ───────────────────────────────────────────────────── */

function VerdictBadge({ verdict }: { verdict: IndexabilityVerdict }) {
  const config: Record<IndexabilityVerdict, { label: string; cls: string; icon: string }> = {
    indexable: { label: "Indexable", cls: "bg-green-500/15 text-green-400 border-green-500/20", icon: "check" },
    mixed_signals: { label: "Mixed Signals", cls: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20", icon: "warn" },
    not_indexable: { label: "Not Indexable", cls: "bg-red-500/15 text-red-400 border-red-500/20", icon: "block" },
  };
  const { label, cls, icon } = config[verdict];
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border font-medium ${cls}`}>
      {icon === "check" && (
        <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="none">
          <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {icon === "warn" && (
        <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="none">
          <path d="M10 6v4M10 14h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M3.5 16.5L10 4l6.5 12.5H3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      )}
      {icon === "block" && (
        <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7.5 7.5l5 5M12.5 7.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )}
      {label}
    </span>
  );
}

/* ── Ecommerce warning ───────────────────────────────────────────────── */

function isCheckoutPage(url: string): boolean {
  const lower = url.toLowerCase();
  return lower.includes("/checkout") || lower.includes("/cart") || lower.includes("/order") || lower.includes("/payment");
}

export default function IndexabilityCheckerClient({ t }: { t: IndexabilityCheckerTranslation }) {
  const [urls, setUrls] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<IndexabilityResult[] | null>(null);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [filterVerdict, setFilterVerdict] = useState<IndexabilityVerdict | "all">("all");

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
    setFilterVerdict("all");

    try {
      const res = await fetch("/api/indexability-check", {
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

  const verdictCounts = useMemo(() => {
    if (!results) return { indexable: 0, mixed_signals: 0, not_indexable: 0 };
    return {
      indexable: results.filter((r) => r.verdict === "indexable").length,
      mixed_signals: results.filter((r) => r.verdict === "mixed_signals").length,
      not_indexable: results.filter((r) => r.verdict === "not_indexable").length,
    };
  }, [results]);

  const filteredResults = useMemo(() => {
    if (!results) return [];
    if (filterVerdict === "all") return results;
    return results.filter((r) => r.verdict === filterVerdict);
  }, [results, filterVerdict]);

  // Detect conflicts
  const conflicts = useMemo(() => {
    if (!results) return [];
    return results.filter((r) => {
      const metaAllows = !r.metaRobots || !r.metaRobots.toLowerCase().includes("noindex");
      const robotsBlocks = r.robotsTxtBlocked;
      return metaAllows && robotsBlocks;
    });
  }, [results]);

  // Detect indexable checkout pages
  const indexableCheckoutPages = useMemo(() => {
    if (!results) return [];
    return results.filter((r) => r.verdict === "indexable" && isCheckoutPage(r.url));
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
                    title: "Indexability Check Report",
                    data: results.map((r) => ({
                      URL: r.url,
                      Verdict: r.verdict,
                      "HTTP Status": r.httpStatus ?? "N/A",
                      "Meta Robots": r.metaRobots ?? "-",
                      "X-Robots-Tag": r.xRobotsTag ?? "-",
                      "Robots.txt Blocked": r.robotsTxtBlocked ? "Yes" : "No",
                      Score: r.score,
                      Reasons: r.reasons.join("; ") || "-",
                    })),
                  });
                }}
              />
            </div>

            {/* Summary cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4 text-center">
                <div className="text-2xl font-medium text-green-400">{verdictCounts.indexable}</div>
                <div className="text-xs text-green-400/70 mt-1">Indexable</div>
              </div>
              <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4 text-center">
                <div className="text-2xl font-medium text-yellow-400">{verdictCounts.mixed_signals}</div>
                <div className="text-xs text-yellow-400/70 mt-1">Mixed Signals</div>
              </div>
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-center">
                <div className="text-2xl font-medium text-red-400">{verdictCounts.not_indexable}</div>
                <div className="text-xs text-red-400/70 mt-1">Not Indexable</div>
              </div>
            </div>

            {/* Conflict Alerts */}
            {conflicts.length > 0 && (
              <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="none">
                    <path d="M10 6v4M10 14h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M3.5 16.5L10 4l6.5 12.5H3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                  <h3 className="text-sm font-medium text-yellow-400">Conflicting Signals Detected</h3>
                </div>
                <p className="text-xs text-body mb-2">
                  {conflicts.length} page(s) have meta robots allowing indexing, but are blocked by robots.txt. Search engines may ignore the robots.txt block and try to index anyway.
                </p>
                <div className="space-y-1">
                  {conflicts.slice(0, 5).map((c, i) => (
                    <div key={i} className="text-xs font-mono text-yellow-400/80 truncate">
                      {c.url.replace(/^https?:\/\//, "").slice(0, 70)}
                    </div>
                  ))}
                  {conflicts.length > 5 && (
                    <div className="text-xs text-body">...and {conflicts.length - 5} more</div>
                  )}
                </div>
              </div>
            )}

            {/* Ecommerce: Indexable checkout pages warning */}
            {indexableCheckoutPages.length > 0 && (
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-red-400" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M7.5 7.5l5 5M12.5 7.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <h3 className="text-sm font-medium text-red-400">Checkout Pages Are Indexable</h3>
                </div>
                <p className="text-xs text-body mb-2">
                  {indexableCheckoutPages.length} checkout/cart page(s) are currently indexable. These pages should have noindex tags to prevent them from appearing in search results.
                </p>
                <div className="space-y-1">
                  {indexableCheckoutPages.map((c, i) => (
                    <div key={i} className="text-xs font-mono text-red-400/80 truncate">
                      {c.url.replace(/^https?:\/\//, "")}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Filter */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setFilterVerdict("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  filterVerdict === "all" ? "bg-accent text-white" : "bg-white/[0.05] border border-border text-body hover:text-heading"
                }`}
              >
                All ({results.length})
              </button>
              {(["indexable", "mixed_signals", "not_indexable"] as IndexabilityVerdict[]).map((v) => {
                const count = verdictCounts[v];
                if (count === 0) return null;
                return (
                  <button
                    key={v}
                    onClick={() => setFilterVerdict(v)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      filterVerdict === v ? "bg-accent text-white" : "bg-white/[0.05] border border-border text-body hover:text-heading"
                    }`}
                  >
                    {v.replace(/_/g, " ")} ({count})
                  </button>
                );
              })}
            </div>

            {/* Result cards */}
            <div className="space-y-2">
              {filteredResults.map((r, i) => {
                const globalIdx = results.indexOf(r);
                const isExpanded = expandedRow === globalIdx;
                const isCheckout = isCheckoutPage(r.url);

                return (
                  <div
                    key={globalIdx}
                    className={`rounded-xl border bg-bg-card overflow-hidden ${
                      r.verdict === "not_indexable" ? "border-red-500/20" :
                      r.verdict === "mixed_signals" ? "border-yellow-500/20" :
                      "border-border"
                    }`}
                  >
                    <button
                      onClick={() => setExpandedRow(isExpanded ? null : globalIdx)}
                      className="w-full flex items-center justify-between gap-3 px-5 py-3.5 text-left hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="min-w-0 flex-1 flex items-center gap-2">
                        <span className="text-xs font-mono text-body break-all">
                          {r.url.replace(/^https?:\/\//, "").slice(0, 55)}{r.url.length > 63 ? "..." : ""}
                        </span>
                        {isCheckout && r.verdict === "indexable" && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-400/10 text-red-400 border border-red-400/20 shrink-0">
                            checkout
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        {r.httpStatus && (
                          <span className={`text-xs font-mono ${
                            r.httpStatus >= 200 && r.httpStatus < 300 ? "text-green-400" :
                            r.httpStatus >= 300 && r.httpStatus < 400 ? "text-yellow-400" :
                            "text-red-400"
                          }`}>
                            {r.httpStatus}
                          </span>
                        )}
                        <VerdictBadge verdict={r.verdict} />
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
                          <div className="px-5 pb-4 border-t border-border pt-3 space-y-4">
                            {/* Multi-signal grid */}
                            <div>
                              <h4 className="text-xs font-medium text-body-strong mb-2">Indexability Signals</h4>
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                <SignalBadge
                                  label="HTTP Status"
                                  ok={r.httpStatus !== null ? (r.httpStatus >= 200 && r.httpStatus < 300) : null}
                                  detail={r.httpStatus ? `${r.httpStatus}` : "Unknown"}
                                />
                                <SignalBadge
                                  label="Meta Robots"
                                  ok={r.metaRobots ? !r.metaRobots.toLowerCase().includes("noindex") : null}
                                  detail={r.metaRobots || "Not set"}
                                />
                                <SignalBadge
                                  label="X-Robots-Tag"
                                  ok={r.xRobotsTag ? !r.xRobotsTag.toLowerCase().includes("noindex") : null}
                                  detail={r.xRobotsTag || "Not set"}
                                />
                                <SignalBadge
                                  label="Canonical"
                                  ok={!r.canonicalPointsElsewhere}
                                  detail={r.canonical ? (r.canonicalPointsElsewhere ? "Points elsewhere" : "Self-referencing") : "Not set"}
                                />
                                <SignalBadge
                                  label="Robots.txt"
                                  ok={!r.robotsTxtBlocked}
                                  detail={r.robotsTxtBlocked ? "Blocked" : "Allowed"}
                                />
                                <SignalBadge
                                  label="Overall"
                                  ok={r.verdict === "indexable" ? true : r.verdict === "not_indexable" ? false : null}
                                  detail={`Score: ${r.score}/100`}
                                />
                              </div>
                            </div>

                            {/* Reasons list */}
                            {r.reasons.length > 0 && (
                              <div>
                                <h4 className="text-xs font-medium text-body-strong mb-2">Details</h4>
                                <div className="space-y-1.5">
                                  {r.reasons.map((reason, j) => (
                                    <div key={j} className="flex items-start gap-2 text-xs">
                                      <svg className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                                        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M10 6v4M10 14h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                      </svg>
                                      <span className="text-body">{reason}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Conflict alert for this specific URL */}
                            {r.metaRobots && !r.metaRobots.toLowerCase().includes("noindex") && r.robotsTxtBlocked && (
                              <div className="rounded-lg border border-yellow-400/15 bg-yellow-400/5 p-3">
                                <div className="flex items-center gap-2">
                                  <svg className="w-3.5 h-3.5 text-yellow-400 shrink-0" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 6v4M10 14h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M3.5 16.5L10 4l6.5 12.5H3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                  </svg>
                                  <span className="text-xs font-medium text-yellow-400">Signal Conflict</span>
                                </div>
                                <p className="text-xs text-body mt-1">
                                  Meta robots allows indexing ({r.metaRobots}) but robots.txt blocks this URL. Google may still attempt to index the page.
                                </p>
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
