import type { Metadata } from "next";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Adobe Commerce SEO Agency | EcomSEO",
  description:
    "Enterprise-grade SEO for Adobe Commerce (Magento) stores. We fix complex multi-store setups, layered navigation, and full page cache issues.",
  openGraph: {
    title: "Adobe Commerce SEO for Enterprise Ecommerce | EcomSEO",
    description:
      "Enterprise-grade SEO for Adobe Commerce (Magento) stores.",
  },
};

export default function AdobeCommerceSeoPage() {
  return (
    <ServicePageTemplate
      hero={{
        badge: "Adobe Commerce Experts",
        heading: "Adobe Commerce SEO for Enterprise Ecommerce",
        subtitle:
          "We optimize Adobe Commerce (Magento) stores for maximum organic visibility. From complex multi-store setups to layered navigation \u2014 we handle the technical debt so you can scale.",
        ctaText: "Book an Adobe Commerce SEO Audit",
      }}
      trustBar="Trusted by 20+ Adobe Commerce stores scaling organic revenue"
      sections={[
        {
          type: "benefits",
          badge: "Common Adobe Commerce SEO Issues",
          heading: "Enterprise-Grade Problems Need Enterprise-Grade SEO",
          benefits: [
            {
              title: "Complex Multi-Store Setup",
              description:
                "Multiple store views, languages, and currencies create duplicate content and canonical confusion across your entire catalog.",
            },
            {
              title: "Layered Navigation Indexation",
              description:
                "Faceted navigation generates thousands of filterable URLs that bloat your index and waste crawl budget.",
            },
            {
              title: "Full Page Cache & Speed",
              description:
                "Varnish misconfigurations and heavy extensions slow down page loads, killing your Core Web Vitals scores.",
            },
            {
              title: "Extension Conflicts",
              description:
                "Third-party modules often inject duplicate meta tags, broken schema, or conflicting redirects that damage your SEO.",
            },
            {
              title: "XML Sitemap Generation",
              description:
                "Default Adobe Commerce sitemaps include noindex pages, filtered URLs, and out-of-stock products that shouldn\u2019t be crawled.",
            },
            {
              title: "Migration & Replatforming",
              description:
                "Moving from Magento 1 to Adobe Commerce 2 without proper redirect mapping and URL preservation destroys organic traffic.",
            },
          ],
        },
        {
          type: "process",
          badge: "Our Playbook",
          heading: "How We Fix Adobe Commerce SEO",
          process: [
            {
              number: "01",
              title: "Enterprise Audit",
              description:
                "Deep crawl of your entire Adobe Commerce instance. We map every store view, URL pattern, and technical issue across your multi-store setup.",
            },
            {
              number: "02",
              title: "Caching & Speed",
              description:
                "Optimize Varnish configuration, reduce TTFB, fix render-blocking resources, and ensure Full Page Cache works correctly across all store views.",
            },
            {
              number: "03",
              title: "Architecture & Content",
              description:
                "Fix layered navigation indexation, implement proper canonical strategies, optimize category structure, and build content that ranks.",
            },
            {
              number: "04",
              title: "Ongoing Monitoring",
              description:
                "Monthly reporting, crawl monitoring, and iterative improvements. We catch regressions from deployments before they impact traffic.",
            },
          ],
        },
        {
          type: "deliverables",
          badge: "Deliverables",
          heading: "What You Get Every Month",
          deliverables: [
            {
              title: "Enterprise Audit",
              description: "Multi-store crawl + fix priorities",
            },
            {
              title: "Speed Optimization",
              description: "Varnish + Core Web Vitals fixes",
            },
            {
              title: "Architecture Plan",
              description: "URL structure + navigation fixes",
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
            question: "Do you work with both Magento and Adobe Commerce?",
            answer:
              "Yes. Adobe Commerce is the enterprise version of Magento. We work with both Magento Open Source and Adobe Commerce, handling the unique SEO challenges of each platform version.",
          },
          {
            question:
              "How do you handle multi-store SEO for Adobe Commerce?",
            answer:
              "We implement proper hreflang tags, canonical strategies, and store view configurations to ensure each store view targets the right audience without creating duplicate content issues.",
          },
          {
            question:
              "Can you help with Magento 1 to Adobe Commerce 2 migration?",
            answer:
              "Absolutely. We create comprehensive redirect maps, preserve URL equity, and monitor traffic during the migration to minimize organic traffic loss.",
          },
          {
            question: "How long does an Adobe Commerce SEO audit take?",
            answer:
              "Enterprise audits typically take 2\u20133 weeks depending on the complexity of your multi-store setup, number of store views, and catalog size.",
          },
          {
            question:
              "Will you work directly with our development team?",
            answer:
              "Yes. We provide detailed technical specifications and work alongside your dev team to implement changes. We understand Adobe Commerce architecture and can communicate effectively with developers.",
          },
          {
            question:
              "How is EcomSEO different from other Adobe Commerce SEO agencies?",
            answer:
              "We combine deep platform expertise with an ecommerce-first mindset. We understand the revenue impact of every technical decision and focus on fixes that drive actual business results, not just rankings.",
          },
        ],
        miniCta: {
          heading: "Ready to Unlock Your Adobe Commerce Potential?",
          subtitle:
            "Book a free audit call and we\u2019ll show you exactly what\u2019s holding your store back.",
        },
      }}
    />
  );
}
