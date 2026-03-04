import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ui/Badge";
import GlowEffect from "@/components/ui/GlowEffect";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { intentMatchingToolT } from "@/lib/i18n/translations/intentMatchingTool";
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/intent-matching-tool");
}

export default async function IntentMatchingToolPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = intentMatchingToolT[locale as Locale];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-bg">
        <section className="relative overflow-hidden px-5 md:px-16 pt-[120px] md:pt-[160px] pb-[250px]">
          <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center text-center gap-8">
            <Badge text={t.badge} />
            <div className="space-y-4 max-w-[700px]">
              <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
                {t.heading}
              </h1>
              <p className="text-body text-lg max-w-[500px] mx-auto">
                {t.subtitle}
              </p>
            </div>

            {/* Tool placeholder */}
            <div className="w-full max-w-[800px] rounded-2xl border border-border bg-bg-card p-8 md:p-12 text-left">
              <div className="space-y-6">
                <div>
                  <label className="block text-body text-sm mb-2">
                    {t.label}
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder={t.placeholder}
                      className="flex-1 px-4 py-3 rounded-xl bg-bg border border-border text-heading text-sm placeholder:text-body/50 focus:outline-none focus:border-accent transition-colors"
                    />
                    <button className="px-6 py-3 rounded-xl bg-accent hover:bg-accent/90 text-white font-medium text-sm transition-colors shrink-0">
                      {t.analyze}
                    </button>
                  </div>
                </div>
                <div className="rounded-xl bg-bg border border-border p-6 min-h-[200px] flex items-center justify-center">
                  <p className="text-body text-sm">
                    {t.resultsPlaceholder}
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
