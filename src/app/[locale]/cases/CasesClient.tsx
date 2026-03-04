"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LocaleLink from "@/components/ui/LocaleLink";
import Badge from "@/components/ui/Badge";
import Navigation from "@/components/sections/Navigation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import { useLocale } from "@/lib/i18n/useTranslations";
import { casesPageT } from "@/lib/i18n/translations/cases";

const caseStudyData = [
  {
    href: "/cases/norwegian-health-store",
    image:
      "https://framerusercontent.com/images/jKLk43bNfpNjhQGvnRhYkxJNjQ.webp",
  },
  {
    href: "/cases/ecommerce-brand",
    image:
      "https://framerusercontent.com/images/EeufC2RDWV8GzZB7fBbKfmWJQuc.webp",
  },
  {
    href: "/cases/skyrocket-ecom-site",
    image:
      "https://framerusercontent.com/images/nT2RO8bU8V5MvRjsqPRcXjKiA.webp",
  },
  {
    href: "/cases/norwegian-smart-seo",
    image:
      "https://framerusercontent.com/images/U8W2ek1f8J8lKPXlMlEGVJnMA.webp",
  },
  {
    href: "/cases/dutch-brand",
    image:
      "https://framerusercontent.com/images/XveBJKU8qwY42bC8IYC2qnY0XI.webp",
  },
  {
    href: "/cases/english-health-site",
    image:
      "https://framerusercontent.com/images/pOqYpuGRc2T3mmxrOH6jk7dLGk.webp",
  },
  {
    href: "/cases/dutch-health-brand",
    image:
      "https://framerusercontent.com/images/fYBmJFqXMuLPgEQrC9RMXS2bEQ.webp",
  },
  {
    href: "/cases/swedish-seo-explosion",
    image:
      "https://framerusercontent.com/images/DkD9z15pJoS3dlSyXfBDIu1yg0.webp",
  },
  {
    href: "/cases/beauty-brand-dominated-in-google",
    image:
      "https://framerusercontent.com/images/fYBmJFqXMuLPgEQrC9RMXS2bEQ.webp",
  },
  {
    href: "/cases/jewelry-dutch-brand-ecom",
    image:
      "https://framerusercontent.com/images/XveBJKU8qwY42bC8IYC2qnY0XI.webp",
  },
  {
    href: "/cases/ecom-brand-explode",
    image:
      "https://framerusercontent.com/images/DkD9z15pJoS3dlSyXfBDIu1yg0.webp",
  },
  {
    href: "/cases/dutch-lighting-store",
    image:
      "https://framerusercontent.com/images/pOqYpuGRc2T3mmxrOH6jk7dLGk.webp",
  },
  {
    href: "/cases/swedish-ecom-site",
    image:
      "https://framerusercontent.com/images/nT2RO8bU8V5MvRjsqPRcXjKiA.webp",
  },
  {
    href: "/cases/ecom-swedish-brand",
    image:
      "https://framerusercontent.com/images/jKLk43bNfpNjhQGvnRhYkxJNjQ.webp",
  },
];

function CaseCard({
  study,
  index,
  size = "normal",
}: {
  study: {
    title: string;
    subtitle: string;
    category: string;
    href: string;
    image: string;
  };
  index: number;
  size?: "normal" | "large";
}) {
  const height = size === "large" ? "h-[500px]" : "h-[400px]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <LocaleLink
        href={study.href}
        className={`group relative rounded-3xl overflow-hidden border border-border ${height} block`}
      >
        <Image
          src={study.image}
          alt={study.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3">
          <span className="inline-flex w-fit px-3 py-1.5 text-xs font-medium text-white/80 bg-[rgba(13,13,13,0.56)] border border-border rounded-xl backdrop-blur-sm">
            {study.category}
          </span>
          <h3 className="text-lg font-medium text-heading">{study.title}</h3>
          <p className="text-sm text-body">{study.subtitle}</p>
        </div>
      </LocaleLink>
    </motion.div>
  );
}

export default function CasesPage() {
  const locale = useLocale();
  const t = casesPageT[locale];

  const caseStudies = caseStudyData.map((data, i) => ({
    ...data,
    title: t.cases[i].title,
    subtitle: t.cases[i].subtitle,
    category: t.cases[i].category,
  }));

  return (
    <>
      <Navigation />
      <main>
        <section className="w-full px-5 md:px-16 pt-[140px] pb-0">
          <div className="mx-auto max-w-[1200px] w-full">
            <div className="flex flex-col gap-12">
              {/* Header */}
              <motion.div
                className="flex flex-col gap-4 max-w-[700px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge text={t.badge} />
                <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
                  {t.heading}
                </h1>
                <p className="text-body text-base md:text-lg">
                  {t.subtitle}
                </p>
              </motion.div>

              {/* Top 2 cards side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudies.slice(0, 2).map((study, i) => (
                  <CaseCard
                    key={study.href}
                    study={study}
                    index={i}
                    size="large"
                  />
                ))}
              </div>

              {/* Big featured card */}
              <CaseCard
                study={caseStudies[2]}
                index={2}
                size="large"
              />

              {/* Remaining cards in 3-column grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {caseStudies.slice(3).map((study, i) => (
                  <CaseCard key={study.href} study={study} index={i + 3} />
                ))}
              </div>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
