"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlowEffect from "@/components/ui/GlowEffect";

const services = [
  {
    title: "AI Infrastructures",
    description:
      "Leverage our expertise and become a digital pioneer in the world of AI. Invest in your team by partnering up with EcomSEO and take our custom AI infrastructure.",
    span: 1,
  },
  {
    title: "Acquisitions & Scaling",
    description:
      "E-commerce is in our nature. SEO is our craft. Therefore we acquire and partner with brands. Because of this, we understand e-commerce like no other SEO agency.",
    span: 1,
  },
  {
    title: "Done-For-You SEO",
    description:
      "SEO isn't hard. If you know what you're doing.",
    span: 2,
  },
];

export default function Services() {
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
          <Badge text="Services" />
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
            How can we help you?
          </h2>
          <p className="text-body text-base md:text-lg">
            Our team is focused on growing your brand exponentially through SEO.
            All of our offers are tailor made.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className={service.span === 2 ? "md:col-span-2" : ""}
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
                <div className="p-8 md:p-10 flex flex-col gap-4 min-h-[200px]">
                  <h3 className="text-[24px] md:text-[32px] font-medium text-heading">
                    {service.title}
                  </h3>
                  <p className="text-body text-sm leading-relaxed max-w-[500px]">
                    {service.description}
                  </p>
                </div>
              </GlowEffect>
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
            Get in touch
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
