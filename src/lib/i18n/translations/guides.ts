import type { Locale } from "../config";

/* ------------------------------------------------------------------ */
/*  Full sidebar navigation (used by GuidesLayout)                     */
/* ------------------------------------------------------------------ */

export type GuideNavItem = { label: string; href: string };
export type GuideNavCategory = { category: string; items: GuideNavItem[] };
export type GuidesFullNav = { categories: GuideNavCategory[] };

export const guidesFullNavT: Record<Locale, GuidesFullNav> = {
  en: {
    categories: [
      {
        category: "Ecommerce SEO basics",
        items: [
          { label: "Introduction", href: "/guides" },
          { label: "SEO fundamentals checklist", href: "/guides/fundamentals" },
        ],
      },
      {
        category: "Keyword and content strategy",
        items: [
          { label: "Ecommerce keyword research", href: "/guides/keyword-research" },
          { label: "Category page SEO", href: "/guides/category-page-seo" },
          { label: "Product page SEO", href: "/guides/product-page-seo" },
        ],
      },
      {
        category: "Technical and link building",
        items: [
          { label: "Technical SEO for ecommerce", href: "/guides/technical-seo" },
          { label: "Ecommerce link building", href: "/guides/link-building" },
        ],
      },
      {
        category: "Auditing",
        items: [
          { label: "Ecommerce SEO audit", href: "/guides/seo-audit" },
        ],
      },
    ],
  },
  de: {
    categories: [
      {
        category: "E-Commerce-SEO-Grundlagen",
        items: [
          { label: "Einfuhrung", href: "/guides" },
          { label: "SEO-Grundlagen-Checkliste", href: "/guides/fundamentals" },
        ],
      },
      {
        category: "Keyword- und Content-Strategie",
        items: [
          { label: "E-Commerce-Keyword-Recherche", href: "/guides/keyword-research" },
          { label: "Kategorieseiten-SEO", href: "/guides/category-page-seo" },
          { label: "Produktseiten-SEO", href: "/guides/product-page-seo" },
        ],
      },
      {
        category: "Technik und Linkaufbau",
        items: [
          { label: "Technisches SEO fur E-Commerce", href: "/guides/technical-seo" },
          { label: "E-Commerce-Linkaufbau", href: "/guides/link-building" },
        ],
      },
      {
        category: "Auditing",
        items: [
          { label: "E-Commerce-SEO-Audit", href: "/guides/seo-audit" },
        ],
      },
    ],
  },
  fr: {
    categories: [
      {
        category: "Bases du SEO e-commerce",
        items: [
          { label: "Introduction", href: "/guides" },
          { label: "Checklist des fondamentaux SEO", href: "/guides/fundamentals" },
        ],
      },
      {
        category: "Strategie de mots-cles et contenu",
        items: [
          { label: "Recherche de mots-cles e-commerce", href: "/guides/keyword-research" },
          { label: "SEO des pages categories", href: "/guides/category-page-seo" },
          { label: "SEO des pages produits", href: "/guides/product-page-seo" },
        ],
      },
      {
        category: "Technique et netlinking",
        items: [
          { label: "SEO technique pour e-commerce", href: "/guides/technical-seo" },
          { label: "Netlinking e-commerce", href: "/guides/link-building" },
        ],
      },
      {
        category: "Audit",
        items: [
          { label: "Audit SEO e-commerce", href: "/guides/seo-audit" },
        ],
      },
    ],
  },
  es: {
    categories: [
      {
        category: "Fundamentos de SEO e-commerce",
        items: [
          { label: "Introduccion", href: "/guides" },
          { label: "Checklist de fundamentos SEO", href: "/guides/fundamentals" },
        ],
      },
      {
        category: "Estrategia de keywords y contenido",
        items: [
          { label: "Keyword research para e-commerce", href: "/guides/keyword-research" },
          { label: "SEO de paginas de categoria", href: "/guides/category-page-seo" },
          { label: "SEO de paginas de producto", href: "/guides/product-page-seo" },
        ],
      },
      {
        category: "Tecnico y link building",
        items: [
          { label: "SEO tecnico para e-commerce", href: "/guides/technical-seo" },
          { label: "Link building para e-commerce", href: "/guides/link-building" },
        ],
      },
      {
        category: "Auditoria",
        items: [
          { label: "Auditoria SEO e-commerce", href: "/guides/seo-audit" },
        ],
      },
    ],
  },
  it: {
    categories: [
      {
        category: "Basi della SEO e-commerce",
        items: [
          { label: "Introduzione", href: "/guides" },
          { label: "Checklist dei fondamentali SEO", href: "/guides/fundamentals" },
        ],
      },
      {
        category: "Strategia keyword e contenuti",
        items: [
          { label: "Keyword research per e-commerce", href: "/guides/keyword-research" },
          { label: "SEO pagine categoria", href: "/guides/category-page-seo" },
          { label: "SEO pagine prodotto", href: "/guides/product-page-seo" },
        ],
      },
      {
        category: "Tecnico e link building",
        items: [
          { label: "SEO tecnico per e-commerce", href: "/guides/technical-seo" },
          { label: "Link building per e-commerce", href: "/guides/link-building" },
        ],
      },
      {
        category: "Audit",
        items: [
          { label: "Audit SEO e-commerce", href: "/guides/seo-audit" },
        ],
      },
    ],
  },
  nl: {
    categories: [
      {
        category: "E-commerce SEO-basiskennis",
        items: [
          { label: "Introductie", href: "/guides" },
          { label: "SEO-basischecklist", href: "/guides/fundamentals" },
        ],
      },
      {
        category: "Keyword- en contentstrategie",
        items: [
          { label: "E-commerce keyword research", href: "/guides/keyword-research" },
          { label: "SEO voor categoriepagina's", href: "/guides/category-page-seo" },
          { label: "SEO voor productpagina's", href: "/guides/product-page-seo" },
        ],
      },
      {
        category: "Techniek en linkbuilding",
        items: [
          { label: "Technische SEO voor e-commerce", href: "/guides/technical-seo" },
          { label: "E-commerce linkbuilding", href: "/guides/link-building" },
        ],
      },
      {
        category: "Auditing",
        items: [
          { label: "E-commerce SEO-audit", href: "/guides/seo-audit" },
        ],
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Legacy exports (still used by intro page)                          */
/* ------------------------------------------------------------------ */

export const guidesNavT: Record<Locale, {
  category: string;
  introLabel: string;
  fundamentalsLabel: string;
}> = {
  en: { category: "Ecommerce SEO basics", introLabel: "Introduction", fundamentalsLabel: "SEO fundamentals checklist" },
  de: { category: "E-Commerce-SEO-Grundlagen", introLabel: "Einfuhrung", fundamentalsLabel: "SEO-Grundlagen-Checkliste" },
  fr: { category: "Bases du SEO e-commerce", introLabel: "Introduction", fundamentalsLabel: "Checklist des fondamentaux SEO" },
  es: { category: "Fundamentos de SEO e-commerce", introLabel: "Introduccion", fundamentalsLabel: "Checklist de fundamentos SEO" },
  it: { category: "Basi della SEO e-commerce", introLabel: "Introduzione", fundamentalsLabel: "Checklist dei fondamentali SEO" },
  nl: { category: "E-commerce SEO-basiskennis", introLabel: "Introductie", fundamentalsLabel: "SEO-basischecklist" },
};

/* --- Intro page content --- */
export const guidesIntroT: Record<Locale, {
  breadcrumb: string;
  heading: string;
  bodyParagraph: string;
  expectHeading: string;
  expectBody: string;
  features: string[];
  nextUp: string;
  nextCategory: string;
  nextTitle: string;
  crashCoursePrompt: string;
  crashCourseLink: string;
  talkPrompt: string;
  talkLink: string;
}> = {
  en: {
    breadcrumb: "Ecommerce SEO basics",
    heading: "Introduction",
    bodyParagraph: "Our guides have been publicly available since Q2 2025. We hope you find something useful for your store. If you have any suggestions, they are more than welcome on",
    expectHeading: "What you should be expecting",
    expectBody: "It's a fair trade. We give you knowledge. You spend time on our site. This signals to Google you like our information \u2192 we rank higher = SEO!",
    features: [
      "In-depth ecommerce SEO strategies",
      "Step-by-step workflows you can implement today",
      "Real data and case examples from our client work",
      "Regularly updated content as SEO evolves",
      "No gatekeeping, everything we know, shared openly",
    ],
    nextUp: "Next up",
    nextCategory: "Ecommerce SEO basics",
    nextTitle: "SEO fundamentals checklist",
    crashCoursePrompt: "Want the crash course?",
    crashCourseLink: "Start here",
    talkPrompt: "Ready to talk?",
    talkLink: "Get a Free Proposal",
  },
  de: {
    breadcrumb: "E-Commerce-SEO-Grundlagen",
    heading: "Einfuhrung",
    bodyParagraph: "Unsere Leitfaden sind seit Q2 2025 offentlich verfugbar. Wir hoffen, dass Sie hier etwas Nutzliches fur Ihren Shop finden. Falls Sie Vorschlage haben, sind diese herzlich willkommen unter",
    expectHeading: "Was Sie erwarten konnen",
    expectBody: "Ein fairer Tausch. Wir geben Ihnen Wissen. Sie verbringen Zeit auf unserer Seite. Das signalisiert Google, dass Ihnen unsere Inhalte gefallen \u2192 wir ranken hoher = SEO!",
    features: [
      "Detaillierte E-Commerce-SEO-Strategien",
      "Schritt-fur-Schritt-Workflows, die Sie sofort umsetzen konnen",
      "Echte Daten und Fallbeispiele aus unserer Kundenarbeit",
      "Regelmasig aktualisierte Inhalte, wenn sich SEO weiterentwickelt",
      "Kein Gatekeeping, alles, was wir wissen, offen geteilt",
    ],
    nextUp: "Als Nachstes",
    nextCategory: "E-Commerce-SEO-Grundlagen",
    nextTitle: "SEO-Grundlagen-Checkliste",
    crashCoursePrompt: "Sie mochten den Schnellkurs?",
    crashCourseLink: "Hier starten",
    talkPrompt: "Bereit fur ein Gesprach?",
    talkLink: "Kontakt aufnehmen",
  },
  fr: {
    breadcrumb: "Bases du SEO e-commerce",
    heading: "Introduction",
    bodyParagraph: "Nos guides sont accessibles publiquement depuis le T2 2025. Nous esperons que vous y trouverez quelque chose d'utile pour votre boutique. Si vous avez des suggestions, elles sont les bienvenues a",
    expectHeading: "Ce que vous pouvez attendre",
    expectBody: "C'est un echange equitable. Nous vous donnons le savoir. Vous passez du temps sur notre site. Google comprend que vous aimez nos contenus \u2192 nous montons dans les resultats = SEO !",
    features: [
      "Strategies SEO e-commerce detaillees",
      "Workflows etape par etape a mettre en oeuvre des aujourd'hui",
      "Donnees reelles et exemples concrets issus de notre travail client",
      "Contenu regulierement mis a jour au fil de l'evolution du SEO",
      "Aucune retention d'information, tout ce que nous savons, partage ouvertement",
    ],
    nextUp: "A suivre",
    nextCategory: "Bases du SEO e-commerce",
    nextTitle: "Checklist des fondamentaux SEO",
    crashCoursePrompt: "Vous voulez la version acceleree ?",
    crashCourseLink: "Commencez ici",
    talkPrompt: "Pret a echanger ?",
    talkLink: "Contactez-nous",
  },
  es: {
    breadcrumb: "Fundamentos de SEO e-commerce",
    heading: "Introduccion",
    bodyParagraph: "Nuestras guias estan disponibles publicamente desde el T2 2025. Esperamos que encuentres algo util para tu tienda. Si tienes sugerencias, son bienvenidas en",
    expectHeading: "Que puedes esperar",
    expectBody: "Es un intercambio justo. Te damos conocimiento. Tu pasas tiempo en nuestro sitio. Esto le indica a Google que te gusta nuestra informacion \u2192 subimos en el ranking = SEO!",
    features: [
      "Estrategias de SEO e-commerce en profundidad",
      "Flujos de trabajo paso a paso que puedes implementar hoy",
      "Datos reales y casos practicos de nuestro trabajo con clientes",
      "Contenido actualizado regularmente a medida que el SEO evoluciona",
      "Sin restricciones, todo lo que sabemos, compartido abiertamente",
    ],
    nextUp: "Siguiente",
    nextCategory: "Fundamentos de SEO e-commerce",
    nextTitle: "Checklist de fundamentos SEO",
    crashCoursePrompt: "Quieres la version resumida?",
    crashCourseLink: "Empieza aqui",
    talkPrompt: "Listo para hablar?",
    talkLink: "Contactanos",
  },
  it: {
    breadcrumb: "Basi della SEO e-commerce",
    heading: "Introduzione",
    bodyParagraph: "Le nostre guide sono disponibili pubblicamente dal Q2 2025. Speriamo che tu possa trovare qualcosa di utile per il tuo negozio. Se hai suggerimenti, sono piu che benvenuti su",
    expectHeading: "Cosa aspettarti",
    expectBody: "E' uno scambio equo. Noi ti diamo conoscenza. Tu passi del tempo sul nostro sito. Questo segnala a Google che apprezzi i nostri contenuti \u2192 ci posizioniamo meglio = SEO!",
    features: [
      "Strategie SEO e-commerce dettagliate",
      "Workflow passo dopo passo da implementare subito",
      "Dati reali e casi studio dal nostro lavoro con i clienti",
      "Contenuti aggiornati regolarmente man mano che la SEO evolve",
      "Nessuna restrizione, tutto cio che sappiamo, condiviso apertamente",
    ],
    nextUp: "Prossimo",
    nextCategory: "Basi della SEO e-commerce",
    nextTitle: "Checklist dei fondamentali SEO",
    crashCoursePrompt: "Vuoi la versione rapida?",
    crashCourseLink: "Inizia qui",
    talkPrompt: "Pronto a parlarne?",
    talkLink: "Contattaci",
  },
  nl: {
    breadcrumb: "E-commerce SEO-basiskennis",
    heading: "Introductie",
    bodyParagraph: "Onze gidsen zijn sinds Q2 2025 openbaar beschikbaar. We hopen dat je er iets nuttigs voor je webshop in vindt. Heb je suggesties? Die zijn meer dan welkom via",
    expectHeading: "Wat je kunt verwachten",
    expectBody: "Het is een eerlijke deal. Wij geven je kennis. Jij brengt tijd door op onze site. Dit signaleert aan Google dat je onze informatie waardeert \u2192 we ranken hoger = SEO!",
    features: [
      "Uitgebreide e-commerce SEO-strategieen",
      "Stapsgewijze workflows die je vandaag nog kunt toepassen",
      "Echte data en praktijkvoorbeelden uit ons klantenwerk",
      "Regelmatig bijgewerkte content naarmate SEO evolueert",
      "Geen gatekeeping, alles wat we weten, open gedeeld",
    ],
    nextUp: "Volgende",
    nextCategory: "E-commerce SEO-basiskennis",
    nextTitle: "SEO-basischecklist",
    crashCoursePrompt: "Wil je de snelcursus?",
    crashCourseLink: "Begin hier",
    talkPrompt: "Klaar om te praten?",
    talkLink: "Neem contact op",
  },
};
