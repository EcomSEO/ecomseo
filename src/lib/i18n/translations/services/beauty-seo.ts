import type { Locale } from "../../config";
import type { ServicePageProps } from "@/components/service/ServicePageTemplate";

export const beautySeoData: Record<Locale, ServicePageProps> = {
  en: {
    hero: {
      badge: "Beauty SEO",
      heading: "Beauty SEO That Makes Brands Shine",
      subtitle:
        "We help beauty and skincare brands rank for the searches that drive revenue \u2014 from ingredient queries to routine guides and product comparisons.",
      ctaText: "Book a Beauty SEO Strategy Call",
      heroImage: "/images/niches/beauty-hairdryer.png",
    },
    trustBar: "20+ beauty brands trust us to grow their organic revenue",
    sections: [
      {
        type: "benefits",
        badge: "Buyer Intent",
        heading: "How Beauty Shoppers Search",
        subtitle:
          "Beauty search behavior is unique. We understand the intent signals that matter for your niche.",
        benefits: [
          { title: "Ingredient-Driven Queries", description: "Shoppers search by active ingredients like retinol, niacinamide, and hyaluronic acid. We build content that captures these high-intent searches." },
          { title: "Skin Type Segmentation", description: "Oily, dry, sensitive, combination \u2014 your customers search by skin type. We optimize collections and content around these segments." },
          { title: "Tutorial & How-To Demand", description: "Beauty shoppers want to learn before they buy. We create tutorial content that builds trust and drives product discovery." },
          { title: "Review-Driven Decisions", description: "Before and after results, real reviews, and social proof drive purchase decisions. We optimize for these trust signals." },
          { title: "Brand vs. Generic Splits", description: "Some shoppers search by brand, others by product type. We capture both segments with targeted content strategies." },
          { title: "Seasonal Beauty Trends", description: "SPF in summer, hydration in winter \u2014 we align your content calendar with seasonal search demand." },
        ],
      },
      {
        type: "deliverables",
        badge: "Deliverables",
        heading: "What We Deliver for Beauty Brands",
        deliverables: [
          { title: "Collection Optimization", description: "Category pages + internal linking" },
          { title: "Ingredient Content", description: "Education pages that drive traffic" },
          { title: "Routine Guides", description: "How-to content that converts" },
          { title: "Technical Fixes", description: "Speed, schema, crawl optimization" },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "Do you specialize in beauty ecommerce specifically?", answer: "Yes. We work exclusively with ecommerce brands, and beauty is one of our core verticals. We understand beauty search behavior, seasonal trends, and the unique content strategies that work for skincare, cosmetics, and haircare brands." },
        { question: "How do you handle ingredient-focused SEO?", answer: "We build ingredient hub pages, optimize product pages around key actives, and create educational content that captures ingredient-driven searches. This positions your brand as an authority while driving targeted traffic." },
        { question: "Can you help with international beauty SEO?", answer: "Absolutely. We handle multi-language SEO for beauty brands selling across markets. This includes hreflang implementation, localized content, and market-specific keyword research." },
        { question: "How important is content for beauty SEO?", answer: "Critical. Beauty shoppers research extensively before purchasing. Tutorial content, ingredient guides, and routine recommendations are essential for capturing top-of-funnel traffic and building trust." },
        { question: "How do you measure success for beauty brands?", answer: "We track organic revenue, traffic from high-intent keywords, collection page rankings, and conversion rates. We report monthly on metrics that matter for your bottom line." },
        { question: "What beauty brands do you typically work with?", answer: "We work with DTC skincare, cosmetics, and haircare brands doing \u20ac500K+ in annual revenue. Our clients range from emerging indie brands to established beauty retailers." },
      ],
      miniCta: {
        heading: "Ready to Grow Your Beauty Brand?",
        subtitle: "Book a free strategy call and we\u2019ll show you the organic opportunities you\u2019re missing.",
      },
    },
  },
  de: {
    hero: {
      badge: "Beauty-SEO",
      heading: "Beauty-SEO, das Marken zum Strahlen bringt",
      subtitle:
        "Wir helfen Beauty- und Hautpflegemarken, f\u00fcr die Suchanfragen zu ranken, die Umsatz bringen \u2014 von Inhaltsstoff-Suchen \u00fcber Routine-Guides bis zu Produktvergleichen.",
      ctaText: "Beauty-SEO-Strategiegespr\u00e4ch buchen",
      heroImage: "/images/niches/beauty-hairdryer.png",
    },
    trustBar: "Mehr als 20 Beauty-Marken vertrauen uns beim organischen Wachstum",
    sections: [
      {
        type: "benefits",
        badge: "Kaufabsicht",
        heading: "So suchen Beauty-K\u00e4ufer",
        subtitle:
          "Das Suchverhalten im Beauty-Bereich ist einzigartig. Wir verstehen die Intent-Signale, die f\u00fcr Ihre Nische z\u00e4hlen.",
        benefits: [
          { title: "Inhaltsstoff-getriebene Suchen", description: "K\u00e4ufer suchen nach Wirkstoffen wie Retinol, Niacinamid und Hyalurons\u00e4ure. Wir erstellen Content, der diese kaufbereiten Suchanfragen abf\u00e4ngt." },
          { title: "Hauttyp-Segmentierung", description: "Fettig, trocken, empfindlich, Mischhaut \u2014 Ihre Kunden suchen nach Hauttyp. Wir optimieren Kollektionen und Content rund um diese Segmente." },
          { title: "Tutorial- und How-to-Nachfrage", description: "Beauty-K\u00e4ufer m\u00f6chten lernen, bevor sie kaufen. Wir erstellen Tutorial-Content, der Vertrauen aufbaut und Produktentdeckung f\u00f6rdert." },
          { title: "Bewertungs-getriebene Entscheidungen", description: "Vorher-Nachher-Ergebnisse, echte Bewertungen und Social Proof treiben Kaufentscheidungen. Wir optimieren f\u00fcr diese Vertrauenssignale." },
          { title: "Marke vs. Generisch", description: "Manche Kunden suchen nach Marke, andere nach Produkttyp. Wir erfassen beide Segmente mit gezielten Content-Strategien." },
          { title: "Saisonale Beauty-Trends", description: "SPF im Sommer, Feuchtigkeit im Winter \u2014 wir stimmen Ihren Content-Kalender mit der saisonalen Suchnachfrage ab." },
        ],
      },
      {
        type: "deliverables",
        badge: "Lieferumfang",
        heading: "Was wir f\u00fcr Beauty-Marken liefern",
        deliverables: [
          { title: "Kollektions-Optimierung", description: "Kategorie-Seiten + interne Verlinkung" },
          { title: "Inhaltsstoff-Content", description: "Wissensseiten, die Traffic bringen" },
          { title: "Routine-Guides", description: "How-to-Content, der konvertiert" },
          { title: "Technische Fixes", description: "Speed, Schema, Crawl-Optimierung" },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "Sind Sie auf Beauty-E-Commerce spezialisiert?", answer: "Ja. Wir arbeiten ausschlie\u00dflich mit E-Commerce-Marken, und Beauty ist einer unserer Kernbereiche. Wir verstehen das Suchverhalten im Beauty-Bereich, saisonale Trends und die einzigartigen Content-Strategien, die f\u00fcr Hautpflege-, Kosmetik- und Haarpflegemarken funktionieren." },
        { question: "Wie gehen Sie mit inhaltsstoff-fokussiertem SEO um?", answer: "Wir erstellen Inhaltsstoff-Hub-Seiten, optimieren Produktseiten rund um wichtige Wirkstoffe und erstellen Bildungscontent, der inhaltsstoff-getriebene Suchen abf\u00e4ngt. Das positioniert Ihre Marke als Autorit\u00e4t und generiert gezielten Traffic." },
        { question: "K\u00f6nnen Sie bei internationalem Beauty-SEO helfen?", answer: "Absolut. Wir \u00fcbernehmen mehrsprachiges SEO f\u00fcr Beauty-Marken, die in verschiedenen M\u00e4rkten verkaufen. Dazu geh\u00f6ren Hreflang-Implementierung, lokalisierte Inhalte und marktspezifische Keyword-Recherche." },
        { question: "Wie wichtig ist Content f\u00fcr Beauty-SEO?", answer: "Entscheidend. Beauty-K\u00e4ufer recherchieren ausgiebig vor dem Kauf. Tutorial-Content, Inhaltsstoff-Guides und Routinen-Empfehlungen sind essenziell, um Top-of-Funnel-Traffic zu gewinnen und Vertrauen aufzubauen." },
        { question: "Wie messen Sie Erfolg f\u00fcr Beauty-Marken?", answer: "Wir tracken organischen Umsatz, Traffic aus High-Intent-Keywords, Kollektionsseiten-Rankings und Conversion-Raten. Wir berichten monatlich \u00fcber Metriken, die f\u00fcr Ihr Ergebnis z\u00e4hlen." },
        { question: "Mit welchen Beauty-Marken arbeiten Sie typischerweise?", answer: "Wir arbeiten mit DTC-Hautpflege-, Kosmetik- und Haarpflegemarken ab 500.000\u00a0\u20ac Jahresumsatz. Unsere Kunden reichen von aufstrebenden Indie-Marken bis zu etablierten Beauty-Einzelh\u00e4ndlern." },
      ],
      miniCta: {
        heading: "Bereit, Ihre Beauty-Marke zu skalieren?",
        subtitle: "Buchen Sie ein kostenloses Strategiegespr\u00e4ch und wir zeigen Ihnen die organischen Chancen, die Sie verpassen.",
      },
    },
  },
  fr: {
    hero: {
      badge: "SEO Beaut\u00e9",
      heading: "SEO Beaut\u00e9 qui fait briller les marques",
      subtitle:
        "Nous aidons les marques de beaut\u00e9 et de soins \u00e0 se positionner sur les recherches qui g\u00e9n\u00e8rent du chiffre d\u2019affaires \u2014 des requ\u00eates sur les ingr\u00e9dients aux guides de routine et comparatifs produits.",
      ctaText: "R\u00e9server un appel strat\u00e9gique SEO Beaut\u00e9",
      heroImage: "/images/niches/beauty-hairdryer.png",
    },
    trustBar: "Plus de 20 marques beaut\u00e9 nous font confiance pour leur croissance organique",
    sections: [
      {
        type: "benefits",
        badge: "Intention d\u2019achat",
        heading: "Comment les acheteurs beaut\u00e9 recherchent",
        subtitle:
          "Le comportement de recherche beaut\u00e9 est unique. Nous comprenons les signaux d\u2019intention qui comptent pour votre niche.",
        benefits: [
          { title: "Requ\u00eates par ingr\u00e9dient", description: "Les acheteurs recherchent par ingr\u00e9dients actifs comme le r\u00e9tinol, la niacinamide et l\u2019acide hyaluronique. Nous cr\u00e9ons du contenu qui capte ces recherches \u00e0 haute intention." },
          { title: "Segmentation par type de peau", description: "Grasse, s\u00e8che, sensible, mixte \u2014 vos clients recherchent par type de peau. Nous optimisons collections et contenu autour de ces segments." },
          { title: "Demande de tutoriels et how-to", description: "Les acheteurs beaut\u00e9 veulent apprendre avant d\u2019acheter. Nous cr\u00e9ons du contenu tutoriel qui renforce la confiance et favorise la d\u00e9couverte produit." },
          { title: "D\u00e9cisions guid\u00e9es par les avis", description: "R\u00e9sultats avant/apr\u00e8s, vrais avis et preuves sociales influencent les d\u00e9cisions d\u2019achat. Nous optimisons ces signaux de confiance." },
          { title: "Marque vs. G\u00e9n\u00e9rique", description: "Certains acheteurs cherchent par marque, d\u2019autres par type de produit. Nous captons les deux segments avec des strat\u00e9gies de contenu cibl\u00e9es." },
          { title: "Tendances beaut\u00e9 saisonni\u00e8res", description: "SPF en \u00e9t\u00e9, hydratation en hiver \u2014 nous alignons votre calendrier \u00e9ditorial sur la demande de recherche saisonni\u00e8re." },
        ],
      },
      {
        type: "deliverables",
        badge: "Livrables",
        heading: "Ce que nous livrons aux marques beaut\u00e9",
        deliverables: [
          { title: "Optimisation des collections", description: "Pages cat\u00e9gories + maillage interne" },
          { title: "Contenu ingr\u00e9dients", description: "Pages \u00e9ducatives qui g\u00e9n\u00e8rent du trafic" },
          { title: "Guides de routine", description: "Contenu how-to qui convertit" },
          { title: "Corrections techniques", description: "Vitesse, schema, optimisation du crawl" },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "\u00cates-vous sp\u00e9cialis\u00e9s dans le e-commerce beaut\u00e9\u00a0?", answer: "Oui. Nous travaillons exclusivement avec des marques e-commerce, et la beaut\u00e9 est l\u2019une de nos verticales principales. Nous comprenons le comportement de recherche beaut\u00e9, les tendances saisonni\u00e8res et les strat\u00e9gies de contenu sp\u00e9cifiques aux marques de soins, cosm\u00e9tiques et capillaires." },
        { question: "Comment g\u00e9rez-vous le SEO ax\u00e9 sur les ingr\u00e9dients\u00a0?", answer: "Nous cr\u00e9ons des pages hub ingr\u00e9dients, optimisons les pages produits autour des actifs cl\u00e9s et produisons du contenu \u00e9ducatif qui capte les recherches li\u00e9es aux ingr\u00e9dients. Cela positionne votre marque comme r\u00e9f\u00e9rence tout en g\u00e9n\u00e9rant du trafic qualifi\u00e9." },
        { question: "Pouvez-vous aider avec le SEO beaut\u00e9 international\u00a0?", answer: "Absolument. Nous g\u00e9rons le SEO multilingue pour les marques beaut\u00e9 vendant sur plusieurs march\u00e9s. Cela inclut l\u2019impl\u00e9mentation hreflang, le contenu localis\u00e9 et la recherche de mots-cl\u00e9s sp\u00e9cifique \u00e0 chaque march\u00e9." },
        { question: "Quelle est l\u2019importance du contenu pour le SEO beaut\u00e9\u00a0?", answer: "Essentielle. Les acheteurs beaut\u00e9 effectuent des recherches approfondies avant d\u2019acheter. Le contenu tutoriel, les guides d\u2019ingr\u00e9dients et les recommandations de routine sont indispensables pour capter le trafic haut de funnel et renforcer la confiance." },
        { question: "Comment mesurez-vous le succ\u00e8s pour les marques beaut\u00e9\u00a0?", answer: "Nous suivons le chiffre d\u2019affaires organique, le trafic issu des mots-cl\u00e9s \u00e0 haute intention, les positions des pages de collection et les taux de conversion. Nous rapportons mensuellement sur les m\u00e9triques qui comptent pour votre rentabilit\u00e9." },
        { question: "Avec quelles marques beaut\u00e9 travaillez-vous g\u00e9n\u00e9ralement\u00a0?", answer: "Nous travaillons avec des marques DTC de soins, cosm\u00e9tiques et capillaires r\u00e9alisant plus de 500\u00a0000\u00a0\u20ac de CA annuel. Nos clients vont des marques indie \u00e9mergentes aux enseignes beaut\u00e9 \u00e9tablies." },
      ],
      miniCta: {
        heading: "Pr\u00eat \u00e0 d\u00e9velopper votre marque beaut\u00e9\u00a0?",
        subtitle: "R\u00e9servez un appel strat\u00e9gique gratuit et nous vous montrerons les opportunit\u00e9s organiques que vous manquez.",
      },
    },
  },
  es: {
    hero: {
      badge: "SEO Belleza",
      heading: "SEO de Belleza que hace brillar a las marcas",
      subtitle:
        "Ayudamos a marcas de belleza y cuidado de la piel a posicionarse en las b\u00fasquedas que generan ingresos \u2014 desde consultas sobre ingredientes hasta gu\u00edas de rutina y comparativas de productos.",
      ctaText: "Reserva una llamada estrat\u00e9gica de SEO Belleza",
      heroImage: "/images/niches/beauty-hairdryer.png",
    },
    trustBar: "M\u00e1s de 20 marcas de belleza conf\u00edan en nosotros para crecer org\u00e1nicamente",
    sections: [
      {
        type: "benefits",
        badge: "Intenci\u00f3n de compra",
        heading: "C\u00f3mo buscan los compradores de belleza",
        subtitle:
          "El comportamiento de b\u00fasqueda en belleza es \u00fanico. Entendemos las se\u00f1ales de intenci\u00f3n que importan para tu nicho.",
        benefits: [
          { title: "B\u00fasquedas por ingrediente", description: "Los compradores buscan por ingredientes activos como retinol, niacinamida y \u00e1cido hialur\u00f3nico. Creamos contenido que captura estas b\u00fasquedas de alta intenci\u00f3n." },
          { title: "Segmentaci\u00f3n por tipo de piel", description: "Grasa, seca, sensible, mixta \u2014 tus clientes buscan por tipo de piel. Optimizamos colecciones y contenido en torno a estos segmentos." },
          { title: "Demanda de tutoriales y gu\u00edas", description: "Los compradores de belleza quieren aprender antes de comprar. Creamos contenido tutorial que genera confianza e impulsa el descubrimiento de productos." },
          { title: "Decisiones basadas en rese\u00f1as", description: "Resultados antes y despu\u00e9s, rese\u00f1as reales y prueba social impulsan las decisiones de compra. Optimizamos estas se\u00f1ales de confianza." },
          { title: "Marca vs. Gen\u00e9rico", description: "Algunos compradores buscan por marca, otros por tipo de producto. Capturamos ambos segmentos con estrategias de contenido dirigidas." },
          { title: "Tendencias de belleza estacionales", description: "SPF en verano, hidrataci\u00f3n en invierno \u2014 alineamos tu calendario de contenidos con la demanda de b\u00fasqueda estacional." },
        ],
      },
      {
        type: "deliverables",
        badge: "Entregables",
        heading: "Lo que entregamos a las marcas de belleza",
        deliverables: [
          { title: "Optimizaci\u00f3n de colecciones", description: "P\u00e1ginas de categor\u00eda + enlazado interno" },
          { title: "Contenido de ingredientes", description: "P\u00e1ginas educativas que generan tr\u00e1fico" },
          { title: "Gu\u00edas de rutina", description: "Contenido how-to que convierte" },
          { title: "Correcciones t\u00e9cnicas", description: "Velocidad, schema, optimizaci\u00f3n de rastreo" },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "\u00bfSe especializan en e-commerce de belleza?", answer: "S\u00ed. Trabajamos exclusivamente con marcas de e-commerce, y belleza es una de nuestras verticales principales. Entendemos el comportamiento de b\u00fasqueda en belleza, tendencias estacionales y las estrategias de contenido \u00fanicas que funcionan para marcas de cuidado de la piel, cosm\u00e9tica y cuidado capilar." },
        { question: "\u00bfC\u00f3mo gestionan el SEO enfocado en ingredientes?", answer: "Creamos p\u00e1ginas hub de ingredientes, optimizamos p\u00e1ginas de producto alrededor de activos clave y creamos contenido educativo que captura las b\u00fasquedas relacionadas con ingredientes. Esto posiciona tu marca como autoridad mientras genera tr\u00e1fico cualificado." },
        { question: "\u00bfPueden ayudar con SEO de belleza internacional?", answer: "Por supuesto. Gestionamos SEO multiling\u00fce para marcas de belleza que venden en varios mercados. Esto incluye implementaci\u00f3n de hreflang, contenido localizado e investigaci\u00f3n de palabras clave espec\u00edfica por mercado." },
        { question: "\u00bfQu\u00e9 importancia tiene el contenido para el SEO de belleza?", answer: "Cr\u00edtica. Los compradores de belleza investigan extensamente antes de comprar. Contenido tutorial, gu\u00edas de ingredientes y recomendaciones de rutina son esenciales para captar tr\u00e1fico top-of-funnel y generar confianza." },
        { question: "\u00bfC\u00f3mo miden el \u00e9xito para marcas de belleza?", answer: "Rastreamos ingresos org\u00e1nicos, tr\u00e1fico de keywords de alta intenci\u00f3n, rankings de p\u00e1ginas de colecci\u00f3n y tasas de conversi\u00f3n. Reportamos mensualmente sobre m\u00e9tricas que importan para tu resultado final." },
        { question: "\u00bfCon qu\u00e9 marcas de belleza trabajan normalmente?", answer: "Trabajamos con marcas DTC de cuidado de la piel, cosm\u00e9tica y cuidado capilar con m\u00e1s de 500.000\u00a0\u20ac de facturaci\u00f3n anual. Nuestros clientes van desde marcas indie emergentes hasta retailers de belleza establecidos." },
      ],
      miniCta: {
        heading: "\u00bfLista para hacer crecer tu marca de belleza?",
        subtitle: "Reserva una llamada estrat\u00e9gica gratuita y te mostraremos las oportunidades org\u00e1nicas que est\u00e1s perdiendo.",
      },
    },
  },
  it: {
    hero: {
      badge: "SEO Beauty",
      heading: "SEO Beauty che fa brillare i brand",
      subtitle:
        "Aiutiamo brand beauty e skincare a posizionarsi per le ricerche che generano fatturato \u2014 dalle query sugli ingredienti alle guide di routine e ai confronti prodotto.",
      ctaText: "Prenota una call strategica SEO Beauty",
      heroImage: "/images/niches/beauty-hairdryer.png",
    },
    trustBar: "Oltre 20 brand beauty si affidano a noi per la crescita organica",
    sections: [
      {
        type: "benefits",
        badge: "Intenzione d\u2019acquisto",
        heading: "Come cercano gli acquirenti beauty",
        subtitle:
          "Il comportamento di ricerca nel beauty \u00e8 unico. Comprendiamo i segnali d\u2019intento che contano per la tua nicchia.",
        benefits: [
          { title: "Ricerche per ingrediente", description: "Gli acquirenti cercano per principi attivi come retinolo, niacinamide e acido ialuronico. Creiamo contenuti che intercettano queste ricerche ad alta intenzione." },
          { title: "Segmentazione per tipo di pelle", description: "Grassa, secca, sensibile, mista \u2014 i tuoi clienti cercano per tipo di pelle. Ottimizziamo collezioni e contenuti attorno a questi segmenti." },
          { title: "Domanda di tutorial e how-to", description: "Gli acquirenti beauty vogliono imparare prima di comprare. Creiamo contenuti tutorial che costruiscono fiducia e favoriscono la scoperta dei prodotti." },
          { title: "Decisioni guidate dalle recensioni", description: "Risultati prima/dopo, recensioni reali e prova sociale guidano le decisioni d\u2019acquisto. Ottimizziamo per questi segnali di fiducia." },
          { title: "Brand vs. Generico", description: "Alcuni acquirenti cercano per brand, altri per tipo di prodotto. Catturiamo entrambi i segmenti con strategie di contenuto mirate." },
          { title: "Tendenze beauty stagionali", description: "SPF in estate, idratazione in inverno \u2014 allineiamo il tuo calendario editoriale alla domanda di ricerca stagionale." },
        ],
      },
      {
        type: "deliverables",
        badge: "Deliverable",
        heading: "Cosa consegniamo ai brand beauty",
        deliverables: [
          { title: "Ottimizzazione collezioni", description: "Pagine categoria + linking interno" },
          { title: "Contenuti ingredienti", description: "Pagine educative che generano traffico" },
          { title: "Guide di routine", description: "Contenuti how-to che convertono" },
          { title: "Fix tecnici", description: "Velocit\u00e0, schema, ottimizzazione crawl" },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "Siete specializzati nell\u2019e-commerce beauty?", answer: "S\u00ec. Lavoriamo esclusivamente con brand e-commerce, e il beauty \u00e8 una delle nostre verticali principali. Comprendiamo il comportamento di ricerca nel beauty, le tendenze stagionali e le strategie di contenuto specifiche per brand di skincare, cosmetici e haircare." },
        { question: "Come gestite il SEO focalizzato sugli ingredienti?", answer: "Creiamo pagine hub per ingredienti, ottimizziamo le pagine prodotto attorno ai principi attivi chiave e produciamo contenuti educativi che intercettano le ricerche legate agli ingredienti. Questo posiziona il tuo brand come autorit\u00e0 generando traffico qualificato." },
        { question: "Potete aiutare con il SEO beauty internazionale?", answer: "Assolutamente. Gestiamo il SEO multilingua per brand beauty che vendono in pi\u00f9 mercati. Questo include l\u2019implementazione hreflang, contenuti localizzati e ricerca keyword specifica per mercato." },
        { question: "Quanto \u00e8 importante il contenuto per il SEO beauty?", answer: "Fondamentale. Gli acquirenti beauty fanno ricerche approfondite prima di comprare. Contenuti tutorial, guide agli ingredienti e raccomandazioni di routine sono essenziali per catturare traffico top-of-funnel e costruire fiducia." },
        { question: "Come misurate il successo per i brand beauty?", answer: "Monitoriamo fatturato organico, traffico da keyword ad alta intenzione, posizionamento delle pagine di collezione e tassi di conversione. Reportiamo mensilmente sulle metriche che contano per il tuo risultato finale." },
        { question: "Con quali brand beauty lavorate di solito?", answer: "Lavoriamo con brand DTC di skincare, cosmetici e haircare con fatturato annuo superiore a 500.000\u00a0\u20ac. I nostri clienti vanno dai brand indie emergenti ai retailer beauty affermati." },
      ],
      miniCta: {
        heading: "Pronto a far crescere il tuo brand beauty?",
        subtitle: "Prenota una call strategica gratuita e ti mostreremo le opportunit\u00e0 organiche che stai perdendo.",
      },
    },
  },
  nl: {
    hero: {
      badge: "Beauty SEO",
      heading: "Beauty SEO die merken laat stralen",
      subtitle:
        "We helpen beauty- en huidverzorgingsmerken te ranken op de zoekopdrachten die omzet genereren \u2014 van ingredi\u00ebntenzoekopdrachten tot routinegidsen en productvergelijkingen.",
      ctaText: "Boek een Beauty SEO-strategiegesprek",
      heroImage: "/images/niches/beauty-hairdryer.png",
    },
    trustBar: "Meer dan 20 beautymerken vertrouwen op ons voor organische groei",
    sections: [
      {
        type: "benefits",
        badge: "Koopintentie",
        heading: "Hoe beautyklanten zoeken",
        subtitle:
          "Zoekgedrag in de beautybranche is uniek. Wij begrijpen de intentiesignalen die ertoe doen in jouw niche.",
        benefits: [
          { title: "Ingredi\u00ebntgestuurde zoekopdrachten", description: "Klanten zoeken op actieve ingredi\u00ebnten zoals retinol, niacinamide en hyaluronzuur. We cre\u00ebren content die deze hoge-intentie zoekopdrachten vangt." },
          { title: "Segmentatie op huidtype", description: "Vet, droog, gevoelig, gecombineerd \u2014 jouw klanten zoeken op huidtype. We optimaliseren collecties en content rondom deze segmenten." },
          { title: "Vraag naar tutorials en how-to\u2019s", description: "Beautyklanten willen leren voordat ze kopen. We cre\u00ebren tutorialcontent die vertrouwen opbouwt en productontdekking stimuleert." },
          { title: "Door reviews gestuurde beslissingen", description: "Voor-en-na resultaten, echte reviews en sociaal bewijs sturen aankoopbeslissingen. We optimaliseren voor deze vertrouwenssignalen." },
          { title: "Merk vs. Generiek", description: "Sommige klanten zoeken op merk, anderen op producttype. We vangen beide segmenten met gerichte contentstrategien." },
          { title: "Seizoensgebonden beautytrends", description: "SPF in de zomer, hydratatie in de winter \u2014 we stemmen je contentkalender af op de seizoensgebonden zoekvraag." },
        ],
      },
      {
        type: "deliverables",
        badge: "Deliverables",
        heading: "Wat we leveren voor beautymerken",
        deliverables: [
          { title: "Collectie-optimalisatie", description: "Categoriepagina\u2019s + interne linking" },
          { title: "Ingredi\u00ebntencontent", description: "Educatieve pagina\u2019s die verkeer genereren" },
          { title: "Routinegidsen", description: "How-to content die converteert" },
          { title: "Technische fixes", description: "Snelheid, schema, crawloptimalisatie" },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "Zijn jullie gespecialiseerd in beauty e-commerce?", answer: "Ja. We werken uitsluitend met e-commercemerken, en beauty is een van onze kernverticalen. We begrijpen beauty-zoekgedrag, seizoenstrends en de unieke contentstrategien die werken voor huidverzorgings-, cosmetica- en haarverzorgingsmerken." },
        { question: "Hoe pakken jullie ingredi\u00ebntgericht SEO aan?", answer: "We bouwen ingredi\u00ebnthub-pagina\u2019s, optimaliseren productpagina\u2019s rond belangrijke actieve stoffen en cre\u00ebren educatieve content die ingredi\u00ebntgerelateerde zoekopdrachten vangt. Dit positioneert je merk als autoriteit en genereert gericht verkeer." },
        { question: "Kunnen jullie helpen met internationaal beauty SEO?", answer: "Absoluut. We verzorgen meertalige SEO voor beautymerken die op meerdere markten verkopen. Dit omvat hreflang-implementatie, gelokaliseerde content en marktspecifiek zoekwoordenonderzoek." },
        { question: "Hoe belangrijk is content voor beauty SEO?", answer: "Cruciaal. Beautyklanten doen uitgebreid onderzoek voordat ze kopen. Tutorialcontent, ingredi\u00ebntengidsen en routineaanbevelingen zijn essentieel om top-of-funnel verkeer te vangen en vertrouwen op te bouwen." },
        { question: "Hoe meten jullie succes voor beautymerken?", answer: "We tracken organische omzet, verkeer van hoge-intentie zoekwoorden, collectiepagina-rankings en conversieratio\u2019s. We rapporteren maandelijks over metrics die ertoe doen voor je bedrijfsresultaat." },
        { question: "Met welke beautymerken werken jullie doorgaans?", answer: "We werken met DTC huidverzorgings-, cosmetica- en haarverzorgingsmerken met meer dan \u20ac\u00a0500K jaaromzet. Onze klanten vari\u00ebren van opkomende indiemerken tot gevestigde beautyretailers." },
      ],
      miniCta: {
        heading: "Klaar om je beautymerk te laten groeien?",
        subtitle: "Boek een gratis strategiegesprek en we laten je zien welke organische kansen je mist.",
      },
    },
  },
};
