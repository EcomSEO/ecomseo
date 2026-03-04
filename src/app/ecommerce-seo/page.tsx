import type { Metadata } from "next";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Ecommerce SEO Agency | EcomSEO",
  description:
    "Ecommerce SEO services that grow revenue, not just traffic. We engineer site architecture and technical foundations specifically for high-volume ecommerce stores.",
  openGraph: {
    title: "Ecommerce SEO Services That Grow Revenue | EcomSEO",
    description:
      "We engineer site architecture and technical foundations specifically for high-volume ecommerce stores.",
  },
};

export default function EcommerceSeoPage() {
  return (
    <ServicePageTemplate
      hero={{
        badge: "Ecommerce SEO",
        heading: "Ecommerce SEO Services That\u200BGrow Revenue \u2014 Not Just Traffic",
        subtitle:
          "Most agencies chase vanity metrics. We chase sales. If your store gets visitors but not buyers, you don\u2019t have an SEO problem \u2014 you have a growth strategy problem. We fix both.",
        ctaText: "Book a Free Strategy Call",
      }}
      trustBar="Trusted platforms & 7-figure results"
      sections={[
        {
          type: "process",
          badge: "Why Most Stores Fail",
          heading: "Most Agencies Chase Vanity Metrics. We Chase Sales.",
          process: [
            {
              number: "01",
              title: "Wrong Intent",
              description:
                "Most agencies optimize for informational keywords (low value). We rank for transactional intent \u2014 capturing buyers exactly when they are ready to purchase.",
            },
            {
              number: "02",
              title: "Generic Categories",
              description:
                "Most category pages are just product grids. Yours should behave like landing pages built for persuasion.",
            },
            {
              number: "03",
              title: "Technical Debt",
              description:
                "Slow load times. Crawl waste. JS rendering issues. These invisible issues quietly kill your rankings.",
            },
            {
              number: "04",
              title: "No CRO Layer",
              description:
                "Traffic without conversion is money left on the table. We fix both \u2014 simultaneously.",
            },
          ],
        },
        {
          type: "benefits",
          badge: "THE ECOMSEO STANDARD",
          heading: "What We Do Differently",
          subtitle:
            "Most agencies apply \u201Cblog strategies\u201D to online stores. We don\u2019t. We engineer site architecture and technical foundations specifically for high-volume ecommerce.",
          benefits: [
            {
              title: "The Technical Foundation",
              description:
                "Faster load times, crawl waste elimination for stores with 500+ SKUs, and multi-channel synchronization with Google Merchant Center and Search Console.",
            },
            {
              title: "Category Pages That Sell",
              description:
                "Your category pages should behave like landing pages, sales pages, and SEO hubs \u2014 all at once. We build them to rank and convert.",
            },
            {
              title: "AI & LLM Optimization",
              description:
                "Search is evolving. We ensure your brand and products are recommended by the next generation of search engines: AI Overviews, ChatGPT, and AI Agents.",
            },
            {
              title: "Revenue-First Content",
              description:
                "Every piece of content we create targets commercial intent. Buying guides, comparison pages, and product content that drives revenue, not just traffic.",
            },
            {
              title: "Scalable Processes",
              description:
                "With thousands of SKUs, manual optimization is impossible. We build automated workflows for title tags, meta descriptions, and structured data at scale.",
            },
            {
              title: "Conversion Optimization",
              description:
                "Rankings mean nothing if visitors don\u2019t buy. We optimize from Google to checkout, improving both traffic quality and on-site conversion rates.",
            },
          ],
        },
        {
          type: "benefits",
          badge: "Why SEO",
          heading: "Why the Top 1% of Stores Bet Big on SEO",
          benefits: [
            {
              title: "Lower Customer Acquisition Cost",
              description:
                "Organic traffic is \u201Cfree\u201D once earned. This balances out your paid spend, making your overall marketing profitable.",
            },
            {
              title: "High-Intent Traffic",
              description:
                "People searching for \u201Cbuy leather chelsea boots\u201D are at the bottom of the funnel. We put you in front of them.",
            },
            {
              title: "Brand Authority & Trust",
              description:
                "Users trust organic results more than sponsored slots. Ranking #1 signals you are the market leader.",
            },
            {
              title: "Sustainable Growth",
              description:
                "Avoid the \u201Cfeast or famine\u201D cycle of paid ads. Build a consistent stream of revenue that grows month over month.",
            },
          ],
        },
        {
          type: "process",
          badge: "The Framework",
          heading: "The Commerce Growth Framework\u2122",
          subtitle:
            "You don\u2019t need random tactics. You need a system built for ecommerce volume, competition, and SKU scale.",
          process: [
            {
              number: "01",
              title: "Foundation",
              description:
                "Technical audit, crawl optimization, speed fixes, and structured data. The boring stuff that makes everything else work.",
            },
            {
              number: "02",
              title: "Growth",
              description:
                "Category page optimization, content strategy, and internal linking architecture. Building the engine that drives organic revenue.",
            },
            {
              number: "03",
              title: "Scale",
              description:
                "Authority building, competitive gap targeting, and AI search optimization. Compounding growth that makes you the market leader.",
            },
            {
              number: "04",
              title: "Dominate",
              description:
                "Continuous optimization, new market expansion, and defensive SEO. Protecting and extending your organic market share.",
            },
          ],
        },
      ]}
      faqs={{
        items: [
          {
            question: "How can I improve the SEO of my ecommerce website?",
            answer:
              "Focus on the technical foundation first \u2014 site speed, crawlability, and structured data. Then optimize category pages for commercial intent keywords, create revenue-driving content, and build authoritative backlinks.",
          },
          {
            question: "Why should I invest in SEO services for ecommerce?",
            answer:
              "SEO is an investment in equity, whereas PPC is an expense (rent). If you stop paying for ads, your traffic drops to zero instantly. With SEO, you\u2019re building a digital asset that continues to drive revenue, lowering your blended Customer Acquisition Cost and increasing profitability.",
          },
          {
            question: "How long does it take to see results?",
            answer:
              "3\u20136 months for measurable uplifts. 6\u201312 months for market dominance. Technical fixes can show impact within weeks, while content and authority building compound over time.",
          },
          {
            question: "What platforms do you work with?",
            answer:
              "Shopify, WooCommerce, Magento, BigCommerce, Lightspeed, Adobe Commerce \u2014 we\u2019ve ranked stores on every major ecommerce platform. Our strategies are platform-agnostic but our implementation is platform-specific.",
          },
          {
            question: "What makes your approach different from other SEO agencies?",
            answer:
              "We only work with ecommerce. Every playbook, every template, every audit is built for product catalogs and revenue \u2014 not blog traffic. We measure success in revenue attribution, not just keyword rankings.",
          },
          {
            question: "Do you offer a free audit?",
            answer:
              "Yes. We offer a complimentary ecommerce SEO audit that identifies your biggest opportunities and technical issues. Book a call and we\u2019ll show you exactly what\u2019s holding your store back.",
          },
        ],
        miniCta: {
          heading: "Ready to 2\u20134\u00D7 Your Ecommerce Revenue?",
          subtitle:
            "Book a call today and start growing. We\u2019ll show you exactly where you\u2019re leaving money on the table.",
        },
      }}
    />
  );
}
