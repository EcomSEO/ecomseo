import type { BlogArticle } from "../types";

export const ecommerceSeoMistakes: BlogArticle = {
  slug: "ecommerce-seo-mistakes",
  category: "strategy",
  publishDate: "2026-03-11",
  readingTime: 12,
  author: "Fabian van Til",
  authorRole: "CEO at EcomSEO",
  authorSlug: "fabian-van-til",
  primaryKeyword: "ecommerce seo mistakes",
  secondaryKeywords: ["common ecommerce seo errors", "ecommerce seo problems", "seo mistakes online stores"],
  content: {
    en: {
      title: "10 Ecommerce SEO Mistakes and How to Fix Them",
      description: "We audit ecommerce stores every week. These are the 10 SEO mistakes we find most often, why they happen, the damage they cause, and how to fix them.",
      sections: [
        {
          heading: "The mistakes we see in almost every audit",
          body: [
            "We audit ecommerce stores every week. After hundreds of audits across Shopify, Magento, WooCommerce, and custom platforms, we see the same mistakes repeated over and over. Some are obvious. Some are subtle. All of them cost real money in lost organic traffic and revenue. Running a thorough [ecommerce SEO audit](/blog/how-to-make-ecommerce-seo-audit) is the fastest way to surface all of them at once.",
            "What frustrates us is that most of these mistakes are preventable. They happen because of rushed store launches, platform defaults that nobody changed, or well-meaning developers who do not understand SEO. The good news is that every single one has a clear fix.",
            "We ranked these 10 mistakes roughly by how frequently we encounter them and how much damage they typically cause. If you run an ecommerce store, you are almost certainly making at least two or three of these right now."
          ],
          image: { src: "/images/blog/seo-mistakes-impact.svg", alt: "Horizontal bar chart ranking top ecommerce SEO mistakes by traffic impact severity", caption: "The 10 most common ecommerce SEO mistakes ranked by traffic impact" },
        },
        {
          heading: "1. Duplicate content from product variants and filters",
          body: [
            "This is the most common ecommerce SEO mistake, and it is also one of the most damaging. It happens when your platform generates unique URLs for every product variant, filter combination, and sort order. A store with 500 products can easily end up with 50,000 indexable URLs, most of which contain near-identical content.",
            "Why it happens: Ecommerce platforms create these URLs by default. When a customer selects size 'M' in blue, the URL changes to /product?size=m&color=blue. Apply a filter for 'price low to high' on a category page, and you get /category?sort=price-asc. Each of these URLs is a separate page to Google. And each one has the same core content as the base page.",
            "The damage: Google wastes crawl budget indexing thousands of duplicate pages instead of your actual product and category pages. Ranking signals get diluted across multiple URLs for the same content. We audited a home goods store with 2,000 products that had 180,000 indexed URLs. Only 8,000 of those were the canonical product and category pages they actually wanted ranking.",
            "How to fix it: Implement canonical tags on all variant URLs pointing to the main product page. Use the robots meta tag or robots.txt to block filter and sort parameter URLs from indexing. In Google Search Console, configure URL parameters to tell Google which parameters change page content (like category) and which do not (like sort order). The cleanup typically takes 2 to 4 weeks and we often see organic traffic increase by 15% to 30% within 2 months just from resolving this one issue. Use our [ecommerce SEO checklist](/blog/ecommerce-seo-checklist) to work through these fixes systematically."
          ],
          image: { src: "/images/blog/duplicate-content-sources.svg", alt: "Diagram showing six common sources of duplicate content in ecommerce stores", caption: "Common duplicate content sources and how to fix them with canonical tags" },
          callout: { title: "Duplication Scale", text: "A store with 2,000 products had 180,000 indexed URLs -- only 8,000 were the actual pages they wanted ranking. Fixing canonicals alone can boost organic traffic 15-30% within two months." },
        },
        {
          heading: "2. Thin product page content",
          body: [
            "A product page with a title, a price, a 20-word manufacturer description, and a photo is not a page that Google wants to rank. Yet this is what most ecommerce product pages look like.",
            "Why it happens: Stores often import product data directly from suppliers or manufacturers with no modifications. When you have 5,000 products, writing unique descriptions for each one feels impossible. So the manufacturer's boilerplate stays.",
            "The damage: Thin content means Google sees your product pages as low-value. They rank poorly or not at all. Worse, if 200 other retailers use the same manufacturer description, Google has no reason to pick your page over any of the others. We compared two competing outdoor gear stores. One had manufacturer descriptions averaging 35 words. The other had original descriptions averaging 180 words with usage tips and comparisons. The second store ranked for 4x more product-level keywords.",
            "How to fix it: Prioritize your top revenue-generating products and write original descriptions of at least 150 words. Include details that the manufacturer description misses: how the product is actually used, who it is best for, how it compares to alternatives, and what common questions buyers have. Add a structured specifications section with material, dimensions, weight, and compatibility details. You do not need to rewrite all 5,000 products at once. Start with the top 100 by revenue and work outward."
          ],
        },
        {
          heading: "3. Ignoring site speed on product and category pages",
          body: [
            "Everyone knows site speed matters. Almost nobody actually fixes it. Ecommerce stores are especially prone to speed issues because product pages tend to be heavy with images, reviews, related product widgets, and third-party scripts. Speed is just one of many factors covered in our [technical SEO for ecommerce](/blog/technical-seo-for-ecommerce) guide.",
            "Why it happens: Every app, plugin, or integration adds JavaScript. Review widgets, live chat, analytics tools, retargeting pixels, social proof popups. Each one adds 50ms to 500ms of load time. A typical Shopify store has 15 to 25 apps installed, and many of them inject scripts on every page load. Nobody notices the incremental slowdown until the site takes 6 seconds to become interactive.",
            "The damage: Google uses Core Web Vitals as a ranking signal. Specifically, Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP). Slow sites rank lower, period. But the revenue impact goes beyond rankings. For every 100ms of improvement in load time, conversion rates increase by an average of 1.1% according to Deloitte's research on retail sites. A store doing $2M per year that improves load time by 1 second could see $100K+ in additional revenue.",
            "How to fix it: Audit your third-party scripts and remove anything you are not actively using. Lazy-load images below the fold. Serve images in WebP format and use responsive sizing. Move non-critical JavaScript to async or defer loading. Implement proper browser caching headers. For Shopify stores specifically, reduce app count and check if any apps are loading scripts sitewide when they only need to run on specific pages. Target an LCP under 2.5 seconds and an INP under 200 milliseconds."
          ],
          image: { src: "/images/blog/site-speed-revenue-impact.svg", alt: "Site speed revenue impact showing Core Web Vitals targets and the cost of slow load times for ecommerce", caption: "Every 100ms improvement in load time increases conversion rates by 1.1%" },
          callout: { title: "Speed = Revenue", text: "A $2M/year store that improves load time by 1 second could see $100K+ in additional revenue. The typical Shopify store has 15-25 apps injecting scripts -- each adding 50-500ms of load time." },
        },
        {
          heading: "4. Poor internal linking structure",
          body: [
            "Most ecommerce stores rely entirely on navigation menus and breadcrumbs for internal linking. That is not enough. Google discovers and evaluates page importance based on how many internal links point to a page and from where.",
            "Why it happens: Internal linking requires deliberate planning, and most store owners focus on product pages and checkout flow rather than link architecture. The CMS or platform handles navigation, and nobody thinks about it further. Related product sections exist for conversion purposes but often use JavaScript rendering that Google cannot follow.",
            "The damage: Orphaned product pages (pages with no internal links pointing to them) are invisible to Google's crawler. We regularly find that 20% to 40% of product pages on ecommerce stores have fewer than 3 internal links. These pages rank for almost nothing. Meanwhile, the homepage typically has thousands of internal links and all that authority has nowhere productive to flow.",
            "How to fix it: Add contextual internal links in product descriptions pointing to related products and parent categories. Implement a 'related products' section that uses actual HTML links, not JavaScript-rendered carousels that Googlebot cannot parse. Create content hubs (buying guides, comparison pages, how-to articles) that link to groups of related products. Use breadcrumbs on every page. For large catalogs, build an HTML sitemap page that links to all top-level and second-level categories. One client added contextual internal links to their top 200 product pages and saw average ranking position improve by 4.2 positions within 8 weeks."
          ],
          image: { src: "/images/blog/internal-linking-architecture.svg", alt: "Ecommerce internal linking architecture showing homepage, categories, products, and content hubs connected", caption: "Content hubs fill the linking gap -- 20-40% of product pages typically have fewer than 3 internal links" },
        },
        {
          heading: "5. Missing or duplicate meta titles and descriptions",
          body: [
            "We still find stores where hundreds of product pages share the same meta title template ('Product Name | Store Name') with no unique description, or where meta descriptions are entirely missing and Google generates snippets from whatever text it finds on the page.",
            "Why it happens: Platform defaults. Shopify, WooCommerce, and Magento all auto-generate meta titles from the product name, and many store owners never customize them. For descriptions, the default is often blank or a truncated version of the product description that reads poorly in search results.",
            "The damage: Your meta title is the single strongest on-page ranking signal. A generic template like 'Blue Widget | Store Name' misses the opportunity to include relevant keywords. And your meta description, while not a direct ranking factor, directly affects click-through rate. A well-written meta description can increase CTR by 30% to 50% compared to auto-generated snippets.",
            "How to fix it: Create a meta title formula that includes the primary keyword, the product name, and a differentiator. For example: 'Organic Cotton V-Neck T-Shirt for Men | Free Shipping | Store Name'. Write unique meta descriptions for at least your top-performing pages. For the rest, build smart templates that pull in product attributes dynamically: '[Product Name] in [Color]. [Material], [Key Feature]. [Price] with free shipping over $50.' This is better than nothing and takes minutes to set up in most platforms."
          ],
        },
        {
          heading: "6. Not optimizing category pages for search",
          body: [
            "Category pages are often the highest-value SEO targets on an ecommerce store. They target head terms with real volume ('men's running shoes', 'organic skincare') while product pages target long-tail variations. Yet most stores treat category pages as nothing more than a grid of product thumbnails.",
            "Why it happens: Designers and UX teams focus on making category pages visually clean, which usually means minimal text. The assumption is that shoppers want to browse products, not read paragraphs. This is a false choice. You can have both.",
            "The damage: A category page with no text content gives Google almost nothing to work with. The only content is product titles and prices, which are not enough to rank for competitive category-level keywords. We see this constantly: stores that rank on page 2 or 3 for their most valuable category terms, losing thousands of potential visits per month.",
            "How to fix it: Add 200 to 400 words of original content to each category page. Place it below the product grid so it does not interfere with the shopping experience. Include the target keyword naturally, describe what makes your selection different, and link to relevant buying guides or subcategories. Some brands add category content in a collapsible section above the product grid, visible to Google but unobtrusive for shoppers. Either approach works. For a full walkthrough of optimizing product and category pages, see our guide to [on-page SEO for ecommerce](/blog/on-page-seo-for-ecommerce)."
          ],
        },
        {
          heading: "7. Broken redirect chains and 404 errors",
          body: [
            "Products get discontinued. Collections rotate. URLs change during redesigns. Without proper redirect management, old URLs either break (404 errors) or stack up in long redirect chains (URL A redirects to B, which redirects to C, which redirects to D).",
            "Why it happens: Nobody owns the redirect process. The marketing team removes old products without notifying anyone. The development team changes URL structures during migrations without mapping old URLs to new ones. Over time, redirect files grow into tangled messes that nobody wants to touch.",
            "The damage: 404 errors on pages that had backlinks or rankings waste that accumulated authority. Redirect chains (3+ hops) slow down page delivery and lose link equity at each hop. Google has stated that 301 redirects pass full link equity, but chains of redirects still cause problems with crawl efficiency and page speed. We audited a fashion retailer that had 12,000 404 errors and 3,000 redirect chains. Fixing these issues alone recovered 18% of their lost organic traffic within 3 months.",
            "How to fix it: Run a crawl of your site with Screaming Frog or Sitebulb and identify all 404 errors and redirect chains. For 404s, implement 301 redirects to the most relevant live page (usually the parent category or a similar product). For chains, update each redirect to point directly to the final destination URL. Set up a process so that whenever a product is discontinued, a redirect is created as part of the removal workflow. Check your redirect file quarterly."
          ],
        },
        {
          heading: "8. No schema markup on product pages",
          body: [
            "Schema markup tells Google exactly what your page contains: the product name, price, availability, rating, and more. Without it, Google has to guess. And Google's guesses are not always correct.",
            "Why it happens: Schema markup requires either a plugin, a theme that supports it natively, or custom development. Many store owners do not know it exists. Those who do often assume their theme handles it, without verifying whether the markup is correct or complete.",
            "The damage: Pages without schema markup are ineligible for rich results (the enhanced search listings that show price, ratings, and availability directly in the SERP). Rich results have significantly higher click-through rates than plain blue links. Ahrefs data shows that pages with rich snippets get 58% of clicks on the first page, compared to standard results.",
            "How to fix it: Implement Product schema on every product page with at minimum: name, image, description, brand, sku, offers (price, currency, availability), and aggregateRating. Use Google's Rich Results Test to validate your markup. If you are on Shopify, apps like JSON-LD for SEO handle this automatically. On WooCommerce, plugins like Rank Math or Yoast WooCommerce SEO add product schema. Verify that the schema updates dynamically when prices or availability change. Stale schema data (showing a product as in stock when it is sold out) can trigger manual actions from Google."
          ],
          image: { src: "/images/blog/schema-markup-rich-results.svg", alt: "Product schema markup comparison showing plain search result versus rich result with ratings, price, and availability", caption: "Pages with rich snippets get 58% of clicks on the first page versus standard results" },
          callout: { title: "Rich Results Win Clicks", text: "Pages with rich snippets get 58% of first-page clicks compared to standard results. Implement Product schema with name, image, price, availability, and rating on every product page." },
        },
        {
          heading: "9. Blocking important pages with robots.txt or noindex",
          body: [
            "This one sounds basic, but we find it in roughly 1 out of every 5 audits. Pages that should be indexed are accidentally blocked by robots.txt rules or noindex meta tags left over from development or staging environments.",
            "Why it happens: During development, teams add noindex tags to prevent staging sites from being indexed. When the site launches, someone forgets to remove them. Or an overly aggressive robots.txt file blocks entire sections of the site. We once found a Magento store where the robots.txt blocked /catalog/, which contained every single product and category page on the site. Their developer had copied a robots.txt template from a forum post without understanding what it did.",
            "The damage: If Google cannot crawl or index your pages, they do not exist in search results. The Magento store we mentioned had zero organic traffic to product pages for 4 months before they noticed. That is not a subtle issue. That is a total SEO blackout.",
            "How to fix it: Check your robots.txt file right now. Make sure it is not blocking /collections/, /products/, /catalog/, or whatever URL pattern your platform uses for product and category pages. Use Google Search Console's URL Inspection tool to verify that your important pages are indexed. Search 'site:yourdomain.com' in Google and compare the indexed page count to the number of pages you expect. If there is a large discrepancy, investigate immediately."
          ],
        },
        {
          heading: "10. Treating SEO as a one-time project",
          body: [
            "This is not a technical mistake. It is a strategic one. And it might be the most expensive mistake on this list.",
            "Why it happens: A store launches, hires an agency or consultant to 'do SEO,' gets some improvements, and then stops. The assumption is that SEO is like a website redesign: you do it once and it is done. This misunderstanding is everywhere.",
            "The damage: SEO results decay without ongoing effort. Competitors publish new content, earn new backlinks, and improve their technical foundations. Google updates its algorithm 500 to 600 times per year. Product pages go stale as inventory changes. New technical issues creep in with every platform update and new app installation. We have watched stores go from position 3 to position 15 for their primary keyword within 6 months of stopping SEO work.",
            "How to fix it: Build SEO into your ongoing operations. Allocate monthly time for content creation (product descriptions, category content, blog posts). Do a technical audit quarterly. Monitor rankings and traffic weekly. Update product pages when inventory changes. Build links consistently rather than in bursts. SEO is a compounding investment. The stores that win in organic search are the ones that treat it as a continuous process, not a project with a finish date.",
            "If you recognized your store in two or more of these mistakes, you are not alone. The difference between stores that grow organic traffic and those that stagnate is almost always execution on these fundamentals. Not advanced tactics, not secret tricks. Just getting the basics right, consistently."
          ],
          callout: { title: "SEO Never Stops", text: "Google updates its algorithm 500-600 times per year. Stores that stop SEO work can drop from position 3 to position 15 within six months. Treat SEO as a continuous process, not a one-time project." },
        },
      ],
    },
    fr: {
      title: "10 erreurs SEO en ecommerce et comment les corriger",
      description: "Nous auditons des boutiques en ligne chaque semaine. Voici les 10 erreurs SEO que nous trouvons le plus souvent, pourquoi elles surviennent, les dommages qu'elles causent et comment les corriger.",
      sections: [
        {
          heading: "Les erreurs que nous trouvons dans presque chaque audit",
          body: [
            "Nous auditons des boutiques en ligne chaque semaine. Après des centaines d'audits sur Shopify, Magento, WooCommerce et des plateformes sur mesure, nous voyons les mêmes erreurs se répéter encore et encore. Certaines sont évidentes. Certaines sont subtiles. Toutes coûtent de l'argent réel en trafic organique et en chiffre d'affaires perdus. Réaliser un [audit SEO ecommerce](/blog/how-to-make-ecommerce-seo-audit) approfondi est le moyen le plus rapide de toutes les mettre en lumière en une seule fois.",
            "Ce qui nous frustre, c'est que la plupart de ces erreurs sont \u00c3\u00a9vitables. Elles surviennent \u00c3\u00a0 cause de lancements de boutiques pr\u00c3\u00a9cipit\u00c3\u00a9s, de param\u00c3\u00a8tr\u00e8s par d\u00c3\u00a9faut de la plateforme que personne n'a modifi\u00c3\u00a9s, ou de d\u00c3\u00a9veloppeurs bien intentionn\u00c3\u00a9s qui ne comprennent pas le SEO. La bonne nouvelle est que chacune d'entre elles a une solution claire.",
            "Nous avons classé ces 10 erreurs approximativement selon la fréquence à laquelle nous les rencontrons et l'ampleur des dommages qu'elles causent généralement. Si vous gérez une boutique en ligne, vous commettez presque certainement au moins deux ou trois d'entre elles en ce moment."
          ],
          image: { src: "/images/blog/fr/seo-mistakes-impact.svg", alt: "Horizontal bar chart ranking top ecommerce SEO mistakes by traffic impact severity", caption: "The 10 most common ecommerce SEO mistakes ranked by traffic impact" },
        },
        {
          heading: "1. Contenu dupliqué provenant des variantes de produits et des filtres",
          body: [
            "C'est l'erreur SEO ecommerce la plus courante, et c'est aussi l'une des plus dommageables. Elle survient lorsque votre plateforme génère des URL uniques pour chaque variante de produit, combinaison de filtres et ordre de tri. Une boutique avec 500 produits peut facilement se retrouver avec 50 000 URL indexables, dont la plupart contiennent un contenu quasi identique.",
            "Pourquoi cela se produit : Les plateformes ecommerce créent ces URL par défaut. Lorsqu'un client sélectionne la taille \"M\" en bleu, l'URL change en /product?size=m&color=blue. Appliquez un filtre pour \"prix croissant\" sur une page catégorie, et vous obtenez /category?sort=price-asc. Chacune de ces URL est une page distincte pour Google. Et chacune a le même contenu de base que la page principale.",
            "Les dommages : Google gaspille du budget de crawl à indexer des milliers de pages dupliquées au lieu de vos véritables pages produits et catégories. Les signaux de classement sont dilués entre plusieurs URL pour le même contenu. Nous avons audité une boutique d'articles pour la maison avec 2 000 produits qui avait 180 000 URL indexées. Seules 8 000 d'entre elles étaient les pages produits et catégories canoniques qu'ils voulaient réellement voir se positionner.",
            "Comment corriger : Impl\u00c3\u00a9mentez des balises canonical sur toutes les URL de variantes pointant vers la page produit principale. Utilisez la balise meta robots ou le robots.txt pour bloquer l'indexation des URL avec param\u00c3\u00a8tr\u00e8s de filtre et de tri. Dans Google Search Console, configurez les param\u00c3\u00a8tr\u00e8s d'URL pour indiquer \u00c3\u00a0 Google quels param\u00c3\u00a8tr\u00e8s modifient le contenu de la page (comme la cat\u00c3\u00a9gorie) et lesquels ne le font pas (comme l'ordre de tri). Le nettoyage prend g\u00c3\u00a9n\u00c3\u00a9ralement 2 \u00c3\u00a0 4 semaines et nous constatons souvent une augmentation du trafic organique de 15 % \u00c3\u00a0 30 % dans les 2 mois suivants, juste en r\u00c3\u00a9solvant ce seul probl\u00c3\u00a8me. Utilisez notre [checklist SEO ecommerce](/blog/ecommerce-seo-checklist) pour traiter ces corrections de mani\u00c3\u00a8re syst\u00c3\u00a9matique."
          ],
          image: { src: "/images/blog/fr/duplicate-content-sources.svg", alt: "Diagram showing six common sources of duplicate content in ecommerce stores", caption: "Common duplicate content sources and how to fix them with canonical tags" },
          callout: { title: "Duplication Scale", text: "A store with 2,000 products had 180,000 indexed URLs -- only 8,000 were the actual pages they wanted ranking. Fixing canonicals alone can boost organic traffic 15-30% within two months." },
        },
        {
          heading: "2. Contenu insuffisant sur les pages produits",
          body: [
            "Une page produit avec un titre, un prix, une description fabricant de 20 mots et une photo n'est pas une page que Google souhaite positionner. Pourtant, c'est à quoi ressemblent la plupart des pages produits ecommerce.",
            "Pourquoi cela se produit : Les boutiques importent souvent les données produits directement des fournisseurs ou fabricants sans aucune modification. Quand vous avez 5 000 produits, écrire des descriptions uniques pour chacun semble impossible. Alors le texte standard du fabricant reste en place.",
            "Les dommages : Un contenu insuffisant signifie que Google considère vos pages produits comme ayant peu de valeur. Elles se positionnent mal ou pas du tout. Pire, si 200 autres détaillants utilisent la même description fabricant, Google n'a aucune raison de choisir votre page plutôt qu'une autre. Nous avons comparé deux boutiques concurrentes d'équipement outdoor. L'une avait des descriptions fabricant de 35 mots en moyenne. L'autre avait des descriptions originales de 180 mots en moyenne avec des conseils d'utilisation et des comparaisons. La seconde boutique se positionnait sur 4 fois plus de mots-clés au niveau produit.",
            "Comment corriger : Priorisez vos produits qui génèrent le plus de chiffre d'affaires et rédigez des descriptions originales d'au moins 150 mots. Incluez les détails que la description fabricant omet : comment le produit est réellement utilisé, à qui il convient le mieux, comment il se compare aux alternatives, et quelles sont les questions fréquentes des acheteurs. Ajoutez une section de spécifications structurée avec les matériaux, dimensions, poids et compatibilités. Vous n'avez pas besoin de réécrire les 5 000 produits d'un coup. Commencez par les 100 premiers par chiffre d'affaires et élargissez progressivement."
          ],
        },
        {
          heading: "3. Ignorer la vitesse du site sur les pages produits et catégories",
          body: [
            "Tout le monde sait que la vitesse du site est importante. Presque personne ne la corrige réellement. Les boutiques ecommerce sont particulièrement sujettes aux problèmes de vitesse car les pages produits sont souvent lourdes en images, avis, widgets de produits connexes et scripts tiers. La vitesse n'est qu'un des nombreux facteurs traités dans notre guide sur le [SEO technique pour le ecommerce](/blog/technical-seo-for-ecommerce).",
            "Pourquoi cela se produit : Chaque application, plugin ou intégration ajoute du JavaScript. Widgets d'avis, chat en direct, outils d'analyse, pixels de retargeting, popups de preuve sociale. Chacun ajoute 50 ms à 500 ms de temps de chargement. Une boutique Shopify typique a 15 à 25 applications installées, et beaucoup d'entre elles injectent des scripts à chaque chargement de page. Personne ne remarque le ralentissement progressif jusqu'à ce que le site mette 6 secondes à devenir interactif.",
            "Les dommages : Google utilise les Core Web Vitals comme signal de classement. Plus précisément, le Largest Contentful Paint (LCP), le Cumulative Layout Shift (CLS) et l'Interaction to Next Paint (INP). Les sites lents se positionnent moins bien, point final. Mais l'impact sur le chiffre d'affaires va au-delà des classements. Pour chaque 100 ms d'amélioration du temps de chargement, les taux de conversion augmentent en moyenne de 1,1 % selon l'étude de Deloitte sur les sites de vente au détail. Une boutique réalisant 2 millions d'euros par an qui améliore son temps de chargement d'une seconde pourrait voir plus de 100 000 € de chiffre d'affaires supplémentaire.",
            "Comment corriger : Auditez vos scripts tiers et supprimez tout ce que vous n'utilisez pas activement. Chargez les images sous la ligne de flottaison en lazy loading. Servez les images au format WebP et utilisez le dimensionnement responsive. Déplacez le JavaScript non critique vers un chargement async ou defer. Implémentez des en-têtes de mise en cache navigateur appropriés. Pour les boutiques Shopify en particulier, réduisez le nombre d'applications et vérifiez si certaines applications chargent des scripts sur tout le site alors qu'elles n'ont besoin de s'exécuter que sur des pages spécifiques. Visez un LCP inférieur à 2,5 secondes et un INP inférieur à 200 millisecondes."
          ],
          image: { src: "/images/blog/fr/site-speed-revenue-impact.svg", alt: "Site speed revenue impact showing Core Web Vitals targets and the cost of slow load times for ecommerce", caption: "Every 100ms improvement in load time increases conversion rates by 1.1%" },
          callout: { title: "Speed = Revenue", text: "A $2M/year store that improves load time by 1 second could see $100K+ in additional revenue. The typical Shopify store has 15-25 apps injecting scripts -- each adding 50-500ms of load time." },
        },
        {
          heading: "4. Mauvaise structure de liens internes",
          body: [
            "La plupart des boutiques ecommerce s'appuient entièrement sur les menus de navigation et les fils d'Ariane pour le maillage interne. Ce n'est pas suffisant. Google découvre et évalue l'importance des pages en fonction du nombre de liens internes qui pointent vers une page et de leur provenance.",
            "Pourquoi cela se produit : Le maillage interne nécessite une planification délibérée, et la plupart des propriétaires de boutiques se concentrent sur les pages produits et le tunnel de conversion plutôt que sur l'architecture des liens. Le CMS ou la plateforme gère la navigation, et personne n'y réfléchit davantage. Les sections de produits connexes existent pour la conversion mais utilisent souvent un rendu JavaScript que Google ne peut pas suivre.",
            "Les dommages : Les pages produits orphelines (pages sans liens internes pointant vers elles) sont invisibles pour le robot d'exploration de Google. Nous constatons régulièrement que 20 % à 40 % des pages produits sur les boutiques ecommerce ont moins de 3 liens internes. Ces pages ne se positionnent sur presque rien. Pendant ce temps, la page d'accueil a généralement des milliers de liens internes et toute cette autorité n'a nulle part où circuler de manière productive.",
            "Comment corriger : Ajoutez des liens internes contextuels dans les descriptions de produits pointant vers des produits connexes et les catégories parentes. Implémentez une section \"produits connexes\" qui utilise de véritables liens HTML, pas des carrousels rendus en JavaScript que Googlebot ne peut pas analyser. Créez des hubs de contenu (guides d'achat, pages de comparaison, articles pratiques) qui lient vers des groupes de produits connexes. Utilisez les fils d'Ariane sur chaque page. Pour les catalogues volumineux, créez une page plan du site HTML qui lie vers toutes les catégories de premier et deuxième niveau. Un client a ajouté des liens internes contextuels à ses 200 pages produits principales et a vu la position moyenne de classement s'améliorer de 4,2 positions en 8 semaines."
          ],
          image: { src: "/images/blog/fr/internal-linking-architecture.svg", alt: "Ecommerce internal linking architecture showing homepage, cat\u00e9gories, products, and content hubs connected", caption: "Content hubs fill the linking gap -- 20-40% of product pages typically have fewer than 3 internal links" },
        },
        {
          heading: "5. Balises title et meta descriptions manquantes ou dupliquées",
          body: [
            "Nous trouvons encore des boutiques où des centaines de pages produits partagent le même modèle de balise title (\"Nom du Produit | Nom de la Boutique\") sans description unique, ou où les meta descriptions sont entièrement absentes et Google génère des extraits à partir de n'importe quel texte qu'il trouve sur la page.",
            "Pourquoi cela se produit : Les param\u00c3\u00a8tr\u00e8s par d\u00c3\u00a9faut de la plateforme. Shopify, WooCommerce et Magento g\u00c3\u00a9n\u00c3\u00a8rent tous automatiquement les balises title \u00c3\u00a0 partir du nom du produit, et de nombreux propri\u00c3\u00a9taires de boutiques ne les personnalisent jamais. Pour les descriptions, la valeur par d\u00c3\u00a9faut est souvent vide ou une version tronqu\u00c3\u00a9e de la description du produit qui se lit mal dans les r\u00c3\u00a9sultats de recherche.",
            "Les dommages : Votre balise title est le signal de classement on-page le plus puissant. Un modèle générique comme \"Widget Bleu | Nom de la Boutique\" manque l'occasion d'inclure des mots-clés pertinents. Et votre meta description, bien qu'elle ne soit pas un facteur de classement direct, affecte directement le taux de clics. Une meta description bien rédigée peut augmenter le CTR de 30 % à 50 % par rapport aux extraits générés automatiquement.",
            "Comment corriger : Créez une formule de balise title qui inclut le mot-clé principal, le nom du produit et un élément différenciateur. Par exemple : \"T-shirt Col V en Coton Bio pour Homme | Livraison Gratuite | Nom de la Boutique\". Rédigez des meta descriptions uniques pour au moins vos pages les plus performantes. Pour le reste, construisez des modèles intelligents qui intègrent dynamiquement les attributs du produit : \"[Nom du Produit] en [Couleur]. [Matériau], [Caractéristique Clé]. [Prix] avec livraison gratuite à partir de 50 €.\" C'est mieux que rien et cela ne prend que quelques minutes à configurer sur la plupart des plateformes."
          ],
        },
        {
          heading: "6. Ne pas optimiser les pages catégories pour la recherche",
          body: [
            "Les pages catégories sont souvent les cibles SEO les plus précieuses d'une boutique ecommerce. Elles ciblent les termes principaux avec un volume réel (\"chaussures de running homme\", \"soins de la peau bio\") tandis que les pages produits ciblent les variations longue traîne. Pourtant, la plupart des boutiques traitent les pages catégories comme rien de plus qu'une grille de vignettes de produits.",
            "Pourquoi cela se produit : Les designers et les équipes UX se concentrent sur le fait de rendre les pages catégories visuellement épurées, ce qui signifie généralement un minimum de texte. L'hypothèse est que les acheteurs veulent parcourir les produits, pas lire des paragraphes. C'est un faux choix. Vous pouvez avoir les deux.",
            "Les dommages : Une page catégorie sans contenu textuel donne à Google presque rien sur quoi travailler. Le seul contenu est constitué des titres et des prix des produits, ce qui n'est pas suffisant pour se positionner sur des mots-clés de niveau catégorie compétitifs. Nous voyons cela constamment : des boutiques qui se positionnent en page 2 ou 3 pour leurs termes de catégorie les plus précieux, perdant des milliers de visites potentielles par mois.",
            "Comment corriger : Ajoutez 200 à 400 mots de contenu original à chaque page catégorie. Placez-le sous la grille de produits pour qu'il n'interfère pas avec l'expérience d'achat. Incluez le mot-clé cible naturellement, décrivez ce qui rend votre sélection différente, et liez vers des guides d'achat pertinents ou des sous-catégories. Certaines marques ajoutent du contenu de catégorie dans une section dépliable au-dessus de la grille de produits, visible par Google mais discrète pour les acheteurs. Les deux approches fonctionnent. Pour un guide complet sur l'optimisation des pages produits et catégories, consultez notre guide sur le [SEO on-page pour le ecommerce](/blog/on-page-seo-for-ecommerce)."
          ],
        },
        {
          heading: "7. Chaînes de redirections brisées et erreurs 404",
          body: [
            "Des produits sont abandonnés. Les collections changent. Les URL sont modifiées lors des refontes. Sans une gestion appropriée des redirections, les anciennes URL cassent (erreurs 404) ou s'empilent en longues chaînes de redirections (l'URL A redirige vers B, qui redirige vers C, qui redirige vers D).",
            "Pourquoi cela se produit : Personne n'est responsable du processus de redirection. L'équipe marketing supprime d'anciens produits sans prévenir personne. L'équipe de développement modifie les structures d'URL lors des migrations sans mapper les anciennes URL vers les nouvelles. Au fil du temps, les fichiers de redirection deviennent des enchevêtrements que personne ne veut toucher.",
            "Les dommages : Les erreurs 404 sur des pages qui avaient des backlinks ou des classements gaspillent cette autorité accumulée. Les chaînes de redirections (3+ sauts) ralentissent la livraison des pages et perdent de l'équité de lien à chaque saut. Google a déclaré que les redirections 301 transmettent la totalité de l'équité de lien, mais les chaînes de redirections causent toujours des problèmes d'efficacité de crawl et de vitesse de page. Nous avons audité un détaillant de mode qui avait 12 000 erreurs 404 et 3 000 chaînes de redirections. La correction de ces seuls problèmes a permis de récupérer 18 % de leur trafic organique perdu en 3 mois.",
            "Comment corriger : Lancez un crawl de votre site avec Screaming Frog ou Sitebulb et identifiez toutes les erreurs 404 et chaînes de redirections. Pour les 404, implémentez des redirections 301 vers la page active la plus pertinente (généralement la catégorie parente ou un produit similaire). Pour les chaînes, mettez à jour chaque redirection pour pointer directement vers l'URL de destination finale. Mettez en place un processus pour que chaque fois qu'un produit est abandonné, une redirection soit créée dans le cadre du workflow de suppression. Vérifiez votre fichier de redirections chaque trimestre."
          ],
        },
        {
          heading: "8. Absence de balisage schema sur les pages produits",
          body: [
            "Le balisage schema indique à Google exactement ce que contient votre page : le nom du produit, le prix, la disponibilité, la note et plus encore. Sans lui, Google doit deviner. Et les suppositions de Google ne sont pas toujours correctes.",
            "Pourquoi cela se produit : Le balisage schema nécessite soit un plugin, un thème qui le prend en charge nativement, soit un développement personnalisé. De nombreux propriétaires de boutiques ne savent pas qu'il existe. Ceux qui le savent supposent souvent que leur thème le gère, sans vérifier si le balisage est correct ou complet.",
            "Les dommages : Les pages sans balisage schema ne sont pas éligibles aux résultats enrichis (les listings de recherche améliorés qui affichent le prix, les notes et la disponibilité directement dans les SERP). Les résultats enrichis ont des taux de clics significativement plus élevés que les liens bleus classiques. Les données d'Ahrefs montrent que les pages avec des extraits enrichis obtiennent 58 % des clics en première page, par rapport aux résultats standards.",
            "Comment corriger : Implémentez le schema Product sur chaque page produit avec au minimum : nom, image, description, marque, SKU, offres (prix, devise, disponibilité) et aggregateRating. Utilisez le test des résultats enrichis de Google pour valider votre balisage. Si vous êtes sur Shopify, des applications comme JSON-LD for SEO gèrent cela automatiquement. Sur WooCommerce, des plugins comme Rank Math ou Yoast WooCommerce SEO ajoutent le schema produit. Vérifiez que le schema se met à jour dynamiquement lorsque les prix ou la disponibilité changent. Des données schema obsolètes (montrant un produit en stock alors qu'il est épuisé) peuvent déclencher des actions manuelles de Google."
          ],
          image: { src: "/images/blog/fr/schema-markup-rich-results.svg", alt: "Product schema markup comparison showing plain search result versus rich result with ratings, price, and availability", caption: "Pages with rich snippets get 58% of clicks on the first page versus standard results" },
          callout: { title: "Rich Results Win Clicks", text: "Pages with rich snippets get 58% of first-page clicks compared to standard results. Implement Product schema with name, image, price, availability, and rating on every product page." },
        },
        {
          heading: "9. Bloquer des pages importantes avec robots.txt ou noindex",
          body: [
            "Cela semble basique, mais nous le trouvons dans environ 1 audit sur 5. Des pages qui devraient être indexées sont accidentellement bloquées par des règles robots.txt ou des balises meta noindex laissées par les environnements de développement ou de staging.",
            "Pourquoi cela se produit : Pendant le développement, les équipes ajoutent des balises noindex pour empêcher les sites de staging d'être indexés. Quand le site est mis en production, quelqu'un oublie de les retirer. Ou un fichier robots.txt trop agressif bloque des sections entières du site. Nous avons trouvé une fois une boutique Magento où le robots.txt bloquait /catalog/, qui contenait chaque page produit et catégorie du site. Leur développeur avait copié un modèle de robots.txt d'un post de forum sans comprendre ce qu'il faisait.",
            "Les dommages : Si Google ne peut pas explorer ou indexer vos pages, elles n'existent pas dans les résultats de recherche. La boutique Magento que nous avons mentionnée avait zéro trafic organique vers les pages produits pendant 4 mois avant qu'ils ne s'en aperçoivent. Ce n'est pas un problème subtil. C'est un black-out SEO total.",
            "Comment corriger : Vérifiez votre fichier robots.txt maintenant. Assurez-vous qu'il ne bloque pas /collections/, /products/, /catalog/, ou tout autre motif d'URL que votre plateforme utilise pour les pages produits et catégories. Utilisez l'outil d'inspection d'URL de Google Search Console pour vérifier que vos pages importantes sont indexées. Recherchez \"site:votredomaine.com\" dans Google et comparez le nombre de pages indexées au nombre de pages que vous attendez. S'il y a un écart important, investiguez immédiatement."
          ],
        },
        {
          heading: "10. Traiter le SEO comme un projet ponctuel",
          body: [
            "Ce n'est pas une erreur technique. C'est une erreur stratégique. Et c'est peut-être l'erreur la plus coûteuse de cette liste.",
            "Pourquoi cela se produit : Une boutique se lance, engage une agence ou un consultant pour \"faire du SEO\", obtient quelques améliorations, puis arrête. L'hypothèse est que le SEO est comme une refonte de site web : on le fait une fois et c'est terminé. Ce malentendu est omniprésent.",
            "Les dommages : Les résultats SEO se dégradent sans effort continu. Les concurrents publient du nouveau contenu, obtiennent de nouveaux backlinks et améliorent leurs fondations techniques. Google met à jour son algorithme 500 à 600 fois par an. Les pages produits deviennent obsolètes à mesure que l'inventaire change. De nouveaux problèmes techniques apparaissent avec chaque mise à jour de plateforme et chaque nouvelle installation d'application. Nous avons vu des boutiques passer de la position 3 à la position 15 pour leur mot-clé principal en 6 mois après avoir arrêté le travail SEO.",
            "Comment corriger : Intégrez le SEO dans vos opérations courantes. Allouez du temps chaque mois pour la création de contenu (descriptions produits, contenu de catégories, articles de blog). Réalisez un audit technique chaque trimestre. Surveillez les classements et le trafic chaque semaine. Mettez à jour les pages produits lorsque l'inventaire change. Construisez des liens de manière régulière plutôt que par à-coups. Le SEO est un investissement cumulatif. Les boutiques qui gagnent en recherche organique sont celles qui le traitent comme un processus continu, pas un projet avec une date de fin.",
            "Si vous avez reconnu votre boutique dans deux ou plusieurs de ces erreurs, vous n'êtes pas seul. La différence entre les boutiques qui développent leur trafic organique et celles qui stagnent est presque toujours l'exécution sur ces fondamentaux. Pas de tactiques avancées, pas d'astuces secrètes. Juste bien faire les bases, de manière constante."
          ],
        }
      ],
    },
    nl: {
      title: "10 ecommerce SEO fouten en hoe je ze oplost",
      description: "We auditen elke week webwinkels. Dit zijn de 10 SEO-fouten die we het vaakst vinden, waarom ze gebeuren, welke schade ze veroorzaken en hoe je ze oplost.",
      sections: [
        {
          heading: "De fouten die we in bijna elke audit zien",
          body: [
            "We auditen elke week webwinkels. Na honderden audits op Shopify, Magento, WooCommerce en custom platformen zien we dezelfde fouten steeds opnieuw. Sommige zijn voor de hand liggend. Sommige zijn subtiel. Allemaal kosten ze echt geld in verloren organisch verkeer en omzet. Het uitvoeren van een grondige [ecommerce SEO audit](/blog/how-to-make-ecommerce-seo-audit) is de snelste manier om ze allemaal tegelijk aan het licht te brengen.",
            "Wat ons frustreert is dat de meeste van deze fouten vermijdbaar zijn. Ze gebeuren vanwege overhaaste winkellanceringen, platformstandaarden die niemand heeft gewijzigd, of goedbedoelende ontwikkelaars die SEO niet begrijpen. Het goede nieuws is dat elk ervan een duidelijke oplossing heeft.",
            "We rangschikten deze 10 fouten ruwweg op hoe vaak we ze tegenkomen en hoeveel schade ze doorgaans veroorzaken. Als je een webwinkel runt, maak je vrijwel zeker op dit moment minstens twee of drie van deze fouten.",
          ],
          image: { src: "/images/blog/nl/seo-mistakes-impact.svg", alt: "Horizontal bar chart ranking top ecommerce SEO mistakes by traffic impact severity", caption: "The 10 most common ecommerce SEO mistakes ranked by traffic impact" },
        },
        {
          heading: "1. Dubbele content door productvarianten en filters",
          body: [
            "Dit is de meest voorkomende ecommerce SEO-fout, en het is ook een van de meest schadelijke. Het gebeurt wanneer je platform unieke URL's genereert voor elke productvariant, filtercombinatie en sorteervolgorde. Een winkel met 500 producten kan gemakkelijk 50.000 indexeerbare URL's krijgen, waarvan de meeste bijna identieke content bevatten.",
            "Waarom het gebeurt: Ecommerce platformen maken deze URL's standaard aan. Wanneer een klant maat 'M' in blauw selecteert, verandert de URL naar /product?size=m&color=blauw. Pas een filter toe voor 'prijs laag naar hoog' op een categoriepagina en je krijgt /category?sort=price-asc. Elk van deze URL's is een aparte pagina voor Google. En elk heeft dezelfde kerninhoud als de basispagina.",
            "De schade: Google verspilt crawl budget aan het indexeren van duizenden dubbele pagina's in plaats van je daadwerkelijke product- en categoriepagina's. Rankingsignalen worden verdund over meerdere URL's voor dezelfde content. We auditeerden een huishoudelijke artikelenwinkel met 2.000 producten die 180.000 geindexeerde URL's had. Slechts 8.000 daarvan waren de canonieke product- en categoriepagina's die ze daadwerkelijk wilden laten ranken.",
            "Hoe op te lossen: Implementeer canonical tags op alle variant-URL's die verwijzen naar de hoofdproductpagina. Gebruik de robots meta tag of robots.txt om filter- en sorteerparameter-URL's van indexering te blokkeren. Configureer in Google Search Console URL-parameters om Google te vertellen welke parameters pagina-inhoud veranderen (zoals categorie) en welke niet (zoals sorteervolgorde). De opruiming duurt doorgaans 2 tot 4 weken en we zien vaak organisch verkeer met 15% tot 30% stijgen binnen 2 maanden puur door dit ene probleem op te lossen. Gebruik onze [ecommerce SEO checklist](/blog/ecommerce-seo-checklist) om deze fixes systematisch door te werken.",
          ],
          image: { src: "/images/blog/nl/duplicate-content-sources.svg", alt: "Diagram showing six common sources of duplicate content in ecommerce stores", caption: "Common duplicate content sources and how to fix them with canonical tags" },
          callout: { title: "Duplication Scale", text: "A store with 2,000 products had 180,000 indexed URLs -- only 8,000 were the actual pages they wanted ranking. Fixing canonicals alone can boost organic traffic 15-30% within two months." },
        },
        {
          heading: "2. Dunne productpaginacontent",
          body: [
            "Een productpagina met een titel, een prijs, een productbeschrijving van 20 woorden van de fabrikant en een foto is geen pagina die Google wil ranken. Toch is dit hoe de meeste ecommerce productpagina's eruitzien.",
            "Waarom het gebeurt: Winkels importeren vaak productdata rechtstreeks van leveranciers of fabrikanten zonder aanpassingen. Wanneer je 5.000 producten hebt, voelt het schrijven van unieke beschrijvingen voor elk onmogelijk. Dus de boilerplate van de fabrikant blijft staan.",
            "De schade: Dunne content betekent dat Google je productpagina's als lage waarde beschouwt. Ze ranken slecht of helemaal niet. Erger nog, als 200 andere retailers dezelfde fabrikansbeschrijving gebruiken, heeft Google geen reden om jouw pagina boven een van de andere te kiezen. We vergeleken twee concurrerende outdoor gear winkels. De ene had fabrikansbeschrijvingen van gemiddeld 35 woorden. De andere had originele beschrijvingen van gemiddeld 180 woorden met gebruikstips en vergelijkingen. De tweede winkel rankte voor 4x meer product-level zoekwoorden.",
            "Hoe op te lossen: Geef prioriteit aan je top omzetgenererende producten en schrijf originele beschrijvingen van minstens 150 woorden. Neem details op die de fabrikansbeschrijving mist: hoe het product daadwerkelijk wordt gebruikt, voor wie het het beste is, hoe het zich verhoudt tot alternatieven en welke veelgestelde vragen kopers hebben. Voeg een gestructureerde specificatiesectie toe met materiaal, afmetingen, gewicht en compatibiliteitsdetails. Je hoeft niet alle 5.000 producten tegelijk te herschrijven. Begin met de top 100 op basis van omzet en werk naar buiten toe.",
          ],
        },
        {
          heading: "3. Sitesnelheid negeren op product- en categoriepagina's",
          body: [
            "Iedereen weet dat sitesnelheid ertoe doet. Bijna niemand repareert het daadwerkelijk. Webwinkels zijn bijzonder vatbaar voor snelheidsproblemen omdat productpagina's zwaar zijn met afbeeldingen, reviews, gerelateerde productwidgets en third-party scripts. Snelheid is slechts een van vele factoren die worden behandeld in onze [technische SEO voor ecommerce](/blog/technical-seo-for-ecommerce) gids.",
            "Waarom het gebeurt: Elke app, plugin of integratie voegt JavaScript toe. Reviewwidgets, live chat, analysetools, retargetingpixels, social proof popups. Elk voegt 50ms tot 500ms laadtijd toe. Een typische Shopify winkel heeft 15 tot 25 apps geinstalleerd, en veel ervan injecteren scripts bij elke paginalading. Niemand merkt de incrementele vertraging op totdat de site 6 seconden nodig heeft om interactief te worden.",
            "De schade: Google gebruikt Core Web Vitals als rankingsignaal. Specifiek Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS) en Interaction to Next Paint (INP). Trage sites ranken lager, punt. Maar de omzetimpact gaat verder dan rankings. Voor elke 100ms verbetering in laadtijd stijgen conversiepercentages gemiddeld met 1,1% volgens Deloitte's onderzoek naar retailsites. Een winkel die 2 miljoen euro per jaar doet en de laadtijd met 1 seconde verbetert, kan meer dan 100.000 euro aan extra omzet zien.",
            "Hoe op te lossen: Audit je third-party scripts en verwijder alles wat je niet actief gebruikt. Lazy-load afbeeldingen onder de fold. Serveer afbeeldingen in WebP-formaat en gebruik responsieve sizing. Verplaats niet-kritiek JavaScript naar async of defer loading. Implementeer correcte browsercaching headers. Specifiek voor Shopify winkels, verminder het aantal apps en controleer of apps sitebreed scripts laden wanneer ze alleen op specifieke pagina's hoeven te draaien. Richt op een LCP onder 2,5 seconden en een INP onder 200 milliseconden.",
          ],
          image: { src: "/images/blog/nl/site-speed-revenue-impact.svg", alt: "Site speed revenue impact showing Core Web Vitals targets and the cost of slow load times for ecommerce", caption: "Every 100ms improvement in load time increases conversion rates by 1.1%" },
          callout: { title: "Speed = Revenue", text: "A $2M/year store that improves load time by 1 second could see $100K+ in additional revenue. The typical Shopify store has 15-25 apps injecting scripts -- each adding 50-500ms of load time." },
        },
        {
          heading: "4. Slechte interne linkstructuur",
          body: [
            "De meeste webwinkels vertrouwen volledig op navigatiemenu's en breadcrumbs voor interne linking. Dat is niet genoeg. Google ontdekt en evalueert pagina-belangrijkheid op basis van hoeveel interne links naar een pagina verwijzen en vanwaar.",
            "Waarom het gebeurt: Interne linking vereist bewuste planning, en de meeste winkeleigenaren richten zich op productpagina's en het afrekenproces in plaats van op linkarchitectuur. Het CMS of platform regelt navigatie, en niemand denkt er verder over na. Gerelateerde productsecties bestaan voor conversiedoeleinden maar gebruiken vaak JavaScript-rendering die Google niet kan volgen.",
            "De schade: Verweesde productpagina's (pagina's zonder interne links die ernaar verwijzen) zijn onzichtbaar voor Google's crawler. We vinden regelmatig dat 20% tot 40% van productpagina's op webwinkels minder dan 3 interne links heeft. Deze pagina's ranken voor bijna niets. Ondertussen heeft de homepage doorgaans duizenden interne links en al die autoriteit heeft nergens productief naartoe te stromen.",
            "Hoe op te lossen: Voeg contextuele interne links toe in productbeschrijvingen die verwijzen naar gerelateerde producten en bovenliggende categorieen. Implementeer een 'gerelateerde producten' sectie die echte HTML-links gebruikt, geen JavaScript-gerenderde carrousels die Googlebot niet kan parsen. Creeer contenthubs (koopgidsen, vergelijkingspagina's, how-to artikelen) die linken naar groepen gerelateerde producten. Gebruik breadcrumbs op elke pagina. Voor grote catalogi, bouw een HTML sitemap-pagina die linkt naar alle top-level en second-level categorieen. Een klant voegde contextuele interne links toe aan hun top 200 productpagina's en zag de gemiddelde rankingpositie met 4,2 posities verbeteren binnen 8 weken.",
          ],
          image: { src: "/images/blog/nl/internal-linking-architecture.svg", alt: "Ecommerce internal linking architecture showing homepage, categories, products, and content hubs connected", caption: "Content hubs fill the linking gap -- 20-40% of product pages typically have fewer than 3 internal links" },
        },
        {
          heading: "5. Ontbrekende of dubbele meta titels en beschrijvingen",
          body: [
            "We vinden nog steeds winkels waar honderden productpagina's dezelfde meta title template delen ('Productnaam | Winkelnaam') zonder unieke beschrijving, of waar meta descriptions volledig ontbreken en Google snippets genereert uit welke tekst het ook maar op de pagina vindt.",
            "Waarom het gebeurt: Platformstandaarden. Shopify, WooCommerce en Magento genereren allemaal automatisch meta titels vanuit de productnaam, en veel winkeleigenaren passen ze nooit aan. Voor beschrijvingen is de standaard vaak leeg of een afgekapte versie van de productbeschrijving die slecht leest in zoekresultaten.",
            "De schade: Je meta titel is het sterkste on-page rankingsignaal. Een generiek template als 'Blauwe Widget | Winkelnaam' mist de kans om relevante zoekwoorden op te nemen. En je meta description, hoewel geen directe rankingfactor, beinvloedt direct het click-through percentage. Een goed geschreven meta description kan CTR met 30% tot 50% verhogen vergeleken met automatisch gegenereerde snippets.",
            "Hoe op te lossen: Maak een meta title formule die het primaire zoekwoord, de productnaam en een onderscheidend kenmerk bevat. Bijvoorbeeld: 'Biologisch Katoenen V-Hals T-Shirt voor Heren | Gratis Verzending | Winkelnaam'. Schrijf unieke meta descriptions voor minstens je best presterende pagina's. Voor de rest, bouw slimme templates die dynamisch productattributen binnenhalen: '[Productnaam] in [Kleur]. [Materiaal], [Belangrijk Kenmerk]. [Prijs] met gratis verzending boven de 50 euro.' Dit is beter dan niets en kost minuten om in te stellen op de meeste platformen.",
          ],
        },
        {
          heading: "6. Categoriepagina's niet optimaliseren voor zoekresultaten",
          body: [
            "Categoriepagina's zijn vaak de meest waardevolle SEO-doelen op een webwinkel. Ze richten zich op head terms met echt volume ('heren hardloopschoenen', 'biologische huidverzorging') terwijl productpagina's long-tail variaties targeten. Toch behandelen de meeste winkels categoriepagina's als niets meer dan een raster van productminiaturen.",
            "Waarom het gebeurt: Ontwerpers en UX-teams richten zich op het visueel schoon maken van categoriepagina's, wat meestal minimale tekst betekent. De aanname is dat shoppers producten willen bekijken, niet alinea's lezen. Dit is een valse keuze. Je kunt beide hebben.",
            "De schade: Een categoriepagina zonder tekstcontent geeft Google bijna niets om mee te werken. De enige content is producttitels en prijzen, wat niet genoeg is om te ranken voor competitieve categorie-level zoekwoorden. We zien dit voortdurend: winkels die ranken op pagina 2 of 3 voor hun meest waardevolle categorietermijnen, duizenden potentiele bezoeken per maand verliezend.",
            "Hoe op te lossen: Voeg 200 tot 400 woorden originele content toe aan elke categoriepagina. Plaats het onder het productraster zodat het niet interfereert met de winkelervaring. Neem het doelzoekwoord natuurlijk op, beschrijf wat jouw selectie anders maakt, en link naar relevante koopgidsen of subcategorieen. Sommige merken voegen categoriecontent toe in een inklapbare sectie boven het productraster, zichtbaar voor Google maar onopvallend voor shoppers. Beide benaderingen werken. Voor een volledig overzicht van het optimaliseren van product- en categoriepagina's, zie onze gids over [on-page SEO voor ecommerce](/blog/on-page-seo-for-ecommerce).",
          ],
        },
        {
          heading: "7. Kapotte redirect-ketens en 404-fouten",
          body: [
            "Producten worden stopgezet. Collecties roteren. URL's veranderen tijdens herontwerpen. Zonder goed redirectbeheer breken oude URL's (404-fouten) of stapelen ze op in lange redirect-ketens (URL A redirect naar B, die redirect naar C, die redirect naar D).",
            "Waarom het gebeurt: Niemand is eigenaar van het redirectproces. Het marketingteam verwijdert oude producten zonder iemand te informeren. Het ontwikkelteam verandert URL-structuren tijdens migraties zonder oude URL's te koppelen aan nieuwe. In de loop van de tijd groeien redirectbestanden uit tot verwarde rommel die niemand wil aanraken.",
            "De schade: 404-fouten op pagina's die backlinks of rankings hadden verspillen die opgebouwde autoriteit. Redirect-ketens (3+ hops) vertragen paginalevering en verliezen link equity bij elke hop. Google heeft verklaard dat 301 redirects volledige link equity doorgeven, maar ketens van redirects veroorzaken nog steeds problemen met crawl-efficientie en paginasnelheid. We auditeerden een moderetailer die 12.000 404-fouten en 3.000 redirect-ketens had. Het oplossen van deze problemen alleen al herstelde 18% van hun verloren organisch verkeer binnen 3 maanden.",
            "Hoe op te lossen: Draai een crawl van je site met Screaming Frog of Sitebulb en identificeer alle 404-fouten en redirect-ketens. Voor 404's, implementeer 301 redirects naar de meest relevante live pagina (meestal de bovenliggende categorie of een vergelijkbaar product). Voor ketens, werk elke redirect bij om rechtstreeks naar de uiteindelijke bestemmings-URL te verwijzen. Stel een proces in zodat wanneer een product wordt stopgezet, een redirect wordt aangemaakt als onderdeel van de verwijderingsworkflow. Controleer je redirectbestand elk kwartaal.",
          ],
        },
        {
          heading: "8. Geen schema markup op productpagina's",
          body: [
            "Schema markup vertelt Google precies wat je pagina bevat: de productnaam, prijs, beschikbaarheid, beoordeling en meer. Zonder moet Google raden. En Google's gissingen zijn niet altijd correct.",
            "Waarom het gebeurt: Schema markup vereist ofwel een plugin, een thema dat het native ondersteunt, of aangepaste ontwikkeling. Veel winkeleigenaren weten niet dat het bestaat. Degenen die dat wel weten nemen vaak aan dat hun thema het afhandelt, zonder te verifieren of de markup correct of compleet is.",
            "De schade: Pagina's zonder schema markup komen niet in aanmerking voor rich results (de verbeterde zoekvermeldingen die prijs, beoordelingen en beschikbaarheid direct in de SERP tonen). Rich results hebben significant hogere click-through rates dan gewone blauwe links. Ahrefs data toont dat pagina's met rich snippets 58% van de clicks krijgen op de eerste pagina, vergeleken met standaardresultaten.",
            "Hoe op te lossen: Implementeer Product schema op elke productpagina met minimaal: naam, afbeelding, beschrijving, merk, SKU, aanbiedingen (prijs, valuta, beschikbaarheid), en aggregateRating. Gebruik Google's Rich Results Test om je markup te valideren. Als je op Shopify zit, handelen apps zoals JSON-LD for SEO dit automatisch af. Op WooCommerce voegen plugins als Rank Math of Yoast WooCommerce SEO productschema toe. Verifieer dat het schema dynamisch bijwerkt wanneer prijzen of beschikbaarheid veranderen. Verouderde schemadata (een product als op voorraad tonen wanneer het uitverkocht is) kan handmatige acties van Google triggeren.",
          ],
          image: { src: "/images/blog/nl/schema-markup-rich-results.svg", alt: "Product schema markup comparison showing plain search result versus rich result with ratings, price, and availability", caption: "Pages with rich snippets get 58% of clicks on the first page versus standard results" },
          callout: { title: "Rich Results Win Clicks", text: "Pages with rich snippets get 58% of first-page clicks compared to standard results. Implement Product schema with name, image, price, availability, and rating on every product page." },
        },
        {
          heading: "9. Belangrijke pagina's blokkeren met robots.txt of noindex",
          body: [
            "Dit klinkt basaal, maar we vinden het in ruwweg 1 op de 5 audits. Pagina's die geindexeerd moeten worden zijn per ongeluk geblokkeerd door robots.txt regels of noindex meta tags die zijn overgebleven van ontwikkel- of stagingomgevingen.",
            "Waarom het gebeurt: Tijdens ontwikkeling voegen teams noindex tags toe om te voorkomen dat stagingsites worden geindexeerd. Wanneer de site lanceert, vergeet iemand ze te verwijderen. Of een te agressief robots.txt bestand blokkeert hele secties van de site. We vonden ooit een Magento winkel waar de robots.txt /catalog/ blokkeerde, wat elke product- en categoriepagina op de site bevatte. Hun ontwikkelaar had een robots.txt template van een forumpost gekopieerd zonder te begrijpen wat het deed.",
            "De schade: Als Google je pagina's niet kan crawlen of indexeren, bestaan ze niet in zoekresultaten. De Magento winkel die we noemden had nul organisch verkeer naar productpagina's gedurende 4 maanden voordat ze het merkten. Dat is geen subtiel probleem. Dat is een totale SEO-blackout.",
            "Hoe op te lossen: Controleer nu je robots.txt bestand. Zorg ervoor dat het niet /collections/, /products/, /catalog/, of welk URL-patroon je platform ook gebruikt voor product- en categoriepagina's blokkeert. Gebruik Google Search Console's URL Inspection tool om te verifieren dat je belangrijke pagina's geindexeerd zijn. Zoek 'site:jouwdomein.nl' in Google en vergelijk het geindexeerde paginaaantal met het aantal pagina's dat je verwacht. Als er een grote discrepantie is, onderzoek dan onmiddellijk.",
          ],
        },
        {
          heading: "10. SEO behandelen als eenmalig project",
          body: [
            "Dit is geen technische fout. Het is een strategische. En het is misschien de duurste fout op deze lijst.",
            "Waarom het gebeurt: Een winkel lanceert, huurt een bureau of consultant in om 'SEO te doen,' krijgt wat verbeteringen en stopt dan. De aanname is dat SEO is als een website-herontwerp: je doet het een keer en dan is het klaar. Dit misverstand is overal.",
            "De schade: SEO-resultaten vervallen zonder voortdurende inspanning. Concurrenten publiceren nieuwe content, verdienen nieuwe backlinks en verbeteren hun technische fundamenten. Google werkt zijn algoritme 500 tot 600 keer per jaar bij. Productpagina's worden verouderd naarmate inventaris verandert. Nieuwe technische problemen sluipen binnen bij elke platformupdate en nieuwe app-installatie. We hebben winkels zien gaan van positie 3 naar positie 15 voor hun primaire zoekwoord binnen 6 maanden na het stoppen met SEO-werk.",
            "Hoe op te lossen: Bouw SEO in je doorlopende operaties in. Reserveer maandelijks tijd voor contentcreatie (productbeschrijvingen, categoriecontent, blogposts). Doe elk kwartaal een technische audit. Monitor wekelijks rankings en verkeer. Werk productpagina's bij wanneer inventaris verandert. Bouw consequent links in plaats van in pieken. SEO is een accumulerende investering. De winkels die winnen in organisch zoeken zijn degene die het als een continu proces behandelen, niet als een project met een einddatum.",
            "Als je je winkel herkende in twee of meer van deze fouten, ben je niet de enige. Het verschil tussen winkels die organisch verkeer laten groeien en die stagneren is bijna altijd uitvoering op deze fundamenten. Geen geavanceerde tactieken, geen geheime trucs. Gewoon de basis goed doen, consequent.",
          ],
          callout: { title: "SEO Never Stops", text: "Google updates its algorithm 500-600 times per year. Stores that stop SEO work can drop from position 3 to position 15 within six months. Treat SEO as a continuous process, not a one-time project." },
        },
      ],
    },
    es: {
      title: "10 errores de SEO para ecommerce y cómo corregirlos",
      description: "Auditamos tiendas de ecommerce cada semana. Estos son los 10 errores de SEO que encontramos con más frecuencia, por qué ocurren, el daño que causan y cómo corregirlos.",
      sections: [
        {
          heading: "Los errores que vemos en casi cada auditoría",
          body: [
            "Auditamos tiendas de ecommerce cada semana. Después de cientos de auditorías en Shopify, Magento, WooCommerce y plataformas personalizadas, vemos los mismos errores repetidos una y otra vez. Algunos son obvios. Algunos son sutiles. Todos cuestan dinero real en tráfico orgánico e ingresos perdidos. Ejecutar una [auditoría SEO para ecommerce](/blog/how-to-make-ecommerce-seo-audit) exhaustiva es la forma más rápida de sacarlos todos a la luz de una vez.",
            "Lo que nos frustra es que la mayoría de estos errores son prevenibles. Ocurren por lanzamientos de tiendas apresurados, configuraciones predeterminadas de la plataforma que nadie cambió, o desarrolladores bien intencionados que no entienden el SEO. La buena noticia es que cada uno tiene una solución clara.",
            "Clasificamos estos 10 errores aproximadamente por la frecuencia con la que los encontramos y cuánto daño causan típicamente. Si tienes una tienda de ecommerce, es casi seguro que estás cometiendo al menos dos o tres de estos ahora mismo."
          ],
          image: { src: "/images/blog/es/seo-mistakes-impact.svg", alt: "Horizontal bar chart ranking top ecommerce SEO mistakes by traffic impact severity", caption: "The 10 most common ecommerce SEO mistakes ranked by traffic impact" },
        },
        {
          heading: "1. Contenido duplicado por variantes de productos y filtros",
          body: [
            "Este es el error de SEO para ecommerce más común, y también uno de los más dañinos. Ocurre cuando tu plataforma genera URLs únicas para cada variante de producto, combinación de filtros y orden de clasificación. Una tienda con 500 productos puede fácilmente terminar con 50.000 URLs indexables, la mayoría de las cuales contienen contenido casi idéntico.",
            "Por qué ocurre: las plataformas de ecommerce crean estas URLs por defecto. Cuando un cliente selecciona talla 'M' en azul, la URL cambia a /product?size=m&color=blue. Aplica un filtro de 'precio de menor a mayor' en una página de categoría y obtienes /category?sort=price-asc. Cada una de estas URLs es una página separada para Google. Y cada una tiene el mismo contenido central que la página base.",
            "El daño: Google desperdicia presupuesto de rastreo indexando miles de páginas duplicadas en lugar de tus páginas reales de productos y categorías. Las señales de ranking se diluyen entre múltiples URLs para el mismo contenido. Auditamos una tienda de artículos para el hogar con 2.000 productos que tenía 180.000 URLs indexadas. Solo 8.000 de esas eran las páginas canónicas de productos y categorías que realmente querían posicionar.",
            "Cómo corregirlo: implementa canonical tags en todas las URLs de variantes apuntando a la página principal del producto. Usa la meta tag robots o robots.txt para bloquear las URLs de parámetros de filtros y ordenación de la indexación. En Google Search Console, configura los parámetros de URL para decirle a Google qué parámetros cambian el contenido de la página (como categoría) y cuáles no (como orden de clasificación). La limpieza normalmente toma de 2 a 4 semanas y a menudo vemos el tráfico orgánico aumentar entre un 15% y un 30% en 2 meses solo por resolver este problema. Usa nuestro [checklist de SEO para ecommerce](/blog/ecommerce-seo-checklist) para trabajar estas correcciones sistemáticamente."
          ],
          image: { src: "/images/blog/es/duplicate-content-sources.svg", alt: "Diagram showing six common sources of duplicate content in ecommerce stores", caption: "Common duplicate content sources and how to fix them with canonical tags" },
          callout: { title: "Duplication Scale", text: "A store with 2,000 products had 180,000 indexed URLs -- only 8,000 were the actual pages they wanted ranking. Fixing canonicals alone can boost organic traffic 15-30% within two months." },
        },
        {
          heading: "2. Contenido escaso en páginas de productos",
          body: [
            "Una página de producto con un título, un precio, una descripción del fabricante de 20 palabras y una foto no es una página que Google quiera posicionar. Sin embargo, así es como lucen la mayoría de las páginas de productos de ecommerce.",
            "Por qué ocurre: las tiendas a menudo importan datos de productos directamente de proveedores o fabricantes sin modificaciones. Cuando tienes 5.000 productos, escribir descripciones únicas para cada uno se siente imposible. Así que el texto estándar del fabricante se queda.",
            "El daño: el contenido escaso significa que Google ve tus páginas de productos como de bajo valor. Se posicionan mal o no se posicionan en absoluto. Peor aún, si otros 200 minoristas usan la misma descripción del fabricante, Google no tiene razón para elegir tu página sobre ninguna de las otras. Comparamos dos tiendas de equipamiento outdoor competidoras. Una tenía descripciones del fabricante con un promedio de 35 palabras. La otra tenía descripciones originales con un promedio de 180 palabras con consejos de uso y comparaciones. La segunda tienda se posicionaba para 4 veces más keywords a nivel de producto.",
            "Cómo corregirlo: prioriza tus productos con mayores ingresos y escribe descripciones originales de al menos 150 palabras. Incluye detalles que la descripción del fabricante omite: cómo se usa realmente el producto, para quién es mejor, cómo se compara con alternativas y qué preguntas comunes tienen los compradores. Agrega una sección de especificaciones estructurada con material, dimensiones, peso y detalles de compatibilidad. No necesitas reescribir los 5.000 productos de una vez. Empieza con los 100 principales por ingresos y avanza desde ahí."
          ],
        },
        {
          heading: "3. Ignorar la velocidad del sitio en páginas de productos y categorías",
          body: [
            "Todo el mundo sabe que la velocidad del sitio importa. Casi nadie la corrige realmente. Las tiendas de ecommerce son especialmente propensas a problemas de velocidad porque las páginas de productos tienden a ser pesadas con imágenes, reseñas, widgets de productos relacionados y scripts de terceros. La velocidad es solo uno de los muchos factores cubiertos en nuestra guía de [SEO técnico para ecommerce](/blog/technical-seo-for-ecommerce).",
            "Por qué ocurre: cada app, plugin o integración agrega JavaScript. Widgets de reseñas, chat en vivo, herramientas de analítica, píxeles de retargeting, popups de prueba social. Cada uno agrega de 50ms a 500ms de tiempo de carga. Una tienda Shopify típica tiene de 15 a 25 apps instaladas, y muchas de ellas inyectan scripts en cada carga de página. Nadie nota la ralentización incremental hasta que el sitio tarda 6 segundos en ser interactivo.",
            "El daño: Google usa los Core Web Vitals como señal de ranking. Específicamente, Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS) e Interaction to Next Paint (INP). Los sitios lentos se posicionan peor, punto. Pero el impacto en los ingresos va más allá de los rankings. Por cada 100ms de mejora en el tiempo de carga, las tasas de conversión aumentan un promedio de 1,1% según la investigación de Deloitte sobre sitios de retail. Una tienda que factura 2 millones al año y mejora el tiempo de carga en 1 segundo podría ver más de 100.000 en ingresos adicionales.",
            "Cómo corregirlo: audita tus scripts de terceros y elimina todo lo que no estés usando activamente. Aplica lazy-load a las imágenes por debajo del pliegue. Sirve las imágenes en formato WebP y usa dimensionamiento responsive. Mueve el JavaScript no crítico a carga async o defer. Implementa cabeceras de caché del navegador adecuadas. Para tiendas Shopify específicamente, reduce el número de apps y verifica si alguna app carga scripts en todo el sitio cuando solo necesitan ejecutarse en páginas específicas. Apunta a un LCP por debajo de 2,5 segundos y un INP por debajo de 200 milisegundos."
          ],
          image: { src: "/images/blog/es/site-speed-revenue-impact.svg", alt: "Site speed revenue impact showing Core Web Vitals targets and the cost of slow load times for ecommerce", caption: "Every 100ms improvement in load time increases conversion rates by 1.1%" },
          callout: { title: "Speed = Revenue", text: "A $2M/year store that improves load time by 1 second could see $100K+ in additional revenue. The typical Shopify store has 15-25 apps injecting scripts -- each adding 50-500ms of load time." },
        },
        {
          heading: "4. Estructura deficiente de enlazado interno",
          body: [
            "La mayoría de las tiendas de ecommerce dependen completamente de los menús de navegación y las migas de pan para el enlazado interno. Eso no es suficiente. Google descubre y evalúa la importancia de las páginas basándose en cuántos enlaces internos apuntan a una página y desde dónde.",
            "Por qué ocurre: el enlazado interno requiere una planificación deliberada, y la mayoría de los propietarios de tiendas se centran en las páginas de productos y el flujo de checkout en lugar de la arquitectura de enlaces. El CMS o la plataforma maneja la navegación, y nadie piensa más allá. Las secciones de productos relacionados existen para fines de conversión pero a menudo usan renderizado JavaScript que Google no puede seguir.",
            "El daño: las páginas de productos huérfanas (páginas sin enlaces internos que apunten a ellas) son invisibles para el rastreador de Google. Regularmente encontramos que del 20% al 40% de las páginas de productos en tiendas de ecommerce tienen menos de 3 enlaces internos. Estas páginas no se posicionan para casi nada. Mientras tanto, la página de inicio típicamente tiene miles de enlaces internos y toda esa autoridad no tiene adónde fluir productivamente.",
            "Cómo corregirlo: agrega enlaces internos contextuales en las descripciones de productos apuntando a productos relacionados y categorías principales. Implementa una sección de 'productos relacionados' que use enlaces HTML reales, no carruseles renderizados con JavaScript que Googlebot no puede analizar. Crea hubs de contenido (guías de compra, páginas de comparación, artículos de tutoriales) que enlacen a grupos de productos relacionados. Usa migas de pan en cada página. Para catálogos grandes, construye una página de sitemap HTML que enlace a todas las categorías de primer y segundo nivel. Un cliente agregó enlaces internos contextuales a sus 200 páginas de productos principales y vio la posición media de ranking mejorar en 4,2 posiciones en 8 semanas."
          ],
          image: { src: "/images/blog/es/internal-linking-architecture.svg", alt: "Ecommerce internal linking architecture showing homepage, categories, products, and content hubs connected", caption: "Content hubs fill the linking gap -- 20-40% of product pages typically have fewer than 3 internal links" },
        },
        {
          heading: "5. Meta títulos y descripciones ausentes o duplicados",
          body: [
            "Todavía encontramos tiendas donde cientos de páginas de productos comparten la misma plantilla de meta título ('Nombre del Producto | Nombre de la Tienda') sin descripción única, o donde las meta descriptions están completamente ausentes y Google genera fragmentos de cualquier texto que encuentre en la página.",
            "Por qué ocurre: configuraciones predeterminadas de la plataforma. Shopify, WooCommerce y Magento generan automáticamente meta títulos a partir del nombre del producto, y muchos propietarios de tiendas nunca los personalizan. Para las descripciones, el predeterminado a menudo está vacío o es una versión truncada de la descripción del producto que se lee mal en los resultados de búsqueda.",
            "El daño: tu meta título es la señal on-page más fuerte de ranking. Una plantilla genérica como 'Widget Azul | Nombre de la Tienda' pierde la oportunidad de incluir keywords relevantes. Y tu meta description, aunque no es un factor de ranking directo, afecta directamente la tasa de clics. Una meta description bien escrita puede aumentar el CTR entre un 30% y un 50% comparado con fragmentos auto-generados.",
            "Cómo corregirlo: crea una fórmula de meta título que incluya la keyword principal, el nombre del producto y un diferenciador. Por ejemplo: 'Camiseta de Algodón Orgánico Cuello en V para Hombre | Envío Gratis | Nombre de la Tienda'. Escribe meta descriptions únicas para al menos tus páginas con mejor rendimiento. Para el resto, construye plantillas inteligentes que incorporen atributos del producto dinámicamente: '[Nombre del Producto] en [Color]. [Material], [Característica Clave]. [Precio] con envío gratis desde 50€'. Esto es mejor que nada y toma minutos de configurar en la mayoría de las plataformas."
          ],
        },
        {
          heading: "6. No optimizar las páginas de categorías para la búsqueda",
          body: [
            "Las páginas de categorías son a menudo los objetivos SEO de mayor valor en una tienda de ecommerce. Apuntan a términos principales con volumen real ('zapatillas de running para hombre', 'cuidado de la piel orgánico') mientras que las páginas de productos apuntan a variaciones long-tail. Sin embargo, la mayoría de las tiendas tratan las páginas de categorías como nada más que una cuadrícula de miniaturas de productos.",
            "Por qué ocurre: los diseñadores y equipos de UX se centran en hacer las páginas de categorías visualmente limpias, lo que generalmente significa texto mínimo. La suposición es que los compradores quieren navegar por los productos, no leer párrafos. Esta es una falsa elección. Puedes tener ambos.",
            "El daño: una página de categoría sin contenido de texto le da a Google casi nada con qué trabajar. El único contenido son los títulos de productos y precios, que no son suficientes para posicionarse para keywords competitivas a nivel de categoría. Vemos esto constantemente: tiendas que se posicionan en la página 2 o 3 para sus términos de categoría más valiosos, perdiendo miles de visitas potenciales al mes.",
            "Cómo corregirlo: agrega de 200 a 400 palabras de contenido original a cada página de categoría. Colócalo debajo de la cuadrícula de productos para que no interfiera con la experiencia de compra. Incluye la keyword objetivo de forma natural, describe qué hace diferente a tu selección, y enlaza a guías de compra o subcategorías relevantes. Algunas marcas agregan contenido de categoría en una sección colapsable encima de la cuadrícula de productos, visible para Google pero discreto para los compradores. Ambos enfoques funcionan. Para un recorrido completo de la optimización de páginas de productos y categorías, consulta nuestra guía sobre [SEO on-page para ecommerce](/blog/on-page-seo-for-ecommerce)."
          ],
        },
        {
          heading: "7. Cadenas de redirecciones rotas y errores 404",
          body: [
            "Los productos se descatalogan. Las colecciones rotan. Las URLs cambian durante los rediseños. Sin una gestión adecuada de redirecciones, las URLs antiguas se rompen (errores 404) o se acumulan en largas cadenas de redirecciones (la URL A redirige a B, que redirige a C, que redirige a D).",
            "Por qué ocurre: nadie es dueño del proceso de redirecciones. El equipo de marketing elimina productos antiguos sin notificar a nadie. El equipo de desarrollo cambia las estructuras de URLs durante las migraciones sin mapear las URLs antiguas a las nuevas. Con el tiempo, los archivos de redirecciones se convierten en enredos que nadie quiere tocar.",
            "El daño: los errores 404 en páginas que tenían backlinks o rankings desperdician esa autoridad acumulada. Las cadenas de redirecciones (3+ saltos) ralentizan la entrega de la página y pierden link equity en cada salto. Google ha declarado que las redirecciones 301 pasan toda la link equity, pero las cadenas de redirecciones aún causan problemas con la eficiencia de rastreo y la velocidad de la página. Auditamos un minorista de moda que tenía 12.000 errores 404 y 3.000 cadenas de redirecciones. Corregir estos problemas solos recuperó el 18% de su tráfico orgánico perdido en 3 meses.",
            "Cómo corregirlo: ejecuta un rastreo de tu sitio con Screaming Frog o Sitebulb e identifica todos los errores 404 y cadenas de redirecciones. Para los 404, implementa redirecciones 301 a la página activa más relevante (generalmente la categoría principal o un producto similar). Para las cadenas, actualiza cada redirección para apuntar directamente a la URL de destino final. Establece un proceso para que siempre que un producto se descatalogue, se cree una redirección como parte del flujo de eliminación. Revisa tu archivo de redirecciones trimestralmente."
          ],
        },
        {
          heading: "8. Sin schema markup en las páginas de productos",
          body: [
            "El schema markup le dice a Google exactamente qué contiene tu página: el nombre del producto, precio, disponibilidad, valoración y más. Sin él, Google tiene que adivinar. Y las suposiciones de Google no siempre son correctas.",
            "Por qué ocurre: el schema markup requiere un plugin, un tema que lo soporte nativamente o desarrollo personalizado. Muchos propietarios de tiendas no saben que existe. Los que lo saben a menudo asumen que su tema lo maneja, sin verificar si el markup es correcto o completo.",
            "El daño: las páginas sin schema markup no son elegibles para resultados enriquecidos (los listados de búsqueda mejorados que muestran precio, valoraciones y disponibilidad directamente en el SERP). Los resultados enriquecidos tienen tasas de clics significativamente más altas que los enlaces azules normales. Los datos de Ahrefs muestran que las páginas con fragmentos enriquecidos obtienen el 58% de los clics en la primera página, comparado con los resultados estándar.",
            "Cómo corregirlo: implementa schema Product en cada página de producto con al mínimo: nombre, imagen, descripción, marca, SKU, ofertas (precio, moneda, disponibilidad), y aggregateRating. Usa la Prueba de Resultados Enriquecidos de Google para validar tu markup. Si estás en Shopify, apps como JSON-LD for SEO manejan esto automáticamente. En WooCommerce, plugins como Rank Math o Yoast WooCommerce SEO agregan schema de producto. Verifica que el schema se actualice dinámicamente cuando los precios o la disponibilidad cambien. Los datos de schema obsoletos (mostrar un producto como disponible cuando está agotado) pueden provocar acciones manuales de Google."
          ],
          image: { src: "/images/blog/es/schema-markup-rich-results.svg", alt: "Product schema markup comparison showing plain search result versus rich result with ratings, price, and availability", caption: "Pages with rich snippets get 58% of clicks on the first page versus standard results" },
          callout: { title: "Rich Results Win Clicks", text: "Pages with rich snippets get 58% of first-page clicks compared to standard results. Implement Product schema with name, image, price, availability, and rating on every product page." },
        },
        {
          heading: "9. Bloquear páginas importantes con robots.txt o noindex",
          body: [
            "Este suena básico, pero lo encontramos en aproximadamente 1 de cada 5 auditorías. Páginas que deberían estar indexadas están accidentalmente bloqueadas por reglas de robots.txt o meta tags noindex que quedaron de entornos de desarrollo o staging.",
            "Por qué ocurre: durante el desarrollo, los equipos agregan tags noindex para prevenir que los sitios de staging sean indexados. Cuando el sitio se lanza, alguien olvida quitarlos. O un archivo robots.txt demasiado agresivo bloquea secciones enteras del sitio. Una vez encontramos una tienda Magento donde el robots.txt bloqueaba /catalog/, que contenía absolutamente todas las páginas de productos y categorías del sitio. Su desarrollador había copiado una plantilla de robots.txt de una publicación de foro sin entender qué hacía.",
            "El daño: si Google no puede rastrear o indexar tus páginas, no existen en los resultados de búsqueda. La tienda Magento que mencionamos tuvo cero tráfico orgánico a páginas de productos durante 4 meses antes de que lo notaran. Eso no es un problema sutil. Es un apagón total de SEO.",
            "Cómo corregirlo: revisa tu archivo robots.txt ahora mismo. Asegúrate de que no esté bloqueando /collections/, /products/, /catalog/, o cualquier patrón de URL que tu plataforma use para páginas de productos y categorías. Usa la herramienta de Inspección de URLs de Google Search Console para verificar que tus páginas importantes están indexadas. Busca 'site:tudominio.com' en Google y compara el recuento de páginas indexadas con el número de páginas que esperas. Si hay una gran discrepancia, investiga inmediatamente."
          ],
        },
        {
          heading: "10. Tratar el SEO como un proyecto de una sola vez",
          body: [
            "Este no es un error técnico. Es uno estratégico. Y podría ser el error más costoso de esta lista.",
            "Por qué ocurre: una tienda se lanza, contrata una agencia o consultor para 'hacer SEO', obtiene algunas mejoras y luego para. La suposición es que el SEO es como un rediseño de sitio web: lo haces una vez y ya está. Este malentendido está en todas partes.",
            "El daño: los resultados de SEO decaen sin esfuerzo continuo. Los competidores publican nuevo contenido, ganan nuevos backlinks y mejoran sus fundamentos técnicos. Google actualiza su algoritmo de 500 a 600 veces al año. Las páginas de productos se quedan obsoletas a medida que cambia el inventario. Nuevos problemas técnicos se cuelan con cada actualización de la plataforma y cada nueva instalación de apps. Hemos visto tiendas pasar de la posición 3 a la posición 15 para su keyword principal en 6 meses de dejar de hacer trabajo de SEO.",
            "Cómo corregirlo: incorpora el SEO en tus operaciones continuas. Asigna tiempo mensual para la creación de contenido (descripciones de productos, contenido de categorías, publicaciones de blog). Haz una auditoría técnica trimestralmente. Monitorea rankings y tráfico semanalmente. Actualiza las páginas de productos cuando cambia el inventario. Construye enlaces de forma consistente en lugar de en ráfagas. El SEO es una inversión acumulativa. Las tiendas que ganan en búsqueda orgánica son las que lo tratan como un proceso continuo, no como un proyecto con fecha de finalización.",
            "Si reconociste tu tienda en dos o más de estos errores, no estás solo. La diferencia entre las tiendas que hacen crecer su tráfico orgánico y las que se estancan es casi siempre la ejecución de estos fundamentos. No tácticas avanzadas, no trucos secretos. Solo hacer bien lo básico, consistentemente."
          ],
        }
      ],
    },
    de: {
      title: "10 Ecommerce SEO Fehler und wie Sie sie beheben",
      description: "Wir pruefen jede Woche Ecommerce-Shops. Dies sind die 10 SEO-Fehler, die wir am haeufigsten finden, warum sie passieren, welchen Schaden sie anrichten und wie Sie sie beheben.",
      sections: [
        {
          heading: "Die Fehler, die wir in fast jedem Audit sehen",
          body: [
            "Wir pruefen jede Woche Ecommerce-Shops. Nach Hunderten von Audits auf Shopify, Magento, WooCommerce und individuellen Plattformen sehen wir immer wieder dieselben Fehler. Einige sind offensichtlich. Einige sind subtil. Alle kosten echtes Geld durch verlorenen organischen Traffic und Umsatz. Ein gruendliches [Ecommerce SEO Audit](/blog/how-to-make-ecommerce-seo-audit) durchzufuehren ist der schnellste Weg, alle auf einmal aufzudecken.",
            "Was uns frustriert, ist, dass die meisten dieser Fehler vermeidbar sind. Sie passieren wegen uebereilter Shop-Launches, Plattform-Standardeinstellungen, die niemand geaendert hat, oder gutmeinender Entwickler, die SEO nicht verstehen. Die gute Nachricht ist, dass jeder einzelne eine klare Loesung hat.",
            "Wir haben diese 10 Fehler grob danach sortiert, wie haeufig wir ihnen begegnen und wie viel Schaden sie typischerweise anrichten. Wenn Sie einen Onlineshop betreiben, machen Sie mit ziemlicher Sicherheit gerade mindestens zwei oder drei davon."
          ],
          image: { src: "/images/blog/de/seo-mistakes-impact.svg", alt: "Horizontal bar chart ranking top ecommerce SEO mistakes by traffic impact severity", caption: "The 10 most common ecommerce SEO mistakes ranked by traffic impact" },
        },
        {
          heading: "1. Duplicate Content durch Produktvarianten und Filter",
          body: [
            "Dies ist der haeufigste Ecommerce-SEO-Fehler und auch einer der schaedlichsten. Er tritt auf, wenn Ihre Plattform eindeutige URLs fuer jede Produktvariante, Filterkombination und Sortierreihenfolge generiert. Ein Shop mit 500 Produkten kann leicht 50.000 indexierbare URLs haben, von denen die meisten nahezu identischen Content enthalten.",
            "Warum es passiert: Ecommerce-Plattformen erstellen diese URLs standardmaessig. Wenn ein Kunde Groesse 'M' in Blau waehlt, aendert sich die URL zu /product?size=m&color=blue. Wenden Sie einen Filter fuer 'Preis aufsteigend' auf einer Kategorieseite an, erhalten Sie /category?sort=price-asc. Jede dieser URLs ist eine separate Seite fuer Google. Und jede hat denselben Kerninhalt wie die Basisseite.",
            "Der Schaden: Google verschwendet Crawl Budget mit der Indexierung Tausender doppelter Seiten statt Ihrer tatsaechlichen Produkt- und Kategorieseiten. Rankingsignale werden ueber mehrere URLs fuer denselben Content verwaessert. Wir prueften einen Haushaltswaren-Shop mit 2.000 Produkten, der 180.000 indexierte URLs hatte. Nur 8.000 davon waren die kanonischen Produkt- und Kategorieseiten, die sie tatsaechlich ranken lassen wollten.",
            "So beheben Sie es: Implementieren Sie Canonical Tags auf allen Varianten-URLs, die auf die Hauptproduktseite verweisen. Verwenden Sie den robots Meta Tag oder robots.txt, um Filter- und Sortierparameter-URLs von der Indexierung zu blockieren. Konfigurieren Sie in der Google Search Console URL-Parameter, um Google mitzuteilen, welche Parameter den Seiteninhalt aendern (wie Kategorie) und welche nicht (wie Sortierreihenfolge). Die Bereinigung dauert typischerweise 2 bis 4 Wochen, und wir sehen oft einen Anstieg des organischen Traffics um 15% bis 30% innerhalb von 2 Monaten, nur durch die Loesung dieses einen Problems. Verwenden Sie unsere [Ecommerce SEO Checkliste](/blog/ecommerce-seo-checklist), um diese Fixes systematisch abzuarbeiten."
          ],
          image: { src: "/images/blog/de/duplicate-content-sources.svg", alt: "Diagram showing six common sources of duplicate content in ecommerce stores", caption: "Common duplicate content sources and how to fix them with canonical tags" },
          callout: { title: "Duplication Scale", text: "A store with 2,000 products had 180,000 indexed URLs -- only 8,000 were the actual pages they wanted ranking. Fixing canonicals alone can boost organic traffic 15-30% within two months." },
        },
        {
          heading: "2. Duenne Produktseiten-Inhalte",
          body: [
            "Eine Produktseite mit einem Titel, einem Preis, einer 20-Wort-Herstellerbeschreibung und einem Foto ist keine Seite, die Google ranken will. Dennoch sehen so die meisten Ecommerce-Produktseiten aus.",
            "Warum es passiert: Shops importieren oft Produktdaten direkt von Lieferanten oder Herstellern ohne Aenderungen. Bei 5.000 Produkten fuehlt es sich unmoeglich an, fuer jedes eine einzigartige Beschreibung zu schreiben. Also bleibt der Standardtext des Herstellers.",
            "Der Schaden: Duenner Content bedeutet, dass Google Ihre Produktseiten als wenig wertvoll betrachtet. Sie ranken schlecht oder gar nicht. Schlimmer noch, wenn 200 andere Haendler dieselbe Herstellerbeschreibung verwenden, hat Google keinen Grund, Ihre Seite gegenueber den anderen zu bevorzugen. Wir verglichen zwei konkurrierende Outdoor-Ausruestungs-Shops. Einer hatte Herstellerbeschreibungen mit durchschnittlich 35 Woertern. Der andere hatte originale Beschreibungen mit durchschnittlich 180 Woertern mit Nutzungstipps und Vergleichen. Der zweite Shop rankte fuer 4x mehr produktbezogene Keywords.",
            "So beheben Sie es: Priorisieren Sie Ihre umsatzstaerksten Produkte und schreiben Sie originale Beschreibungen von mindestens 150 Woertern. Fuegen Sie Details hinzu, die die Herstellerbeschreibung vermisst: wie das Produkt tatsaechlich genutzt wird, fuer wen es am besten geeignet ist, wie es sich im Vergleich zu Alternativen schlaegt und welche haeufigen Fragen Kaeufer haben. Fuegen Sie einen strukturierten Spezifikationsbereich mit Material, Abmessungen, Gewicht und Kompatibilitaetsdetails hinzu. Sie muessen nicht alle 5.000 Produkte auf einmal umschreiben. Beginnen Sie mit den Top 100 nach Umsatz und arbeiten Sie sich nach aussen vor."
          ],
        },
        {
          heading: "3. Seitengeschwindigkeit auf Produkt- und Kategorieseiten ignorieren",
          body: [
            "Jeder weiss, dass Seitengeschwindigkeit wichtig ist. Fast niemand behebt es tatsaechlich. Ecommerce-Shops sind besonders anfaellig fuer Geschwindigkeitsprobleme, weil Produktseiten mit Bildern, Bewertungen, verwandten Produkt-Widgets und Drittanbieter-Scripts belastet sind. Geschwindigkeit ist nur einer von vielen Faktoren, die in unserem Leitfaden zu [technischem SEO fuer Ecommerce](/blog/technical-seo-for-ecommerce) behandelt werden.",
            "Warum es passiert: Jede App, jedes Plugin oder jede Integration fuegt JavaScript hinzu. Bewertungs-Widgets, Live-Chat, Analyse-Tools, Retargeting-Pixel, Social-Proof-Popups. Jedes fuegt 50ms bis 500ms Ladezeit hinzu. Ein typischer Shopify-Shop hat 15 bis 25 Apps installiert, und viele davon schleusen bei jedem Seitenaufruf Scripts ein. Niemand bemerkt die schrittweise Verlangsamung, bis die Seite 6 Sekunden braucht, um interaktiv zu werden.",
            "Der Schaden: Google verwendet Core Web Vitals als Rankingsignal. Speziell Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS) und Interaction to Next Paint (INP). Langsame Seiten ranken schlechter, Punkt. Aber die Umsatzauswirkung geht ueber Rankings hinaus. Fuer jede 100ms Verbesserung der Ladezeit steigen Conversion Rates laut Deloitte-Forschung bei Retail-Seiten durchschnittlich um 1,1%. Ein Shop mit 2 Millionen Euro Jahresumsatz, der die Ladezeit um 1 Sekunde verbessert, koennte 100.000+ Euro zusaetzlichen Umsatz sehen.",
            "So beheben Sie es: Pruefen Sie Ihre Drittanbieter-Scripts und entfernen Sie alles, was Sie nicht aktiv nutzen. Laden Sie Bilder unterhalb des Folds per Lazy Loading. Liefern Sie Bilder im WebP-Format aus und verwenden Sie responsive Groessenbestimmung. Verschieben Sie nicht-kritisches JavaScript auf async oder defer Loading. Implementieren Sie korrekte Browser-Caching-Header. Fuer Shopify-Shops speziell: Reduzieren Sie die App-Anzahl und pruefen Sie, ob Apps seitenweit Scripts laden, obwohl sie nur auf bestimmten Seiten laufen muessen. Zielen Sie auf einen LCP unter 2,5 Sekunden und einen INP unter 200 Millisekunden."
          ],
          image: { src: "/images/blog/de/site-speed-revenue-impact.svg", alt: "Site speed revenue impact showing Core Web Vitals targets and the cost of slow load times for ecommerce", caption: "Every 100ms improvement in load time increases conversion rates by 1.1%" },
          callout: { title: "Speed = Revenue", text: "A $2M/year store that improves load time by 1 second could see $100K+ in additional revenue. The typical Shopify store has 15-25 apps injecting scripts -- each adding 50-500ms of load time." },
        },
        {
          heading: "4. Schlechte interne Verlinkungsstruktur",
          body: [
            "Die meisten Ecommerce-Shops verlassen sich bei der internen Verlinkung vollstaendig auf Navigationsmenues und Breadcrumbs. Das ist nicht genug. Google entdeckt und bewertet die Seitenwichtigkeit basierend darauf, wie viele interne Links auf eine Seite verweisen und woher.",
            "Warum es passiert: Interne Verlinkung erfordert bewusste Planung, und die meisten Shop-Besitzer konzentrieren sich auf Produktseiten und den Checkout-Flow statt auf die Link-Architektur. Das CMS oder die Plattform kuemmert sich um die Navigation, und niemand denkt weiter darueber nach. Verwandte-Produkte-Bereiche existieren fuer Conversion-Zwecke, verwenden aber oft JavaScript-Rendering, dem Google nicht folgen kann.",
            "Der Schaden: Verwaiste Produktseiten (Seiten ohne interne Links, die auf sie verweisen) sind fuer Googles Crawler unsichtbar. Wir stellen regelmaessig fest, dass 20% bis 40% der Produktseiten auf Ecommerce-Shops weniger als 3 interne Links haben. Diese Seiten ranken fuer fast nichts. Gleichzeitig hat die Homepage typischerweise Tausende interner Links, und all diese Autoritaet hat keinen produktiven Ort, wohin sie fliessen kann.",
            "So beheben Sie es: Fuegen Sie kontextuelle interne Links in Produktbeschreibungen hinzu, die auf verwandte Produkte und uebergeordnete Kategorien verweisen. Implementieren Sie einen 'Verwandte Produkte'-Bereich, der echte HTML-Links verwendet, keine JavaScript-gerenderten Karussells, die Googlebot nicht parsen kann. Erstellen Sie Content-Hubs (Kaufratgeber, Vergleichsseiten, Anleitungsartikel), die auf Gruppen verwandter Produkte verlinken. Verwenden Sie Breadcrumbs auf jeder Seite. Fuer grosse Kataloge erstellen Sie eine HTML-Sitemap-Seite, die auf alle Top-Level- und Second-Level-Kategorien verlinkt. Ein Kunde fuegte kontextuelle interne Links zu seinen Top-200-Produktseiten hinzu und sah eine Verbesserung der durchschnittlichen Rankingposition um 4,2 Positionen innerhalb von 8 Wochen."
          ],
          image: { src: "/images/blog/de/internal-linking-architecture.svg", alt: "Ecommerce internal linking architecture showing homepage, categories, products, and content hubs connected", caption: "Content hubs fill the linking gap -- 20-40% of product pages typically have fewer than 3 internal links" },
        },
        {
          heading: "5. Fehlende oder doppelte Meta-Titel und -Beschreibungen",
          body: [
            "Wir finden immer noch Shops, in denen Hunderte von Produktseiten dasselbe Meta-Title-Template teilen ('Produktname | Shopname') ohne einzigartige Beschreibung, oder in denen Meta Descriptions komplett fehlen und Google Snippets aus dem Text generiert, den es auf der Seite findet.",
            "Warum es passiert: Plattform-Standardeinstellungen. Shopify, WooCommerce und Magento generieren alle automatisch Meta-Titel aus dem Produktnamen, und viele Shop-Besitzer passen sie nie an. Fuer Beschreibungen ist der Standard oft leer oder eine gekuerzte Version der Produktbeschreibung, die sich in Suchergebnissen schlecht liest.",
            "Der Schaden: Ihr Meta-Titel ist das staerkste On-Page-Rankingsignal. Ein generisches Template wie 'Blaues Widget | Shopname' verpasst die Chance, relevante Keywords einzubinden. Und Ihre Meta Description, obwohl kein direkter Rankingfaktor, beeinflusst direkt die Klickrate. Eine gut geschriebene Meta Description kann die CTR um 30% bis 50% im Vergleich zu automatisch generierten Snippets steigern.",
            "So beheben Sie es: Erstellen Sie eine Meta-Title-Formel, die das primaere Keyword, den Produktnamen und einen Differenzierungsfaktor enthaelt. Zum Beispiel: 'Bio-Baumwoll V-Ausschnitt T-Shirt fuer Herren | Kostenloser Versand | Shopname'. Schreiben Sie einzigartige Meta Descriptions fuer mindestens Ihre bestperformenden Seiten. Fuer den Rest bauen Sie intelligente Templates, die dynamisch Produktattribute einziehen: '[Produktname] in [Farbe]. [Material], [Hauptmerkmal]. [Preis] mit kostenlosem Versand ab 50 Euro.' Das ist besser als nichts und dauert Minuten, um auf den meisten Plattformen einzurichten."
          ],
        },
        {
          heading: "6. Kategorieseiten nicht fuer die Suche optimieren",
          body: [
            "Kategorieseiten sind oft die wertvollsten SEO-Ziele eines Ecommerce-Shops. Sie zielen auf Head Terms mit echtem Volumen ab ('Herren Laufschuhe', 'Bio Hautpflege'), waehrend Produktseiten Long-Tail-Variationen anvisieren. Dennoch behandeln die meisten Shops Kategorieseiten als nicht mehr als ein Raster von Produktvorschauen.",
            "Warum es passiert: Designer und UX-Teams konzentrieren sich darauf, Kategorieseiten visuell sauber zu gestalten, was normalerweise minimalen Text bedeutet. Die Annahme ist, dass Kaeufer Produkte durchstoebern wollen, nicht Absaetze lesen. Das ist eine falsche Wahl. Sie koennen beides haben.",
            "Der Schaden: Eine Kategorieseite ohne Textinhalt gibt Google fast nichts zum Arbeiten. Der einzige Content sind Produkttitel und Preise, was nicht ausreicht, um fuer wettbewerbsintensive Kategorie-Keywords zu ranken. Wir sehen das staendig: Shops, die auf Seite 2 oder 3 fuer ihre wertvollsten Kategoriebegriffe ranken und Tausende potenzieller Besuche pro Monat verlieren.",
            "So beheben Sie es: Fuegen Sie 200 bis 400 Woerter originalen Content zu jeder Kategorieseite hinzu. Platzieren Sie ihn unter dem Produktraster, damit er das Einkaufserlebnis nicht stoert. Binden Sie das Ziel-Keyword natuerlich ein, beschreiben Sie, was Ihre Auswahl besonders macht, und verlinken Sie auf relevante Kaufratgeber oder Unterkategorien. Manche Marken fuegen Kategorieinhalt in einem einklappbaren Bereich ueber dem Produktraster hinzu, sichtbar fuer Google aber unauffaellig fuer Kaeufer. Beide Ansaetze funktionieren. Fuer eine vollstaendige Anleitung zur Optimierung von Produkt- und Kategorieseiten lesen Sie unseren Leitfaden zu [On-Page SEO fuer Ecommerce](/blog/on-page-seo-for-ecommerce)."
          ],
        },
        {
          heading: "7. Defekte Redirect-Ketten und 404-Fehler",
          body: [
            "Produkte werden eingestellt. Kollektionen rotieren. URLs aendern sich bei Redesigns. Ohne ordentliches Redirect-Management brechen alte URLs entweder (404-Fehler) oder stapeln sich in langen Redirect-Ketten (URL A leitet zu B weiter, das zu C weiterleitet, das zu D weiterleitet).",
            "Warum es passiert: Niemand ist fuer den Redirect-Prozess verantwortlich. Das Marketingteam entfernt alte Produkte, ohne jemanden zu informieren. Das Entwicklungsteam aendert URL-Strukturen bei Migrationen, ohne alte URLs neuen zuzuordnen. Mit der Zeit wachsen Redirect-Dateien zu verworrenen Durcheinander an, die niemand anfassen will.",
            "Der Schaden: 404-Fehler auf Seiten, die Backlinks oder Rankings hatten, verschwenden die angesammelte Autoritaet. Redirect-Ketten (3+ Hops) verlangsamen die Seitenauslieferung und verlieren Link Equity bei jedem Hop. Google hat erklaert, dass 301-Redirects volle Link Equity weitergeben, aber Ketten von Redirects verursachen trotzdem Probleme mit der Crawl-Effizienz und Seitengeschwindigkeit. Wir prueften einen Modehaendler mit 12.000 404-Fehlern und 3.000 Redirect-Ketten. Allein die Behebung dieser Probleme stellte 18% des verlorenen organischen Traffics innerhalb von 3 Monaten wieder her.",
            "So beheben Sie es: Crawlen Sie Ihre Seite mit Screaming Frog oder Sitebulb und identifizieren Sie alle 404-Fehler und Redirect-Ketten. Fuer 404s implementieren Sie 301-Redirects zur relevantesten Live-Seite (normalerweise die uebergeordnete Kategorie oder ein aehnliches Produkt). Fuer Ketten aktualisieren Sie jeden Redirect, damit er direkt auf die endgueltige Ziel-URL verweist. Richten Sie einen Prozess ein, sodass bei jeder Produkteinstellung ein Redirect als Teil des Entfernungs-Workflows erstellt wird. Pruefen Sie Ihre Redirect-Datei quartalsweise."
          ],
        },
        {
          heading: "8. Kein Schema Markup auf Produktseiten",
          body: [
            "Schema Markup sagt Google genau, was Ihre Seite enthaelt: Produktname, Preis, Verfuegbarkeit, Bewertung und mehr. Ohne muss Google raten. Und Googles Vermutungen sind nicht immer korrekt.",
            "Warum es passiert: Schema Markup erfordert entweder ein Plugin, ein Theme, das es nativ unterstuetzt, oder individuelle Entwicklung. Viele Shop-Besitzer wissen nicht, dass es existiert. Diejenigen, die es wissen, nehmen oft an, dass ihr Theme es erledigt, ohne zu verifizieren, ob das Markup korrekt oder vollstaendig ist.",
            "Der Schaden: Seiten ohne Schema Markup kommen nicht fuer Rich Results in Frage (die erweiterten Suchergebnis-Eintraege, die Preis, Bewertungen und Verfuegbarkeit direkt in den SERPs anzeigen). Rich Results haben deutlich hoehere Klickraten als normale blaue Links. Ahrefs-Daten zeigen, dass Seiten mit Rich Snippets 58% der Klicks auf der ersten Seite erhalten, verglichen mit Standardergebnissen.",
            "So beheben Sie es: Implementieren Sie Product Schema auf jeder Produktseite mit mindestens: Name, Bild, Beschreibung, Marke, SKU, Angebote (Preis, Waehrung, Verfuegbarkeit) und aggregateRating. Verwenden Sie Googles Rich Results Test zur Validierung Ihres Markups. Wenn Sie auf Shopify sind, erledigen Apps wie JSON-LD for SEO dies automatisch. Auf WooCommerce fuegen Plugins wie Rank Math oder Yoast WooCommerce SEO Product Schema hinzu. Verifizieren Sie, dass das Schema sich dynamisch aktualisiert, wenn sich Preise oder Verfuegbarkeit aendern. Veraltete Schema-Daten (ein Produkt als verfuegbar anzeigen, wenn es ausverkauft ist) koennen manuelle Massnahmen von Google ausloesen."
          ],
          image: { src: "/images/blog/de/schema-markup-rich-results.svg", alt: "Product schema markup comparison showing plain search result versus rich result with ratings, price, and availability", caption: "Pages with rich snippets get 58% of clicks on the first page versus standard results" },
          callout: { title: "Rich Results Win Clicks", text: "Pages with rich snippets get 58% of first-page clicks compared to standard results. Implement Product schema with name, image, price, availability, and rating on every product page." },
        },
        {
          heading: "9. Wichtige Seiten mit robots.txt oder noindex blockieren",
          body: [
            "Das klingt grundlegend, aber wir finden es in rund 1 von 5 Audits. Seiten, die indexiert sein sollten, werden versehentlich durch robots.txt-Regeln oder noindex Meta Tags blockiert, die aus Entwicklungs- oder Staging-Umgebungen uebrig geblieben sind.",
            "Warum es passiert: Waehrend der Entwicklung fuegen Teams noindex-Tags hinzu, um zu verhindern, dass Staging-Seiten indexiert werden. Wenn die Seite launcht, vergisst jemand, sie zu entfernen. Oder eine zu aggressive robots.txt-Datei blockiert ganze Bereiche der Seite. Wir fanden einmal einen Magento-Shop, bei dem die robots.txt /catalog/ blockierte, was jede einzelne Produkt- und Kategorieseite auf der Seite umfasste. Ihr Entwickler hatte ein robots.txt-Template aus einem Forumsbeitrag kopiert, ohne zu verstehen, was es tat.",
            "Der Schaden: Wenn Google Ihre Seiten nicht crawlen oder indexieren kann, existieren sie nicht in den Suchergebnissen. Der erwaehnte Magento-Shop hatte 4 Monate lang null organischen Traffic auf Produktseiten, bevor sie es bemerkten. Das ist kein subtiles Problem. Das ist ein totaler SEO-Blackout.",
            "So beheben Sie es: Pruefen Sie jetzt Ihre robots.txt-Datei. Stellen Sie sicher, dass sie nicht /collections/, /products/, /catalog/ oder welches URL-Muster auch immer Ihre Plattform fuer Produkt- und Kategorieseiten verwendet, blockiert. Verwenden Sie das URL-Inspektionstool der Google Search Console, um zu verifizieren, dass Ihre wichtigen Seiten indexiert sind. Suchen Sie 'site:ihredomain.de' bei Google und vergleichen Sie die indexierte Seitenzahl mit der Zahl, die Sie erwarten. Wenn es eine grosse Diskrepanz gibt, untersuchen Sie sofort."
          ],
        },
        {
          heading: "10. SEO als einmaliges Projekt behandeln",
          body: [
            "Das ist kein technischer Fehler. Es ist ein strategischer. Und es ist moeglicherweise der teuerste Fehler auf dieser Liste.",
            "Warum es passiert: Ein Shop launcht, beauftragt eine Agentur oder einen Consultant, 'SEO zu machen', bekommt einige Verbesserungen und hoert dann auf. Die Annahme ist, dass SEO wie ein Website-Redesign ist: Man macht es einmal und es ist erledigt. Dieses Missverstaendnis ist ueberall verbreitet.",
            "Der Schaden: SEO-Ergebnisse verfallen ohne fortlaufende Anstrengung. Wettbewerber veroeffentlichen neuen Content, verdienen neue Backlinks und verbessern ihre technischen Grundlagen. Google aktualisiert seinen Algorithmus 500 bis 600 Mal pro Jahr. Produktseiten veralten bei Bestandsaenderungen. Neue technische Probleme schleichen sich bei jedem Plattform-Update und jeder neuen App-Installation ein. Wir haben gesehen, wie Shops innerhalb von 6 Monaten nach dem Stopp der SEO-Arbeit von Position 3 auf Position 15 fuer ihr primaeres Keyword fielen.",
            "So beheben Sie es: Bauen Sie SEO in Ihre laufenden Ablaeufe ein. Reservieren Sie monatlich Zeit fuer Content-Erstellung (Produktbeschreibungen, Kategorieinhalt, Blogbeitraege). Fuehren Sie quartalsweise ein technisches Audit durch. Ueberwachen Sie Rankings und Traffic woechentlich. Aktualisieren Sie Produktseiten bei Bestandsaenderungen. Bauen Sie Links konsistent auf statt in Schueben. SEO ist eine sich akkumulierende Investition. Die Shops, die in der organischen Suche gewinnen, sind diejenigen, die es als kontinuierlichen Prozess behandeln, nicht als Projekt mit einem Enddatum.",
            "Wenn Sie Ihren Shop in zwei oder mehr dieser Fehler wiedererkannt haben, sind Sie nicht allein. Der Unterschied zwischen Shops, die organischen Traffic steigern, und solchen, die stagnieren, ist fast immer die Ausfuehrung dieser Grundlagen. Keine fortgeschrittenen Taktiken, keine geheimen Tricks. Einfach die Basics richtig machen, konsequent."
          ],
        }
      ],
    },
    it: {
      title: "10 errori SEO ecommerce e come risolverli",
      description: "Ogni settimana facciamo audit di negozi ecommerce. Questi sono i 10 errori SEO che troviamo piu spesso, perche accadono, i danni che causano e come risolverli.",
      sections: [
        {
          heading: "Gli errori che vediamo in quasi ogni audit",
          body: [
            "Facciamo audit di negozi ecommerce ogni settimana. Dopo centinaia di audit su Shopify, Magento, WooCommerce e piattaforme personalizzate, vediamo gli stessi errori ripetersi continuamente. Alcuni sono ovvi. Alcuni sono sottili. Tutti costano denaro reale in traffico organico e fatturato perso. Eseguire un approfondito [audit SEO ecommerce](/blog/how-to-make-ecommerce-seo-audit) e il modo piu veloce per scoprirli tutti in una volta.",
            "Cio che ci frustra e che la maggior parte di questi errori e prevenibile. Accadono a causa di lanci di negozi affrettati, impostazioni predefinite della piattaforma che nessuno ha modificato, o sviluppatori ben intenzionati che non capiscono la SEO. La buona notizia e che ognuno ha una soluzione chiara.",
            "Abbiamo classificato questi 10 errori approssimativamente per frequenza con cui li incontriamo e per quanto danno causano tipicamente. Se gestisci un negozio ecommerce, quasi sicuramente ne stai commettendo almeno due o tre in questo momento."
          ],
          image: { src: "/images/blog/it/seo-mistakes-impact.svg", alt: "Horizontal bar chart ranking top ecommerce SEO mistakes by traffic impact severity", caption: "The 10 most common ecommerce SEO mistakes ranked by traffic impact" },
        },
        {
          heading: "1. Contenuto duplicato da varianti prodotto e filtri",
          body: [
            "Questo e l'errore SEO ecommerce piu comune, ed e anche uno dei piu dannosi. Accade quando la tua piattaforma genera URL unici per ogni variante di prodotto, combinazione di filtri e ordine di ordinamento. Un negozio con 500 prodotti puo facilmente ritrovarsi con 50.000 URL indicizzabili, la maggior parte dei quali contiene contenuto quasi identico.",
            "Perche succede: Le piattaforme ecommerce creano questi URL per impostazione predefinita. Quando un cliente seleziona la taglia 'M' in blu, l'URL cambia in /product?size=m&color=blue. Applica un filtro per 'prezzo crescente' su una pagina di categoria e ottieni /category?sort=price-asc. Ognuno di questi URL e una pagina separata per Google. E ognuno ha lo stesso contenuto base della pagina principale.",
            "Il danno: Google spreca budget di scansione indicizzando migliaia di pagine duplicate invece delle tue pagine prodotto e di categoria effettive. I segnali di ranking si diluiscono su piu URL per lo stesso contenuto. Abbiamo fatto l'audit di un negozio di articoli per la casa con 2.000 prodotti che aveva 180.000 URL indicizzati. Solo 8.000 di quelli erano le pagine prodotto e di categoria canoniche che effettivamente volevano posizionare.",
            "Come risolvere: Implementa tag canonical su tutti gli URL delle varianti che puntano alla pagina prodotto principale. Usa il meta tag robots o robots.txt per bloccare l'indicizzazione degli URL con parametri di filtro e ordinamento. In Google Search Console, configura i parametri URL per dire a Google quali parametri cambiano il contenuto della pagina (come la categoria) e quali no (come l'ordinamento). La pulizia richiede tipicamente da 2 a 4 settimane e spesso vediamo il traffico organico aumentare dal 15% al 30% entro 2 mesi solo risolvendo questo unico problema. Usa la nostra [checklist SEO ecommerce](/blog/ecommerce-seo-checklist) per procedere sistematicamente con queste correzioni."
          ],
          image: { src: "/images/blog/it/duplicate-content-sources.svg", alt: "Diagram showing six common sources of duplicate content in ecommerce stores", caption: "Common duplicate content sources and how to fix them with canonical tags" },
          callout: { title: "Duplication Scale", text: "A store with 2,000 products had 180,000 indexed URLs -- only 8,000 were the actual pages they wanted ranking. Fixing canonicals alone can boost organic traffic 15-30% within two months." },
        },
        {
          heading: "2. Contenuto scarso nelle pagine prodotto",
          body: [
            "Una pagina prodotto con un titolo, un prezzo, una descrizione del produttore di 20 parole e una foto non e una pagina che Google vuole posizionare. Eppure e cosi che appaiono la maggior parte delle pagine prodotto ecommerce.",
            "Perche succede: I negozi spesso importano i dati prodotto direttamente dai fornitori o produttori senza modifiche. Quando hai 5.000 prodotti, scrivere descrizioni uniche per ognuno sembra impossibile. Cosi resta il testo standard del produttore.",
            "Il danno: Il contenuto scarso significa che Google vede le tue pagine prodotto come di basso valore. Si posizionano male o non si posizionano affatto. Peggio, se altri 200 rivenditori usano la stessa descrizione del produttore, Google non ha motivo di scegliere la tua pagina rispetto a qualsiasi altra. Abbiamo confrontato due negozi concorrenti di attrezzatura outdoor. Uno aveva descrizioni del produttore con una media di 35 parole. L'altro aveva descrizioni originali con una media di 180 parole con consigli d'uso e confronti. Il secondo negozio si posizionava per 4 volte piu parole chiave a livello di prodotto.",
            "Come risolvere: Dai la priorita ai tuoi prodotti che generano piu fatturato e scrivi descrizioni originali di almeno 150 parole. Includi dettagli che la descrizione del produttore non copre: come il prodotto viene effettivamente usato, per chi e piu adatto, come si confronta con le alternative, e quali domande comuni hanno gli acquirenti. Aggiungi una sezione di specifiche strutturata con materiale, dimensioni, peso e dettagli di compatibilita. Non devi riscrivere tutti i 5.000 prodotti in una volta. Inizia con i top 100 per fatturato e procedi verso l'esterno."
          ],
        },
        {
          heading: "3. Ignorare la velocita del sito su pagine prodotto e di categoria",
          body: [
            "Tutti sanno che la velocita del sito conta. Quasi nessuno la risolve effettivamente. I negozi ecommerce sono particolarmente soggetti a problemi di velocita perche le pagine prodotto tendono ad essere pesanti con immagini, recensioni, widget di prodotti correlati e script di terze parti. La velocita e solo uno dei tanti fattori trattati nella nostra guida alla [SEO tecnica per ecommerce](/blog/technical-seo-for-ecommerce).",
            "Perche succede: Ogni app, plugin o integrazione aggiunge JavaScript. Widget di recensioni, live chat, strumenti di analisi, pixel di retargeting, popup di social proof. Ognuno aggiunge da 50ms a 500ms di tempo di caricamento. Un tipico negozio Shopify ha da 15 a 25 app installate, e molte di esse iniettano script a ogni caricamento di pagina. Nessuno nota il rallentamento incrementale finche il sito non impiega 6 secondi per diventare interattivo.",
            "Il danno: Google usa i Core Web Vitals come segnale di ranking. In particolare, Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS) e Interaction to Next Paint (INP). I siti lenti si posizionano peggio, punto. Ma l'impatto sul fatturato va oltre le classifiche. Per ogni 100ms di miglioramento nel tempo di caricamento, i tassi di conversione aumentano in media dell'1,1% secondo la ricerca Deloitte sui siti retail. Un negozio che fattura 2 milioni di euro all'anno e che migliora il tempo di caricamento di 1 secondo potrebbe vedere oltre 100.000 euro di fatturato aggiuntivo.",
            "Come risolvere: Fai un audit dei tuoi script di terze parti e rimuovi tutto cio che non stai usando attivamente. Implementa il lazy loading per le immagini sotto la piega. Servi le immagini in formato WebP e usa il dimensionamento responsivo. Sposta il JavaScript non critico al caricamento async o defer. Implementa header di cache del browser corretti. Per i negozi Shopify in particolare, riduci il numero di app e controlla se qualche app sta caricando script su tutto il sito quando deve funzionare solo su pagine specifiche. Punta a un LCP sotto 2,5 secondi e un INP sotto 200 millisecondi."
          ],
          image: { src: "/images/blog/it/site-speed-revenue-impact.svg", alt: "Site speed revenue impact showing Core Web Vitals targets and the cost of slow load times for ecommerce", caption: "Every 100ms improvement in load time increases conversion rates by 1.1%" },
          callout: { title: "Speed = Revenue", text: "A $2M/year store that improves load time by 1 second could see $100K+ in additional revenue. The typical Shopify store has 15-25 apps injecting scripts -- each adding 50-500ms of load time." },
        },
        {
          heading: "4. Struttura di link interni carente",
          body: [
            "La maggior parte dei negozi ecommerce si affida interamente ai menu di navigazione e ai breadcrumb per i link interni. Questo non e sufficiente. Google scopre e valuta l'importanza delle pagine in base a quanti link interni puntano a una pagina e da dove.",
            "Perche succede: Il linking interno richiede una pianificazione deliberata, e la maggior parte dei proprietari di negozi si concentra sulle pagine prodotto e sul flusso di checkout piuttosto che sull'architettura dei link. Il CMS o la piattaforma gestisce la navigazione, e nessuno ci pensa ulteriormente. Le sezioni di prodotti correlati esistono per scopi di conversione ma spesso usano rendering JavaScript che Google non puo seguire.",
            "Il danno: Le pagine prodotto orfane (pagine senza link interni che puntano ad esse) sono invisibili al crawler di Google. Troviamo regolarmente che il 20-40% delle pagine prodotto nei negozi ecommerce ha meno di 3 link interni. Queste pagine non si posizionano per quasi nulla. Nel frattempo, la homepage ha tipicamente migliaia di link interni e tutta quell'autorita non ha un posto produttivo dove fluire.",
            "Come risolvere: Aggiungi link interni contestuali nelle descrizioni prodotto che puntano a prodotti correlati e categorie genitore. Implementa una sezione 'prodotti correlati' che usa veri link HTML, non caroselli renderizzati in JavaScript che Googlebot non puo analizzare. Crea hub di contenuto (guide all'acquisto, pagine di confronto, articoli how-to) che linkano a gruppi di prodotti correlati. Usa i breadcrumb su ogni pagina. Per cataloghi grandi, crea una pagina sitemap HTML che linka a tutte le categorie di primo e secondo livello. Un cliente ha aggiunto link interni contestuali alle sue top 200 pagine prodotto e ha visto la posizione media di ranking migliorare di 4,2 posizioni entro 8 settimane."
          ],
          image: { src: "/images/blog/it/internal-linking-architecture.svg", alt: "Ecommerce internal linking architecture showing homepage, categories, products, and content hubs connected", caption: "Content hubs fill the linking gap -- 20-40% of product pages typically have fewer than 3 internal links" },
        },
        {
          heading: "5. Meta titoli e descrizioni mancanti o duplicati",
          body: [
            "Troviamo ancora negozi dove centinaia di pagine prodotto condividono lo stesso template di meta title ('Nome Prodotto | Nome Negozio') senza descrizione unica, o dove le meta description mancano completamente e Google genera snippet da qualsiasi testo trovi sulla pagina.",
            "Perche succede: Impostazioni predefinite della piattaforma. Shopify, WooCommerce e Magento generano tutti automaticamente i meta titoli dal nome del prodotto, e molti proprietari di negozi non li personalizzano mai. Per le descrizioni, il default e spesso vuoto o una versione troncata della descrizione prodotto che si legge male nei risultati di ricerca.",
            "Il danno: Il tuo meta titolo e il segnale di ranking on-page piu forte. Un template generico come 'Widget Blu | Nome Negozio' perde l'opportunita di includere parole chiave rilevanti. E la tua meta description, sebbene non sia un fattore di ranking diretto, influenza direttamente il tasso di clic. Una meta description ben scritta puo aumentare il CTR dal 30% al 50% rispetto agli snippet generati automaticamente.",
            "Come risolvere: Crea una formula per il meta title che includa la parola chiave principale, il nome del prodotto e un elemento differenziante. Ad esempio: 'T-Shirt Uomo Scollo a V Cotone Biologico | Spedizione Gratuita | Nome Negozio'. Scrivi meta description uniche almeno per le tue pagine con le migliori prestazioni. Per il resto, costruisci template intelligenti che estraggono dinamicamente gli attributi del prodotto: '[Nome Prodotto] in [Colore]. [Materiale], [Caratteristica Chiave]. [Prezzo] con spedizione gratuita sopra i 50 euro.' Questo e meglio di niente e richiede minuti da configurare sulla maggior parte delle piattaforme."
          ],
        },
        {
          heading: "6. Non ottimizzare le pagine di categoria per la ricerca",
          body: [
            "Le pagine di categoria sono spesso gli obiettivi SEO di maggior valore in un negozio ecommerce. Mirano a termini principali con volume reale ('scarpe da corsa uomo', 'skincare biologica') mentre le pagine prodotto mirano a variazioni long-tail. Eppure la maggior parte dei negozi tratta le pagine di categoria come nient'altro che una griglia di miniature di prodotti.",
            "Perche succede: Designer e team UX si concentrano sul rendere le pagine di categoria visivamente pulite, il che di solito significa testo minimo. L'assunto e che gli acquirenti vogliano sfogliare i prodotti, non leggere paragrafi. Questa e una falsa scelta. Puoi avere entrambi.",
            "Il danno: Una pagina di categoria senza contenuto testuale da a Google quasi nulla con cui lavorare. L'unico contenuto sono titoli e prezzi dei prodotti, che non sono sufficienti per posizionarsi per parole chiave competitive a livello di categoria. Lo vediamo costantemente: negozi che si posizionano a pagina 2 o 3 per i loro termini di categoria piu preziosi, perdendo migliaia di visite potenziali al mese.",
            "Come risolvere: Aggiungi da 200 a 400 parole di contenuto originale a ogni pagina di categoria. Posizionalo sotto la griglia dei prodotti cosi non interferisce con l'esperienza di acquisto. Includi la parola chiave target in modo naturale, descrivi cosa rende la tua selezione diversa, e linka a guide all'acquisto o sottocategorie rilevanti. Alcuni brand aggiungono contenuto di categoria in una sezione comprimibile sopra la griglia dei prodotti, visibile a Google ma discreta per gli acquirenti. Entrambi gli approcci funzionano. Per una guida completa all'ottimizzazione delle pagine prodotto e di categoria, consulta la nostra guida alla [SEO on-page per ecommerce](/blog/on-page-seo-for-ecommerce)."
          ],
        },
        {
          heading: "7. Catene di redirect interrotte ed errori 404",
          body: [
            "I prodotti vengono discontinuati. Le collezioni ruotano. Gli URL cambiano durante i redesign. Senza una gestione adeguata dei redirect, i vecchi URL si rompono (errori 404) o si accumulano in lunghe catene di redirect (l'URL A reindirizza a B, che reindirizza a C, che reindirizza a D).",
            "Perche succede: Nessuno gestisce il processo dei redirect. Il team marketing rimuove vecchi prodotti senza avvisare nessuno. Il team di sviluppo cambia le strutture degli URL durante le migrazioni senza mappare i vecchi URL ai nuovi. Nel tempo, i file di redirect diventano grovigli intricati che nessuno vuole toccare.",
            "Il danno: Gli errori 404 sulle pagine che avevano backlink o posizionamenti sprecano l'autorita accumulata. Le catene di redirect (3+ passaggi) rallentano la consegna della pagina e perdono link equity a ogni passaggio. Google ha dichiarato che i redirect 301 trasferiscono la piena link equity, ma le catene di redirect causano comunque problemi con l'efficienza di scansione e la velocita della pagina. Abbiamo fatto l'audit di un rivenditore di moda con 12.000 errori 404 e 3.000 catene di redirect. Risolvere solo questi problemi ha recuperato il 18% del traffico organico perso entro 3 mesi.",
            "Come risolvere: Esegui una scansione del tuo sito con Screaming Frog o Sitebulb e identifica tutti gli errori 404 e le catene di redirect. Per i 404, implementa redirect 301 alla pagina live piu rilevante (di solito la categoria genitore o un prodotto simile). Per le catene, aggiorna ogni redirect in modo che punti direttamente all'URL di destinazione finale. Configura un processo in modo che ogni volta che un prodotto viene discontinuato, venga creato un redirect come parte del workflow di rimozione. Controlla il tuo file di redirect trimestralmente."
          ],
        },
        {
          heading: "8. Nessun markup schema sulle pagine prodotto",
          body: [
            "Il markup schema dice a Google esattamente cosa contiene la tua pagina: nome del prodotto, prezzo, disponibilita, valutazione e altro. Senza, Google deve indovinare. E le ipotesi di Google non sono sempre corrette.",
            "Perche succede: Il markup schema richiede un plugin, un tema che lo supporta nativamente, oppure sviluppo personalizzato. Molti proprietari di negozi non sanno che esiste. Quelli che lo sanno spesso presumono che il loro tema lo gestisca, senza verificare se il markup e corretto o completo.",
            "Il danno: Le pagine senza markup schema non sono idonee per i rich results (i risultati di ricerca migliorati che mostrano prezzo, valutazioni e disponibilita direttamente nella SERP). I rich results hanno tassi di clic significativamente piu alti dei link blu standard. I dati Ahrefs mostrano che le pagine con rich snippet ottengono il 58% dei clic sulla prima pagina, rispetto ai risultati standard.",
            "Come risolvere: Implementa lo schema Product su ogni pagina prodotto con almeno: name, image, description, brand, sku, offers (price, currency, availability) e aggregateRating. Usa il Rich Results Test di Google per validare il tuo markup. Se sei su Shopify, app come JSON-LD for SEO lo gestiscono automaticamente. Su WooCommerce, plugin come Rank Math o Yoast WooCommerce SEO aggiungono lo schema prodotto. Verifica che lo schema si aggiorni dinamicamente quando cambiano prezzi o disponibilita. Dati schema obsoleti (mostrare un prodotto come disponibile quando e esaurito) possono attivare azioni manuali da parte di Google."
          ],
          image: { src: "/images/blog/it/schema-markup-rich-results.svg", alt: "Product schema markup comparison showing plain search result versus rich result with ratings, price, and availability", caption: "Pages with rich snippets get 58% of clicks on the first page versus standard results" },
          callout: { title: "Rich Results Win Clicks", text: "Pages with rich snippets get 58% of first-page clicks compared to standard results. Implement Product schema with name, image, price, availability, and rating on every product page." },
        },
        {
          heading: "9. Bloccare pagine importanti con robots.txt o noindex",
          body: [
            "Questo sembra basilare, ma lo troviamo in circa 1 audit su 5. Pagine che dovrebbero essere indicizzate vengono accidentalmente bloccate da regole robots.txt o meta tag noindex rimasti dagli ambienti di sviluppo o staging.",
            "Perche succede: Durante lo sviluppo, i team aggiungono tag noindex per impedire che i siti di staging vengano indicizzati. Quando il sito va live, qualcuno dimentica di rimuoverli. Oppure un file robots.txt eccessivamente aggressivo blocca intere sezioni del sito. Una volta abbiamo trovato un negozio Magento dove il robots.txt bloccava /catalog/, che conteneva ogni singola pagina prodotto e di categoria del sito. Il loro sviluppatore aveva copiato un template robots.txt da un post su un forum senza capire cosa facesse.",
            "Il danno: Se Google non puo scansionare o indicizzare le tue pagine, non esistono nei risultati di ricerca. Il negozio Magento che abbiamo menzionato ha avuto zero traffico organico alle pagine prodotto per 4 mesi prima di accorgersene. Non e un problema sottile. E un blackout SEO totale.",
            "Come risolvere: Controlla il tuo file robots.txt adesso. Assicurati che non stia bloccando /collections/, /products/, /catalog/, o qualsiasi pattern URL che la tua piattaforma usa per le pagine prodotto e di categoria. Usa lo strumento di Ispezione URL di Google Search Console per verificare che le tue pagine importanti siano indicizzate. Cerca 'site:tuodominio.it' su Google e confronta il conteggio delle pagine indicizzate con il numero che ti aspetti. Se c'e una grande discrepanza, indaga immediatamente."
          ],
        },
        {
          heading: "10. Trattare la SEO come un progetto una tantum",
          body: [
            "Questo non e un errore tecnico. E un errore strategico. E potrebbe essere l'errore piu costoso di questa lista.",
            "Perche succede: Un negozio viene lanciato, assume un'agenzia o un consulente per 'fare la SEO', ottiene alcuni miglioramenti, e poi si ferma. L'assunto e che la SEO sia come il redesign di un sito web: lo fai una volta e basta. Questo fraintendimento e ovunque.",
            "Il danno: I risultati SEO decadono senza sforzo continuo. I concorrenti pubblicano nuovi contenuti, guadagnano nuovi backlink e migliorano le loro fondamenta tecniche. Google aggiorna il suo algoritmo da 500 a 600 volte all'anno. Le pagine prodotto diventano obsolete quando cambia l'inventario. Nuovi problemi tecnici si insinuano con ogni aggiornamento della piattaforma e ogni nuova installazione di app. Abbiamo visto negozi passare dalla posizione 3 alla posizione 15 per la loro parola chiave principale entro 6 mesi dall'aver smesso di lavorare sulla SEO.",
            "Come risolvere: Integra la SEO nelle tue operazioni quotidiane. Riserva tempo mensile per la creazione di contenuti (descrizioni prodotto, contenuti di categoria, post del blog). Fai un audit tecnico trimestralmente. Monitora classifiche e traffico settimanalmente. Aggiorna le pagine prodotto quando cambia l'inventario. Costruisci link in modo costante piuttosto che a raffiche. La SEO e un investimento che si accumula. I negozi che vincono nella ricerca organica sono quelli che la trattano come un processo continuo, non come un progetto con una data di fine.",
            "Se hai riconosciuto il tuo negozio in due o piu di questi errori, non sei solo. La differenza tra i negozi che fanno crescere il traffico organico e quelli che ristagnano e quasi sempre l'esecuzione di questi fondamentali. Non tattiche avanzate, non trucchi segreti. Semplicemente fare bene le basi, con costanza."
          ],
        }
      ],
    },
  },
};
