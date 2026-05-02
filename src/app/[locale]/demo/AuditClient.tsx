"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import IClosedEmbed from "@/components/ui/IClosedEmbed";
import VidalyticsEmbed from "@/components/ui/VidalyticsEmbed";
import { useLocale } from "@/lib/i18n/useTranslations";
import { demoPageT } from "@/lib/i18n/translations/demoPage";

/**
 * Free SEO Audit landing page — balanced pass.
 *
 *   1. Hero  — eyebrow, H1, subhead, proof badge, iClosed widget
 *   2. What you walk away with — 3 deliverables
 *   3. Recent client wins — 4 named-brand metric cards
 *   4. Testimonials — 6 written quotes, 3×2 grid
 *   5. Trusted-by logo wall
 *   6. Founder block — Fabian's story + stats
 *   7. Pricing transparency
 *   8. FAQ (collapsed)
 *   9. Final CTA — scroll back to calendar
 *
 * Hero stays ruthlessly minimal (Accelerated pattern). Below the fold we
 * build enough proof and reasoning to close a considered purchase (SEO
 * audits skew more researched than CRO demos).
 */

const FABIAN_IMG = "/images/framer/fabian-van-til-new.jpeg";
const CALENDAR_ANCHOR = "#top";

/* ─────────────────────────────────────────────────────────────
   FABIAN INTRO VIDEO
   Once Fabian records his 60-sec intro, swap VIDEO_URL with the
   file or embed. Supported:
     • Self-hosted MP4:  "/videos/fabian-intro.mp4"
     • Loom embed URL:   "https://www.loom.com/embed/<id>"
     • YouTube embed:    "https://www.youtube.com/embed/<id>"
     • Vimeo embed:      "https://player.vimeo.com/video/<id>"
   Leave empty to render the clickable poster (scrolls to calendar).
   ───────────────────────────────────────────────────────────── */
const VIDEO_URL = "/videos/audit-demo.mp4";

const trustpilotScreenshots = [
  { src: "/images/partner-voices/tp-1.png" },
  { src: "/images/partner-voices/tp-2.png" },
  { src: "/images/partner-voices/tp-3.png" },
  { src: "/images/partner-voices/tp-4.png" },
  { src: "/images/partner-voices/tp-5.png" },
  { src: "/images/partner-voices/tp-6.png" },
];

