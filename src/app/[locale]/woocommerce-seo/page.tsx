import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import JsonLd from "@/components/JsonLd";
import { serviceJsonLd, breadcrumbJsonLd } from "@/lib/jsonLd";


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/woocommerce-seo");
}

export default async function WoocommerceSeoPage({
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
          name: "WooCommerce SEO That Actually Moves Revenue",
          description: "Most agencies don\u2019t understand WooCommerce. We run stores on it. Big difference.",
          path: "/woocommerce-seo",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd(locale as Locale, [
          { name: "Home", path: "/" },
          { name: "WooCommerce SEO That Actually Moves Revenue", path: "/woocommerce-seo" },
        ])}
      />
      <ServicePageTemplate
      hero={{
        badge: "WooCommerce SEO",
        heading: "WooCommerce SEO That Actually Moves Revenue",
        subtitle:
          "Most agencies don\u2019t understand WooCommerce. We run stores on it. Big difference.",
        ctaText: "Book a WooCommerce SEO Call",
      }}
      trustBar="20+ WooCommerce stores \u00B7 97% client retention \u00B7 6+ years in ecom SEO \u00B7 4.9\u2605 client rating"
      sections={[
        {
          type: "benefits",
          badge: "Sound Familiar?",
          heading:
            "Your WooCommerce Store Is Bleeding Traffic. Here\u2019s Why.",
          subtitle:
            "We see these on every WooCommerce audit. If you\u2019re nodding along, we should talk.",
          benefits: [
            {
              title: "Duplicate Content Chaos",
              description:
                "Thousands of near-identical URLs fighting each other. Google picks none.",
            },
            {
              title: "Speed That Kills Sales",
              description:
                "Bloated themes and 40 plugins. Every extra second costs you 7% in conversions.",
            },
            {
              title: "Missing Rich Results",
              description:
                "Competitors show prices and ratings in Google. You show a blue link.",
            },
            {
              title: "Wasted Crawl Budget",
              description:
                "Google crawls your filter pages instead of your money pages.",
            },
            {
              title: "Ghost Category Pages",
              description:
                "Zero unique content on category pages. Google treats them as thin.",
            },
            {
              title: "Plugin Warfare",
              description:
                "Three SEO plugins, three conflicting opinions on your canonicals.",
            },
          ],
        },
        {
          type: "benefits",
          badge: "The Fix",
          heading: "Everything We Do to Your Store",
          subtitle:
            "No fluff packages. No vanity metrics. Just the work that moves revenue.",
          benefits: [
            {
              title: "Technical SEO Overhaul",
              description:
                "Indexation, canonicals, speed, schema, crawl budget. Everything costing you rankings gets fixed.",
            },
            {
              title: "Revenue-First Content",
              description:
                "Category pages that rank. Buying guides that convert. Every word earns its place.",
            },
            {
              title: "Authority That Compounds",
              description:
                "Real placements in publications your customers read. Domain authority compounds.",
            },
          ],
        },
        {
          type: "benefits",
          badge: "Built for WooCommerce",
          heading:
            "We Don\u2019t Just Know WooCommerce. We\u2019ve Rebuilt Stores From the Inside Out.",
          subtitle:
            "Most SEO agencies treat WooCommerce like WordPress with a cart. We know it\u2019s a full commerce engine \u2014 with its own indexation quirks, performance bottlenecks, and structural advantages.",
          benefits: [
            {
              title: "The Plugin Problem Nobody Talks About",
              description:
                "Yoast, RankMath, AIOSEO \u2014 they all promise SEO out of the box. But plugin conflicts break canonical tags, bloat sitemaps, and create contradicting schema. We fix what plugins can\u2019t.",
            },
            {
              title: "Performance Is a Ranking Factor",
              description:
                "WooCommerce stores average 4\u20138 second load times. Google expects under 2.5s for LCP. We optimize database queries, image pipelines, and caching \u2014 often cutting load times by 60%+.",
            },
            {
              title: "We Speak REST API and WP-CLI",
              description:
                "While other agencies submit tickets and wait, we SSH into staging and fix issues directly. Custom hooks for structured data. Programmatic redirects. Automated feed optimization.",
            },
          ],
        },
        {
          type: "process",
          badge: "How It Works",
          heading: "Six Steps. Zero Fluff.",
          process: [
            {
              number: "01",
              title: "Rip It Apart",
              description:
                "Full crawl. Competitor benchmarks. Prioritized hit list of what\u2019s killing rankings.",
            },
            {
              number: "02",
              title: "Fix the Foundation",
              description:
                "Indexation, canonicals, schema, speed. The boring stuff that makes everything else work.",
            },
            {
              number: "03",
              title: "Build the Content Engine",
              description:
                "Category pages, buying guides, product copy. Every piece targets real search demand.",
            },
            {
              number: "04",
              title: "Earn Authority",
              description:
                "Real publications, not PBNs. The kind of links Google actually respects.",
            },
          ],
        },
        {
          type: "benefits",
          badge: "Why EcomSEO",
          heading: "Not Just Another SEO Agency",
          subtitle:
            "Most agencies treat ecommerce like a blog. We built our entire practice around stores that sell products online.",
          benefits: [
            {
              title: "Ecommerce-Only Focus",
              description:
                "We don\u2019t do SaaS. We don\u2019t do local. Every client is an online store. Every playbook is built for product catalogs and revenue.",
            },
            {
              title: "WooCommerce Deep Expertise",
              description:
                "We\u2019ve audited hundreds of WooCommerce stores. We know every plugin conflict, every theme bottleneck, every REST API edge case.",
            },
            {
              title: "Revenue, Not Rankings",
              description:
                "Ranking #1 for a keyword nobody buys from is worthless. We optimize for commercial intent keywords that put products in carts.",
            },
            {
              title: "Technical-First Approach",
              description:
                "Content means nothing if Google can\u2019t crawl your store. We fix the technical foundation first, then layer on content and links.",
            },
            {
              title: "No Long-Term Lock-ins",
              description:
                "We work month-to-month. If we\u2019re not delivering results, you leave. That\u2019s the accountability most agencies avoid.",
            },
            {
              title: "Transparent Reporting",
              description:
                "No vanity metrics. Every report shows exactly what we did, what moved, and what revenue came from organic.",
            },
          ],
        },
        {
          type: "stats",
          badge: "Proof",
          heading: "Numbers Don\u2019t Lie",
          subtitle:
            "Typical results across our WooCommerce clients. No cherry-picking. No asterisks.",
          stats: [
            { value: "340%", label: "Organic Traffic Growth" },
            { value: "2.4\u00D7", label: "More Organic Revenue" },
            { value: "-45%", label: "Lower Bounce Rate" },
            { value: "Top 10", label: "For Target Keywords" },
          ],
        },
      ]}
      faqs={{
        items: [
          {
            question: "How fast will I see results?",
            answer:
              "Technical fixes like speed optimization and schema markup can show impact within weeks. Meaningful ranking improvements typically take 3\u20136 months. Market dominance takes 6\u201312 months of consistent work.",
          },
          {
            question: "What size WooCommerce stores do you work with?",
            answer:
              "We work with stores doing \u20AC500K+ in annual revenue, typically with 200\u20135,000+ SKUs. Our sweet spot is growth-stage and enterprise WooCommerce stores that need serious technical SEO expertise.",
          },
          {
            question:
              "Why is WooCommerce SEO different from Shopify or BigCommerce?",
            answer:
              "WooCommerce runs on WordPress, which means more flexibility but also more complexity. Plugin conflicts, server-side performance, database optimization, and custom theme issues all require deep platform knowledge.",
          },
          {
            question: "Do you need access to our WordPress admin?",
            answer:
              "Yes, we\u2019ll need staging access to implement technical fixes. We work on staging first, then deploy to production after your approval. We never make changes to your live store without sign-off.",
          },
          {
            question:
              "What about our product variations? We have thousands.",
            answer:
              "Product variations are one of the biggest WooCommerce SEO challenges. We implement proper canonicalization, manage variant URLs, and ensure Google focuses on your main product pages instead of wasting crawl budget on variations.",
          },
          {
            question: "What does reporting look like?",
            answer:
              "Monthly reports showing exactly what we did, what moved, and what revenue came from organic. Rankings, traffic, technical health, and revenue attribution. No vanity dashboards \u2014 just the numbers that matter.",
          },
        ],
        miniCta: {
          heading: "Ready to Fix Your WooCommerce Store?",
          subtitle:
            "Book a free WooCommerce SEO audit and find out exactly what\u2019s holding your store back.",
        },
      }}
    />
    </>
  );
}
