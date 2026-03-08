"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { HeadingCheckerTranslation } from "@/lib/i18n/translations/seoTools";

interface Heading {
  level: number;
  text: string;
}

interface HeadingResult {
  url: string;
  headings: Heading[];
  issues: string[];
}

const LEVEL_COLORS: Record<number, string> = {
  1: "text-accent font-semibold",
  2: "text-heading",
  3: "text-body-strong",
  4: "text-body",
  5: "text-body/80",
  6: "text-body/60",
};

const LEVEL_INDENT: Record<number, string> = {
  1: "ml-0",
  2: "ml-4",
  3: "ml-8",
  4: "ml-12",
  5: "ml-16",
  6: "ml-20",
};

function IssueBadge({ label, type }: { label: string; type: "error" | "warn" }) {
  const cls =
    type === "error"
      ? "bg-red-500/15 text-red-400 border-red-500/20"
      : "bg-yellow-500/15 text-yellow-400 border-yellow-500/20";
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs border mr-1 mb-1 ${cls}`}>
      {label}
    </span>
  );
}

export default function HeadingCheckerClient({ t }: { t: HeadingCheckerTranslation }) {
  const [urls, setUrls] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<HeadingResult[] | null>(null);
  const [activeTab, setActiveTab] = useState<Record<number, "tree" | "issues">>({});

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
      const res = await fetch("/api/heading-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ urls: normalized }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setResults(data.results);
      // Default all to tree tab
      const tabs: Record<number, "tree" | "issues"> = {};
      data.results.forEach((_: HeadingResult, i: number) => { tabs[i] = "tree"; });
      setActiveTab(tabs);
    } catch {
      setError(t.errorFetch);
    } finally {
      setLoading(false);
    }
  };

  const issueLabel = (issue: string): { label: string; type: "error" | "warn" } => {
    const map: Record<string, { label: string; type: "error" | "warn" }> = {
      missing_h1: { label: t.missingH1, type: "error" },
      multiple_h1: { label: t.multipleH1, type: "warn" },
      skipped_level: { label: t.skippedLevel, type: "warn" },
      empty_heading: { label: t.emptyHeading, type: "warn" },
    };
    return map[issue] || { label: issue, type: "warn" };
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

            {/* Per-page cards */}
            {results.map((r, i) => (
              <div key={i} className="rounded-2xl border border-border bg-bg-card overflow-hidden">
                {/* Card header */}
                <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-border">
                  <div className="flex items-center gap-3 min-w-0">
                    {r.issues.length > 0 ? (
                      <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                    )}
                    <span className="text-sm font-mono text-body truncate">{r.url.replace(/^https?:\/\//, "")}</span>
                  </div>
                  <span className="text-xs text-body shrink-0">{r.headings.length} {t.headingsFound}</span>
                </div>

                {/* Tab switcher */}
                <div className="flex border-b border-border">
                  {(["tree", "issues"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab((prev) => ({ ...prev, [i]: tab }))}
                      className={`px-4 py-2 text-xs font-medium transition-colors ${
                        (activeTab[i] || "tree") === tab
                          ? "text-heading border-b-2 border-accent"
                          : "text-body hover:text-heading"
                      }`}
                    >
                      {tab === "tree" ? t.headingTree : t.issuesTab}
                      {tab === "issues" && r.issues.length > 0 && (
                        <span className="ml-1.5 px-1.5 py-0.5 rounded-full bg-red-500/20 text-red-400 text-[10px]">
                          {r.issues.length}
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                <div className="p-5">
                  {(activeTab[i] || "tree") === "tree" ? (
                    r.headings.length === 0 ? (
                      <p className="text-xs text-body/60 italic">-</p>
                    ) : (
                      <ul className="space-y-1.5">
                        {r.headings.map((h, j) => (
                          <li key={j} className={`flex items-baseline gap-2 ${LEVEL_INDENT[h.level]}`}>
                            <span className="text-[10px] font-mono text-body/40 shrink-0 w-6">H{h.level}</span>
                            <span className={`text-sm ${LEVEL_COLORS[h.level]} ${!h.text ? "italic text-white/20" : ""}`}>
                              {h.text || "(empty)"}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )
                  ) : (
                    r.issues.length === 0 ? (
                      <p className="text-xs text-green-400">{t.noIssues}</p>
                    ) : (
                      <div className="flex flex-wrap gap-1">
                        {r.issues.map((issue, j) => {
                          const { label, type } = issueLabel(issue);
                          return <IssueBadge key={j} label={label} type={type} />;
                        })}
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
