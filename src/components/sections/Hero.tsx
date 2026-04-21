"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LocaleLink from "@/components/ui/LocaleLink";
import Button from "@/components/ui/Button";
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
      <div className="relative px-6 md:px-8 lg:px-16 pt-[105px] pb-[104px]">
        <div className="relative z-[1] mx-auto max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] gap-10 lg:gap-16 items-center">
          {/* ─── Left column: headline + CTAs ─── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-[7px]">
            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SocialProof text={t.socialProof} />
            </motion.div>

            {/* Content inner - gap 24px */}
            <div className="flex flex-col items-center lg:items-start gap-6">
              {/* Main heading */}
              <motion.h1
                className="text-[40px] md:text-[64px] lg:text-[72px] font-medium leading-[1.05] tracking-[-0.03em] text-heading max-w-[640px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {t.heading}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-body text-base md:text-lg font-medium max-w-[560px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {t.subtitle}
              </motion.p>

              {/* CTA — single, Fabian-branded */}
              <motion.div
                className="flex items-center lg:items-start py-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button
                  href="https://w35pmime997.typeform.com/to/eqeeLQvb"
                  variant="primary"
                  size="large"
                  external
                >
                  Get a Free Proposal from Fabian
                </Button>
              </motion.div>

              {/* Stats bar */}
              {t.stats && (
                <motion.div
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-8 md:gap-12 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {t.stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col items-center lg:items-start gap-0.5">
                      <span className="text-[24px] md:text-[32px] font-semibold text-heading">
                        {stat.value}
                      </span>
                      <span className="text-xs text-body font-medium uppercase tracking-wider">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* ─── Right column: Fabian portrait card ─── */}
          <motion.div
            className="relative w-full max-w-[420px] mx-auto lg:mx-0 aspect-[4/5] rounded-3xl overflow-hidden border border-border/60 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/framer/fabian-van-til-new.jpeg"
              alt="Fabian van Til, CEO at EcomSEO"
              title="Fabian van Til"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 420px, 420px"
              priority
            />
            {/* Dark gradient overlay bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            {/* Name + role overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-1">
              <h3 className="text-[17px] font-medium text-heading leading-tight">
                Fabian van Til
              </h3>
              <span className="text-[13px] text-body/90">
                CEO at EcomSEO, Brand Owner
              </span>
            </div>
            {/* Subtle purple glow behind corner */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: 240,
                height: 240,
                top: -40,
                right: -40,
                background: "radial-gradient(circle, rgba(193,100,230,0.25) 0%, transparent 60%)",
                filter: "blur(30px)",
              }}
              aria-hidden
            />
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
