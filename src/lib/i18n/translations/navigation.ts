import type { Locale } from "../config";

export const navigationTranslations: Record<Locale, {
  ecommerceSeo: string;
  resources: string;
  cases: string;
  blog: string;
  clientDashboard: string;
  getInTouch: string;
  megaMenuHeading: string;
  ourFramework: string;
  byServiceType: string;
  byPlatform: string;
  byIndustry: string;
  seeMoreServices: string;
  seeMorePlatforms: string;
  seeMoreIndustries: string;
  services: {
    label: string;
    desc: string;
    href: string;
  }[];
  resourceLinks: {
    label: string;
    desc: string;
    href: string;
  }[];
}> = {
  en: {
    ecommerceSeo: "Ecommerce SEO",
    resources: "Resources",
    cases: "Cases",
    blog: "Blog",
    clientDashboard: "Client Dashboard",
    getInTouch: "Get in Touch",
    megaMenuHeading: "We do SEO for ecommerce sites",
    ourFramework: "Our Framework",
    byServiceType: "By service type",
    byPlatform: "By platform",
    byIndustry: "By industry",
    seeMoreServices: "See more services",
    seeMorePlatforms: "See more platforms",
    seeMoreIndustries: "See more industries",
    services: [
      { label: "Link Building", desc: "Build real off-page authority for your site", href: "/link-building" },
      { label: "Keyword Research", desc: "Fundamentals of any SEO strategy", href: "/keyword-research" },
      { label: "Shopify (Plus)", desc: "Our Chef's Special. We know Shopify.", href: "/shopify-seo" },
      { label: "Adobe Commerce", desc: "Previously Magento", href: "/adobe-commerce-seo" },
      { label: "Fashion", desc: "Every fashionista wants some more eyeballs", href: "/fashion-seo" },
      { label: "Beauty", desc: "Make more people feel better", href: "/beauty-seo" },
      { label: "Amazon SEO", desc: "Get on top of Amazon with your brand", href: "/amazon-seo" },
      { label: "Content Writing", desc: "SEO optimized content for your store", href: "/content-writing" },
      { label: "Woocommerce", desc: "The golden standard for old-school SEO", href: "/woocommerce-seo" },
      { label: "Bigcommerce", desc: "Many SKU's? No worries, we got it covered", href: "/bigcommerce-seo" },
      { label: "Consumables", desc: "Increase LTV and decrease churn with SEO", href: "/consumables-seo" },
      { label: "Toys", desc: "A kid's dream! Most parent's nightmare", href: "/toys-seo" },
    ],
    resourceLinks: [
      { label: "Library", desc: "Free tools, templates & guides", href: "/resources/library" },
      { label: "Guides", desc: "\u201CGotcha\u2019s\u201D for your SEO journey", href: "/guides" },
      { label: "Solutions", desc: "EcomSEO\u2019s picks to help you scale", href: "/resources/solutions" },
    ],
  },
  de: {
    ecommerceSeo: "E-Commerce SEO",
    resources: "Ressourcen",
    cases: "Referenzen",
    blog: "Blog",
    clientDashboard: "Kunden-Dashboard",
    getInTouch: "Kontakt aufnehmen",
    megaMenuHeading: "Wir machen SEO für E-Commerce-Shops",
    ourFramework: "Unser Framework",
    byServiceType: "Nach Service-Typ",
    byPlatform: "Nach Plattform",
    byIndustry: "Nach Branche",
    seeMoreServices: "Mehr Services",
    seeMorePlatforms: "Mehr Plattformen",
    seeMoreIndustries: "Mehr Branchen",
    services: [
      { label: "Linkaufbau", desc: "Echte Off-Page-Autorität für Ihre Website aufbauen", href: "/link-building" },
      { label: "Keyword-Recherche", desc: "Die Grundlage jeder SEO-Strategie", href: "/keyword-research" },
      { label: "Shopify (Plus)", desc: "Unser Spezialgebiet. Wir kennen Shopify.", href: "/shopify-seo" },
      { label: "Adobe Commerce", desc: "Früher Magento", href: "/adobe-commerce-seo" },
      { label: "Mode", desc: "Jede Fashionista möchte mehr Aufmerksamkeit", href: "/fashion-seo" },
      { label: "Beauty", desc: "Mehr Menschen ein besseres Gefühl geben", href: "/beauty-seo" },
      { label: "Amazon SEO", desc: "Mit Ihrer Marke an die Spitze von Amazon", href: "/amazon-seo" },
      { label: "Content-Erstellung", desc: "SEO-optimierte Inhalte für Ihren Shop", href: "/content-writing" },
      { label: "WooCommerce", desc: "Der Goldstandard für klassisches SEO", href: "/woocommerce-seo" },
      { label: "BigCommerce", desc: "Viele SKUs? Kein Problem, wir kümmern uns darum", href: "/bigcommerce-seo" },
      { label: "Konsumgüter", desc: "LTV steigern und Abwanderung mit SEO reduzieren", href: "/consumables-seo" },
      { label: "Spielzeug", desc: "Ein Kindertraum! Der Albtraum der meisten Eltern", href: "/toys-seo" },
    ],
    resourceLinks: [
      { label: "Bibliothek", desc: "Kostenlose Tools, Vorlagen & Leitfäden", href: "/resources/library" },
      { label: "Leitfäden", desc: "Stolperfallen auf Ihrer SEO-Reise", href: "/guides" },
      { label: "Lösungen", desc: "EcomSEOs Auswahl, um Ihnen beim Skalieren zu helfen", href: "/resources/solutions" },
    ],
  },
  fr: {
    ecommerceSeo: "SEO E-commerce",
    resources: "Ressources",
    cases: "Études de cas",
    blog: "Blog",
    clientDashboard: "Tableau de bord client",
    getInTouch: "Nous contacter",
    megaMenuHeading: "Nous faisons du SEO pour les e-commerces",
    ourFramework: "Notre approche",
    byServiceType: "Par type de service",
    byPlatform: "Par plateforme",
    byIndustry: "Par secteur",
    seeMoreServices: "Voir plus de services",
    seeMorePlatforms: "Voir plus de plateformes",
    seeMoreIndustries: "Voir plus de secteurs",
    services: [
      { label: "Link Building", desc: "Construisez une vraie autorité off-page pour votre site", href: "/link-building" },
      { label: "Recherche de mots-clés", desc: "Les fondamentaux de toute stratégie SEO", href: "/keyword-research" },
      { label: "Shopify (Plus)", desc: "Notre spécialité. Nous connaissons Shopify.", href: "/shopify-seo" },
      { label: "Adobe Commerce", desc: "Anciennement Magento", href: "/adobe-commerce-seo" },
      { label: "Mode", desc: "Chaque passionné de mode veut plus de visibilité", href: "/fashion-seo" },
      { label: "Beauté", desc: "Aider plus de personnes à se sentir mieux", href: "/beauty-seo" },
      { label: "Amazon SEO", desc: "Propulsez votre marque au sommet d'Amazon", href: "/amazon-seo" },
      { label: "Rédaction de contenu", desc: "Contenu optimisé pour le SEO de votre boutique", href: "/content-writing" },
      { label: "WooCommerce", desc: "Le standard de référence du SEO classique", href: "/woocommerce-seo" },
      { label: "BigCommerce", desc: "Beaucoup de SKUs ? Pas de souci, on gère", href: "/bigcommerce-seo" },
      { label: "Consommables", desc: "Augmentez la LTV et réduisez le churn avec le SEO", href: "/consumables-seo" },
      { label: "Jouets", desc: "Le rêve des enfants ! Le cauchemar des parents", href: "/toys-seo" },
    ],
    resourceLinks: [
      { label: "Bibliothèque", desc: "Outils gratuits, modèles et guides", href: "/resources/library" },
      { label: "Guides", desc: "Les pièges à éviter dans votre parcours SEO", href: "/guides" },
      { label: "Solutions", desc: "Les choix d'EcomSEO pour vous aider à grandir", href: "/resources/solutions" },
    ],
  },
  es: {
    ecommerceSeo: "SEO E-commerce",
    resources: "Recursos",
    cases: "Casos de éxito",
    blog: "Blog",
    clientDashboard: "Panel de cliente",
    getInTouch: "Contáctenos",
    megaMenuHeading: "Hacemos SEO para tiendas e-commerce",
    ourFramework: "Nuestro framework",
    byServiceType: "Por tipo de servicio",
    byPlatform: "Por plataforma",
    byIndustry: "Por industria",
    seeMoreServices: "Ver más servicios",
    seeMorePlatforms: "Ver más plataformas",
    seeMoreIndustries: "Ver más industrias",
    services: [
      { label: "Link Building", desc: "Construye autoridad off-page real para tu sitio", href: "/link-building" },
      { label: "Investigación de palabras clave", desc: "Los fundamentos de toda estrategia SEO", href: "/keyword-research" },
      { label: "Shopify (Plus)", desc: "Nuestra especialidad. Conocemos Shopify.", href: "/shopify-seo" },
      { label: "Adobe Commerce", desc: "Anteriormente Magento", href: "/adobe-commerce-seo" },
      { label: "Moda", desc: "Toda fashionista quiere más visibilidad", href: "/fashion-seo" },
      { label: "Belleza", desc: "Haz que más personas se sientan mejor", href: "/beauty-seo" },
      { label: "Amazon SEO", desc: "Lleva tu marca a la cima de Amazon", href: "/amazon-seo" },
      { label: "Redacción de contenido", desc: "Contenido optimizado para SEO de tu tienda", href: "/content-writing" },
      { label: "WooCommerce", desc: "El estándar de oro del SEO clásico", href: "/woocommerce-seo" },
      { label: "BigCommerce", desc: "¿Muchos SKUs? Sin problema, nos encargamos", href: "/bigcommerce-seo" },
      { label: "Consumibles", desc: "Aumenta el LTV y reduce el churn con SEO", href: "/consumables-seo" },
      { label: "Juguetes", desc: "¡El sueño de los niños! La pesadilla de los padres", href: "/toys-seo" },
    ],
    resourceLinks: [
      { label: "Biblioteca", desc: "Herramientas gratuitas, plantillas y guías", href: "/resources/library" },
      { label: "Guías", desc: "Trampas a evitar en tu camino SEO", href: "/guides" },
      { label: "Soluciones", desc: "Las recomendaciones de EcomSEO para escalar", href: "/resources/solutions" },
    ],
  },
  it: {
    ecommerceSeo: "SEO E-commerce",
    resources: "Risorse",
    cases: "Casi studio",
    blog: "Blog",
    clientDashboard: "Dashboard cliente",
    getInTouch: "Contattaci",
    megaMenuHeading: "Facciamo SEO per l'e-commerce",
    ourFramework: "Il nostro framework",
    byServiceType: "Per tipo di servizio",
    byPlatform: "Per piattaforma",
    byIndustry: "Per settore",
    seeMoreServices: "Vedi altri servizi",
    seeMorePlatforms: "Vedi altre piattaforme",
    seeMoreIndustries: "Vedi altri settori",
    services: [
      { label: "Link Building", desc: "Costruisci vera autorità off-page per il tuo sito", href: "/link-building" },
      { label: "Ricerca parole chiave", desc: "Le basi di qualsiasi strategia SEO", href: "/keyword-research" },
      { label: "Shopify (Plus)", desc: "La nostra specialità. Conosciamo Shopify.", href: "/shopify-seo" },
      { label: "Adobe Commerce", desc: "Precedentemente Magento", href: "/adobe-commerce-seo" },
      { label: "Moda", desc: "Ogni fashionista vuole più visibilità", href: "/fashion-seo" },
      { label: "Beauty", desc: "Fai sentire meglio più persone", href: "/beauty-seo" },
      { label: "Amazon SEO", desc: "Porta il tuo brand in cima su Amazon", href: "/amazon-seo" },
      { label: "Scrittura contenuti", desc: "Contenuti ottimizzati SEO per il tuo negozio", href: "/content-writing" },
      { label: "WooCommerce", desc: "Lo standard d'oro del SEO classico", href: "/woocommerce-seo" },
      { label: "BigCommerce", desc: "Tanti SKU? Nessun problema, ci pensiamo noi", href: "/bigcommerce-seo" },
      { label: "Beni di consumo", desc: "Aumenta il LTV e riduci il churn con la SEO", href: "/consumables-seo" },
      { label: "Giocattoli", desc: "Il sogno dei bambini! L'incubo dei genitori", href: "/toys-seo" },
    ],
    resourceLinks: [
      { label: "Libreria", desc: "Strumenti gratuiti, modelli e guide", href: "/resources/library" },
      { label: "Guide", desc: "Le insidie nel tuo percorso SEO", href: "/guides" },
      { label: "Soluzioni", desc: "Le scelte di EcomSEO per aiutarti a crescere", href: "/resources/solutions" },
    ],
  },
  nl: {
    ecommerceSeo: "E-commerce SEO",
    resources: "Bronnen",
    cases: "Cases",
    blog: "Blog",
    clientDashboard: "Klanten Dashboard",
    getInTouch: "Neem contact op",
    megaMenuHeading: "Wij doen SEO voor e-commerce winkels",
    ourFramework: "Ons framework",
    byServiceType: "Op servicetype",
    byPlatform: "Op platform",
    byIndustry: "Op sector",
    seeMoreServices: "Meer services",
    seeMorePlatforms: "Meer platformen",
    seeMoreIndustries: "Meer sectoren",
    services: [
      { label: "Linkbuilding", desc: "Bouw echte off-page autoriteit voor je site", href: "/link-building" },
      { label: "Zoekwoordenonderzoek", desc: "De basis van elke SEO-strategie", href: "/keyword-research" },
      { label: "Shopify (Plus)", desc: "Ons specialisme. We kennen Shopify.", href: "/shopify-seo" },
      { label: "Adobe Commerce", desc: "Voorheen Magento", href: "/adobe-commerce-seo" },
      { label: "Mode", desc: "Elke fashionista wil meer aandacht", href: "/fashion-seo" },
      { label: "Beauty", desc: "Laat meer mensen zich beter voelen", href: "/beauty-seo" },
      { label: "Amazon SEO", desc: "Breng je merk naar de top van Amazon", href: "/amazon-seo" },
      { label: "Content schrijven", desc: "SEO-geoptimaliseerde content voor je winkel", href: "/content-writing" },
      { label: "WooCommerce", desc: "De gouden standaard voor klassieke SEO", href: "/woocommerce-seo" },
      { label: "BigCommerce", desc: "Veel SKU's? Geen zorgen, we regelen het", href: "/bigcommerce-seo" },
      { label: "Consumptiegoederen", desc: "Verhoog LTV en verlaag churn met SEO", href: "/consumables-seo" },
      { label: "Speelgoed", desc: "Een kinderdroom! De nachtmerrie van de meeste ouders", href: "/toys-seo" },
    ],
    resourceLinks: [
      { label: "Bibliotheek", desc: "Gratis tools, templates & gidsen", href: "/resources/library" },
      { label: "Gidsen", desc: "Valkuilen op je SEO-reis", href: "/guides" },
      { label: "Oplossingen", desc: "EcomSEO's keuzes om je te helpen schalen", href: "/resources/solutions" },
    ],
  },
};
