"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Navigation from "@/components/sections/Navigation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import { useLocale } from "@/lib/i18n/useTranslations";
import { contactPageT } from "@/lib/i18n/translations/contact";

function FAQItem({
  item,
  index,
}: {
  item: { question: string; answer: string };
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-base font-medium text-heading pr-4">
          {item.question}
        </span>
        <span className="text-body flex-shrink-0">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={`transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          >
            <path
              d="M10 4v12M4 10h12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-sm text-body leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const locale = useLocale();
  const t = contactPageT[locale];

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative w-full overflow-hidden">
          <div className="relative px-5 md:px-16 pt-[78px] pb-[250px]">
            <div className="relative z-[1] mx-auto max-w-[1200px] w-full flex flex-col items-center text-center gap-4">
              <div className="flex flex-col items-center gap-[7px]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-bg-nav backdrop-blur-sm"
                >
                  <span className="text-sm text-body font-medium">
                    {t.hero.badge}
                  </span>
                </motion.div>

                <motion.h1
                  className="text-[40px] md:text-[64px] lg:text-[80px] font-medium leading-[1.05] tracking-[-0.03em] text-heading max-w-[796px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {t.hero.heading}
                </motion.h1>

                <motion.p
                  className="text-body text-base md:text-lg font-medium max-w-[619px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {t.hero.subtitle}
                </motion.p>

                <motion.div
                  className="flex items-center gap-6 py-4"
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
                    {t.hero.openForm}
                  </Button>
                  <Button href="/contact#team" variant="secondary" size="large">
                    {t.hero.learnMore}
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Glow effect */}
            <div
              className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-0"
              style={{ width: 1200, height: 800, bottom: -400 }}
            >
              <div
                className="absolute animate-glow-rotate"
                style={{
                  width: 400,
                  height: 400,
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
              <div
                className="absolute"
                style={{
                  width: 300,
                  height: 300,
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
              <div
                className="absolute"
                style={{
                  width: 300,
                  height: 300,
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

        {/* Action Buttons + Form */}
        <section className="w-full px-5 md:px-16 -mt-40 relative z-10">
          <div className="mx-auto max-w-[800px] w-full flex flex-col gap-10">
            {/* Action buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://wa.link/2ls6pk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center gap-4 p-5 h-20 rounded-2xl border border-border bg-bg-ui hover:border-border-strong transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-accent flex-shrink-0"
                >
                  <path
                    d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1zm0 0a5 5 0 0 0 5 5m0 0h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                <span className="text-heading font-medium text-base">
                  {t.actions.whatsapp}
                </span>
              </a>
              <a
                href="https://cal.com/fabianvantil/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center gap-4 p-5 h-20 rounded-2xl border border-border bg-bg-ui hover:border-border-strong transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-accent flex-shrink-0"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="16"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M3 10h18M8 2v4M16 2v4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-heading font-medium text-base">
                  {t.actions.book30min}
                </span>
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex flex-col gap-2.5">
                  <label className="text-sm font-medium text-heading">
                    {t.form.firstName}
                  </label>
                  <input
                    type="text"
                    placeholder={t.form.firstNamePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-bg-input border border-border text-heading text-sm placeholder:text-body focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2.5">
                  <label className="text-sm font-medium text-heading">
                    {t.form.lastName}
                  </label>
                  <input
                    type="text"
                    placeholder={t.form.lastNamePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-bg-input border border-border text-heading text-sm placeholder:text-body focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="text-sm font-medium text-heading">
                  {t.form.email}
                </label>
                <input
                  type="email"
                  placeholder={t.form.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-bg-input border border-border text-heading text-sm placeholder:text-body focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="text-sm font-medium text-heading">
                  {t.form.phone}
                </label>
                <input
                  type="tel"
                  placeholder={t.form.phonePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-bg-input border border-border text-heading text-sm placeholder:text-body focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="text-sm font-medium text-heading">
                  {t.form.website}
                </label>
                <input
                  type="url"
                  placeholder={t.form.websitePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-bg-input border border-border text-heading text-sm placeholder:text-body focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="text-sm font-medium text-heading">
                  {t.form.howCanWeHelp}
                </label>
                <textarea
                  rows={4}
                  placeholder={t.form.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-bg-input border border-border text-heading text-sm placeholder:text-body focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium text-sm hover:opacity-90 transition-opacity"
              >
                {t.form.sendEmail}
              </button>
            </motion.form>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="w-full px-5 md:px-16 py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] w-full flex flex-col items-center gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge text={t.team.badge} />
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center gap-16 w-full">
              {/* Fabian Card */}
              <motion.div
                className="relative w-[380px] h-[400px] rounded-3xl overflow-hidden border border-border flex-shrink-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp"
                  alt="Fabian van Til"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-3">
                  <h3 className="text-base font-medium text-heading">
                    Fabian van Til
                  </h3>
                  <span className="text-sm text-body">
                    {t.team.fabianRole}
                  </span>
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                className="flex flex-col gap-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-[28px] md:text-[36px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[750px]">
                  {t.team.heading}
                </h2>
                <p className="text-body text-base md:text-lg max-w-[402px]">
                  {t.team.description}
                </p>
                <Button href="/team/fabian-van-til" variant="primary">
                  {t.team.fabianCta}
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full px-5 md:px-16 py-16 md:py-24">
          <div className="mx-auto max-w-[800px] w-full flex flex-col gap-6">
            {t.faqItems.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}
            <div className="flex justify-center pt-4">
              <Button href="/faq" variant="primary">
                {t.checkAllFaq}
              </Button>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
