"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toPng } from "html-to-image";
import { exportToPDF } from "@/lib/export-utils";
import {
  measureTitleWidth,
  measureDescWidth,
  truncateByPixels,
  getTitleStatus,
  getDescStatus,
  getTitleLimit,
  getDescLimit,
  type PixelStatus,
} from "@/lib/pixel-width";
import type { SerpSimulatorTranslation } from "@/lib/i18n/translations/seoTools";

/* ---- Constants ---- */
const POWER_WORDS = [
  "free", "best", "guide", "how to", "top", "ultimate", "proven", "easy",
  "new", "exclusive", "secret", "amazing", "powerful", "essential", "complete",
];
const CTA_WORDS = [
  "learn", "discover", "get", "try", "start", "find", "shop", "buy", "explore",
  "see", "click", "download", "join", "sign up", "subscribe", "order", "save",
];
const EMOTIONAL_WORDS = [
  "unbelievable", "incredible", "stunning", "shocking", "brilliant", "insane",
  "mind-blowing", "epic", "awesome", "remarkable", "extraordinary",
];

/* ---- CTR score calculator ---- */
function calculateCTRScore(
  title: string,
  description: string,
  url: string,
  keyword: string
): { score: number; breakdown: { label: string; points: number; earned: boolean }[] } {
  const breakdown: { label: string; points: number; earned: boolean }[] = [];
  let score = 0;

  const titleOptimal = title.length >= 30 && title.length <= 60;
  breakdown.push({ label: "Title length (30-60 chars)", points: 15, earned: titleOptimal });
  if (titleOptimal) score += 15;

  const hasNumber = /\d/.test(title);
  breakdown.push({ label: "Title contains numbers", points: 10, earned: hasNumber });
  if (hasNumber) score += 10;

  const titleLower = title.toLowerCase();
  const hasPower = POWER_WORDS.some((w) => titleLower.includes(w));
  breakdown.push({ label: "Title has power words", points: 10, earned: hasPower });
  if (hasPower) score += 10;

  const startsWithNum = /^\d/.test(title.trim());
  breakdown.push({ label: "Title starts with number", points: 5, earned: startsWithNum });
  if (startsWithNum) score += 5;

  const hasEmotional = EMOTIONAL_WORDS.some((w) => titleLower.includes(w));
  breakdown.push({ label: "Emotional trigger words", points: 10, earned: hasEmotional });
  if (hasEmotional) score += 10;

  const descOptimal = description.length >= 120 && description.length <= 155;
  breakdown.push({ label: "Description length (120-155 chars)", points: 15, earned: descOptimal });
  if (descOptimal) score += 15;

  const descLower = description.toLowerCase();
  const hasCta = CTA_WORDS.some((w) => descLower.includes(w));
  breakdown.push({ label: "Description has call-to-action", points: 10, earned: hasCta });
  if (hasCta) score += 10;

  const urlClean = url.length > 0 && !url.includes("?") && !/[A-Z]/.test(url) && !/[%&=#]/.test(url);
  breakdown.push({ label: "URL is clean & readable", points: 10, earned: urlClean });
  if (urlClean) score += 10;

  const kwInTitle = keyword.trim().length > 0 && titleLower.includes(keyword.toLowerCase().trim());
  breakdown.push({ label: "Keyword in title", points: 15, earned: kwInTitle });
  if (kwInTitle) score += 15;

  return { score, breakdown };
}

/* ---- Smart tips generator ---- */
function generateTips(title: string, url: string): string[] {
  const tips: string[] = [];
  if (title.length === 0) return tips;

  if (!/\d/.test(title)) tips.push("Add a number to increase CTR");
  if (title.length > 0 && title.length < 30) tips.push("Title is too short - aim for 30-60 characters");
  if (title.length > 60) tips.push("Title may be too long - keep under 60 characters");
  if (title.length >= 30 && title.length <= 60) tips.push("Great title length!");

  const titleLower = title.toLowerCase();
  if (!POWER_WORDS.some((w) => titleLower.includes(w))) {
    tips.push("Try adding a power word (free, best, guide, ultimate...)");
  }

  if (url) {
    try {
      const host = new URL(url.startsWith("http") ? url : `https://${url}`).hostname.replace(/^www\./, "");
      const brand = host.split(".")[0].toLowerCase();
      if (brand.length > 2 && !titleLower.includes(brand)) {
        tips.push("Consider adding your brand name");
      }
    } catch {
      // ignore
    }
  }

  return tips;
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
    return { host, path: ` > ${pathParts.join(" > ")}` };
  } catch {
    return { host: url || "example.com", path: "" };
  }
}

