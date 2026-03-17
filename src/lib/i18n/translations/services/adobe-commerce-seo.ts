import type { Locale } from "../../config";
import type { ServicePageProps } from "@/components/service/ServicePageTemplate";

export const adobeCommerceSeoData: Record<Locale, ServicePageProps> = {
  en: {
    hero: {
      badge: "Adobe Commerce Experts",
      heading: "Adobe Commerce SEO for Enterprise Ecommerce",
      subtitle:
        "We optimize Adobe Commerce (Magento) stores for maximum organic visibility. From complex multi-store setups to layered navigation — we handle the technical debt so you can scale.",
      ctaText: "Book an Adobe Commerce SEO Audit",
    },
    trustBar: "Trusted by 20+ Adobe Commerce stores scaling organic revenue",
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
        type: "caseStudies",
        badge: "Results",
        heading: "Adobe Commerce Success Stories",
        caseStudies: [
          {
            badge: "Enterprise Migration",
            title: "B2B Manufacturer: Magento 1 to Adobe Commerce 2",
            metrics: [
              { value: "+180%", label: "Organic Traffic in 8 Months" },
              { value: "0", label: "Indexation Errors Post-Migration" },
              { value: "0.8s", label: "Avg. Page Load (from 2.1s)" },
            ],
            quote:
              "Migrated a 15,000-SKU B2B catalog from Magento 1 to Adobe Commerce 2 with zero traffic loss. Implemented proper redirect mapping, multi-store hreflang, and Varnish optimization.",
            quoteAuthor: "VP of Digital, Industrial Equipment Manufacturer",
          },
          {
            badge: "Multi-Store Optimization",
            title: "Fashion Retailer: 6 Store Views, One SEO Strategy",
            metrics: [
              { value: "+220%", label: "International Organic Traffic" },
              { value: "40K", label: "Duplicate URLs Removed" },
              { value: "Top 3", label: "Rankings in 4 Countries" },
            ],
            quote:
              "Unified SEO across 6 international Adobe Commerce store views. Fixed canonical conflicts, implemented proper hreflang, and eliminated 40,000+ duplicate URLs from the index.",
            quoteAuthor: "Head of Ecommerce, International Fashion Brand",
          },
        ],
      },
      {
        type: "tips",
        badge: "Expert Tips",
        heading: "7 Adobe Commerce SEO Tips from Our Team",
        tips: [
          {
            number: "01",
            title: "Control Layered Navigation Indexation",
            body: "Use robots.txt and meta robots to prevent faceted navigation URLs from being indexed. Focus crawl budget on category and product pages that drive revenue.",
          },
          {
            number: "02",
            title: "Optimize Varnish Full Page Cache",
            body: "Properly configure Varnish cache for all store views. Incorrect cache settings are the #1 cause of slow Adobe Commerce sites and poor Core Web Vitals.",
          },
          {
            number: "03",
            title: "Fix Multi-Store Canonical Issues",
            body: "Each store view needs unique canonicals pointing to itself. Cross-store-view canonical errors are the most common duplicate content issue in Adobe Commerce.",
          },
          {
            number: "04",
            title: "Implement Proper Hreflang Tags",
            body: "Multi-language Adobe Commerce stores need correct hreflang implementation at scale. Use the store view configuration to automate hreflang across thousands of pages.",
          },
          {
            number: "05",
            title: "Clean Up Default Sitemaps",
            body: "Adobe Commerce sitemaps include CMS pages, filter URLs, and out-of-stock products by default. Customize sitemap generation to only include indexable, valuable pages.",
          },
          {
            number: "06",
            title: "Optimize Category Page Content",
            body: "Add unique, keyword-rich descriptions to category pages. Adobe Commerce supports category descriptions \u2014 use them to differentiate from competitors and improve rankings.",
          },
          {
            number: "07",
            title: "Monitor Extension SEO Impact",
            body: "Third-party extensions frequently inject duplicate meta tags, broken schema, or conflicting redirects. Audit every extension for SEO side effects before deploying.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Platform Comparison",
        heading: "Adobe Commerce vs Shopify Plus for SEO",
        richTextBlocks: [
          {
            heading: "Full Control vs. Simplicity",
            body: "Adobe Commerce (formerly Magento) gives you full control over every SEO element \u2014 from URL structure and canonical tags to server-level caching with Varnish. Unlike Shopify Plus, you own your hosting environment, which means you can optimize Core Web Vitals at the infrastructure level.\n\nThe trade-off is complexity. Adobe Commerce requires dedicated development resources to maintain, and SEO misconfigurations in multi-store setups can compound quickly. That\u2019s where specialized Adobe Commerce SEO expertise becomes critical \u2014 the platform\u2019s power is only valuable if it\u2019s configured correctly.\n\nFor enterprise brands with complex catalogs, multiple store views, and B2B requirements, Adobe Commerce remains the most flexible ecommerce platform for SEO. But that flexibility needs expert management to deliver results.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Why Specialized Help",
        heading:
          "Why Your Adobe Commerce Store Needs a Specialized SEO Agency",
        richTextBlocks: [
          {
            heading: "Beyond Generic SEO",
            body: "Adobe Commerce is not a plug-and-play platform. Every SEO improvement requires coordination between your marketing team, developers, and hosting environment. Generic SEO agencies lack the technical depth to work with Varnish caching, layered navigation indexation, and multi-store canonical strategies.\n\nAt EcomSEO, we speak both languages \u2014 we understand the revenue impact of SEO decisions and can communicate technical requirements directly to your development team. We\u2019ve migrated stores from Magento 1, optimized multi-store setups across continents, and fixed enterprise-scale indexation issues that other agencies couldn\u2019t diagnose.\n\nOur team includes specialists who have worked inside Adobe Commerce development teams. We don\u2019t just audit \u2014 we provide implementation-ready specifications that your developers can execute immediately.",
          },
        ],
      },
      {
        type: "team",
        badge: "The Team",
        heading: "The Adobe Commerce SEO Specialists Behind Your Growth",
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
            bio: "Architects the technical SEO foundations. Specializes in Adobe Commerce multi-store optimization, structured data, and site architecture. Builds the free SEO tools on this site.",
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
          {
            title: "Schema Implementation",
            description: "Product + Organization structured data",
          },
          {
            title: "Content Strategy",
            description: "Category + landing page content plan",
          },
          {
            title: "Link Building",
            description: "Authority links from ecommerce publications",
          },
          {
            title: "Quarterly Strategy",
            description: "Roadmap review + priority adjustments",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Do you work with both Magento and Adobe Commerce?",
          answer:
            "Yes. Adobe Commerce is the enterprise version of Magento. We work with both Magento Open Source and Adobe Commerce, handling the unique SEO challenges of each platform version. Learn more in our [Magento ecommerce SEO guide](/blog/magento-ecommerce-seo).",
        },
        {
          question: "How do you handle multi-store SEO for Adobe Commerce?",
          answer:
            "We implement proper hreflang tags, canonical strategies, and store view configurations to ensure each store view targets the right audience without creating duplicate content issues.",
        },
        {
          question:
            "Can you help with Magento 1 to Adobe Commerce 2 migration?",
          answer:
            "Absolutely. We create comprehensive redirect maps, preserve URL equity, and monitor traffic during the migration to minimize organic traffic loss. Our [Magento SEO guide](/academy/magento-seo-guide) covers what to watch for during a migration.",
        },
        {
          question: "How long does an Adobe Commerce SEO audit take?",
          answer:
            "Enterprise audits typically take 2\u20133 weeks depending on the complexity of your multi-store setup, number of store views, and catalog size.",
        },
        {
          question: "Will you work directly with our development team?",
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
    },
  },
  de: {
    hero: {
      badge: "Adobe Commerce Experten",
      heading: "Adobe Commerce SEO f\u00fcr Enterprise E-Commerce",
      subtitle:
        "Wir optimieren Adobe Commerce (Magento) Shops f\u00fcr maximale organische Sichtbarkeit. Von komplexen Multi-Store-Setups bis zur Facettennavigation \u2014 wir beseitigen technische Altlasten, damit Sie skalieren k\u00f6nnen.",
      ctaText: "Adobe Commerce SEO-Audit buchen",
    },
    trustBar:
      "20+ Adobe Commerce Shops vertrauen uns f\u00fcr organisches Umsatzwachstum",
    sections: [
      {
        type: "stats",
        badge: "Erfolgsbilanz",
        heading: "Zahlen, die f\u00fcr sich sprechen",
        stats: [
          { value: "8+", label: "Jahre E-Commerce-SEO" },
          { value: "12 Mio.+", label: "Umsatz generiert" },
          { value: "50+", label: "E-Commerce-Shops optimiert" },
          { value: "140%", label: "Durchschn. Traffic-Steigerung" },
        ],
      },
      {
        type: "benefits",
        badge: "H\u00e4ufige Adobe Commerce SEO-Probleme",
        heading: "Enterprise-Probleme brauchen Enterprise-SEO",
        benefits: [
          {
            title: "Komplexes Multi-Store-Setup",
            description:
              "Mehrere Store-Views, Sprachen und W\u00e4hrungen erzeugen Duplicate Content und Canonical-Konfusion im gesamten Katalog.",
          },
          {
            title: "Facettennavigation-Indexierung",
            description:
              "Die Facettennavigation generiert Tausende filterbarer URLs, die Ihren Index aufbl\u00e4hen und Crawl-Budget verschwenden.",
          },
          {
            title: "Full Page Cache & Speed",
            description:
              "Varnish-Fehlkonfigurationen und schwere Extensions verlangsamen die Seitenladezeiten und ruinieren Ihre Core Web Vitals.",
          },
          {
            title: "Extension-Konflikte",
            description:
              "Drittanbieter-Module f\u00fcgen oft doppelte Meta-Tags, defektes Schema oder widerspr\u00fcchliche Weiterleitungen ein, die Ihr SEO besch\u00e4digen.",
          },
          {
            title: "XML-Sitemap-Generierung",
            description:
              "Standard-Adobe Commerce-Sitemaps enthalten Noindex-Seiten, Filter-URLs und ausverkaufte Produkte, die nicht gecrawlt werden sollten.",
          },
          {
            title: "Migration & Replatforming",
            description:
              "Der Umzug von Magento 1 zu Adobe Commerce 2 ohne korrekte Redirect-Mappings und URL-Bewahrung zerst\u00f6rt organischen Traffic.",
          },
        ],
      },
      {
        type: "process",
        badge: "Unser Playbook",
        heading: "So beheben wir Adobe Commerce SEO",
        process: [
          {
            number: "01",
            title: "Enterprise-Audit",
            description:
              "Tiefen-Crawl Ihrer gesamten Adobe Commerce Instanz. Wir erfassen jeden Store-View, jedes URL-Muster und jedes technische Problem.",
          },
          {
            number: "02",
            title: "Caching & Speed",
            description:
              "Varnish-Konfiguration optimieren, TTFB reduzieren, Render-blockierende Ressourcen beheben und sicherstellen, dass Full Page Cache korrekt funktioniert.",
          },
          {
            number: "03",
            title: "Architektur & Content",
            description:
              "Facettennavigation-Indexierung beheben, Canonical-Strategien implementieren, Kategoriestruktur optimieren und rankenden Content erstellen.",
          },
          {
            number: "04",
            title: "Laufendes Monitoring",
            description:
              "Monatliches Reporting, Crawl-Monitoring und iterative Verbesserungen. Wir erkennen Regressionen aus Deployments, bevor sie den Traffic beeintr\u00e4chtigen.",
          },
        ],
      },
      {
        type: "caseStudies",
        badge: "Ergebnisse",
        heading: "Adobe Commerce Erfolgsgeschichten",
        caseStudies: [
          {
            badge: "Enterprise-Migration",
            title: "B2B-Hersteller: Magento 1 zu Adobe Commerce 2",
            metrics: [
              { value: "+180%", label: "Organischer Traffic in 8 Monaten" },
              { value: "0", label: "Indexierungsfehler nach Migration" },
              { value: "0,8s", label: "Durchschn. Ladezeit (von 2,1s)" },
            ],
            quote:
              "Migration eines B2B-Katalogs mit 15.000 SKUs von Magento 1 zu Adobe Commerce 2 ohne Traffic-Verlust. Korrekte Redirect-Mappings, Multi-Store-Hreflang und Varnish-Optimierung implementiert.",
            quoteAuthor: "VP Digital, Industrieausr\u00fcstungshersteller",
          },
          {
            badge: "Multi-Store-Optimierung",
            title: "Modeh\u00e4ndler: 6 Store-Views, eine SEO-Strategie",
            metrics: [
              { value: "+220%", label: "Internationaler organischer Traffic" },
              { value: "40K", label: "Doppelte URLs entfernt" },
              { value: "Top 3", label: "Rankings in 4 L\u00e4ndern" },
            ],
            quote:
              "SEO \u00fcber 6 internationale Adobe Commerce Store-Views vereinheitlicht. Canonical-Konflikte behoben, korrektes Hreflang implementiert und 40.000+ doppelte URLs aus dem Index entfernt.",
            quoteAuthor: "Head of E-Commerce, Internationale Modemarke",
          },
        ],
      },
      {
        type: "tips",
        badge: "Expertentipps",
        heading: "7 Adobe Commerce SEO-Tipps von unserem Team",
        tips: [
          {
            number: "01",
            title: "Facettennavigation-Indexierung kontrollieren",
            body: "Nutzen Sie robots.txt und Meta-Robots, um die Indexierung von Facettennavigations-URLs zu verhindern. Konzentrieren Sie das Crawl-Budget auf Kategorie- und Produktseiten, die Umsatz generieren.",
          },
          {
            number: "02",
            title: "Varnish Full Page Cache optimieren",
            body: "Konfigurieren Sie den Varnish-Cache korrekt f\u00fcr alle Store-Views. Falsche Cache-Einstellungen sind die h\u00e4ufigste Ursache f\u00fcr langsame Adobe Commerce Seiten und schlechte Core Web Vitals.",
          },
          {
            number: "03",
            title: "Multi-Store Canonical-Probleme beheben",
            body: "Jeder Store-View braucht eigene Canonicals, die auf sich selbst verweisen. Store-View-\u00fcbergreifende Canonical-Fehler sind das h\u00e4ufigste Duplicate-Content-Problem in Adobe Commerce.",
          },
          {
            number: "04",
            title: "Korrekte Hreflang-Tags implementieren",
            body: "Mehrsprachige Adobe Commerce Stores brauchen korrekte Hreflang-Implementierung im gro\u00dfen Ma\u00dfstab. Nutzen Sie die Store-View-Konfiguration, um Hreflang \u00fcber Tausende Seiten zu automatisieren.",
          },
          {
            number: "05",
            title: "Standard-Sitemaps bereinigen",
            body: "Adobe Commerce Sitemaps enthalten standardm\u00e4\u00dfig CMS-Seiten, Filter-URLs und ausverkaufte Produkte. Passen Sie die Sitemap-Generierung an, um nur indexierbare, wertvolle Seiten einzubeziehen.",
          },
          {
            number: "06",
            title: "Kategorieseiten-Content optimieren",
            body: "F\u00fcgen Sie einzigartige, keyword-reiche Beschreibungen zu Kategorieseiten hinzu. Adobe Commerce unterst\u00fctzt Kategoriebeschreibungen \u2014 nutzen Sie diese, um sich von Wettbewerbern abzuheben und Rankings zu verbessern.",
          },
          {
            number: "07",
            title: "SEO-Auswirkungen von Extensions \u00fcberwachen",
            body: "Drittanbieter-Extensions injizieren h\u00e4ufig doppelte Meta-Tags, defektes Schema oder widerspr\u00fcchliche Redirects. Pr\u00fcfen Sie jede Extension auf SEO-Nebenwirkungen vor dem Deployment.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Plattformvergleich",
        heading: "Adobe Commerce vs. Shopify Plus f\u00fcr SEO",
        richTextBlocks: [
          {
            heading: "Volle Kontrolle vs. Einfachheit",
            body: "Adobe Commerce (ehemals Magento) gibt Ihnen die volle Kontrolle \u00fcber jedes SEO-Element \u2014 von der URL-Struktur und Canonical-Tags bis zum Server-Level-Caching mit Varnish. Im Gegensatz zu Shopify Plus besitzen Sie Ihre Hosting-Umgebung, was bedeutet, dass Sie Core Web Vitals auf Infrastrukturebene optimieren k\u00f6nnen.\n\nDer Trade-off ist Komplexit\u00e4t. Adobe Commerce erfordert dedizierte Entwicklungsressourcen f\u00fcr die Wartung, und SEO-Fehlkonfigurationen in Multi-Store-Setups k\u00f6nnen sich schnell vervielfachen. Hier wird spezialisierte Adobe Commerce SEO-Expertise entscheidend \u2014 die Leistungsf\u00e4higkeit der Plattform ist nur wertvoll, wenn sie korrekt konfiguriert ist.\n\nF\u00fcr Enterprise-Marken mit komplexen Katalogen, mehreren Store-Views und B2B-Anforderungen bleibt Adobe Commerce die flexibelste E-Commerce-Plattform f\u00fcr SEO. Aber diese Flexibilit\u00e4t braucht Expertenmanagement, um Ergebnisse zu liefern.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Warum spezialisierte Hilfe",
        heading:
          "Warum Ihr Adobe Commerce Shop eine spezialisierte SEO-Agentur braucht",
        richTextBlocks: [
          {
            heading: "Jenseits von generischem SEO",
            body: "Adobe Commerce ist keine Plug-and-Play-Plattform. Jede SEO-Verbesserung erfordert Koordination zwischen Ihrem Marketing-Team, Entwicklern und der Hosting-Umgebung. Generische SEO-Agenturen fehlt die technische Tiefe f\u00fcr die Arbeit mit Varnish-Caching, Facettennavigation-Indexierung und Multi-Store-Canonical-Strategien.\n\nBei EcomSEO sprechen wir beide Sprachen \u2014 wir verstehen die Umsatzauswirkung von SEO-Entscheidungen und k\u00f6nnen technische Anforderungen direkt an Ihr Entwicklungsteam kommunizieren. Wir haben Shops von Magento 1 migriert, Multi-Store-Setups \u00fcber Kontinente hinweg optimiert und Enterprise-Scale-Indexierungsprobleme behoben, die andere Agenturen nicht diagnostizieren konnten.\n\nUnser Team umfasst Spezialisten, die in Adobe Commerce Entwicklungsteams gearbeitet haben. Wir auditieren nicht nur \u2014 wir liefern implementierungsfertige Spezifikationen, die Ihre Entwickler sofort umsetzen k\u00f6nnen.",
          },
        ],
      },
      {
        type: "team",
        badge: "Das Team",
        heading: "Die Adobe Commerce SEO-Spezialisten hinter Ihrem Wachstum",
        teamLead: {
          name: "Fabian van Til",
          role: "Strategie & Innovation",
          bio: "Leitet die strategische Ausrichtung aller Kundenengagements. 8+ Jahre E-Commerce SEO-Erfahrung in den Bereichen Mode, Gesundheit, Beauty und Wohnen. Verbindet Wachstumsstrategie mit technischer SEO-Innovation.",
          image: "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "Technischer SEO-Leiter",
            bio: "Entwickelt die technischen SEO-Grundlagen. Spezialisiert auf Adobe Commerce Multi-Store-Optimierung, Structured Data und Website-Architektur. Baut die kostenlosen SEO-Tools auf dieser Seite.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://www.linkedin.com/in/dimitar-georgiev-seo/",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Linkaufbau",
            bio: "Meistert Linkakquise und digitale PR im gro\u00dfen Stil. Baut Backlink-Profile auf, die bei wettbewerbsintensiven E-Commerce-Keywords in europ\u00e4ischen und US-M\u00e4rkten den Unterschied machen.",
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
        heading: "Was Sie monatlich erhalten",
        deliverables: [
          {
            title: "Enterprise-Audit",
            description: "Multi-Store-Crawl + Priorisierung",
          },
          {
            title: "Speed-Optimierung",
            description: "Varnish + Core Web Vitals Fixes",
          },
          {
            title: "Architekturplan",
            description: "URL-Struktur + Navigations-Fixes",
          },
          {
            title: "Monatliches Reporting",
            description: "Rankings, Traffic, Umsatzwirkung",
          },
          {
            title: "Schema-Implementierung",
            description: "Produkt- + Organisations-Strukturdaten",
          },
          {
            title: "Content-Strategie",
            description: "Kategorie- + Landingpage-Content-Plan",
          },
          {
            title: "Linkaufbau",
            description: "Autorit\u00e4tslinks aus E-Commerce-Publikationen",
          },
          {
            title: "Quartalsstrategie",
            description: "Roadmap-Review + Priorit\u00e4tsanpassungen",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question:
            "Arbeiten Sie sowohl mit Magento als auch mit Adobe Commerce?",
          answer:
            "Ja. Adobe Commerce ist die Enterprise-Version von Magento. Wir arbeiten sowohl mit Magento Open Source als auch mit Adobe Commerce und bew\u00e4ltigen die spezifischen SEO-Herausforderungen jeder Plattformversion. Erfahren Sie mehr in unserem [Magento-E-Commerce-SEO-Leitfaden](/blog/magento-ecommerce-seo).",
        },
        {
          question:
            "Wie handhaben Sie Multi-Store-SEO f\u00fcr Adobe Commerce?",
          answer:
            "Wir implementieren korrekte Hreflang-Tags, Canonical-Strategien und Store-View-Konfigurationen, damit jeder Store-View die richtige Zielgruppe anspricht, ohne Duplicate-Content-Probleme zu erzeugen.",
        },
        {
          question:
            "K\u00f6nnen Sie bei der Migration von Magento 1 zu Adobe Commerce 2 helfen?",
          answer:
            "Absolut. Wir erstellen umfassende Redirect-Maps, bewahren URL-Equity und \u00fcberwachen den Traffic w\u00e4hrend der Migration, um organische Traffic-Verluste zu minimieren. Unser [Magento-SEO-Leitfaden](/academy/magento-seo-guide) behandelt Best Practices f\u00fcr Migrationen.",
        },
        {
          question: "Wie lange dauert ein Adobe Commerce SEO-Audit?",
          answer:
            "Enterprise-Audits dauern typischerweise 2\u20133 Wochen, abh\u00e4ngig von der Komplexit\u00e4t Ihres Multi-Store-Setups, der Anzahl der Store-Views und der Kataloggr\u00f6\u00dfe.",
        },
        {
          question:
            "Arbeiten Sie direkt mit unserem Entwicklungsteam zusammen?",
          answer:
            "Ja. Wir liefern detaillierte technische Spezifikationen und arbeiten eng mit Ihrem Entwicklungsteam zusammen. Wir verstehen die Adobe Commerce Architektur und kommunizieren effektiv mit Entwicklern.",
        },
        {
          question:
            "Wie unterscheidet sich EcomSEO von anderen Adobe Commerce SEO-Agenturen?",
          answer:
            "Wir kombinieren tiefe Plattformexpertise mit einem E-Commerce-First-Mindset. Wir verstehen die Umsatzwirkung jeder technischen Entscheidung und fokussieren uns auf Fixes, die echte Gesch\u00e4ftsergebnisse liefern.",
        },
      ],
      miniCta: {
        heading: "Bereit, Ihr Adobe Commerce Potenzial freizusetzen?",
        subtitle:
          "Buchen Sie ein kostenloses Audit-Gespr\u00e4ch und wir zeigen Ihnen genau, was Ihren Shop zur\u00fckh\u00e4lt.",
      },
    },
  },
  fr: {
    hero: {
      badge: "Experts Adobe Commerce",
      heading: "SEO Adobe Commerce pour l\u2019e-commerce entreprise",
      subtitle:
        "Nous optimisons les boutiques Adobe Commerce (Magento) pour une visibilit\u00e9 organique maximale. Des configurations multi-boutiques complexes \u00e0 la navigation \u00e0 facettes \u2014 nous g\u00e9rons la dette technique pour vous permettre de scaler.",
      ctaText: "R\u00e9server un audit SEO Adobe Commerce",
    },
    trustBar:
      "Plus de 20 boutiques Adobe Commerce nous font confiance pour leur croissance organique",
    sections: [
      {
        type: "stats",
        badge: "Bilan",
        heading: "Des chiffres qui parlent d\u2019eux-m\u00eames",
        stats: [
          { value: "8+", label: "Ann\u00e9es de SEO e-commerce" },
          { value: "12M\u20ac+", label: "Chiffre d\u2019affaires g\u00e9n\u00e9r\u00e9" },
          { value: "50+", label: "Boutiques e-commerce optimis\u00e9es" },
          { value: "140%", label: "Augmentation moy. du trafic" },
        ],
      },
      {
        type: "benefits",
        badge: "Probl\u00e8mes SEO courants d\u2019Adobe Commerce",
        heading:
          "Les probl\u00e8mes entreprise n\u00e9cessitent un SEO entreprise",
        benefits: [
          {
            title: "Configuration multi-boutiques complexe",
            description:
              "Plusieurs vues boutique, langues et devises cr\u00e9ent du contenu dupliqu\u00e9 et de la confusion canonique dans tout votre catalogue.",
          },
          {
            title: "Indexation de la navigation \u00e0 facettes",
            description:
              "La navigation \u00e0 facettes g\u00e9n\u00e8re des milliers d\u2019URLs filtrables qui gonflent votre index et gaspillent le budget de crawl.",
          },
          {
            title: "Cache de page & vitesse",
            description:
              "Les erreurs de configuration Varnish et les extensions lourdes ralentissent les temps de chargement, nuisant \u00e0 vos scores Core Web Vitals.",
          },
          {
            title: "Conflits d\u2019extensions",
            description:
              "Les modules tiers injectent souvent des balises meta dupliqu\u00e9es, du schema cass\u00e9 ou des redirections contradictoires qui nuisent \u00e0 votre SEO.",
          },
          {
            title: "G\u00e9n\u00e9ration de sitemap XML",
            description:
              "Les sitemaps Adobe Commerce par d\u00e9faut incluent des pages noindex, des URLs filtr\u00e9es et des produits en rupture de stock qui ne devraient pas \u00eatre crawl\u00e9s.",
          },
          {
            title: "Migration & replatforming",
            description:
              "Migrer de Magento 1 vers Adobe Commerce 2 sans mappage de redirections ni pr\u00e9servation des URLs d\u00e9truit le trafic organique.",
          },
        ],
      },
      {
        type: "process",
        badge: "Notre m\u00e9thode",
        heading: "Comment nous corrigeons le SEO Adobe Commerce",
        process: [
          {
            number: "01",
            title: "Audit entreprise",
            description:
              "Crawl en profondeur de toute votre instance Adobe Commerce. Nous cartographions chaque vue boutique, pattern d\u2019URL et probl\u00e8me technique.",
          },
          {
            number: "02",
            title: "Cache & vitesse",
            description:
              "Optimiser la configuration Varnish, r\u00e9duire le TTFB, corriger les ressources bloquant le rendu et s\u2019assurer que le Full Page Cache fonctionne correctement.",
          },
          {
            number: "03",
            title: "Architecture & contenu",
            description:
              "Corriger l\u2019indexation de la navigation \u00e0 facettes, impl\u00e9menter des strat\u00e9gies canoniques, optimiser la structure des cat\u00e9gories et cr\u00e9er du contenu qui se positionne.",
          },
          {
            number: "04",
            title: "Surveillance continue",
            description:
              "Reporting mensuel, surveillance du crawl et am\u00e9liorations it\u00e9ratives. Nous d\u00e9tectons les r\u00e9gressions de d\u00e9ploiement avant qu\u2019elles n\u2019impactent le trafic.",
          },
        ],
      },
      {
        type: "caseStudies",
        badge: "R\u00e9sultats",
        heading: "Histoires de succ\u00e8s Adobe Commerce",
        caseStudies: [
          {
            badge: "Migration entreprise",
            title: "Fabricant B2B : Magento 1 vers Adobe Commerce 2",
            metrics: [
              { value: "+180%", label: "Trafic organique en 8 mois" },
              { value: "0", label: "Erreurs d\u2019indexation post-migration" },
              { value: "0,8s", label: "Temps de chargement moy. (de 2,1s)" },
            ],
            quote:
              "Migration d\u2019un catalogue B2B de 15 000 SKUs de Magento 1 vers Adobe Commerce 2 sans perte de trafic. Mise en place du mappage de redirections, du hreflang multi-boutiques et de l\u2019optimisation Varnish.",
            quoteAuthor: "VP Digital, Fabricant d\u2019\u00e9quipements industriels",
          },
          {
            badge: "Optimisation multi-boutiques",
            title: "D\u00e9taillant mode : 6 vues boutique, une strat\u00e9gie SEO",
            metrics: [
              { value: "+220%", label: "Trafic organique international" },
              { value: "40K", label: "URLs dupliqu\u00e9es supprim\u00e9es" },
              { value: "Top 3", label: "Classements dans 4 pays" },
            ],
            quote:
              "SEO unifi\u00e9 sur 6 vues boutique internationales Adobe Commerce. Correction des conflits canoniques, impl\u00e9mentation du hreflang et \u00e9limination de 40 000+ URLs dupliqu\u00e9es de l\u2019index.",
            quoteAuthor: "Directeur e-commerce, Marque de mode internationale",
          },
        ],
      },
      {
        type: "tips",
        badge: "Conseils d\u2019experts",
        heading: "7 conseils SEO Adobe Commerce de notre \u00e9quipe",
        tips: [
          {
            number: "01",
            title: "Contr\u00f4ler l\u2019indexation de la navigation \u00e0 facettes",
            body: "Utilisez robots.txt et meta robots pour emp\u00eacher l\u2019indexation des URLs de navigation \u00e0 facettes. Concentrez le budget de crawl sur les pages de cat\u00e9gories et de produits qui g\u00e9n\u00e8rent du chiffre d\u2019affaires.",
          },
          {
            number: "02",
            title: "Optimiser le cache Varnish Full Page",
            body: "Configurez correctement le cache Varnish pour toutes les vues boutique. Les param\u00e8tres de cache incorrects sont la cause #1 des sites Adobe Commerce lents et des mauvais Core Web Vitals.",
          },
          {
            number: "03",
            title: "Corriger les probl\u00e8mes de canonicals multi-boutiques",
            body: "Chaque vue boutique a besoin de canonicals uniques pointant vers elle-m\u00eame. Les erreurs de canonicals inter-vues sont le probl\u00e8me de contenu dupliqu\u00e9 le plus courant dans Adobe Commerce.",
          },
          {
            number: "04",
            title: "Impl\u00e9menter correctement les balises hreflang",
            body: "Les boutiques Adobe Commerce multilingues ont besoin d\u2019une impl\u00e9mentation hreflang correcte \u00e0 grande \u00e9chelle. Utilisez la configuration des vues boutique pour automatiser le hreflang sur des milliers de pages.",
          },
          {
            number: "05",
            title: "Nettoyer les sitemaps par d\u00e9faut",
            body: "Les sitemaps Adobe Commerce incluent par d\u00e9faut les pages CMS, les URLs de filtres et les produits en rupture de stock. Personnalisez la g\u00e9n\u00e9ration du sitemap pour n\u2019inclure que les pages indexables et de valeur.",
          },
          {
            number: "06",
            title: "Optimiser le contenu des pages cat\u00e9gories",
            body: "Ajoutez des descriptions uniques et riches en mots-cl\u00e9s aux pages de cat\u00e9gories. Adobe Commerce supporte les descriptions de cat\u00e9gories \u2014 utilisez-les pour vous diff\u00e9rencier de la concurrence et am\u00e9liorer vos classements.",
          },
          {
            number: "07",
            title: "Surveiller l\u2019impact SEO des extensions",
            body: "Les extensions tierces injectent fr\u00e9quemment des balises meta dupliqu\u00e9es, du schema cass\u00e9 ou des redirections contradictoires. Auditez chaque extension pour ses effets secondaires SEO avant le d\u00e9ploiement.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Comparaison de plateformes",
        heading: "Adobe Commerce vs Shopify Plus pour le SEO",
        richTextBlocks: [
          {
            heading: "Contr\u00f4le total vs. simplicit\u00e9",
            body: "Adobe Commerce (anciennement Magento) vous donne un contr\u00f4le total sur chaque \u00e9l\u00e9ment SEO \u2014 de la structure des URLs et des balises canoniques au caching au niveau serveur avec Varnish. Contrairement \u00e0 Shopify Plus, vous poss\u00e9dez votre environnement d\u2019h\u00e9bergement, ce qui signifie que vous pouvez optimiser les Core Web Vitals au niveau de l\u2019infrastructure.\n\nLa contrepartie est la complexit\u00e9. Adobe Commerce n\u00e9cessite des ressources de d\u00e9veloppement d\u00e9di\u00e9es pour la maintenance, et les erreurs de configuration SEO dans les setups multi-boutiques peuvent se multiplier rapidement. C\u2019est l\u00e0 que l\u2019expertise SEO sp\u00e9cialis\u00e9e Adobe Commerce devient critique \u2014 la puissance de la plateforme n\u2019a de valeur que si elle est correctement configur\u00e9e.\n\nPour les marques entreprise avec des catalogues complexes, plusieurs vues boutique et des exigences B2B, Adobe Commerce reste la plateforme e-commerce la plus flexible pour le SEO. Mais cette flexibilit\u00e9 n\u00e9cessite une gestion experte pour produire des r\u00e9sultats.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Pourquoi une aide sp\u00e9cialis\u00e9e",
        heading:
          "Pourquoi votre boutique Adobe Commerce a besoin d\u2019une agence SEO sp\u00e9cialis\u00e9e",
        richTextBlocks: [
          {
            heading: "Au-del\u00e0 du SEO g\u00e9n\u00e9rique",
            body: "Adobe Commerce n\u2019est pas une plateforme plug-and-play. Chaque am\u00e9lioration SEO n\u00e9cessite une coordination entre votre \u00e9quipe marketing, vos d\u00e9veloppeurs et votre environnement d\u2019h\u00e9bergement. Les agences SEO g\u00e9n\u00e9ralistes manquent de la profondeur technique pour travailler avec le caching Varnish, l\u2019indexation de la navigation \u00e0 facettes et les strat\u00e9gies canoniques multi-boutiques.\n\nChez EcomSEO, nous parlons les deux langages \u2014 nous comprenons l\u2019impact sur le chiffre d\u2019affaires des d\u00e9cisions SEO et pouvons communiquer les exigences techniques directement \u00e0 votre \u00e9quipe de d\u00e9veloppement. Nous avons migr\u00e9 des boutiques depuis Magento 1, optimis\u00e9 des setups multi-boutiques sur plusieurs continents, et r\u00e9solu des probl\u00e8mes d\u2019indexation \u00e0 l\u2019\u00e9chelle entreprise que d\u2019autres agences n\u2019arrivaient pas \u00e0 diagnostiquer.\n\nNotre \u00e9quipe comprend des sp\u00e9cialistes qui ont travaill\u00e9 au sein d\u2019\u00e9quipes de d\u00e9veloppement Adobe Commerce. Nous ne faisons pas que des audits \u2014 nous fournissons des sp\u00e9cifications pr\u00eates \u00e0 impl\u00e9menter que vos d\u00e9veloppeurs peuvent ex\u00e9cuter imm\u00e9diatement.",
          },
        ],
      },
      {
        type: "team",
        badge: "L\u2019\u00e9quipe",
        heading: "Les sp\u00e9cialistes SEO Adobe Commerce derri\u00e8re votre croissance",
        teamLead: {
          name: "Fabian van Til",
          role: "Strat\u00e9gie & Innovation",
          bio: "Dirige l\u2019orientation strat\u00e9gique de tous les engagements clients. 8+ ans d\u2019exp\u00e9rience en SEO e-commerce dans la mode, la sant\u00e9, la beaut\u00e9 et la maison. Allie strat\u00e9gie de croissance et innovation SEO technique.",
          image: "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "Responsable SEO technique",
            bio: "Architecte les fondations SEO techniques. Sp\u00e9cialis\u00e9 dans l\u2019optimisation multi-boutiques Adobe Commerce, les donn\u00e9es structur\u00e9es et l\u2019architecture de site. D\u00e9veloppe les outils SEO gratuits de ce site.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://www.linkedin.com/in/dimitar-georgiev-seo/",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Link Building",
            bio: "Ma\u00eetrise l\u2019acquisition de liens et les RP digitales \u00e0 grande \u00e9chelle. Construit des profils de backlinks qui font la diff\u00e9rence sur des mots-cl\u00e9s e-commerce comp\u00e9titifs sur les march\u00e9s europ\u00e9ens et am\u00e9ricains.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "On-Page & Strat\u00e9gie de contenu",
            bio: "\u00c9labore des strat\u00e9gies de contenu et des optimisations on-page qui se positionnent et convertissent. Sp\u00e9cialis\u00e9 dans l\u2019optimisation des pages produits et collections, la recherche de mots-cl\u00e9s et la planification \u00e9ditoriale.",
            image: "/images/framer/gjorgi-jovev.png",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Livrables",
        heading: "Ce que vous recevez chaque mois",
        deliverables: [
          {
            title: "Audit entreprise",
            description: "Crawl multi-boutiques + priorit\u00e9s",
          },
          {
            title: "Optimisation vitesse",
            description: "Corrections Varnish + Core Web Vitals",
          },
          {
            title: "Plan d\u2019architecture",
            description: "Structure URL + corrections navigation",
          },
          {
            title: "Reporting mensuel",
            description: "Positions, trafic, impact sur le CA",
          },
          {
            title: "Impl\u00e9mentation de sch\u00e9ma",
            description: "Donn\u00e9es structur\u00e9es Produit + Organisation",
          },
          {
            title: "Strat\u00e9gie de contenu",
            description: "Plan de contenu cat\u00e9gories + landing pages",
          },
          {
            title: "Link building",
            description: "Liens d\u2019autorit\u00e9 depuis des publications e-commerce",
          },
          {
            title: "Strat\u00e9gie trimestrielle",
            description: "Revue de roadmap + ajustements de priorit\u00e9s",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Travaillez-vous avec Magento et Adobe Commerce ?",
          answer:
            "Oui. Adobe Commerce est la version entreprise de Magento. Nous travaillons avec Magento Open Source et Adobe Commerce, en g\u00e9rant les d\u00e9fis SEO sp\u00e9cifiques \u00e0 chaque version de la plateforme. D\u00e9couvrez notre [guide SEO e-commerce Magento](/blog/magento-ecommerce-seo).",
        },
        {
          question:
            "Comment g\u00e9rez-vous le SEO multi-boutiques pour Adobe Commerce ?",
          answer:
            "Nous impl\u00e9mentons des balises hreflang, des strat\u00e9gies canoniques et des configurations de vues boutique pour que chaque vue cible la bonne audience sans cr\u00e9er de probl\u00e8mes de contenu dupliqu\u00e9.",
        },
        {
          question:
            "Pouvez-vous aider \u00e0 la migration de Magento 1 vers Adobe Commerce 2 ?",
          answer:
            "Absolument. Nous cr\u00e9ons des cartes de redirections compl\u00e8tes, pr\u00e9servons l\u2019\u00e9quit\u00e9 URL et surveillons le trafic pendant la migration pour minimiser les pertes de trafic organique. Notre [guide SEO Magento](/academy/magento-seo-guide) couvre les bonnes pratiques de migration.",
        },
        {
          question: "Combien de temps dure un audit SEO Adobe Commerce ?",
          answer:
            "Les audits entreprise prennent g\u00e9n\u00e9ralement 2 \u00e0 3 semaines selon la complexit\u00e9 de votre configuration multi-boutiques, le nombre de vues boutique et la taille du catalogue.",
        },
        {
          question:
            "Travaillez-vous directement avec notre \u00e9quipe de d\u00e9veloppement ?",
          answer:
            "Oui. Nous fournissons des sp\u00e9cifications techniques d\u00e9taill\u00e9es et travaillons aux c\u00f4t\u00e9s de votre \u00e9quipe technique pour impl\u00e9menter les changements. Nous comprenons l\u2019architecture Adobe Commerce et communiquons efficacement avec les d\u00e9veloppeurs.",
        },
        {
          question:
            "En quoi EcomSEO se distingue des autres agences SEO Adobe Commerce ?",
          answer:
            "Nous combinons une expertise plateforme approfondie avec une mentalit\u00e9 e-commerce-first. Nous comprenons l\u2019impact sur le chiffre d\u2019affaires de chaque d\u00e9cision technique et nous concentrons sur les corrections qui g\u00e9n\u00e8rent de vrais r\u00e9sultats business.",
        },
      ],
      miniCta: {
        heading: "Pr\u00eat \u00e0 lib\u00e9rer le potentiel de votre Adobe Commerce ?",
        subtitle:
          "R\u00e9servez un appel d\u2019audit gratuit et nous vous montrerons exactement ce qui freine votre boutique.",
      },
    },
  },
  es: {
    hero: {
      badge: "Expertos en Adobe Commerce",
      heading: "SEO para Adobe Commerce empresarial",
      subtitle:
        "Optimizamos tiendas Adobe Commerce (Magento) para m\u00e1xima visibilidad org\u00e1nica. Desde configuraciones multi-tienda complejas hasta navegaci\u00f3n por facetas \u2014 gestionamos la deuda t\u00e9cnica para que puedas escalar.",
      ctaText: "Reservar auditor\u00eda SEO Adobe Commerce",
    },
    trustBar:
      "M\u00e1s de 20 tiendas Adobe Commerce conf\u00edan en nosotros para crecer en ingresos org\u00e1nicos",
    sections: [
      {
        type: "stats",
        badge: "Trayectoria",
        heading: "N\u00fameros que hablan por s\u00ed solos",
        stats: [
          { value: "8+", label: "A\u00f1os de SEO para e-commerce" },
          { value: "12M\u20ac+", label: "Ingresos generados" },
          { value: "50+", label: "Tiendas e-commerce optimizadas" },
          { value: "140%", label: "Aumento prom. de tr\u00e1fico" },
        ],
      },
      {
        type: "benefits",
        badge: "Problemas SEO comunes de Adobe Commerce",
        heading: "Problemas enterprise requieren SEO enterprise",
        benefits: [
          {
            title: "Configuraci\u00f3n multi-tienda compleja",
            description:
              "M\u00faltiples vistas de tienda, idiomas y monedas crean contenido duplicado y confusi\u00f3n de canonicals en todo tu cat\u00e1logo.",
          },
          {
            title: "Indexaci\u00f3n de navegaci\u00f3n por facetas",
            description:
              "La navegaci\u00f3n por facetas genera miles de URLs filtrables que inflan tu \u00edndice y desperdician presupuesto de rastreo.",
          },
          {
            title: "Cach\u00e9 de p\u00e1gina completa y velocidad",
            description:
              "Las configuraciones err\u00f3neas de Varnish y las extensiones pesadas ralentizan la carga, afectando tus puntuaciones de Core Web Vitals.",
          },
          {
            title: "Conflictos de extensiones",
            description:
              "Los m\u00f3dulos de terceros suelen inyectar meta tags duplicados, schema roto o redirecciones conflictivas que da\u00f1an tu SEO.",
          },
          {
            title: "Generaci\u00f3n de sitemap XML",
            description:
              "Los sitemaps por defecto de Adobe Commerce incluyen p\u00e1ginas noindex, URLs filtradas y productos agotados que no deber\u00edan rastrearse.",
          },
          {
            title: "Migraci\u00f3n y replatforming",
            description:
              "Migrar de Magento 1 a Adobe Commerce 2 sin mapeo de redirecciones y preservaci\u00f3n de URLs destruye el tr\u00e1fico org\u00e1nico.",
          },
        ],
      },
      {
        type: "process",
        badge: "Nuestra metodolog\u00eda",
        heading: "C\u00f3mo corregimos el SEO de Adobe Commerce",
        process: [
          {
            number: "01",
            title: "Auditor\u00eda enterprise",
            description:
              "Rastreo profundo de toda tu instancia Adobe Commerce. Mapeamos cada vista de tienda, patr\u00f3n de URL y problema t\u00e9cnico.",
          },
          {
            number: "02",
            title: "Cach\u00e9 y velocidad",
            description:
              "Optimizar configuraci\u00f3n Varnish, reducir TTFB, corregir recursos que bloquean el renderizado y asegurar que el Full Page Cache funcione correctamente.",
          },
          {
            number: "03",
            title: "Arquitectura y contenido",
            description:
              "Corregir indexaci\u00f3n de navegaci\u00f3n por facetas, implementar estrategias de canonicals, optimizar estructura de categor\u00edas y crear contenido que posicione.",
          },
          {
            number: "04",
            title: "Monitorizaci\u00f3n continua",
            description:
              "Reporting mensual, monitorizaci\u00f3n de rastreo y mejoras iterativas. Detectamos regresiones de despliegues antes de que impacten el tr\u00e1fico.",
          },
        ],
      },
      {
        type: "caseStudies",
        badge: "Resultados",
        heading: "Historias de \u00e9xito con Adobe Commerce",
        caseStudies: [
          {
            badge: "Migraci\u00f3n enterprise",
            title: "Fabricante B2B: Magento 1 a Adobe Commerce 2",
            metrics: [
              { value: "+180%", label: "Tr\u00e1fico org\u00e1nico en 8 meses" },
              { value: "0", label: "Errores de indexaci\u00f3n post-migraci\u00f3n" },
              { value: "0,8s", label: "Tiempo de carga prom. (de 2,1s)" },
            ],
            quote:
              "Migraci\u00f3n de un cat\u00e1logo B2B de 15.000 SKUs de Magento 1 a Adobe Commerce 2 sin p\u00e9rdida de tr\u00e1fico. Implementaci\u00f3n de mapeo de redirecciones, hreflang multi-tienda y optimizaci\u00f3n de Varnish.",
            quoteAuthor: "VP Digital, Fabricante de equipamiento industrial",
          },
          {
            badge: "Optimizaci\u00f3n multi-tienda",
            title: "Retailer de moda: 6 vistas de tienda, una estrategia SEO",
            metrics: [
              { value: "+220%", label: "Tr\u00e1fico org\u00e1nico internacional" },
              { value: "40K", label: "URLs duplicadas eliminadas" },
              { value: "Top 3", label: "Rankings en 4 pa\u00edses" },
            ],
            quote:
              "SEO unificado en 6 vistas de tienda internacionales de Adobe Commerce. Correcci\u00f3n de conflictos de canonicals, implementaci\u00f3n de hreflang y eliminaci\u00f3n de 40.000+ URLs duplicadas del \u00edndice.",
            quoteAuthor: "Director de e-commerce, Marca de moda internacional",
          },
        ],
      },
      {
        type: "tips",
        badge: "Consejos de expertos",
        heading: "7 consejos SEO para Adobe Commerce de nuestro equipo",
        tips: [
          {
            number: "01",
            title: "Controlar la indexaci\u00f3n de la navegaci\u00f3n por facetas",
            body: "Usa robots.txt y meta robots para evitar la indexaci\u00f3n de URLs de navegaci\u00f3n por facetas. Concentra el presupuesto de rastreo en p\u00e1ginas de categor\u00edas y productos que generan ingresos.",
          },
          {
            number: "02",
            title: "Optimizar el cach\u00e9 Varnish Full Page",
            body: "Configura correctamente el cach\u00e9 Varnish para todas las vistas de tienda. La configuraci\u00f3n incorrecta del cach\u00e9 es la causa #1 de sitios Adobe Commerce lentos y malos Core Web Vitals.",
          },
          {
            number: "03",
            title: "Corregir problemas de canonicals multi-tienda",
            body: "Cada vista de tienda necesita canonicals \u00fanicos que apunten a s\u00ed misma. Los errores de canonicals entre vistas son el problema de contenido duplicado m\u00e1s com\u00fan en Adobe Commerce.",
          },
          {
            number: "04",
            title: "Implementar etiquetas hreflang correctamente",
            body: "Las tiendas Adobe Commerce multi-idioma necesitan implementaci\u00f3n hreflang correcta a gran escala. Usa la configuraci\u00f3n de vistas de tienda para automatizar hreflang en miles de p\u00e1ginas.",
          },
          {
            number: "05",
            title: "Limpiar los sitemaps por defecto",
            body: "Los sitemaps de Adobe Commerce incluyen por defecto p\u00e1ginas CMS, URLs de filtros y productos agotados. Personaliza la generaci\u00f3n del sitemap para incluir solo p\u00e1ginas indexables y valiosas.",
          },
          {
            number: "06",
            title: "Optimizar el contenido de p\u00e1ginas de categor\u00edas",
            body: "A\u00f1ade descripciones \u00fanicas y ricas en palabras clave a las p\u00e1ginas de categor\u00edas. Adobe Commerce soporta descripciones de categor\u00edas \u2014 \u00fasalas para diferenciarte de la competencia y mejorar los rankings.",
          },
          {
            number: "07",
            title: "Monitorizar el impacto SEO de las extensiones",
            body: "Las extensiones de terceros inyectan frecuentemente meta tags duplicados, schema roto o redirecciones conflictivas. Audita cada extensi\u00f3n por efectos secundarios SEO antes de desplegar.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Comparaci\u00f3n de plataformas",
        heading: "Adobe Commerce vs Shopify Plus para SEO",
        richTextBlocks: [
          {
            heading: "Control total vs. simplicidad",
            body: "Adobe Commerce (anteriormente Magento) te da control total sobre cada elemento SEO \u2014 desde la estructura de URLs y etiquetas canonicals hasta el caching a nivel de servidor con Varnish. A diferencia de Shopify Plus, eres due\u00f1o de tu entorno de hosting, lo que significa que puedes optimizar los Core Web Vitals a nivel de infraestructura.\n\nLa contrapartida es la complejidad. Adobe Commerce requiere recursos de desarrollo dedicados para el mantenimiento, y las configuraciones err\u00f3neas de SEO en setups multi-tienda pueden multiplicarse r\u00e1pidamente. Ah\u00ed es donde la experiencia SEO especializada en Adobe Commerce se vuelve cr\u00edtica \u2014 el poder de la plataforma solo es valioso si est\u00e1 configurado correctamente.\n\nPara marcas enterprise con cat\u00e1logos complejos, m\u00faltiples vistas de tienda y requisitos B2B, Adobe Commerce sigue siendo la plataforma e-commerce m\u00e1s flexible para SEO. Pero esa flexibilidad necesita gesti\u00f3n experta para dar resultados.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Por qu\u00e9 ayuda especializada",
        heading:
          "Por qu\u00e9 tu tienda Adobe Commerce necesita una agencia SEO especializada",
        richTextBlocks: [
          {
            heading: "M\u00e1s all\u00e1 del SEO gen\u00e9rico",
            body: "Adobe Commerce no es una plataforma plug-and-play. Cada mejora SEO requiere coordinaci\u00f3n entre tu equipo de marketing, desarrolladores y entorno de hosting. Las agencias SEO gen\u00e9ricas carecen de la profundidad t\u00e9cnica para trabajar con caching Varnish, indexaci\u00f3n de navegaci\u00f3n por facetas y estrategias canonicals multi-tienda.\n\nEn EcomSEO, hablamos ambos idiomas \u2014 entendemos el impacto en ingresos de las decisiones SEO y podemos comunicar requisitos t\u00e9cnicos directamente a tu equipo de desarrollo. Hemos migrado tiendas desde Magento 1, optimizado setups multi-tienda en varios continentes y resuelto problemas de indexaci\u00f3n a escala enterprise que otras agencias no pod\u00edan diagnosticar.\n\nNuestro equipo incluye especialistas que han trabajado dentro de equipos de desarrollo de Adobe Commerce. No solo auditamos \u2014 proporcionamos especificaciones listas para implementar que tus desarrolladores pueden ejecutar inmediatamente.",
          },
        ],
      },
      {
        type: "team",
        badge: "El equipo",
        heading: "Los especialistas SEO en Adobe Commerce detr\u00e1s de tu crecimiento",
        teamLead: {
          name: "Fabian van Til",
          role: "Estrategia e Innovaci\u00f3n",
          bio: "Dirige la orientaci\u00f3n estrat\u00e9gica de todos los proyectos. 8+ a\u00f1os de experiencia en SEO para e-commerce en moda, salud, belleza y hogar. Combina estrategia de crecimiento con innovaci\u00f3n SEO t\u00e9cnica.",
          image: "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "L\u00edder de SEO T\u00e9cnico",
            bio: "Arquitecta las bases del SEO t\u00e9cnico. Especializado en optimizaci\u00f3n multi-tienda Adobe Commerce, datos estructurados y arquitectura web. Desarrolla las herramientas SEO gratuitas de este sitio.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://www.linkedin.com/in/dimitar-georgiev-seo/",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Link Building",
            bio: "Domina la adquisici\u00f3n de enlaces y las RP digitales a gran escala. Construye perfiles de backlinks que marcan la diferencia en keywords e-commerce competitivos en mercados europeos y estadounidenses.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "On-Page & Estrategia de contenido",
            bio: "Dise\u00f1a estrategias de contenido y optimizaciones on-page que posicionan y convierten. Especializado en optimizaci\u00f3n de p\u00e1ginas de producto y colecci\u00f3n, investigaci\u00f3n de palabras clave y planificaci\u00f3n editorial.",
            image: "/images/framer/gjorgi-jovev.png",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Entregables",
        heading: "Lo que recibes cada mes",
        deliverables: [
          {
            title: "Auditor\u00eda enterprise",
            description: "Rastreo multi-tienda + prioridades",
          },
          {
            title: "Optimizaci\u00f3n de velocidad",
            description: "Correcciones Varnish + Core Web Vitals",
          },
          {
            title: "Plan de arquitectura",
            description: "Estructura URL + correcciones de navegaci\u00f3n",
          },
          {
            title: "Reporting mensual",
            description: "Posiciones, tr\u00e1fico, impacto en ingresos",
          },
          {
            title: "Implementaci\u00f3n de schema",
            description: "Datos estructurados de Producto + Organizaci\u00f3n",
          },
          {
            title: "Estrategia de contenido",
            description: "Plan de contenido para categor\u00edas + landing pages",
          },
          {
            title: "Link building",
            description: "Enlaces de autoridad desde publicaciones e-commerce",
          },
          {
            title: "Estrategia trimestral",
            description: "Revisi\u00f3n de roadmap + ajustes de prioridades",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "\u00bfTrabajan tanto con Magento como con Adobe Commerce?",
          answer:
            "S\u00ed. Adobe Commerce es la versi\u00f3n enterprise de Magento. Trabajamos tanto con Magento Open Source como con Adobe Commerce, gestionando los desaf\u00edos SEO \u00fanicos de cada versi\u00f3n de la plataforma. Conoce m\u00e1s en nuestra [gu\u00eda SEO e-commerce para Magento](/blog/magento-ecommerce-seo).",
        },
        {
          question:
            "\u00bfC\u00f3mo gestionan el SEO multi-tienda para Adobe Commerce?",
          answer:
            "Implementamos etiquetas hreflang, estrategias de canonicals y configuraciones de vistas de tienda para que cada vista se dirija a la audiencia correcta sin crear problemas de contenido duplicado.",
        },
        {
          question:
            "\u00bfPueden ayudar con la migraci\u00f3n de Magento 1 a Adobe Commerce 2?",
          answer:
            "Por supuesto. Creamos mapas de redirecciones completos, preservamos la equidad de URLs y monitorizamos el tr\u00e1fico durante la migraci\u00f3n para minimizar la p\u00e9rdida de tr\u00e1fico org\u00e1nico. Nuestra [gu\u00eda SEO de Magento](/academy/magento-seo-guide) cubre las mejores pr\u00e1cticas de migraci\u00f3n.",
        },
        {
          question:
            "\u00bfCu\u00e1nto tarda una auditor\u00eda SEO de Adobe Commerce?",
          answer:
            "Las auditor\u00edas enterprise suelen tardar 2-3 semanas dependiendo de la complejidad de tu configuraci\u00f3n multi-tienda, el n\u00famero de vistas de tienda y el tama\u00f1o del cat\u00e1logo.",
        },
        {
          question:
            "\u00bfTrabajan directamente con nuestro equipo de desarrollo?",
          answer:
            "S\u00ed. Proporcionamos especificaciones t\u00e9cnicas detalladas y trabajamos junto a tu equipo de desarrollo para implementar los cambios. Entendemos la arquitectura de Adobe Commerce y comunicamos eficazmente con los desarrolladores.",
        },
        {
          question:
            "\u00bfC\u00f3mo se diferencia EcomSEO de otras agencias SEO de Adobe Commerce?",
          answer:
            "Combinamos experiencia profunda en la plataforma con una mentalidad ecommerce-first. Entendemos el impacto en ingresos de cada decisi\u00f3n t\u00e9cnica y nos enfocamos en correcciones que generan resultados de negocio reales.",
        },
      ],
      miniCta: {
        heading: "\u00bfListo para liberar el potencial de tu Adobe Commerce?",
        subtitle:
          "Reserva una llamada de auditor\u00eda gratuita y te mostraremos exactamente qu\u00e9 est\u00e1 frenando tu tienda.",
      },
    },
  },
  it: {
    hero: {
      badge: "Esperti Adobe Commerce",
      heading: "SEO Adobe Commerce per e-commerce enterprise",
      subtitle:
        "Ottimizziamo gli store Adobe Commerce (Magento) per la massima visibilit\u00e0 organica. Dai setup multi-store complessi alla navigazione a faccette \u2014 gestiamo il debito tecnico per permetterti di scalare.",
      ctaText: "Prenota un audit SEO Adobe Commerce",
    },
    trustBar:
      "Oltre 20 store Adobe Commerce si affidano a noi per la crescita organica del fatturato",
    sections: [
      {
        type: "stats",
        badge: "Track Record",
        heading: "Numeri che parlano da soli",
        stats: [
          { value: "8+", label: "Anni di SEO e-commerce" },
          { value: "12M\u20ac+", label: "Fatturato generato" },
          { value: "50+", label: "Store e-commerce ottimizzati" },
          { value: "140%", label: "Aumento medio del traffico" },
        ],
      },
      {
        type: "benefits",
        badge: "Problemi SEO comuni di Adobe Commerce",
        heading: "Problemi enterprise richiedono SEO enterprise",
        benefits: [
          {
            title: "Setup multi-store complesso",
            description:
              "Molteplici store view, lingue e valute creano contenuti duplicati e confusione sui canonical in tutto il catalogo.",
          },
          {
            title: "Indicizzazione della navigazione a faccette",
            description:
              "La navigazione a faccette genera migliaia di URL filtrabili che gonfiano l\u2019indice e sprecano il crawl budget.",
          },
          {
            title: "Full Page Cache e velocit\u00e0",
            description:
              "Configurazioni errate di Varnish ed estensioni pesanti rallentano il caricamento, compromettendo i punteggi Core Web Vitals.",
          },
          {
            title: "Conflitti di estensioni",
            description:
              "I moduli di terze parti spesso iniettano meta tag duplicati, schema non validi o redirect in conflitto che danneggiano il SEO.",
          },
          {
            title: "Generazione sitemap XML",
            description:
              "Le sitemap predefinite di Adobe Commerce includono pagine noindex, URL filtrate e prodotti esauriti che non dovrebbero essere crawlati.",
          },
          {
            title: "Migrazione e replatforming",
            description:
              "Migrare da Magento 1 ad Adobe Commerce 2 senza mappatura corretta dei redirect e preservazione degli URL distrugge il traffico organico.",
          },
        ],
      },
      {
        type: "process",
        badge: "Il nostro metodo",
        heading: "Come correggiamo il SEO di Adobe Commerce",
        process: [
          {
            number: "01",
            title: "Audit enterprise",
            description:
              "Crawl approfondito dell\u2019intera istanza Adobe Commerce. Mappiamo ogni store view, pattern URL e problema tecnico.",
          },
          {
            number: "02",
            title: "Caching e velocit\u00e0",
            description:
              "Ottimizzare la configurazione Varnish, ridurre il TTFB, correggere le risorse che bloccano il rendering e assicurare che il Full Page Cache funzioni correttamente.",
          },
          {
            number: "03",
            title: "Architettura e contenuti",
            description:
              "Correggere l\u2019indicizzazione della navigazione a faccette, implementare strategie canonical, ottimizzare la struttura delle categorie e creare contenuti che si posizionano.",
          },
          {
            number: "04",
            title: "Monitoraggio continuo",
            description:
              "Reporting mensile, monitoraggio del crawl e miglioramenti iterativi. Rileviamo le regressioni dai deployment prima che impattino il traffico.",
          },
        ],
      },
      {
        type: "caseStudies",
        badge: "Risultati",
        heading: "Storie di successo Adobe Commerce",
        caseStudies: [
          {
            badge: "Migrazione enterprise",
            title: "Produttore B2B: Magento 1 ad Adobe Commerce 2",
            metrics: [
              { value: "+180%", label: "Traffico organico in 8 mesi" },
              { value: "0", label: "Errori di indicizzazione post-migrazione" },
              { value: "0,8s", label: "Tempo medio di caricamento (da 2,1s)" },
            ],
            quote:
              "Migrazione di un catalogo B2B con 15.000 SKU da Magento 1 ad Adobe Commerce 2 senza perdita di traffico. Implementazione della mappatura redirect, hreflang multi-store e ottimizzazione Varnish.",
            quoteAuthor: "VP Digital, Produttore di attrezzature industriali",
          },
          {
            badge: "Ottimizzazione multi-store",
            title: "Retailer moda: 6 store view, una strategia SEO",
            metrics: [
              { value: "+220%", label: "Traffico organico internazionale" },
              { value: "40K", label: "URL duplicate rimosse" },
              { value: "Top 3", label: "Classifiche in 4 paesi" },
            ],
            quote:
              "SEO unificato su 6 store view internazionali Adobe Commerce. Correzione dei conflitti canonical, implementazione hreflang ed eliminazione di 40.000+ URL duplicate dall\u2019indice.",
            quoteAuthor:
              "Responsabile e-commerce, Brand di moda internazionale",
          },
        ],
      },
      {
        type: "tips",
        badge: "Consigli degli esperti",
        heading: "7 consigli SEO per Adobe Commerce dal nostro team",
        tips: [
          {
            number: "01",
            title: "Controllare l\u2019indicizzazione della navigazione a faccette",
            body: "Usa robots.txt e meta robots per impedire l\u2019indicizzazione degli URL della navigazione a faccette. Concentra il crawl budget sulle pagine di categoria e prodotto che generano fatturato.",
          },
          {
            number: "02",
            title: "Ottimizzare la cache Varnish Full Page",
            body: "Configura correttamente la cache Varnish per tutte le store view. Le impostazioni di cache errate sono la causa #1 dei siti Adobe Commerce lenti e dei Core Web Vitals scarsi.",
          },
          {
            number: "03",
            title: "Correggere i problemi di canonical multi-store",
            body: "Ogni store view ha bisogno di canonical unici che puntino a s\u00e9 stessa. Gli errori di canonical tra store view sono il problema di contenuto duplicato pi\u00f9 comune in Adobe Commerce.",
          },
          {
            number: "04",
            title: "Implementare correttamente i tag hreflang",
            body: "Gli store Adobe Commerce multilingua necessitano di un\u2019implementazione hreflang corretta su larga scala. Usa la configurazione delle store view per automatizzare l\u2019hreflang su migliaia di pagine.",
          },
          {
            number: "05",
            title: "Pulire le sitemap predefinite",
            body: "Le sitemap di Adobe Commerce includono per default pagine CMS, URL di filtri e prodotti esauriti. Personalizza la generazione della sitemap per includere solo pagine indicizzabili e di valore.",
          },
          {
            number: "06",
            title: "Ottimizzare il contenuto delle pagine categoria",
            body: "Aggiungi descrizioni uniche e ricche di parole chiave alle pagine di categoria. Adobe Commerce supporta le descrizioni delle categorie \u2014 usale per differenziarti dalla concorrenza e migliorare i posizionamenti.",
          },
          {
            number: "07",
            title: "Monitorare l\u2019impatto SEO delle estensioni",
            body: "Le estensioni di terze parti iniettano frequentemente meta tag duplicati, schema non validi o redirect in conflitto. Audita ogni estensione per effetti collaterali SEO prima del deployment.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Confronto piattaforme",
        heading: "Adobe Commerce vs Shopify Plus per il SEO",
        richTextBlocks: [
          {
            heading: "Controllo totale vs. semplicit\u00e0",
            body: "Adobe Commerce (ex Magento) ti d\u00e0 il controllo totale su ogni elemento SEO \u2014 dalla struttura degli URL e tag canonical al caching a livello server con Varnish. A differenza di Shopify Plus, possiedi il tuo ambiente di hosting, il che significa che puoi ottimizzare i Core Web Vitals a livello di infrastruttura.\n\nIl compromesso \u00e8 la complessit\u00e0. Adobe Commerce richiede risorse di sviluppo dedicate per la manutenzione, e le misconfigurazioni SEO nei setup multi-store possono moltiplicarsi rapidamente. \u00c8 qui che l\u2019esperienza SEO specializzata in Adobe Commerce diventa critica \u2014 la potenza della piattaforma ha valore solo se configurata correttamente.\n\nPer i brand enterprise con cataloghi complessi, multiple store view e requisiti B2B, Adobe Commerce rimane la piattaforma e-commerce pi\u00f9 flessibile per il SEO. Ma quella flessibilit\u00e0 necessita di gestione esperta per produrre risultati.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Perch\u00e9 un aiuto specializzato",
        heading:
          "Perch\u00e9 il tuo store Adobe Commerce ha bisogno di un\u2019agenzia SEO specializzata",
        richTextBlocks: [
          {
            heading: "Oltre il SEO generico",
            body: "Adobe Commerce non \u00e8 una piattaforma plug-and-play. Ogni miglioramento SEO richiede coordinamento tra il tuo team marketing, gli sviluppatori e l\u2019ambiente di hosting. Le agenzie SEO generiche mancano della profondit\u00e0 tecnica per lavorare con il caching Varnish, l\u2019indicizzazione della navigazione a faccette e le strategie canonical multi-store.\n\nIn EcomSEO, parliamo entrambi i linguaggi \u2014 comprendiamo l\u2019impatto sul fatturato delle decisioni SEO e possiamo comunicare i requisiti tecnici direttamente al tuo team di sviluppo. Abbiamo migrato store da Magento 1, ottimizzato setup multi-store su pi\u00f9 continenti e risolto problemi di indicizzazione su scala enterprise che altre agenzie non riuscivano a diagnosticare.\n\nIl nostro team include specialisti che hanno lavorato all\u2019interno di team di sviluppo Adobe Commerce. Non ci limitiamo agli audit \u2014 forniamo specifiche pronte per l\u2019implementazione che i tuoi sviluppatori possono eseguire immediatamente.",
          },
        ],
      },
      {
        type: "team",
        badge: "Il team",
        heading: "Gli specialisti SEO Adobe Commerce dietro la tua crescita",
        teamLead: {
          name: "Fabian van Til",
          role: "Strategia & Innovazione",
          bio: "Guida la direzione strategica di tutti gli incarichi. 8+ anni di esperienza SEO e-commerce nei settori moda, salute, bellezza e casa. Unisce strategia di crescita e innovazione SEO tecnica.",
          image: "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "Responsabile SEO tecnico",
            bio: "Progetta le fondamenta del SEO tecnico. Specializzato in ottimizzazione multi-store Adobe Commerce, dati strutturati e architettura del sito. Sviluppa gli strumenti SEO gratuiti su questo sito.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://www.linkedin.com/in/dimitar-georgiev-seo/",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Link Building",
            bio: "Padroneggia l\u2019acquisizione di link e le PR digitali su larga scala. Costruisce profili di backlink che fanno la differenza per keyword e-commerce competitive nei mercati europei e statunitensi.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "On-Page & Strategia contenuti",
            bio: "Crea strategie di contenuto e ottimizzazioni on-page che si posizionano e convertono. Specializzato in ottimizzazione di pagine prodotto e collezione, ricerca keyword e pianificazione editoriale.",
            image: "/images/framer/gjorgi-jovev.png",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Deliverable",
        heading: "Cosa ricevi ogni mese",
        deliverables: [
          {
            title: "Audit enterprise",
            description: "Crawl multi-store + priorit\u00e0",
          },
          {
            title: "Ottimizzazione velocit\u00e0",
            description: "Fix Varnish + Core Web Vitals",
          },
          {
            title: "Piano architettura",
            description: "Struttura URL + fix navigazione",
          },
          {
            title: "Reporting mensile",
            description: "Posizionamenti, traffico, impatto sul fatturato",
          },
          {
            title: "Implementazione schema",
            description: "Dati strutturati Prodotto + Organizzazione",
          },
          {
            title: "Strategia di contenuto",
            description: "Piano contenuti categorie + landing page",
          },
          {
            title: "Link building",
            description: "Link autorevoli da pubblicazioni e-commerce",
          },
          {
            title: "Strategia trimestrale",
            description: "Revisione roadmap + aggiustamenti priorit\u00e0",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Lavorate sia con Magento che con Adobe Commerce?",
          answer:
            "S\u00ec. Adobe Commerce \u00e8 la versione enterprise di Magento. Lavoriamo sia con Magento Open Source che con Adobe Commerce, gestendo le sfide SEO uniche di ogni versione della piattaforma. Scopri di pi\u00f9 nella nostra [guida SEO e-commerce Magento](/blog/magento-ecommerce-seo).",
        },
        {
          question: "Come gestite il SEO multi-store per Adobe Commerce?",
          answer:
            "Implementiamo tag hreflang, strategie canonical e configurazioni degli store view per assicurare che ogni vista si rivolga al pubblico giusto senza creare problemi di contenuto duplicato.",
        },
        {
          question:
            "Potete aiutare con la migrazione da Magento 1 ad Adobe Commerce 2?",
          answer:
            "Assolutamente. Creiamo mappe di redirect complete, preserviamo l\u2019equity degli URL e monitoriamo il traffico durante la migrazione per minimizzare le perdite di traffico organico. La nostra [guida SEO Magento](/academy/magento-seo-guide) copre le best practice per le migrazioni.",
        },
        {
          question: "Quanto tempo richiede un audit SEO Adobe Commerce?",
          answer:
            "Gli audit enterprise richiedono tipicamente 2-3 settimane a seconda della complessit\u00e0 del setup multi-store, del numero di store view e delle dimensioni del catalogo.",
        },
        {
          question:
            "Lavorerete direttamente con il nostro team di sviluppo?",
          answer:
            "S\u00ec. Forniamo specifiche tecniche dettagliate e lavoriamo a fianco del vostro team di sviluppo per implementare i cambiamenti. Comprendiamo l\u2019architettura Adobe Commerce e comunichiamo efficacemente con gli sviluppatori.",
        },
        {
          question:
            "In cosa si differenzia EcomSEO dalle altre agenzie SEO Adobe Commerce?",
          answer:
            "Combiniamo competenza profonda sulla piattaforma con una mentalit\u00e0 e-commerce-first. Comprendiamo l\u2019impatto sul fatturato di ogni decisione tecnica e ci concentriamo su fix che generano risultati di business reali.",
        },
      ],
      miniCta: {
        heading: "Pronto a liberare il potenziale del tuo Adobe Commerce?",
        subtitle:
          "Prenota una call di audit gratuita e ti mostreremo esattamente cosa sta frenando il tuo store.",
      },
    },
  },
  nl: {
    hero: {
      badge: "Adobe Commerce experts",
      heading: "Adobe Commerce SEO voor enterprise e-commerce",
      subtitle:
        "Wij optimaliseren Adobe Commerce (Magento) webshops voor maximale organische zichtbaarheid. Van complexe multi-store setups tot gefacetteerde navigatie \u2014 wij lossen de technische schuld op zodat jij kunt schalen.",
      ctaText: "Boek een Adobe Commerce SEO-audit",
    },
    trustBar:
      "20+ Adobe Commerce webshops vertrouwen op ons voor organische omzetgroei",
    sections: [
      {
        type: "stats",
        badge: "Track Record",
        heading: "Cijfers die voor zich spreken",
        stats: [
          { value: "8+", label: "Jaar e-commerce SEO" },
          { value: "\u20ac12M+", label: "Omzet gegenereerd" },
          { value: "50+", label: "E-commerce shops geoptimaliseerd" },
          { value: "140%", label: "Gem. verkeersstijging" },
        ],
      },
      {
        type: "benefits",
        badge: "Veelvoorkomende Adobe Commerce SEO-problemen",
        heading: "Enterprise-problemen vereisen enterprise-SEO",
        benefits: [
          {
            title: "Complex multi-store setup",
            description:
              "Meerdere store views, talen en valuta\u2019s cre\u00ebren duplicate content en canonical-verwarring in je hele catalogus.",
          },
          {
            title: "Gefacetteerde navigatie-indexering",
            description:
              "Gefacetteerde navigatie genereert duizenden filterbare URL\u2019s die je index opblazen en crawlbudget verspillen.",
          },
          {
            title: "Full Page Cache & snelheid",
            description:
              "Onjuiste Varnish-configuraties en zware extensies vertragen de laadtijden, wat je Core Web Vitals-scores schaadt.",
          },
          {
            title: "Extensieconflicten",
            description:
              "Modules van derden injecteren vaak dubbele meta-tags, kapot schema of tegenstrijdige redirects die je SEO beschadigen.",
          },
          {
            title: "XML-sitemap generatie",
            description:
              "Standaard Adobe Commerce sitemaps bevatten noindex-pagina\u2019s, filter-URL\u2019s en uitverkochte producten die niet gecrawld zouden moeten worden.",
          },
          {
            title: "Migratie & replatforming",
            description:
              "Migreren van Magento 1 naar Adobe Commerce 2 zonder correcte redirect-mapping en URL-behoud vernietigt organisch verkeer.",
          },
        ],
      },
      {
        type: "process",
        badge: "Onze aanpak",
        heading: "Hoe wij Adobe Commerce SEO fixen",
        process: [
          {
            number: "01",
            title: "Enterprise-audit",
            description:
              "Diepgaande crawl van je volledige Adobe Commerce instantie. We brengen elke store view, elk URL-patroon en elk technisch probleem in kaart.",
          },
          {
            number: "02",
            title: "Caching & snelheid",
            description:
              "Varnish-configuratie optimaliseren, TTFB verlagen, render-blokkerende resources fixen en zorgen dat Full Page Cache correct werkt.",
          },
          {
            number: "03",
            title: "Architectuur & content",
            description:
              "Gefacetteerde navigatie-indexering fixen, canonical-strategie\u00ebn implementeren, categoriestructuur optimaliseren en content bouwen die rankt.",
          },
          {
            number: "04",
            title: "Doorlopende monitoring",
            description:
              "Maandelijkse rapportage, crawl-monitoring en iteratieve verbeteringen. We detecteren regressies van deployments voordat ze verkeer be\u00efnvloeden.",
          },
        ],
      },
      {
        type: "caseStudies",
        badge: "Resultaten",
        heading: "Adobe Commerce succesverhalen",
        caseStudies: [
          {
            badge: "Enterprise-migratie",
            title: "B2B-fabrikant: Magento 1 naar Adobe Commerce 2",
            metrics: [
              { value: "+180%", label: "Organisch verkeer in 8 maanden" },
              { value: "0", label: "Indexatiefouten na migratie" },
              { value: "0,8s", label: "Gem. laadtijd (van 2,1s)" },
            ],
            quote:
              "Migratie van een B2B-catalogus met 15.000 SKU\u2019s van Magento 1 naar Adobe Commerce 2 zonder verkeersverlies. Correcte redirect-mapping, multi-store hreflang en Varnish-optimalisatie ge\u00efmplementeerd.",
            quoteAuthor: "VP Digital, Industri\u00eble apparatuurfabrikant",
          },
          {
            badge: "Multi-store optimalisatie",
            title: "Moderetailer: 6 store views, \u00e9\u00e9n SEO-strategie",
            metrics: [
              { value: "+220%", label: "Internationaal organisch verkeer" },
              { value: "40K", label: "Dubbele URL\u2019s verwijderd" },
              { value: "Top 3", label: "Rankings in 4 landen" },
            ],
            quote:
              "SEO ge\u00fcnificeerd over 6 internationale Adobe Commerce store views. Canonical-conflicten opgelost, correct hreflang ge\u00efmplementeerd en 40.000+ dubbele URL\u2019s uit de index verwijderd.",
            quoteAuthor: "Hoofd e-commerce, Internationaal modemerk",
          },
        ],
      },
      {
        type: "tips",
        badge: "Expertentips",
        heading: "7 Adobe Commerce SEO-tips van ons team",
        tips: [
          {
            number: "01",
            title: "Gefacetteerde navigatie-indexering beheren",
            body: "Gebruik robots.txt en meta robots om te voorkomen dat gefacetteerde navigatie-URL\u2019s worden ge\u00efndexeerd. Richt het crawlbudget op categorie- en productpagina\u2019s die omzet genereren.",
          },
          {
            number: "02",
            title: "Varnish Full Page Cache optimaliseren",
            body: "Configureer Varnish-cache correct voor alle store views. Onjuiste cache-instellingen zijn de #1 oorzaak van trage Adobe Commerce sites en slechte Core Web Vitals.",
          },
          {
            number: "03",
            title: "Multi-store canonical-problemen oplossen",
            body: "Elke store view heeft unieke canonicals nodig die naar zichzelf verwijzen. Cross-store-view canonical-fouten zijn het meest voorkomende duplicate content probleem in Adobe Commerce.",
          },
          {
            number: "04",
            title: "Correcte hreflang-tags implementeren",
            body: "Meertalige Adobe Commerce stores hebben correcte hreflang-implementatie op schaal nodig. Gebruik de store view-configuratie om hreflang over duizenden pagina\u2019s te automatiseren.",
          },
          {
            number: "05",
            title: "Standaard sitemaps opschonen",
            body: "Adobe Commerce sitemaps bevatten standaard CMS-pagina\u2019s, filter-URL\u2019s en uitverkochte producten. Pas de sitemap-generatie aan om alleen indexeerbare, waardevolle pagina\u2019s op te nemen.",
          },
          {
            number: "06",
            title: "Categoriepagina-content optimaliseren",
            body: "Voeg unieke, zoekwoordrijke beschrijvingen toe aan categoriepagina\u2019s. Adobe Commerce ondersteunt categoriebeschrijvingen \u2014 gebruik ze om je te onderscheiden van concurrenten en rankings te verbeteren.",
          },
          {
            number: "07",
            title: "SEO-impact van extensies monitoren",
            body: "Extensies van derden injecteren regelmatig dubbele meta-tags, kapot schema of tegenstrijdige redirects. Audit elke extensie op SEO-bijwerkingen v\u00f3\u00f3r deployment.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Platformvergelijking",
        heading: "Adobe Commerce vs Shopify Plus voor SEO",
        richTextBlocks: [
          {
            heading: "Volledige controle vs. eenvoud",
            body: "Adobe Commerce (voorheen Magento) geeft je volledige controle over elk SEO-element \u2014 van URL-structuur en canonical tags tot server-level caching met Varnish. In tegenstelling tot Shopify Plus ben je eigenaar van je hostingomgeving, wat betekent dat je Core Web Vitals op infrastructuurniveau kunt optimaliseren.\n\nDe afweging is complexiteit. Adobe Commerce vereist dedicated ontwikkelresources voor onderhoud, en SEO-misconfiguraties in multi-store setups kunnen snel escaleren. Daar wordt gespecialiseerde Adobe Commerce SEO-expertise cruciaal \u2014 de kracht van het platform is alleen waardevol als het correct geconfigureerd is.\n\nVoor enterprise merken met complexe catalogi, meerdere store views en B2B-vereisten blijft Adobe Commerce het meest flexibele e-commerce platform voor SEO. Maar die flexibiliteit heeft expertmanagement nodig om resultaten te leveren.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Waarom gespecialiseerde hulp",
        heading:
          "Waarom je Adobe Commerce webshop een gespecialiseerd SEO-bureau nodig heeft",
        richTextBlocks: [
          {
            heading: "Verder dan generieke SEO",
            body: "Adobe Commerce is geen plug-and-play platform. Elke SEO-verbetering vereist co\u00f6rdinatie tussen je marketingteam, ontwikkelaars en hostingomgeving. Generieke SEO-bureaus missen de technische diepgang om met Varnish-caching, gefacetteerde navigatie-indexering en multi-store canonical-strategie\u00ebn te werken.\n\nBij EcomSEO spreken we beide talen \u2014 we begrijpen de omzetimpact van SEO-beslissingen en kunnen technische vereisten direct communiceren met je ontwikkelteam. We hebben shops gemigreerd van Magento 1, multi-store setups over continenten geoptimaliseerd en enterprise-schaal indexatieproblemen opgelost die andere bureaus niet konden diagnosticeren.\n\nOns team bevat specialisten die binnen Adobe Commerce ontwikkelteams hebben gewerkt. We auditen niet alleen \u2014 we leveren implementatieklare specificaties die je ontwikkelaars direct kunnen uitvoeren.",
          },
        ],
      },
      {
        type: "team",
        badge: "Het team",
        heading: "De Adobe Commerce SEO-specialisten achter jouw groei",
        teamLead: {
          name: "Fabian van Til",
          role: "Strategie & Innovatie",
          bio: "Leidt de strategische richting voor alle klantprojecten. 8+ jaar e-commerce SEO-ervaring in mode, gezondheid, beauty en wonen. Combineert groeistrategie met technische SEO-innovatie.",
          image: "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "Technisch SEO-leider",
            bio: "Ontwerpt de technische SEO-fundamenten. Gespecialiseerd in Adobe Commerce multi-store optimalisatie, gestructureerde data en site-architectuur. Bouwt de gratis SEO-tools op deze site.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://www.linkedin.com/in/dimitar-georgiev-seo/",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Linkbuilding",
            bio: "Beheerst linkacquisitie en digitale PR op grote schaal. Bouwt backlinkprofielen die het verschil maken voor competitieve e-commerce zoekwoorden in Europese en Amerikaanse markten.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "On-Page & Contentstrategie",
            bio: "Ontwikkelt contentstrategieën en on-page optimalisaties die ranken en converteren. Gespecialiseerd in product- en collectiepagina-optimalisatie, zoekwoordenonderzoek en redactionele planning.",
            image: "/images/framer/gjorgi-jovev.png",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Deliverables",
        heading: "Wat je elke maand ontvangt",
        deliverables: [
          {
            title: "Enterprise-audit",
            description: "Multi-store crawl + prioriteiten",
          },
          {
            title: "Snelheidsoptimalisatie",
            description: "Varnish + Core Web Vitals fixes",
          },
          {
            title: "Architectuurplan",
            description: "URL-structuur + navigatie-fixes",
          },
          {
            title: "Maandelijkse rapportage",
            description: "Rankings, verkeer, omzetimpact",
          },
          {
            title: "Schema-implementatie",
            description: "Product + Organisatie gestructureerde data",
          },
          {
            title: "Contentstrategie",
            description: "Categorie- + landingspagina contentplan",
          },
          {
            title: "Linkbuilding",
            description: "Autoriteitslinks van e-commerce publicaties",
          },
          {
            title: "Kwartaalstrategie",
            description: "Roadmap-review + prioriteitsaanpassingen",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Werken jullie met zowel Magento als Adobe Commerce?",
          answer:
            "Ja. Adobe Commerce is de enterprise-versie van Magento. We werken met zowel Magento Open Source als Adobe Commerce en pakken de unieke SEO-uitdagingen van elke platformversie aan. Lees meer in onze [Magento e-commerce SEO-gids](/blog/magento-ecommerce-seo).",
        },
        {
          question:
            "Hoe pakken jullie multi-store SEO aan voor Adobe Commerce?",
          answer:
            "We implementeren correcte hreflang-tags, canonical-strategie\u00ebn en store view-configuraties om ervoor te zorgen dat elke store view de juiste doelgroep bereikt zonder duplicate content te cre\u00ebren.",
        },
        {
          question:
            "Kunnen jullie helpen bij de migratie van Magento 1 naar Adobe Commerce 2?",
          answer:
            "Absoluut. We maken uitgebreide redirect-maps, behouden URL-equity en monitoren verkeer tijdens de migratie om verlies van organisch verkeer te minimaliseren. Onze [Magento SEO-gids](/academy/magento-seo-guide) behandelt best practices voor migraties.",
        },
        {
          question: "Hoe lang duurt een Adobe Commerce SEO-audit?",
          answer:
            "Enterprise-audits duren doorgaans 2-3 weken, afhankelijk van de complexiteit van je multi-store setup, het aantal store views en de catalogusgrootte.",
        },
        {
          question: "Werken jullie direct samen met ons ontwikkelteam?",
          answer:
            "Ja. We leveren gedetailleerde technische specificaties en werken nauw samen met je ontwikkelteam. We begrijpen de Adobe Commerce architectuur en communiceren effectief met ontwikkelaars.",
        },
        {
          question:
            "Hoe onderscheidt EcomSEO zich van andere Adobe Commerce SEO-bureaus?",
          answer:
            "We combineren diepe platformexpertise met een e-commerce-first mindset. We begrijpen de omzetimpact van elke technische beslissing en focussen op fixes die echte bedrijfsresultaten opleveren.",
        },
      ],
      miniCta: {
        heading:
          "Klaar om het potentieel van je Adobe Commerce te ontsluiten?",
        subtitle:
          "Boek een gratis auditgesprek en we laten je precies zien wat je webshop tegenhoudt.",
      },
    },
  },
};
