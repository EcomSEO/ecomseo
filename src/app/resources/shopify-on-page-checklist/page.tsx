import type { Metadata } from "next";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import GlowEffect from "@/components/ui/GlowEffect";

export const metadata: Metadata = {
  title:
    "Premium Shopify On-Page SEO Checklist | EcomSEO",
  description:
    "We built a checklist for ecommerce brands on Shopify that want to rank higher in Google. This exact process helped our clients generate 8+ figures.",
  openGraph: {
    title: "Premium Shopify On-Page SEO Checklist | EcomSEO",
    description:
      "This exact process helped our clients generate 8+ figures from competitive keywords in Google.",
  },
};

const checklistFeatures = [
  "Integrations with 3rd-party",
  "Advanced analytics",
  "Team performance tracking",
  "Top grade security",
  "Priority customer support",
  "Detailed usage reports",
];

export default function ShopifyOnPageChecklistPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-bg">
        <section className="relative overflow-hidden px-5 md:px-16 pt-[120px] md:pt-[160px] pb-[250px]">
          <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center text-center gap-2">
            {/* Social proof */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-white-10 border-2 border-bg"
                  />
                ))}
              </div>
              <span className="text-body text-sm">
                Backed by 19+ brand owners
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[796px]">
              This Shopify On-Page Checklist will scale your brand
            </h1>
            <p className="text-body text-base max-w-[619px] mt-4">
              We built a checklist for ecommerce brands on Shopify that want to
              rank higher in Google. This exact process helped our clients
              generate 8+ figures from competitive keywords in Google.
            </p>

            {/* Pricing cards */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              {/* Card 1 */}
              <div className="rounded-2xl border border-border bg-bg-card p-8 max-w-[340px] flex flex-col gap-4">
                <h3 className="text-heading font-semibold text-lg">
                  The full checklist
                </h3>
                <p className="text-body text-sm">Includes:</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-heading font-bold text-3xl font-[family-name:var(--font-figtree)]">
                    $12
                  </span>
                  <span className="text-body text-sm line-through">$17</span>
                  <span className="text-body text-xs">/ one-time</span>
                </div>
                <ul className="space-y-2 mt-2">
                  {checklistFeatures.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-body text-sm"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="rgb(193, 100, 230)"
                        strokeWidth="2"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://w35pmime997.typeform.com/to/eqeeLQvb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent hover:bg-accent/90 text-white font-medium text-sm transition-colors"
                >
                  Get Started Now
                </a>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl border border-border bg-bg-card p-8 max-w-[340px] flex flex-col gap-4">
                <h3 className="text-heading font-semibold text-lg">
                  The full checklist + EcomSEO Consulting Call
                </h3>
                <p className="text-body text-sm">Includes:</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-heading font-bold text-3xl font-[family-name:var(--font-figtree)]">
                    $250
                  </span>
                  <span className="text-body text-xs">- 1 hour consulting</span>
                </div>
                <ul className="space-y-2 mt-2">
                  {checklistFeatures.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-body text-sm"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="rgb(193, 100, 230)"
                        strokeWidth="2"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://w35pmime997.typeform.com/to/eqeeLQvb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-xl border border-border text-heading hover:border-accent font-medium text-sm transition-colors"
                >
                  Get Started Now
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12">
              <a
                href="https://w35pmime997.typeform.com/to/eqeeLQvb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-heading text-bg font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Get the checklist
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
            </div>
          </div>

          {/* Glow */}
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
