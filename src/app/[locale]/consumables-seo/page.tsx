import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import JsonLd from "@/components/JsonLd";
import { serviceJsonLd, breadcrumbJsonLd } from "@/lib/jsonLd";


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/consumables-seo");
}

export default async function ConsumablesSeoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          locale: locale as Locale,
          name: "Consumables SEO That Fuels Repeat Revenue",
          description: "We help food, supplement, and consumable ecommerce brands rank for the searches that drive first orders and repeat purchases.",
          path: "/consumables-seo",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd(locale as Locale, [
          { name: "Home", path: "/" },
          { name: "Consumables SEO That Fuels Repeat Revenue", path: "/consumables-seo" },
        ])}
      />
      <ServicePageTemplate
      hero={{
        badge: "Consumables SEO",
        heading: "Consumables SEO That Fuels Repeat Revenue",
        subtitle:
          "We help food, supplement, and consumable ecommerce brands rank for the searches that drive first orders and repeat purchases \u2014 from ingredient queries to subscription comparisons.",
        ctaText: "Book a Consumables SEO Strategy Call",
      }}
      trustBar="20+ consumable brands trust us to grow their organic revenue"
      sections={[
        {
          type: "benefits",
          badge: "Buyer Intent",
          heading: "How Consumable Shoppers Search",
          subtitle:
            "Consumable search behavior is driven by trust, ingredients, and replenishment cycles. We understand the intent signals that matter.",
          benefits: [
            {
              title: "Subscription Intent Signals",
              description:
                "Shoppers searching for subscribe-and-save, auto-ship, and recurring delivery options signal high lifetime value. We capture these queries.",
            },
            {
              title: "Comparison Shopping Queries",
              description:
                "Best protein powder, top vitamin D supplements, collagen peptides vs. powder \u2014 we rank your brand in the comparisons that drive purchase decisions.",
            },
            {
              title: "Health & Wellness Content",
              description:
                "Consumers research health benefits before buying consumables. We create authoritative content that builds trust and drives organic discovery.",
            },
            {
              title: "Flavor & Variety Searches",
              description:
                "Flavor profiles, variety packs, and taste comparisons drive significant search volume. We optimize product pages and content around these queries.",
            },
            {
              title: "Ingredient Transparency",
              description:
                "Clean labels, allergen-free, organic, non-GMO \u2014 ingredient-conscious shoppers search by what\u2019s in (and not in) your products. We capture that demand.",
            },
            {
              title: "Replenishment Cycles",
              description:
                "Consumables have natural reorder windows. We align content and SEO strategy with repurchase timing to maximize customer retention.",
            },
          ],
        },
        {
          type: "deliverables",
          badge: "Deliverables",
          heading: "What We Deliver for Consumable Brands",
          deliverables: [
            {
              title: "Collection Optimization",
              description: "Category pages + internal linking",
            },
            {
              title: "Ingredient Content",
              description: "Education pages that build trust",
            },
            {
              title: "Comparison Guides",
              description: "Content that captures buyer intent",
            },
            {
              title: "Technical Fixes",
              description: "Speed, schema, crawl optimization",
            },
          ],
        },
      ]}
      faqs={{
        items: [
          {
            question: "Do you specialize in consumables ecommerce?",
            answer:
              "Yes. We work exclusively with ecommerce brands, and consumables is one of our core verticals. We understand the unique challenges of food, supplement, and CPG brands \u2014 from ingredient-driven searches to subscription optimization.",
          },
          {
            question: "How do you handle supplement and health claims in SEO?",
            answer:
              "We create content that\u2019s both SEO-optimized and compliant. We focus on educational, ingredient-based content rather than health claims, working within FDA and FTC guidelines while still capturing high-intent searches.",
          },
          {
            question:
              "Can you help with international consumables SEO?",
            answer:
              "Absolutely. We handle multi-language SEO for consumable brands selling across markets. This includes hreflang implementation, localized content, and market-specific keyword research for different regulatory environments.",
          },
          {
            question: "How important is content for consumables SEO?",
            answer:
              "Critical. Consumable shoppers research ingredients, compare products, and read reviews before purchasing. Educational content builds trust and captures top-of-funnel traffic that converts into loyal customers.",
          },
          {
            question: "How do you measure success for consumable brands?",
            answer:
              "We track organic revenue, customer acquisition cost from organic, repeat purchase rates from organic traffic, and rankings for high-intent keywords. We report monthly on metrics tied to your bottom line.",
          },
          {
            question: "What consumable brands do you typically work with?",
            answer:
              "We work with DTC supplement, food, beverage, and personal care brands doing \u20ac500K+ in annual revenue. Our clients range from emerging health brands to established CPG companies.",
          },
        ],
        miniCta: {
          heading: "Ready to Grow Your Consumables Brand?",
          subtitle:
            "Book a free strategy call and we\u2019ll show you the organic opportunities you\u2019re missing.",
        },
      }}
    />
    </>
  );
}
