import type { Metadata } from "next";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ui/Badge";
import GlowEffect from "@/components/ui/GlowEffect";

export const metadata: Metadata = {
  title: "AI Shopping — Get Your Products on LLMs Like ChatGPT | EcomSEO",
  description:
    "Your products are invisible on AI, you can do something about it today. Perhaps the biggest opportunity in 2025.",
  openGraph: {
    title: "AI Shopping — Get Your Products on LLMs Like ChatGPT | EcomSEO",
    description:
      "Your products are invisible on AI. Perhaps the biggest opportunity in 2025.",
  },
};

const facts = [
  "1 billion+ searches hit ChatGPT every week",
  "Only 5 product cards show per query – WIN or DISAPPEAR",
  "Early movers grab free clicks before CPC auctions roll out",
];

export default function SearchProductDiscoveryPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-bg">
        <section className="relative overflow-hidden px-5 md:px-16 pt-[120px] md:pt-[160px] pb-[250px]">
          <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center text-center gap-4">
            <Badge text="AI Shopping" />

            <div className="space-y-8 max-w-[700px]">
              <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
                Get your products on LLM&apos;s like ChatGPT before your
                competitors do
              </h1>
              <p className="text-body text-lg max-w-[600px] mx-auto">
                Your products are invisible on AI, you can do something about it
                today. Perhaps the biggest opportunity in 2025.
              </p>
            </div>

            <a
              href="https://cal.com/fabianvantil/llm-seo-optimisation-audit"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-heading text-bg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Get a free audit
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            {/* Facts card */}
            <div className="relative mt-8 max-w-[450px] w-full rounded-3xl border border-border bg-bg-ui p-8 text-left overflow-hidden">
              <div className="relative z-10 space-y-3">
                {facts.map((fact) => (
                  <div key={fact} className="flex items-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="rgb(193, 100, 230)"
                      strokeWidth="2"
                      className="shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-heading text-sm">{fact}</span>
                  </div>
                ))}
              </div>
              {/* Card glow */}
              <div className="absolute top-[-400px] right-[-260px] w-[500px] h-[500px] rotate-[228deg] pointer-events-none">
                <GlowEffect
                  color="rgba(123, 45, 233, 0.3)"
                  duration={8}
                  blurRadius={40}
                  borderRadius={500}
                />
              </div>
            </div>
          </div>

          {/* Background glow */}
          <div className="absolute bottom-[-400px] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] pointer-events-none">
            <GlowEffect
              color="rgba(123, 45, 233, 0.4)"
              duration={8}
              blurRadius={40}
              borderRadius={500}
            />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
