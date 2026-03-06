import type { Locale } from "../config";
import type { GuideSection, GuideNav } from "@/components/guides/GuidePageTemplate";

export const guidesOnPageAuditT: Record<
  Locale,
  { sections: GuideSection[]; nav: GuideNav }
> = {
  en: {
    sections: [
      {
        id: "category-pages",
        title: "Category Pages: The Ranking Assets That Actually Matter",
        blocks: [
          {
            type: "p",
            text: "Most ecommerce SEO audits fixate on product pages. That's the wrong priority. Category pages rank for the high-volume, high-intent terms that actually move revenue: 'women's running shoes', 'leather sofas', 'gaming laptops under £1000'. A well-optimised category page is worth more than 50 well-optimised product pages.",
          },
          {
            type: "p",
            text: "The typical state of a category page on a neglected ecommerce site: no H1, a generic title tag pulled from the category name with no keyword modifier, zero body content beyond the product grid, and a meta description that says something like 'Shop our range of shoes'. Google has nothing to work with. These pages either don't rank or rank poorly for anything competitive.",
          },
          {
            type: "callout",
            title: "The category page audit checklist",
            text: "Every category page needs: a unique H1 containing the primary keyword, 150–300 words of genuine introductory content placed above the product grid (not buried below, because Google often stops reading at the fold on paginated pages), a unique title tag with a primary keyword and modifier (e.g. 'Women's Running Shoes | Free Shipping & Returns'), and a meta description that differentiates the page from competitors.",
          },
          {
            type: "p",
            text: "The introductory content is not filler. It should answer the questions a first-time buyer in this category actually has: what to look for when buying, how to choose between subcategories, what makes your selection different. If you write 200 words of keyword-stuffed boilerplate, Google will treat it as thin content. If you write 200 words that actually help shoppers, Google treats the page as genuinely useful. The difference in ranking is real.",
          },
          {
            type: "tip",
            text: "Run your category pages through Ahrefs' or Google Search Console's performance data. Sort by impressions, not clicks. Pages with high impressions and low CTR usually have weak title tags; they appear in results but don't attract clicks. Rewriting the title tag and meta description is often the fastest win in an on-page audit.",
          },
        ],
      },
      {
        id: "product-page-audit",
        title: "Product Page Audit: Getting the Basics Right",
        blocks: [
          {
            type: "p",
            text: "Product page SEO has four components that are consistently wrong on most stores: the title tag, the description, the H1, and the image alt text. Getting all four right on every product page is not glamorous work. It is also the single thing that most directly separates stores that rank from stores that don't.",
          },
          {
            type: "list",
            items: [
              "Title tag: [Product Name] + [Key Attribute] + [Brand], kept under 60 characters. Avoid generic titles like 'Blue Trainer | Our Store'. Prefer 'Nike Air Zoom Pegasus 41 | Men's Running Shoe'.",
              "Description: write it yourself. Manufacturer copy is used by every reseller on the internet. Google identifies it and filters your page to the supplemental index. Your description should cover fit, material, use case, and anything the product images don't show.",
              "H1: the product name, exactly as a customer would search for it. One H1 per page. Do not use the H1 for decorative headings like 'You may also like'.",
              "Image alt text: product name + key attribute. Not 'image1.jpg'. Not 'product photo'. If the image shows a navy blue wool coat, the alt text is 'Navy Blue Wool Coat, Front View'.",
            ],
          },
          {
            type: "p",
            text: "Reviews are worth a special mention. If you have reviews on product pages, you need AggregateRating schema. Without it, your star ratings are invisible to Google and won't appear in search results. With it, your listing stands out against competitors who don't have stars. Use Google's Rich Results Test on any product page to verify the schema is valid and being picked up.",
          },
        ],
      },
      {
        id: "heading-hierarchy",
        title: "Heading Hierarchy: One H1, Used Once, Used Correctly",
        blocks: [
          {
            type: "p",
            text: "Heading hierarchy sounds trivial. On real ecommerce sites, it is almost always wrong. The most common pattern: the product or category name sits in an H2 because a developer styled it that way, decorative sections like 'You May Also Like' use H2, and the page ends up with multiple H1s or none at all.",
          },
          {
            type: "p",
            text: "The rule is simple: one H1 per page, containing the primary keyword, matching what a user would type into Google. H2s are for main content sections like specifications, sizing information, materials, and FAQ. H3s are for supporting points within those sections. Headings like 'Related Products', 'Customer Reviews', and 'Frequently Bought Together' should be styled as regular text or at most an H3, because they are navigation elements, not content structure.",
          },
          {
            type: "tip",
            text: "Use Screaming Frog's 'H1' report to find pages with missing H1s, duplicate H1s, or H1s that don't match the page title. On most stores this surfaces 30–40% of pages with at least one heading issue. Fix the category and top product pages first, since those have the most ranking impact.",
          },
        ],
      },
      {
        id: "thin-content",
        title: "Thin Content: When More Pages Means Lower Rankings",
        blocks: [
          {
            type: "p",
            text: "A page with under 200 words of real content is thin. That's not always a problem. A product page for a single commodity item with a clear image, accurate specs, and good reviews can rank fine with minimal prose. But at scale, across hundreds or thousands of product pages, thin content degrades domain-level quality signals.",
          },
          {
            type: "p",
            text: "Google's quality algorithms evaluate sites holistically. If 60% of your indexed pages are thin product pages with no descriptions, duplicated titles, and no reviews, that pulls down the perceived quality of the entire domain, including your well-optimised category pages. The solution for large catalogs is not to write unique descriptions for 3,000 products overnight. It is to decide which pages deserve to be indexed at all.",
          },
          {
            type: "callout",
            title: "The practical approach to thin content at scale",
            text: "For products with under 50 words of unique content and no reviews: add a noindex meta tag and remove them from your sitemap. They contribute nothing to your organic traffic and actively harm the domain's quality signals. Focus your content investment on the 20% of products that drive 80% of your category page traffic. Measure the impact over 90 days in GSC.",
          },
          {
            type: "p",
            text: "For mid-tier products (worth keeping indexed but currently thin), a structured template works better than trying to write fully bespoke descriptions. A consistent format covering: what it is, who it is for, key dimensions or specs, care instructions or compatibility, and one differentiated selling point. Three to four sentences per section. This turns a 0-word product page into a 150-word page that passes Google's quality threshold without requiring a copywriter for every SKU.",
          },
        ],
      },
      {
        id: "internal-linking",
        title: "Internal Linking: How PageRank Moves Through Your Site",
        blocks: [
          {
            type: "p",
            text: "Internal linking is how PageRank flows through your site. Category pages should link to products. Products should link back to their category. Blog posts should link to the category or product pages they reference. If a blog post about 'how to choose running shoes' doesn't link to your running shoes category, that post is earning traffic and not distributing its link equity anywhere useful.",
          },
          {
            type: "p",
            text: "Most ecommerce sites have reasonable product-to-category linking built into the breadcrumb. The gaps are almost always: category pages that don't link to sub-categories, blog posts that link to nothing, and product pages that have no 'related products' anchor-text links, just image-based links that carry no keyword signal.",
          },
          {
            type: "tip",
            text: "Run Screaming Frog on your full site and use the 'Inlinks' report to find pages with very few internal links pointing to them. These are orphaned or near-orphaned pages. Google sees them rarely, crawls them infrequently, and ranks them poorly even if the content is good. Add them to relevant category pages or blog posts with descriptive anchor text.",
          },
          {
            type: "list",
            items: [
              "Category pages: link to at least 3–5 relevant sub-categories if they exist, and to 3–5 featured products with keyword-rich anchor text",
              "Product pages: breadcrumb link back to category (required), 3–5 related products with descriptive anchor text (not 'view similar')",
              "Blog posts: identify the 1–3 most relevant product or category pages and link to them naturally in the body text with specific anchor text",
              "Homepage: link to your top 5–8 category pages with exact-match or near-match anchor text, since this is the highest-PageRank page on the site",
            ],
          },
        ],
      },
      {
        id: "duplicate-titles-meta",
        title: "Duplicate Titles and Meta Descriptions",
        blocks: [
          {
            type: "p",
            text: "Every page on your site needs a unique title tag and a unique meta description. This is one of the most basic SEO requirements and one of the most commonly violated on ecommerce sites. The cause is almost always structural: filter pages inherit the category title, search result pages share a templated title, and pagination creates 'Page 2', 'Page 3' variants that all have the same title as page 1.",
          },
          {
            type: "p",
            text: "Duplicate title tags tell Google the pages have the same content and purpose. Google will often canonicalize one version arbitrarily, and not necessarily the version you want. The result is unpredictable ranking behavior and split link equity. For pages that should be indexed (category pages, key product pages), unique titles are non-negotiable.",
          },
          {
            type: "callout",
            title: "Finding duplicates fast",
            text: "Screaming Frog's 'Page Titles' report has a built-in 'Duplicate' filter. It takes 5 minutes to run and surfaces every duplicated title across the site. Google Search Console's HTML improvements report catches many of the same issues. Cross-reference both. Pay particular attention to near-duplicates: titles that are identical except for a page number or a filter parameter appended to the end.",
          },
          {
            type: "checklist",
            items: [
              "Run Screaming Frog and filter the title report by 'Duplicate'",
              "Check GSC HTML improvements for duplicate titles and meta descriptions",
              "Ensure paginated pages have unique titles (e.g. 'Women's Running Shoes - Page 2 | Brand') or use noindex on pages 2+",
              "Ensure filter URLs either have unique titles or are canonicalized / noindexed",
              "Verify product variants have canonical tags so they don't compete with the main product URL on title",
              "After fixing, monitor GSC for improvements in impressions and average position over 60–90 days",
            ],
          },
        ],
      },
    ],
    nav: {
      prev: {
        href: "/guides/technical-analysis",
        category: "Research & Ideation",
        title: "Technical Analysis",
      },
      next: {
        href: "/guides/off-page-audit",
        category: "Research & Ideation",
        title: "Off-Page Audit",
      },
    },
  },

  de: {
    sections: [
      {
        id: "category-pages",
        title: "Kategorieseiten: Die Ranking-Assets, die wirklich zählen",
        blocks: [
          {
            type: "p",
            text: "Die meisten E-Commerce-SEO-Audits konzentrieren sich auf Produktseiten. Das ist die falsche Priorität. Kategorieseiten ranken für die suchvolumenstarken, kaufabsichtsklaren Keywords, die tatsächlich Umsatz bringen: 'Damen-Laufschuhe', 'Ledersofa', 'Gaming-Laptop unter 1000 Euro'. Eine gut optimierte Kategorieseite ist mehr wert als 50 gut optimierte Produktseiten.",
          },
          {
            type: "p",
            text: "Der typische Zustand einer Kategorieseite in einem vernachlässigten Onlineshop: kein H1, ein generischer Title-Tag aus dem Kategorienamen ohne Keyword-Modifier, kein Body-Content außer dem Produktraster, und eine Meta-Description à la 'Entdecken Sie unser Schuhsortiment'. Google hat nichts, womit es arbeiten kann.",
          },
          {
            type: "callout",
            title: "Die Kategorieseiten-Audit-Checkliste",
            text: "Jede Kategorieseite braucht: ein einzigartiges H1 mit dem Haupt-Keyword, 150–300 Wörter echter Einleitungstext über dem Produktraster (nicht darunter, denn Google liest auf paginierten Seiten oft nur bis zum Fold), einen einzigartigen Title-Tag mit Haupt-Keyword und Modifier (z. B. 'Damen-Laufschuhe | Kostenloser Versand & Rückgabe') und eine Meta-Description, die die Seite von Konkurrenten abhebt.",
          },
          {
            type: "p",
            text: "Der Einleitungstext ist kein Füllstoff. Er sollte die Fragen beantworten, die ein Erstkäufer in dieser Kategorie tatsächlich hat: Worauf ist beim Kauf zu achten? Wie wählt man zwischen Unterkategorien? Was unterscheidet deine Auswahl? Wenn du 200 Wörter keyword-gepackten Standardtext schreibst, wertet Google das als dünnen Content. Wenn du 200 Wörter schreibst, die Käufern wirklich helfen, behandelt Google die Seite als genuinen Mehrwert. Der Ranking-Unterschied ist real.",
          },
          {
            type: "tip",
            text: "Prüfe deine Kategorieseiten in den Performance-Daten von Ahrefs oder der Google Search Console. Sortiere nach Impressionen, nicht nach Klicks. Seiten mit hohen Impressionen und niedriger CTR haben meist schwache Title-Tags; sie erscheinen in den Ergebnissen, ziehen aber keine Klicks an. Den Title-Tag und die Meta-Description zu überarbeiten ist oft der schnellste Gewinn in einem On-Page-Audit.",
          },
        ],
      },
      {
        id: "product-page-audit",
        title: "Produktseiten-Audit: Die Grundlagen richtig umsetzen",
        blocks: [
          {
            type: "p",
            text: "Produktseiten-SEO hat vier Komponenten, die bei den meisten Shops durchgehend falsch sind: Title-Tag, Description, H1 und Bild-Alt-Text. Alle vier auf jeder Produktseite richtig hinzubekommen ist keine glamouröse Arbeit. Es ist auch das Einzige, das am direktesten zwischen Rankings und Nicht-Rankings entscheidet.",
          },
          {
            type: "list",
            items: [
              "Title-Tag: [Produktname] + [Schlüsselattribut] + [Marke], unter 60 Zeichen. Vermeide generische Titel wie 'Blauer Sneaker | Unser Shop'. Besser: 'Nike Air Zoom Pegasus 41 | Herren-Laufschuh'.",
              "Description: selbst schreiben. Hersteller-Texte werden von jedem Händler im Internet verwendet. Google erkennt das und filtert deine Seite heraus. Deine Description sollte Passform, Material, Anwendungsfall und Aspekte abdecken, die die Produktfotos nicht zeigen.",
              "H1: der Produktname, genau so wie ein Kunde danach suchen würde. Ein H1 pro Seite. Verwende das H1 nicht für dekorative Überschriften wie 'Das könnte dir gefallen'.",
              "Bild-Alt-Text: Produktname + Schlüsselattribut. Nicht 'image1.jpg'. Nicht 'Produktfoto'. Wenn das Bild einen marine-blauen Wollmantel zeigt, lautet der Alt-Text 'Marineblauer Wollmantel, Vorderansicht'.",
            ],
          },
          {
            type: "p",
            text: "Bewertungen verdienen eine besondere Erwähnung. Wenn du Bewertungen auf Produktseiten hast, brauchst du AggregateRating-Schema. Ohne es sind deine Sternebewertungen für Google unsichtbar und erscheinen nicht in den Suchergebnissen. Mit Schema sticht dein Eintrag gegenüber Mitbewerbern ohne Sterne heraus. Prüfe jede Produktseite mit Googles Rich Results Test, um sicherzustellen, dass das Schema valide ist.",
          },
        ],
      },
      {
        id: "heading-hierarchy",
        title: "Überschriftenhierarchie: Ein H1, einmal, richtig verwendet",
        blocks: [
          {
            type: "p",
            text: "Überschriftenhierarchie klingt trivial. Auf echten Onlineshops ist sie fast immer falsch. Das häufigste Muster: der Produkt- oder Kategoriename steckt in einem H2, weil ein Entwickler es so gestylt hat, dekorative Bereiche wie 'Das gefällt dir vielleicht auch' verwenden H2, und die Seite endet mit mehreren H1s oder gar keinem.",
          },
          {
            type: "p",
            text: "Die Regel ist einfach: ein H1 pro Seite, mit dem Haupt-Keyword, das dem entspricht, was ein Nutzer in Google eintippen würde. H2s sind für Haupt-Content-Bereiche wie Spezifikationen, Größeninfo, Materialien und FAQ. H3s für unterstützende Punkte innerhalb dieser Bereiche. Überschriften wie 'Ähnliche Produkte', 'Kundenbewertungen' und 'Häufig zusammen gekauft' sollten als normaler Text oder höchstens als H3 gestylt werden.",
          },
          {
            type: "tip",
            text: "Nutze Screaming Frogs 'H1'-Bericht, um Seiten ohne H1, mit doppelten H1s oder mit H1s zu finden, die nicht mit dem Seitentitel übereinstimmen. Bei den meisten Shops zeigt das bei 30–40 % der Seiten mindestens ein Überschriften-Problem. Beginne mit Kategorie- und Top-Produktseiten, denn die haben den größten Ranking-Einfluss.",
          },
        ],
      },
      {
        id: "thin-content",
        title: "Thin Content: Wenn mehr Seiten niedrigere Rankings bedeuten",
        blocks: [
          {
            type: "p",
            text: "Eine Seite mit unter 200 Wörtern echtem Content ist dünn. Das ist nicht immer ein Problem. Eine Produktseite für ein einfaches Commodity-Produkt mit klarem Bild, korrekten Specs und guten Bewertungen kann auch mit wenig Fließtext gut ranken. Aber im großen Maßstab, über Hunderte oder Tausende Produktseiten, verschlechtert dünner Content die Domain-weiten Qualitätssignale.",
          },
          {
            type: "p",
            text: "Googles Qualitätsalgorithmen bewerten Websites ganzheitlich. Wenn 60 % deiner indexierten Seiten dünne Produktseiten ohne Beschreibung, duplizierten Titeln und keinen Bewertungen sind, zieht das die wahrgenommene Qualität der gesamten Domain nach unten, einschließlich deiner gut optimierten Kategorieseiten. Die Lösung für große Kataloge ist nicht, über Nacht einzigartige Beschreibungen für 3.000 Produkte zu schreiben. Die Lösung ist zu entscheiden, welche Seiten überhaupt indexiert werden sollten.",
          },
          {
            type: "callout",
            title: "Der praktische Ansatz für Thin Content in großen Katalogen",
            text: "Für Produkte mit unter 50 Wörtern einzigartigem Content und ohne Bewertungen: Noindex-Meta-Tag hinzufügen und aus der Sitemap entfernen. Sie tragen nichts zum organischen Traffic bei und schaden aktiv den Qualitätssignalen der Domain. Konzentriere Investitionen in Content auf die 20 % der Produkte, die 80 % des Kategorie-Traffic generieren. Messe den Effekt über 90 Tage in GSC.",
          },
          {
            type: "p",
            text: "Für mittlere Produkte (indexierungswürdig, aber aktuell dünn) funktioniert ein strukturiertes Template besser als der Versuch, vollständig individuelle Beschreibungen zu schreiben. Ein konsistentes Format: was es ist, für wen es geeignet ist, Schlüsselmaße oder Spezifikationen, Pflegehinweise oder Kompatibilität, und ein differenzierendes Verkaufsargument. Drei bis vier Sätze pro Abschnitt reichen, um eine 0-Wörter-Produktseite in eine 150-Wörter-Seite zu verwandeln, die Googles Qualitätsschwelle überschreitet.",
          },
        ],
      },
      {
        id: "internal-linking",
        title: "Interne Verlinkung: So verteilt sich PageRank auf deiner Website",
        blocks: [
          {
            type: "p",
            text: "Interne Verlinkung ist der Weg, auf dem PageRank durch deine Website fließt. Kategorieseiten sollten auf Produkte verlinken. Produkte sollten zurück auf ihre Kategorie verlinken. Blogartikel sollten auf die Kategorie- oder Produktseiten verlinken, auf die sie sich beziehen. Wenn ein Blogartikel über 'Laufschuhe richtig auswählen' nicht auf deine Laufschuhe-Kategorie verlinkt, generiert dieser Artikel Traffic und verteilt seine Link-Equity nirgendwo sinnvoll.",
          },
          {
            type: "p",
            text: "Die meisten Onlineshops haben eine vernünftige Produkt-zu-Kategorie-Verlinkung in den Breadcrumbs. Die Lücken sind fast immer: Kategorieseiten, die nicht auf Unterkategorien verlinken, Blogartikel ohne jegliche Links, und Produktseiten ohne 'Ähnliche Produkte'-Ankertext-Links, nur bildbasierte Links ohne Keyword-Signal.",
          },
          {
            type: "tip",
            text: "Lass Screaming Frog deinen gesamten Shop crawlen und nutze den 'Inlinks'-Bericht, um Seiten mit sehr wenigen internen Links zu finden. Das sind verwaiste oder nahezu verwaiste Seiten. Google sieht sie selten, crawlt sie unregelmäßig und rankt sie schlecht, selbst wenn der Content gut ist. Füge sie zu relevanten Kategorieseiten oder Blogartikeln mit beschreibenden Ankertexten hinzu.",
          },
          {
            type: "list",
            items: [
              "Kategorieseiten: Verlinkung auf mindestens 3–5 relevante Unterkategorien (wenn vorhanden) und auf 3–5 Hauptprodukte mit keyword-reichem Ankertext",
              "Produktseiten: Breadcrumb-Link zur Kategorie (Pflicht), 3–5 verwandte Produkte mit beschreibendem Ankertext (nicht 'Ähnliche Produkte anzeigen')",
              "Blogartikel: die 1–3 relevantesten Produkt- oder Kategorieseiten identifizieren und im Fließtext mit spezifischem Ankertext natürlich verlinken",
              "Startseite: auf deine Top-5–8-Kategorieseiten mit Exact-Match- oder Near-Match-Ankertext verlinken, denn das ist die PageRank-stärkste Seite der gesamten Website",
            ],
          },
        ],
      },
      {
        id: "duplicate-titles-meta",
        title: "Doppelte Title-Tags und Meta-Descriptions",
        blocks: [
          {
            type: "p",
            text: "Jede Seite deines Shops braucht einen einzigartigen Title-Tag und eine einzigartige Meta-Description. Das ist eine der grundlegendsten SEO-Anforderungen und eine der am häufigsten verletzten in Onlineshops. Die Ursache ist fast immer strukturell: Filterseiten erben den Kategorie-Titel, Suchergebnisseiten teilen einen Template-Titel, und Paginierung erzeugt 'Seite 2'-, 'Seite 3'-Varianten, die alle denselben Titel wie Seite 1 haben.",
          },
          {
            type: "p",
            text: "Doppelte Title-Tags signalisieren Google, dass die Seiten denselben Inhalt und Zweck haben. Google wird oft willkürlich eine Version kanonisieren, und nicht unbedingt die, die du möchtest. Das Ergebnis ist unvorhersehbares Ranking-Verhalten und gespaltene Link-Equity. Für indexierungswürdige Seiten sind einzigartige Titel nicht verhandelbar.",
          },
          {
            type: "callout",
            title: "Duplikate schnell finden",
            text: "Screaming Frogs 'Page Titles'-Bericht hat einen eingebauten 'Duplicate'-Filter. Es dauert 5 Minuten, ihn auszuführen, und er zeigt jeden duplizierten Titel. Googles HTML-Verbesserungsbericht in der Search Console deckt viele derselben Probleme auf. Beide cross-referenzieren. Besonders auf Quasi-Duplikate achten: Titel, die identisch sind, außer einer angehängten Seitenzahl oder einem Filterparameter.",
          },
          {
            type: "checklist",
            items: [
              "Screaming Frog ausführen und den Title-Bericht nach 'Duplicate' filtern",
              "GSC-HTML-Verbesserungen auf doppelte Titel und Meta-Descriptions prüfen",
              "Sicherstellen, dass paginierte Seiten einzigartige Titel haben oder Seite 2+ noindexiert ist",
              "Filter-URLs entweder einzigartige Titel geben oder sie kanonisieren / noindexieren",
              "Prüfen, dass Produktvarianten Canonical-Tags haben, um Konkurrenz mit der Haupt-Produkt-URL zu vermeiden",
              "Nach Korrekturen die GSC 60–90 Tage lang auf Verbesserungen bei Impressionen und Durchschnittspositionen überwachen",
            ],
          },
        ],
      },
    ],
    nav: {
      prev: {
        href: "/guides/technical-analysis",
        category: "Research & Ideation",
        title: "Technical Analysis",
      },
      next: {
        href: "/guides/off-page-audit",
        category: "Research & Ideation",
        title: "Off-Page Audit",
      },
    },
  },

  fr: {
    sections: [
      {
        id: "category-pages",
        title: "Pages de catégorie : les pages qui comptent vraiment pour le SEO",
        blocks: [
          {
            type: "p",
            text: "La plupart des audits SEO e-commerce se focalisent sur les pages produit. C'est la mauvaise priorité. Les pages de catégorie se positionnent sur les termes à fort volume et forte intention d'achat qui génèrent réellement du chiffre d'affaires : 'chaussures de running femme', 'canapé cuir', 'laptop gaming moins de 1000 €'. Une page de catégorie bien optimisée vaut plus que 50 pages produit bien optimisées.",
          },
          {
            type: "p",
            text: "L'état typique d'une page de catégorie sur un site e-commerce négligé : pas de H1, un title tag générique tiré du nom de catégorie sans modificateur de mot-clé, zéro contenu en dehors de la grille de produits, et une meta description du type 'Découvrez notre sélection de chaussures'. Google n'a rien à exploiter. Ces pages soit ne se positionnent pas, soit se positionnent mal sur tout ce qui est concurrentiel.",
          },
          {
            type: "callout",
            title: "La checklist d'audit des pages de catégorie",
            text: "Chaque page de catégorie doit avoir : un H1 unique contenant le mot-clé principal, 150–300 mots de contenu introductif réel placé au-dessus de la grille de produits (pas en dessous, car Google s'arrête souvent de lire au pli sur les pages paginées), un title tag unique avec le mot-clé principal et un modificateur (ex. 'Chaussures de Running Femme | Livraison Gratuite & Retours'), et une meta description qui distingue la page des concurrents.",
          },
          {
            type: "p",
            text: "Le contenu introductif n'est pas du remplissage. Il doit répondre aux questions qu'un acheteur découvrant cette catégorie se pose réellement : à quoi faire attention lors de l'achat, comment choisir entre les sous-catégories, ce qui distingue votre sélection. Si vous écrivez 200 mots de texte générique truffé de mots-clés, Google le traitera comme du contenu mince. Si vous écrivez 200 mots qui aident vraiment les acheteurs, Google traite la page comme genuinement utile. La différence de classement est réelle.",
          },
          {
            type: "tip",
            text: "Analysez vos pages de catégorie dans les données de performance d'Ahrefs ou de Google Search Console. Triez par impressions, pas par clics. Les pages avec beaucoup d'impressions et un CTR faible ont généralement des title tags faibles — elles apparaissent dans les résultats mais n'attirent pas de clics. Réécrire le title tag et la meta description est souvent le gain le plus rapide dans un audit on-page.",
          },
        ],
      },
      {
        id: "product-page-audit",
        title: "Audit des pages produit : bien régler les fondamentaux",
        blocks: [
          {
            type: "p",
            text: "Le SEO des pages produit repose sur quatre composants systématiquement mal configurés sur la plupart des boutiques : le title tag, la description, le H1 et le texte alternatif des images. Bien les gérer sur chaque page produit n'est pas du travail glamour. C'est pourtant ce qui différencie le plus directement les boutiques qui se positionnent de celles qui ne se positionnent pas.",
          },
          {
            type: "list",
            items: [
              "Title tag : [Nom du produit] + [Attribut clé] + [Marque] — moins de 60 caractères. Évitez les titres génériques comme 'Basket Bleue | Notre Boutique'. Préférez 'Nike Air Zoom Pegasus 41 | Chaussure de Running Homme'.",
              "Description : rédigez-la vous-même. Les textes fabricant sont utilisés par tous les revendeurs sur internet. Google les identifie et filtre votre page vers l'index supplémentaire. Votre description doit couvrir la coupe, le matériau, le cas d'usage et tout ce que les photos produit ne montrent pas.",
              "H1 : le nom du produit, exactement tel qu'un client le rechercherait. Un H1 par page. N'utilisez pas le H1 pour des titres décoratifs comme 'Vous pourriez aussi aimer'.",
              "Texte alternatif des images : nom du produit + attribut clé. Pas 'image1.jpg'. Pas 'photo produit'. Si l'image montre un manteau en laine bleu marine, le texte alternatif est 'Manteau en Laine Bleu Marine, Vue de Face'.",
            ],
          },
          {
            type: "p",
            text: "Les avis méritent une mention spéciale. Si vous avez des avis sur vos pages produit, il vous faut le schema AggregateRating. Sans lui, vos étoiles d'avis sont invisibles pour Google et n'apparaîtront pas dans les résultats de recherche. Avec lui, votre fiche se distingue des concurrents qui n'ont pas d'étoiles. Utilisez le Rich Results Test de Google sur chaque page produit pour vérifier que le schema est valide.",
          },
        ],
      },
      {
        id: "heading-hierarchy",
        title: "Hiérarchie des titres : un H1, utilisé une fois, utilisé correctement",
        blocks: [
          {
            type: "p",
            text: "La hiérarchie des titres semble triviale. Sur les sites e-commerce réels, elle est presque toujours incorrecte. Le schéma le plus courant : le nom du produit ou de la catégorie est dans un H2 parce qu'un développeur l'a stylisé ainsi, les sections décoratives comme 'Vous aimerez aussi' utilisent un H2, et la page finit avec plusieurs H1 ou aucun du tout.",
          },
          {
            type: "p",
            text: "La règle est simple : un seul H1 par page, contenant le mot-clé principal, correspondant à ce qu'un utilisateur taperait dans Google. Les H2 sont pour les sections de contenu principal comme les spécifications, informations de taille, matériaux et FAQ. Les H3 sont pour les points de soutien au sein de ces sections. Les titres comme 'Produits similaires', 'Avis clients' et 'Souvent achetés ensemble' doivent être stylisés en texte normal ou au plus en H3, car ce sont des éléments de navigation, pas de la structure de contenu.",
          },
          {
            type: "tip",
            text: "Utilisez le rapport 'H1' de Screaming Frog pour trouver les pages sans H1, avec des H1 dupliqués, ou dont les H1 ne correspondent pas au title de la page. Sur la plupart des boutiques, cela fait remonter 30 à 40 % de pages avec au moins un problème de titre. Corrigez d'abord les catégories et les pages produit les plus importantes — elles ont le plus d'impact sur le classement.",
          },
        ],
      },
      {
        id: "thin-content",
        title: "Contenu mince : quand plus de pages signifie moins de classements",
        blocks: [
          {
            type: "p",
            text: "Une page avec moins de 200 mots de contenu réel est mince. Ce n'est pas toujours un problème. Une page produit pour un article basique avec une image claire, des specs précises et de bonnes évaluations peut très bien se positionner avec peu de texte. Mais à grande échelle, sur des centaines ou milliers de pages produit, le contenu mince dégrade les signaux de qualité au niveau du domaine.",
          },
          {
            type: "p",
            text: "Les algorithmes de qualité de Google évaluent les sites de manière holistique. Si 60 % de vos pages indexées sont des pages produit minces sans descriptions, avec des titres dupliqués et aucun avis, cela tire vers le bas la qualité perçue de l'ensemble du domaine, y compris vos pages de catégorie bien optimisées. La solution pour les grands catalogues n'est pas d'écrire des descriptions uniques pour 3 000 produits du jour au lendemain. C'est de décider quelles pages méritent d'être indexées.",
          },
          {
            type: "callout",
            title: "L'approche pratique du contenu mince à grande échelle",
            text: "Pour les produits avec moins de 50 mots de contenu unique et aucun avis : ajoutez une balise noindex et supprimez-les de votre sitemap. Ils ne contribuent en rien au trafic organique et nuisent activement aux signaux de qualité du domaine. Concentrez l'investissement contenu sur les 20 % de produits qui génèrent 80 % du trafic des pages de catégorie. Mesurez l'impact sur 90 jours dans GSC.",
          },
          {
            type: "p",
            text: "Pour les produits intermédiaires (méritant d'être indexés mais actuellement trop minces), un template structuré fonctionne mieux que d'essayer de rédiger des descriptions entièrement personnalisées. Un format cohérent couvrant : ce que c'est, à qui c'est destiné, les dimensions ou spécifications clés, les instructions d'entretien ou la compatibilité, et un argument de vente différenciant. Trois à quatre phrases par section. Cela transforme une page produit à 0 mots en une page à 150 mots qui passe le seuil de qualité de Google.",
          },
        ],
      },
      {
        id: "internal-linking",
        title: "Maillage interne : comment le PageRank circule dans votre site",
        blocks: [
          {
            type: "p",
            text: "Le maillage interne est le vecteur par lequel le PageRank circule dans votre site. Les pages de catégorie doivent pointer vers les produits. Les produits doivent renvoyer vers leur catégorie. Les articles de blog doivent pointer vers les pages catégorie ou produit qu'ils mentionnent. Si un article sur 'comment choisir des chaussures de running' ne pointe pas vers votre catégorie chaussures de running, cet article génère du trafic sans distribuer son link equity nulle part d'utile.",
          },
          {
            type: "p",
            text: "La plupart des sites e-commerce ont un maillage produit-vers-catégorie correct dans le fil d'Ariane. Les lacunes sont presque toujours : les pages de catégorie qui ne pointent pas vers les sous-catégories, les articles de blog qui ne pointent nulle part, et les pages produit sans liens d'ancre 'produits similaires', seulement des liens image sans signal de mot-clé.",
          },
          {
            type: "tip",
            text: "Lancez Screaming Frog sur l'intégralité de votre site et utilisez le rapport 'Inlinks' pour trouver les pages avec très peu de liens internes entrants. Ce sont des pages orphelines ou quasi-orphelines. Google les voit rarement, les crawle peu fréquemment et les positionne mal même si le contenu est bon. Ajoutez-les à des pages de catégorie ou articles de blog pertinents avec un texte d'ancre descriptif.",
          },
          {
            type: "list",
            items: [
              "Pages de catégorie : lien vers au moins 3–5 sous-catégories pertinentes si elles existent, et vers 3–5 produits mis en avant avec un texte d'ancre riche en mots-clés",
              "Pages produit : lien de fil d'Ariane vers la catégorie (obligatoire), 3–5 produits liés avec un texte d'ancre descriptif (pas 'voir similaires')",
              "Articles de blog : identifier les 1–3 pages produit ou catégorie les plus pertinentes et les lier naturellement dans le corps du texte avec un texte d'ancre spécifique",
              "Page d'accueil : lier vos 5–8 meilleures pages de catégorie avec un texte d'ancre exact-match ou near-match, car c'est la page à plus fort PageRank de tout le site",
            ],
          },
        ],
      },
      {
        id: "duplicate-titles-meta",
        title: "Balises title et meta descriptions dupliquées",
        blocks: [
          {
            type: "p",
            text: "Chaque page de votre site a besoin d'un title tag unique et d'une meta description unique. C'est l'une des exigences SEO les plus élémentaires et l'une des plus fréquemment violées sur les sites e-commerce. La cause est presque toujours structurelle : les pages de filtre héritent du titre de la catégorie, les pages de résultats de recherche partagent un titre en template, et la pagination crée des variantes 'Page 2', 'Page 3' qui ont toutes le même titre que la page 1.",
          },
          {
            type: "p",
            text: "Des title tags dupliqués indiquent à Google que les pages ont le même contenu et le même objectif. Google va souvent canonicaliser une version arbitrairement, pas nécessairement celle que vous souhaitez. Le résultat est un comportement de classement imprévisible et un link equity fragmenté. Pour les pages qui doivent être indexées, les titres uniques sont non négociables.",
          },
          {
            type: "callout",
            title: "Trouver les doublons rapidement",
            text: "Le rapport 'Page Titles' de Screaming Frog a un filtre 'Duplicate' intégré. Il faut 5 minutes pour l'exécuter et il fait remonter chaque titre dupliqué sur le site. Le rapport Améliorations HTML de Google Search Console détecte beaucoup des mêmes problèmes. Croisez les deux. Faites particulièrement attention aux quasi-doublons : des titres identiques à l'exception d'un numéro de page ou d'un paramètre de filtre ajouté à la fin.",
          },
          {
            type: "checklist",
            items: [
              "Lancer Screaming Frog et filtrer le rapport de titres par 'Duplicate'",
              "Vérifier les améliorations HTML de GSC pour les titres et meta descriptions en double",
              "S'assurer que les pages paginées ont des titres uniques (ex. 'Chaussures Running Femme - Page 2 | Marque') ou utiliser noindex sur les pages 2+",
              "S'assurer que les URLs de filtre ont soit des titres uniques, soit sont canonicalisées / noindexées",
              "Vérifier que les variantes produit ont des balises canonical pour éviter la concurrence avec l'URL produit principale sur le titre",
              "Après correction, surveiller GSC sur 60–90 jours pour les améliorations en impressions et position moyenne",
            ],
          },
        ],
      },
    ],
    nav: {
      prev: {
        href: "/guides/technical-analysis",
        category: "Research & Ideation",
        title: "Technical Analysis",
      },
      next: {
        href: "/guides/off-page-audit",
        category: "Research & Ideation",
        title: "Off-Page Audit",
      },
    },
  },

  es: {
    sections: [
      {
        id: "category-pages",
        title: "Páginas de categoría: las páginas que realmente importan para el SEO",
        blocks: [
          {
            type: "p",
            text: "La mayoría de auditorías de SEO para ecommerce se centran en las páginas de producto. Esa es la prioridad equivocada. Las páginas de categoría son las que posicionan para los términos de alto volumen y alta intención de compra que realmente mueven ingresos: 'zapatillas running mujer', 'sofá de cuero', 'portátil gaming menos de 1000€'. Una página de categoría bien optimizada vale más que 50 páginas de producto bien optimizadas.",
          },
          {
            type: "p",
            text: "El estado típico de una página de categoría en una tienda descuidada: sin H1, un title tag genérico sacado del nombre de categoría sin modificador de keyword, cero contenido más allá de la rejilla de productos, y una meta descripción que dice algo como 'Compra nuestra selección de zapatos'. Google no tiene nada con lo que trabajar. Estas páginas o no posicionan o posicionan mal para cualquier término competitivo.",
          },
          {
            type: "callout",
            title: "La checklist de auditoría de páginas de categoría",
            text: "Cada página de categoría necesita: un H1 único con la keyword principal, 150–300 palabras de contenido introductorio genuino colocado por encima de la rejilla de productos (no debajo, porque Google a menudo deja de leer en el pliegue en páginas paginadas), un title tag único con la keyword principal y un modificador (ej. 'Zapatillas Running Mujer | Envío Gratis y Devoluciones'), y una meta descripción que diferencie la página de la competencia.",
          },
          {
            type: "p",
            text: "El contenido introductorio no es relleno. Debe responder las preguntas que un comprador primerizo en esta categoría realmente tiene: qué buscar al comprar, cómo elegir entre subcategorías, qué hace diferente tu selección. Si escribes 200 palabras de texto genérico relleno de keywords, Google lo tratará como contenido delgado. Si escribes 200 palabras que ayudan de verdad a los compradores, Google trata la página como genuinamente útil. La diferencia en posicionamiento es real.",
          },
          {
            type: "tip",
            text: "Revisa tus páginas de categoría en los datos de rendimiento de Ahrefs o Google Search Console. Ordena por impresiones, no por clics. Las páginas con muchas impresiones y CTR bajo suelen tener title tags débiles — aparecen en resultados pero no atraen clics. Reescribir el title tag y la meta descripción es a menudo la ganancia más rápida en una auditoría on-page.",
          },
        ],
      },
      {
        id: "product-page-audit",
        title: "Auditoría de páginas de producto: los fundamentos bien hechos",
        blocks: [
          {
            type: "p",
            text: "El SEO de páginas de producto tiene cuatro componentes que están constantemente mal en la mayoría de tiendas: el title tag, la descripción, el H1 y el texto alternativo de las imágenes. Hacerlos bien en cada página de producto no es un trabajo glamuroso. También es lo que más directamente separa las tiendas que posicionan de las que no.",
          },
          {
            type: "list",
            items: [
              "Title tag: [Nombre del producto] + [Atributo clave] + [Marca], menos de 60 caracteres. Evita títulos genéricos como 'Zapatilla Azul | Nuestra Tienda'. Prefiere 'Nike Air Zoom Pegasus 41 | Zapatilla Running Hombre'.",
              "Descripción: escríbela tú mismo. Los textos del fabricante los usa cada revendedor en internet. Google los identifica y filtra tu página al índice suplementario. Tu descripción debe cubrir el ajuste, el material, el caso de uso y todo lo que las fotos del producto no muestran.",
              "H1: el nombre del producto, exactamente como lo buscaría un cliente. Un H1 por página. No uses el H1 para títulos decorativos como 'También te puede gustar'.",
              "Texto alternativo de imágenes: nombre del producto + atributo clave. No 'imagen1.jpg'. No 'foto de producto'. Si la imagen muestra un abrigo de lana azul marino, el alt text es 'Abrigo de Lana Azul Marino, Vista Frontal'.",
            ],
          },
          {
            type: "p",
            text: "Las reseñas merecen mención especial. Si tienes reseñas en páginas de producto, necesitas el schema AggregateRating. Sin él, tus estrellas de valoración son invisibles para Google y no aparecerán en los resultados de búsqueda. Con él, tu listado destaca frente a competidores sin estrellas. Usa el Rich Results Test de Google en cualquier página de producto para verificar que el schema es válido.",
          },
        ],
      },
      {
        id: "heading-hierarchy",
        title: "Jerarquía de encabezados: un H1, usado una vez, usado correctamente",
        blocks: [
          {
            type: "p",
            text: "La jerarquía de encabezados suena trivial. En sitios de ecommerce reales está casi siempre mal. El patrón más común: el nombre del producto o categoría está en un H2 porque un desarrollador lo estilizó así, secciones decorativas como 'También te puede gustar' usan H2, y la página termina con múltiples H1 o ninguno.",
          },
          {
            type: "p",
            text: "La regla es sencilla: un H1 por página, con la keyword principal, coincidiendo con lo que un usuario escribiría en Google. Los H2 son para secciones de contenido principal como especificaciones, información de tallas, materiales y FAQ. Los H3 son para puntos de apoyo dentro de esas secciones. Encabezados como 'Productos relacionados', 'Reseñas de clientes' y 'Comprados juntos frecuentemente' deben estilizarse como texto normal o como máximo H3, ya que son elementos de navegación, no estructura de contenido.",
          },
          {
            type: "tip",
            text: "Usa el informe 'H1' de Screaming Frog para encontrar páginas sin H1, con H1 duplicados o con H1 que no coinciden con el title de la página. En la mayoría de tiendas esto saca a la luz un 30–40% de páginas con al menos un problema de encabezado. Corrige primero las categorías y páginas de producto más importantes, ya que son las que tienen más impacto en el posicionamiento.",
          },
        ],
      },
      {
        id: "thin-content",
        title: "Contenido delgado: cuando más páginas significa menos posicionamiento",
        blocks: [
          {
            type: "p",
            text: "Una página con menos de 200 palabras de contenido real es delgada. No siempre es un problema. Una página de producto para un artículo básico con una imagen clara, especificaciones precisas y buenas reseñas puede posicionar bien con poco texto. Pero a gran escala, en cientos o miles de páginas de producto, el contenido delgado degrada las señales de calidad a nivel de dominio.",
          },
          {
            type: "p",
            text: "Los algoritmos de calidad de Google evalúan los sitios de forma holística. Si el 60% de tus páginas indexadas son páginas de producto delgadas sin descripciones, con títulos duplicados y sin reseñas, esto arrastra hacia abajo la calidad percibida del dominio completo, incluyendo tus páginas de categoría bien optimizadas. La solución para catálogos grandes no es escribir descripciones únicas para 3.000 productos de la noche a la mañana. Es decidir qué páginas merecen estar indexadas.",
          },
          {
            type: "callout",
            title: "El enfoque práctico para el contenido delgado a escala",
            text: "Para productos con menos de 50 palabras de contenido único y sin reseñas: añade una etiqueta noindex y elimínalos de tu sitemap. No contribuyen en nada al tráfico orgánico y dañan activamente las señales de calidad del dominio. Concentra la inversión en contenido en el 20% de productos que generan el 80% del tráfico de páginas de categoría. Mide el impacto durante 90 días en GSC.",
          },
          {
            type: "p",
            text: "Para productos intermedios (que merecen estar indexados pero están delgados), una plantilla estructurada funciona mejor que intentar escribir descripciones completamente personalizadas. Un formato consistente cubriendo: qué es, para quién es, dimensiones o especificaciones clave, instrucciones de cuidado o compatibilidad, y un punto de venta diferenciador. Tres o cuatro frases por sección. Eso convierte una página de producto con 0 palabras en una página de 150 palabras que pasa el umbral de calidad de Google.",
          },
        ],
      },
      {
        id: "internal-linking",
        title: "Enlazado interno: cómo fluye el PageRank por tu sitio",
        blocks: [
          {
            type: "p",
            text: "El enlazado interno es cómo fluye el PageRank a través de tu sitio. Las páginas de categoría deben enlazar a productos. Los productos deben enlazar de vuelta a su categoría. Los artículos de blog deben enlazar a las páginas de categoría o producto que mencionan. Si un artículo sobre 'cómo elegir zapatillas de running' no enlaza a tu categoría de zapatillas de running, ese artículo está generando tráfico sin distribuir su link equity a ningún lugar útil.",
          },
          {
            type: "p",
            text: "La mayoría de tiendas de ecommerce tienen un enlazado producto-a-categoría razonable en el breadcrumb. Las brechas son casi siempre: páginas de categoría que no enlazan a subcategorías, artículos de blog que no enlazan a nada, y páginas de producto sin enlaces de texto ancla a 'productos relacionados', solo enlaces de imagen que no transmiten señal de keyword.",
          },
          {
            type: "tip",
            text: "Ejecuta Screaming Frog en todo tu sitio y usa el informe 'Inlinks' para encontrar páginas con muy pocos enlaces internos apuntando a ellas. Son páginas huérfanas o casi huérfanas. Google las ve raramente, las rastrea con poca frecuencia y las posiciona mal aunque el contenido sea bueno. Añádelas a páginas de categoría o artículos de blog relevantes con texto ancla descriptivo.",
          },
          {
            type: "list",
            items: [
              "Páginas de categoría: enlazar a al menos 3–5 subcategorías relevantes si existen, y a 3–5 productos destacados con texto ancla rico en keywords",
              "Páginas de producto: enlace breadcrumb a la categoría (obligatorio), 3–5 productos relacionados con texto ancla descriptivo (no 'ver similares')",
              "Artículos de blog: identificar las 1–3 páginas de producto o categoría más relevantes y enlazarlas de forma natural en el cuerpo del texto con texto ancla específico",
              "Página de inicio: enlazar a tus 5–8 mejores páginas de categoría con texto ancla exact-match o near-match, ya que es la página con más PageRank de todo el sitio",
            ],
          },
        ],
      },
      {
        id: "duplicate-titles-meta",
        title: "Title tags y meta descripciones duplicadas",
        blocks: [
          {
            type: "p",
            text: "Cada página de tu tienda necesita un title tag único y una meta descripción única. Este es uno de los requisitos SEO más básicos y uno de los más habitualmente incumplidos en tiendas de ecommerce. La causa es casi siempre estructural: las páginas de filtro heredan el título de la categoría, las páginas de resultados de búsqueda comparten un título de plantilla, y la paginación crea variantes 'Página 2', 'Página 3' que tienen todas el mismo título que la página 1.",
          },
          {
            type: "p",
            text: "Los title tags duplicados le dicen a Google que las páginas tienen el mismo contenido y propósito. Google a menudo canonicalizará una versión arbitrariamente, y no necesariamente la que tú quieres. El resultado es un comportamiento de posicionamiento impredecible y link equity fragmentada. Para páginas que deben estar indexadas, los títulos únicos son innegociables.",
          },
          {
            type: "callout",
            title: "Encontrar duplicados rápidamente",
            text: "El informe 'Page Titles' de Screaming Frog tiene un filtro 'Duplicate' integrado. Tarda 5 minutos en ejecutarse y muestra todos los títulos duplicados del sitio. El informe de mejoras HTML de Google Search Console detecta muchos de los mismos problemas. Compara ambos. Presta especial atención a los casi-duplicados: títulos idénticos excepto por un número de página o un parámetro de filtro añadido al final.",
          },
          {
            type: "checklist",
            items: [
              "Ejecutar Screaming Frog y filtrar el informe de títulos por 'Duplicate'",
              "Revisar las mejoras HTML de GSC en busca de títulos y meta descripciones duplicados",
              "Asegurarse de que las páginas paginadas tienen títulos únicos (ej. 'Zapatillas Running Mujer - Página 2 | Marca') o usar noindex en páginas 2+",
              "Asegurarse de que las URLs de filtro tienen títulos únicos o están canonicalizadas / noindexadas",
              "Verificar que las variantes de producto tienen etiquetas canonical para no competir con la URL de producto principal en el título",
              "Tras corregir, monitorizar GSC durante 60–90 días en busca de mejoras en impresiones y posición media",
            ],
          },
        ],
      },
    ],
    nav: {
      prev: {
        href: "/guides/technical-analysis",
        category: "Research & Ideation",
        title: "Technical Analysis",
      },
      next: {
        href: "/guides/off-page-audit",
        category: "Research & Ideation",
        title: "Off-Page Audit",
      },
    },
  },

  it: {
    sections: [
      {
        id: "category-pages",
        title: "Pagine categoria: le pagine che contano davvero per il SEO",
        blocks: [
          {
            type: "p",
            text: "La maggior parte degli audit SEO per ecommerce si concentra sulle pagine prodotto. È la priorità sbagliata. Le pagine categoria si posizionano per i termini ad alto volume e alta intenzione d'acquisto che generano realmente fatturato — 'scarpe running donna', 'divano in pelle', 'laptop gaming sotto i 1000€'. Una pagina categoria ben ottimizzata vale più di 50 pagine prodotto ben ottimizzate.",
          },
          {
            type: "p",
            text: "Lo stato tipico di una pagina categoria in un negozio trascurato: nessun H1, un title tag generico preso dal nome della categoria senza modificatore di keyword, zero contenuto al di là della griglia di prodotti, e una meta description come 'Acquista la nostra selezione di scarpe'. Google non ha nulla con cui lavorare. Queste pagine o non si posizionano, o si posizionano male per qualsiasi termine competitivo.",
          },
          {
            type: "callout",
            title: "La checklist per l'audit delle pagine categoria",
            text: "Ogni pagina categoria deve avere: un H1 unico contenente la keyword principale, 150–300 parole di contenuto introduttivo genuino posto sopra la griglia di prodotti (non sotto — Google spesso smette di leggere alla piega nelle pagine paginate), un title tag unico con la keyword principale e un modificatore (es. 'Scarpe Running Donna | Spedizione Gratuita e Resi'), e una meta description che distingua la pagina dai concorrenti.",
          },
          {
            type: "p",
            text: "Il contenuto introduttivo non è riempitivo. Deve rispondere alle domande che un acquirente alle prime armi in questa categoria si pone davvero: cosa considerare nell'acquisto, come scegliere tra le sottocategorie, cosa distingue la tua selezione. Se scrivi 200 parole di testo generico ricco di keyword, Google lo tratterà come contenuto sottile. Se scrivi 200 parole che aiutano davvero gli acquirenti, Google tratta la pagina come genuinamente utile. La differenza nel posizionamento è reale.",
          },
          {
            type: "tip",
            text: "Analizza le tue pagine categoria nei dati di performance di Ahrefs o di Google Search Console. Ordina per impressioni, non per clic. Le pagine con molte impressioni e CTR basso hanno solitamente title tag deboli — appaiono nei risultati ma non attraggono clic. Riscrivere il title tag e la meta description è spesso il guadagno più veloce in un audit on-page.",
          },
        ],
      },
      {
        id: "product-page-audit",
        title: "Audit delle pagine prodotto: i dettagli che separano il buono dall'ottimo",
        blocks: [
          {
            type: "p",
            text: "Il SEO delle pagine prodotto ha quattro componenti sistematicamente sbagliati nella maggior parte dei negozi: il title tag, la descrizione, l'H1 e il testo alternativo delle immagini. Farli bene su ogni pagina prodotto non è un lavoro glamour. È anche ciò che separa più direttamente i negozi che si posizionano da quelli che non lo fanno.",
          },
          {
            type: "list",
            items: [
              "Title tag: [Nome prodotto] + [Attributo chiave] + [Marca] — sotto i 60 caratteri. Evita titoli generici come 'Sneaker Blu | Il Nostro Negozio'. Preferisci 'Nike Air Zoom Pegasus 41 | Scarpa Running Uomo'.",
              "Descrizione: scrivila tu stesso. I testi del produttore sono usati da ogni rivenditore su internet. Google li identifica e filtra la tua pagina verso l'indice supplementare. La tua descrizione deve coprire la vestibilità, il materiale, il caso d'uso e tutto ciò che le foto del prodotto non mostrano.",
              "H1: il nome del prodotto, esattamente come lo cercherebbe un cliente. Un H1 per pagina. Non usare l'H1 per intestazioni decorative come 'Potrebbe interessarti anche'.",
              "Testo alternativo delle immagini: nome del prodotto + attributo chiave. Non 'immagine1.jpg'. Non 'foto prodotto'. Se l'immagine mostra un cappotto di lana blu navy, l'alt text è 'Cappotto di Lana Blu Navy — Vista Frontale'.",
            ],
          },
          {
            type: "p",
            text: "Le recensioni meritano una menzione speciale. Se hai recensioni sulle pagine prodotto, hai bisogno dello schema AggregateRating. Senza di esso, le tue stelle di valutazione sono invisibili per Google e non appariranno nei risultati di ricerca. Con esso, il tuo annuncio si distingue rispetto ai concorrenti che non hanno le stelle. Usa il Rich Results Test di Google su qualsiasi pagina prodotto per verificare che lo schema sia valido.",
          },
        ],
      },
      {
        id: "heading-hierarchy",
        title: "Gerarchia delle intestazioni: un H1, usato una volta, usato correttamente",
        blocks: [
          {
            type: "p",
            text: "La gerarchia delle intestazioni sembra banale. Sui siti ecommerce reali è quasi sempre sbagliata. Il pattern più comune: il nome del prodotto o della categoria è in un H2 perché uno sviluppatore lo ha stilizzato così, le sezioni decorative come 'Potrebbe piacerti anche' usano H2, e la pagina finisce con più H1 o nessuno.",
          },
          {
            type: "p",
            text: "La regola è semplice: un solo H1 per pagina, contenente la keyword principale, corrispondente a ciò che un utente digiterebbe su Google. Gli H2 sono per le sezioni di contenuto principale — specifiche, informazioni sulle taglie, materiali, FAQ. Gli H3 sono per i punti di supporto all'interno di quelle sezioni. Intestazioni come 'Prodotti correlati', 'Recensioni clienti' e 'Spesso acquistati insieme' devono essere stilizzate come testo normale o al massimo come H3 — sono elementi di navigazione, non struttura di contenuto.",
          },
          {
            type: "tip",
            text: "Usa il report 'H1' di Screaming Frog per trovare le pagine senza H1, con H1 duplicati, o con H1 che non corrispondono al title della pagina. Sulla maggior parte dei negozi questo fa emergere il 30–40% delle pagine con almeno un problema di intestazione. Correggi prima le categorie e le pagine prodotto più importanti — hanno il maggiore impatto sul posizionamento.",
          },
        ],
      },
      {
        id: "thin-content",
        title: "Contenuto sottile: quando più pagine significa posizionamenti peggiori",
        blocks: [
          {
            type: "p",
            text: "Una pagina con meno di 200 parole di contenuto reale è sottile. Non è sempre un problema — una pagina prodotto per un articolo basico con un'immagine chiara, specifiche accurate e buone recensioni può posizionarsi bene anche con poco testo. Ma su larga scala, su centinaia o migliaia di pagine prodotto, il contenuto sottile degrada i segnali di qualità a livello di dominio.",
          },
          {
            type: "p",
            text: "Gli algoritmi di qualità di Google valutano i siti in modo olistico. Se il 60% delle tue pagine indicizzate sono pagine prodotto sottili senza descrizioni, con titoli duplicati e nessuna recensione, questo abbassa la qualità percepita dell'intero dominio — comprese le tue pagine categoria ben ottimizzate. La soluzione per i grandi cataloghi non è scrivere descrizioni uniche per 3.000 prodotti dall'oggi al domani. È decidere quali pagine meritano di essere indicizzate.",
          },
          {
            type: "callout",
            title: "L'approccio pratico al contenuto sottile su larga scala",
            text: "Per i prodotti con meno di 50 parole di contenuto unico e nessuna recensione: aggiungi un meta tag noindex e rimuovili dalla sitemap. Non contribuiscono al traffico organico e danneggiano attivamente i segnali di qualità del dominio. Concentra l'investimento nei contenuti sul 20% dei prodotti che generano l'80% del traffico delle pagine categoria. Misura l'impatto su 90 giorni in GSC.",
          },
          {
            type: "p",
            text: "Per i prodotti intermedi — che meritano di essere indicizzati ma attualmente sottili — un template strutturato funziona meglio che cercare di scrivere descrizioni completamente personalizzate. Un formato coerente che copre: cos'è, per chi è, dimensioni o specifiche chiave, istruzioni per la cura o compatibilità, e un punto di vendita differenziante. Da tre a quattro frasi per sezione. Questo trasforma una pagina prodotto a 0 parole in una pagina da 150 parole che supera la soglia di qualità di Google.",
          },
        ],
      },
      {
        id: "internal-linking",
        title: "Link interni: l'architettura che fa fluire i posizionamenti",
        blocks: [
          {
            type: "p",
            text: "I link interni sono il modo in cui il PageRank scorre attraverso il tuo sito. Le pagine categoria devono linkare ai prodotti. I prodotti devono linkare alla loro categoria. Gli articoli del blog devono linkare alle pagine categoria o prodotto che menzionano. Se un articolo su 'come scegliere le scarpe running' non linka alla tua categoria scarpe running, quell'articolo sta generando traffico senza distribuire il suo link equity da nessuna parte utile.",
          },
          {
            type: "p",
            text: "La maggior parte dei siti ecommerce ha un linking prodotto-verso-categoria ragionevole nel breadcrumb. Le lacune sono quasi sempre: pagine categoria che non linkano alle sottocategorie, articoli del blog che non linkano a niente, e pagine prodotto senza link di testo ancorato a 'prodotti correlati' — solo link immagine che non trasmettono segnale di keyword.",
          },
          {
            type: "tip",
            text: "Esegui Screaming Frog sull'intero sito e usa il report 'Inlinks' per trovare le pagine con pochissimi link interni in entrata. Sono pagine orfane o quasi orfane — Google le vede raramente, le scansiona con poca frequenza e le posiziona male anche se il contenuto è buono. Aggiungile a pagine categoria o articoli del blog pertinenti con testo di ancoraggio descrittivo.",
          },
          {
            type: "list",
            items: [
              "Pagine categoria: link ad almeno 3–5 sottocategorie pertinenti se esistono, e a 3–5 prodotti in evidenza con testo di ancoraggio ricco di keyword",
              "Pagine prodotto: link breadcrumb alla categoria (obbligatorio), 3–5 prodotti correlati con testo di ancoraggio descrittivo (non 'vedi simili')",
              "Articoli del blog: identificare le 1–3 pagine prodotto o categoria più pertinenti e linkarle naturalmente nel corpo del testo con testo di ancoraggio specifico",
              "Homepage: linkare le tue 5–8 migliori pagine categoria con testo di ancoraggio exact-match o near-match — è la pagina con più PageRank dell'intero sito",
            ],
          },
        ],
      },
      {
        id: "duplicate-titles-meta",
        title: "Title tag e meta description duplicati",
        blocks: [
          {
            type: "p",
            text: "Ogni pagina del tuo sito ha bisogno di un title tag unico e di una meta description unica. Questo è uno dei requisiti SEO più basilari e uno dei più frequentemente violati sui siti ecommerce. La causa è quasi sempre strutturale: le pagine di filtro ereditano il titolo della categoria, le pagine di risultati di ricerca condividono un titolo template, e la paginazione crea varianti 'Pagina 2', 'Pagina 3' che hanno tutte lo stesso titolo della pagina 1.",
          },
          {
            type: "p",
            text: "I title tag duplicati dicono a Google che le pagine hanno lo stesso contenuto e lo stesso scopo. Google spesso canonicalizzerà una versione arbitrariamente — non necessariamente quella che vuoi tu. Il risultato è un comportamento di posizionamento imprevedibile e link equity frammentato. Per le pagine che devono essere indicizzate, i titoli unici non sono negoziabili.",
          },
          {
            type: "callout",
            title: "Trovare i duplicati velocemente",
            text: "Il report 'Page Titles' di Screaming Frog ha un filtro 'Duplicate' integrato — ci vogliono 5 minuti per eseguirlo e fa emergere ogni titolo duplicato sul sito. Il report miglioramenti HTML di Google Search Console individua molti degli stessi problemi. Incrocia entrambi. Presta particolare attenzione ai quasi-duplicati: titoli identici eccetto per un numero di pagina o un parametro di filtro aggiunto alla fine.",
          },
          {
            type: "checklist",
            items: [
              "Eseguire Screaming Frog e filtrare il report dei titoli per 'Duplicate'",
              "Controllare i miglioramenti HTML di GSC per title tag e meta description duplicati",
              "Assicurarsi che le pagine paginate abbiano titoli unici (es. 'Scarpe Running Donna — Pagina 2 | Marca') o usare noindex sulle pagine 2+",
              "Assicurarsi che gli URL di filtro abbiano titoli unici o siano canonicalizzati / noindexati",
              "Verificare che le varianti prodotto abbiano tag canonical per non competere con l'URL prodotto principale sul titolo",
              "Dopo le correzioni, monitorare GSC per 60–90 giorni per miglioramenti in impressioni e posizione media",
            ],
          },
        ],
      },
    ],
    nav: {
      prev: {
        href: "/guides/technical-analysis",
        category: "Research & Ideation",
        title: "Technical Analysis",
      },
      next: {
        href: "/guides/off-page-audit",
        category: "Research & Ideation",
        title: "Off-Page Audit",
      },
    },
  },

  nl: {
    sections: [
      {
        id: "category-pages",
        title: "Categoriepagina's: je meest waardevolle ranking-assets",
        blocks: [
          {
            type: "p",
            text: "De meeste ecommerce SEO-audits richten zich op productpagina's. Dat is de verkeerde prioriteit. Categoriepagina's ranken voor de zoektermen met hoog volume en hoge koopintentie die werkelijk omzet genereren — 'dames hardloopschoenen', 'leren bank', 'gaming laptop onder 1000 euro'. Een goed geoptimaliseerde categoriepagina is meer waard dan 50 goed geoptimaliseerde productpagina's.",
          },
          {
            type: "p",
            text: "De typische staat van een categoriepagina op een verwaarloosde webshop: geen H1, een generieke title tag uit de categorienaam zonder keyword-modifier, nul bodycontent buiten het productenraster, en een metabeschrijving als 'Shop ons assortiment schoenen'. Google heeft niets om mee te werken. Deze pagina's ranken óf niet, óf slecht voor competitieve termen.",
          },
          {
            type: "callout",
            title: "De auditchecklist voor categoriepagina's",
            text: "Elke categoriepagina heeft nodig: een unieke H1 met het primaire zoekwoord, 150–300 woorden echte introductiecontent boven het productenraster (niet eronder — Google stopt op gepagineerde pagina's vaak met lezen bij de vouw), een unieke title tag met het primaire zoekwoord en een modifier (bijv. 'Dames Hardloopschoenen | Gratis Verzending & Retour'), en een metabeschrijving die de pagina onderscheidt van concurrenten.",
          },
          {
            type: "p",
            text: "De introductiestekst is geen opvulling. Die moet de vragen beantwoorden die een eerste­koper in deze categorie écht heeft: waar op te letten bij het kopen, hoe te kiezen tussen subcategorieën, wat jouw aanbod onderscheidt. Schrijf je 200 woorden met zoekwoorden volgestopte standaardtekst, dan behandelt Google het als dunne content. Schrijf je 200 woorden die shoppers echt helpen, dan behandelt Google de pagina als genuien nuttig. Het rankingsverschil is tastbaar.",
          },
          {
            type: "tip",
            text: "Bekijk je categoriepagina's in de prestatiedata van Ahrefs of Google Search Console. Sorteer op vertoningen, niet op klikken. Pagina's met veel vertoningen en een lage CTR hebben doorgaans zwakke title tags — ze verschijnen in resultaten maar trekken geen klikken. Het herschrijven van de title tag en metabeschrijving is vaak de snelste winst in een on-page audit.",
          },
        ],
      },
      {
        id: "product-page-audit",
        title: "Audit van productpagina's: de details die goed van uitstekend scheiden",
        blocks: [
          {
            type: "p",
            text: "SEO van productpagina's heeft vier onderdelen die op de meeste shops consequent fout gaan: de title tag, de beschrijving, de H1 en de alt-tekst van afbeeldingen. Ze allemaal goed hebben op elke productpagina is geen glamoureus werk. Het is ook hetgeen dat het meest direct onderscheidt of een shop rankt of niet.",
          },
          {
            type: "list",
            items: [
              "Title tag: [Productnaam] + [Kernattribuut] + [Merk] — onder de 60 tekens. Vermijd generieke titels zoals 'Blauwe Sneaker | Onze Shop'. Kies voor 'Nike Air Zoom Pegasus 41 | Heren Hardloopschoen'.",
              "Beschrijving: schrijf die zelf. Fabrikants­teksten worden door elke wederverkoper op internet gebruikt. Google herkent dat en filtert je pagina naar de aanvullende index. Jouw beschrijving moet pasvorm, materiaal, gebruiksgeval en alles wat de productfoto's niet tonen behandelen.",
              "H1: de productnaam, precies zoals een klant erop zou zoeken. Één H1 per pagina. Gebruik de H1 niet voor decoratieve koppen zoals 'Dit vind je misschien ook leuk'.",
              "Alt-tekst van afbeeldingen: productnaam + kernattribuut. Niet 'afbeelding1.jpg'. Niet 'productfoto'. Als de afbeelding een marineblauw wollen jas toont, is de alt-tekst 'Marineblauw Wollen Jas — Vooraanzicht'.",
            ],
          },
          {
            type: "p",
            text: "Reviews verdienen speciale aandacht. Als je reviews op productpagina's hebt, heb je AggregateRating-schema nodig. Zonder dat zijn je sterbeoordelingen onzichtbaar voor Google en verschijnen ze niet in zoekresultaten. Met dat schema steekt je vermelding uit ten opzichte van concurrenten zonder sterren. Gebruik Googles Rich Results Test op elke productpagina om te verifiëren dat het schema geldig is.",
          },
        ],
      },
      {
        id: "heading-hierarchy",
        title: "Koppenstructuur: één H1, één keer gebruikt, correct gebruikt",
        blocks: [
          {
            type: "p",
            text: "Koppenstructuur klinkt triviaal. Op echte ecommerce­sites klopt die bijna altijd niet. Het meest voorkomende patroon: de product- of categorienaam staat in een H2 omdat een developer het zo heeft opgemaakt, decoratieve secties zoals 'Dit vind je misschien ook leuk' gebruiken H2, en de pagina eindigt met meerdere H1's of helemaal geen.",
          },
          {
            type: "p",
            text: "De regel is eenvoudig: één H1 per pagina, met het primaire zoekwoord, overeenkomend met wat een gebruiker in Google zou typen. H2's zijn voor hoofd­inhouds­secties — specificaties, maatinformatie, materialen, FAQ. H3's zijn voor ondersteunende punten binnen die secties. Koppen als 'Gerelateerde producten', 'Klant­beoordelingen' en 'Vaak samen gekocht' horen als gewone tekst of maximaal als H3 opgemaakt te worden — het zijn navigatie­elementen, geen inhoudsstructuur.",
          },
          {
            type: "tip",
            text: "Gebruik het 'H1'-rapport van Screaming Frog om pagina's te vinden zonder H1, met dubbele H1's, of met H1's die niet overeenkomen met de paginatitel. Op de meeste shops levert dit bij 30–40% van de pagina's minstens één kopprobleem op. Pak categorie- en topproductpagina's eerst aan — die hebben de meeste ranking-impact.",
          },
        ],
      },
      {
        id: "thin-content",
        title: "Dunne content: wanneer meer pagina's lagere rankings betekent",
        blocks: [
          {
            type: "p",
            text: "Een pagina met minder dan 200 woorden echte content is dun. Dat is niet altijd een probleem — een productpagina voor een eenvoudig basisproduct met een duidelijke afbeelding, correcte specificaties en solide reviews kan prima ranken met weinig proza. Maar op grote schaal, over honderden of duizenden productpagina's, verslechtert dunne content de kwaliteits­signalen op domein­niveau.",
          },
          {
            type: "p",
            text: "De kwaliteits­algoritmen van Google evalueren sites holistisch. Als 60% van je geïndexeerde pagina's dunne productpagina's zijn zonder beschrijvingen, met dubbele titels en geen reviews, trekt dat de ervaren kwaliteit van het hele domein omlaag — inclusief je goed geoptimaliseerde categorie­pagina's. De oplossing voor grote catalogi is niet om van de ene op de andere dag unieke beschrijvingen te schrijven voor 3.000 producten. Het is beslissen welke pagina's überhaupt geïndexeerd mogen worden.",
          },
          {
            type: "callout",
            title: "De praktische aanpak voor dunne content op schaal",
            text: "Voor producten met minder dan 50 woorden unieke content en geen reviews: voeg een noindex metatag toe en verwijder ze uit je sitemap. Ze dragen niets bij aan organisch verkeer en beschadigen actief de kwaliteits­signalen van het domein. Richt je content­investering op de 20% van de producten die 80% van het categorie­pagina­verkeer genereren. Meet de impact over 90 dagen in GSC.",
          },
          {
            type: "p",
            text: "Voor middenniveau­producten — de indexering waard, maar momenteel dun — werkt een gestructureerd template beter dan volledig maatwerk­beschrijvingen proberen te schrijven. Een consistent formaat dat dekt: wat het is, voor wie het is, sleuteldimensies of specificaties, onderhoudsinstructies of compatibiliteit, en één onderscheidend verkoopargument. Drie tot vier zinnen per sectie. Dat verandert een productpagina van 0 woorden in een pagina van 150 woorden die de kwaliteits­drempel van Google haalt.",
          },
        ],
      },
      {
        id: "internal-linking",
        title: "Interne links: de architectuur die rankings laat stromen",
        blocks: [
          {
            type: "p",
            text: "Interne links zijn de manier waarop PageRank door je site stroomt. Categoriepagina's moeten naar producten linken. Producten moeten terug linken naar hun categorie. Blogartikelen moeten linken naar de categorie- of productpagina's die ze noemen. Als een artikel over 'hoe kies je hardloopschoenen' niet linkt naar je categorie hardloopschoenen, verdient dat artikel verkeer zonder zijn link equity ergens nuttigs te verspreiden.",
          },
          {
            type: "p",
            text: "De meeste ecommerce­sites hebben een redelijke product-naar-categorie­koppeling ingebouwd in de breadcrumb. De hiaten zijn bijna altijd: categorie­pagina's die niet linken naar sub­categorieën, blogartikelen die nergens naar linken, en productpagina's zonder ankertekst­links naar 'gerelateerde producten' — alleen afbeeldingslinks zonder keyword­signaal.",
          },
          {
            type: "tip",
            text: "Draai Screaming Frog over je volledige site en gebruik het 'Inlinks'-rapport om pagina's met zeer weinig interne links naar ze toe te vinden. Dit zijn wees- of bijna-weespagina's — Google ziet ze zelden, crawlt ze weinig en rankt ze slecht ook al is de content goed. Voeg ze toe aan relevante categorie­pagina's of blogartikelen met beschrijvende ankertekst.",
          },
          {
            type: "list",
            items: [
              "Categoriepagina's: link naar minstens 3–5 relevante subcategorieën als die bestaan, en naar 3–5 uitgelichte producten met zoekwoordrijke ankertekst",
              "Productpagina's: breadcrumblink naar de categorie (verplicht), 3–5 gerelateerde producten met beschrijvende ankertekst (niet 'bekijk vergelijkbare')",
              "Blogartikelen: de 1–3 meest relevante product- of categoriepagina's identificeren en ze natuurlijk in de bodytekst linken met specifieke ankertekst",
              "Homepage: linken naar je top 5–8 categoriepagina's met exact-match of near-match ankertekst — dit is de pagina met de meeste PageRank van de hele site",
            ],
          },
        ],
      },
      {
        id: "duplicate-titles-meta",
        title: "Dubbele title tags en metabeschrijvingen",
        blocks: [
          {
            type: "p",
            text: "Elke pagina van je shop heeft een unieke title tag en een unieke metabeschrijving nodig. Dit is een van de meest basale SEO-vereisten en een van de meest geschonden op ecommerce­sites. De oorzaak is bijna altijd structureel: filterpagina's erven de categorietitel, zoekresultaat­pagina's delen een template­titel, en paginering maakt 'Pagina 2'-, 'Pagina 3'-varianten die allemaal dezelfde titel hebben als pagina 1.",
          },
          {
            type: "p",
            text: "Dubbele title tags vertellen Google dat de pagina's dezelfde inhoud en hetzelfde doel hebben. Google zal vaak willekeurig één versie canonicaliseren — niet per se de versie die jij wilt. Het resultaat is onvoorspelbaar rankinggedrag en gesplitste link equity. Voor pagina's die geïndexeerd moeten worden, zijn unieke titels niet onderhandelbaar.",
          },
          {
            type: "callout",
            title: "Snel duplicaten vinden",
            text: "Het 'Page Titles'-rapport van Screaming Frog heeft een ingebouwd 'Duplicate'-filter — het duurt 5 minuten om het uit te voeren en het brengt elke dubbele titel op de site boven. Het HTML-verbeteringen­rapport van Google Search Console pakt veel van dezelfde problemen op. Kruis beide door. Let extra op bijna-duplicaten: titels die identiek zijn op een paginanummer of filterparameter aan het einde na.",
          },
          {
            type: "checklist",
            items: [
              "Screaming Frog uitvoeren en het titelrapport filteren op 'Duplicate'",
              "GSC HTML-verbeteringen controleren op dubbele title tags en metabeschrijvingen",
              "Zorgen dat gepagineerde pagina's unieke titels hebben (bijv. 'Dames Hardloopschoenen — Pagina 2 | Merk') of noindex gebruiken op pagina 2+",
              "Filter-URL's ofwel unieke titels geven ofwel canonicaliseren / noindexeren",
              "Verifiëren dat productvarianten canonical-tags hebben zodat ze niet concurreren met de hoofd-product-URL op titel",
              "Na correcties GSC 60–90 dagen monitoren op verbeteringen in vertoningen en gemiddelde positie",
            ],
          },
        ],
      },
    ],
    nav: {
      prev: {
        href: "/guides/technical-analysis",
        category: "Research & Ideation",
        title: "Technical Analysis",
      },
      next: {
        href: "/guides/off-page-audit",
        category: "Research & Ideation",
        title: "Off-Page Audit",
      },
    },
  },
};
