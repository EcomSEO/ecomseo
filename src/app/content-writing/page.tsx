import type { Metadata } from "next";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";

export const metadata: Metadata = {
  title: "SEO Content Writing for Ecommerce | EcomSEO",
  description:
    "SEO content that converts browsers into buyers. Product descriptions, category pages, blog posts, and buying guides written for ecommerce stores.",
  openGraph: {
    title: "SEO Content That Converts Browsers Into Buyers | EcomSEO",
    description:
      "SEO content that converts browsers into buyers for ecommerce stores.",
  },
};

export default function ContentWritingPage() {
  return (
    <ServicePageTemplate
      hero={{
        badge: "Content Writing",
        heading: "SEO Content That Converts Browsers Into Buyers",
        subtitle:
          "We write content that ranks and converts for ecommerce stores. From product descriptions to buying guides \u2014 every word is optimized for search and sales.",
        ctaText: "Book a Content Strategy Call",
      }}
      trustBar="20+ ecommerce brands trust our content to drive organic revenue"
      sections={[
        {
          type: "benefits",
          badge: "What You Get",
          heading: "Content That Ranks and Converts",
          benefits: [
            {
              title: "Product Descriptions",
              description:
                "Unique, keyword-rich product descriptions that help your pages rank and persuade shoppers to buy.",
            },
            {
              title: "Category Page Content",
              description:
                "Strategic collection page copy that targets high-intent keywords and improves topical relevance.",
            },
            {
              title: "Blog Posts & Guides",
              description:
                "Long-form content that captures informational queries and drives top-of-funnel traffic to your store.",
            },
            {
              title: "Buying Guides",
              description:
                "Comparison and best-of guides that capture commercial intent searches and funnel traffic to your products.",
            },
            {
              title: "Content Briefs",
              description:
                "Detailed briefs with target keywords, search intent analysis, competitor gaps, and content structure.",
            },
            {
              title: "Content Calendar",
              description:
                "A strategic publishing schedule aligned with seasonal trends, product launches, and keyword opportunities.",
            },
          ],
        },
        {
          type: "process",
          badge: "The Process",
          heading: "How We Create Content That Performs",
          process: [
            {
              number: "01",
              title: "Keyword Research",
              description:
                "We identify high-value content opportunities based on search volume, intent, and your competitive landscape.",
            },
            {
              number: "02",
              title: "Content Briefing",
              description:
                "Detailed briefs with target keywords, headings structure, competitor analysis, and content guidelines.",
            },
            {
              number: "03",
              title: "Writing & Review",
              description:
                "Our ecommerce-specialist writers create optimized content. You review and approve before anything goes live.",
            },
            {
              number: "04",
              title: "Publish & Track",
              description:
                "We handle publishing, monitor rankings, and iterate based on performance data to maximize results.",
            },
          ],
        },
      ]}
      faqs={{
        items: [
          {
            question: "What type of content do you write?",
            answer:
              "We write product descriptions, category page content, blog posts, buying guides, comparison articles, and any other content type that drives organic traffic and conversions for ecommerce stores.",
          },
          {
            question: "Do you write in languages other than English?",
            answer:
              "Yes. We have native-speaker writers for English, Dutch, German, Swedish, Norwegian, and Danish. We can also work with translation partners for other languages.",
          },
          {
            question: "How do you ensure content quality?",
            answer:
              "Every piece goes through keyword research, competitor analysis, expert writing, editorial review, and SEO optimization before delivery. We focus on E-E-A-T signals and genuine value for the reader.",
          },
          {
            question: "How many pieces of content do you deliver per month?",
            answer:
              "This depends on your package and goals. Typical engagements include 4\u201312 blog posts per month plus ongoing product and category page optimization.",
          },
          {
            question: "Can you optimize existing content?",
            answer:
              "Absolutely. We audit your existing content, identify quick wins, and optimize underperforming pages before creating new content. Often the fastest ROI comes from improving what you already have.",
          },
          {
            question: "How long until content starts ranking?",
            answer:
              "New content typically starts showing ranking signals within 4\u20138 weeks. Significant traffic usually follows within 2\u20134 months, depending on keyword difficulty and your domain authority.",
          },
        ],
        miniCta: {
          heading: "Ready to Scale Your Content?",
          subtitle:
            "Book a free strategy call and we\u2019ll show you the content gaps costing you traffic.",
        },
      }}
    />
  );
}
