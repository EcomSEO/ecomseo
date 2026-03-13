"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/sections/Navigation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import { useLocale } from "@/lib/i18n/useTranslations";
import { teamMemberDetailT } from "@/lib/i18n/translations/teamMemberDetail";

interface TeamMember {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  image: string;
  bio: string;
  skills: string[];
  interests: string[];
  cta: {
    primary: { label: string; href: string; icon: "phone" | "mail" };
    secondary?: { label: string; href: string };
  };
  socials: { platform: string; href: string }[];
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 256 256"
      fill="currentColor"
    >
      <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 256 256"
      fill="currentColor"
    >
      <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z" />
    </svg>
  );
}

function LaptopIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 256 256"
      fill="currentColor"
    >
      <path d="M232,168h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v96H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V176A8,8,0,0,0,232,168ZM48,72a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8v96H48ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 1 1-2.882 0 1.441 1.441 0 0 1 2.882 0z" />
    </svg>
  );
}

const socialIcons: Record<string, React.ComponentType> = {
  YouTube: YouTubeIcon,
  LinkedIn: LinkedInIcon,
  X: XIcon,
  Instagram: InstagramIcon,
};

export default function TeamMemberPage({ member }: { member: TeamMember }) {
  const locale = useLocale();
  const t = teamMemberDetailT[locale];
  const firstName = member.name.split(" ")[0];

  return (
    <>
      <Navigation />
      <main>
        {/* Hero / Profile Section */}
        <section className="relative w-full overflow-hidden">
          <div className="relative px-5 md:px-16 pt-[105px] pb-16">
            <div className="relative z-[1] mx-auto max-w-[1000px] w-full">
              <motion.div
                className="flex flex-col lg:flex-row gap-8 items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Profile Card */}
                <div className="w-full lg:w-[35%] flex-shrink-0">
                  <div className="relative rounded-lg overflow-hidden border border-border bg-[rgba(250,250,250,0.03)]">
                    <div className="relative w-full aspect-[3/4]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="flex flex-col gap-6 lg:pt-4 flex-1">
                  <div className="flex flex-col gap-3">
                    <h1 className="text-[32px] md:text-[44px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
                      {member.name}
                    </h1>
                    <p className="text-body text-base md:text-lg font-medium">
                      {member.tagline}
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={member.cta.primary.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-b from-[rgb(123,45,233)] to-[rgb(100,30,200)] text-white text-sm font-medium hover:brightness-110 transition-all"
                    >
                      {member.cta.primary.icon === "phone" ? (
                        <PhoneIcon />
                      ) : (
                        <MailIcon />
                      )}
                      {member.cta.primary.label}
                    </Link>
                    {member.cta.secondary && (
                      <Link
                        href={member.cta.secondary.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-heading text-sm font-medium hover:bg-white/5 transition-all"
                      >
                        <LaptopIcon />
                        {member.cta.secondary.label}
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
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
                  opacity: 0.4,
                }}
              />
            </div>
          </div>
        </section>

        {/* Expert Area / Skills */}
        <section className="w-full px-5 md:px-16 py-12">
          <div className="mx-auto max-w-[1000px] w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[20px] md:text-[24px] font-medium text-heading mb-8">
                {t.expertArea}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {member.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 px-5 py-4 rounded-lg border border-border bg-[rgb(13,13,13)]"
                  >
                    <div className="w-2 h-2 rounded-full bg-[rgb(123,45,233)] flex-shrink-0" />
                    <span className="text-sm text-heading font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* About / Bio */}
        <section className="w-full px-5 md:px-16 py-12">
          <div className="mx-auto max-w-[1000px] w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[20px] md:text-[24px] font-medium text-heading mb-6">
                {t.about} {firstName}
              </h2>
              <p className="text-body text-base leading-relaxed max-w-[800px]">
                {member.bio}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Interests / Hobbies */}
        <section className="w-full px-5 md:px-16 py-12">
          <div className="mx-auto max-w-[1000px] w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[20px] md:text-[24px] font-medium text-heading mb-8">
                {t.interests}
              </h2>
              <div className="flex flex-wrap gap-3">
                {member.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-5 py-2.5 rounded-full border border-border bg-[rgb(13,13,13)] text-sm text-body font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Social Links */}
        <section className="w-full px-5 md:px-16 py-12">
          <div className="mx-auto max-w-[1000px] w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[20px] md:text-[24px] font-medium text-heading mb-8">
                {t.connectWith} {firstName}
              </h2>
              <div className="flex flex-wrap gap-4">
                {member.socials.map((social) => {
                  const Icon = socialIcons[social.platform];
                  return (
                    <Link
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-3 rounded-lg border border-border bg-[rgb(13,13,13)] text-body hover:text-heading hover:border-[rgba(255,255,255,0.24)] transition-all"
                    >
                      {Icon && <Icon />}
                      <span className="text-sm font-medium">
                        {social.platform}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
