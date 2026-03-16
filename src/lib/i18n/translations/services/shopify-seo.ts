import type { Locale } from "../../config";
import type { ServicePageProps } from "@/components/service/ServicePageTemplate";

export const shopifySeoData: Record<Locale, ServicePageProps> = {
  en: {
    hero: {
      badge: "Shopify SEO Experts",
      heading: "The Shopify SEO Agency That Drives Revenue, Not Rankings",
      subtitle:
        "We audit, fix, and scale organic traffic for Shopify and Shopify Plus stores. While other agencies chase vanity metrics, we engineer the technical foundations that turn search visibility into revenue.",
      ctaText: "Book a Free Shopify SEO Audit",
    },
    trustBar: "Trusted by 50+ Shopify stores across Europe and the US",
    sections: [
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
              "Collection filters, tags, and product-in-collection URL variants generate thousands of duplicate pages. A single store with 200 products and 30 collections can create 6,000+ duplicate URLs that compete against each other, diluting crawl budget and splitting link equity. We implement strategic canonical tags and [robots.txt directives](/academy/robots-txt-and-xml-sitemaps) to resolve this at the source.",
          },
          {
            title: "Slow Theme Speed",
            description:
              "Bloated Liquid templates, unoptimized images, and excessive app scripts tank your Core Web Vitals. We've seen stores with 6-8 apps adding 1-2MB of extra JavaScript per page load. Our clients typically see a 30-40% improvement in initial load time after our [speed optimization](/tools/core-web-vitals).",
          },
          {
            title: "Broken Canonical Tags",
            description:
              "Shopify's default canonical tags often point to the wrong URL variant. When a product appears in multiple collections, Shopify creates a URL for each — but the canonical doesn't always resolve correctly. We audit every canonical tag using our [canonical checker](/tools/canonical-checker) and fix conflicts at the template level.",
          },
          {
            title: "Pagination Indexation",
            description:
              "Paginated collection pages get indexed as separate URLs, splitting authority across dozens of thin pages. When your collection has 15 pages, Google may index all 15 as separate ranking candidates. We implement proper pagination markup and [restructure collection architecture](/academy/crawl-budget-management) to consolidate authority.",
          },
          {
            title: "Missing Structured Data",
            description:
              "Product schema, review markup, and breadcrumb structured data are absent or incorrectly implemented in most Shopify themes. Without valid structured data, your products won't display rich results in Google. We implement custom JSON-LD using our [schema validator](/tools/schema-validator) and follow [structured data best practices](/academy/structured-data-for-products).",
          },
          {
            title: "URL Structure Limits",
            description:
              "Shopify enforces /collections/ and /products/ prefixes in all URLs. We work within these constraints to build the most SEO-friendly [site architecture](/academy/site-architecture-for-ecommerce) possible through strategic collection naming, handle optimization, and internal linking patterns.",
          },
        ],
      },
      {
        type: "benefits",
        badge: "Shopify SEO Services",
        heading: "What's Included in Our Shopify SEO Services",
        subtitle:
          "A full-stack Shopify SEO engagement — not a checklist, but a system built around your store's specific revenue goals.",
        benefits: [
          {
            title: "Technical SEO Audit",
            description:
              "Full crawl analysis of your Shopify store covering indexation issues, canonical conflicts, speed bottlenecks, and structured data gaps. We don't just hand you a report — we implement every fix.",
            href: "/tools/shopify-seo-audit",
          },
          {
            title: "Collection Architecture",
            description:
              "Your collection structure IS your site architecture on Shopify. We restructure collections, subcollections, and internal linking to create a clear topical hierarchy that Google can understand and reward.",
            href: "/academy/category-page-seo",
          },
          {
            title: "Keyword Research & Strategy",
            description:
              "We identify the keywords your customers actually use at every stage of the buying journey and map them to specific pages on your store. Full keyword universe mapping with [buyer intent classification](/academy/buyer-intent-vs-search-volume).",
            href: "/academy/keyword-research-for-ecommerce",
          },
          {
            title: "On-Page Optimization",
            description:
              "Every product page, collection page, and blog post optimized for maximum search visibility. Meta titles, descriptions, heading structures, and product descriptions that rank and sell. [Check your meta tags](/tools/meta-tags-checker).",
            href: "/academy/product-page-seo",
          },
          {
            title: "Link Building & Digital PR",
            description:
              "Backlinks remain one of Google's strongest ranking signals. We build high-quality, relevant links from authoritative sites through digital PR, guest content, and strategic outreach.",
            href: "/academy/backlink-fundamentals-for-ecommerce",
          },
          {
            title: "Monthly Reporting",
            description:
              "Transparent monthly reports that connect SEO activity directly to revenue impact. Keyword rankings, organic traffic, revenue attribution, and a next-month action plan with priorities.",
          },
        ],
      },
      {
        type: "process",
        badge: "Our Playbook",
        heading: "How We Scale Shopify Organic Traffic",
        subtitle:
          "A proven four-phase process refined across 50+ Shopify stores. Every engagement follows this framework, adapted to your store's specific challenges.",
        process: [
          {
            number: "01",
            title: "Discovery & Audit",
            description:
              "Full crawl analysis of your Shopify store — every URL, every canonical tag, every speed metric. We deliver a 50+ page technical audit with a prioritized roadmap. Timeline: Week 1-2.",
          },
          {
            number: "02",
            title: "Foundation & Quick Wins",
            description:
              "We implement all technical fixes: canonical corrections, speed optimization, schema markup, sitemap configuration. Most stores see measurable improvements within 60-90 days. Timeline: Week 3-6.",
            href: "/tools/core-web-vitals",
          },
          {
            number: "03",
            title: "Growth & Expansion",
            description:
              "With the technical foundation solid, we focus on collection architecture optimization, content creation, and [link building](/link-building). This is where organic traffic starts compounding. Timeline: Month 2-4.",
          },
          {
            number: "04",
            title: "Scale & Compound",
            description:
              "SEO is a compounding channel. We scale what's working, expand into new keyword territories, and optimize based on performance data. Monthly strategy calls keep us aligned. Timeline: Month 4+.",
          },
        ],
      },
      {
        type: "caseStudies",
        badge: "Proven Results",
        heading: "What Happens When Shopify SEO Is Done Right",
        subtitle:
          "Real stores, real numbers. Here's what our Shopify SEO work looks like in practice.",
        caseStudies: [
          {
            badge: "Health & Wellness · Shopify Plus",
            title: "Norwegian Health Store",
            metrics: [
              { value: "+1,900%", label: "Keyword Growth" },
              { value: "Top 3", label: "Ranking Positions" },
              { value: "12 mo", label: "Timeframe" },
            ],
            quote:
              "EcomSEO transformed our organic visibility from near-zero to dominating our category.",
            quoteAuthor:
              "Marketing Director, Health & Wellness Brand",
            href: "/cases/norwegian-health-store",
          },
          {
            badge: "Ecommerce · On-Page",
            title: "7x Traffic in 90 Days",
            metrics: [
              { value: "7x", label: "Traffic Increase" },
              { value: "90 days", label: "To Results" },
              { value: "+632%", label: "Revenue Growth" },
            ],
            href: "/cases/ecommerce-brand",
          },
          {
            badge: "Swedish Market · Link Building",
            title: "From 37 to 1,529 Keywords",
            metrics: [
              { value: "1,529", label: "Ranking Keywords" },
              { value: "446K+", label: "Monthly Impressions" },
              { value: "6 mo", label: "Timeframe" },
            ],
            href: "/cases/skyrocket-ecom-site",
          },
        ],
        ctaText: "View All Case Studies",
        ctaHref: "/cases",
      },
      {
        type: "tips",
        badge: "Expert Insights",
        heading: "7 Shopify SEO Tips From Our Team",
        subtitle:
          "After optimizing 50+ Shopify stores, these are the highest-impact actions we recommend to every store owner.",
        tips: [
          {
            number: "01",
            title: "Fix Your Collection Page Content First",
            body: "Most Shopify stores have zero unique content on collection pages — just a grid of products. Google sees these as thin pages with no topical relevance. Add 200-500 words of unique, keyword-optimized content above or below the product grid on your top collections. This single change can dramatically improve rankings.",
            href: "/academy/category-page-seo",
            hrefLabel: "Collection page SEO guide",
          },
          {
            number: "02",
            title: "Audit Your Canonical Tags Monthly",
            body: "Shopify themes, app installations, and product changes can break canonical tags silently. Use our free canonical checker or Google Search Console's coverage report to catch issues before they impact your rankings.",
            href: "/tools/canonical-checker",
            hrefLabel: "Free canonical checker",
          },
          {
            number: "03",
            title: "Check App Script Impact Before Installing",
            body: "Every Shopify app adds JavaScript to your storefront. Before installing, test your page speed, install the app, then test again. If an app adds more than 100KB of scripts, evaluate whether the functionality justifies the speed cost. We've seen single apps increase load time by 2+ seconds.",
            href: "/tools/core-web-vitals",
            hrefLabel: "Check your site speed",
          },
          {
            number: "04",
            title: "Implement Product Schema Manually",
            body: "Don't rely on your theme's built-in schema — most themes implement it incorrectly or incompletely. Use a dedicated schema app or implement custom JSON-LD in your theme's product.liquid template. Include: name, image, description, SKU, price, currency, availability, and review ratings.",
            href: "/tools/schema-generator",
            hrefLabel: "Generate product schema",
          },
          {
            number: "05",
            title: "Build Internal Links Between Products and Blog",
            body: "Shopify's default internal linking is weak. Create explicit links from blog posts to relevant products, from products to related buying guides, and from collection descriptions to supporting content. This builds topical authority and helps Google understand your catalog.",
            href: "/academy/internal-linking-for-stores",
            hrefLabel: "Internal linking guide",
          },
          {
            number: "06",
            title: "Use Metafields for Unique Product Content",
            body: "Instead of cramming everything into the main description, use Shopify metafields for structured content blocks: ingredient lists, size guides, care instructions, FAQ sections. More content surface area for keywords and better user experience.",
            href: "/academy/product-page-seo",
            hrefLabel: "Product page SEO guide",
          },
          {
            number: "07",
            title: "Monitor Google Search Console Weekly",
            body: "GSC is your single most valuable SEO tool — and it's free. Check Coverage for indexation issues, Performance for keyword opportunities, and Core Web Vitals for speed regressions. Most Shopify SEO issues appear in GSC before they affect your traffic.",
            href: "/academy/google-search-console-for-stores",
            hrefLabel: "GSC setup guide",
          },
        ],
      },
      {
        type: "richText",
        badge: "Shopify Plus SEO",
        heading: "Shopify Plus SEO — Enterprise-Grade Optimization",
        subtitle:
          "Shopify Plus stores face unique SEO challenges that standard Shopify doesn't.",
        richTextBlocks: [
          {
            body: "Multi-currency storefronts, international domains, larger catalogs with 10,000+ SKUs, custom checkout scripts, and headless commerce configurations all require specialized SEO expertise. We've optimized Shopify Plus stores across 8 markets including the UK, Germany, Austria, France, Belgium, Spain, Italy, and the Netherlands.",
          },
          {
            heading: "What's Different About Plus SEO",
            body: "Hreflang implementation across international domains, multi-currency structured data handling, larger crawl budget optimization for 10,000+ pages, custom Liquid section and app extension SEO, and headless Hydrogen SEO for custom storefronts. Our [hreflang validator](/tools/hreflang-validator) helps us catch implementation errors across all your market variations.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Why EcomSEO",
        heading: "Why Your Shopify Store Needs a Specialized SEO Agency",
        subtitle:
          "Generic SEO agencies treat Shopify the same way they treat WordPress or Squarespace. That works for basic websites — but Shopify stores have platform-specific technical debt that requires platform-specific expertise.",
        richTextBlocks: [
          {
            heading: "What Generic Agencies Miss",
            body: "Collection filter duplicate URLs that need blocking, product-in-collection URL variants that split authority, Liquid template speed optimization they've never worked with, app script overhead that makes your site slower, and Shopify's URL constraints that can't be changed. We only work with ecommerce brands. Every member of our team has hands-on experience inside Shopify stores — not just advising from the outside, but actually building, configuring, and scaling them.",
          },
        ],
      },
      {
        type: "team",
        badge: "The Team",
        heading: "The Shopify SEO Specialists Behind Your Growth",
        teamLead: {
          name: "Fabian van Til",
          role: "Strategy & Innovation",
          bio: "Leads the strategic direction for all client engagements. 8+ years of ecommerce SEO experience across fashion, health, beauty, and home goods verticals. Blends growth strategy with technical SEO innovation.",
          image: "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "Technical SEO Lead",
            bio: "Architects the technical SEO foundations. Specializes in Shopify theme optimization, structured data, and site architecture. Builds the free SEO tools on this site.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://www.linkedin.com/in/dimitar-georgiev-seo/",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Link Building",
            bio: "Masters link acquisition and digital PR at scale. Builds backlink profiles that move the needle for competitive ecommerce keywords across European and US markets.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "On-Page & Content Strategy",
            bio: "Crafts content strategies and on-page optimizations that rank and convert. Specializes in product and collection page optimization, keyword research, and editorial planning.",
            image: "/images/framer/gjorgi-jovev.png",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Deliverables",
        heading: "What You Get Every Month",
        subtitle:
          "Transparent reporting and tangible outputs — no fluff, no vanity metrics. Everything is tied to your revenue goals.",
        deliverables: [
          {
            title: "Technical Audit",
            description:
              "Full crawl + prioritized fix list with implementation tracking",
          },
          {
            title: "Schema Markup",
            description:
              "Product, breadcrumb, and organization JSON-LD — validated and monitored",
          },
          {
            title: "Speed Optimization",
            description:
              "Core Web Vitals improvements with before/after benchmarks",
          },
          {
            title: "Keyword Research",
            description:
              "Monthly keyword opportunity analysis with buyer intent classification",
          },
          {
            title: "Content Creation",
            description:
              "SEO-optimized product descriptions, collection content, and blog posts",
          },
          {
            title: "Link Building",
            description:
              "Quality backlink acquisition with full transparency on methods",
          },
          {
            title: "Monthly Report",
            description:
              "Rankings, organic traffic, revenue attribution, and action plan",
          },
          {
            title: "Strategy Call",
            description:
              "Monthly 30-min call to review progress and align on priorities",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Why does my Shopify store need specialized SEO?",
          answer:
            "Shopify has unique technical SEO challenges that generic agencies miss — duplicate content from collections and tags, auto-generated URL structures, limited control over canonical tags, and theme-level speed issues. We specialize in solving these platform-specific problems so your store ranks higher and converts more organic traffic. Our [Shopify ecommerce SEO guide](/blog/shopify-ecommerce-seo) covers the most common issues in detail.",
        },
        {
          question: "How long until I see results from Shopify SEO?",
          answer:
            "Most stores see measurable improvements in organic traffic within 60–90 days after our technical fixes are implemented. This is the foundation phase where we resolve issues actively suppressing your rankings. Significant revenue impact typically follows within 4–6 months as content and link building compound. SEO is a compounding channel — the earlier you start, the more it pays off.",
        },
        {
          question: "Do you work with Shopify Plus stores?",
          answer:
            "Yes. We work with both standard Shopify and Shopify Plus stores across Europe and the US. Plus stores often have more complex catalog structures, international storefronts with [hreflang requirements](/tools/hreflang-validator), and custom theme code — all areas where our technical SEO expertise delivers the most value. We've optimized Plus stores across 8 international markets.",
        },
        {
          question: "What does a Shopify SEO audit include?",
          answer:
            "Our audit covers: crawlability and indexation issues, duplicate content from collections/tags/vendors, canonical tag implementation across all page types, [structured data validation](/academy/structured-data-for-products) and gaps, Core Web Vitals and theme speed analysis, URL architecture assessment, [internal linking structure](/academy/internal-linking-for-stores) mapping, image optimization audit, and content gap analysis vs. your top organic competitors. You can [run a free preliminary audit](/tools/shopify-seo-audit) right now.",
        },
        {
          question: "Will you make changes directly to my Shopify store?",
          answer:
            "Yes, with your approval. We handle all technical implementations — theme code optimizations, schema markup, meta tag templates, redirect management, robots.txt configuration, and sitemap setup. You review and approve every change before it goes live. We work in a duplicate theme environment so nothing touches your live store until you're confident.",
        },
        {
          question:
            "How is EcomSEO different from other Shopify SEO agencies?",
          answer:
            "Three things set us apart. First, we only work with ecommerce brands — deeper platform expertise. Second, we focus on revenue metrics, not vanity rankings — every report connects SEO activity to actual revenue impact. Third, we practice radical transparency — you see exactly what we're doing, why, and how it's performing. Learn more about our [technical SEO methodology](/technical-seo).",
        },
        {
          question: "How much does Shopify SEO cost?",
          answer:
            "Our Shopify SEO engagements typically range from €2,000 to €5,000 per month depending on store size, catalog complexity, number of markets, and competitive landscape. We offer a free audit call where we assess your store and provide a custom proposal based on what your store actually needs — not a one-size-fits-all package.",
        },
        {
          question: "Is Shopify good for SEO?",
          answer:
            "Shopify handles roughly 80% of technical SEO automatically — it generates sitemaps, manages robots.txt, creates canonical tags, and provides SSL. However, the remaining 20% includes platform-specific issues that can seriously limit growth: duplicate content, rigid URL structures, limited heading tag control, and theme speed variability. With proper optimization, Shopify stores can absolutely compete with stores on any other platform.",
        },
        {
          question: "Do I need a Shopify SEO app?",
          answer:
            "For structured data, a dedicated app like JSON-LD for SEO (~€10/month) is worth the investment since most themes implement product schema incorrectly. For redirects, apps like Yoast SEO for Shopify can help. But be careful: every app adds JavaScript. We've seen stores where SEO apps themselves were the biggest speed problem. When you work with us, we implement most optimizations at the theme level — faster and more reliable than apps.",
        },
        {
          question:
            "What if I'm migrating to Shopify from another platform?",
          answer:
            "Platform migrations are one of the highest-risk SEO events for any ecommerce store. A poorly planned migration can wipe out years of organic equity overnight. We handle migration SEO as a specialized project: full URL mapping, 301 redirect planning, structured data migration, and post-launch monitoring. We've managed migrations from WooCommerce, Magento, BigCommerce, and custom platforms to Shopify. Learn about [platform migration SEO](/academy/platform-migration-seo).",
        },
      ],
      miniCta: {
        heading: "Ready to Fix Your Shopify SEO?",
        subtitle:
          "Book a free audit call. We'll crawl your store, identify the biggest opportunities, and show you exactly what's holding you back — no pitch deck, just data.",
      },
    },
  },
  de: {
    hero: {
      badge: "Shopify-SEO-Experten",
      heading: "Shopify-SEO, das wirklich Umsatz bringt",
      subtitle:
        "Unser Spezialgebiet. Wir prüfen, reparieren und skalieren den organischen Traffic für Shopify- und Shopify-Plus-Shops — damit Sie aufhören, Umsatz an die Konkurrenz zu verlieren.",
      ctaText: "Shopify-SEO-Audit buchen",
    },
    trustBar: "Mehr als 20 Shopify-Shops vertrauen uns beim organischen Wachstum",
    sections: [
      {
        type: "stats",
        badge: "Erfolgsbilanz",
        heading: "Zahlen, die für sich sprechen",
        stats: [
          { value: "8+", label: "Jahre Shopify-SEO" },
          { value: "12\u00a0Mio.\u00a0€+", label: "generierter Umsatz" },
          { value: "50+", label: "optimierte Shopify-Shops" },
          { value: "140\u00a0%", label: "durchschn. Traffic-Steigerung" },
        ],
      },
      {
        type: "benefits",
        badge: "Häufige Shopify-SEO-Probleme",
        heading: "Die Shopify-SEO-Probleme, die wir täglich lösen",
        subtitle:
          "Die meisten Shopify-Shops haben dieselben technischen SEO-Altlasten. Wir wissen genau, wo wir suchen müssen.",
        benefits: [
          {
            title: "Duplicate Content",
            description:
              "Kollektionsfilter und Tags erzeugen Tausende doppelte URLs, die Ihr Crawl-Budget verwässern.",
          },
          {
            title: "Langsame Themes",
            description:
              "Aufgeblähte Liquid-Templates, nicht optimierte Bilder und zu viele App-Skripte verschlechtern Ihre Core Web Vitals.",
          },
          {
            title: "Fehlerhafte Canonical-Tags",
            description:
              "Shopifys Standard-Canonicals verweisen oft auf die falsche URL-Variante und verwirren Google über Ihre bevorzugten Seiten.",
          },
          {
            title: "Paginierungs-Indexierung",
            description:
              "Paginierte Kollektionsseiten werden als einzelne URLs indexiert und verteilen die Autorität auf Dutzende dünner Seiten.",
          },
          {
            title: "Fehlende strukturierte Daten",
            description:
              "Produkt-, Bewertungs- und Breadcrumb-Schema fehlen oder sind fehlerhaft — das kostet Sie Rich-Snippet-Sichtbarkeit.",
          },
          {
            title: "URL-Struktur-Einschränkungen",
            description:
              "Shopify erzwingt /collections/- und /products/-Präfixe. Wir arbeiten innerhalb dieser Grenzen für optimale Crawlbarkeit.",
          },
        ],
      },
      {
        type: "process",
        badge: "Unser Playbook",
        heading: "So skalieren wir Shopify-organischen Traffic",
        subtitle:
          "Ein bewährter Vier-Schritte-Prozess, verfeinert an über 50 Shopify-Shops.",
        process: [
          {
            number: "01",
            title: "Technisches Audit",
            description:
              "Vollständige Crawl-Analyse Ihres Shopify-Shops. Wir identifizieren jedes Indexierungsproblem, jeden Canonical-Konflikt und jeden Speed-Engpass.",
          },
          {
            number: "02",
            title: "Theme-Optimierung",
            description:
              "Speed-Fixes auf Liquid-Template-Ebene. Wir optimieren Render-blockierende Ressourcen, Bilder und Drittanbieter-Skripte.",
          },
          {
            number: "03",
            title: "Kollektions-Architektur",
            description:
              "Kollektionen, Tags und interne Verlinkung neu strukturieren, um eine klare Hierarchie zu schaffen, die Google versteht und belohnt.",
          },
          {
            number: "04",
            title: "Laufendes Monitoring",
            description:
              "Monatliche Reports, Ranking-Tracking und iterative Verbesserungen. Wir erkennen Probleme, bevor sie Traffic kosten.",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Lieferumfang",
        heading: "Was Sie jeden Monat erhalten",
        subtitle:
          "Transparente Berichte und greifbare Ergebnisse — kein Blabla, keine Eitelkeitskennzahlen.",
        deliverables: [
          {
            title: "Technischer Audit-Bericht",
            description: "Vollständiger Crawl + priorisierte Fix-Liste",
          },
          {
            title: "Schema-Implementierung",
            description: "Produkt- + Breadcrumb-JSON-LD",
          },
          {
            title: "Speed-Optimierung",
            description: "Core-Web-Vitals-Verbesserungen",
          },
          {
            title: "Monatlicher Report",
            description: "Rankings, Traffic, Umsatzauswirkung",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Warum braucht mein Shopify-Shop spezialisiertes SEO?",
          answer:
            "Shopify hat einzigartige technische SEO-Herausforderungen, die generische Agenturen übersehen — Duplicate Content durch Kollektionen und Tags, automatisch generierte URL-Strukturen, begrenzte Kontrolle über Canonical-Tags und Theme-bedingte Speed-Probleme. Wir sind auf die Lösung dieser plattformspezifischen Probleme spezialisiert. Unser [Shopify-E-Commerce-SEO-Leitfaden](/blog/shopify-ecommerce-seo) behandelt die häufigsten Probleme im Detail.",
        },
        {
          question: "Wie schnell sehe ich Ergebnisse bei Shopify-SEO?",
          answer:
            "Die meisten Shops verzeichnen innerhalb von 60–90 Tagen nach Umsetzung unserer technischen Fixes messbare Verbesserungen beim organischen Traffic. Signifikante Umsatzauswirkungen folgen typischerweise innerhalb von 4–6 Monaten.",
        },
        {
          question: "Arbeiten Sie auch mit Shopify-Plus-Shops?",
          answer:
            "Absolut. Wir arbeiten sowohl mit Standard-Shopify als auch mit Shopify-Plus-Shops. Plus-Shops haben oft komplexere Katalogstrukturen, internationale Storefronts und individuellen Theme-Code — genau dort liefert unsere technische SEO-Expertise den größten Mehrwert.",
        },
        {
          question: "Was beinhaltet ein Shopify-SEO-Audit?",
          answer:
            "Unser Audit umfasst Crawlbarkeits- und Indexierungsprobleme, Duplicate Content durch Kollektionen/Tags/Hersteller, Canonical-Tag-Implementierung, [Lücken bei strukturierten Daten](/academy/structured-data-for-products), Core Web Vitals und Theme-Speed, URL-Architektur, interne Verlinkungsstruktur und Content-Lücken im Vergleich zu Ihren Top-Wettbewerbern.",
        },
        {
          question: "Nehmen Sie Änderungen direkt an meinem Shopify-Shop vor?",
          answer:
            "Ja, mit Ihrer Genehmigung. Wir übernehmen alle technischen Implementierungen — Theme-Code-Optimierungen, Schema-Markup, Meta-Tag-Templates, Redirect-Management und Sitemap-Konfiguration. Sie prüfen und genehmigen jede Änderung, bevor sie live geht.",
        },
        {
          question:
            "Was unterscheidet EcomSEO von anderen Shopify-SEO-Agenturen?",
          answer:
            "Wir arbeiten ausschließlich mit E-Commerce-Marken und verstehen daher die Umsatzauswirkung jeder SEO-Entscheidung. Wir konzentrieren uns auf Profit-Metriken (nicht Eitelkeits-Rankings), bieten radikale Transparenz im Reporting und denken als Unternehmer — wir haben selbst E-Commerce-Marken aufgebaut und skaliert. Erfahren Sie mehr über unsere [technische SEO-Methodik](/technical-seo).",
        },
      ],
      miniCta: {
        heading: "Bereit, Ihr Shopify-SEO zu reparieren?",
        subtitle:
          "Buchen Sie ein kostenloses Audit-Gespräch und wir zeigen Ihnen genau, was Ihren Shop zurückhält.",
      },
    },
  },
  fr: {
    hero: {
      badge: "Experts SEO Shopify",
      heading: "SEO Shopify qui génère vraiment du chiffre d\u2019affaires",
      subtitle:
        "Notre spécialité. Nous auditons, corrigeons et développons le trafic organique des boutiques Shopify et Shopify Plus — pour que vous arrêtiez de perdre du chiffre d\u2019affaires au profit de vos concurrents.",
      ctaText: "Réserver un audit SEO Shopify",
    },
    trustBar: "Plus de 20 boutiques Shopify nous font confiance pour leur croissance organique",
    sections: [
      {
        type: "stats",
        badge: "Bilan",
        heading: "Des chiffres qui parlent d\u2019eux-mêmes",
        stats: [
          { value: "8+", label: "années de SEO Shopify" },
          { value: "12\u00a0M\u00a0€+", label: "de CA généré" },
          { value: "50+", label: "boutiques Shopify optimisées" },
          { value: "140\u00a0%", label: "hausse de trafic moyenne" },
        ],
      },
      {
        type: "benefits",
        badge: "Problèmes SEO Shopify courants",
        heading: "Les problèmes SEO Shopify que nous résolvons chaque jour",
        subtitle:
          "La plupart des boutiques Shopify partagent les mêmes dettes techniques SEO. Nous savons exactement où chercher.",
        benefits: [
          {
            title: "Contenu dupliqué",
            description:
              "Les filtres et tags de collections créent des milliers d\u2019URL dupliquées qui diluent votre budget de crawl.",
          },
          {
            title: "Thème lent",
            description:
              "Des templates Liquid surchargés, des images non optimisées et des scripts d\u2019apps excessifs plombent vos Core Web Vitals.",
          },
          {
            title: "Tags canonical cassés",
            description:
              "Les canonicals par défaut de Shopify pointent souvent vers la mauvaise variante d\u2019URL, créant de la confusion pour Google.",
          },
          {
            title: "Indexation de la pagination",
            description:
              "Les pages de collection paginées sont indexées séparément, dispersant l\u2019autorité sur des dizaines de pages à faible contenu.",
          },
          {
            title: "Données structurées manquantes",
            description:
              "Les schémas produit, avis et fil d\u2019Ariane sont absents ou cassés — vous coûtant en visibilité de rich snippets.",
          },
          {
            title: "Limites de structure d\u2019URL",
            description:
              "Shopify impose les préfixes /collections/ et /products/. Nous travaillons dans ces contraintes pour une crawlabilité optimale.",
          },
        ],
      },
      {
        type: "process",
        badge: "Notre méthode",
        heading: "Comment nous développons le trafic organique Shopify",
        subtitle:
          "Un processus en quatre étapes affiné sur plus de 50 boutiques Shopify.",
        process: [
          {
            number: "01",
            title: "Audit technique",
            description:
              "Analyse complète du crawl de votre boutique Shopify. Nous identifions chaque problème d\u2019indexation, conflit canonical et goulot d\u2019étranglement.",
          },
          {
            number: "02",
            title: "Optimisation du thème",
            description:
              "Corrections de vitesse au niveau des templates Liquid. Nous optimisons les ressources bloquantes, les images et les scripts tiers.",
          },
          {
            number: "03",
            title: "Architecture des collections",
            description:
              "Restructuration des collections, tags et maillage interne pour créer une hiérarchie claire que Google peut comprendre et récompenser.",
          },
          {
            number: "04",
            title: "Suivi continu",
            description:
              "Rapports mensuels, suivi des positions et améliorations itératives. Nous détectons les problèmes avant qu\u2019ils ne coûtent du trafic.",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Livrables",
        heading: "Ce que vous recevez chaque mois",
        subtitle:
          "Des rapports transparents et des résultats concrets — pas de baratin, pas de métriques de vanité.",
        deliverables: [
          {
            title: "Rapport d\u2019audit technique",
            description: "Crawl complet + liste de corrections priorisées",
          },
          {
            title: "Implémentation de schémas",
            description: "JSON-LD produit + fil d\u2019Ariane",
          },
          {
            title: "Optimisation de la vitesse",
            description: "Améliorations des Core Web Vitals",
          },
          {
            title: "Rapport mensuel",
            description: "Positions, trafic, impact sur le CA",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Pourquoi ma boutique Shopify a-t-elle besoin d\u2019un SEO spécialisé\u00a0?",
          answer:
            "Shopify présente des défis techniques SEO uniques que les agences généralistes ne voient pas — contenu dupliqué par les collections et tags, structures d\u2019URL auto-générées, contrôle limité des canonical tags et problèmes de vitesse liés au thème. Nous sommes spécialisés dans la résolution de ces problèmes spécifiques à la plateforme. Notre [guide SEO e-commerce Shopify](/blog/shopify-ecommerce-seo) couvre les problèmes les plus courants en détail.",
        },
        {
          question: "En combien de temps vais-je voir des résultats avec le SEO Shopify\u00a0?",
          answer:
            "La plupart des boutiques constatent des améliorations mesurables du trafic organique dans les 60\u00a0à\u00a090\u00a0jours suivant nos corrections techniques. L\u2019impact significatif sur le chiffre d\u2019affaires suit généralement dans les 4\u00a0à\u00a06\u00a0mois.",
        },
        {
          question: "Travaillez-vous avec les boutiques Shopify Plus\u00a0?",
          answer:
            "Absolument. Nous travaillons avec les boutiques Shopify standard et Shopify Plus. Les boutiques Plus ont souvent des structures de catalogue plus complexes, des vitrines internationales et du code de thème personnalisé — autant de domaines où notre expertise SEO technique apporte le plus de valeur.",
        },
        {
          question: "Que comprend un audit SEO Shopify\u00a0?",
          answer:
            "Notre audit couvre les problèmes de crawlabilité et d\u2019indexation, le contenu dupliqué des collections/tags/fournisseurs, l\u2019implémentation des canonical tags, les [lacunes en données structurées](/academy/structured-data-for-products), les Core Web Vitals et la vitesse du thème, l\u2019architecture des URL, le maillage interne et les lacunes de contenu par rapport à vos concurrents.",
        },
        {
          question: "Ferez-vous des modifications directement sur ma boutique Shopify\u00a0?",
          answer:
            "Oui, avec votre accord. Nous gérons toutes les implémentations techniques — optimisations du code du thème, balisage schema, templates de balises meta, gestion des redirections et configuration du sitemap. Vous validez chaque modification avant sa mise en ligne.",
        },
        {
          question:
            "En quoi EcomSEO se distingue-t-il des autres agences SEO Shopify\u00a0?",
          answer:
            "Nous travaillons exclusivement avec des marques e-commerce et comprenons l\u2019impact sur le CA de chaque décision SEO. Nous nous concentrons sur les métriques de profit (pas les classements de vanité), offrons une transparence totale dans nos rapports et apportons un état d\u2019esprit d\u2019opérateur — nous avons nous-mêmes construit et développé des marques e-commerce. Découvrez notre [méthodologie SEO technique](/technical-seo).",
        },
      ],
      miniCta: {
        heading: "Prêt à corriger votre SEO Shopify\u00a0?",
        subtitle:
          "Réservez un appel d\u2019audit gratuit et nous vous montrerons exactement ce qui freine votre boutique.",
      },
    },
  },
  es: {
    hero: {
      badge: "Expertos en SEO para Shopify",
      heading: "SEO para Shopify que realmente genera ingresos",
      subtitle:
        "Nuestra especialidad. Auditamos, reparamos y escalamos el tráfico orgánico de tiendas Shopify y Shopify Plus, para que dejes de perder ingresos frente a la competencia.",
      ctaText: "Reserva una auditoría SEO Shopify",
    },
    trustBar: "Más de 20 tiendas Shopify confían en nosotros para crecer orgánicamente",
    sections: [
      {
        type: "stats",
        badge: "Trayectoria",
        heading: "Números que hablan por sí solos",
        stats: [
          { value: "8+", label: "años de SEO Shopify" },
          { value: "12\u00a0M\u00a0€+", label: "ingresos generados" },
          { value: "50+", label: "tiendas Shopify optimizadas" },
          { value: "140\u00a0%", label: "aumento medio de tráfico" },
        ],
      },
      {
        type: "benefits",
        badge: "Problemas SEO comunes en Shopify",
        heading: "Los problemas de SEO Shopify que resolvemos cada día",
        subtitle:
          "La mayoría de las tiendas Shopify comparten la misma deuda técnica SEO. Sabemos exactamente dónde mirar.",
        benefits: [
          {
            title: "Contenido duplicado",
            description:
              "Los filtros y etiquetas de colecciones crean miles de URLs duplicadas que diluyen tu presupuesto de rastreo.",
          },
          {
            title: "Tema lento",
            description:
              "Plantillas Liquid sobrecargadas, imágenes sin optimizar y scripts excesivos de apps hunden tus Core Web Vitals.",
          },
          {
            title: "Etiquetas canonical rotas",
            description:
              "Los canonicals por defecto de Shopify a menudo apuntan a la variante de URL incorrecta, confundiendo a Google sobre tus páginas preferidas.",
          },
          {
            title: "Indexación de paginación",
            description:
              "Las páginas de colección paginadas se indexan como URLs independientes, dividiendo la autoridad en decenas de páginas débiles.",
          },
          {
            title: "Datos estructurados ausentes",
            description:
              "Los esquemas de producto, reseñas y breadcrumbs están ausentes o rotos, costándote visibilidad en rich snippets.",
          },
          {
            title: "Limitaciones de estructura de URL",
            description:
              "Shopify impone los prefijos /collections/ y /products/. Trabajamos dentro de estas restricciones para una rastreabilidad óptima.",
          },
        ],
      },
      {
        type: "process",
        badge: "Nuestro método",
        heading: "Cómo escalamos el tráfico orgánico en Shopify",
        subtitle:
          "Un proceso probado en cuatro pasos, perfeccionado en más de 50 tiendas Shopify.",
        process: [
          {
            number: "01",
            title: "Auditoría técnica",
            description:
              "Análisis completo de rastreo de tu tienda Shopify. Mapeamos cada problema de indexación, conflicto canonical y cuello de botella de velocidad.",
          },
          {
            number: "02",
            title: "Optimización del tema",
            description:
              "Correcciones de velocidad a nivel de plantilla Liquid. Optimizamos recursos que bloquean el renderizado, imágenes y scripts de terceros.",
          },
          {
            number: "03",
            title: "Arquitectura de colecciones",
            description:
              "Reestructuramos colecciones, etiquetas y enlaces internos para crear una jerarquía clara que Google entienda y recompense.",
          },
          {
            number: "04",
            title: "Monitorización continua",
            description:
              "Informes mensuales, seguimiento de rankings y mejoras iterativas. Detectamos problemas antes de que te cuesten tráfico.",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Entregables",
        heading: "Lo que recibes cada mes",
        subtitle:
          "Informes transparentes y resultados tangibles — sin relleno, sin métricas de vanidad.",
        deliverables: [
          {
            title: "Informe de auditoría técnica",
            description: "Crawl completo + lista de correcciones priorizada",
          },
          {
            title: "Implementación de schema",
            description: "JSON-LD de producto + breadcrumbs",
          },
          {
            title: "Optimización de velocidad",
            description: "Mejoras en Core Web Vitals",
          },
          {
            title: "Informe mensual",
            description: "Rankings, tráfico, impacto en ingresos",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "¿Por qué mi tienda Shopify necesita SEO especializado?",
          answer:
            "Shopify tiene desafíos técnicos SEO únicos que las agencias generalistas pasan por alto: contenido duplicado por colecciones y etiquetas, estructuras de URL autogeneradas, control limitado de canonical tags y problemas de velocidad del tema. Nos especializamos en resolver estos problemas específicos de la plataforma. Nuestra [guía SEO e-commerce para Shopify](/blog/shopify-ecommerce-seo) cubre los problemas más comunes en detalle.",
        },
        {
          question: "¿Cuánto tarda en verse resultados con el SEO de Shopify?",
          answer:
            "La mayoría de tiendas ven mejoras medibles en tráfico orgánico en 60–90 días tras implementar nuestras correcciones técnicas. El impacto significativo en ingresos suele llegar en 4–6 meses.",
        },
        {
          question: "¿Trabajan con tiendas Shopify Plus?",
          answer:
            "Por supuesto. Trabajamos con tiendas Shopify estándar y Shopify Plus. Las tiendas Plus suelen tener estructuras de catálogo más complejas, escaparates internacionales y código de tema personalizado, áreas donde nuestra experiencia técnica SEO aporta más valor.",
        },
        {
          question: "¿Qué incluye una auditoría SEO de Shopify?",
          answer:
            "Nuestra auditoría cubre problemas de rastreabilidad e indexación, contenido duplicado de colecciones/etiquetas/proveedores, implementación de canonical tags, [carencias en datos estructurados](/academy/structured-data-for-products), Core Web Vitals y velocidad del tema, arquitectura de URLs, estructura de enlazado interno y brechas de contenido frente a tus principales competidores.",
        },
        {
          question: "¿Haréis cambios directamente en mi tienda Shopify?",
          answer:
            "Sí, con tu aprobación. Nos encargamos de todas las implementaciones técnicas: optimizaciones del código del tema, marcado schema, plantillas de meta tags, gestión de redirecciones y configuración de sitemap. Tú revisas y apruebas cada cambio antes de que se publique.",
        },
        {
          question:
            "¿En qué se diferencia EcomSEO de otras agencias SEO para Shopify?",
          answer:
            "Solo trabajamos con marcas de e-commerce, así que entendemos el impacto en ingresos de cada decisión SEO. Nos centramos en métricas de rentabilidad (no rankings de vanidad), ofrecemos total transparencia en los informes y pensamos como operadores: hemos construido y escalado marcas de e-commerce nosotros mismos. Conoce más sobre nuestra [metodología de SEO técnico](/technical-seo).",
        },
      ],
      miniCta: {
        heading: "¿Listo para arreglar tu SEO en Shopify?",
        subtitle:
          "Reserva una llamada de auditoría gratuita y te mostraremos exactamente qué está frenando tu tienda.",
      },
    },
  },
  it: {
    hero: {
      badge: "Esperti SEO Shopify",
      heading: "SEO Shopify che genera davvero fatturato",
      subtitle:
        "La nostra specialità. Analizziamo, correggiamo e facciamo crescere il traffico organico per negozi Shopify e Shopify Plus — così smetti di perdere fatturato a favore dei concorrenti.",
      ctaText: "Prenota un audit SEO Shopify",
    },
    trustBar: "Oltre 20 negozi Shopify si affidano a noi per la crescita organica",
    sections: [
      {
        type: "stats",
        badge: "Track record",
        heading: "Numeri che parlano da soli",
        stats: [
          { value: "8+", label: "anni di SEO Shopify" },
          { value: "12\u00a0Mln\u00a0€+", label: "fatturato generato" },
          { value: "50+", label: "negozi Shopify ottimizzati" },
          { value: "140\u00a0%", label: "aumento medio del traffico" },
        ],
      },
      {
        type: "benefits",
        badge: "Problemi SEO Shopify comuni",
        heading: "I problemi SEO Shopify che risolviamo ogni giorno",
        subtitle:
          "La maggior parte dei negozi Shopify condivide lo stesso debito tecnico SEO. Sappiamo esattamente dove cercare.",
        benefits: [
          {
            title: "Contenuti duplicati",
            description:
              "I filtri e i tag delle collezioni creano migliaia di URL duplicate che diluiscono il budget di scansione.",
          },
          {
            title: "Tema lento",
            description:
              "Template Liquid appesantiti, immagini non ottimizzate e script di app eccessivi affondano i Core Web Vitals.",
          },
          {
            title: "Tag canonical errati",
            description:
              "I canonical predefiniti di Shopify spesso puntano alla variante URL sbagliata, confondendo Google sulle pagine preferite.",
          },
          {
            title: "Indicizzazione della paginazione",
            description:
              "Le pagine di collezione paginate vengono indicizzate come URL separate, disperdendo l\u2019autorità su decine di pagine deboli.",
          },
          {
            title: "Dati strutturati mancanti",
            description:
              "Gli schema prodotto, recensioni e breadcrumb sono assenti o rotti — ti costano visibilità nei rich snippet.",
          },
          {
            title: "Limiti della struttura URL",
            description:
              "Shopify impone i prefissi /collections/ e /products/. Lavoriamo all\u2019interno di questi vincoli per una scansionabilità ottimale.",
          },
        ],
      },
      {
        type: "process",
        badge: "Il nostro metodo",
        heading: "Come facciamo crescere il traffico organico Shopify",
        subtitle:
          "Un processo in quattro fasi perfezionato su oltre 50 negozi Shopify.",
        process: [
          {
            number: "01",
            title: "Audit tecnico",
            description:
              "Analisi completa del crawl del tuo negozio Shopify. Mappiamo ogni problema di indicizzazione, conflitto canonical e collo di bottiglia della velocità.",
          },
          {
            number: "02",
            title: "Ottimizzazione del tema",
            description:
              "Correzioni di velocità a livello di template Liquid. Ottimizziamo risorse bloccanti, immagini e script di terze parti.",
          },
          {
            number: "03",
            title: "Architettura delle collezioni",
            description:
              "Ristrutturiamo collezioni, tag e link interni per creare una gerarchia chiara che Google possa comprendere e premiare.",
          },
          {
            number: "04",
            title: "Monitoraggio continuo",
            description:
              "Report mensili, monitoraggio delle posizioni e miglioramenti iterativi. Individuiamo i problemi prima che costino traffico.",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Deliverable",
        heading: "Cosa ricevi ogni mese",
        subtitle:
          "Report trasparenti e risultati concreti — niente fuffa, niente metriche di vanità.",
        deliverables: [
          {
            title: "Report audit tecnico",
            description: "Crawl completo + lista fix prioritizzata",
          },
          {
            title: "Implementazione schema",
            description: "JSON-LD prodotto + breadcrumb",
          },
          {
            title: "Ottimizzazione velocità",
            description: "Miglioramenti Core Web Vitals",
          },
          {
            title: "Report mensile",
            description: "Posizioni, traffico, impatto sul fatturato",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Perché il mio negozio Shopify ha bisogno di un SEO specializzato?",
          answer:
            "Shopify presenta sfide SEO tecniche uniche che le agenzie generaliste non colgono — contenuti duplicati da collezioni e tag, strutture URL generate automaticamente, controllo limitato sui tag canonical e problemi di velocità del tema. Siamo specializzati nel risolvere questi problemi specifici della piattaforma. La nostra [guida SEO e-commerce Shopify](/blog/shopify-ecommerce-seo) copre i problemi più comuni in dettaglio.",
        },
        {
          question: "Quanto tempo ci vuole per vedere risultati con il SEO Shopify?",
          answer:
            "La maggior parte dei negozi registra miglioramenti misurabili nel traffico organico entro 60–90 giorni dall\u2019implementazione dei nostri fix tecnici. L\u2019impatto significativo sul fatturato segue tipicamente entro 4–6 mesi.",
        },
        {
          question: "Lavorate anche con negozi Shopify Plus?",
          answer:
            "Assolutamente. Lavoriamo sia con Shopify standard che con Shopify Plus. I negozi Plus spesso hanno strutture di catalogo più complesse, vetrine internazionali e codice tema personalizzato — tutte aree in cui la nostra competenza SEO tecnica offre il massimo valore.",
        },
        {
          question: "Cosa include un audit SEO Shopify?",
          answer:
            "Il nostro audit copre problemi di scansionabilità e indicizzazione, contenuti duplicati da collezioni/tag/fornitori, implementazione dei tag canonical, [lacune nei dati strutturati](/academy/structured-data-for-products), Core Web Vitals e velocità del tema, architettura degli URL, struttura dei link interni e gap di contenuto rispetto ai tuoi principali concorrenti.",
        },
        {
          question: "Apporterete modifiche direttamente al mio negozio Shopify?",
          answer:
            "Sì, con la tua approvazione. Gestiamo tutte le implementazioni tecniche — ottimizzazioni del codice del tema, markup schema, template dei meta tag, gestione dei redirect e configurazione della sitemap. Tu rivedi e approvi ogni modifica prima che vada live.",
        },
        {
          question:
            "In cosa si differenzia EcomSEO dalle altre agenzie SEO Shopify?",
          answer:
            "Lavoriamo esclusivamente con brand e-commerce, quindi comprendiamo l\u2019impatto sul fatturato di ogni decisione SEO. Ci concentriamo su metriche di profitto (non ranking di vanità), offriamo totale trasparenza nel reporting e ragioniamo da operatori — abbiamo costruito e scalato brand e-commerce noi stessi. Scopri di più sulla nostra [metodologia SEO tecnica](/technical-seo).",
        },
      ],
      miniCta: {
        heading: "Pronto a sistemare il SEO del tuo Shopify?",
        subtitle:
          "Prenota una call di audit gratuita e ti mostreremo esattamente cosa sta frenando il tuo negozio.",
      },
    },
  },
  nl: {
    hero: {
      badge: "Shopify SEO-experts",
      heading: "Shopify-SEO die écht omzet oplevert",
      subtitle:
        "Ons paradepaardje. We auditen, fixen en schalen organisch verkeer voor Shopify- en Shopify Plus-winkels — zodat je stopt met omzet verliezen aan de concurrentie.",
      ctaText: "Boek een Shopify SEO-audit",
    },
    trustBar: "Meer dan 20 Shopify-winkels vertrouwen op ons voor organische groei",
    sections: [
      {
        type: "stats",
        badge: "Track record",
        heading: "Cijfers die voor zich spreken",
        stats: [
          { value: "8+", label: "jaar Shopify-SEO" },
          { value: "€\u00a012\u00a0M+", label: "gegenereerde omzet" },
          { value: "50+", label: "Shopify-winkels geoptimaliseerd" },
          { value: "140\u00a0%", label: "gem. verkeerstoename" },
        ],
      },
      {
        type: "benefits",
        badge: "Veelvoorkomende Shopify SEO-problemen",
        heading: "De Shopify SEO-problemen die we dagelijks oplossen",
        subtitle:
          "De meeste Shopify-winkels delen dezelfde technische SEO-schuld. Wij weten precies waar we moeten kijken.",
        benefits: [
          {
            title: "Dubbele content",
            description:
              "Collectiefilters en tags creëren duizenden dubbele URL\u2019s die je crawlbudget verdunnen.",
          },
          {
            title: "Traag thema",
            description:
              "Opgeblazen Liquid-templates, ongeoptimaliseerde afbeeldingen en te veel app-scripts schaden je Core Web Vitals.",
          },
          {
            title: "Foutieve canonical-tags",
            description:
              "Shopify\u2019s standaard canonicals verwijzen vaak naar de verkeerde URL-variant, wat Google in verwarring brengt over je voorkeurspagina\u2019s.",
          },
          {
            title: "Paginering-indexatie",
            description:
              "Gepagineerde collectiepagina\u2019s worden als afzonderlijke URL\u2019s geïndexeerd, waardoor autoriteit verdeeld raakt over tientallen dunne pagina\u2019s.",
          },
          {
            title: "Ontbrekende gestructureerde data",
            description:
              "Product-, review- en breadcrumb-schema\u2019s ontbreken of zijn defect — dat kost je rich snippet-zichtbaarheid.",
          },
          {
            title: "URL-structuurbeperkingen",
            description:
              "Shopify dwingt /collections/- en /products/-prefixen af. Wij werken binnen deze beperkingen voor optimale crawlbaarheid.",
          },
        ],
      },
      {
        type: "process",
        badge: "Ons playbook",
        heading: "Hoe we Shopify organisch verkeer schalen",
        subtitle:
          "Een bewezen vierstappenproces, verfijnd bij meer dan 50 Shopify-winkels.",
        process: [
          {
            number: "01",
            title: "Technische audit",
            description:
              "Volledige crawl-analyse van je Shopify-winkel. We brengen elk indexatieprobleem, canonical-conflict en snelheidsknelpunt in kaart.",
          },
          {
            number: "02",
            title: "Thema-optimalisatie",
            description:
              "Snelheidsfixes op Liquid-templateniveau. We optimaliseren renderblokkerende bronnen, afbeeldingen en scripts van derden.",
          },
          {
            number: "03",
            title: "Collectie-architectuur",
            description:
              "Collecties, tags en interne links herstructureren om een duidelijke hiërarchie te creëren die Google begrijpt en beloont.",
          },
          {
            number: "04",
            title: "Doorlopende monitoring",
            description:
              "Maandelijkse rapportages, rankingtracking en iteratieve verbeteringen. We signaleren problemen voordat ze verkeer kosten.",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Deliverables",
        heading: "Wat je elke maand ontvangt",
        subtitle:
          "Transparante rapportages en tastbare resultaten — geen opvulling, geen ijdelheidsmetrics.",
        deliverables: [
          {
            title: "Technisch auditrapport",
            description: "Volledige crawl + geprioriteerde fixlijst",
          },
          {
            title: "Schema-implementatie",
            description: "Product + breadcrumb JSON-LD",
          },
          {
            title: "Snelheidsoptimalisatie",
            description: "Core Web Vitals-verbeteringen",
          },
          {
            title: "Maandelijks rapport",
            description: "Rankings, verkeer, omzetimpact",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Waarom heeft mijn Shopify-winkel gespecialiseerde SEO nodig?",
          answer:
            "Shopify heeft unieke technische SEO-uitdagingen die generieke bureaus missen — dubbele content door collecties en tags, automatisch gegenereerde URL-structuren, beperkte controle over canonical tags en thema-gerelateerde snelheidsproblemen. Wij zijn gespecialiseerd in het oplossen van deze platformspecifieke problemen. Onze [Shopify e-commerce SEO-gids](/blog/shopify-ecommerce-seo) behandelt de meest voorkomende problemen in detail.",
        },
        {
          question: "Hoe snel zie ik resultaten van Shopify-SEO?",
          answer:
            "De meeste winkels zien meetbare verbeteringen in organisch verkeer binnen 60–90 dagen na implementatie van onze technische fixes. Significante omzetimpact volgt doorgaans binnen 4–6 maanden.",
        },
        {
          question: "Werken jullie ook met Shopify Plus-winkels?",
          answer:
            "Absoluut. We werken met zowel standaard Shopify als Shopify Plus-winkels. Plus-winkels hebben vaak complexere catalogusstructuren, internationale storefronts en aangepaste themacode — precies de gebieden waar onze technische SEO-expertise het meeste waarde oplevert.",
        },
        {
          question: "Wat omvat een Shopify SEO-audit?",
          answer:
            "Onze audit dekt crawlbaarheids- en indexatieproblemen, dubbele content van collecties/tags/leveranciers, canonical tag-implementatie, [hiaten in gestructureerde data](/academy/structured-data-for-products), Core Web Vitals en themasnelheid, URL-architectuur, interne linkstructuur en contentgaten ten opzichte van je belangrijkste concurrenten.",
        },
        {
          question: "Brengen jullie wijzigingen direct aan in mijn Shopify-winkel?",
          answer:
            "Ja, met jouw goedkeuring. We verzorgen alle technische implementaties — themacode-optimalisaties, schema-markup, meta-tag-templates, redirectbeheer en sitemapconfiguratie. Jij reviewt en keurt elke wijziging goed voordat deze live gaat.",
        },
        {
          question:
            "Wat onderscheidt EcomSEO van andere Shopify SEO-bureaus?",
          answer:
            "We werken uitsluitend met e-commercemerken, dus begrijpen we de omzetimpact van elke SEO-beslissing. We focussen op winstmetrics (niet ijdelheidsrankings), bieden radicale transparantie in rapportages en denken als operators — we hebben zelf e-commercemerken gebouwd en opgeschaald. Lees meer over onze [technische SEO-methodologie](/technical-seo).",
        },
      ],
      miniCta: {
        heading: "Klaar om je Shopify-SEO te fixen?",
        subtitle:
          "Boek een gratis auditgesprek en we laten je precies zien wat je winkel tegenhoudt.",
      },
    },
  },
};
