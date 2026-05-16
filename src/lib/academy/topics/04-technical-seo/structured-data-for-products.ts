import type { AcademyTopic } from "../../types";

export const structuredDataForProducts: AcademyTopic = {
  slug: "structured-data-for-products",
  cluster: 4,
  resources: [{"label":"Google Product Structured Data","url":"https://developers.google.com/search/docs/appearance/structured-data/product","type":"docs"},{"label":"Rich Results Test","url":"https://search.google.com/test/rich-results","type":"tool"},{"label":"Schema Markup Validator","url":"https://validator.schema.org/","type":"tool"},{"label":"Schema.org Reference","url":"https://schema.org/","type":"docs"},{"label":"Google Merchant Center","url":"https://merchants.google.com/","type":"tool"}],
  content: {
    en: {
      badge: "Technical SEO",
      heading: "Structured Data for Product Pages",
      intro:
        "Structured data tells search engines exactly what your products are, what they cost, and whether they are in stock. Properly implemented Product schema can earn your listings rich results with star ratings, price ranges, and availability badges directly in Google search results, increasing click-through rates by 20% to 35%. Use our [schema generator](/tools/schema-generator) to create valid Product markup quickly.",
      readTime: "11 min read",
      sections: [
        {
          title: "Product Schema Markup Essentials",
          content:
            "Google supports the Product structured data type for ecommerce pages, and it expects specific properties to trigger rich results. At minimum, you need the product name, image, and at least one offer with price, currency, and availability. Missing any of these prevents rich results from appearing.\n\nUse JSON-LD format for all structured data. Google explicitly recommends JSON-LD over Microdata or RDFa because it separates the markup from the visual HTML, making it easier to maintain and less prone to breaking when templates change. Place the JSON-LD script in the head or body of your [product pages](/academy/product-page-seo).\n\nEach product page should contain exactly one Product entity. Do not mark up multiple products on a single product page. If your page displays product variants (sizes, colors), the primary product should be the main entity with each variant represented through individual Offer objects within the offers array.\n\nInclude the brand, SKU or GTIN (barcode), and description properties even though they are not strictly required. Google uses these to match your product data with Google Merchant Center feeds, and products with complete schema markup receive preferential treatment in shopping-related search results.",
          items: [
            "Required: name, image, offers (with price, priceCurrency, availability)",
            "Recommended: brand, sku, gtin, description, review, aggregateRating",
            "Use JSON-LD format, placed in the page head or body",
            "One Product entity per product page, variants as separate Offer objects",
            "Validate with Google's Rich Results Test before deploying",
          ],
          image: {
            src: "/images/academy/product-schema-anatomy.svg",
            alt: "Annotated diagram showing required and recommended Product schema properties alongside a preview of the resulting Google rich result with stars, price, and availability",
            caption: "Required properties trigger rich results. Recommended properties like brand, SKU, and aggregateRating earn enhanced listings with star ratings and pricing.",
          },
          callout: {
            title: "Rich Results Boost",
            text: "Product pages with complete schema markup (name, price, availability, ratings) see 20-35% higher click-through rates from search results compared to plain listings without rich snippets.",
          },
        },
        {
          title: "AggregateRating and Review Markup",
          content:
            "Star ratings in search results are among the most powerful click-through rate boosters available to ecommerce sites. To display them, you need either AggregateRating (summary of all reviews) or individual Review markup on your product pages. Both require actual reviews from real customers; Google prohibits self-authored or fabricated review markup.\n\nAggregateRating requires a ratingValue (the average score), reviewCount or ratingCount, and bestRating/worstRating if you use a scale other than 1 to 5. The data must match what is visible on the page. If your page shows 4.3 stars from 128 reviews, the structured data must reflect those exact numbers.\n\nFor individual Review markup, include the author name, datePublished, reviewRating, and reviewBody. Google may display a featured review snippet alongside your product listing if individual reviews are marked up. This additional information in search results helps differentiate your listing from competitors.\n\nA critical mistake many stores make is marking up review data on pages that display no visible reviews. Google calls this a structured data policy violation, and it can result in a manual action that strips rich results from your entire site. Only add review schema to pages where reviews are actually displayed to users.",
          tip: "Sync your structured data with your review platform's API. If you use Yotpo, Judge.me, or Trustpilot, configure the integration to automatically update the AggregateRating values whenever new reviews are submitted. Stale rating data that does not match visible reviews triggers Google warnings.",
        },
        {
          title: "Offer Schema: Price and Availability",
          content:
            "The Offer portion of your Product schema communicates pricing and stock status to Google. Getting this right enables price display in search results and powers Google Shopping's free listings. Getting it wrong means your products show without pricing, which dramatically reduces click-through rates.\n\nFor products with a single price, use a straightforward Offer with price and priceCurrency. For products with variant-based pricing (different prices for different sizes), use an AggregateOffer with lowPrice and highPrice to show a price range, or list individual Offer objects for each variant with its specific price.\n\nAvailability values must use Schema.org's predefined set: InStock, OutOfStock, PreOrder, BackOrder, or Discontinued. Google cross-references this with your product feed and actual page content. If your structured data says InStock but the page shows \"Sold Out,\" you will receive a mismatch warning in Search Console.\n\nUpdate your availability markup dynamically. A product that goes out of stock at 2 PM should not still show InStock in its structured data at 3 PM. For platforms like Shopify, this is handled automatically if you use the default product schema. For custom implementations, connect availability to your inventory management system.",
          items: [
            "Single price: use Offer with price and priceCurrency",
            "Price range: use AggregateOffer with lowPrice and highPrice",
            "Availability must match page content exactly (InStock, OutOfStock, etc.)",
            "Update structured data dynamically when stock status changes",
            "Include priceValidUntil for sale prices to indicate when the price expires",
          ],
        },
        {
          title: "Breadcrumb and FAQ Schema for Ecommerce",
          content:
            "Beyond Product schema, two additional structured data types significantly benefit ecommerce stores: BreadcrumbList and FAQPage. Both contribute to stronger [on-page SEO](/blog/on-page-seo-for-ecommerce) across your catalog. Both earn visual enhancements in search results and help Google understand your site structure.\n\nBreadcrumbList schema mirrors your navigational breadcrumbs and displays category paths in search results instead of raw URLs. A search result showing \"Home > Women's Shoes > Running Shoes\" provides more context than \"example.com/products/nike-air-zoom\" and earns higher click-through rates. Implement BreadcrumbList on every product and category page.\n\nFAQPage schema on product pages can display expandable question-and-answer pairs directly in search results, taking up more real estate on the results page. Use it for genuine product FAQs like \"What materials is this made from?\" or \"Does this product come with a warranty?\" Do not use FAQPage for generic customer service questions that belong on a help page.\n\nGoogle tightened FAQPage rich results eligibility in 2023. They now appear primarily for well-known, authoritative sites. For smaller stores, FAQPage schema still helps Google understand your content, even if it does not trigger visual rich results. The structured data itself provides value through better content comprehension.\n\nDo not stack excessive schema types on a single page. Product pages should have Product, BreadcrumbList, and optionally FAQPage schema. Adding Organization, WebSite, LocalBusiness, and other types to every page adds bloat without proportional benefit.",
        },
        {
          title: "Testing and Monitoring Structured Data",
          content:
            "Deploying structured data without validation is a common source of errors that silently prevent rich results. Google provides two tools for testing: the Rich Results Test (for checking if a URL qualifies for rich results) and the Schema Markup Validator (for checking general schema syntax). Use both.\n\nThe Rich Results Test shows exactly which rich result types your page is eligible for and flags any errors or warnings. Run every product page template through this tool before launching. A single missing required property (like priceCurrency) across thousands of product pages means zero rich results for your entire catalog.\n\nAfter deployment, monitor structured data health in Google Search Console under the Enhancements section. Search Console groups issues by type and shows how many pages each error affects. Common ecommerce issues include missing availability values on out-of-stock products, price mismatches between structured data and page content, and missing images.\n\nSet up alerts for structured data errors. When your platform updates its theme or a developer modifies a product template, structured data can break silently. Weekly checks of the Enhancements report in Search Console catch these issues before they affect your search presence for an extended period.\n\nFor stores with large catalogs, automate structured data testing. Tools like Screaming Frog can extract and validate JSON-LD from every page during a crawl, flagging pages where required properties are missing or values have become stale. Schedule monthly automated checks to catch issues at scale.",
          tip: "Create a structured data monitoring checklist: validate with Rich Results Test after any template change, check Search Console Enhancements weekly, and run a full-site crawl with JSON-LD extraction monthly. Structured data issues that go unnoticed for weeks can cost thousands of lost clicks.",
          image: {
            src: "/images/academy/schema-testing-workflow.svg",
            alt: "Four-step workflow diagram showing generate, validate, deploy, and monitor stages for structured data with a feedback loop for error fixing",
            caption: "Follow a continuous workflow: generate JSON-LD, validate with Google tools, deploy to production, and monitor weekly via Search Console Enhancements.",
          },
          callout: {
            title: "Silent Breakage",
            text: "A single missing priceCurrency property across thousands of product pages means zero rich results for your entire catalog. Always validate templates before launch and monitor GSC Enhancements weekly.",
          },
        },
        {
          title: "Entity Signals: How Structured Data Feeds Google's Internal Knowledge Graph",
          content:
            "The leak confirmed that structured data feeds into Google's entity understanding well beyond rich-result eligibility. Attributes around entity confidence and topical association rely on consistent, machine-readable signals across the page (Product schema, Brand schema, Organization schema) and across the site (sameAs links, NAP consistency, author markup).\n\nFor ecommerce, the practical move is treating structured data as the data layer Google uses to understand what your store is, not as a rich-snippet trick. Brand schema on every page with consistent legalName, sameAs links to verified social profiles, and Organization schema on the homepage with foundingDate, address, and contactPoint \u2014 these don't typically produce visible SERP changes on day one, but they raise the entity-confidence signals that influence siteAuthority over time.\n\nGetting Product schema right is table stakes. Beyond that, sameAs is the cheapest authority signal you can ship \u2014 link your Brand entity to every verified social profile, Wikipedia page if applicable, and Google Business profile. The leak suggests these cross-references materially influence how Google models your brand entity.",
          items: [
            "Structured data feeds entity understanding, not just rich results \u2014 schema is a data layer for Google",
            "Consistent Brand and Organization schema sitewide raises entity-confidence signals over time",
            "sameAs links to verified social profiles, Wikipedia, and Google Business are cheap authority signals",
            "Product schema correctness is table stakes; entity-level schema is the multiplier",
          ],
        },
      ],
      navLabels: {
        previous: "Mobile-First for Ecommerce",
        next: "Canonical Tags for Ecommerce",
      },
    },
    de: {
      badge: "Technisches SEO",
      heading: "Strukturierte Daten für Produktseiten",
      intro:
        "Strukturierte Daten teilen Suchmaschinen genau mit, was Ihre Produkte sind, was sie kosten und ob sie auf Lager sind. Korrekt implementiertes Product-Schema kann Ihren Listings Rich Results mit Sternebewertungen, Preisspannen und Verfügbarkeitsbadges direkt in den Google-Suchergebnissen einbringen und die Klickrate um 20 % bis 35 % steigern. Verwenden Sie unseren [Schema-Generator](/tools/schema-generator), um schnell valides Markup zu erstellen.",
      readTime: "11 Min. Lesezeit",
      sections: [
        {
          title: "Product-Schema-Markup: Die Grundlagen",
          content:
            "Google unterstützt den strukturierten Datentyp Product für Ecommerce-Seiten und erwartet bestimmte Eigenschaften, um Rich Results auszulösen. Mindestens benötigen Sie den Produktnamen, ein Bild und mindestens ein Angebot mit Preis, Währung und Verfügbarkeit. Das Fehlen einer dieser Angaben verhindert das Erscheinen von Rich Results.\n\nVerwenden Sie das JSON-LD-Format für alle strukturierten Daten. Google empfiehlt ausdrücklich JSON-LD gegenüber Microdata oder RDFa, da es das Markup vom visuellen HTML trennt und somit einfacher zu pflegen und weniger anfällig für Fehler bei Template-Änderungen ist. Platzieren Sie das JSON-LD-Script im Head oder Body Ihrer [Produktseiten](/academy/product-page-seo).\n\nJede Produktseite sollte genau eine Product-Entität enthalten. Markieren Sie nicht mehrere Produkte auf einer einzelnen Produktseite. Wenn Ihre Seite Produktvarianten (Größen, Farben) anzeigt, sollte das Hauptprodukt die Hauptentität sein, wobei jede Variante durch einzelne Offer-Objekte im Offers-Array dargestellt wird.\n\nFügen Sie die Eigenschaften brand, SKU oder GTIN (Barcode) und description ein, auch wenn sie nicht strikt erforderlich sind. Google verwendet diese, um Ihre Produktdaten mit Google Merchant Center-Feeds abzugleichen, und Produkte mit vollständigem Schema-Markup erhalten eine bevorzugte Behandlung in einkaufsbezogenen Suchergebnissen.",
          items: [
            "Erforderlich: name, image, offers (mit price, priceCurrency, availability)",
            "Empfohlen: brand, sku, gtin, description, review, aggregateRating",
            "Verwenden Sie das JSON-LD-Format, platziert im Seiten-Head oder Body",
            "Eine Product-Entität pro Produktseite, Varianten als separate Offer-Objekte",
            "Validieren Sie mit Googles Rich Results Test vor dem Deployment",
          ],
          image: {
            src: "/images/academy/de/product-schema-anatomy.svg",
            alt: "Annotiertes Diagramm das erforderliche und empfohlene Product-Schema-Eigenschaften neben einer Vorschau des resultierenden Google Rich Results mit Sternen, Preis und Verfuegbarkeit zeigt",
            caption: "Erforderliche Eigenschaften loesen Rich Results aus. Empfohlene Eigenschaften wie Marke, SKU und aggregateRating verdienen erweiterte Eintraege mit Sternbewertungen und Preisangaben.",
          },
          callout: {
            title: "Rich-Results-Boost",
            text: "Produktseiten mit vollstaendigem Schema-Markup (Name, Preis, Verfuegbarkeit, Bewertungen) sehen 20-35% hoehere Klickraten aus Suchergebnissen im Vergleich zu einfachen Eintraegen ohne Rich Snippets.",
          },
        },
        {
          title: "AggregateRating- und Review-Markup",
          content:
            "Sternebewertungen in Suchergebnissen gehören zu den wirkungsvollsten Klickraten-Boostern für Ecommerce-Seiten. Um sie anzuzeigen, benötigen Sie entweder AggregateRating (Zusammenfassung aller Bewertungen) oder einzelne Review-Markups auf Ihren Produktseiten. Beide erfordern echte Bewertungen von echten Kunden; Google verbietet selbst verfasstes oder fabriciertes Review-Markup.\n\nAggregateRating erfordert einen ratingValue (die Durchschnittsbewertung), reviewCount oder ratingCount und bestRating/worstRating, falls Sie eine andere Skala als 1 bis 5 verwenden. Die Daten müssen mit dem übereinstimmen, was auf der Seite sichtbar ist. Wenn Ihre Seite 4,3 Sterne aus 128 Bewertungen zeigt, müssen die strukturierten Daten genau diese Zahlen widerspiegeln.\n\nFür einzelne Review-Markups fügen Sie den Autornamen, das Veröffentlichungsdatum, die Bewertung und den Bewertungstext ein. Google kann ein hervorgehobenes Bewertungs-Snippet neben Ihrem Produktlisting anzeigen, wenn einzelne Reviews markiert sind. Diese zusätzlichen Informationen in den Suchergebnissen helfen, Ihr Listing von Wettbewerbern zu unterscheiden.\n\nEin kritischer Fehler, den viele Shops machen, ist das Markieren von Bewertungsdaten auf Seiten, die keine sichtbaren Bewertungen anzeigen. Google nennt dies eine Verletzung der Richtlinien für strukturierte Daten, und es kann zu einer manuellen Maßnahme führen, die Rich Results für Ihre gesamte Website entfernt. Fügen Sie Review-Schema nur auf Seiten hinzu, auf denen Bewertungen tatsächlich für Nutzer angezeigt werden.",
          tip: "Synchronisieren Sie Ihre strukturierten Daten mit der API Ihrer Bewertungsplattform. Wenn Sie Yotpo, Judge.me oder Trustpilot verwenden, konfigurieren Sie die Integration so, dass die AggregateRating-Werte automatisch aktualisiert werden, wenn neue Bewertungen eingereicht werden. Veraltete Bewertungsdaten, die nicht mit sichtbaren Bewertungen übereinstimmen, lösen Google-Warnungen aus.",
        },
        {
          title: "Offer-Schema: Preis und Verfügbarkeit",
          content:
            "Der Offer-Teil Ihres Product-Schemas kommuniziert Preise und Lagerstatus an Google. Richtig umgesetzt ermöglicht dies die Preisanzeige in Suchergebnissen und speist die kostenlosen Listings von Google Shopping. Falsch umgesetzt bedeutet, dass Ihre Produkte ohne Preisangabe angezeigt werden, was die Klickrate drastisch reduziert.\n\nFür Produkte mit einem einzelnen Preis verwenden Sie ein einfaches Offer mit price und priceCurrency. Für Produkte mit variantenbasierter Preisgestaltung (unterschiedliche Preise für verschiedene Größen) verwenden Sie ein AggregateOffer mit lowPrice und highPrice, um eine Preisspanne anzuzeigen, oder listen Sie einzelne Offer-Objekte für jede Variante mit ihrem spezifischen Preis auf.\n\nVerfügbarkeitswerte müssen aus dem vordefinierten Set von Schema.org stammen: InStock, OutOfStock, PreOrder, BackOrder oder Discontinued. Google gleicht dies mit Ihrem Produkt-Feed und dem tatsächlichen Seiteninhalt ab. Wenn Ihre strukturierten Daten InStock angeben, aber die Seite \"Ausverkauft\" zeigt, erhalten Sie eine Diskrepanz-Warnung in der Search Console.\n\nAktualisieren Sie Ihr Verfügbarkeits-Markup dynamisch. Ein Produkt, das um 14 Uhr nicht mehr auf Lager ist, sollte um 15 Uhr nicht mehr InStock in seinen strukturierten Daten anzeigen. Bei Plattformen wie Shopify wird dies automatisch gehandhabt, wenn Sie das Standard-Produktschema verwenden. Bei benutzerdefinierten Implementierungen verbinden Sie die Verfügbarkeit mit Ihrem Bestandsmanagement-System.",
          items: [
            "Einzelpreis: Offer mit price und priceCurrency verwenden",
            "Preisspanne: AggregateOffer mit lowPrice und highPrice verwenden",
            "Verfügbarkeit muss exakt mit dem Seiteninhalt übereinstimmen (InStock, OutOfStock usw.)",
            "Strukturierte Daten dynamisch aktualisieren, wenn sich der Lagerstatus ändert",
            "priceValidUntil für Aktionspreise einfügen, um anzuzeigen, wann der Preis ausläuft",
          ],
        },
        {
          title: "Breadcrumb- und FAQ-Schema für Ecommerce",
          content:
            "Über das Product-Schema hinaus profitieren Ecommerce-Shops erheblich von zwei zusätzlichen strukturierten Datentypen: BreadcrumbList und FAQPage. Beide erhalten visuelle Verbesserungen in den Suchergebnissen und helfen Google, Ihre Website-Struktur zu verstehen. Weitere Informationen finden Sie in unserem Leitfaden zu [On-Page-SEO](/blog/on-page-seo-for-ecommerce).\n\nBreadcrumbList-Schema spiegelt Ihre Navigations-Breadcrumbs wider und zeigt Kategoriepfade in Suchergebnissen anstelle von Roh-URLs an. Ein Suchergebnis, das \"Start > Damenschuhe > Laufschuhe\" anzeigt, bietet mehr Kontext als \"example.com/products/nike-air-zoom\" und erzielt höhere Klickraten. Implementieren Sie BreadcrumbList auf jeder Produkt- und Kategorieseite.\n\nFAQPage-Schema auf Produktseiten kann erweiterbare Frage-und-Antwort-Paare direkt in den Suchergebnissen anzeigen und nimmt mehr Platz auf der Ergebnisseite ein. Verwenden Sie es für echte Produkt-FAQs wie \"Aus welchen Materialien ist dies gefertigt?\" oder \"Hat dieses Produkt eine Garantie?\" Verwenden Sie FAQPage nicht für allgemeine Kundenservice-Fragen, die auf eine Hilfeseite gehören.\n\nGoogle hat die Berechtigung für FAQPage-Rich-Results im Jahr 2023 verschärft. Sie erscheinen jetzt hauptsächlich für bekannte, autoritative Websites. Für kleinere Shops hilft FAQPage-Schema Google dennoch, Ihre Inhalte zu verstehen, auch wenn es keine visuellen Rich Results auslöst. Die strukturierten Daten selbst bieten Wert durch besseres Content-Verständnis.\n\nStapeln Sie nicht zu viele Schema-Typen auf einer einzelnen Seite. Produktseiten sollten Product-, BreadcrumbList- und optional FAQPage-Schema haben. Das Hinzufügen von Organization, WebSite, LocalBusiness und anderen Typen zu jeder Seite bringt Overhead ohne proportionalen Nutzen.",
        },
        {
          title: "Testen und Überwachen strukturierter Daten",
          content:
            "Das Deployment strukturierter Daten ohne Validierung ist eine häufige Fehlerquelle, die Rich Results stillschweigend verhindert. Google bietet zwei Tools zum Testen: den Rich Results Test (zur Prüfung, ob eine URL für Rich Results qualifiziert ist) und den Schema Markup Validator (zur Prüfung der allgemeinen Schema-Syntax). Verwenden Sie beide.\n\nDer Rich Results Test zeigt genau, für welche Rich-Result-Typen Ihre Seite berechtigt ist, und markiert alle Fehler oder Warnungen. Lassen Sie jedes Produktseiten-Template vor dem Launch durch dieses Tool laufen. Eine einzelne fehlende erforderliche Eigenschaft (wie priceCurrency) über Tausende von Produktseiten hinweg bedeutet null Rich Results für Ihren gesamten Katalog.\n\nNach dem Deployment überwachen Sie die Gesundheit strukturierter Daten in der Google Search Console im Bereich Verbesserungen. Die Search Console gruppiert Probleme nach Typ und zeigt, wie viele Seiten von jedem Fehler betroffen sind. Häufige Ecommerce-Probleme sind fehlende Verfügbarkeitswerte bei nicht vorrätigen Produkten, Preisdiskrepanzen zwischen strukturierten Daten und Seiteninhalt sowie fehlende Bilder.\n\nRichten Sie Benachrichtigungen für Fehler bei strukturierten Daten ein. Wenn Ihre Plattform ihr Theme aktualisiert oder ein Entwickler ein Produkttemplate ändert, können strukturierte Daten stillschweigend brechen. Wöchentliche Überprüfungen des Verbesserungsberichts in der Search Console fangen diese Probleme auf, bevor sie Ihre Suchpräsenz über einen längeren Zeitraum beeinträchtigen.\n\nFür Shops mit großen Katalogen automatisieren Sie das Testen strukturierter Daten. Tools wie Screaming Frog können JSON-LD von jeder Seite während eines Crawls extrahieren und validieren und Seiten kennzeichnen, auf denen erforderliche Eigenschaften fehlen oder Werte veraltet sind. Planen Sie monatliche automatisierte Checks, um Probleme im großen Maßstab zu erkennen.",
          tip: "Erstellen Sie eine Monitoring-Checkliste für strukturierte Daten: Validieren Sie mit dem Rich Results Test nach jeder Template-Änderung, prüfen Sie die Search Console Verbesserungen wöchentlich und führen Sie monatlich einen Full-Site-Crawl mit JSON-LD-Extraktion durch. Probleme mit strukturierten Daten, die wochenlang unbemerkt bleiben, können Tausende verlorener Klicks kosten.",
          image: {
            src: "/images/academy/de/schema-testing-workflow.svg",
            alt: "Vierstufiges Workflow-Diagramm das Erstellen, Validieren, Bereitstellen und Ueberwachen von strukturierten Daten zeigt mit einer Feedback-Schleife zur Fehlerbehebung",
            caption: "Folgen Sie einem kontinuierlichen Workflow: JSON-LD erstellen, mit Google-Tools validieren, in Produktion bereitstellen und woechentlich via Search Console Verbesserungen ueberwachen.",
          },
          callout: {
            title: "Stiller Bruch",
            text: "Eine einzige fehlende priceCurrency-Eigenschaft auf Tausenden von Produktseiten bedeutet null Rich Results fuer Ihren gesamten Katalog. Validieren Sie immer Vorlagen vor dem Launch und ueberwachen Sie GSC-Verbesserungen woechentlich.",
          },
        },
        {
          title: "Entity-Signale: Wie strukturierte Daten Googles internen Knowledge Graph naehren",
          content:
            "Das Leak bestaetigte, dass strukturierte Daten weit ueber Rich-Result-Eligibility hinaus in Googles Entity-Verstaendnis einfliessen. Attribute rund um Entity-Konfidenz und topische Assoziation verlassen sich auf konsistente, maschinenlesbare Signale ueber die Seite (Product-Schema, Brand-Schema, Organization-Schema) und ueber die Site (sameAs-Links, NAP-Konsistenz, Author-Markup).\n\nFuer E-Commerce ist der praktische Schritt, strukturierte Daten als die Datenschicht zu behandeln, die Google nutzt, um zu verstehen, was Ihr Shop ist - nicht als Rich-Snippet-Trick. Brand-Schema auf jeder Seite mit konsistentem legalName, sameAs-Links zu verifizierten sozialen Profilen und Organization-Schema auf der Homepage mit foundingDate, Adresse und contactPoint - diese produzieren typischerweise keine sichtbaren SERP-Aenderungen am ersten Tag, aber sie heben die Entity-Konfidenz-Signale, die siteAuthority im Laufe der Zeit beeinflussen.\n\nProduct-Schema richtig zu bekommen ist Tischeinsatz. Daruebernachhinaus ist sameAs das billigste Autoritaets-Signal, das Sie shippen koennen - verlinken Sie Ihre Brand-Entity zu jedem verifizierten sozialen Profil, Wikipedia-Seite falls anwendbar und Google Business-Profil. Das Leak deutet an, dass diese Quer-Referenzen Googles Modell Ihrer Brand-Entity materiell beeinflussen.",
          items: [
            "Strukturierte Daten naehren Entity-Verstaendnis, nicht nur Rich-Results - Schema ist eine Datenschicht fuer Google",
            "Konsistentes Brand- und Organization-Schema sitewide hebt Entity-Konfidenz-Signale ueber die Zeit",
            "sameAs-Links zu verifizierten sozialen Profilen, Wikipedia und Google Business sind billige Autoritaets-Signale",
            "Product-Schema-Korrektheit ist Tischeinsatz; Entity-Level-Schema ist der Multiplikator",
          ],
        },
      ],
      navLabels: {
        previous: "Mobile-First für Ecommerce",
        next: "Canonical Tags für Ecommerce",
      },
    },
    fr: {
      badge: "SEO Technique",
      heading: "Données Structurées pour les Pages Produit",
      intro: "Les données structurées indiquent aux moteurs de recherche exactement ce que sont vos produits, leur prix et leur disponibilité. Un balisage Product correctement implémenté peut faire apparaître des résultats enrichis avec des étoiles de notation, des fourchettes de prix et des badges de disponibilité directement dans les résultats Google, augmentant les taux de clics de 20 % à 35 %. Utilisez notre [générateur de schéma](/tools/schema-generator) pour créer rapidement un balisage Product valide.",
      readTime: "11 min de lecture",
      sections: [
        {
          title: "Les essentiels du balisage Product Schema",
          content:
            "Google prend en charge le type de données structurées Product pour les pages e-commerce et attend des propriétés spécifiques pour déclencher les résultats enrichis. Au minimum, vous avez besoin du nom du produit, d'une image et d'au moins une offre avec le prix, la devise et la disponibilité. L'absence de l'un de ces éléments empêche l'affichage des résultats enrichis.\n\nUtilisez le format JSON-LD pour toutes les données structurées. Google recommande explicitement JSON-LD plutôt que Microdata ou RDFa car il sépare le balisage du HTML visuel, ce qui le rend plus facile à maintenir et moins susceptible de casser lors des changements de templates. Placez le script JSON-LD dans le head ou le body de vos pages produit.\n\nChaque page produit doit contenir exactement une entité Product. Ne balisez pas plusieurs produits sur une seule page produit. Si votre page affiche des variantes de produit (tailles, couleurs), le produit principal doit être l'entité principale avec chaque variante représentée par des objets Offer individuels dans le tableau offers.\n\nIncluez les propriétés brand, SKU ou GTIN (code-barres) et description même si elles ne sont pas strictement requises. Google les utilise pour faire correspondre vos données produit avec les flux Google Merchant Center, et les produits avec un balisage schema complet reçoivent un traitement préférentiel dans les résultats de recherche liés au shopping. Placez le script JSON-LD dans le head ou le body de vos [pages produits](/academy/product-page-seo).",
          items: [
            "Requis : name, image, offers (avec price, priceCurrency, availability)",
            "Recommandé : brand, sku, gtin, description, review, aggregateRating",
            "Utilisez le format JSON-LD, placé dans le head ou body de la page",
            "Une entité Product par page produit, les variantes comme objets Offer séparés",
            "Validez avec le test de résultats enrichis de Google avant le déploiement",
          ],
          image: {
            src: "/images/academy/fr/product-schema-anatomy.svg",
            alt: "Diagramme annoté montrant les propriétés du schéma de produit requises et recommandées, ainsi qu'un aperçu du résultat enrichi Google obtenu avec les étoiles, le prix et la disponibilité.",
            caption: "Les propriétés requises déclenchent des résultats riches. Les propriétés recommandées telles que la marque, le SKU et l'agrégation obtiennent des listes améliorées avec des notes et des prix par étoiles.",
          },
          callout: {
            title: "Rich-Results-Boost",
            text: "Les pages de produits avec un balisage de schéma complet (nom, prix, disponibilité, notes) enregistrent des taux de clics 20 à 35 % plus élevés à partir des résultats de recherche par rapport aux listes simples sans extraits enrichis.",
          },
        },
        {
          title: "Balisage AggregateRating et Review",
          content:
            "Les étoiles de notation dans les résultats de recherche comptent parmi les amplificateurs de taux de clics les plus puissants pour les sites e-commerce. Pour les afficher, vous avez besoin soit d'AggregateRating (résumé de tous les avis) soit d'un balisage Review individuel sur vos pages produit. Les deux nécessitent de vrais avis de vrais clients ; Google interdit le balisage d'avis auto-rédigés ou fabriqués.\n\nAggregateRating nécessite un ratingValue (le score moyen), reviewCount ou ratingCount, et bestRating/worstRating si vous utilisez une échelle autre que 1 à 5. Les données doivent correspondre à ce qui est visible sur la page. Si votre page affiche 4,3 étoiles sur 128 avis, les données structurées doivent refléter ces chiffres exacts.\n\nPour le balisage Review individuel, incluez le nom de l'auteur, la datePublished, le reviewRating et le reviewBody. Google peut afficher un extrait d'avis en vedette à côté de votre listing produit si les avis individuels sont balisés. Ces informations supplémentaires dans les résultats de recherche aident à différencier votre listing de la concurrence.\n\nUne erreur critique que font de nombreuses boutiques est de baliser des données d'avis sur des pages qui n'affichent aucun avis visible. Google appelle cela une violation de politique de données structurées, et cela peut entraîner une action manuelle qui supprime les résultats enrichis de l'ensemble de votre site. N'ajoutez le schema review que sur les pages où les avis sont effectivement affichés aux utilisateurs.",
          tip: "Synchronisez vos données structurées avec l'API de votre plateforme d'avis. Si vous utilisez Yotpo, Judge.me ou Trustpilot, configurez l'intégration pour mettre à jour automatiquement les valeurs AggregateRating lorsque de nouveaux avis sont soumis. Des données de notation obsolètes ne correspondant pas aux avis visibles déclenchent des avertissements Google.",
        },
        {
          title: "Schema Offer : prix et disponibilité",
          content:
            "La partie Offer de votre schema Product communique les prix et le statut de stock à Google. Bien fait, cela permet l'affichage des prix dans les résultats de recherche et alimente les listings gratuits de Google Shopping. Mal fait, vos produits s'affichent sans prix, ce qui réduit drastiquement les taux de clics.\n\nPour les produits à prix unique, utilisez un Offer simple avec price et priceCurrency. Pour les produits avec tarification par variante (prix différents selon les tailles), utilisez un AggregateOffer avec lowPrice et highPrice pour afficher une fourchette de prix, ou listez des objets Offer individuels pour chaque variante avec son prix spécifique.\n\nLes valeurs de disponibilité doivent utiliser l'ensemble prédéfini de Schema.org : InStock, OutOfStock, PreOrder, BackOrder ou Discontinued. Google croise ces données avec votre flux produit et le contenu réel de la page. Si vos données structurées indiquent InStock mais que la page affiche \"Épuisé\", vous recevrez un avertissement de non-concordance dans la Search Console.\n\nMettez à jour votre balisage de disponibilité dynamiquement. Un produit en rupture de stock à 14h ne devrait pas encore afficher InStock dans ses données structurées à 15h. Pour les plateformes comme Shopify, cela est géré automatiquement si vous utilisez le schema produit par défaut. Pour les implémentations personnalisées, connectez la disponibilité à votre système de gestion des stocks.",
          items: [
            "Prix unique : utilisez Offer avec price et priceCurrency",
            "Fourchette de prix : utilisez AggregateOffer avec lowPrice et highPrice",
            "La disponibilité doit correspondre exactement au contenu de la page (InStock, OutOfStock, etc.)",
            "Mettez à jour les données structurées dynamiquement quand le statut de stock change",
            "Incluez priceValidUntil pour les prix soldés afin d'indiquer quand le prix expire",
          ],
        },
        {
          title: "Schema Breadcrumb et FAQ pour le e-commerce",
          content:
            "Au-delà du schema Product, deux types de données structurées supplémentaires profitent considérablement aux boutiques e-commerce : BreadcrumbList et FAQPage. Les deux obtiennent des améliorations visuelles dans les résultats de recherche et aident Google à comprendre la structure de votre site.\n\nLe schema BreadcrumbList reflète vos fils d'Ariane de navigation et affiche les chemins de catégorie dans les résultats de recherche au lieu des URLs brutes. Un résultat de recherche affichant \"Accueil > Chaussures Femmes > Chaussures de Course\" fournit plus de contexte que \"example.com/products/nike-air-zoom\" et obtient des taux de clics plus élevés. Implémentez BreadcrumbList sur chaque page produit et catégorie.\n\nLe schema FAQPage sur les pages produit peut afficher des paires question-réponse extensibles directement dans les résultats de recherche, occupant plus d'espace sur la page de résultats. Utilisez-le pour de véritables FAQ produit comme \"De quels matériaux est-ce fait ?\" ou \"Ce produit est-il garanti ?\" N'utilisez pas FAQPage pour des questions génériques de service client qui appartiennent à une page d'aide.\n\nGoogle a restreint l'éligibilité aux résultats enrichis FAQPage en 2023. Ils apparaissent désormais principalement pour les sites bien connus et faisant autorité. Pour les boutiques plus petites, le schema FAQPage aide toujours Google à comprendre votre contenu, même s'il ne déclenche pas de résultats enrichis visuels. Les données structurées elles-mêmes apportent de la valeur par une meilleure compréhension du contenu.\n\nN'empilez pas de types de schema excessifs sur une seule page. Les pages produit devraient avoir les schémas Product, BreadcrumbList et optionnellement FAQPage. Ajouter Organization, WebSite, LocalBusiness et d'autres types à chaque page ajoute du poids sans bénéfice proportionnel. Les deux contribuent à un [SEO on-page](/blog/on-page-seo-for-ecommerce) plus fort dans tout votre catalogue.",
        },
        {
          title: "Tests et suivi des données structurées",
          content:
            "Déployer des données structurées sans validation est une source courante d'erreurs qui empêchent silencieusement les résultats enrichis. Google fournit deux outils de test : le test de résultats enrichis (pour vérifier si une URL est éligible aux résultats enrichis) et le validateur de balisage Schema (pour vérifier la syntaxe générale du schema). Utilisez les deux.\n\nLe test de résultats enrichis montre exactement quels types de résultats enrichis votre page est éligible à obtenir et signale toute erreur ou avertissement. Faites passer chaque template de page produit par cet outil avant le lancement. Une seule propriété requise manquante (comme priceCurrency) sur des milliers de pages produit signifie zéro résultat enrichi pour tout votre catalogue.\n\nAprès le déploiement, surveillez la santé des données structurées dans Google Search Console sous la section Améliorations. La Search Console groupe les problèmes par type et montre combien de pages chaque erreur affecte. Les problèmes e-commerce courants incluent les valeurs de disponibilité manquantes sur les produits en rupture de stock, les décalages de prix entre les données structurées et le contenu de la page, et les images manquantes.\n\nMettez en place des alertes pour les erreurs de données structurées. Quand votre plateforme met à jour son thème ou qu'un développeur modifie un template produit, les données structurées peuvent casser silencieusement. Des vérifications hebdomadaires du rapport Améliorations dans la Search Console détectent ces problèmes avant qu'ils n'affectent votre présence dans les recherches pendant une période prolongée.\n\nPour les boutiques avec de grands catalogues, automatisez les tests de données structurées. Des outils comme Screaming Frog peuvent extraire et valider le JSON-LD de chaque page pendant un crawl, signalant les pages où des propriétés requises manquent ou des valeurs sont devenues obsolètes. Planifiez des vérifications automatisées mensuelles pour détecter les problèmes à grande échelle.",
          tip: "Créez une checklist de surveillance des données structurées : validez avec le test de résultats enrichis après chaque changement de template, vérifiez les Améliorations de la Search Console chaque semaine, et lancez un crawl complet du site avec extraction JSON-LD chaque mois. Les problèmes de données structurées qui passent inaperçus pendant des semaines peuvent coûter des milliers de clics perdus.",
          image: {
            src: "/images/academy/fr/schema-testing-workflow.svg",
            alt: "Diagramme de flux de travail en quatre étapes montrant les étapes de génération, de validation, de déploiement et de surveillance pour les données structurées avec une boucle de rétroaction pour la correction des erreurs",
            caption: "Suivez un flux de travail continu : générez du JSON-LD, validez avec les outils Google, déployez en production et surveillez chaque semaine via les améliorations de la Search Console.",
          },
          callout: {
            title: "Stiller Bruch",
            text: "Une seule propriété priceCurrency manquante sur des milliers de pages de produits signifie aucun résultat riche pour l’ensemble de votre catalogue. Validez toujours les modèles avant le lancement et surveillez les améliorations de GSC chaque semaine.",
          },
        },
        {
          title: "Signaux d'entite : Comment les données structurees alimentent le Knowledge Graph interne de Google",
          content:
            "Le leak a confirme que les donnees structurees alimentent la comprehension d'entite de Google bien au-dela de l'eligibilite aux rich results. Les attributs autour de la confiance d'entite et de l'association thematique reposent sur des signaux coherents et lisibles par machine a travers la page (Product schema, Brand schema, Organization schema) et a travers le site (liens sameAs, coherence NAP, balisage d'auteur).\n\nPour l'ecommerce, le mouvement pratique est de traiter les donnees structurees comme la couche de donnees que Google utilise pour comprendre ce qu'est votre boutique, pas comme une astuce rich-snippet. Brand schema sur chaque page avec legalName coherent, liens sameAs vers des profils sociaux verifies, et Organization schema sur la page d'accueil avec foundingDate, adresse et contactPoint - ceux-ci ne produisent typiquement pas de changements SERP visibles le premier jour, mais ils elevent les signaux de confiance d'entite qui influencent siteAuthority au fil du temps.\n\nObtenir le Product schema correct est table stakes. Au-dela de cela, sameAs est le signal d'autorite le moins cher que vous puissiez livrer - liez votre entite Brand a chaque profil social verifie, page Wikipedia si applicable, et profil Google Business. Le leak suggere que ces references croisees influencent materiellement la facon dont Google modelise votre entite Brand.",
          items: [
            "Les donnees structurees alimentent la comprehension d'entite, pas seulement les rich results - le schema est une couche de donnees pour Google",
            "Brand et Organization schema coherents sitewide elevent les signaux de confiance d'entite au fil du temps",
            "Liens sameAs vers profils sociaux verifies, Wikipedia et Google Business sont des signaux d'autorite bon marche",
            "La correction du Product schema est table stakes ; le schema au niveau entite est le multiplicateur",
          ],
        },
      ],
      navLabels: {
        previous: "Mobile-First pour le E-commerce",
        next: "Balises Canonical pour le E-commerce",
      },
    },
    es: {
      badge: "SEO Técnico",
      heading: "Datos Estructurados para Páginas de Producto",
      intro: "Los datos estructurados indican a los motores de búsqueda exactamente qué son tus productos, cuánto cuestan y si están en stock. Un marcado Product Schema correctamente implementado puede lograr que tus listados obtengan resultados enriquecidos con calificaciones de estrellas, rangos de precio e insignias de disponibilidad directamente en los resultados de Google, aumentando las tasas de clics entre un 20 % y un 35 %. Usa nuestro [generador de schema](/tools/schema-generator) para crear marcado Product valido rápidamente.",
      readTime: "11 min de lectura",
      sections: [
        {
          title: "Fundamentos del marcado Product Schema",
          content:
            "Google soporta el tipo de datos estructurados Product para páginas de ecommerce y espera propiedades específicas para activar resultados enriquecidos. Como mínimo, necesitas el nombre del producto, una imagen y al menos una oferta con precio, moneda y disponibilidad. La ausencia de cualquiera de estos impide que aparezcan resultados enriquecidos.\n\nUsa el formato JSON-LD para todos los datos estructurados. Google recomienda explícitamente JSON-LD sobre Microdata o RDFa porque separa el marcado del HTML visual, haciéndolo más fácil de mantener y menos propenso a romperse cuando cambian las plantillas. Coloca el script JSON-LD en el head o body de tus [páginas de producto](/academy/product-page-seo).\n\nCada página de producto debe contener exactamente una entidad Product. No marques múltiples productos en una sola página de producto. Si tu página muestra variantes de producto (tallas, colores), el producto principal debe ser la entidad principal con cada variante representada por objetos Offer individuales dentro del array offers.\n\nIncluye las propiedades brand, SKU o GTIN (código de barras) y description aunque no sean estrictamente requeridas. Google las usa para hacer coincidir tus datos de producto con los feeds del Google Merchant Center, y los productos con marcado schema completo reciben tratamiento preferencial en los resultados de búsqueda relacionados con compras.",
          items: [
            "Requerido: name, image, offers (con price, priceCurrency, availability)",
            "Recomendado: brand, sku, gtin, description, review, aggregateRating",
            "Usa formato JSON-LD, colocado en el head o body de la página",
            "Una entidad Product por página de producto, variantes como objetos Offer separados",
            "Valida con la Prueba de Resultados Enriquecidos de Google antes de desplegar",
          ],
          image: {
            src: "/images/academy/es/product-schema-anatomy.svg",
            alt: "Diagrama anotado que muestra las propiedades del esquema de producto requeridas y recomendadas junto con una vista previa del resultado enriquecido de Google resultante con estrellas, precio y disponibilidad.",
            caption: "Las propiedades requeridas generan resultados ricos. Las propiedades recomendadas, como marca, SKU y calificación agregada, obtienen listados mejorados con calificaciones de estrellas y precios.",
          },
          callout: {
            title: "Rich-Results-Boost",
            text: "Las páginas de productos con marcado de esquema completo (nombre, precio, disponibilidad, calificaciones) obtienen tasas de clics entre un 20% y un 35% más altas en los resultados de búsqueda en comparación con listados simples sin fragmentos enriquecidos.",
          },
        },
        {
          title: "Marcado AggregateRating y Review",
          content:
            "Las calificaciones de estrellas en los resultados de búsqueda son de los potenciadores de tasa de clics más poderosos disponibles para sitios de ecommerce. Para mostrarlas, necesitas AggregateRating (resumen de todas las reseñas) o marcado Review individual en tus páginas de producto. Ambos requieren reseñas reales de clientes reales; Google prohíbe marcado de reseñas autoescritas o fabricadas.\n\nAggregateRating requiere un ratingValue (la puntuación promedio), reviewCount o ratingCount, y bestRating/worstRating si usas una escala diferente a 1 a 5. Los datos deben coincidir con lo visible en la página. Si tu página muestra 4,3 estrellas de 128 reseñas, los datos estructurados deben reflejar esos números exactos.\n\nPara marcado Review individual, incluye el nombre del autor, datePublished, reviewRating y reviewBody. Google puede mostrar un fragmento de reseña destacado junto a tu listado de producto si las reseñas individuales están marcadas. Esta información adicional en los resultados de búsqueda ayuda a diferenciar tu listado de los competidores.\n\nUn error crítico que cometen muchas tiendas es marcar datos de reseñas en páginas que no muestran reseñas visibles. Google llama a esto una violación de política de datos estructurados, y puede resultar en una acción manual que elimina los resultados enriquecidos de todo tu sitio. Solo añade schema de reseñas a páginas donde las reseñas se muestran realmente a los usuarios.",
          tip: "Sincroniza tus datos estructurados con la API de tu plataforma de reseñas. Si usas Yotpo, Judge.me o Trustpilot, configura la integración para actualizar automáticamente los valores de AggregateRating cuando se envían nuevas reseñas. Datos de calificación obsoletos que no coinciden con las reseñas visibles activan advertencias de Google.",
        },
        {
          title: "Schema Offer: precio y disponibilidad",
          content:
            "La parte Offer de tu schema Product comunica precios y estado de stock a Google. Hacerlo correctamente permite mostrar precios en los resultados de búsqueda y alimenta los listados gratuitos de Google Shopping. Hacerlo mal significa que tus productos se muestran sin precio, lo que reduce drásticamente las tasas de clics.\n\nPara productos con un solo precio, usa un Offer sencillo con price y priceCurrency. Para productos con precios basados en variantes (diferentes precios por diferentes tallas), usa un AggregateOffer con lowPrice y highPrice para mostrar un rango de precios, o lista objetos Offer individuales para cada variante con su precio específico.\n\nLos valores de disponibilidad deben usar el conjunto predefinido de Schema.org: InStock, OutOfStock, PreOrder, BackOrder o Discontinued. Google cruza estos datos con tu feed de productos y el contenido real de la página. Si tus datos estructurados dicen InStock pero la página muestra \"Agotado\", recibirás una advertencia de discrepancia en Search Console.\n\nActualiza tu marcado de disponibilidad dinámicamente. Un producto que se agota a las 14:00 no debería seguir mostrando InStock en sus datos estructurados a las 15:00. Para plataformas como Shopify, esto se maneja automáticamente si usas el schema de producto predeterminado. Para implementaciones personalizadas, conecta la disponibilidad con tu sistema de gestión de inventario.",
          items: [
            "Precio único: usa Offer con price y priceCurrency",
            "Rango de precios: usa AggregateOffer con lowPrice y highPrice",
            "La disponibilidad debe coincidir exactamente con el contenido de la página (InStock, OutOfStock, etc.)",
            "Actualiza datos estructurados dinámicamente cuando el estado de stock cambie",
            "Incluye priceValidUntil para precios de oferta para indicar cuándo expira el precio",
          ],
        },
        {
          title: "Schema Breadcrumb y FAQ para ecommerce",
          content:
            "Más allá del schema Product, dos tipos adicionales de datos estructurados benefician significativamente a las tiendas de ecommerce: BreadcrumbList y FAQPage. Ambos obtienen mejoras visuales en los resultados de búsqueda y ayudan a Google a entender la estructura de tu sitio.\n\nEl schema BreadcrumbList refleja tus migas de pan de navegación y muestra rutas de categoría en los resultados de búsqueda en lugar de URLs sin formato. Un resultado de búsqueda que muestra \"Inicio > Zapatos de Mujer > Zapatillas de Running\" proporciona más contexto que \"example.com/products/nike-air-zoom\" y obtiene tasas de clics más altas. Implementa BreadcrumbList en cada página de producto y categoría.\n\nEl schema FAQPage en páginas de producto puede mostrar pares de pregunta-respuesta expandibles directamente en los resultados de búsqueda, ocupando más espacio en la página de resultados. Úsalo para FAQs genuinas de producto como \"De qué materiales está hecho?\" o \"Este producto tiene garantía?\". No uses FAQPage para preguntas genéricas de atención al cliente que pertenecen a una página de ayuda.\n\nGoogle restringió la elegibilidad para resultados enriquecidos FAQPage en 2023. Ahora aparecen principalmente para sitios conocidos y con autoridad. Para tiendas más pequeñas, el schema FAQPage todavía ayuda a Google a entender tu contenido, incluso si no activa resultados enriquecidos visuales. Los datos estructurados en sí proporcionan valor a través de una mejor comprensión del contenido.\n\nNo apiles tipos de schema excesivos en una sola página. Las páginas de producto deberían tener schema Product, BreadcrumbList y opcionalmente FAQPage. Añadir Organization, WebSite, LocalBusiness y otros tipos a cada página añade peso sin beneficio proporcional. Ambos contribuyen a un [SEO on-page](/blog/on-page-seo-for-ecommerce) mas fuerte en todo tu catalogo.",
        },
        {
          title: "Pruebas y monitoreo de datos estructurados",
          content:
            "Desplegar datos estructurados sin validación es una fuente común de errores que silenciosamente previenen los resultados enriquecidos. Google proporciona dos herramientas de prueba: la Prueba de Resultados Enriquecidos (para verificar si una URL califica para resultados enriquecidos) y el Validador de Marcado Schema (para verificar la sintaxis general del schema). Usa ambas.\n\nLa Prueba de Resultados Enriquecidos muestra exactamente para qué tipos de resultados enriquecidos tu página es elegible y marca cualquier error o advertencia. Pasa cada plantilla de página de producto por esta herramienta antes del lanzamiento. Una sola propiedad requerida faltante (como priceCurrency) en miles de páginas de producto significa cero resultados enriquecidos para todo tu catálogo.\n\nDespués del despliegue, monitorea la salud de los datos estructurados en Google Search Console bajo la sección Mejoras. Search Console agrupa los problemas por tipo y muestra cuántas páginas afecta cada error. Los problemas comunes de ecommerce incluyen valores de disponibilidad faltantes en productos agotados, discrepancias de precio entre datos estructurados y contenido de página, e imágenes faltantes.\n\nConfigura alertas para errores de datos estructurados. Cuando tu plataforma actualiza su tema o un desarrollador modifica una plantilla de producto, los datos estructurados pueden romperse silenciosamente. Revisiones semanales del informe de Mejoras en Search Console detectan estos problemas antes de que afecten tu presencia en búsquedas por un período prolongado.\n\nPara tiendas con catálogos grandes, automatiza las pruebas de datos estructurados. Herramientas como Screaming Frog pueden extraer y validar JSON-LD de cada página durante un rastreo, señalando páginas donde faltan propiedades requeridas o los valores se han vuelto obsoletos. Programa verificaciones automatizadas mensuales para detectar problemas a escala.",
          tip: "Crea una checklist de monitoreo de datos estructurados: valida con la Prueba de Resultados Enriquecidos después de cualquier cambio de plantilla, revisa las Mejoras de Search Console semanalmente, y ejecuta un rastreo completo del sitio con extracción JSON-LD mensualmente. Los problemas de datos estructurados que pasan desapercibidos durante semanas pueden costar miles de clics perdidos.",
          image: {
            src: "/images/academy/es/schema-testing-workflow.svg",
            alt: "Diagrama de flujo de trabajo de cuatro pasos que muestra las etapas de generación, validación, implementación y monitoreo de datos estructurados con un circuito de retroalimentación para corregir errores.",
            caption: "Siga un flujo de trabajo continuo: genere JSON-LD, valide con las herramientas de Google, implemente en producción y monitoree semanalmente a través de las mejoras de Search Console.",
          },
          callout: {
            title: "Stiller Bruch",
            text: "Una sola propiedad priceCurrency faltante en miles de páginas de productos significa que no hay resultados enriquecidos para todo su catálogo. Valide siempre las plantillas antes del lanzamiento y supervise las mejoras de GSC semanalmente.",
          },
        },
        {
          title: "Senales de entidad: Como los datos estructurados alimentan el Knowledge Graph interno de Google",
          content:
            "El leak confirmo que los datos estructurados alimentan la comprension de entidades de Google mucho mas alla de la elegibilidad para rich results. Atributos alrededor de la confianza de entidad y asociacion topica dependen de senales consistentes y legibles por maquina a traves de la pagina (Product schema, Brand schema, Organization schema) y a traves del sitio (enlaces sameAs, consistencia NAP, markup de autor).\n\nPara ecommerce, el movimiento practico es tratar los datos estructurados como la capa de datos que Google usa para entender lo que es tu tienda, no como un truco de rich snippet. Brand schema en cada pagina con legalName consistente, enlaces sameAs a perfiles sociales verificados, y Organization schema en la homepage con foundingDate, direccion y contactPoint - estos tipicamente no producen cambios visibles en SERP el primer dia, pero elevan las senales de confianza de entidad que influyen siteAuthority en el tiempo.\n\nHacer Product schema correctamente es table stakes. Mas alla de eso, sameAs es la senal de autoridad mas barata que puedes enviar - enlaza tu entidad Brand a cada perfil social verificado, pagina de Wikipedia si aplica, y perfil Google Business. El leak sugiere que estas referencias cruzadas influyen materialmente como Google modela tu entidad Brand.",
          items: [
            "Los datos estructurados alimentan la comprension de entidad, no solo los rich results - el schema es una capa de datos para Google",
            "Brand y Organization schema consistente sitewide eleva las senales de confianza de entidad en el tiempo",
            "Enlaces sameAs a perfiles sociales verificados, Wikipedia y Google Business son senales de autoridad baratas",
            "La correccion del Product schema es table stakes; el schema a nivel entidad es el multiplicador",
          ],
        },
      ],
      navLabels: {
        previous: "Mobile-First para Ecommerce",
        next: "Etiquetas Canonical para Ecommerce",
      },
    },
    it: {
      badge: "SEO Tecnico",
      heading: "Dati Strutturati per le Pagine Prodotto",
      intro:
        "I dati strutturati comunicano ai motori di ricerca esattamente cosa sono i tuoi prodotti, quanto costano e se sono disponibili. Un markup Product Schema correttamente implementato può far ottenere ai tuoi listing risultati arricchiti con stelle di valutazione, fasce di prezzo e badge di disponibilità direttamente nei risultati di ricerca Google, aumentando i tassi di clic dal 20 % al 35 %. Approfondisci con la nostra guida sul [generatore di schema](/tools/schema-generator).",
      readTime: "11 min di lettura",
      sections: [
        {
          title: "Fondamentali del markup Product Schema",
          content:
            "Google supporta il tipo di dati strutturati Product per le pagine ecommerce e si aspetta proprietà specifiche per attivare i risultati arricchiti. Come minimo, servono il nome del prodotto, un'immagine e almeno un'offerta con prezzo, valuta e disponibilità. La mancanza di uno qualsiasi di questi impedisce la visualizzazione dei risultati arricchiti.\n\nUsa il formato JSON-LD per tutti i dati strutturati. Google raccomanda esplicitamente JSON-LD rispetto a Microdata o RDFa perché separa il markup dall'HTML visuale, rendendolo più facile da mantenere e meno soggetto a rotture quando cambiano i template. Posiziona lo script JSON-LD nell'head o nel body delle tue [pagine prodotto](/academy/product-page-seo).\n\nOgni pagina prodotto dovrebbe contenere esattamente un'entità Product. Non marcare più prodotti su una singola pagina prodotto. Se la tua pagina mostra varianti di prodotto (taglie, colori), il prodotto principale dovrebbe essere l'entità principale con ogni variante rappresentata da oggetti Offer individuali nell'array offers.\n\nIncludi le proprietà brand, SKU o GTIN (codice a barre) e description anche se non strettamente richieste. Google le usa per abbinare i tuoi dati prodotto con i feed del Google Merchant Center, e i prodotti con markup schema completo ricevono un trattamento preferenziale nei risultati di ricerca relativi allo shopping.",
          items: [
            "Richiesti: name, image, offers (con price, priceCurrency, availability)",
            "Raccomandati: brand, sku, gtin, description, review, aggregateRating",
            "Usa il formato JSON-LD, posizionato nell'head o body della pagina",
            "Un'entità Product per pagina prodotto, varianti come oggetti Offer separati",
            "Valida con il Rich Results Test di Google prima del deployment",
          ],
          image: {
            src: "/images/academy/it/product-schema-anatomy.svg",
            alt: "Diagramma con annotazioni che mostra le proprietà dello schema di prodotto richieste e consigliate insieme a un'anteprima del risultato avanzato di Google risultante con stelle, prezzo e disponibilità",
            caption: "Le proprietà richieste attivano risultati avanzati. Le proprietà consigliate come brand, SKU e aggregateRating ottengono elenchi migliorati con valutazioni a stelle e prezzi.",
          },
          callout: {
            title: "Rich-Results-Boost",
            text: "Le pagine dei prodotti con markup dello schema completo (nome, prezzo, disponibilità, valutazioni) registrano percentuali di clic più elevate del 20-35% dai risultati di ricerca rispetto alle inserzioni semplici senza rich snippet.",
          },
        },
        {
          title: "Markup AggregateRating e Review",
          content:
            "Le valutazioni a stelle nei risultati di ricerca sono tra i più potenti amplificatori del tasso di clic disponibili per i siti ecommerce. Per mostrarle, serve AggregateRating (riepilogo di tutte le recensioni) o markup Review individuale sulle pagine prodotto. Entrambi richiedono recensioni reali da clienti reali; Google proibisce markup di recensioni auto-scritte o fabbricate.\n\nAggregateRating richiede un ratingValue (il punteggio medio), reviewCount o ratingCount, e bestRating/worstRating se usi una scala diversa da 1 a 5. I dati devono corrispondere a ciò che è visibile sulla pagina. Se la tua pagina mostra 4,3 stelle da 128 recensioni, i dati strutturati devono riflettere quei numeri esatti.\n\nPer il markup Review individuale, includi il nome dell'autore, datePublished, reviewRating e reviewBody. Google può mostrare uno snippet di recensione in evidenza accanto al tuo listing prodotto se le recensioni individuali sono marcate. Queste informazioni aggiuntive nei risultati di ricerca aiutano a differenziare il tuo listing dalla concorrenza.\n\nUn errore critico che molti negozi commettono è marcare dati di recensione su pagine che non mostrano recensioni visibili. Google chiama questa una violazione della policy dei dati strutturati, e può risultare in un'azione manuale che rimuove i risultati arricchiti dall'intero sito. Aggiungi schema review solo alle pagine dove le recensioni sono effettivamente mostrate agli utenti.",
          tip: "Sincronizza i tuoi dati strutturati con l'API della tua piattaforma di recensioni. Se usi Yotpo, Judge.me o Trustpilot, configura l'integrazione per aggiornare automaticamente i valori AggregateRating quando vengono inviate nuove recensioni. Dati di valutazione obsoleti che non corrispondono alle recensioni visibili attivano avvisi di Google.",
        },
        {
          title: "Schema Offer: prezzo e disponibilità",
          content:
            "La parte Offer del tuo schema Product comunica prezzi e stato di stock a Google. Farlo correttamente abilita la visualizzazione del prezzo nei risultati di ricerca e alimenta i listing gratuiti di Google Shopping. Farlo in modo errato significa che i tuoi prodotti appaiono senza prezzo, riducendo drasticamente i tassi di clic.\n\nPer prodotti con un singolo prezzo, usa un Offer semplice con price e priceCurrency. Per prodotti con prezzi basati su varianti (prezzi diversi per taglie diverse), usa un AggregateOffer con lowPrice e highPrice per mostrare una fascia di prezzo, o elenca oggetti Offer individuali per ogni variante con il suo prezzo specifico.\n\nI valori di disponibilità devono usare l'insieme predefinito di Schema.org: InStock, OutOfStock, PreOrder, BackOrder o Discontinued. Google incrocia questi dati con il tuo feed prodotti e il contenuto effettivo della pagina. Se i tuoi dati strutturati dicono InStock ma la pagina mostra \"Esaurito\", riceverai un avviso di discrepanza nella Search Console.\n\nAggiorna il tuo markup di disponibilità dinamicamente. Un prodotto che va esaurito alle 14:00 non dovrebbe ancora mostrare InStock nei suoi dati strutturati alle 15:00. Per piattaforme come Shopify, questo è gestito automaticamente se usi lo schema prodotto predefinito. Per implementazioni personalizzate, collega la disponibilità al tuo sistema di gestione dell'inventario.",
          items: [
            "Prezzo singolo: usa Offer con price e priceCurrency",
            "Fascia di prezzo: usa AggregateOffer con lowPrice e highPrice",
            "La disponibilità deve corrispondere esattamente al contenuto della pagina (InStock, OutOfStock, ecc.)",
            "Aggiorna i dati strutturati dinamicamente quando lo stato dello stock cambia",
            "Includi priceValidUntil per i prezzi in saldo per indicare quando il prezzo scade",
          ],
        },
        {
          title: "Schema Breadcrumb e FAQ per l'ecommerce",
          content:
            "Oltre allo schema Product, due tipi aggiuntivi di dati strutturati beneficiano significativamente i negozi ecommerce: BreadcrumbList e FAQPage. Entrambi ottengono miglioramenti visivi nei risultati di ricerca e aiutano Google a comprendere la struttura del tuo sito. Approfondisci con la nostra guida sulla [SEO on-page](/blog/on-page-seo-for-ecommerce).\n\nLo schema BreadcrumbList rispecchia i tuoi breadcrumb di navigazione e mostra i percorsi delle categorie nei risultati di ricerca al posto degli URL grezzi. Un risultato di ricerca che mostra \"Home > Scarpe Donna > Scarpe da Corsa\" fornisce più contesto di \"example.com/products/nike-air-zoom\" e ottiene tassi di clic più alti. Implementa BreadcrumbList su ogni pagina prodotto e categoria.\n\nLo schema FAQPage sulle pagine prodotto può mostrare coppie domanda-risposta espandibili direttamente nei risultati di ricerca, occupando più spazio nella pagina dei risultati. Usalo per FAQ genuine di prodotto come \"Di quali materiali è fatto?\" o \"Questo prodotto ha una garanzia?\". Non usare FAQPage per domande generiche del servizio clienti che appartengono a una pagina di aiuto.\n\nGoogle ha ristretto l'eleggibilità per i risultati arricchiti FAQPage nel 2023. Ora appaiono principalmente per siti noti e autorevoli. Per i negozi più piccoli, lo schema FAQPage aiuta comunque Google a comprendere i tuoi contenuti, anche se non attiva risultati arricchiti visivi. I dati strutturati stessi forniscono valore attraverso una migliore comprensione dei contenuti.\n\nNon accumulare tipi di schema eccessivi su una singola pagina. Le pagine prodotto dovrebbero avere schema Product, BreadcrumbList e opzionalmente FAQPage. Aggiungere Organization, WebSite, LocalBusiness e altri tipi a ogni pagina aggiunge peso senza beneficio proporzionale.",
        },
        {
          title: "Test e monitoraggio dei dati strutturati",
          content:
            "Distribuire dati strutturati senza validazione è una fonte comune di errori che silenziosamente impediscono i risultati arricchiti. Google fornisce due strumenti di test: il Rich Results Test (per verificare se un URL è eleggibile per risultati arricchiti) e lo Schema Markup Validator (per verificare la sintassi generale dello schema). Usa entrambi.\n\nIl Rich Results Test mostra esattamente per quali tipi di risultati arricchiti la tua pagina è eleggibile e segnala eventuali errori o avvisi. Fai passare ogni template di pagina prodotto attraverso questo strumento prima del lancio. Una singola proprietà richiesta mancante (come priceCurrency) su migliaia di pagine prodotto significa zero risultati arricchiti per l'intero catalogo.\n\nDopo il deployment, monitora la salute dei dati strutturati in Google Search Console sotto la sezione Miglioramenti. La Search Console raggruppa i problemi per tipo e mostra quante pagine ogni errore colpisce. I problemi ecommerce comuni includono valori di disponibilità mancanti su prodotti esauriti, discrepanze di prezzo tra dati strutturati e contenuto della pagina, e immagini mancanti.\n\nImposta avvisi per errori nei dati strutturati. Quando la tua piattaforma aggiorna il suo tema o uno sviluppatore modifica un template prodotto, i dati strutturati possono rompersi silenziosamente. Controlli settimanali del report Miglioramenti nella Search Console rilevano questi problemi prima che influenzino la tua presenza nelle ricerche per un periodo prolungato.\n\nPer negozi con cataloghi grandi, automatizza i test dei dati strutturati. Strumenti come Screaming Frog possono estrarre e validare JSON-LD da ogni pagina durante una scansione, segnalando pagine dove mancano proprietà richieste o i valori sono diventati obsoleti. Programma controlli automatizzati mensili per rilevare problemi su larga scala.",
          tip: "Crea una checklist di monitoraggio dei dati strutturati: valida con il Rich Results Test dopo ogni modifica del template, controlla i Miglioramenti della Search Console settimanalmente, e lancia una scansione completa del sito con estrazione JSON-LD mensilmente. Problemi di dati strutturati che passano inosservati per settimane possono costare migliaia di clic persi.",
          image: {
            src: "/images/academy/it/schema-testing-workflow.svg",
            alt: "Diagramma del flusso di lavoro in quattro fasi che mostra le fasi di generazione, convalida, distribuzione e monitoraggio dei dati strutturati con un ciclo di feedback per la correzione degli errori",
            caption: "Segui un flusso di lavoro continuo: genera JSON-LD, convalida con gli strumenti Google, distribuisci in produzione e monitora settimanalmente tramite i miglioramenti di Search Console.",
          },
          callout: {
            title: "Stiller Bruch",
            text: "Una singola proprietà priceCurrency mancante in migliaia di pagine di prodotto significa zero risultati avanzati per l'intero catalogo. Convalida sempre i modelli prima del lancio e monitora settimanalmente i miglioramenti GSC.",
          },
        },
        {
          title: "Segnali di entita: Come i dati strutturati alimentano il Knowledge Graph interno di Google",
          content:
            "Il leak ha confermato che i dati strutturati alimentano la comprensione delle entita di Google ben oltre l'eleggibilita ai rich result. Gli attributi attorno alla confidenza di entita e all'associazione tematica si basano su segnali coerenti e leggibili dalla macchina attraverso la pagina (Product schema, Brand schema, Organization schema) e attraverso il sito (link sameAs, coerenza NAP, markup dell'autore).\n\nPer l'ecommerce, la mossa pratica e trattare i dati strutturati come il livello di dati che Google usa per capire cos'e il tuo negozio, non come un trucco da rich snippet. Brand schema su ogni pagina con legalName coerente, link sameAs a profili social verificati, e Organization schema sulla homepage con foundingDate, indirizzo e contactPoint - questi tipicamente non producono cambiamenti visibili nel SERP il primo giorno, ma elevano i segnali di confidenza di entita che influenzano siteAuthority nel tempo.\n\nFare Product schema correttamente e table stakes. Oltre a questo, sameAs e il segnale di autorita piu economico che puoi spedire - collega la tua entita Brand a ogni profilo social verificato, pagina Wikipedia se applicabile, e profilo Google Business. Il leak suggerisce che questi riferimenti incrociati influenzano materialmente come Google modella la tua entita Brand.",
          items: [
            "I dati strutturati alimentano la comprensione di entita, non solo i rich result - lo schema e un livello di dati per Google",
            "Brand e Organization schema coerente sitewide eleva i segnali di confidenza di entita nel tempo",
            "Link sameAs a profili social verificati, Wikipedia e Google Business sono segnali di autorita economici",
            "La correttezza del Product schema e table stakes; lo schema a livello entita e il moltiplicatore",
          ],
        },
      ],
      navLabels: {
        previous: "Mobile-First per l'Ecommerce",
        next: "Tag Canonical per l'Ecommerce",
      },
    },
    nl: {
      badge: "Technische SEO",
      heading: "Gestructureerde Data voor Productpagina's",
      intro:
        "Gestructureerde data vertelt zoekmachines precies wat je producten zijn, hoeveel ze kosten en of ze op voorraad zijn. Correct geïmplementeerde Product schema markup kan je listings rijke resultaten opleveren met sterbeoordelingen, prijsranges en beschikbaarheidsbadges direct in de Google-zoekresultaten, waardoor de klikfrequentie met 20 % tot 35 % stijgt.\n\nGebruik onze [schemagenerator](/tools/schema-generator) om gestructureerde data te implementeren.",
      readTime: "11 min leestijd",
      sections: [
        {
          title: "Product Schema Markup essentials",
          content:
            "Google ondersteunt het gestructureerde datatype Product voor ecommerce-pagina's en verwacht specifieke eigenschappen om rijke resultaten te activeren. Je hebt minimaal de productnaam, een afbeelding en ten minste één aanbieding met prijs, valuta en beschikbaarheid nodig. Het ontbreken van een van deze voorkomt dat rijke resultaten verschijnen.\n\nGebruik het JSON-LD-formaat voor alle gestructureerde data. Google beveelt expliciet JSON-LD aan boven Microdata of RDFa omdat het de markup scheidt van de visuele HTML, waardoor het gemakkelijker te onderhouden is en minder snel breekt bij templatewijzigingen. Plaats het JSON-LD-script in de head of body van je [productpagina's](/academy/product-page-seo).\n\nElke productpagina moet precies één Product-entiteit bevatten. Markeer geen meerdere producten op een enkele productpagina. Als je pagina productvarianten toont (maten, kleuren), moet het hoofdproduct de hoofdentiteit zijn met elke variant vertegenwoordigd door individuele Offer-objecten binnen de offers-array.\n\nNeem de eigenschappen brand, SKU of GTIN (barcode) en description op, ook al zijn ze niet strikt vereist. Google gebruikt deze om je productgegevens te matchen met Google Merchant Center-feeds, en producten met complete schema markup krijgen een voorkeursbehandeling in winkelgerelateerde zoekresultaten.",
          items: [
            "Vereist: name, image, offers (met price, priceCurrency, availability)",
            "Aanbevolen: brand, sku, gtin, description, review, aggregateRating",
            "Gebruik JSON-LD-formaat, geplaatst in de pagina head of body",
            "Eén Product-entiteit per productpagina, varianten als aparte Offer-objecten",
            "Valideer met Google's Rich Results Test vóór deployment",
          ],
          image: {
            src: "/images/academy/nl/product-schema-anatomy.svg",
            alt: "Geannoteerd diagram met de vereiste en aanbevolen productschema-eigenschappen, naast een voorbeeld van het resulterende uitgebreide Google-resultaat met sterren, prijs en beschikbaarheid",
            caption: "Vereiste eigenschappen zorgen voor rijke resultaten. Aanbevolen eigenschappen zoals merk, SKU en aggregateRating verdienen verbeterde vermeldingen met sterbeoordelingen en prijzen.",
          },
          callout: {
            title: "Rich-Results-Boost",
            text: "Productpagina's met volledige schema-opmaak (naam, prijs, beschikbaarheid, beoordelingen) zorgen voor 20-35% hogere klikfrequenties in de zoekresultaten vergeleken met gewone vermeldingen zonder rich snippets.",
          },
        },
        {
          title: "AggregateRating en Review markup",
          content:
            "Sterbeoordelingen in zoekresultaten behoren tot de krachtigste klikfrequentie-versterkers beschikbaar voor ecommerce-sites. Om ze weer te geven heb je AggregateRating (samenvatting van alle reviews) of individuele Review markup op je productpagina's nodig. Beide vereisen echte reviews van echte klanten; Google verbiedt zelfgeschreven of verzonnen review markup.\n\nAggregateRating vereist een ratingValue (het gemiddelde cijfer), reviewCount of ratingCount, en bestRating/worstRating als je een andere schaal dan 1 tot 5 gebruikt. De data moet overeenkomen met wat zichtbaar is op de pagina. Als je pagina 4,3 sterren uit 128 reviews toont, moeten de gestructureerde data exact die cijfers weergeven.\n\nVoor individuele Review markup, neem de auteursnaam, datePublished, reviewRating en reviewBody op. Google kan een uitgelicht review-fragment tonen naast je productvermelding als individuele reviews zijn gemarkeerd. Deze extra informatie in zoekresultaten helpt je vermelding te onderscheiden van concurrenten.\n\nEen kritieke fout die veel winkels maken is het markeren van reviewgegevens op pagina's die geen zichtbare reviews tonen. Google noemt dit een beleidsovertreding voor gestructureerde data, en het kan resulteren in een handmatige actie die rijke resultaten van je hele site verwijdert. Voeg alleen review schema toe aan pagina's waar reviews daadwerkelijk aan gebruikers worden getoond.",
          tip: "Synchroniseer je gestructureerde data met de API van je reviewplatform. Als je Yotpo, Judge.me of Trustpilot gebruikt, configureer de integratie om AggregateRating-waarden automatisch bij te werken wanneer nieuwe reviews worden ingediend. Verouderde beoordelingsdata die niet overeenkomen met zichtbare reviews activeren Google-waarschuwingen.",
        },
        {
          title: "Offer Schema: prijs en beschikbaarheid",
          content:
            "Het Offer-gedeelte van je Product schema communiceert prijzen en voorraadstatus aan Google. Dit correct doen maakt prijsweergave in zoekresultaten mogelijk en voedt de gratis listings van Google Shopping. Het verkeerd doen betekent dat je producten zonder prijs worden getoond, wat de klikfrequentie drastisch verlaagt.\n\nVoor producten met één prijs, gebruik een eenvoudige Offer met price en priceCurrency. Voor producten met variant-gebaseerde prijzen (verschillende prijzen voor verschillende maten), gebruik een AggregateOffer met lowPrice en highPrice om een prijsrange te tonen, of lijst individuele Offer-objecten voor elke variant met zijn specifieke prijs.\n\nBeschikbaarheidswaarden moeten de voorgedefinieerde set van Schema.org gebruiken: InStock, OutOfStock, PreOrder, BackOrder of Discontinued. Google kruist dit met je productfeed en de werkelijke pagina-inhoud. Als je gestructureerde data InStock zegt maar de pagina \"Uitverkocht\" toont, ontvang je een waarschuwing voor discrepantie in de Search Console.\n\nWerk je beschikbaarheidsmarkup dynamisch bij. Een product dat om 14:00 uur uitverkocht raakt, zou om 15:00 uur niet meer InStock moeten tonen in zijn gestructureerde data. Voor platforms zoals Shopify wordt dit automatisch afgehandeld als je het standaard productschema gebruikt. Voor aangepaste implementaties, verbind beschikbaarheid met je voorraadbeheersysteem.",
          items: [
            "Enkele prijs: gebruik Offer met price en priceCurrency",
            "Prijsrange: gebruik AggregateOffer met lowPrice en highPrice",
            "Beschikbaarheid moet exact overeenkomen met pagina-inhoud (InStock, OutOfStock, enz.)",
            "Werk gestructureerde data dynamisch bij wanneer de voorraadstatus verandert",
            "Neem priceValidUntil op voor uitverkoopprijzen om aan te geven wanneer de prijs verloopt",
          ],
        },
        {
          title: "Breadcrumb en FAQ Schema voor ecommerce",
          content:
            "Naast Product schema profiteren ecommerce-winkels aanzienlijk van twee extra gestructureerde datatypes: BreadcrumbList en FAQPage. Beide verdienen visuele verbeteringen in zoekresultaten en helpen Google je sitestructuur te begrijpen.\n\nBreadcrumbList schema spiegelt je navigatiebreadcrumbs en toont categoriepaden in zoekresultaten in plaats van kale URL's. Een zoekresultaat dat \"Home > Damesschoenen > Hardloopschoenen\" toont, biedt meer context dan \"example.com/products/nike-air-zoom\" en behaalt hogere klikfrequenties. Implementeer BreadcrumbList op elke product- en categoriepagina.\n\nFAQPage schema op productpagina's kan uitklapbare vraag-en-antwoord-paren direct in zoekresultaten tonen, waardoor meer ruimte op de resultatenpagina wordt ingenomen. Gebruik het voor echte product-FAQ's zoals \"Van welke materialen is dit gemaakt?\" of \"Heeft dit product garantie?\". Gebruik FAQPage niet voor generieke klantenservicevragen die op een hulppagina thuishoren.\n\nGoogle heeft de geschiktheid voor FAQPage rijke resultaten in 2023 aangescherpt. Ze verschijnen nu voornamelijk voor bekende, gezaghebbende sites. Voor kleinere winkels helpt FAQPage schema Google nog steeds je content te begrijpen, zelfs als het geen visuele rijke resultaten activeert. De gestructureerde data zelf bieden waarde door beter contentbegrip.\n\nStapel geen overmatige schematypes op een enkele pagina. Productpagina's moeten Product, BreadcrumbList en optioneel FAQPage schema hebben. Het toevoegen van Organization, WebSite, LocalBusiness en andere types aan elke pagina voegt overhead toe zonder proportioneel voordeel.\n\nOnze gids over [on-page SEO voor ecommerce](/blog/on-page-seo-for-ecommerce) behandelt deze optimalisaties uitgebreid.",
        },
        {
          title: "Testen en monitoren van gestructureerde data",
          content:
            "Gestructureerde data deployen zonder validatie is een veelvoorkomende bron van fouten die stilletjes rijke resultaten voorkomen. Google biedt twee testtools: de Rich Results Test (om te controleren of een URL in aanmerking komt voor rijke resultaten) en de Schema Markup Validator (om de algemene schemasyntax te controleren). Gebruik beide.\n\nDe Rich Results Test toont precies voor welke typen rijke resultaten je pagina in aanmerking komt en markeert eventuele fouten of waarschuwingen. Laat elk productpagina-template door deze tool lopen vóór de lancering. Een enkele ontbrekende vereiste eigenschap (zoals priceCurrency) over duizenden productpagina's betekent nul rijke resultaten voor je hele catalogus.\n\nNa deployment, monitor de gezondheid van gestructureerde data in Google Search Console onder de sectie Verbeteringen. Search Console groepeert problemen per type en toont hoeveel pagina's elke fout treft. Veelvoorkomende ecommerce-problemen zijn ontbrekende beschikbaarheidswaarden bij uitverkochte producten, prijsdiscrepanties tussen gestructureerde data en pagina-inhoud, en ontbrekende afbeeldingen.\n\nStel alerts in voor fouten in gestructureerde data. Wanneer je platform zijn thema bijwerkt of een ontwikkelaar een producttemplate wijzigt, kunnen gestructureerde data stilletjes breken. Wekelijkse controles van het Verbeteringen-rapport in Search Console vangen deze problemen op voordat ze je zoekpresentie voor een langere periode beïnvloeden.\n\nVoor winkels met grote catalogi, automatiseer het testen van gestructureerde data. Tools zoals Screaming Frog kunnen JSON-LD van elke pagina extraheren en valideren tijdens een crawl, en pagina's markeren waar vereiste eigenschappen ontbreken of waarden verouderd zijn. Plan maandelijkse geautomatiseerde controles om problemen op schaal te detecteren.",
          tip: "Maak een monitoringchecklist voor gestructureerde data: valideer met de Rich Results Test na elke templatewijziging, controleer Search Console Verbeteringen wekelijks, en voer maandelijks een volledige sitecrawl uit met JSON-LD-extractie. Problemen met gestructureerde data die wekenlang onopgemerkt blijven, kunnen duizenden verloren klikken kosten.",
          image: {
            src: "/images/academy/nl/schema-testing-workflow.svg",
            alt: "Workflowdiagram in vier stappen dat de fasen voor het genereren, valideren, implementeren en bewaken van gestructureerde gegevens toont, met een feedbacklus voor het oplossen van fouten",
            caption: "Volg een continue workflow: genereer JSON-LD, valideer met Google-tools, implementeer het in productie en controleer wekelijks via Search Console Enhancements.",
          },
          callout: {
            title: "Stiller Bruch",
            text: "Eén ontbrekende priceCurrency-eigenschap op duizenden productpagina's betekent nul rijke resultaten voor uw hele catalogus. Valideer sjablonen altijd vóór de lancering en controleer wekelijks GSC-verbeteringen.",
          },
        },
        {
          title: "Entiteit-signalen: Hoe gestructureerde data Googles interne Knowledge Graph voedt",
          content:
            "Het leak bevestigde dat gestructureerde data Googles entiteitsbegrip ver buiten rich-result-eligibility voedt. Attributen rond entity-confidence en topische associatie vertrouwen op consistente, machine-leesbare signalen over de pagina (Product schema, Brand schema, Organization schema) en over de site (sameAs links, NAP-consistentie, auteur-markup).\n\nVoor ecommerce is de praktische beweging om gestructureerde data te behandelen als de datalaag die Google gebruikt om te begrijpen wat jouw winkel is, niet als een rich-snippet-truc. Brand schema op elke pagina met consistente legalName, sameAs links naar geverifieerde sociale profielen, en Organization schema op de homepage met foundingDate, adres en contactPoint - deze produceren doorgaans geen zichtbare SERP-veranderingen op dag een, maar ze verhogen de entity-confidence-signalen die siteAuthority in de loop van de tijd beinvloeden.\n\nProduct schema correct krijgen is table stakes. Daarnaast is sameAs het goedkoopste autoriteitssignaal dat je kunt verzenden - link je Brand-entiteit naar elk geverifieerd sociaal profiel, Wikipedia-pagina indien van toepassing, en Google Business-profiel. Het leak suggereert dat deze kruisverwijzingen materieel beinvloeden hoe Google jouw Brand-entiteit modelleert.",
          items: [
            "Gestructureerde data voedt entiteitsbegrip, niet alleen rich results - schema is een datalaag voor Google",
            "Consistente Brand- en Organization-schema sitewide verhoogt entity-confidence-signalen door de tijd",
            "sameAs links naar geverifieerde sociale profielen, Wikipedia en Google Business zijn goedkope autoriteitssignalen",
            "Product schema-correctheid is table stakes; entiteit-niveau schema is de vermenigvuldiger",
          ],
        },
      ],
      navLabels: {
        previous: "Mobile-First voor Ecommerce",
        next: "Canonical Tags voor Ecommerce",
      },
    },
  },
};
