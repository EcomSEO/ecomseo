import type { Locale } from "../../config";
import type { ServicePageProps } from "@/components/service/ServicePageTemplate";

export const contentWritingData: Record<Locale, ServicePageProps> = {
  en: {
    hero: {
      badge: "Content Writing",
      heading: "SEO Content That Converts Browsers Into Buyers",
      subtitle:
        "We write content that ranks and converts for ecommerce stores. From product descriptions to buying guides \u2014 every word is optimized for search and sales.",
      ctaText: "Book a Content Strategy Call",
    },
    trustBar: "20+ ecommerce brands trust our content to drive organic revenue",
    sections: [
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
            "This depends on your package and goals. Typical engagements include 4\u201312 blog posts per month plus ongoing product and category page optimization.",
        },
        {
          question: "Can you optimize existing content?",
          answer:
            "Absolutely. We audit your existing content, identify quick wins, and optimize underperforming pages before creating new content. Often the fastest ROI comes from improving what you already have. Our [SEO audit service](/seo-audit) includes a full content gap analysis.",
        },
        {
          question: "How long until content starts ranking?",
          answer:
            "New content typically starts showing ranking signals within 4\u20138 weeks. Significant traffic usually follows within 2\u20134 months, depending on keyword difficulty and your domain authority.",
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
        "Wir schreiben Inhalte, die ranken und konvertieren \u2014 f\u00fcr E-Commerce-Shops. Von Produktbeschreibungen bis zu Kaufratgebern \u2014 jedes Wort ist f\u00fcr Suche und Umsatz optimiert.",
      ctaText: "Content-Strategiegespr\u00e4ch buchen",
    },
    trustBar: "20+ E-Commerce-Marken vertrauen unserem Content f\u00fcr organisches Umsatzwachstum",
    sections: [
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
    ],
    faqs: {
      items: [
        {
          question: "Welche Art von Content schreiben Sie?",
          answer:
            "Wir schreiben Produktbeschreibungen, Kategorieseiten-Content, Blogartikel, Kaufratgeber, Vergleichsartikel und alle anderen Content-Formate, die organischen Traffic und Conversions f\u00fcr E-Commerce-Shops steigern.",
        },
        {
          question: "Schreiben Sie auch in anderen Sprachen als Englisch?",
          answer:
            "Ja. Wir haben Muttersprachler f\u00fcr Englisch, Niederl\u00e4ndisch, Deutsch, Schwedisch, Norwegisch und D\u00e4nisch. F\u00fcr weitere Sprachen arbeiten wir mit \u00dcbersetzungspartnern zusammen.",
        },
        {
          question: "Wie stellen Sie die Content-Qualit\u00e4t sicher?",
          answer:
            "Jedes St\u00fcck durchl\u00e4uft Keyword-Recherche, Wettbewerbsanalyse, Expertenerstellung, redaktionelle Pr\u00fcfung und SEO-Optimierung. Wir setzen auf E-E-A-T-Signale und echten Mehrwert f\u00fcr den Leser.",
        },
        {
          question: "Wie viele Content-St\u00fccke liefern Sie pro Monat?",
          answer:
            "Das h\u00e4ngt von Ihrem Paket und Ihren Zielen ab. Typische Engagements umfassen 4\u201312 Blogartikel pro Monat plus laufende Produkt- und Kategorieseiten-Optimierung.",
        },
        {
          question: "K\u00f6nnen Sie bestehenden Content optimieren?",
          answer:
            "Absolut. Wir pr\u00fcfen Ihren bestehenden Content, identifizieren Quick Wins und optimieren unterperformende Seiten, bevor wir neuen Content erstellen. Oft kommt der schnellste ROI durch Verbesserung des Vorhandenen.",
        },
        {
          question: "Wie lange dauert es, bis Content rankt?",
          answer:
            "Neuer Content zeigt typischerweise innerhalb von 4\u20138 Wochen erste Ranking-Signale. Signifikanter Traffic folgt meist innerhalb von 2\u20134 Monaten, abh\u00e4ngig von Keyword-Schwierigkeit und Domain-Autorit\u00e4t.",
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
        "Nous r\u00e9digeons du contenu qui se positionne et convertit pour les boutiques e-commerce. Des fiches produits aux guides d\u2019achat \u2014 chaque mot est optimis\u00e9 pour le r\u00e9f\u00e9rencement et les ventes.",
      ctaText: "R\u00e9server un appel strat\u00e9gie contenu",
    },
    trustBar: "20+ marques e-commerce nous font confiance pour g\u00e9n\u00e9rer du chiffre d\u2019affaires organique",
    sections: [
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
    ],
    faqs: {
      items: [
        {
          question: "Quel type de contenu r\u00e9digez-vous ?",
          answer:
            "Nous r\u00e9digeons des fiches produits, du contenu de pages cat\u00e9gories, des articles de blog, des guides d\u2019achat, des comparatifs et tout autre type de contenu g\u00e9n\u00e9rant du trafic organique et des conversions pour les boutiques e-commerce.",
        },
        {
          question: "R\u00e9digez-vous dans d\u2019autres langues que l\u2019anglais ?",
          answer:
            "Oui. Nous avons des r\u00e9dacteurs natifs en anglais, n\u00e9erlandais, allemand, su\u00e9dois, norv\u00e9gien et danois. Pour d\u2019autres langues, nous collaborons avec des partenaires de traduction.",
        },
        {
          question: "Comment garantissez-vous la qualit\u00e9 du contenu ?",
          answer:
            "Chaque contenu passe par la recherche de mots-cl\u00e9s, l\u2019analyse concurrentielle, la r\u00e9daction experte, la r\u00e9vision \u00e9ditoriale et l\u2019optimisation SEO. Nous privil\u00e9gions les signaux E-E-A-T et la valeur r\u00e9elle pour le lecteur.",
        },
        {
          question: "Combien de contenus livrez-vous par mois ?",
          answer:
            "Cela d\u00e9pend de votre formule et de vos objectifs. Les engagements typiques comprennent 4 \u00e0 12 articles de blog par mois plus l\u2019optimisation continue des pages produits et cat\u00e9gories.",
        },
        {
          question: "Pouvez-vous optimiser du contenu existant ?",
          answer:
            "Absolument. Nous auditons votre contenu existant, identifions les gains rapides et optimisons les pages sous-performantes avant de cr\u00e9er du nouveau contenu. Souvent, le ROI le plus rapide vient de l\u2019am\u00e9lioration de l\u2019existant.",
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
        "Escribimos contenido que posiciona y convierte para tiendas online. Desde descripciones de producto hasta gu\u00edas de compra \u2014 cada palabra est\u00e1 optimizada para b\u00fasqueda y ventas.",
      ctaText: "Reservar llamada de estrategia de contenidos",
    },
    trustBar: "M\u00e1s de 20 marcas de ecommerce conf\u00edan en nuestro contenido para generar ingresos org\u00e1nicos",
    sections: [
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
    ],
    faqs: {
      items: [
        {
          question: "\u00bfQu\u00e9 tipo de contenido escriben?",
          answer:
            "Escribimos descripciones de productos, contenido de p\u00e1ginas de categor\u00eda, art\u00edculos de blog, gu\u00edas de compra, comparativas y cualquier otro tipo de contenido que genere tr\u00e1fico org\u00e1nico y conversiones para tiendas online.",
        },
        {
          question: "\u00bfEscriben en idiomas distintos al ingl\u00e9s?",
          answer:
            "S\u00ed. Contamos con redactores nativos en ingl\u00e9s, neerland\u00e9s, alem\u00e1n, sueco, noruego y dan\u00e9s. Para otros idiomas, trabajamos con partners de traducci\u00f3n.",
        },
        {
          question: "\u00bfC\u00f3mo aseguran la calidad del contenido?",
          answer:
            "Cada pieza pasa por investigaci\u00f3n de palabras clave, an\u00e1lisis competitivo, redacci\u00f3n experta, revisi\u00f3n editorial y optimizaci\u00f3n SEO. Nos enfocamos en se\u00f1ales E-E-A-T y valor real para el lector.",
        },
        {
          question: "\u00bfCu\u00e1ntas piezas de contenido entregan al mes?",
          answer:
            "Depende de tu paquete y objetivos. Los compromisos t\u00edpicos incluyen de 4 a 12 art\u00edculos de blog al mes m\u00e1s optimizaci\u00f3n continua de p\u00e1ginas de producto y categor\u00eda.",
        },
        {
          question: "\u00bfPueden optimizar contenido existente?",
          answer:
            "Por supuesto. Auditamos tu contenido existente, identificamos victorias r\u00e1pidas y optimizamos p\u00e1ginas con bajo rendimiento antes de crear contenido nuevo. A menudo el ROI m\u00e1s r\u00e1pido viene de mejorar lo que ya tienes.",
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
        "Scriviamo contenuti che si posizionano e convertono per gli e-commerce. Dalle descrizioni prodotto alle guide all\u2019acquisto \u2014 ogni parola \u00e8 ottimizzata per ricerca e vendite.",
      ctaText: "Prenota una call strategia contenuti",
    },
    trustBar: "Oltre 20 brand e-commerce si affidano ai nostri contenuti per generare fatturato organico",
    sections: [
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
    ],
    faqs: {
      items: [
        {
          question: "Che tipo di contenuti scrivete?",
          answer:
            "Scriviamo descrizioni prodotto, contenuti per pagine categoria, articoli blog, guide all\u2019acquisto, articoli comparativi e qualsiasi altro tipo di contenuto che generi traffico organico e conversioni per e-commerce.",
        },
        {
          question: "Scrivete anche in lingue diverse dall\u2019inglese?",
          answer:
            "S\u00ec. Abbiamo copywriter madrelingua per inglese, olandese, tedesco, svedese, norvegese e danese. Per altre lingue, collaboriamo con partner di traduzione.",
        },
        {
          question: "Come garantite la qualit\u00e0 dei contenuti?",
          answer:
            "Ogni pezzo passa attraverso ricerca keyword, analisi competitiva, scrittura esperta, revisione editoriale e ottimizzazione SEO. Ci concentriamo sui segnali E-E-A-T e sul valore reale per il lettore.",
        },
        {
          question: "Quanti contenuti consegnate al mese?",
          answer:
            "Dipende dal pacchetto e dai tuoi obiettivi. Gli impegni tipici includono 4-12 articoli blog al mese pi\u00f9 ottimizzazione continua delle pagine prodotto e categoria.",
        },
        {
          question: "Potete ottimizzare contenuti esistenti?",
          answer:
            "Assolutamente. Auditiamo i tuoi contenuti esistenti, identifichiamo le vittorie rapide e ottimizziamo le pagine sotto-performanti prima di creare nuovi contenuti. Spesso il ROI pi\u00f9 veloce viene dal miglioramento di ci\u00f2 che hai gi\u00e0.",
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
        "Wij schrijven content die rankt en converteert voor webshops. Van productbeschrijvingen tot koopgidsen \u2014 elk woord is geoptimaliseerd voor zoeken en verkoop.",
      ctaText: "Boek een contentstrategiegesprek",
    },
    trustBar: "20+ e-commercemerken vertrouwen op onze content voor organische omzetgroei",
    sections: [
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
    ],
    faqs: {
      items: [
        {
          question: "Welk type content schrijven jullie?",
          answer:
            "Wij schrijven productbeschrijvingen, categoriepagina-content, blogartikelen, koopgidsen, vergelijkingsartikelen en elk ander contenttype dat organisch verkeer en conversies genereert voor webshops.",
        },
        {
          question: "Schrijven jullie ook in andere talen dan Engels?",
          answer:
            "Ja. Wij hebben native schrijvers voor Engels, Nederlands, Duits, Zweeds, Noors en Deens. Voor andere talen werken we samen met vertaalpartners.",
        },
        {
          question: "Hoe waarborgen jullie de contentkwaliteit?",
          answer:
            "Elk stuk doorloopt zoekwoordonderzoek, concurrentieanalyse, expertschrijven, redactionele review en SEO-optimalisatie. Wij focussen op E-E-A-T-signalen en echte waarde voor de lezer.",
        },
        {
          question: "Hoeveel content leveren jullie per maand?",
          answer:
            "Dit hangt af van je pakket en doelen. Typische trajecten omvatten 4-12 blogartikelen per maand plus doorlopende product- en categoriepagina-optimalisatie.",
        },
        {
          question: "Kunnen jullie bestaande content optimaliseren?",
          answer:
            "Absoluut. Wij auditen je bestaande content, identificeren quick wins en optimaliseren onderpresterende pagina\u2019s voordat we nieuwe content cre\u00ebren. Vaak komt de snelste ROI uit het verbeteren van wat je al hebt.",
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
