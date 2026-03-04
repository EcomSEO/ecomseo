import type { Locale } from "../../config";
import type { ServicePageProps } from "@/components/service/ServicePageTemplate";

export const shopifySeoData: Record<Locale, ServicePageProps> = {
  en: {
    hero: {
      badge: "Shopify SEO Experts",
      heading: "Shopify SEO That Actually Drives Revenue",
      subtitle:
        "Our Chef\u2019s Special. We audit, fix, and scale organic traffic for Shopify and Shopify Plus stores \u2014 so you can stop bleeding revenue to competitors.",
      ctaText: "Book a Shopify SEO Audit",
    },
    trustBar: "Trusted by 20+ Shopify stores scaling organic revenue",
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
              "Collection filters and tags create thousands of duplicate URLs that dilute your crawl budget.",
          },
          {
            title: "Slow Theme Speed",
            description:
              "Bloated Liquid templates, unoptimized images, and excessive app scripts tank your Core Web Vitals.",
          },
          {
            title: "Broken Canonical Tags",
            description:
              "Shopify default canonicals often point to the wrong URL variant, confusing Google about your preferred pages.",
          },
          {
            title: "Pagination Indexation",
            description:
              "Paginated collection pages get indexed as separate URLs, splitting authority across dozens of thin pages.",
          },
          {
            title: "Missing Structured Data",
            description:
              "Product, review, and breadcrumb schema are absent or broken \u2014 costing you rich snippet visibility.",
          },
          {
            title: "URL Structure Limits",
            description:
              "Shopify enforces /collections/ and /products/ prefixes. We work within these constraints for optimal crawlability.",
          },
        ],
      },
      {
        type: "process",
        badge: "Our Playbook",
        heading: "How We Scale Shopify Organic Traffic",
        subtitle:
          "A proven four-step process refined across 50+ Shopify stores.",
        process: [
          {
            number: "01",
            title: "Technical Audit",
            description:
              "Full crawl analysis of your Shopify store. We map every indexation issue, canonical conflict, and speed bottleneck.",
          },
          {
            number: "02",
            title: "Theme Optimization",
            description:
              "Speed fixes at the Liquid template level. We optimize render-blocking resources, images, and third-party scripts.",
          },
          {
            number: "03",
            title: "Collection Architecture",
            description:
              "Restructure collections, tags, and internal linking to create a clear hierarchy Google can understand and reward.",
          },
          {
            number: "04",
            title: "Ongoing Monitoring",
            description:
              "Monthly reporting, rank tracking, and iterative improvements. We catch issues before they cost you traffic.",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Deliverables",
        heading: "What You Get Every Month",
        subtitle:
          "Transparent reporting and tangible outputs \u2014 no fluff, no vanity metrics.",
        deliverables: [
          {
            title: "Technical Audit Report",
            description: "Full crawl + prioritized fix list",
          },
          {
            title: "Schema Implementation",
            description: "Product + breadcrumb JSON-LD",
          },
          {
            title: "Speed Optimization",
            description: "Core Web Vitals improvements",
          },
          {
            title: "Monthly Reporting",
            description: "Rankings, traffic, revenue impact",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Why does my Shopify store need specialized SEO?",
          answer:
            "Shopify has unique technical SEO challenges that generic agencies miss \u2014 duplicate content from collections and tags, auto-generated URL structures, limited control over canonical tags, and theme-level speed issues. We specialize in solving these platform-specific problems so your store ranks higher and converts more organic traffic.",
        },
        {
          question: "How long until I see results from Shopify SEO?",
          answer:
            "Most stores see measurable improvements in organic traffic within 60\u201390 days after our technical fixes are implemented. Significant revenue impact typically follows within 4\u20136 months, depending on your niche competitiveness and current site health.",
        },
        {
          question: "Do you work with Shopify Plus stores?",
          answer:
            "Absolutely. We work with both standard Shopify and Shopify Plus stores. Plus stores often have more complex catalog structures, international storefronts, and custom theme code \u2014 all areas where our technical SEO expertise delivers the most value.",
        },
        {
          question: "What does a Shopify SEO audit include?",
          answer:
            "Our audit covers crawlability and indexation issues, duplicate content from collections/tags/vendors, canonical tag implementation, structured data gaps, Core Web Vitals and theme speed, URL architecture, internal linking structure, and content gaps vs. your top competitors.",
        },
        {
          question: "Will you make changes directly to my Shopify store?",
          answer:
            "Yes, with your approval. We handle all technical implementations \u2014 theme code optimizations, schema markup, meta tag templates, redirect management, and sitemap configuration. You review and approve every change before it goes live.",
        },
        {
          question:
            "How is EcomSEO different from other Shopify SEO agencies?",
          answer:
            "We only work with ecommerce brands, so we understand the revenue impact of every SEO decision. We focus on profit metrics (not vanity rankings), provide radical transparency in reporting, and bring an operator mindset \u2014 we have built and scaled ecommerce brands ourselves, not just optimized them from the outside.",
        },
      ],
      miniCta: {
        heading: "Ready to Fix Your Shopify SEO?",
        subtitle:
          "Book a free audit call and we will show you exactly what is holding your store back.",
      },
    },
  },
  de: {
    hero: {
      badge: "Shopify-SEO-Experten",
      heading: "Shopify-SEO, das wirklich Umsatz bringt",
      subtitle:
        "Unser Spezialgebiet. Wir pr\u00fcfen, reparieren und skalieren den organischen Traffic f\u00fcr Shopify- und Shopify-Plus-Shops \u2014 damit Sie aufh\u00f6ren, Umsatz an die Konkurrenz zu verlieren.",
      ctaText: "Shopify-SEO-Audit buchen",
    },
    trustBar: "Mehr als 20 Shopify-Shops vertrauen uns beim organischen Wachstum",
    sections: [
      {
        type: "stats",
        badge: "Erfolgsbilanz",
        heading: "Zahlen, die f\u00fcr sich sprechen",
        stats: [
          { value: "8+", label: "Jahre Shopify-SEO" },
          { value: "12\u00a0Mio.\u00a0\u20ac+", label: "generierter Umsatz" },
          { value: "50+", label: "optimierte Shopify-Shops" },
          { value: "140\u00a0%", label: "durchschn. Traffic-Steigerung" },
        ],
      },
      {
        type: "benefits",
        badge: "H\u00e4ufige Shopify-SEO-Probleme",
        heading: "Die Shopify-SEO-Probleme, die wir t\u00e4glich l\u00f6sen",
        subtitle:
          "Die meisten Shopify-Shops haben dieselben technischen SEO-Altlasten. Wir wissen genau, wo wir suchen m\u00fcssen.",
        benefits: [
          {
            title: "Duplicate Content",
            description:
              "Kollektionsfilter und Tags erzeugen Tausende doppelte URLs, die Ihr Crawl-Budget verw\u00e4ssern.",
          },
          {
            title: "Langsame Themes",
            description:
              "Aufgebl\u00e4hte Liquid-Templates, nicht optimierte Bilder und zu viele App-Skripte verschlechtern Ihre Core Web Vitals.",
          },
          {
            title: "Fehlerhafte Canonical-Tags",
            description:
              "Shopifys Standard-Canonicals verweisen oft auf die falsche URL-Variante und verwirren Google \u00fcber Ihre bevorzugten Seiten.",
          },
          {
            title: "Paginierungs-Indexierung",
            description:
              "Paginierte Kollektionsseiten werden als einzelne URLs indexiert und verteilen die Autorit\u00e4t auf Dutzende d\u00fcnner Seiten.",
          },
          {
            title: "Fehlende strukturierte Daten",
            description:
              "Produkt-, Bewertungs- und Breadcrumb-Schema fehlen oder sind fehlerhaft \u2014 das kostet Sie Rich-Snippet-Sichtbarkeit.",
          },
          {
            title: "URL-Struktur-Einschr\u00e4nkungen",
            description:
              "Shopify erzwingt /collections/- und /products/-Pr\u00e4fixe. Wir arbeiten innerhalb dieser Grenzen f\u00fcr optimale Crawlbarkeit.",
          },
        ],
      },
      {
        type: "process",
        badge: "Unser Playbook",
        heading: "So skalieren wir Shopify-organischen Traffic",
        subtitle:
          "Ein bew\u00e4hrter Vier-Schritte-Prozess, verfeinert an \u00fcber 50 Shopify-Shops.",
        process: [
          {
            number: "01",
            title: "Technisches Audit",
            description:
              "Vollst\u00e4ndige Crawl-Analyse Ihres Shopify-Shops. Wir identifizieren jedes Indexierungsproblem, jeden Canonical-Konflikt und jeden Speed-Engpass.",
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
          "Transparente Berichte und greifbare Ergebnisse \u2014 kein Blabla, keine Eitelkeitskennzahlen.",
        deliverables: [
          {
            title: "Technischer Audit-Bericht",
            description: "Vollst\u00e4ndiger Crawl + priorisierte Fix-Liste",
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
            "Shopify hat einzigartige technische SEO-Herausforderungen, die generische Agenturen \u00fcbersehen \u2014 Duplicate Content durch Kollektionen und Tags, automatisch generierte URL-Strukturen, begrenzte Kontrolle \u00fcber Canonical-Tags und Theme-bedingte Speed-Probleme. Wir sind auf die L\u00f6sung dieser plattformspezifischen Probleme spezialisiert.",
        },
        {
          question: "Wie schnell sehe ich Ergebnisse bei Shopify-SEO?",
          answer:
            "Die meisten Shops verzeichnen innerhalb von 60\u201390 Tagen nach Umsetzung unserer technischen Fixes messbare Verbesserungen beim organischen Traffic. Signifikante Umsatzauswirkungen folgen typischerweise innerhalb von 4\u20136 Monaten.",
        },
        {
          question: "Arbeiten Sie auch mit Shopify-Plus-Shops?",
          answer:
            "Absolut. Wir arbeiten sowohl mit Standard-Shopify als auch mit Shopify-Plus-Shops. Plus-Shops haben oft komplexere Katalogstrukturen, internationale Storefronts und individuellen Theme-Code \u2014 genau dort liefert unsere technische SEO-Expertise den gr\u00f6\u00dften Mehrwert.",
        },
        {
          question: "Was beinhaltet ein Shopify-SEO-Audit?",
          answer:
            "Unser Audit umfasst Crawlbarkeits- und Indexierungsprobleme, Duplicate Content durch Kollektionen/Tags/Hersteller, Canonical-Tag-Implementierung, strukturierte-Daten-L\u00fccken, Core Web Vitals und Theme-Speed, URL-Architektur, interne Verlinkungsstruktur und Content-L\u00fccken im Vergleich zu Ihren Top-Wettbewerbern.",
        },
        {
          question: "Nehmen Sie \u00c4nderungen direkt an meinem Shopify-Shop vor?",
          answer:
            "Ja, mit Ihrer Genehmigung. Wir \u00fcbernehmen alle technischen Implementierungen \u2014 Theme-Code-Optimierungen, Schema-Markup, Meta-Tag-Templates, Redirect-Management und Sitemap-Konfiguration. Sie pr\u00fcfen und genehmigen jede \u00c4nderung, bevor sie live geht.",
        },
        {
          question:
            "Was unterscheidet EcomSEO von anderen Shopify-SEO-Agenturen?",
          answer:
            "Wir arbeiten ausschlie\u00dflich mit E-Commerce-Marken und verstehen daher die Umsatzauswirkung jeder SEO-Entscheidung. Wir konzentrieren uns auf Profit-Metriken (nicht Eitelkeits-Rankings), bieten radikale Transparenz im Reporting und denken als Unternehmer \u2014 wir haben selbst E-Commerce-Marken aufgebaut und skaliert.",
        },
      ],
      miniCta: {
        heading: "Bereit, Ihr Shopify-SEO zu reparieren?",
        subtitle:
          "Buchen Sie ein kostenloses Audit-Gespr\u00e4ch und wir zeigen Ihnen genau, was Ihren Shop zur\u00fckh\u00e4lt.",
      },
    },
  },
  fr: {
    hero: {
      badge: "Experts SEO Shopify",
      heading: "SEO Shopify qui g\u00e9n\u00e8re vraiment du chiffre d\u2019affaires",
      subtitle:
        "Notre sp\u00e9cialit\u00e9. Nous auditons, corrigeons et d\u00e9veloppons le trafic organique des boutiques Shopify et Shopify Plus \u2014 pour que vous arr\u00eatiez de perdre du chiffre d\u2019affaires au profit de vos concurrents.",
      ctaText: "R\u00e9server un audit SEO Shopify",
    },
    trustBar: "Plus de 20 boutiques Shopify nous font confiance pour leur croissance organique",
    sections: [
      {
        type: "stats",
        badge: "Bilan",
        heading: "Des chiffres qui parlent d\u2019eux-m\u00eames",
        stats: [
          { value: "8+", label: "ann\u00e9es de SEO Shopify" },
          { value: "12\u00a0M\u00a0\u20ac+", label: "de CA g\u00e9n\u00e9r\u00e9" },
          { value: "50+", label: "boutiques Shopify optimis\u00e9es" },
          { value: "140\u00a0%", label: "hausse de trafic moyenne" },
        ],
      },
      {
        type: "benefits",
        badge: "Probl\u00e8mes SEO Shopify courants",
        heading: "Les probl\u00e8mes SEO Shopify que nous r\u00e9solvons chaque jour",
        subtitle:
          "La plupart des boutiques Shopify partagent les m\u00eames dettes techniques SEO. Nous savons exactement o\u00f9 chercher.",
        benefits: [
          {
            title: "Contenu dupliq\u00e9",
            description:
              "Les filtres et tags de collections cr\u00e9ent des milliers d\u2019URL dupliq\u00e9es qui diluent votre budget de crawl.",
          },
          {
            title: "Th\u00e8me lent",
            description:
              "Des templates Liquid surcharg\u00e9s, des images non optimis\u00e9es et des scripts d\u2019apps excessifs plombent vos Core Web Vitals.",
          },
          {
            title: "Tags canonical cass\u00e9s",
            description:
              "Les canonicals par d\u00e9faut de Shopify pointent souvent vers la mauvaise variante d\u2019URL, cr\u00e9ant de la confusion pour Google.",
          },
          {
            title: "Indexation de la pagination",
            description:
              "Les pages de collection pagin\u00e9es sont index\u00e9es s\u00e9par\u00e9ment, dispersant l\u2019autorit\u00e9 sur des dizaines de pages \u00e0 faible contenu.",
          },
          {
            title: "Donn\u00e9es structur\u00e9es manquantes",
            description:
              "Les sch\u00e9mas produit, avis et fil d\u2019Ariane sont absents ou cass\u00e9s \u2014 vous co\u00fbtant en visibilit\u00e9 de rich snippets.",
          },
          {
            title: "Limites de structure d\u2019URL",
            description:
              "Shopify impose les pr\u00e9fixes /collections/ et /products/. Nous travaillons dans ces contraintes pour une crawlabilit\u00e9 optimale.",
          },
        ],
      },
      {
        type: "process",
        badge: "Notre m\u00e9thode",
        heading: "Comment nous d\u00e9veloppons le trafic organique Shopify",
        subtitle:
          "Un processus en quatre \u00e9tapes affin\u00e9 sur plus de 50 boutiques Shopify.",
        process: [
          {
            number: "01",
            title: "Audit technique",
            description:
              "Analyse compl\u00e8te du crawl de votre boutique Shopify. Nous identifions chaque probl\u00e8me d\u2019indexation, conflit canonical et goulot d\u2019\u00e9tranglement.",
          },
          {
            number: "02",
            title: "Optimisation du th\u00e8me",
            description:
              "Corrections de vitesse au niveau des templates Liquid. Nous optimisons les ressources bloquantes, les images et les scripts tiers.",
          },
          {
            number: "03",
            title: "Architecture des collections",
            description:
              "Restructuration des collections, tags et maillage interne pour cr\u00e9er une hi\u00e9rarchie claire que Google peut comprendre et r\u00e9compenser.",
          },
          {
            number: "04",
            title: "Suivi continu",
            description:
              "Rapports mensuels, suivi des positions et am\u00e9liorations it\u00e9ratives. Nous d\u00e9tectons les probl\u00e8mes avant qu\u2019ils ne co\u00fbtent du trafic.",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Livrables",
        heading: "Ce que vous recevez chaque mois",
        subtitle:
          "Des rapports transparents et des r\u00e9sultats concrets \u2014 pas de baratin, pas de m\u00e9triques de vanit\u00e9.",
        deliverables: [
          {
            title: "Rapport d\u2019audit technique",
            description: "Crawl complet + liste de corrections prioris\u00e9es",
          },
          {
            title: "Impl\u00e9mentation de sch\u00e9mas",
            description: "JSON-LD produit + fil d\u2019Ariane",
          },
          {
            title: "Optimisation de la vitesse",
            description: "Am\u00e9liorations des Core Web Vitals",
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
          question: "Pourquoi ma boutique Shopify a-t-elle besoin d\u2019un SEO sp\u00e9cialis\u00e9\u00a0?",
          answer:
            "Shopify pr\u00e9sente des d\u00e9fis techniques SEO uniques que les agences g\u00e9n\u00e9ralistes ne voient pas \u2014 contenu dupliq\u00e9 par les collections et tags, structures d\u2019URL auto-g\u00e9n\u00e9r\u00e9es, contr\u00f4le limit\u00e9 des canonical tags et probl\u00e8mes de vitesse li\u00e9s au th\u00e8me. Nous sommes sp\u00e9cialis\u00e9s dans la r\u00e9solution de ces probl\u00e8mes sp\u00e9cifiques \u00e0 la plateforme.",
        },
        {
          question: "En combien de temps vais-je voir des r\u00e9sultats avec le SEO Shopify\u00a0?",
          answer:
            "La plupart des boutiques constatent des am\u00e9liorations mesurables du trafic organique dans les 60\u00a0\u00e0\u00a090\u00a0jours suivant nos corrections techniques. L\u2019impact significatif sur le chiffre d\u2019affaires suit g\u00e9n\u00e9ralement dans les 4\u00a0\u00e0\u00a06\u00a0mois.",
        },
        {
          question: "Travaillez-vous avec les boutiques Shopify Plus\u00a0?",
          answer:
            "Absolument. Nous travaillons avec les boutiques Shopify standard et Shopify Plus. Les boutiques Plus ont souvent des structures de catalogue plus complexes, des vitrines internationales et du code de th\u00e8me personnalis\u00e9 \u2014 autant de domaines o\u00f9 notre expertise SEO technique apporte le plus de valeur.",
        },
        {
          question: "Que comprend un audit SEO Shopify\u00a0?",
          answer:
            "Notre audit couvre les probl\u00e8mes de crawlabilit\u00e9 et d\u2019indexation, le contenu dupliq\u00e9 des collections/tags/fournisseurs, l\u2019impl\u00e9mentation des canonical tags, les lacunes en donn\u00e9es structur\u00e9es, les Core Web Vitals et la vitesse du th\u00e8me, l\u2019architecture des URL, le maillage interne et les lacunes de contenu par rapport \u00e0 vos concurrents.",
        },
        {
          question: "Ferez-vous des modifications directement sur ma boutique Shopify\u00a0?",
          answer:
            "Oui, avec votre accord. Nous g\u00e9rons toutes les impl\u00e9mentations techniques \u2014 optimisations du code du th\u00e8me, balisage schema, templates de balises meta, gestion des redirections et configuration du sitemap. Vous validez chaque modification avant sa mise en ligne.",
        },
        {
          question:
            "En quoi EcomSEO se distingue-t-il des autres agences SEO Shopify\u00a0?",
          answer:
            "Nous travaillons exclusivement avec des marques e-commerce et comprenons l\u2019impact sur le CA de chaque d\u00e9cision SEO. Nous nous concentrons sur les m\u00e9triques de profit (pas les classements de vanit\u00e9), offrons une transparence totale dans nos rapports et apportons un \u00e9tat d\u2019esprit d\u2019op\u00e9rateur \u2014 nous avons nous-m\u00eames construit et d\u00e9velopp\u00e9 des marques e-commerce.",
        },
      ],
      miniCta: {
        heading: "Pr\u00eat \u00e0 corriger votre SEO Shopify\u00a0?",
        subtitle:
          "R\u00e9servez un appel d\u2019audit gratuit et nous vous montrerons exactement ce qui freine votre boutique.",
      },
    },
  },
  es: {
    hero: {
      badge: "Expertos en SEO para Shopify",
      heading: "SEO para Shopify que realmente genera ingresos",
      subtitle:
        "Nuestra especialidad. Auditamos, reparamos y escalamos el tr\u00e1fico org\u00e1nico de tiendas Shopify y Shopify Plus, para que dejes de perder ingresos frente a la competencia.",
      ctaText: "Reserva una auditor\u00eda SEO Shopify",
    },
    trustBar: "M\u00e1s de 20 tiendas Shopify conf\u00edan en nosotros para crecer org\u00e1nicamente",
    sections: [
      {
        type: "stats",
        badge: "Trayectoria",
        heading: "N\u00fameros que hablan por s\u00ed solos",
        stats: [
          { value: "8+", label: "a\u00f1os de SEO Shopify" },
          { value: "12\u00a0M\u00a0\u20ac+", label: "ingresos generados" },
          { value: "50+", label: "tiendas Shopify optimizadas" },
          { value: "140\u00a0%", label: "aumento medio de tr\u00e1fico" },
        ],
      },
      {
        type: "benefits",
        badge: "Problemas SEO comunes en Shopify",
        heading: "Los problemas de SEO Shopify que resolvemos cada d\u00eda",
        subtitle:
          "La mayor\u00eda de las tiendas Shopify comparten la misma deuda t\u00e9cnica SEO. Sabemos exactamente d\u00f3nde mirar.",
        benefits: [
          {
            title: "Contenido duplicado",
            description:
              "Los filtros y etiquetas de colecciones crean miles de URLs duplicadas que diluyen tu presupuesto de rastreo.",
          },
          {
            title: "Tema lento",
            description:
              "Plantillas Liquid sobrecargadas, im\u00e1genes sin optimizar y scripts excesivos de apps hunden tus Core Web Vitals.",
          },
          {
            title: "Etiquetas canonical rotas",
            description:
              "Los canonicals por defecto de Shopify a menudo apuntan a la variante de URL incorrecta, confundiendo a Google sobre tus p\u00e1ginas preferidas.",
          },
          {
            title: "Indexaci\u00f3n de paginaci\u00f3n",
            description:
              "Las p\u00e1ginas de colecci\u00f3n paginadas se indexan como URLs independientes, dividiendo la autoridad en decenas de p\u00e1ginas d\u00e9biles.",
          },
          {
            title: "Datos estructurados ausentes",
            description:
              "Los esquemas de producto, rese\u00f1as y breadcrumbs est\u00e1n ausentes o rotos, cost\u00e1ndote visibilidad en rich snippets.",
          },
          {
            title: "Limitaciones de estructura de URL",
            description:
              "Shopify impone los prefijos /collections/ y /products/. Trabajamos dentro de estas restricciones para una rastreabilidad \u00f3ptima.",
          },
        ],
      },
      {
        type: "process",
        badge: "Nuestro m\u00e9todo",
        heading: "C\u00f3mo escalamos el tr\u00e1fico org\u00e1nico en Shopify",
        subtitle:
          "Un proceso probado en cuatro pasos, perfeccionado en m\u00e1s de 50 tiendas Shopify.",
        process: [
          {
            number: "01",
            title: "Auditor\u00eda t\u00e9cnica",
            description:
              "An\u00e1lisis completo de rastreo de tu tienda Shopify. Mapeamos cada problema de indexaci\u00f3n, conflicto canonical y cuello de botella de velocidad.",
          },
          {
            number: "02",
            title: "Optimizaci\u00f3n del tema",
            description:
              "Correcciones de velocidad a nivel de plantilla Liquid. Optimizamos recursos que bloquean el renderizado, im\u00e1genes y scripts de terceros.",
          },
          {
            number: "03",
            title: "Arquitectura de colecciones",
            description:
              "Reestructuramos colecciones, etiquetas y enlaces internos para crear una jerarqu\u00eda clara que Google entienda y recompense.",
          },
          {
            number: "04",
            title: "Monitorizaci\u00f3n continua",
            description:
              "Informes mensuales, seguimiento de rankings y mejoras iterativas. Detectamos problemas antes de que te cuesten tr\u00e1fico.",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Entregables",
        heading: "Lo que recibes cada mes",
        subtitle:
          "Informes transparentes y resultados tangibles \u2014 sin relleno, sin m\u00e9tricas de vanidad.",
        deliverables: [
          {
            title: "Informe de auditor\u00eda t\u00e9cnica",
            description: "Crawl completo + lista de correcciones priorizada",
          },
          {
            title: "Implementaci\u00f3n de schema",
            description: "JSON-LD de producto + breadcrumbs",
          },
          {
            title: "Optimizaci\u00f3n de velocidad",
            description: "Mejoras en Core Web Vitals",
          },
          {
            title: "Informe mensual",
            description: "Rankings, tr\u00e1fico, impacto en ingresos",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "\u00bfPor qu\u00e9 mi tienda Shopify necesita SEO especializado?",
          answer:
            "Shopify tiene desaf\u00edos t\u00e9cnicos SEO \u00fanicos que las agencias generalistas pasan por alto: contenido duplicado por colecciones y etiquetas, estructuras de URL autogeneradas, control limitado de canonical tags y problemas de velocidad del tema. Nos especializamos en resolver estos problemas espec\u00edficos de la plataforma.",
        },
        {
          question: "\u00bfCu\u00e1nto tarda en verse resultados con el SEO de Shopify?",
          answer:
            "La mayor\u00eda de tiendas ven mejoras medibles en tr\u00e1fico org\u00e1nico en 60\u201390 d\u00edas tras implementar nuestras correcciones t\u00e9cnicas. El impacto significativo en ingresos suele llegar en 4\u20136 meses.",
        },
        {
          question: "\u00bfTrabajan con tiendas Shopify Plus?",
          answer:
            "Por supuesto. Trabajamos con tiendas Shopify est\u00e1ndar y Shopify Plus. Las tiendas Plus suelen tener estructuras de cat\u00e1logo m\u00e1s complejas, escaparates internacionales y c\u00f3digo de tema personalizado, \u00e1reas donde nuestra experiencia t\u00e9cnica SEO aporta m\u00e1s valor.",
        },
        {
          question: "\u00bfQu\u00e9 incluye una auditor\u00eda SEO de Shopify?",
          answer:
            "Nuestra auditor\u00eda cubre problemas de rastreabilidad e indexaci\u00f3n, contenido duplicado de colecciones/etiquetas/proveedores, implementaci\u00f3n de canonical tags, carencias en datos estructurados, Core Web Vitals y velocidad del tema, arquitectura de URLs, estructura de enlazado interno y brechas de contenido frente a tus principales competidores.",
        },
        {
          question: "\u00bfHar\u00e9is cambios directamente en mi tienda Shopify?",
          answer:
            "S\u00ed, con tu aprobaci\u00f3n. Nos encargamos de todas las implementaciones t\u00e9cnicas: optimizaciones del c\u00f3digo del tema, marcado schema, plantillas de meta tags, gesti\u00f3n de redirecciones y configuraci\u00f3n de sitemap. T\u00fa revisas y apruebas cada cambio antes de que se publique.",
        },
        {
          question:
            "\u00bfEn qu\u00e9 se diferencia EcomSEO de otras agencias SEO para Shopify?",
          answer:
            "Solo trabajamos con marcas de e-commerce, as\u00ed que entendemos el impacto en ingresos de cada decisi\u00f3n SEO. Nos centramos en m\u00e9tricas de rentabilidad (no rankings de vanidad), ofrecemos total transparencia en los informes y pensamos como operadores: hemos construido y escalado marcas de e-commerce nosotros mismos.",
        },
      ],
      miniCta: {
        heading: "\u00bfListo para arreglar tu SEO en Shopify?",
        subtitle:
          "Reserva una llamada de auditor\u00eda gratuita y te mostraremos exactamente qu\u00e9 est\u00e1 frenando tu tienda.",
      },
    },
  },
  it: {
    hero: {
      badge: "Esperti SEO Shopify",
      heading: "SEO Shopify che genera davvero fatturato",
      subtitle:
        "La nostra specialit\u00e0. Analizziamo, correggiamo e facciamo crescere il traffico organico per negozi Shopify e Shopify Plus \u2014 cos\u00ec smetti di perdere fatturato a favore dei concorrenti.",
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
          { value: "12\u00a0Mln\u00a0\u20ac+", label: "fatturato generato" },
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
              "Le pagine di collezione paginate vengono indicizzate come URL separate, disperdendo l\u2019autorit\u00e0 su decine di pagine deboli.",
          },
          {
            title: "Dati strutturati mancanti",
            description:
              "Gli schema prodotto, recensioni e breadcrumb sono assenti o rotti \u2014 ti costano visibilit\u00e0 nei rich snippet.",
          },
          {
            title: "Limiti della struttura URL",
            description:
              "Shopify impone i prefissi /collections/ e /products/. Lavoriamo all\u2019interno di questi vincoli per una scansionabilit\u00e0 ottimale.",
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
              "Analisi completa del crawl del tuo negozio Shopify. Mappiamo ogni problema di indicizzazione, conflitto canonical e collo di bottiglia della velocit\u00e0.",
          },
          {
            number: "02",
            title: "Ottimizzazione del tema",
            description:
              "Correzioni di velocit\u00e0 a livello di template Liquid. Ottimizziamo risorse bloccanti, immagini e script di terze parti.",
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
          "Report trasparenti e risultati concreti \u2014 niente fuffa, niente metriche di vanit\u00e0.",
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
            title: "Ottimizzazione velocit\u00e0",
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
          question: "Perch\u00e9 il mio negozio Shopify ha bisogno di un SEO specializzato?",
          answer:
            "Shopify presenta sfide SEO tecniche uniche che le agenzie generaliste non colgono \u2014 contenuti duplicati da collezioni e tag, strutture URL generate automaticamente, controllo limitato sui tag canonical e problemi di velocit\u00e0 del tema. Siamo specializzati nel risolvere questi problemi specifici della piattaforma.",
        },
        {
          question: "Quanto tempo ci vuole per vedere risultati con il SEO Shopify?",
          answer:
            "La maggior parte dei negozi registra miglioramenti misurabili nel traffico organico entro 60\u201390 giorni dall\u2019implementazione dei nostri fix tecnici. L\u2019impatto significativo sul fatturato segue tipicamente entro 4\u20136 mesi.",
        },
        {
          question: "Lavorate anche con negozi Shopify Plus?",
          answer:
            "Assolutamente. Lavoriamo sia con Shopify standard che con Shopify Plus. I negozi Plus spesso hanno strutture di catalogo pi\u00f9 complesse, vetrine internazionali e codice tema personalizzato \u2014 tutte aree in cui la nostra competenza SEO tecnica offre il massimo valore.",
        },
        {
          question: "Cosa include un audit SEO Shopify?",
          answer:
            "Il nostro audit copre problemi di scansionabilit\u00e0 e indicizzazione, contenuti duplicati da collezioni/tag/fornitori, implementazione dei tag canonical, lacune nei dati strutturati, Core Web Vitals e velocit\u00e0 del tema, architettura degli URL, struttura dei link interni e gap di contenuto rispetto ai tuoi principali concorrenti.",
        },
        {
          question: "Apporterete modifiche direttamente al mio negozio Shopify?",
          answer:
            "S\u00ec, con la tua approvazione. Gestiamo tutte le implementazioni tecniche \u2014 ottimizzazioni del codice del tema, markup schema, template dei meta tag, gestione dei redirect e configurazione della sitemap. Tu rivedi e approvi ogni modifica prima che vada live.",
        },
        {
          question:
            "In cosa si differenzia EcomSEO dalle altre agenzie SEO Shopify?",
          answer:
            "Lavoriamo esclusivamente con brand e-commerce, quindi comprendiamo l\u2019impatto sul fatturato di ogni decisione SEO. Ci concentriamo su metriche di profitto (non ranking di vanit\u00e0), offriamo totale trasparenza nel reporting e ragioniamo da operatori \u2014 abbiamo costruito e scalato brand e-commerce noi stessi.",
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
      heading: "Shopify-SEO die \u00e9cht omzet oplevert",
      subtitle:
        "Ons paradepaardje. We auditen, fixen en schalen organisch verkeer voor Shopify- en Shopify Plus-winkels \u2014 zodat je stopt met omzet verliezen aan de concurrentie.",
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
          { value: "\u20ac\u00a012\u00a0M+", label: "gegenereerde omzet" },
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
              "Collectiefilters en tags cre\u00ebren duizenden dubbele URL\u2019s die je crawlbudget verdunnen.",
          },
          {
            title: "Traag thema",
            description:
              "Opgeblazen Liquid-templates, ongeoptimaliseerde afbeeldingen en te veel app-scripts schaden je Core Web Vitals.",
          },
          {
            title: "Foutieve canonical-tags",
            description:
              "Shopify\u2019s standaard canonicals verwijzen vaak naar de verkeerde URL-variant, wat Google in verwarring brengt over je voorkeurspagin\u2019s.",
          },
          {
            title: "Paginering-indexatie",
            description:
              "Gepagineerde collectiepagina\u2019s worden als afzonderlijke URL\u2019s ge\u00efndexeerd, waardoor autoriteit verdeeld raakt over tientallen dunne pagina\u2019s.",
          },
          {
            title: "Ontbrekende gestructureerde data",
            description:
              "Product-, review- en breadcrumb-schema\u2019s ontbreken of zijn defect \u2014 dat kost je rich snippet-zichtbaarheid.",
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
              "Collecties, tags en interne links herstructureren om een duidelijke hi\u00ebrarchie te cre\u00ebren die Google begrijpt en beloont.",
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
          "Transparante rapportages en tastbare resultaten \u2014 geen opvulling, geen ijdelheidsmetrics.",
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
            "Shopify heeft unieke technische SEO-uitdagingen die generieke bureaus missen \u2014 dubbele content door collecties en tags, automatisch gegenereerde URL-structuren, beperkte controle over canonical tags en thema-gerelateerde snelheidsproblemen. Wij zijn gespecialiseerd in het oplossen van deze platformspecifieke problemen.",
        },
        {
          question: "Hoe snel zie ik resultaten van Shopify-SEO?",
          answer:
            "De meeste winkels zien meetbare verbeteringen in organisch verkeer binnen 60\u201390 dagen na implementatie van onze technische fixes. Significante omzetimpact volgt doorgaans binnen 4\u20136 maanden.",
        },
        {
          question: "Werken jullie ook met Shopify Plus-winkels?",
          answer:
            "Absoluut. We werken met zowel standaard Shopify als Shopify Plus-winkels. Plus-winkels hebben vaak complexere catalogusstructuren, internationale storefronts en aangepaste themacode \u2014 precies de gebieden waar onze technische SEO-expertise het meeste waarde oplevert.",
        },
        {
          question: "Wat omvat een Shopify SEO-audit?",
          answer:
            "Onze audit dekt crawlbaarheids- en indexatieproblemen, dubbele content van collecties/tags/leveranciers, canonical tag-implementatie, hiaten in gestructureerde data, Core Web Vitals en themasnelheid, URL-architectuur, interne linkstructuur en contentgaten ten opzichte van je belangrijkste concurrenten.",
        },
        {
          question: "Brengen jullie wijzigingen direct aan in mijn Shopify-winkel?",
          answer:
            "Ja, met jouw goedkeuring. We verzorgen alle technische implementaties \u2014 themacode-optimalisaties, schema-markup, meta-tag-templates, redirectbeheer en sitemapconfiguratie. Jij reviewt en keurt elke wijziging goed voordat deze live gaat.",
        },
        {
          question:
            "Wat onderscheidt EcomSEO van andere Shopify SEO-bureaus?",
          answer:
            "We werken uitsluitend met e-commercemerken, dus begrijpen we de omzetimpact van elke SEO-beslissing. We focussen op winstmetrics (niet ijdelheidsrankings), bieden radicale transparantie in rapportages en denken als operators \u2014 we hebben zelf e-commercemerken gebouwd en opgeschaald.",
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
