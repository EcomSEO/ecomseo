"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExportButtons from "./ExportButtons";
import type { CoreWebVitalsTranslation } from "@/lib/i18n/translations/seoTools";

/* ─── Types ─── */

type Rating = "good" | "needs-improvement" | "poor" | "n/a";

interface MetricResult {
  value: number | null;
  unit: string;
  rating: Rating;
  displayValue: string;
}

interface FieldMetric {
  p75: number | null;
  rating: Rating;
  displayValue: string;
  distributions: { min: number; max: number; proportion: number }[];
}

interface Opportunity {
  title: string;
  description: string;
  savings: string;
}

interface Diagnostic {
  title: string;
  description: string;
}

interface LcpBreakdown {
  element: string | null;
  elementType: string | null;
  url: string | null;
  loadTime: number | null;
  renderDelay: number | null;
  resourceLoadDelay: number | null;
  ttfb: number | null;
}

interface ClsElement {
  node: string;
  score: number;
}

interface ResourceBreakdown {
  totalBytes: number;
  totalRequests: number;
  jsBytes: number;
  cssBytes: number;
  imageBytes: number;
  fontBytes: number;
  otherBytes: number;
  thirdPartyBytes: number;
}

interface CWVResult {
  url: string;
  strategy: "mobile" | "desktop";
  performanceScore: number | null;
  lcp: MetricResult;
  fid: MetricResult;
  cls: MetricResult;
  fcp: MetricResult;
  ttfb: MetricResult;
  si: MetricResult;
  tbt: MetricResult;
  fieldData: {
    lcp: FieldMetric | null;
    inp: FieldMetric | null;
    cls: FieldMetric | null;
    fcp: FieldMetric | null;
    ttfb: FieldMetric | null;
  } | null;
  lcpBreakdown: LcpBreakdown | null;
  clsElements: ClsElement[];
  resourceBreakdown: ResourceBreakdown | null;
  opportunities: Opportunity[];
  diagnostics: Diagnostic[];
  error?: string;
}

type Strategy = "mobile" | "desktop";
type TabMode = "single" | "compare";

/* ─── Helpers ─── */

const ratingColor: Record<Rating, string> = {
  good: "#22c55e",
  "needs-improvement": "#eab308",
  poor: "#ef4444",
  "n/a": "rgba(255,255,255,0.2)",
};

const ratingBg: Record<Rating, string> = {
  good: "bg-green-500/15 text-green-400 border-green-500/20",
  "needs-improvement": "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
  poor: "bg-red-500/15 text-red-400 border-red-500/20",
  "n/a": "bg-white/10 text-body border-white/10",
};

const ratingText: Record<Rating, string> = {
  good: "text-green-400",
  "needs-improvement": "text-yellow-400",
  poor: "text-red-400",
  "n/a": "text-white/30",
};

function ratingLabel(rating: Rating, t: CoreWebVitalsTranslation): string {
  if (rating === "good") return t.good;
  if (rating === "needs-improvement") return t.needsImprovement;
  if (rating === "poor") return t.poor;
  return "N/A";
}

function scoreColor(score: number): string {
  if (score >= 90) return "#22c55e";
  if (score >= 50) return "#eab308";
  return "#ef4444";
}

