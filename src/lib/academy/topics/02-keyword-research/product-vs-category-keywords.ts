import type { AcademyTopic } from "../../types";

export const productVsCategoryKeywords: AcademyTopic = {
  slug: "product-vs-category-keywords",
  cluster: 2,
  resources: [{"label":"Google Keyword Planner","url":"https://ads.google.com/home/tools/keyword-planner/","type":"tool"},{"label":"Ahrefs Free Keyword Difficulty Checker","url":"https://ahrefs.com/keyword-difficulty","type":"tool"}],
  content: {
    en: {
      badge: "Keyword Research",
      heading: "Product vs. Category Keywords",
      intro:
        "Deciding whether to target a keyword with a product page or a category page is one of the most consequential SEO choices for any online store. Get it wrong, and your pages compete against each other instead of against competitors.",
      readTime: "8 min read",
      sections: [
        {
          title: "When to Target With Product Pages vs. Category Pages",
          content:
            "The simplest rule: look at what Google already ranks for the keyword. If the top 10 results are mostly product detail pages (single items with an add-to-cart button), target it with a product page. If the top 10 shows category listings, collection pages, or comparison-style content, use a category page.\n\nProduct pages should target specific, narrow queries: exact product names, model numbers, SKU-level terms, and queries containing detailed specifications like size, color, or material. These are bottom-of-funnel terms where the searcher knows what they want.\n\nCategory pages should target broader terms that describe a type of product rather than a specific one: \"men's waterproof hiking boots,\" \"wireless noise-cancelling headphones,\" or \"organic cotton bedsheets.\" These mid-funnel terms have higher volume but require the searcher to browse options before buying.\n\nThe gray area appears with terms like brand + product type (\"Nike running shoes\"). Check the SERP, Google might show a mix of brand category pages and individual product pages. In these cases, a filtered category page showing only that brand typically wins.",
          image: {
            src: "/images/academy/product-vs-category-decision.svg",
            alt: "Decision diagram showing when to target keywords with product pages versus category pages based on SERP analysis and keyword specificity",
            caption: "Always check the SERP first. Google's top results tell you which page type it expects for each keyword.",
          },
          items: [
            "Check the SERP before deciding: Google tells you which page type it prefers for each keyword",
            "Product pages target: specific models, SKUs, product names, and detailed attribute combinations",
            "Category pages target: product type terms, brand + category, and mid-funnel browsing queries",
            "When the SERP shows mixed results, a well-structured category page usually has the advantage",
          ],
          callout: {
            title: "Volume Split",
            text: "For a store with 1,000 products across 50 categories: category pages target ~150 mid-tail keywords (1K-5K searches each), while product pages target 3,000+ long-tail keywords (20-500 searches each). Total addressable long-tail volume often exceeds mid-tail.",
          },
        },
        {
          title: "Head Terms vs. Long-Tail Distribution",
          content:
            "In a typical ecommerce keyword landscape, the distribution follows a predictable pattern. A small number of head terms (\"laptops,\" \"running shoes,\" \"skincare\") carry enormous volume but convert poorly and are brutally competitive. The mid-tail (\"gaming laptops under 1000,\" \"women's trail running shoes\") represents the sweet spot of volume, intent, and achievable difficulty.\n\nThe long tail, which makes up 70-80% of all search queries, consists of highly specific terms that individually have tiny volume but collectively drive the majority of ecommerce revenue. These map naturally to product pages.\n\nHere is how the math typically breaks down for a store with 1,000 products across 50 categories. The 50 category pages might target 150 mid-tail keywords, averaging 1,000-5,000 searches each. The 1,000 product pages might target 3,000+ long-tail keywords, averaging 20-500 searches each. Total addressable search volume from the long tail often exceeds the mid-tail.\n\nThe strategic insight: your category pages fight for competitive mid-tail terms, while your product pages quietly accumulate long-tail traffic with minimal effort. Both layers matter, but most stores under-invest in product page optimization.",
        },
        {
          title: "How Category Pages Rank for Mid-Funnel Terms",
          content:
            "Category pages have structural advantages for mid-funnel keywords. They contain multiple products (more content signals), they typically receive more internal links (from navigation, breadcrumbs, and cross-links), and they match the search intent of someone browsing options rather than looking at one item.\n\nTo rank effectively, category pages need more than a grid of product thumbnails. Our guide to [category page SEO](/academy/category-page-seo) covers this in detail, but the essentials include a descriptive intro paragraph (100-200 words) using the target keyword naturally, filter options that reflect how people search (by price range, features, use case), and enough product listings to demonstrate authority on the topic.\n\nFaceted navigation creates a powerful opportunity here, as explained in our [ecommerce category page SEO](/blog/ecommerce-category-page-seo) guide. If your category page for \"wireless headphones\" lets users filter by \"noise-cancelling,\" \"over-ear,\" and \"under $100,\" you can create filtered views that target specific mid-tail terms. The URL structure matters, each meaningful filter combination should produce a crawlable, indexable URL.\n\nDon't forget the category page copy below the product grid. A 300-500 word section covering buying considerations, feature comparisons, and use-case recommendations helps both rankings and conversion. This content answers the questions that mid-funnel shoppers have, building trust before they click through to a product.",
          items: [
            "Add a 100-200 word intro paragraph with the primary keyword to every category page",
            "Build filter options that mirror search behavior: price, features, brand, use case",
            "Create indexable URLs for high-value filter combinations",
            "Include 300-500 words of buying guidance below the product grid",
          ],
          tip: "Check your analytics for search queries that match filter combinations. If people search for \"waterproof bluetooth speakers under 50,\" make sure that exact filter combination has its own crawlable URL with optimized content.",
        },
        {
          title: "Product Page Keyword Targeting With Attributes and Specs",
          content:
            "Product pages naturally target a primary keyword, usually the product name. But the real SEO value comes from the secondary keywords you weave into the page through specifications, attributes, and descriptive content.\n\nEvery product attribute is a keyword opportunity. A product page for a hiking backpack should naturally include the volume (in liters), the material, the weight, waterproof rating, number of compartments, frame type, and compatible body sizes. Each of these attributes, when combined with the product type, creates a long-tail keyword that the page can rank for.\n\nThe product description is where most stores drop the ball. Manufacturer descriptions are duplicated across every retailer who carries the product, zero SEO value. Write unique descriptions that incorporate attributes as natural language: \"This 45-liter ultralight backpack weighs just 890 grams and features a waterproof ripstop nylon shell\" targets at least four long-tail variations.\n\nStructured data (product schema) amplifies the visibility of these attributes in search results. When your product page includes proper schema markup for price, availability, reviews, and specifications, Google can display rich snippets that improve click-through rates by 20-30%. Learn more about optimizing these pages in our [product page SEO](/academy/product-page-seo) topic.",
          tip: "Build a product page content template for each product category. List all relevant attributes as fields, this ensures every product page covers the same keyword-rich specifications, even when written by different team members.",
        },
        {
          title: "Avoiding Cannibalization Between Product and Category Pages",
          content:
            "Keyword cannibalization happens when multiple pages on your site compete for the same search term. For ecommerce stores, the most common form is a category page and a product page both trying to rank for the same keyword. Google gets confused about which page to show, and often neither ranks well.\n\nThe clearest signal of cannibalization: check GSC for a keyword and see if multiple URLs from your site appear for it, with rankings fluctuating between them. If your category page for \"men's leather boots\" and a specific product page swap between position 8 and position 15, that's cannibalization eating your rankings.\n\nPrevention is straightforward. Assign one primary keyword to each page and document it in your keyword map. Category pages get the broader term (\"men's leather boots\"), product pages get the specific term (\"Wolverine 1000 Mile boot brown size 10\"). The product page title and H1 should use the product name, not the category keyword.\n\nInternal linking reinforces the hierarchy. Your product page should link to its parent category (reinforcing the category as the authority for the broader term), and your category page should link to individual products (passing authority down to the specific terms). Breadcrumbs handle this naturally when structured correctly.\n\nWhen cannibalization already exists, the fix depends on which page should rank. Usually, it's the category page for mid-tail terms and the product page for specific product terms. Add a canonical hint by strengthening internal links to the preferred page, and adjust the on-page optimization of the non-preferred page to focus on different keywords.",
          items: [
            "Check GSC for keywords where multiple URLs from your site appear, this signals cannibalization",
            "Assign one primary keyword per page and record it in your keyword map",
            "Use internal linking to reinforce which page is the authority for each term",
            "When cannibalization exists, strengthen the preferred page and re-optimize the other",
          ],
        },
        {
          title: "Practical Decision Framework",
          content:
            "When you encounter a new keyword, run through this decision tree. First, check the SERP: what page types rank in the top 5? If product pages dominate, assign it to a product page. If category/listing pages dominate, assign it to a category page.\n\nSecond, evaluate the specificity. Does the keyword describe one item or a group of items? \"Sony WH-1000XM5\" is one item, product page. \"Best wireless headphones for running\" describes a group, category or guide page.\n\nThird, check your existing pages. Do you already have a page that targets this keyword or something very close? If yes, optimize the existing page rather than creating a new one. Creating duplicate targeting is one of the fastest ways to trigger cannibalization.\n\nFourth, consider the user journey. Where does someone searching this term fall in the buying process? Early-stage browsers need category pages with filters and comparisons. Ready-to-buy shoppers need product pages with specifications and purchase options. Matching your page type to the buyer's stage directly impacts conversion rates.",
        },
      ],
      navLabels: {
        previous: "Buyer Intent vs. Search Volume",
        next: "Long-Tail Keywords for Products",
      },
    },
    de: {
      badge: "Keyword-Recherche",
      heading: "Produkt- vs. Kategorie-Keywords",
      intro:
        "Die Entscheidung, ob ein Keyword mit einer Produktseite oder einer Kategorieseite angesteuert werden soll, gehoert zu den folgenreichsten SEO-Entscheidungen fuer jeden Online-Shop. Liegt man falsch, konkurrieren die eigenen Seiten gegeneinander statt gegen Wettbewerber.",
      readTime: "8 Min. Lesezeit",
      sections: [
        {
          title: "Wann Produktseiten, wann Kategorieseiten einsetzen",
          content:
            "Die einfachste Regel: Schauen Sie, was Google bereits fuer das Keyword rankt. Wenn die Top 10 hauptsaechlich Produktdetailseiten zeigen (einzelne Artikel mit Warenkorb-Button), targetieren Sie es mit einer Produktseite. Wenn die Top 10 Kategorielistungen, Kollektionsseiten oder vergleichende Inhalte zeigen, verwenden Sie eine Kategorieseite.\n\nProduktseiten sollten spezifische, enge Anfragen abdecken: exakte Produktnamen, Modellnummern, SKU-Begriffe und Anfragen mit detaillierten Spezifikationen wie Groesse, Farbe oder Material. Das sind Bottom-of-Funnel-Begriffe, bei denen der Suchende genau weiss, was er will.\n\nKategorieseiten sollten breitere Begriffe abdecken, die einen Produkttyp statt eines spezifischen Produkts beschreiben: \"Herren wasserdichte Wanderstiefel\", \"kabellose Noise-Cancelling-Kopfhoerer\" oder \"Bio-Baumwoll-Bettwaesche\". Diese Mid-Funnel-Begriffe haben hoeheres Volumen, erfordern aber, dass der Suchende Optionen durchstobert, bevor er kauft.\n\nDie Grauzone tritt bei Begriffen wie Marke + Produkttyp auf (\"Nike Laufschuhe\"). Pruefen Sie die SERP, Google koennte eine Mischung aus Marken-Kategorieseiten und einzelnen Produktseiten anzeigen. In diesen Faellen gewinnt typischerweise eine gefilterte Kategorieseite, die nur diese Marke zeigt.",
          items: [
            "Pruefen Sie die SERP vor der Entscheidung: Google zeigt Ihnen, welchen Seitentyp es fuer jedes Keyword bevorzugt",
            "Produktseiten targetieren: spezifische Modelle, SKUs, Produktnamen und detaillierte Attributkombinationen",
            "Kategorieseiten targetieren: Produkttyp-Begriffe, Marke + Kategorie und Mid-Funnel-Suchanfragen",
            "Bei gemischten SERP-Ergebnissen hat eine gut strukturierte Kategorieseite normalerweise den Vorteil",
          ],
          image: {
            src: "/images/academy/de/product-vs-category-decision.svg",
            alt: "Entscheidungsdiagramm für Produktseiten versus Kategorieseiten",
            caption: "Prüfen Sie immer zuerst die SERP. Google zeigt Ihnen, welchen Seitentyp es bevorzugt.",
          },
          callout: {
            title: "Volumen-Aufteilung",
            text: "Kategorieseiten zielen auf ~150 Mid-Tail-Keywords (1K-5K Suchen), Produktseiten auf 3.000+ Long-Tail-Keywords (20-500 Suchen).",
          },
        },
        {
          title: "Head-Terms vs. Long-Tail-Verteilung",
          content:
            "In einer typischen E-Commerce-Keyword-Landschaft folgt die Verteilung einem vorhersagbaren Muster. Eine kleine Anzahl von Head-Terms (\"Laptops\", \"Laufschuhe\", \"Hautpflege\") hat enormes Volumen, konvertiert aber schlecht und ist brutal umkaempft. Der Mid-Tail (\"Gaming-Laptops unter 1000 Euro\", \"Damen Trailrunning-Schuhe\") repraesentiert den Sweet Spot aus Volumen, Absicht und erreichbarer Schwierigkeit.\n\nDer Long Tail, der 70-80% aller Suchanfragen ausmacht, besteht aus hochspezifischen Begriffen, die einzeln winziges Volumen haben, aber zusammen den Grossteil des E-Commerce-Umsatzes treiben. Diese passen natuerlich zu Produktseiten.\n\nSo sieht die Rechnung typischerweise fuer einen Shop mit 1.000 Produkten in 50 Kategorien aus. Die 50 Kategorieseiten koennten 150 Mid-Tail-Keywords abdecken, mit durchschnittlich 1.000-5.000 Suchen pro Keyword. Die 1.000 Produktseiten koennten ueber 3.000 Long-Tail-Keywords abdecken, mit durchschnittlich 20-500 Suchen. Das gesamte adressierbare Suchvolumen aus dem Long Tail uebersteigt oft den Mid-Tail.\n\nDie strategische Erkenntnis: Ihre Kategorieseiten kaempfen um wettbewerbsintensive Mid-Tail-Begriffe, waehrend Ihre Produktseiten leise Long-Tail-Traffic ansammeln mit minimalem Aufwand. Beide Ebenen zaehlen, aber die meisten Shops investieren zu wenig in die Optimierung von Produktseiten.",
        },
        {
          title: "Wie Kategorieseiten fuer Mid-Funnel-Begriffe ranken",
          content:
            "Kategorieseiten haben strukturelle Vorteile fuer Mid-Funnel-Keywords. Sie enthalten mehrere Produkte (mehr Content-Signale), erhalten typischerweise mehr interne Links (aus Navigation, Breadcrumbs und Querverweisen) und entsprechen der Suchabsicht von jemandem, der Optionen durchstobert, statt sich einen einzelnen Artikel anzusehen.\n\nUm effektiv zu ranken, brauchen Kategorieseiten mehr als ein Raster mit Produktminiaturen. Sie benoetigen einen beschreibenden Einleitungsabsatz (100-200 Woerter) mit dem Ziel-Keyword, Filteroptionen, die widerspiegeln, wie Menschen suchen (nach Preisbereich, Funktionen, Anwendungsfall), und genug Produktlistungen, um Autoritaet zum Thema zu demonstrieren. Unser Leitfaden zu [Kategorieseiten-SEO](/academy/category-page-seo) behandelt dies im Detail.\n\nFacettierte Navigation schafft hier eine maechtige Gelegenheit. Wenn Ihre Kategorieseite fuer \"kabellose Kopfhoerer\" den Nutzern ermoeglicht, nach \"Noise-Cancelling\", \"Over-Ear\" und \"unter 100 Euro\" zu filtern, koennen Sie gefilterte Ansichten erstellen, die spezifische Mid-Tail-Begriffe abdecken. Die URL-Struktur ist entscheidend, jede sinnvolle Filterkombination sollte eine crawlbare, indexierbare URL erzeugen. Weitere Informationen finden Sie in unserem Leitfaden zu [Ecommerce-Kategorieseiten-SEO](/blog/ecommerce-category-page-seo).\n\nVergessen Sie nicht den Kategorie-Text unterhalb des Produktrasters. Ein 300-500 Woerter langer Abschnitt ueber Kaufueberlegungen, Funktionsvergleiche und Empfehlungen nach Anwendungsfall hilft sowohl beim Ranking als auch bei der Conversion. Dieser Content beantwortet die Fragen, die Mid-Funnel-Kaeufer haben, und baut Vertrauen auf, bevor sie sich zu einem Produkt durchklicken.",
          items: [
            "Fuegen Sie einen 100-200 Woerter langen Einleitungsabsatz mit dem primaeren Keyword auf jeder Kategorieseite hinzu",
            "Erstellen Sie Filteroptionen, die das Suchverhalten widerspiegeln: Preis, Funktionen, Marke, Anwendungsfall",
            "Erstellen Sie indexierbare URLs fuer wertvolle Filterkombinationen",
            "Integrieren Sie 300-500 Woerter Kaufberatung unterhalb des Produktrasters",
          ],
          tip: "Pruefen Sie Ihre Analytics auf Suchanfragen, die Filterkombinationen entsprechen. Wenn Menschen nach \"wasserdichte Bluetooth-Lautsprecher unter 50 Euro\" suchen, stellen Sie sicher, dass genau diese Filterkombination eine eigene crawlbare URL mit optimiertem Content hat.",
        },
        {
          title: "Produktseiten-Keyword-Targeting mit Attributen und Spezifikationen",
          content:
            "Produktseiten targetieren natuerlich ein primaeres Keyword, normalerweise den Produktnamen. Der echte SEO-Wert kommt jedoch von den sekundaeren Keywords, die Sie durch Spezifikationen, Attribute und beschreibenden Content in die Seite einweben.\n\nJedes Produktattribut ist eine Keyword-Chance. Eine Produktseite fuer einen Wanderrucksack sollte natuerlich das Volumen (in Litern), das Material, das Gewicht, die Wasserdichtigkeits-Bewertung, die Anzahl der Faecher, den Rahmentyp und kompatible Koerpergroessen enthalten. Jedes dieser Attribute, kombiniert mit dem Produkttyp, erzeugt ein Long-Tail-Keyword, fuer das die Seite ranken kann.\n\nDie Produktbeschreibung ist der Punkt, an dem die meisten Shops scheitern. Herstellerbeschreibungen werden bei jedem Haendler dupliziert, der das Produkt fuehrt, null SEO-Wert. Schreiben Sie einzigartige Beschreibungen, die Attribute als natuerliche Sprache einbeziehen: \"Dieser 45-Liter-Ultraleicht-Rucksack wiegt nur 890 Gramm und verfuegt ueber eine wasserdichte Ripstop-Nylon-Huelle\" targetiert mindestens vier Long-Tail-Variationen.\n\nStrukturierte Daten (Produkt-Schema) verstaerken die Sichtbarkeit dieser Attribute in den Suchergebnissen. Wenn Ihre Produktseite korrektes Schema-Markup fuer Preis, Verfuegbarkeit, Bewertungen und Spezifikationen enthaelt, kann Google Rich Snippets anzeigen, die die Klickrate um 20-30% verbessern. Erfahren Sie mehr in unserem Leitfaden zu [Produktseiten-SEO](/academy/product-page-seo).",
          tip: "Erstellen Sie eine Produktseiten-Content-Vorlage fuer jede Produktkategorie. Listen Sie alle relevanten Attribute als Felder auf, das stellt sicher, dass jede Produktseite die gleichen keyword-reichen Spezifikationen abdeckt, auch wenn sie von verschiedenen Teammitgliedern geschrieben wird.",
        },
        {
          title: "Kannibalisierung zwischen Produkt- und Kategorieseiten vermeiden",
          content:
            "Keyword-Kannibalisierung tritt auf, wenn mehrere Seiten Ihrer Website um denselben Suchbegriff konkurrieren. Fuer E-Commerce-Shops ist die haeufigste Form, dass eine Kategorieseite und eine Produktseite beide versuchen, fuer dasselbe Keyword zu ranken. Google wird verwirrt, welche Seite angezeigt werden soll, und oft rankt keine von beiden gut.\n\nDas klarste Signal fuer Kannibalisierung: Pruefen Sie in der GSC ein Keyword und sehen Sie, ob mehrere URLs von Ihrer Seite dafuer erscheinen, wobei die Rankings zwischen ihnen schwanken. Wenn Ihre Kategorieseite fuer \"Herren Lederstiefel\" und eine bestimmte Produktseite zwischen Position 8 und Position 15 wechseln, dann frisst Kannibalisierung Ihre Rankings.\n\nPraevention ist geradlinig. Weisen Sie jeder Seite ein primaeres Keyword zu und dokumentieren Sie es in Ihrer Keyword-Map. Kategorieseiten bekommen den breiteren Begriff (\"Herren Lederstiefel\"), Produktseiten den spezifischen Begriff (\"Wolverine 1000 Mile Stiefel braun Groesse 44\"). Der Titel und H1 der Produktseite sollten den Produktnamen verwenden, nicht das Kategorie-Keyword.\n\nInterne Verlinkung verstaerkt die Hierarchie. Ihre Produktseite sollte auf die uebergeordnete Kategorie verlinken (was die Kategorie als Autoritaet fuer den breiteren Begriff staerkt), und Ihre Kategorieseite sollte auf einzelne Produkte verlinken (Autoritaet an die spezifischen Begriffe weitergeben). Breadcrumbs erledigen das natuerlich, wenn sie korrekt strukturiert sind.\n\nWenn Kannibalisierung bereits besteht, haengt die Loesung davon ab, welche Seite ranken soll. Normalerweise ist es die Kategorieseite fuer Mid-Tail-Begriffe und die Produktseite fuer spezifische Produktbegriffe. Staerken Sie die interne Verlinkung zur bevorzugten Seite und passen Sie die On-Page-Optimierung der nicht bevorzugten Seite an, um sich auf andere Keywords zu konzentrieren.",
          items: [
            "Pruefen Sie die GSC auf Keywords, bei denen mehrere URLs Ihrer Seite erscheinen, das signalisiert Kannibalisierung",
            "Weisen Sie ein primaeres Keyword pro Seite zu und dokumentieren Sie es in Ihrer Keyword-Map",
            "Nutzen Sie interne Verlinkung, um zu verstaerken, welche Seite die Autoritaet fuer jeden Begriff ist",
            "Bei bestehender Kannibalisierung die bevorzugte Seite staerken und die andere neu optimieren",
          ],
        },
        {
          title: "Praktisches Entscheidungsframework",
          content:
            "Wenn Sie auf ein neues Keyword stossen, gehen Sie diesen Entscheidungsbaum durch. Erstens, pruefen Sie die SERP: Welche Seitentypen ranken in den Top 5? Wenn Produktseiten dominieren, weisen Sie es einer Produktseite zu. Wenn Kategorie-/Listenseiten dominieren, weisen Sie es einer Kategorieseite zu.\n\nZweitens, bewerten Sie die Spezifitaet. Beschreibt das Keyword einen einzelnen Artikel oder eine Gruppe von Artikeln? \"Sony WH-1000XM5\" ist ein Artikel, Produktseite. \"Beste kabellose Kopfhoerer zum Laufen\" beschreibt eine Gruppe, Kategorie- oder Guide-Seite.\n\nDrittens, pruefen Sie Ihre bestehenden Seiten. Haben Sie bereits eine Seite, die dieses Keyword oder etwas sehr Aehnliches targetiert? Wenn ja, optimieren Sie die bestehende Seite, anstatt eine neue zu erstellen. Doppeltes Targeting zu erzeugen ist einer der schnellsten Wege, Kannibalisierung auszuloesen.\n\nViertens, beruecksichtigen Sie die Customer Journey. Wo befindet sich jemand, der diesen Begriff sucht, im Kaufprozess? Fruehere Stoeberer brauchen Kategorieseiten mit Filtern und Vergleichen. Kaufbereite Kaeufer brauchen Produktseiten mit Spezifikationen und Kaufoptionen. Den Seitentyp auf die Phase des Kaerufers abzustimmen, wirkt sich direkt auf die Konversionsraten aus.",
        },
      ],
      navLabels: {
        previous: "Kaufabsicht vs. Suchvolumen",
        next: "Long-Tail-Keywords fuer Produkte",
      },
    },
    fr: {
      badge: "Recherche de mots-cles",
      heading: "Mots-cles produit vs. categorie",
      intro:
        "Decider si un mot-cle doit etre cible par une page produit ou une page categorie est l'un des choix SEO les plus determinants pour toute boutique en ligne. Une erreur, et vos pages se font concurrence entre elles au lieu de concurrencer vos rivaux.",
      readTime: "8 min de lecture",
      sections: [
        {
          title: "Quand cibler avec des pages produits vs. des pages categories",
          content:
            "La regle la plus simple : regardez ce que Google positionne deja pour le mot-cle. Si les 10 premiers resultats sont principalement des pages de detail produit (articles individuels avec bouton d'ajout au panier), ciblez-le avec une page produit. Si le top 10 montre des listings de categories, des pages collection ou du contenu comparatif, utilisez une page categorie.\n\nLes pages produits devraient cibler des requetes specifiques et precises : noms de produits exacts, numeros de modele, termes au niveau SKU et requetes contenant des specifications detaillees comme la taille, la couleur ou le materiau. Ce sont des termes de bas de funnel ou le chercheur sait ce qu'il veut.\n\nLes pages categories devraient cibler des termes plus larges qui decrivent un type de produit plutot qu'un produit specifique : \"bottes de randonnee impermeables homme\", \"casques sans fil a reduction de bruit\" ou \"draps en coton bio\". Ces termes de milieu de funnel ont un volume plus eleve mais necessitent que le chercheur parcoure les options avant d'acheter.\n\nLa zone grise apparait avec des termes comme marque + type de produit (\"chaussures de course Nike\"). Verifiez la SERP, Google peut afficher un melange de pages categories de marque et de pages produits individuelles. Dans ces cas, une page categorie filtree montrant uniquement cette marque l'emporte generalement.",
          items: [
            "Verifiez la SERP avant de decider : Google vous indique quel type de page il prefere pour chaque mot-cle",
            "Les pages produits ciblent : modeles specifiques, SKU, noms de produits et combinaisons d'attributs detaillees",
            "Les pages categories ciblent : termes de type de produit, marque + categorie et requetes de navigation milieu de funnel",
            "Quand la SERP montre des resultats mixtes, une page categorie bien structuree a generalement l'avantage",
          ],
          image: {
            src: "/images/academy/fr/product-vs-category-decision.svg",
            alt: "Entscheidungsdiagramm für Produktseiten versus Kategorieseiten",
            caption: "Prüfen Sie immer zuerst die SERP. Google zeigt Ihnen, welchen Seitentyp es bevorzugt.",
          },
          callout: {
            title: "Volumen-Aufteilung",
            text: "Kategorieseiten zielen auf ~150 Mid-Tail-Keywords (1K-5K Suchen), Produktseiten auf 3.000+ Long-Tail-Keywords (20-500 Suchen).",
          },
        },
        {
          title: "Distribution termes generiques vs. longue traine",
          content:
            "Dans un paysage de mots-cles e-commerce typique, la distribution suit un schema previsible. Un petit nombre de termes generiques (\"ordinateurs portables\", \"chaussures de course\", \"soins de la peau\") ont un volume enorme mais convertissent mal et sont extremement competitifs. Le mid-tail (\"pc portables gaming moins de 1000 euros\", \"chaussures trail femme\") represente le point ideal entre volume, intention et difficulte atteignable.\n\nLa longue traine, qui represente 70-80% de toutes les requetes de recherche, se compose de termes tres specifiques qui ont individuellement un volume minuscule mais collectivement generent la majorite du chiffre d'affaires e-commerce. Ceux-ci correspondent naturellement aux pages produits.\n\nVoici comment les calculs se repartissent typiquement pour une boutique avec 1 000 produits repartis en 50 categories. Les 50 pages categories pourraient cibler 150 mots-cles mid-tail, avec une moyenne de 1 000 a 5 000 recherches chacun. Les 1 000 pages produits pourraient cibler plus de 3 000 mots-cles longue traine, avec une moyenne de 20 a 500 recherches chacun. Le volume de recherche total adressable de la longue traine depasse souvent le mid-tail.\n\nL'insight strategique : vos pages categories luttent pour des termes mid-tail competitifs, tandis que vos pages produits accumulent discretement du trafic longue traine avec un effort minimal. Les deux couches comptent, mais la plupart des boutiques sous-investissent dans l'optimisation des pages produits.",
        },
        {
          title: "Comment les pages categories se positionnent pour les termes mid-funnel",
          content:
            "Les pages categories ont des avantages structurels pour les mots-cles mid-funnel. Elles contiennent plusieurs produits (plus de signaux de contenu), recoivent typiquement plus de liens internes (navigation, fil d'Ariane et liens croises) et correspondent a l'intention de recherche de quelqu'un qui parcourt les options plutot que de regarder un seul article.\n\nPour se positionner efficacement, les pages categories ont besoin de plus qu'une grille de miniatures de produits. Elles necessitent un paragraphe d'introduction descriptif (100-200 mots) utilisant naturellement le mot-cle cible, des options de filtrage qui refletent la facon dont les gens cherchent (par gamme de prix, fonctionnalites, cas d'usage), et suffisamment de listings de produits pour demontrer l'autorite sur le sujet.\n\nLa navigation a facettes cree une opportunite puissante ici. Si votre page categorie pour \"casques sans fil\" permet aux utilisateurs de filtrer par \"reduction de bruit\", \"circum-aural\" et \"moins de 100 euros\", vous pouvez creer des vues filtrees qui ciblent des termes mid-tail specifiques. La structure d'URL compte, chaque combinaison de filtres significative devrait produire une URL crawlable et indexable.\n\nN'oubliez pas le texte de la page categorie sous la grille de produits. Une section de 300-500 mots couvrant les considerations d'achat, les comparaisons de fonctionnalites et les recommandations par cas d'usage aide a la fois le positionnement et la conversion. Ce contenu repond aux questions que les acheteurs mid-funnel se posent, construisant la confiance avant qu'ils ne cliquent vers un produit. Notre guide sur le [SEO des pages catégories](/academy/category-page-seo) couvre cela en détail, mais les essentiels incluent un paragraphe d'introduction descriptif (100-200 mots) utilisant naturellement le mot-clé cible, des options de filtrage reflétant la façon dont les gens recherchent (par gamme de prix, caractéristiques, cas d'usage), et suffisamment de listings produits pour démontrer l'autorité sur le sujet.\n\nLa navigation à facettes crée une opportunité puissante ici, comme expliqué dans notre guide sur le [SEO des pages catégories e-commerce](/blog/ecommerce-category-page-seo).",
          items: [
            "Ajoutez un paragraphe d'introduction de 100-200 mots avec le mot-cle principal sur chaque page categorie",
            "Construisez des options de filtrage qui refletent le comportement de recherche : prix, fonctionnalites, marque, cas d'usage",
            "Creez des URLs indexables pour les combinaisons de filtres a haute valeur",
            "Incluez 300-500 mots de guide d'achat sous la grille de produits",
          ],
          tip: "Verifiez vos analytics pour les requetes de recherche qui correspondent a des combinaisons de filtres. Si les gens cherchent \"enceintes bluetooth etanches moins de 50 euros\", assurez-vous que cette combinaison de filtres exacte a sa propre URL crawlable avec du contenu optimise.",
        },
        {
          title: "Ciblage de mots-cles de pages produits avec attributs et specifications",
          content:
            "Les pages produits ciblent naturellement un mot-cle principal, generalement le nom du produit. Mais la vraie valeur SEO vient des mots-cles secondaires que vous tissez dans la page a travers les specifications, attributs et contenu descriptif.\n\nChaque attribut de produit est une opportunite de mot-cle. Une page produit pour un sac a dos de randonnee devrait naturellement inclure le volume (en litres), le materiau, le poids, l'indice d'impermeabilite, le nombre de compartiments, le type d'armature et les tailles de corps compatibles. Chacun de ces attributs, combine avec le type de produit, cree un mot-cle longue traine pour lequel la page peut se positionner.\n\nLa description du produit est la ou la plupart des boutiques echouent. Les descriptions du fabricant sont dupliquees chez chaque revendeur qui commercialise le produit, zero valeur SEO. Redigez des descriptions uniques qui integrent les attributs en langage naturel : \"Ce sac a dos ultralight de 45 litres ne pese que 890 grammes et dispose d'une coque en nylon ripstop impermeable\" cible au moins quatre variations longue traine.\n\nLes donnees structurees (schema produit) amplifient la visibilite de ces attributs dans les resultats de recherche. Quand votre page produit inclut un balisage schema correct pour le prix, la disponibilite, les avis et les specifications, Google peut afficher des extraits enrichis qui ameliorent les taux de clic de 20-30%. Découvrez comment optimiser ces pages dans notre sujet sur le [SEO des pages produits](/academy/product-page-seo).",
          tip: "Construisez un template de contenu de page produit pour chaque categorie de produits. Listez tous les attributs pertinents comme des champs, cela garantit que chaque page produit couvre les memes specifications riches en mots-cles, meme quand elles sont redigees par differents membres de l'equipe.",
        },
        {
          title: "Eviter la cannibalisation entre pages produits et pages categories",
          content:
            "La cannibalisation de mots-cles se produit lorsque plusieurs pages de votre site se font concurrence pour le meme terme de recherche. Pour les boutiques e-commerce, la forme la plus courante est une page categorie et une page produit qui tentent toutes deux de se positionner sur le meme mot-cle. Google ne sait plus quelle page afficher, et souvent aucune ne se positionne bien.\n\nLe signal le plus clair de cannibalisation : verifiez dans la GSC un mot-cle et voyez si plusieurs URLs de votre site apparaissent, avec des positions qui fluctuent entre elles. Si votre page categorie pour \"bottes cuir homme\" et une page produit specifique alternent entre la position 8 et la position 15, c'est la cannibalisation qui ronge vos classements.\n\nLa prevention est simple. Attribuez un mot-cle principal a chaque page et documentez-le dans votre carte de mots-cles. Les pages categories obtiennent le terme plus large (\"bottes cuir homme\"), les pages produits obtiennent le terme specifique (\"botte Wolverine 1000 Mile marron taille 43\"). Le titre et le H1 de la page produit devraient utiliser le nom du produit, pas le mot-cle de la categorie.\n\nLe maillage interne renforce la hierarchie. Votre page produit devrait lier a sa categorie parente (renforcant la categorie comme autorite pour le terme plus large), et votre page categorie devrait lier aux produits individuels (transmettant l'autorite aux termes specifiques). Le fil d'Ariane gere cela naturellement quand il est correctement structure.\n\nQuand la cannibalisation existe deja, la correction depend de la page qui devrait se positionner. Generalement, c'est la page categorie pour les termes mid-tail et la page produit pour les termes de produit specifiques. Renforcez le maillage interne vers la page preferee et ajustez l'optimisation on-page de l'autre page pour se concentrer sur des mots-cles differents.",
          items: [
            "Verifiez dans la GSC les mots-cles ou plusieurs URLs de votre site apparaissent, cela signale une cannibalisation",
            "Attribuez un mot-cle principal par page et enregistrez-le dans votre carte de mots-cles",
            "Utilisez le maillage interne pour renforcer quelle page fait autorite pour chaque terme",
            "En cas de cannibalisation existante, renforcez la page preferee et re-optimisez l'autre",
          ],
        },
        {
          title: "Cadre de decision pratique",
          content:
            "Quand vous rencontrez un nouveau mot-cle, suivez cet arbre de decision. Premierement, verifiez la SERP : quels types de pages se positionnent dans le top 5 ? Si les pages produits dominent, attribuez-le a une page produit. Si les pages categories/listings dominent, attribuez-le a une page categorie.\n\nDeuxiemement, evaluez la specificite. Le mot-cle decrit-il un article unique ou un groupe d'articles ? \"Sony WH-1000XM5\" est un article unique, page produit. \"Meilleurs casques sans fil pour courir\" decrit un groupe, page categorie ou guide.\n\nTroisiemement, verifiez vos pages existantes. Avez-vous deja une page qui cible ce mot-cle ou quelque chose de tres proche ? Si oui, optimisez la page existante plutot que d'en creer une nouvelle. Creer un ciblage en double est l'un des moyens les plus rapides de declencher la cannibalisation.\n\nQuatriemement, considerez le parcours utilisateur. Ou se situe la personne qui cherche ce terme dans le processus d'achat ? Les navigateurs en phase initiale ont besoin de pages categories avec filtres et comparaisons. Les acheteurs prets a acheter ont besoin de pages produits avec specifications et options d'achat. Faire correspondre votre type de page a la phase de l'acheteur impacte directement les taux de conversion.",
        },
      ],
      navLabels: {
        previous: "Intention d'achat vs. volume de recherche",
        next: "Mots-cles longue traine pour les produits",
      },
    },
    es: {
      badge: "Investigacion de palabras clave",
      heading: "Palabras clave de producto vs. categoria",
      intro:
        "Decidir si apuntar a una palabra clave con una pagina de producto o una pagina de categoria es una de las decisiones SEO mas trascendentales para cualquier tienda online. Si te equivocas, tus paginas compiten entre si en lugar de contra los competidores.",
      readTime: "8 min de lectura",
      sections: [
        {
          title: "Cuando usar paginas de producto vs. paginas de categoria",
          content:
            "La regla mas simple: mira lo que Google ya posiciona para la palabra clave. Si los 10 primeros resultados son mayormente paginas de detalle de producto (articulos individuales con boton de anadir al carrito), apunta con una pagina de producto. Si el top 10 muestra listados de categorias, paginas de coleccion o contenido comparativo, usa una pagina de categoria.\n\nLas paginas de producto deben apuntar a consultas especificas y concretas: nombres exactos de productos, numeros de modelo, terminos a nivel de SKU y consultas con especificaciones detalladas como talla, color o material. Son terminos de fondo de embudo donde el buscador sabe lo que quiere.\n\nLas paginas de categoria deben apuntar a terminos mas amplios que describen un tipo de producto en lugar de uno especifico: \"botas de senderismo impermeables hombre\", \"auriculares inalambricos con cancelacion de ruido\" o \"sabanas de algodon organico\". Estos terminos de mitad de embudo tienen mayor volumen pero requieren que el buscador explore opciones antes de comprar.\n\nLa zona gris aparece con terminos como marca + tipo de producto (\"zapatillas Nike de correr\"). Revisa la SERP, Google podria mostrar una mezcla de paginas de categoria de marca y paginas de producto individuales. En estos casos, una pagina de categoria filtrada mostrando solo esa marca tipicamente gana.",
          items: [
            "Revisa la SERP antes de decidir: Google te dice que tipo de pagina prefiere para cada palabra clave",
            "Las paginas de producto apuntan a: modelos especificos, SKUs, nombres de productos y combinaciones detalladas de atributos",
            "Las paginas de categoria apuntan a: terminos de tipo de producto, marca + categoria y consultas de navegacion de mitad de embudo",
            "Cuando la SERP muestra resultados mixtos, una pagina de categoria bien estructurada suele tener ventaja",
          ],
          image: {
            src: "/images/academy/es/product-vs-category-decision.svg",
            alt: "Entscheidungsdiagramm für Produktseiten versus Kategorieseiten",
            caption: "Prüfen Sie immer zuerst die SERP. Google zeigt Ihnen, welchen Seitentyp es bevorzugt.",
          },
          callout: {
            title: "Volumen-Aufteilung",
            text: "Kategorieseiten zielen auf ~150 Mid-Tail-Keywords (1K-5K Suchen), Produktseiten auf 3.000+ Long-Tail-Keywords (20-500 Suchen).",
          },
        },
        {
          title: "Terminos genericos vs. distribucion de cola larga",
          content:
            "En un panorama tipico de palabras clave de ecommerce, la distribucion sigue un patron predecible. Un numero reducido de terminos genericos (\"portatiles\", \"zapatillas de correr\", \"cuidado de la piel\") tienen volumen enorme pero convierten mal y son brutalmente competitivos. El mid-tail (\"portatiles gaming por menos de 1000 euros\", \"zapatillas trail mujer\") representa el punto dulce de volumen, intencion y dificultad alcanzable.\n\nLa cola larga, que comprende el 70-80% de todas las consultas de busqueda, consiste en terminos altamente especificos que individualmente tienen volumen minusculo pero colectivamente generan la mayoria de los ingresos ecommerce. Estos se mapean naturalmente a paginas de producto.\n\nAsi es como las cuentas tipicamente se desglosan para una tienda con 1.000 productos en 50 categorias. Las 50 paginas de categoria podrian apuntar a 150 palabras clave mid-tail, promediando 1.000-5.000 busquedas cada una. Las 1.000 paginas de producto podrian apuntar a mas de 3.000 palabras clave de cola larga, promediando 20-500 busquedas cada una. El volumen de busqueda total direccionable de la cola larga a menudo supera al mid-tail.\n\nEl insight estrategico: tus paginas de categoria luchan por terminos mid-tail competitivos, mientras tus paginas de producto acumulan silenciosamente trafico de cola larga con esfuerzo minimo. Ambas capas importan, pero la mayoria de tiendas sub-invierten en la optimizacion de paginas de producto.",
        },
        {
          title: "Como las paginas de categoria posicionan para terminos mid-funnel",
          content:
            "Las [paginas de categoria](/academy/category-page-seo) tienen ventajas estructurales para palabras clave mid-funnel. Contienen multiples productos (mas senales de contenido), tipicamente reciben mas enlaces internos (de navegacion, migas de pan y enlaces cruzados) y coinciden con la intencion de busqueda de alguien que explora opciones en lugar de mirar un solo articulo.\n\nPara posicionar efectivamente, las paginas de categoria necesitan mas que una cuadricula de miniaturas de productos. Necesitan un parrafo introductorio descriptivo (100-200 palabras) usando la palabra clave objetivo naturalmente, opciones de filtro que reflejen como la gente busca (por rango de precio, caracteristicas, caso de uso) y suficientes listados de productos para demostrar autoridad en el tema.\n\nLa navegacion facetada crea una oportunidad poderosa aqui. Si tu pagina de categoria para \"auriculares inalambricos\" permite a los usuarios filtrar por \"cancelacion de ruido\", \"circumaurales\" y \"menos de 100 euros\", puedes crear vistas filtradas que apunten a terminos mid-tail especificos. La estructura de URL importa, cada combinacion de filtros significativa deberia producir una URL rastreable e indexable.\n\nNo olvides el texto de la pagina de categoria debajo de la cuadricula de productos. Una seccion de 300-500 palabras cubriendo consideraciones de compra, comparaciones de caracteristicas y recomendaciones por caso de uso ayuda tanto al posicionamiento como a la conversion. Este contenido responde las preguntas que los compradores mid-funnel tienen, construyendo confianza antes de que hagan clic hacia un producto. La navegacion facetada crea una oportunidad poderosa aqui, como se explica en nuestra guia de [SEO de paginas de categoria para ecommerce](/blog/ecommerce-category-page-seo).",
          items: [
            "Anade un parrafo introductorio de 100-200 palabras con la palabra clave principal en cada pagina de categoria",
            "Construye opciones de filtro que reflejen el comportamiento de busqueda: precio, caracteristicas, marca, caso de uso",
            "Crea URLs indexables para combinaciones de filtros de alto valor",
            "Incluye 300-500 palabras de guia de compra debajo de la cuadricula de productos",
          ],
          tip: "Revisa tus analytics para consultas de busqueda que coincidan con combinaciones de filtros. Si la gente busca \"altavoces bluetooth resistentes al agua por menos de 50 euros\", asegurate de que esa combinacion exacta de filtros tenga su propia URL rastreable con contenido optimizado.",
        },
        {
          title: "Segmentacion de palabras clave en paginas de producto con atributos y especificaciones",
          content:
            "Las [paginas de producto](/academy/product-page-seo) naturalmente apuntan a una palabra clave principal, usualmente el nombre del producto. Pero el verdadero valor SEO viene de las palabras clave secundarias que incorporas en la pagina a traves de especificaciones, atributos y contenido descriptivo.\n\nCada atributo de producto es una oportunidad de palabra clave. Una pagina de producto para una mochila de senderismo deberia incluir naturalmente el volumen (en litros), el material, el peso, la clasificacion de impermeabilidad, el numero de compartimentos, el tipo de estructura y las tallas de cuerpo compatibles. Cada uno de estos atributos, combinado con el tipo de producto, crea una palabra clave de cola larga para la que la pagina puede posicionar.\n\nLa descripcion del producto es donde la mayoria de tiendas fallan. Las descripciones del fabricante estan duplicadas en cada vendedor que tiene el producto, cero valor SEO. Escribe descripciones unicas que incorporen atributos como lenguaje natural: \"Esta mochila ultraligera de 45 litros pesa solo 890 gramos y cuenta con una carcasa de nylon ripstop impermeable\" apunta a al menos cuatro variaciones de cola larga.\n\nLos datos estructurados (schema de producto) amplifican la visibilidad de estos atributos en los resultados de busqueda. Cuando tu pagina de producto incluye marcado schema correcto para precio, disponibilidad, resenas y especificaciones, Google puede mostrar fragmentos enriquecidos que mejoran las tasas de clic en un 20-30%.",
          tip: "Construye una plantilla de contenido de pagina de producto para cada categoria de productos. Lista todos los atributos relevantes como campos, esto asegura que cada pagina de producto cubra las mismas especificaciones ricas en palabras clave, incluso cuando las escriban diferentes miembros del equipo.",
        },
        {
          title: "Evitar la canibalizacion entre paginas de producto y categoria",
          content:
            "La canibalizacion de palabras clave ocurre cuando multiples paginas de tu sitio compiten por el mismo termino de busqueda. Para tiendas ecommerce, la forma mas comun es una pagina de categoria y una pagina de producto intentando posicionar para la misma palabra clave. Google se confunde sobre que pagina mostrar, y a menudo ninguna posiciona bien.\n\nLa senal mas clara de canibalizacion: revisa en GSC una palabra clave y mira si multiples URLs de tu sitio aparecen, con posiciones que fluctuan entre ellas. Si tu pagina de categoria para \"botas de cuero hombre\" y una pagina de producto especifica alternan entre la posicion 8 y la 15, eso es canibalizacion consumiendo tus rankings.\n\nLa prevencion es directa. Asigna una palabra clave principal a cada pagina y documentala en tu mapa de palabras clave. Las paginas de categoria reciben el termino mas amplio (\"botas de cuero hombre\"), las paginas de producto reciben el termino especifico (\"bota Wolverine 1000 Mile marron talla 43\"). El titulo y H1 de la pagina de producto deben usar el nombre del producto, no la palabra clave de la categoria.\n\nEl enlazado interno refuerza la jerarquia. Tu pagina de producto debe enlazar a su categoria padre (reforzando la categoria como autoridad para el termino mas amplio), y tu pagina de categoria debe enlazar a productos individuales (pasando autoridad a los terminos especificos). Las migas de pan manejan esto naturalmente cuando estan correctamente estructuradas.\n\nCuando la canibalizacion ya existe, la solucion depende de que pagina deberia posicionar. Usualmente, es la pagina de categoria para terminos mid-tail y la pagina de producto para terminos de producto especificos. Refuerza el enlazado interno hacia la pagina preferida y ajusta la optimizacion on-page de la otra pagina para enfocarse en palabras clave diferentes.",
          items: [
            "Revisa en GSC las palabras clave donde multiples URLs de tu sitio aparecen, esto senala canibalizacion",
            "Asigna una palabra clave principal por pagina y registrala en tu mapa de palabras clave",
            "Usa enlazado interno para reforzar que pagina es la autoridad para cada termino",
            "Cuando existe canibalizacion, refuerza la pagina preferida y re-optimiza la otra",
          ],
        },
        {
          title: "Marco de decision practico",
          content:
            "Cuando encuentres una nueva palabra clave, recorre este arbol de decision. Primero, revisa la SERP: que tipos de pagina posicionan en el top 5? Si dominan las paginas de producto, asignala a una pagina de producto. Si dominan las paginas de categoria/listado, asignala a una pagina de categoria.\n\nSegundo, evalua la especificidad. La palabra clave describe un articulo o un grupo de articulos? \"Sony WH-1000XM5\" es un articulo, pagina de producto. \"Mejores auriculares inalambricos para correr\" describe un grupo, pagina de categoria o guia.\n\nTercero, revisa tus paginas existentes. Ya tienes una pagina que apunta a esta palabra clave o algo muy similar? Si es asi, optimiza la pagina existente en lugar de crear una nueva. Crear targeting duplicado es una de las formas mas rapidas de provocar canibalizacion.\n\nCuarto, considera el recorrido del usuario. Donde cae alguien que busca este termino en el proceso de compra? Los navegadores en etapas tempranas necesitan paginas de categoria con filtros y comparaciones. Los compradores listos para comprar necesitan paginas de producto con especificaciones y opciones de compra. Hacer coincidir tu tipo de pagina con la etapa del comprador impacta directamente en las tasas de conversion.",
        },
      ],
      navLabels: {
        previous: "Intencion de compra vs. volumen de busqueda",
        next: "Palabras clave de cola larga para productos",
      },
    },
    it: {
      badge: "Ricerca parole chiave",
      heading: "Parole chiave prodotto vs. categoria",
      intro:
        "Decidere se puntare una parola chiave con una pagina prodotto o una pagina categoria e una delle scelte SEO piu determinanti per qualsiasi negozio online. Sbagliare significa che le vostre pagine competono tra loro invece che contro i concorrenti.",
      readTime: "8 min di lettura",
      sections: [
        {
          title: "Quando usare pagine prodotto vs. pagine categoria",
          content:
            "La regola piu semplice: guardate cosa Google posiziona gia per la parola chiave. Se i primi 10 risultati sono prevalentemente pagine di dettaglio prodotto (articoli singoli con pulsante aggiungi al carrello), puntatela con una pagina prodotto. Se il top 10 mostra listing di categorie, pagine collezione o contenuto comparativo, usate una pagina categoria.\n\nLe pagine prodotto dovrebbero puntare query specifiche e precise: nomi esatti dei prodotti, numeri di modello, termini a livello SKU e query contenenti specifiche dettagliate come taglia, colore o materiale. Sono termini di fondo funnel dove chi cerca sa esattamente cosa vuole.\n\nLe pagine categoria dovrebbero puntare termini piu ampi che descrivono un tipo di prodotto piuttosto che uno specifico: \"scarponi da trekking impermeabili uomo\", \"cuffie wireless con cancellazione del rumore\" o \"lenzuola in cotone biologico\". Questi termini di meta funnel hanno volume piu alto ma richiedono che chi cerca esplori le opzioni prima di acquistare.\n\nLa zona grigia appare con termini come marca + tipo di prodotto (\"scarpe da corsa Nike\"). Controllate la SERP, Google potrebbe mostrare un mix di pagine categoria del brand e pagine prodotto individuali. In questi casi, una pagina categoria filtrata che mostra solo quel brand tipicamente vince.",
          items: [
            "Controllate la SERP prima di decidere: Google vi dice quale tipo di pagina preferisce per ogni parola chiave",
            "Le pagine prodotto puntano a: modelli specifici, SKU, nomi prodotto e combinazioni dettagliate di attributi",
            "Le pagine categoria puntano a: termini di tipo prodotto, marca + categoria e query di navigazione meta funnel",
            "Quando la SERP mostra risultati misti, una pagina categoria ben strutturata ha solitamente il vantaggio",
          ],
          image: {
            src: "/images/academy/it/product-vs-category-decision.svg",
            alt: "Entscheidungsdiagramm für Produktseiten versus Kategorieseiten",
            caption: "Prüfen Sie immer zuerst die SERP. Google zeigt Ihnen, welchen Seitentyp es bevorzugt.",
          },
          callout: {
            title: "Volumen-Aufteilung",
            text: "Kategorieseiten zielen auf ~150 Mid-Tail-Keywords (1K-5K Suchen), Produktseiten auf 3.000+ Long-Tail-Keywords (20-500 Suchen).",
          },
        },
        {
          title: "Head term vs. distribuzione coda lunga",
          content:
            "In un tipico panorama di parole chiave e-commerce, la distribuzione segue uno schema prevedibile. Un piccolo numero di head term (\"laptop\", \"scarpe da corsa\", \"cura della pelle\") hanno volume enorme ma convertono male e sono brutalmente competitivi. Il mid-tail (\"laptop gaming sotto i 1000 euro\", \"scarpe trail donna\") rappresenta il punto ideale di volume, intenzione e difficolta raggiungibile.\n\nLa coda lunga, che costituisce il 70-80% di tutte le query di ricerca, consiste in termini altamente specifici che individualmente hanno volume minuscolo ma collettivamente generano la maggior parte del fatturato e-commerce. Questi si mappano naturalmente sulle pagine prodotto.\n\nEcco come i calcoli tipicamente si distribuiscono per un negozio con 1.000 prodotti in 50 categorie. Le 50 pagine categoria potrebbero puntare 150 parole chiave mid-tail, con una media di 1.000-5.000 ricerche ciascuna. Le 1.000 pagine prodotto potrebbero puntare oltre 3.000 parole chiave long-tail, con una media di 20-500 ricerche ciascuna. Il volume di ricerca totale indirizzabile dalla coda lunga spesso supera il mid-tail.\n\nL'insight strategico: le vostre pagine categoria combattono per termini mid-tail competitivi, mentre le vostre pagine prodotto accumulano silenziosamente traffico long-tail con sforzo minimo. Entrambi i livelli contano, ma la maggior parte dei negozi sotto-investe nell'ottimizzazione delle pagine prodotto.",
        },
        {
          title: "Come le pagine categoria si posizionano per termini mid-funnel",
          content:
            "Le pagine categoria hanno vantaggi strutturali per le parole chiave mid-funnel. Contengono piu prodotti (piu segnali di contenuto), tipicamente ricevono piu link interni (da navigazione, breadcrumb e link incrociati) e corrispondono all'intenzione di ricerca di qualcuno che esplora opzioni piuttosto che guardare un singolo articolo.\n\nPer posizionarsi efficacemente, le pagine categoria hanno bisogno di piu di una griglia di miniature prodotto. Necessitano di un paragrafo introduttivo descrittivo (100-200 parole) che usa la parola chiave target in modo naturale, opzioni di filtro che riflettono come le persone cercano (per fascia di prezzo, caratteristiche, caso d'uso) e abbastanza listing di prodotti per dimostrare autorita sull'argomento. La nostra guida sulla [SEO delle pagine di categoria](/academy/category-page-seo) approfondisce queste strategie.\n\nLa navigazione a faccette crea una potente opportunita qui. Se la vostra pagina categoria per \"cuffie wireless\" permette agli utenti di filtrare per \"cancellazione del rumore\", \"over-ear\" e \"sotto i 100 euro\", potete creare viste filtrate che puntano termini mid-tail specifici. La struttura degli URL conta, ogni combinazione di filtri significativa dovrebbe produrre un URL crawlabile e indicizzabile. Approfondisci con la nostra guida sulla [SEO delle pagine di categoria ecommerce](/blog/ecommerce-category-page-seo).\n\nNon dimenticate il testo della pagina categoria sotto la griglia prodotti. Una sezione di 300-500 parole che copre considerazioni d'acquisto, confronti di caratteristiche e raccomandazioni per caso d'uso aiuta sia il posizionamento che la conversione. Questo contenuto risponde alle domande che gli acquirenti mid-funnel si pongono, costruendo fiducia prima che clicchino su un prodotto.",
          items: [
            "Aggiungete un paragrafo introduttivo di 100-200 parole con la parola chiave principale su ogni pagina categoria",
            "Costruite opzioni di filtro che rispecchiano il comportamento di ricerca: prezzo, caratteristiche, marca, caso d'uso",
            "Create URL indicizzabili per le combinazioni di filtri ad alto valore",
            "Includete 300-500 parole di guida all'acquisto sotto la griglia prodotti",
          ],
          tip: "Controllate le vostre analytics per query di ricerca che corrispondono a combinazioni di filtri. Se le persone cercano \"casse bluetooth impermeabili sotto i 50 euro\", assicuratevi che quella esatta combinazione di filtri abbia il proprio URL crawlabile con contenuto ottimizzato.",
        },
        {
          title: "Targeting di parole chiave nelle pagine prodotto con attributi e specifiche",
          content:
            "Le pagine prodotto puntano naturalmente una parola chiave principale, solitamente il nome del prodotto. Ma il vero valore SEO viene dalle parole chiave secondarie che intessete nella pagina attraverso specifiche, attributi e contenuto descrittivo.\n\nOgni attributo di prodotto e un'opportunita di parola chiave. Una pagina prodotto per uno zaino da trekking dovrebbe naturalmente includere il volume (in litri), il materiale, il peso, la classificazione di impermeabilita, il numero di scomparti, il tipo di telaio e le taglie di corpo compatibili. Ciascuno di questi attributi, combinato con il tipo di prodotto, crea una parola chiave long-tail per cui la pagina puo posizionarsi.\n\nLa descrizione del prodotto e dove la maggior parte dei negozi fallisce. Le descrizioni del produttore sono duplicate su ogni rivenditore che tratta il prodotto, zero valore SEO. Scrivete descrizioni uniche che incorporano gli attributi come linguaggio naturale: \"Questo zaino ultraleggero da 45 litri pesa solo 890 grammi e presenta un guscio in nylon ripstop impermeabile\" punta almeno quattro variazioni long-tail.\n\nI dati strutturati (schema prodotto) amplificano la visibilita di questi attributi nei risultati di ricerca. Quando la vostra pagina prodotto include il markup schema corretto per prezzo, disponibilita, recensioni e specifiche, Google puo mostrare rich snippet che migliorano i tassi di clic del 20-30%. Scopri di più nella nostra guida sulla [SEO delle pagine prodotto](/academy/product-page-seo).",
          tip: "Costruite un template di contenuto per pagina prodotto per ogni categoria di prodotti. Elencate tutti gli attributi rilevanti come campi, questo assicura che ogni pagina prodotto copra le stesse specifiche ricche di parole chiave, anche quando scritte da diversi membri del team.",
        },
        {
          title: "Evitare la cannibalizzazione tra pagine prodotto e categoria",
          content:
            "La cannibalizzazione delle parole chiave avviene quando piu pagine del vostro sito competono per lo stesso termine di ricerca. Per i negozi e-commerce, la forma piu comune e una pagina categoria e una pagina prodotto che cercano entrambe di posizionarsi per la stessa parola chiave. Google si confonde su quale pagina mostrare, e spesso nessuna delle due si posiziona bene.\n\nIl segnale piu chiaro di cannibalizzazione: controllate nella GSC una parola chiave e vedete se piu URL dal vostro sito appaiono, con posizionamenti che fluttuano tra loro. Se la vostra pagina categoria per \"stivali in pelle uomo\" e una pagina prodotto specifica si alternano tra posizione 8 e posizione 15, e la cannibalizzazione che erode i vostri ranking.\n\nLa prevenzione e semplice. Assegnate una parola chiave principale a ogni pagina e documentatela nella vostra mappa delle parole chiave. Le pagine categoria ricevono il termine piu ampio (\"stivali in pelle uomo\"), le pagine prodotto il termine specifico (\"stivale Wolverine 1000 Mile marrone numero 44\"). Il titolo e l'H1 della pagina prodotto dovrebbero usare il nome del prodotto, non la parola chiave della categoria.\n\nI link interni rinforzano la gerarchia. La vostra pagina prodotto dovrebbe linkare alla sua categoria padre (rinforzando la categoria come autorita per il termine piu ampio), e la vostra pagina categoria dovrebbe linkare ai singoli prodotti (passando autorita ai termini specifici). I breadcrumb gestiscono questo naturalmente quando strutturati correttamente.\n\nQuando la cannibalizzazione esiste gia, la soluzione dipende da quale pagina dovrebbe posizionarsi. Di solito, e la pagina categoria per i termini mid-tail e la pagina prodotto per i termini di prodotto specifici. Rinforzate i link interni verso la pagina preferita e regolate l'ottimizzazione on-page dell'altra pagina per concentrarsi su parole chiave diverse.",
          items: [
            "Controllate nella GSC le parole chiave dove piu URL del vostro sito appaiono, questo segnala cannibalizzazione",
            "Assegnate una parola chiave principale per pagina e registratela nella vostra mappa delle parole chiave",
            "Usate i link interni per rinforzare quale pagina e l'autorita per ogni termine",
            "In caso di cannibalizzazione esistente, rinforzate la pagina preferita e ri-ottimizzate l'altra",
          ],
        },
        {
          title: "Framework decisionale pratico",
          content:
            "Quando incontrate una nuova parola chiave, percorrete questo albero decisionale. Primo, controllate la SERP: quali tipi di pagina si posizionano nel top 5? Se dominano le pagine prodotto, assegnatela a una pagina prodotto. Se dominano le pagine categoria/listing, assegnatela a una pagina categoria.\n\nSecondo, valutate la specificita. La parola chiave descrive un singolo articolo o un gruppo di articoli? \"Sony WH-1000XM5\" e un articolo, pagina prodotto. \"Migliori cuffie wireless per correre\" descrive un gruppo, pagina categoria o guida.\n\nTerzo, controllate le vostre pagine esistenti. Avete gia una pagina che punta questa parola chiave o qualcosa di molto simile? Se si, ottimizzate la pagina esistente piuttosto che crearne una nuova. Creare targeting duplicato e uno dei modi piu rapidi per innescare la cannibalizzazione.\n\nQuarto, considerate il percorso dell'utente. Dove si trova nel processo d'acquisto chi cerca questo termine? I navigatori nelle fasi iniziali hanno bisogno di pagine categoria con filtri e confronti. Gli acquirenti pronti all'acquisto hanno bisogno di pagine prodotto con specifiche e opzioni di acquisto. Far corrispondere il tipo di pagina alla fase dell'acquirente impatta direttamente sui tassi di conversione.",
        },
      ],
      navLabels: {
        previous: "Intenzione d'acquisto vs. volume di ricerca",
        next: "Parole chiave long-tail per i prodotti",
      },
    },
    nl: {
      badge: "Zoekwoordonderzoek",
      heading: "Product- vs. categoriezoekwoorden",
      intro:
        "Beslissen of je een zoekwoord moet targeten met een productpagina of een categoriepagina is een van de meest bepalende SEO-keuzes voor elke webshop. Doe je het verkeerd, dan concurreren je pagina's met elkaar in plaats van met concurrenten.",
      readTime: "8 min leestijd",
      sections: [
        {
          title: "Wanneer productpagina's vs. categoriepagina's inzetten",
          content:
            "De eenvoudigste regel: kijk wat Google al rankt voor het zoekwoord. Als de top 10 resultaten voornamelijk productdetailpagina's zijn (individuele artikelen met een winkelwagen-knop), target het dan met een productpagina. Als de top 10 categorielistingen, collectiepagina's of vergelijkende content toont, gebruik dan een categoriepagina.\n\nProductpagina's moeten specifieke, smalle zoekopdrachten targeten: exacte productnamen, modelnummers, SKU-termen en zoekopdrachten met gedetailleerde specificaties zoals maat, kleur of materiaal. Dit zijn bottom-of-funnel termen waar de zoeker weet wat hij wil.\n\nCategoriepagina's moeten bredere termen targeten die een producttype beschrijven in plaats van een specifiek product: \"heren waterdichte wandelschoenen\", \"draadloze noise-cancelling koptelefoons\" of \"biologisch katoenen lakens\". Deze mid-funnel termen hebben hoger volume maar vereisen dat de zoeker opties bekijkt voordat hij koopt.\n\nHet grijze gebied verschijnt bij termen als merk + producttype (\"Nike hardloopschoenen\"). Controleer de SERP, Google kan een mix tonen van merk-categoriepagina's en individuele productpagina's. In deze gevallen wint een gefilterde categoriepagina die alleen dat merk toont doorgaans.",
          items: [
            "Controleer de SERP voordat je beslist: Google vertelt je welk paginatype het prefereert voor elk zoekwoord",
            "Productpagina's targeten: specifieke modellen, SKU's, productnamen en gedetailleerde attribuutcombinaties",
            "Categoriepagina's targeten: producttypetermen, merk + categorie en mid-funnel browse-zoekopdrachten",
            "Wanneer de SERP gemengde resultaten toont, heeft een goed gestructureerde categoriepagina meestal het voordeel",
          ],
          image: {
            src: "/images/academy/nl/product-vs-category-decision.svg",
            alt: "Entscheidungsdiagramm für Produktseiten versus Kategorieseiten",
            caption: "Prüfen Sie immer zuerst die SERP. Google zeigt Ihnen, welchen Seitentyp es bevorzugt.",
          },
          callout: {
            title: "Volumen-Aufteilung",
            text: "Kategorieseiten zielen auf ~150 Mid-Tail-Keywords (1K-5K Suchen), Produktseiten auf 3.000+ Long-Tail-Keywords (20-500 Suchen).",
          },
        },
        {
          title: "Head-terms vs. long-tail verdeling",
          content:
            "In een typisch e-commerce zoekwoordlandschap volgt de verdeling een voorspelbaar patroon. Een klein aantal head-terms (\"laptops\", \"hardloopschoenen\", \"huidverzorging\") hebben enorm volume maar converteren slecht en zijn extreem competitief. De mid-tail (\"gaming laptops onder 1000 euro\", \"dames trail hardloopschoenen\") vertegenwoordigt de sweet spot van volume, intentie en haalbare moeilijkheid.\n\nDe long tail, die 70-80% van alle zoekopdrachten uitmaakt, bestaat uit zeer specifieke termen die individueel klein volume hebben maar samen het merendeel van de e-commerce omzet genereren. Deze mappen natuurlijk naar productpagina's.\n\nZo ziet de berekening er typisch uit voor een webshop met 1.000 producten verdeeld over 50 categorieen. De 50 categoriepagina's kunnen 150 mid-tail zoekwoorden targeten, met gemiddeld 1.000-5.000 zoekopdrachten elk. De 1.000 productpagina's kunnen meer dan 3.000 long-tail zoekwoorden targeten, met gemiddeld 20-500 zoekopdrachten elk. Het totale adresseerbare zoekvolume van de long tail overtreft vaak de mid-tail.\n\nHet strategische inzicht: je categoriepagina's vechten om competitieve mid-tail termen, terwijl je productpagina's stil long-tail verkeer verzamelen met minimale inspanning. Beide lagen doen ertoe, maar de meeste webshops investeren te weinig in productpagina-optimalisatie.",
        },
        {
          title: "Hoe categoriepagina's ranken voor mid-funnel termen",
          content:
            "Categoriepagina's hebben structurele voordelen voor mid-funnel zoekwoorden. Ze bevatten meerdere producten (meer contentsignalen), ontvangen doorgaans meer interne links (van navigatie, breadcrumbs en kruislinks) en matchen de zoekintentie van iemand die opties verkent in plaats van een enkel item bekijkt.\n\nOm effectief te ranken, hebben categoriepagina's meer nodig dan een raster van productminiaturen. Ze hebben een beschrijvende introparagraaf nodig (100-200 woorden) die het doelzoekwoord natuurlijk gebruikt, filteropties die weerspiegelen hoe mensen zoeken (op prijsklasse, kenmerken, gebruikssituatie) en genoeg productlistingen om autoriteit op het onderwerp te demonstreren.\n\nFacetnavigatie creert hier een krachtige kans. Als je categoriepagina voor \"draadloze koptelefoons\" gebruikers laat filteren op \"noise-cancelling\", \"over-ear\" en \"onder 100 euro\", kun je gefilterde weergaven maken die specifieke mid-tail termen targeten. De URL-structuur is belangrijk, elke betekenisvolle filtercombinatie moet een crawlbare, indexeerbare URL opleveren.\n\nVergeet de categoriepaginatekst onder het productraster niet. Een sectie van 300-500 woorden over koopoverwegingen, kenmerkvergelijkingen en aanbevelingen per gebruikssituatie helpt zowel rankings als conversie. Deze content beantwoordt de vragen die mid-funnel shoppers hebben, vertrouwen opbouwend voordat ze doorklikken naar een product.\n\n[Categoriepagina-SEO](/academy/category-page-seo) behandelt deze optimalisaties uitgebreid.\n\nOnze gids over [ecommerce categoriepagina-SEO](/blog/ecommerce-category-page-seo) behandelt deze optimalisaties in detail.",
          items: [
            "Voeg een introparagraaf van 100-200 woorden met het primaire zoekwoord toe aan elke categoriepagina",
            "Bouw filteropties die zoekgedrag weerspiegelen: prijs, kenmerken, merk, gebruikssituatie",
            "Maak indexeerbare URL's voor waardevolle filtercombinaties",
            "Voeg 300-500 woorden koopadvies toe onder het productraster",
          ],
          tip: "Controleer je analytics op zoekopdrachten die overeenkomen met filtercombinaties. Als mensen zoeken naar \"waterdichte bluetooth speakers onder 50 euro\", zorg er dan voor dat die exacte filtercombinatie een eigen crawlbare URL heeft met geoptimaliseerde content.",
        },
        {
          title: "Productpagina zoekwoord-targeting met attributen en specificaties",
          content:
            "Productpagina's targeten natuurlijk een primair zoekwoord, meestal de productnaam. Maar de echte SEO-waarde komt van de secundaire zoekwoorden die je in de pagina verweeft via specificaties, attributen en beschrijvende content.\n\nElk productattribuut is een zoekwoordkans. Een productpagina voor een wandelrugzak moet natuurlijk het volume (in liters), het materiaal, het gewicht, de waterdichtheidsclassificatie, het aantal vakken, het frametype en compatibele lichaamsmates bevatten. Elk van deze attributen, gecombineerd met het producttype, creert een long-tail zoekwoord waarvoor de pagina kan ranken.\n\nDe productbeschrijving is waar de meeste webshops de bal laten vallen. Fabrieksbeschrijvingen zijn gedupliceerd bij elke retailer die het product voert, nul SEO-waarde. Schrijf unieke beschrijvingen die attributen als natuurlijke taal verwerken: \"Deze ultralight rugzak van 45 liter weegt slechts 890 gram en beschikt over een waterdichte ripstop nylon buitenschaal\" target minstens vier long-tail variaties.\n\nGestructureerde data (productschema) versterkt de zichtbaarheid van deze attributen in zoekresultaten. Wanneer je productpagina correct schema-markup bevat voor prijs, beschikbaarheid, reviews en specificaties, kan Google rich snippets tonen die doorklikpercentages met 20-30% verbeteren.\n\nOns onderwerp over [productpagina-SEO](/academy/product-page-seo) behandelt deze optimalisaties uitgebreid.",
          tip: "Bouw een productpagina-contenttemplate voor elke productcategorie. Lijst alle relevante attributen als velden op, dit zorgt ervoor dat elke productpagina dezelfde zoekwoordrijke specificaties dekt, zelfs wanneer ze door verschillende teamleden worden geschreven.",
        },
        {
          title: "Kannibalisatie tussen product- en categoriepagina's vermijden",
          content:
            "Zoekwoordkannibalisatie ontstaat wanneer meerdere pagina's op je site concurreren om dezelfde zoekterm. Voor e-commerce webshops is de meest voorkomende vorm dat een categoriepagina en een productpagina allebei proberen te ranken voor hetzelfde zoekwoord. Google raakt verward over welke pagina te tonen, en vaak rankt geen van beide goed.\n\nHet duidelijkste signaal van kannibalisatie: controleer in GSC een zoekwoord en kijk of meerdere URL's van je site verschijnen, met rankings die tussen hen fluctueren. Als je categoriepagina voor \"heren leren laarzen\" en een specifieke productpagina wisselen tussen positie 8 en positie 15, vreet kannibalisatie je rankings op.\n\nPreventie is eenvoudig. Wijs een primair zoekwoord toe aan elke pagina en documenteer het in je zoekwoordenkaart. Categoriepagina's krijgen de bredere term (\"heren leren laarzen\"), productpagina's krijgen de specifieke term (\"Wolverine 1000 Mile laars bruin maat 44\"). De titel en H1 van de productpagina moeten de productnaam gebruiken, niet het categoriezoekwoord.\n\nInterne linking versterkt de hierarchie. Je productpagina moet linken naar zijn bovenliggende categorie (de categorie versterkend als autoriteit voor de bredere term), en je categoriepagina moet linken naar individuele producten (autoriteit doorgeven aan de specifieke termen). Breadcrumbs regelen dit natuurlijk wanneer correct gestructureerd.\n\nWanneer kannibalisatie al bestaat, hangt de oplossing af van welke pagina moet ranken. Meestal is het de categoriepagina voor mid-tail termen en de productpagina voor specifieke producttermen. Versterk de interne links naar de voorkeurspagina en pas de on-page optimalisatie van de andere pagina aan om op andere zoekwoorden te focussen.",
          items: [
            "Controleer in GSC zoekwoorden waarbij meerdere URL's van je site verschijnen, dit signaleert kannibalisatie",
            "Wijs een primair zoekwoord per pagina toe en leg het vast in je zoekwoordenkaart",
            "Gebruik interne linking om te versterken welke pagina de autoriteit is voor elke term",
            "Bij bestaande kannibalisatie, versterk de voorkeurspagina en heroptimaliseer de andere",
          ],
        },
        {
          title: "Praktisch beslissingskader",
          content:
            "Wanneer je een nieuw zoekwoord tegenkomt, doorloop dan deze beslisboom. Ten eerste, controleer de SERP: welke paginatypes ranken in de top 5? Als productpagina's domineren, wijs het toe aan een productpagina. Als categorie-/listingpagina's domineren, wijs het toe aan een categoriepagina.\n\nTen tweede, evalueer de specificiteit. Beschrijft het zoekwoord een enkel item of een groep items? \"Sony WH-1000XM5\" is een enkel item, productpagina. \"Beste draadloze koptelefoons voor hardlopen\" beschrijft een groep, categorie- of gidspagina.\n\nTen derde, controleer je bestaande pagina's. Heb je al een pagina die dit zoekwoord of iets heel vergelijkbaars target? Zo ja, optimaliseer de bestaande pagina in plaats van een nieuwe te maken. Dubbele targeting creeren is een van de snelste manieren om kannibalisatie te triggeren.\n\nTen vierde, overweeg de klantreis. Waar bevindt iemand die deze term zoekt zich in het aankoopproces? Vroege browsers hebben categoriepagina's nodig met filters en vergelijkingen. Koopklare shoppers hebben productpagina's nodig met specificaties en aankoopopties. Je paginatype afstemmen op de fase van de koper heeft direct invloed op conversiepercentages.",
        },
      ],
      navLabels: {
        previous: "Koopintentie vs. zoekvolume",
        next: "Long-tail zoekwoorden voor producten",
      },
    },
  },
};
