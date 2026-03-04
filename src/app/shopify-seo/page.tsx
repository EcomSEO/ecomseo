import type { Metadata } from "next";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Shopify SEO Agency | EcomSEO",
  description:
    "We audit, fix, and scale organic traffic for Shopify and Shopify Plus stores. Stop bleeding revenue to competitors with our specialized Shopify SEO services.",
  openGraph: {
    title: "Shopify SEO That Actually Drives Revenue | EcomSEO",
    description:
      "We audit, fix, and scale organic traffic for Shopify and Shopify Plus stores.",
  },
};

export default function ShopifySeoPage() {
  return (
    <ServicePageTemplate
      hero={{
        badge: "Shopify SEO Experts",
        heading: "Shopify SEO That Actually Drives Revenue",
        subtitle:
          "Our Chef\u2019s Special. We audit, fix, and scale organic traffic for Shopify and Shopify Plus stores \u2014 so you can stop bleeding revenue to competitors.",
        ctaText: "Book a Shopify SEO Audit",
      }}
      trustBar="Trusted by 20+ Shopify stores scaling organic revenue"
      sections={[
        {
          type: "stats",
          badge: "Track Record",
          heading: "Numbers That Speak for Themselves",
          stats: [
            { value: "8+", label: "Years of Shopify SEO" },
            { value: "$12M+", label: "Revenue Generated" },
            { value: "50+", label: "Shopify Stores Optimized" },
            { value: "140%", label: "Avg. Traffic Increase" },
          ],
        },
        {
          type: "benefits",
          badge: "Common Shopify SEO Issues",
          heading: "The Shopify SEO Problems We Fix Every Day",
          subtitle:
            "Most Shopify stores share the same technical SEO debt. We know exactly where to look.",
          benefits: [
            {
              title: "Duplicate Content",
              description:
                "Collection filters and tags create thousands of duplicate URLs that dilute your crawl budget.",
            },
            {
              title: "Slow Theme Speed",
              description:
                "Bloated Liquid templates, unoptimized images, and excessive app scripts tank your Core Web Vitals.",
            },
            {
              title: "Broken Canonical Tags",
              description:
                "Shopify default canonicals often point to the wrong URL variant, confusing Google about your preferred pages.",
            },
            {
              title: "Pagination Indexation",
              description:
                "Paginated collection pages get indexed as separate URLs, splitting authority across dozens of thin pages.",
            },
            {
              title: "Missing Structured Data",
              description:
                "Product, review, and breadcrumb schema are absent or broken \u2014 costing you rich snippet visibility.",
            },
            {
              title: "URL Structure Limits",
              description:
                "Shopify enforces /collections/ and /products/ prefixes. We work within these constraints for optimal crawlability.",
            },
          ],
        },
        {
          type: "process",
          badge: "Our Playbook",
          heading: "How We Scale Shopify Organic Traffic",
          subtitle:
            "A proven four-step process refined across 50+ Shopify stores.",
          process: [
            {
              number: "01",
              title: "Technical Audit",
              description:
                "Full crawl analysis of your Shopify store. We map every indexation issue, canonical conflict, and speed bottleneck.",
            },
            {
              number: "02",
              title: "Theme Optimization",
              description:
                "Speed fixes at the Liquid template level. We optimize render-blocking resources, images, and third-party scripts.",
            },
            {
              number: "03",
              title: "Collection Architecture",
              description:
                "Restructure collections, tags, and internal linking to create a clear hierarchy Google can understand and reward.",
            },
            {
              number: "04",
              title: "Ongoing Monitoring",
              description:
                "Monthly reporting, rank tracking, and iterative improvements. We catch issues before they cost you traffic.",
            },
          ],
        },
        {
          type: "deliverables",
          badge: "Deliverables",
          heading: "What You Get Every Month",
          subtitle:
            "Transparent reporting and tangible outputs \u2014 no fluff, no vanity metrics.",
          deliverables: [
            {
              title: "Technical Audit Report",
              description: "Full crawl + prioritized fix list",
            },
            {
              title: "Schema Implementation",
              description: "Product + breadcrumb JSON-LD",
            },
            {
              title: "Speed Optimization",
              description: "Core Web Vitals improvements",
            },
            {
              title: "Monthly Reporting",
              description: "Rankings, traffic, revenue impact",
            },
          ],
        },
      ]}
      faqs={{
        items: [
          {
            question: "Why does my Shopify store need specialized SEO?",
            answer:
              "Shopify has unique technical SEO challenges that generic agencies miss \u2014 duplicate content from collections and tags, auto-generated URL structures, limited control over canonical tags, and theme-level speed issues. We specialize in solving these platform-specific problems so your store ranks higher and converts more organic traffic.",
          },
          {
            question: "How long until I see results from Shopify SEO?",
            answer:
              "Most stores see measurable improvements in organic traffic within 60\u201390 days after our technical fixes are implemented. Significant revenue impact typically follows within 4\u20136 months, depending on your niche competitiveness and current site health.",
          },
          {
            question: "Do you work with Shopify Plus stores?",
            answer:
              "Absolutely. We work with both standard Shopify and Shopify Plus stores. Plus stores often have more complex catalog structures, international storefronts, and custom theme code \u2014 all areas where our technical SEO expertise delivers the most value.",
          },
          {
            question: "What does a Shopify SEO audit include?",
            answer:
              "Our audit covers crawlability and indexation issues, duplicate content from collections/tags/vendors, canonical tag implementation, structured data gaps, Core Web Vitals and theme speed, URL architecture, internal linking structure, and content gaps vs. your top competitors.",
          },
          {
            question: "Will you make changes directly to my Shopify store?",
            answer:
              "Yes, with your approval. We handle all technical implementations \u2014 theme code optimizations, schema markup, meta tag templates, redirect management, and sitemap configuration. You review and approve every change before it goes live.",
          },
          {
            question:
              "How is EcomSEO different from other Shopify SEO agencies?",
            answer:
              "We only work with ecommerce brands, so we understand the revenue impact of every SEO decision. We focus on profit metrics (not vanity rankings), provide radical transparency in reporting, and bring an operator mindset \u2014 we have built and scaled ecommerce brands ourselves, not just optimized them from the outside.",
          },
        ],
        miniCta: {
          heading: "Ready to Fix Your Shopify SEO?",
          subtitle:
            "Book a free audit call and we will show you exactly what is holding your store back.",
        },
      }}
    />
  );
}