function capitalizeWords(text: string): string {
  return text.replace(/\b\w/g, (c) => c.toUpperCase());
}

/* ---- Pixel-based progress bar ---- */
function PixelProgressBar({
  current,
  max,
  chars,
  status,
  warning,
}: {
  current: number;
  max: number;
  chars: number;
  status: PixelStatus;
  warning: string;
}) {
  const pct = Math.min((current / max) * 100, 100);
  const colorClass =
    status === "red"
      ? "bg-red-500"
      : status === "yellow"
      ? "bg-yellow-500"
      : "bg-emerald-500";
  const textClass =
    status === "red"
      ? "text-red-400"
      : status === "yellow"
      ? "text-yellow-400"
      : "text-white/30";

  return (
    <div className="mt-1.5 space-y-1">
      <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className={`h-full rounded-full transition-colors ${colorClass}`}
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.2 }}
        />
      </div>
      <div className="flex items-center justify-between">
        <span className={`text-[11px] ${textClass}`}>
          {chars} chars ({Math.round(current)} / {max}px)
        </span>
        {status === "red" && (
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
      <div className="flex items-center gap-3 mb-1">
        <div className="w-[28px] h-[28px] rounded-full bg-[#e8eaed]" />
        <div className="space-y-1">
          <div className="h-[12px] w-[140px] rounded bg-[#dadce0]" />
          <div className="h-[10px] w-[100px] rounded bg-[#e8eaed]" />
        </div>
      </div>
      <div className="h-[16px] w-[70%] rounded bg-[#c4c7f5] mt-[6px]" />
      <div className="space-y-[5px] mt-[6px]">
        <div className="h-[12px] w-full rounded bg-[#dadce0]" />
        <div className="h-[12px] w-[85%] rounded bg-[#dadce0]" />
      </div>
    </div>
  );
}

/* ---- Star Rating Component ---- */
function StarRating({ rating, count }: { rating: number; count: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  return (
    <div className="flex items-center gap-1 mt-[2px]">
      <span className="text-[14px] text-[#70757a]">{rating.toFixed(1)}</span>
      <span className="text-[14px] text-[#f4b400] flex">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i}>
            {i < fullStars ? "\u2605" : i === fullStars && hasHalf ? "\u2605" : "\u2606"}
          </span>
        ))}
      </span>
      <span className="text-[14px] text-[#70757a]">({count.toLocaleString()})</span>
    </div>
  );
}

