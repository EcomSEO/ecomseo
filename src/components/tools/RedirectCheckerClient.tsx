"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { RedirectCheckerTranslation } from "@/lib/i18n/translations/seoTools";

interface ChainHop {
  url: string;
  status: number;
}

interface RedirectResult {
  url: string;
  chain: ChainHop[];
  finalUrl: string;
  totalRedirects: number;
  hasLoop: boolean;
  hasChain: boolean;
  error: boolean;
}

type ResultStatus = "clean" | "chain" | "loop" | "error";

function getResultStatus(r: RedirectResult): ResultStatus {
  if (r.error) return "error";
  if (r.hasLoop) return "loop";
  if (r.hasChain) return "chain";
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
  return r.hasChain || r.hasLoop || r.error;
}

function ChainVisualization({ chain, t }: { chain: ChainHop[]; t: RedirectCheckerTranslation }) {
  return (
    <div className="flex flex-col gap-2 py-2">
      {chain.map((hop, i) => {
        const isRedirect = hop.status >= 300 && hop.status < 400;
        return (
          <div key={i} className="flex items-start gap-2">
            {/* Dot and line */}
            <div className="flex flex-col items-center shrink-0 pt-1">
              <div
                className={`w-2.5 h-2.5 rounded-full ${
                  isRedirect
                    ? "bg-yellow-400"
                    : hop.status >= 200 && hop.status < 300
                    ? "bg-green-400"
                    : "bg-red-400"
                }`}
              />
              {i < chain.length - 1 && (
                <div className="w-px h-6 bg-border mt-1" />
              )}
            </div>
            {/* URL + status */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono text-body break-all">
                  {hop.url.replace(/^https?:\/\//, "").slice(0, 70)}
                  {hop.url.length > 78 ? "..." : ""}
                </span>
                <span
                  className={`shrink-0 inline-block px-1.5 py-0.5 rounded text-[10px] font-medium ${
                    isRedirect
                      ? "bg-yellow-500/15 text-yellow-400"
                      : hop.status >= 200 && hop.status < 300
                      ? "bg-green-500/15 text-green-400"
                      : "bg-red-500/15 text-red-400"
                  }`}
                >
                  {hop.status}
                </span>
              </div>
              {/* Arrow to next */}
              {i < chain.length - 1 && (
                <div className="text-[10px] text-white/30 mt-0.5">
                  {t.statusCode} {hop.status} →
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

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

  return (
    <div className="w-full max-w-[900px] mx-auto space-y-6">
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
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-heading">{results.length}</div>
                <div className="text-xs text-body mt-1">{t.pagesChecked}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className={`text-2xl font-medium ${totalIssues > 0 ? "text-red-400" : "text-green-400"}`}>{totalIssues}</div>
                <div className="text-xs text-body mt-1">{t.issuesFound}</div>
              </div>
            </div>

            {/* Result cards */}
            <div className="space-y-3">
              {results.map((r, i) => {
                const status = getResultStatus(r);
                const isOpen = expanded[i] ?? false;
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
                        {r.totalRedirects > 0 && (
                          <span className="text-[11px] text-body">
                            {r.totalRedirects} {t.hops}
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
                          <div className="px-5 pb-4 border-t border-border pt-3">
                            {r.error ? (
                              <p className="text-xs text-body italic">{t.fetchError}</p>
                            ) : r.chain.length > 0 ? (
                              <>
                                <ChainVisualization chain={r.chain} t={t} />
                                {r.totalRedirects > 0 && (
                                  <div className="mt-3 pt-3 border-t border-border">
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
