import type { Metadata } from "next";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import GlowEffect from "@/components/ui/GlowEffect";

export const metadata: Metadata = {
  title: "Solutions — Partners, References & Plugs | EcomSEO",
  description:
    "Partners, references and plugs that help you scale. We're building our network and are soon ready to make it publicly available.",
  openGraph: {
    title: "Solutions — Partners, References & Plugs | EcomSEO",
    description: "Partners, references and plugs that help you scale.",
  },
};

export default function SolutionsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-bg">
        <section className="relative overflow-hidden px-5 md:px-16 pt-[120px] md:pt-[160px] pb-[250px]">
          <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center text-center gap-8">
            <Badge text="Solutions" />
            <div className="space-y-4 max-w-[700px]">
              <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
                Partners, references, plugs That Help You Scale
              </h1>
              <p className="text-body text-lg max-w-[400px] mx-auto">
                Please be a little more patient. We&apos;re building our network
                and are soon ready to make it publicly available. Why? Goodwill.
              </p>
            </div>
            <Button href="/" variant="primary" size="large">
              Go back to Home
            </Button>
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
