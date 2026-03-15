"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LocaleLink from "@/components/ui/LocaleLink";
import Badge from "@/components/ui/Badge";
import Navigation from "@/components/sections/Navigation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import { useLocale } from "@/lib/i18n/useTranslations";
import { teamPageT } from "@/lib/i18n/translations/team";

const teamMembersData = [
  {
    name: "Fabian van Til",
    image: "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
    href: "/team/fabian-van-til",
    linkedin: "https://www.linkedin.com/in/fabianvantil/",
  },
  {
    name: "Martinijan Trajkovski",
    image: "/images/framer/7GK5DLrtqk7QeLTPR3zbV0jHZOw.webp",
    href: "/team/martinijan-trajkovski",
    linkedin: "https://www.linkedin.com/in/martinijan-trajkovski/",
  },
  {
    name: "Dimitar Georgiev",
    image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
    href: "/team/dimitar-georgiev",
    linkedin: "https://www.linkedin.com/in/dimitar-seo/",
  },
  {
    name: "Gjorgi Jovev",
    image: "/images/framer/gjorgi-jovev.png",
    href: "/team/gjorgi-jovev",
    linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
  },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function CultureIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(168,85,247)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(168,85,247)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(168,85,247)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function TeamCard({
  member,
  index,
}: {
  member: {
    name: string;
    role: string;
    description: string;
    image: string;
    href: string;
    linkedin: string;
  };
  index: number;
}) {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
    >
      <LocaleLink
        href={member.href}
        className="group flex flex-col flex-1 rounded-2xl border border-border bg-[#12121a] overflow-hidden transition-all duration-400 hover:border-[rgba(168,85,247,0.35)] hover:bg-[#1a1a28] hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(147,51,234,0.1),0_0_0_1px_rgba(147,51,234,0.15)]"
      >
        <div className="relative w-full aspect-[3/3.5] overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#16162a]">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top transition-transform duration-600 group-hover:scale-[1.04] grayscale-[20%] group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(10,10,15,0.95)]" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(10,10,15,0.6) 80%, rgba(10,10,15,0.95) 100%)' }} />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-lg md:text-xl font-bold text-heading tracking-[-0.01em]">
            {member.name}
          </h3>
          <p className="text-sm font-medium text-accent mt-1.5 mb-4">
            {member.role}
          </p>
          <p className="text-sm text-body leading-relaxed hidden md:block">
            {member.description}
          </p>
          <div className="flex gap-2.5 mt-auto pt-5 border-t border-border">
            <span
              onClick={(e) => {
                e.preventDefault();
                window.open(member.linkedin, "_blank");
              }}
              className="w-9 h-9 rounded-[10px] border border-border bg-[rgba(147,51,234,0.04)] flex items-center justify-center text-body-strong transition-all duration-300 hover:border-[rgba(168,85,247,0.35)] hover:bg-[rgba(147,51,234,0.12)] hover:text-accent hover:-translate-y-0.5"
            >
              <LinkedInIcon />
            </span>
          </div>
        </div>
      </LocaleLink>
    </motion.div>
  );
}

export default function TeamPage() {
  const locale = useLocale();
  const t = teamPageT[locale];

  const teamMembers = teamMembersData.map((member, i) => ({
    ...member,
    role: t.members[i].role,
    description: t.members[i].description,
  }));

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative w-full overflow-hidden">
          <div className="relative px-5 md:px-16 pt-[105px] pb-16 md:pb-20">
            <div className="relative z-[1] mx-auto max-w-[1200px] w-full flex flex-col items-center text-center gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge text={t.badge} />
              </motion.div>

              <motion.h1
                className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[750px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {t.heading}
              </motion.h1>

              <motion.p
                className="text-body text-base md:text-lg font-medium max-w-[540px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {t.subtitle}
              </motion.p>
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

        {/* Team Grid */}
        <section className="w-full px-4 md:px-16 pb-20 md:pb-28">
          <div className="mx-auto max-w-[1200px] w-full">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {teamMembers.map((member, i) => (
                <TeamCard key={member.name} member={member} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="w-full px-4 md:px-16 pb-20 md:pb-28">
          <div className="mx-auto max-w-[1200px] w-full">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-medium leading-[1.1] tracking-[-0.02em] text-heading mb-4">
                {t.culture.heading}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {t.culture.items.map((item, i) => (
                <motion.div
                  key={i}
                  className="p-7 md:p-9 rounded-2xl border border-border bg-[#12121a] transition-all duration-300 hover:border-[rgba(168,85,247,0.35)] hover:bg-[#1a1a28]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-[rgba(147,51,234,0.15)] to-[rgba(168,85,247,0.08)] border border-[rgba(147,51,234,0.2)] flex items-center justify-center mb-5">
                    <CultureIcon index={i} />
                  </div>
                  <h3 className="text-base font-bold text-heading mb-2.5 tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
