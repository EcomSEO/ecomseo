"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { MetaTagsCheckerTranslation } from "@/lib/i18n/translations/seoTools";

interface MetaTagResult {
  url: string;
  title: string | null;
  description: string | null;
  titleLength: number;
  descLength: number;
  issues: string[];
}

function LengthBadge({ length, min, max }: { length: number; min: number; max: number }) {
  const color =
    length === 0
      ? "bg-red-500/20 text-red-400 border-red-500/30"
      : length < min || length > max
      ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      : "bg-green-500/20 text-green-400 border-green-500/30";
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs border font-mono ${color}`}>
      {length}
    </span>
  );
}

function IssueBadge({ label }: { label: string }) {
  return (
    <span className="inline-block px-2 py-0.5 rounded text-xs bg-red-500/15 text-red-400 border border-red-500/20 mr-1 mb-1">
      {label}
    </span>
  );
}

function truncate(text: string | null, max: number) {
  if (!text) return <span className="text-white/20 italic">—</span>;
  return text.length > max ? text.slice(0, max) + "…" : text;
}

export default function MetaTagsCheckerClient({ t }: { t: MetaTagsCheckerTranslation }) {
  const [urls, setUrls] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<MetaTagResult[] | null>(null);

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
      const res = await fetch("/api/meta-tags-check", {
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

  const exportCsv = () => {
    if (!results) return;
    const header = [t.urlColumn, t.titleColumn, t.titleLengthColumn, t.descriptionColumn, t.descLengthColumn, t.issuesColumn];
    const rows = results.map((r) => [
      r.url,
      r.title ?? "",
      String(r.titleLength),
      r.description ?? "",
      String(r.descLength),
      r.issues.join(", "),
    ]);
    const csv = [header, ...rows].map((row) => row.map((c) => `"${c.replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "meta-tags-report.csv";
    a.click();
  };

  const issueLabel = (issue: string): string => {
    const map: Record<string, string> = {
      missing_title: t.missingTitle,
      missing_description: t.missingDescription,
      title_too_long: t.titleTooLong,
      title_too_short: t.titleTooShort,
      desc_too_long: t.descTooLong,
      desc_too_short: t.descTooShort,
      duplicate_title: t.duplicateTitle,
      duplicate_description: t.duplicateDescription,
    };
    return map[issue] || issue;
  };

  const totalIssues = results?.reduce((sum, r) => sum + r.issues.length, 0) ?? 0;

  return (
    <div className="w-full max-w-[900px] mx-auto space-y-6">
      {/* Input */}
      <div className="rounded-2xl border border-border bg-bg-card p-6 space-y-4">
        <label className="block text-sm font-medium text-heading">{t.urlsLabel}</label>
        <textarea
          value={urls}
          onChange={(e) => setUrls(e.target.value)}
          placeholder={t.urlsPlaceholder}
          rows={6}
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

            {/* Export */}
            <div className="flex justify-end">
              <button
                onClick={exportCsv}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-bg-card text-sm text-body hover:text-heading hover:border-accent/30 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {t.exportCsv}
              </button>
            </div>

            {/* Table */}
            <div className="rounded-2xl border border-border bg-bg-card overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="px-4 py-3 text-xs font-medium text-body">{t.urlColumn}</th>
                    <th className="px-4 py-3 text-xs font-medium text-body">{t.titleColumn}</th>
                    <th className="px-4 py-3 text-xs font-medium text-body whitespace-nowrap">{t.titleLengthColumn}</th>
                    <th className="px-4 py-3 text-xs font-medium text-body">{t.descriptionColumn}</th>
                    <th className="px-4 py-3 text-xs font-medium text-body whitespace-nowrap">{t.descLengthColumn}</th>
                    <th className="px-4 py-3 text-xs font-medium text-body">{t.issuesColumn}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {results.map((r, i) => (
                    <tr key={i} className={r.issues.length > 0 ? "bg-red-500/5" : ""}>
                      <td className="px-4 py-3 max-w-[160px]">
                        <span className="text-xs text-body font-mono break-all">{r.url.replace(/^https?:\/\//, "").slice(0, 40)}{r.url.length > 40 ? "…" : ""}</span>
                      </td>
                      <td className="px-4 py-3 max-w-[200px]">
                        <span className="text-xs text-body-strong">{truncate(r.title, 55)}</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <LengthBadge length={r.titleLength} min={30} max={60} />
                      </td>
                      <td className="px-4 py-3 max-w-[220px]">
                        <span className="text-xs text-body">{truncate(r.description, 80)}</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <LengthBadge length={r.descLength} min={70} max={160} />
                      </td>
                      <td className="px-4 py-3">
                        {r.issues.length === 0 ? (
                          <span className="text-xs text-green-400">{t.goodLength}</span>
                        ) : (
                          r.issues.filter((i) => i !== "fetch_error").map((issue, j) => (
                            <IssueBadge key={j} label={issueLabel(issue)} />
                          ))
                        )}
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