export default function AuditClient() {
  const locale = useLocale();
  // Belt-and-braces: if a locale slips through without translations
  // (missing key, bad URL, future regression), fall back to EN copy
  // instead of crashing the entire /demo page client-side.
  const t = demoPageT[locale] || demoPageT.en;
  return (
    <>
      {/* ─── 1. Hero ─── */}
      <section id="top" className="relative w-full overflow-hidden scroll-mt-0">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 1200px 600px at 30% 10%, rgba(123,45,233,0.18), transparent 60%), radial-gradient(ellipse 900px 500px at 80% 20%, rgba(193,100,230,0.14), transparent 60%)",
          }}
        />

        <div className="relative px-6 md:px-8 lg:px-16 pt-[110px] pb-20">
          <div className="relative z-[1] mx-auto max-w-[820px] w-full flex flex-col items-center text-center gap-6">
            <motion.p
              className="text-[13px] tracking-[0.04em] text-body/80 italic"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {t.eyebrow}
            </motion.p>

            <motion.h1
              className="text-[34px] md:text-[52px] lg:text-[60px] font-medium leading-[1.04] tracking-[-0.03em] text-heading max-w-[780px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t.headingLead}{" "}
              <span className="text-accent">{t.headingAccent}</span>
            </motion.h1>

            {/* Video — placed above the descriptive paragraph */}
            <div className="w-full max-w-[820px] mt-2">
              <FabianIntroVideo />
            </div>

            <motion.div
              className="flex flex-col gap-4 text-body text-base md:text-[17px] max-w-[680px] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p>
                <span className="text-heading font-semibold">{t.noteLabel}</span>{" "}{t.noteBody}
              </p>
              <p>{t.paragraphMeet}</p>
              <p>{t.paragraphOutcome}</p>
            </motion.div>

            <motion.div
              className="inline-flex items-center gap-3 mt-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-[rgb(10,10,10)]">
                <Image
                  src={FABIAN_IMG}
                  alt="Fabian van Til"
                  fill
                  className="object-cover"
                  sizes="36px"
                />
              </div>
              <div className="text-left leading-tight">
                <div className="text-[13px] font-semibold text-heading tabular-nums">
                  <CountUp to={19} suffix="+" /> {t.brandsScaled}
                </div>
                <div className="text-[12px] text-body/70 tabular-nums">
                  €<CountUp to={18} suffix="M+" /> {t.revenueGenerated}
                </div>
              </div>
            </motion.div>

            {/* Anchor jump to the form below */}
            <motion.a
              href="#book"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-accent/90 transition-colors mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              {t.bookCta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </div>
        </div>
      </section>

      {/* ─── 2. Logo wall — early credibility (B2B CRO) ─── */}
      <section className="relative w-full">
        <div className="px-6 md:px-8 lg:px-16 py-12 border-t border-border">
          <div className="mx-auto max-w-[1100px] w-full flex flex-col items-center gap-6">
            <p className="text-[12px] tracking-[0.18em] text-body/60 uppercase">
              {t.trustBarLabel}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 md:gap-x-14 gap-y-6 opacity-70">
              <Image src="/images/clients/heyshape.png" alt="Hey Shape" width={120} height={28} className="h-6 w-auto object-contain" />
              <Image src="/images/clients/hike.svg" alt="Hike Footwear" width={110} height={28} className="h-6 w-auto object-contain" />
              <Image src="/images/clients/me-logo.png" alt="Mothers Earth" width={110} height={28} className="h-7 w-auto object-contain" />
              <Image src="/images/clients/tobios-logo.png" alt="Tobios Kits" width={120} height={28} className="h-7 w-auto object-contain" />
              <span className="text-body/40 text-[13px] italic">{t.trustBarMoreBrands}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. What you walk away with ─── */}
      <section className="relative w-full">
        <div className="px-6 md:px-8 lg:px-16 py-16 border-t border-border">
          <div className="mx-auto max-w-[1100px] w-full">
            <div className="text-center mb-10">
              <p className="text-[11px] tracking-[0.18em] text-accent/80 uppercase mb-3">
                {t.deliverablesEyebrow}
              </p>
              <h2 className="text-[28px] md:text-[36px] font-medium text-heading leading-tight max-w-[620px] mx-auto">
                {t.deliverablesHeading}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {t.deliverables.map((d, i) => (
                <motion.div
                  key={d.label}
                  className="rounded-2xl border border-border bg-bg-card p-6 flex flex-col gap-3"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <span className="text-accent text-[11px] font-semibold tracking-[0.18em] uppercase">
                    {`0${i + 1}`}
                  </span>
                  <h3 className="text-[18px] font-medium text-heading leading-tight">
                    {d.label}
                  </h3>
                  <p className="text-[13.5px] text-body leading-relaxed">
                    {d.desc}
                  </p>
                  <div className="mt-auto pt-3 border-t border-white/[0.06] flex items-center gap-2">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="text-emerald-400 shrink-0"
                    >
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[12px] text-body-strong font-medium">
                      {d.outcome}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. Fabian intro video ─── */}
      {/* ─── 4. Testimonials — Trustpilot-style cards ─── */}
      <section className="relative w-full">
        <div className="px-6 md:px-8 lg:px-16 py-20 border-t border-border">
          <div className="mx-auto max-w-[1180px] w-full">
            <div className="text-center mb-12">
              <h2 className="text-[36px] md:text-[48px] font-medium text-heading leading-[1.05] tracking-[-0.02em]">
                {t.feedbackHeading}
              </h2>
              <p className="text-body text-[15px] mt-3">
                {t.feedbackSubtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {trustpilotScreenshots.map((s, i) => (
                <motion.div
                  key={s.src}
                  className="relative aspect-[16/9] w-full rounded-md overflow-hidden bg-white shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
                >
                  <Image
                    src={s.src}
                    alt={`${t.feedbackHeading} — ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. Pricing transparency ─── */}
      <section className="relative w-full">
        <div className="px-6 md:px-8 lg:px-16 py-16 border-t border-border">
          <div className="mx-auto max-w-[760px] w-full">
            <div className="rounded-3xl border border-border bg-bg-card p-8 md:p-12 text-center flex flex-col items-center gap-5">
              <p className="text-[11px] tracking-[0.18em] text-accent/80 uppercase">
                {t.pricingEyebrow}
              </p>
              <h2 className="text-[26px] md:text-[32px] font-medium text-heading leading-tight max-w-[560px]">
                {t.pricingHeading}
              </h2>
              <p className="text-body text-[14.5px] max-w-[560px] leading-relaxed">
                {t.pricingBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. FAQ ─── */}
      <section className="relative w-full">
        <div className="px-6 md:px-8 lg:px-16 py-16 border-t border-border">
          <div className="mx-auto max-w-[820px] w-full">
            <div className="text-center mb-10">
              <p className="text-[11px] tracking-[0.18em] text-accent/80 uppercase mb-3">
                {t.faqEyebrow}
              </p>
              <h2 className="text-[28px] md:text-[36px] font-medium text-heading leading-tight">
                {t.faqHeading}
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {t.faqs.map((f, i) => (
                <FAQItem key={i} q={f.q} a={f.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. Final CTA: inline calendar form ─── */}
      <section id="book" className="relative w-full scroll-mt-24">
        <div className="px-6 md:px-8 lg:px-16 py-16 border-t border-border">
          <div className="mx-auto max-w-[860px] w-full text-center flex flex-col items-center gap-5">
            <h2 className="text-[28px] md:text-[36px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
              {t.finalCtaHeading}
            </h2>
            <p className="text-body text-[14.5px] leading-relaxed max-w-[540px]">
              {t.finalCtaSubtext}
            </p>
            <div className="w-full mt-4">
              <div className="rounded-2xl bg-white p-2 md:p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_40px_100px_-20px_rgba(123,45,233,0.35)]">
                <IClosedEmbed minHeight={620} />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

/* ─── CountUp ───────────────────────────────────────────────
   Animates a number from 0 to target when it scrolls into view.
   Runs once per element, under 700ms. Pure CSS-like feel. */
function CountUp({ to, suffix = "", duration = 700 }: { to: number; suffix?: string; duration?: number }) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = (node: HTMLSpanElement | null) => {
    if (!node || started) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(to * eased));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
  };
  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

/* ─── FabianIntroVideo ───────────────────────────────────────
   Renders either the embedded video (if VIDEO_URL is set) or a
   clickable poster that scrolls the user back to the calendar.
   Detects MP4 vs iframe-embed URL automatically. */
function FabianIntroVideo() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Soft glow under the player */}
      <div
        aria-hidden
        className="absolute -inset-4 rounded-[32px] opacity-50 blur-2xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(123,45,233,0.5), transparent 65%)",
        }}
      />

      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black shadow-[0_40px_100px_-20px_rgba(123,45,233,0.4)]">
        <VidalyticsEmbed embedId="oGTxwfeEBmpuvLyT" />
      </div>
    </motion.div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-[14.5px] font-medium text-heading pr-4">{q}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`flex-shrink-0 text-white/40 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-4 -mt-1 text-[13.5px] text-body leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

/* ─── Trustpilot-style review card ─────────────────────────────
   White card on dark page background. Five green stars, avatar
   with coloured initial, date on the right, verified tick, bold
   headline, body, "Date of experience", and the standard
   Useful / Share / Reply footer row. Mirrors the visual language
   of public review platforms to borrow their credibility cues. */

type Testimonial = {
  brand: string;
  role: string;
  country: string;
  avatarColor: string;
  date: string;
  headline: string;
  body: string;
  experienceDate: string;
  tag: string;
};

function TrustpilotStar() {
  return (
    <span className="inline-block w-[22px] h-[22px] bg-[#00b67a] grid place-items-center">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="white"
        aria-hidden
      >
        <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7.1L12 17.6 5.8 21.3l1.6-7.1L2 9.5l7.1-.6z" />
      </svg>
    </span>
  );
}

function TrustpilotCard({ t, idx }: { t: Testimonial; idx: number }) {
  /* Split body on double newlines for natural paragraph rendering. */
  const paragraphs = t.body.split(/\n\n+/);

  return (
    <motion.article
      className="rounded-md bg-white text-neutral-900 flex flex-col px-6 py-5 shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.35, delay: (idx % 3) * 0.06 }}
    >
      {/* Top row: stars + verified + date */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-[2px]">
            <TrustpilotStar />
            <TrustpilotStar />
            <TrustpilotStar />
            <TrustpilotStar />
            <TrustpilotStar />
          </div>
          <span className="inline-flex items-center gap-1 text-[13.5px] font-normal text-[#00B67A]">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
              <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Verified
          </span>
        </div>
        <div className="text-[13.5px] text-neutral-500 flex-shrink-0">
          {t.date}
        </div>
      </div>

      {/* Headline */}
      <h3 className="mt-4 text-[19px] font-bold text-neutral-900 leading-snug tracking-tight">
        {t.headline}
      </h3>

      {/* Body */}
      <div className="mt-3 flex flex-col gap-3 text-[14.5px] text-neutral-900 leading-[1.55]">
        {paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {/* Date of experience — gray pill */}
      <div className="mt-5">
        <span className="inline-block bg-[#f2f3f5] text-neutral-700 text-[12.5px] rounded px-2.5 py-1">
          {t.experienceDate}
        </span>
      </div>
    </motion.article>
  );
}
