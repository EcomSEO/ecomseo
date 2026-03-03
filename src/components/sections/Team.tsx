"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlowEffect from "@/components/ui/GlowEffect";

const teamMembers = [
  {
    name: "Gjorgi Jovev",
    role: "Outreach & SEO Expert",
    description:
      "SEO Expert with 5+ years of experience specializing in high-quality backlink building, technical SEO, and content optimization. Known for tenacity and results-first mindset.",
    image: "https://framerusercontent.com/images/LFHXY0nxSQzbhGYgd9g8reMSo.png",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Martinijan Trajkovski",
    role: "SEO Strategies & Head of Link-Building",
    description:
      "9+ years of experience. Specializes in market research, competitor intelligence, and white-hat link building strategies that skyrocket ecommerce brands.",
    image: "https://framerusercontent.com/images/7GK5DLrtqk7QeLTPR3zbV0jHZOw.webp",
    linkedin: "https://linkedin.com",
  },
];

export default function Team() {
  return (
    <SectionWrapper className="py-24 md:py-32">
      <div className="flex flex-col gap-12">
        <motion.div
          className="flex flex-col gap-4 max-w-[700px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge text="Team" />
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
            Meet our SEO experts.
          </h2>
          <p className="text-body text-base md:text-lg">
            A lean, focused team of ecommerce SEO specialists who live and
            breathe organic growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlowEffect
                borderRadius={24}
                className="h-full"
                color="rgb(123, 45, 233)"
              >
                <div className="p-8 md:p-10 flex flex-col gap-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden bg-white/5">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-medium text-heading">
                      {member.name}
                    </h3>
                    <span className="text-accent text-sm font-medium uppercase tracking-wide">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-body text-sm leading-relaxed">
                    {member.description}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M13.6 0H2.4C1.08 0 0 1.08 0 2.4v11.2C0 14.92 1.08 16 2.4 16h11.2c1.32 0 2.4-1.08 2.4-2.4V2.4C16 1.08 14.92 0 13.6 0zM4.8 13.6H2.4V6.4h2.4v7.2zM3.6 5.28c-.8 0-1.44-.64-1.44-1.44 0-.8.64-1.44 1.44-1.44.8 0 1.44.64 1.44 1.44 0 .8-.64 1.44-1.44 1.44zM13.6 13.6h-2.4V9.92c0-.88-.016-2.016-1.232-2.016-1.232 0-1.424.96-1.424 1.952v3.744H6.16V6.4h2.304v.992h.032c.32-.608 1.104-1.248 2.272-1.248 2.432 0 2.88 1.6 2.88 3.68v3.776h-.048z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </GlowEffect>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
