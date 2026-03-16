"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { OgCheckerTranslation } from "@/lib/i18n/translations/seoTools";

interface OgResult {
  url: string;
  ogTags: Record<string, string>;
  twitterTags: Record<string, string>;
  pageTitle: string;
  metaDescription: string;
  imageSize: number | null;
  issues: string[];
  score: number;
}

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
  results?: OgResult[];
  issues?: string[];
  score?: number;
  imageSize?: number | null;
}

type PreviewTab = "facebook" | "twitter" | "linkedin" | "whatsapp" | "slack" | "raw";

function SeverityBadge({ severity }: { severity: "critical" | "warning" | "info" }) {
  const cls = severity === "critical"
    ? "bg-red-500/15 text-red-400 border-red-500/20"
    : severity === "warning"
    ? "bg-yellow-500/15 text-yellow-400 border-yellow-500/20"
    : "bg-blue-500/15 text-blue-400 border-blue-500/20";
  return (
    <span className={`inline-block px-1.5 py-0.5 rounded text-[10px] border font-medium ${cls}`}>
      {severity}
    </span>
  );
}

function categorizeIssue(issue: string): "critical" | "warning" | "info" {
  if (issue.toLowerCase().includes("missing og:title") || issue.toLowerCase().includes("missing og:image") || issue.toLowerCase().includes("missing twitter:card"))
    return "critical";
  if (issue.toLowerCase().includes("missing") || issue.toLowerCase().includes("doesn't match"))
    return "warning";
  return "info";
}

