import type { Locale } from "../../config";

/* --- Library Index Page --- */
export const libraryPageT: Record<Locale, {
  badge: string;
  heading: string;
  subtitle: string;
  searchPlaceholder: string;
  allResources: string;
  categories: {
    aiTools: string;
    onPageSeo: string;
    offPageSeo: string;
    sops: string;
    templates: string;
  };
  resources: {
    abcTemplate: { title: string; description: string };
    fundamentalsChecklist: { title: string; description: string };
    roiSheet: { title: string; description: string };
    newTemplate: string;
    comingSoonAi: string;
    comingSoonOnPage: string;
    comingSoonOffPage: string;
    comingSoonSops: string;
    comingSoonTemplates: string;
  };
}> = {
  en: {
    badge: "Resource Library",
    heading: "Tools, Templates & Guides related to SEO to boost e-commerce",
    subtitle: "The best ecommerce SEO resources on planet earth.",
    searchPlaceholder: "Search Resources...",
    allResources: "All resources",
    categories: {
      aiTools: "AI Tools",
      onPageSeo: "On-Page SEO",
      offPageSeo: "Off-Page SEO",
      sops: "SOP's",
      templates: "Templates",
    },
    resources: {
      abcTemplate: {
        title: "ABC Template",
        description: "AI-powered content generation template for ecommerce product descriptions and category pages.",
      },
      fundamentalsChecklist: {
        title: "Fundamentals Checklist",
        description: "The absolute first thing we do when starting a new project.",
      },
      roiSheet: {
        title: "Ecommerce SEO ROI Calculation Sheet",
        description: "Will SEO be profitable for my brand? Insert your own data and visualise your SEO potential.",
      },
      newTemplate: "New Template",
      comingSoonAi: "Coming soon -- stay tuned for more AI tools.",
      comingSoonOnPage: "Coming soon -- stay tuned for more on-page guides.",
      comingSoonOffPage: "Coming soon -- stay tuned for off-page SEO resources.",
      comingSoonSops: "Coming soon -- stay tuned for SOPs.",
      comingSoonTemplates: "Coming soon -- stay tuned for more templates.",
    },
  },
  de: {
    badge: "Ressourcen-Bibliothek",
    heading: "Tools, Vorlagen und Leitfaden rund um SEO fur den E-Commerce",
    subtitle: "Die besten E-Commerce-SEO-Ressourcen auf diesem Planeten.",
    searchPlaceholder: "Ressourcen durchsuchen...",
    allResources: "Alle Ressourcen",
    categories: {
      aiTools: "KI-Tools",
      onPageSeo: "On-Page-SEO",
      offPageSeo: "Off-Page-SEO",
      sops: "SOPs",
      templates: "Vorlagen",
    },
    resources: {
      abcTemplate: {
        title: "ABC-Vorlage",
        description: "KI-gestutzte Vorlage zur Content-Erstellung fur E-Commerce-Produktbeschreibungen und Kategorieseiten.",
      },
      fundamentalsChecklist: {
        title: "Grundlagen-Checkliste",
        description: "Das Allererste, was wir bei einem neuen Projekt tun.",
      },
      roiSheet: {
        title: "E-Commerce-SEO-ROI-Berechnungstabelle",
        description: "Wird SEO fur meine Marke profitabel sein? Geben Sie Ihre eigenen Daten ein und visualisieren Sie Ihr SEO-Potenzial.",
      },
      newTemplate: "Neue Vorlage",
      comingSoonAi: "In Kurze verfugbar -- bleiben Sie dran fur weitere KI-Tools.",
      comingSoonOnPage: "In Kurze verfugbar -- bleiben Sie dran fur weitere On-Page-Leitfaden.",
      comingSoonOffPage: "In Kurze verfugbar -- bleiben Sie dran fur Off-Page-SEO-Ressourcen.",
      comingSoonSops: "In Kurze verfugbar -- bleiben Sie dran fur SOPs.",
      comingSoonTemplates: "In Kurze verfugbar -- bleiben Sie dran fur weitere Vorlagen.",
    },
  },
  fr: {
    badge: "Bibliotheque de ressources",
    heading: "Outils, modeles et guides SEO pour booster le e-commerce",
    subtitle: "Les meilleures ressources SEO e-commerce au monde.",
    searchPlaceholder: "Rechercher des ressources...",
    allResources: "Toutes les ressources",
    categories: {
      aiTools: "Outils IA",
      onPageSeo: "SEO On-Page",
      offPageSeo: "SEO Off-Page",
      sops: "Procedures",
      templates: "Modeles",
    },
    resources: {
      abcTemplate: {
        title: "Modele ABC",
        description: "Modele de generation de contenu par IA pour les descriptions de produits e-commerce et les pages de categories.",
      },
      fundamentalsChecklist: {
        title: "Checklist des fondamentaux",
        description: "La toute premiere chose que nous faisons au demarrage d'un nouveau projet.",
      },
      roiSheet: {
        title: "Feuille de calcul du ROI SEO e-commerce",
        description: "Le SEO sera-t-il rentable pour ma marque ? Inserez vos propres donnees et visualisez votre potentiel SEO.",
      },
      newTemplate: "Nouveau modele",
      comingSoonAi: "Bientot disponible -- restez a l'ecoute pour d'autres outils IA.",
      comingSoonOnPage: "Bientot disponible -- restez a l'ecoute pour d'autres guides on-page.",
      comingSoonOffPage: "Bientot disponible -- restez a l'ecoute pour des ressources SEO off-page.",
      comingSoonSops: "Bientot disponible -- restez a l'ecoute pour les procedures.",
      comingSoonTemplates: "Bientot disponible -- restez a l'ecoute pour d'autres modeles.",
    },
  },
  es: {
    badge: "Biblioteca de recursos",
    heading: "Herramientas, plantillas y guias de SEO para impulsar el e-commerce",
    subtitle: "Los mejores recursos de SEO e-commerce del planeta.",
    searchPlaceholder: "Buscar recursos...",
    allResources: "Todos los recursos",
    categories: {
      aiTools: "Herramientas IA",
      onPageSeo: "SEO On-Page",
      offPageSeo: "SEO Off-Page",
      sops: "Procedimientos",
      templates: "Plantillas",
    },
    resources: {
      abcTemplate: {
        title: "Plantilla ABC",
        description: "Plantilla de generacion de contenido con IA para descripciones de productos e-commerce y paginas de categorias.",
      },
      fundamentalsChecklist: {
        title: "Checklist de fundamentos",
        description: "Lo primero que hacemos al iniciar un nuevo proyecto.",
      },
      roiSheet: {
        title: "Hoja de calculo de ROI SEO e-commerce",
        description: "Sera rentable el SEO para mi marca? Introduce tus propios datos y visualiza tu potencial SEO.",
      },
      newTemplate: "Nueva plantilla",
      comingSoonAi: "Proximamente -- mantente atento a mas herramientas IA.",
      comingSoonOnPage: "Proximamente -- mantente atento a mas guias on-page.",
      comingSoonOffPage: "Proximamente -- mantente atento a recursos SEO off-page.",
      comingSoonSops: "Proximamente -- mantente atento a los procedimientos.",
      comingSoonTemplates: "Proximamente -- mantente atento a mas plantillas.",
    },
  },
  it: {
    badge: "Libreria risorse",
    heading: "Strumenti, template e guide SEO per potenziare l'e-commerce",
    subtitle: "Le migliori risorse SEO e-commerce al mondo.",
    searchPlaceholder: "Cerca risorse...",
    allResources: "Tutte le risorse",
    categories: {
      aiTools: "Strumenti IA",
      onPageSeo: "SEO On-Page",
      offPageSeo: "SEO Off-Page",
      sops: "Procedure",
      templates: "Template",
    },
    resources: {
      abcTemplate: {
        title: "Template ABC",
        description: "Template per la generazione di contenuti con IA per descrizioni prodotto e-commerce e pagine di categoria.",
      },
      fundamentalsChecklist: {
        title: "Checklist dei fondamentali",
        description: "La prima cosa in assoluto che facciamo quando iniziamo un nuovo progetto.",
      },
      roiSheet: {
        title: "Foglio di calcolo ROI SEO e-commerce",
        description: "La SEO sara redditizia per il mio brand? Inserisci i tuoi dati e visualizza il tuo potenziale SEO.",
      },
      newTemplate: "Nuovo template",
      comingSoonAi: "In arrivo -- resta sintonizzato per altri strumenti IA.",
      comingSoonOnPage: "In arrivo -- resta sintonizzato per altre guide on-page.",
      comingSoonOffPage: "In arrivo -- resta sintonizzato per risorse SEO off-page.",
      comingSoonSops: "In arrivo -- resta sintonizzato per le procedure.",
      comingSoonTemplates: "In arrivo -- resta sintonizzato per altri template.",
    },
  },
  nl: {
    badge: "Bronnenbibliotheek",
    heading: "Tools, templates en gidsen over SEO om e-commerce te boosten",
    subtitle: "De beste e-commerce SEO-bronnen ter wereld.",
    searchPlaceholder: "Bronnen zoeken...",
    allResources: "Alle bronnen",
    categories: {
      aiTools: "AI-tools",
      onPageSeo: "On-page SEO",
      offPageSeo: "Off-page SEO",
      sops: "SOP's",
      templates: "Templates",
    },
    resources: {
      abcTemplate: {
        title: "ABC-template",
        description: "AI-gestuurde template voor contentcreatie voor e-commerce productbeschrijvingen en categoriepagina's.",
      },
      fundamentalsChecklist: {
        title: "Basischecklist",
        description: "Het allereerste wat we doen bij een nieuw project.",
      },
      roiSheet: {
        title: "E-commerce SEO ROI-berekeningsblad",
        description: "Wordt SEO winstgevend voor mijn merk? Voer je eigen gegevens in en visualiseer je SEO-potentieel.",
      },
      newTemplate: "Nieuwe template",
      comingSoonAi: "Binnenkort beschikbaar -- blijf op de hoogte voor meer AI-tools.",
      comingSoonOnPage: "Binnenkort beschikbaar -- blijf op de hoogte voor meer on-page gidsen.",
      comingSoonOffPage: "Binnenkort beschikbaar -- blijf op de hoogte voor off-page SEO-bronnen.",
      comingSoonSops: "Binnenkort beschikbaar -- blijf op de hoogte voor SOP's.",
      comingSoonTemplates: "Binnenkort beschikbaar -- blijf op de hoogte voor meer templates.",
    },
  },
};

