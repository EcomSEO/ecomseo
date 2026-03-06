import type { Locale } from "../config";

/* --- Hero --- */
export const resourcesHeroT: Record<Locale, {
  badge: string;
  heading: string;
}> = {
  en: {
    badge: "Resources / Learning Centre",
    heading: "Industry's best resources about SEO For Ecommerce Brands",
  },
  de: {
    badge: "Ressourcen / Lernzentrum",
    heading: "Die besten Ressourcen der Branche rund um SEO für E-Commerce-Marken",
  },
  fr: {
    badge: "Ressources / Centre de formation",
    heading: "Les meilleures ressources du secteur sur le SEO pour les marques e-commerce",
  },
  es: {
    badge: "Recursos / Centro de aprendizaje",
    heading: "Los mejores recursos del sector sobre SEO para marcas e-commerce",
  },
  it: {
    badge: "Risorse / Centro formazione",
    heading: "Le migliori risorse del settore sulla SEO per brand e-commerce",
  },
  nl: {
    badge: "Bronnen / Kenniscentrum",
    heading: "De beste bronnen uit de branche over SEO voor e-commercemerken",
  },
};

/* --- Fabian Bio Card --- */
export const fabianCardT: Record<Locale, {
  name: string;
  role: string;
  heading: string;
  bio: string;
}> = {
  en: {
    name: "Fabian van Til",
    role: "Founder & Strategy Lead",
    heading: "The Ecommerce-focused SEO Guy who also Owns Brands",
    bio: "I run & operate in two 7+ figure D2C ecom brands and obsess over turning traffic into profit. At EcomSEO, I combine first-hand store-owner experience with data-driven SEO to help ecommerce brands scale organic revenue.",
  },
  de: {
    name: "Fabian van Til",
    role: "Gründer & Strategieleiter",
    heading: "Der E-Commerce-fokussierte SEO-Experte, der selbst Marken besitzt",
    bio: "Ich betreibe zwei D2C-E-Commerce-Marken im siebenstelligen Bereich und bin besessen davon, Traffic in Gewinn umzuwandeln. Bei EcomSEO verbinde ich meine Erfahrung als Shopbetreiber mit datengetriebenem SEO, um E-Commerce-Marken beim Skalieren organischer Umsätze zu helfen.",
  },
  fr: {
    name: "Fabian van Til",
    role: "Fondateur & Responsable stratégie",
    heading: "L'expert SEO e-commerce qui est aussi proprietaire de marques",
    bio: "Je dirige deux marques D2C e-commerce a plus de 7 chiffres et je suis obsede par la conversion du trafic en profit. Chez EcomSEO, je combine mon experience directe de proprietaire de boutique avec un SEO axe sur les donnees pour aider les marques e-commerce a developper leur chiffre d'affaires organique.",
  },
  es: {
    name: "Fabian van Til",
    role: "Fundador y Director de estrategia",
    heading: "El experto en SEO para e-commerce que tambien es propietario de marcas",
    bio: "Dirijo y opero dos marcas D2C de e-commerce con facturacion de mas de 7 cifras y me obsesiona convertir el trafico en beneficio. En EcomSEO, combino mi experiencia directa como propietario de tienda con SEO basado en datos para ayudar a las marcas e-commerce a escalar sus ingresos organicos.",
  },
  it: {
    name: "Fabian van Til",
    role: "Fondatore e Responsabile strategia",
    heading: "L'esperto SEO e-commerce che possiede anche brand propri",
    bio: "Gestisco due brand D2C e-commerce con fatturato a 7+ cifre e sono ossessionato dal trasformare il traffico in profitto. In EcomSEO, combino la mia esperienza diretta come proprietario di store con una SEO basata sui dati per aiutare i brand e-commerce a scalare i ricavi organici.",
  },
  nl: {
    name: "Fabian van Til",
    role: "Oprichter & Strategieleider",
    heading: "De e-commerce-gerichte SEO-expert die ook merken bezit",
    bio: "Ik run twee D2C e-commercemerken met een 7+-cijferige omzet en ben geobsedeerd door het omzetten van verkeer in winst. Bij EcomSEO combineer ik mijn eerstehands ervaring als webshop-eigenaar met datagedreven SEO om e-commercemerken te helpen organische omzet te schalen.",
  },
};

