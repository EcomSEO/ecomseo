import type { AcademyTopic } from "../../types";

export const searchIntentForEcommerce: AcademyTopic = {
  slug: "search-intent-for-ecommerce",
  cluster: 1,
  content: {
    en: {
      badge: "Search Fundamentals",
      heading: "Search Intent for Ecommerce",
      intro:
        "Every search query has a purpose behind it, and Google is exceptionally good at figuring out what that purpose is. When you align your pages with the right type of intent, you rank higher and convert better. When you get it wrong, even perfect on-page SEO won't save you.",
      readTime: "10 min read",
      sections: [
        {
          title: "What Search Intent Means for Online Stores",
          content:
            "Search intent is the reason someone types a query into Google. Are they looking for a specific brand? Researching a product category? Comparing options? Ready to buy? Google classifies every query into an intent category, and it serves results that match that classification.\n\nFor ecommerce, intent is everything. A page that matches user intent gets higher click-through rates, longer time on site, and better conversion rates. Google tracks these engagement signals and rewards pages that satisfy what searchers actually want. A product page ranking for an informational query will get skipped over in results, and a blog post ranking for a transactional query won't convert.\n\nThe practical impact is significant. Stores that map their pages to the correct intent see 40-60% higher organic click-through rates compared to those that don't. Understanding intent also prevents you from wasting effort. There's no point optimizing a product page for a query where Google exclusively shows blog posts and guides.",
        },
        {
          title: "The Four Types of Search Intent",
          content:
            "Google's quality rater guidelines identify four primary intent types, and each one maps directly to specific page types in your store.\n\nNavigational intent is when someone searches for a specific brand or website. Queries like \"Nike running shoes\" or \"Glossier skincare\" signal that the user already knows what they want and is looking for that particular brand. These queries typically have high conversion rates because the user has already decided on the brand.\n\nInformational intent covers queries where the user wants to learn something. \"How to choose running shoes\" or \"best skincare routine for oily skin\" are informational queries. These users aren't ready to buy yet, but they represent the top of your funnel. Blog posts, buying guides, and educational content serve this intent.\n\nCommercial investigation intent sits between informational and transactional. The user is researching before buying. \"Best running shoes 2025\" or \"Cerave vs Cetaphil moisturizer\" show that someone is comparing options. Category pages, comparison content, and review roundups match this intent.\n\nTransactional intent means the user is ready to purchase. \"Buy Nike Air Max 90\" or \"Cerave moisturizer price\" signal buying readiness. Product pages, category pages with buy buttons, and deal pages serve transactional intent.",
          items: [
            "Navigational: brand searches, direct product name lookups, store name queries",
            "Informational: how-to queries, what-is questions, educational research",
            "Commercial: best-of lists, comparisons, review searches, alternative lookups",
            "Transactional: buy, price, discount, deal, and order-related queries",
          ],
        },
        {
          title: "Matching Page Types to Intent",
          content:
            "The key to intent optimization is serving the right page type for each query. Google's algorithm has strong opinions about this, and fighting against them is a losing battle.\n\nFor transactional queries, product pages and well-structured category pages perform best. These pages should have clear pricing, availability status, add-to-cart buttons, and product specifications. When someone searches \"buy organic cotton t-shirt\", they want to land on a page where they can actually purchase one, not read a 2,000-word article about organic cotton.\n\nFor commercial investigation queries, you need content that helps users compare and evaluate. Category pages with filtering options, comparison tables, and curated product roundups all work well. A query like \"best wireless earbuds under 100\" performs best with a page that lists and compares multiple options with pros and cons.\n\nFor informational queries, blog posts, buying guides, and FAQ content are your best assets. These pages should be thorough and genuinely helpful. A query like \"how to measure ring size at home\" needs a detailed guide, not a product listing page.",
          items: [
            "Product pages: serve transactional intent with clear pricing and purchase paths",
            "Category pages: serve both transactional and commercial intent with filters and sorting",
            "Blog posts and guides: serve informational intent with educational depth",
            "Comparison pages: serve commercial intent with side-by-side evaluations",
            "Landing pages: serve navigational intent for branded campaigns",
          ],
          tip: "Check the current top 10 results for your target keyword before creating content. If Google shows 8 blog posts and 2 category pages, creating a product page for that query is unlikely to rank. Match the dominant page type in the results.",
        },
        {
          title: "How to Identify Intent from SERPs",
          content:
            "The most reliable way to determine search intent is to look at what Google already ranks for a query. Google has billions of data points on user behavior, and the results it shows reflect what satisfies searchers.\n\nSearch for your target keyword and examine the top 10 results. Look at the types of pages ranking: are they product pages, category pages, blog posts, or comparison articles? If 7 out of 10 results are blog posts, Google has classified that query as primarily informational. If all results are product and category pages, it's transactional.\n\nAlso pay attention to SERP features. Shopping ads and product carousels indicate transactional intent. Featured snippets and People Also Ask boxes suggest informational intent. Local packs indicate local intent, which matters for stores with physical locations.\n\nWatch for mixed intent queries where Google shows different content types. \"Running shoes\" might show a mix of category pages, reviews, and brand pages because the intent is ambiguous. For these queries, you might rank with multiple page types targeting different aspects of the query.",
          tip: "Create a simple spreadsheet with three columns: keyword, dominant intent, and recommended page type. Classify your top 50-100 target keywords this way before building your content plan. It takes an afternoon and prevents months of misaligned content creation.",
        },
        {
          title: "Intent Mapping Across the Buyer Journey",
          content:
            "Search intent maps directly to the buyer journey, and understanding this connection helps you capture customers at every stage.\n\nAt the awareness stage, users search informational queries. Someone typing \"what thread count means for sheets\" doesn't know which sheets they want yet. Your blog content captures these users and introduces them to your brand. While these queries rarely convert directly, they build familiarity and trust.\n\nAt the consideration stage, users shift to commercial investigation queries. \"Best Egyptian cotton sheets\" or \"Brooklinen vs Parachute sheets\" shows they're narrowing down options. Your comparison content and well-organized category pages capture this traffic. Conversion rates at this stage typically run 2-4%, and these users often return later to purchase.\n\nAt the decision stage, users search transactional queries. \"Buy Brooklinen luxe core sheet set king\" is a user ready to purchase right now. Your product pages need to be optimized to capture and convert this high-value traffic. Conversion rates for transactional queries often hit 5-10% for well-optimized product pages.\n\nThe smart move is to build internal links between these content types, creating a path from awareness content through comparison content to product pages. This keeps users in your ecosystem as they move through their buying journey.",
          items: [
            "Awareness stage: informational content captures early-stage researchers",
            "Consideration stage: comparison and review content guides evaluation",
            "Decision stage: product pages convert ready-to-buy shoppers",
            "Build internal links between stages to keep users in your ecosystem",
          ],
        },
        {
          title: "Common Intent Mistakes in Ecommerce",
          content:
            "The most frequent mistake we see is trying to rank a product page for an informational query. If someone searches \"how to choose a mattress\", they don't want to land on a single mattress product page. They want a guide that explains firmness levels, materials, and sleeping positions. Your product page will never outrank a comprehensive guide for that query.\n\nThe second common mistake is ignoring commercial intent entirely. Many stores have product pages and blog posts but nothing in between. They miss all the \"best\", \"top\", \"review\", and \"vs\" queries that represent users who are nearly ready to buy. Adding comparison content and curated category pages fills this gap.\n\nAnother mistake is keyword cannibalization through intent mismatch. If you have both a category page and a blog post targeting \"organic baby clothes\", Google has to choose which one to rank. If the intent is primarily transactional, the blog post may be cannibalizing your category page. Audit your content to ensure only one page targets each primary intent for a given keyword.\n\nFinally, don't assume intent is static. Seasonal shifts change intent dramatically. \"Valentine's gifts\" is informational in November but becomes increasingly transactional as February approaches. Adjust your content strategy to match these shifting patterns.",
        },
      ],
      navLabels: {
        previous: "Ecommerce Ranking Factors",
        next: "Google Search Console for Stores",
      },
    },
    de: {
      badge: "Suchgrundlagen",
      heading: "Suchintention im E-Commerce",
      intro:
        "Hinter jeder Suchanfrage steckt eine Absicht, und Google ist ausgesprochen gut darin, diese zu erkennen. Wenn Sie Ihre Seiten auf die richtige Intention ausrichten, ranken Sie besser und konvertieren mehr. Wenn Sie daneben liegen, hilft selbst perfektes On-Page-SEO nicht weiter.",
      readTime: "10 Min. Lesezeit",
      sections: [
        {
          title: "Was Suchintention fuer Online-Shops bedeutet",
          content:
            "Suchintention ist der Grund, warum jemand eine Anfrage bei Google eingibt. Sucht die Person eine bestimmte Marke? Recherchiert sie eine Produktkategorie? Vergleicht sie Optionen? Ist sie kaufbereit? Google ordnet jede Anfrage einer Intention zu und liefert Ergebnisse, die zu dieser Klassifizierung passen.\n\nFuer den E-Commerce ist die Intention entscheidend. Eine Seite, die zur Nutzerintention passt, erzielt hoehere Klickraten, laengere Verweildauern und bessere Conversion-Raten. Google erfasst diese Engagement-Signale und belohnt Seiten, die tatsaechlich liefern, was Suchende wollen. Eine Produktseite, die fuer eine informationelle Anfrage rankt, wird uebersprungen, und ein Blogbeitrag, der fuer eine transaktionale Anfrage rankt, konvertiert nicht.\n\nDie praktischen Auswirkungen sind erheblich. Shops, die ihre Seiten der richtigen Intention zuordnen, erzielen 40-60% hoehere organische Klickraten im Vergleich zu denen, die das nicht tun. Das Verstaendnis der Intention verhindert auch verschwendeten Aufwand. Es hat keinen Sinn, eine Produktseite fuer eine Anfrage zu optimieren, bei der Google ausschliesslich Blogbeitraege und Ratgeber anzeigt.",
        },
        {
          title: "Die vier Arten der Suchintention",
          content:
            "Googles Quality-Rater-Richtlinien identifizieren vier primaere Intentionstypen, und jeder davon laesst sich direkt auf bestimmte Seitentypen in Ihrem Shop abbilden.\n\nNavigationsintention liegt vor, wenn jemand nach einer bestimmten Marke oder Website sucht. Anfragen wie \"Nike Laufschuhe\" oder \"Glossier Hautpflege\" signalisieren, dass der Nutzer bereits weiss, was er will, und nach dieser bestimmten Marke sucht. Diese Anfragen haben typischerweise hohe Conversion-Raten, weil der Nutzer sich bereits fuer die Marke entschieden hat.\n\nInformationsintention umfasst Anfragen, bei denen der Nutzer etwas lernen moechte. \"Wie waehle ich Laufschuhe\" oder \"beste Hautpflege-Routine fuer fettige Haut\" sind informationelle Anfragen. Diese Nutzer sind noch nicht kaufbereit, aber sie repraesentieren die obere Phase Ihres Trichters. Blogbeitraege, Kaufratgeber und Bildungsinhalte bedienen diese Intention.\n\nKommerzielle Rechercheintention liegt zwischen informationell und transaktional. Der Nutzer recherchiert vor dem Kauf. \"Beste Laufschuhe 2025\" oder \"Cerave vs Cetaphil Feuchtigkeitscreme\" zeigen, dass jemand Optionen vergleicht. Kategorieseiten, Vergleichsinhalte und Bewertungsuebersichten passen zu dieser Intention.\n\nTransaktionale Intention bedeutet, dass der Nutzer kaufbereit ist. \"Nike Air Max 90 kaufen\" oder \"Cerave Feuchtigkeitscreme Preis\" signalisieren Kaufbereitschaft. Produktseiten, Kategorieseiten mit Kaufbuttons und Angebotsseiten bedienen die transaktionale Intention.",
          items: [
            "Navigational: Markensuchen, direkte Produktnamen-Abfragen, Shop-Namen",
            "Informational: Wie-geht-das-Anfragen, Was-ist-Fragen, Bildungsrecherche",
            "Kommerziell: Best-of-Listen, Vergleiche, Bewertungssuchen, Alternativen",
            "Transaktional: Kaufen-, Preis-, Rabatt-, Angebots- und Bestellanfragen",
          ],
        },
        {
          title: "Seitentypen der Intention zuordnen",
          content:
            "Der Schluessel zur Intent-Optimierung ist, den richtigen Seitentyp fuer jede Anfrage bereitzustellen. Googles Algorithmus hat klare Vorstellungen davon, und dagegen anzukaempfen ist aussichtslos.\n\nFuer transaktionale Anfragen funktionieren Produktseiten und gut strukturierte Kategorieseiten am besten. Diese Seiten sollten klare Preise, Verfuegbarkeitsstatus, Warenkorb-Buttons und Produktspezifikationen haben. Wenn jemand \"Bio-Baumwoll-T-Shirt kaufen\" sucht, moechte er auf einer Seite landen, wo er tatsaechlich kaufen kann, nicht einen 2.000-Woerter-Artikel ueber Bio-Baumwolle lesen.\n\nFuer kommerzielle Rechercheanfragen brauchen Sie Inhalte, die Nutzern beim Vergleichen und Bewerten helfen. Kategorieseiten mit Filteroptionen, Vergleichstabellen und kuratierte Produktuebersichten funktionieren gut. Eine Anfrage wie \"beste kabellose Ohrhoerer unter 100 Euro\" funktioniert am besten mit einer Seite, die mehrere Optionen mit Vor- und Nachteilen auflistet und vergleicht.\n\nFuer informationelle Anfragen sind Blogbeitraege, Kaufratgeber und FAQ-Inhalte Ihre besten Ressourcen. Diese Seiten sollten gruendlich und aufrichtig hilfreich sein. Eine Anfrage wie \"wie messe ich meine Ringgroesse zu Hause\" braucht eine detaillierte Anleitung, keine Produktlistenseite.",
          items: [
            "Produktseiten: bedienen transaktionale Intention mit klaren Preisen und Kaufpfaden",
            "Kategorieseiten: bedienen transaktionale und kommerzielle Intention mit Filtern und Sortierung",
            "Blogbeitraege und Ratgeber: bedienen informationelle Intention mit Tiefgang",
            "Vergleichsseiten: bedienen kommerzielle Intention mit Gegenueber-Bewertungen",
            "Landingpages: bedienen Navigationsintention fuer Markenkampagnen",
          ],
          tip: "Pruefen Sie die aktuellen Top-10-Ergebnisse fuer Ihr Zielkeyword, bevor Sie Inhalte erstellen. Wenn Google 8 Blogbeitraege und 2 Kategorieseiten zeigt, wird eine Produktseite fuer diese Anfrage kaum ranken. Passen Sie sich dem dominanten Seitentyp in den Ergebnissen an.",
        },
        {
          title: "Intention aus den SERPs ablesen",
          content:
            "Die zuverlaessigste Methode, die Suchintention zu bestimmen, ist zu schauen, was Google bereits fuer eine Anfrage rankt. Google hat Milliarden von Datenpunkten zum Nutzerverhalten, und die angezeigten Ergebnisse spiegeln wider, was Suchende zufriedenstellt.\n\nSuchen Sie nach Ihrem Zielkeyword und untersuchen Sie die Top-10-Ergebnisse. Schauen Sie auf die Seitentypen, die ranken: Sind es Produktseiten, Kategorieseiten, Blogbeitraege oder Vergleichsartikel? Wenn 7 von 10 Ergebnissen Blogbeitraege sind, hat Google diese Anfrage als primaer informationell klassifiziert. Wenn alle Ergebnisse Produkt- und Kategorieseiten sind, ist sie transaktional.\n\nAchten Sie auch auf SERP-Features. Shopping-Anzeigen und Produktkarussells deuten auf transaktionale Intention hin. Featured Snippets und \"Nutzer fragen auch\"-Boxen sprechen fuer informationelle Intention. Lokale Ergebnisse deuten auf lokale Intention hin, was fuer Shops mit physischen Standorten relevant ist.\n\nBeobachten Sie Anfragen mit gemischter Intention, bei denen Google verschiedene Inhaltstypen zeigt. \"Laufschuhe\" koennte eine Mischung aus Kategorieseiten, Bewertungen und Markenseiten zeigen, weil die Intention mehrdeutig ist. Fuer diese Anfragen koennen Sie mit verschiedenen Seitentypen ranken, die unterschiedliche Aspekte abdecken.",
          tip: "Erstellen Sie eine einfache Tabelle mit drei Spalten: Keyword, dominante Intention und empfohlener Seitentyp. Klassifizieren Sie Ihre Top 50-100 Zielkeywords auf diese Weise, bevor Sie Ihren Content-Plan erstellen. Das dauert einen Nachmittag und verhindert Monate fehlgeleiteter Content-Erstellung.",
        },
        {
          title: "Intent-Mapping entlang der Buyer Journey",
          content:
            "Suchintention bildet direkt die Buyer Journey ab, und das Verstaendnis dieser Verbindung hilft Ihnen, Kunden in jeder Phase abzuholen.\n\nIn der Awareness-Phase suchen Nutzer informationelle Anfragen. Jemand, der \"was bedeutet Fadenzahl bei Bettwaesche\" eingibt, weiss noch nicht, welche Bettwaesche er will. Ihr Blog-Content fauengt diese Nutzer auf und stellt Ihre Marke vor. Diese Anfragen konvertieren selten direkt, aber sie bauen Bekanntheit und Vertrauen auf.\n\nIn der Consideration-Phase wechseln Nutzer zu kommerziellen Rechercheanfragen. \"Beste aegyptische Baumwoll-Bettwaesche\" oder \"Marke A vs Marke B Bettwaesche\" zeigt, dass sie Optionen eingrenzen. Ihre Vergleichsinhalte und gut organisierten Kategorieseiten fangen diesen Traffic auf. Conversion-Raten in dieser Phase liegen typischerweise bei 2-4%, und diese Nutzer kehren oft spaeter zum Kauf zurueck.\n\nIn der Entscheidungsphase suchen Nutzer transaktionale Anfragen. \"Marke X Luxus-Bettwaesche-Set King kaufen\" ist ein kaufbereiter Nutzer. Ihre Produktseiten muessen optimiert sein, um diesen wertvollen Traffic aufzufangen und zu konvertieren. Conversion-Raten fuer transaktionale Anfragen erreichen oft 5-10% bei gut optimierten Produktseiten.\n\nDer kluge Ansatz ist, interne Links zwischen diesen Inhaltstypen aufzubauen und einen Pfad von Awareness-Content ueber Vergleichsinhalte zu Produktseiten zu schaffen. So bleiben Nutzer in Ihrem Oekosystem, waehrend sie ihre Kaufreise durchlaufen.",
          items: [
            "Awareness-Phase: informationelle Inhalte fangen fruehe Recherchierer auf",
            "Consideration-Phase: Vergleichs- und Bewertungsinhalte begleiten die Evaluation",
            "Entscheidungsphase: Produktseiten konvertieren kaufbereite Kaeufer",
            "Bauen Sie interne Links zwischen den Phasen auf, um Nutzer in Ihrem Oekosystem zu halten",
          ],
        },
        {
          title: "Haeufige Intent-Fehler im E-Commerce",
          content:
            "Der haeufigste Fehler, den wir sehen, ist der Versuch, eine Produktseite fuer eine informationelle Anfrage zu ranken. Wenn jemand \"wie waehle ich eine Matratze\" sucht, moechte er nicht auf einer einzelnen Matratzen-Produktseite landen. Er will einen Ratgeber, der Haertegrade, Materialien und Schlafpositionen erklaert. Ihre Produktseite wird fuer diese Anfrage nie einen umfassenden Ratgeber uebertrumpfen.\n\nDer zweithaeufigste Fehler ist, kommerzielle Intention komplett zu ignorieren. Viele Shops haben Produktseiten und Blogbeitraege, aber nichts dazwischen. Sie verpassen alle \"beste\", \"top\", \"bewertung\" und \"vs\"-Anfragen, die Nutzer repraesentieren, die fast kaufbereit sind. Vergleichsinhalte und kuratierte Kategorieseiten fuellen diese Luecke.\n\nEin weiterer Fehler ist Keyword-Kannibalisierung durch Intent-Mismatch. Wenn Sie sowohl eine Kategorieseite als auch einen Blogbeitrag fuer \"Bio-Babykleidung\" haben, muss Google sich entscheiden, welche Seite ranken soll. Wenn die Intention primaer transaktional ist, kannibalisiert der Blogbeitrag moeglicherweise Ihre Kategorieseite. Pruefen Sie Ihren Content, um sicherzustellen, dass nur eine Seite die primaere Intention fuer ein bestimmtes Keyword bedient.\n\nGehen Sie schliesslich nicht davon aus, dass Intention statisch ist. Saisonale Verschiebungen aendern die Intention dramatisch. \"Valentinstagsgeschenke\" ist im November informationell, wird aber zunehmend transaktional, je naeher der Februar rueckt. Passen Sie Ihre Content-Strategie an diese wechselnden Muster an.",
        },
      ],
      navLabels: {
        previous: "E-Commerce Ranking-Faktoren",
        next: "Google Search Console fuer Shops",
      },
    },
    fr: {
      badge: "Fondamentaux de la recherche",
      heading: "L'intention de recherche en e-commerce",
      intro:
        "Chaque requete de recherche a un objectif, et Google est exceptionnellement doue pour le determiner. Quand vos pages correspondent au bon type d'intention, vous obtenez de meilleurs classements et plus de conversions. Quand vous vous trompez, meme un SEO on-page parfait ne vous sauvera pas.",
      readTime: "10 min de lecture",
      sections: [
        {
          title: "Ce que l'intention de recherche signifie pour les boutiques en ligne",
          content:
            "L'intention de recherche est la raison pour laquelle quelqu'un tape une requete dans Google. Cherche-t-il une marque specifique ? Fait-il des recherches sur une categorie de produits ? Compare-t-il des options ? Est-il pret a acheter ? Google classe chaque requete dans une categorie d'intention et propose des resultats correspondant a cette classification.\n\nPour l'e-commerce, l'intention est primordiale. Une page qui correspond a l'intention de l'utilisateur obtient des taux de clics plus eleves, un temps passe sur le site plus long et de meilleurs taux de conversion. Google suit ces signaux d'engagement et recompense les pages qui satisfont reellement les attentes des chercheurs. Une page produit classee pour une requete informationnelle sera ignoree, et un article de blog classe pour une requete transactionnelle ne convertira pas.\n\nL'impact pratique est considerable. Les boutiques qui alignent leurs pages sur la bonne intention voient des taux de clics organiques 40 a 60% plus eleves par rapport a celles qui ne le font pas. Comprendre l'intention evite aussi de gaspiller des efforts. Il est inutile d'optimiser une page produit pour une requete ou Google affiche exclusivement des articles de blog et des guides.",
        },
        {
          title: "Les quatre types d'intention de recherche",
          content:
            "Les directives de Google pour les evaluateurs de qualite identifient quatre types d'intention principaux, et chacun correspond directement a des types de pages specifiques dans votre boutique.\n\nL'intention de navigation correspond aux recherches d'une marque ou d'un site web specifique. Des requetes comme \"chaussures de course Nike\" ou \"soins de peau Glossier\" signalent que l'utilisateur sait deja ce qu'il veut et cherche cette marque en particulier. Ces requetes ont generalement des taux de conversion eleves car l'utilisateur a deja decide de la marque.\n\nL'intention informationnelle couvre les requetes ou l'utilisateur veut apprendre quelque chose. \"Comment choisir des chaussures de course\" ou \"meilleure routine de soins pour peau grasse\" sont des requetes informationnelles. Ces utilisateurs ne sont pas encore prets a acheter, mais ils representent le haut de votre entonnoir. Les articles de blog, les guides d'achat et le contenu educatif repondent a cette intention.\n\nL'intention d'investigation commerciale se situe entre l'informationnelle et la transactionnelle. L'utilisateur fait des recherches avant d'acheter. \"Meilleures chaussures de course 2025\" ou \"Cerave vs Cetaphil creme hydratante\" montrent que quelqu'un compare des options. Les pages de categories, le contenu comparatif et les syntheses d'avis correspondent a cette intention.\n\nL'intention transactionnelle signifie que l'utilisateur est pret a acheter. \"Acheter Nike Air Max 90\" ou \"prix creme hydratante Cerave\" signalent une disposition a l'achat. Les pages produits, les pages de categories avec boutons d'achat et les pages de promotions repondent a l'intention transactionnelle.",
          items: [
            "Navigationnelle : recherches de marque, consultation directe de noms de produits",
            "Informationnelle : requetes comment-faire, questions qu'est-ce-que, recherche educative",
            "Commerciale : listes des meilleurs, comparaisons, recherches d'avis, alternatives",
            "Transactionnelle : requetes d'achat, de prix, de remise, d'offre et de commande",
          ],
        },
        {
          title: "Associer les types de pages a l'intention",
          content:
            "La cle de l'optimisation de l'intention est de proposer le bon type de page pour chaque requete. L'algorithme de Google a des opinions bien arretees a ce sujet, et aller a contre-courant est une bataille perdue d'avance.\n\nPour les requetes transactionnelles, les pages produits et les pages de categories bien structurees fonctionnent le mieux. Ces pages doivent avoir des prix clairs, un statut de disponibilite, des boutons d'ajout au panier et des specifications produit. Quand quelqu'un cherche \"acheter t-shirt coton bio\", il veut atterrir sur une page ou il peut reellement acheter, pas lire un article de 2 000 mots sur le coton biologique.\n\nPour les requetes d'investigation commerciale, vous avez besoin de contenu qui aide les utilisateurs a comparer et evaluer. Les pages de categories avec des options de filtrage, des tableaux comparatifs et des selections de produits curees fonctionnent bien. Une requete comme \"meilleurs ecouteurs sans fil moins de 100 euros\" fonctionne mieux avec une page qui liste et compare plusieurs options avec avantages et inconvenients.\n\nPour les requetes informationnelles, les articles de blog, les guides d'achat et le contenu FAQ sont vos meilleurs atouts. Ces pages doivent etre approfondies et sincerement utiles. Une requete comme \"comment mesurer sa taille de bague a la maison\" necessite un guide detaille, pas une page de listing de produits.",
          items: [
            "Pages produits : repondent a l'intention transactionnelle avec des prix clairs et des parcours d'achat",
            "Pages de categories : repondent aux intentions transactionnelle et commerciale avec filtres et tri",
            "Articles de blog et guides : repondent a l'intention informationnelle avec de la profondeur",
            "Pages de comparaison : repondent a l'intention commerciale avec des evaluations cote a cote",
            "Landing pages : repondent a l'intention de navigation pour les campagnes de marque",
          ],
          tip: "Verifiez les 10 premiers resultats actuels pour votre mot-cle cible avant de creer du contenu. Si Google affiche 8 articles de blog et 2 pages de categories, creer une page produit pour cette requete a peu de chances de se classer. Adaptez-vous au type de page dominant dans les resultats.",
        },
        {
          title: "Comment identifier l'intention a partir des SERPs",
          content:
            "La methode la plus fiable pour determiner l'intention de recherche est de regarder ce que Google classe deja pour une requete. Google dispose de milliards de points de donnees sur le comportement des utilisateurs, et les resultats affiches refletent ce qui satisfait les chercheurs.\n\nRecherchez votre mot-cle cible et examinez les 10 premiers resultats. Regardez les types de pages classees : s'agit-il de pages produits, de pages de categories, d'articles de blog ou d'articles comparatifs ? Si 7 resultats sur 10 sont des articles de blog, Google a classe cette requete comme principalement informationnelle. Si tous les resultats sont des pages produits et de categories, c'est transactionnel.\n\nFaites aussi attention aux fonctionnalites SERP. Les annonces Shopping et les carrousels de produits indiquent une intention transactionnelle. Les extraits en vedette et les encadres \"Autres questions posees\" suggerent une intention informationnelle. Les packs locaux indiquent une intention locale, ce qui compte pour les boutiques ayant des emplacements physiques.\n\nSurveillez les requetes a intention mixte ou Google affiche differents types de contenu. \"Chaussures de course\" pourrait montrer un melange de pages de categories, d'avis et de pages de marques car l'intention est ambigue. Pour ces requetes, vous pouvez vous classer avec plusieurs types de pages ciblant differents aspects.",
          tip: "Creez un simple tableau avec trois colonnes : mot-cle, intention dominante et type de page recommande. Classifiez vos 50 a 100 mots-cles cibles principaux de cette maniere avant de construire votre plan de contenu. Cela prend un apres-midi et evite des mois de creation de contenu mal orientee.",
        },
        {
          title: "Mapping de l'intention tout au long du parcours d'achat",
          content:
            "L'intention de recherche correspond directement au parcours d'achat, et comprendre cette connexion vous aide a capter des clients a chaque etape.\n\nA l'etape de la prise de conscience, les utilisateurs font des recherches informationnelles. Quelqu'un qui tape \"que signifie le nombre de fils pour les draps\" ne sait pas encore quels draps il veut. Votre contenu blog capture ces utilisateurs et leur presente votre marque. Ces requetes convertissent rarement directement, mais elles construisent la familiarite et la confiance.\n\nA l'etape de la consideration, les utilisateurs passent aux requetes d'investigation commerciale. \"Meilleurs draps en coton egyptien\" ou \"Marque A vs Marque B draps\" montre qu'ils restreignent leurs options. Votre contenu comparatif et vos pages de categories bien organisees captent ce trafic. Les taux de conversion a cette etape sont generalement de 2 a 4%, et ces utilisateurs reviennent souvent plus tard pour acheter.\n\nA l'etape de la decision, les utilisateurs font des recherches transactionnelles. \"Acheter set de draps luxe Marque X king\" est un utilisateur pret a acheter maintenant. Vos pages produits doivent etre optimisees pour capter et convertir ce trafic a haute valeur. Les taux de conversion pour les requetes transactionnelles atteignent souvent 5 a 10% pour des pages produits bien optimisees.\n\nLa strategie intelligente est de construire des liens internes entre ces types de contenu, creant un chemin du contenu de sensibilisation au contenu comparatif puis aux pages produits. Cela garde les utilisateurs dans votre ecosysteme pendant leur parcours d'achat.",
          items: [
            "Etape de sensibilisation : le contenu informationnel capture les chercheurs au stade initial",
            "Etape de consideration : le contenu comparatif et d'avis guide l'evaluation",
            "Etape de decision : les pages produits convertissent les acheteurs prets a l'achat",
            "Construisez des liens internes entre les etapes pour garder les utilisateurs dans votre ecosysteme",
          ],
        },
        {
          title: "Erreurs d'intention courantes en e-commerce",
          content:
            "L'erreur la plus frequente que nous observons est d'essayer de classer une page produit pour une requete informationnelle. Si quelqu'un cherche \"comment choisir un matelas\", il ne veut pas atterrir sur une page produit d'un seul matelas. Il veut un guide qui explique les niveaux de fermete, les materiaux et les positions de sommeil. Votre page produit ne surpassera jamais un guide complet pour cette requete.\n\nLa deuxieme erreur courante est d'ignorer completement l'intention commerciale. De nombreuses boutiques ont des pages produits et des articles de blog mais rien entre les deux. Elles manquent toutes les requetes \"meilleur\", \"top\", \"avis\" et \"vs\" qui representent des utilisateurs presque prets a acheter. Ajouter du contenu comparatif et des pages de categories curees comble cette lacune.\n\nUne autre erreur est la cannibalisation de mots-cles par inadequation d'intention. Si vous avez a la fois une page de categorie et un article de blog ciblant \"vetements bebe bio\", Google doit choisir lequel classer. Si l'intention est principalement transactionnelle, l'article de blog peut cannibaliser votre page de categorie. Auditez votre contenu pour vous assurer qu'une seule page cible chaque intention principale pour un mot-cle donne.\n\nEnfin, ne supposez pas que l'intention est statique. Les changements saisonniers modifient l'intention de maniere dramatique. \"Cadeaux Saint-Valentin\" est informationnel en novembre mais devient de plus en plus transactionnel a l'approche de fevrier. Ajustez votre strategie de contenu pour correspondre a ces patterns changeants.",
        },
      ],
      navLabels: {
        previous: "Facteurs de classement e-commerce",
        next: "Google Search Console pour les boutiques",
      },
    },
    es: {
      badge: "Fundamentos de busqueda",
      heading: "Intencion de busqueda en e-commerce",
      intro:
        "Cada consulta de busqueda tiene un proposito detras, y Google es excepcionalmente bueno identificandolo. Cuando alineas tus paginas con el tipo correcto de intencion, posicionas mejor y conviertes mas. Cuando fallas, ni siquiera un SEO on-page perfecto te salvara.",
      readTime: "10 min de lectura",
      sections: [
        {
          title: "Que significa la intencion de busqueda para las tiendas online",
          content:
            "La intencion de busqueda es la razon por la que alguien escribe una consulta en Google. Busca una marca especifica? Investiga una categoria de producto? Compara opciones? Esta listo para comprar? Google clasifica cada consulta en una categoria de intencion y muestra resultados que coinciden con esa clasificacion.\n\nPara el e-commerce, la intencion lo es todo. Una pagina que coincide con la intencion del usuario obtiene tasas de clics mas altas, mayor tiempo en el sitio y mejores tasas de conversion. Google rastrea estas senales de engagement y recompensa las paginas que satisfacen lo que los buscadores realmente quieren. Una pagina de producto posicionada para una consulta informativa sera ignorada, y un articulo de blog posicionado para una consulta transaccional no convertira.\n\nEl impacto practico es significativo. Las tiendas que mapean sus paginas a la intencion correcta ven tasas de clics organicos 40-60% mas altas comparadas con las que no lo hacen. Entender la intencion tambien evita desperdiciar esfuerzos. No tiene sentido optimizar una pagina de producto para una consulta donde Google muestra exclusivamente articulos de blog y guias.",
        },
        {
          title: "Los cuatro tipos de intencion de busqueda",
          content:
            "Las directrices de evaluadores de calidad de Google identifican cuatro tipos principales de intencion, y cada uno se mapea directamente a tipos especificos de paginas en tu tienda.\n\nLa intencion de navegacion ocurre cuando alguien busca una marca o sitio web especifico. Consultas como \"zapatillas running Nike\" o \"skincare Glossier\" senalan que el usuario ya sabe lo que quiere y busca esa marca en particular. Estas consultas tipicamente tienen altas tasas de conversion porque el usuario ya ha decidido la marca.\n\nLa intencion informativa cubre consultas donde el usuario quiere aprender algo. \"Como elegir zapatillas de running\" o \"mejor rutina skincare para piel grasa\" son consultas informativas. Estos usuarios no estan listos para comprar, pero representan la parte superior de tu embudo. Articulos de blog, guias de compra y contenido educativo sirven esta intencion.\n\nLa intencion de investigacion comercial se situa entre informativa y transaccional. El usuario investiga antes de comprar. \"Mejores zapatillas running 2025\" o \"Cerave vs Cetaphil crema hidratante\" muestran que alguien esta comparando opciones. Paginas de categorias, contenido comparativo y resumenes de resenas se ajustan a esta intencion.\n\nLa intencion transaccional significa que el usuario esta listo para comprar. \"Comprar Nike Air Max 90\" o \"precio crema hidratante Cerave\" senalan disposicion de compra. Paginas de producto, paginas de categorias con botones de compra y paginas de ofertas sirven la intencion transaccional.",
          items: [
            "Navegacional: busquedas de marca, consultas directas de nombres de producto",
            "Informativa: consultas como-hacer, preguntas que-es, investigacion educativa",
            "Comercial: listas de mejores, comparaciones, busquedas de resenas, alternativas",
            "Transaccional: consultas de comprar, precio, descuento, oferta y pedido",
          ],
        },
        {
          title: "Asignar tipos de pagina a la intencion",
          content:
            "La clave de la optimizacion de intencion es servir el tipo de pagina correcto para cada consulta. El algoritmo de Google tiene opiniones fuertes al respecto, y luchar contra ellas es una batalla perdida.\n\nPara consultas transaccionales, las paginas de producto y las paginas de categorias bien estructuradas funcionan mejor. Estas paginas deben tener precios claros, estado de disponibilidad, botones de anadir al carrito y especificaciones del producto. Cuando alguien busca \"comprar camiseta algodon organico\", quiere llegar a una pagina donde pueda realmente comprar una, no leer un articulo de 2.000 palabras sobre el algodon organico.\n\nPara consultas de investigacion comercial, necesitas contenido que ayude a los usuarios a comparar y evaluar. Paginas de categorias con opciones de filtrado, tablas comparativas y selecciones curadas de productos funcionan bien. Una consulta como \"mejores auriculares inalambricos menos de 100 euros\" funciona mejor con una pagina que lista y compara multiples opciones con pros y contras.\n\nPara consultas informativas, los articulos de blog, guias de compra y contenido FAQ son tus mejores activos. Estas paginas deben ser exhaustivas y genuinamente utiles. Una consulta como \"como medir talla de anillo en casa\" necesita una guia detallada, no una pagina de listado de productos.",
          items: [
            "Paginas de producto: sirven intencion transaccional con precios claros y rutas de compra",
            "Paginas de categoria: sirven intencion transaccional y comercial con filtros y ordenacion",
            "Articulos de blog y guias: sirven intencion informativa con profundidad educativa",
            "Paginas de comparacion: sirven intencion comercial con evaluaciones lado a lado",
            "Landing pages: sirven intencion de navegacion para campanas de marca",
          ],
          tip: "Revisa los 10 primeros resultados actuales para tu palabra clave objetivo antes de crear contenido. Si Google muestra 8 articulos de blog y 2 paginas de categorias, crear una pagina de producto para esa consulta es improbable que posicione. Adapta al tipo de pagina dominante en los resultados.",
        },
        {
          title: "Como identificar la intencion desde los SERPs",
          content:
            "La forma mas fiable de determinar la intencion de busqueda es mirar lo que Google ya posiciona para una consulta. Google tiene miles de millones de puntos de datos sobre el comportamiento de los usuarios, y los resultados que muestra reflejan lo que satisface a los buscadores.\n\nBusca tu palabra clave objetivo y examina los 10 primeros resultados. Mira los tipos de paginas que posicionan: son paginas de producto, paginas de categorias, articulos de blog o articulos comparativos? Si 7 de 10 resultados son articulos de blog, Google ha clasificado esa consulta como principalmente informativa. Si todos los resultados son paginas de producto y categorias, es transaccional.\n\nTambien presta atencion a las funciones SERP. Los anuncios de Shopping y carruseles de productos indican intencion transaccional. Los fragmentos destacados y las cajas de \"La gente tambien pregunta\" sugieren intencion informativa. Los packs locales indican intencion local, relevante para tiendas con ubicaciones fisicas.\n\nObserva las consultas con intencion mixta donde Google muestra diferentes tipos de contenido. \"Zapatillas running\" podria mostrar una mezcla de paginas de categorias, resenas y paginas de marca porque la intencion es ambigua. Para estas consultas, puedes posicionar con multiples tipos de pagina apuntando a diferentes aspectos.",
          tip: "Crea una hoja de calculo sencilla con tres columnas: palabra clave, intencion dominante y tipo de pagina recomendado. Clasifica tus 50-100 palabras clave objetivo principales de esta manera antes de construir tu plan de contenido. Toma una tarde y previene meses de creacion de contenido desalineada.",
        },
        {
          title: "Mapeo de intencion a traves del recorrido del comprador",
          content:
            "La intencion de busqueda se mapea directamente al recorrido del comprador, y entender esta conexion te ayuda a captar clientes en cada etapa.\n\nEn la etapa de conciencia, los usuarios buscan consultas informativas. Alguien que escribe \"que significa el numero de hilos en sabanas\" no sabe aun que sabanas quiere. Tu contenido de blog captura a estos usuarios y les presenta tu marca. Aunque estas consultas raramente convierten directamente, construyen familiaridad y confianza.\n\nEn la etapa de consideracion, los usuarios cambian a consultas de investigacion comercial. \"Mejores sabanas de algodon egipcio\" o \"Marca A vs Marca B sabanas\" muestra que estan reduciendo opciones. Tu contenido comparativo y paginas de categorias bien organizadas capturan este trafico. Las tasas de conversion en esta etapa tipicamente van del 2 al 4%, y estos usuarios a menudo vuelven despues para comprar.\n\nEn la etapa de decision, los usuarios buscan consultas transaccionales. \"Comprar set de sabanas de lujo Marca X king\" es un usuario listo para comprar ahora mismo. Tus paginas de producto deben estar optimizadas para captar y convertir este trafico de alto valor. Las tasas de conversion para consultas transaccionales a menudo alcanzan el 5-10% en paginas de producto bien optimizadas.\n\nLa estrategia inteligente es construir enlaces internos entre estos tipos de contenido, creando un camino desde contenido de conciencia pasando por contenido comparativo hasta paginas de producto. Esto mantiene a los usuarios en tu ecosistema mientras avanzan en su recorrido de compra.",
          items: [
            "Etapa de conciencia: contenido informativo captura investigadores en fase temprana",
            "Etapa de consideracion: contenido comparativo y de resenas guia la evaluacion",
            "Etapa de decision: paginas de producto convierten compradores listos para comprar",
            "Construye enlaces internos entre etapas para mantener usuarios en tu ecosistema",
          ],
        },
        {
          title: "Errores comunes de intencion en e-commerce",
          content:
            "El error mas frecuente que vemos es intentar posicionar una pagina de producto para una consulta informativa. Si alguien busca \"como elegir un colchon\", no quiere llegar a una pagina de producto de un solo colchon. Quiere una guia que explique niveles de firmeza, materiales y posiciones para dormir. Tu pagina de producto nunca superara a una guia completa para esa consulta.\n\nEl segundo error comun es ignorar la intencion comercial por completo. Muchas tiendas tienen paginas de producto y articulos de blog pero nada entre medio. Pierden todas las consultas \"mejor\", \"top\", \"resena\" y \"vs\" que representan usuarios casi listos para comprar. Anadir contenido comparativo y paginas de categorias curadas llena este vacio.\n\nOtro error es la canibalizacion de palabras clave por desajuste de intencion. Si tienes tanto una pagina de categoria como un articulo de blog apuntando a \"ropa de bebe organica\", Google tiene que elegir cual posicionar. Si la intencion es principalmente transaccional, el articulo de blog puede estar canibalizando tu pagina de categoria. Audita tu contenido para asegurar que solo una pagina apunta a cada intencion principal para una palabra clave dada.\n\nFinalmente, no asumas que la intencion es estatica. Los cambios estacionales alteran la intencion dramaticamente. \"Regalos San Valentin\" es informativa en noviembre pero se vuelve cada vez mas transaccional conforme se acerca febrero. Ajusta tu estrategia de contenido para coincidir con estos patrones cambiantes.",
        },
      ],
      navLabels: {
        previous: "Factores de posicionamiento e-commerce",
        next: "Google Search Console para tiendas",
      },
    },
    it: {
      badge: "Fondamenti di ricerca",
      heading: "L'intento di ricerca nell'e-commerce",
      intro:
        "Ogni query di ricerca ha uno scopo, e Google e eccezionalmente bravo a capire quale sia. Quando allinei le tue pagine al giusto tipo di intento, ti posizioni meglio e converti di piu. Quando sbagli, nemmeno un SEO on-page perfetto ti salvera.",
      readTime: "10 min di lettura",
      sections: [
        {
          title: "Cosa significa l'intento di ricerca per i negozi online",
          content:
            "L'intento di ricerca e il motivo per cui qualcuno digita una query su Google. Sta cercando un marchio specifico? Sta facendo ricerche su una categoria di prodotti? Sta confrontando opzioni? E pronto ad acquistare? Google classifica ogni query in una categoria di intento e fornisce risultati che corrispondono a quella classificazione.\n\nPer l'e-commerce, l'intento e tutto. Una pagina che corrisponde all'intento dell'utente ottiene tassi di clic piu alti, tempi di permanenza piu lunghi e migliori tassi di conversione. Google traccia questi segnali di engagement e premia le pagine che soddisfano cio che gli utenti effettivamente cercano. Una pagina prodotto posizionata per una query informativa verra saltata, e un articolo di blog posizionato per una query transazionale non convertira.\n\nL'impatto pratico e significativo. I negozi che mappano le loro pagine al corretto intento vedono tassi di clic organici del 40-60% piu alti rispetto a quelli che non lo fanno. Comprendere l'intento previene anche lo spreco di risorse. Non ha senso ottimizzare una pagina prodotto per una query dove Google mostra esclusivamente articoli di blog e guide.",
        },
        {
          title: "I quattro tipi di intento di ricerca",
          content:
            "Le linee guida per i quality rater di Google identificano quattro tipi principali di intento, e ciascuno si mappa direttamente su tipi specifici di pagine nel tuo negozio.\n\nL'intento di navigazione si verifica quando qualcuno cerca un marchio o un sito web specifico. Query come \"scarpe da corsa Nike\" o \"skincare Glossier\" segnalano che l'utente sa gia cosa vuole e cerca quel marchio in particolare. Queste query hanno tipicamente alti tassi di conversione perche l'utente ha gia deciso il marchio.\n\nL'intento informativo copre le query dove l'utente vuole imparare qualcosa. \"Come scegliere le scarpe da corsa\" o \"migliore routine skincare per pelle grassa\" sono query informative. Questi utenti non sono ancora pronti ad acquistare, ma rappresentano la parte alta del tuo funnel. Articoli di blog, guide all'acquisto e contenuti educativi servono questo intento.\n\nL'intento di indagine commerciale si colloca tra l'informativo e il transazionale. L'utente sta ricercando prima di acquistare. \"Migliori scarpe da corsa 2025\" o \"Cerave vs Cetaphil crema idratante\" mostrano che qualcuno sta confrontando opzioni. Pagine di categoria, contenuti comparativi e sintesi di recensioni corrispondono a questo intento.\n\nL'intento transazionale significa che l'utente e pronto ad acquistare. \"Comprare Nike Air Max 90\" o \"prezzo crema idratante Cerave\" segnalano prontezza all'acquisto. Pagine prodotto, pagine di categoria con pulsanti di acquisto e pagine di offerte servono l'intento transazionale.",
          items: [
            "Navigazionale: ricerche di marchio, consultazione diretta di nomi prodotto",
            "Informativo: query come-fare, domande cos'e, ricerca educativa",
            "Commerciale: liste dei migliori, confronti, ricerche di recensioni, alternative",
            "Transazionale: query di acquisto, prezzo, sconto, offerta e ordine",
          ],
        },
        {
          title: "Associare i tipi di pagina all'intento",
          content:
            "La chiave dell'ottimizzazione dell'intento e fornire il tipo di pagina giusto per ogni query. L'algoritmo di Google ha opinioni forti su questo, e combattere contro di esse e una battaglia persa.\n\nPer le query transazionali, le pagine prodotto e le pagine di categoria ben strutturate funzionano meglio. Queste pagine devono avere prezzi chiari, stato di disponibilita, pulsanti aggiungi al carrello e specifiche del prodotto. Quando qualcuno cerca \"comprare maglietta cotone biologico\", vuole atterrare su una pagina dove puo effettivamente acquistarne una, non leggere un articolo di 2.000 parole sul cotone biologico.\n\nPer le query di indagine commerciale, serve contenuto che aiuti gli utenti a confrontare e valutare. Pagine di categoria con opzioni di filtro, tabelle comparative e selezioni curate di prodotti funzionano bene. Una query come \"migliori auricolari wireless sotto 100 euro\" funziona meglio con una pagina che elenca e confronta diverse opzioni con pro e contro.\n\nPer le query informative, articoli di blog, guide all'acquisto e contenuti FAQ sono le tue migliori risorse. Queste pagine devono essere approfondite e genuinamente utili. Una query come \"come misurare la taglia dell'anello a casa\" necessita di una guida dettagliata, non di una pagina di catalogo prodotti.",
          items: [
            "Pagine prodotto: servono intento transazionale con prezzi chiari e percorsi d'acquisto",
            "Pagine di categoria: servono intento transazionale e commerciale con filtri e ordinamento",
            "Articoli di blog e guide: servono intento informativo con profondita educativa",
            "Pagine di confronto: servono intento commerciale con valutazioni affiancate",
            "Landing page: servono intento navigazionale per campagne di brand",
          ],
          tip: "Controlla i primi 10 risultati attuali per la tua parola chiave target prima di creare contenuti. Se Google mostra 8 articoli di blog e 2 pagine di categoria, creare una pagina prodotto per quella query difficilmente si posizionera. Adatta al tipo di pagina dominante nei risultati.",
        },
        {
          title: "Come identificare l'intento dalle SERP",
          content:
            "Il modo piu affidabile per determinare l'intento di ricerca e guardare cosa Google gia posiziona per una query. Google ha miliardi di punti dati sul comportamento degli utenti, e i risultati che mostra riflettono cio che soddisfa chi cerca.\n\nCerca la tua parola chiave target ed esamina i primi 10 risultati. Guarda i tipi di pagine posizionate: sono pagine prodotto, pagine di categoria, articoli di blog o articoli comparativi? Se 7 risultati su 10 sono articoli di blog, Google ha classificato quella query come principalmente informativa. Se tutti i risultati sono pagine prodotto e di categoria, e transazionale.\n\nPresta attenzione anche alle funzionalita SERP. Gli annunci Shopping e i caroselli di prodotti indicano intento transazionale. I featured snippet e le caselle \"Le persone chiedono anche\" suggeriscono intento informativo. I pack locali indicano intento locale, importante per i negozi con sedi fisiche.\n\nOsserva le query con intento misto dove Google mostra diversi tipi di contenuto. \"Scarpe da corsa\" potrebbe mostrare un mix di pagine di categoria, recensioni e pagine di marca perche l'intento e ambiguo. Per queste query, puoi posizionarti con diversi tipi di pagina che puntano a diversi aspetti.",
          tip: "Crea un semplice foglio di calcolo con tre colonne: parola chiave, intento dominante e tipo di pagina raccomandato. Classifica le tue 50-100 parole chiave target principali in questo modo prima di costruire il tuo piano di contenuti. Ci vuole un pomeriggio e previene mesi di creazione di contenuti disallineati.",
        },
        {
          title: "Mappatura dell'intento lungo il percorso d'acquisto",
          content:
            "L'intento di ricerca si mappa direttamente sul percorso d'acquisto, e comprendere questa connessione ti aiuta a catturare clienti in ogni fase.\n\nNella fase di consapevolezza, gli utenti cercano query informative. Qualcuno che digita \"cosa significa il numero di fili per le lenzuola\" non sa ancora quali lenzuola vuole. Il tuo contenuto blog cattura questi utenti e presenta il tuo marchio. Queste query raramente convertono direttamente, ma costruiscono familiarita e fiducia.\n\nNella fase di considerazione, gli utenti passano a query di indagine commerciale. \"Migliori lenzuola in cotone egiziano\" o \"Marca A vs Marca B lenzuola\" mostra che stanno restringendo le opzioni. I tuoi contenuti comparativi e le pagine di categoria ben organizzate catturano questo traffico. I tassi di conversione in questa fase vanno tipicamente dal 2 al 4%, e questi utenti spesso tornano in seguito per acquistare.\n\nNella fase decisionale, gli utenti cercano query transazionali. \"Comprare set lenzuola lusso Marca X king\" e un utente pronto ad acquistare ora. Le tue pagine prodotto devono essere ottimizzate per catturare e convertire questo traffico ad alto valore. I tassi di conversione per query transazionali raggiungono spesso il 5-10% per pagine prodotto ben ottimizzate.\n\nLa mossa intelligente e costruire link interni tra questi tipi di contenuto, creando un percorso dal contenuto di sensibilizzazione attraverso il contenuto comparativo fino alle pagine prodotto. Questo mantiene gli utenti nel tuo ecosistema mentre avanzano nel loro percorso d'acquisto.",
          items: [
            "Fase di consapevolezza: contenuto informativo cattura i ricercatori in fase iniziale",
            "Fase di considerazione: contenuto comparativo e di recensioni guida la valutazione",
            "Fase decisionale: pagine prodotto convertono acquirenti pronti all'acquisto",
            "Costruisci link interni tra le fasi per mantenere gli utenti nel tuo ecosistema",
          ],
        },
        {
          title: "Errori comuni di intento nell'e-commerce",
          content:
            "L'errore piu frequente che vediamo e tentare di posizionare una pagina prodotto per una query informativa. Se qualcuno cerca \"come scegliere un materasso\", non vuole atterrare su una pagina prodotto di un singolo materasso. Vuole una guida che spieghi livelli di fermezza, materiali e posizioni di sonno. La tua pagina prodotto non superera mai una guida completa per quella query.\n\nIl secondo errore comune e ignorare completamente l'intento commerciale. Molti negozi hanno pagine prodotto e articoli di blog ma nulla nel mezzo. Perdono tutte le query \"migliore\", \"top\", \"recensione\" e \"vs\" che rappresentano utenti quasi pronti ad acquistare. Aggiungere contenuti comparativi e pagine di categoria curate colma questo vuoto.\n\nUn altro errore e la cannibalizzazione delle parole chiave per disallineamento di intento. Se hai sia una pagina di categoria che un articolo di blog che puntano a \"abbigliamento neonato biologico\", Google deve scegliere quale posizionare. Se l'intento e principalmente transazionale, l'articolo di blog potrebbe cannibalizzare la tua pagina di categoria. Audita i tuoi contenuti per assicurarti che solo una pagina punti a ciascun intento principale per una data parola chiave.\n\nInfine, non dare per scontato che l'intento sia statico. I cambiamenti stagionali alterano l'intento drasticamente. \"Regali San Valentino\" e informativo a novembre ma diventa sempre piu transazionale con l'avvicinarsi di febbraio. Adatta la tua strategia di contenuti per corrispondere a questi pattern in evoluzione.",
        },
      ],
      navLabels: {
        previous: "Fattori di posizionamento e-commerce",
        next: "Google Search Console per i negozi",
      },
    },
    nl: {
      badge: "Zoekfundamenten",
      heading: "Zoekintentie voor e-commerce",
      intro:
        "Elke zoekopdracht heeft een doel, en Google is uitzonderlijk goed in het achterhalen daarvan. Wanneer je je pagina's afstemt op het juiste type intentie, scoor je hoger en converteer je beter. Als je het verkeerd hebt, redt zelfs perfecte on-page SEO je niet.",
      readTime: "10 min leestijd",
      sections: [
        {
          title: "Wat zoekintentie betekent voor online winkels",
          content:
            "Zoekintentie is de reden waarom iemand een zoekopdracht intypt in Google. Zoekt de persoon een specifiek merk? Onderzoekt die een productcategorie? Vergelijkt die opties? Is die klaar om te kopen? Google classificeert elke zoekopdracht in een intentiecategorie en toont resultaten die bij die classificatie passen.\n\nVoor e-commerce is intentie alles. Een pagina die overeenkomt met de intentie van de gebruiker krijgt hogere klikpercentages, langere verblijftijden en betere conversieratio's. Google volgt deze engagementsignalen en beloont pagina's die daadwerkelijk leveren wat zoekers willen. Een productpagina die rankt voor een informatieve zoekopdracht wordt overgeslagen, en een blogpost die rankt voor een transactionele zoekopdracht converteert niet.\n\nDe praktische impact is aanzienlijk. Winkels die hun pagina's afstemmen op de juiste intentie zien 40-60% hogere organische klikpercentages vergeleken met degenen die dat niet doen. Intentie begrijpen voorkomt ook verspilde moeite. Het heeft geen zin om een productpagina te optimaliseren voor een zoekopdracht waarbij Google uitsluitend blogposts en gidsen toont.",
        },
        {
          title: "De vier typen zoekintentie",
          content:
            "Googles quality rater-richtlijnen identificeren vier primaire intentietypen, en elk daarvan mapt direct naar specifieke paginatypen in je winkel.\n\nNavigatie-intentie is wanneer iemand naar een specifiek merk of website zoekt. Zoekopdrachten als \"Nike hardloopschoenen\" of \"Glossier skincare\" geven aan dat de gebruiker al weet wat die wil en naar dat specifieke merk zoekt. Deze zoekopdrachten hebben doorgaans hoge conversieratio's omdat de gebruiker al voor het merk heeft gekozen.\n\nInformatieve intentie omvat zoekopdrachten waarbij de gebruiker iets wil leren. \"Hoe kies ik hardloopschoenen\" of \"beste skincare routine voor vette huid\" zijn informatieve zoekopdrachten. Deze gebruikers zijn nog niet klaar om te kopen, maar ze vertegenwoordigen de bovenkant van je funnel. Blogposts, koopgidsen en educatieve content bedienen deze intentie.\n\nCommercieel onderzoekende intentie zit tussen informatief en transactioneel. De gebruiker doet onderzoek voor de aankoop. \"Beste hardloopschoenen 2025\" of \"Cerave vs Cetaphil moisturizer\" laten zien dat iemand opties vergelijkt. Categoriepagina's, vergelijkende content en beoordelingsoverzichten passen bij deze intentie.\n\nTransactionele intentie betekent dat de gebruiker klaar is om te kopen. \"Nike Air Max 90 kopen\" of \"Cerave moisturizer prijs\" signaleren koopbereidheid. Productpagina's, categoriepagina's met koopknoppen en dealpagina's bedienen transactionele intentie.",
          items: [
            "Navigatie: merkzoekopdrachten, directe productnaam-opzoekingen, winkelnamen",
            "Informatief: hoe-doe-je-vragen, wat-is-vragen, educatief onderzoek",
            "Commercieel: beste-lijsten, vergelijkingen, beoordelingszoekopdrachten, alternatieven",
            "Transactioneel: koop-, prijs-, korting-, deal- en bestelzoekopdrachten",
          ],
        },
        {
          title: "Paginatypen afstemmen op intentie",
          content:
            "De sleutel tot intentieoptimalisatie is het juiste paginatype aanbieden voor elke zoekopdracht. Googles algoritme heeft sterke meningen hierover, en ertegen vechten is een verloren strijd.\n\nVoor transactionele zoekopdrachten presteren productpagina's en goed gestructureerde categoriepagina's het best. Deze pagina's moeten duidelijke prijzen, beschikbaarheidsstatus, winkelwagen-knoppen en productspecificaties hebben. Wanneer iemand zoekt op \"biologisch katoenen t-shirt kopen\", wil die op een pagina landen waar die daadwerkelijk een kan kopen, niet een artikel van 2.000 woorden over biologisch katoen lezen.\n\nVoor commercieel onderzoekende zoekopdrachten heb je content nodig die gebruikers helpt vergelijken en evalueren. Categoriepagina's met filteropties, vergelijkingstabellen en samengestelde productoverzichten werken goed. Een zoekopdracht als \"beste draadloze oordopjes onder 100 euro\" presteert het best met een pagina die meerdere opties opsomt en vergelijkt met voor- en nadelen.\n\nVoor informatieve zoekopdrachten zijn blogposts, koopgidsen en FAQ-content je beste troeven. Deze pagina's moeten grondig en oprecht nuttig zijn. Een zoekopdracht als \"hoe meet ik mijn ringmaat thuis\" heeft een gedetailleerde gids nodig, geen productoverzichtspagina.",
          items: [
            "Productpagina's: bedienen transactionele intentie met duidelijke prijzen en kooppaden",
            "Categoriepagina's: bedienen transactionele en commerciele intentie met filters en sortering",
            "Blogposts en gidsen: bedienen informatieve intentie met educatieve diepgang",
            "Vergelijkingspagina's: bedienen commerciele intentie met zij-aan-zij evaluaties",
            "Landingspagina's: bedienen navigatie-intentie voor merkcampagnes",
          ],
          tip: "Controleer de huidige top 10-resultaten voor je doelzoekwoord voordat je content maakt. Als Google 8 blogposts en 2 categoriepagina's toont, is het onwaarschijnlijk dat een productpagina voor die zoekopdracht zal ranken. Stem af op het dominante paginatype in de resultaten.",
        },
        {
          title: "Hoe intentie te identificeren uit de SERPs",
          content:
            "De meest betrouwbare manier om zoekintentie te bepalen is te kijken naar wat Google al rankt voor een zoekopdracht. Google heeft miljarden datapunten over gebruikersgedrag, en de resultaten die het toont weerspiegelen wat zoekers tevreden stelt.\n\nZoek op je doelzoekwoord en bekijk de top 10-resultaten. Kijk naar de typen pagina's die ranken: zijn het productpagina's, categoriepagina's, blogposts of vergelijkingsartikelen? Als 7 van de 10 resultaten blogposts zijn, heeft Google die zoekopdracht als voornamelijk informatief geclassificeerd. Als alle resultaten product- en categoriepagina's zijn, is het transactioneel.\n\nLet ook op SERP-features. Shopping-advertenties en productcarrousels duiden op transactionele intentie. Featured snippets en \"Mensen vragen ook\"-boxen suggereren informatieve intentie. Lokale pakketten duiden op lokale intentie, wat relevant is voor winkels met fysieke locaties.\n\nLet op zoekopdrachten met gemengde intentie waarbij Google verschillende contenttypen toont. \"Hardloopschoenen\" kan een mix van categoriepagina's, recensies en merkpagina's tonen omdat de intentie ambigu is. Voor deze zoekopdrachten kun je ranken met meerdere paginatypen die verschillende aspecten aanpakken.",
          tip: "Maak een eenvoudig spreadsheet met drie kolommen: zoekwoord, dominante intentie en aanbevolen paginatype. Classificeer je top 50-100 doelzoekwoorden op deze manier voordat je je contentplan bouwt. Het kost een middag en voorkomt maanden van verkeerd afgestemde contentcreatie.",
        },
        {
          title: "Intentie-mapping langs het koperstraject",
          content:
            "Zoekintentie mapt direct op het koperstraject, en het begrijpen van deze verbinding helpt je klanten in elke fase te vangen.\n\nIn de bewustwordingsfase zoeken gebruikers informatieve zoekopdrachten. Iemand die \"wat betekent draadtelling bij lakens\" typt, weet nog niet welke lakens die wil. Je blogcontent vangt deze gebruikers op en introduceert ze bij je merk. Hoewel deze zoekopdrachten zelden direct converteren, bouwen ze bekendheid en vertrouwen op.\n\nIn de overwegingsfase verschuiven gebruikers naar commercieel onderzoekende zoekopdrachten. \"Beste Egyptisch katoenen lakens\" of \"Merk A vs Merk B lakens\" laat zien dat ze opties aan het beperken zijn. Je vergelijkende content en goed georganiseerde categoriepagina's vangen dit verkeer op. Conversieratio's in deze fase lopen typisch van 2-4%, en deze gebruikers komen vaak later terug om te kopen.\n\nIn de beslissingsfase zoeken gebruikers transactionele zoekopdrachten. \"Merk X luxe lakkenset king kopen\" is een gebruiker die nu klaar is om te kopen. Je productpagina's moeten geoptimaliseerd zijn om dit waardevolle verkeer op te vangen en te converteren. Conversieratio's voor transactionele zoekopdrachten bereiken vaak 5-10% voor goed geoptimaliseerde productpagina's.\n\nDe slimme zet is interne links bouwen tussen deze contenttypen, waardoor een pad ontstaat van bewustwordingscontent via vergelijkende content naar productpagina's. Dit houdt gebruikers in je ecosysteem terwijl ze door hun kooptraject bewegen.",
          items: [
            "Bewustwordingsfase: informatieve content vangt onderzoekers in vroege fase",
            "Overwegingsfase: vergelijkende en beoordelende content begeleidt evaluatie",
            "Beslissingsfase: productpagina's converteren koopklare shoppers",
            "Bouw interne links tussen fases om gebruikers in je ecosysteem te houden",
          ],
        },
        {
          title: "Veelgemaakte intentiefouten in e-commerce",
          content:
            "De meest voorkomende fout die we zien is proberen een productpagina te laten ranken voor een informatieve zoekopdracht. Als iemand zoekt op \"hoe kies ik een matras\", wil die niet op een productpagina van een enkel matras landen. Die wil een gids die stevigheidsniveaus, materialen en slaaphoudingen uitlegt. Je productpagina zal nooit een uitgebreide gids overtreffen voor die zoekopdracht.\n\nDe tweede veelgemaakte fout is commerciele intentie volledig negeren. Veel winkels hebben productpagina's en blogposts maar niets ertussen. Ze missen alle \"beste\", \"top\", \"review\" en \"vs\"-zoekopdrachten die gebruikers vertegenwoordigen die bijna klaar zijn om te kopen. Vergelijkende content en samengestelde categoriepagina's toevoegen vult dit gat.\n\nEen andere fout is keyword-kannibalisatie door intentie-mismatch. Als je zowel een categoriepagina als een blogpost hebt die zich richten op \"biologische babykleding\", moet Google kiezen welke te ranken. Als de intentie voornamelijk transactioneel is, kan de blogpost je categoriepagina kannibaliseren. Audit je content om ervoor te zorgen dat slechts een pagina zich richt op elke primaire intentie voor een gegeven zoekwoord.\n\nGa er ten slotte niet van uit dat intentie statisch is. Seizoensgebonden verschuivingen veranderen intentie dramatisch. \"Valentijnsdag cadeaus\" is informatief in november maar wordt steeds transactioneler naarmate februari nadert. Pas je contentstrategie aan op deze verschuivende patronen.",
        },
      ],
      navLabels: {
        previous: "E-commerce rankingfactoren",
        next: "Google Search Console voor winkels",
      },
    },
  },
};
