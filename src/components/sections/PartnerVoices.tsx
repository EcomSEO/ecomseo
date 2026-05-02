"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

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

/* Real Slack screenshots from clients we work with every day. */
const screenshots = [
  {
    src: "/images/partner-voices/review-gonzalo.jpg",
    alt: "Slack message from Gonzalo F (24 Mar at 8:46 AM): \"You guys are killers!! Thank you all for your hard work\" with @Fabian @Maki @Dimitar @Gjorgi @Lazar mentioned. 🙌 reaction count 3.",
  },
  {
    src: "/images/partner-voices/review-sophie-v2.jpg",
    alt: "Slack message from Sophie K. (Tue 11:14 AM): \"just hopped off the weekly with @Fabian. already actioned the 4 priority items. communication on this team is unreal. Q1 organic up 38% vs Q4\". 🙌 4 and 🔥 2 reactions.",
  },
  {
    src: "/images/partner-voices/review-erik.jpg",
    alt: "Slack message from Erik V. (Mon 2:42 PM): \"april orders tracking 22% above forecast already. whatever you're doing on the PDP rewrites, keep doing it\" mentioning @Fabian. 🚀 3 and ✅ 2 reactions.",
  },
];

export default function PartnerVoices() {
  return (
    <SectionWrapper className="py-20 md:py-24">
      <div className="flex flex-col items-center gap-14 md:gap-16">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center gap-5 max-w-[720px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-medium leading-[1.08] tracking-[-0.02em] text-heading">
            {renderHeading("What our clients *say.*")}
          </h2>

          <p className="text-body text-[15.5px] md:text-[17px] leading-relaxed">
            Real Slack threads from clients we work with every day.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 w-full max-w-[1280px]">
          {screenshots.map((s, i) => (
            <motion.figure
              key={s.src}
              className="group relative flex flex-col gap-4 m-0"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              aria-label={`Slack message from ${s.name}`}
            >
              {/* Premium card: gradient outer ring (top-light → bottom-dark)
                  + multi-layer shadow + inner top highlight + accent-tinted
                  glow on hover */}
              <div className="relative rounded-2xl p-px bg-gradient-to-b from-white/[0.12] via-white/[0.04] to-transparent transition-all duration-300 group-hover:from-white/[0.18] group-hover:via-white/[0.06]">
                <div
                  className="relative w-full rounded-[15px] overflow-hidden bg-[#181A26]
                             shadow-[0_2px_4px_rgba(0,0,0,0.4),0_12px_24px_-8px_rgba(0,0,0,0.45),0_30px_60px_-20px_rgba(0,0,0,0.55)]
                             transition-all duration-300
                             group-hover:-translate-y-1.5
                             group-hover:shadow-[0_2px_4px_rgba(0,0,0,0.4),0_18px_32px_-8px_rgba(0,0,0,0.55),0_44px_80px_-20px_rgba(0,0,0,0.7),0_0_60px_-20px_rgba(78,123,255,0.25)]"
                >
                  {/* 1px inner top highlight — subtle dimensional hint */}
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="relative w-full" style={{ aspectRatio: "1600 / 440" }}>
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 420px"
                      className="object-cover"
                      priority={i < 2}
                    />
                  </div>
                </div>
              </div>

            </motion.figure>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
