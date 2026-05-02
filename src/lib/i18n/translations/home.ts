import type { Locale } from "../config";

/* ─── Hero ─── */
export const heroT: Record<Locale, {
  eyebrow?: string;
  socialProof: string;
  heading: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stats: { value: string; label: string }[];
}> = {
  en: {
    eyebrow: "For fast-growing DTC brands doing €100K+/month",
    socialProof: "Backed by 19+ brand owners",
    heading: "Make organic growth your most profitable channel.",
    subtitle: "More than an SEO agency. We run end-to-end organic growth for DTC brands: technical SEO, content, authority, and PDP work that compounds traffic into revenue.",
    ctaPrimary: "Book 30 min with Fabian",
    ctaSecondary: "Learn More",
    stats: [
      { value: "19+", label: "Brands Scaled" },
      { value: "8+", label: "Figures Generated" },
      { value: "12+", label: "Countries" },
      { value: "100+", label: "#1 Rankings" },
    ],
  },
  de: {
    socialProof: "Unterstützt von über 19 Markeninhabern",
    heading: "Wir bauen und skalieren Marken mit E-Commerce SEO",
    subtitle: "Wir lösen SEO für E-Commerce-Marken mit einem gewinnorientierten Ansatz. Über 8-stellige Umsätze durch unsere Frameworks generiert.",
    ctaPrimary: "30-Min-Demo mit Fabian buchen",
    ctaSecondary: "Mehr erfahren",
    stats: [
      { value: "19+", label: "Marken skaliert" },
      { value: "8+", label: "Stellen generiert" },
      { value: "12+", label: "Länder" },
      { value: "100+", label: "#1 Rankings" },
    ],
  },
  fr: {
    socialProof: "Soutenu par plus de 19 propriétaires de marques",
    heading: "Nous construisons et développons les marques avec le SEO E-commerce",
    subtitle: "Résoudre le SEO pour les marques e-commerce avec une approche axée sur le profit. Plus de 8 chiffres générés grâce à nos frameworks.",
    ctaPrimary: "Réserver 30 min avec Fabian",
    ctaSecondary: "En savoir plus",
    stats: [
      { value: "19+", label: "Marques développées" },
      { value: "8+", label: "Chiffres générés" },
      { value: "12+", label: "Pays" },
      { value: "100+", label: "Positions #1" },
    ],
  },
  es: {
    socialProof: "Respaldado por más de 19 propietarios de marcas",
    heading: "Construimos y escalamos marcas con SEO E-commerce",
    subtitle: "Resolvemos el SEO para marcas e-commerce con un enfoque orientado al beneficio. Más de 8 cifras generadas a través de nuestros frameworks.",
    ctaPrimary: "Reservar 30 min con Fabian",
    ctaSecondary: "Saber más",
    stats: [
      { value: "19+", label: "Marcas escaladas" },
      { value: "8+", label: "Cifras generadas" },
      { value: "12+", label: "Países" },
      { value: "100+", label: "Rankings #1" },
    ],
  },
  it: {
    socialProof: "Supportato da oltre 19 titolari di brand",
    heading: "Costruiamo e scaliamo brand con la SEO E-commerce",
    subtitle: "Risolviamo la SEO per i brand e-commerce con un approccio orientato al profitto. Oltre 8 cifre generate attraverso i nostri framework.",
    ctaPrimary: "Prenota 30 min con Fabian",
    ctaSecondary: "Scopri di più",
    stats: [
      { value: "19+", label: "Brand scalati" },
      { value: "8+", label: "Cifre generate" },
      { value: "12+", label: "Paesi" },
      { value: "100+", label: "Posizioni #1" },
    ],
  },
  nl: {
    socialProof: "Ondersteund door meer dan 19 merkeigenaren",
    heading: "We bouwen en schalen merken met E-commerce SEO",
    subtitle: "SEO oplossen voor e-commercemerken met een winstgerichte aanpak. Meerdere 8-cijferige omzetten gegenereerd via onze frameworks.",
    ctaPrimary: "30 min met Fabian boeken",
    ctaSecondary: "Meer informatie",
    stats: [
      { value: "19+", label: "Merken geschaald" },
      { value: "8+", label: "Cijfers gegenereerd" },
      { value: "12+", label: "Landen" },
      { value: "100+", label: "#1 Rankings" },
    ],
  },
};

/* ─── AboutUs ─── */
export const aboutUsT: Record<Locale, {
  badge: string;
  heading: string;
  paragraph: string;
  paragraph2: string;
  cardText: string;
  cta: string;
}> = {
  en: {
    badge: "Trusted by over 30+ D2C brands",
    heading: "We decline 70% of projects. *Here\u2019s why.*",
    paragraph: "We create market leaders. We only take on projects we\u2019re 100% sure we can rank. And yes, we\u2019re very picky. But that\u2019s a good thing. We strongly believe SEO doesn\u2019t make sense in many markets.",
    paragraph2: "We are not just an SEO agency. We own and operate 7-figure ecommerce stores ourselves. When we optimize your site, we apply the same strategies we use on our own brands every single day.",
    cardText: "Here at EcomSEO, we run and scale brands without ads. We increase brand awareness and convert shoppers with trust.",
    cta: "Book 30 min with Fabian",
  },
  de: {
    badge: "Vertraut von 30+ D2C-Marken",
    heading: "Wir lehnen 70 % der Projekte ab. *Hier ist der Grund.*",
    paragraph: "Wir schaffen Marktführer. Wir übernehmen nur Projekte, bei denen wir zu 100 % sicher sind, dass wir ranken können. Ja, wir sind sehr wählerisch. Aber das ist gut so. Wir sind fest davon überzeugt, dass SEO in vielen Märkten keinen Sinn macht.",
    paragraph2: "Wir sind nicht nur eine SEO-Agentur. Wir betreiben selbst 7-stellige E-Commerce-Shops. Wenn wir Ihre Seite optimieren, wenden wir dieselben Strategien an, die wir jeden Tag bei unseren eigenen Marken einsetzen.",
    cardText: "Bei EcomSEO bauen und skalieren wir Marken ohne Werbung. Wir steigern die Markenbekanntheit und konvertieren Käufer durch Vertrauen.",
    cta: "15-Min-Gespräch buchen",
  },
  fr: {
    badge: "La confiance de 30+ marques D2C",
    heading: "Nous refusons 70 % des projets. *Voici pourquoi.*",
    paragraph: "Nous créons des leaders du marché. Nous n\u2019acceptons que les projets pour lesquels nous sommes sûrs à 100 % de pouvoir positionner. Oui, nous sommes très sélectifs. Mais c\u2019est une bonne chose. Nous croyons fermement que le SEO n\u2019a pas de sens dans de nombreux marchés.",
    paragraph2: "Nous ne sommes pas qu'une agence SEO. Nous possedons et gerons nos propres boutiques e-commerce a 7 chiffres. Quand nous optimisons votre site, nous appliquons les memes strategies que nous utilisons chaque jour sur nos propres marques.",
    cardText: "Chez EcomSEO, nous développons et faisons croître des marques sans publicité. Nous augmentons la notoriété et convertissons les acheteurs par la confiance.",
    cta: "Réserver un appel de 15 min",
  },
  es: {
    badge: "30+ marcas D2C confían en nosotros",
    heading: "Rechazamos el 70 % de los proyectos. *He aquí por qué.*",
    paragraph: "Creamos líderes del mercado. Solo aceptamos proyectos en los que estamos 100 % seguros de que podemos posicionar. Sí, somos muy selectivos. Pero eso es algo bueno. Creemos firmemente que el SEO no tiene sentido en muchos mercados.",
    paragraph2: "No somos solo una agencia SEO. Tenemos y operamos tiendas e-commerce de 7 cifras. Cuando optimizamos tu sitio, aplicamos las mismas estrategias que usamos en nuestras propias marcas cada dia.",
    cardText: "En EcomSEO, gestionamos y escalamos marcas sin anuncios. Aumentamos el reconocimiento de marca y convertimos compradores con confianza.",
    cta: "Reservar llamada de 15 min",
  },
  it: {
    badge: "30+ brand D2C si affidano a noi",
    heading: "Rifiutiamo il 70% dei progetti. *Ecco perché.*",
    paragraph: "Creiamo leader di mercato. Accettiamo solo progetti per i quali siamo sicuri al 100% di poter posizionare. Sì, siamo molto selettivi. Ma è una cosa positiva. Crediamo fermamente che la SEO non abbia senso in molti mercati.",
    paragraph2: "Non siamo solo un'agenzia SEO. Possediamo e gestiamo negozi e-commerce a 7 cifre. Quando ottimizziamo il tuo sito, applichiamo le stesse strategie che usiamo ogni giorno sui nostri brand.",
    cardText: "In EcomSEO, gestiamo e scaliamo brand senza pubblicità. Aumentiamo la brand awareness e convertiamo gli acquirenti con la fiducia.",
    cta: "Prenota una chiamata di 15 min",
  },
  nl: {
    badge: "Vertrouwd door 30+ D2C-merken",
    heading: "We weigeren 70% van de projecten. *Dit is waarom.*",
    paragraph: "We creëren marktleiders. We nemen alleen projecten aan waarvan we 100% zeker zijn dat we kunnen ranken. Ja, we zijn erg kieskeurig. Maar dat is goed. We geloven sterk dat SEO in veel markten geen zin heeft.",
    paragraph2: "We zijn niet zomaar een SEO-bureau. We bezitten en runnen zelf 7-cijferige e-commercewinkels. Als we jouw site optimaliseren, passen we dezelfde strategieen toe die we elke dag op onze eigen merken gebruiken.",
    cardText: "Bij EcomSEO runnen en schalen we merken zonder advertenties. We vergroten merkbekendheid en converteren shoppers met vertrouwen.",
    cta: "Boek een 15-min gesprek",
  },
};

/* ─── Results ─── */
export const resultsT: Record<Locale, {
  badge: string;
  heading: string;
  subtext: string;
  cta: string;
  cards: { title: string; badges: string[] }[];
}> = {
  en: {
    badge: "Results",
    heading: "Some of our recent *client wins.*",
    subtext: "All numbers from 12 months of work with us.",
    cta: "All Case Studies",
    cards: [
      { title: "$53M revenue, +118% YoY", badges: ["Home & Living Store", "Shopify Plus"] },
      { title: "\u20ac15M revenue, +430% YoY", badges: ["Norwegian Health & Supplements", "Shopify"] },
      { title: "\u20ac1.7M revenue, +87% YoY", badges: ["US Shapewear Brand", "Shopify"] },
      { title: "\u20ac597K revenue, +38% YoY", badges: ["Norwegian DTC Lifestyle", "Magento 2"] },
    ],
  },
  de: {
    badge: "Ergebnisse",
    heading: "E-Commerce-SEO-Ergebnisse, die für *sich sprechen.*",
    subtext: "Alle Zahlen aus 12 Monaten Arbeit mit uns.",
    cta: "Alle Referenzen",
    cards: [
      { title: "53 Mio. $ Umsatz, +118% YoY", badges: ["Home & Living Store", "Shopify Plus"] },
      { title: "15 Mio. \u20ac Umsatz, +430% YoY", badges: ["Norwegischer Health & Supplements", "Shopify"] },
      { title: "1,7 Mio. \u20ac Umsatz, +87% YoY", badges: ["US Shapewear-Marke", "Shopify"] },
      { title: "597 Tsd. \u20ac Umsatz, +38% YoY", badges: ["Norwegische DTC-Lifestyle", "Magento 2"] },
    ],
  },
  fr: {
    badge: "Résultats",
    heading: "Des résultats SEO e-commerce qui parlent *d\u2019eux-mêmes.*",
    subtext: "Tous les chiffres proviennent de 12 mois de travail avec nous.",
    cta: "Toutes les études de cas",
    cards: [
      { title: "53 M$ de revenu, +118% YoY", badges: ["Boutique Home & Living", "Shopify Plus"] },
      { title: "15 M\u20ac de revenu, +430% YoY", badges: ["Health & Supplements Store norv\u00e9gien", "Shopify"] },
      { title: "1,7 M\u20ac de revenu, +87% YoY", badges: ["Marque shapewear US", "Shopify"] },
      { title: "597 K\u20ac de revenu, +38% YoY", badges: ["Marque DTC lifestyle", "Magento 2"] },
    ],
  },
  es: {
    badge: "Resultados",
    heading: "Resultados de SEO E-commerce que hablan *por sí mismos.*",
    subtext: "Todos los numeros de 12 meses de trabajo con nosotros.",
    cta: "Todos los casos de éxito",
    cards: [
      { title: "$53M de ingresos, +118% YoY", badges: ["Tienda Home & Living", "Shopify Plus"] },
      { title: "\u20ac15M de ingresos, +430% YoY", badges: ["Tienda noruega de salud y suplementos", "Shopify"] },
      { title: "\u20ac1,7M de ingresos, +87% YoY", badges: ["Marca shapewear US", "Shopify"] },
      { title: "\u20ac597K de ingresos, +38% YoY", badges: ["Marca DTC lifestyle", "Magento 2"] },
    ],
  },
  it: {
    badge: "Risultati",
    heading: "Risultati SEO e-commerce che parlano *da soli.*",
    subtext: "Tutti i numeri da 12 mesi di lavoro con noi.",
    cta: "Tutti i casi studio",
    cards: [
      { title: "$53M di ricavi, +118% YoY", badges: ["Store Home & Living", "Shopify Plus"] },
      { title: "\u20ac15M di ricavi, +430% YoY", badges: ["Health & Supplements Store norvegese", "Shopify"] },
      { title: "\u20ac1,7M di ricavi, +87% YoY", badges: ["Brand shapewear US", "Shopify"] },
      { title: "\u20ac597K di ricavi, +38% YoY", badges: ["Brand DTC lifestyle", "Magento 2"] },
    ],
  },
  nl: {
    badge: "Resultaten",
    heading: "E-commerce SEO-resultaten die voor *zichzelf spreken.*",
    subtext: "Alle cijfers uit 12 maanden werken met ons.",
    cta: "Alle cases",
    cards: [
      { title: "$53M omzet, +118% YoY", badges: ["Home & Living winkel", "Shopify Plus"] },
      { title: "\u20ac15M omzet, +430% YoY", badges: ["Noorse Health & Supplements Store", "Shopify"] },
      { title: "\u20ac1,7M omzet, +87% YoY", badges: ["US Shapewear merk", "Shopify"] },
      { title: "\u20ac597K omzet, +38% YoY", badges: ["Noors DTC-lifestyle", "Magento 2"] },
    ],
  },
};