/* --- Shared strings for library sub-pages (on-page-checklist, roi-calculation-sheet, template) --- */
export const libraryDetailT: Record<Locale, {
  allSwipeFiles: string;
  copyLink: string;
  getThisChecklist: string;
  getThisTemplate: string;
  createdBy: string;
  popularResources: string;
  breadcrumbs: {
    resources: string;
    swipeFiles: string;
    onPageSeo: string;
    templates: string;
  };
  onPageChecklist: {
    title: string;
    description: string;
  };
  roiSheet: {
    title: string;
    description: string;
  };
  abcTemplate: {
    title: string;
    description: string;
  };
  relatedResources: {
    abcTemplate: { title: string; description: string };
    fundamentalsChecklist: { title: string; description: string };
    roiSheet: { title: string; description: string };
    seoFundamentalsGuide: { title: string; description: string };
  };
}> = {
  en: {
    allSwipeFiles: "All swipe files",
    copyLink: "Copy link",
    getThisChecklist: "Get this checklist",
    getThisTemplate: "Get this template",
    createdBy: "Created by Fabian van Til",
    popularResources: "Our most popular resources",
    breadcrumbs: {
      resources: "Resources",
      swipeFiles: "Swipe-Files",
      onPageSeo: "On-Page SEO",
      templates: "Templates",
    },
    onPageChecklist: {
      title: "Fundamentals Checklist",
      description: "The absolute first thing we do when starting a new project. This comprehensive on-page SEO checklist covers everything from title tags to schema markup -- ensuring your ecommerce store has the technical foundation for rankings.",
    },
    roiSheet: {
      title: "Ecommerce SEO ROI Calculation Sheet",
      description: "Will SEO be profitable for my brand? Insert your own data and visualise your SEO potential. This spreadsheet helps you model organic traffic growth, conversion rates, and revenue impact to calculate the true ROI of investing in SEO.",
    },
    abcTemplate: {
      title: "ABC Template",
      description: "Unlock new superpowers with effortless copy & paste code overrides -- no coding required. This template provides a structured framework for optimizing your ecommerce product pages and category pages for maximum organic visibility.",
    },
    relatedResources: {
      abcTemplate: {
        title: "ABC Template",
        description: "AI-powered content generation template for ecommerce.",
      },
      fundamentalsChecklist: {
        title: "Fundamentals Checklist",
        description: "The absolute first thing we do when starting a new project.",
      },
      roiSheet: {
        title: "Ecommerce SEO ROI Calculation Sheet",
        description: "Insert your own data and visualise your SEO potential.",
      },
      seoFundamentalsGuide: {
        title: "SEO Fundamentals Guide",
        description: "Complete guide to ecommerce SEO fundamentals.",
      },
    },
  },
  de: {
    allSwipeFiles: "Alle Swipe-Dateien",
    copyLink: "Link kopieren",
    getThisChecklist: "Diese Checkliste herunterladen",
    getThisTemplate: "Diese Vorlage herunterladen",
    createdBy: "Erstellt von Fabian van Til",
    popularResources: "Unsere beliebtesten Ressourcen",
    breadcrumbs: {
      resources: "Ressourcen",
      swipeFiles: "Swipe-Dateien",
      onPageSeo: "On-Page-SEO",
      templates: "Vorlagen",
    },
    onPageChecklist: {
      title: "Grundlagen-Checkliste",
      description: "Das Allererste, was wir bei einem neuen Projekt tun. Diese umfassende On-Page-SEO-Checkliste deckt alles ab, von Title-Tags bis Schema-Markup -- damit Ihr E-Commerce-Shop die technische Grundlage fur Rankings hat.",
    },
    roiSheet: {
      title: "E-Commerce-SEO-ROI-Berechnungstabelle",
      description: "Wird SEO fur meine Marke profitabel sein? Geben Sie Ihre eigenen Daten ein und visualisieren Sie Ihr SEO-Potenzial. Diese Tabelle hilft Ihnen, das Wachstum des organischen Traffics, Conversion-Raten und den Umsatzeffekt zu modellieren.",
    },
    abcTemplate: {
      title: "ABC-Vorlage",
      description: "Schalten Sie neue Superkrafte frei mit muehelosem Copy & Paste von Code-Overrides -- keine Programmierkenntnisse erforderlich. Diese Vorlage bietet ein strukturiertes Framework zur Optimierung Ihrer E-Commerce-Produkt- und Kategorieseiten.",
    },
    relatedResources: {
      abcTemplate: {
        title: "ABC-Vorlage",
        description: "KI-gestutzte Vorlage zur Content-Erstellung fur E-Commerce.",
      },
      fundamentalsChecklist: {
        title: "Grundlagen-Checkliste",
        description: "Das Allererste, was wir bei einem neuen Projekt tun.",
      },
      roiSheet: {
        title: "E-Commerce-SEO-ROI-Berechnungstabelle",
        description: "Geben Sie Ihre Daten ein und visualisieren Sie Ihr SEO-Potenzial.",
      },
      seoFundamentalsGuide: {
        title: "SEO-Grundlagen-Leitfaden",
        description: "Vollstandiger Leitfaden zu E-Commerce-SEO-Grundlagen.",
      },
    },
  },
  fr: {
    allSwipeFiles: "Tous les fichiers",
    copyLink: "Copier le lien",
    getThisChecklist: "Obtenir cette checklist",
    getThisTemplate: "Obtenir ce modele",
    createdBy: "Cree par Fabian van Til",
    popularResources: "Nos ressources les plus populaires",
    breadcrumbs: {
      resources: "Ressources",
      swipeFiles: "Fichiers",
      onPageSeo: "SEO On-Page",
      templates: "Modeles",
    },
    onPageChecklist: {
      title: "Checklist des fondamentaux",
      description: "La toute premiere chose que nous faisons au demarrage d'un nouveau projet. Cette checklist SEO on-page complete couvre tout, des balises title au balisage schema -- pour que votre boutique e-commerce ait les bases techniques necessaires au positionnement.",
    },
    roiSheet: {
      title: "Feuille de calcul du ROI SEO e-commerce",
      description: "Le SEO sera-t-il rentable pour ma marque ? Inserez vos propres donnees et visualisez votre potentiel SEO. Ce tableur vous aide a modeliser la croissance du trafic organique, les taux de conversion et l'impact sur le chiffre d'affaires.",
    },
    abcTemplate: {
      title: "Modele ABC",
      description: "Debloquez de nouveaux super-pouvoirs avec des overrides de code par simple copier-coller -- aucune programmation requise. Ce modele fournit un cadre structure pour optimiser vos pages produits et categories e-commerce.",
    },
    relatedResources: {
      abcTemplate: {
        title: "Modele ABC",
        description: "Modele de generation de contenu par IA pour l'e-commerce.",
      },
      fundamentalsChecklist: {
        title: "Checklist des fondamentaux",
        description: "La toute premiere chose que nous faisons au demarrage d'un nouveau projet.",
      },
      roiSheet: {
        title: "Feuille de calcul du ROI SEO e-commerce",
        description: "Inserez vos donnees et visualisez votre potentiel SEO.",
      },
      seoFundamentalsGuide: {
        title: "Guide des fondamentaux SEO",
        description: "Guide complet des fondamentaux du SEO e-commerce.",
      },
    },
  },
  es: {
    allSwipeFiles: "Todos los archivos",
    copyLink: "Copiar enlace",
    getThisChecklist: "Obtener esta checklist",
    getThisTemplate: "Obtener esta plantilla",
    createdBy: "Creado por Fabian van Til",
    popularResources: "Nuestros recursos mas populares",
    breadcrumbs: {
      resources: "Recursos",
      swipeFiles: "Archivos",
      onPageSeo: "SEO On-Page",
      templates: "Plantillas",
    },
    onPageChecklist: {
      title: "Checklist de fundamentos",
      description: "Lo primero que hacemos al iniciar un nuevo proyecto. Esta checklist completa de SEO on-page cubre todo, desde las etiquetas de titulo hasta el marcado schema -- asegurando que tu tienda e-commerce tenga la base tecnica para posicionarse.",
    },
    roiSheet: {
      title: "Hoja de calculo de ROI SEO e-commerce",
      description: "Sera rentable el SEO para mi marca? Introduce tus propios datos y visualiza tu potencial SEO. Esta hoja de calculo te ayuda a modelar el crecimiento del trafico organico, las tasas de conversion y el impacto en los ingresos.",
    },
    abcTemplate: {
      title: "Plantilla ABC",
      description: "Desbloquea nuevos superpoderes con sobreescrituras de codigo de copiar y pegar -- sin necesidad de programar. Esta plantilla proporciona un marco estructurado para optimizar tus paginas de producto y categoria e-commerce.",
    },
    relatedResources: {
      abcTemplate: {
        title: "Plantilla ABC",
        description: "Plantilla de generacion de contenido con IA para e-commerce.",
      },
      fundamentalsChecklist: {
        title: "Checklist de fundamentos",
        description: "Lo primero que hacemos al iniciar un nuevo proyecto.",
      },
      roiSheet: {
        title: "Hoja de calculo de ROI SEO e-commerce",
        description: "Introduce tus datos y visualiza tu potencial SEO.",
      },
      seoFundamentalsGuide: {
        title: "Guia de fundamentos SEO",
        description: "Guia completa de fundamentos de SEO e-commerce.",
      },
    },
  },
  it: {
    allSwipeFiles: "Tutti i file",
    copyLink: "Copia link",
    getThisChecklist: "Ottieni questa checklist",
    getThisTemplate: "Ottieni questo template",
    createdBy: "Creato da Fabian van Til",
    popularResources: "Le nostre risorse piu popolari",
    breadcrumbs: {
      resources: "Risorse",
      swipeFiles: "File",
      onPageSeo: "SEO On-Page",
      templates: "Template",
    },
    onPageChecklist: {
      title: "Checklist dei fondamentali",
      description: "La prima cosa in assoluto che facciamo quando iniziamo un nuovo progetto. Questa checklist completa di SEO on-page copre tutto, dai tag title al markup schema -- assicurando che il tuo store e-commerce abbia le basi tecniche per il posizionamento.",
    },
    roiSheet: {
      title: "Foglio di calcolo ROI SEO e-commerce",
      description: "La SEO sara redditizia per il mio brand? Inserisci i tuoi dati e visualizza il tuo potenziale SEO. Questo foglio di calcolo ti aiuta a modellare la crescita del traffico organico, i tassi di conversione e l'impatto sui ricavi.",
    },
    abcTemplate: {
      title: "Template ABC",
      description: "Sblocca nuovi superpoteri con override di codice da copiare e incollare -- nessuna programmazione richiesta. Questo template fornisce un framework strutturato per ottimizzare le tue pagine prodotto e categoria e-commerce.",
    },
    relatedResources: {
      abcTemplate: {
        title: "Template ABC",
        description: "Template di generazione contenuti con IA per l'e-commerce.",
      },
      fundamentalsChecklist: {
        title: "Checklist dei fondamentali",
        description: "La prima cosa in assoluto che facciamo quando iniziamo un nuovo progetto.",
      },
      roiSheet: {
        title: "Foglio di calcolo ROI SEO e-commerce",
        description: "Inserisci i tuoi dati e visualizza il tuo potenziale SEO.",
      },
      seoFundamentalsGuide: {
        title: "Guida ai fondamentali SEO",
        description: "Guida completa ai fondamentali della SEO e-commerce.",
      },
    },
  },
  nl: {
    allSwipeFiles: "Alle bestanden",
    copyLink: "Link kopieren",
    getThisChecklist: "Download deze checklist",
    getThisTemplate: "Download deze template",
    createdBy: "Gemaakt door Fabian van Til",
    popularResources: "Onze populairste bronnen",
    breadcrumbs: {
      resources: "Bronnen",
      swipeFiles: "Bestanden",
      onPageSeo: "On-page SEO",
      templates: "Templates",
    },
    onPageChecklist: {
      title: "Basischecklist",
      description: "Het allereerste wat we doen bij een nieuw project. Deze uitgebreide on-page SEO-checklist dekt alles, van title tags tot schema-markup -- zodat je e-commercewinkel de technische basis heeft voor rankings.",
    },
    roiSheet: {
      title: "E-commerce SEO ROI-berekeningsblad",
      description: "Wordt SEO winstgevend voor mijn merk? Voer je eigen gegevens in en visualiseer je SEO-potentieel. Dit spreadsheet helpt je bij het modelleren van organische verkeersgroei, conversiepercentages en omzetimpact.",
    },
    abcTemplate: {
      title: "ABC-template",
      description: "Ontgrendel nieuwe superkrachten met moeiteloos kopieer- en plakbare code-overrides -- geen programmeerkennis vereist. Deze template biedt een gestructureerd raamwerk voor het optimaliseren van je e-commerce product- en categoriepagina's.",
    },
    relatedResources: {
      abcTemplate: {
        title: "ABC-template",
        description: "AI-gestuurde template voor contentcreatie voor e-commerce.",
      },
      fundamentalsChecklist: {
        title: "Basischecklist",
        description: "Het allereerste wat we doen bij een nieuw project.",
      },
      roiSheet: {
        title: "E-commerce SEO ROI-berekeningsblad",
        description: "Voer je gegevens in en visualiseer je SEO-potentieel.",
      },
      seoFundamentalsGuide: {
        title: "SEO-basisgids",
        description: "Complete gids over de basisprincipes van e-commerce SEO.",
      },
    },
  },
};
