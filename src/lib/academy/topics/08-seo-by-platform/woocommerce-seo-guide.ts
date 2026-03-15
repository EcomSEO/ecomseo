import type { AcademyTopic } from "../../types";

export const woocommerceSeoGuide: AcademyTopic = {
  slug: "woocommerce-seo-guide",
  cluster: 8,
  resources: [{"label":"WooCommerce SEO Documentation","url":"https://woocommerce.com/document/woocommerce-seo/","type":"docs"},{"label":"Yoast WooCommerce SEO","url":"https://yoast.com/wordpress/plugins/yoast-woocommerce-seo/","type":"tool"},{"label":"Google PageSpeed Insights","url":"https://pagespeed.web.dev/","type":"tool"}],
  content: {
    en: {
      badge: "SEO by Platform",
      heading: "WooCommerce SEO Guide",
      intro:
        "WooCommerce runs on WordPress, giving store owners access to the most flexible SEO toolkit available for ecommerce. With full control over URLs, server configuration, and thousands of plugins, WooCommerce allows granular optimization that hosted platforms cannot match. That flexibility also means more decisions and more potential for misconfiguration. For broader context on ecommerce optimization, see our overview of [technical SEO for ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "13 min read",
      sections: [
        {
          title: "Permalink Structure and URL Optimization",
          content:
            "WordPress lets you define custom permalink structures through Settings > Permalinks. For WooCommerce stores, the default product URL pattern is /product/product-name/, but you can modify the /product/ base slug or remove it entirely using plugins or custom rewrite rules. Category pages default to /product-category/category-name/, which can also be customized.\n\nThe most SEO-friendly approach is to keep URLs short and descriptive. Many store owners remove the /product-category/ and /product/ base slugs to achieve cleaner URLs like /running-shoes/ for categories and /blue-running-shoe/ for products. However, removing these bases creates a risk of URL conflicts between products, categories, pages, and posts that share similar slugs. Test thoroughly after changing permalink structures.\n\nWooCommerce also generates query-parameter URLs for filtered and sorted product listings (?orderby=price, ?filter_color=blue). These parameterized URLs can create massive duplicate content if Google indexes them. Configure your SEO plugin to add noindex directives to filtered URLs, or use the URL Parameters tool in Google Search Console to tell Google how to handle them.\n\nFor stores with large catalogs, consider implementing faceted navigation with AJAX-based filtering that does not generate new URLs. This prevents the creation of thousands of indexable filter combination pages while maintaining a smooth user experience.",
          tip: "After changing your permalink structure, use a database search-and-replace tool like Better Search Replace to update internal links in product descriptions and page content. WordPress does not automatically update hardcoded links.",
        },
        {
          title: "SEO Plugins: Yoast vs RankMath vs SEOPress",
          content:
            "Every WooCommerce store needs a dedicated SEO plugin to manage title tags, meta descriptions, XML sitemaps, schema markup, and canonical tags. The three leading options are Yoast SEO, Rank Math, and SEOPress, each with distinct strengths for ecommerce.\n\nYoast SEO is the most established plugin with dedicated WooCommerce integration through its premium WooCommerce SEO addon. It provides product-specific schema markup (price, availability, reviews), breadcrumb generation, and social media meta tags. The content analysis feature evaluates product descriptions for readability and keyword usage, though its suggestions should be treated as guidelines rather than strict rules.\n\nRank Math offers more features in its free tier than Yoast, including built-in schema generators for products, advanced redirect management, and Google Search Console integration directly in the WordPress dashboard. Its WooCommerce integration automatically generates Product schema with variant support. For stores on a budget, Rank Math provides enterprise-level SEO features without requiring a premium subscription.\n\nSEOPress is a lighter-weight alternative that appeals to performance-conscious store owners. It generates fewer database queries than Yoast or Rank Math, which can matter for stores with 10,000+ products where admin panel load times become noticeable. All three plugins handle the core SEO requirements well, so the choice often comes down to user interface preference and performance priorities.",
          items: [
            "Yoast SEO: strongest brand recognition, dedicated WooCommerce addon, thorough content analysis",
            "Rank Math: most features in free tier, built-in schema generators, Search Console integration",
            "SEOPress: lightest database footprint, fastest admin performance, good for large catalogs",
            "All three support XML sitemaps, canonical tags, Open Graph, and product schema",
          ],
        },
        {
          title: "Database and Hosting Optimization for SEO",
          content:
            "WooCommerce performance depends heavily on your hosting environment and database optimization, which directly impacts [site speed optimization](/academy/site-speed-optimization). Unlike hosted platforms such as Shopify, you bear full responsibility for server speed, which directly impacts Core Web Vitals and crawl efficiency.\n\nChoose a hosting provider that offers server-level caching (Varnish, LiteSpeed Cache, or NGINX FastCGI cache), PHP 8.1 or newer, and MySQL or MariaDB with properly tuned query caches. Shared hosting plans that run dozens of sites on a single server frequently produce Time to First Byte (TTFB) values above 600 milliseconds, which Google considers slow. Managed WordPress hosting from providers like Cloudways, Kinsta, or WP Engine typically delivers TTFB under 200 milliseconds.\n\nDatabase optimization matters increasingly as your product catalog grows. WooCommerce stores post-meta data in the wp_postmeta table, which can balloon to millions of rows for stores with thousands of products and their associated attributes, variations, and pricing data. WordPress 6.1 introduced High-Performance Order Storage (HPOS) that moves order data to custom tables, reducing the load on wp_postmeta. Enable HPOS if your plugins support it.\n\nInstall a page caching plugin (WP Super Cache, W3 Total Cache, or LiteSpeed Cache) and an object caching layer (Redis or Memcached). Page caching serves pre-built HTML to visitors and search engine crawlers, dramatically reducing server response time. Object caching stores frequently accessed database queries in memory, speeding up both the frontend and admin panel.",
        },
        {
          title: "WooCommerce Schema Markup and Rich Results",
          content:
            "Proper schema markup enables Google to display rich results for your products, including price, availability, review ratings, and shipping information directly in search results. WooCommerce does not include schema markup by default, so your SEO plugin or a dedicated schema plugin must generate it.\n\nProduct schema should include at minimum: name, description, image, SKU, brand, price, priceCurrency, availability, and review/aggregateRating when applicable. Learn more about implementing [structured data for products](/academy/structured-data-for-products) to maximize rich result eligibility. For variable products, generate an Offer for each variation so Google can display the price range. The schema should reference the correct currency and availability status pulled dynamically from WooCommerce product data.\n\nBreadcrumb schema helps Google understand your site hierarchy and can replace the URL in search results with a readable breadcrumb trail. Both Yoast and Rank Math generate BreadcrumbList schema automatically when breadcrumbs are enabled. Verify that the breadcrumb hierarchy matches your actual site navigation.\n\nFAQ schema on product pages can earn additional SERP real estate. If your product pages include an FAQ section or expandable question-and-answer panels, mark them up with FAQPage schema. Use the Rich Results Test tool to verify your schema renders correctly before and after implementation.",
          tip: "Test your schema markup on a product page, a variable product page, and a category page. Variable products often produce schema errors because each variation needs its own Offer element within the Product schema.",
        },
        {
          title: "WooCommerce Image and Media Optimization",
          content:
            "Product images are typically the largest files on any ecommerce page, making image optimization critical for Core Web Vitals performance. WooCommerce generates multiple image sizes for each uploaded product photo (thumbnail, medium, large, and full), which means a single product with five images can create 20 or more image files on the server.\n\nConvert all product images to WebP format using a plugin like ShortPixel, Imagify, or EWWW Image Optimizer. WebP files are 25 to 35 percent smaller than equivalent JPEG files with no visible quality loss. These plugins can also serve AVIF format to browsers that support it, achieving even greater compression.\n\nImplement lazy loading for product gallery images, related product carousels, and any images below the fold. WordPress 5.5+ includes native lazy loading via the loading=\"lazy\" attribute, but verify it is working on your WooCommerce templates. The main product image above the fold should not be lazy loaded, as this delays LCP.\n\nSet explicit width and height attributes on all image elements to prevent Cumulative Layout Shift. WooCommerce themes that use CSS-based responsive images without defined dimensions cause the browser to reflow the page as images load, resulting in poor CLS scores. Review your theme's product image template and add the dimensions if missing.",
          items: [
            "Convert product images to WebP (25-35% smaller than JPEG with no visible quality loss)",
            "Lazy load gallery and below-fold images but not the primary product hero image",
            "Set explicit width and height attributes on all image elements to prevent CLS",
            "Compress thumbnails aggressively since they appear at small sizes in grids",
          ],
        },
        {
          title: "WooCommerce Site Architecture and Internal Linking",
          content:
            "WordPress gives you complete control over your site's information architecture, which is both a strength and a responsibility. Plan your category taxonomy before building the store, because restructuring categories after products are indexed means managing hundreds of redirects.\n\nKeep your category hierarchy to three levels maximum: top-level categories, subcategories, and sub-subcategories. Each additional level dilutes internal link equity and pushes products further from the homepage. For a clothing store, this might look like Men > Shirts > Casual Shirts rather than adding a fourth level for fabric type.\n\nWooCommerce product pages automatically include related products and cross-sell sections, which provide internal links between products. Customize the related products algorithm using WooCommerce hooks or a plugin to ensure it surfaces genuinely relevant items rather than random products from the same category. Well-curated cross-links between complementary products strengthen topical clusters and keep users browsing.\n\nBreadcrumb navigation is essential for both users and search engines. Enable breadcrumbs through your SEO plugin and configure them to follow your category hierarchy. For products that appear in multiple categories, set a primary category in Yoast or Rank Math to ensure the breadcrumb trail is consistent.\n\nCreate a comprehensive internal linking structure beyond automated widgets. Link from blog posts to relevant product and category pages. Link from product descriptions to related buying guides. Use category page descriptions to link to subcategories and featured products. This manual internal linking passes authority to your most commercially valuable pages.",
        },
      ],
      navLabels: { previous: "Previous", next: "Next" },
    },
    de: {
      badge: "SEO nach Plattform",
      heading: "WooCommerce SEO-Leitfaden",
      intro:
        "WooCommerce laeuft auf WordPress und gibt Shop-Betreibern Zugang zum flexibelsten SEO-Toolkit fuer E-Commerce. Mit voller Kontrolle ueber URLs, Serverkonfiguration und tausenden Plugins erlaubt WooCommerce eine granulare Optimierung, die gehostete Plattformen nicht bieten koennen. Diese Flexibilitaet bedeutet aber auch mehr Entscheidungen und mehr Potenzial fuer Fehlkonfigurationen. Weitere Informationen finden Sie in unserem Leitfaden zu [technische SEO f\u00fcr Ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "13 Min. Lesezeit",
      sections: [
        {
          title: "Permalink-Struktur und URL-Optimierung",
          content:
            "WordPress ermoeglicht benutzerdefinierte Permalink-Strukturen ueber Einstellungen > Permalinks. Fuer WooCommerce-Shops ist das Standard-Produkt-URL-Muster /product/produktname/, aber Sie koennen den /product/-Basis-Slug aendern oder mit Plugins oder benutzerdefinierten Rewrite-Regeln vollstaendig entfernen.\n\nDer SEO-freundlichste Ansatz ist, URLs kurz und beschreibend zu halten. Viele Shop-Betreiber entfernen die /product-category/ und /product/-Basis-Slugs, um sauberere URLs zu erzielen. Das Entfernen dieser Basen birgt jedoch das Risiko von URL-Konflikten zwischen Produkten, Kategorien, Seiten und Beitraegen mit aehnlichen Slugs.\n\nWooCommerce generiert auch Query-Parameter-URLs fuer gefilterte und sortierte Produktlisten. Diese parametrisierten URLs koennen massiven Duplicate Content erzeugen, wenn Google sie indexiert. Konfigurieren Sie Ihr SEO-Plugin so, dass es noindex-Direktiven zu gefilterten URLs hinzufuegt.\n\nFuer Shops mit grossen Katalogen erwaegen Sie die Implementierung einer facettierten Navigation mit AJAX-basierter Filterung, die keine neuen URLs generiert. Dies verhindert die Erstellung tausender indexierbarer Filterkombinationsseiten.",
          tip: "Verwenden Sie nach einer Aenderung der Permalink-Struktur ein Datenbank-Suchen-und-Ersetzen-Tool wie Better Search Replace, um interne Links in Produktbeschreibungen zu aktualisieren. WordPress aktualisiert hartcodierte Links nicht automatisch.",
        },
        {
          title: "SEO-Plugins: Yoast vs. RankMath vs. SEOPress",
          content:
            "Jeder WooCommerce-Shop benoetigt ein dediziertes SEO-Plugin zur Verwaltung von Title-Tags, Meta-Beschreibungen, XML-Sitemaps, Schema-Markup und Canonical-Tags. Die drei fuehrenden Optionen sind Yoast SEO, Rank Math und SEOPress.\n\nYoast SEO ist das etablierteste Plugin mit dedizierter WooCommerce-Integration ueber sein Premium-WooCommerce-SEO-Addon. Es bietet produktspezifisches Schema-Markup, Breadcrumb-Generierung und Social-Media-Meta-Tags. Die Inhaltsanalyse bewertet Produktbeschreibungen hinsichtlich Lesbarkeit und Keyword-Nutzung.\n\nRank Math bietet in seiner kostenlosen Version mehr Funktionen als Yoast, einschliesslich integrierter Schema-Generatoren fuer Produkte, erweitertem Redirect-Management und Google-Search-Console-Integration direkt im WordPress-Dashboard. Fuer preisbewusste Shops bietet Rank Math Enterprise-Level-SEO-Funktionen ohne Premium-Abonnement.\n\nSEOPress ist eine leichtere Alternative, die performance-orientierte Shop-Betreiber anspricht. Es generiert weniger Datenbankabfragen als Yoast oder Rank Math, was bei Shops mit ueber 10.000 Produkten relevant sein kann.",
          items: [
            "Yoast SEO: staerkste Markenbekanntheit, dediziertes WooCommerce-Addon, gruendliche Inhaltsanalyse",
            "Rank Math: meiste Funktionen in der kostenlosen Version, integrierte Schema-Generatoren, Search-Console-Integration",
            "SEOPress: geringster Datenbank-Footprint, schnellste Admin-Performance, gut fuer grosse Kataloge",
            "Alle drei unterstuetzen XML-Sitemaps, Canonical-Tags, Open Graph und Produkt-Schema",
          ],
        },
        {
          title: "Datenbank- und Hosting-Optimierung fuer SEO",
          content:
            "Die WooCommerce-Performance haengt stark von Ihrer Hosting-Umgebung und Datenbankoptimierung ab. Anders als bei gehosteten Plattformen wie Shopify tragen Sie die volle Verantwortung fuer die Servergeschwindigkeit, die sich direkt auf Core Web Vitals und Crawl-Effizienz auswirkt. Weitere Informationen finden Sie in unserem Leitfaden zu [Seitenladezeit-Optimierung](/academy/site-speed-optimization).\n\nWaehlen Sie einen Hosting-Anbieter mit serverseitigem Caching (Varnish, LiteSpeed Cache oder NGINX FastCGI Cache), PHP 8.1 oder neuer und MySQL oder MariaDB mit korrekt konfiguriertem Query-Cache. Shared-Hosting mit dutzenden Sites auf einem Server erzeugt haeufig TTFB-Werte ueber 600 Millisekunden.\n\nDie Datenbankoptimierung wird zunehmend wichtig, je groesser Ihr Produktkatalog waechst. WooCommerce speichert Post-Meta-Daten in der wp_postmeta-Tabelle, die bei Shops mit tausenden Produkten auf Millionen von Zeilen anwachsen kann. WordPress 6.1 fuehrte High-Performance Order Storage (HPOS) ein, das Bestelldaten in eigene Tabellen verschiebt.\n\nInstallieren Sie ein Page-Caching-Plugin und eine Object-Caching-Schicht (Redis oder Memcached). Page-Caching liefert vorgebautes HTML an Besucher und Suchmaschinen-Crawler, was die Server-Antwortzeit drastisch reduziert.",
        },
        {
          title: "WooCommerce-Schema-Markup und Rich Results",
          content:
            "Korrektes Schema-Markup ermoeglicht Google die Anzeige von Rich Results fuer Ihre Produkte, einschliesslich Preis, Verfuegbarkeit, Bewertungen und Versandinformationen direkt in den Suchergebnissen. WooCommerce enthaelt standardmaessig kein Schema-Markup, daher muss Ihr SEO-Plugin oder ein dediziertes Schema-Plugin es generieren.\n\nProdukt-Schema sollte mindestens enthalten: Name, Beschreibung, Bild, SKU, Marke, Preis, Waehrung, Verfuegbarkeit und Bewertungen. Fuer variable Produkte generieren Sie ein Offer fuer jede Variante, damit Google die Preisspanne anzeigen kann. Erfahren Sie mehr in unserem Leitfaden zu [strukturierte Daten f\u00fcr Produkte](/academy/structured-data-for-products).\n\nBreadcrumb-Schema hilft Google, Ihre Site-Hierarchie zu verstehen, und kann die URL in den Suchergebnissen durch einen lesbaren Breadcrumb-Pfad ersetzen. Sowohl Yoast als auch Rank Math generieren BreadcrumbList-Schema automatisch, wenn Breadcrumbs aktiviert sind.\n\nFAQ-Schema auf Produktseiten kann zusaetzlichen SERP-Raum gewinnen. Wenn Ihre Produktseiten FAQ-Bereiche oder aufklappbare Frage-und-Antwort-Panels enthalten, markieren Sie sie mit FAQPage-Schema.",
          tip: "Testen Sie Ihr Schema-Markup auf einer Produktseite, einer variablen Produktseite und einer Kategorieseite. Variable Produkte erzeugen oft Schema-Fehler, weil jede Variante ein eigenes Offer-Element benoetigt.",
        },
        {
          title: "WooCommerce Bild- und Medienoptimierung",
          content:
            "Produktbilder sind typischerweise die groessten Dateien auf jeder E-Commerce-Seite, was die Bildoptimierung entscheidend fuer die Core-Web-Vitals-Performance macht. WooCommerce generiert mehrere Bildgroessen fuer jedes hochgeladene Produktfoto, was bedeutet, dass ein einzelnes Produkt mit fuenf Bildern 20 oder mehr Bilddateien auf dem Server erzeugen kann.\n\nKonvertieren Sie alle Produktbilder in das WebP-Format mit einem Plugin wie ShortPixel, Imagify oder EWWW Image Optimizer. WebP-Dateien sind 25 bis 35 Prozent kleiner als vergleichbare JPEG-Dateien ohne sichtbaren Qualitaetsverlust.\n\nImplementieren Sie Lazy Loading fuer Produktgalerie-Bilder, verwandte Produktkarussells und alle Bilder unterhalb des sichtbaren Bereichs. WordPress 5.5+ enthaelt natives Lazy Loading, aber ueberpruefen Sie, ob es in Ihren WooCommerce-Templates funktioniert. Das Hauptproduktbild oberhalb des sichtbaren Bereichs sollte nicht lazy geladen werden.\n\nSetzen Sie explizite Breiten- und Hoehenattribute auf alle Bildelemente, um Cumulative Layout Shift zu verhindern. WooCommerce-Themes, die CSS-basierte responsive Bilder ohne definierte Dimensionen verwenden, verursachen Seitenumbrueche waehrend des Ladens.",
          items: [
            "Produktbilder in WebP konvertieren (25-35% kleiner als JPEG ohne sichtbaren Qualitaetsverlust)",
            "Galerie- und Bilder unterhalb des sichtbaren Bereichs lazy laden, aber nicht das primaere Produktbild",
            "Explizite Breiten- und Hoehenattribute auf alle Bildelemente setzen, um CLS zu verhindern",
            "Thumbnails aggressiv komprimieren, da sie in kleinen Groessen in Rastern erscheinen",
          ],
        },
        {
          title: "WooCommerce-Site-Architektur und interne Verlinkung",
          content:
            "WordPress gibt Ihnen vollstaendige Kontrolle ueber die Informationsarchitektur Ihrer Site. Planen Sie Ihre Kategorietaxonomie, bevor Sie den Shop aufbauen, denn eine Umstrukturierung nach der Indexierung bedeutet hunderte von Weiterleitungen.\n\nHalten Sie Ihre Kategoriehierarchie auf maximal drei Ebenen: Hauptkategorien, Unterkategorien und Unter-Unterkategorien. Jede zusaetzliche Ebene verwaessert die interne Link-Equity und drueckt Produkte weiter von der Startseite weg.\n\nWooCommerce-Produktseiten enthalten automatisch verwandte Produkte und Cross-Sell-Bereiche, die interne Links zwischen Produkten bereitstellen. Passen Sie den Algorithmus fuer verwandte Produkte ueber WooCommerce-Hooks an, um sicherzustellen, dass wirklich relevante Artikel angezeigt werden.\n\nBreadcrumb-Navigation ist sowohl fuer Nutzer als auch fuer Suchmaschinen wesentlich. Aktivieren Sie Breadcrumbs ueber Ihr SEO-Plugin und konfigurieren Sie sie so, dass sie Ihrer Kategoriehierarchie folgen. Erstellen Sie eine umfassende interne Verlinkungsstruktur ueber automatisierte Widgets hinaus. Verlinken Sie von Blog-Beitraegen zu relevanten Produkt- und Kategorieseiten.",
        },
      ],
      navLabels: { previous: "Zurueck", next: "Weiter" },
    },
    fr: {
      badge: "SEO par plateforme",
      heading: "Guide SEO WooCommerce",
      intro:
        "WooCommerce fonctionne sur WordPress, donnant aux proprietaires de boutiques acces a la boite a outils SEO la plus flexible disponible pour le commerce en ligne. Avec un controle total sur les URLs, la configuration serveur et des milliers de plugins, WooCommerce permet une optimisation granulaire que les plateformes hebergees ne peuvent pas offrir. Cette flexibilite implique egalement plus de decisions et plus de risques de mauvaise configuration. Pour un contexte plus large sur l'optimisation e-commerce, consultez notre aperçu du [SEO technique pour l'e-commerce](/blog/technical-seo-for-ecommerce).",
      readTime: "13 min de lecture",
      sections: [
        {
          title: "Structure des permaliens et optimisation des URLs",
          content:
            "WordPress vous permet de definir des structures de permaliens personnalisees via Reglages > Permaliens. Pour les boutiques WooCommerce, le schema d'URL produit par defaut est /product/nom-produit/, mais vous pouvez modifier le slug de base /product/ ou le supprimer entierement avec des plugins ou des regles de reecriture personnalisees.\n\nL'approche la plus favorable au SEO consiste a garder des URLs courtes et descriptives. De nombreux proprietaires suppriment les slugs de base /product-category/ et /product/ pour obtenir des URLs plus propres. Cependant, la suppression de ces bases cree un risque de conflits d'URL entre produits, categories, pages et articles partageant des slugs similaires.\n\nWooCommerce genere egalement des URLs a parametres de requete pour les listes de produits filtrees et triees. Ces URLs parametrees peuvent creer un contenu duplique massif si Google les indexe. Configurez votre plugin SEO pour ajouter des directives noindex aux URLs filtrees.\n\nPour les boutiques avec de grands catalogues, envisagez d'implementer une navigation a facettes avec filtrage AJAX qui ne genere pas de nouvelles URLs. Cela previent la creation de milliers de pages de combinaisons de filtres indexables.",
          tip: "Apres avoir change votre structure de permaliens, utilisez un outil de recherche-remplacement en base de donnees comme Better Search Replace pour mettre a jour les liens internes dans les descriptions de produits.",
        },
        {
          title: "Plugins SEO : Yoast vs RankMath vs SEOPress",
          content:
            "Chaque boutique WooCommerce a besoin d'un plugin SEO dedie pour gerer les balises title, les meta descriptions, les sitemaps XML, le balisage schema et les balises canoniques. Les trois options principales sont Yoast SEO, Rank Math et SEOPress.\n\nYoast SEO est le plugin le plus etabli avec une integration WooCommerce dediee via son addon premium WooCommerce SEO. Il fournit un balisage schema specifique aux produits, la generation de fil d'Ariane et les meta tags pour les reseaux sociaux.\n\nRank Math offre plus de fonctionnalites dans sa version gratuite que Yoast, incluant des generateurs de schema integres pour les produits, une gestion avancee des redirections et l'integration de Google Search Console directement dans le tableau de bord WordPress.\n\nSEOPress est une alternative plus legere qui seduit les proprietaires soucieux de la performance. Il genere moins de requetes en base de donnees que Yoast ou Rank Math, ce qui peut avoir son importance pour les boutiques avec plus de 10 000 produits.",
          items: [
            "Yoast SEO : meilleure notoriete, addon WooCommerce dedie, analyse de contenu approfondie",
            "Rank Math : plus de fonctionnalites gratuites, generateurs de schema integres, integration Search Console",
            "SEOPress : empreinte base de donnees la plus legere, performance admin la plus rapide, bon pour les grands catalogues",
            "Les trois supportent les sitemaps XML, les balises canoniques, Open Graph et le schema produit",
          ],
        },
        {
          title: "Optimisation base de donnees et hebergement pour le SEO",
          content:
            "La performance de WooCommerce depend fortement de votre environnement d'hebergement et de l'optimisation de la base de donnees. Contrairement aux plateformes hebergees comme Shopify, vous portez l'entiere responsabilite de la vitesse du serveur, qui impacte directement les Core Web Vitals et l'efficacite du crawl.\n\nChoisissez un hebergeur offrant un cache au niveau serveur (Varnish, LiteSpeed Cache ou NGINX FastCGI cache), PHP 8.1 ou plus recent, et MySQL ou MariaDB avec des caches de requetes correctement configures. L'hebergement mutualise produit frequemment des TTFB superieurs a 600 millisecondes.\n\nL'optimisation de la base de donnees devient cruciale a mesure que votre catalogue grandit. WooCommerce stocke les meta-donnees dans la table wp_postmeta, qui peut atteindre des millions de lignes pour les boutiques avec des milliers de produits. WordPress 6.1 a introduit le High-Performance Order Storage (HPOS) qui deplace les donnees de commandes dans des tables personnalisees.\n\nInstallez un plugin de cache de pages et une couche de cache d'objets (Redis ou Memcached). Le cache de pages sert du HTML pre-genere aux visiteurs et aux robots, reduisant drastiquement le temps de reponse du serveur. Les performances de WooCommerce dépendent fortement de votre environnement d'hébergement et de l'optimisation de la base de données, ce qui impacte directement l'[optimisation de la vitesse du site](/academy/site-speed-optimization).",
        },
        {
          title: "WooCommerce Schema Markup et resultats enrichis",
          content:
            "Un balisage schema correct permet a Google d'afficher des resultats enrichis pour vos produits, incluant prix, disponibilite, notes d'avis et informations de livraison directement dans les resultats de recherche. WooCommerce n'inclut pas de balisage schema par defaut, donc votre plugin SEO ou un plugin schema dedie doit le generer.\n\nLe schema Produit doit inclure au minimum : nom, description, image, SKU, marque, prix, devise, disponibilite et avis. Pour les produits variables, generez une Offre pour chaque variation afin que Google puisse afficher la fourchette de prix.\n\nLe schema fil d'Ariane aide Google a comprendre la hierarchie de votre site et peut remplacer l'URL dans les resultats de recherche par un fil d'Ariane lisible. Yoast et Rank Math generent automatiquement le schema BreadcrumbList lorsque le fil d'Ariane est active.\n\nLe schema FAQ sur les pages produit peut gagner de l'espace supplementaire dans les SERP. Si vos pages produit incluent une section FAQ ou des panneaux de questions-reponses depliables, balisez-les avec le schema FAQPage. Découvrez comment implémenter les [données structurées pour les produits](/academy/structured-data-for-products) pour maximiser l'éligibilité aux résultats enrichis.",
          tip: "Testez votre balisage schema sur une page produit, une page produit variable et une page categorie. Les produits variables produisent souvent des erreurs de schema car chaque variation necessite son propre element Offre.",
        },
        {
          title: "Optimisation des images et medias WooCommerce",
          content:
            "Les images de produits sont generalement les fichiers les plus volumineux sur toute page e-commerce, rendant l'optimisation des images critique pour la performance des Core Web Vitals. WooCommerce genere plusieurs tailles d'images pour chaque photo de produit telechargee, ce qui signifie qu'un seul produit avec cinq images peut creer 20 fichiers image ou plus.\n\nConvertissez toutes les images de produits au format WebP avec un plugin comme ShortPixel, Imagify ou EWWW Image Optimizer. Les fichiers WebP sont 25 a 35 pour cent plus petits que les fichiers JPEG equivalents sans perte de qualite visible.\n\nImplementez le chargement paresseux pour les images de galerie produit, les carrousels de produits associes et toutes les images sous la ligne de flottaison. WordPress 5.5+ inclut le lazy loading natif, mais verifiez qu'il fonctionne sur vos templates WooCommerce. L'image produit principale au-dessus de la ligne de flottaison ne doit pas etre chargee en mode paresseux.\n\nDefinissez des attributs de largeur et hauteur explicites sur tous les elements d'image pour prevenir le Cumulative Layout Shift.",
          items: [
            "Convertir les images produit en WebP (25-35% plus petit que JPEG sans perte visible de qualite)",
            "Charger en mode paresseux les images de galerie mais pas l'image produit hero principale",
            "Definir des attributs largeur et hauteur explicites sur toutes les images pour prevenir le CLS",
            "Compresser les miniatures agressivement car elles apparaissent en petites tailles dans les grilles",
          ],
        },
        {
          title: "Architecture de site WooCommerce et maillage interne",
          content:
            "WordPress vous donne un controle complet sur l'architecture informationnelle de votre site. Planifiez votre taxonomie de categories avant de construire la boutique, car restructurer les categories apres l'indexation des produits signifie gerer des centaines de redirections.\n\nLimitez votre hierarchie de categories a trois niveaux maximum : categories principales, sous-categories et sous-sous-categories. Chaque niveau supplementaire dilue l'equite des liens internes et eloigne les produits de la page d'accueil.\n\nLes pages produit WooCommerce incluent automatiquement des produits associes et des sections de ventes croisees, fournissant des liens internes entre les produits. Personnalisez l'algorithme de produits associes via les hooks WooCommerce pour vous assurer qu'il met en avant des articles genuinement pertinents.\n\nLa navigation par fil d'Ariane est essentielle tant pour les utilisateurs que pour les moteurs de recherche. Activez le fil d'Ariane via votre plugin SEO et configurez-le pour suivre votre hierarchie de categories. Creez une structure de maillage interne complete au-dela des widgets automatises.",
        },
      ],
      navLabels: { previous: "Precedent", next: "Suivant" },
    },
    es: {
      badge: "SEO por plataforma",
      heading: "Guia SEO para WooCommerce",
      intro:
        "WooCommerce funciona sobre WordPress, dando a los propietarios de tiendas acceso al conjunto de herramientas SEO mas flexible disponible para comercio electronico. Con control total sobre URLs, configuracion del servidor y miles de plugins, WooCommerce permite una optimizacion granular que las plataformas alojadas no pueden igualar. Esa flexibilidad tambien significa mas decisiones y mas potencial de errores de configuracion. Para un contexto mas amplio sobre optimizacion de ecommerce, consulta nuestra vision general de [SEO tecnico para ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "13 min de lectura",
      sections: [
        {
          title: "Estructura de enlaces permanentes y optimizacion de URLs",
          content:
            "WordPress permite definir estructuras de enlaces permanentes personalizadas a traves de Ajustes > Enlaces permanentes. Para tiendas WooCommerce, el patron de URL de producto por defecto es /product/nombre-producto/, pero puedes modificar el slug base /product/ o eliminarlo por completo usando plugins o reglas de reescritura personalizadas.\n\nEl enfoque mas amigable para SEO es mantener URLs cortas y descriptivas. Muchos propietarios eliminan los slugs base /product-category/ y /product/ para conseguir URLs mas limpias. Sin embargo, eliminar estas bases crea riesgo de conflictos de URL entre productos, categorias, paginas y entradas que comparten slugs similares.\n\nWooCommerce tambien genera URLs con parametros de consulta para listados de productos filtrados y ordenados. Estas URLs parametrizadas pueden crear contenido duplicado masivo si Google las indexa. Configura tu plugin SEO para agregar directivas noindex a URLs filtradas.\n\nPara tiendas con catalogos grandes, considera implementar navegacion facetada con filtrado basado en AJAX que no genere nuevas URLs.",
          tip: "Despues de cambiar la estructura de enlaces permanentes, usa una herramienta de buscar y reemplazar en base de datos como Better Search Replace para actualizar los enlaces internos en las descripciones de productos.",
        },
        {
          title: "Plugins SEO: Yoast vs RankMath vs SEOPress",
          content:
            "Toda tienda WooCommerce necesita un plugin SEO dedicado para gestionar etiquetas de titulo, meta descripciones, sitemaps XML, marcado schema y etiquetas canonicas. Las tres opciones principales son Yoast SEO, Rank Math y SEOPress.\n\nYoast SEO es el plugin mas establecido con integracion dedicada para WooCommerce a traves de su addon premium WooCommerce SEO. Proporciona marcado schema especifico para productos, generacion de migas de pan y meta tags para redes sociales.\n\nRank Math ofrece mas funciones en su version gratuita que Yoast, incluyendo generadores de schema integrados para productos, gestion avanzada de redirecciones e integracion con Google Search Console directamente en el panel de WordPress.\n\nSEOPress es una alternativa mas ligera que atrae a propietarios conscientes del rendimiento. Genera menos consultas de base de datos que Yoast o Rank Math, lo cual puede importar en tiendas con mas de 10.000 productos.",
          items: [
            "Yoast SEO: mayor reconocimiento de marca, addon dedicado para WooCommerce, analisis de contenido exhaustivo",
            "Rank Math: mas funciones en version gratuita, generadores de schema integrados, integracion con Search Console",
            "SEOPress: menor huella en base de datos, rendimiento de admin mas rapido, bueno para catalogos grandes",
            "Los tres soportan sitemaps XML, etiquetas canonicas, Open Graph y schema de producto",
          ],
        },
        {
          title: "Optimizacion de base de datos y hosting para SEO",
          content:
            "El rendimiento de WooCommerce depende en gran medida del entorno de hosting y la optimizacion de la base de datos. A diferencia de plataformas alojadas como Shopify, tu llevas la responsabilidad total de la velocidad del servidor, que impacta directamente en los Core Web Vitals y la eficiencia del rastreo.\n\nElige un proveedor de hosting que ofrezca cache a nivel de servidor (Varnish, LiteSpeed Cache o NGINX FastCGI cache), PHP 8.1 o mas reciente, y MySQL o MariaDB con caches de consultas correctamente configurados. El hosting compartido frecuentemente produce valores de TTFB superiores a 600 milisegundos.\n\nLa optimizacion de la base de datos es cada vez mas relevante conforme crece el catalogo de productos. WooCommerce almacena meta-datos en la tabla wp_postmeta, que puede crecer a millones de filas. WordPress 6.1 introdujo el High-Performance Order Storage (HPOS) que mueve datos de pedidos a tablas personalizadas.\n\nInstala un plugin de cache de paginas y una capa de cache de objetos (Redis o Memcached). El cache de paginas sirve HTML pre-construido a visitantes y rastreadores, reduciendo drasticamente el tiempo de respuesta del servidor. El rendimiento de WooCommerce depende en gran medida de tu entorno de hosting y la optimizacion de la base de datos, lo que impacta directamente la [optimizacion de velocidad del sitio](/academy/site-speed-optimization).",
        },
        {
          title: "Marcado schema en WooCommerce y resultados enriquecidos",
          content:
            "El marcado schema correcto permite a Google mostrar resultados enriquecidos para tus productos, incluyendo precio, disponibilidad, calificaciones de resenas e informacion de envio directamente en los resultados de busqueda. WooCommerce no incluye marcado schema por defecto, asi que tu plugin SEO o un plugin dedicado debe generarlo.\n\nEl [schema de Producto](/academy/structured-data-for-products) debe incluir como minimo: nombre, descripcion, imagen, SKU, marca, precio, moneda, disponibilidad y resenas. Para productos variables, genera una Oferta para cada variacion para que Google pueda mostrar el rango de precios.\n\nEl schema de migas de pan ayuda a Google a entender la jerarquia de tu sitio y puede reemplazar la URL en los resultados de busqueda con un rastro de migas de pan legible.\n\nEl schema FAQ en paginas de producto puede ganar espacio adicional en las SERPs. Si tus paginas de producto incluyen una seccion FAQ o paneles desplegables de preguntas y respuestas, marcalos con el schema FAQPage.",
          tip: "Prueba tu marcado schema en una pagina de producto, una pagina de producto variable y una pagina de categoria. Los productos variables a menudo producen errores de schema porque cada variacion necesita su propio elemento Oferta.",
        },
        {
          title: "Optimizacion de imagenes y medios en WooCommerce",
          content:
            "Las imagenes de productos son tipicamente los archivos mas grandes en cualquier pagina de comercio electronico, haciendo la optimizacion de imagenes critica para el rendimiento de Core Web Vitals. WooCommerce genera multiples tamanos de imagen para cada foto de producto subida, lo que significa que un solo producto con cinco imagenes puede crear 20 o mas archivos.\n\nConvierte todas las imagenes de productos al formato WebP usando un plugin como ShortPixel, Imagify o EWWW Image Optimizer. Los archivos WebP son entre un 25 y un 35 por ciento mas pequenos que los archivos JPEG equivalentes sin perdida visible de calidad.\n\nImplementa carga diferida para imagenes de galeria, carruseles de productos relacionados y cualquier imagen debajo del pliegue. WordPress 5.5+ incluye carga diferida nativa, pero verifica que funcione en tus plantillas WooCommerce. La imagen principal del producto sobre el pliegue no debe cargarse de manera diferida.\n\nEstablece atributos de ancho y alto explicitos en todos los elementos de imagen para prevenir el Cumulative Layout Shift.",
          items: [
            "Convertir imagenes de productos a WebP (25-35% mas pequenos que JPEG sin perdida visible de calidad)",
            "Cargar de forma diferida imagenes de galeria pero no la imagen hero principal del producto",
            "Establecer atributos de ancho y alto explicitos en todas las imagenes para prevenir CLS",
            "Comprimir miniaturas agresivamente ya que aparecen en tamanos pequenos en cuadriculas",
          ],
        },
        {
          title: "Arquitectura de sitio WooCommerce y enlazado interno",
          content:
            "WordPress te da control completo sobre la arquitectura de informacion de tu sitio. Planifica tu taxonomia de categorias antes de construir la tienda, porque reestructurar categorias despues de que los productos estan indexados significa gestionar cientos de redirecciones.\n\nManten tu jerarquia de categorias en un maximo de tres niveles: categorias principales, subcategorias y sub-subcategorias. Cada nivel adicional diluye la equidad de enlaces internos y aleja los productos de la pagina de inicio.\n\nLas paginas de producto de WooCommerce incluyen automaticamente productos relacionados y secciones de venta cruzada, que proporcionan enlaces internos entre productos. Personaliza el algoritmo de productos relacionados usando hooks de WooCommerce para asegurar que muestre articulos genuinamente relevantes.\n\nLa navegacion por migas de pan es esencial tanto para usuarios como para motores de busqueda. Activa las migas de pan a traves de tu plugin SEO y configuralas para seguir tu jerarquia de categorias. Crea una estructura de enlazado interno integral mas alla de los widgets automatizados.",
        },
      ],
      navLabels: { previous: "Anterior", next: "Siguiente" },
    },
    it: {
      badge: "SEO per piattaforma",
      heading: "Guida SEO per WooCommerce",
      intro:
        "WooCommerce funziona su WordPress, offrendo ai proprietari di negozi l'accesso al toolkit SEO piu flessibile disponibile per l'e-commerce. Con il pieno controllo su URL, configurazione del server e migliaia di plugin, WooCommerce consente un'ottimizzazione granulare che le piattaforme ospitate non possono offrire. Questa flessibilita significa anche piu decisioni e piu potenziale di configurazione errata. Per approfondire, consulta la nostra guida sulla [SEO tecnica per l'ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "13 min di lettura",
      sections: [
        {
          title: "Struttura dei permalink e ottimizzazione degli URL",
          content:
            "WordPress consente di definire strutture di permalink personalizzate tramite Impostazioni > Permalink. Per i negozi WooCommerce, il pattern URL di prodotto predefinito e /product/nome-prodotto/, ma puoi modificare lo slug di base /product/ o rimuoverlo completamente con plugin o regole di riscrittura personalizzate.\n\nL'approccio piu favorevole per la SEO e mantenere URL brevi e descrittivi. Molti proprietari rimuovono gli slug di base /product-category/ e /product/ per ottenere URL piu puliti. Tuttavia, la rimozione di queste basi crea rischio di conflitti URL tra prodotti, categorie, pagine e articoli con slug simili.\n\nWooCommerce genera anche URL con parametri di query per elenchi di prodotti filtrati e ordinati. Questi URL parametrizzati possono creare contenuto duplicato massiccio se Google li indicizza. Configura il tuo plugin SEO per aggiungere direttive noindex agli URL filtrati.\n\nPer i negozi con cataloghi ampi, considera l'implementazione di una navigazione a faccette con filtraggio basato su AJAX che non genera nuovi URL.",
          tip: "Dopo aver modificato la struttura dei permalink, usa uno strumento di ricerca e sostituzione nel database come Better Search Replace per aggiornare i link interni nelle descrizioni dei prodotti.",
        },
        {
          title: "Plugin SEO: Yoast vs RankMath vs SEOPress",
          content:
            "Ogni negozio WooCommerce necessita di un plugin SEO dedicato per gestire tag title, meta description, sitemap XML, markup schema e tag canonici. Le tre opzioni principali sono Yoast SEO, Rank Math e SEOPress.\n\nYoast SEO e il plugin piu consolidato con integrazione WooCommerce dedicata tramite il suo addon premium WooCommerce SEO. Fornisce markup schema specifico per i prodotti, generazione di breadcrumb e meta tag per i social media.\n\nRank Math offre piu funzionalita nella sua versione gratuita rispetto a Yoast, inclusi generatori di schema integrati per i prodotti, gestione avanzata dei redirect e integrazione con Google Search Console direttamente nella dashboard di WordPress.\n\nSEOPress e un'alternativa piu leggera che attrae i proprietari attenti alle prestazioni. Genera meno query al database rispetto a Yoast o Rank Math, il che puo fare la differenza per negozi con oltre 10.000 prodotti.",
          items: [
            "Yoast SEO: maggiore riconoscimento del marchio, addon WooCommerce dedicato, analisi contenuti approfondita",
            "Rank Math: piu funzionalita nella versione gratuita, generatori di schema integrati, integrazione Search Console",
            "SEOPress: minore impatto sul database, prestazioni admin piu veloci, adatto per grandi cataloghi",
            "Tutti e tre supportano sitemap XML, tag canonici, Open Graph e schema prodotto",
          ],
        },
        {
          title: "Ottimizzazione database e hosting per la SEO",
          content:
            "Le prestazioni di WooCommerce dipendono fortemente dall'ambiente di hosting e dall'ottimizzazione del database. A differenza delle piattaforme ospitate come Shopify, sei pienamente responsabile della velocita del server, che impatta direttamente sui Core Web Vitals e sull'efficienza del crawl. Approfondisci con la nostra guida sulla [ottimizzazione della velocità del sito](/academy/site-speed-optimization).\n\nScegli un provider di hosting che offra cache a livello server (Varnish, LiteSpeed Cache o NGINX FastCGI cache), PHP 8.1 o piu recente, e MySQL o MariaDB con cache delle query correttamente configurato. L'hosting condiviso produce frequentemente valori TTFB superiori a 600 millisecondi.\n\nL'ottimizzazione del database diventa sempre piu rilevante man mano che il catalogo prodotti cresce. WooCommerce memorizza i meta-dati nella tabella wp_postmeta, che puo crescere fino a milioni di righe. WordPress 6.1 ha introdotto l'High-Performance Order Storage (HPOS) che sposta i dati degli ordini in tabelle personalizzate.\n\nInstalla un plugin di cache delle pagine e un livello di cache degli oggetti (Redis o Memcached). La cache delle pagine serve HTML pre-costruito a visitatori e crawler, riducendo drasticamente il tempo di risposta del server.",
        },
        {
          title: "Markup schema WooCommerce e risultati arricchiti",
          content:
            "Un markup schema corretto consente a Google di visualizzare risultati arricchiti per i tuoi prodotti, inclusi prezzo, disponibilita, valutazioni delle recensioni e informazioni sulla spedizione direttamente nei risultati di ricerca. WooCommerce non include markup schema di default, quindi il tuo plugin SEO o un plugin schema dedicato deve generarlo.\n\nLo schema Prodotto deve includere come minimo: nome, descrizione, immagine, SKU, marca, prezzo, valuta, disponibilita e recensioni. Per i prodotti variabili, genera un'Offerta per ogni variazione affinche Google possa visualizzare l'intervallo di prezzo. Scopri di più nella nostra guida sui [dati strutturati per i prodotti](/academy/structured-data-for-products).\n\nLo schema breadcrumb aiuta Google a comprendere la gerarchia del tuo sito e puo sostituire l'URL nei risultati di ricerca con un percorso breadcrumb leggibile.\n\nLo schema FAQ sulle pagine prodotto puo guadagnare spazio aggiuntivo nelle SERP. Se le tue pagine prodotto includono una sezione FAQ o pannelli di domande e risposte espandibili, contrassegnali con lo schema FAQPage.",
          tip: "Testa il tuo markup schema su una pagina prodotto, una pagina prodotto variabile e una pagina categoria. I prodotti variabili spesso producono errori di schema perche ogni variazione necessita del proprio elemento Offerta.",
        },
        {
          title: "Ottimizzazione immagini e media WooCommerce",
          content:
            "Le immagini dei prodotti sono tipicamente i file piu grandi su qualsiasi pagina e-commerce, rendendo l'ottimizzazione delle immagini fondamentale per le prestazioni dei Core Web Vitals. WooCommerce genera piu dimensioni di immagine per ogni foto prodotto caricata, il che significa che un singolo prodotto con cinque immagini puo creare 20 o piu file.\n\nConverti tutte le immagini dei prodotti in formato WebP usando un plugin come ShortPixel, Imagify o EWWW Image Optimizer. I file WebP sono dal 25 al 35 percento piu piccoli dei file JPEG equivalenti senza perdita visibile di qualita.\n\nImplementa il lazy loading per le immagini della galleria prodotto, i caroselli di prodotti correlati e qualsiasi immagine sotto la piega. WordPress 5.5+ include il lazy loading nativo, ma verifica che funzioni sui tuoi template WooCommerce. L'immagine prodotto principale sopra la piega non deve essere caricata in modo lazy.\n\nImposta attributi di larghezza e altezza espliciti su tutti gli elementi immagine per prevenire il Cumulative Layout Shift.",
          items: [
            "Convertire le immagini prodotto in WebP (25-35% piu piccoli di JPEG senza perdita visibile di qualita)",
            "Caricare in modo lazy le immagini della galleria ma non l'immagine hero principale del prodotto",
            "Impostare attributi di larghezza e altezza espliciti su tutte le immagini per prevenire il CLS",
            "Comprimere aggressivamente le miniature poiche appaiono in dimensioni ridotte nelle griglie",
          ],
        },
        {
          title: "Architettura del sito WooCommerce e linking interno",
          content:
            "WordPress ti offre il controllo completo sull'architettura informativa del tuo sito. Pianifica la tassonomia delle categorie prima di costruire il negozio, perche ristrutturare le categorie dopo l'indicizzazione dei prodotti significa gestire centinaia di redirect.\n\nMantieni la gerarchia delle categorie a massimo tre livelli: categorie principali, sottocategorie e sotto-sottocategorie. Ogni livello aggiuntivo diluisce l'equita dei link interni e allontana i prodotti dalla homepage.\n\nLe pagine prodotto WooCommerce includono automaticamente prodotti correlati e sezioni di cross-sell, che forniscono link interni tra i prodotti. Personalizza l'algoritmo dei prodotti correlati usando gli hook di WooCommerce per assicurarti che mostri articoli genuinamente pertinenti.\n\nLa navigazione breadcrumb e essenziale sia per gli utenti che per i motori di ricerca. Abilita i breadcrumb tramite il tuo plugin SEO e configurali per seguire la gerarchia delle categorie. Crea una struttura di linking interno completa oltre ai widget automatizzati.",
        },
      ],
      navLabels: { previous: "Precedente", next: "Successivo" },
    },
    nl: {
      badge: "SEO per platform",
      heading: "WooCommerce SEO-gids",
      intro:
        "WooCommerce draait op WordPress en geeft winkeleigenaren toegang tot de meest flexibele SEO-toolkit voor e-commerce. Met volledige controle over URL's, serverconfiguratie en duizenden plugins maakt WooCommerce een gedetailleerde optimalisatie mogelijk die gehoste platforms niet kunnen evenaren. Die flexibiliteit betekent ook meer beslissingen en meer kans op misconfiguratie.",
      readTime: "13 min leestijd",
      sections: [
        {
          title: "Permalinkstructuur en URL-optimalisatie\n\nVoor een diepere duik in deze technische fundamenten, zie onze gids over [technische SEO voor ecommerce](/blog/technical-seo-for-ecommerce).",
          content:
            "WordPress laat je aangepaste permalinkstructuren definieren via Instellingen > Permalinks. Voor WooCommerce-winkels is het standaard product-URL-patroon /product/productnaam/, maar je kunt de /product/-basisslug wijzigen of volledig verwijderen met plugins of aangepaste herschrijfregels.\n\nDe meest SEO-vriendelijke aanpak is om URL's kort en beschrijvend te houden. Veel winkeleigenaren verwijderen de /product-category/ en /product/-basisslugs om schonere URL's te bereiken. Het verwijderen van deze bases creert echter een risico op URL-conflicten tussen producten, categorieen, pagina's en berichten met vergelijkbare slugs.\n\nWooCommerce genereert ook URL's met queryparameters voor gefilterde en gesorteerde productlijsten. Deze geparametriseerde URL's kunnen massaal duplicaat content creeren als Google ze indexeert. Configureer je SEO-plugin om noindex-richtlijnen toe te voegen aan gefilterde URL's.\n\nVoor winkels met grote catalogi, overweeg facetnavigatie met AJAX-gebaseerd filteren dat geen nieuwe URL's genereert.",
          tip: "Gebruik na het wijzigen van je permalinkstructuur een database zoek-en-vervang tool zoals Better Search Replace om interne links in productbeschrijvingen bij te werken. WordPress werkt hardgecodeerde links niet automatisch bij.",
        },
        {
          title: "SEO-plugins: Yoast vs RankMath vs SEOPress",
          content:
            "Elke WooCommerce-winkel heeft een toegewijde SEO-plugin nodig voor het beheren van title-tags, metabeschrijvingen, XML-sitemaps, schema-markup en canonical tags. De drie belangrijkste opties zijn Yoast SEO, Rank Math en SEOPress.\n\nYoast SEO is de meest gevestigde plugin met speciale WooCommerce-integratie via de premium WooCommerce SEO-addon. Het biedt productspecifieke schema-markup, breadcrumb-generatie en social media meta-tags.\n\nRank Math biedt meer functies in de gratis versie dan Yoast, waaronder ingebouwde schemageneratoren voor producten, geavanceerd redirectbeheer en Google Search Console-integratie direct in het WordPress-dashboard.\n\nSEOPress is een lichter alternatief dat prestatiegerigte winkeleigenaren aanspreekt. Het genereert minder databasequeries dan Yoast of Rank Math, wat relevant kan zijn voor winkels met meer dan 10.000 producten.",
          items: [
            "Yoast SEO: sterkste merkbekendheid, speciale WooCommerce-addon, grondige contentanalyse",
            "Rank Math: meeste functies in gratis versie, ingebouwde schemageneratoren, Search Console-integratie",
            "SEOPress: lichtste database-voetafdruk, snelste adminprestaties, goed voor grote catalogi",
            "Alle drie ondersteunen XML-sitemaps, canonical tags, Open Graph en productschema",
          ],
        },
        {
          title: "Database- en hostingoptimalisatie voor SEO",
          content:
            "WooCommerce-prestaties hangen sterk af van je hostingomgeving en database-optimalisatie. Anders dan bij gehoste platforms zoals Shopify draag je de volledige verantwoordelijkheid voor de serversnelheid, die direct invloed heeft op Core Web Vitals en crawl-efficientie.\n\nKies een hostingprovider die server-level caching biedt (Varnish, LiteSpeed Cache of NGINX FastCGI cache), PHP 8.1 of nieuwer, en MySQL of MariaDB met correct afgestemde querycaches. Gedeelde hosting produceert vaak TTFB-waarden boven de 600 milliseconden.\n\nDatabase-optimalisatie wordt steeds belangrijker naarmate je productcatalogus groeit. WooCommerce slaat post-metadata op in de wp_postmeta-tabel, die kan uitgroeien tot miljoenen rijen. WordPress 6.1 introduceerde High-Performance Order Storage (HPOS) dat ordergegevens naar aangepaste tabellen verplaatst.\n\nInstalleer een paginacaching-plugin en een objectcaching-laag (Redis of Memcached). Paginacaching serveert voorgebouwd HTML aan bezoekers en zoekmachinecrawlers, waardoor de serverresponstijd drastisch wordt verminderd.",
        },
        {
          title: "WooCommerce schema-markup en verrijkte resultaten\n\nOns onderwerp over [sitesnelheidsoptimalisatie](/academy/site-speed-optimization) behandelt deze technieken uitgebreid.",
          content:
            "Correcte schema-markup stelt Google in staat om verrijkte resultaten voor je producten weer te geven, inclusief prijs, beschikbaarheid, beoordelingen en verzendinformatie direct in de zoekresultaten. WooCommerce bevat standaard geen schema-markup, dus je SEO-plugin of een speciale schema-plugin moet het genereren.\n\nProductschema moet minimaal bevatten: naam, beschrijving, afbeelding, SKU, merk, prijs, valuta, beschikbaarheid en beoordelingen. Voor variabele producten genereer je een Aanbieding voor elke variatie zodat Google het prijsbereik kan tonen.\n\nBreadcrumb-schema helpt Google de hierarchie van je site te begrijpen en kan de URL in zoekresultaten vervangen door een leesbaar breadcrumb-pad.\n\nFAQ-schema op productpagina's kan extra SERP-ruimte veroveren. Als je productpagina's een FAQ-sectie of uitklapbare vraag-en-antwoordpanelen bevatten, markeer ze dan met FAQPage-schema.",
          tip: "Test je schema-markup op een productpagina, een variabel productpagina en een categoriepagina. Variabele producten produceren vaak schemafouten omdat elke variatie een eigen Aanbieding-element nodig heeft.\n\nOns onderwerp over [gestructureerde data voor producten](/academy/structured-data-for-products) behandelt de implementatie uitgebreid.",
        },
        {
          title: "WooCommerce afbeeldings- en media-optimalisatie",
          content:
            "Productafbeeldingen zijn doorgaans de grootste bestanden op elke e-commercepagina, waardoor beeldoptimalisatie cruciaal is voor Core Web Vitals-prestaties. WooCommerce genereert meerdere afbeeldingsformaten voor elke geuploade productfoto, wat betekent dat een enkel product met vijf afbeeldingen 20 of meer beeldbestanden kan creeren.\n\nConverteer alle productafbeeldingen naar WebP-formaat met een plugin zoals ShortPixel, Imagify of EWWW Image Optimizer. WebP-bestanden zijn 25 tot 35 procent kleiner dan gelijkwaardige JPEG-bestanden zonder zichtbaar kwaliteitsverlies.\n\nImplementeer lazy loading voor productgalerij-afbeeldingen, gerelateerde productcarrousels en alle afbeeldingen onder de vouw. WordPress 5.5+ bevat native lazy loading, maar controleer of het werkt in je WooCommerce-templates. De hoofdproductafbeelding boven de vouw mag niet lazy worden geladen.\n\nStel expliciete breedte- en hoogte-attributen in op alle afbeeldingselementen om Cumulative Layout Shift te voorkomen.",
          items: [
            "Productafbeeldingen converteren naar WebP (25-35% kleiner dan JPEG zonder zichtbaar kwaliteitsverlies)",
            "Galerij- en onder-de-vouw-afbeeldingen lazy laden maar niet de primaire product-heroafbeelding",
            "Expliciete breedte- en hoogte-attributen instellen op alle afbeeldingselementen om CLS te voorkomen",
            "Thumbnails agressief comprimeren aangezien ze op kleine formaten in rasters verschijnen",
          ],
        },
        {
          title: "WooCommerce sitearchitectuur en interne linking",
          content:
            "WordPress geeft je volledige controle over de informatie-architectuur van je site. Plan je categorietaxonomie voordat je de winkel bouwt, want het herstructureren van categorieen nadat producten zijn geindexeerd betekent het beheren van honderden redirects.\n\nHoud je categoriehierarchie op maximaal drie niveaus: hoofdcategorieen, subcategorieen en sub-subcategorieen. Elk extra niveau verdunt de interne linkwaarde en duwt producten verder van de homepage.\n\nWooCommerce-productpagina's bevatten automatisch gerelateerde producten en cross-sell-secties, die interne links tussen producten bieden. Pas het algoritme voor gerelateerde producten aan met WooCommerce-hooks om ervoor te zorgen dat het werkelijk relevante items toont.\n\nBreadcrumbnavigatie is essentieel voor zowel gebruikers als zoekmachines. Activeer breadcrumbs via je SEO-plugin en configureer ze om je categoriehierarchie te volgen. Creeer een uitgebreide interne linkstructuur buiten de geautomatiseerde widgets om.",
        },
      ],
      navLabels: { previous: "Vorige", next: "Volgende" },
    },
  },
};