/* ─── Services ─── */
export const servicesT: Record<Locale, {
  badge: string;
  heading: string;
  subtext: string;
  cta: string;
  cards: { title: string; description: string }[];
}> = {
  en: {
    badge: "Services",
    heading: "How can we help *you*?",
    subtext: "Our team is focused on growing your brand exponentially through SEO. All of our offers are tailor made.",
    cta: "Book 30 min with Fabian",
    cards: [
      { title: "AI workflows for SEO", description: "The AI infrastructure we run on our own stores: internal link automation, content briefs at scale, competitor watchlists. You run it in-house or we run it for you." },
      { title: "Acquisitions & Scaling", description: "E-commerce is in our nature. SEO is our craft. Therefore we acquire and partner with brands. Because of this, we understand e-commerce like no other SEO agency." },
      { title: "Done-For-You SEO", description: "SEO isn\u2019t hard. If you know what you\u2019re doing." },
    ],
  },
  de: {
    badge: "Leistungen",
    heading: "Wie können wir *Ihnen* helfen?",
    subtext: "Unser Team konzentriert sich darauf, Ihre Marke durch SEO exponentiell zu skalieren. Alle unsere Angebote sind maßgeschneidert.",
    cta: "Kontakt aufnehmen",
    cards: [
      { title: "KI-Infrastrukturen", description: "Nutzen Sie unsere Expertise und werden Sie digitaler Pionier in der Welt der KI. Investieren Sie in Ihr Team, indem Sie mit EcomSEO zusammenarbeiten und unsere maßgeschneiderte KI-Infrastruktur nutzen." },
      { title: "Akquisitionen & Skalierung", description: "E-Commerce liegt in unserer Natur. SEO ist unser Handwerk. Deshalb akquirieren wir Marken und gehen Partnerschaften ein. Dadurch verstehen wir E-Commerce wie keine andere SEO-Agentur." },
      { title: "Done-For-You SEO", description: "SEO ist nicht schwer. Wenn man weiß, was man tut." },
    ],
  },
  fr: {
    badge: "Services",
    heading: "Comment pouvons-nous *vous* aider ?",
    subtext: "Notre équipe se concentre sur la croissance exponentielle de votre marque grâce au SEO. Toutes nos offres sont sur mesure.",
    cta: "Nous contacter",
    cards: [
      { title: "Infrastructures IA", description: "Tirez parti de notre expertise et devenez un pionnier numérique dans le monde de l\u2019IA. Investissez dans votre équipe en vous associant à EcomSEO et adoptez notre infrastructure IA sur mesure." },
      { title: "Acquisitions & croissance", description: "L\u2019e-commerce est dans notre nature. Le SEO est notre métier. C\u2019est pourquoi nous acquérons et nous associons à des marques. Grâce à cela, nous comprenons l\u2019e-commerce comme aucune autre agence SEO." },
      { title: "SEO clé en main", description: "Le SEO n\u2019est pas difficile. Quand on sait ce qu\u2019on fait." },
    ],
  },
  es: {
    badge: "Servicios",
    heading: "¿Cómo podemos *ayudarte*?",
    subtext: "Nuestro equipo se enfoca en hacer crecer tu marca exponencialmente a través del SEO. Todas nuestras ofertas son personalizadas.",
    cta: "Contáctenos",
    cards: [
      { title: "Infraestructuras de IA", description: "Aprovecha nuestra experiencia y conviértete en un pionero digital en el mundo de la IA. Invierte en tu equipo asociándote con EcomSEO y adopta nuestra infraestructura de IA personalizada." },
      { title: "Adquisiciones y escalado", description: "El e-commerce está en nuestra naturaleza. El SEO es nuestro oficio. Por eso adquirimos y nos asociamos con marcas. Gracias a esto, entendemos el e-commerce como ninguna otra agencia SEO." },
      { title: "SEO llave en mano", description: "El SEO no es difícil. Si sabes lo que haces." },
    ],
  },
  it: {
    badge: "Servizi",
    heading: "Come possiamo *aiutarti*?",
    subtext: "Il nostro team si concentra sulla crescita esponenziale del tuo brand attraverso la SEO. Tutte le nostre offerte sono su misura.",
    cta: "Contattaci",
    cards: [
      { title: "Infrastrutture IA", description: "Sfrutta la nostra esperienza e diventa un pioniere digitale nel mondo dell\u2019IA. Investi nel tuo team collaborando con EcomSEO e adotta la nostra infrastruttura IA personalizzata." },
      { title: "Acquisizioni e scalabilità", description: "L\u2019e-commerce è nella nostra natura. La SEO è il nostro mestiere. Per questo acquisiamo e collaboriamo con brand. Grazie a questo, comprendiamo l\u2019e-commerce come nessun\u2019altra agenzia SEO." },
      { title: "SEO chiavi in mano", description: "La SEO non è difficile. Se sai cosa stai facendo." },
    ],
  },
  nl: {
    badge: "Diensten",
    heading: "Hoe kunnen we *je* helpen?",
    subtext: "Ons team is gericht op het exponentieel laten groeien van je merk door SEO. Al onze aanbiedingen zijn op maat gemaakt.",
    cta: "Neem contact op",
    cards: [
      { title: "AI-infrastructuren", description: "Maak gebruik van onze expertise en word een digitale pionier in de wereld van AI. Investeer in je team door samen te werken met EcomSEO en neem onze op maat gemaakte AI-infrastructuur." },
      { title: "Acquisities & opschaling", description: "E-commerce zit in onze natuur. SEO is ons vak. Daarom verwerven we merken en gaan we partnerschappen aan. Hierdoor begrijpen we e-commerce als geen ander SEO-bureau." },
      { title: "Done-For-You SEO", description: "SEO is niet moeilijk. Als je weet wat je doet." },
    ],
  },
};

/* ─── Comparison ─── */
export const comparisonT: Record<Locale, {
  badge: string;
  heading: string;
  leftTitle: string;
  leftItems: string[];
  rightItems: string[];
}> = {
  en: {
    badge: "Why us",
    heading: "Why DTC brands *choose us.*",
    leftTitle: "Generic SEO Agency",
    leftItems: [
      "Junior account manager reading a script",
      "6–12 month lock-in contracts",
      "Reports about keyword rankings, not revenue",
      "Never ran an ecom store themselves",
      "Outsourced link building from off-topic blogs",
      "Same playbook for every industry",
    ],
    rightItems: [
      "10+ years experienced SEO specialist who focus on SEO for e-commerce ONLY",
      "Month-to-month. Cancel any time.",
      "Revenue-tied reporting. Organic orders, not vanity traffic.",
      "We own and operate 7-figure ecom stores ourselves.",
      "In-house editorial links from ecom-only publishers.",
      "Playbooks built for Shopify, Woo, and Magento.",
    ],
  },
  de: {
    badge: "Vergleich",
    heading: "Warum SEO für E-Commerce-Marken *Sinn macht*",
    leftTitle: "Nur bezahlte Werbung",
    leftItems: ["Abhängig von 1 Vertriebskanal", "Kein Omnichannel", "Neugierige Kunden verlieren", "Stammkunden einschränken", "Weniger Kunden konvertieren"],
    rightItems: ["Langfristige organische Umsätze", "Omnichannel-Ansatz", "Exit-Wert steigern", "Markenvertrauen und Autorität aufbauen", "Marktführer werden"],
  },
  fr: {
    badge: "Comparaison",
    heading: "Pourquoi le SEO pour les marques e-commerce *a du sens*",
    leftTitle: "Publicité payante seule",
    leftItems: ["Dépendant d\u2019un seul canal de vente", "Pas d\u2019omnicanal", "Perdre des clients curieux", "Limiter les clients récurrents", "Convertir moins de clients"],
    rightItems: ["Ventes organiques continues à long terme", "Approche omnicanale", "Augmenter la valeur de sortie", "Construire la confiance et l\u2019autorité de marque", "Devenir leader du marché"],
  },
  es: {
    badge: "Comparación",
    heading: "Por qué el SEO para marcas E-commerce *tiene sentido*",
    leftTitle: "Solo anuncios pagados",
    leftItems: ["Dependiente de 1 canal de venta", "Sin omnicanal", "Perder clientes curiosos", "Limitar clientes recurrentes", "Convertir menos clientes"],
    rightItems: ["Ventas orgánicas continuas a largo plazo", "Enfoque omnicanal", "Aumentar el valor de salida", "Construir confianza y autoridad de marca", "Convertirse en líder del mercado"],
  },
  it: {
    badge: "Confronto",
    heading: "Perché la SEO per i brand e-commerce *ha senso*",
    leftTitle: "Solo pubblicità a pagamento",
    leftItems: ["Dipendente da 1 canale di vendita", "Nessun omnicanale", "Perdere clienti curiosi", "Limitare i clienti di ritorno", "Convertire meno clienti"],
    rightItems: ["Vendite organiche continue a lungo termine", "Approccio omnicanale", "Aumentare il valore di uscita", "Costruire fiducia e autorità del brand", "Diventare leader di mercato"],
  },
  nl: {
    badge: "Vergelijking",
    heading: "Waarom SEO voor e-commercemerken *logisch is*",
    leftTitle: "Alleen betaalde advertenties",
    leftItems: ["Afhankelijk van 1 verkoopkanaal", "Geen omnichannel", "Nieuwsgierige klanten verliezen", "Terugkerende klanten beperken", "Minder klanten converteren"],
    rightItems: ["Langdurige organische verkoop", "Omnichannel-aanpak", "Exit-waarde verhogen", "Merkvertrouwen en autoriteit opbouwen", "Marktleider worden"],
  },
};

