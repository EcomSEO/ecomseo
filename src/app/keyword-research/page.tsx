import type { Metadata } from "next";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Ecommerce Keyword Research | EcomSEO",
  description:
    "Revenue-first keyword research for ecommerce brands. We find the exact search terms your buyers use and build a strategy that turns organic traffic into predictable revenue.",
  openGraph: {
    title: "Revenue-First Keyword Research for Ecommerce Brands | EcomSEO",
    description:
      "We find the exact search terms your buyers use and build a keyword strategy that drives revenue.",
  },
};

export default function KeywordResearchPage() {
  return (
    <ServicePageTemplate
      hero={{
        badge: "Keyword Research",
        heading: "Revenue-First Keyword Research for Ecommerce Brands",
        subtitle:
          "Stop chasing vanity rankings. We find the exact search terms your buyers use \u2014 and build a keyword strategy that turns organic traffic into predictable, compounding revenue.",
        ctaText: "Book a Keyword Strategy Call",
      }}
      trustBar="Over 20+ businesses trust us"
      sections={[
        {
          type: "stats",
          badge: "Our Track Record",
          heading: "Keyword Research That Delivers Results",
          stats: [
            { value: "12,000+", label: "Keywords Mapped" },
            { value: "500+", label: "Ecommerce Stores" },
            { value: "340%", label: "Avg. Traffic Growth" },
            { value: "8+", label: "Years of Experience" },
          ],
        },
        {
          type: "benefits",
          badge: "Why Us",
          heading: "Why Ecommerce Brands Choose Our Keyword Research",
          subtitle:
            "No generic keyword dumps. No recycled templates. A strategy built around your catalog, your margins, and your customers.",
          benefits: [
            {
              title: "Revenue-Mapped Keywords",
              description:
                "We don\u2019t hand you a spreadsheet of 10,000 keywords. Every keyword we target is mapped to buyer intent, margin potential, and your actual product catalog.",
            },
            {
              title: "Intent Classification",
              description:
                "Every keyword gets classified by buyer intent stage \u2014 informational, commercial, or transactional. We prioritize the terms that put products in carts.",
            },
            {
              title: "Competitive Gap Analysis",
              description:
                "We pull your competitors\u2019 entire keyword footprint, identify ranking gaps, and surface low-competition terms with high conversion potential.",
            },
            {
              title: "AI Overview Targeting",
              description:
                "We identify keywords where AI Overviews appear and optimize your content to be cited by Google\u2019s AI, capturing traffic from the new search landscape.",
            },
            {
              title: "LLM-Optimized Clusters",
              description:
                "We group keywords into topic clusters designed for both traditional rankings and LLM-powered search, future-proofing your strategy.",
            },
            {
              title: "Voice Search Ready",
              description:
                "We include natural language and conversational queries in your keyword map, capturing the growing voice search market.",
            },
          ],
        },
        {
          type: "process",
          badge: "The Methodology",
          heading: "How We Build Your Keyword Strategy",
          subtitle:
            "No generic keyword dumps. No recycled templates. Here\u2019s how we build a keyword strategy that compounds.",
          process: [
            {
              number: "01",
              title: "Revenue & Catalog Audit",
              description:
                "We start with your P&L, not a keyword tool. We map your highest-margin categories, top SKUs, and current organic performance to identify where keyword improvements will drive the most profit.",
            },
            {
              number: "02",
              title: "Intent Classification & Clustering",
              description:
                "Every keyword gets classified by buyer intent stage and grouped into topic clusters. We design your content architecture around how your customers actually search and buy.",
            },
            {
              number: "03",
              title: "Competitive Gap & Opportunity Mapping",
              description:
                "We pull your competitors\u2019 entire keyword footprint, identify ranking gaps, and surface low-competition terms with high conversion potential that they\u2019re overlooking.",
            },
            {
              number: "04",
              title: "Prioritized Roadmap & Tracking",
              description:
                "You get a scored, prioritized keyword roadmap with traffic estimates, revenue projections, and clear next steps. We track performance monthly and adjust targeting based on real data.",
            },
          ],
        },
        {
          type: "deliverables",
          badge: "Deliverables",
          heading: "What You Get",
          deliverables: [
            {
              title: "Keyword Map",
              description: "Revenue-mapped, intent-classified keywords",
            },
            {
              title: "Topic Clusters",
              description: "Content architecture for your catalog",
            },
            {
              title: "Competitive Analysis",
              description: "Full competitor keyword gap report",
            },
            {
              title: "Prioritized Roadmap",
              description: "Scored opportunities with revenue estimates",
            },
          ],
        },
      ]}
      faqs={{
        items: [
          {
            question:
              "What makes your keyword research different from using a tool myself?",
            answer:
              "Tools give you data. We give you strategy. We classify every keyword by intent, map it to your catalog, and prioritize by revenue impact \u2014 not just search volume.",
          },
          {
            question: "How long does the keyword research process take?",
            answer:
              "A full keyword strategy typically takes 2\u20133 weeks. This includes catalog analysis, competitor research, intent classification, and roadmap creation. Rush timelines are available for time-sensitive projects.",
          },
          {
            question: "Do you also implement the keyword strategy?",
            answer:
              "Yes. We can handle end-to-end implementation including on-page optimization, content creation, and technical SEO. Or we can hand off the strategy to your internal team with detailed implementation guides.",
          },
          {
            question: "How do you handle keyword cannibalization?",
            answer:
              "We audit your existing content for cannibalization issues as part of every engagement. When multiple pages compete for the same keyword, we consolidate, redirect, or differentiate them to maximize ranking potential.",
          },
          {
            question: "What tools and data sources do you use?",
            answer:
              "We use a combination of Ahrefs, SEMrush, Google Search Console, DataForSEO, and proprietary tools. But tools are just inputs \u2014 the strategy comes from our ecommerce expertise and revenue-first methodology.",
          },
          {
            question:
              "How do you factor in AI Overviews and LLM-powered search?",
            answer:
              "We identify keywords where AI Overviews appear, analyze which sources get cited, and optimize your content structure for both traditional rankings and AI-powered search results.",
          },
        ],
        miniCta: {
          heading: "Ready to Find the Keywords That Actually Drive Revenue?",
          subtitle:
            "If you\u2019re serious about turning keyword research into a growth lever for your ecommerce brand, let\u2019s talk.",
        },
      }}
    />
  );
}
