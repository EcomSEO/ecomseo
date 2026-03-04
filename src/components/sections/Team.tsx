"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLocale } from "@/lib/i18n/useTranslations";
import { teamT } from "@/lib/i18n/translations/home";

const teamImages = [
  "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
  "/images/framer/LFHXY0nxSQzbhGYgd9g8reMSo.png",
  "/images/framer/7GK5DLrtqk7QeLTPR3zbV0jHZOw.webp",
];

export default function Team() {
  const locale = useLocale();
  const t = teamT[locale];

  const teamMembers = t.members.map((member, i) => ({
    name: member.name,
    role: member.role,
    image: teamImages[i],
  }));

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
          <Badge text={t.badge} />
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
            {t.heading}
          </h2>
          <p className="text-body text-base md:text-lg">
            {t.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              className="group relative rounded-3xl overflow-hidden border border-border h-[400px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${member.image})` }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-3">
                <h3 className="text-base font-medium text-heading">
                  {member.name}
                </h3>
                <span className="text-sm text-body">{member.role}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button
            href="https://w35pmime997.typeform.com/to/eqeeLQvb"
            variant="primary"
            size="large"
            external
          >
            {t.cta}
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
