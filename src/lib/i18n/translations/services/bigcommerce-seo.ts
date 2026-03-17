import type { Locale } from "../../config";
import type { ServicePageProps } from "@/components/service/ServicePageTemplate";

export const bigcommerceSeoData: Record<Locale, ServicePageProps> = {
  en: {
    hero: {
      badge: "BigCommerce Experts",
      heading: "BigCommerce SEO for High-SKU Catalogs",
      subtitle:
        "Many SKUs? No worries, we got it covered. We optimize BigCommerce stores for crawlability, speed, and organic revenue growth.",
      ctaText: "Book a BigCommerce SEO Audit",
    },
    trustBar: "Trusted by 20+ BigCommerce stores scaling organic revenue",
    sections: [
      {
        type: "stats",
        badge: "Track Record",
        heading: "Numbers That Speak for Themselves",
        stats: [
          { value: "8+", label: "Years of Ecommerce SEO" },
          { value: "$12M+", label: "Revenue Generated" },
          { value: "50+", label: "Ecommerce Stores Optimized" },
          { value: "140%", label: "Avg. Traffic Increase" },
        ],
      },
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
        type: "caseStudies",
        badge: "Proven Results",
        heading: "What Happens When BigCommerce SEO Is Done Right",
        subtitle: "Real stores, real numbers. Here's what our ecommerce SEO work looks like in practice.",
        caseStudies: [
          {
            badge: "Health & Wellness · Ecommerce",
            title: "Norwegian Health Store",
            metrics: [
              { value: "+1,900%", label: "Keyword Growth" },
              { value: "Top 3", label: "Ranking Positions" },
              { value: "12 mo", label: "Timeframe" },
            ],
            quote: "EcomSEO transformed our organic visibility from near-zero to dominating our category.",
            quoteAuthor: "Marketing Director, Health & Wellness Brand",
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
            badge: "European Market · Link Building",
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
        heading: "7 BigCommerce SEO Tips From Our Team",
        subtitle: "After optimizing dozens of ecommerce stores, these are the highest-impact BigCommerce-specific actions we recommend.",
        tips: [
          {
            number: "01",
            title: "Fix Your Faceted Navigation First",
            body: "BigCommerce's faceted search creates hundreds of indexable filter URLs by default. Use robots.txt and canonical tags to block filter combinations from being indexed. This single fix can recover 30-50% of wasted crawl budget.",
            href: "/academy/crawl-budget-management",
            hrefLabel: "Crawl budget guide",
          },
          {
            number: "02",
            title: "Optimize Category Page Content",
            body: "BigCommerce category pages default to just a product grid. Add 200-500 words of unique, keyword-rich content above or below the grid. Use the built-in description field and custom template modifications to make categories rank.",
            href: "/academy/category-page-seo",
            hrefLabel: "Category page SEO guide",
          },
          {
            number: "03",
            title: "Implement Custom Schema Markup",
            body: "BigCommerce's built-in schema is basic. Add custom JSON-LD for Product, BreadcrumbList, and Organization schema. Include aggregateRating, offers with price and availability, and brand data for rich results.",
            href: "/tools/schema-validator",
            hrefLabel: "Validate your schema",
          },
          {
            number: "04",
            title: "Leverage BigCommerce's Built-in Blog",
            body: "BigCommerce has a built-in blog that most stores ignore. Use it to target informational keywords that drive top-of-funnel traffic. Link from blog posts to relevant product and category pages to distribute authority.",
          },
          {
            number: "05",
            title: "Optimize Product Image File Names",
            body: "Before uploading images, rename files from IMG_4523.jpg to descriptive names like blue-leather-wallet-front.webp. BigCommerce uses file names in URLs and alt text generation. This small step improves image SEO significantly.",
          },
          {
            number: "06",
            title: "Set Up Proper 301 Redirects",
            body: "When removing products or changing URLs, always create 301 redirects in BigCommerce's URL redirects manager. Broken product links from external sites lose you link equity and frustrate potential customers.",
          },
          {
            number: "07",
            title: "Monitor Core Web Vitals After App Installs",
            body: "Every BigCommerce app adds JavaScript to your storefront. Before installing any app, test your page speed. After installing, test again. If LCP increases by more than 500ms, the app isn't worth the trade-off.",
            href: "/tools/core-web-vitals",
            hrefLabel: "Check your Core Web Vitals",
          },
        ],
      },
      {
        type: "richText",
        badge: "BigCommerce Enterprise",
        heading: "BigCommerce Enterprise SEO — Built for Scale",
        subtitle: "BigCommerce Enterprise stores face unique SEO challenges that standard plans don't encounter.",
        richTextBlocks: [
          {
            heading: "What's Different About Enterprise SEO",
            body: "Multi-storefront configurations with separate domains, advanced product filtering with hundreds of attribute combinations, custom checkout flows that need proper indexation handling, headless commerce implementations with Next.js or Gatsby that require SSR optimization, and catalog sizes exceeding 10,000 SKUs that demand scalable optimization processes. Our team has worked with BigCommerce Enterprise stores across European and US markets.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Why EcomSEO",
        heading: "Why Your BigCommerce Store Needs a Specialized SEO Agency",
        subtitle: "Generic SEO agencies treat BigCommerce like any other platform. BigCommerce stores have unique architecture that requires platform-specific expertise.",
        richTextBlocks: [
          {
            heading: "What Generic Agencies Miss",
            body: "BigCommerce's URL structure limitations compared to open-source platforms, faceted navigation that creates thousands of duplicate URLs, Stencil theme optimization for speed and crawlability, built-in features that conflict with third-party SEO tools, multi-storefront canonical management, and BigCommerce API integration for bulk product optimization. We only work with ecommerce brands — every team member has hands-on experience inside BigCommerce stores.",
          },
        ],
      },
      {
        type: "team",
        badge: "The Team",
        heading: "The BigCommerce SEO Specialists Behind Your Growth",
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
            bio: "Architects the technical SEO foundations. Specializes in ecommerce platform optimization, structured data, and site architecture. Builds the free SEO tools on this site.",
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
        subtitle: "Transparent reporting and tangible outputs — no fluff, no vanity metrics. Everything is tied to your revenue goals.",
        deliverables: [
          { title: "Technical Audit", description: "Full crawl + prioritized fix list with implementation tracking" },
          { title: "Schema Markup", description: "Product, breadcrumb, and organization JSON-LD — validated and monitored" },
          { title: "Speed Optimization", description: "Core Web Vitals improvements with before/after benchmarks" },
          { title: "Keyword Research", description: "Monthly keyword opportunity analysis with buyer intent classification" },
          { title: "Content Creation", description: "SEO-optimized product descriptions, category content, and blog posts" },
          { title: "Link Building", description: "Quality backlink acquisition with full transparency on methods" },
          { title: "Monthly Report", description: "Rankings, organic traffic, revenue attribution, and action plan" },
          { title: "Strategy Call", description: "Monthly 30-min call to review progress and align on priorities" },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "How long does BigCommerce SEO take to show results?",
          answer:
            "Most BigCommerce stores see measurable improvements within 3-6 months. Technical fixes like faceted navigation cleanup and URL optimization can show results within weeks. See our [BigCommerce SEO guide](/academy/bigcommerce-seo-guide) for platform-specific tactics.",
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
            "We audit your faceted navigation for duplicate content and crawl waste, then implement proper canonical tags, robots directives, and URL parameter handling to keep Google focused on your best pages. Our [technical SEO for ecommerce](/blog/technical-seo-for-ecommerce) article dives deeper into these fixes.",
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
    },
  },
  de: {
    hero: {
      badge: "BigCommerce-Experten",
      heading: "BigCommerce SEO f\u00fcr umfangreiche Produktkataloge",
      subtitle:
        "Viele SKUs? Kein Problem \u2014 wir k\u00fcmmern uns darum. Wir optimieren BigCommerce-Shops f\u00fcr Crawlbarkeit, Geschwindigkeit und organisches Umsatzwachstum.",
      ctaText: "BigCommerce SEO-Audit buchen",
    },
    trustBar: "Mehr als 20 BigCommerce-Shops vertrauen auf unser organisches Wachstum",
    sections: [
      {
        type: "stats",
        badge: "Erfolgsbilanz",
        heading: "Zahlen, die für sich sprechen",
        stats: [
          { value: "8+", label: "Jahre E-Commerce-SEO" },
          { value: "$12M+", label: "Generierter Umsatz" },
          { value: "50+", label: "Optimierte Onlineshops" },
          { value: "140%", label: "Durchschn. Traffic-Steigerung" },
        ],
      },
      {
        type: "benefits",
        badge: "H\u00e4ufige BigCommerce SEO-Probleme",
        heading: "Technische Herausforderungen, die BigCommerce-Shops ausbremsen",
        benefits: [
          {
            title: "Aufgebl\u00e4hte Facettennavigation",
            description:
              "Die Facettensuche von BigCommerce erzeugt Tausende indexierbarer Filter-URLs. Ohne gezielte Steuerung wird das Crawl-Budget f\u00fcr wertlose Seiten verschwendet.",
          },
          {
            title: "Tiefe Kategoriestrukturen",
            description:
              "Tief verschachtelte Kategorien dr\u00e4ngen wichtige Produkte zu weit von der Startseite weg. Wir vereinfachen Ihre Architektur f\u00fcr bessere Crawl-Tiefe.",
          },
          {
            title: "Eingeschr\u00e4nkte URL-Kontrolle",
            description:
              "BigCommerce-URL-Strukturen haben Einschr\u00e4nkungen im Vergleich zu Open-Source-Plattformen. Wir arbeiten innerhalb des Systems, um den SEO-Wert Ihrer URLs zu maximieren.",
          },
          {
            title: "Massenoptimierung von Produkten",
            description:
              "Bei Tausenden von SKUs ist manuelle Optimierung unm\u00f6glich. Wir erstellen skalierbare Prozesse f\u00fcr Title-Tags, Meta-Beschreibungen und Produkt-Schema.",
          },
          {
            title: "D\u00fcnner Kategorie-Content",
            description:
              "Standard-BigCommerce-Kategorieseiten haben keinen einzigartigen Inhalt. Wir erg\u00e4nzen optimierte Beschreibungen und unterst\u00fctzenden Content f\u00fcr bessere Rankings.",
          },
          {
            title: "Geschwindigkeit bei gro\u00dfem Umfang",
            description:
              "Gro\u00dfe Kataloge mit schweren Bildern und Drittanbieter-Skripten verlangsamen die Ladezeit. Wir optimieren die Core Web Vitals ohne Funktionsverlust.",
          },
        ],
      },
      {
        type: "process",
        badge: "Unser Vorgehen",
        heading: "So beheben wir BigCommerce-SEO-Probleme",
        process: [
          {
            number: "01",
            title: "Plattform- & Katalog-Audit",
            description:
              "Wir crawlen Ihren gesamten BigCommerce-Shop und erfassen Indexierungsprobleme, Facettennavigations-Fehler, Kategorietiefe und Geschwindigkeits-Engp\u00e4sse.",
          },
          {
            number: "02",
            title: "Facettennavigations-Strategie",
            description:
              "Wir implementieren korrekte Kanonisierung, Robots-Direktiven und URL-Parameter-Steuerung, um zu kontrollieren, welche Filterseiten indexiert werden.",
          },
          {
            number: "03",
            title: "Kategorie-Architektur",
            description:
              "Wir vereinfachen tiefe Kategoriestrukturen, f\u00fcgen einzigartigen Content zu Kollektionsseiten hinzu und bauen eine interne Verlinkungsstrategie auf, die Autorit\u00e4t verteilt.",
          },
          {
            number: "04",
            title: "Laufende Optimierung",
            description:
              "Monatliche Berichte zu Rankings, Traffic und technischer Gesundheit. Wir optimieren kontinuierlich Produktseiten und Kategorie-Content in gro\u00dfem Ma\u00dfstab.",
          },
        ],
      },
      {
        type: "caseStudies",
        badge: "Nachgewiesene Ergebnisse",
        heading: "Was passiert, wenn BigCommerce SEO richtig gemacht wird",
        subtitle: "Echte Shops, echte Zahlen. So sieht unsere E-Commerce-SEO-Arbeit in der Praxis aus.",
        caseStudies: [
          {
            badge: "Gesundheit & Wellness · E-Commerce",
            title: "Norwegischer Gesundheitsshop",
            metrics: [
              { value: "+1,900%", label: "Keyword-Wachstum" },
              { value: "Top 3", label: "Ranking-Positionen" },
              { value: "12 Mo.", label: "Zeitraum" },
            ],
            quote: "EcomSEO hat unsere organische Sichtbarkeit von nahezu null zur Dominanz in unserer Kategorie transformiert.",
            quoteAuthor: "Marketing-Direktor, Gesundheits- & Wellness-Marke",
            href: "/cases/norwegian-health-store",
          },
          {
            badge: "E-Commerce · On-Page",
            title: "7x Traffic in 90 Tagen",
            metrics: [
              { value: "7x", label: "Traffic-Steigerung" },
              { value: "90 Tage", label: "Bis zu Ergebnissen" },
              { value: "+632%", label: "Umsatzwachstum" },
            ],
            href: "/cases/ecommerce-brand",
          },
          {
            badge: "Europäischer Markt · Linkaufbau",
            title: "Von 37 auf 1.529 Keywords",
            metrics: [
              { value: "1,529", label: "Rankende Keywords" },
              { value: "446K+", label: "Monatliche Impressionen" },
              { value: "6 Mo.", label: "Zeitraum" },
            ],
            href: "/cases/skyrocket-ecom-site",
          },
        ],
        ctaText: "Alle Fallstudien ansehen",
        ctaHref: "/cases",
      },
      {
        type: "tips",
        badge: "Experten-Einblicke",
        heading: "7 BigCommerce-SEO-Tipps von unserem Team",
        subtitle: "Nach der Optimierung Dutzender Onlineshops sind dies die wirkungsvollsten BigCommerce-spezifischen Maßnahmen, die wir empfehlen.",
        tips: [
          {
            number: "01",
            title: "Facettennavigation zuerst beheben",
            body: "Die Facettensuche von BigCommerce erzeugt standardmäßig Hunderte indexierbarer Filter-URLs. Nutzen Sie robots.txt und Canonical-Tags, um Filterkombinationen von der Indexierung auszuschließen. Diese einzelne Maßnahme kann 30–50 % des verschwendeten Crawl-Budgets zurückgewinnen.",
            href: "/academy/crawl-budget-management",
            hrefLabel: "Crawl-Budget-Leitfaden",
          },
          {
            number: "02",
            title: "Kategorie-Seiten-Content optimieren",
            body: "BigCommerce-Kategorieseiten zeigen standardmäßig nur ein Produktraster. Fügen Sie 200–500 Wörter einzigartigen, keyword-reichen Content über oder unter dem Raster hinzu. Nutzen Sie das integrierte Beschreibungsfeld und Template-Anpassungen, damit Kategorien ranken.",
            href: "/academy/category-page-seo",
            hrefLabel: "Kategorieseiten-SEO-Leitfaden",
          },
          {
            number: "03",
            title: "Benutzerdefiniertes Schema-Markup implementieren",
            body: "Das integrierte Schema von BigCommerce ist rudimentär. Fügen Sie benutzerdefiniertes JSON-LD für Product, BreadcrumbList und Organization hinzu. Integrieren Sie aggregateRating, Angebote mit Preis und Verfügbarkeit sowie Markendaten für Rich Results.",
            href: "/tools/schema-validator",
            hrefLabel: "Schema validieren",
          },
          {
            number: "04",
            title: "BigCommerce-Blog nutzen",
            body: "BigCommerce verfügt über einen integrierten Blog, den die meisten Shops ignorieren. Nutzen Sie ihn, um informationelle Keywords anzusprechen, die Top-of-Funnel-Traffic generieren. Verlinken Sie von Blogbeiträgen zu relevanten Produkt- und Kategorieseiten, um Autorität zu verteilen.",
          },
          {
            number: "05",
            title: "Produktbild-Dateinamen optimieren",
            body: "Benennen Sie Dateien vor dem Hochladen von IMG_4523.jpg in beschreibende Namen wie blaue-leder-geldboerse-vorne.webp um. BigCommerce verwendet Dateinamen in URLs und bei der Alt-Text-Generierung. Dieser kleine Schritt verbessert die Bild-SEO erheblich.",
          },
          {
            number: "06",
            title: "301-Weiterleitungen korrekt einrichten",
            body: "Wenn Sie Produkte entfernen oder URLs ändern, erstellen Sie immer 301-Weiterleitungen im URL-Weiterleitungsmanager von BigCommerce. Defekte Produktlinks von externen Seiten kosten Sie Link-Equity und frustrieren potenzielle Kunden.",
          },
          {
            number: "07",
            title: "Core Web Vitals nach App-Installationen überwachen",
            body: "Jede BigCommerce-App fügt JavaScript zu Ihrem Storefront hinzu. Testen Sie vor der Installation einer App Ihre Seitengeschwindigkeit. Testen Sie nach der Installation erneut. Wenn der LCP um mehr als 500 ms steigt, lohnt sich die App nicht.",
            href: "/tools/core-web-vitals",
            hrefLabel: "Core Web Vitals prüfen",
          },
        ],
      },
      {
        type: "richText",
        badge: "BigCommerce Enterprise",
        heading: "BigCommerce Enterprise SEO — für Wachstum konzipiert",
        subtitle: "BigCommerce-Enterprise-Shops stehen vor einzigartigen SEO-Herausforderungen, die Standardtarife nicht kennen.",
        richTextBlocks: [
          {
            heading: "Was Enterprise-SEO anders macht",
            body: "Multi-Storefront-Konfigurationen mit separaten Domains, erweiterte Produktfilterung mit Hunderten von Attributkombinationen, benutzerdefinierte Checkout-Flows, die eine korrekte Indexierungsbehandlung erfordern, Headless-Commerce-Implementierungen mit Next.js oder Gatsby, die SSR-Optimierung benötigen, und Kataloggrößen über 10.000 SKUs, die skalierbare Optimierungsprozesse erfordern. Unser Team hat mit BigCommerce-Enterprise-Shops auf europäischen und US-Märkten gearbeitet.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Warum EcomSEO",
        heading: "Warum Ihr BigCommerce-Shop eine spezialisierte SEO-Agentur braucht",
        subtitle: "Generische SEO-Agenturen behandeln BigCommerce wie jede andere Plattform. BigCommerce-Shops haben eine einzigartige Architektur, die plattformspezifische Expertise erfordert.",
        richTextBlocks: [
          {
            heading: "Was generische Agenturen übersehen",
            body: "Die URL-Strukturbeschränkungen von BigCommerce im Vergleich zu Open-Source-Plattformen, Facettennavigation, die Tausende doppelter URLs erzeugt, Stencil-Theme-Optimierung für Geschwindigkeit und Crawlbarkeit, integrierte Funktionen, die mit SEO-Tools von Drittanbietern in Konflikt stehen, Multi-Storefront-Canonical-Management und BigCommerce-API-Integration für Massenproduktoptimierung. Wir arbeiten ausschließlich mit E-Commerce-Marken — jedes Teammitglied hat praktische Erfahrung in BigCommerce-Shops.",
          },
        ],
      },
      {
        type: "team",
        badge: "Das Team",
        heading: "Die BigCommerce-SEO-Spezialisten hinter Ihrem Wachstum",
        teamLead: {
          name: "Fabian van Til",
          role: "Strategie & Innovation",
          bio: "Leitet die strategische Ausrichtung aller Kundenprojekte. Über 8 Jahre E-Commerce-SEO-Erfahrung in den Bereichen Mode, Gesundheit, Beauty und Wohnaccessoires. Verbindet Wachstumsstrategie mit technischer SEO-Innovation.",
          image: "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "Technical SEO Lead",
            bio: "Entwirft die technischen SEO-Grundlagen. Spezialisiert auf E-Commerce-Plattform-Optimierung, strukturierte Daten und Website-Architektur. Entwickelt die kostenlosen SEO-Tools auf dieser Website.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://www.linkedin.com/in/dimitar-georgiev-seo/",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Linkaufbau",
            bio: "Meistert Linkakquise und digitale PR im großen Maßstab. Baut Backlink-Profile auf, die bei wettbewerbsfähigen E-Commerce-Keywords auf europäischen und US-Märkten den Unterschied machen.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "On-Page & Content-Strategie",
            bio: "Entwickelt Content-Strategien und On-Page-Optimierungen, die ranken und konvertieren. Spezialisiert auf Produkt- und Kategorieseiten-Optimierung, Keyword-Recherche und redaktionelle Planung.",
            image: "/images/framer/gjorgi-jovev.png",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Leistungen",
        heading: "Was Sie jeden Monat erhalten",
        subtitle: "Transparente Berichte und greifbare Ergebnisse — kein Füllmaterial, keine Eitelkeitskennzahlen. Alles ist an Ihre Umsatzziele geknüpft.",
        deliverables: [
          { title: "Technisches Audit", description: "Vollständiger Crawl + priorisierte Maßnahmenliste mit Umsetzungstracking" },
          { title: "Schema-Markup", description: "Produkt-, Breadcrumb- und Organisations-JSON-LD — validiert und überwacht" },
          { title: "Geschwindigkeitsoptimierung", description: "Core-Web-Vitals-Verbesserungen mit Vorher/Nachher-Benchmarks" },
          { title: "Keyword-Recherche", description: "Monatliche Keyword-Chancenanalyse mit Kaufabsichts-Klassifizierung" },
          { title: "Content-Erstellung", description: "SEO-optimierte Produktbeschreibungen, Kategorie-Content und Blogbeiträge" },
          { title: "Linkaufbau", description: "Qualitativ hochwertiger Backlink-Aufbau mit voller Transparenz über Methoden" },
          { title: "Monatlicher Bericht", description: "Rankings, organischer Traffic, Umsatzzuordnung und Aktionsplan" },
          { title: "Strategiegespräch", description: "Monatliches 30-Min-Gespräch zur Überprüfung des Fortschritts und Abstimmung der Prioritäten" },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Wie lange dauert es, bis BigCommerce SEO Ergebnisse zeigt?",
          answer:
            "Die meisten BigCommerce-Shops sehen messbare Verbesserungen innerhalb von 3\u20136 Monaten. Technische Ma\u00dfnahmen wie die Bereinigung der Facettennavigation und URL-Optimierung k\u00f6nnen bereits nach Wochen wirken. Lesen Sie unseren [BigCommerce-SEO-Leitfaden](/academy/bigcommerce-seo-guide) f\u00fcr plattformspezifische Taktiken.",
        },
        {
          question: "Arbeiten Sie mit BigCommerce Enterprise?",
          answer:
            "Ja. Wir arbeiten mit allen BigCommerce-Tarifen einschlie\u00dflich Enterprise. Unsere Audits decken Multi-Storefront-Setups, individuelle Integrationen und fortgeschrittene Katalogstrukturen ab.",
        },
        {
          question: "K\u00f6nnen Sie BigCommerce-URL-Strukturprobleme beheben?",
          answer:
            "Absolut. BigCommerce hat bekannte URL-Einschr\u00e4nkungen. Wir implementieren Weiterleitungsstrategien, optimieren Kategoriehierarchien und arbeiten innerhalb der Plattform-Einschr\u00e4nkungen f\u00fcr maximale SEO-Performance.",
        },
        {
          question: "Was ist mit BigCommerce Headless SEO?",
          answer:
            "Wir haben Erfahrung mit BigCommerce-Headless-Implementierungen mit Next.js, Gatsby und anderen Frameworks. Wir stellen korrektes Rendering, Indexierung und strukturierte Daten in Headless-Setups sicher.",
        },
        {
          question: "Wie gehen Sie mit der BigCommerce-Facettennavigation um?",
          answer:
            "Wir pr\u00fcfen Ihre Facettennavigation auf doppelten Content und Crawl-Verschwendung und implementieren dann korrekte Canonical-Tags, Robots-Direktiven und URL-Parameter-Steuerung, damit Google sich auf Ihre besten Seiten konzentriert. Unser Artikel \u00fcber [technisches SEO f\u00fcr E-Commerce](/blog/technical-seo-for-ecommerce) geht tiefer auf diese Korrekturen ein.",
        },
        {
          question: "Bieten Sie laufende BigCommerce SEO-Betreuung an?",
          answer:
            "Ja. Unsere monatlichen Retainer umfassen Monitoring, Reporting und kontinuierliche Optimierung. Wir tracken Rankings, Traffic und Umsatzzuordnung, damit Sie Ihren ROI immer kennen.",
        },
      ],
      miniCta: {
        heading: "Bereit, Ihren BigCommerce-Shop zu skalieren?",
        subtitle:
          "Holen Sie sich ein kostenloses BigCommerce SEO-Audit und erfahren Sie genau, was Ihren Shop zur\u00fckh\u00e4lt.",
      },
    },
  },
  fr: {
    hero: {
      badge: "Experts BigCommerce",
      heading: "SEO BigCommerce pour catalogues volumineux",
      subtitle:
        "Des milliers de r\u00e9f\u00e9rences ? Aucun probl\u00e8me. Nous optimisons les boutiques BigCommerce pour la crawlabilit\u00e9, la vitesse et la croissance du chiffre d\u2019affaires organique.",
      ctaText: "R\u00e9server un audit SEO BigCommerce",
    },
    trustBar: "Plus de 20 boutiques BigCommerce nous font confiance pour leur croissance organique",
    sections: [
      {
        type: "stats",
        badge: "Bilan",
        heading: "Des chiffres qui parlent d\u2019eux-mêmes",
        stats: [
          { value: "8+", label: "Années de SEO e-commerce" },
          { value: "$12M+", label: "Chiffre d\u2019affaires généré" },
          { value: "50+", label: "Boutiques e-commerce optimisées" },
          { value: "140%", label: "Augmentation moy. du trafic" },
        ],
      },
      {
        type: "benefits",
        badge: "Probl\u00e8mes SEO BigCommerce courants",
        heading: "Les d\u00e9fis techniques qui freinent les boutiques BigCommerce",
        benefits: [
          {
            title: "Navigation \u00e0 facettes surcharg\u00e9e",
            description:
              "La recherche \u00e0 facettes de BigCommerce cr\u00e9e des milliers d\u2019URL de filtres indexables. Sans gestion adapt\u00e9e, le budget de crawl est gaspill\u00e9 sur des pages \u00e0 faible valeur.",
          },
          {
            title: "Probl\u00e8mes de profondeur cat\u00e9gorielle",
            description:
              "Les structures de cat\u00e9gories trop imbriqu\u00e9es \u00e9loignent les produits importants de la page d\u2019accueil. Nous aplatissons votre architecture pour une meilleure profondeur de crawl.",
          },
          {
            title: "Contr\u00f4le limit\u00e9 des URL",
            description:
              "La structure d\u2019URL de BigCommerce a des limites par rapport aux plateformes open source. Nous travaillons dans le cadre du syst\u00e8me pour maximiser la valeur SEO des URL.",
          },
          {
            title: "Optimisation produit \u00e0 grande \u00e9chelle",
            description:
              "Avec des milliers de r\u00e9f\u00e9rences, l\u2019optimisation manuelle est impossible. Nous cr\u00e9ons des processus scalables pour les balises title, les m\u00e9ta-descriptions et le sch\u00e9ma produit.",
          },
          {
            title: "Contenu cat\u00e9goriel insuffisant",
            description:
              "Les pages cat\u00e9gories par d\u00e9faut de BigCommerce manquent de contenu unique. Nous ajoutons des descriptions optimis\u00e9es et du contenu de soutien qui am\u00e9liore le positionnement.",
          },
          {
            title: "Vitesse \u00e0 grande \u00e9chelle",
            description:
              "Les catalogues volumineux avec des images lourdes et des scripts tiers ralentissent le chargement. Nous optimisons les Core Web Vitals sans sacrifier les fonctionnalit\u00e9s.",
          },
        ],
      },
      {
        type: "process",
        badge: "Notre m\u00e9thode",
        heading: "Comment nous corrigeons le SEO BigCommerce",
        process: [
          {
            number: "01",
            title: "Audit plateforme & catalogue",
            description:
              "Nous crawlons l\u2019int\u00e9gralit\u00e9 de votre boutique BigCommerce pour identifier les probl\u00e8mes d\u2019indexation, de navigation \u00e0 facettes, de profondeur de cat\u00e9gories et de vitesse.",
          },
          {
            number: "02",
            title: "Strat\u00e9gie de navigation \u00e0 facettes",
            description:
              "Nous impl\u00e9mentons une canonicalisation correcte, des directives robots et une gestion des param\u00e8tres d\u2019URL pour contr\u00f4ler quelles pages de filtres sont index\u00e9es.",
          },
          {
            number: "03",
            title: "Architecture cat\u00e9gorielle",
            description:
              "Nous aplatissons les structures de cat\u00e9gories profondes, ajoutons du contenu unique aux pages de collection et construisons une strat\u00e9gie de maillage interne qui distribue l\u2019autorit\u00e9.",
          },
          {
            number: "04",
            title: "Optimisation continue",
            description:
              "Rapports mensuels sur les classements, le trafic et la sant\u00e9 technique. Nous optimisons en continu les pages produits et le contenu cat\u00e9goriel \u00e0 grande \u00e9chelle.",
          },
        ],
      },
      {
        type: "caseStudies",
        badge: "Résultats prouvés",
        heading: "Ce qui se passe quand le SEO BigCommerce est bien fait",
        subtitle: "De vraies boutiques, de vrais chiffres. Voici à quoi ressemble notre travail SEO e-commerce en pratique.",
        caseStudies: [
          {
            badge: "Santé & Bien-être · E-commerce",
            title: "Boutique santé norvégienne",
            metrics: [
              { value: "+1,900%", label: "Croissance des mots-clés" },
              { value: "Top 3", label: "Positions de classement" },
              { value: "12 mois", label: "Délai" },
            ],
            quote: "EcomSEO a transformé notre visibilité organique de quasi-nulle à la domination de notre catégorie.",
            quoteAuthor: "Directeur Marketing, Marque Santé & Bien-être",
            href: "/cases/norwegian-health-store",
          },
          {
            badge: "E-commerce · On-Page",
            title: "7x le trafic en 90 jours",
            metrics: [
              { value: "7x", label: "Augmentation du trafic" },
              { value: "90 jours", label: "Jusqu\u2019aux résultats" },
              { value: "+632%", label: "Croissance du CA" },
            ],
            href: "/cases/ecommerce-brand",
          },
          {
            badge: "Marché européen · Link Building",
            title: "De 37 à 1 529 mots-clés",
            metrics: [
              { value: "1,529", label: "Mots-clés positionnés" },
              { value: "446K+", label: "Impressions mensuelles" },
              { value: "6 mois", label: "Délai" },
            ],
            href: "/cases/skyrocket-ecom-site",
          },
        ],
        ctaText: "Voir toutes les études de cas",
        ctaHref: "/cases",
      },
      {
        type: "tips",
        badge: "Conseils d\u2019experts",
        heading: "7 conseils SEO BigCommerce de notre équipe",
        subtitle: "Après avoir optimisé des dizaines de boutiques e-commerce, voici les actions spécifiques à BigCommerce ayant le plus d\u2019impact que nous recommandons.",
        tips: [
          {
            number: "01",
            title: "Corriger la navigation à facettes en priorité",
            body: "La recherche à facettes de BigCommerce crée par défaut des centaines d\u2019URL de filtres indexables. Utilisez robots.txt et les balises canonical pour bloquer l\u2019indexation des combinaisons de filtres. Cette seule correction peut récupérer 30 à 50 % du budget de crawl gaspillé.",
            href: "/academy/crawl-budget-management",
            hrefLabel: "Guide du budget de crawl",
          },
          {
            number: "02",
            title: "Optimiser le contenu des pages catégories",
            body: "Les pages catégories BigCommerce n\u2019affichent par défaut qu\u2019une grille de produits. Ajoutez 200 à 500 mots de contenu unique et riche en mots-clés au-dessus ou en dessous de la grille. Utilisez le champ de description intégré et les modifications de template pour faire ranker vos catégories.",
            href: "/academy/category-page-seo",
            hrefLabel: "Guide SEO pages catégories",
          },
          {
            number: "03",
            title: "Implémenter un balisage schema personnalisé",
            body: "Le schema intégré de BigCommerce est basique. Ajoutez du JSON-LD personnalisé pour Product, BreadcrumbList et Organization. Incluez aggregateRating, les offres avec prix et disponibilité, et les données de marque pour les résultats enrichis.",
            href: "/tools/schema-validator",
            hrefLabel: "Valider votre schema",
          },
          {
            number: "04",
            title: "Exploiter le blog intégré de BigCommerce",
            body: "BigCommerce dispose d\u2019un blog intégré que la plupart des boutiques ignorent. Utilisez-le pour cibler des mots-clés informationnels qui génèrent du trafic en haut de funnel. Liez les articles de blog aux pages produits et catégories pertinentes pour distribuer l\u2019autorité.",
          },
          {
            number: "05",
            title: "Optimiser les noms de fichiers images produits",
            body: "Avant de télécharger des images, renommez les fichiers de IMG_4523.jpg en noms descriptifs comme portefeuille-cuir-bleu-face.webp. BigCommerce utilise les noms de fichiers dans les URL et la génération de texte alt. Ce petit geste améliore considérablement le SEO des images.",
          },
          {
            number: "06",
            title: "Configurer correctement les redirections 301",
            body: "Lorsque vous supprimez des produits ou modifiez des URL, créez toujours des redirections 301 dans le gestionnaire de redirections URL de BigCommerce. Les liens produits cassés provenant de sites externes vous font perdre du link equity et frustrent les clients potentiels.",
          },
          {
            number: "07",
            title: "Surveiller les Core Web Vitals après l\u2019installation d\u2019apps",
            body: "Chaque application BigCommerce ajoute du JavaScript à votre vitrine. Avant d\u2019installer une application, testez la vitesse de votre page. Après l\u2019installation, retestez. Si le LCP augmente de plus de 500 ms, l\u2019application n\u2019en vaut pas la peine.",
            href: "/tools/core-web-vitals",
            hrefLabel: "Vérifier vos Core Web Vitals",
          },
        ],
      },
      {
        type: "richText",
        badge: "BigCommerce Enterprise",
        heading: "SEO BigCommerce Enterprise — conçu pour la croissance",
        subtitle: "Les boutiques BigCommerce Enterprise font face à des défis SEO uniques que les plans standard ne rencontrent pas.",
        richTextBlocks: [
          {
            heading: "Ce qui différencie le SEO Enterprise",
            body: "Configurations multi-boutiques avec des domaines séparés, filtrage produit avancé avec des centaines de combinaisons d\u2019attributs, flux de paiement personnalisés nécessitant une gestion correcte de l\u2019indexation, implémentations headless avec Next.js ou Gatsby nécessitant l\u2019optimisation SSR, et catalogues dépassant 10 000 SKUs exigeant des processus d\u2019optimisation scalables. Notre équipe a travaillé avec des boutiques BigCommerce Enterprise sur les marchés européens et américains.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Pourquoi EcomSEO",
        heading: "Pourquoi votre boutique BigCommerce a besoin d\u2019une agence SEO spécialisée",
        subtitle: "Les agences SEO généralistes traitent BigCommerce comme n\u2019importe quelle plateforme. Les boutiques BigCommerce ont une architecture unique qui nécessite une expertise spécifique à la plateforme.",
        richTextBlocks: [
          {
            heading: "Ce que les agences généralistes manquent",
            body: "Les limitations de la structure URL de BigCommerce par rapport aux plateformes open source, la navigation à facettes qui crée des milliers d\u2019URL dupliquées, l\u2019optimisation du thème Stencil pour la vitesse et la crawlabilité, les fonctionnalités intégrées en conflit avec les outils SEO tiers, la gestion des canonical multi-boutiques, et l\u2019intégration de l\u2019API BigCommerce pour l\u2019optimisation produit en masse. Nous travaillons exclusivement avec des marques e-commerce — chaque membre de l\u2019équipe a une expérience pratique dans les boutiques BigCommerce.",
          },
        ],
      },
      {
        type: "team",
        badge: "L\u2019équipe",
        heading: "Les spécialistes SEO BigCommerce derrière votre croissance",
        teamLead: {
          name: "Fabian van Til",
          role: "Stratégie & Innovation",
          bio: "Dirige l\u2019orientation stratégique de tous les projets clients. Plus de 8 ans d\u2019expérience en SEO e-commerce dans la mode, la santé, la beauté et la décoration. Allie stratégie de croissance et innovation SEO technique.",
          image: "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "Technical SEO Lead",
            bio: "Architecte des fondations SEO techniques. Spécialisé dans l\u2019optimisation des plateformes e-commerce, les données structurées et l\u2019architecture de site. Développe les outils SEO gratuits de ce site.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://www.linkedin.com/in/dimitar-georgiev-seo/",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Link Building",
            bio: "Maîtrise l\u2019acquisition de liens et les RP digitales à grande échelle. Construit des profils de backlinks qui font la différence pour les mots-clés e-commerce compétitifs sur les marchés européens et américains.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "On-Page & Stratégie de contenu",
            bio: "Élabore des stratégies de contenu et des optimisations on-page qui rankent et convertissent. Spécialisé dans l\u2019optimisation des pages produits et collections, la recherche de mots-clés et la planification éditoriale.",
            image: "/images/framer/gjorgi-jovev.png",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Livrables",
        heading: "Ce que vous recevez chaque mois",
        subtitle: "Des rapports transparents et des livrables concrets — pas de superflu, pas de métriques de vanité. Tout est lié à vos objectifs de revenus.",
        deliverables: [
          { title: "Audit technique", description: "Crawl complet + liste de corrections priorisée avec suivi de mise en œuvre" },
          { title: "Balisage Schema", description: "JSON-LD produit, fil d\u2019Ariane et organisation — validé et surveillé" },
          { title: "Optimisation de la vitesse", description: "Améliorations des Core Web Vitals avec benchmarks avant/après" },
          { title: "Recherche de mots-clés", description: "Analyse mensuelle des opportunités de mots-clés avec classification par intention d\u2019achat" },
          { title: "Création de contenu", description: "Descriptions produits, contenu catégoriel et articles de blog optimisés pour le SEO" },
          { title: "Link Building", description: "Acquisition de backlinks de qualité avec transparence totale sur les méthodes" },
          { title: "Rapport mensuel", description: "Classements, trafic organique, attribution de revenus et plan d\u2019action" },
          { title: "Appel stratégique", description: "Appel mensuel de 30 min pour examiner les progrès et aligner les priorités" },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Combien de temps faut-il pour voir les r\u00e9sultats du SEO BigCommerce ?",
          answer:
            "La plupart des boutiques BigCommerce constatent des am\u00e9liorations mesurables en 3 \u00e0 6 mois. Les corrections techniques comme le nettoyage de la navigation \u00e0 facettes et l\u2019optimisation des URL peuvent montrer des r\u00e9sultats en quelques semaines. Consultez notre [guide SEO BigCommerce](/academy/bigcommerce-seo-guide) pour des tactiques sp\u00e9cifiques \u00e0 la plateforme.",
        },
        {
          question: "Travaillez-vous avec BigCommerce Enterprise ?",
          answer:
            "Oui. Nous travaillons avec tous les plans BigCommerce, y compris Enterprise. Nos audits couvrent les configurations multi-boutiques, les int\u00e9grations personnalis\u00e9es et les structures de catalogue avanc\u00e9es.",
        },
        {
          question: "Pouvez-vous corriger les probl\u00e8mes de structure d\u2019URL BigCommerce ?",
          answer:
            "Absolument. BigCommerce a des limitations d\u2019URL connues. Nous mettons en place des strat\u00e9gies de redirection, optimisons les hi\u00e9rarchies de cat\u00e9gories et travaillons dans les contraintes de la plateforme pour maximiser les performances SEO.",
        },
        {
          question: "Qu\u2019en est-il du SEO headless BigCommerce ?",
          answer:
            "Nous avons de l\u2019exp\u00e9rience avec les impl\u00e9mentations headless BigCommerce utilisant Next.js, Gatsby et d\u2019autres frameworks. Nous garantissons un rendu correct, une indexation et des donn\u00e9es structur\u00e9es dans les configurations headless.",
        },
        {
          question: "Comment g\u00e9rez-vous la navigation \u00e0 facettes BigCommerce ?",
          answer:
            "Nous auditons votre navigation \u00e0 facettes pour d\u00e9tecter le contenu duplliqu\u00e9 et le gaspillage de crawl, puis nous impl\u00e9mentons des balises canoniques, des directives robots et une gestion des param\u00e8tres d\u2019URL pour concentrer Google sur vos meilleures pages. Notre article sur le [SEO technique pour l\u2019ecommerce](/blog/technical-seo-for-ecommerce) approfondit ces corrections.",
        },
        {
          question: "Proposez-vous un accompagnement SEO BigCommerce continu ?",
          answer:
            "Oui. Nos forfaits mensuels incluent la surveillance, le reporting et l\u2019optimisation continue. Nous suivons les classements, le trafic et l\u2019attribution de revenus pour que vous connaissiez toujours votre ROI.",
        },
      ],
      miniCta: {
        heading: "Pr\u00eat \u00e0 d\u00e9velopper votre boutique BigCommerce ?",
        subtitle:
          "Obtenez un audit SEO BigCommerce gratuit et d\u00e9couvrez exactement ce qui freine votre boutique.",
      },
    },
  },
  es: {
    hero: {
      badge: "Expertos en BigCommerce",
      heading: "SEO BigCommerce para cat\u00e1logos con muchos SKU",
      subtitle:
        "\u00bfMuchos SKU? Sin problema, nos encargamos. Optimizamos tiendas BigCommerce para rastreabilidad, velocidad y crecimiento de ingresos org\u00e1nicos.",
      ctaText: "Reservar una auditor\u00eda SEO BigCommerce",
    },
    trustBar: "M\u00e1s de 20 tiendas BigCommerce conf\u00edan en nosotros para escalar sus ingresos org\u00e1nicos",
    sections: [
      {
        type: "stats",
        badge: "Trayectoria",
        heading: "Números que hablan por sí solos",
        stats: [
          { value: "8+", label: "Años de SEO e-commerce" },
          { value: "$12M+", label: "Ingresos generados" },
          { value: "50+", label: "Tiendas e-commerce optimizadas" },
          { value: "140%", label: "Aumento medio del tráfico" },
        ],
      },
      {
        type: "benefits",
        badge: "Problemas SEO comunes en BigCommerce",
        heading: "Desaf\u00edos t\u00e9cnicos que frenan las tiendas BigCommerce",
        benefits: [
          {
            title: "Navegaci\u00f3n facetada inflada",
            description:
              "La b\u00fasqueda facetada de BigCommerce crea miles de URL de filtros indexables. Sin una gesti\u00f3n adecuada, el presupuesto de rastreo se desperdicia en p\u00e1ginas de bajo valor.",
          },
          {
            title: "Problemas de profundidad de categor\u00edas",
            description:
              "Las estructuras de categor\u00edas profundamente anidadas alejan los productos importantes de la p\u00e1gina principal. Aplanamos tu arquitectura para una mejor profundidad de rastreo.",
          },
          {
            title: "Control limitado de URL",
            description:
              "La estructura de URL de BigCommerce tiene limitaciones frente a plataformas de c\u00f3digo abierto. Trabajamos dentro del sistema para maximizar el valor SEO de las URL.",
          },
          {
            title: "Optimizaci\u00f3n masiva de productos",
            description:
              "Con miles de SKU, la optimizaci\u00f3n manual es imposible. Creamos procesos escalables para etiquetas title, meta descripciones y schema de producto.",
          },
          {
            title: "Contenido de categor\u00eda escaso",
            description:
              "Las p\u00e1ginas de categor\u00eda predeterminadas de BigCommerce carecen de contenido \u00fanico. A\u00f1adimos descripciones optimizadas y contenido de apoyo que impulsa el posicionamiento.",
          },
          {
            title: "Velocidad a escala",
            description:
              "Cat\u00e1logos grandes con im\u00e1genes pesadas y scripts de terceros ralentizan la carga. Optimizamos los Core Web Vitals sin sacrificar funcionalidad.",
          },
        ],
      },
      {
        type: "process",
        badge: "Nuestro m\u00e9todo",
        heading: "C\u00f3mo solucionamos el SEO de BigCommerce",
        process: [
          {
            number: "01",
            title: "Auditor\u00eda de plataforma y cat\u00e1logo",
            description:
              "Rastreamos toda tu tienda BigCommerce para mapear problemas de indexaci\u00f3n, navegaci\u00f3n facetada, profundidad de categor\u00edas y cuellos de botella de velocidad.",
          },
          {
            number: "02",
            title: "Estrategia de navegaci\u00f3n facetada",
            description:
              "Implementamos una canonicalizaci\u00f3n correcta, directivas robots y gesti\u00f3n de par\u00e1metros de URL para controlar qu\u00e9 p\u00e1ginas de filtros se indexan.",
          },
          {
            number: "03",
            title: "Arquitectura de categor\u00edas",
            description:
              "Aplanamos estructuras de categor\u00edas profundas, a\u00f1adimos contenido \u00fanico a las p\u00e1ginas de colecci\u00f3n y construimos una estrategia de enlazado interno que distribuye autoridad.",
          },
          {
            number: "04",
            title: "Optimizaci\u00f3n continua",
            description:
              "Informes mensuales de posiciones, tr\u00e1fico y salud t\u00e9cnica. Optimizamos continuamente las p\u00e1ginas de producto y el contenido de categor\u00edas a escala.",
          },
        ],
      },
      {
        type: "caseStudies",
        badge: "Resultados probados",
        heading: "Qué ocurre cuando el SEO de BigCommerce se hace bien",
        subtitle: "Tiendas reales, números reales. Así es nuestro trabajo de SEO e-commerce en la práctica.",
        caseStudies: [
          {
            badge: "Salud y Bienestar · E-commerce",
            title: "Tienda de salud noruega",
            metrics: [
              { value: "+1,900%", label: "Crecimiento de keywords" },
              { value: "Top 3", label: "Posiciones de ranking" },
              { value: "12 meses", label: "Plazo" },
            ],
            quote: "EcomSEO transformó nuestra visibilidad orgánica de casi cero a dominar nuestra categoría.",
            quoteAuthor: "Director de Marketing, Marca de Salud y Bienestar",
            href: "/cases/norwegian-health-store",
          },
          {
            badge: "E-commerce · On-Page",
            title: "7x tráfico en 90 días",
            metrics: [
              { value: "7x", label: "Aumento del tráfico" },
              { value: "90 días", label: "Hasta resultados" },
              { value: "+632%", label: "Crecimiento de ingresos" },
            ],
            href: "/cases/ecommerce-brand",
          },
          {
            badge: "Mercado europeo · Link Building",
            title: "De 37 a 1.529 keywords",
            metrics: [
              { value: "1,529", label: "Keywords posicionadas" },
              { value: "446K+", label: "Impresiones mensuales" },
              { value: "6 meses", label: "Plazo" },
            ],
            href: "/cases/skyrocket-ecom-site",
          },
        ],
        ctaText: "Ver todos los casos de estudio",
        ctaHref: "/cases",
      },
      {
        type: "tips",
        badge: "Consejos de expertos",
        heading: "7 consejos de SEO BigCommerce de nuestro equipo",
        subtitle: "Tras optimizar decenas de tiendas e-commerce, estas son las acciones específicas de BigCommerce con mayor impacto que recomendamos.",
        tips: [
          {
            number: "01",
            title: "Corregir la navegación facetada primero",
            body: "La búsqueda facetada de BigCommerce crea por defecto cientos de URL de filtros indexables. Usa robots.txt y etiquetas canonical para bloquear la indexación de combinaciones de filtros. Esta sola corrección puede recuperar del 30 al 50 % del presupuesto de rastreo desperdiciado.",
            href: "/academy/crawl-budget-management",
            hrefLabel: "Guía de presupuesto de rastreo",
          },
          {
            number: "02",
            title: "Optimizar el contenido de páginas de categoría",
            body: "Las páginas de categoría de BigCommerce muestran por defecto solo una cuadrícula de productos. Añade 200-500 palabras de contenido único y rico en keywords encima o debajo de la cuadrícula. Usa el campo de descripción integrado y modificaciones de plantilla para que las categorías posicionen.",
            href: "/academy/category-page-seo",
            hrefLabel: "Guía SEO para páginas de categoría",
          },
          {
            number: "03",
            title: "Implementar marcado schema personalizado",
            body: "El schema integrado de BigCommerce es básico. Añade JSON-LD personalizado para Product, BreadcrumbList y Organization. Incluye aggregateRating, ofertas con precio y disponibilidad, y datos de marca para resultados enriquecidos.",
            href: "/tools/schema-validator",
            hrefLabel: "Validar tu schema",
          },
          {
            number: "04",
            title: "Aprovechar el blog integrado de BigCommerce",
            body: "BigCommerce tiene un blog integrado que la mayoría de tiendas ignoran. Úsalo para apuntar a keywords informacionales que generen tráfico en la parte superior del funnel. Enlaza desde los artículos del blog a páginas de producto y categoría relevantes para distribuir autoridad.",
          },
          {
            number: "05",
            title: "Optimizar los nombres de archivo de imágenes de producto",
            body: "Antes de subir imágenes, renombra los archivos de IMG_4523.jpg a nombres descriptivos como cartera-cuero-azul-frontal.webp. BigCommerce usa los nombres de archivo en las URL y en la generación de texto alt. Este pequeño paso mejora significativamente el SEO de imágenes.",
          },
          {
            number: "06",
            title: "Configurar redirecciones 301 correctamente",
            body: "Al eliminar productos o cambiar URL, crea siempre redirecciones 301 en el gestor de redirecciones URL de BigCommerce. Los enlaces de producto rotos desde sitios externos te hacen perder link equity y frustran a clientes potenciales.",
          },
          {
            number: "07",
            title: "Monitorizar Core Web Vitals tras instalar apps",
            body: "Cada app de BigCommerce añade JavaScript a tu tienda. Antes de instalar cualquier app, prueba la velocidad de tu página. Después de instalar, prueba de nuevo. Si el LCP aumenta más de 500 ms, la app no merece la pena.",
            href: "/tools/core-web-vitals",
            hrefLabel: "Comprobar tus Core Web Vitals",
          },
        ],
      },
      {
        type: "richText",
        badge: "BigCommerce Enterprise",
        heading: "SEO BigCommerce Enterprise — diseñado para escalar",
        subtitle: "Las tiendas BigCommerce Enterprise enfrentan desafíos SEO únicos que los planes estándar no encuentran.",
        richTextBlocks: [
          {
            heading: "Qué diferencia al SEO Enterprise",
            body: "Configuraciones multi-tienda con dominios separados, filtrado avanzado de productos con cientos de combinaciones de atributos, flujos de checkout personalizados que necesitan gestión correcta de indexación, implementaciones headless con Next.js o Gatsby que requieren optimización SSR, y catálogos que superan los 10.000 SKUs y exigen procesos de optimización escalables. Nuestro equipo ha trabajado con tiendas BigCommerce Enterprise en mercados europeos y estadounidenses.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Por qué EcomSEO",
        heading: "Por qué tu tienda BigCommerce necesita una agencia SEO especializada",
        subtitle: "Las agencias SEO genéricas tratan BigCommerce como cualquier otra plataforma. Las tiendas BigCommerce tienen una arquitectura única que requiere experiencia específica de la plataforma.",
        richTextBlocks: [
          {
            heading: "Lo que las agencias genéricas pasan por alto",
            body: "Las limitaciones de la estructura URL de BigCommerce frente a plataformas open source, la navegación facetada que crea miles de URL duplicadas, la optimización del tema Stencil para velocidad y rastreabilidad, las funciones integradas que entran en conflicto con herramientas SEO de terceros, la gestión canonical multi-tienda, y la integración de la API de BigCommerce para optimización masiva de productos. Solo trabajamos con marcas de e-commerce — cada miembro del equipo tiene experiencia práctica dentro de tiendas BigCommerce.",
          },
        ],
      },
      {
        type: "team",
        badge: "El equipo",
        heading: "Los especialistas SEO BigCommerce detrás de tu crecimiento",
        teamLead: {
          name: "Fabian van Til",
          role: "Estrategia e Innovación",
          bio: "Dirige la orientación estratégica de todos los proyectos con clientes. Más de 8 años de experiencia en SEO e-commerce en moda, salud, belleza y hogar. Combina estrategia de crecimiento con innovación técnica en SEO.",
          image: "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "Technical SEO Lead",
            bio: "Diseña las bases técnicas de SEO. Especializado en optimización de plataformas e-commerce, datos estructurados y arquitectura de sitios. Desarrolla las herramientas SEO gratuitas de este sitio.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://www.linkedin.com/in/dimitar-georgiev-seo/",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Link Building",
            bio: "Domina la adquisición de enlaces y las relaciones públicas digitales a escala. Construye perfiles de backlinks que marcan la diferencia en keywords competitivos de e-commerce en mercados europeos y estadounidenses.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "On-Page & Estrategia de contenido",
            bio: "Diseña estrategias de contenido y optimizaciones on-page que posicionan y convierten. Especializado en optimización de páginas de producto y colecciones, investigación de keywords y planificación editorial.",
            image: "/images/framer/gjorgi-jovev.png",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Entregables",
        heading: "Lo que recibes cada mes",
        subtitle: "Informes transparentes y resultados tangibles — sin relleno, sin métricas de vanidad. Todo está vinculado a tus objetivos de ingresos.",
        deliverables: [
          { title: "Auditoría técnica", description: "Crawl completo + lista priorizada de correcciones con seguimiento de implementación" },
          { title: "Marcado Schema", description: "JSON-LD de producto, breadcrumb y organización — validado y monitorizado" },
          { title: "Optimización de velocidad", description: "Mejoras de Core Web Vitals con benchmarks antes/después" },
          { title: "Investigación de keywords", description: "Análisis mensual de oportunidades de keywords con clasificación por intención de compra" },
          { title: "Creación de contenido", description: "Descripciones de producto, contenido de categoría y artículos de blog optimizados para SEO" },
          { title: "Link Building", description: "Adquisición de backlinks de calidad con total transparencia en los métodos" },
          { title: "Informe mensual", description: "Rankings, tráfico orgánico, atribución de ingresos y plan de acción" },
          { title: "Llamada estratégica", description: "Llamada mensual de 30 min para revisar el progreso y alinear prioridades" },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "\u00bfCu\u00e1nto tarda el SEO de BigCommerce en mostrar resultados?",
          answer:
            "La mayor\u00eda de las tiendas BigCommerce ven mejoras medibles en 3 a 6 meses. Las correcciones t\u00e9cnicas como la limpieza de la navegaci\u00f3n facetada y la optimizaci\u00f3n de URL pueden mostrar resultados en semanas. Consulta nuestra [gu\u00eda SEO para BigCommerce](/academy/bigcommerce-seo-guide) para t\u00e1cticas espec\u00edficas de la plataforma.",
        },
        {
          question: "\u00bfTrabajan con BigCommerce Enterprise?",
          answer:
            "S\u00ed. Trabajamos con todos los planes de BigCommerce, incluido Enterprise. Nuestras auditor\u00edas cubren configuraciones multi-tienda, integraciones personalizadas y estructuras de cat\u00e1logo avanzadas.",
        },
        {
          question: "\u00bfPueden solucionar los problemas de estructura de URL de BigCommerce?",
          answer:
            "Por supuesto. BigCommerce tiene limitaciones de URL conocidas. Implementamos estrategias de redirecci\u00f3n, optimizamos jerarqu\u00edas de categor\u00edas y trabajamos dentro de las restricciones de la plataforma para maximizar el rendimiento SEO.",
        },
        {
          question: "\u00bfQu\u00e9 hay del SEO headless de BigCommerce?",
          answer:
            "Tenemos experiencia con implementaciones headless de BigCommerce usando Next.js, Gatsby y otros frameworks. Aseguramos un renderizado correcto, indexaci\u00f3n y datos estructurados en configuraciones headless.",
        },
        {
          question: "\u00bfC\u00f3mo manejan la navegaci\u00f3n facetada de BigCommerce?",
          answer:
            "Auditamos tu navegaci\u00f3n facetada en busca de contenido duplicado y desperdicio de rastreo, luego implementamos etiquetas canonical, directivas robots y gesti\u00f3n de par\u00e1metros de URL para que Google se concentre en tus mejores p\u00e1ginas. Nuestro art\u00edculo sobre [SEO t\u00e9cnico para ecommerce](/blog/technical-seo-for-ecommerce) profundiza en estas correcciones.",
        },
        {
          question: "\u00bfOfrecen soporte SEO continuo para BigCommerce?",
          answer:
            "S\u00ed. Nuestros planes mensuales incluyen monitorizaci\u00f3n, reportes y optimizaci\u00f3n continua. Rastreamos posiciones, tr\u00e1fico y atribuci\u00f3n de ingresos para que siempre conozcas tu ROI.",
        },
      ],
      miniCta: {
        heading: "\u00bfListo para escalar tu tienda BigCommerce?",
        subtitle:
          "Obt\u00e9n una auditor\u00eda SEO BigCommerce gratuita y descubre exactamente qu\u00e9 est\u00e1 frenando tu tienda.",
      },
    },
  },
  it: {
    hero: {
      badge: "Esperti BigCommerce",
      heading: "SEO BigCommerce per cataloghi con molti SKU",
      subtitle:
        "Tanti SKU? Nessun problema, ci pensiamo noi. Ottimizziamo i negozi BigCommerce per crawlabilit\u00e0, velocit\u00e0 e crescita del fatturato organico.",
      ctaText: "Prenota un audit SEO BigCommerce",
    },
    trustBar: "Oltre 20 negozi BigCommerce si affidano a noi per la crescita organica",
    sections: [
      {
        type: "stats",
        badge: "Track Record",
        heading: "Numeri che parlano da soli",
        stats: [
          { value: "8+", label: "Anni di SEO e-commerce" },
          { value: "$12M+", label: "Fatturato generato" },
          { value: "50+", label: "Negozi e-commerce ottimizzati" },
          { value: "140%", label: "Aumento medio del traffico" },
        ],
      },
      {
        type: "benefits",
        badge: "Problemi SEO comuni di BigCommerce",
        heading: "Le sfide tecniche che frenano i negozi BigCommerce",
        benefits: [
          {
            title: "Navigazione a faccette sovraccarica",
            description:
              "La ricerca a faccette di BigCommerce genera migliaia di URL filtro indicizzabili. Senza una gestione adeguata, il budget di crawl viene sprecato su pagine di scarso valore.",
          },
          {
            title: "Problemi di profondit\u00e0 delle categorie",
            description:
              "Strutture di categorie troppo annidate allontanano i prodotti importanti dalla homepage. Semplifichiamo la tua architettura per una migliore profondit\u00e0 di crawl.",
          },
          {
            title: "Controllo URL limitato",
            description:
              "La struttura URL di BigCommerce ha limitazioni rispetto alle piattaforme open source. Lavoriamo all\u2019interno del sistema per massimizzare il valore SEO degli URL.",
          },
          {
            title: "Ottimizzazione massiva dei prodotti",
            description:
              "Con migliaia di SKU, l\u2019ottimizzazione manuale \u00e8 impossibile. Creiamo processi scalabili per title tag, meta description e schema prodotto.",
          },
          {
            title: "Contenuto scarso nelle categorie",
            description:
              "Le pagine categoria predefinite di BigCommerce mancano di contenuto unico. Aggiungiamo descrizioni ottimizzate e contenuto di supporto che migliora il posizionamento.",
          },
          {
            title: "Velocit\u00e0 su larga scala",
            description:
              "Cataloghi ampi con immagini pesanti e script di terze parti rallentano il caricamento. Ottimizziamo i Core Web Vitals senza sacrificare le funzionalit\u00e0.",
          },
        ],
      },
      {
        type: "process",
        badge: "Il nostro metodo",
        heading: "Come risolviamo la SEO di BigCommerce",
        process: [
          {
            number: "01",
            title: "Audit piattaforma e catalogo",
            description:
              "Eseguiamo il crawl dell\u2019intero negozio BigCommerce per mappare problemi di indicizzazione, navigazione a faccette, profondit\u00e0 delle categorie e colli di bottiglia nelle prestazioni.",
          },
          {
            number: "02",
            title: "Strategia di navigazione a faccette",
            description:
              "Implementiamo la canonicalizzazione corretta, le direttive robots e la gestione dei parametri URL per controllare quali pagine filtro vengono indicizzate.",
          },
          {
            number: "03",
            title: "Architettura delle categorie",
            description:
              "Semplifichiamo le strutture di categorie profonde, aggiungiamo contenuto unico alle pagine di collezione e costruiamo una strategia di linking interno che distribuisce autorit\u00e0.",
          },
          {
            number: "04",
            title: "Ottimizzazione continua",
            description:
              "Report mensili su posizionamenti, traffico e salute tecnica. Ottimizziamo costantemente le pagine prodotto e il contenuto delle categorie su larga scala.",
          },
        ],
      },
      {
        type: "caseStudies",
        badge: "Risultati dimostrati",
        heading: "Cosa succede quando la SEO BigCommerce viene fatta bene",
        subtitle: "Negozi reali, numeri reali. Ecco come si presenta il nostro lavoro SEO e-commerce nella pratica.",
        caseStudies: [
          {
            badge: "Salute e Benessere · E-commerce",
            title: "Negozio di salute norvegese",
            metrics: [
              { value: "+1,900%", label: "Crescita delle keyword" },
              { value: "Top 3", label: "Posizioni di ranking" },
              { value: "12 mesi", label: "Periodo" },
            ],
            quote: "EcomSEO ha trasformato la nostra visibilità organica da quasi zero a dominare la nostra categoria.",
            quoteAuthor: "Direttore Marketing, Brand Salute e Benessere",
            href: "/cases/norwegian-health-store",
          },
          {
            badge: "E-commerce · On-Page",
            title: "7x traffico in 90 giorni",
            metrics: [
              { value: "7x", label: "Aumento del traffico" },
              { value: "90 giorni", label: "Ai risultati" },
              { value: "+632%", label: "Crescita del fatturato" },
            ],
            href: "/cases/ecommerce-brand",
          },
          {
            badge: "Mercato europeo · Link Building",
            title: "Da 37 a 1.529 keyword",
            metrics: [
              { value: "1,529", label: "Keyword posizionate" },
              { value: "446K+", label: "Impressioni mensili" },
              { value: "6 mesi", label: "Periodo" },
            ],
            href: "/cases/skyrocket-ecom-site",
          },
        ],
        ctaText: "Vedi tutti i casi studio",
        ctaHref: "/cases",
      },
      {
        type: "tips",
        badge: "Consigli degli esperti",
        heading: "7 consigli SEO BigCommerce dal nostro team",
        subtitle: "Dopo aver ottimizzato decine di negozi e-commerce, queste sono le azioni specifiche per BigCommerce con il maggiore impatto che raccomandiamo.",
        tips: [
          {
            number: "01",
            title: "Correggere prima la navigazione a faccette",
            body: "La ricerca a faccette di BigCommerce crea per impostazione predefinita centinaia di URL filtro indicizzabili. Usa robots.txt e tag canonical per bloccare l\u2019indicizzazione delle combinazioni di filtri. Questa singola correzione può recuperare il 30-50% del budget di crawl sprecato.",
            href: "/academy/crawl-budget-management",
            hrefLabel: "Guida al budget di crawl",
          },
          {
            number: "02",
            title: "Ottimizzare il contenuto delle pagine categoria",
            body: "Le pagine categoria di BigCommerce mostrano per impostazione predefinita solo una griglia di prodotti. Aggiungi 200-500 parole di contenuto unico e ricco di keyword sopra o sotto la griglia. Usa il campo descrizione integrato e le modifiche al template per far posizionare le categorie.",
            href: "/academy/category-page-seo",
            hrefLabel: "Guida SEO pagine categoria",
          },
          {
            number: "03",
            title: "Implementare markup schema personalizzato",
            body: "Lo schema integrato di BigCommerce è basilare. Aggiungi JSON-LD personalizzato per Product, BreadcrumbList e Organization. Includi aggregateRating, offerte con prezzo e disponibilità, e dati del brand per i risultati avanzati.",
            href: "/tools/schema-validator",
            hrefLabel: "Valida il tuo schema",
          },
          {
            number: "04",
            title: "Sfruttare il blog integrato di BigCommerce",
            body: "BigCommerce ha un blog integrato che la maggior parte dei negozi ignora. Usalo per intercettare keyword informazionali che generano traffico top-of-funnel. Collega gli articoli del blog alle pagine prodotto e categoria pertinenti per distribuire autorità.",
          },
          {
            number: "05",
            title: "Ottimizzare i nomi dei file delle immagini prodotto",
            body: "Prima di caricare le immagini, rinomina i file da IMG_4523.jpg a nomi descrittivi come portafoglio-pelle-blu-fronte.webp. BigCommerce usa i nomi dei file negli URL e nella generazione del testo alt. Questo piccolo passaggio migliora significativamente la SEO delle immagini.",
          },
          {
            number: "06",
            title: "Configurare correttamente i redirect 301",
            body: "Quando rimuovi prodotti o modifichi gli URL, crea sempre redirect 301 nel gestore redirect URL di BigCommerce. I link prodotto rotti da siti esterni ti fanno perdere link equity e frustrano i potenziali clienti.",
          },
          {
            number: "07",
            title: "Monitorare i Core Web Vitals dopo l\u2019installazione delle app",
            body: "Ogni app BigCommerce aggiunge JavaScript al tuo storefront. Prima di installare qualsiasi app, testa la velocità della pagina. Dopo l\u2019installazione, testa di nuovo. Se il LCP aumenta di più di 500 ms, l\u2019app non vale il compromesso.",
            href: "/tools/core-web-vitals",
            hrefLabel: "Controlla i tuoi Core Web Vitals",
          },
        ],
      },
      {
        type: "richText",
        badge: "BigCommerce Enterprise",
        heading: "SEO BigCommerce Enterprise — progettato per scalare",
        subtitle: "I negozi BigCommerce Enterprise affrontano sfide SEO uniche che i piani standard non incontrano.",
        richTextBlocks: [
          {
            heading: "Cosa rende diversa la SEO Enterprise",
            body: "Configurazioni multi-storefront con domini separati, filtraggio prodotti avanzato con centinaia di combinazioni di attributi, flussi di checkout personalizzati che necessitano di una corretta gestione dell\u2019indicizzazione, implementazioni headless con Next.js o Gatsby che richiedono ottimizzazione SSR, e cataloghi che superano i 10.000 SKU che richiedono processi di ottimizzazione scalabili. Il nostro team ha lavorato con negozi BigCommerce Enterprise nei mercati europei e statunitensi.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Perché EcomSEO",
        heading: "Perché il tuo negozio BigCommerce ha bisogno di un\u2019agenzia SEO specializzata",
        subtitle: "Le agenzie SEO generiche trattano BigCommerce come qualsiasi altra piattaforma. I negozi BigCommerce hanno un\u2019architettura unica che richiede competenze specifiche della piattaforma.",
        richTextBlocks: [
          {
            heading: "Cosa le agenzie generiche non vedono",
            body: "Le limitazioni della struttura URL di BigCommerce rispetto alle piattaforme open source, la navigazione a faccette che crea migliaia di URL duplicati, l\u2019ottimizzazione del tema Stencil per velocità e crawlabilità, le funzionalità integrate in conflitto con strumenti SEO di terze parti, la gestione canonical multi-storefront, e l\u2019integrazione dell\u2019API BigCommerce per l\u2019ottimizzazione massiva dei prodotti. Lavoriamo esclusivamente con brand e-commerce — ogni membro del team ha esperienza pratica all\u2019interno di negozi BigCommerce.",
          },
        ],
      },
      {
        type: "team",
        badge: "Il Team",
        heading: "Gli specialisti SEO BigCommerce dietro la tua crescita",
        teamLead: {
          name: "Fabian van Til",
          role: "Strategia e Innovazione",
          bio: "Dirige l\u2019orientamento strategico di tutti i progetti clienti. Oltre 8 anni di esperienza SEO e-commerce in moda, salute, beauty e arredamento. Unisce strategia di crescita e innovazione SEO tecnica.",
          image: "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "Technical SEO Lead",
            bio: "Progetta le fondamenta tecniche della SEO. Specializzato nell\u2019ottimizzazione delle piattaforme e-commerce, nei dati strutturati e nell\u2019architettura dei siti. Sviluppa gli strumenti SEO gratuiti di questo sito.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://www.linkedin.com/in/dimitar-georgiev-seo/",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Link Building",
            bio: "Padroneggia l\u2019acquisizione di link e le digital PR su larga scala. Costruisce profili di backlink che fanno la differenza per keyword e-commerce competitive nei mercati europei e statunitensi.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "On-Page & Strategia dei contenuti",
            bio: "Elabora strategie di contenuto e ottimizzazioni on-page che posizionano e convertono. Specializzato nell\u2019ottimizzazione delle pagine prodotto e collezione, nella ricerca keyword e nella pianificazione editoriale.",
            image: "/images/framer/gjorgi-jovev.png",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Deliverable",
        heading: "Cosa ricevi ogni mese",
        subtitle: "Report trasparenti e risultati tangibili — niente fronzoli, niente metriche di vanità. Tutto è legato ai tuoi obiettivi di fatturato.",
        deliverables: [
          { title: "Audit tecnico", description: "Crawl completo + lista prioritizzata di correzioni con tracciamento dell\u2019implementazione" },
          { title: "Markup Schema", description: "JSON-LD prodotto, breadcrumb e organizzazione — validato e monitorato" },
          { title: "Ottimizzazione velocità", description: "Miglioramenti dei Core Web Vitals con benchmark prima/dopo" },
          { title: "Ricerca keyword", description: "Analisi mensile delle opportunità keyword con classificazione per intento d\u2019acquisto" },
          { title: "Creazione contenuti", description: "Descrizioni prodotto, contenuto categorie e articoli blog ottimizzati per la SEO" },
          { title: "Link Building", description: "Acquisizione di backlink di qualità con totale trasparenza sui metodi" },
          { title: "Report mensile", description: "Posizionamenti, traffico organico, attribuzione del fatturato e piano d\u2019azione" },
          { title: "Chiamata strategica", description: "Chiamata mensile di 30 min per esaminare i progressi e allineare le priorità" },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Quanto tempo ci vuole per vedere risultati dalla SEO BigCommerce?",
          answer:
            "La maggior parte dei negozi BigCommerce vede miglioramenti misurabili entro 3-6 mesi. Le correzioni tecniche come la pulizia della navigazione a faccette e l\u2019ottimizzazione degli URL possono mostrare risultati in poche settimane. Consulta la nostra [guida SEO per BigCommerce](/academy/bigcommerce-seo-guide) per tattiche specifiche della piattaforma.",
        },
        {
          question: "Lavorate con BigCommerce Enterprise?",
          answer:
            "S\u00ec. Lavoriamo con tutti i piani BigCommerce, incluso Enterprise. I nostri audit coprono configurazioni multi-store, integrazioni personalizzate e strutture di catalogo avanzate.",
        },
        {
          question: "Potete risolvere i problemi di struttura URL di BigCommerce?",
          answer:
            "Assolutamente. BigCommerce ha limitazioni URL note. Implementiamo strategie di redirect, ottimizziamo le gerarchie delle categorie e lavoriamo entro i vincoli della piattaforma per massimizzare le prestazioni SEO.",
        },
        {
          question: "E la SEO headless di BigCommerce?",
          answer:
            "Abbiamo esperienza con implementazioni headless BigCommerce usando Next.js, Gatsby e altri framework. Garantiamo rendering corretto, indicizzazione e dati strutturati nelle configurazioni headless.",
        },
        {
          question: "Come gestite la navigazione a faccette di BigCommerce?",
          answer:
            "Auditiamo la vostra navigazione a faccette per individuare contenuto duplicato e spreco di crawl, poi implementiamo tag canonical, direttive robots e gestione dei parametri URL per concentrare Google sulle vostre pagine migliori. Il nostro articolo sul [SEO tecnico per l\u2019ecommerce](/blog/technical-seo-for-ecommerce) approfondisce queste correzioni.",
        },
        {
          question: "Offrite supporto SEO continuativo per BigCommerce?",
          answer:
            "S\u00ec. I nostri piani mensili includono monitoraggio, reporting e ottimizzazione continua. Tracciamo posizionamenti, traffico e attribuzione dei ricavi per farvi conoscere sempre il vostro ROI.",
        },
      ],
      miniCta: {
        heading: "Pronti a far crescere il vostro negozio BigCommerce?",
        subtitle:
          "Ottenete un audit SEO BigCommerce gratuito e scoprite esattamente cosa frena il vostro negozio.",
      },
    },
  },
  nl: {
    hero: {
      badge: "BigCommerce-experts",
      heading: "BigCommerce SEO voor uitgebreide productcatalogi",
      subtitle:
        "Veel SKU\u2019s? Geen probleem, wij regelen het. Wij optimaliseren BigCommerce-winkels voor crawlbaarheid, snelheid en organische omzetgroei.",
      ctaText: "BigCommerce SEO-audit boeken",
    },
    trustBar: "Meer dan 20 BigCommerce-winkels vertrouwen op ons voor organische groei",
    sections: [
      {
        type: "stats",
        badge: "Track Record",
        heading: "Cijfers die voor zich spreken",
        stats: [
          { value: "8+", label: "Jaar e-commerce-SEO" },
          { value: "$12M+", label: "Gegenereerde omzet" },
          { value: "50+", label: "Geoptimaliseerde webshops" },
          { value: "140%", label: "Gem. toename verkeer" },
        ],
      },
      {
        type: "benefits",
        badge: "Veelvoorkomende BigCommerce SEO-problemen",
        heading: "Technische uitdagingen die BigCommerce-winkels tegenhouden",
        benefits: [
          {
            title: "Opgeblazen facetnavigatie",
            description:
              "BigCommerce facetzoekopdrachten cre\u00ebren duizenden indexeerbare filter-URL\u2019s. Zonder goede afhandeling wordt het crawlbudget verspild aan pagina\u2019s met weinig waarde.",
          },
          {
            title: "Problemen met categoriediepte",
            description:
              "Diep geneste categoriestructuren duwen belangrijke producten te ver van de homepage. Wij vereenvoudigen uw architectuur voor betere crawldiepte.",
          },
          {
            title: "Beperkte URL-controle",
            description:
              "De URL-structuur van BigCommerce heeft beperkingen vergeleken met open-source platforms. Wij werken binnen het systeem om de SEO-waarde van URL\u2019s te maximaliseren.",
          },
          {
            title: "Bulkproductoptimalisatie",
            description:
              "Met duizenden SKU\u2019s is handmatige optimalisatie onmogelijk. Wij bouwen schaalbare processen voor title-tags, metabeschrijvingen en productschema.",
          },
          {
            title: "Dunne categorie-content",
            description:
              "Standaard BigCommerce-categoriepagina\u2019s missen unieke content. Wij voegen geoptimaliseerde beschrijvingen en ondersteunende content toe die rankings verbetert.",
          },
          {
            title: "Snelheid op schaal",
            description:
              "Grote catalogi met zware afbeeldingen en scripts van derden vertragen het laden. Wij optimaliseren Core Web Vitals zonder functionaliteit op te offeren.",
          },
        ],
      },
      {
        type: "process",
        badge: "Onze aanpak",
        heading: "Zo lossen wij BigCommerce SEO-problemen op",
        process: [
          {
            number: "01",
            title: "Platform- & catalogusaudit",
            description:
              "Wij crawlen uw volledige BigCommerce-winkel om indexatieproblemen, facetnavigatie, categoriediepte en snelheidsknelpunten in kaart te brengen.",
          },
          {
            number: "02",
            title: "Facetnavigatiestrategie",
            description:
              "Wij implementeren correcte canonicalisatie, robotsrichtlijnen en URL-parameterbeheer om te bepalen welke filterpagina\u2019s ge\u00efndexeerd worden.",
          },
          {
            number: "03",
            title: "Categorie-architectuur",
            description:
              "Wij vereenvoudigen diepe categoriestructuren, voegen unieke content toe aan collectiepagina\u2019s en bouwen een interne linkstrategie die autoriteit verspreidt.",
          },
          {
            number: "04",
            title: "Doorlopende optimalisatie",
            description:
              "Maandelijkse rapportages over rankings, verkeer en technische gezondheid. Wij optimaliseren voortdurend productpagina\u2019s en categorie-content op schaal.",
          },
        ],
      },
      {
        type: "caseStudies",
        badge: "Bewezen resultaten",
        heading: "Wat er gebeurt als BigCommerce SEO goed wordt gedaan",
        subtitle: "Echte winkels, echte cijfers. Zo ziet ons e-commerce-SEO-werk er in de praktijk uit.",
        caseStudies: [
          {
            badge: "Gezondheid & Welzijn · E-commerce",
            title: "Noorse gezondheidswinkel",
            metrics: [
              { value: "+1,900%", label: "Keyword-groei" },
              { value: "Top 3", label: "Ranking-posities" },
              { value: "12 mnd", label: "Tijdsbestek" },
            ],
            quote: "EcomSEO heeft onze organische zichtbaarheid getransformeerd van vrijwel nul naar dominantie in onze categorie.",
            quoteAuthor: "Marketing Director, Gezondheids- & Welzijnsmerk",
            href: "/cases/norwegian-health-store",
          },
          {
            badge: "E-commerce · On-Page",
            title: "7x verkeer in 90 dagen",
            metrics: [
              { value: "7x", label: "Toename verkeer" },
              { value: "90 dagen", label: "Tot resultaten" },
              { value: "+632%", label: "Omzetgroei" },
            ],
            href: "/cases/ecommerce-brand",
          },
          {
            badge: "Europese markt · Linkbuilding",
            title: "Van 37 naar 1.529 keywords",
            metrics: [
              { value: "1,529", label: "Rankende keywords" },
              { value: "446K+", label: "Maandelijkse impressies" },
              { value: "6 mnd", label: "Tijdsbestek" },
            ],
            href: "/cases/skyrocket-ecom-site",
          },
        ],
        ctaText: "Bekijk alle casestudies",
        ctaHref: "/cases",
      },
      {
        type: "tips",
        badge: "Expert-inzichten",
        heading: "7 BigCommerce SEO-tips van ons team",
        subtitle: "Na het optimaliseren van tientallen webshops zijn dit de BigCommerce-specifieke acties met de grootste impact die wij aanbevelen.",
        tips: [
          {
            number: "01",
            title: "Facetnavigatie als eerste aanpakken",
            body: "De facetzoekopdracht van BigCommerce creëert standaard honderden indexeerbare filter-URL\u2019s. Gebruik robots.txt en canonical-tags om filtercombinaties te blokkeren voor indexering. Deze ene fix kan 30-50% van het verspilde crawlbudget terugwinnen.",
            href: "/academy/crawl-budget-management",
            hrefLabel: "Gids voor crawlbudget",
          },
          {
            number: "02",
            title: "Content van categoriepagina\u2019s optimaliseren",
            body: "BigCommerce-categoriepagina\u2019s tonen standaard alleen een productraster. Voeg 200-500 woorden unieke, keyword-rijke content toe boven of onder het raster. Gebruik het ingebouwde beschrijvingsveld en template-aanpassingen om categoriepagina\u2019s te laten ranken.",
            href: "/academy/category-page-seo",
            hrefLabel: "SEO-gids voor categoriepagina\u2019s",
          },
          {
            number: "03",
            title: "Aangepaste schema-markup implementeren",
            body: "De ingebouwde schema van BigCommerce is basic. Voeg aangepast JSON-LD toe voor Product, BreadcrumbList en Organization. Neem aggregateRating, aanbiedingen met prijs en beschikbaarheid, en merkgegevens op voor rich results.",
            href: "/tools/schema-validator",
            hrefLabel: "Valideer uw schema",
          },
          {
            number: "04",
            title: "BigCommerce\u2019s ingebouwde blog benutten",
            body: "BigCommerce heeft een ingebouwde blog die de meeste winkels negeren. Gebruik deze om informatieve keywords aan te spreken die top-of-funnel verkeer genereren. Link vanuit blogposts naar relevante product- en categoriepagina\u2019s om autoriteit te verspreiden.",
          },
          {
            number: "05",
            title: "Bestandsnamen van productafbeeldingen optimaliseren",
            body: "Hernoem bestanden voor het uploaden van IMG_4523.jpg naar beschrijvende namen zoals blauw-leren-portemonnee-voorkant.webp. BigCommerce gebruikt bestandsnamen in URL\u2019s en bij het genereren van alt-tekst. Deze kleine stap verbetert de image-SEO aanzienlijk.",
          },
          {
            number: "06",
            title: "Juiste 301-redirects instellen",
            body: "Wanneer u producten verwijdert of URL\u2019s wijzigt, maak dan altijd 301-redirects aan in BigCommerce\u2019s URL-redirectmanager. Gebroken productlinks van externe sites kosten u link equity en frustreren potentiële klanten.",
          },
          {
            number: "07",
            title: "Core Web Vitals monitoren na app-installaties",
            body: "Elke BigCommerce-app voegt JavaScript toe aan uw storefront. Test voor het installeren van een app uw paginasnelheid. Test na installatie opnieuw. Als de LCP met meer dan 500 ms toeneemt, is de app het niet waard.",
            href: "/tools/core-web-vitals",
            hrefLabel: "Controleer uw Core Web Vitals",
          },
        ],
      },
      {
        type: "richText",
        badge: "BigCommerce Enterprise",
        heading: "BigCommerce Enterprise SEO — gebouwd om te schalen",
        subtitle: "BigCommerce Enterprise-winkels staan voor unieke SEO-uitdagingen die standaardplannen niet tegenkomen.",
        richTextBlocks: [
          {
            heading: "Wat Enterprise-SEO anders maakt",
            body: "Multi-storefront configuraties met aparte domeinen, geavanceerde productfiltering met honderden attribuutcombinaties, aangepaste checkout-flows die correcte indexeringsafhandeling vereisen, headless commerce-implementaties met Next.js of Gatsby die SSR-optimalisatie vereisen, en catalogusgroottes van meer dan 10.000 SKU\u2019s die schaalbare optimalisatieprocessen vereisen. Ons team heeft gewerkt met BigCommerce Enterprise-winkels op Europese en Amerikaanse markten.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Waarom EcomSEO",
        heading: "Waarom uw BigCommerce-winkel een gespecialiseerd SEO-bureau nodig heeft",
        subtitle: "Generieke SEO-bureaus behandelen BigCommerce als elk ander platform. BigCommerce-winkels hebben een unieke architectuur die platformspecifieke expertise vereist.",
        richTextBlocks: [
          {
            heading: "Wat generieke bureaus missen",
            body: "De URL-structuurbeperkingen van BigCommerce vergeleken met open-source platforms, facetnavigatie die duizenden dubbele URL\u2019s creëert, Stencil-thema-optimalisatie voor snelheid en crawlbaarheid, ingebouwde functies die conflicteren met SEO-tools van derden, multi-storefront canonical-beheer, en BigCommerce API-integratie voor bulkproductoptimalisatie. Wij werken uitsluitend met e-commercemerken — elk teamlid heeft praktijkervaring binnen BigCommerce-winkels.",
          },
        ],
      },
      {
        type: "team",
        badge: "Het Team",
        heading: "De BigCommerce SEO-specialisten achter uw groei",
        teamLead: {
          name: "Fabian van Til",
          role: "Strategie & Innovatie",
          bio: "Leidt de strategische richting van alle klantprojecten. Meer dan 8 jaar e-commerce-SEO-ervaring in mode, gezondheid, beauty en woondecoratie. Combineert groeistrategie met technische SEO-innovatie.",
          image: "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "Technical SEO Lead",
            bio: "Ontwerpt de technische SEO-fundamenten. Gespecialiseerd in e-commerceplatform-optimalisatie, gestructureerde data en site-architectuur. Bouwt de gratis SEO-tools op deze website.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://www.linkedin.com/in/dimitar-georgiev-seo/",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Linkbuilding",
            bio: "Beheerst linkacquisitie en digitale PR op schaal. Bouwt backlinkprofielen die het verschil maken voor concurrerende e-commerce-keywords op Europese en Amerikaanse markten.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "On-Page & Contentstrategie",
            bio: "Ontwikkelt contentstrategieën en on-page optimalisaties die ranken en converteren. Gespecialiseerd in product- en collectiepagina-optimalisatie, keywordonderzoek en redactionele planning.",
            image: "/images/framer/gjorgi-jovev.png",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Deliverables",
        heading: "Wat u elke maand ontvangt",
        subtitle: "Transparante rapportages en tastbare resultaten — geen opvulling, geen ijdelheidsstatistieken. Alles is gekoppeld aan uw omzetdoelen.",
        deliverables: [
          { title: "Technische audit", description: "Volledige crawl + geprioriteerde actielijst met implementatietracking" },
          { title: "Schema-markup", description: "Product-, breadcrumb- en organisatie-JSON-LD — gevalideerd en gemonitord" },
          { title: "Snelheidsoptimalisatie", description: "Core Web Vitals-verbeteringen met voor/na benchmarks" },
          { title: "Keywordonderzoek", description: "Maandelijkse keyword-kansanalyse met koopintentieclassificatie" },
          { title: "Contentcreatie", description: "SEO-geoptimaliseerde productbeschrijvingen, categorie-content en blogposts" },
          { title: "Linkbuilding", description: "Kwalitatieve backlinkacquisitie met volledige transparantie over methoden" },
          { title: "Maandrapport", description: "Rankings, organisch verkeer, omzetattributie en actieplan" },
          { title: "Strategiegesprek", description: "Maandelijks 30 min gesprek om voortgang te bespreken en prioriteiten af te stemmen" },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Hoe lang duurt het voordat BigCommerce SEO resultaten laat zien?",
          answer:
            "De meeste BigCommerce-winkels zien meetbare verbeteringen binnen 3 tot 6 maanden. Technische fixes zoals het opschonen van facetnavigatie en URL-optimalisatie kunnen al na weken resultaat opleveren. Bekijk onze [BigCommerce SEO-gids](/academy/bigcommerce-seo-guide) voor platformspecifieke tactieken.",
        },
        {
          question: "Werken jullie met BigCommerce Enterprise?",
          answer:
            "Ja. Wij werken met alle BigCommerce-abonnementen, inclusief Enterprise. Onze audits dekken multi-storefront setups, aangepaste integraties en geavanceerde catalogusstructuren.",
        },
        {
          question: "Kunnen jullie problemen met de URL-structuur van BigCommerce oplossen?",
          answer:
            "Absoluut. BigCommerce heeft bekende URL-beperkingen. Wij implementeren redirectstrategieen, optimaliseren categoriehierarchie\u00ebn en werken binnen de platformbeperkingen voor maximale SEO-prestaties.",
        },
        {
          question: "Hoe zit het met BigCommerce headless SEO?",
          answer:
            "Wij hebben ervaring met BigCommerce headless-implementaties met Next.js, Gatsby en andere frameworks. Wij zorgen voor correcte rendering, indexatie en gestructureerde data in headless setups.",
        },
        {
          question: "Hoe pakken jullie BigCommerce-facetnavigatie aan?",
          answer:
            "Wij auditen uw facetnavigatie op dubbele content en crawlverspilling en implementeren vervolgens correcte canonical-tags, robotsrichtlijnen en URL-parameterbeheer zodat Google zich op uw beste pagina\u2019s richt. Ons artikel over [technische SEO voor ecommerce](/blog/technical-seo-for-ecommerce) gaat dieper in op deze fixes.",
        },
        {
          question: "Bieden jullie doorlopende BigCommerce SEO-ondersteuning?",
          answer:
            "Ja. Onze maandelijkse contracten omvatten monitoring, rapportage en continue optimalisatie. Wij volgen rankings, verkeer en omzetattributie zodat u altijd uw ROI kent.",
        },
      ],
      miniCta: {
        heading: "Klaar om uw BigCommerce-winkel te laten groeien?",
        subtitle:
          "Krijg een gratis BigCommerce SEO-audit en ontdek precies wat uw winkel tegenhoudt.",
      },
    },
  },
};
