"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLocale } from "@/lib/i18n/useTranslations";
import { dataFeedsT } from "@/lib/i18n/translations/home";

/** Parse *italic* markers inside a string */
function renderHeading(text: string) {
  const parts = text.split(/\*(.*?)\*/);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <em
        key={i}
        className="not-italic"
        style={{ fontFamily: '"Georgia", "Times New Roman", serif', fontStyle: "italic" }}
      >
        {part}
      </em>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

/* Mini bar chart component for the analytics panels */
function MiniBarChart({ bars, color }: { bars: number[]; color: string }) {
  return (
    <div className="flex items-end gap-1.5 h-[80px]">
      {bars.map((h, i) => (
        <div
          key={i}
          className="rounded-sm flex-1 min-w-[8px]"
          style={{
            height: `${h}%`,
            background: `linear-gradient(to top, ${color}, ${color}44)`,
            opacity: 0.7 + (h / 100) * 0.3,
          }}
        />
      ))}
    </div>
  );
}

/* Mini line chart for organic traffic panel */
function MiniLineChart() {
  return (
    <svg viewBox="0 0 200 60" className="w-full h-[60px]" preserveAspectRatio="none">
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(123, 45, 233)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="rgb(123, 45, 233)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,50 C20,48 30,45 50,38 C70,31 80,35 100,28 C120,21 130,18 150,12 C170,8 180,10 200,5"
        fill="none"
        stroke="rgb(193, 100, 230)"
        strokeWidth="2"
      />
      <path
        d="M0,50 C20,48 30,45 50,38 C70,31 80,35 100,28 C120,21 130,18 150,12 C170,8 180,10 200,5 L200,60 L0,60 Z"
        fill="url(#lineGrad)"
      />
    </svg>
  );
}

export default function DataFeeds() {
  const locale = useLocale();
  const t = dataFeedsT[locale];

  return (
    <SectionWrapper className="py-24 md:py-32">
      <div className="flex flex-col items-center text-center gap-12">
        {/* ─── Header ─── */}
        <motion.div
          className="flex flex-col items-center gap-4 max-w-[700px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge text={t.badge} />
          {/* Purple dot */}
          <div className="w-2 h-2 rounded-full bg-accent -mb-1" />
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
            {renderHeading(t.heading)}
          </h2>
          <p className="text-body text-base md:text-lg max-w-[559px]">
            {t.subtext}
          </p>
        </motion.div>

        {/* ─── Divider with glasses logo ─── */}
        <motion.div
          className="w-full flex items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-1 h-px bg-border" />
          <div className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/framer/07X1hcePOLDoCzDpQbZZgdbDcU.png"
              alt="EcomSEO"
              className="h-[40px] md:h-[50px] w-auto opacity-60"
            />
          </div>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        {/* ─── Two analytics panels ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* Left panel – Keyword Rankings */}
          <motion.div
            className="relative rounded-3xl border border-border overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-bg-card" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 0% 40%, rgba(123, 45, 233, 0.20) 0%, rgba(123, 45, 233, 0.04) 45%, transparent 70%)",
              }}
            />
            <div className="relative z-10 p-8 md:p-10 flex flex-col gap-6">
              {/* Panel header */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1 text-left">
                  <span className="text-xs text-white/40 uppercase tracking-wider">Keyword Rankings</span>
                  <span className="text-2xl font-medium text-heading">+347%</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                  <span className="text-xs font-medium text-green-400">↑ Growth</span>
                </div>
              </div>
              {/* Chart */}
              <MiniBarChart
                bars={[25, 35, 30, 45, 40, 55, 50, 65, 60, 75, 70, 85, 80, 90, 95]}
                color="rgb(123, 45, 233)"
              />
              {/* Stats row */}
              <div className="flex gap-6 pt-2">
                <div className="flex flex-col gap-0.5 text-left">
                  <span className="text-xs text-white/40">Top 10</span>
                  <span className="text-sm font-medium text-heading">2,847</span>
                </div>
                <div className="flex flex-col gap-0.5 text-left">
                  <span className="text-xs text-white/40">Top 3</span>
                  <span className="text-sm font-medium text-heading">412</span>
                </div>
                <div className="flex flex-col gap-0.5 text-left">
                  <span className="text-xs text-white/40">Position 1</span>
                  <span className="text-sm font-medium text-heading">89</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right panel – Organic Traffic */}
          <motion.div
            className="relative rounded-3xl border border-border overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute inset-0 bg-bg-card" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 100% 30%, rgba(140, 70, 255, 0.24) 0%, rgba(193, 100, 230, 0.12) 25%, rgba(80, 80, 255, 0.08) 50%, transparent 75%)",
              }}
            />
            <div className="relative z-10 p-8 md:p-10 flex flex-col gap-6">
              {/* Panel header */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1 text-left">
                  <span className="text-xs text-white/40 uppercase tracking-wider">Organic Traffic</span>
                  <span className="text-2xl font-medium text-heading">+479%</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                  <span className="text-xs font-medium text-green-400">↑ 12 months</span>
                </div>
              </div>
              {/* Chart */}
              <MiniLineChart />
              {/* Stats row */}
              <div className="flex gap-6 pt-2">
                <div className="flex flex-col gap-0.5 text-left">
                  <span className="text-xs text-white/40">Monthly visits</span>
                  <span className="text-sm font-medium text-heading">184K</span>
                </div>
                <div className="flex flex-col gap-0.5 text-left">
                  <span className="text-xs text-white/40">Revenue</span>
                  <span className="text-sm font-medium text-heading">€2.4M</span>
                </div>
                <div className="flex flex-col gap-0.5 text-left">
                  <span className="text-xs text-white/40">ROI</span>
                  <span className="text-sm font-medium text-heading">12.4x</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
