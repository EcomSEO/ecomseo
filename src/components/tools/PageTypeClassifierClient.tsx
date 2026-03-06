"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PageTypeClassifierTranslation } from "@/lib/i18n/translations/seoTools";

type PageType =
  | "product"
  | "category"
  | "blog"
  | "homepage"
  | "cart"
  | "checkout"
  | "legal"
  | "search"
  | "other";

interface PageTypeResult {
  url: string;
  type: PageType;
  signals: string[];
}

function TypeBadge({ type, t }: { type: PageType; t: PageTypeClassifierTranslation }) {
  const config: Record<PageType, { label: string; cls: string }> = {
    product:  { label: t.typeProduct,  cls: "bg-blue-500/15 text-blue-400 border-blue-500/20" },
    category: { label: t.typeCategory, cls: "bg-purple-500/15 text-purple-400 border-purple-500/20" },
    blog:     { label: t.typeBlog,     cls: "bg-green-500/15 text-green-400 border-green-500/20" },
    homepage: { label: t.typeHomepage, cls: "bg-accent/15 text-accent border-accent/20" },
    cart:     { label: t.typeCart,     cls: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20" },
    checkout: { label: t.typeCheckout, cls: "bg-orange-500/15 text-orange-400 border-orange-500/20" },
    legal:    { label: t.typeLegal,    cls: "bg-white/10 text-body border-white/10" },
    search:   { label: t.typeSearch,   cls: "bg-cyan-500/15 text-cyan-400 border-cyan-500/20" },
    other:    { label: t.typeOther,    cls: "bg-white/10 text-body border-white/10" },
  };
  const { label, cls } = config[type] ?? config.other;
  return (
    <span className={`inline-block px-2.5 py-1 rounded-lg text-xs border font-medium ${cls}`}>
      {label}
    </span>
  );
}

export default function PageTypeClassifierClient({ t }: { t: PageTypeClassifierTranslation }) {
  const [urls, setUrls] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<PageTypeResult[] | null>(null);

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
      const res = await fetch("/api/page-type-check", {
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
            <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
              <div className="text-2xl font-medium text-heading">{results.length}</div>
              <div className="text-xs text-body mt-1">{t.pagesClassified}</div>
            </div>

            {/* Table */}
            <div className="rounded-2xl border border-border bg-bg-card overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="px-4 py-3 text-xs font-medium text-body">{t.urlColumn}</th>
                    <th className="px-4 py-3 text-xs font-medium text-body">{t.typeColumn}</th>
                    <th className="px-4 py-3 text-xs font-medium text-body">{t.signalsColumn}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {results.map((r, i) => (
                    <tr key={i}>
                      <td className="px-4 py-3 max-w-[240px]">
                        <span className="text-xs font-mono text-body break-all">
                          {r.url.replace(/^https?:\/\//, "").slice(0, 55)}{r.url.length > 55 ? "…" : ""}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <TypeBadge type={r.type} t={t} />
                      </td>
                      <td className="px-4 py-3 max-w-[260px]">
                        <div className="flex flex-wrap gap-1">
                          {r.signals.map((s, j) => (
                            <span key={j} className="text-xs bg-white/5 border border-border rounded px-1.5 py-0.5 text-body">
                              {s}
                            </span>
                          ))}
                        </div>
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