/* ─── Process ─── */
export const processT: Record<Locale, {
  badge: string;
  heading: string;
  subtext: string;
  cta: string;
  steps: { number: string; title: string; description: string }[];
}> = {
  en: {
    badge: "Process",
    heading: "Most agencies absolutely Suck. *We know.*",
    subtext: "Pretending, no focus, no proven strategy. The truth is... that\u2019s how you start. If you work with experienced agency owners, you\u2019ll experience:",
    cta: "Book 30 min with Fabian",
    steps: [
      { number: "01", title: "100% Transparancy", description: "Automated updates, log in at any time into our dashboards. Dedicated Slack and WhatsApp channels. You will always know exactly what we are working on, what has been done, and what is coming next." },
      { number: "02", title: "Proven Process", description: "We have ranked health stores, fashion brands, lighting shops, and jewelry stores across 12+ countries. We know what works because we have done it before, with real data to prove it." },
      { number: "03", title: "Profit-Focused", description: "Revenue is nice. Profit is nicer. We focus on high-ROI tasks and cut everything that does not move the needle. No fluff reports, no vanity metrics." },
    ],
  },
  de: {
    badge: "Prozess",
    heading: "Die meisten Agenturen sind einfach schlecht. *Wir wissen das.*",
    subtext: "Vortäuschen, kein Fokus, keine bewährte Strategie. Die Wahrheit ist... so fängt man an. Wenn Sie mit erfahrenen Agenturinhabern arbeiten, erleben Sie:",
    cta: "Gespräch buchen",
    steps: [
      { number: "01", title: "100 % Transparenz", description: "Automatisierte Updates, jederzeit in unsere Dashboards einloggen. Dedizierte Slack- und WhatsApp-Kanäle. Sie wissen immer genau, woran wir arbeiten, was erledigt ist und was als Nächstes kommt." },
      { number: "02", title: "Bewährter Prozess", description: "Wir haben Health-Shops, Modemarken, Beleuchtungsgeschäfte und Juweliere in über 12 Ländern gerankt. Wir wissen, was funktioniert, weil wir es schon gemacht haben. Mit echten Daten als Beweis." },
      { number: "03", title: "Gewinnorientiert", description: "Umsatz ist schön. Gewinn ist schöner. Wir fokussieren uns auf Aufgaben mit hohem ROI und streichen alles, was nichts bewegt. Keine Schönfärberei, keine Eitelkeitsmetriken." },
    ],
  },
  fr: {
    badge: "Processus",
    heading: "La plupart des agences sont nulles. *On le sait.*",
    subtext: "Faire semblant, pas de focus, pas de stratégie éprouvée. La vérité c\u2019est... c\u2019est comme ça qu\u2019on commence. Si vous travaillez avec des propriétaires d\u2019agence expérimentés, vous vivrez :",
    cta: "Réserver un appel",
    steps: [
      { number: "01", title: "100 % de transparence", description: "Mises à jour automatisées, connectez-vous à tout moment à nos tableaux de bord. Canaux Slack et WhatsApp dédiés. Vous saurez toujours exactement sur quoi nous travaillons, ce qui a été fait et ce qui arrive ensuite." },
      { number: "02", title: "Processus éprouvé", description: "Nous avons positionné des boutiques santé, des marques de mode, des magasins d'éclairage et des bijouteries dans plus de 12 pays. Nous savons ce qui fonctionne parce que nous l'avons déjà fait, avec des données réelles pour le prouver." },
      { number: "03", title: "Axé sur le profit", description: "Le chiffre d'affaires c'est bien. Le profit c'est mieux. Nous nous concentrons sur les tâches à fort ROI et supprimons tout ce qui ne fait pas avancer les choses. Pas de rapports creux, pas de métriques de vanité." },
    ],
  },
  es: {
    badge: "Proceso",
    heading: "La mayoría de las agencias son pésimas. *Lo sabemos.*",
    subtext: "Fingir, sin enfoque, sin estrategia probada. La verdad es... así es como se empieza. Si trabajas con propietarios de agencias experimentados, experimentarás:",
    cta: "Reservar llamada",
    steps: [
      { number: "01", title: "100 % de transparencia", description: "Actualizaciones automatizadas, accede en cualquier momento a nuestros dashboards. Canales dedicados de Slack y WhatsApp. Siempre sabrás exactamente en qué estamos trabajando, qué se ha hecho y qué viene después." },
      { number: "02", title: "Proceso probado", description: "Hemos posicionado tiendas de salud, marcas de moda, tiendas de iluminación y joyerías en más de 12 países. Sabemos lo que funciona porque lo hemos hecho antes, con datos reales para demostrarlo." },
      { number: "03", title: "Enfocados en el beneficio", description: "Los ingresos están bien. El beneficio está mejor. Nos enfocamos en tareas de alto ROI y eliminamos todo lo que no mueve la aguja. Sin informes de relleno, sin métricas de vanidad." },
    ],
  },
  it: {
    badge: "Processo",
    heading: "La maggior parte delle agenzie fa schifo. *Lo sappiamo.*",
    subtext: "Fingere, nessun focus, nessuna strategia comprovata. La verità è... così si inizia. Se lavorate con proprietari di agenzie esperti, sperimenterete:",
    cta: "Prenota una chiamata",
    steps: [
      { number: "01", title: "100% di trasparenza", description: "Aggiornamenti automatizzati, accedi in qualsiasi momento alle nostre dashboard. Canali Slack e WhatsApp dedicati. Saprai sempre esattamente su cosa stiamo lavorando, cosa è stato fatto e cosa arriva dopo." },
      { number: "02", title: "Processo collaudato", description: "Abbiamo posizionato negozi di salute, brand di moda, negozi di illuminazione e gioiellerie in oltre 12 paesi. Sappiamo cosa funziona perché lo abbiamo già fatto, con dati reali a dimostrarlo." },
      { number: "03", title: "Orientato al profitto", description: "Il fatturato è buono. Il profitto è meglio. Ci concentriamo su attività ad alto ROI e tagliamo tutto ciò che non fa la differenza. Niente report gonfiati, niente metriche di vanità." },
    ],
  },
  nl: {
    badge: "Proces",
    heading: "De meeste bureaus zijn gewoon slecht. *Dat weten we.*",
    subtext: "Doen alsof, geen focus, geen bewezen strategie. De waarheid is... zo begin je. Als je werkt met ervaren bureau-eigenaren, ervaar je:",
    cta: "Gesprek boeken",
    steps: [
      { number: "01", title: "100% transparantie", description: "Geautomatiseerde updates, log op elk moment in op onze dashboards. Dedicated Slack- en WhatsApp-kanalen. Je weet altijd precies waar we aan werken, wat er gedaan is en wat er komt." },
      { number: "02", title: "Bewezen proces", description: "We hebben health-shops, modemerken, verlichtingswinkels en juweliers in meer dan 12 landen gerankt. We weten wat werkt omdat we het eerder hebben gedaan, met echte data om het te bewijzen." },
      { number: "03", title: "Winstgericht", description: "Omzet is fijn. Winst is fijner. We focussen op taken met hoge ROI en schrappen alles wat de naald niet beweegt. Geen opgeblazen rapporten, geen ijdelheidsmetrics." },
    ],
  },
};

/* ─── Tools & Software ─── */
export const toolsT: Record<Locale, {
  badge: string;
  heading: string;
  subtext: string;
}> = {
  en: { badge: "Tools & Software", heading: "Enterprise-grade *SEO tools.*", subtext: "We use the best tools in the industry to analyze, strategize, and execute. No shortcuts, no guesswork." },
  de: { badge: "Tools & Software", heading: "SEO-Tools auf *Enterprise-Niveau.*", subtext: "Wir verwenden die besten Tools der Branche, um zu analysieren, Strategien zu entwickeln und umzusetzen. Keine Abkürzungen, kein Raten." },
  fr: { badge: "Outils & logiciels", heading: "Outils SEO de niveau *enterprise.*", subtext: "Nous utilisons les meilleurs outils du secteur pour analyser, élaborer des stratégies et exécuter. Pas de raccourcis, pas de suppositions." },
  es: { badge: "Herramientas y software", heading: "Herramientas SEO de nivel *empresarial.*", subtext: "Usamos las mejores herramientas de la industria para analizar, estrategizar y ejecutar. Sin atajos, sin adivinanzas." },
  it: { badge: "Strumenti e software", heading: "Strumenti SEO di livello *enterprise.*", subtext: "Utilizziamo i migliori strumenti del settore per analizzare, pianificare ed eseguire. Nessuna scorciatoia, nessuna supposizione." },
  nl: { badge: "Tools & software", heading: "SEO-tools op *enterprise-niveau.*", subtext: "We gebruiken de beste tools in de branche om te analyseren, strategieën te ontwikkelen en uit te voeren. Geen shortcuts, geen giswerk." },
};

/* ─── DataFeeds / SEO Impact ─── */
export const dataFeedsT: Record<Locale, {
  badge: string;
  heading: string;
  subtext: string;
}> = {
  en: { badge: "SEO Impact", heading: "Want to be a market leader? *Do SEO.*", subtext: "Go back in time... When you were looking for your first competitors... where did you look? Google." },
  de: { badge: "SEO-Wirkung", heading: "Marktführer werden? *Mach SEO.*", subtext: "Gehen Sie in der Zeit zurück... Als Sie nach Ihren ersten Wettbewerbern gesucht haben... wo haben Sie geschaut? Google." },
  fr: { badge: "Impact SEO", heading: "Vous voulez être leader du marché ? *Faites du SEO.*", subtext: "Retournez dans le temps... Quand vous cherchiez vos premiers concurrents... où avez-vous regardé ? Google." },
  es: { badge: "Impacto SEO", heading: "¿Quieres ser líder del mercado? *Haz SEO.*", subtext: "Retrocede en el tiempo... Cuando buscabas a tus primeros competidores... ¿dónde buscaste? Google." },
  it: { badge: "Impatto SEO", heading: "Vuoi essere leader di mercato? *Fai SEO.*", subtext: "Torna indietro nel tempo... Quando cercavi i tuoi primi competitor... dove hai guardato? Google." },
  nl: { badge: "SEO-impact", heading: "Wil je marktleider zijn? *Doe SEO.*", subtext: "Ga terug in de tijd... Toen je op zoek was naar je eerste concurrenten... waar keek je? Google." },
};

/* ─── CTA ─── */
export const ctaT: Record<Locale, {
  heading: string;
  subtext: string;
  cta: string;
}> = {
  en: { heading: "Work Together With SEO Experts *who understand ecommerce*", subtext: "World\u2019s first Ecom-founded SEO agency", cta: "Book 30 min with Fabian" },
  de: { heading: "Arbeiten Sie mit SEO-Experten zusammen, *die E-Commerce verstehen*", subtext: "Die weltweit erste von E-Com-Gründern aufgebaute SEO-Agentur", cta: "Kontakt aufnehmen" },
  fr: { heading: "Travaillez avec des experts SEO *qui comprennent l\u2019e-commerce*", subtext: "La première agence SEO fondée par des e-commerçants", cta: "Nous contacter" },
  es: { heading: "Trabaja con expertos SEO *que entienden el e-commerce*", subtext: "La primera agencia SEO del mundo fundada por e-commerce", cta: "Contáctenos" },
  it: { heading: "Lavora con esperti SEO *che capiscono l\u2019e-commerce*", subtext: "La prima agenzia SEO al mondo fondata dall\u2019e-commerce", cta: "Contattaci" },
  nl: { heading: "Werk samen met SEO-experts *die e-commerce begrijpen*", subtext: "Het eerste door e-commerce opgerichte SEO-bureau ter wereld", cta: "Neem contact op" },
};

/* ─── Team ─── */
export const teamT: Record<Locale, {
  badge: string;
  heading: string;
  description: string;
  teamPageLink: string;
  cta: string;
  members: { name: string; role: string }[];
}> = {
  en: {
    badge: "Our natural habitat",
    heading: "We speak the same *language.*",
    description: "We breathe and talk e-commerce (and Dutch). Our founders have built, scaled, and sold their own online stores. Every team member has hands-on ecommerce experience. That is specialisation you can not fake.",
    teamPageLink: "Meet the full team",
    cta: "Get a Free Audit from Fabian",
    members: [
      { name: "Fabian van Til", role: "CEO at EcomSEO, Brand Owner" },
      { name: "Gjorgi Jovev", role: "Outreach & SEO Expert" },
      { name: "Martinijan Trajkovski", role: "SEO Strategies & Head of Link-Building" },
    ],
  },
  de: {
    badge: "Unser natürliches Habitat",
    heading: "Wir sprechen dieselbe *Sprache.*",
    description: "Wir leben und atmen E-Commerce (und Niederländisch). Unsere Gründer haben ihre eigenen Online-Shops aufgebaut, skaliert und verkauft. Jedes Teammitglied hat praktische E-Commerce-Erfahrung. Das ist Spezialisierung, die man nicht vortäuschen kann.",
    teamPageLink: "Das gesamte Team kennenlernen",
    cta: "Mit Fabian in Kontakt treten",
    members: [
      { name: "Fabian van Til", role: "CEO bei EcomSEO, Markeninhaber" },
      { name: "Gjorgi Jovev", role: "Outreach- & SEO-Experte" },
      { name: "Martinijan Trajkovski", role: "SEO-Strategien & Leiter Linkaufbau" },
    ],
  },
  fr: {
    badge: "Notre habitat naturel",
    heading: "Nous parlons le même *langage.*",
    description: "Nous respirons et parlons e-commerce (et néerlandais). Nos fondateurs ont créé, développé et vendu leurs propres boutiques en ligne. Chaque membre de l'équipe a une expérience e-commerce terrain. C'est une spécialisation qu'on ne peut pas simuler.",
    teamPageLink: "Rencontrer toute l'équipe",
    cta: "Contacter Fabian",
    members: [
      { name: "Fabian van Til", role: "CEO d\u2019EcomSEO, Propriétaire de marque" },
      { name: "Gjorgi Jovev", role: "Expert Outreach & SEO" },
      { name: "Martinijan Trajkovski", role: "Stratégies SEO & Responsable Link-Building" },
    ],
  },
  es: {
    badge: "Nuestro hábitat natural",
    heading: "Hablamos el mismo *idioma.*",
    description: "Respiramos y hablamos e-commerce (y holandés). Nuestros fundadores han creado, escalado y vendido sus propias tiendas online. Cada miembro del equipo tiene experiencia practica en e-commerce. Esa es una especializacion que no se puede fingir.",
    teamPageLink: "Conocer al equipo completo",
    cta: "Contactar con Fabian",
    members: [
      { name: "Fabian van Til", role: "CEO de EcomSEO, Propietario de marca" },
      { name: "Gjorgi Jovev", role: "Experto en Outreach y SEO" },
      { name: "Martinijan Trajkovski", role: "Estrategias SEO y Jefe de Link-Building" },
    ],
  },
  it: {
    badge: "Il nostro habitat naturale",
    heading: "Parliamo la stessa *lingua.*",
    description: "Respiriamo e parliamo di e-commerce (e olandese). I nostri fondatori hanno costruito, scalato e venduto i propri negozi online. Ogni membro del team ha esperienza pratica nell'e-commerce. Questa è una specializzazione che non si può fingere.",
    teamPageLink: "Conosci tutto il team",
    cta: "Contatta Fabian",
    members: [
      { name: "Fabian van Til", role: "CEO di EcomSEO, Brand Owner" },
      { name: "Gjorgi Jovev", role: "Esperto di Outreach e SEO" },
      { name: "Martinijan Trajkovski", role: "Strategie SEO e Responsabile Link-Building" },
    ],
  },
  nl: {
    badge: "Ons natuurlijke habitat",
    heading: "We spreken dezelfde *taal.*",
    description: "We ademen en praten e-commerce (en Nederlands). Onze oprichters hebben hun eigen webshops opgebouwd, geschaald en verkocht. Elk teamlid heeft hands-on e-commerce ervaring. Dat is specialisatie die je niet kunt faken.",
    teamPageLink: "Ontmoet het volledige team",
    cta: "Neem contact op met Fabian",
    members: [
      { name: "Fabian van Til", role: "CEO bij EcomSEO, Merkeigenaar" },
      { name: "Gjorgi Jovev", role: "Outreach & SEO Expert" },
      { name: "Martinijan Trajkovski", role: "SEO-strategieën & Hoofd Linkbuilding" },
    ],
  },
};

