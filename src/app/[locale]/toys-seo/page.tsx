import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import JsonLd from "@/components/JsonLd";
import { serviceJsonLd, breadcrumbJsonLd } from "@/lib/jsonLd";


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/toys-seo");
}

export default async function ToysSeoPage({
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
          name: "Toys SEO That Makes Sales Soar",
          description: "We help toy and game ecommerce brands rank for the searches that drive revenue \u2014 from seasonal spikes to age-based queries and gift guide searches.",
          path: "/toys-seo",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd(locale as Locale, [
          { name: "Home", path: "/" },
          { name: "Toys SEO That Makes Sales Soar", path: "/toys-seo" },
        ])}
      />
      <ServicePageTemplate
      hero={{
        badge: "Toys SEO",
        heading: "Toys SEO That Makes Sales Soar",
        subtitle:
          "We help toy and game ecommerce brands rank for the searches that drive revenue \u2014 from seasonal spikes to age-based queries and gift guide searches.",
        ctaText: "Book a Toys SEO Strategy Call",
      }}
      trustBar="20+ toy brands trust us to grow their organic revenue"
      sections={[
        {
          type: "benefits",
          badge: "Buyer Intent",
          heading: "How Toy Shoppers Search",
          subtitle:
            "Toy search behavior is seasonal, age-driven, and gift-focused. We understand the intent signals that matter for your niche.",
          benefits: [
            {
              title: "Massive Seasonal Spikes",
              description:
                "Black Friday, Christmas, and back-to-school drive enormous search volume. We prepare your content months in advance to capture peak demand.",
            },
            {
              title: "Age-Based Segmentation",
              description:
                "Parents search by age group \u2014 toys for 3-year-olds, gifts for tweens, educational toys for toddlers. We optimize collections and content around these segments.",
            },
            {
              title: "Gift Guide Searches",
              description:
                "Best gifts for kids, top toys 2025, unique birthday gifts \u2014 we create gift guide content that captures commercial intent and drives product discovery.",
            },
            {
              title: "Safety & Education Queries",
              description:
                "Parents research safety certifications, STEM benefits, and age-appropriateness. We create trust-building content around these concerns.",
            },
            {
              title: "Brand & Character Searches",
              description:
                "LEGO, Barbie, Pok\u00e9mon \u2014 character and brand searches drive massive traffic. We optimize product and category pages to capture branded demand.",
            },
            {
              title: "Trending Toy Demand",
              description:
                "Viral toys on TikTok and YouTube create sudden search spikes. We monitor trends and create content quickly to capture emerging demand.",
            },
          ],
        },
        {
          type: "deliverables",
          badge: "Deliverables",
          heading: "What We Deliver for Toy Brands",
          deliverables: [
            {
              title: "Collection Optimization",
              description: "Age + category pages + linking",
            },
            {
              title: "Gift Guide Content",
              description: "Seasonal guides that drive traffic",
            },
            {
              title: "Trend Monitoring",
              description: "Quick content for viral products",
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
            question: "Do you specialize in toys ecommerce specifically?",
            answer:
              "Yes. We work exclusively with ecommerce brands, and toys is one of our core verticals. We understand the seasonal nature of toy sales, age-based search behavior, and the unique content strategies that work for toy and game retailers.",
          },
          {
            question: "How do you handle seasonal SEO for toys?",
            answer:
              "We plan content 3\u20136 months ahead of peak seasons. Gift guides, trending toy roundups, and seasonal collection pages are prepared and optimized before search demand spikes \u2014 so you\u2019re already ranking when shoppers start searching.",
          },
          {
            question: "Can you help with international toy SEO?",
            answer:
              "Absolutely. We handle multi-language SEO for toy brands selling across markets. This includes hreflang implementation, localized content, and market-specific keyword research for different regions.",
          },
          {
            question: "How important is content for toy SEO?",
            answer:
              "Critical. Parents research extensively before buying toys. Gift guides, age-appropriate recommendations, safety information, and educational value content are essential for capturing top-of-funnel traffic.",
          },
          {
            question: "How do you measure success for toy brands?",
            answer:
              "We track organic revenue, traffic from seasonal and evergreen keywords, collection page rankings, and conversion rates. We report monthly on metrics that matter for your bottom line.",
          },
          {
            question: "What toy brands do you typically work with?",
            answer:
              "We work with DTC toy brands, educational toy companies, and specialty game retailers doing \u20ac500K+ in annual revenue. Our clients range from emerging indie toy brands to established retailers.",
          },
        ],
        miniCta: {
          heading: "Ready to Grow Your Toy Brand?",
          subtitle:
            "Book a free strategy call and we\u2019ll show you the organic opportunities you\u2019re missing.",
        },
      }}
    />
    </>
  );
}
