import type { Locale } from "../../config";
import type { ServicePageProps } from "@/components/service/ServicePageTemplate";

export const keywordResearchData: Record<Locale, ServicePageProps> = {
  en: {
    hero: {
      badge: "Keyword Research",
      heading: "Revenue-First Keyword Research for Ecommerce Brands",
      subtitle:
        "Stop chasing vanity rankings. We find the exact search terms your buyers use \u2014 and build a keyword strategy that turns organic traffic into predictable, compounding revenue.",
      ctaText: "Book a Keyword Strategy Call",
    },
    trustBar: "Over 20+ businesses trust us",
    sections: [
      {
        type: "stats",
        badge: "Our Track Record",
        heading: "Keyword Research That Delivers Results",
        stats: [
          { value: "12,000+", label: "Keywords Mapped" },
          { value: "500+", label: "Ecommerce Stores" },
          { value: "340%", label: "Avg. Traffic Growth" },
          { value: "8+", label: "Years of Experience" },
        ],
      },
      {
        type: "benefits",
        badge: "Why Us",
        heading: "Why Ecommerce Brands Choose Our Keyword Research",
        subtitle: "No generic keyword dumps. No recycled templates. A strategy built around your catalog, your margins, and your customers.",
        benefits: [
          { title: "Revenue-Mapped Keywords", description: "We don\u2019t hand you a spreadsheet of 10,000 keywords. Every keyword we target is mapped to buyer intent, margin potential, and your actual product catalog." },
          { title: "Intent Classification", description: "Every keyword gets classified by buyer intent stage \u2014 informational, commercial, or transactional. We prioritize the terms that put products in carts." },
          { title: "Competitive Gap Analysis", description: "We pull your competitors\u2019 entire keyword footprint, identify ranking gaps, and surface low-competition terms with high conversion potential." },
          { title: "AI Overview Targeting", description: "We identify keywords where AI Overviews appear and optimize your content to be cited by Google\u2019s AI, capturing traffic from the new search landscape." },
          { title: "LLM-Optimized Clusters", description: "We group keywords into topic clusters designed for both traditional rankings and LLM-powered search, future-proofing your strategy." },
          { title: "Voice Search Ready", description: "We include natural language and conversational queries in your keyword map, capturing the growing voice search market." },
        ],
      },
      {
        type: "process",
        badge: "The Methodology",
        heading: "How We Build Your Keyword Strategy",
        subtitle: "No generic keyword dumps. No recycled templates. Here\u2019s how we build a keyword strategy that compounds.",
        process: [
          { number: "01", title: "Revenue & Catalog Audit", description: "We start with your P&L, not a keyword tool. We map your highest-margin categories, top SKUs, and current organic performance to identify where keyword improvements will drive the most profit." },
          { number: "02", title: "Intent Classification & Clustering", description: "Every keyword gets classified by buyer intent stage and grouped into topic clusters. We design your content architecture around how your customers actually search and buy." },
          { number: "03", title: "Competitive Gap & Opportunity Mapping", description: "We pull your competitors\u2019 entire keyword footprint, identify ranking gaps, and surface low-competition terms with high conversion potential that they\u2019re overlooking." },
          { number: "04", title: "Prioritized Roadmap & Tracking", description: "You get a scored, prioritized keyword roadmap with traffic estimates, revenue projections, and clear next steps. We track performance monthly and adjust targeting based on real data." },
        ],
      },
      {
        type: "deliverables",
        badge: "Deliverables",
        heading: "What You Get",
        deliverables: [
          { title: "Keyword Map", description: "Revenue-mapped, intent-classified keywords" },
          { title: "Topic Clusters", description: "Content architecture for your catalog" },
          { title: "Competitive Analysis", description: "Full competitor keyword gap report" },
          { title: "Prioritized Roadmap", description: "Scored opportunities with revenue estimates" },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "What makes your keyword research different from using a tool myself?", answer: "Tools give you data. We give you strategy. We classify every keyword by intent, map it to your catalog, and prioritize by revenue impact \u2014 not just search volume. Our [ecommerce SEO keywords guide](/blog/ecommerce-seo-keywords) explains the methodology behind our approach." },
        { question: "How long does the keyword research process take?", answer: "A full keyword strategy typically takes 2\u20133 weeks. This includes catalog analysis, competitor research, intent classification, and roadmap creation. Rush timelines are available for time-sensitive projects." },
        { question: "Do you also implement the keyword strategy?", answer: "Yes. We can handle end-to-end implementation including [on-page optimization](/blog/on-page-seo-for-ecommerce), content creation, and technical SEO. Or we can hand off the strategy to your internal team with detailed implementation guides." },
        { question: "How do you handle keyword cannibalization?", answer: "We audit your existing content for cannibalization issues as part of every engagement. When multiple pages compete for the same keyword, we consolidate, redirect, or differentiate them to maximize ranking potential." },
        { question: "What tools and data sources do you use?", answer: "We use a combination of Ahrefs, SEMrush, Google Search Console, DataForSEO, and proprietary tools. But tools are just inputs \u2014 the strategy comes from our ecommerce expertise and revenue-first methodology." },
        { question: "How do you factor in AI Overviews and LLM-powered search?", answer: "We identify keywords where AI Overviews appear, analyze which sources get cited, and optimize your content structure for both traditional rankings and AI-powered search results. Dive deeper in our [keyword research for ecommerce academy module](/academy/keyword-research-for-ecommerce)." },
      ],
      miniCta: {
        heading: "Ready to Find the Keywords That Actually Drive Revenue?",
        subtitle: "If you\u2019re serious about turning keyword research into a growth lever for your ecommerce brand, let\u2019s talk.",
      },
    },
  },
  de: {
    hero: {
      badge: "Keyword-Recherche",
      heading: "Umsatzorientierte Keyword-Recherche f\u00FCr Ecommerce-Marken",
      subtitle:
        "Schluss mit der Jagd nach Eitelkeitsrankings. Wir finden die exakten Suchbegriffe, die Ihre K\u00E4ufer verwenden \u2014 und erstellen eine Keyword-Strategie, die organischen Traffic in planbaren, wachsenden Umsatz verwandelt.",
      ctaText: "Keyword-Strategiegespr\u00E4ch buchen",
    },
    trustBar: "\u00DCber 20 Unternehmen vertrauen uns",
    sections: [
      {
        type: "stats",
        badge: "Unsere Erfolgsbilanz",
        heading: "Keyword-Recherche, die Ergebnisse liefert",
        stats: [
          { value: "12.000+", label: "Keywords kartiert" },
          { value: "500+", label: "Ecommerce-Shops" },
          { value: "340 %", label: "Durchschn. Traffic-Wachstum" },
          { value: "8+", label: "Jahre Erfahrung" },
        ],
      },
      {
        type: "benefits",
        badge: "Warum wir",
        heading: "Warum Ecommerce-Marken unsere Keyword-Recherche w\u00E4hlen",
        subtitle: "Keine generischen Keyword-Listen. Keine recycelten Vorlagen. Eine Strategie, die um Ihren Katalog, Ihre Margen und Ihre Kunden herum aufgebaut ist.",
        benefits: [
          { title: "Umsatz-kartierte Keywords", description: "Wir geben Ihnen keine Tabelle mit 10.000 Keywords. Jedes Keyword, das wir anpeilen, ist auf K\u00E4uferintention, Margenpotenzial und Ihren tats\u00E4chlichen Produktkatalog abgestimmt." },
          { title: "Intentionsklassifizierung", description: "Jedes Keyword wird nach K\u00E4uferintention klassifiziert \u2014 informativ, kommerziell oder transaktional. Wir priorisieren die Begriffe, die Produkte in den Warenkorb legen." },
          { title: "Wettbewerbs-Gap-Analyse", description: "Wir analysieren den gesamten Keyword-Fu\u00DFabdruck Ihrer Wettbewerber, identifizieren Ranking-L\u00FCcken und finden Low-Competition-Begriffe mit hohem Conversion-Potenzial." },
          { title: "AI-Overview-Targeting", description: "Wir identifizieren Keywords, bei denen AI Overviews erscheinen, und optimieren Ihren Content, um von Googles KI zitiert zu werden und Traffic aus der neuen Suchlandschaft zu erfassen." },
          { title: "LLM-optimierte Cluster", description: "Wir gruppieren Keywords in Themencluster, die sowohl f\u00FCr traditionelle Rankings als auch f\u00FCr LLM-gest\u00FCtzte Suche konzipiert sind und Ihre Strategie zukunftssicher machen." },
          { title: "Voice Search-bereit", description: "Wir integrieren nat\u00FCrliche Sprache und konversationelle Suchanfragen in Ihre Keyword-Map und erfassen den wachsenden Voice-Search-Markt." },
        ],
      },
      {
        type: "process",
        badge: "Die Methodik",
        heading: "Wie wir Ihre Keyword-Strategie aufbauen",
        subtitle: "Keine generischen Keyword-Listen. Keine recycelten Vorlagen. So bauen wir eine Keyword-Strategie auf, die sich vervielf\u00E4ltigt.",
        process: [
          { number: "01", title: "Umsatz- & Katalog-Audit", description: "Wir beginnen mit Ihrer GuV, nicht mit einem Keyword-Tool. Wir kartieren Ihre margenst\u00E4rksten Kategorien, Top-SKUs und aktuelle organische Performance, um zu identifizieren, wo Keyword-Verbesserungen den meisten Gewinn bringen." },
          { number: "02", title: "Intentionsklassifizierung & Clustering", description: "Jedes Keyword wird nach K\u00E4uferintention klassifiziert und in Themencluster gruppiert. Wir gestalten Ihre Content-Architektur um das tats\u00E4chliche Such- und Kaufverhalten Ihrer Kunden." },
          { number: "03", title: "Wettbewerbs-Gap & Chancen-Mapping", description: "Wir analysieren den gesamten Keyword-Fu\u00DFabdruck Ihrer Wettbewerber, identifizieren Ranking-L\u00FCcken und finden Low-Competition-Begriffe mit hohem Conversion-Potenzial, die \u00FCbersehen werden." },
          { number: "04", title: "Priorisierte Roadmap & Tracking", description: "Sie erhalten eine bewertete, priorisierte Keyword-Roadmap mit Traffic-Sch\u00E4tzungen, Umsatzprognosen und klaren n\u00E4chsten Schritten. Wir verfolgen die Performance monatlich und passen das Targeting auf Basis realer Daten an." },
        ],
      },
      {
        type: "deliverables",
        badge: "Lieferumfang",
        heading: "Was Sie erhalten",
        deliverables: [
          { title: "Keyword-Map", description: "Umsatz-kartierte, intentionsklassifizierte Keywords" },
          { title: "Themencluster", description: "Content-Architektur f\u00FCr Ihren Katalog" },
          { title: "Wettbewerbsanalyse", description: "Vollst\u00E4ndiger Keyword-Gap-Report der Wettbewerber" },
          { title: "Priorisierte Roadmap", description: "Bewertete Chancen mit Umsatzsch\u00E4tzungen" },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "Was unterscheidet Ihre Keyword-Recherche von der Nutzung eines Tools?", answer: "Tools liefern Daten. Wir liefern Strategie. Wir klassifizieren jedes Keyword nach Intention, ordnen es Ihrem Katalog zu und priorisieren nach Umsatzwirkung \u2014 nicht nur nach Suchvolumen." },
        { question: "Wie lange dauert der Keyword-Recherche-Prozess?", answer: "Eine vollst\u00E4ndige Keyword-Strategie dauert typischerweise 2\u20133 Wochen. Dies umfasst Kataloganalyse, Wettbewerbsrecherche, Intentionsklassifizierung und Roadmap-Erstellung. Schnelle Timelines sind f\u00FCr zeitkritische Projekte verf\u00FCgbar." },
        { question: "Implementieren Sie die Keyword-Strategie auch?", answer: "Ja. Wir k\u00F6nnen die End-to-End-Implementierung einschlie\u00DFlich On-Page-Optimierung, Content-Erstellung und technischer SEO \u00FCbernehmen. Oder wir \u00FCbergeben die Strategie mit detaillierten Implementierungsleitf\u00E4den an Ihr internes Team." },
        { question: "Wie gehen Sie mit Keyword-Kannibalisierung um?", answer: "Wir pr\u00FCfen Ihren bestehenden Content bei jedem Projekt auf Kannibalisierungsprobleme. Wenn mehrere Seiten f\u00FCr dasselbe Keyword konkurrieren, konsolidieren, leiten um oder differenzieren wir sie, um das Ranking-Potenzial zu maximieren." },
        { question: "Welche Tools und Datenquellen verwenden Sie?", answer: "Wir verwenden eine Kombination aus Ahrefs, SEMrush, Google Search Console, DataForSEO und propriet\u00E4ren Tools. Aber Tools sind nur Inputs \u2014 die Strategie kommt aus unserer Ecommerce-Expertise und unserer umsatzorientierten Methodik." },
        { question: "Wie ber\u00FCcksichtigen Sie AI Overviews und LLM-gest\u00FCtzte Suche?", answer: "Wir identifizieren Keywords, bei denen AI Overviews erscheinen, analysieren welche Quellen zitiert werden, und optimieren Ihre Content-Struktur sowohl f\u00FCr traditionelle Rankings als auch f\u00FCr KI-gest\u00FCtzte Suchergebnisse." },
      ],
      miniCta: {
        heading: "Bereit, die Keywords zu finden, die wirklich Umsatz bringen?",
        subtitle: "Wenn Sie es ernst meinen, Keyword-Recherche in einen Wachstumshebel f\u00FCr Ihre Ecommerce-Marke zu verwandeln, lassen Sie uns sprechen.",
      },
    },
  },
  fr: {
    hero: {
      badge: "Recherche de mots-cl\u00E9s",
      heading: "Recherche de mots-cl\u00E9s orient\u00E9e revenus pour les marques ecommerce",
      subtitle:
        "Arr\u00EAtez de courir apr\u00E8s des classements de vanit\u00E9. Nous trouvons les termes de recherche exacts utilis\u00E9s par vos acheteurs \u2014 et construisons une strat\u00E9gie de mots-cl\u00E9s qui transforme le trafic organique en revenus pr\u00E9visibles et croissants.",
      ctaText: "R\u00E9server un appel strat\u00E9gie mots-cl\u00E9s",
    },
    trustBar: "Plus de 20 entreprises nous font confiance",
    sections: [
      {
        type: "stats",
        badge: "Notre bilan",
        heading: "Une recherche de mots-cl\u00E9s qui produit des r\u00E9sultats",
        stats: [
          { value: "12 000+", label: "Mots-cl\u00E9s cartographi\u00E9s" },
          { value: "500+", label: "Boutiques ecommerce" },
          { value: "340 %", label: "Croissance moyenne du trafic" },
          { value: "8+", label: "Ann\u00E9es d\u2019exp\u00E9rience" },
        ],
      },
      {
        type: "benefits",
        badge: "Pourquoi nous",
        heading: "Pourquoi les marques ecommerce choisissent notre recherche de mots-cl\u00E9s",
        subtitle: "Pas de listes g\u00E9n\u00E9riques de mots-cl\u00E9s. Pas de templates recycl\u00E9s. Une strat\u00E9gie construite autour de votre catalogue, vos marges et vos clients.",
        benefits: [
          { title: "Mots-cl\u00E9s mapp\u00E9s au revenu", description: "Nous ne vous remettons pas un tableur de 10 000 mots-cl\u00E9s. Chaque mot-cl\u00E9 cibl\u00E9 est associ\u00E9 \u00E0 l\u2019intention d\u2019achat, au potentiel de marge et \u00E0 votre catalogue produits r\u00E9el." },
          { title: "Classification d\u2019intention", description: "Chaque mot-cl\u00E9 est classifi\u00E9 par \u00E9tape d\u2019intention d\u2019achat \u2014 informationnelle, commerciale ou transactionnelle. Nous priorisons les termes qui mettent des produits au panier." },
          { title: "Analyse du gap concurrentiel", description: "Nous r\u00E9cup\u00E9rons l\u2019empreinte compl\u00E8te de mots-cl\u00E9s de vos concurrents, identifions les lacunes de classement et d\u00E9couvrons des termes \u00E0 faible concurrence avec un fort potentiel de conversion." },
          { title: "Ciblage AI Overview", description: "Nous identifions les mots-cl\u00E9s o\u00F9 les AI Overviews apparaissent et optimisons votre contenu pour \u00EAtre cit\u00E9 par l\u2019IA de Google, captant le trafic du nouveau paysage de recherche." },
          { title: "Clusters optimis\u00E9s LLM", description: "Nous regroupons les mots-cl\u00E9s en clusters th\u00E9matiques con\u00E7us pour les classements traditionnels et la recherche aliment\u00E9e par les LLM, p\u00E9rennisant votre strat\u00E9gie." },
          { title: "Pr\u00EAt pour la recherche vocale", description: "Nous incluons les requ\u00EAtes en langage naturel et conversationnelles dans votre carte de mots-cl\u00E9s, captant le march\u00E9 croissant de la recherche vocale." },
        ],
      },
      {
        type: "process",
        badge: "La m\u00E9thodologie",
        heading: "Comment nous construisons votre strat\u00E9gie de mots-cl\u00E9s",
        subtitle: "Pas de listes g\u00E9n\u00E9riques. Pas de templates recycl\u00E9s. Voici comment nous construisons une strat\u00E9gie de mots-cl\u00E9s qui se multiplie.",
        process: [
          { number: "01", title: "Audit revenu & catalogue", description: "Nous commen\u00E7ons par votre P&L, pas un outil de mots-cl\u00E9s. Nous cartographions vos cat\u00E9gories \u00E0 plus forte marge, vos meilleurs SKU et votre performance organique actuelle pour identifier o\u00F9 les am\u00E9liorations de mots-cl\u00E9s g\u00E9n\u00E9reront le plus de profit." },
          { number: "02", title: "Classification d\u2019intention & clustering", description: "Chaque mot-cl\u00E9 est classifi\u00E9 par \u00E9tape d\u2019intention et regroup\u00E9 en clusters th\u00E9matiques. Nous concevons votre architecture de contenu autour de la fa\u00E7on dont vos clients recherchent et ach\u00E8tent r\u00E9ellement." },
          { number: "03", title: "Gap concurrentiel & mapping d\u2019opportunit\u00E9s", description: "Nous r\u00E9cup\u00E9rons l\u2019empreinte compl\u00E8te de mots-cl\u00E9s de vos concurrents, identifions les lacunes de classement et d\u00E9couvrons des termes \u00E0 faible concurrence qu\u2019ils n\u00E9gligent." },
          { number: "04", title: "Roadmap prioris\u00E9e & suivi", description: "Vous recevez une roadmap de mots-cl\u00E9s prioris\u00E9e et \u00E9valu\u00E9e avec des estimations de trafic, des projections de revenus et des prochaines \u00E9tapes claires. Nous suivons la performance mensuellement et ajustons le ciblage sur la base de donn\u00E9es r\u00E9elles." },
        ],
      },
      {
        type: "deliverables",
        badge: "Livrables",
        heading: "Ce que vous recevez",
        deliverables: [
          { title: "Carte de mots-cl\u00E9s", description: "Mots-cl\u00E9s mapp\u00E9s au revenu et classifi\u00E9s par intention" },
          { title: "Clusters th\u00E9matiques", description: "Architecture de contenu pour votre catalogue" },
          { title: "Analyse concurrentielle", description: "Rapport complet du gap de mots-cl\u00E9s des concurrents" },
          { title: "Roadmap prioris\u00E9e", description: "Opportunit\u00E9s \u00E9valu\u00E9es avec estimations de revenus" },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "Qu\u2019est-ce qui diff\u00E9rencie votre recherche de mots-cl\u00E9s de l\u2019utilisation d\u2019un outil moi-m\u00EAme ?", answer: "Les outils vous donnent des donn\u00E9es. Nous vous donnons une strat\u00E9gie. Nous classifions chaque mot-cl\u00E9 par intention, l\u2019associons \u00E0 votre catalogue et priorisons par impact sur le revenu \u2014 pas seulement par volume de recherche." },
        { question: "Combien de temps dure le processus de recherche de mots-cl\u00E9s ?", answer: "Une strat\u00E9gie compl\u00E8te de mots-cl\u00E9s prend g\u00E9n\u00E9ralement 2 \u00E0 3 semaines. Cela inclut l\u2019analyse du catalogue, la recherche concurrentielle, la classification d\u2019intention et la cr\u00E9ation de la roadmap. Des d\u00E9lais acc\u00E9l\u00E9r\u00E9s sont disponibles pour les projets urgents." },
        { question: "Impl\u00E9mentez-vous aussi la strat\u00E9gie de mots-cl\u00E9s ?", answer: "Oui. Nous pouvons g\u00E9rer l\u2019impl\u00E9mentation de bout en bout, y compris l\u2019optimisation on-page, la cr\u00E9ation de contenu et le SEO technique. Ou nous pouvons transmettre la strat\u00E9gie \u00E0 votre \u00E9quipe interne avec des guides d\u2019impl\u00E9mentation d\u00E9taill\u00E9s." },
        { question: "Comment g\u00E9rez-vous la cannibalisation de mots-cl\u00E9s ?", answer: "Nous auditons votre contenu existant pour les probl\u00E8mes de cannibalisation dans chaque mission. Lorsque plusieurs pages se disputent le m\u00EAme mot-cl\u00E9, nous les consolidons, redirigeons ou diff\u00E9rencions pour maximiser le potentiel de classement." },
        { question: "Quels outils et sources de donn\u00E9es utilisez-vous ?", answer: "Nous utilisons une combinaison d\u2019Ahrefs, SEMrush, Google Search Console, DataForSEO et d\u2019outils propri\u00E9taires. Mais les outils ne sont que des entr\u00E9es \u2014 la strat\u00E9gie vient de notre expertise ecommerce et de notre m\u00E9thodologie orient\u00E9e revenus." },
        { question: "Comment int\u00E9grez-vous les AI Overviews et la recherche aliment\u00E9e par les LLM ?", answer: "Nous identifions les mots-cl\u00E9s o\u00F9 les AI Overviews apparaissent, analysons quelles sources sont cit\u00E9es et optimisons la structure de votre contenu pour les classements traditionnels et les r\u00E9sultats de recherche aliment\u00E9s par l\u2019IA." },
      ],
      miniCta: {
        heading: "Pr\u00EAt \u00E0 trouver les mots-cl\u00E9s qui g\u00E9n\u00E8rent vraiment du revenu ?",
        subtitle: "Si vous \u00EAtes s\u00E9rieux dans votre volont\u00E9 de transformer la recherche de mots-cl\u00E9s en levier de croissance pour votre marque ecommerce, parlons-en.",
      },
    },
  },
  es: {
    hero: {
      badge: "Investigaci\u00F3n de palabras clave",
      heading: "Investigaci\u00F3n de palabras clave orientada a ingresos para marcas ecommerce",
      subtitle:
        "Deja de perseguir rankings de vanidad. Encontramos los t\u00E9rminos de b\u00FAsqueda exactos que usan tus compradores \u2014 y construimos una estrategia de palabras clave que convierte el tr\u00E1fico org\u00E1nico en ingresos predecibles y crecientes.",
      ctaText: "Reservar llamada de estrategia de palabras clave",
    },
    trustBar: "M\u00E1s de 20 empresas conf\u00EDan en nosotros",
    sections: [
      {
        type: "stats",
        badge: "Nuestro historial",
        heading: "Investigaci\u00F3n de palabras clave que produce resultados",
        stats: [
          { value: "12.000+", label: "Palabras clave mapeadas" },
          { value: "500+", label: "Tiendas ecommerce" },
          { value: "340 %", label: "Crecimiento medio de tr\u00E1fico" },
          { value: "8+", label: "A\u00F1os de experiencia" },
        ],
      },
      {
        type: "benefits",
        badge: "Por qu\u00E9 nosotros",
        heading: "Por qu\u00E9 las marcas ecommerce eligen nuestra investigaci\u00F3n de palabras clave",
        subtitle: "Sin volcados gen\u00E9ricos de keywords. Sin plantillas recicladas. Una estrategia construida en torno a tu cat\u00E1logo, tus m\u00E1rgenes y tus clientes.",
        benefits: [
          { title: "Keywords mapeadas al ingreso", description: "No te entregamos una hoja de c\u00E1lculo con 10.000 keywords. Cada keyword que apuntamos est\u00E1 asociada a intenci\u00F3n de compra, potencial de margen y tu cat\u00E1logo de productos real." },
          { title: "Clasificaci\u00F3n de intenci\u00F3n", description: "Cada keyword se clasifica por etapa de intenci\u00F3n de compra \u2014 informacional, comercial o transaccional. Priorizamos los t\u00E9rminos que ponen productos en el carrito." },
          { title: "An\u00E1lisis de gap competitivo", description: "Analizamos toda la huella de keywords de tus competidores, identificamos brechas de posicionamiento y descubrimos t\u00E9rminos de baja competencia con alto potencial de conversi\u00F3n." },
          { title: "Targeting de AI Overview", description: "Identificamos keywords donde aparecen AI Overviews y optimizamos tu contenido para ser citado por la IA de Google, captando tr\u00E1fico del nuevo panorama de b\u00FAsqueda." },
          { title: "Clusters optimizados para LLM", description: "Agrupamos keywords en clusters tem\u00E1ticos dise\u00F1ados tanto para rankings tradicionales como para b\u00FAsqueda impulsada por LLM, preparando tu estrategia para el futuro." },
          { title: "Preparado para b\u00FAsqueda por voz", description: "Incluimos consultas en lenguaje natural y conversacional en tu mapa de keywords, captando el creciente mercado de b\u00FAsqueda por voz." },
        ],
      },
      {
        type: "process",
        badge: "La metodolog\u00EDa",
        heading: "C\u00F3mo construimos tu estrategia de palabras clave",
        subtitle: "Sin volcados gen\u00E9ricos. Sin plantillas recicladas. As\u00ED construimos una estrategia de keywords que se multiplica.",
        process: [
          { number: "01", title: "Auditor\u00EDa de ingresos y cat\u00E1logo", description: "Empezamos por tu cuenta de resultados, no por una herramienta de keywords. Mapeamos tus categor\u00EDas de mayor margen, mejores SKUs y rendimiento org\u00E1nico actual para identificar d\u00F3nde las mejoras de keywords generar\u00E1n m\u00E1s beneficio." },
          { number: "02", title: "Clasificaci\u00F3n de intenci\u00F3n y clustering", description: "Cada keyword se clasifica por etapa de intenci\u00F3n y se agrupa en clusters tem\u00E1ticos. Dise\u00F1amos tu arquitectura de contenido en torno a c\u00F3mo tus clientes realmente buscan y compran." },
          { number: "03", title: "Gap competitivo y mapeo de oportunidades", description: "Analizamos toda la huella de keywords de tus competidores, identificamos brechas de posicionamiento y descubrimos t\u00E9rminos de baja competencia con alto potencial de conversi\u00F3n que est\u00E1n pasando por alto." },
          { number: "04", title: "Roadmap priorizada y seguimiento", description: "Recibes una roadmap de keywords priorizada y puntuada con estimaciones de tr\u00E1fico, proyecciones de ingresos y pr\u00F3ximos pasos claros. Seguimos el rendimiento mensualmente y ajustamos el targeting basado en datos reales." },
        ],
      },
      {
        type: "deliverables",
        badge: "Entregables",
        heading: "Lo que recibes",
        deliverables: [
          { title: "Mapa de keywords", description: "Keywords mapeadas al ingreso, clasificadas por intenci\u00F3n" },
          { title: "Clusters tem\u00E1ticos", description: "Arquitectura de contenido para tu cat\u00E1logo" },
          { title: "An\u00E1lisis competitivo", description: "Informe completo del gap de keywords de la competencia" },
          { title: "Roadmap priorizada", description: "Oportunidades puntuadas con estimaciones de ingresos" },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "\u00BFQu\u00E9 diferencia su investigaci\u00F3n de palabras clave de usar una herramienta yo mismo?", answer: "Las herramientas te dan datos. Nosotros te damos estrategia. Clasificamos cada keyword por intenci\u00F3n, la asociamos a tu cat\u00E1logo y priorizamos por impacto en ingresos \u2014 no solo por volumen de b\u00FAsqueda." },
        { question: "\u00BFCu\u00E1nto dura el proceso de investigaci\u00F3n de palabras clave?", answer: "Una estrategia completa de keywords normalmente toma 2-3 semanas. Esto incluye an\u00E1lisis de cat\u00E1logo, investigaci\u00F3n competitiva, clasificaci\u00F3n de intenci\u00F3n y creaci\u00F3n de la roadmap. Plazos acelerados disponibles para proyectos urgentes." },
        { question: "\u00BFTambi\u00E9n implementan la estrategia de keywords?", answer: "S\u00ED. Podemos gestionar la implementaci\u00F3n de principio a fin, incluyendo optimizaci\u00F3n on-page, creaci\u00F3n de contenido y SEO t\u00E9cnico. O podemos entregar la estrategia a tu equipo interno con gu\u00EDas de implementaci\u00F3n detalladas." },
        { question: "\u00BFC\u00F3mo manejan la canibalizaci\u00F3n de keywords?", answer: "Auditamos tu contenido existente para problemas de canibalizaci\u00F3n en cada proyecto. Cuando varias p\u00E1ginas compiten por la misma keyword, las consolidamos, redirigimos o diferenciamos para maximizar el potencial de posicionamiento." },
        { question: "\u00BFQu\u00E9 herramientas y fuentes de datos utilizan?", answer: "Usamos una combinaci\u00F3n de Ahrefs, SEMrush, Google Search Console, DataForSEO y herramientas propietarias. Pero las herramientas son solo entradas \u2014 la estrategia viene de nuestra experiencia en ecommerce y nuestra metodolog\u00EDa orientada a ingresos." },
        { question: "\u00BFC\u00F3mo consideran los AI Overviews y la b\u00FAsqueda impulsada por LLM?", answer: "Identificamos keywords donde aparecen AI Overviews, analizamos qu\u00E9 fuentes se citan y optimizamos la estructura de tu contenido tanto para rankings tradicionales como para resultados de b\u00FAsqueda impulsados por IA." },
      ],
      miniCta: {
        heading: "\u00BFListo para encontrar las keywords que realmente generan ingresos?",
        subtitle: "Si te tomas en serio convertir la investigaci\u00F3n de keywords en una palanca de crecimiento para tu marca ecommerce, hablemos.",
      },
    },
  },
  it: {
    hero: {
      badge: "Ricerca keyword",
      heading: "Ricerca keyword orientata al fatturato per brand ecommerce",
      subtitle:
        "Smetti di inseguire ranking di vanit\u00E0. Troviamo i termini di ricerca esatti usati dai tuoi acquirenti \u2014 e costruiamo una strategia keyword che trasforma il traffico organico in fatturato prevedibile e crescente.",
      ctaText: "Prenota una call strategica keyword",
    },
    trustBar: "Oltre 20 aziende si fidano di noi",
    sections: [
      {
        type: "stats",
        badge: "Il nostro track record",
        heading: "Ricerca keyword che produce risultati",
        stats: [
          { value: "12.000+", label: "Keyword mappate" },
          { value: "500+", label: "Negozi ecommerce" },
          { value: "340 %", label: "Crescita media del traffico" },
          { value: "8+", label: "Anni di esperienza" },
        ],
      },
      {
        type: "benefits",
        badge: "Perch\u00E9 noi",
        heading: "Perch\u00E9 i brand ecommerce scelgono la nostra ricerca keyword",
        subtitle: "Nessuna lista generica di keyword. Nessun template riciclato. Una strategia costruita intorno al tuo catalogo, ai tuoi margini e ai tuoi clienti.",
        benefits: [
          { title: "Keyword mappate al fatturato", description: "Non ti consegniamo un foglio con 10.000 keyword. Ogni keyword che targettizziamo \u00E8 mappata all\u2019intento d\u2019acquisto, al potenziale di margine e al tuo catalogo prodotti reale." },
          { title: "Classificazione dell\u2019intento", description: "Ogni keyword viene classificata per fase di intento d\u2019acquisto \u2014 informazionale, commerciale o transazionale. Diamo priorit\u00E0 ai termini che mettono prodotti nel carrello." },
          { title: "Analisi del gap competitivo", description: "Analizziamo l\u2019intera impronta keyword dei tuoi competitor, identifichiamo lacune di posizionamento e troviamo termini a bassa competizione con alto potenziale di conversione." },
          { title: "Targeting AI Overview", description: "Identifichiamo le keyword dove appaiono AI Overviews e ottimizziamo i tuoi contenuti per essere citati dall\u2019IA di Google, catturando traffico dal nuovo panorama di ricerca." },
          { title: "Cluster ottimizzati per LLM", description: "Raggruppiamo le keyword in cluster tematici progettati sia per i ranking tradizionali che per la ricerca alimentata da LLM, rendendo la tua strategia a prova di futuro." },
          { title: "Pronto per la ricerca vocale", description: "Includiamo query in linguaggio naturale e conversazionale nella tua mappa keyword, catturando il crescente mercato della ricerca vocale." },
        ],
      },
      {
        type: "process",
        badge: "La metodologia",
        heading: "Come costruiamo la tua strategia keyword",
        subtitle: "Nessuna lista generica. Nessun template riciclato. Ecco come costruiamo una strategia keyword che si moltiplica.",
        process: [
          { number: "01", title: "Audit fatturato & catalogo", description: "Partiamo dal tuo conto economico, non da uno strumento keyword. Mappiamo le categorie a margine pi\u00F9 alto, i top SKU e la performance organica attuale per identificare dove i miglioramenti keyword genereranno pi\u00F9 profitto." },
          { number: "02", title: "Classificazione intento & clustering", description: "Ogni keyword viene classificata per fase di intento e raggruppata in cluster tematici. Progettiamo la tua architettura di contenuto intorno a come i tuoi clienti effettivamente cercano e acquistano." },
          { number: "03", title: "Gap competitivo & mapping opportunit\u00E0", description: "Analizziamo l\u2019intera impronta keyword dei tuoi competitor, identifichiamo lacune di posizionamento e troviamo termini a bassa competizione con alto potenziale di conversione che stanno trascurando." },
          { number: "04", title: "Roadmap prioritizzata & tracking", description: "Ricevi una roadmap keyword valutata e prioritizzata con stime di traffico, proiezioni di fatturato e prossimi passi chiari. Monitoriamo la performance mensilmente e adattiamo il targeting sulla base di dati reali." },
        ],
      },
      {
        type: "deliverables",
        badge: "Deliverable",
        heading: "Cosa ottieni",
        deliverables: [
          { title: "Mappa keyword", description: "Keyword mappate al fatturato, classificate per intento" },
          { title: "Cluster tematici", description: "Architettura di contenuto per il tuo catalogo" },
          { title: "Analisi competitiva", description: "Report completo del gap keyword dei competitor" },
          { title: "Roadmap prioritizzata", description: "Opportunit\u00E0 valutate con stime di fatturato" },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "Cosa distingue la vostra ricerca keyword dall\u2019uso di uno strumento da solo?", answer: "Gli strumenti ti danno dati. Noi ti diamo strategia. Classifichiamo ogni keyword per intento, la associamo al tuo catalogo e prioritizziamo per impatto sul fatturato \u2014 non solo per volume di ricerca." },
        { question: "Quanto dura il processo di ricerca keyword?", answer: "Una strategia keyword completa richiede tipicamente 2-3 settimane. Questo include analisi del catalogo, ricerca competitiva, classificazione dell\u2019intento e creazione della roadmap. Tempi accelerati disponibili per progetti urgenti." },
        { question: "Implementate anche la strategia keyword?", answer: "S\u00EC. Possiamo gestire l\u2019implementazione end-to-end inclusa ottimizzazione on-page, creazione contenuti e SEO tecnica. Oppure possiamo trasferire la strategia al vostro team interno con guide di implementazione dettagliate." },
        { question: "Come gestite la cannibalizzazione delle keyword?", answer: "Auditiamo i contenuti esistenti per problemi di cannibalizzazione in ogni progetto. Quando pi\u00F9 pagine competono per la stessa keyword, le consolidiamo, reindirizziamo o differenziamo per massimizzare il potenziale di ranking." },
        { question: "Quali strumenti e fonti dati utilizzate?", answer: "Utilizziamo una combinazione di Ahrefs, SEMrush, Google Search Console, DataForSEO e strumenti proprietari. Ma gli strumenti sono solo input \u2014 la strategia viene dalla nostra competenza ecommerce e dalla nostra metodologia orientata al fatturato." },
        { question: "Come considerate gli AI Overviews e la ricerca alimentata da LLM?", answer: "Identifichiamo le keyword dove appaiono AI Overviews, analizziamo quali fonti vengono citate e ottimizziamo la struttura dei tuoi contenuti sia per i ranking tradizionali che per i risultati di ricerca alimentati dall\u2019IA." },
      ],
      miniCta: {
        heading: "Pronto a trovare le keyword che generano davvero fatturato?",
        subtitle: "Se sei serio nel voler trasformare la ricerca keyword in una leva di crescita per il tuo brand ecommerce, parliamone.",
      },
    },
  },
  nl: {
    hero: {
      badge: "Zoekwoordenonderzoek",
      heading: "Omzetgericht zoekwoordenonderzoek voor ecommerce-merken",
      subtitle:
        "Stop met het najagen van ijdele rankings. Wij vinden de exacte zoektermen die jouw kopers gebruiken \u2014 en bouwen een zoekwoordstrategie die organisch verkeer omzet in voorspelbare, groeiende omzet.",
      ctaText: "Boek een zoekwoord-strategiegesprek",
    },
    trustBar: "Meer dan 20 bedrijven vertrouwen op ons",
    sections: [
      {
        type: "stats",
        badge: "Ons trackrecord",
        heading: "Zoekwoordenonderzoek dat resultaten levert",
        stats: [
          { value: "12.000+", label: "Zoekwoorden in kaart gebracht" },
          { value: "500+", label: "Ecommerce-winkels" },
          { value: "340 %", label: "Gem. verkeersgroei" },
          { value: "8+", label: "Jaar ervaring" },
        ],
      },
      {
        type: "benefits",
        badge: "Waarom wij",
        heading: "Waarom ecommerce-merken ons zoekwoordenonderzoek kiezen",
        subtitle: "Geen generieke zoekwoordlijsten. Geen gerecyclede templates. Een strategie gebouwd rond jouw catalogus, jouw marges en jouw klanten.",
        benefits: [
          { title: "Omzet-gekoppelde zoekwoorden", description: "We geven je geen spreadsheet met 10.000 zoekwoorden. Elk zoekwoord dat we targetten is gekoppeld aan koopintentie, margepotentieel en jouw werkelijke productcatalogus." },
          { title: "Intentieclassificatie", description: "Elk zoekwoord wordt geclassificeerd op fase van koopintentie \u2014 informatief, commercieel of transactioneel. We prioriteren de termen die producten in winkelwagens plaatsen." },
          { title: "Concurrerende gap-analyse", description: "We analyseren de volledige zoekwoord-footprint van je concurrenten, identificeren ranking-gaten en vinden zoektermen met lage concurrentie en hoog conversiepotentieel." },
          { title: "AI Overview-targeting", description: "We identificeren zoekwoorden waar AI Overviews verschijnen en optimaliseren je content om geciteerd te worden door Google\u2019s AI, en vangen verkeer uit het nieuwe zoeklandschap." },
          { title: "LLM-geoptimaliseerde clusters", description: "We groeperen zoekwoorden in thematische clusters ontworpen voor zowel traditionele rankings als LLM-aangedreven zoeken, waarmee je strategie toekomstbestendig wordt." },
          { title: "Klaar voor spraakzoeken", description: "We nemen natuurlijke taal en conversationele zoekopdrachten op in je zoekwoordenkaart, en vangen de groeiende markt voor spraakzoeken." },
        ],
      },
      {
        type: "process",
        badge: "De methodiek",
        heading: "Hoe wij jouw zoekwoordstrategie opbouwen",
        subtitle: "Geen generieke zoekwoordlijsten. Geen gerecyclede templates. Zo bouwen wij een zoekwoordstrategie die zich vermenigvuldigt.",
        process: [
          { number: "01", title: "Omzet- & catalogus-audit", description: "We beginnen met je winst- en verliesrekening, niet met een zoekwoord-tool. We brengen je best renderende categorie\u00EBn, top-SKU\u2019s en huidige organische prestaties in kaart om te bepalen waar zoekwoordverbeteringen het meeste winst opleveren." },
          { number: "02", title: "Intentieclassificatie & clustering", description: "Elk zoekwoord wordt geclassificeerd op intentiefase en gegroepeerd in thematische clusters. We ontwerpen je contentarchitectuur rond hoe jouw klanten daadwerkelijk zoeken en kopen." },
          { number: "03", title: "Concurrentie-gap & kansen-mapping", description: "We analyseren de volledige zoekwoord-footprint van je concurrenten, identificeren ranking-gaten en vinden zoektermen met lage concurrentie en hoog conversiepotentieel die ze over het hoofd zien." },
          { number: "04", title: "Geprioriteerde roadmap & tracking", description: "Je ontvangt een gescoorde, geprioriteerde zoekwoord-roadmap met verkeersschattingen, omzetprojecties en duidelijke vervolgstappen. We volgen de prestaties maandelijks en passen de targeting aan op basis van echte data." },
        ],
      },
      {
        type: "deliverables",
        badge: "Deliverables",
        heading: "Wat je krijgt",
        deliverables: [
          { title: "Zoekwoordenkaart", description: "Omzet-gekoppelde, intentieclassificeerde zoekwoorden" },
          { title: "Thematische clusters", description: "Contentarchitectuur voor jouw catalogus" },
          { title: "Concurrentieanalyse", description: "Volledig concurrerend zoekwoord-gap-rapport" },
          { title: "Geprioriteerde roadmap", description: "Gescoorde kansen met omzetschattingen" },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "Wat maakt jullie zoekwoordenonderzoek anders dan zelf een tool gebruiken?", answer: "Tools geven je data. Wij geven je strategie. We classificeren elk zoekwoord op intentie, koppelen het aan je catalogus en prioriteren op omzetimpact \u2014 niet alleen op zoekvolume." },
        { question: "Hoe lang duurt het zoekwoordenonderzoek-proces?", answer: "Een volledige zoekwoordstrategie duurt doorgaans 2-3 weken. Dit omvat catalogusanalyse, concurrentieonderzoek, intentieclassificatie en roadmap-creatie. Versnelde tijdlijnen zijn beschikbaar voor tijdgevoelige projecten." },
        { question: "Implementeren jullie de zoekwoordstrategie ook?", answer: "Ja. We kunnen de end-to-end implementatie verzorgen, inclusief on-page optimalisatie, contentcreatie en technische SEO. Of we dragen de strategie over aan je interne team met gedetailleerde implementatiegidsen." },
        { question: "Hoe gaan jullie om met zoekwoord-kannibalisatie?", answer: "We auditen je bestaande content op kannibalisatieproblemen bij elk project. Wanneer meerdere pagina\u2019s concurreren voor hetzelfde zoekwoord, consolideren, redirecten of differenti\u00EBren we ze om het rankingpotentieel te maximaliseren." },
        { question: "Welke tools en databronnen gebruiken jullie?", answer: "We gebruiken een combinatie van Ahrefs, SEMrush, Google Search Console, DataForSEO en eigen tools. Maar tools zijn slechts input \u2014 de strategie komt van onze ecommerce-expertise en onze omzetgerichte methodiek." },
        { question: "Hoe houden jullie rekening met AI Overviews en LLM-aangedreven zoeken?", answer: "We identificeren zoekwoorden waar AI Overviews verschijnen, analyseren welke bronnen worden geciteerd en optimaliseren je contentstructuur voor zowel traditionele rankings als AI-aangedreven zoekresultaten." },
      ],
      miniCta: {
        heading: "Klaar om de zoekwoorden te vinden die echt omzet genereren?",
        subtitle: "Als je serieus bent over het omzetten van zoekwoordenonderzoek in een groeihefboom voor je ecommerce-merk, laten we praten.",
      },
    },
  },
};
