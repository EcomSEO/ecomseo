/**
 * Master slug translation map.
 *
 * Each key is the canonical (English) path segment used in the file system.
 * Values are the locale-specific URL slugs verified through DataForSEO keyword
 * research (March 2026).
 *
 * - EN slugs are always the key itself (omitted from the map).
 * - Only non-EN entries that differ from the English key are listed.
 * - Team member slugs and case-study slugs are proper nouns and stay unchanged.
 */

import type { Locale } from "./config";

/* ------------------------------------------------------------------ */
/*  Slug translations                                                  */
/* ------------------------------------------------------------------ */

export const slugTranslations: Record<
  string,
  Partial<Record<Locale, string>>
> = {
  /* ── Core Service Pages ─────────────────────────────────────────── */
  "shopify-seo": {
    de: "shopify-seo-optimierung",
    it: "seo-shopify",
    nl: "shopify-seo-optimalisatie",
    // DE: "shopify seo" 480 SV, KD 6
    // FR: "agence seo shopify" 1000 SV → slug "seo-shopify"
    // ES: "seo en shopify" 210 SV → slug "seo-shopify"
    // IT: "shopify seo" 110 SV, KD 8 (keep same)
    // NL: "shopify seo" 170 SV, KD 24 (keep same)
    fr: "seo-shopify",
    es: "seo-shopify",
  },
  "ecommerce-seo": {
    // DE: "online shop seo" 480 SV, KD 5 (SERP-verified: Germans search "online shop seo" not "ecommerce seo")
    // FR: "seo ecommerce" 880 SV, KD 14
    // ES: "seo ecommerce" 260 SV, KD 4
    // IT: "seo ecommerce" 210 SV, KD 4
    // NL: "webshop seo" 590 SV (SERP-verified: Dutch search "webshop seo" 3x more than "ecommerce seo")
    de: "online-shop-seo",
    fr: "seo-ecommerce",
    es: "seo-ecommerce",
    it: "seo-ecommerce",
    nl: "webshop-seo",
  },
  "ecommerce-seo-platforms": {
    de: "ecommerce-seo-plattformen",
    fr: "plateformes-seo-ecommerce",
    es: "plataformas-seo-ecommerce",
    it: "piattaforme-seo-ecommerce",
    nl: "ecommerce-seo-platformen",
  },
  "ecommerce-seo-industries": {
    de: "ecommerce-seo-branchen",
    fr: "secteurs-seo-ecommerce",
    es: "sectores-seo-ecommerce",
    it: "settori-seo-ecommerce",
    nl: "ecommerce-seo-branches",
  },
  "ecommerce-seo-services": {
    de: "ecommerce-seo-leistungen",
    fr: "services-seo-ecommerce",
    es: "servicios-seo-ecommerce",
    it: "servizi-seo-ecommerce",
    nl: "ecommerce-seo-diensten",
  },
  "link-building": {
    es: "link-building-seo",
    it: "link-building-seo",
    // DE: "linkaufbau" 260 SV, KD 18
    // FR: "netlinking" 2900 SV, KD 34
    // ES: "link building" 1600 SV, KD 22 (keep same, used in Spanish too)
    // IT: "link building" 590 SV, KD 6 (keep same, used in Italian too)
    // NL: "linkbuilding" 480→1900 SV, KD 41
    de: "linkaufbau",
    fr: "netlinking",
    nl: "linkbuilding",
  },
  "keyword-research": {
    // DE: "keyword recherche" 2400 SV, KD 65
    // FR: "recherche mots cles" 590 SV, KD 32
    // ES: "estudio palabras clave" 210 SV, KD 48
    // IT: "ricerca parole chiave" 320 SV, KD 22
    // NL: "zoekwoordenonderzoek" 480 SV, KD 7
    de: "keyword-recherche",
    fr: "recherche-mots-cles",
    es: "estudio-palabras-clave",
    it: "ricerca-parole-chiave",
    nl: "zoekwoordenonderzoek",
  },
  "content-writing": {
    // DE: "seo texte" 720 SV, KD 6
    // FR: "redaction seo" 1600 SV, KD 18
    // ES: "redaccion seo" 50 SV, KD 39
    // IT: "seo copywriting" 480 SV
    // NL: "seo teksten" 880 SV
    de: "seo-texte",
    fr: "redaction-seo",
    es: "redaccion-seo",
    it: "seo-copywriting",
    nl: "seo-teksten",
  },

  /* ── Platform SEO Pages ─────────────────────────────────────────── */
  "adobe-commerce-seo": {
    // "Magento SEO" is the more searched term in all markets
    de: "magento-seo",
    fr: "seo-magento",
    es: "magento-seo",
    it: "magento-seo",
    nl: "magento-seo",
  },
  "woocommerce-seo": {
    de: "woocommerce-seo-optimierung",
    fr: "seo-woocommerce",
    es: "seo-woocommerce",
    it: "seo-woocommerce",
    nl: "woocommerce-seo-optimalisatie",
  },
  "bigcommerce-seo": {
    de: "bigcommerce-seo-optimierung",
    fr: "seo-bigcommerce",
    es: "seo-bigcommerce",
    it: "seo-bigcommerce",
    nl: "bigcommerce-seo-optimalisatie",
  },
  "amazon-seo": {
    de: "amazon-seo-optimierung",
    es: "seo-amazon",
    it: "seo-amazon",
    nl: "amazon-seo-optimalisatie",
    // DE: "amazon seo" 480 SV (keep same)
    // FR: "seo amazon" 170 SV
    // ES: "amazon seo" 320 SV (keep same)
    // IT: "amazon seo" 70 SV (keep same)
    // NL: "amazon seo" 110 SV (keep same)
    fr: "seo-amazon",
  },

  /* ── Industry SEO Pages ─────────────────────────────────────────── */
  "fashion-seo": {
    // DE: "mode seo" 10 SV (low but correct industry term). "online shop seo" now used by ecommerce-seo page
    de: "mode-seo",
    fr: "seo-mode",
    es: "seo-moda",
    it: "seo-moda",
    nl: "mode-seo",
  },
  "beauty-seo": {
    de: "beauty-shop-seo",
    fr: "seo-beaute",
    es: "seo-belleza",
    it: "seo-bellezza",
    nl: "beauty-webshop-seo",
  },
  "consumables-seo": {
    de: "konsumgueter-seo",
    fr: "seo-produits-consommables",
    es: "seo-consumibles",
    it: "seo-beni-consumo",
    nl: "verbruiksproducten-seo",
  },
  "toys-seo": {
    de: "spielzeug-seo",
    fr: "seo-jouets",
    es: "seo-juguetes",
    it: "seo-giocattoli",
    nl: "speelgoed-seo",
  },

  /* ── Navigation / Company Pages ─────────────────────────────────── */
  pricing: {
    de: "preise",
    fr: "tarifs",
    es: "precios",
    it: "prezzi",
    nl: "prijzen",
  },
  contact: {
    de: "kontakt",
    fr: "nous-contacter",
    es: "contacto",
    it: "contatti",
    nl: "neem-contact-op",
  },
  faq: {
    de: "haeufige-fragen",
    fr: "questions-frequentes",
    es: "preguntas-frecuentes",
    it: "domande-frequenti",
    nl: "veelgestelde-vragen",
  },
  team: {
    de: "unser-team",
    fr: "equipe",
    es: "equipo",
    it: "chi-siamo",
    nl: "ons-team",
  },
  cases: {
    de: "fallstudien",
    fr: "etudes-de-cas",
    es: "casos-estudio",
    it: "casi-studio",
    nl: "referenties",
  },

  /* ── Tools Section ──────────────────────────────────────────────── */
  tools: {
    // DE: "seo tools" 3600 SV, KD 43
    // FR: "outils seo" 2400 SV, KD 27
    // ES: "herramientas seo" 1300 SV, KD 34
    // IT: "strumenti seo" 260 SV, KD 2
    // NL: "seo tools" 1000 SV, KD 1
    de: "seo-tools",
    fr: "outils-seo",
    es: "herramientas-seo",
    it: "strumenti-seo",
    nl: "seo-tools",
  },
  "tools/shopify-seo-audit": {
    de: "seo-tools/shopify-seo-audit",
    fr: "outils-seo/audit-seo-shopify",
    es: "herramientas-seo/auditoria-seo-shopify",
    it: "strumenti-seo/audit-seo-shopify",
    nl: "seo-tools/shopify-seo-audit",
  },
  "tools/ecommerce-seo-audit": {
    de: "seo-tools/ecommerce-seo-audit",
    fr: "outils-seo/audit-seo-ecommerce",
    es: "herramientas-seo/auditoria-seo-ecommerce",
    it: "strumenti-seo/audit-seo-ecommerce",
    nl: "seo-tools/ecommerce-seo-audit",
  },
  "tools/serp-simulator": {
    de: "seo-tools/serp-simulator",
    fr: "outils-seo/simulateur-serp",
    es: "herramientas-seo/simulador-serp",
    it: "strumenti-seo/simulatore-serp",
    nl: "seo-tools/serp-simulator",
  },
  "tools/schema-generator": {
    de: "seo-tools/schema-generator",
    fr: "outils-seo/generateur-schema",
    es: "herramientas-seo/generador-schema",
    it: "strumenti-seo/generatore-schema",
    nl: "seo-tools/schema-generator",
  },
  "tools/og-checker": {
    de: "seo-tools/og-checker",
    fr: "outils-seo/verificateur-og",
    es: "herramientas-seo/verificador-og",
    it: "strumenti-seo/verifica-og",
    nl: "seo-tools/og-checker",
  },
  "tools/robots-txt-analyzer": {
    de: "seo-tools/robots-txt-analyse",
    fr: "outils-seo/analyseur-robots-txt",
    es: "herramientas-seo/analizador-robots-txt",
    it: "strumenti-seo/analisi-robots-txt",
    nl: "seo-tools/robots-txt-analyse",
  },
  "tools/meta-tags-checker": {
    de: "seo-tools/meta-tags-checker",
    fr: "outils-seo/verificateur-meta-tags",
    es: "herramientas-seo/verificador-meta-tags",
    it: "strumenti-seo/verifica-meta-tag",
    nl: "seo-tools/meta-tags-checker",
  },
  "tools/heading-checker": {
    de: "seo-tools/heading-checker",
    fr: "outils-seo/verificateur-titres",
    es: "herramientas-seo/verificador-encabezados",
    it: "strumenti-seo/verifica-intestazioni",
    nl: "seo-tools/heading-checker",
  },
  "tools/canonical-checker": {
    de: "seo-tools/canonical-checker",
    fr: "outils-seo/verificateur-canonical",
    es: "herramientas-seo/verificador-canonical",
    it: "strumenti-seo/verifica-canonical",
    nl: "seo-tools/canonical-checker",
  },
  "tools/indexability-checker": {
    de: "seo-tools/indexierbarkeit-checker",
    fr: "outils-seo/verificateur-indexabilite",
    es: "herramientas-seo/verificador-indexabilidad",
    it: "strumenti-seo/verifica-indicizzabilita",
    nl: "seo-tools/indexeerbaarheid-checker",
  },
  "tools/page-type-classifier": {
    de: "seo-tools/seitentyp-klassifikator",
    fr: "outils-seo/classificateur-type-page",
    es: "herramientas-seo/clasificador-tipo-pagina",
    it: "strumenti-seo/classificatore-tipo-pagina",
    nl: "seo-tools/paginatype-classificator",
  },
  "tools/sitemap-comparison": {
    de: "seo-tools/sitemap-vergleich",
    fr: "outils-seo/comparaison-sitemap",
    es: "herramientas-seo/comparacion-sitemap",
    it: "strumenti-seo/confronto-sitemap",
    nl: "seo-tools/sitemap-vergelijking",
  },
  "tools/thin-content-checker": {
    de: "seo-tools/thin-content-checker",
    fr: "outils-seo/verificateur-contenu-mince",
    es: "herramientas-seo/verificador-contenido-delgado",
    it: "strumenti-seo/verifica-contenuto-sottile",
    nl: "seo-tools/thin-content-checker",
  },
  "tools/core-web-vitals": {
    de: "seo-tools/core-web-vitals",
    fr: "outils-seo/core-web-vitals",
    es: "herramientas-seo/core-web-vitals",
    it: "strumenti-seo/core-web-vitals",
    nl: "seo-tools/core-web-vitals",
  },
  "tools/schema-validator": {
    de: "seo-tools/schema-validator",
    fr: "outils-seo/validateur-schema",
    es: "herramientas-seo/validador-schema",
    it: "strumenti-seo/validatore-schema",
    nl: "seo-tools/schema-validator",
  },
  "tools/redirect-checker": {
    de: "seo-tools/redirect-checker",
    fr: "outils-seo/verificateur-redirection",
    es: "herramientas-seo/verificador-redireccion",
    it: "strumenti-seo/verifica-redirect",
    nl: "seo-tools/redirect-checker",
  },
  "tools/hreflang-validator": {
    de: "seo-tools/hreflang-validator",
    fr: "outils-seo/validateur-hreflang",
    es: "herramientas-seo/validador-hreflang",
    it: "strumenti-seo/validatore-hreflang",
    nl: "seo-tools/hreflang-validator",
  },
  "tools/image-auditor": {
    de: "seo-tools/bild-audit",
    fr: "outils-seo/audit-images",
    es: "herramientas-seo/auditor-imagenes",
    it: "strumenti-seo/audit-immagini",
    nl: "seo-tools/afbeelding-audit",
  },
  "tools/duplicate-content": {
    de: "seo-tools/duplicate-content",
    fr: "outils-seo/contenu-duplique",
    es: "herramientas-seo/contenido-duplicado",
    it: "strumenti-seo/contenuto-duplicato",
    nl: "seo-tools/duplicate-content",
  },
  "tools/shopping-feed-validator": {
    de: "seo-tools/shopping-feed-validator",
    fr: "outils-seo/validateur-flux-shopping",
    es: "herramientas-seo/validador-feed-shopping",
    it: "strumenti-seo/validatore-feed-shopping",
    nl: "seo-tools/shopping-feed-validator",
  },
  "tools/internal-link-analyzer": {
    de: "seo-tools/interne-links-analyse",
    fr: "outils-seo/analyseur-liens-internes",
    es: "herramientas-seo/analizador-enlaces-internos",
    it: "strumenti-seo/analisi-link-interni",
    nl: "seo-tools/interne-links-analyse",
  },
  "tools/site-speed-comparison": {
    de: "seo-tools/seitengeschwindigkeit-vergleich",
    fr: "outils-seo/comparaison-vitesse-site",
    es: "herramientas-seo/comparacion-velocidad-sitio",
    it: "strumenti-seo/confronto-velocita-sito",
    nl: "seo-tools/sitesnelheid-vergelijking",
  },
  "tools/sitemap-extractor": {
    de: "seo-tools/sitemap-extractor",
    fr: "outils-seo/extracteur-sitemap",
    es: "herramientas-seo/extractor-sitemap",
    it: "strumenti-seo/estrattore-sitemap",
    nl: "seo-tools/sitemap-extractor",
  },

  /* ── Academy Section ────────────────────────────────────────────── */
  academy: {
    de: "seo-akademie",
    fr: "academie-seo",
    es: "academia-seo",
    it: "accademia-seo",
    nl: "seo-academie",
  },

  /* ── Blog Section ───────────────────────────────────────────────── */
  blog: {
    de: "ratgeber",
    fr: "articles",
    es: "articulos",
    it: "articoli",
    nl: "kennisbank",
  },
  "blog/ecommerce-seo": {
    de: "ratgeber/ecommerce-seo-leitfaden",
    es: "articulos/seo-ecommerce",
    fr: "articles/seo-ecommerce",
    it: "articoli/seo-ecommerce",
    nl: "kennisbank/ecommerce-seo-gids",
  },
  "blog/how-to-make-ecommerce-seo-audit": {
    de: "ratgeber/wie-ecommerce-seo-audit-machen",
    es: "articulos/como-hacer-auditoria-seo-ecommerce",
    fr: "articles/comment-faire-audit-seo-ecommerce",
    it: "articoli/come-fare-audit-seo-ecommerce",
    nl: "kennisbank/hoe-ecommerce-seo-audit-maken",
  },
  "blog/ecommerce-seo-consultant": {
    de: "ratgeber/ecommerce-seo-berater",
    es: "articulos/consultor-seo-ecommerce",
    fr: "articles/consultant-seo-ecommerce",
    it: "articoli/consulente-seo-ecommerce",
    nl: "kennisbank/ecommerce-seo-adviseur",
  },
  "blog/ecommerce-seo-packages": {
    de: "ratgeber/ecommerce-seo-pakete",
    es: "articulos/paquetes-seo-ecommerce",
    fr: "articles/forfaits-seo-ecommerce",
    it: "articoli/pacchetti-seo-ecommerce",
    nl: "kennisbank/ecommerce-seo-pakketten",
  },
  "blog/ecommerce-seo-agencies": {
    de: "ratgeber/ecommerce-seo-agenturen",
    es: "articulos/agencias-seo-ecommerce",
    fr: "articles/agences-seo-ecommerce",
    it: "articoli/agenzie-seo-ecommerce",
    nl: "kennisbank/ecommerce-seo-bureaus",
  },
  "blog/ecommerce-seo-tips": {
    de: "ratgeber/ecommerce-seo-tipps",
    es: "articulos/consejos-seo-ecommerce",
    fr: "articles/conseils-seo-ecommerce",
    it: "articoli/consigli-seo-ecommerce",
    nl: "kennisbank/ecommerce-seo-adviezen",
  },
  "blog/ecommerce-seo-strategy": {
    de: "ratgeber/ecommerce-seo-strategie",
    es: "articulos/estrategia-seo-ecommerce",
    fr: "articles/strategie-seo-ecommerce",
    it: "articoli/strategia-seo-ecommerce",
    nl: "kennisbank/ecommerce-seo-strategie",
  },
  "blog/ecommerce-seo-checklist": {
    de: "ratgeber/ecommerce-seo-checkliste",
    es: "articulos/checklist-seo-ecommerce",
    fr: "articles/checklist-seo-ecommerce",
    it: "articoli/checklist-seo-ecommerce",
    nl: "kennisbank/ecommerce-seo-controlelijst",
  },
  "blog/on-page-seo-for-ecommerce": {
    de: "ratgeber/on-page-seo-fuer-ecommerce",
    es: "articulos/seo-on-page-ecommerce",
    fr: "articles/seo-on-page-ecommerce",
    it: "articoli/seo-on-page-ecommerce",
    nl: "kennisbank/on-page-seo-voor-ecommerce",
  },
  "blog/seo-for-ecommerce-product-pages": {
    de: "ratgeber/seo-fuer-ecommerce-produktseiten",
    es: "articulos/seo-paginas-producto-ecommerce",
    fr: "articles/seo-pages-produits-ecommerce",
    it: "articoli/seo-pagine-prodotto-ecommerce",
    nl: "kennisbank/seo-voor-ecommerce-productpaginas",
  },
  "blog/ecommerce-category-page-seo": {
    de: "ratgeber/ecommerce-kategorieseiten-seo",
    es: "articulos/seo-paginas-categoria-ecommerce",
    fr: "articles/seo-pages-categories-ecommerce",
    it: "articoli/seo-pagine-categoria-ecommerce",
    nl: "kennisbank/ecommerce-categoriepagina-seo",
  },
  "blog/technical-seo-for-ecommerce": {
    de: "ratgeber/technisches-seo-fuer-ecommerce",
    es: "articulos/seo-tecnico-ecommerce",
    fr: "articles/seo-technique-ecommerce",
    it: "articoli/seo-tecnico-ecommerce",
    nl: "kennisbank/technische-seo-voor-ecommerce",
  },
  "blog/ecommerce-seo-keywords": {
    de: "ratgeber/ecommerce-seo-schluesselwoerter",
    es: "articulos/palabras-clave-seo-ecommerce",
    fr: "articles/mots-cles-seo-ecommerce",
    it: "articoli/parole-chiave-seo-ecommerce",
    nl: "kennisbank/ecommerce-seo-zoekwoorden",
  },
  "blog/off-page-seo-for-ecommerce": {
    de: "ratgeber/off-page-seo-fuer-ecommerce",
    es: "articulos/seo-off-page-ecommerce",
    fr: "articles/seo-off-page-ecommerce",
    it: "articoli/seo-off-page-ecommerce",
    nl: "kennisbank/off-page-seo-voor-ecommerce",
  },
  "blog/magento-ecommerce-seo": {
    de: "ratgeber/magento-ecommerce-seo-leitfaden",
    es: "articulos/seo-ecommerce-magento",
    fr: "articles/seo-ecommerce-magento",
    it: "articoli/seo-ecommerce-magento",
    nl: "kennisbank/magento-ecommerce-seo-gids",
  },
  "blog/shopify-ecommerce-seo": {
    de: "ratgeber/shopify-ecommerce-seo-leitfaden",
    es: "articulos/seo-ecommerce-shopify",
    fr: "articles/seo-ecommerce-shopify",
    it: "articoli/seo-ecommerce-shopify",
    nl: "kennisbank/shopify-ecommerce-seo-gids",
  },
  "blog/ecommerce-seo-migration": {
    de: "ratgeber/ecommerce-seo-migration-leitfaden",
    es: "articulos/migracion-seo-ecommerce",
    fr: "articles/migration-seo-ecommerce",
    it: "articoli/migrazione-seo-ecommerce",
    nl: "kennisbank/ecommerce-seo-migratie",
  },
  "blog/international-ecommerce-seo": {
    de: "ratgeber/internationales-ecommerce-seo",
    es: "articulos/seo-ecommerce-internacional",
    fr: "articles/seo-ecommerce-international",
    it: "articoli/seo-ecommerce-internazionale",
    nl: "kennisbank/internationaal-ecommerce-seo",
  },
  "blog/b2b-ecommerce-seo": {
    de: "ratgeber/b2b-ecommerce-seo-leitfaden",
    es: "articulos/seo-ecommerce-b2b",
    fr: "articles/seo-ecommerce-b2b",
    it: "articoli/seo-ecommerce-b2b",
    nl: "kennisbank/b2b-ecommerce-seo-gids",
  },
  "blog/fashion-ecommerce-seo": {
    de: "ratgeber/mode-ecommerce-seo",
    es: "articulos/seo-ecommerce-moda",
    fr: "articles/seo-ecommerce-mode",
    it: "articoli/seo-ecommerce-moda",
    nl: "kennisbank/mode-ecommerce-seo",
  },
  "blog/ecommerce-seo-mistakes": {
    de: "ratgeber/ecommerce-seo-fehler",
    es: "articulos/errores-seo-ecommerce",
    fr: "articles/erreurs-seo-ecommerce",
    it: "articoli/errori-seo-ecommerce",
    nl: "kennisbank/ecommerce-seo-fouten",
  },
  "blog/why-is-seo-important-for-ecommerce": {
    de: "ratgeber/warum-seo-wichtig-fuer-ecommerce",
    es: "articulos/por-que-seo-importante-ecommerce",
    fr: "articles/pourquoi-seo-important-ecommerce",
    it: "articoli/perche-seo-importante-ecommerce",
    nl: "kennisbank/waarom-seo-belangrijk-voor-ecommerce",
  },
  "blog/advanced-ecommerce-seo-techniques": {
    de: "ratgeber/fortgeschrittene-ecommerce-seo-techniken",
    es: "articulos/tecnicas-avanzadas-seo-ecommerce",
    fr: "articles/techniques-avancees-seo-ecommerce",
    it: "articoli/tecniche-avanzate-seo-ecommerce",
    nl: "kennisbank/geavanceerde-ecommerce-seo-technieken",
  },
  "blog/ecommerce-seo-india": {
    de: "ratgeber/ecommerce-seo-indien",
    es: "articulos/seo-ecommerce-india",
    fr: "articles/seo-ecommerce-inde",
    it: "articoli/seo-ecommerce-india",
    nl: "kennisbank/ecommerce-seo-india-gids",
  },
  "blog/ecommerce-seo-pricing": {
    de: "ratgeber/ecommerce-seo-preise",
    es: "articulos/precios-seo-ecommerce",
    fr: "articles/tarifs-seo-ecommerce",
    it: "articoli/prezzi-seo-ecommerce",
    nl: "kennisbank/ecommerce-seo-prijzen",
  },
  "blog/ecommerce-seo-tools": {
    de: "ratgeber/ecommerce-seo-werkzeuge",
    es: "articulos/herramientas-seo-ecommerce",
    fr: "articles/outils-seo-ecommerce",
    it: "articoli/strumenti-seo-ecommerce",
    nl: "kennisbank/ecommerce-seo-gereedschappen",
  },
  "blog/ecommerce-homepage-seo": {
    de: "ratgeber/ecommerce-homepage-seo-leitfaden",
    es: "articulos/seo-pagina-inicio-ecommerce",
    fr: "articles/seo-page-accueil-ecommerce",
    it: "articoli/seo-homepage-ecommerce",
    nl: "kennisbank/ecommerce-homepage-seo-gids",
  },
  "blog/ecommerce-seo-content": {
    de: "ratgeber/ecommerce-seo-inhalte",
    es: "articulos/contenido-seo-ecommerce",
    fr: "articles/contenu-seo-ecommerce",
    it: "articoli/contenuti-seo-ecommerce",
    nl: "kennisbank/ecommerce-seo-inhoud",
  },
  "blog/ecommerce-seo-marketing": {
    de: "ratgeber/ecommerce-seo-vermarktung",
    es: "articulos/marketing-seo-ecommerce",
    fr: "articles/marketing-seo-ecommerce",
    it: "articoli/marketing-seo-ecommerce",
    nl: "kennisbank/ecommerce-seo-marketing-gids",
  },
  "blog/enterprise-ecommerce-seo": {
    de: "ratgeber/enterprise-ecommerce-seo-leitfaden",
    es: "articulos/seo-ecommerce-empresa",
    fr: "articles/seo-ecommerce-entreprise",
    it: "articoli/seo-ecommerce-enterprise",
    nl: "kennisbank/enterprise-ecommerce-seo-gids",
  },
  "blog/author/fabian-van-til": {
    de: "ratgeber/autor/fabian-van-til",
    fr: "articles/auteur/fabian-van-til",
    es: "articulos/autor/fabian-van-til",
    it: "articoli/autore/fabian-van-til",
    nl: "kennisbank/auteur/fabian-van-til",
  },

  /* ── Resources Section ──────────────────────────────────────────── */
  resources: {
    de: "ressourcen",
    fr: "ressources",
    es: "recursos",
    it: "risorse",
    nl: "seo-bronnen",
  },

  /* ── Legal / Utility Pages ──────────────────────────────────────── */
  "privacy-policy": {
    de: "datenschutz",
    fr: "politique-confidentialite",
    es: "politica-privacidad",
    it: "informativa-privacy",
    nl: "privacybeleid",
  },
  "terms-of-service": {
    de: "nutzungsbedingungen",
    fr: "conditions-utilisation",
    es: "terminos-servicio",
    it: "termini-servizio",
    nl: "algemene-voorwaarden",
  },
  "premium-on-page-seo-checklist": {
    de: "premium-on-page-seo-checkliste",
    fr: "checklist-seo-on-page",
    es: "checklist-seo-on-page",
    it: "checklist-seo-on-page",
    nl: "premium-on-page-seo-checklist-gratis",
  },
  // "page" slug translations removed — the /page route was a noindex Linktree
  // profile that surfaced as /de/seite, /nl/pagina, /es/pagina, /it/pagina
  // variants in GSC. Page route deleted (2026-05-16), so these slug mappings
  // would only create dead 404s and confusing hreflang.
  "tools/intent-matching-tool": {
    de: "seo-tools/intent-analyse-tool",
    fr: "outils-seo/outil-correspondance-intention",
    es: "herramientas-seo/herramienta-coincidencia-intencion",
    it: "strumenti-seo/strumento-corrispondenza-intento",
    nl: "seo-tools/zoekintentie-tool",
  },


  /* ── Academy Lesson Slugs ──────────────────────────────────────── */
  "academy/ai-search-optimization": {
    de: "seo-akademie/ki-suchoptimierung",
    fr: "academie-seo/optimisation-recherche-ia",
    es: "academia-seo/optimizacion-busqueda-ia",
    it: "accademia-seo/ottimizzazione-ricerca-ia",
    nl: "seo-academie/ai-zoekoptimalisatie",
  },
  "academy/backlink-fundamentals-for-ecommerce": {
    de: "seo-akademie/backlink-grundlagen-fuer-ecommerce",
    fr: "academie-seo/fondamentaux-backlinks-ecommerce",
    es: "academia-seo/fundamentos-backlinks-ecommerce",
    it: "accademia-seo/fondamenti-backlink-ecommerce",
    nl: "seo-academie/backlink-basis-voor-ecommerce",
  },
  "academy/bigcommerce-seo-guide": {
    de: "seo-akademie/bigcommerce-seo-leitfaden",
    fr: "academie-seo/guide-seo-bigcommerce",
    es: "academia-seo/guia-seo-bigcommerce",
    it: "accademia-seo/guida-seo-bigcommerce",
    nl: "seo-academie/bigcommerce-seo-gids",
  },
  "academy/broken-link-building": {
    de: "seo-akademie/defekte-links-aufbau",
    fr: "academie-seo/liens-casses-link-building",
    es: "academia-seo/construccion-enlaces-rotos",
    it: "accademia-seo/link-building-link-rotti",
    nl: "seo-academie/gebroken-linkbuilding",
  },
  "academy/buyer-intent-vs-search-volume": {
    de: "seo-akademie/kaufabsicht-vs-suchvolumen",
    fr: "academie-seo/intention-achat-vs-volume-recherche",
    es: "academia-seo/intencion-compra-vs-volumen-busqueda",
    it: "accademia-seo/intento-acquisto-vs-volume-ricerca",
    nl: "seo-academie/koopintentie-vs-zoekvolume",
  },
  "academy/buying-guides-and-comparisons": {
    de: "seo-akademie/kaufratgeber-und-vergleiche",
    fr: "academie-seo/guides-achat-comparatifs",
    es: "academia-seo/guias-compra-comparativas",
    it: "accademia-seo/guide-acquisto-confronti",
    nl: "seo-academie/koopgidsen-en-vergelijkingen",
  },
  "academy/calculating-seo-roi": {
    de: "seo-akademie/seo-roi-berechnen",
    fr: "academie-seo/calcul-roi-seo",
    es: "academia-seo/calculo-roi-seo",
    it: "accademia-seo/calcolo-roi-seo",
    nl: "seo-academie/seo-roi-berekenen",
  },
  "academy/canonical-tags-for-ecommerce": {
    de: "seo-akademie/canonical-tags-fuer-ecommerce",
    fr: "academie-seo/balises-canonical-ecommerce",
    es: "academia-seo/etiquetas-canonical-ecommerce",
    it: "accademia-seo/tag-canonical-ecommerce",
    nl: "seo-academie/canonical-tags-voor-ecommerce",
  },
  "academy/category-page-seo": {
    de: "seo-akademie/kategorieseiten-seo",
    fr: "academie-seo/seo-pages-categories",
    es: "academia-seo/seo-paginas-categoria",
    it: "accademia-seo/seo-pagine-categoria",
    nl: "seo-academie/categoriepagina-seo",
  },
  "academy/competitor-backlink-analysis": {
    de: "seo-akademie/wettbewerber-backlink-analyse",
    fr: "academie-seo/analyse-backlinks-concurrents",
    es: "academia-seo/analisis-backlinks-competencia",
    it: "accademia-seo/analisi-backlink-concorrenza",
    nl: "seo-academie/concurrent-backlink-analyse",
  },
  "academy/competitor-keyword-analysis": {
    de: "seo-akademie/wettbewerber-keyword-analyse",
    fr: "academie-seo/analyse-mots-cles-concurrents",
    es: "academia-seo/analisis-palabras-clave-competencia",
    it: "accademia-seo/analisi-parole-chiave-concorrenza",
    nl: "seo-academie/concurrent-zoekwoord-analyse",
  },
  "academy/content-pruning-and-consolidation": {
    de: "seo-akademie/content-bereinigung-und-konsolidierung",
    fr: "academie-seo/elagage-consolidation-contenu",
    es: "academia-seo/depuracion-consolidacion-contenido",
    it: "accademia-seo/potatura-consolidamento-contenuti",
    nl: "seo-academie/content-opschoning-en-consolidatie",
  },
  "academy/content-strategy-for-stores": {
    de: "seo-akademie/content-strategie-fuer-shops",
    fr: "academie-seo/strategie-contenu-boutiques",
    es: "academia-seo/estrategia-contenido-tiendas",
    it: "accademia-seo/strategia-contenuti-negozi",
    nl: "seo-academie/content-strategie-voor-webshops",
  },
  "academy/crawl-budget-management": {
    de: "seo-akademie/crawl-budget-verwaltung",
    fr: "academie-seo/gestion-budget-crawl",
    es: "academia-seo/gestion-presupuesto-rastreo",
    it: "accademia-seo/gestione-budget-crawl",
    nl: "seo-academie/crawl-budget-beheer",
  },
  "academy/crawling-and-indexing-product-pages": {
    de: "seo-akademie/crawling-und-indexierung-produktseiten",
    fr: "academie-seo/exploration-indexation-pages-produits",
    es: "academia-seo/rastreo-indexacion-paginas-producto",
    it: "accademia-seo/scansione-indicizzazione-pagine-prodotto",
    nl: "seo-academie/crawling-en-indexering-productpaginas",
  },
  "academy/digital-pr-for-ecommerce": {
    de: "seo-akademie/digitale-pr-fuer-ecommerce",
    fr: "academie-seo/rp-digital-ecommerce",
    es: "academia-seo/rp-digital-ecommerce",
    it: "accademia-seo/digital-pr-ecommerce",
    nl: "seo-academie/digitale-pr-voor-ecommerce",
  },
  "academy/ecommerce-blog-seo": {
    de: "seo-akademie/ecommerce-blog-seo",
    fr: "academie-seo/seo-blog-ecommerce",
    es: "academia-seo/seo-blog-ecommerce",
    it: "accademia-seo/seo-blog-ecommerce",
    nl: "seo-academie/ecommerce-blog-seo",
  },
  "academy/ecommerce-ranking-factors": {
    de: "seo-akademie/ecommerce-ranking-faktoren",
    fr: "academie-seo/facteurs-classement-ecommerce",
    es: "academia-seo/factores-posicionamiento-ecommerce",
    it: "accademia-seo/fattori-posizionamento-ecommerce",
    nl: "seo-academie/ecommerce-ranking-factoren",
  },
  "academy/ecommerce-seo-automation": {
    de: "seo-akademie/ecommerce-seo-automatisierung",
    fr: "academie-seo/automatisation-seo-ecommerce",
    es: "academia-seo/automatizacion-seo-ecommerce",
    it: "accademia-seo/automazione-seo-ecommerce",
    nl: "seo-academie/ecommerce-seo-automatisering",
  },
  "academy/electronics-tech-seo": {
    de: "seo-akademie/elektronik-technik-seo",
    fr: "academie-seo/seo-electronique-tech",
    es: "academia-seo/seo-electronica-tech",
    it: "accademia-seo/seo-elettronica-tech",
    nl: "seo-academie/elektronica-tech-seo",
  },
  "academy/email-outreach-for-links": {
    de: "seo-akademie/email-outreach-fuer-links",
    fr: "academie-seo/prospection-email-liens",
    es: "academia-seo/difusion-email-enlaces",
    it: "accademia-seo/outreach-email-link",
    nl: "seo-academie/email-outreach-voor-links",
  },
  "academy/faceted-navigation-seo": {
    de: "seo-akademie/facettierte-navigation-seo",
    fr: "academie-seo/navigation-facettes-seo",
    es: "academia-seo/navegacion-facetada-seo",
    it: "accademia-seo/navigazione-filtrata-seo",
    nl: "seo-academie/gefacetteerde-navigatie-seo",
  },
  "academy/faq-pages-for-ecommerce": {
    de: "seo-akademie/faq-seiten-fuer-ecommerce",
    fr: "academie-seo/pages-faq-ecommerce",
    es: "academia-seo/paginas-faq-ecommerce",
    it: "accademia-seo/pagine-faq-ecommerce",
    nl: "seo-academie/faq-paginas-voor-ecommerce",
  },
  "academy/fashion-apparel-seo": {
    de: "seo-akademie/mode-bekleidung-seo",
    fr: "academie-seo/seo-mode-vetements",
    es: "academia-seo/seo-moda-ropa",
    it: "accademia-seo/seo-moda-abbigliamento",
    nl: "seo-academie/mode-kleding-seo",
  },
  "academy/food-beverage-seo": {
    de: "seo-akademie/lebensmittel-getraenke-seo",
    fr: "academie-seo/seo-alimentation-boissons",
    es: "academia-seo/seo-alimentacion-bebidas",
    it: "accademia-seo/seo-alimentare-bevande",
    nl: "seo-academie/voeding-dranken-seo",
  },
  "academy/google-search-console-for-stores": {
    de: "seo-akademie/google-search-console-fuer-shops",
    fr: "academie-seo/google-search-console-boutiques",
    es: "academia-seo/google-search-console-tiendas",
    it: "accademia-seo/google-search-console-negozi",
    nl: "seo-academie/google-search-console-voor-webshops",
  },
  "academy/guest-posting-for-ecommerce": {
    de: "seo-akademie/gastbeitraege-fuer-ecommerce",
    fr: "academie-seo/articles-invites-ecommerce",
    es: "academia-seo/articulos-invitados-ecommerce",
    it: "accademia-seo/guest-posting-ecommerce",
    nl: "seo-academie/gastbloggen-voor-ecommerce",
  },
  "academy/heading-structure-for-ecommerce": {
    de: "seo-akademie/ueberschriften-struktur-fuer-ecommerce",
    fr: "academie-seo/structure-titres-ecommerce",
    es: "academia-seo/estructura-encabezados-ecommerce",
    it: "accademia-seo/struttura-intestazioni-ecommerce",
    nl: "seo-academie/heading-structuur-voor-ecommerce",
  },
  "academy/health-beauty-seo": {
    de: "seo-akademie/gesundheit-beauty-seo",
    fr: "academie-seo/seo-sante-beaute",
    es: "academia-seo/seo-salud-belleza",
    it: "accademia-seo/seo-salute-bellezza",
    nl: "seo-academie/gezondheid-beauty-seo",
  },
  "academy/home-garden-seo": {
    de: "seo-akademie/haus-garten-seo",
    fr: "academie-seo/seo-maison-jardin",
    es: "academia-seo/seo-hogar-jardin",
    it: "accademia-seo/seo-casa-giardino",
    nl: "seo-academie/huis-tuin-seo",
  },
  "academy/homepage-seo-for-ecommerce": {
    de: "seo-akademie/homepage-seo-fuer-ecommerce",
    fr: "academie-seo/seo-page-accueil-ecommerce",
    es: "academia-seo/seo-pagina-inicio-ecommerce",
    it: "accademia-seo/seo-homepage-ecommerce",
    nl: "seo-academie/homepage-seo-voor-ecommerce",
  },
  "academy/how-google-finds-online-stores": {
    de: "seo-akademie/wie-google-online-shops-findet",
    fr: "academie-seo/comment-google-trouve-boutiques-en-ligne",
    es: "academia-seo/como-google-encuentra-tiendas-online",
    it: "accademia-seo/come-google-trova-negozi-online",
    nl: "seo-academie/hoe-google-webshops-vindt",
  },
  "academy/image-optimization-for-products": {
    de: "seo-akademie/bildoptimierung-fuer-produkte",
    fr: "academie-seo/optimisation-images-produits",
    es: "academia-seo/optimizacion-imagenes-productos",
    it: "accademia-seo/ottimizzazione-immagini-prodotti",
    nl: "seo-academie/afbeelding-optimalisatie-voor-producten",
  },
  "academy/internal-linking-for-stores": {
    de: "seo-akademie/interne-verlinkung-fuer-shops",
    fr: "academie-seo/maillage-interne-boutiques",
    es: "academia-seo/enlazado-interno-tiendas",
    it: "accademia-seo/collegamento-interno-negozi",
    nl: "seo-academie/interne-links-voor-webshops",
  },
  "academy/international-ecommerce-seo": {
    de: "seo-akademie/internationales-ecommerce-seo",
    fr: "academie-seo/seo-ecommerce-international",
    es: "academia-seo/seo-ecommerce-internacional",
    it: "accademia-seo/seo-ecommerce-internazionale",
    nl: "seo-academie/internationaal-ecommerce-seo",
  },
  "academy/introduction-to-ecommerce-seo": {
    de: "seo-akademie/einfuehrung-ecommerce-seo",
    fr: "academie-seo/introduction-seo-ecommerce",
    es: "academia-seo/introduccion-seo-ecommerce",
    it: "accademia-seo/introduzione-seo-ecommerce",
    nl: "seo-academie/introductie-ecommerce-seo",
  },
  "academy/javascript-seo-for-ecommerce": {
    de: "seo-akademie/javascript-seo-fuer-ecommerce",
    fr: "academie-seo/seo-javascript-ecommerce",
    es: "academia-seo/seo-javascript-ecommerce",
    it: "accademia-seo/seo-javascript-ecommerce",
    nl: "seo-academie/javascript-seo-voor-ecommerce",
  },
  "academy/keyword-mapping-for-stores": {
    de: "seo-akademie/keyword-mapping-fuer-shops",
    fr: "academie-seo/mapping-mots-cles-boutiques",
    es: "academia-seo/mapeo-palabras-clave-tiendas",
    it: "accademia-seo/mappatura-parole-chiave-negozi",
    nl: "seo-academie/zoekwoord-mapping-voor-webshops",
  },
  "academy/keyword-research-for-ecommerce": {
    de: "seo-akademie/keyword-recherche-fuer-ecommerce",
    fr: "academie-seo/recherche-mots-cles-ecommerce",
    es: "academia-seo/investigacion-palabras-clave-ecommerce",
    it: "accademia-seo/ricerca-parole-chiave-ecommerce",
    nl: "seo-academie/zoekwoordenonderzoek-voor-ecommerce",
  },
  "academy/log-file-analysis": {
    de: "seo-akademie/logdatei-analyse",
    fr: "academie-seo/analyse-fichiers-log",
    es: "academia-seo/analisis-archivos-log",
    it: "accademia-seo/analisi-file-log",
    nl: "seo-academie/logbestand-analyse",
  },
  "academy/long-tail-keywords-for-products": {
    de: "seo-akademie/long-tail-keywords-fuer-produkte",
    fr: "academie-seo/mots-cles-longue-traine-produits",
    es: "academia-seo/palabras-clave-long-tail-productos",
    it: "accademia-seo/parole-chiave-long-tail-prodotti",
    nl: "seo-academie/long-tail-zoekwoorden-voor-producten",
  },
  "academy/magento-seo-guide": {
    de: "seo-akademie/magento-seo-leitfaden",
    fr: "academie-seo/guide-seo-magento",
    es: "academia-seo/guia-seo-magento",
    it: "accademia-seo/guida-seo-magento",
    nl: "seo-academie/magento-seo-gids",
  },
  "academy/mobile-first-for-ecommerce": {
    de: "seo-akademie/mobile-first-fuer-ecommerce",
    fr: "academie-seo/mobile-first-ecommerce",
    es: "academia-seo/mobile-first-ecommerce",
    it: "accademia-seo/mobile-first-ecommerce",
    nl: "seo-academie/mobile-first-voor-ecommerce",
  },
  "academy/platform-migration-seo": {
    de: "seo-akademie/plattform-migration-seo",
    fr: "academie-seo/migration-plateforme-seo",
    es: "academia-seo/migracion-plataforma-seo",
    it: "accademia-seo/migrazione-piattaforma-seo",
    nl: "seo-academie/platform-migratie-seo",
  },
  "academy/product-page-seo": {
    de: "seo-akademie/produktseiten-seo",
    fr: "academie-seo/seo-pages-produits",
    es: "academia-seo/seo-paginas-producto",
    it: "accademia-seo/seo-pagine-prodotto",
    nl: "seo-academie/productpagina-seo",
  },
  "academy/product-vs-category-keywords": {
    de: "seo-akademie/produkt-vs-kategorie-keywords",
    fr: "academie-seo/mots-cles-produit-vs-categorie",
    es: "academia-seo/palabras-clave-producto-vs-categoria",
    it: "accademia-seo/parole-chiave-prodotto-vs-categoria",
    nl: "seo-academie/product-vs-categorie-zoekwoorden",
  },
  "academy/programmatic-seo-for-ecommerce": {
    de: "seo-akademie/programmatisches-seo-fuer-ecommerce",
    fr: "academie-seo/seo-programmatique-ecommerce",
    es: "academia-seo/seo-programatico-ecommerce",
    it: "accademia-seo/seo-programmatico-ecommerce",
    nl: "seo-academie/programmatische-seo-voor-ecommerce",
  },
  "academy/rank-tracking-for-ecommerce": {
    de: "seo-akademie/ranking-tracking-fuer-ecommerce",
    fr: "academie-seo/suivi-positionnement-ecommerce",
    es: "academia-seo/seguimiento-posiciones-ecommerce",
    it: "accademia-seo/monitoraggio-posizioni-ecommerce",
    nl: "seo-academie/positie-tracking-voor-ecommerce",
  },
  "academy/robots-txt-and-xml-sitemaps": {
    de: "seo-akademie/robots-txt-und-xml-sitemaps",
    fr: "academie-seo/robots-txt-et-sitemaps-xml",
    es: "academia-seo/robots-txt-y-sitemaps-xml",
    it: "accademia-seo/robots-txt-e-sitemap-xml",
    nl: "seo-academie/robots-txt-en-xml-sitemaps",
  },
  "academy/search-intent-for-ecommerce": {
    de: "seo-akademie/suchabsicht-fuer-ecommerce",
    fr: "academie-seo/intention-recherche-ecommerce",
    es: "academia-seo/intencion-busqueda-ecommerce",
    it: "accademia-seo/intento-ricerca-ecommerce",
    nl: "seo-academie/zoekintentie-voor-ecommerce",
  },
  "academy/seasonal-keyword-trends": {
    de: "seo-akademie/saisonale-keyword-trends",
    fr: "academie-seo/tendances-mots-cles-saisonnieres",
    es: "academia-seo/tendencias-palabras-clave-estacionales",
    it: "accademia-seo/tendenze-parole-chiave-stagionali",
    nl: "seo-academie/seizoensgebonden-zoekwoord-trends",
  },
  "academy/seo-ab-testing": {
    de: "seo-akademie/seo-ab-testing",
    fr: "academie-seo/test-ab-seo",
    es: "academia-seo/test-ab-seo",
    it: "accademia-seo/test-ab-seo",
    nl: "seo-academie/seo-ab-testen",
  },
  "academy/seo-analytics-with-ga4": {
    de: "seo-akademie/seo-analytics-mit-ga4",
    fr: "academie-seo/analytics-seo-ga4",
    es: "academia-seo/analytics-seo-ga4",
    it: "accademia-seo/analytics-seo-ga4",
    nl: "seo-academie/seo-analytics-met-ga4",
  },
  "academy/seo-forecasting-for-ecommerce": {
    de: "seo-akademie/seo-prognose-fuer-ecommerce",
    fr: "academie-seo/previsions-seo-ecommerce",
    es: "academia-seo/pronostico-seo-ecommerce",
    it: "accademia-seo/previsioni-seo-ecommerce",
    nl: "seo-academie/seo-prognose-voor-ecommerce",
  },
  "academy/seo-learning-roadmap": {
    de: "seo-akademie/seo-lern-roadmap",
    fr: "academie-seo/feuille-route-apprentissage-seo",
    es: "academia-seo/hoja-ruta-aprendizaje-seo",
    it: "accademia-seo/roadmap-apprendimento-seo",
    nl: "seo-academie/seo-leer-roadmap",
  },
  "academy/seo-reporting-for-stakeholders": {
    de: "seo-akademie/seo-reporting-fuer-stakeholder",
    fr: "academie-seo/rapports-seo-parties-prenantes",
    es: "academia-seo/informes-seo-partes-interesadas",
    it: "accademia-seo/reportistica-seo-stakeholder",
    nl: "seo-academie/seo-rapportage-voor-stakeholders",
  },
  "academy/seo-task-planning": {
    de: "seo-akademie/seo-aufgabenplanung",
    fr: "academie-seo/planification-taches-seo",
    es: "academia-seo/planificacion-tareas-seo",
    it: "accademia-seo/pianificazione-attivita-seo",
    nl: "seo-academie/seo-taakplanning",
  },
  "academy/serp-domination-strategy": {
    de: "seo-akademie/serp-dominanz-strategie",
    fr: "academie-seo/strategie-domination-serp",
    es: "academia-seo/estrategia-dominacion-serp",
    it: "accademia-seo/strategia-dominazione-serp",
    nl: "seo-academie/serp-dominantie-strategie",
  },
  "academy/shopify-seo-guide": {
    de: "seo-akademie/shopify-seo-leitfaden",
    fr: "academie-seo/guide-seo-shopify",
    es: "academia-seo/guia-seo-shopify",
    it: "accademia-seo/guida-seo-shopify",
    nl: "seo-academie/shopify-seo-gids",
  },
  "academy/site-architecture-for-ecommerce": {
    de: "seo-akademie/website-architektur-fuer-ecommerce",
    fr: "academie-seo/architecture-site-ecommerce",
    es: "academia-seo/arquitectura-sitio-ecommerce",
    it: "accademia-seo/architettura-sito-ecommerce",
    nl: "seo-academie/website-architectuur-voor-ecommerce",
  },
  "academy/site-speed-optimization": {
    de: "seo-akademie/seitengeschwindigkeit-optimierung",
    fr: "academie-seo/optimisation-vitesse-site",
    es: "academia-seo/optimizacion-velocidad-sitio",
    it: "accademia-seo/ottimizzazione-velocita-sito",
    nl: "seo-academie/sitesnelheid-optimalisatie",
  },
  "academy/structured-data-for-products": {
    de: "seo-akademie/strukturierte-daten-fuer-produkte",
    fr: "academie-seo/donnees-structurees-produits",
    es: "academia-seo/datos-estructurados-productos",
    it: "accademia-seo/dati-strutturati-prodotti",
    nl: "seo-academie/gestructureerde-data-voor-producten",
  },
  "academy/title-tags-and-meta-descriptions": {
    de: "seo-akademie/title-tags-und-meta-beschreibungen",
    fr: "academie-seo/balises-titre-meta-descriptions",
    es: "academia-seo/etiquetas-titulo-meta-descripciones",
    it: "accademia-seo/title-tag-meta-descrizioni",
    nl: "seo-academie/title-tags-en-meta-beschrijvingen",
  },
  "academy/topical-authority-for-ecommerce": {
    de: "seo-akademie/thematische-autoritaet-fuer-ecommerce",
    fr: "academie-seo/autorite-thematique-ecommerce",
    es: "academia-seo/autoridad-tematica-ecommerce",
    it: "accademia-seo/autorita-tematica-ecommerce",
    nl: "seo-academie/thematische-autoriteit-voor-ecommerce",
  },
  "academy/user-generated-content-seo": {
    de: "seo-akademie/nutzergenerierte-inhalte-seo",
    fr: "academie-seo/contenu-genere-utilisateurs-seo",
    es: "academia-seo/contenido-generado-usuarios-seo",
    it: "accademia-seo/contenuti-generati-utenti-seo",
    nl: "seo-academie/door-gebruikers-gegenereerde-content-seo",
  },
  "academy/woocommerce-seo-guide": {
    de: "seo-akademie/woocommerce-seo-leitfaden",
    fr: "academie-seo/guide-seo-woocommerce",
    es: "academia-seo/guia-seo-woocommerce",
    it: "accademia-seo/guida-seo-woocommerce",
    nl: "seo-academie/woocommerce-seo-gids",
  },

  /* ── Resource Sub-Page Slugs ───────────────────────────────────── */
  "resources/crash-course": {
    de: "ressourcen/crashkurs",
    fr: "ressources/cours-accelere",
    es: "recursos/curso-rapido",
    it: "risorse/corso-rapido",
    nl: "seo-bronnen/spoedcursus",
  },
  "resources/crash-course/changelog-page": {
    de: "ressourcen/crashkurs/aenderungsprotokoll",
    fr: "ressources/cours-accelere/journal-modifications",
    es: "recursos/curso-rapido/registro-cambios",
    it: "risorse/corso-rapido/registro-modifiche",
    nl: "seo-bronnen/spoedcursus/wijzigingslog",
  },
  "resources/search-product-discovery": {
    de: "ressourcen/suche-produktentdeckung",
    fr: "ressources/recherche-decouverte-produits",
    es: "recursos/busqueda-descubrimiento-productos",
    it: "risorse/ricerca-scoperta-prodotti",
    nl: "seo-bronnen/zoek-productontdekking",
  },
  "resources/shopify-on-page-checklist": {
    de: "ressourcen/shopify-on-page-checkliste",
    fr: "ressources/checklist-on-page-shopify",
    es: "recursos/checklist-on-page-shopify",
    it: "risorse/checklist-on-page-shopify",
    nl: "seo-bronnen/shopify-on-page-checklist",
  },
  "resources/why-we-share": {
    de: "ressourcen/warum-wir-teilen",
    fr: "ressources/pourquoi-nous-partageons",
    es: "recursos/por-que-compartimos",
    it: "risorse/perche-condividiamo",
    nl: "seo-bronnen/waarom-wij-delen",
  },

  /* ── Location Pages (NL) ─────────────────────────────────────── */
  "location": {
    nl: "locaties",
  },
  "location/amsterdam": { nl: "locaties/seo-bureau-amsterdam" },
  "location/rotterdam": { nl: "locaties/seo-bureau-rotterdam" },
  "location/eindhoven": { nl: "locaties/seo-bureau-eindhoven" },
  "location/den-haag": { nl: "locaties/seo-bureau-den-haag" },
  "location/utrecht": { nl: "locaties/seo-bureau-utrecht" },
  "location/breda": { nl: "locaties/seo-bureau-breda" },
  "location/groningen": { nl: "locaties/seo-bureau-groningen" },
  "location/tilburg": { nl: "locaties/seo-bureau-tilburg" },
  "location/arnhem": { nl: "locaties/seo-bureau-arnhem" },
  "location/enschede": { nl: "locaties/seo-bureau-enschede" },
  "location/nijmegen": { nl: "locaties/seo-bureau-nijmegen" },
  "location/apeldoorn": { nl: "locaties/seo-bureau-apeldoorn" },
  "location/haarlem": { nl: "locaties/seo-bureau-haarlem" },
  "location/almere": { nl: "locaties/seo-bureau-almere" },
  "location/zwolle": { nl: "locaties/seo-bureau-zwolle" },
  "location/amersfoort": { nl: "locaties/seo-bureau-amersfoort" },
  "location/den-bosch": { nl: "locaties/seo-bureau-den-bosch" },
  "location/leiden": { nl: "locaties/seo-bureau-leiden" },
  "location/maastricht": { nl: "locaties/seo-bureau-maastricht" },
  "location/deventer": { nl: "locaties/seo-bureau-deventer" },
  "location/dordrecht": { nl: "locaties/seo-bureau-dordrecht" },
  "location/leeuwarden": { nl: "locaties/seo-bureau-leeuwarden" },
  "location/delft": { nl: "locaties/seo-bureau-delft" },
  "location/hilversum": { nl: "locaties/seo-bureau-hilversum" },
  "location/roosendaal": { nl: "locaties/seo-bureau-roosendaal" },
  "location/zoetermeer": { nl: "locaties/seo-bureau-zoetermeer" },
  "location/noord-holland": { nl: "locaties/seo-bureau-noord-holland" },
  "location/zuid-holland": { nl: "locaties/seo-bureau-zuid-holland" },
  "location/nederland": { nl: "locaties/seo-bureau-nederland" },
  // FR locations
  "location/paris": { fr: "agence-seo-paris" },
  "location/lyon": { fr: "agence-seo-lyon" },
  "location/marseille": { fr: "agence-seo-marseille" },
  "location/toulouse": { fr: "agence-seo-toulouse" },
  "location/nice": { fr: "agence-seo-nice" },
  "location/nantes": { fr: "agence-seo-nantes" },
  "location/bordeaux": { fr: "agence-seo-bordeaux" },
  "location/lille": { fr: "agence-seo-lille" },
  "location/strasbourg": { fr: "agence-seo-strasbourg" },
  "location/rennes": { fr: "agence-seo-rennes" },
  "location/montpellier": { fr: "agence-seo-montpellier" },
  "location/grenoble": { fr: "agence-seo-grenoble" },
  "location/rouen": { fr: "agence-seo-rouen" },
  "location/toulon": { fr: "agence-seo-toulon" },
  "location/clermont-ferrand": { fr: "agence-seo-clermont-ferrand" },
  "location/metz": { fr: "agence-seo-metz" },
  "location/dijon": { fr: "agence-seo-dijon" },
  "location/angers": { fr: "agence-seo-angers" },
  "location/reims": { fr: "agence-seo-reims" },
  "location/le-mans": { fr: "agence-seo-le-mans" },
  "location/aix-en-provence": { fr: "agence-seo-aix-en-provence" },
  "location/limoges": { fr: "agence-seo-limoges" },
  "location/tours": { fr: "agence-seo-tours" },
  "location/amiens": { fr: "agence-seo-amiens" },
  "location/perpignan": { fr: "agence-seo-perpignan" },
  "location/besancon": { fr: "agence-seo-besancon" },
  "location/orleans": { fr: "agence-seo-orleans" },
  "location/caen": { fr: "agence-seo-caen" },
  "location/mulhouse": { fr: "agence-seo-mulhouse" },
  "location/brest": { fr: "agence-seo-brest" },
  "location/le-havre": { fr: "agence-seo-le-havre" },
  "location/nancy": { fr: "agence-seo-nancy" },
  "location/avignon": { fr: "agence-seo-avignon" },
  "location/pau": { fr: "agence-seo-pau" },
  "location/cannes": { fr: "agence-seo-cannes" },
  "location/ile-de-france": { fr: "agence-seo-ile-de-france" },
  "location/auvergne-rhone-alpes": { fr: "agence-seo-auvergne-rhone-alpes" },
  "location/provence-alpes-cote-d-azur": { fr: "agence-seo-provence-alpes-cote-d-azur" },
  "location/france": { fr: "agence-seo-france" },
  // DE locations (flat, no parent folder)
  "location/muenchen": { de: "seo-agentur-muenchen" },
  "location/berlin": { de: "seo-agentur-berlin" },
  "location/koeln": { de: "seo-agentur-koeln" },
  "location/stuttgart": { de: "seo-agentur-stuttgart" },
  "location/frankfurt": { de: "seo-agentur-frankfurt" },
  "location/duesseldorf": { de: "seo-agentur-duesseldorf" },
  "location/hamburg": { de: "seo-agentur-hamburg" },
  "location/erfurt": { de: "seo-agentur-erfurt" },
  "location/hannover": { de: "seo-agentur-hannover" },
  "location/nuernberg": { de: "seo-agentur-nuernberg" },
  "location/karlsruhe": { de: "seo-agentur-karlsruhe" },
  "location/dortmund": { de: "seo-agentur-dortmund" },
  "location/dresden": { de: "seo-agentur-dresden" },
  "location/mannheim": { de: "seo-agentur-mannheim" },
  "location/leipzig": { de: "seo-agentur-leipzig" },
  "location/bremen": { de: "seo-agentur-bremen" },
  "location/augsburg": { de: "seo-agentur-augsburg" },
  "location/essen": { de: "seo-agentur-essen" },
  "location/heilbronn": { de: "seo-agentur-heilbronn" },
  "location/bonn": { de: "seo-agentur-bonn" },
  "location/muenster": { de: "seo-agentur-muenster" },
  "location/heidelberg": { de: "seo-agentur-heidelberg" },
  "location/mainz": { de: "seo-agentur-mainz" },
  "location/freiburg": { de: "seo-agentur-freiburg" },
  "location/braunschweig": { de: "seo-agentur-braunschweig" },
  "location/regensburg": { de: "seo-agentur-regensburg" },
  "location/wiesbaden": { de: "seo-agentur-wiesbaden" },
  "location/kiel": { de: "seo-agentur-kiel" },
  "location/bielefeld": { de: "seo-agentur-bielefeld" },
  "location/aachen": { de: "seo-agentur-aachen" },
  // AT locations (use DE locale)
  "location/wien": { de: "seo-agentur-wien" },
  "location/graz": { de: "seo-agentur-graz" },
  "location/oesterreich": { de: "seo-agentur-oesterreich" },
  "location/salzburg": { de: "seo-agentur-salzburg" },
  "location/linz": { de: "seo-agentur-linz" },
  "location/steiermark": { de: "seo-agentur-steiermark" },
  "location/niederoesterreich": { de: "seo-agentur-niederoesterreich" },
  "location/tirol": { de: "seo-agentur-tirol" },
  "location/vorarlberg": { de: "seo-agentur-vorarlberg" },
  "location/innsbruck": { de: "seo-agentur-innsbruck" },
  // ES locations (flat)
  "location/madrid": { es: "agencia-seo-madrid" },
  "location/barcelona": { es: "agencia-seo-barcelona" },
  "location/valencia": { es: "agencia-seo-valencia" },
  "location/sevilla": { es: "agencia-seo-sevilla" },
  "location/malaga": { es: "agencia-seo-malaga" },
  "location/alicante": { es: "agencia-seo-alicante" },
  "location/bilbao": { es: "agencia-seo-bilbao" },
  "location/murcia": { es: "agencia-seo-murcia" },
  "location/girona": { es: "agencia-seo-girona" },
  "location/zaragoza": { es: "agencia-seo-zaragoza" },
  "location/tenerife": { es: "agencia-seo-tenerife" },
  "location/pontevedra": { es: "agencia-seo-pontevedra" },
  "location/granada": { es: "agencia-seo-granada" },
  "location/almeria": { es: "agencia-seo-almeria" },
  "location/coruna": { es: "agencia-seo-coruna" },
  "location/valladolid": { es: "agencia-seo-valladolid" },
  "location/mallorca": { es: "agencia-seo-mallorca" },
  "location/elche": { es: "agencia-seo-elche" },
  "location/pamplona": { es: "agencia-seo-pamplona" },
  "location/marbella": { es: "agencia-seo-marbella" },
  "location/vigo": { es: "agencia-seo-vigo" },
  "location/cordoba": { es: "agencia-seo-cordoba" },
  "location/albacete": { es: "agencia-seo-albacete" },
  "location/tarragona": { es: "agencia-seo-tarragona" },
  "location/las-palmas": { es: "agencia-seo-las-palmas" },
  "location/logrono": { es: "agencia-seo-logrono" },
  "location/oviedo": { es: "agencia-seo-oviedo" },
  "location/toledo": { es: "agencia-seo-toledo" },
  "location/sabadell": { es: "agencia-seo-sabadell" },
  "location/leon": { es: "agencia-seo-leon" },
  "location/cadiz": { es: "agencia-seo-cadiz" },
  "location/santander": { es: "agencia-seo-santander" },
  "location/ciudad-real": { es: "agencia-seo-ciudad-real" },
  "location/asturias": { es: "agencia-seo-asturias" },
  // IT locations (flat)
  "location/milano": { it: "agenzia-seo-milano" },
  "location/roma": { it: "agenzia-seo-roma" },
  "location/bergamo": { it: "agenzia-seo-bergamo" },
  "location/verona": { it: "agenzia-seo-verona" },
  "location/firenze": { it: "agenzia-seo-firenze" },
  "location/torino": { it: "agenzia-seo-torino" },
  "location/brescia": { it: "agenzia-seo-brescia" },
  "location/napoli": { it: "agenzia-seo-napoli" },
  "location/padova": { it: "agenzia-seo-padova" },
  "location/bari": { it: "agenzia-seo-bari" },
  "location/pescara": { it: "agenzia-seo-pescara" },
  // EN/UK locations (flat, default locale so no /en/ prefix in URL)
  "location/london": { en: "seo-agency-london" },
  "location/birmingham": { en: "seo-agency-birmingham" },
  "location/manchester": { en: "seo-agency-manchester" },
  "location/bristol": { en: "seo-agency-bristol" },
  "location/edinburgh": { en: "seo-agency-edinburgh" },
  "location/essex": { en: "seo-agency-essex" },
  "location/newcastle": { en: "seo-agency-newcastle" },
  "location/leeds": { en: "seo-agency-leeds" },
  "location/surrey": { en: "seo-agency-surrey" },
  "location/hertfordshire": { en: "seo-agency-hertfordshire" },
  "location/oxford": { en: "seo-agency-oxford" },
  "location/sheffield": { en: "seo-agency-sheffield" },
  "location/liverpool": { en: "seo-agency-liverpool" },
  "location/nottingham": { en: "seo-agency-nottingham" },
  // BE locations (use FR locale, flat)
  "location/bruxelles": { fr: "agence-seo-bruxelles" },
  "location/liege": { fr: "agence-seo-liege" },
  "location/namur": { fr: "agence-seo-namur" },
  "location/belgique": { fr: "agence-seo-belgique" },
  "location/mons": { fr: "agence-seo-mons" },
  "location/charleroi": { fr: "agence-seo-charleroi" },
  "location/tournai": { fr: "agence-seo-tournai" },
};

