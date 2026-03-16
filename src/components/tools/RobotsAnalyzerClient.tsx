"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { exportToPDF } from "@/lib/export-utils";
import type { RobotsAnalyzerTranslation } from "@/lib/i18n/translations/seoTools";

/* ── Types ────────────────────────────────────────────────────────────── */

interface RuleItem {
  type: "allow" | "disallow" | "crawl-delay";
  path: string;
  line: number;
}

interface UserAgentBlock {
  name: string;
  rules: RuleItem[];
}

interface Issue {
  type: "error" | "warning" | "info";
  message: string;
  line?: number;
}

interface EcommerceCheck {
  path: string;
  label: string;
  blocked: boolean;
  recommendation: string;
}

interface RobotsData {
  url: string;
  robotsTxt: string;
  userAgents: UserAgentBlock[];
  sitemapUrls: string[];
  issues: Issue[];
  score: number;
  fixedRobotsTxt: string;
  ecommerceChecks: EcommerceCheck[];
}

/* ── Helpers ──────────────────────────────────────────────────────────── */

function escapeRegexExceptStar(str: string): string {
  return str.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
}

function patternToRegex(pattern: string, anchor: "prefix" | "full"): RegExp {
  const segments = pattern.split("*").map(escapeRegexExceptStar);
  const joined = segments.join(".*");
  return new RegExp("^" + joined + (anchor === "full" ? "$" : ""));
}

function matchesRule(path: string, pattern: string): boolean {
  if (!pattern) return false;
  if (pattern === "/") return true;

  try {
    // Handle $ anchor
    if (pattern.endsWith("$")) {
      const p = pattern.slice(0, -1);
      if (p.includes("*")) {
        return patternToRegex(p, "full").test(path);
      }
      return path === p;
    }

    // Handle * wildcard
    if (pattern.includes("*")) {
      return patternToRegex(pattern, "prefix").test(path);
    }
  } catch {
    return path.startsWith(pattern.replace(/\*/g, ""));
  }

  return path.startsWith(pattern);
}

function testPathForAgent(
  path: string,
  agentName: string,
  userAgents: UserAgentBlock[],
): "allowed" | "blocked" {
  const applicable = userAgents.filter(
    (ua) => ua.name === "*" || ua.name.toLowerCase() === agentName.toLowerCase(),
  );

  if (applicable.length === 0) return "allowed";

  let bestMatch: { type: "allow" | "disallow"; specificity: number } | null = null;

  for (const ua of applicable) {
    for (const rule of ua.rules) {
      if (rule.type === "crawl-delay") continue;
      if (matchesRule(path, rule.path)) {
        const specificity = rule.path.replace(/\*/g, "").replace(/\$/g, "").length;
        if (!bestMatch || specificity > bestMatch.specificity || (specificity === bestMatch.specificity && rule.type === "allow")) {
          bestMatch = { type: rule.type, specificity };
        }
      }
    }
  }

  return bestMatch?.type === "disallow" ? "blocked" : "allowed";
}

function getGrade(score: number): { letter: string; color: string } {
  if (score >= 90) return { letter: "A", color: "text-green-400" };
  if (score >= 80) return { letter: "B", color: "text-green-400" };
  if (score >= 70) return { letter: "C", color: "text-yellow-400" };
  if (score >= 50) return { letter: "D", color: "text-orange-400" };
  return { letter: "F", color: "text-red-400" };
}

function getScoreRingColor(score: number): string {
  if (score >= 90) return "#4ade80";
  if (score >= 70) return "#facc15";
  if (score >= 50) return "#fb923c";
  return "#f87171";
}

/* ── Component ────────────────────────────────────────────────────────── */

const AGENTS = ["Googlebot", "Bingbot", "GPTBot", "ClaudeBot", "PerplexityBot", "Applebot", "*"];