/* ─── Homepage FAQ ─── */
export const homeFaqT: Record<Locale, {
  badge: string;
  heading: string;
  cta: string;
  items: { question: string; answer: string }[];
}> = {
  en: {
    badge: "Frequently asked questions",
    heading: "Questions? *We got you.*",
    cta: "Check all FAQ",
    items: [
      { question: "What exactly does EcomSEO do?", answer: "We specialize in SEO for e-commerce brands. From technical SEO and product page optimization to link building and content strategy - everything we do is focused on driving organic revenue for online stores." },
      { question: "How are you different from a \u201Cnormal\u201D SEO agency?", answer: "We only work with e-commerce brands. We don\u2019t do local SEO, B2B SEO, or anything else. This means our entire process, team, and tooling is built specifically for product-based businesses with hundreds or thousands of SKUs." },
      { question: "Who is EcomSEO a good fit for?", answer: "We work best with e-commerce brands doing \u20AC500K+ in annual revenue that are serious about organic growth. If you\u2019re just starting out, SEO might not be the best investment yet - and we\u2019ll be honest about that." },
      { question: "How long does it take to see results?", answer: "SEO is a long-term play. Most of our clients start seeing meaningful improvements within 3-6 months. However, this depends on your industry, competition, and the current state of your website." },
      { question: "What kind of results can we realistically expect?", answer: "This depends on many factors - your niche, competition, current SEO health, and budget. We set realistic expectations from day one and provide monthly reporting so you can track progress. Check our case studies for examples." },
      { question: "How transparent is your reporting?", answer: "100% transparent. You get access to live dashboards, dedicated Slack/WhatsApp channels, and monthly strategy calls. We believe in full visibility - no black-box SEO." },
    ],
  },
  de: {
    badge: "Häufig gestellte Fragen",
    heading: "Fragen? *Wir helfen.*",
    cta: "Alle FAQ ansehen",
    items: [
      { question: "Was genau macht EcomSEO?", answer: "Wir sind auf SEO für E-Commerce-Marken spezialisiert. Von technischem SEO und Produktseitenoptimierung bis hin zu Linkaufbau und Content-Strategie - alles, was wir tun, ist darauf ausgerichtet, organischen Umsatz für Online-Shops zu generieren." },
      { question: "Wie unterscheidet ihr euch von einer \u201Enormalen\u201C SEO-Agentur?", answer: "Wir arbeiten ausschließlich mit E-Commerce-Marken. Wir machen kein lokales SEO, kein B2B-SEO oder irgendetwas anderes. Das bedeutet, dass unser gesamter Prozess, unser Team und unsere Tools speziell für produktbasierte Unternehmen mit Hunderten oder Tausenden von SKUs entwickelt wurden." },
      { question: "Für wen ist EcomSEO die richtige Wahl?", answer: "Wir arbeiten am besten mit E-Commerce-Marken zusammen, die über 500.000 \u20AC Jahresumsatz erzielen und es ernst meinen mit organischem Wachstum. Wenn Sie gerade erst anfangen, ist SEO möglicherweise noch nicht die beste Investition - und wir sind ehrlich darüber." },
      { question: "Wie lange dauert es, bis man Ergebnisse sieht?", answer: "SEO ist ein langfristiges Spiel. Die meisten unserer Kunden sehen bedeutsame Verbesserungen innerhalb von 3-6 Monaten. Dies hängt jedoch von Ihrer Branche, dem Wettbewerb und dem aktuellen Zustand Ihrer Website ab." },
      { question: "Welche Art von Ergebnissen können wir realistisch erwarten?", answer: "Das hängt von vielen Faktoren ab - Ihrer Nische, dem Wettbewerb, dem aktuellen SEO-Zustand und dem Budget. Wir setzen von Tag eins an realistische Erwartungen und liefern monatliche Berichte, damit Sie den Fortschritt verfolgen können. Sehen Sie sich unsere Referenzen für Beispiele an." },
      { question: "Wie transparent ist eure Berichterstattung?", answer: "100 % transparent. Sie erhalten Zugang zu Live-Dashboards, dedizierten Slack/WhatsApp-Kanälen und monatlichen Strategiegesprächen. Wir glauben an volle Transparenz - kein Black-Box-SEO." },
    ],
  },
  fr: {
    badge: "Questions fréquentes",
    heading: "Des questions ? *On a les réponses.*",
    cta: "Voir toutes les FAQ",
    items: [
      { question: "Que fait exactement EcomSEO ?", answer: "Nous sommes spécialisés dans le SEO pour les marques e-commerce. Du SEO technique à l\u2019optimisation des pages produits, en passant par le link building et la stratégie de contenu - tout ce que nous faisons est axé sur la génération de revenus organiques pour les boutiques en ligne." },
      { question: "En quoi êtes-vous différents d\u2019une agence SEO « classique » ?", answer: "Nous travaillons uniquement avec des marques e-commerce. Nous ne faisons pas de SEO local, de SEO B2B, ni rien d\u2019autre. Cela signifie que tout notre processus, notre équipe et nos outils sont conçus spécifiquement pour les entreprises basées sur des produits avec des centaines ou des milliers de SKUs." },
      { question: "Pour qui EcomSEO est-il adapté ?", answer: "Nous travaillons mieux avec des marques e-commerce réalisant plus de 500 000 \u20AC de chiffre d\u2019affaires annuel et sérieuses dans leur croissance organique. Si vous débutez, le SEO n\u2019est peut-être pas encore le meilleur investissement - et nous serons honnêtes à ce sujet." },
      { question: "Combien de temps faut-il pour voir des résultats ?", answer: "Le SEO est un jeu à long terme. La plupart de nos clients commencent à voir des améliorations significatives dans les 3 à 6 mois. Cependant, cela dépend de votre secteur, de la concurrence et de l\u2019état actuel de votre site web." },
      { question: "Quel type de résultats pouvons-nous attendre de manière réaliste ?", answer: "Cela dépend de nombreux facteurs - votre niche, la concurrence, l\u2019état actuel de votre SEO et votre budget. Nous fixons des attentes réalistes dès le premier jour et fournissons des rapports mensuels pour que vous puissiez suivre les progrès. Consultez nos études de cas pour des exemples." },
      { question: "Quelle est la transparence de vos rapports ?", answer: "100 % transparents. Vous avez accès à des tableaux de bord en direct, des canaux Slack/WhatsApp dédiés et des appels stratégiques mensuels. Nous croyons en une visibilité totale - pas de SEO boîte noire." },
    ],
  },
  es: {
    badge: "Preguntas frecuentes",
    heading: "¿Preguntas? *Te ayudamos.*",
    cta: "Ver todas las FAQ",
    items: [
      { question: "¿Qué hace exactamente EcomSEO?", answer: "Nos especializamos en SEO para marcas de e-commerce. Desde SEO técnico y optimización de páginas de producto hasta link building y estrategia de contenido - todo lo que hacemos está enfocado en generar ingresos orgánicos para tiendas online." },
      { question: "¿En qué se diferencian de una agencia SEO \"normal\"?", answer: "Solo trabajamos con marcas de e-commerce. No hacemos SEO local, SEO B2B ni nada más. Esto significa que todo nuestro proceso, equipo y herramientas están diseñados específicamente para negocios basados en productos con cientos o miles de SKUs." },
      { question: "¿Para quién es EcomSEO una buena opción?", answer: "Trabajamos mejor con marcas de e-commerce que facturan más de 500.000 \u20AC anuales y que están comprometidas con el crecimiento orgánico. Si estás empezando, el SEO podría no ser la mejor inversión todavía - y seremos honestos al respecto." },
      { question: "¿Cuánto tiempo se tarda en ver resultados?", answer: "El SEO es una estrategia a largo plazo. La mayoría de nuestros clientes empiezan a ver mejoras significativas en 3-6 meses. Sin embargo, esto depende de tu industria, la competencia y el estado actual de tu sitio web." },
      { question: "¿Qué tipo de resultados podemos esperar de forma realista?", answer: "Esto depende de muchos factores - tu nicho, la competencia, la salud actual de tu SEO y el presupuesto. Establecemos expectativas realistas desde el día uno y proporcionamos informes mensuales para que puedas seguir el progreso. Consulta nuestros casos de éxito para ver ejemplos." },
      { question: "¿Qué tan transparentes son sus informes?", answer: "100 % transparentes. Tienes acceso a dashboards en vivo, canales dedicados de Slack/WhatsApp y llamadas estratégicas mensuales. Creemos en la visibilidad total - sin SEO de caja negra." },
    ],
  },
  it: {
    badge: "Domande frequenti",
    heading: "Domande? *Ci pensiamo noi.*",
    cta: "Vedi tutte le FAQ",
    items: [
      { question: "Cosa fa esattamente EcomSEO?", answer: "Siamo specializzati in SEO per brand e-commerce. Dalla SEO tecnica e ottimizzazione delle pagine prodotto al link building e strategia dei contenuti - tutto ciò che facciamo è incentrato sulla generazione di ricavi organici per gli store online." },
      { question: "In cosa siete diversi da un\u2019agenzia SEO \u201Cnormale\u201D?", answer: "Lavoriamo solo con brand e-commerce. Non facciamo SEO locale, SEO B2B o altro. Ciò significa che tutto il nostro processo, team e strumenti sono costruiti specificamente per aziende basate su prodotti con centinaia o migliaia di SKU." },
      { question: "Per chi è adatto EcomSEO?", answer: "Lavoriamo al meglio con brand e-commerce che fatturano oltre 500.000 \u20AC all\u2019anno e che sono seri riguardo alla crescita organica. Se stai appena iniziando, la SEO potrebbe non essere il miglior investimento - e saremo onesti al riguardo." },
      { question: "Quanto tempo ci vuole per vedere i risultati?", answer: "La SEO è un gioco a lungo termine. La maggior parte dei nostri clienti inizia a vedere miglioramenti significativi entro 3-6 mesi. Tuttavia, questo dipende dal vostro settore, dalla concorrenza e dallo stato attuale del vostro sito web." },
      { question: "Che tipo di risultati possiamo aspettarci realisticamente?", answer: "Dipende da molti fattori - la vostra nicchia, la concorrenza, lo stato attuale della vostra SEO e il budget. Impostiamo aspettative realistiche dal primo giorno e forniamo report mensili per monitorare i progressi. Consultate i nostri casi studio per esempi." },
      { question: "Quanto sono trasparenti i vostri report?", answer: "100% trasparenti. Avete accesso a dashboard in tempo reale, canali Slack/WhatsApp dedicati e chiamate strategiche mensili. Crediamo nella piena visibilità - nessuna SEO scatola nera." },
    ],
  },
  nl: {
    badge: "Veelgestelde vragen",
    heading: "Vragen? *We helpen je.*",
    cta: "Bekijk alle FAQ",
    items: [
      { question: "Wat doet EcomSEO precies?", answer: "We zijn gespecialiseerd in SEO voor e-commercemerken. Van technische SEO en productpagina-optimalisatie tot linkbuilding en contentstrategie - alles wat we doen is gericht op het genereren van organische omzet voor webshops." },
      { question: "Hoe zijn jullie anders dan een \"normaal\" SEO-bureau?", answer: "We werken alleen met e-commercemerken. We doen geen lokale SEO, B2B SEO of iets anders. Dit betekent dat ons hele proces, team en tooling specifiek is gebouwd voor productgebaseerde bedrijven met honderden of duizenden SKU\u2019s." },
      { question: "Voor wie is EcomSEO geschikt?", answer: "We werken het beste met e-commercemerken die meer dan \u20AC500.000 per jaar omzetten en serieus zijn over organische groei. Als je net begint, is SEO misschien nog niet de beste investering - en daar zijn we eerlijk over." },
      { question: "Hoe lang duurt het voordat je resultaten ziet?", answer: "SEO is een langetermijnstrategie. De meeste van onze klanten beginnen binnen 3-6 maanden betekenisvolle verbeteringen te zien. Dit hangt echter af van je branche, concurrentie en de huidige staat van je website." },
      { question: "Welke resultaten kunnen we realistisch verwachten?", answer: "Dit hangt af van veel factoren - je niche, concurrentie, huidige SEO-gezondheid en budget. We stellen vanaf dag één realistische verwachtingen en leveren maandelijkse rapportages zodat je de voortgang kunt volgen. Bekijk onze cases voor voorbeelden." },
      { question: "Hoe transparant zijn jullie rapportages?", answer: "100% transparant. Je krijgt toegang tot live dashboards, dedicated Slack/WhatsApp-kanalen en maandelijkse strategiegesprekken. We geloven in volledige zichtbaarheid - geen black-box SEO." },
    ],
  },
};

/* ─── Certifications ─── */
export const certificationsT: Record<Locale, {
  badge: string;
  heading: string;
  subtext: string;
}> = {
  en: {
    badge: "Certifications",
    heading: "Certified Partners",
    subtext: "We are officially certified by the platforms and tools we work with every day.",
  },
  de: {
    badge: "Zertifizierungen",
    heading: "Zertifizierte Partner",
    subtext: "Wir sind offiziell zertifiziert von den Plattformen und Tools, mit denen wir täglich arbeiten.",
  },
  fr: {
    badge: "Certifications",
    heading: "Partenaires certifiés",
    subtext: "Nous sommes officiellement certifiés par les plateformes et outils que nous utilisons au quotidien.",
  },
  es: {
    badge: "Certificaciones",
    heading: "Socios certificados",
    subtext: "Estamos oficialmente certificados por las plataformas y herramientas con las que trabajamos cada día.",
  },
  it: {
    badge: "Certificazioni",
    heading: "Partner certificati",
    subtext: "Siamo ufficialmente certificati dalle piattaforme e dagli strumenti che utilizziamo ogni giorno.",
  },
  nl: {
    badge: "Certificeringen",
    heading: "Gecertificeerde partners",
    subtext: "We zijn officieel gecertificeerd door de platformen en tools waarmee we dagelijks werken.",
  },
};

