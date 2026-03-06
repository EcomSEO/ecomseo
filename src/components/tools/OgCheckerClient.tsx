"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { OgCheckerTranslation } from "@/lib/i18n/translations/seoTools";

interface OgData {
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  ogSiteName?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  pageTitle?: string;
  metaDescription?: string;
  allTags: { property: string; content: string }[];
}

export default function OgCheckerClient({ t }: { t: OgCheckerTranslation }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<OgData | null>(null);
  const [activeTab, setActiveTab] = useState<"facebook" | "twitter" | "linkedin" | "raw">("facebook");

  const handleCheck = async () => {
    if (!url.trim()) { setError(t.errorEmpty); return; }
    let checkUrl = url.trim();
    if (!/^https?:\/\//i.test(checkUrl)) checkUrl = "https://" + checkUrl;
    try { new URL(checkUrl); } catch { setError(t.errorInvalid); return; }

    setError("");
    setLoading(true);
    setData(null);

    try {
      const res = await fetch("/api/og-check", {
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

  const getTitle = () => data?.ogTitle || data?.pageTitle || "";
  const getDescription = () => data?.ogDescription || data?.metaDescription || "";
  const getImage = () => data?.ogImage || "";
  const getTwitterTitle = () => data?.twitterTitle || data?.ogTitle || data?.pageTitle || "";
  const getTwitterDesc = () => data?.twitterDescription || data?.ogDescription || data?.metaDescription || "";
  const getTwitterImage = () => data?.twitterImage || data?.ogImage || "";

  const getDomain = () => {
    try { return new URL(url.startsWith("http") ? url : "https://" + url).hostname; }
    catch { return url; }
  };

  const issues: string[] = [];
  const passed: string[] = [];
  if (data) {
    if (data.ogTitle) passed.push("og:title"); else issues.push("og:title");
    if (data.ogDescription) passed.push("og:description"); else issues.push("og:description");
    if (data.ogImage) passed.push("og:image"); else issues.push("og:image");
    if (data.ogUrl) passed.push("og:url"); else issues.push("og:url");
    if (data.ogType) passed.push("og:type"); else issues.push("og:type");
    if (data.twitterCard) passed.push("twitter:card"); else issues.push("twitter:card");
    if (data.twitterTitle) passed.push("twitter:title");
    if (data.twitterImage) passed.push("twitter:image");
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-white/[0.03] px-4 py-2.5 text-sm text-heading placeholder:text-white/20 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors";

  const tabs = [
    { key: "facebook" as const, label: t.facebookTab },
    { key: "twitter" as const, label: t.twitterTab },
    { key: "linkedin" as const, label: t.linkedinTab },
    { key: "raw" as const, label: t.rawTagsTab },
  ];

  return (
    <div className="space-y-8">
      {/* URL Input */}
      <div className="max-w-[700px] mx-auto">
        <div className="flex gap-3">
          <input
            className={inputClass}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCheck()}
            placeholder={t.urlPlaceholder}
          />
          <button
            onClick={handleCheck}
            disabled={loading}
            className="shrink-0 rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-white hover:bg-accent/90 transition-colors disabled:opacity-60"
          >
            {loading ? t.checkingButton : t.checkButton}
          </button>
        </div>
        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
      </div>

      {/* Results */}
      <AnimatePresence>
        {data && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {/* Tab Navigation */}
            <div className="flex gap-1 p-1 rounded-xl bg-white/[0.03] border border-border max-w-fit mx-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.key
                      ? "bg-accent text-white"
                      : "text-body hover:text-heading hover:bg-white/[0.05]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Preview Cards */}
            <div className="max-w-[600px] mx-auto">
              {activeTab === "facebook" && (
                <div className="rounded-lg overflow-hidden border border-[#dadde1] bg-white shadow-sm">
                  {getImage() ? (
                    <div className="aspect-[1.91/1] bg-gray-100 relative overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={getImage()} alt="" className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="aspect-[1.91/1] bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">{t.noImageFound}</span>
                    </div>
                  )}
                  <div className="p-3 border-t border-[#dadde1] bg-[#f2f3f5]">
                    <p className="text-[11px] text-[#606770] uppercase tracking-wide">{getDomain()}</p>
                    <p className="text-[16px] font-semibold text-[#1d2129] leading-tight mt-0.5 line-clamp-2">{getTitle()}</p>
                    <p className="text-[14px] text-[#606770] line-clamp-1 mt-0.5">{getDescription()}</p>
                  </div>
                </div>
              )}

              {activeTab === "twitter" && (
                <div className="rounded-2xl overflow-hidden border border-[#e1e8ed] bg-white shadow-sm">
                  {getTwitterImage() ? (
                    <div className="aspect-[2/1] bg-gray-100 relative overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={getTwitterImage()} alt="" className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="aspect-[2/1] bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">{t.noImageFound}</span>
                    </div>
                  )}
                  <div className="p-3 border-t border-[#e1e8ed]">
                    <p className="text-[15px] font-bold text-[#0f1419] line-clamp-1">{getTwitterTitle()}</p>
                    <p className="text-[15px] text-[#536471] line-clamp-2 mt-0.5">{getTwitterDesc()}</p>
                    <p className="text-[15px] text-[#536471] mt-1 flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {getDomain()}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "linkedin" && (
                <div className="rounded-lg overflow-hidden border border-[#e0e0e0] bg-white shadow-sm">
                  {getImage() ? (
                    <div className="aspect-[1.91/1] bg-gray-100 relative overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={getImage()} alt="" className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="aspect-[1.91/1] bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">{t.noImageFound}</span>
                    </div>
                  )}
                  <div className="p-3 border-t border-[#e0e0e0] bg-[#f3f6f8]">
                    <p className="text-[14px] font-semibold text-[#000000e6] line-clamp-2">{getTitle()}</p>
                    <p className="text-[12px] text-[#00000099] mt-0.5">{getDomain()}</p>
                  </div>
                </div>
              )}

              {activeTab === "raw" && (
                <div className="rounded-2xl border border-border bg-bg-card p-5 max-h-[400px] overflow-auto">
                  {data.allTags.length > 0 ? (
                    <div className="space-y-2">
                      {data.allTags.map((tag, i) => (
                        <div key={i} className="flex gap-3 text-xs font-mono">
                          <span className="text-accent shrink-0 min-w-[160px]">{tag.property}</span>
                          <span className="text-body break-all">{tag.content}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-white/20 text-center py-4">No OG/Twitter tags found</p>
                  )}
                </div>
              )}
            </div>

            {/* Issues + Passed */}
            <div className="grid md:grid-cols-2 gap-4 max-w-[700px] mx-auto">
              {issues.length > 0 && (
                <div className="rounded-xl border border-border bg-bg-card p-5">
                  <h3 className="text-sm font-medium text-heading mb-3">{t.issuesTitle}</h3>
                  <div className="space-y-2">
                    {issues.map((tag) => (
                      <div key={tag} className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-red-400 shrink-0" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M7.5 7.5l5 5M12.5 7.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <span className="text-red-400 font-mono">{tag}</span>
                        <span className="text-white/30 text-xs">— {t.missingTag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {passed.length > 0 && (
                <div className="rounded-xl border border-border bg-bg-card p-5">
                  <h3 className="text-sm font-medium text-heading mb-3">{t.passedTitle}</h3>
                  <div className="space-y-2">
                    {passed.map((tag) => (
                      <div key={tag} className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-green-400 shrink-0" viewBox="0 0 20 20" fill="none">
                          <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-green-400 font-mono">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom CTA */}
      <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8 text-center max-w-[700px] mx-auto">
        <h3 className="text-lg font-medium text-heading mb-2">{t.ctaBottom}</h3>
        <p className="text-sm text-body mb-6">{t.ctaBottomDesc}</p>
        <a
          href="https://d2fqmklduf8wng.typeform.com/to/cFBjPOkN"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent/90 transition-colors"
        >
          {t.ctaBottomButton}
        </a>
      </div>
    </div>
  );
}
