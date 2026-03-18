import type { Locale } from "../../config";
import type { ServicePageProps } from "@/components/service/ServicePageTemplate";

export const fashionSeoData: Record<Locale, ServicePageProps> = {
  en: {
    hero: {
      badge: "Fashion SEO",
      heading: "Fashion SEO That Turns Browsers Into Buyers",
      subtitle:
        "We help fashion and apparel brands rank for the searches that drive revenue - from seasonal trends to style queries and collection-level intent.",
      ctaText: "Book a Fashion SEO Strategy Call",

    },
    trustBar: "Trusted by 20+ fashion brands scaling organic revenue",
    sections: [
      {
        type: "stats",
        heading: "Our Fashion SEO Track Record",
        stats: [
          { value: "20+", label: "Fashion Brands Scaled" },
          { value: "3x", label: "Avg. Organic Revenue Growth" },
          { value: "45+", label: "Page 1 Keywords per Client" },
          { value: "210%", label: "Avg. Collection Page Traffic Lift" },
        ],
      },
      {
        type: "benefits",
        badge: "Buyer Intent",
        heading: "How Fashion Shoppers Search Online",
        subtitle:
          "Fashion search behavior is seasonal, visual, and trend-driven. We understand the intent signals that matter for your niche.",
        benefits: [
          {
            title: "Seasonal Search Spikes",
            description:
              "Spring collections, summer dresses, winter coats - seasonal demand drives massive traffic. We align your content calendar months in advance.",
          },
          {
            title: "Visual Search Rising",
            description:
              "Image search and visual discovery are growing fast. We optimize product images, alt text, and structured data for visual search engines.",
          },
          {
            title: "Long-Tail Style Queries",
            description:
              "Shoppers search for specific styles - oversized linen blazer, high-waisted wide leg jeans. We capture these high-converting long-tail queries.",
          },
          {
            title: "Brand vs. Generic Splits",
            description:
              "Some shoppers search by brand, others by style. We capture both segments with targeted collection pages and content.",
          },
          {
            title: "Collection-Level Intent",
            description:
              "New arrivals, sale items, bestsellers - collection pages drive significant traffic. We optimize them for maximum visibility.",
          },
          {
            title: "Trend-Driven Content Gaps",
            description:
              "Fashion trends create sudden search demand. We monitor trends and create content quickly to capture emerging style searches.",
          },
        ],
      },
      {
        type: "process",
        badge: "Common Blockers",
        heading: "What Holds Fashion Brands Back in Search",
        process: [
          {
            number: "01",
            title: "Size & Color Variant Duplication",
            description:
              "Every size and color combination creates potential duplicate content. Without proper canonicalization, Google wastes crawl budget on redundant pages.",
          },
          {
            number: "02",
            title: "Seasonal Inventory Churn",
            description:
              "Products come and go each season, creating broken links and orphaned pages. We manage URL lifecycle to preserve link equity and rankings.",
          },
          {
            number: "03",
            title: "Image-Heavy Slow Pages",
            description:
              "High-resolution lookbook images and product galleries tank page speed. We optimize for Core Web Vitals without sacrificing visual quality.",
          },
          {
            number: "04",
            title: "Thin Category Descriptions",
            description:
              "Default collection pages have little or no text content. We add optimized descriptions that target high-intent keywords and improve relevance.",
          },
        ],
      },
      {
        type: "benefits",
        badge: "Our Approach",
        heading: "How We Grow Fashion Brands Organically",
        subtitle:
          "We combine content strategy, technical SEO, and authority building to drive sustainable organic growth for fashion brands.",
        benefits: [
          {
            title: "Content Strategy",
            description:
              "Style guides, trend roundups, and collection pages optimized for seasonal and evergreen search demand. We create content that ranks and converts.",
          },
          {
            title: "Technical SEO",
            description:
              "Variant canonicalization, URL lifecycle management, image optimization, and structured data. We fix the technical issues holding your store back.",
          },
          {
            title: "Authority Building",
            description:
              "Digital PR, fashion publication outreach, and strategic link building. We grow your domain authority with relevant, high-quality backlinks.",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Deliverables",
        heading: "What We Deliver for Fashion Brands",
        deliverables: [
          {
            title: "Collection Optimization",
            description: "Category pages + internal linking",
          },
          {
            title: "Lookbook Content",
            description: "Visual content that drives traffic",
          },
          {
            title: "Trend Guides",
            description: "Seasonal content for emerging demand",
          },
          {
            title: "Technical Fixes",
            description: "Speed, schema, crawl optimization",
          },
          {
            title: "Schema Markup",
            description: "Product, breadcrumb, and organization JSON-LD, validated and monitored",
          },
          {
            title: "Link Building",
            description: "Quality backlinks from fashion publications and relevant domains",
          },
          {
            title: "Monthly Report",
            description: "Rankings, organic traffic, revenue attribution, and action plan",
          },
          {
            title: "Strategy Call",
            description: "Monthly 30-min call to review progress and align on priorities",
          },
        ],
      },
      {
        type: "benefits",
        badge: "Content Types",
        heading: "Pages We Build for Fashion Brands",
        benefits: [
          {
            title: "Collection Pages",
            description:
              "Optimized category pages with unique content, internal links, and structured data for maximum search visibility.",
          },
          {
            title: "Style Guides",
            description:
              "How-to-wear and styling guides that capture informational queries and drive product discovery.",
          },
          {
            title: "Trend Comparisons",
            description:
              "Trend analysis and comparison content that captures commercial intent from shoppers researching styles.",
          },
          {
            title: "Gift Guides",
            description:
              "Seasonal gift guides for fashion shoppers that capture high-converting commercial queries.",
          },
          {
            title: "Size Guides",
            description:
              "Detailed sizing content that reduces returns, builds trust, and captures size-related search queries.",
          },
          {
            title: "Lookbook Pages",
            description:
              "Visual editorial content that showcases collections while targeting style and trend keywords.",
          },
        ],
      },
      {
        type: "caseStudies",
        badge: "Case Studies",
        heading: "Fashion Brands We Have Helped Grow",
        caseStudies: [
          {
            badge: "Luxury Fashion",
            title: "3x Organic Revenue for a Luxury Fashion Brand",
            image: "/images/framer/QtPNuhsKVZNt3klckPPtQzUuW0.png",
            metrics: [
              { value: "3x", label: "Organic Revenue" },
              { value: "210%", label: "Traffic Increase" },
              { value: "45", label: "Page 1 Keywords" },
            ],
            quote: "They understood our brand positioning and translated it into an SEO strategy that actually drove high-value customers to our store.",
            quoteAuthor: "Head of Digital, Luxury Fashion Brand",
          },
          {
            badge: "DTC Apparel",
            title: "From Page 5 to Page 1 for a DTC Apparel Brand",
            image: "/images/framer/fyAPXyjHaJjly5rybkvJY6xZQkQ.png",
            metrics: [
              { value: "Page 1", label: "Core Keywords" },
              { value: "380%", label: "Organic Traffic" },
              { value: "$1.2M", label: "Annual Revenue Lift" },
            ],
            quote: "We went from invisible to dominating our category keywords. The team's seasonal planning was a game-changer for our business.",
            quoteAuthor: "Founder, DTC Apparel Brand",
          },
        ],
        ctaText: "View All Case Studies",
        ctaHref: "/cases",
      },
      {
        type: "tips",
        badge: "Expert Tips",
        heading: "7 Fashion SEO Tips to Boost Your Rankings",
        tips: [
          { number: "01", title: "Plan Seasonal Content 3-6 Months Ahead", body: "Fashion search demand is predictable. Build and optimize collection pages, trend guides, and style content well before each season peaks so you are already ranking when shoppers start searching." },
          { number: "02", title: "Optimize Collection Pages Like Landing Pages", body: "Category pages drive the majority of fashion ecommerce traffic. Add unique descriptions, internal links, and structured data to each collection page to maximize search visibility." },
          { number: "03", title: "Canonicalize Size and Color Variants", body: "Every size and color variant can create duplicate content. Implement proper canonical tags and URL parameter handling to consolidate ranking signals on your main product pages." },
          { number: "04", title: "Invest in Visual Search Optimization", body: "Fashion is inherently visual. Optimize product images with descriptive file names, alt text, and Product schema markup to capture traffic from Google Images and visual search engines." },
          { number: "05", title: "Create Style Guides That Rank and Convert", body: "How-to-wear and outfit inspiration content captures top-of-funnel searches and drives product discovery. Link from style guides to product pages to create a conversion pathway." },
          { number: "06", title: "Manage URL Lifecycle for Seasonal Products", body: "When products go out of stock, redirect URLs to relevant alternatives instead of returning 404s. This preserves link equity and keeps shoppers on your site." },
          { number: "07", title: "Build Authority Through Fashion PR", body: "Earn backlinks from fashion publications, style blogs, and industry directories. Topical authority signals help Google understand your brand as a trusted fashion source." },
        ],
      },
      {
        type: "richText",
        heading: "Seasonal SEO Strategy for Fashion Ecommerce",
        richTextBlocks: [
          { body: "Fashion ecommerce revolves around seasons, and your SEO strategy should too. The brands that win in organic search are the ones that plan content months before demand peaks, not the ones scrambling to publish when trends are already trending." },
          { body: "We build seasonal content calendars that align with search demand curves. Spring/summer and fall/winter collections each require dedicated landing pages, blog content, and internal linking structures that go live well before shoppers start browsing. This approach means your pages are indexed, gaining authority, and climbing the rankings before your competitors even start drafting." },
          { body: "Beyond timing, seasonal SEO for fashion requires careful URL management. Products come and go, but the search equity you have built should not disappear with last season's inventory. We implement redirect strategies, evergreen collection pages, and archive approaches that preserve your hard-won rankings year after year." },
        ],
      },
      {
        type: "richText",
        heading: "Why Fashion Brands Need Specialized Ecommerce SEO",
        richTextBlocks: [
          { body: "Generic SEO agencies treat fashion stores like any other ecommerce site. But fashion has unique challenges, seasonal inventory cycles, visual-first shopping behavior, trend-driven search spikes, and complex variant structures, that require specialized expertise." },
          { body: "A fashion SEO specialist understands that your summer dress collection page needs to be indexed by March, that size guide content reduces returns while capturing search traffic, and that your lookbook images need structured data to appear in visual search results. These are not things a generalist agency thinks about." },
          { body: "We have spent 8+ years working exclusively with ecommerce brands, and fashion is one of our deepest verticals. We know which content types drive revenue, how to handle the technical complexity of variant-heavy catalogs, and how to build authority in a competitive space where every brand is fighting for the same style keywords." },
        ],
      },
      {
        type: "team",
        badge: "The Team",
        heading: "The Team Behind Your Fashion SEO",
        teamLead: {
          name: "Fabian van Til",
          role: "Strategy & Innovation",
          bio: "Fabian leads SEO strategy for our fashion clients. 8 years of ecommerce SEO with deep experience in fashion, luxury, and apparel. He builds the seasonal and evergreen strategies that drive organic revenue for fashion brands.",
          image: "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "Technical & On-Page SEO",
            bio: "Dimitar handles the technical and on-page SEO for fashion stores. He works on variant canonicalization, image optimization, structured data for product catalogs, and site architecture that scales with seasonal collections.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://www.linkedin.com/in/dimitar-georgiev-seo/",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Link Building",
            bio: "Martinijan earns links for fashion brands through fashion publication outreach, style blog partnerships, and targeted placements. He focuses on publications that actually carry weight in fashion.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "Content, Link Building & PR",
            bio: "Gjorgi writes the content for fashion clients and runs link building and PR campaigns. He handles collection page copy, seasonal content planning, style guides, editorial calendars timed to fashion search trends, and outreach to fashion publications.",
            image: "/images/framer/gjorgi-jovev.png",
            linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Do you specialize in fashion ecommerce specifically?",
          answer:
            "Yes. We work exclusively with ecommerce brands, and fashion is one of our core verticals. We understand seasonal inventory cycles, variant management, and the visual nature of fashion search. Read our [fashion ecommerce SEO guide](/blog/fashion-ecommerce-seo) for more on our approach.",
        },
        {
          question: "How do you handle seasonal content for fashion brands?",
          answer:
            "We plan content 3-6 months ahead of each season. [Collection pages](/academy/category-page-seo), trend guides, and style content are prepared and optimized before search demand peaks - so you\u2019re already ranking when shoppers start searching. Our [content writing services](/content-writing) handle the full editorial calendar for fashion brands.",
        },
        {
          question: "Can you help with international fashion SEO?",
          answer:
            "Absolutely. We handle multi-language SEO for fashion brands selling across markets. This includes hreflang implementation, localized content, and market-specific keyword research for different regions.",
        },
        {
          question: "How do you deal with product variants in SEO?",
          answer:
            "We implement proper canonicalization for size and color variants, manage URL parameters, and ensure Google focuses on your main product pages rather than wasting crawl budget on variant URLs. Our [product page SEO guide](/academy/product-page-seo) covers variant handling in detail.",
        },
        {
          question: "How do you measure success for fashion brands?",
          answer:
            "We track organic revenue, traffic from seasonal and evergreen keywords, collection page rankings, and conversion rates. We report monthly on metrics that matter for your bottom line. Our [link building campaigns](/link-building) further amplify these results by growing your domain authority.",
        },
        {
          question: "What fashion brands do you typically work with?",
          answer:
            "We work with DTC fashion brands, sustainable clothing companies, and specialty retailers doing \u20ac500K+ in annual revenue. Our clients range from emerging designers to established fashion labels.",
        },
      ],
      miniCta: {
        heading: "Ready to Grow Your Fashion Brand?",
        subtitle:
          "Book a free strategy call and we\u2019ll show you the organic opportunities you\u2019re missing.",
      },
    },
  },
  de: {
    hero: {
      badge: "Fashion SEO",
      heading: "Fashion SEO, das Besucher in K\u00e4ufer verwandelt",
      subtitle:
        "Wir helfen Mode- und Bekleidungsmarken, f\u00fcr die Suchanfragen zu ranken, die Umsatz bringen - von saisonalen Trends \u00fcber Style-Suchanfragen bis hin zu Kollektions-Intent.",
      ctaText: "Fashion SEO-Strategiegespr\u00e4ch buchen",

    },
    trustBar: "\u00dcber 20 Modemarken vertrauen auf unser organisches Wachstum",
    sections: [
      {
        type: "stats",
        heading: "Unsere Fashion-SEO-Ergebnisse",
        stats: [
          { value: "8+", label: "Jahre E-Commerce-SEO" },
          { value: "$12M+", label: "Generierter Umsatz" },
          { value: "50+", label: "Optimierte E-Commerce-Shops" },
          { value: "140%", label: "Durchschn. Traffic-Steigerung" },
        ],
      },
      {
        type: "benefits",
        badge: "Kaufabsicht",
        heading: "Wie Mode-K\u00e4ufer online suchen",
        subtitle:
          "Mode-Suchverhalten ist saisonal, visuell und trendgetrieben. Wir verstehen die Intent-Signale, die f\u00fcr Ihre Nische z\u00e4hlen.",
        benefits: [
          {
            title: "Saisonale Suchspitzen",
            description:
              "Fr\u00fchlingskollektion, Sommerkleider, Winterm\u00e4ntel - saisonale Nachfrage treibt enormen Traffic. Wir richten Ihren Content-Kalender Monate im Voraus aus.",
          },
          {
            title: "Visuelle Suche im Aufwind",
            description:
              "Bildersuche und visuelle Entdeckung wachsen rasant. Wir optimieren Produktbilder, Alt-Texte und strukturierte Daten f\u00fcr visuelle Suchmaschinen.",
          },
          {
            title: "Long-Tail-Style-Anfragen",
            description:
              "K\u00e4ufer suchen nach bestimmten Stilen - Oversized-Leinenblazer, High-Waist-Schlaghosen. Wir erfassen diese hochkonvertierenden Long-Tail-Suchanfragen.",
          },
          {
            title: "Marke vs. generische Suchen",
            description:
              "Manche K\u00e4ufer suchen nach Marke, andere nach Stil. Wir erfassen beide Segmente mit gezielten Kollektionsseiten und Content.",
          },
          {
            title: "Kollektions-Intent",
            description:
              "Neuheiten, Sale-Artikel, Bestseller - Kollektionsseiten generieren erheblichen Traffic. Wir optimieren sie f\u00fcr maximale Sichtbarkeit.",
          },
          {
            title: "Trendgetriebene Content-L\u00fccken",
            description:
              "Modetrends erzeugen pl\u00f6tzliche Suchnachfrage. Wir beobachten Trends und erstellen schnell Content, um aufkommende Style-Suchanfragen zu erfassen.",
          },
        ],
      },
      {
        type: "process",
        badge: "H\u00e4ufige Hindernisse",
        heading: "Was Modemarken in der Suche zur\u00fckh\u00e4lt",
        process: [
          {
            number: "01",
            title: "Gr\u00f6\u00dfen- & Farbvarianten-Duplikate",
            description:
              "Jede Gr\u00f6\u00dfen- und Farbkombination erzeugt potenziellen doppelten Content. Ohne richtige Kanonisierung verschwendet Google Crawl-Budget f\u00fcr redundante Seiten.",
          },
          {
            number: "02",
            title: "Saisonaler Sortimentswechsel",
            description:
              "Produkte kommen und gehen jede Saison, was tote Links und verwaiste Seiten erzeugt. Wir managen den URL-Lebenszyklus, um Link-Equity und Rankings zu erhalten.",
          },
          {
            number: "03",
            title: "Bildlastige langsame Seiten",
            description:
              "Hochaufl\u00f6sende Lookbook-Bilder und Produktgalerien senken die Seitengeschwindigkeit. Wir optimieren f\u00fcr Core Web Vitals ohne Einbu\u00dfen bei der visuellen Qualit\u00e4t.",
          },
          {
            number: "04",
            title: "D\u00fcnne Kategoriebeschreibungen",
            description:
              "Standard-Kollektionsseiten haben wenig oder keinen Textinhalt. Wir erg\u00e4nzen optimierte Beschreibungen, die auf hochwertige Keywords abzielen und die Relevanz verbessern.",
          },
        ],
      },
      {
        type: "benefits",
        badge: "Unser Ansatz",
        heading: "Wie wir Modemarken organisch wachsen lassen",
        subtitle:
          "Wir kombinieren Content-Strategie, technisches SEO und Autorit\u00e4tsaufbau f\u00fcr nachhaltiges organisches Wachstum von Modemarken.",
        benefits: [
          {
            title: "Content-Strategie",
            description:
              "Style-Guides, Trend-Roundups und Kollektionsseiten, optimiert f\u00fcr saisonale und Evergreen-Suchnachfrage. Wir erstellen Content, der rankt und konvertiert.",
          },
          {
            title: "Technisches SEO",
            description:
              "Varianten-Kanonisierung, URL-Lifecycle-Management, Bildoptimierung und strukturierte Daten. Wir beheben die technischen Probleme, die Ihren Shop zur\u00fckhalten.",
          },
          {
            title: "Autorit\u00e4tsaufbau",
            description:
              "Digitale PR, Outreach zu Mode-Publikationen und strategischer Linkaufbau. Wir steigern Ihre Domain-Autorit\u00e4t mit relevanten, hochwertigen Backlinks.",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Leistungen",
        heading: "Was wir f\u00fcr Modemarken liefern",
        deliverables: [
          {
            title: "Kollektionsoptimierung",
            description: "Kategorieseiten + interne Verlinkung",
          },
          {
            title: "Lookbook-Content",
            description: "Visueller Content, der Traffic generiert",
          },
          {
            title: "Trend-Guides",
            description: "Saisonaler Content f\u00fcr aufkommende Nachfrage",
          },
          {
            title: "Technische Korrekturen",
            description: "Geschwindigkeit, Schema, Crawl-Optimierung",
          },
          {
            title: "Schema-Markup",
            description: "Produkt-, Breadcrumb- und Organisations-JSON-LD - validiert und \u00fcberwacht",
          },
          {
            title: "Linkaufbau",
            description: "Hochwertige Backlinks aus Mode-Publikationen und relevanten Domains",
          },
          {
            title: "Monatlicher Bericht",
            description: "Rankings, organischer Traffic, Umsatzzuordnung und Aktionsplan",
          },
          {
            title: "Strategiegespr\u00e4ch",
            description: "Monatliches 30-min-Gespr\u00e4ch zur Fortschrittspr\u00fcfung und Priorit\u00e4tenabstimmung",
          },
        ],
      },
      {
        type: "benefits",
        badge: "Content-Typen",
        heading: "Seiten, die wir f\u00fcr Modemarken erstellen",
        benefits: [
          {
            title: "Kollektionsseiten",
            description:
              "Optimierte Kategorieseiten mit einzigartigem Content, internen Links und strukturierten Daten f\u00fcr maximale Suchsichtbarkeit.",
          },
          {
            title: "Style-Guides",
            description:
              "How-to-wear- und Styling-Guides, die informationale Suchanfragen erfassen und zur Produktentdeckung f\u00fchren.",
          },
          {
            title: "Trendvergleiche",
            description:
              "Trendanalysen und Vergleichs-Content, der kommerzielle Absicht von K\u00e4ufern erfasst, die Stile recherchieren.",
          },
          {
            title: "Geschenk-Guides",
            description:
              "Saisonale Geschenk-Guides f\u00fcr Mode-K\u00e4ufer, die hochkonvertierende kommerzielle Suchanfragen erfassen.",
          },
          {
            title: "Gr\u00f6\u00dfenratgeber",
            description:
              "Detaillierte Gr\u00f6\u00dfeninhalte, die Retouren reduzieren, Vertrauen aufbauen und gr\u00f6\u00dfenbezogene Suchanfragen erfassen.",
          },
          {
            title: "Lookbook-Seiten",
            description:
              "Visuelle redaktionelle Inhalte, die Kollektionen pr\u00e4sentieren und gleichzeitig auf Style- und Trend-Keywords abzielen.",
          },
        ],
      },
      {
        type: "caseStudies",
        badge: "Fallstudien",
        heading: "Modemarken, denen wir beim Wachstum geholfen haben",
        caseStudies: [
          {
            badge: "Luxusmode",
            title: "3x organischer Umsatz f\u00fcr eine Luxus-Modemarke",
            image: "/images/framer/QtPNuhsKVZNt3klckPPtQzUuW0.png",
            metrics: [
              { value: "3x", label: "Organischer Umsatz" },
              { value: "210%", label: "Traffic-Steigerung" },
              { value: "45", label: "Seite-1-Keywords" },
            ],
            quote: "Sie haben unsere Markenpositionierung verstanden und in eine SEO-Strategie \u00fcbersetzt, die tats\u00e4chlich hochwertige Kunden in unseren Shop gebracht hat.",
            quoteAuthor: "Head of Digital, Luxus-Modemarke",
          },
          {
            badge: "DTC-Bekleidung",
            title: "Von Seite 5 auf Seite 1 f\u00fcr eine DTC-Bekleidungsmarke",
            image: "/images/framer/fyAPXyjHaJjly5rybkvJY6xZQkQ.png",
            metrics: [
              { value: "Seite 1", label: "Kern-Keywords" },
              { value: "380%", label: "Organischer Traffic" },
              { value: "$1.2M", label: "J\u00e4hrlicher Umsatzanstieg" },
            ],
            quote: "Wir sind von unsichtbar zu Top-Positionen bei unseren Kategorie-Keywords aufgestiegen. Die saisonale Planung des Teams war ein Gamechanger f\u00fcr unser Gesch\u00e4ft.",
            quoteAuthor: "Gr\u00fcnder, DTC-Bekleidungsmarke",
          },
        ],
        ctaText: "Alle Fallstudien ansehen",
        ctaHref: "/cases",
      },
      {
        type: "tips",
        badge: "Expertentipps",
        heading: "7 Fashion-SEO-Tipps f\u00fcr bessere Rankings",
        tips: [
          { number: "01", title: "Saisonalen Content 3-6 Monate im Voraus planen", body: "Mode-Suchnachfrage ist vorhersehbar. Erstellen und optimieren Sie Kollektionsseiten, Trend-Guides und Style-Content lange vor jedem Saisonpeak, damit Sie bereits ranken, wenn K\u00e4ufer mit der Suche beginnen." },
          { number: "02", title: "Kollektionsseiten wie Landingpages optimieren", body: "Kategorieseiten generieren den Gro\u00dfteil des Fashion-E-Commerce-Traffics. F\u00fcgen Sie einzigartige Beschreibungen, interne Links und strukturierte Daten zu jeder Kollektionsseite hinzu, um die Suchsichtbarkeit zu maximieren." },
          { number: "03", title: "Gr\u00f6\u00dfen- und Farbvarianten kanonisieren", body: "Jede Gr\u00f6\u00dfen- und Farbvariante kann doppelten Content erzeugen. Implementieren Sie korrekte Canonical-Tags und URL-Parameter-Handling, um Ranking-Signale auf Ihren Hauptproduktseiten zu konsolidieren." },
          { number: "04", title: "In visuelle Suchoptimierung investieren", body: "Mode ist von Natur aus visuell. Optimieren Sie Produktbilder mit beschreibenden Dateinamen, Alt-Texten und Product-Schema-Markup, um Traffic aus Google Images und visuellen Suchmaschinen zu erfassen." },
          { number: "05", title: "Style-Guides erstellen, die ranken und konvertieren", body: "How-to-wear- und Outfit-Inspirations-Content erfasst Top-of-Funnel-Suchanfragen und f\u00f6rdert die Produktentdeckung. Verlinken Sie von Style-Guides auf Produktseiten, um einen Konversionspfad zu schaffen." },
          { number: "06", title: "URL-Lebenszyklus f\u00fcr saisonale Produkte verwalten", body: "Wenn Produkte ausverkauft sind, leiten Sie URLs auf relevante Alternativen um, anstatt 404-Fehler zur\u00fcckzugeben. Das bewahrt Link-Equity und h\u00e4lt K\u00e4ufer auf Ihrer Seite." },
          { number: "07", title: "Autorit\u00e4t durch Fashion-PR aufbauen", body: "Verdienen Sie Backlinks von Mode-Publikationen, Style-Blogs und Branchenverzeichnissen. Thematische Autorit\u00e4tssignale helfen Google, Ihre Marke als vertrauensw\u00fcrdige Modequelle zu erkennen." },
        ],
      },
      {
        type: "richText",
        heading: "Saisonale SEO-Strategie f\u00fcr Fashion-E-Commerce",
        richTextBlocks: [
          { body: "Fashion-E-Commerce dreht sich um Saisons, und Ihre SEO-Strategie sollte das auch tun. Die Marken, die in der organischen Suche gewinnen, sind diejenigen, die Content Monate vor dem Nachfragepeak planen - nicht diejenigen, die hektisch publizieren, wenn Trends bereits im Trend sind." },
          { body: "Wir erstellen saisonale Content-Kalender, die an Suchnachfragekurven ausgerichtet sind. Fr\u00fchjahr/Sommer- und Herbst/Winter-Kollektionen ben\u00f6tigen jeweils eigene Landingpages, Blog-Content und interne Verlinkungsstrukturen, die weit vor dem Stichtag live gehen. So werden Ihre Seiten indexiert, gewinnen Autorit\u00e4t und klettern in den Rankings, bevor Ihre Wettbewerber \u00fcberhaupt anfangen zu entwerfen." },
          { body: "\u00dcber das Timing hinaus erfordert saisonales SEO f\u00fcr Mode ein sorgf\u00e4ltiges URL-Management. Produkte kommen und gehen, aber die aufgebaute Suchrelevanz sollte nicht mit dem Sortiment der letzten Saison verschwinden. Wir implementieren Weiterleitungsstrategien, Evergreen-Kollektionsseiten und Archivierungsans\u00e4tze, die Ihre hart erarbeiteten Rankings Jahr f\u00fcr Jahr bewahren." },
        ],
      },
      {
        type: "richText",
        heading: "Warum Modemarken spezialisiertes E-Commerce-SEO brauchen",
        richTextBlocks: [
          { body: "Generische SEO-Agenturen behandeln Mode-Shops wie jeden anderen E-Commerce-Shop. Aber Mode hat einzigartige Herausforderungen - saisonale Sortimentszyklen, visuell gepr\u00e4gtes Kaufverhalten, trendgetriebene Suchspitzen und komplexe Variantenstrukturen - die spezialisiertes Know-how erfordern." },
          { body: "Ein Fashion-SEO-Spezialist wei\u00df, dass Ihre Sommerkleid-Kollektionsseite bis M\u00e4rz indexiert sein muss, dass Gr\u00f6\u00dfenratgeber-Content Retouren reduziert und gleichzeitig Suchtraffic erfasst, und dass Ihre Lookbook-Bilder strukturierte Daten ben\u00f6tigen, um in visuellen Suchergebnissen zu erscheinen. Das sind keine Dinge, an die eine Generalistenagentur denkt." },
          { body: "Wir haben \u00fcber 8 Jahre ausschlie\u00dflich mit E-Commerce-Marken gearbeitet, und Mode ist eine unserer tiefsten Branchen. Wir wissen, welche Content-Typen Umsatz treiben, wie man die technische Komplexit\u00e4t variantenreicher Kataloge handhabt, und wie man Autorit\u00e4t in einem wettbewerbsintensiven Umfeld aufbaut, in dem jede Marke um dieselben Style-Keywords k\u00e4mpft." },
        ],
      },
      {
        type: "team",
        badge: "Das Team",
        heading: "Das Fashion-SEO-Team",
        teamLead: {
          name: "Fabian van Til",
          role: "Strategie & Innovation",
          bio: "Fabian leitet alle Fashion-SEO-Projekte strategisch. Mit \u00fcber 8 Jahren E-Commerce-SEO-Erfahrung und tiefem Know-how in Mode, Luxus und Bekleidung verbindet er Wachstumsstrategie mit technischer SEO-Innovation f\u00fcr saisonalen und Evergreen-organischen Umsatz.",
          image: "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "Technical & On-Page SEO",
            bio: "Baut die technischen SEO-Grundlagen und On-Page-Optimierungen f\u00fcr Mode-Shops. Spezialisiert auf Varianten-Kanonisierung, Bildoptimierung, strukturierte Daten f\u00fcr Produktkataloge und Seitenarchitektur, die mit saisonalen Kollektionen skaliert.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://www.linkedin.com/in/dimitar-georgiev-seo/",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Linkaufbau",
            bio: "Martinijan verantwortet Linkakquise und digitale PR f\u00fcr Modemarken. Baut Backlink-Profile durch Outreach zu Mode-Publikationen, Style-Blog-Partnerschaften und strategische Platzierungen, die die Domain-Autorit\u00e4t in wettbewerbsintensiven Modem\u00e4rkten steigern.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "Content, Linkaufbau & PR",
            bio: "Entwickelt Content-Strategien, Linkaufbau und PR f\u00fcr Modemarken, die ranken und konvertieren. Spezialisiert auf Kollektionsseiten-Optimierung, saisonale Content-Planung, Style-Guide-Erstellung und redaktionelle Kalender, die an Mode-Suchtrends ausgerichtet sind.",
            image: "/images/framer/gjorgi-jovev.png",
            linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Sind Sie auf Fashion-E-Commerce spezialisiert?",
          answer:
            "Ja. Wir arbeiten ausschlie\u00dflich mit E-Commerce-Marken, und Mode ist eine unserer Kernbranchen. Wir verstehen saisonale Sortimentszyklen, Variantenmanagement und die visuelle Natur der Modesuche. Lesen Sie unseren [Mode-E-Commerce-SEO-Leitfaden](/blog/fashion-ecommerce-seo).",
        },
        {
          question: "Wie handhaben Sie saisonalen Content f\u00fcr Modemarken?",
          answer:
            "Wir planen Content 3-6 Monate vor jeder Saison. [Kollektionsseiten](/academy/category-page-seo), Trend-Guides und Style-Content werden vorbereitet und optimiert, bevor die Suchnachfrage ihren H\u00f6hepunkt erreicht - so ranken Sie bereits, wenn K\u00e4ufer mit der Suche beginnen.",
        },
        {
          question: "K\u00f6nnen Sie bei internationalem Fashion SEO helfen?",
          answer:
            "Absolut. Wir \u00fcbernehmen mehrsprachiges SEO f\u00fcr Modemarken, die \u00fcber M\u00e4rkte hinweg verkaufen. Dazu geh\u00f6ren Hreflang-Implementierung, lokalisierter Content und marktspezifische Keyword-Recherche f\u00fcr verschiedene Regionen.",
        },
        {
          question: "Wie gehen Sie mit Produktvarianten im SEO um?",
          answer:
            "Wir implementieren korrekte Kanonisierung f\u00fcr Gr\u00f6\u00dfen- und Farbvarianten, verwalten URL-Parameter und stellen sicher, dass Google sich auf Ihre Hauptproduktseiten konzentriert, anstatt Crawl-Budget f\u00fcr Varianten-URLs zu verschwenden. Unser [Produktseiten-SEO-Leitfaden](/academy/product-page-seo) behandelt die Variantenbehandlung im Detail.",
        },
        {
          question: "Wie messen Sie den Erfolg f\u00fcr Modemarken?",
          answer:
            "Wir tracken organischen Umsatz, Traffic aus saisonalen und Evergreen-Keywords, Kollektionsseiten-Rankings und Konversionsraten. Wir berichten monatlich \u00fcber Kennzahlen, die f\u00fcr Ihr Gesch\u00e4ftsergebnis wichtig sind.",
        },
        {
          question: "Mit welchen Modemarken arbeiten Sie typischerweise?",
          answer:
            "Wir arbeiten mit DTC-Modemarken, nachhaltigen Bekleidungsunternehmen und Spezialh\u00e4ndlern mit \u00fcber 500.000 \u20ac Jahresumsatz. Unsere Kunden reichen von aufstrebenden Designern bis zu etablierten Modelabels.",
        },
      ],
      miniCta: {
        heading: "Bereit, Ihre Modemarke zu skalieren?",
        subtitle:
          "Buchen Sie ein kostenloses Strategiegespr\u00e4ch und wir zeigen Ihnen die organischen Chancen, die Sie verpassen.",
      },
    },
  },
  fr: {
    hero: {
      badge: "SEO Mode",
      heading: "SEO mode qui transforme les visiteurs en acheteurs",
      subtitle:
        "Nous aidons les marques de mode et de v\u00eatements \u00e0 se positionner sur les recherches qui g\u00e9n\u00e8rent du chiffre d\u2019affaires - des tendances saisonni\u00e8res aux requ\u00eates de style et d\u2019intention de collection.",
      ctaText: "R\u00e9server un appel strat\u00e9gique SEO mode",

    },
    trustBar: "Plus de 20 marques de mode nous font confiance pour leur croissance organique",
    sections: [
      {
        type: "stats",
        heading: "Nos r\u00e9sultats en SEO mode",
        stats: [
          { value: "8+", label: "Ann\u00e9es de SEO e-commerce" },
          { value: "$12M+", label: "Chiffre d\u2019affaires g\u00e9n\u00e9r\u00e9" },
          { value: "50+", label: "Boutiques e-commerce optimis\u00e9es" },
          { value: "140%", label: "Augmentation moy. du trafic" },
        ],
      },
      {
        type: "benefits",
        badge: "Intention d\u2019achat",
        heading: "Comment les acheteurs mode recherchent en ligne",
        subtitle:
          "Le comportement de recherche mode est saisonnier, visuel et guid\u00e9 par les tendances. Nous comprenons les signaux d\u2019intention qui comptent pour votre niche.",
        benefits: [
          { title: "Pics de recherche saisonniers", description: "Collections printemps, robes d\u2019\u00e9t\u00e9, manteaux d\u2019hiver - la demande saisonni\u00e8re g\u00e9n\u00e8re un trafic \u00e9norme. Nous alignons votre calendrier \u00e9ditorial des mois \u00e0 l\u2019avance." },
          { title: "Recherche visuelle en hausse", description: "La recherche d\u2019images et la d\u00e9couverte visuelle progressent rapidement. Nous optimisons les images produits, les textes alternatifs et les donn\u00e9es structur\u00e9es pour les moteurs de recherche visuels." },
          { title: "Requ\u00eates de style longue tra\u00eene", description: "Les acheteurs recherchent des styles sp\u00e9cifiques - blazer oversize en lin, jean taille haute \u00e9vas\u00e9. Nous captons ces requ\u00eates longue tra\u00eene \u00e0 forte conversion." },
          { title: "Marque vs. requ\u00eates g\u00e9n\u00e9riques", description: "Certains acheteurs recherchent par marque, d\u2019autres par style. Nous captons les deux segments avec des pages de collection cibl\u00e9es et du contenu." },
          { title: "Intention au niveau collection", description: "Nouveaut\u00e9s, articles en solde, best-sellers - les pages de collection g\u00e9n\u00e8rent un trafic consid\u00e9rable. Nous les optimisons pour une visibilit\u00e9 maximale." },
          { title: "Lacunes de contenu li\u00e9es aux tendances", description: "Les tendances mode cr\u00e9ent une demande de recherche soudaine. Nous surveillons les tendances et cr\u00e9ons rapidement du contenu pour capter les recherches de style \u00e9mergentes." },
        ],
      },
      {
        type: "process",
        badge: "Obstacles fr\u00e9quents",
        heading: "Ce qui freine les marques de mode dans la recherche",
        process: [
          { number: "01", title: "Duplication de variantes taille & couleur", description: "Chaque combinaison taille-couleur cr\u00e9e du contenu potentiellement duplliqu\u00e9. Sans canonicalisation correcte, Google gaspille du budget de crawl sur des pages redondantes." },
          { number: "02", title: "Rotation saisonni\u00e8re du stock", description: "Les produits vont et viennent chaque saison, cr\u00e9ant des liens cass\u00e9s et des pages orphelines. Nous g\u00e9rons le cycle de vie des URL pour pr\u00e9server l\u2019\u00e9quit\u00e9 des liens et les classements." },
          { number: "03", title: "Pages lentes charg\u00e9es d\u2019images", description: "Les images de lookbook haute r\u00e9solution et les galeries produits plombent la vitesse. Nous optimisons les Core Web Vitals sans sacrifier la qualit\u00e9 visuelle." },
          { number: "04", title: "Descriptions de cat\u00e9gories insuffisantes", description: "Les pages de collection par d\u00e9faut ont peu ou pas de contenu textuel. Nous ajoutons des descriptions optimis\u00e9es ciblant des mots-cl\u00e9s \u00e0 forte intention." },
        ],
      },
      {
        type: "benefits",
        badge: "Notre approche",
        heading: "Comment nous faisons cro\u00eetre les marques de mode de fa\u00e7on organique",
        subtitle:
          "Nous combinons strat\u00e9gie de contenu, SEO technique et construction d\u2019autorit\u00e9 pour une croissance organique durable des marques de mode.",
        benefits: [
          { title: "Strat\u00e9gie de contenu", description: "Guides de style, r\u00e9capitulatifs de tendances et pages de collection optimis\u00e9es pour la demande saisonni\u00e8re et evergreen. Nous cr\u00e9ons du contenu qui se positionne et convertit." },
          { title: "SEO technique", description: "Canonicalisation des variantes, gestion du cycle de vie des URL, optimisation des images et donn\u00e9es structur\u00e9es. Nous corrigeons les probl\u00e8mes techniques qui freinent votre boutique." },
          { title: "Construction d\u2019autorit\u00e9", description: "RP digitales, outreach vers les publications mode et link building strat\u00e9gique. Nous d\u00e9veloppons votre autorit\u00e9 de domaine avec des backlinks pertinents et de qualit\u00e9." },
        ],
      },
      {
        type: "deliverables",
        badge: "Livrables",
        heading: "Ce que nous livrons pour les marques de mode",
        deliverables: [
          { title: "Optimisation des collections", description: "Pages cat\u00e9gories + maillage interne" },
          { title: "Contenu lookbook", description: "Contenu visuel qui g\u00e9n\u00e8re du trafic" },
          { title: "Guides tendances", description: "Contenu saisonnier pour la demande \u00e9mergente" },
          { title: "Corrections techniques", description: "Vitesse, sch\u00e9ma, optimisation du crawl" },
          { title: "Balisage Schema", description: "JSON-LD produit, fil d\u2019Ariane et organisation - valid\u00e9 et surveill\u00e9" },
          { title: "Link building", description: "Backlinks de qualit\u00e9 provenant de publications mode et de domaines pertinents" },
          { title: "Rapport mensuel", description: "Classements, trafic organique, attribution de revenus et plan d\u2019action" },
          { title: "Appel strat\u00e9gique", description: "Appel mensuel de 30 min pour examiner les progr\u00e8s et aligner les priorit\u00e9s" },
        ],
      },
      {
        type: "benefits",
        badge: "Types de contenu",
        heading: "Les pages que nous cr\u00e9ons pour les marques de mode",
        benefits: [
          { title: "Pages de collection", description: "Pages cat\u00e9gories optimis\u00e9es avec contenu unique, liens internes et donn\u00e9es structur\u00e9es pour une visibilit\u00e9 maximale dans la recherche." },
          { title: "Guides de style", description: "Guides comment-porter et conseils de style qui captent les requ\u00eates informationnelles et stimulent la d\u00e9couverte de produits." },
          { title: "Comparaisons de tendances", description: "Analyses de tendances et contenu comparatif qui captent l\u2019intention commerciale des acheteurs recherchant des styles." },
          { title: "Guides cadeaux", description: "Guides cadeaux saisonniers pour les acheteurs mode qui captent des requ\u00eates commerciales \u00e0 forte conversion." },
          { title: "Guides des tailles", description: "Contenu d\u00e9taill\u00e9 sur les tailles qui r\u00e9duit les retours, renforce la confiance et capte les requ\u00eates li\u00e9es aux tailles." },
          { title: "Pages lookbook", description: "Contenu \u00e9ditorial visuel qui met en valeur les collections tout en ciblant des mots-cl\u00e9s de style et de tendance." },
        ],
      },
      {
        type: "caseStudies",
        badge: "\u00c9tudes de cas",
        heading: "Les marques de mode que nous avons aid\u00e9es \u00e0 cro\u00eetre",
        caseStudies: [
          {
            badge: "Mode luxe",
            title: "3x le chiffre d\u2019affaires organique pour une marque de mode luxe",
            image: "/images/framer/QtPNuhsKVZNt3klckPPtQzUuW0.png",
            metrics: [
              { value: "3x", label: "CA organique" },
              { value: "210%", label: "Augmentation du trafic" },
              { value: "45", label: "Mots-cl\u00e9s en page 1" },
            ],
            quote: "Ils ont compris notre positionnement de marque et l\u2019ont traduit en une strat\u00e9gie SEO qui a r\u00e9ellement amen\u00e9 des clients \u00e0 forte valeur dans notre boutique.",
            quoteAuthor: "Directeur Digital, Marque de Mode Luxe",
          },
          {
            badge: "DTC V\u00eatements",
            title: "De la page 5 \u00e0 la page 1 pour une marque de v\u00eatements DTC",
            image: "/images/framer/fyAPXyjHaJjly5rybkvJY6xZQkQ.png",
            metrics: [
              { value: "Page 1", label: "Mots-cl\u00e9s principaux" },
              { value: "380%", label: "Trafic organique" },
              { value: "$1.2M", label: "Hausse de CA annuel" },
            ],
            quote: "Nous sommes pass\u00e9s d\u2019invisibles \u00e0 dominants sur nos mots-cl\u00e9s de cat\u00e9gorie. La planification saisonni\u00e8re de l\u2019\u00e9quipe a \u00e9t\u00e9 un tournant pour notre activit\u00e9.",
            quoteAuthor: "Fondateur, Marque de V\u00eatements DTC",
          },
        ],
        ctaText: "Voir toutes les études de cas",
        ctaHref: "/cases",
      },
      {
        type: "tips",
        badge: "Conseils d\u2019experts",
        heading: "7 conseils SEO mode pour am\u00e9liorer vos classements",
        tips: [
          { number: "01", title: "Planifiez le contenu saisonnier 3 \u00e0 6 mois \u00e0 l\u2019avance", body: "La demande de recherche mode est pr\u00e9visible. Cr\u00e9ez et optimisez les pages de collection, guides de tendances et contenu de style bien avant chaque pic saisonnier pour \u00eatre d\u00e9j\u00e0 positionn\u00e9 quand les acheteurs commencent \u00e0 chercher." },
          { number: "02", title: "Optimisez les pages de collection comme des landing pages", body: "Les pages cat\u00e9gories g\u00e9n\u00e8rent la majorit\u00e9 du trafic e-commerce mode. Ajoutez des descriptions uniques, des liens internes et des donn\u00e9es structur\u00e9es \u00e0 chaque page de collection pour maximiser la visibilit\u00e9." },
          { number: "03", title: "Canonicalisez les variantes de taille et couleur", body: "Chaque variante de taille et couleur peut cr\u00e9er du contenu dupliqu\u00e9. Impl\u00e9mentez des balises canoniques et une gestion des param\u00e8tres d\u2019URL pour consolider les signaux de classement sur vos pages produits principales." },
          { number: "04", title: "Investissez dans l\u2019optimisation de la recherche visuelle", body: "La mode est intrins\u00e8quement visuelle. Optimisez les images produits avec des noms de fichiers descriptifs, des textes alt et du balisage schema Produit pour capter le trafic de Google Images et des moteurs de recherche visuels." },
          { number: "05", title: "Cr\u00e9ez des guides de style qui se positionnent et convertissent", body: "Le contenu how-to-wear et inspiration de tenues capte les recherches haut de funnel et stimule la d\u00e9couverte de produits. Liez les guides de style aux pages produits pour cr\u00e9er un parcours de conversion." },
          { number: "06", title: "G\u00e9rez le cycle de vie des URL pour les produits saisonniers", body: "Quand les produits sont en rupture de stock, redirigez les URL vers des alternatives pertinentes au lieu de renvoyer des 404. Cela pr\u00e9serve l\u2019\u00e9quit\u00e9 des liens et garde les acheteurs sur votre site." },
          { number: "07", title: "Construisez l\u2019autorit\u00e9 gr\u00e2ce aux RP mode", body: "Obtenez des backlinks de publications mode, blogs de style et annuaires sectoriels. Les signaux d\u2019autorit\u00e9 th\u00e9matique aident Google \u00e0 reconna\u00eetre votre marque comme une source mode de confiance." },
        ],
      },
      {
        type: "richText",
        heading: "Strat\u00e9gie SEO saisonni\u00e8re pour le e-commerce mode",
        richTextBlocks: [
          { body: "Le e-commerce mode tourne autour des saisons, et votre strat\u00e9gie SEO devrait en faire autant. Les marques qui gagnent en recherche organique sont celles qui planifient le contenu des mois avant le pic de demande - pas celles qui se pr\u00e9cipitent pour publier quand les tendances sont d\u00e9j\u00e0 tendance." },
          { body: "Nous construisons des calendriers de contenu saisonniers align\u00e9s sur les courbes de demande de recherche. Les collections printemps/\u00e9t\u00e9 et automne/hiver n\u00e9cessitent chacune des landing pages d\u00e9di\u00e9es, du contenu blog et des structures de maillage interne mis en ligne bien avant que les acheteurs ne commencent \u00e0 naviguer. Vos pages sont index\u00e9es, gagnent en autorit\u00e9 et grimpent dans les classements avant m\u00eame que vos concurrents ne commencent \u00e0 r\u00e9diger." },
          { body: "Au-del\u00e0 du timing, le SEO saisonnier pour la mode exige une gestion URL rigoureuse. Les produits vont et viennent, mais l\u2019\u00e9quit\u00e9 de recherche que vous avez construite ne devrait pas dispara\u00eetre avec l\u2019inventaire de la saison pass\u00e9e. Nous impl\u00e9mentons des strat\u00e9gies de redirection, des pages de collection evergreen et des approches d\u2019archivage qui pr\u00e9servent vos classements durement gagn\u00e9s ann\u00e9e apr\u00e8s ann\u00e9e." },
        ],
      },
      {
        type: "richText",
        heading: "Pourquoi les marques de mode ont besoin d\u2019un SEO e-commerce sp\u00e9cialis\u00e9",
        richTextBlocks: [
          { body: "Les agences SEO g\u00e9n\u00e9ralistes traitent les boutiques mode comme n\u2019importe quel autre site e-commerce. Mais la mode a des d\u00e9fis uniques - cycles d\u2019inventaire saisonniers, comportement d\u2019achat visuel, pics de recherche li\u00e9s aux tendances et structures de variantes complexes - qui exigent une expertise sp\u00e9cialis\u00e9e." },
          { body: "Un sp\u00e9cialiste SEO mode sait que votre page de collection robes d\u2019\u00e9t\u00e9 doit \u00eatre index\u00e9e d\u2019ici mars, que le contenu de guide des tailles r\u00e9duit les retours tout en captant du trafic de recherche, et que vos images lookbook n\u00e9cessitent des donn\u00e9es structur\u00e9es pour appara\u00eetre dans les r\u00e9sultats de recherche visuels. Ce ne sont pas des choses auxquelles une agence g\u00e9n\u00e9raliste pense." },
          { body: "Nous avons pass\u00e9 plus de 8 ans \u00e0 travailler exclusivement avec des marques e-commerce, et la mode est l\u2019une de nos verticales les plus profondes. Nous savons quels types de contenu g\u00e9n\u00e8rent du chiffre d\u2019affaires, comment g\u00e9rer la complexit\u00e9 technique de catalogues riches en variantes, et comment construire l\u2019autorit\u00e9 dans un espace comp\u00e9titif o\u00f9 chaque marque se bat pour les m\u00eames mots-cl\u00e9s de style." },
        ],
      },
      {
        type: "team",
        badge: "L\u2019\u00e9quipe",
        heading: "Qui fait le travail",
        teamLead: {
          name: "Fabian van Til",
          role: "Strat\u00e9gie & Innovation",
          bio: "Fabian supervise tous les projets clients. Plus de 8 ans d\u2019exp\u00e9rience en SEO e-commerce avec une expertise approfondie dans la mode, le luxe et l\u2019habillement. Il allie strat\u00e9gie de croissance et innovation SEO technique pour g\u00e9n\u00e9rer du CA organique saisonnier et evergreen.",
          image: "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "SEO technique & On-Page",
            bio: "Construit les fondations SEO techniques et on-page des boutiques mode. Sp\u00e9cialis\u00e9 dans la canonicalisation des variantes, l\u2019optimisation des images, les donn\u00e9es structur\u00e9es pour les catalogues produits et l\u2019architecture de site qui \u00e9volue avec les collections saisonni\u00e8res.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://www.linkedin.com/in/dimitar-georgiev-seo/",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Link Building",
            bio: "Ma\u00eetrise l\u2019acquisition de liens et les RP digitales pour les marques de mode. Construit des profils de backlinks gr\u00e2ce \u00e0 l\u2019outreach vers les publications mode, les partenariats avec des blogs de style et des placements strat\u00e9giques qui renforcent l\u2019autorit\u00e9 de domaine sur les march\u00e9s mode comp\u00e9titifs.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "Contenu, Link Building & PR",
            bio: "Con\u00e7oit des strat\u00e9gies de contenu pour les marques de mode qui se positionnent et convertissent. Sp\u00e9cialis\u00e9 dans l\u2019optimisation des pages de collection, la planification de contenu saisonnier, la cr\u00e9ation de guides de style et les calendriers \u00e9ditoriaux align\u00e9s sur les tendances de recherche mode, plus le link building et les RP.",
            image: "/images/framer/gjorgi-jovev.png",
            linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
          },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "\u00cates-vous sp\u00e9cialis\u00e9 dans le e-commerce mode ?", answer: "Oui. Nous travaillons exclusivement avec des marques e-commerce, et la mode est l\u2019une de nos verticales principales. Nous comprenons les cycles de stock saisonniers, la gestion des variantes et la nature visuelle de la recherche mode. Lisez notre [guide SEO e-commerce mode](/blog/fashion-ecommerce-seo)." },
        { question: "Comment g\u00e9rez-vous le contenu saisonnier pour les marques de mode ?", answer: "Nous planifions le contenu 3 \u00e0 6 mois avant chaque saison. Les [pages de collection](/academy/category-page-seo), les guides de tendances et le contenu de style sont pr\u00e9par\u00e9s et optimis\u00e9s avant que la demande de recherche n\u2019atteigne son pic - vous \u00eates d\u00e9j\u00e0 positionn\u00e9 quand les acheteurs commencent \u00e0 chercher." },
        { question: "Pouvez-vous aider avec le SEO mode international ?", answer: "Absolument. Nous g\u00e9rons le SEO multilingue pour les marques de mode vendant sur diff\u00e9rents march\u00e9s. Cela inclut l\u2019impl\u00e9mentation hreflang, le contenu localis\u00e9 et la recherche de mots-cl\u00e9s sp\u00e9cifique \u00e0 chaque march\u00e9." },
        { question: "Comment g\u00e9rez-vous les variantes de produit en SEO ?", answer: "Nous impl\u00e9mentons une canonicalisation correcte pour les variantes de taille et de couleur, g\u00e9rons les param\u00e8tres d\u2019URL et veillons \u00e0 ce que Google se concentre sur vos pages produits principales plut\u00f4t que de gaspiller du budget de crawl sur des URL de variantes. Notre [guide SEO de pages produits](/academy/product-page-seo) couvre la gestion des variantes en d\u00e9tail." },
        { question: "Comment mesurez-vous le succ\u00e8s pour les marques de mode ?", answer: "Nous suivons le chiffre d\u2019affaires organique, le trafic provenant des mots-cl\u00e9s saisonniers et evergreen, les classements des pages de collection et les taux de conversion. Nous rapportons mensuellement sur les indicateurs qui comptent pour votre r\u00e9sultat net." },
        { question: "Avec quelles marques de mode travaillez-vous habituellement ?", answer: "Nous travaillons avec des marques de mode DTC, des entreprises de v\u00eatements durables et des d\u00e9taillants sp\u00e9cialis\u00e9s r\u00e9alisant plus de 500 000 \u20ac de CA annuel. Nos clients vont des designers \u00e9mergents aux labels de mode \u00e9tablis." },
      ],
      miniCta: {
        heading: "Pr\u00eat \u00e0 faire cro\u00eetre votre marque de mode ?",
        subtitle: "R\u00e9servez un appel strat\u00e9gique gratuit et nous vous montrerons les opportunit\u00e9s organiques que vous manquez.",
      },
    },
  },
  es: {
    hero: {
      badge: "SEO Moda",
      heading: "SEO de moda que convierte visitantes en compradores",
      subtitle:
        "Ayudamos a marcas de moda y ropa a posicionarse en las b\u00fasquedas que generan ingresos - desde tendencias estacionales hasta consultas de estilo e intenci\u00f3n a nivel de colecci\u00f3n.",
      ctaText: "Reservar una llamada estrat\u00e9gica de SEO moda",

    },
    trustBar: "M\u00e1s de 20 marcas de moda conf\u00edan en nosotros para escalar sus ingresos org\u00e1nicos",
    sections: [
      {
        type: "stats",
        heading: "Resultados de SEO moda que hablan por s\u00ed mismos",
        stats: [
          { value: "8+", label: "A\u00f1os de SEO e-commerce" },
          { value: "$12M+", label: "Ingresos generados" },
          { value: "50+", label: "Tiendas e-commerce optimizadas" },
          { value: "140%", label: "Aumento prom. de tr\u00e1fico" },
        ],
      },
      {
        type: "benefits",
        badge: "Intenci\u00f3n de compra",
        heading: "C\u00f3mo buscan los compradores de moda online",
        subtitle: "El comportamiento de b\u00fasqueda en moda es estacional, visual y guiado por tendencias. Entendemos las se\u00f1ales de intenci\u00f3n que importan para tu nicho.",
        benefits: [
          { title: "Picos de b\u00fasqueda estacionales", description: "Colecciones de primavera, vestidos de verano, abrigos de invierno - la demanda estacional genera tr\u00e1fico masivo. Alineamos tu calendario de contenido con meses de antelaci\u00f3n." },
          { title: "B\u00fasqueda visual en auge", description: "La b\u00fasqueda por im\u00e1genes y el descubrimiento visual crecen r\u00e1pidamente. Optimizamos im\u00e1genes de producto, textos alt y datos estructurados para motores de b\u00fasqueda visual." },
          { title: "Consultas de estilo long tail", description: "Los compradores buscan estilos espec\u00edficos - blazer oversize de lino, vaqueros anchos de talle alto. Captamos estas consultas long tail de alta conversi\u00f3n." },
          { title: "Marca vs. b\u00fasquedas gen\u00e9ricas", description: "Algunos compradores buscan por marca, otros por estilo. Captamos ambos segmentos con p\u00e1ginas de colecci\u00f3n dirigidas y contenido." },
          { title: "Intenci\u00f3n a nivel de colecci\u00f3n", description: "Novedades, art\u00edculos en rebajas, m\u00e1s vendidos - las p\u00e1ginas de colecci\u00f3n generan tr\u00e1fico significativo. Las optimizamos para m\u00e1xima visibilidad." },
          { title: "Brechas de contenido por tendencias", description: "Las tendencias de moda crean demanda de b\u00fasqueda repentina. Monitorizamos tendencias y creamos contenido r\u00e1pidamente para captar b\u00fasquedas de estilo emergentes." },
        ],
      },
      {
        type: "process",
        badge: "Obst\u00e1culos frecuentes",
        heading: "Qu\u00e9 frena a las marcas de moda en la b\u00fasqueda",
        process: [
          { number: "01", title: "Duplicaci\u00f3n de variantes de talla y color", description: "Cada combinaci\u00f3n de talla y color crea contenido potencialmente duplicado. Sin una canonicalizaci\u00f3n adecuada, Google desperdicia presupuesto de rastreo en p\u00e1ginas redundantes." },
          { number: "02", title: "Rotaci\u00f3n estacional de inventario", description: "Los productos van y vienen cada temporada, creando enlaces rotos y p\u00e1ginas hu\u00e9rfanas. Gestionamos el ciclo de vida de las URL para preservar la equidad de enlaces y los rankings." },
          { number: "03", title: "P\u00e1ginas lentas por im\u00e1genes", description: "Im\u00e1genes de lookbook en alta resoluci\u00f3n y galer\u00edas de producto reducen la velocidad. Optimizamos los Core Web Vitals sin sacrificar la calidad visual." },
          { number: "04", title: "Descripciones de categor\u00eda escasas", description: "Las p\u00e1ginas de colecci\u00f3n predeterminadas tienen poco o ning\u00fan contenido textual. A\u00f1adimos descripciones optimizadas que apuntan a keywords de alta intenci\u00f3n." },
        ],
      },
      {
        type: "benefits",
        badge: "Nuestro enfoque",
        heading: "C\u00f3mo hacemos crecer las marcas de moda org\u00e1nicamente",
        subtitle: "Combinamos estrategia de contenido, SEO t\u00e9cnico y construcci\u00f3n de autoridad para impulsar el crecimiento org\u00e1nico sostenible de marcas de moda.",
        benefits: [
          { title: "Estrategia de contenido", description: "Gu\u00edas de estilo, res\u00famenes de tendencias y p\u00e1ginas de colecci\u00f3n optimizadas para demanda estacional y evergreen. Creamos contenido que posiciona y convierte." },
          { title: "SEO t\u00e9cnico", description: "Canonicalizaci\u00f3n de variantes, gesti\u00f3n del ciclo de vida de URL, optimizaci\u00f3n de im\u00e1genes y datos estructurados. Solucionamos los problemas t\u00e9cnicos que frenan tu tienda." },
          { title: "Construcci\u00f3n de autoridad", description: "RP digital, outreach a publicaciones de moda y link building estrat\u00e9gico. Aumentamos tu autoridad de dominio con backlinks relevantes y de alta calidad." },
        ],
      },
      {
        type: "deliverables",
        badge: "Entregables",
        heading: "Lo que entregamos para marcas de moda",
        deliverables: [
          { title: "Optimizaci\u00f3n de colecciones", description: "P\u00e1ginas de categor\u00eda + enlazado interno" },
          { title: "Contenido lookbook", description: "Contenido visual que genera tr\u00e1fico" },
          { title: "Gu\u00edas de tendencias", description: "Contenido estacional para demanda emergente" },
          { title: "Correcciones t\u00e9cnicas", description: "Velocidad, schema, optimizaci\u00f3n de rastreo" },
          { title: "Marcado Schema", description: "JSON-LD de producto, breadcrumb y organizaci\u00f3n - validado y monitorizado" },
          { title: "Link building", description: "Backlinks de calidad de publicaciones de moda y dominios relevantes" },
          { title: "Informe mensual", description: "Rankings, tr\u00e1fico org\u00e1nico, atribuci\u00f3n de ingresos y plan de acci\u00f3n" },
          { title: "Llamada estrat\u00e9gica", description: "Llamada mensual de 30 min para revisar el progreso y alinear prioridades" },
        ],
      },
      {
        type: "benefits",
        badge: "Tipos de contenido",
        heading: "P\u00e1ginas que creamos para marcas de moda",
        benefits: [
          { title: "P\u00e1ginas de colecci\u00f3n", description: "P\u00e1ginas de categor\u00eda optimizadas con contenido \u00fanico, enlaces internos y datos estructurados para m\u00e1xima visibilidad en b\u00fasqueda." },
          { title: "Gu\u00edas de estilo", description: "Gu\u00edas de c\u00f3mo vestir y consejos de estilo que captan consultas informativas e impulsan el descubrimiento de productos." },
          { title: "Comparaciones de tendencias", description: "An\u00e1lisis de tendencias y contenido comparativo que capta intenci\u00f3n comercial de compradores investigando estilos." },
          { title: "Gu\u00edas de regalos", description: "Gu\u00edas de regalos estacionales para compradores de moda que captan consultas comerciales de alta conversi\u00f3n." },
          { title: "Gu\u00edas de tallas", description: "Contenido detallado de tallas que reduce devoluciones, genera confianza y capta consultas relacionadas con tallas." },
          { title: "P\u00e1ginas lookbook", description: "Contenido editorial visual que muestra colecciones mientras apunta a keywords de estilo y tendencia." },
        ],
      },
      {
        type: "caseStudies",
        badge: "Casos de \u00e9xito",
        heading: "Marcas de moda a las que hemos ayudado a crecer",
        caseStudies: [
          {
            badge: "Moda de lujo",
            title: "3x los ingresos org\u00e1nicos para una marca de moda de lujo",
            image: "/images/framer/QtPNuhsKVZNt3klckPPtQzUuW0.png",
            metrics: [
              { value: "3x", label: "Ingresos org\u00e1nicos" },
              { value: "210%", label: "Aumento de tr\u00e1fico" },
              { value: "45", label: "Keywords en p\u00e1gina 1" },
            ],
            quote: "Entendieron nuestro posicionamiento de marca y lo tradujeron en una estrategia SEO que realmente atrajo clientes de alto valor a nuestra tienda.",
            quoteAuthor: "Director Digital, Marca de Moda de Lujo",
          },
          {
            badge: "DTC Ropa",
            title: "De la p\u00e1gina 5 a la p\u00e1gina 1 para una marca de ropa DTC",
            image: "/images/framer/fyAPXyjHaJjly5rybkvJY6xZQkQ.png",
            metrics: [
              { value: "P\u00e1gina 1", label: "Keywords principales" },
              { value: "380%", label: "Tr\u00e1fico org\u00e1nico" },
              { value: "$1.2M", label: "Aumento de ingresos anual" },
            ],
            quote: "Pasamos de ser invisibles a liderar nuestras keywords de categor\u00eda. La planificaci\u00f3n estacional del equipo fue un cambio radical para nuestro negocio.",
            quoteAuthor: "Fundador, Marca de Ropa DTC",
          },
        ],
        ctaText: "Ver todos los casos de éxito",
        ctaHref: "/cases",
      },
      {
        type: "tips",
        badge: "Consejos de expertos",
        heading: "7 consejos de SEO moda para mejorar tus rankings",
        tips: [
          { number: "01", title: "Planifica el contenido estacional con 3-6 meses de antelaci\u00f3n", body: "La demanda de b\u00fasqueda en moda es predecible. Crea y optimiza p\u00e1ginas de colecci\u00f3n, gu\u00edas de tendencias y contenido de estilo mucho antes de cada pico estacional para estar ya posicionado cuando los compradores empiecen a buscar." },
          { number: "02", title: "Optimiza las p\u00e1ginas de colecci\u00f3n como landing pages", body: "Las p\u00e1ginas de categor\u00eda generan la mayor\u00eda del tr\u00e1fico de e-commerce de moda. A\u00f1ade descripciones \u00fanicas, enlaces internos y datos estructurados a cada p\u00e1gina de colecci\u00f3n para maximizar la visibilidad." },
          { number: "03", title: "Canonicaliza las variantes de talla y color", body: "Cada variante de talla y color puede crear contenido duplicado. Implementa etiquetas can\u00f3nicas correctas y gesti\u00f3n de par\u00e1metros URL para consolidar las se\u00f1ales de ranking en tus p\u00e1ginas de producto principales." },
          { number: "04", title: "Invierte en optimizaci\u00f3n de b\u00fasqueda visual", body: "La moda es inherentemente visual. Optimiza las im\u00e1genes de producto con nombres de archivo descriptivos, texto alt y marcado schema de Producto para captar tr\u00e1fico de Google Im\u00e1genes y motores de b\u00fasqueda visual." },
          { number: "05", title: "Crea gu\u00edas de estilo que posicionen y conviertan", body: "El contenido de c\u00f3mo vestir e inspiraci\u00f3n de outfits capta b\u00fasquedas top-of-funnel e impulsa el descubrimiento de productos. Enlaza desde las gu\u00edas de estilo a las p\u00e1ginas de producto para crear un camino de conversi\u00f3n." },
          { number: "06", title: "Gestiona el ciclo de vida de URL para productos estacionales", body: "Cuando los productos se agotan, redirige las URL a alternativas relevantes en lugar de devolver errores 404. Esto preserva la equidad de enlaces y mantiene a los compradores en tu sitio." },
          { number: "07", title: "Construye autoridad a trav\u00e9s de RP de moda", body: "Obtiene backlinks de publicaciones de moda, blogs de estilo y directorios del sector. Las se\u00f1ales de autoridad tem\u00e1tica ayudan a Google a reconocer tu marca como una fuente de moda de confianza." },
        ],
      },
      {
        type: "richText",
        heading: "Estrategia SEO estacional para e-commerce de moda",
        richTextBlocks: [
          { body: "El e-commerce de moda gira en torno a las temporadas, y tu estrategia SEO tambi\u00e9n deber\u00eda hacerlo. Las marcas que ganan en b\u00fasqueda org\u00e1nica son las que planifican contenido meses antes del pico de demanda - no las que se apresuran a publicar cuando las tendencias ya est\u00e1n en tendencia." },
          { body: "Construimos calendarios de contenido estacionales alineados con las curvas de demanda de b\u00fasqueda. Las colecciones primavera/verano y oto\u00f1o/invierno requieren cada una landing pages dedicadas, contenido de blog y estructuras de enlazado interno que se publican mucho antes de que los compradores empiecen a navegar. Tus p\u00e1ginas se indexan, ganan autoridad y escalan en los rankings antes de que tus competidores empiecen a redactar." },
          { body: "M\u00e1s all\u00e1 del timing, el SEO estacional para moda requiere una gesti\u00f3n cuidadosa de URLs. Los productos van y vienen, pero la equidad de b\u00fasqueda que has construido no deber\u00eda desaparecer con el inventario de la temporada pasada. Implementamos estrategias de redirecci\u00f3n, p\u00e1ginas de colecci\u00f3n evergreen y enfoques de archivo que preservan tus rankings a\u00f1o tras a\u00f1o." },
        ],
      },
      {
        type: "richText",
        heading: "Por qu\u00e9 las marcas de moda necesitan SEO e-commerce especializado",
        richTextBlocks: [
          { body: "Las agencias SEO gen\u00e9ricas tratan las tiendas de moda como cualquier otro sitio e-commerce. Pero la moda tiene desaf\u00edos \u00fanicos - ciclos de inventario estacionales, comportamiento de compra visual, picos de b\u00fasqueda por tendencias y estructuras de variantes complejas - que requieren experiencia especializada." },
          { body: "Un especialista en SEO de moda sabe que tu p\u00e1gina de colecci\u00f3n de vestidos de verano debe estar indexada para marzo, que el contenido de gu\u00eda de tallas reduce las devoluciones mientras capta tr\u00e1fico de b\u00fasqueda, y que tus im\u00e1genes de lookbook necesitan datos estructurados para aparecer en los resultados de b\u00fasqueda visual. Estas no son cosas en las que piensa una agencia generalista." },
          { body: "Hemos dedicado m\u00e1s de 8 a\u00f1os a trabajar exclusivamente con marcas e-commerce, y la moda es una de nuestras verticales m\u00e1s profundas. Sabemos qu\u00e9 tipos de contenido generan ingresos, c\u00f3mo manejar la complejidad t\u00e9cnica de cat\u00e1logos con muchas variantes, y c\u00f3mo construir autoridad en un espacio competitivo donde cada marca compite por las mismas keywords de estilo." },
        ],
      },
      {
        type: "team",
        badge: "El equipo",
        heading: "El equipo",
        teamLead: {
          name: "Fabian van Til",
          role: "Estrategia e Innovaci\u00f3n",
          bio: "Fabian dirige la estrategia de todos los proyectos con clientes. M\u00e1s de 8 a\u00f1os de experiencia en SEO e-commerce con profunda experiencia en moda, lujo y ropa. Combina estrategia de crecimiento con innovaci\u00f3n SEO t\u00e9cnica para generar ingresos org\u00e1nicos estacionales y evergreen.",
          image: "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "SEO T\u00e9cnico & On-Page",
            bio: "Construye las bases t\u00e9cnicas de SEO y on-page para tiendas de moda. Especializado en canonicalizaci\u00f3n de variantes, optimizaci\u00f3n de im\u00e1genes, datos estructurados para cat\u00e1logos de productos y arquitectura de sitio que escala con colecciones estacionales.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://www.linkedin.com/in/dimitar-georgiev-seo/",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page y Link Building",
            bio: "Martinijan lidera la adquisici\u00f3n de enlaces y las RP digitales para marcas de moda. Construye perfiles de backlinks a trav\u00e9s de outreach a publicaciones de moda, alianzas con blogs de estilo y colocaciones estrat\u00e9gicas que elevan la autoridad de dominio en mercados de moda competitivos.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "Contenido, Link Building y PR",
            bio: "Dise\u00f1a estrategias de contenido para marcas de moda que posicionan y convierten. Especializado en optimizaci\u00f3n de p\u00e1ginas de colecci\u00f3n, planificaci\u00f3n de contenido estacional, creaci\u00f3n de gu\u00edas de estilo y calendarios editoriales alineados con las tendencias de b\u00fasqueda de moda, y link building y PR.",
            image: "/images/framer/gjorgi-jovev.png",
            linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
          },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "\u00bfSe especializan en e-commerce de moda?", answer: "S\u00ed. Trabajamos exclusivamente con marcas de e-commerce, y la moda es una de nuestras verticales principales. Entendemos los ciclos de inventario estacionales, la gesti\u00f3n de variantes y la naturaleza visual de la b\u00fasqueda de moda. Lee nuestra [gu\u00eda SEO e-commerce de moda](/blog/fashion-ecommerce-seo)." },
        { question: "\u00bfC\u00f3mo gestionan el contenido estacional para marcas de moda?", answer: "Planificamos el contenido con 3 a 6 meses de antelaci\u00f3n a cada temporada. Las [p\u00e1ginas de colecci\u00f3n](/academy/category-page-seo), gu\u00edas de tendencias y contenido de estilo est\u00e1n preparados y optimizados antes de que la demanda alcance su pico - ya est\u00e1s posicionado cuando los compradores empiezan a buscar." },
        { question: "\u00bfPueden ayudar con SEO de moda internacional?", answer: "Por supuesto. Gestionamos SEO multiling\u00fce para marcas de moda que venden en diferentes mercados. Esto incluye implementaci\u00f3n hreflang, contenido localizado e investigaci\u00f3n de keywords espec\u00edfica por mercado." },
        { question: "\u00bfC\u00f3mo manejan las variantes de producto en SEO?", answer: "Implementamos canonicalizaci\u00f3n correcta para variantes de talla y color, gestionamos par\u00e1metros de URL y nos aseguramos de que Google se enfoque en tus p\u00e1ginas de producto principales en lugar de desperdiciar presupuesto de rastreo en URLs de variantes. Nuestra [gu\u00eda SEO de p\u00e1ginas de producto](/academy/product-page-seo) cubre la gesti\u00f3n de variantes en detalle." },
        { question: "\u00bfC\u00f3mo miden el \u00e9xito para marcas de moda?", answer: "Rastreamos ingresos org\u00e1nicos, tr\u00e1fico de keywords estacionales y evergreen, rankings de p\u00e1ginas de colecci\u00f3n y tasas de conversi\u00f3n. Reportamos mensualmente sobre m\u00e9tricas que importan para tu resultado final." },
        { question: "\u00bfCon qu\u00e9 marcas de moda trabajan normalmente?", answer: "Trabajamos con marcas de moda DTC, empresas de ropa sostenible y retailers especializados con m\u00e1s de 500.000 \u20ac de facturaci\u00f3n anual. Nuestros clientes van desde dise\u00f1adores emergentes hasta sellos de moda establecidos." },
      ],
      miniCta: {
        heading: "\u00bfListo para hacer crecer tu marca de moda?",
        subtitle: "Reserva una llamada estrat\u00e9gica gratuita y te mostraremos las oportunidades org\u00e1nicas que est\u00e1s perdiendo.",
      },
    },
  },
  it: {
    hero: {
      badge: "SEO Moda",
      heading: "SEO moda che trasforma i visitatori in acquirenti",
      subtitle:
        "Aiutiamo i brand di moda e abbigliamento a posizionarsi per le ricerche che generano fatturato - dalle tendenze stagionali alle query di stile e all\u2019intento a livello di collezione.",
      ctaText: "Prenota una call strategica SEO moda",

    },
    trustBar: "Oltre 20 brand di moda si affidano a noi per la crescita organica",
    sections: [
      {
        type: "stats",
        heading: "Il nostro track record nel SEO moda",
        stats: [
          { value: "8+", label: "Anni di SEO e-commerce" },
          { value: "$12M+", label: "Fatturato generato" },
          { value: "50+", label: "Negozi e-commerce ottimizzati" },
          { value: "140%", label: "Aumento medio del traffico" },
        ],
      },
      {
        type: "benefits",
        badge: "Intenzione d\u2019acquisto",
        heading: "Come cercano gli acquirenti di moda online",
        subtitle: "Il comportamento di ricerca nella moda \u00e8 stagionale, visivo e guidato dalle tendenze. Comprendiamo i segnali d\u2019intento che contano per la tua nicchia.",
        benefits: [
          { title: "Picchi di ricerca stagionali", description: "Collezioni primaverili, abiti estivi, cappotti invernali - la domanda stagionale genera traffico enorme. Allineiamo il tuo calendario editoriale con mesi di anticipo." },
          { title: "Ricerca visiva in crescita", description: "La ricerca per immagini e la scoperta visiva crescono rapidamente. Ottimizziamo le immagini prodotto, i testi alt e i dati strutturati per i motori di ricerca visivi." },
          { title: "Query di stile long tail", description: "Gli acquirenti cercano stili specifici - blazer oversize in lino, jeans a vita alta a gamba larga. Catturiamo queste query long tail ad alta conversione." },
          { title: "Brand vs. ricerche generiche", description: "Alcuni acquirenti cercano per brand, altri per stile. Catturiamo entrambi i segmenti con pagine di collezione mirate e contenuti." },
          { title: "Intento a livello di collezione", description: "Novit\u00e0, articoli in saldo, bestseller - le pagine collezione generano traffico significativo. Le ottimizziamo per massima visibilit\u00e0." },
          { title: "Gap di contenuto legati ai trend", description: "Le tendenze moda creano domanda di ricerca improvvisa. Monitoriamo i trend e creiamo contenuti rapidamente per catturare le ricerche di stile emergenti." },
        ],
      },
      {
        type: "process",
        badge: "Ostacoli comuni",
        heading: "Cosa frena i brand di moda nella ricerca",
        process: [
          { number: "01", title: "Duplicazione varianti taglia e colore", description: "Ogni combinazione taglia-colore crea contenuto potenzialmente duplicato. Senza una corretta canonicalizzazione, Google spreca budget di crawl su pagine ridondanti." },
          { number: "02", title: "Rotazione stagionale dell\u2019inventario", description: "I prodotti vanno e vengono ogni stagione, creando link rotti e pagine orfane. Gestiamo il ciclo di vita degli URL per preservare la link equity e i posizionamenti." },
          { number: "03", title: "Pagine lente cariche di immagini", description: "Immagini lookbook ad alta risoluzione e gallerie prodotto riducono la velocit\u00e0. Ottimizziamo i Core Web Vitals senza sacrificare la qualit\u00e0 visiva." },
          { number: "04", title: "Descrizioni di categoria scarse", description: "Le pagine collezione predefinite hanno poco o nessun contenuto testuale. Aggiungiamo descrizioni ottimizzate che mirano a keyword ad alta intenzione." },
        ],
      },
      {
        type: "benefits",
        badge: "Il nostro approccio",
        heading: "Come facciamo crescere i brand di moda in modo organico",
        subtitle: "Combiniamo strategia dei contenuti, SEO tecnica e costruzione dell\u2019autorit\u00e0 per una crescita organica sostenibile dei brand di moda.",
        benefits: [
          { title: "Strategia dei contenuti", description: "Guide di stile, roundup di tendenze e pagine di collezione ottimizzate per domanda stagionale ed evergreen. Creiamo contenuti che si posizionano e convertono." },
          { title: "SEO tecnica", description: "Canonicalizzazione delle varianti, gestione del ciclo di vita degli URL, ottimizzazione delle immagini e dati strutturati. Risolviamo i problemi tecnici che frenano il tuo negozio." },
          { title: "Costruzione dell\u2019autorit\u00e0", description: "PR digitali, outreach verso pubblicazioni di moda e link building strategico. Aumentiamo la tua autorit\u00e0 di dominio con backlink pertinenti e di alta qualit\u00e0." },
        ],
      },
      {
        type: "deliverables",
        badge: "Deliverable",
        heading: "Cosa forniamo per i brand di moda",
        deliverables: [
          { title: "Ottimizzazione delle collezioni", description: "Pagine categoria + linking interno" },
          { title: "Contenuti lookbook", description: "Contenuti visivi che generano traffico" },
          { title: "Guide tendenze", description: "Contenuti stagionali per la domanda emergente" },
          { title: "Correzioni tecniche", description: "Velocit\u00e0, schema, ottimizzazione del crawl" },
          { title: "Markup Schema", description: "JSON-LD prodotto, breadcrumb e organizzazione - validato e monitorato" },
          { title: "Link building", description: "Backlink di qualit\u00e0 da pubblicazioni di moda e domini rilevanti" },
          { title: "Report mensile", description: "Posizionamenti, traffico organico, attribuzione del fatturato e piano d\u2019azione" },
          { title: "Call strategica", description: "Call mensile di 30 min per verificare i progressi e allineare le priorit\u00e0" },
        ],
      },
      {
        type: "benefits",
        badge: "Tipi di contenuto",
        heading: "Le pagine che creiamo per i brand di moda",
        benefits: [
          { title: "Pagine di collezione", description: "Pagine categoria ottimizzate con contenuto unico, link interni e dati strutturati per massima visibilit\u00e0 nella ricerca." },
          { title: "Guide di stile", description: "Guide su come indossare e consigli di stile che catturano query informative e stimolano la scoperta di prodotti." },
          { title: "Confronti di tendenze", description: "Analisi di tendenze e contenuti comparativi che catturano l\u2019intento commerciale degli acquirenti che ricercano stili." },
          { title: "Guide regalo", description: "Guide regalo stagionali per acquirenti di moda che catturano query commerciali ad alta conversione." },
          { title: "Guide alle taglie", description: "Contenuti dettagliati sulle taglie che riducono i resi, costruiscono fiducia e catturano le ricerche relative alle taglie." },
          { title: "Pagine lookbook", description: "Contenuti editoriali visivi che mettono in mostra le collezioni puntando a keyword di stile e tendenza." },
        ],
      },
      {
        type: "caseStudies",
        badge: "Casi studio",
        heading: "I brand di moda che abbiamo aiutato a crescere",
        caseStudies: [
          {
            badge: "Moda di lusso",
            title: "3x il fatturato organico per un brand di moda di lusso",
            image: "/images/framer/QtPNuhsKVZNt3klckPPtQzUuW0.png",
            metrics: [
              { value: "3x", label: "Fatturato organico" },
              { value: "210%", label: "Aumento del traffico" },
              { value: "45", label: "Keyword in pagina 1" },
            ],
            quote: "Hanno compreso il nostro posizionamento di brand e lo hanno tradotto in una strategia SEO che ha realmente portato clienti di alto valore nel nostro negozio.",
            quoteAuthor: "Head of Digital, Brand di Moda di Lusso",
          },
          {
            badge: "DTC Abbigliamento",
            title: "Da pagina 5 a pagina 1 per un brand di abbigliamento DTC",
            image: "/images/framer/fyAPXyjHaJjly5rybkvJY6xZQkQ.png",
            metrics: [
              { value: "Pagina 1", label: "Keyword principali" },
              { value: "380%", label: "Traffico organico" },
              { value: "$1.2M", label: "Aumento fatturato annuale" },
            ],
            quote: "Siamo passati dall\u2019invisibilit\u00e0 alla prima pagina per le nostre keyword di categoria. La pianificazione stagionale del team \u00e8 stata una svolta per il nostro business.",
            quoteAuthor: "Fondatore, Brand di Abbigliamento DTC",
          },
        ],
        ctaText: "Vedi tutti i casi studio",
        ctaHref: "/cases",
      },
      {
        type: "tips",
        badge: "Consigli degli esperti",
        heading: "7 consigli SEO moda per migliorare i tuoi posizionamenti",
        tips: [
          { number: "01", title: "Pianifica i contenuti stagionali con 3-6 mesi di anticipo", body: "La domanda di ricerca nella moda \u00e8 prevedibile. Crea e ottimizza pagine di collezione, guide sulle tendenze e contenuti di stile molto prima di ogni picco stagionale, cos\u00ec da essere gi\u00e0 posizionati quando gli acquirenti iniziano a cercare." },
          { number: "02", title: "Ottimizza le pagine di collezione come landing page", body: "Le pagine categoria generano la maggior parte del traffico e-commerce moda. Aggiungi descrizioni uniche, link interni e dati strutturati a ogni pagina di collezione per massimizzare la visibilit\u00e0 nella ricerca." },
          { number: "03", title: "Canonicalizza le varianti di taglia e colore", body: "Ogni variante di taglia e colore pu\u00f2 creare contenuto duplicato. Implementa tag canonical corretti e gestione dei parametri URL per consolidare i segnali di ranking sulle tue pagine prodotto principali." },
          { number: "04", title: "Investi nell\u2019ottimizzazione della ricerca visiva", body: "La moda \u00e8 intrinsecamente visiva. Ottimizza le immagini prodotto con nomi file descrittivi, testi alt e markup schema Prodotto per catturare traffico da Google Immagini e motori di ricerca visivi." },
          { number: "05", title: "Crea guide di stile che si posizionano e convertono", body: "I contenuti su come indossare e l\u2019ispirazione outfit catturano ricerche top-of-funnel e stimolano la scoperta di prodotti. Collega le guide di stile alle pagine prodotto per creare un percorso di conversione." },
          { number: "06", title: "Gestisci il ciclo di vita degli URL per i prodotti stagionali", body: "Quando i prodotti vanno esauriti, reindirizza gli URL ad alternative pertinenti invece di restituire errori 404. Questo preserva la link equity e mantiene gli acquirenti sul tuo sito." },
          { number: "07", title: "Costruisci autorit\u00e0 attraverso le PR di moda", body: "Ottieni backlink da pubblicazioni di moda, blog di stile e directory di settore. I segnali di autorit\u00e0 tematica aiutano Google a riconoscere il tuo brand come una fonte moda affidabile." },
        ],
      },
      {
        type: "richText",
        heading: "Strategia SEO stagionale per l\u2019e-commerce moda",
        richTextBlocks: [
          { body: "L\u2019e-commerce moda ruota attorno alle stagioni, e la tua strategia SEO dovrebbe fare altrettanto. I brand che vincono nella ricerca organica sono quelli che pianificano i contenuti mesi prima del picco di domanda - non quelli che si affrettano a pubblicare quando le tendenze sono gi\u00e0 in tendenza." },
          { body: "Costruiamo calendari di contenuto stagionali allineati con le curve di domanda di ricerca. Le collezioni primavera/estate e autunno/inverno richiedono ciascuna landing page dedicate, contenuti blog e strutture di linking interno che vanno online molto prima che gli acquirenti inizino a navigare. Le tue pagine vengono indicizzate, acquisiscono autorit\u00e0 e salgono nei posizionamenti prima ancora che i tuoi concorrenti inizino a scrivere." },
          { body: "Oltre al timing, la SEO stagionale per la moda richiede una gestione URL attenta. I prodotti vanno e vengono, ma l\u2019equity di ricerca che hai costruito non dovrebbe scomparire con l\u2019inventario della stagione passata. Implementiamo strategie di redirect, pagine di collezione evergreen e approcci di archiviazione che preservano i tuoi posizionamenti duramente guadagnati anno dopo anno." },
        ],
      },
      {
        type: "richText",
        heading: "Perch\u00e9 i brand di moda hanno bisogno di SEO e-commerce specializzata",
        richTextBlocks: [
          { body: "Le agenzie SEO generiche trattano i negozi di moda come qualsiasi altro sito e-commerce. Ma la moda ha sfide uniche - cicli di inventario stagionali, comportamento d\u2019acquisto visivo, picchi di ricerca legati ai trend e strutture di varianti complesse - che richiedono competenze specializzate." },
          { body: "Uno specialista SEO moda sa che la tua pagina di collezione abiti estivi deve essere indicizzata entro marzo, che i contenuti sulla guida alle taglie riducono i resi catturando traffico di ricerca, e che le tue immagini lookbook necessitano di dati strutturati per apparire nei risultati di ricerca visivi. Queste non sono cose a cui pensa un\u2019agenzia generalista." },
          { body: "Abbiamo dedicato oltre 8 anni a lavorare esclusivamente con brand e-commerce, e la moda \u00e8 una delle nostre verticali pi\u00f9 profonde. Sappiamo quali tipi di contenuto generano fatturato, come gestire la complessit\u00e0 tecnica di cataloghi ricchi di varianti, e come costruire autorit\u00e0 in uno spazio competitivo dove ogni brand lotta per le stesse keyword di stile." },
        ],
      },
      {
        type: "team",
        badge: "Il team",
        heading: "Il team",
        teamLead: {
          name: "Fabian van Til",
          role: "Strategia e Innovazione",
          bio: "Fabian definisce la strategia di ogni progetto cliente. Oltre 8 anni di esperienza in SEO e-commerce con profonda expertise nella moda, lusso e abbigliamento. Unisce strategia di crescita e innovazione SEO tecnica per generare fatturato organico stagionale ed evergreen.",
          image: "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "SEO tecnico & On-Page",
            bio: "Dimitar costruisce le fondamenta SEO tecniche e on-page per i negozi di moda. Specializzato in canonicalizzazione delle varianti, ottimizzazione delle immagini, dati strutturati per cataloghi prodotto e architettura del sito che scala con le collezioni stagionali.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://www.linkedin.com/in/dimitar-georgiev-seo/",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page e Link Building",
            bio: "Martinijan gestisce l\u2019acquisizione di link e le PR digitali per i brand di moda. Costruisce profili di backlink attraverso outreach verso pubblicazioni di moda, partnership con blog di stile e posizionamenti strategici che elevano l\u2019autorit\u00e0 di dominio nei mercati moda competitivi.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "Contenuti, Link Building & PR",
            bio: "Gjorgi progetta strategie di contenuto per brand di moda che si posizionano e convertono. Specializzato nell\u2019ottimizzazione delle pagine di collezione, pianificazione di contenuti stagionali, creazione di guide di stile e calendari editoriali allineati con le tendenze di ricerca moda, pi\u00f9 campagne di link building e PR.",
            image: "/images/framer/gjorgi-jovev.png",
            linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
          },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "Siete specializzati nell\u2019e-commerce di moda?", answer: "S\u00ec. Lavoriamo esclusivamente con brand e-commerce, e la moda \u00e8 una delle nostre verticali principali. Comprendiamo i cicli di inventario stagionali, la gestione delle varianti e la natura visiva della ricerca moda. Leggi la nostra [guida SEO e-commerce moda](/blog/fashion-ecommerce-seo)." },
        { question: "Come gestite i contenuti stagionali per i brand di moda?", answer: "Pianifichiamo i contenuti da 3 a 6 mesi prima di ogni stagione. Le [pagine di collezione](/academy/category-page-seo), le guide sulle tendenze e i contenuti di stile sono preparati e ottimizzati prima che la domanda di ricerca raggiunga il picco - cos\u00ec siete gi\u00e0 posizionati quando gli acquirenti iniziano a cercare." },
        { question: "Potete aiutare con la SEO moda internazionale?", answer: "Assolutamente. Gestiamo la SEO multilingue per brand di moda che vendono su diversi mercati. Questo include implementazione hreflang, contenuti localizzati e ricerca keyword specifica per ogni mercato." },
        { question: "Come gestite le varianti di prodotto nella SEO?", answer: "Implementiamo la canonicalizzazione corretta per varianti di taglia e colore, gestiamo i parametri URL e ci assicuriamo che Google si concentri sulle vostre pagine prodotto principali invece di sprecare budget di crawl sugli URL delle varianti. La nostra [guida SEO per pagine prodotto](/academy/product-page-seo) copre la gestione delle varianti in dettaglio." },
        { question: "Come misurate il successo per i brand di moda?", answer: "Monitoriamo il fatturato organico, il traffico da keyword stagionali ed evergreen, i posizionamenti delle pagine collezione e i tassi di conversione. Reportiamo mensilmente sulle metriche che contano per il vostro risultato economico." },
        { question: "Con quali brand di moda lavorate di solito?", answer: "Lavoriamo con brand di moda DTC, aziende di abbigliamento sostenibile e retailer specializzati con oltre 500.000 \u20ac di fatturato annuo. I nostri clienti vanno da designer emergenti a label di moda affermati." },
      ],
      miniCta: {
        heading: "Pronti a far crescere il vostro brand di moda?",
        subtitle: "Prenotate una call strategica gratuita e vi mostreremo le opportunit\u00e0 organiche che state perdendo.",
      },
    },
  },
  nl: {
    hero: {
      badge: "Fashion SEO",
      heading: "Fashion SEO die bezoekers omzet in kopers",
      subtitle:
        "Wij helpen mode- en kledingmerken te ranken op de zoekopdrachten die omzet genereren - van seizoenstrends tot stijlzoekopdrachten en collectie-intentie.",
      ctaText: "Boek een Fashion SEO-strategiegesprek",

    },
    trustBar: "Meer dan 20 modemerken vertrouwen op ons voor organische omzetgroei",
    sections: [
      {
        type: "stats",
        heading: "Fashion SEO-resultaten die voor zich spreken",
        stats: [
          { value: "8+", label: "Jaar e-commerce SEO" },
          { value: "$12M+", label: "Gegenereerde omzet" },
          { value: "50+", label: "Geoptimaliseerde e-commercewinkels" },
          { value: "140%", label: "Gem. toename in verkeer" },
        ],
      },
      {
        type: "benefits",
        badge: "Koopintentie",
        heading: "Hoe modeshoppers online zoeken",
        subtitle: "Modevzoekgedrag is seizoensgebonden, visueel en trendgedreven. Wij begrijpen de intentiesignalen die er toe doen voor jouw niche.",
        benefits: [
          { title: "Seizoensgebonden zoekpieken", description: "Lentecollecties, zomerjurken, winterjassen - seizoensgebonden vraag genereert enorm verkeer. Wij stemmen je contentkalender maanden van tevoren af." },
          { title: "Visueel zoeken in opkomst", description: "Beeldzoekopdrachten en visuele ontdekking groeien snel. Wij optimaliseren productafbeeldingen, alt-teksten en gestructureerde data voor visuele zoekmachines." },
          { title: "Long-tail stijlzoekopdrachten", description: "Shoppers zoeken naar specifieke stijlen - oversized linnen blazer, wijde jeans met hoge taille. Wij vangen deze hoogconverterende long-tail zoekopdrachten op." },
          { title: "Merk vs. generieke zoekopdrachten", description: "Sommige shoppers zoeken op merk, anderen op stijl. Wij vangen beide segmenten op met gerichte collectiepagina\u2019s en content." },
          { title: "Collectie-niveau intentie", description: "Nieuw binnen, sale-artikelen, bestsellers - collectiepagina\u2019s genereren aanzienlijk verkeer. Wij optimaliseren ze voor maximale zichtbaarheid." },
          { title: "Trendgedreven contentgaten", description: "Modetrends cre\u00ebren plotselinge zoekvraag. Wij monitoren trends en maken snel content om opkomende stijlzoekopdrachten op te vangen." },
        ],
      },
      {
        type: "process",
        badge: "Veelvoorkomende obstakels",
        heading: "Wat modemerken tegenhoudt in de zoekresultaten",
        process: [
          { number: "01", title: "Duplicatie van maat- & kleurvarianten", description: "Elke maat- en kleurcombinatie cre\u00ebert potentieel dubbele content. Zonder correcte canonicalisatie verspilt Google crawlbudget aan overbodige pagina\u2019s." },
          { number: "02", title: "Seizoensgebonden voorraadwisseling", description: "Producten komen en gaan elk seizoen, waardoor gebroken links en wees-pagina\u2019s ontstaan. Wij beheren de URL-levenscyclus om linkwaarde en rankings te behouden." },
          { number: "03", title: "Beeldrijke trage pagina\u2019s", description: "Hoogresolutie lookbook-afbeeldingen en productgalerijen verlagen de paginasnelheid. Wij optimaliseren voor Core Web Vitals zonder visuele kwaliteit op te offeren." },
          { number: "04", title: "Dunne categoriebeschrijvingen", description: "Standaard collectiepagina\u2019s hebben weinig of geen tekstuele content. Wij voegen geoptimaliseerde beschrijvingen toe die zich richten op zoekwoorden met hoge intentie." },
        ],
      },
      {
        type: "benefits",
        badge: "Onze aanpak",
        heading: "Hoe wij modemerken organisch laten groeien",
        subtitle: "Wij combineren contentstrategie, technische SEO en autoriteitsopbouw voor duurzame organische groei van modemerken.",
        benefits: [
          { title: "Contentstrategie", description: "Stijlgidsen, trendrondups en collectiepagina\u2019s geoptimaliseerd voor seizoensgebonden en evergreen zoekvraag. Wij cre\u00ebren content die rankt en converteert." },
          { title: "Technische SEO", description: "Variantcanonicalisatie, URL-levenscyclusbeheer, beeldoptimalisatie en gestructureerde data. Wij lossen de technische problemen op die je winkel tegenhouden." },
          { title: "Autoriteitsopbouw", description: "Digitale PR, outreach naar modepublicaties en strategische linkbuilding. Wij versterken je domeinautoriteit met relevante, hoogwaardige backlinks." },
        ],
      },
      {
        type: "deliverables",
        badge: "Deliverables",
        heading: "Wat wij leveren voor modemerken",
        deliverables: [
          { title: "Collectieoptimalisatie", description: "Categoriepagina\u2019s + interne linkstructuur" },
          { title: "Lookbook-content", description: "Visuele content die verkeer genereert" },
          { title: "Trendgidsen", description: "Seizoenscontent voor opkomende vraag" },
          { title: "Technische fixes", description: "Snelheid, schema, crawloptimalisatie" },
          { title: "Schema-markup", description: "Product-, breadcrumb- en organisatie-JSON-LD - gevalideerd en gemonitord" },
          { title: "Linkbuilding", description: "Kwalitatieve backlinks van modepublicaties en relevante domeinen" },
          { title: "Maandelijks rapport", description: "Rankings, organisch verkeer, omzetattributie en actieplan" },
          { title: "Strategiegesprek", description: "Maandelijks 30-min gesprek om voortgang te bespreken en prioriteiten af te stemmen" },
        ],
      },
      {
        type: "benefits",
        badge: "Contenttypes",
        heading: "Pagina\u2019s die wij bouwen voor modemerken",
        benefits: [
          { title: "Collectiepagina\u2019s", description: "Geoptimaliseerde categoriepagina\u2019s met unieke content, interne links en gestructureerde data voor maximale zoekzichtbaarheid." },
          { title: "Stijlgidsen", description: "How-to-wear en stylinggidsen die informatieve zoekopdrachten opvangen en productontdekking stimuleren." },
          { title: "Trendvergelijkingen", description: "Trendanalyses en vergelijkingscontent die commerci\u00eble intentie opvangen van shoppers die stijlen onderzoeken." },
          { title: "Cadeaugidsen", description: "Seizoensgebonden cadeaugidsen voor modeshoppers die hoogconverterende commerci\u00eble zoekopdrachten opvangen." },
          { title: "Maattabellen", description: "Gedetailleerde maatinformatie die retouren vermindert, vertrouwen opbouwt en maatgerelateerde zoekopdrachten opvangt." },
          { title: "Lookbook-pagina\u2019s", description: "Visuele redactionele content die collecties showcase terwijl er wordt gemikt op stijl- en trendzoekwoorden." },
        ],
      },
      {
        type: "caseStudies",
        badge: "Casestudies",
        heading: "Modemerken die wij hebben geholpen groeien",
        caseStudies: [
          {
            badge: "Luxe mode",
            title: "3x de organische omzet voor een luxe modemerk",
            image: "/images/framer/QtPNuhsKVZNt3klckPPtQzUuW0.png",
            metrics: [
              { value: "3x", label: "Organische omzet" },
              { value: "210%", label: "Toename verkeer" },
              { value: "45", label: "Pagina 1-zoekwoorden" },
            ],
            quote: "Ze begrepen onze merkpositionering en vertaalden die naar een SEO-strategie die daadwerkelijk waardevolle klanten naar onze winkel bracht.",
            quoteAuthor: "Head of Digital, Luxe Modemerk",
          },
          {
            badge: "DTC Kleding",
            title: "Van pagina 5 naar pagina 1 voor een DTC-kledingmerk",
            image: "/images/framer/fyAPXyjHaJjly5rybkvJY6xZQkQ.png",
            metrics: [
              { value: "Pagina 1", label: "Kernzoekwoorden" },
              { value: "380%", label: "Organisch verkeer" },
              { value: "$1.2M", label: "Jaarlijkse omzetstijging" },
            ],
            quote: "We gingen van onzichtbaar naar dominant op onze categoriezoekwoorden. De seizoensplanning van het team was een gamechanger voor ons bedrijf.",
            quoteAuthor: "Oprichter, DTC-kledingmerk",
          },
        ],
        ctaText: "Bekijk alle casestudies",
        ctaHref: "/cases",
      },
      {
        type: "tips",
        badge: "Experttips",
        heading: "7 fashion SEO-tips om je rankings te verbeteren",
        tips: [
          { number: "01", title: "Plan seizoenscontent 3-6 maanden vooruit", body: "Modezoekvraag is voorspelbaar. Bouw en optimaliseer collectiepagina\u2019s, trendgidsen en stijlcontent ruim voor elk seizoenspiek, zodat je al rankt wanneer shoppers beginnen te zoeken." },
          { number: "02", title: "Optimaliseer collectiepagina\u2019s als landingspagina\u2019s", body: "Categoriepagina\u2019s genereren het meeste mode-e-commerceverkeer. Voeg unieke beschrijvingen, interne links en gestructureerde data toe aan elke collectiepagina om de zoekzichtbaarheid te maximaliseren." },
          { number: "03", title: "Canonicaliseer maat- en kleurvarianten", body: "Elke maat- en kleurvariant kan dubbele content cre\u00ebren. Implementeer correcte canonical tags en URL-parameterbeheer om rankingsignalen te consolideren op je hoofdproductpagina\u2019s." },
          { number: "04", title: "Investeer in visuele zoekoptimalisatie", body: "Mode is inherent visueel. Optimaliseer productafbeeldingen met beschrijvende bestandsnamen, alt-teksten en Product schema-markup om verkeer uit Google Afbeeldingen en visuele zoekmachines op te vangen." },
          { number: "05", title: "Maak stijlgidsen die ranken en converteren", body: "How-to-wear en outfit-inspiratiecontent vangt top-of-funnel zoekopdrachten op en stimuleert productontdekking. Link vanuit stijlgidsen naar productpagina\u2019s om een conversiepad te cre\u00ebren." },
          { number: "06", title: "Beheer de URL-levenscyclus voor seizoensproducten", body: "Wanneer producten uitverkocht zijn, redirect URL\u2019s naar relevante alternatieven in plaats van 404\u2019s te retourneren. Dit behoudt linkwaarde en houdt shoppers op je site." },
          { number: "07", title: "Bouw autoriteit via mode-PR", body: "Verdien backlinks van modepublicaties, stijlblogs en branchegidsen. Thematische autoriteitssignalen helpen Google je merk te herkennen als een betrouwbare modebron." },
        ],
      },
      {
        type: "richText",
        heading: "Seizoensgebonden SEO-strategie voor mode-e-commerce",
        richTextBlocks: [
          { body: "Mode-e-commerce draait om seizoenen, en je SEO-strategie zou dat ook moeten doen. De merken die winnen in organisch zoeken zijn degenen die content maanden voor de vraagpiek plannen - niet degenen die zich haasten om te publiceren wanneer trends al trending zijn." },
          { body: "Wij bouwen seizoensgebonden contentkalenders afgestemd op zoekvraagcurves. Lente/zomer- en herfst/wintercollecties vereisen elk speciale landingspagina\u2019s, blogcontent en interne linkstructuren die ruim voordat shoppers beginnen te browsen live gaan. Je pagina\u2019s worden ge\u00efndexeerd, bouwen autoriteit op en stijgen in de rankings voordat je concurrenten zelfs maar beginnen te schrijven." },
          { body: "Naast timing vereist seizoens-SEO voor mode zorgvuldig URL-beheer. Producten komen en gaan, maar de zoekwaarde die je hebt opgebouwd zou niet moeten verdwijnen met de voorraad van vorig seizoen. Wij implementeren redirectstrategie\u00ebn, evergreen collectiepagina\u2019s en archiveringsbenaderingen die je zuur verdiende rankings jaar na jaar behouden." },
        ],
      },
      {
        type: "richText",
        heading: "Waarom modemerken gespecialiseerde e-commerce SEO nodig hebben",
        richTextBlocks: [
          { body: "Generieke SEO-bureaus behandelen modewinkels als elke andere e-commercesite. Maar mode heeft unieke uitdagingen - seizoensgebonden voorraadcycli, visueel aankoopgedrag, trendgedreven zoekpieken en complexe variantstructuren - die gespecialiseerde expertise vereisen." },
          { body: "Een fashion SEO-specialist weet dat je zomerjurken-collectiepagina in maart ge\u00efndexeerd moet zijn, dat maattabelcontent retouren vermindert terwijl het zoekverkeer opvangt, en dat je lookbook-afbeeldingen gestructureerde data nodig hebben om in visuele zoekresultaten te verschijnen. Dit zijn geen dingen waar een generalistisch bureau aan denkt." },
          { body: "Wij hebben meer dan 8 jaar uitsluitend met e-commercemerken gewerkt, en mode is een van onze diepste verticalen. Wij weten welke contenttypes omzet genereren, hoe je de technische complexiteit van variantrijke catalogi aanpakt, en hoe je autoriteit opbouwt in een competitieve ruimte waar elk merk vecht om dezelfde stijlzoekwoorden." },
        ],
      },
      {
        type: "team",
        badge: "Het team",
        heading: "Het team",
        teamLead: {
          name: "Fabian van Til",
          role: "Strategie & Innovatie",
          bio: "Fabian stuurt de strategische richting van alle klantprojecten. Met meer dan 8 jaar e-commerce SEO-ervaring en diepgaande expertise in mode, luxe en kleding combineert hij groeistrategie met technische SEO-innovatie voor seizoensgebonden en evergreen organische omzet.",
          image: "/images/framer/C23VbBxvj2kY5TMoXAJHXWVLaA.webp",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "Technical & On-Page SEO",
            bio: "Dimitar bouwt de technische SEO-fundamenten en on-page optimalisaties voor modewinkels. Hij is gespecialiseerd in variantcanonicalisatie, beeldoptimalisatie, gestructureerde data voor productcatalogi en sitearchitectuur die meeschaalt met seizoenscollecties.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://www.linkedin.com/in/dimitar-georgiev-seo/",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Linkbuilding",
            bio: "Martinijan beheerst linkacquisitie en digitale PR voor modemerken. Hij bouwt backlinkprofielen op via outreach naar modepublicaties, samenwerkingen met stijlblogs en strategische plaatsingen die de domeinautoriteit versterken in competitieve modemarkten.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "Content, Linkbuilding & PR",
            bio: "Gjorgi ontwerpt contentstrategiee\u00ebn voor modemerken die ranken en converteren. Hij is gespecialiseerd in collectiepagina-optimalisatie, seizoensgebonden contentplanning, stijlgidscreatie en redactionele kalenders afgestemd op modevoektrends en linkbuilding- en PR-campagnes.",
            image: "/images/framer/gjorgi-jovev.png",
            linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
          },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "Zijn jullie gespecialiseerd in mode-e-commerce?", answer: "Ja. Wij werken uitsluitend met e-commercemerken, en mode is een van onze kernverticalen. Wij begrijpen seizoensgebonden voorraadcycli, variantbeheer en het visuele karakter van modezoekgedrag. Lees onze [mode e-commerce SEO-gids](/blog/fashion-ecommerce-seo)." },
        { question: "Hoe gaan jullie om met seizoenscontent voor modemerken?", answer: "Wij plannen content 3 tot 6 maanden voor elk seizoen. [Collectiepagina\u2019s](/academy/category-page-seo), trendgidsen en stijlcontent worden voorbereid en geoptimaliseerd v\u00f3\u00f3r de zoekvraag piekt - zodat je al rankt wanneer shoppers beginnen te zoeken." },
        { question: "Kunnen jullie helpen met internationale fashion SEO?", answer: "Absoluut. Wij verzorgen meertalige SEO voor modemerken die op verschillende markten verkopen. Dit omvat hreflang-implementatie, gelokaliseerde content en marktspecifiek zoekwoordonderzoek." },
        { question: "Hoe gaan jullie om met productvarianten in SEO?", answer: "Wij implementeren correcte canonicalisatie voor maat- en kleurvarianten, beheren URL-parameters en zorgen ervoor dat Google zich richt op je hoofdproductpagina\u2019s in plaats van crawlbudget te verspillen aan variant-URL\u2019s. Onze [productpagina SEO-gids](/academy/product-page-seo) behandelt variantbeheer in detail." },
        { question: "Hoe meten jullie succes voor modemerken?", answer: "Wij volgen organische omzet, verkeer van seizoensgebonden en evergreen zoekwoorden, rankings van collectiepagina\u2019s en conversieratio\u2019s. Wij rapporteren maandelijks over metrics die ertoe doen voor je bedrijfsresultaat." },
        { question: "Met welke modemerken werken jullie doorgaans?", answer: "Wij werken met DTC-modemerken, duurzame kledingbedrijven en gespecialiseerde retailers met meer dan \u20ac500K jaaromzet. Onze klanten vari\u00ebren van opkomende ontwerpers tot gevestigde modelabels." },
      ],
      miniCta: {
        heading: "Klaar om je modemerk te laten groeien?",
        subtitle: "Boek een gratis strategiegesprek en wij laten je de organische kansen zien die je misloopt.",
      },
    },
  },
};