function ScoreCircle({ score }: { score: number }) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 80 ? "stroke-green-400" : score >= 50 ? "stroke-yellow-400" : "stroke-red-400";
  const textColor = score >= 80 ? "text-green-400" : score >= 50 ? "text-yellow-400" : "text-red-400";

  return (
    <div className="relative w-16 h-16">
      <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r={radius} fill="none" stroke="currentColor" strokeWidth="3" className="text-white/10" />
        <circle cx="32" cy="32" r={radius} fill="none" strokeWidth="3" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} className={color} />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-sm font-medium ${textColor}`}>{score}</span>
      </div>
    </div>
  );
}

export default function OgCheckerClient({ t }: { t: OgCheckerTranslation }) {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"single" | "bulk">("single");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<OgData | null>(null);
  const [bulkResults, setBulkResults] = useState<OgResult[] | null>(null);
  const [activeTab, setActiveTab] = useState<PreviewTab>("facebook");
  const [selectedBulkIdx, setSelectedBulkIdx] = useState<number | null>(null);

  const handleCheck = async () => {
    if (!input.trim()) { setError(t.errorEmpty); return; }

    const lines = input.split("\n").map((l) => l.trim()).filter(Boolean);

    if (mode === "single" || lines.length === 1) {
      let checkUrl = lines[0];
      if (!/^https?:\/\//i.test(checkUrl)) checkUrl = "https://" + checkUrl;
      try { new URL(checkUrl); } catch { setError(t.errorInvalid); return; }

      setError("");
      setLoading(true);
      setData(null);
      setBulkResults(null);

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
    } else {
      // Bulk mode
      if (lines.length > 50) { setError("Maximum 50 URLs"); return; }
      const normalized = lines.map((l) => /^https?:\/\//i.test(l) ? l : "https://" + l);
      for (const u of normalized) {
        try { new URL(u); } catch { setError(t.errorInvalid); return; }
      }

      setError("");
      setLoading(true);
      setData(null);
      setBulkResults(null);
      setSelectedBulkIdx(null);

      try {
        const res = await fetch("/api/og-check", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ urls: normalized }),
        });
        if (!res.ok) throw new Error();
        const result = await res.json();
        setBulkResults(result.results);
      } catch {
        setError(t.errorFetch);
      } finally {
        setLoading(false);
      }
    }
  };

  const getTitle = () => data?.ogTitle || data?.pageTitle || "";
  const getDescription = () => data?.ogDescription || data?.metaDescription || "";
  const getImage = () => data?.ogImage || "";
  const getTwitterTitle = () => data?.twitterTitle || data?.ogTitle || data?.pageTitle || "";
  const getTwitterDesc = () => data?.twitterDescription || data?.ogDescription || data?.metaDescription || "";
  const getTwitterImage = () => data?.twitterImage || data?.ogImage || "";

  const getDomain = () => {
    try {
      const firstLine = input.split("\n")[0].trim();
      return new URL(firstLine.startsWith("http") ? firstLine : "https://" + firstLine).hostname;
    } catch { return input; }
  };

  const issues: { tag: string; severity: "critical" | "warning" | "info" }[] = [];
  const passed: string[] = [];
  if (data) {
    if (data.ogTitle) passed.push("og:title"); else issues.push({ tag: "og:title", severity: "critical" });
    if (data.ogDescription) passed.push("og:description"); else issues.push({ tag: "og:description", severity: "warning" });
    if (data.ogImage) passed.push("og:image"); else issues.push({ tag: "og:image", severity: "critical" });
    if (data.ogUrl) passed.push("og:url"); else issues.push({ tag: "og:url", severity: "warning" });
    if (data.ogType) passed.push("og:type"); else issues.push({ tag: "og:type", severity: "warning" });
    if (data.twitterCard) passed.push("twitter:card"); else issues.push({ tag: "twitter:card", severity: "critical" });
    if (data.twitterTitle) passed.push("twitter:title");
    if (data.twitterImage) passed.push("twitter:image");

    // Consistency
    if (data.ogTitle && data.pageTitle && data.ogTitle.trim().toLowerCase() !== data.pageTitle.trim().toLowerCase()) {
      issues.push({ tag: "og:title != <title>", severity: "info" });
    }
  }

  const generateTagSuggestion = () => {
    if (!data) return "";
    const lines: string[] = [];
    if (!data.ogTitle && data.pageTitle) lines.push(`<meta property="og:title" content="${data.pageTitle}" />`);
    if (!data.ogDescription && data.metaDescription) lines.push(`<meta property="og:description" content="${data.metaDescription}" />`);
    if (!data.ogType) lines.push(`<meta property="og:type" content="website" />`);
    if (!data.twitterCard) lines.push(`<meta name="twitter:card" content="summary_large_image" />`);
    if (!data.twitterTitle && data.pageTitle) lines.push(`<meta name="twitter:title" content="${data.pageTitle}" />`);
    if (!data.twitterDescription && data.metaDescription) lines.push(`<meta name="twitter:description" content="${data.metaDescription}" />`);
    return lines.join("\n");
  };

  const tabs: { key: PreviewTab; label: string }[] = [
    { key: "facebook", label: t.facebookTab },
    { key: "twitter", label: t.twitterTab },
    { key: "linkedin", label: t.linkedinTab },
    { key: "whatsapp", label: "WhatsApp" },
    { key: "slack", label: "Slack" },
    { key: "raw", label: t.rawTagsTab },
  ];

  return (
    <div className="space-y-8">
      {/* URL Input */}
      <div className="max-w-[700px] mx-auto space-y-3">
        <div className="flex gap-2 mb-2">
          <button
            onClick={() => setMode("single")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${mode === "single" ? "bg-accent text-white" : "text-body hover:text-heading bg-white/[0.03] border border-border"}`}
          >
            Single URL
          </button>
          <button
            onClick={() => setMode("bulk")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${mode === "bulk" ? "bg-accent text-white" : "text-body hover:text-heading bg-white/[0.03] border border-border"}`}
          >
            Bulk (up to 50)
          </button>
        </div>

        {mode === "single" ? (
          <div className="flex gap-3">
            <input
              className="w-full rounded-lg border border-border bg-white/[0.03] px-4 py-2.5 text-sm text-heading placeholder:text-white/20 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors"
              value={input}
              onChange={(e) => setInput(e.target.value)}
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
        ) : (
          <div className="space-y-3">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter one URL per line (up to 50)"
              rows={5}
              className="w-full rounded-lg border border-border bg-white/[0.03] px-4 py-2.5 text-sm text-heading placeholder:text-white/20 focus:border-accent/50 focus:outline-none font-mono resize-y"
            />
            <button
              onClick={handleCheck}
              disabled={loading}
              className="rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-white hover:bg-accent/90 transition-colors disabled:opacity-60"
            >
              {loading ? t.checkingButton : t.checkButton}
            </button>
          </div>
        )}
        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
      </div>

      {/* Bulk Results */}
      <AnimatePresence>
        {bulkResults && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-[700px] mx-auto">
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-heading">{bulkResults.length}</div>
                <div className="text-xs text-body mt-1">URLs Checked</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-green-400">{bulkResults.filter((r) => r.score >= 80).length}</div>
                <div className="text-xs text-body mt-1">Good (80+)</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-yellow-400">{bulkResults.filter((r) => r.score >= 50 && r.score < 80).length}</div>
                <div className="text-xs text-body mt-1">Needs Work</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-2xl font-medium text-red-400">{bulkResults.filter((r) => r.score < 50).length}</div>
                <div className="text-xs text-body mt-1">Poor</div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-bg-card overflow-hidden max-w-[700px] mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-4 py-3 text-left text-xs font-medium text-body">URL</th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-body">Score</th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-body">Issues</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {bulkResults.map((r, i) => (
                      <tr
                        key={i}
                        className={`cursor-pointer hover:bg-white/[0.02] transition-colors ${selectedBulkIdx === i ? "bg-accent/5" : ""}`}
                        onClick={() => setSelectedBulkIdx(selectedBulkIdx === i ? null : i)}
                      >
                        <td className="px-4 py-3">
                          <span className="text-xs font-mono text-body break-all">
                            {r.url.replace(/^https?:\/\//, "").slice(0, 50)}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className={`text-sm font-medium ${r.score >= 80 ? "text-green-400" : r.score >= 50 ? "text-yellow-400" : "text-red-400"}`}>
                            {r.score}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className={`text-xs ${r.issues.length > 0 ? "text-red-400" : "text-green-400"}`}>
                            {r.issues.length}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {selectedBulkIdx !== null && bulkResults[selectedBulkIdx] && (
              <div className="rounded-2xl border border-border bg-bg-card p-5 max-w-[700px] mx-auto space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-heading truncate">{bulkResults[selectedBulkIdx].url}</h3>
                  <ScoreCircle score={bulkResults[selectedBulkIdx].score} />
                </div>
                {bulkResults[selectedBulkIdx].issues.length > 0 ? (
                  <div className="space-y-1.5">
                    {bulkResults[selectedBulkIdx].issues.map((issue, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs">
                        <SeverityBadge severity={categorizeIssue(issue)} />
                        <span className="text-body">{issue}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-green-400">All tags present and valid.</p>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Single URL Results */}
      <AnimatePresence>
        {data && !bulkResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {/* Score */}
            {data.score !== undefined && (
              <div className="flex justify-center">
                <ScoreCircle score={data.score} />
              </div>
            )}

            {/* Tab Navigation */}
            <div className="flex gap-1 p-1 rounded-xl bg-white/[0.03] border border-border max-w-fit mx-auto flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
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
                    <p className="text-[15px] text-[#536471] mt-1">{getDomain()}</p>
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

              {activeTab === "whatsapp" && (
                <div className="rounded-xl overflow-hidden border border-[#d1d7db] bg-[#e7ffd5] shadow-sm max-w-[400px]">
                  <div className="p-2.5 bg-[#dcf8c6] border-l-4 border-[#4fce5d]">
                    <p className="text-[13px] font-medium text-[#075e54] line-clamp-1">{getTitle() || getDomain()}</p>
                    <p className="text-[12px] text-[#667781] line-clamp-2 mt-0.5">{getDescription()}</p>
                    <p className="text-[11px] text-[#667781] mt-1">{getDomain()}</p>
                  </div>
                  {getImage() && (
                    <div className="aspect-[1.91/1] bg-gray-100 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={getImage()} alt="" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              )}

              {activeTab === "slack" && (
                <div className="rounded-lg border border-[#e1e4e8] bg-white shadow-sm p-4 max-w-[500px]">
                  <div className="border-l-4 border-[#36c5f0] pl-3 space-y-1.5">
                    <p className="text-[15px] font-bold text-[#1264a3] line-clamp-1">{getTitle() || getDomain()}</p>
                    <p className="text-[14px] text-[#1d1c1d] line-clamp-3">{getDescription()}</p>
                    {getImage() && (
                      <div className="mt-2 rounded overflow-hidden max-w-[360px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={getImage()} alt="" className="w-full object-cover rounded max-h-[200px]" />
                      </div>
                    )}
                    <p className="text-[12px] text-[#616061] mt-1">{getDomain()}</p>
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

            {/* OG Image dimension recommendation */}
            {data.ogImage && (
              <div className="max-w-[700px] mx-auto rounded-xl border border-border bg-bg-card p-4">
                <h3 className="text-xs font-medium text-heading mb-2">OG Image Check</h3>
                <p className="text-xs text-body">
                  Recommended OG image dimensions: <span className="text-accent font-medium">1200 x 630 pixels</span> (1.91:1 aspect ratio).
                  {data.imageSize != null ? ` Image file size: ${data.imageSize < 1024 * 1024 ? `${(data.imageSize / 1024).toFixed(0)} KB` : `${(data.imageSize / 1024 / 1024).toFixed(1)} MB`}` : ""}
                </p>
              </div>
            )}

            {/* Issues + Passed */}
            <div className="grid md:grid-cols-2 gap-4 max-w-[700px] mx-auto">
              {issues.length > 0 && (
                <div className="rounded-xl border border-border bg-bg-card p-5">
                  <h3 className="text-sm font-medium text-heading mb-3">{t.issuesTitle}</h3>
                  <div className="space-y-2">
                    {issues.map((item) => (
                      <div key={item.tag} className="flex items-center gap-2 text-sm">
                        <SeverityBadge severity={item.severity} />
                        <span className="text-red-400 font-mono text-xs">{item.tag}</span>
                        <span className="text-white/30 text-xs">- {t.missingTag}</span>
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
                        <span className="text-green-400 font-mono text-xs">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Generate tag suggestion */}
            {issues.length > 0 && (
              <div className="max-w-[700px] mx-auto rounded-xl border border-accent/20 bg-accent/5 p-5 space-y-3">
                <h3 className="text-sm font-medium text-heading">Suggested Tags</h3>
                <p className="text-xs text-body">Add these meta tags to your page&apos;s &lt;head&gt; section:</p>
                <pre className="text-xs font-mono text-accent bg-bg rounded-lg p-3 overflow-x-auto whitespace-pre-wrap">
                  {generateTagSuggestion() || "All essential tags are present."}
                </pre>
              </div>
            )}
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
