import type { Locale } from "../config";

export const intentMatchingToolT: Record<Locale, {
  badge: string;
  heading: string;
  subtitle: string;
  label: string;
  placeholder: string;
  analyze: string;
  resultsPlaceholder: string;
  statsUsers: string;
  statsRating: string;
  statsTime: string;
  features: string[];
  howItWorksTitle: string;
  howItWorksSteps: { title: string; desc: string }[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
  ctaBottom: string;
  ctaBottomDesc: string;
  ctaBottomButton: string;
}> = {
  en: {
    badge: "Free SEO Tool",
    heading: "Intent Matching Tool",
    subtitle: "Classify ecommerce keywords by search intent. Know whether a query is informational, commercial, or transactional so you map it to the right page type.",
    label: "Enter your keyword",
    placeholder: "e.g. best running shoes for flat feet",
    analyze: "Analyze Intent",
    resultsPlaceholder: "Enter a keyword above to see the intent classification",
    statsUsers: "5,200+ keywords analyzed",
    statsRating: "4.8 avg. rating",
    statsTime: "Instant results",
    features: [
      "Classify keywords as informational, navigational, commercial, or transactional",
      "Get page-type recommendations: product page, category, blog post, or guide",
      "Understand buyer journey stage for each keyword",
      "Optimize content strategy by matching intent to page templates",
    ],
    howItWorksTitle: "How It Works",
    howItWorksSteps: [
      { title: "Enter your keyword", desc: "Type any ecommerce keyword or search query you want to classify." },
      { title: "Get intent analysis", desc: "Our engine analyzes search patterns and SERP features to determine the dominant intent." },
      { title: "Map to page types", desc: "See which page type to create or optimize: product, category, blog, landing page, or FAQ." },
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "What is search intent?", a: "Search intent is the reason behind a search query. It tells you whether a user wants to learn something (informational), compare options (commercial), buy something (transactional), or find a specific site (navigational). Matching intent to page type is critical for ecommerce SEO." },
      { q: "Why does intent matter for ecommerce?", a: "If someone searches 'best wireless earbuds' they want a comparison guide, not a product page. Serving the wrong page type means Google won't rank you. Intent matching ensures every keyword points to the right content format." },
      { q: "How accurate is the intent classification?", a: "We analyze actual SERP features, top-ranking page types, and query modifiers to classify intent. Accuracy is highest for clear commercial and transactional queries common in ecommerce." },
      { q: "Can I analyze multiple keywords at once?", a: "Currently the tool analyzes one keyword at a time. For bulk intent classification across hundreds of keywords, contact our team for a custom keyword mapping project." },
      { q: "What's the difference between commercial and transactional intent?", a: "Commercial intent means the user is researching before buying (e.g. 'best protein powder 2025'). Transactional intent means they're ready to purchase (e.g. 'buy whey protein isolate'). The page type should differ: comparison guide vs. product page." },
    ],
    ctaBottom: "Need a full keyword strategy?",
    ctaBottomDesc: "Our team maps thousands of keywords to the right pages, intent types, and content formats. We build the strategy that drives revenue.",
    ctaBottomButton: "Get a Free Strategy Call",
  },
  de: {
    badge: "Kostenloses SEO-Tool",
    heading: "Intent-Analyse-Tool",
    subtitle: "Klassifizieren Sie E-Commerce-Keywords nach Suchintention. Erkennen Sie, ob eine Suchanfrage informativ, kommerziell oder transaktional ist, um sie dem richtigen Seitentyp zuzuordnen.",
    label: "Keyword eingeben",
    placeholder: "z. B. beste Laufschuhe fuer Plattfuesse",
    analyze: "Intent analysieren",
    resultsPlaceholder: "Geben Sie oben ein Keyword ein, um die Intent-Klassifizierung zu sehen",
    statsUsers: "5.200+ Keywords analysiert",
    statsRating: "4,8 Durchschnittsbewertung",
    statsTime: "Sofortergebnisse",
    features: [
      "Keywords als informativ, navigational, kommerziell oder transaktional klassifizieren",
      "Seitentyp-Empfehlungen erhalten: Produktseite, Kategorie, Blogbeitrag oder Ratgeber",
      "Kaufreise-Phase fuer jedes Keyword verstehen",
      "Content-Strategie optimieren durch Intent-Zuordnung zu Seitenvorlagen",
    ],
    howItWorksTitle: "So funktioniert es",
    howItWorksSteps: [
      { title: "Keyword eingeben", desc: "Geben Sie ein beliebiges E-Commerce-Keyword oder eine Suchanfrage ein." },
      { title: "Intent-Analyse erhalten", desc: "Unsere Engine analysiert Suchmuster und SERP-Features, um die dominante Intention zu bestimmen." },
      { title: "Seitentyp zuordnen", desc: "Sehen Sie, welchen Seitentyp Sie erstellen sollten: Produkt, Kategorie, Blog, Landingpage oder FAQ." },
    ],
    faqTitle: "Haeufig gestellte Fragen",
    faqs: [
      { q: "Was ist Suchintention?", a: "Suchintention ist der Grund hinter einer Suchanfrage. Sie zeigt, ob ein Nutzer etwas lernen (informativ), Optionen vergleichen (kommerziell), kaufen (transaktional) oder eine bestimmte Seite finden (navigational) moechte." },
      { q: "Warum ist Intent fuer E-Commerce wichtig?", a: "Wenn jemand 'beste kabellose Kopfhoerer' sucht, will er einen Vergleichsratgeber, keine Produktseite. Den falschen Seitentyp anzubieten bedeutet, dass Google Sie nicht rankt." },
      { q: "Wie genau ist die Intent-Klassifizierung?", a: "Wir analysieren SERP-Features, Top-rankende Seitentypen und Query-Modifikatoren. Die Genauigkeit ist am hoechsten bei kommerziellen und transaktionalen Anfragen im E-Commerce." },
      { q: "Kann ich mehrere Keywords gleichzeitig analysieren?", a: "Aktuell analysiert das Tool ein Keyword nach dem anderen. Fuer Massen-Intent-Klassifizierung kontaktieren Sie unser Team fuer ein individuelles Keyword-Mapping-Projekt." },
      { q: "Was ist der Unterschied zwischen kommerziellem und transaktionalem Intent?", a: "Kommerzieller Intent bedeutet, der Nutzer recherchiert vor dem Kauf. Transaktionaler Intent bedeutet Kaufbereitschaft. Der Seitentyp sollte sich unterscheiden: Vergleichsratgeber vs. Produktseite." },
    ],
    ctaBottom: "Brauchen Sie eine vollstaendige Keyword-Strategie?",
    ctaBottomDesc: "Unser Team ordnet tausende Keywords den richtigen Seiten, Intent-Typen und Content-Formaten zu.",
    ctaBottomButton: "Kostenloses Strategiegespraech",
  },
  fr: {
    badge: "Outil SEO gratuit",
    heading: "Outil de correspondance d'intention",
    subtitle: "Classifiez les mots-cles e-commerce par intention de recherche. Identifiez si une requete est informationnelle, commerciale ou transactionnelle pour l'associer au bon type de page.",
    label: "Saisissez votre mot-cle",
    placeholder: "ex. meilleures chaussures de course pied plat",
    analyze: "Analyser l'intention",
    resultsPlaceholder: "Saisissez un mot-cle ci-dessus pour voir la classification d'intention",
    statsUsers: "5 200+ mots-cles analyses",
    statsRating: "4,8 note moyenne",
    statsTime: "Resultats instantanes",
    features: [
      "Classifiez les mots-cles en informationnel, navigationnel, commercial ou transactionnel",
      "Obtenez des recommandations de type de page : page produit, categorie, article de blog ou guide",
      "Comprenez l'etape du parcours d'achat pour chaque mot-cle",
      "Optimisez votre strategie de contenu en associant l'intention aux modeles de pages",
    ],
    howItWorksTitle: "Comment ca marche",
    howItWorksSteps: [
      { title: "Saisissez votre mot-cle", desc: "Tapez n'importe quel mot-cle e-commerce ou requete de recherche a classifier." },
      { title: "Obtenez l'analyse d'intention", desc: "Notre moteur analyse les patterns de recherche et les fonctionnalites SERP pour determiner l'intention dominante." },
      { title: "Associez au type de page", desc: "Decouvrez quel type de page creer ou optimiser : produit, categorie, blog, landing page ou FAQ." },
    ],
    faqTitle: "Questions frequentes",
    faqs: [
      { q: "Qu'est-ce que l'intention de recherche ?", a: "L'intention de recherche est la raison derriere une requete. Elle indique si un utilisateur veut apprendre (informationnel), comparer (commercial), acheter (transactionnel) ou trouver un site specifique (navigationnel)." },
      { q: "Pourquoi l'intention est-elle importante pour l'e-commerce ?", a: "Si quelqu'un recherche 'meilleurs ecouteurs sans fil', il veut un guide comparatif, pas une page produit. Servir le mauvais type de page signifie que Google ne vous classera pas." },
      { q: "Quelle est la precision de la classification ?", a: "Nous analysons les fonctionnalites SERP, les types de pages les mieux classees et les modificateurs de requete. La precision est la plus elevee pour les requetes commerciales et transactionnelles." },
      { q: "Puis-je analyser plusieurs mots-cles a la fois ?", a: "Actuellement, l'outil analyse un mot-cle a la fois. Pour une classification en masse, contactez notre equipe pour un projet de mapping de mots-cles personnalise." },
      { q: "Quelle est la difference entre intention commerciale et transactionnelle ?", a: "L'intention commerciale signifie que l'utilisateur recherche avant d'acheter. L'intention transactionnelle signifie qu'il est pret a acheter. Le type de page doit differer : guide comparatif vs. page produit." },
    ],
    ctaBottom: "Besoin d'une strategie de mots-cles complete ?",
    ctaBottomDesc: "Notre equipe associe des milliers de mots-cles aux bonnes pages, types d'intention et formats de contenu.",
    ctaBottomButton: "Obtenir un appel strategie gratuit",
  },
  es: {
    badge: "Herramienta SEO gratuita",
    heading: "Herramienta de coincidencia de intencion",
    subtitle: "Clasifica palabras clave de ecommerce por intencion de busqueda. Identifica si una consulta es informativa, comercial o transaccional para asignarla al tipo de pagina correcto.",
    label: "Introduce tu palabra clave",
    placeholder: "ej. mejores zapatillas para pies planos",
    analyze: "Analizar intencion",
    resultsPlaceholder: "Introduce una palabra clave arriba para ver la clasificacion de intencion",
    statsUsers: "5.200+ palabras clave analizadas",
    statsRating: "4,8 valoracion media",
    statsTime: "Resultados instantaneos",
    features: [
      "Clasifica palabras clave como informativa, navegacional, comercial o transaccional",
      "Obtiene recomendaciones de tipo de pagina: pagina de producto, categoria, articulo o guia",
      "Comprende la fase del recorrido del comprador para cada palabra clave",
      "Optimiza la estrategia de contenido asignando intencion a plantillas de paginas",
    ],
    howItWorksTitle: "Como funciona",
    howItWorksSteps: [
      { title: "Introduce tu palabra clave", desc: "Escribe cualquier palabra clave de ecommerce o consulta de busqueda que quieras clasificar." },
      { title: "Obtiene el analisis de intencion", desc: "Nuestro motor analiza patrones de busqueda y funciones SERP para determinar la intencion dominante." },
      { title: "Asigna al tipo de pagina", desc: "Descubre que tipo de pagina crear u optimizar: producto, categoria, blog, landing page o FAQ." },
    ],
    faqTitle: "Preguntas frecuentes",
    faqs: [
      { q: "Que es la intencion de busqueda?", a: "La intencion de busqueda es la razon detras de una consulta. Indica si un usuario quiere aprender (informativa), comparar opciones (comercial), comprar (transaccional) o encontrar un sitio especifico (navegacional)." },
      { q: "Por que importa la intencion para el ecommerce?", a: "Si alguien busca 'mejores auriculares inalambricos', quiere una guia comparativa, no una pagina de producto. Servir el tipo de pagina incorrecto significa que Google no te posicionara." },
      { q: "Que tan precisa es la clasificacion?", a: "Analizamos funciones SERP, tipos de paginas mejor posicionadas y modificadores de consulta. La precision es mayor para consultas comerciales y transaccionales comunes en ecommerce." },
      { q: "Puedo analizar multiples palabras clave a la vez?", a: "Actualmente la herramienta analiza una palabra clave a la vez. Para clasificacion masiva de intencion, contacta a nuestro equipo para un proyecto de mapeo de palabras clave personalizado." },
      { q: "Cual es la diferencia entre intencion comercial y transaccional?", a: "La intencion comercial significa que el usuario investiga antes de comprar. La intencion transaccional significa que esta listo para comprar. El tipo de pagina debe diferir: guia comparativa vs. pagina de producto." },
    ],
    ctaBottom: "Necesitas una estrategia de palabras clave completa?",
    ctaBottomDesc: "Nuestro equipo mapea miles de palabras clave a las paginas correctas, tipos de intencion y formatos de contenido.",
    ctaBottomButton: "Obtener una llamada de estrategia gratis",
  },
  it: {
    badge: "Strumento SEO gratuito",
    heading: "Strumento di corrispondenza dell'intento",
    subtitle: "Classifica le keyword e-commerce per intento di ricerca. Scopri se una query e informativa, commerciale o transazionale per mapparla al tipo di pagina giusto.",
    label: "Inserisci la tua keyword",
    placeholder: "es. migliori scarpe da corsa per piedi piatti",
    analyze: "Analizza intento",
    resultsPlaceholder: "Inserisci una keyword sopra per vedere la classificazione dell'intento",
    statsUsers: "5.200+ keyword analizzate",
    statsRating: "4,8 valutazione media",
    statsTime: "Risultati istantanei",
    features: [
      "Classifica le keyword come informativa, navigazionale, commerciale o transazionale",
      "Ottieni raccomandazioni sul tipo di pagina: pagina prodotto, categoria, articolo blog o guida",
      "Comprendi la fase del percorso d'acquisto per ogni keyword",
      "Ottimizza la strategia di contenuto associando l'intento ai modelli di pagina",
    ],
    howItWorksTitle: "Come funziona",
    howItWorksSteps: [
      { title: "Inserisci la tua keyword", desc: "Digita qualsiasi keyword e-commerce o query di ricerca da classificare." },
      { title: "Ottieni l'analisi dell'intento", desc: "Il nostro motore analizza i pattern di ricerca e le funzionalita SERP per determinare l'intento dominante." },
      { title: "Mappa al tipo di pagina", desc: "Scopri quale tipo di pagina creare o ottimizzare: prodotto, categoria, blog, landing page o FAQ." },
    ],
    faqTitle: "Domande frequenti",
    faqs: [
      { q: "Cos'e l'intento di ricerca?", a: "L'intento di ricerca e il motivo dietro una query. Indica se un utente vuole imparare (informativo), confrontare opzioni (commerciale), acquistare (transazionale) o trovare un sito specifico (navigazionale)." },
      { q: "Perche l'intento e importante per l'e-commerce?", a: "Se qualcuno cerca 'migliori auricolari wireless', vuole una guida comparativa, non una pagina prodotto. Servire il tipo di pagina sbagliato significa che Google non ti posizionera." },
      { q: "Quanto e accurata la classificazione?", a: "Analizziamo le funzionalita SERP, i tipi di pagine meglio posizionate e i modificatori di query. L'accuratezza e massima per le query commerciali e transazionali comuni nell'e-commerce." },
      { q: "Posso analizzare piu keyword contemporaneamente?", a: "Attualmente lo strumento analizza una keyword alla volta. Per la classificazione in massa dell'intento, contatta il nostro team per un progetto personalizzato di mappatura keyword." },
      { q: "Qual e la differenza tra intento commerciale e transazionale?", a: "L'intento commerciale significa che l'utente ricerca prima di acquistare. L'intento transazionale significa che e pronto ad acquistare. Il tipo di pagina deve differire: guida comparativa vs. pagina prodotto." },
    ],
    ctaBottom: "Hai bisogno di una strategia keyword completa?",
    ctaBottomDesc: "Il nostro team mappa migliaia di keyword alle pagine giuste, tipi di intento e formati di contenuto.",
    ctaBottomButton: "Ottieni una chiamata strategica gratuita",
  },
  nl: {
    badge: "Gratis SEO-tool",
    heading: "Zoekintentie Tool",
    subtitle: "Classificeer e-commerce zoekwoorden op zoekintentie. Bepaal of een zoekopdracht informatief, commercieel of transactioneel is, zodat je het aan het juiste paginatype koppelt.",
    label: "Voer je zoekwoord in",
    placeholder: "bijv. beste hardloopschoenen voor platvoeten",
    analyze: "Intentie analyseren",
    resultsPlaceholder: "Voer hierboven een zoekwoord in om de intentieclassificatie te zien",
    statsUsers: "5.200+ zoekwoorden geanalyseerd",
    statsRating: "4,8 gemiddelde beoordeling",
    statsTime: "Directe resultaten",
    features: [
      "Classificeer zoekwoorden als informatief, navigationeel, commercieel of transactioneel",
      "Krijg paginatype-aanbevelingen: productpagina, categorie, blogartikel of gids",
      "Begrijp de fase van de koopreis voor elk zoekwoord",
      "Optimaliseer je contentstrategie door intentie te koppelen aan paginatemplates",
    ],
    howItWorksTitle: "Hoe het werkt",
    howItWorksSteps: [
      { title: "Voer je zoekwoord in", desc: "Typ een e-commerce zoekwoord of zoekopdracht die je wilt classificeren." },
      { title: "Ontvang intentie-analyse", desc: "Onze engine analyseert zoekpatronen en SERP-features om de dominante intentie te bepalen." },
      { title: "Koppel aan paginatype", desc: "Zie welk paginatype je moet maken of optimaliseren: product, categorie, blog, landingspagina of FAQ." },
    ],
    faqTitle: "Veelgestelde vragen",
    faqs: [
      { q: "Wat is zoekintentie?", a: "Zoekintentie is de reden achter een zoekopdracht. Het vertelt je of een gebruiker iets wil leren (informatief), opties wil vergelijken (commercieel), iets wil kopen (transactioneel) of een specifieke site wil vinden (navigationeel)." },
      { q: "Waarom is intentie belangrijk voor e-commerce?", a: "Als iemand zoekt op 'beste draadloze oordopjes', wil hij een vergelijkingsgids, geen productpagina. Het verkeerde paginatype aanbieden betekent dat Google je niet zal ranken." },
      { q: "Hoe nauwkeurig is de classificatie?", a: "We analyseren SERP-features, best-rankende paginatypes en query-modifiers. De nauwkeurigheid is het hoogst voor commerciele en transactionele zoekopdrachten die veel voorkomen in e-commerce." },
      { q: "Kan ik meerdere zoekwoorden tegelijk analyseren?", a: "Momenteel analyseert de tool een zoekwoord per keer. Voor bulk-intentieclassificatie kun je contact opnemen met ons team voor een aangepast zoekwoord-mapping project." },
      { q: "Wat is het verschil tussen commerciele en transactionele intentie?", a: "Commerciele intentie betekent dat de gebruiker onderzoek doet voor de aankoop. Transactionele intentie betekent dat hij klaar is om te kopen. Het paginatype moet verschillen: vergelijkingsgids vs. productpagina." },
    ],
    ctaBottom: "Een volledige zoekwoordstrategie nodig?",
    ctaBottomDesc: "Ons team koppelt duizenden zoekwoorden aan de juiste pagina's, intentietypes en contentformaten.",
    ctaBottomButton: "Gratis strategiegesprek aanvragen",
  },
};