/* ------------------------------------------------------------------ */
/*  Lookup helpers                                                     */
/* ------------------------------------------------------------------ */

/**
 * Get the localized slug for a given English path + locale.
 * Returns the English slug unchanged if no translation exists.
 */
export function getLocalizedSlug(
  englishPath: string,
  locale: Locale,
): string {
  if (locale === "en") return englishPath;

  // Strip leading slash for lookup
  const key = englishPath.startsWith("/")
    ? englishPath.slice(1)
    : englishPath;

  // Direct match (full path including parent/child)
  const entry = slugTranslations[key];
  if (entry?.[locale]) {
    return `/${entry[locale]}`;
  }

  // Try matching parent + child separately (e.g. "academy/introduction-to-ecommerce-seo")
  const slashIdx = key.indexOf("/");
  if (slashIdx !== -1) {
    const parent = key.slice(0, slashIdx);
    const child = key.slice(slashIdx + 1);
    const parentEntry = slugTranslations[parent];
    const translatedParent = parentEntry?.[locale] ?? parent;

    // Also translate the child slug independently
    // For nested paths like "resources/crash-course/changelog-page", recurse
    const secondSlash = child.indexOf("/");
    if (secondSlash !== -1) {
      // 3-level path: parent/mid/leaf
      const mid = child.slice(0, secondSlash);
      const leaf = child.slice(secondSlash + 1);
      const midKey = `${parent}/${mid}`;
      const midEntry = slugTranslations[midKey];
      const translatedMid = midEntry?.[locale]
        ? midEntry[locale]!.split("/").pop()!
        : (slugTranslations[mid]?.[locale] ?? mid);
      const leafEntry = slugTranslations[`${parent}/${mid}/${leaf}`];
      const translatedLeaf = leafEntry?.[locale]
        ? leafEntry[locale]!.split("/").pop()!
        : (slugTranslations[leaf]?.[locale] ?? leaf);
      return `/${translatedParent}/${translatedMid}/${translatedLeaf}`;
    }

    // Check if full path has a translation (e.g. "academy/introduction-to-ecommerce-seo")
    const fullPathEntry = slugTranslations[key];
    if (fullPathEntry?.[locale]) {
      return `/${fullPathEntry[locale]}`;
    }

    // Translate child slug independently
    const childEntry = slugTranslations[child];
    const translatedChild = childEntry?.[locale] ?? child;

    return `/${translatedParent}/${translatedChild}`;
  }

  return englishPath.startsWith("/") ? englishPath : `/${englishPath}`;
}