export default function RobotsAnalyzerClient({ t }: { t: RobotsAnalyzerTranslation }) {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<RobotsData | null>(null);
  const [activeTab, setActiveTab] = useState<"rules" | "raw" | "issues" | "diff" | "ecommerce" | "compare">("rules");
  const [testUrl, setTestUrl] = useState("");
  const [testAgent, setTestAgent] = useState("Googlebot");
  const [copied, setCopied] = useState<string | null>(null);
  const testDebounce = useRef<ReturnType<typeof setTimeout>>(null);

  // Compare mode state
  const [compareDomain, setCompareDomain] = useState("");
  const [compareLoading, setCompareLoading] = useState(false);
  const [compareData, setCompareData] = useState<RobotsData | null>(null);
  const [compareError, setCompareError] = useState("");

  // Real-time test results for all agents
  const [testResults, setTestResults] = useState<Record<string, "allowed" | "blocked">>({});

  // Recalculate test results when testUrl changes (real-time)
  useEffect(() => {
    if (testDebounce.current) clearTimeout(testDebounce.current);
    if (!data || !testUrl.trim()) {
      setTestResults({});
      return;
    }
    testDebounce.current = setTimeout(() => {
      const path = testUrl.startsWith("/") ? testUrl : "/" + testUrl;
      const results: Record<string, "allowed" | "blocked"> = {};
      for (const agent of AGENTS) {
        results[agent] = testPathForAgent(path, agent, data.userAgents);
      }
      setTestResults(results);
    }, 150);
    return () => { if (testDebounce.current) clearTimeout(testDebounce.current); };
  }, [testUrl, data]);

  const handleAnalyze = useCallback(async () => {
    if (!domain.trim()) { setError(t.errorEmpty); return; }
    const cleanDomain = domain.trim().replace(/^https?:\/\//, "").replace(/\/.*$/, "");
    if (!/^[a-zA-Z0-9][a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(cleanDomain)) {
      setError(t.errorInvalid); return;
    }

    setError("");
    setLoading(true);
    setData(null);
    setTestResults({});
    setTestUrl("");
    setCompareData(null);

    try {
      const res = await fetch("/api/robots-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain: cleanDomain }),
      });
      if (!res.ok) throw new Error();
      const result = await res.json();
      if (result.error) {
        setError(result.error === "no_robots" ? t.errorNoRobots : t.errorFetch);
        return;
      }
      setData(result);
      setActiveTab("rules");
    } catch {
      setError(t.errorFetch);
    } finally {
      setLoading(false);
    }
  }, [domain, t]);

  const handleCompare = useCallback(async () => {
    if (!compareDomain.trim()) { setCompareError("Enter a domain to compare"); return; }
    const cleanDomain = compareDomain.trim().replace(/^https?:\/\//, "").replace(/\/.*$/, "");
    if (!/^[a-zA-Z0-9][a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(cleanDomain)) {
      setCompareError("Invalid domain"); return;
    }

    setCompareError("");
    setCompareLoading(true);
    setCompareData(null);

    try {
      const res = await fetch("/api/robots-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain: cleanDomain }),
      });
      if (!res.ok) throw new Error();
      const result = await res.json();
      if (result.error) {
        setCompareError("Could not fetch robots.txt for this domain");
        return;
      }
      setCompareData(result);
    } catch {
      setCompareError("Failed to fetch robots.txt");
    } finally {
      setCompareLoading(false);
    }
  }, [compareDomain]);

  const copyToClipboard = useCallback((text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  }, []);

  const downloadTxt = useCallback((content: string, filename: string) => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  const inputClass =
    "w-full rounded-lg border border-border bg-white/[0.03] px-4 py-2.5 text-sm text-heading placeholder:text-white/20 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors";

  /* ── Syntax highlighting for raw robots.txt ────────────────────────── */
  const renderHighlightedLine = (line: string, lineNum: number) => {
    const trimmed = line.trim();
    const isComment = trimmed.startsWith("#");
    const colonIdx = trimmed.indexOf(":");
    const directive = colonIdx !== -1 ? trimmed.substring(0, colonIdx).trim().toLowerCase() : "";

    let cls = "text-body";
    if (isComment) cls = "text-white/25 italic";
    else if (directive === "user-agent") cls = "text-accent";
    else if (directive === "disallow") cls = "text-red-400";
    else if (directive === "allow") cls = "text-green-400";
    else if (directive === "crawl-delay") cls = "text-blue-400";
    else if (directive === "sitemap") cls = "text-yellow-400";

    const hasIssue = data?.issues.some((i) => i.line === lineNum);

    return (
      <div
        key={lineNum}
        className={`flex gap-3 leading-6 group ${hasIssue ? "bg-red-400/5 -mx-3 px-3 rounded" : ""}`}
      >
        <span className="text-white/15 select-none w-8 text-right shrink-0 font-mono text-xs leading-6">
          {lineNum}
        </span>
        <span className={`${cls} font-mono text-xs break-all`}>
          {line || "\u00A0"}
        </span>
        {hasIssue && (
          <span className="ml-auto text-red-400/60 text-xs shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            issue
          </span>
        )}
      </div>
    );
  };

  /* ── Diff view (original vs fixed) ─────────────────────────────────── */
  const renderDiff = () => {
    if (!data) return null;
    const origLines = data.robotsTxt.split("\n");
    const fixedLines = data.fixedRobotsTxt.split("\n");

    return (
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-medium text-body-strong uppercase tracking-wider">Original</h4>
            <button
              onClick={() => copyToClipboard(data.robotsTxt, "orig")}
              className="text-xs text-body hover:text-heading transition-colors"
            >
              {copied === "orig" ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="rounded-xl border border-border bg-white/[0.02] p-4 max-h-[500px] overflow-auto">
            {origLines.map((line, i) => {
              const inFixed = fixedLines.includes(line);
              return (
                <div key={i} className={`font-mono text-xs leading-6 ${!inFixed ? "bg-red-400/10 text-red-400/80 -mx-2 px-2 rounded" : "text-body"}`}>
                  {line || "\u00A0"}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-medium text-body-strong uppercase tracking-wider">Suggested Fix</h4>
            <button
              onClick={() => copyToClipboard(data.fixedRobotsTxt, "fixed")}
              className="text-xs text-body hover:text-heading transition-colors"
            >
              {copied === "fixed" ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="rounded-xl border border-border bg-white/[0.02] p-4 max-h-[500px] overflow-auto">
            {fixedLines.map((line, i) => {
              const inOrig = origLines.includes(line);
              return (
                <div key={i} className={`font-mono text-xs leading-6 ${!inOrig ? "bg-green-400/10 text-green-400/80 -mx-2 px-2 rounded" : "text-body"}`}>
                  {line || "\u00A0"}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  /* ── Compare view (two domains side by side) ───────────────────────── */
  const renderCompare = () => {
    if (!data) return null;

    const renderSideRobotsRaw = (raw: string, label: string) => {
      const lines = raw.split("\n");
      return (
        <div>
          <h4 className="text-xs font-medium text-body-strong uppercase tracking-wider mb-2">{label}</h4>
          <div className="rounded-xl border border-border bg-white/[0.02] p-4 max-h-[500px] overflow-auto">
            {lines.map((line, i) => {
              const trimmed = line.trim();
              const isComment = trimmed.startsWith("#");
              const colonIdx = trimmed.indexOf(":");
              const directive = colonIdx !== -1 ? trimmed.substring(0, colonIdx).trim().toLowerCase() : "";
              let cls = "text-body";
              if (isComment) cls = "text-white/25 italic";
              else if (directive === "user-agent") cls = "text-accent";
              else if (directive === "disallow") cls = "text-red-400";
              else if (directive === "allow") cls = "text-green-400";
              else if (directive === "crawl-delay") cls = "text-blue-400";
              else if (directive === "sitemap") cls = "text-yellow-400";

              return (
                <div key={i} className="flex gap-3 leading-6">
                  <span className="text-white/15 select-none w-6 text-right shrink-0 font-mono text-xs leading-6">{i + 1}</span>
                  <span className={`${cls} font-mono text-xs break-all`}>{line || "\u00A0"}</span>
                </div>
              );
            })}
          </div>
        </div>
      );
    };

    return (
      <div className="space-y-4">
        {/* Input for second domain */}
        <div className="rounded-xl border border-border bg-bg-card p-4">
          <h3 className="text-sm font-medium text-heading mb-3">Compare with another domain</h3>
          <div className="flex gap-3">
            <input
              className={inputClass}
              value={compareDomain}
              onChange={(e) => setCompareDomain(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCompare()}
              placeholder="e.g. competitor.com"
            />
            <button
              onClick={handleCompare}
              disabled={compareLoading}
              className="shrink-0 rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-white hover:bg-accent/90 transition-colors disabled:opacity-60"
            >
              {compareLoading ? "Loading..." : "Compare"}
            </button>
          </div>
          {compareError && <p className="text-red-400 text-sm mt-2">{compareError}</p>}
        </div>

        {/* Side by side comparison */}
        {compareData && (
          <div className="space-y-4">
            {/* Score comparison */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-xs text-body mb-2">{data.url.replace("https://", "").replace("/robots.txt", "")}</div>
                <div className={`text-3xl font-bold ${getGrade(data.score).color}`}>{data.score}</div>
                <div className="text-xs text-body mt-1">Score ({getGrade(data.score).letter})</div>
                <div className="flex justify-center gap-2 mt-3">
                  <span className="text-xs text-red-400">{data.issues.filter(i => i.type === "error").length} errors</span>
                  <span className="text-xs text-yellow-400">{data.issues.filter(i => i.type === "warning").length} warnings</span>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-4 text-center">
                <div className="text-xs text-body mb-2">{compareData.url.replace("https://", "").replace("/robots.txt", "")}</div>
                <div className={`text-3xl font-bold ${getGrade(compareData.score).color}`}>{compareData.score}</div>
                <div className="text-xs text-body mt-1">Score ({getGrade(compareData.score).letter})</div>
                <div className="flex justify-center gap-2 mt-3">
                  <span className="text-xs text-red-400">{compareData.issues.filter(i => i.type === "error").length} errors</span>
                  <span className="text-xs text-yellow-400">{compareData.issues.filter(i => i.type === "warning").length} warnings</span>
                </div>
              </div>
            </div>

            {/* Stats comparison table */}
            <div className="rounded-xl border border-border bg-bg-card overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-4 py-3 text-xs font-medium text-body text-left">Metric</th>
                    <th className="px-4 py-3 text-xs font-medium text-body text-center">{data.url.replace("https://", "").replace("/robots.txt", "")}</th>
                    <th className="px-4 py-3 text-xs font-medium text-body text-center">{compareData.url.replace("https://", "").replace("/robots.txt", "")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 text-xs text-body">User-Agents</td>
                    <td className="px-4 py-3 text-xs text-heading text-center">{data.userAgents.length}</td>
                    <td className="px-4 py-3 text-xs text-heading text-center">{compareData.userAgents.length}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-xs text-body">Total Rules</td>
                    <td className="px-4 py-3 text-xs text-heading text-center">{data.userAgents.reduce((a, b) => a + b.rules.length, 0)}</td>
                    <td className="px-4 py-3 text-xs text-heading text-center">{compareData.userAgents.reduce((a, b) => a + b.rules.length, 0)}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-xs text-body">Sitemaps</td>
                    <td className="px-4 py-3 text-xs text-heading text-center">{data.sitemapUrls.length}</td>
                    <td className="px-4 py-3 text-xs text-heading text-center">{compareData.sitemapUrls.length}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-xs text-body">Issues</td>
                    <td className="px-4 py-3 text-xs text-heading text-center">{data.issues.length}</td>
                    <td className="px-4 py-3 text-xs text-heading text-center">{compareData.issues.length}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Raw content side by side */}
            <div className="grid md:grid-cols-2 gap-4">
              {renderSideRobotsRaw(data.robotsTxt, data.url.replace("https://", "").replace("/robots.txt", ""))}
              {renderSideRobotsRaw(compareData.robotsTxt, compareData.url.replace("https://", "").replace("/robots.txt", ""))}
            </div>
          </div>
        )}
      </div>
    );
  };

  /* ── Issue icon ────────────────────────────────────────────────────── */
  const IssueIcon = ({ type }: { type: "error" | "warning" | "info" }) => {
    if (type === "error")
      return (
        <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7.5 7.5l5 5M12.5 7.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    if (type === "warning")
      return (
        <svg className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
          <path d="M10 6v4M10 14h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M3.5 16.5L10 4l6.5 12.5H3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    return (
      <svg className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 9v5M10 6.5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  };

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
            {/* Score + Summary Row */}
            <div className="max-w-[800px] mx-auto">
              <div className="rounded-2xl border border-border bg-bg-card p-6">
                <div className="flex items-center gap-6 flex-wrap">
                  {/* Score ring */}
                  <div className="relative w-20 h-20 shrink-0">
                    <svg viewBox="0 0 80 80" className="w-20 h-20 -rotate-90">
                      <circle
                        cx="40" cy="40" r="34"
                        fill="none"
                        stroke="rgba(255,255,255,0.06)"
                        strokeWidth="6"
                      />
                      <circle
                        cx="40" cy="40" r="34"
                        fill="none"
                        stroke={getScoreRingColor(data.score)}
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={`${(data.score / 100) * 213.6} 213.6`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className={`text-lg font-bold ${getGrade(data.score).color}`}>
                        {data.score}
                      </span>
                      <span className={`text-xs font-medium ${getGrade(data.score).color}`}>
                        {getGrade(data.score).letter}
                      </span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-heading">{data.userAgents.length}</div>
                      <div className="text-xs text-body">User-Agents</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-heading">
                        {data.userAgents.reduce((a, b) => a + b.rules.filter((r) => r.type !== "crawl-delay").length, 0)}
                      </div>
                      <div className="text-xs text-body">Rules</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-heading">{data.sitemapUrls.length}</div>
                      <div className="text-xs text-body">Sitemaps</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-heading">{data.issues.length}</div>
                      <div className="text-xs text-body">{t.issuesTitle}</div>
                    </div>
                  </div>

                  {/* Issue breakdown badges */}
                  <div className="flex gap-2 shrink-0">
                    {data.issues.filter((i) => i.type === "error").length > 0 && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-red-400/10 border border-red-400/20 px-2.5 py-1 text-xs font-medium text-red-400">
                        {data.issues.filter((i) => i.type === "error").length} errors
                      </span>
                    )}
                    {data.issues.filter((i) => i.type === "warning").length > 0 && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-1 text-xs font-medium text-yellow-400">
                        {data.issues.filter((i) => i.type === "warning").length} warnings
                      </span>
                    )}
                    {data.issues.filter((i) => i.type === "info").length > 0 && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-400/10 border border-blue-400/20 px-2.5 py-1 text-xs font-medium text-blue-400">
                        {data.issues.filter((i) => i.type === "info").length} tips
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* URL Tester */}
            <div className="rounded-2xl border border-border bg-bg-card p-5 max-w-[800px] mx-auto">
              <h3 className="text-sm font-medium text-heading mb-3">{t.testUrlLabel}</h3>
              <div className="flex gap-3 items-end">
                <div className="flex-1">
                  <input
                    className={inputClass}
                    value={testUrl}
                    onChange={(e) => setTestUrl(e.target.value)}
                    placeholder={t.testUrlPlaceholder}
                  />
                </div>
                <div className="w-[140px]">
                  <select
                    className={inputClass}
                    value={testAgent}
                    onChange={(e) => setTestAgent(e.target.value)}
                  >
                    {AGENTS.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Real-time results for selected agent */}
              {testUrl.trim() && testResults[testAgent] && (
                <div className={`mt-3 flex items-center gap-2 text-sm font-medium ${
                  testResults[testAgent] === "allowed" ? "text-green-400" : "text-red-400"
                }`}>
                  {testResults[testAgent] === "allowed" ? (
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M7.5 7.5l5 5M12.5 7.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  )}
                  {testResults[testAgent] === "allowed" ? t.allowedResult : t.blockedResult}:{" "}
                  <span className="font-mono text-xs opacity-80">{testUrl.startsWith("/") ? testUrl : "/" + testUrl}</span>
                  <span className="opacity-50">({testAgent})</span>
                </div>
              )}

              {/* All agents grid */}
              {testUrl.trim() && Object.keys(testResults).length > 0 && (
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-body mb-2">All bots:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {AGENTS.map((agent) => {
                      const res = testResults[agent];
                      if (!res) return null;
                      return (
                        <div
                          key={agent}
                          className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium ${
                            res === "allowed"
                              ? "bg-green-400/5 border border-green-400/15 text-green-400"
                              : "bg-red-400/5 border border-red-400/15 text-red-400"
                          }`}
                        >
                          {res === "allowed" ? (
                            <svg className="w-3 h-3 shrink-0" viewBox="0 0 20 20" fill="none">
                              <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          ) : (
                            <svg className="w-3 h-3 shrink-0" viewBox="0 0 20 20" fill="none">
                              <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                          )}
                          {agent}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-1 p-1 rounded-xl bg-white/[0.03] border border-border max-w-fit mx-auto flex-wrap">
              {(["rules", "issues", "ecommerce", "raw", "diff", "compare"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "bg-accent text-white"
                      : "text-body hover:text-heading hover:bg-white/[0.05]"
                  }`}
                >
                  {tab === "rules" && t.rulesTitle}
                  {tab === "issues" && `${t.issuesTitle} (${data.issues.length})`}
                  {tab === "ecommerce" && "Ecommerce"}
                  {tab === "raw" && t.rawContentTitle}
                  {tab === "diff" && "Fix"}
                  {tab === "compare" && "Compare"}
                </button>
              ))}
            </div>

            <div className="max-w-[900px] mx-auto">
              {/* ── Rules tab ─────────────────────────────────────────── */}
              {activeTab === "rules" && (
                <div className="space-y-4">
                  {/* Sitemaps */}
                  {data.sitemapUrls.length > 0 && (
                    <div className="rounded-xl border border-border bg-bg-card p-5">
                      <h4 className="text-xs font-medium text-body-strong uppercase tracking-wider mb-3">{t.sitemapLabel}</h4>
                      <div className="space-y-1.5">
                        {data.sitemapUrls.map((s, i) => (
                          <a key={i} href={s} target="_blank" rel="noopener noreferrer" className="block text-sm text-accent hover:text-primary-hover break-all transition-colors">{s}</a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Rules by User-Agent */}
                  {data.userAgents.length > 0 ? data.userAgents.map((ua, i) => (
                    <div key={i} className="rounded-xl border border-border bg-bg-card p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-medium text-body-strong uppercase tracking-wider">{t.userAgentLabel}:</span>
                        <span className="text-sm font-mono text-heading">{ua.name}</span>
                        {ua.rules.some((r) => r.type === "crawl-delay") && (
                          <span className="ml-auto text-xs text-blue-400 font-mono">
                            {t.crawlDelayLabel}: {ua.rules.find((r) => r.type === "crawl-delay")?.path}s
                          </span>
                        )}
                      </div>
                      <div className="space-y-1">
                        {ua.rules.map((rule, j) => {
                          const hasIssue = data.issues.some((iss) => iss.line === rule.line);
                          return (
                            <div
                              key={j}
                              className={`flex items-center gap-2 text-sm font-mono ${hasIssue ? "bg-red-400/5 -mx-2 px-2 py-0.5 rounded" : ""}`}
                            >
                              <span className="text-white/15 text-xs w-7 text-right shrink-0">{rule.line}</span>
                              <span
                                className={`text-xs w-20 shrink-0 font-medium ${
                                  rule.type === "disallow" ? "text-red-400"
                                    : rule.type === "allow" ? "text-green-400"
                                    : "text-blue-400"
                                }`}
                              >
                                {rule.type === "disallow" ? t.disallowLabel
                                  : rule.type === "allow" ? t.allowLabel
                                  : t.crawlDelayLabel}
                              </span>
                              <span className="text-body break-all">{rule.path || "/"}</span>
                              {hasIssue && (
                                <span className="ml-auto">
                                  <svg className="w-3.5 h-3.5 text-red-400/60" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 6v4M10 14h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
                                  </svg>
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )) : (
                    <p className="text-sm text-white/20 text-center py-8">{t.noRulesFound}</p>
                  )}
                </div>
              )}

              {/* ── Issues tab ────────────────────────────────────────── */}
              {activeTab === "issues" && (
                <div className="space-y-3">
                  {data.issues.length === 0 ? (
                    <div className="text-center py-12">
                      <svg className="w-12 h-12 text-green-400/40 mx-auto mb-3" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="text-sm text-body">No issues found. Your robots.txt looks good!</p>
                    </div>
                  ) : (
                    <>
                      {/* Errors */}
                      {data.issues.filter((i) => i.type === "error").length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-xs font-medium text-red-400 uppercase tracking-wider">Errors</h4>
                          {data.issues.filter((i) => i.type === "error").map((issue, idx) => (
                            <div
                              key={`e-${idx}`}
                              className="flex items-start gap-3 p-4 rounded-xl border border-red-400/15 bg-red-400/5"
                            >
                              <IssueIcon type="error" />
                              <div className="flex-1 min-w-0">
                                <p className="text-sm text-heading">{issue.message}</p>
                                {issue.line && (
                                  <p className="text-xs text-body mt-1">Line {issue.line}</p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Warnings */}
                      {data.issues.filter((i) => i.type === "warning").length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-xs font-medium text-yellow-400 uppercase tracking-wider mt-4">Warnings</h4>
                          {data.issues.filter((i) => i.type === "warning").map((issue, idx) => (
                            <div
                              key={`w-${idx}`}
                              className="flex items-start gap-3 p-4 rounded-xl border border-yellow-400/15 bg-yellow-400/5"
                            >
                              <IssueIcon type="warning" />
                              <div className="flex-1 min-w-0">
                                <p className="text-sm text-heading">{issue.message}</p>
                                {issue.line && (
                                  <p className="text-xs text-body mt-1">Line {issue.line}</p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Info / Tips */}
                      {data.issues.filter((i) => i.type === "info").length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-xs font-medium text-blue-400 uppercase tracking-wider mt-4">Recommendations</h4>
                          {data.issues.filter((i) => i.type === "info").map((issue, idx) => (
                            <div
                              key={`i-${idx}`}
                              className="flex items-start gap-3 p-4 rounded-xl border border-blue-400/15 bg-blue-400/5"
                            >
                              <IssueIcon type="info" />
                              <div className="flex-1 min-w-0">
                                <p className="text-sm text-heading">{issue.message}</p>
                                {issue.line && (
                                  <p className="text-xs text-body mt-1">Line {issue.line}</p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Generate Fix button */}
                      <div className="pt-4 flex justify-center">
                        <button
                          onClick={() => setActiveTab("diff")}
                          className="rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-white hover:bg-accent/90 transition-colors"
                        >
                          View Suggested Fix
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* ── Ecommerce tab ─────────────────────────────────────── */}
              {activeTab === "ecommerce" && (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-border bg-bg-card p-5">
                    <h3 className="text-sm font-medium text-heading mb-4">Ecommerce Path Analysis</h3>
                    <p className="text-xs text-body mb-4">
                      Checking critical ecommerce paths against your robots.txt rules for Googlebot.
                    </p>

                    {data.ecommerceChecks && data.ecommerceChecks.length > 0 ? (
                      <div className="space-y-2">
                        {data.ecommerceChecks.map((check, i) => (
                          <div
                            key={i}
                            className={`flex items-start gap-3 p-4 rounded-xl border ${
                              check.blocked
                                ? check.path.match(/\/(search|cart|checkout|account|wishlist)/)
                                  ? "border-green-400/15 bg-green-400/5"
                                  : "border-red-400/15 bg-red-400/5"
                                : check.path.match(/\/(search|cart|checkout|account|wishlist)/)
                                  ? "border-yellow-400/15 bg-yellow-400/5"
                                  : "border-green-400/15 bg-green-400/5"
                            }`}
                          >
                            <div className="shrink-0 mt-0.5">
                              {check.blocked ? (
                                check.path.match(/\/(search|cart|checkout|account|wishlist)/) ? (
                                  <svg className="w-4 h-4 text-green-400" viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                ) : (
                                  <svg className="w-4 h-4 text-red-400" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M7.5 7.5l5 5M12.5 7.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                  </svg>
                                )
                              ) : (
                                check.path.match(/\/(search|cart|checkout|account|wishlist)/) ? (
                                  <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 6v4M10 14h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M3.5 16.5L10 4l6.5 12.5H3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                  </svg>
                                ) : (
                                  <svg className="w-4 h-4 text-green-400" viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                )
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-mono text-heading">{check.path}</span>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${
                                  check.blocked
                                    ? "bg-red-400/10 text-red-400"
                                    : "bg-green-400/10 text-green-400"
                                }`}>
                                  {check.blocked ? "Blocked" : "Allowed"}
                                </span>
                              </div>
                              <p className="text-xs text-body">{check.label}</p>
                              <p className="text-xs text-body/60 mt-1">{check.recommendation}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-body/60 italic">No ecommerce checks available.</p>
                    )}
                  </div>
                </div>
              )}

              {/* ── Raw tab ───────────────────────────────────────────── */}
              {activeTab === "raw" && (
                <div className="rounded-2xl border border-border bg-bg-card p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-medium text-body-strong uppercase tracking-wider">{t.rawContentTitle}</h4>
                    <button
                      onClick={() => copyToClipboard(data.robotsTxt, "raw")}
                      className="text-xs text-body hover:text-heading transition-colors"
                    >
                      {copied === "raw" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <div className="max-h-[500px] overflow-auto">
                    {data.robotsTxt.split("\n").map((line, i) => renderHighlightedLine(line, i + 1))}
                  </div>
                </div>
              )}

              {/* ── Diff / Fix tab ──────────────────────────────────── */}
              {activeTab === "diff" && (
                <div className="space-y-4">
                  {renderDiff()}

                  {/* Generate Fix code block */}
                  <div className="rounded-2xl border border-border bg-bg-card p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xs font-medium text-body-strong uppercase tracking-wider">
                        Suggested robots.txt
                      </h4>
                      <div className="flex gap-3">
                        <button
                          onClick={() => copyToClipboard(data.fixedRobotsTxt, "fix")}
                          className="text-xs text-body hover:text-heading transition-colors"
                        >
                          {copied === "fix" ? "Copied!" : "Copy"}
                        </button>
                        <button
                          onClick={() => downloadTxt(data.fixedRobotsTxt, "robots.txt")}
                          className="text-xs text-body hover:text-heading transition-colors"
                        >
                          Download .txt
                        </button>
                      </div>
                    </div>
                    <pre className="text-xs text-green-400/80 font-mono whitespace-pre-wrap break-all leading-relaxed bg-green-400/[0.03] rounded-lg p-4 border border-green-400/10">
                      {data.fixedRobotsTxt}
                    </pre>
                  </div>
                </div>
              )}

              {/* ── Compare tab ─────────────────────────────────────── */}
              {activeTab === "compare" && renderCompare()}
            </div>

            {/* Export bar */}
            <div className="max-w-[800px] mx-auto">
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <button
                  onClick={() => copyToClipboard(data.robotsTxt, "export-raw")}
                  className="rounded-lg bg-white/[0.06] border border-border px-4 py-2 text-xs font-medium text-body hover:text-heading hover:bg-white/[0.1] transition-colors"
                >
                  {copied === "export-raw" ? "Copied!" : "Copy Original"}
                </button>
                <button
                  onClick={() => copyToClipboard(data.fixedRobotsTxt, "export-fix")}
                  className="rounded-lg bg-white/[0.06] border border-border px-4 py-2 text-xs font-medium text-body hover:text-heading hover:bg-white/[0.1] transition-colors"
                >
                  {copied === "export-fix" ? "Copied!" : "Copy Fixed Version"}
                </button>
                <button
                  onClick={() => downloadTxt(data.robotsTxt, "robots-original.txt")}
                  className="rounded-lg bg-white/[0.06] border border-border px-4 py-2 text-xs font-medium text-body hover:text-heading hover:bg-white/[0.1] transition-colors"
                >
                  Download Original
                </button>
                <button
                  onClick={() => downloadTxt(data.fixedRobotsTxt, "robots-fixed.txt")}
                  className="rounded-lg bg-white/[0.06] border border-border px-4 py-2 text-xs font-medium text-body hover:text-heading hover:bg-white/[0.1] transition-colors"
                >
                  Download Fixed
                </button>
                <button
                  onClick={() => {
                    if (!data) return;
                    exportToPDF({
                      title: "Robots.txt Analysis Report",
                      score: data.score,
                      data: [
                        ...data.userAgents.flatMap((ua) =>
                          ua.rules.map((rule) => ({
                            "User-Agent": ua.name,
                            Type: rule.type,
                            Path: rule.path,
                            Line: rule.line,
                          }))
                        ),
                        ...data.issues.map((issue) => ({
                          "User-Agent": "-",
                          Type: `Issue (${issue.type})`,
                          Path: issue.message,
                          Line: issue.line ?? "-",
                        })),
                      ],
                      url: data.url,
                    });
                  }}
                  className="rounded-lg bg-white/[0.06] border border-border px-4 py-2 text-xs font-medium text-body hover:text-heading hover:bg-white/[0.1] transition-colors"
                >
                  Export PDF
                </button>
              </div>
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
