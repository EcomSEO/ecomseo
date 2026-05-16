import type { BlogArticle } from "../types";

export const ecommerceSeoKeywords: BlogArticle = {
  slug: "ecommerce-seo-keywords",
  category: "strategy",
  publishDate: "2026-03-14",
  readingTime: 12,
  author: "Fabian van Til",
  authorRole: "CEO at EcomSEO",
  authorSlug: "fabian-van-til",
  primaryKeyword: "ecommerce seo keywords",
  secondaryKeywords: [
    "ecommerce keyword research",
    "seo keywords for online stores",
    "ecommerce keyword strategy",
  ],
  content: {
    en: {
      title: "Ecommerce SEO Keywords: Research for Growth",
      description:
        "Learn how ecommerce keyword research differs from standard SEO. Find buyer-intent keywords, map them to your funnel, and build a revenue strategy.",
      sections: [
        {
          heading: "Keyword research for ecommerce is a different game",
          body: [
            "Most keyword research guides are written for blogs and content sites. They tell you to find high-volume informational queries, write articles around them, and build topical authority over time. That works for publishers. It does not work the same way for online stores.",
            "Ecommerce keyword research has a different goal. You are not just trying to attract readers. You are trying to attract buyers. That means the keywords you target need to match purchasing intent, map to actual product and category pages, and account for the way people search when they are ready to spend money.",
            "We have run keyword strategies for stores ranging from 200 SKUs to over 50,000. The difference between a store that gets traffic but no sales and one that converts at 3-4% usually comes down to keyword targeting. Not content volume. Not backlinks. The keywords themselves.",
            "This guide covers how we approach ecommerce keyword research, from understanding buyer intent to building a full keyword map that connects every page on your store to the right search terms.",
          ],
        },
        {
          heading: "Understanding buyer intent changes everything",
          body: [
            "Search intent is the single most important factor in ecommerce keyword selection. A keyword like 'running shoes' gets 200,000+ monthly searches, but the intent behind it is scattered. Some people want reviews. Some want to browse. Some want to buy. Some are writing a school report.",
            "Compare that to 'Brooks Ghost 15 men's size 11.' The volume is tiny, maybe 500 searches per month. But nearly every person typing that phrase has a credit card in hand. They know exactly what they want.",
            "We group ecommerce keywords into four intent buckets. Informational queries like 'best material for winter jackets' belong on blog posts or buying guides. Navigational queries like 'Nike store near me' are brand-driven. Commercial investigation queries like 'Yeti vs Hydro Flask tumbler' sit between research and purchase. Transactional queries like 'buy Yeti Rambler 26oz' are where the money is.",
            "The mistake most stores make is chasing informational keywords because the volume looks attractive. A store we audited last year had 40 blog posts targeting informational terms and was getting 15,000 monthly visits from them. Revenue from that traffic? Under 800 euros per month. When we shifted focus to transactional and commercial investigation keywords on their product and category pages, revenue from organic search grew by 340% in six months, with only a modest increase in total traffic.",
          ],
          image: { src: "/images/blog/keyword-intent-funnel.svg", alt: "Ecommerce keyword intent funnel showing informational, navigational, commercial, and transactional layers", caption: "The four intent layers of ecommerce keyword targeting" },
          callout: { title: "Intent Beats Volume", text: "Transactional keywords convert at 3-5x the rate of informational ones. A store shifting focus from informational to commercial and transactional terms saw 340% organic revenue growth in six months." },
        },
        {
          heading: "Where to find ecommerce keywords that actually convert",
          body: [
            "The standard approach of plugging seed keywords into Ahrefs or SEMrush and sorting by volume will not get you where you need to be. You need sources that reflect how real shoppers search.",
            "Start with your own search data. Google Search Console shows you exactly what queries are already bringing people to your store. Filter for queries where you rank in positions 4-20 with a decent click-through rate. These are quick wins waiting to happen. One client found 127 keywords they ranked on page two for, and by optimizing existing pages, moved 43 of them to page one within two months.",
            "Amazon's search bar is gold for product-level keywords. Type in your product category and watch the autocomplete suggestions. These come from actual purchase-oriented searches. Amazon's algorithm surfaces buying terms, not informational ones. We pull hundreds of keyword ideas from Amazon for every ecommerce project.",
            "Google Shopping results tell you what Google considers commercial queries. Search for your product category and note which terms trigger Shopping ads. These keywords have verified buying intent because advertisers are paying for that click.",
            "Competitor product and category pages are another rich source. Do not just look at their meta titles. Check their H1s, breadcrumb text, filter labels, and product descriptions. Scrape the sitemap of your top five competitors and extract every category and subcategory URL. The words they use in those URLs are keywords they are targeting.",
            "Your site search logs deserve attention too. If your store has internal search, export those queries. Customers are literally telling you what they want in their own words. We have found keyword gold in site search data that no external tool would surface.",
          ],
          image: { src: "/images/blog/keyword-sources-workflow.svg", alt: "Ecommerce keyword research sources workflow from own data through marketplace, competitors, and tool discovery to validation", caption: "Start with your own data, expand through competitors, then fill gaps with tools" },
          callout: { title: "Quick Wins First", text: "One client found 127 keywords they ranked on page two for. By optimizing existing pages, they moved 43 of them to page one within two months -- no new content needed." },
        },
        {
          heading: "Mapping keywords to your funnel and page types",
          body: [
            "Every keyword belongs to a specific page type on your store. Getting this mapping wrong leads to cannibalization, wasted effort, and confused rankings.",
            "Category pages should target your broadest commercial keywords. Think 'women's running shoes' or 'organic dog food.' These pages have the most internal link equity, the broadest product selection beneath them, and the best chance of ranking for competitive head terms. We typically assign 1-2 primary keywords and 4-6 secondary keywords per category page.",
            "Subcategory and filter pages handle the middle layer. Keywords like 'women's trail running shoes' or 'grain-free organic dog food' match the more specific browsing intent. Not every filter combination deserves a dedicated page, but the ones with search volume absolutely do.",
            "Product pages target the most specific keywords. Product names, model numbers, SKU-level terms, color and size combinations. 'Brooks Ghost 15 women's black size 8' is a product page keyword. Do not try to rank a product page for 'running shoes.' It will not work.",
            "Blog and guide pages handle informational intent. 'How to choose running shoes for flat feet' belongs on a guide, not a product page. But make sure those guides link to the relevant product and category pages. That is how informational content feeds your sales funnel. For a full playbook on producing content that drives organic traffic and sales, see our guide to [ecommerce SEO content strategy](/blog/ecommerce-seo-content).",
            "We build keyword maps in spreadsheets with columns for the keyword, monthly volume, intent type, target page URL, primary or secondary designation, and current ranking position. For a mid-sized store, this map usually has 500-2,000 rows. It becomes the blueprint for every on-page optimization and content decision.",
          ],
          image: { src: "/images/blog/keyword-page-mapping.svg", alt: "Keyword to page type mapping showing category, subcategory, product, and blog page assignments", caption: "Each keyword type maps to a specific page type on your store" },
        },
        {
          heading: "Long-tail keywords are your competitive edge",
          body: [
            "Head terms like 'running shoes' are dominated by Nike, Amazon, and Zappos. You are not going to outrank them. And honestly, you do not need to.",
            "Long-tail keywords, queries of four or more words, make up roughly 70% of all searches. They convert at 2-5x the rate of head terms. And they are dramatically easier to rank for.",
            "Here is a real example from a client selling specialty kitchen equipment. The keyword 'knife set' has 40,000 monthly searches and a keyword difficulty score of 78. They would never rank for it. But 'Japanese Damascus steel chef knife set' has 1,200 monthly searches with a difficulty of 22. They ranked on page one within three months and that single keyword now drives about 9,000 euros per month in revenue.",
            "The long-tail strategy for ecommerce works because product pages naturally target specific terms. If you sell a Japanese Damascus steel chef knife set, your product page already has those words on it. The optimization work is about making sure the on-page elements, the title tag, H1, URL, image alts, and first paragraph, are aligned around that specific phrase.",
            "We generate long-tail keyword lists by taking head terms and appending modifiers. Material modifiers (leather, stainless steel, bamboo). Use case modifiers (for camping, for small apartments, for beginners). Brand modifiers. Size modifiers. Color modifiers. Price modifiers (under 50 euros, premium, budget). Feature modifiers (waterproof, wireless, rechargeable). Each modifier creates a new keyword with lower competition and higher intent.",
          ],
          callout: { title: "Long-Tail ROI", text: "Long-tail keywords (4+ words) make up 70% of all searches and convert at 2-5x the rate of head terms. One client's single long-tail keyword drives 9,000 euros per month from just 1,200 monthly searches." },
        },
        {
          heading: "Finding and exploiting competitor keyword gaps",
          body: [
            "Keyword gap analysis shows you what your competitors rank for that you do not. This is one of the highest-ROI activities in ecommerce SEO because it reveals proven opportunities. If a competitor ranks for a keyword and sells similar products, that keyword will work for you too.",
            "In Ahrefs, the Content Gap tool compares up to ten domains. We input our client's domain and their top four competitors, then filter for keywords where at least two competitors rank in the top 20 but our client does not rank at all. This consistently produces hundreds of actionable keywords.",
            "Last quarter, we ran this analysis for a home decor store. The gap analysis revealed 312 keywords their competitors ranked for. Of those, 89 could be captured by optimizing existing category pages, 47 needed new subcategory pages, and 176 were informational terms suited for blog content. We prioritized the 89 category page optimizations and saw a 28% increase in organic revenue within four months.",
            "Pay attention to keywords where multiple competitors rank but none of them rank particularly well (positions 5-20). These are keywords where the search results are not locked down by a dominant player. You can often break in and even claim the top spot with good on-page optimization and a few quality links.",
            "Also look for competitors who rank with weak pages. If a competitor ranks at position 7 for 'sustainable yoga mats' with a thin category page that has no unique content, a 200-word description, and poor internal linking, you can build a much better page and overtake them.",
          ],
          image: { src: "/images/blog/keyword-gap-analysis.svg", alt: "Competitor keyword gap analysis workflow from input through filtering, categorizing, and executing", caption: "A structured keyword gap analysis consistently uncovers hundreds of actionable opportunities" },
        },
        {
          heading: "Category page keyword targeting done right",
          body: [
            "Category pages are the workhorses of ecommerce SEO. They can rank for dozens or even hundreds of keywords when optimized properly. But most stores treat them as simple product listing pages with no unique content. That is a missed opportunity.",
            "Each category page needs a primary keyword baked into the URL, title tag, H1, and meta description. But the page should also target a cluster of related keywords through on-page content. We write 300-500 words of category description text that naturally includes secondary keywords. This text goes above or below the product grid, depending on the template.",
            "Filter parameters create opportunities for additional keyword targeting. If your category page for 'women's dresses' has filters for occasion (casual, cocktail, formal), length (mini, midi, maxi), and fabric (cotton, silk, linen), each meaningful combination can become an indexable page targeting a specific keyword cluster. 'Silk midi dress for cocktail party' becomes rankable content.",
            "But be careful. Not every filter combination has search demand, and creating too many thin filter pages will hurt your crawl budget. We validate every filter combination against search volume data before deciding to make it indexable. In practice, about 15-25% of filter combinations warrant their own page.",
            "Internal linking between category pages matters for keyword authority. Your main 'women's shoes' category should link to all subcategories. Each subcategory should link back to the parent and sideways to related subcategories. This creates a keyword-relevant internal link network that signals topic relationships to search engines. For a complete guide to optimizing these pages once your keywords are mapped, read our article on [ecommerce category page SEO](/blog/ecommerce-category-page-seo).",
          ],
        },
        {
          heading: "Tools and methods we actually use",
          body: [
            "We have tried dozens of keyword research tools over the years. Here is what actually earns its place in our workflow.",
            "Ahrefs is our primary tool for keyword discovery, competitor analysis, and tracking. Its Keywords Explorer gives accurate volume data for most markets, and the SERP analysis feature lets us assess ranking difficulty by looking at the actual pages that rank, not just a difficulty number. We use Ahrefs daily.",
            "Google Search Console is irreplaceable for finding what you already rank for. The Performance report filtered by pages and queries shows you exactly which keywords bring traffic to which pages. We export this data monthly and compare it against our keyword map to spot new opportunities and declining positions.",
            "Google Keyword Planner still has value for validating commercial intent. If a keyword has high CPC bids, advertisers believe it converts. We use Keyword Planner as a secondary data source to cross-reference volume estimates from Ahrefs.",
            "Screaming Frog is not a keyword tool, but we use it during keyword mapping. Crawling a site and exporting all title tags, H1s, and URLs lets us quickly see which keywords a store currently targets and where the gaps are.",
            "For Amazon keyword research specifically, we use Helium 10's free tools. The search volume data is specific to Amazon, but the keyword ideas transfer well to Google because the same shoppers use both platforms.",
            "The method matters more than the tools. Start with your own data (Search Console, site search logs). Then expand with competitor analysis. Then fill gaps with tool-driven discovery. Validate everything against intent and search volume. Map it all to pages. This order prevents you from chasing vanity metrics instead of revenue-driving keywords. Our [intent matching tool](/tools/intent-matching-tool) helps classify keywords by buyer intent automatically. If you want hands-on help finding the right terms, explore our [professional keyword research](/keyword-research) service.",
          ],
          image: { src: "/images/blog/keyword-tool-stack.svg", alt: "Ecommerce keyword research tool stack showing primary and secondary tools with recommended method order", caption: "The method matters more than the tools -- follow this order to avoid chasing vanity metrics" },
        },
        {
          heading: "Building your keyword strategy for the long term",
          body: [
            "Keyword research is not a one-time project. Search behavior changes. New products launch. Competitors shift their strategies. We revisit keyword maps quarterly for most clients and monthly for fast-moving categories like fashion and electronics.",
            "Track keyword rankings by page, not just by keyword. If your 'women's running shoes' category page starts ranking for 50 keywords instead of 30, that is a sign your content and internal linking improvements are working. If it drops from 50 to 35, something has changed and you need to investigate.",
            "New product launches should always start with keyword research before the product page goes live. We have seen stores launch products with generic page titles like 'New Arrival - Blue Widget' when the actual search demand is for 'rechargeable blue widget with USB-C.' Those are lost sales from day one.",
            "Seasonal keyword planning is often overlooked. 'Winter boots' starts climbing in search volume around August, peaks in November, and drops off in February. If you wait until October to optimize your winter boots category page, you have already missed the early shoppers who convert at the highest rates. We plan seasonal keyword campaigns at least three months ahead of the search curve.",
            "The stores that win at ecommerce SEO are the ones that treat keyword research as an ongoing discipline, not a box to check during a site launch. Every new page, every product update, every content piece should connect back to your keyword strategy. That is how organic search becomes a reliable, scalable revenue channel. To build a complete keyword-driven SEO strategy, see our guide to [ecommerce SEO strategy](/blog/ecommerce-seo-strategy).",
          ],
        },
      ],
    },
    de: {
      title: "Ecommerce SEO Keywords: Recherche fuer Wachstum",
      description: "Erfahren Sie, wie sich Ecommerce Keyword-Recherche von Standard-SEO unterscheidet. Finden Sie Keywords mit Kaufabsicht, ordnen Sie sie Ihrem Funnel zu und bauen Sie eine Umsatzstrategie auf.",
      sections: [
        {
          heading: "Keyword-Recherche fuer Ecommerce ist ein anderes Spiel",
          body: [
            "Die meisten Keyword-Recherche-Leitfaeden sind fuer Blogs und Content-Seiten geschrieben. Sie sagen Ihnen, hochvolumige informationelle Suchanfragen zu finden, Artikel darum herum zu schreiben und ueber die Zeit thematische Autoritaet aufzubauen. Das funktioniert fuer Publisher. Fuer Onlineshops funktioniert es nicht auf die gleiche Weise.",
            "Ecommerce Keyword-Recherche hat ein anderes Ziel. Sie versuchen nicht nur, Leser anzuziehen. Sie versuchen, Kaeufer anzuziehen. Das bedeutet, die Keywords, die Sie anvisieren, muessen zur Kaufabsicht passen, auf tatsaechliche Produkt- und Kategorieseiten abgebildet werden koennen und beruecksichtigen, wie Menschen suchen, wenn sie bereit sind, Geld auszugeben.",
            "Wir haben Keyword-Strategien fuer Shops von 200 SKUs bis ueber 50.000 durchgefuehrt. Der Unterschied zwischen einem Shop, der Traffic bekommt, aber keine Verkaeufe, und einem, der bei 3-4% konvertiert, laeuft meistens auf das Keyword-Targeting hinaus. Nicht das Content-Volumen. Nicht die Backlinks. Die Keywords selbst.",
            "Dieser Leitfaden behandelt, wie wir an Ecommerce Keyword-Recherche herangehen, vom Verstaendnis der Kaufabsicht bis zum Aufbau einer vollstaendigen Keyword-Map, die jede Seite Ihres Shops mit den richtigen Suchbegriffen verbindet."
          ],
        },
        {
          heading: "Das Verstaendnis der Kaufabsicht veraendert alles",
          body: [
            "Suchintention ist der einzelne wichtigste Faktor bei der Ecommerce-Keyword-Auswahl. Ein Keyword wie 'Laufschuhe' hat 200.000+ monatliche Suchen, aber die Intention dahinter ist verstreut. Manche Menschen wollen Bewertungen. Manche wollen stoebern. Manche wollen kaufen. Manche schreiben einen Schulaufsatz.",
            "Vergleichen Sie das mit 'Brooks Ghost 15 Herren Groesse 44'. Das Volumen ist winzig, vielleicht 500 Suchen pro Monat. Aber nahezu jede Person, die diese Phrase eingibt, hat die Kreditkarte in der Hand. Sie wissen genau, was sie wollen.",
            "Wir gruppieren Ecommerce-Keywords in vier Intent-Eimer. Informationelle Anfragen wie 'bestes Material fuer Winterjacken' gehoeren auf Blogbeitraege oder Kaufratgeber. Navigationale Anfragen wie 'Nike Store in meiner Naehe' sind markengetrieben. Kommerzielle Rechercheanfragen wie 'Yeti vs Hydro Flask Tumbler' liegen zwischen Recherche und Kauf. Transaktionale Anfragen wie 'Yeti Rambler 26oz kaufen' sind dort, wo das Geld liegt.",
            "Der Fehler, den die meisten Shops machen, ist informationelle Keywords zu jagen, weil das Volumen attraktiv aussieht. Ein Shop, den wir letztes Jahr prueften, hatte 40 Blogbeitraege, die auf informationelle Begriffe abzielten, und bekam 15.000 monatliche Besuche davon. Umsatz aus diesem Traffic? Unter 800 Euro pro Monat. Als wir den Fokus auf transaktionale und kommerzielle Recherche-Keywords auf ihren Produkt- und Kategorieseiten verlagerten, wuchs der Umsatz aus der organischen Suche in sechs Monaten um 340%, bei nur modestatem Anstieg des Gesamttraffics."
          ],
          image: { src: "/images/blog/de/keyword-intent-funnel.svg", alt: "Ecommerce keyword intent funnel showing informational, navigational, commercial, and transactional layers", caption: "The four intent layers of ecommerce keyword targeting" },
          callout: { title: "Intent Beats Volume", text: "Transactional keywords convert at 3-5x the rate of informational ones. A store shifting focus from informational to commercial and transactional terms saw 340% organic revenue growth in six months." },
        },
        {
          heading: "Wo Sie Ecommerce-Keywords finden, die tatsaechlich konvertieren",
          body: [
            "Der Standardansatz, Seed-Keywords in Ahrefs oder SEMrush einzugeben und nach Volumen zu sortieren, wird Sie nicht dorthin bringen, wo Sie sein muessen. Sie brauchen Quellen, die widerspiegeln, wie echte Kaeufer suchen.",
            "Beginnen Sie mit Ihren eigenen Suchdaten. Google Search Console zeigt Ihnen genau, welche Anfragen bereits Menschen zu Ihrem Shop bringen. Filtern Sie nach Anfragen, bei denen Sie auf Positionen 4-20 mit einer annehmbaren Klickrate ranken. Das sind Quick Wins, die darauf warten, realisiert zu werden. Ein Kunde fand 127 Keywords, fuer die er auf Seite zwei rankte, und durch die Optimierung bestehender Seiten verschob er 43 davon innerhalb von zwei Monaten auf Seite eins.",
            "Amazons Suchleiste ist Gold fuer produktbezogene Keywords. Geben Sie Ihre Produktkategorie ein und beobachten Sie die Autocomplete-Vorschlaege. Diese stammen aus tatsaechlichen kauforientierten Suchen. Amazons Algorithmus bringt Kaufbegriffe an die Oberflaeche, keine informationellen. Wir ziehen fuer jedes Ecommerce-Projekt Hunderte von Keyword-Ideen aus Amazon.",
            "Google Shopping Ergebnisse zeigen Ihnen, was Google als kommerzielle Anfragen betrachtet. Suchen Sie nach Ihrer Produktkategorie und notieren Sie, welche Begriffe Shopping-Anzeigen ausloesen. Diese Keywords haben verifizierte Kaufabsicht, weil Werbetreibende fuer diesen Klick bezahlen.",
            "Produkt- und Kategorieseiten von Wettbewerbern sind eine weitere ergiebige Quelle. Schauen Sie nicht nur auf deren Meta-Titel. Pruefen Sie deren H1s, Breadcrumb-Text, Filterbeschriftungen und Produktbeschreibungen. Scrapen Sie die Sitemap Ihrer fuenf Top-Wettbewerber und extrahieren Sie jede Kategorie- und Unterkategorie-URL. Die Woerter, die sie in diesen URLs verwenden, sind Keywords, auf die sie abzielen.",
            "Ihre Site-Search-Logs verdienen ebenfalls Aufmerksamkeit. Wenn Ihr Shop eine interne Suche hat, exportieren Sie diese Anfragen. Kunden sagen Ihnen buchstaeblich in ihren eigenen Worten, was sie wollen. Wir haben Keyword-Gold in Site-Search-Daten gefunden, das kein externes Tool aufdecken wuerde."
          ],
          image: { src: "/images/blog/de/keyword-sources-workflow.svg", alt: "Ecommerce keyword research sources workflow from own data through marketplace, competitors, and tool discovery to validation", caption: "Start with your own data, expand through competitors, then fill gaps with tools" },
          callout: { title: "Quick Wins First", text: "One client found 127 keywords they ranked on page two for. By optimizing existing pages, they moved 43 of them to page one within two months -- no new content needed." },
        },
        {
          heading: "Keywords Ihrem Funnel und Seitentypen zuordnen",
          body: [
            "Jedes Keyword gehoert zu einem bestimmten Seitentyp in Ihrem Shop. Wenn Sie diese Zuordnung falsch machen, fuehrt das zu Kannibalisierung, verschwendetem Aufwand und verwirrten Rankings.",
            "Kategorieseiten sollten Ihre breitesten kommerziellen Keywords anvisieren. Denken Sie an 'Damen Laufschuhe' oder 'Bio Hundefutter'. Diese Seiten haben die meiste interne Link Equity, die breiteste Produktauswahl unter sich und die beste Chance, fuer wettbewerbsintensive Head Terms zu ranken. Wir weisen typischerweise 1-2 primaere Keywords und 4-6 sekundaere Keywords pro Kategorieseite zu.",
            "Unterkategorie- und Filterseiten behandeln die mittlere Ebene. Keywords wie 'Damen Trailrunning-Schuhe' oder 'getreidefreies Bio-Hundefutter' passen zur spezifischeren Stoeber-Intention. Nicht jede Filterkombination verdient eine dedizierte Seite, aber diejenigen mit Suchvolumen absolut schon.",
            "Produktseiten zielen auf die spezifischsten Keywords. Produktnamen, Modellnummern, SKU-Level-Begriffe, Farb- und Groessenkombinationen. 'Brooks Ghost 15 Damen schwarz Groesse 39' ist ein Produktseiten-Keyword. Versuchen Sie nicht, eine Produktseite fuer 'Laufschuhe' zu ranken. Es wird nicht funktionieren.",
            "Blog- und Ratgeberseiten behandeln informationelle Intention. 'Wie waehlt man Laufschuhe fuer Plattfuesse' gehoert auf einen Ratgeber, nicht auf eine Produktseite. Aber stellen Sie sicher, dass diese Ratgeber auf die relevanten Produkt- und Kategorieseiten verlinken. So speist informationeller Content Ihren Sales Funnel. Fuer ein vollstaendiges Playbook zur Produktion von Content, der organischen Traffic und Verkaeufe treibt, lesen Sie unseren Leitfaden zur [Ecommerce SEO Content Strategie](/blog/ecommerce-seo-content).",
            "Wir erstellen Keyword-Maps in Tabellenkalkulationen mit Spalten fuer das Keyword, monatliches Volumen, Intent-Typ, Zielseiten-URL, primaere oder sekundaere Bezeichnung und aktuelle Ranking-Position. Fuer einen mittelgrossen Shop hat diese Map normalerweise 500-2.000 Zeilen. Sie wird zur Blaupause fuer jede On-Page-Optimierung und Content-Entscheidung."
          ],
          image: { src: "/images/blog/de/keyword-page-mapping.svg", alt: "Keyword to page type mapping showing category, subcategory, product, and blog page assignments", caption: "Each keyword type maps to a specific page type on your store" },
        },
        {
          heading: "Long-Tail-Keywords sind Ihr Wettbewerbsvorteil",
          body: [
            "Head Terms wie 'Laufschuhe' werden von Nike, Amazon und Zalando dominiert. Sie werden sie nicht ueberranken. Und ehrlich gesagt muessen Sie das auch nicht.",
            "Long-Tail-Keywords, Anfragen mit vier oder mehr Woertern, machen rund 70% aller Suchen aus. Sie konvertieren mit 2-5-facher Rate im Vergleich zu Head Terms. Und sie sind dramatisch einfacher zu ranken.",
            "Hier ist ein echtes Beispiel von einem Kunden, der Spezial-Kuechenausstattung verkauft. Das Keyword 'Messerset' hat 40.000 monatliche Suchen und einen Keyword-Schwierigkeitsgrad von 78. Sie wuerden nie dafuer ranken. Aber 'japanisches Damaskusstahl Kochmesser Set' hat 1.200 monatliche Suchen mit einem Schwierigkeitsgrad von 22. Sie rankten innerhalb von drei Monaten auf Seite eins und dieses einzelne Keyword treibt nun etwa 9.000 Euro monatlichen Umsatz.",
            "Die Long-Tail-Strategie fuer Ecommerce funktioniert, weil Produktseiten natuerlich auf spezifische Begriffe abzielen. Wenn Sie ein japanisches Damaskusstahl Kochmesser Set verkaufen, hat Ihre Produktseite diese Woerter bereits. Die Optimierungsarbeit besteht darin sicherzustellen, dass die On-Page-Elemente, der Title Tag, H1, URL, Bild-Alts und der erste Absatz, um diese spezifische Phrase herum ausgerichtet sind.",
            "Wir generieren Long-Tail-Keyword-Listen, indem wir Head Terms nehmen und Modifikatoren anfuegen. Material-Modifikatoren (Leder, Edelstahl, Bambus). Anwendungsfall-Modifikatoren (fuer Camping, fuer kleine Wohnungen, fuer Anfaenger). Marken-Modifikatoren. Groessen-Modifikatoren. Farb-Modifikatoren. Preis-Modifikatoren (unter 50 Euro, Premium, Budget). Feature-Modifikatoren (wasserdicht, kabellos, wiederaufladbar). Jeder Modifikator erzeugt ein neues Keyword mit geringerem Wettbewerb und hoeherer Intention."
          ],
          callout: { title: "Long-Tail ROI", text: "Long-tail keywords (4+ words) make up 70% of all searches and convert at 2-5x the rate of head terms. One client's single long-tail keyword drives 9,000 euros per month from just 1,200 monthly searches." },
        },
        {
          heading: "Keyword-Luecken der Wettbewerber finden und nutzen",
          body: [
            "Die Keyword-Gap-Analyse zeigt Ihnen, wofuer Ihre Wettbewerber ranken und Sie nicht. Dies ist eine der Aktivitaeten mit dem hoechsten ROI im Ecommerce SEO, weil sie bewiesene Chancen aufdeckt. Wenn ein Wettbewerber fuer ein Keyword rankt und aehnliche Produkte verkauft, wird dieses Keyword auch fuer Sie funktionieren.",
            "In Ahrefs vergleicht das Content Gap Tool bis zu zehn Domains. Wir geben die Domain unseres Kunden und deren vier Top-Wettbewerber ein und filtern dann nach Keywords, bei denen mindestens zwei Wettbewerber in den Top 20 ranken, unser Kunde aber ueberhaupt nicht. Dies produziert durchgehend Hunderte umsetzbarer Keywords.",
            "Letztes Quartal fuehrten wir diese Analyse fuer einen Wohndeko-Shop durch. Die Gap-Analyse deckte 312 Keywords auf, fuer die ihre Wettbewerber rankten. Davon konnten 89 durch die Optimierung bestehender Kategorieseiten erfasst werden, 47 brauchten neue Unterkategorieseiten, und 176 waren informationelle Begriffe, die fuer Blog-Content geeignet waren. Wir priorisierten die 89 Kategorieseiten-Optimierungen und sahen einen Anstieg des organischen Umsatzes um 28% innerhalb von vier Monaten.",
            "Achten Sie auf Keywords, bei denen mehrere Wettbewerber ranken, aber keiner besonders gut (Positionen 5-20). Das sind Keywords, bei denen die Suchergebnisse nicht von einem dominanten Akteur besetzt sind. Sie koennen oft einbrechen und sogar den Spitzenplatz mit guter On-Page-Optimierung und ein paar Qualitaetslinks beanspruchen.",
            "Suchen Sie auch nach Wettbewerbern, die mit schwachen Seiten ranken. Wenn ein Wettbewerber auf Position 7 fuer 'nachhaltige Yogamatten' rankt mit einer duennen Kategorieseite ohne einzigartigen Content, einer 200-Wort-Beschreibung und schlechter interner Verlinkung, koennen Sie eine viel bessere Seite aufbauen und sie ueberholen."
          ],
          image: { src: "/images/blog/de/keyword-gap-analysis.svg", alt: "Competitor keyword gap analysis workflow from input through filtering, categorizing, and executing", caption: "A structured keyword gap analysis consistently uncovers hundreds of actionable opportunities" },
        },
        {
          heading: "Kategorieseiten-Keyword-Targeting richtig gemacht",
          body: [
            "Kategorieseiten sind die Arbeitspferde des Ecommerce SEO. Sie koennen fuer Dutzende oder sogar Hunderte von Keywords ranken, wenn sie richtig optimiert sind. Aber die meisten Shops behandeln sie als einfache Produktlisten-Seiten ohne einzigartigen Content. Das ist eine verpasste Chance.",
            "Jede Kategorieseite braucht ein primaeres Keyword, das in die URL, den Title Tag, die H1 und die Meta Description eingebaut ist. Aber die Seite sollte auch einen Cluster verwandter Keywords durch On-Page-Content anvisieren. Wir schreiben 300-500 Woerter Kategoriebeschreibungstext, der natuerlich sekundaere Keywords einbindet. Dieser Text kommt ueber oder unter das Produktraster, je nach Vorlage.",
            "Filterparameter schaffen Moeglichkeiten fuer zusaetzliches Keyword-Targeting. Wenn Ihre Kategorieseite fuer 'Damenkleider' Filter fuer Anlass (laessig, Cocktail, formell), Laenge (mini, midi, maxi) und Stoff (Baumwolle, Seide, Leinen) hat, kann jede sinnvolle Kombination zu einer indexierbaren Seite werden, die auf einen spezifischen Keyword-Cluster abzielt. 'Seidenes Midi-Kleid fuer Cocktailparty' wird rankbarer Content.",
            "Aber seien Sie vorsichtig. Nicht jede Filterkombination hat Suchnachfrage, und zu viele duenne Filterseiten zu erstellen wird Ihr Crawl Budget belasten. Wir validieren jede Filterkombination gegen Suchvolumendaten, bevor wir entscheiden, sie indexierbar zu machen. In der Praxis rechtfertigen etwa 15-25% der Filterkombinationen eine eigene Seite.",
            "Interne Verlinkung zwischen Kategorieseiten ist wichtig fuer die Keyword-Autoritaet. Ihre Haupt-'Damenschuhe'-Kategorie sollte auf alle Unterkategorien verlinken. Jede Unterkategorie sollte zurueck zur uebergeordneten Kategorie und seitwaerts zu verwandten Unterkategorien verlinken. Das schafft ein keyword-relevantes internes Linknetzwerk, das Suchmaschinen thematische Zusammenhaenge signalisiert. Fuer einen vollstaendigen Leitfaden zur Optimierung dieser Seiten, sobald Ihre Keywords kartiert sind, lesen Sie unseren Artikel zu [Ecommerce Kategorieseiten SEO](/blog/ecommerce-category-page-seo)."
          ],
        },
        {
          heading: "Tools und Methoden, die wir tatsaechlich verwenden",
          body: [
            "Wir haben im Laufe der Jahre Dutzende von Keyword-Recherche-Tools ausprobiert. Hier ist, was sich tatsaechlich seinen Platz in unserem Workflow verdient.",
            "Ahrefs ist unser primaeres Tool fuer Keyword-Discovery, Wettbewerbsanalyse und Tracking. Der Keywords Explorer liefert genaue Volumendaten fuer die meisten Maerkte, und die SERP-Analysefunktion laesst uns die Ranking-Schwierigkeit bewerten, indem wir die tatsaechlichen Seiten betrachten, die ranken, nicht nur eine Schwierigkeitszahl. Wir verwenden Ahrefs taeglich.",
            "Google Search Console ist unersetzlich, um herauszufinden, wofuer Sie bereits ranken. Der Leistungsbericht, gefiltert nach Seiten und Anfragen, zeigt Ihnen genau, welche Keywords Traffic zu welchen Seiten bringen. Wir exportieren diese Daten monatlich und vergleichen sie mit unserer Keyword-Map, um neue Chancen und sinkende Positionen zu erkennen.",
            "Google Keyword Planner hat immer noch Wert fuer die Validierung kommerzieller Absicht. Wenn ein Keyword hohe CPC-Gebote hat, glauben Werbetreibende, dass es konvertiert. Wir nutzen den Keyword Planner als sekundaere Datenquelle zur Gegenprüfung von Volumenschaetzungen aus Ahrefs.",
            "Screaming Frog ist kein Keyword-Tool, aber wir verwenden es waehrend des Keyword-Mappings. Das Crawlen einer Seite und Exportieren aller Title Tags, H1s und URLs laesst uns schnell sehen, welche Keywords ein Shop aktuell anvisiert und wo die Luecken sind.",
            "Fuer Amazon-Keyword-Recherche speziell verwenden wir die kostenlosen Tools von Helium 10. Die Suchvolumendaten sind spezifisch fuer Amazon, aber die Keyword-Ideen uebertragen sich gut auf Google, weil dieselben Kaeufer beide Plattformen nutzen.",
            "Die Methode zaehlt mehr als die Tools. Beginnen Sie mit Ihren eigenen Daten (Search Console, Site-Search-Logs). Dann erweitern Sie mit Wettbewerbsanalyse. Dann fuellen Sie Luecken mit tool-gestuetzter Recherche. Validieren Sie alles gegen Intention und Suchvolumen. Ordnen Sie alles Seiten zu. Diese Reihenfolge verhindert, dass Sie Eitelkeitsmetriken statt umsatztreibenden Keywords nachjagen. Unser [Intent-Matching-Tool](/tools/intent-matching-tool) hilft, Keywords automatisch nach Kaufabsicht zu klassifizieren. Wenn Sie praktische Hilfe bei der Suche nach den richtigen Begriffen moechten, erkunden Sie unseren [professionellen Keyword-Recherche](/keyword-research) Service."
          ],
          image: { src: "/images/blog/de/keyword-tool-stack.svg", alt: "Ecommerce keyword research tool stack showing primary and secondary tools with recommended method order", caption: "The method matters more than the tools -- follow this order to avoid chasing vanity metrics" },
        },
        {
          heading: "Ihre Keyword-Strategie langfristig aufbauen",
          body: [
            "Keyword-Recherche ist kein einmaliges Projekt. Suchverhalten aendert sich. Neue Produkte werden eingefuehrt. Wettbewerber aendern ihre Strategien. Wir ueberarbeiten Keyword-Maps quartalsweise fuer die meisten Kunden und monatlich fuer schnelllebige Kategorien wie Mode und Elektronik.",
            "Verfolgen Sie Keyword-Rankings nach Seite, nicht nur nach Keyword. Wenn Ihre 'Damen Laufschuhe'-Kategorieseite beginnt, fuer 50 Keywords statt 30 zu ranken, ist das ein Zeichen, dass Ihre Content- und interne-Verlinkungsverbesserungen wirken. Wenn sie von 50 auf 35 faellt, hat sich etwas geaendert und Sie muessen untersuchen.",
            "Neue Produkteinfuehrungen sollten immer mit Keyword-Recherche beginnen, bevor die Produktseite live geht. Wir haben gesehen, wie Shops Produkte mit generischen Seitentiteln wie 'Neuheit - Blaues Widget' starten, waehrend die tatsaechliche Suchnachfrage nach 'wiederaufladbares blaues Widget mit USB-C' besteht. Das sind verlorene Verkaeufe vom ersten Tag an.",
            "Saisonale Keyword-Planung wird oft uebersehen. 'Winterstiefel' beginnt um August im Suchvolumen zu steigen, erreicht den Hoehepunkt im November und faellt im Februar ab. Wenn Sie bis Oktober warten, um Ihre Winterstiefel-Kategorieseite zu optimieren, haben Sie bereits die fruehen Kaeufer verpasst, die mit den hoechsten Raten konvertieren. Wir planen saisonale Keyword-Kampagnen mindestens drei Monate vor der Suchkurve.",
            "Die Shops, die bei Ecommerce SEO gewinnen, sind diejenigen, die Keyword-Recherche als fortlaufende Disziplin behandeln, nicht als Haekchen bei einem Site-Launch. Jede neue Seite, jedes Produktupdate, jedes Content-Stueck sollte auf Ihre Keyword-Strategie zurueckverweisen. So wird die organische Suche zu einem zuverlaessigen, skalierbaren Umsatzkanal. Um eine vollstaendige keyword-getriebene SEO-Strategie aufzubauen, lesen Sie unseren Leitfaden zur [Ecommerce SEO Strategie](/blog/ecommerce-seo-strategy)."
          ],
        }
      ],
    },
    fr: {
      title: "Mots-clés SEO ecommerce : recherche pour la croissance",
      description: "Découvrez comment la recherche de mots-clés ecommerce diffère du SEO standard. Trouvez des mots-clés à intention d'achat, associez-les à votre tunnel et construisez une stratégie orientée revenus.",
      sections: [
        {
          heading: "La recherche de mots-clés pour le ecommerce est un jeu différent",
          body: [
            "La plupart des guides de recherche de mots-clés sont écrits pour les blogs et les sites de contenu. Ils vous disent de trouver des requêtes informationnelles à fort volume, d'écrire des articles autour d'elles et de construire une autorité thématique au fil du temps. Cela fonctionne pour les éditeurs. Cela ne fonctionne pas de la même façon pour les boutiques en ligne.",
            "La recherche de mots-clés ecommerce a un objectif différent. Vous n'essayez pas seulement d'attirer des lecteurs. Vous essayez d'attirer des acheteurs. Cela signifie que les mots-clés que vous ciblez doivent correspondre à une intention d'achat, s'associer à de véritables pages produits et catégories, et tenir compte de la façon dont les gens recherchent quand ils sont prêts à dépenser de l'argent.",
            "Nous avons mené des stratégies de mots-clés pour des boutiques allant de 200 SKU à plus de 50 000. La différence entre une boutique qui obtient du trafic mais aucune vente et une qui convertit à 3-4 % se résume généralement au ciblage des mots-clés. Pas au volume de contenu. Pas aux backlinks. Les mots-clés eux-mêmes.",
            "Ce guide couvre notre approche de la recherche de mots-clés ecommerce, de la compréhension de l'intention d'achat à la construction d'une carte de mots-clés complète qui connecte chaque page de votre boutique aux bons termes de recherche."
          ],
        },
        {
          heading: "Comprendre l'intention d'achat change tout",
          body: [
            "L'intention de recherche est le facteur le plus important dans la sélection de mots-clés ecommerce. Un mot-clé comme « chaussures de running » obtient plus de 200 000 recherches mensuelles, mais l'intention derrière est dispersée. Certaines personnes veulent des avis. Certaines veulent parcourir. Certaines veulent acheter. Certaines rédigent un exposé scolaire.",
            "Comparez cela à « Brooks Ghost 15 homme taille 44 ». Le volume est minuscule, peut-être 500 recherches par mois. Mais presque chaque personne tapant cette phrase a une carte de crédit en main. Elle sait exactement ce qu'elle veut.",
            "Nous regroupons les mots-clés ecommerce en quatre catégories d'intention. Les requêtes informationnelles comme « meilleur matériau pour les vestes d'hiver » appartiennent aux articles de blog ou guides d'achat. Les requêtes de navigation comme « magasin Nike près de chez moi » sont orientées marque. Les requêtes d'investigation commerciale comme « Yeti vs Hydro Flask gobelet » se situent entre la recherche et l'achat. Les requêtes transactionnelles comme « acheter Yeti Rambler 26oz » sont là où se trouve l'argent.",
            "L'erreur que la plupart des boutiques commettent est de courir après les mots-clés informationnels parce que le volume semble attractif. Une boutique que nous avons auditée l'année dernière avait 40 articles de blog ciblant des termes informationnels et obtenait 15 000 visites mensuelles grâce à eux. Le chiffre d'affaires de ce trafic ? Moins de 800 euros par mois. Quand nous avons recentré l'effort sur les mots-clés transactionnels et d'investigation commerciale sur leurs pages produits et catégories, le chiffre d'affaires de la recherche organique a augmenté de 340 % en six mois, avec seulement une augmentation modeste du trafic total."
          ],
          image: { src: "/images/blog/fr/keyword-intent-funnel.svg", alt: "Ecommerce keyword intent funnel showing informational, navigational, commercial, and transactional layers", caption: "The four intent layers of ecommerce keyword targeting" },
          callout: { title: "Intent Beats Volume", text: "Transactional keywords convert at 3-5x the rate of informational ones. A store shifting focus from informational to commercial and transactional terms saw 340% organic revenue growth in six months." },
        },
        {
          heading: "Où trouver des mots-clés ecommerce qui convertissent réellement",
          body: [
            "L'approche standard consistant à entrer des mots-clés de base dans Ahrefs ou SEMrush et trier par volume ne vous mènera pas où vous devez être. Vous avez besoin de sources qui reflètent la façon dont les vrais acheteurs recherchent.",
            "Commencez par vos propres données de recherche. Google Search Console vous montre exactement quelles requêtes amènent déjà des personnes vers votre boutique. Filtrez les requêtes où vous vous classez en positions 4-20 avec un taux de clics correct. Ce sont des gains rapides qui attendent d'être réalisés. Un client a trouvé 127 mots-clés pour lesquels il se classait en page deux, et en optimisant les pages existantes, a déplacé 43 d'entre eux en page un en deux mois.",
            "La barre de recherche d'Amazon est une mine d'or pour les mots-clés au niveau des produits. Tapez votre catégorie de produit et observez les suggestions d'autocomplétion. Celles-ci proviennent de recherches réellement orientées achat. L'algorithme d'Amazon fait remonter les termes d'achat, pas les termes informationnels. Nous tirons des centaines d'idées de mots-clés d'Amazon pour chaque projet ecommerce.",
            "Les résultats Google Shopping vous indiquent ce que Google considère comme des requêtes commerciales. Recherchez votre catégorie de produit et notez quels termes déclenchent des annonces Shopping. Ces mots-clés ont une intention d'achat vérifiée car les annonceurs paient pour ce clic.",
            "Les pages produits et catégories de vos concurrents sont une autre source riche. Ne regardez pas seulement leurs balises meta. Vérifiez leurs H1, le texte du fil d'Ariane, les libellés de filtres et les descriptions de produits. Scrapez le sitemap de vos cinq principaux concurrents et extrayez chaque URL de catégorie et sous-catégorie. Les mots qu'ils utilisent dans ces URL sont des mots-clés qu'ils ciblent.",
            "Vos logs de recherche interne méritent aussi votre attention. Si votre boutique a une recherche interne, exportez ces requêtes. Les clients vous disent littéralement ce qu'ils veulent dans leurs propres mots. Nous avons trouvé des pépites de mots-clés dans les données de recherche interne qu'aucun outil externe ne ferait remonter."
          ],
          image: { src: "/images/blog/fr/keyword-sources-workflow.svg", alt: "Ecommerce keyword research sources workflow from own data through marketplace, competitors, and tool discovery to validation", caption: "Start with your own data, expand through competitors, then fill gaps with tools" },
          callout: { title: "Quick Wins First", text: "One client found 127 keywords they ranked on page two for. By optimizing existing pages, they moved 43 of them to page one within two months -- no new content needed." },
        },
        {
          heading: "Associer les mots-clés à votre tunnel et types de pages",
          body: [
            "Chaque mot-clé appartient à un type de page spécifique de votre boutique. Se tromper dans cette association mène à la cannibalisation, des efforts gaspillés et des classements confus.",
            "Les pages catégories devraient cibler vos mots-clés commerciaux les plus larges. Pensez « chaussures de running femme » ou « croquettes bio pour chien ». Ces pages ont le plus d'autorité de liens internes, la sélection de produits la plus large en dessous d'elles, et les meilleures chances de se classer pour des termes concurrentiels de tête. Nous attribuons généralement 1-2 mots-clés principaux et 4-6 mots-clés secondaires par page catégorie.",
            "Les pages de sous-catégories et de filtres gèrent la couche intermédiaire. Les mots-clés comme « chaussures de trail running femme » ou « croquettes bio sans céréales pour chien » correspondent à l'intention de navigation plus spécifique. Toutes les combinaisons de filtres ne méritent pas une page dédiée, mais celles avec du volume de recherche le méritent absolument.",
            "Les pages produits ciblent les mots-clés les plus spécifiques. Noms de produits, numéros de modèle, termes au niveau du SKU, combinaisons de couleur et taille. « Brooks Ghost 15 femme noir taille 38 » est un mot-clé de page produit. N'essayez pas de classer une page produit pour « chaussures de running ». Cela ne fonctionnera pas.",
            "Les pages de blog et guides gèrent l'intention informationnelle. « Comment choisir des chaussures de running pour pieds plats » appartient à un guide, pas à une page produit. Mais assurez-vous que ces guides pointent vers les pages produits et catégories pertinentes. C'est ainsi que le contenu informationnel nourrit votre tunnel de vente. Pour un guide complet sur la production de contenu qui génère du trafic organique et des ventes, consultez notre guide sur la [stratégie de contenu SEO ecommerce](/blog/ecommerce-seo-content).",
            "Nous construisons des cartes de mots-clés dans des tableurs avec des colonnes pour le mot-clé, le volume mensuel, le type d'intention, l'URL de la page cible, la désignation principal ou secondaire, et la position de classement actuelle. Pour une boutique de taille moyenne, cette carte compte généralement 500 à 2 000 lignes. Elle devient le plan directeur de chaque optimisation on-page et décision de contenu."
          ],
          image: { src: "/images/blog/fr/keyword-page-mapping.svg", alt: "Keyword to page type mapping showing category, subcategory, product, and blog page assignments", caption: "Each keyword type maps to a specific page type on your store" },
        },
        {
          heading: "Les mots-clés longue traîne sont votre avantage concurrentiel",
          body: [
            "Les termes de tête comme « chaussures de running » sont dominés par Nike, Amazon et Zalando. Vous n'allez pas les surclasser. Et honnêtement, vous n'en avez pas besoin.",
            "Les mots-clés longue traîne, les requêtes de quatre mots ou plus, représentent environ 70 % de toutes les recherches. Ils convertissent à un taux 2 à 5 fois supérieur à celui des termes de tête. Et ils sont considérablement plus faciles à classer.",
            "Voici un exemple réel d'un client vendant de l'équipement de cuisine spécialisé. Le mot-clé « set de couteaux » a 40 000 recherches mensuelles et un score de difficulté de 78. Il ne se classerait jamais pour celui-là. Mais « set de couteaux de chef japonais en acier Damas » a 1 200 recherches mensuelles avec une difficulté de 22. Il s'est classé en page un en trois mois et ce seul mot-clé génère désormais environ 9 000 euros par mois de chiffre d'affaires.",
            "La stratégie longue traîne pour le ecommerce fonctionne parce que les pages produits ciblent naturellement des termes spécifiques. Si vous vendez un set de couteaux de chef japonais en acier Damas, votre page produit contient déjà ces mots. Le travail d'optimisation consiste à s'assurer que les éléments on-page — la balise title, le H1, l'URL, les alt des images et le premier paragraphe — sont alignés autour de cette expression spécifique.",
            "Nous générons des listes de mots-clés longue traîne en prenant des termes de tête et en ajoutant des modificateurs. Modificateurs de matériau (cuir, acier inoxydable, bambou). Modificateurs de cas d'utilisation (pour le camping, pour petits appartements, pour débutants). Modificateurs de marque. Modificateurs de taille. Modificateurs de couleur. Modificateurs de prix (moins de 50 euros, premium, budget). Modificateurs de caractéristiques (imperméable, sans fil, rechargeable). Chaque modificateur crée un nouveau mot-clé avec une concurrence plus faible et une intention plus forte."
          ],
          callout: { title: "Long-Tail ROI", text: "Long-tail keywords (4+ words) make up 70% of all searches and convert at 2-5x the rate of head terms. One client's single long-tail keyword drives 9,000 euros per month from just 1,200 monthly searches." },
        },
        {
          heading: "Trouver et exploiter les lacunes de mots-clés concurrentiels",
          body: [
            "L'analyse des lacunes de mots-clés vous montre ce pour quoi vos concurrents se classent et pas vous. C'est l'une des activités au meilleur ROI en SEO ecommerce car elle révèle des opportunités prouvées. Si un concurrent se classe pour un mot-clé et vend des produits similaires, ce mot-clé fonctionnera aussi pour vous.",
            "Dans Ahrefs, l'outil Content Gap compare jusqu'à dix domaines. Nous entrons le domaine de notre client et ses quatre principaux concurrents, puis filtrons les mots-clés pour lesquels au moins deux concurrents se classent dans le top 20 mais notre client ne se classe pas du tout. Cela produit systématiquement des centaines de mots-clés actionnables.",
            "Le trimestre dernier, nous avons effectué cette analyse pour une boutique de décoration intérieure. L'analyse des lacunes a révélé 312 mots-clés pour lesquels leurs concurrents se classaient. Parmi ceux-ci, 89 pouvaient être captés en optimisant les pages catégories existantes, 47 nécessitaient de nouvelles pages de sous-catégories, et 176 étaient des termes informationnels adaptés au contenu de blog. Nous avons priorisé les 89 optimisations de pages catégories et avons constaté une augmentation de 28 % du chiffre d'affaires organique en quatre mois.",
            "Faites attention aux mots-clés pour lesquels plusieurs concurrents se classent mais aucun ne se classe particulièrement bien (positions 5-20). Ce sont des mots-clés où les résultats de recherche ne sont pas verrouillés par un acteur dominant. Vous pouvez souvent vous y insérer et même revendiquer la première place avec une bonne optimisation on-page et quelques liens de qualité.",
            "Recherchez aussi les concurrents qui se classent avec des pages faibles. Si un concurrent se classe en position 7 pour « tapis de yoga durable » avec une page catégorie maigre sans contenu unique, une description de 200 mots et un maillage interne insuffisant, vous pouvez construire une bien meilleure page et le dépasser."
          ],
          image: { src: "/images/blog/fr/keyword-gap-analysis.svg", alt: "Competitor keyword gap analysis workflow from input through filtering, categorizing, and executing", caption: "A structured keyword gap analysis consistently uncovers hundreds of actionable opportunities" },
        },
        {
          heading: "Le ciblage de mots-clés des pages catégories bien fait",
          body: [
            "Les pages catégories sont les chevaux de bataille du SEO ecommerce. Elles peuvent se classer pour des dizaines voire des centaines de mots-clés quand elles sont correctement optimisées. Mais la plupart des boutiques les traitent comme de simples pages de listing de produits sans contenu unique. C'est une opportunité manquée.",
            "Chaque page catégorie a besoin d'un mot-clé principal intégré dans l'URL, la balise title, le H1 et la meta description. Mais la page devrait aussi cibler un cluster de mots-clés connexes à travers le contenu on-page. Nous rédigeons 300-500 mots de texte descriptif de catégorie qui inclut naturellement les mots-clés secondaires. Ce texte va au-dessus ou en dessous de la grille de produits, selon le template.",
            "Les param\u00c3\u00a8tr\u00e8s de filtres cr\u00c3\u00a9ent des opportunit\u00c3\u00a9s de ciblage de mots-cl\u00c3\u00a9s suppl\u00c3\u00a9mentaires. Si votre page cat\u00c3\u00a9gorie pour \u00c2\u00ab robes femme \u00c2\u00bb a des filtres par occasion (d\u00c3\u00a9contract\u00c3\u00a9, cocktail, soir\u00c3\u00a9e), longueur (courte, midi, longue) et tissu (coton, soie, lin), chaque combinaison significative peut devenir une page indexable ciblant un cluster de mots-cl\u00c3\u00a9s sp\u00c3\u00a9cifique. \u00c2\u00ab Robe midi en soie pour cocktail \u00c2\u00bb devient du contenu classable.",
            "Mais soyez prudent. Toutes les combinaisons de filtres n'ont pas de demande de recherche, et créer trop de pages de filtres maigres nuira à votre budget de crawl. Nous validons chaque combinaison de filtres par rapport aux données de volume de recherche avant de décider de la rendre indexable. En pratique, environ 15-25 % des combinaisons de filtres justifient leur propre page.",
            "Le maillage interne entre les pages catégories compte pour l'autorité des mots-clés. Votre catégorie principale « chaussures femme » devrait pointer vers toutes les sous-catégories. Chaque sous-catégorie devrait pointer vers la catégorie parente et latéralement vers les sous-catégories connexes. Cela crée un réseau de liens internes pertinent en termes de mots-clés qui signale les relations thématiques aux moteurs de recherche. Pour un guide complet d'optimisation de ces pages une fois vos mots-clés cartographiés, lisez notre article sur le [SEO des pages catégories ecommerce](/blog/ecommerce-category-page-seo)."
          ],
        },
        {
          heading: "Outils et méthodes que nous utilisons réellement",
          body: [
            "Nous avons essayé des dizaines d'outils de recherche de mots-clés au fil des ans. Voici ce qui mérite vraiment sa place dans notre workflow.",
            "Ahrefs est notre outil principal pour la découverte de mots-clés, l'analyse concurrentielle et le suivi. Son Keywords Explorer fournit des données de volume précises pour la plupart des marchés, et la fonctionnalité d'analyse SERP nous permet d'évaluer la difficulté de classement en examinant les pages réellement classées, pas juste un chiffre de difficulté. Nous utilisons Ahrefs quotidiennement.",
            "Google Search Console est irremplaçable pour trouver ce pour quoi vous vous classez déjà. Le rapport de performance filtré par pages et requêtes vous montre exactement quels mots-clés amènent du trafic vers quelles pages. Nous exportons ces données mensuellement et les comparons à notre carte de mots-clés pour repérer de nouvelles opportunités et les positions en déclin.",
            "Google Keyword Planner a encore de la valeur pour valider l'intention commerciale. Si un mot-clé a des enchères CPC élevées, les annonceurs croient qu'il convertit. Nous utilisons Keyword Planner comme source de données secondaire pour croiser les estimations de volume d'Ahrefs.",
            "Screaming Frog n'est pas un outil de mots-clés, mais nous l'utilisons pendant la cartographie des mots-clés. Crawler un site et exporter toutes les balises title, H1 et URL nous permet de voir rapidement quels mots-clés une boutique cible actuellement et où se trouvent les lacunes.",
            "Pour la recherche de mots-clés spécifique à Amazon, nous utilisons les outils gratuits de Helium 10. Les données de volume de recherche sont spécifiques à Amazon, mais les idées de mots-clés se transfèrent bien vers Google car les mêmes acheteurs utilisent les deux plateformes.",
            "La méthode compte plus que les outils. Commencez par vos propres données (Search Console, logs de recherche interne). Puis développez avec l'analyse concurrentielle. Puis comblez les lacunes avec la découverte assistée par les outils. Validez tout par rapport à l'intention et au volume de recherche. Associez le tout à des pages. Cet ordre vous empêche de courir après des métriques de vanité au lieu de mots-clés générateurs de revenus. Notre [outil de correspondance d'intention](/tools/intent-matching-tool) aide à classifier automatiquement les mots-clés par intention d'achat. Si vous souhaitez une aide pratique pour trouver les bons termes, découvrez notre service de [recherche de mots-clés professionnelle](/keyword-research)."
          ],
          image: { src: "/images/blog/fr/keyword-tool-stack.svg", alt: "Ecommerce keyword research tool stack showing primary and secondary tools with recommended method order", caption: "The method matters more than the tools -- follow this order to avoid chasing vanity metrics" },
        },
        {
          heading: "Construire votre stratégie de mots-clés pour le long terme",
          body: [
            "La recherche de mots-clés n'est pas un projet ponctuel. Le comportement de recherche change. De nouveaux produits sont lancés. Les concurrents modifient leurs stratégies. Nous révisons les cartes de mots-clés trimestriellement pour la plupart des clients et mensuellement pour les catégories à rotation rapide comme la mode et l'électronique.",
            "Suivez les classements de mots-clés par page, pas seulement par mot-clé. Si votre page catégorie « chaussures de running femme » commence à se classer pour 50 mots-clés au lieu de 30, c'est un signe que vos améliorations de contenu et de maillage interne fonctionnent. Si elle passe de 50 à 35, quelque chose a changé et vous devez enquêter.",
            "Les lancements de nouveaux produits devraient toujours commencer par une recherche de mots-clés avant que la page produit ne soit mise en ligne. Nous avons vu des boutiques lancer des produits avec des titres de page génériques comme « Nouveauté - Widget bleu » alors que la demande de recherche réelle est pour « widget bleu rechargeable avec USB-C ». Ce sont des ventes perdues dès le premier jour.",
            "La planification saisonnière des mots-clés est souvent négligée. « Bottes d'hiver » commence à grimper en volume de recherche vers août, atteint son pic en novembre et chute en février. Si vous attendez octobre pour optimiser votre page catégorie de bottes d'hiver, vous avez déjà manqué les acheteurs précoces qui convertissent aux taux les plus élevés. Nous planifions les campagnes de mots-clés saisonniers au moins trois mois avant la courbe de recherche.",
            "Les boutiques qui gagnent en SEO ecommerce sont celles qui traitent la recherche de mots-clés comme une discipline continue, pas comme une case à cocher lors du lancement d'un site. Chaque nouvelle page, chaque mise à jour de produit, chaque contenu devrait se reconnecter à votre stratégie de mots-clés. C'est ainsi que la recherche organique devient un canal de revenus fiable et scalable. Pour construire une stratégie SEO complète basée sur les mots-clés, consultez notre guide de [stratégie SEO ecommerce](/blog/ecommerce-seo-strategy)."
          ],
        }
      ],
    },
    es: {
      title: "Keywords de SEO para ecommerce: investigación para el crecimiento",
      description: "Aprende cómo la investigación de keywords para ecommerce difiere del SEO estándar. Encuentra keywords con intención de compra, asócialas a tu embudo y construye una estrategia de ingresos.",
      sections: [
        {
          heading: "La investigación de keywords para ecommerce es un juego diferente",
          body: [
            "La mayoría de las guías de investigación de keywords están escritas para blogs y sitios de contenido. Te dicen que encuentres consultas informativas de alto volumen, escribas artículos alrededor de ellas y construyas autoridad temática con el tiempo. Eso funciona para editores. No funciona de la misma manera para tiendas online.",
            "La investigación de keywords para ecommerce tiene un objetivo diferente. No solo intentas atraer lectores. Intentas atraer compradores. Eso significa que las keywords que apuntes necesitan coincidir con la intención de compra, mapearse a páginas reales de productos y categorías, y tener en cuenta la forma en que la gente busca cuando está lista para gastar dinero.",
            "Hemos ejecutado estrategias de keywords para tiendas que van desde 200 SKUs hasta más de 50.000. La diferencia entre una tienda que obtiene tráfico pero no ventas y una que convierte al 3-4% generalmente se reduce a la segmentación de keywords. No al volumen de contenido. No a los backlinks. Las keywords en sí.",
            "Esta guía cubre cómo abordamos la investigación de keywords para ecommerce, desde entender la intención del comprador hasta construir un mapa de keywords completo que conecte cada página de tu tienda con los términos de búsqueda correctos."
          ],
        },
        {
          heading: "Entender la intención del comprador lo cambia todo",
          body: [
            "La intención de búsqueda es el factor más importante en la selección de keywords para ecommerce. Una keyword como 'running shoes' obtiene más de 200.000 búsquedas mensuales, pero la intención detrás de ella es dispersa. Algunas personas quieren reseñas. Algunas quieren navegar. Algunas quieren comprar. Algunas están escribiendo un trabajo escolar.",
            "Compara eso con 'Brooks Ghost 15 men's size 11'. El volumen es pequeño, quizás 500 búsquedas al mes. Pero casi cada persona que escribe esa frase tiene la tarjeta de crédito en mano. Saben exactamente lo que quieren.",
            "Agrupamos las keywords de ecommerce en cuatro categorías de intención. Las consultas informativas como 'best material for winter jackets' pertenecen a publicaciones de blog o guías de compra. Las consultas de navegación como 'Nike store near me' son impulsadas por la marca. Las consultas de investigación comercial como 'Yeti vs Hydro Flask tumbler' se sitúan entre la investigación y la compra. Las consultas transaccionales como 'buy Yeti Rambler 26oz' son donde está el dinero.",
            "El error que cometen la mayoría de las tiendas es perseguir keywords informativas porque el volumen parece atractivo. Una tienda que auditamos el año pasado tenía 40 publicaciones de blog apuntando a términos informacionales y estaba obteniendo 15.000 visitas mensuales de ellas. ¿Ingresos de ese tráfico? Menos de 800 euros al mes. Cuando cambiamos el enfoque a keywords transaccionales y de investigación comercial en sus páginas de productos y categorías, los ingresos de búsqueda orgánica crecieron un 340% en seis meses, con solo un modesto aumento en el tráfico total."
          ],
          image: { src: "/images/blog/es/keyword-intent-funnel.svg", alt: "Ecommerce keyword intent funnel showing informational, navigational, commercial, and transactional layers", caption: "The four intent layers of ecommerce keyword targeting" },
          callout: { title: "Intent Beats Volume", text: "Transactional keywords convert at 3-5x the rate of informational ones. A store shifting focus from informational to commercial and transactional terms saw 340% organic revenue growth in six months." },
        },
        {
          heading: "Dónde encontrar keywords de ecommerce que realmente convierten",
          body: [
            "El enfoque estándar de introducir keywords semilla en Ahrefs o SEMrush y ordenar por volumen no te llevará donde necesitas estar. Necesitas fuentes que reflejen cómo buscan los compradores reales.",
            "Empieza con tus propios datos de búsqueda. Google Search Console te muestra exactamente qué consultas ya están trayendo personas a tu tienda. Filtra por consultas donde te posicionas en las posiciones 4-20 con una tasa de clics decente. Estas son victorias rápidas esperando suceder. Un cliente encontró 127 keywords para las que se posicionaba en la página dos, y al optimizar las páginas existentes, movió 43 de ellas a la página uno en dos meses.",
            "La barra de búsqueda de Amazon es oro para keywords a nivel de producto. Escribe tu categoría de producto y observa las sugerencias de autocompletado. Estas provienen de búsquedas reales orientadas a la compra. El algoritmo de Amazon muestra términos de compra, no informacionales. Extraemos cientos de ideas de keywords de Amazon para cada proyecto de ecommerce.",
            "Los resultados de Google Shopping te dicen lo que Google considera consultas comerciales. Busca tu categoría de producto y anota qué términos activan anuncios de Shopping. Estas keywords tienen intención de compra verificada porque los anunciantes están pagando por ese clic.",
            "Las páginas de productos y categorías de competidores son otra fuente rica. No solo mires sus meta títulos. Revisa sus H1, texto de migas de pan, etiquetas de filtros y descripciones de productos. Rastrea el sitemap de tus cinco principales competidores y extrae cada URL de categoría y subcategoría. Las palabras que usan en esas URLs son keywords a las que apuntan.",
            "Los registros de búsqueda de tu sitio merecen atención también. Si tu tienda tiene búsqueda interna, exporta esas consultas. Los clientes te están diciendo literalmente lo que quieren en sus propias palabras. Hemos encontrado tesoros de keywords en datos de búsqueda del sitio que ninguna herramienta externa revelaría."
          ],
          image: { src: "/images/blog/es/keyword-sources-workflow.svg", alt: "Ecommerce keyword research sources workflow from own data through marketplace, competitors, and tool discovery to validation", caption: "Start with your own data, expand through competitors, then fill gaps with tools" },
          callout: { title: "Quick Wins First", text: "One client found 127 keywords they ranked on page two for. By optimizing existing pages, they moved 43 of them to page one within two months -- no new content needed." },
        },
        {
          heading: "Mapeando keywords a tu embudo y tipos de página",
          body: [
            "Cada keyword pertenece a un tipo de página específico en tu tienda. Obtener este mapeo incorrecto lleva a la canibalización, esfuerzo desperdiciado y rankings confusos.",
            "Las páginas de categorías deben apuntar a tus keywords comerciales más amplias. Piensa en 'women's running shoes' o 'organic dog food'. Estas páginas tienen la mayor link equity interna, la selección de productos más amplia debajo de ellas y la mejor oportunidad de posicionarse para términos principales competitivos. Normalmente asignamos 1-2 keywords principales y 4-6 keywords secundarias por página de categoría.",
            "Las páginas de subcategoría y filtro manejan la capa intermedia. Keywords como 'women's trail running shoes' o 'grain-free organic dog food' coinciden con la intención de navegación más específica. No toda combinación de filtros merece una página dedicada, pero las que tienen volumen de búsqueda absolutamente sí.",
            "Las páginas de productos apuntan a las keywords más específicas. Nombres de productos, números de modelo, términos a nivel de SKU, combinaciones de color y talla. 'Brooks Ghost 15 women's black size 8' es una keyword de página de producto. No intentes posicionar una página de producto para 'running shoes'. No funcionará.",
            "Las páginas de blog y guías manejan la intención informativa. 'How to choose running shoes for flat feet' pertenece a una guía, no a una página de producto. Pero asegúrate de que esas guías enlacen a las páginas de productos y categorías relevantes. Así es como el contenido informativo alimenta tu embudo de ventas. Para un manual completo sobre producir contenido que impulse tráfico orgánico y ventas, consulta nuestra guía de [estrategia de contenido SEO para ecommerce](/blog/ecommerce-seo-content).",
            "Construimos mapas de keywords en hojas de cálculo con columnas para la keyword, volumen mensual, tipo de intención, URL de la página objetivo, designación primaria o secundaria y posición de ranking actual. Para una tienda de tamaño medio, este mapa normalmente tiene 500-2.000 filas. Se convierte en el plano para cada decisión de optimización on-page y contenido."
          ],
          image: { src: "/images/blog/es/keyword-page-mapping.svg", alt: "Keyword to page type mapping showing category, subcategory, product, and blog page assignments", caption: "Each keyword type maps to a specific page type on your store" },
        },
        {
          heading: "Las keywords long-tail son tu ventaja competitiva",
          body: [
            "Los términos principales como 'running shoes' están dominados por Nike, Amazon y Zappos. No vas a superarlos en posicionamiento. Y honestamente, no necesitas hacerlo.",
            "Las keywords long-tail, consultas de cuatro o más palabras, representan aproximadamente el 70% de todas las búsquedas. Convierten a una tasa de 2-5 veces la de los términos principales. Y son dramáticamente más fáciles de posicionar.",
            "Aquí hay un ejemplo real de un cliente que vende equipamiento de cocina especializado. La keyword 'knife set' tiene 40.000 búsquedas mensuales y una puntuación de dificultad de keyword de 78. Nunca se posicionarían para ella. Pero 'Japanese Damascus steel chef knife set' tiene 1.200 búsquedas mensuales con una dificultad de 22. Se posicionaron en la primera página en tres meses y esa sola keyword ahora genera aproximadamente 9.000 euros al mes en ingresos.",
            "La estrategia long-tail para ecommerce funciona porque las páginas de productos naturalmente apuntan a términos específicos. Si vendes un set de cuchillos de chef de acero Damasco japonés, tu página de producto ya tiene esas palabras. El trabajo de optimización consiste en asegurarse de que los elementos on-page, el title tag, H1, URL, alts de imágenes y primer párrafo, estén alineados alrededor de esa frase específica.",
            "Generamos listas de keywords long-tail tomando términos principales y añadiendo modificadores. Modificadores de material (cuero, acero inoxidable, bambú). Modificadores de caso de uso (para camping, para apartamentos pequeños, para principiantes). Modificadores de marca. Modificadores de talla. Modificadores de color. Modificadores de precio (menos de 50 euros, premium, económico). Modificadores de características (impermeable, inalámbrico, recargable). Cada modificador crea una nueva keyword con menor competencia y mayor intención."
          ],
          callout: { title: "Long-Tail ROI", text: "Long-tail keywords (4+ words) make up 70% of all searches and convert at 2-5x the rate of head terms. One client's single long-tail keyword drives 9,000 euros per month from just 1,200 monthly searches." },
        },
        {
          heading: "Encontrando y explotando brechas de keywords de competidores",
          body: [
            "El análisis de brechas de keywords te muestra para qué se posicionan tus competidores y tú no. Esta es una de las actividades de mayor ROI en SEO para ecommerce porque revela oportunidades probadas. Si un competidor se posiciona para una keyword y vende productos similares, esa keyword también funcionará para ti.",
            "En Ahrefs, la herramienta Content Gap compara hasta diez dominios. Introducimos el dominio de nuestro cliente y sus cuatro principales competidores, luego filtramos por keywords donde al menos dos competidores se posicionan en el top 20 pero nuestro cliente no se posiciona en absoluto. Esto produce consistentemente cientos de keywords accionables.",
            "El trimestre pasado, ejecutamos este análisis para una tienda de decoración del hogar. El análisis de brechas reveló 312 keywords para las que se posicionaban sus competidores. De esas, 89 podían capturarse optimizando páginas de categorías existentes, 47 necesitaban nuevas páginas de subcategorías, y 176 eran términos informacionales adecuados para contenido de blog. Priorizamos las 89 optimizaciones de páginas de categorías y vimos un aumento del 28% en ingresos orgánicos en cuatro meses.",
            "Presta atención a keywords donde múltiples competidores se posicionan pero ninguno de ellos se posiciona particularmente bien (posiciones 5-20). Estas son keywords donde los resultados de búsqueda no están dominados por un jugador dominante. A menudo puedes entrar e incluso reclamar la primera posición con buena optimización on-page y algunos enlaces de calidad.",
            "También busca competidores que se posicionan con páginas débiles. Si un competidor está en la posición 7 para 'sustainable yoga mats' con una página de categoría escasa que no tiene contenido único, una descripción de 200 palabras y pobre enlazado interno, puedes construir una página mucho mejor y superarlos."
          ],
          image: { src: "/images/blog/es/keyword-gap-analysis.svg", alt: "Competitor keyword gap analysis workflow from input through filtering, categorizing, and executing", caption: "A structured keyword gap analysis consistently uncovers hundreds of actionable opportunities" },
        },
        {
          heading: "Segmentación de keywords para páginas de categoría bien hecha",
          body: [
            "Las p\u00c3\u00a1ginas de categor\u00c3\u00adas son los caballos de batalla del SEO para ecommerce. Pueden posicionarse para docenas o incluso cientos de keywords cuando se optimizan correctamente. Pero la mayor\u00c3\u00ada de las tiendas las tratan como simples p\u00c3\u00a1ginas de listado de productos sin contenido \u00c3\u00banico. Eso es una oportunidad p\u00e9rdida.",
            "Cada página de categoría necesita una keyword principal incorporada en la URL, title tag, H1 y meta description. Pero la página también debe apuntar a un clúster de keywords relacionadas a través del contenido on-page. Escribimos 300-500 palabras de texto descriptivo de categoría que incluye naturalmente keywords secundarias. Este texto va encima o debajo de la cuadrícula de productos, dependiendo de la plantilla.",
            "Los parámetros de filtro crean oportunidades para segmentación de keywords adicional. Si tu página de categoría para 'vestidos de mujer' tiene filtros por ocasión (casual, cóctel, formal), largo (mini, midi, maxi) y tela (algodón, seda, lino), cada combinación significativa puede convertirse en una página indexable apuntando a un clúster de keywords específico. 'Vestido midi de seda para fiesta de cóctel' se convierte en contenido posicionable.",
            "Pero ten cuidado. No toda combinación de filtros tiene demanda de búsqueda, y crear demasiadas páginas de filtros escasas perjudicará tu presupuesto de rastreo. Validamos cada combinación de filtros contra datos de volumen de búsqueda antes de decidir hacerla indexable. En la práctica, aproximadamente el 15-25% de las combinaciones de filtros justifican su propia página.",
            "El enlazado interno entre páginas de categorías importa para la autoridad de keywords. Tu categoría principal de 'zapatos de mujer' debe enlazar a todas las subcategorías. Cada subcategoría debe enlazar de vuelta al padre y lateralmente a subcategorías relacionadas. Esto crea una red de enlaces internos relevante para keywords que señala relaciones temáticas a los motores de búsqueda. Para una guía completa sobre la optimización de estas páginas una vez que tus keywords están mapeadas, lee nuestro artículo sobre [SEO de páginas de categoría para ecommerce](/blog/ecommerce-category-page-seo)."
          ],
        },
        {
          heading: "Herramientas y métodos que realmente usamos",
          body: [
            "Hemos probado docenas de herramientas de investigación de keywords a lo largo de los años. Aquí está lo que realmente se gana su lugar en nuestro flujo de trabajo.",
            "Ahrefs es nuestra herramienta principal para el descubrimiento de keywords, análisis de competidores y seguimiento. Su Keywords Explorer proporciona datos de volumen precisos para la mayoría de los mercados, y la función de análisis de SERP nos permite evaluar la dificultad de posicionamiento mirando las páginas reales que se posicionan, no solo un número de dificultad. Usamos Ahrefs diariamente.",
            "Google Search Console es irreemplazable para encontrar para qué ya te posicionas. El informe de Rendimiento filtrado por páginas y consultas te muestra exactamente qué keywords traen tráfico a qué páginas. Exportamos estos datos mensualmente y los comparamos con nuestro mapa de keywords para detectar nuevas oportunidades y posiciones en declive.",
            "Google Keyword Planner aún tiene valor para validar la intención comercial. Si una keyword tiene pujas de CPC altas, los anunciantes creen que convierte. Usamos Keyword Planner como fuente de datos secundaria para cruzar estimaciones de volumen de Ahrefs.",
            "Screaming Frog no es una herramienta de keywords, pero la usamos durante el mapeo de keywords. Rastrear un sitio y exportar todos los title tags, H1s y URLs nos permite ver rápidamente qué keywords apunta actualmente una tienda y dónde están las brechas.",
            "Para la investigación de keywords de Amazon específicamente, usamos las herramientas gratuitas de Helium 10. Los datos de volumen de búsqueda son específicos de Amazon, pero las ideas de keywords se transfieren bien a Google porque los mismos compradores usan ambas plataformas.",
            "El método importa más que las herramientas. Empieza con tus propios datos (Search Console, registros de búsqueda del sitio). Luego expande con análisis de competidores. Luego llena las brechas con descubrimiento impulsado por herramientas. Valida todo contra la intención y el volumen de búsqueda. Mapea todo a páginas. Este orden evita que persigas métricas de vanidad en lugar de keywords que generan ingresos. Nuestra [herramienta de coincidencia de intención](/tools/intent-matching-tool) ayuda a clasificar keywords por intención de comprador automáticamente. Si quieres ayuda práctica para encontrar los términos correctos, explora nuestro servicio de [investigación profesional de keywords](/keyword-research)."
          ],
          image: { src: "/images/blog/es/keyword-tool-stack.svg", alt: "Ecommerce keyword research tool stack showing primary and secondary tools with recommended method order", caption: "The method matters more than the tools -- follow this order to avoid chasing vanity metrics" },
        },
        {
          heading: "Construyendo tu estrategia de keywords a largo plazo",
          body: [
            "La investigación de keywords no es un proyecto de una sola vez. El comportamiento de búsqueda cambia. Se lanzan nuevos productos. Los competidores cambian sus estrategias. Revisamos los mapas de keywords trimestralmente para la mayoría de los clientes y mensualmente para categorías de movimiento rápido como moda y electrónica.",
            "Haz seguimiento de los rankings de keywords por página, no solo por keyword. Si tu página de categoría 'zapatillas de running para mujer' empieza a posicionarse para 50 keywords en lugar de 30, eso es una señal de que tus mejoras de contenido y enlazado interno están funcionando. Si cae de 50 a 35, algo ha cambiado y necesitas investigar.",
            "Los lanzamientos de nuevos productos siempre deben empezar con investigaci\u00c3\u00b3n de keywords antes de que la p\u00c3\u00a1gina del producto se publique. Hemos visto tiendas lanzar productos con t\u00c3\u00adtulos de p\u00c3\u00a1gina gen\u00c3\u00a9ricos como 'New Arrival - Blue Widget' cuando la demanda de b\u00c3\u00basqueda real es para 'rechargeable blue widget with USB-C'. Esas son ventas p\u00e9rdidas desde el primer d\u00c3\u00ada.",
            "La planificación de keywords estacionales a menudo se pasa por alto. 'Winter boots' empieza a subir en volumen de búsqueda alrededor de agosto, alcanza su pico en noviembre y cae en febrero. Si esperas hasta octubre para optimizar tu página de categoría de botas de invierno, ya has perdido a los compradores tempranos que convierten a las tasas más altas. Planificamos campañas de keywords estacionales al menos tres meses antes de la curva de búsqueda.",
            "Las tiendas que ganan en SEO para ecommerce son las que tratan la investigación de keywords como una disciplina continua, no como una casilla a marcar durante el lanzamiento de un sitio. Cada nueva página, cada actualización de producto, cada pieza de contenido debe conectarse con tu estrategia de keywords. Así es como la búsqueda orgánica se convierte en un canal de ingresos fiable y escalable. Para construir una estrategia de SEO completa impulsada por keywords, consulta nuestra guía de [estrategia de SEO para ecommerce](/blog/ecommerce-seo-strategy)."
          ],
        }
      ],
    },
    it: {
      title: "Keyword SEO per ecommerce: ricerca per la crescita",
      description:
        "Scopri come la ricerca di keyword per ecommerce differisce dal SEO standard. Trova keyword con intento d'acquisto, mappale sul tuo funnel e costruisci una strategia di fatturato.",
      sections: [
        {
          heading: "La ricerca di keyword per ecommerce è un gioco diverso",
          body: [
            "La maggior parte delle guide sulla ricerca di keyword è scritta per blog e siti di contenuti. Ti dicono di trovare query informative ad alto volume, scrivere articoli attorno a esse e costruire autorità tematica nel tempo. Funziona per gli editori. Non funziona allo stesso modo per i negozi online.",
            "La ricerca di keyword per ecommerce ha un obiettivo diverso. Non stai solo cercando di attirare lettori. Stai cercando di attirare acquirenti. Ciò significa che le keyword che targettizzi devono corrispondere all'intento di acquisto, mappare le pagine prodotto e categoria reali e tenere conto del modo in cui le persone cercano quando sono pronte a spendere.",
            "Abbiamo gestito strategie di keyword per negozi che vanno da 200 SKU a oltre 50.000. La differenza tra un negozio che ottiene traffico ma nessuna vendita e uno che converte al 3-4% di solito si riduce al targeting delle keyword. Non il volume dei contenuti. Non i backlink. Le keyword stesse.",
            "Questa guida copre come approcciamo la ricerca di keyword per ecommerce, dalla comprensione dell'intento dell'acquirente alla costruzione di una mappa completa di keyword che collega ogni pagina del tuo negozio ai giusti termini di ricerca.",
          ],
        },
        {
          heading: "Capire l'intento dell'acquirente cambia tutto",
          body: [
            "L'intento di ricerca è il fattore singolo più importante nella selezione delle keyword per ecommerce. Una keyword come 'running shoes' ottiene oltre 200.000 ricerche mensili, ma l'intento dietro è disperso. Alcune persone vogliono recensioni. Alcune vogliono navigare. Alcune vogliono comprare. Alcune stanno scrivendo una ricerca scolastica.",
            "Confrontala con 'Brooks Ghost 15 men's size 11'. Il volume è minuscolo, forse 500 ricerche al mese. Ma quasi ogni persona che digita quella frase ha una carta di credito in mano. Sa esattamente cosa vuole.",
            "Raggruppiamo le keyword ecommerce in quattro categorie di intento. Le query informative come 'best material for winter jackets' appartengono ai post del blog o alle guide all'acquisto. Le query navigazionali come 'Nike store near me' sono guidate dal brand. Le query di ricerca commerciale come 'Yeti vs Hydro Flask tumbler' si collocano tra ricerca e acquisto. Le query transazionali come 'buy Yeti Rambler 26oz' sono dove stanno i soldi.",
            "L'errore che la maggior parte dei negozi commette è inseguire keyword informative perché il volume sembra attraente. Un negozio che abbiamo analizzato l'anno scorso aveva 40 post del blog che targetizzavano termini informativi e otteneva 15.000 visite mensili da essi. Il fatturato da quel traffico? Meno di 800 euro al mese. Quando abbiamo spostato il focus su keyword transazionali e di ricerca commerciale sulle loro pagine prodotto e categoria, il fatturato dalla ricerca organica è cresciuto del 340% in sei mesi, con solo un modesto aumento del traffico totale.",
          ],
          image: { src: "/images/blog/it/keyword-intent-funnel.svg", alt: "Ecommerce keyword intent funnel showing informational, navigational, commercial, and transactional layers", caption: "The four intent layers of ecommerce keyword targeting" },
          callout: { title: "Intent Beats Volume", text: "Transactional keywords convert at 3-5x the rate of informational ones. A store shifting focus from informational to commercial and transactional terms saw 340% organic revenue growth in six months." },
        },
        {
          heading: "Dove trovare keyword ecommerce che convertono davvero",
          body: [
            "L'approccio standard di inserire keyword seed in Ahrefs o SEMrush e ordinare per volume non ti porterà dove devi essere. Hai bisogno di fonti che riflettano come i veri acquirenti cercano.",
            "Inizia con i tuoi dati di ricerca. Google Search Console ti mostra esattamente quali query stanno già portando persone al tuo negozio. Filtra per query dove ti posizioni nelle posizioni 4-20 con un tasso di click-through decente. Sono vittorie rapide che aspettano di concretizzarsi. Un cliente ha trovato 127 keyword per cui si posizionava in seconda pagina e, ottimizzando le pagine esistenti, ne ha spostate 43 in prima pagina entro due mesi.",
            "La barra di ricerca di Amazon è oro per le keyword a livello di prodotto. Digita la tua categoria di prodotto e osserva i suggerimenti di autocompletamento. Questi provengono da ricerche effettive orientate all'acquisto. L'algoritmo di Amazon fa emergere termini di acquisto, non informativi. Estraiamo centinaia di idee di keyword da Amazon per ogni progetto ecommerce.",
            "I risultati di Google Shopping ti dicono cosa Google considera query commerciali. Cerca la tua categoria di prodotto e nota quali termini attivano gli annunci Shopping. Queste keyword hanno intento di acquisto verificato perché gli inserzionisti pagano per quel click.",
            "Le pagine prodotto e categoria dei concorrenti sono un'altra fonte ricca. Non guardare solo i loro meta title. Controlla i loro H1, il testo dei breadcrumb, le etichette dei filtri e le descrizioni dei prodotti. Scansiona la sitemap dei tuoi cinque principali concorrenti ed estrai ogni URL di categoria e sottocategoria. Le parole che usano in quegli URL sono keyword che stanno targetizzando.",
            "Anche i log di ricerca del tuo sito meritano attenzione. Se il tuo negozio ha una ricerca interna, esporta quelle query. I clienti ti stanno letteralmente dicendo cosa vogliono con le loro parole. Abbiamo trovato keyword d'oro nei dati di ricerca del sito che nessuno strumento esterno avrebbe fatto emergere.",
          ],
          image: { src: "/images/blog/it/keyword-sources-workflow.svg", alt: "Ecommerce keyword research sources workflow from own data through marketplace, competitors, and tool discovery to validation", caption: "Start with your own data, expand through competitors, then fill gaps with tools" },
          callout: { title: "Quick Wins First", text: "One client found 127 keywords they ranked on page two for. By optimizing existing pages, they moved 43 of them to page one within two months -- no new content needed." },
        },
        {
          heading: "Mappare le keyword sul tuo funnel e tipi di pagina",
          body: [
            "Ogni keyword appartiene a un tipo di pagina specifico nel tuo negozio. Sbagliare questa mappatura porta a cannibalizzazione, sforzo sprecato e classifiche confuse.",
            "Le pagine di categoria dovrebbero targetizzare le tue keyword commerciali più ampie. Pensa a 'women's running shoes' o 'organic dog food'. Queste pagine hanno la maggior parte dell'equity dei link interni, la selezione di prodotti più ampia sotto di esse e le migliori possibilità di posizionarsi per termini head competitivi. Tipicamente assegniamo 1-2 keyword primarie e 4-6 keyword secondarie per pagina di categoria.",
            "Le pagine di sottocategoria e filtro gestiscono il livello intermedio. Keyword come 'women's trail running shoes' o 'grain-free organic dog food' corrispondono all'intento di navigazione più specifico. Non ogni combinazione di filtri merita una pagina dedicata, ma quelle con volume di ricerca assolutamente sì.",
            "Le pagine prodotto targetizzano le keyword più specifiche. Nomi dei prodotti, numeri di modello, termini a livello di SKU, combinazioni di colore e taglia. 'Brooks Ghost 15 women's black size 8' è una keyword per pagina prodotto. Non cercare di posizionare una pagina prodotto per 'running shoes'. Non funzionerà.",
            "Le pagine del blog e le guide gestiscono l'intento informativo. 'How to choose running shoes for flat feet' appartiene a una guida, non a una pagina prodotto. Ma assicurati che quelle guide linkino alle pagine prodotto e categoria pertinenti. È così che il contenuto informativo alimenta il tuo funnel di vendita. Per un playbook completo sulla produzione di contenuti che generano traffico organico e vendite, vedi la nostra guida alla [strategia di contenuti SEO ecommerce](/blog/ecommerce-seo-content).",
            "Costruiamo mappe di keyword in fogli di calcolo con colonne per la keyword, volume mensile, tipo di intento, URL della pagina target, designazione primaria o secondaria e posizione di ranking attuale. Per un negozio di medie dimensioni, questa mappa ha di solito 500-2.000 righe. Diventa il progetto per ogni ottimizzazione on-page e decisione sui contenuti.",
          ],
          image: { src: "/images/blog/it/keyword-page-mapping.svg", alt: "Keyword to page type mapping showing category, subcategory, product, and blog page assignments", caption: "Each keyword type maps to a specific page type on your store" },
        },
        {
          heading: "Le keyword long-tail sono il tuo vantaggio competitivo",
          body: [
            "I termini head come 'running shoes' sono dominati da Nike, Amazon e Zappos. Non li supererai. E onestamente, non hai bisogno di farlo.",
            "Le keyword long-tail, query di quattro o più parole, rappresentano circa il 70% di tutte le ricerche. Convertono a un tasso da 2 a 5 volte superiore rispetto ai termini head. E sono drasticamente più facili da posizionare.",
            "Ecco un esempio reale di un cliente che vende attrezzature da cucina specializzate. La keyword 'knife set' ha 40.000 ricerche mensili e un punteggio di difficoltà di 78. Non si sarebbero mai posizionati per essa. Ma 'Japanese Damascus steel chef knife set' ha 1.200 ricerche mensili con una difficoltà di 22. Si sono posizionati in prima pagina entro tre mesi e quella singola keyword ora genera circa 9.000 euro al mese di fatturato.",
            "La strategia long-tail per l'ecommerce funziona perché le pagine prodotto targetizzano naturalmente termini specifici. Se vendi un set di coltelli da chef in acciaio Damascus giapponese, la tua pagina prodotto ha già quelle parole. Il lavoro di ottimizzazione consiste nell'assicurarsi che gli elementi on-page — il title tag, H1, URL, alt delle immagini e primo paragrafo — siano allineati attorno a quella frase specifica.",
            "Generiamo liste di keyword long-tail prendendo termini head e aggiungendo modificatori. Modificatori di materiale (pelle, acciaio inox, bambù). Modificatori di caso d'uso (per campeggio, per piccoli appartamenti, per principianti). Modificatori di brand. Modificatori di taglia. Modificatori di colore. Modificatori di prezzo (sotto 50 euro, premium, economico). Modificatori di caratteristica (impermeabile, wireless, ricaricabile). Ogni modificatore crea una nuova keyword con minore competizione e maggiore intento.",
          ],
          callout: { title: "Long-Tail ROI", text: "Long-tail keywords (4+ words) make up 70% of all searches and convert at 2-5x the rate of head terms. One client's single long-tail keyword drives 9,000 euros per month from just 1,200 monthly searches." },
        },
        {
          heading: "Trovare e sfruttare i gap di keyword dei concorrenti",
          body: [
            "L'analisi dei gap di keyword ti mostra per cosa si posizionano i tuoi concorrenti e tu no. Questa è una delle attività con il ROI più alto nel SEO per ecommerce perché rivela opportunità comprovate. Se un concorrente si posiziona per una keyword e vende prodotti simili, quella keyword funzionerà anche per te.",
            "In Ahrefs, lo strumento Content Gap confronta fino a dieci domini. Inseriamo il dominio del nostro cliente e i loro quattro principali concorrenti, poi filtriamo per keyword dove almeno due concorrenti si posizionano nella top 20 ma il nostro cliente non si posiziona affatto. Questo produce costantemente centinaia di keyword azionabili.",
            "Lo scorso trimestre, abbiamo eseguito questa analisi per un negozio di arredamento per la casa. L'analisi dei gap ha rivelato 312 keyword per cui si posizionavano i loro concorrenti. Di queste, 89 potevano essere catturate ottimizzando le pagine di categoria esistenti, 47 necessitavano di nuove pagine di sottocategoria e 176 erano termini informativi adatti al contenuto del blog. Abbiamo dato priorità alle 89 ottimizzazioni delle pagine di categoria e abbiamo visto un aumento del 28% del fatturato organico entro quattro mesi.",
            "Presta attenzione alle keyword dove più concorrenti si posizionano ma nessuno si posiziona particolarmente bene (posizioni 5-20). Queste sono keyword dove i risultati di ricerca non sono bloccati da un player dominante. Spesso puoi entrare e persino reclamare la prima posizione con una buona ottimizzazione on-page e qualche link di qualità.",
            "Cerca anche concorrenti che si posizionano con pagine deboli. Se un concorrente si posiziona alla posizione 7 per 'sustainable yoga mats' con una pagina di categoria sottile che non ha contenuto unico, una descrizione di 200 parole e scarso linking interno, puoi costruire una pagina molto migliore e superarlo.",
          ],
          image: { src: "/images/blog/it/keyword-gap-analysis.svg", alt: "Competitor keyword gap analysis workflow from input through filtering, categorizing, and executing", caption: "A structured keyword gap analysis consistently uncovers hundreds of actionable opportunities" },
        },
        {
          heading: "Targeting delle keyword per le pagine di categoria fatto bene",
          body: [
            "Le pagine di categoria sono i cavalli da tiro del SEO ecommerce. Possono posizionarsi per decine o addirittura centinaia di keyword quando ottimizzate correttamente. Ma la maggior parte dei negozi le tratta come semplici pagine di elenco prodotti senza contenuto unico. Questa è un'opportunità persa.",
            "Ogni pagina di categoria ha bisogno di una keyword primaria incorporata nell'URL, title tag, H1 e meta description. Ma la pagina dovrebbe anche targetizzare un cluster di keyword correlate attraverso il contenuto on-page. Scriviamo 300-500 parole di testo descrittivo della categoria che include naturalmente keyword secondarie. Questo testo va sopra o sotto la griglia dei prodotti, a seconda del template.",
            "I parametri di filtro creano opportunità per targeting di keyword aggiuntive. Se la tua pagina di categoria per 'women's dresses' ha filtri per occasione (casual, cocktail, formale), lunghezza (mini, midi, maxi) e tessuto (cotone, seta, lino), ogni combinazione significativa può diventare una pagina indicizzabile che targetizza un cluster di keyword specifico. 'Silk midi dress for cocktail party' diventa contenuto posizionabile.",
            "Ma fai attenzione. Non ogni combinazione di filtri ha domanda di ricerca, e creare troppe pagine di filtro sottili danneggerà il tuo crawl budget. Validiamo ogni combinazione di filtri rispetto ai dati di volume di ricerca prima di decidere di renderla indicizzabile. In pratica, circa il 15-25% delle combinazioni di filtri merita la propria pagina.",
            "Il linking interno tra le pagine di categoria conta per l'autorità delle keyword. La tua pagina principale 'women's shoes' dovrebbe linkare a tutte le sottocategorie. Ogni sottocategoria dovrebbe linkare indietro alla pagina genitore e lateralmente alle sottocategorie correlate. Questo crea una rete di link interni rilevanti per le keyword che segnala le relazioni tematiche ai motori di ricerca. Per una guida completa all'ottimizzazione di queste pagine una volta mappate le keyword, leggi il nostro articolo sul [SEO delle pagine di categoria ecommerce](/blog/ecommerce-category-page-seo).",
          ],
        },
        {
          heading: "Strumenti e metodi che usiamo davvero",
          body: [
            "Abbiamo provato decine di strumenti di ricerca keyword negli anni. Ecco cosa guadagna effettivamente il suo posto nel nostro workflow.",
            "Ahrefs è il nostro strumento principale per la scoperta di keyword, l'analisi dei concorrenti e il tracking. Il suo Keywords Explorer fornisce dati di volume accurati per la maggior parte dei mercati, e la funzione di analisi SERP ci permette di valutare la difficoltà di posizionamento guardando le pagine reali che si posizionano, non solo un numero di difficoltà. Usiamo Ahrefs quotidianamente.",
            "Google Search Console è insostituibile per trovare per cosa ti posizioni già. Il rapporto sulle Prestazioni filtrato per pagine e query ti mostra esattamente quali keyword portano traffico a quali pagine. Esportiamo questi dati mensilmente e li confrontiamo con la nostra mappa di keyword per individuare nuove opportunità e posizioni in calo.",
            "Google Keyword Planner ha ancora valore per validare l'intento commerciale. Se una keyword ha offerte CPC alte, gli inserzionisti credono che converta. Usiamo Keyword Planner come fonte di dati secondaria per verificare le stime di volume di Ahrefs.",
            "Screaming Frog non è uno strumento per keyword, ma lo usiamo durante la mappatura delle keyword. Scansionare un sito ed esportare tutti i title tag, H1 e URL ci permette di vedere rapidamente quali keyword un negozio targetizza attualmente e dove sono i gap.",
            "Per la ricerca di keyword di Amazon specificamente, usiamo gli strumenti gratuiti di Helium 10. I dati di volume di ricerca sono specifici di Amazon, ma le idee di keyword si trasferiscono bene a Google perché gli stessi acquirenti usano entrambe le piattaforme.",
            "Il metodo conta più degli strumenti. Inizia con i tuoi dati (Search Console, log di ricerca del sito). Poi espandi con l'analisi dei concorrenti. Poi riempi i gap con la scoperta guidata dagli strumenti. Valida tutto rispetto all'intento e al volume di ricerca. Mappa tutto sulle pagine. Questo ordine ti impedisce di inseguire metriche di vanità invece di keyword che generano fatturato. Il nostro [strumento di abbinamento dell'intento](/tools/intent-matching-tool) aiuta a classificare le keyword per intento dell'acquirente automaticamente. Se vuoi aiuto pratico per trovare i termini giusti, esplora il nostro servizio di [ricerca keyword professionale](/keyword-research).",
          ],
          image: { src: "/images/blog/it/keyword-tool-stack.svg", alt: "Ecommerce keyword research tool stack showing primary and secondary tools with recommended method order", caption: "The method matters more than the tools -- follow this order to avoid chasing vanity metrics" },
        },
        {
          heading: "Costruire la tua strategia di keyword a lungo termine",
          body: [
            "La ricerca di keyword non è un progetto una tantum. Il comportamento di ricerca cambia. Vengono lanciati nuovi prodotti. I concorrenti cambiano le loro strategie. Rivisitiamo le mappe di keyword trimestralmente per la maggior parte dei clienti e mensilmente per categorie a rapido movimento come moda ed elettronica.",
            "Traccia le classifiche delle keyword per pagina, non solo per keyword. Se la tua pagina di categoria 'women's running shoes' inizia a posizionarsi per 50 keyword invece di 30, è un segno che i tuoi miglioramenti di contenuto e linking interno stanno funzionando. Se scende da 50 a 35, qualcosa è cambiato e devi indagare.",
            "I lanci di nuovi prodotti dovrebbero sempre iniziare con la ricerca di keyword prima che la pagina del prodotto vada online. Abbiamo visto negozi lanciare prodotti con titoli di pagina generici come 'New Arrival - Blue Widget' quando la domanda di ricerca reale è per 'rechargeable blue widget with USB-C'. Quelle sono vendite perse dal primo giorno.",
            "La pianificazione delle keyword stagionali viene spesso trascurata. 'Winter boots' inizia a salire nel volume di ricerca intorno ad agosto, raggiunge il picco a novembre e cala a febbraio. Se aspetti fino a ottobre per ottimizzare la tua pagina di categoria delle scarpe invernali, hai già perso gli acquirenti precoci che convertono ai tassi più alti. Pianifichiamo campagne di keyword stagionali almeno tre mesi prima della curva di ricerca.",
            "I negozi che vincono nel SEO per ecommerce sono quelli che trattano la ricerca di keyword come una disciplina continua, non come una casella da spuntare durante il lancio di un sito. Ogni nuova pagina, ogni aggiornamento di prodotto, ogni contenuto dovrebbe ricollegarsi alla tua strategia di keyword. È così che la ricerca organica diventa un canale di fatturato affidabile e scalabile. Per costruire una strategia SEO completa guidata dalle keyword, vedi la nostra guida alla [strategia SEO per ecommerce](/blog/ecommerce-seo-strategy).",
          ],
        },
      ],
    },
    nl: {
      title: "Ecommerce SEO-zoekwoorden: onderzoek voor groei",
      description:
        "Leer hoe zoekwoordonderzoek voor ecommerce verschilt van standaard SEO. Vind zoekwoorden met koopintentie, map ze op je funnel en bouw een omzetstrategie.",
      sections: [
        {
          heading: "Zoekwoordonderzoek voor ecommerce is een ander spel",
          body: [
            "De meeste gidsen over zoekwoordonderzoek zijn geschreven voor blogs en contentsites. Ze vertellen je om zoekwoorden met hoog volume te vinden, artikelen eromheen te schrijven en in de loop van de tijd topicale autoriteit op te bouwen. Dat werkt voor uitgevers. Het werkt niet op dezelfde manier voor webwinkels.",
            "Zoekwoordonderzoek voor ecommerce heeft een ander doel. Je probeert niet alleen lezers aan te trekken. Je probeert kopers aan te trekken. Dat betekent dat de zoekwoorden die je target moeten overeenkomen met koopintentie, moeten mappen op daadwerkelijke product- en categoriepagina's, en rekening moeten houden met hoe mensen zoeken wanneer ze klaar zijn om geld uit te geven.",
            "We hebben zoekwoordstrategieën uitgevoerd voor winkels variërend van 200 SKU's tot meer dan 50.000. Het verschil tussen een winkel die verkeer krijgt maar geen verkopen en een die converteert op 3-4% komt meestal neer op zoekwoordtargeting. Niet contentvolume. Niet backlinks. De zoekwoorden zelf.",
            "Deze gids behandelt hoe we ecommerce zoekwoordonderzoek benaderen, van het begrijpen van koopintentie tot het bouwen van een volledige zoekwoordkaart die elke pagina in je winkel verbindt met de juiste zoektermen.",
          ],
        },
        {
          heading: "Koopintentie begrijpen verandert alles",
          body: [
            "Zoekintentie is de belangrijkste factor bij het selecteren van ecommerce zoekwoorden. Een zoekwoord als 'running shoes' krijgt meer dan 200.000 maandelijkse zoekopdrachten, maar de intentie erachter is verspreid. Sommige mensen willen reviews. Sommigen willen browsen. Sommigen willen kopen. Sommigen schrijven een schoolopdracht.",
            "Vergelijk dat met 'Brooks Ghost 15 men's size 11'. Het volume is klein, misschien 500 zoekopdrachten per maand. Maar bijna iedereen die die zin typt heeft een creditcard in de hand. Ze weten precies wat ze willen.",
            "We groeperen ecommerce zoekwoorden in vier intentiecategorieën. Informatieve query's zoals 'best material for winter jackets' horen op blogposts of koopgidsen. Navigatiequery's zoals 'Nike store near me' zijn merkgedreven. Commercieel onderzoeksquery's zoals 'Yeti vs Hydro Flask tumbler' zitten tussen onderzoek en aankoop. Transactionele query's zoals 'buy Yeti Rambler 26oz' zijn waar het geld zit.",
            "De fout die de meeste winkels maken is het najagen van informatieve zoekwoorden omdat het volume aantrekkelijk lijkt. Een winkel die we vorig jaar hebben geauditeerd had 40 blogposts gericht op informatieve termen en kreeg 15.000 maandelijkse bezoeken daarvan. Omzet van dat verkeer? Minder dan 800 euro per maand. Toen we de focus verschoven naar transactionele en commercieel onderzoekszoekwoorden op hun product- en categoriepagina's, groeide de omzet uit organisch zoeken met 340% in zes maanden, met slechts een bescheiden toename in totaal verkeer.",
          ],
          image: { src: "/images/blog/nl/keyword-intent-funnel.svg", alt: "Ecommerce keyword intent funnel showing informational, navigational, commercial, and transactional layers", caption: "The four intent layers of ecommerce keyword targeting" },
          callout: { title: "Intent Beats Volume", text: "Transactional keywords convert at 3-5x the rate of informational ones. A store shifting focus from informational to commercial and transactional terms saw 340% organic revenue growth in six months." },
        },
        {
          heading: "Waar je ecommerce zoekwoorden vindt die daadwerkelijk converteren",
          body: [
            "De standaardaanpak van seed-zoekwoorden in Ahrefs of SEMrush invoeren en sorteren op volume zal je niet brengen waar je moet zijn. Je hebt bronnen nodig die weerspiegelen hoe echte shoppers zoeken.",
            "Begin met je eigen zoekgegevens. Google Search Console laat je precies zien welke query's al mensen naar je winkel brengen. Filter op query's waar je op posities 4-20 staat met een fatsoenlijke click-through rate. Dit zijn snelle overwinningen die op je wachten. Een klant vond 127 zoekwoorden waarvoor ze op pagina twee stonden, en door bestaande pagina's te optimaliseren, verplaatsten ze er 43 naar pagina één binnen twee maanden.",
            "Amazon's zoekbalk is goud waard voor zoekwoorden op productniveau. Typ je productcategorie in en bekijk de autocomplete-suggesties. Deze komen van daadwerkelijke koopgerichte zoekopdrachten. Amazon's algoritme brengt kooptermen naar boven, geen informatieve. We halen honderden zoekwoordideeën uit Amazon voor elk ecommerceproject.",
            "Google Shopping-resultaten vertellen je wat Google als commerciële query's beschouwt. Zoek op je productcategorie en noteer welke termen Shopping-advertenties triggeren. Deze zoekwoorden hebben geverifieerde koopintentie omdat adverteerders betalen voor die klik.",
            "Product- en categoriepagina's van concurrenten zijn een andere rijke bron. Kijk niet alleen naar hun metatitels. Bekijk hun H1's, breadcrumbtekst, filterlabels en productbeschrijvingen. Scrap de sitemap van je top vijf concurrenten en extraheer elke categorie- en subcategorie-URL. De woorden die ze in die URL's gebruiken zijn zoekwoorden die ze targeten.",
            "Je site-zoeklogs verdienen ook aandacht. Als je winkel een interne zoekmachine heeft, exporteer die query's. Klanten vertellen je letterlijk wat ze willen in hun eigen woorden. We hebben zoekwoordgoud gevonden in site-zoekdata die geen externe tool naar boven zou brengen.",
          ],
          image: { src: "/images/blog/nl/keyword-sources-workflow.svg", alt: "Ecommerce keyword research sources workflow from own data through marketplace, competitors, and tool discovery to validation", caption: "Start with your own data, expand through competitors, then fill gaps with tools" },
          callout: { title: "Quick Wins First", text: "One client found 127 keywords they ranked on page two for. By optimizing existing pages, they moved 43 of them to page one within two months -- no new content needed." },
        },
        {
          heading: "Zoekwoorden mappen op je funnel en paginatypes",
          body: [
            "Elk zoekwoord hoort bij een specifiek paginatype in je winkel. Deze mapping verkeerd doen leidt tot kannibalisatie, verspilde moeite en verwarde rankings.",
            "Categoriepagina's moeten je breedste commerciële zoekwoorden targeten. Denk aan 'women's running shoes' of 'organic dog food'. Deze pagina's hebben de meeste interne link-equity, de breedste productselectie eronder en de beste kans om te ranken voor competitieve head terms. We wijzen doorgaans 1-2 primaire zoekwoorden en 4-6 secundaire zoekwoorden toe per categoriepagina.",
            "Subcategorie- en filterpagina's behandelen de middelste laag. Zoekwoorden zoals 'women's trail running shoes' of 'grain-free organic dog food' komen overeen met de meer specifieke browse-intentie. Niet elke filtercombinatie verdient een eigen pagina, maar degene met zoekvolume absoluut wel.",
            "Productpagina's targeten de meest specifieke zoekwoorden. Productnamen, modelnummers, SKU-niveau termen, kleur- en maatcombinaties. 'Brooks Ghost 15 women's black size 8' is een zoekwoord voor een productpagina. Probeer niet een productpagina te laten ranken voor 'running shoes'. Dat gaat niet werken.",
            "Blog- en gidspagina's behandelen informatieve intentie. 'How to choose running shoes for flat feet' hoort op een gids, niet op een productpagina. Maar zorg ervoor dat die gidsen linken naar de relevante product- en categoriepagina's. Zo voedt informatieve content je verkoopfunnel. Voor een compleet draaiboek over het produceren van content die organisch verkeer en verkopen stimuleert, zie onze gids over [ecommerce SEO-contentstrategie](/blog/ecommerce-seo-content).",
            "We bouwen zoekwoordkaarten in spreadsheets met kolommen voor het zoekwoord, maandelijks volume, intentietype, target-pagina URL, primaire of secundaire aanduiding en huidige rankingpositie. Voor een middelgrote winkel heeft deze kaart meestal 500-2.000 rijen. Het wordt de blauwdruk voor elke on-page optimalisatie en contentbeslissing.",
          ],
          image: { src: "/images/blog/nl/keyword-page-mapping.svg", alt: "Keyword to page type mapping showing category, subcategory, product, and blog page assignments", caption: "Each keyword type maps to a specific page type on your store" },
        },
        {
          heading: "Long-tail zoekwoorden zijn je concurrentievoordeel",
          body: [
            "Head terms zoals 'running shoes' worden gedomineerd door Nike, Amazon en Zappos. Je gaat ze niet overtreffen. En eerlijk gezegd hoef je dat ook niet.",
            "Long-tail zoekwoorden, query's van vier of meer woorden, maken ongeveer 70% van alle zoekopdrachten uit. Ze converteren 2-5x zo goed als head terms. En ze zijn dramatisch makkelijker om voor te ranken.",
            "Hier is een echt voorbeeld van een klant die gespecialiseerde keukenapparatuur verkoopt. Het zoekwoord 'knife set' heeft 40.000 maandelijkse zoekopdrachten en een keyword difficulty score van 78. Ze zouden er nooit voor ranken. Maar 'Japanese Damascus steel chef knife set' heeft 1.200 maandelijkse zoekopdrachten met een difficulty van 22. Ze stonden binnen drie maanden op pagina één en dat ene zoekwoord levert nu ongeveer 9.000 euro per maand aan omzet op.",
            "De long-tail strategie voor ecommerce werkt omdat productpagina's van nature specifieke termen targeten. Als je een Japanse Damascus stalen chef-messenset verkoopt, heeft je productpagina die woorden al. Het optimalisatiewerk gaat over het zorgen dat de on-page elementen — de title tag, H1, URL, image alts en eerste alinea — zijn afgestemd op die specifieke zin.",
            "We genereren long-tail zoekwoordlijsten door head terms te nemen en modificatoren toe te voegen. Materiaalmodificatoren (leer, roestvrij staal, bamboe). Gebruiksmodificatoren (voor kamperen, voor kleine appartementen, voor beginners). Merkmodificatoren. Maatmodificatoren. Kleurmodificatoren. Prijsmodificatoren (onder 50 euro, premium, budget). Functiemodificatoren (waterproof, draadloos, oplaadbaar). Elke modificator creëert een nieuw zoekwoord met lagere concurrentie en hogere intentie.",
          ],
          callout: { title: "Long-Tail ROI", text: "Long-tail keywords (4+ words) make up 70% of all searches and convert at 2-5x the rate of head terms. One client's single long-tail keyword drives 9,000 euros per month from just 1,200 monthly searches." },
        },
        {
          heading: "Zoekwoordgaps van concurrenten vinden en benutten",
          body: [
            "Zoekwoordgap-analyse laat je zien waarvoor je concurrenten ranken en jij niet. Dit is een van de activiteiten met het hoogste ROI in ecommerce SEO omdat het bewezen kansen onthult. Als een concurrent rankt voor een zoekwoord en vergelijkbare producten verkoopt, zal dat zoekwoord ook voor jou werken.",
            "In Ahrefs vergelijkt de Content Gap-tool tot tien domeinen. We voeren het domein van onze klant en hun top vier concurrenten in, en filteren vervolgens op zoekwoorden waar minstens twee concurrenten in de top 20 staan maar onze klant helemaal niet rankt. Dit levert consequent honderden bruikbare zoekwoorden op.",
            "Vorig kwartaal hebben we deze analyse uitgevoerd voor een woondecoratie-winkel. De gap-analyse onthulde 312 zoekwoorden waarvoor hun concurrenten rankten. Van die 312 konden 89 worden veroverd door bestaande categoriepagina's te optimaliseren, 47 hadden nieuwe subcategoriepagina's nodig, en 176 waren informatieve termen geschikt voor blogcontent. We gaven prioriteit aan de 89 categoriepagina-optimalisaties en zagen een stijging van 28% in organische omzet binnen vier maanden.",
            "Let op zoekwoorden waar meerdere concurrenten ranken maar geen van hen bijzonder goed (posities 5-20). Dit zijn zoekwoorden waar de zoekresultaten niet worden gedomineerd door een dominante speler. Je kunt er vaak inbreken en zelfs de toppositie claimen met goede on-page optimalisatie en een paar kwaliteitslinks.",
            "Kijk ook naar concurrenten die ranken met zwakke pagina's. Als een concurrent op positie 7 staat voor 'sustainable yoga mats' met een dunne categoriepagina zonder unieke content, een beschrijving van 200 woorden en slechte interne linking, kun je een veel betere pagina bouwen en ze inhalen.",
          ],
          image: { src: "/images/blog/nl/keyword-gap-analysis.svg", alt: "Competitor keyword gap analysis workflow from input through filtering, categorizing, and executing", caption: "A structured keyword gap analysis consistently uncovers hundreds of actionable opportunities" },
        },
        {
          heading: "Zoekwoordtargeting voor categoriepagina's goed gedaan",
          body: [
            "Categoriepagina's zijn de werkpaarden van ecommerce SEO. Ze kunnen ranken voor tientallen of zelfs honderden zoekwoorden wanneer ze goed zijn geoptimaliseerd. Maar de meeste winkels behandelen ze als simpele productlijstpagina's zonder unieke content. Dat is een gemiste kans.",
            "Elke categoriepagina heeft een primair zoekwoord nodig dat verwerkt is in de URL, title tag, H1 en meta description. Maar de pagina moet ook een cluster van gerelateerde zoekwoorden targeten via on-page content. We schrijven 300-500 woorden categoriebeschrijvingstekst die op natuurlijke wijze secundaire zoekwoorden bevat. Deze tekst gaat boven of onder het productraster, afhankelijk van het template.",
            "Filterparameters creëren mogelijkheden voor aanvullende zoekwoordtargeting. Als je categoriepagina voor 'women's dresses' filters heeft voor gelegenheid (casual, cocktail, formeel), lengte (mini, midi, maxi) en stof (katoen, zijde, linnen), kan elke zinvolle combinatie een indexeerbare pagina worden die een specifiek zoekwoordcluster target. 'Silk midi dress for cocktail party' wordt rankbare content.",
            "Maar wees voorzichtig. Niet elke filtercombinatie heeft zoekvraag, en te veel dunne filterpagina's aanmaken schaadt je crawlbudget. We valideren elke filtercombinatie tegen zoekvolume-data voordat we besluiten het indexeerbaar te maken. In de praktijk rechtvaardigt ongeveer 15-25% van de filtercombinaties een eigen pagina.",
            "Interne linking tussen categoriepagina's is belangrijk voor zoekwoordautoriteit. Je hoofd 'women's shoes' categorie moet linken naar alle subcategorieën. Elke subcategorie moet terug linken naar de bovenliggende pagina en zijwaarts naar gerelateerde subcategorieën. Dit creëert een zoekwoord-relevant intern linknetwerk dat topicale relaties signaleert aan zoekmachines. Voor een complete gids over het optimaliseren van deze pagina's zodra je zoekwoorden zijn gemapt, lees ons artikel over [ecommerce categoriepagina SEO](/blog/ecommerce-category-page-seo).",
          ],
        },
        {
          heading: "Tools en methoden die we daadwerkelijk gebruiken",
          body: [
            "We hebben tientallen zoekwoordonderzoekstools geprobeerd door de jaren heen. Dit is wat daadwerkelijk zijn plek in onze workflow verdient.",
            "Ahrefs is onze primaire tool voor zoekwoordontdekking, concurrentenanalyse en tracking. De Keywords Explorer geeft nauwkeurige volumedata voor de meeste markten, en de SERP-analysefunctie laat ons rankingmoeilijkheid beoordelen door naar de daadwerkelijke pagina's te kijken die ranken, niet alleen een moeilijkheidscijfer. We gebruiken Ahrefs dagelijks.",
            "Google Search Console is onvervangbaar om te vinden waarvoor je al rankt. Het Prestatiesrapport gefilterd op pagina's en query's laat je precies zien welke zoekwoorden verkeer naar welke pagina's brengen. We exporteren deze data maandelijks en vergelijken het met onze zoekwoordkaart om nieuwe kansen en dalende posities te spotten.",
            "Google Keyword Planner heeft nog steeds waarde voor het valideren van commerciële intentie. Als een zoekwoord hoge CPC-biedingen heeft, geloven adverteerders dat het converteert. We gebruiken Keyword Planner als secundaire databron om volumeschattingen van Ahrefs te kruisvalideren.",
            "Screaming Frog is geen zoekwoordtool, maar we gebruiken het tijdens het mappen van zoekwoorden. Een site crawlen en alle title tags, H1's en URL's exporteren laat ons snel zien welke zoekwoorden een winkel momenteel target en waar de gaps zitten.",
            "Voor Amazon zoekwoordonderzoek specifiek gebruiken we de gratis tools van Helium 10. De zoekvolume-data zijn specifiek voor Amazon, maar de zoekwoordideeën zijn goed overdraagbaar naar Google omdat dezelfde shoppers beide platformen gebruiken.",
            "De methode is belangrijker dan de tools. Begin met je eigen data (Search Console, site-zoeklogs). Breid dan uit met concurrentenanalyse. Vul dan gaps aan met tool-gedreven ontdekking. Valideer alles tegen intentie en zoekvolume. Map alles op pagina's. Deze volgorde voorkomt dat je vanity metrics najaagt in plaats van omzet-genererende zoekwoorden. Onze [intentie-matching tool](/tools/intent-matching-tool) helpt zoekwoorden automatisch te classificeren op koopintentie. Als je praktische hulp wilt bij het vinden van de juiste termen, bekijk onze [professionele zoekwoordonderzoek](/keyword-research) service.",
          ],
          image: { src: "/images/blog/nl/keyword-tool-stack.svg", alt: "Ecommerce keyword research tool stack showing primary and secondary tools with recommended method order", caption: "The method matters more than the tools -- follow this order to avoid chasing vanity metrics" },
        },
        {
          heading: "Je zoekwoordstrategie bouwen voor de lange termijn",
          body: [
            "Zoekwoordonderzoek is geen eenmalig project. Zoekgedrag verandert. Nieuwe producten worden gelanceerd. Concurrenten veranderen hun strategieën. We herzien zoekwoordkaarten driemaandelijks voor de meeste klanten en maandelijks voor snelbewegende categorieën zoals mode en elektronica.",
            "Track zoekwoordrankings per pagina, niet alleen per zoekwoord. Als je categoriepagina 'women's running shoes' begint te ranken voor 50 zoekwoorden in plaats van 30, is dat een teken dat je content- en interne linkingverbeteringen werken. Als het daalt van 50 naar 35, is er iets veranderd en moet je onderzoeken.",
            "Nieuwe productlanceringen moeten altijd beginnen met zoekwoordonderzoek voordat de productpagina live gaat. We hebben winkels producten zien lanceren met generieke paginatitels zoals 'New Arrival - Blue Widget' terwijl de werkelijke zoekvraag is voor 'rechargeable blue widget with USB-C'. Dat zijn verloren verkopen vanaf dag één.",
            "Seizoensgebonden zoekwoordplanning wordt vaak over het hoofd gezien. 'Winter boots' begint in zoekvolume te stijgen rond augustus, piekt in november en daalt in februari. Als je wacht tot oktober om je winterlaarzen-categoriepagina te optimaliseren, heb je de vroege shoppers al gemist die converteren tegen de hoogste percentages. We plannen seizoensgebonden zoekwoordcampagnes minstens drie maanden voor de zoekcurve.",
            "De winkels die winnen in ecommerce SEO zijn degene die zoekwoordonderzoek behandelen als een doorlopende discipline, niet als een vakje om af te vinken bij een sitelaunch. Elke nieuwe pagina, elke productupdate, elk contentstuk moet terug te koppelen zijn aan je zoekwoordstrategie. Zo wordt organisch zoeken een betrouwbaar, schaalbaar omzetkanaal. Om een complete zoekwoord-gedreven SEO-strategie te bouwen, zie onze gids over [ecommerce SEO-strategie](/blog/ecommerce-seo-strategy).",
          ],
        },
      ],
    },
  },
};