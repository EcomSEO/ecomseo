"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { RobotsAnalyzerTranslation } from "@/lib/i18n/translations/seoTools";

interface RobotRule {
  userAgent: string;
  allow: string[];
  disallow: string[];
  crawlDelay?: string;
}

interface RobotsData {
  raw: string;
  rules: RobotRule[];
  sitemaps: string[];
  issues: string[];
  passed: string[];
}

function matchesRule(path: string, pattern: string): boolean {
  if (pattern === "/") return true;
  if (pattern.endsWith("*")) {
    return path.startsWith(pattern.slice(0, -1));
  }
  if (pattern.endsWith("$")) {
    return path === pattern.slice(0, -1);
  }
  return path.startsWith(pattern);
}

export default function RobotsAnalyzerClient({ t }: { t: RobotsAnalyzerTranslation }) {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<RobotsData | null>(null);
  const [activeTab, setActiveTab] = useState<"rules" | "raw">("rules");
  const [testUrl, setTestUrl] = useState("");
  const [testAgent, setTestAgent] = useState("Googlebot");
  const [testResult, setTestResult] = useState<"allowed" | "blocked" | null>(null);

  const handleAnalyze = async () => {
    if (!domain.trim()) { setError(t.errorEmpty); return; }
    const cleanDomain = domain.trim().replace(/^https?:\/\//, "").replace(/\/.*$/, "");
    if (!/^[a-zA-Z0-9][a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(cleanDomain)) {
      setError(t.errorInvalid); return;
    }

    setError("");
    setLoading(true);
    setData(null);
    setTestResult(null);

    try {
      const res = await fetch("/api/robots-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain: cleanDomain }),
      });
      if (!res.ok) throw new Error();
      const result = await res.json();
      if (result.error) { setError(result.error === "no_robots" ? t.errorNoRobots : t.errorFetch); return; }
      setData(result);
    } catch {
      setError(t.errorFetch);
    } finally {
      setLoading(false);
    }
  };

  const handleTest = () => {
    if (!data || !testUrl.trim()) return;
    const path = testUrl.startsWith("/") ? testUrl : "/" + testUrl;
    const agentLower = testAgent.toLowerCase();

    // Find matching rules
    let blocked = false;
    for (const rule of data.rules) {
      const ua = rule.userAgent.toLowerCase();
      if (ua === "*" || ua === agentLower) {
        // Check disallow first, then allow (allow takes precedence for same specificity)
        for (const d of rule.disallow) {
          if (matchesRule(path, d)) {
            blocked = true;
          }
        }
        for (const a of rule.allow) {
          if (matchesRule(path, a)) {
            blocked = false;
          }
        }
      }
    }
    setTestResult(blocked ? "blocked" : "allowed");
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-white/[0.03] px-4 py-2.5 text-sm text-heading placeholder:text-white/20 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors";

  const AGENTS = ["Googlebot", "Bingbot", "GPTBot", "ClaudeBot", "PerplexityBot", "Applebot", "*"];

  return (
    <div className="space-y-8">
      {/* Domain Input */}
      <div className="max-w-[700px] mx-auto">
        <div className="flex gap-3">
          <input
            className={inputClass}
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
            placeholder={t.urlPlaceholder}
          />
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="shrink-0 rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-white hover:bg-accent/90 transition-colors disabled:opacity-60"
          >
            {loading ? t.analyzingButton : t.analyzeButton}
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
            {/* URL Tester */}
            <div className="rounded-2xl border border-border bg-bg-card p-5 max-w-[700px] mx-auto">
              <h3 className="text-sm font-medium text-heading mb-3">{t.testUrlLabel}</h3>
              <div className="flex gap-3 items-end">
                <div className="flex-1">
                  <input
                    className={inputClass}
                    value={testUrl}
                    onChange={(e) => { setTestUrl(e.target.value); setTestResult(null); }}
                    onKeyDown={(e) => e.key === "Enter" && handleTest()}
                    placeholder={t.testUrlPlaceholder}
                  />
                </div>
                <div className="w-[140px]">
                  <select
                    className={inputClass}
                    value={testAgent}
                    onChange={(e) => { setTestAgent(e.target.value); setTestResult(null); }}
                  >
                    {AGENTS.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={handleTest}
                  className="shrink-0 rounded-lg bg-white/[0.06] border border-border px-5 py-2.5 text-sm font-medium text-heading hover:bg-white/[0.1] transition-colors"
                >
                  {t.testButton}
                </button>
              </div>
              {testResult && (
                <div className={`mt-3 flex items-center gap-2 text-sm font-medium ${testResult === "allowed" ? "text-green-400" : "text-red-400"}`}>
                  {testResult === "allowed" ? (
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none"><path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  ) : (
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" /><path d="M7.5 7.5l5 5M12.5 7.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  )}
                  {testResult === "allowed" ? t.allowedResult : t.blockedResult}: {testUrl} ({testAgent})
                </div>
              )}
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-1 p-1 rounded-xl bg-white/[0.03] border border-border max-w-fit mx-auto">
              <button
                onClick={() => setActiveTab("rules")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "rules" ? "bg-accent text-white" : "text-body hover:text-heading hover:bg-white/[0.05]"}`}
              >
                {t.rulesTitle}
              </button>
              <button
                onClick={() => setActiveTab("raw")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "raw" ? "bg-accent text-white" : "text-body hover:text-heading hover:bg-white/[0.05]"}`}
              >
                {t.rawContentTitle}
              </button>
            </div>

            <div className="max-w-[800px] mx-auto">
              {activeTab === "rules" && (
                <div className="space-y-4">
                  {/* Sitemaps */}
                  {data.sitemaps.length > 0 && (
                    <div className="rounded-xl border border-border bg-bg-card p-5">
                      <h4 className="text-xs font-medium text-body-strong uppercase tracking-wider mb-3">{t.sitemapLabel}</h4>
                      <div className="space-y-1.5">
                        {data.sitemaps.map((s, i) => (
                          <a key={i} href={s} target="_blank" rel="noopener noreferrer" className="block text-sm text-accent hover:text-primary-hover break-all transition-colors">{s}</a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Rules by User-Agent */}
                  {data.rules.length > 0 ? data.rules.map((rule, i) => (
                    <div key={i} className="rounded-xl border border-border bg-bg-card p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-medium text-body-strong uppercase tracking-wider">{t.userAgentLabel}:</span>
                        <span className="text-sm font-mono text-heading">{rule.userAgent}</span>
                        {rule.crawlDelay && (
                          <span className="ml-auto text-xs text-body font-mono">{t.crawlDelayLabel}: {rule.crawlDelay}s</span>
                        )}
                      </div>
                      <div className="space-y-1">
                        {rule.disallow.map((d, j) => (
                          <div key={`d-${j}`} className="flex items-center gap-2 text-sm font-mono">
                            <span className="text-red-400 text-xs w-16 shrink-0">{t.disallowLabel}</span>
                            <span className="text-body break-all">{d || "/"}</span>
                          </div>
                        ))}
                        {rule.allow.map((a, j) => (
                          <div key={`a-${j}`} className="flex items-center gap-2 text-sm font-mono">
                            <span className="text-green-400 text-xs w-16 shrink-0">{t.allowLabel}</span>
                            <span className="text-body break-all">{a}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )) : (
                    <p className="text-sm text-white/20 text-center py-8">{t.noRulesFound}</p>
                  )}
                </div>
              )}

              {activeTab === "raw" && (
                <div className="rounded-2xl border border-border bg-bg-card p-5 max-h-[500px] overflow-auto">
                  <pre className="text-xs text-body font-mono whitespace-pre-wrap break-all leading-relaxed">
                    {data.raw}
                  </pre>
                </div>
              )}
            </div>

            {/* Issues + Passed */}
            {(data.issues.length > 0 || data.passed.length > 0) && (
              <div className="grid md:grid-cols-2 gap-4 max-w-[700px] mx-auto">
                {data.issues.length > 0 && (
                  <div className="rounded-xl border border-border bg-bg-card p-5">
                    <h3 className="text-sm font-medium text-heading mb-3">{t.issuesTitle}</h3>
                    <div className="space-y-2">
                      {data.issues.map((issue, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <svg className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                            <path d="M10 6v4M10 14h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                          <span className="text-body">{issue}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {data.passed.length > 0 && (
                  <div className="rounded-xl border border-border bg-bg-card p-5">
                    <h3 className="text-sm font-medium text-heading mb-3">{t.passedTitle}</h3>
                    <div className="space-y-2">
                      {data.passed.map((check, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <svg className="w-4 h-4 text-green-400 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-body">{check}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
