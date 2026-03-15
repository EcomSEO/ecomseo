import type { Locale } from "../../config";
import type { ServicePageProps } from "@/components/service/ServicePageTemplate";

export const adobeCommerceSeoData: Record<Locale, ServicePageProps> = {
  en: {
    hero: {
      badge: "Adobe Commerce Experts",
      heading: "Adobe Commerce SEO for Enterprise Ecommerce",
      subtitle:
        "We optimize Adobe Commerce (Magento) stores for maximum organic visibility. From complex multi-store setups to layered navigation \u2014 we handle the technical debt so you can scale.",
      ctaText: "Book an Adobe Commerce SEO Audit",
    },
    trustBar: "Trusted by 20+ Adobe Commerce stores scaling organic revenue",
    sections: [
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
          question: "Can you help with Magento 1 to Adobe Commerce 2 migration?",
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
          question: "How is EcomSEO different from other Adobe Commerce SEO agencies?",
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
    trustBar: "20+ Adobe Commerce Shops vertrauen uns f\u00fcr organisches Umsatzwachstum",
    sections: [
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
              "Drittanbieter-Module f\u00fcgen oft doppelte Meta-Tags, defektes Schema oder widersprüchliche Weiterleitungen ein, die Ihr SEO besch\u00e4digen.",
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
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Arbeiten Sie sowohl mit Magento als auch mit Adobe Commerce?",
          answer:
            "Ja. Adobe Commerce ist die Enterprise-Version von Magento. Wir arbeiten sowohl mit Magento Open Source als auch mit Adobe Commerce und bew\u00e4ltigen die spezifischen SEO-Herausforderungen jeder Plattformversion. Erfahren Sie mehr in unserem [Magento-E-Commerce-SEO-Leitfaden](/blog/magento-ecommerce-seo).",
        },
        {
          question: "Wie handhaben Sie Multi-Store-SEO f\u00fcr Adobe Commerce?",
          answer:
            "Wir implementieren korrekte Hreflang-Tags, Canonical-Strategien und Store-View-Konfigurationen, damit jeder Store-View die richtige Zielgruppe anspricht, ohne Duplicate-Content-Probleme zu erzeugen.",
        },
        {
          question: "K\u00f6nnen Sie bei der Migration von Magento 1 zu Adobe Commerce 2 helfen?",
          answer:
            "Absolut. Wir erstellen umfassende Redirect-Maps, bewahren URL-Equity und \u00fcberwachen den Traffic w\u00e4hrend der Migration, um organische Traffic-Verluste zu minimieren. Unser [Magento-SEO-Leitfaden](/academy/magento-seo-guide) behandelt Best Practices f\u00fcr Migrationen.",
        },
        {
          question: "Wie lange dauert ein Adobe Commerce SEO-Audit?",
          answer:
            "Enterprise-Audits dauern typischerweise 2\u20133 Wochen, abh\u00e4ngig von der Komplexit\u00e4t Ihres Multi-Store-Setups, der Anzahl der Store-Views und der Kataloggr\u00f6\u00dfe.",
        },
        {
          question: "Arbeiten Sie direkt mit unserem Entwicklungsteam zusammen?",
          answer:
            "Ja. Wir liefern detaillierte technische Spezifikationen und arbeiten eng mit Ihrem Entwicklungsteam zusammen. Wir verstehen die Adobe Commerce Architektur und kommunizieren effektiv mit Entwicklern.",
        },
        {
          question: "Wie unterscheidet sich EcomSEO von anderen Adobe Commerce SEO-Agenturen?",
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
    trustBar: "Plus de 20 boutiques Adobe Commerce nous font confiance pour leur croissance organique",
    sections: [
      {
        type: "benefits",
        badge: "Probl\u00e8mes SEO courants d\u2019Adobe Commerce",
        heading: "Les probl\u00e8mes entreprise n\u00e9cessitent un SEO entreprise",
        benefits: [
          {
            title: "Configuration multi-boutiques complexe",
            description:
              "Plusieurs vues boutique, langues et devises cr\u00e9ent du contenu dupliqué et de la confusion canonique dans tout votre catalogue.",
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
          question: "Comment g\u00e9rez-vous le SEO multi-boutiques pour Adobe Commerce ?",
          answer:
            "Nous impl\u00e9mentons des balises hreflang, des strat\u00e9gies canoniques et des configurations de vues boutique pour que chaque vue cible la bonne audience sans cr\u00e9er de probl\u00e8mes de contenu dupliqué.",
        },
        {
          question: "Pouvez-vous aider \u00e0 la migration de Magento 1 vers Adobe Commerce 2 ?",
          answer:
            "Absolument. Nous cr\u00e9ons des cartes de redirections compl\u00e8tes, pr\u00e9servons l\u2019\u00e9quit\u00e9 URL et surveillons le trafic pendant la migration pour minimiser les pertes de trafic organique. Notre [guide SEO Magento](/academy/magento-seo-guide) couvre les bonnes pratiques de migration.",
        },
        {
          question: "Combien de temps dure un audit SEO Adobe Commerce ?",
          answer:
            "Les audits entreprise prennent g\u00e9n\u00e9ralement 2 \u00e0 3 semaines selon la complexit\u00e9 de votre configuration multi-boutiques, le nombre de vues boutique et la taille du catalogue.",
        },
        {
          question: "Travaillez-vous directement avec notre \u00e9quipe de d\u00e9veloppement ?",
          answer:
            "Oui. Nous fournissons des sp\u00e9cifications techniques d\u00e9taill\u00e9es et travaillons aux c\u00f4t\u00e9s de votre \u00e9quipe technique pour impl\u00e9menter les changements. Nous comprenons l\u2019architecture Adobe Commerce et communiquons efficacement avec les d\u00e9veloppeurs.",
        },
        {
          question: "En quoi EcomSEO se distingue des autres agences SEO Adobe Commerce ?",
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
    trustBar: "M\u00e1s de 20 tiendas Adobe Commerce conf\u00edan en nosotros para crecer en ingresos org\u00e1nicos",
    sections: [
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
          question: "\u00bfC\u00f3mo gestionan el SEO multi-tienda para Adobe Commerce?",
          answer:
            "Implementamos etiquetas hreflang, estrategias de canonicals y configuraciones de vistas de tienda para que cada vista se dirija a la audiencia correcta sin crear problemas de contenido duplicado.",
        },
        {
          question: "\u00bfPueden ayudar con la migraci\u00f3n de Magento 1 a Adobe Commerce 2?",
          answer:
            "Por supuesto. Creamos mapas de redirecciones completos, preservamos la equidad de URLs y monitorizamos el tr\u00e1fico durante la migraci\u00f3n para minimizar la p\u00e9rdida de tr\u00e1fico org\u00e1nico. Nuestra [gu\u00eda SEO de Magento](/academy/magento-seo-guide) cubre las mejores pr\u00e1cticas de migraci\u00f3n.",
        },
        {
          question: "\u00bfCu\u00e1nto tarda una auditor\u00eda SEO de Adobe Commerce?",
          answer:
            "Las auditor\u00edas enterprise suelen tardar 2-3 semanas dependiendo de la complejidad de tu configuraci\u00f3n multi-tienda, el n\u00famero de vistas de tienda y el tama\u00f1o del cat\u00e1logo.",
        },
        {
          question: "\u00bfTrabajan directamente con nuestro equipo de desarrollo?",
          answer:
            "S\u00ed. Proporcionamos especificaciones t\u00e9cnicas detalladas y trabajamos junto a tu equipo de desarrollo para implementar los cambios. Entendemos la arquitectura de Adobe Commerce y comunicamos eficazmente con los desarrolladores.",
        },
        {
          question: "\u00bfC\u00f3mo se diferencia EcomSEO de otras agencias SEO de Adobe Commerce?",
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
    trustBar: "Oltre 20 store Adobe Commerce si affidano a noi per la crescita organica del fatturato",
    sections: [
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
          question: "Potete aiutare con la migrazione da Magento 1 ad Adobe Commerce 2?",
          answer:
            "Assolutamente. Creiamo mappe di redirect complete, preserviamo l\u2019equity degli URL e monitoriamo il traffico durante la migrazione per minimizzare le perdite di traffico organico. La nostra [guida SEO Magento](/academy/magento-seo-guide) copre le best practice per le migrazioni.",
        },
        {
          question: "Quanto tempo richiede un audit SEO Adobe Commerce?",
          answer:
            "Gli audit enterprise richiedono tipicamente 2-3 settimane a seconda della complessit\u00e0 del setup multi-store, del numero di store view e delle dimensioni del catalogo.",
        },
        {
          question: "Lavorerete direttamente con il nostro team di sviluppo?",
          answer:
            "S\u00ec. Forniamo specifiche tecniche dettagliate e lavoriamo a fianco del vostro team di sviluppo per implementare i cambiamenti. Comprendiamo l\u2019architettura Adobe Commerce e comunichiamo efficacemente con gli sviluppatori.",
        },
        {
          question: "In cosa si differenzia EcomSEO dalle altre agenzie SEO Adobe Commerce?",
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
    trustBar: "20+ Adobe Commerce webshops vertrouwen op ons voor organische omzetgroei",
    sections: [
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
          question: "Hoe pakken jullie multi-store SEO aan voor Adobe Commerce?",
          answer:
            "We implementeren correcte hreflang-tags, canonical-strategie\u00ebn en store view-configuraties om ervoor te zorgen dat elke store view de juiste doelgroep bereikt zonder duplicate content te cre\u00ebren.",
        },
        {
          question: "Kunnen jullie helpen bij de migratie van Magento 1 naar Adobe Commerce 2?",
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
          question: "Hoe onderscheidt EcomSEO zich van andere Adobe Commerce SEO-bureaus?",
          answer:
            "We combineren diepe platformexpertise met een e-commerce-first mindset. We begrijpen de omzetimpact van elke technische beslissing en focussen op fixes die echte bedrijfsresultaten opleveren.",
        },
      ],
      miniCta: {
        heading: "Klaar om het potentieel van je Adobe Commerce te ontsluiten?",
        subtitle:
          "Boek een gratis auditgesprek en we laten je precies zien wat je webshop tegenhoudt.",
      },
    },
  },
};
