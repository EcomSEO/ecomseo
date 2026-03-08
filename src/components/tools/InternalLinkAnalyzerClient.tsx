"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { InternalLinkAnalyzerTranslation } from "@/lib/i18n/translations/seoTools";
import LocaleLink from "@/components/ui/LocaleLink";

interface LinkInfo {
  href: string;
  anchor: string;
  isInternal: boolean;
  status: number | null;
}

interface BrokenLink {
  url: string;
  status: number;
  anchor: string;
}

interface AnalysisResult {
  url: string;
  totalLinks: number;
  internalLinks: number;
  externalLinks: number;
  uniqueInternalUrls: number;
  brokenLinks: BrokenLink[];
  links: LinkInfo[];
}

function StatusBadge({ status }: { status: number | null }) {
  if (status === null) {
    return (
      <span className="inline-block px-2 py-0.5 rounded-lg text-[10px] border font-medium bg-white/10 text-body border-white/10">
        -
      </span>
    );
  }
  if (status === 0) {
    return (
      <span className="inline-block px-2 py-0.5 rounded-lg text-[10px] border font-medium bg-red-500/15 text-red-400 border-red-500/20">
        ERR
      </span>
    );
  }
  if (status >= 200 && status < 300) {
    return (
      <span className="inline-block px-2 py-0.5 rounded-lg text-[10px] border font-medium bg-green-500/15 text-green-400 border-green-500/20">
        {status}
      </span>
    );
  }
  if (status >= 300 && status < 400) {
    return (
      <span className="inline-block px-2 py-0.5 rounded-lg text-[10px] border font-medium bg-yellow-500/15 text-yellow-400 border-yellow-500/20">
        {status}
      </span>
    );
  }
  return (
    <span className="inline-block px-2 py-0.5 rounded-lg text-[10px] border font-medium bg-red-500/15 text-red-400 border-red-500/20">
      {status}
    </span>
  );
}

function TypeBadge({ isInternal, t }: { isInternal: boolean; t: InternalLinkAnalyzerTranslation }) {
  return isInternal ? (
    <span className="inline-block px-2 py-0.5 rounded-lg text-[10px] border font-medium bg-accent/15 text-accent border-accent/20">
      {t.internal}
    </span>
  ) : (
    <span className="inline-block px-2 py-0.5 rounded-lg text-[10px] border font-medium bg-white/10 text-body border-white/10">
      {t.external}
    </span>
  );
}

export default function InternalLinkAnalyzerClient({ t }: { t: InternalLinkAnalyzerTranslation }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleCheck = async () => {
    const trimmed = url.trim();

    if (!trimmed) {
      setError(t.errorEmpty);
      return;
    }

    const normalized = /^https?:\/\//i.test(trimmed) ? trimmed : "https://" + trimmed;

    try {
      new URL(normalized);
    } catch {
      setError(t.errorInvalid);
      return;
    }

    setError("");
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/internal-link-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: normalized }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setResult(data);
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
        <label className="block text-sm font-medium text-heading">{t.urlLabel}</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder={t.urlPlaceholder}
          onKeyDown={(e) => { if (e.key === "Enter") handleCheck(); }}
          className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-body placeholder:text-white/20 focus:outline-none focus:border-accent/50 font-mono"
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
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Summary Boxes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-heading">{result.totalLinks}</div>
                <div className="text-xs text-body mt-1">{t.totalLinks}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-heading">{result.internalLinks}</div>
                <div className="text-xs text-body mt-1">{t.internalLinks}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-heading">{result.externalLinks}</div>
                <div className="text-xs text-body mt-1">{t.externalLinks}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className={`text-2xl font-medium ${result.brokenLinks.length > 0 ? "text-red-400" : "text-green-400"}`}>
                  {result.brokenLinks.length}
                </div>
                <div className="text-xs text-body mt-1">{t.brokenLinks}</div>
              </div>
            </div>

            {/* Broken Links Section */}
            {result.brokenLinks.length > 0 && (
              <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5 space-y-3">
                <h3 className="text-sm font-medium text-red-400">{t.brokenSection}</h3>
                <div className="space-y-2">
                  {result.brokenLinks.map((bl, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-xl border border-red-500/10 bg-bg-card px-4 py-3"
                    >
                      <StatusBadge status={bl.status} />
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-mono text-body truncate">{bl.url}</div>
                        {bl.anchor && (
                          <div className="text-[10px] text-body/60 mt-0.5 truncate">
                            {t.anchor}: {bl.anchor}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* All Links Table */}
            <div className="rounded-2xl border border-border bg-bg-card overflow-x-auto">
              <div className="px-5 py-4 border-b border-border">
                <h3 className="text-sm font-medium text-heading">{t.allLinksSection}</h3>
              </div>
              {result.links.length === 0 ? (
                <div className="px-5 py-8 text-center">
                  <p className="text-xs text-body/60 italic">{t.noLinks}</p>
                </div>
              ) : (
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="px-4 py-3 text-xs font-medium text-body">URL</th>
                      <th className="px-4 py-3 text-xs font-medium text-body">{t.anchor}</th>
                      <th className="px-4 py-3 text-xs font-medium text-body">Type</th>
                      <th className="px-4 py-3 text-xs font-medium text-body">{t.status}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {result.links.map((link, i) => (
                      <tr
                        key={i}
                        className={
                          link.status !== null && (link.status >= 400 || link.status === 0)
                            ? "bg-red-500/5"
                            : ""
                        }
                      >
                        <td className="px-4 py-3 max-w-[250px]">
                          <span className="text-xs font-mono text-body break-all">
                            {link.href.replace(/^https?:\/\//, "").slice(0, 60)}
                            {link.href.length > 67 ? "..." : ""}
                          </span>
                        </td>
                        <td className="px-4 py-3 max-w-[180px]">
                          <span className="text-xs text-body truncate block">
                            {link.anchor || "-"}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <TypeBadge isInternal={link.isInternal} t={t} />
                        </td>
                        <td className="px-4 py-3">
                          <StatusBadge status={link.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {/* Bottom CTA */}
            <div className="rounded-2xl border border-border bg-bg-card p-6 text-center space-y-4">
              <h3 className="text-lg font-medium text-heading">{t.ctaBottom}</h3>
              <p className="text-sm text-body max-w-[480px] mx-auto">{t.ctaBottomDesc}</p>
              <LocaleLink
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                {t.ctaBottomButton}
              </LocaleLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
