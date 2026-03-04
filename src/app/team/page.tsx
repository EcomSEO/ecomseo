"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Navigation from "@/components/sections/Navigation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const teamMembers = [
  {
    name: "Fabian van Til",
    role: "Strategy & Innovation",
    image:
      "https://framerusercontent.com/images/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
    href: "/team/fabian-van-til",
  },
  {
    name: "Martinijan Trajkovski",
    role: "Off-Page Wizard",
    image:
      "https://framerusercontent.com/images/7GK5DLrtqk7QeLTPR3zbV0jHZOw.webp",
    href: "/team/martinijan-trajkovski",
  },
  {
    name: "Dimitar Georgiev",
    role: "Technical Jedi",
    image:
      "https://framerusercontent.com/images/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
    href: "/team/dimitar-georgiev",
  },
  {
    name: "Gjorgi Jovev",
    role: "On-Page & PR Maestro",
    image:
      "https://framerusercontent.com/images/LFHXY0nxSQzbhGYgd9g8reMSo.png",
    href: "/team/gjorgi-jovev",
  },
];

const cultureItems = [
  {
    title: "We say what we do, and do what we say.",
    description:
      "Communication & results. That\u2019s what drives our agency. We love getting involved deep into projects, and we love to give Ecommerce insights where we can.",
  },
  {
    title: "Fast-paced & goal-oriented",
    description:
      "Look. In SEO it\u2019s easy to get lost in the details. However, we don\u2019t. Why? Profit-focused goal setting with proven frameworks that leverage on big movers rather than small optimisations.",
  },
  {
    title: "AI\u2019s ambassadors",
    description:
      "We invest time & capital into building AI infrastructures (custom) for every project. Our SEO content output is 11.4x more effective than old-fashioned content writing",
  },
];

function TeamCard({ member }: { member: (typeof teamMembers)[0] }) {
  return (
    <Link
      href={member.href}
      className="group relative flex-shrink-0 w-[380px] h-[400px] rounded-3xl overflow-hidden border border-border block"
    >
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-3">
        <h3 className="text-base font-medium text-heading">{member.name}</h3>
        <span className="text-sm text-body">{member.role}</span>
      </div>
    </Link>
  );
}

export default function TeamPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative w-full overflow-hidden">
          <div className="relative px-5 md:px-16 pt-[78px] pb-24">
            <div className="relative z-[1] mx-auto max-w-[1200px] w-full flex flex-col items-center text-center gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge text="Our Team" />
              </motion.div>

              <motion.h1
                className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[750px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Meet the team that drives results for your brand
              </motion.h1>

              <motion.p
                className="text-body text-base md:text-lg font-medium max-w-[402px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                The only team in the world with rich expertise &amp; experience
                both in direct-response ecommerce and SEO.
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

        {/* Team Ticker */}
        <section className="w-full py-12 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex animate-team-ticker gap-6">
              {[...teamMembers, ...teamMembers, ...teamMembers].map(
                (member, i) => (
                  <TeamCard key={`${member.name}-${i}`} member={member} />
                )
              )}
            </div>
          </motion.div>
        </section>

        {/* Culture Section */}
        <section className="w-full px-5 md:px-16 py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] w-full">
            <div className="flex flex-col lg:flex-row gap-16">
              {/* Team Photo */}
              <motion.div
                className="relative w-full lg:w-1/2 aspect-[4/3] rounded-xl overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="https://framerusercontent.com/images/bAgme6Zne4dPOBGSkAqQH3x2Wc.jpg"
                  alt="EcomSEO Team"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Culture Content */}
              <motion.div
                className="flex flex-col gap-8 lg:w-1/2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-[28px] md:text-[36px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
                  Culture makes the dream work
                </h2>

                <div className="flex flex-col gap-8">
                  {cultureItems.map((item, i) => (
                    <div key={i} className="flex flex-col gap-4">
                      <h3 className="text-base font-medium text-heading">
                        {item.title}
                      </h3>
                      <p className="text-sm text-body leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