function letterGrade(score: number): { letter: string; color: string } {
  if (score >= 90) return { letter: "A", color: "#22c55e" };
  if (score >= 80) return { letter: "B", color: "#4ade80" };
  if (score >= 70) return { letter: "C", color: "#eab308" };
  if (score >= 50) return { letter: "D", color: "#f97316" };
  return { letter: "F", color: "#ef4444" };
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/* ─── Premium Speedometer Gauge ─── */

function SpeedometerGauge({
  value,
  max,
  rating,
  label,
  displayValue,
  subtitle,
  size = 160,
}: {
  value: number | null;
  max: number;
  rating: Rating;
  label: string;
  displayValue: string;
  subtitle?: string;
  size?: number;
}) {
  const strokeWidth = 8;
  const radius = (size - strokeWidth * 2) / 2;
  // 270-degree arc (from 135deg to 405deg)
  const arcAngle = 270;
  const arcLength = (arcAngle / 360) * 2 * Math.PI * radius;
  const pct = value !== null ? Math.min(value / max, 1) : 0;
  const filledLength = pct * arcLength;
  const [animated, setAnimated] = useState(false);

  // Gradient stops based on thresholds
  const goodColor = "#22c55e";
  const warnColor = "#eab308";
  const poorColor = "#ef4444";
  const activeColor = ratingColor[rating];

  useEffect(() => {
    const id = requestAnimationFrame(() => setAnimated(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Tick marks
  const ticks = 27;
  const tickElements = [];
  for (let i = 0; i <= ticks; i++) {
    const angle = 135 + (i / ticks) * arcAngle;
    const rad = (angle * Math.PI) / 180;
    const isMajor = i % 9 === 0;
    const innerR = radius - (isMajor ? 14 : 8);
    const outerR = radius - 2;
    const x1 = size / 2 + innerR * Math.cos(rad);
    const y1 = size / 2 + innerR * Math.sin(rad);
    const x2 = size / 2 + outerR * Math.cos(rad);
    const y2 = size / 2 + outerR * Math.sin(rad);
    const tickPct = i / ticks;
    const tickColor = tickPct <= 0.33 ? goodColor : tickPct <= 0.66 ? warnColor : poorColor;
    tickElements.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={tickColor}
        strokeWidth={isMajor ? 2 : 1}
        opacity={isMajor ? 0.5 : 0.2}
      />
    );
  }

  // Needle angle
  const needleAngle = 135 + pct * arcAngle;
  const needleRad = (needleAngle * Math.PI) / 180;
  const needleLen = radius - 20;
  const nx = size / 2 + needleLen * Math.cos(needleRad);
  const ny = size / 2 + needleLen * Math.sin(needleRad);

  return (
    <motion.div
      className="flex flex-col items-center gap-1"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative" style={{ width: size, height: size * 0.8 }}>
        <svg width={size} height={size * 0.8} viewBox={`0 0 ${size} ${size * 0.8}`}>
          {/* Background arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth={strokeWidth}
            strokeDasharray={`${arcLength} ${2 * Math.PI * radius - arcLength}`}
            strokeDashoffset={-(2 * Math.PI * radius - arcLength) / 2 - arcLength * 0.25}
            strokeLinecap="round"
            transform={`rotate(0, ${size / 2}, ${size / 2})`}
            style={{ transform: `rotate(135deg)`, transformOrigin: `${size / 2}px ${size / 2}px` }}
          />
          {/* Tick marks */}
          {tickElements}
          {/* Colored arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={activeColor}
            strokeWidth={strokeWidth}
            strokeDasharray={`${animated ? filledLength : 0} ${2 * Math.PI * radius}`}
            strokeLinecap="round"
            style={{
              transform: `rotate(135deg)`,
              transformOrigin: `${size / 2}px ${size / 2}px`,
              transition: "stroke-dasharray 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
              filter: `drop-shadow(0 0 8px ${activeColor}50)`,
            }}
          />
          {/* Needle */}
          {value !== null && (
            <line
              x1={size / 2}
              y1={size / 2}
              x2={animated ? nx : size / 2}
              y2={animated ? ny : size / 2 + needleLen}
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              style={{
                transition: "all 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
                filter: "drop-shadow(0 0 4px rgba(255,255,255,0.3))",
              }}
            />
          )}
          {/* Center dot */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={4}
            fill={activeColor}
            style={{ filter: `drop-shadow(0 0 6px ${activeColor}80)` }}
          />
        </svg>
        {/* Value overlay */}
        <div className="absolute inset-0 flex flex-col items-center" style={{ top: size * 0.42 }}>
          <span
            className="text-xl font-semibold tracking-tight"
            style={{ color: activeColor }}
          >
            {displayValue}
          </span>
          {subtitle && (
            <span className="text-[10px] text-body/60 mt-0.5">{subtitle}</span>
          )}
        </div>
      </div>
      <span className="text-xs text-body font-semibold tracking-wide uppercase">{label}</span>
    </motion.div>
  );
}

/* ─── Performance Score Ring with Letter Grade ─── */

function PerformanceScoreRing({ score }: { score: number | null }) {
  const size = 160;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = score !== null ? score / 100 : 0;
  const offset = circumference - pct * circumference;
  const color = score !== null ? scoreColor(score) : "rgba(255,255,255,0.1)";
  const grade = score !== null ? letterGrade(score) : null;
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setAnimated(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative" style={{ width: size, height: size }}>
        {/* Glow ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle, ${color}15 0%, transparent 70%)`,
          }}
        />
        <svg width={size} height={size} className="-rotate-90">
          {/* Background track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth={strokeWidth}
          />
          {/* Dotted background */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius - 14}
            fill="none"
            stroke="rgba(255,255,255,0.03)"
            strokeWidth={1}
            strokeDasharray="3 6"
          />
          {/* Active arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={animated ? offset : circumference}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 1.6s cubic-bezier(0.4, 0, 0.2, 1)",
              filter: `drop-shadow(0 0 12px ${color}60)`,
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className="text-4xl font-bold tracking-tight"
            style={{ color }}
          >
            {score !== null ? score : "--"}
          </span>
          {grade && (
            <span
              className="text-lg font-bold mt-0.5 px-2.5 py-0.5 rounded-md"
              style={{
                color: grade.color,
                background: `${grade.color}15`,
                border: `1px solid ${grade.color}30`,
              }}
            >
              Grade {grade.letter}
            </span>
          )}
        </div>
      </div>
      <span className="text-xs text-body font-semibold uppercase tracking-wider">
        Performance Score
      </span>
    </motion.div>
  );
}

/* ─── Field Data Distribution Bar ─── */

function DistributionBar({ distributions }: { distributions: { min: number; max: number; proportion: number }[] }) {
  if (!distributions || distributions.length < 3) return null;
  const colors = ["#22c55e", "#eab308", "#ef4444"];
  return (
    <div className="space-y-1.5">
      <div className="flex h-2.5 rounded-full overflow-hidden gap-0.5">
        {distributions.map((d, i) => (
          <motion.div
            key={i}
            initial={{ width: 0 }}
            animate={{ width: `${(d.proportion * 100).toFixed(1)}%` }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="rounded-full"
            style={{ backgroundColor: colors[i] }}
          />
        ))}
      </div>
      <div className="flex justify-between text-[10px]">
        <span className="text-green-400">{(distributions[0].proportion * 100).toFixed(0)}% Good</span>
        <span className="text-yellow-400">{(distributions[1].proportion * 100).toFixed(0)}% Needs Work</span>
        <span className="text-red-400">{(distributions[2].proportion * 100).toFixed(0)}% Poor</span>
      </div>
    </div>
  );
}

/* ─── Rating Badge ─── */

function RatingBadge({ rating, t }: { rating: Rating; t: CoreWebVitalsTranslation }) {
  return (
    <span className={`inline-block px-2.5 py-1 rounded-lg text-xs border font-medium ${ratingBg[rating]}`}>
      {ratingLabel(rating, t)}
    </span>
  );
}

/* ─── Loading State ─── */

function LoadingOverlay() {
  const [dots, setDots] = useState("");
  const [step, setStep] = useState(0);
  const steps = [
    "Connecting to PageSpeed Insights API...",
    "Running Lighthouse audit...",
    "Analyzing Core Web Vitals...",
    "Fetching CrUX field data...",
    "Compiling results...",
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "" : d + "."));
    }, 500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setStep((s) => Math.min(s + 1, steps.length - 1));
    }, 4000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-border bg-bg-card p-10 flex flex-col items-center gap-6"
    >
      {/* Pulsing ring */}
      <div className="relative w-20 h-20">
        <div
          className="absolute inset-0 rounded-full border-2 border-accent/40"
          style={{ animation: "cwv-pulse 2s ease-in-out infinite" }}
        />
        <div
          className="absolute inset-2 rounded-full border-2 border-accent/25"
          style={{ animation: "cwv-pulse 2s ease-in-out 0.3s infinite" }}
        />
        <div
          className="absolute inset-4 rounded-full border-2 border-accent/15"
          style={{ animation: "cwv-pulse 2s ease-in-out 0.6s infinite" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-8 h-8 text-accent animate-spin" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.2" />
            <path d="M12 2a10 10 0 019.8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="text-center space-y-2">
        <p className="text-heading font-medium text-base">Analyzing page performance{dots}</p>
        <AnimatePresence mode="wait">
          <motion.p
            key={step}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-body text-sm"
          >
            {steps[step]}
          </motion.p>
        </AnimatePresence>
      </div>
      {/* Progress bar */}
      <div className="w-full max-w-xs h-1 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full bg-accent/60 rounded-full"
          style={{
            animation: "cwv-progress 20s ease-out forwards",
          }}
        />
      </div>
      <p className="text-[10px] text-body/40">
        Analyzing both mobile and desktop simultaneously for instant switching
      </p>
      <style>{`
        @keyframes cwv-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.15); opacity: 0.5; }
        }
        @keyframes cwv-progress {
          0% { width: 0%; }
          20% { width: 25%; }
          40% { width: 45%; }
          60% { width: 65%; }
          80% { width: 80%; }
          100% { width: 94%; }
        }
      `}</style>
    </motion.div>
  );
}

/* ─── Expandable Section ─── */

function Expandable({
  title,
  count,
  icon,
  children,
  defaultOpen = false,
}: {
  title: string;
  count?: number;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-border bg-bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="text-sm font-medium text-heading flex items-center gap-2">
          {icon}
          {title}
          {count !== undefined && (
            <span className="text-xs text-body bg-white/5 px-2 py-0.5 rounded-md">{count}</span>
          )}
        </span>
        <svg
          className={`w-4 h-4 text-body transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 16 16"
          fill="none"
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-3 border-t border-border pt-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Resource Bar Chart ─── */

function ResourceBarChart({ breakdown }: { breakdown: ResourceBreakdown }) {
  const items = [
    { label: "JavaScript", bytes: breakdown.jsBytes, color: "#eab308" },
    { label: "Images", bytes: breakdown.imageBytes, color: "#22c55e" },
    { label: "CSS", bytes: breakdown.cssBytes, color: "#8b5cf6" },
    { label: "Fonts", bytes: breakdown.fontBytes, color: "#06b6d4" },
    { label: "Other", bytes: breakdown.otherBytes, color: "rgba(255,255,255,0.2)" },
  ].filter((i) => i.bytes > 0);

  const maxBytes = Math.max(...items.map((i) => i.bytes), 1);

  return (
    <div className="space-y-3">
      {/* Summary row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="rounded-lg bg-white/[0.03] border border-border p-3 text-center">
          <div className="text-lg font-semibold text-heading">{formatBytes(breakdown.totalBytes)}</div>
          <div className="text-[10px] text-body uppercase tracking-wide">Total Size</div>
        </div>
        <div className="rounded-lg bg-white/[0.03] border border-border p-3 text-center">
          <div className="text-lg font-semibold text-heading">{breakdown.totalRequests}</div>
          <div className="text-[10px] text-body uppercase tracking-wide">Requests</div>
        </div>
        <div className="rounded-lg bg-white/[0.03] border border-border p-3 text-center">
          <div className="text-lg font-semibold text-yellow-400">{formatBytes(breakdown.jsBytes)}</div>
          <div className="text-[10px] text-body uppercase tracking-wide">JavaScript</div>
        </div>
        <div className="rounded-lg bg-white/[0.03] border border-border p-3 text-center">
          <div className="text-lg font-semibold text-cyan-400">{formatBytes(breakdown.thirdPartyBytes)}</div>
          <div className="text-[10px] text-body uppercase tracking-wide">Third Party</div>
        </div>
      </div>
      {/* Bar chart */}
      <div className="space-y-2.5">
        {items.map((item) => (
          <div key={item.label} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-body-strong font-medium">{item.label}</span>
              <span className="text-body">{formatBytes(item.bytes)}</span>
            </div>
            <div className="h-2.5 rounded-full bg-white/[0.04] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(item.bytes / maxBytes) * 100}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ backgroundColor: item.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Field Data Panel ─── */

function FieldDataPanel({
  fieldData,
  t,
}: {
  fieldData: CWVResult["fieldData"];
  t: CoreWebVitalsTranslation;
}) {
  if (!fieldData) return null;

  const metrics = [
    { key: "lcp" as const, label: t.lcp, data: fieldData.lcp },
    { key: "inp" as const, label: t.inp, data: fieldData.inp },
    { key: "cls" as const, label: t.cls, data: fieldData.cls },
    { key: "fcp" as const, label: "FCP", data: fieldData.fcp },
    { key: "ttfb" as const, label: "TTFB", data: fieldData.ttfb },
  ].filter((m) => m.data !== null);

  if (metrics.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-2 h-2 rounded-full bg-blue-400" />
        <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
          Real User Data (CrUX Field Data)
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((m) => (
          <div
            key={m.key}
            className="rounded-lg bg-white/[0.03] border border-border p-4 space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-heading">{m.label}</span>
              <span
                className="text-sm font-semibold"
                style={{ color: ratingColor[m.data!.rating] }}
              >
                p75: {m.data!.displayValue}
              </span>
            </div>
            <DistributionBar distributions={m.data!.distributions} />
            <RatingBadge rating={m.data!.rating} t={t} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── LCP Breakdown Panel ─── */

function LcpBreakdownPanel({ breakdown }: { breakdown: LcpBreakdown | null }) {
  if (!breakdown) return null;

  return (
    <div className="space-y-3">
      {breakdown.element && (
        <div className="rounded-lg bg-white/[0.03] border border-border p-4 space-y-2">
          <div className="text-xs text-body font-medium uppercase tracking-wide">LCP Element</div>
          <code className="block text-sm text-accent font-mono break-all bg-white/[0.02] rounded-lg px-3 py-2 border border-border">
            {breakdown.element}
          </code>
        </div>
      )}
      <div className="grid grid-cols-2 gap-3">
        {breakdown.loadTime !== null && (
          <div className="rounded-lg bg-white/[0.03] border border-border p-3 text-center">
            <div className="text-base font-semibold text-heading">
              {breakdown.loadTime >= 1000
                ? `${(breakdown.loadTime / 1000).toFixed(1)}s`
                : `${Math.round(breakdown.loadTime)}ms`}
            </div>
            <div className="text-[10px] text-body uppercase tracking-wide mt-1">LCP Time</div>
          </div>
        )}
        {breakdown.ttfb !== null && (
          <div className="rounded-lg bg-white/[0.03] border border-border p-3 text-center">
            <div className="text-base font-semibold text-heading">
              {breakdown.ttfb >= 1000
                ? `${(breakdown.ttfb / 1000).toFixed(1)}s`
                : `${Math.round(breakdown.ttfb)}ms`}
            </div>
            <div className="text-[10px] text-body uppercase tracking-wide mt-1">TTFB</div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── CLS Elements Panel ─── */

function ClsElementsPanel({ elements }: { elements: ClsElement[] }) {
  if (elements.length === 0) return null;

  return (
    <div className="space-y-2">
      {elements.map((el, i) => (
        <div key={i} className="flex items-center gap-3 rounded-lg bg-white/[0.03] border border-border p-3">
          <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-red-400" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <code className="text-xs text-body-strong font-mono block truncate">{el.node}</code>
            <span className="text-[10px] text-body">Shift score: {el.score.toFixed(4)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Result Panel (reused in single & compare) ─── */

function ResultPanel({
  result,
  t,
  compact = false,
}: {
  result: CWVResult;
  t: CoreWebVitalsTranslation;
  compact?: boolean;
}) {
  if (result.error && result.performanceScore === null) {
    return (
      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 text-center">
        <p className="text-red-400 text-sm">{result.error}</p>
      </div>
    );
  }

  const hasFieldData = result.fieldData && (
    result.fieldData.lcp || result.fieldData.inp || result.fieldData.cls
  );

  return (
    <div className="space-y-5">
      {/* Performance Score + Core Metrics Hero */}
      <div className="rounded-2xl border border-border bg-bg-card p-6 md:p-8">
        {!compact && (
          <div className="text-xs font-mono text-body-strong mb-6 pb-3 border-b border-border break-all flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-body shrink-0" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M2 8h8M2 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {result.url.replace(/^https?:\/\//, "")}
            <span className="ml-auto text-[10px] text-body/50 uppercase tracking-wider">
              {result.strategy}
            </span>
          </div>
        )}

        {/* Lab data label */}
        <div className="flex items-center gap-2 mb-5">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-xs text-accent font-semibold uppercase tracking-wider">
            Lab Data (Lighthouse)
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <PerformanceScoreRing score={result.performanceScore} />
          <div className="flex-1 grid grid-cols-3 gap-6 md:gap-8 w-full">
            <SpeedometerGauge
              value={result.lcp.value}
              max={6000}
              rating={result.lcp.rating}
              label={t.lcp}
              displayValue={result.lcp.displayValue}
              subtitle="< 2.5s good"
            />
            <SpeedometerGauge
              value={result.fid.value}
              max={800}
              rating={result.fid.rating}
              label={t.inp}
              displayValue={result.fid.displayValue}
              subtitle="< 200ms good"
            />
            <SpeedometerGauge
              value={result.cls.value !== null ? result.cls.value * 1000 : null}
              max={500}
              rating={result.cls.rating}
              label={t.cls}
              displayValue={result.cls.displayValue}
              subtitle="< 0.1 good"
            />
          </div>
        </div>
      </div>

      {/* Field Data (CrUX) */}
      {hasFieldData && (
        <div className="rounded-2xl border border-border bg-bg-card p-6">
          <FieldDataPanel fieldData={result.fieldData} t={t} />
          <div className="mt-4 pt-3 border-t border-border">
            <p className="text-[10px] text-body/50">
              Field data represents real user experiences collected over the previous 28-day period from the Chrome User Experience Report (CrUX).
            </p>
          </div>
        </div>
      )}

      {/* Metric Breakdown Panels */}
      {(result.lcpBreakdown || result.clsElements.length > 0) && (
        <div className="grid md:grid-cols-2 gap-5">
          {result.lcpBreakdown && (
            <Expandable
              title="LCP Breakdown"
              defaultOpen
              icon={
                <svg className="w-4 h-4 text-accent" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M5 7h6M5 10h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              }
            >
              <LcpBreakdownPanel breakdown={result.lcpBreakdown} />
            </Expandable>
          )}
          {result.clsElements.length > 0 && (
            <Expandable
              title="Layout Shift Elements"
              count={result.clsElements.length}
              defaultOpen
              icon={
                <svg className="w-4 h-4 text-red-400" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" strokeDasharray="2 2" />
                  <rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M7 4.5L9 11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeDasharray="2 2" />
                </svg>
              }
            >
              <ClsElementsPanel elements={result.clsElements} />
            </Expandable>
          )}
        </div>
      )}

      {/* Resource Breakdown */}
      {result.resourceBreakdown && (
        <Expandable
          title="Resource Breakdown"
          defaultOpen
          icon={
            <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="10" width="3" height="4" rx="0.5" fill="currentColor" opacity="0.4" />
              <rect x="6.5" y="6" width="3" height="8" rx="0.5" fill="currentColor" opacity="0.6" />
              <rect x="11" y="2" width="3" height="12" rx="0.5" fill="currentColor" opacity="0.8" />
            </svg>
          }
        >
          <ResourceBarChart breakdown={result.resourceBreakdown} />
        </Expandable>
      )}

      {/* Additional Metrics */}
      <Expandable title="Additional Metrics" count={4}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {([
            { key: "fcp" as const, label: "FCP" },
            { key: "ttfb" as const, label: "TTFB" },
            { key: "si" as const, label: "Speed Index" },
            { key: "tbt" as const, label: "TBT" },
          ]).map(({ key, label }) => {
            const m = result[key];
            return (
              <div key={key} className="rounded-lg bg-white/[0.03] border border-border p-4 text-center space-y-2">
                <div className={`text-lg font-medium ${ratingText[m.rating]}`}>
                  {m.displayValue}
                </div>
                <div className="text-xs text-body">{label}</div>
                <RatingBadge rating={m.rating} t={t} />
              </div>
            );
          })}
        </div>
      </Expandable>

      {/* Opportunities */}
      {result.opportunities.length > 0 && (
        <Expandable title="Opportunities" count={result.opportunities.length}>
          {result.opportunities.map((opp, i) => (
            <div key={i} className="flex items-start gap-3 py-2">
              <svg className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v8M8 12v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-heading font-medium">{opp.title}</div>
                <div className="text-xs text-body mt-0.5 line-clamp-2">{opp.description.replace(/\[.*?\]\(.*?\)/g, '').substring(0, 200)}</div>
                <div className="text-xs text-yellow-400/80 mt-1 font-medium">{opp.savings}</div>
              </div>
            </div>
          ))}
        </Expandable>
      )}

      {/* Diagnostics */}
      {result.diagnostics.length > 0 && (
        <Expandable title="Diagnostics" count={result.diagnostics.length}>
          {result.diagnostics.map((diag, i) => (
            <div key={i} className="flex items-start gap-3 py-2">
              <svg className="w-4 h-4 text-body shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2" />
                <path d="M8 5v4M8 11v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-heading font-medium">{diag.title}</div>
                <div className="text-xs text-body mt-0.5 line-clamp-2">{diag.description.replace(/\[.*?\]\(.*?\)/g, '').substring(0, 200)}</div>
              </div>
            </div>
          ))}
        </Expandable>
      )}
    </div>
  );
}

/* ─── Main Component ─── */

export default function CoreWebVitalsClient({ t }: { t: CoreWebVitalsTranslation }) {
  const [urls, setUrls] = useState("");
  const [compareUrl, setCompareUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [strategy, setStrategy] = useState<Strategy>("mobile");
  const [results, setResults] = useState<CWVResult[] | null>(null);
  const [compareResults, setCompareResults] = useState<CWVResult[] | null>(null);
  const [tabMode, setTabMode] = useState<TabMode>("single");
  // Cache both strategies
  const [mobileResults, setMobileResults] = useState<CWVResult[] | null>(null);
  const [desktopResults, setDesktopResults] = useState<CWVResult[] | null>(null);
  const [mobileCompareResults, setMobileCompareResults] = useState<CWVResult[] | null>(null);
  const [desktopCompareResults, setDesktopCompareResults] = useState<CWVResult[] | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const fetchCWV = useCallback(
    async (urlList: string[], strat: Strategy, signal?: AbortSignal): Promise<CWVResult[]> => {
      const res = await fetch("/api/core-web-vitals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ urls: urlList, strategy: strat }),
        signal,
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      return data.results;
    },
    []
  );

  const handleCheck = async () => {
    const lines = urls
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    if (lines.length === 0) {
      setError(t.errorEmpty);
      return;
    }
    if (lines.length > 5) {
      setError(t.errorTooMany);
      return;
    }

    const normalized = lines.map((l) =>
      /^https?:\/\//i.test(l) ? l : "https://" + l
    );
    for (const u of normalized) {
      try {
        new URL(u);
      } catch {
        setError(t.errorInvalid);
        return;
      }
    }

    // Compare mode validation
    let compareNormalized: string[] = [];
    if (tabMode === "compare") {
      const cLines = compareUrl
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);
      if (cLines.length === 0) {
        setError("Please enter a competitor URL to compare.");
        return;
      }
      compareNormalized = cLines.map((l) =>
        /^https?:\/\//i.test(l) ? l : "https://" + l
      );
      for (const u of compareNormalized) {
        try {
          new URL(u);
        } catch {
          setError(t.errorInvalid);
          return;
        }
      }
    }

    setError("");
    setLoading(true);
    setResults(null);
    setCompareResults(null);
    setMobileResults(null);
    setDesktopResults(null);
    setMobileCompareResults(null);
    setDesktopCompareResults(null);

    // Abort previous
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      // Fetch both strategies in parallel
      const fetchBoth = async () => {
        const promises: Promise<CWVResult[]>[] = [
          fetchCWV(normalized, "mobile", controller.signal),
          fetchCWV(normalized, "desktop", controller.signal),
        ];
        if (tabMode === "compare" && compareNormalized.length > 0) {
          promises.push(
            fetchCWV(compareNormalized, "mobile", controller.signal),
            fetchCWV(compareNormalized, "desktop", controller.signal),
          );
        }
        return Promise.all(promises);
      };

      const allResults = await fetchBoth();
      const mobileMain = allResults[0];
      const desktopMain = allResults[1];
      const mobileComp = allResults[2] ?? null;
      const desktopComp = allResults[3] ?? null;

      setMobileResults(mobileMain);
      setDesktopResults(desktopMain);
      setMobileCompareResults(mobileComp);
      setDesktopCompareResults(desktopComp);

      // Set active view based on current strategy
      if (strategy === "mobile") {
        setResults(mobileMain);
        setCompareResults(mobileComp);
      } else {
        setResults(desktopMain);
        setCompareResults(desktopComp);
      }
    } catch (e) {
      if ((e as Error).name !== "AbortError") {
        setError(t.errorFetch);
      }
    } finally {
      setLoading(false);
    }
  };

  // Switch strategy - instant if we have cached data
  const switchStrategy = (s: Strategy) => {
    setStrategy(s);
    if (s === "mobile" && mobileResults) {
      setResults(mobileResults);
      setCompareResults(mobileCompareResults);
    } else if (s === "desktop" && desktopResults) {
      setResults(desktopResults);
      setCompareResults(desktopCompareResults);
    }
  };

  // Export
  const exportCSV = useCallback(() => {
    if (!results) return;
    const all = [...results, ...(compareResults ?? [])];
    const headers = ["URL", "Strategy", "Score", "Grade", "LCP", "LCP Rating", "INP", "INP Rating", "CLS", "CLS Rating", "FCP", "TTFB", "SI", "TBT"];
    const rows = all.map((r) => {
      const grade = r.performanceScore !== null ? letterGrade(r.performanceScore).letter : "N/A";
      return [
        r.url,
        r.strategy,
        r.performanceScore ?? "",
        grade,
        r.lcp.displayValue,
        r.lcp.rating,
        r.fid.displayValue,
        r.fid.rating,
        r.cls.displayValue,
        r.cls.rating,
        r.fcp.displayValue,
        r.ttfb.displayValue,
        r.si.displayValue,
        r.tbt.displayValue,
      ];
    });
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "core-web-vitals.csv";
    a.click();
    URL.revokeObjectURL(url);
  }, [results, compareResults]);

  const copyClipboard = useCallback(() => {
    if (!results) return;
    const all = [...results, ...(compareResults ?? [])];
    const text = all
      .map((r) => {
        const grade = r.performanceScore !== null ? letterGrade(r.performanceScore).letter : "N/A";
        return `${r.url} (${r.strategy}): Score ${r.performanceScore ?? "N/A"} (${grade}) | LCP ${r.lcp.displayValue} (${r.lcp.rating}) | INP ${r.fid.displayValue} (${r.fid.rating}) | CLS ${r.cls.displayValue} (${r.cls.rating})`;
      })
      .join("\n");
    navigator.clipboard.writeText(text);
  }, [results, compareResults]);

  // Whether we have both strategies cached for instant switching
  const hasBothStrategies = mobileResults !== null && desktopResults !== null;

  return (
    <div className="w-full max-w-[1060px] mx-auto space-y-6">
      {/* Input Card */}
      <div className="rounded-2xl border border-border bg-bg-card p-6 space-y-5">
        {/* Mode tabs */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTabMode("single")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              tabMode === "single"
                ? "bg-accent/15 text-accent border border-accent/30"
                : "bg-white/5 text-body border border-transparent hover:text-heading"
            }`}
          >
            Single Check
          </button>
          <button
            onClick={() => setTabMode("compare")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
              tabMode === "compare"
                ? "bg-accent/15 text-accent border border-accent/30"
                : "bg-white/5 text-body border border-transparent hover:text-heading"
            }`}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
              <path d="M5 2v12M11 2v12M2 8h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            Compare with Competitor
          </button>
        </div>

        {/* Strategy toggle */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-body font-medium">Device:</span>
          <div className="flex rounded-lg border border-border overflow-hidden">
            {(["mobile", "desktop"] as const).map((s) => (
              <button
                key={s}
                onClick={() => switchStrategy(s)}
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all ${
                  strategy === s
                    ? "bg-accent/15 text-accent"
                    : "text-body hover:text-heading hover:bg-white/[0.03]"
                }`}
              >
                {s === "mobile" ? (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                    <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="18" r="1" fill="currentColor" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 22h8M12 18v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
                {s === "mobile" ? t.mobile : t.desktop}
                {hasBothStrategies && s !== strategy && (
                  <span className="text-[9px] text-accent/60 font-normal">(cached)</span>
                )}
              </button>
            ))}
          </div>
          {hasBothStrategies && (
            <span className="text-[10px] text-body/40 hidden md:inline">
              Both devices loaded -- switch instantly
            </span>
          )}
        </div>

        {/* URL inputs */}
        <div className={tabMode === "compare" ? "grid md:grid-cols-2 gap-4" : ""}>
          <div>
            <label className="block text-sm font-medium text-heading mb-2">
              {tabMode === "compare" ? "Your URL" : t.urlsLabel}
            </label>
            <textarea
              value={urls}
              onChange={(e) => setUrls(e.target.value)}
              placeholder={tabMode === "compare" ? "https://yoursite.com/" : t.urlsPlaceholder}
              rows={tabMode === "compare" ? 2 : 4}
              className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-body placeholder:text-white/20 focus:outline-none focus:border-accent/50 font-mono resize-y"
            />
          </div>
          {tabMode === "compare" && (
            <div>
              <label className="block text-sm font-medium text-heading mb-2">
                Competitor URL
              </label>
              <textarea
                value={compareUrl}
                onChange={(e) => setCompareUrl(e.target.value)}
                placeholder="https://competitor.com/"
                rows={2}
                className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-body placeholder:text-white/20 focus:outline-none focus:border-accent/50 font-mono resize-y"
              />
            </div>
          )}
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleCheck}
            disabled={loading}
            className="px-8 py-3 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? t.checkingButton : t.checkButton}
          </button>
          {!loading && (
            <span className="text-[10px] text-body/40">
              Analyzes both mobile + desktop simultaneously
            </span>
          )}
          {results && (
            <ExportButtons
              onExportCSV={exportCSV}
              onCopyClipboard={copyClipboard}
              disabled={loading}
            />
          )}
        </div>
      </div>

      {/* Loading */}
      {loading && <LoadingOverlay />}

      {/* Results */}
      <AnimatePresence>
        {results && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Ecommerce Impact Callout */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-xl border border-accent/20 bg-accent/5 p-5 flex items-start gap-4"
            >
              <div className="w-10 h-10 shrink-0 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L2 7l8 5 8-5-8-5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                  <path d="M2 13l8 5 8-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 10l8 5 8-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-heading font-medium">Ecommerce Performance Impact</p>
                <p className="text-xs text-body mt-1">
                  A 1-second improvement in LCP can increase conversions by 27% for ecommerce sites.
                  Pages scoring above 90 on mobile see 2x better organic rankings on average.
                  {results[0]?.performanceScore !== null && results[0].performanceScore < 90 && (
                    <span className="text-accent font-medium">
                      {" "}Improving your score from {results[0].performanceScore} to 90+ could significantly boost your revenue.
                    </span>
                  )}
                </p>
              </div>
            </motion.div>

            {/* Historical context hint if field data available */}
            {results[0]?.fieldData && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 flex items-start gap-3"
              >
                <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className="text-sm text-heading font-medium">Real-World Field Data Available</p>
                  <p className="text-xs text-body mt-0.5">
                    This site has enough traffic for Chrome User Experience Report (CrUX) data.
                    Field data shows how real users experience your site over the past 28 days.
                    {(() => {
                      const fieldLcp = results[0]?.fieldData?.lcp;
                      const labLcp = results[0]?.lcp;
                      if (fieldLcp && labLcp?.value) {
                        const fieldMs = fieldLcp.p75 ?? 0;
                        const labMs = labLcp.value;
                        if (fieldMs > 0 && Math.abs(fieldMs - labMs) > 500) {
                          return fieldMs > labMs
                            ? " Field LCP is slower than lab -- real users may be on slower connections."
                            : " Field LCP is faster than lab -- your CDN and caching are working well.";
                        }
                      }
                      return "";
                    })()}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Compare mode: side by side */}
            {tabMode === "compare" && compareResults ? (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs text-accent font-semibold uppercase tracking-wider mb-3 px-1 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      Your Site
                    </div>
                    {results.map((r, i) => (
                      <ResultPanel key={`main-${i}`} result={r} t={t} />
                    ))}
                  </div>
                  <div>
                    <div className="text-xs text-yellow-400 font-semibold uppercase tracking-wider mb-3 px-1 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      Competitor
                    </div>
                    {compareResults.map((r, i) => (
                      <ResultPanel key={`comp-${i}`} result={r} t={t} />
                    ))}
                  </div>
                </div>

                {/* Quick comparison table */}
                {results[0] && compareResults[0] && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="rounded-xl border border-border bg-bg-card overflow-hidden"
                  >
                    <div className="px-5 py-3 border-b border-border bg-white/[0.02]">
                      <span className="text-sm font-medium text-heading">Head-to-Head Comparison</span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left px-5 py-3 text-xs text-body font-medium">Metric</th>
                            <th className="text-center px-5 py-3 text-xs text-accent font-medium">Your Site</th>
                            <th className="text-center px-5 py-3 text-xs text-yellow-400 font-medium">Competitor</th>
                            <th className="text-center px-5 py-3 text-xs text-body font-medium">Winner</th>
                            <th className="text-center px-5 py-3 text-xs text-body font-medium">Diff</th>
                          </tr>
                        </thead>
                        <tbody>
                          {([
                            { label: "Performance", a: results[0].performanceScore, b: compareResults[0].performanceScore, higher: true, unit: "pts" },
                            { label: "LCP", a: results[0].lcp.value, b: compareResults[0].lcp.value, higher: false, unit: "ms" },
                            { label: "INP", a: results[0].fid.value, b: compareResults[0].fid.value, higher: false, unit: "ms" },
                            { label: "CLS", a: results[0].cls.value, b: compareResults[0].cls.value, higher: false, unit: "" },
                            { label: "FCP", a: results[0].fcp.value, b: compareResults[0].fcp.value, higher: false, unit: "ms" },
                            { label: "TBT", a: results[0].tbt.value, b: compareResults[0].tbt.value, higher: false, unit: "ms" },
                            { label: "Speed Index", a: results[0].si.value, b: compareResults[0].si.value, higher: false, unit: "ms" },
                            { label: "TTFB", a: results[0].ttfb.value, b: compareResults[0].ttfb.value, higher: false, unit: "ms" },
                          ]).map(({ label, a, b, higher }) => {
                            let winner = "--";
                            let diff = "";
                            if (a !== null && b !== null) {
                              if (higher) {
                                winner = a > b ? "You" : a < b ? "Competitor" : "Tie";
                                diff = Math.abs(a - b) > 0 ? `${Math.abs(a - b).toFixed(label === "CLS" ? 3 : 0)}` : "";
                              } else {
                                winner = a < b ? "You" : a > b ? "Competitor" : "Tie";
                                if (label === "CLS") {
                                  diff = Math.abs(a - b) > 0 ? Math.abs(a - b).toFixed(3) : "";
                                } else {
                                  const d = Math.abs(a - b);
                                  diff = d > 0 ? (d >= 1000 ? `${(d / 1000).toFixed(1)}s` : `${Math.round(d)}ms`) : "";
                                }
                              }
                            }
                            const fmt = (v: number | null) => {
                              if (v === null) return "N/A";
                              if (label === "Performance") return String(v);
                              if (label === "CLS") return v.toFixed(3);
                              return v >= 1000 ? `${(v / 1000).toFixed(1)}s` : `${Math.round(v)}ms`;
                            };
                            return (
                              <tr key={label} className="border-b border-border last:border-0">
                                <td className="px-5 py-3 text-heading font-medium">{label}</td>
                                <td className={`px-5 py-3 text-center ${winner === "You" ? "text-green-400 font-semibold" : "text-body"}`}>{fmt(a)}</td>
                                <td className={`px-5 py-3 text-center ${winner === "Competitor" ? "text-green-400 font-semibold" : "text-body"}`}>{fmt(b)}</td>
                                <td className={`px-5 py-3 text-center font-semibold ${winner === "You" ? "text-green-400" : winner === "Competitor" ? "text-red-400" : "text-body"}`}>
                                  {winner === "You" && (
                                    <span className="inline-flex items-center gap-1">
                                      <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none"><path d="M6 9V3M3 6l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                      You
                                    </span>
                                  )}
                                  {winner === "Competitor" && (
                                    <span className="inline-flex items-center gap-1">
                                      <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none"><path d="M6 3v6M3 6l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                      Them
                                    </span>
                                  )}
                                  {winner === "Tie" && "Tie"}
                                  {winner === "--" && "--"}
                                </td>
                                <td className="px-5 py-3 text-center text-xs text-body/60">{diff}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    {/* Score summary */}
                    {results[0].performanceScore !== null && compareResults[0].performanceScore !== null && (
                      <div className="px-5 py-3 border-t border-border bg-white/[0.01]">
                        <p className="text-xs text-body text-center">
                          {results[0].performanceScore > compareResults[0].performanceScore
                            ? `Your site outperforms the competitor by ${results[0].performanceScore - compareResults[0].performanceScore} points overall.`
                            : results[0].performanceScore < compareResults[0].performanceScore
                            ? `The competitor leads by ${compareResults[0].performanceScore - results[0].performanceScore} points. Focus on the opportunities above to close the gap.`
                            : "Both sites are tied on performance score."}
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            ) : (
              /* Single mode */
              <div className="space-y-8">
                {results.map((r, i) => (
                  <ResultPanel key={i} result={r} t={t} />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
