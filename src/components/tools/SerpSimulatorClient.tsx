"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { SerpSimulatorTranslation } from "@/lib/i18n/translations/seoTools";

const TITLE_PIXEL_LIMIT = 600;
const DESC_PIXEL_LIMIT_DESKTOP = 960;
const DESC_PIXEL_LIMIT_MOBILE = 680;

function truncateByPixels(text: string, pixelLimit: number, fontSize: number, fontFamily: string): string {
  if (typeof document === "undefined") return text;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return text;
  ctx.font = `${fontSize}px ${fontFamily}`;
  const w = ctx.measureText(text).width;
  if (w <= pixelLimit) return text;
  let truncated = text;
  while (ctx.measureText(truncated + "...").width > pixelLimit && truncated.length > 0) {
    truncated = truncated.slice(0, -1);
  }
  return truncated.trimEnd() + "...";
}

function measurePixelWidth(text: string, fontSize: number, fontFamily: string): number {
  if (typeof document === "undefined") return 0;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return 0;
  ctx.font = `${fontSize}px ${fontFamily}`;
  return Math.round(ctx.measureText(text).width);
}

function boldKeywords(text: string, keywords: string) {
  if (!keywords.trim()) return [text];
  const keywordList = keywords.split(/[\s,]+/).filter(Boolean);
  if (keywordList.length === 0) return [text];
  const escaped = keywordList.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");
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
    if (pathParts.length === 0) return { host, path: "" };
    return { host, path: ` › ${pathParts.join(" › ")}` };
  } catch {
    return { host: url || "example.com", path: "" };
  }
}

function capitalizeWords(text: string): string {
  return text.replace(/\b\w/g, (c) => c.toUpperCase());
}

/* ---- Pixel-based character counter ---- */
function PixelCounter({
  current,
  max,
  chars,
  warning,
}: {
  current: number;
  max: number;
  chars: number;
  warning: string;
}) {
  const pct = Math.min((current / max) * 100, 100);
  const isWarning = current > max * 0.8 && current <= max;
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
          {chars} chars ({Math.round(current)} / {max}px)
        </span>
        {isOver && (
          <span className="text-[11px] text-red-400">{warning}</span>
        )}
      </div>
    </div>
  );
}

/* ---- Skeleton result block ---- */
function SkeletonResult() {
  return (
    <div className="pt-6">
      {/* Favicon + site info */}
      <div className="flex items-center gap-3 mb-1">
        <div className="w-[28px] h-[28px] rounded-full bg-[#e8eaed]" />
        <div className="space-y-1">
          <div className="h-[12px] w-[140px] rounded bg-[#dadce0]" />
          <div className="h-[10px] w-[100px] rounded bg-[#e8eaed]" />
        </div>
      </div>
      {/* Title */}
      <div className="h-[16px] w-[70%] rounded bg-[#c4c7f5] mt-[6px]" />
      {/* Description */}
      <div className="space-y-[5px] mt-[6px]">
        <div className="h-[12px] w-full rounded bg-[#dadce0]" />
        <div className="h-[12px] w-[85%] rounded bg-[#dadce0]" />
      </div>
    </div>
  );
}

