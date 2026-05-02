"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLocale } from "@/lib/i18n/useTranslations";
import { teamT } from "@/lib/i18n/translations/home";

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

const fabianImage = "/images/framer/fabian-van-til-new.jpeg";

export default function Team() {
  const locale = useLocale();
  const t = teamT[locale];

  const fabian = { ...t.members[0], image: fabianImage };

  return (
    <SectionWrapper className="py-16">
      <div className="flex flex-col gap-16">
        {/* ─── Hero row: Fabian photo + text side by side ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left – Fabian photo card */}
          <motion.div
            className="relative rounded-3xl overflow-hidden border border-border h-[480px] lg:h-[520px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={fabian.image}
              alt={fabian.name}
              title={fabian.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            {/* Name + role at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-1">
              <h3 className="text-lg font-medium text-heading">
                {fabian.name}
              </h3>
              <span className="text-sm text-body">{fabian.role}</span>
            </div>
          </motion.div>

          {/* Right – text content */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Badge text={t.badge} />
            <h2 className="text-[32px] md:text-[44px] lg:text-[52px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
              {renderHeading(t.heading)}
            </h2>
            <p className="text-body text-base md:text-lg leading-relaxed">
              {t.description}
            </p>
            <div className="pt-2">
              <Button
                href="/demo"
                variant="primary"
                size="large"
              >
                {t.cta} &nbsp;→
              </Button>
            </div>
          </motion.div>
        </div>

      </div>
    </SectionWrapper>
  );
}