/* ─── Service Details ─── */
export const serviceDetailsT: Record<Locale, {
  badge: string;
  heading: string;
  subtext: string;
  cta: string;
  items: { title: string; description: string; href: string; linkText: string }[];
}> = {
  en: {
    badge: "What We Do",
    heading: "Ecommerce SEO services built for *real growth.*",
    subtext: "Every service is hands-on. We do the work, you see the results.",
    cta: "See Pricing",
    items: [
      { title: "Ecommerce SEO", description: "Full-service organic growth for online stores. Technical audits, content strategy, link building, and ongoing optimization. We handle the whole pipeline.", href: "/ecommerce-seo", linkText: "Learn more" },
      { title: "Shopify SEO", description: "We know Shopify inside out. From fixing duplicate /collections/ URLs to optimizing Liquid templates and structured data. Over 60% of our clients run Shopify.", href: "/shopify-seo", linkText: "Learn more" },
      { title: "WooCommerce SEO", description: "WooCommerce sites often have plugin bloat and index problems. We clean up the technical debt and build content that ranks in competitive markets.", href: "/woocommerce-seo", linkText: "Learn more" },
      { title: "BigCommerce SEO", description: "BigCommerce has strong built-in SEO features but most stores barely use them. We unlock what the platform can actually do for organic traffic.", href: "/bigcommerce-seo", linkText: "Learn more" },
      { title: "Link Building", description: "We earn links from real sites in your industry. No PBNs, no spam directories. Editorial placements, digital PR, and guest posts that move rankings.", href: "/link-building", linkText: "Learn more" },
      { title: "Keyword Research", description: "We map every keyword your customers actually search for, organized by intent and purchase stage. The foundation of every campaign we run.", href: "/keyword-research", linkText: "Learn more" },
      { title: "Content Writing", description: "Product descriptions, category guides, blog posts, and comparison pages. Written by people who understand ecommerce and SEO, not generic freelancers.", href: "/content-writing", linkText: "Learn more" },
      { title: "Amazon SEO", description: "Amazon search is its own game. We optimize listings, A+ content, and backend keywords to win the Buy Box and rank higher in Amazon search results.", href: "/amazon-seo", linkText: "Learn more" },
    ],
  },
  de: {
    badge: "Was wir tun",
    heading: "E-Commerce-SEO-Services für *echtes Wachstum.*",
    subtext: "Jeder Service ist praxisnah. Wir machen die Arbeit, Sie sehen die Ergebnisse.",
    cta: "Preise ansehen",
    items: [
      { title: "E-Commerce SEO", description: "Ganzheitliches organisches Wachstum für Online-Shops. Technische Audits, Content-Strategie, Linkaufbau und laufende Optimierung.", href: "/ecommerce-seo", linkText: "Mehr erfahren" },
      { title: "Shopify SEO", description: "Wir kennen Shopify in- und auswendig. Von der Behebung doppelter /collections/-URLs bis zur Optimierung von Liquid-Templates und strukturierten Daten.", href: "/shopify-seo", linkText: "Mehr erfahren" },
      { title: "WooCommerce SEO", description: "WooCommerce-Seiten haben oft Plugin-Bloat und Indexierungsprobleme. Wir bereinigen die technischen Schulden und erstellen rankende Inhalte.", href: "/woocommerce-seo", linkText: "Mehr erfahren" },
      { title: "BigCommerce SEO", description: "BigCommerce hat starke integrierte SEO-Funktionen, die die meisten Shops kaum nutzen. Wir erschliessen das volle Potenzial der Plattform.", href: "/bigcommerce-seo", linkText: "Mehr erfahren" },
      { title: "Linkaufbau", description: "Wir verdienen Links von echten Websites in Ihrer Branche. Keine PBNs, keine Spam-Verzeichnisse. Redaktionelle Platzierungen und Digital PR.", href: "/link-building", linkText: "Mehr erfahren" },
      { title: "Keyword-Recherche", description: "Wir kartieren jedes Keyword, das Ihre Kunden wirklich suchen, organisiert nach Suchintention und Kaufphase.", href: "/keyword-research", linkText: "Mehr erfahren" },
      { title: "Content-Erstellung", description: "Produktbeschreibungen, Kategorieseiten, Blogbeiträge und Vergleichsseiten. Geschrieben von E-Commerce- und SEO-Experten.", href: "/content-writing", linkText: "Mehr erfahren" },
      { title: "Amazon SEO", description: "Amazon-Suche ist ein eigenes Spiel. Wir optimieren Listings, A+-Inhalte und Backend-Keywords für bessere Rankings und die Buy Box.", href: "/amazon-seo", linkText: "Mehr erfahren" },
    ],
  },
  fr: {
    badge: "Nos services",
    heading: "Services SEO e-commerce pour une *vraie croissance.*",
    subtext: "Chaque service est concret. Nous faisons le travail, vous voyez les résultats.",
    cta: "Voir les tarifs",
    items: [
      { title: "SEO E-commerce", description: "Croissance organique complète pour les boutiques en ligne. Audits techniques, stratégie de contenu, netlinking et optimisation continue.", href: "/ecommerce-seo", linkText: "En savoir plus" },
      { title: "SEO Shopify", description: "Nous connaissons Shopify par coeur. De la correction des URLs /collections/ dupliquées à l'optimisation des templates Liquid et des données structurées.", href: "/shopify-seo", linkText: "En savoir plus" },
      { title: "SEO WooCommerce", description: "Les sites WooCommerce souffrent souvent de surcharge de plugins et de problèmes d'indexation. Nous nettoyons la dette technique.", href: "/woocommerce-seo", linkText: "En savoir plus" },
      { title: "SEO BigCommerce", description: "BigCommerce a d'excellentes fonctionnalités SEO intégrées que la plupart des boutiques n'exploitent pas. Nous libérons le potentiel de la plateforme.", href: "/bigcommerce-seo", linkText: "En savoir plus" },
      { title: "Netlinking", description: "Nous obtenons des liens de vrais sites dans votre secteur. Pas de PBN, pas de spamming. Placements éditoriaux et RP digital.", href: "/link-building", linkText: "En savoir plus" },
      { title: "Recherche de mots-clés", description: "Nous cartographions chaque mot-clé que vos clients recherchent, organisé par intention et étape d'achat.", href: "/keyword-research", linkText: "En savoir plus" },
      { title: "Rédaction de contenu", description: "Descriptions produits, guides catégories, articles de blog et pages comparatives. Rédigés par des experts e-commerce.", href: "/content-writing", linkText: "En savoir plus" },
      { title: "SEO Amazon", description: "La recherche Amazon est un jeu à part. Nous optimisons les fiches, le contenu A+ et les mots-clés backend.", href: "/amazon-seo", linkText: "En savoir plus" },
    ],
  },
  es: {
    badge: "Lo que hacemos",
    heading: "Servicios SEO e-commerce para *crecimiento real.*",
    subtext: "Cada servicio es práctico. Nosotros hacemos el trabajo, tú ves los resultados.",
    cta: "Ver precios",
    items: [
      { title: "SEO E-commerce", description: "Crecimiento orgánico completo para tiendas online. Auditorías técnicas, estrategia de contenido, link building y optimización continua.", href: "/ecommerce-seo", linkText: "Saber más" },
      { title: "SEO Shopify", description: "Conocemos Shopify de arriba a abajo. Desde corregir URLs /collections/ duplicadas hasta optimizar templates Liquid y datos estructurados.", href: "/shopify-seo", linkText: "Saber más" },
      { title: "SEO WooCommerce", description: "Los sitios WooCommerce suelen tener exceso de plugins y problemas de indexación. Limpiamos la deuda técnica y creamos contenido que posiciona.", href: "/woocommerce-seo", linkText: "Saber más" },
      { title: "SEO BigCommerce", description: "BigCommerce tiene excelentes funciones SEO integradas que la mayoría de tiendas no aprovechan. Desbloqueamos el potencial de la plataforma.", href: "/bigcommerce-seo", linkText: "Saber más" },
      { title: "Link Building", description: "Conseguimos enlaces de sitios reales en tu sector. Sin PBNs, sin directorios spam. Colocaciones editoriales y PR digital.", href: "/link-building", linkText: "Saber más" },
      { title: "Investigación de palabras clave", description: "Mapeamos cada keyword que tus clientes buscan, organizado por intención y etapa de compra.", href: "/keyword-research", linkText: "Saber más" },
      { title: "Redacción de contenido", description: "Descripciones de productos, guías de categorías, posts de blog y páginas comparativas. Escritos por expertos en e-commerce.", href: "/content-writing", linkText: "Saber más" },
      { title: "SEO Amazon", description: "La búsqueda en Amazon tiene sus propias reglas. Optimizamos listings, contenido A+ y keywords backend.", href: "/amazon-seo", linkText: "Saber más" },
    ],
  },
  it: {
    badge: "Cosa facciamo",
    heading: "Servizi SEO e-commerce per una *crescita reale.*",
    subtext: "Ogni servizio è pratico. Noi facciamo il lavoro, tu vedi i risultati.",
    cta: "Vedi i prezzi",
    items: [
      { title: "SEO E-commerce", description: "Crescita organica completa per negozi online. Audit tecnici, strategia contenuti, link building e ottimizzazione continua.", href: "/ecommerce-seo", linkText: "Scopri di più" },
      { title: "SEO Shopify", description: "Conosciamo Shopify alla perfezione. Dalla correzione degli URL /collections/ duplicati all'ottimizzazione dei template Liquid e dati strutturati.", href: "/shopify-seo", linkText: "Scopri di più" },
      { title: "SEO WooCommerce", description: "I siti WooCommerce spesso hanno bloat di plugin e problemi di indicizzazione. Puliamo il debito tecnico e creiamo contenuti che si posizionano.", href: "/woocommerce-seo", linkText: "Scopri di più" },
      { title: "SEO BigCommerce", description: "BigCommerce ha ottime funzionalità SEO integrate che la maggior parte dei negozi non sfrutta. Sblocchiamo il potenziale della piattaforma.", href: "/bigcommerce-seo", linkText: "Scopri di più" },
      { title: "Link Building", description: "Otteniamo link da siti reali nel tuo settore. Niente PBN, niente directory spam. Posizionamenti editoriali e digital PR.", href: "/link-building", linkText: "Scopri di più" },
      { title: "Ricerca keyword", description: "Mappiamo ogni keyword che i tuoi clienti cercano, organizzata per intento e fase di acquisto.", href: "/keyword-research", linkText: "Scopri di più" },
      { title: "Scrittura contenuti", description: "Descrizioni prodotti, guide categorie, blog post e pagine comparative. Scritti da esperti di e-commerce e SEO.", href: "/content-writing", linkText: "Scopri di più" },
      { title: "SEO Amazon", description: "La ricerca Amazon ha le sue regole. Ottimizziamo listing, contenuti A+ e keyword backend per vincere la Buy Box.", href: "/amazon-seo", linkText: "Scopri di più" },
    ],
  },
  nl: {
    badge: "Wat we doen",
    heading: "E-commerce SEO-services voor *echte groei.*",
    subtext: "Elke service is hands-on. Wij doen het werk, jij ziet de resultaten.",
    cta: "Bekijk prijzen",
    items: [
      { title: "E-commerce SEO", description: "Volledige organische groei voor webshops. Technische audits, contentstrategie, linkbuilding en doorlopende optimalisatie.", href: "/ecommerce-seo", linkText: "Meer info" },
      { title: "Shopify SEO", description: "We kennen Shopify van binnen en buiten. Van het oplossen van dubbele /collections/-URLs tot het optimaliseren van Liquid-templates en structured data.", href: "/shopify-seo", linkText: "Meer info" },
      { title: "WooCommerce SEO", description: "WooCommerce-sites hebben vaak plugin-bloat en indexeringsproblemen. We ruimen de technische schuld op en bouwen content die rankt.", href: "/woocommerce-seo", linkText: "Meer info" },
      { title: "BigCommerce SEO", description: "BigCommerce heeft sterke ingebouwde SEO-functies die de meeste shops nauwelijks gebruiken. Wij ontgrendelen het potentieel van het platform.", href: "/bigcommerce-seo", linkText: "Meer info" },
      { title: "Linkbuilding", description: "We verdienen links van echte websites in jouw branche. Geen PBN's, geen spam-directories. Redactionele plaatsingen en digital PR.", href: "/link-building", linkText: "Meer info" },
      { title: "Zoekwoordonderzoek", description: "We brengen elk zoekwoord in kaart dat jouw klanten daadwerkelijk zoeken, georganiseerd op zoekintentie en aankoopfase.", href: "/keyword-research", linkText: "Meer info" },
      { title: "Content schrijven", description: "Productbeschrijvingen, categoriepagina's, blogposts en vergelijkingspagina's. Geschreven door e-commerce en SEO-experts.", href: "/content-writing", linkText: "Meer info" },
      { title: "Amazon SEO", description: "Amazon-zoeken is een eigen wereld. We optimaliseren listings, A+-content en backend-keywords voor betere rankings en de Buy Box.", href: "/amazon-seo", linkText: "Meer info" },
    ],
  },
};

