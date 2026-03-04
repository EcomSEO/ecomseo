import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import JsonLd from "@/components/JsonLd";
import { serviceJsonLd, breadcrumbJsonLd } from "@/lib/jsonLd";


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/amazon-seo");
}

export default async function AmazonSeoPage({
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
          name: "Get on Top of Amazon With Your Brand",
          description: "We optimize your Amazon listings, backend keywords, and A+ content to boost organic visibility and drive more sales \u2014 without increasing ad spend.",
          path: "/amazon-seo",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd(locale as Locale, [
          { name: "Home", path: "/" },
          { name: "Get on Top of Amazon With Your Brand", path: "/amazon-seo" },
        ])}
      />
      <ServicePageTemplate
      hero={{
        badge: "Amazon SEO",
        heading: "Get on Top of Amazon With Your Brand",
        subtitle:
          "We optimize your Amazon listings, backend keywords, and A+ content to boost organic visibility and drive more sales — without increasing ad spend.",
        ctaText: "Book an Amazon SEO Audit",
      }}
      trustBar="Trusted by 20+ brands scaling their Amazon organic presence"
      sections={[
        {
          type: "benefits",
          badge: "Full-Service Amazon SEO",
          heading: "Everything You Need to Dominate Amazon Search",
          benefits: [
            {
              title: "Listing Optimization",
              description:
                "We optimize titles, bullet points, and descriptions with high-converting keywords that match Amazon's A9 algorithm requirements.",
            },
            {
              title: "Backend Keyword Strategy",
              description:
                "We fill every available backend search term field with relevant keywords shoppers actually use — maximizing your indexation without keyword stuffing.",
            },
            {
              title: "A+ Content Guidance",
              description:
                "We guide your A+ Content strategy with SEO-optimized modules, comparison charts, and brand storytelling that improves conversion rates.",
            },
            {
              title: "Search Rank Tracking",
              description:
                "We track your organic rankings for priority keywords daily so you always know where you stand and how you're trending.",
            },
            {
              title: "Competitor Monitoring",
              description:
                "We monitor competitor listings, keyword strategies, and ranking changes so you can stay ahead of the competition.",
            },
            {
              title: "Monthly Reporting",
              description:
                "Clear monthly reports on impressions, clicks, conversion rate, and revenue attribution from organic Amazon search.",
            },
          ],
        },
        {
          type: "process",
          badge: "Our Playbook",
          heading: "How We Optimize Your Amazon Presence",
          process: [
            {
              number: "01",
              title: "Account & Catalog Audit",
              description:
                "We analyze your entire Amazon catalog — listings, backend fields, A+ content, and indexation status to identify every optimization opportunity.",
            },
            {
              number: "02",
              title: "Keyword Research & Mapping",
              description:
                "We research high-volume, high-converting Amazon search terms and map them to each product listing for maximum relevance.",
            },
            {
              number: "03",
              title: "Listing Optimization",
              description:
                "We rewrite titles, bullets, descriptions, and backend fields. Every character is optimized for both the algorithm and the shopper.",
            },
            {
              number: "04",
              title: "Ongoing Optimization",
              description:
                "Amazon search is dynamic. We continuously monitor rankings, test listing changes, and adapt to algorithm updates and seasonal trends.",
            },
          ],
        },
        {
          type: "stats",
          badge: "Outcomes",
          heading: "What Amazon SEO Delivers",
          stats: [
            { value: "3.2x", label: "Avg. Impressions Growth" },
            { value: "+85%", label: "Click-Through Improvement" },
            { value: "+22%", label: "Conversion Rate Lift" },
            { value: "$2.4M+", label: "Revenue Attribution" },
          ],
        },
        {
          type: "deliverables",
          badge: "Deliverables",
          heading: "What You Get Every Month",
          deliverables: [
            {
              title: "Listing Audits",
              description: "Full catalog review with optimization priorities",
            },
            {
              title: "Keyword Reports",
              description: "Search term research and ranking tracking",
            },
            {
              title: "Content Updates",
              description: "Listing rewrites and A+ content guidance",
            },
            {
              title: "Performance Reports",
              description: "Monthly impressions, clicks, and revenue data",
            },
          ],
        },
      ]}
      faqs={{
        items: [
          {
            question: "How is Amazon SEO different from Google SEO?",
            answer:
              "Amazon's A9 algorithm prioritizes purchase intent, conversion rate, and sales velocity — not backlinks or domain authority. Our Amazon SEO strategy is built specifically for Amazon's ranking factors.",
          },
          {
            question: "How long until we see results on Amazon?",
            answer:
              "Most brands see measurable ranking improvements within 2–4 weeks of listing optimization. Significant traffic and revenue gains typically follow within 6–12 weeks.",
          },
          {
            question: "Do you manage Amazon PPC as well?",
            answer:
              "Our focus is organic Amazon SEO. However, we coordinate with your PPC team to ensure organic and paid strategies complement each other for maximum visibility.",
          },
          {
            question: "Can you help with Amazon Brand Registry and A+ Content?",
            answer:
              "Yes. We guide A+ Content strategy and help you make the most of Brand Registry features like enhanced brand content, brand stores, and brand analytics.",
          },
          {
            question: "What Amazon marketplaces do you support?",
            answer:
              "We work with all major Amazon marketplaces including US, UK, DE, FR, IT, ES, NL, and more. Our keyword research is localized for each marketplace.",
          },
          {
            question: "Is Amazon SEO worth it if we already run PPC?",
            answer:
              "Absolutely. Organic rankings compound over time and reduce your dependency on ad spend. Most of our clients see organic revenue grow while maintaining or reducing their PPC budget.",
          },
        ],
        miniCta: {
          heading: "Ready to Dominate Amazon Search?",
          subtitle:
            "Get a free Amazon SEO audit and find out exactly what\u2019s holding your listings back.",
        },
      }}
    />
    </>
  );
}
