"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LocaleLink from "@/components/ui/LocaleLink";
import Button from "@/components/ui/Button";
import VidalyticsEmbed from "@/components/ui/VidalyticsEmbed";
import { useLocale } from "@/lib/i18n/useTranslations";
import { heroT } from "@/lib/i18n/translations/home";

const avatars = [
  "/images/framer/M30GCOkzDVYBvBJnuLVYhsnyGw.png",
  "/images/framer/80o2iODSsHPFqjC6aLCcDC1DMYQ.png",
  "/images/framer/IXaVr7HXZA5nSzm7giEQq6Bs.png",
  "/images/framer/hero-avatar-hairdryer.png",
  "/images/framer/hero-avatar-bottle.png",
];

function SocialProof({ text }: { text: string }) {
  return (
    <LocaleLink
      href="/#projects"
      className="inline-flex items-center gap-3"
    >
      {/* Overlapping avatars */}
      <div className="relative flex-shrink-0" style={{ width: 134, height: 36 }}>
        {avatars.map((src, i) => (
          <div
            key={i}
            className="absolute top-0 rounded-full overflow-hidden border-2 border-bg"
            style={{
              width: 36,
              height: 36,
              left: i * 24,
              zIndex: avatars.length - i,
            }}
          >
            <Image
              src={src}
              alt={`EcomSEO client ${i + 1}`}
              title={`EcomSEO client ${i + 1}`}
              width={36}
              height={36}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-start gap-0.5">
        {/* Stars */}
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              width="14"
              height="14"
              viewBox="0 0 256 256"
              fill="rgb(255, 202, 40)"
            >
              <path d="M234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 01-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0153 211.75l13.76-58.07-45-38.83A16.46 16.46 0 0131.08 95l59.46-4.76 22.3-55.8a16.36 16.36 0 0130.32 0l22.3 55.8L224.92 95a16.46 16.46 0 019.37 19.85z" />
            </svg>
          ))}
        </div>
        <span className="text-xs font-medium text-body whitespace-nowrap">
          {text}
        </span>
      </div>
    </LocaleLink>
  );
}

export default function Hero() {
  const locale = useLocale();
  const t = heroT[locale];

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative px-6 md:px-8 lg:px-16 pt-[105px] pb-[80px]">
        <div className="relative z-[1] mx-auto max-w-[1100px] w-full flex flex-col items-center text-center gap-6">
          {/* Audience-qualifier pill */}
          {t.eyebrow && (
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-[12px] font-medium tracking-[0.02em]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="relative flex w-[6px] h-[6px]">
                <span className="absolute inline-flex w-full h-full rounded-full bg-accent opacity-60 animate-ping" />
                <span className="relative inline-flex w-[6px] h-[6px] rounded-full bg-accent" />
              </span>
              {t.eyebrow}
            </motion.div>
          )}

          {/* Main heading — centered, big */}
          <motion.h1
            className="text-[40px] md:text-[60px] lg:text-[68px] font-medium leading-[1.05] tracking-[-0.03em] text-heading max-w-[920px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.heading}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-body text-base md:text-lg font-medium max-w-[680px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.subtitle}
          </motion.p>

          {/* "Click here for proof" — scrolls to the Results/metrics section below */}
          <motion.a
            href="#projects"
            className="text-heading/85 hover:text-heading text-[13px] font-semibold tracking-[0.06em] uppercase underline underline-offset-[6px] decoration-1 decoration-heading/40 hover:decoration-heading transition-colors"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            Click here for proof
          </motion.a>

          {/* ─── Centered Fabian intro video — Vidalytics embed ─── */}
          <motion.div
            className="relative w-full max-w-[920px] rounded-3xl overflow-hidden border border-border/60 bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <VidalyticsEmbed embedId="wrphd1mXJaLobXJK" />
            {/* Soft purple glow around the video */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: 420,
                height: 420,
                top: -120,
                right: -120,
                background: "radial-gradient(circle, rgba(193,100,230,0.25) 0%, transparent 60%)",
                filter: "blur(40px)",
              }}
              aria-hidden
            />
          </motion.div>

          {/* Primary CTA + trust row below video */}
          <motion.div
            className="flex flex-col items-center gap-5 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              href="/demo"
              variant="primary"
              size="large"
            >
              {t.ctaPrimary}
            </Button>

            {/* Social proof row */}
            <SocialProof text={t.socialProof} />

            {/* Certified Partner logos — Shopify, Google, Bing */}
            <div className="flex items-center justify-center flex-wrap gap-8 md:gap-10 pt-2">
              <Image
                src="/images/partners/shopify-partner.png"
                alt="Shopify Partners"
                width={800}
                height={250}
                className="h-[34px] md:h-[40px] w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
              />
              <a
                href="https://www.google.com/partners/agency?id=6774382013"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex"
              >
                <Image
                  src="/images/partners/google-partner.png"
                  alt="Google Partner"
                  width={573}
                  height={208}
                  className="h-[34px] md:h-[40px] w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
                />
              </a>
              <Image
                src="/images/partners/bing-partner-agency.webp"
                alt="Bing Partner Agency"
                width={400}
                height={199}
                className="h-[34px] md:h-[40px] w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>
        </div>

        {/* Glow effect at bottom */}
        <div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-0"
          style={{
            width: 1200,
            height: 800,
            bottom: -406,
          }}
        >
          {/* Center orb */}
          <div
            className="absolute animate-glow-rotate"
            style={{
              width: 412,
              height: 412,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background:
                "conic-gradient(from 0deg, transparent 0deg, rgb(123, 45, 233) 60deg, transparent 120deg)",
              filter: "blur(40px)",
              borderRadius: "50%",
              opacity: 0.6,
            }}
          />
          {/* Left orb */}
          <div
            className="absolute"
            style={{
              width: 309,
              height: 309,
              top: "40%",
              left: "20%",
              background:
                "conic-gradient(from 180deg, transparent 0deg, rgb(193, 100, 230) 90deg, transparent 180deg)",
              filter: "blur(40px)",
              borderRadius: "50%",
              opacity: 0.4,
              animation: "glow-rotate 8s linear infinite reverse",
            }}
          />
          {/* Right orb */}
          <div
            className="absolute"
            style={{
              width: 309,
              height: 309,
              top: "35%",
              right: "20%",
              background:
                "conic-gradient(from 90deg, transparent 0deg, rgb(123, 45, 233) 120deg, transparent 240deg)",
              filter: "blur(40px)",
              borderRadius: "50%",
              opacity: 0.4,
              animation: "glow-rotate 10s linear infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
