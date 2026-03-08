"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { SitemapComparisonTranslation } from "@/lib/i18n/translations/seoTools";

type Tab = "onlyInFirst" | "onlyInSecond" | "inBoth";

interface CompareResult {
  totalFirst: number;
  totalSecond: number;
  onlyInFirst: string[];
  onlyInSecond: string[];
  inBoth: string[];
  onlyInFirstTotal: number;
  onlyInSecondTotal: number;
  inBothTotal: number;
}

export default function SitemapComparisonClient({ t }: { t: SitemapComparisonTranslation }) {
  const [sitemap1, setSitemap1] = useState("");
  const [sitemap2, setSitemap2] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<CompareResult | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("onlyInFirst");

  const handleCompare = async () => {
    const s1 = sitemap1.trim();
    const s2 = sitemap2.trim();

    if (!s1 || !s2) { setError(t.errorEmpty); return; }

    const norm1 = /^https?:\/\//i.test(s1) ? s1 : "https://" + s1;
    const norm2 = /^https?:\/\//i.test(s2) ? s2 : "https://" + s2;

    try { new URL(norm1); new URL(norm2); } catch { setError(t.errorInvalid); return; }

    setError("");
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/sitemap-compare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sitemap1: norm1, sitemap2: norm2 }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "");
      }
      const data = await res.json();
      setResult(data);
      setActiveTab("onlyInFirst");
    } catch (e) {
      setError(e instanceof Error && e.message ? e.message : t.errorFetch);
    } finally {
      setLoading(false);
    }
  };

  const tabs: { key: Tab; label: string; count: number; cls: string }[] = result
    ? [
        { key: "onlyInFirst", label: t.onlyInFirst, count: result.onlyInFirstTotal, cls: "text-red-400" },
        { key: "onlyInSecond", label: t.onlyInSecond, count: result.onlyInSecondTotal, cls: "text-yellow-400" },
        { key: "inBoth", label: t.inBoth, count: result.inBothTotal, cls: "text-green-400" },
      ]
    : [];

  const activeUrls = result
    ? activeTab === "onlyInFirst"
      ? result.onlyInFirst
      : activeTab === "onlyInSecond"
      ? result.onlyInSecond
      : result.inBoth
    : [];

  return (
    <div className="w-full max-w-[900px] mx-auto space-y-6">
      {/* Inputs */}
      <div className="rounded-2xl border border-border bg-bg-card p-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-heading">{t.sitemap1Label}</label>
            <input
              type="url"
              value={sitemap1}
              onChange={(e) => setSitemap1(e.target.value)}
              placeholder={t.sitemap1Placeholder}
              className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-body placeholder:text-white/20 focus:outline-none focus:border-accent/50 font-mono"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-heading">{t.sitemap2Label}</label>
            <input
              type="url"
              value={sitemap2}
              onChange={(e) => setSitemap2(e.target.value)}
              placeholder={t.sitemap2Placeholder}
              className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-body placeholder:text-white/20 focus:outline-none focus:border-accent/50 font-mono"
            />
          </div>
        </div>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button
          onClick={handleCompare}
          disabled={loading}
          className="w-full sm:w-auto px-8 py-3 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? t.comparingButton : t.compareButton}
        </button>
      </div>

      {/* Results */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-heading">{result.totalFirst}</div>
                <div className="text-xs text-body mt-1">{t.totalFirst}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-heading">{result.totalSecond}</div>
                <div className="text-xs text-body mt-1">{t.totalSecond}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className={`text-2xl font-medium ${result.onlyInFirstTotal > 0 ? "text-red-400" : "text-green-400"}`}>{result.onlyInFirstTotal}</div>
                <div className="text-xs text-body mt-1">{t.onlyInFirst}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-green-400">{result.inBothTotal}</div>
                <div className="text-xs text-body mt-1">{t.inBoth}</div>
              </div>
            </div>

            {/* Tabs */}
            <div className="rounded-2xl border border-border bg-bg-card overflow-hidden">
              <div className="flex border-b border-border">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex-1 px-4 py-3 text-xs font-medium transition-colors ${
                      activeTab === tab.key
                        ? "bg-white/5 text-heading border-b-2 border-accent"
                        : "text-body hover:text-heading"
                    }`}
                  >
                    {tab.label}{" "}
                    <span className={`${activeTab === tab.key ? tab.cls : "text-body"}`}>
                      ({tab.count})
                    </span>
                  </button>
                ))}
              </div>
              <div className="divide-y divide-border max-h-[400px] overflow-y-auto">
                {activeUrls.length === 0 ? (
                  <p className="px-4 py-8 text-sm text-body text-center italic">-</p>
                ) : (
                  activeUrls.map((url, i) => (
                    <div key={i} className="px-4 py-2.5">
                      <span className="text-xs font-mono text-body break-all">{url}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
