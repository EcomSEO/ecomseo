import type { Locale } from "../../config";
import type { ServicePageProps } from "@/components/service/ServicePageTemplate";

export const contentWritingData: Record<Locale, ServicePageProps> = {
  en: {
    hero: {
      badge: "Content Writing",
      heading: "SEO Content That Converts Browsers Into Buyers",
      subtitle:
        "We write content that ranks and converts for ecommerce stores. From product descriptions to buying guides - every word is optimized for search and sales.",
      ctaText: "Book a Content Strategy Call",
    },
    trustBar: "20+ ecommerce brands trust our content to drive organic revenue",
    sections: [
      {
        type: "stats",
        badge: "Track Record",
        heading: "Content That Delivers Results",
        subtitle: "Real numbers from our ecommerce content engagements. No cherry-picking.",
        stats: [
          { value: "500+", label: "SEO Pages Written" },
          { value: "6", label: "Languages Covered" },
          { value: "50+", label: "Ecommerce Stores Scaled" },
          { value: "3.5x", label: "Avg. Organic Traffic Lift" },
        ],
      },
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
      {
        type: "caseStudies",
        badge: "Case Studies",
        heading: "Client Results From Our Content Work",
        subtitle: "Two recent examples of what a dedicated content strategy delivers for ecommerce stores.",
        caseStudies: [
          {
            badge: "Fashion \u00B7 Content Strategy",
            title: "Fashion Brand Content Overhaul",
            image: "/images/framer/fyAPXyjHaJjly5rybkvJY6xZQkQ.png",
            metrics: [
              { value: "+320%", label: "Organic Traffic" },
              { value: "85+", label: "Pages Ranking Top 10" },
              { value: "9 mo", label: "Timeframe" },
            ],
            quote: "Their content strategy completely transformed our organic channel from an afterthought into our primary revenue driver.",
            quoteAuthor: "Head of Digital, European Fashion Brand",
            href: "/cases",
          },
          {
            badge: "Health & Wellness \u00B7 Blog Strategy",
            title: "Blog-Driven Revenue Growth",
            image: "/images/framer/dsId62uNnnWBWAr5Vi1Z5UqiQ.png",
            metrics: [
              { value: "+540%", label: "Blog Traffic" },
              { value: "$1.2M", label: "Attributed Revenue" },
              { value: "12 mo", label: "Timeframe" },
            ],
            quote: "The buying guides and educational content they created became our highest-converting organic landing pages.",
            quoteAuthor: "CEO, Health & Wellness Store",
            href: "/cases",
          },
        ],
        ctaText: "View All Case Studies",
        ctaHref: "/cases",
      },
      {
        type: "tips",
        badge: "Expert Insights",
        heading: "7 Content Writing Tips for Ecommerce Success",
        subtitle: "Actionable advice from our content team to help your ecommerce store rank and convert.",
        tips: [
          {
            number: "01",
            title: "Write for Search Intent, Not Just Keywords",
            body: "Every piece of content should match the searcher\u2019s intent. A product page should convert, a buying guide should compare, and a blog post should educate. Matching intent is the single biggest factor in whether Google ranks your content.",
            href: "/academy/keyword-research-for-ecommerce",
            hrefLabel: "Keyword research guide",
          },
          {
            number: "02",
            title: "Invest in Category Page Content",
            body: "Most ecommerce stores leave category pages as bare product grids. Adding 300-500 words of unique, keyword-optimized content above or below the grid can transform thin pages into ranking powerhouses that drive high-intent traffic.",
            href: "/academy/category-page-seo",
            hrefLabel: "Category page SEO guide",
          },
          {
            number: "03",
            title: "Create Product Descriptions That Sell and Rank",
            body: "Avoid manufacturer copy. Write unique product descriptions that naturally include primary and secondary keywords, highlight benefits over features, and address common objections. Google rewards unique content, and shoppers reward persuasive writing.",
          },
          {
            number: "04",
            title: "Build a Content Hub Around Your Core Topics",
            body: "Create pillar pages for your main product categories and link supporting blog posts, guides, and comparison articles to them. This internal linking structure signals topical authority to Google and keeps users engaged longer.",
          },
          {
            number: "05",
            title: "Use Data to Drive Your Editorial Calendar",
            body: "Don\u2019t guess what to write about. Use keyword research tools, Google Search Console data, and competitor analysis to identify content gaps. Prioritize topics by search volume, competition level, and commercial intent.",
          },
          {
            number: "06",
            title: "Optimize Existing Content Before Writing New Pieces",
            body: "Audit your existing content for underperforming pages that are close to page one. Updating titles, adding sections, improving internal links, and refreshing outdated information can deliver faster results than creating net-new content.",
            href: "/seo-audit",
            hrefLabel: "Get a content audit",
          },
          {
            number: "07",
            title: "Measure Content ROI, Not Just Rankings",
            body: "Track revenue attribution, not just traffic. Set up enhanced ecommerce analytics to see which content pieces drive purchases, add-to-carts, and assisted conversions. This data shapes a content strategy that actually grows revenue.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Content Deep Dive",
        heading: "Product Descriptions vs SEO Content: What Drives Revenue",
        subtitle: "Both matter, but they serve different roles in your ecommerce content strategy.",
        richTextBlocks: [
          {
            heading: "The Role of Product Descriptions",
            body: "Product descriptions convert shoppers who are already on your site. They need to be unique, persuasive, and keyword-optimized to rank in Google\u2019s product results. Great product descriptions reduce returns, increase add-to-cart rates, and differentiate your store from competitors selling the same items.",
          },
          {
            heading: "The Role of SEO Content",
            body: "Blog posts, buying guides, and educational content capture shoppers earlier in the buying journey. They build topical authority, earn backlinks naturally, and create entry points for customers who don\u2019t yet know your brand. The stores that dominate organic search invest in both product descriptions and top-of-funnel content.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Why Content Strategy Matters",
        heading: "Why Your Ecommerce Store Needs a Dedicated Content Strategy",
        subtitle: "Without a strategy, you\u2019re publishing content and hoping for the best. Hope is not a growth plan.",
        richTextBlocks: [
          {
            heading: "What Happens Without a Content Strategy",
            body: "Random blog posts that don\u2019t target real search demand, product descriptions copied from manufacturers, category pages with zero unique content, and no internal linking structure. The result: thin content signals to Google, wasted crawl budget, and organic traffic that flatlines while competitors pull ahead.",
          },
          {
            heading: "What a Dedicated Content Strategy Delivers",
            body: "A clear keyword map tied to your product catalog, an editorial calendar driven by data, content that targets every stage of the buying funnel, and a compounding organic traffic engine that reduces your dependency on paid ads. We build content strategies specifically for ecommerce - because generic content marketing doesn\u2019t move product.",
          },
        ],
      },
      {
        type: "team",
        badge: "The Team",
        heading: "Who Writes Your Content",
        teamLead: {
          name: "Fabian van Til",
          role: "Strategy & Innovation",
          bio: "Fabian sets the content strategy for every engagement. After 8 years of ecommerce SEO across fashion, health, beauty, and home goods, he knows what kind of content actually ranks and sells.",
          image: "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "Technical & On-Page SEO",
            bio: "Dimitar handles the technical and on-page side - site architecture, structured data, and internal linking. He makes sure the content you publish has the technical foundation to actually rank.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://www.linkedin.com/in/dimitar-georgiev-seo/",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Link Building",
            bio: "Martinijan builds the backlinks that give your content authority. He runs outreach and digital PR across European and US markets to earn placements that boost rankings.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "Content, Link Building & PR",
            bio: "Gjorgi does the actual writing, on-page optimization, and link building outreach. He handles editorial planning, keyword integration, product content for ecommerce stores, and PR campaigns to earn backlinks.",
            image: "/images/framer/gjorgi-jovev.png",
            linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Deliverables",
        heading: "What You Get Every Month",
        subtitle: "Transparent deliverables tied to your revenue goals. No fluff, no vanity metrics.",
        deliverables: [
          { title: "Content Audit", description: "Full content gap analysis with prioritized optimization opportunities" },
          { title: "Editorial Calendar", description: "Data-driven publishing schedule aligned with keyword opportunities and seasonality" },
          { title: "Product Descriptions", description: "Unique, SEO-optimized product copy that ranks and converts" },
          { title: "Category Content", description: "Strategic collection page copy targeting high-intent keywords" },
          { title: "Blog Strategy & Posts", description: "Keyword-targeted blog posts and buying guides that capture top-of-funnel traffic" },
          { title: "Internal Linking Plan", description: "Strategic internal link structure connecting content to product and category pages" },
          { title: "Monthly Reporting", description: "Rankings, traffic, revenue attribution, and content performance metrics" },
          { title: "Quarterly Strategy Review", description: "Strategic review of content performance with updated keyword priorities and content roadmap" },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "What type of content do you write?",
          answer:
            "We write product descriptions, category page content, blog posts, buying guides, comparison articles, and any other content type that drives organic traffic and conversions for ecommerce stores. See our [ecommerce SEO content guide](/blog/ecommerce-seo-content) for examples of content that performs.",
        },
        {
          question: "Do you write in languages other than English?",
          answer:
            "Yes. We have native-speaker writers for English, Dutch, German, Swedish, Norwegian, and Danish. We can also work with translation partners for other languages.",
        },
        {
          question: "How do you ensure content quality?",
          answer:
            "Every piece goes through [keyword research](/keyword-research), competitor analysis, expert writing, editorial review, and SEO optimization before delivery. We focus on E-E-A-T signals and genuine value for the reader.",
        },
        {
          question: "How many pieces of content do you deliver per month?",
          answer:
            "This depends on your package and goals. Typical engagements include 4-12 blog posts per month plus ongoing product and category page optimization. Every piece is built on thorough [keyword research](/keyword-research) to maximize organic impact.",
        },
        {
          question: "Can you optimize existing content?",
          answer:
            "Absolutely. We audit your existing content, identify quick wins, and optimize underperforming pages before creating new content. Often the fastest ROI comes from improving what you already have. Our [SEO audit service](/seo-audit) includes a full content gap analysis.",
        },
        {
          question: "How long until content starts ranking?",
          answer:
            "New content typically starts showing ranking signals within 4-8 weeks. Significant traffic usually follows within 2-4 months, depending on keyword difficulty and your domain authority. A comprehensive [ecommerce SEO strategy](/ecommerce-seo) accelerates these timelines significantly.",
        },
      ],
      miniCta: {
        heading: "Ready to Scale Your Content?",
        subtitle:
          "Book a free strategy call and we\u2019ll show you the content gaps costing you traffic.",
      },
    },
  },
  de: {
    hero: {
      badge: "Content-Erstellung",
      heading: "SEO-Content, der Besucher in K\u00e4ufer verwandelt",
      subtitle:
        "Wir schreiben Inhalte, die ranken und konvertieren - f\u00fcr E-Commerce-Shops. Von Produktbeschreibungen bis zu Kaufratgebern - jedes Wort ist f\u00fcr Suche und Umsatz optimiert.",
      ctaText: "Content-Strategiegespr\u00e4ch buchen",
    },
    trustBar: "20+ E-Commerce-Marken vertrauen unserem Content f\u00fcr organisches Umsatzwachstum",
    sections: [
      {
        type: "stats",
        badge: "Erfolgsbilanz",
        heading: "Content, der Ergebnisse liefert",
        subtitle: "Echte Zahlen aus unseren E-Commerce-Content-Projekten. Kein Rosinenpicken.",
        stats: [
          { value: "8+", label: "Jahre E-Commerce-Content" },
          { value: "12 Mio. \u20ac+", label: "Durch Content generierter Umsatz" },
          { value: "50+", label: "Mit Content skalierte Shops" },
          { value: "140 %", label: "Durchschn. Traffic-Steigerung" },
        ],
      },
      {
        type: "benefits",
        badge: "Ihre Leistungen",
        heading: "Content, der rankt und konvertiert",
        benefits: [
          {
            title: "Produktbeschreibungen",
            description:
              "Einzigartige, keyword-optimierte Produktbeschreibungen, die Ihre Seiten ranken lassen und Kunden zum Kauf bewegen.",
          },
          {
            title: "Kategorie-Content",
            description:
              "Strategische Kategorieseiten-Texte, die auf kaufbereite Keywords abzielen und die thematische Relevanz steigern.",
          },
          {
            title: "Blogartikel & Ratgeber",
            description:
              "Langform-Inhalte, die informative Suchanfragen abfangen und Top-of-Funnel-Traffic in Ihren Shop bringen.",
          },
          {
            title: "Kaufratgeber",
            description:
              "Vergleichs- und Best-of-Guides, die kommerzielle Suchanfragen abfangen und Traffic zu Ihren Produkten leiten.",
          },
          {
            title: "Content-Briefings",
            description:
              "Detaillierte Briefings mit Ziel-Keywords, Suchintentanalyse, Wettbewerbsl\u00fccken und Inhaltsstruktur.",
          },
          {
            title: "Content-Kalender",
            description:
              "Ein strategischer Publikationsplan, abgestimmt auf saisonale Trends, Produktlaunches und Keyword-Chancen.",
          },
        ],
      },
      {
        type: "process",
        badge: "Der Prozess",
        heading: "So erstellen wir Content, der performt",
        process: [
          {
            number: "01",
            title: "Keyword-Recherche",
            description:
              "Wir identifizieren hochwertige Content-Chancen basierend auf Suchvolumen, Intent und Ihrer Wettbewerbslandschaft.",
          },
          {
            number: "02",
            title: "Content-Briefing",
            description:
              "Detaillierte Briefings mit Ziel-Keywords, \u00dcberschriftenstruktur, Wettbewerbsanalyse und Content-Richtlinien.",
          },
          {
            number: "03",
            title: "Texterstellung & Review",
            description:
              "Unsere E-Commerce-Spezialisten erstellen optimierten Content. Sie pr\u00fcfen und genehmigen, bevor etwas live geht.",
          },
          {
            number: "04",
            title: "Publikation & Tracking",
            description:
              "Wir \u00fcbernehmen die Ver\u00f6ffentlichung, monitoren Rankings und optimieren basierend auf Performance-Daten.",
          },
        ],
      },
      {
        type: "caseStudies",
        badge: "Kundenergebnisse",
        heading: "Content-Strategien, die Umsatz treiben",
        subtitle: "Ausgewählte Kundenprojekte, bei denen Content-Arbeit messbaren Umsatz gebracht hat.",
        caseStudies: [
          {
            badge: "Mode \u00B7 Content-Strategie",
            title: "Content-\u00dcberarbeitung einer Modemarke",
            image: "/images/framer/fyAPXyjHaJjly5rybkvJY6xZQkQ.png",
            metrics: [
              { value: "+320 %", label: "Organischer Traffic" },
              { value: "85+", label: "Seiten in Top 10" },
              { value: "9 Mo.", label: "Zeitrahmen" },
            ],
            quote: "Ihre Content-Strategie hat unseren organischen Kanal von einem Nebenschauplatz zum prim\u00e4ren Umsatztreiber transformiert.",
            quoteAuthor: "Leiter Digital, Europ\u00e4ische Modemarke",
            href: "/cases",
          },
          {
            badge: "Gesundheit & Wellness \u00B7 Blog-Strategie",
            title: "Bloggetriebenes Umsatzwachstum",
            image: "/images/framer/dsId62uNnnWBWAr5Vi1Z5UqiQ.png",
            metrics: [
              { value: "+540 %", label: "Blog-Traffic" },
              { value: "1,2 Mio. \u20ac", label: "Zugeordneter Umsatz" },
              { value: "12 Mo.", label: "Zeitrahmen" },
            ],
            quote: "Die Kaufratgeber und Bildungsinhalte wurden zu unseren bestkonvertierenden organischen Landingpages.",
            quoteAuthor: "CEO, Gesundheits- & Wellness-Shop",
            href: "/cases",
          },
        ],
        ctaText: "Alle Fallstudien ansehen",
        ctaHref: "/cases",
      },
      {
        type: "tips",
        badge: "Expertenwissen",
        heading: "7 Content-Tipps f\u00fcr E-Commerce-Erfolg",
        subtitle: "Praxisnahe Ratschl\u00e4ge unseres Content-Teams, die Ihrem E-Commerce-Shop zu besseren Rankings und mehr Conversions verhelfen.",
        tips: [
          {
            number: "01",
            title: "F\u00fcr Suchintention schreiben, nicht nur f\u00fcr Keywords",
            body: "Jeder Inhalt sollte zur Suchintention des Nutzers passen. Eine Produktseite soll konvertieren, ein Kaufratgeber soll vergleichen, ein Blogartikel soll informieren. Die Intention zu treffen ist der wichtigste Faktor f\u00fcr Google-Rankings.",
            href: "/academy/keyword-research-for-ecommerce",
            hrefLabel: "Keyword-Recherche-Leitfaden",
          },
          {
            number: "02",
            title: "In Kategorieseiten-Content investieren",
            body: "Die meisten E-Commerce-Shops lassen Kategorieseiten als reine Produktraster stehen. 300-500 W\u00f6rter einzigartiger, keyword-optimierter Content ober- oder unterhalb des Rasters kann d\u00fcnne Seiten in Ranking-Kraftwerke verwandeln.",
            href: "/academy/category-page-seo",
            hrefLabel: "Kategorieseiten-SEO-Leitfaden",
          },
          {
            number: "03",
            title: "Produktbeschreibungen, die verkaufen und ranken",
            body: "Vermeiden Sie Herstellertexte. Schreiben Sie einzigartige Produktbeschreibungen, die Keywords nat\u00fcrlich einbinden, Vorteile statt Funktionen hervorheben und h\u00e4ufige Einw\u00e4nde adressieren. Google belohnt einzigartigen Content, K\u00e4ufer belohnen \u00fcberzeugendes Schreiben.",
          },
          {
            number: "04",
            title: "Content-Hubs um Kernthemen aufbauen",
            body: "Erstellen Sie Pillar-Pages f\u00fcr Ihre Hauptproduktkategorien und verlinken Sie unterst\u00fctzende Blogartikel, Ratgeber und Vergleichsartikel darauf. Diese interne Verlinkungsstruktur signalisiert Google thematische Autorit\u00e4t.",
          },
          {
            number: "05",
            title: "Datengetriebenen Redaktionskalender nutzen",
            body: "Raten Sie nicht, wor\u00fcber Sie schreiben sollen. Nutzen Sie Keyword-Tools, Search-Console-Daten und Wettbewerbsanalysen, um Content-L\u00fccken zu identifizieren. Priorisieren Sie nach Suchvolumen, Wettbewerb und kommerzieller Intention.",
          },
          {
            number: "06",
            title: "Bestehenden Content optimieren, bevor Sie Neues erstellen",
            body: "Pr\u00fcfen Sie bestehende Inhalte auf unterperformende Seiten nahe Seite eins. Titel-Updates, zus\u00e4tzliche Abschnitte und verbesserte interne Links liefern oft schnellere Ergebnisse als v\u00f6llig neuer Content.",
            href: "/seo-audit",
            hrefLabel: "Content-Audit erhalten",
          },
          {
            number: "07",
            title: "Content-ROI messen, nicht nur Rankings",
            body: "Verfolgen Sie Umsatz-Attribution, nicht nur Traffic. Richten Sie erweiterte E-Commerce-Analytics ein, um zu sehen, welche Inhalte K\u00e4ufe, Warenkorbzug\u00e4nge und unterst\u00fctzte Conversions generieren.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Content-Vertiefung",
        heading: "Produktbeschreibungen vs. SEO-Content: Was treibt den Umsatz",
        subtitle: "Beides ist wichtig, aber sie erf\u00fcllen unterschiedliche Rollen in Ihrer E-Commerce-Content-Strategie.",
        richTextBlocks: [
          {
            heading: "Die Rolle von Produktbeschreibungen",
            body: "Produktbeschreibungen konvertieren Kunden, die bereits auf Ihrer Website sind. Sie m\u00fcssen einzigartig, \u00fcberzeugend und keyword-optimiert sein, um in Googles Produktergebnissen zu ranken. Gute Produktbeschreibungen reduzieren Retouren, erh\u00f6hen die Warenkorbrate und differenzieren Ihren Shop.",
          },
          {
            heading: "Die Rolle von SEO-Content",
            body: "Blogartikel, Kaufratgeber und Bildungsinhalte fangen Kunden fr\u00fcher in der Kaufreise ab. Sie bauen thematische Autorit\u00e4t auf, verdienen nat\u00fcrlich Backlinks und schaffen Einstiegspunkte f\u00fcr Kunden, die Ihre Marke noch nicht kennen. Shops, die organisch erfolgreich sind, investieren in beides.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Warum Content-Strategie wichtig ist",
        heading: "Warum Ihr E-Commerce-Shop eine dedizierte Content-Strategie braucht",
        subtitle: "Ohne Strategie ver\u00f6ffentlichen Sie Content und hoffen auf das Beste. Hoffnung ist kein Wachstumsplan.",
        richTextBlocks: [
          {
            heading: "Was ohne Content-Strategie passiert",
            body: "Zuf\u00e4llige Blogartikel ohne echte Suchnachfrage, vom Hersteller kopierte Produktbeschreibungen, Kategorieseiten ohne einzigartigen Content und keine interne Verlinkungsstruktur. Das Ergebnis: Thin-Content-Signale an Google, verschwendetes Crawl-Budget und organischer Traffic, der stagniert.",
          },
          {
            heading: "Was eine dedizierte Content-Strategie liefert",
            body: "Eine klare Keyword-Map verkn\u00fcpft mit Ihrem Produktkatalog, ein datengetriebener Redaktionskalender, Content f\u00fcr jede Phase des Kauftrichters und eine wachsende organische Traffic-Maschine, die Ihre Abh\u00e4ngigkeit von bezahlter Werbung reduziert. Wir bauen Content-Strategien speziell f\u00fcr E-Commerce.",
          },
        ],
      },
      {
        type: "team",
        badge: "Das Team",
        heading: "Wer die Arbeit macht",
        teamLead: {
          name: "Fabian van Til",
          role: "Strategie & Innovation",
          bio: "Fabian steuert die strategische Ausrichtung aller Content-Projekte. Mit 8+ Jahren E-Commerce-SEO-Erfahrung in Mode, Gesundheit, Beauty und Wohnen verbindet er Wachstumsstrategie mit content-getriebener SEO-Innovation.",
          image: "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "Technisches & On-Page SEO",
            bio: "Entwickelt die technischen Grundlagen und On-Page-Optimierungen, die Content zum Ranken bringen. Spezialisiert auf Website-Architektur, Structured Data und interne Verlinkungsstrategien, die Content-Performance verst\u00e4rken.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://www.linkedin.com/in/dimitar-georgiev-seo/",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Linkaufbau",
            bio: "Martinijan k\u00fcmmert sich um Linkakquise und digitale PR im gro\u00dfen Stil. Er baut Backlink-Profile auf, die die Content-Autorit\u00e4t bei wettbewerbsintensiven E-Commerce-Keywords steigern.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "Content, Linkaufbau & PR",
            bio: "Entwickelt Content-Strategien, Linkaufbau und PR und On-Page-Optimierungen, die ranken und konvertieren. Spezialisiert auf redaktionelle Planung, Keyword-Recherche und Produkt-Content-Optimierung f\u00fcr E-Commerce-Shops.",
            image: "/images/framer/gjorgi-jovev.png",
            linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Leistungen",
        heading: "Was Sie jeden Monat erhalten",
        subtitle: "Transparente Leistungen, die an Ihre Umsatzziele gekn\u00fcpft sind. Kein Bl\u00e4hwerk, keine Vanity-Metriken.",
        deliverables: [
          { title: "Content-Audit", description: "Vollst\u00e4ndige Content-Gap-Analyse mit priorisierten Optimierungschancen" },
          { title: "Redaktionskalender", description: "Datengetriebener Publikationsplan abgestimmt auf Keyword-Chancen und Saisonalit\u00e4t" },
          { title: "Produktbeschreibungen", description: "Einzigartige, SEO-optimierte Produkttexte, die ranken und konvertieren" },
          { title: "Kategorie-Content", description: "Strategische Kategorieseiten-Texte f\u00fcr kaufbereite Keywords" },
          { title: "Blog-Strategie & Artikel", description: "Keyword-gezielte Blogartikel und Kaufratgeber f\u00fcr Top-of-Funnel-Traffic" },
          { title: "Interne Verlinkung", description: "Strategische interne Linkstruktur, die Content mit Produkt- und Kategorieseiten verbindet" },
          { title: "Monatliches Reporting", description: "Rankings, Traffic, Umsatz-Attribution und Content-Performance-Metriken" },
          { title: "Quartalsstrategie-Review", description: "Strategische \u00dcberpr\u00fcfung der Content-Performance mit aktualisierten Keyword-Priorit\u00e4ten und Content-Roadmap" },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Welche Art von Content schreiben Sie?",
          answer:
            "Wir schreiben Produktbeschreibungen, Kategorieseiten-Content, Blogartikel, Kaufratgeber, Vergleichsartikel und alle anderen Content-Formate, die organischen Traffic und Conversions f\u00fcr E-Commerce-Shops steigern. Sehen Sie unseren [E-Commerce-SEO-Content-Leitfaden](/blog/ecommerce-seo-content) f\u00fcr Beispiele von Content, der performt.",
        },
        {
          question: "Schreiben Sie auch in anderen Sprachen als Englisch?",
          answer:
            "Ja. Wir haben Muttersprachler f\u00fcr Englisch, Niederl\u00e4ndisch, Deutsch, Schwedisch, Norwegisch und D\u00e4nisch. F\u00fcr weitere Sprachen arbeiten wir mit \u00dcbersetzungspartnern zusammen.",
        },
        {
          question: "Wie stellen Sie die Content-Qualit\u00e4t sicher?",
          answer:
            "Jedes St\u00fcck durchl\u00e4uft [Keyword-Recherche](/keyword-research), Wettbewerbsanalyse, Expertenerstellung, redaktionelle Pr\u00fcfung und SEO-Optimierung. Wir setzen auf E-E-A-T-Signale und echten Mehrwert f\u00fcr den Leser.",
        },
        {
          question: "Wie viele Content-St\u00fccke liefern Sie pro Monat?",
          answer:
            "Das h\u00e4ngt von Ihrem Paket und Ihren Zielen ab. Typische Engagements umfassen 4-12 Blogartikel pro Monat plus laufende Produkt- und Kategorieseiten-Optimierung.",
        },
        {
          question: "K\u00f6nnen Sie bestehenden Content optimieren?",
          answer:
            "Absolut. Wir pr\u00fcfen Ihren bestehenden Content, identifizieren Quick Wins und optimieren unterperformende Seiten, bevor wir neuen Content erstellen. Oft kommt der schnellste ROI durch Verbesserung des Vorhandenen. Unser [SEO-Audit-Service](/seo-audit) beinhaltet eine vollst\u00e4ndige Content-Gap-Analyse.",
        },
        {
          question: "Wie lange dauert es, bis Content rankt?",
          answer:
            "Neuer Content zeigt typischerweise innerhalb von 4-8 Wochen erste Ranking-Signale. Signifikanter Traffic folgt meist innerhalb von 2-4 Monaten, abh\u00e4ngig von Keyword-Schwierigkeit und Domain-Autorit\u00e4t.",
        },
      ],
      miniCta: {
        heading: "Bereit, Ihren Content zu skalieren?",
        subtitle:
          "Buchen Sie ein kostenloses Strategiegespr\u00e4ch und wir zeigen Ihnen die Content-L\u00fccken, die Sie Traffic kosten.",
      },
    },
  },
  fr: {
    hero: {
      badge: "R\u00e9daction de contenu",
      heading: "Du contenu SEO qui convertit les visiteurs en acheteurs",
      subtitle:
        "Nous r\u00e9digeons du contenu qui se positionne et convertit pour les boutiques e-commerce. Des fiches produits aux guides d\u2019achat - chaque mot est optimis\u00e9 pour le r\u00e9f\u00e9rencement et les ventes.",
      ctaText: "R\u00e9server un appel strat\u00e9gie contenu",
    },
    trustBar: "20+ marques e-commerce nous font confiance pour g\u00e9n\u00e9rer du chiffre d\u2019affaires organique",
    sections: [
      {
        type: "stats",
        badge: "Bilan",
        heading: "Du contenu qui livre des r\u00e9sultats",
        subtitle: "Chiffres r\u00e9els de nos missions de contenu e-commerce. Pas de tri s\u00e9lectif.",
        stats: [
          { value: "8+", label: "Ann\u00e9es de contenu e-commerce" },
          { value: "12 M\u20ac+", label: "CA g\u00e9n\u00e9r\u00e9 par le contenu" },
          { value: "50+", label: "Boutiques d\u00e9velopp\u00e9es par le contenu" },
          { value: "140 %", label: "Augmentation moy. du trafic" },
        ],
      },
      {
        type: "benefits",
        badge: "Ce que vous obtenez",
        heading: "Du contenu qui se positionne et convertit",
        benefits: [
          {
            title: "Fiches produits",
            description:
              "Des descriptions produits uniques et optimis\u00e9es pour les mots-cl\u00e9s, qui aident vos pages \u00e0 se positionner et persuadent les acheteurs.",
          },
          {
            title: "Contenu de pages cat\u00e9gories",
            description:
              "Des textes strat\u00e9giques pour vos pages collections, ciblant des mots-cl\u00e9s \u00e0 forte intention d\u2019achat et am\u00e9liorant la pertinence th\u00e9matique.",
          },
          {
            title: "Articles de blog & guides",
            description:
              "Du contenu long format qui capte les requ\u00eates informationnelles et g\u00e9n\u00e8re du trafic haut de funnel vers votre boutique.",
          },
          {
            title: "Guides d\u2019achat",
            description:
              "Des guides comparatifs et s\u00e9lections qui captent les recherches \u00e0 intention commerciale et dirigent le trafic vers vos produits.",
          },
          {
            title: "Briefs de contenu",
            description:
              "Des briefs d\u00e9taill\u00e9s avec mots-cl\u00e9s cibles, analyse d\u2019intention de recherche, lacunes concurrentielles et structure de contenu.",
          },
          {
            title: "Calendrier \u00e9ditorial",
            description:
              "Un planning de publication strat\u00e9gique align\u00e9 sur les tendances saisonni\u00e8res, les lancements produits et les opportunit\u00e9s de mots-cl\u00e9s.",
          },
        ],
      },
      {
        type: "process",
        badge: "Le processus",
        heading: "Comment nous cr\u00e9ons du contenu performant",
        process: [
          {
            number: "01",
            title: "Recherche de mots-cl\u00e9s",
            description:
              "Nous identifions les opportunit\u00e9s de contenu \u00e0 forte valeur selon le volume de recherche, l\u2019intention et votre paysage concurrentiel.",
          },
          {
            number: "02",
            title: "Briefing de contenu",
            description:
              "Des briefs d\u00e9taill\u00e9s avec mots-cl\u00e9s cibles, structure des titres, analyse concurrentielle et directives de contenu.",
          },
          {
            number: "03",
            title: "R\u00e9daction & r\u00e9vision",
            description:
              "Nos r\u00e9dacteurs sp\u00e9cialis\u00e9s e-commerce cr\u00e9ent du contenu optimis\u00e9. Vous r\u00e9visez et approuvez avant toute publication.",
          },
          {
            number: "04",
            title: "Publication & suivi",
            description:
              "Nous g\u00e9rons la publication, suivons les positionnements et optimisons en continu selon les donn\u00e9es de performance.",
          },
        ],
      },
      {
        type: "caseStudies",
        badge: "R\u00e9sultats prouv\u00e9s",
        heading: "Des strat\u00e9gies de contenu qui g\u00e9n\u00e8rent du CA",
        subtitle: "De vraies boutiques, de vrais chiffres. Voici ce qui se passe quand le contenu e-commerce est bien fait.",
        caseStudies: [
          {
            badge: "Mode \u00B7 Strat\u00e9gie de contenu",
            title: "Refonte du contenu d\u2019une marque de mode",
            image: "/images/framer/fyAPXyjHaJjly5rybkvJY6xZQkQ.png",
            metrics: [
              { value: "+320 %", label: "Trafic organique" },
              { value: "85+", label: "Pages dans le Top 10" },
              { value: "9 mois", label: "D\u00e9lai" },
            ],
            quote: "Leur strat\u00e9gie de contenu a compl\u00e8tement transform\u00e9 notre canal organique, passant d\u2019un second plan \u00e0 notre principal g\u00e9n\u00e9rateur de CA.",
            quoteAuthor: "Directeur digital, Marque de mode europ\u00e9enne",
            href: "/cases",
          },
          {
            badge: "Sant\u00e9 & Bien-\u00eatre \u00B7 Strat\u00e9gie blog",
            title: "Croissance du CA par le blog",
            image: "/images/framer/dsId62uNnnWBWAr5Vi1Z5UqiQ.png",
            metrics: [
              { value: "+540 %", label: "Trafic du blog" },
              { value: "1,2 M\u20ac", label: "CA attribu\u00e9" },
              { value: "12 mois", label: "D\u00e9lai" },
            ],
            quote: "Les guides d\u2019achat et le contenu \u00e9ducatif qu\u2019ils ont cr\u00e9\u00e9s sont devenus nos pages d\u2019atterrissage organiques les plus convertissantes.",
            quoteAuthor: "CEO, Boutique Sant\u00e9 & Bien-\u00eatre",
            href: "/cases",
          },
        ],
        ctaText: "Voir toutes les \u00e9tudes de cas",
        ctaHref: "/cases",
      },
      {
        type: "tips",
        badge: "Conseils d\u2019experts",
        heading: "7 conseils de r\u00e9daction pour le succ\u00e8s e-commerce",
        subtitle: "Conseils concrets de notre \u00e9quipe contenu pour aider votre boutique e-commerce \u00e0 se positionner et convertir.",
        tips: [
          {
            number: "01",
            title: "R\u00e9digez pour l\u2019intention de recherche, pas seulement les mots-cl\u00e9s",
            body: "Chaque contenu doit correspondre \u00e0 l\u2019intention du chercheur. Une page produit doit convertir, un guide d\u2019achat doit comparer, un article de blog doit \u00e9duquer. Correspondre \u00e0 l\u2019intention est le facteur le plus important pour que Google positionne votre contenu.",
            href: "/academy/keyword-research-for-ecommerce",
            hrefLabel: "Guide de recherche de mots-cl\u00e9s",
          },
          {
            number: "02",
            title: "Investissez dans le contenu des pages cat\u00e9gories",
            body: "La plupart des boutiques e-commerce laissent les pages cat\u00e9gories comme de simples grilles produits. Ajouter 300 \u00e0 500 mots de contenu unique et optimis\u00e9 peut transformer des pages faibles en v\u00e9ritables moteurs de positionnement.",
            href: "/academy/category-page-seo",
            hrefLabel: "Guide SEO pages cat\u00e9gories",
          },
          {
            number: "03",
            title: "Cr\u00e9ez des fiches produits qui vendent et se positionnent",
            body: "\u00c9vitez les descriptions constructeur. R\u00e9digez des descriptions uniques int\u00e9grant naturellement les mots-cl\u00e9s, mettant en avant les b\u00e9n\u00e9fices plut\u00f4t que les caract\u00e9ristiques, et r\u00e9pondant aux objections courantes.",
          },
          {
            number: "04",
            title: "Construisez un hub de contenu autour de vos th\u00e9matiques cl\u00e9s",
            body: "Cr\u00e9ez des pages piliers pour vos cat\u00e9gories principales et liez-y des articles de blog, guides et comparatifs. Cette structure de liens internes signale l\u2019autorit\u00e9 th\u00e9matique \u00e0 Google.",
          },
          {
            number: "05",
            title: "Utilisez les donn\u00e9es pour piloter votre calendrier \u00e9ditorial",
            body: "Ne devinez pas quoi \u00e9crire. Utilisez des outils de recherche de mots-cl\u00e9s, les donn\u00e9es Search Console et l\u2019analyse concurrentielle pour identifier les lacunes. Priorisez par volume, comp\u00e9titivit\u00e9 et intention commerciale.",
          },
          {
            number: "06",
            title: "Optimisez le contenu existant avant d\u2019en cr\u00e9er du nouveau",
            body: "Auditez votre contenu existant pour trouver des pages sous-performantes proches de la premi\u00e8re page. Mettre \u00e0 jour les titres, ajouter des sections et am\u00e9liorer les liens internes donne souvent des r\u00e9sultats plus rapides.",
            href: "/seo-audit",
            hrefLabel: "Obtenir un audit de contenu",
          },
          {
            number: "07",
            title: "Mesurez le ROI du contenu, pas seulement les classements",
            body: "Suivez l\u2019attribution du CA, pas seulement le trafic. Configurez l\u2019e-commerce avanc\u00e9 pour voir quels contenus g\u00e9n\u00e8rent des achats, des ajouts au panier et des conversions assist\u00e9es.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Approfondissement contenu",
        heading: "Fiches produits vs contenu SEO : qu\u2019est-ce qui g\u00e9n\u00e8re le CA",
        subtitle: "Les deux comptent, mais ils remplissent des r\u00f4les diff\u00e9rents dans votre strat\u00e9gie de contenu e-commerce.",
        richTextBlocks: [
          {
            heading: "Le r\u00f4le des fiches produits",
            body: "Les fiches produits convertissent les acheteurs d\u00e9j\u00e0 sur votre site. Elles doivent \u00eatre uniques, persuasives et optimis\u00e9es pour se positionner dans les r\u00e9sultats produits de Google. De bonnes fiches r\u00e9duisent les retours, augmentent le taux d\u2019ajout au panier et diff\u00e9rencient votre boutique.",
          },
          {
            heading: "Le r\u00f4le du contenu SEO",
            body: "Articles de blog, guides d\u2019achat et contenu \u00e9ducatif captent les acheteurs plus t\u00f4t dans le parcours d\u2019achat. Ils construisent l\u2019autorit\u00e9 th\u00e9matique, g\u00e9n\u00e8rent des backlinks naturellement et cr\u00e9ent des points d\u2019entr\u00e9e pour les clients qui ne connaissent pas encore votre marque.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Pourquoi la strat\u00e9gie de contenu compte",
        heading: "Pourquoi votre boutique e-commerce a besoin d\u2019une strat\u00e9gie de contenu d\u00e9di\u00e9e",
        subtitle: "Sans strat\u00e9gie, vous publiez du contenu en esp\u00e9rant le meilleur. L\u2019espoir n\u2019est pas un plan de croissance.",
        richTextBlocks: [
          {
            heading: "Ce qui se passe sans strat\u00e9gie de contenu",
            body: "Des articles de blog al\u00e9atoires sans vraie demande de recherche, des descriptions produits copi\u00e9es des fabricants, des pages cat\u00e9gories sans contenu unique et aucune structure de liens internes. R\u00e9sultat : des signaux de contenu faible pour Google et un trafic organique qui stagne.",
          },
          {
            heading: "Ce qu\u2019une strat\u00e9gie de contenu d\u00e9di\u00e9e apporte",
            body: "Une cartographie de mots-cl\u00e9s li\u00e9e \u00e0 votre catalogue, un calendrier \u00e9ditorial pilot\u00e9 par les donn\u00e9es, du contenu ciblant chaque \u00e9tape du funnel d\u2019achat et un moteur de trafic organique qui r\u00e9duit votre d\u00e9pendance aux publicit\u00e9s payantes. Nous construisons des strat\u00e9gies de contenu sp\u00e9cifiquement pour l\u2019e-commerce.",
          },
        ],
      },
      {
        type: "team",
        badge: "L\u2019\u00e9quipe",
        heading: "L\u2019\u00e9quipe",
        teamLead: {
          name: "Fabian van Til",
          role: "Strat\u00e9gie & Innovation",
          bio: "Fabian supervise la strat\u00e9gie de chaque mission contenu. 8+ ans d\u2019exp\u00e9rience en SEO e-commerce dans les secteurs mode, sant\u00e9, beaut\u00e9 et maison. Il allie strat\u00e9gie de croissance et innovation SEO orient\u00e9e contenu.",
          image: "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "SEO technique & On-Page",
            bio: "Con\u00e7oit les fondations techniques et on-page qui font ranker le contenu. Sp\u00e9cialis\u00e9 dans l\u2019architecture de site, les donn\u00e9es structur\u00e9es et les strat\u00e9gies de liens internes qui amplifient la performance du contenu.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://www.linkedin.com/in/dimitar-georgiev-seo/",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Netlinking",
            bio: "Ma\u00eetrise l\u2019acquisition de liens et les RP digitales \u00e0 grande \u00e9chelle. Construit des profils de backlinks qui renforcent l\u2019autorit\u00e9 du contenu pour les mots-cl\u00e9s e-commerce comp\u00e9titifs.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "Contenu, Link Building & PR",
            bio: "\u00c9labore des strat\u00e9gies de contenu, des optimisations on-page et des campagnes de link building et PR. Sp\u00e9cialis\u00e9 dans la planification \u00e9ditoriale, la recherche de mots-cl\u00e9s, l\u2019optimisation du contenu produit et l\u2019outreach pour l\u2019e-commerce.",
            image: "/images/framer/gjorgi-jovev.png",
            linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Livrables",
        heading: "Ce que vous recevez chaque mois",
        subtitle: "Des livrables transparents li\u00e9s \u00e0 vos objectifs de CA. Pas de superflu, pas de m\u00e9triques de vanit\u00e9.",
        deliverables: [
          { title: "Audit de contenu", description: "Analyse compl\u00e8te des lacunes de contenu avec opportunit\u00e9s d\u2019optimisation prioris\u00e9es" },
          { title: "Calendrier \u00e9ditorial", description: "Planning de publication pilot\u00e9 par les donn\u00e9es, align\u00e9 sur les opportunit\u00e9s de mots-cl\u00e9s et la saisonnalit\u00e9" },
          { title: "Fiches produits", description: "Descriptions produits uniques et optimis\u00e9es SEO qui se positionnent et convertissent" },
          { title: "Contenu cat\u00e9gories", description: "Textes strat\u00e9giques pour pages collections ciblant des mots-cl\u00e9s \u00e0 forte intention" },
          { title: "Strat\u00e9gie blog & articles", description: "Articles et guides d\u2019achat ciblant des mots-cl\u00e9s pour capter le trafic haut de funnel" },
          { title: "Plan de maillage interne", description: "Structure de liens internes strat\u00e9gique reliant contenu, pages produits et cat\u00e9gories" },
          { title: "Reporting mensuel", description: "Classements, trafic, attribution du CA et m\u00e9triques de performance du contenu" },
          { title: "Revue strat\u00e9gique trimestrielle", description: "Revue strat\u00e9gique de la performance du contenu avec priorit\u00e9s de mots-cl\u00e9s mises \u00e0 jour et feuille de route" },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Quel type de contenu r\u00e9digez-vous ?",
          answer:
            "Nous r\u00e9digeons des fiches produits, du contenu de pages cat\u00e9gories, des articles de blog, des guides d\u2019achat, des comparatifs et tout autre type de contenu g\u00e9n\u00e9rant du trafic organique et des conversions pour les boutiques e-commerce. Consultez notre [guide de contenu SEO e-commerce](/blog/ecommerce-seo-content) pour des exemples de contenu performant.",
        },
        {
          question: "R\u00e9digez-vous dans d\u2019autres langues que l\u2019anglais ?",
          answer:
            "Oui. Nous avons des r\u00e9dacteurs natifs en anglais, n\u00e9erlandais, allemand, su\u00e9dois, norv\u00e9gien et danois. Pour d\u2019autres langues, nous collaborons avec des partenaires de traduction.",
        },
        {
          question: "Comment garantissez-vous la qualit\u00e9 du contenu ?",
          answer:
            "Chaque contenu passe par la [recherche de mots-cl\u00e9s](/keyword-research), l\u2019analyse concurrentielle, la r\u00e9daction experte, la r\u00e9vision \u00e9ditoriale et l\u2019optimisation SEO. Nous privil\u00e9gions les signaux E-E-A-T et la valeur r\u00e9elle pour le lecteur.",
        },
        {
          question: "Combien de contenus livrez-vous par mois ?",
          answer:
            "Cela d\u00e9pend de votre formule et de vos objectifs. Les engagements typiques comprennent 4 \u00e0 12 articles de blog par mois plus l\u2019optimisation continue des pages produits et cat\u00e9gories.",
        },
        {
          question: "Pouvez-vous optimiser du contenu existant ?",
          answer:
            "Absolument. Nous auditons votre contenu existant, identifions les gains rapides et optimisons les pages sous-performantes avant de cr\u00e9er du nouveau contenu. Souvent, le ROI le plus rapide vient de l\u2019am\u00e9lioration de l\u2019existant. Notre [service d\u2019audit SEO](/seo-audit) comprend une analyse compl\u00e8te des lacunes de contenu.",
        },
        {
          question: "Combien de temps avant que le contenu se positionne ?",
          answer:
            "Le nouveau contenu commence g\u00e9n\u00e9ralement \u00e0 montrer des signaux de positionnement en 4 \u00e0 8 semaines. Un trafic significatif suit g\u00e9n\u00e9ralement en 2 \u00e0 4 mois, selon la difficult\u00e9 des mots-cl\u00e9s et votre autorit\u00e9 de domaine.",
        },
      ],
      miniCta: {
        heading: "Pr\u00eat \u00e0 d\u00e9velopper votre contenu ?",
        subtitle:
          "R\u00e9servez un appel strat\u00e9gique gratuit et nous vous montrerons les lacunes de contenu qui vous co\u00fbtent du trafic.",
      },
    },
  },
  es: {
    hero: {
      badge: "Redacci\u00f3n de contenidos",
      heading: "Contenido SEO que convierte visitantes en compradores",
      subtitle:
        "Escribimos contenido que posiciona y convierte para tiendas online. Desde descripciones de producto hasta gu\u00edas de compra - cada palabra est\u00e1 optimizada para b\u00fasqueda y ventas.",
      ctaText: "Reservar llamada de estrategia de contenidos",
    },
    trustBar: "M\u00e1s de 20 marcas de ecommerce conf\u00edan en nuestro contenido para generar ingresos org\u00e1nicos",
    sections: [
      {
        type: "stats",
        badge: "Trayectoria",
        heading: "Contenido que entrega resultados",
        subtitle: "N\u00fameros reales de nuestros proyectos de contenido ecommerce. Sin selecci\u00f3n parcial.",
        stats: [
          { value: "8+", label: "A\u00f1os de contenido ecommerce" },
          { value: "12 M\u20ac+", label: "Ingresos generados por contenido" },
          { value: "50+", label: "Tiendas escaladas con contenido" },
          { value: "140 %", label: "Aumento prom. de tr\u00e1fico" },
        ],
      },
      {
        type: "benefits",
        badge: "Lo que obtienes",
        heading: "Contenido que posiciona y convierte",
        benefits: [
          {
            title: "Descripciones de productos",
            description:
              "Descripciones de producto \u00fanicas y optimizadas con palabras clave que ayudan a posicionar tus p\u00e1ginas y persuaden a los compradores.",
          },
          {
            title: "Contenido de p\u00e1ginas de categor\u00eda",
            description:
              "Textos estrat\u00e9gicos para p\u00e1ginas de colecci\u00f3n que apuntan a palabras clave de alta intenci\u00f3n y mejoran la relevancia tem\u00e1tica.",
          },
          {
            title: "Art\u00edculos de blog y gu\u00edas",
            description:
              "Contenido de formato largo que captura consultas informativas y genera tr\u00e1fico top-of-funnel hacia tu tienda.",
          },
          {
            title: "Gu\u00edas de compra",
            description:
              "Gu\u00edas comparativas y de selecci\u00f3n que capturan b\u00fasquedas con intenci\u00f3n comercial y dirigen tr\u00e1fico a tus productos.",
          },
          {
            title: "Briefs de contenido",
            description:
              "Briefs detallados con palabras clave objetivo, an\u00e1lisis de intenci\u00f3n de b\u00fasqueda, brechas competitivas y estructura de contenido.",
          },
          {
            title: "Calendario editorial",
            description:
              "Un calendario de publicaci\u00f3n estrat\u00e9gico alineado con tendencias estacionales, lanzamientos de productos y oportunidades de palabras clave.",
          },
        ],
      },
      {
        type: "process",
        badge: "El proceso",
        heading: "C\u00f3mo creamos contenido que rinde",
        process: [
          {
            number: "01",
            title: "Investigaci\u00f3n de palabras clave",
            description:
              "Identificamos oportunidades de contenido de alto valor basadas en volumen de b\u00fasqueda, intenci\u00f3n y tu panorama competitivo.",
          },
          {
            number: "02",
            title: "Briefing de contenido",
            description:
              "Briefs detallados con palabras clave objetivo, estructura de encabezados, an\u00e1lisis de competencia y directrices de contenido.",
          },
          {
            number: "03",
            title: "Redacci\u00f3n y revisi\u00f3n",
            description:
              "Nuestros redactores especializados en ecommerce crean contenido optimizado. T\u00fa revisas y apruebas antes de publicar.",
          },
          {
            number: "04",
            title: "Publicaci\u00f3n y seguimiento",
            description:
              "Nos encargamos de la publicaci\u00f3n, monitorizamos posiciones y optimizamos en base a datos de rendimiento para maximizar resultados.",
          },
        ],
      },
      {
        type: "caseStudies",
        badge: "Resultados de clientes",
        heading: "Estrategias de contenido que generan ingresos",
        subtitle: "Ejemplos reales de c\u00f3mo nuestras estrategias de contenido han impulsado el crecimiento org\u00e1nico.",
        caseStudies: [
          {
            badge: "Moda \u00B7 Estrategia de contenido",
            title: "Renovaci\u00f3n de contenido de marca de moda",
            image: "/images/framer/fyAPXyjHaJjly5rybkvJY6xZQkQ.png",
            metrics: [
              { value: "+320 %", label: "Tr\u00e1fico org\u00e1nico" },
              { value: "85+", label: "P\u00e1ginas en Top 10" },
              { value: "9 meses", label: "Plazo" },
            ],
            quote: "Su estrategia de contenido transform\u00f3 por completo nuestro canal org\u00e1nico, pas\u00f3 de ser secundario a nuestro principal generador de ingresos.",
            quoteAuthor: "Director Digital, Marca de moda europea",
            href: "/cases",
          },
          {
            badge: "Salud y Bienestar \u00B7 Estrategia de blog",
            title: "Crecimiento de ingresos por blog",
            image: "/images/framer/dsId62uNnnWBWAr5Vi1Z5UqiQ.png",
            metrics: [
              { value: "+540 %", label: "Tr\u00e1fico del blog" },
              { value: "1,2 M\u20ac", label: "Ingresos atribuidos" },
              { value: "12 meses", label: "Plazo" },
            ],
            quote: "Las gu\u00edas de compra y el contenido educativo que crearon se convirtieron en nuestras landing pages org\u00e1nicas con mayor conversi\u00f3n.",
            quoteAuthor: "CEO, Tienda de salud y bienestar",
            href: "/cases",
          },
        ],
        ctaText: "Ver todos los casos de \u00e9xito",
        ctaHref: "/cases",
      },
      {
        type: "tips",
        badge: "Consejos de expertos",
        heading: "7 consejos de redacci\u00f3n para el \u00e9xito en ecommerce",
        subtitle: "Consejos pr\u00e1cticos de nuestro equipo de contenidos para ayudar a tu tienda online a posicionar y convertir.",
        tips: [
          {
            number: "01",
            title: "Escribe para la intenci\u00f3n de b\u00fasqueda, no solo para keywords",
            body: "Cada pieza de contenido debe coincidir con la intenci\u00f3n del buscador. Una p\u00e1gina de producto debe convertir, una gu\u00eda de compra debe comparar, un art\u00edculo de blog debe educar. Coincidir con la intenci\u00f3n es el factor m\u00e1s importante para que Google posicione tu contenido.",
            href: "/academy/keyword-research-for-ecommerce",
            hrefLabel: "Gu\u00eda de investigaci\u00f3n de palabras clave",
          },
          {
            number: "02",
            title: "Invierte en contenido para p\u00e1ginas de categor\u00eda",
            body: "La mayor\u00eda de tiendas online dejan las p\u00e1ginas de categor\u00eda como simples grillas de productos. A\u00f1adir 300-500 palabras de contenido \u00fanico y optimizado puede transformar p\u00e1ginas d\u00e9biles en potencias de posicionamiento.",
            href: "/academy/category-page-seo",
            hrefLabel: "Gu\u00eda SEO de p\u00e1ginas de categor\u00eda",
          },
          {
            number: "03",
            title: "Crea descripciones de producto que vendan y posicionen",
            body: "Evita copias del fabricante. Escribe descripciones \u00fanicas que integren keywords de forma natural, destaquen beneficios sobre caracter\u00edsticas y aborden objeciones comunes. Google premia el contenido \u00fanico, y los compradores premian la escritura persuasiva.",
          },
          {
            number: "04",
            title: "Construye un hub de contenido alrededor de tus temas principales",
            body: "Crea p\u00e1ginas pilar para tus categor\u00edas principales y enlaza art\u00edculos de blog, gu\u00edas y comparativas. Esta estructura de enlazado interno se\u00f1ala autoridad tem\u00e1tica a Google.",
          },
          {
            number: "05",
            title: "Usa datos para dirigir tu calendario editorial",
            body: "No adivines sobre qu\u00e9 escribir. Usa herramientas de investigaci\u00f3n de keywords, datos de Search Console y an\u00e1lisis competitivo para identificar brechas de contenido. Prioriza por volumen, competencia e intenci\u00f3n comercial.",
          },
          {
            number: "06",
            title: "Optimiza contenido existente antes de crear nuevo",
            body: "Audita tu contenido existente en busca de p\u00e1ginas bajo rendimiento cerca de la primera p\u00e1gina. Actualizar t\u00edtulos, a\u00f1adir secciones y mejorar enlaces internos a menudo entrega resultados m\u00e1s r\u00e1pidos que crear contenido nuevo.",
            href: "/seo-audit",
            hrefLabel: "Obt\u00e9n una auditor\u00eda de contenido",
          },
          {
            number: "07",
            title: "Mide el ROI del contenido, no solo los rankings",
            body: "Rastrea la atribuci\u00f3n de ingresos, no solo el tr\u00e1fico. Configura an\u00e1lisis avanzado de ecommerce para ver qu\u00e9 contenidos generan compras, adiciones al carrito y conversiones asistidas.",
          },
        ],
      },
      {
        type: "richText",
        badge: "An\u00e1lisis de contenido",
        heading: "Descripciones de producto vs contenido SEO: qu\u00e9 genera ingresos",
        subtitle: "Ambos importan, pero cumplen roles diferentes en tu estrategia de contenido ecommerce.",
        richTextBlocks: [
          {
            heading: "El rol de las descripciones de producto",
            body: "Las descripciones de producto convierten a compradores que ya est\u00e1n en tu sitio. Deben ser \u00fanicas, persuasivas y optimizadas para posicionar en los resultados de producto de Google. Buenas descripciones reducen devoluciones, aumentan la tasa de adici\u00f3n al carrito y diferencian tu tienda.",
          },
          {
            heading: "El rol del contenido SEO",
            body: "Art\u00edculos de blog, gu\u00edas de compra y contenido educativo capturan compradores m\u00e1s temprano en el recorrido de compra. Construyen autoridad tem\u00e1tica, generan backlinks de forma natural y crean puntos de entrada para clientes que a\u00fan no conocen tu marca.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Por qu\u00e9 importa la estrategia de contenido",
        heading: "Por qu\u00e9 tu tienda online necesita una estrategia de contenido dedicada",
        subtitle: "Sin estrategia, publicas contenido esperando lo mejor. La esperanza no es un plan de crecimiento.",
        richTextBlocks: [
          {
            heading: "Qu\u00e9 pasa sin una estrategia de contenido",
            body: "Art\u00edculos de blog aleatorios sin demanda real de b\u00fasqueda, descripciones de producto copiadas del fabricante, p\u00e1ginas de categor\u00eda sin contenido \u00fanico y sin estructura de enlazado interno. El resultado: se\u00f1ales de contenido d\u00e9bil para Google y tr\u00e1fico org\u00e1nico que se estanca.",
          },
          {
            heading: "Lo que entrega una estrategia de contenido dedicada",
            body: "Un mapa de keywords vinculado a tu cat\u00e1logo de productos, un calendario editorial basado en datos, contenido para cada etapa del embudo de compra y un motor de tr\u00e1fico org\u00e1nico que reduce tu dependencia de la publicidad pagada. Construimos estrategias de contenido espec\u00edficamente para ecommerce.",
          },
        ],
      },
      {
        type: "team",
        badge: "El equipo",
        heading: "El equipo",
        teamLead: {
          name: "Fabian van Til",
          role: "Estrategia e Innovaci\u00f3n",
          bio: "Fabian dirige la estrategia de todos los proyectos de contenido. 8+ a\u00f1os de experiencia en SEO ecommerce en los sectores de moda, salud, belleza y hogar. Combina estrategia de crecimiento con innovaci\u00f3n SEO orientada al contenido.",
          image: "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "SEO T\u00e9cnico & On-Page",
            bio: "Dise\u00f1a las bases t\u00e9cnicas y on-page que hacen que el contenido posicione. Especializado en arquitectura web, datos estructurados y estrategias de enlazado interno que amplifican el rendimiento del contenido.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://www.linkedin.com/in/dimitar-georgiev-seo/",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page y Link Building",
            bio: "Martinijan lidera la adquisici\u00f3n de enlaces y las RP digitales a escala. Construye perfiles de backlinks que potencian la autoridad del contenido para keywords competitivas de ecommerce.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "Contenido, Link Building y PR",
            bio: "Crea estrategias de contenido, optimizaciones on-page y campa\u00f1as de link building y PR. Especializado en planificaci\u00f3n editorial, investigaci\u00f3n de keywords, optimizaci\u00f3n de contenido de producto y outreach para tiendas online.",
            image: "/images/framer/gjorgi-jovev.png",
            linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Entregables",
        heading: "Lo que recibes cada mes",
        subtitle: "Entregables transparentes vinculados a tus objetivos de ingresos. Sin relleno, sin m\u00e9tricas de vanidad.",
        deliverables: [
          { title: "Auditor\u00eda de contenido", description: "An\u00e1lisis completo de brechas de contenido con oportunidades de optimizaci\u00f3n priorizadas" },
          { title: "Calendario editorial", description: "Calendario de publicaci\u00f3n basado en datos alineado con oportunidades de keywords y estacionalidad" },
          { title: "Descripciones de productos", description: "Textos de producto \u00fanicos y optimizados para SEO que posicionan y convierten" },
          { title: "Contenido de categor\u00edas", description: "Textos estrat\u00e9gicos para p\u00e1ginas de colecci\u00f3n dirigidos a keywords de alta intenci\u00f3n" },
          { title: "Estrategia de blog y art\u00edculos", description: "Art\u00edculos y gu\u00edas de compra dirigidos a keywords para captar tr\u00e1fico top-of-funnel" },
          { title: "Plan de enlazado interno", description: "Estructura estrat\u00e9gica de enlaces internos que conecta contenido con p\u00e1ginas de producto y categor\u00eda" },
          { title: "Reporting mensual", description: "Rankings, tr\u00e1fico, atribuci\u00f3n de ingresos y m\u00e9tricas de rendimiento del contenido" },
          { title: "Revisi\u00f3n estrat\u00e9gica trimestral", description: "Revisi\u00f3n estrat\u00e9gica del rendimiento del contenido con prioridades de keywords actualizadas y hoja de ruta" },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "\u00bfQu\u00e9 tipo de contenido escriben?",
          answer:
            "Escribimos descripciones de productos, contenido de p\u00e1ginas de categor\u00eda, art\u00edculos de blog, gu\u00edas de compra, comparativas y cualquier otro tipo de contenido que genere tr\u00e1fico org\u00e1nico y conversiones para tiendas online. Consulta nuestra [gu\u00eda de contenido SEO e-commerce](/blog/ecommerce-seo-content) para ejemplos de contenido que funciona.",
        },
        {
          question: "\u00bfEscriben en idiomas distintos al ingl\u00e9s?",
          answer:
            "S\u00ed. Contamos con redactores nativos en ingl\u00e9s, neerland\u00e9s, alem\u00e1n, sueco, noruego y dan\u00e9s. Para otros idiomas, trabajamos con partners de traducci\u00f3n.",
        },
        {
          question: "\u00bfC\u00f3mo aseguran la calidad del contenido?",
          answer:
            "Cada pieza pasa por [investigaci\u00f3n de palabras clave](/keyword-research), an\u00e1lisis competitivo, redacci\u00f3n experta, revisi\u00f3n editorial y optimizaci\u00f3n SEO. Nos enfocamos en se\u00f1ales E-E-A-T y valor real para el lector.",
        },
        {
          question: "\u00bfCu\u00e1ntas piezas de contenido entregan al mes?",
          answer:
            "Depende de tu paquete y objetivos. Los compromisos t\u00edpicos incluyen de 4 a 12 art\u00edculos de blog al mes m\u00e1s optimizaci\u00f3n continua de p\u00e1ginas de producto y categor\u00eda.",
        },
        {
          question: "\u00bfPueden optimizar contenido existente?",
          answer:
            "Por supuesto. Auditamos tu contenido existente, identificamos victorias r\u00e1pidas y optimizamos p\u00e1ginas con bajo rendimiento antes de crear contenido nuevo. A menudo el ROI m\u00e1s r\u00e1pido viene de mejorar lo que ya tienes. Nuestro [servicio de auditor\u00eda SEO](/seo-audit) incluye un an\u00e1lisis completo de brechas de contenido.",
        },
        {
          question: "\u00bfCu\u00e1nto tarda el contenido en posicionarse?",
          answer:
            "El contenido nuevo suele mostrar se\u00f1ales de posicionamiento en 4-8 semanas. El tr\u00e1fico significativo suele llegar en 2-4 meses, dependiendo de la dificultad de las palabras clave y tu autoridad de dominio.",
        },
      ],
      miniCta: {
        heading: "\u00bfListo para escalar tu contenido?",
        subtitle:
          "Reserva una llamada estrat\u00e9gica gratuita y te mostraremos las brechas de contenido que te est\u00e1n costando tr\u00e1fico.",
      },
    },
  },
  it: {
    hero: {
      badge: "Scrittura contenuti",
      heading: "Contenuti SEO che trasformano i visitatori in acquirenti",
      subtitle:
        "Scriviamo contenuti che si posizionano e convertono per gli e-commerce. Dalle descrizioni prodotto alle guide all\u2019acquisto - ogni parola \u00e8 ottimizzata per ricerca e vendite.",
      ctaText: "Prenota una call strategia contenuti",
    },
    trustBar: "Oltre 20 brand e-commerce si affidano ai nostri contenuti per generare fatturato organico",
    sections: [
      {
        type: "stats",
        badge: "Track record",
        heading: "Contenuti che portano risultati",
        subtitle: "Numeri reali dai nostri progetti di contenuto e-commerce. Nessuna selezione.",
        stats: [
          { value: "8+", label: "Anni di contenuto e-commerce" },
          { value: "12 M\u20ac+", label: "Fatturato generato dai contenuti" },
          { value: "50+", label: "Store scalati con i contenuti" },
          { value: "140%", label: "Aumento medio del traffico" },
        ],
      },
      {
        type: "benefits",
        badge: "Cosa ottieni",
        heading: "Contenuti che si posizionano e convertono",
        benefits: [
          {
            title: "Descrizioni prodotto",
            description:
              "Descrizioni prodotto uniche e ottimizzate per le keyword che aiutano le tue pagine a posizionarsi e convincono gli acquirenti.",
          },
          {
            title: "Contenuti per pagine categoria",
            description:
              "Testi strategici per le pagine collezione che mirano a keyword ad alta intenzione d\u2019acquisto e migliorano la rilevanza tematica.",
          },
          {
            title: "Articoli blog e guide",
            description:
              "Contenuti long-form che intercettano query informative e portano traffico top-of-funnel al tuo store.",
          },
          {
            title: "Guide all\u2019acquisto",
            description:
              "Guide comparative e best-of che intercettano ricerche con intento commerciale e indirizzano traffico verso i tuoi prodotti.",
          },
          {
            title: "Brief dei contenuti",
            description:
              "Brief dettagliati con keyword target, analisi dell\u2019intento di ricerca, gap competitivi e struttura dei contenuti.",
          },
          {
            title: "Piano editoriale",
            description:
              "Un calendario di pubblicazione strategico allineato con trend stagionali, lanci prodotto e opportunit\u00e0 keyword.",
          },
        ],
      },
      {
        type: "process",
        badge: "Il processo",
        heading: "Come creiamo contenuti che performano",
        process: [
          {
            number: "01",
            title: "Ricerca keyword",
            description:
              "Identifichiamo opportunit\u00e0 di contenuto ad alto valore basate su volume di ricerca, intento e panorama competitivo.",
          },
          {
            number: "02",
            title: "Briefing dei contenuti",
            description:
              "Brief dettagliati con keyword target, struttura dei titoli, analisi competitiva e linee guida per i contenuti.",
          },
          {
            number: "03",
            title: "Scrittura e revisione",
            description:
              "I nostri copywriter specializzati in e-commerce creano contenuti ottimizzati. Tu rivedi e approvi prima della pubblicazione.",
          },
          {
            number: "04",
            title: "Pubblicazione e monitoraggio",
            description:
              "Gestiamo la pubblicazione, monitoriamo i posizionamenti e ottimizziamo in base ai dati di performance per massimizzare i risultati.",
          },
        ],
      },
      {
        type: "caseStudies",
        badge: "Casi studio",
        heading: "Strategie di contenuto che generano fatturato",
        subtitle: "Esempi concreti di come le nostre strategie di contenuto hanno generato crescita misurabile per i clienti.",
        caseStudies: [
          {
            badge: "Moda \u00B7 Strategia dei contenuti",
            title: "Revisione dei contenuti di un brand di moda",
            image: "/images/framer/fyAPXyjHaJjly5rybkvJY6xZQkQ.png",
            metrics: [
              { value: "+320%", label: "Traffico organico" },
              { value: "85+", label: "Pagine in Top 10" },
              { value: "9 mesi", label: "Tempistica" },
            ],
            quote: "La loro strategia di contenuto ha completamente trasformato il nostro canale organico, da secondario a principale generatore di fatturato.",
            quoteAuthor: "Direttore digitale, Brand di moda europeo",
            href: "/cases",
          },
          {
            badge: "Salute & Benessere \u00B7 Strategia blog",
            title: "Crescita del fatturato tramite blog",
            image: "/images/framer/dsId62uNnnWBWAr5Vi1Z5UqiQ.png",
            metrics: [
              { value: "+540%", label: "Traffico del blog" },
              { value: "1,2 M\u20ac", label: "Fatturato attribuito" },
              { value: "12 mesi", label: "Tempistica" },
            ],
            quote: "Le guide all\u2019acquisto e i contenuti educativi che hanno creato sono diventate le nostre landing page organiche con il pi\u00f9 alto tasso di conversione.",
            quoteAuthor: "CEO, Store Salute & Benessere",
            href: "/cases",
          },
        ],
        ctaText: "Vedi tutti i casi studio",
        ctaHref: "/cases",
      },
      {
        type: "tips",
        badge: "Consigli degli esperti",
        heading: "7 consigli di scrittura per il successo e-commerce",
        subtitle: "Consigli pratici dal nostro team contenuti per aiutare il tuo e-commerce a posizionarsi e convertire.",
        tips: [
          {
            number: "01",
            title: "Scrivi per l\u2019intento di ricerca, non solo per le keyword",
            body: "Ogni contenuto deve corrispondere all\u2019intento del ricercatore. Una pagina prodotto deve convertire, una guida all\u2019acquisto deve confrontare, un articolo blog deve educare. Corrispondere all\u2019intento \u00e8 il fattore pi\u00f9 importante per il posizionamento su Google.",
            href: "/academy/keyword-research-for-ecommerce",
            hrefLabel: "Guida alla ricerca keyword",
          },
          {
            number: "02",
            title: "Investi nel contenuto delle pagine categoria",
            body: "La maggior parte degli e-commerce lascia le pagine categoria come semplici griglie di prodotti. Aggiungere 300-500 parole di contenuto unico e ottimizzato pu\u00f2 trasformare pagine deboli in potenze di posizionamento.",
            href: "/academy/category-page-seo",
            hrefLabel: "Guida SEO pagine categoria",
          },
          {
            number: "03",
            title: "Crea descrizioni prodotto che vendono e si posizionano",
            body: "Evita le descrizioni del produttore. Scrivi descrizioni uniche che integrino naturalmente le keyword, evidenzino i benefici e affrontino le obiezioni comuni. Google premia i contenuti unici, gli acquirenti premiano la scrittura persuasiva.",
          },
          {
            number: "04",
            title: "Costruisci un hub di contenuto attorno ai tuoi temi principali",
            body: "Crea pagine pilastro per le tue categorie principali e collega articoli blog, guide e comparativi. Questa struttura di link interni segnala autorit\u00e0 tematica a Google.",
          },
          {
            number: "05",
            title: "Usa i dati per guidare il tuo piano editoriale",
            body: "Non indovinare su cosa scrivere. Usa strumenti di ricerca keyword, dati di Search Console e analisi competitiva per identificare i gap di contenuto. Prioritizza per volume, concorrenza e intento commerciale.",
          },
          {
            number: "06",
            title: "Ottimizza i contenuti esistenti prima di crearne di nuovi",
            body: "Audita i contenuti esistenti per pagine sotto-performanti vicine alla prima pagina. Aggiornare titoli, aggiungere sezioni e migliorare i link interni spesso porta risultati pi\u00f9 rapidi della creazione di nuovi contenuti.",
            href: "/seo-audit",
            hrefLabel: "Ottieni un audit dei contenuti",
          },
          {
            number: "07",
            title: "Misura il ROI dei contenuti, non solo i posizionamenti",
            body: "Monitora l\u2019attribuzione del fatturato, non solo il traffico. Configura analytics e-commerce avanzato per vedere quali contenuti generano acquisti, aggiunte al carrello e conversioni assistite.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Approfondimento contenuti",
        heading: "Descrizioni prodotto vs contenuti SEO: cosa genera fatturato",
        subtitle: "Entrambi contano, ma svolgono ruoli diversi nella tua strategia di contenuto e-commerce.",
        richTextBlocks: [
          {
            heading: "Il ruolo delle descrizioni prodotto",
            body: "Le descrizioni prodotto convertono gli acquirenti gi\u00e0 sul tuo sito. Devono essere uniche, persuasive e ottimizzate per posizionarsi nei risultati prodotto di Google. Buone descrizioni riducono i resi, aumentano il tasso di aggiunta al carrello e differenziano il tuo store.",
          },
          {
            heading: "Il ruolo dei contenuti SEO",
            body: "Articoli blog, guide all\u2019acquisto e contenuti educativi intercettano gli acquirenti prima nel percorso d\u2019acquisto. Costruiscono autorit\u00e0 tematica, guadagnano backlink naturalmente e creano punti d\u2019ingresso per clienti che non conoscono ancora il tuo brand.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Perch\u00e9 la strategia di contenuto conta",
        heading: "Perch\u00e9 il tuo e-commerce ha bisogno di una strategia di contenuto dedicata",
        subtitle: "Senza strategia, pubblichi contenuti sperando nel meglio. La speranza non \u00e8 un piano di crescita.",
        richTextBlocks: [
          {
            heading: "Cosa succede senza una strategia di contenuto",
            body: "Articoli blog casuali senza vera domanda di ricerca, descrizioni prodotto copiate dal produttore, pagine categoria senza contenuto unico e nessuna struttura di link interni. Il risultato: segnali di contenuto debole per Google e traffico organico che ristagna.",
          },
          {
            heading: "Cosa offre una strategia di contenuto dedicata",
            body: "Una mappa keyword collegata al tuo catalogo prodotti, un piano editoriale guidato dai dati, contenuti per ogni fase del funnel d\u2019acquisto e un motore di traffico organico che riduce la dipendenza dalle ads a pagamento. Costruiamo strategie di contenuto specificamente per l\u2019e-commerce.",
          },
        ],
      },
      {
        type: "team",
        badge: "Il team",
        heading: "Il team",
        teamLead: {
          name: "Fabian van Til",
          role: "Strategia & Innovazione",
          bio: "Fabian definisce la strategia di ogni progetto di contenuto. 8+ anni di esperienza in SEO e-commerce nei settori moda, salute, beauty e arredamento. Unisce strategia di crescita e innovazione SEO orientata ai contenuti.",
          image: "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "SEO tecnico & On-Page",
            bio: "Dimitar progetta le fondamenta tecniche e on-page che fanno posizionare i contenuti. Specializzato in architettura del sito, dati strutturati e strategie di link interni che amplificano le performance dei contenuti.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://www.linkedin.com/in/dimitar-georgiev-seo/",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Link Building",
            bio: "Martinijan gestisce l\u2019acquisizione di link e le digital PR su larga scala. Costruisce profili di backlink che potenziano l\u2019autorit\u00e0 dei contenuti per keyword e-commerce competitive.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "Contenuti, Link Building & PR",
            bio: "Gjorgi elabora strategie di contenuto, ottimizzazioni on-page e campagne di link building e PR. Specializzato in pianificazione editoriale, ricerca keyword, ottimizzazione dei contenuti prodotto e campagne di outreach per e-commerce.",
            image: "/images/framer/gjorgi-jovev.png",
            linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Deliverable",
        heading: "Cosa ricevi ogni mese",
        subtitle: "Deliverable trasparenti legati ai tuoi obiettivi di fatturato. Niente fronzoli, niente metriche di vanit\u00e0.",
        deliverables: [
          { title: "Audit dei contenuti", description: "Analisi completa dei gap di contenuto con opportunit\u00e0 di ottimizzazione prioritizzate" },
          { title: "Piano editoriale", description: "Calendario di pubblicazione guidato dai dati, allineato con opportunit\u00e0 keyword e stagionalit\u00e0" },
          { title: "Descrizioni prodotto", description: "Testi prodotto unici e ottimizzati SEO che si posizionano e convertono" },
          { title: "Contenuti categoria", description: "Testi strategici per pagine collezione mirati a keyword ad alta intenzione" },
          { title: "Strategia blog e articoli", description: "Articoli e guide mirati a keyword per intercettare traffico top-of-funnel" },
          { title: "Piano di link interni", description: "Struttura strategica di link interni che collega contenuti a pagine prodotto e categoria" },
          { title: "Report mensile", description: "Posizionamenti, traffico, attribuzione del fatturato e metriche di performance dei contenuti" },
          { title: "Revisione strategica trimestrale", description: "Revisione strategica delle performance dei contenuti con priorit\u00e0 keyword aggiornate e roadmap" },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Che tipo di contenuti scrivete?",
          answer:
            "Scriviamo descrizioni prodotto, contenuti per pagine categoria, articoli blog, guide all\u2019acquisto, articoli comparativi e qualsiasi altro tipo di contenuto che generi traffico organico e conversioni per e-commerce. Consulta la nostra [guida ai contenuti SEO e-commerce](/blog/ecommerce-seo-content) per esempi di contenuti che performano.",
        },
        {
          question: "Scrivete anche in lingue diverse dall\u2019inglese?",
          answer:
            "S\u00ec. Abbiamo copywriter madrelingua per inglese, olandese, tedesco, svedese, norvegese e danese. Per altre lingue, collaboriamo con partner di traduzione.",
        },
        {
          question: "Come garantite la qualit\u00e0 dei contenuti?",
          answer:
            "Ogni pezzo passa attraverso [ricerca keyword](/keyword-research), analisi competitiva, scrittura esperta, revisione editoriale e ottimizzazione SEO. Ci concentriamo sui segnali E-E-A-T e sul valore reale per il lettore.",
        },
        {
          question: "Quanti contenuti consegnate al mese?",
          answer:
            "Dipende dal pacchetto e dai tuoi obiettivi. Gli impegni tipici includono 4-12 articoli blog al mese pi\u00f9 ottimizzazione continua delle pagine prodotto e categoria.",
        },
        {
          question: "Potete ottimizzare contenuti esistenti?",
          answer:
            "Assolutamente. Auditiamo i tuoi contenuti esistenti, identifichiamo le vittorie rapide e ottimizziamo le pagine sotto-performanti prima di creare nuovi contenuti. Spesso il ROI pi\u00f9 veloce viene dal miglioramento di ci\u00f2 che hai gi\u00e0. Il nostro [servizio di audit SEO](/seo-audit) include un\u2019analisi completa dei gap di contenuto.",
        },
        {
          question: "Quanto tempo prima che i contenuti si posizionino?",
          answer:
            "I nuovi contenuti iniziano tipicamente a mostrare segnali di posizionamento entro 4-8 settimane. Traffico significativo segue generalmente entro 2-4 mesi, a seconda della difficolt\u00e0 delle keyword e della tua autorit\u00e0 di dominio.",
        },
      ],
      miniCta: {
        heading: "Pronto a scalare i tuoi contenuti?",
        subtitle:
          "Prenota una call strategica gratuita e ti mostreremo le lacune di contenuto che ti stanno costando traffico.",
      },
    },
  },
  nl: {
    hero: {
      badge: "Content schrijven",
      heading: "SEO-content die bezoekers omzet in kopers",
      subtitle:
        "Wij schrijven content die rankt en converteert voor webshops. Van productbeschrijvingen tot koopgidsen - elk woord is geoptimaliseerd voor zoeken en verkoop.",
      ctaText: "Boek een contentstrategiegesprek",
    },
    trustBar: "20+ e-commercemerken vertrouwen op onze content voor organische omzetgroei",
    sections: [
      {
        type: "stats",
        badge: "Track record",
        heading: "Content die resultaat levert",
        subtitle: "Echte cijfers uit onze e-commerce contentprojecten. Geen selectief kiezen.",
        stats: [
          { value: "8+", label: "Jaar e-commerce content" },
          { value: "\u20ac12M+", label: "Omzet gegenereerd door content" },
          { value: "50+", label: "Webshops geschaald met content" },
          { value: "140%", label: "Gem. verkeersstijging" },
        ],
      },
      {
        type: "benefits",
        badge: "Wat je krijgt",
        heading: "Content die rankt en converteert",
        benefits: [
          {
            title: "Productbeschrijvingen",
            description:
              "Unieke, keyword-rijke productbeschrijvingen die je pagina\u2019s helpen ranken en shoppers overtuigen om te kopen.",
          },
          {
            title: "Categoriepagina-content",
            description:
              "Strategische collectiepagina-teksten die gericht zijn op high-intent zoekwoorden en de topicale relevantie verbeteren.",
          },
          {
            title: "Blogartikelen & gidsen",
            description:
              "Longform content die informatieve zoekopdrachten vangt en top-of-funnel verkeer naar je webshop stuurt.",
          },
          {
            title: "Koopgidsen",
            description:
              "Vergelijkings- en best-of-gidsen die commerci\u00eble zoekopdrachten vangen en verkeer naar je producten leiden.",
          },
          {
            title: "Contentbriefings",
            description:
              "Gedetailleerde briefings met target-keywords, zoekintentanalyse, concurrentiegaten en contentstructuur.",
          },
          {
            title: "Contentkalender",
            description:
              "Een strategisch publicatieschema afgestemd op seizoenstrends, productlanceringen en zoekwoordkansen.",
          },
        ],
      },
      {
        type: "process",
        badge: "Het proces",
        heading: "Hoe wij content cre\u00ebren die presteert",
        process: [
          {
            number: "01",
            title: "Zoekwoordonderzoek",
            description:
              "Wij identificeren waardevolle contentmogelijkheden op basis van zoekvolume, intentie en je concurrentielandschap.",
          },
          {
            number: "02",
            title: "Contentbriefing",
            description:
              "Gedetailleerde briefings met target-keywords, koppenstructuur, concurrentieanalyse en contentrichtlijnen.",
          },
          {
            number: "03",
            title: "Schrijven & review",
            description:
              "Onze e-commerce-gespecialiseerde schrijvers cre\u00ebren geoptimaliseerde content. Jij reviewt en keurt goed voordat iets live gaat.",
          },
          {
            number: "04",
            title: "Publiceren & monitoren",
            description:
              "Wij verzorgen de publicatie, monitoren rankings en optimaliseren op basis van prestatiedata om resultaten te maximaliseren.",
          },
        ],
      },
      {
        type: "caseStudies",
        badge: "Casestudies",
        heading: "Contentstrategieën die omzet genereren",
        subtitle: "Concrete resultaten van onze e-commerce contentprojecten.",
        caseStudies: [
          {
            badge: "Mode \u00B7 Contentstrategie",
            title: "Content-herziening van een modemerk",
            image: "/images/framer/fyAPXyjHaJjly5rybkvJY6xZQkQ.png",
            metrics: [
              { value: "+320%", label: "Organisch verkeer" },
              { value: "85+", label: "Pagina\u2019s in Top 10" },
              { value: "9 mnd", label: "Tijdsbestek" },
            ],
            quote: "Hun contentstrategie heeft ons organische kanaal volledig getransformeerd van bijzaak naar onze primaire omzetbron.",
            quoteAuthor: "Hoofd Digital, Europees modemerk",
            href: "/cases",
          },
          {
            badge: "Gezondheid & Welzijn \u00B7 Blogstrategie",
            title: "Bloggedreven omzetgroei",
            image: "/images/framer/dsId62uNnnWBWAr5Vi1Z5UqiQ.png",
            metrics: [
              { value: "+540%", label: "Blogverkeer" },
              { value: "\u20ac1,2M", label: "Toegeschreven omzet" },
              { value: "12 mnd", label: "Tijdsbestek" },
            ],
            quote: "De koopgidsen en educatieve content die ze maakten werden onze best converterende organische landingspagina\u2019s.",
            quoteAuthor: "CEO, Gezondheids- & welzijnswebshop",
            href: "/cases",
          },
        ],
        ctaText: "Bekijk alle casestudies",
        ctaHref: "/cases",
      },
      {
        type: "tips",
        badge: "Expertinzichten",
        heading: "7 contenttips voor e-commerce succes",
        subtitle: "Praktische adviezen van ons contentteam om je webshop te helpen ranken en converteren.",
        tips: [
          {
            number: "01",
            title: "Schrijf voor zoekintentie, niet alleen voor keywords",
            body: "Elk stuk content moet overeenkomen met de intentie van de zoeker. Een productpagina moet converteren, een koopgids moet vergelijken, een blogartikel moet informeren. Intentie matchen is de belangrijkste factor voor Google-rankings.",
            href: "/academy/keyword-research-for-ecommerce",
            hrefLabel: "Zoekwoordonderzoek-gids",
          },
          {
            number: "02",
            title: "Investeer in categoriepagina-content",
            body: "De meeste webshops laten categoriepagina\u2019s als kale productgrids staan. 300-500 woorden unieke, keyword-geoptimaliseerde content toevoegen kan dunne pagina\u2019s transformeren in rankingkrachtpatsers.",
            href: "/academy/category-page-seo",
            hrefLabel: "Categoriepagina SEO-gids",
          },
          {
            number: "03",
            title: "Maak productbeschrijvingen die verkopen en ranken",
            body: "Vermijd fabrikantsteksten. Schrijf unieke productbeschrijvingen die keywords natuurlijk bevatten, voordelen boven kenmerken benadrukken en veelvoorkomende bezwaren adresseren.",
          },
          {
            number: "04",
            title: "Bouw een contenthub rondom je kernonderwerpen",
            body: "Maak pillarpagina\u2019s voor je hoofdcategorie\u00ebn en link ondersteunende blogartikelen, gidsen en vergelijkingsartikelen eraan. Deze interne linkstructuur signaleert topicale autoriteit aan Google.",
          },
          {
            number: "05",
            title: "Gebruik data om je redactiekalender te sturen",
            body: "Raad niet waarover je moet schrijven. Gebruik keyword-tools, Search Console-data en concurrentieanalyse om contentgaten te identificeren. Prioriteer op zoekvolume, concurrentie en commerci\u00eble intentie.",
          },
          {
            number: "06",
            title: "Optimaliseer bestaande content voordat je nieuwe maakt",
            body: "Audit je bestaande content op onderpresterende pagina\u2019s dicht bij pagina \u00e9\u00e9n. Titels updaten, secties toevoegen en interne links verbeteren levert vaak snellere resultaten dan volledig nieuwe content.",
            href: "/seo-audit",
            hrefLabel: "Krijg een content-audit",
          },
          {
            number: "07",
            title: "Meet content-ROI, niet alleen rankings",
            body: "Track omzetattributie, niet alleen verkeer. Stel geavanceerde e-commerce analytics in om te zien welke content aankopen, toevoegingen aan winkelwagen en geassisteerde conversies genereert.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Content-verdieping",
        heading: "Productbeschrijvingen vs SEO-content: wat genereert omzet",
        subtitle: "Beide zijn belangrijk, maar ze vervullen verschillende rollen in je e-commerce contentstrategie.",
        richTextBlocks: [
          {
            heading: "De rol van productbeschrijvingen",
            body: "Productbeschrijvingen converteren shoppers die al op je site zijn. Ze moeten uniek, overtuigend en keyword-geoptimaliseerd zijn om te ranken in Googles productresultaten. Goede productbeschrijvingen verminderen retouren, verhogen de winkelwagen-ratio en differenti\u00ebren je webshop.",
          },
          {
            heading: "De rol van SEO-content",
            body: "Blogartikelen, koopgidsen en educatieve content vangen shoppers eerder in het kooptraject. Ze bouwen topicale autoriteit, verdienen backlinks op natuurlijke wijze en cre\u00ebren instappunten voor klanten die je merk nog niet kennen.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Waarom contentstrategie ertoe doet",
        heading: "Waarom je webshop een dedicated contentstrategie nodig heeft",
        subtitle: "Zonder strategie publiceer je content en hoop je op het beste. Hoop is geen groeiplan.",
        richTextBlocks: [
          {
            heading: "Wat er gebeurt zonder contentstrategie",
            body: "Willekeurige blogartikelen zonder echte zoekvraag, productbeschrijvingen gekopieerd van de fabrikant, categoriepagina\u2019s zonder unieke content en geen interne linkstructuur. Het resultaat: thin content-signalen naar Google en organisch verkeer dat stagneert.",
          },
          {
            heading: "Wat een dedicated contentstrategie oplevert",
            body: "Een duidelijke keyword-map gekoppeld aan je productcatalogus, een datagedreven redactiekalender, content die elke fase van de kooptrechter target en een groeiend organisch verkeersmotor dat je afhankelijkheid van betaalde advertenties vermindert. Wij bouwen contentstrategieën specifiek voor e-commerce.",
          },
        ],
      },
      {
        type: "team",
        badge: "Het team",
        heading: "Het team",
        teamLead: {
          name: "Fabian van Til",
          role: "Strategie & Innovatie",
          bio: "Fabian leidt de strategische richting van alle contentprojecten. Met 8+ jaar e-commerce SEO-ervaring in de sectoren mode, gezondheid, beauty en wonen combineert hij groeistrategie met contentgedreven SEO-innovatie.",
          image: "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "Technisch & On-Page SEO",
            bio: "Dimitar ontwerpt de technische fundamenten en on-page optimalisaties die content laten ranken. Hij is gespecialiseerd in site-architectuur, structured data en interne linkstrategieën die contentprestaties versterken.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://www.linkedin.com/in/dimitar-georgiev-seo/",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Linkbuilding",
            bio: "Martinijan beheerst linkacquisitie en digitale PR op schaal. Hij bouwt backlinkprofielen die de contentautoriteit versterken voor competitieve e-commerce zoekwoorden.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "Content, Linkbuilding & PR",
            bio: "Gjorgi ontwikkelt contentstrategieën, on-page optimalisaties en linkbuilding- en PR-campagnes die ranken en converteren. Hij is gespecialiseerd in redactionele planning, zoekwoordonderzoek, productcontent-optimalisatie en outreach voor webshops.",
            image: "/images/framer/gjorgi-jovev.png",
            linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Deliverables",
        heading: "Wat je elke maand ontvangt",
        subtitle: "Transparante deliverables gekoppeld aan je omzetdoelen. Geen opvulling, geen ijdelheidsstatistieken.",
        deliverables: [
          { title: "Content-audit", description: "Volledige contentgap-analyse met geprioriteerde optimalisatiekansen" },
          { title: "Redactiekalender", description: "Datagedreven publicatieschema afgestemd op zoekwoordkansen en seizoensinvloeden" },
          { title: "Productbeschrijvingen", description: "Unieke, SEO-geoptimaliseerde productteksten die ranken en converteren" },
          { title: "Categoriecontent", description: "Strategische collectiepagina-teksten gericht op high-intent zoekwoorden" },
          { title: "Blogstrategie & artikelen", description: "Keyword-gerichte blogartikelen en koopgidsen voor top-of-funnel verkeer" },
          { title: "Intern linkplan", description: "Strategische interne linkstructuur die content verbindt met product- en categoriepagina\u2019s" },
          { title: "Maandrapport", description: "Rankings, verkeer, omzetattributie en contentprestatiemetrieken" },
          { title: "Kwartaalstrategie-review", description: "Strategische review van contentprestaties met bijgewerkte zoekwoordprioriteiten en contentroadmap" },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Welk type content schrijven jullie?",
          answer:
            "Wij schrijven productbeschrijvingen, categoriepagina-content, blogartikelen, koopgidsen, vergelijkingsartikelen en elk ander contenttype dat organisch verkeer en conversies genereert voor webshops. Bekijk onze [e-commerce SEO-contentgids](/blog/ecommerce-seo-content) voor voorbeelden van content die presteert.",
        },
        {
          question: "Schrijven jullie ook in andere talen dan Engels?",
          answer:
            "Ja. Wij hebben native schrijvers voor Engels, Nederlands, Duits, Zweeds, Noors en Deens. Voor andere talen werken we samen met vertaalpartners.",
        },
        {
          question: "Hoe waarborgen jullie de contentkwaliteit?",
          answer:
            "Elk stuk doorloopt [zoekwoordonderzoek](/keyword-research), concurrentieanalyse, expertschrijven, redactionele review en SEO-optimalisatie. Wij focussen op E-E-A-T-signalen en echte waarde voor de lezer.",
        },
        {
          question: "Hoeveel content leveren jullie per maand?",
          answer:
            "Dit hangt af van je pakket en doelen. Typische trajecten omvatten 4-12 blogartikelen per maand plus doorlopende product- en categoriepagina-optimalisatie.",
        },
        {
          question: "Kunnen jullie bestaande content optimaliseren?",
          answer:
            "Absoluut. Wij auditen je bestaande content, identificeren quick wins en optimaliseren onderpresterende pagina\u2019s voordat we nieuwe content cre\u00ebren. Vaak komt de snelste ROI uit het verbeteren van wat je al hebt. Onze [SEO-auditdienst](/seo-audit) bevat een volledige contentgap-analyse.",
        },
        {
          question: "Hoe lang duurt het voordat content gaat ranken?",
          answer:
            "Nieuwe content begint doorgaans binnen 4-8 weken rankingsignalen te tonen. Significant verkeer volgt meestal binnen 2-4 maanden, afhankelijk van zoekwoordmoeilijkheid en je domeinautoriteit.",
        },
      ],
      miniCta: {
        heading: "Klaar om je content te schalen?",
        subtitle:
          "Boek een gratis strategiegesprek en wij laten je de contentgaten zien die je verkeer kosten.",
      },
    },
  },
};
