"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import LocaleLink from "@/components/ui/LocaleLink";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLocale } from "@/lib/i18n/useTranslations";
import { serviceDetailsT } from "@/lib/i18n/translations/home";

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

/* Aurora gradients cycling across 8 cards */
const cardGradients = [
  "radial-gradient(ellipse at 0% 30%, rgba(123, 45, 233, 0.22) 0%, transparent 60%)",
  "radial-gradient(ellipse at 100% 40%, rgba(193, 100, 230, 0.20) 0%, transparent 60%)",
  "radial-gradient(ellipse at 50% 80%, rgba(80, 80, 255, 0.18) 0%, transparent 60%)",
  "radial-gradient(ellipse at 100% 80%, rgba(0, 170, 255, 0.18) 0%, transparent 60%)",
  "radial-gradient(ellipse at 0% 80%, rgba(140, 70, 255, 0.20) 0%, transparent 60%)",
  "radial-gradient(ellipse at 80% 20%, rgba(123, 45, 233, 0.18) 0%, transparent 60%)",
  "radial-gradient(ellipse at 20% 60%, rgba(193, 100, 230, 0.18) 0%, transparent 60%)",
  "radial-gradient(ellipse at 60% 40%, rgba(80, 120, 255, 0.16) 0%, transparent 60%)",
];

/* 40x40 outline icons matching site style: white/50 + accent purple */
const serviceIcons: React.ReactNode[] = [
  /* Ecommerce SEO — store/storefront */
  <svg key="ecom" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M6 16l4-10h20l4 10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    <rect x="6" y="16" width="28" height="18" rx="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
    <path d="M16 34v-10h8v10" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    <circle cx="13" cy="16" r="3" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
    <circle cx="27" cy="16" r="3" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
  </svg>,
  /* Shopify SEO — shopping bag */
  <svg key="shopify" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M10 12l2-6h16l2 6v22a2 2 0 01-2 2H12a2 2 0 01-2-2V12z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    <path d="M15 12v-2a5 5 0 0110 0v2" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M15 22h10M15 27h6" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  /* WooCommerce SEO — plugin/gear */
  <svg key="woo" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="14" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
    <circle cx="20" cy="20" r="5" stroke="rgb(193,100,230)" strokeWidth="1.5" fill="none" />
    <path d="M20 6v4M20 30v4M6 20h4M30 20h4M10 10l2.8 2.8M27.2 27.2l2.8 2.8M30 10l-2.8 2.8M12.8 27.2L10 30" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  /* BigCommerce SEO — rocket/growth */
  <svg key="bigc" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M20 4c0 0-12 8-12 22h24C32 12 20 4 20 4z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    <circle cx="20" cy="20" r="3" stroke="rgb(193,100,230)" strokeWidth="1.5" fill="none" />
    <path d="M16 32l4-6 4 6" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>,
  /* Link Building — chain link */
  <svg key="links" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M17 23l-3 3a5 5 0 01-7-7l6-6a5 5 0 017 0" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M23 17l3-3a5 5 0 017 7l-6 6a5 5 0 01-7 0" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>,
  /* Keyword Research — magnifier + key */
  <svg key="kw" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="18" cy="18" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
    <path d="M26 26l8 8" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 16h8M14 20h5" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  /* Content Writing — pen/document */
  <svg key="content" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="8" y="4" width="18" height="32" rx="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
    <path d="M13 12h8M13 17h6M13 22h8M13 27h4" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M30 8l-4 20-2 4 4-2 4-20-2-2z" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
  </svg>,
  /* Amazon SEO — package/box with A */
  <svg key="amazon" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="6" y="10" width="28" height="22" rx="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
    <path d="M6 18h28" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
    <path d="M16 24l4-8 4 8M17.5 22h5" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>,
];

export default function ServiceDetails() {
  const locale = useLocale();
  const t = serviceDetailsT[locale];

  return (
    <SectionWrapper className="py-16">
      <div className="flex flex-col items-center gap-16">
        <motion.div
          className="flex flex-col items-center gap-6 max-w-[700px] text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge text={t.badge} />
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
            {renderHeading(t.heading)}
          </h2>
          <p className="text-body text-base md:text-lg">{t.subtext}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {t.items.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <LocaleLink href={item.href} className="block h-full group">
                <div className="relative rounded-3xl border border-border overflow-hidden h-full">
                  <div className="absolute inset-0 bg-bg-card" />
                  <div
                    className="absolute inset-0"
                    style={{ background: cardGradients[i % cardGradients.length] }}
                  />
                  <div className="relative z-10 p-6 md:p-8 flex flex-col gap-3">
                    <div className="mb-1">
                      {serviceIcons[i] || null}
                    </div>
                    <h3 className="text-base md:text-lg font-medium text-heading group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-body text-sm leading-relaxed flex-1">
                      {item.description}
                    </p>
                    <span className="text-accent text-sm font-medium mt-1">
                      {item.linkText} →
                    </span>
                  </div>
                </div>
              </LocaleLink>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button href="/pricing" variant="secondary" size="large">
            {t.cta}
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
