import type { AcademyTopic } from "../../types";

export const googleSearchConsoleForStores: AcademyTopic = {
  slug: "google-search-console-for-stores",
  cluster: 1,
  resources: [{"label":"Google Search Console","url":"https://search.google.com/search-console","type":"tool"},{"label":"Search Console Help Center","url":"https://support.google.com/webmasters","type":"docs"},{"label":"Bing Webmaster Tools","url":"https://www.bing.com/webmasters/","type":"tool"}],
  content: {
    en: {
      badge: "Search Fundamentals",
      heading: "Google Search Console for Stores",
      intro:
        "Google Search Console is the only tool that shows you exactly how Google sees your store. It tells you which queries drive impressions and clicks, which pages are indexed, and where technical problems are hurting your visibility. For ecommerce sites, it's the foundation of data-driven SEO.",
      readTime: "11 min read",
      sections: [
        {
          title: "Setting Up GSC for Your Ecommerce Site",
          content:
            "Setting up Google Search Console properly for an ecommerce site requires a few steps beyond the basic verification. Start by verifying your domain at the property level using DNS verification rather than a URL prefix. Domain-level verification captures all subdomains and protocol variations, which matters when your store might have separate subdomains for blogs, help centers, or international versions.\n\nOnce verified, submit your XML sitemap immediately. For most ecommerce sites, you'll want separate sitemaps for product pages, category pages, and blog content. GSC shows you how many URLs from each sitemap have been indexed versus submitted, giving you a clear picture of your indexation rate. A healthy store should see 85-95% of submitted product URLs indexed.\n\nConnect GSC to Google Analytics 4 as well. The integration lets you combine search performance data with on-site behavior metrics, so you can see not just which queries bring traffic but what those visitors do after they land. This connection is especially valuable for ecommerce because it links search queries directly to revenue.",
          items: [
            "Use domain-level verification via DNS to capture all subdomains",
            "Submit separate XML sitemaps for products, categories, and blog content",
            "Connect GSC to GA4 for combined search and behavior data",
            "Add all team members who need access with appropriate permission levels",
          ],
        },
        {
          title: "Key Reports for Ecommerce SEO",
          content:
            "The Performance report is where you'll spend most of your time. It shows total clicks, impressions, average click-through rate, and average position for every query and page on your site. For ecommerce, filter this report by page type to understand how your product pages perform versus your category pages versus your blog content.\n\nThe Pages report within Performance is particularly valuable. Sort by impressions to find pages that Google shows frequently but that get few clicks. These are your quick-win opportunities. A product page with 5,000 monthly impressions but a 1.2% CTR likely has a weak title tag or meta description. Improving those elements alone can double or triple your clicks without any ranking changes.\n\nThe Coverage report (now called Page indexing) tells you exactly how many pages are indexed, excluded, and errored. For ecommerce sites with thousands of products, this report often reveals that Google is excluding significant portions of your catalog. Common exclusion reasons include \"Crawled - currently not indexed\" and \"Duplicate without user-selected canonical\", both of which are fixable with targeted optimization.",
          tip: "Set up a weekly routine: every Monday morning, check your Performance report for the past 28 days compared to the previous period. Look for queries where impressions dropped more than 20%, which could signal ranking losses that need immediate attention.",
        },
        {
          title: "Finding Quick Wins in Search Performance",
          content:
            "GSC data reveals quick-win opportunities that can boost traffic without creating new content or building links. The most productive place to look is your queries report, filtered to show keywords where your average position is between 5 and 20.\n\nKeywords in positions 5-10 are on the first page but getting minimal clicks because they're below the fold. A small improvement in your page's relevance signals or title tag could push you into the top 3-4, where click-through rates jump from 3-5% to 10-15%. For a product keyword with 8,000 monthly impressions, moving from position 7 to position 3 could mean going from 240 clicks to 1,200 clicks per month.\n\nKeywords in positions 11-20 represent pages on page two of Google. These pages are already relevant enough to rank but need a content boost. Adding more detailed product descriptions, expanding the FAQ section, or building a few quality backlinks can push them onto page one. We've seen stores increase organic traffic by 30-40% just by systematically improving pages that rank on page two.\n\nAlso look at keywords where you rank well but your CTR is below average for that position. Position 1 typically gets a 25-30% CTR, position 2 gets 15-18%, and position 3 gets 10-12%. If your page ranks 2nd but only gets an 8% CTR, your title tag and meta description likely need work.",
          items: [
            "Filter for keywords ranking positions 5-10 to find first-page improvement opportunities",
            "Target keywords ranking 11-20 that need a content or link boost to reach page one",
            "Identify high-impression, low-CTR pages that need better title tags and descriptions",
            "Compare your CTR to position benchmarks to spot underperforming snippets",
          ],
        },
        {
          title: "Monitoring Indexation Health",
          content:
            "For ecommerce sites, indexation monitoring is critical because unindexed pages generate zero organic traffic. The Page indexing report in GSC shows exactly how many of your pages are in Google's index and why others are excluded.\n\nCheck this report at least monthly and track your indexed page count over time. A sudden drop in indexed pages could mean Google encountered crawl errors, your robots.txt was accidentally updated, or a site migration went wrong. We've seen stores lose 40% of their organic traffic overnight because a developer accidentally added a noindex tag to a template that rendered across thousands of product pages.\n\nPay close attention to the \"Discovered - currently not indexed\" and \"Crawled - currently not indexed\" statuses. The first means Google knows about the page but hasn't crawled it yet, often due to crawl budget limitations. The second means Google crawled the page but chose not to index it, usually because the content was too thin or too similar to other pages. For ecommerce, the second status often affects product variants or filtered category pages.\n\nUse the Sitemaps report alongside Page indexing to compare submitted URLs versus indexed URLs. If you submitted 10,000 product URLs but only 6,500 are indexed, you have 3,500 pages that need investigation. Group these by pattern to find systematic issues rather than fixing pages one by one.",
          tip: "Create a monthly indexation tracking spreadsheet. Record total indexed pages, total excluded pages, and the breakdown of exclusion reasons. Over three to six months, you'll spot trends that reveal whether your site health is improving or declining.",
        },
        {
          title: "Using the URL Inspection Tool",
          content:
            "The URL Inspection tool lets you check exactly how Google sees any specific page on your site. Enter a URL and you'll see whether the page is indexed, when it was last crawled, the canonical URL Google selected, and whether it's eligible for rich results.\n\nFor ecommerce, use this tool whenever you publish new products, update important pages, or troubleshoot indexation problems. After launching a new product collection, inspect the main collection page to confirm it's been crawled and indexed. If it hasn't, use the \"Request indexing\" button to ask Google to crawl it sooner. This doesn't guarantee immediate indexing, but it puts the URL in a priority crawl queue.\n\nThe rendered HTML view within URL Inspection is especially useful for stores using JavaScript-heavy frontends. It shows you exactly what Google sees after rendering, which can be very different from your source HTML. If product prices, reviews, or structured data don't appear in the rendered view, Google can't use that information for rankings or rich results.\n\nOne common pattern we see is canonical tag conflicts. You might set a canonical pointing to URL A, but Google selects URL B as the canonical. The URL Inspection tool reveals these conflicts so you can fix them. This frequently happens with product pages accessible through multiple category paths or with URL parameters that create duplicate versions.",
          items: [
            "Inspect new product pages to verify they're crawled and indexed correctly",
            "Check the rendered HTML to ensure JavaScript content is visible to Google",
            "Verify that Google's selected canonical matches your intended canonical",
            "Use Request Indexing for time-sensitive product launches and updates",
          ],
        },
        {
          title: "Turning GSC Data into Action",
          content:
            "The value of GSC comes from turning data into action plans. Raw data sitting in reports doesn't improve rankings. You need a systematic process for extracting insights and implementing changes.\n\nStart with a monthly content optimization cycle. Export your top 200 queries from the Performance report and sort them by impressions. For each query, check the landing page and ask: does this page fully satisfy the search intent? Does the title tag include the query? Is the content comprehensive enough? This process typically reveals 15-25 pages per month that benefit from optimization.\n\nBuild a technical health dashboard using GSC data. Track your total indexed pages, crawl errors, mobile usability issues, and Core Web Vitals scores over time. When any metric trends in the wrong direction, investigate immediately rather than waiting for traffic drops. Prevention is significantly cheaper than recovery in SEO.\n\nFor seasonal ecommerce businesses, use GSC's date comparison feature to understand your traffic patterns year-over-year. Compare this December to last December, this Black Friday week to last year's. This helps you set realistic expectations and identify whether changes in traffic are due to your SEO efforts or simply seasonal patterns. It also helps you prepare content ahead of seasonal peaks by looking at when specific queries start trending upward each year.",
        },
      ],
      navLabels: {
        previous: "Search Intent for Ecommerce",
        next: "Keyword Research for Ecommerce",
      },
    },
    de: {
      badge: "Suchgrundlagen",
      heading: "Google Search Console fuer Shops",
      intro:
        "Die Google Search Console ist das einzige Tool, das Ihnen genau zeigt, wie Google Ihren Shop sieht. Es verraet Ihnen, welche Anfragen Impressionen und Klicks generieren, welche Seiten indexiert sind und wo technische Probleme Ihre Sichtbarkeit beeintraechtigen. Fuer E-Commerce-Seiten ist es das Fundament datengetriebener SEO.",
      readTime: "11 Min. Lesezeit",
      sections: [
        {
          title: "GSC fuer Ihren E-Commerce-Shop einrichten",
          content:
            "Die korrekte Einrichtung der Google Search Console fuer einen E-Commerce-Shop erfordert einige Schritte ueber die grundlegende Verifizierung hinaus. Beginnen Sie mit der Verifizierung Ihrer Domain auf Property-Ebene mittels DNS-Verifizierung statt eines URL-Praefixes. Die Domain-Verifizierung erfasst alle Subdomains und Protokollvarianten, was relevant ist, wenn Ihr Shop separate Subdomains fuer Blogs, Hilfecenter oder internationale Versionen haben koennte.\n\nReichen Sie nach der Verifizierung sofort Ihre XML-Sitemap ein. Fuer die meisten E-Commerce-Seiten empfehlen sich separate Sitemaps fuer Produktseiten, Kategorieseiten und Blog-Inhalte. GSC zeigt Ihnen, wie viele URLs aus jeder Sitemap indexiert versus eingereicht wurden, und gibt Ihnen ein klares Bild Ihrer Indexierungsrate. Ein gesunder Shop sollte 85-95% der eingereichten Produkt-URLs indexiert sehen.\n\nVerbinden Sie GSC auch mit Google Analytics 4. Die Integration laesst Sie Suchleistungsdaten mit On-Site-Verhaltensmetriken kombinieren, sodass Sie nicht nur sehen, welche Anfragen Traffic bringen, sondern was diese Besucher nach der Landung tun. Diese Verbindung ist besonders wertvoll fuer E-Commerce, da sie Suchanfragen direkt mit Umsatz verknuepft.",
          items: [
            "Verwenden Sie Domain-Verifizierung via DNS, um alle Subdomains zu erfassen",
            "Reichen Sie separate XML-Sitemaps fuer Produkte, Kategorien und Blog-Inhalte ein",
            "Verbinden Sie GSC mit GA4 fuer kombinierte Such- und Verhaltensdaten",
            "Fuegen Sie alle Teammitglieder mit passenden Berechtigungsstufen hinzu",
          ],
        },
        {
          title: "Wichtige Berichte fuer E-Commerce-SEO",
          content:
            "Der Leistungsbericht ist der Bereich, in dem Sie die meiste Zeit verbringen werden. Er zeigt Gesamtklicks, Impressionen, durchschnittliche Klickrate und durchschnittliche Position fuer jede Anfrage und Seite Ihrer Website. Fuer E-Commerce filtern Sie diesen Bericht nach Seitentyp, um zu verstehen, wie Ihre Produktseiten im Vergleich zu Kategorieseiten und Blog-Inhalten abschneiden.\n\nDer Seitenbericht innerhalb der Leistung ist besonders wertvoll. Sortieren Sie nach Impressionen, um Seiten zu finden, die Google haeufig anzeigt, die aber wenige Klicks erhalten. Das sind Ihre Quick-Win-Moeglichkeiten. Eine Produktseite mit 5.000 monatlichen Impressionen bei nur 1,2% CTR hat wahrscheinlich einen schwachen Title-Tag oder eine schwache Meta-Beschreibung. Allein die Verbesserung dieser Elemente kann Ihre Klicks verdoppeln oder verdreifachen, ohne dass sich das Ranking aendert.\n\nDer Abdeckungsbericht (jetzt Seitenindexierung genannt) sagt Ihnen genau, wie viele Seiten indexiert, ausgeschlossen und fehlerhaft sind. Fuer E-Commerce-Seiten mit Tausenden von Produkten zeigt dieser Bericht oft, dass Google erhebliche Teile Ihres Katalogs ausschliesst. Haeufige Ausschlussgruende sind \"Gecrawlt - derzeit nicht indexiert\" und \"Duplikat ohne vom Nutzer ausgewaehltes Canonical\", beides behebbar mit gezielter Optimierung.",
          tip: "Richten Sie eine woechentliche Routine ein: Pruefen Sie jeden Montagmorgen Ihren Leistungsbericht der letzten 28 Tage im Vergleich zum Vorzeitraum. Achten Sie auf Anfragen, bei denen die Impressionen um mehr als 20% gesunken sind, was auf Rankingverluste hindeuten koennte, die sofortige Aufmerksamkeit erfordern.",
        },
        {
          title: "Quick Wins in der Suchleistung finden",
          content:
            "GSC-Daten offenbaren Quick-Win-Moeglichkeiten, die Traffic steigern koennen, ohne neuen Content zu erstellen oder Links aufzubauen. Der produktivste Bereich ist Ihr Anfragenbericht, gefiltert nach Keywords mit einer durchschnittlichen Position zwischen 5 und 20.\n\nKeywords auf den Positionen 5-10 befinden sich auf der ersten Seite, erhalten aber minimale Klicks, weil sie unterhalb der sichtbaren Seite liegen. Eine kleine Verbesserung der Relevanzsignale oder des Title-Tags Ihrer Seite koennte Sie in die Top 3-4 schieben, wo die Klickraten von 3-5% auf 10-15% springen. Fuer ein Produkt-Keyword mit 8.000 monatlichen Impressionen koennte der Sprung von Position 7 auf Position 3 von 240 auf 1.200 Klicks pro Monat bedeuten.\n\nKeywords auf den Positionen 11-20 repraesentieren Seiten auf Googles zweiter Seite. Diese Seiten sind bereits relevant genug zum Ranken, brauchen aber einen Content-Boost. Detailliertere Produktbeschreibungen, erweiterte FAQ-Bereiche oder einige hochwertige Backlinks koennen sie auf Seite eins schieben. Wir haben gesehen, wie Shops ihren organischen Traffic um 30-40% steigerten, nur indem sie systematisch Seiten verbesserten, die auf Seite zwei rankten.\n\nAchten Sie auch auf Keywords, bei denen Sie gut ranken, aber Ihre CTR unter dem Durchschnitt fuer diese Position liegt. Position 1 erreicht typischerweise 25-30% CTR, Position 2 bekommt 15-18%, und Position 3 liegt bei 10-12%. Wenn Ihre Seite auf Platz 2 rankt, aber nur 8% CTR erzielt, brauchen Ihr Title-Tag und Ihre Meta-Beschreibung wahrscheinlich Ueberarbeitung.",
          items: [
            "Filtern Sie nach Keywords auf Position 5-10 fuer Verbesserungsmoeglichkeiten auf Seite eins",
            "Zielen Sie auf Keywords Position 11-20, die einen Content- oder Link-Boost fuer Seite eins brauchen",
            "Identifizieren Sie Seiten mit vielen Impressionen aber niedriger CTR, die bessere Titles brauchen",
            "Vergleichen Sie Ihre CTR mit Positions-Benchmarks, um unterdurchschnittliche Snippets zu erkennen",
          ],
        },
        {
          title: "Indexierungszustand ueberwachen",
          content:
            "Fuer E-Commerce-Seiten ist die Indexierungsueberwachung entscheidend, da nicht-indexierte Seiten null organischen Traffic generieren. Der Seitenindexierungsbericht in GSC zeigt genau, wie viele Ihrer Seiten in Googles Index sind und warum andere ausgeschlossen werden.\n\nPruefen Sie diesen Bericht mindestens monatlich und verfolgen Sie Ihre indexierte Seitenzahl ueber die Zeit. Ein ploetzlicher Rueckgang indexierter Seiten koennte bedeuten, dass Google auf Crawl-Fehler gestossen ist, Ihre robots.txt versehentlich aktualisiert wurde oder eine Website-Migration schiefging. Wir haben erlebt, wie Shops 40% ihres organischen Traffics ueber Nacht verloren, weil ein Entwickler versehentlich ein Noindex-Tag zu einem Template hinzufuegte, das auf Tausenden von Produktseiten gerendert wurde.\n\nAchten Sie besonders auf die Status \"Entdeckt - derzeit nicht indexiert\" und \"Gecrawlt - derzeit nicht indexiert\". Der erste bedeutet, dass Google die Seite kennt, aber noch nicht gecrawlt hat, oft wegen Crawl-Budget-Beschraenkungen. Der zweite bedeutet, dass Google die Seite gecrawlt hat, sich aber entschied, sie nicht zu indexieren, meist weil der Inhalt zu duenn war oder zu aehnlich zu anderen Seiten. Fuer E-Commerce betrifft der zweite Status oft Produktvarianten oder gefilterte Kategorieseiten.\n\nNutzen Sie den Sitemaps-Bericht neben der Seitenindexierung, um eingereichte URLs mit indexierten URLs zu vergleichen. Wenn Sie 10.000 Produkt-URLs eingereicht haben, aber nur 6.500 indexiert sind, haben Sie 3.500 Seiten, die untersucht werden muessen. Gruppieren Sie diese nach Muster, um systematische Probleme zu finden, statt Seiten einzeln zu beheben.",
          tip: "Erstellen Sie eine monatliche Indexierungstracking-Tabelle. Erfassen Sie die Gesamtzahl indexierter Seiten, ausgeschlossener Seiten und die Aufschluesselung der Ausschlussgruende. Ueber drei bis sechs Monate erkennen Sie Trends, die zeigen, ob sich Ihre Seitengesundheit verbessert oder verschlechtert.",
        },
        {
          title: "Das URL-Inspektionstool verwenden",
          content:
            "Das URL-Inspektionstool laesst Sie genau pruefen, wie Google eine bestimmte Seite Ihrer Website sieht. Geben Sie eine URL ein und Sie sehen, ob die Seite indexiert ist, wann sie zuletzt gecrawlt wurde, welche kanonische URL Google gewaehlt hat und ob sie fuer Rich Results berechtigt ist.\n\nFuer E-Commerce nutzen Sie dieses Tool immer dann, wenn Sie neue Produkte veroeffentlichen, wichtige Seiten aktualisieren oder Indexierungsprobleme beheben. Nach dem Start einer neuen Produktkollektion inspizieren Sie die Hauptkollektionsseite, um zu bestaetiegen, dass sie gecrawlt und indexiert wurde. Falls nicht, nutzen Sie den Button \"Indexierung beantragen\", um Google zu bitten, sie frueher zu crawlen. Das garantiert keine sofortige Indexierung, setzt die URL aber in eine priorisierte Crawl-Warteschlange.\n\nDie gerenderte HTML-Ansicht im URL-Inspektionstool ist besonders nuetzlich fuer Shops mit JavaScript-lastigen Frontends. Sie zeigt Ihnen genau, was Google nach dem Rendern sieht, was sich stark von Ihrem Quell-HTML unterscheiden kann. Wenn Produktpreise, Bewertungen oder strukturierte Daten in der gerenderten Ansicht nicht erscheinen, kann Google diese Informationen nicht fuer Rankings oder Rich Results verwenden.\n\nEin haeufiges Muster, das wir sehen, sind Canonical-Tag-Konflikte. Sie setzen vielleicht ein Canonical auf URL A, aber Google waehlt URL B als Canonical. Das URL-Inspektionstool deckt diese Konflikte auf, damit Sie sie beheben koennen. Dies passiert haeufig bei Produktseiten, die ueber mehrere Kategoriepfade erreichbar sind, oder bei URL-Parametern, die doppelte Versionen erzeugen.",
          items: [
            "Inspizieren Sie neue Produktseiten, um korrekte Crawling und Indexierung zu ueberpruefen",
            "Pruefen Sie das gerenderte HTML, um sicherzustellen, dass JavaScript-Inhalte fuer Google sichtbar sind",
            "Verifizieren Sie, dass Googles gewaehltes Canonical mit Ihrem beabsichtigten Canonical uebereinstimmt",
            "Nutzen Sie Indexierung beantragen fuer zeitkritische Produktlaunches und Updates",
          ],
        },
        {
          title: "GSC-Daten in Massnahmen umwandeln",
          content:
            "Der Wert von GSC entsteht durch das Umwandeln von Daten in Handlungsplaene. Rohdaten in Berichten verbessern keine Rankings. Sie brauchen einen systematischen Prozess zum Extrahieren von Erkenntnissen und Umsetzen von Aenderungen.\n\nBeginnen Sie mit einem monatlichen Content-Optimierungszyklus. Exportieren Sie Ihre Top 200 Anfragen aus dem Leistungsbericht und sortieren Sie nach Impressionen. Pruefen Sie fuer jede Anfrage die Zielseite und fragen Sie: Befriedigt diese Seite die Suchintention vollstaendig? Enthaelt der Title-Tag die Anfrage? Ist der Inhalt umfassend genug? Dieser Prozess deckt typischerweise 15-25 Seiten pro Monat auf, die von Optimierung profitieren.\n\nErstellen Sie ein technisches Gesundheits-Dashboard mit GSC-Daten. Verfolgen Sie Ihre gesamten indexierten Seiten, Crawl-Fehler, Mobile-Usability-Probleme und Core-Web-Vitals-Werte ueber die Zeit. Wenn ein Wert in die falsche Richtung tendiert, untersuchen Sie sofort, statt auf Traffic-Einbrueche zu warten. Praevention ist bei SEO deutlich guenstiger als Wiederherstellung.\n\nFuer saisonale E-Commerce-Unternehmen nutzen Sie die Datumsvergleichsfunktion von GSC, um Ihre Trafficmuster im Jahresvergleich zu verstehen. Vergleichen Sie diesen Dezember mit dem letzten Dezember, diese Black-Friday-Woche mit der des Vorjahres. Das hilft Ihnen, realistische Erwartungen zu setzen und zu erkennen, ob Trafficaenderungen auf Ihre SEO-Massnahmen oder einfach saisonale Muster zurueckzufuehren sind. Es hilft Ihnen auch, Content vor saisonalen Spitzen vorzubereiten, indem Sie schauen, wann bestimmte Anfragen jedes Jahr nach oben tendieren.",
        },
      ],
      navLabels: {
        previous: "Suchintention im E-Commerce",
        next: "Keyword-Recherche fuer E-Commerce",
      },
    },
    fr: {
      badge: "Fondamentaux de la recherche",
      heading: "Google Search Console pour les boutiques",
      intro:
        "Google Search Console est le seul outil qui vous montre exactement comment Google voit votre boutique. Il vous indique quelles requetes generent des impressions et des clics, quelles pages sont indexees et ou les problemes techniques nuisent a votre visibilite. Pour les sites e-commerce, c'est le fondement d'un SEO pilote par les donnees.",
      readTime: "11 min de lecture",
      sections: [
        {
          title: "Configurer GSC pour votre site e-commerce",
          content:
            "Configurer correctement Google Search Console pour un site e-commerce necessite quelques etapes supplementaires au-dela de la verification de base. Commencez par verifier votre domaine au niveau de la propriete en utilisant la verification DNS plutot qu'un prefixe d'URL. La verification au niveau du domaine capture tous les sous-domaines et variations de protocole, ce qui est important quand votre boutique peut avoir des sous-domaines separes pour les blogs, centres d'aide ou versions internationales.\n\nUne fois verifie, soumettez immediatement votre sitemap XML. Pour la plupart des sites e-commerce, vous voudrez des sitemaps separes pour les pages produits, les pages de categories et le contenu du blog. GSC vous montre combien d'URLs de chaque sitemap ont ete indexees par rapport a celles soumises, vous donnant une image claire de votre taux d'indexation. Une boutique en bonne sante devrait voir 85 a 95% des URLs de produits soumises indexees.\n\nConnectez egalement GSC a Google Analytics 4. L'integration vous permet de combiner les donnees de performance de recherche avec les metriques de comportement sur site, pour voir non seulement quelles requetes amenent du trafic mais ce que ces visiteurs font apres leur arrivee. Cette connexion est particulierement precieuse pour l'e-commerce car elle relie directement les requetes de recherche aux revenus.",
          items: [
            "Utilisez la verification au niveau du domaine via DNS pour capturer tous les sous-domaines",
            "Soumettez des sitemaps XML separes pour les produits, categories et contenu blog",
            "Connectez GSC a GA4 pour des donnees combinees de recherche et de comportement",
            "Ajoutez tous les membres de l'equipe avec les niveaux d'autorisation appropries",
          ],
        },
        {
          title: "Rapports cles pour le SEO e-commerce",
          content:
            "Le rapport de Performance est l'endroit ou vous passerez le plus de temps. Il montre le total des clics, impressions, le taux de clics moyen et la position moyenne pour chaque requete et page de votre site. Pour l'e-commerce, filtrez ce rapport par type de page pour comprendre comment vos pages produits se comportent par rapport a vos pages de categories et votre contenu blog.\n\nLe rapport Pages au sein de la Performance est particulierement precieux. Triez par impressions pour trouver les pages que Google affiche frequemment mais qui obtiennent peu de clics. Ce sont vos opportunites de gains rapides. Une page produit avec 5 000 impressions mensuelles mais un CTR de 1,2% a probablement un title tag ou une meta description faible. Ameliorer ces seuls elements peut doubler ou tripler vos clics sans changement de classement.\n\nLe rapport de Couverture (maintenant appele Indexation des pages) vous dit exactement combien de pages sont indexees, exclues et en erreur. Pour les sites e-commerce avec des milliers de produits, ce rapport revele souvent que Google exclut des portions significatives de votre catalogue. Les raisons d'exclusion courantes incluent \"Exploree - actuellement non indexee\" et \"Doublon sans URL canonique selectionnee par l'utilisateur\", toutes deux corrigeables avec une optimisation ciblee.",
          tip: "Etablissez une routine hebdomadaire : chaque lundi matin, verifiez votre rapport de Performance des 28 derniers jours compare a la periode precedente. Cherchez les requetes ou les impressions ont chute de plus de 20%, ce qui pourrait signaler des pertes de classement necessitant une attention immediate.",
        },
        {
          title: "Trouver des gains rapides dans les performances de recherche",
          content:
            "Les donnees GSC revelent des opportunites de gains rapides qui peuvent stimuler le trafic sans creer de nouveau contenu ni construire de liens. L'endroit le plus productif est votre rapport de requetes, filtre pour montrer les mots-cles ou votre position moyenne se situe entre 5 et 20.\n\nLes mots-cles en positions 5-10 sont en premiere page mais obtiennent des clics minimaux car ils sont sous la ligne de flottaison. Une petite amelioration des signaux de pertinence ou du title tag de votre page pourrait vous pousser dans le top 3-4, ou les taux de clics passent de 3-5% a 10-15%. Pour un mot-cle produit avec 8 000 impressions mensuelles, passer de la position 7 a la position 3 pourrait signifier passer de 240 a 1 200 clics par mois.\n\nLes mots-cles en positions 11-20 representent des pages en deuxieme page de Google. Ces pages sont deja assez pertinentes pour se classer mais ont besoin d'un boost de contenu. Ajouter des descriptions produits plus detaillees, elargir la section FAQ ou construire quelques backlinks de qualite peut les pousser en premiere page. Nous avons vu des boutiques augmenter leur trafic organique de 30 a 40% simplement en ameliorant systematiquement les pages classees en deuxieme page.\n\nRegardez aussi les mots-cles ou vous etes bien classe mais votre CTR est en dessous de la moyenne pour cette position. La position 1 obtient typiquement un CTR de 25-30%, la position 2 obtient 15-18%, et la position 3 obtient 10-12%. Si votre page est 2eme mais n'obtient que 8% de CTR, votre title tag et meta description ont probablement besoin d'amelioration.",
          items: [
            "Filtrez les mots-cles en positions 5-10 pour trouver des ameliorations en premiere page",
            "Ciblez les mots-cles en positions 11-20 qui necessitent un boost pour atteindre la premiere page",
            "Identifiez les pages a fortes impressions et faible CTR necessitant de meilleurs titles",
            "Comparez votre CTR aux benchmarks de position pour reperer les snippets sous-performants",
          ],
        },
        {
          title: "Surveiller la sante de l'indexation",
          content:
            "Pour les sites e-commerce, la surveillance de l'indexation est critique car les pages non indexees generent zero trafic organique. Le rapport d'Indexation des pages dans GSC montre exactement combien de vos pages sont dans l'index de Google et pourquoi d'autres sont exclues.\n\nVerifiez ce rapport au moins mensuellement et suivez votre nombre de pages indexees dans le temps. Une chute soudaine des pages indexees pourrait signifier que Google a rencontre des erreurs de crawl, que votre robots.txt a ete accidentellement mis a jour, ou qu'une migration de site s'est mal passee. Nous avons vu des boutiques perdre 40% de leur trafic organique du jour au lendemain parce qu'un developpeur a accidentellement ajoute une balise noindex a un template qui s'affichait sur des milliers de pages produits.\n\nPortez une attention particuliere aux statuts \"Decouverte - actuellement non indexee\" et \"Exploree - actuellement non indexee\". Le premier signifie que Google connait la page mais ne l'a pas encore exploree, souvent en raison de limitations du budget de crawl. Le second signifie que Google a explore la page mais a choisi de ne pas l'indexer, generalement parce que le contenu etait trop mince ou trop similaire a d'autres pages. Pour l'e-commerce, le second statut affecte souvent les variantes de produits ou les pages de categories filtrees.\n\nUtilisez le rapport Sitemaps conjointement avec l'Indexation des pages pour comparer les URLs soumises aux URLs indexees. Si vous avez soumis 10 000 URLs de produits mais que seulement 6 500 sont indexees, vous avez 3 500 pages qui necessitent une investigation. Regroupez-les par pattern pour trouver des problemes systematiques plutot que de corriger les pages une par une.",
          tip: "Creez un tableau de suivi mensuel de l'indexation. Enregistrez le total des pages indexees, le total des pages exclues et la repartition des raisons d'exclusion. Sur trois a six mois, vous detecterez des tendances qui revelent si la sante de votre site s'ameliore ou decline.",
        },
        {
          title: "Utiliser l'outil d'inspection d'URL",
          content:
            "L'outil d'inspection d'URL vous permet de verifier exactement comment Google voit une page specifique de votre site. Entrez une URL et vous verrez si la page est indexee, quand elle a ete exploree pour la derniere fois, l'URL canonique selectionnee par Google et si elle est eligible aux resultats enrichis.\n\nPour l'e-commerce, utilisez cet outil chaque fois que vous publiez de nouveaux produits, mettez a jour des pages importantes ou resolvez des problemes d'indexation. Apres le lancement d'une nouvelle collection de produits, inspectez la page principale de la collection pour confirmer qu'elle a ete exploree et indexee. Si ce n'est pas le cas, utilisez le bouton \"Demander l'indexation\" pour demander a Google de l'explorer plus tot. Cela ne garantit pas une indexation immediate, mais place l'URL dans une file d'attente de crawl prioritaire.\n\nLa vue HTML rendu dans l'Inspection d'URL est particulierement utile pour les boutiques utilisant des frontends JavaScript lourds. Elle vous montre exactement ce que Google voit apres le rendu, ce qui peut etre tres different de votre HTML source. Si les prix des produits, les avis ou les donnees structurees n'apparaissent pas dans la vue rendue, Google ne peut pas utiliser ces informations pour les classements ou les resultats enrichis.\n\nUn pattern courant que nous observons est les conflits de balises canoniques. Vous definissez peut-etre un canonical pointant vers l'URL A, mais Google selectionne l'URL B comme canonique. L'outil d'Inspection d'URL revele ces conflits pour que vous puissiez les corriger. Cela arrive frequemment avec les pages produits accessibles via plusieurs chemins de categories ou avec des parametres d'URL qui creent des versions en double.",
          items: [
            "Inspectez les nouvelles pages produits pour verifier leur crawl et indexation corrects",
            "Verifiez le HTML rendu pour vous assurer que le contenu JavaScript est visible par Google",
            "Verifiez que le canonical selectionne par Google correspond a votre canonical prevu",
            "Utilisez Demander l'indexation pour les lancements de produits urgents et les mises a jour",
          ],
        },
        {
          title: "Transformer les donnees GSC en actions",
          content:
            "La valeur de GSC vient de la transformation des donnees en plans d'action. Les donnees brutes dans les rapports n'ameliorent pas les classements. Vous avez besoin d'un processus systematique pour extraire des insights et implementer des changements.\n\nCommencez par un cycle mensuel d'optimisation de contenu. Exportez vos 200 premieres requetes du rapport de Performance et triez-les par impressions. Pour chaque requete, verifiez la page d'atterrissage et demandez-vous : cette page satisfait-elle completement l'intention de recherche ? Le title tag inclut-il la requete ? Le contenu est-il assez complet ? Ce processus revele typiquement 15 a 25 pages par mois qui beneficient d'optimisation.\n\nConstruisez un tableau de bord de sante technique utilisant les donnees GSC. Suivez vos pages indexees totales, erreurs de crawl, problemes d'utilisabilite mobile et scores Core Web Vitals dans le temps. Quand une metrique tend dans la mauvaise direction, investigez immediatement plutot que d'attendre des baisses de trafic. La prevention est significativement moins couteuse que la recuperation en SEO.\n\nPour les entreprises e-commerce saisonnieres, utilisez la fonction de comparaison de dates de GSC pour comprendre vos patterns de trafic d'une annee sur l'autre. Comparez ce decembre au decembre dernier, cette semaine de Black Friday a celle de l'annee derniere. Cela vous aide a definir des attentes realistes et a identifier si les changements de trafic sont dus a vos efforts SEO ou simplement a des patterns saisonniers. Cela vous aide aussi a preparer du contenu avant les pics saisonniers en regardant quand des requetes specifiques commencent a monter chaque annee.",
        },
      ],
      navLabels: {
        previous: "L'intention de recherche en e-commerce",
        next: "Recherche de mots-cles pour l'e-commerce",
      },
    },
    es: {
      badge: "Fundamentos de busqueda",
      heading: "Google Search Console para tiendas",
      intro:
        "Google Search Console es la unica herramienta que te muestra exactamente como Google ve tu tienda. Te indica que consultas generan impresiones y clics, que paginas estan indexadas y donde los problemas tecnicos estan afectando tu visibilidad. Para sitios de e-commerce, es la base del SEO basado en datos.",
      readTime: "11 min de lectura",
      sections: [
        {
          title: "Configurar GSC para tu sitio e-commerce",
          content:
            "Configurar correctamente Google Search Console para un sitio de e-commerce requiere algunos pasos adicionales mas alla de la verificacion basica. Comienza verificando tu dominio a nivel de propiedad usando verificacion DNS en lugar de un prefijo de URL. La verificacion a nivel de dominio captura todos los subdominios y variaciones de protocolo, lo cual importa cuando tu tienda puede tener subdominios separados para blogs, centros de ayuda o versiones internacionales.\n\nUna vez verificado, envia tu sitemap XML inmediatamente. Para la mayoria de los sitios e-commerce, querras sitemaps separados para paginas de producto, paginas de categoria y contenido de blog. GSC te muestra cuantas URLs de cada sitemap han sido indexadas versus enviadas, dandote una imagen clara de tu tasa de indexacion. Una tienda saludable deberia ver el 85-95% de las URLs de producto enviadas indexadas.\n\nConecta GSC con Google Analytics 4 tambien. La integracion te permite combinar datos de rendimiento de busqueda con metricas de comportamiento en el sitio, para que puedas ver no solo que consultas traen trafico sino que hacen esos visitantes despues de llegar. Esta conexion es especialmente valiosa para e-commerce porque vincula directamente las consultas de busqueda con los ingresos.",
          items: [
            "Usa verificacion a nivel de dominio via DNS para capturar todos los subdominios",
            "Envia sitemaps XML separados para productos, categorias y contenido de blog",
            "Conecta GSC con GA4 para datos combinados de busqueda y comportamiento",
            "Agrega a todos los miembros del equipo con los niveles de permisos apropiados",
          ],
        },
        {
          title: "Informes clave para SEO e-commerce",
          content:
            "El informe de Rendimiento es donde pasaras la mayor parte de tu tiempo. Muestra clics totales, impresiones, tasa de clics promedio y posicion promedio para cada consulta y pagina de tu sitio. Para e-commerce, filtra este informe por tipo de pagina para entender como rinden tus paginas de producto versus tus paginas de categoria versus tu contenido de blog.\n\nEl informe de Paginas dentro de Rendimiento es particularmente valioso. Ordena por impresiones para encontrar paginas que Google muestra frecuentemente pero que obtienen pocos clics. Estas son tus oportunidades de victoria rapida. Una pagina de producto con 5.000 impresiones mensuales pero un CTR de 1,2% probablemente tiene un title tag o meta description debil. Mejorar solo estos elementos puede duplicar o triplicar tus clics sin cambios de posicionamiento.\n\nEl informe de Cobertura (ahora llamado Indexacion de paginas) te dice exactamente cuantas paginas estan indexadas, excluidas y con errores. Para sitios e-commerce con miles de productos, este informe a menudo revela que Google esta excluyendo porciones significativas de tu catalogo. Las razones de exclusion comunes incluyen \"Rastreada - actualmente no indexada\" y \"Duplicada sin canonical seleccionada por el usuario\", ambas solucionables con optimizacion especifica.",
          tip: "Establece una rutina semanal: cada lunes por la manana, revisa tu informe de Rendimiento de los ultimos 28 dias comparado con el periodo anterior. Busca consultas donde las impresiones cayeron mas del 20%, lo que podria senalar perdidas de posicionamiento que necesitan atencion inmediata.",
        },
        {
          title: "Encontrar victorias rapidas en el rendimiento de busqueda",
          content:
            "Los datos de GSC revelan oportunidades de victoria rapida que pueden aumentar el trafico sin crear nuevo contenido o construir enlaces. El lugar mas productivo es tu informe de consultas, filtrado para mostrar palabras clave donde tu posicion promedio esta entre 5 y 20.\n\nLas palabras clave en posiciones 5-10 estan en la primera pagina pero reciben clics minimos porque estan por debajo del pliegue visible. Una pequena mejora en las senales de relevancia o el title tag de tu pagina podria empujarte al top 3-4, donde las tasas de clics saltan del 3-5% al 10-15%. Para una palabra clave de producto con 8.000 impresiones mensuales, moverse de la posicion 7 a la posicion 3 podria significar pasar de 240 clics a 1.200 clics por mes.\n\nLas palabras clave en posiciones 11-20 representan paginas en la segunda pagina de Google. Estas paginas ya son suficientemente relevantes para posicionar pero necesitan un impulso de contenido. Agregar descripciones de producto mas detalladas, expandir la seccion de FAQ o construir algunos backlinks de calidad puede empujarlas a la primera pagina. Hemos visto tiendas aumentar el trafico organico un 30-40% solo mejorando sistematicamente paginas que posicionan en la segunda pagina.\n\nTambien busca palabras clave donde posicionas bien pero tu CTR esta por debajo del promedio para esa posicion. La posicion 1 tipicamente obtiene un CTR de 25-30%, la posicion 2 obtiene 15-18%, y la posicion 3 obtiene 10-12%. Si tu pagina posiciona 2da pero solo obtiene un 8% de CTR, tu title tag y meta description probablemente necesitan trabajo.",
          items: [
            "Filtra palabras clave en posiciones 5-10 para encontrar oportunidades de mejora en primera pagina",
            "Apunta a palabras clave en posiciones 11-20 que necesitan impulso de contenido o enlaces",
            "Identifica paginas con muchas impresiones y bajo CTR que necesitan mejores titles",
            "Compara tu CTR con benchmarks de posicion para detectar snippets de bajo rendimiento",
          ],
        },
        {
          title: "Monitorear la salud de indexacion",
          content:
            "Para sitios e-commerce, el monitoreo de indexacion es critico porque las paginas no indexadas generan cero trafico organico. El informe de Indexacion de paginas en GSC muestra exactamente cuantas de tus paginas estan en el indice de Google y por que otras estan excluidas.\n\nRevisa este informe al menos mensualmente y rastrea tu conteo de paginas indexadas a lo largo del tiempo. Una caida repentina en paginas indexadas podria significar que Google encontro errores de rastreo, tu robots.txt se actualizo accidentalmente, o una migracion de sitio salio mal. Hemos visto tiendas perder el 40% de su trafico organico de la noche a la manana porque un desarrollador agrego accidentalmente una etiqueta noindex a una plantilla que se renderizaba en miles de paginas de producto.\n\nPresta atencion especial a los estados \"Descubierta - actualmente no indexada\" y \"Rastreada - actualmente no indexada\". El primero significa que Google conoce la pagina pero no la ha rastreado aun, a menudo debido a limitaciones del presupuesto de rastreo. El segundo significa que Google rastro la pagina pero eligio no indexarla, usualmente porque el contenido era demasiado delgado o demasiado similar a otras paginas. Para e-commerce, el segundo estado a menudo afecta variantes de producto o paginas de categorias filtradas.\n\nUsa el informe de Sitemaps junto con la Indexacion de paginas para comparar URLs enviadas versus URLs indexadas. Si enviaste 10.000 URLs de producto pero solo 6.500 estan indexadas, tienes 3.500 paginas que necesitan investigacion. Agrupalas por patron para encontrar problemas sistematicos en lugar de arreglar paginas una por una.",
          tip: "Crea una hoja de calculo mensual de seguimiento de indexacion. Registra el total de paginas indexadas, total de paginas excluidas y el desglose de razones de exclusion. En tres a seis meses, detectaras tendencias que revelan si la salud de tu sitio esta mejorando o empeorando.",
        },
        {
          title: "Usar la herramienta de Inspeccion de URL",
          content:
            "La herramienta de Inspeccion de URL te permite verificar exactamente como Google ve cualquier pagina especifica de tu sitio. Ingresa una URL y veras si la pagina esta indexada, cuando fue rastreada por ultima vez, la URL canonical que Google selecciono y si es elegible para resultados enriquecidos.\n\nPara e-commerce, usa esta herramienta cada vez que publiques nuevos productos, actualices paginas importantes o soluciones problemas de indexacion. Despues de lanzar una nueva coleccion de productos, inspecciona la pagina principal de la coleccion para confirmar que fue rastreada e indexada. Si no lo fue, usa el boton \"Solicitar indexacion\" para pedir a Google que la rastree antes. Esto no garantiza indexacion inmediata, pero coloca la URL en una cola de rastreo prioritaria.\n\nLa vista de HTML renderizado dentro de la Inspeccion de URL es especialmente util para tiendas que usan frontends con mucho JavaScript. Te muestra exactamente lo que Google ve despues del renderizado, lo cual puede ser muy diferente de tu HTML fuente. Si los precios de productos, resenas o datos estructurados no aparecen en la vista renderizada, Google no puede usar esa informacion para posicionamiento o resultados enriquecidos.\n\nUn patron comun que vemos son conflictos de etiquetas canonical. Podrias establecer un canonical apuntando a la URL A, pero Google selecciona la URL B como canonical. La herramienta de Inspeccion de URL revela estos conflictos para que puedas corregirlos. Esto sucede frecuentemente con paginas de producto accesibles a traves de multiples rutas de categorias o con parametros de URL que crean versiones duplicadas.",
          items: [
            "Inspecciona nuevas paginas de producto para verificar rastreo e indexacion correctos",
            "Verifica el HTML renderizado para asegurar que el contenido JavaScript sea visible para Google",
            "Verifica que el canonical seleccionado por Google coincida con tu canonical previsto",
            "Usa Solicitar indexacion para lanzamientos de productos urgentes y actualizaciones",
          ],
        },
        {
          title: "Convertir datos de GSC en acciones",
          content:
            "El valor de GSC viene de convertir datos en planes de accion. Los datos crudos en informes no mejoran posicionamientos. Necesitas un proceso sistematico para extraer insights e implementar cambios.\n\nComienza con un ciclo mensual de optimizacion de contenido. Exporta tus 200 consultas principales del informe de Rendimiento y ordenalas por impresiones. Para cada consulta, revisa la pagina de destino y pregunta: esta pagina satisface completamente la intencion de busqueda? El title tag incluye la consulta? El contenido es suficientemente completo? Este proceso tipicamente revela 15-25 paginas por mes que se benefician de optimizacion.\n\nConstruye un dashboard de salud tecnica usando datos de GSC. Rastrea tus paginas indexadas totales, errores de rastreo, problemas de usabilidad movil y puntuaciones de Core Web Vitals a lo largo del tiempo. Cuando cualquier metrica tienda en la direccion equivocada, investiga inmediatamente en lugar de esperar caidas de trafico. La prevencion es significativamente mas barata que la recuperacion en SEO.\n\nPara negocios e-commerce estacionales, usa la funcion de comparacion de fechas de GSC para entender tus patrones de trafico interanuales. Compara este diciembre con el diciembre pasado, esta semana de Black Friday con la del ano pasado. Esto te ayuda a establecer expectativas realistas e identificar si los cambios en el trafico se deben a tus esfuerzos de SEO o simplemente a patrones estacionales. Tambien te ayuda a preparar contenido antes de los picos estacionales observando cuando las consultas especificas comienzan a subir cada ano.",
        },
      ],
      navLabels: {
        previous: "Intencion de busqueda en e-commerce",
        next: "Investigacion de palabras clave para e-commerce",
      },
    },
    it: {
      badge: "Fondamenti di ricerca",
      heading: "Google Search Console per i negozi",
      intro:
        "Google Search Console e l'unico strumento che ti mostra esattamente come Google vede il tuo negozio. Ti indica quali query generano impressioni e clic, quali pagine sono indicizzate e dove i problemi tecnici stanno danneggiando la tua visibilita. Per i siti e-commerce, e la base di un SEO guidato dai dati.",
      readTime: "11 min di lettura",
      sections: [
        {
          title: "Configurare GSC per il tuo sito e-commerce",
          content:
            "Configurare correttamente Google Search Console per un sito e-commerce richiede alcuni passaggi oltre la verifica di base. Inizia verificando il tuo dominio a livello di proprieta usando la verifica DNS piuttosto che un prefisso URL. La verifica a livello di dominio cattura tutti i sottodomini e le variazioni di protocollo, il che e importante quando il tuo negozio potrebbe avere sottodomini separati per blog, centri assistenza o versioni internazionali.\n\nUna volta verificato, invia immediatamente la tua sitemap XML. Per la maggior parte dei siti e-commerce, vorrai sitemap separate per le pagine prodotto, le pagine di categoria e il contenuto del blog. GSC ti mostra quanti URL da ciascuna sitemap sono stati indicizzati rispetto a quelli inviati, dandoti un quadro chiaro del tuo tasso di indicizzazione. Un negozio in salute dovrebbe vedere l'85-95% degli URL prodotto inviati indicizzati.\n\nCollega GSC anche a Google Analytics 4. L'integrazione ti permette di combinare i dati sulle prestazioni di ricerca con le metriche di comportamento sul sito, cosi puoi vedere non solo quali query portano traffico ma cosa fanno quei visitatori dopo l'arrivo. Questa connessione e particolarmente preziosa per l'e-commerce perche collega direttamente le query di ricerca ai ricavi.",
          items: [
            "Usa la verifica a livello di dominio via DNS per catturare tutti i sottodomini",
            "Invia sitemap XML separate per prodotti, categorie e contenuto blog",
            "Collega GSC a GA4 per dati combinati di ricerca e comportamento",
            "Aggiungi tutti i membri del team con i livelli di autorizzazione appropriati",
          ],
        },
        {
          title: "Report chiave per il SEO e-commerce",
          content:
            "Il report Rendimento e dove passerai la maggior parte del tempo. Mostra clic totali, impressioni, tasso di clic medio e posizione media per ogni query e pagina del tuo sito. Per l'e-commerce, filtra questo report per tipo di pagina per capire come le tue pagine prodotto si comportano rispetto alle pagine di categoria e al contenuto del blog.\n\nIl report Pagine all'interno del Rendimento e particolarmente prezioso. Ordina per impressioni per trovare pagine che Google mostra frequentemente ma che ottengono pochi clic. Queste sono le tue opportunita di vittorie rapide. Una pagina prodotto con 5.000 impressioni mensili ma un CTR dell'1,2% probabilmente ha un title tag o una meta description debole. Migliorare solo questi elementi puo raddoppiare o triplicare i tuoi clic senza cambiamenti di posizionamento.\n\nIl report Copertura (ora chiamato Indicizzazione delle pagine) ti dice esattamente quante pagine sono indicizzate, escluse e in errore. Per i siti e-commerce con migliaia di prodotti, questo report spesso rivela che Google sta escludendo porzioni significative del tuo catalogo. Le ragioni di esclusione comuni includono \"Sottoposta a scansione - attualmente non indicizzata\" e \"Duplicata senza canonico selezionato dall'utente\", entrambe risolvibili con ottimizzazione mirata.",
          tip: "Stabilisci una routine settimanale: ogni lunedi mattina, controlla il tuo report Rendimento degli ultimi 28 giorni confrontato con il periodo precedente. Cerca query dove le impressioni sono calate di piu del 20%, il che potrebbe segnalare perdite di posizionamento che richiedono attenzione immediata.",
        },
        {
          title: "Trovare vittorie rapide nelle prestazioni di ricerca",
          content:
            "I dati GSC rivelano opportunita di vittorie rapide che possono aumentare il traffico senza creare nuovi contenuti o costruire link. Il luogo piu produttivo e il tuo report query, filtrato per mostrare parole chiave dove la tua posizione media e tra 5 e 20.\n\nLe parole chiave in posizioni 5-10 sono in prima pagina ma ottengono clic minimi perche sono sotto la piega visibile. Un piccolo miglioramento nei segnali di pertinenza o nel title tag della tua pagina potrebbe spingerti nel top 3-4, dove i tassi di clic saltano dal 3-5% al 10-15%. Per una parola chiave prodotto con 8.000 impressioni mensili, passare dalla posizione 7 alla posizione 3 potrebbe significare passare da 240 clic a 1.200 clic al mese.\n\nLe parole chiave in posizioni 11-20 rappresentano pagine nella seconda pagina di Google. Queste pagine sono gia abbastanza pertinenti per posizionarsi ma hanno bisogno di un boost di contenuto. Aggiungere descrizioni prodotto piu dettagliate, espandere la sezione FAQ o costruire alcuni backlink di qualita puo spingerle in prima pagina. Abbiamo visto negozi aumentare il traffico organico del 30-40% semplicemente migliorando sistematicamente le pagine che si posizionano in seconda pagina.\n\nGuarda anche le parole chiave dove ti posizioni bene ma il tuo CTR e sotto la media per quella posizione. La posizione 1 tipicamente ottiene un CTR del 25-30%, la posizione 2 ottiene il 15-18%, e la posizione 3 ottiene il 10-12%. Se la tua pagina e seconda ma ottiene solo l'8% di CTR, il tuo title tag e la meta description probabilmente necessitano di miglioramenti.",
          items: [
            "Filtra le parole chiave in posizioni 5-10 per trovare opportunita di miglioramento in prima pagina",
            "Punta alle parole chiave in posizioni 11-20 che necessitano di un boost per raggiungere la prima pagina",
            "Identifica pagine con molte impressioni e basso CTR che necessitano di title migliori",
            "Confronta il tuo CTR con i benchmark di posizione per individuare snippet sottoperformanti",
          ],
        },
        {
          title: "Monitorare la salute dell'indicizzazione",
          content:
            "Per i siti e-commerce, il monitoraggio dell'indicizzazione e critico perche le pagine non indicizzate generano zero traffico organico. Il report Indicizzazione delle pagine in GSC mostra esattamente quante delle tue pagine sono nell'indice di Google e perche altre sono escluse.\n\nControlla questo report almeno mensilmente e traccia il conteggio delle tue pagine indicizzate nel tempo. Un calo improvviso delle pagine indicizzate potrebbe significare che Google ha incontrato errori di scansione, il tuo robots.txt e stato accidentalmente aggiornato, o una migrazione del sito e andata male. Abbiamo visto negozi perdere il 40% del loro traffico organico da un giorno all'altro perche uno sviluppatore ha accidentalmente aggiunto un tag noindex a un template che veniva renderizzato su migliaia di pagine prodotto.\n\nPresta particolare attenzione agli stati \"Scoperta - attualmente non indicizzata\" e \"Sottoposta a scansione - attualmente non indicizzata\". Il primo significa che Google conosce la pagina ma non l'ha ancora sottoposta a scansione, spesso a causa di limitazioni del budget di scansione. Il secondo significa che Google ha sottoposto a scansione la pagina ma ha scelto di non indicizzarla, di solito perche il contenuto era troppo sottile o troppo simile ad altre pagine. Per l'e-commerce, il secondo stato spesso colpisce le varianti di prodotto o le pagine di categoria filtrate.\n\nUsa il report Sitemap insieme all'Indicizzazione delle pagine per confrontare gli URL inviati rispetto agli URL indicizzati. Se hai inviato 10.000 URL prodotto ma solo 6.500 sono indicizzati, hai 3.500 pagine che necessitano di indagine. Raggruppale per pattern per trovare problemi sistematici invece di correggere le pagine una per una.",
          tip: "Crea un foglio di calcolo mensile di tracciamento dell'indicizzazione. Registra il totale delle pagine indicizzate, il totale delle pagine escluse e la suddivisione dei motivi di esclusione. In tre-sei mesi, individuerai tendenze che rivelano se la salute del tuo sito sta migliorando o peggiorando.",
        },
        {
          title: "Usare lo strumento Ispezione URL",
          content:
            "Lo strumento Ispezione URL ti permette di controllare esattamente come Google vede qualsiasi pagina specifica del tuo sito. Inserisci un URL e vedrai se la pagina e indicizzata, quando e stata sottoposta a scansione l'ultima volta, l'URL canonico selezionato da Google e se e idonea per i risultati avanzati.\n\nPer l'e-commerce, usa questo strumento ogni volta che pubblichi nuovi prodotti, aggiorni pagine importanti o risolvi problemi di indicizzazione. Dopo il lancio di una nuova collezione di prodotti, ispeziona la pagina principale della collezione per confermare che e stata sottoposta a scansione e indicizzata. Se non lo e stata, usa il pulsante \"Richiedi indicizzazione\" per chiedere a Google di sottoporre a scansione prima. Questo non garantisce l'indicizzazione immediata, ma mette l'URL in una coda di scansione prioritaria.\n\nLa vista HTML renderizzato all'interno dell'Ispezione URL e particolarmente utile per i negozi che usano frontend pesanti in JavaScript. Ti mostra esattamente cosa Google vede dopo il rendering, che puo essere molto diverso dal tuo HTML sorgente. Se i prezzi dei prodotti, le recensioni o i dati strutturati non appaiono nella vista renderizzata, Google non puo usare quelle informazioni per i posizionamenti o i risultati avanzati.\n\nUn pattern comune che vediamo sono i conflitti di tag canonici. Potresti impostare un canonico che punta all'URL A, ma Google seleziona l'URL B come canonico. Lo strumento Ispezione URL rivela questi conflitti cosi puoi correggerli. Questo succede frequentemente con le pagine prodotto accessibili attraverso percorsi di categoria multipli o con parametri URL che creano versioni duplicate.",
          items: [
            "Ispeziona le nuove pagine prodotto per verificare la corretta scansione e indicizzazione",
            "Controlla l'HTML renderizzato per assicurarti che il contenuto JavaScript sia visibile a Google",
            "Verifica che il canonico selezionato da Google corrisponda al tuo canonico previsto",
            "Usa Richiedi indicizzazione per lanci di prodotti urgenti e aggiornamenti",
          ],
        },
        {
          title: "Trasformare i dati GSC in azioni",
          content:
            "Il valore di GSC viene dal trasformare i dati in piani d'azione. I dati grezzi nei report non migliorano i posizionamenti. Hai bisogno di un processo sistematico per estrarre insight e implementare cambiamenti.\n\nInizia con un ciclo mensile di ottimizzazione dei contenuti. Esporta le tue 200 query principali dal report Rendimento e ordinale per impressioni. Per ogni query, controlla la pagina di destinazione e chiediti: questa pagina soddisfa completamente l'intento di ricerca? Il title tag include la query? Il contenuto e sufficientemente completo? Questo processo tipicamente rivela 15-25 pagine al mese che beneficiano di ottimizzazione.\n\nCostruisci una dashboard di salute tecnica usando i dati GSC. Traccia le tue pagine indicizzate totali, errori di scansione, problemi di usabilita mobile e punteggi Core Web Vitals nel tempo. Quando qualsiasi metrica tende nella direzione sbagliata, indaga immediatamente piuttosto che aspettare cali di traffico. La prevenzione e significativamente piu economica del recupero nel SEO.\n\nPer le attivita e-commerce stagionali, usa la funzione di confronto date di GSC per comprendere i tuoi pattern di traffico anno su anno. Confronta questo dicembre con il dicembre scorso, questa settimana di Black Friday con quella dell'anno scorso. Questo ti aiuta a stabilire aspettative realistiche e identificare se i cambiamenti nel traffico sono dovuti ai tuoi sforzi SEO o semplicemente a pattern stagionali. Ti aiuta anche a preparare contenuti prima dei picchi stagionali osservando quando le query specifiche iniziano a salire ogni anno.",
        },
      ],
      navLabels: {
        previous: "L'intento di ricerca nell'e-commerce",
        next: "Ricerca di parole chiave per l'e-commerce",
      },
    },
    nl: {
      badge: "Zoekfundamenten",
      heading: "Google Search Console voor winkels",
      intro:
        "Google Search Console is de enige tool die je precies laat zien hoe Google je winkel ziet. Het vertelt je welke zoekopdrachten impressies en klikken opleveren, welke pagina's geindexeerd zijn en waar technische problemen je zichtbaarheid schaden. Voor e-commerce sites is het de basis van datagedreven SEO.",
      readTime: "11 min leestijd",
      sections: [
        {
          title: "GSC instellen voor je e-commerce site",
          content:
            "Het correct instellen van Google Search Console voor een e-commerce site vereist een paar stappen beyond de basisverificatie. Begin met het verifieren van je domein op property-niveau met DNS-verificatie in plaats van een URL-prefix. Domein-niveau verificatie vangt alle subdomeinen en protocolvariaties op, wat belangrijk is wanneer je winkel aparte subdomeinen kan hebben voor blogs, helpcentra of internationale versies.\n\nDien na verificatie direct je XML-sitemap in. Voor de meeste e-commerce sites wil je aparte sitemaps voor productpagina's, categoriepagina's en blogcontent. GSC toont je hoeveel URL's van elke sitemap geindexeerd zijn versus ingediend, wat je een duidelijk beeld geeft van je indexatiegraad. Een gezonde winkel zou 85-95% van de ingediende product-URL's geindexeerd moeten zien.\n\nVerbind GSC ook met Google Analytics 4. De integratie laat je zoekprestatiedata combineren met on-site gedragsmetriek, zodat je niet alleen kunt zien welke zoekopdrachten verkeer opleveren maar wat die bezoekers doen na aankomst. Deze verbinding is bijzonder waardevol voor e-commerce omdat het zoekopdrachten direct aan omzet koppelt.",
          items: [
            "Gebruik domein-niveau verificatie via DNS om alle subdomeinen op te vangen",
            "Dien aparte XML-sitemaps in voor producten, categorieen en blogcontent",
            "Verbind GSC met GA4 voor gecombineerde zoek- en gedragsdata",
            "Voeg alle teamleden toe met de juiste machtigingsniveaus",
          ],
        },
        {
          title: "Belangrijke rapporten voor e-commerce SEO",
          content:
            "Het Prestatierapport is waar je de meeste tijd zult doorbrengen. Het toont totale klikken, impressies, gemiddeld klikpercentage en gemiddelde positie voor elke zoekopdracht en pagina op je site. Voor e-commerce filter je dit rapport op paginatype om te begrijpen hoe je productpagina's presteren versus je categoriepagina's versus je blogcontent.\n\nHet Pagina-rapport binnen Prestaties is bijzonder waardevol. Sorteer op impressies om pagina's te vinden die Google vaak toont maar die weinig klikken krijgen. Dit zijn je quick-win kansen. Een productpagina met 5.000 maandelijkse impressies maar een CTR van 1,2% heeft waarschijnlijk een zwakke title tag of meta description. Het verbeteren van alleen deze elementen kan je klikken verdubbelen of verdrievoudigen zonder rankingswijzigingen.\n\nHet Dekkinigrapport (nu Pagina-indexering genoemd) vertelt je precies hoeveel pagina's geindexeerd, uitgesloten en foutief zijn. Voor e-commerce sites met duizenden producten onthult dit rapport vaak dat Google aanzienlijke delen van je catalogus uitsluit. Veelvoorkomende uitsluitingsredenen zijn \"Gecrawld - momenteel niet geindexeerd\" en \"Duplicaat zonder door gebruiker geselecteerd canonical\", beide op te lossen met gerichte optimalisatie.",
          tip: "Stel een wekelijkse routine in: controleer elke maandagochtend je Prestatierapport van de afgelopen 28 dagen vergeleken met de vorige periode. Zoek naar zoekopdrachten waarbij de impressies meer dan 20% zijn gedaald, wat rankingsverliezen kan signaleren die onmiddellijke aandacht vereisen.",
        },
        {
          title: "Quick wins vinden in zoekprestaties",
          content:
            "GSC-data onthult quick-win kansen die verkeer kunnen boosten zonder nieuwe content te maken of links te bouwen. De meest productieve plek is je zoekopdrachtenrapport, gefilterd om zoekwoorden te tonen waarbij je gemiddelde positie tussen 5 en 20 ligt.\n\nZoekwoorden op posities 5-10 staan op de eerste pagina maar krijgen minimale klikken omdat ze onder de vouw zitten. Een kleine verbetering in de relevantsesignalen of title tag van je pagina kan je in de top 3-4 duwen, waar klikpercentages springen van 3-5% naar 10-15%. Voor een productzoekwoord met 8.000 maandelijkse impressies kan het verschuiven van positie 7 naar positie 3 betekenen dat je van 240 klikken naar 1.200 klikken per maand gaat.\n\nZoekwoorden op posities 11-20 vertegenwoordigen pagina's op pagina twee van Google. Deze pagina's zijn al relevant genoeg om te ranken maar hebben een contentboost nodig. Het toevoegen van gedetailleerdere productbeschrijvingen, het uitbreiden van de FAQ-sectie, of het bouwen van een paar kwaliteitsbacklinks kan ze naar pagina een duwen. We hebben winkels hun organisch verkeer met 30-40% zien verhogen door systematisch pagina's te verbeteren die op pagina twee rankten.\n\nKijk ook naar zoekwoorden waarbij je goed rankt maar je CTR onder het gemiddelde voor die positie ligt. Positie 1 krijgt typisch een CTR van 25-30%, positie 2 krijgt 15-18%, en positie 3 krijgt 10-12%. Als je pagina op 2 rankt maar slechts een CTR van 8% haalt, moeten je title tag en meta description waarschijnlijk worden verbeterd.",
          items: [
            "Filter op zoekwoorden op positie 5-10 voor verbeteringsmogelijkheden op pagina een",
            "Richt je op zoekwoorden op positie 11-20 die een content- of linkboost nodig hebben",
            "Identificeer pagina's met veel impressies en lage CTR die betere titles nodig hebben",
            "Vergelijk je CTR met positiebenchmarks om onderpresterende snippets te herkennen",
          ],
        },
        {
          title: "Indexatiegezondheid monitoren",
          content:
            "Voor e-commerce sites is indexatiemonitoring cruciaal omdat niet-geindexeerde pagina's nul organisch verkeer genereren. Het Pagina-indexeringsrapport in GSC toont precies hoeveel van je pagina's in Googles index staan en waarom andere zijn uitgesloten.\n\nControleer dit rapport minstens maandelijks en volg je geindexeerde paginatelling in de tijd. Een plotselinge daling in geindexeerde pagina's kan betekenen dat Google crawlfouten tegenkwam, je robots.txt per ongeluk werd bijgewerkt, of een sitemigratie misging. We hebben winkels 40% van hun organisch verkeer van de ene dag op de andere zien verliezen omdat een ontwikkelaar per ongeluk een noindex-tag toevoegde aan een template dat over duizenden productpagina's werd gerenderd.\n\nLet goed op de statussen \"Ontdekt - momenteel niet geindexeerd\" en \"Gecrawld - momenteel niet geindexeerd\". De eerste betekent dat Google de pagina kent maar nog niet heeft gecrawld, vaak door crawlbudgetbeperkingen. De tweede betekent dat Google de pagina crawlde maar koos om niet te indexeren, meestal omdat de content te dun was of te vergelijkbaar met andere pagina's. Voor e-commerce treft de tweede status vaak productvarianten of gefilterde categoriepagina's.\n\nGebruik het Sitemaps-rapport naast Pagina-indexering om ingediende URL's te vergelijken met geindexeerde URL's. Als je 10.000 product-URL's hebt ingediend maar slechts 6.500 zijn geindexeerd, heb je 3.500 pagina's die onderzoek nodig hebben. Groepeer deze op patroon om systematische problemen te vinden in plaats van pagina's een voor een te repareren.",
          tip: "Maak een maandelijks indexatietracking spreadsheet. Registreer het totaal geindexeerde pagina's, totaal uitgesloten pagina's en de uitsplitsing van uitsluitingsredenen. Over drie tot zes maanden spot je trends die onthullen of je sitegesondheid verbetert of verslechtert.",
        },
        {
          title: "Het URL-inspectietool gebruiken",
          content:
            "Het URL-inspectietool laat je precies controleren hoe Google een specifieke pagina op je site ziet. Voer een URL in en je ziet of de pagina geindexeerd is, wanneer deze voor het laatst werd gecrawld, de canonical URL die Google selecteerde en of deze in aanmerking komt voor rich results.\n\nVoor e-commerce gebruik je dit tool wanneer je nieuwe producten publiceert, belangrijke pagina's bijwerkt of indexatieproblemen oplost. Na het lanceren van een nieuwe productcollectie inspecteer je de hoofdcollectiepagina om te bevestigen dat deze gecrawld en geindexeerd is. Als dat niet zo is, gebruik dan de knop \"Indexering aanvragen\" om Google te vragen eerder te crawlen. Dit garandeert geen onmiddellijke indexering, maar plaatst de URL in een prioriteitscrawlwachtrij.\n\nDe gerenderde HTML-weergave binnen URL-inspectie is bijzonder nuttig voor winkels die JavaScript-zware frontends gebruiken. Het toont je precies wat Google ziet na rendering, wat heel anders kan zijn dan je bron-HTML. Als productprijzen, reviews of gestructureerde data niet verschijnen in de gerenderde weergave, kan Google die informatie niet gebruiken voor rankings of rich results.\n\nEen veelvoorkomend patroon dat we zien zijn canonical tag-conflicten. Je stelt misschien een canonical in die naar URL A wijst, maar Google selecteert URL B als canonical. Het URL-inspectietool onthult deze conflicten zodat je ze kunt oplossen. Dit gebeurt vaak bij productpagina's die via meerdere categoriepaden toegankelijk zijn of bij URL-parameters die dubbele versies creeren.",
          items: [
            "Inspecteer nieuwe productpagina's om correcte crawling en indexering te verifieren",
            "Controleer de gerenderde HTML om te zorgen dat JavaScript-content zichtbaar is voor Google",
            "Verifieer dat Googles geselecteerd canonical overeenkomt met jouw bedoelde canonical",
            "Gebruik Indexering aanvragen voor tijdgevoelige productlanceringen en updates",
          ],
        },
        {
          title: "GSC-data omzetten in actie",
          content:
            "De waarde van GSC komt van het omzetten van data in actieplannen. Ruwe data in rapporten verbetert geen rankings. Je hebt een systematisch proces nodig om inzichten te extraheren en wijzigingen te implementeren.\n\nBegin met een maandelijkse contentoptimalisatiecyclus. Exporteer je top 200 zoekopdrachten uit het Prestatierapport en sorteer op impressies. Controleer voor elke zoekopdracht de landingspagina en vraag: bevredigt deze pagina de zoekintentie volledig? Bevat de title tag de zoekopdracht? Is de content uitgebreid genoeg? Dit proces onthult typisch 15-25 pagina's per maand die baat hebben bij optimalisatie.\n\nBouw een technisch gezondheidsdashboard met GSC-data. Volg je totaal geindexeerde pagina's, crawlfouten, mobiele bruikbaarheidsproblemen en Core Web Vitals-scores in de tijd. Wanneer een metriek de verkeerde kant op beweegt, onderzoek dan onmiddellijk in plaats van te wachten op verkeersdalingen. Preventie is aanzienlijk goedkoper dan herstel in SEO.\n\nVoor seizoensgebonden e-commerce bedrijven gebruik je de datumvergelijkingsfunctie van GSC om je verkeerspatronen jaar-op-jaar te begrijpen. Vergelijk deze december met vorig december, deze Black Friday-week met die van vorig jaar. Dit helpt je realistische verwachtingen te stellen en te identificeren of verkeerswijzigingen te wijten zijn aan je SEO-inspanningen of simpelweg seizoenspatronen. Het helpt je ook content voor seizoenspieken voor te bereiden door te kijken wanneer specifieke zoekopdrachten elk jaar beginnen te stijgen.",
        },
      ],
      navLabels: {
        previous: "Zoekintentie voor e-commerce",
        next: "Zoekwoordonderzoek voor e-commerce",
      },
    },
  },
};