/* ---- Main component ---- */
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

  // Options
  const [showDate, setShowDate] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [showSitelinks, setShowSitelinks] = useState(false);
  const [showFaq, setShowFaq] = useState(false);

  // Pixel measurements
  const [titlePx, setTitlePx] = useState(0);
  const [descPx, setDescPx] = useState(0);

  const isDesktop = viewMode === "desktop";
  const descPixelLimit = isDesktop ? DESC_PIXEL_LIMIT_DESKTOP : DESC_PIXEL_LIMIT_MOBILE;

  useEffect(() => {
    setTitlePx(measurePixelWidth(title, 20, "arial, sans-serif"));
  }, [title]);

  useEffect(() => {
    setDescPx(measurePixelWidth(description, 14, "arial, sans-serif"));
  }, [description]);

  const breadcrumb = useMemo(() => extractBreadcrumb(url), [url]);
  const displayTitle = useMemo(
    () =>
      truncateByPixels(
        title || "Your Page Title",
        TITLE_PIXEL_LIMIT,
        20,
        "arial, sans-serif"
      ),
    [title]
  );
  const displayDesc = useMemo(
    () =>
      truncateByPixels(
        description ||
          "This is where your meta description will appear. Write a compelling description to encourage users to click through to your website.",
        descPixelLimit,
        14,
        "arial, sans-serif"
      ),
    [description, descPixelLimit]
  );

  const handleReset = useCallback(() => {
    setUrl("");
    setSiteName("");
    setTitle("");
    setDescription("");
    setKeyword("");
    setShowDate(false);
    setShowRating(false);
    setShowSitelinks(false);
    setShowFaq(false);
  }, []);

  const handleCapitalize = useCallback(() => {
    setTitle((prev) => capitalizeWords(prev));
  }, []);

  const hasContent = title || description || url;
  const todayDate = useMemo(() => {
    const d = new Date();
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }, []);

  return (
    <div className="w-full mt-4 text-left">
      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 items-start">
        {/* ======== LEFT: Input Form ======== */}
        <div className="rounded-2xl border border-border bg-bg-card p-6 space-y-4">
          {/* URL */}
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

          {/* Site Name */}
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

          {/* Title Tag */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-medium text-white/50">
                {t.titleLabel}
              </label>
            </div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={t.titlePlaceholder}
              className="w-full px-4 py-2.5 rounded-xl bg-bg-input border border-border text-heading text-sm placeholder:text-body focus:outline-none focus:border-accent transition-colors"
            />
            <PixelCounter
              current={titlePx}
              max={TITLE_PIXEL_LIMIT}
              chars={title.length}
              warning={t.titleWarning}
            />
            <button
              onClick={handleCapitalize}
              className="mt-2 px-3 py-1 text-[11px] font-medium text-accent border border-accent/30 rounded-lg hover:bg-accent/10 transition-colors"
            >
              {t.capitalizeTitle}
            </button>
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
            <PixelCounter
              current={descPx}
              max={descPixelLimit}
              chars={description.length}
              warning={t.descriptionWarning}
            />
          </div>

          {/* Bold Keywords */}
          <div>
            <label className="block text-xs font-medium text-white/50 mb-1.5">
              {t.boldKeywordsLabel}
            </label>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder={t.boldKeywordsPlaceholder}
              className="w-full px-4 py-2.5 rounded-xl bg-bg-input border border-border text-heading text-sm placeholder:text-body focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Options */}
          <div>
            <label className="block text-xs font-medium text-white/50 mb-2">
              {t.optionsLabel}
            </label>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { label: t.optionDate, checked: showDate, set: setShowDate },
                { label: t.optionRating, checked: showRating, set: setShowRating },
                { label: t.optionSitelinks, checked: showSitelinks, set: setShowSitelinks },
                { label: t.optionFaq, checked: showFaq, set: setShowFaq },
              ].map((opt) => (
                <label
                  key={opt.label}
                  className="flex items-center gap-1.5 cursor-pointer text-sm text-body hover:text-heading transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={opt.checked}
                    onChange={(e) => opt.set(e.target.checked)}
                    className="w-3.5 h-3.5 rounded border-border accent-accent"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="px-4 py-2 text-xs font-medium text-white/50 border border-border rounded-lg hover:bg-white/5 hover:text-white/70 transition-colors"
          >
            {t.resetButton}
          </button>
        </div>

        {/* ======== RIGHT: SERP Preview ======== */}
        <div className="space-y-3">
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
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <path d="M12 18h.01" />
                  </svg>
                  {t.mobileLabel}
                </span>
              </button>
            </div>
          </div>

          {/* Google SERP Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={viewMode}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className={`rounded-2xl bg-white overflow-hidden shadow-sm ${
                isDesktop ? "" : "max-w-[420px]"
              }`}
            >
              {/* Google Header */}
              <div className="px-6 pt-5 pb-3 border-b border-[#ebebeb]">
                {/* Google Logo */}
                <div className="mb-4">
                  <svg viewBox="0 0 272 92" width="92" height="30">
                    <path fill="#4285F4" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                    <path fill="#EA4335" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                    <path fill="#FBBC05" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
                    <path fill="#4285F4" d="M225 3v65h-9.5V3h9.5z"/>
                    <path fill="#34A853" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
                    <path fill="#EA4335" d="M35.29 41.19V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49-.01z"/>
                  </svg>
                </div>

                {/* Search Bar */}
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#dfe1e5] bg-white shadow-sm hover:shadow-md transition-shadow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" stroke="#9aa0a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[14px] text-[#202124] flex-1" style={{ fontFamily: "arial, sans-serif" }}>
                    {keyword || (
                      <span className="text-[#9aa0a6]">
                        <span className="inline-flex items-center gap-1">
                          <span className="text-[10px] font-bold bg-[#fce8b2] text-[#b06000] px-1.5 py-0.5 rounded">TIP</span>
                          {t.searchBarTip}
                        </span>
                      </span>
                    )}
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-6 mt-3 -mb-[1px]" style={{ fontFamily: "arial, sans-serif" }}>
                  {["All", "Images", "Videos", "News", "Maps", "More"].map((tab, i) => (
                    <span
                      key={tab}
                      className={`text-[13px] pb-2.5 cursor-default ${
                        i === 0
                          ? "text-[#1a73e8] border-b-[3px] border-[#1a73e8] font-medium"
                          : "text-[#70757a]"
                      }`}
                    >
                      {tab}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results Area */}
              <div className="px-6 py-4" style={{ fontFamily: "arial, sans-serif" }}>
                {/* Main Result */}
                <div>
                  {/* Site info row */}
                  <div className="flex items-center gap-3 mb-[2px]">
                    <div className="w-[28px] h-[28px] rounded-full bg-[#f1f3f4] flex items-center justify-center shrink-0 border border-[#ecedef]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#70757a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[14px] text-[#202124] truncate leading-[1.3]">
                        {siteName || "Site Name"}
                      </p>
                      <p className="text-[12px] text-[#4d5156] truncate leading-[1.3]">
                        {url ? (url.startsWith("http") ? url : `https://${url}`) : "https://example.com"}
                        <span className="text-[#70757a]">{breadcrumb.path}</span>
                      </p>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-[#1a0dab] hover:underline cursor-pointer leading-[1.3] mt-[4px] ${
                      isDesktop ? "text-[20px]" : "text-[18px]"
                    }`}
                  >
                    {boldKeywords(displayTitle, keyword)}
                  </h3>

                  {/* Rating (optional) */}
                  {showRating && (
                    <div className="flex items-center gap-1 mt-[2px]">
                      <span className="text-[14px] text-[#70757a]">4.8</span>
                      <span className="text-[14px] text-[#f4b400]">★★★★★</span>
                      <span className="text-[14px] text-[#70757a]">(2,451)</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-[14px] text-[#4d5156] leading-[1.58] mt-[3px]">
                    {showDate && (
                      <span className="text-[#70757a]">{todayDate} — </span>
                    )}
                    {boldKeywords(displayDesc, keyword)}
                  </p>

                  {/* Sitelinks (optional) */}
                  {showSitelinks && (
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-3 pl-0">
                      {["About Us", "Products", "Contact", "Blog"].map((link) => (
                        <div key={link}>
                          <span className="text-[14px] text-[#1a0dab] hover:underline cursor-pointer">
                            {link}
                          </span>
                          <p className="text-[12px] text-[#4d5156] leading-[1.4]">
                            Short description of the page content...
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* FAQ (optional) */}
                  {showFaq && (
                    <div className="mt-3 border-t border-[#ebebeb] pt-2">
                      {["How does this product work?", "What is the return policy?"].map(
                        (q, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between py-2 border-b border-[#ebebeb] last:border-b-0"
                          >
                            <span className="text-[14px] text-[#202124]">{q}</span>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#70757a"
                              strokeWidth="2"
                            >
                              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>

                {/* Skeleton Results */}
                <SkeletonResult />
                <SkeletonResult />
                <SkeletonResult />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom CTA */}
      <AnimatePresence>
        {hasContent && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-2xl border border-border bg-bg-card p-6 md:p-8 text-center space-y-3 mt-8"
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
