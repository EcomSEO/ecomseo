import type { AcademyTopic } from "../../types";

export const keywordResearchForEcommerce: AcademyTopic = {
  slug: "keyword-research-for-ecommerce",
  cluster: 2,
  resources: [{"label":"Google Keyword Planner","url":"https://ads.google.com/home/tools/keyword-planner/","type":"tool"},{"label":"Ahrefs Free Keyword Generator","url":"https://ahrefs.com/keyword-generator","type":"tool"},{"label":"Ubersuggest","url":"https://neilpatel.com/ubersuggest/","type":"tool"},{"label":"Google Trends","url":"https://trends.google.com/","type":"tool"},{"label":"Keyword Surfer Extension","url":"https://surferseo.com/keyword-surfer-extension/","type":"tool"}],
  content: {
    en: {
      badge: "Keyword Research",
      heading: "Keyword Research for Ecommerce",
      intro:
        "Keyword research for online stores follows a fundamentally different logic than keyword research for blogs or media sites. Instead of chasing search volume, we start with revenue data and work backwards to identify the terms that actually generate sales.",
      readTime: "9 min read",
      sections: [
        {
          title: "Why Ecommerce Keyword Research Is Different",
          content:
            "Content sites monetize attention. They need eyeballs, so volume is king. An ecommerce store monetizes transactions. A keyword that brings 50 visitors who buy is worth more than one that brings 5,000 who bounce. This distinction changes everything about how you prioritize.\n\nMost keyword research guides tell you to start with a seed list, expand it with a tool, and then filter by volume and difficulty. That workflow makes sense for a blog. For a store, it leads you straight to informational terms that fill your analytics with traffic that never converts.\n\nThe ecommerce keyword research workflow starts with your own transaction data. Which products sell? What do customers type into your site search? Which landing pages already convert? From there, you expand outward into adjacent terms and untapped opportunities. For a broader look at this topic, see our [ecommerce SEO keywords](/blog/ecommerce-seo-keywords) guide.",
          items: [
            "Pull your top revenue-generating pages from analytics before touching any keyword tool",
            "Export your site search queries, these are unprompted demand signals from real shoppers",
            "Check Google Search Console for queries already driving impressions to product and category pages",
          ],
          callout: {
            title: "The 15/70 Rule",
            text: "In a typical store with 200+ products, 15-20% of pages generate 70-80% of organic revenue. Identify these pages first and build your keyword strategy outward from this proven core.",
          },
        },
        {
          title: "Starting With Revenue, Not Volume",
          content:
            "Open your analytics platform and sort landing pages by revenue. The pages that generate the most sales already tell you which keywords matter. Cross-reference these pages with Google Search Console to see which queries bring visitors to them.\n\nFor a typical store with 200+ products, you will find that 15-20% of pages generate 70-80% of organic revenue. These are your priority keywords. Any research you do should build outward from this core, not from a blank sheet.\n\nIf you are launching a new store without historical data, use competitor analysis as your starting point. Identify 3-5 direct competitors and pull their ranking keywords from Ahrefs or Semrush. Filter for pages that look like product or category pages, ignore their blog content for now.",
          tip: "Create a simple spreadsheet with columns for URL, primary keyword, monthly searches, current rank, and monthly revenue. This becomes your keyword command center and prevents you from getting lost in tool data.",
        },
        {
          title: "The Ecommerce Keyword Research Workflow",
          content:
            "Step one: audit your existing organic performance. Pull all pages with organic traffic from GSC and tag each as product, category, blog, or other. Calculate revenue per organic session for each page type.\n\nStep two: build your seed list from three sources, your site search data, your GSC query report, and competitor keyword exports. Deduplicate and tag each keyword with its likely page type ([product vs category keywords](/academy/product-vs-category-keywords) is covered in our next topic).\n\nStep three: expand your seed list using keyword tools. For each seed, pull related terms, questions, and long-tail variants. But filter ruthlessly, keep only terms with clear commercial or transactional intent. Understanding [buyer intent vs search volume](/academy/buyer-intent-vs-search-volume) will help you make this distinction.\n\nStep four: prioritize. Score each keyword on three axes: revenue potential (search volume multiplied by estimated conversion rate multiplied by average order value), current ranking position, and content gap (do you have a page for this term or not). The keywords that score highest across all three get worked on first.",
          image: {
            src: "/images/academy/ecommerce-kw-research-workflow.svg",
            alt: "Flowchart showing the four-step ecommerce keyword research workflow from auditing performance through seed list building, expansion, and revenue-based prioritization",
            caption: "The four-step workflow starts with revenue data and ends with a prioritized keyword list scored by revenue potential, not just search volume.",
          },
          items: [
            "Tag every keyword with its target page type: product, category, or content",
            "Filter out purely informational keywords unless they map to a clear purchase funnel",
            "Score keywords by revenue potential, not just volume or difficulty",
            "Identify content gaps where you have no page targeting a high-potential keyword",
          ],
          callout: {
            title: "Revenue Score Formula",
            text: "Volume x CTR x Conversion Rate x AOV = Revenue Potential. A keyword with 500 searches and 5% conversion at $80 AOV beats one with 10,000 searches and 0.2% conversion at the same AOV by 2x.",
          },
        },
        {
          title: "Tools and Data Sources",
          content:
            "Google Search Console is your most underrated keyword tool. It shows you exactly what queries Google associates with your pages, your click-through rates, and where you sit in rankings. No third-party tool gives you this level of accuracy for your own site.\n\nAhrefs and Semrush both provide keyword databases with volume estimates, difficulty scores, and competitor data. For ecommerce, their keyword gap features are particularly useful, they let you see exactly which terms your competitors rank for that you miss entirely.\n\nGoogle Keyword Planner remains useful for volume estimates, especially for product-specific terms that third-party tools sometimes miss. Its data comes directly from Google Ads, so commercial keywords tend to have more accurate volume numbers.\n\nDon't overlook Amazon autocomplete and Amazon search data if you also sell on marketplaces. Amazon search terms are pure purchase intent, people searching on Amazon are ready to buy. Tools like Helium 10 or Jungle Scout can extract this data.",
          tip: "Run your top 50 product names through Amazon autocomplete. The suggestions reveal buying-specific modifiers (sizes, colors, use cases) that Google keyword tools often miss.",
        },
        {
          title: "Common Mistakes Stores Make",
          content:
            "The biggest mistake is targeting head terms with massive volume and ignoring the long tail. A store selling running shoes might fixate on ranking for \"running shoes\" (201,000 monthly searches) while ignoring \"women's trail running shoes wide fit\" (480 monthly searches, 4x higher conversion rate).\n\nAnother frequent error is treating keyword research as a one-time project. Your product catalog changes, seasonal demand shifts, and competitors enter and leave the market. Keyword research should be revisited quarterly at minimum, with monthly checks on your priority terms.\n\nMany stores also make the mistake of using blog-style keyword strategies. They publish dozens of informational articles that rank well but never connect to purchase behavior. A post about \"how to choose hiking boots\" only helps if it links effectively to your hiking boot category page and the content matches what a near-purchase shopper needs.\n\nFinally, watch out for keyword tools that inflate difficulty scores. A keyword with a difficulty of 70 in Ahrefs might be perfectly achievable for your store if the top results are thin product pages from competitors with weak backlink profiles. Always manually review the SERP before dismissing a keyword as too competitive.",
          items: [
            "Avoid targeting only head terms, the long tail converts at 2-3x the rate for most stores",
            "Revisit your keyword strategy quarterly, not annually",
            "Ensure informational content connects to transactional pages through internal links",
            "Manually review SERPs before trusting difficulty scores from any tool",
          ],
        },
        {
          title: "Building Your First Keyword Research Sprint",
          content:
            "We recommend a focused two-week sprint to build your initial keyword map. Week one covers data collection: pull GSC data, export competitor keywords, gather site search queries, and run your seed terms through Ahrefs or Semrush.\n\nWeek two focuses on analysis and mapping. Cluster your keywords by topic, assign each cluster to a page type, identify gaps in your current site structure, and prioritize the top 20-30 keyword targets that will drive the most revenue.\n\nAt the end of this sprint, you should have a working keyword map that covers your top categories and products, a prioritized list of content gaps to fill, and a quarterly review schedule to keep the map current. This document becomes the foundation for every SEO decision you make going forward. If you need professional help with this process, explore our [keyword research](/keyword-research) service.",
        },
      ],
      navLabels: {
        previous: "Google Search Console for Stores",
        next: "Buyer Intent vs. Search Volume",
      },
    },
    de: {
      badge: "Keyword-Recherche",
      heading: "Keyword-Recherche fuer E-Commerce",
      intro:
        "Keyword-Recherche fuer Online-Shops folgt einer grundlegend anderen Logik als Keyword-Recherche fuer Blogs oder Medienseiten. Statt Suchvolumen hinterherzujagen, beginnen wir mit Umsatzdaten und arbeiten rueckwaerts, um die Begriffe zu identifizieren, die tatsaechlich Verkaeufe generieren.",
      readTime: "9 Min. Lesezeit",
      sections: [
        {
          title: "Warum E-Commerce-Keyword-Recherche anders ist",
          content:
            "Content-Seiten monetarisieren Aufmerksamkeit. Sie brauchen Besucher, also ist Volumen entscheidend. Ein Online-Shop monetarisiert Transaktionen. Ein Keyword, das 50 Besucher bringt, die kaufen, ist mehr wert als eines, das 5.000 bringt, die abspringen. Dieser Unterschied veraendert alles an der Priorisierung.\n\nDie meisten Keyword-Recherche-Anleitungen empfehlen, mit einer Seed-Liste zu beginnen, sie mit einem Tool zu erweitern und dann nach Volumen und Schwierigkeit zu filtern. Dieser Workflow ergibt Sinn fuer einen Blog. Fuer einen Shop fuehrt er direkt zu informationellen Begriffen, die die Analytics mit Traffic fuellen, der nie konvertiert.\n\nDer E-Commerce-Keyword-Recherche-Workflow beginnt mit den eigenen Transaktionsdaten. Welche Produkte verkaufen sich? Was tippen Kunden in die interne Suche ein? Welche Landing Pages konvertieren bereits? Von dort aus expandieren wir in angrenzende Begriffe und ungenutzte Chancen. F\u00fcr einen tieferen Einblick lesen Sie unseren Leitfaden zu [Ecommerce-SEO-Keywords](/blog/ecommerce-seo-keywords).",
          items: [
            "Ziehen Sie Ihre umsatzstaerksten Seiten aus der Analytics, bevor Sie ein Keyword-Tool oeffnen",
            "Exportieren Sie Ihre internen Suchanfragen, das sind unaufgeforderte Nachfragesignale von echten Kaefern",
            "Pruefen Sie die Google Search Console auf Suchanfragen, die bereits Impressionen auf Produkt- und Kategorieseiten erzeugen",
          ],
          callout: {
            title: "Die 15/70-Regel",
            text: "In einem typischen Shop mit 200+ Produkten generieren 15-20\u00a0% der Seiten 70-80\u00a0% des organischen Umsatzes.",
          },
        },
        {
          title: "Mit Umsatz beginnen, nicht mit Volumen",
          content:
            "Oeffnen Sie Ihre Analytics-Plattform und sortieren Sie Landing Pages nach Umsatz. Die Seiten, die die meisten Verkaeufe generieren, zeigen Ihnen bereits, welche Keywords wichtig sind. Vergleichen Sie diese Seiten mit der Google Search Console, um zu sehen, welche Suchanfragen Besucher dorthin bringen.\n\nBei einem typischen Shop mit ueber 200 Produkten werden Sie feststellen, dass 15-20% der Seiten 70-80% des organischen Umsatzes generieren. Das sind Ihre Prioritaets-Keywords. Jede weitere Recherche sollte von diesem Kern ausgehen, nicht von einem leeren Blatt.\n\nWenn Sie einen neuen Shop ohne historische Daten starten, nutzen Sie Wettbewerbsanalyse als Ausgangspunkt. Identifizieren Sie 3-5 direkte Konkurrenten und ziehen Sie deren rankende Keywords aus Ahrefs oder Semrush. Filtern Sie nach Seiten, die wie Produkt- oder Kategorieseiten aussehen, ignorieren Sie deren Blog-Inhalte vorerst.",
          tip: "Erstellen Sie eine einfache Tabelle mit Spalten fuer URL, primaeres Keyword, monatliche Suchen, aktuelles Ranking und monatlichen Umsatz. Das wird Ihre Keyword-Kommandozentrale und verhindert, dass Sie sich in Tool-Daten verlieren.",
        },
        {
          title: "Der E-Commerce-Keyword-Recherche-Workflow",
          content:
            "Schritt eins: Pruefen Sie Ihre bestehende organische Performance. Ziehen Sie alle Seiten mit organischem Traffic aus der GSC und taggen Sie jede als Produkt, Kategorie, Blog oder Sonstiges. Berechnen Sie den Umsatz pro organischer Sitzung fuer jeden Seitentyp.\n\nSchritt zwei: Erstellen Sie Ihre Seed-Liste aus drei Quellen, Ihre internen Suchdaten, Ihren GSC-Abfragebericht und Keyword-Exporte von Wettbewerbern. Deduplizieren und taggen Sie jedes Keyword mit seinem wahrscheinlichen Seitentyp (Produktseite, Kategorieseite oder Inhaltsseite). Weitere Informationen finden Sie in unserem Leitfaden zu [Produkt- vs. Kategorie-Keywords](/academy/product-vs-category-keywords).\n\nSchritt drei: Erweitern Sie Ihre Seed-Liste mit Keyword-Tools. Fuer jeden Seed ziehen Sie verwandte Begriffe, Fragen und Long-Tail-Varianten. Aber filtern Sie rigoros, behalten Sie nur Begriffe mit klarer kommerzieller oder transaktionaler Absicht. Das Verst\u00e4ndnis von [Kaufabsicht vs. Suchvolumen](/academy/buyer-intent-vs-search-volume) wird Ihnen bei dieser Unterscheidung helfen.\n\nSchritt vier: Priorisieren Sie. Bewerten Sie jedes Keyword auf drei Achsen: Umsatzpotenzial (Suchvolumen mal geschaetzte Konversionsrate mal durchschnittlicher Bestellwert), aktuelle Ranking-Position und Content-Luecke (haben Sie eine Seite fuer diesen Begriff oder nicht). Die Keywords mit den hoechsten Werten auf allen drei Achsen werden zuerst bearbeitet.",
          items: [
            "Taggen Sie jedes Keyword mit seinem Zielseitentyp: Produkt, Kategorie oder Content",
            "Filtern Sie rein informationelle Keywords heraus, es sei denn, sie passen klar in einen Kauftrichter",
            "Bewerten Sie Keywords nach Umsatzpotenzial, nicht nur nach Volumen oder Schwierigkeit",
            "Identifizieren Sie Content-Luecken, wo keine Seite ein hochpotenziales Keyword abdeckt",
          ],
          image: {
            src: "/images/academy/de/ecommerce-kw-research-workflow.svg",
            alt: "Flussdiagramm des vierstufigen Ecommerce Keyword-Recherche-Workflows",
            caption: "Der vierstufige Workflow beginnt mit Umsatzdaten und endet mit einer priorisierten Keyword-Liste.",
          },
          callout: {
            title: "Umsatz-Score-Formel",
            text: "Volumen x CTR x Conversion-Rate x AOV = Umsatzpotenzial. Ein Keyword mit 500 Suchen und 5\u00a0% Conversion bei 80\u00a0EUR AOV schl\u00e4gt eines mit 10.000 Suchen und 0,2\u00a0% Conversion.",
          },
        },
        {
          title: "Tools und Datenquellen",
          content:
            "Die Google Search Console ist Ihr am meisten unterschaetztes Keyword-Tool. Sie zeigt Ihnen genau, welche Suchanfragen Google mit Ihren Seiten verbindet, Ihre Klickraten und wo Sie in den Rankings stehen. Kein Drittanbieter-Tool bietet dieses Mass an Genauigkeit fuer Ihre eigene Website.\n\nAhrefs und Semrush bieten beide Keyword-Datenbanken mit Volumenschaetzungen, Schwierigkeitswerten und Wettbewerberdaten. Fuer E-Commerce sind deren Keyword-Gap-Funktionen besonders nuetzlich, sie zeigen genau, welche Begriffe Ihre Konkurrenten abdecken, die Sie komplett verpassen.\n\nDer Google Keyword Planner bleibt nuetzlich fuer Volumeneinschaetzungen, besonders fuer produktspezifische Begriffe, die Drittanbieter-Tools manchmal uebersehen. Seine Daten stammen direkt aus Google Ads, daher sind kommerzielle Keywords tendenziell genauer im Volumen.\n\nUebersehen Sie nicht Amazon Autocomplete und Amazon-Suchdaten, wenn Sie auch auf Marktplaetzen verkaufen. Amazon-Suchbegriffe sind reine Kaufabsicht, Menschen, die auf Amazon suchen, sind kaufbereit. Tools wie Helium 10 oder Jungle Scout koennen diese Daten extrahieren.",
          tip: "Geben Sie Ihre Top-50-Produktnamen in Amazon Autocomplete ein. Die Vorschlaege zeigen kaufspezifische Modifikatoren (Groessen, Farben, Anwendungsfaelle), die Google-Keyword-Tools oft uebersehen.",
        },
        {
          title: "Haeufige Fehler, die Shops machen",
          content:
            "Der groesste Fehler ist, auf Head-Terms mit massivem Volumen zu zielen und den Long Tail zu ignorieren. Ein Shop, der Laufschuhe verkauft, fixiert sich vielleicht darauf, fuer \"Laufschuhe\" zu ranken (201.000 monatliche Suchen) und ignoriert \"Damen-Traillaufschuhe breite Passform\" (480 monatliche Suchen, 4x hoehere Konversionsrate).\n\nEin weiterer haeufiger Fehler ist, Keyword-Recherche als einmaliges Projekt zu behandeln. Ihr Produktkatalog aendert sich, saisonale Nachfrage verschiebt sich, und Wettbewerber kommen und gehen. Keyword-Recherche sollte mindestens vierteljjaehrlich ueberarbeitet werden, mit monatlichen Pruefungen Ihrer Prioritaets-Begriffe.\n\nViele Shops machen auch den Fehler, Blog-artige Keyword-Strategien zu verwenden. Sie veroeffentlichen Dutzende informationeller Artikel, die gut ranken, aber nie zu Kaufverhalten fuehren. Ein Beitrag ueber \"wie man Wanderschuhe auswaehlt\" hilft nur, wenn er effektiv auf Ihre Wanderschuh-Kategorieseite verlinkt.\n\nSchliesslich sollten Sie auf Keyword-Tools achten, die Schwierigkeitswerte aufblaehen. Ein Keyword mit einer Schwierigkeit von 70 in Ahrefs koennte fuer Ihren Shop durchaus erreichbar sein, wenn die Top-Ergebnisse duenne Produktseiten von Wettbewerbern mit schwachen Backlink-Profilen sind. Pruefen Sie immer manuell die SERP, bevor Sie ein Keyword als zu wettbewerbsintensiv abtun.",
          items: [
            "Vermeiden Sie es, nur auf Head-Terms zu zielen, der Long Tail konvertiert bei den meisten Shops 2-3x besser",
            "Ueberarbeiten Sie Ihre Keyword-Strategie vierteljjaehrlich, nicht jaehrlich",
            "Stellen Sie sicher, dass informationeller Content ueber interne Links mit transaktionalen Seiten verbunden ist",
            "Pruefen Sie SERPs manuell, bevor Sie Schwierigkeitswerten eines Tools vertrauen",
          ],
        },
        {
          title: "Ihren ersten Keyword-Recherche-Sprint aufbauen",
          content:
            "Wir empfehlen einen fokussierten zweiwoeochigen Sprint, um Ihre initiale Keyword-Map zu erstellen. Woche eins deckt die Datenerhebung ab: GSC-Daten ziehen, Wettbewerber-Keywords exportieren, interne Suchanfragen sammeln und Ihre Seed-Begriffe durch Ahrefs oder Semrush laufen lassen.\n\nWoche zwei konzentriert sich auf Analyse und Mapping. Clustern Sie Ihre Keywords nach Thema, weisen Sie jedem Cluster einen Seitentyp zu, identifizieren Sie Luecken in Ihrer aktuellen Seitenstruktur und priorisieren Sie die Top 20-30 Keyword-Ziele, die den meisten Umsatz bringen werden.\n\nAm Ende dieses Sprints sollten Sie eine funktionierende Keyword-Map haben, die Ihre Top-Kategorien und -Produkte abdeckt, eine priorisierte Liste von Content-Luecken zum Fuellen und einen vierteljaehrlichen Review-Zeitplan, um die Map aktuell zu halten. Dieses Dokument wird die Grundlage fuer jede SEO-Entscheidung, die Sie kuenftig treffen. Wenn Sie professionelle Hilfe ben\u00f6tigen, erkunden Sie unseren [Keyword-Recherche](/keyword-research)-Service.",
        },
      ],
      navLabels: {
        previous: "Google Search Console fuer Shops",
        next: "Kaufabsicht vs. Suchvolumen",
      },
    },
    fr: {
      badge: "Recherche de mots-clés",
      heading: "Recherche de mots-clés pour le e-commerce",
      intro: "La [recherche de mots-clés](/keyword-research) pour les boutiques en ligne suit une logique fondamentalement differente de celle des blogs ou sites media. Au lieu de courir après le volume de recherche, nous partons des données de chiffre d'affaires et remontons pour identifier les termes qui generent reellement des ventes.",
      readTime: "9 min de lecture",
      sections: [
        {
          title: "Pourquoi la recherche de mots-clés e-commerce est differente",
          content:
            "Les sites de contenu monetisent l'attention. Ils ont besoin de visiteurs, donc le volume est roi. Une boutique en ligne monetise les transactions. Un mot-cle qui amene 50 visiteurs qui achetent vaut plus qu'un qui en amene 5 000 qui rebondissent. Cette distinction change tout dans la priorisation.\n\nLa plupart des guides de recherche de mots-cles recommandent de commencer par une liste de base, de l'enrichir avec un outil, puis de filtrer par volume et difficulte. Ce workflow a du sens pour un blog. Pour une boutique, il mene directement vers des termes informationnels qui remplissent vos analytics de trafic qui ne convertit jamais.\n\nLe workflow de recherche de mots-cles e-commerce commence par vos propres donnees de transactions. Quels produits se vendent ? Que tapent les clients dans votre recherche interne ? Quelles landing pages convertissent deja ? A partir de la, on s'etend vers des termes adjacents et des opportunites inexploitees. Pour un aperçu plus large de ce sujet, consultez notre guide sur les [mots-clés SEO e-commerce](/blog/ecommerce-seo-keywords).",
          items: [
            "Extrayez vos pages les plus generatrices de revenus depuis vos analytics avant de toucher un outil de mots-cles",
            "Exportez vos requetes de recherche interne, ce sont des signaux de demande spontanes de vrais acheteurs",
            "Consultez Google Search Console pour les requetes generant deja des impressions sur vos pages produits et categories",
          ],
          callout: {
            title: "Die 15/70-Regel",
            text: "Dans un magasin typique proposant plus de 200 produits, 15 à 20 % des pages génèrent 70 à 80 % des revenus organiques. Identifiez d'abord ces pages et construisez votre stratégie de mots clés à partir de ce noyau éprouvé.",
          },
        },
        {
          title: "Commencer par le chiffre d'affaires, pas le volume",
          content:
            "Ouvrez votre plateforme d'analytics et triez les landing pages par revenu. Les pages qui generent le plus de ventes vous indiquent deja quels mots-cles comptent. Croisez ces pages avec Google Search Console pour voir quelles requetes amenent des visiteurs.\n\nPour une boutique typique avec plus de 200 produits, vous constaterez que 15-20% des pages generent 70-80% du chiffre d'affaires organique. Ce sont vos mots-cles prioritaires. Toute recherche supplementaire doit s'etendre a partir de ce noyau, pas d'une page blanche.\n\nSi vous lancez une nouvelle boutique sans donnees historiques, utilisez l'analyse concurrentielle comme point de depart. Identifiez 3 a 5 concurrents directs et extrayez leurs mots-cles positionnees depuis Ahrefs ou Semrush. Filtrez pour les pages qui ressemblent a des pages produits ou categories, ignorez leur contenu blog pour l'instant.",
          tip: "Creez un tableur simple avec des colonnes pour l'URL, le mot-cle principal, les recherches mensuelles, le classement actuel et le revenu mensuel. Cela devient votre centre de commande de mots-cles et vous empeche de vous perdre dans les donnees des outils.",
        },
        {
          title: "Le workflow de recherche de mots-clés e-commerce",
          content:
            "Etape une : auditez votre performance organique existante. Tirez toutes les pages avec du trafic organique de la GSC et taguez chacune comme produit, categorie, blog ou autre. Calculez le revenu par session organique pour chaque type de page.\n\nEtape deux : construisez votre liste de base a partir de trois sources, vos donnees de recherche interne, votre rapport de requetes GSC et les exports de mots-cles concurrents. Dedupliquez et taguez chaque mot-cle avec son type de page probable (page produit, page categorie ou page de contenu).\n\nEtape trois : elargissez votre liste de base avec des outils de mots-cles. Pour chaque terme de base, tirez les termes associes, les questions et les variantes longue traine. Mais filtrez sans pitie, ne gardez que les termes avec une intention commerciale ou transactionnelle claire.\n\nEtape quatre : priorisez. Evaluez chaque mot-cle sur trois axes : potentiel de revenus (volume de recherche multiplie par le taux de conversion estime multiplie par le panier moyen), position actuelle et lacune de contenu (avez-vous une page pour ce terme ou non). Les mots-cles avec les meilleurs scores sur les trois axes sont traites en premier. Dédupliquez et taguez chaque mot-clé avec son type de page probable (les [mots-clés produit vs catégorie](/academy/product-vs-category-keywords) sont couverts dans notre prochain sujet).",
          items: [
            "Taguez chaque mot-cle avec son type de page cible : produit, categorie ou contenu",
            "Filtrez les mots-cles purement informationnels sauf s'ils s'inscrivent clairement dans un tunnel d'achat",
            "Evaluez les mots-cles par potentiel de revenus, pas seulement par volume ou difficulte",
            "Identifiez les lacunes de contenu ou aucune page ne cible un mot-cle a fort potentiel",
          ],
          image: {
            src: "/images/academy/fr/ecommerce-kw-research-workflow.svg",
            alt: "Flussdiagramm des vierstufigen Ecommerce Keyword-Recherche-Workflows",
            caption: "Le flux de travail en quatre étapes commence par les données sur les revenus et se termine par une liste de mots clés classés par priorité en fonction du potentiel de revenus, et pas seulement du volume de recherche.",
          },
          callout: {
            title: "Umsatz-Score-Formel",
            text: "Volume x CTR x Taux de conversion x AOV = Potentiel de revenus. Un mot clé avec 500 recherches et 5 % de conversion à 80 $ AOV bat de 2x celui avec 10 000 recherches et 0,2 % de conversion avec le même AOV.",
          },
        },
        {
          title: "Outils et sources de données",
          content:
            "Google Search Console est votre outil de mots-cles le plus sous-estime. Il vous montre exactement quelles requetes Google associe a vos pages, vos taux de clics et votre position dans les classements. Aucun outil tiers n'offre ce niveau de precision pour votre propre site.\n\nAhrefs et Semrush fournissent tous deux des bases de donnees de mots-cles avec des estimations de volume, des scores de difficulte et des donnees concurrentielles. Pour le e-commerce, leurs fonctionnalites de keyword gap sont particulierement utiles, elles vous montrent exactement quels termes vos concurrents couvrent et que vous manquez completement.\n\nGoogle Keyword Planner reste utile pour les estimations de volume, surtout pour les termes specifiques aux produits que les outils tiers ratent parfois. Ses donnees proviennent directement de Google Ads, donc les mots-cles commerciaux tendent a avoir des chiffres de volume plus precis.\n\nN'oubliez pas Amazon Autocomplete et les donnees de recherche Amazon si vous vendez aussi sur les places de marche. Les termes de recherche Amazon sont de l'[intention d'achat](/academy/buyer-intent-vs-search-volume) pure, les gens qui cherchent sur Amazon sont prets a acheter. Des outils comme Helium 10 ou Jungle Scout peuvent extraire ces donnees.",
          tip: "Passez vos 50 principaux noms de produits dans Amazon Autocomplete. Les suggestions revelent des modificateurs d'achat specifiques (tailles, couleurs, cas d'usage) que les outils de mots-cles Google ratent souvent.",
        },
        {
          title: "Erreurs courantes des boutiques",
          content:
            "La plus grosse erreur est de cibler des termes generiques avec un volume massif en ignorant la longue traine. Une boutique vendant des chaussures de course pourrait se focaliser sur \"chaussures de course\" (201 000 recherches mensuelles) tout en ignorant \"chaussures de trail femme pied large\" (480 recherches mensuelles, taux de conversion 4x superieur).\n\nUne autre erreur frequente est de traiter la recherche de mots-cles comme un projet ponctuel. Votre catalogue produit evolue, la demande saisonniere fluctue, et les concurrents entrent et quittent le marche. La recherche de mots-cles devrait etre revisitee au minimum chaque trimestre, avec des verifications mensuelles sur vos termes prioritaires.\n\nBeaucoup de boutiques font aussi l'erreur d'utiliser des strategies de mots-cles orientees blog. Elles publient des dizaines d'articles informationnels qui se positionnent bien mais ne menent jamais a un achat. Un article sur \"comment choisir des chaussures de randonnee\" n'aide que s'il renvoie efficacement vers votre page categorie de chaussures de randonnee.\n\nEnfin, mefiance envers les outils qui gonflent les scores de difficulte. Un mot-cle avec une difficulte de 70 dans Ahrefs pourrait etre parfaitement accessible pour votre boutique si les premiers resultats sont des pages produits maigres de concurrents avec des profils de backlinks faibles. Verifiez toujours manuellement la SERP avant d'ecarter un mot-cle comme trop competitif.",
          items: [
            "Evitez de cibler uniquement les termes generiques, la longue traine convertit 2 a 3x mieux pour la plupart des boutiques",
            "Revisitez votre strategie de mots-cles chaque trimestre, pas chaque annee",
            "Assurez-vous que le contenu informationnel est connecte aux pages transactionnelles via des liens internes",
            "Verifiez manuellement les SERP avant de faire confiance aux scores de difficulte d'un outil",
          ],
        },
        {
          title: "Construire votre premier sprint de recherche de mots-clés",
          content:
            "Nous recommandons un sprint concentre de deux semaines pour construire votre carte de mots-cles initiale. La premiere semaine couvre la collecte de donnees : tirer les donnees GSC, exporter les mots-cles concurrents, rassembler les requetes de recherche interne et passer vos termes de base dans Ahrefs ou Semrush.\n\nLa deuxieme semaine se concentre sur l'analyse et le mapping. Clusterisez vos mots-cles par theme, assignez chaque cluster a un type de page, identifiez les lacunes dans votre structure de site actuelle et priorisez les 20-30 cibles de mots-cles qui genereront le plus de revenus.\n\nA la fin de ce sprint, vous devriez avoir une carte de mots-cles fonctionnelle couvrant vos principales categories et produits, une liste priorisee de lacunes de contenu a combler et un calendrier de revue trimestriel pour maintenir la carte a jour. Ce document devient la base de chaque decision SEO que vous prendrez par la suite.",
        },
      ],
      navLabels: {
        previous: "Google Search Console pour les boutiques",
        next: "Intention d'achat vs. volume de recherche",
      },
    },
    es: {
      badge: "Investigacion de palabras clave",
      heading: "Investigación de palabras clave para ecommerce",
      intro: "La investigacion de palabras clave para tiendas online sigue una lógica fundamentalmente diferente a la de blogs o sitios de contenido. En lugar de perseguir volumen de busqueda, comenzamos con datos de ingresos y trabajamos hacia atrás para identificar los terminos que realmente generan ventas.",
      readTime: "9 min de lectura",
      sections: [
        {
          title: "Por qué la investigación de palabras clave para ecommerce es diferente",
          content:
            "Los sitios de contenido monetizan la atencion. Necesitan visitantes, asi que el volumen es lo primordial. Una tienda online monetiza transacciones. Una palabra clave que trae 50 visitantes que compran vale mas que una que trae 5.000 que rebotan. Esta distincion cambia todo sobre como priorizas.\n\nLa mayoria de guias de investigacion de palabras clave te dicen que empieces con una lista semilla, la expandas con una herramienta y luego filtres por volumen y dificultad. Ese flujo de trabajo tiene sentido para un blog. Para una tienda, te lleva directamente a terminos informativos que llenan tus analytics con trafico que nunca convierte.\n\nEl flujo de trabajo de investigacion de [palabras clave para ecommerce](/blog/ecommerce-seo-keywords) comienza con tus propios datos de transacciones. Que productos se venden? Que escriben los clientes en la busqueda interna? Que landing pages ya convierten? Desde ahi, expandimos hacia terminos adyacentes y oportunidades sin explotar.",
          items: [
            "Extrae tus paginas con mayor generacion de ingresos de analytics antes de tocar cualquier herramienta de palabras clave",
            "Exporta las consultas de busqueda interna de tu sitio, son senales de demanda espontaneas de compradores reales",
            "Revisa Google Search Console para consultas que ya generan impresiones en paginas de productos y categorias",
          ],
          callout: {
            title: "Die 15/70-Regel",
            text: "En una tienda típica con más de 200 productos, entre el 15 y el 20 % de las páginas generan entre el 70 y el 80 % de los ingresos orgánicos. Primero identifique estas páginas y desarrolle su estrategia de palabras clave a partir de este núcleo probado.",
          },
        },
        {
          title: "Empezar con ingresos, no con volumen",
          content:
            "Abre tu plataforma de analytics y ordena las landing pages por ingresos. Las paginas que generan mas ventas ya te dicen que palabras clave importan. Cruza estas paginas con Google Search Console para ver que consultas traen visitantes.\n\nPara una tienda tipica con mas de 200 productos, encontraras que el 15-20% de las paginas genera el 70-80% de los ingresos organicos. Estas son tus palabras clave prioritarias. Cualquier investigacion adicional debe expandirse desde este nucleo, no desde una hoja en blanco.\n\nSi estas lanzando una tienda nueva sin datos historicos, usa el analisis de competencia como punto de partida. Identifica 3 a 5 competidores directos y extrae sus palabras clave posicionadas desde Ahrefs o Semrush. Filtra por paginas que parezcan paginas de producto o categoria, ignora su contenido de blog por ahora.",
          tip: "Crea una hoja de calculo simple con columnas para URL, palabra clave principal, busquedas mensuales, posicion actual e ingresos mensuales. Esto se convierte en tu centro de mando de palabras clave y evita que te pierdas en datos de herramientas.",
        },
        {
          title: "El flujo de trabajo de investigación de palabras clave para ecommerce",
          content:
            "Paso uno: audita tu rendimiento organico existente. Extrae todas las paginas con trafico organico de GSC y etiqueta cada una como producto, categoria, blog u otro. Calcula los ingresos por sesion organica para cada tipo de pagina.\n\nPaso dos: construye tu lista semilla desde tres fuentes, tus datos de busqueda interna, tu informe de consultas GSC y exportaciones de palabras clave de competidores. Deduplica y etiqueta cada palabra clave con su tipo de pagina probable (pagina de producto, pagina de categoria o pagina de contenido).\n\nPaso tres: expande tu lista semilla usando herramientas de palabras clave. Para cada semilla, extrae terminos relacionados, preguntas y variantes de cola larga. Pero filtra sin piedad, conserva solo terminos con intencion comercial o transaccional clara.\n\nPaso cuatro: prioriza. Puntua cada palabra clave en tres ejes: potencial de ingresos (volumen de busqueda multiplicado por tasa de conversion estimada multiplicado por valor promedio de pedido), posicion actual de ranking y brecha de contenido (tienes una pagina para este termino o no). Las palabras clave con las puntuaciones mas altas en los tres ejes se trabajan primero. Deduplica y etiqueta cada palabra clave con su tipo de pagina probable ([palabras clave de producto vs categoria](/academy/product-vs-category-keywords) se cubre en nuestro siguiente tema). Comprender la [intencion de compra vs volumen de busqueda](/academy/buyer-intent-vs-search-volume) te ayudara a hacer esta distincion.",
          items: [
            "Etiqueta cada palabra clave con su tipo de pagina objetivo: producto, categoria o contenido",
            "Filtra las palabras clave puramente informativas a menos que se mapeen a un embudo de compra claro",
            "Puntua las palabras clave por potencial de ingresos, no solo por volumen o dificultad",
            "Identifica brechas de contenido donde no tienes pagina apuntando a una palabra clave de alto potencial",
          ],
          image: {
            src: "/images/academy/es/ecommerce-kw-research-workflow.svg",
            alt: "Flussdiagramm des vierstufigen Ecommerce Keyword-Recherche-Workflows",
            caption: "El flujo de trabajo de cuatro pasos comienza con datos de ingresos y termina con una lista de palabras clave priorizadas calificadas según el potencial de ingresos, no solo el volumen de búsqueda.",
          },
          callout: {
            title: "Umsatz-Score-Formel",
            text: "Volumen x CTR x Tasa de conversión x AOV = Potencial de ingresos. Una palabra clave con 500 búsquedas y un 5 % de conversión con un AOV de $80 supera a una con 10 000 búsquedas y un 0,2 % de conversión con el mismo AOV por 2 veces.",
          },
        },
        {
          title: "Herramientas y fuentes de datos",
          content:
            "Google Search Console es tu herramienta de palabras clave mas infravalorada. Te muestra exactamente que consultas asocia Google con tus paginas, tus tasas de clics y donde te situas en los rankings. Ninguna herramienta de terceros ofrece este nivel de precision para tu propio sitio.\n\nAhrefs y Semrush proporcionan bases de datos de palabras clave con estimaciones de volumen, puntuaciones de dificultad y datos de competencia. Para ecommerce, sus funciones de keyword gap son particularmente utiles, te muestran exactamente que terminos cubren tus competidores y que tu pierdes por completo.\n\nGoogle Keyword Planner sigue siendo util para estimaciones de volumen, especialmente para terminos especificos de productos que las herramientas de terceros a veces pasan por alto. Sus datos provienen directamente de Google Ads, asi que las palabras clave comerciales tienden a tener numeros de volumen mas precisos.\n\nNo pases por alto Amazon Autocomplete y los datos de busqueda de Amazon si tambien vendes en marketplaces. Los terminos de busqueda de Amazon son intencion de compra pura, las personas que buscan en Amazon estan listas para comprar. Herramientas como Helium 10 o Jungle Scout pueden extraer estos datos.",
          tip: "Pasa tus 50 nombres de producto principales por Amazon Autocomplete. Las sugerencias revelan modificadores de compra especificos (tallas, colores, casos de uso) que las herramientas de palabras clave de Google suelen pasar por alto.",
        },
        {
          title: "Errores comunes que cometen las tiendas",
          content:
            "El mayor error es apuntar a terminos principales con volumen masivo e ignorar la cola larga. Una tienda que vende zapatillas de correr podria fijarse en posicionar \"zapatillas de correr\" (201.000 busquedas mensuales) mientras ignora \"zapatillas trail mujer horma ancha\" (480 busquedas mensuales, tasa de conversion 4 veces mayor).\n\nOtro error frecuente es tratar la investigacion de palabras clave como un proyecto de una sola vez. Tu catalogo de productos cambia, la demanda estacional se desplaza y los competidores entran y salen del mercado. La investigacion de palabras clave deberia revisarse como minimo cada trimestre, con verificaciones mensuales de tus terminos prioritarios.\n\nMuchas tiendas tambien cometen el error de usar estrategias de palabras clave de estilo blog. Publican docenas de articulos informativos que posicionan bien pero nunca conducen a comportamiento de compra. Un articulo sobre \"como elegir botas de senderismo\" solo ayuda si enlaza efectivamente a tu pagina de categoria de botas de senderismo.\n\nFinalmente, cuidado con las herramientas que inflan las puntuaciones de dificultad. Una palabra clave con dificultad de 70 en Ahrefs podria ser perfectamente alcanzable para tu tienda si los primeros resultados son paginas de producto delgadas de competidores con perfiles de backlinks debiles. Siempre revisa la SERP manualmente antes de descartar una palabra clave como demasiado competitiva.",
          items: [
            "Evita apuntar solo a terminos principales, la cola larga convierte 2-3x mejor para la mayoria de tiendas",
            "Revisa tu estrategia de palabras clave trimestralmente, no anualmente",
            "Asegura que el contenido informativo se conecte con paginas transaccionales mediante enlaces internos",
            "Revisa las SERP manualmente antes de confiar en puntuaciones de dificultad de cualquier herramienta",
          ],
        },
        {
          title: "Construyendo tu primer sprint de investigación de palabras clave",
          content:
            "Recomendamos un sprint enfocado de dos semanas para construir tu mapa de palabras clave inicial. La primera semana cubre la recopilacion de datos: extraer datos de GSC, exportar palabras clave de competidores, reunir consultas de busqueda interna y pasar tus terminos semilla por Ahrefs o Semrush.\n\nLa segunda semana se enfoca en analisis y mapeo. Agrupa tus palabras clave por tema, asigna cada grupo a un tipo de pagina, identifica brechas en la estructura actual de tu sitio y prioriza los 20-30 objetivos de palabras clave que generaran mas ingresos.\n\nAl final de este sprint, deberias tener un mapa de palabras clave funcional que cubra tus principales categorias y productos, una lista priorizada de brechas de contenido a llenar y un calendario de revision trimestral para mantener el mapa actualizado. Este documento se convierte en la base de cada decision SEO que tomes en adelante. Si necesitas ayuda profesional con este proceso, explora nuestro servicio de [investigacion de palabras clave](/keyword-research).",
        },
      ],
      navLabels: {
        previous: "Google Search Console para tiendas",
        next: "Intencion de compra vs. volumen de busqueda",
      },
    },
    it: {
      badge: "Ricerca parole chiave",
      heading: "Ricerca di parole chiave per l'e-commerce",
      intro:
        "La ricerca di parole chiave per i negozi online segue una logica fondamentalmente diversa rispetto a quella per blog o siti di contenuti. Invece di rincorrere il volume di ricerca, partiamo dai dati di fatturato e lavoriamo a ritroso per identificare i termini che generano effettivamente vendite.",
      readTime: "9 min di lettura",
      sections: [
        {
          title: "Perche la ricerca di parole chiave per l'e-commerce e diversa",
          content:
            "I siti di contenuto monetizzano l'attenzione. Hanno bisogno di visitatori, quindi il volume e fondamentale. Un negozio online monetizza le transazioni. Una parola chiave che porta 50 visitatori che acquistano vale piu di una che ne porta 5.000 che rimbalzano. Questa distinzione cambia tutto nella definizione delle priorita.\n\nLa maggior parte delle guide sulla ricerca di parole chiave suggerisce di partire con una lista seed, espanderla con uno strumento e poi filtrare per volume e difficolta. Questo workflow ha senso per un blog. Per un negozio, porta dritti verso termini informazionali che riempiono le analytics di traffico che non converte mai.\n\nIl workflow di ricerca parole chiave per l'e-commerce inizia con i propri dati di transazione. Quali prodotti vendono? Cosa digitano i clienti nella ricerca interna? Quali landing page convertono gia? Da li, ci espandiamo verso termini adiacenti e opportunita inesplorate. Per approfondire, consulta la nostra guida sulle [keyword SEO per ecommerce](/blog/ecommerce-seo-keywords).",
          items: [
            "Estraete le pagine con maggior generazione di ricavi dalle analytics prima di toccare qualsiasi strumento di parole chiave",
            "Esportate le query di ricerca interna del sito, sono segnali di domanda spontanei da acquirenti reali",
            "Controllate Google Search Console per le query che generano gia impressioni sulle pagine prodotto e categoria",
          ],
          callout: {
            title: "Die 15/70-Regel",
            text: "In un tipico negozio con oltre 200 prodotti, il 15-20% delle pagine genera il 70-80% delle entrate organiche. Identifica prima queste pagine e costruisci la tua strategia per le parole chiave partendo da questo nucleo comprovato.",
          },
        },
        {
          title: "Partire dal fatturato, non dal volume",
          content:
            "Aprite la vostra piattaforma di analytics e ordinate le landing page per fatturato. Le pagine che generano piu vendite vi dicono gia quali parole chiave contano. Incrociate queste pagine con Google Search Console per vedere quali query portano visitatori.\n\nPer un negozio tipico con oltre 200 prodotti, scoprirete che il 15-20% delle pagine genera il 70-80% del fatturato organico. Queste sono le vostre parole chiave prioritarie. Qualsiasi ricerca aggiuntiva dovrebbe espandersi da questo nucleo, non da un foglio bianco.\n\nSe state lanciando un nuovo negozio senza dati storici, usate l'analisi della concorrenza come punto di partenza. Identificate 3-5 concorrenti diretti ed estraete le loro parole chiave posizionate da Ahrefs o Semrush. Filtrate per pagine che sembrano pagine prodotto o categoria, ignorate i loro contenuti blog per il momento.",
          tip: "Create un foglio di calcolo semplice con colonne per URL, parola chiave principale, ricerche mensili, posizione attuale e fatturato mensile. Diventa il vostro centro di comando per le parole chiave e vi impedisce di perdervi nei dati degli strumenti.",
        },
        {
          title: "Il workflow di ricerca parole chiave per l'e-commerce",
          content:
            "Primo passo: verificate le vostre performance organiche esistenti. Estraete tutte le pagine con traffico organico dalla GSC e taggate ciascuna come prodotto, categoria, blog o altro. Calcolate il fatturato per sessione organica per ogni tipo di pagina.\n\nSecondo passo: costruite la vostra lista seed da tre fonti, i dati di ricerca interna, il report delle query GSC e le esportazioni di parole chiave dei concorrenti. Deduplicate e taggate ogni parola chiave con il suo tipo di pagina probabile (pagina prodotto, pagina categoria o pagina di contenuto). Approfondisci con la nostra guida sulle [keyword prodotto vs categoria](/academy/product-vs-category-keywords).\n\nTerzo passo: espandete la lista seed usando strumenti di parole chiave. Per ogni seed, estraete termini correlati, domande e varianti long-tail. Ma filtrate senza pieta, tenete solo termini con chiara intenzione commerciale o transazionale. Approfondisci con la nostra guida sulla [intenzione d'acquisto vs volume di ricerca](/academy/buyer-intent-vs-search-volume).\n\nQuarto passo: date le priorita. Valutate ogni parola chiave su tre assi: potenziale di fatturato (volume di ricerca moltiplicato per tasso di conversione stimato moltiplicato per valore medio dell'ordine), posizione attuale nel ranking e gap di contenuto (avete una pagina per questo termine o no). Le parole chiave con i punteggi piu alti su tutti e tre gli assi vengono lavorate per prime.",
          items: [
            "Taggate ogni parola chiave con il suo tipo di pagina target: prodotto, categoria o contenuto",
            "Filtrate le parole chiave puramente informazionali a meno che si mappino chiaramente su un funnel di acquisto",
            "Valutate le parole chiave per potenziale di fatturato, non solo per volume o difficolta",
            "Identificate i gap di contenuto dove non avete nessuna pagina che punti a una parola chiave ad alto potenziale",
          ],
          image: {
            src: "/images/academy/it/ecommerce-kw-research-workflow.svg",
            alt: "Flussdiagramm des vierstufigen Ecommerce Keyword-Recherche-Workflows",
            caption: "Il flusso di lavoro in quattro fasi inizia con i dati sulle entrate e termina con un elenco di parole chiave con priorità valutate in base al potenziale di entrate, non solo al volume di ricerca.",
          },
          callout: {
            title: "Umsatz-Score-Formel",
            text: "Volume x CTR x Tasso di conversione x AOV = entrate potenziali. Una parola chiave con 500 ricerche e una conversione del 5% con un AOV di $ 80 batte di 2 volte una con 10.000 ricerche e una conversione dello 0,2% con lo stesso AOV.",
          },
        },
        {
          title: "Strumenti e fonti di dati",
          content:
            "Google Search Console e il vostro strumento di parole chiave piu sottovalutato. Vi mostra esattamente quali query Google associa alle vostre pagine, i vostri tassi di clic e dove vi posizionate nei ranking. Nessuno strumento di terze parti offre questo livello di precisione per il vostro sito.\n\nAhrefs e Semrush forniscono entrambi database di parole chiave con stime di volume, punteggi di difficolta e dati sulla concorrenza. Per l'e-commerce, le loro funzionalita di keyword gap sono particolarmente utili, vi mostrano esattamente quali termini i vostri concorrenti coprono e che voi mancate completamente.\n\nGoogle Keyword Planner rimane utile per le stime di volume, specialmente per termini specifici dei prodotti che gli strumenti di terze parti a volte trascurano. I suoi dati provengono direttamente da Google Ads, quindi le parole chiave commerciali tendono ad avere numeri di volume piu precisi.\n\nNon trascurate Amazon Autocomplete e i dati di ricerca Amazon se vendete anche sui marketplace. I termini di ricerca Amazon sono pura intenzione d'acquisto, le persone che cercano su Amazon sono pronte a comprare. Strumenti come Helium 10 o Jungle Scout possono estrarre questi dati.",
          tip: "Passate i vostri 50 principali nomi di prodotto attraverso Amazon Autocomplete. I suggerimenti rivelano modificatori di acquisto specifici (taglie, colori, casi d'uso) che gli strumenti di parole chiave Google spesso trascurano.",
        },
        {
          title: "Errori comuni che commettono i negozi",
          content:
            "L'errore piu grande e puntare sui termini generici con volume massiccio ignorando la coda lunga. Un negozio che vende scarpe da corsa potrebbe fissarsi sul posizionarsi per \"scarpe da corsa\" (201.000 ricerche mensili) ignorando \"scarpe da trail donna pianta larga\" (480 ricerche mensili, tasso di conversione 4 volte superiore).\n\nUn altro errore frequente e trattare la ricerca di parole chiave come un progetto una tantum. Il vostro catalogo prodotti cambia, la domanda stagionale si sposta e i concorrenti entrano ed escono dal mercato. La ricerca di parole chiave dovrebbe essere rivista almeno ogni trimestre, con controlli mensili sui vostri termini prioritari.\n\nMolti negozi commettono anche l'errore di usare strategie di parole chiave in stile blog. Pubblicano decine di articoli informazionali che si posizionano bene ma non conducono mai a comportamenti d'acquisto. Un articolo su \"come scegliere scarpe da trekking\" aiuta solo se collega efficacemente alla vostra pagina categoria di scarpe da trekking.\n\nInfine, fate attenzione agli strumenti che gonfiano i punteggi di difficolta. Una parola chiave con difficolta 70 in Ahrefs potrebbe essere perfettamente raggiungibile per il vostro negozio se i primi risultati sono pagine prodotto sottili di concorrenti con profili backlink deboli. Verificate sempre manualmente la SERP prima di scartare una parola chiave come troppo competitiva.",
          items: [
            "Evitate di puntare solo sui termini generici, la coda lunga converte 2-3 volte meglio per la maggior parte dei negozi",
            "Rivedete la vostra strategia di parole chiave trimestralmente, non annualmente",
            "Assicuratevi che i contenuti informazionali si colleghino alle pagine transazionali tramite link interni",
            "Verificate manualmente le SERP prima di fidarvi dei punteggi di difficolta di qualsiasi strumento",
          ],
        },
        {
          title: "Costruire il primo sprint di ricerca parole chiave",
          content:
            "Raccomandiamo uno sprint concentrato di due settimane per costruire la vostra mappa di parole chiave iniziale. La prima settimana copre la raccolta dati: estrarre dati GSC, esportare parole chiave dei concorrenti, raccogliere query di ricerca interna e passare i termini seed attraverso Ahrefs o Semrush.\n\nLa seconda settimana si concentra su analisi e mapping. Raggruppate le parole chiave per tema, assegnate ogni cluster a un tipo di pagina, identificate le lacune nella struttura attuale del sito e date priorita ai 20-30 obiettivi di parole chiave che genereranno il maggior fatturato.\n\nAlla fine di questo sprint, dovreste avere una mappa di parole chiave funzionante che copra le vostre principali categorie e prodotti, una lista prioritaria di lacune di contenuto da colmare e un calendario di revisione trimestrale per mantenere la mappa aggiornata. Questo documento diventa la base per ogni decisione SEO che prenderete in futuro. Approfondisci con la nostra guida sulla [ricerca keyword](/keyword-research).",
        },
      ],
      navLabels: {
        previous: "Google Search Console per i negozi",
        next: "Intenzione d'acquisto vs. volume di ricerca",
      },
    },
    nl: {
      badge: "Zoekwoordonderzoek",
      heading: "Zoekwoordonderzoek voor e-commerce",
      intro:
        "Zoekwoordonderzoek voor webshops volgt een fundamenteel andere logica dan zoekwoordonderzoek voor blogs of mediasites. In plaats van zoekvolume na te jagen, beginnen we met omzetdata en werken we achteruit om de termen te identificeren die daadwerkelijk verkopen genereren.",
      readTime: "9 min leestijd",
      sections: [
        {
          title: "Waarom e-commerce zoekwoordonderzoek anders is",
          content:
            "Contentsites verdienen aan aandacht. Ze hebben bezoekers nodig, dus volume is alles. Een webshop verdient aan transacties. Een zoekwoord dat 50 bezoekers brengt die kopen, is meer waard dan een dat er 5.000 brengt die meteen vertrekken. Dit onderscheid verandert alles aan hoe je prioriteiten stelt.\n\nDe meeste gidsen voor zoekwoordonderzoek vertellen je om te beginnen met een seed-lijst, deze uit te breiden met een tool en vervolgens te filteren op volume en moeilijkheidsgraad. Die workflow werkt voor een blog. Voor een webshop leidt het rechtstreeks naar informatieve termen die je analytics vullen met verkeer dat nooit converteert.\n\nDe e-commerce zoekwoordonderzoek-workflow begint met je eigen transactiedata. Welke producten verkopen? Wat typen klanten in je interne zoekveld? Welke landingspagina's converteren al? Van daaruit breid je uit naar aangrenzende termen en onbenutte kansen.\n\nOnze gids over [ecommerce-SEO-zoekwoorden](/blog/ecommerce-seo-keywords) behandelt deze tools en technieken.",
          items: [
            "Haal je best presterende pagina's qua omzet uit analytics voordat je een zoekwoordtool opent",
            "Exporteer je interne zoekqueries, dit zijn spontane vraagsignalen van echte kopers",
            "Controleer Google Search Console voor queries die al impressies genereren op product- en categoriepagina's",
          ],
          callout: {
            title: "Die 15/70-Regel",
            text: "In een typische winkel met meer dan 200 producten genereert 15-20% van de pagina's 70-80% van de organische omzet. Identificeer eerst deze pagina's en bouw uw zoekwoordstrategie op vanuit deze bewezen kern.",
          },
        },
        {
          title: "Begin met omzet, niet met volume",
          content:
            "Open je analytics-platform en sorteer landingspagina's op omzet. De pagina's die de meeste verkopen genereren, vertellen je al welke zoekwoorden ertoe doen. Kruis deze pagina's met Google Search Console om te zien welke queries bezoekers brengen.\n\nVoor een typische webshop met meer dan 200 producten zul je ontdekken dat 15-20% van de pagina's 70-80% van de organische omzet genereert. Dit zijn je prioriteitszoekwoorden. Al je verdere onderzoek moet vanuit deze kern uitbreiden, niet vanuit een blanco vel.\n\nAls je een nieuwe webshop start zonder historische data, gebruik dan concurrentieanalyse als startpunt. Identificeer 3 tot 5 directe concurrenten en haal hun rankende zoekwoorden uit Ahrefs of Semrush. Filter op pagina's die eruitzien als product- of categoriepagina's, negeer hun blogcontent voorlopig.",
          tip: "Maak een eenvoudige spreadsheet met kolommen voor URL, primair zoekwoord, maandelijkse zoekopdrachten, huidige ranking en maandelijkse omzet. Dit wordt je zoekwoord-commandocentrum en voorkomt dat je verdwaalt in tooldata.",
        },
        {
          title: "De e-commerce zoekwoordonderzoek-workflow",
          content:
            "Stap een: audit je bestaande organische prestaties. Haal alle pagina's met organisch verkeer uit GSC en tag elke pagina als product, categorie, blog of overig. Bereken de omzet per organische sessie voor elk paginatype.\n\nStap twee: bouw je seed-lijst vanuit drie bronnen, je interne zoekdata, je GSC-queryrapport en zoekwoordexporten van concurrenten. Dedupliceer en tag elk zoekwoord met zijn waarschijnlijke paginatype (productpagina, categoriepagina of contentpagina).\n\nStap drie: breid je seed-lijst uit met zoekwoordtools. Trek voor elke seed gerelateerde termen, vragen en long-tail-varianten. Maar filter meedogenloos, bewaar alleen termen met duidelijke commerciele of transactionele intentie.\n\nStap vier: prioriteer. Beoordeel elk zoekwoord op drie assen: omzetpotentieel (zoekvolume maal geschat conversiepercentage maal gemiddelde bestelwaarde), huidige rankingpositie en contentgap (heb je een pagina voor deze term of niet). De zoekwoorden met de hoogste scores op alle drie de assen worden als eerste opgepakt.\n\nLees meer over [product- versus categorie-zoekwoorden](/academy/product-vs-category-keywords) in ons gedetailleerde onderwerp.\n\nHet begrijpen van [koopintentie versus zoekvolume](/academy/buyer-intent-vs-search-volume) is essentieel voor het prioriteren van je zoekwoordstrategie.",
          items: [
            "Tag elk zoekwoord met het doelpaginatype: product, categorie of content",
            "Filter puur informatieve zoekwoorden eruit tenzij ze duidelijk in een aankooptrechter passen",
            "Beoordeel zoekwoorden op omzetpotentieel, niet alleen op volume of moeilijkheidsgraad",
            "Identificeer contentgaps waar geen pagina een zoekwoord met hoog potentieel target",
          ],
          image: {
            src: "/images/academy/nl/ecommerce-kw-research-workflow.svg",
            alt: "Flussdiagramm des vierstufigen Ecommerce Keyword-Recherche-Workflows",
            caption: "De workflow in vier stappen begint met omzetgegevens en eindigt met een lijst met geprioriteerde zoekwoorden, gescoord op omzetpotentieel, niet alleen op zoekvolume.",
          },
          callout: {
            title: "Umsatz-Score-Formel",
            text: "Volume x CTR x conversiepercentage x AOV = omzetpotentieel. Een zoekwoord met 500 zoekopdrachten en 5% conversie bij een AOV van $ 80 verslaat een zoekwoord met 10.000 zoekopdrachten en 0,2% conversie bij dezelfde AOV met een factor 2x.",
          },
        },
        {
          title: "Tools en databronnen",
          content:
            "Google Search Console is je meest onderschatte zoekwoordtool. Het toont je precies welke queries Google aan je pagina's koppelt, je klikfrequenties en waar je staat in de rankings. Geen enkele externe tool biedt dit niveau van nauwkeurigheid voor je eigen site.\n\nAhrefs en Semrush bieden beide zoekwoorddatabases met volumeschattingen, moeilijkheidsscores en concurrentiedata. Voor e-commerce zijn hun keyword-gap-functies bijzonder nuttig, ze tonen je precies welke termen je concurrenten afdekken die jij volledig mist.\n\nGoogle Keyword Planner blijft nuttig voor volumeschattingen, vooral voor productspecifieke termen die externe tools soms missen. De data komt rechtstreeks uit Google Ads, dus commerciele zoekwoorden hebben doorgaans nauwkeurigere volumenummers.\n\nVergeet Amazon Autocomplete en Amazon-zoekdata niet als je ook op marktplaatsen verkoopt. Amazon-zoektermen zijn pure koopintentie, mensen die op Amazon zoeken zijn klaar om te kopen. Tools als Helium 10 of Jungle Scout kunnen deze data extraheren.",
          tip: "Voer je top 50 productnamen in via Amazon Autocomplete. De suggesties onthullen koopspecifieke modifiers (maten, kleuren, gebruiksscenario's) die Google zoekwoordtools vaak missen.",
        },
        {
          title: "Veelgemaakte fouten door webshops",
          content:
            "De grootste fout is het targeten van head-terms met enorm volume en het negeren van de long tail. Een webshop die hardloopschoenen verkoopt, fixeert zich misschien op ranken voor \"hardloopschoenen\" (201.000 maandelijkse zoekopdrachten) terwijl \"dames trailrunning schoenen brede pasvorm\" (480 maandelijkse zoekopdrachten, 4x hoger conversiepercentage) wordt genegeerd.\n\nEen andere veelgemaakte fout is zoekwoordonderzoek als eenmalig project behandelen. Je productcatalogus verandert, seizoensgebonden vraag verschuift en concurrenten komen en gaan. Zoekwoordonderzoek moet minimaal elk kwartaal worden herzien, met maandelijkse controles op je prioriteitstermen.\n\nVeel webshops maken ook de fout om blogachtige zoekwoordstrategieen te gebruiken. Ze publiceren tientallen informatieve artikelen die goed ranken maar nooit tot koopgedrag leiden. Een artikel over \"hoe wandelschoenen kiezen\" helpt alleen als het effectief linkt naar je categoriepagina voor wandelschoenen.\n\nLet ten slotte op zoekwoordtools die moeilijkheidsscores opblazen. Een zoekwoord met moeilijkheidsgraad 70 in Ahrefs kan perfect haalbaar zijn voor jouw webshop als de topresultaten dunne productpagina's zijn van concurrenten met zwakke backlinkprofielen. Controleer altijd handmatig de SERP voordat je een zoekwoord als te competitief afschrijft.",
          items: [
            "Vermijd het targeten van alleen head-terms, de long tail converteert 2-3x beter voor de meeste webshops",
            "Herzie je zoekwoordstrategie elk kwartaal, niet jaarlijks",
            "Zorg dat informatieve content verbonden is met transactionele pagina's via interne links",
            "Controleer SERP's handmatig voordat je moeilijkheidsscores van een tool vertrouwt",
          ],
        },
        {
          title: "Je eerste zoekwoordonderzoek-sprint opzetten",
          content:
            "We raden een gerichte sprint van twee weken aan om je initiele zoekwoordenkaart te bouwen. Week een dekt dataverzameling: GSC-data ophalen, concurrentzoekwoorden exporteren, interne zoekqueries verzamelen en je seed-termen door Ahrefs of Semrush halen.\n\nWeek twee richt zich op analyse en mapping. Cluster je zoekwoorden per onderwerp, wijs elk cluster toe aan een paginatype, identificeer hiaten in je huidige sitestructuur en prioriteer de top 20-30 zoekwoorddoelen die de meeste omzet zullen genereren.\n\nAan het einde van deze sprint zou je een werkende zoekwoordenkaart moeten hebben die je topcategorieen en -producten dekt, een geprioriteerde lijst van contentgaps om te vullen en een kwartaalschema voor reviews om de kaart actueel te houden. Dit document wordt de basis voor elke SEO-beslissing die je in de toekomst neemt.",
        },
      ],
      navLabels: {
        previous: "Google Search Console voor webshops\n\nBekijk onze [zoekwoordonderzoek](/keyword-research)-diensten voor professionele ondersteuning.",
        next: "Koopintentie vs. zoekvolume",
      },
    },
  },
};
