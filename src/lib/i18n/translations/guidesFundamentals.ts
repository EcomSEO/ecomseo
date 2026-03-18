import type { Locale } from "../config";

export const guidesFundamentalsT: Record<Locale, {
  sideNav: {
    category: string;
    items: { label: string }[];
  };
  badge: string;
  heading: string;
  intro: string;
  sections: {
    title: string;
    items: string[];
  }[];
  nav: {
    previous: string;
    category: string;
    intro: string;
    resourceLibrary: string;
    browseAll: string;
    needHelp: string;
    getInTouch: string;
  };
}> = {
  en: {
    sideNav: {
      category: "Ecommerce SEO Basics",
      items: [
        { label: "Introduction" },
        { label: "SEO Fundamentals Checklist" },
      ],
    },
    badge: "Ecommerce SEO Basics",
    heading: "SEO Fundamentals Checklist",
    intro: "This is the absolute first thing we do when starting a new project. Before content strategy, before link building, before anything - we make sure the fundamentals are locked in. Use this checklist to audit your own store.",
    sections: [
      {
        title: "1. Title Tags",
        items: [
          "Every page has a unique, descriptive title tag",
          "Include primary keyword near the beginning",
          "Keep under 60 characters to avoid truncation",
          "Include your brand name at the end (e.g., | Brand)",
          "Use modifiers for long-tail variations (best, buy, review, 2025)",
        ],
      },
      {
        title: "2. Meta Descriptions",
        items: [
          "Every page has a unique meta description",
          "Include primary keyword naturally",
          "Keep under 155 characters",
          "Include a call-to-action (Shop now, Free shipping, etc.)",
          "Highlight unique selling points",
        ],
      },
      {
        title: "3. Heading Structure",
        items: [
          "One H1 per page containing the primary keyword",
          "Logical heading hierarchy (H1 \u2192 H2 \u2192 H3)",
          "H2s cover main subtopics / categories",
          "H3s used for supporting points",
          "Don't skip heading levels",
        ],
      },
      {
        title: "4. URL Structure",
        items: [
          "URLs are short, descriptive, and keyword-rich",
          "Use hyphens to separate words",
          "Avoid parameters and session IDs in URLs",
          "Logical folder structure (/category/subcategory/product)",
          "All URLs are lowercase",
        ],
      },
      {
        title: "5. Internal Linking",
        items: [
          "Category pages link to relevant subcategories and products",
          "Product pages link back to their category",
          "Blog posts link to relevant product/category pages",
          "Use descriptive anchor text (not 'click here')",
          "Implement breadcrumb navigation",
        ],
      },
      {
        title: "6. Image Optimization",
        items: [
          "All images have descriptive alt text",
          "Images are compressed (WebP format preferred)",
          "Use descriptive file names (blue-running-shoes.webp)",
          "Implement lazy loading for below-fold images",
          "Include product images in your sitemap",
        ],
      },
      {
        title: "7. Schema Markup",
        items: [
          "Product schema on all product pages (price, availability, reviews)",
          "BreadcrumbList schema on all pages",
          "Organization schema on homepage",
          "FAQ schema on FAQ pages",
          "Review/Rating schema where applicable",
        ],
      },
      {
        title: "8. Technical Foundations",
        items: [
          "XML sitemap submitted to Google Search Console",
          "Robots.txt properly configured",
          "Canonical tags set correctly on all pages",
          "SSL/HTTPS enabled site-wide",
          "Mobile-responsive design",
          "Core Web Vitals passing (LCP < 2.5s, CLS < 0.1, INP < 200ms)",
        ],
      },
    ],
    nav: {
      previous: "Previous",
      category: "Ecommerce SEO Basics",
      intro: "Introduction",
      resourceLibrary: "Want the full resource library?",
      browseAll: "Browse all resources",
      needHelp: "Need help implementing?",
      getInTouch: "Get a Free Proposal",
    },
  },
  de: {
    sideNav: {
      category: "E-Commerce-SEO-Grundlagen",
      items: [
        { label: "Einf\u00fchrung" },
        { label: "SEO-Grundlagen-Checkliste" },
      ],
    },
    badge: "E-Commerce-SEO-Grundlagen",
    heading: "SEO-Grundlagen-Checkliste",
    intro: "Das ist das Allererste, was wir bei einem neuen Projekt tun. Vor der Content-Strategie, vor dem Linkaufbau, vor allem anderen - wir stellen sicher, dass die Grundlagen stehen. Nutzen Sie diese Checkliste, um Ihren eigenen Shop zu pr\u00fcfen.",
    sections: [
      {
        title: "1. Title-Tags",
        items: [
          "Jede Seite hat einen einzigartigen, aussagekr\u00e4ftigen Title-Tag",
          "Das Haupt-Keyword steht m\u00f6glichst am Anfang",
          "Unter 60 Zeichen bleiben, um Abschneidung zu vermeiden",
          "Markennamen am Ende einf\u00fcgen (z.\u00a0B. | Marke)",
          "Modifier f\u00fcr Long-Tail-Variationen verwenden (beste, kaufen, Bewertung, 2025)",
        ],
      },
      {
        title: "2. Meta-Beschreibungen",
        items: [
          "Jede Seite hat eine einzigartige Meta-Beschreibung",
          "Das Haupt-Keyword nat\u00fcrlich einbauen",
          "Unter 155 Zeichen bleiben",
          "Einen Call-to-Action einf\u00fcgen (Jetzt kaufen, Kostenloser Versand etc.)",
          "Alleinstellungsmerkmale hervorheben",
        ],
      },
      {
        title: "3. \u00dcberschriftenstruktur",
        items: [
          "Eine H1 pro Seite mit dem Haupt-Keyword",
          "Logische \u00dcberschriftenhierarchie (H1 \u2192 H2 \u2192 H3)",
          "H2s decken die Hauptunterthemen / Kategorien ab",
          "H3s werden f\u00fcr unterst\u00fctzende Punkte verwendet",
          "\u00dcberschriftenebenen nicht \u00fcberspringen",
        ],
      },
      {
        title: "4. URL-Struktur",
        items: [
          "URLs sind kurz, aussagekr\u00e4ftig und keyword-optimiert",
          "Bindestriche zur Worttrennung verwenden",
          "Parameter und Session-IDs in URLs vermeiden",
          "Logische Ordnerstruktur (/kategorie/unterkategorie/produkt)",
          "Alle URLs sind kleingeschrieben",
        ],
      },
      {
        title: "5. Interne Verlinkung",
        items: [
          "Kategorieseiten verlinken auf relevante Unterkategorien und Produkte",
          "Produktseiten verlinken zur\u00fcck auf ihre Kategorie",
          "Blogartikel verlinken auf relevante Produkt-/Kategorieseiten",
          "Aussagekr\u00e4ftigen Ankertext verwenden (nicht 'hier klicken')",
          "Breadcrumb-Navigation implementieren",
        ],
      },
      {
        title: "6. Bildoptimierung",
        items: [
          "Alle Bilder haben einen beschreibenden Alt-Text",
          "Bilder sind komprimiert (WebP-Format bevorzugt)",
          "Beschreibende Dateinamen verwenden (blaue-laufschuhe.webp)",
          "Lazy Loading f\u00fcr Bilder unterhalb des sichtbaren Bereichs implementieren",
          "Produktbilder in die Sitemap aufnehmen",
        ],
      },
      {
        title: "7. Schema-Markup",
        items: [
          "Produkt-Schema auf allen Produktseiten (Preis, Verf\u00fcgbarkeit, Bewertungen)",
          "BreadcrumbList-Schema auf allen Seiten",
          "Organization-Schema auf der Startseite",
          "FAQ-Schema auf FAQ-Seiten",
          "Review-/Bewertungs-Schema wo zutreffend",
        ],
      },
      {
        title: "8. Technische Grundlagen",
        items: [
          "XML-Sitemap bei der Google Search Console eingereicht",
          "Robots.txt korrekt konfiguriert",
          "Canonical-Tags auf allen Seiten korrekt gesetzt",
          "SSL/HTTPS seitenweit aktiviert",
          "Mobilfreundliches responsives Design",
          "Core Web Vitals bestanden (LCP < 2,5\u00a0s, CLS < 0,1, INP < 200\u00a0ms)",
        ],
      },
    ],
    nav: {
      previous: "Zur\u00fcck",
      category: "E-Commerce-SEO-Grundlagen",
      intro: "Einf\u00fchrung",
      resourceLibrary: "Die vollst\u00e4ndige Ressourcenbibliothek entdecken?",
      browseAll: "Alle Ressourcen durchst\u00f6bern",
      needHelp: "Hilfe bei der Umsetzung ben\u00f6tigt?",
      getInTouch: "Kontakt aufnehmen",
    },
  },
  fr: {
    sideNav: {
      category: "Bases du SEO e-commerce",
      items: [
        { label: "Introduction" },
        { label: "Checklist des fondamentaux SEO" },
      ],
    },
    badge: "Bases du SEO e-commerce",
    heading: "Checklist des fondamentaux SEO",
    intro: "C'est la toute premiere chose que nous faisons au demarrage d'un nouveau projet. Avant la strategie de contenu, avant le netlinking, avant tout - nous verrouillons les fondamentaux. Utilisez cette checklist pour auditer votre propre boutique.",
    sections: [
      {
        title: "1. Balises title",
        items: [
          "Chaque page possede une balise title unique et descriptive",
          "Le mot-cle principal est place pres du debut",
          "Rester sous 60 caracteres pour eviter la troncature",
          "Inclure le nom de la marque a la fin (ex. : | Marque)",
          "Utiliser des modificateurs pour les variantes longue traine (meilleur, acheter, avis, 2025)",
        ],
      },
      {
        title: "2. Meta descriptions",
        items: [
          "Chaque page possede une meta description unique",
          "Integrer le mot-cle principal de maniere naturelle",
          "Rester sous 155 caracteres",
          "Inclure un appel a l'action (Achetez maintenant, Livraison gratuite, etc.)",
          "Mettre en avant les avantages concurrentiels",
        ],
      },
      {
        title: "3. Structure des titres",
        items: [
          "Un seul H1 par page contenant le mot-cle principal",
          "Hierarchie logique des titres (H1 \u2192 H2 \u2192 H3)",
          "Les H2 couvrent les principaux sous-themes / categories",
          "Les H3 servent aux points d'appui",
          "Ne pas sauter de niveaux de titre",
        ],
      },
      {
        title: "4. Structure des URL",
        items: [
          "Les URL sont courtes, descriptives et riches en mots-cles",
          "Utiliser des tirets pour separer les mots",
          "Eviter les parametres et identifiants de session dans les URL",
          "Structure de dossiers logique (/categorie/sous-categorie/produit)",
          "Toutes les URL sont en minuscules",
        ],
      },
      {
        title: "5. Maillage interne",
        items: [
          "Les pages de categorie renvoient vers les sous-categories et produits pertinents",
          "Les pages produit renvoient vers leur categorie",
          "Les articles de blog renvoient vers les pages produit/categorie pertinentes",
          "Utiliser un texte d'ancre descriptif (pas 'cliquez ici')",
          "Implementer la navigation fil d'Ariane",
        ],
      },
      {
        title: "6. Optimisation des images",
        items: [
          "Toutes les images ont un texte alternatif descriptif",
          "Les images sont compressees (format WebP de preference)",
          "Utiliser des noms de fichiers descriptifs (chaussures-course-bleues.webp)",
          "Implementer le chargement differe pour les images sous la ligne de flottaison",
          "Inclure les images produit dans le sitemap",
        ],
      },
      {
        title: "7. Balisage Schema",
        items: [
          "Schema Product sur toutes les pages produit (prix, disponibilite, avis)",
          "Schema BreadcrumbList sur toutes les pages",
          "Schema Organization sur la page d'accueil",
          "Schema FAQ sur les pages FAQ",
          "Schema Review/Rating la ou c'est pertinent",
        ],
      },
      {
        title: "8. Fondations techniques",
        items: [
          "Sitemap XML soumis a la Google Search Console",
          "Robots.txt correctement configure",
          "Balises canonical correctement definies sur toutes les pages",
          "SSL/HTTPS active sur l'ensemble du site",
          "Design responsive et adapte au mobile",
          "Core Web Vitals valides (LCP < 2,5 s, CLS < 0,1, INP < 200 ms)",
        ],
      },
    ],
    nav: {
      previous: "Precedent",
      category: "Bases du SEO e-commerce",
      intro: "Introduction",
      resourceLibrary: "Envie d'explorer toute la bibliotheque de ressources ?",
      browseAll: "Parcourir toutes les ressources",
      needHelp: "Besoin d'aide pour la mise en oeuvre ?",
      getInTouch: "Contactez-nous",
    },
  },
  es: {
    sideNav: {
      category: "Fundamentos de SEO e-commerce",
      items: [
        { label: "Introduccion" },
        { label: "Checklist de fundamentos SEO" },
      ],
    },
    badge: "Fundamentos de SEO e-commerce",
    heading: "Checklist de fundamentos SEO",
    intro: "Esto es lo primero que hacemos al iniciar un nuevo proyecto. Antes de la estrategia de contenidos, antes del link building, antes de cualquier otra cosa - nos aseguramos de que los fundamentos estan bien establecidos. Usa esta checklist para auditar tu propia tienda.",
    sections: [
      {
        title: "1. Etiquetas de titulo",
        items: [
          "Cada pagina tiene una etiqueta de titulo unica y descriptiva",
          "Incluir la palabra clave principal cerca del inicio",
          "Mantener menos de 60 caracteres para evitar truncamiento",
          "Incluir el nombre de la marca al final (ej.: | Marca)",
          "Usar modificadores para variaciones long tail (mejor, comprar, resena, 2025)",
        ],
      },
      {
        title: "2. Meta descripciones",
        items: [
          "Cada pagina tiene una meta descripcion unica",
          "Incluir la palabra clave principal de forma natural",
          "Mantener menos de 155 caracteres",
          "Incluir una llamada a la accion (Compra ahora, Envio gratuito, etc.)",
          "Destacar los puntos de venta unicos",
        ],
      },
      {
        title: "3. Estructura de encabezados",
        items: [
          "Un H1 por pagina con la palabra clave principal",
          "Jerarquia logica de encabezados (H1 \u2192 H2 \u2192 H3)",
          "Los H2 cubren los subtemas principales / categorias",
          "Los H3 se usan para puntos de apoyo",
          "No saltar niveles de encabezado",
        ],
      },
      {
        title: "4. Estructura de URL",
        items: [
          "Las URL son cortas, descriptivas y ricas en palabras clave",
          "Usar guiones para separar palabras",
          "Evitar parametros e IDs de sesion en las URL",
          "Estructura logica de carpetas (/categoria/subcategoria/producto)",
          "Todas las URL en minusculas",
        ],
      },
      {
        title: "5. Enlazado interno",
        items: [
          "Las paginas de categoria enlazan a subcategorias y productos relevantes",
          "Las paginas de producto enlazan de vuelta a su categoria",
          "Los articulos del blog enlazan a paginas de producto/categoria relevantes",
          "Usar texto ancla descriptivo (no 'haz clic aqui')",
          "Implementar navegacion con migas de pan",
        ],
      },
      {
        title: "6. Optimizacion de imagenes",
        items: [
          "Todas las imagenes tienen texto alternativo descriptivo",
          "Las imagenes estan comprimidas (formato WebP preferido)",
          "Usar nombres de archivo descriptivos (zapatillas-running-azules.webp)",
          "Implementar carga diferida para imagenes bajo el pliegue",
          "Incluir imagenes de productos en el sitemap",
        ],
      },
      {
        title: "7. Marcado Schema",
        items: [
          "Schema de producto en todas las paginas de producto (precio, disponibilidad, resenas)",
          "Schema BreadcrumbList en todas las paginas",
          "Schema Organization en la pagina de inicio",
          "Schema FAQ en las paginas de preguntas frecuentes",
          "Schema Review/Rating donde corresponda",
        ],
      },
      {
        title: "8. Bases tecnicas",
        items: [
          "Sitemap XML enviado a Google Search Console",
          "Robots.txt configurado correctamente",
          "Etiquetas canonical configuradas correctamente en todas las paginas",
          "SSL/HTTPS activado en todo el sitio",
          "Diseno responsive adaptado a moviles",
          "Core Web Vitals aprobados (LCP < 2,5 s, CLS < 0,1, INP < 200 ms)",
        ],
      },
    ],
    nav: {
      previous: "Anterior",
      category: "Fundamentos de SEO e-commerce",
      intro: "Introduccion",
      resourceLibrary: "Quieres acceder a toda la biblioteca de recursos?",
      browseAll: "Explorar todos los recursos",
      needHelp: "Necesitas ayuda con la implementacion?",
      getInTouch: "Contactanos",
    },
  },
  it: {
    sideNav: {
      category: "Basi della SEO e-commerce",
      items: [
        { label: "Introduzione" },
        { label: "Checklist dei fondamentali SEO" },
      ],
    },
    badge: "Basi della SEO e-commerce",
    heading: "Checklist dei fondamentali SEO",
    intro: "Questa e la primissima cosa che facciamo quando iniziamo un nuovo progetto. Prima della strategia dei contenuti, prima della link building, prima di qualsiasi altra cosa - ci assicuriamo che i fondamentali siano solidi. Usa questa checklist per verificare il tuo negozio.",
    sections: [
      {
        title: "1. Tag title",
        items: [
          "Ogni pagina ha un tag title unico e descrittivo",
          "Includere la keyword principale vicino all'inizio",
          "Restare sotto i 60 caratteri per evitare il troncamento",
          "Includere il nome del brand alla fine (es. | Brand)",
          "Usare modificatori per variazioni long tail (migliore, acquista, recensione, 2025)",
        ],
      },
      {
        title: "2. Meta description",
        items: [
          "Ogni pagina ha una meta description unica",
          "Includere la keyword principale in modo naturale",
          "Restare sotto i 155 caratteri",
          "Includere una call-to-action (Acquista ora, Spedizione gratuita, ecc.)",
          "Mettere in evidenza i punti di forza unici",
        ],
      },
      {
        title: "3. Struttura dei titoli",
        items: [
          "Un solo H1 per pagina contenente la keyword principale",
          "Gerarchia logica dei titoli (H1 \u2192 H2 \u2192 H3)",
          "Gli H2 coprono i principali sottotemi / categorie",
          "Gli H3 sono usati per i punti di supporto",
          "Non saltare livelli di intestazione",
        ],
      },
      {
        title: "4. Struttura degli URL",
        items: [
          "Gli URL sono brevi, descrittivi e ricchi di parole chiave",
          "Usare i trattini per separare le parole",
          "Evitare parametri e ID di sessione negli URL",
          "Struttura logica delle cartelle (/categoria/sottocategoria/prodotto)",
          "Tutti gli URL sono in minuscolo",
        ],
      },
      {
        title: "5. Link interni",
        items: [
          "Le pagine di categoria linkano a sottocategorie e prodotti pertinenti",
          "Le pagine prodotto linkano alla propria categoria",
          "Gli articoli del blog linkano a pagine prodotto/categoria pertinenti",
          "Usare testo di ancoraggio descrittivo (non 'clicca qui')",
          "Implementare la navigazione breadcrumb",
        ],
      },
      {
        title: "6. Ottimizzazione delle immagini",
        items: [
          "Tutte le immagini hanno un testo alternativo descrittivo",
          "Le immagini sono compresse (formato WebP preferito)",
          "Usare nomi di file descrittivi (scarpe-corsa-blu.webp)",
          "Implementare il caricamento lazy per le immagini sotto la piega",
          "Includere le immagini prodotto nella sitemap",
        ],
      },
      {
        title: "7. Markup Schema",
        items: [
          "Schema Product su tutte le pagine prodotto (prezzo, disponibilita, recensioni)",
          "Schema BreadcrumbList su tutte le pagine",
          "Schema Organization sulla homepage",
          "Schema FAQ sulle pagine FAQ",
          "Schema Review/Rating dove applicabile",
        ],
      },
      {
        title: "8. Basi tecniche",
        items: [
          "Sitemap XML inviata alla Google Search Console",
          "Robots.txt configurato correttamente",
          "Tag canonical impostati correttamente su tutte le pagine",
          "SSL/HTTPS attivo su tutto il sito",
          "Design responsive e ottimizzato per dispositivi mobili",
          "Core Web Vitals superati (LCP < 2,5 s, CLS < 0,1, INP < 200 ms)",
        ],
      },
    ],
    nav: {
      previous: "Precedente",
      category: "Basi della SEO e-commerce",
      intro: "Introduzione",
      resourceLibrary: "Vuoi consultare l'intera libreria di risorse?",
      browseAll: "Esplora tutte le risorse",
      needHelp: "Hai bisogno di aiuto con l'implementazione?",
      getInTouch: "Contattaci",
    },
  },
  nl: {
    sideNav: {
      category: "E-commerce SEO-basiskennis",
      items: [
        { label: "Introductie" },
        { label: "SEO-basischecklist" },
      ],
    },
    badge: "E-commerce SEO-basiskennis",
    heading: "SEO-basischecklist",
    intro: "Dit is het allereerste wat we doen bij een nieuw project. Voor de contentstrategie, voor de linkbuilding, voor alles - we zorgen dat de basis op orde is. Gebruik deze checklist om je eigen webshop te auditen.",
    sections: [
      {
        title: "1. Title-tags",
        items: [
          "Elke pagina heeft een unieke, beschrijvende title-tag",
          "Het primaire zoekwoord staat zo dicht mogelijk bij het begin",
          "Houd het onder de 60 tekens om afkapping te voorkomen",
          "Voeg je merknaam toe aan het einde (bijv. | Merk)",
          "Gebruik modifiers voor long-tail-variaties (beste, kopen, review, 2025)",
        ],
      },
      {
        title: "2. Metabeschrijvingen",
        items: [
          "Elke pagina heeft een unieke metabeschrijving",
          "Verwerk het primaire zoekwoord op een natuurlijke manier",
          "Houd het onder de 155 tekens",
          "Voeg een call-to-action toe (Bestel nu, Gratis verzending, etc.)",
          "Benadruk je unieke verkoopargumenten",
        ],
      },
      {
        title: "3. Koppenstructuur",
        items: [
          "Een H1 per pagina met het primaire zoekwoord",
          "Logische koppenhi\u00ebrarchie (H1 \u2192 H2 \u2192 H3)",
          "H2's behandelen de hoofdonderwerpen / categorie\u00ebn",
          "H3's worden gebruikt voor ondersteunende punten",
          "Sla geen koppenniveaus over",
        ],
      },
      {
        title: "4. URL-structuur",
        items: [
          "URL's zijn kort, beschrijvend en zoekwoordrijk",
          "Gebruik koppeltekens om woorden te scheiden",
          "Vermijd parameters en sessie-ID's in URL's",
          "Logische mappenstructuur (/categorie/subcategorie/product)",
          "Alle URL's zijn in kleine letters",
        ],
      },
      {
        title: "5. Interne links",
        items: [
          "Categoriepagina's linken naar relevante subcategorie\u00ebn en producten",
          "Productpagina's linken terug naar hun categorie",
          "Blogartikelen linken naar relevante product-/categoriepagina's",
          "Gebruik beschrijvende ankertekst (niet 'klik hier')",
          "Implementeer breadcrumbnavigatie",
        ],
      },
      {
        title: "6. Beeldoptimalisatie",
        items: [
          "Alle afbeeldingen hebben een beschrijvende alt-tekst",
          "Afbeeldingen zijn gecomprimeerd (WebP-formaat heeft de voorkeur)",
          "Gebruik beschrijvende bestandsnamen (blauwe-hardloopschoenen.webp)",
          "Implementeer lazy loading voor afbeeldingen onder de vouw",
          "Neem productafbeeldingen op in je sitemap",
        ],
      },
      {
        title: "7. Schema-markup",
        items: [
          "Product-schema op alle productpagina's (prijs, beschikbaarheid, reviews)",
          "BreadcrumbList-schema op alle pagina's",
          "Organization-schema op de homepage",
          "FAQ-schema op FAQ-pagina's",
          "Review-/Rating-schema waar van toepassing",
        ],
      },
      {
        title: "8. Technische basis",
        items: [
          "XML-sitemap ingediend bij Google Search Console",
          "Robots.txt correct geconfigureerd",
          "Canonical-tags correct ingesteld op alle pagina's",
          "SSL/HTTPS sitebreed ingeschakeld",
          "Mobielvriendelijk responsive design",
          "Core Web Vitals geslaagd (LCP < 2,5 s, CLS < 0,1, INP < 200 ms)",
        ],
      },
    ],
    nav: {
      previous: "Vorige",
      category: "E-commerce SEO-basiskennis",
      intro: "Introductie",
      resourceLibrary: "De volledige resourcebibliotheek bekijken?",
      browseAll: "Bekijk alle resources",
      needHelp: "Hulp nodig bij de implementatie?",
      getInTouch: "Neem contact op",
    },
  },
};
