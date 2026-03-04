import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import GlowEffect from "@/components/ui/GlowEffect";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonLd";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { solutionsPageT } from "@/lib/i18n/translations/resources/solutions";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/resources/solutions");
}


export default async function SolutionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = solutionsPageT[locale as Locale];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(locale as Locale, [
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources" },
        { name: "Solutions", path: "/resources/solutions" },
      ])} />
      <Navigation />
      <main className="min-h-screen bg-bg">
        <section className="relative overflow-hidden px-5 md:px-16 pt-[120px] md:pt-[160px] pb-[250px]">
          <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center text-center gap-8">
            <Badge text={t.badge} />
            <div className="space-y-4 max-w-[700px]">
              <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
                {t.heading}
              </h1>
              <p className="text-body text-lg max-w-[400px] mx-auto">
                {t.subtitle}
              </p>
            </div>
            <Button href="/" variant="primary" size="large">
              {t.cta}
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
