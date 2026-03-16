"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExportButtons from "./ExportButtons";
import { exportToPDF } from "@/lib/export-utils";
import type { RedirectCheckerTranslation } from "@/lib/i18n/translations/seoTools";

/* ── Types ────────────────────────────────────────────────────────────── */

interface ChainHop {
  url: string;
  status: number;
  time: number;
}

interface RedirectResult {
  url: string;
  chain: ChainHop[];
  finalUrl: string;
  finalStatus: number;
  chainLength: number;
  hasLoop: boolean;
  hasMixedTypes: boolean;
  totalTime: number;
  issues: string[];
}

type ResultStatus = "clean" | "chain" | "loop" | "error";

function getResultStatus(r: RedirectResult): ResultStatus {
  if (r.issues.some((i) => i.includes("Could not fetch"))) return "error";
  if (r.hasLoop) return "loop";
  if (r.chainLength > 1) return "chain";
  return "clean";
}

function StatusBadge({ status, t }: { status: ResultStatus; t: RedirectCheckerTranslation }) {
  const config: Record<ResultStatus, { label: string; cls: string }> = {
    clean: { label: t.noRedirects, cls: "bg-green-500/15 text-green-400 border-green-500/20" },
    chain: { label: t.redirectChain, cls: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20" },
    loop: { label: t.redirectLoop, cls: "bg-red-500/15 text-red-400 border-red-500/20" },
    error: { label: t.fetchError, cls: "bg-white/10 text-body border-white/10" },
  };
  const { label, cls } = config[status] ?? config.error;
  return (
    <span className={`inline-block px-2.5 py-1 rounded-lg text-xs border font-medium ${cls}`}>
      {label}
    </span>
  );
}

function isIssue(r: RedirectResult): boolean {
  return r.hasLoop || r.chainLength > 1 || r.issues.length > 0;
}

function getStatusColor(status: number): string {
  if (status >= 200 && status < 300) return "green";
  if (status >= 300 && status < 400) return "yellow";
  return "red";
}

function getRedirectType(status: number): string {
  switch (status) {
    case 301: return "Permanent (301)";
    case 302: return "Temporary (302)";
    case 303: return "See Other (303)";
    case 307: return "Temporary (307)";
    case 308: return "Permanent (308)";
    default: return `${status}`;
  }
}

/* ── Flowchart Chain Visualization ───────────────────────────────────── */

function ChainFlowchart({ chain, totalTime, hasMixedTypes, hasLoop }: {
  chain: ChainHop[];
  totalTime: number;
  hasMixedTypes: boolean;
  hasLoop: boolean;
}) {
  return (
    <div className="space-y-3">
      {/* Total time */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="text-xs text-body">
          Total response time: <span className={`font-medium ${totalTime > 2000 ? "text-red-400" : totalTime > 1000 ? "text-yellow-400" : "text-green-400"}`}>{totalTime}ms</span>
        </div>
        {hasMixedTypes && (
          <span className="text-xs px-2 py-0.5 rounded bg-orange-400/10 text-orange-400 border border-orange-400/20">
            Mixed redirect types
          </span>
        )}
        {hasLoop && (
          <span className="text-xs px-2 py-0.5 rounded bg-red-400/10 text-red-400 border border-red-400/20">
            Loop detected
          </span>
        )}
      </div>

      {/* Flowchart */}
      <div className="rounded-xl border border-border bg-white/[0.02] p-4 overflow-x-auto">
        <div className="flex flex-col gap-0">
          {chain.map((hop, i) => {
            const isRedirect = hop.status >= 300 && hop.status < 400;
            const isFinal = i === chain.length - 1;
            const color = getStatusColor(hop.status);

            return (
              <div key={i}>
                {/* Hop box */}
                <div className={`flex items-center gap-3 rounded-lg border px-4 py-3 ${
                  color === "green" ? "border-green-400/20 bg-green-400/5" :
                  color === "yellow" ? "border-yellow-400/20 bg-yellow-400/5" :
                  "border-red-400/20 bg-red-400/5"
                }`}>
                  {/* Step indicator */}
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    color === "green" ? "bg-green-400/20 text-green-400" :
                    color === "yellow" ? "bg-yellow-400/20 text-yellow-400" :
                    "bg-red-400/20 text-red-400"
                  }`}>
                    {i + 1}
                  </div>

                  {/* URL */}
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-mono text-heading break-all">
                      {hop.url.replace(/^https?:\/\//, "").slice(0, 70)}
                      {hop.url.length > 78 ? "..." : ""}
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      {isRedirect && (
                        <span className="text-[10px] text-yellow-400/80">{getRedirectType(hop.status)}</span>
                      )}
                      {isFinal && !isRedirect && (
                        <span className={`text-[10px] ${color === "green" ? "text-green-400/80" : "text-red-400/80"}`}>
                          Final destination
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Status badge */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`text-xs font-mono font-medium px-2 py-0.5 rounded ${
                      color === "green" ? "bg-green-400/15 text-green-400" :
                      color === "yellow" ? "bg-yellow-400/15 text-yellow-400" :
                      "bg-red-400/15 text-red-400"
                    }`}>
                      {hop.status}
                    </span>
                    <span className={`text-[10px] font-mono ${
                      hop.time > 1000 ? "text-red-400" : hop.time > 500 ? "text-yellow-400" : "text-body"
                    }`}>
                      {hop.time}ms
                    </span>
                  </div>
                </div>

                {/* Arrow between hops */}
                {!isFinal && (
                  <div className="flex items-center ml-7 pl-0.5 py-0.5">
                    <div className={`w-px h-4 ${
                      color === "yellow" ? "bg-yellow-400/30" : "bg-border"
                    }`} />
                    <svg className={`w-3 h-3 ml-[-6.5px] mt-1 ${
                      color === "yellow" ? "text-yellow-400/50" : "text-body/30"
                    }`} viewBox="0 0 12 12" fill="none">
                      <path d="M6 0v8M2 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Chain length warning */}
      {chain.length > 2 && (
        <div className="rounded-lg border border-yellow-400/15 bg-yellow-400/5 px-3 py-2 flex items-center gap-2">
          <svg className="w-3.5 h-3.5 text-yellow-400 shrink-0" viewBox="0 0 20 20" fill="none">
            <path d="M10 6v4M10 14h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M3.5 16.5L10 4l6.5 12.5H3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
          <span className="text-xs text-yellow-400">
            Chain has {chain.length - 1} redirect hops. Reduce to a single redirect for better crawl efficiency and page speed.
          </span>
        </div>
      )}
    </div>
  );
}

/* ── Component ────────────────────────────────────────────────────────── */

export default function RedirectCheckerClient({ t }: { t: RedirectCheckerTranslation }) {
  const [urls, setUrls] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<RedirectResult[] | null>(null);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

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
    setExpanded({});

    try {
      const res = await fetch("/api/redirect-check", {
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

  const toggleExpand = (i: number) => {
    setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  const totalIssues = results?.filter((r) => isIssue(r)).length ?? 0;

  const stats = useMemo(() => {
    if (!results) return null;
    const loops = results.filter((r) => r.hasLoop).length;
    const chains = results.filter((r) => r.chainLength > 2 && !r.hasLoop).length;
    const mixed = results.filter((r) => r.hasMixedTypes).length;
    const clean = results.filter((r) => !isIssue(r)).length;
    return { loops, chains, mixed, clean };
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
        {results && stats && (
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
                    title: "Redirect Check Report",
                    data: results.map((r) => ({
                      URL: r.url,
                      Status: r.hasLoop ? "Loop" : r.chainLength > 1 ? "Chain" : "Clean",
                      Hops: r.chainLength - 1,
                      "Final URL": r.finalUrl,
                      "Total Time": `${r.totalTime}ms`,
                      "Mixed Types": r.hasMixedTypes ? "Yes" : "No",
                      Issues: r.issues.join("; ") || "None",
                    })),
                  });
                }}
              />
            </div>

            {/* Summary */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4 text-center">
                <div className="text-2xl font-medium text-green-400">{stats.clean}</div>
                <div className="text-xs text-green-400/70 mt-1">Clean</div>
              </div>
              <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4 text-center">
                <div className="text-2xl font-medium text-yellow-400">{stats.chains}</div>
                <div className="text-xs text-yellow-400/70 mt-1">Chains (3+ hops)</div>
              </div>
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-center">
                <div className="text-2xl font-medium text-red-400">{stats.loops}</div>
                <div className="text-xs text-red-400/70 mt-1">Loops</div>
              </div>
              <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-4 text-center">
                <div className="text-2xl font-medium text-orange-400">{stats.mixed}</div>
                <div className="text-xs text-orange-400/70 mt-1">Mixed Types</div>
              </div>
            </div>

            {/* Result cards */}
            <div className="space-y-3">
              {results.map((r, i) => {
                const status = getResultStatus(r);
                const isOpen = expanded[i] ?? false;
                const redirectCount = r.chainLength > 0 ? r.chainLength - 1 : 0;

                return (
                  <div
                    key={i}
                    className={`rounded-2xl border bg-bg-card overflow-hidden ${
                      status === "loop"
                        ? "border-red-500/30"
                        : status === "chain"
                        ? "border-yellow-500/30"
                        : "border-border"
                    }`}
                  >
                    {/* Header row */}
                    <button
                      onClick={() => toggleExpand(i)}
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-mono text-body break-all">
                          {r.url.replace(/^https?:\/\//, "").slice(0, 60)}
                          {r.url.length > 68 ? "..." : ""}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        {redirectCount > 0 && (
                          <span className={`text-[11px] font-medium ${
                            redirectCount > 2 ? "text-red-400" : "text-body"
                          }`}>
                            {redirectCount} {t.hops}
                          </span>
                        )}
                        {r.totalTime > 0 && (
                          <span className={`text-[11px] font-mono ${
                            r.totalTime > 2000 ? "text-red-400" : r.totalTime > 1000 ? "text-yellow-400" : "text-body"
                          }`}>
                            {r.totalTime}ms
                          </span>
                        )}
                        {r.hasMixedTypes && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-400/10 text-orange-400 border border-orange-400/20">
                            mixed
                          </span>
                        )}
                        <StatusBadge status={status} t={t} />
                        <svg
                          className={`w-4 h-4 text-body transition-transform ${isOpen ? "rotate-180" : ""}`}
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M5 7.5l5 5 5-5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </button>

                    {/* Expanded detail */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-4 border-t border-border pt-3 space-y-3">
                            {status === "error" ? (
                              <p className="text-xs text-body italic">{t.fetchError}</p>
                            ) : r.chain.length > 0 ? (
                              <>
                                <ChainFlowchart
                                  chain={r.chain}
                                  totalTime={r.totalTime}
                                  hasMixedTypes={r.hasMixedTypes}
                                  hasLoop={r.hasLoop}
                                />

                                {/* Issues list */}
                                {r.issues.length > 0 && (
                                  <div className="space-y-1.5">
                                    <h4 className="text-xs font-medium text-body-strong">Issues</h4>
                                    {r.issues.map((issue, j) => (
                                      <div key={j} className="flex items-start gap-2 text-xs">
                                        <svg className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                                          <path d="M10 6v4M10 14h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                          <path d="M3.5 16.5L10 4l6.5 12.5H3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                        </svg>
                                        <span className="text-body">{issue}</span>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {/* Final destination */}
                                {redirectCount > 0 && (
                                  <div className="pt-2 border-t border-border">
                                    <span className="text-[11px] text-body">{t.finalDestination}: </span>
                                    <span className="text-xs font-mono text-heading break-all">{r.finalUrl}</span>
                                  </div>
                                )}
                              </>
                            ) : (
                              <p className="text-xs text-body italic">{t.noRedirects}</p>
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
