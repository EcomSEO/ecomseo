import type { AcademyTopic } from "../../types";

export const bigcommerceSeoGuide: AcademyTopic = {
  slug: "bigcommerce-seo-guide",
  cluster: 8,
  resources: [{"label":"BigCommerce SEO Guide","url":"https://support.bigcommerce.com/s/article/Search-Engine-Optimization","type":"docs"},{"label":"Google PageSpeed Insights","url":"https://pagespeed.web.dev/","type":"tool"},{"label":"Google Search Console","url":"https://search.google.com/search-console","type":"tool"}],
  content: {
    en: {
      badge: "Platform SEO",
      heading: "BigCommerce SEO Guide",
      intro:
        "BigCommerce is built with native SEO capabilities that rival or surpass many competing ecommerce platforms. Its clean URL structures, built-in CDN, and flexible customization options give merchants a strong foundation for organic search. However, unlocking the full SEO potential of BigCommerce requires understanding its unique architecture, default behaviors, and the areas where manual optimization is still necessary. For cross-platform technical fundamentals, see our guide on [technical SEO for ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "10 min read",
      sections: [
        {
          title: "BigCommerce URL Structure and Clean Permalink Control",
          content:
            "BigCommerce offers one of the most SEO-friendly URL structures among hosted ecommerce platforms. Unlike Shopify, which forces /products/ and /collections/ prefixes, BigCommerce lets you configure fully customizable URL paths. Product URLs can sit directly off the root domain (e.g., /blue-running-shoes/) without mandatory category or folder prefixes.\n\nThe platform provides three URL format options in the store settings: SEO-optimized URLs, short URLs, and category-pathed URLs. The SEO-optimized format is the default and recommended choice, as it creates clean, keyword-rich slugs without unnecessary nesting. Category-pathed URLs (/shoes/running/blue-running-shoes/) can be useful for topical authority but create longer URLs and potential duplicate content issues when products belong to multiple categories.\n\nBigCommerce automatically generates canonical tags for product pages to handle scenarios where the same product is accessible through different category paths. However, you should audit these canonical tags regularly, especially after reorganizing your category structure. Use the URL Inspection tool in Google Search Console to verify that the canonical URL matches your preferred version.\n\nCustom URL redirects can be managed through the BigCommerce admin panel or via the API for bulk operations. The platform supports 301 and 302 redirects natively, which is essential during product lifecycle management and catalog restructuring.",
          items: [
            "Configure SEO-optimized URLs in store settings for clean, flat URL structures",
            "Audit canonical tags after any category reorganization to prevent indexation conflicts",
            "Use the BigCommerce API for bulk redirect management during large catalog changes",
            "Avoid category-pathed URLs unless your site architecture specifically benefits from hierarchical paths",
          ],
          tip: "When migrating to BigCommerce from another platform, use the 301 redirect CSV import feature to map all old URLs before launching. Test each redirect category with a crawler to catch redirect chains or loops before they affect rankings.",
        },
        {
          title: "Built-In SEO Features and Configuration",
          content:
            "BigCommerce ships with a robust set of native SEO tools that reduce dependency on third-party apps. Every product, category, and content page exposes editable fields for page titles, meta descriptions, and URL slugs directly in the admin panel. The platform also auto-generates a comprehensive XML sitemap that updates as you add or remove pages.\n\nThe built-in sitemap includes product pages, category pages, brand pages, and content pages. Unlike some platforms, BigCommerce allows you to control sitemap inclusion at the page level by toggling visibility settings. Pages set to hidden are automatically excluded from the sitemap, which helps keep your sitemap lean and focused on indexable content.\n\nBigCommerce provides automatic image optimization through its Akamai CDN, converting images to WebP format and serving appropriately sized versions based on the requesting device. This native image optimization directly impacts Core Web Vitals scores without requiring manual intervention or third-party image compression apps.\n\nRobots.txt customization is available through the admin panel, letting you block specific paths from crawling. This is particularly useful for filtering out internal search result pages, customer account pages, and other low-value URLs that consume crawl budget without contributing to organic visibility.",
          items: [
            "Edit page titles, meta descriptions, and slugs for every product and category page",
            "Review the auto-generated XML sitemap monthly to ensure it reflects your current catalog",
            "Use the robots.txt editor to block faceted navigation URLs and internal search pages",
          ],
          tip: "BigCommerce auto-generates meta descriptions from the first few sentences of your product description if you leave the field blank. Always write custom meta descriptions for your top-revenue products to maximize click-through rates from search results.",
        },
        {
          title: "Theme Customization and Structured Data",
          content:
            "BigCommerce themes are built on the Stencil framework, which uses Handlebars templating to render storefront pages. Stencil gives developers granular control over HTML output, heading hierarchy, and structured data markup. Unlike tag-based template languages, Handlebars separates logic from presentation, making it easier to maintain clean, semantic HTML.\n\nStructured data is where BigCommerce truly differentiates itself. The platform automatically injects JSON-LD Product schema on product pages, covering many of the [structured data for products](/academy/structured-data-for-products) requirements, including price, availability, SKU, brand, and review aggregate data when reviews are enabled. This native structured data implementation covers the most impactful schema types without any manual coding.\n\nHowever, the default structured data does not include breadcrumb schema, FAQ schema, or HowTo schema. For these, you need to modify the Stencil theme templates directly. Breadcrumb schema can be added to the base layout template by iterating over the breadcrumb navigation data already available in the Stencil context. FAQ schema should be added on category pages where you include expandable FAQ sections.\n\nHeading hierarchy requires careful attention in Stencil themes. Ensure that the product name uses an H1 tag, category names use H1 on collection pages, and the site logo or store name does not consume the H1 element. Audit your theme templates to verify that each page type has a single, descriptive H1 that targets your primary keyword for that page.",
          items: [
            "Leverage the native JSON-LD Product schema and verify it with Google Rich Results Test",
            "Add breadcrumb and FAQ schema manually to Stencil templates for enhanced SERP features",
            "Audit H1 usage across all page types to ensure proper heading hierarchy",
            "Use Stencil CLI for local theme development and testing before pushing changes live",
          ],
        },
        {
          title: "Speed Optimization and Core Web Vitals",
          content:
            "BigCommerce stores benefit from a global Akamai CDN that delivers content from edge servers closest to the visitor. This infrastructure advantage means that server response times (Time to First Byte) are generally faster than self-hosted solutions and competitive with other SaaS platforms. However, page speed still depends heavily on theme code quality, image sizes, and third-party script loading. Apply the same [site speed optimization](/academy/site-speed-optimization) principles that work across all ecommerce platforms.\n\nLargest Contentful Paint (LCP) is the most impactful Core Web Vital for ecommerce SEO. On BigCommerce, the LCP element is typically the hero banner image or the primary product image. Optimize these by uploading images at the exact dimensions your theme requires rather than relying solely on automatic resizing. Use the Stencil image helper to specify srcset attributes for responsive image delivery.\n\nCumulative Layout Shift (CLS) issues on BigCommerce commonly arise from dynamically loaded elements like promotional banners, review widgets, and product recommendation carousels. Reserve explicit dimensions for these elements in your CSS to prevent content from shifting as the page loads. Lazy-loaded images below the fold should have width and height attributes set in the HTML.\n\nThird-party scripts from analytics tools, chat widgets, and marketing pixels are the primary source of Total Blocking Time (TBT) issues. Load non-essential scripts asynchronously or defer their execution until after the main content has rendered. BigCommerce's Script Manager lets you control script placement in the head or footer, and you should place all non-critical scripts in the footer with async or defer attributes.",
          tip: "Use BigCommerce's built-in Google Lighthouse integration in the Page Builder to monitor Core Web Vitals scores as you make changes. Test both mobile and desktop scores, as mobile scores are what Google uses for ranking.",
        },
        {
          title: "BigCommerce SEO Limitations and Workarounds",
          content:
            "Despite its strong SEO foundation, BigCommerce has limitations that merchants must work around. The platform does not support native blog category pages or advanced content management features comparable to WordPress. While BigCommerce includes a blog module, it lacks hierarchical categories, custom post types, and sophisticated content blocks that are standard in dedicated CMS platforms.\n\nFaceted navigation on category pages creates a significant crawl budget challenge. Each filter combination generates a unique URL with query parameters, potentially creating thousands of indexable pages with near-duplicate content. BigCommerce does not provide native controls for adding noindex tags to filtered pages. The workaround is to implement canonical tags on filtered URLs pointing back to the unfiltered category page, which can be done through custom Stencil template logic.\n\nInternational SEO on BigCommerce requires careful planning. The platform supports multi-currency display and multi-language content through third-party integrations, but it does not natively generate hreflang tags. If you operate in multiple markets, you need to implement hreflang annotations manually in your theme header or use a localization app that handles this automatically.\n\nAnother limitation is the lack of native support for product variant-level URLs. Each product variant (color, size) shares the same URL with JavaScript-based variant switching. For products where individual variants have significant search volume, this means you cannot create dedicated landing pages for each variant without workarounds like creating separate product listings.\n\nPagination handling uses rel=next and rel=prev annotations, but Google no longer uses these signals for indexing. Ensure your paginated category pages are crawlable through internal links and that all products are accessible within a reasonable crawl depth from the homepage.",
          items: [
            "Implement canonical tags on faceted navigation URLs through custom Stencil template code",
            "Add hreflang tags manually or via a localization app for multi-market stores",
            "Create separate product listings for high-search-volume variants when necessary",
            "Use a reverse proxy setup to run WordPress blog content on a subdirectory of your BigCommerce domain",
            "Configure pagination to ensure all products are reachable within three clicks from the homepage",
          ],
          tip: "For stores with large catalogs, consider implementing a product feed to Google Merchant Center as an additional indexation signal. Google can discover product URLs through the feed even if crawler access to deep paginated pages is limited.",
        },
        {
          title: "BigCommerce SEO Monitoring and Ongoing Optimization",
          content:
            "Effective SEO on BigCommerce requires continuous monitoring beyond the initial setup. Connect Google Search Console and Google Analytics 4 to track indexation status, click-through rates, and organic traffic trends. BigCommerce provides a native integration for both tools, making setup straightforward through the admin panel.\n\nMonitor your index coverage report in Google Search Console weekly. Pay particular attention to pages excluded by noindex, pages with redirect errors, and soft 404 pages. BigCommerce stores commonly trigger soft 404 issues on out-of-stock product pages that display an empty state rather than a proper 404 response code.\n\nSet up automated alerts for significant drops in indexed pages or organic traffic. Google Search Console provides email notifications for critical issues, but third-party monitoring tools like ContentKing or Lumar can provide real-time alerts when pages are unintentionally deindexed, canonical tags change, or structured data breaks.\n\nConduct quarterly content audits to identify thin product pages that need description enrichment, category pages with low word counts, and blog posts that have lost traffic. BigCommerce's CSV export feature lets you pull all product data into a spreadsheet for bulk analysis of title tag lengths, meta description completeness, and URL slug optimization opportunities.\n\nReview your internal linking structure regularly. Ensure that top-selling products and strategic category pages receive the most internal links from related content, navigation menus, and cross-sell widgets. BigCommerce's related products feature can be configured to serve SEO purposes when the algorithm is set to show products from the same category rather than random recommendations.",
          items: [
            "Connect Google Search Console and GA4 natively through the BigCommerce admin",
            "Monitor index coverage weekly for soft 404s on out-of-stock product pages",
            "Run quarterly CSV exports to audit meta tags and descriptions in bulk",
            "Configure the related products algorithm to reinforce internal linking within topical clusters",
          ],
        },
      ],
      navLabels: { previous: "Previous", next: "Next" },
    },
    de: {
      badge: "Plattform-SEO",
      heading: "BigCommerce SEO-Leitfaden",
      intro:
        "BigCommerce verfuegt ueber native SEO-Funktionen, die viele konkurrierende E-Commerce-Plattformen erreichen oder uebertreffen. Die sauberen URL-Strukturen, das integrierte CDN und die flexiblen Anpassungsoptionen bieten Haendlern eine solide Grundlage fuer die organische Suche. Um das volle SEO-Potenzial von BigCommerce auszuschoepfen, muessen Sie jedoch die einzigartige Architektur, die Standardverhalten und die Bereiche verstehen, in denen manuelle Optimierung weiterhin erforderlich ist. Weitere Informationen finden Sie in unserem Leitfaden zu [technische SEO f\u00fcr Ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "10 Min. Lesezeit",
      sections: [
        {
          title: "BigCommerce URL-Struktur und saubere Permalink-Kontrolle",
          content:
            "BigCommerce bietet eine der SEO-freundlichsten URL-Strukturen unter den gehosteten E-Commerce-Plattformen. Anders als Shopify, das /products/- und /collections/-Praefixe erzwingt, ermoeglicht BigCommerce vollstaendig anpassbare URL-Pfade. Produkt-URLs koennen direkt unter der Root-Domain liegen (z.B. /blaue-laufschuhe/) ohne obligatorische Kategorie- oder Ordner-Praefixe.\n\nDie Plattform bietet drei URL-Formatoptionen in den Shop-Einstellungen: SEO-optimierte URLs, kurze URLs und kategoriepfadbasierte URLs. Das SEO-optimierte Format ist die Standard- und empfohlene Wahl, da es saubere, keyword-reiche Slugs ohne unnoetige Verschachtelung erstellt. Kategoriepfad-URLs koennen fuer thematische Autoritaet nuetzlich sein, erzeugen aber laengere URLs und potenzielle Duplicate-Content-Probleme.\n\nBigCommerce generiert automatisch Canonical Tags fuer Produktseiten, um Szenarien zu behandeln, in denen dasselbe Produkt ueber verschiedene Kategoriepfade erreichbar ist. Sie sollten diese Canonical Tags regelmaessig ueberpruefen, insbesondere nach einer Umstrukturierung Ihrer Kategorien. Verwenden Sie das URL-Inspektionstool in der Google Search Console, um zu verifizieren, dass die kanonische URL mit Ihrer bevorzugten Version uebereinstimmt.\n\nBenutzerdefinierte URL-Weiterleitungen koennen ueber das BigCommerce Admin-Panel oder per API fuer Massenvorgaenge verwaltet werden. Die Plattform unterstuetzt nativ 301- und 302-Weiterleitungen, was bei der Produkt-Lifecycle-Verwaltung und Katalogumstrukturierung unverzichtbar ist.",
          items: [
            "SEO-optimierte URLs in den Shop-Einstellungen konfigurieren fuer saubere, flache URL-Strukturen",
            "Canonical Tags nach jeder Kategorie-Reorganisation ueberpruefen, um Indexierungskonflikte zu vermeiden",
            "Die BigCommerce-API fuer die Massenverwaltung von Weiterleitungen bei grossen Katalogaenderungen nutzen",
            "Kategoriepfad-URLs vermeiden, es sei denn, Ihre Seitenarchitektur profitiert speziell von hierarchischen Pfaden",
          ],
          tip: "Verwenden Sie bei der Migration zu BigCommerce von einer anderen Plattform die CSV-Importfunktion fuer 301-Weiterleitungen, um alle alten URLs vor dem Launch zuzuordnen. Testen Sie jede Redirect-Kategorie mit einem Crawler, um Weiterleitungsketten oder -schleifen zu erkennen.",
        },
        {
          title: "Integrierte SEO-Funktionen und Konfiguration",
          content:
            "BigCommerce liefert ein robustes Set an nativen SEO-Tools, die die Abhaengigkeit von Drittanbieter-Apps reduzieren. Jede Produkt-, Kategorie- und Inhaltsseite bietet bearbeitbare Felder fuer Seitentitel, Meta-Beschreibungen und URL-Slugs direkt im Admin-Panel. Die Plattform generiert ausserdem automatisch eine umfassende XML-Sitemap, die sich beim Hinzufuegen oder Entfernen von Seiten aktualisiert.\n\nDie integrierte Sitemap umfasst Produktseiten, Kategorieseiten, Markenseiten und Inhaltsseiten. Anders als bei einigen Plattformen koennen Sie bei BigCommerce die Sitemap-Aufnahme auf Seitenebene steuern, indem Sie die Sichtbarkeitseinstellungen umschalten. Als verborgen markierte Seiten werden automatisch aus der Sitemap ausgeschlossen.\n\nBigCommerce bietet automatische Bildoptimierung ueber sein Akamai-CDN, konvertiert Bilder in das WebP-Format und liefert passend dimensionierte Versionen basierend auf dem anfragenden Geraet. Diese native Bildoptimierung wirkt sich direkt auf die Core-Web-Vitals-Werte aus, ohne dass manueller Eingriff oder Drittanbieter-Apps fuer Bildkomprimierung erforderlich sind.\n\nDie Robots.txt-Anpassung ist ueber das Admin-Panel verfuegbar und ermoeglicht es Ihnen, bestimmte Pfade vom Crawling zu blockieren. Dies ist besonders nuetzlich, um interne Suchergebnisseiten, Kundenkontoseiten und andere URLs mit geringem Wert auszuschliessen, die Crawl-Budget verbrauchen.",
          items: [
            "Seitentitel, Meta-Beschreibungen und Slugs fuer jede Produkt- und Kategorieseite bearbeiten",
            "Die automatisch generierte XML-Sitemap monatlich ueberpruefen, um sicherzustellen, dass sie den aktuellen Katalog widerspiegelt",
            "Den Robots.txt-Editor verwenden, um Facettennavigation-URLs und interne Suchseiten zu blockieren",
          ],
          tip: "BigCommerce generiert automatisch Meta-Beschreibungen aus den ersten Saetzen Ihrer Produktbeschreibung, wenn Sie das Feld leer lassen. Schreiben Sie immer individuelle Meta-Beschreibungen fuer Ihre umsatzstaerksten Produkte, um die Klickraten aus Suchergebnissen zu maximieren.",
        },
        {
          title: "Theme-Anpassung und strukturierte Daten",
          content:
            "BigCommerce-Themes basieren auf dem Stencil-Framework, das Handlebars-Templating zum Rendern von Storefront-Seiten verwendet. Stencil gibt Entwicklern granulare Kontrolle ueber HTML-Output, Ueberschriftenhierarchie und strukturierte Daten. Anders als tag-basierte Template-Sprachen trennt Handlebars Logik von Praesentation, was die Pflege von sauberem, semantischem HTML erleichtert.\n\nStrukturierte Daten sind der Bereich, in dem sich BigCommerce wirklich differenziert. Die Plattform injiziert automatisch JSON-LD-Produktschema auf Produktseiten, einschliesslich Preis, Verfuegbarkeit, SKU, Marke und aggregierte Bewertungsdaten, wenn Bewertungen aktiviert sind. Diese native Implementierung strukturierter Daten deckt die wirkungsvollsten Schematypen ohne manuelles Coding ab. Weitere Informationen finden Sie in unserem Leitfaden zu [strukturierte Daten f\u00fcr Produkte](/academy/structured-data-for-products).\n\nAllerdings enthaelt das Standard-Markup keine Breadcrumb-, FAQ- oder HowTo-Schemata. Dafuer muessen Sie die Stencil-Theme-Templates direkt aendern. Breadcrumb-Schema kann zum Basis-Layout-Template hinzugefuegt werden, indem ueber die im Stencil-Kontext verfuegbaren Breadcrumb-Navigationsdaten iteriert wird.\n\nDie Ueberschriftenhierarchie erfordert sorgfaeltige Beachtung in Stencil-Themes. Stellen Sie sicher, dass der Produktname ein H1-Tag verwendet, Kategorienamen H1 auf Kollektionsseiten verwenden und das Site-Logo oder der Shop-Name nicht das H1-Element verbraucht.",
          items: [
            "Das native JSON-LD-Produktschema nutzen und mit dem Google Rich Results Test ueberpruefen",
            "Breadcrumb- und FAQ-Schema manuell zu Stencil-Templates hinzufuegen fuer erweiterte SERP-Features",
            "H1-Nutzung ueber alle Seitentypen hinweg pruefen, um die korrekte Ueberschriftenhierarchie sicherzustellen",
            "Stencil CLI fuer lokale Theme-Entwicklung und Tests verwenden, bevor Aenderungen live geschaltet werden",
          ],
        },
        {
          title: "Geschwindigkeitsoptimierung und Core Web Vitals",
          content:
            "BigCommerce-Shops profitieren von einem globalen Akamai-CDN, das Inhalte von Edge-Servern naechst dem Besucher ausliefert. Dieser Infrastrukturvorteil bedeutet, dass Serverantwortzeiten (Time to First Byte) generell schneller sind als bei selbst gehosteten Loesungen und wettbewerbsfaehig mit anderen SaaS-Plattformen. Die Seitengeschwindigkeit haengt jedoch immer noch stark von der Theme-Code-Qualitaet, Bildgroessen und dem Laden von Drittanbieter-Skripten ab. Wenden Sie die gleichen Prinzipien von [Seitenladezeit-Optimierung](/academy/site-speed-optimization) an, die plattform\u00fcbergreifend funktionieren.\n\nLargest Contentful Paint (LCP) ist die wirkungsvollste Core Web Vital fuer E-Commerce-SEO. Bei BigCommerce ist das LCP-Element typischerweise das Hero-Banner-Bild oder das primaere Produktbild. Optimieren Sie diese, indem Sie Bilder in den exakten Abmessungen hochladen, die Ihr Theme erfordert, anstatt sich ausschliesslich auf automatische Groessenanpassung zu verlassen.\n\nCumulative Layout Shift (CLS)-Probleme bei BigCommerce entstehen haeufig durch dynamisch geladene Elemente wie Werbe-Banner, Bewertungs-Widgets und Produktempfehlungs-Karussells. Reservieren Sie explizite Dimensionen fuer diese Elemente in Ihrem CSS, um Inhaltsverschiebungen beim Seitenaufbau zu verhindern.\n\nDrittanbieter-Skripte von Analyse-Tools, Chat-Widgets und Marketing-Pixeln sind die primaere Quelle fuer Total Blocking Time (TBT)-Probleme. Laden Sie nicht essentielle Skripte asynchron oder verzoegern Sie deren Ausfuehrung. Der Script Manager von BigCommerce ermoeglicht die Steuerung der Skript-Platzierung im Head oder Footer.",
          tip: "Nutzen Sie die integrierte Google-Lighthouse-Integration von BigCommerce im Page Builder, um Core-Web-Vitals-Werte zu ueberwachen, waehrend Sie Aenderungen vornehmen. Testen Sie sowohl mobile als auch Desktop-Werte, da Google die mobilen Werte fuer das Ranking verwendet.",
        },
        {
          title: "BigCommerce SEO-Limitierungen und Workarounds",
          content:
            "Trotz seiner starken SEO-Grundlage hat BigCommerce Einschraenkungen, die Haendler umgehen muessen. Die Plattform unterstuetzt keine nativen Blog-Kategorieseiten oder erweiterte Content-Management-Funktionen, die mit WordPress vergleichbar waeren. Das Blog-Modul von BigCommerce verfuegt nicht ueber hierarchische Kategorien, benutzerdefinierte Beitragstypen und anspruchsvolle Inhaltsbloecke.\n\nDie Facettennavigation auf Kategorieseiten stellt eine erhebliche Crawl-Budget-Herausforderung dar. Jede Filterkombination generiert eine eindeutige URL mit Abfrageparametern, was potenziell Tausende indexierbarer Seiten mit nahezu identischem Inhalt erzeugt. BigCommerce bietet keine nativen Steuerungen zum Hinzufuegen von noindex-Tags zu gefilterten Seiten. Der Workaround besteht darin, Canonical Tags auf gefilterte URLs zu implementieren, die auf die ungefilterte Kategorieseite verweisen.\n\nInternationales SEO auf BigCommerce erfordert sorgfaeltige Planung. Die Plattform unterstuetzt Multi-Waehrungs-Anzeige und mehrsprachige Inhalte ueber Drittanbieter-Integrationen, generiert aber nativ keine hreflang-Tags. Wenn Sie in mehreren Maerkten taetig sind, muessen Sie hreflang-Annotationen manuell in Ihrem Theme-Header implementieren.\n\nEine weitere Einschraenkung ist die fehlende native Unterstuetzung fuer Produktvarianten-URLs auf Ebene einzelner Varianten. Jede Produktvariante (Farbe, Groesse) teilt sich dieselbe URL mit JavaScript-basierter Variantenwechsel-Funktion.\n\nDie Paginierung verwendet rel=next und rel=prev Annotationen, aber Google nutzt diese Signale nicht mehr fuer die Indexierung. Stellen Sie sicher, dass Ihre paginierten Kategorieseiten ueber interne Links crawlbar sind.",
          items: [
            "Canonical Tags auf Facettennavigation-URLs durch benutzerdefinierten Stencil-Template-Code implementieren",
            "Hreflang-Tags manuell oder ueber eine Lokalisierungs-App fuer Multi-Markt-Shops hinzufuegen",
            "Separate Produktlistungen fuer Varianten mit hohem Suchvolumen erstellen, wenn noetig",
            "Ein Reverse-Proxy-Setup verwenden, um WordPress-Blog-Inhalte in einem Unterverzeichnis Ihrer BigCommerce-Domain zu betreiben",
            "Paginierung so konfigurieren, dass alle Produkte innerhalb von drei Klicks von der Startseite erreichbar sind",
          ],
          tip: "Erwaegen Sie fuer Shops mit grossen Katalogen die Implementierung eines Produkt-Feeds an das Google Merchant Center als zusaetzliches Indexierungssignal. Google kann Produkt-URLs ueber den Feed entdecken, selbst wenn der Crawler-Zugang zu tief paginierten Seiten begrenzt ist.",
        },
        {
          title: "BigCommerce SEO-Monitoring und laufende Optimierung",
          content:
            "Effektives SEO auf BigCommerce erfordert kontinuierliches Monitoring ueber die Ersteinrichtung hinaus. Verbinden Sie Google Search Console und Google Analytics 4, um den Indexierungsstatus, Klickraten und organische Traffic-Trends zu verfolgen. BigCommerce bietet eine native Integration fuer beide Tools, wodurch die Einrichtung ueber das Admin-Panel unkompliziert ist.\n\nUeberwachen Sie Ihren Indexabdeckungsbericht in der Google Search Console woechentlich. Achten Sie besonders auf durch noindex ausgeschlossene Seiten, Seiten mit Weiterleitungsfehlern und Soft-404-Seiten. BigCommerce-Shops loesen haeufig Soft-404-Probleme auf nicht vorraetige Produktseiten aus, die einen leeren Zustand anzeigen statt eines korrekten 404-Antwortcodes.\n\nRichten Sie automatische Benachrichtigungen fuer signifikante Rueckgaenge bei indexierten Seiten oder organischem Traffic ein. Google Search Console bietet E-Mail-Benachrichtigungen fuer kritische Probleme, aber Drittanbieter-Monitoring-Tools wie ContentKing oder Lumar koennen Echtzeit-Warnungen liefern.\n\nFuehren Sie vierteljaehrliche Content-Audits durch, um duenne Produktseiten zu identifizieren, die Beschreibungsanreicherung benoetigen, Kategorieseiten mit geringer Wortzahl und Blogbeitraege, die Traffic verloren haben. Die CSV-Exportfunktion von BigCommerce ermoeglicht die Extraktion aller Produktdaten in eine Tabelle fuer die Massenanalyse.\n\nUeberpruefen Sie Ihre interne Verlinkungsstruktur regelmaessig. Stellen Sie sicher, dass meistverkaufte Produkte und strategische Kategorieseiten die meisten internen Links von verwandten Inhalten, Navigationsmenuen und Cross-Sell-Widgets erhalten.",
          items: [
            "Google Search Console und GA4 nativ ueber das BigCommerce Admin-Panel verbinden",
            "Indexabdeckung woechentlich auf Soft-404s bei nicht vorraetige Produktseiten ueberwachen",
            "Vierteljaehrliche CSV-Exporte durchfuehren, um Meta-Tags und Beschreibungen in der Masse zu pruefen",
            "Den Algorithmus fuer verwandte Produkte konfigurieren, um die interne Verlinkung innerhalb thematischer Cluster zu staerken",
          ],
        },
      ],
      navLabels: { previous: "Zurueck", next: "Weiter" },
    },
    fr: {
      badge: "SEO par plateforme",
      heading: "Guide SEO BigCommerce",
      intro:
        "BigCommerce dispose de fonctionnalites SEO natives qui rivalisent avec ou depassent celles de nombreuses plateformes e-commerce concurrentes. Ses structures d'URL propres, son CDN integre et ses options de personnalisation flexibles offrent aux marchands une base solide pour la recherche organique. Cependant, exploiter pleinement le potentiel SEO de BigCommerce necessite de comprendre son architecture unique, ses comportements par defaut et les domaines ou l'optimisation manuelle reste necessaire. Pour les fondamentaux techniques inter-plateformes, consultez notre guide sur le [SEO technique pour l'e-commerce](/blog/technical-seo-for-ecommerce).",
      readTime: "10 min de lecture",
      sections: [
        {
          title: "Structure URL de BigCommerce et controle des permaliens",
          content:
            "BigCommerce offre l'une des structures d'URL les plus favorables au SEO parmi les plateformes e-commerce hebergees. Contrairement a Shopify, qui impose les prefixes /products/ et /collections/, BigCommerce permet des chemins d'URL entierement personnalisables. Les URLs de produits peuvent se situer directement sous le domaine racine (par ex. /chaussures-course-bleues/) sans prefixes de categorie ou de dossier obligatoires.\n\nLa plateforme propose trois options de format d'URL dans les parametres de la boutique : URLs optimisees pour le SEO, URLs courtes et URLs avec chemin de categorie. Le format optimise SEO est le choix par defaut et recommande, car il cree des slugs propres et riches en mots-cles sans imbrication inutile. Les URLs avec chemin de categorie peuvent etre utiles pour l'autorite thematique mais creent des URLs plus longues et des problemes potentiels de contenu duplique.\n\nBigCommerce genere automatiquement des balises canoniques pour les pages produit afin de gerer les scenarios ou le meme produit est accessible via differents chemins de categorie. Vous devriez auditer regulierement ces balises canoniques, en particulier apres la reorganisation de votre structure de categories.\n\nLes redirections d'URL personnalisees peuvent etre gerees via le panneau d'administration BigCommerce ou via l'API pour les operations en masse. La plateforme prend en charge nativement les redirections 301 et 302, essentielles lors de la gestion du cycle de vie des produits et de la restructuration du catalogue.",
          items: [
            "Configurer les URLs optimisees SEO dans les parametres de la boutique pour des structures d'URL propres et plates",
            "Auditer les balises canoniques apres toute reorganisation de categories pour prevenir les conflits d'indexation",
            "Utiliser l'API BigCommerce pour la gestion en masse des redirections lors de grands changements de catalogue",
            "Eviter les URLs avec chemin de categorie sauf si votre architecture de site beneficie specifiquement de chemins hierarchiques",
          ],
          tip: "Lors de la migration vers BigCommerce depuis une autre plateforme, utilisez la fonction d'importation CSV de redirections 301 pour mapper toutes les anciennes URLs avant le lancement. Testez chaque categorie de redirection avec un crawler pour detecter les chaines ou boucles de redirection.",
        },
        {
          title: "Fonctionnalites SEO integrees et configuration",
          content:
            "BigCommerce est livre avec un ensemble robuste d'outils SEO natifs qui reduisent la dependance aux applications tierces. Chaque page produit, categorie et contenu expose des champs editables pour les titres de page, meta descriptions et slugs d'URL directement dans le panneau d'administration. La plateforme genere egalement automatiquement un sitemap XML complet qui se met a jour lorsque vous ajoutez ou supprimez des pages.\n\nLe sitemap integre inclut les pages produit, les pages de categorie, les pages de marque et les pages de contenu. Contrairement a certaines plateformes, BigCommerce vous permet de controler l'inclusion dans le sitemap au niveau de la page en basculant les parametres de visibilite. Les pages definies comme masquees sont automatiquement exclues du sitemap.\n\nBigCommerce fournit une optimisation automatique des images via son CDN Akamai, convertissant les images au format WebP et servant des versions de taille appropriee en fonction de l'appareil demandeur. Cette optimisation native des images impacte directement les scores Core Web Vitals sans necessite d'intervention manuelle.\n\nLa personnalisation du robots.txt est disponible via le panneau d'administration, vous permettant de bloquer des chemins specifiques du crawling. Ceci est particulierement utile pour filtrer les pages de resultats de recherche interne et les pages de compte client.",
          items: [
            "Editer les titres de page, meta descriptions et slugs pour chaque page produit et categorie",
            "Examiner le sitemap XML auto-genere mensuellement pour s'assurer qu'il reflete votre catalogue actuel",
            "Utiliser l'editeur robots.txt pour bloquer les URLs de navigation a facettes et les pages de recherche interne",
          ],
          tip: "BigCommerce genere automatiquement des meta descriptions a partir des premieres phrases de votre description produit si vous laissez le champ vide. Redigez toujours des meta descriptions personnalisees pour vos produits a plus fort revenu afin de maximiser les taux de clics.",
        },
        {
          title: "Personnalisation du theme et [donnees structurees](/academy/structured-data-for-products)",
          content:
            "Les themes BigCommerce sont construits sur le framework Stencil, qui utilise le templating Handlebars pour rendre les pages du storefront. Stencil donne aux developpeurs un controle granulaire sur la sortie HTML, la hierarchie des titres et le balisage des donnees structurees. Contrairement aux langages de template bases sur des balises, Handlebars separe la logique de la presentation, facilitant le maintien d'un HTML propre et semantique.\n\nLes donnees structurees sont le domaine ou BigCommerce se differencie reellement. La plateforme injecte automatiquement le schema JSON-LD Product sur les pages produit, incluant le prix, la disponibilite, le SKU, la marque et les donnees d'avis agreges lorsque les avis sont actives.\n\nToutefois, les donnees structurees par defaut n'incluent pas le schema breadcrumb, le schema FAQ ou le schema HowTo. Pour ceux-ci, vous devez modifier directement les templates du theme Stencil. Le schema breadcrumb peut etre ajoute au template de mise en page de base en iterant sur les donnees de navigation breadcrumb deja disponibles dans le contexte Stencil.\n\nLa hierarchie des titres necessite une attention particuliere dans les themes Stencil. Assurez-vous que le nom du produit utilise une balise H1, que les noms de categories utilisent H1 sur les pages de collection, et que le logo du site ou le nom de la boutique ne consomme pas l'element H1.",
          items: [
            "Exploiter le schema JSON-LD Product natif et le verifier avec le Google Rich Results Test",
            "Ajouter manuellement les schemas breadcrumb et FAQ aux templates Stencil pour des fonctionnalites SERP enrichies",
            "Auditer l'utilisation des H1 sur tous les types de pages pour assurer une hierarchie de titres correcte",
            "Utiliser Stencil CLI pour le developpement et les tests de theme en local avant de publier les modifications",
          ],
        },
        {
          title: "Optimisation de la vitesse et Core Web Vitals",
          content:
            "Les boutiques BigCommerce beneficient d'un CDN mondial Akamai qui diffuse le contenu depuis les serveurs de peripherie les plus proches du visiteur. Cet avantage d'infrastructure signifie que les temps de reponse du serveur (Time to First Byte) sont generalement plus rapides que les solutions auto-hebergees. Cependant, la vitesse de page depend toujours fortement de la qualite du code du theme, de la taille des images et du chargement de scripts tiers.\n\nLe Largest Contentful Paint (LCP) est la Core Web Vital la plus impactante pour le SEO e-commerce. Sur BigCommerce, l'element LCP est typiquement l'image de la banniere hero ou l'image produit principale. Optimisez-les en telechargeant des images aux dimensions exactes requises par votre theme plutot que de compter uniquement sur le redimensionnement automatique.\n\nLes problemes de Cumulative Layout Shift (CLS) sur BigCommerce proviennent frequemment d'elements charges dynamiquement comme les bannieres promotionnelles, les widgets d'avis et les carrousels de recommandations produit. Reservez des dimensions explicites pour ces elements dans votre CSS pour empecher le contenu de se deplacer lors du chargement.\n\nLes scripts tiers provenant d'outils d'analyse, de widgets de chat et de pixels marketing sont la source principale des problemes de Total Blocking Time (TBT). Chargez les scripts non essentiels de maniere asynchrone ou differez leur execution. Le Script Manager de BigCommerce vous permet de controler le placement des scripts dans le head ou le footer. Appliquez les mêmes principes d'[optimisation de la vitesse du site](/academy/site-speed-optimization) qui fonctionnent sur toutes les plateformes e-commerce.",
          tip: "Utilisez l'integration Google Lighthouse integree de BigCommerce dans le Page Builder pour surveiller les scores Core Web Vitals au fur et a mesure de vos modifications. Testez les scores mobiles et desktop, car Google utilise les scores mobiles pour le classement.",
        },
        {
          title: "Limitations SEO de BigCommerce et solutions de contournement",
          content:
            "Malgre sa solide base SEO, BigCommerce presente des limitations que les marchands doivent contourner. La plateforme ne prend pas en charge les pages de categories de blog natives ni les fonctionnalites avancees de gestion de contenu comparables a WordPress. Le module de blog de BigCommerce manque de categories hierarchiques, de types de publications personnalises et de blocs de contenu sophistiques.\n\nLa navigation a facettes sur les pages de categorie cree un defi significatif de budget de crawl. Chaque combinaison de filtres genere une URL unique avec des parametres de requete, creant potentiellement des milliers de pages indexables avec du contenu quasi-duplique. BigCommerce ne fournit pas de controles natifs pour ajouter des balises noindex aux pages filtrees. La solution consiste a implementer des balises canoniques sur les URLs filtrees pointant vers la page de categorie non filtree.\n\nLe SEO international sur BigCommerce necessite une planification attentive. La plateforme prend en charge l'affichage multi-devises et le contenu multilingue via des integrations tierces, mais ne genere pas nativement de balises hreflang. Si vous operez sur plusieurs marches, vous devez implementer les annotations hreflang manuellement.\n\nUne autre limitation est l'absence de support natif pour les URLs au niveau des variantes de produit. Chaque variante partage la meme URL avec un changement de variante base sur JavaScript.\n\nLa gestion de la pagination utilise les annotations rel=next et rel=prev, mais Google n'utilise plus ces signaux pour l'indexation. Assurez-vous que vos pages de categories paginies sont accessibles via des liens internes.",
          items: [
            "Implementer des balises canoniques sur les URLs de navigation a facettes via du code template Stencil personnalise",
            "Ajouter des balises hreflang manuellement ou via une application de localisation pour les boutiques multi-marches",
            "Creer des fiches produit separees pour les variantes a fort volume de recherche si necessaire",
            "Utiliser une configuration de reverse proxy pour executer du contenu blog WordPress sur un sous-repertoire de votre domaine BigCommerce",
            "Configurer la pagination pour garantir que tous les produits sont accessibles en trois clics depuis la page d'accueil",
          ],
          tip: "Pour les boutiques avec de grands catalogues, envisagez d'implementer un flux de produits vers Google Merchant Center comme signal d'indexation supplementaire. Google peut decouvrir les URLs de produits via le flux meme si l'acces du crawler aux pages profondement paginees est limite.",
        },
        {
          title: "Surveillance SEO BigCommerce et optimisation continue",
          content:
            "Un SEO efficace sur BigCommerce necessite une surveillance continue au-dela de la configuration initiale. Connectez Google Search Console et Google Analytics 4 pour suivre le statut d'indexation, les taux de clics et les tendances de trafic organique. BigCommerce fournit une integration native pour les deux outils, rendant la configuration simple via le panneau d'administration.\n\nSurveillez votre rapport de couverture d'index dans Google Search Console chaque semaine. Portez une attention particuliere aux pages exclues par noindex, aux pages avec des erreurs de redirection et aux pages soft 404. Les boutiques BigCommerce declenchent frequemment des problemes de soft 404 sur les pages de produits en rupture de stock.\n\nMettez en place des alertes automatisees pour les baisses significatives de pages indexees ou de trafic organique. Google Search Console fournit des notifications par email pour les problemes critiques, mais des outils de surveillance tiers comme ContentKing ou Lumar peuvent fournir des alertes en temps reel.\n\nEffectuez des audits de contenu trimestriels pour identifier les pages produit maigres necessitant un enrichissement de description, les pages de categorie a faible nombre de mots et les articles de blog ayant perdu du trafic. La fonction d'export CSV de BigCommerce permet d'extraire toutes les donnees produit dans un tableur pour une analyse en masse.\n\nRevisez regulierement votre structure de liens internes. Assurez-vous que les produits les plus vendus et les pages de categories strategiques recoivent le plus de liens internes depuis le contenu associe, les menus de navigation et les widgets de vente croisee.",
          items: [
            "Connecter Google Search Console et GA4 nativement via le panneau d'administration BigCommerce",
            "Surveiller la couverture d'index chaque semaine pour les soft 404 sur les pages de produits en rupture de stock",
            "Effectuer des exports CSV trimestriels pour auditer les meta tags et descriptions en masse",
            "Configurer l'algorithme de produits associes pour renforcer le maillage interne au sein des clusters thematiques",
          ],
        },
      ],
      navLabels: { previous: "Precedent", next: "Suivant" },
    },
    es: {
      badge: "SEO por plataforma",
      heading: "Guia SEO para BigCommerce",
      intro:
        "BigCommerce cuenta con capacidades SEO nativas que igualan o superan a muchas plataformas de comercio electronico competidoras. Sus estructuras de URL limpias, CDN integrado y opciones de personalizacion flexibles brindan a los comerciantes una base solida para la busqueda organica. Sin embargo, desbloquear todo el potencial SEO de BigCommerce requiere comprender su arquitectura unica, comportamientos predeterminados y las areas donde la optimizacion manual sigue siendo necesaria. Para fundamentos tecnicos multiplataforma, consulta nuestra guia de [SEO tecnico para ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "10 min de lectura",
      sections: [
        {
          title: "Estructura de URL de BigCommerce y control de enlaces permanentes",
          content:
            "BigCommerce ofrece una de las estructuras de URL mas amigables para SEO entre las plataformas de comercio electronico alojadas. A diferencia de Shopify, que obliga a usar los prefijos /products/ y /collections/, BigCommerce permite rutas de URL completamente personalizables. Las URLs de productos pueden ubicarse directamente bajo el dominio raiz (por ejemplo, /zapatillas-running-azules/) sin prefijos obligatorios de categoria o carpeta.\n\nLa plataforma ofrece tres opciones de formato de URL en la configuracion de la tienda: URLs optimizadas para SEO, URLs cortas y URLs con ruta de categoria. El formato optimizado para SEO es la opcion predeterminada y recomendada, ya que crea slugs limpios y ricos en palabras clave sin anidamiento innecesario. Las URLs con ruta de categoria pueden ser utiles para la autoridad tematica pero crean URLs mas largas y problemas potenciales de contenido duplicado.\n\nBigCommerce genera automaticamente etiquetas canonicas para las paginas de producto para manejar escenarios donde el mismo producto es accesible a traves de diferentes rutas de categoria. Deberias auditar estas etiquetas canonicas regularmente, especialmente despues de reorganizar tu estructura de categorias.\n\nLas redirecciones de URL personalizadas pueden gestionarse a traves del panel de administracion de BigCommerce o mediante la API para operaciones masivas. La plataforma soporta nativamente redirecciones 301 y 302, lo cual es esencial durante la gestion del ciclo de vida de productos y la reestructuracion del catalogo.",
          items: [
            "Configurar URLs optimizadas para SEO en los ajustes de la tienda para estructuras de URL limpias y planas",
            "Auditar las etiquetas canonicas despues de cualquier reorganizacion de categorias para prevenir conflictos de indexacion",
            "Usar la API de BigCommerce para la gestion masiva de redirecciones durante grandes cambios de catalogo",
            "Evitar URLs con ruta de categoria a menos que tu arquitectura de sitio se beneficie especificamente de rutas jerarquicas",
          ],
          tip: "Al migrar a BigCommerce desde otra plataforma, usa la funcion de importacion CSV de redirecciones 301 para mapear todas las URLs antiguas antes del lanzamiento. Prueba cada categoria de redireccion con un crawler para detectar cadenas o bucles de redireccion.",
        },
        {
          title: "Funciones SEO integradas y configuracion",
          content:
            "BigCommerce incluye un conjunto robusto de herramientas SEO nativas que reducen la dependencia de aplicaciones de terceros. Cada pagina de producto, categoria y contenido expone campos editables para titulos de pagina, meta descripciones y slugs de URL directamente en el panel de administracion. La plataforma tambien genera automaticamente un mapa XML del sitio completo que se actualiza al agregar o eliminar paginas.\n\nEl sitemap integrado incluye paginas de producto, paginas de categoria, paginas de marca y paginas de contenido. A diferencia de algunas plataformas, BigCommerce permite controlar la inclusion en el sitemap a nivel de pagina alternando la configuracion de visibilidad. Las paginas marcadas como ocultas se excluyen automaticamente del sitemap.\n\nBigCommerce proporciona optimizacion automatica de imagenes a traves de su CDN Akamai, convirtiendo imagenes al formato WebP y sirviendo versiones de tamano apropiado segun el dispositivo solicitante. Esta optimizacion nativa de imagenes impacta directamente en las puntuaciones de Core Web Vitals sin requerir intervencion manual.\n\nLa personalizacion del robots.txt esta disponible a traves del panel de administracion, permitiendote bloquear rutas especificas del rastreo. Esto es particularmente util para filtrar paginas de resultados de busqueda interna y paginas de cuentas de clientes.",
          items: [
            "Editar titulos de pagina, meta descripciones y slugs para cada pagina de producto y categoria",
            "Revisar el sitemap XML auto-generado mensualmente para asegurar que refleje tu catalogo actual",
            "Usar el editor de robots.txt para bloquear URLs de navegacion facetada y paginas de busqueda interna",
          ],
          tip: "BigCommerce genera automaticamente meta descripciones a partir de las primeras oraciones de tu descripcion de producto si dejas el campo vacio. Escribe siempre meta descripciones personalizadas para tus productos de mayor ingreso para maximizar las tasas de clics.",
        },
        {
          title: "Personalizacion del tema y datos estructurados",
          content:
            "Los temas de BigCommerce estan construidos sobre el framework Stencil, que utiliza el motor de plantillas Handlebars para renderizar las paginas del storefront. Stencil otorga a los desarrolladores control granular sobre la salida HTML, la jerarquia de encabezados y el marcado de [datos estructurados](/academy/structured-data-for-products). A diferencia de los lenguajes de plantillas basados en etiquetas, Handlebars separa la logica de la presentacion, facilitando el mantenimiento de HTML limpio y semantico.\n\nLos datos estructurados son donde BigCommerce realmente se diferencia. La plataforma inyecta automaticamente el schema JSON-LD Product en las paginas de producto, incluyendo precio, disponibilidad, SKU, marca y datos agregados de resenas cuando las resenas estan habilitadas.\n\nSin embargo, los datos estructurados predeterminados no incluyen schema de migas de pan, schema FAQ ni schema HowTo. Para estos, necesitas modificar directamente las plantillas del tema Stencil. El schema de migas de pan puede agregarse a la plantilla de diseno base iterando sobre los datos de navegacion de migas de pan ya disponibles en el contexto Stencil.\n\nLa jerarquia de encabezados requiere atencion cuidadosa en los temas Stencil. Asegurate de que el nombre del producto use una etiqueta H1, que los nombres de categorias usen H1 en las paginas de coleccion, y que el logotipo del sitio o el nombre de la tienda no consuma el elemento H1.",
          items: [
            "Aprovechar el schema JSON-LD Product nativo y verificarlo con el Google Rich Results Test",
            "Agregar manualmente schemas de migas de pan y FAQ a las plantillas Stencil para funciones SERP enriquecidas",
            "Auditar el uso de H1 en todos los tipos de paginas para asegurar una jerarquia de encabezados correcta",
            "Usar Stencil CLI para desarrollo y pruebas de temas locales antes de publicar cambios en produccion",
          ],
        },
        {
          title: "Optimizacion de velocidad y Core Web Vitals",
          content:
            "Las tiendas BigCommerce se benefician de un CDN global Akamai que entrega contenido desde servidores perimetrales mas cercanos al visitante. Esta ventaja de infraestructura significa que los tiempos de respuesta del servidor (Time to First Byte) son generalmente mas rapidos que las soluciones autoalojadas. Sin embargo, la velocidad de pagina aun depende en gran medida de la calidad del codigo del tema, los tamanos de imagen y la carga de scripts de terceros.\n\nEl Largest Contentful Paint (LCP) es la Core Web Vital mas impactante para el SEO de comercio electronico. En BigCommerce, el elemento LCP es tipicamente la imagen del banner hero o la imagen principal del producto. Optimizalos subiendo imagenes en las dimensiones exactas que tu tema requiere en lugar de depender unicamente del redimensionamiento automatico.\n\nLos problemas de Cumulative Layout Shift (CLS) en BigCommerce surgen comunmente de elementos cargados dinamicamente como banners promocionales, widgets de resenas y carruseles de recomendaciones de productos. Reserva dimensiones explicitas para estos elementos en tu CSS para evitar que el contenido se desplace al cargar la pagina.\n\nLos scripts de terceros de herramientas de analitica, widgets de chat y pixeles de marketing son la fuente principal de problemas de Total Blocking Time (TBT). Carga los scripts no esenciales de forma asincrona o difiere su ejecucion. El Script Manager de BigCommerce te permite controlar la ubicacion de scripts en el head o footer. Aplica los mismos principios de [optimizacion de velocidad del sitio](/academy/site-speed-optimization) que funcionan en todas las plataformas de ecommerce.",
          tip: "Usa la integracion de Google Lighthouse integrada en BigCommerce en el Page Builder para monitorizar las puntuaciones de Core Web Vitals mientras realizas cambios. Prueba tanto las puntuaciones moviles como de escritorio, ya que Google usa las puntuaciones moviles para el ranking.",
        },
        {
          title: "Limitaciones SEO de BigCommerce y soluciones alternativas",
          content:
            "A pesar de su solida base SEO, BigCommerce tiene limitaciones que los comerciantes deben sortear. La plataforma no soporta paginas de categorias de blog nativas ni funcionalidades avanzadas de gestion de contenido comparables a WordPress. El modulo de blog de BigCommerce carece de categorias jerarquicas, tipos de publicaciones personalizadas y bloques de contenido sofisticados.\n\nLa navegacion facetada en paginas de categoria crea un desafio significativo de presupuesto de rastreo. Cada combinacion de filtros genera una URL unica con parametros de consulta, creando potencialmente miles de paginas indexables con contenido casi duplicado. BigCommerce no proporciona controles nativos para agregar etiquetas noindex a paginas filtradas. La solucion es implementar etiquetas canonicas en las URLs filtradas apuntando a la pagina de categoria sin filtrar.\n\nEl SEO internacional en BigCommerce requiere planificacion cuidadosa. La plataforma soporta visualizacion multi-moneda y contenido multilingue a traves de integraciones de terceros, pero no genera nativamente etiquetas hreflang. Si operas en multiples mercados, necesitas implementar anotaciones hreflang manualmente.\n\nOtra limitacion es la falta de soporte nativo para URLs a nivel de variante de producto. Cada variante comparte la misma URL con cambio de variante basado en JavaScript.\n\nEl manejo de paginacion usa anotaciones rel=next y rel=prev, pero Google ya no utiliza estas senales para la indexacion. Asegurate de que tus paginas de categorias paginadas sean rastreables a traves de enlaces internos.",
          items: [
            "Implementar etiquetas canonicas en URLs de navegacion facetada a traves de codigo personalizado en plantillas Stencil",
            "Agregar etiquetas hreflang manualmente o mediante una aplicacion de localizacion para tiendas multi-mercado",
            "Crear listados de productos separados para variantes con alto volumen de busqueda cuando sea necesario",
            "Usar una configuracion de proxy inverso para ejecutar contenido de blog WordPress en un subdirectorio de tu dominio BigCommerce",
            "Configurar la paginacion para garantizar que todos los productos sean accesibles en tres clics desde la pagina de inicio",
          ],
          tip: "Para tiendas con catalogos grandes, considera implementar un feed de productos a Google Merchant Center como senal de indexacion adicional. Google puede descubrir URLs de productos a traves del feed incluso si el acceso del rastreador a paginas profundamente paginadas es limitado.",
        },
        {
          title: "Monitorizacion SEO de BigCommerce y optimizacion continua",
          content:
            "Un SEO efectivo en BigCommerce requiere monitorizacion continua mas alla de la configuracion inicial. Conecta Google Search Console y Google Analytics 4 para rastrear el estado de indexacion, tasas de clics y tendencias de trafico organico. BigCommerce proporciona una integracion nativa para ambas herramientas, haciendo que la configuracion sea sencilla a traves del panel de administracion.\n\nMonitoriza tu informe de cobertura de indice en Google Search Console semanalmente. Presta atencion especial a las paginas excluidas por noindex, paginas con errores de redireccion y paginas soft 404. Las tiendas BigCommerce comunmente generan problemas de soft 404 en paginas de productos agotados que muestran un estado vacio en lugar de un codigo de respuesta 404 correcto.\n\nConfigura alertas automatizadas para caidas significativas en paginas indexadas o trafico organico. Google Search Console proporciona notificaciones por correo electronico para problemas criticos, pero herramientas de monitorizacion de terceros como ContentKing o Lumar pueden proporcionar alertas en tiempo real.\n\nRealiza auditorias de contenido trimestrales para identificar paginas de productos delgadas que necesitan enriquecimiento de descripciones, paginas de categoria con poco contenido y publicaciones de blog que han perdido trafico. La funcion de exportacion CSV de BigCommerce permite extraer todos los datos de productos en una hoja de calculo para analisis masivo.\n\nRevisa tu estructura de enlaces internos regularmente. Asegurate de que los productos mas vendidos y las paginas de categorias estrategicas reciban la mayor cantidad de enlaces internos desde contenido relacionado, menus de navegacion y widgets de venta cruzada.",
          items: [
            "Conectar Google Search Console y GA4 nativamente a traves del panel de administracion de BigCommerce",
            "Monitorizar la cobertura de indice semanalmente para soft 404s en paginas de productos agotados",
            "Ejecutar exportaciones CSV trimestrales para auditar meta tags y descripciones en masa",
            "Configurar el algoritmo de productos relacionados para reforzar el enlazado interno dentro de clusters tematicos",
          ],
        },
      ],
      navLabels: { previous: "Anterior", next: "Siguiente" },
    },
    it: {
      badge: "SEO per piattaforma",
      heading: "Guida SEO per BigCommerce",
      intro:
        "BigCommerce dispone di funzionalita SEO native che eguagliano o superano molte piattaforme e-commerce concorrenti. Le sue strutture URL pulite, il CDN integrato e le opzioni di personalizzazione flessibili offrono ai commercianti una solida base per la ricerca organica. Tuttavia, sfruttare appieno il potenziale SEO di BigCommerce richiede la comprensione della sua architettura unica, dei comportamenti predefiniti e delle aree in cui l'ottimizzazione manuale e ancora necessaria. Per approfondire, consulta la nostra guida sulla [SEO tecnica per l'ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "10 min di lettura",
      sections: [
        {
          title: "Struttura URL di BigCommerce e controllo dei permalink",
          content:
            "BigCommerce offre una delle strutture URL piu favorevoli alla SEO tra le piattaforme e-commerce ospitate. A differenza di Shopify, che impone i prefissi /products/ e /collections/, BigCommerce permette percorsi URL completamente personalizzabili. Gli URL dei prodotti possono posizionarsi direttamente sotto il dominio radice (ad es. /scarpe-running-blu/) senza prefissi obbligatori di categoria o cartella.\n\nLa piattaforma offre tre opzioni di formato URL nelle impostazioni del negozio: URL ottimizzati per la SEO, URL brevi e URL con percorso di categoria. Il formato ottimizzato SEO e la scelta predefinita e raccomandata, poiche crea slug puliti e ricchi di parole chiave senza annidamento inutile. Gli URL con percorso di categoria possono essere utili per l'autorita tematica ma creano URL piu lunghi e potenziali problemi di contenuto duplicato.\n\nBigCommerce genera automaticamente tag canonici per le pagine prodotto per gestire scenari in cui lo stesso prodotto e accessibile attraverso diversi percorsi di categoria. Dovresti verificare regolarmente questi tag canonici, specialmente dopo la riorganizzazione della struttura delle categorie.\n\nI redirect URL personalizzati possono essere gestiti tramite il pannello di amministrazione BigCommerce o tramite l'API per operazioni in blocco. La piattaforma supporta nativamente redirect 301 e 302, essenziali durante la gestione del ciclo di vita dei prodotti e la ristrutturazione del catalogo.",
          items: [
            "Configurare URL ottimizzati SEO nelle impostazioni del negozio per strutture URL pulite e piatte",
            "Verificare i tag canonici dopo qualsiasi riorganizzazione delle categorie per prevenire conflitti di indicizzazione",
            "Utilizzare l'API BigCommerce per la gestione in blocco dei redirect durante grandi modifiche al catalogo",
            "Evitare URL con percorso di categoria a meno che l'architettura del sito non tragga specifico beneficio da percorsi gerarchici",
          ],
          tip: "Quando migri a BigCommerce da un'altra piattaforma, usa la funzione di importazione CSV per redirect 301 per mappare tutti i vecchi URL prima del lancio. Testa ogni categoria di redirect con un crawler per individuare catene o loop di redirect.",
        },
        {
          title: "Funzionalita SEO integrate e configurazione",
          content:
            "BigCommerce include un set robusto di strumenti SEO nativi che riducono la dipendenza da app di terze parti. Ogni pagina prodotto, categoria e contenuto espone campi modificabili per titoli di pagina, meta description e slug URL direttamente nel pannello di amministrazione. La piattaforma genera inoltre automaticamente una sitemap XML completa che si aggiorna quando aggiungi o rimuovi pagine.\n\nLa sitemap integrata include pagine prodotto, pagine di categoria, pagine di marca e pagine di contenuto. A differenza di alcune piattaforme, BigCommerce permette di controllare l'inclusione nella sitemap a livello di pagina alternando le impostazioni di visibilita. Le pagine impostate come nascoste vengono automaticamente escluse dalla sitemap.\n\nBigCommerce fornisce ottimizzazione automatica delle immagini attraverso il suo CDN Akamai, convertendo le immagini nel formato WebP e servendo versioni di dimensioni appropriate in base al dispositivo richiedente. Questa ottimizzazione nativa delle immagini impatta direttamente sui punteggi Core Web Vitals senza richiedere intervento manuale.\n\nLa personalizzazione del robots.txt e disponibile tramite il pannello di amministrazione, permettendoti di bloccare percorsi specifici dal crawling. Questo e particolarmente utile per filtrare pagine di risultati di ricerca interna e pagine account cliente.",
          items: [
            "Modificare titoli di pagina, meta description e slug per ogni pagina prodotto e categoria",
            "Controllare la sitemap XML auto-generata mensilmente per assicurarsi che rifletta il catalogo attuale",
            "Usare l'editor robots.txt per bloccare URL di navigazione a faccette e pagine di ricerca interna",
          ],
          tip: "BigCommerce genera automaticamente le meta description dalle prime frasi della descrizione del prodotto se lasci il campo vuoto. Scrivi sempre meta description personalizzate per i tuoi prodotti a maggior fatturato per massimizzare i tassi di clic dai risultati di ricerca.",
        },
        {
          title: "Personalizzazione del tema e [dati strutturati](/academy/structured-data-for-products)",
          content:
            "I temi BigCommerce sono costruiti sul framework Stencil, che utilizza il templating Handlebars per il rendering delle pagine dello storefront. Stencil offre agli sviluppatori un controllo granulare sull'output HTML, la gerarchia dei titoli e il markup dei dati strutturati. A differenza dei linguaggi di template basati su tag, Handlebars separa la logica dalla presentazione, facilitando il mantenimento di HTML pulito e semantico.\n\nI dati strutturati sono l'area in cui BigCommerce si differenzia realmente. La piattaforma inietta automaticamente il schema JSON-LD Product sulle pagine prodotto, includendo prezzo, disponibilita, SKU, marca e dati aggregati delle recensioni quando le recensioni sono abilitate.\n\nTuttavia, i dati strutturati predefiniti non includono lo schema breadcrumb, lo schema FAQ o lo schema HowTo. Per questi, e necessario modificare direttamente i template del tema Stencil. Lo schema breadcrumb puo essere aggiunto al template di layout base iterando sui dati di navigazione breadcrumb gia disponibili nel contesto Stencil.\n\nLa gerarchia dei titoli richiede attenzione particolare nei temi Stencil. Assicurati che il nome del prodotto utilizzi un tag H1, che i nomi delle categorie utilizzino H1 sulle pagine di collezione, e che il logo del sito o il nome del negozio non consumi l'elemento H1.",
          items: [
            "Sfruttare lo schema JSON-LD Product nativo e verificarlo con il Google Rich Results Test",
            "Aggiungere manualmente gli schema breadcrumb e FAQ ai template Stencil per funzionalita SERP arricchite",
            "Verificare l'uso degli H1 su tutti i tipi di pagina per assicurare una gerarchia dei titoli corretta",
            "Usare Stencil CLI per lo sviluppo e il testing dei temi in locale prima di pubblicare le modifiche live",
          ],
        },
        {
          title: "Ottimizzazione della velocita e Core Web Vitals",
          content:
            "I negozi BigCommerce beneficiano di un CDN globale Akamai che distribuisce i contenuti dai server edge piu vicini al visitatore. Questo vantaggio infrastrutturale significa che i tempi di risposta del server (Time to First Byte) sono generalmente piu rapidi delle soluzioni self-hosted. Tuttavia, la velocita della pagina dipende ancora fortemente dalla qualita del codice del tema, dalle dimensioni delle immagini e dal caricamento di script di terze parti. Approfondisci con la nostra guida sulla [ottimizzazione della velocità del sito](/academy/site-speed-optimization).\n\nIl Largest Contentful Paint (LCP) e la Core Web Vital piu impattante per la SEO e-commerce. Su BigCommerce, l'elemento LCP e tipicamente l'immagine del banner hero o l'immagine principale del prodotto. Ottimizzali caricando immagini alle dimensioni esatte richieste dal tuo tema piuttosto che affidarti esclusivamente al ridimensionamento automatico.\n\nI problemi di Cumulative Layout Shift (CLS) su BigCommerce derivano comunemente da elementi caricati dinamicamente come banner promozionali, widget di recensioni e caroselli di raccomandazioni prodotto. Riserva dimensioni esplicite per questi elementi nel tuo CSS per evitare che il contenuto si sposti durante il caricamento della pagina.\n\nGli script di terze parti da strumenti di analisi, widget di chat e pixel di marketing sono la fonte principale di problemi di Total Blocking Time (TBT). Carica gli script non essenziali in modo asincrono o differisci la loro esecuzione. Lo Script Manager di BigCommerce permette di controllare il posizionamento degli script nell'head o nel footer.",
          tip: "Usa l'integrazione Google Lighthouse integrata in BigCommerce nel Page Builder per monitorare i punteggi Core Web Vitals man mano che apporti modifiche. Testa sia i punteggi mobile che desktop, poiche Google utilizza i punteggi mobile per il ranking.",
        },
        {
          title: "Limitazioni SEO di BigCommerce e soluzioni alternative",
          content:
            "Nonostante la sua solida base SEO, BigCommerce presenta limitazioni che i commercianti devono aggirare. La piattaforma non supporta pagine native di categorie blog ne funzionalita avanzate di gestione contenuti paragonabili a WordPress. Il modulo blog di BigCommerce manca di categorie gerarchiche, tipi di post personalizzati e blocchi di contenuto sofisticati.\n\nLa navigazione a faccette sulle pagine di categoria crea una sfida significativa per il budget di crawl. Ogni combinazione di filtri genera un URL unico con parametri di query, creando potenzialmente migliaia di pagine indicizzabili con contenuto quasi duplicato. BigCommerce non fornisce controlli nativi per aggiungere tag noindex alle pagine filtrate. La soluzione e implementare tag canonici sugli URL filtrati che puntano alla pagina di categoria non filtrata.\n\nLa SEO internazionale su BigCommerce richiede una pianificazione attenta. La piattaforma supporta la visualizzazione multi-valuta e contenuti multilingue tramite integrazioni di terze parti, ma non genera nativamente tag hreflang. Se operi su piu mercati, devi implementare le annotazioni hreflang manualmente.\n\nUn'altra limitazione e la mancanza di supporto nativo per URL a livello di variante di prodotto. Ogni variante condivide lo stesso URL con cambio di variante basato su JavaScript.\n\nLa gestione della paginazione utilizza annotazioni rel=next e rel=prev, ma Google non usa piu questi segnali per l'indicizzazione. Assicurati che le tue pagine di categoria paginate siano raggiungibili tramite link interni.",
          items: [
            "Implementare tag canonici sugli URL della navigazione a faccette tramite codice personalizzato nei template Stencil",
            "Aggiungere tag hreflang manualmente o tramite un'app di localizzazione per negozi multi-mercato",
            "Creare schede prodotto separate per varianti ad alto volume di ricerca quando necessario",
            "Usare una configurazione reverse proxy per eseguire contenuti blog WordPress in una sottodirectory del dominio BigCommerce",
            "Configurare la paginazione per garantire che tutti i prodotti siano raggiungibili entro tre clic dalla homepage",
          ],
          tip: "Per i negozi con cataloghi ampi, considera l'implementazione di un feed prodotti verso Google Merchant Center come segnale di indicizzazione aggiuntivo. Google puo scoprire URL di prodotti tramite il feed anche se l'accesso del crawler alle pagine profondamente paginate e limitato.",
        },
        {
          title: "Monitoraggio SEO BigCommerce e ottimizzazione continua",
          content:
            "Una SEO efficace su BigCommerce richiede un monitoraggio continuo oltre la configurazione iniziale. Collega Google Search Console e Google Analytics 4 per tracciare lo stato di indicizzazione, i tassi di clic e le tendenze del traffico organico. BigCommerce fornisce un'integrazione nativa per entrambi gli strumenti, rendendo la configurazione semplice tramite il pannello di amministrazione.\n\nMonitora il tuo report di copertura dell'indice in Google Search Console settimanalmente. Presta particolare attenzione alle pagine escluse da noindex, alle pagine con errori di redirect e alle pagine soft 404. I negozi BigCommerce comunemente generano problemi di soft 404 sulle pagine di prodotti esauriti che mostrano uno stato vuoto anziche un codice di risposta 404 corretto.\n\nImposta avvisi automatici per cali significativi nelle pagine indicizzate o nel traffico organico. Google Search Console fornisce notifiche email per problemi critici, ma strumenti di monitoraggio di terze parti come ContentKing o Lumar possono fornire avvisi in tempo reale.\n\nEffettua audit dei contenuti trimestrali per identificare pagine prodotto sottili che necessitano di arricchimento delle descrizioni, pagine di categoria con basso conteggio di parole e post del blog che hanno perso traffico. La funzione di esportazione CSV di BigCommerce consente di estrarre tutti i dati prodotto in un foglio di calcolo per analisi in blocco.\n\nRivedi regolarmente la tua struttura di link interni. Assicurati che i prodotti piu venduti e le pagine di categoria strategiche ricevano il maggior numero di link interni da contenuti correlati, menu di navigazione e widget di cross-sell.",
          items: [
            "Collegare Google Search Console e GA4 nativamente tramite il pannello di amministrazione BigCommerce",
            "Monitorare la copertura dell'indice settimanalmente per soft 404 sulle pagine di prodotti esauriti",
            "Eseguire esportazioni CSV trimestrali per verificare meta tag e descrizioni in blocco",
            "Configurare l'algoritmo dei prodotti correlati per rafforzare il linking interno all'interno dei cluster tematici",
          ],
        },
      ],
      navLabels: { previous: "Precedente", next: "Successivo" },
    },
    nl: {
      badge: "Platform-SEO",
      heading: "BigCommerce SEO-gids",
      intro:
        "BigCommerce beschikt over native SEO-mogelijkheden die veel concurrerende e-commerceplatformen evenaren of overtreffen. De schone URL-structuren, ingebouwd CDN en flexibele aanpassingsmogelijkheden bieden handelaren een sterke basis voor organisch zoeken. Het volledig benutten van het SEO-potentieel van BigCommerce vereist echter begrip van de unieke architectuur, het standaardgedrag en de gebieden waar handmatige optimalisatie nog steeds noodzakelijk is.",
      readTime: "10 min leestijd",
      sections: [
        {
          title: "BigCommerce URL-structuur en schone permalink-controle\n\nVoor een diepere duik in deze technische fundamenten, zie onze gids over [technische SEO voor ecommerce](/blog/technical-seo-for-ecommerce).",
          content:
            "BigCommerce biedt een van de meest SEO-vriendelijke URL-structuren onder de gehoste e-commerceplatformen. In tegenstelling tot Shopify, dat /products/- en /collections/-prefixen afdwingt, staat BigCommerce volledig aanpasbare URL-paden toe. Product-URL's kunnen direct onder het hoofddomein staan (bijv. /blauwe-hardloopschoenen/) zonder verplichte categorie- of mapprefixen.\n\nHet platform biedt drie URL-formaatopties in de winkelinstellingen: SEO-geoptimaliseerde URL's, korte URL's en URL's met categoriepad. Het SEO-geoptimaliseerde formaat is de standaard en aanbevolen keuze, omdat het schone, zoekwoordrijke slugs creert zonder onnodige nesting. URL's met categoriepad kunnen nuttig zijn voor thematische autoriteit, maar creeren langere URL's en mogelijke problemen met dubbele content.\n\nBigCommerce genereert automatisch canonical tags voor productpagina's om scenario's af te handelen waarbij hetzelfde product via verschillende categoriepaden toegankelijk is. Je moet deze canonical tags regelmatig controleren, vooral na het reorganiseren van je categoriestructuur.\n\nAangepaste URL-redirects kunnen worden beheerd via het BigCommerce-adminpaneel of via de API voor bulkbewerkingen. Het platform ondersteunt standaard 301- en 302-redirects, wat essentieel is tijdens productlevenscyclusbeheer en catalogusherstructurering.",
          items: [
            "SEO-geoptimaliseerde URL's configureren in de winkelinstellingen voor schone, platte URL-structuren",
            "Canonical tags controleren na elke categorie-reorganisatie om indexatieconflicten te voorkomen",
            "De BigCommerce API gebruiken voor bulkredirectbeheer tijdens grote cataloguswijzigingen",
            "URL's met categoriepad vermijden tenzij je sitearchitectuur specifiek baat heeft bij hierarchische paden",
          ],
          tip: "Gebruik bij migratie naar BigCommerce vanaf een ander platform de CSV-importfunctie voor 301-redirects om alle oude URL's te mappen voor de lancering. Test elke redirectcategorie met een crawler om redirectketens of -lussen te detecteren.",
        },
        {
          title: "Ingebouwde SEO-functies en configuratie",
          content:
            "BigCommerce wordt geleverd met een robuuste set native SEO-tools die de afhankelijkheid van apps van derden verminderen. Elke product-, categorie- en contentpagina biedt bewerkbare velden voor paginatitels, metabeschrijvingen en URL-slugs direct in het adminpaneel. Het platform genereert ook automatisch een uitgebreide XML-sitemap die wordt bijgewerkt wanneer je pagina's toevoegt of verwijdert.\n\nDe ingebouwde sitemap bevat productpagina's, categoriepagina's, merkpagina's en contentpagina's. In tegenstelling tot sommige platforms kun je bij BigCommerce de opname in de sitemap op paginaniveau regelen door zichtbaarheidsinstellingen aan te passen. Pagina's die op verborgen zijn ingesteld, worden automatisch uitgesloten van de sitemap.\n\nBigCommerce biedt automatische beeldoptimalisatie via zijn Akamai CDN, waarbij afbeeldingen worden geconverteerd naar WebP-formaat en versies van de juiste grootte worden geserveerd op basis van het aanvragende apparaat. Deze native beeldoptimalisatie beinvloedt direct de Core Web Vitals-scores zonder handmatige interventie.\n\nRobots.txt-aanpassing is beschikbaar via het adminpaneel, zodat je specifieke paden kunt blokkeren voor crawling. Dit is bijzonder nuttig om interne zoekresultatenpagina's en klantaccountpagina's uit te filteren.",
          items: [
            "Paginatitels, metabeschrijvingen en slugs bewerken voor elke product- en categoriepagina",
            "De automatisch gegenereerde XML-sitemap maandelijks controleren om te verifiieren dat deze je huidige catalogus weerspiegelt",
            "De robots.txt-editor gebruiken om facetnavigatie-URL's en interne zoekpagina's te blokkeren",
          ],
          tip: "BigCommerce genereert automatisch metabeschrijvingen uit de eerste zinnen van je productbeschrijving als je het veld leeg laat. Schrijf altijd aangepaste metabeschrijvingen voor je producten met de hoogste omzet om de klikfrequentie vanuit zoekresultaten te maximaliseren.",
        },
        {
          title: "Thema-aanpassing en gestructureerde data",
          content:
            "BigCommerce-thema's zijn gebouwd op het Stencil-framework, dat Handlebars-templating gebruikt voor het renderen van storefront-pagina's. Stencil geeft ontwikkelaars gedetailleerde controle over HTML-output, koppenstructuur en gestructureerde data-markup. In tegenstelling tot tag-gebaseerde templatetalen scheidt Handlebars logica van presentatie, waardoor het eenvoudiger wordt om schone, semantische HTML te onderhouden.\n\nGestructureerde data is waar BigCommerce zich echt onderscheidt. Het platform injecteert automatisch JSON-LD Product-schema op productpagina's, inclusief prijs, beschikbaarheid, SKU, merk en geaggregeerde beoordelingsgegevens wanneer beoordelingen zijn ingeschakeld.\n\nDe standaard gestructureerde data bevat echter geen breadcrumb-schema, FAQ-schema of HowTo-schema. Hiervoor moet je de Stencil-thematemplates rechtstreeks wijzigen. Breadcrumb-schema kan worden toegevoegd aan het basis-layouttemplate door te itereren over de breadcrumb-navigatiegegevens die al beschikbaar zijn in de Stencil-context.\n\nDe koppenstructuur vereist zorgvuldige aandacht in Stencil-thema's. Zorg ervoor dat de productnaam een H1-tag gebruikt, categorienamen H1 gebruiken op collectiepagina's, en het sitelogo of de winkelnaam het H1-element niet verbruikt.",
          items: [
            "Het native JSON-LD Product-schema benutten en verifiieren met de Google Rich Results Test\n\nOns onderwerp over [gestructureerde data voor producten](/academy/structured-data-for-products) behandelt de implementatie uitgebreid.",
            "Handmatig breadcrumb- en FAQ-schema toevoegen aan Stencil-templates voor verbeterde SERP-functies",
            "H1-gebruik controleren over alle paginatypen om de juiste koppenstructuur te waarborgen",
            "Stencil CLI gebruiken voor lokale thema-ontwikkeling en testen voordat wijzigingen live worden gepusht",
          ],
        },
        {
          title: "Snelheidsoptimalisatie en Core Web Vitals",
          content:
            "BigCommerce-winkels profiteren van een wereldwijd Akamai CDN dat content levert vanaf edge-servers die het dichtst bij de bezoeker staan. Dit infrastructuurvoordeel betekent dat serverresponstijden (Time to First Byte) over het algemeen sneller zijn dan zelf-gehoste oplossingen. De paginasnelheid hangt echter nog steeds sterk af van de kwaliteit van de themacode, afbeeldingsgroottes en het laden van scripts van derden.\n\nLargest Contentful Paint (LCP) is de meest impactvolle Core Web Vital voor e-commerce SEO. Bij BigCommerce is het LCP-element doorgaans de hero-bannerafbeelding of de primaire productafbeelding. Optimaliseer deze door afbeeldingen te uploaden in de exacte afmetingen die je thema vereist in plaats van uitsluitend te vertrouwen op automatische aanpassing.\n\nCumulative Layout Shift (CLS)-problemen bij BigCommerce ontstaan vaak door dynamisch geladen elementen zoals promotionele banners, beoordelingswidgets en productaanbevelingscarrousels. Reserveer expliciete afmetingen voor deze elementen in je CSS om te voorkomen dat content verschuift tijdens het laden.\n\nScripts van derden uit analysetools, chatwidgets en marketingpixels zijn de primaire bron van Total Blocking Time (TBT)-problemen. Laad niet-essientiele scripts asynchroon of stel hun uitvoering uit. De Script Manager van BigCommerce stelt je in staat om de scriptplaatsing in de head of footer te regelen.",
          tip: "Gebruik de ingebouwde Google Lighthouse-integratie van BigCommerce in de Page Builder om Core Web Vitals-scores te monitoren terwijl je wijzigingen aanbrengt. Test zowel mobiele als desktopscores, aangezien Google de mobiele scores gebruikt voor ranking.\n\nOns onderwerp over [sitesnelheidsoptimalisatie](/academy/site-speed-optimization) behandelt deze technieken uitgebreid.",
        },
        {
          title: "BigCommerce SEO-beperkingen en workarounds",
          content:
            "Ondanks de sterke SEO-basis heeft BigCommerce beperkingen waar handelaren omheen moeten werken. Het platform ondersteunt geen native blogcategoriepagina's of geavanceerde contentbeheerfuncties vergelijkbaar met WordPress. De blogmodule van BigCommerce mist hierarchische categorieen, aangepaste berichttypen en geavanceerde contentblokken.\n\nFacetnavigatie op categoriepagina's creert een aanzienlijke crawlbudget-uitdaging. Elke filtercombinatie genereert een unieke URL met queryparameters, wat potentieel duizenden indexeerbare pagina's met bijna-dubbele content creert. BigCommerce biedt geen native controles voor het toevoegen van noindex-tags aan gefilterde pagina's. De workaround is het implementeren van canonical tags op gefilterde URL's die terugverwijzen naar de ongefilterde categoriepagina.\n\nInternationale SEO op BigCommerce vereist zorgvuldige planning. Het platform ondersteunt multi-valuta weergave en meertalige content via integraties van derden, maar genereert niet standaard hreflang-tags. Als je actief bent in meerdere markten, moet je hreflang-annotaties handmatig implementeren.\n\nEen andere beperking is het ontbreken van native ondersteuning voor URL's op productvariante-niveau. Elke productvariant deelt dezelfde URL met JavaScript-gebaseerde variantwisseling.\n\nPaginering gebruikt rel=next en rel=prev annotaties, maar Google gebruikt deze signalen niet meer voor indexatie. Zorg ervoor dat je gepagineerde categoriepagina's bereikbaar zijn via interne links.",
          items: [
            "Canonical tags implementeren op facetnavigatie-URL's via aangepaste Stencil-templatecode",
            "Hreflang-tags handmatig of via een lokalisatie-app toevoegen voor multi-marktwinkels",
            "Aparte productvermeldingen maken voor varianten met hoog zoekvolume indien nodig",
            "Een reverse proxy-setup gebruiken om WordPress-blogcontent in een submap van je BigCommerce-domein te draaien",
            "Paginering configureren zodat alle producten binnen drie klikken vanaf de homepage bereikbaar zijn",
          ],
          tip: "Overweeg voor winkels met grote catalogi het implementeren van een productfeed naar Google Merchant Center als extra indexatiesignaal. Google kan product-URL's via de feed ontdekken, zelfs als crawlertoegang tot diep gepagineerde pagina's beperkt is.",
        },
        {
          title: "BigCommerce SEO-monitoring en doorlopende optimalisatie",
          content:
            "Effectieve SEO op BigCommerce vereist continue monitoring voorbij de initiele configuratie. Verbind Google Search Console en Google Analytics 4 om de indexatiestatus, klikfrequenties en organische verkeertendensen te volgen. BigCommerce biedt een native integratie voor beide tools, waardoor de installatie eenvoudig is via het adminpaneel.\n\nMonitor je indexdekkingsrapport in Google Search Console wekelijks. Let in het bijzonder op pagina's die zijn uitgesloten door noindex, pagina's met redirectfouten en soft 404-pagina's. BigCommerce-winkels veroorzaken vaak soft 404-problemen op niet-voorradige productpagina's die een lege status weergeven in plaats van een correct 404-antwoordcode.\n\nStel geautomatiseerde waarschuwingen in voor significante dalingen in geindexeerde pagina's of organisch verkeer. Google Search Console biedt e-mailmeldingen voor kritieke problemen, maar monitoringtools van derden zoals ContentKing of Lumar kunnen realtime-waarschuwingen bieden.\n\nVoer driemaandelijkse contentaudits uit om dunne productpagina's te identificeren die verrijking van beschrijvingen nodig hebben, categoriepagina's met lage woordaantallen en blogberichten die verkeer hebben verloren. De CSV-exportfunctie van BigCommerce stelt je in staat alle productgegevens naar een spreadsheet te exporteren voor bulkanalyse.\n\nBekijk regelmatig je interne linkstructuur. Zorg ervoor dat best verkopende producten en strategische categoriepagina's de meeste interne links ontvangen vanuit gerelateerde content, navigatiemenu's en cross-sell widgets.",
          items: [
            "Google Search Console en GA4 native verbinden via het BigCommerce-adminpaneel",
            "Indexdekking wekelijks monitoren op soft 404's bij niet-voorradige productpagina's",
            "Driemaandelijkse CSV-exports uitvoeren om metatags en beschrijvingen in bulk te auditen",
            "Het algoritme voor gerelateerde producten configureren om interne linking binnen thematische clusters te versterken",
          ],
        },
      ],
      navLabels: { previous: "Vorige", next: "Volgende" },
    },
  },
};
