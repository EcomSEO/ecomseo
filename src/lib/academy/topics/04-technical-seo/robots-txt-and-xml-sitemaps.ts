import type { AcademyTopic } from "../../types";

export const robotsTxtAndXmlSitemaps: AcademyTopic = {
  slug: "robots-txt-and-xml-sitemaps",
  cluster: 4,
  resources: [{"label":"Google Robots.txt Specification","url":"https://developers.google.com/search/docs/crawling-indexing/robots/intro","type":"docs"},{"label":"Google Sitemap Documentation","url":"https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview","type":"docs"},{"label":"XML Sitemaps Generator","url":"https://www.xml-sitemaps.com/","type":"tool"}],
  content: {
    en: {
      badge: "Technical SEO",
      heading: "Robots.txt & XML Sitemaps",
      intro:
        "Your robots.txt file and XML sitemaps are two of the most fundamental technical SEO files in your ecommerce store. Together, they control what search engines can crawl and provide a roadmap of the pages you want indexed. Getting these wrong can hide your best products from Google or flood the index with low-value filter pages that cannibalize your rankings. Both files play a central role in [crawl budget management](/academy/crawl-budget-management).",
      readTime: "12 min read",
      sections: [
        {
          title: "Robots.txt Fundamentals for Ecommerce",
          content:
            "The robots.txt file sits at the root of your domain (example.com/robots.txt) and provides crawling directives to search engine bots. It uses a simple syntax: User-agent specifies which bot the rules apply to, Disallow blocks specific URL paths from being crawled, and Allow overrides a Disallow for specific sub-paths. The file is publicly accessible, so never use it to hide sensitive content.\n\nFor ecommerce stores, robots.txt serves a critical role in managing crawl budget. See our broader guide on [technical SEO for ecommerce](/blog/technical-seo-for-ecommerce) for the full picture. Without restrictions, bots will attempt to crawl every discoverable URL on your site, including cart pages, checkout flows, account pages, internal search results, and thousands of faceted navigation URLs. These pages waste crawl budget and can create duplicate content issues if they get indexed.\n\nA common misconception is that robots.txt prevents indexing. It does not. Robots.txt only prevents crawling. If another page links to a Disallow-ed URL, Google may still index that URL based on the link's anchor text and surrounding context, displaying it in search results with the message \"No information is available for this page.\" To prevent both crawling and indexing, you need to combine strategies, though you cannot use a noindex meta tag on a page that is blocked from crawling because Google cannot see the tag.\n\nEvery ecommerce store should test their robots.txt file using Google Search Console's robots.txt Tester tool before deploying changes. A single misplaced wildcard or an overly broad Disallow rule can accidentally block your entire product catalog from being crawled.",
          items: [
            "Robots.txt sits at your domain root and controls which URLs bots can crawl",
            "User-agent, Disallow, and Allow are the three core directives",
            "Robots.txt prevents crawling, not indexing; blocked pages can still appear in search results",
            "Always test robots.txt changes in Google Search Console before deploying to production",
          ],
          tip: "Keep a backup of your robots.txt before making any changes. A broken robots.txt file that accidentally blocks everything (Disallow: /) can cause catastrophic organic traffic loss within days.",
        },
        {
          title: "Essential Robots.txt Rules for Online Stores",
          content:
            "Every ecommerce robots.txt should block several categories of low-value URLs. Cart and checkout pages (/cart, /checkout, /account) provide no SEO value and contain user-specific content that should never be indexed. Internal search result pages (/search?q=) generate thousands of thin content pages that duplicate your category listings and can lead to keyword cannibalization.\n\nFaceted navigation parameters represent the largest source of crawl waste in most stores. Rules like Disallow: /*?color=, Disallow: /*?size=, Disallow: /*?brand=, and Disallow: /*?sort= prevent bots from crawling the combinatorial explosion of filter URLs. Be strategic about which parameters to block. If your store has strong SEO-optimized pages for specific brands (like /shoes/nike/), do not block the brand parameter globally. Instead, block only the query-string version while keeping your clean URL brand pages accessible.\n\nSort order parameters should always be blocked. URLs like /category?sort=price-asc and /category?sort=newest show the same products in a different order and add zero unique content. Similarly, pagination parameters beyond a reasonable depth can be restricted. While you want Google to discover products on paginated pages, sort variations of those paginated pages (/category?page=3&sort=rating) are pure duplication.\n\nAlways include a Sitemap directive at the bottom of your robots.txt pointing to your XML sitemap. This helps search engines discover your sitemap without requiring them to check other locations. The format is simply: Sitemap: https://www.example.com/sitemap.xml. You can list multiple sitemaps if you use a sitemap index file.",
          items: [
            "Block cart, checkout, and account pages from crawling",
            "Block internal search result URLs to prevent thin content indexing",
            "Block faceted navigation parameters selectively, preserving SEO-valuable filter pages",
            "Always block sort-order parameters as they create zero unique content",
            "Include your sitemap URL at the bottom of robots.txt for discovery",
          ],
          tip: "Use wildcard patterns carefully. Disallow: /*? would block all URLs with any query parameters, including potentially valuable ones. Instead, block specific parameter names individually so you maintain precise control over what gets crawled.",
          image: {
            src: "/images/academy/robots-sitemap-coordination.svg",
            alt: "Diagram showing robots.txt blocking low-value URLs on the left while XML sitemaps prioritize valuable product, category, and blog URLs on the right",
            caption: "Robots.txt and XML sitemaps must work as a coordinated system: block what should not be crawled, prioritize what should.",
          },
          callout: {
            title: "Zero Overlap Rule",
            text: "Never include URLs in your sitemap that are blocked by robots.txt. This contradiction wastes Google's effort and erodes trust in both files. Cross-reference after every platform update.",
          },
        },
        {
          title: "XML Sitemap Structure for Product Catalogs",
          content:
            "An XML sitemap is a structured file that lists the URLs you want search engines to discover and index. For ecommerce stores with large product catalogs, proper sitemap architecture is critical because it directly influences which pages Google prioritizes for crawling and indexing.\n\nUse a sitemap index file as your primary sitemap that references multiple child sitemaps organized by content type. A typical ecommerce sitemap structure includes separate sitemaps for product pages (sitemap-products.xml), category pages (sitemap-categories.xml), blog posts (sitemap-blog.xml), and static pages like About and Contact (sitemap-pages.xml). This organization makes management easier and helps you identify issues with specific content types.\n\nEach XML sitemap has a limit of 50,000 URLs and 50MB uncompressed file size. For stores with more than 50,000 products, split your product sitemap into multiple files, ideally organized by category or department: sitemap-products-shoes.xml, sitemap-products-clothing.xml, and so on. This logical grouping makes it easier to track indexing rates per product category in Google Search Console.\n\nEvery URL in your sitemap should be the canonical version of that page. Never include URLs that redirect, return 404 errors, have noindex tags, or are blocked by robots.txt. Including these URLs wastes Google's crawling effort on your sitemap and erodes trust in the accuracy of your sitemap file. Google may eventually ignore sitemaps it considers unreliable.",
          items: [
            "Use a sitemap index file that references separate child sitemaps by content type",
            "Respect the 50,000 URL and 50MB size limit per sitemap file",
            "Split large product catalogs into category-based sitemap files",
            "Only include canonical, indexable URLs that return 200 status codes",
            "Never include redirected, noindexed, or robots.txt-blocked URLs in sitemaps",
          ],
          tip: "Submit your sitemap through [Google Search Console](/academy/google-search-console-for-stores) and check the Coverage report regularly. GSC will tell you exactly how many URLs from your sitemap were indexed, excluded, or had errors. A healthy sitemap should have a high ratio of indexed to submitted URLs.",
        },
        {
          title: "Lastmod, Priority, and Changefreq: What Actually Matters",
          content:
            "XML sitemaps support several optional attributes for each URL: lastmod (last modification date), priority (relative importance from 0.0 to 1.0), and changefreq (expected change frequency). In practice, only lastmod provides meaningful value. Google has publicly stated that it ignores the priority and changefreq attributes entirely because webmasters set them incorrectly so often that they carry no reliable signal.\n\nThe lastmod attribute tells search engines when a page's content was last meaningfully updated. This is a genuine signal that Google uses to prioritize recrawling. When you update a product's price, availability, description, or images, the lastmod date should reflect that change. Accurate lastmod dates help Google identify which pages need recrawling most urgently.\n\nThe critical mistake many stores make is setting lastmod to the current date for all pages every time the sitemap regenerates. If your sitemap rebuilds nightly and stamps every URL with today's date, Google quickly learns that your lastmod dates are meaningless and stops using them as a signal. We have audited stores where fixing inaccurate lastmod dates alone resulted in 30% faster indexing of product updates.\n\nFor ecommerce specifically, tie lastmod to actual data changes in your product information management system. When inventory levels change, when prices update, when new reviews are posted, or when product descriptions are edited, update the lastmod date for those specific product URLs. This creates a genuine freshness signal that Google can rely on to prioritize crawling your recently updated products.",
          items: [
            "Lastmod is the only sitemap attribute Google actually uses as a crawling signal",
            "Google publicly ignores priority and changefreq values set by webmasters",
            "Setting all lastmod dates to the current date destroys the signal for Google",
            "Tie lastmod dates to real content changes: price updates, new reviews, description edits",
          ],
          tip: "After correcting your lastmod implementation, monitor the Crawl Stats report in Google Search Console. You should see Google shifting its crawl focus toward recently updated pages within two to four weeks.",
          image: {
            src: "/images/academy/sitemap-lastmod-signal.svg",
            alt: "Comparison of accurate lastmod dates tied to real content changes versus incorrect implementations where all dates are set to today",
            caption: "Accurate lastmod dates tied to real changes result in 30% faster indexing. Setting all dates to today destroys the signal entirely.",
          },
          callout: {
            title: "Lastmod Mistake",
            text: "Stores that set all lastmod dates to today's date on every sitemap rebuild teach Google to ignore the signal entirely. Fix this by tying lastmod to actual price, stock, or description changes.",
          },
        },
        {
          title: "Managing Out-of-Stock Products in Sitemaps",
          content:
            "Out-of-stock products present a unique sitemap challenge for ecommerce stores. The correct approach depends on whether the product is temporarily unavailable or permanently discontinued, and whether the product page has accumulated valuable backlinks and search authority.\n\nFor temporarily out-of-stock products that you expect to restock, keep the product page live and in your sitemap. Update the page to clearly indicate the product is currently unavailable and offer alternatives or a restock notification signup. The structured data should reflect the out-of-stock availability status. This preserves the page's accumulated SEO authority and prevents the ranking loss that comes from removing and re-adding pages.\n\nFor permanently discontinued products with no SEO value (few or no backlinks, minimal organic traffic), remove them from your sitemap and eventually from the site. Let them return 404 naturally. Google handles 404s gracefully for pages with no authority, and removing dead products from your sitemap keeps it clean and trustworthy.\n\nFor discontinued products with significant backlink authority or organic traffic, implement a 301 redirect to the most relevant replacement product or category page. Remove the discontinued URL from your sitemap and add the redirect target URL if it is not already there. This transfers the accumulated authority to a relevant page rather than losing it entirely. Monitor redirected product pages through Google Search Console to verify the authority transfer is working.\n\nNever leave hundreds of 404-returning discontinued product URLs in your sitemap. This erodes Google's trust in your sitemap accuracy and wastes crawl budget on pages that no longer exist. Run a quarterly cleanup to remove any non-200 URLs from your sitemap files.",
          items: [
            "Temporarily out-of-stock: keep in sitemap with updated availability status",
            "Permanently discontinued with no authority: remove from sitemap, let it 404",
            "Discontinued with valuable backlinks: 301 redirect to closest relevant page, remove old URL from sitemap",
            "Never leave 404 URLs in your sitemap; run quarterly cleanups",
            "Update structured data availability status for out-of-stock products",
          ],
          tip: "Create an automated process that removes product URLs from your sitemap when they return non-200 status codes for more than seven consecutive days. This prevents sitemap bloat from accumulating over time as products are discontinued.",
        },
        {
          title: "Coordinating Robots.txt and Sitemaps for Maximum Impact",
          content:
            "Robots.txt and XML sitemaps must work together as a coordinated system. Your robots.txt tells search engines what not to crawl, while your sitemap tells them what to prioritize. Conflicting signals between these two files create confusion and wasted effort.\n\nThe most common coordination failure is including URLs in your sitemap that are blocked by robots.txt. If your robots.txt contains Disallow: /search and your sitemap includes URLs like /search?q=popular-term, you are sending contradictory signals. Google cannot crawl the page because robots.txt blocks it, but your sitemap says it is important enough to be listed. Clean your sitemap to ensure zero overlap with robots.txt Disallow rules.\n\nA second coordination issue involves canonical URLs. Your sitemap should contain only the canonical version of each URL. If a product is accessible at both /products/shoes and /category/footwear?product=shoes, only the canonical URL should appear in the sitemap. Including non-canonical URLs inflates your sitemap without adding value and can confuse crawling priorities.\n\nFor large ecommerce sites, create a tiered crawling strategy. Use robots.txt to block URL patterns that should never be crawled (filters, sorts, sessions). Use sitemaps to proactively declare which URLs are most important and most recently updated. Use internal linking to reinforce crawl priority for your highest-value product and category pages. These three mechanisms working in concert give you comprehensive control over how search engines interact with your store.\n\nFinally, monitor both files continuously. Set up alerts for changes to your robots.txt (some platforms modify it during updates), and schedule weekly sitemap validation to catch URLs that have started returning errors. A deployment that inadvertently modifies robots.txt or breaks sitemap generation can take weeks to recover from if not caught promptly.",
          items: [
            "Never include URLs in your sitemap that are blocked by robots.txt",
            "Only include canonical URL versions in your sitemap",
            "Use robots.txt for blocking, sitemaps for prioritizing, and internal links for reinforcing",
            "Monitor both files continuously; platform updates can silently modify robots.txt",
            "Schedule weekly sitemap validation to catch newly broken URLs before they impact rankings",
          ],
          tip: "After every platform update or theme change, immediately verify your robots.txt and regenerate your sitemap. Cross-reference the two files to ensure no sitemap URLs are blocked and no critical pages are missing from the sitemap. This ten-minute check can prevent weeks of organic traffic loss.",
        },
      ],
      navLabels: {
        previous: "Canonical Tags for Ecommerce",
        next: "Faceted Navigation SEO",
      },
    },
    de: {
      badge: "Technisches SEO",
      heading: "Robots.txt und XML-Sitemaps",
      intro:
        "Ihre robots.txt-Datei und XML-Sitemaps sind zwei der grundlegendsten technischen SEO-Dateien in Ihrem Ecommerce-Shop. Gemeinsam kontrollieren sie, was Suchmaschinen crawlen koennen, und bieten eine Karte der Seiten, die Sie indexiert haben moechten. Wenn Sie diese falsch konfigurieren, koennen Sie Ihre besten Produkte vor Google verstecken oder den Index mit wertlosen Filterseiten ueberfluten, die Ihre Rankings kannibalisieren. Beide Dateien spielen eine zentrale Rolle im [Crawl-Budget-Management](/academy/crawl-budget-management).",
      readTime: "12 Min. Lesezeit",
      sections: [
        {
          title: "Robots.txt-Grundlagen fuer Ecommerce",
          content:
            "Die robots.txt-Datei befindet sich im Stammverzeichnis Ihrer Domain (example.com/robots.txt) und gibt Crawling-Anweisungen an Suchmaschinen-Bots. Sie verwendet eine einfache Syntax: User-agent gibt an, fuer welchen Bot die Regeln gelten, Disallow blockiert bestimmte URL-Pfade vom Crawling, und Allow ueberschreibt ein Disallow fuer bestimmte Unterpfade. Die Datei ist oeffentlich zugaenglich, verwenden Sie sie daher nie, um sensible Inhalte zu verstecken.\n\nFuer Ecommerce-Shops spielt robots.txt eine entscheidende Rolle bei der Verwaltung des Crawl-Budgets. Ohne Einschraenkungen versuchen Bots, jede auffindbare URL auf Ihrer Website zu crawlen, einschliesslich Warenkorb-Seiten, Checkout-Ablaeufe, Kontobereich-Seiten, interne Suchergebnisse und Tausende facettierter Navigations-URLs. Diese Seiten verschwenden Crawl-Budget und koennen Probleme mit doppeltem Inhalt verursachen, wenn sie indexiert werden. Weitere Details finden Sie in unserem Leitfaden zu [technische SEO f\u00fcr Ecommerce](/blog/technical-seo-for-ecommerce).\n\nEin verbreiteter Irrtum ist, dass robots.txt die Indexierung verhindert. Das tut sie nicht. Robots.txt verhindert nur das Crawling. Wenn eine andere Seite auf eine blockierte URL verlinkt, kann Google diese URL trotzdem basierend auf dem Ankertext und dem umgebenden Kontext indexieren und sie in den Suchergebnissen mit der Meldung \"Fuer diese Seite sind keine Informationen verfuegbar\" anzeigen.\n\nJeder Ecommerce-Shop sollte seine robots.txt-Datei mit dem robots.txt-Tester-Tool in der Google Search Console testen, bevor Aenderungen implementiert werden. Ein einzelner fehlplatzierter Platzhalter oder eine zu breite Disallow-Regel kann versehentlich Ihren gesamten Produktkatalog vom Crawling blockieren.",
          items: [
            "Robots.txt befindet sich im Stammverzeichnis Ihrer Domain und kontrolliert, welche URLs Bots crawlen koennen",
            "User-agent, Disallow und Allow sind die drei Kern-Direktiven",
            "Robots.txt verhindert Crawling, nicht Indexierung; blockierte Seiten koennen trotzdem in Suchergebnissen erscheinen",
            "Testen Sie robots.txt-Aenderungen immer in der Google Search Console, bevor Sie sie implementieren",
          ],
          tip: "Bewahren Sie eine Sicherungskopie Ihrer robots.txt auf, bevor Sie Aenderungen vornehmen. Eine fehlerhafte robots.txt, die versehentlich alles blockiert (Disallow: /), kann innerhalb von Tagen zu katastrophalem Verlust von organischem Traffic fuehren.",
        },
        {
          title: "Essentielle Robots.txt-Regeln fuer Online-Shops",
          content:
            "Jede Ecommerce-robots.txt sollte mehrere Kategorien von wertlosen URLs blockieren. Warenkorb- und Checkout-Seiten (/cart, /checkout, /account) bieten keinen SEO-Wert und enthalten benutzerspezifische Inhalte, die nie indexiert werden sollten. Interne Suchergebnis-Seiten (/search?q=) erzeugen Tausende Thin-Content-Seiten, die Ihre Kategorielisten duplizieren und zu Keyword-Kannibalisierung fuehren koennen.\n\nFacettierte Navigationsparameter stellen die groesste Quelle fuer Crawl-Verschwendung in den meisten Shops dar. Regeln wie Disallow: /*?color=, Disallow: /*?size=, Disallow: /*?brand= und Disallow: /*?sort= verhindern, dass Bots die kombinatorische Explosion von Filter-URLs crawlen. Seien Sie strategisch bei der Auswahl, welche Parameter blockiert werden. Wenn Ihr Shop starke SEO-optimierte Seiten fuer bestimmte Marken hat (wie /schuhe/nike/), blockieren Sie den Markenparameter nicht global.\n\nSortierparameter sollten immer blockiert werden. URLs wie /kategorie?sort=preis-aufsteigend und /kategorie?sort=neueste zeigen die gleichen Produkte in anderer Reihenfolge und fuegen null einzigartigen Inhalt hinzu. Ebenso kann Paginierung jenseits einer angemessenen Tiefe eingeschraenkt werden. Sortiervarianten paginierter Seiten sind reine Duplikation.\n\nFuegen Sie immer eine Sitemap-Direktive am Ende Ihrer robots.txt ein, die auf Ihre XML-Sitemap verweist. Dies hilft Suchmaschinen, Ihre Sitemap zu finden. Das Format ist einfach: Sitemap: https://www.example.com/sitemap.xml. Sie koennen mehrere Sitemaps auflisten, wenn Sie eine Sitemap-Indexdatei verwenden.",
          items: [
            "Warenkorb-, Checkout- und Kontobereich-Seiten vom Crawling blockieren",
            "Interne Suchergebnis-URLs blockieren, um Thin-Content-Indexierung zu verhindern",
            "Facettierte Navigationsparameter selektiv blockieren, wertvolle SEO-Filterseiten beibehalten",
            "Sortierparameter immer blockieren, da sie null einzigartigen Inhalt erzeugen",
            "Ihre Sitemap-URL am Ende der robots.txt zur Entdeckung einfuegen",
          ],
          tip: "Verwenden Sie Platzhalter-Muster vorsichtig. Disallow: /*? wuerde alle URLs mit beliebigen Abfrageparametern blockieren, einschliesslich potenziell wertvoller. Blockieren Sie stattdessen spezifische Parameternamen einzeln.",
          image: {
            src: "/images/academy/de/robots-sitemap-coordination.svg",
            alt: "Diagramm das zeigt wie robots.txt minderwertige URLs auf der linken Seite blockiert waehrend XML-Sitemaps wertvolle Produkt-, Kategorie- und Blog-URLs auf der rechten Seite priorisieren",
            caption: "Robots.txt und XML-Sitemaps muessen als koordiniertes System arbeiten: blockieren was nicht gecrawlt werden soll, priorisieren was soll.",
          },
          callout: {
            title: "Null-Ueberschneidungs-Regel",
            text: "Fuegen Sie niemals URLs in Ihre Sitemap ein die durch robots.txt blockiert sind. Dieser Widerspruch verschwendet Googles Aufwand und untergaebt das Vertrauen in beide Dateien. Nach jedem Plattform-Update abgleichen.",
          },
        },
        {
          title: "XML-Sitemap-Struktur fuer Produktkataloge",
          content:
            "Eine XML-Sitemap ist eine strukturierte Datei, die die URLs auflistet, die Suchmaschinen entdecken und indexieren sollen. Fuer Ecommerce-Shops mit grossen Produktkatalogen ist die richtige Sitemap-Architektur entscheidend, da sie direkt beeinflusst, welche Seiten Google beim Crawling und der Indexierung priorisiert.\n\nVerwenden Sie eine Sitemap-Indexdatei als primaere Sitemap, die auf mehrere untergeordnete Sitemaps verweist, organisiert nach Inhaltstyp. Eine typische Ecommerce-Sitemap-Struktur umfasst separate Sitemaps fuer Produktseiten (sitemap-products.xml), Kategorieseiten (sitemap-categories.xml), Blogbeitraege (sitemap-blog.xml) und statische Seiten (sitemap-pages.xml). Diese Organisation erleichtert die Verwaltung und hilft Ihnen, Probleme mit bestimmten Inhaltstypen zu identifizieren.\n\nJede XML-Sitemap hat ein Limit von 50.000 URLs und 50 MB unkomprimierter Dateigroesse. Fuer Shops mit mehr als 50.000 Produkten teilen Sie Ihre Produkt-Sitemap in mehrere Dateien auf, idealerweise nach Kategorie oder Abteilung organisiert: sitemap-products-schuhe.xml, sitemap-products-kleidung.xml usw. Diese logische Gruppierung erleichtert die Verfolgung der Indexierungsraten pro Produktkategorie in der Google Search Console.\n\nJede URL in Ihrer Sitemap sollte die kanonische Version dieser Seite sein. Fuegen Sie niemals URLs ein, die weiterleiten, 404-Fehler zurueckgeben, noindex-Tags haben oder durch robots.txt blockiert sind. Solche URLs verschwenden Googles Crawling-Aufwand und untergraben das Vertrauen in die Genauigkeit Ihrer Sitemap.",
          items: [
            "Verwenden Sie eine Sitemap-Indexdatei, die auf separate untergeordnete Sitemaps nach Inhaltstyp verweist",
            "Respektieren Sie das Limit von 50.000 URLs und 50 MB pro Sitemap-Datei",
            "Teilen Sie grosse Produktkataloge in kategoriebasierte Sitemap-Dateien auf",
            "Fuegen Sie nur kanonische, indexierbare URLs ein, die Statuscode 200 zurueckgeben",
            "Fuegen Sie niemals weitergeleitete, noindexed oder robots.txt-blockierte URLs in Sitemaps ein",
          ],
          tip: "Reichen Sie Ihre Sitemap ueber die [Google Search Console](/academy/google-search-console-for-stores) ein und pruefen Sie den Abdeckungsbericht regelmaessig. GSC zeigt Ihnen genau, wie viele URLs aus Ihrer Sitemap indexiert, ausgeschlossen oder fehlerhaft waren.",
        },
        {
          title: "Lastmod, Priority und Changefreq: Was wirklich zaehlt",
          content:
            "XML-Sitemaps unterstuetzen mehrere optionale Attribute fuer jede URL: lastmod (Datum der letzten Aenderung), priority (relative Wichtigkeit von 0,0 bis 1,0) und changefreq (erwartete Aenderungshaeufigkeit). In der Praxis liefert nur lastmod einen bedeutungsvollen Wert. Google hat oeffentlich erklaert, dass es die Attribute priority und changefreq vollstaendig ignoriert, weil Webmaster sie so oft falsch setzen, dass sie kein zuverlaessiges Signal tragen.\n\nDas lastmod-Attribut teilt Suchmaschinen mit, wann der Inhalt einer Seite zuletzt inhaltlich aktualisiert wurde. Dies ist ein echtes Signal, das Google zur Priorisierung des Recrawlings verwendet. Wenn Sie den Preis, die Verfuegbarkeit, die Beschreibung oder die Bilder eines Produkts aktualisieren, sollte das lastmod-Datum diese Aenderung widerspiegeln.\n\nDer kritische Fehler, den viele Shops machen, ist, lastmod bei jeder Sitemap-Regenerierung auf das aktuelle Datum fuer alle Seiten zu setzen. Wenn Ihre Sitemap naechtlich neu erstellt wird und jede URL mit dem heutigen Datum versieht, lernt Google schnell, dass Ihre lastmod-Daten bedeutungslos sind. Wir haben Shops auditiert, bei denen allein die Korrektur ungenauer lastmod-Daten zu 30 % schnellerer Indexierung von Produktaktualisierungen fuehrte.\n\nFuer Ecommerce koppeln Sie lastmod an tatsaechliche Datenaenderungen in Ihrem Produktinformations-Management-System. Wenn sich Lagerbestaende aendern, Preise aktualisiert werden, neue Bewertungen gepostet werden oder Produktbeschreibungen bearbeitet werden, aktualisieren Sie das lastmod-Datum fuer diese spezifischen Produkt-URLs.",
          items: [
            "Lastmod ist das einzige Sitemap-Attribut, das Google tatsaechlich als Crawling-Signal nutzt",
            "Google ignoriert oeffentlich die von Webmastern gesetzten Priority- und Changefreq-Werte",
            "Alle lastmod-Daten auf das aktuelle Datum zu setzen zerstoert das Signal fuer Google",
            "Koppeln Sie lastmod-Daten an echte Inhaltsaenderungen: Preisupdates, neue Bewertungen, Beschreibungsbearbeitungen",
          ],
          tip: "Nach der Korrektur Ihrer lastmod-Implementierung ueberwachen Sie den Crawl-Statistik-Bericht in der Google Search Console. Sie sollten sehen, dass Google seinen Crawl-Fokus innerhalb von zwei bis vier Wochen auf kuerzlich aktualisierte Seiten verlagert.",
        },
        {
          title: "Nicht vorraetige Produkte in Sitemaps verwalten",
          content:
            "Nicht vorraetige Produkte stellen eine einzigartige Sitemap-Herausforderung fuer Ecommerce-Shops dar. Der richtige Ansatz haengt davon ab, ob das Produkt voruebergehend nicht verfuegbar oder dauerhaft eingestellt ist und ob die Produktseite wertvolle Backlinks und Suchautoritaet angesammelt hat.\n\nFuer voruebergehend nicht vorraetige Produkte, die Sie nachbestellen werden, behalten Sie die Produktseite und die Sitemap-Listung bei. Aktualisieren Sie die Seite, um deutlich zu machen, dass das Produkt derzeit nicht verfuegbar ist, und bieten Sie Alternativen oder eine Benachrichtigung bei Wiederverfuegbarkeit an. Die strukturierten Daten sollten den Nicht-vorraetig-Status widerspiegeln.\n\nFuer dauerhaft eingestellte Produkte ohne SEO-Wert (wenige oder keine Backlinks, minimaler organischer Traffic) entfernen Sie sie aus Ihrer Sitemap und letztendlich von der Website. Lassen Sie sie natuerlich 404 zurueckgeben. Google behandelt 404s bei Seiten ohne Autoritaet gut.\n\nFuer eingestellte Produkte mit signifikanter Backlink-Autoritaet oder organischem Traffic implementieren Sie eine 301-Weiterleitung zum relevantesten Ersatzprodukt oder zur Kategorieseite. Entfernen Sie die eingestellte URL aus Ihrer Sitemap und fuegen Sie die Weiterleitungsziel-URL hinzu. Dies uebertraegt die angesammelte Autoritaet auf eine relevante Seite.\n\nLassen Sie nie Hunderte von 404-zurueckgebenden eingestellten Produkt-URLs in Ihrer Sitemap. Dies untergaebt Googles Vertrauen in die Genauigkeit Ihrer Sitemap und verschwendet Crawl-Budget. Fuehren Sie quartalsmaessige Bereinigungen durch, um alle Nicht-200-URLs aus Ihren Sitemap-Dateien zu entfernen.",
          items: [
            "Voruebergehend nicht vorraetig: in der Sitemap behalten mit aktualisiertem Verfuegbarkeitsstatus",
            "Dauerhaft eingestellt ohne Autoritaet: aus der Sitemap entfernen, 404 zurueckgeben lassen",
            "Eingestellt mit wertvollen Backlinks: 301-Weiterleitung zur naechstgelegenen relevanten Seite",
            "Nie 404-URLs in Ihrer Sitemap belassen; quartalsmaessige Bereinigungen durchfuehren",
            "Verfuegbarkeitsstatus in strukturierten Daten fuer nicht vorraetige Produkte aktualisieren",
          ],
          tip: "Erstellen Sie einen automatisierten Prozess, der Produkt-URLs aus Ihrer Sitemap entfernt, wenn sie fuer mehr als sieben aufeinanderfolgende Tage Nicht-200-Statuscodes zurueckgeben.",
          image: {
            src: "/images/academy/de/sitemap-lastmod-signal.svg",
            alt: "Vergleich korrekter Lastmod-Daten die an echte Inhaltsaenderungen gebunden sind versus fehlerhafter Implementierungen bei denen alle Daten auf heute gesetzt sind",
            caption: "Korrekte Lastmod-Daten die an echte Aenderungen gebunden sind fuehren zu 30% schnellerer Indexierung. Alle Daten auf heute zu setzen zerstoert das Signal vollstaendig.",
          },
          callout: {
            title: "Lastmod-Fehler",
            text: "Shops die bei jedem Sitemap-Rebuild alle Lastmod-Daten auf das heutige Datum setzen bringen Google dazu das Signal vollstaendig zu ignorieren. Beheben Sie dies indem Sie lastmod an tatsaechliche Preis-, Bestands- oder Beschreibungsaenderungen koppeln.",
          },
        },
        {
          title: "Robots.txt und Sitemaps fuer maximale Wirkung koordinieren",
          content:
            "Robots.txt und XML-Sitemaps muessen als koordiniertes System zusammenarbeiten. Ihre robots.txt sagt Suchmaschinen, was sie nicht crawlen sollen, waehrend Ihre Sitemap ihnen sagt, was sie priorisieren sollen. Widerspruechliche Signale zwischen diesen beiden Dateien erzeugen Verwirrung und verschwendeten Aufwand.\n\nDer haeufigste Koordinationsfehler ist, URLs in Ihrer Sitemap aufzunehmen, die durch robots.txt blockiert werden. Wenn Ihre robots.txt Disallow: /search enthaelt und Ihre Sitemap URLs wie /search?q=beliebter-begriff einschliesst, senden Sie widerspruechliche Signale. Bereinigen Sie Ihre Sitemap, um null Ueberlappung mit robots.txt-Disallow-Regeln sicherzustellen.\n\nEin zweites Koordinationsproblem betrifft kanonische URLs. Ihre Sitemap sollte nur die kanonische Version jeder URL enthalten. Wenn ein Produkt sowohl unter /products/schuhe als auch unter /kategorie/fussbekleidung?product=schuhe zugaenglich ist, sollte nur die kanonische URL in der Sitemap erscheinen.\n\nFuer grosse Ecommerce-Sites erstellen Sie eine gestufte Crawling-Strategie. Verwenden Sie robots.txt, um URL-Muster zu blockieren, die nie gecrawlt werden sollen (Filter, Sortierungen, Sessions). Verwenden Sie Sitemaps, um proaktiv zu erklaeren, welche URLs am wichtigsten und am aktuellsten sind. Verwenden Sie interne Verlinkung, um die Crawl-Prioritaet fuer Ihre wertvollsten Produkt- und Kategorieseiten zu verstaerken.\n\nUeberwachen Sie schliesslich beide Dateien kontinuierlich. Richten Sie Benachrichtigungen fuer Aenderungen an Ihrer robots.txt ein und planen Sie woechentliche Sitemap-Validierung, um URLs zu erkennen, die Fehler zurueckgeben. Ein Deployment, das versehentlich robots.txt aendert oder die Sitemap-Generierung bricht, kann Wochen zur Erholung benoetigen.",
          items: [
            "Fuegen Sie nie URLs in Ihre Sitemap ein, die durch robots.txt blockiert sind",
            "Fuegen Sie nur kanonische URL-Versionen in Ihre Sitemap ein",
            "Verwenden Sie robots.txt zum Blockieren, Sitemaps zum Priorisieren und interne Links zum Verstaerken",
            "Ueberwachen Sie beide Dateien kontinuierlich; Plattform-Updates koennen robots.txt stillschweigend aendern",
            "Planen Sie woechentliche Sitemap-Validierung, um neu fehlerhafte URLs zu erkennen",
          ],
          tip: "Nach jedem Plattform-Update oder Theme-Wechsel ueberpruefen Sie sofort Ihre robots.txt und regenerieren Sie Ihre Sitemap. Vergleichen Sie beide Dateien, um sicherzustellen, dass keine Sitemap-URLs blockiert sind und keine kritischen Seiten in der Sitemap fehlen.",
        },
      ],
      navLabels: {
        previous: "Canonical Tags fuer Ecommerce",
        next: "Facettierte Navigation SEO",
      },
    },
    fr: {
      badge: "SEO Technique",
      heading: "Robots.txt et sitemaps XML",
      intro: "Votre fichier robots.txt et vos sitemaps XML sont deux des fichiers [SEO technique](/blog/technical-seo-for-ecommerce)s les plus fondamentaux de votre boutique e-commerce. Ensemble, ils controlent ce que les moteurs de recherche peuvent explorer et fournissent une feuille de route des pages que vous souhaitez indexer. Les configurer incorrectement peut cacher vos meilleurs produits a Google ou inonder l'index de pages de filtres sans valeur qui cannibalisent vos classements. Les deux fichiers jouent un rôle central dans la [gestion du budget de crawl](/academy/crawl-budget-management).",
      readTime: "12 min de lecture",
      sections: [
        {
          title: "Fondamentaux du robots.txt pour le e-commerce",
          content:
            "Le fichier robots.txt se trouve a la racine de votre domaine (example.com/robots.txt) et fournit des directives de crawl aux robots des moteurs de recherche. Il utilise une syntaxe simple : User-agent specifie quel robot est concerne, Disallow bloque des chemins d'URL specifiques du crawl, et Allow annule un Disallow pour des sous-chemins specifiques. Le fichier est accessible publiquement, ne l'utilisez donc jamais pour cacher du contenu sensible.\n\nPour les boutiques e-commerce, robots.txt joue un role essentiel dans la gestion du budget de crawl. Sans restrictions, les robots tenteront d'explorer chaque URL decouvrable sur votre site, y compris les pages panier, les flux de paiement, les pages de compte, les resultats de recherche interne et des milliers d'URLs de navigation a facettes. Ces pages gaspillent le budget de crawl et peuvent creer des problemes de contenu duplique si elles sont indexees.\n\nUne idee recue courante est que robots.txt empeche l'indexation. Ce n'est pas le cas. Robots.txt empeche uniquement le crawl. Si une autre page contient un lien vers une URL bloquee, Google peut quand meme indexer cette URL en se basant sur le texte d'ancrage et le contexte environnant, l'affichant dans les resultats de recherche avec le message \"Aucune information disponible pour cette page.\"\n\nChaque boutique e-commerce devrait tester son fichier robots.txt en utilisant l'outil de test robots.txt de Google Search Console avant de deployer des modifications. Un seul caractere joker mal place ou une regle Disallow trop large peut accidentellement bloquer l'ensemble de votre catalogue produit.",
          items: [
            "Robots.txt se trouve a la racine de votre domaine et controle quelles URLs les robots peuvent explorer",
            "User-agent, Disallow et Allow sont les trois directives principales",
            "Robots.txt empeche le crawl, pas l'indexation ; les pages bloquees peuvent toujours apparaitre dans les resultats",
            "Testez toujours les modifications du robots.txt dans Google Search Console avant deploiement",
          ],
          tip: "Conservez une sauvegarde de votre robots.txt avant toute modification. Un fichier robots.txt defaillant qui bloque accidentellement tout (Disallow: /) peut causer une perte catastrophique de trafic organique en quelques jours.",
        },
        {
          title: "Règles robots.txt essentielles pour les boutiques en ligne",
          content:
            "Chaque robots.txt e-commerce devrait bloquer plusieurs categories d'URLs sans valeur. Les pages panier et paiement (/cart, /checkout, /account) n'apportent aucune valeur SEO et contiennent du contenu specifique a l'utilisateur. Les pages de resultats de recherche interne (/search?q=) generent des milliers de pages a contenu mince qui dupliquent vos listings de categories et peuvent mener a la cannibalisation de mots-cles.\n\nLes parametres de navigation a facettes representent la plus grande source de gaspillage de crawl. Des regles comme Disallow: /*?color=, Disallow: /*?size=, Disallow: /*?brand= et Disallow: /*?sort= empechent les robots d'explorer l'explosion combinatoire des URLs de filtres. Soyez strategique dans le choix des parametres a bloquer. Si votre boutique a des pages SEO optimisees pour certaines marques, ne bloquez pas le parametre marque globalement.\n\nLes parametres de tri devraient toujours etre bloques. Des URLs comme /categorie?sort=prix-croissant et /categorie?sort=plus-recents montrent les memes produits dans un ordre different et n'ajoutent aucun contenu unique. De meme, les parametres de pagination au-dela d'une profondeur raisonnable peuvent etre restreints.\n\nIncluez toujours une directive Sitemap en bas de votre robots.txt pointant vers votre sitemap XML. Cela aide les moteurs de recherche a decouvrir votre sitemap. Le format est simple : Sitemap: https://www.example.com/sitemap.xml. Vous pouvez lister plusieurs sitemaps si vous utilisez un fichier index de sitemaps.",
          items: [
            "Bloquer les pages panier, paiement et compte du crawl",
            "Bloquer les URLs de recherche interne pour empecher l'indexation de contenu mince",
            "Bloquer les parametres de navigation a facettes selectivement, en preservant les pages filtre SEO precieuses",
            "Toujours bloquer les parametres de tri car ils ne creent aucun contenu unique",
            "Inclure l'URL de votre sitemap en bas du robots.txt pour la decouverte",
          ],
          tip: "Utilisez les caracteres joker avec prudence. Disallow: /*? bloquerait toutes les URLs avec n'importe quel parametre de requete, y compris les potentiellement precieux. Bloquez plutot les noms de parametres specifiques individuellement.",
          image: {
            src: "/images/academy/fr/robots-sitemap-coordination.svg",
            alt: "Schéma montrant le fichier robots.txt bloquant les URL de faible valeur à gauche tandis que les plans de site XML donnent la priorité aux URL de produits, de catégories et de blogs de valeur à droite",
            caption: "Les plans de site Robots.txt et XML doivent fonctionner comme un système coordonné : bloquez ce qui ne doit pas être exploré, priorisez ce qui doit le faire.",
          },
          callout: {
            title: "Null-Ueberschneidungs-Regel",
            text: "N'incluez jamais d'URL dans votre plan de site qui sont bloquées par robots.txt. Cette contradiction gaspille les efforts de Google et érode la confiance dans les deux fichiers. Référence croisée après chaque mise à jour de la plateforme.",
          },
        },
        {
          title: "Structure des sitemaps XML pour les catalogues produits",
          content:
            "Un sitemap XML est un fichier structure qui liste les URLs que vous voulez que les moteurs de recherche decouvrent et indexent. Pour les boutiques e-commerce avec de grands catalogues, une architecture de sitemap appropriee est essentielle car elle influence directement quelles pages Google priorise pour le crawl et l'indexation.\n\nUtilisez un fichier index de sitemaps comme sitemap principal qui reference plusieurs sitemaps enfants organises par type de contenu. Une structure de sitemap e-commerce typique inclut des sitemaps separes pour les pages produits (sitemap-products.xml), les pages categorie (sitemap-categories.xml), les articles de blog (sitemap-blog.xml) et les pages statiques (sitemap-pages.xml).\n\nChaque sitemap XML a une limite de 50 000 URLs et 50 Mo de taille non compressee. Pour les boutiques avec plus de 50 000 produits, divisez votre sitemap produits en plusieurs fichiers, idealement organises par categorie ou departement. Ce regroupement logique facilite le suivi des taux d'indexation par categorie de produits dans Google Search Console.\n\nChaque URL dans votre sitemap devrait etre la version canonique de cette page. N'incluez jamais d'URLs qui redirigent, retournent des erreurs 404, ont des balises noindex ou sont bloquees par robots.txt. Inclure ces URLs gaspille l'effort de crawl de Google et erode la confiance dans la fiabilite de votre fichier sitemap.",
          items: [
            "Utilisez un fichier index de sitemaps referencant des sitemaps enfants separees par type de contenu",
            "Respectez la limite de 50 000 URLs et 50 Mo par fichier sitemap",
            "Divisez les grands catalogues en fichiers sitemap bases sur les categories",
            "N'incluez que des URLs canoniques et indexables retournant le code 200",
            "N'incluez jamais d'URLs redirigees, noindexees ou bloquees par robots.txt dans les sitemaps",
          ],
          tip: "Soumettez votre sitemap via Google Search Console et verifiez le rapport de couverture regulierement. GSC vous indiquera exactement combien d'URLs de votre sitemap ont ete indexees, exclues ou ont eu des erreurs. Soumettez votre sitemap via la [Google Search Console](/academy/google-search-console-for-stores) et vérifiez le rapport de couverture régulièrement.",
        },
        {
          title: "Lastmod, Priority et Changefreq : ce qui compte vraiment",
          content:
            "Les sitemaps XML supportent plusieurs attributs optionnels pour chaque URL : lastmod (date de derniere modification), priority (importance relative de 0,0 a 1,0) et changefreq (frequence de changement attendue). En pratique, seul lastmod apporte une valeur reelle. Google a publiquement declare qu'il ignore completement les attributs priority et changefreq car les webmasters les definissent si souvent incorrectement qu'ils ne portent aucun signal fiable.\n\nL'attribut lastmod indique aux moteurs de recherche quand le contenu d'une page a ete significativement mis a jour pour la derniere fois. C'est un veritable signal que Google utilise pour prioriser le recrawl. Quand vous mettez a jour le prix, la disponibilite, la description ou les images d'un produit, la date lastmod devrait refleter ce changement.\n\nL'erreur critique que font de nombreuses boutiques est de definir lastmod a la date du jour pour toutes les pages a chaque regeneration du sitemap. Si votre sitemap se reconstruit chaque nuit et marque chaque URL avec la date du jour, Google apprend rapidement que vos dates lastmod sont insignifiantes. Nous avons audite des boutiques ou la seule correction des dates lastmod inexactes a resulte en une indexation 30 % plus rapide des mises a jour produits.\n\nPour le e-commerce specifiquement, liez lastmod aux changements reels de donnees dans votre systeme de gestion d'informations produits. Quand les niveaux de stock changent, quand les prix sont mis a jour, quand de nouveaux avis sont publies, mettez a jour la date lastmod pour ces URLs produit specifiques.",
          items: [
            "Lastmod est le seul attribut de sitemap que Google utilise reellement comme signal de crawl",
            "Google ignore publiquement les valeurs priority et changefreq definies par les webmasters",
            "Definir tous les lastmod a la date du jour detruit le signal pour Google",
            "Liez les dates lastmod aux vrais changements de contenu : mises a jour de prix, nouveaux avis, modifications de descriptions",
          ],
          tip: "Apres avoir corrige votre implementation lastmod, surveillez le rapport de statistiques de crawl dans Google Search Console. Vous devriez voir Google reorienter son crawl vers les pages recemment mises a jour dans les deux a quatre semaines.",
        },
        {
          title: "Gerer les produits en rupture de stock dans les sitemaps",
          content:
            "Les produits en rupture de stock presentent un defi unique pour les sitemaps e-commerce. L'approche correcte depend de si le produit est temporairement indisponible ou definitivement arrete, et si la page produit a accumule des backlinks et de l'autorite de recherche precieux.\n\nPour les produits temporairement en rupture que vous prevoyez de reapprovisionner, gardez la page produit active et dans votre sitemap. Mettez a jour la page pour indiquer clairement que le produit est actuellement indisponible et proposez des alternatives ou une inscription de notification de reapprovisionnement. Les donnees structurees doivent refleter le statut de disponibilite en rupture.\n\nPour les produits definitivement arretes sans valeur SEO (peu ou pas de backlinks, trafic organique minimal), retirez-les de votre sitemap et eventuellement du site. Laissez-les retourner naturellement une 404.\n\nPour les produits arretes avec une autorite de backlinks significative, implementez une redirection 301 vers le produit de remplacement ou la page de categorie la plus pertinente. Retirez l'URL arretee de votre sitemap et ajoutez l'URL cible de redirection si elle n'y est pas deja.\n\nNe laissez jamais des centaines d'URLs de produits arretes retournant des 404 dans votre sitemap. Cela erode la confiance de Google dans la fiabilite de votre sitemap et gaspille le budget de crawl. Effectuez un nettoyage trimestriel pour retirer toute URL non-200 de vos fichiers sitemap.",
          items: [
            "Temporairement en rupture : garder dans le sitemap avec statut de disponibilite mis a jour",
            "Definitivement arrete sans autorite : retirer du sitemap, laisser retourner 404",
            "Arrete avec backlinks precieux : redirection 301 vers la page pertinente la plus proche",
            "Ne jamais laisser d'URLs 404 dans votre sitemap ; effectuer des nettoyages trimestriels",
            "Mettre a jour le statut de disponibilite dans les donnees structurees pour les produits en rupture",
          ],
          tip: "Creez un processus automatise qui retire les URLs produits de votre sitemap quand elles retournent des codes de statut non-200 pendant plus de sept jours consecutifs.",
          image: {
            src: "/images/academy/fr/sitemap-lastmod-signal.svg",
            alt: "Comparaison des dates de dernière modification précises liées aux changements de contenu réels par rapport aux implémentations incorrectes où toutes les dates sont définies aujourd'hui",
            caption: "Des dates de dernière modification précises liées aux changements réels entraînent une indexation 30 % plus rapide. Fixer toutes les dates à aujourd’hui détruit entièrement le signal.",
          },
          callout: {
            title: "Lastmod-Fehler",
            text: "Les magasins qui fixent toutes les dates de dernière modification à la date d'aujourd'hui à chaque reconstruction de plan de site apprennent à Google à ignorer complètement le signal. Corrigez ce problème en liant lastmod aux changements réels de prix, de stock ou de description.",
          },
        },
        {
          title: "Coordonner robots.txt et sitemaps pour un impact maximum",
          content:
            "Robots.txt et sitemaps XML doivent fonctionner ensemble comme un systeme coordonne. Votre robots.txt indique aux moteurs de recherche ce qu'il ne faut pas explorer, tandis que votre sitemap leur dit ce qu'il faut prioriser. Des signaux contradictoires entre ces deux fichiers creent de la confusion et du gaspillage.\n\nL'echec de coordination le plus courant est d'inclure dans votre sitemap des URLs bloquees par robots.txt. Si votre robots.txt contient Disallow: /search et que votre sitemap inclut des URLs comme /search?q=terme-populaire, vous envoyez des signaux contradictoires. Nettoyez votre sitemap pour assurer zero chevauchement avec les regles Disallow du robots.txt.\n\nUn deuxieme probleme de coordination concerne les URLs canoniques. Votre sitemap ne devrait contenir que la version canonique de chaque URL. Si un produit est accessible a /products/chaussures et a /categorie/chaussures?product=chaussures, seule l'URL canonique devrait apparaitre dans le sitemap.\n\nPour les grands sites e-commerce, creez une strategie de crawl par paliers. Utilisez robots.txt pour bloquer les patterns d'URL qui ne devraient jamais etre explores. Utilisez les sitemaps pour declarer proactivement quelles URLs sont les plus importantes. Utilisez le maillage interne pour renforcer la priorite de crawl pour vos pages produits et categories les plus precieuses.\n\nEnfin, surveillez les deux fichiers en continu. Configurez des alertes pour les changements de votre robots.txt et planifiez une validation hebdomadaire du sitemap. Un deploiement qui modifie accidentellement le robots.txt ou casse la generation du sitemap peut prendre des semaines a recuperer.",
          items: [
            "N'incluez jamais dans votre sitemap des URLs bloquees par robots.txt",
            "N'incluez que les versions canoniques des URLs dans votre sitemap",
            "Utilisez robots.txt pour bloquer, les sitemaps pour prioriser et les liens internes pour renforcer",
            "Surveillez les deux fichiers en continu ; les mises a jour de plateforme peuvent modifier silencieusement robots.txt",
            "Planifiez une validation hebdomadaire du sitemap pour detecter les URLs nouvellement cassees",
          ],
          tip: "Apres chaque mise a jour de plateforme ou changement de theme, verifiez immediatement votre robots.txt et regenerez votre sitemap. Croisez les deux fichiers pour vous assurer qu'aucune URL du sitemap n'est bloquee et qu'aucune page critique ne manque dans le sitemap.",
        },
      ],
      navLabels: {
        previous: "Balises canonical pour le e-commerce",
        next: "SEO de la navigation a facettes",
      },
    },
    es: {
      badge: "SEO Técnico",
      heading: "Robots.txt y Sitemaps XML",
      intro: "Tu archivo robots.txt y los sitemaps XML son dos de los archivos de [SEO técnico](/blog/technical-seo-for-ecommerce) mas fundamentales de tu tienda de ecommerce. Juntos, controlan lo que los motores de busqueda pueden rastrear y proporcionan un mapa de las páginas que deseas indexar. Configurarlos incorrectamente puede ocultar tus mejores productos de Google o inundar el indice con páginas de filtros de bajo valor que canibalizan tus rankings.",
      readTime: "12 min de lectura",
      sections: [
        {
          title: "Fundamentos de robots.txt para ecommerce",
          content:
            "El archivo robots.txt se encuentra en la raiz de tu dominio (example.com/robots.txt) y proporciona directivas de rastreo a los bots de los motores de busqueda. Utiliza una sintaxis simple: User-agent especifica a que bot se aplican las reglas, Disallow bloquea rutas de URL especificas del rastreo, y Allow anula un Disallow para sub-rutas especificas. El archivo es accesible publicamente, asi que nunca lo uses para ocultar contenido sensible.\n\nPara tiendas de ecommerce, robots.txt cumple un rol critico en la [gestion del presupuesto de rastreo](/academy/crawl-budget-management). Sin restricciones, los bots intentaran rastrear cada URL descubrible en tu sitio, incluyendo paginas del carrito, flujos de pago, paginas de cuenta, resultados de busqueda interna y miles de URLs de navegacion facetada. Estas paginas desperdician presupuesto de rastreo y pueden crear problemas de contenido duplicado si se indexan.\n\nUna idea erronea comun es que robots.txt previene la indexacion. No lo hace. Robots.txt solo previene el rastreo. Si otra pagina enlaza a una URL bloqueada, Google puede aun indexar esa URL basandose en el texto ancla y el contexto circundante, mostrandola en resultados de busqueda con el mensaje \"No hay informacion disponible para esta pagina.\"\n\nCada tienda de ecommerce debe probar su archivo robots.txt usando la herramienta de prueba de robots.txt en [Google Search Console](/academy/google-search-console-for-stores) antes de implementar cambios. Un unico comodin mal ubicado o una regla Disallow demasiado amplia puede bloquear accidentalmente todo tu catalogo de productos del rastreo.",
          items: [
            "Robots.txt se encuentra en la raiz de tu dominio y controla que URLs pueden rastrear los bots",
            "User-agent, Disallow y Allow son las tres directivas principales",
            "Robots.txt previene el rastreo, no la indexacion; las paginas bloqueadas pueden aparecer en resultados",
            "Siempre prueba cambios en robots.txt en Google Search Console antes de implementar en produccion",
          ],
          tip: "Mantiene una copia de seguridad de tu robots.txt antes de hacer cambios. Un archivo robots.txt roto que accidentalmente bloquea todo (Disallow: /) puede causar perdida catastrofica de trafico organico en dias.",
        },
        {
          title: "Reglas esenciales de robots.txt para tiendas online",
          content:
            "Cada robots.txt de ecommerce debe bloquear varias categorias de URLs de bajo valor. Las paginas de carrito y pago (/cart, /checkout, /account) no proporcionan valor SEO y contienen contenido especifico del usuario. Las paginas de resultados de busqueda interna (/search?q=) generan miles de paginas de contenido delgado que duplican tus listados de categorias y pueden llevar a canibalizacion de palabras clave.\n\nLos parametros de navegacion facetada representan la mayor fuente de desperdicio de rastreo en la mayoria de las tiendas. Reglas como Disallow: /*?color=, Disallow: /*?size=, Disallow: /*?brand= y Disallow: /*?sort= previenen que los bots rastreen la explosion combinatoria de URLs de filtros. Se estrategico sobre que parametros bloquear. Si tu tienda tiene paginas SEO optimizadas para marcas especificas, no bloquees el parametro de marca globalmente.\n\nLos parametros de ordenacion siempre deben bloquearse. URLs como /categoria?sort=precio-asc y /categoria?sort=mas-recientes muestran los mismos productos en diferente orden y agregan cero contenido unico. De manera similar, los parametros de paginacion mas alla de una profundidad razonable pueden restringirse.\n\nSiempre incluye una directiva Sitemap al final de tu robots.txt apuntando a tu sitemap XML. Esto ayuda a los motores de busqueda a descubrir tu sitemap. El formato es simple: Sitemap: https://www.example.com/sitemap.xml.",
          items: [
            "Bloquear paginas de carrito, pago y cuenta del rastreo",
            "Bloquear URLs de busqueda interna para prevenir indexacion de contenido delgado",
            "Bloquear parametros de navegacion facetada selectivamente, preservando paginas de filtro SEO valiosas",
            "Siempre bloquear parametros de ordenacion ya que crean cero contenido unico",
            "Incluir la URL de tu sitemap al final de robots.txt para descubrimiento",
          ],
          tip: "Usa patrones de comodines con cuidado. Disallow: /*? bloquearia todas las URLs con cualquier parametro de consulta, incluyendo potencialmente valiosos. En su lugar, bloquea nombres de parametros especificos individualmente.",
          image: {
            src: "/images/academy/es/robots-sitemap-coordination.svg",
            alt: "Diagrama que muestra robots.txt bloqueando URL de bajo valor a la izquierda, mientras que los mapas de sitio XML priorizan URL de productos, categorías y blogs valiosos a la derecha.",
            caption: "Los mapas de sitio Robots.txt y XML deben funcionar como un sistema coordinado: bloquear lo que no se debe rastrear, priorizar lo que se debe rastrear.",
          },
          callout: {
            title: "Null-Ueberschneidungs-Regel",
            text: "Nunca incluyas URL en tu mapa del sitio que estén bloqueadas por robots.txt. Esta contradicción desperdicia el esfuerzo de Google y erosiona la confianza en ambos archivos. Referencia cruzada después de cada actualización de la plataforma.",
          },
        },
        {
          title: "Estructura de sitemaps XML para catálogos de productos",
          content:
            "Un sitemap XML es un archivo estructurado que lista las URLs que quieres que los motores de busqueda descubran e indexen. Para tiendas de ecommerce con grandes catalogos, la arquitectura correcta del sitemap es critica porque influye directamente en que paginas Google prioriza para rastreo e indexacion.\n\nUsa un archivo indice de sitemaps como sitemap principal que referencia multiples sitemaps hijos organizados por tipo de contenido. Una estructura tipica incluye sitemaps separados para paginas de productos (sitemap-products.xml), paginas de categorias (sitemap-categories.xml), publicaciones de blog (sitemap-blog.xml) y paginas estaticas (sitemap-pages.xml).\n\nCada sitemap XML tiene un limite de 50,000 URLs y 50 MB de tamano sin comprimir. Para tiendas con mas de 50,000 productos, divide tu sitemap de productos en multiples archivos, idealmente organizados por categoria o departamento. Este agrupamiento logico facilita el seguimiento de tasas de indexacion por categoria en Google Search Console.\n\nCada URL en tu sitemap debe ser la version canonical de esa pagina. Nunca incluyas URLs que redirigen, devuelven errores 404, tienen etiquetas noindex o estan bloqueadas por robots.txt. Incluir estas URLs desperdicia el esfuerzo de rastreo de Google y erosiona la confianza en la precision de tu archivo sitemap.",
          items: [
            "Usa un archivo indice de sitemaps que referencie sitemaps hijos separados por tipo de contenido",
            "Respeta el limite de 50,000 URLs y 50 MB por archivo sitemap",
            "Divide grandes catalogos en archivos sitemap basados en categorias",
            "Solo incluye URLs canonicas e indexables que devuelvan codigo de estado 200",
            "Nunca incluyas URLs redirigidas, con noindex o bloqueadas por robots.txt en sitemaps",
          ],
          tip: "Envía tu sitemap a traves de Google Search Console y revisa el informe de cobertura regularmente. GSC te dira exactamente cuantas URLs de tu sitemap fueron indexadas, excluidas o tuvieron errores.",
        },
        {
          title: "Lastmod, Priority y Changefreq: lo que realmente importa",
          content:
            "Los sitemaps XML soportan varios atributos opcionales para cada URL: lastmod (fecha de ultima modificacion), priority (importancia relativa de 0.0 a 1.0) y changefreq (frecuencia de cambio esperada). En la practica, solo lastmod proporciona valor significativo. Google ha declarado publicamente que ignora completamente los atributos priority y changefreq porque los webmasters los configuran incorrectamente con tanta frecuencia que no llevan senal confiable.\n\nEl atributo lastmod indica a los motores de busqueda cuando el contenido de una pagina fue significativamente actualizado por ultima vez. Es una senal genuina que Google usa para priorizar el re-rastreo. Cuando actualizas el precio, disponibilidad, descripcion o imagenes de un producto, la fecha lastmod debe reflejar ese cambio.\n\nEl error critico que muchas tiendas cometen es establecer lastmod a la fecha actual para todas las paginas cada vez que el sitemap se regenera. Si tu sitemap se reconstruye cada noche y marca cada URL con la fecha de hoy, Google aprende rapidamente que tus fechas lastmod son insignificantes. Hemos auditado tiendas donde solo corregir fechas lastmod inexactas resulto en indexacion 30% mas rapida de actualizaciones de productos.\n\nPara ecommerce especificamente, vincula lastmod a cambios reales de datos en tu sistema de gestion de informacion de productos. Cuando cambian niveles de inventario, cuando se actualizan precios, cuando se publican nuevas resenas, actualiza la fecha lastmod para esas URLs de producto especificas.",
          items: [
            "Lastmod es el unico atributo de sitemap que Google realmente usa como senal de rastreo",
            "Google ignora publicamente los valores de priority y changefreq establecidos por webmasters",
            "Establecer todos los lastmod a la fecha actual destruye la senal para Google",
            "Vincula fechas lastmod a cambios reales de contenido: actualizaciones de precio, nuevas resenas, ediciones de descripcion",
          ],
          tip: "Despues de corregir tu implementacion de lastmod, monitorea el informe de estadisticas de rastreo en Google Search Console. Deberias ver a Google redirigir su foco de rastreo hacia paginas recientemente actualizadas en dos a cuatro semanas.",
        },
        {
          title: "Gestionar productos agotados en sitemaps",
          content:
            "Los productos agotados presentan un desafio unico de sitemaps para tiendas de ecommerce. El enfoque correcto depende de si el producto esta temporalmente no disponible o permanentemente descontinuado, y si la pagina del producto ha acumulado backlinks y autoridad de busqueda valiosos.\n\nPara productos temporalmente agotados que esperas reabastecer, mantiene la pagina del producto activa y en tu sitemap. Actualiza la pagina para indicar claramente que el producto esta actualmente no disponible y ofrece alternativas o registro de notificacion de reabastecimiento.\n\nPara productos permanentemente descontinuados sin valor SEO, retiralos de tu sitemap y eventualmente del sitio. Dejalos devolver 404 naturalmente.\n\nPara productos descontinuados con autoridad de backlinks significativa, implementa una redireccion 301 al producto de reemplazo o pagina de categoria mas relevante. Retira la URL descontinuada de tu sitemap y agrega la URL destino de redireccion.\n\nNunca dejes cientos de URLs de productos descontinuados que devuelven 404 en tu sitemap. Esto erosiona la confianza de Google en la precision de tu sitemap y desperdicia presupuesto de rastreo. Ejecuta una limpieza trimestral para eliminar cualquier URL no-200 de tus archivos de sitemap.",
          items: [
            "Temporalmente agotado: mantener en sitemap con estado de disponibilidad actualizado",
            "Permanentemente descontinuado sin autoridad: retirar del sitemap, dejar devolver 404",
            "Descontinuado con backlinks valiosos: redireccion 301 a la pagina relevante mas cercana",
            "Nunca dejar URLs 404 en tu sitemap; ejecutar limpiezas trimestrales",
            "Actualizar estado de disponibilidad en datos estructurados para productos agotados",
          ],
          tip: "Crea un proceso automatizado que retire URLs de productos de tu sitemap cuando devuelvan codigos de estado no-200 durante mas de siete dias consecutivos.",
          image: {
            src: "/images/academy/es/sitemap-lastmod-signal.svg",
            alt: "Comparación de fechas precisas de última modificación vinculadas a cambios de contenido reales versus implementaciones incorrectas donde todas las fechas se establecen en hoy",
            caption: "Las fechas precisas de la última modificación vinculadas a cambios reales dan como resultado una indexación un 30 % más rápida. Establecer todas las fechas en hoy destruye la señal por completo.",
          },
          callout: {
            title: "Lastmod-Fehler",
            text: "Las tiendas que establecen todas las fechas de última modificación en la fecha de hoy en cada reconstrucción del mapa del sitio le enseñan a Google a ignorar la señal por completo. Solucione este problema vinculando lastmod a los cambios reales en el precio, el stock o la descripción.",
          },
        },
        {
          title: "Coordinar robots.txt y sitemaps para maximo impacto",
          content:
            "Robots.txt y sitemaps XML deben trabajar juntos como un sistema coordinado. Tu robots.txt dice a los motores de busqueda que no rastrear, mientras tu sitemap les dice que priorizar. Senales contradictorias entre estos dos archivos crean confusion y esfuerzo desperdiciado.\n\nLa falla de coordinacion mas comun es incluir URLs en tu sitemap que estan bloqueadas por robots.txt. Si tu robots.txt contiene Disallow: /search y tu sitemap incluye URLs como /search?q=termino-popular, estas enviando senales contradictorias. Limpia tu sitemap para asegurar cero solapamiento con reglas Disallow de robots.txt.\n\nUn segundo problema de coordinacion involucra URLs canonicas. Tu sitemap debe contener solo la version canonical de cada URL. Si un producto es accesible en /products/zapatos y en /categoria/calzado?product=zapatos, solo la URL canonical debe aparecer en el sitemap.\n\nPara grandes sitios de ecommerce, crea una estrategia de rastreo escalonada. Usa robots.txt para bloquear patrones de URL que nunca deben rastrearse. Usa sitemaps para declarar proactivamente que URLs son mas importantes. Usa enlaces internos para reforzar la prioridad de rastreo para tus paginas de productos y categorias de mayor valor.\n\nFinalmente, monitorea ambos archivos continuamente. Configura alertas para cambios en tu robots.txt y programa validacion semanal del sitemap. Un despliegue que modifique inadvertidamente robots.txt o rompa la generacion del sitemap puede tomar semanas en recuperarse.",
          items: [
            "Nunca incluyas URLs en tu sitemap que esten bloqueadas por robots.txt",
            "Solo incluye versiones canonicas de URLs en tu sitemap",
            "Usa robots.txt para bloquear, sitemaps para priorizar y enlaces internos para reforzar",
            "Monitorea ambos archivos continuamente; actualizaciones de plataforma pueden modificar robots.txt silenciosamente",
            "Programa validacion semanal del sitemap para detectar URLs recientemente rotas",
          ],
          tip: "Despues de cada actualizacion de plataforma o cambio de tema, verifica inmediatamente tu robots.txt y regenera tu sitemap. Cruza ambos archivos para asegurar que ninguna URL del sitemap este bloqueada y que ninguna pagina critica falte en el sitemap.",
        },
      ],
      navLabels: {
        previous: "Etiquetas canonical para ecommerce",
        next: "SEO de navegacion facetada",
      },
    },
    it: {
      badge: "SEO Tecnica",
      heading: "Robots.txt e Sitemap XML",
      intro:
        "Il tuo file robots.txt e le sitemap XML sono due dei file SEO tecnici piu fondamentali del tuo negozio ecommerce. Insieme, controllano cosa i motori di ricerca possono scansionare e forniscono una mappa delle pagine che vuoi indicizzare. Configurarli in modo errato puo nascondere i tuoi migliori prodotti da Google o inondare l'indice con pagine di filtri di basso valore che cannibalizzano i tuoi posizionamenti. Approfondisci con la nostra guida sulla [gestione del budget di crawl](/academy/crawl-budget-management).",
      readTime: "12 min di lettura",
      sections: [
        {
          title: "Fondamenti del robots.txt per l'ecommerce",
          content:
            "Il file robots.txt si trova alla radice del tuo dominio (example.com/robots.txt) e fornisce direttive di crawling ai bot dei motori di ricerca. Utilizza una sintassi semplice: User-agent specifica quale bot e interessato dalle regole, Disallow blocca percorsi URL specifici dalla scansione, e Allow annulla un Disallow per sotto-percorsi specifici. Il file e accessibile pubblicamente, quindi non usarlo mai per nascondere contenuto sensibile.\n\nPer i negozi ecommerce, robots.txt svolge un ruolo critico nella gestione del budget di crawl. Senza restrizioni, i bot tenteranno di scansionare ogni URL scopribile sul tuo sito, incluse pagine carrello, flussi di pagamento, pagine account, risultati di ricerca interna e migliaia di URL di navigazione a faccette. Queste pagine sprecano budget di crawl e possono creare problemi di contenuto duplicato se vengono indicizzate. Per approfondire, consulta la nostra guida sulla [SEO tecnica per l'ecommerce](/blog/technical-seo-for-ecommerce).\n\nUn'idea errata comune e che robots.txt prevenga l'indicizzazione. Non lo fa. Robots.txt previene solo la scansione. Se un'altra pagina contiene un link a un URL bloccato, Google puo comunque indicizzare quell'URL basandosi sul testo ancora e sul contesto circostante.\n\nOgni negozio ecommerce dovrebbe testare il proprio file robots.txt usando lo strumento di test robots.txt di [Google Search Console](/academy/google-search-console-for-stores) prima di implementare modifiche. Un singolo carattere jolly mal posizionato o una regola Disallow troppo ampia puo accidentalmente bloccare l'intero catalogo prodotti dalla scansione.",
          items: [
            "Robots.txt si trova alla radice del dominio e controlla quali URL i bot possono scansionare",
            "User-agent, Disallow e Allow sono le tre direttive principali",
            "Robots.txt previene la scansione, non l'indicizzazione; le pagine bloccate possono comunque apparire nei risultati",
            "Testa sempre le modifiche al robots.txt in Google Search Console prima dell'implementazione",
          ],
          tip: "Mantieni un backup del tuo robots.txt prima di apportare modifiche. Un file robots.txt rotto che accidentalmente blocca tutto (Disallow: /) puo causare una perdita catastrofica di traffico organico in pochi giorni.",
        },
        {
          title: "Regole robots.txt essenziali per i negozi online",
          content:
            "Ogni robots.txt ecommerce dovrebbe bloccare diverse categorie di URL di basso valore. Le pagine carrello e pagamento (/cart, /checkout, /account) non forniscono valore SEO e contengono contenuto specifico dell'utente. Le pagine di risultati di ricerca interna (/search?q=) generano migliaia di pagine a contenuto sottile che duplicano i tuoi elenchi di categorie e possono portare a cannibalizzazione delle keyword.\n\nI parametri di navigazione a faccette rappresentano la maggiore fonte di spreco di crawl nella maggior parte dei negozi. Regole come Disallow: /*?color=, Disallow: /*?size=, Disallow: /*?brand= e Disallow: /*?sort= impediscono ai bot di scansionare l'esplosione combinatoria degli URL dei filtri. Sii strategico su quali parametri bloccare. Se il tuo negozio ha pagine SEO ottimizzate per marchi specifici, non bloccare il parametro marca globalmente.\n\nI parametri di ordinamento dovrebbero sempre essere bloccati. URL come /categoria?sort=prezzo-asc e /categoria?sort=piu-recenti mostrano gli stessi prodotti in ordine diverso e aggiungono zero contenuto unico. Similmente, i parametri di paginazione oltre una profondita ragionevole possono essere limitati.\n\nIncludi sempre una direttiva Sitemap alla fine del tuo robots.txt che punta alla tua sitemap XML. Questo aiuta i motori di ricerca a scoprire la tua sitemap. Il formato e semplice: Sitemap: https://www.example.com/sitemap.xml.",
          items: [
            "Bloccare pagine carrello, pagamento e account dalla scansione",
            "Bloccare URL di ricerca interna per prevenire indicizzazione di contenuto sottile",
            "Bloccare parametri di navigazione a faccette selettivamente, preservando pagine filtro SEO preziose",
            "Bloccare sempre i parametri di ordinamento poiche creano zero contenuto unico",
            "Includere l'URL della sitemap alla fine del robots.txt per la scoperta",
          ],
          tip: "Usa i pattern jolly con attenzione. Disallow: /*? bloccherebbe tutti gli URL con qualsiasi parametro di query, inclusi quelli potenzialmente preziosi. Blocca invece singolarmente nomi di parametri specifici.",
          image: {
            src: "/images/academy/it/robots-sitemap-coordination.svg",
            alt: "Diagramma che mostra il file robots.txt che blocca gli URL di basso valore sulla sinistra, mentre le mappe dei siti XML danno priorità agli URL di prodotti, categorie e blog di valore sulla destra",
            caption: "Robots.txt e le sitemap XML devono funzionare come un sistema coordinato: bloccare ciò che non deve essere scansionato, dare priorità a ciò che dovrebbe.",
          },
          callout: {
            title: "Null-Ueberschneidungs-Regel",
            text: "Non includere mai nella mappa del sito URL bloccati da robots.txt. Questa contraddizione vanifica gli sforzi di Google ed erode la fiducia in entrambi i file. Riferimento incrociato dopo ogni aggiornamento della piattaforma.",
          },
        },
        {
          title: "Struttura delle sitemap XML per i cataloghi prodotti",
          content:
            "Una sitemap XML e un file strutturato che elenca gli URL che vuoi che i motori di ricerca scoprano e indicizzino. Per i negozi ecommerce con grandi cataloghi, un'architettura sitemap appropriata e fondamentale perche influenza direttamente quali pagine Google priorizza per la scansione e l'indicizzazione.\n\nUsa un file indice sitemap come sitemap principale che referenzia multiple sitemap figlie organizzate per tipo di contenuto. Una struttura sitemap ecommerce tipica include sitemap separate per pagine prodotto (sitemap-products.xml), pagine categoria (sitemap-categories.xml), articoli blog (sitemap-blog.xml) e pagine statiche (sitemap-pages.xml).\n\nOgni sitemap XML ha un limite di 50.000 URL e 50 MB di dimensione non compressa. Per negozi con piu di 50.000 prodotti, dividi la tua sitemap prodotti in piu file, idealmente organizzati per categoria o reparto. Questo raggruppamento logico facilita il monitoraggio dei tassi di indicizzazione per categoria in Google Search Console.\n\nOgni URL nella tua sitemap dovrebbe essere la versione canonica di quella pagina. Non includere mai URL che reindirizzano, restituiscono errori 404, hanno tag noindex o sono bloccati da robots.txt. Includere questi URL spreca lo sforzo di scansione di Google e erode la fiducia nell'affidabilita del tuo file sitemap.",
          items: [
            "Usa un file indice sitemap che referenzia sitemap figlie separate per tipo di contenuto",
            "Rispetta il limite di 50.000 URL e 50 MB per file sitemap",
            "Dividi i grandi cataloghi in file sitemap basati sulle categorie",
            "Includi solo URL canonici e indicizzabili che restituiscono codice di stato 200",
            "Non includere mai URL reindirizzati, con noindex o bloccati da robots.txt nelle sitemap",
          ],
          tip: "Invia la tua sitemap tramite Google Search Console e controlla il rapporto di copertura regolarmente. GSC ti dira esattamente quanti URL dalla tua sitemap sono stati indicizzati, esclusi o hanno avuto errori.",
        },
        {
          title: "Lastmod, Priority e Changefreq: cosa conta davvero",
          content:
            "Le sitemap XML supportano diversi attributi opzionali per ogni URL: lastmod (data dell'ultima modifica), priority (importanza relativa da 0,0 a 1,0) e changefreq (frequenza di cambiamento prevista). In pratica, solo lastmod fornisce valore significativo. Google ha dichiarato pubblicamente che ignora completamente gli attributi priority e changefreq perche i webmaster li impostano incorrettamente cosi spesso che non portano alcun segnale affidabile.\n\nL'attributo lastmod indica ai motori di ricerca quando il contenuto di una pagina e stato significativamente aggiornato l'ultima volta. E un segnale genuino che Google usa per priorizzare il ri-crawl. Quando aggiorni il prezzo, la disponibilita, la descrizione o le immagini di un prodotto, la data lastmod dovrebbe riflettere quel cambiamento.\n\nL'errore critico che molti negozi commettono e impostare lastmod alla data corrente per tutte le pagine ogni volta che la sitemap si rigenera. Se la tua sitemap si ricostruisce ogni notte e marca ogni URL con la data odierna, Google impara rapidamente che le tue date lastmod sono insignificanti. Abbiamo verificato negozi dove la sola correzione delle date lastmod inaccurate ha portato a un'indicizzazione piu veloce del 30% degli aggiornamenti prodotto.\n\nPer l'ecommerce nello specifico, collega lastmod ai cambiamenti reali dei dati nel tuo sistema di gestione delle informazioni prodotto. Quando cambiano i livelli di inventario, quando si aggiornano i prezzi, quando vengono pubblicate nuove recensioni, aggiorna la data lastmod per quegli URL prodotto specifici.",
          items: [
            "Lastmod e l'unico attributo sitemap che Google usa realmente come segnale di crawl",
            "Google ignora pubblicamente i valori priority e changefreq impostati dai webmaster",
            "Impostare tutti i lastmod alla data corrente distrugge il segnale per Google",
            "Collega le date lastmod a cambiamenti reali di contenuto: aggiornamenti prezzo, nuove recensioni, modifiche descrizione",
          ],
          tip: "Dopo aver corretto la tua implementazione lastmod, monitora il rapporto statistiche di crawl in Google Search Console. Dovresti vedere Google spostare il suo focus di crawl verso pagine aggiornate di recente entro due-quattro settimane.",
        },
        {
          title: "Gestire i prodotti esauriti nelle sitemap",
          content:
            "I prodotti esauriti presentano una sfida sitemap unica per i negozi ecommerce. L'approccio corretto dipende dal fatto che il prodotto sia temporaneamente non disponibile o permanentemente fuori produzione, e dal fatto che la pagina prodotto abbia accumulato backlink e autorita di ricerca preziosi.\n\nPer i prodotti temporaneamente esauriti che prevedi di rifornire, mantieni la pagina prodotto attiva e nella tua sitemap. Aggiorna la pagina per indicare chiaramente che il prodotto e attualmente non disponibile e offri alternative o un'iscrizione per la notifica di rifornimento.\n\nPer i prodotti permanentemente fuori produzione senza valore SEO, rimuovili dalla tua sitemap e eventualmente dal sito. Lasciali restituire naturalmente un 404.\n\nPer i prodotti fuori produzione con autorita di backlink significativa, implementa un redirect 301 al prodotto sostitutivo o alla pagina categoria piu rilevante. Rimuovi l'URL fuori produzione dalla tua sitemap e aggiungi l'URL target del redirect.\n\nNon lasciare mai centinaia di URL di prodotti fuori produzione che restituiscono 404 nella tua sitemap. Questo erode la fiducia di Google nell'affidabilita della tua sitemap e spreca budget di crawl. Esegui una pulizia trimestrale per rimuovere qualsiasi URL non-200 dai tuoi file sitemap.",
          items: [
            "Temporaneamente esaurito: mantenere nella sitemap con stato di disponibilita aggiornato",
            "Permanentemente fuori produzione senza autorita: rimuovere dalla sitemap, lasciare restituire 404",
            "Fuori produzione con backlink preziosi: redirect 301 alla pagina rilevante piu vicina",
            "Non lasciare mai URL 404 nella sitemap; eseguire pulizie trimestrali",
            "Aggiornare lo stato di disponibilita nei dati strutturati per i prodotti esauriti",
          ],
          tip: "Crea un processo automatizzato che rimuova gli URL prodotto dalla tua sitemap quando restituiscono codici di stato non-200 per piu di sette giorni consecutivi.",
          image: {
            src: "/images/academy/it/sitemap-lastmod-signal.svg",
            alt: "Confronto tra date lastmod precise legate a modifiche dei contenuti reali e implementazioni errate in cui tutte le date sono impostate su oggi",
            caption: "Le date lastmod precise legate ai cambiamenti reali determinano un'indicizzazione più rapida del 30%. Impostare tutte le date a oggi distrugge completamente il segnale.",
          },
          callout: {
            title: "Lastmod-Fehler",
            text: "I negozi che impostano tutte le date Lastmod sulla data odierna su ogni ricostruzione della mappa del sito insegnano a Google a ignorare completamente il segnale. Risolvi questo problema collegando LastMod alle modifiche effettive del prezzo, dello stock o della descrizione.",
          },
        },
        {
          title: "Coordinare robots.txt e sitemap per il massimo impatto",
          content:
            "Robots.txt e sitemap XML devono lavorare insieme come un sistema coordinato. Il tuo robots.txt dice ai motori di ricerca cosa non scansionare, mentre la tua sitemap dice loro cosa priorizzare. Segnali contrastanti tra questi due file creano confusione e sforzo sprecato.\n\nIl fallimento di coordinazione piu comune e includere nella tua sitemap URL bloccati da robots.txt. Se il tuo robots.txt contiene Disallow: /search e la tua sitemap include URL come /search?q=termine-popolare, stai inviando segnali contraddittori. Pulisci la tua sitemap per garantire zero sovrapposizione con le regole Disallow del robots.txt.\n\nUn secondo problema di coordinazione riguarda gli URL canonici. La tua sitemap dovrebbe contenere solo la versione canonica di ogni URL. Se un prodotto e accessibile sia a /products/scarpe che a /categoria/calzature?product=scarpe, solo l'URL canonico dovrebbe apparire nella sitemap.\n\nPer i grandi siti ecommerce, crea una strategia di crawl a livelli. Usa robots.txt per bloccare pattern di URL che non dovrebbero mai essere scansionati. Usa le sitemap per dichiarare proattivamente quali URL sono piu importanti. Usa i link interni per rafforzare la priorita di crawl per le tue pagine prodotto e categoria di maggior valore.\n\nInfine, monitora entrambi i file continuamente. Imposta avvisi per modifiche al tuo robots.txt e programma una validazione settimanale della sitemap. Un deployment che modifica inavvertitamente il robots.txt o rompe la generazione della sitemap puo richiedere settimane per il recupero.",
          items: [
            "Non includere mai nella sitemap URL bloccati da robots.txt",
            "Includere solo versioni canoniche degli URL nella sitemap",
            "Usa robots.txt per bloccare, sitemap per priorizzare e link interni per rafforzare",
            "Monitora entrambi i file continuamente; gli aggiornamenti della piattaforma possono modificare silenziosamente robots.txt",
            "Programma validazione settimanale della sitemap per individuare URL appena rotti",
          ],
          tip: "Dopo ogni aggiornamento della piattaforma o cambio tema, verifica immediatamente il tuo robots.txt e rigenera la tua sitemap. Incrocia i due file per assicurarti che nessun URL della sitemap sia bloccato e che nessuna pagina critica manchi dalla sitemap.",
        },
      ],
      navLabels: {
        previous: "Tag canonical per l'ecommerce",
        next: "SEO della navigazione a faccette",
      },
    },
    nl: {
      badge: "Technische SEO",
      heading: "Robots.txt en XML-sitemaps",
      intro:
        "Je robots.txt-bestand en XML-sitemaps zijn twee van de meest fundamentele technische SEO-bestanden in je ecommerce-winkel. Samen bepalen ze wat zoekmachines kunnen crawlen en bieden ze een routekaart van de pagina's die je geindexeerd wilt hebben. Deze verkeerd instellen kan je beste producten voor Google verbergen of de index overspoelen met filterpagin's van lage waarde die je rankings kannibaliseren.\n\nEffectief [crawlbudgetbeheer](/academy/crawl-budget-management) helpt je de aandacht van Google te richten op je meest waardevolle pagina's.",
      readTime: "12 min leestijd",
      sections: [
        {
          title: "Robots.txt-basisprincipes voor ecommerce",
          content:
            "Het robots.txt-bestand staat in de root van je domein (example.com/robots.txt) en geeft crawl-instructies aan zoekmachinebots. Het gebruikt een eenvoudige syntax: User-agent specificeert welke bot de regels betreffen, Disallow blokkeert specifieke URL-paden van crawling, en Allow overschrijft een Disallow voor specifieke sub-paden. Het bestand is publiek toegankelijk, dus gebruik het nooit om gevoelige content te verbergen.\n\nVoor ecommerce-winkels speelt robots.txt een cruciale rol bij het beheren van crawlbudget. Zonder beperkingen proberen bots elke vindbare URL op je site te crawlen, inclusief winkelmandpagina's, afrekenflows, accountpagina's, interne zoekresultaten en duizenden facetnavigatie-URL's. Deze pagina's verspillen crawlbudget en kunnen problemen met dubbele content veroorzaken als ze worden geindexeerd.\n\nEen veelvoorkomend misverstand is dat robots.txt indexering voorkomt. Dat doet het niet. Robots.txt voorkomt alleen crawling. Als een andere pagina linkt naar een geblokkeerde URL, kan Google die URL nog steeds indexeren op basis van ankertekst en omringende context.\n\nElke ecommerce-winkel moet zijn robots.txt-bestand testen met de robots.txt-testtool in Google Search Console voordat wijzigingen worden doorgevoerd. Een enkel verkeerd geplaatst jokerteken of een te brede Disallow-regel kan per ongeluk je hele productcatalogus blokkeren van crawling.\n\nVoor een diepere duik in deze technische fundamenten, zie onze gids over [technische SEO voor ecommerce](/blog/technical-seo-for-ecommerce).",
          items: [
            "Robots.txt staat in de root van je domein en bepaalt welke URL's bots kunnen crawlen",
            "User-agent, Disallow en Allow zijn de drie kernrichtlijnen",
            "Robots.txt voorkomt crawling, niet indexering; geblokkeerde pagina's kunnen nog steeds in zoekresultaten verschijnen",
            "Test robots.txt-wijzigingen altijd in Google Search Console voordat je ze doorvoert",
          ],
          tip: "Bewaar een backup van je robots.txt voordat je wijzigingen aanbrengt. Een kapot robots.txt-bestand dat per ongeluk alles blokkeert (Disallow: /) kan binnen dagen leiden tot catastrofaal verlies van organisch verkeer.",
        },
        {
          title: "Essentiele robots.txt-regels voor webwinkels",
          content:
            "Elke ecommerce robots.txt moet verschillende categorieen URL's van lage waarde blokkeren. Winkelmand- en afrekenpagina's (/cart, /checkout, /account) bieden geen SEO-waarde en bevatten gebruikersspecifieke content. Interne zoekresultatenpagina's (/search?q=) genereren duizenden dunne-contentpagina's die je categorielijsten dupliceren en kunnen leiden tot keyword-kannibalisatie.\n\nFacetnavigatieparameters vertegenwoordigen de grootste bron van crawlverspilling in de meeste winkels. Regels zoals Disallow: /*?color=, Disallow: /*?size=, Disallow: /*?brand= en Disallow: /*?sort= voorkomen dat bots de combinatorische explosie van filter-URL's crawlen. Wees strategisch over welke parameters je blokkeert. Als je winkel sterke SEO-geoptimaliseerde pagina's heeft voor specifieke merken, blokkeer dan niet de merkparameter globaal.\n\nSorteerparameters moeten altijd worden geblokkeerd. URL's als /categorie?sort=prijs-oplopend en /categorie?sort=nieuwste tonen dezelfde producten in een andere volgorde en voegen nul unieke content toe. Evenzo kunnen paginatieparameters voorbij een redelijke diepte worden beperkt.\n\nVoeg altijd een Sitemap-richtlijn toe onderaan je robots.txt die naar je XML-sitemap wijst. Dit helpt zoekmachines je sitemap te ontdekken. Het formaat is eenvoudig: Sitemap: https://www.example.com/sitemap.xml.",
          items: [
            "Winkelmand-, afreken- en accountpagina's blokkeren van crawling",
            "Interne zoekresultaat-URL's blokkeren om dunne-content-indexering te voorkomen",
            "Facetnavigatieparameters selectief blokkeren, waardevolle SEO-filterpagina's behouden",
            "Sorteerparameters altijd blokkeren omdat ze nul unieke content creeren",
            "Je sitemap-URL onderaan robots.txt opnemen voor ontdekking",
          ],
          tip: "Gebruik jokertekenpatronen voorzichtig. Disallow: /*? zou alle URL's met welke queryparameter dan ook blokkeren, inclusief potentieel waardevolle. Blokkeer in plaats daarvan specifieke parameternamen individueel.",
          image: {
            src: "/images/academy/nl/robots-sitemap-coordination.svg",
            alt: "Diagram met aan de linkerkant robots.txt die URL's met een lage waarde blokkeert, terwijl XML-sitemaps aan de rechterkant prioriteit geven aan waardevolle product-, categorie- en blog-URL's",
            caption: "Robots.txt- en XML-sitemaps moeten als een gecoördineerd systeem werken: blokkeer wat niet mag worden gecrawld, geef prioriteit aan wat wel moet.",
          },
          callout: {
            title: "Null-Ueberschneidungs-Regel",
            text: "Neem nooit URL's op in uw sitemap die worden geblokkeerd door robots.txt. Deze tegenstrijdigheid verspilt de inspanningen van Google en tast het vertrouwen in beide bestanden aan. Kruisverwijzing na elke platformupdate.",
          },
        },
        {
          title: "XML-sitemapstructuur voor productcatalogi",
          content:
            "Een XML-sitemap is een gestructureerd bestand dat de URL's opsomt die je wilt dat zoekmachines ontdekken en indexeren. Voor ecommerce-winkels met grote productcatalogi is de juiste sitemap-architectuur cruciaal omdat het direct beinvloedt welke pagina's Google prioriseert voor crawling en indexering.\n\nGebruik een sitemap-indexbestand als je primaire sitemap die verwijst naar meerdere kind-sitemaps georganiseerd per contenttype. Een typische ecommerce-sitemapstructuur omvat aparte sitemaps voor productpagina's (sitemap-products.xml), categoriepagina's (sitemap-categories.xml), blogposts (sitemap-blog.xml) en statische pagina's (sitemap-pages.xml).\n\nElke XML-sitemap heeft een limiet van 50.000 URL's en 50 MB ongecomprimeerde bestandsgrootte. Voor winkels met meer dan 50.000 producten, splits je productsitemap in meerdere bestanden, idealiter georganiseerd per categorie of afdeling. Deze logische groepering maakt het gemakkelijker om indexeringspercentages per productcategorie te volgen in Google Search Console.\n\nElke URL in je sitemap moet de canonieke versie van die pagina zijn. Neem nooit URL's op die redirecten, 404-fouten retourneren, noindex-tags hebben of geblokkeerd zijn door robots.txt. Deze URL's opnemen verspilt Google's crawlinspanning en ondermijnt het vertrouwen in de nauwkeurigheid van je sitemapbestand.",
          items: [
            "Gebruik een sitemap-indexbestand dat verwijst naar aparte kind-sitemaps per contenttype",
            "Respecteer de limiet van 50.000 URL's en 50 MB per sitemapbestand",
            "Splits grote productcatalogi in categoriegebaseerde sitemapbestanden",
            "Neem alleen canonieke, indexeerbare URL's op die statuscode 200 retourneren",
            "Neem nooit omgeleide, noindexed of robots.txt-geblokkeerde URL's op in sitemaps",
          ],
          tip: "Dien je sitemap in via [Google Search Console](/academy/google-search-console-for-stores) en controleer het dekkingsrapport regelmatig. GSC vertelt je precies hoeveel URL's uit je sitemap zijn geindexeerd, uitgesloten of fouten hadden.",
        },
        {
          title: "Lastmod, Priority en Changefreq: wat er echt toe doet",
          content:
            "XML-sitemaps ondersteunen verschillende optionele attributen voor elke URL: lastmod (datum laatste wijziging), priority (relatief belang van 0,0 tot 1,0) en changefreq (verwachte wijzigingsfrequentie). In de praktijk biedt alleen lastmod betekenisvolle waarde. Google heeft publiekelijk verklaard dat het de attributen priority en changefreq volledig negeert omdat webmasters ze zo vaak onjuist instellen dat ze geen betrouwbaar signaal dragen.\n\nHet lastmod-attribuut vertelt zoekmachines wanneer de content van een pagina voor het laatst inhoudelijk is bijgewerkt. Dit is een echt signaal dat Google gebruikt om re-crawling te prioriteren. Wanneer je de prijs, beschikbaarheid, beschrijving of afbeeldingen van een product bijwerkt, moet de lastmod-datum die wijziging weerspiegelen.\n\nDe kritieke fout die veel winkels maken is lastmod instellen op de huidige datum voor alle pagina's elke keer dat de sitemap wordt geregenereerd. Als je sitemap elke nacht wordt herbouwd en elke URL met de datum van vandaag markeert, leert Google snel dat je lastmod-datums betekenisloos zijn. We hebben winkels geaudit waar alleen het corrigeren van onnauwkeurige lastmod-datums resulteerde in 30% snellere indexering van productupdates.\n\nVoor ecommerce specifiek, koppel lastmod aan daadwerkelijke datawijzigingen in je productinformatiesysteem. Wanneer voorraadniveaus veranderen, prijzen worden bijgewerkt, nieuwe reviews worden geplaatst of productbeschrijvingen worden bewerkt, werk dan de lastmod-datum bij voor die specifieke product-URL's.",
          items: [
            "Lastmod is het enige sitemap-attribuut dat Google daadwerkelijk als crawlsignaal gebruikt",
            "Google negeert publiekelijk priority- en changefreq-waarden ingesteld door webmasters",
            "Alle lastmod-datums op de huidige datum instellen vernietigt het signaal voor Google",
            "Koppel lastmod-datums aan echte contentwijzigingen: prijsupdates, nieuwe reviews, beschrijvingsaanpassingen",
          ],
          tip: "Na het corrigeren van je lastmod-implementatie, monitor het crawlstatistiekenrapport in Google Search Console. Je zou moeten zien dat Google zijn crawlfocus binnen twee tot vier weken verschuift naar recent bijgewerkte pagina's.",
        },
        {
          title: "Niet-voorradige producten in sitemaps beheren",
          content:
            "Niet-voorradige producten vormen een unieke sitemap-uitdaging voor ecommerce-winkels. De juiste aanpak hangt af van of het product tijdelijk niet beschikbaar of permanent uit het assortiment is, en of de productpagina waardevolle backlinks en zoekautoriteit heeft opgebouwd.\n\nVoor tijdelijk niet-voorradige producten die je verwacht te herbevoorraden, houd de productpagina actief en in je sitemap. Werk de pagina bij om duidelijk aan te geven dat het product momenteel niet beschikbaar is en bied alternatieven of een herbevoorrading-notificatie aan.\n\nVoor permanent uit het assortiment genomen producten zonder SEO-waarde, verwijder ze uit je sitemap en uiteindelijk van de site. Laat ze natuurlijk 404 retourneren.\n\nVoor uit het assortiment genomen producten met significante backlinkautoriteit, implementeer een 301-redirect naar het meest relevante vervangingsproduct of categoriepagina. Verwijder de uit-assortiment-URL uit je sitemap en voeg de redirect-doel-URL toe.\n\nLaat nooit honderden 404-retournerende uit-assortiment product-URL's in je sitemap staan. Dit ondermijnt Google's vertrouwen in de nauwkeurigheid van je sitemap en verspilt crawlbudget. Voer een kwartaalreiniging uit om alle niet-200 URL's uit je sitemapbestanden te verwijderen.",
          items: [
            "Tijdelijk niet-voorradig: behouden in sitemap met bijgewerkte beschikbaarheidsstatus",
            "Permanent uit assortiment zonder autoriteit: verwijderen uit sitemap, 404 laten retourneren",
            "Uit assortiment met waardevolle backlinks: 301-redirect naar meest relevante pagina",
            "Nooit 404-URL's in je sitemap laten staan; kwartaalreinigingen uitvoeren",
            "Beschikbaarheidsstatus in gestructureerde data bijwerken voor niet-voorradige producten",
          ],
          tip: "Maak een geautomatiseerd proces dat product-URL's uit je sitemap verwijdert wanneer ze meer dan zeven opeenvolgende dagen niet-200 statuscodes retourneren.",
          image: {
            src: "/images/academy/nl/sitemap-lastmod-signal.svg",
            alt: "Vergelijking van nauwkeurige lastmod-datums gekoppeld aan echte inhoudswijzigingen versus onjuiste implementaties waarbij alle datums zijn ingesteld op vandaag",
            caption: "Nauwkeurige lastmod-datums gekoppeld aan echte wijzigingen resulteren in 30% snellere indexering. Als u alle datums op vandaag zet, wordt het signaal volledig vernietigd.",
          },
          callout: {
            title: "Lastmod-Fehler",
            text: "Winkels die bij elke herbouw van de sitemap alle lastmod-datums op de datum van vandaag zetten, leren Google het signaal volledig te negeren. Los dit op door lastmod te koppelen aan daadwerkelijke prijs-, voorraad- of beschrijvingswijzigingen.",
          },
        },
        {
          title: "Robots.txt en sitemaps coordineren voor maximaal effect",
          content:
            "Robots.txt en XML-sitemaps moeten samenwerken als een gecoordineerd systeem. Je robots.txt vertelt zoekmachines wat ze niet moeten crawlen, terwijl je sitemap hen vertelt wat ze moeten prioriteren. Tegenstrijdige signalen tussen deze twee bestanden creeren verwarring en verspilde inspanning.\n\nDe meest voorkomende coordinatiefout is het opnemen van URL's in je sitemap die geblokkeerd zijn door robots.txt. Als je robots.txt Disallow: /search bevat en je sitemap URL's bevat als /search?q=populaire-term, stuur je tegenstrijdige signalen. Reinig je sitemap om nul overlap met robots.txt Disallow-regels te garanderen.\n\nEen tweede coordinatieprobleem betreft canonieke URL's. Je sitemap moet alleen de canonieke versie van elke URL bevatten. Als een product toegankelijk is op zowel /products/schoenen als /categorie/schoeisel?product=schoenen, mag alleen de canonieke URL in de sitemap verschijnen.\n\nVoor grote ecommerce-sites, maak een gelaagde crawlstrategie. Gebruik robots.txt om URL-patronen te blokkeren die nooit gecrawld mogen worden. Gebruik sitemaps om proactief te verklaren welke URL's het belangrijkst zijn. Gebruik interne links om crawlprioriteit te versterken voor je meest waardevolle product- en categoriepagina's.\n\nMonitor ten slotte beide bestanden continu. Stel waarschuwingen in voor wijzigingen aan je robots.txt en plan wekelijkse sitemap-validatie. Een deployment die per ongeluk robots.txt wijzigt of sitemap-generatie breekt, kan weken kosten om te herstellen.",
          items: [
            "Neem nooit URL's in je sitemap op die geblokkeerd zijn door robots.txt",
            "Neem alleen canonieke URL-versies op in je sitemap",
            "Gebruik robots.txt voor blokkeren, sitemaps voor prioriteren en interne links voor versterken",
            "Monitor beide bestanden continu; platformupdates kunnen robots.txt stilletjes wijzigen",
            "Plan wekelijkse sitemap-validatie om nieuw kapotte URL's te detecteren",
          ],
          tip: "Na elke platformupdate of themawijziging, verifieer onmiddellijk je robots.txt en regenereer je sitemap. Vergelijk beide bestanden om te garanderen dat geen sitemap-URL's geblokkeerd zijn en geen kritieke pagina's ontbreken in de sitemap.",
        },
      ],
      navLabels: {
        previous: "Canonical tags voor ecommerce",
        next: "Facetnavigatie-SEO",
      },
    },
  },
};
