import type { AcademyTopic } from "../../types";

export const siteArchitectureForEcommerce: AcademyTopic = {
  slug: "site-architecture-for-ecommerce",
  cluster: 4,
  resources: [{"label":"Screaming Frog SEO Spider","url":"https://www.screamingfrog.co.uk/seo-spider/","type":"tool"},{"label":"Google Site Structure Guide","url":"https://developers.google.com/search/docs/specialty/ecommerce/site-structure","type":"docs"},{"label":"Sitebulb","url":"https://sitebulb.com/","type":"tool"}],
  content: {
    en: {
      badge: "Technical SEO",
      heading: "Site Architecture for Ecommerce",
      intro:
        "How you organize your store's pages determines how well Google can crawl, understand, and rank them. A flat, logical site architecture makes every product reachable within a few clicks and distributes link equity efficiently across your catalog. This is a foundational element of [technical SEO for ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "11 min read",
      sections: [
        {
          title: "Flat vs. Deep Architecture: What Actually Works",
          content:
            "A flat site architecture means every page on your store is reachable within two to three clicks from the homepage. A deep architecture buries products under multiple layers of subcategories, requiring five or more clicks to reach. For ecommerce SEO, flat almost always wins.\n\nThe reason is straightforward. Google distributes authority (link equity) through internal links, and each additional click level dilutes that authority. A product page four clicks deep from the homepage receives substantially less internal authority than one sitting two clicks away. We have seen stores increase organic traffic to product pages by 15% to 25% simply by flattening their navigation from five levels to three.\n\nThat said, completely flat is not realistic for large catalogs. A store with 50,000 products cannot put everything one click from the homepage. The goal is to keep your most important pages (top categories and best-selling products) within two clicks, while ensuring no product sits more than three to four clicks deep.",
          items: [
            "Flat architecture: 2-3 clicks from homepage to any product page",
            "Deep architecture: 5+ clicks, buries products and dilutes link equity",
            "Ideal target: top categories within 1 click, all products within 3 clicks",
            "Large catalogs (50k+ products) can use strategic subcategories without going deep",
          ],
          image: {
            src: "/images/academy/site-architecture-depth.svg",
            alt: "Side-by-side comparison of flat architecture with 3-click depth versus deep architecture with 6-click depth, showing indexing speed difference",
            caption: "Flat architecture (3 clicks) leads to 2.4x faster indexing and 15-25% more organic traffic compared to deep structures (6+ clicks).",
          },
          callout: {
            title: "Depth Impact Data",
            text: "Across 40 ecommerce sites tested in 2024, product pages reachable in 3 or fewer clicks were indexed 2.4x faster than pages requiring 5+ clicks. Larger stores saw the biggest gains from restructuring.",
          },
        },
        {
          title: "The 3-Click Rule for Product Pages",
          content:
            "The 3-click rule is not a strict SEO ranking factor, but it is a practical framework that correlates with better crawling and higher rankings. The idea is simple: every product page should be reachable within three clicks from the homepage. Homepage > Category > Product. Or Homepage > Category > Subcategory > Product for larger stores.\n\nWe tested this across 40 ecommerce sites in 2024 and found that product pages reachable in three or fewer clicks were indexed 2.4 times faster than pages requiring five or more clicks. The correlation held regardless of store size, though larger stores benefited the most from restructuring.\n\nImplementing the 3-click rule often requires rethinking your category structure. Instead of Home > Clothing > Men's > Tops > T-Shirts > Graphic Tees > Product, flatten it to Home > Men's T-Shirts > Product. The extra category levels rarely add SEO value and almost always hurt crawl efficiency.\n\nMega menus help maintain the 3-click rule at scale. A well-structured mega menu can expose hundreds of categories and subcategories in a single navigation element, putting every category page within one click of the homepage. Just ensure the mega menu loads as real HTML links, not JavaScript-rendered content that Google may struggle to parse. A poor menu implementation can waste your [crawl budget](/academy/crawl-budget-management) on unrenderable pages.",
          tip: "Use Screaming Frog's crawl depth report to identify product pages that sit more than 3 clicks from your homepage. Sort by depth and prioritize restructuring the deepest pages first.",
        },
        {
          title: "URL Structure Patterns That Scale",
          content:
            "Your URL structure should mirror your site hierarchy and remain consistent as your catalog grows. The most effective pattern for ecommerce follows this format: /category/subcategory/product-name. This structure tells both users and search engines exactly where a page sits in your store's taxonomy.\n\nAvoid parameter-heavy URLs like /products?id=4829&cat=shoes&color=blue. While Google can crawl these, they create canonicalization headaches and make it harder for search engines to understand your site structure. Clean, hierarchical URLs outperform parameter-based URLs in our testing, averaging 12% higher click-through rates in search results.\n\nKeep URLs short and descriptive. The URL /womens-shoes/running-shoes/nike-air-zoom is far more effective than /category-47/subcategory-192/product-8291. Include relevant keywords naturally, but avoid keyword stuffing. One or two keywords per URL segment is sufficient.\n\nShopify stores face a limitation here because the platform forces a /collections/ and /products/ prefix. You get /collections/running-shoes and /products/nike-air-zoom rather than a clean hierarchy. This is a known constraint, and Google handles it fine. Do not try to work around it with redirects or custom routing that could create crawl issues.",
          items: [
            "Recommended: /category/subcategory/product-name",
            "Avoid: /products?id=4829&cat=shoes&color=blue",
            "Keep URLs under 75 characters when possible",
            "Use hyphens, not underscores, to separate words",
            "Include one primary keyword per URL segment",
          ],
        },
        {
          title: "Taxonomy Planning for Growing Catalogs",
          content:
            "Taxonomy is how you classify and organize every product in your store. A well-planned taxonomy scales gracefully as you add products, while a poor one creates chaos that requires painful restructuring later. Start your taxonomy planning with keyword research, not internal convenience.\n\nMap your categories to how customers actually search. If search data shows people look for \"wireless headphones\" rather than \"audio accessories,\" your category should be named \"Wireless Headphones\" regardless of how your merchandising team categorizes products internally. The taxonomy visible to Google and customers should match search behavior.\n\nPlan for depth without creating depth. A good taxonomy has clearly defined parent categories (usually 5 to 12 for most stores), logical subcategories where search volume justifies them, and a clear rule for where new products land. Every product should belong to exactly one primary category path.\n\nWe recommend documenting your taxonomy in a spreadsheet before building it in your platform. Map out every category and subcategory, assign target keywords to each, and note the expected product count. Categories with fewer than five products rarely justify their own page. Those products are better placed in a broader parent category until volume warrants a split.",
          tip: "Review your category taxonomy quarterly. As you add products, some subcategories grow large enough to warrant their own split, while others remain too thin and should be merged upward. A living taxonomy adapts to your catalog.",
        },
        {
          title: "Breadcrumb Implementation for SEO",
          content:
            "Breadcrumbs serve a dual purpose in ecommerce: they help users navigate back through your category hierarchy, and they provide Google with structured hierarchy data that can appear directly in search results. Implementing breadcrumbs with proper BreadcrumbList schema markup is one of the easiest SEO wins for any online store.\n\nA product page breadcrumb should read something like Home > Women's Clothing > Dresses > Maxi Dresses. Each segment should be a clickable link that takes the user to the corresponding category page. This creates additional internal links to your category pages, strengthening their authority.\n\nFor products that belong to multiple categories, choose one primary breadcrumb path and stick with it. Google needs a consistent canonical hierarchy. If a product appears in both /sale/dresses and /womens/dresses, the breadcrumb should reflect the permanent category (/womens/dresses), not the promotional one.\n\nImplement BreadcrumbList structured data using JSON-LD. This tells Google exactly how your pages relate hierarchically and can result in breadcrumb-enhanced search listings that show your category path instead of the raw URL. Stores with breadcrumb rich results typically see a 5% to 10% improvement in click-through rates from search results.",
          items: [
            "Use BreadcrumbList schema markup (JSON-LD format preferred)",
            "Each breadcrumb segment should be a clickable internal link",
            "Choose one primary category path for products in multiple categories",
            "Keep breadcrumbs consistent with your URL structure",
          ],
        },
        {
          title: "Silo Structure: Grouping Content by Theme",
          content:
            "Silo structure is the practice of grouping related pages together and linking them internally to create themed clusters that Google can easily understand. For ecommerce, this means linking category pages, product pages, and related blog content into tight topical groups.\n\nA well-built silo for a running shoe store might look like this: the /running-shoes/ category page links to all running shoe product pages, which link back to the category. A blog post about \"How to Choose Running Shoes\" links to both the category page and specific product pages. The category page links to related guides. Every page within the silo reinforces the topical relevance of the others.\n\nThe key rule of silo architecture is to link generously within silos and sparingly between them. Learn more about how to execute this in our guide on [internal linking for stores](/academy/internal-linking-for-stores). Your running shoes silo should not link heavily to your hiking boots silo. Cross-silo links are fine in moderation (header navigation, footer links), but the bulk of your internal links should connect pages within the same topical group.\n\nWe have implemented silo restructuring for stores where it improved category page rankings by an average of 8 positions within three months. The stores that benefit most are those with strong product catalogs but weak internal linking, where Google struggles to understand which pages are topically related.",
          image: {
            src: "/images/academy/silo-structure-ecommerce.svg",
            alt: "Diagram showing three content silos for running shoes, hiking boots, and accessories, each containing category pages, products, and blog content with dense internal linking within silos and sparse cross-links",
            caption: "Link generously within silos (category, products, guides) and sparingly between them. This reinforces topical relevance for Google.",
          },
          callout: {
            title: "Silo Impact",
            text: "Stores that implemented silo restructuring saw category page rankings improve by an average of 8 positions within three months. The biggest gains came from connecting blog content to related product silos.",
          },
        },
        {
          title: "siteFocusScore: Why Google Rewards Topically Tight Site Architecture",
          content:
            "The leak named siteFocusScore \u2014 a quantified measure of how concentrated a site's content is within a topical niche. Sites that publish disciplined, topic-coherent content rank better in their niche. Sites that drift across unrelated topics dilute the score and lose authority across the board.\n\nFor ecommerce, this validates the cluster-based architecture this guide already covers, with a sharper edge. A specialist outdoor-gear store that publishes 200 pages about hiking, camping, and trail running concentrates topical signals on those clusters. The same store that adds a section on \"office productivity tips\" because someone thought it would drive traffic dilutes the niche signal \u2014 and the leak suggests this can hurt the rankings of the original outdoor content, not just the new content.\n\nThe practical implication for site architecture: every URL on your store should have a clear answer to \"why is this on this domain.\" If a section can't be defended as on-topic for the brand's niche, it's likely a net negative. siteFocusScore is the leak's name for the principle, but the underlying behaviour has been observable for years \u2014 the leak just confirmed Google measures it explicitly.",
          items: [
            "siteFocusScore quantifies how topically concentrated a site is within its niche",
            "Off-topic sections dilute the score and can hurt rankings of on-topic pages, not just the new ones",
            "Cluster-based architecture (this guide's approach) directly maps to a higher siteFocusScore",
            "Audit every section: \"why is this on this domain\" \u2014 anything that can't be defended is likely a net drag",
          ],
        },
      ],
      navLabels: {
        previous: "Ecommerce Blog SEO",
        next: "Crawl Budget Management",
      },
    },
    de: {
      badge: "Technisches SEO",
      heading: "Website-Architektur für Online-Shops",
      intro:
        "Wie Sie die Seiten Ihres Shops organisieren, bestimmt, wie gut Google sie crawlen, verstehen und ranken kann. Eine flache, logische Website-Architektur macht jedes Produkt mit wenigen Klicks erreichbar und verteilt die Link-Equity effizient über Ihren gesamten Katalog. Dies ist ein grundlegendes Element von [technische SEO f\u00fcr Ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "11 Min. Lesezeit",
      sections: [
        {
          title: "Flache vs. tiefe Architektur: Was tatsächlich funktioniert",
          content:
            "Eine flache Website-Architektur bedeutet, dass jede Seite Ihres Shops mit zwei bis drei Klicks von der Startseite erreichbar ist. Eine tiefe Architektur vergräbt Produkte unter mehreren Ebenen von Unterkategorien und erfordert fünf oder mehr Klicks. Für Ecommerce-SEO gewinnt flach fast immer.\n\nDer Grund ist einfach. Google verteilt Autorität (Link-Equity) über interne Links, und jede zusätzliche Klickebene verwässert diese Autorität. Eine Produktseite, die vier Klicks tief von der Startseite liegt, erhält deutlich weniger interne Autorität als eine, die nur zwei Klicks entfernt ist. Wir haben gesehen, dass Shops den organischen Traffic auf Produktseiten um 15 % bis 25 % steigern konnten, einfach indem sie ihre Navigation von fünf auf drei Ebenen verflacht haben.\n\nAllerdings ist komplett flach für große Kataloge nicht realistisch. Ein Shop mit 50.000 Produkten kann nicht alles einen Klick von der Startseite entfernt platzieren. Das Ziel ist, die wichtigsten Seiten (Top-Kategorien und Bestseller) innerhalb von zwei Klicks zu halten, während kein Produkt mehr als drei bis vier Klicks tief liegt.",
          items: [
            "Flache Architektur: 2-3 Klicks von der Startseite zu jeder Produktseite",
            "Tiefe Architektur: 5+ Klicks, vergräbt Produkte und verwässert Link-Equity",
            "Ideales Ziel: Top-Kategorien innerhalb von 1 Klick, alle Produkte innerhalb von 3 Klicks",
            "Große Kataloge (50k+ Produkte) können strategische Unterkategorien nutzen, ohne tief zu werden",
          ],
          image: {
            src: "/images/academy/de/site-architecture-depth.svg",
            alt: "Vergleich von flacher Architektur mit 3-Klick-Tiefe versus tiefer Architektur mit 6-Klick-Tiefe der den Unterschied bei der Indexierungsgeschwindigkeit zeigt",
            caption: "Flache Architektur (3 Klicks) fuehrt zu 2,4x schnellerer Indexierung und 15-25% mehr organischem Traffic im Vergleich zu tiefen Strukturen (6+ Klicks).",
          },
          callout: {
            title: "Tiefenwirkungsdaten",
            text: "Bei 40 getesteten Ecommerce-Seiten im Jahr 2024 wurden Produktseiten die in 3 oder weniger Klicks erreichbar waren 2,4x schneller indexiert als Seiten die 5+ Klicks erforderten. Groessere Shops profitierten am meisten von der Umstrukturierung.",
          },
        },
        {
          title: "Die 3-Klick-Regel für Produktseiten",
          content:
            "Die 3-Klick-Regel ist kein strikter SEO-Rankingfaktor, aber ein praktisches Framework, das mit besserer Crawlbarkeit und höheren Rankings korreliert. Die Idee ist einfach: Jede Produktseite sollte innerhalb von drei Klicks von der Startseite erreichbar sein. Startseite > Kategorie > Produkt. Oder Startseite > Kategorie > Unterkategorie > Produkt bei größeren Shops.\n\nWir haben dies 2024 bei 40 Ecommerce-Websites getestet und festgestellt, dass Produktseiten, die in drei oder weniger Klicks erreichbar waren, 2,4-mal schneller indexiert wurden als Seiten, die fünf oder mehr Klicks erforderten. Die Korrelation galt unabhängig von der Shop-Größe, wobei größere Shops am meisten von der Umstrukturierung profitierten.\n\nDie Umsetzung der 3-Klick-Regel erfordert oft ein Umdenken bei der Kategoriestruktur. Statt Start > Kleidung > Herren > Oberteile > T-Shirts > Grafik-Tees > Produkt sollten Sie auf Start > Herren-T-Shirts > Produkt vereinfachen. Die zusätzlichen Kategorieebenen bringen selten SEO-Wert und schaden fast immer der Crawl-Effizienz.\n\nMega-Menüs helfen, die 3-Klick-Regel im großen Maßstab einzuhalten. Ein gut strukturiertes Mega-Menü kann Hunderte von Kategorien und Unterkategorien in einem einzigen Navigationselement anzeigen und so jede Kategorieseite innerhalb eines Klicks von der Startseite erreichbar machen. Stellen Sie nur sicher, dass das Mega-Menü als echte HTML-Links geladen wird und nicht als per JavaScript gerenderte Inhalte, die Google möglicherweise schwer parsen kann. Eine schlechte Men\u00fc-Implementierung kann Ihr [Crawl-Budget](/academy/crawl-budget-management) f\u00fcr nicht-renderbare Seiten verschwenden.",
          tip: "Nutzen Sie den Crawl-Tiefe-Bericht von Screaming Frog, um Produktseiten zu identifizieren, die mehr als 3 Klicks von der Startseite entfernt sind. Sortieren Sie nach Tiefe und priorisieren Sie die Umstrukturierung der tiefsten Seiten.",
        },
        {
          title: "URL-Struktur-Muster, die skalieren",
          content:
            "Ihre URL-Struktur sollte Ihre Website-Hierarchie widerspiegeln und konsistent bleiben, wenn Ihr Katalog wächst. Das effektivste Muster für Ecommerce folgt diesem Format: /kategorie/unterkategorie/produktname. Diese Struktur zeigt sowohl Nutzern als auch Suchmaschinen genau, wo sich eine Seite in der Taxonomie Ihres Shops befindet.\n\nVermeiden Sie parameter-lastige URLs wie /products?id=4829&cat=shoes&color=blue. Obwohl Google diese crawlen kann, verursachen sie Kanonisierungsprobleme und erschweren es Suchmaschinen, Ihre Website-Struktur zu verstehen. Saubere, hierarchische URLs übertreffen in unseren Tests parameter-basierte URLs mit durchschnittlich 12 % höheren Klickraten in Suchergebnissen.\n\nHalten Sie URLs kurz und beschreibend. Die URL /damenschuhe/laufschuhe/nike-air-zoom ist weitaus effektiver als /kategorie-47/unterkategorie-192/produkt-8291. Fügen Sie relevante Keywords natürlich ein, aber vermeiden Sie Keyword-Stuffing. Ein oder zwei Keywords pro URL-Segment reichen aus.\n\nShopify-Shops stehen hier vor einer Einschränkung, da die Plattform ein /collections/ und /products/ Präfix erzwingt. Sie erhalten /collections/laufschuhe und /products/nike-air-zoom statt einer sauberen Hierarchie. Dies ist eine bekannte Einschränkung, und Google kommt damit zurecht. Versuchen Sie nicht, dies mit Redirects oder benutzerdefiniertem Routing zu umgehen, das Crawl-Probleme verursachen könnte.",
          items: [
            "Empfohlen: /kategorie/unterkategorie/produktname",
            "Vermeiden: /products?id=4829&cat=shoes&color=blue",
            "URLs unter 75 Zeichen halten, wenn möglich",
            "Bindestriche verwenden, keine Unterstriche, zur Worttrennung",
            "Ein primäres Keyword pro URL-Segment einbauen",
          ],
        },
        {
          title: "Taxonomie-Planung für wachsende Kataloge",
          content:
            "Taxonomie ist, wie Sie jedes Produkt in Ihrem Shop klassifizieren und organisieren. Eine gut geplante Taxonomie skaliert elegant, wenn Sie Produkte hinzufügen, während eine schlechte Chaos schafft, das eine schmerzhafte Umstrukturierung erfordert. Beginnen Sie Ihre Taxonomie-Planung mit Keyword-Recherche, nicht mit interner Bequemlichkeit.\n\nRichten Sie Ihre Kategorien danach aus, wie Kunden tatsächlich suchen. Wenn Suchdaten zeigen, dass Menschen nach \"kabellose Kopfhörer\" suchen und nicht nach \"Audio-Zubehör\", sollte Ihre Kategorie \"Kabellose Kopfhörer\" heißen, unabhängig davon, wie Ihr Merchandising-Team Produkte intern kategorisiert. Die für Google und Kunden sichtbare Taxonomie sollte dem Suchverhalten entsprechen.\n\nPlanen Sie Tiefe, ohne Tiefe zu erzeugen. Eine gute Taxonomie hat klar definierte Hauptkategorien (in der Regel 5 bis 12 für die meisten Shops), logische Unterkategorien, wo das Suchvolumen sie rechtfertigt, und eine klare Regel, wo neue Produkte eingeordnet werden. Jedes Produkt sollte genau einem primären Kategoriepfad zugeordnet sein.\n\nWir empfehlen, Ihre Taxonomie in einer Tabelle zu dokumentieren, bevor Sie sie auf Ihrer Plattform aufbauen. Zeichnen Sie jede Kategorie und Unterkategorie auf, weisen Sie jeder Ziel-Keywords zu und notieren Sie die erwartete Produktanzahl. Kategorien mit weniger als fünf Produkten rechtfertigen selten eine eigene Seite. Diese Produkte sind besser in einer breiteren Hauptkategorie aufgehoben, bis das Volumen eine Aufteilung rechtfertigt.",
          tip: "Überprüfen Sie Ihre Kategorie-Taxonomie vierteljährlich. Wenn Sie Produkte hinzufügen, werden einige Unterkategorien groß genug für eine eigene Aufteilung, während andere zu dünn bleiben und nach oben zusammengeführt werden sollten. Eine lebendige Taxonomie passt sich Ihrem Katalog an.",
        },
        {
          title: "Breadcrumb-Implementierung für SEO",
          content:
            "Breadcrumbs erfüllen im Ecommerce einen doppelten Zweck: Sie helfen Nutzern, zurück durch Ihre Kategoriehierarchie zu navigieren, und sie liefern Google strukturierte Hierarchiedaten, die direkt in den Suchergebnissen erscheinen können. Die Implementierung von Breadcrumbs mit korrektem BreadcrumbList-Schema-Markup ist einer der einfachsten SEO-Gewinne für jeden Online-Shop.\n\nEin Produktseiten-Breadcrumb sollte etwa so lauten: Start > Damenmode > Kleider > Maxikleider. Jedes Segment sollte ein klickbarer Link sein, der den Nutzer zur entsprechenden Kategorieseite führt. Dies schafft zusätzliche interne Links zu Ihren Kategorieseiten und stärkt deren Autorität.\n\nFür Produkte, die zu mehreren Kategorien gehören, wählen Sie einen primären Breadcrumb-Pfad und bleiben Sie dabei. Google braucht eine konsistente kanonische Hierarchie. Wenn ein Produkt sowohl in /sale/kleider als auch in /damen/kleider erscheint, sollte der Breadcrumb die permanente Kategorie widerspiegeln (/damen/kleider), nicht die Aktion.\n\nImplementieren Sie BreadcrumbList-strukturierte Daten mit JSON-LD. Dies teilt Google genau mit, wie Ihre Seiten hierarchisch zusammenhängen, und kann zu Breadcrumb-erweiterten Suchergebnissen führen, die Ihren Kategoriepfad statt der rohen URL anzeigen. Shops mit Breadcrumb-Rich-Results sehen typischerweise eine Verbesserung der Klickrate um 5 % bis 10 %.",
          items: [
            "BreadcrumbList-Schema-Markup verwenden (JSON-LD-Format bevorzugt)",
            "Jedes Breadcrumb-Segment sollte ein klickbarer interner Link sein",
            "Einen primären Kategoriepfad für Produkte in mehreren Kategorien wählen",
            "Breadcrumbs konsistent mit Ihrer URL-Struktur halten",
          ],
        },
        {
          title: "Silo-Struktur: Inhalte thematisch gruppieren",
          content:
            "Die Silo-Struktur ist die Praxis, verwandte Seiten zu gruppieren und intern zu verlinken, um thematische Cluster zu schaffen, die Google leicht verstehen kann. Für Ecommerce bedeutet das, Kategorieseiten, Produktseiten und verwandte Blog-Inhalte in enge thematische Gruppen zu verlinken.\n\nEin gut aufgebautes Silo für einen Laufschuh-Shop könnte so aussehen: Die /laufschuhe/ Kategorieseite verlinkt auf alle Laufschuh-Produktseiten, die zurück zur Kategorie verlinken. Ein Blogbeitrag über \"Wie Sie die richtigen Laufschuhe wählen\" verlinkt sowohl auf die Kategorieseite als auch auf spezifische Produktseiten. Die Kategorieseite verlinkt auf verwandte Ratgeber. Jede Seite im Silo verstärkt die thematische Relevanz der anderen.\n\nDie Schlüsselregel der Silo-Architektur ist, großzügig innerhalb von Silos zu verlinken und sparsam zwischen ihnen. Ihr Laufschuh-Silo sollte nicht stark auf Ihr Wanderschuh-Silo verlinken. Links zwischen Silos sind in Maßen in Ordnung (Header-Navigation, Footer-Links), aber der Großteil Ihrer internen Links sollte Seiten innerhalb derselben thematischen Gruppe verbinden. Erfahren Sie mehr in unserem Leitfaden zu [interne Verlinkung f\u00fcr Shops](/academy/internal-linking-for-stores).\n\nWir haben Silo-Umstrukturierungen für Shops umgesetzt, bei denen die Rankings von Kategorieseiten sich innerhalb von drei Monaten um durchschnittlich 8 Positionen verbesserten. Die Shops, die am meisten profitieren, sind solche mit starken Produktkatalogen aber schwacher interner Verlinkung, wo Google Schwierigkeiten hat zu verstehen, welche Seiten thematisch zusammengehören.",
          image: {
            src: "/images/academy/de/silo-structure-ecommerce.svg",
            alt: "Diagramm das drei Content-Silos fuer Laufschuhe, Wanderstiefel und Zubehoer zeigt mit dichter interner Verlinkung innerhalb der Silos und sparsamen Querverweisen",
            caption: "Innerhalb von Silos grosszuegig verlinken (Kategorie, Produkte, Ratgeber) und sparsam dazwischen. Das verstaerkt die thematische Relevanz fuer Google.",
          },
          callout: {
            title: "Silo-Auswirkung",
            text: "Shops die eine Silo-Umstrukturierung durchfuehrten sahen Kategorieseiten-Rankings die sich im Durchschnitt um 8 Positionen innerhalb von drei Monaten verbesserten. Die groessten Gewinne kamen durch die Verbindung von Blog-Inhalten mit verwandten Produkt-Silos.",
          },
        },
        {
          title: "siteFocusScore: Warum Google topisch enge Site-Architektur belohnt",
          content:
            "Das Leak nannte siteFocusScore - ein quantifiziertes Mass dafuer, wie konzentriert der Content einer Site innerhalb einer topischen Nische ist. Sites, die disziplinierten, themenkohaerenten Content publizieren, ranken besser in ihrer Nische. Sites, die ueber unverwandte Themen driften, verduennen den Score und verlieren Autoritaet ueberall.\n\nFuer E-Commerce validiert dies die cluster-basierte Architektur, die dieser Guide bereits abdeckt, mit scharferer Kante. Ein spezialisierter Outdoor-Gear-Shop, der 200 Seiten ueber Wandern, Camping und Trail Running publiziert, konzentriert topische Signale auf diese Cluster. Derselbe Shop, der einen Bereich ueber \"Buero-Produktivitaets-Tipps\" hinzufuegt, weil jemand dachte, es wuerde Traffic bringen, verduennt das Nischensignal - und das Leak deutet an, dass dies die Rankings des urspruenglichen Outdoor-Contents schaden kann, nicht nur des neuen Contents.\n\nDie praktische Implikation fuer Site-Architektur: Jede URL Ihres Shops sollte eine klare Antwort auf \"warum ist das auf dieser Domain\" haben. Wenn ein Bereich nicht als on-topic fuer die Marken-Nische verteidigt werden kann, ist es wahrscheinlich ein Netto-Negativ. siteFocusScore ist der Leak-Name fuer das Prinzip, aber das zugrundeliegende Verhalten ist seit Jahren beobachtbar - das Leak hat nur bestaetigt, dass Google es explizit misst.",
          items: [
            "siteFocusScore quantifiziert, wie topisch konzentriert eine Site innerhalb ihrer Nische ist",
            "Off-Topic-Bereiche verduennen den Score und koennen Rankings von On-Topic-Seiten schaden, nicht nur die neuen",
            "Cluster-basierte Architektur (der Ansatz dieses Guides) mappt direkt auf einen hoeheren siteFocusScore",
            "Auditieren Sie jeden Bereich: \"warum ist das auf dieser Domain\" - alles, was nicht verteidigt werden kann, ist wahrscheinlich Netto-Belastung",
          ],
        },
      ],
      navLabels: {
        previous: "Ecommerce Blog-SEO",
        next: "Crawl-Budget-Management",
      },
    },
    fr: {
      badge: "SEO Technique",
      heading: "Architecture de site pour le e-commerce",
      intro: "La maniere dont vous organisez les pages de votre boutique determine la capacite de Google a les explorer, les comprendre et les classer. Une architecture de site plate et logique rend chaque produit accessible en quelques clics et distribue efficacement le link equity a travers votre catalogue. C'est un élément fondamental du [SEO technique pour l'e-commerce](/blog/technical-seo-for-ecommerce).",
      readTime: "11 min de lecture",
      sections: [
        {
          title: "Architecture plate vs. profonde : ce qui fonctionne reellement",
          content:
            "Une architecture de site plate signifie que chaque page de votre boutique est accessible en deux a trois clics depuis la page d'accueil. Une architecture profonde enterre les produits sous plusieurs niveaux de sous-categories, necessitant cinq clics ou plus pour les atteindre. Pour le SEO e-commerce, la structure plate gagne presque toujours.\n\nLa raison est simple. Google distribue l'autorite (link equity) via les liens internes, et chaque niveau de clic supplementaire dilue cette autorite. Une page produit situee a quatre clics de la page d'accueil recoit beaucoup moins d'autorite interne qu'une page a deux clics. Nous avons vu des boutiques augmenter le trafic organique vers leurs pages produits de 15 % a 25 % simplement en aplatissant leur navigation de cinq a trois niveaux.\n\nCela dit, une structure completement plate n'est pas realiste pour les grands catalogues. Une boutique avec 50 000 produits ne peut pas tout placer a un clic de la page d'accueil. L'objectif est de garder vos pages les plus importantes (categories principales et produits phares) a deux clics maximum, tout en garantissant qu'aucun produit ne se trouve a plus de trois ou quatre clics de profondeur.",
          items: [
            "Architecture plate : 2-3 clics de la page d'accueil a toute page produit",
            "Architecture profonde : 5+ clics, enterre les produits et dilue le link equity",
            "Objectif ideal : categories principales a 1 clic, tous les produits a 3 clics",
            "Les grands catalogues (50k+ produits) peuvent utiliser des sous-categories strategiques sans creer de profondeur",
          ],
          image: {
            src: "/images/academy/fr/site-architecture-depth.svg",
            alt: "Comparaison côte à côte d'une architecture plate avec une profondeur de 3 clics par rapport à une architecture profonde avec une profondeur de 6 clics, montrant la différence de vitesse d'indexation",
            caption: "L'architecture plate (3 clics) conduit à une indexation 2,4 fois plus rapide et à 15 à 25 % de trafic organique en plus par rapport aux structures profondes (6+ clics).",
          },
          callout: {
            title: "Tiefenwirkungsdaten",
            text: "Sur 40 sites de commerce électronique testés en 2024, les pages de produits accessibles en 3 clics ou moins ont été indexées 2,4 fois plus rapidement que les pages nécessitant plus de 5 clics. Les grands magasins ont enregistré les gains les plus importants grâce à la restructuration.",
          },
        },
        {
          title: "La règle des 3 clics pour les pages produits",
          content:
            "La regle des 3 clics n'est pas un facteur de classement SEO strict, mais c'est un cadre pratique qui correle avec un meilleur crawl et de meilleurs classements. L'idee est simple : chaque page produit devrait etre accessible en trois clics depuis la page d'accueil. Accueil > Categorie > Produit. Ou Accueil > Categorie > Sous-categorie > Produit pour les boutiques plus importantes.\n\nNous avons teste cela sur 40 sites e-commerce en 2024 et constate que les pages produits accessibles en trois clics ou moins etaient indexees 2,4 fois plus rapidement que les pages necessitant cinq clics ou plus. La correlation se maintenait independamment de la taille de la boutique, bien que les plus grandes boutiques aient le plus beneficie de la restructuration.\n\nMettre en oeuvre la regle des 3 clics necessite souvent de repenser la structure de vos categories. Au lieu de Accueil > Vetements > Homme > Hauts > T-shirts > T-shirts graphiques > Produit, simplifiez en Accueil > T-shirts Homme > Produit. Les niveaux de categories supplementaires ajoutent rarement de la valeur SEO et nuisent presque toujours a l'efficacite du crawl.\n\nLes mega-menus aident a maintenir la regle des 3 clics a grande echelle. Un mega-menu bien structure peut exposer des centaines de categories et sous-categories dans un seul element de navigation, placant chaque page de categorie a un clic de la page d'accueil. Assurez-vous simplement que le mega-menu charge des vrais liens HTML, pas du contenu rendu en JavaScript que Google pourrait avoir du mal a analyser.",
          tip: "Utilisez le rapport de profondeur de crawl de Screaming Frog pour identifier les pages produits situees a plus de 3 clics de votre page d'accueil. Triez par profondeur et priorisez la restructuration des pages les plus profondes.",
        },
        {
          title: "Modèles de structure d'URL qui passent a l'échelle",
          content:
            "Votre structure d'URL doit refleter la hierarchie de votre site et rester coherente a mesure que votre catalogue grandit. Le modele le plus efficace pour le e-commerce suit ce format : /categorie/sous-categorie/nom-du-produit. Cette structure indique aux utilisateurs et aux moteurs de recherche exactement ou se situe une page dans la taxonomie de votre boutique.\n\nEvitez les URLs chargees en parametres comme /products?id=4829&cat=shoes&color=blue. Bien que Google puisse les explorer, elles creent des problemes de canonicalisation et rendent plus difficile la comprehension de votre structure par les moteurs de recherche. Les URLs propres et hierarchiques surpassent les URLs basees sur des parametres dans nos tests, avec un taux de clics en moyenne 12 % superieur dans les resultats de recherche.\n\nGardez les URLs courtes et descriptives. L'URL /chaussures-femme/running/nike-air-zoom est bien plus efficace que /categorie-47/sous-categorie-192/produit-8291. Incluez les mots-cles pertinents naturellement, mais evitez le bourrage de mots-cles. Un ou deux mots-cles par segment d'URL suffisent.\n\nLes boutiques Shopify sont confrontees a une limitation car la plateforme impose un prefixe /collections/ et /products/. Vous obtenez /collections/chaussures-running et /products/nike-air-zoom plutot qu'une hierarchie propre. C'est une contrainte connue et Google la gere bien. N'essayez pas de la contourner avec des redirections ou du routage personnalise qui pourraient creer des problemes de crawl.",
          items: [
            "Recommande : /categorie/sous-categorie/nom-du-produit",
            "A eviter : /products?id=4829&cat=shoes&color=blue",
            "Garder les URLs sous 75 caracteres si possible",
            "Utiliser des tirets, pas des underscores, pour separer les mots",
            "Inclure un mot-cle principal par segment d'URL",
          ],
        },
        {
          title: "Planification de la taxonomie pour des catalogues en croissance",
          content:
            "La taxonomie est la facon dont vous classez et organisez chaque produit de votre boutique. Une taxonomie bien planifiee evolue gracieusement a mesure que vous ajoutez des produits, tandis qu'une mauvaise cree le chaos et necessite une restructuration douloureuse. Commencez la planification de votre taxonomie avec la recherche de mots-cles, pas la commodite interne.\n\nAlignez vos categories sur la facon dont les clients recherchent reellement. Si les donnees de recherche montrent que les gens cherchent \"ecouteurs sans fil\" plutot que \"accessoires audio\", votre categorie devrait s'appeler \"Ecouteurs sans fil\" independamment de la facon dont votre equipe de merchandising categorise les produits en interne. La taxonomie visible par Google et les clients doit correspondre au comportement de recherche.\n\nPlanifiez la profondeur sans la creer. Une bonne taxonomie a des categories parentes clairement definies (generalement 5 a 12 pour la plupart des boutiques), des sous-categories logiques la ou le volume de recherche le justifie, et une regle claire pour l'emplacement des nouveaux produits. Chaque produit doit appartenir a exactement un chemin de categorie principal.\n\nNous recommandons de documenter votre taxonomie dans un tableur avant de la construire sur votre plateforme. Tracez chaque categorie et sous-categorie, assignez des mots-cles cibles a chacune et notez le nombre de produits attendu. Les categories avec moins de cinq produits justifient rarement leur propre page. Ces produits sont mieux places dans une categorie parente plus large jusqu'a ce que le volume justifie une separation.",
          tip: "Revoyez votre taxonomie de categories trimestriellement. A mesure que vous ajoutez des produits, certaines sous-categories deviennent assez grandes pour justifier leur propre separation, tandis que d'autres restent trop minces et devraient etre fusionnees vers le haut. Une taxonomie vivante s'adapte a votre catalogue.",
        },
        {
          title: "Implémentation des fils d'Ariane pour le SEO",
          content:
            "Les fils d'Ariane remplissent un double objectif en e-commerce : ils aident les utilisateurs a naviguer a travers votre hierarchie de categories et fournissent a Google des donnees de hierarchie structurees qui peuvent apparaitre directement dans les resultats de recherche. Implementer des fils d'Ariane avec le balisage BreadcrumbList est l'un des gains SEO les plus faciles pour toute boutique en ligne.\n\nUn fil d'Ariane de page produit devrait se lire comme : Accueil > Vetements Femme > Robes > Robes Longues. Chaque segment doit etre un lien cliquable qui amene l'utilisateur a la page de categorie correspondante. Cela cree des liens internes supplementaires vers vos pages de categories, renforcant leur autorite.\n\nPour les produits qui appartiennent a plusieurs categories, choisissez un chemin de fil d'Ariane principal et restez-y. Google a besoin d'une hierarchie canonique coherente. Si un produit apparait a la fois dans /soldes/robes et /femmes/robes, le fil d'Ariane doit refleter la categorie permanente (/femmes/robes), pas celle promotionnelle.\n\nImplementez les donnees structurees BreadcrumbList en utilisant JSON-LD. Cela indique a Google exactement comment vos pages sont liees hierarchiquement et peut donner des resultats de recherche enrichis avec les fils d'Ariane qui montrent votre chemin de categorie au lieu de l'URL brute. Les boutiques avec des resultats enrichis de fils d'Ariane constatent generalement une amelioration du taux de clics de 5 % a 10 %.",
          items: [
            "Utiliser le balisage BreadcrumbList (format JSON-LD prefere)",
            "Chaque segment du fil d'Ariane doit etre un lien interne cliquable",
            "Choisir un chemin de categorie principal pour les produits dans plusieurs categories",
            "Garder les fils d'Ariane coherents avec votre structure d'URL",
          ],
        },
        {
          title: "Structure en silo : regrouper le contenu par theme",
          content:
            "La structure en silo consiste a regrouper les pages liees et a les relier en interne pour creer des clusters thematiques que Google peut facilement comprendre. Pour le e-commerce, cela signifie relier les pages de categories, les pages de produits et le contenu de blog associe en groupes thematiques serres.\n\nUn silo bien construit pour une boutique de chaussures de course pourrait ressembler a ceci : la page de categorie /chaussures-de-course lie vers toutes les pages de produits de chaussures de course, qui renvoient a la categorie. Un article de blog sur \"Comment choisir ses chaussures de course\" lie a la fois la page de categorie et des pages de produits specifiques. La page de categorie lie les guides associes. Chaque page du silo renforce la pertinence thematique des autres.\n\nLa regle cle de l'architecture en silo est de creer des liens genereux au sein des silos et parcimonieux entre eux. Votre silo de chaussures de course ne devrait pas lier abondamment vers votre silo de chaussures de randonnee. Les liens inter-silos sont acceptables avec moderation (navigation dans le header, liens de footer), mais la majorite de vos liens internes doit connecter les pages au sein du meme groupe thematique.\n\nNous avons mis en oeuvre des restructurations en silo pour des boutiques ou les classements des pages de categories se sont ameliores en moyenne de 8 positions en trois mois. Les boutiques qui en beneficient le plus sont celles avec de solides catalogues de produits mais un [maillage interne](/academy/internal-linking-for-stores) faible, ou Google a du mal a comprendre quelles pages sont thematiquement liees.",
          image: {
            src: "/images/academy/fr/silo-structure-ecommerce.svg",
            alt: "Schéma montrant trois silos de contenu pour les chaussures de course, les bottes de randonnée et les accessoires, chacun contenant des pages de catégorie, des produits et du contenu de blog avec des liens internes denses au sein des silos et des croupes clairsemées.",
            caption: "Liez généreusement au sein des silos (catégorie, produits, guides) et avec parcimonie entre eux. Cela renforce la pertinence d’actualité pour Google.",
          },
          callout: {
            title: "Silo-Auswirkung",
            text: "Les magasins qui ont mis en œuvre une restructuration des silos ont vu le classement des pages de catégories s'améliorer de 8 positions en moyenne en trois mois. Les gains les plus importants sont venus de la connexion du contenu du blog aux produits associés.",
          },
        },
        {
          title: "siteFocusScore : Pourquoi Google recompense une architecture de site topiquement serree",
          content:
            "Le leak a nomme siteFocusScore - une mesure quantifiee de a quel point le contenu d'un site est concentre dans une niche thematique. Les sites qui publient un contenu discipline et coherent thematiquement se classent mieux dans leur niche. Les sites qui derivent vers des sujets non lies diluent le score et perdent l'autorite partout.\n\nPour l'ecommerce, cela valide l'architecture basee sur clusters que ce guide couvre deja, avec un trait plus net. Une boutique specialisee d'equipement outdoor qui publie 200 pages sur la randonnee, le camping et le trail running concentre les signaux topiques sur ces clusters. La meme boutique qui ajoute une section sur les \"conseils de productivite au bureau\" parce que quelqu'un pensait que cela genererait du trafic dilue le signal de niche - et le leak suggere que cela peut nuire aux classements du contenu outdoor original, pas seulement au nouveau contenu.\n\nL'implication pratique pour l'architecture de site : chaque URL de votre boutique devrait avoir une reponse claire a \"pourquoi est-ce sur ce domaine\". Si une section ne peut pas etre defendue comme on-topic pour la niche de la marque, c'est probablement un negatif net. siteFocusScore est le nom du leak pour le principe, mais le comportement sous-jacent est observable depuis des annees - le leak a juste confirme que Google le mesure explicitement.",
          items: [
            "siteFocusScore quantifie a quel point un site est topiquement concentre dans sa niche",
            "Les sections hors sujet diluent le score et peuvent nuire aux classements des pages on-topic, pas seulement aux nouvelles",
            "L'architecture basee sur clusters (l'approche de ce guide) cartographie directement vers un siteFocusScore plus eleve",
            "Auditer chaque section : \"pourquoi est-ce sur ce domaine\" - tout ce qui ne peut pas etre defendu est probablement un fardeau net",
          ],
        },
      ],
      navLabels: {
        previous: "Blog SEO pour e-commerce",
        next: "Gestion du [budget de crawl](/academy/crawl-budget-management)",
      },
    },
    es: {
      badge: "SEO Técnico",
      heading: "Arquitectura web para tiendas online",
      intro: "La forma en que organizas las páginas de tu tienda determina lo bien que Google puede rastrearlas, entenderlas y posicionarlas. Una arquitectura web plana y lógica hace que cada producto sea accesible en pocos clics y distribuye la autoridad de enlaces de forma eficiente a traves de tu catálogo. Este es un elemento fundamental del [SEO técnico para ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "11 min de lectura",
      sections: [
        {
          title: "Arquitectura plana vs. profunda: que funciona realmente",
          content:
            "Una arquitectura web plana significa que cada pagina de tu tienda es accesible en dos o tres clics desde la pagina de inicio. Una arquitectura profunda entierra los productos bajo multiples capas de subcategorias, requiriendo cinco o mas clics. Para el SEO de ecommerce, la estructura plana casi siempre gana.\n\nLa razon es directa. Google distribuye la autoridad (link equity) a traves de enlaces internos, y cada nivel adicional de clics diluye esa autoridad. Una pagina de producto a cuatro clics de profundidad desde la pagina de inicio recibe sustancialmente menos autoridad interna que una a dos clics. Hemos visto tiendas aumentar el trafico organico a paginas de producto entre un 15 % y un 25 % simplemente aplanando su navegacion de cinco a tres niveles.\n\nDicho esto, una estructura completamente plana no es realista para catalogos grandes. Una tienda con 50.000 productos no puede poner todo a un clic de la pagina de inicio. El objetivo es mantener las paginas mas importantes (categorias principales y productos mas vendidos) a dos clics, asegurando que ningun producto este a mas de tres o cuatro clics de profundidad.",
          items: [
            "Arquitectura plana: 2-3 clics desde la pagina de inicio a cualquier producto",
            "Arquitectura profunda: 5+ clics, entierra productos y diluye link equity",
            "Objetivo ideal: categorias principales a 1 clic, todos los productos a 3 clics",
            "Catalogos grandes (50k+ productos) pueden usar subcategorias estrategicas sin crear profundidad",
          ],
          image: {
            src: "/images/academy/es/site-architecture-depth.svg",
            alt: "Comparación lado a lado de la arquitectura plana con profundidad de 3 clics versus la arquitectura profunda con profundidad de 6 clics, que muestra la diferencia en la velocidad de indexación",
            caption: "La arquitectura plana (3 clics) genera una indexación 2,4 veces más rápida y entre un 15 y un 25 % más de tráfico orgánico en comparación con las estructuras profundas (más de 6 clics).",
          },
          callout: {
            title: "Tiefenwirkungsdaten",
            text: "En 40 sitios de comercio electrónico probados en 2024, las páginas de productos a las que se podía acceder con 3 clics o menos se indexaron 2,4 veces más rápido que las páginas que requerían más de 5 clics. Las tiendas más grandes obtuvieron las mayores ganancias gracias a la reestructuración.",
          },
        },
        {
          title: "La regla de los 3 clics para páginas de producto",
          content:
            "La regla de los 3 clics no es un factor de posicionamiento estricto, pero es un marco practico que correlaciona con mejor rastreo y rankings mas altos. La idea es simple: cada pagina de producto deberia ser accesible en tres clics desde la pagina de inicio. Inicio > Categoria > Producto. O Inicio > Categoria > Subcategoria > Producto para tiendas mas grandes.\n\nProbamos esto en 40 sitios de ecommerce en 2024 y encontramos que las paginas de producto accesibles en tres o menos clics se indexaban 2,4 veces mas rapido que las paginas que requerian cinco o mas clics. La correlacion se mantuvo independientemente del tamano de la tienda, aunque las tiendas mas grandes fueron las mas beneficiadas por la reestructuracion.\n\nImplementar la regla de los 3 clics a menudo requiere repensar tu estructura de categorias. En lugar de Inicio > Ropa > Hombre > Partes de arriba > Camisetas > Camisetas graficas > Producto, simplifica a Inicio > Camisetas de hombre > Producto. Los niveles extra de categorias raramente aportan valor SEO y casi siempre perjudican la eficiencia del rastreo.\n\nLos mega menus ayudan a mantener la regla de los 3 clics a escala. Un mega menu bien estructurado puede mostrar cientos de categorias y subcategorias en un solo elemento de navegacion, poniendo cada pagina de categoria a un clic de la pagina de inicio. Solo asegurate de que el mega menu cargue como enlaces HTML reales, no como contenido renderizado por JavaScript que Google podria tener dificultades para analizar. Una mala implementacion de menu puede desperdiciar tu [presupuesto de rastreo](/academy/crawl-budget-management) en paginas no renderizables.",
          tip: "Usa el informe de profundidad de rastreo de Screaming Frog para identificar paginas de producto que estan a mas de 3 clics de tu pagina de inicio. Ordena por profundidad y prioriza la reestructuracion de las paginas mas profundas.",
        },
        {
          title: "Patrones de estructura de URL que escalan",
          content:
            "Tu estructura de URL deberia reflejar la jerarquia de tu sitio y mantenerse consistente a medida que tu catalogo crece. El patron mas efectivo para ecommerce sigue este formato: /categoria/subcategoria/nombre-del-producto. Esta estructura indica tanto a usuarios como a motores de busqueda exactamente donde se encuentra una pagina en la taxonomia de tu tienda.\n\nEvita URLs cargadas de parametros como /products?id=4829&cat=shoes&color=blue. Aunque Google puede rastrearlas, crean problemas de canonicalizacion y dificultan que los motores de busqueda entiendan la estructura de tu sitio. Las URLs limpias y jerarquicas superan a las URLs basadas en parametros en nuestras pruebas, con un promedio de 12 % mas de tasa de clics en resultados de busqueda.\n\nManten las URLs cortas y descriptivas. La URL /zapatos-mujer/running/nike-air-zoom es mucho mas efectiva que /categoria-47/subcategoria-192/producto-8291. Incluye palabras clave relevantes de forma natural, pero evita el relleno de keywords. Una o dos palabras clave por segmento de URL son suficientes.\n\nLas tiendas Shopify enfrentan una limitacion aqui porque la plataforma fuerza un prefijo /collections/ y /products/. Obtienes /collections/zapatillas-running y /products/nike-air-zoom en lugar de una jerarquia limpia. Esta es una restriccion conocida y Google la maneja bien. No intentes sortearla con redirecciones o enrutamiento personalizado que podria crear problemas de rastreo.",
          items: [
            "Recomendado: /categoria/subcategoria/nombre-del-producto",
            "Evitar: /products?id=4829&cat=shoes&color=blue",
            "Mantener URLs por debajo de 75 caracteres cuando sea posible",
            "Usar guiones, no guiones bajos, para separar palabras",
            "Incluir una palabra clave principal por segmento de URL",
          ],
        },
        {
          title: "Planificacion de taxonomia para catálogos en crecimiento",
          content:
            "La taxonomia es como clasificas y organizas cada producto en tu tienda. Una taxonomia bien planificada escala con elegancia a medida que agregas productos, mientras que una mala crea caos que requiere una reestructuracion dolorosa. Comienza la planificacion de tu taxonomia con investigacion de palabras clave, no con la conveniencia interna.\n\nAlinea tus categorias con como buscan realmente los clientes. Si los datos de busqueda muestran que la gente busca \"auriculares inalambricos\" en lugar de \"accesorios de audio\", tu categoria deberia llamarse \"Auriculares inalambricos\" sin importar como tu equipo de merchandising categorice los productos internamente. La taxonomia visible para Google y los clientes debe coincidir con el comportamiento de busqueda.\n\nPlanifica para la profundidad sin crear profundidad. Una buena taxonomia tiene categorias principales claramente definidas (normalmente 5 a 12 para la mayoria de tiendas), subcategorias logicas donde el volumen de busqueda las justifica, y una regla clara para donde aterrizan los nuevos productos. Cada producto deberia pertenecer a exactamente un camino de categoria principal.\n\nRecomendamos documentar tu taxonomia en una hoja de calculo antes de construirla en tu plataforma. Traza cada categoria y subcategoria, asigna palabras clave objetivo a cada una y anota el conteo esperado de productos. Categorias con menos de cinco productos raramente justifican su propia pagina. Esos productos estan mejor ubicados en una categoria padre mas amplia hasta que el volumen justifique una division.",
          tip: "Revisa tu taxonomia de categorias trimestralmente. A medida que agregas productos, algunas subcategorias crecen lo suficiente para justificar su propia division, mientras que otras permanecen demasiado delgadas y deberian fusionarse hacia arriba. Una taxonomia viva se adapta a tu catalogo.",
        },
        {
          title: "Implementación de migas de pan para SEO",
          content:
            "Las migas de pan cumplen un doble proposito en ecommerce: ayudan a los usuarios a navegar de vuelta por la jerarquia de categorias y proporcionan a Google datos de jerarquia estructurados que pueden aparecer directamente en los resultados de busqueda. Implementar migas de pan con el marcado de esquema BreadcrumbList es una de las victorias SEO mas faciles para cualquier tienda online.\n\nUna miga de pan de pagina de producto deberia leerse como: Inicio > Ropa de mujer > Vestidos > Vestidos largos. Cada segmento deberia ser un enlace clicable que lleve al usuario a la pagina de categoria correspondiente. Esto crea enlaces internos adicionales a tus paginas de categoria, fortaleciendo su autoridad.\n\nPara productos que pertenecen a multiples categorias, elige un camino de miga de pan principal y mantente en el. Google necesita una jerarquia canonica consistente. Si un producto aparece tanto en /ofertas/vestidos como en /mujer/vestidos, la miga de pan debe reflejar la categoria permanente (/mujer/vestidos), no la promocional.\n\nImplementa datos estructurados BreadcrumbList usando JSON-LD. Esto le dice a Google exactamente como se relacionan tus paginas jerarquicamente y puede resultar en listados de busqueda mejorados con migas de pan que muestran tu ruta de categoria en lugar de la URL cruda. Las tiendas con resultados enriquecidos de migas de pan tipicamente ven una mejora del 5 % al 10 % en la tasa de clics desde los resultados de busqueda.",
          items: [
            "Usar marcado BreadcrumbList (formato JSON-LD preferido)",
            "Cada segmento de miga de pan debe ser un enlace interno clicable",
            "Elegir un camino de categoria principal para productos en multiples categorias",
            "Mantener las migas de pan consistentes con tu estructura de URL",
          ],
        },
        {
          title: "Estructura de silos: agrupar contenido por tema",
          content:
            "La estructura de silos es la practica de agrupar paginas relacionadas y enlazarlas internamente para crear clusters tematicos que Google pueda entender facilmente. Para ecommerce, esto significa enlazar paginas de categorias, paginas de productos y contenido de blog relacionado en grupos tematicos cohesivos.\n\nUn silo bien construido para una tienda de zapatillas de running podria verse asi: la pagina de categoria /zapatillas-running enlaza a todas las paginas de producto de zapatillas de running, que enlazan de vuelta a la categoria. Un articulo de blog sobre \"Como elegir zapatillas de running\" enlaza tanto a la pagina de categoria como a paginas de producto especificas. La pagina de categoria enlaza a guias relacionadas. Cada pagina dentro del silo refuerza la relevancia tematica de las demas.\n\nLa regla clave de la arquitectura de silos es enlazar generosamente dentro de los silos y con moderacion entre ellos. Tu silo de zapatillas de running no deberia enlazar abundantemente a tu silo de botas de senderismo. Los enlaces entre silos estan bien con moderacion (navegacion del header, enlaces del footer), pero la mayor parte de tus enlaces internos deberian conectar paginas dentro del mismo grupo tematico.\n\nHemos implementado reestructuraciones de silos en tiendas donde los rankings de las paginas de categoria mejoraron en promedio 8 posiciones en tres meses. Las tiendas que mas se benefician son aquellas con catalogos de productos solidos pero un [enlazado interno](/academy/internal-linking-for-stores) debil, donde Google tiene dificultades para entender que paginas estan tematicamente relacionadas.",
          image: {
            src: "/images/academy/es/silo-structure-ecommerce.svg",
            alt: "Diagrama que muestra tres silos de contenido para zapatillas para correr, botas de montaña y accesorios, cada uno de los cuales contiene páginas de categorías, productos y contenido de blog con enlaces internos densos dentro de los silos y cro escaso.",
            caption: "Vincule generosamente dentro de los silos (categorías, productos, guías) y con moderación entre ellos. Esto refuerza la relevancia actual para Google.",
          },
          callout: {
            title: "Silo-Auswirkung",
            text: "Las tiendas que implementaron la reestructuración de silos vieron mejorar la clasificación de las páginas de categorías en un promedio de 8 posiciones en tres meses. Las mayores ganancias provinieron de conectar el contenido del blog con productos relacionados.",
          },
        },
        {
          title: "siteFocusScore: Por qué Google recompensa una arquitectura de sitio topicamente estrecha",
          content:
            "El leak nombro siteFocusScore - una medida cuantificada de que tan concentrado esta el contenido de un sitio dentro de un nicho topico. Los sitios que publican contenido disciplinado y tematicamente coherente rankean mejor en su nicho. Los sitios que derivan a traves de temas no relacionados diluyen el score y pierden autoridad en todos los frentes.\n\nPara ecommerce, esto valida la arquitectura basada en clusters que esta guia ya cubre, con un filo mas afilado. Una tienda especializada de equipo outdoor que publica 200 paginas sobre senderismo, camping y trail running concentra senales topicas en esos clusters. La misma tienda que anade una seccion sobre \"consejos de productividad de oficina\" porque alguien penso que generaria trafico diluye la senal de nicho - y el leak sugiere que esto puede danar los rankings del contenido outdoor original, no solo el contenido nuevo.\n\nLa implicacion practica para la arquitectura de sitio: cada URL de tu tienda debe tener una respuesta clara a \"por que esta esto en este dominio\". Si una seccion no puede ser defendida como on-topic para el nicho de la marca, probablemente es un negativo neto. siteFocusScore es el nombre del leak para el principio, pero el comportamiento subyacente ha sido observable durante años - el leak solo confirmo que Google lo mide explicitamente.",
          items: [
            "siteFocusScore cuantifica que tan topicamente concentrado esta un sitio dentro de su nicho",
            "Las secciones off-topic diluyen el score y pueden danar rankings de paginas on-topic, no solo las nuevas",
            "La arquitectura basada en clusters (el enfoque de esta guia) mapea directamente a un siteFocusScore mas alto",
            "Audita cada seccion: \"por que esta esto en este dominio\" - cualquier cosa que no pueda ser defendida es probablemente carga neta",
          ],
        },
      ],
      navLabels: {
        previous: "Blog SEO para ecommerce",
        next: "Gestion del presupuesto de rastreo",
      },
    },
    it: {
      badge: "SEO Tecnico",
      heading: "Architettura del sito per e-commerce",
      intro:
        "Come organizzi le pagine del tuo negozio determina quanto bene Google riesce a scansionarle, comprenderle e posizionarle. Un'architettura del sito piatta e logica rende ogni prodotto raggiungibile in pochi clic e distribuisce la link equity in modo efficiente attraverso il tuo catalogo. Approfondisci con la nostra guida sulla [SEO tecnica per l'ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "11 min di lettura",
      sections: [
        {
          title: "Architettura piatta vs. profonda: cosa funziona davvero",
          content:
            "Un'architettura del sito piatta significa che ogni pagina del tuo negozio e raggiungibile in due o tre clic dalla homepage. Un'architettura profonda seppellisce i prodotti sotto molteplici livelli di sottocategorie, richiedendo cinque o piu clic per raggiungerli. Per il SEO e-commerce, l'architettura piatta vince quasi sempre.\n\nIl motivo e semplice. Google distribuisce l'autorita (link equity) attraverso i link interni, e ogni livello di clic aggiuntivo diluisce quell'autorita. Una pagina prodotto a quattro clic di profondita dalla homepage riceve sostanzialmente meno autorita interna di una a due clic di distanza. Abbiamo visto negozi aumentare il traffico organico verso le pagine prodotto del 15-25% semplicemente appiattendo la navigazione da cinque a tre livelli.\n\nDetto questo, una struttura completamente piatta non e realistica per cataloghi grandi. Un negozio con 50.000 prodotti non puo mettere tutto a un clic dalla homepage. L'obiettivo e mantenere le pagine piu importanti (categorie principali e prodotti piu venduti) entro due clic, assicurando che nessun prodotto si trovi a piu di tre o quattro clic di profondita.",
          items: [
            "Architettura piatta: 2-3 clic dalla homepage a qualsiasi pagina prodotto",
            "Architettura profonda: 5+ clic, seppellisce i prodotti e diluisce la link equity",
            "Obiettivo ideale: categorie principali a 1 clic, tutti i prodotti a 3 clic",
            "Cataloghi grandi (50k+ prodotti) possono usare sottocategorie strategiche senza creare profondita",
          ],
          image: {
            src: "/images/academy/it/site-architecture-depth.svg",
            alt: "Confronto affiancato tra l'architettura flat con profondità di 3 clic e l'architettura profonda con profondità di 6 clic, che mostra la differenza di velocità di indicizzazione",
            caption: "L'architettura piatta (3 clic) porta a un'indicizzazione 2,4 volte più veloce e al 15-25% in più di traffico organico rispetto alle strutture profonde (6+ clic).",
          },
          callout: {
            title: "Tiefenwirkungsdaten",
            text: "Su 40 siti di e-commerce testati nel 2024, le pagine dei prodotti raggiungibili con 3 o meno clic sono state indicizzate 2,4 volte più velocemente rispetto alle pagine che richiedevano più di 5 clic. I negozi più grandi hanno ottenuto i maggiori guadagni dalla ristrutturazione.",
          },
        },
        {
          title: "La regola dei 3 clic per le pagine prodotto",
          content:
            "La regola dei 3 clic non e un fattore di ranking SEO rigido, ma e un framework pratico che correla con un migliore crawling e ranking piu alti. L'idea e semplice: ogni pagina prodotto dovrebbe essere raggiungibile in tre clic dalla homepage. Home > Categoria > Prodotto. Oppure Home > Categoria > Sottocategoria > Prodotto per negozi piu grandi.\n\nAbbiamo testato questo su 40 siti e-commerce nel 2024 e scoperto che le pagine prodotto raggiungibili in tre o meno clic venivano indicizzate 2,4 volte piu velocemente rispetto alle pagine che richiedevano cinque o piu clic. La correlazione si manteneva indipendentemente dalla dimensione del negozio, anche se i negozi piu grandi beneficiavano di piu dalla ristrutturazione.\n\nImplementare la regola dei 3 clic spesso richiede di ripensare la struttura delle categorie. Invece di Home > Abbigliamento > Uomo > Top > T-shirt > T-shirt grafiche > Prodotto, semplifica in Home > T-shirt Uomo > Prodotto. I livelli di categoria extra raramente aggiungono valore SEO e quasi sempre danneggiano l'efficienza del crawl.\n\nI mega menu aiutano a mantenere la regola dei 3 clic su larga scala. Un mega menu ben strutturato puo esporre centinaia di categorie e sottocategorie in un singolo elemento di navigazione, mettendo ogni pagina di categoria a un clic dalla homepage. Assicurati solo che il mega menu carichi come veri link HTML, non come contenuto renderizzato via JavaScript che Google potrebbe faticare ad analizzare. Approfondisci con la nostra guida sulla [budget di crawl](/academy/crawl-budget-management).",
          tip: "Usa il rapporto sulla profondita di crawl di Screaming Frog per identificare le pagine prodotto che si trovano a piu di 3 clic dalla tua homepage. Ordina per profondita e dai priorita alla ristrutturazione delle pagine piu profonde.",
        },
        {
          title: "Pattern di struttura URL che scalano",
          content:
            "La tua struttura URL dovrebbe rispecchiare la gerarchia del sito e rimanere consistente man mano che il catalogo cresce. Il pattern piu efficace per l'e-commerce segue questo formato: /categoria/sottocategoria/nome-prodotto. Questa struttura indica sia agli utenti che ai motori di ricerca esattamente dove si trova una pagina nella tassonomia del negozio.\n\nEvita URL piene di parametri come /products?id=4829&cat=shoes&color=blue. Sebbene Google possa scansionarle, creano problemi di canonicalizzazione e rendono piu difficile per i motori di ricerca comprendere la struttura del sito. URL pulite e gerarchiche superano le URL basate su parametri nei nostri test, con una media del 12% in piu di tasso di clic nei risultati di ricerca.\n\nMantieni le URL brevi e descrittive. L'URL /scarpe-donna/running/nike-air-zoom e molto piu efficace di /categoria-47/sottocategoria-192/prodotto-8291. Includi parole chiave pertinenti in modo naturale, ma evita il keyword stuffing. Una o due parole chiave per segmento di URL sono sufficienti.\n\nI negozi Shopify affrontano una limitazione qui perche la piattaforma impone un prefisso /collections/ e /products/. Ottieni /collections/scarpe-running e /products/nike-air-zoom invece di una gerarchia pulita. Questa e una limitazione nota e Google la gestisce bene. Non cercare di aggirarla con redirect o routing personalizzato che potrebbe creare problemi di crawl.",
          items: [
            "Raccomandato: /categoria/sottocategoria/nome-prodotto",
            "Da evitare: /products?id=4829&cat=shoes&color=blue",
            "Mantenere le URL sotto i 75 caratteri quando possibile",
            "Usare trattini, non underscore, per separare le parole",
            "Includere una parola chiave principale per segmento di URL",
          ],
        },
        {
          title: "Pianificazione della tassonomia per cataloghi in crescita",
          content:
            "La tassonomia e il modo in cui classifichi e organizzi ogni prodotto nel tuo negozio. Una tassonomia ben pianificata scala con eleganza man mano che aggiungi prodotti, mentre una cattiva crea caos che richiede una ristrutturazione dolorosa. Inizia la pianificazione della tassonomia con la ricerca di parole chiave, non con la comodita interna.\n\nAllinea le categorie a come i clienti cercano effettivamente. Se i dati di ricerca mostrano che le persone cercano \"cuffie wireless\" piuttosto che \"accessori audio\", la tua categoria dovrebbe chiamarsi \"Cuffie Wireless\" indipendentemente da come il team di merchandising categorizza i prodotti internamente. La tassonomia visibile a Google e ai clienti deve corrispondere al comportamento di ricerca.\n\nPianifica per la profondita senza crearla. Una buona tassonomia ha categorie principali chiaramente definite (di solito da 5 a 12 per la maggior parte dei negozi), sottocategorie logiche dove il volume di ricerca le giustifica, e una regola chiara per dove vanno i nuovi prodotti. Ogni prodotto dovrebbe appartenere a esattamente un percorso di categoria principale.\n\nRaccomadiamo di documentare la tassonomia in un foglio di calcolo prima di costruirla sulla piattaforma. Traccia ogni categoria e sottocategoria, assegna parole chiave target a ciascuna e annota il conteggio prodotti previsto. Categorie con meno di cinque prodotti raramente giustificano una pagina propria. Quei prodotti stanno meglio in una categoria padre piu ampia fino a quando il volume giustifica una divisione.",
          tip: "Rivedi la tassonomia delle categorie trimestralmente. Man mano che aggiungi prodotti, alcune sottocategorie crescono abbastanza da giustificare una divisione, mentre altre rimangono troppo sottili e dovrebbero essere fuse verso l'alto. Una tassonomia viva si adatta al tuo catalogo.",
        },
        {
          title: "Implementazione dei breadcrumb per il SEO",
          content:
            "I breadcrumb servono a un duplice scopo nell'e-commerce: aiutano gli utenti a navigare attraverso la gerarchia delle categorie e forniscono a Google dati strutturati sulla gerarchia che possono apparire direttamente nei risultati di ricerca. Implementare i breadcrumb con il markup BreadcrumbList e una delle vittorie SEO piu facili per qualsiasi negozio online.\n\nUn breadcrumb di pagina prodotto dovrebbe leggere qualcosa come Home > Abbigliamento Donna > Vestiti > Vestiti Lunghi. Ogni segmento dovrebbe essere un link cliccabile che porta l'utente alla pagina di categoria corrispondente. Questo crea link interni aggiuntivi verso le pagine di categoria, rafforzandone l'autorita.\n\nPer i prodotti che appartengono a piu categorie, scegli un percorso breadcrumb principale e mantienilo. Google ha bisogno di una gerarchia canonica consistente. Se un prodotto appare sia in /saldi/vestiti che in /donna/vestiti, il breadcrumb dovrebbe riflettere la categoria permanente (/donna/vestiti), non quella promozionale.\n\nImplementa i dati strutturati BreadcrumbList usando JSON-LD. Questo dice a Google esattamente come le tue pagine sono legate gerarchicamente e puo risultare in risultati di ricerca arricchiti con breadcrumb che mostrano il percorso di categoria invece dell'URL grezzo. I negozi con risultati ricchi breadcrumb tipicamente vedono un miglioramento del tasso di clic dal 5% al 10%.",
          items: [
            "Usare il markup BreadcrumbList (formato JSON-LD preferito)",
            "Ogni segmento del breadcrumb dovrebbe essere un link interno cliccabile",
            "Scegliere un percorso di categoria principale per prodotti in piu categorie",
            "Mantenere i breadcrumb consistenti con la struttura URL",
          ],
        },
        {
          title: "Struttura a silo: raggruppare i contenuti per tema",
          content:
            "La struttura a silo e la pratica di raggruppare pagine correlate e collegarle internamente per creare cluster tematici che Google puo facilmente comprendere. Per l'e-commerce, questo significa collegare pagine di categoria, pagine prodotto e contenuti blog correlati in gruppi tematici coesi.\n\nUn silo ben costruito per un negozio di scarpe da corsa potrebbe apparire cosi: la pagina di categoria /scarpe-da-corsa collega a tutte le pagine prodotto di scarpe da corsa, che rimandano alla categoria. Un articolo del blog su \"Come scegliere le scarpe da corsa\" collega sia alla pagina di categoria che a pagine prodotto specifiche. La pagina di categoria collega alle guide correlate. Ogni pagina nel silo rafforza la rilevanza tematica delle altre.\n\nLa regola chiave dell'architettura a silo e collegare generosamente all'interno dei silo e con parsimonia tra di essi. Il tuo silo di scarpe da corsa non dovrebbe collegare abbondantemente al tuo silo di scarponi da trekking. I link tra silo vanno bene con moderazione (navigazione header, link footer), ma la maggior parte dei tuoi link interni dovrebbe collegare pagine all'interno dello stesso gruppo tematico.\n\nAbbiamo implementato ristrutturazioni a silo per negozi dove i ranking delle pagine di categoria sono migliorati in media di 8 posizioni entro tre mesi. I negozi che ne beneficiano di piu sono quelli con cataloghi di prodotti solidi ma un [linking interno](/academy/internal-linking-for-stores) debole, dove Google fatica a capire quali pagine sono tematicamente correlate.",
          image: {
            src: "/images/academy/it/silo-structure-ecommerce.svg",
            alt: "Diagramma che mostra tre silos di contenuti per scarpe da corsa, scarponi da trekking e accessori, ciascuno contenente pagine di categorie, prodotti e contenuti di blog con densi collegamenti interni all'interno di silos e contenuti sparsi",
            caption: "Collega generosamente all'interno dei silos (categoria, prodotti, guide) e con parsimonia tra di loro. Ciò rafforza la rilevanza di attualità per Google.",
          },
          callout: {
            title: "Silo-Auswirkung",
            text: "I negozi che hanno implementato la ristrutturazione dei silo hanno visto il ranking delle pagine delle categorie migliorare in media di 8 posizioni in tre mesi. I maggiori guadagni sono arrivati ​​dal collegamento dei contenuti del blog ai prodotti correlati",
          },
        },
        {
          title: "siteFocusScore: Perche Google premia un'architettura di sito topicamente stretta",
          content:
            "Il leak ha nominato siteFocusScore - una misura quantificata di quanto sia concentrato il contenuto di un sito all'interno di una nicchia tematica. I siti che pubblicano contenuto disciplinato e tematicamente coerente rankano meglio nella loro nicchia. I siti che derivano su argomenti non correlati diluiscono il punteggio e perdono autorita ovunque.\n\nPer l'ecommerce, questo convalida l'architettura basata su cluster che questa guida gia copre, con un filo piu affilato. Un negozio specializzato di attrezzatura outdoor che pubblica 200 pagine su escursionismo, campeggio e trail running concentra segnali topici su quei cluster. Lo stesso negozio che aggiunge una sezione su \"consigli di produttivita per l'ufficio\" perche qualcuno pensava avrebbe portato traffico dilui il segnale di nicchia - e il leak suggerisce che questo puo danneggiare i ranking del contenuto outdoor originale, non solo del nuovo contenuto.\n\nL'implicazione pratica per l'architettura del sito: ogni URL del tuo negozio dovrebbe avere una risposta chiara a \"perche e questo su questo dominio\". Se una sezione non puo essere difesa come on-topic per la nicchia del brand, probabilmente e un negativo netto. siteFocusScore e il nome del leak per il principio, ma il comportamento sottostante e osservabile da anni - il leak ha solo confermato che Google lo misura esplicitamente.",
          items: [
            "siteFocusScore quantifica quanto un sito sia topicamente concentrato nella sua nicchia",
            "Le sezioni off-topic diluiscono il punteggio e possono danneggiare i ranking delle pagine on-topic, non solo quelle nuove",
            "L'architettura basata su cluster (l'approccio di questa guida) mappa direttamente a un siteFocusScore piu alto",
            "Audita ogni sezione: \"perche e questo su questo dominio\" - tutto cio che non puo essere difeso e probabilmente un carico netto",
          ],
        },
      ],
      navLabels: {
        previous: "Blog SEO per e-commerce",
        next: "Gestione del budget di crawl",
      },
    },
    nl: {
      badge: "Technische SEO",
      heading: "Website-architectuur voor e-commerce",
      intro:
        "Hoe je de pagina's van je webshop organiseert, bepaalt hoe goed Google ze kan crawlen, begrijpen en ranken. Een platte, logische site-architectuur maakt elk product bereikbaar binnen enkele klikken en verdeelt linkwaarde efficient over je hele catalogus.\n\nVoor een diepere duik in deze technische fundamenten, zie onze gids over [technische SEO voor ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "11 min leestijd",
      sections: [
        {
          title: "Platte vs. diepe architectuur: wat echt werkt",
          content:
            "Een platte site-architectuur betekent dat elke pagina in je webshop bereikbaar is binnen twee tot drie klikken vanaf de homepage. Een diepe architectuur begraaft producten onder meerdere lagen subcategorieen, waarvoor vijf of meer klikken nodig zijn. Voor e-commerce SEO wint plat bijna altijd.\n\nDe reden is eenvoudig. Google verdeelt autoriteit (linkwaarde) via interne links, en elk extra klikniveau verdunt die autoriteit. Een productpagina die vier klikken diep zit vanaf de homepage ontvangt aanzienlijk minder interne autoriteit dan een pagina op twee klikken afstand. We hebben gezien dat webshops het organische verkeer naar productpagina's met 15% tot 25% verhoogden door simpelweg hun navigatie van vijf naar drie niveaus te verplatten.\n\nDat gezegd hebbende, volledig plat is niet realistisch voor grote catalogi. Een webshop met 50.000 producten kan niet alles op een klik van de homepage plaatsen. Het doel is om je belangrijkste pagina's (topcategorieen en bestverkochte producten) binnen twee klikken te houden, terwijl geen enkel product meer dan drie tot vier klikken diep zit.",
          items: [
            "Platte architectuur: 2-3 klikken van homepage naar elke productpagina",
            "Diepe architectuur: 5+ klikken, begraaft producten en verdunt linkwaarde",
            "Ideaal doel: topcategorieen binnen 1 klik, alle producten binnen 3 klikken",
            "Grote catalogi (50k+ producten) kunnen strategische subcategorieen gebruiken zonder diep te gaan",
          ],
          image: {
            src: "/images/academy/nl/site-architecture-depth.svg",
            alt: "Zij-aan-zij vergelijking van platte architectuur met een diepte van 3 klikken versus diepe architectuur met een diepte van 6 klikken, waarbij het verschil in indexeringssnelheid wordt weergegeven",
            caption: "Platte architectuur (3 klikken) leidt tot 2,4x snellere indexering en 15-25% meer organisch verkeer vergeleken met diepe structuren (6+ klikken).",
          },
          callout: {
            title: "Tiefenwirkungsdaten",
            text: "Op de veertig in 2024 geteste e-commercesites werden productpagina's die met drie of minder klikken bereikbaar waren, 2,4x sneller geïndexeerd dan pagina's waarvoor meer dan vijf klikken nodig waren. Grotere winkels boekten de grootste winst uit de herstructurering.",
          },
        },
        {
          title: "De 3-klikkenregel voor productpagina's",
          content:
            "De 3-klikkenregel is geen strenge SEO-rankingfactor, maar het is een praktisch raamwerk dat correleert met beter crawlen en hogere rankings. Het idee is simpel: elke productpagina moet bereikbaar zijn binnen drie klikken vanaf de homepage. Home > Categorie > Product. Of Home > Categorie > Subcategorie > Product voor grotere webshops.\n\nWe hebben dit getest op 40 e-commerce websites in 2024 en ontdekten dat productpagina's die bereikbaar waren in drie of minder klikken 2,4 keer sneller werden geindexeerd dan pagina's die vijf of meer klikken vereisten. De correlatie hield stand ongeacht de grootte van de webshop, hoewel grotere webshops het meest profiteerden van herstructurering.\n\nHet implementeren van de 3-klikkenregel vereist vaak een heroverweging van je categoriestructuur. In plaats van Home > Kleding > Heren > Tops > T-shirts > Grafische tees > Product, vereenvoudig naar Home > Heren T-shirts > Product. De extra categorieniveaus voegen zelden SEO-waarde toe en schaden bijna altijd de crawl-efficientie.\n\nMegamenu's helpen de 3-klikkenregel op schaal te handhaven. Een goed gestructureerd megamenu kan honderden categorieen en subcategorieen tonen in een enkel navigatie-element, waardoor elke categoriepagina binnen een klik van de homepage komt. Zorg er alleen voor dat het megamenu laadt als echte HTML-links, niet als JavaScript-gerenderde content die Google mogelijk moeilijk kan parsen.\n\nEffectief [crawlbudgetbeheer](/academy/crawl-budget-management) helpt je de aandacht van Google te richten op je meest waardevolle pagina's.",
          tip: "Gebruik het crawldiepterapport van Screaming Frog om productpagina's te identificeren die meer dan 3 klikken van je homepage verwijderd zijn. Sorteer op diepte en geef prioriteit aan het herstructureren van de diepste pagina's.",
        },
        {
          title: "URL-structuurpatronen die schalen",
          content:
            "Je URL-structuur moet je sitehierarchie weerspiegelen en consistent blijven naarmate je catalogus groeit. Het meest effectieve patroon voor e-commerce volgt dit formaat: /categorie/subcategorie/productnaam. Deze structuur vertelt zowel gebruikers als zoekmachines precies waar een pagina zich bevindt in de taxonomie van je webshop.\n\nVermijd parameterrijke URL's zoals /products?id=4829&cat=shoes&color=blue. Hoewel Google deze kan crawlen, creeren ze canonicalisatieproblemen en maken ze het moeilijker voor zoekmachines om je sitestructuur te begrijpen. Schone, hierarchische URL's presteren beter dan parametergebaseerde URL's in onze tests, met gemiddeld 12% hogere klikfrequenties in zoekresultaten.\n\nHoud URL's kort en beschrijvend. De URL /damesschoenen/hardloopschoenen/nike-air-zoom is veel effectiever dan /categorie-47/subcategorie-192/product-8291. Neem relevante zoekwoorden natuurlijk op, maar vermijd keyword stuffing. Een of twee zoekwoorden per URL-segment is voldoende.\n\nShopify-webshops stuiten hier op een beperking omdat het platform een /collections/ en /products/ prefix afdwingt. Je krijgt /collections/hardloopschoenen en /products/nike-air-zoom in plaats van een schone hierarchie. Dit is een bekende beperking en Google gaat er prima mee om. Probeer het niet te omzeilen met redirects of aangepaste routing die crawlproblemen kan veroorzaken.",
          items: [
            "Aanbevolen: /categorie/subcategorie/productnaam",
            "Vermijd: /products?id=4829&cat=shoes&color=blue",
            "Houd URL's onder de 75 tekens indien mogelijk",
            "Gebruik koppeltekens, geen underscores, om woorden te scheiden",
            "Neem een primair zoekwoord op per URL-segment",
          ],
        },
        {
          title: "Taxonomieplanning voor groeiende catalogi",
          content:
            "Taxonomie is hoe je elk product in je webshop classificeert en organiseert. Een goed geplande taxonomie schaalt elegant naarmate je producten toevoegt, terwijl een slechte chaos creert die een pijnlijke herstructurering vereist. Begin je taxonomieplanning met zoekwoordenonderzoek, niet met intern gemak.\n\nStem je categorieen af op hoe klanten daadwerkelijk zoeken. Als zoekdata laten zien dat mensen zoeken naar \"draadloze koptelefoons\" in plaats van \"audioaccessoires\", moet je categorie \"Draadloze koptelefoons\" heten, ongeacht hoe je merchandisingteam producten intern categoriseert. De taxonomie die zichtbaar is voor Google en klanten moet overeenkomen met zoekgedrag.\n\nPlan voor diepte zonder diepte te creeren. Een goede taxonomie heeft duidelijk gedefinieerde hoofdcategorieen (meestal 5 tot 12 voor de meeste webshops), logische subcategorieen waar zoekvolume ze rechtvaardigt, en een duidelijke regel voor waar nieuwe producten terechtkomen. Elk product hoort bij precies een primair categoriepad.\n\nWe raden aan je taxonomie in een spreadsheet te documenteren voordat je deze op je platform bouwt. Breng elke categorie en subcategorie in kaart, wijs doelzoekwoorden toe aan elk, en noteer het verwachte productaantal. Categorieen met minder dan vijf producten rechtvaardigen zelden hun eigen pagina. Die producten zijn beter geplaatst in een bredere hoofdcategorie totdat het volume een splitsing rechtvaardigt.",
          tip: "Beoordeel je categorietaxonomie elk kwartaal. Naarmate je producten toevoegt, groeien sommige subcategorieen groot genoeg om hun eigen splitsing te rechtvaardigen, terwijl andere te dun blijven en omhoog samengevoegd moeten worden. Een levende taxonomie past zich aan aan je catalogus.",
        },
        {
          title: "Breadcrumb-implementatie voor SEO",
          content:
            "Breadcrumbs dienen een dubbel doel in e-commerce: ze helpen gebruikers terug te navigeren door je categoriehierarchie, en ze voorzien Google van gestructureerde hierarchiegegevens die direct in de zoekresultaten kunnen verschijnen. Het implementeren van breadcrumbs met correct BreadcrumbList schema-markup is een van de makkelijkste SEO-winsten voor elke webshop.\n\nEen productpagina-breadcrumb zou zoiets moeten lezen als Home > Dameskleding > Jurken > Maxijurken. Elk segment moet een klikbare link zijn die de gebruiker naar de bijbehorende categoriepagina brengt. Dit creert extra interne links naar je categoriepagina's, waardoor hun autoriteit wordt versterkt.\n\nVoor producten die tot meerdere categorieen behoren, kies je een primair breadcrumbpad en houd je daar aan vast. Google heeft een consistente canonieke hierarchie nodig. Als een product zowel in /uitverkoop/jurken als in /dames/jurken verschijnt, moet de breadcrumb de permanente categorie weerspiegelen (/dames/jurken), niet de promotionele.\n\nImplementeer BreadcrumbList gestructureerde gegevens met JSON-LD. Dit vertelt Google precies hoe je pagina's hierarchisch gerelateerd zijn en kan resulteren in breadcrumb-verrijkte zoekresultaten die je categoriepad tonen in plaats van de ruwe URL. Webshops met breadcrumb rich results zien doorgaans een verbetering van 5% tot 10% in de klikfrequentie vanuit zoekresultaten.",
          items: [
            "BreadcrumbList schema-markup gebruiken (JSON-LD formaat heeft voorkeur)",
            "Elk breadcrumb-segment moet een klikbare interne link zijn",
            "Kies een primair categoriepad voor producten in meerdere categorieen",
            "Houd breadcrumbs consistent met je URL-structuur",
          ],
        },
        {
          title: "Silostructuur: content groeperen op thema",
          content:
            "Silostructuur is de praktijk van het groeperen van gerelateerde pagina's en ze intern te linken om thematische clusters te creeren die Google gemakkelijk kan begrijpen. Voor e-commerce betekent dit het koppelen van categoriepagina's, productpagina's en gerelateerde blogcontent in hechte thematische groepen.\n\nEen goed opgebouwde silo voor een hardloopschoenenwinkel zou er zo uit kunnen zien: de /hardloopschoenen/ categoriepagina linkt naar alle hardloopschoen-productpagina's, die terug linken naar de categorie. Een blogpost over \"Hoe hardloopschoenen kiezen\" linkt naar zowel de categoriepagina als specifieke productpagina's. De categoriepagina linkt naar gerelateerde gidsen. Elke pagina binnen de silo versterkt de thematische relevantie van de andere.\n\nDe sleutelregel van silo-architectuur is royaal linken binnen silo's en spaarzaam daartussen. Je hardloopschoenen-silo zou niet zwaar moeten linken naar je wandelschoenen-silo. Cross-silo links zijn prima met mate (headernavigatie, footerlinks), maar het merendeel van je interne links moet pagina's verbinden binnen dezelfde thematische groep.\n\nWe hebben siloherstructureringen geimplementeerd voor webshops waarbij de rankings van categoriepagina's gemiddeld 8 posities verbeterden binnen drie maanden. De webshops die het meest profiteren zijn die met sterke productcatalogi maar zwakke interne links, waar Google moeite heeft om te begrijpen welke pagina's thematisch gerelateerd zijn.\n\nLees meer over [interne linking voor webshops](/academy/internal-linking-for-stores) in ons gedetailleerde onderwerp.",
          image: {
            src: "/images/academy/nl/silo-structure-ecommerce.svg",
            alt: "Diagram met drie inhoudsilo's voor hardloopschoenen, wandelschoenen en accessoires, elk met categoriepagina's, producten en bloginhoud met dichte interne koppelingen binnen silo's en schaarse cro",
            caption: "Koppel genereus binnen silo's (categorie, producten, gidsen) en spaarzaam tussen deze silo's. Dit versterkt de actuele relevantie voor Google.",
          },
          callout: {
            title: "Silo-Auswirkung",
            text: "Winkels die silo-herstructureringen implementeerden, zagen de rangschikking van categoriepagina's binnen drie maanden met gemiddeld 8 posities verbeteren. De grootste winst kwam voort uit het verbinden van bloginhoud met gerelateerde producten",
          },
        },
        {
          title: "siteFocusScore: Waarom Google een topisch strakke site-architectuur beloont",
          content:
            "Het leak noemde siteFocusScore - een gekwantificeerde maat voor hoe geconcentreerd de inhoud van een site is binnen een topische niche. Sites die gedisciplineerde, thematisch coherente inhoud publiceren ranken beter in hun niche. Sites die naar niet-gerelateerde onderwerpen drijven verdunnen de score en verliezen autoriteit overal.\n\nVoor ecommerce valideert dit de cluster-gebaseerde architectuur die deze gids al behandelt, met een scherpere snede. Een gespecialiseerde outdoor-gear-winkel die 200 pagina's over wandelen, kamperen en trailrunning publiceert, concentreert topische signalen op die clusters. Dezelfde winkel die een sectie toevoegt over \"kantoorproductiviteitstips\" omdat iemand dacht dat het verkeer zou genereren, verdunt het nichesignaal - en het leak suggereert dat dit de rankings van de oorspronkelijke outdoor-inhoud kan schaden, niet alleen de nieuwe inhoud.\n\nDe praktische implicatie voor site-architectuur: elke URL van je winkel moet een duidelijk antwoord hebben op \"waarom staat dit op dit domein\". Als een sectie niet verdedigd kan worden als on-topic voor de niche van het merk, is het waarschijnlijk een netto negatief. siteFocusScore is de leak-naam voor het principe, maar het onderliggende gedrag is al jaren waarneembaar - het leak bevestigde alleen dat Google het expliciet meet.",
          items: [
            "siteFocusScore kwantificeert hoe topisch geconcentreerd een site is binnen zijn niche",
            "Off-topic secties verdunnen de score en kunnen rankings van on-topic pagina's schaden, niet alleen de nieuwe",
            "Cluster-gebaseerde architectuur (de benadering van deze gids) mapt direct naar een hogere siteFocusScore",
            "Audit elke sectie: \"waarom staat dit op dit domein\" - alles wat niet verdedigd kan worden is waarschijnlijk een netto last",
          ],
        },
      ],
      navLabels: {
        previous: "E-commerce Blog SEO",
        next: "Crawlbudgetbeheer",
      },
    },
  },
};
