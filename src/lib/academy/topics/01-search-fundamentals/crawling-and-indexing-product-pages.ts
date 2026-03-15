import type { AcademyTopic } from "../../types";

export const crawlingAndIndexingProductPages: AcademyTopic = {
  slug: "crawling-and-indexing-product-pages",
  cluster: 1,
  resources: [{"label":"Google Indexing Documentation","url":"https://developers.google.com/search/docs/crawling-indexing","type":"docs"},{"label":"Screaming Frog SEO Spider","url":"https://www.screamingfrog.co.uk/seo-spider/","type":"tool"},{"label":"Google Index Coverage Report","url":"https://support.google.com/webmasters/answer/7440203","type":"docs"},{"label":"Robots.txt Tester","url":"https://support.google.com/webmasters/answer/6062598","type":"tool"}],
  content: {
    en: {
      badge: "Search Fundamentals",
      heading: "Crawling & Indexing Product Pages",
      intro:
        "Google crawling your pages does not guarantee they will appear in search results. Crawling and indexing are two separate processes, and understanding the gap between them is critical for any store dealing with thousands of product URLs.",
      readTime: "10 min read",
      sections: [
        {
          title: "Crawling vs. Indexing: The Difference That Matters",
          content:
            "Crawling means Googlebot visited your page and downloaded its content. Indexing means Google analyzed that content, found it worthy of inclusion, and stored it in its search index. A page can be crawled but not indexed, which happens more often than most store owners realize.\n\nThink of crawling as Google walking through every aisle in your physical store. Indexing is Google deciding which products are worth putting on the shelf for shoppers to find. If a product page has thin content, duplicates another page, or has technical issues, Google may crawl it and then decide it does not deserve a spot in the index.\n\nFor a typical online store with 20,000 product pages, we commonly see 30% to 50% of those pages go unindexed. That means thousands of products are invisible in search results. The gap between crawled and indexed pages is where most ecommerce SEO opportunities hide.",
          items: [
            "Crawled: Googlebot visited and downloaded the page content",
            "Indexed: Google analyzed and stored the page in its search database",
            "Crawled but not indexed: Google saw the page but chose not to include it",
            "Not crawled: Google has not visited the page yet or skipped it intentionally",
          ],
        },
        {
          title: "Why Google Skips Indexing Product Pages",
          content:
            "The most common reason Google refuses to index a product page is duplicate or near-duplicate content. When 500 products from the same manufacturer share identical descriptions differing only in the product name, Google sees little reason to index all 500 versions. It picks a few and ignores the rest.\n\nThin content is the second biggest culprit. A product page with a 20-word description, a price, and a buy button provides almost no information for Google to evaluate. Compare that to a competitor whose product page includes a 300-word unique description, customer reviews, specification tables, and usage instructions. Google will index the richer page and skip the thin one.\n\nTechnical signals can also prevent indexing. Pages that load slowly, return soft 404 errors, have conflicting canonical tags, or are blocked by noindex directives will never make it into the index regardless of their content quality.\n\nPage quality signals matter too. If your site has a high ratio of low-quality pages, Google may reduce the crawl rate for your entire domain, making it harder for even your good pages to get indexed promptly. Effective [crawl budget management](/academy/crawl-budget-management) helps you focus Google's attention on your most valuable pages.",
          items: [
            "Duplicate or near-duplicate descriptions across product pages",
            "Thin content with fewer than 50 words of unique text",
            "Slow page load times exceeding 5 seconds",
            "Conflicting or incorrect canonical tags",
            "Noindex tags applied accidentally by plugins or theme settings",
          ],
          tip: "Run a crawl with Screaming Frog or Sitebulb and filter for pages with fewer than 100 words of body text. Those thin pages are your top candidates for content improvement or consolidation.",
        },
        {
          title: "Canonical Tags and Duplicate Content in Ecommerce",
          content:
            "Canonical tags tell Google which version of a page is the original when multiple URLs display similar or identical content. For ecommerce sites, canonicalization is not optional. Without it, Google must guess which URL to index, and it often guesses wrong.\n\nProduct variants create the most common canonical scenario. A blue t-shirt at /products/cotton-tee?color=blue and a red version at /products/cotton-tee?color=red may share 90% of their page content. If these are truly the same product with a color selector, both URLs should canonicalize to the main product page at /products/cotton-tee. If the color variants have meaningfully different search demand (people search specifically for \"blue cotton tee\"), they may warrant separate indexed pages.\n\nFaceted navigation generates even more canonical complexity. A URL like /shoes?size=10&color=black&brand=nike&sort=price-low is one of potentially millions of filter combinations. These filtered views should either canonical back to the main category page or be blocked from indexing entirely. The choice depends on whether that specific filter combination has genuine search demand.\n\nWe see stores make two common canonical mistakes. First, circular canonicals where page A canonicalizes to page B and page B canonicalizes back to page A. Second, canonicalizing all product variants to a single parent when each variant has independent search volume, essentially hiding rankable pages from Google.",
        },
        {
          title: "Managing Index Bloat From Filters and Facets",
          content:
            "Index bloat occurs when Google indexes thousands of low-value URLs that dilute your site's overall quality signals. For ecommerce, the primary source of index bloat is faceted navigation that generates filterable URLs.\n\nConsider a furniture store with 200 products in the \"sofas\" category. If shoppers can filter by color (10 options), material (8 options), price range (5 brackets), and seating capacity (4 options), the possible URL combinations reach 1,600 before accounting for multi-select filters. Most of these filtered views show the same small set of products in different orders.\n\nThe standard approach to controlling index bloat involves three layers. First, use [robots.txt and XML sitemaps](/academy/robots-txt-and-xml-sitemaps) to block Googlebot from crawling the most obvious low-value filter patterns. Second, apply noindex tags to filtered pages that Googlebot can still reach through other paths. Third, use canonical tags to point filtered views back to the main category page.\n\nA more surgical approach is to selectively allow indexing on filter combinations that match real search queries. If people search for \"leather sofas\" in meaningful numbers, the /sofas?material=leather URL might be worth indexing. But /sofas?material=leather&color=brown&seats=3 almost certainly is not.\n\nShopify stores handle this differently from WooCommerce or Magento because Shopify does not generate filter URLs by default. Third-party filter apps like Smart Product Filter create these URLs, and each app handles canonical tags and indexation controls differently. Always verify how your filter app manages these technical details.",
          items: [
            "Audit your indexed URL count in GSC and compare to your intended indexable pages",
            "Block low-value filter patterns in robots.txt as the first line of defense",
            "Apply noindex to filtered pages that get crawled despite robots.txt rules",
            "Selectively index high-value filter combinations with proven search demand",
            "Review third-party filter app settings for canonical and indexation handling",
          ],
        },
        {
          title: "Checking Indexation Status in Google Search Console",
          content:
            "Google Search Console provides two primary tools for monitoring indexation. The Pages report (formerly Coverage report) shows how many of your pages are indexed and why the rest were excluded. The URL Inspection tool lets you check the status of individual pages.\n\nIn the Pages report, focus on the \"Not indexed\" tab. Google groups excluded pages by reason: \"Crawled - currently not indexed\", \"Discovered - currently not indexed\", \"Duplicate without user-selected canonical\", \"Excluded by noindex tag\", and several others. Each reason requires a different fix.\n\n\"Crawled - currently not indexed\" means Google visited the page but chose not to add it to the index. This usually signals a content quality issue. Improving the page's content, adding unique descriptions, or enhancing it with reviews and structured data can help.\n\n\"Discovered - currently not indexed\" means Google knows the URL exists but has not bothered to crawl it yet. This indicates low crawl priority, often caused by weak internal linking or the page being too deep in the site hierarchy.\n\nThe URL Inspection tool shows you exactly what Google sees when it crawls a specific page. Use it to verify that your canonical tags are being respected, that your page is rendering correctly, and that no accidental noindex tags are blocking indexation. We recommend inspecting 10 to 20 representative product pages monthly to catch issues early.",
          tip: "Export the \"Not indexed\" data from GSC as a spreadsheet and categorize pages by type (product, category, filter, blog). This reveals whether your indexation problems are concentrated in a specific page type, making the fix more targeted.",
        },
        {
          title: "Practical Steps to Improve Product Page Indexation",
          content:
            "Start by auditing which product pages are currently indexed. Use the site: operator in Google (site:yourstore.com/products/) to get a rough count, then cross-reference with GSC data for accuracy. If less than 70% of your product pages are indexed, you have work to do.\n\nWrite unique product descriptions for your top-selling and highest-margin products first. These pages have the most revenue potential from organic search. Even adding 150 to 200 words of unique, descriptive content per product page can make the difference between indexed and ignored.\n\nConsolidate pages that serve no independent purpose. If you have 30 color variants of the same product and none of those color-specific terms have search volume, consolidate them under a single product page with a color selector. That one strong page will outperform 30 thin pages every time.\n\nStrengthen internal linking to product pages you want indexed. Link from related blog posts, from the homepage's featured products section, and from other product pages via \"customers also bought\" or \"related products\" widgets. Each additional internal link signals to Google that the page matters.\n\nFinally, keep your sitemap clean. Remove URLs that return 404 errors, that are set to noindex, or that you have decided to consolidate. A lean sitemap that only contains pages you genuinely want indexed gives Google a clearer picture of your site's structure. For a deeper dive into these technical foundations, see our [technical SEO for ecommerce](/blog/technical-seo-for-ecommerce) guide.",
          items: [
            "Audit current indexation rates using GSC and site: operator",
            "Write unique descriptions for top-selling products first",
            "Consolidate thin variant pages under single strong product pages",
            "Build internal links from blog posts, homepage, and related products",
            "Clean your sitemap to include only genuinely indexable URLs",
          ],
        },
      ],
      navLabels: {
        previous: "How Google Finds Online Stores",
        next: "Ecommerce Ranking Factors",
      },
    },
    de: {
      badge: "Suchmaschinen-Grundlagen",
      heading: "Crawling & Indexierung von Produktseiten",
      intro:
        "Dass Google Ihre Seiten crawlt, garantiert nicht, dass sie in den Suchergebnissen erscheinen. Crawling und Indexierung sind zwei getrennte Prozesse, und den Unterschied zu verstehen ist entscheidend f\u00fcr jeden Shop mit Tausenden von Produkt-URLs.",
      readTime: "10 Min. Lesezeit",
      sections: [
        {
          title: "Crawling vs. Indexierung: Der Unterschied, der z\u00e4hlt",
          content:
            "Crawling bedeutet, dass Googlebot Ihre Seite besucht und deren Inhalt heruntergeladen hat. Indexierung bedeutet, dass Google diesen Inhalt analysiert, ihn f\u00fcr w\u00fcrdig befunden und in seinem Suchindex gespeichert hat. Eine Seite kann gecrawlt, aber nicht indexiert werden, was h\u00e4ufiger vorkommt, als den meisten Shop-Betreibern bewusst ist.\n\nStellen Sie sich Crawling so vor, als w\u00fcrde Google durch jeden Gang in Ihrem physischen Gesch\u00e4ft laufen. Indexierung ist, wenn Google entscheidet, welche Produkte es wert sind, ins Regal gestellt zu werden, damit K\u00e4ufer sie finden k\u00f6nnen. Wenn eine Produktseite d\u00fcnnen Content hat, eine andere Seite dupliziert oder technische Probleme aufweist, kann Google sie crawlen und dann entscheiden, dass sie keinen Platz im Index verdient.\n\nBei einem typischen Online-Shop mit 20.000 Produktseiten sehen wir h\u00e4ufig, dass 30 % bis 50 % dieser Seiten nicht indexiert werden. Das bedeutet, Tausende von Produkten sind in den Suchergebnissen unsichtbar. Die L\u00fccke zwischen gecrawlten und indexierten Seiten ist der Bereich, in dem sich die meisten Ecommerce-SEO-Chancen verbergen.",
          items: [
            "Gecrawlt: Googlebot hat die Seite besucht und den Inhalt heruntergeladen",
            "Indexiert: Google hat die Seite analysiert und in seiner Suchdatenbank gespeichert",
            "Gecrawlt, aber nicht indexiert: Google hat die Seite gesehen, aber nicht aufgenommen",
            "Nicht gecrawlt: Google hat die Seite noch nicht besucht oder bewusst \u00fcbersprungen",
          ],
        },
        {
          title: "Warum Google Produktseiten nicht indexiert",
          content:
            "Der h\u00e4ufigste Grund, warum Google die Indexierung einer Produktseite verweigert, ist doppelter oder beinahe doppelter Inhalt. Wenn 500 Produkte desselben Herstellers identische Beschreibungen teilen, die sich nur im Produktnamen unterscheiden, sieht Google wenig Grund, alle 500 Versionen zu indexieren. Es w\u00e4hlt einige aus und ignoriert den Rest.\n\nD\u00fcnner Content ist der zweith\u00e4ufigste Grund. Eine Produktseite mit einer 20-W\u00f6rter-Beschreibung, einem Preis und einem Kaufen-Button liefert fast keine Information, die Google bewerten kann. Vergleichen Sie das mit einem Wettbewerber, dessen Produktseite eine einzigartige 300-W\u00f6rter-Beschreibung, Kundenbewertungen, Spezifikationstabellen und Nutzungsanleitungen enth\u00e4lt. Google wird die reichhaltigere Seite indexieren und die d\u00fcnne \u00fcberspringen.\n\nTechnische Signale k\u00f6nnen die Indexierung ebenfalls verhindern. Seiten, die langsam laden, Soft-404-Fehler zur\u00fcckgeben, widerspr\u00fcchliche Canonical-Tags haben oder durch Noindex-Anweisungen blockiert sind, werden unabh\u00e4ngig von ihrer Content-Qualit\u00e4t nie in den Index gelangen.\n\nSignale zur Seitenqualit\u00e4t spielen ebenfalls eine Rolle. Wenn Ihre Website ein hohes Verh\u00e4ltnis von Seiten niedriger Qualit\u00e4t hat, kann Google die Crawl-Rate f\u00fcr Ihre gesamte Domain reduzieren, wodurch es auch f\u00fcr Ihre guten Seiten schwieriger wird, zeitnah indexiert zu werden. Effektives [Crawl-Budget-Management](/academy/crawl-budget-management) hilft Ihnen, Googles Aufmerksamkeit auf Ihre wertvollsten Seiten zu lenken.",
          items: [
            "Doppelte oder beinahe doppelte Beschreibungen auf Produktseiten",
            "D\u00fcnner Content mit weniger als 50 W\u00f6rtern einzigartigem Text",
            "Langsame Seitenladezeiten \u00fcber 5 Sekunden",
            "Widerspr\u00fcchliche oder falsche Canonical-Tags",
            "Noindex-Tags versehentlich durch Plugins oder Theme-Einstellungen gesetzt",
          ],
          tip: "F\u00fchren Sie einen Crawl mit Screaming Frog oder Sitebulb durch und filtern Sie nach Seiten mit weniger als 100 W\u00f6rtern Flie\u00dftext. Diese d\u00fcnnen Seiten sind Ihre Top-Kandidaten f\u00fcr Content-Verbesserung oder Konsolidierung.",
        },
        {
          title: "Canonical-Tags und Duplicate Content im Ecommerce",
          content:
            "Canonical-Tags teilen Google mit, welche Version einer Seite das Original ist, wenn mehrere URLs \u00e4hnlichen oder identischen Inhalt anzeigen. F\u00fcr Ecommerce-Seiten ist Kanonisierung keine Option. Ohne sie muss Google raten, welche URL indexiert werden soll, und oft r\u00e4t es falsch.\n\nProduktvarianten schaffen das h\u00e4ufigste Canonical-Szenario. Ein blaues T-Shirt unter /products/cotton-tee?color=blue und eine rote Version unter /products/cotton-tee?color=red teilen m\u00f6glicherweise 90 % ihres Seiteninhalts. Wenn es sich wirklich um dasselbe Produkt mit Farbauswahl handelt, sollten beide URLs auf die Hauptproduktseite unter /products/cotton-tee kanonisiert werden. Wenn die Farbvarianten eine sp\u00fcrbar unterschiedliche Suchnachfrage haben (Leute suchen speziell nach \"blaues Baumwoll-T-Shirt\"), k\u00f6nnen sie separate indexierte Seiten rechtfertigen.\n\nFacettierte Navigation erzeugt noch mehr Canonical-Komplexit\u00e4t. Eine URL wie /shoes?size=10&color=black&brand=nike&sort=price-low ist eine von potenziell Millionen von Filterkombinationen. Diese gefilterten Ansichten sollten entweder zur Hauptkategorieseite kanonisiert oder komplett von der Indexierung ausgeschlossen werden. Die Wahl h\u00e4ngt davon ab, ob diese spezifische Filterkombination echte Suchnachfrage hat.\n\nWir sehen zwei h\u00e4ufige Canonical-Fehler bei Shops. Erstens zirkul\u00e4re Canonicals, bei denen Seite A auf Seite B kanonisiert und Seite B zur\u00fcck auf Seite A. Zweitens die Kanonisierung aller Produktvarianten auf eine einzelne Elternseite, wenn jede Variante eigenst\u00e4ndiges Suchvolumen hat, wodurch rankbare Seiten vor Google versteckt werden.",
        },
        {
          title: "Index-Bloat durch Filter und Facetten verwalten",
          content:
            "Index-Bloat tritt auf, wenn Google Tausende von wertlosen URLs indexiert, die die allgemeinen Qualit\u00e4tssignale Ihrer Website verw\u00e4ssern. F\u00fcr Ecommerce ist die Hauptquelle von Index-Bloat facettierte Navigation, die filterbare URLs erzeugt.\n\nBetrachten Sie einen M\u00f6belshop mit 200 Produkten in der Kategorie \"Sofas\". Wenn K\u00e4ufer nach Farbe (10 Optionen), Material (8 Optionen), Preisspanne (5 Bereiche) und Sitzkapazit\u00e4t (4 Optionen) filtern k\u00f6nnen, erreichen die m\u00f6glichen URL-Kombinationen 1.600, bevor Mehrfachauswahl-Filter ber\u00fccksichtigt werden. Die meisten dieser gefilterten Ansichten zeigen dieselbe kleine Auswahl an Produkten in unterschiedlicher Reihenfolge.\n\nDer Standardansatz zur Kontrolle von Index-Bloat umfasst drei Ebenen. Erstens, verwenden Sie die [robots.txt](/academy/robots-txt-and-xml-sitemaps), um Googlebot am Crawlen der offensichtlichsten wertlosen Filtermuster zu hindern. Zweitens, wenden Sie Noindex-Tags auf gefilterte Seiten an, die Googlebot trotzdem \u00fcber andere Pfade erreichen kann. Drittens, verwenden Sie Canonical-Tags, um gefilterte Ansichten zur\u00fcck auf die Hauptkategorieseite zu verweisen.\n\nEin gezielterer Ansatz ist, die Indexierung selektiv f\u00fcr Filterkombinationen zuzulassen, die echten Suchanfragen entsprechen. Wenn Menschen in nennenswerter Zahl nach \"Ledersofas\" suchen, k\u00f6nnte die URL /sofas?material=leather die Indexierung wert sein. Aber /sofas?material=leather&color=brown&seats=3 mit ziemlicher Sicherheit nicht.\n\nShopify-Shops handhaben dies anders als WooCommerce oder Magento, da Shopify standardm\u00e4\u00dfig keine Filter-URLs generiert. Drittanbieter-Filter-Apps wie Smart Product Filter erstellen diese URLs, und jede App handhabt Canonical-Tags und Indexierungskontrollen unterschiedlich. \u00dcberpr\u00fcfen Sie immer, wie Ihre Filter-App diese technischen Details verwaltet.",
          items: [
            "Pr\u00fcfen Sie die Anzahl indexierter URLs in der GSC im Vergleich zu beabsichtigt indexierbaren Seiten",
            "Blockieren Sie wertlose Filtermuster in der robots.txt als erste Verteidigungslinie",
            "Wenden Sie Noindex auf gefilterte Seiten an, die trotz robots.txt-Regeln gecrawlt werden",
            "Indexieren Sie selektiv hochwertige Filterkombinationen mit nachgewiesener Suchnachfrage",
            "Pr\u00fcfen Sie die Einstellungen von Drittanbieter-Filter-Apps f\u00fcr Canonical- und Indexierungshandhabung",
          ],
        },
        {
          title: "Indexierungsstatus in der Google Search Console pr\u00fcfen",
          content:
            "Die Google Search Console bietet zwei prim\u00e4re Tools zur \u00dcberwachung der Indexierung. Der Seitenbericht (fr\u00fcher Abdeckungsbericht) zeigt, wie viele Ihrer Seiten indexiert sind und warum der Rest ausgeschlossen wurde. Das URL-Pr\u00fcftool l\u00e4sst Sie den Status einzelner Seiten \u00fcberpr\u00fcfen.\n\nIm Seitenbericht konzentrieren Sie sich auf den Tab \"Nicht indexiert\". Google gruppiert ausgeschlossene Seiten nach Grund: \"Gecrawlt \u2013 derzeit nicht indexiert\", \"Gefunden \u2013 derzeit nicht indexiert\", \"Duplikat ohne vom Nutzer ausgew\u00e4hltes Canonical\", \"Durch noindex-Tag ausgeschlossen\" und mehrere andere. Jeder Grund erfordert eine andere L\u00f6sung.\n\n\"Gecrawlt \u2013 derzeit nicht indexiert\" bedeutet, Google hat die Seite besucht, sich aber entschieden, sie nicht in den Index aufzunehmen. Dies signalisiert normalerweise ein Problem mit der Content-Qualit\u00e4t. Den Content der Seite zu verbessern, einzigartige Beschreibungen hinzuzuf\u00fcgen oder sie mit Bewertungen und strukturierten Daten anzureichern, kann helfen.\n\n\"Gefunden \u2013 derzeit nicht indexiert\" bedeutet, Google wei\u00df, dass die URL existiert, hat sich aber noch nicht die M\u00fche gemacht, sie zu crawlen. Das deutet auf niedrige Crawl-Priorit\u00e4t hin, oft verursacht durch schwache interne Verlinkung oder eine zu tiefe Position in der Seitenhierarchie.\n\nDas URL-Pr\u00fcftool zeigt Ihnen genau, was Google sieht, wenn es eine bestimmte Seite crawlt. Nutzen Sie es, um zu verifizieren, dass Ihre Canonical-Tags beachtet werden, dass Ihre Seite korrekt gerendert wird und dass keine versehentlichen Noindex-Tags die Indexierung blockieren. Wir empfehlen, monatlich 10 bis 20 repr\u00e4sentative Produktseiten zu pr\u00fcfen, um Probleme fr\u00fch zu erkennen.",
          tip: "Exportieren Sie die \"Nicht indexiert\"-Daten aus der GSC als Tabelle und kategorisieren Sie die Seiten nach Typ (Produkt, Kategorie, Filter, Blog). Dies zeigt, ob Ihre Indexierungsprobleme auf einen bestimmten Seitentyp konzentriert sind, was die L\u00f6sung gezielter macht.",
        },
        {
          title: "Praktische Schritte zur Verbesserung der Produktseiten-Indexierung",
          content:
            "Beginnen Sie mit einer Pr\u00fcfung, welche Produktseiten derzeit indexiert sind. Verwenden Sie den site:-Operator in Google (site:ihrshop.de/products/), um eine grobe Z\u00e4hlung zu erhalten, und gleichen Sie diese dann mit GSC-Daten ab. Wenn weniger als 70 % Ihrer Produktseiten indexiert sind, gibt es Handlungsbedarf.\n\nSchreiben Sie einzigartige Produktbeschreibungen zuerst f\u00fcr Ihre meistverkauften und margenstarksten Produkte. Diese Seiten haben das gr\u00f6\u00dfte Umsatzpotenzial aus der organischen Suche. Schon das Hinzuf\u00fcgen von 150 bis 200 W\u00f6rtern einzigartigem, beschreibendem Content pro Produktseite kann den Unterschied zwischen indexiert und ignoriert ausmachen.\n\nKonsolidieren Sie Seiten, die keinem eigenst\u00e4ndigen Zweck dienen. Wenn Sie 30 Farbvarianten desselben Produkts haben und keiner dieser farbspezifischen Begriffe Suchvolumen hat, konsolidieren Sie sie unter einer einzigen Produktseite mit Farbauswahl. Diese eine starke Seite wird 30 d\u00fcnne Seiten jedes Mal \u00fcbertreffen.\n\nSt\u00e4rken Sie die interne Verlinkung zu Produktseiten, die Sie indexiert haben m\u00f6chten. Verlinken Sie von verwandten Blogbeitr\u00e4gen, vom Bereich f\u00fcr empfohlene Produkte auf der Startseite und von anderen Produktseiten \u00fcber \"Kunden kauften auch\" oder \"Verwandte Produkte\"-Widgets. Jeder zus\u00e4tzliche interne Link signalisiert Google, dass die Seite wichtig ist.\n\nHalten Sie schlie\u00dflich Ihre Sitemap sauber. Entfernen Sie URLs, die 404-Fehler zur\u00fcckgeben, die auf Noindex gesetzt sind oder die Sie zu konsolidieren beschlossen haben. Eine schlanke Sitemap, die nur Seiten enth\u00e4lt, die Sie wirklich indexiert haben m\u00f6chten, gibt Google ein klareres Bild Ihrer Seitenstruktur. F\u00fcr einen tieferen Einblick lesen Sie unseren Leitfaden zu [technische SEO f\u00fcr Ecommerce](/blog/technical-seo-for-ecommerce).",
          items: [
            "Pr\u00fcfen Sie aktuelle Indexierungsraten mit GSC und dem site:-Operator",
            "Schreiben Sie einzigartige Beschreibungen zuerst f\u00fcr Bestseller-Produkte",
            "Konsolidieren Sie d\u00fcnne Variantenseiten unter einzelnen starken Produktseiten",
            "Bauen Sie interne Links von Blogbeitr\u00e4gen, der Startseite und verwandten Produkten",
            "Bereinigen Sie Ihre Sitemap, sodass sie nur wirklich indexierbare URLs enth\u00e4lt",
          ],
        },
      ],
      navLabels: {
        previous: "Wie Google Online-Shops findet",
        next: "Ecommerce-Rankingfaktoren",
      },
    },
    fr: {
      badge: "Fondamentaux de la recherche",
      heading: "Crawl et indexation des pages produits",
      intro:
        "Le fait que Google explore vos pages ne garantit pas qu'elles appara\u00eetront dans les r\u00e9sultats de recherche. L'exploration et l'indexation sont deux processus distincts, et comprendre l'\u00e9cart entre les deux est essentiel pour toute boutique g\u00e9rant des milliers d'URLs de produits.",
      readTime: "10 min de lecture",
      sections: [
        {
          title: "Crawl vs. indexation : la diff\u00e9rence qui compte",
          content:
            "Le crawl signifie que Googlebot a visit\u00e9 votre page et t\u00e9l\u00e9charg\u00e9 son contenu. L'indexation signifie que Google a analys\u00e9 ce contenu, l'a jug\u00e9 digne d'inclusion et l'a stock\u00e9 dans son index de recherche. Une page peut \u00eatre crawl\u00e9e mais pas index\u00e9e, ce qui arrive plus souvent que la plupart des propri\u00e9taires de boutiques ne le r\u00e9alisent.\n\nConsid\u00e9rez le crawl comme Google parcourant chaque all\u00e9e de votre magasin physique. L'indexation, c'est Google d\u00e9cidant quels produits m\u00e9ritent d'\u00eatre mis en rayon pour que les acheteurs les trouvent. Si une page produit a un contenu mince, duplique une autre page ou pr\u00e9sente des probl\u00e8mes techniques, Google peut l'explorer puis d\u00e9cider qu'elle ne m\u00e9rite pas sa place dans l'index.\n\nPour une boutique en ligne typique avec 20 000 pages produits, nous constatons couramment que 30 % \u00e0 50 % de ces pages ne sont pas index\u00e9es. Cela signifie que des milliers de produits sont invisibles dans les r\u00e9sultats de recherche. L'\u00e9cart entre les pages explor\u00e9es et les pages index\u00e9es est l'endroit o\u00f9 se cachent la plupart des opportunit\u00e9s SEO e-commerce.",
          items: [
            "Crawl\u00e9 : Googlebot a visit\u00e9 et t\u00e9l\u00e9charg\u00e9 le contenu de la page",
            "Index\u00e9 : Google a analys\u00e9 et stock\u00e9 la page dans sa base de donn\u00e9es",
            "Crawl\u00e9 mais non index\u00e9 : Google a vu la page mais a choisi de ne pas l'inclure",
            "Non crawl\u00e9 : Google n'a pas encore visit\u00e9 la page ou l'a ignor\u00e9e intentionnellement",
          ],
        },
        {
          title: "Pourquoi Google n'indexe pas certaines pages produits",
          content:
            "La raison la plus courante pour laquelle Google refuse d'indexer une page produit est le contenu dupliqu\u00e9 ou quasi dupliqu\u00e9. Quand 500 produits du m\u00eame fabricant partagent des descriptions identiques ne diff\u00e9rant que par le nom du produit, Google voit peu de raisons d'indexer les 500 versions. Il en choisit quelques-unes et ignore le reste.\n\nLe contenu mince est le deuxi\u00e8me plus grand responsable. Une page produit avec une description de 20 mots, un prix et un bouton d'achat fournit presque aucune information pour que Google l'\u00e9value. Comparez avec un concurrent dont la page produit inclut une description unique de 300 mots, des avis clients, des tableaux de sp\u00e9cifications et des instructions d'utilisation. Google indexera la page la plus riche et ignorera la mince.\n\nLes signaux techniques peuvent aussi emp\u00eacher l'indexation. Les pages qui chargent lentement, retournent des erreurs soft 404, ont des balises canonical contradictoires ou sont bloqu\u00e9es par des directives noindex ne feront jamais partie de l'index, quelle que soit la qualit\u00e9 de leur contenu.\n\nLes signaux de qualit\u00e9 de page comptent aussi. Si votre site a un ratio \u00e9lev\u00e9 de pages de faible qualit\u00e9, Google peut r\u00e9duire la fr\u00e9quence de crawl pour l'ensemble de votre domaine, rendant plus difficile l'indexation rapide m\u00eame de vos bonnes pages. Une [gestion efficace du budget de crawl](/academy/crawl-budget-management) vous aide à concentrer l'attention de Google sur vos pages les plus importantes.",
          items: [
            "Descriptions dupliqu\u00e9es ou quasi dupliqu\u00e9es sur les pages produits",
            "Contenu mince avec moins de 50 mots de texte unique",
            "Temps de chargement lents d\u00e9passant 5 secondes",
            "Balises canonical contradictoires ou incorrectes",
            "Balises noindex appliqu\u00e9es accidentellement par des plugins ou des param\u00e8tres de th\u00e8me",
          ],
          tip: "Lancez un crawl avec Screaming Frog ou Sitebulb et filtrez les pages avec moins de 100 mots de corps de texte. Ces pages minces sont vos meilleurs candidats pour l'am\u00e9lioration ou la consolidation de contenu.",
        },
        {
          title: "Balises canonical et contenu dupliqu\u00e9 en e-commerce",
          content:
            "Les balises canonical indiquent \u00e0 Google quelle version d'une page est l'originale quand plusieurs URLs affichent un contenu similaire ou identique. Pour les sites e-commerce, la canonicalisation n'est pas optionnelle. Sans elle, Google doit deviner quelle URL indexer, et il se trompe souvent.\n\nLes variantes de produits cr\u00e9ent le sc\u00e9nario canonical le plus courant. Un t-shirt bleu \u00e0 /products/cotton-tee?color=blue et une version rouge \u00e0 /products/cotton-tee?color=red peuvent partager 90 % de leur contenu. S'il s'agit vraiment du m\u00eame produit avec un s\u00e9lecteur de couleur, les deux URLs devraient canonicaliser vers la page produit principale \u00e0 /products/cotton-tee. Si les variantes de couleur ont une demande de recherche significativement diff\u00e9rente (les gens recherchent sp\u00e9cifiquement \"t-shirt coton bleu\"), elles peuvent justifier des pages index\u00e9es s\u00e9par\u00e9es.\n\nLa navigation \u00e0 facettes g\u00e9n\u00e8re encore plus de complexit\u00e9 canonical. Une URL comme /shoes?size=10&color=black&brand=nike&sort=price-low est l'une de potentiellement millions de combinaisons de filtres. Ces vues filtr\u00e9es devraient soit canonicaliser vers la page de cat\u00e9gorie principale, soit \u00eatre bloqu\u00e9es de l'indexation enti\u00e8rement. Le choix d\u00e9pend de si cette combinaison de filtres sp\u00e9cifique a une v\u00e9ritable demande de recherche.\n\nNous voyons les boutiques commettre deux erreurs canonical courantes. Premi\u00e8rement, les canonicals circulaires o\u00f9 la page A canonicalise vers la page B et la page B canonicalise vers la page A. Deuxi\u00e8mement, canonicaliser toutes les variantes de produits vers un seul parent quand chaque variante a un volume de recherche ind\u00e9pendant, cachant essentiellement des pages classables \u00e0 Google.",
        },
        {
          title: "G\u00e9rer le gonflement d'index caus\u00e9 par les filtres et facettes",
          content:
            "Le gonflement d'index se produit quand Google indexe des milliers d'URLs de faible valeur qui diluent les signaux de qualit\u00e9 globaux de votre site. Pour le e-commerce, la source principale du gonflement d'index est la navigation \u00e0 facettes qui g\u00e9n\u00e8re des URLs filtrables.\n\nPrenons un magasin de meubles avec 200 produits dans la cat\u00e9gorie \"canap\u00e9s\". Si les acheteurs peuvent filtrer par couleur (10 options), mat\u00e9riau (8 options), gamme de prix (5 tranches) et nombre de places (4 options), les combinaisons d'URLs possibles atteignent 1 600 avant de tenir compte des filtres \u00e0 s\u00e9lection multiple. La plupart de ces vues filtr\u00e9es montrent le m\u00eame petit ensemble de produits dans diff\u00e9rents ordres.\n\nL'approche standard pour contr\u00f4ler le gonflement d'index implique trois niveaux. D'abord, utilisez le [robots.txt](/academy/robots-txt-and-xml-sitemaps) pour bloquer Googlebot des sch\u00e9mas de filtres les plus \u00e9videmment sans valeur. Ensuite, appliquez des balises noindex aux pages filtr\u00e9es que Googlebot peut toujours atteindre par d'autres chemins. Enfin, utilisez des balises canonical pour pointer les vues filtr\u00e9es vers la page de cat\u00e9gorie principale.\n\nUne approche plus chirurgicale consiste \u00e0 autoriser s\u00e9lectivement l'indexation des combinaisons de filtres qui correspondent \u00e0 de vraies requ\u00eates de recherche. Si les gens recherchent \"canap\u00e9s en cuir\" en nombre significatif, l'URL /canapes?materiau=cuir pourrait valoir la peine d'\u00eatre index\u00e9e. Mais /canapes?materiau=cuir&couleur=marron&places=3 ne l'est presque certainement pas.\n\nLes boutiques Shopify g\u00e8rent cela diff\u00e9remment de WooCommerce ou Magento car Shopify ne g\u00e9n\u00e8re pas d'URLs de filtre par d\u00e9faut. Les apps de filtrage tierces comme Smart Product Filter cr\u00e9ent ces URLs, et chaque app g\u00e8re les balises canonical et les contr\u00f4les d'indexation diff\u00e9remment. V\u00e9rifiez toujours comment votre app de filtrage g\u00e8re ces d\u00e9tails techniques.",
          items: [
            "Auditez le nombre d'URLs index\u00e9es dans GSC et comparez aux pages r\u00e9ellement indexables",
            "Bloquez les filtres sans valeur dans robots.txt comme premi\u00e8re ligne de d\u00e9fense",
            "Appliquez noindex aux pages filtr\u00e9es crawl\u00e9es malgr\u00e9 les r\u00e8gles robots.txt",
            "Indexez s\u00e9lectivement les combinaisons de filtres \u00e0 forte valeur avec demande prouv\u00e9e",
            "V\u00e9rifiez les param\u00e8tres des apps de filtrage tierces pour la gestion canonical et indexation",
          ],
        },
        {
          title: "V\u00e9rifier le statut d'indexation dans Google Search Console",
          content:
            "Google Search Console fournit deux outils principaux pour surveiller l'indexation. Le rapport Pages (anciennement rapport de couverture) montre combien de vos pages sont index\u00e9es et pourquoi le reste a \u00e9t\u00e9 exclu. L'outil d'inspection d'URL vous permet de v\u00e9rifier le statut de pages individuelles.\n\nDans le rapport Pages, concentrez-vous sur l'onglet \"Non index\u00e9\". Google regroupe les pages exclues par raison : \"Explor\u00e9e, actuellement non index\u00e9e\", \"D\u00e9couverte, actuellement non index\u00e9e\", \"Doublon sans canonical s\u00e9lectionn\u00e9e par l'utilisateur\", \"Exclue par une balise noindex\", et plusieurs autres. Chaque raison n\u00e9cessite une correction diff\u00e9rente.\n\n\"Explor\u00e9e, actuellement non index\u00e9e\" signifie que Google a visit\u00e9 la page mais a choisi de ne pas l'ajouter \u00e0 l'index. Cela signale g\u00e9n\u00e9ralement un probl\u00e8me de qualit\u00e9 de contenu. Am\u00e9liorer le contenu de la page, ajouter des descriptions uniques ou l'enrichir avec des avis et des donn\u00e9es structur\u00e9es peut aider.\n\n\"D\u00e9couverte, actuellement non index\u00e9e\" signifie que Google sait que l'URL existe mais n'a pas encore pris la peine de l'explorer. Cela indique une faible priorit\u00e9 de crawl, souvent caus\u00e9e par un maillage interne faible ou une page trop profonde dans la hi\u00e9rarchie du site.\n\nL'outil d'inspection d'URL vous montre exactement ce que Google voit quand il explore une page sp\u00e9cifique. Utilisez-le pour v\u00e9rifier que vos balises canonical sont respect\u00e9es, que votre page s'affiche correctement et qu'aucune balise noindex accidentelle ne bloque l'indexation. Nous recommandons d'inspecter 10 \u00e0 20 pages produits repr\u00e9sentatives chaque mois pour d\u00e9tecter les probl\u00e8mes t\u00f4t.",
          tip: "Exportez les donn\u00e9es \"Non index\u00e9\" de GSC en tableur et cat\u00e9gorisez les pages par type (produit, cat\u00e9gorie, filtre, blog). Cela r\u00e9v\u00e8le si vos probl\u00e8mes d'indexation sont concentr\u00e9s sur un type de page sp\u00e9cifique, rendant la correction plus cibl\u00e9e.",
        },
        {
          title: "\u00c9tapes pratiques pour am\u00e9liorer l'indexation des pages produits",
          content:
            "Commencez par auditer quelles pages produits sont actuellement index\u00e9es. Utilisez l'op\u00e9rateur site: dans Google (site:votreboutique.com/products/) pour obtenir un compte approximatif, puis croisez avec les donn\u00e9es GSC pour plus de pr\u00e9cision. Si moins de 70 % de vos pages produits sont index\u00e9es, il y a du travail.\n\nR\u00e9digez des descriptions de produits uniques pour vos produits les plus vendus et \u00e0 plus forte marge en priorit\u00e9. Ces pages ont le plus grand potentiel de revenus via la recherche organique. M\u00eame ajouter 150 \u00e0 200 mots de contenu unique et descriptif par page produit peut faire la diff\u00e9rence entre \u00eatre index\u00e9 et ignor\u00e9.\n\nConsolidez les pages qui ne servent aucun objectif ind\u00e9pendant. Si vous avez 30 variantes de couleur du m\u00eame produit et qu'aucun de ces termes sp\u00e9cifiques \u00e0 la couleur n'a de volume de recherche, consolidez-les sous une seule page produit avec un s\u00e9lecteur de couleur. Cette unique page forte surpassera 30 pages minces \u00e0 chaque fois.\n\nRenforcez le maillage interne vers les pages produits que vous voulez voir index\u00e9es. Liez depuis des articles de blog connexes, depuis la section produits mis en avant de la page d'accueil, et depuis d'autres pages produits via des widgets \"les clients ont aussi achet\u00e9\" ou \"produits associ\u00e9s\". Chaque lien interne suppl\u00e9mentaire signale \u00e0 Google que la page compte.\n\nEnfin, gardez votre sitemap propre. Supprimez les URLs qui retournent des erreurs 404, qui sont en noindex ou que vous avez d\u00e9cid\u00e9 de consolider. Un sitemap \u00e9pur\u00e9 ne contenant que les pages que vous voulez vraiment voir index\u00e9es donne \u00e0 Google une image plus claire de la structure de votre site. Pour approfondir ces fondations techniques, consultez notre guide sur le [SEO technique pour l'e-commerce](/blog/technical-seo-for-ecommerce).",
          items: [
            "Auditez les taux d'indexation actuels avec GSC et l'op\u00e9rateur site:",
            "R\u00e9digez des descriptions uniques pour les produits les plus vendus en priorit\u00e9",
            "Consolidez les pages de variantes minces sous des pages produits uniques et fortes",
            "Construisez des liens internes depuis les articles de blog, l'accueil et les produits associ\u00e9s",
            "Nettoyez votre sitemap pour n'inclure que les URLs r\u00e9ellement indexables",
          ],
        },
      ],
      navLabels: {
        previous: "Comment Google trouve les boutiques en ligne",
        next: "Facteurs de classement ecommerce",
      },
    },
    es: {
      badge: "Fundamentos de b\u00fasqueda",
      heading: "Rastreo e indexaci\u00f3n de p\u00e1ginas de producto",
      intro:
        "Que Google rastree tus p\u00e1ginas no garantiza que aparecer\u00e1n en los resultados de b\u00fasqueda. El rastreo y la indexaci\u00f3n son dos procesos separados, y entender la brecha entre ambos es cr\u00edtico para cualquier tienda que gestione miles de URLs de producto.",
      readTime: "10 min de lectura",
      sections: [
        {
          title: "Rastreo vs. indexaci\u00f3n: la diferencia que importa",
          content:
            "Rastreo significa que Googlebot visit\u00f3 tu p\u00e1gina y descarg\u00f3 su contenido. Indexaci\u00f3n significa que Google analiz\u00f3 ese contenido, lo consider\u00f3 digno de inclusi\u00f3n y lo almacen\u00f3 en su \u00edndice de b\u00fasqueda. Una p\u00e1gina puede ser rastreada pero no indexada, lo cual sucede m\u00e1s a menudo de lo que la mayor\u00eda de propietarios de tiendas creen.\n\nPiensa en el rastreo como Google recorriendo cada pasillo de tu tienda f\u00edsica. La indexaci\u00f3n es Google decidiendo qu\u00e9 productos merecen estar en el estante para que los compradores los encuentren. Si una p\u00e1gina de producto tiene contenido delgado, duplica otra p\u00e1gina o tiene problemas t\u00e9cnicos, Google puede rastrearla y luego decidir que no merece un lugar en el \u00edndice.\n\nPara una tienda online t\u00edpica con 20.000 p\u00e1ginas de producto, com\u00fanmente vemos que del 30 % al 50 % de esas p\u00e1ginas quedan sin indexar. Eso significa que miles de productos son invisibles en los resultados de b\u00fasqueda. La brecha entre p\u00e1ginas rastreadas e indexadas es donde se esconden la mayor\u00eda de las oportunidades de SEO para ecommerce.",
          items: [
            "Rastreado: Googlebot visit\u00f3 y descarg\u00f3 el contenido de la p\u00e1gina",
            "Indexado: Google analiz\u00f3 y almacen\u00f3 la p\u00e1gina en su base de datos de b\u00fasqueda",
            "Rastreado pero no indexado: Google vio la p\u00e1gina pero decidi\u00f3 no incluirla",
            "No rastreado: Google a\u00fan no ha visitado la p\u00e1gina o la omiti\u00f3 intencionalmente",
          ],
        },
        {
          title: "Por qu\u00e9 Google omite la indexaci\u00f3n de p\u00e1ginas de producto",
          content:
            "La raz\u00f3n m\u00e1s com\u00fan por la que Google se niega a indexar una p\u00e1gina de producto es el contenido duplicado o casi duplicado. Cuando 500 productos del mismo fabricante comparten descripciones id\u00e9nticas que solo difieren en el nombre del producto, Google ve poca raz\u00f3n para indexar las 500 versiones. Elige unas pocas e ignora el resto.\n\nEl contenido delgado es el segundo mayor culpable. Una p\u00e1gina de producto con una descripci\u00f3n de 20 palabras, un precio y un bot\u00f3n de compra proporciona casi ninguna informaci\u00f3n para que Google la eval\u00fae. Comp\u00e1ralo con un competidor cuya p\u00e1gina de producto incluye una descripci\u00f3n \u00fanica de 300 palabras, rese\u00f1as de clientes, tablas de especificaciones e instrucciones de uso. Google indexar\u00e1 la p\u00e1gina m\u00e1s rica y omitir\u00e1 la delgada.\n\nLas se\u00f1ales t\u00e9cnicas tambi\u00e9n pueden impedir la indexaci\u00f3n. Las p\u00e1ginas que cargan lentamente, devuelven errores soft 404, tienen etiquetas canonical contradictorias o est\u00e1n bloqueadas por directivas noindex nunca llegar\u00e1n al \u00edndice sin importar la calidad de su contenido.\n\nLas se\u00f1ales de calidad de p\u00e1gina tambi\u00e9n importan. Si tu sitio tiene una proporci\u00f3n alta de p\u00e1ginas de baja calidad, Google puede reducir la tasa de rastreo para todo tu dominio, dificultando que incluso tus buenas p\u00e1ginas se indexen r\u00e1pidamente. Una [gestion eficaz del presupuesto de rastreo](/academy/crawl-budget-management) te ayuda a enfocar la atencion de Google en tus paginas mas valiosas.",
          items: [
            "Descripciones duplicadas o casi duplicadas entre p\u00e1ginas de producto",
            "Contenido delgado con menos de 50 palabras de texto \u00fanico",
            "Tiempos de carga lentos superiores a 5 segundos",
            "Etiquetas canonical contradictorias o incorrectas",
            "Etiquetas noindex aplicadas accidentalmente por plugins o configuraciones del tema",
          ],
          tip: "Ejecuta un rastreo con Screaming Frog o Sitebulb y filtra por p\u00e1ginas con menos de 100 palabras de texto en el cuerpo. Esas p\u00e1ginas delgadas son tus principales candidatas para mejora de contenido o consolidaci\u00f3n.",
        },
        {
          title: "Etiquetas canonical y contenido duplicado en ecommerce",
          content:
            "Las etiquetas canonical le dicen a Google cu\u00e1l versi\u00f3n de una p\u00e1gina es la original cuando m\u00faltiples URLs muestran contenido similar o id\u00e9ntico. Para sitios de ecommerce, la canonicalizaci\u00f3n no es opcional. Sin ella, Google debe adivinar qu\u00e9 URL indexar, y a menudo adivina mal.\n\nLas variantes de producto crean el escenario canonical m\u00e1s com\u00fan. Una camiseta azul en /products/cotton-tee?color=blue y una versi\u00f3n roja en /products/cotton-tee?color=red pueden compartir el 90 % de su contenido. Si son realmente el mismo producto con un selector de color, ambas URLs deber\u00edan canonicalizar a la p\u00e1gina principal del producto en /products/cotton-tee. Si las variantes de color tienen demanda de b\u00fasqueda significativamente diferente (la gente busca espec\u00edficamente \"camiseta algod\u00f3n azul\"), pueden justificar p\u00e1ginas indexadas separadas.\n\nLa navegaci\u00f3n facetada genera a\u00fan m\u00e1s complejidad canonical. Una URL como /shoes?size=10&color=black&brand=nike&sort=price-low es una de potencialmente millones de combinaciones de filtro. Estas vistas filtradas deber\u00edan canonicalizar a la p\u00e1gina de categor\u00eda principal o bloquearse de la indexaci\u00f3n por completo. La elecci\u00f3n depende de si esa combinaci\u00f3n espec\u00edfica de filtros tiene demanda de b\u00fasqueda real.\n\nVemos dos errores canonical comunes en tiendas. Primero, canonicals circulares donde la p\u00e1gina A canonicaliza a la p\u00e1gina B y la p\u00e1gina B canonicaliza de vuelta a la p\u00e1gina A. Segundo, canonicalizar todas las variantes de producto a un solo padre cuando cada variante tiene volumen de b\u00fasqueda independiente, esencialmente ocultando p\u00e1ginas posicionables de Google.",
        },
        {
          title: "Gestionar la inflaci\u00f3n de \u00edndice por filtros y facetas",
          content:
            "La inflaci\u00f3n de \u00edndice ocurre cuando Google indexa miles de URLs de bajo valor que diluyen las se\u00f1ales de calidad general de tu sitio. Para ecommerce, la fuente principal de inflaci\u00f3n de \u00edndice es la navegaci\u00f3n facetada que genera URLs filtrables.\n\nConsidera una tienda de muebles con 200 productos en la categor\u00eda \"sof\u00e1s\". Si los compradores pueden filtrar por color (10 opciones), material (8 opciones), rango de precio (5 tramos) y capacidad de asientos (4 opciones), las combinaciones de URL posibles alcanzan 1.600 antes de considerar filtros de selecci\u00f3n m\u00faltiple. La mayor\u00eda de estas vistas filtradas muestran el mismo peque\u00f1o conjunto de productos en diferentes \u00f3rdenes.\n\nEl enfoque est\u00e1ndar para controlar la inflaci\u00f3n de \u00edndice implica tres capas. Primero, usa [robots.txt](/academy/robots-txt-and-xml-sitemaps) para bloquear a Googlebot de rastrear los patrones de filtro sin valor m\u00e1s evidentes. Segundo, aplica etiquetas noindex a las p\u00e1ginas filtradas que Googlebot a\u00fan puede alcanzar por otros caminos. Tercero, usa etiquetas canonical para apuntar las vistas filtradas a la p\u00e1gina de categor\u00eda principal.\n\nUn enfoque m\u00e1s quir\u00fargico es permitir selectivamente la indexaci\u00f3n en combinaciones de filtros que coincidan con consultas de b\u00fasqueda reales. Si la gente busca \"sof\u00e1s de cuero\" en n\u00fameros significativos, la URL /sofas?material=cuero podr\u00eda valer la pena indexar. Pero /sofas?material=cuero&color=marron&asientos=3 casi seguro que no.\n\nLas tiendas Shopify manejan esto de forma diferente a WooCommerce o Magento porque Shopify no genera URLs de filtro por defecto. Las apps de filtro de terceros como Smart Product Filter crean estas URLs, y cada app maneja las etiquetas canonical y los controles de indexaci\u00f3n de manera diferente. Siempre verifica c\u00f3mo tu app de filtros gestiona estos detalles t\u00e9cnicos.",
          items: [
            "Audita el n\u00famero de URLs indexadas en GSC y compara con tus p\u00e1ginas indexables previstas",
            "Bloquea patrones de filtro sin valor en robots.txt como primera l\u00ednea de defensa",
            "Aplica noindex a p\u00e1ginas filtradas que se rastrean pese a las reglas de robots.txt",
            "Indexa selectivamente combinaciones de filtro de alto valor con demanda probada",
            "Revisa la configuraci\u00f3n de apps de filtro de terceros para canonical e indexaci\u00f3n",
          ],
        },
        {
          title: "Verificar el estado de indexaci\u00f3n en Google Search Console",
          content:
            "Google Search Console proporciona dos herramientas principales para monitorear la indexaci\u00f3n. El informe de P\u00e1ginas (antes informe de Cobertura) muestra cu\u00e1ntas de tus p\u00e1ginas est\u00e1n indexadas y por qu\u00e9 el resto fue excluido. La herramienta de Inspecci\u00f3n de URLs te permite verificar el estado de p\u00e1ginas individuales.\n\nEn el informe de P\u00e1ginas, conc\u00e9ntrate en la pesta\u00f1a \"No indexadas\". Google agrupa las p\u00e1ginas excluidas por raz\u00f3n: \"Rastreada, actualmente no indexada\", \"Descubierta, actualmente no indexada\", \"Duplicado sin canonical seleccionada por el usuario\", \"Excluida por etiqueta noindex\", y varias otras. Cada raz\u00f3n requiere una soluci\u00f3n diferente.\n\n\"Rastreada, actualmente no indexada\" significa que Google visit\u00f3 la p\u00e1gina pero eligi\u00f3 no a\u00f1adirla al \u00edndice. Esto normalmente se\u00f1ala un problema de calidad de contenido. Mejorar el contenido de la p\u00e1gina, a\u00f1adir descripciones \u00fanicas o enriquecerla con rese\u00f1as y datos estructurados puede ayudar.\n\n\"Descubierta, actualmente no indexada\" significa que Google sabe que la URL existe pero no se ha molestado en rastrearla a\u00fan. Esto indica baja prioridad de rastreo, a menudo causada por enlazado interno d\u00e9bil o la p\u00e1gina estando demasiado profunda en la jerarqu\u00eda del sitio.\n\nLa herramienta de Inspecci\u00f3n de URLs te muestra exactamente lo que Google ve cuando rastrea una p\u00e1gina espec\u00edfica. \u00dasala para verificar que tus etiquetas canonical est\u00e9n siendo respetadas, que tu p\u00e1gina se renderice correctamente y que no haya etiquetas noindex accidentales bloqueando la indexaci\u00f3n. Recomendamos inspeccionar de 10 a 20 p\u00e1ginas de producto representativas mensualmente para detectar problemas temprano.",
          tip: "Exporta los datos de \"No indexadas\" de GSC como hoja de c\u00e1lculo y categoriza las p\u00e1ginas por tipo (producto, categor\u00eda, filtro, blog). Esto revela si tus problemas de indexaci\u00f3n se concentran en un tipo de p\u00e1gina espec\u00edfico, haciendo la soluci\u00f3n m\u00e1s dirigida.",
        },
        {
          title: "Pasos pr\u00e1cticos para mejorar la indexaci\u00f3n de p\u00e1ginas de producto",
          content:
            "Comienza auditando qu\u00e9 p\u00e1ginas de producto est\u00e1n indexadas actualmente. Usa el operador site: en Google (site:tutienda.com/products/) para obtener un conteo aproximado, luego contrasta con los datos de GSC para mayor precisi\u00f3n. Si menos del 70 % de tus p\u00e1ginas de producto est\u00e1n indexadas, tienes trabajo por hacer.\n\nEscribe descripciones de producto \u00fanicas primero para tus productos m\u00e1s vendidos y de mayor margen. Estas p\u00e1ginas tienen el mayor potencial de ingresos desde la b\u00fasqueda org\u00e1nica. Incluso a\u00f1adir de 150 a 200 palabras de contenido \u00fanico y descriptivo por p\u00e1gina de producto puede marcar la diferencia entre indexada e ignorada.\n\nConsolida p\u00e1ginas que no sirven ning\u00fan prop\u00f3sito independiente. Si tienes 30 variantes de color del mismo producto y ninguno de esos t\u00e9rminos espec\u00edficos de color tiene volumen de b\u00fasqueda, consol\u00eddalos bajo una sola p\u00e1gina de producto con un selector de color. Esa \u00fanica p\u00e1gina fuerte superar\u00e1 a 30 p\u00e1ginas delgadas siempre.\n\nFortalece el enlazado interno hacia p\u00e1ginas de producto que quieres indexadas. Enlaza desde publicaciones de blog relacionadas, desde la secci\u00f3n de productos destacados de la p\u00e1gina de inicio y desde otras p\u00e1ginas de producto v\u00eda widgets de \"los clientes tambi\u00e9n compraron\" o \"productos relacionados\". Cada enlace interno adicional se\u00f1ala a Google que la p\u00e1gina es relevante.\n\nFinalmente, mant\u00e9n tu sitemap limpio. Elimina URLs que devuelven errores 404, que est\u00e1n configuradas como noindex o que has decidido consolidar. Un sitemap limpio que solo contenga p\u00e1ginas que genuinamente quieres indexadas le da a Google una imagen m\u00e1s clara de la estructura de tu sitio. Para profundizar en estos fundamentos tecnicos, consulta nuestra guia de [SEO tecnico para ecommerce](/blog/technical-seo-for-ecommerce).",
          items: [
            "Audita las tasas de indexaci\u00f3n actuales usando GSC y el operador site:",
            "Escribe descripciones \u00fanicas para los productos m\u00e1s vendidos primero",
            "Consolida p\u00e1ginas de variantes delgadas bajo p\u00e1ginas de producto fuertes",
            "Construye enlaces internos desde el blog, la p\u00e1gina de inicio y productos relacionados",
            "Limpia tu sitemap para incluir solo URLs genuinamente indexables",
          ],
        },
      ],
      navLabels: {
        previous: "C\u00f3mo Google encuentra tiendas online",
        next: "Factores de posicionamiento para ecommerce",
      },
    },
    it: {
      badge: "Fondamenti della ricerca",
      heading: "Scansione e indicizzazione delle pagine prodotto",
      intro:
        "Il fatto che Google scansioni le tue pagine non garantisce che appariranno nei risultati di ricerca. La scansione e l'indicizzazione sono due processi separati, e comprendere il divario tra i due \u00e8 fondamentale per qualsiasi negozio che gestisce migliaia di URL di prodotto.",
      readTime: "10 min di lettura",
      sections: [
        {
          title: "Scansione vs. indicizzazione: la differenza che conta",
          content:
            "Scansione significa che Googlebot ha visitato la tua pagina e ne ha scaricato il contenuto. Indicizzazione significa che Google ha analizzato quel contenuto, lo ha ritenuto degno di inclusione e lo ha memorizzato nel suo indice di ricerca. Una pagina pu\u00f2 essere scansionata ma non indicizzata, cosa che accade pi\u00f9 spesso di quanto la maggior parte dei proprietari di negozi realizzi.\n\nPensa alla scansione come Google che percorre ogni corsia del tuo negozio fisico. L'indicizzazione \u00e8 Google che decide quali prodotti meritano di essere messi sullo scaffale perch\u00e9 gli acquirenti li trovino. Se una pagina prodotto ha contenuti sottili, duplica un'altra pagina o ha problemi tecnici, Google pu\u00f2 scansionarla e poi decidere che non merita un posto nell'indice.\n\nPer un tipico negozio online con 20.000 pagine prodotto, vediamo comunemente che dal 30 % al 50 % di quelle pagine non viene indicizzato. Ci\u00f2 significa che migliaia di prodotti sono invisibili nei risultati di ricerca. Il divario tra pagine scansionate e indicizzate \u00e8 dove si nascondono la maggior parte delle opportunit\u00e0 SEO ecommerce.",
          items: [
            "Scansionata: Googlebot ha visitato e scaricato il contenuto della pagina",
            "Indicizzata: Google ha analizzato e memorizzato la pagina nel suo database di ricerca",
            "Scansionata ma non indicizzata: Google ha visto la pagina ma ha scelto di non includerla",
            "Non scansionata: Google non ha ancora visitato la pagina o l'ha saltata intenzionalmente",
          ],
        },
        {
          title: "Perch\u00e9 Google salta l'indicizzazione delle pagine prodotto",
          content:
            "La ragione pi\u00f9 comune per cui Google rifiuta di indicizzare una pagina prodotto \u00e8 il contenuto duplicato o quasi duplicato. Quando 500 prodotti dello stesso produttore condividono descrizioni identiche che differiscono solo nel nome del prodotto, Google vede poco motivo per indicizzare tutte le 500 versioni. Ne sceglie alcune e ignora il resto.\n\nIl contenuto sottile \u00e8 il secondo maggior colpevole. Una pagina prodotto con una descrizione di 20 parole, un prezzo e un pulsante acquista fornisce quasi nessuna informazione per la valutazione di Google. Confrontala con un concorrente la cui pagina prodotto include una descrizione unica di 300 parole, recensioni dei clienti, tabelle delle specifiche e istruzioni d'uso. Google indicizzer\u00e0 la pagina pi\u00f9 ricca e salter\u00e0 quella sottile.\n\nAnche i segnali tecnici possono impedire l'indicizzazione. Le pagine che caricano lentamente, restituiscono errori soft 404, hanno tag canonical contrastanti o sono bloccate da direttive noindex non entreranno mai nell'indice, indipendentemente dalla qualit\u00e0 del loro contenuto.\n\nContano anche i segnali di qualit\u00e0 della pagina. Se il tuo sito ha un'alta proporzione di pagine di bassa qualit\u00e0, Google pu\u00f2 ridurre la frequenza di crawl per l'intero dominio, rendendo pi\u00f9 difficile l'indicizzazione rapida anche delle tue pagine valide. Approfondisci con la nostra guida sulla [gestione del budget di crawl](/academy/crawl-budget-management).",
          items: [
            "Descrizioni duplicate o quasi duplicate tra le pagine prodotto",
            "Contenuto sottile con meno di 50 parole di testo unico",
            "Tempi di caricamento lenti superiori a 5 secondi",
            "Tag canonical contrastanti o errati",
            "Tag noindex applicati accidentalmente da plugin o impostazioni del tema",
          ],
          tip: "Esegui un crawl con Screaming Frog o Sitebulb e filtra le pagine con meno di 100 parole di corpo del testo. Quelle pagine sottili sono i tuoi principali candidati per il miglioramento o il consolidamento dei contenuti.",
        },
        {
          title: "Tag canonical e contenuto duplicato nell'ecommerce",
          content:
            "I tag canonical indicano a Google quale versione di una pagina \u00e8 l'originale quando pi\u00f9 URL mostrano contenuto simile o identico. Per i siti ecommerce, la canonicalizzazione non \u00e8 opzionale. Senza di essa, Google deve indovinare quale URL indicizzare, e spesso indovina male.\n\nLe varianti di prodotto creano lo scenario canonical pi\u00f9 comune. Una maglietta blu a /products/cotton-tee?color=blue e una versione rossa a /products/cotton-tee?color=red possono condividere il 90 % del contenuto. Se sono veramente lo stesso prodotto con un selettore di colore, entrambe le URL dovrebbero canonicalizzare alla pagina prodotto principale a /products/cotton-tee. Se le varianti di colore hanno una domanda di ricerca significativamente diversa (le persone cercano specificamente \"maglietta cotone blu\"), possono giustificare pagine indicizzate separate.\n\nLa navigazione a faccette genera ancora pi\u00f9 complessit\u00e0 canonical. Un URL come /shoes?size=10&color=black&brand=nike&sort=price-low \u00e8 una delle potenzialmente milioni di combinazioni di filtri. Queste viste filtrate dovrebbero canonicalizzare alla pagina di categoria principale o essere bloccate dall'indicizzazione interamente. La scelta dipende dal fatto che quella specifica combinazione di filtri abbia una reale domanda di ricerca.\n\nVediamo i negozi commettere due errori canonical comuni. Primo, canonical circolari dove la pagina A canonicalizza alla pagina B e la pagina B canonicalizza alla pagina A. Secondo, canonicalizzare tutte le varianti di prodotto a un singolo genitore quando ogni variante ha volume di ricerca indipendente, nascondendo essenzialmente pagine posizionabili da Google.",
        },
        {
          title: "Gestire il gonfiamento dell'indice da filtri e faccette",
          content:
            "Il gonfiamento dell'indice si verifica quando Google indicizza migliaia di URL di basso valore che diluiscono i segnali di qualit\u00e0 complessivi del tuo sito. Per l'ecommerce, la fonte principale di gonfiamento dell'indice \u00e8 la navigazione a faccette che genera URL filtrabili.\n\nConsidera un negozio di mobili con 200 prodotti nella categoria \"divani\". Se gli acquirenti possono filtrare per colore (10 opzioni), materiale (8 opzioni), fascia di prezzo (5 intervalli) e posti a sedere (4 opzioni), le possibili combinazioni di URL raggiungono 1.600 prima di considerare i filtri a selezione multipla. La maggior parte di queste viste filtrate mostra lo stesso piccolo insieme di prodotti in ordini diversi.\n\nL'approccio standard per controllare il gonfiamento dell'indice coinvolge tre livelli. Primo, usa [robots.txt](/academy/robots-txt-and-xml-sitemaps) per bloccare Googlebot dalla scansione dei pattern di filtro senza valore pi\u00f9 ovvi. Secondo, applica tag noindex alle pagine filtrate che Googlebot pu\u00f2 ancora raggiungere attraverso altri percorsi. Terzo, usa tag canonical per puntare le viste filtrate alla pagina di categoria principale.\n\nUn approccio pi\u00f9 chirurgico \u00e8 consentire selettivamente l'indicizzazione sulle combinazioni di filtri che corrispondono a query di ricerca reali. Se le persone cercano \"divani in pelle\" in numeri significativi, l'URL /divani?materiale=pelle potrebbe valere l'indicizzazione. Ma /divani?materiale=pelle&colore=marrone&posti=3 quasi certamente no.\n\nI negozi Shopify gestiscono questo diversamente da WooCommerce o Magento perch\u00e9 Shopify non genera URL di filtro per default. Le app di filtro di terze parti come Smart Product Filter creano queste URL, e ogni app gestisce tag canonical e controlli di indicizzazione diversamente. Verifica sempre come la tua app di filtro gestisce questi dettagli tecnici.",
          items: [
            "Verifica il conteggio delle URL indicizzate in GSC e confronta con le pagine indicizzabili previste",
            "Blocca i pattern di filtro senza valore in robots.txt come prima linea di difesa",
            "Applica noindex alle pagine filtrate che vengono scansionate nonostante le regole robots.txt",
            "Indicizza selettivamente le combinazioni di filtro ad alto valore con domanda comprovata",
            "Rivedi le impostazioni delle app di filtro di terze parti per la gestione canonical e indicizzazione",
          ],
        },
        {
          title: "Controllare lo stato di indicizzazione in Google Search Console",
          content:
            "Google Search Console fornisce due strumenti principali per monitorare l'indicizzazione. Il report Pagine (precedentemente report Copertura) mostra quante delle tue pagine sono indicizzate e perch\u00e9 il resto \u00e8 stato escluso. Lo strumento Controllo URL ti permette di verificare lo stato di singole pagine.\n\nNel report Pagine, concentrati sulla scheda \"Non indicizzate\". Google raggruppa le pagine escluse per motivo: \"Scansionata, attualmente non indicizzata\", \"Scoperta, attualmente non indicizzata\", \"Duplicato senza canonical selezionata dall'utente\", \"Esclusa dal tag noindex\", e diversi altri. Ogni motivo richiede una correzione diversa.\n\n\"Scansionata, attualmente non indicizzata\" significa che Google ha visitato la pagina ma ha scelto di non aggiungerla all'indice. Questo di solito segnala un problema di qualit\u00e0 dei contenuti. Migliorare il contenuto della pagina, aggiungere descrizioni uniche o arricchirla con recensioni e dati strutturati pu\u00f2 aiutare.\n\n\"Scoperta, attualmente non indicizzata\" significa che Google sa che l'URL esiste ma non si \u00e8 ancora preso la briga di scansionarla. Questo indica bassa priorit\u00e0 di crawl, spesso causata da linking interno debole o dalla pagina che si trova troppo in profondit\u00e0 nella gerarchia del sito.\n\nLo strumento Controllo URL ti mostra esattamente cosa vede Google quando scansiona una pagina specifica. Usalo per verificare che i tuoi tag canonical vengano rispettati, che la tua pagina sia renderizzata correttamente e che nessun tag noindex accidentale stia bloccando l'indicizzazione. Raccomandiamo di ispezionare da 10 a 20 pagine prodotto rappresentative mensilmente per individuare i problemi in anticipo.",
          tip: "Esporta i dati \"Non indicizzate\" da GSC come foglio di calcolo e categorizza le pagine per tipo (prodotto, categoria, filtro, blog). Questo rivela se i tuoi problemi di indicizzazione sono concentrati in un tipo di pagina specifico, rendendo la correzione pi\u00f9 mirata.",
        },
        {
          title: "Passi pratici per migliorare l'indicizzazione delle pagine prodotto",
          content:
            "Inizia verificando quali pagine prodotto sono attualmente indicizzate. Usa l'operatore site: in Google (site:tuonegozio.com/products/) per ottenere un conteggio approssimativo, poi confronta con i dati GSC per accuratezza. Se meno del 70 % delle tue pagine prodotto sono indicizzate, hai del lavoro da fare.\n\nScrivi descrizioni di prodotto uniche per i tuoi prodotti pi\u00f9 venduti e a margine pi\u00f9 alto prima. Queste pagine hanno il maggior potenziale di ricavi dalla ricerca organica. Anche aggiungere da 150 a 200 parole di contenuto unico e descrittivo per pagina prodotto pu\u00f2 fare la differenza tra indicizzata e ignorata.\n\nConsolida le pagine che non servono a uno scopo indipendente. Se hai 30 varianti di colore dello stesso prodotto e nessuno di quei termini specifici per colore ha volume di ricerca, consolidali sotto un'unica pagina prodotto con un selettore di colore. Quella singola pagina forte superer\u00e0 30 pagine sottili ogni volta.\n\nRafforza il linking interno verso le pagine prodotto che vuoi indicizzate. Linka da articoli di blog correlati, dalla sezione prodotti in evidenza della homepage e da altre pagine prodotto tramite widget \"i clienti hanno anche acquistato\" o \"prodotti correlati\". Ogni link interno aggiuntivo segnala a Google che la pagina \u00e8 importante.\n\nInfine, mantieni la tua sitemap pulita. Rimuovi le URL che restituiscono errori 404, che sono impostate su noindex o che hai deciso di consolidare. Una sitemap snella che contiene solo pagine che vuoi genuinamente indicizzate d\u00e0 a Google un'immagine pi\u00f9 chiara della struttura del tuo sito. Per approfondire, consulta la nostra guida sulla [SEO tecnica per l'ecommerce](/blog/technical-seo-for-ecommerce).",
          items: [
            "Verifica i tassi di indicizzazione attuali usando GSC e l'operatore site:",
            "Scrivi descrizioni uniche per i prodotti pi\u00f9 venduti prima",
            "Consolida le pagine di varianti sottili sotto singole pagine prodotto forti",
            "Costruisci link interni da articoli del blog, homepage e prodotti correlati",
            "Pulisci la tua sitemap per includere solo URL genuinamente indicizzabili",
          ],
        },
      ],
      navLabels: {
        previous: "Come Google trova i negozi online",
        next: "Fattori di posizionamento ecommerce",
      },
    },
    nl: {
      badge: "Zoekfundamenten",
      heading: "Crawling en indexering van productpagina's",
      intro:
        "Dat Google je pagina's crawlt, garandeert niet dat ze in de zoekresultaten verschijnen. Crawling en indexering zijn twee aparte processen, en het begrijpen van het verschil ertussen is cruciaal voor elke webshop die met duizenden product-URL's werkt.",
      readTime: "10 min leestijd",
      sections: [
        {
          title: "Crawling vs. indexering: het verschil dat ertoe doet",
          content:
            "Crawling betekent dat Googlebot je pagina heeft bezocht en de inhoud heeft gedownload. Indexering betekent dat Google die inhoud heeft geanalyseerd, het waardig heeft bevonden voor opname en het heeft opgeslagen in zijn zoekindex. Een pagina kan gecrawld maar niet ge\u00efndexeerd worden, wat vaker voorkomt dan de meeste webshop-eigenaren beseffen.\n\nDenk aan crawling als Google die door elk gangpad in je fysieke winkel loopt. Indexering is Google die besluit welke producten het waard zijn om in het schap te plaatsen zodat shoppers ze kunnen vinden. Als een productpagina dunne content heeft, een andere pagina dupliceert of technische problemen heeft, kan Google het crawlen en vervolgens besluiten dat het geen plek in de index verdient.\n\nVoor een typische webshop met 20.000 productpagina's zien we gewoonlijk dat 30 % tot 50 % van die pagina's niet ge\u00efndexeerd wordt. Dat betekent dat duizenden producten onzichtbaar zijn in de zoekresultaten. De kloof tussen gecrawlde en ge\u00efndexeerde pagina's is waar de meeste ecommerce-SEO-kansen zich bevinden.",
          items: [
            "Gecrawld: Googlebot heeft de pagina bezocht en de inhoud gedownload",
            "Ge\u00efndexeerd: Google heeft de pagina geanalyseerd en opgeslagen in zijn zoekdatabase",
            "Gecrawld maar niet ge\u00efndexeerd: Google heeft de pagina gezien maar koos het niet op te nemen",
            "Niet gecrawld: Google heeft de pagina nog niet bezocht of bewust overgeslagen",
          ],
        },
        {
          title: "Waarom Google productpagina's overslaat bij indexering",
          content:
            "De meest voorkomende reden waarom Google weigert een productpagina te indexeren is dubbele of bijna-dubbele content. Wanneer 500 producten van dezelfde fabrikant identieke beschrijvingen delen die alleen in productnaam verschillen, ziet Google weinig reden om alle 500 versies te indexeren. Het kiest er een paar uit en negeert de rest.\n\nDunne content is de tweede grootste boosdoener. Een productpagina met een beschrijving van 20 woorden, een prijs en een koop-knop biedt Google bijna geen informatie om te evalueren. Vergelijk dat met een concurrent wiens productpagina een unieke beschrijving van 300 woorden bevat, klantreviews, specificatietabellen en gebruiksinstructies. Google zal de rijkere pagina indexeren en de dunne overslaan.\n\nTechnische signalen kunnen ook indexering voorkomen. Pagina's die langzaam laden, soft 404-fouten retourneren, conflicterende canonical tags hebben of geblokkeerd zijn door noindex-richtlijnen zullen nooit in de index komen, ongeacht hun contentkwaliteit.\n\nPaginakwaliteitssignalen zijn ook van belang. Als je site een hoge verhouding van pagina's van lage kwaliteit heeft, kan Google de crawlfrequentie voor je hele domein verlagen, waardoor het moeilijker wordt om zelfs je goede pagina's snel ge\u00efndexeerd te krijgen.\n\nEffectief [crawlbudgetbeheer](/academy/crawl-budget-management) helpt je de aandacht van Google te richten op je meest waardevolle pagina's.",
          items: [
            "Dubbele of bijna-dubbele beschrijvingen over productpagina's",
            "Dunne content met minder dan 50 woorden unieke tekst",
            "Trage laadtijden van meer dan 5 seconden",
            "Conflicterende of onjuiste canonical tags",
            "Noindex tags per ongeluk toegepast door plugins of thema-instellingen",
          ],
          tip: "Voer een crawl uit met Screaming Frog of Sitebulb en filter op pagina's met minder dan 100 woorden bodytekst. Die dunne pagina's zijn je topkandidaten voor contentverbetering of consolidatie.",
        },
        {
          title: "Canonical tags en dubbele content in ecommerce",
          content:
            "Canonical tags vertellen Google welke versie van een pagina het origineel is wanneer meerdere URL's vergelijkbare of identieke content tonen. Voor ecommerce-sites is canonicalisatie niet optioneel. Zonder dit moet Google raden welke URL te indexeren, en het raadt vaak verkeerd.\n\nProductvarianten cre\u00ebren het meest voorkomende canonical-scenario. Een blauw t-shirt op /products/cotton-tee?color=blue en een rode versie op /products/cotton-tee?color=red kunnen 90 % van hun pagina-inhoud delen. Als dit echt hetzelfde product is met een kleurselector, moeten beide URL's canonicaliseren naar de hoofdproductpagina op /products/cotton-tee. Als de kleurvarianten een wezenlijk verschillende zoekvraag hebben (mensen zoeken specifiek naar \"blauw katoenen t-shirt\"), kunnen ze aparte ge\u00efndexeerde pagina's rechtvaardigen.\n\nGefacetteerde navigatie genereert nog meer canonical-complexiteit. Een URL als /shoes?size=10&color=black&brand=nike&sort=price-low is een van potentieel miljoenen filtercombinaties. Deze gefilterde weergaven moeten ofwel canonicaliseren naar de hoofdcategoriepagina of volledig worden geblokkeerd voor indexering. De keuze hangt af van of die specifieke filtercombinatie echte zoekvraag heeft.\n\nWe zien webshops twee veelgemaakte canonical-fouten maken. Ten eerste, circulaire canonicals waar pagina A canonicaliseert naar pagina B en pagina B terug naar pagina A. Ten tweede, alle productvarianten canonicaliseren naar \u00e9\u00e9n ouder terwijl elke variant onafhankelijk zoekvolume heeft, waardoor rankbare pagina's effectief worden verborgen voor Google.",
        },
        {
          title: "Index-opblazing door filters en facetten beheren",
          content:
            "Index-opblazing treedt op wanneer Google duizenden URL's van lage waarde indexeert die de algehele kwaliteitssignalen van je site verwateren. Voor ecommerce is de primaire bron van index-opblazing gefacetteerde navigatie die filterbare URL's genereert.\n\nNeem een meubelwinkel met 200 producten in de categorie \"banken\". Als shoppers kunnen filteren op kleur (10 opties), materiaal (8 opties), prijsklasse (5 bereiken) en zitcapaciteit (4 opties), bereiken de mogelijke URL-combinaties 1.600 v\u00f3\u00f3r het meenemen van multi-select filters. De meeste van deze gefilterde weergaven tonen dezelfde kleine set producten in verschillende volgordes.\n\nDe standaardaanpak om index-opblazing te beheersen omvat drie lagen. Ten eerste, gebruik [robots.txt](/academy/robots-txt-and-xml-sitemaps) om Googlebot te blokkeren van het crawlen van de meest voor de hand liggende waardeloze filterpatronen. Ten tweede, pas noindex tags toe op gefilterde pagina's die Googlebot nog steeds via andere paden kan bereiken. Ten derde, gebruik canonical tags om gefilterde weergaven terug te verwijzen naar de hoofdcategoriepagina.\n\nEen meer chirurgische aanpak is selectief indexering toe te staan op filtercombinaties die overeenkomen met echte zoekopdrachten. Als mensen in betekenisvolle aantallen zoeken naar \"leren banken\", is de URL /banken?materiaal=leer het misschien waard om te indexeren. Maar /banken?materiaal=leer&kleur=bruin&zitplaatsen=3 vrijwel zeker niet.\n\nShopify-webshops gaan hier anders mee om dan WooCommerce of Magento omdat Shopify standaard geen filter-URL's genereert. Derde-partij filter-apps zoals Smart Product Filter maken deze URL's aan, en elke app gaat anders om met canonical tags en indexeringscontroles. Controleer altijd hoe je filter-app deze technische details beheert.",
          items: [
            "Audit het aantal ge\u00efndexeerde URL's in GSC en vergelijk met je beoogde indexeerbare pagina's",
            "Blokkeer waardeloze filterpatronen in robots.txt als eerste verdedigingslinie",
            "Pas noindex toe op gefilterde pagina's die ondanks robots.txt-regels worden gecrawld",
            "Indexeer selectief waardevolle filtercombinaties met bewezen zoekvraag",
            "Controleer instellingen van derde-partij filter-apps voor canonical- en indexeringsafhandeling",
          ],
        },
        {
          title: "Indexeringsstatus controleren in Google Search Console",
          content:
            "Google Search Console biedt twee primaire tools voor het monitoren van indexering. Het Pagina's-rapport (voorheen Dekkingsrapport) toont hoeveel van je pagina's ge\u00efndexeerd zijn en waarom de rest is uitgesloten. De URL-inspectietool laat je de status van individuele pagina's controleren.\n\nIn het Pagina's-rapport, focus op het tabblad \"Niet ge\u00efndexeerd\". Google groepeert uitgesloten pagina's op reden: \"Gecrawld - momenteel niet ge\u00efndexeerd\", \"Ontdekt - momenteel niet ge\u00efndexeerd\", \"Duplicaat zonder door gebruiker geselecteerde canonical\", \"Uitgesloten door noindex-tag\", en diverse andere. Elke reden vereist een andere oplossing.\n\n\"Gecrawld - momenteel niet ge\u00efndexeerd\" betekent dat Google de pagina heeft bezocht maar ervoor heeft gekozen deze niet aan de index toe te voegen. Dit signaleert meestal een contentkwaliteitsprobleem. De content verbeteren, unieke beschrijvingen toevoegen of verrijken met reviews en gestructureerde data kan helpen.\n\n\"Ontdekt - momenteel niet ge\u00efndexeerd\" betekent dat Google weet dat de URL bestaat maar nog niet de moeite heeft genomen om deze te crawlen. Dit wijst op lage crawlprioriteit, vaak veroorzaakt door zwakke interne linking of de pagina die te diep in de site-hi\u00ebrarchie zit.\n\nDe URL-inspectietool toont je precies wat Google ziet wanneer het een specifieke pagina crawlt. Gebruik het om te verifi\u00ebren dat je canonical tags worden gerespecteerd, dat je pagina correct wordt gerenderd en dat er geen onbedoelde noindex tags de indexering blokkeren. We raden aan maandelijks 10 tot 20 representatieve productpagina's te inspecteren om problemen vroeg te signaleren.",
          tip: "Exporteer de \"Niet ge\u00efndexeerd\"-data uit GSC als spreadsheet en categoriseer pagina's op type (product, categorie, filter, blog). Dit onthult of je indexeringsproblemen geconcentreerd zijn in een specifiek paginatype, waardoor de oplossing gerichter wordt.",
        },
        {
          title: "Praktische stappen om productpagina-indexering te verbeteren",
          content:
            "Begin met het auditen welke productpagina's momenteel ge\u00efndexeerd zijn. Gebruik de site:-operator in Google (site:jouwwebshop.nl/products/) om een ruwe telling te krijgen en kruis deze dan aan met GSC-data voor nauwkeurigheid. Als minder dan 70 % van je productpagina's ge\u00efndexeerd is, heb je werk te doen.\n\nSchrijf unieke productbeschrijvingen eerst voor je bestverkopende en hoogste-marge producten. Deze pagina's hebben het meeste omzetpotentieel uit organisch zoeken. Zelfs het toevoegen van 150 tot 200 woorden unieke, beschrijvende content per productpagina kan het verschil maken tussen ge\u00efndexeerd en genegeerd.\n\nConsolideer pagina's die geen onafhankelijk doel dienen. Als je 30 kleurvarianten van hetzelfde product hebt en geen van die kleurspecifieke termen zoekvolume heeft, consolideer ze onder \u00e9\u00e9n enkele productpagina met een kleurselector. Die ene sterke pagina presteert beter dan 30 dunne pagina's, elke keer.\n\nVersterk interne links naar productpagina's die je ge\u00efndexeerd wilt hebben. Link vanuit gerelateerde blogposts, vanuit de uitgelichte productensectie op de homepage en vanuit andere productpagina's via \"klanten kochten ook\" of \"gerelateerde producten\"-widgets. Elke extra interne link signaleert aan Google dat de pagina belangrijk is.\n\nHoud tot slot je sitemap schoon. Verwijder URL's die 404-fouten retourneren, die op noindex staan of die je hebt besloten te consolideren. Een slanke sitemap die alleen pagina's bevat die je echt ge\u00efndexeerd wilt hebben, geeft Google een duidelijker beeld van je sitestructuur.\n\nVoor een diepere duik in deze technische fundamenten, zie onze gids over [technische SEO voor ecommerce](/blog/technical-seo-for-ecommerce).",
          items: [
            "Audit huidige indexeringspercentages met GSC en de site:-operator",
            "Schrijf unieke beschrijvingen eerst voor bestverkopende producten",
            "Consolideer dunne variantpagina's onder enkele sterke productpagina's",
            "Bouw interne links vanuit blogposts, homepage en gerelateerde producten",
            "Maak je sitemap schoon zodat deze alleen echt indexeerbare URL's bevat",
          ],
        },
      ],
      navLabels: {
        previous: "Hoe Google webshops vindt",
        next: "Ecommerce-rankingfactoren",
      },
    },
  },
};
