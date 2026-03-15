import type { AcademyTopic } from "../../types";

export const crawlBudgetManagement: AcademyTopic = {
  slug: "crawl-budget-management",
  cluster: 4,
  resources: [{"label":"Google Crawl Budget Docs","url":"https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget","type":"docs"},{"label":"Screaming Frog Log File Analyser","url":"https://www.screamingfrog.co.uk/log-file-analyser/","type":"tool"},{"label":"Robots.txt Tester","url":"https://support.google.com/webmasters/answer/6062598","type":"tool"}],
  content: {
    en: {
      badge: "Technical SEO",
      heading: "Crawl Budget Management",
      intro:
        "Google allocates a limited number of pages it will crawl on your site within a given timeframe. For stores with thousands of products, filter pages, and parameter URLs, mismanaging this crawl budget means Google wastes time on low-value pages while ignoring the ones that actually drive revenue. This is one of the key topics in [technical SEO for ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "10 min read",
      sections: [
        {
          title: "What Crawl Budget Actually Is",
          content:
            "Crawl budget is the combination of two factors: crawl rate limit (how many requests per second Googlebot can make without overloading your server) and crawl demand (how much Google wants to crawl your site based on popularity and freshness). Together, these determine the total number of pages Googlebot will crawl in a given period.\n\nFor small stores with under 5,000 pages, crawl budget is rarely a concern. Google will crawl your entire site regularly without issues. But once your store crosses 10,000 URLs (including parameter variations, filter pages, and paginated listings), crawl budget becomes a genuine bottleneck.\n\nA mid-size fashion store we audited had 8,000 actual products but over 340,000 crawlable URLs due to faceted navigation, color/size parameters, sort-order variations, and pagination. Googlebot was spending 85% of its crawl budget on these low-value parameter pages, while 30% of actual product pages had not been recrawled in over 90 days.",
          items: [
            "Crawl rate limit: maximum requests per second your server can handle from Googlebot",
            "Crawl demand: Google's interest in your pages based on popularity and staleness",
            "Stores under 5,000 pages rarely need to worry about crawl budget",
            "Stores over 10,000 URLs (including parameters) should actively manage crawl budget",
          ],
        },
        {
          title: "Identifying Crawl Waste in Your Store",
          content:
            "Crawl waste occurs when Googlebot spends time crawling pages that provide no SEO value. In ecommerce, the biggest sources of crawl waste are faceted navigation URLs, parameter pages, internal search result pages, and excessive pagination.\n\n[Faceted navigation](/academy/faceted-navigation-seo) is the worst offender. A category page with filters for brand, color, size, price, and rating can generate thousands of URL combinations. Each combination (/shoes?brand=nike&color=black&size=10) is a separate crawlable URL that typically shows the same products in slightly different arrangements. Google does not need to crawl all of these.\n\nSort-order parameters waste crawl budget silently. URLs like /category?sort=price-low, /category?sort=price-high, /category?sort=newest, and /category?sort=best-selling all show the same products. These pages add zero unique content but can triple or quadruple your crawlable URL count.\n\nSession IDs and tracking parameters appended to URLs (/product?utm_source=email&session=abc123) create duplicate crawlable versions of every page. If your platform appends these parameters and does not handle them with canonical tags, you are multiplying your crawl surface unnecessarily.",
          items: [
            "Faceted navigation: filter combinations that create thousands of crawlable URLs",
            "Sort-order parameters: same products in different order, zero unique content",
            "Internal search pages: /search?q=xyz URLs that Google should never index",
            "Session and tracking parameters: duplicate URLs from UTM tags or session IDs",
            "Pagination beyond page 5-10: deep paginated pages with diminishing SEO value",
          ],
          tip: "Download your server logs for the past 30 days and analyze which URLs Googlebot visited most frequently. You will likely find that parameter pages and filter URLs dominate the crawl, while product pages receive far fewer visits than they should.",
        },
        {
          title: "Blocking Low-Value URLs From Crawling",
          content:
            "The primary tool for preventing crawl waste is [robots.txt](/academy/robots-txt-and-xml-sitemaps). By disallowing specific URL patterns, you tell Googlebot not to bother crawling those pages. For ecommerce, this typically means blocking faceted filter parameters, sort orders, internal search results, and cart/checkout pages.\n\nA practical robots.txt for an ecommerce store might include rules like Disallow: /*?sort=, Disallow: /*?filter=, Disallow: /search, and Disallow: /cart. These rules prevent Googlebot from wasting crawl budget on pages that should never appear in search results.\n\nBe careful with robots.txt blocking. It prevents crawling, not indexing. If other pages link to a blocked URL, Google may still index it based on anchor text and link context, even without crawling the page itself. For pages you want completely excluded from the index, combine robots.txt blocking with noindex meta tags or canonical tags.\n\nAnother approach is using the URL Parameters tool in Google Search Console (when available) to tell Google how specific parameters affect page content. You can indicate whether a parameter like \"sort\" changes content, and whether Google should crawl all, some, or no URLs with that parameter. This gives you granular control without modifying your robots.txt.",
          tip: "After updating your robots.txt, monitor the Crawl Stats report in Google Search Console for two to four weeks. You should see the total pages crawled decrease while the crawl frequency of your important pages increases.",
        },
        {
          title: "Monitoring Crawl Stats in Google Search Console",
          content:
            "Google Search Console provides a Crawl Stats report under Settings that shows how Googlebot interacts with your site. This report reveals total crawl requests, average response time, crawl request breakdown by response type, and crawl purpose (discovery vs. refresh).\n\nPay attention to the response code breakdown. If a significant percentage of crawl requests return 301/302 redirects, 404 errors, or 5xx server errors, you are wasting crawl budget on broken or redirected URLs. A healthy ecommerce site should see 90% or more of crawl requests returning 200 status codes.\n\nThe file type breakdown shows whether Googlebot is spending time downloading images, CSS, JavaScript, or other resources disproportionately. If JavaScript files dominate your crawl requests, it may indicate rendering issues that force Googlebot to make extra requests to understand your pages.\n\nCompare your crawl stats month over month. A sudden drop in crawl requests can indicate server performance issues or robots.txt changes that blocked too much. A sudden spike might mean Google discovered a new batch of parameter URLs or that a sitemap change exposed previously hidden pages. Both scenarios need investigation.",
          items: [
            "Check response code breakdown: aim for 90%+ returning 200 status codes",
            "Review file type distribution: excessive JS downloads may signal rendering problems",
            "Monitor crawl purpose split: discovery of new pages vs. refreshing existing ones",
            "Track trends monthly: sudden drops or spikes indicate configuration changes",
          ],
        },
        {
          title: "Server-Side Rendering and Crawl Efficiency",
          content:
            "How your store renders pages directly impacts crawl efficiency. Client-side rendered (CSR) pages built with JavaScript frameworks like React or Vue require Googlebot to make multiple requests: first to download the HTML shell, then to fetch and execute JavaScript, and finally to render the page content. This process is slower and consumes more crawl budget per page.\n\nServer-side rendering (SSR) delivers fully rendered HTML on the initial request, allowing Googlebot to understand page content immediately. For ecommerce sites, SSR or static site generation (SSG) typically results in 40% to 60% more pages crawled per crawl session compared to CSR equivalents.\n\nShopify stores are server-side rendered by default, so this is rarely a concern for Shopify merchants. But stores built on headless architectures with React/Next.js or Vue/Nuxt.js need to ensure their SSR implementation is working correctly. We have seen headless stores where a misconfigured SSR setup caused Googlebot to see empty product pages, leading to mass de-indexation.\n\nTest how Google sees your pages using the URL Inspection tool in GSC. Click \"View Tested Page\" to see both the raw HTML response and the rendered HTML. If the rendered version is missing product information, prices, or reviews, your rendering setup needs attention. Every missing element is a wasted crawl opportunity.",
        },
        {
          title: "Prioritizing What Gets Crawled",
          content:
            "Beyond blocking low-value pages, you can actively direct Googlebot toward your most important content. Internal linking is the strongest signal for crawl priority. Pages with more internal links pointing to them get crawled more frequently and more quickly after updates.\n\nKeep your XML sitemap lean and accurate. Include only pages you genuinely want indexed: product pages, category pages, key blog posts, and essential informational pages. Remove out-of-stock products (or redirect them), noindexed pages, and parameter URLs from your sitemap. A sitemap with 5,000 important URLs beats one with 50,000 URLs where 90% are junk.\n\nUpdate your sitemap's lastmod dates accurately. When you update a product page's price, description, or availability, the lastmod date should reflect the change. Googlebot uses lastmod as a signal for recrawl priority. We have seen stores set all lastmod dates to the same value (or use today's date for every page), which destroys the signal and makes Google ignore lastmod entirely.\n\nFor time-sensitive changes like sales, price drops, or new product launches, you can use the Indexing API (for eligible site types) or manually request indexing through GSC's URL Inspection tool. This is not a scalable solution for thousands of pages, but it works well for high-priority individual pages.",
          items: [
            "Strengthen internal linking to high-priority product and category pages",
            "Keep XML sitemaps lean: only pages you want indexed",
            "Use accurate lastmod dates that reflect real content changes",
            "Request indexing manually for urgent changes via GSC URL Inspection",
          ],
          tip: "Create a \"priority pages\" list of your top 100 revenue-generating product and category pages. Ensure these pages have the most internal links, appear in your sitemap, and get updated lastmod dates whenever content changes.",
        },
      ],
      navLabels: {
        previous: "Site Architecture for Ecommerce",
        next: "Site Speed Optimization",
      },
    },
    de: {
      badge: "Technisches SEO",
      heading: "Crawl-Budget-Management",
      intro:
        "Google weist eine begrenzte Anzahl von Seiten zu, die es innerhalb eines bestimmten Zeitraums auf Ihrer Website crawlen wird. Bei Shops mit Tausenden von Produkten, Filterseiten und Parameter-URLs bedeutet ein schlechtes Crawl-Budget-Management, dass Google Zeit mit wertlosen Seiten verschwendet, während die umsatzrelevanten Seiten ignoriert werden. Dies ist eines der Schl\u00fcsselthemen in [technische SEO f\u00fcr Ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "10 Min. Lesezeit",
      sections: [
        {
          title: "Was Crawl-Budget wirklich bedeutet",
          content:
            "Das Crawl-Budget ist die Kombination aus zwei Faktoren: dem Crawl-Rate-Limit (wie viele Anfragen pro Sekunde Googlebot an Ihren Server stellen kann, ohne ihn zu überlasten) und der Crawl-Nachfrage (wie sehr Google Ihre Website crawlen möchte, basierend auf Popularität und Aktualität). Zusammen bestimmen sie die Gesamtzahl der Seiten, die Googlebot in einem bestimmten Zeitraum crawlt.\n\nFür kleine Shops mit weniger als 5.000 Seiten ist das Crawl-Budget selten ein Problem. Google wird Ihre gesamte Website regelmäßig ohne Probleme crawlen. Aber sobald Ihr Shop 10.000 URLs überschreitet (einschließlich Parametervariationen, Filterseiten und paginierte Listen), wird das Crawl-Budget zu einem echten Engpass.\n\nEin mittelgroßer Modeshop, den wir auditiert haben, hatte 8.000 tatsächliche Produkte, aber über 340.000 crawlbare URLs aufgrund facettierter Navigation, Farb-/Größenparameter, Sortierungsvariationen und Paginierung. Googlebot verbrachte 85 % seines Crawl-Budgets mit diesen wertlosen Parameterseiten, während 30 % der tatsächlichen Produktseiten seit über 90 Tagen nicht mehr gecrawlt worden waren.",
          items: [
            "Crawl-Rate-Limit: maximale Anfragen pro Sekunde, die Ihr Server von Googlebot verarbeiten kann",
            "Crawl-Nachfrage: Googles Interesse an Ihren Seiten basierend auf Popularität und Veralterung",
            "Shops unter 5.000 Seiten müssen sich selten um das Crawl-Budget sorgen",
            "Shops über 10.000 URLs (einschließlich Parameter) sollten das Crawl-Budget aktiv verwalten",
          ],
        },
        {
          title: "Crawl-Verschwendung in Ihrem Shop identifizieren",
          content:
            "Crawl-Verschwendung tritt auf, wenn Googlebot Zeit damit verbringt, Seiten zu crawlen, die keinen SEO-Wert bieten. Im Ecommerce sind die größten Quellen facettierte Navigations-URLs, Parameterseiten, interne Suchergebnisseiten und übermäßige Paginierung.\n\n[Facettierte Navigation](/academy/faceted-navigation-seo) ist der größte Übeltäter. Eine Kategorieseite mit Filtern für Marke, Farbe, Größe, Preis und Bewertung kann Tausende von URL-Kombinationen erzeugen. Jede Kombination (/schuhe?marke=nike&farbe=schwarz&groesse=10) ist eine separate crawlbare URL, die typischerweise die gleichen Produkte in leicht unterschiedlicher Anordnung zeigt. Google muss nicht alle davon crawlen.\n\nSortierparameter verschwenden Crawl-Budget unauffällig. URLs wie /kategorie?sort=preis-aufsteigend, /kategorie?sort=preis-absteigend, /kategorie?sort=neueste und /kategorie?sort=beliebteste zeigen alle die gleichen Produkte. Diese Seiten fügen keinerlei einzigartigen Content hinzu, können aber Ihre crawlbare URL-Anzahl verdreifachen oder vervierfachen.\n\nSession-IDs und Tracking-Parameter an URLs (/produkt?utm_source=email&session=abc123) erzeugen doppelte crawlbare Versionen jeder Seite. Wenn Ihre Plattform diese Parameter anhängt und sie nicht mit Canonical-Tags behandelt, vervielfachen Sie Ihre Crawl-Oberfläche unnötig.",
          items: [
            "Facettierte Navigation: Filterkombinationen, die Tausende crawlbarer URLs erzeugen",
            "Sortierparameter: gleiche Produkte in anderer Reihenfolge, kein einzigartiger Content",
            "Interne Suchseiten: /search?q=xyz URLs, die Google nie indexieren sollte",
            "Session- und Tracking-Parameter: doppelte URLs durch UTM-Tags oder Session-IDs",
            "Paginierung jenseits von Seite 5-10: tiefe paginierte Seiten mit abnehmendem SEO-Wert",
          ],
          tip: "Laden Sie Ihre Serverprotokolle der letzten 30 Tage herunter und analysieren Sie, welche URLs Googlebot am häufigsten besucht hat. Sie werden wahrscheinlich feststellen, dass Parameterseiten und Filter-URLs den Crawl dominieren, während Produktseiten weit weniger Besuche erhalten als sie sollten.",
        },
        {
          title: "Wertlose URLs vom Crawling ausschließen",
          content:
            "Das primäre Werkzeug zur Vermeidung von Crawl-Verschwendung ist die [robots.txt](/academy/robots-txt-and-xml-sitemaps). Durch das Blockieren bestimmter URL-Muster teilen Sie Googlebot mit, diese Seiten nicht zu crawlen. Für Ecommerce bedeutet das typischerweise die Blockierung facettierter Filterparameter, Sortierungen, interner Suchergebnisse und Warenkorb-/Checkout-Seiten.\n\nEine praktische robots.txt für einen Ecommerce-Shop könnte Regeln wie Disallow: /*?sort=, Disallow: /*?filter=, Disallow: /search und Disallow: /cart enthalten. Diese Regeln verhindern, dass Googlebot Crawl-Budget für Seiten verschwendet, die nie in Suchergebnissen erscheinen sollten.\n\nSeien Sie vorsichtig mit robots.txt-Blockierung. Sie verhindert Crawling, nicht Indexierung. Wenn andere Seiten auf eine blockierte URL verlinken, kann Google sie möglicherweise trotzdem basierend auf Ankertext und Linkkontext indexieren, auch ohne die Seite selbst zu crawlen. Für Seiten, die Sie komplett aus dem Index ausschließen möchten, kombinieren Sie robots.txt-Blockierung mit noindex Meta-Tags oder Canonical-Tags.\n\nEin weiterer Ansatz ist die Nutzung des URL-Parameter-Tools in der Google Search Console, um Google mitzuteilen, wie bestimmte Parameter den Seiteninhalt beeinflussen. Sie können angeben, ob ein Parameter wie \"sort\" den Inhalt ändert und ob Google alle, einige oder keine URLs mit diesem Parameter crawlen soll. Dies gibt Ihnen granulare Kontrolle, ohne Ihre robots.txt zu ändern.",
          tip: "Überwachen Sie nach der Aktualisierung Ihrer robots.txt den Crawl-Statistik-Bericht in der Google Search Console zwei bis vier Wochen lang. Sie sollten sehen, dass die Gesamtzahl der gecrawlten Seiten sinkt, während die Crawl-Häufigkeit Ihrer wichtigen Seiten steigt.",
        },
        {
          title: "Crawl-Statistiken in der Google Search Console überwachen",
          content:
            "Die Google Search Console bietet einen Crawl-Statistik-Bericht unter Einstellungen, der zeigt, wie Googlebot mit Ihrer Website interagiert. Dieser Bericht zeigt die gesamten Crawl-Anfragen, die durchschnittliche Antwortzeit, die Aufschlüsselung der Crawl-Anfragen nach Antworttyp und den Crawl-Zweck (Entdeckung vs. Aktualisierung).\n\nAchten Sie auf die Aufschlüsselung der Antwortcodes. Wenn ein erheblicher Prozentsatz der Crawl-Anfragen 301/302-Weiterleitungen, 404-Fehler oder 5xx-Serverfehler zurückgibt, verschwenden Sie Crawl-Budget mit defekten oder weitergeleiteten URLs. Eine gesunde Ecommerce-Website sollte bei 90 % oder mehr der Crawl-Anfragen einen 200-Statuscode zurückgeben.\n\nDie Dateityp-Aufschlüsselung zeigt, ob Googlebot unverhältnismäßig viel Zeit mit dem Herunterladen von Bildern, CSS, JavaScript oder anderen Ressourcen verbringt. Wenn JavaScript-Dateien Ihre Crawl-Anfragen dominieren, kann das auf Rendering-Probleme hinweisen, die Googlebot zu zusätzlichen Anfragen zwingen.\n\nVergleichen Sie Ihre Crawl-Statistiken von Monat zu Monat. Ein plötzlicher Rückgang der Crawl-Anfragen kann auf Server-Performance-Probleme oder robots.txt-Änderungen hinweisen, die zu viel blockiert haben. Ein plötzlicher Anstieg könnte bedeuten, dass Google eine neue Charge von Parameter-URLs entdeckt hat oder eine Sitemap-Änderung zuvor versteckte Seiten offengelegt hat. Beide Szenarien erfordern Untersuchung.",
          items: [
            "Antwortcode-Aufschlüsselung prüfen: 90 %+ mit 200-Statuscode anstreben",
            "Dateityp-Verteilung überprüfen: übermäßige JS-Downloads deuten auf Rendering-Probleme hin",
            "Crawl-Zweck-Aufteilung überwachen: Entdeckung neuer vs. Aktualisierung bestehender Seiten",
            "Trends monatlich verfolgen: plötzliche Rückgänge oder Anstiege weisen auf Konfigurationsänderungen hin",
          ],
        },
        {
          title: "Server-seitiges Rendering und Crawl-Effizienz",
          content:
            "Wie Ihr Shop Seiten rendert, beeinflusst direkt die Crawl-Effizienz. Client-seitig gerenderte (CSR) Seiten mit JavaScript-Frameworks wie React oder Vue erfordern von Googlebot mehrere Anfragen: zuerst zum Herunterladen der HTML-Hülle, dann zum Abrufen und Ausführen des JavaScripts und schließlich zum Rendern des Seiteninhalts. Dieser Prozess ist langsamer und verbraucht mehr Crawl-Budget pro Seite.\n\nServer-seitiges Rendering (SSR) liefert vollständig gerendertes HTML bei der ersten Anfrage, sodass Googlebot den Seiteninhalt sofort verstehen kann. Für Ecommerce-Seiten führt SSR oder Static Site Generation (SSG) typischerweise dazu, dass 40 % bis 60 % mehr Seiten pro Crawl-Sitzung gecrawlt werden im Vergleich zu CSR-Äquivalenten.\n\nShopify-Shops werden standardmäßig serverseitig gerendert, daher ist dies für Shopify-Händler selten ein Problem. Aber Shops auf Headless-Architekturen mit React/Next.js oder Vue/Nuxt.js müssen sicherstellen, dass ihre SSR-Implementierung korrekt funktioniert. Wir haben Headless-Shops gesehen, bei denen ein falsch konfiguriertes SSR-Setup dazu führte, dass Googlebot leere Produktseiten sah, was zur Massendeindexierung führte.\n\nTesten Sie, wie Google Ihre Seiten sieht, mit dem URL-Inspektionstool in der GSC. Klicken Sie auf \"Getestete Seite ansehen\", um sowohl die HTML-Rohantwort als auch das gerenderte HTML zu sehen. Wenn der gerenderten Version Produktinformationen, Preise oder Bewertungen fehlen, braucht Ihr Rendering-Setup Aufmerksamkeit.",
        },
        {
          title: "Priorisieren, was gecrawlt wird",
          content:
            "Über das Blockieren wertloser Seiten hinaus können Sie Googlebot aktiv auf Ihre wichtigsten Inhalte lenken. Interne Verlinkung ist das stärkste Signal für Crawl-Priorität. Seiten mit mehr internen Links werden häufiger gecrawlt und schneller nach Aktualisierungen.\n\nHalten Sie Ihre XML-Sitemap schlank und aktuell. Nehmen Sie nur Seiten auf, die Sie tatsächlich indexiert haben möchten: Produktseiten, Kategorieseiten, wichtige Blogbeiträge und wesentliche Informationsseiten. Entfernen Sie ausverkaufte Produkte (oder leiten Sie sie um), noindexed Seiten und Parameter-URLs aus Ihrer Sitemap. Eine Sitemap mit 5.000 wichtigen URLs schlägt eine mit 50.000 URLs, von denen 90 % Müll sind.\n\nAktualisieren Sie die lastmod-Daten Ihrer Sitemap genau. Wenn Sie den Preis, die Beschreibung oder die Verfügbarkeit einer Produktseite aktualisieren, sollte das lastmod-Datum die Änderung widerspiegeln. Googlebot nutzt lastmod als Signal für die Recrawl-Priorität. Wir haben Shops gesehen, die alle lastmod-Daten auf denselben Wert gesetzt haben (oder das heutige Datum für jede Seite verwenden), was das Signal zerstört und Google dazu bringt, lastmod komplett zu ignorieren.\n\nFür zeitkritische Änderungen wie Sales, Preissenkungen oder neue Produkteinführungen können Sie die Indexing API (für berechtigte Seitentypen) nutzen oder manuell eine Indexierung über das URL-Inspektionstool der GSC anfordern. Das ist keine skalierbare Lösung für Tausende von Seiten, funktioniert aber gut für einzelne Seiten mit hoher Priorität.",
          items: [
            "Interne Verlinkung zu priorisierten Produkt- und Kategorieseiten stärken",
            "XML-Sitemaps schlank halten: nur Seiten, die indexiert werden sollen",
            "Genaue lastmod-Daten verwenden, die echte Inhaltsänderungen widerspiegeln",
            "Indexierung für dringende Änderungen manuell über GSC URL-Inspektion anfordern",
          ],
          tip: "Erstellen Sie eine Liste Ihrer 100 wichtigsten umsatzgenerierenden Produkt- und Kategorieseiten. Stellen Sie sicher, dass diese Seiten die meisten internen Links haben, in Ihrer Sitemap erscheinen und aktualisierte lastmod-Daten erhalten, wenn sich der Inhalt ändert.",
        },
      ],
      navLabels: {
        previous: "Website-Architektur für Ecommerce",
        next: "Website-Geschwindigkeitsoptimierung",
      },
    },
    fr: {
      badge: "SEO Technique",
      heading: "Gestion du budget de crawl",
      intro:
        "Google alloue un nombre limite de pages qu'il explorera sur votre site dans un delai donne. Pour les boutiques avec des milliers de produits, de pages de filtres et d'URLs a parametres, une mauvaise gestion de ce budget de crawl signifie que Google gaspille du temps sur des pages sans valeur tout en ignorant celles qui generent reellement du chiffre d'affaires. C'est l'un des sujets clés du [SEO technique pour l'e-commerce](/blog/technical-seo-for-ecommerce).",
      readTime: "10 min de lecture",
      sections: [
        {
          title: "Ce qu'est reellement le budget de crawl",
          content:
            "Le budget de crawl est la combinaison de deux facteurs : la limite de frequence de crawl (combien de requetes par seconde Googlebot peut faire sans surcharger votre serveur) et la demande de crawl (a quel point Google veut explorer votre site en fonction de sa popularite et de sa fraicheur). Ensemble, ils determinent le nombre total de pages que Googlebot explorera sur une periode donnee.\n\nPour les petites boutiques avec moins de 5 000 pages, le budget de crawl est rarement un probleme. Google explorera regulierement l'ensemble de votre site sans difficulte. Mais une fois que votre boutique depasse 10 000 URLs (y compris les variations de parametres, les pages de filtres et les listes paginees), le budget de crawl devient un veritable goulot d'etranglement.\n\nUne boutique de mode de taille moyenne que nous avons auditee avait 8 000 produits reels mais plus de 340 000 URLs crawlables en raison de la navigation a facettes, des parametres de couleur/taille, des variations de tri et de la pagination. Googlebot consacrait 85 % de son budget de crawl a ces pages de parametres sans valeur, tandis que 30 % des pages produits reelles n'avaient pas ete re-explorees depuis plus de 90 jours.",
          items: [
            "Limite de frequence de crawl : requetes maximales par seconde que votre serveur peut gerer de Googlebot",
            "Demande de crawl : interet de Google pour vos pages base sur la popularite et l'obsolescence",
            "Les boutiques de moins de 5 000 pages ont rarement a se soucier du budget de crawl",
            "Les boutiques de plus de 10 000 URLs (parametres inclus) doivent gerer activement le budget de crawl",
          ],
        },
        {
          title: "Identifier le gaspillage de crawl dans votre boutique",
          content:
            "Le gaspillage de crawl se produit quand Googlebot passe du temps a explorer des pages qui n'apportent aucune valeur SEO. En e-commerce, les principales sources de gaspillage sont les URLs de navigation a facettes, les pages de parametres, les pages de resultats de recherche interne et la pagination excessive.\n\n[La navigation a facettes](/academy/faceted-navigation-seo) est le pire coupable. Une page de categorie avec des filtres pour marque, couleur, taille, prix et note peut generer des milliers de combinaisons d'URLs. Chaque combinaison (/chaussures?marque=nike&couleur=noir&taille=42) est une URL crawlable separee qui montre generalement les memes produits dans un arrangement legerement different. Google n'a pas besoin de toutes les explorer.\n\nLes parametres de tri gaspillent le budget de crawl silencieusement. Des URLs comme /categorie?tri=prix-croissant, /categorie?tri=prix-decroissant, /categorie?tri=plus-recents et /categorie?tri=meilleures-ventes montrent toutes les memes produits. Ces pages n'ajoutent aucun contenu unique mais peuvent tripler ou quadrupler votre nombre d'URLs crawlables.\n\nLes identifiants de session et les parametres de tracking ajoutes aux URLs (/produit?utm_source=email&session=abc123) creent des versions crawlables en double de chaque page. Si votre plateforme ajoute ces parametres et ne les gere pas avec des balises canonical, vous multipliez inutilement votre surface de crawl.",
          items: [
            "Navigation a facettes : combinaisons de filtres creant des milliers d'URLs crawlables",
            "Parametres de tri : memes produits dans un ordre different, zero contenu unique",
            "Pages de recherche interne : URLs /search?q=xyz que Google ne devrait jamais indexer",
            "Parametres de session et de tracking : URLs dupliquees par les tags UTM ou IDs de session",
            "Pagination au-dela de la page 5-10 : pages paginees profondes a valeur SEO decroissante",
          ],
          tip: "Telechargez vos logs serveur des 30 derniers jours et analysez quelles URLs Googlebot a visitees le plus frequemment. Vous constaterez probablement que les pages de parametres et les URLs de filtres dominent le crawl, tandis que les pages produits recoivent beaucoup moins de visites qu'elles ne le devraient.",
        },
        {
          title: "Bloquer les URLs a faible valeur du crawl",
          content:
            "L'outil principal pour prevenir le gaspillage de crawl est le [robots.txt](/academy/robots-txt-and-xml-sitemaps). En interdisant certains modeles d'URL, vous indiquez a Googlebot de ne pas explorer ces pages. Pour le e-commerce, cela signifie generalement bloquer les parametres de filtres a facettes, les ordres de tri, les resultats de recherche interne et les pages panier/paiement.\n\nUn robots.txt pratique pour une boutique e-commerce pourrait inclure des regles comme Disallow: /*?sort=, Disallow: /*?filter=, Disallow: /search et Disallow: /cart. Ces regles empechent Googlebot de gaspiller du budget de crawl sur des pages qui ne devraient jamais apparaitre dans les resultats de recherche.\n\nSoyez prudent avec le blocage robots.txt. Il empeche le crawl, pas l'indexation. Si d'autres pages lient vers une URL bloquee, Google peut quand meme l'indexer en se basant sur le texte d'ancrage et le contexte des liens, meme sans avoir explore la page. Pour les pages que vous voulez completement exclues de l'index, combinez le blocage robots.txt avec des balises meta noindex ou des balises canonical.\n\nUne autre approche est d'utiliser l'outil Parametres d'URL dans Google Search Console pour indiquer a Google comment des parametres specifiques affectent le contenu de la page. Vous pouvez indiquer si un parametre comme \"sort\" modifie le contenu, et si Google doit explorer toutes, certaines ou aucune URL avec ce parametre.",
          tip: "Apres avoir mis a jour votre robots.txt, surveillez le rapport Statistiques de crawl dans Google Search Console pendant deux a quatre semaines. Vous devriez voir le nombre total de pages explorees diminuer tandis que la frequence de crawl de vos pages importantes augmente.",
        },
        {
          title: "Surveiller les statistiques de crawl dans Google Search Console",
          content:
            "Google Search Console fournit un rapport Statistiques de crawl sous Parametres qui montre comment Googlebot interagit avec votre site. Ce rapport revele le total des requetes de crawl, le temps de reponse moyen, la repartition des requetes par type de reponse et le but du crawl (decouverte vs. rafraichissement).\n\nFaites attention a la repartition des codes de reponse. Si un pourcentage significatif des requetes de crawl retournent des redirections 301/302, des erreurs 404 ou des erreurs serveur 5xx, vous gaspillez du budget de crawl sur des URLs cassees ou redirigees. Un site e-commerce sain devrait voir 90 % ou plus des requetes de crawl retourner un code 200.\n\nLa repartition par type de fichier montre si Googlebot passe un temps disproportionne a telecharger des images, du CSS, du JavaScript ou d'autres ressources. Si les fichiers JavaScript dominent vos requetes de crawl, cela peut indiquer des problemes de rendu qui forcent Googlebot a faire des requetes supplementaires.\n\nComparez vos statistiques de crawl mois apres mois. Une chute soudaine des requetes de crawl peut indiquer des problemes de performance serveur ou des modifications du robots.txt qui ont trop bloque. Un pic soudain pourrait signifier que Google a decouvert un nouveau lot d'URLs parametrees ou qu'un changement de sitemap a expose des pages precedemment cachees.",
          items: [
            "Verifier la repartition des codes de reponse : viser 90 %+ retournant le code 200",
            "Examiner la distribution par type de fichier : des telechargements JS excessifs signalent des problemes de rendu",
            "Surveiller la repartition des objectifs de crawl : decouverte de nouvelles pages vs. rafraichissement",
            "Suivre les tendances mensuellement : les chutes ou pics soudains indiquent des changements de configuration",
          ],
        },
        {
          title: "Rendu cote serveur et efficacite du crawl",
          content:
            "La facon dont votre boutique rend les pages impacte directement l'efficacite du crawl. Les pages rendues cote client (CSR) construites avec des frameworks JavaScript comme React ou Vue necessitent que Googlebot fasse plusieurs requetes : d'abord pour telecharger le squelette HTML, puis pour recuperer et executer le JavaScript, et enfin pour rendre le contenu de la page. Ce processus est plus lent et consomme plus de budget de crawl par page.\n\nLe rendu cote serveur (SSR) fournit du HTML entierement rendu des la premiere requete, permettant a Googlebot de comprendre le contenu immediatement. Pour les sites e-commerce, le SSR ou la generation de sites statiques (SSG) resulte generalement en 40 % a 60 % de pages supplementaires explorees par session de crawl par rapport aux equivalents CSR.\n\nLes boutiques Shopify sont rendues cote serveur par defaut, ce qui est rarement un probleme pour les marchands Shopify. Mais les boutiques construites sur des architectures headless avec React/Next.js ou Vue/Nuxt.js doivent s'assurer que leur implementation SSR fonctionne correctement. Nous avons vu des boutiques headless ou une configuration SSR mal parametree faisait que Googlebot voyait des pages produits vides, entrainant une desindexation massive.\n\nTestez comment Google voit vos pages avec l'outil d'inspection d'URL dans GSC. Cliquez sur \"Voir la page testee\" pour voir a la fois la reponse HTML brute et le HTML rendu. Si la version rendue manque d'informations produit, de prix ou d'avis, votre configuration de rendu necessite attention.",
        },
        {
          title: "Prioriser ce qui est explore",
          content:
            "Au-dela du blocage des pages sans valeur, vous pouvez activement diriger Googlebot vers votre contenu le plus important. Le maillage interne est le signal le plus fort pour la priorite de crawl. Les pages avec plus de liens internes sont explorees plus frequemment et plus rapidement apres les mises a jour.\n\nGardez votre sitemap XML legere et precise. N'incluez que les pages que vous voulez reellement indexer : pages produits, pages de categories, articles de blog cles et pages d'information essentielles. Retirez les produits en rupture de stock (ou redirigez-les), les pages noindexees et les URLs parametrees de votre sitemap. Un sitemap de 5 000 URLs importantes bat un sitemap de 50 000 URLs dont 90 % sont inutiles.\n\nMettez a jour les dates lastmod de votre sitemap avec precision. Quand vous mettez a jour le prix, la description ou la disponibilite d'une page produit, la date lastmod doit refleter le changement. Googlebot utilise lastmod comme signal pour la priorite de re-crawl. Nous avons vu des boutiques definir toutes les dates lastmod a la meme valeur (ou utiliser la date du jour pour chaque page), ce qui detruit le signal et amene Google a ignorer completement lastmod.\n\nPour les changements urgents comme les soldes, les baisses de prix ou les lancements de nouveaux produits, vous pouvez utiliser l'API d'indexation (pour les types de sites eligibles) ou demander manuellement l'indexation via l'outil d'inspection d'URL de GSC.",
          items: [
            "Renforcer le maillage interne vers les pages produits et categories prioritaires",
            "Garder les sitemaps XML legeres : uniquement les pages a indexer",
            "Utiliser des dates lastmod precises refletant les vrais changements de contenu",
            "Demander l'indexation manuellement pour les changements urgents via l'inspection d'URL GSC",
          ],
          tip: "Creez une liste de vos 100 pages produits et categories les plus generatrices de revenus. Assurez-vous que ces pages ont le plus de liens internes, apparaissent dans votre sitemap et recoivent des dates lastmod mises a jour a chaque changement de contenu.",
        },
      ],
      navLabels: {
        previous: "Architecture de site pour e-commerce",
        next: "Optimisation de la vitesse du site",
      },
    },
    es: {
      badge: "SEO Tecnico",
      heading: "Gestion del presupuesto de rastreo",
      intro:
        "Google asigna un numero limitado de paginas que rastreara en tu sitio dentro de un periodo de tiempo determinado. Para tiendas con miles de productos, paginas de filtros y URLs con parametros, una mala gestion de este presupuesto de rastreo significa que Google pierde tiempo en paginas sin valor mientras ignora las que realmente generan ingresos. Este es uno de los temas clave del [SEO tecnico para ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "10 min de lectura",
      sections: [
        {
          title: "Que es realmente el presupuesto de rastreo",
          content:
            "El presupuesto de rastreo es la combinacion de dos factores: el limite de frecuencia de rastreo (cuantas solicitudes por segundo Googlebot puede hacer sin sobrecargar tu servidor) y la demanda de rastreo (cuanto quiere Google rastrear tu sitio basado en popularidad y frescura). Juntos, determinan el numero total de paginas que Googlebot rastreara en un periodo dado.\n\nPara tiendas pequenas con menos de 5.000 paginas, el presupuesto de rastreo raramente es una preocupacion. Google rastreara tu sitio completo regularmente sin problemas. Pero una vez que tu tienda supera las 10.000 URLs (incluyendo variaciones de parametros, paginas de filtros y listados paginados), el presupuesto de rastreo se convierte en un cuello de botella real.\n\nUna tienda de moda de tamano medio que auditamos tenia 8.000 productos reales pero mas de 340.000 URLs rastreables debido a la navegacion facetada, parametros de color/talla, variaciones de ordenacion y paginacion. Googlebot gastaba el 85 % de su presupuesto de rastreo en estas paginas de parametros sin valor, mientras que el 30 % de las paginas de productos reales no habian sido re-rastreadas en mas de 90 dias.",
          items: [
            "Limite de frecuencia de rastreo: solicitudes maximas por segundo que tu servidor puede manejar de Googlebot",
            "Demanda de rastreo: interes de Google en tus paginas basado en popularidad y obsolescencia",
            "Tiendas con menos de 5.000 paginas raramente necesitan preocuparse por el presupuesto de rastreo",
            "Tiendas con mas de 10.000 URLs (incluyendo parametros) deben gestionar activamente el presupuesto",
          ],
        },
        {
          title: "Identificar el desperdicio de rastreo en tu tienda",
          content:
            "El desperdicio de rastreo ocurre cuando Googlebot pasa tiempo rastreando paginas que no aportan valor SEO. En ecommerce, las mayores fuentes de desperdicio son las URLs de [navegacion facetada](/academy/faceted-navigation-seo), paginas de parametros, paginas de resultados de busqueda interna y paginacion excesiva.\n\nLa navegacion facetada es la peor infractora. Una pagina de categoria con filtros de marca, color, talla, precio y valoracion puede generar miles de combinaciones de URLs. Cada combinacion (/zapatos?marca=nike&color=negro&talla=42) es una URL rastreable separada que tipicamente muestra los mismos productos en arreglos ligeramente diferentes. Google no necesita rastrear todas estas.\n\nLos parametros de ordenacion desperdician presupuesto de rastreo silenciosamente. URLs como /categoria?orden=precio-bajo, /categoria?orden=precio-alto, /categoria?orden=mas-recientes y /categoria?orden=mas-vendidos muestran todos los mismos productos. Estas paginas no agregan contenido unico pero pueden triplicar o cuadruplicar tu conteo de URLs rastreables.\n\nLos IDs de sesion y parametros de seguimiento agregados a las URLs (/producto?utm_source=email&session=abc123) crean versiones duplicadas rastreables de cada pagina. Si tu plataforma agrega estos parametros y no los maneja con etiquetas canonicas, estas multiplicando tu superficie de rastreo innecesariamente.",
          items: [
            "Navegacion facetada: combinaciones de filtros que crean miles de URLs rastreables",
            "Parametros de ordenacion: mismos productos en diferente orden, cero contenido unico",
            "Paginas de busqueda interna: URLs /search?q=xyz que Google nunca deberia indexar",
            "Parametros de sesion y seguimiento: URLs duplicadas por etiquetas UTM o IDs de sesion",
            "Paginacion mas alla de la pagina 5-10: paginas paginadas profundas con valor SEO decreciente",
          ],
          tip: "Descarga tus logs del servidor de los ultimos 30 dias y analiza que URLs visito Googlebot con mayor frecuencia. Probablemente encontraras que las paginas de parametros y las URLs de filtros dominan el rastreo, mientras que las paginas de productos reciben muchas menos visitas de las que deberian.",
        },
        {
          title: "Bloquear URLs de bajo valor del rastreo",
          content:
            "La herramienta principal para prevenir el desperdicio de rastreo es el [robots.txt](/academy/robots-txt-and-xml-sitemaps). Al no permitir patrones de URL especificos, le dices a Googlebot que no se moleste en rastrear esas paginas. Para ecommerce, esto tipicamente significa bloquear parametros de filtros facetados, ordenes de clasificacion, resultados de busqueda interna y paginas de carrito/pago.\n\nUn robots.txt practico para una tienda ecommerce podria incluir reglas como Disallow: /*?sort=, Disallow: /*?filter=, Disallow: /search y Disallow: /cart. Estas reglas evitan que Googlebot desperdicie presupuesto de rastreo en paginas que nunca deberian aparecer en los resultados de busqueda.\n\nTen cuidado con el bloqueo del robots.txt. Previene el rastreo, no la indexacion. Si otras paginas enlazan a una URL bloqueada, Google puede indexarla basandose en el texto ancla y el contexto del enlace, incluso sin rastrear la pagina misma. Para paginas que quieres completamente excluidas del indice, combina el bloqueo robots.txt con meta etiquetas noindex o etiquetas canonicas.\n\nOtro enfoque es usar la herramienta de Parametros de URL en Google Search Console para indicar a Google como parametros especificos afectan el contenido de la pagina. Puedes indicar si un parametro como \"sort\" cambia el contenido, y si Google deberia rastrear todas, algunas o ninguna URL con ese parametro.",
          tip: "Despues de actualizar tu robots.txt, monitorea el informe de Estadisticas de rastreo en Google Search Console durante dos a cuatro semanas. Deberias ver que el total de paginas rastreadas disminuye mientras la frecuencia de rastreo de tus paginas importantes aumenta.",
        },
        {
          title: "Monitorear estadisticas de rastreo en Google Search Console",
          content:
            "Google Search Console proporciona un informe de Estadisticas de rastreo bajo Configuracion que muestra como Googlebot interactua con tu sitio. Este informe revela el total de solicitudes de rastreo, el tiempo de respuesta promedio, el desglose de solicitudes por tipo de respuesta y el proposito del rastreo (descubrimiento vs. actualizacion).\n\nPresta atencion al desglose de codigos de respuesta. Si un porcentaje significativo de las solicitudes de rastreo devuelven redirecciones 301/302, errores 404 o errores de servidor 5xx, estas desperdiciando presupuesto de rastreo en URLs rotas o redirigidas. Un sitio ecommerce saludable deberia ver el 90 % o mas de las solicitudes de rastreo devolviendo codigos de estado 200.\n\nEl desglose por tipo de archivo muestra si Googlebot esta gastando tiempo descargando imagenes, CSS, JavaScript u otros recursos de forma desproporcionada. Si los archivos JavaScript dominan tus solicitudes de rastreo, puede indicar problemas de renderizado que fuerzan a Googlebot a hacer solicitudes adicionales.\n\nCompara tus estadisticas de rastreo mes a mes. Una caida repentina en las solicitudes de rastreo puede indicar problemas de rendimiento del servidor o cambios en el robots.txt que bloquearon demasiado. Un pico repentino podria significar que Google descubrio un nuevo lote de URLs parametrizadas o que un cambio en el sitemap expuso paginas previamente ocultas.",
          items: [
            "Verificar desglose de codigos de respuesta: apuntar a 90 %+ devolviendo codigo 200",
            "Revisar distribucion por tipo de archivo: descargas excesivas de JS senalan problemas de renderizado",
            "Monitorear division del proposito de rastreo: descubrimiento de nuevas paginas vs. actualizacion",
            "Seguir tendencias mensualmente: caidas o picos repentinos indican cambios de configuracion",
          ],
        },
        {
          title: "Renderizado del lado del servidor y eficiencia de rastreo",
          content:
            "Como tu tienda renderiza las paginas impacta directamente la eficiencia del rastreo. Las paginas renderizadas del lado del cliente (CSR) construidas con frameworks JavaScript como React o Vue requieren que Googlebot haga multiples solicitudes: primero para descargar el esqueleto HTML, luego para obtener y ejecutar JavaScript, y finalmente para renderizar el contenido. Este proceso es mas lento y consume mas presupuesto de rastreo por pagina.\n\nEl renderizado del lado del servidor (SSR) entrega HTML completamente renderizado en la solicitud inicial, permitiendo a Googlebot entender el contenido de la pagina inmediatamente. Para sitios ecommerce, SSR o generacion de sitios estaticos (SSG) tipicamente resulta en 40 % a 60 % mas paginas rastreadas por sesion de rastreo comparado con equivalentes CSR.\n\nLas tiendas Shopify se renderizan del lado del servidor por defecto, por lo que raramente es una preocupacion para los comerciantes de Shopify. Pero las tiendas construidas sobre arquitecturas headless con React/Next.js o Vue/Nuxt.js necesitan asegurar que su implementacion SSR funcione correctamente. Hemos visto tiendas headless donde una configuracion SSR mal configurada causaba que Googlebot viera paginas de producto vacias, llevando a una desindexacion masiva.\n\nPrueba como Google ve tus paginas usando la herramienta de Inspeccion de URL en GSC. Haz clic en \"Ver pagina probada\" para ver tanto la respuesta HTML cruda como el HTML renderizado. Si la version renderizada le falta informacion del producto, precios o resenas, tu configuracion de renderizado necesita atencion.",
        },
        {
          title: "Priorizar lo que se rastrea",
          content:
            "Mas alla de bloquear paginas sin valor, puedes dirigir activamente a Googlebot hacia tu contenido mas importante. El enlazado interno es la senal mas fuerte para la prioridad de rastreo. Las paginas con mas enlaces internos apuntando a ellas se rastrean con mayor frecuencia y mas rapidamente despues de las actualizaciones.\n\nManten tu sitemap XML ajustado y preciso. Incluye solo paginas que genuinamente quieras indexar: paginas de productos, paginas de categorias, publicaciones de blog clave y paginas informativas esenciales. Elimina productos agotados (o redirigelos), paginas noindexadas y URLs de parametros de tu sitemap. Un sitemap con 5.000 URLs importantes supera a uno con 50.000 URLs donde el 90 % es basura.\n\nActualiza las fechas lastmod de tu sitemap con precision. Cuando actualizas el precio, la descripcion o la disponibilidad de una pagina de producto, la fecha lastmod debe reflejar el cambio. Googlebot usa lastmod como senal para la prioridad de re-rastreo. Hemos visto tiendas que establecen todas las fechas lastmod en el mismo valor (o usan la fecha de hoy para cada pagina), lo que destruye la senal y hace que Google ignore lastmod completamente.\n\nPara cambios sensibles al tiempo como rebajas, bajadas de precio o lanzamientos de nuevos productos, puedes usar la API de Indexacion (para tipos de sitio elegibles) o solicitar indexacion manualmente a traves de la herramienta de Inspeccion de URL de GSC.",
          items: [
            "Fortalecer el enlazado interno hacia paginas de productos y categorias de alta prioridad",
            "Mantener los sitemaps XML ajustados: solo paginas que quieras indexar",
            "Usar fechas lastmod precisas que reflejen cambios reales de contenido",
            "Solicitar indexacion manualmente para cambios urgentes via Inspeccion de URL de GSC",
          ],
          tip: "Crea una lista de tus 100 paginas de productos y categorias que mas ingresos generan. Asegurate de que estas paginas tengan la mayor cantidad de enlaces internos, aparezcan en tu sitemap y reciban fechas lastmod actualizadas cuando el contenido cambie.",
        },
      ],
      navLabels: {
        previous: "Arquitectura web para ecommerce",
        next: "Optimizacion de velocidad del sitio",
      },
    },
    it: {
      badge: "SEO Tecnico",
      heading: "Gestione del budget di crawl",
      intro:
        "Google assegna un numero limitato di pagine che scansionera sul tuo sito in un determinato periodo di tempo. Per i negozi con migliaia di prodotti, pagine di filtri e URL con parametri, una cattiva gestione di questo budget di crawl significa che Google spreca tempo su pagine senza valore ignorando quelle che effettivamente generano ricavi. Approfondisci con la nostra guida sulla [SEO tecnica per l'ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "10 min di lettura",
      sections: [
        {
          title: "Cos'e realmente il budget di crawl",
          content:
            "Il budget di crawl e la combinazione di due fattori: il limite di frequenza di crawl (quante richieste al secondo Googlebot puo fare senza sovraccaricare il tuo server) e la domanda di crawl (quanto Google vuole esplorare il tuo sito in base alla popolarita e alla freschezza). Insieme, determinano il numero totale di pagine che Googlebot esplorera in un dato periodo.\n\nPer i piccoli negozi con meno di 5.000 pagine, il budget di crawl e raramente un problema. Google esplorera regolarmente l'intero sito senza difficolta. Ma una volta che il tuo negozio supera le 10.000 URL (incluse variazioni di parametri, pagine di filtri e liste paginate), il budget di crawl diventa un vero collo di bottiglia.\n\nUn negozio di moda di medie dimensioni che abbiamo verificato aveva 8.000 prodotti reali ma oltre 340.000 URL scansionabili a causa della [navigazione a faccette](/academy/faceted-navigation-seo), parametri colore/taglia, variazioni di ordinamento e paginazione. Googlebot spendeva l'85% del suo budget di crawl su queste pagine di parametri senza valore, mentre il 30% delle pagine prodotto reali non veniva riesplorato da oltre 90 giorni.",
          items: [
            "Limite di frequenza di crawl: richieste massime al secondo che il tuo server puo gestire da Googlebot",
            "Domanda di crawl: interesse di Google per le tue pagine basato su popolarita e obsolescenza",
            "Negozi sotto le 5.000 pagine raramente devono preoccuparsi del budget di crawl",
            "Negozi oltre le 10.000 URL (parametri inclusi) dovrebbero gestire attivamente il budget di crawl",
          ],
        },
        {
          title: "Identificare lo spreco di crawl nel tuo negozio",
          content:
            "Lo spreco di crawl si verifica quando Googlebot passa tempo a esplorare pagine che non forniscono valore SEO. Nell'e-commerce, le maggiori fonti di spreco sono gli URL di navigazione a faccette, le pagine di parametri, le pagine di risultati di ricerca interna e la paginazione eccessiva.\n\nLa navigazione a faccette e la peggiore responsabile. Una pagina di categoria con filtri per marca, colore, taglia, prezzo e valutazione puo generare migliaia di combinazioni di URL. Ogni combinazione (/scarpe?marca=nike&colore=nero&taglia=42) e un URL scansionabile separato che mostra tipicamente gli stessi prodotti in disposizioni leggermente diverse. Google non ha bisogno di esplorare tutti questi.\n\nI parametri di ordinamento sprecano budget di crawl silenziosamente. URL come /categoria?ordina=prezzo-basso, /categoria?ordina=prezzo-alto, /categoria?ordina=piu-recenti e /categoria?ordina=piu-venduti mostrano tutti gli stessi prodotti. Queste pagine non aggiungono contenuto unico ma possono triplicare o quadruplicare il conteggio degli URL scansionabili.\n\nGli ID di sessione e i parametri di tracciamento aggiunti agli URL (/prodotto?utm_source=email&session=abc123) creano versioni duplicate scansionabili di ogni pagina. Se la tua piattaforma aggiunge questi parametri e non li gestisce con tag canonical, stai moltiplicando inutilmente la tua superficie di crawl.",
          items: [
            "Navigazione a faccette: combinazioni di filtri che creano migliaia di URL scansionabili",
            "Parametri di ordinamento: stessi prodotti in ordine diverso, zero contenuto unico",
            "Pagine di ricerca interna: URL /search?q=xyz che Google non dovrebbe mai indicizzare",
            "Parametri di sessione e tracciamento: URL duplicati da tag UTM o ID di sessione",
            "Paginazione oltre pagina 5-10: pagine paginate profonde con valore SEO decrescente",
          ],
          tip: "Scarica i log del tuo server degli ultimi 30 giorni e analizza quali URL Googlebot ha visitato piu frequentemente. Probabilmente scoprirai che le pagine di parametri e gli URL dei filtri dominano il crawl, mentre le pagine prodotto ricevono molte meno visite di quanto dovrebbero.",
        },
        {
          title: "Bloccare gli URL a basso valore dal crawling",
          content:
            "Lo strumento principale per prevenire lo spreco di crawl e il [robots.txt](/academy/robots-txt-and-xml-sitemaps). Vietando specifici pattern di URL, dici a Googlebot di non preoccuparsi di esplorare quelle pagine. Per l'e-commerce, questo tipicamente significa bloccare i parametri dei filtri a faccette, gli ordini di classificazione, i risultati di ricerca interna e le pagine carrello/checkout.\n\nUn robots.txt pratico per un negozio e-commerce potrebbe includere regole come Disallow: /*?sort=, Disallow: /*?filter=, Disallow: /search e Disallow: /cart. Queste regole impediscono a Googlebot di sprecare budget di crawl su pagine che non dovrebbero mai apparire nei risultati di ricerca.\n\nFai attenzione con il blocco robots.txt. Previene il crawling, non l'indicizzazione. Se altre pagine linkano a un URL bloccato, Google potrebbe comunque indicizzarlo basandosi sul testo di ancoraggio e sul contesto dei link, anche senza esplorare la pagina stessa. Per le pagine che vuoi completamente escluse dall'indice, combina il blocco robots.txt con meta tag noindex o tag canonical.\n\nUn altro approccio e utilizzare lo strumento Parametri URL in Google Search Console per indicare a Google come specifici parametri influenzano il contenuto della pagina. Puoi indicare se un parametro come \"sort\" modifica il contenuto, e se Google dovrebbe esplorare tutti, alcuni o nessun URL con quel parametro.",
          tip: "Dopo aver aggiornato il tuo robots.txt, monitora il rapporto Statistiche di crawl in Google Search Console per due-quattro settimane. Dovresti vedere il totale delle pagine esplorate diminuire mentre la frequenza di crawl delle tue pagine importanti aumenta.",
        },
        {
          title: "Monitorare le statistiche di crawl in Google Search Console",
          content:
            "Google Search Console fornisce un rapporto Statistiche di crawl sotto Impostazioni che mostra come Googlebot interagisce con il tuo sito. Questo rapporto rivela il totale delle richieste di crawl, il tempo di risposta medio, la suddivisione delle richieste per tipo di risposta e lo scopo del crawl (scoperta vs. aggiornamento).\n\nFai attenzione alla suddivisione dei codici di risposta. Se una percentuale significativa delle richieste di crawl restituisce redirect 301/302, errori 404 o errori server 5xx, stai sprecando budget di crawl su URL rotti o reindirizzati. Un sito e-commerce sano dovrebbe vedere il 90% o piu delle richieste di crawl restituire codici di stato 200.\n\nLa suddivisione per tipo di file mostra se Googlebot sta spendendo tempo in modo sproporzionato scaricando immagini, CSS, JavaScript o altre risorse. Se i file JavaScript dominano le tue richieste di crawl, potrebbe indicare problemi di rendering che costringono Googlebot a fare richieste extra.\n\nConfronta le tue statistiche di crawl mese su mese. Un calo improvviso nelle richieste di crawl puo indicare problemi di performance del server o modifiche al robots.txt che hanno bloccato troppo. Un picco improvviso potrebbe significare che Google ha scoperto un nuovo blocco di URL parametrizzati o che una modifica alla sitemap ha esposto pagine precedentemente nascoste.",
          items: [
            "Controllare la suddivisione dei codici di risposta: puntare al 90%+ che restituisce codice 200",
            "Verificare la distribuzione per tipo di file: download JS eccessivi segnalano problemi di rendering",
            "Monitorare la divisione dello scopo del crawl: scoperta di nuove pagine vs. aggiornamento",
            "Tracciare le tendenze mensilmente: cali o picchi improvvisi indicano cambiamenti di configurazione",
          ],
        },
        {
          title: "Rendering lato server ed efficienza del crawl",
          content:
            "Come il tuo negozio renderizza le pagine impatta direttamente l'efficienza del crawl. Le pagine renderizzate lato client (CSR) costruite con framework JavaScript come React o Vue richiedono a Googlebot di fare molteplici richieste: prima per scaricare il guscio HTML, poi per recuperare ed eseguire il JavaScript, e infine per renderizzare il contenuto della pagina. Questo processo e piu lento e consuma piu budget di crawl per pagina.\n\nIl rendering lato server (SSR) fornisce HTML completamente renderizzato alla prima richiesta, permettendo a Googlebot di comprendere immediatamente il contenuto della pagina. Per i siti e-commerce, SSR o la generazione statica del sito (SSG) risulta tipicamente nel 40-60% di pagine in piu esplorate per sessione di crawl rispetto agli equivalenti CSR.\n\nI negozi Shopify sono renderizzati lato server per impostazione predefinita, quindi questo e raramente un problema per i commercianti Shopify. Ma i negozi costruiti su architetture headless con React/Next.js o Vue/Nuxt.js devono assicurarsi che la loro implementazione SSR funzioni correttamente. Abbiamo visto negozi headless dove una configurazione SSR errata faceva si che Googlebot vedesse pagine prodotto vuote, portando a una deindicizzazione di massa.\n\nTesta come Google vede le tue pagine usando lo strumento Ispezione URL in GSC. Clicca su \"Visualizza pagina testata\" per vedere sia la risposta HTML grezza che l'HTML renderizzato. Se alla versione renderizzata mancano informazioni sul prodotto, prezzi o recensioni, la tua configurazione di rendering necessita attenzione.",
        },
        {
          title: "Dare priorita a cio che viene esplorato",
          content:
            "Oltre a bloccare le pagine senza valore, puoi indirizzare attivamente Googlebot verso i tuoi contenuti piu importanti. Il linking interno e il segnale piu forte per la priorita di crawl. Le pagine con piu link interni che puntano ad esse vengono esplorate piu frequentemente e piu rapidamente dopo gli aggiornamenti.\n\nMantieni la tua sitemap XML snella e accurata. Includi solo le pagine che vuoi genuinamente indicizzare: pagine prodotto, pagine categoria, post del blog chiave e pagine informative essenziali. Rimuovi i prodotti esauriti (o reindirizzali), le pagine noindex e gli URL con parametri dalla tua sitemap. Una sitemap con 5.000 URL importanti batte una con 50.000 URL dove il 90% e spazzatura.\n\nAggiorna le date lastmod della tua sitemap accuratamente. Quando aggiorni il prezzo, la descrizione o la disponibilita di una pagina prodotto, la data lastmod dovrebbe riflettere il cambiamento. Googlebot usa lastmod come segnale per la priorita di ri-crawl. Abbiamo visto negozi impostare tutte le date lastmod allo stesso valore (o usare la data odierna per ogni pagina), il che distrugge il segnale e fa si che Google ignori completamente lastmod.\n\nPer cambiamenti sensibili al tempo come saldi, riduzioni di prezzo o lanci di nuovi prodotti, puoi usare l'API di Indicizzazione (per tipi di sito idonei) o richiedere manualmente l'indicizzazione tramite lo strumento Ispezione URL di GSC.",
          items: [
            "Rafforzare il linking interno verso pagine prodotto e categoria ad alta priorita",
            "Mantenere le sitemap XML snelle: solo pagine che vuoi indicizzare",
            "Usare date lastmod accurate che riflettano cambiamenti reali del contenuto",
            "Richiedere l'indicizzazione manualmente per cambiamenti urgenti tramite Ispezione URL GSC",
          ],
          tip: "Crea una lista delle tue 100 pagine prodotto e categoria che generano piu ricavi. Assicurati che queste pagine abbiano il maggior numero di link interni, appaiano nella tua sitemap e ricevano date lastmod aggiornate ogni volta che il contenuto cambia.",
        },
      ],
      navLabels: {
        previous: "Architettura del sito per e-commerce",
        next: "Ottimizzazione della velocita del sito",
      },
    },
    nl: {
      badge: "Technische SEO",
      heading: "Crawlbudgetbeheer",
      intro:
        "Google wijst een beperkt aantal pagina's toe dat het binnen een bepaalde periode op je site zal crawlen. Voor webshops met duizenden producten, filterpagina's en parameter-URL's betekent slecht crawlbudgetbeheer dat Google tijd verspilt aan waardeloze pagina's terwijl de pagina's die daadwerkelijk omzet genereren worden genegeerd.",
      readTime: "10 min leestijd",
      sections: [
        {
          title: "Wat crawlbudget werkelijk is\n\nVoor een diepere duik in deze technische fundamenten, zie onze gids over [technische SEO voor ecommerce](/blog/technical-seo-for-ecommerce).",
          content:
            "Crawlbudget is de combinatie van twee factoren: het crawlfrequentielimiet (hoeveel verzoeken per seconde Googlebot kan doen zonder je server te overbelasten) en de crawlvraag (hoeveel Google je site wil crawlen op basis van populariteit en versheid). Samen bepalen ze het totale aantal pagina's dat Googlebot in een bepaalde periode zal crawlen.\n\nVoor kleine webshops met minder dan 5.000 pagina's is crawlbudget zelden een probleem. Google zal je hele site regelmatig crawlen zonder problemen. Maar zodra je webshop de 10.000 URL's overschrijdt (inclusief parametervariaties, filterpagina's en gepagineerde lijsten), wordt crawlbudget een echt knelpunt.\n\nEen middelgrote modewinkel die we hebben geauditeerd had 8.000 daadwerkelijke producten maar meer dan 340.000 crawlbare URL's door gefacetteerde navigatie, kleur-/maatparameters, sorteervariaties en paginering. Googlebot besteedde 85% van zijn crawlbudget aan deze waardeloze parameterpagina's, terwijl 30% van de daadwerkelijke productpagina's meer dan 90 dagen niet opnieuw was gecrawld.",
          items: [
            "Crawlfrequentielimiet: maximale verzoeken per seconde die je server van Googlebot aankan",
            "Crawlvraag: Google's interesse in je pagina's op basis van populariteit en veroudering",
            "Webshops onder 5.000 pagina's hoeven zich zelden zorgen te maken over crawlbudget",
            "Webshops boven 10.000 URL's (inclusief parameters) moeten het crawlbudget actief beheren",
          ],
        },
        {
          title: "Crawlverspilling in je webshop identificeren",
          content:
            "Crawlverspilling treedt op wanneer Googlebot tijd besteedt aan het crawlen van pagina's die geen SEO-waarde bieden. In e-commerce zijn de grootste bronnen gefacetteerde navigatie-URL's, parameterpagina's, interne zoekresultatenpagina's en excessieve paginering.\n\n[Gefacetteerde navigatie](/academy/faceted-navigation-seo) is de grootste boosdoener. Een categoriepagina met filters voor merk, kleur, maat, prijs en beoordeling kan duizenden URL-combinaties genereren. Elke combinatie (/schoenen?merk=nike&kleur=zwart&maat=42) is een aparte crawlbare URL die doorgaans dezelfde producten in een iets andere rangschikking toont. Google hoeft deze niet allemaal te crawlen.\n\nSorteerparameters verspillen crawlbudget onopvallend. URL's zoals /categorie?sorteer=prijs-laag, /categorie?sorteer=prijs-hoog, /categorie?sorteer=nieuwste en /categorie?sorteer=bestverkocht tonen allemaal dezelfde producten. Deze pagina's voegen nul unieke content toe maar kunnen je crawlbare URL-aantal verdrievoudigen of verviervoudigen.\n\nSessie-ID's en trackingparameters aan URL's (/product?utm_source=email&session=abc123) creeren dubbele crawlbare versies van elke pagina. Als je platform deze parameters toevoegt en ze niet afhandelt met canonical tags, vermenigvuldig je je crawloppervlak onnodig.",
          items: [
            "Gefacetteerde navigatie: filtercombinaties die duizenden crawlbare URL's creeren",
            "Sorteerparameters: dezelfde producten in andere volgorde, nul unieke content",
            "Interne zoekpagina's: /search?q=xyz URL's die Google nooit zou moeten indexeren",
            "Sessie- en trackingparameters: dubbele URL's door UTM-tags of sessie-ID's",
            "Paginering voorbij pagina 5-10: diepe gepagineerde pagina's met afnemende SEO-waarde",
          ],
          tip: "Download je serverlogs van de afgelopen 30 dagen en analyseer welke URL's Googlebot het vaakst heeft bezocht. Je zult waarschijnlijk ontdekken dat parameterpagina's en filter-URL's het crawlen domineren, terwijl productpagina's veel minder bezoeken ontvangen dan ze zouden moeten.",
        },
        {
          title: "Waardeloze URL's blokkeren van crawling",
          content:
            "Het primaire hulpmiddel om crawlverspilling te voorkomen is [robots.txt](/academy/robots-txt-and-xml-sitemaps). Door specifieke URL-patronen te verbieden, vertel je Googlebot die pagina's niet te crawlen. Voor e-commerce betekent dit doorgaans het blokkeren van gefacetteerde filterparameters, sorteervolgordes, interne zoekresultaten en winkelwagen-/afrekenpagina's.\n\nEen praktisch robots.txt voor een e-commerce webshop kan regels bevatten zoals Disallow: /*?sort=, Disallow: /*?filter=, Disallow: /search en Disallow: /cart. Deze regels voorkomen dat Googlebot crawlbudget verspilt aan pagina's die nooit in zoekresultaten zouden moeten verschijnen.\n\nWees voorzichtig met robots.txt-blokkering. Het voorkomt crawling, niet indexering. Als andere pagina's linken naar een geblokkeerde URL, kan Google deze mogelijk toch indexeren op basis van ankertekst en linkcontext, zelfs zonder de pagina zelf te crawlen. Voor pagina's die je volledig uit de index wilt, combineer robots.txt-blokkering met noindex metatags of canonical tags.\n\nEen andere benadering is het gebruik van het URL Parameters-tool in Google Search Console om Google te vertellen hoe specifieke parameters de pagina-inhoud beinvloeden. Je kunt aangeven of een parameter zoals \"sort\" de inhoud wijzigt, en of Google alle, sommige of geen URL's met die parameter moet crawlen.",
          tip: "Monitor na het bijwerken van je robots.txt het Crawlstatistieken-rapport in Google Search Console gedurende twee tot vier weken. Je zou moeten zien dat het totale aantal gecrawlde pagina's afneemt terwijl de crawlfrequentie van je belangrijke pagina's toeneemt.",
        },
        {
          title: "Crawlstatistieken monitoren in Google Search Console",
          content:
            "Google Search Console biedt een Crawlstatistieken-rapport onder Instellingen dat laat zien hoe Googlebot met je site omgaat. Dit rapport onthult het totale aantal crawlverzoeken, de gemiddelde responstijd, de uitsplitsing van crawlverzoeken per responstype en het crawldoel (ontdekking vs. verversing).\n\nLet op de uitsplitsing van responscodes. Als een aanzienlijk percentage van de crawlverzoeken 301/302 redirects, 404-fouten of 5xx-serverfouten retourneert, verspil je crawlbudget aan kapotte of omgeleide URL's. Een gezonde e-commerce site zou 90% of meer van de crawlverzoeken met een 200-statuscode moeten zien retourneren.\n\nDe uitsplitsing per bestandstype laat zien of Googlebot onevenredig veel tijd besteedt aan het downloaden van afbeeldingen, CSS, JavaScript of andere bronnen. Als JavaScript-bestanden je crawlverzoeken domineren, kan dit wijzen op renderingproblemen die Googlebot dwingen extra verzoeken te doen.\n\nVergelijk je crawlstatistieken maand over maand. Een plotselinge daling in crawlverzoeken kan wijzen op serverprestatieproblemen of robots.txt-wijzigingen die te veel hebben geblokkeerd. Een plotselinge piek kan betekenen dat Google een nieuwe batch parameter-URL's heeft ontdekt of dat een sitemap-wijziging eerder verborgen pagina's heeft blootgesteld.",
          items: [
            "Uitsplitsing van responscodes controleren: mik op 90%+ die statuscode 200 retourneert",
            "Distributie per bestandstype beoordelen: excessieve JS-downloads signaleren renderingproblemen",
            "Verdeling van crawldoel monitoren: ontdekking van nieuwe pagina's vs. verversing",
            "Trends maandelijks volgen: plotselinge dalingen of pieken wijzen op configuratiewijzigingen",
          ],
        },
        {
          title: "Server-side rendering en crawlefficiency",
          content:
            "Hoe je webshop pagina's rendert, heeft direct invloed op de crawlefficiency. Client-side gerenderde (CSR) pagina's gebouwd met JavaScript-frameworks zoals React of Vue vereisen dat Googlebot meerdere verzoeken doet: eerst om de HTML-schil te downloaden, dan om JavaScript op te halen en uit te voeren, en ten slotte om de pagina-inhoud te renderen. Dit proces is langzamer en verbruikt meer crawlbudget per pagina.\n\nServer-side rendering (SSR) levert volledig gerenderde HTML bij het eerste verzoek, waardoor Googlebot de pagina-inhoud onmiddellijk kan begrijpen. Voor e-commerce sites resulteert SSR of static site generation (SSG) doorgaans in 40% tot 60% meer pagina's gecrawld per crawlsessie vergeleken met CSR-equivalenten.\n\nShopify-webshops worden standaard server-side gerenderd, dus dit is zelden een probleem voor Shopify-verkopers. Maar webshops gebouwd op headless architecturen met React/Next.js of Vue/Nuxt.js moeten ervoor zorgen dat hun SSR-implementatie correct werkt. We hebben headless webshops gezien waar een verkeerd geconfigureerde SSR-setup ervoor zorgde dat Googlebot lege productpagina's zag, wat leidde tot massale de-indexering.\n\nTest hoe Google je pagina's ziet met het URL-inspectietool in GSC. Klik op \"Geteste pagina bekijken\" om zowel de ruwe HTML-respons als de gerenderde HTML te zien. Als de gerenderde versie productinformatie, prijzen of reviews mist, heeft je renderingconfiguratie aandacht nodig.",
        },
        {
          title: "Prioriteren wat gecrawld wordt",
          content:
            "Naast het blokkeren van waardeloze pagina's kun je Googlebot actief naar je belangrijkste content sturen. Interne linking is het sterkste signaal voor crawlprioriteit. Pagina's met meer interne links die ernaar wijzen worden vaker gecrawld en sneller na updates.\n\nHoud je XML-sitemap slank en nauwkeurig. Neem alleen pagina's op die je oprecht wilt indexeren: productpagina's, categoriepagina's, belangrijke blogposts en essentiele informatiepagina's. Verwijder uitverkochte producten (of redirect ze), noindex-pagina's en parameter-URL's uit je sitemap. Een sitemap met 5.000 belangrijke URL's verslaat er een met 50.000 URL's waarvan 90% onzin is.\n\nWerk de lastmod-datums van je sitemap nauwkeurig bij. Wanneer je de prijs, beschrijving of beschikbaarheid van een productpagina bijwerkt, moet de lastmod-datum de wijziging weerspiegelen. Googlebot gebruikt lastmod als signaal voor de her-crawlprioriteit. We hebben webshops gezien die alle lastmod-datums op dezelfde waarde zetten (of de datum van vandaag gebruiken voor elke pagina), wat het signaal vernietigt en Google ertoe brengt lastmod volledig te negeren.\n\nVoor tijdgevoelige wijzigingen zoals uitverkoop, prijsverlagingen of nieuwe productlanceringen kun je de Indexing API gebruiken (voor geschikte sitetypen) of handmatig indexering aanvragen via het URL-inspectietool van GSC.",
          items: [
            "Interne linking naar prioriteitsproduct- en categoriepagina's versterken",
            "XML-sitemaps slank houden: alleen pagina's die je wilt indexeren",
            "Nauwkeurige lastmod-datums gebruiken die echte contentwijzigingen weerspiegelen",
            "Handmatig indexering aanvragen voor dringende wijzigingen via GSC URL-inspectie",
          ],
          tip: "Maak een lijst van je top 100 omzetgenererende product- en categoriepagina's. Zorg ervoor dat deze pagina's de meeste interne links hebben, in je sitemap verschijnen en bijgewerkte lastmod-datums krijgen wanneer de content verandert.",
        },
      ],
      navLabels: {
        previous: "Website-architectuur voor e-commerce",
        next: "Websitesnelheid optimalisatie",
      },
    },
  },
};
