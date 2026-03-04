import type { Metadata } from "next";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Beauty SEO Agency | EcomSEO",
  description:
    "Beauty SEO that makes brands shine. We help beauty and skincare ecommerce stores rank for high-intent ingredient, routine, and product queries.",
  openGraph: {
    title: "Beauty SEO That Makes Brands Shine | EcomSEO",
    description:
      "We help beauty and skincare ecommerce stores rank for high-intent queries.",
  },
};

export default function BeautySeoPage() {
  return (
    <ServicePageTemplate
      hero={{
        badge: "Beauty SEO",
        heading: "Beauty SEO That Makes Brands Shine",
        subtitle:
          "We help beauty and skincare brands rank for the searches that drive revenue \u2014 from ingredient queries to routine guides and product comparisons.",
        ctaText: "Book a Beauty SEO Strategy Call",
      }}
      trustBar="20+ beauty brands trust us to grow their organic revenue"
      sections={[
        {
          type: "benefits",
          badge: "Buyer Intent",
          heading: "How Beauty Shoppers Search",
          subtitle:
            "Beauty search behavior is unique. We understand the intent signals that matter for your niche.",
          benefits: [
            {
              title: "Ingredient-Driven Queries",
              description:
                "Shoppers search by active ingredients like retinol, niacinamide, and hyaluronic acid. We build content that captures these high-intent searches.",
            },
            {
              title: "Skin Type Segmentation",
              description:
                "Oily, dry, sensitive, combination \u2014 your customers search by skin type. We optimize collections and content around these segments.",
            },
            {
              title: "Tutorial & How-To Demand",
              description:
                "Beauty shoppers want to learn before they buy. We create tutorial content that builds trust and drives product discovery.",
            },
            {
              title: "Review-Driven Decisions",
              description:
                "Before and after results, real reviews, and social proof drive purchase decisions. We optimize for these trust signals.",
            },
            {
              title: "Brand vs. Generic Splits",
              description:
                "Some shoppers search by brand, others by product type. We capture both segments with targeted content strategies.",
            },
            {
              title: "Seasonal Beauty Trends",
              description:
                "SPF in summer, hydration in winter \u2014 we align your content calendar with seasonal search demand.",
            },
          ],
        },
        {
          type: "deliverables",
          badge: "Deliverables",
          heading: "What We Deliver for Beauty Brands",
          deliverables: [
            {
              title: "Collection Optimization",
              description: "Category pages + internal linking",
            },
            {
              title: "Ingredient Content",
              description: "Education pages that drive traffic",
            },
            {
              title: "Routine Guides",
              description: "How-to content that converts",
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
            question: "Do you specialize in beauty ecommerce specifically?",
            answer:
              "Yes. We work exclusively with ecommerce brands, and beauty is one of our core verticals. We understand beauty search behavior, seasonal trends, and the unique content strategies that work for skincare, cosmetics, and haircare brands.",
          },
          {
            question:
              "How do you handle ingredient-focused SEO?",
            answer:
              "We build ingredient hub pages, optimize product pages around key actives, and create educational content that captures ingredient-driven searches. This positions your brand as an authority while driving targeted traffic.",
          },
          {
            question: "Can you help with international beauty SEO?",
            answer:
              "Absolutely. We handle multi-language SEO for beauty brands selling across markets. This includes hreflang implementation, localized content, and market-specific keyword research.",
          },
          {
            question: "How important is content for beauty SEO?",
            answer:
              "Critical. Beauty shoppers research extensively before purchasing. Tutorial content, ingredient guides, and routine recommendations are essential for capturing top-of-funnel traffic and building trust.",
          },
          {
            question: "How do you measure success for beauty brands?",
            answer:
              "We track organic revenue, traffic from high-intent keywords, collection page rankings, and conversion rates. We report monthly on metrics that matter for your bottom line.",
          },
          {
            question: "What beauty brands do you typically work with?",
            answer:
              "We work with DTC skincare, cosmetics, and haircare brands doing \u20ac500K+ in annual revenue. Our clients range from emerging indie brands to established beauty retailers.",
          },
        ],
        miniCta: {
          heading: "Ready to Grow Your Beauty Brand?",
          subtitle:
            "Book a free strategy call and we\u2019ll show you the organic opportunities you\u2019re missing.",
        },
      }}
    />
  );
}
