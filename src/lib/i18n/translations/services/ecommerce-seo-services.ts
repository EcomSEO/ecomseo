import type { Locale } from "../../config";
import type { ServicePageProps } from "@/components/service/ServicePageTemplate";

export const ecommerceSeoServicesData: Record<Locale, ServicePageProps> = {
  en: {
    hero: {
      badge: "All Ecommerce SEO Services",
      heading: "Every Ecommerce SEO Service You Need, In One Place",
      subtitle:
        "From technical foundations to authority building - browse every service we offer and find the right fit for your growth goals.",
      ctaText: "Book a Free Strategy Call",
    },
    trustBar:
      "Technical SEO · Content Strategy · Link Building · Platform Specialists",
    sections: [
      {
        type: "process",
        badge: "The Full Stack",
        heading: "One Agency. Every Layer of Ecommerce SEO.",
        subtitle:
          "Most SEO agencies cover one slice of the stack. We cover all of it - from server-level technical fixes to AI-optimised content to editorial link acquisition.",
        process: [
          {
            number: "01",
            title: "Technical Foundation",
            description:
              "Crawl budget optimisation, site speed, Core Web Vitals, structured data, canonical logic, and JavaScript rendering - the invisible infrastructure that makes everything else work.",
          },
          {
            number: "02",
            title: "On-Page & Category SEO",
            description:
              "Revenue-first category pages, product optimisation, internal linking architecture, and AI-search-ready content that captures buyers at every stage of intent.",
          },
          {
            number: "03",
            title: "Authority & Link Building",
            description:
              "Real editorial backlinks from relevant publications in your industry. No PBNs, no link farms - just the domain authority that moves rankings in competitive markets.",
          },
          {
            number: "04",
            title: "Research & Content Strategy",
            description:
              "Keyword research that maps actual buyer intent, competitor gap analysis, and content briefs that your team or ours can execute to compound organic growth.",
          },
        ],
      },
      {
        type: "links",
        badge: "Our Services",
        heading: "Explore Every Ecommerce SEO Service",
        subtitle:
          "Click any service to see exactly what we do, how we do it, and what results to expect.",
        links: [
          {
            title: "Ecommerce SEO",
            description:
              "The complete commercial SEO strategy for online stores - from technical audit to revenue attribution.",
            href: "/ecommerce-seo",
          },
          {
            title: "Shopify SEO",
            description:
              "Platform-native optimisation for Shopify stores: Liquid templates, app stack, collection canonicals, and more.",
            href: "/shopify-seo",
          },
          {
            title: "WooCommerce SEO",
            description:
              "Technical and content SEO for WordPress/WooCommerce - plugin audits, URL structure, and database optimisation.",
            href: "/woocommerce-seo",
          },
          {
            title: "BigCommerce SEO",
            description:
              "Leverage BigCommerce's native SEO advantages further with faceted navigation control and catalog-level optimisation.",
            href: "/bigcommerce-seo",
          },
          {
            title: "Adobe Commerce SEO",
            description:
              "Enterprise-grade SEO for Magento/Adobe Commerce - crawl budget, multi-store configs, and JS rendering.",
            href: "/adobe-commerce-seo",
          },
          {
            title: "Amazon SEO",
            description:
              "Get your products found on the world's biggest marketplace with listing optimisation, A+ content, and search ranking strategies.",
            href: "/amazon-seo",
          },
          {
            title: "Link Building",
            description:
              "Build real off-page authority with editorial backlinks from publications that matter in your niche.",
            href: "/link-building",
          },
          {
            title: "Keyword Research",
            description:
              "Map the full buyer-intent keyword landscape of your market and identify the highest-value organic opportunities.",
            href: "/keyword-research",
          },
          {
            title: "Content Writing",
            description:
              "SEO-optimised content that ranks and converts - buying guides, category copy, product descriptions, and blog posts.",
            href: "/content-writing",
          },
        ],
      },
      {
        type: "links",
        badge: "Browse by Focus Area",
        heading: "Prefer to Browse by Platform or Industry?",
        subtitle:
          "We've built dedicated hubs for every platform we support and every vertical we specialise in.",
        links: [
          {
            title: "SEO by Platform",
            description:
              "Shopify, WooCommerce, BigCommerce, and Adobe Commerce - platform-native strategies for your exact tech stack.",
            href: "/ecommerce-seo-platforms",
          },
          {
            title: "SEO by Industry",
            description:
              "Fashion, Beauty, Consumables, and Toys - industry-aware strategies that capture your vertical's unique buyer intent.",
            href: "/ecommerce-seo-industries",
          },
        ],
      },
      {
        type: "benefits",
        badge: "Why EcomSEO",
        heading: "What You Get With Every Service We Offer",
        benefits: [
          {
            title: "Ecommerce-Only Expertise",
            description:
              "We don't do SaaS SEO, local SEO, or affiliate sites. Every playbook, template, and process is built specifically for product catalogues and revenue.",
          },
          {
            title: "Revenue Attribution",
            description:
              "We measure success in revenue, not vanity metrics. Every engagement is tied to organic traffic growth, conversion rate improvements, and actual sales.",
          },
          {
            title: "Platform-Native Execution",
            description:
              "Our implementation is tailored to your exact platform - Shopify, WooCommerce, BigCommerce, or Magento. No generic checklists applied to the wrong stack.",
          },
          {
            title: "AI Search Ready",
            description:
              "Beyond Google - we optimise your brand and products for AI Overviews, ChatGPT, and Perplexity so you're visible in the next generation of search.",
          },
          {
            title: "Scalable Processes",
            description:
              "Automated workflows for title tags, meta descriptions, and structured data at SKU scale. Built for stores with hundreds or thousands of products.",
          },
          {
            title: "Transparent Reporting",
            description:
              "Monthly reports showing exactly what was done, what moved, and what the revenue impact is. No smoke and mirrors.",
          },
        ],
      },
      {
        type: "stats",
        badge: "Client Results",
        heading: "The Numbers Behind Our Ecommerce SEO Services",
        subtitle:
          "Aggregate metrics across every service we deliver. Revenue-focused, not vanity-metric driven.",
        stats: [
          { value: "$12M+", label: "Revenue Generated for Clients" },
          { value: "50+", label: "Ecommerce Stores Optimized" },
          { value: "140%", label: "Avg. Organic Traffic Increase" },
          { value: "8+", label: "Years Ecommerce-Only Focus" },
        ],
      },
      {
        type: "caseStudies",
        badge: "Case Studies",
        heading: "Real Stores. Real Revenue. Real SEO Results.",
        subtitle:
          "Every service we offer is built to drive measurable revenue. Here are stores that prove it.",
        caseStudies: [
          {
            badge: "Fashion · Shopify",
            title: "Fashion Brand, 3x Organic Revenue in 12 Months",
            image: "/images/framer/QtPNuhsKVZNt3klckPPtQzUuW0.png",
            metrics: [
              { value: "3x", label: "Organic Revenue" },
              { value: "+210%", label: "Organic Traffic" },
              { value: "12 mo", label: "Timeframe" },
            ],
            quote:
              "EcomSEO understood that rankings mean nothing without conversions. They optimized our category pages, fixed our technical debt, and tripled our organic revenue in a year.",
            quoteAuthor: "Head of Digital, Fashion Ecommerce Brand",
            href: "/cases",
          },
          {
            badge: "Health & Wellness · WooCommerce",
            title: "Health Brand, From Page 3 to Page 1 for Core Keywords",
            image: "/images/framer/dsId62uNnnWBWAr5Vi1Z5UqiQ.png",
            metrics: [
              { value: "Page 1", label: "Core Commercial Keywords" },
              { value: "+340%", label: "Organic Revenue" },
              { value: "9 mo", label: "Timeframe" },
            ],
            quote:
              "We went from invisible to dominating our category. The revenue impact was immediate once rankings moved, because they targeted buyer intent, not vanity keywords.",
            quoteAuthor: "Founder, DTC Health Brand",
            href: "/cases",
          },
        ],
        ctaText: "View All Case Studies",
        ctaHref: "/cases",
      },
      {
        type: "team",
        badge: "The Team",
        heading: "Who Does the Work",
        teamLead: {
          name: "Fabian van Til",
          role: "Strategy & Innovation",
          bio: "Fabian owns the SEO strategy for every client. 8 years of ecommerce-only experience across fashion, health, beauty, toys, and electronics. He built the Commerce Growth Framework\u2122 that has driven $12M+ in organic revenue.",
          image: "/images/framer/fabian-van-til-new.jpeg",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "Technical & On-Page SEO",
            bio: "Dimitar handles the technical and on-page SEO. He works on crawl optimization for large catalogs, structured data at scale, Core Web Vitals, and site architecture for stores with 500-100,000+ SKUs.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://bg.linkedin.com/in/dimitar-georgiev-seo-expert",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Link Building",
            bio: "Martinijan runs link acquisition and digital PR. He earns authority through product review placements, industry publication outreach, and partnerships. 9,000+ links secured across all clients.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "Content, Link Building & PR",
            bio: "Gjorgi writes the content and runs link building and PR campaigns. He handles category page copy, buying guides, editorial calendars timed to seasonal demand, and outreach to earn backlinks from relevant publications.",
            image: "/images/framer/gjorgi-jovev.png",
            linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Do you offer all these services as a bundle?",
          answer:
            "Yes. Most clients start with a comprehensive ecommerce SEO engagement that covers technical, content, and link building simultaneously. We also offer individual services for stores that need to address one specific area.",
        },
        {
          question: "Which service should I start with?",
          answer:
            "It depends on your current situation. Stores with indexation or speed issues start with technical SEO. Stores with rankings but no conversions need on-page and content work. Stores competing in tough markets need authority building. Read our [ecommerce SEO strategy](/blog/ecommerce-seo-strategy) guide or book a [free SEO audit](/tools/ecommerce-seo-audit) and we'll tell you exactly where to focus first.",
        },
        {
          question: "Can you work alongside my existing team?",
          answer:
            "Absolutely. We frequently work as a specialist layer on top of in-house marketing teams - handling the technical or link-building work that requires deeper ecommerce SEO expertise.",
        },
        {
          question: "What platforms do you support?",
          answer:
            "Shopify, WooCommerce, BigCommerce, Adobe Commerce (Magento), and Lightspeed. We also work with headless commerce setups on any framework.",
        },
        {
          question: "How quickly will I see results?",
          answer:
            "Technical fixes can show measurable impact within weeks. Content and category optimisation typically compounds over 3-6 months. Authority and link building compounds over 6-12 months. We'll set realistic timelines based on your specific situation.",
        },
        {
          question: "Do you offer a free audit?",
          answer:
            "Yes - a complimentary ecommerce SEO audit that identifies your biggest opportunities across technical, content, and authority. Start with our [complete ecommerce SEO](/blog/ecommerce-seo) overview, then book a call and we'll show you exactly where you're leaving revenue on the table.",
        },
      ],
      miniCta: {
        heading: "Not Sure Where to Start?",
        subtitle:
          "Book a free strategy call and we'll map the exact services your store needs to grow - no generic pitches, no upselling.",
      },
    },
  },

  de: {
    hero: {
      badge: "Alle E-Commerce SEO Services",
      heading:
        "Jeder E-Commerce SEO Service, den Sie brauchen, an einem Ort",
      subtitle:
        "Von technischen Grundlagen bis zum Linkaufbau - entdecken Sie alle unsere Services und finden Sie das Richtige für Ihre Wachstumsziele.",
      ctaText: "Kostenloses Strategiegespräch buchen",
    },
    trustBar:
      "Technisches SEO · Content-Strategie · Linkaufbau · Plattform-Spezialisten",
    sections: [
      {
        type: "process",
        badge: "Der Full-Stack",
        heading: "Eine Agentur. Jede Ebene des E-Commerce SEO.",
        subtitle:
          "Die meisten SEO-Agenturen decken nur einen Teil des Stacks ab. Wir decken alles ab - von technischen Server-Fixes bis zu KI-optimierten Inhalten und redaktionellem Linkaufbau.",
        process: [
          {
            number: "01",
            title: "Technisches Fundament",
            description:
              "Crawl-Budget-Optimierung, Seitengeschwindigkeit, Core Web Vitals, strukturierte Daten, Canonical-Logik und JavaScript-Rendering - die unsichtbare Infrastruktur, die alles andere zum Funktionieren bringt.",
          },
          {
            number: "02",
            title: "OnPage & Kategorie-SEO",
            description:
              "Umsatzorientierte Kategorieseiten, Produktoptimierung, interne Verlinkungsarchitektur und KI-suchfähige Inhalte, die Käufer in jeder Absichtsphase erreichen.",
          },
          {
            number: "03",
            title: "Autorität & Linkaufbau",
            description:
              "Echte redaktionelle Backlinks von relevanten Publikationen in Ihrer Branche. Keine PBNs, keine Link-Farmen - nur die Domain-Autorität, die Rankings in wettbewerbsintensiven Märkten bewegt.",
          },
          {
            number: "04",
            title: "Recherche & Content-Strategie",
            description:
              "Keyword-Recherche, die die tatsächliche Käuferabsicht abbildet, Wettbewerbs-Gap-Analyse und Content-Briefings, die Ihr Team oder wir umsetzen können.",
          },
        ],
      },
      {
        type: "links",
        badge: "Unsere Services",
        heading: "Entdecken Sie jeden E-Commerce SEO Service",
        subtitle:
          "Klicken Sie auf einen Service, um genau zu sehen, was wir tun, wie wir es tun und welche Ergebnisse zu erwarten sind.",
        links: [
          {
            title: "E-Commerce SEO",
            description:
              "Die vollständige kommerzielle SEO-Strategie für Online-Shops - vom technischen Audit bis zur Umsatzzuordnung.",
            href: "/ecommerce-seo",
          },
          {
            title: "Shopify SEO",
            description:
              "Plattformnative Optimierung für Shopify-Stores: Liquid-Templates, App-Stack, Collection-Kanonicals und mehr.",
            href: "/shopify-seo",
          },
          {
            title: "WooCommerce SEO",
            description:
              "Technisches und Content-SEO für WordPress/WooCommerce - Plugin-Audits, URL-Struktur und Datenbankoptimierung.",
            href: "/woocommerce-seo",
          },
          {
            title: "BigCommerce SEO",
            description:
              "Nutzen Sie die nativen SEO-Vorteile von BigCommerce weiter mit Facetten-Navigation-Kontrolle und Katalogebene-Optimierung.",
            href: "/bigcommerce-seo",
          },
          {
            title: "Adobe Commerce SEO",
            description:
              "Enterprise-Grade SEO für Magento/Adobe Commerce - Crawl-Budget, Multi-Store-Konfigurationen und JS-Rendering.",
            href: "/adobe-commerce-seo",
          },
          {
            title: "Amazon SEO",
            description:
              "Werden Sie auf dem weltgrößten Marktplatz gefunden - mit Listing-Optimierung, A+ Content und Such-Ranking-Strategien.",
            href: "/amazon-seo",
          },
          {
            title: "Linkaufbau",
            description:
              "Bauen Sie echte Off-Page-Autorität mit redaktionellen Backlinks von Publikationen auf, die in Ihrer Nische wichtig sind.",
            href: "/link-building",
          },
          {
            title: "Keyword-Recherche",
            description:
              "Kartieren Sie die vollständige Käufer-Intent-Keyword-Landschaft Ihres Marktes und identifizieren Sie die wertvollsten organischen Chancen.",
            href: "/keyword-research",
          },
          {
            title: "Content-Erstellung",
            description:
              "SEO-optimierte Inhalte, die ranken und konvertieren - Kaufratgeber, Kategorie-Texte, Produktbeschreibungen und Blog-Posts.",
            href: "/content-writing",
          },
        ],
      },
      {
        type: "links",
        badge: "Nach Schwerpunkt durchsuchen",
        heading: "Lieber nach Plattform oder Branche suchen?",
        subtitle:
          "Wir haben dedizierte Hubs für jede unterstützte Plattform und jede Branche, auf die wir spezialisiert sind.",
        links: [
          {
            title: "SEO nach Plattform",
            description:
              "Shopify, WooCommerce, BigCommerce und Adobe Commerce - plattformnative Strategien für Ihren genauen Tech-Stack.",
            href: "/ecommerce-seo-platforms",
          },
          {
            title: "SEO nach Branche",
            description:
              "Mode, Beauty, Konsumgüter und Spielzeug - branchenorientierte Strategien für die einzigartige Käuferabsicht Ihres Marktes.",
            href: "/ecommerce-seo-industries",
          },
        ],
      },
      {
        type: "benefits",
        badge: "Warum EcomSEO",
        heading: "Was Sie bei jedem unserer Services erhalten",
        benefits: [
          {
            title: "Nur E-Commerce-Expertise",
            description:
              "Wir machen kein SaaS-SEO, lokales SEO oder Affiliate-Sites. Jedes Playbook, jede Vorlage und jeder Prozess ist speziell für Produktkataloge und Umsatz entwickelt.",
          },
          {
            title: "Umsatzzuordnung",
            description:
              "Wir messen Erfolg in Umsatz, nicht in Eitelkeitskennzahlen. Jedes Engagement ist mit organischem Traffic-Wachstum, Conversion-Rate-Verbesserungen und tatsächlichen Verkäufen verknüpft.",
          },
          {
            title: "Plattformnative Umsetzung",
            description:
              "Unsere Implementierung ist auf Ihre genaue Plattform zugeschnitten - Shopify, WooCommerce, BigCommerce oder Magento. Keine generischen Checklisten für den falschen Stack.",
          },
          {
            title: "KI-Suche bereit",
            description:
              "Über Google hinaus - wir optimieren Ihre Marke und Produkte für KI-Overviews, ChatGPT und Perplexity, damit Sie in der nächsten Suchgeneration sichtbar sind.",
          },
          {
            title: "Skalierbare Prozesse",
            description:
              "Automatisierte Workflows für Title-Tags, Meta-Beschreibungen und strukturierte Daten auf SKU-Ebene. Gebaut für Shops mit Hunderten oder Tausenden von Produkten.",
          },
          {
            title: "Transparentes Reporting",
            description:
              "Monatliche Berichte, die genau zeigen, was getan wurde, was sich bewegt hat und wie der Umsatzeffekt ist. Kein Rauch und keine Spiegel.",
          },
        ],
      },
      {
        type: "stats",
        badge: "Kennzahlen",
        heading: "Die Zahlen hinter unseren E-Commerce SEO Services",
        subtitle:
          "Aggregierte Kennzahlen über alle Services, die wir liefern. Umsatzorientiert, nicht auf Vanity-Metriken ausgerichtet.",
        stats: [
          { value: "$12M+", label: "Generierter Umsatz für Kunden" },
          { value: "50+", label: "Optimierte E-Commerce Shops" },
          { value: "140%", label: "Durchschn. organisches Trafficwachstum" },
          { value: "8+", label: "Jahre reiner E-Commerce-Fokus" },
        ],
      },
      {
        type: "caseStudies",
        badge: "Fallstudien",
        heading: "Echte Shops. Echter Umsatz. Echte SEO-Ergebnisse.",
        subtitle:
          "Jeder Service, den wir anbieten, ist darauf ausgelegt, messbaren Umsatz zu erzielen. Hier sind Shops, die es beweisen.",
        caseStudies: [
          {
            badge: "Fashion · Shopify",
            title: "Modemarke, 3x organischer Umsatz in 12 Monaten",
            image: "/images/framer/QtPNuhsKVZNt3klckPPtQzUuW0.png",
            metrics: [
              { value: "3x", label: "Organischer Umsatz" },
              { value: "+210%", label: "Organischer Traffic" },
              { value: "12 Mo", label: "Zeitraum" },
            ],
            quote:
              "EcomSEO hat verstanden, dass Rankings ohne Conversions nichts bedeuten. Sie haben unsere Kategorieseiten optimiert, unsere technischen Schulden behoben und unseren organischen Umsatz in einem Jahr verdreifacht.",
            quoteAuthor: "Head of Digital, Fashion E-Commerce Marke",
            href: "/cases",
          },
          {
            badge: "Gesundheit & Wellness · WooCommerce",
            title: "Gesundheitsmarke, Von Seite 3 auf Seite 1 für Kern-Keywords",
            image: "/images/framer/dsId62uNnnWBWAr5Vi1Z5UqiQ.png",
            metrics: [
              { value: "Seite 1", label: "Kommerzielle Kern-Keywords" },
              { value: "+340%", label: "Organischer Umsatz" },
              { value: "9 Mo", label: "Zeitraum" },
            ],
            quote:
              "Wir sind von unsichtbar zur Spitze unserer Kategorie aufgestiegen. Der Umsatzeffekt war sofort spürbar, als die Rankings stiegen, weil sie Kaufabsichten anvisiert haben, keine Vanity-Keywords.",
            quoteAuthor: "Gründer, DTC Gesundheitsmarke",
            href: "/cases",
          },
        ],
        ctaText: "Alle Fallstudien ansehen",
        ctaHref: "/cases",
      },
      {
        type: "team",
        badge: "Das Team",
        heading: "Das Team hinter unseren E-Commerce-SEO-Services",
        teamLead: {
          name: "Fabian van Til",
          role: "Strategie & Innovation",
          bio: "Fabian leitet die strategische Ausrichtung aller Kundenprojekte. Mit 8+ Jahren reiner E-Commerce-SEO-Erfahrung in Mode, Gesundheit, Beauty, Spielzeug und Elektronik hat er das Commerce Growth Framework™ entwickelt, das über $12M an organischem Umsatz generiert hat.",
          image: "/images/framer/fabian-van-til-new.jpeg",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "Technisches & On-Page SEO",
            bio: "Entwickelt die technischen SEO-Grundlagen und On-Page-Optimierungen für E-Commerce-Shops jeder Größe. Spezialisiert auf Crawl-Optimierung großer Kataloge, strukturierte Daten im großen Maßstab und Core Web Vitals.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://bg.linkedin.com/in/dimitar-georgiev-seo-expert",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Linkaufbau",
            bio: "Martinijan verantwortet Linkakquise und digitale PR für E-Commerce-Marken. Er baut Autorität durch Produktbewertungen, Branchenpublikationen und strategische Partnerschaften auf. Über 9.000 gesicherte Links.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "Content, Linkaufbau & PR",
            bio: "Entwickelt Content-Strategien, Linkaufbau und PR für E-Commerce-Marken. Spezialisiert auf Kategorieseiten-Optimierung, Kaufratgeber, redaktionelle Kalender und Outreach-Kampagnen.",
            image: "/images/framer/gjorgi-jovev.png",
            linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Bieten Sie alle diese Services als Paket an?",
          answer:
            "Ja. Die meisten Kunden beginnen mit einem umfassenden E-Commerce-SEO-Engagement, das gleichzeitig Technik, Content und Linkaufbau abdeckt. Wir bieten auch Einzelservices für Shops an, die einen bestimmten Bereich gezielt angehen müssen.",
        },
        {
          question: "Mit welchem Service soll ich anfangen?",
          answer:
            "Das hängt von Ihrer aktuellen Situation ab. Shops mit Indexierungs- oder Geschwindigkeitsproblemen beginnen mit technischem SEO. Shops mit Rankings, aber ohne Conversions benötigen OnPage- und Content-Arbeit. Shops in schwierigen Märkten benötigen Autoritätsaufbau. Lesen Sie unseren Leitfaden zur [E-Commerce-SEO-Strategie](/blog/ecommerce-seo-strategy) oder buchen Sie ein [kostenloses SEO-Audit](/tools/ecommerce-seo-audit), und wir sagen Ihnen genau, worauf Sie sich zuerst konzentrieren sollen.",
        },
        {
          question: "Können Sie neben meinem bestehenden Team arbeiten?",
          answer:
            "Absolut. Wir arbeiten häufig als Spezialistenschicht über internen Marketingteams - und übernehmen die technische oder Linkaufbau-Arbeit, die tiefere E-Commerce-SEO-Expertise erfordert.",
        },
        {
          question: "Welche Plattformen unterstützen Sie?",
          answer:
            "Shopify, WooCommerce, BigCommerce, Adobe Commerce (Magento) und Lightspeed. Wir arbeiten auch mit Headless-Commerce-Setups auf jedem Framework.",
        },
        {
          question: "Wie schnell werde ich Ergebnisse sehen?",
          answer:
            "Technische Fixes können messbare Auswirkungen innerhalb von Wochen zeigen. Content- und Kategorieoptimierung verstärkt sich typischerweise über 3-6 Monate. Autorität und Linkaufbau summieren sich über 6-12 Monate.",
        },
        {
          question: "Bieten Sie ein kostenloses Audit an?",
          answer:
            "Ja - ein kostenloses E-Commerce-SEO-Audit, das Ihre größten Chancen in den Bereichen Technik, Content und Autorität identifiziert. Beginnen Sie mit unserem Überblick zum [kompletten E-Commerce-SEO](/blog/ecommerce-seo) und buchen Sie dann ein Gespräch, wir zeigen Ihnen genau, wo Sie Umsatz liegen lassen.",
        },
      ],
      miniCta: {
        heading: "Nicht sicher, wo Sie anfangen sollen?",
        subtitle:
          "Buchen Sie ein kostenloses Strategiegespräch, und wir zeigen Ihnen genau, welche Services Ihr Shop braucht - keine generischen Pitches, kein Upselling.",
      },
    },
  },

  fr: {
    hero: {
      badge: "Tous les Services SEO E-Commerce",
      heading:
        "Tous les Services SEO E-Commerce dont Vous Avez Besoin, En Un Seul Endroit",
      subtitle:
        "Des fondations techniques à la création d'autorité - parcourez tous nos services et trouvez ce qui correspond à vos objectifs de croissance.",
      ctaText: "Réserver un Appel Stratégique Gratuit",
    },
    trustBar:
      "SEO Technique · Stratégie de Contenu · Netlinking · Spécialistes de Plateformes",
    sections: [
      {
        type: "process",
        badge: "La Stack Complète",
        heading: "Une Agence. Chaque Couche du SEO E-Commerce.",
        subtitle:
          "La plupart des agences SEO ne couvrent qu'une tranche de la stack. Nous couvrons tout - des corrections techniques serveur au contenu optimisé IA en passant par l'acquisition de liens éditoriaux.",
        process: [
          {
            number: "01",
            title: "Fondation Technique",
            description:
              "Optimisation du budget crawl, vitesse du site, Core Web Vitals, données structurées, logique canonique et rendu JavaScript - l'infrastructure invisible qui fait fonctionner tout le reste.",
          },
          {
            number: "02",
            title: "SEO On-Page & Catégories",
            description:
              "Pages de catégories axées sur le chiffre d'affaires, optimisation produit, architecture de maillage interne et contenu prêt pour la recherche IA qui capte les acheteurs à chaque étape d'intention.",
          },
          {
            number: "03",
            title: "Autorité & Netlinking",
            description:
              "De vrais backlinks éditoriaux de publications pertinentes dans votre secteur. Pas de PBN, pas de fermes de liens - juste l'autorité de domaine qui déplace les classements sur les marchés compétitifs.",
          },
          {
            number: "04",
            title: "Recherche & Stratégie de Contenu",
            description:
              "Recherche de mots-clés qui cartographie l'intention réelle des acheteurs, analyse des lacunes concurrentielles et briefs de contenu que votre équipe ou la nôtre peut exécuter.",
          },
        ],
      },
      {
        type: "links",
        badge: "Nos Services",
        heading: "Explorez Chaque Service SEO E-Commerce",
        subtitle:
          "Cliquez sur n'importe quel service pour voir exactement ce que nous faisons, comment nous le faisons et quels résultats attendre.",
        links: [
          {
            title: "SEO E-Commerce",
            description:
              "La stratégie SEO commerciale complète pour les boutiques en ligne - de l'audit technique à l'attribution des revenus.",
            href: "/ecommerce-seo",
          },
          {
            title: "SEO Shopify",
            description:
              "Optimisation native pour les boutiques Shopify : templates Liquid, stack d'apps, canoniques de collections et plus.",
            href: "/shopify-seo",
          },
          {
            title: "SEO WooCommerce",
            description:
              "SEO technique et de contenu pour WordPress/WooCommerce - audits de plugins, structure d'URL et optimisation de base de données.",
            href: "/woocommerce-seo",
          },
          {
            title: "SEO BigCommerce",
            description:
              "Exploitez davantage les avantages SEO natifs de BigCommerce avec le contrôle de navigation à facettes et l'optimisation au niveau du catalogue.",
            href: "/bigcommerce-seo",
          },
          {
            title: "SEO Adobe Commerce",
            description:
              "SEO de niveau entreprise pour Magento/Adobe Commerce - budget crawl, configurations multi-store et rendu JS.",
            href: "/adobe-commerce-seo",
          },
          {
            title: "SEO Amazon",
            description:
              "Faites trouver vos produits sur la plus grande marketplace mondiale avec l'optimisation des fiches, le contenu A+ et les stratégies de classement.",
            href: "/amazon-seo",
          },
          {
            title: "Netlinking",
            description:
              "Construisez une vraie autorité hors-page avec des backlinks éditoriaux de publications qui comptent dans votre niche.",
            href: "/link-building",
          },
          {
            title: "Recherche de Mots-Clés",
            description:
              "Cartographiez le paysage complet des mots-clés à intention d'achat de votre marché et identifiez les opportunités organiques les plus précieuses.",
            href: "/keyword-research",
          },
          {
            title: "Rédaction de Contenu",
            description:
              "Contenu optimisé SEO qui classe et convertit - guides d'achat, textes de catégories, descriptions de produits et articles de blog.",
            href: "/content-writing",
          },
        ],
      },
      {
        type: "links",
        badge: "Parcourir par Axe",
        heading: "Préférez-Vous Parcourir par Plateforme ou Secteur ?",
        subtitle:
          "Nous avons créé des hubs dédiés pour chaque plateforme supportée et chaque secteur dans lequel nous sommes spécialisés.",
        links: [
          {
            title: "SEO par Plateforme",
            description:
              "Shopify, WooCommerce, BigCommerce et Adobe Commerce - stratégies natives pour votre stack technologique exact.",
            href: "/ecommerce-seo-platforms",
          },
          {
            title: "SEO par Secteur",
            description:
              "Mode, Beauté, Consommables et Jouets - stratégies sectorielles qui captent l'intention d'achat unique de votre vertical.",
            href: "/ecommerce-seo-industries",
          },
        ],
      },
      {
        type: "benefits",
        badge: "Pourquoi EcomSEO",
        heading: "Ce Que Vous Obtenez avec Chaque Service",
        benefits: [
          {
            title: "Expertise E-Commerce Uniquement",
            description:
              "Nous ne faisons pas de SEO SaaS, de SEO local ou de sites affiliés. Chaque playbook, template et processus est spécifiquement conçu pour les catalogues produits et le chiffre d'affaires.",
          },
          {
            title: "Attribution des Revenus",
            description:
              "Nous mesurons le succès en revenus, pas en métriques de vanité. Chaque engagement est lié à la croissance du trafic organique, aux améliorations du taux de conversion et aux ventes réelles.",
          },
          {
            title: "Exécution Native à la Plateforme",
            description:
              "Notre implémentation est adaptée à votre plateforme exacte - Shopify, WooCommerce, BigCommerce ou Magento. Pas de checklists génériques appliquées au mauvais stack.",
          },
          {
            title: "Prêt pour la Recherche IA",
            description:
              "Au-delà de Google - nous optimisons votre marque et vos produits pour les AI Overviews, ChatGPT et Perplexity afin que vous soyez visible dans la prochaine génération de recherche.",
          },
          {
            title: "Processus Évolutifs",
            description:
              "Workflows automatisés pour les balises title, les méta-descriptions et les données structurées à l'échelle des SKU. Conçus pour les boutiques avec des centaines ou des milliers de produits.",
          },
          {
            title: "Reporting Transparent",
            description:
              "Rapports mensuels montrant exactement ce qui a été fait, ce qui a bougé et quel est l'impact sur le chiffre d'affaires. Pas de fumée ni de miroirs.",
          },
        ],
      },
      {
        type: "stats",
        badge: "Résultats Prouvés",
        heading: "Les chiffres derrière nos services SEO e-commerce",
        subtitle:
          "Métriques agrégées sur tous les services que nous fournissons. Orientés revenus, pas métriques de vanité.",
        stats: [
          { value: "$12M+", label: "Revenus générés pour nos clients" },
          { value: "50+", label: "Boutiques e-commerce optimisées" },
          { value: "140%", label: "Augmentation moy. du trafic organique" },
          { value: "8+", label: "Années de focus e-commerce exclusif" },
        ],
      },
      {
        type: "caseStudies",
        badge: "Études de cas",
        heading: "Résultats clients de nos services SEO e-commerce",
        subtitle:
          "Chaque service que nous offrons est conçu pour générer des revenus mesurables. Voici des boutiques qui le prouvent.",
        caseStudies: [
          {
            badge: "Mode · Shopify",
            title: "Marque de mode, 3x le revenu organique en 12 mois",
            image: "/images/framer/QtPNuhsKVZNt3klckPPtQzUuW0.png",
            metrics: [
              { value: "3x", label: "Revenu organique" },
              { value: "+210%", label: "Trafic organique" },
              { value: "12 mois", label: "Durée" },
            ],
            quote:
              "EcomSEO a compris que les classements ne signifient rien sans conversions. Ils ont optimisé nos pages catégories, corrigé notre dette technique et triplé notre revenu organique en un an.",
            quoteAuthor: "Directeur Digital, Marque de mode e-commerce",
            href: "/cases",
          },
          {
            badge: "Santé & Bien-être · WooCommerce",
            title: "Marque santé, De la page 3 à la page 1 pour les mots-clés principaux",
            image: "/images/framer/dsId62uNnnWBWAr5Vi1Z5UqiQ.png",
            metrics: [
              { value: "Page 1", label: "Mots-clés commerciaux principaux" },
              { value: "+340%", label: "Revenu organique" },
              { value: "9 mois", label: "Durée" },
            ],
            quote:
              "Nous sommes passés d'invisibles à dominants dans notre catégorie. L'impact sur le chiffre d'affaires a été immédiat une fois les classements améliorés.",
            quoteAuthor: "Fondateur, Marque DTC Santé",
            href: "/cases",
          },
        ],
        ctaText: "Voir toutes les études de cas",
        ctaHref: "/cases",
      },
      {
        type: "team",
        badge: "L'Équipe",
        heading: "L'équipe",
        teamLead: {
          name: "Fabian van Til",
          role: "Stratégie & Innovation",
          bio: "Fabian pilote tous les engagements clients. 8+ ans d'expérience SEO exclusivement e-commerce dans la mode, la santé, la beauté, les jouets et l'électronique. Architecte du Commerce Growth Framework™ ayant généré plus de $12M de revenus organiques.",
          image: "/images/framer/fabian-van-til-new.jpeg",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "SEO technique & On-Page",
            bio: "Conçoit les fondations SEO techniques et on-page pour les boutiques e-commerce de toutes tailles. Spécialisé dans l'optimisation du crawl pour les grands catalogues, les données structurées à grande échelle et les Core Web Vitals.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://bg.linkedin.com/in/dimitar-georgiev-seo-expert",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Netlinking",
            bio: "Maîtrise l'acquisition de liens et les RP digitales pour les marques e-commerce. Construit l'autorité par les placements de critiques produits et les partenariats stratégiques. Plus de 9 000 liens obtenus.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "Contenu, Link Building & PR",
            bio: "Crée des stratégies de contenu, du link building et des RP pour les marques e-commerce. Spécialisé dans l'optimisation des pages catégories, les guides d'achat, les calendriers éditoriaux et les campagnes d'outreach.",
            image: "/images/framer/gjorgi-jovev.png",
            linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Proposez-vous tous ces services en bundle ?",
          answer:
            "Oui. La plupart des clients commencent par un engagement SEO e-commerce complet couvrant simultanément la technique, le contenu et le netlinking. Nous proposons également des services individuels pour les boutiques qui ont besoin de traiter un domaine spécifique.",
        },
        {
          question: "Par quel service commencer ?",
          answer:
            "Cela dépend de votre situation actuelle. Les boutiques avec des problèmes d'indexation ou de vitesse commencent par le SEO technique. Celles avec des classements mais pas de conversions ont besoin de travail on-page et de contenu. Lisez notre guide de [stratégie SEO e-commerce](/blog/ecommerce-seo-strategy) ou réservez un [audit SEO gratuit](/tools/ecommerce-seo-audit) et nous vous dirons exactement où concentrer vos efforts en premier.",
        },
        {
          question: "Pouvez-vous travailler avec mon équipe existante ?",
          answer:
            "Absolument. Nous travaillons fréquemment comme couche spécialisée au-dessus des équipes marketing internes - prenant en charge le travail technique ou de netlinking qui nécessite une expertise SEO e-commerce plus approfondie.",
        },
        {
          question: "Quelles plateformes supportez-vous ?",
          answer:
            "Shopify, WooCommerce, BigCommerce, Adobe Commerce (Magento) et Lightspeed. Nous travaillons également avec des configurations headless commerce sur n'importe quel framework.",
        },
        {
          question: "Combien de temps avant de voir des résultats ?",
          answer:
            "Les corrections techniques peuvent montrer un impact mesurable en quelques semaines. L'optimisation du contenu et des catégories se cumule généralement sur 3 à 6 mois. L'autorité et le netlinking se cumulent sur 6 à 12 mois.",
        },
        {
          question: "Proposez-vous un audit gratuit ?",
          answer:
            "Oui - un audit SEO e-commerce gratuit identifiant vos plus grandes opportunités en matière de technique, contenu et autorité. Commencez par notre aperçu du [SEO e-commerce complet](/blog/ecommerce-seo), puis réservez un appel et nous vous montrerons exactement où vous laissez du chiffre d'affaires sur la table.",
        },
      ],
      miniCta: {
        heading: "Vous ne savez pas par où commencer ?",
        subtitle:
          "Réservez un appel stratégique gratuit et nous cartographierons les services exacts dont votre boutique a besoin - sans pitch générique, sans upselling.",
      },
    },
  },

  es: {
    hero: {
      badge: "Todos los Servicios SEO Ecommerce",
      heading:
        "Todos los Servicios SEO Ecommerce que Necesita, En Un Solo Lugar",
      subtitle:
        "Desde los fundamentos técnicos hasta la construcción de autoridad - explore todos nuestros servicios y encuentre el adecuado para sus objetivos de crecimiento.",
      ctaText: "Reservar una Llamada Estratégica Gratuita",
    },
    trustBar:
      "SEO Técnico · Estrategia de Contenido · Link Building · Especialistas en Plataformas",
    sections: [
      {
        type: "process",
        badge: "El Stack Completo",
        heading: "Una Agencia. Cada Capa del SEO Ecommerce.",
        subtitle:
          "La mayoría de las agencias SEO cubren solo una parte del stack. Nosotros cubrimos todo - desde correcciones técnicas a nivel de servidor hasta contenido optimizado para IA y adquisición de enlaces editoriales.",
        process: [
          {
            number: "01",
            title: "Fundación Técnica",
            description:
              "Optimización del presupuesto de rastreo, velocidad del sitio, Core Web Vitals, datos estructurados, lógica canónica y renderizado JavaScript - la infraestructura invisible que hace funcionar todo lo demás.",
          },
          {
            number: "02",
            title: "SEO On-Page y Categorías",
            description:
              "Páginas de categorías orientadas a ingresos, optimización de productos, arquitectura de enlazado interno y contenido listo para búsqueda IA que capta compradores en cada etapa de intención.",
          },
          {
            number: "03",
            title: "Autoridad y Link Building",
            description:
              "Backlinks editoriales reales de publicaciones relevantes en su sector. Sin PBNs, sin granjas de enlaces - solo la autoridad de dominio que mueve rankings en mercados competitivos.",
          },
          {
            number: "04",
            title: "Investigación y Estrategia de Contenido",
            description:
              "Investigación de palabras clave que mapea la intención real del comprador, análisis de brechas competitivas y briefs de contenido que su equipo o el nuestro puede ejecutar.",
          },
        ],
      },
      {
        type: "links",
        badge: "Nuestros Servicios",
        heading: "Explore Cada Servicio SEO Ecommerce",
        subtitle:
          "Haga clic en cualquier servicio para ver exactamente qué hacemos, cómo lo hacemos y qué resultados esperar.",
        links: [
          {
            title: "SEO Ecommerce",
            description:
              "La estrategia SEO comercial completa para tiendas online - desde la auditoría técnica hasta la atribución de ingresos.",
            href: "/ecommerce-seo",
          },
          {
            title: "SEO Shopify",
            description:
              "Optimización nativa para tiendas Shopify: plantillas Liquid, stack de apps, canónicos de colecciones y más.",
            href: "/shopify-seo",
          },
          {
            title: "SEO WooCommerce",
            description:
              "SEO técnico y de contenido para WordPress/WooCommerce - auditorías de plugins, estructura de URLs y optimización de base de datos.",
            href: "/woocommerce-seo",
          },
          {
            title: "SEO BigCommerce",
            description:
              "Aproveche aún más las ventajas SEO nativas de BigCommerce con control de navegación por facetas y optimización a nivel de catálogo.",
            href: "/bigcommerce-seo",
          },
          {
            title: "SEO Adobe Commerce",
            description:
              "SEO de nivel empresarial para Magento/Adobe Commerce - presupuesto de rastreo, configuraciones multi-tienda y renderizado JS.",
            href: "/adobe-commerce-seo",
          },
          {
            title: "SEO Amazon",
            description:
              "Consiga que sus productos aparezcan en el mayor marketplace del mundo con optimización de listings, contenido A+ y estrategias de ranking.",
            href: "/amazon-seo",
          },
          {
            title: "Link Building",
            description:
              "Construya autoridad off-page real con backlinks editoriales de publicaciones que importan en su nicho.",
            href: "/link-building",
          },
          {
            title: "Investigación de Keywords",
            description:
              "Mapee el panorama completo de palabras clave con intención de compra de su mercado e identifique las oportunidades orgánicas de mayor valor.",
            href: "/keyword-research",
          },
          {
            title: "Redacción de Contenido",
            description:
              "Contenido optimizado para SEO que posiciona y convierte - guías de compra, textos de categoría, descripciones de productos y artículos de blog.",
            href: "/content-writing",
          },
        ],
      },
      {
        type: "links",
        badge: "Explorar por Enfoque",
        heading: "¿Prefiere Explorar por Plataforma o Sector?",
        subtitle:
          "Hemos creado hubs dedicados para cada plataforma que soportamos y cada vertical en el que nos especializamos.",
        links: [
          {
            title: "SEO por Plataforma",
            description:
              "Shopify, WooCommerce, BigCommerce y Adobe Commerce - estrategias nativas para su stack tecnológico exacto.",
            href: "/ecommerce-seo-platforms",
          },
          {
            title: "SEO por Sector",
            description:
              "Moda, Belleza, Consumibles y Juguetes - estrategias sectoriales que captan la intención de compra única de su vertical.",
            href: "/ecommerce-seo-industries",
          },
        ],
      },
      {
        type: "benefits",
        badge: "Por Qué EcomSEO",
        heading: "Lo Que Obtiene con Cada Servicio que Ofrecemos",
        benefits: [
          {
            title: "Experiencia Exclusiva en Ecommerce",
            description:
              "No hacemos SEO para SaaS, SEO local ni sitios de afiliados. Cada playbook, plantilla y proceso está construido específicamente para catálogos de productos e ingresos.",
          },
          {
            title: "Atribución de Ingresos",
            description:
              "Medimos el éxito en ingresos, no en métricas de vanidad. Cada compromiso está vinculado al crecimiento del tráfico orgánico, mejoras en la tasa de conversión y ventas reales.",
          },
          {
            title: "Ejecución Nativa de Plataforma",
            description:
              "Nuestra implementación se adapta a su plataforma exacta - Shopify, WooCommerce, BigCommerce o Magento. Sin checklists genéricas aplicadas al stack equivocado.",
          },
          {
            title: "Listo para Búsqueda IA",
            description:
              "Más allá de Google - optimizamos su marca y productos para AI Overviews, ChatGPT y Perplexity para que sea visible en la próxima generación de búsqueda.",
          },
          {
            title: "Procesos Escalables",
            description:
              "Flujos de trabajo automatizados para title tags, meta descripciones y datos estructurados a escala de SKU. Construidos para tiendas con cientos o miles de productos.",
          },
          {
            title: "Reporting Transparente",
            description:
              "Informes mensuales que muestran exactamente qué se hizo, qué se movió y cuál es el impacto en ingresos. Sin humo ni espejos.",
          },
        ],
      },
      {
        type: "stats",
        badge: "Resultados Probados",
        heading: "Los números detrás de nuestros servicios SEO para ecommerce",
        subtitle:
          "Métricas agregadas de todos los servicios que ofrecemos. Enfocados en ingresos, no en métricas de vanidad.",
        stats: [
          { value: "$12M+", label: "Ingresos generados para clientes" },
          { value: "50+", label: "Tiendas ecommerce optimizadas" },
          { value: "140%", label: "Aumento prom. de tráfico orgánico" },
          { value: "8+", label: "Años de enfoque exclusivo en ecommerce" },
        ],
      },
      {
        type: "caseStudies",
        badge: "Casos de Éxito",
        heading: "Resultados de clientes de nuestros servicios SEO ecommerce",
        subtitle:
          "Cada servicio que ofrecemos está diseñado para generar ingresos medibles. Aquí están las tiendas que lo demuestran.",
        caseStudies: [
          {
            badge: "Moda · Shopify",
            title: "Marca de moda, 3x ingresos orgánicos en 12 meses",
            image: "/images/framer/QtPNuhsKVZNt3klckPPtQzUuW0.png",
            metrics: [
              { value: "3x", label: "Ingresos orgánicos" },
              { value: "+210%", label: "Tráfico orgánico" },
              { value: "12 meses", label: "Periodo" },
            ],
            quote:
              "EcomSEO entendió que los rankings no significan nada sin conversiones. Optimizaron nuestras páginas de categoría, arreglaron nuestra deuda técnica y triplicaron nuestros ingresos orgánicos en un año.",
            quoteAuthor: "Director Digital, Marca de moda ecommerce",
            href: "/cases",
          },
          {
            badge: "Salud y Bienestar · WooCommerce",
            title: "Marca de salud, De la página 3 a la página 1 para keywords principales",
            image: "/images/framer/dsId62uNnnWBWAr5Vi1Z5UqiQ.png",
            metrics: [
              { value: "Página 1", label: "Keywords comerciales principales" },
              { value: "+340%", label: "Ingresos orgánicos" },
              { value: "9 meses", label: "Periodo" },
            ],
            quote:
              "Pasamos de invisibles a liderar nuestra categor\u00eda. El impacto en ingresos fue inmediato una vez que los rankings subieron - porque apuntaron a intenci\u00f3n de compra, no a keywords de vanidad.",
            quoteAuthor: "Fundador, Marca DTC de Salud",
            href: "/cases",
          },
        ],
        ctaText: "Ver todos los casos de éxito",
        ctaHref: "/cases",
      },
      {
        type: "team",
        badge: "El Equipo",
        heading: "El equipo",
        teamLead: {
          name: "Fabian van Til",
          role: "Estrategia e Innovación",
          bio: "Fabian dirige la estrategia de todos los proyectos. 8+ a\u00f1os de experiencia SEO exclusivamente en ecommerce en moda, salud, belleza, juguetes y electr\u00f3nica. Arquitecto del Commerce Growth Framework\u2122 que ha generado m\u00e1s de $12M en ingresos org\u00e1nicos.",
          image: "/images/framer/fabian-van-til-new.jpeg",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "SEO Técnico & On-Page",
            bio: "Diseña las bases técnicas de SEO y on-page para tiendas ecommerce de todos los tamaños. Especializado en optimización de rastreo para catálogos grandes, datos estructurados a escala y Core Web Vitals.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://bg.linkedin.com/in/dimitar-georgiev-seo-expert",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page y Link Building",
            bio: "Martinijan lidera la adquisici\u00f3n de enlaces y las RP digitales para marcas ecommerce. Construye autoridad a trav\u00e9s de rese\u00f1as de productos y asociaciones estrat\u00e9gicas. M\u00e1s de 9.000 enlaces conseguidos.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "Contenido, Link Building y PR",
            bio: "Crea estrategias de contenido, link building y PR para marcas ecommerce. Especializado en optimización de páginas de categoría, guías de compra, calendarios editoriales y campañas de outreach.",
            image: "/images/framer/gjorgi-jovev.png",
            linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "¿Ofrecen todos estos servicios como un paquete?",
          answer:
            "Sí. La mayoría de los clientes comienzan con un compromiso SEO ecommerce integral que cubre técnica, contenido y link building simultáneamente. También ofrecemos servicios individuales para tiendas que necesitan abordar un área específica.",
        },
        {
          question: "¿Por qué servicio debería empezar?",
          answer:
            "Depende de su situación actual. Las tiendas con problemas de indexación o velocidad empiezan con SEO técnico. Las que tienen rankings pero sin conversiones necesitan trabajo on-page y de contenido. Lea nuestra guía de [estrategia SEO e-commerce](/blog/ecommerce-seo-strategy) o reserve una [auditoría SEO gratuita](/tools/ecommerce-seo-audit) y le diremos exactamente dónde enfocarse primero.",
        },
        {
          question: "¿Pueden trabajar junto a mi equipo existente?",
          answer:
            "Absolutamente. Trabajamos frecuentemente como capa especialista sobre equipos de marketing internos - manejando el trabajo técnico o de link building que requiere mayor experiencia en SEO ecommerce.",
        },
        {
          question: "¿Qué plataformas soportan?",
          answer:
            "Shopify, WooCommerce, BigCommerce, Adobe Commerce (Magento) y Lightspeed. También trabajamos con configuraciones de comercio headless en cualquier framework.",
        },
        {
          question: "¿Cuánto tiempo tardará en ver resultados?",
          answer:
            "Las correcciones técnicas pueden mostrar impacto medible en semanas. La optimización de contenido y categorías generalmente se acumula durante 3-6 meses. La autoridad y el link building se acumulan durante 6-12 meses.",
        },
        {
          question: "¿Ofrecen una auditoría gratuita?",
          answer:
            "Sí - una auditoría SEO ecommerce gratuita que identifica sus mayores oportunidades en técnica, contenido y autoridad. Comience con nuestra visión general del [SEO e-commerce completo](/blog/ecommerce-seo), luego reserve una llamada y le mostraremos exactamente dónde está dejando ingresos sobre la mesa.",
        },
      ],
      miniCta: {
        heading: "¿No sabe por dónde empezar?",
        subtitle:
          "Reserve una llamada estratégica gratuita y mapearemos los servicios exactos que su tienda necesita - sin pitches genéricos, sin upselling.",
      },
    },
  },

  it: {
    hero: {
      badge: "Tutti i Servizi SEO Ecommerce",
      heading:
        "Tutti i Servizi SEO Ecommerce di cui Hai Bisogno, In Un Solo Posto",
      subtitle:
        "Dalle fondamenta tecniche alla costruzione di autorità - esplora tutti i nostri servizi e trova quello giusto per i tuoi obiettivi di crescita.",
      ctaText: "Prenota una Chiamata Strategica Gratuita",
    },
    trustBar:
      "SEO Tecnico · Strategia di Contenuto · Link Building · Specialisti di Piattaforme",
    sections: [
      {
        type: "process",
        badge: "Lo Stack Completo",
        heading: "Un'Agenzia. Ogni Livello del SEO Ecommerce.",
        subtitle:
          "La maggior parte delle agenzie SEO copre solo una fetta dello stack. Noi copriamo tutto - dalle correzioni tecniche a livello server ai contenuti ottimizzati IA all'acquisizione di link editoriali.",
        process: [
          {
            number: "01",
            title: "Fondazione Tecnica",
            description:
              "Ottimizzazione del budget di scansione, velocità del sito, Core Web Vitals, dati strutturati, logica canonica e rendering JavaScript - l'infrastruttura invisibile che fa funzionare tutto il resto.",
          },
          {
            number: "02",
            title: "SEO On-Page e Categorie",
            description:
              "Pagine di categoria orientate ai ricavi, ottimizzazione dei prodotti, architettura di link interni e contenuti pronti per la ricerca IA che catturano gli acquirenti in ogni fase di intento.",
          },
          {
            number: "03",
            title: "Autorità e Link Building",
            description:
              "Veri backlink editoriali da pubblicazioni rilevanti nel tuo settore. Nessun PBN, nessuna link farm - solo l'autorità di dominio che muove i ranking nei mercati competitivi.",
          },
          {
            number: "04",
            title: "Ricerca e Strategia di Contenuto",
            description:
              "Ricerca di parole chiave che mappa l'intento reale dell'acquirente, analisi dei gap competitivi e brief di contenuto che il tuo team o il nostro può eseguire.",
          },
        ],
      },
      {
        type: "links",
        badge: "I Nostri Servizi",
        heading: "Esplora Ogni Servizio SEO Ecommerce",
        subtitle:
          "Clicca su qualsiasi servizio per vedere esattamente cosa facciamo, come lo facciamo e quali risultati aspettarsi.",
        links: [
          {
            title: "SEO Ecommerce",
            description:
              "La strategia SEO commerciale completa per i negozi online - dall'audit tecnico all'attribuzione dei ricavi.",
            href: "/ecommerce-seo",
          },
          {
            title: "SEO Shopify",
            description:
              "Ottimizzazione nativa per i negozi Shopify: template Liquid, stack di app, canonical delle collezioni e altro.",
            href: "/shopify-seo",
          },
          {
            title: "SEO WooCommerce",
            description:
              "SEO tecnico e di contenuto per WordPress/WooCommerce - audit dei plugin, struttura URL e ottimizzazione del database.",
            href: "/woocommerce-seo",
          },
          {
            title: "SEO BigCommerce",
            description:
              "Sfrutta ulteriormente i vantaggi SEO nativi di BigCommerce con il controllo della navigazione a faccette e l'ottimizzazione a livello di catalogo.",
            href: "/bigcommerce-seo",
          },
          {
            title: "SEO Adobe Commerce",
            description:
              "SEO di livello enterprise per Magento/Adobe Commerce - budget di scansione, configurazioni multi-store e rendering JS.",
            href: "/adobe-commerce-seo",
          },
          {
            title: "SEO Amazon",
            description:
              "Fai trovare i tuoi prodotti sul più grande marketplace del mondo con ottimizzazione delle schede, contenuto A+ e strategie di ranking.",
            href: "/amazon-seo",
          },
          {
            title: "Link Building",
            description:
              "Costruisci vera autorità off-page con backlink editoriali da pubblicazioni che contano nella tua nicchia.",
            href: "/link-building",
          },
          {
            title: "Ricerca di Parole Chiave",
            description:
              "Mappa il panorama completo delle parole chiave con intento d'acquisto del tuo mercato e identifica le opportunità organiche di maggior valore.",
            href: "/keyword-research",
          },
          {
            title: "Scrittura di Contenuti",
            description:
              "Contenuto ottimizzato per SEO che posiziona e converte - guide agli acquisti, testi di categoria, descrizioni di prodotti e articoli di blog.",
            href: "/content-writing",
          },
        ],
      },
      {
        type: "links",
        badge: "Sfoglia per Area",
        heading: "Preferisci Sfogliare per Piattaforma o Settore?",
        subtitle:
          "Abbiamo creato hub dedicati per ogni piattaforma che supportiamo e ogni verticale in cui siamo specializzati.",
        links: [
          {
            title: "SEO per Piattaforma",
            description:
              "Shopify, WooCommerce, BigCommerce e Adobe Commerce - strategie native per il tuo stack tecnologico esatto.",
            href: "/ecommerce-seo-platforms",
          },
          {
            title: "SEO per Settore",
            description:
              "Moda, Bellezza, Consumabili e Giocattoli - strategie settoriali che catturano l'intento d'acquisto unico del tuo verticale.",
            href: "/ecommerce-seo-industries",
          },
        ],
      },
      {
        type: "benefits",
        badge: "Perché EcomSEO",
        heading: "Cosa Ottieni con Ogni Servizio che Offriamo",
        benefits: [
          {
            title: "Competenza Esclusiva in Ecommerce",
            description:
              "Non facciamo SEO per SaaS, SEO locale o siti affiliati. Ogni playbook, template e processo è costruito specificamente per i cataloghi prodotti e i ricavi.",
          },
          {
            title: "Attribuzione dei Ricavi",
            description:
              "Misuriamo il successo in ricavi, non in metriche di vanità. Ogni impegno è legato alla crescita del traffico organico, ai miglioramenti del tasso di conversione e alle vendite reali.",
          },
          {
            title: "Esecuzione Nativa della Piattaforma",
            description:
              "La nostra implementazione è adattata alla tua piattaforma esatta - Shopify, WooCommerce, BigCommerce o Magento. Nessuna checklist generica applicata allo stack sbagliato.",
          },
          {
            title: "Pronto per la Ricerca IA",
            description:
              "Oltre Google - ottimizziamo il tuo brand e i tuoi prodotti per AI Overviews, ChatGPT e Perplexity in modo che tu sia visibile nella prossima generazione di ricerca.",
          },
          {
            title: "Processi Scalabili",
            description:
              "Workflow automatizzati per title tag, meta description e dati strutturati su scala SKU. Costruiti per negozi con centinaia o migliaia di prodotti.",
          },
          {
            title: "Reporting Trasparente",
            description:
              "Report mensili che mostrano esattamente cosa è stato fatto, cosa si è mosso e qual è l'impatto sui ricavi. Nessun fumo e specchi.",
          },
        ],
      },
      {
        type: "stats",
        badge: "Track Record",
        heading: "I numeri dietro i nostri servizi SEO e-commerce",
        subtitle:
          "Metriche aggregate su tutti i servizi che forniamo. Orientati ai ricavi, non alle metriche di vanità.",
        stats: [
          { value: "$12M+", label: "Ricavi generati per i clienti" },
          { value: "50+", label: "Negozi e-commerce ottimizzati" },
          { value: "140%", label: "Aumento medio del traffico organico" },
          { value: "8+", label: "Anni di focus esclusivo sull'e-commerce" },
        ],
      },
      {
        type: "caseStudies",
        badge: "Casi di Studio",
        heading: "Risultati clienti dai nostri servizi SEO e-commerce",
        subtitle:
          "Ogni servizio che offriamo \u00e8 progettato per generare ricavi misurabili. Ecco i risultati ottenuti.",
        caseStudies: [
          {
            badge: "Moda · Shopify",
            title: "Brand di moda, 3x ricavi organici in 12 mesi",
            image: "/images/framer/QtPNuhsKVZNt3klckPPtQzUuW0.png",
            metrics: [
              { value: "3x", label: "Ricavi organici" },
              { value: "+210%", label: "Traffico organico" },
              { value: "12 mesi", label: "Periodo" },
            ],
            quote:
              "EcomSEO ha capito che i posizionamenti non significano nulla senza conversioni. Hanno ottimizzato le nostre pagine di categoria, risolto il nostro debito tecnico e triplicato i nostri ricavi organici in un anno.",
            quoteAuthor: "Direttore Digitale, Brand di moda e-commerce",
            href: "/cases",
          },
          {
            badge: "Salute & Benessere · WooCommerce",
            title: "Brand salute, Da pagina 3 a pagina 1 per le keyword principali",
            image: "/images/framer/dsId62uNnnWBWAr5Vi1Z5UqiQ.png",
            metrics: [
              { value: "Pagina 1", label: "Keyword commerciali principali" },
              { value: "+340%", label: "Ricavi organici" },
              { value: "9 mesi", label: "Periodo" },
            ],
            quote:
              "Siamo passati dall'essere invisibili a leader nella nostra categoria. L'impatto sui ricavi \u00e8 stato immediato una volta che i posizionamenti sono saliti.",
            quoteAuthor: "Fondatore, Brand DTC Salute",
            href: "/cases",
          },
        ],
        ctaText: "Vedi tutti i casi di studio",
        ctaHref: "/cases",
      },
      {
        type: "team",
        badge: "Il Team",
        heading: "Chi fa il lavoro",
        teamLead: {
          name: "Fabian van Til",
          role: "Strategia e Innovazione",
          bio: "Fabian definisce la strategia di ogni progetto cliente. 8+ anni di esperienza SEO esclusivamente e-commerce nella moda, salute, beauty, giocattoli ed elettronica. Architetto del Commerce Growth Framework\u2122 che ha generato oltre $12M di ricavi organici.",
          image: "/images/framer/fabian-van-til-new.jpeg",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "SEO tecnico & On-Page",
            bio: "Dimitar progetta le fondamenta SEO tecniche e on-page per negozi e-commerce di ogni dimensione. Specializzato in ottimizzazione del crawl per cataloghi grandi, dati strutturati su larga scala e Core Web Vitals.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://bg.linkedin.com/in/dimitar-georgiev-seo-expert",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Link Building",
            bio: "Martinijan gestisce l'acquisizione di link e le digital PR per brand e-commerce. Costruisce autorit\u00e0 attraverso recensioni prodotto e partnership strategiche. Oltre 9.000 link ottenuti.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "Contenuti, Link Building & PR",
            bio: "Gjorgi crea strategie di contenuto per brand e-commerce che si posizionano e convertono. Specializzato in ottimizzazione delle pagine categoria, guide all'acquisto e calendari editoriali e campagne di link building e PR.",
            image: "/images/framer/gjorgi-jovev.png",
            linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Offrite tutti questi servizi come bundle?",
          answer:
            "Sì. La maggior parte dei clienti inizia con un impegno SEO ecommerce completo che copre contemporaneamente tecnica, contenuto e link building. Offriamo anche servizi individuali per i negozi che devono affrontare un'area specifica.",
        },
        {
          question: "Da quale servizio dovrei iniziare?",
          answer:
            "Dipende dalla tua situazione attuale. I negozi con problemi di indicizzazione o velocità iniziano con SEO tecnico. Quelli con ranking ma senza conversioni hanno bisogno di lavoro on-page e di contenuto. Leggi la nostra guida alla [strategia SEO e-commerce](/blog/ecommerce-seo-strategy) o prenota un [audit SEO gratuito](/tools/ecommerce-seo-audit) e ti diremo esattamente dove concentrarti prima.",
        },
        {
          question: "Potete lavorare insieme al mio team esistente?",
          answer:
            "Assolutamente. Lavoriamo frequentemente come strato specialista sopra i team di marketing interni - gestendo il lavoro tecnico o di link building che richiede una più profonda esperienza in SEO ecommerce.",
        },
        {
          question: "Quali piattaforme supportate?",
          answer:
            "Shopify, WooCommerce, BigCommerce, Adobe Commerce (Magento) e Lightspeed. Lavoriamo anche con configurazioni headless commerce su qualsiasi framework.",
        },
        {
          question: "Quanto tempo ci vorrà per vedere risultati?",
          answer:
            "Le correzioni tecniche possono mostrare un impatto misurabile in settimane. L'ottimizzazione dei contenuti e delle categorie tipicamente si accumula nel corso di 3-6 mesi. Autorità e link building si accumulano nel corso di 6-12 mesi.",
        },
        {
          question: "Offrite un audit gratuito?",
          answer:
            "Sì - un audit SEO ecommerce gratuito che identifica le tue maggiori opportunità in termini di tecnica, contenuto e autorità. Inizia con la nostra panoramica del [SEO e-commerce completo](/blog/ecommerce-seo), poi prenota una chiamata e ti mostreremo esattamente dove stai lasciando ricavi sul tavolo.",
        },
      ],
      miniCta: {
        heading: "Non sai da dove iniziare?",
        subtitle:
          "Prenota una chiamata strategica gratuita e mapperemo i servizi esatti di cui il tuo negozio ha bisogno - nessun pitch generico, nessun upselling.",
      },
    },
  },

  nl: {
    hero: {
      badge: "Alle Ecommerce SEO Services",
      heading:
        "Elke Ecommerce SEO Service die U Nodig Heeft, Op Één Plek",
      subtitle:
        "Van technische fundamenten tot gezagsopbouw - blader door al onze services en vind de juiste match voor uw groeidoelstellingen.",
      ctaText: "Gratis Strategiegesprek Boeken",
    },
    trustBar:
      "Technische SEO · Contentstrategie · Linkbuilding · Platform-specialisten",
    sections: [
      {
        type: "process",
        badge: "De Volledige Stack",
        heading: "Eén Bureau. Elke Laag van Ecommerce SEO.",
        subtitle:
          "De meeste SEO-bureaus dekken slechts één deel van de stack. Wij dekken alles - van technische serverfixes tot AI-geoptimaliseerde content tot redactionele linkacquisitie.",
        process: [
          {
            number: "01",
            title: "Technisch Fundament",
            description:
              "Crawlbudgetoptimalisatie, sitesnelheid, Core Web Vitals, gestructureerde data, canonieke logica en JavaScript-rendering - de onzichtbare infrastructuur die alles else laat werken.",
          },
          {
            number: "02",
            title: "On-Page & Categorie SEO",
            description:
              "Omzetgerichte categoriepagina's, productoptimalisatie, interne linkarchitectuur en AI-zoekklare content die kopers in elke intentefase vastlegt.",
          },
          {
            number: "03",
            title: "Autoriteit & Linkbuilding",
            description:
              "Echte redactionele backlinks van relevante publicaties in uw sector. Geen PBN's, geen linkfarms - alleen de domeinautoriteit die rankings beweegt in competitieve markten.",
          },
          {
            number: "04",
            title: "Onderzoek & Contentstrategie",
            description:
              "Zoekwoordenonderzoek dat de werkelijke koopintentie in kaart brengt, concurrentiekloof-analyse en contentbriefings die uw team of het onze kan uitvoeren.",
          },
        ],
      },
      {
        type: "links",
        badge: "Onze Services",
        heading: "Verken Elke Ecommerce SEO Service",
        subtitle:
          "Klik op een service om precies te zien wat we doen, hoe we het doen en welke resultaten te verwachten zijn.",
        links: [
          {
            title: "Ecommerce SEO",
            description:
              "De volledige commerciële SEO-strategie voor webshops - van technische audit tot omzetattributie.",
            href: "/ecommerce-seo",
          },
          {
            title: "Shopify SEO",
            description:
              "Platform-native optimalisatie voor Shopify-winkels: Liquid-templates, app-stack, collection canonicals en meer.",
            href: "/shopify-seo",
          },
          {
            title: "WooCommerce SEO",
            description:
              "Technische en content-SEO voor WordPress/WooCommerce - plugin-audits, URL-structuur en database-optimalisatie.",
            href: "/woocommerce-seo",
          },
          {
            title: "BigCommerce SEO",
            description:
              "Benut de native SEO-voordelen van BigCommerce verder met facetnavigatiebeheer en catalogusniveauoptimalisatie.",
            href: "/bigcommerce-seo",
          },
          {
            title: "Adobe Commerce SEO",
            description:
              "Enterprise-grade SEO voor Magento/Adobe Commerce - crawlbudget, multi-store-configuraties en JS-rendering.",
            href: "/adobe-commerce-seo",
          },
          {
            title: "Amazon SEO",
            description:
              "Zorg dat uw producten gevonden worden op 's werelds grootste marketplace met listingoptimalisatie, A+ content en rankingstrategieën.",
            href: "/amazon-seo",
          },
          {
            title: "Linkbuilding",
            description:
              "Bouw echte off-page autoriteit met redactionele backlinks van publicaties die er toe doen in uw niche.",
            href: "/link-building",
          },
          {
            title: "Zoekwoordenonderzoek",
            description:
              "Breng het volledige koopintentie-zoekwoordlandschap van uw markt in kaart en identificeer de meest waardevolle organische kansen.",
            href: "/keyword-research",
          },
          {
            title: "Contentschrijven",
            description:
              "SEO-geoptimaliseerde content die rankt en converteert - koopgidsen, categorieteksten, productbeschrijvingen en blogartikelen.",
            href: "/content-writing",
          },
        ],
      },
      {
        type: "links",
        badge: "Bladeren op Aandachtsgebied",
        heading: "Liever Bladeren op Platform of Sector?",
        subtitle:
          "We hebben toegewijde hubs gebouwd voor elk platform dat we ondersteunen en elke vertical waarin we gespecialiseerd zijn.",
        links: [
          {
            title: "SEO per Platform",
            description:
              "Shopify, WooCommerce, BigCommerce en Adobe Commerce - platform-native strategieën voor uw exacte techstack.",
            href: "/ecommerce-seo-platforms",
          },
          {
            title: "SEO per Sector",
            description:
              "Mode, Beauty, Consumabelen en Speelgoed - sectorgerichte strategieën die de unieke koopintentie van uw vertical vastleggen.",
            href: "/ecommerce-seo-industries",
          },
        ],
      },
      {
        type: "benefits",
        badge: "Waarom EcomSEO",
        heading: "Wat U Krijgt bij Elke Service die We Aanbieden",
        benefits: [
          {
            title: "Uitsluitend Ecommerce-expertise",
            description:
              "We doen geen SaaS-SEO, lokale SEO of affiliatesites. Elk playbook, elke template en elk proces is specifiek gebouwd voor productcatalogi en omzet.",
          },
          {
            title: "Omzetattributie",
            description:
              "We meten succes in omzet, niet in ijdelheidscijfers. Elke samenwerking is gekoppeld aan organische verkeersgroei, verbeteringen in conversieratio en werkelijke verkopen.",
          },
          {
            title: "Platform-native Uitvoering",
            description:
              "Onze implementatie is afgestemd op uw exacte platform - Shopify, WooCommerce, BigCommerce of Magento. Geen generieke checklists toegepast op de verkeerde stack.",
          },
          {
            title: "Klaar voor AI-zoekopdrachten",
            description:
              "Verder dan Google - we optimaliseren uw merk en producten voor AI Overviews, ChatGPT en Perplexity zodat u zichtbaar bent in de volgende generatie zoekopdrachten.",
          },
          {
            title: "Schaalbare Processen",
            description:
              "Geautomatiseerde workflows voor title tags, metabeschrijvingen en gestructureerde data op SKU-schaal. Gebouwd voor winkels met honderden of duizenden producten.",
          },
          {
            title: "Transparante Rapportage",
            description:
              "Maandelijkse rapporten die precies laten zien wat er gedaan is, wat er bewogen is en wat de omzetimpact is. Geen rook en spiegels.",
          },
        ],
      },
      {
        type: "stats",
        badge: "Bewezen Resultaten",
        heading: "De cijfers achter onze e-commerce SEO services",
        subtitle:
          "Geaggregeerde metrics over alle services die we leveren. Omzetgericht, niet gericht op vanity metrics.",
        stats: [
          { value: "$12M+", label: "Omzet gegenereerd voor klanten" },
          { value: "50+", label: "E-commerce winkels geoptimaliseerd" },
          { value: "140%", label: "Gem. organische trafficgroei" },
          { value: "8+", label: "Jaar exclusieve e-commerce focus" },
        ],
      },
      {
        type: "caseStudies",
        badge: "Cases",
        heading: "Echte winkels. Echte omzet. Echte SEO-resultaten.",
        subtitle:
          "Elke service die we aanbieden is ontworpen om meetbare omzet te genereren. Hier zijn winkels die het bewijzen.",
        caseStudies: [
          {
            badge: "Mode · Shopify",
            title: "Modemerk, 3x organische omzet in 12 maanden",
            image: "/images/framer/QtPNuhsKVZNt3klckPPtQzUuW0.png",
            metrics: [
              { value: "3x", label: "Organische omzet" },
              { value: "+210%", label: "Organisch verkeer" },
              { value: "12 mnd", label: "Tijdsbestek" },
            ],
            quote:
              "EcomSEO begreep dat rankings niets betekenen zonder conversies. Ze optimaliseerden onze categoriepagina's, losten onze technische schuld op en verdrievoudigden onze organische omzet in een jaar.",
            quoteAuthor: "Head of Digital, Mode E-commerce Merk",
            href: "/cases",
          },
          {
            badge: "Gezondheid & Welzijn · WooCommerce",
            title: "Gezondheidsmerk, Van pagina 3 naar pagina 1 voor kernzoekwoorden",
            image: "/images/framer/dsId62uNnnWBWAr5Vi1Z5UqiQ.png",
            metrics: [
              { value: "Pagina 1", label: "Commerciële kernzoekwoorden" },
              { value: "+340%", label: "Organische omzet" },
              { value: "9 mnd", label: "Tijdsbestek" },
            ],
            quote:
              "We gingen van onzichtbaar naar dominant in onze categorie. De omzetimpact was onmiddellijk zodra de rankings stegen, omdat ze op koopintentie richtten, niet op vanity zoekwoorden.",
            quoteAuthor: "Oprichter, DTC Gezondheidsmerk",
            href: "/cases",
          },
        ],
        ctaText: "Bekijk alle cases",
        ctaHref: "/cases",
      },
      {
        type: "team",
        badge: "Het Team",
        heading: "Het team",
        teamLead: {
          name: "Fabian van Til",
          role: "Strategie & Innovatie",
          bio: "Fabian leidt de strategische richting van alle klantprojecten. Met 8+ jaar pure e-commerce SEO-ervaring in mode, gezondheid, beauty, speelgoed en elektronica is hij de architect van het Commerce Growth Framework™ dat meer dan $12M aan organische omzet heeft gegenereerd.",
          image: "/images/framer/fabian-van-til-new.jpeg",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "Technisch & On-Page SEO",
            bio: "Dimitar ontwerpt de technische SEO-fundamenten en on-page optimalisaties voor e-commerce winkels van elke omvang. Hij is gespecialiseerd in crawl-optimalisatie voor grote catalogi, gestructureerde data op schaal en Core Web Vitals.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://bg.linkedin.com/in/dimitar-georgiev-seo-expert",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Linkbuilding",
            bio: "Martinijan beheerst linkacquisitie en digitale PR voor e-commerce merken. Hij bouwt autoriteit op via productrecensies en strategische partnerschappen. Meer dan 9.000 links verkregen.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "Content, Linkbuilding & PR",
            bio: "Gjorgi creëert contentstrategieën, linkbuilding en PR voor e-commerce merken. Hij is gespecialiseerd in categoriepagina-optimalisatie, koopgidsen, redactionele kalenders en outreach-campagnes.",
            image: "/images/framer/gjorgi-jovev.png",
            linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Biedt u al deze services als bundel aan?",
          answer:
            "Ja. De meeste klanten beginnen met een uitgebreide ecommerce SEO-samenwerking die gelijktijdig techniek, content en linkbuilding dekt. We bieden ook individuele services aan voor winkels die een specifiek gebied moeten aanpakken.",
        },
        {
          question: "Met welke service moet ik beginnen?",
          answer:
            "Dat hangt af van uw huidige situatie. Winkels met indexerings- of snelheidsproblemen beginnen met technische SEO. Winkels met rankings maar zonder conversies hebben on-page en content werk nodig. Lees onze gids over [e-commerce SEO-strategie](/blog/ecommerce-seo-strategy) of boek een [gratis SEO-audit](/tools/ecommerce-seo-audit) en we vertellen u precies waar u eerst op moet focussen.",
        },
        {
          question: "Kunt u naast mijn bestaande team werken?",
          answer:
            "Absoluut. We werken vaak als specialistische laag bovenop interne marketingteams - waarbij we het technische of linkbuilding werk overnemen dat diepere ecommerce SEO-expertise vereist.",
        },
        {
          question: "Welke platforms ondersteunen jullie?",
          answer:
            "Shopify, WooCommerce, BigCommerce, Adobe Commerce (Magento) en Lightspeed. We werken ook met headless commerce-opstellingen op elk framework.",
        },
        {
          question: "Hoe snel zie ik resultaten?",
          answer:
            "Technische fixes kunnen meetbare impact tonen binnen enkele weken. Content- en categorieoptimalisatie accumuleert doorgaans over 3-6 maanden. Autoriteit en linkbuilding accumuleert over 6-12 maanden.",
        },
        {
          question: "Biedt u een gratis audit aan?",
          answer:
            "Ja - een gratis ecommerce SEO-audit die uw grootste kansen op het gebied van techniek, content en autoriteit identificeert. Begin met ons overzicht van [complete e-commerce SEO](/blog/ecommerce-seo), boek dan een gesprek en we laten u precies zien waar u omzet laat liggen.",
        },
      ],
      miniCta: {
        heading: "Weet u niet waar u moet beginnen?",
        subtitle:
          "Boek een gratis strategiegesprek en we brengen in kaart welke services uw winkel precies nodig heeft - geen generieke pitches, geen upselling.",
      },
    },
  },
};
