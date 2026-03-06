"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { HreflangValidatorTranslation } from "@/lib/i18n/translations/seoTools";

interface HreflangTag {
  hreflang: string;
  href: string;
}

interface HreflangIssue {
  type: string;
  message: string;
  tag?: HreflangTag;
}

interface PageResult {
  url: string;
  tags: HreflangTag[];
  issues: HreflangIssue[];
  hasSelfRef: boolean;
  hasXDefault: boolean;
}

function IssueBadge({ count, color }: { count: number; color: "red" | "yellow" | "green" }) {
  const colors = {
    red: "bg-red-500/10 text-red-400 border-red-500/20",
    yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-md border text-xs font-medium ${colors[color]}`}>
      {count}
    </span>
  );
}

export default function HreflangValidatorClient({ t }: { t: HreflangValidatorTranslation }) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<PageResult[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  async function handleSubmit() {
    setError("");
    setResults(null);
    setExpandedIdx(null);

    const lines = input
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    if (lines.length === 0) {
      setError(t.errorEmpty);
      return;
    }
    if (lines.length > 20) {
      setError(t.errorTooMany);
      return;
    }

    const urls: string[] = [];
    for (const line of lines) {
      try {
        new URL(line);
        urls.push(line);
      } catch {
        setError(t.errorInvalid);
        return;
      }
    }

    setLoading(true);
    try {
      const res = await fetch("/api/hreflang-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ urls }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setResults(data.results);
    } catch {
      setError(t.errorFetch);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6 max-w-[900px] mx-auto">
      {/* Input */}
      <div className="rounded-2xl border border-border bg-bg-card p-6 space-y-4">
        <label className="block text-sm font-medium text-heading">{t.urlsLabel}</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.urlsPlaceholder}
          rows={5}
          className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-heading placeholder:text-body/50 focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none"
        />
        <div className="flex items-center justify-between">
          <p className="text-xs text-body">{t.urlsHint}</p>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-6 py-2.5 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors disabled:opacity-50"
          >
            {loading ? t.analyzing : t.analyzeButton}
          </button>
        </div>
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
            {/* Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-semibold text-heading">{results.length}</div>
                <div className="text-xs text-body mt-1">{t.pagesChecked}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-semibold text-heading">
                  {results.reduce((s, r) => s + r.tags.length, 0)}
                </div>
                <div className="text-xs text-body mt-1">{t.tagsFound}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-semibold text-emerald-400">
                  {results.filter((r) => r.issues.length === 0).length}
                </div>
                <div className="text-xs text-body mt-1">{t.pagesValid}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-semibold text-red-400">
                  {results.reduce((s, r) => s + r.issues.length, 0)}
                </div>
                <div className="text-xs text-body mt-1">{t.issuesFound}</div>
              </div>
            </div>

            {/* Per page */}
            {results.map((r, idx) => {
              const isExpanded = expandedIdx === idx;
              const hasIssues = r.issues.length > 0;

              return (
                <div key={idx} className="rounded-xl border border-border bg-bg-card overflow-hidden">
                  <button
                    onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                    className="w-full flex items-center gap-3 p-4 text-left hover:bg-bg-card/80 transition-colors"
                  >
                    <div className={`w-2 h-2 rounded-full shrink-0 ${hasIssues ? "bg-red-400" : "bg-emerald-400"}`} />
                    <span className="text-sm text-heading font-medium truncate flex-1">{r.url}</span>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-body">{r.tags.length} tags</span>
                      {hasIssues ? (
                        <IssueBadge count={r.issues.length} color="red" />
                      ) : (
                        <IssueBadge count={0} color="green" />
                      )}
                      <svg
                        className={`w-4 h-4 text-body transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                        <div className="px-4 pb-4 space-y-4 border-t border-border pt-4">
                          {/* Status flags */}
                          <div className="flex flex-wrap gap-2">
                            <span className={`text-xs px-2.5 py-1 rounded-lg border ${r.hasSelfRef ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-red-500/10 border-red-500/20 text-red-400"}`}>
                              {r.hasSelfRef ? `\u2713 ${t.selfRef}` : `\u2717 ${t.selfRef}`}
                            </span>
                            <span className={`text-xs px-2.5 py-1 rounded-lg border ${r.hasXDefault ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"}`}>
                              {r.hasXDefault ? `\u2713 x-default` : `\u2717 x-default`}
                            </span>
                          </div>

                          {/* Issues */}
                          {r.issues.length > 0 && (
                            <div className="space-y-2">
                              <h4 className="text-xs font-medium text-heading uppercase tracking-wider">{t.issuesLabel}</h4>
                              {r.issues.map((issue, j) => (
                                <div key={j} className="flex items-start gap-2 p-3 rounded-lg bg-red-500/5 border border-red-500/10">
                                  <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M10 6v5M10 13.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                  </svg>
                                  <span className="text-xs text-body-strong">{issue.message}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Tags table */}
                          {r.tags.length > 0 && (
                            <div className="space-y-2">
                              <h4 className="text-xs font-medium text-heading uppercase tracking-wider">{t.tagsLabel}</h4>
                              <div className="overflow-x-auto">
                                <table className="w-full text-xs">
                                  <thead>
                                    <tr className="border-b border-border">
                                      <th className="text-left py-2 px-3 text-body font-medium">hreflang</th>
                                      <th className="text-left py-2 px-3 text-body font-medium">href</th>
                                      <th className="text-left py-2 px-3 text-body font-medium">{t.statusLabel}</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {r.tags.map((tag, k) => {
                                      const tagIssue = r.issues.find(
                                        (i) => i.tag?.hreflang === tag.hreflang && i.tag?.href === tag.href
                                      );
                                      return (
                                        <tr key={k} className="border-b border-border/50">
                                          <td className="py-2 px-3 text-heading font-mono">{tag.hreflang}</td>
                                          <td className="py-2 px-3 text-body max-w-[300px] truncate">{tag.href}</td>
                                          <td className="py-2 px-3">
                                            {tagIssue ? (
                                              <span className="text-red-400">{tagIssue.type.replace(/_/g, " ")}</span>
                                            ) : (
                                              <span className="text-emerald-400">{t.validLabel}</span>
                                            )}
                                          </td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          )}

                          {r.tags.length === 0 && r.issues.length === 0 && (
                            <p className="text-sm text-body">{t.noTags}</p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
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
