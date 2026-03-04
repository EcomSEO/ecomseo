import type { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/sections/Navigation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import GlowEffect from "@/components/ui/GlowEffect";

export const metadata: Metadata = {
  title: "Why We Share So Much Knowledge | EcomSEO",
  description:
    "We believe in goodwill. We know we're the best in the game. We develop industry-leading tactics and share them freely.",
  openGraph: {
    title: "Why We Share So Much Knowledge | EcomSEO",
    description:
      "We believe in goodwill. We develop industry-leading tactics and share them freely.",
  },
};

const values = [
  {
    title: "100% Transparency",
    description:
      "Live dashboards, Slack/WhatsApp channels, and monthly strategy calls. No black-box SEO. Full visibility into everything we do.",
  },
  {
    title: "Proven Process",
    description:
      "Developed by SEO specialists who've scaled 20+ ecommerce brands. Every tactic is battle-tested on real stores.",
  },
  {
    title: "Profit-Focused",
    description:
      "We prioritize high ROI tasks. Every recommendation ties back to revenue impact, not vanity metrics.",
  },
];

const faqs = [
  {
    question: "What can I expect from your free resources?",
    answer:
      "Actionable, no-fluff ecommerce SEO knowledge. We share real strategies we use with our clients — not watered-down blog content. Expect checklists, frameworks, and step-by-step guides you can implement immediately.",
  },
  {
    question: "Why give away your best tactics?",
    answer:
      "Because the brands that can execute on their own will. And the brands that want experts to do it for them will come to us — knowing we're the real deal. It's a win-win.",
  },
];

export default function WhyWeSharePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-bg">
        {/* Hero */}
        <section className="relative w-full px-5 md:px-16 pt-[120px] md:pt-[160px] pb-20 overflow-hidden">
          <div className="mx-auto max-w-[1200px] flex flex-col items-center text-center gap-6 relative z-10">
            <Badge text="Why we share" />
            <h1 className="text-[36px] md:text-[52px] lg:text-[64px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[800px]">
              Why share so much knowledge? Goodwill&apos;s why.
            </h1>
            <p className="text-body text-base md:text-lg max-w-[600px]">
              We believe in goodwill. We know we&apos;re the best in the game. We
              develop industry-leading tactics.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <Button
                href="https://w35pmime997.typeform.com/to/eqeeLQvb"
                variant="primary"
                external
              >
                Get in Touch
              </Button>
              <Button href="/#projects" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
          {/* Glow background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
          </div>
        </section>

        {/* Transparency Section */}
        <section className="w-full px-5 md:px-16 pb-20">
          <div className="mx-auto max-w-[1200px] flex flex-col items-center text-center gap-6">
            <Badge text="Transparency" />
            <h2 className="text-[32px] md:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[700px]">
              Sharing is caring. We care.
            </h2>
            <p className="text-body text-base md:text-lg max-w-[600px] leading-relaxed">
              We share our results because we believe in a domino effect. When
              you see what&apos;s possible, you invest in growth. We work with a
              limited group of ecommerce businesses — which means every client
              gets our full attention and best work.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full px-5 md:px-16 pb-20">
          <div className="mx-auto max-w-[1200px] flex flex-col items-center text-center gap-8">
            <Badge text="Process" />
            <h2 className="text-[32px] md:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[700px]">
              Sharing is our marketing.
            </h2>
            <p className="text-body text-base md:text-lg max-w-[600px]">
              We don&apos;t have a sales team. We just show what we do.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-4">
              {values.map((value) => (
                <GlowEffect key={value.title} className="w-full">
                  <div className="p-6 md:p-8 flex flex-col gap-3 h-full">
                    <h3 className="text-heading font-medium text-lg">
                      {value.title}
                    </h3>
                    <p className="text-body text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </GlowEffect>
              ))}
            </div>
          </div>
        </section>

        {/* Team / Ecom Understanding Section */}
        <section className="w-full px-5 md:px-16 pb-20">
          <div className="mx-auto max-w-[1200px] flex flex-col items-center text-center gap-8">
            <Badge text="We understand ecom" />
            <div className="rounded-2xl bg-bg-card border border-border p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 w-full max-w-[900px]">
              <Image
                src="https://framerusercontent.com/images/pLr2VAAJPydel6VZNLZAsJP6k.png"
                alt="Fabian van Til"
                width={160}
                height={160}
                className="rounded-full shrink-0"
              />
              <div className="text-left flex flex-col gap-3">
                <h3 className="text-[24px] md:text-[32px] font-medium leading-[1.2] tracking-[-0.02em] text-heading">
                  We speak the same language.
                </h3>
                <p className="text-body text-base leading-relaxed">
                  We breath and talk e-commerce (and Dutch). That&apos;s
                  specialisation. Every conversation, every recommendation, and
                  every strategy is built around understanding what makes online
                  stores succeed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full px-5 md:px-16 pb-20">
          <div className="mx-auto max-w-[800px] flex flex-col gap-6">
            <h2 className="text-[28px] md:text-[36px] font-medium leading-[1.1] tracking-[-0.02em] text-heading text-center mb-4">
              Common Questions
            </h2>
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl bg-bg-card border border-border p-6"
              >
                <h3 className="text-heading font-medium text-base mb-3">
                  {faq.question}
                </h3>
                <p className="text-body text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <CTA />
        <Footer />
      </main>
    </>
  );
}
