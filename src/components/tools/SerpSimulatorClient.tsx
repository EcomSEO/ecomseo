"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { SerpSimulatorTranslation } from "@/lib/i18n/translations/seoTools";

const TITLE_LIMIT_DESKTOP = 60;
const TITLE_LIMIT_MOBILE = 78;
const DESC_LIMIT_DESKTOP = 160;
const DESC_LIMIT_MOBILE = 120;

function truncate(text: string, max: number) {
  if (text.length <= max) return text;
  return text.slice(0, max).trimEnd() + "...";
}

function boldKeyword(text: string, keyword: string) {
  if (!keyword.trim()) return [text];
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <strong key={i} className="font-bold">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function extractBreadcrumb(url: string) {
  try {
    const u = new URL(url.startsWith("http") ? url : `https://${url}`);
    const host = u.hostname.replace(/^www\./, "");
    const pathParts = u.pathname
      .split("/")
      .filter(Boolean)
      .map((p) => decodeURIComponent(p));
    if (pathParts.length === 0) return host;
    return `${host} › ${pathParts.join(" › ")}`;
  } catch {
    return url || "example.com";
  }
}

function CharCounter({
  current,
  max,
  warning,
}: {
  current: number;
  max: number;
  warning: string;
}) {
  const pct = Math.min((current / max) * 100, 100);
  const isWarning = current > max * 0.85 && current <= max;
  const isOver = current > max;

  return (
    <div className="mt-1.5 space-y-1">
      <div className="h-1 w-full rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className={`h-full rounded-full transition-colors ${
            isOver
              ? "bg-red-500"
              : isWarning
              ? "bg-yellow-500"
              : "bg-emerald-500"
          }`}
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.2 }}
        />
      </div>
      <div className="flex items-center justify-between">
        <span
          className={`text-[11px] ${
            isOver
              ? "text-red-400"
              : isWarning
              ? "text-yellow-400"
              : "text-white/30"
          }`}
        >
          {current}/{max}
        </span>
        {isOver && (
          <span className="text-[11px] text-red-400">{warning}</span>
        )}
      </div>
    </div>
  );
}

export default function SerpSimulatorClient({
  t,
}: {
  t: SerpSimulatorTranslation;
}) {
  const [url, setUrl] = useState("");
  const [siteName, setSiteName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keyword, setKeyword] = useState("");
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

  const isDesktop = viewMode === "desktop";
  const titleLimit = isDesktop ? TITLE_LIMIT_DESKTOP : TITLE_LIMIT_MOBILE;
  const descLimit = isDesktop ? DESC_LIMIT_DESKTOP : DESC_LIMIT_MOBILE;

  const breadcrumb = useMemo(() => extractBreadcrumb(url), [url]);
  const displayTitle = useMemo(
    () => truncate(title || "Your Page Title", titleLimit),
    [title, titleLimit]
  );
  const displayDesc = useMemo(
    () =>
      truncate(
        description ||
          "This is where your meta description will appear. Write a compelling description to encourage users to click through to your website.",
        descLimit
      ),
    [description, descLimit]
  );

  const hasContent = title || description || url;

  return (
    <div className="w-full max-w-[720px] mx-auto mt-4 space-y-6">
      {/* Input Form */}
      <div className="rounded-2xl border border-border bg-bg-card p-6 md:p-8 space-y-5">
        {/* URL + Site Name row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-white/50 mb-1.5">
              {t.urlLabel}
            </label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={t.urlPlaceholder}
              className="w-full px-4 py-2.5 rounded-xl bg-bg-input border border-border text-heading text-sm placeholder:text-body focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-white/50 mb-1.5">
              {t.siteNameLabel}
            </label>
            <input
              type="text"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              placeholder={t.siteNamePlaceholder}
              className="w-full px-4 py-2.5 rounded-xl bg-bg-input border border-border text-heading text-sm placeholder:text-body focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        {/* Title Tag */}
        <div>
          <label className="block text-xs font-medium text-white/50 mb-1.5">
            {t.titleLabel}
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={t.titlePlaceholder}
            className="w-full px-4 py-2.5 rounded-xl bg-bg-input border border-border text-heading text-sm placeholder:text-body focus:outline-none focus:border-accent transition-colors"
          />
          <CharCounter
            current={title.length}
            max={titleLimit}
            warning={t.titleWarning}
          />
        </div>

        {/* Meta Description */}
        <div>
          <label className="block text-xs font-medium text-white/50 mb-1.5">
            {t.descriptionLabel}
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={t.descriptionPlaceholder}
            rows={3}
            className="w-full px-4 py-2.5 rounded-xl bg-bg-input border border-border text-heading text-sm placeholder:text-body focus:outline-none focus:border-accent transition-colors resize-none"
          />
          <CharCounter
            current={description.length}
            max={descLimit}
            warning={t.descriptionWarning}
          />
        </div>

        {/* Keyword */}
        <div>
          <label className="block text-xs font-medium text-white/50 mb-1.5">
            {t.keywordLabel}
          </label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder={t.keywordPlaceholder}
            className="w-full px-4 py-2.5 rounded-xl bg-bg-input border border-border text-heading text-sm placeholder:text-body focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      {/* Desktop / Mobile Toggle */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-white/40 uppercase tracking-widest">
          {t.previewLabel}
        </span>
        <div className="flex items-center rounded-lg border border-border bg-bg-card overflow-hidden">
          <button
            onClick={() => setViewMode("desktop")}
            className={`px-4 py-1.5 text-xs font-medium transition-colors ${
              isDesktop
                ? "bg-accent/15 text-accent"
                : "text-white/40 hover:text-white/60"
            }`}
          >
            <span className="flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
              {t.desktopLabel}
            </span>
          </button>
          <button
            onClick={() => setViewMode("mobile")}
            className={`px-4 py-1.5 text-xs font-medium transition-colors ${
              !isDesktop
                ? "bg-accent/15 text-accent"
                : "text-white/40 hover:text-white/60"
            }`}
          >
            <span className="flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <path d="M12 18h.01" />
              </svg>
              {t.mobileLabel}
            </span>
          </button>
        </div>
      </div>

      {/* SERP Preview */}
      <AnimatePresence mode="wait">
        <motion.div
          key={viewMode}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className={`rounded-2xl bg-white p-6 md:p-8 shadow-sm ${
            isDesktop ? "max-w-[720px]" : "max-w-[400px] mx-auto"
          }`}
        >
          {/* Google-style search result */}
          <div>
            {/* Site info row */}
            <div className="flex items-center gap-3 mb-1">
              <div className="w-[28px] h-[28px] rounded-full bg-[#f1f3f4] flex items-center justify-center shrink-0 border border-[#ecedef]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#70757a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p
                  className="text-[14px] text-[#202124] truncate leading-[1.3]"
                  style={{ fontFamily: "arial, sans-serif" }}
                >
                  {siteName || "Site Name"}
                </p>
                <p
                  className="text-[12px] text-[#4d5156] truncate leading-[1.3]"
                  style={{ fontFamily: "arial, sans-serif" }}
                >
                  {url ? (url.startsWith("http") ? url : `https://${url}`) : "https://example.com"}{" "}
                  <span className="text-[#70757a]">
                    {(() => {
                      try {
                        const u = new URL(url.startsWith("http") ? url : `https://${url}`);
                        const parts = u.pathname.split("/").filter(Boolean);
                        return parts.length > 0 ? `› ${parts.join(" › ")}` : "";
                      } catch {
                        return "";
                      }
                    })()}
                  </span>
                </p>
              </div>
            </div>

            {/* Title */}
            <h3
              className={`text-[#1a0dab] hover:underline cursor-pointer leading-[1.3] mt-[5px] ${
                isDesktop ? "text-[20px]" : "text-[18px]"
              }`}
              style={{ fontFamily: "arial, sans-serif" }}
            >
              {boldKeyword(displayTitle, keyword)}
            </h3>

            {/* Description */}
            <p
              className="text-[14px] text-[#4d5156] leading-[1.58] mt-[3px]"
              style={{ fontFamily: "arial, sans-serif" }}
            >
              {boldKeyword(displayDesc, keyword)}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom CTA */}
      <AnimatePresence>
        {hasContent && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-2xl border border-border bg-bg-card p-6 md:p-8 text-center space-y-3"
          >
            <h3 className="text-lg font-medium text-heading">
              {t.ctaBottom}
            </h3>
            <p className="text-sm text-body max-w-[480px] mx-auto">
              {t.ctaBottomDesc}
            </p>
            <a
              href="https://ecomseo.typeform.com/to/vNSzwqiS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-medium transition-colors mt-2"
            >
              {t.ctaBottomButton}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
