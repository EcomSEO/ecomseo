import type { Metadata } from "next";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ui/Badge";
import GlowEffect from "@/components/ui/GlowEffect";

export const metadata: Metadata = {
  title: "Intent Matching Tool — AI Keyword Analyzer | EcomSEO",
  description:
    "Analyze search intent for your ecommerce keywords. Understand what your customers are looking for and optimize your content accordingly.",
  openGraph: {
    title: "Intent Matching Tool — AI Keyword Analyzer | EcomSEO",
    description:
      "Analyze search intent for your ecommerce keywords.",
  },
};

export default function IntentMatchingToolPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-bg">
        <section className="relative overflow-hidden px-5 md:px-16 pt-[120px] md:pt-[160px] pb-[250px]">
          <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center text-center gap-8">
            <Badge text="AI Tool" />
            <div className="space-y-4 max-w-[700px]">
              <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
                Intent Matching Tool
              </h1>
              <p className="text-body text-lg max-w-[500px] mx-auto">
                Analyze search intent for your ecommerce keywords. Understand
                what your customers are looking for and optimize your content
                accordingly.
              </p>
            </div>

            {/* Tool placeholder */}
            <div className="w-full max-w-[800px] rounded-2xl border border-border bg-bg-card p-8 md:p-12 text-left">
              <div className="space-y-6">
                <div>
                  <label className="block text-body text-sm mb-2">
                    Enter your keyword
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="e.g. organic skincare products"
                      className="flex-1 px-4 py-3 rounded-xl bg-bg border border-border text-heading text-sm placeholder:text-body/50 focus:outline-none focus:border-accent transition-colors"
                    />
                    <button className="px-6 py-3 rounded-xl bg-accent hover:bg-accent/90 text-white font-medium text-sm transition-colors shrink-0">
                      Analyze
                    </button>
                  </div>
                </div>
                <div className="rounded-xl bg-bg border border-border p-6 min-h-[200px] flex items-center justify-center">
                  <p className="text-body text-sm">
                    Results will appear here after analysis
                  </p>
                </div>
              </div>
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
