import type { AcademyTopic } from "../../types";

export const competitorKeywordAnalysis: AcademyTopic = {
  slug: "competitor-keyword-analysis",
  cluster: 2,
  resources: [{"label":"Ahrefs Free SEO Tools","url":"https://ahrefs.com/free-seo-tools","type":"tool"},{"label":"Semrush (Free Tier)","url":"https://www.semrush.com/","type":"tool"},{"label":"SimilarWeb","url":"https://www.similarweb.com/","type":"tool"}],
  content: {
    en: {
      badge: "Keyword Research",
      heading: "Competitor Keyword Analysis",
      intro:
        "Your competitors have already done keyword research for you, they just don't know it. By analyzing which keywords drive traffic to competing stores, you can identify gaps in your own strategy and find proven opportunities that are already generating revenue in your market. This process builds on the fundamentals covered in [keyword research for ecommerce](/academy/keyword-research-for-ecommerce).",
      readTime: "8 min read",
      sections: [
        {
          title: "Identifying Your Real SEO Competitors",
          content:
            "Your SEO competitors are not necessarily your business competitors. A local shoe store might compete with Nike for customers, but in search results, their real competitors are other mid-size online retailers ranking for the same product keywords.\n\nTo find your actual SEO competitors, search for your top 10 category-level keywords and note which domains consistently appear on page one. These are the sites you're fighting for clicks. Some will be direct business competitors; others might be marketplaces, review sites, or niche retailers you hadn't considered.\n\nAhrefs and Semrush both have competitor discovery features that automate this process. Enter your domain and they'll show you which sites share the most keyword overlap with yours. The \"competing domains\" report typically reveals 5-10 sites you should be tracking regularly.\n\nFocus on competitors who are a step ahead of you, not the market leaders with massive domain authority. If you're a 2-year-old store with 500 products, analyzing Amazon or Walmart teaches you nothing actionable. Instead, analyze the store with 1,000 products and slightly better rankings, their strategy is within your reach.",
          items: [
            "Search your top 10 category keywords and note which domains appear repeatedly on page one",
            "Use Ahrefs/Semrush competing domains reports to find sites with the most keyword overlap",
            "Focus on competitors slightly ahead of you, not unattainable market leaders",
            "Track 5-7 SEO competitors separately from your business competitor list",
          ],
        },
        {
          title: "Running a Keyword Gap Analysis",
          content:
            "A keyword gap analysis compares your keyword profile against one or more competitors to find terms they rank for that you don't. This is one of the highest-ROI activities in ecommerce SEO because it reveals proven demand, if your competitor ranks and gets traffic for a keyword, the opportunity is validated.\n\nIn Ahrefs, go to Site Explorer, enter your domain, then navigate to Content Gap. Enter 2-3 competitor domains and the tool will show keywords those competitors rank for in the top 10 that your site doesn't rank for at all. Filter the results by search volume (above 50), by keyword difficulty (under 40 for quick wins), and by position (competitor is top 5).\n\nIn Semrush, the equivalent feature is Keyword Gap under Competitive Research. The interface lets you compare up to five domains simultaneously, with filters for keyword type, position ranges, and volume brackets.\n\nThe output is typically a list of hundreds or thousands of keywords. Don't try to tackle them all. Sort by search volume, apply your intent scoring (prioritize Tier 1-2 commercial keywords), and look for clusters of related terms. A cluster like \"organic cotton t-shirts,\" \"organic cotton shirts women,\" and \"best organic cotton clothing\" points to a category gap you can address with a single well-structured page. Our [keyword cannibalization checker](/tools/duplicate-content) can help you verify that these new pages won't conflict with existing content.",
          tip: "Run gap analysis against each competitor individually, not all at once. Different competitors will reveal different opportunity clusters. A fashion competitor might show you apparel keywords you're missing, while a home goods competitor reveals decor terms you hadn't considered.",
        },
        {
          title: "Finding Keywords Competitors Rank For That You Don't",
          content:
            "The gap analysis gives you the raw list, but turning it into action requires categorization. We sort competitor keywords into four buckets.\n\nBucket one: keywords you have pages for but don't rank. You already have a product or category page that should target this keyword but it doesn't appear in the top 100. These are optimization opportunities, update the existing page's title, H1, and content to better target the term.\n\nBucket two: keywords you don't have pages for but could create. Your competitor has a category page for \"wireless earbuds for running\" and you sell running earbuds but don't have a dedicated category page for them. Create the page.\n\nBucket three: keywords requiring new products or product lines. Your competitor ranks for products you don't carry. This is business intelligence, not just SEO data, it tells you what to stock or what new products to develop.\n\nBucket four: keywords not worth pursuing. Some competitor keywords don't align with your business model, target market, or product range. A competitor might rank for \"cheap\" modifiers while your brand positions as premium. Skip these.\n\nThe first two buckets are where you'll find 80% of your actionable opportunities. Bucket one is fastest to implement (optimize existing pages), while bucket two requires new page creation but typically yields results within 3-6 months.",
          image: {
            src: "/images/academy/competitor-keyword-buckets.svg",
            alt: "Four-bucket framework for categorizing competitor keywords from quick optimization wins to skip decisions",
            caption: "Buckets 1 and 2 contain 80% of actionable opportunities. Bucket 1 (optimize existing pages) delivers the fastest results.",
          },
          items: [
            "Bucket 1: have pages but don't rank, optimize existing content for these terms",
            "Bucket 2: no pages yet, create new category or product pages to capture these keywords",
            "Bucket 3: need new products, treat as business intelligence for inventory decisions",
            "Bucket 4: not relevant, skip keywords that don't match your positioning or catalog",
          ],
          callout: {
            title: "Gap Analysis ROI",
            text: "Run gap analysis against each competitor individually, not all at once. A fashion competitor reveals apparel keywords, a home goods competitor reveals decor terms. Quarterly repetition catches new entrants and shifting rankings.",
          },
        },
        {
          title: "Analyzing Competitor Content Strategies",
          content:
            "Beyond individual keywords, look at how competitors structure their content to capture search traffic. Pull their top 50 organic pages by traffic from Ahrefs or Semrush. What page types dominate? How long is their category page copy? Do they use buying guides, comparison pages, or educational content to capture mid-funnel terms?\n\nPay special attention to category page content. If a competitor's category page for \"men's running shoes\" includes 500 words of buying guidance plus detailed filter options, and your equivalent page has just a product grid, that content gap is likely costing you rankings.\n\nCheck their internal linking patterns. Do they link from blog posts to category pages? Do product pages cross-link to related products? Does their navigation expose subcategory pages that you keep hidden? These structural choices directly affect keyword rankings and are easy to replicate on your own site.\n\nLook at their content freshness signals. Are they updating category page copy seasonally? Are they adding new product comparison content monthly? A competitor who publishes a \"best wireless headphones\" guide updated quarterly signals that freshness matters for that keyword, and gives you a content calendar target.",
        },
        {
          title: "Quarterly Gap Analysis Workflow",
          content:
            "Competitor keyword analysis is not a one-time project. Markets shift, new competitors enter, and the keyword landscape changes every quarter. We run this workflow every 90 days for our ecommerce clients.\n\nWeek 1: update your competitor list. Check if any new domains have entered the top 10 for your primary keywords. Remove any that have dropped out. Pull fresh keyword gap data for each competitor.\n\nWeek 2: categorize new gap keywords into the four buckets. Prioritize bucket 1 (optimization) and bucket 2 (new page creation) opportunities. Estimate traffic potential for each using volume data and realistic CTR assumptions.\n\nWeek 3: create implementation tickets. For bucket 1 keywords, assign page optimization tasks with specific on-page changes. For bucket 2 keywords, scope new category or content page creation. Add timelines and owners to each ticket.\n\nWeek 4: review results from last quarter's gap analysis. Which pages were optimized? Did rankings improve? Which new pages were created? Are they indexing and gaining impressions? This retrospective ensures that gap analysis leads to action, not just analysis.\n\nThe quarterly cadence keeps you responsive to market changes without overwhelming your team with constant competitor monitoring. Between quarterly reviews, your keyword tracking tool handles the daily ranking fluctuations. For more on building a complete strategy from these insights, see our [ecommerce SEO strategy](/blog/ecommerce-seo-strategy) guide.",
          items: [
            "Update your competitor list quarterly, new players enter and old ones fade",
            "Categorize gap keywords into four buckets: optimize, create, stock, and skip",
            "Create specific implementation tickets with timelines and owners",
            "Review last quarter's implementation results to measure progress",
          ],
          tip: "Keep a running document of competitor insights, not just keywords, but content patterns, structural choices, and seasonal strategies. Over four quarters, this builds into a competitive intelligence asset that informs strategy decisions far beyond SEO.",
        },
      ],
      navLabels: {
        previous: "Long-Tail Keywords for Products",
        next: "Keyword Mapping for Stores",
      },
    },
    de: {
      badge: "Keyword-Recherche",
      heading: "Wettbewerber-Keyword-Analyse",
      intro:
        "Ihre Wettbewerber haben bereits Keyword-Recherche fuer Sie betrieben, sie wissen es nur nicht. Durch die Analyse, welche Keywords Traffic zu konkurrierenden Shops bringen, koennen Sie Luecken in Ihrer eigenen Strategie identifizieren und bewaehrte Chancen finden, die bereits Umsatz in Ihrem Markt generieren. Dieser Prozess baut auf den Grundlagen von [Keyword-Recherche f\u00fcr Ecommerce](/academy/keyword-research-for-ecommerce) auf.",
      readTime: "8 Min. Lesezeit",
      sections: [
        {
          title: "Ihre echten SEO-Wettbewerber identifizieren",
          content:
            "Ihre SEO-Wettbewerber sind nicht unbedingt Ihre geschaeftlichen Wettbewerber. Ein lokaler Schuhhaendler konkurriert vielleicht geschaeftlich mit Nike, aber in den Suchergebnissen sind seine echten Wettbewerber andere mittelgrosse Online-Haendler, die fuer dieselben Produkt-Keywords ranken.\n\nUm Ihre tatsaechlichen SEO-Wettbewerber zu finden, suchen Sie nach Ihren Top-10-Kategorie-Keywords und notieren Sie, welche Domains konsistent auf Seite eins erscheinen. Das sind die Seiten, um deren Klicks Sie kaempfen. Einige werden direkte Geschaeftswettbewerber sein; andere koennten Marktplaetze, Bewertungsseiten oder Nischen-Haendler sein, die Sie nicht beruecksichtigt hatten.\n\nAhrefs und Semrush haben beide Wettbewerber-Entdeckungsfunktionen, die diesen Prozess automatisieren. Geben Sie Ihre Domain ein und sie zeigen Ihnen, welche Seiten die meiste Keyword-Ueberschneidung mit Ihrer haben. Der Bericht \"Konkurrierende Domains\" enthuellt typischerweise 5-10 Seiten, die Sie regelmaessig verfolgen sollten.\n\nKonzentrieren Sie sich auf Wettbewerber, die einen Schritt voraus sind, nicht auf die Marktfuehrer mit massiver Domain-Autoritaet. Wenn Sie ein 2 Jahre alter Shop mit 500 Produkten sind, lehrt Sie die Analyse von Amazon oder Zalando nichts Umsetzbares. Analysieren Sie stattdessen den Shop mit 1.000 Produkten und etwas besseren Rankings, deren Strategie ist in Ihrer Reichweite.",
          items: [
            "Suchen Sie Ihre Top-10-Kategorie-Keywords und notieren Sie, welche Domains wiederholt auf Seite eins erscheinen",
            "Nutzen Sie Ahrefs/Semrush-Berichte zu konkurrierenden Domains, um Seiten mit der meisten Keyword-Ueberschneidung zu finden",
            "Konzentrieren Sie sich auf Wettbewerber, die etwas weiter sind als Sie, nicht auf unerreichbare Marktfuehrer",
            "Verfolgen Sie 5-7 SEO-Wettbewerber getrennt von Ihrer geschaeftlichen Wettbewerberliste",
          ],
        },
        {
          title: "Eine Keyword-Gap-Analyse durchfuehren",
          content:
            "Eine Keyword-Gap-Analyse vergleicht Ihr Keyword-Profil mit einem oder mehreren Wettbewerbern, um Begriffe zu finden, fuer die diese ranken und Sie nicht. Dies ist eine der Aktivitaeten mit dem hoechsten ROI im E-Commerce-SEO, weil es bewaehrte Nachfrage aufzeigt, wenn Ihr Wettbewerber fuer ein Keyword rankt und Traffic bekommt, ist die Chance validiert.\n\nIn Ahrefs gehen Sie zum Site Explorer, geben Ihre Domain ein und navigieren zu Content Gap. Geben Sie 2-3 Wettbewerber-Domains ein und das Tool zeigt Keywords, fuer die diese Wettbewerber in den Top 10 ranken, Ihre Seite aber ueberhaupt nicht. Filtern Sie die Ergebnisse nach Suchvolumen (ueber 50), Keyword-Schwierigkeit (unter 40 fuer schnelle Erfolge) und Position (Wettbewerber in Top 5).\n\nIn Semrush heisst die entsprechende Funktion Keyword Gap unter Competitive Research. Die Oberflaeche erlaubt den Vergleich von bis zu fuenf Domains gleichzeitig, mit Filtern fuer Keyword-Typ, Positionsbereiche und Volumenklassen.\n\nDas Ergebnis ist typischerweise eine Liste von Hunderten oder Tausenden von Keywords. Versuchen Sie nicht, alle zu bearbeiten. Sortieren Sie nach Suchvolumen, wenden Sie Ihre Absichtsbewertung an (priorisieren Sie kommerzielle Keywords der Stufen 1-2) und suchen Sie nach Clustern verwandter Begriffe. Ein Cluster wie \"Bio-Baumwoll-T-Shirts\", \"Bio-Baumwoll-Shirts Damen\" und \"beste Bio-Baumwollkleidung\" deutet auf eine Kategorie-Luecke hin, die Sie mit einer einzigen gut strukturierten Seite addressieren koennen. Unser [Keyword-Kannibalisierungs-Checker](/tools/duplicate-content) kann Ihnen dabei helfen.",
          tip: "Fuehren Sie die Gap-Analyse gegen jeden Wettbewerber einzeln durch, nicht alle gleichzeitig. Verschiedene Wettbewerber enthuellen verschiedene Chancen-Cluster. Ein Mode-Wettbewerber zeigt Ihnen vielleicht Bekleidungs-Keywords, die Sie verpassen, waehrend ein Wohnaccessoire-Wettbewerber Deko-Begriffe aufdeckt, an die Sie nicht gedacht hatten.",
        },
        {
          title: "Keywords finden, fuer die Wettbewerber ranken und Sie nicht",
          content:
            "Die Gap-Analyse gibt Ihnen die Rohliste, aber sie in Aktion umzusetzen erfordert Kategorisierung. Wir sortieren Wettbewerber-Keywords in vier Eimer.\n\nEimer eins: Keywords, fuer die Sie Seiten haben, aber nicht ranken. Sie haben bereits eine Produkt- oder Kategorieseite, die dieses Keyword targeten sollte, aber nicht in den Top 100 erscheint. Das sind Optimierungschancen, aktualisieren Sie Titel, H1 und Content der bestehenden Seite, um den Begriff besser abzudecken.\n\nEimer zwei: Keywords, fuer die Sie keine Seiten haben, aber erstellen koennten. Ihr Wettbewerber hat eine Kategorieseite fuer \"kabellose Ohrhoerer zum Laufen\" und Sie verkaufen Lauf-Ohrhoerer, haben aber keine dedizierte Kategorieseite dafuer. Erstellen Sie die Seite.\n\nEimer drei: Keywords, die neue Produkte oder Produktlinien erfordern. Ihr Wettbewerber rankt fuer Produkte, die Sie nicht fuehren. Das ist Business Intelligence, nicht nur SEO-Daten, es sagt Ihnen, was Sie auf Lager nehmen oder welche neuen Produkte Sie entwickeln sollten.\n\nEimer vier: Keywords, die es nicht wert sind, verfolgt zu werden. Einige Wettbewerber-Keywords passen nicht zu Ihrem Geschaeftsmodell, Ihrer Zielgruppe oder Ihrem Produktsortiment. Ein Wettbewerber rankt vielleicht fuer \"billig\"-Modifikatoren, waehrend Ihre Marke als Premium positioniert ist. Ueberspringen Sie diese.\n\nDie ersten beiden Eimer enthalten 80% Ihrer umsetzbaren Chancen. Eimer eins ist am schnellsten umzusetzen (bestehende Seiten optimieren), waehrend Eimer zwei neue Seitenerstellung erfordert, aber typischerweise innerhalb von 3-6 Monaten Ergebnisse liefert.",
          items: [
            "Eimer 1: haben Seiten, ranken aber nicht, bestehenden Content fuer diese Begriffe optimieren",
            "Eimer 2: noch keine Seiten, neue Kategorie- oder Produktseiten erstellen, um diese Keywords zu erfassen",
            "Eimer 3: brauchen neue Produkte, als Business Intelligence fuer Sortimentsentscheidungen behandeln",
            "Eimer 4: nicht relevant, Keywords ueberspringen, die nicht zu Ihrer Positionierung oder Ihrem Katalog passen",
          ],
          image: {
            src: "/images/academy/de/competitor-keyword-buckets.svg",
            alt: "Vier-Eimer-Framework zur Kategorisierung von Wettbewerber-Keywords",
            caption: "Eimer 1 und 2 enthalten 80\u00a0% der umsetzbaren Chancen. Eimer 1 (bestehende Seiten optimieren) liefert die schnellsten Ergebnisse.",
          },
          callout: {
            title: "Gap-Analyse ROI",
            text: "Führen Sie die Gap-Analyse gegen jeden Wettbewerber einzeln durch, nicht alle gleichzeitig. Vierteljährliche Wiederholung fängt neue Marktteilnehmer und Ranking-Verschiebungen ab.",
          },
        },
        {
          title: "Wettbewerber-Content-Strategien analysieren",
          content:
            "Schauen Sie ueber einzelne Keywords hinaus, wie Wettbewerber ihren Content strukturieren, um Suchtraffic zu erfassen. Ziehen Sie deren Top-50-organische Seiten nach Traffic aus Ahrefs oder Semrush. Welche Seitentypen dominieren? Wie lang ist ihr Kategorieseiten-Text? Verwenden sie Kaufratgeber, Vergleichsseiten oder edukativen Content, um Mid-Funnel-Begriffe zu erfassen?\n\nAchten Sie besonders auf Kategorieseiten-Content. Wenn die Kategorieseite eines Wettbewerbers fuer \"Herren Laufschuhe\" 500 Woerter Kaufberatung plus detaillierte Filteroptionen enthaelt, und Ihre entsprechende Seite nur ein Produktraster hat, kostet Sie diese Content-Luecke wahrscheinlich Rankings.\n\nPruefen Sie deren interne Verlinkungsmuster. Verlinken sie von Blogbeitraegen zu Kategorieseiten? Verlinken Produktseiten quer zu verwandten Produkten? Macht deren Navigation Unterkategorieseiten sichtbar, die Sie verborgen halten? Diese strukturellen Entscheidungen beeinflussen direkt die Keyword-Rankings und sind leicht auf Ihrer eigenen Seite nachzubilden.\n\nSchauen Sie sich deren Signale fuer Content-Aktualitaet an. Aktualisieren sie Kategorieseiten-Text saisonal? Fuegen sie monatlich neuen Produktvergleichs-Content hinzu? Ein Wettbewerber, der vierteljaehrlich einen aktualisierten \"Beste kabellose Kopfhoerer\"-Ratgeber veroeffentlicht, signalisiert, dass Aktualitaet fuer dieses Keyword zaehlt, und gibt Ihnen ein Content-Kalender-Ziel.",
        },
        {
          title: "Vierteljaehrlicher Gap-Analyse-Workflow",
          content:
            "Wettbewerber-Keyword-Analyse ist kein einmaliges Projekt. Maerkte verschieben sich, neue Wettbewerber treten ein, und die Keyword-Landschaft aendert sich jedes Quartal. Wir fuehren diesen Workflow alle 90 Tage fuer unsere E-Commerce-Kunden durch.\n\nWoche 1: Aktualisieren Sie Ihre Wettbewerberliste. Pruefen Sie, ob neue Domains in die Top 10 fuer Ihre primaeren Keywords eingestiegen sind. Entfernen Sie solche, die rausgefallen sind. Ziehen Sie frische Keyword-Gap-Daten fuer jeden Wettbewerber.\n\nWoche 2: Kategorisieren Sie neue Gap-Keywords in die vier Eimer. Priorisieren Sie Eimer 1 (Optimierung) und Eimer 2 (neue Seitenerstellung) Chancen. Schaetzen Sie das Trafficpotenzial fuer jedes mit Volumendaten und realistischen CTR-Annahmen.\n\nWoche 3: Erstellen Sie Umsetzungstickets. Fuer Eimer-1-Keywords weisen Sie Seitenoptimierungs-Aufgaben mit spezifischen On-Page-Aenderungen zu. Fuer Eimer-2-Keywords spezifizieren Sie die Erstellung neuer Kategorie- oder Content-Seiten. Fuegen Sie Zeitrahmen und Verantwortliche zu jedem Ticket hinzu.\n\nWoche 4: Ueberpruefen Sie die Ergebnisse der Gap-Analyse des letzten Quartals. Welche Seiten wurden optimiert? Haben sich die Rankings verbessert? Welche neuen Seiten wurden erstellt? Werden sie indexiert und gewinnen sie Impressionen? Diese Rueckschau stellt sicher, dass die Gap-Analyse zu Handlung fuehrt, nicht nur zu Analyse.\n\nDer vierteljaehrliche Rhythmus haelt Sie reaktionsfaehig auf Marktveraenderungen, ohne Ihr Team mit staendiger Wettbewerberueberwachung zu ueberlasten. Zwischen den Quartalsreviews erledigt Ihr Keyword-Tracking-Tool die taeglichen Ranking-Schwankungen. Weitere Informationen finden Sie in unserem Leitfaden zu [Ecommerce-SEO-Strategie](/blog/ecommerce-seo-strategy).",
          items: [
            "Aktualisieren Sie Ihre Wettbewerberliste vierteljaehrlich, neue Spieler treten ein und alte verblassen",
            "Kategorisieren Sie Gap-Keywords in vier Eimer: optimieren, erstellen, einkaufen und ueberspringen",
            "Erstellen Sie spezifische Umsetzungstickets mit Zeitrahmen und Verantwortlichen",
            "Ueberpruefen Sie die Umsetzungsergebnisse des letzten Quartals zur Fortschrittsmessung",
          ],
          tip: "Fuehren Sie ein fortlaufendes Dokument mit Wettbewerber-Erkenntnissen, nicht nur Keywords, sondern auch Content-Muster, strukturelle Entscheidungen und saisonale Strategien. Ueber vier Quartale baut sich daraus ein Competitive-Intelligence-Asset auf, das Strategieentscheidungen weit ueber SEO hinaus informiert.",
        },
      ],
      navLabels: {
        previous: "Long-Tail-Keywords fuer Produkte",
        next: "Keyword-Mapping fuer Shops",
      },
    },
    fr: {
      badge: "Recherche de mots-clés",
      heading: "Analyse des mots-clés concurrents",
      intro: "Vos concurrents ont déjà fait la recherche de mots-clés pour vous, ils ne le savent pas. En analysant quels mots-clés generent du trafic vers les boutiques concurrentes, vous pouvez identifier les lacunes de votre propre stratégie et trouver des opportunites eprouvees qui generent déjà des revenus dans votre marché. Ce processus s'appuie sur les fondamentaux couverts dans la [recherche de mots-clés pour l'e-commerce](/academy/keyword-research-for-ecommerce).",
      readTime: "8 min de lecture",
      sections: [
        {
          title: "Identifier vos vrais concurrents SEO",
          content:
            "Vos concurrents SEO ne sont pas necessairement vos concurrents commerciaux. Un magasin de chaussures local peut rivaliser avec Nike pour les clients, mais dans les resultats de recherche, ses vrais concurrents sont d'autres detaillants en ligne de taille moyenne positionnes sur les memes mots-cl\u00e9s produits.\n\nPour trouver vos concurrents SEO reels, cherchez vos 10 principaux mots-cl\u00e9s de cat\u00e9gorie et notez quels domaines apparaissent r\u00e9guli\u00e8rement en premi\u00e8re page. Ce sont les sites avec lesquels vous vous battez pour les clics. Certains seront des concurrents commerciaux directs ; d'autres pourraient etre des places de march\u00e9, des sites d'avis ou des detaillants de niche que vous n'aviez pas consideres.\n\nAhrefs et Semrush disposent tous deux de fonctionnalit\u00e9s de decouverte de concurrents qui automatisent ce processus. Entrez votre domaine et ils vous montreront quels sites partagent le plus de chevauchement de mots-cl\u00e9s avec le votre. Le rapport \"domaines concurrents\" revele typiquement 5 a 10 sites que vous devriez suivre r\u00e9guli\u00e8rement.\n\nConcentrez-vous sur les concurrents qui sont un cran devant vous, pas les leaders du march\u00e9 avec une autorite de domaine massive. Si vous etes une boutique de 2 ans avec 500 produits, analyser Amazon ou Cdiscount ne vous apprend rien d'actionnable. Analysez plutot la boutique avec 1 000 produits et des classements legerement meilleurs, leur strat\u00e9gie est a votre portee.",
          items: [
            "Cherchez vos 10 principaux mots-cl\u00e9s de cat\u00e9gorie et notez quels domaines apparaissent de fa\u00e7on repetee en premi\u00e8re page",
            "Utilisez les rapports de domaines concurrents Ahrefs/Semrush pour trouver les sites avec le plus de chevauchement de mots-cl\u00e9s",
            "Concentrez-vous sur les concurrents legerement en avance sur vous, pas les leaders inaccessibles du march\u00e9",
            "Suivez 5-7 concurrents SEO separement de votre liste de concurrents commerciaux",
          ],
        },
        {
          title: "Mener une analyse de gap de mots-clés",
          content:
            "Une analyse de gap de mots-cl\u00e9s compare votre profil de mots-cl\u00e9s a celui d'un ou plusieurs concurrents pour trouver les termes pour lesquels ils se positionnent et pas vous. C'est l'une des activites au plus fort ROI en SEO e-commerce car elle revele une demande prouvee, si votre concurrent se positionne et obtient du trafic pour un mot-cl\u00e9, l'opportunite est validee.\n\nDans Ahrefs, allez dans Site Explorer, entrez votre domaine, puis naviguez vers Content Gap. Entrez 2-3 domaines concurrents et l'outil montrera les mots-cl\u00e9s pour lesquels ces concurrents se positionnent dans le top 10 mais votre site pas du tout. Filtrez les resultats par volume de recherche (superieur a 50), par difficulte de mot-cl\u00e9 (inferieur a 40 pour des gains rapides) et par position (concurrent dans le top 5).\n\nDans Semrush, la fonctionnalit\u00e9 equivalente est Keyword Gap sous Competitive Research. L'interface permet de comparer jusqu'a cinq domaines simultanement, avec des filtres pour le type de mot-cl\u00e9, les plages de position et les tranches de volume.\n\nLe resultat est typiquement une liste de centaines ou milliers de mots-cl\u00e9s. N'essayez pas de tous les traiter. Triez par volume de recherche, appliquez votre notation d'intention (priorisez les mots-cl\u00e9s commerciaux de niveaux 1-2) et cherchez des clusters de termes lies. Un cluster comme \"t-shirts coton bio\", \"chemises coton bio femme\" et \"meilleurs vetements coton biologique\" pointe vers une lacune de cat\u00e9gorie que vous pouvez combler avec une seule page bien structuree. Notre [v\u00c3\u00a9rificateur de cannibalisation de mots-cl\u00c3\u00a9s](/tools/duplicate-content) peut vous aider \u00c3\u00a0 v\u00c3\u00a9rifier que ces nouvelles pages n'entreront pas en conflit avec le contenu existant.",
          tip: "Executez l'analyse de gap contre chaque concurrent individuellement, pas tous en meme temps. Diff\u00e9rents concurrents reveleront diff\u00e9rents clusters d'opportunites. Un concurrent mode peut vous montrer des mots-cl\u00e9s vestimentaires manquants, tandis qu'un concurrent deco revele des termes de decoration auxquels vous n'aviez pas pense.",
        },
        {
          title: "Trouver les mots-clés pour lesquels les concurrents se positionnent et pas vous",
          content:
            "L'analyse de gap vous donne la liste brute, mais la transformer en action n\u00e9cessite une cat\u00e9gorisation. Nous trions les mots-cl\u00e9s concurrents en quatre cat\u00e9gories.\n\nCat\u00e9gorie un : mots-cl\u00e9s pour lesquels vous avez des pages mais ne vous positionnez pas. Vous avez d\u00e9j\u00e0 une page produit ou cat\u00e9gorie qui devrait cibler ce mot-cl\u00e9 mais elle n'apparait pas dans le top 100. Ce sont des opportunites d'optimisation, mettez a jour le titre, le H1 et le contenu de la page existante pour mieux cibler le terme.\n\nCat\u00e9gorie deux : mots-cl\u00e9s pour lesquels vous n'avez pas de pages mais pourriez en cr\u00e9er. Votre concurrent a une page cat\u00e9gorie pour \"ecouteurs sans fil pour le sport\" et vous vendez des ecouteurs de sport mais n'avez pas de page cat\u00e9gorie dediee. Creez la page.\n\nCat\u00e9gorie trois : mots-cl\u00e9s necessitant de nouveaux produits ou lignes de produits. Votre concurrent se positionne pour des produits que vous ne proposez pas. C'est de l'intelligence commerciale, pas seulement des donn\u00e9es SEO, cela vous dit quoi approvisionner ou quels nouveaux produits developper.\n\nCat\u00e9gorie quatre : mots-cl\u00e9s ne valant pas la peine d'etre poursuivis. Certains mots-cl\u00e9s concurrents ne correspondent pas a votre mod\u00e8le commercial, march\u00e9 cible ou gamme de produits. Un concurrent peut se positionner sur des modificateurs \"pas cher\" alors que votre marque se positionne comme premium. Passez.\n\nLes deux premi\u00e8res cat\u00e9gories contiennent 80% de vos opportunites actionnables. La cat\u00e9gorie un est la plus rapide a mettre en oeuvre (optimiser des pages existantes), tandis que la cat\u00e9gorie deux n\u00e9cessite la cr\u00e9ation de nouvelles pages mais donne generalement des resultats dans les 3-6 mois.",
          items: [
            "Cat\u00e9gorie 1 : avez des pages mais ne vous positionnez pas, optimiser le contenu existant pour ces termes",
            "Cat\u00e9gorie 2 : pas encore de pages, cr\u00e9er de nouvelles pages cat\u00e9gorie ou produit pour capturer ces mots-cl\u00e9s",
            "Cat\u00e9gorie 3 : besoin de nouveaux produits, traiter comme intelligence commerciale pour les d\u00e9cisions d'inventaire",
            "Cat\u00e9gorie 4 : pas pertinent, ignorer les mots-cl\u00e9s qui ne correspondent pas a votre positionnement ou catalogue",
          ],
          image: {
            src: "/images/academy/fr/competitor-keyword-buckets.svg",
            alt: "Vier-Eimer-Framework zur Kategorisierung von Wettbewerber-Keywords",
            caption: "Les buckets 1 et 2 contiennent 80 % des opportunités exploitables. Le bucket 1 (optimiser les pages existantes) fournit les résultats les plus rapides.",
          },
          callout: {
            title: "Gap-Analyse ROI",
            text: "Effectuez une analyse des écarts par rapport à chaque concurrent individuellement, pas tous en même temps. Un concurrent de mode révèle des mots-clés pour les vêtements, un concurrent d'articles pour la maison révèle des termes de décoration. Le redoublement trimestriel attire de nouveaux entrants",
          },
        },
        {
          title: "Analyser les stratégies de contenu des concurrents",
          content:
            "Au-dela des mots-cl\u00e9s individuels, observez comment les concurrents structurent leur contenu pour capter le trafic de recherche. Tirez leurs 50 meilleures pages organiques par trafic depuis Ahrefs ou Semrush. Quels types de pages dominent ? Quelle est la longueur de leur texte de page cat\u00e9gorie ? Utilisent-ils des guides d'achat, des pages comparatives ou du contenu educatif pour capter les termes mid-funnel ?\n\nPortez une attention particuliere au contenu des pages cat\u00e9gories. Si la page cat\u00e9gorie d'un concurrent pour \"chaussures de course homme\" inclut 500 mots de guide d'achat plus des options de filtrage detaillees, et que votre page equivalente n'a qu'une grille de produits, cette lacune de contenu vous coute probablement des positions.\n\nV\u00e9rifiez leurs mod\u00e8les de maillage interne. Lient-ils des articles de blog aux pages cat\u00e9gories ? Les pages produits font-elles des liens croises vers des produits associes ? Leur navigation expose-t-elle des pages de sous-categories que vous gardez cachees ? Ces choix structurels affectent directement les classements de mots-cl\u00e9s et sont faciles a reproduire sur votre propre site.\n\nObservez leurs signaux de fraicheur de contenu. Mettent-ils a jour le texte des pages cat\u00e9gories de fa\u00e7on saisonni\u00e8re ? Ajoutent-ils du contenu de comparaison de produits mensuellement ? Un concurrent qui publie un guide \"meilleurs casques sans fil\" mis a jour chaque trimestre signale que la fraicheur compte pour ce mot-cl\u00e9, et vous donne un objectif de calendrier de contenu.",
        },
        {
          title: "Workflow trimestriel d'analyse de gap",
          content:
            "L'analyse des mots-cl\u00e9s concurrents n'est pas un projet ponctuel. Les march\u00e9s evoluent, de nouveaux concurrents apparaissent, et le paysage des mots-cl\u00e9s change chaque trimestre. Nous executons ce workflow tous les 90 jours pour nos clients e-commerce.\n\nSemaine 1 : mettez a jour votre liste de concurrents. V\u00e9rifiez si de nouveaux domaines sont entres dans le top 10 pour vos mots-cl\u00e9s principaux. Retirez ceux qui en sont sortis. Tirez des donn\u00e9es de gap de mots-cl\u00e9s fraiches pour chaque concurrent.\n\nSemaine 2 : categorisez les nouveaux mots-cl\u00e9s de gap dans les quatre cat\u00e9gories. Priorisez les opportunites de cat\u00e9gorie 1 (optimisation) et cat\u00e9gorie 2 (cr\u00e9ation de nouvelles pages). Estimez le potentiel de trafic pour chacun en utilisant les donn\u00e9es de volume et des hypotheses de CTR realistes.\n\nSemaine 3 : creez des tickets d'impl\u00e9mentation. Pour les mots-cl\u00e9s de cat\u00e9gorie 1, assignez des taches d'optimisation de page avec des changements on-page sp\u00e9cifiques. Pour les mots-cl\u00e9s de cat\u00e9gorie 2, cadrez la cr\u00e9ation de nouvelles pages cat\u00e9gorie ou contenu. Ajoutez des delais et des responsables a chaque ticket.\n\nSemaine 4 : examinez les resultats de l'analyse de gap du dernier trimestre. Quelles pages ont ete optimisees ? Les classements se sont-ils ameliores ? Quelles nouvelles pages ont ete creees ? Sont-elles indexees et gagnent-elles des impressions ? Cette retrospective garantit que l'analyse de gap mene a l'action, pas seulement a l'analyse.\n\nLa cadence trimestrielle vous garde reactif aux changements du march\u00e9 sans surcharger votre equipe avec une surveillance constante des concurrents. Entre les revues trimestrielles, votre outil de suivi de mots-cl\u00e9s gere les fluctuations de classement quotidiennes. Pour en savoir plus sur la construction d'une strat\u00c3\u00a9gie compl\u00c3\u00a8te \u00c3\u00a0 partir de ces insights, consultez notre guide sur la [strat\u00c3\u00a9gie SEO e-commerce](/blog/ecommerce-seo-strategy).",
          items: [
            "Mettez a jour votre liste de concurrents chaque trimestre, de nouveaux acteurs entrent et les anciens s'estompent",
            "Categorisez les mots-cl\u00e9s de gap en quatre cat\u00e9gories : optimiser, cr\u00e9er, approvisionner et ignorer",
            "Creez des tickets d'impl\u00e9mentation sp\u00e9cifiques avec des delais et des responsables",
            "Examinez les resultats d'impl\u00e9mentation du dernier trimestre pour mesurer les progres",
          ],
          tip: "Tenez un document evoluant avec les insights concurrentiels, pas seulement les mots-cl\u00e9s, mais aussi les mod\u00e8les de contenu, les choix structurels et les strat\u00e9gies saisonni\u00e8res. Sur quatre trimestres, cela se construit en un actif d'intelligence concurrentielle qui informe les d\u00e9cisions strategiques bien au-dela du SEO.",
        },
      ],
      navLabels: {
        previous: "Mots-cl\u00e9s longue traine pour les produits",
        next: "Mapping de mots-cl\u00e9s pour les boutiques",
      },
    },
    es: {
      badge: "Investigaci\u00f3n de palabras clave",
      heading: "Análisis de palabras clave de competidores",
      intro: "Tus competidores ya han hecho la [investigaci\u00f3n de palabras clave](/academy/keyword-research-for-ecommerce) por ti, simplemente no lo saben. Al analizar que palabras clave generan tr\u00c3\u00a1fico a las tiendas competidoras, puedes identificar brechas en tu propia estrategia y encontrar oportunidades probadas que ya generan ingresos en tu mercado.",
      readTime: "8 min de lectura",
      sections: [
        {
          title: "Identificar a tus verdaderos competidores SEO",
          content:
            "Tus competidores SEO no son necesariamente tus competidores comerciales. Una zapateria local puede competir con Nike por clientes, pero en los resultados de busqueda, sus verdaderos competidores son otros minoristas online de tamano medio posicionados para las mismas palabras clave de producto.\n\nPara encontrar tus competidores SEO reales, busca tus 10 principales palabras clave de categor\u00eda y anota que dominios aparecen consistentemente en la primera p\u00e1gina. Esos son los sitios contra los que luchas por clics. Algunos seran competidores comerciales directos; otros podrian ser marketplaces, sitios de resenas o minoristas nicho que no habias considerado.\n\nAhrefs y Semrush tienen funciones de descubrimiento de competidores que automatizan este proceso. Introduce tu dominio y te mostraran que sitios comparten la mayor superposicion de palabras clave contigo. El informe de \"dominios competidores\" tipicamente revela 5-10 sitios que deberias rastrear regularmente.\n\nEnfocate en competidores que estan un paso por delante de ti, no en los lideres del mercado con autoridad de dominio masiva. Si eres una tienda de 2 a\u00c3\u00b1os con 500 productos, analizar Amazon o El Corte Ingles no te ensena nada accionable. En su lugar, analiza la tienda con 1.000 productos y rankings ligeramente mejores, su estrategia esta a tu alcance.",
          items: [
            "Busca tus 10 principales palabras clave de categor\u00eda y anota que dominios aparecen repetidamente en la primera p\u00e1gina",
            "Usa los informes de dominios competidores de Ahrefs/Semrush para encontrar sitios con mayor superposicion de palabras clave",
            "Enfocate en competidores ligeramente por delante de ti, no en lideres de mercado inalcanzables",
            "Rastrea 5-7 competidores SEO separadamente de tu lista de competidores comerciales",
          ],
        },
        {
          title: "Ejecutar un análisis de brecha de palabras clave",
          content:
            "Un an\u00e1lisis de brecha de palabras clave compara tu perfil de palabras clave contra uno o m\u00e1s competidores para encontrar terminos para los que ellos posicionan y tu no. Esta es una de las actividades con mayor ROI en SEO para ecommerce porque revela demanda probada, si tu competidor posiciona y obtiene tr\u00e1fico para una palabra clave, la oportunidad esta validada.\n\nEn Ahrefs, ve al Site Explorer, introduce tu dominio, luego navega a Content Gap. Introduce 2-3 dominios competidores y la herramienta mostrara palabras clave para las que esos competidores posicionan en el top 10 pero tu sitio no posiciona en absoluto. Filtra los resultados por volumen de busqueda (superior a 50), por dificultad de palabra clave (inferior a 40 para victorias rapidas) y por posicion (competidor en top 5).\n\nEn Semrush, la funcion equivalente es Keyword Gap bajo Competitive Research. La interfaz permite comparar hasta cinco dominios simultaneamente, con filtros para tipo de palabra clave, rangos de posicion y tramos de volumen.\n\nEl resultado es tipicamente una lista de cientos o miles de palabras clave. No intentes abordarlas todas. Ordena por volumen de busqueda, aplica tu puntuacion de intenci\u00f3n (prioriza palabras clave comerciales de niveles 1-2) y busca clusters de terminos relacionados. Un cluster como \"camisetas algodon organico\", \"camisas algodon organico mujer\" y \"mejor ropa algodon organico\" apunta a una brecha de categor\u00eda que puedes abordar con una sola p\u00e1gina bien estructurada. Nuestro [verificador de canibalizaci\u00f3n de palabras clave](/tools/duplicate-content) puede ayudarte a verificar que estas nuevas p\u00e1ginas no entren en conflicto con el contenido existente.",
          tip: "Ejecuta el an\u00e1lisis de brecha contra cada competidor individualmente, no todos a la vez. Diferentes competidores revelaran diferentes clusters de oportunidades. Un competidor de moda puede mostrarte palabras clave de ropa que estas perdiendo, mientras un competidor de hogar revela terminos de decoracion que no habias considerado.",
        },
        {
          title: "Encontrar palabras clave para las que los competidores posicionan y tu no",
          content:
            "El an\u00e1lisis de brecha te da la lista cruda, pero convertirla en acci\u00f3n requiere categorizacion. Clasificamos las palabras clave de competidores en cuatro cubetas.\n\nCubeta uno: palabras clave para las que tienes p\u00e1ginas pero no posicionas. Ya tienes una p\u00e1gina de producto o categor\u00eda que deberia apuntar a esta palabra clave pero no aparece en el top 100. Son oportunidades de optimizaci\u00f3n, actualiza el t\u00edtulo, H1 y contenido de la p\u00e1gina existente para apuntar mejor al termino.\n\nCubeta dos: palabras clave para las que no tienes p\u00e1ginas pero podrias crear. Tu competidor tiene una p\u00e1gina de categor\u00eda para \"auriculares inalambricos para correr\" y tu vendes auriculares deportivos pero no tienes una p\u00e1gina de categor\u00eda dedicada. Crea la p\u00e1gina.\n\nCubeta tres: palabras clave que requieren nuevos productos o l\u00edneas de producto. Tu competidor posiciona para productos que no tienes en tu cat\u00e1logo. Esto es inteligencia de negocio, no solo datos SEO, te dice que productos incorporar o desarrollar.\n\nCubeta cuatro: palabras clave que no vale la pena perseguir. Algunas palabras clave de competidores no se alinean con tu modelo de negocio, mercado objetivo o gama de productos. Un competidor puede posicionar para modificadores \"barato\" mientras tu marca se posiciona como premium. Omitelas.\n\nLas dos primeras cubetas contienen el 80% de tus oportunidades accionables. La cubeta uno es la m\u00e1s r\u00e1pida de implementar (optimizar p\u00e1ginas existentes), mientras la cubeta dos requiere creaci\u00f3n de nuevas p\u00e1ginas pero tipicamente produce resultados en 3-6 meses.",
          items: [
            "Cubeta 1: tienes p\u00e1ginas pero no posicionas, optimiza el contenido existente para estos terminos",
            "Cubeta 2: aun sin p\u00e1ginas, crea nuevas p\u00e1ginas de categor\u00eda o producto para capturar estas palabras clave",
            "Cubeta 3: necesitas nuevos productos, trata como inteligencia de negocio para decisiones de inventario",
            "Cubeta 4: no relevante, omite palabras clave que no coinciden con tu posicionamiento o cat\u00e1logo",
          ],
          image: {
            src: "/images/academy/es/competitor-keyword-buckets.svg",
            alt: "Vier-Eimer-Framework zur Kategorisierung von Wettbewerber-Keywords",
            caption: "Los grupos 1 y 2 contienen el 80% de las oportunidades aprovechables. El segmento 1 (optimizar las páginas existentes) ofrece los resultados más rápidos.",
          },
          callout: {
            title: "Gap-Analyse ROI",
            text: "Realice análisis de brechas con cada competidor individualmente, no todos a la vez. Un competidor de moda revela palabras clave sobre indumentaria, un competidor de artículos para el hogar revela términos de decoración. La repetición trimestral atrapa nuevos participantes",
          },
        },
        {
          title: "Analizar las estrategias de contenido de competidores",
          content:
            "M\u00e1s alla de las palabras clave individuales, observa como los competidores estructuran su contenido para capturar tr\u00e1fico de busqueda. Extrae sus 50 mejores p\u00e1ginas organicas por tr\u00e1fico desde Ahrefs o Semrush. Que tipos de p\u00e1gina dominan? Que tan largo es el texto de su p\u00e1gina de categor\u00eda? Usan guias de compra, p\u00e1ginas comparativas o contenido educativo para capturar terminos mid-funnel?\n\nPresta especial atenci\u00f3n al contenido de las p\u00e1ginas de categor\u00eda. Si la p\u00e1gina de categor\u00eda de un competidor para \"zapatillas de correr hombre\" incluye 500 palabras de guia de compra m\u00e1s opciones de filtro detalladas, y tu p\u00e1gina equivalente solo tiene una cuadricula de productos, esa brecha de contenido probablemente te esta costando posiciones.\n\nRevisa sus patrones de enlazado interno. Enlazan desde art\u00edculos de blog a p\u00e1ginas de categor\u00eda? Las p\u00e1ginas de producto enlazan cruzadamente a productos relacionados? Su navegaci\u00f3n expone p\u00e1ginas de subcategorias que tu mantienes ocultas? Estas decisiones estructurales afectan directamente los rankings de palabras clave y son faciles de replicar en tu propio sitio.\n\nObserva sus senales de frescura de contenido. Actualizan el texto de p\u00e1ginas de categor\u00eda estacionalmente? Anaden contenido comparativo de productos mensualmente? Un competidor que p\u00fablica una guia \"mejores auriculares inalambricos\" actualizada trimestralmente senala que la frescura importa para esa palabra clave, y te da un objetivo de calendario de contenido.",
        },
        {
          title: "Flujo de trabajo trimestral de análisis de brecha",
          content:
            "El an\u00e1lisis de palabras clave de competidores no es un proyecto de una sola vez. Los mercados cambian, nuevos competidores entran, y el panorama de palabras clave cambia cada trimestre. Ejecutamos este flujo de trabajo cada 90 dias para nuestros clientes ecommerce.\n\nSemana 1: actualiza tu lista de competidores. Verifica si nuevos dominios han entrado al top 10 para tus palabras clave principales. Elimina los que hayan salido. Extrae datos frescos de brecha de palabras clave para cada competidor.\n\nSemana 2: categoriza las nuevas palabras clave de brecha en las cuatro cubetas. Prioriza las oportunidades de cubeta 1 (optimizaci\u00f3n) y cubeta 2 (creaci\u00f3n de nuevas p\u00e1ginas). Estima el potencial de tr\u00e1fico para cada una usando datos de volumen y supuestos de CTR realistas.\n\nSemana 3: crea tickets de implementaci\u00f3n. Para palabras clave de cubeta 1, asigna tareas de optimizaci\u00f3n de p\u00e1gina con cambios on-page especificos. Para palabras clave de cubeta 2, define la creaci\u00f3n de nuevas p\u00e1ginas de categor\u00eda o contenido. Anade plazos y responsables a cada ticket.\n\nSemana 4: revisa los resultados del an\u00e1lisis de brecha del trimestre anterior. Que p\u00e1ginas se optimizaron? Mejoraron los rankings? Que nuevas p\u00e1ginas se crearon? Se estan indexando y ganando impresiones? Esta retrospectiva asegura que el an\u00e1lisis de brecha lleve a la acci\u00f3n, no solo al an\u00e1lisis.\n\nLa cadencia trimestral te mantiene reactivo a los cambios del mercado sin abrumar a tu equipo con monitoreo constante de competidores. Entre revisiones trimestrales, tu herramienta de seguimiento de palabras clave maneja las fluctuaciones diarias de ranking. Para m\u00e1s informaci\u00f3n sobre como construir una estrategia completa a partir de estos insights, consulta nuestra guia de [estrategia SEO para ecommerce](/blog/ecommerce-seo-strategy).",
          items: [
            "Actualiza tu lista de competidores trimestralmente, nuevos jugadores entran y antiguos se desvanecen",
            "Categoriza las palabras clave de brecha en cuatro cubetas: optimizar, crear, incorporar al inventario y omitir",
            "Crea tickets de implementaci\u00f3n especificos con plazos y responsables",
            "Revisa los resultados de implementaci\u00f3n del trimestre anterior para medir el progreso",
          ],
          tip: "Mantien un documento continuo de insights competitivos, no solo palabras clave, sino tambi\u00e9n patrones de contenido, decisiones estructurales y estrategias estacionales. En cuatro trimestres, esto se construye en un activo de inteligencia competitiva que informa decisiones estrategicas mucho m\u00e1s alla del SEO.",
        },
      ],
      navLabels: {
        previous: "Palabras clave de cola larga para productos",
        next: "Mapeo de palabras clave para tiendas",
      },
    },
    it: {
      badge: "Ricerca parole chiave",
      heading: "Analisi parole chiave dei concorrenti",
      intro:
        "I vostri concorrenti hanno gia fatto la [ricerca di parole chiave](/academy/keyword-research-for-ecommerce) per voi, semplicemente non lo sanno. Analizzando quali parole chiave generano traffico verso i negozi concorrenti, potete identificare lacune nella vostra strategia e trovare opportunita comprovate che stanno gia generando ricavi nel vostro mercato.",
      readTime: "8 min di lettura",
      sections: [
        {
          title: "Identificare i veri concorrenti SEO",
          content:
            "I vostri concorrenti SEO non sono necessariamente i vostri concorrenti commerciali. Un negozio di scarpe locale potrebbe competere con Nike per i clienti, ma nei risultati di ricerca, i suoi veri concorrenti sono altri rivenditori online di media dimensione posizionati per le stesse parole chiave di prodotto.\n\nPer trovare i vostri concorrenti SEO reali, cercate le vostre 10 principali parole chiave di categoria e annotate quali domini appaiono costantemente in prima pagina. Questi sono i siti con cui vi contendete i clic. Alcuni saranno concorrenti commerciali diretti; altri potrebbero essere marketplace, siti di recensioni o rivenditori di nicchia che non avevate considerato.\n\nAhrefs e Semrush hanno entrambi funzionalita di scoperta dei concorrenti che automatizzano questo processo. Inserite il vostro dominio e vi mostreranno quali siti condividono la maggiore sovrapposizione di parole chiave con il vostro. Il report \"domini concorrenti\" rivela tipicamente 5-10 siti che dovreste monitorare regolarmente.\n\nConcentratevi sui concorrenti che sono un passo avanti a voi, non sui leader di mercato con autorita di dominio massiccia. Se siete un negozio di 2 anni con 500 prodotti, analizzare Amazon o ePrice non vi insegna nulla di actionable. Analizzate piuttosto il negozio con 1.000 prodotti e ranking leggermente migliori, la loro strategia e alla vostra portata.",
          items: [
            "Cercate le vostre 10 principali parole chiave di categoria e annotate quali domini appaiono ripetutamente in prima pagina",
            "Usate i report di domini concorrenti Ahrefs/Semrush per trovare siti con la maggiore sovrapposizione di parole chiave",
            "Concentratevi sui concorrenti leggermente in vantaggio su di voi, non sui leader di mercato irraggiungibili",
            "Monitorate 5-7 concorrenti SEO separatamente dalla vostra lista di concorrenti commerciali",
          ],
        },
        {
          title: "Eseguire un'analisi di gap delle parole chiave",
          content:
            "Un'analisi di gap delle parole chiave confronta il vostro profilo di parole chiave con uno o piu concorrenti per trovare termini per cui loro si posizionano e voi no. Questa e una delle attivita con il ROI piu alto nel SEO e-commerce perche rivela domanda comprovata, se il vostro concorrente si posiziona e ottiene traffico per una parola chiave, l'opportunita e validata.\n\nIn Ahrefs, andate su Site Explorer, inserite il vostro dominio, poi navigate su Content Gap. Inserite 2-3 domini concorrenti e lo strumento mostrera le parole chiave per cui quei concorrenti si posizionano nel top 10 ma il vostro sito non si posiziona affatto. Filtrate i risultati per volume di ricerca (superiore a 50), per difficolta di parola chiave (inferiore a 40 per vittorie rapide) e per posizione (concorrente nel top 5).\n\nIn Semrush, la funzionalita equivalente e Keyword Gap sotto Competitive Research. L'interfaccia permette di confrontare fino a cinque domini simultaneamente, con filtri per tipo di parola chiave, range di posizione e fasce di volume.\n\nL'output e tipicamente una lista di centinaia o migliaia di parole chiave. Non cercate di affrontarle tutte. Ordinate per volume di ricerca, applicate la vostra valutazione dell'intenzione (date priorita alle parole chiave commerciali di livello 1-2) e cercate cluster di termini correlati. Un cluster come \"t-shirt cotone biologico\", \"camicie cotone bio donna\" e \"migliori capi cotone organico\" indica un gap di categoria che potete colmare con una singola pagina ben strutturata. Approfondisci con la nostra guida sulla [strumento di controllo della cannibalizzazione keyword](/tools/duplicate-content).",
          tip: "Eseguite l'analisi di gap contro ogni concorrente individualmente, non tutti insieme. Diversi concorrenti riveleranno diversi cluster di opportunita. Un concorrente di moda potrebbe mostrarvi parole chiave di abbigliamento che vi mancano, mentre un concorrente di arredamento rivela termini di design che non avevate considerato.",
        },
        {
          title: "Trovare parole chiave per cui i concorrenti si posizionano e voi no",
          content:
            "L'analisi di gap vi da la lista grezza, ma trasformarla in azione richiede categorizzazione. Classifichiamo le parole chiave dei concorrenti in quattro categorie.\n\nCategoria uno: parole chiave per cui avete pagine ma non vi posizionate. Avete gia una pagina prodotto o categoria che dovrebbe puntare questa parola chiave ma non appare nel top 100. Queste sono opportunita di ottimizzazione, aggiornate titolo, H1 e contenuto della pagina esistente per puntare meglio il termine.\n\nCategoria due: parole chiave per cui non avete pagine ma potreste crearle. Il vostro concorrente ha una pagina categoria per \"auricolari wireless per correre\" e voi vendete auricolari sportivi ma non avete una pagina categoria dedicata. Create la pagina.\n\nCategoria tre: parole chiave che richiedono nuovi prodotti o linee di prodotto. Il vostro concorrente si posiziona per prodotti che non trattate. Questa e business intelligence, non solo dati SEO, vi dice cosa rifornire o quali nuovi prodotti sviluppare.\n\nCategoria quattro: parole chiave che non vale la pena perseguire. Alcune parole chiave dei concorrenti non si allineano con il vostro modello di business, mercato target o gamma prodotti. Un concorrente potrebbe posizionarsi per modificatori \"economico\" mentre il vostro brand si posiziona come premium. Saltatele.\n\nLe prime due categorie contengono l'80% delle vostre opportunita actionable. La categoria uno e la piu veloce da implementare (ottimizzare pagine esistenti), mentre la categoria due richiede creazione di nuove pagine ma tipicamente produce risultati entro 3-6 mesi.",
          items: [
            "Categoria 1: avete pagine ma non vi posizionate, ottimizzate il contenuto esistente per questi termini",
            "Categoria 2: non avete ancora pagine, create nuove pagine categoria o prodotto per catturare queste parole chiave",
            "Categoria 3: servono nuovi prodotti, trattate come business intelligence per decisioni di inventario",
            "Categoria 4: non rilevante, saltate parole chiave che non corrispondono al vostro posizionamento o catalogo",
          ],
          image: {
            src: "/images/academy/it/competitor-keyword-buckets.svg",
            alt: "Vier-Eimer-Framework zur Kategorisierung von Wettbewerber-Keywords",
            caption: "I bucket 1 e 2 contengono l'80% delle opportunità realizzabili. Il bucket 1 (ottimizza le pagine esistenti) fornisce i risultati più rapidi.",
          },
          callout: {
            title: "Gap-Analyse ROI",
            text: "Esegui l'analisi del gap rispetto a ciascun concorrente individualmente, non tutto in una volta. Un concorrente della moda rivela parole chiave relative all'abbigliamento, un concorrente dei prodotti per la casa rivela termini relativi all'arredamento. La ripetizione trimestrale cattura nuovi partecipanti",
          },
        },
        {
          title: "Analizzare le strategie di contenuto dei concorrenti",
          content:
            "Oltre alle singole parole chiave, osservate come i concorrenti strutturano i loro contenuti per catturare traffico di ricerca. Estraete le loro 50 migliori pagine organiche per traffico da Ahrefs o Semrush. Quali tipi di pagina dominano? Quanto e lungo il testo delle loro pagine categoria? Usano guide all'acquisto, pagine comparative o contenuto educativo per catturare termini mid-funnel?\n\nPrestate particolare attenzione al contenuto delle pagine categoria. Se la pagina categoria di un concorrente per \"scarpe da corsa uomo\" include 500 parole di guida all'acquisto piu opzioni di filtro dettagliate, e la vostra pagina equivalente ha solo una griglia prodotti, quel gap di contenuto vi sta probabilmente costando posizionamenti.\n\nControllate i loro pattern di link interni. Linkano dagli articoli del blog alle pagine categoria? Le pagine prodotto hanno link incrociati a prodotti correlati? La loro navigazione espone pagine di sottocategoria che voi tenete nascoste? Queste scelte strutturali influenzano direttamente i ranking delle parole chiave e sono facili da replicare sul vostro sito.\n\nOsservate i loro segnali di freschezza del contenuto. Aggiornano il testo delle pagine categoria stagionalmente? Aggiungono contenuto comparativo sui prodotti mensilmente? Un concorrente che pubblica una guida \"migliori cuffie wireless\" aggiornata trimestralmente segnala che la freschezza conta per quella parola chiave, e vi da un obiettivo di calendario editoriale.",
        },
        {
          title: "Workflow trimestrale di analisi di gap",
          content:
            "L'analisi delle parole chiave dei concorrenti non e un progetto una tantum. I mercati si spostano, nuovi concorrenti entrano, e il panorama delle parole chiave cambia ogni trimestre. Eseguiamo questo workflow ogni 90 giorni per i nostri clienti e-commerce.\n\nSettimana 1: aggiornate la vostra lista di concorrenti. Verificate se nuovi domini sono entrati nel top 10 per le vostre parole chiave principali. Rimuovete quelli che sono usciti. Estraete dati freschi di gap di parole chiave per ogni concorrente.\n\nSettimana 2: categorizzate le nuove parole chiave di gap nelle quattro categorie. Date priorita alle opportunita della categoria 1 (ottimizzazione) e della categoria 2 (creazione nuove pagine). Stimate il potenziale di traffico per ciascuna usando dati di volume e ipotesi realistiche di CTR.\n\nSettimana 3: create ticket di implementazione. Per le parole chiave della categoria 1, assegnate compiti di ottimizzazione pagina con modifiche on-page specifiche. Per le parole chiave della categoria 2, definite la creazione di nuove pagine categoria o contenuto. Aggiungete tempistiche e responsabili a ogni ticket.\n\nSettimana 4: esaminate i risultati dell'analisi di gap del trimestre precedente. Quali pagine sono state ottimizzate? I ranking sono migliorati? Quali nuove pagine sono state create? Si stanno indicizzando e guadagnando impressioni? Questa retrospettiva assicura che l'analisi di gap porti all'azione, non solo all'analisi.\n\nLa cadenza trimestrale vi mantiene reattivi ai cambiamenti del mercato senza sovraccaricare il team con monitoraggio costante dei concorrenti. Tra le revisioni trimestrali, il vostro strumento di tracking delle parole chiave gestisce le fluttuazioni giornaliere dei ranking. Per approfondire, consulta la nostra guida sulla [strategia SEO per ecommerce](/blog/ecommerce-seo-strategy).",
          items: [
            "Aggiornate la lista dei concorrenti trimestralmente, nuovi player entrano e vecchi sfumano",
            "Categorizzate le parole chiave di gap in quattro categorie: ottimizzare, creare, rifornire e saltare",
            "Create ticket di implementazione specifici con tempistiche e responsabili",
            "Esaminate i risultati di implementazione del trimestre precedente per misurare i progressi",
          ],
          tip: "Tenete un documento continuo di insight competitivi, non solo parole chiave, ma anche pattern di contenuto, scelte strutturali e strategie stagionali. In quattro trimestri, questo si costruisce in un asset di intelligence competitiva che informa decisioni strategiche ben oltre il SEO.",
        },
      ],
      navLabels: {
        previous: "Parole chiave long-tail per i prodotti",
        next: "Mapping parole chiave per i negozi",
      },
    },
    nl: {
      badge: "Zoekwoordonderzoek",
      heading: "Zoekwoordanalyse van concurrenten",
      intro:
        "Je concurrenten hebben al zoekwoordonderzoek voor je gedaan, ze weten het alleen niet. Door te analyseren welke zoekwoorden verkeer naar concurrerende webshops sturen, kun je gaten in je eigen strategie identificeren en bewezen kansen vinden die al omzet genereren in jouw markt.\n\nLees meer over [zoekwoordonderzoek voor ecommerce](/academy/keyword-research-for-ecommerce) in ons gedetailleerde onderwerp.",
      readTime: "8 min leestijd",
      sections: [
        {
          title: "Je echte SEO-concurrenten identificeren",
          content:
            "Je SEO-concurrenten zijn niet noodzakelijkerwijs je zakelijke concurrenten. Een lokale schoenenwinkel concurreert misschien met Nike om klanten, maar in zoekresultaten zijn hun echte concurrenten andere middelgrote online retailers die ranken voor dezelfde productzoekwoorden.\n\nOm je daadwerkelijke SEO-concurrenten te vinden, zoek op je top 10 categorie-zoekwoorden en noteer welke domeinen consequent op pagina een verschijnen. Dit zijn de sites waarmee je om klikken vecht. Sommige zullen directe zakelijke concurrenten zijn; andere kunnen marktplaatsen, reviewsites of nichemerken zijn die je niet had overwogen.\n\nAhrefs en Semrush hebben beide concurrentontdekkingsfuncties die dit proces automatiseren. Voer je domein in en ze tonen je welke sites de meeste zoekwoordoverlap met jou delen. Het rapport \"concurrerende domeinen\" onthult doorgaans 5-10 sites die je regelmatig zou moeten volgen.\n\nFocus op concurrenten die een stap voor liggen, niet de marktleiders met enorme domeinautoriteit. Als je een 2 jaar oude webshop bent met 500 producten, leert het analyseren van Amazon of Bol.com je niets toepasbaars. Analyseer in plaats daarvan de webshop met 1.000 producten en iets betere rankings, hun strategie is binnen je bereik.",
          items: [
            "Zoek je top 10 categorie-zoekwoorden en noteer welke domeinen herhaaldelijk op pagina een verschijnen",
            "Gebruik Ahrefs/Semrush concurrerende domeinen rapporten om sites met de meeste zoekwoordoverlap te vinden",
            "Focus op concurrenten die iets verder zijn dan jij, niet op onbereikbare marktleiders",
            "Volg 5-7 SEO-concurrenten apart van je zakelijke concurrentenlijst",
          ],
        },
        {
          title: "Een zoekwoord-gapanalyse uitvoeren",
          content:
            "Een zoekwoord-gapanalyse vergelijkt je zoekwoordprofiel met een of meer concurrenten om termen te vinden waarvoor zij ranken en jij niet. Dit is een van de activiteiten met de hoogste ROI in e-commerce SEO omdat het bewezen vraag onthult, als je concurrent rankt en verkeer krijgt voor een zoekwoord, is de kans gevalideerd.\n\nIn Ahrefs, ga naar Site Explorer, voer je domein in, navigeer dan naar Content Gap. Voer 2-3 concurrentdomeinen in en de tool toont zoekwoorden waarvoor die concurrenten in de top 10 ranken maar jouw site helemaal niet. Filter de resultaten op zoekvolume (boven 50), op zoekwoordmoeilijkheid (onder 40 voor snelle wins) en op positie (concurrent in top 5).\n\nIn Semrush is de equivalente functie Keyword Gap onder Competitive Research. De interface laat je tot vijf domeinen tegelijk vergelijken, met filters voor zoekwoordtype, positiebereiken en volumeklassen.\n\nDe output is doorgaans een lijst van honderden of duizenden zoekwoorden. Probeer ze niet allemaal aan te pakken. Sorteer op zoekvolume, pas je intentiescoring toe (prioriteer niveau 1-2 commerciele zoekwoorden) en zoek naar clusters van gerelateerde termen. Een cluster als \"biologisch katoenen t-shirts\", \"biologisch katoenen shirts dames\" en \"beste biologisch katoenen kleding\" wijst op een categoriegap die je met een enkele goed gestructureerde pagina kunt aanpakken.\n\nGebruik onze [zoekwoordkannibalisatiechecker](/tools/duplicate-content) om overlap te identificeren.",
          tip: "Voer gapanalyse uit tegen elke concurrent afzonderlijk, niet allemaal tegelijk. Verschillende concurrenten onthullen verschillende kansenclusters. Een modeconcurrent kan je kledingzoekwoorden tonen die je mist, terwijl een interieurconcurrent woondecoratie-termen onthult waar je niet aan had gedacht.",
        },
        {
          title: "Zoekwoorden vinden waarvoor concurrenten ranken en jij niet",
          content:
            "De gapanalyse geeft je de ruwe lijst, maar het omzetten in actie vereist categorisatie. We sorteren concurrentzoekwoorden in vier bakken.\n\nBak een: zoekwoorden waarvoor je pagina's hebt maar niet rankt. Je hebt al een product- of categoriepagina die dit zoekwoord zou moeten targeten maar verschijnt niet in de top 100. Dit zijn optimalisatiekansen, werk de titel, H1 en content van de bestaande pagina bij om de term beter te targeten.\n\nBak twee: zoekwoorden waarvoor je geen pagina's hebt maar zou kunnen maken. Je concurrent heeft een categoriepagina voor \"draadloze oordopjes voor hardlopen\" en jij verkoopt hardloopoordopjes maar hebt geen speciale categoriepagina. Maak de pagina.\n\nBak drie: zoekwoorden die nieuwe producten of productlijnen vereisen. Je concurrent rankt voor producten die je niet voert. Dit is business intelligence, niet alleen SEO-data, het vertelt je wat je moet inslaan of welke nieuwe producten je moet ontwikkelen.\n\nBak vier: zoekwoorden die niet de moeite waard zijn. Sommige concurrentzoekwoorden sluiten niet aan bij je bedrijfsmodel, doelmarkt of productassortiment. Een concurrent rankt misschien voor \"goedkoop\" terwijl jouw merk zich als premium positioneert. Sla deze over.\n\nDe eerste twee bakken bevatten 80% van je actionable kansen. Bak een is het snelst te implementeren (bestaande pagina's optimaliseren), terwijl bak twee nieuwe pagina-aanmaak vereist maar doorgaans resultaten oplevert binnen 3-6 maanden.",
          items: [
            "Bak 1: hebt pagina's maar rankt niet, optimaliseer bestaande content voor deze termen",
            "Bak 2: nog geen pagina's, maak nieuwe categorie- of productpagina's om deze zoekwoorden te vangen",
            "Bak 3: nieuwe producten nodig, behandel als business intelligence voor voorraadbesluiten",
            "Bak 4: niet relevant, sla zoekwoorden over die niet bij je positionering of catalogus passen",
          ],
          image: {
            src: "/images/academy/nl/competitor-keyword-buckets.svg",
            alt: "Vier-Eimer-Framework zur Kategorisierung von Wettbewerber-Keywords",
            caption: "Buckets 1 en 2 bevatten 80% van de bruikbare kansen. Bucket 1 (bestaande pagina's optimaliseren) levert de snelste resultaten op.",
          },
          callout: {
            title: "Gap-Analyse ROI",
            text: "Voer een gap-analyse uit voor elke concurrent afzonderlijk, niet allemaal tegelijk. Een modeconcurrent onthult trefwoorden voor kleding, een concurrent voor huishoudelijke artikelen onthult decortermen. Driemaandelijkse herhaling pakt nieuwe ent",
          },
        },
        {
          title: "Contentstrategieen van concurrenten analyseren",
          content:
            "Kijk verder dan individuele zoekwoorden naar hoe concurrenten hun content structureren om zoekverkeer te vangen. Haal hun top 50 organische pagina's op verkeer uit Ahrefs of Semrush. Welke paginatypes domineren? Hoe lang is hun categoriepaginatekst? Gebruiken ze koopgidsen, vergelijkingspagina's of educatieve content om mid-funnel termen te vangen?\n\nLet vooral op categoriepaginacontent. Als de categoriepagina van een concurrent voor \"hardloopschoenen heren\" 500 woorden koopadvies plus gedetailleerde filteropties bevat, en jouw equivalente pagina alleen een productraster heeft, kost dat contentgap je waarschijnlijk rankings.\n\nControleer hun interne linkpatronen. Linken ze vanuit blogberichten naar categoriepagina's? Hebben productpagina's kruislinks naar gerelateerde producten? Legt hun navigatie subcategoriepagina's bloot die jij verborgen houdt? Deze structurele keuzes beinvloeden direct zoekwoordrankings en zijn makkelijk te repliceren op je eigen site.\n\nKijk naar hun content-freshness signalen. Werken ze categoriepaginatekst seizoensgebonden bij? Voegen ze maandelijks nieuwe productvergelijkingscontent toe? Een concurrent die elk kwartaal een bijgewerkte gids \"beste draadloze koptelefoons\" publiceert, signaleert dat freshness ertoe doet voor dat zoekwoord, en geeft je een contentkalenderdoel.",
        },
        {
          title: "Kwartaalworkflow voor gapanalyse",
          content:
            "Concurrentzoekwoordanalyse is geen eenmalig project. Markten verschuiven, nieuwe concurrenten betreden het veld, en het zoekwoordlandschap verandert elk kwartaal. We voeren deze workflow elke 90 dagen uit voor onze e-commerce klanten.\n\nWeek 1: werk je concurrentenlijst bij. Controleer of nieuwe domeinen de top 10 zijn binnengekomen voor je primaire zoekwoorden. Verwijder degene die eruit zijn gevallen. Haal verse zoekwoord-gapdata op voor elke concurrent.\n\nWeek 2: categoriseer nieuwe gap-zoekwoorden in de vier bakken. Prioriteer bak 1 (optimalisatie) en bak 2 (nieuwe pagina-aanmaak) kansen. Schat het verkeerspotentieel voor elk in met volumedata en realistische CTR-aannames.\n\nWeek 3: maak implementatietickets. Voor bak 1 zoekwoorden, wijs pagina-optimalisatietaken toe met specifieke on-page wijzigingen. Voor bak 2 zoekwoorden, scope nieuwe categorie- of contentpagina-aanmaak. Voeg tijdlijnen en verantwoordelijken toe aan elk ticket.\n\nWeek 4: bekijk resultaten van de gapanalyse van vorig kwartaal. Welke pagina's zijn geoptimaliseerd? Zijn rankings verbeterd? Welke nieuwe pagina's zijn aangemaakt? Worden ze geindexeerd en winnen ze impressies? Deze retrospective zorgt ervoor dat gapanalyse tot actie leidt, niet alleen tot analyse.\n\nDe kwartaalcadans houdt je responsief op marktveranderingen zonder je team te overladen met constante concurrentmonitoring. Tussen kwartaalreviews handelt je zoekwoord-trackingtool de dagelijkse rankingfluctuaties af.\n\nOnze gids over [ecommerce-SEO-strategie](/blog/ecommerce-seo-strategy) behandelt deze aanpak uitgebreid.",
          items: [
            "Werk je concurrentenlijst elk kwartaal bij, nieuwe spelers betreden het veld en oude verdwijnen",
            "Categoriseer gap-zoekwoorden in vier bakken: optimaliseren, creeren, inslaan en overslaan",
            "Maak specifieke implementatietickets met tijdlijnen en verantwoordelijken",
            "Bekijk de implementatieresultaten van vorig kwartaal om voortgang te meten",
          ],
          tip: "Houd een doorlopend document bij van concurrentinzichten, niet alleen zoekwoorden, maar ook contentpatronen, structurele keuzes en seizoensstrategieen. Over vier kwartalen bouwt dit zich op tot een competitive intelligence asset dat strategiebeslissingen ver voorbij SEO informeert.",
        },
      ],
      navLabels: {
        previous: "Long-tail zoekwoorden voor producten",
        next: "Zoekwoordmapping voor webshops",
      },
    },
  },
};