/* --- Recent Articles --- */
export const recentArticlesT: Record<Locale, {
  sectionTitle: string;
  articles: { title: string; description: string }[];
}> = {
  en: {
    sectionTitle: "Recent Articles",
    articles: [
      {
        title: "The Complete Ecommerce SEO Checklist for 2025",
        description: "Everything you need to audit and optimize your online store for organic search.",
      },
      {
        title: "How Search & Product Discovery Works",
        description: "Understand how customers find products through search and how to optimize for discovery.",
      },
      {
        title: "Why We Share So Much Knowledge",
        description: "Learn why we share so much free knowledge and resources with the ecommerce community.",
      },
    ],
  },
  de: {
    sectionTitle: "Aktuelle Artikel",
    articles: [
      {
        title: "Die vollständige E-Commerce-SEO-Checkliste für 2025",
        description: "Alles, was Sie brauchen, um Ihren Online-Shop für die organische Suche zu prüfen und zu optimieren.",
      },
      {
        title: "Wie Suche und Produktentdeckung funktioniert",
        description: "Verstehen Sie, wie Kunden Produkte über die Suche finden und wie Sie die Auffindbarkeit optimieren.",
      },
      {
        title: "Warum wir so viel Wissen teilen",
        description: "Erfahren Sie, warum wir so viel kostenloses Wissen und Ressourcen mit der E-Commerce-Community teilen.",
      },
    ],
  },
  fr: {
    sectionTitle: "Articles recents",
    articles: [
      {
        title: "La checklist SEO e-commerce complete pour 2025",
        description: "Tout ce dont vous avez besoin pour auditer et optimiser votre boutique en ligne pour le referencement naturel.",
      },
      {
        title: "Comment fonctionnent la recherche et la decouverte de produits",
        description: "Comprenez comment les clients trouvent des produits via la recherche et comment optimiser la decouverte.",
      },
      {
        title: "Pourquoi nous partageons autant",
        description: "Decouvrez pourquoi nous partageons autant de connaissances gratuites avec la communaute e-commerce.",
      },
    ],
  },
  es: {
    sectionTitle: "Articulos recientes",
    articles: [
      {
        title: "La checklist completa de SEO e-commerce para 2025",
        description: "Todo lo que necesitas para auditar y optimizar tu tienda online para la busqueda organica.",
      },
      {
        title: "Como funciona la busqueda y el descubrimiento de productos",
        description: "Entiende como los clientes encuentran productos a traves de la busqueda y como optimizar la visibilidad.",
      },
      {
        title: "Por que compartimos tanto conocimiento",
        description: "Descubre por que compartimos tanto conocimiento y recursos gratuitos con la comunidad de ecommerce.",
      },
    ],
  },
  it: {
    sectionTitle: "Articoli recenti",
    articles: [
      {
        title: "La checklist SEO e-commerce completa per il 2025",
        description: "Tutto cio di cui hai bisogno per verificare e ottimizzare il tuo negozio online per la ricerca organica.",
      },
      {
        title: "Come funzionano la ricerca e la scoperta dei prodotti",
        description: "Scopri come i clienti trovano i prodotti tramite la ricerca e come ottimizzare la visibilita.",
      },
      {
        title: "Perché condividiamo così tanta conoscenza",
        description: "Scopri perché condividiamo così tante risorse gratuite con la comunità ecommerce.",
      },
    ],
  },
  nl: {
    sectionTitle: "Recente artikelen",
    articles: [
      {
        title: "De complete e-commerce SEO-checklist voor 2025",
        description: "Alles wat je nodig hebt om je webshop te auditen en te optimaliseren voor organisch zoekverkeer.",
      },
      {
        title: "Hoe zoeken en productontdekking werkt",
        description: "Begrijp hoe klanten producten vinden via zoekmachines en hoe je de vindbaarheid optimaliseert.",
      },
      {
        title: "Waarom wij zoveel kennis delen",
        description: "Ontdek waarom wij zoveel gratis kennis en hulpbronnen delen met de ecommerce community.",
      },
    ],
  },
};

/* --- Resource Library Section --- */
export const resourceLibraryT: Record<Locale, {
  badge: string;
  heading: string;
  body: string;
  cta: string;
}> = {
  en: {
    badge: "Resource Library",
    heading: "Tools, Templates & Guides related to SEO to boost e-commerce",
    body: "The best ecommerce SEO resources on planet earth.",
    cta: "All resources",
  },
  de: {
    badge: "Ressourcen-Bibliothek",
    heading: "Tools, Vorlagen und Leitfäden rund um SEO für den E-Commerce",
    body: "Die besten E-Commerce-SEO-Ressourcen auf diesem Planeten.",
    cta: "Alle Ressourcen",
  },
  fr: {
    badge: "Bibliotheque de ressources",
    heading: "Outils, modeles et guides SEO pour booster le e-commerce",
    body: "Les meilleures ressources SEO e-commerce au monde.",
    cta: "Toutes les ressources",
  },
  es: {
    badge: "Biblioteca de recursos",
    heading: "Herramientas, plantillas y guias de SEO para impulsar el e-commerce",
    body: "Los mejores recursos de SEO e-commerce del planeta.",
    cta: "Todos los recursos",
  },
  it: {
    badge: "Libreria risorse",
    heading: "Strumenti, template e guide SEO per potenziare l'e-commerce",
    body: "Le migliori risorse SEO e-commerce al mondo.",
    cta: "Tutte le risorse",
  },
  nl: {
    badge: "Bronnenbibliotheek",
    heading: "Tools, templates en gidsen over SEO om e-commerce te boosten",
    body: "De beste e-commerce SEO-bronnen ter wereld.",
    cta: "Alle bronnen",
  },
};

