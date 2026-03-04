import type { Metadata } from "next";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";

export const metadata: Metadata = {
  title: "BigCommerce SEO Agency | EcomSEO",
  description:
    "BigCommerce SEO for high-SKU catalogs. We optimize BigCommerce stores for crawlability, speed, and organic revenue growth.",
  openGraph: {
    title: "BigCommerce SEO for High-SKU Catalogs | EcomSEO",
    description:
      "We optimize BigCommerce stores for crawlability, speed, and organic revenue growth.",
  },
};

export default function BigCommerceSeoPage() {
  return (
    <ServicePageTemplate
      hero={{
        badge: "BigCommerce Experts",
        heading: "BigCommerce SEO for High-SKU Catalogs",
        subtitle:
          "Many SKUs? No worries, we got it covered. We optimize BigCommerce stores for crawlability, speed, and organic revenue growth.",
        ctaText: "Book a BigCommerce SEO Audit",
      }}
      trustBar="Trusted by 20+ BigCommerce stores scaling organic revenue"
      sections={[
        {
          type: "benefits",
          badge: "Common BigCommerce SEO Issues",
          heading: "Technical Challenges That Hold BigCommerce Stores Back",
          benefits: [
            {
              title: "Faceted Navigation Bloat",
              description:
                "BigCommerce faceted search creates thousands of indexable filter URLs. Without proper handling, crawl budget gets wasted on low-value pages.",
            },
            {
              title: "Category Depth Issues",
              description:
                "Deep nested category structures push important products too far from the homepage. We flatten your architecture for better crawl depth.",
            },
            {
              title: "Limited URL Control",
              description:
                "BigCommerce URL structure has limitations compared to open-source platforms. We work within the system to maximize URL SEO value.",
            },
            {
              title: "Bulk Product Optimization",
              description:
                "With thousands of SKUs, manual optimization is impossible. We build scalable processes for title tags, meta descriptions, and product schema.",
            },
            {
              title: "Thin Category Content",
              description:
                "Default BigCommerce category pages lack unique content. We add optimized descriptions and supporting content that drives rankings.",
            },
            {
              title: "Speed at Scale",
              description:
                "Large catalogs with heavy images and third-party scripts slow page load. We optimize for Core Web Vitals without sacrificing functionality.",
            },
          ],
        },
        {
          type: "process",
          badge: "Our Playbook",
          heading: "How We Fix BigCommerce SEO",
          process: [
            {
              number: "01",
              title: "Platform & Catalog Audit",
              description:
                "We crawl your entire BigCommerce store to map indexation issues, faceted navigation problems, category depth, and speed bottlenecks.",
            },
            {
              number: "02",
              title: "Faceted Nav Strategy",
              description:
                "We implement proper canonicalization, robots directives, and URL parameter handling to control which filter pages get indexed.",
            },
            {
              number: "03",
              title: "Category Architecture",
              description:
                "We flatten deep category structures, add unique content to collection pages, and build an internal linking strategy that distributes authority.",
            },
            {
              number: "04",
              title: "Ongoing Optimization",
              description:
                "Monthly reporting on rankings, traffic, and technical health. We continuously optimize product pages and category content at scale.",
            },
          ],
        },
        {
          type: "deliverables",
          badge: "Deliverables",
          heading: "What You Get Every Month",
          deliverables: [
            {
              title: "Platform Audit",
              description: "Full crawl report covering facets, categories, and speed",
            },
            {
              title: "URL Strategy",
              description: "Faceted nav cleanup and canonical implementation",
            },
            {
              title: "Content Plan",
              description: "Category content and product optimization roadmap",
            },
            {
              title: "Monthly Reporting",
              description: "Rankings, traffic, and technical health tracking",
            },
          ],
        },
      ]}
      faqs={{
        items: [
          {
            question: "How long does BigCommerce SEO take to show results?",
            answer:
              "Most BigCommerce stores see measurable improvements within 3-6 months. Technical fixes like faceted navigation cleanup and URL optimization can show results within weeks.",
          },
          {
            question: "Do you work with BigCommerce Enterprise?",
            answer:
              "Yes. We work with all BigCommerce plans including Enterprise. Our audits cover multi-storefront setups, custom integrations, and advanced catalog structures.",
          },
          {
            question: "Can you fix BigCommerce URL structure issues?",
            answer:
              "Absolutely. BigCommerce has known URL limitations. We implement redirect strategies, optimize category hierarchies, and work within the platform constraints to maximize SEO performance.",
          },
          {
            question: "What about BigCommerce headless SEO?",
            answer:
              "We have experience with BigCommerce headless implementations using Next.js, Gatsby, and other frameworks. We ensure proper rendering, indexation, and structured data in headless setups.",
          },
          {
            question: "How do you handle BigCommerce faceted navigation?",
            answer:
              "We audit your faceted navigation for duplicate content and crawl waste, then implement proper canonical tags, robots directives, and URL parameter handling to keep Google focused on your best pages.",
          },
          {
            question: "Do you provide ongoing BigCommerce SEO support?",
            answer:
              "Yes. Our monthly retainers include monitoring, reporting, and continuous optimization. We track rankings, traffic, and revenue attribution so you always know your ROI.",
          },
        ],
        miniCta: {
          heading: "Ready to Scale Your BigCommerce Store?",
          subtitle:
            "Get a free BigCommerce SEO audit and find out exactly what\u2019s holding your store back.",
        },
      }}
    />
  );
}