/* ---- CTR Score Gauge ---- */
function CTRGauge({
  score,
  breakdown,
}: {
  score: number;
  breakdown: { label: string; points: number; earned: boolean }[];
}) {
  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (score / 100) * circumference;
  const color = score >= 70 ? "#22c55e" : score >= 40 ? "#eab308" : "#ef4444";
  const label = score >= 70 ? "Excellent" : score >= 40 ? "Good" : "Needs work";

  return (
    <div className="rounded-2xl border border-border bg-bg-card p-6">
      <h4 className="text-xs font-medium text-white/50 uppercase tracking-widest mb-4">
        Predicted CTR Score
      </h4>
      <div className="flex flex-col sm:flex-row items-start gap-6">
        <div className="relative w-[120px] h-[120px] shrink-0 mx-auto sm:mx-0">
          <svg width="120" height="120" viewBox="0 0 120 120" className="-rotate-90">
            <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
            <motion.circle
              cx="60" cy="60" r="54" fill="none" stroke={color} strokeWidth="8" strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-heading">{score}</span>
            <span className="text-[10px] text-white/40">{label}</span>
          </div>
        </div>
        <div className="flex-1 space-y-1.5 min-w-0 w-full">
          {breakdown.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-[12px]">
              <span className={`shrink-0 ${item.earned ? "text-emerald-400" : "text-white/20"}`}>
                {item.earned ? (
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                )}
              </span>
              <span className={item.earned ? "text-white/60" : "text-white/25"}>{item.label}</span>
              <span className={`ml-auto font-mono text-[11px] ${item.earned ? "text-emerald-400" : "text-white/15"}`}>
                +{item.points}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---- Toggle Switch ---- */
function ToggleSwitch({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <label className="flex items-center gap-2 cursor-pointer text-sm text-body hover:text-heading transition-colors select-none">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative w-8 h-[18px] rounded-full transition-colors ${
          checked ? "bg-accent" : "bg-white/10"
        }`}
      >
        <motion.div
          className="absolute top-[2px] w-[14px] h-[14px] rounded-full bg-white shadow-sm"
          initial={false}
          animate={{ left: checked ? 14 : 2 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>
      {label}
    </label>
  );
}

/* ---- Single SERP Preview Renderer ---- */
function SerpPreviewCard({
  url,
  siteName,
  title,
  description,
  keyword,
  isDesktop,
  showDate,
  showRating,
  ratingValue,
  ratingCount,
  showPrice,
  priceText,
  availabilityText,
  showSitelinks,
  showFaq,
  faqItems,
  showBreadcrumbs,
  showImage,
  showDatePublished,
  datePublished,
  todayDate,
}: {
  url: string;
  siteName: string;
  title: string;
  description: string;
  keyword: string;
  isDesktop: boolean;
  showDate: boolean;
  showRating: boolean;
  ratingValue: number;
  ratingCount: number;
  showPrice: boolean;
  priceText: string;
  availabilityText: string;
  showSitelinks: boolean;
  showFaq: boolean;
  faqItems: string[];
  showBreadcrumbs: boolean;
  showImage: boolean;
  showDatePublished: boolean;
  datePublished: string;
  todayDate: string;
}) {
  const isMobile = !isDesktop;
  const titleFont = isMobile ? "18px arial, sans-serif" : "20px arial, sans-serif";
  const descFont = "14px arial, sans-serif";
  const titleLimit = getTitleLimit(isMobile);
  const descLimit = getDescLimit(isMobile);

  const breadcrumb = useMemo(() => extractBreadcrumb(url), [url]);
  const displayTitle = useMemo(
    () => truncateByPixels(title || "Your Page Title", titleLimit, titleFont),
    [title, titleLimit, titleFont]
  );
  const displayDesc = useMemo(
    () =>
      truncateByPixels(
        description || "This is where your meta description will appear. Write a compelling description to encourage users to click through to your website.",
        descLimit,
        descFont
      ),
    [description, descLimit]
  );

  const fullUrl = url ? (url.startsWith("http") ? url : `https://${url}`) : "https://example.com";

  return (
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
            {fullUrl}
            {showBreadcrumbs && (
              <span className="text-[#70757a]">{breadcrumb.path}</span>
            )}
          </p>
        </div>
        {/* Image thumbnail */}
        {showImage && (
          <div className="ml-auto w-[92px] h-[92px] rounded-lg bg-[#f1f3f4] border border-[#ecedef] flex items-center justify-center shrink-0 overflow-hidden">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#bdc1c6" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
        )}
      </div>

      {/* Title */}
      <h3
        className={`text-[#1a0dab] hover:underline cursor-pointer leading-[1.3] mt-[4px] ${
          isDesktop ? "text-[20px]" : "text-[18px]"
        }`}
      >
        {boldKeywords(displayTitle, keyword)}
      </h3>

      {/* Rating */}
      {showRating && <StarRating rating={ratingValue} count={ratingCount} />}

      {/* Price + Availability */}
      {showPrice && (
        <div className="flex items-center gap-2 mt-[2px]">
          <span className="text-[14px] font-medium text-[#202124]">{priceText || "$29.99"}</span>
          <span className="text-[14px] text-[#70757a]">-</span>
          <span className="text-[14px] text-[#188038]">{availabilityText || "In stock"}</span>
        </div>
      )}

      {/* Description */}
      <p className="text-[14px] text-[#4d5156] leading-[1.58] mt-[3px]">
        {(showDate || showDatePublished) && (
          <span className="text-[#70757a]">
            {showDatePublished && datePublished ? datePublished : todayDate} -{" "}
          </span>
        )}
        {boldKeywords(displayDesc, keyword)}
      </p>

      {/* Sitelinks */}
      {showSitelinks && (
        <div className={`grid ${isDesktop ? "grid-cols-2" : "grid-cols-1"} gap-x-6 gap-y-2 mt-3 pl-0`}>
          {["About Us", "Products", "Pricing", "Contact", "Blog", "Support"].slice(0, isDesktop ? 6 : 4).map((link) => (
            <div key={link}>
              <span className="text-[14px] text-[#1a0dab] hover:underline cursor-pointer">{link}</span>
              <p className="text-[12px] text-[#4d5156] leading-[1.4]">
                Short description of the page content...
              </p>
            </div>
          ))}
        </div>
      )}

      {/* FAQ */}
      {showFaq && (
        <div className="mt-3 border-t border-[#ebebeb] pt-2">
          {faqItems.map((q, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-[#ebebeb] last:border-b-0">
              <span className="text-[14px] text-[#202124]">{q}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#70757a" strokeWidth="2">
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---- Bulk mode types ---- */
interface BulkRow {
  title: string;
  description: string;
  url: string;
}

function parseBulkCSV(csv: string): BulkRow[] {
  const lines = csv.trim().split("\n").filter(Boolean);
  const rows: BulkRow[] = [];
  for (const line of lines) {
    // Support both comma and tab separated
    const parts = line.includes("\t") ? line.split("\t") : line.split(",");
    if (parts.length >= 2) {
      rows.push({
        title: (parts[0] || "").trim().replace(/^["']|["']$/g, ""),
        description: (parts[1] || "").trim().replace(/^["']|["']$/g, ""),
        url: (parts[2] || "").trim().replace(/^["']|["']$/g, ""),
      });
    }
  }
  return rows;
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

  // Fetch URL state
  const [isFetching, setIsFetching] = useState(false);

  // Toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Rich snippet toggles
  const [showDate, setShowDate] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [ratingValue, setRatingValue] = useState(4.8);
  const [ratingCount, setRatingCount] = useState(2451);
  const [showPrice, setShowPrice] = useState(false);
  const [priceText, setPriceText] = useState("$29.99");
  const [availabilityText, setAvailabilityText] = useState("In stock");
  const [showSitelinks, setShowSitelinks] = useState(false);
  const [showFaq, setShowFaq] = useState(false);
  const [faqItems, setFaqItems] = useState(["How does this product work?", "What is the return policy?"]);
  const [showBreadcrumbs, setShowBreadcrumbs] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [showDatePublished, setShowDatePublished] = useState(false);
  const [datePublished, setDatePublished] = useState("");

  // Bulk mode
  const [bulkMode, setBulkMode] = useState(false);
  const [bulkCsv, setBulkCsv] = useState("");
  const [bulkRows, setBulkRows] = useState<BulkRow[]>([]);

  // Pixel measurements
  const [titlePx, setTitlePx] = useState(0);
  const [descPx, setDescPx] = useState(0);

  // Refs
  const previewRef = useRef<HTMLDivElement>(null);
  const bulkPreviewRef = useRef<HTMLDivElement>(null);

  // Rich snippet panel open
  const [snippetPanelOpen, setSnippetPanelOpen] = useState(false);

  const isDesktop = viewMode === "desktop";
  const isMobile = !isDesktop;

  useEffect(() => {
    setTitlePx(measureTitleWidth(title, isMobile));
  }, [title, isMobile]);

  useEffect(() => {
    setDescPx(measureDescWidth(description));
  }, [description]);

  const titleStatus = getTitleStatus(titlePx, isMobile);
  const descStatus = getDescStatus(descPx, isMobile);
  const titleLimit = getTitleLimit(isMobile);
  const descLimit = getDescLimit(isMobile);

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
    setShowPrice(false);
    setShowBreadcrumbs(true);
    setShowImage(false);
    setShowDatePublished(false);
    setDatePublished("");
    setBulkMode(false);
    setBulkCsv("");
    setBulkRows([]);
  }, []);

  const handleCapitalize = useCallback(() => {
    setTitle((prev) => capitalizeWords(prev));
  }, []);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    toastTimeout.current = setTimeout(() => setToastMessage(null), 2500);
  }, []);

  // Fetch URL handler
  const handleFetchUrl = useCallback(async () => {
    if (!url.trim()) return;
    const fullUrl = url.startsWith("http") ? url : `https://${url}`;
    setIsFetching(true);
    try {
      const res = await fetch("/api/fetch-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ urls: [fullUrl] }),
      });
      if (!res.ok) throw new Error("Fetch failed");
      const data = await res.json();
      if (data.title) setTitle(data.title);
      if (data.description) setDescription(data.description);
      if (data.siteName) setSiteName(data.siteName);
      showToast("Fetched successfully!");
    } catch {
      try {
        const res = await fetch("/api/meta-tags-check", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ urls: [fullUrl] }),
        });
        if (!res.ok) throw new Error("Fallback failed");
        const data = await res.json();
        if (data.results?.[0]) {
          const r = data.results[0];
          if (r.title) setTitle(r.title);
          if (r.description) setDescription(r.description);
          showToast("Fetched from meta tags!");
        }
      } catch {
        showToast("Could not fetch URL");
      }
    } finally {
      setIsFetching(false);
    }
  }, [url, showToast]);

  // Copy as HTML
  const handleCopyHtml = useCallback(() => {
    const html = `<title>${title}</title>\n<meta name="description" content="${description.replace(/"/g, "&quot;")}" />`;
    navigator.clipboard.writeText(html).then(
      () => showToast("HTML tags copied!"),
      () => showToast("Copy failed")
    );
  }, [title, description, showToast]);

  // Download as PNG
  const handleDownloadPng = useCallback(async () => {
    const node = bulkMode ? bulkPreviewRef.current : previewRef.current;
    if (!node) return;
    try {
      showToast("Generating screenshot...");
      const dataUrl = await toPng(node, {
        backgroundColor: "#ffffff",
        pixelRatio: 2,
        quality: 1,
      });
      const link = document.createElement("a");
      link.download = `serp-preview-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
      showToast("Screenshot downloaded!");
    } catch {
      showToast("Screenshot failed - try again");
    }
  }, [bulkMode, showToast]);

  // Parse bulk CSV
  const handleParseBulk = useCallback(() => {
    const rows = parseBulkCSV(bulkCsv);
    setBulkRows(rows);
    if (rows.length === 0) {
      showToast("No valid rows found. Use format: title, description, url");
    } else {
      showToast(`Parsed ${rows.length} row${rows.length > 1 ? "s" : ""}`);
    }
  }, [bulkCsv, showToast]);

  // CTR score
  const ctrResult = useMemo(
    () => calculateCTRScore(title, description, url, keyword),
    [title, description, url, keyword]
  );

  // Export as PDF
  const handleExportPdf = useCallback(() => {
    exportToPDF({
      title: "SERP Preview Report",
      score: ctrResult.score,
      data: [
        { Field: "URL", Value: url || "-" },
        { Field: "Title", Value: title || "-" },
        { Field: "Description", Value: description || "-" },
        { Field: "Keyword", Value: keyword || "-" },
        ...ctrResult.breakdown.map((b) => ({
          Field: b.label,
          Value: b.earned ? `+${b.points} pts` : `0 / ${b.points} pts`,
        })),
      ],
    });
  }, [url, title, description, keyword, ctrResult]);

  // Smart tips
  const tips = useMemo(() => generateTips(title, url), [title, url]);

  const hasContent = title || description || url;
  const todayDate = useMemo(() => {
    const d = new Date();
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }, []);

  return (
    <div className="w-full mt-4 text-left">
      {/* Mode tabs: Single vs Bulk */}
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={() => setBulkMode(false)}
          className={`px-4 py-2 rounded-xl text-xs font-medium transition-colors ${
            !bulkMode
              ? "bg-accent/15 text-accent border border-accent/30"
              : "text-white/40 border border-border hover:text-white/60"
          }`}
        >
          Single Preview
        </button>
        <button
          onClick={() => setBulkMode(true)}
          className={`px-4 py-2 rounded-xl text-xs font-medium transition-colors ${
            bulkMode
              ? "bg-accent/15 text-accent border border-accent/30"
              : "text-white/40 border border-border hover:text-white/60"
          }`}
        >
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            Bulk Mode
          </span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {bulkMode ? (
          /* ======== BULK MODE ======== */
          <motion.div
            key="bulk"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="rounded-2xl border border-border bg-bg-card p-6 space-y-4 mb-6">
              <div>
                <label className="block text-xs font-medium text-white/50 mb-1.5">
                  Paste CSV (title, description, url) - one row per line
                </label>
                <textarea
                  value={bulkCsv}
                  onChange={(e) => setBulkCsv(e.target.value)}
                  placeholder={`Best Running Shoes 2024 | Nike, Shop our collection of premium running shoes. Free shipping on orders over $50., https://example.com/shoes\n10 Tips for Better SEO, Learn the top SEO strategies that will boost your rankings in 2024., https://example.com/seo-tips`}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-bg-input border border-border text-heading text-sm placeholder:text-body/40 focus:outline-none focus:border-accent transition-colors resize-none font-mono"
                />
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleParseBulk}
                  disabled={!bulkCsv.trim()}
                  className="px-5 py-2.5 rounded-xl bg-accent text-white text-xs font-medium hover:bg-accent/80 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Preview All
                </button>
                <button
                  onClick={handleDownloadPng}
                  disabled={bulkRows.length === 0}
                  className="px-4 py-2.5 rounded-xl text-xs font-medium text-accent border border-accent/30 hover:bg-accent/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PNG
                </button>
                <span className="text-[11px] text-white/30">
                  {bulkRows.length > 0 && `${bulkRows.length} result${bulkRows.length > 1 ? "s" : ""}`}
                </span>
              </div>
            </div>

            {/* Bulk preview results */}
            {bulkRows.length > 0 && (
              <div ref={bulkPreviewRef} className="rounded-2xl bg-white overflow-hidden shadow-sm">
                <div className="px-6 pt-5 pb-3 border-b border-[#ebebeb]">
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
                </div>
                <div className="px-6 py-4 space-y-6" style={{ fontFamily: "arial, sans-serif" }}>
                  {bulkRows.map((row, i) => (
                    <div key={i} className={i > 0 ? "pt-4 border-t border-[#ebebeb]" : ""}>
                      <SerpPreviewCard
                        url={row.url}
                        siteName=""
                        title={row.title}
                        description={row.description}
                        keyword=""
                        isDesktop={true}
                        showDate={false}
                        showRating={false}
                        ratingValue={4.8}
                        ratingCount={2451}
                        showPrice={false}
                        priceText=""
                        availabilityText=""
                        showSitelinks={false}
                        showFaq={false}
                        faqItems={[]}
                        showBreadcrumbs={true}
                        showImage={false}
                        showDatePublished={false}
                        datePublished=""
                        todayDate={todayDate}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ) : (
          /* ======== SINGLE MODE ======== */
          <motion.div
            key="single"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 items-start">
              {/* ======== LEFT: Input Form ======== */}
              <div className="rounded-2xl border border-border bg-bg-card p-6 space-y-4">
                {/* URL */}
                <div>
                  <label className="block text-xs font-medium text-white/50 mb-1.5">
                    {t.urlLabel}
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder={t.urlPlaceholder}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-bg-input border border-border text-heading text-sm placeholder:text-body focus:outline-none focus:border-accent transition-colors"
                    />
                    <button
                      onClick={handleFetchUrl}
                      disabled={isFetching || !url.trim()}
                      className="px-3 py-2.5 rounded-xl bg-accent/15 border border-accent/30 text-accent text-xs font-medium hover:bg-accent/25 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 shrink-0"
                    >
                      {isFetching ? (
                        <svg className="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.25" />
                          <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 12a9 9 0 11-6.219-8.56" />
                          <polyline points="21 3 21 9 15 9" />
                        </svg>
                      )}
                      Fetch
                    </button>
                  </div>
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
                    <label className="text-xs font-medium text-white/50">{t.titleLabel}</label>
                  </div>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={t.titlePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-bg-input border border-border text-heading text-sm placeholder:text-body focus:outline-none focus:border-accent transition-colors"
                  />
                  <PixelProgressBar
                    current={titlePx}
                    max={titleLimit}
                    chars={title.length}
                    status={titleStatus}
                    warning={t.titleWarning}
                  />
                  <button
                    onClick={handleCapitalize}
                    className="mt-2 px-3 py-1 text-[11px] font-medium text-accent border border-accent/30 rounded-lg hover:bg-accent/10 transition-colors"
                  >
                    {t.capitalizeTitle}
                  </button>

                  {/* Smart tips */}
                  {tips.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {tips.map((tip, i) => (
                        <p key={i} className="text-[11px] flex items-center gap-1.5">
                          {tip.includes("Great") ? (
                            <span className="text-emerald-400">&#10003;</span>
                          ) : (
                            <span className="text-yellow-400">&#9679;</span>
                          )}
                          <span className={tip.includes("Great") ? "text-emerald-400/70" : "text-yellow-400/70"}>
                            {tip}
                          </span>
                        </p>
                      ))}
                    </div>
                  )}
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
                  <PixelProgressBar
                    current={descPx}
                    max={descLimit}
                    chars={description.length}
                    status={descStatus}
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

                {/* Rich Snippet Toggles */}
                <div>
                  <button
                    onClick={() => setSnippetPanelOpen(!snippetPanelOpen)}
                    className="flex items-center gap-2 text-xs font-medium text-white/50 mb-2 hover:text-white/70 transition-colors w-full"
                  >
                    <span>Rich Snippets</span>
                    <motion.svg
                      width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      animate={{ rotate: snippetPanelOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                  </button>

                  <AnimatePresence>
                    {snippetPanelOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-3 pt-1 pb-2">
                          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                            <ToggleSwitch checked={showRating} onChange={setShowRating} label="Star Rating" />
                            <ToggleSwitch checked={showPrice} onChange={setShowPrice} label="Price" />
                            <ToggleSwitch checked={showFaq} onChange={setShowFaq} label="FAQ" />
                            <ToggleSwitch checked={showBreadcrumbs} onChange={setShowBreadcrumbs} label="Breadcrumbs" />
                            <ToggleSwitch checked={showSitelinks} onChange={setShowSitelinks} label="Sitelinks" />
                            <ToggleSwitch checked={showDate} onChange={setShowDate} label="Date (today)" />
                            <ToggleSwitch checked={showDatePublished} onChange={setShowDatePublished} label="Published Date" />
                            <ToggleSwitch checked={showImage} onChange={setShowImage} label="Thumbnail" />
                          </div>

                          {/* Rating config */}
                          {showRating && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="flex gap-3 p-3 rounded-xl bg-white/[0.03] border border-border">
                                <div className="flex-1">
                                  <label className="text-[10px] text-white/30 block mb-1">Rating (1-5)</label>
                                  <input
                                    type="number"
                                    min={1}
                                    max={5}
                                    step={0.1}
                                    value={ratingValue}
                                    onChange={(e) => setRatingValue(Math.min(5, Math.max(1, parseFloat(e.target.value) || 1)))}
                                    className="w-full px-2.5 py-1.5 rounded-lg bg-bg-input border border-border text-heading text-xs focus:outline-none focus:border-accent"
                                  />
                                </div>
                                <div className="flex-1">
                                  <label className="text-[10px] text-white/30 block mb-1">Review count</label>
                                  <input
                                    type="number"
                                    min={0}
                                    value={ratingCount}
                                    onChange={(e) => setRatingCount(parseInt(e.target.value) || 0)}
                                    className="w-full px-2.5 py-1.5 rounded-lg bg-bg-input border border-border text-heading text-xs focus:outline-none focus:border-accent"
                                  />
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {/* Price config */}
                          {showPrice && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="flex gap-3 p-3 rounded-xl bg-white/[0.03] border border-border">
                                <div className="flex-1">
                                  <label className="text-[10px] text-white/30 block mb-1">Price</label>
                                  <input
                                    type="text"
                                    value={priceText}
                                    onChange={(e) => setPriceText(e.target.value)}
                                    placeholder="$29.99"
                                    className="w-full px-2.5 py-1.5 rounded-lg bg-bg-input border border-border text-heading text-xs focus:outline-none focus:border-accent"
                                  />
                                </div>
                                <div className="flex-1">
                                  <label className="text-[10px] text-white/30 block mb-1">Availability</label>
                                  <input
                                    type="text"
                                    value={availabilityText}
                                    onChange={(e) => setAvailabilityText(e.target.value)}
                                    placeholder="In stock"
                                    className="w-full px-2.5 py-1.5 rounded-lg bg-bg-input border border-border text-heading text-xs focus:outline-none focus:border-accent"
                                  />
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {/* Date published config */}
                          {showDatePublished && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="p-3 rounded-xl bg-white/[0.03] border border-border">
                                <label className="text-[10px] text-white/30 block mb-1">Published date</label>
                                <input
                                  type="text"
                                  value={datePublished}
                                  onChange={(e) => setDatePublished(e.target.value)}
                                  placeholder="Jan 15, 2024"
                                  className="w-full px-2.5 py-1.5 rounded-lg bg-bg-input border border-border text-heading text-xs focus:outline-none focus:border-accent"
                                />
                              </div>
                            </motion.div>
                          )}

                          {/* FAQ items config */}
                          {showFaq && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="p-3 rounded-xl bg-white/[0.03] border border-border space-y-2">
                                <label className="text-[10px] text-white/30 block">FAQ questions</label>
                                {faqItems.map((q, i) => (
                                  <div key={i} className="flex gap-2">
                                    <input
                                      type="text"
                                      value={q}
                                      onChange={(e) => {
                                        const next = [...faqItems];
                                        next[i] = e.target.value;
                                        setFaqItems(next);
                                      }}
                                      className="flex-1 px-2.5 py-1.5 rounded-lg bg-bg-input border border-border text-heading text-xs focus:outline-none focus:border-accent"
                                    />
                                    {faqItems.length > 1 && (
                                      <button
                                        onClick={() => setFaqItems(faqItems.filter((_, j) => j !== i))}
                                        className="text-white/20 hover:text-red-400 transition-colors px-1"
                                      >
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                          <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                                        </svg>
                                      </button>
                                    )}
                                  </div>
                                ))}
                                <button
                                  onClick={() => setFaqItems([...faqItems, ""])}
                                  className="text-[11px] text-accent hover:text-accent/80 transition-colors"
                                >
                                  + Add question
                                </button>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 text-xs font-medium text-white/50 border border-border rounded-lg hover:bg-white/5 hover:text-white/70 transition-colors"
                  >
                    {t.resetButton}
                  </button>
                  <button
                    onClick={handleCopyHtml}
                    disabled={!title && !description}
                    className="px-4 py-2 text-xs font-medium text-accent border border-accent/30 rounded-lg hover:bg-accent/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" />
                      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                    </svg>
                    Copy HTML
                  </button>
                  <button
                    onClick={handleDownloadPng}
                    disabled={!hasContent}
                    className="px-4 py-2 text-xs font-medium text-accent border border-accent/30 rounded-lg hover:bg-accent/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Save PNG
                  </button>
                  <button
                    onClick={handleExportPdf}
                    disabled={!hasContent}
                    className="px-4 py-2 text-xs font-medium text-accent border border-accent/30 rounded-lg hover:bg-accent/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                    Export PDF
                  </button>
                </div>
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
                        isDesktop ? "bg-accent/15 text-accent" : "text-white/40 hover:text-white/60"
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
                        !isDesktop ? "bg-accent/15 text-accent" : "text-white/40 hover:text-white/60"
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
                    ref={previewRef}
                    className={`rounded-2xl bg-white overflow-hidden shadow-sm ${
                      isDesktop ? "" : "max-w-[420px]"
                    }`}
                  >
                    {/* Google Header */}
                    <div className="px-6 pt-5 pb-3 border-b border-[#ebebeb]">
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
                      <SerpPreviewCard
                        url={url}
                        siteName={siteName}
                        title={title}
                        description={description}
                        keyword={keyword}
                        isDesktop={isDesktop}
                        showDate={showDate}
                        showRating={showRating}
                        ratingValue={ratingValue}
                        ratingCount={ratingCount}
                        showPrice={showPrice}
                        priceText={priceText}
                        availabilityText={availabilityText}
                        showSitelinks={showSitelinks}
                        showFaq={showFaq}
                        faqItems={faqItems}
                        showBreadcrumbs={showBreadcrumbs}
                        showImage={showImage}
                        showDatePublished={showDatePublished}
                        datePublished={datePublished}
                        todayDate={todayDate}
                      />
                      <SkeletonResult />
                      <SkeletonResult />
                      <SkeletonResult />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTR Score - shown only in single mode */}
      {!bulkMode && hasContent && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mt-6"
        >
          <CTRGauge score={ctrResult.score} breakdown={ctrResult.breakdown} />
        </motion.div>
      )}

      {/* Toast notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-accent/90 text-white text-sm font-medium shadow-lg backdrop-blur-sm"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom CTA */}
      <AnimatePresence>
        {hasContent && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-2xl border border-border bg-bg-card p-6 md:p-8 text-center space-y-3 mt-8"
          >
            <h3 className="text-lg font-medium text-heading">{t.ctaBottom}</h3>
            <p className="text-sm text-body max-w-[480px] mx-auto">{t.ctaBottomDesc}</p>
            <a
              href="https://ecomseo.typeform.com/to/vNSzwqiS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-medium transition-colors mt-2"
            >
              {t.ctaBottomButton}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