/* ─── Industries ─── */
export const industriesT: Record<Locale, {
  badge: string;
  heading: string;
  subtext: string;
  cta: string;
  hubLink: string;
  items: { title: string; description: string; href: string; linkText: string }[];
}> = {
  en: {
    badge: "Industries",
    heading: "SEO built for *your vertical.*",
    subtext: "We work with ecommerce brands across these verticals. Each industry has its own SEO playbook.",
    cta: "See Case Studies",
    hubLink: "View all industries",
    items: [
      { title: "Fashion & Apparel", description: "Category architecture, seasonal keyword targeting, and visual search optimization for clothing brands.", href: "/fashion-seo", linkText: "Explore" },
      { title: "Beauty & Cosmetics", description: "Product page optimization, ingredient-based content clusters, and rich snippet strategies for beauty brands.", href: "/beauty-seo", linkText: "Explore" },
      { title: "Food & Consumables", description: "Subscription-friendly SEO, freshness signals, and local compliance content for consumable brands.", href: "/consumables-seo", linkText: "Explore" },
      { title: "Toys & Kids", description: "Seasonal demand capture, safety content signals, and gift-guide targeting for toy brands.", href: "/toys-seo", linkText: "Explore" },
    ],
  },
  de: {
    badge: "Branchen",
    heading: "SEO speziell fur *Ihre Branche.*",
    subtext: "Wir arbeiten mit E-Commerce-Marken in diesen Branchen. Jede Branche hat ihr eigenes SEO-Playbook.",
    cta: "Referenzen ansehen",
    hubLink: "Alle Branchen ansehen",
    items: [
      { title: "Mode & Bekleidung", description: "Kategoriearchitektur, saisonale Keyword-Ausrichtung und visuelle Suchoptimierung für Modemarken.", href: "/fashion-seo", linkText: "Entdecken" },
      { title: "Beauty & Kosmetik", description: "Produktseitenoptimierung, inhaltsstoffbasierte Content-Cluster und Rich-Snippet-Strategien.", href: "/beauty-seo", linkText: "Entdecken" },
      { title: "Lebensmittel & Verbrauchsgüter", description: "Abo-freundliches SEO, Frische-Signale und Compliance-Inhalte für Verbrauchsgütermarken.", href: "/consumables-seo", linkText: "Entdecken" },
      { title: "Spielzeug & Kinder", description: "Saisonale Nachfrage, Sicherheitsinhalte und Geschenkführer-Targeting.", href: "/toys-seo", linkText: "Entdecken" },
    ],
  },
  fr: {
    badge: "Secteurs",
    heading: "Du SEO concu pour *votre secteur.*",
    subtext: "Nous travaillons avec des marques e-commerce dans ces secteurs. Chaque industrie a son propre playbook SEO.",
    cta: "Voir les études de cas",
    hubLink: "Voir tous les secteurs",
    items: [
      { title: "Mode & Habillement", description: "Architecture de catégories, ciblage saisonnier et optimisation de recherche visuelle pour les marques de mode.", href: "/fashion-seo", linkText: "Explorer" },
      { title: "Beauté & Cosmétiques", description: "Optimisation des pages produits, clusters de contenu par ingrédient et stratégies de rich snippets.", href: "/beauty-seo", linkText: "Explorer" },
      { title: "Alimentation & Consommables", description: "SEO adapté aux abonnements, signaux de fraîcheur et contenu de conformité.", href: "/consumables-seo", linkText: "Explorer" },
      { title: "Jouets & Enfants", description: "Capture de demande saisonnière, signaux de sécurité et ciblage de guides cadeaux.", href: "/toys-seo", linkText: "Explorer" },
    ],
  },
  es: {
    badge: "Industrias",
    heading: "SEO hecho para *tu vertical.*",
    subtext: "Trabajamos con marcas e-commerce en estos sectores. Cada industria tiene su propio playbook SEO.",
    cta: "Ver casos de éxito",
    hubLink: "Ver todas las industrias",
    items: [
      { title: "Moda y Ropa", description: "Arquitectura de categorías, targeting estacional y optimización de búsqueda visual para marcas de moda.", href: "/fashion-seo", linkText: "Explorar" },
      { title: "Belleza y Cosmética", description: "Optimización de páginas de producto, clusters de contenido por ingredientes y estrategias de rich snippets.", href: "/beauty-seo", linkText: "Explorar" },
      { title: "Alimentación y Consumibles", description: "SEO para suscripciones, señales de frescura y contenido de cumplimiento normativo.", href: "/consumables-seo", linkText: "Explorar" },
      { title: "Juguetes y Niños", description: "Captura de demanda estacional, señales de seguridad y targeting de guías de regalo.", href: "/toys-seo", linkText: "Explorar" },
    ],
  },
  it: {
    badge: "Settori",
    heading: "SEO costruito per *il tuo settore.*",
    subtext: "Lavoriamo con brand e-commerce in questi settori. Ogni industria ha il suo playbook SEO.",
    cta: "Vedi i casi studio",
    hubLink: "Vedi tutti i settori",
    items: [
      { title: "Moda e Abbigliamento", description: "Architettura delle categorie, targeting stagionale e ottimizzazione della ricerca visiva per brand di moda.", href: "/fashion-seo", linkText: "Esplora" },
      { title: "Beauty e Cosmetici", description: "Ottimizzazione pagine prodotto, cluster di contenuti per ingredienti e strategie rich snippet.", href: "/beauty-seo", linkText: "Esplora" },
      { title: "Food e Consumabili", description: "SEO per abbonamenti, segnali di freschezza e contenuti di conformità normativa.", href: "/consumables-seo", linkText: "Esplora" },
      { title: "Giocattoli e Bambini", description: "Cattura della domanda stagionale, segnali di sicurezza e targeting guide regalo.", href: "/toys-seo", linkText: "Esplora" },
    ],
  },
  nl: {
    badge: "Branches",
    heading: "SEO gebouwd voor *jouw branche.*",
    subtext: "We werken met e-commercemerken in deze branches. Elke branche heeft zijn eigen SEO-playbook.",
    cta: "Bekijk cases",
    hubLink: "Alle branches bekijken",
    items: [
      { title: "Mode & Kleding", description: "Categoriearchitectuur, seizoensgebonden keyword-targeting en visuele zoekoptimalisatie voor modemerken.", href: "/fashion-seo", linkText: "Ontdek" },
      { title: "Beauty & Cosmetica", description: "Productpagina-optimalisatie, content-clusters op basis van ingrediënten en rich snippet-strategieën.", href: "/beauty-seo", linkText: "Ontdek" },
      { title: "Voeding & Consumables", description: "Abonnementsvriendelijke SEO, frisheidssignalen en compliance-content voor consumable merken.", href: "/consumables-seo", linkText: "Ontdek" },
      { title: "Speelgoed & Kids", description: "Seizoensgebonden vraag, veiligheidssignalen en cadeau-gids targeting voor speelgoedmerken.", href: "/toys-seo", linkText: "Ontdek" },
    ],
  },
};

/* ─── Free Tools ─── */
export const freeToolsT: Record<Locale, {
  badge: string;
  heading: string;
  subtext: string;
  cta: string;
  items: { title: string; description: string; href: string }[];
}> = {
  en: {
    badge: "Free Tools",
    heading: "Free ecommerce SEO tools. *No signup required.*",
    subtext: "We built these for our own audits. Now you can use them too.",
    cta: "See All Tools",
    items: [
      { title: "Shopify SEO Audit", description: "Full technical audit for any Shopify store. Checks speed, structured data, meta tags, and indexation issues.", href: "/tools/shopify-seo-audit" },
      { title: "Ecommerce SEO Audit", description: "Platform-agnostic audit covering on-page, technical, and content quality signals.", href: "/tools/ecommerce-seo-audit" },
      { title: "SERP Simulator", description: "Preview how your title tags and meta descriptions look in Google search results before publishing.", href: "/tools/serp-simulator" },
      { title: "Schema Generator", description: "Generate JSON-LD structured data for products, organizations, FAQs, and breadcrumbs.", href: "/tools/schema-generator" },
      { title: "Core Web Vitals", description: "Check LCP, CLS, and FID scores for any URL. Compare against Google's thresholds.", href: "/tools/core-web-vitals" },
      { title: "Internal Link Analyzer", description: "Map your site's internal linking structure. Find orphan pages and link equity bottlenecks.", href: "/tools/internal-link-analyzer" },
      { title: "Heading Checker", description: "Validate H1-H6 hierarchy on any page. Catch missing H1s and broken heading structures.", href: "/tools/heading-checker" },
      { title: "Robots.txt Analyzer", description: "Check if your robots.txt is blocking important pages from Google's crawlers.", href: "/tools/robots-txt-analyzer" },
    ],
  },
  de: {
    badge: "Kostenlose Tools",
    heading: "Kostenlose E-Commerce-SEO-Tools. *Keine Anmeldung nötig.*",
    subtext: "Wir haben diese für unsere eigenen Audits gebaut. Jetzt können Sie sie auch nutzen.",
    cta: "Alle Tools ansehen",
    items: [
      { title: "Shopify SEO Audit", description: "Vollständiges technisches Audit für jeden Shopify-Shop. Prüft Geschwindigkeit, strukturierte Daten, Meta-Tags und Indexierung.", href: "/tools/shopify-seo-audit" },
      { title: "E-Commerce SEO Audit", description: "Plattformunabhängiges Audit für On-Page, technische und Content-Qualitätssignale.", href: "/tools/ecommerce-seo-audit" },
      { title: "SERP-Simulator", description: "Vorschau Ihrer Title-Tags und Meta-Beschreibungen in den Google-Suchergebnissen.", href: "/tools/serp-simulator" },
      { title: "Schema-Generator", description: "JSON-LD strukturierte Daten für Produkte, Organisationen, FAQs und Breadcrumbs generieren.", href: "/tools/schema-generator" },
      { title: "Core Web Vitals", description: "LCP-, CLS- und FID-Werte für jede URL prüfen. Vergleich mit Googles Schwellenwerten.", href: "/tools/core-web-vitals" },
      { title: "Interne-Link-Analyse", description: "Interne Linkstruktur Ihrer Website kartieren. Verwaiste Seiten und Link-Equity-Engpässe finden.", href: "/tools/internal-link-analyzer" },
      { title: "Heading-Checker", description: "H1-H6-Hierarchie auf jeder Seite validieren. Fehlende H1s und fehlerhafte Strukturen erkennen.", href: "/tools/heading-checker" },
      { title: "Robots.txt-Analyse", description: "Prüfen, ob Ihre robots.txt wichtige Seiten für Googles Crawler blockiert.", href: "/tools/robots-txt-analyzer" },
    ],
  },
  fr: {
    badge: "Outils gratuits",
    heading: "Outils SEO e-commerce gratuits. *Sans inscription.*",
    subtext: "Nous les avons créés pour nos propres audits. Maintenant vous pouvez les utiliser aussi.",
    cta: "Voir tous les outils",
    items: [
      { title: "Audit SEO Shopify", description: "Audit technique complet pour toute boutique Shopify. Vérifie la vitesse, les données structurées et l'indexation.", href: "/tools/shopify-seo-audit" },
      { title: "Audit SEO E-commerce", description: "Audit multi-plateforme couvrant les signaux on-page, techniques et qualité de contenu.", href: "/tools/ecommerce-seo-audit" },
      { title: "Simulateur SERP", description: "Prévisualisez vos title tags et meta descriptions dans les résultats Google.", href: "/tools/serp-simulator" },
      { title: "Générateur de Schema", description: "Générez des données structurées JSON-LD pour produits, organisations, FAQ et breadcrumbs.", href: "/tools/schema-generator" },
      { title: "Core Web Vitals", description: "Vérifiez les scores LCP, CLS et FID pour toute URL.", href: "/tools/core-web-vitals" },
      { title: "Analyse de liens internes", description: "Cartographiez la structure de liens internes. Trouvez les pages orphelines.", href: "/tools/internal-link-analyzer" },
      { title: "Vérificateur de headings", description: "Validez la hiérarchie H1-H6 sur toute page.", href: "/tools/heading-checker" },
      { title: "Analyseur robots.txt", description: "Vérifiez si votre robots.txt bloque des pages importantes.", href: "/tools/robots-txt-analyzer" },
    ],
  },
  es: {
    badge: "Herramientas gratis",
    heading: "Herramientas SEO e-commerce gratis. *Sin registro.*",
    subtext: "Las creamos para nuestras propias auditorías. Ahora tú también puedes usarlas.",
    cta: "Ver todas las herramientas",
    items: [
      { title: "Auditoría SEO Shopify", description: "Auditoría técnica completa para cualquier tienda Shopify. Verifica velocidad, datos estructurados e indexación.", href: "/tools/shopify-seo-audit" },
      { title: "Auditoría SEO E-commerce", description: "Auditoría multiplataforma que cubre señales on-page, técnicas y calidad de contenido.", href: "/tools/ecommerce-seo-audit" },
      { title: "Simulador SERP", description: "Previsualiza tus title tags y meta descriptions en los resultados de Google.", href: "/tools/serp-simulator" },
      { title: "Generador de Schema", description: "Genera datos estructurados JSON-LD para productos, organizaciones, FAQ y breadcrumbs.", href: "/tools/schema-generator" },
      { title: "Core Web Vitals", description: "Comprueba los scores LCP, CLS y FID para cualquier URL.", href: "/tools/core-web-vitals" },
      { title: "Análisis de enlaces internos", description: "Mapea la estructura de enlaces internos de tu sitio.", href: "/tools/internal-link-analyzer" },
      { title: "Checker de encabezados", description: "Valida la jerarquía H1-H6 en cualquier página.", href: "/tools/heading-checker" },
      { title: "Analizador robots.txt", description: "Comprueba si tu robots.txt bloquea páginas importantes.", href: "/tools/robots-txt-analyzer" },
    ],
  },
  it: {
    badge: "Strumenti gratuiti",
    heading: "Strumenti SEO e-commerce gratuiti. *Senza registrazione.*",
    subtext: "Li abbiamo creati per i nostri audit. Ora puoi usarli anche tu.",
    cta: "Vedi tutti gli strumenti",
    items: [
      { title: "Audit SEO Shopify", description: "Audit tecnico completo per qualsiasi negozio Shopify. Controlla velocità, dati strutturati e indicizzazione.", href: "/tools/shopify-seo-audit" },
      { title: "Audit SEO E-commerce", description: "Audit multipiattaforma che copre segnali on-page, tecnici e qualità dei contenuti.", href: "/tools/ecommerce-seo-audit" },
      { title: "Simulatore SERP", description: "Anteprima dei title tag e meta description nei risultati Google.", href: "/tools/serp-simulator" },
      { title: "Generatore Schema", description: "Genera dati strutturati JSON-LD per prodotti, organizzazioni, FAQ e breadcrumb.", href: "/tools/schema-generator" },
      { title: "Core Web Vitals", description: "Controlla i punteggi LCP, CLS e FID per qualsiasi URL.", href: "/tools/core-web-vitals" },
      { title: "Analisi link interni", description: "Mappa la struttura dei link interni del tuo sito.", href: "/tools/internal-link-analyzer" },
      { title: "Checker heading", description: "Valida la gerarchia H1-H6 su qualsiasi pagina.", href: "/tools/heading-checker" },
      { title: "Analizzatore robots.txt", description: "Controlla se il tuo robots.txt blocca pagine importanti.", href: "/tools/robots-txt-analyzer" },
    ],
  },
  nl: {
    badge: "Gratis tools",
    heading: "Gratis e-commerce SEO-tools. *Geen registratie nodig.*",
    subtext: "We hebben ze gebouwd voor onze eigen audits. Nu kun je ze ook gebruiken.",
    cta: "Alle tools bekijken",
    items: [
      { title: "Shopify SEO Audit", description: "Volledige technische audit voor elke Shopify-winkel. Controleert snelheid, structured data en indexering.", href: "/tools/shopify-seo-audit" },
      { title: "E-commerce SEO Audit", description: "Platformonafhankelijke audit voor on-page, technische en contentkwaliteitssignalen.", href: "/tools/ecommerce-seo-audit" },
      { title: "SERP-simulator", description: "Bekijk een preview van je title tags en meta descriptions in Google-zoekresultaten.", href: "/tools/serp-simulator" },
      { title: "Schema-generator", description: "Genereer JSON-LD structured data voor producten, organisaties, FAQ's en breadcrumbs.", href: "/tools/schema-generator" },
      { title: "Core Web Vitals", description: "Controleer LCP-, CLS- en FID-scores voor elke URL.", href: "/tools/core-web-vitals" },
      { title: "Interne link-analyse", description: "Breng de interne linkstructuur van je site in kaart. Vind weespagina's en link-equity knelpunten.", href: "/tools/internal-link-analyzer" },
      { title: "Heading-checker", description: "Valideer de H1-H6-hiërarchie op elke pagina.", href: "/tools/heading-checker" },
      { title: "Robots.txt-analyse", description: "Controleer of je robots.txt belangrijke pagina's blokkeert voor Google.", href: "/tools/robots-txt-analyzer" },
    ],
  },
};

