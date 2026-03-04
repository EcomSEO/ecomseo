import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import JsonLd from "@/components/JsonLd";
import { serviceJsonLd, breadcrumbJsonLd } from "@/lib/jsonLd";


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/fashion-seo");
}

export default async function FashionSeoPage({
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
          name: "Fashion SEO That Turns Browsers Into Buyers",
          description: "We help fashion and apparel brands rank for the searches that drive revenue \u2014 from seasonal trends to style queries and collection-level intent.",
          path: "/fashion-seo",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd(locale as Locale, [
          { name: "Home", path: "/" },
          { name: "Fashion SEO That Turns Browsers Into Buyers", path: "/fashion-seo" },
        ])}
      />
      <ServicePageTemplate
      hero={{
        badge: "Fashion SEO",
        heading: "Fashion SEO That Turns Browsers Into Buyers",
        subtitle:
          "We help fashion and apparel brands rank for the searches that drive revenue \u2014 from seasonal trends to style queries and collection-level intent.",
        ctaText: "Book a Fashion SEO Strategy Call",
      }}
      trustBar="Trusted by 20+ fashion brands scaling organic revenue"
      sections={[
        {
          type: "benefits",
          badge: "Buyer Intent",
          heading: "How Fashion Shoppers Search Online",
          subtitle:
            "Fashion search behavior is seasonal, visual, and trend-driven. We understand the intent signals that matter for your niche.",
          benefits: [
            {
              title: "Seasonal Search Spikes",
              description:
                "Spring collections, summer dresses, winter coats \u2014 seasonal demand drives massive traffic. We align your content calendar months in advance.",
            },
            {
              title: "Visual Search Rising",
              description:
                "Image search and visual discovery are growing fast. We optimize product images, alt text, and structured data for visual search engines.",
            },
            {
              title: "Long-Tail Style Queries",
              description:
                "Shoppers search for specific styles \u2014 oversized linen blazer, high-waisted wide leg jeans. We capture these high-converting long-tail queries.",
            },
            {
              title: "Brand vs. Generic Splits",
              description:
                "Some shoppers search by brand, others by style. We capture both segments with targeted collection pages and content.",
            },
            {
              title: "Collection-Level Intent",
              description:
                "New arrivals, sale items, bestsellers \u2014 collection pages drive significant traffic. We optimize them for maximum visibility.",
            },
            {
              title: "Trend-Driven Content Gaps",
              description:
                "Fashion trends create sudden search demand. We monitor trends and create content quickly to capture emerging style searches.",
            },
          ],
        },
        {
          type: "process",
          badge: "Common Blockers",
          heading: "What Holds Fashion Brands Back in Search",
          process: [
            {
              number: "01",
              title: "Size & Color Variant Duplication",
              description:
                "Every size and color combination creates potential duplicate content. Without proper canonicalization, Google wastes crawl budget on redundant pages.",
            },
            {
              number: "02",
              title: "Seasonal Inventory Churn",
              description:
                "Products come and go each season, creating broken links and orphaned pages. We manage URL lifecycle to preserve link equity and rankings.",
            },
            {
              number: "03",
              title: "Image-Heavy Slow Pages",
              description:
                "High-resolution lookbook images and product galleries tank page speed. We optimize for Core Web Vitals without sacrificing visual quality.",
            },
            {
              number: "04",
              title: "Thin Category Descriptions",
              description:
                "Default collection pages have little or no text content. We add optimized descriptions that target high-intent keywords and improve relevance.",
            },
          ],
        },
        {
          type: "benefits",
          badge: "Our Approach",
          heading: "How We Grow Fashion Brands Organically",
          subtitle:
            "We combine content strategy, technical SEO, and authority building to drive sustainable organic growth for fashion brands.",
          benefits: [
            {
              title: "Content Strategy",
              description:
                "Style guides, trend roundups, and collection pages optimized for seasonal and evergreen search demand. We create content that ranks and converts.",
            },
            {
              title: "Technical SEO",
              description:
                "Variant canonicalization, URL lifecycle management, image optimization, and structured data. We fix the technical issues holding your store back.",
            },
            {
              title: "Authority Building",
              description:
                "Digital PR, fashion publication outreach, and strategic link building. We grow your domain authority with relevant, high-quality backlinks.",
            },
          ],
        },
        {
          type: "deliverables",
          badge: "Deliverables",
          heading: "What We Deliver for Fashion Brands",
          deliverables: [
            {
              title: "Collection Optimization",
              description: "Category pages + internal linking",
            },
            {
              title: "Lookbook Content",
              description: "Visual content that drives traffic",
            },
            {
              title: "Trend Guides",
              description: "Seasonal content for emerging demand",
            },
            {
              title: "Technical Fixes",
              description: "Speed, schema, crawl optimization",
            },
          ],
        },
        {
          type: "benefits",
          badge: "Content Types",
          heading: "Pages We Build for Fashion Brands",
          benefits: [
            {
              title: "Collection Pages",
              description:
                "Optimized category pages with unique content, internal links, and structured data for maximum search visibility.",
            },
            {
              title: "Style Guides",
              description:
                "How-to-wear and styling guides that capture informational queries and drive product discovery.",
            },
            {
              title: "Trend Comparisons",
              description:
                "Trend analysis and comparison content that captures commercial intent from shoppers researching styles.",
            },
            {
              title: "Gift Guides",
              description:
                "Seasonal gift guides for fashion shoppers that capture high-converting commercial queries.",
            },
            {
              title: "Size Guides",
              description:
                "Detailed sizing content that reduces returns, builds trust, and captures size-related search queries.",
            },
            {
              title: "Lookbook Pages",
              description:
                "Visual editorial content that showcases collections while targeting style and trend keywords.",
            },
          ],
        },
      ]}
      faqs={{
        items: [
          {
            question: "Do you specialize in fashion ecommerce specifically?",
            answer:
              "Yes. We work exclusively with ecommerce brands, and fashion is one of our core verticals. We understand seasonal inventory cycles, variant management, and the visual nature of fashion search.",
          },
          {
            question:
              "How do you handle seasonal content for fashion brands?",
            answer:
              "We plan content 3\u20136 months ahead of each season. Collection pages, trend guides, and style content are prepared and optimized before search demand peaks \u2014 so you\u2019re already ranking when shoppers start searching.",
          },
          {
            question: "Can you help with international fashion SEO?",
            answer:
              "Absolutely. We handle multi-language SEO for fashion brands selling across markets. This includes hreflang implementation, localized content, and market-specific keyword research for different regions.",
          },
          {
            question: "How do you deal with product variants in SEO?",
            answer:
              "We implement proper canonicalization for size and color variants, manage URL parameters, and ensure Google focuses on your main product pages rather than wasting crawl budget on variant URLs.",
          },
          {
            question: "How do you measure success for fashion brands?",
            answer:
              "We track organic revenue, traffic from seasonal and evergreen keywords, collection page rankings, and conversion rates. We report monthly on metrics that matter for your bottom line.",
          },
          {
            question: "What fashion brands do you typically work with?",
            answer:
              "We work with DTC fashion brands, sustainable clothing companies, and specialty retailers doing \u20ac500K+ in annual revenue. Our clients range from emerging designers to established fashion labels.",
          },
        ],
        miniCta: {
          heading: "Ready to Grow Your Fashion Brand?",
          subtitle:
            "Book a free strategy call and we\u2019ll show you the organic opportunities you\u2019re missing.",
        },
      }}
    />
    </>
  );
}
