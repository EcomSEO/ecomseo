"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { SchemaValidatorTranslation } from "@/lib/i18n/translations/seoTools";
import LocaleLink from "@/components/ui/LocaleLink";

interface JsonLdResult {
  raw: string;
  type: string;
  fields: string[];
  errors: string[];
  warnings: string[];
}

interface MicrodataResult {
  type: string;
  properties: string[];
}

interface SchemaData {
  jsonLd: JsonLdResult[];
  microdata: MicrodataResult[];
  totalTypes: number;
  totalErrors: number;
}

export default function SchemaValidatorClient({ t }: { t: SchemaValidatorTranslation }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<SchemaData | null>(null);

  const handleCheck = async () => {
    if (!url.trim()) { setError(t.errorEmpty); return; }
    let checkUrl = url.trim();
    if (!/^https?:\/\//i.test(checkUrl)) checkUrl = "https://" + checkUrl;
    try { new URL(checkUrl); } catch { setError(t.errorInvalid); return; }

    setError("");
    setLoading(true);
    setData(null);

    try {
      const res = await fetch("/api/schema-validate", {
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

  const noSchemaFound = data && data.totalTypes === 0;

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
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-heading">{data.totalTypes}</div>
                <div className="text-xs text-body mt-1">{t.typesFound}</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className={`text-2xl font-medium ${data.totalErrors > 0 ? "text-red-400" : "text-green-400"}`}>
                  {data.totalErrors}
                </div>
                <div className="text-xs text-body mt-1">{t.errorsFound}</div>
              </div>
            </div>

            {/* No schema found */}
            {noSchemaFound && (
              <div className="rounded-2xl border border-border bg-bg-card p-8 text-center">
                <div className="text-white/20 mb-2">
                  <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-sm text-body">{t.noSchemaFound}</p>
              </div>
            )}

            {/* JSON-LD results */}
            {data.jsonLd.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-base font-medium text-heading">{t.jsonLdTitle}</h3>
                {data.jsonLd.map((item, i) => (
                  <div key={i} className="rounded-2xl border border-border bg-bg-card p-5 space-y-4">
                    {/* Type badge */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-body">{t.typeLabel}</span>
                      <span className="inline-block px-2.5 py-1 rounded-lg text-xs border font-medium bg-accent/10 text-accent border-accent/20">
                        {item.type}
                      </span>
                    </div>

                    {/* Fields */}
                    <div>
                      <p className="text-xs text-body mb-2">{t.fieldsLabel} ({item.fields.length})</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.fields.map((field, fi) => (
                          <span key={fi} className="inline-block px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-body border border-border">
                            {field}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Errors */}
                    {item.errors.length > 0 && (
                      <div>
                        <p className="text-xs text-body mb-2">{t.errorsLabel} ({item.errors.length})</p>
                        <div className="space-y-1.5">
                          {item.errors.map((err, ei) => (
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
                    {item.warnings.length > 0 && (
                      <div>
                        <p className="text-xs text-body mb-2">{t.warningsLabel} ({item.warnings.length})</p>
                        <div className="space-y-1.5">
                          {item.warnings.map((warn, wi) => (
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

                    {/* No issues */}
                    {item.errors.length === 0 && item.warnings.length === 0 && (
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-400" viewBox="0 0 20 20" fill="none">
                          <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-green-400 text-xs font-medium">No issues found</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Microdata results */}
            {data.microdata.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-base font-medium text-heading">{t.microdataTitle}</h3>
                {data.microdata.map((item, i) => (
                  <div key={i} className="rounded-2xl border border-border bg-bg-card p-5 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-body">{t.typeLabel}</span>
                      <span className="inline-block px-2.5 py-1 rounded-lg text-xs border font-medium bg-white/5 text-body border-border">
                        {item.type}
                      </span>
                    </div>
                    {item.properties.length > 0 && (
                      <div>
                        <p className="text-xs text-body mb-2">{t.fieldsLabel} ({item.properties.length})</p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.properties.map((prop, pi) => (
                            <span key={pi} className="inline-block px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-body border border-border">
                              {prop}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
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