/* ─── Blog Preview ─── */
export const blogPreviewT: Record<Locale, {
  badge: string;
  heading: string;
  subtext: string;
  ctaBlog: string;
  ctaAcademy: string;
  articles: { title: string; snippet: string; href: string; linkText: string }[];
}> = {
  en: {
    badge: "Resources",
    heading: "Learn ecommerce SEO from people *who do it daily.*",
    subtext: "Guides, strategies, and lessons from running SEO for 19+ ecommerce brands.",
    ctaBlog: "Visit Blog",
    ctaAcademy: "Browse Academy",
    articles: [
      { title: "What Is Ecommerce SEO?", snippet: "The complete guide to organic growth for online stores. Covers technical foundations, content strategy, and link building for ecommerce.", href: "/blog/ecommerce-seo", linkText: "Read guide" },
      { title: "Ecommerce SEO Strategy", snippet: "How to build a 12-month SEO roadmap for your ecommerce brand. Prioritization frameworks, timeline expectations, and budget allocation.", href: "/blog/ecommerce-seo-strategy", linkText: "Read guide" },
      { title: "Shopify SEO: The Complete Guide", snippet: "Everything you need to know about SEO for Shopify stores. URL structure, collections, product pages, Liquid templates, and apps.", href: "/blog/shopify-ecommerce-seo", linkText: "Read guide" },
    ],
  },
  de: {
    badge: "Ressourcen",
    heading: "Lerne E-Commerce-SEO von Menschen, *die es täglich machen.*",
    subtext: "Guides, Strategien und Erkenntnisse aus der SEO-Arbeit für über 19 E-Commerce-Marken.",
    ctaBlog: "Zum Blog",
    ctaAcademy: "Zur Academy",
    articles: [
      { title: "Was ist E-Commerce SEO?", snippet: "Der komplette Guide zu organischem Wachstum für Online-Shops. Technische Grundlagen, Content-Strategie und Linkaufbau.", href: "/blog/ecommerce-seo", linkText: "Guide lesen" },
      { title: "E-Commerce-SEO-Strategie", snippet: "So erstellen Sie eine 12-Monats-SEO-Roadmap für Ihre E-Commerce-Marke.", href: "/blog/ecommerce-seo-strategy", linkText: "Guide lesen" },
      { title: "Shopify SEO: Der komplette Guide", snippet: "Alles über SEO für Shopify-Shops. URL-Struktur, Collections, Produktseiten und Apps.", href: "/blog/shopify-ecommerce-seo", linkText: "Guide lesen" },
    ],
  },
  fr: {
    badge: "Ressources",
    heading: "Apprenez le SEO e-commerce par ceux *qui le pratiquent au quotidien.*",
    subtext: "Guides, stratégies et leçons tirées du SEO pour plus de 19 marques e-commerce.",
    ctaBlog: "Voir le blog",
    ctaAcademy: "Parcourir l'Academy",
    articles: [
      { title: "Qu'est-ce que le SEO e-commerce ?", snippet: "Le guide complet de la croissance organique pour les boutiques en ligne.", href: "/blog/ecommerce-seo", linkText: "Lire le guide" },
      { title: "Stratégie SEO e-commerce", snippet: "Comment construire une feuille de route SEO sur 12 mois pour votre marque e-commerce.", href: "/blog/ecommerce-seo-strategy", linkText: "Lire le guide" },
      { title: "SEO Shopify : Le guide complet", snippet: "Tout ce que vous devez savoir sur le SEO pour les boutiques Shopify.", href: "/blog/shopify-ecommerce-seo", linkText: "Lire le guide" },
    ],
  },
  es: {
    badge: "Recursos",
    heading: "Aprende SEO e-commerce de personas *que lo hacen a diario.*",
    subtext: "Guías, estrategias y lecciones de hacer SEO para más de 19 marcas e-commerce.",
    ctaBlog: "Visitar Blog",
    ctaAcademy: "Explorar Academy",
    articles: [
      { title: "¿Qué es el SEO e-commerce?", snippet: "La guía completa de crecimiento orgánico para tiendas online.", href: "/blog/ecommerce-seo", linkText: "Leer guía" },
      { title: "Estrategia SEO e-commerce", snippet: "Cómo construir una hoja de ruta SEO de 12 meses para tu marca e-commerce.", href: "/blog/ecommerce-seo-strategy", linkText: "Leer guía" },
      { title: "SEO Shopify: La guía completa", snippet: "Todo lo que necesitas saber sobre SEO para tiendas Shopify.", href: "/blog/shopify-ecommerce-seo", linkText: "Leer guía" },
    ],
  },
  it: {
    badge: "Risorse",
    heading: "Impara la SEO e-commerce da chi *la pratica ogni giorno.*",
    subtext: "Guide, strategie e lezioni dalla SEO per oltre 19 brand e-commerce.",
    ctaBlog: "Visita il Blog",
    ctaAcademy: "Esplora l'Academy",
    articles: [
      { title: "Cos'è la SEO e-commerce?", snippet: "La guida completa alla crescita organica per i negozi online.", href: "/blog/ecommerce-seo", linkText: "Leggi la guida" },
      { title: "Strategia SEO e-commerce", snippet: "Come costruire una roadmap SEO di 12 mesi per il tuo brand e-commerce.", href: "/blog/ecommerce-seo-strategy", linkText: "Leggi la guida" },
      { title: "SEO Shopify: La guida completa", snippet: "Tutto quello che devi sapere sulla SEO per i negozi Shopify.", href: "/blog/shopify-ecommerce-seo", linkText: "Leggi la guida" },
    ],
  },
  nl: {
    badge: "Bronnen",
    heading: "Leer e-commerce SEO van mensen *die het dagelijks doen.*",
    subtext: "Gidsen, strategieën en lessen uit het runnen van SEO voor 19+ e-commercemerken.",
    ctaBlog: "Naar de Blog",
    ctaAcademy: "Naar de Academy",
    articles: [
      { title: "Wat is e-commerce SEO?", snippet: "De complete gids voor organische groei voor webshops.", href: "/blog/ecommerce-seo", linkText: "Lees de gids" },
      { title: "E-commerce SEO-strategie", snippet: "Hoe je een 12-maanden SEO-routekaart bouwt voor je e-commercemerk.", href: "/blog/ecommerce-seo-strategy", linkText: "Lees de gids" },
      { title: "Shopify SEO: De complete gids", snippet: "Alles wat je moet weten over SEO voor Shopify-winkels.", href: "/blog/shopify-ecommerce-seo", linkText: "Lees de gids" },
    ],
  },
};

