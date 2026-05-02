import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import LocaleLink from "@/components/ui/LocaleLink";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/not-a-fit");
}

/**
 * Disqualification landing for prospects below the audit revenue floor
 * (currently €30K/mo). Reached when iClosed redirects on form fail OR
 * when a prospect explicitly self-selects out. Captures email into the
 * nurture list instead of dropping them entirely.
 *
 * Design intent: respectful, honest, useful. No upsell pressure. The
 * "what to do instead" path keeps the brand reputation high and brings
 * 10–20% of these leads back when they cross the threshold (see
 * SKILL.md §5.5).
 */
export default function NotAFitPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="relative w-full overflow-hidden">
          <div className="relative px-6 md:px-8 lg:px-16 pt-[105px] pb-20">
            <div className="relative z-[1] mx-auto max-w-[760px] w-full flex flex-col items-center text-center gap-6">
              <span className="text-[11px] tracking-[0.18em] text-accent/80 uppercase">
                Honest answer first
              </span>

              <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-[-0.03em] text-heading max-w-[680px]">
                We&apos;re not the right fit for you right now
              </h1>

              <p className="text-body text-base md:text-lg max-w-[620px] leading-relaxed">
                Our retainer engagements are designed for ecom brands doing
                €30,000+/month in revenue. Below that floor, our work simply
                can&apos;t pay for itself fast enough — and we&apos;d rather
                tell you that now than waste your time on a sales call.
              </p>

              <div className="w-full max-w-[640px] rounded-2xl border border-border bg-bg-card p-6 md:p-8 mt-4 flex flex-col gap-5 text-left">
                <div className="flex items-center gap-2 text-[11px] tracking-[0.18em] text-accent/80 uppercase">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M12 22s-8-4.5-8-12V5l8-3 8 3v5c0 7.5-8 12-8 12z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Here&apos;s what to do instead
                </div>

                <ol className="flex flex-col gap-4 list-none">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/10 border border-accent/30 text-accent text-[12px] font-semibold flex items-center justify-center">
                      1
                    </span>
                    <div className="flex-1">
                      <p className="text-[14.5px] text-heading font-medium leading-snug">
                        Run our 23 free SEO tools yourself
                      </p>
                      <p className="text-[13px] text-body leading-relaxed mt-0.5">
                        Same tooling we use on paying clients. Audit your store
                        in 30 minutes — totally free, no email required.
                      </p>
                      <LocaleLink
                        href="/tools"
                        className="inline-flex items-center gap-1 text-[13px] text-accent hover:text-white transition-colors mt-1.5"
                      >
                        Browse all 23 tools →
                      </LocaleLink>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/10 border border-accent/30 text-accent text-[12px] font-semibold flex items-center justify-center">
                      2
                    </span>
                    <div className="flex-1">
                      <p className="text-[14.5px] text-heading font-medium leading-snug">
                        Work through the EcomSEO Academy
                      </p>
                      <p className="text-[13px] text-body leading-relaxed mt-0.5">
                        66 in-depth lessons covering everything from search
                        fundamentals to platform-specific SEO. Built for ecom
                        founders.
                      </p>
                      <LocaleLink
                        href="/academy"
                        className="inline-flex items-center gap-1 text-[13px] text-accent hover:text-white transition-colors mt-1.5"
                      >
                        Open the Academy →
                      </LocaleLink>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/10 border border-accent/30 text-accent text-[12px] font-semibold flex items-center justify-center">
                      3
                    </span>
                    <div className="flex-1">
                      <p className="text-[14.5px] text-heading font-medium leading-snug">
                        Come back when you&apos;re past €30K/month
                      </p>
                      <p className="text-[13px] text-body leading-relaxed mt-0.5">
                        Bookmark this page. The audit will still be free. We
                        cap to 4 per month — first-come gets the slot.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <p className="text-[12px] text-body/50 max-w-[480px] mt-2">
                Honestly believe you should still be on a call with us? Reply
                to{" "}
                <a
                  href="mailto:fabian@ecomseo.co"
                  className="text-accent hover:text-white transition-colors"
                >
                  fabian@ecomseo.co
                </a>{" "}
                with your store URL and a one-line case for why — Fabian reads
                every one personally.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
