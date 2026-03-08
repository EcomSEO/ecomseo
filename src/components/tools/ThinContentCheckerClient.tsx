"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ThinContentCheckerTranslation } from "@/lib/i18n/translations/seoTools";

type ThinContentStatus = "ok" | "thin" | "empty" | "fetch_error";

interface ThinContentResult {
  url: string;
  wordCount: number | null;
  status: ThinContentStatus;
}

function StatusBadge({ status, t }: { status: ThinContentStatus; t: ThinContentCheckerTranslation }) {
  const config: Record<ThinContentStatus, { label: string; cls: string }> = {
    ok:          { label: t.statusOk,         cls: "bg-green-500/15 text-green-400 border-green-500/20" },
    thin:        { label: t.statusThin,        cls: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20" },
    empty:       { label: t.statusEmpty,       cls: "bg-red-500/15 text-red-400 border-red-500/20" },
    fetch_error: { label: t.statusFetchError,  cls: "bg-white/10 text-body border-white/10" },
  };
  const { label, cls } = config[status] ?? config.fetch_error;
  return (
    <span className={`inline-block px-2.5 py-1 rounded-lg text-xs border font-medium ${cls}`}>
      {label}
    </span>
  );
}

function isIssue(status: ThinContentStatus): boolean {
  return status !== "ok";
}

export default function ThinContentCheckerClient({ t }: { t: ThinContentCheckerTranslation }) {
  const [urls, setUrls] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<ThinContentResult[] | null>(null);
  const [thinThreshold, setThinThreshold] = useState(300);

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

    try {
      const res = await fetch("/api/thin-content-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ urls: normalized }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setResults(data.results);
      if (data.thinThreshold) setThinThreshold(data.thinThreshold);
    } catch {
      setError(t.errorFetch);
    } finally {
      setLoading(false);
    }
  };

  const totalIssues = results?.filter((r) => isIssue(r.status)).length ?? 0;

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
                <div className={`text-2xl font-medium ${totalIssues > 0 ? "text-yellow-400" : "text-green-400"}`}>{totalIssues}</div>
                <div className="text-xs text-body mt-1">{t.issuesFound}</div>
              </div>
            </div>

            {/* Table */}
            <div className="rounded-2xl border border-border bg-bg-card overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="px-4 py-3 text-xs font-medium text-body">{t.urlColumn}</th>
                    <th className="px-4 py-3 text-xs font-medium text-body">{t.wordCountColumn}</th>
                    <th className="px-4 py-3 text-xs font-medium text-body">{t.statusColumn}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {results.map((r, i) => (
                    <tr key={i} className={isIssue(r.status) ? "bg-yellow-500/5" : ""}>
                      <td className="px-4 py-3 max-w-[280px]">
                        <span className="text-xs font-mono text-body break-all">
                          {r.url.replace(/^https?:\/\//, "").slice(0, 55)}{r.url.length > 55 ? "…" : ""}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {r.wordCount !== null ? (
                          <span className={`text-sm font-medium ${r.wordCount < thinThreshold ? "text-yellow-400" : "text-heading"}`}>
                            {r.wordCount.toLocaleString()}
                          </span>
                        ) : (
                          <span className="text-xs text-white/20 italic">-</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={r.status} t={t} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