/* ─── Academy Preview ─── */
export const academyPreviewT: Record<Locale, {
  badge: string;
  heading: string;
  subtext: string;
  cta: string;
  clusters: {
    title: string;
    count: string;
    description: string;
    href: string;
    topics: { title: string; href: string }[];
  }[];
}> = {
  en: {
    badge: "Academy",
    heading: "66 free lessons on ecommerce SEO. *Zero fluff.*",
    subtext: "We wrote the playbook we wished existed when we started. Organized by skill level, from basics to advanced.",
    cta: "Browse the Full Academy",
    clusters: [
      {
        title: "Search Fundamentals",
        count: "7 lessons",
        description: "How Google crawls and ranks ecommerce sites. Indexing, ranking factors, and Search Console basics.",
        href: "/academy/introduction-to-ecommerce-seo",
        topics: [
          { title: "How Google Finds Online Stores", href: "/academy/how-google-finds-online-stores" },
          { title: "Ecommerce Ranking Factors", href: "/academy/ecommerce-ranking-factors" },
          { title: "Crawling & Indexing Product Pages", href: "/academy/crawling-and-indexing-product-pages" },
        ],
      },
      {
        title: "Keyword Research",
        count: "7 lessons",
        description: "Find keywords that drive revenue, not just traffic. Buyer intent, long-tail targeting, and competitor analysis.",
        href: "/academy/keyword-research-for-ecommerce",
        topics: [
          { title: "Buyer Intent vs Search Volume", href: "/academy/buyer-intent-vs-search-volume" },
          { title: "Competitor Keyword Analysis", href: "/academy/competitor-keyword-analysis" },
          { title: "Keyword Mapping for Stores", href: "/academy/keyword-mapping-for-stores" },
        ],
      },
      {
        title: "On-Page SEO",
        count: "8 lessons",
        description: "Product pages, category pages, title tags, internal linking. The stuff that moves rankings for online stores.",
        href: "/academy/product-page-seo",
        topics: [
          { title: "Product Page SEO", href: "/academy/product-page-seo" },
          { title: "Category Page SEO", href: "/academy/category-page-seo" },
          { title: "Internal Linking for Stores", href: "/academy/internal-linking-for-stores" },
        ],
      },
      {
        title: "Technical SEO",
        count: "8 lessons",
        description: "Site architecture, speed, structured data, canonical tags, faceted navigation. The backend that Google cares about.",
        href: "/academy/site-architecture-for-ecommerce",
        topics: [
          { title: "Site Speed Optimization", href: "/academy/site-speed-optimization" },
          { title: "Structured Data for Products", href: "/academy/structured-data-for-products" },
          { title: "Faceted Navigation SEO", href: "/academy/faceted-navigation-seo" },
        ],
      },
      {
        title: "Link Building",
        count: "6 lessons",
        description: "Digital PR, guest posting, broken link building, and outreach. How to earn real links for ecommerce brands.",
        href: "/academy/backlink-fundamentals-for-ecommerce",
        topics: [
          { title: "Digital PR for Ecommerce", href: "/academy/digital-pr-for-ecommerce" },
          { title: "Broken Link Building", href: "/academy/broken-link-building" },
          { title: "Guest Posting for Ecommerce", href: "/academy/guest-posting-for-ecommerce" },
        ],
      },
      {
        title: "Platform Guides",
        count: "5 lessons",
        description: "Shopify, WooCommerce, Magento, BigCommerce. Platform-specific SEO tactics that actually matter.",
        href: "/academy/shopify-seo-guide",
        topics: [
          { title: "Shopify SEO Guide", href: "/academy/shopify-seo-guide" },
          { title: "WooCommerce SEO Guide", href: "/academy/woocommerce-seo-guide" },
          { title: "Magento SEO Guide", href: "/academy/magento-seo-guide" },
        ],
      },
    ],
  },
  de: {
    badge: "Academy",
    heading: "66 kostenlose Lektionen zu E-Commerce-SEO. *Kein Blabla.*",
    subtext: "Wir haben das Handbuch geschrieben, das wir uns gewunscht hatten. Organisiert nach Schwierigkeitsgrad.",
    cta: "Zur vollstandigen Academy",
    clusters: [
      { title: "Suchgrundlagen", count: "7 Lektionen", description: "Wie Google E-Commerce-Seiten crawlt und rankt.", href: "/academy/introduction-to-ecommerce-seo", topics: [
        { title: "Wie Google Online-Shops findet", href: "/academy/how-google-finds-online-stores" },
        { title: "E-Commerce Ranking-Faktoren", href: "/academy/ecommerce-ranking-factors" },
        { title: "Crawling & Indexierung", href: "/academy/crawling-and-indexing-product-pages" },
      ]},
      { title: "Keyword-Recherche", count: "7 Lektionen", description: "Keywords finden, die Umsatz bringen.", href: "/academy/keyword-research-for-ecommerce", topics: [
        { title: "Kaufabsicht vs. Suchvolumen", href: "/academy/buyer-intent-vs-search-volume" },
        { title: "Wettbewerber-Analyse", href: "/academy/competitor-keyword-analysis" },
        { title: "Keyword-Mapping", href: "/academy/keyword-mapping-for-stores" },
      ]},
      { title: "On-Page SEO", count: "8 Lektionen", description: "Produktseiten, Kategorieseiten, Title-Tags.", href: "/academy/product-page-seo", topics: [
        { title: "Produktseiten-SEO", href: "/academy/product-page-seo" },
        { title: "Kategorieseiten-SEO", href: "/academy/category-page-seo" },
        { title: "Interne Verlinkung", href: "/academy/internal-linking-for-stores" },
      ]},
      { title: "Technisches SEO", count: "8 Lektionen", description: "Seitenarchitektur, Geschwindigkeit, strukturierte Daten.", href: "/academy/site-architecture-for-ecommerce", topics: [
        { title: "Geschwindigkeitsoptimierung", href: "/academy/site-speed-optimization" },
        { title: "Strukturierte Daten", href: "/academy/structured-data-for-products" },
        { title: "Facettierte Navigation", href: "/academy/faceted-navigation-seo" },
      ]},
      { title: "Linkaufbau", count: "6 Lektionen", description: "Digital PR, Gastbeitrage, Broken Links.", href: "/academy/backlink-fundamentals-for-ecommerce", topics: [
        { title: "Digital PR fur E-Commerce", href: "/academy/digital-pr-for-ecommerce" },
        { title: "Broken Link Building", href: "/academy/broken-link-building" },
        { title: "Gastbeitrage", href: "/academy/guest-posting-for-ecommerce" },
      ]},
      { title: "Plattform-Guides", count: "5 Lektionen", description: "Shopify, WooCommerce, Magento, BigCommerce.", href: "/academy/shopify-seo-guide", topics: [
        { title: "Shopify SEO Guide", href: "/academy/shopify-seo-guide" },
        { title: "WooCommerce SEO Guide", href: "/academy/woocommerce-seo-guide" },
        { title: "Magento SEO Guide", href: "/academy/magento-seo-guide" },
      ]},
    ],
  },
  fr: {
    badge: "Academy",
    heading: "66 lecons gratuites sur le SEO e-commerce. *Zero blabla.*",
    subtext: "Nous avons ecrit le guide que nous aurions voulu avoir. Organise par niveau.",
    cta: "Parcourir toute l'Academy",
    clusters: [
      { title: "Fondamentaux", count: "7 lecons", description: "Comment Google explore et classe les sites e-commerce.", href: "/academy/introduction-to-ecommerce-seo", topics: [
        { title: "Comment Google trouve les boutiques", href: "/academy/how-google-finds-online-stores" },
        { title: "Facteurs de classement", href: "/academy/ecommerce-ranking-factors" },
        { title: "Crawl et indexation", href: "/academy/crawling-and-indexing-product-pages" },
      ]},
      { title: "Recherche de mots-cles", count: "7 lecons", description: "Trouver les mots-cles qui generent du revenu.", href: "/academy/keyword-research-for-ecommerce", topics: [
        { title: "Intention vs volume", href: "/academy/buyer-intent-vs-search-volume" },
        { title: "Analyse concurrentielle", href: "/academy/competitor-keyword-analysis" },
        { title: "Mapping de mots-cles", href: "/academy/keyword-mapping-for-stores" },
      ]},
      { title: "SEO On-Page", count: "8 lecons", description: "Pages produits, categories, title tags.", href: "/academy/product-page-seo", topics: [
        { title: "SEO pages produits", href: "/academy/product-page-seo" },
        { title: "SEO pages categories", href: "/academy/category-page-seo" },
        { title: "Liens internes", href: "/academy/internal-linking-for-stores" },
      ]},
      { title: "SEO technique", count: "8 lecons", description: "Architecture, vitesse, donnees structurees.", href: "/academy/site-architecture-for-ecommerce", topics: [
        { title: "Optimisation vitesse", href: "/academy/site-speed-optimization" },
        { title: "Donnees structurees", href: "/academy/structured-data-for-products" },
        { title: "Navigation a facettes", href: "/academy/faceted-navigation-seo" },
      ]},
      { title: "Netlinking", count: "6 lecons", description: "Digital PR, guest posts, liens casses.", href: "/academy/backlink-fundamentals-for-ecommerce", topics: [
        { title: "Digital PR e-commerce", href: "/academy/digital-pr-for-ecommerce" },
        { title: "Broken Link Building", href: "/academy/broken-link-building" },
        { title: "Guest posting", href: "/academy/guest-posting-for-ecommerce" },
      ]},
      { title: "Guides plateforme", count: "5 lecons", description: "Shopify, WooCommerce, Magento, BigCommerce.", href: "/academy/shopify-seo-guide", topics: [
        { title: "Guide SEO Shopify", href: "/academy/shopify-seo-guide" },
        { title: "Guide SEO WooCommerce", href: "/academy/woocommerce-seo-guide" },
        { title: "Guide SEO Magento", href: "/academy/magento-seo-guide" },
      ]},
    ],
  },
  es: {
    badge: "Academy",
    heading: "66 lecciones gratis sobre SEO e-commerce. *Sin relleno.*",
    subtext: "Escribimos la guia que nos hubiera gustado tener. Organizada por nivel.",
    cta: "Explorar toda la Academy",
    clusters: [
      { title: "Fundamentos", count: "7 lecciones", description: "Como Google rastrea y clasifica sitios e-commerce.", href: "/academy/introduction-to-ecommerce-seo", topics: [
        { title: "Como Google encuentra tiendas", href: "/academy/how-google-finds-online-stores" },
        { title: "Factores de ranking", href: "/academy/ecommerce-ranking-factors" },
        { title: "Crawling e indexacion", href: "/academy/crawling-and-indexing-product-pages" },
      ]},
      { title: "Investigacion de keywords", count: "7 lecciones", description: "Encontrar keywords que generen ingresos.", href: "/academy/keyword-research-for-ecommerce", topics: [
        { title: "Intencion vs volumen", href: "/academy/buyer-intent-vs-search-volume" },
        { title: "Analisis competitivo", href: "/academy/competitor-keyword-analysis" },
        { title: "Mapping de keywords", href: "/academy/keyword-mapping-for-stores" },
      ]},
      { title: "SEO On-Page", count: "8 lecciones", description: "Paginas de producto, categorias, title tags.", href: "/academy/product-page-seo", topics: [
        { title: "SEO paginas de producto", href: "/academy/product-page-seo" },
        { title: "SEO paginas de categoria", href: "/academy/category-page-seo" },
        { title: "Enlaces internos", href: "/academy/internal-linking-for-stores" },
      ]},
      { title: "SEO tecnico", count: "8 lecciones", description: "Arquitectura, velocidad, datos estructurados.", href: "/academy/site-architecture-for-ecommerce", topics: [
        { title: "Optimizacion de velocidad", href: "/academy/site-speed-optimization" },
        { title: "Datos estructurados", href: "/academy/structured-data-for-products" },
        { title: "Navegacion facetada", href: "/academy/faceted-navigation-seo" },
      ]},
      { title: "Link Building", count: "6 lecciones", description: "Digital PR, guest posts, enlaces rotos.", href: "/academy/backlink-fundamentals-for-ecommerce", topics: [
        { title: "Digital PR e-commerce", href: "/academy/digital-pr-for-ecommerce" },
        { title: "Broken Link Building", href: "/academy/broken-link-building" },
        { title: "Guest posting", href: "/academy/guest-posting-for-ecommerce" },
      ]},
      { title: "Guias de plataforma", count: "5 lecciones", description: "Shopify, WooCommerce, Magento, BigCommerce.", href: "/academy/shopify-seo-guide", topics: [
        { title: "Guia SEO Shopify", href: "/academy/shopify-seo-guide" },
        { title: "Guia SEO WooCommerce", href: "/academy/woocommerce-seo-guide" },
        { title: "Guia SEO Magento", href: "/academy/magento-seo-guide" },
      ]},
    ],
  },
  it: {
    badge: "Academy",
    heading: "66 lezioni gratuite sulla SEO e-commerce. *Zero fuffa.*",
    subtext: "Abbiamo scritto il manuale che avremmo voluto avere. Organizzato per livello.",
    cta: "Esplora tutta l'Academy",
    clusters: [
      { title: "Fondamenti", count: "7 lezioni", description: "Come Google esplora e classifica i siti e-commerce.", href: "/academy/introduction-to-ecommerce-seo", topics: [
        { title: "Come Google trova i negozi", href: "/academy/how-google-finds-online-stores" },
        { title: "Fattori di ranking", href: "/academy/ecommerce-ranking-factors" },
        { title: "Crawling e indicizzazione", href: "/academy/crawling-and-indexing-product-pages" },
      ]},
      { title: "Ricerca keyword", count: "7 lezioni", description: "Trovare keyword che generano ricavi.", href: "/academy/keyword-research-for-ecommerce", topics: [
        { title: "Intento vs volume", href: "/academy/buyer-intent-vs-search-volume" },
        { title: "Analisi competitiva", href: "/academy/competitor-keyword-analysis" },
        { title: "Mapping keyword", href: "/academy/keyword-mapping-for-stores" },
      ]},
      { title: "SEO On-Page", count: "8 lezioni", description: "Pagine prodotto, categorie, title tag.", href: "/academy/product-page-seo", topics: [
        { title: "SEO pagine prodotto", href: "/academy/product-page-seo" },
        { title: "SEO pagine categoria", href: "/academy/category-page-seo" },
        { title: "Link interni", href: "/academy/internal-linking-for-stores" },
      ]},
      { title: "SEO tecnica", count: "8 lezioni", description: "Architettura, velocita, dati strutturati.", href: "/academy/site-architecture-for-ecommerce", topics: [
        { title: "Ottimizzazione velocita", href: "/academy/site-speed-optimization" },
        { title: "Dati strutturati", href: "/academy/structured-data-for-products" },
        { title: "Navigazione a faccette", href: "/academy/faceted-navigation-seo" },
      ]},
      { title: "Link Building", count: "6 lezioni", description: "Digital PR, guest post, link rotti.", href: "/academy/backlink-fundamentals-for-ecommerce", topics: [
        { title: "Digital PR e-commerce", href: "/academy/digital-pr-for-ecommerce" },
        { title: "Broken Link Building", href: "/academy/broken-link-building" },
        { title: "Guest posting", href: "/academy/guest-posting-for-ecommerce" },
      ]},
      { title: "Guide piattaforma", count: "5 lezioni", description: "Shopify, WooCommerce, Magento, BigCommerce.", href: "/academy/shopify-seo-guide", topics: [
        { title: "Guida SEO Shopify", href: "/academy/shopify-seo-guide" },
        { title: "Guida SEO WooCommerce", href: "/academy/woocommerce-seo-guide" },
        { title: "Guida SEO Magento", href: "/academy/magento-seo-guide" },
      ]},
    ],
  },
  nl: {
    badge: "Academy",
    heading: "66 gratis lessen over e-commerce SEO. *Geen opvulling.*",
    subtext: "We schreven het handboek dat we zelf hadden willen hebben. Georganiseerd op niveau.",
    cta: "Bekijk de volledige Academy",
    clusters: [
      { title: "Zoekfundamenten", count: "7 lessen", description: "Hoe Google e-commerce sites crawlt en rankt.", href: "/academy/introduction-to-ecommerce-seo", topics: [
        { title: "Hoe Google webshops vindt", href: "/academy/how-google-finds-online-stores" },
        { title: "E-commerce ranking factoren", href: "/academy/ecommerce-ranking-factors" },
        { title: "Crawling & indexering", href: "/academy/crawling-and-indexing-product-pages" },
      ]},
      { title: "Zoekwoordonderzoek", count: "7 lessen", description: "Keywords vinden die omzet genereren.", href: "/academy/keyword-research-for-ecommerce", topics: [
        { title: "Koopintentie vs volume", href: "/academy/buyer-intent-vs-search-volume" },
        { title: "Concurrentieanalyse", href: "/academy/competitor-keyword-analysis" },
        { title: "Keyword-mapping", href: "/academy/keyword-mapping-for-stores" },
      ]},
      { title: "On-Page SEO", count: "8 lessen", description: "Productpagina's, categoriepagina's, title tags.", href: "/academy/product-page-seo", topics: [
        { title: "Productpagina-SEO", href: "/academy/product-page-seo" },
        { title: "Categoriepagina-SEO", href: "/academy/category-page-seo" },
        { title: "Interne links", href: "/academy/internal-linking-for-stores" },
      ]},
      { title: "Technische SEO", count: "8 lessen", description: "Architectuur, snelheid, structured data.", href: "/academy/site-architecture-for-ecommerce", topics: [
        { title: "Snelheidsoptimalisatie", href: "/academy/site-speed-optimization" },
        { title: "Structured data", href: "/academy/structured-data-for-products" },
        { title: "Facetnavigatie", href: "/academy/faceted-navigation-seo" },
      ]},
      { title: "Linkbuilding", count: "6 lessen", description: "Digital PR, gastblogs, broken links.", href: "/academy/backlink-fundamentals-for-ecommerce", topics: [
        { title: "Digital PR e-commerce", href: "/academy/digital-pr-for-ecommerce" },
        { title: "Broken Link Building", href: "/academy/broken-link-building" },
        { title: "Gastblogs", href: "/academy/guest-posting-for-ecommerce" },
      ]},
      { title: "Platform-gidsen", count: "5 lessen", description: "Shopify, WooCommerce, Magento, BigCommerce.", href: "/academy/shopify-seo-guide", topics: [
        { title: "Shopify SEO-gids", href: "/academy/shopify-seo-guide" },
        { title: "WooCommerce SEO-gids", href: "/academy/woocommerce-seo-guide" },
        { title: "Magento SEO-gids", href: "/academy/magento-seo-guide" },
      ]},
    ],
  },
};
