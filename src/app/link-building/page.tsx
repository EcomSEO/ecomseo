import type { Metadata } from "next";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Ecommerce Link Building Agency | EcomSEO",
  description:
    "Profit-focused link building services for ecommerce brands. We build authority that compounds revenue, not just DR scores.",
  openGraph: {
    title:
      "Profit-Focused Link Building for Ecommerce Brands | EcomSEO",
    description:
      "We build authority that compounds revenue, grows valuation and turns SEO into a predictable profit lever.",
  },
};

export default function LinkBuildingPage() {
  return (
    <ServicePageTemplate
      hero={{
        badge: "Link Building",
        heading: "Profit-Focused Link Building\u200BServices for Ecommerce Brands",
        subtitle:
          "You don\u2019t need more random backlinks. You need link building that compounds revenue, grows valuation and turns SEO into a predictable profit lever.",
        ctaText: "Book a Link Building Strategy Call",
      }}
      trustBar="Over 20+ businesses trust us"
      sections={[
        {
          type: "stats",
          badge: "Results",
          heading: "Results That Speak for Themselves",
          subtitle: "Real revenue uplifts, not just vanity metrics.",
          stats: [
            { value: "9,000", label: "Links Secured" },
            { value: "900+", label: "Partner Sites" },
            { value: "500+", label: "Happy Clients" },
            { value: "8+", label: "Years of Experience" },
          ],
        },
        {
          type: "benefits",
          badge: "The Methodology",
          heading: "Ecommerce Link Building: From Collections to Revenue",
          subtitle:
            "We don\u2019t start with DR; we start with your P&L.",
          benefits: [
            {
              title: "Content-Led Link Building",
              description:
                "We create linkable assets \u2014 data studies, guides, and tools \u2014 that earn natural placements from publishers in your niche.",
            },
            {
              title: "Digital PR Outreach",
              description:
                "Strategic outreach to journalists and editors at publications your customers actually read. Real coverage, real authority.",
            },
            {
              title: "Resource & Listicle Placement",
              description:
                "We get your products and brand featured in existing \u201Cbest of\u201D lists, resource pages, and roundups that drive referral traffic and link equity.",
            },
            {
              title: "Broken Link Reclamation",
              description:
                "We identify broken links pointing to competitors and redirect that authority to your pages. Free link equity from others\u2019 mistakes.",
            },
            {
              title: "Partner & Supplier Links",
              description:
                "We leverage your existing business relationships \u2014 suppliers, distributors, partners \u2014 to earn contextual links that Google trusts.",
            },
            {
              title: "LLM-Ready Link Building",
              description:
                "AI Overviews and answer boxes are dominating SERPs. We build links from sources that LLMs cite, ensuring your brand appears in AI-powered search.",
            },
          ],
        },
        {
          type: "process",
          badge: "The Process",
          heading: "A Transparent Process You Can Trust",
          subtitle:
            "Stop guessing where your budget is going. We combine data-driven strategy with manual outreach to deliver links that actually move the needle.",
          process: [
            {
              number: "01",
              title: "Competitor Link Gap Analysis",
              description:
                "We map your competitors\u2019 backlink profiles, identify where they earn authority, and find opportunities they\u2019re missing.",
            },
            {
              number: "02",
              title: "Strategy & Asset Creation",
              description:
                "We build linkable content assets and outreach campaigns tailored to your niche, products, and target publications.",
            },
            {
              number: "03",
              title: "Manual Outreach & Placement",
              description:
                "Real emails to real editors. No automated spam. Every placement is vetted for relevance, authority, and traffic potential.",
            },
            {
              number: "04",
              title: "Reporting & Iteration",
              description:
                "Monthly reports showing every link earned, domain metrics, and ranking impact. We iterate based on what\u2019s moving the needle.",
            },
          ],
        },
        {
          type: "deliverables",
          badge: "What You Get",
          heading: "What You Get in the First 90 Days",
          deliverables: [
            {
              title: "Link Gap Analysis",
              description: "Full competitor backlink audit",
            },
            {
              title: "Outreach Campaigns",
              description: "Targeted placements in your niche",
            },
            {
              title: "Content Assets",
              description: "Linkable guides, data, and tools",
            },
            {
              title: "Monthly Reports",
              description: "Every link, every metric, every month",
            },
          ],
        },
      ]}
      faqs={{
        items: [
          {
            question: "What is SEO Link Building exactly?",
            answer:
              "SEO link building is the practice of getting relevant, high-quality websites to link to your pages in a way that helps you rank higher for target keywords, earn more organic traffic, and build trust \u2014 all without putting your domain at risk. It\u2019s focused, intentional, and aligned with your overall SEO strategy.",
          },
          {
            question: "What are the main methods of link building you use?",
            answer:
              "We use a mix of content-led link building & digital PR, resource/listicle outreach, broken link building, partner/supplier collaborations, and safe editorial guest posting. The exact mix depends on your niche.",
          },
          {
            question: "How fast will we see results?",
            answer:
              "It depends on your starting authority, competitiveness, and technical SEO. Typically, clients start seeing meaningful movement on priority terms within a few months, with compounding gains as links and content snowball. We\u2019ll set realistic expectations before we start.",
          },
          {
            question: "Do you guarantee specific DR or DA scores?",
            answer:
              "No. Domain metrics are indicators, not goals. We focus on links that drive rankings and revenue. A DR 40 link from a relevant industry publication often outperforms a DR 80 link from a generic site.",
          },
          {
            question: "How do you vet link placements?",
            answer:
              "Every placement is manually reviewed for relevance, organic traffic, domain authority, and editorial quality. We never use PBNs, link farms, or automated outreach. Your brand reputation is as important to us as your rankings.",
          },
          {
            question: "Can link building work for ecommerce specifically?",
            answer:
              "Absolutely. Ecommerce link building requires a different approach than SaaS or local business. We build links to category pages, product pages, and supporting content that directly impacts commercial rankings and revenue.",
          },
        ],
        miniCta: {
          heading: "Ready to Build Authority That Prints Revenue?",
          subtitle:
            "If you\u2019re serious about turning link building into a profit lever for your ecommerce brand, let\u2019s talk.",
        },
      }}
    />
  );
}
