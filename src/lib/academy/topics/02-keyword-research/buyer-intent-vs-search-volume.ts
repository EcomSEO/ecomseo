import type { AcademyTopic } from "../../types";

export const buyerIntentVsSearchVolume: AcademyTopic = {
  slug: "buyer-intent-vs-search-volume",
  cluster: 2,
  resources: [{"label":"Google Keyword Planner","url":"https://ads.google.com/home/tools/keyword-planner/","type":"tool"},{"label":"Ahrefs Free SERP Checker","url":"https://ahrefs.com/serp-checker","type":"tool"}],
  content: {
    en: {
      badge: "Keyword Research",
      heading: "Buyer Intent vs. Search Volume",
      intro:
        "A keyword with 50 monthly searches and a 6% conversion rate generates more revenue than one with 10,000 searches and a 0.1% conversion rate. For ecommerce stores, understanding buyer intent is the single most profitable skill in keyword research.",
      readTime: "8 min read",
      sections: [
        {
          title: "Why Volume Alone Is Misleading",
          content:
            "Search volume tells you how many people type a query into Google each month. It says nothing about whether those people want to buy, compare, learn, or just browse. A query like \"leather jacket\" gets around 135,000 monthly searches, but the intent behind it ranges from fashion inspiration to purchase research to looking for care instructions.\n\nContrast that with \"buy schott nyc perfecto leather jacket size 42\" at maybe 30 searches per month. Every single person typing that query is ready to hand over their credit card. The conversion rate gap between these two queries can be 20x or more.\n\nMost keyword tools sort by volume by default. This trains store owners to chase the biggest numbers, which often means the vaguest, most competitive, and least converting terms. Flipping this default, sorting by estimated revenue instead, changes which keywords you prioritize entirely. Our topic on [search intent for ecommerce](/academy/search-intent-for-ecommerce) covers the foundational framework behind these intent categories.",
          items: [
            "High-volume keywords often have mixed intent, splitting traffic between buyers and browsers",
            "Conversion rates for specific product keywords run 3-8%, versus 0.1-0.5% for generic head terms",
            "A keyword's revenue potential is volume multiplied by CTR multiplied by conversion rate multiplied by AOV",
          ],
        },
        {
          title: "The Revenue-Per-Keyword Calculation",
          content:
            "Here is the formula we use for every keyword decision: Revenue = Monthly Search Volume x Expected CTR x Conversion Rate x Average Order Value.\n\nLet's run two real examples. Keyword A: \"running shoes\" with 201,000 monthly searches. If you rank position 5 (roughly 4% CTR), with a 0.3% conversion rate and a $120 AOV, that gives you: 201,000 x 0.04 x 0.003 x 120 = $2,894/month.\n\nKeyword B: \"brooks ghost 15 women's size 9\" with 320 monthly searches. At position 2 (roughly 12% CTR), with a 7% conversion rate and the same $120 AOV, that gives you: 320 x 0.12 x 0.07 x 120 = $322/month from a single long-tail keyword.\n\nNow consider this: your store probably has 500+ product pages. If each captures just two or three long-tail keywords like Keyword B, the total revenue from long-tail terms dwarfs what you'd get from the single head term, with far less competition and much faster ranking timelines.",
          tip: "Build a spreadsheet that calculates revenue per keyword automatically. Plug in your actual conversion rates from Google Analytics by page type, product pages typically convert 3-5x higher than category pages for organic traffic.",
        },
        {
          title: "How to Score Keywords by Purchase Intent",
          content:
            "We classify ecommerce keywords into four intent tiers. Tier 1 (highest intent): queries containing specific product names, SKUs, model numbers, or exact product attributes plus \"buy,\" \"order,\" or \"price.\" These convert at 5-10%.\n\nTier 2 (comparison intent): queries with modifiers like \"best,\" \"vs,\" \"review,\" \"top 10,\" or \"compared to.\" These shoppers have purchase intent but haven't decided on a specific product. Conversion rates run 2-4%, and the winning move is category pages or buying guides that funnel traffic to products.\n\nTier 3 (solution intent): queries describing a problem or use case, like \"waterproof jacket for hiking in rain\" or \"comfortable office chair for back pain.\" The searcher wants a product but doesn't know which category to look in. Conversion rates run 1-3%, and filtered category pages work well here.\n\nTier 4 (informational): queries starting with \"how to,\" \"what is,\" \"why does,\" or general topic terms. Conversion rates are below 0.5%. These have SEO value for building topical authority, but they should never be prioritized over Tier 1-3 keywords unless you've already captured the commercial terms.",
          image: {
            src: "/images/academy/buyer-intent-tiers.svg",
            alt: "Pyramid diagram showing four keyword intent tiers from highest conversion Tier 1 buy-now keywords at the top to lowest conversion Tier 4 informational keywords at the bottom",
            caption: "Higher intent tiers convert at dramatically higher rates. A Tier 1 keyword at 200 monthly searches often outearns a Tier 4 keyword at 5,000 searches.",
          },
          items: [
            "Tier 1 (buy now): product name + buy/price/order, target with product pages",
            "Tier 2 (comparing): best/vs/review/top, target with category pages or comparison content",
            "Tier 3 (solution seeking): problem or use-case descriptions, target with filtered category pages",
            "Tier 4 (learning): how-to/what-is/guide, target with blog content that links to products",
          ],
          callout: {
            title: "Intent vs. Revenue",
            text: "A furniture store's product page for a specific oak table ranked for 23 long-tail Tier 1 keywords (380 visits/mo) and generated $8,900/mo, while their head-term category page (2,800 visits/mo) produced only $4,200/mo.",
          },
        },
        {
          title: "Commercial Modifiers That Signal Purchase Intent",
          content:
            "Certain words added to a base keyword dramatically increase purchase probability. We track these modifiers in every keyword research project because they're the fastest way to identify high-converting terms that competitors overlook.\n\nTransactional modifiers include: buy, order, purchase, shop, deal, discount, coupon, sale, free shipping, price, cost, cheap, affordable, and where to buy. When someone adds \"buy\" or \"price\" to a product query, their intent is unmistakable.\n\nComparison modifiers include: best, top, vs, versus, compared, review, reviews, rated, recommended, and alternative to. These signal a shopper who is close to buying but weighing options. Category pages and comparison content capture this traffic effectively.\n\nSpecification modifiers include: size, color, material, model number, year, dimensions, weight, and compatibility terms. These narrow the searcher to a very specific product variant and convert exceptionally well when matched to properly optimized product pages.\n\nUse-case modifiers like \"for hiking,\" \"for office,\" \"for kids,\" \"for beginners\" reveal the buyer's situation and let you match them to the right product subset. These work well with filtered category pages.",
          tip: "Create a modifier library for your niche. List every transactional, comparison, specification, and use-case modifier relevant to your products. Cross-reference these with your seed keywords to generate hundreds of high-intent long-tail variations.",
        },
        {
          title: "Real Examples: Low Volume Beating High Volume",
          content:
            "A home furniture client of ours ranked on page one for \"dining table\" (74,000 monthly searches). The page got 2,800 organic visits per month but generated only $4,200 in attributable revenue, a revenue-per-visit of $1.50.\n\nMeanwhile, their product page for a specific extendable oak dining table ranked for 23 long-tail variations averaging 40-150 searches each. Combined monthly traffic: 380 visits. Combined monthly revenue: $8,900, a revenue-per-visit of $23.42.\n\nWe see this pattern consistently. An outdoor gear store generates 60% of its organic revenue from keywords with fewer than 500 monthly searches each. A supplement brand gets its highest ROI from branded ingredient queries that most keyword tools flag as \"low volume.\"\n\nThe takeaway is not that high-volume keywords are worthless, they build brand visibility and capture top-of-funnel traffic. But for revenue generation, the long tail with clear purchase intent outperforms head terms almost every time. The strategic move is allocating your effort proportionally: 70% of your SEO work should target the terms that drive 70% of your revenue.",
          items: [
            "Track revenue per organic visit at the page level, not just total traffic",
            "Low-volume product-specific keywords often deliver 10-20x higher revenue per visit",
            "Allocate SEO effort proportionally to revenue potential, not search volume",
          ],
        },
        {
          title: "Putting Intent Analysis Into Practice",
          content:
            "Start by pulling your top 100 organic landing pages by revenue from analytics. For each page, identify the primary keyword driving traffic (GSC makes this straightforward). Tag each keyword with its intent tier.\n\nYou will likely find that your highest-revenue pages are driven by Tier 1 and Tier 2 keywords, even if those pages don't get the most traffic. This confirms where to focus your optimization efforts.\n\nNext, look at your keyword research pipeline. Every new keyword target should go through the intent scoring process before it gets prioritized. A Tier 1 keyword with 200 monthly searches should be worked on before a Tier 4 keyword with 5,000 monthly searches.\n\nFinally, use intent analysis to improve existing pages. If a category page ranks for a Tier 2 keyword but converts poorly, check whether the page content matches comparison intent, does it help shoppers decide between options, or does it just list products? Aligning page content with keyword intent is one of the fastest ways to increase conversion rates without additional traffic. Once you have scored your keywords, [keyword mapping for stores](/academy/keyword-mapping-for-stores) helps you assign each term to the right page. For a complete overview of these strategies, see our [ecommerce SEO strategy](/blog/ecommerce-seo-strategy) guide.",
        },
      ],
      navLabels: {
        previous: "Keyword Research for Ecommerce",
        next: "Product vs. Category Keywords",
      },
    },
    de: {
      badge: "Keyword-Recherche",
      heading: "Kaufabsicht vs. Suchvolumen",
      intro:
        "Ein Keyword mit 50 monatlichen Suchen und einer Konversionsrate von 6% generiert mehr Umsatz als eines mit 10.000 Suchen und einer Konversionsrate von 0,1%. Fuer E-Commerce-Shops ist das Verstaendnis der Kaufabsicht die profitabelste Faehigkeit in der Keyword-Recherche.",
      readTime: "8 Min. Lesezeit",
      sections: [
        {
          title: "Warum Volumen allein irrefuehrend ist",
          content:
            "Suchvolumen sagt Ihnen, wie viele Menschen eine Suchanfrage pro Monat bei Google eingeben. Es sagt nichts darueber aus, ob diese Menschen kaufen, vergleichen, lernen oder nur stoebern wollen. Eine Anfrage wie \"Lederjacke\" bekommt rund 135.000 monatliche Suchen, aber die Absicht dahinter reicht von Modeinspiration ueber Kaufrecherche bis hin zur Suche nach Pflegehinweisen.\n\nVergleichen Sie das mit \"Schott NYC Perfecto Lederjacke kaufen Groesse 42\" mit vielleicht 30 Suchen pro Monat. Jede einzelne Person, die diese Anfrage eingibt, ist bereit zu kaufen. Der Unterschied in der Konversionsrate zwischen diesen beiden Anfragen kann 20x oder mehr betragen.\n\nDie meisten Keyword-Tools sortieren standardmaessig nach Volumen. Das trainiert Shop-Besitzer dazu, den groessten Zahlen hinterherzujagen, was oft die vagesten, wettbewerbsintensivsten und am schlechtesten konvertierenden Begriffe bedeutet. Diese Standardeinstellung umzukehren, stattdessen nach geschaetztem Umsatz zu sortieren, veraendert voellig, welche Keywords Sie priorisieren. Unser Leitfaden zu [Suchintention f\u00fcr Ecommerce](/academy/search-intent-for-ecommerce) behandelt dies im Detail.",
          items: [
            "Keywords mit hohem Volumen haben oft gemischte Absicht und teilen Traffic zwischen Kaeufern und Stoebernden auf",
            "Konversionsraten fuer spezifische Produkt-Keywords liegen bei 3-8%, gegenueber 0,1-0,5% fuer generische Head-Terms",
            "Das Umsatzpotenzial eines Keywords ist Volumen mal CTR mal Konversionsrate mal AOV",
          ],
        },
        {
          title: "Die Umsatz-pro-Keyword-Berechnung",
          content:
            "Hier ist die Formel, die wir fuer jede Keyword-Entscheidung verwenden: Umsatz = Monatliches Suchvolumen x Erwartete CTR x Konversionsrate x Durchschnittlicher Bestellwert.\n\nLassen Sie uns zwei reale Beispiele durchrechnen. Keyword A: \"Laufschuhe\" mit 201.000 monatlichen Suchen. Bei Position 5 (ungefaehr 4% CTR), mit einer Konversionsrate von 0,3% und einem AOV von 120 EUR ergibt das: 201.000 x 0,04 x 0,003 x 120 = 2.894 EUR/Monat.\n\nKeyword B: \"Brooks Ghost 15 Damen Groesse 39\" mit 320 monatlichen Suchen. Bei Position 2 (ungefaehr 12% CTR), mit einer Konversionsrate von 7% und demselben AOV von 120 EUR ergibt das: 320 x 0,12 x 0,07 x 120 = 322 EUR/Monat von einem einzigen Long-Tail-Keyword.\n\nBedenken Sie nun: Ihr Shop hat wahrscheinlich ueber 500 Produktseiten. Wenn jede nur zwei oder drei Long-Tail-Keywords wie Keyword B erfasst, uebersteigt der Gesamtumsatz aus Long-Tail-Begriffen bei Weitem das, was Sie vom einzelnen Head-Term bekommen, bei deutlich weniger Wettbewerb und viel schnelleren Ranking-Zeitrahmen.",
          tip: "Erstellen Sie eine Tabelle, die den Umsatz pro Keyword automatisch berechnet. Tragen Sie Ihre tatsaechlichen Konversionsraten aus Google Analytics nach Seitentyp ein, Produktseiten konvertieren fuer organischen Traffic typischerweise 3-5x hoeher als Kategorieseiten.",
        },
        {
          title: "Wie man Keywords nach Kaufabsicht bewertet",
          content:
            "Wir klassifizieren E-Commerce-Keywords in vier Absichtsstufen. Stufe 1 (hoechste Absicht): Anfragen mit spezifischen Produktnamen, Artikelnummern, Modellnummern oder exakten Produktattributen plus \"kaufen\", \"bestellen\" oder \"Preis\". Diese konvertieren mit 5-10%.\n\nStufe 2 (Vergleichsabsicht): Anfragen mit Modifikatoren wie \"beste\", \"vs\", \"Test\", \"Top 10\" oder \"verglichen mit\". Diese Kaeufer haben Kaufabsicht, haben sich aber noch nicht fuer ein bestimmtes Produkt entschieden. Konversionsraten liegen bei 2-4%, und die beste Strategie sind Kategorieseiten oder Kaufratgeber, die Traffic zu Produkten lenken.\n\nStufe 3 (Loesungsabsicht): Anfragen, die ein Problem oder einen Anwendungsfall beschreiben, wie \"wasserdichte Jacke fuer Wandern bei Regen\" oder \"bequemer Buerostuhl bei Rueckenschmerzen\". Der Suchende will ein Produkt, weiss aber nicht, welche Kategorie passt. Konversionsraten liegen bei 1-3%, und gefilterte Kategorieseiten funktionieren hier gut.\n\nStufe 4 (informationell): Anfragen, die mit \"wie\", \"was ist\", \"warum\" beginnen, oder allgemeine Themenbegriffe. Konversionsraten liegen unter 0,5%. Diese haben SEO-Wert fuer den Aufbau thematischer Autoritaet, sollten aber nie vor Stufe-1-3-Keywords priorisiert werden, es sei denn, Sie haben die kommerziellen Begriffe bereits abgedeckt.",
          items: [
            "Stufe 1 (sofort kaufen): Produktname + kaufen/Preis/bestellen, mit Produktseiten targeten",
            "Stufe 2 (vergleichen): beste/vs/Test/Top, mit Kategorieseiten oder Vergleichsinhalten targeten",
            "Stufe 3 (Loesung suchen): Problem- oder Anwendungsbeschreibungen, mit gefilterten Kategorieseiten targeten",
            "Stufe 4 (lernen): Wie-geht-das/Was-ist/Ratgeber, mit Blog-Content targeten, der auf Produkte verlinkt",
          ],
          image: {
            src: "/images/academy/de/buyer-intent-tiers.svg",
            alt: "Pyramidendiagramm mit vier Keyword-Intentionsstufen",
            caption: "Höhere Intentionsstufen konvertieren deutlich besser. Ein Stufe-1-Keyword mit 200 monatlichen Suchen bringt oft mehr Umsatz als ein Stufe-4-Keyword mit 5.000 Suchen.",
          },
          callout: {
            title: "Intention vs. Umsatz",
            text: "Ein Möbelshop kann mit einem Stufe-1-Keyword bei 200 Suchen mehr Umsatz erzielen als mit einem Stufe-4-Keyword bei 5.000 Suchen. Intention schlägt Volumen bei der Revenue-Priorisierung.",
          },
        },
        {
          title: "Kommerzielle Modifikatoren, die Kaufabsicht signalisieren",
          content:
            "Bestimmte Woerter, die einem Basis-Keyword hinzugefuegt werden, erhoehen die Kaufwahrscheinlichkeit dramatisch. Wir verfolgen diese Modifikatoren in jedem Keyword-Recherche-Projekt, weil sie der schnellste Weg sind, hochkonvertierende Begriffe zu identifizieren, die Wettbewerber uebersehen.\n\nTransaktionale Modifikatoren umfassen: kaufen, bestellen, Shop, Angebot, Rabatt, Gutschein, Sale, kostenloser Versand, Preis, Kosten, guenstig und wo kaufen. Wenn jemand \"kaufen\" oder \"Preis\" zu einer Produktanfrage hinzufuegt, ist die Absicht unverkennbar.\n\nVergleichsmodifikatoren umfassen: beste, Top, vs, versus, verglichen, Test, Testbericht, Bewertung, empfohlen und Alternative zu. Diese signalisieren einen Kaeufer, der kurz vor dem Kauf steht, aber Optionen abwaegt. Kategorieseiten und Vergleichsinhalte fangen diesen Traffic effektiv auf.\n\nSpezifikationsmodifikatoren umfassen: Groesse, Farbe, Material, Modellnummer, Jahrgang, Abmessungen, Gewicht und Kompatibilitaetsbegriffe. Diese grenzen den Suchenden auf eine sehr spezifische Produktvariante ein und konvertieren aussergewoehnlich gut, wenn sie mit richtig optimierten Produktseiten abgeglichen werden.\n\nAnwendungsmodifikatoren wie \"fuer Wandern\", \"fuers Buero\", \"fuer Kinder\", \"fuer Anfaenger\" zeigen die Situation des Kaerufers und lassen Sie ihn zur richtigen Produktauswahl leiten. Diese funktionieren gut mit gefilterten Kategorieseiten.",
          tip: "Erstellen Sie eine Modifikator-Bibliothek fuer Ihre Nische. Listen Sie jeden transaktionalen, vergleichenden, spezifikations- und anwendungsbezogenen Modifikator auf, der fuer Ihre Produkte relevant ist. Kreuzen Sie diese mit Ihren Seed-Keywords, um Hunderte hochintentionaler Long-Tail-Variationen zu generieren.",
        },
        {
          title: "Echte Beispiele: Niedriges Volumen schlaegt hohes Volumen",
          content:
            "Ein Wohnmoebel-Kunde von uns rankte auf Seite eins fuer \"Esstisch\" (74.000 monatliche Suchen). Die Seite bekam 2.800 organische Besuche pro Monat, generierte aber nur 4.200 EUR an zuordenbarem Umsatz, ein Umsatz-pro-Besuch von 1,50 EUR.\n\nGleichzeitig rankte deren Produktseite fuer einen bestimmten ausziehbaren Eichen-Esstisch fuer 23 Long-Tail-Variationen mit durchschnittlich 40-150 Suchen. Kombinierter monatlicher Traffic: 380 Besuche. Kombinierter monatlicher Umsatz: 8.900 EUR, ein Umsatz-pro-Besuch von 23,42 EUR.\n\nWir sehen dieses Muster durchgehend. Ein Outdoor-Ausruestungsladen generiert 60% seines organischen Umsatzes aus Keywords mit jeweils weniger als 500 monatlichen Suchen. Eine Nahrungsergaenzungsmittel-Marke erzielt ihren hoechsten ROI aus Markeninhaltsstoff-Anfragen, die die meisten Keyword-Tools als \"niedriges Volumen\" kennzeichnen.\n\nDie Erkenntnis ist nicht, dass Keywords mit hohem Volumen wertlos sind, sie bauen Markensichtbarkeit auf und fangen Top-of-Funnel-Traffic ein. Aber fuer die Umsatzgenerierung uebertrifft der Long Tail mit klarer Kaufabsicht Head-Terms fast jedes Mal. Der strategische Zug ist, Ihren Aufwand proportional zu verteilen: 70% Ihrer SEO-Arbeit sollten auf die Begriffe abzielen, die 70% Ihres Umsatzes treiben.",
          items: [
            "Verfolgen Sie Umsatz pro organischem Besuch auf Seitenebene, nicht nur Gesamt-Traffic",
            "Keywords mit niedrigem Volumen und Produktbezug liefern oft 10-20x hoeheren Umsatz pro Besuch",
            "Verteilen Sie SEO-Aufwand proportional zum Umsatzpotenzial, nicht zum Suchvolumen",
          ],
        },
        {
          title: "Absichtsanalyse in die Praxis umsetzen",
          content:
            "Beginnen Sie damit, Ihre Top-100-organischen Landingpages nach Umsatz aus der Analytics zu ziehen. Identifizieren Sie fuer jede Seite das primaere Keyword, das den Traffic treibt (GSC macht das unkompliziert). Taggen Sie jedes Keyword mit seiner Absichtsstufe.\n\nSie werden wahrscheinlich feststellen, dass Ihre Seiten mit dem hoechsten Umsatz von Stufe-1- und Stufe-2-Keywords getrieben werden, auch wenn diese Seiten nicht den meisten Traffic bekommen. Das bestaetigt, worauf Sie Ihre Optimierungsbemuehungen konzentrieren sollten.\n\nSchauen Sie sich als Naechstes Ihre Keyword-Recherche-Pipeline an. Jedes neue Keyword-Ziel sollte den Absichtsbewertungsprozess durchlaufen, bevor es priorisiert wird. Ein Stufe-1-Keyword mit 200 monatlichen Suchen sollte vor einem Stufe-4-Keyword mit 5.000 monatlichen Suchen bearbeitet werden.\n\nVerwenden Sie schliesslich die Absichtsanalyse, um bestehende Seiten zu verbessern. Wenn eine Kategorieseite fuer ein Stufe-2-Keyword rankt, aber schlecht konvertiert, pruefen Sie, ob der Seiteninhalt zur Vergleichsabsicht passt, hilft er Kaeufern, zwischen Optionen zu entscheiden, oder listet er nur Produkte auf? Die Abstimmung von Seiteninhalt und Keyword-Absicht ist einer der schnellsten Wege, Konversionsraten ohne zusaetzlichen Traffic zu steigern. Sobald Sie Ihre Keywords bewertet haben, hilft Ihnen [Keyword-Mapping f\u00fcr Shops](/academy/keyword-mapping-for-stores), jeden Begriff der richtigen Seite zuzuordnen. F\u00fcr einen tieferen Einblick lesen Sie unseren Leitfaden zu [Ecommerce-SEO-Strategie](/blog/ecommerce-seo-strategy).",
        },
      ],
      navLabels: {
        previous: "Keyword-Recherche fuer E-Commerce",
        next: "Produkt- vs. Kategorie-Keywords",
      },
    },
    fr: {
      badge: "Recherche de mots-cles",
      heading: "Intention d'achat vs. volume de recherche",
      intro:
        "Un mot-cle avec 50 recherches mensuelles et un taux de conversion de 6% genere plus de revenus qu'un mot-cle avec 10 000 recherches et un taux de conversion de 0,1%. Pour les boutiques e-commerce, comprendre l'intention d'achat est la competence la plus rentable en recherche de mots-cles.",
      readTime: "8 min de lecture",
      sections: [
        {
          title: "Pourquoi le volume seul est trompeur",
          content:
            "Le volume de recherche vous dit combien de personnes saisissent une requete dans Google chaque mois. Il ne dit rien sur le fait que ces personnes veulent acheter, comparer, apprendre ou simplement naviguer. Une requete comme \"veste en cuir\" obtient environ 135 000 recherches mensuelles, mais l'intention derriere va de l'inspiration mode a la recherche d'achat en passant par les conseils d'entretien.\n\nComparez avec \"acheter veste cuir Schott NYC Perfecto taille 42\" a peut-etre 30 recherches par mois. Chaque personne qui tape cette requete est prete a sortir sa carte bancaire. L'ecart de taux de conversion entre ces deux requetes peut etre de 20x ou plus.\n\nLa plupart des outils de mots-cles trient par volume par defaut. Cela conditionne les proprietaires de boutiques a courir apres les plus gros chiffres, ce qui signifie souvent les termes les plus vagues, les plus competitifs et les moins convertissants. Inverser ce defaut, trier par revenus estimes a la place, change completement quels mots-cles vous priorisez. Notre sujet sur l'[intention de recherche pour l'e-commerce](/academy/search-intent-for-ecommerce) couvre le cadre fondamental derrière ces catégories d'intention.",
          items: [
            "Les mots-cles a fort volume ont souvent une intention mixte, repartissant le trafic entre acheteurs et simples visiteurs",
            "Les taux de conversion pour les mots-cles produits specifiques oscillent entre 3-8%, contre 0,1-0,5% pour les termes generiques",
            "Le potentiel de revenus d'un mot-cle est volume multiplie par CTR multiplie par taux de conversion multiplie par panier moyen",
          ],
        },
        {
          title: "Le calcul du revenu par mot-cle",
          content:
            "Voici la formule que nous utilisons pour chaque decision de mot-cle : Revenu = Volume de recherche mensuel x CTR attendu x Taux de conversion x Panier moyen.\n\nPrenons deux exemples reels. Mot-cle A : \"chaussures de course\" avec 201 000 recherches mensuelles. En position 5 (environ 4% de CTR), avec un taux de conversion de 0,3% et un panier moyen de 120 EUR, cela donne : 201 000 x 0,04 x 0,003 x 120 = 2 894 EUR/mois.\n\nMot-cle B : \"Brooks Ghost 15 femme pointure 39\" avec 320 recherches mensuelles. En position 2 (environ 12% de CTR), avec un taux de conversion de 7% et le meme panier moyen de 120 EUR, cela donne : 320 x 0,12 x 0,07 x 120 = 322 EUR/mois pour un seul mot-cle longue traine.\n\nConsiderez maintenant ceci : votre boutique a probablement plus de 500 pages produits. Si chacune capture seulement deux ou trois mots-cles longue traine comme le mot-cle B, le revenu total des termes longue traine depasse largement ce que vous obtiendriez du seul terme generique, avec beaucoup moins de concurrence et des delais de positionnement bien plus rapides.",
          tip: "Construisez un tableur qui calcule automatiquement le revenu par mot-cle. Integrez vos taux de conversion reels depuis Google Analytics par type de page, les pages produits convertissent generalement 3-5x plus que les pages categories pour le trafic organique.",
        },
        {
          title: "Comment evaluer les mots-cles par intention d'achat",
          content:
            "Nous classifions les mots-cles e-commerce en quatre niveaux d'intention. Niveau 1 (intention la plus forte) : requetes contenant des noms de produits specifiques, references, numeros de modele ou attributs exacts du produit plus \"acheter\", \"commander\" ou \"prix\". Ceux-ci convertissent a 5-10%.\n\nNiveau 2 (intention de comparaison) : requetes avec des modificateurs comme \"meilleur\", \"vs\", \"avis\", \"top 10\" ou \"compare a\". Ces acheteurs ont une intention d'achat mais n'ont pas encore decide d'un produit specifique. Les taux de conversion oscillent entre 2-4%, et la strategie gagnante est d'utiliser des pages categories ou des guides d'achat qui orientent le trafic vers les produits.\n\nNiveau 3 (intention de solution) : requetes decrivant un probleme ou un cas d'usage, comme \"veste impermeable pour randonnee sous la pluie\" ou \"chaise de bureau confortable pour mal de dos\". Le chercheur veut un produit mais ne sait pas dans quelle categorie regarder. Les taux de conversion oscillent entre 1-3%, et les pages categories filtrees fonctionnent bien ici.\n\nNiveau 4 (informationnel) : requetes commencant par \"comment\", \"qu'est-ce que\", \"pourquoi\" ou termes thematiques generaux. Les taux de conversion sont inferieurs a 0,5%. Ceux-ci ont une valeur SEO pour construire l'autorite thematique, mais ne devraient jamais etre priorises par rapport aux mots-cles de niveaux 1 a 3, sauf si vous avez deja capture les termes commerciaux.",
          items: [
            "Niveau 1 (achat immediat) : nom du produit + acheter/prix/commander, cibler avec des pages produits",
            "Niveau 2 (comparaison) : meilleur/vs/avis/top, cibler avec des pages categories ou du contenu comparatif",
            "Niveau 3 (recherche de solution) : descriptions de problemes ou cas d'usage, cibler avec des pages categories filtrees",
            "Niveau 4 (apprentissage) : comment/qu'est-ce que/guide, cibler avec du contenu blog qui renvoie vers les produits",
          ],
          image: {
            src: "/images/academy/fr/buyer-intent-tiers.svg",
            alt: "Pyramidendiagramm mit vier Keyword-Intentionsstufen",
            caption: "Höhere Intentionsstufen konvertieren deutlich besser. Ein Stufe-1-Keyword mit 200 monatlichen Suchen bringt oft mehr Umsatz als ein Stufe-4-Keyword mit 5.000 Suchen.",
          },
          callout: {
            title: "Intention vs. Umsatz",
            text: "Ein Möbelshop kann mit einem Stufe-1-Keyword bei 200 Suchen mehr Umsatz erzielen als mit einem Stufe-4-Keyword bei 5.000 Suchen. Intention schlägt Volumen bei der Revenue-Priorisierung.",
          },
        },
        {
          title: "Modificateurs commerciaux qui signalent l'intention d'achat",
          content:
            "Certains mots ajoutes a un mot-cle de base augmentent considerablement la probabilite d'achat. Nous suivons ces modificateurs dans chaque projet de recherche de mots-cles car ils sont le moyen le plus rapide d'identifier des termes a forte conversion que les concurrents negligent.\n\nLes modificateurs transactionnels incluent : acheter, commander, boutique, offre, reduction, coupon, soldes, livraison gratuite, prix, cout, pas cher, abordable et ou acheter. Quand quelqu'un ajoute \"acheter\" ou \"prix\" a une requete produit, son intention est claire.\n\nLes modificateurs de comparaison incluent : meilleur, top, vs, versus, compare, avis, test, note, recommande et alternative a. Ceux-ci signalent un acheteur proche de l'achat mais qui evalue ses options. Les pages categories et le contenu comparatif captent efficacement ce trafic.\n\nLes modificateurs de specification incluent : taille, couleur, materiau, numero de modele, annee, dimensions, poids et termes de compatibilite. Ceux-ci resserrent la recherche vers une variante tres specifique et convertissent exceptionnellement bien lorsqu'ils sont apparies a des pages produits correctement optimisees.\n\nLes modificateurs de cas d'usage comme \"pour la randonnee\", \"pour le bureau\", \"pour enfants\", \"pour debutants\" revelent la situation de l'acheteur et vous permettent de le diriger vers le bon sous-ensemble de produits. Ceux-ci fonctionnent bien avec des pages categories filtrees.",
          tip: "Creez une bibliotheque de modificateurs pour votre niche. Listez chaque modificateur transactionnel, comparatif, de specification et de cas d'usage pertinent pour vos produits. Croisez-les avec vos mots-cles de base pour generer des centaines de variations longue traine a forte intention.",
        },
        {
          title: "Exemples reels : le faible volume qui bat le fort volume",
          content:
            "Un client dans l'ameublement se positionnait en premiere page pour \"table a manger\" (74 000 recherches mensuelles). La page recevait 2 800 visites organiques par mois mais ne generait que 4 200 EUR de revenus attribuables, un revenu par visite de 1,50 EUR.\n\nParallelement, leur page produit pour une table a manger extensible specifique en chene se positionnait sur 23 variations longue traine avec une moyenne de 40 a 150 recherches chacune. Trafic mensuel combine : 380 visites. Revenu mensuel combine : 8 900 EUR, un revenu par visite de 23,42 EUR.\n\nNous observons ce schema regulierement. Un magasin d'equipement outdoor genere 60% de son chiffre d'affaires organique a partir de mots-cles avec moins de 500 recherches mensuelles chacun. Une marque de complements alimentaires obtient son meilleur ROI a partir de requetes sur des ingredients de marque que la plupart des outils signalent comme \"faible volume\".\n\nLa lecon n'est pas que les mots-cles a fort volume sont inutiles, ils construisent la visibilite de marque et captent le trafic haut de funnel. Mais pour la generation de revenus, la longue traine avec une intention d'achat claire surpasse les termes generiques presque a chaque fois. Le mouvement strategique est d'allouer vos efforts proportionnellement : 70% de votre travail SEO devrait cibler les termes qui generent 70% de votre chiffre d'affaires.",
          items: [
            "Suivez le revenu par visite organique au niveau de la page, pas seulement le trafic total",
            "Les mots-cles a faible volume specifiques aux produits delivrent souvent 10-20x plus de revenu par visite",
            "Allouez l'effort SEO proportionnellement au potentiel de revenus, pas au volume de recherche",
          ],
        },
        {
          title: "Mettre l'analyse d'intention en pratique",
          content:
            "Commencez par extraire vos 100 meilleures landing pages organiques par revenu depuis vos analytics. Pour chaque page, identifiez le mot-cle principal qui genere le trafic (la GSC rend cela simple). Taguez chaque mot-cle avec son niveau d'intention.\n\nVous constaterez probablement que vos pages a plus fort revenu sont portees par des mots-cles de niveaux 1 et 2, meme si ces pages ne recoivent pas le plus de trafic. Cela confirme ou concentrer vos efforts d'optimisation.\n\nEnsuite, examinez votre pipeline de recherche de mots-cles. Chaque nouvelle cible de mot-cle devrait passer par le processus d'evaluation d'intention avant d'etre priorisee. Un mot-cle de niveau 1 avec 200 recherches mensuelles devrait etre travaille avant un mot-cle de niveau 4 avec 5 000 recherches mensuelles.\n\nEnfin, utilisez l'analyse d'intention pour ameliorer les pages existantes. Si une page categorie se positionne sur un mot-cle de niveau 2 mais convertit mal, verifiez si le contenu de la page correspond a l'intention de comparaison, aide-t-il les acheteurs a decider entre les options, ou se contente-t-il de lister des produits ? Aligner le contenu de la page avec l'intention du mot-cle est l'un des moyens les plus rapides d'augmenter les taux de conversion sans trafic supplementaire. Une fois vos mots-clés évalués, le [mapping de mots-clés pour les boutiques](/academy/keyword-mapping-for-stores) vous aide à attribuer chaque terme à la bonne page. Pour une vue d'ensemble complète de ces stratégies, consultez notre guide sur la [stratégie SEO e-commerce](/blog/ecommerce-seo-strategy).",
        },
      ],
      navLabels: {
        previous: "Recherche de mots-cles pour le e-commerce",
        next: "Mots-cles produit vs. categorie",
      },
    },
    es: {
      badge: "Investigacion de palabras clave",
      heading: "Intencion de compra vs. volumen de busqueda",
      intro:
        "Una palabra clave con 50 busquedas mensuales y una tasa de conversion del 6% genera mas ingresos que una con 10.000 busquedas y una tasa de conversion del 0,1%. Para tiendas ecommerce, entender la intencion de compra es la habilidad mas rentable en la investigacion de palabras clave.",
      readTime: "8 min de lectura",
      sections: [
        {
          title: "Por que el volumen por si solo es enganoso",
          content:
            "El volumen de busqueda te dice cuantas personas escriben una consulta en Google cada mes. No dice nada sobre si esas personas quieren comprar, comparar, aprender o simplemente navegar. Una consulta como \"chaqueta de cuero\" obtiene unas 135.000 busquedas mensuales, pero la intencion detras va desde inspiracion de moda hasta investigacion de compra y busqueda de instrucciones de cuidado.\n\nCompara eso con \"comprar chaqueta cuero Schott NYC Perfecto talla 42\" con quizas 30 busquedas al mes. Cada persona que escribe esa consulta esta lista para sacar su tarjeta de credito. La diferencia en tasa de conversion entre estas dos consultas puede ser de 20x o mas.\n\nLa mayoria de herramientas de palabras clave ordenan por volumen por defecto. Esto entrena a los duenos de tiendas a perseguir los numeros mas grandes, lo que a menudo significa los terminos mas vagos, mas competitivos y que menos convierten. Invertir este orden por defecto, ordenar por ingresos estimados en su lugar, cambia completamente que palabras clave priorizas. Nuestro tema sobre [intencion de busqueda para ecommerce](/academy/search-intent-for-ecommerce) cubre el marco fundamental detras de estas categorias de intencion.",
          items: [
            "Las palabras clave de alto volumen a menudo tienen intencion mixta, dividiendo el trafico entre compradores y curiosos",
            "Las tasas de conversion para palabras clave de productos especificos van del 3-8%, frente al 0,1-0,5% para terminos genericos",
            "El potencial de ingresos de una palabra clave es volumen por CTR por tasa de conversion por valor medio de pedido",
          ],
        },
        {
          title: "El calculo de ingresos por palabra clave",
          content:
            "Esta es la formula que usamos para cada decision de palabras clave: Ingresos = Volumen de busqueda mensual x CTR esperado x Tasa de conversion x Valor medio de pedido.\n\nVeamos dos ejemplos reales. Palabra clave A: \"zapatillas de correr\" con 201.000 busquedas mensuales. En posicion 5 (aproximadamente 4% CTR), con una tasa de conversion del 0,3% y un AOV de 120 EUR, eso da: 201.000 x 0,04 x 0,003 x 120 = 2.894 EUR/mes.\n\nPalabra clave B: \"Brooks Ghost 15 mujer talla 39\" con 320 busquedas mensuales. En posicion 2 (aproximadamente 12% CTR), con una tasa de conversion del 7% y el mismo AOV de 120 EUR, eso da: 320 x 0,12 x 0,07 x 120 = 322 EUR/mes de una sola palabra clave de cola larga.\n\nAhora considera esto: tu tienda probablemente tiene mas de 500 paginas de producto. Si cada una captura solo dos o tres palabras clave de cola larga como la palabra clave B, los ingresos totales de terminos de cola larga superan con creces lo que obtendrias del unico termino generico, con mucha menos competencia y plazos de posicionamiento mucho mas rapidos.",
          tip: "Construye una hoja de calculo que calcule automaticamente los ingresos por palabra clave. Introduce tus tasas de conversion reales de Google Analytics por tipo de pagina, las paginas de producto tipicamente convierten 3-5x mas que las paginas de categoria para trafico organico.",
        },
        {
          title: "Como puntuar palabras clave por intencion de compra",
          content:
            "Clasificamos las palabras clave de ecommerce en cuatro niveles de intencion. Nivel 1 (intencion mas alta): consultas que contienen nombres de productos especificos, SKUs, numeros de modelo o atributos exactos del producto mas \"comprar\", \"pedir\" o \"precio\". Estas convierten al 5-10%.\n\nNivel 2 (intencion de comparacion): consultas con modificadores como \"mejor\", \"vs\", \"opinion\", \"top 10\" o \"comparado con\". Estos compradores tienen intencion de compra pero no han decidido un producto especifico. Las tasas de conversion van del 2-4%, y la estrategia ganadora son paginas de categoria o guias de compra que canalicen el trafico hacia productos.\n\nNivel 3 (intencion de solucion): consultas que describen un problema o caso de uso, como \"chaqueta impermeable para senderismo bajo lluvia\" o \"silla de oficina comoda para dolor de espalda\". El buscador quiere un producto pero no sabe en que categoria mirar. Las tasas de conversion van del 1-3%, y las paginas de categoria filtradas funcionan bien aqui.\n\nNivel 4 (informacional): consultas que empiezan con \"como\", \"que es\", \"por que\" o terminos tematicos generales. Las tasas de conversion estan por debajo del 0,5%. Tienen valor SEO para construir autoridad tematica, pero nunca deberian priorizarse sobre palabras clave de niveles 1-3 a menos que ya hayas capturado los terminos comerciales.",
          items: [
            "Nivel 1 (compra inmediata): nombre del producto + comprar/precio/pedir, apuntar con paginas de producto",
            "Nivel 2 (comparando): mejor/vs/opinion/top, apuntar con paginas de categoria o contenido comparativo",
            "Nivel 3 (buscando solucion): descripciones de problemas o casos de uso, apuntar con paginas de categoria filtradas",
            "Nivel 4 (aprendiendo): como/que-es/guia, apuntar con contenido de blog que enlace a productos",
          ],
          image: {
            src: "/images/academy/es/buyer-intent-tiers.svg",
            alt: "Pyramidendiagramm mit vier Keyword-Intentionsstufen",
            caption: "Höhere Intentionsstufen konvertieren deutlich besser. Ein Stufe-1-Keyword mit 200 monatlichen Suchen bringt oft mehr Umsatz als ein Stufe-4-Keyword mit 5.000 Suchen.",
          },
          callout: {
            title: "Intention vs. Umsatz",
            text: "Ein Möbelshop kann mit einem Stufe-1-Keyword bei 200 Suchen mehr Umsatz erzielen als mit einem Stufe-4-Keyword bei 5.000 Suchen. Intention schlägt Volumen bei der Revenue-Priorisierung.",
          },
        },
        {
          title: "Modificadores comerciales que senalan intencion de compra",
          content:
            "Ciertas palabras anadidas a una palabra clave base aumentan dramaticamente la probabilidad de compra. Rastreamos estos modificadores en cada proyecto de investigacion de palabras clave porque son la forma mas rapida de identificar terminos de alta conversion que los competidores pasan por alto.\n\nLos modificadores transaccionales incluyen: comprar, pedir, tienda, oferta, descuento, cupon, rebajas, envio gratis, precio, coste, barato, economico y donde comprar. Cuando alguien anade \"comprar\" o \"precio\" a una consulta de producto, su intencion es inconfundible.\n\nLos modificadores de comparacion incluyen: mejor, top, vs, versus, comparado, opinion, resena, valorado, recomendado y alternativa a. Estos senalan un comprador que esta cerca de comprar pero evaluando opciones. Las paginas de categoria y el contenido comparativo capturan este trafico efectivamente.\n\nLos modificadores de especificacion incluyen: talla, color, material, numero de modelo, ano, dimensiones, peso y terminos de compatibilidad. Estos acotan al buscador a una variante muy especifica del producto y convierten excepcionalmente bien cuando se emparejan con paginas de producto correctamente optimizadas.\n\nLos modificadores de caso de uso como \"para senderismo\", \"para oficina\", \"para ninos\", \"para principiantes\" revelan la situacion del comprador y te permiten dirigirlo al subconjunto de productos adecuado. Estos funcionan bien con paginas de categoria filtradas.",
          tip: "Crea una biblioteca de modificadores para tu nicho. Lista cada modificador transaccional, comparativo, de especificacion y de caso de uso relevante para tus productos. Cruzalos con tus palabras clave semilla para generar cientos de variaciones de cola larga con alta intencion.",
        },
        {
          title: "Ejemplos reales: bajo volumen superando a alto volumen",
          content:
            "Un cliente de muebles para el hogar se posicionaba en primera pagina para \"mesa de comedor\" (74.000 busquedas mensuales). La pagina recibia 2.800 visitas organicas al mes pero generaba solo 4.200 EUR en ingresos atribuibles, un ingreso por visita de 1,50 EUR.\n\nMientras tanto, su pagina de producto para una mesa de comedor extensible de roble especifica se posicionaba para 23 variaciones de cola larga con un promedio de 40-150 busquedas cada una. Trafico mensual combinado: 380 visitas. Ingresos mensuales combinados: 8.900 EUR, un ingreso por visita de 23,42 EUR.\n\nVemos este patron consistentemente. Una tienda de equipamiento outdoor genera el 60% de sus ingresos organicos de palabras clave con menos de 500 busquedas mensuales cada una. Una marca de suplementos obtiene su mayor ROI de consultas sobre ingredientes de marca que la mayoria de herramientas senalan como \"bajo volumen\".\n\nLa leccion no es que las palabras clave de alto volumen sean inutiles, construyen visibilidad de marca y capturan trafico de la parte alta del embudo. Pero para generar ingresos, la cola larga con clara intencion de compra supera a los terminos genericos casi siempre. El movimiento estrategico es asignar tu esfuerzo proporcionalmente: el 70% de tu trabajo SEO deberia apuntar a los terminos que generan el 70% de tus ingresos.",
          items: [
            "Rastrea los ingresos por visita organica a nivel de pagina, no solo el trafico total",
            "Las palabras clave de bajo volumen especificas de producto a menudo entregan 10-20x mas ingresos por visita",
            "Asigna el esfuerzo SEO proporcionalmente al potencial de ingresos, no al volumen de busqueda",
          ],
        },
        {
          title: "Poniendo el analisis de intencion en practica",
          content:
            "Empieza extrayendo tus 100 mejores landing pages organicas por ingresos desde analytics. Para cada pagina, identifica la palabra clave principal que genera el trafico (GSC lo hace sencillo). Etiqueta cada palabra clave con su nivel de intencion.\n\nProbablemente encontraras que tus paginas de mayor ingreso estan impulsadas por palabras clave de niveles 1 y 2, aunque esas paginas no reciban el mayor trafico. Esto confirma donde concentrar tus esfuerzos de optimizacion.\n\nA continuacion, revisa tu pipeline de investigacion de palabras clave. Cada nuevo objetivo de palabra clave deberia pasar por el proceso de evaluacion de intencion antes de ser priorizado. Una palabra clave de nivel 1 con 200 busquedas mensuales deberia trabajarse antes que una de nivel 4 con 5.000 busquedas mensuales.\n\nFinalmente, usa el analisis de intencion para mejorar paginas existentes. Si una pagina de categoria se posiciona para una palabra clave de nivel 2 pero convierte mal, verifica si el contenido de la pagina coincide con la intencion de comparacion, ayuda a los compradores a decidir entre opciones, o simplemente lista productos? Alinear el contenido de la pagina con la intencion de la palabra clave es una de las formas mas rapidas de aumentar las tasas de conversion sin trafico adicional. Una vez que hayas puntuado tus palabras clave, el [mapeo de palabras clave para tiendas](/academy/keyword-mapping-for-stores) te ayuda a asignar cada termino a la pagina correcta. Para una vision completa de estas estrategias, consulta nuestra guia de [estrategia SEO para ecommerce](/blog/ecommerce-seo-strategy).",
        },
      ],
      navLabels: {
        previous: "Investigacion de palabras clave para ecommerce",
        next: "Palabras clave de producto vs. categoria",
      },
    },
    it: {
      badge: "Ricerca parole chiave",
      heading: "Intenzione d'acquisto vs. volume di ricerca",
      intro:
        "Una parola chiave con 50 ricerche mensili e un tasso di conversione del 6% genera piu ricavi di una con 10.000 ricerche e un tasso di conversione dello 0,1%. Per i negozi e-commerce, comprendere l'intenzione d'acquisto e la competenza piu redditizia nella ricerca di parole chiave.",
      readTime: "8 min di lettura",
      sections: [
        {
          title: "Perche il volume da solo e fuorviante",
          content:
            "Il volume di ricerca vi dice quante persone digitano una query su Google ogni mese. Non dice nulla sul fatto che queste persone vogliano comprare, confrontare, imparare o semplicemente navigare. Una query come \"giacca in pelle\" riceve circa 135.000 ricerche mensili, ma l'intenzione dietro varia dall'ispirazione di moda alla ricerca d'acquisto fino alla ricerca di istruzioni per la cura.\n\nConfrontatelo con \"comprare giacca pelle Schott NYC Perfecto taglia 42\" con forse 30 ricerche al mese. Ogni singola persona che digita questa query e pronta a tirare fuori la carta di credito. Il divario nel tasso di conversione tra queste due query puo essere di 20x o piu.\n\nLa maggior parte degli strumenti per parole chiave ordina per volume di default. Questo addestra i proprietari di negozi a rincorrere i numeri piu grandi, il che spesso significa i termini piu vaghi, piu competitivi e che convertono meno. Invertire questa impostazione, ordinare per ricavi stimati, cambia completamente quali parole chiave dare la priorita. La nostra guida sull'[intento di ricerca per l'ecommerce](/academy/search-intent-for-ecommerce) approfondisce queste strategie.",
          items: [
            "Le parole chiave ad alto volume hanno spesso intenzione mista, dividendo il traffico tra acquirenti e semplici visitatori",
            "I tassi di conversione per parole chiave di prodotti specifici vanno dal 3-8%, contro lo 0,1-0,5% per i termini generici",
            "Il potenziale di ricavi di una parola chiave e volume per CTR per tasso di conversione per valore medio dell'ordine",
          ],
        },
        {
          title: "Il calcolo del ricavo per parola chiave",
          content:
            "Ecco la formula che usiamo per ogni decisione sulle parole chiave: Ricavo = Volume di ricerca mensile x CTR atteso x Tasso di conversione x Valore medio dell'ordine.\n\nVediamo due esempi reali. Parola chiave A: \"scarpe da corsa\" con 201.000 ricerche mensili. In posizione 5 (circa 4% CTR), con un tasso di conversione dello 0,3% e un AOV di 120 EUR, questo da: 201.000 x 0,04 x 0,003 x 120 = 2.894 EUR/mese.\n\nParola chiave B: \"Brooks Ghost 15 donna numero 39\" con 320 ricerche mensili. In posizione 2 (circa 12% CTR), con un tasso di conversione del 7% e lo stesso AOV di 120 EUR, questo da: 320 x 0,12 x 0,07 x 120 = 322 EUR/mese da una singola parola chiave long-tail.\n\nOra considerate questo: il vostro negozio ha probabilmente piu di 500 pagine prodotto. Se ciascuna cattura solo due o tre parole chiave long-tail come la parola chiave B, il ricavo totale dai termini long-tail supera di gran lunga quello che otterreste dal singolo termine generico, con molta meno concorrenza e tempistiche di posizionamento molto piu rapide.",
          tip: "Costruite un foglio di calcolo che calcoli automaticamente il ricavo per parola chiave. Inserite i vostri tassi di conversione reali da Google Analytics per tipo di pagina, le pagine prodotto tipicamente convertono 3-5x di piu rispetto alle pagine categoria per il traffico organico.",
        },
        {
          title: "Come valutare le parole chiave per intenzione d'acquisto",
          content:
            "Classifichiamo le parole chiave e-commerce in quattro livelli di intenzione. Livello 1 (intenzione massima): query contenenti nomi di prodotti specifici, SKU, numeri di modello o attributi esatti del prodotto piu \"comprare\", \"ordinare\" o \"prezzo\". Queste convertono al 5-10%.\n\nLivello 2 (intenzione di confronto): query con modificatori come \"migliore\", \"vs\", \"recensione\", \"top 10\" o \"confrontato con\". Questi acquirenti hanno intenzione d'acquisto ma non hanno deciso un prodotto specifico. I tassi di conversione vanno dal 2-4%, e la mossa vincente sono le pagine categoria o le guide all'acquisto che incanalano il traffico verso i prodotti.\n\nLivello 3 (intenzione di soluzione): query che descrivono un problema o un caso d'uso, come \"giacca impermeabile per escursioni sotto la pioggia\" o \"sedia da ufficio comoda per mal di schiena\". Chi cerca vuole un prodotto ma non sa in quale categoria guardare. I tassi di conversione vanno dall'1-3%, e le pagine categoria filtrate funzionano bene qui.\n\nLivello 4 (informazionale): query che iniziano con \"come\", \"cos'e\", \"perche\" o termini tematici generali. I tassi di conversione sono sotto lo 0,5%. Hanno valore SEO per costruire autorita tematica, ma non dovrebbero mai essere prioritizzate rispetto alle parole chiave di livello 1-3 a meno che non abbiate gia catturato i termini commerciali.",
          items: [
            "Livello 1 (acquisto immediato): nome prodotto + comprare/prezzo/ordinare, puntare con pagine prodotto",
            "Livello 2 (confronto): migliore/vs/recensione/top, puntare con pagine categoria o contenuto comparativo",
            "Livello 3 (ricerca soluzione): descrizioni di problemi o casi d'uso, puntare con pagine categoria filtrate",
            "Livello 4 (apprendimento): come/cos'e/guida, puntare con contenuto blog che rimanda ai prodotti",
          ],
          image: {
            src: "/images/academy/it/buyer-intent-tiers.svg",
            alt: "Pyramidendiagramm mit vier Keyword-Intentionsstufen",
            caption: "Höhere Intentionsstufen konvertieren deutlich besser. Ein Stufe-1-Keyword mit 200 monatlichen Suchen bringt oft mehr Umsatz als ein Stufe-4-Keyword mit 5.000 Suchen.",
          },
          callout: {
            title: "Intention vs. Umsatz",
            text: "Ein Möbelshop kann mit einem Stufe-1-Keyword bei 200 Suchen mehr Umsatz erzielen als mit einem Stufe-4-Keyword bei 5.000 Suchen. Intention schlägt Volumen bei der Revenue-Priorisierung.",
          },
        },
        {
          title: "Modificatori commerciali che segnalano intenzione d'acquisto",
          content:
            "Certe parole aggiunte a una parola chiave base aumentano drasticamente la probabilita d'acquisto. Monitoriamo questi modificatori in ogni progetto di ricerca parole chiave perche sono il modo piu rapido per identificare termini ad alta conversione che i concorrenti trascurano.\n\nI modificatori transazionali includono: comprare, ordinare, negozio, offerta, sconto, coupon, saldi, spedizione gratuita, prezzo, costo, economico, conveniente e dove comprare. Quando qualcuno aggiunge \"comprare\" o \"prezzo\" a una query di prodotto, l'intenzione e inconfondibile.\n\nI modificatori di confronto includono: migliore, top, vs, versus, confrontato, recensione, test, valutato, consigliato e alternativa a. Questi segnalano un acquirente vicino all'acquisto ma che sta valutando le opzioni. Le pagine categoria e il contenuto comparativo catturano efficacemente questo traffico.\n\nI modificatori di specifica includono: taglia, colore, materiale, numero di modello, anno, dimensioni, peso e termini di compatibilita. Questi restringono chi cerca a una variante molto specifica del prodotto e convertono eccezionalmente bene quando abbinati a pagine prodotto correttamente ottimizzate.\n\nI modificatori di caso d'uso come \"per escursionismo\", \"per ufficio\", \"per bambini\", \"per principianti\" rivelano la situazione dell'acquirente e vi permettono di indirizzarlo verso il giusto sottoinsieme di prodotti. Questi funzionano bene con pagine categoria filtrate.",
          tip: "Create una libreria di modificatori per la vostra nicchia. Elencate ogni modificatore transazionale, comparativo, di specifica e di caso d'uso rilevante per i vostri prodotti. Incrociateli con le vostre parole chiave seed per generare centinaia di variazioni long-tail ad alta intenzione.",
        },
        {
          title: "Esempi reali: basso volume che batte alto volume",
          content:
            "Un nostro cliente nell'arredamento si posizionava in prima pagina per \"tavolo da pranzo\" (74.000 ricerche mensili). La pagina riceveva 2.800 visite organiche al mese ma generava solo 4.200 EUR di ricavi attribuibili, un ricavo per visita di 1,50 EUR.\n\nNel frattempo, la loro pagina prodotto per uno specifico tavolo da pranzo allungabile in rovere si posizionava per 23 variazioni long-tail con una media di 40-150 ricerche ciascuna. Traffico mensile combinato: 380 visite. Ricavo mensile combinato: 8.900 EUR, un ricavo per visita di 23,42 EUR.\n\nVediamo questo schema costantemente. Un negozio di attrezzatura outdoor genera il 60% del suo fatturato organico da parole chiave con meno di 500 ricerche mensili ciascuna. Un brand di integratori ottiene il suo ROI piu alto da query su ingredienti branded che la maggior parte degli strumenti segnala come \"basso volume\".\n\nLa lezione non e che le parole chiave ad alto volume siano inutili, costruiscono visibilita del brand e catturano traffico top-of-funnel. Ma per la generazione di ricavi, la coda lunga con chiara intenzione d'acquisto supera i termini generici quasi ogni volta. La mossa strategica e allocare il vostro impegno proporzionalmente: il 70% del vostro lavoro SEO dovrebbe puntare ai termini che generano il 70% del vostro fatturato.",
          items: [
            "Monitorate il ricavo per visita organica a livello di pagina, non solo il traffico totale",
            "Le parole chiave a basso volume specifiche per prodotto spesso offrono 10-20x piu ricavo per visita",
            "Allocate l'impegno SEO proporzionalmente al potenziale di ricavi, non al volume di ricerca",
          ],
        },
        {
          title: "Mettere in pratica l'analisi dell'intenzione",
          content:
            "Iniziate estraendo le vostre migliori 100 landing page organiche per ricavo dalle analytics. Per ogni pagina, identificate la parola chiave principale che genera il traffico (la GSC lo rende semplice). Taggate ogni parola chiave con il suo livello di intenzione.\n\nProbabilmente scoprirete che le vostre pagine a maggior ricavo sono sostenute da parole chiave di livello 1 e 2, anche se quelle pagine non ricevono il maggior traffico. Questo conferma dove concentrare i vostri sforzi di ottimizzazione.\n\nSuccessivamente, esaminate la vostra pipeline di ricerca parole chiave. Ogni nuovo obiettivo di parola chiave dovrebbe passare attraverso il processo di valutazione dell'intenzione prima di essere prioritizzato. Una parola chiave di livello 1 con 200 ricerche mensili dovrebbe essere lavorata prima di una di livello 4 con 5.000 ricerche mensili.\n\nInfine, usate l'analisi dell'intenzione per migliorare le pagine esistenti. Se una pagina categoria si posiziona per una parola chiave di livello 2 ma converte male, verificate se il contenuto della pagina corrisponde all'intenzione di confronto, aiuta gli acquirenti a decidere tra le opzioni, o semplicemente elenca prodotti? Allineare il contenuto della pagina con l'intenzione della parola chiave e uno dei modi piu rapidi per aumentare i tassi di conversione senza traffico aggiuntivo. Per approfondire, consulta la nostra guida sulla [strategia SEO per ecommerce](/blog/ecommerce-seo-strategy). Approfondisci con la nostra guida sulla [mappatura keyword per i negozi](/academy/keyword-mapping-for-stores).",
        },
      ],
      navLabels: {
        previous: "Ricerca parole chiave per l'e-commerce",
        next: "Parole chiave prodotto vs. categoria",
      },
    },
    nl: {
      badge: "Zoekwoordonderzoek",
      heading: "Koopintentie vs. zoekvolume",
      intro:
        "Een zoekwoord met 50 maandelijkse zoekopdrachten en een conversiepercentage van 6% genereert meer omzet dan een met 10.000 zoekopdrachten en een conversiepercentage van 0,1%. Voor e-commerce winkels is het begrijpen van koopintentie de meest winstgevende vaardigheid in zoekwoordonderzoek.",
      readTime: "8 min leestijd",
      sections: [
        {
          title: "Waarom volume alleen misleidend is",
          content:
            "Zoekvolume vertelt je hoeveel mensen een zoekopdracht in Google typen per maand. Het zegt niets over of die mensen willen kopen, vergelijken, leren of gewoon browsen. Een zoekopdracht als \"leren jas\" krijgt ongeveer 135.000 maandelijkse zoekopdrachten, maar de intentie erachter varieert van mode-inspiratie tot aankooponderzoek tot het zoeken naar verzorgingsinstructies.\n\nVergelijk dat met \"Schott NYC Perfecto leren jas kopen maat 42\" met misschien 30 zoekopdrachten per maand. Elke persoon die deze zoekopdracht intypt, is klaar om te betalen. Het verschil in conversiepercentage tussen deze twee zoekopdrachten kan 20x of meer zijn.\n\nDe meeste zoekwoordtools sorteren standaard op volume. Dit traint webshop-eigenaren om de grootste getallen na te jagen, wat vaak de vaagste, meest competitieve en slechtst converterende termen betekent. Deze standaard omdraaien, sorteren op geschatte omzet in plaats daarvan, verandert volledig welke zoekwoorden je prioriteert.\n\nLees meer over [zoekintentie voor ecommerce](/academy/search-intent-for-ecommerce) in ons gedetailleerde onderwerp.",
          items: [
            "Zoekwoorden met hoog volume hebben vaak gemengde intentie, waardoor verkeer verdeeld wordt tussen kopers en browsers",
            "Conversiepercentages voor specifieke productzoekwoorden liggen op 3-8%, tegenover 0,1-0,5% voor generieke head-terms",
            "Het omzetpotentieel van een zoekwoord is volume maal CTR maal conversiepercentage maal gemiddelde bestelwaarde",
          ],
        },
        {
          title: "De omzet-per-zoekwoord berekening",
          content:
            "Dit is de formule die we gebruiken voor elke zoekwoordbeslissing: Omzet = Maandelijks zoekvolume x Verwachte CTR x Conversiepercentage x Gemiddelde bestelwaarde.\n\nLaten we twee echte voorbeelden doorrekenen. Zoekwoord A: \"hardloopschoenen\" met 201.000 maandelijkse zoekopdrachten. Bij positie 5 (ongeveer 4% CTR), met een conversiepercentage van 0,3% en een AOV van 120 EUR, geeft dat: 201.000 x 0,04 x 0,003 x 120 = 2.894 EUR/maand.\n\nZoekwoord B: \"Brooks Ghost 15 dames maat 39\" met 320 maandelijkse zoekopdrachten. Op positie 2 (ongeveer 12% CTR), met een conversiepercentage van 7% en dezelfde AOV van 120 EUR, geeft dat: 320 x 0,12 x 0,07 x 120 = 322 EUR/maand van een enkel long-tail zoekwoord.\n\nOverweeg nu dit: je webshop heeft waarschijnlijk meer dan 500 productpagina's. Als elke pagina slechts twee of drie long-tail zoekwoorden zoals zoekwoord B vangt, overtreft de totale omzet van long-tail termen ruimschoots wat je van de enkele head-term zou krijgen, met veel minder concurrentie en veel snellere rankingtijdlijnen.",
          tip: "Bouw een spreadsheet die automatisch omzet per zoekwoord berekent. Vul je werkelijke conversiepercentages uit Google Analytics in per paginatype, productpagina's converteren doorgaans 3-5x hoger dan categoriepagina's voor organisch verkeer.",
        },
        {
          title: "Hoe zoekwoorden te scoren op koopintentie",
          content:
            "We classificeren e-commerce zoekwoorden in vier intentieniveaus. Niveau 1 (hoogste intentie): zoekopdrachten met specifieke productnamen, artikelnummers, modelnummers of exacte productkenmerken plus \"kopen\", \"bestellen\" of \"prijs\". Deze converteren op 5-10%.\n\nNiveau 2 (vergelijkingsintentie): zoekopdrachten met modifiers als \"beste\", \"vs\", \"review\", \"top 10\" of \"vergeleken met\". Deze shoppers hebben koopintentie maar hebben nog niet besloten over een specifiek product. Conversiepercentages liggen op 2-4%, en de winnende aanpak zijn categoriepagina's of koopgidsen die verkeer naar producten leiden.\n\nNiveau 3 (oplossingsintentie): zoekopdrachten die een probleem of gebruikssituatie beschrijven, zoals \"waterdichte jas voor wandelen in de regen\" of \"comfortabele bureaustoel bij rugpijn\". De zoeker wil een product maar weet niet in welke categorie te kijken. Conversiepercentages liggen op 1-3%, en gefilterde categoriepagina's werken hier goed.\n\nNiveau 4 (informatief): zoekopdrachten die beginnen met \"hoe\", \"wat is\", \"waarom\" of algemene onderwerptermen. Conversiepercentages liggen onder 0,5%. Deze hebben SEO-waarde voor het opbouwen van topicale autoriteit, maar ze mogen nooit geprioriteerd worden boven niveau 1-3 zoekwoorden, tenzij je de commerciele termen al hebt veroverd.",
          items: [
            "Niveau 1 (nu kopen): productnaam + kopen/prijs/bestellen, targeten met productpagina's",
            "Niveau 2 (vergelijken): beste/vs/review/top, targeten met categoriepagina's of vergelijkende content",
            "Niveau 3 (oplossing zoeken): probleem- of gebruiksbeschrijvingen, targeten met gefilterde categoriepagina's",
            "Niveau 4 (leren): hoe/wat-is/gids, targeten met blogcontent die linkt naar producten",
          ],
          image: {
            src: "/images/academy/nl/buyer-intent-tiers.svg",
            alt: "Pyramidendiagramm mit vier Keyword-Intentionsstufen",
            caption: "Höhere Intentionsstufen konvertieren deutlich besser. Ein Stufe-1-Keyword mit 200 monatlichen Suchen bringt oft mehr Umsatz als ein Stufe-4-Keyword mit 5.000 Suchen.",
          },
          callout: {
            title: "Intention vs. Umsatz",
            text: "Ein Möbelshop kann mit einem Stufe-1-Keyword bei 200 Suchen mehr Umsatz erzielen als mit einem Stufe-4-Keyword bei 5.000 Suchen. Intention schlägt Volumen bei der Revenue-Priorisierung.",
          },
        },
        {
          title: "Commerciele modifiers die koopintentie signaleren",
          content:
            "Bepaalde woorden toegevoegd aan een basiszoekwoord verhogen de koopwaarschijnlijkheid drastisch. We volgen deze modifiers in elk zoekwoordonderzoekproject omdat ze de snelste manier zijn om hoog-converterende termen te identificeren die concurrenten over het hoofd zien.\n\nTransactionele modifiers omvatten: kopen, bestellen, shop, aanbieding, korting, kortingscode, sale, gratis verzending, prijs, kosten, goedkoop, voordelig en waar te kopen. Als iemand \"kopen\" of \"prijs\" toevoegt aan een productquery, is de intentie onmiskenbaar.\n\nVergelijkingsmodifiers omvatten: beste, top, vs, versus, vergeleken, review, test, beoordeeld, aanbevolen en alternatief voor. Deze signaleren een shopper die dicht bij aankoop is maar opties afweegt. Categoriepagina's en vergelijkende content vangen dit verkeer effectief op.\n\nSpecificatiemodifiers omvatten: maat, kleur, materiaal, modelnummer, jaar, afmetingen, gewicht en compatibiliteitstermen. Deze verengen de zoeker tot een zeer specifieke productvariante en converteren uitzonderlijk goed wanneer gematcht aan correct geoptimaliseerde productpagina's.\n\nGebruiksmodifiers zoals \"voor wandelen\", \"voor kantoor\", \"voor kinderen\", \"voor beginners\" onthullen de situatie van de koper en laten je ze naar de juiste productsubset leiden. Deze werken goed met gefilterde categoriepagina's.",
          tip: "Maak een modifier-bibliotheek voor je niche. Lijst elke transactionele, vergelijkende, specificatie- en gebruiksmodifier op die relevant is voor je producten. Kruis deze met je seed-zoekwoorden om honderden long-tail variaties met hoge intentie te genereren.",
        },
        {
          title: "Echte voorbeelden: laag volume dat hoog volume verslaat",
          content:
            "Een klant in woninginrichting stond op pagina een voor \"eettafel\" (74.000 maandelijkse zoekopdrachten). De pagina kreeg 2.800 organische bezoeken per maand maar genereerde slechts 4.200 EUR aan toerekenbare omzet, een omzet per bezoek van 1,50 EUR.\n\nOndertussen rankte hun productpagina voor een specifieke uitschuifbare eiken eettafel voor 23 long-tail variaties met gemiddeld 40-150 zoekopdrachten elk. Gecombineerd maandelijks verkeer: 380 bezoeken. Gecombineerde maandelijkse omzet: 8.900 EUR, een omzet per bezoek van 23,42 EUR.\n\nWe zien dit patroon consequent. Een outdoorwinkel genereert 60% van zijn organische omzet uit zoekwoorden met elk minder dan 500 maandelijkse zoekopdrachten. Een supplementenmerk behaalt zijn hoogste ROI uit merkingredient-zoekopdrachten die de meeste zoekwoordtools markeren als \"laag volume\".\n\nDe conclusie is niet dat zoekwoorden met hoog volume waardeloos zijn, ze bouwen merkzichtbaarheid op en vangen top-of-funnel verkeer. Maar voor omzetgeneratie overtreft de long tail met duidelijke koopintentie head-terms bijna elke keer. De strategische zet is je inspanning proportioneel verdelen: 70% van je SEO-werk zou moeten richten op de termen die 70% van je omzet genereren.",
          items: [
            "Volg omzet per organisch bezoek op paginaniveau, niet alleen totaal verkeer",
            "Productspecifieke zoekwoorden met laag volume leveren vaak 10-20x hogere omzet per bezoek",
            "Verdeel SEO-inspanning proportioneel naar omzetpotentieel, niet naar zoekvolume",
          ],
        },
        {
          title: "Intentieanalyse in de praktijk brengen",
          content:
            "Begin met het ophalen van je top 100 organische landingspagina's op omzet uit analytics. Identificeer voor elke pagina het primaire zoekwoord dat het verkeer aandrijft (GSC maakt dit eenvoudig). Tag elk zoekwoord met zijn intentieniveau.\n\nJe zult waarschijnlijk ontdekken dat je pagina's met de hoogste omzet worden aangedreven door niveau 1 en 2 zoekwoorden, zelfs als die pagina's niet het meeste verkeer krijgen. Dit bevestigt waar je je optimalisatie-inspanningen op moet richten.\n\nBekijk vervolgens je zoekwoordonderzoek-pipeline. Elk nieuw zoekwoorddoel zou door het intentie-scoringsproces moeten gaan voordat het geprioriteerd wordt. Een niveau 1 zoekwoord met 200 maandelijkse zoekopdrachten zou eerder opgepakt moeten worden dan een niveau 4 zoekwoord met 5.000 maandelijkse zoekopdrachten.\n\nGebruik ten slotte intentieanalyse om bestaande pagina's te verbeteren. Als een categoriepagina rankt voor een niveau 2 zoekwoord maar slecht converteert, controleer dan of de pagina-inhoud overeenkomt met vergelijkingsintentie, helpt het shoppers kiezen tussen opties, of somt het alleen producten op? Het afstemmen van pagina-inhoud op zoekwoordintentie is een van de snelste manieren om conversiepercentages te verhogen zonder extra verkeer.\n\nOns onderwerp over [zoekwoordmapping voor webshops](/academy/keyword-mapping-for-stores) behandelt dit proces uitgebreid.\n\nOnze gids over [ecommerce-SEO-strategie](/blog/ecommerce-seo-strategy) behandelt deze aanpak uitgebreid.",
        },
      ],
      navLabels: {
        previous: "Zoekwoordonderzoek voor e-commerce",
        next: "Product- vs. categoriezoekwoorden",
      },
    },
  },
};
