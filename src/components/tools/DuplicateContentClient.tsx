"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { DuplicateContentTranslation } from "@/lib/i18n/translations/seoTools";

interface PageInfo {
  url: string;
  wordCount: number;
  title: string;
}

interface PairResult {
  urlA: string;
  urlB: string;
  similarity: number;
  verdict: "duplicate" | "similar" | "unique";
}

interface DuplicateCheckResult {
  pages: PageInfo[];
  pairs: PairResult[];
}

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

export default function DuplicateContentClient({ t }: { t: DuplicateContentTranslation }) {
  const [urls, setUrls] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<DuplicateCheckResult | null>(null);

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

  const duplicateCount = results?.pairs.filter((p) => p.verdict === "duplicate").length ?? 0;
  const similarCount = results?.pairs.filter((p) => p.verdict === "similar").length ?? 0;

  const wordCountForUrl = (url: string): number => {
    return results?.pages.find((p) => p.url === url)?.wordCount ?? 0;
  };

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
            <div className="grid grid-cols-3 gap-4">
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
            </div>

            {/* Pair cards */}
            <div className="space-y-3">
              {results.pairs.map((pair, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-bg-card p-5 space-y-4"
                >
                  {/* URLs */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-mono text-body break-all">
                        {pair.urlA.replace(/^https?:\/\//, "").slice(0, 60)}
                        {pair.urlA.length > 67 ? "..." : ""}
                      </span>
                      <div className="text-xs text-white/30 mt-0.5">
                        {t.wordCount}: {wordCountForUrl(pair.urlA).toLocaleString()}
                      </div>
                    </div>
                    <div className="text-xs font-medium text-white/30 shrink-0 uppercase">
                      {t.vsLabel}
                    </div>
                    <div className="flex-1 min-w-0 sm:text-right">
                      <span className="text-xs font-mono text-body break-all">
                        {pair.urlB.replace(/^https?:\/\//, "").slice(0, 60)}
                        {pair.urlB.length > 67 ? "..." : ""}
                      </span>
                      <div className="text-xs text-white/30 mt-0.5">
                        {t.wordCount}: {wordCountForUrl(pair.urlB).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Similarity bar */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-body">{t.similarity}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-heading">
                          {Math.round(pair.similarity * 100)}%
                        </span>
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
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