/**
 * Reverse lookup: given a localized slug + locale, return the English path.
 * Used by middleware to route translated URLs to the correct internal page.
 */
export function getEnglishSlug(
  localizedPath: string,
  locale: Locale,
): string {
  if (locale === "en") return localizedPath;

  const cleanPath = localizedPath.startsWith("/")
    ? localizedPath.slice(1)
    : localizedPath;

  // Build reverse map for this locale (full-path direct match)
  for (const [englishKey, translations] of Object.entries(slugTranslations)) {
    const localizedSlug = translations[locale];
    if (localizedSlug === cleanPath) {
      return `/${englishKey}`;
    }
  }

  // Helper: reverse-translate a single segment (standalone OR as child of parent)
  function reverseSegment(segment: string, parentEnglish?: string): string {
    // 1. If we know the parent, check full-path entries for exact child match
    if (parentEnglish) {
      for (const [engKey, translations] of Object.entries(slugTranslations)) {
        if (engKey.startsWith(parentEnglish + "/")) {
          const localVal = translations[locale];
          if (localVal) {
            // Extract the child part from the localized full path
            const slashPos = localVal.indexOf("/");
            if (slashPos !== -1) {
              const localChild = localVal.slice(slashPos + 1);
              if (localChild === segment) {
                // Extract the english child from the key
                return engKey.slice(parentEnglish.length + 1);
              }
            }
          }
        }
      }
    }
    // 2. Check standalone (non-slash) entries
    for (const [engKey, translations] of Object.entries(slugTranslations)) {
      if (!engKey.includes("/") && translations[locale] === segment) {
        return engKey;
      }
    }
    return segment;
  }

  // Try parent + child reverse match
  const slashIdx = cleanPath.indexOf("/");
  if (slashIdx !== -1) {
    const localizedParent = cleanPath.slice(0, slashIdx);
    const rest = cleanPath.slice(slashIdx + 1);

    // Reverse the parent
    const englishParent = reverseSegment(localizedParent);

    // Check for 3-level path (parent/mid/leaf)
    const secondSlash = rest.indexOf("/");
    if (secondSlash !== -1) {
      const mid = rest.slice(0, secondSlash);
      const leaf = rest.slice(secondSlash + 1);
      const englishMid = reverseSegment(mid, englishParent);
      const englishLeaf = reverseSegment(leaf, `${englishParent}/${englishMid}`);
      return `/${englishParent}/${englishMid}/${englishLeaf}`;
    }

    // Reverse the child using parent context for full-path matching
    const englishChild = reverseSegment(rest, englishParent);

    return `/${englishParent}/${englishChild}`;
  }

  return localizedPath.startsWith("/") ? localizedPath : `/${localizedPath}`;
}
