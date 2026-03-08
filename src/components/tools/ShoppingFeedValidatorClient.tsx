"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ShoppingFeedValidatorTranslation } from "@/lib/i18n/translations/seoTools";
import LocaleLink from "@/components/ui/LocaleLink";

interface ProductValidation {
  title: string;
  id: string;
  errors: string[];
  warnings: string[];
}

interface FeedData {
  totalProducts: number;
  validProducts: number;
  errors: number;
  warnings: number;
  products: ProductValidation[];
}

export default function ShoppingFeedValidatorClient({ t }: { t: ShoppingFeedValidatorTranslation }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<FeedData | null>(null);
  const [expandedProducts, setExpandedProducts] = useState<Set<number>>(new Set());

  const toggleProduct = (index: number) => {
    setExpandedProducts((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const handleCheck = async () => {
    if (!url.trim()) { setError(t.errorEmpty); return; }
    let checkUrl = url.trim();
    if (!/^https?:\/\//i.test(checkUrl)) checkUrl = "https://" + checkUrl;
    try { new URL(checkUrl); } catch { setError(t.errorInvalid); return; }

    setError("");
    setLoading(true);
    setData(null);
    setExpandedProducts(new Set());

    try {
      const res = await fetch("/api/shopping-feed-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: checkUrl }),
      });
      if (!res.ok) throw new Error();
      const result = await res.json();
      setData(result);
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
        <div className="flex gap-3">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCheck()}
            placeholder={t.urlPlaceholder}
            className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-body placeholder:text-white/20 focus:outline-none focus:border-accent/50 font-mono"
          />
          <button
            onClick={handleCheck}
            disabled={loading}
            className="shrink-0 px-8 py-3 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? t.checkingButton : t.checkButton}
          </button>
        </div>
        {error && <p className="text-red-400 text-sm">{error}</p>}
      </div>

      {/* Results */}
      <AnimatePresence>
        {data && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Summary boxes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-heading">{data.totalProducts}</div>
                <div className="text-xs text-body mt-1">{t.productsFound}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-green-400">{data.validProducts}</div>
                <div className="text-xs text-body mt-1">{t.validProducts}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className={`text-2xl font-medium ${data.errors > 0 ? "text-red-400" : "text-heading"}`}>
                  {data.errors}
                </div>
                <div className="text-xs text-body mt-1">{t.errorsCount}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className={`text-2xl font-medium ${data.warnings > 0 ? "text-yellow-400" : "text-heading"}`}>
                  {data.warnings}
                </div>
                <div className="text-xs text-body mt-1">{t.warningsCount}</div>
              </div>
            </div>

            {/* No products found */}
            {data.totalProducts === 0 && (
              <div className="rounded-2xl border border-border bg-bg-card p-8 text-center">
                <div className="text-white/20 mb-2">
                  <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-sm text-body">No product items found in this feed. Make sure the feed contains &lt;item&gt; or &lt;entry&gt; elements.</p>
              </div>
            )}

            {/* Per-product cards */}
            {data.products.length > 0 && (
              <div className="space-y-3">
                {data.products.map((product, i) => {
                  const isExpanded = expandedProducts.has(i);
                  const hasErrors = product.errors.length > 0;
                  const hasWarnings = product.warnings.length > 0;
                  const isValid = !hasErrors && !hasWarnings;

                  return (
                    <div key={i} className="rounded-2xl border border-border bg-bg-card overflow-hidden">
                      {/* Header - always visible, clickable */}
                      <button
                        onClick={() => toggleProduct(i)}
                        className="w-full flex items-center gap-3 p-5 text-left hover:bg-white/[0.02] transition-colors"
                      >
                        {/* Status icon */}
                        {isValid ? (
                          <svg className="w-5 h-5 text-green-400 shrink-0" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : hasErrors ? (
                          <svg className="w-5 h-5 text-red-400 shrink-0" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M7.5 7.5l5 5M12.5 7.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-yellow-400 shrink-0" viewBox="0 0 20 20" fill="none">
                            <path d="M10 6v4m0 3h.01M3.07 16.5h13.86c1.1 0 1.78-1.2 1.22-2.14L11.22 3.36c-.56-.94-1.88-.94-2.44 0L1.85 14.36c-.56.94.12 2.14 1.22 2.14z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}

                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-heading truncate">{product.title}</div>
                          <div className="text-xs text-body font-mono mt-0.5">{t.productId}: {product.id}</div>
                        </div>

                        {/* Counts */}
                        <div className="flex items-center gap-3 shrink-0">
                          {hasErrors && (
                            <span className="text-xs text-red-400">{product.errors.length} {t.errorsLabel}</span>
                          )}
                          {hasWarnings && (
                            <span className="text-xs text-yellow-400">{product.warnings.length} {t.warningsLabel}</span>
                          )}
                          {isValid && (
                            <span className="text-xs text-green-400 font-medium">{t.noIssues}</span>
                          )}
                        </div>

                        {/* Chevron */}
                        <svg
                          className={`w-4 h-4 text-body shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      {/* Expanded details */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 space-y-4 border-t border-border pt-4">
                              {/* Errors */}
                              {hasErrors && (
                                <div>
                                  <p className="text-xs text-body mb-2">{t.errorsLabel} ({product.errors.length})</p>
                                  <div className="space-y-1.5">
                                    {product.errors.map((err, ei) => (
                                      <div key={ei} className="flex items-start gap-2 text-sm">
                                        <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                                          <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
                                          <path d="M7.5 7.5l5 5M12.5 7.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                        <span className="text-red-400 text-xs">{err}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Warnings */}
                              {hasWarnings && (
                                <div>
                                  <p className="text-xs text-body mb-2">{t.warningsLabel} ({product.warnings.length})</p>
                                  <div className="space-y-1.5">
                                    {product.warnings.map((warn, wi) => (
                                      <div key={wi} className="flex items-start gap-2 text-sm">
                                        <svg className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                                          <path d="M10 6v4m0 3h.01M3.07 16.5h13.86c1.1 0 1.78-1.2 1.22-2.14L11.22 3.36c-.56-.94-1.88-.94-2.44 0L1.85 14.36c-.56.94.12 2.14 1.22 2.14z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="text-yellow-400 text-xs">{warn}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* All good */}
                              {isValid && (
                                <div className="flex items-center gap-2">
                                  <svg className="w-4 h-4 text-green-400" viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                  <span className="text-green-400 text-xs font-medium">{t.noIssues}</span>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom CTA */}
      <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8 text-center">
        <h3 className="text-lg font-medium text-heading mb-2">{t.ctaBottom}</h3>
        <p className="text-sm text-body mb-6">{t.ctaBottomDesc}</p>
        <LocaleLink
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent/90 transition-colors"
        >
          {t.ctaBottomButton}
        </LocaleLink>
      </div>
    </div>
  );
}
