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
        type: "deliverables",
        badge: "Leistungen",
        heading: "Was Sie jeden Monat erhalten",
        deliverables: [
          {
            title: "Plattform-Audit",
            description: "Vollst\u00e4ndiger Crawl-Bericht zu Facetten, Kategorien und Geschwindigkeit",
          },
          {
            title: "URL-Strategie",
            description: "Bereinigung der Facettennavigation und Canonical-Implementierung",
          },
          {
            title: "Content-Plan",
            description: "Fahrplan f\u00fcr Kategorie-Content und Produktoptimierung",
          },
          {
            title: "Monatliches Reporting",
            description: "Tracking von Rankings, Traffic und technischer Gesundheit",
          },
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
        type: "deliverables",
        badge: "Livrables",
        heading: "Ce que vous recevez chaque mois",
        deliverables: [
          {
            title: "Audit de plateforme",
            description: "Rapport de crawl complet couvrant facettes, cat\u00e9gories et vitesse",
          },
          {
            title: "Strat\u00e9gie d\u2019URL",
            description: "Nettoyage de la navigation \u00e0 facettes et impl\u00e9mentation des canoniques",
          },
          {
            title: "Plan de contenu",
            description: "Feuille de route pour le contenu cat\u00e9goriel et l\u2019optimisation produit",
          },
          {
            title: "Reporting mensuel",
            description: "Suivi des classements, du trafic et de la sant\u00e9 technique",
          },
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
        type: "deliverables",
        badge: "Entregables",
        heading: "Lo que recibes cada mes",
        deliverables: [
          {
            title: "Auditor\u00eda de plataforma",
            description: "Informe de rastreo completo que cubre facetas, categor\u00edas y velocidad",
          },
          {
            title: "Estrategia de URL",
            description: "Limpieza de navegaci\u00f3n facetada e implementaci\u00f3n de canonicales",
          },
          {
            title: "Plan de contenido",
            description: "Hoja de ruta para contenido de categor\u00edas y optimizaci\u00f3n de productos",
          },
          {
            title: "Reportes mensuales",
            description: "Seguimiento de posiciones, tr\u00e1fico y salud t\u00e9cnica",
          },
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
        type: "deliverables",
        badge: "Deliverable",
        heading: "Cosa ricevi ogni mese",
        deliverables: [
          {
            title: "Audit della piattaforma",
            description: "Report di crawl completo che copre faccette, categorie e velocit\u00e0",
          },
          {
            title: "Strategia URL",
            description: "Pulizia della navigazione a faccette e implementazione dei canonical",
          },
          {
            title: "Piano dei contenuti",
            description: "Roadmap per contenuto categorie e ottimizzazione prodotti",
          },
          {
            title: "Reporting mensile",
            description: "Monitoraggio di posizionamenti, traffico e salute tecnica",
          },
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
        type: "deliverables",
        badge: "Deliverables",
        heading: "Wat u elke maand ontvangt",
        deliverables: [
          {
            title: "Platformaudit",
            description: "Volledig crawlrapport over facetten, categorie\u00ebn en snelheid",
          },
          {
            title: "URL-strategie",
            description: "Opschoning van facetnavigatie en canonical-implementatie",
          },
          {
            title: "Contentplan",
            description: "Routekaart voor categorie-content en productoptimalisatie",
          },
          {
            title: "Maandelijkse rapportage",
            description: "Tracking van rankings, verkeer en technische gezondheid",
          },
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