/* --- Ecommerce SEO Guides Section --- */
export const guidesCtaT: Record<Locale, {
  badge: string;
  heading: string;
  body: string;
  cta: string;
}> = {
  en: {
    badge: "Ecommerce SEO Guides",
    heading: "Practical guides & step-by-step workflows about Ecommerce SEO",
    body: "Gotcha's for your SEO journey.",
    cta: "Go to guides",
  },
  de: {
    badge: "E-Commerce-SEO-Leitfäden",
    heading: "Praktische Leitfäden und Schritt-für-Schritt-Workflows für E-Commerce-SEO",
    body: "Stolperfallen auf Ihrer SEO-Reise.",
    cta: "Zu den Leitfäden",
  },
  fr: {
    badge: "Guides SEO e-commerce",
    heading: "Guides pratiques et workflows etape par etape sur le SEO e-commerce",
    body: "Les pieges a eviter dans votre parcours SEO.",
    cta: "Voir les guides",
  },
  es: {
    badge: "Guias de SEO e-commerce",
    heading: "Guias practicas y flujos de trabajo paso a paso sobre SEO e-commerce",
    body: "Trampas en tu camino SEO.",
    cta: "Ir a las guias",
  },
  it: {
    badge: "Guide SEO e-commerce",
    heading: "Guide pratiche e workflow passo dopo passo sulla SEO e-commerce",
    body: "Le insidie nel tuo percorso SEO.",
    cta: "Vai alle guide",
  },
  nl: {
    badge: "E-commerce SEO-gidsen",
    heading: "Praktische gidsen en stapsgewijze workflows over e-commerce SEO",
    body: "Valkuilen op je SEO-reis.",
    cta: "Naar de gidsen",
  },
};

/* --- Newsletter CTA --- */
export const newsletterT: Record<Locale, {
  heading: string;
  body: string;
  placeholder: string;
  cta: string;
  benefits: string[];
}> = {
  en: {
    heading: "Get Industry-Leading Ecommerce SEO insights in your email",
    body: "We don't have a sales team. We just share what works. Subscribe and get actionable ecommerce SEO insights delivered to your inbox.",
    placeholder: "Enter your email",
    cta: "Subscribe",
    benefits: [
      "Ecommerce SEO focused updates",
      "Discover latest SEO methods before they go viral",
      "Insights about agency's SEO experiments",
    ],
  },
  de: {
    heading: "Branchenführende E-Commerce-SEO-Insights per E-Mail erhalten",
    body: "Wir haben kein Vertriebsteam. Wir teilen einfach, was funktioniert. Abonnieren Sie und erhalten Sie umsetzbare E-Commerce-SEO-Insights direkt in Ihr Postfach.",
    placeholder: "E-Mail-Adresse eingeben",
    cta: "Abonnieren",
    benefits: [
      "Updates mit Fokus auf E-Commerce-SEO",
      "Neueste SEO-Methoden entdecken, bevor sie viral gehen",
      "Einblicke in die SEO-Experimente unserer Agentur",
    ],
  },
  fr: {
    heading: "Recevez les meilleurs insights SEO e-commerce par e-mail",
    body: "Nous n'avons pas d'equipe commerciale. Nous partageons simplement ce qui fonctionne. Abonnez-vous et recevez des insights SEO e-commerce concrets dans votre boite mail.",
    placeholder: "Entrez votre e-mail",
    cta: "S'abonner",
    benefits: [
      "Actualites centrees sur le SEO e-commerce",
      "Decouvrez les dernieres methodes SEO avant qu'elles ne deviennent virales",
      "Apercu des experiences SEO de l'agence",
    ],
  },
  es: {
    heading: "Recibe los mejores insights de SEO e-commerce en tu correo",
    body: "No tenemos equipo de ventas. Simplemente compartimos lo que funciona. Suscribete y recibe insights accionables de SEO e-commerce en tu bandeja de entrada.",
    placeholder: "Introduce tu email",
    cta: "Suscribirme",
    benefits: [
      "Actualizaciones enfocadas en SEO e-commerce",
      "Descubre los ultimos metodos SEO antes de que se hagan virales",
      "Perspectivas sobre los experimentos SEO de la agencia",
    ],
  },
  it: {
    heading: "Ricevi i migliori insight SEO e-commerce nella tua email",
    body: "Non abbiamo un team commerciale. Condividiamo semplicemente cio che funziona. Iscriviti e ricevi insight SEO e-commerce concreti nella tua casella di posta.",
    placeholder: "Inserisci la tua email",
    cta: "Iscriviti",
    benefits: [
      "Aggiornamenti focalizzati sulla SEO e-commerce",
      "Scopri i metodi SEO piu recenti prima che diventino virali",
      "Approfondimenti sugli esperimenti SEO dell'agenzia",
    ],
  },
  nl: {
    heading: "Ontvang toonaangevende e-commerce SEO-inzichten in je inbox",
    body: "We hebben geen salesteam. We delen gewoon wat werkt. Abonneer je en ontvang bruikbare e-commerce SEO-inzichten rechtstreeks in je inbox.",
    placeholder: "Vul je e-mailadres in",
    cta: "Abonneren",
    benefits: [
      "Updates gericht op e-commerce SEO",
      "Ontdek de nieuwste SEO-methoden voordat ze viraal gaan",
      "Inzichten in de SEO-experimenten van ons bureau",
    ],
  },
};
