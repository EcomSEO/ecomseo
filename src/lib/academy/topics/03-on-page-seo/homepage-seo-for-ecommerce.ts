import type { AcademyTopic } from "../../types";

export const homepageSeoForEcommerce: AcademyTopic = {
  slug: "homepage-seo-for-ecommerce",
  cluster: 3,
  resources: [{"label":"Google PageSpeed Insights","url":"https://pagespeed.web.dev/","type":"tool"},{"label":"Rich Results Test","url":"https://search.google.com/test/rich-results","type":"tool"},{"label":"Schema.org Organization","url":"https://schema.org/Organization","type":"docs"}],
  content: {
    en: {
      badge: "On-Page SEO",
      heading: "Homepage SEO for Ecommerce",
      intro:
        "Your homepage is the single most authoritative page on your entire domain. It receives the lion's share of backlinks, carries the most internal link equity, and sets the tone for how search engines understand your store. Yet many ecommerce sites waste this authority on flashy hero banners with zero text content, leaving Google guessing about what they actually sell. A strategically optimized homepage funnels authority to your most important categories and establishes your store as the topical authority in your niche. For a deep dive, read our [ecommerce homepage SEO](/blog/ecommerce-homepage-seo) guide.",
      readTime: "10 min read",
      sections: [
        {
          title: "The Role of Your Homepage in Ecommerce SEO",
          content:
            "Your homepage serves a fundamentally different SEO purpose than any other page on your site. While product and category pages target specific transactional keywords, the homepage targets your brand name and the broadest description of what your store offers. A shop selling outdoor gear should have a homepage that clearly communicates \"we sell outdoor and camping equipment\" to both humans and crawlers, not just a rotating carousel of sale items.\n\nThe homepage also acts as the primary distribution hub for link equity across your entire site through [internal linking](/academy/internal-linking-for-stores). External links from press coverage, partnerships, and directories almost always point to the homepage. Every internal link from the homepage passes a portion of that accumulated authority to the linked page. This makes your homepage navigation and linking structure one of the most consequential SEO decisions you'll make.\n\nBrand searches often trigger the homepage as the top result, and Google uses the homepage to build its understanding of your site's overall topic. If Google can't figure out what you sell from your homepage, it will struggle to rank your deeper pages for relevant queries. Think of the homepage as your store's elevator pitch to search engines, clear, comprehensive, and well-organized.",
        },
        {
          title: "Homepage Content Structure That Works",
          content:
            "The ideal ecommerce homepage follows a content hierarchy that serves both SEO and conversion goals. Start with a clear H1 that includes your primary keyword phrase, something like \"Premium Outdoor Gear & Camping Equipment\" rather than a vague tagline like \"Adventure Awaits.\" The H1 is one of the strongest on-page signals you can send, and wasting it on brand-only text misses an opportunity to rank for your core commercial terms.\n\nBelow the H1 and hero area, include a short introductory paragraph (100-200 words) that describes your store, what you sell, and why shoppers should buy from you. This paragraph gives Google the semantic context it needs to categorize your site. Mention your main product categories, your unique selling points, and any trust signals like years in business or number of satisfied customers.\n\nFeature your top-level categories with both visual cards and text links. Each category block should include the category name as an H2 or H3, a brief description (2-3 sentences), and a link to the category page. This structure creates a clear topical hierarchy that tells Google your homepage is the parent of these category topics, and it gives you natural anchor text for your most important internal links.\n\nEnd the homepage with a longer content section (200-400 words) that expands on your brand story, expertise, or unique value proposition. This bottom-of-page content doesn't interfere with the shopping experience because it sits below the product showcases. But it provides Google with substantial text to understand your site's focus and authority in the space.",
          items: [
            "Use a descriptive H1 with your primary commercial keyword, not just your brand name",
            "Include a 100-200 word intro paragraph describing your store and product range",
            "Feature top categories with names, descriptions, and links",
            "Add a 200-400 word brand and expertise section below the fold",
          ],
        },
        {
          title: "Homepage Navigation and Internal Links",
          content:
            "Your main navigation menu is arguably the most powerful internal linking element on your site because it appears on every page. The categories you include in the main nav receive link equity from every indexed page on your domain. Choose these carefully, your top navigation should feature your highest-value categories, not utility pages like \"About Us\" or \"Contact.\"\n\nLimit your main navigation to 7-10 top-level items. Mega menus with dozens of links dilute the equity passed to each linked page and can overwhelm both users and search engines. If you have a large catalog with many categories, use a logical hierarchy: top-level categories in the main nav, subcategories in dropdown menus, and tertiary categories linked from the respective parent category pages.\n\nHomepage-specific internal links, those outside the main navigation, are where you can be strategic about directing authority. Link to seasonal collections, new arrivals, or categories you're actively trying to rank. If you're launching a push into a new product line, adding a homepage section that links to that category gives it an authority boost that no other internal link can match.\n\nDon't forget footer links. While they carry less weight than main navigation links, footer links are a good place to include your full category list, important policy pages, and links to your blog or resource section. Keep the footer organized with clear headings so it reads as a structured sitemap rather than a wall of links.",
          tip: "Review your homepage internal links quarterly. Seasonal shifts, new product launches, and discontinued categories all warrant updates to which pages receive homepage-level link equity. A link from your homepage to an out-of-stock category page wastes authority that could go to pages still generating revenue.",
        },
        {
          title: "Title Tag, Meta Description, and Schema",
          content:
            "The homepage title tag is the one place where leading with your brand name makes sense, because most homepage searches are branded queries. The optimal formula is: Brand Name + Primary Keyword + Differentiator. For example, \"TrailGear | Outdoor Gear & Camping Equipment | Free Shipping Over $50\" hits the brand, the core keyword, and a conversion incentive in under 60 characters.\n\nYour homepage meta description should serve as a mini-advertisement for your entire store. Include your main product categories, a trust signal, and a call to action. \"Shop premium hiking, camping & climbing gear at TrailGear. 5,000+ products from top brands. Free returns & expert advice since 2012.\" This gives searchers multiple reasons to click while naturally incorporating category-level keywords.\n\nImplement Organization schema on your homepage to tell Google about your business entity. Include your business name, logo, contact information, social media profiles, and founding date. This schema helps Google connect your brand with its Knowledge Graph and can trigger enhanced brand panels in search results. If you operate physical stores, add LocalBusiness schema with your addresses and hours.\n\nDon't overlook the SiteNavigationElement schema for your main menu. While not a direct ranking factor, it helps search engines understand your site structure and can influence how sitelinks appear beneath your homepage in search results. Well-structured sitelinks make your listing take up more space in the results page, pushing competitors further down.",
        },
        {
          title: "Common Homepage SEO Mistakes",
          content:
            "The most frequent mistake we see is the \"all images, no text\" homepage. A full-screen hero banner, a grid of product images, and nothing else. Google can read alt text on images, but it's no substitute for actual paragraph content that establishes topical relevance. If your homepage has fewer than 200 words of visible text content, you're almost certainly underperforming in organic search.\n\nAnother common error is using the homepage H1 for a seasonal promotional message that changes every week. \"Summer Sale - Up to 50% Off\" tells Google nothing about what you sell. Your H1 should be stable and descriptive. Use banner overlays or separate promotional elements for time-sensitive messaging instead of hijacking your primary heading tag.\n\nSlider carousels harm both SEO and conversion. Only the first slide's content gets full attention from users, and the rotating content creates a confusing signal for search engines that crawl the page at different moments. Replace sliders with a single, strong hero section that communicates your value proposition clearly. Studies consistently show that static hero images outperform sliders in conversion rate testing.\n\nFinally, many stores make the mistake of stuffing their homepage with links to individual products instead of categories. Your homepage should link to categories (and maybe a handful of featured products), which then link to products. This aligns with a sound [site architecture](/academy/site-architecture-for-ecommerce) that keeps every page within a few clicks of the homepage. Linking to 200 individual products from the homepage spreads your authority so thin that none of those links carry meaningful weight. Keep the homepage focused on your top 10-15 most important internal destinations.",
          items: [
            "Ensure at least 200-300 words of visible text content on the homepage",
            "Keep the H1 stable and descriptive, don't swap it for promotional slogans",
            "Replace carousel sliders with a single static hero section",
            "Link to categories from the homepage, not to hundreds of individual products",
            "Avoid orphaning important pages by excluding them from navigation entirely",
          ],
        },
      ],
      navLabels: {
        previous: "Category Page SEO",
        next: "Title Tags & Meta Descriptions",
      },
    },
    de: {
      badge: "On-Page SEO",
      heading: "Homepage-SEO fuer E-Commerce",
      intro:
        "Ihre Startseite ist die einzelne autoritaetsstärkste Seite Ihrer gesamten Domain. Sie erhaelt den Loewenanteil der Backlinks, traegt die meiste interne Link-Equity und gibt den Ton an, wie Suchmaschinen Ihren Shop verstehen. Dennoch verschwenden viele E-Commerce-Seiten diese Autoritaet mit auffaelligen Hero-Bannern ohne Textinhalt und lassen Google raetseln, was sie eigentlich verkaufen. Eine strategisch optimierte Startseite lenkt Autoritaet zu Ihren wichtigsten Kategorien und etabliert Ihren Shop als thematische Autoritaet in Ihrer Nische.",
      readTime: "10 Min. Lesezeit",
      sections: [
        {
          title: "Die Rolle Ihrer Startseite in der E-Commerce-SEO",
          content:
            "Ihre Startseite dient einem grundlegend anderen SEO-Zweck als jede andere Seite Ihres Shops. Waehrend Produkt- und Kategorieseiten spezifische transaktionale Keywords anvisieren, zielt die Startseite auf Ihren Markennamen und die breiteste Beschreibung dessen, was Ihr Shop anbietet. Ein Shop fuer Outdoor-Ausruestung sollte eine Startseite haben, die klar kommuniziert \"wir verkaufen Outdoor- und Camping-Ausruestung\", fuer Menschen und Crawler gleichermassen.\n\nDie Startseite fungiert auch als primaerer Verteilungsknotenpunkt fuer Link-Equity ueber Ihre gesamte Website. Externe Links aus Presseberichten, Partnerschaften und Verzeichnissen verweisen fast immer auf die Startseite. Jeder interne Link von der Startseite gibt einen Teil dieser angesammelten Autoritaet an die verlinkte Seite weiter. Das macht Ihre Startseiten-Navigation und Verlinkungsstruktur zu einer der folgenschwersten SEO-Entscheidungen.\n\nMarken-Suchen loesen oft die Startseite als oberstes Ergebnis aus, und Google nutzt die Startseite, um sein Verstaendnis des Gesamtthemas Ihrer Website aufzubauen. Wenn Google von Ihrer Startseite nicht herausfinden kann, was Sie verkaufen, wird es Schwierigkeiten haben, Ihre tieferliegenden Seiten fuer relevante Anfragen zu ranken.",
        },
        {
          title: "Startseiten-Content-Struktur die funktioniert",
          content:
            "Die ideale E-Commerce-Startseite folgt einer Content-Hierarchie, die sowohl SEO- als auch Conversion-Ziele bedient. Beginnen Sie mit einer klaren H1, die Ihre primaere Keyword-Phrase enthaelt, etwa \"Premium Outdoor-Ausruestung & Camping-Zubehoer\" statt eines vagen Slogans wie \"Abenteuer wartet.\" Die H1 ist eines der staerksten On-Page-Signale, und sie mit reinem Markentext zu verschwenden, verpasst eine Ranking-Chance fuer Ihre kommerziellen Kernbegriffe.\n\nUnterhalb der H1 und des Hero-Bereichs fuegen Sie einen kurzen Einleitungsabsatz (100-200 Woerter) ein, der Ihren Shop beschreibt, was Sie verkaufen und warum Kaeufer bei Ihnen kaufen sollten. Dieser Absatz gibt Google den semantischen Kontext, den es braucht, um Ihre Website zu kategorisieren.\n\nPraesentieren Sie Ihre Top-Level-Kategorien mit visuellen Karten und Textlinks. Jeder Kategorieblock sollte den Kategorienamen als H2 oder H3, eine kurze Beschreibung (2-3 Saetze) und einen Link zur Kategorieseite enthalten. Diese Struktur schafft eine klare thematische Hierarchie.\n\nBeenden Sie die Startseite mit einem laengeren Content-Bereich (200-400 Woerter), der Ihre Markengeschichte, Expertise oder Ihr Alleinstellungsmerkmal vertieft. Dieser Content am Seitenende stoert das Einkaufserlebnis nicht, da er unterhalb der Produktpraesentationen sitzt.",
          items: [
            "Eine beschreibende H1 mit Ihrem primaeren kommerziellen Keyword verwenden, nicht nur den Markennamen",
            "Einen 100-200 Woerter langen Einleitungsabsatz einfuegen, der Ihren Shop und Ihr Sortiment beschreibt",
            "Top-Kategorien mit Namen, Beschreibungen und Links praesentieren",
            "Einen 200-400 Woerter langen Marken- und Expertise-Bereich unterhalb des sichtbaren Bereichs hinzufuegen",
          ],
        },
        {
          title: "Startseiten-Navigation und interne Links",
          content:
            "Ihr Hauptnavigationsmenue ist wohl das maechtigste interne Verlinkungselement auf Ihrer Website, da es auf jeder Seite erscheint. Die Kategorien, die Sie in die Hauptnavigation aufnehmen, erhalten Link-Equity von jeder indexierten Seite Ihrer Domain. Waehlen Sie diese sorgfaeltig aus, Ihre Top-Navigation sollte Ihre wertvollsten Kategorien zeigen, nicht Hilfsseiten wie \"Ueber uns\" oder \"Kontakt.\"\n\nBeschraenken Sie Ihre Hauptnavigation auf 7-10 Top-Level-Eintraege. Mega-Menues mit Dutzenden von Links verwaessern die an jede verlinkte Seite weitergegebene Equity und koennen sowohl Nutzer als auch Suchmaschinen ueberfordern.\n\nStartseiten-spezifische interne Links, jene ausserhalb der Hauptnavigation, sind die Stelle, an der Sie strategisch Autoritaet lenken koennen. Verlinken Sie auf saisonale Kollektionen, Neuheiten oder Kategorien, fuer die Sie aktiv ranken moechten. Wenn Sie eine neue Produktlinie einführen, gibt ein Startseiten-Bereich mit Link zu dieser Kategorie einen Autoritaetsschub, den kein anderer interner Link bieten kann.\n\nVergessen Sie nicht die Footer-Links. Obwohl sie weniger Gewicht tragen als Hauptnavigationslinks, sind Footer-Links ein guter Platz fuer Ihre vollstaendige Kategorieliste und wichtige Richtlinienseiten.",
          tip: "Ueberpruefen Sie Ihre Startseiten-internen Links vierteljaehrlich. Saisonale Verschiebungen, neue Produkteinfuehrungen und eingestellte Kategorien rechtfertigen alle Aktualisierungen darueber, welche Seiten Startseiten-Level Link-Equity erhalten.",
        },
        {
          title: "Title-Tag, Meta-Description und Schema",
          content:
            "Der Title-Tag der Startseite ist der eine Ort, an dem es Sinn macht, mit Ihrem Markennamen zu fuehren, da die meisten Startseiten-Suchen Markenanfragen sind. Die optimale Formel ist: Markenname + Primaeres Keyword + Differenzierungsmerkmal. Zum Beispiel: \"TrailGear | Outdoor-Ausruestung & Camping-Zubehoer | Kostenloser Versand ab 50€\" trifft Marke, Kern-Keyword und Conversion-Anreiz in unter 60 Zeichen.\n\nIhre Startseiten-Meta-Description sollte als Mini-Werbung fuer Ihren gesamten Shop dienen. Nehmen Sie Ihre Hauptproduktkategorien, ein Vertrauenssignal und einen Call-to-Action auf.\n\nImplementieren Sie Organization-Schema auf Ihrer Startseite, um Google ueber Ihr Unternehmen zu informieren. Fuegen Sie Ihren Firmennamen, Logo, Kontaktinformationen, Social-Media-Profile und das Gruendungsdatum ein. Dieses Schema hilft Google, Ihre Marke mit seinem Knowledge Graph zu verbinden.\n\nUebersehen Sie nicht das SiteNavigationElement-Schema fuer Ihr Hauptmenue. Obwohl es kein direkter Ranking-Faktor ist, hilft es Suchmaschinen, Ihre Website-Struktur zu verstehen und kann beeinflussen, wie Sitelinks unter Ihrer Startseite in Suchergebnissen erscheinen.",
        },
        {
          title: "Haeufige Startseiten-SEO-Fehler",
          content:
            "Der haeufigste Fehler, den wir sehen, ist die \"nur Bilder, kein Text\"-Startseite. Ein Vollbild-Hero-Banner, ein Raster mit Produktbildern und sonst nichts. Google kann Alt-Text auf Bildern lesen, aber das ist kein Ersatz fuer tatsaechlichen Absatztext, der thematische Relevanz herstellt. Wenn Ihre Startseite weniger als 200 Woerter sichtbaren Textinhalt hat, performt sie fast sicher unter ihrem Potenzial.\n\nEin weiterer haeufiger Fehler ist die Verwendung der Startseiten-H1 fuer eine saisonale Werbebotschaft, die sich jede Woche aendert. \"Sommerschlussverkauf - Bis zu 50% Rabatt\" sagt Google nichts darueber, was Sie verkaufen. Ihre H1 sollte stabil und beschreibend sein.\n\nSlider-Karussells schaden sowohl SEO als auch Conversion. Nur der Inhalt der ersten Folie bekommt volle Aufmerksamkeit der Nutzer, und der rotierende Inhalt erzeugt ein verwirrendes Signal fuer Suchmaschinen. Ersetzen Sie Slider durch einen einzelnen, starken Hero-Bereich.\n\nSchliesslich machen viele Shops den Fehler, ihre Startseite mit Links zu einzelnen Produkten statt zu Kategorien vollzustopfen. Ihre Startseite sollte auf Kategorien verlinken, die dann auf Produkte verlinken. Links zu 200 einzelnen Produkten von der Startseite verteilen Ihre Autoritaet so duenn, dass keiner dieser Links bedeutendes Gewicht traegt.",
          items: [
            "Mindestens 200-300 Woerter sichtbaren Textinhalt auf der Startseite sicherstellen",
            "Die H1 stabil und beschreibend halten, nicht gegen Werbeslogans austauschen",
            "Karussell-Slider durch einen einzelnen statischen Hero-Bereich ersetzen",
            "Von der Startseite auf Kategorien verlinken, nicht auf Hunderte einzelner Produkte",
            "Wichtige Seiten nicht verwaisen lassen, indem sie komplett aus der Navigation ausgeschlossen werden",
          ],
        },
      ],
      navLabels: {
        previous: "Kategorieseiten-SEO",
        next: "Title-Tags & Meta-Descriptions",
      },
    },
    fr: {
      badge: "SEO On-Page",
      heading: "SEO de la page d'accueil ecommerce",
      intro:
        "Votre page d'accueil est la page la plus autoritaire de tout votre domaine. Elle recoit la majorite des backlinks, porte le plus d'equite de liens internes et donne le ton sur la facon dont les moteurs de recherche comprennent votre boutique. Pourtant, de nombreux sites ecommerce gaspillent cette autorite avec des bannieres hero flashy sans contenu textuel, laissant Google deviner ce qu'ils vendent reellement. Une page d'accueil strategiquement optimisee canalise l'autorite vers vos categories les plus importantes et etablit votre boutique comme l'autorite thematique dans votre niche.",
      readTime: "10 min de lecture",
      sections: [
        {
          title: "Le role de votre page d'accueil dans le SEO ecommerce",
          content:
            "Votre page d'accueil sert un objectif SEO fondamentalement different de toute autre page de votre site. Alors que les pages produits et categories ciblent des mots-cles transactionnels specifiques, la page d'accueil cible votre nom de marque et la description la plus large de ce que votre boutique propose. Un magasin vendant de l'equipement outdoor devrait avoir une page d'accueil qui communique clairement \"nous vendons de l'equipement outdoor et de camping\" aux humains et aux robots.\n\nLa page d'accueil agit aussi comme le hub principal de distribution de l'equite de liens sur tout votre site. Les liens externes provenant de la couverture presse, des partenariats et des annuaires pointent presque toujours vers la page d'accueil. Chaque lien interne depuis la page d'accueil transmet une portion de cette autorite accumulee a la page liee.\n\nLes recherches de marque declenchent souvent la page d'accueil comme premier resultat, et Google utilise la page d'accueil pour construire sa comprehension du sujet global de votre site. Si Google ne peut pas determiner ce que vous vendez a partir de votre page d'accueil, il aura du mal a positionner vos pages plus profondes pour les requetes pertinentes.",
        },
        {
          title: "Structure de contenu de page d'accueil qui fonctionne",
          content:
            "La page d'accueil ecommerce ideale suit une hierarchie de contenu qui sert a la fois les objectifs SEO et de conversion. Commencez par un H1 clair qui inclut votre phrase de mot-cle principal, quelque chose comme \"Equipement Outdoor & Materiel de Camping Premium\" plutot qu'un slogan vague comme \"L'Aventure Vous Attend.\"\n\nSous le H1 et la zone hero, incluez un court paragraphe d'introduction (100-200 mots) qui decrit votre boutique, ce que vous vendez et pourquoi les acheteurs devraient acheter chez vous. Ce paragraphe donne a Google le contexte semantique necessaire pour categoriser votre site.\n\nPresentez vos categories de premier niveau avec des cartes visuelles et des liens textuels. Chaque bloc de categorie devrait inclure le nom de la categorie en H2 ou H3, une breve description (2-3 phrases) et un lien vers la page categorie.\n\nTerminez la page d'accueil avec une section de contenu plus longue (200-400 mots) qui developpe votre histoire de marque, votre expertise ou votre proposition de valeur unique.",
          items: [
            "Utiliser un H1 descriptif avec votre mot-cle commercial principal, pas seulement votre nom de marque",
            "Inclure un paragraphe d'introduction de 100-200 mots decrivant votre boutique et votre gamme de produits",
            "Presenter les categories principales avec noms, descriptions et liens",
            "Ajouter une section marque et expertise de 200-400 mots sous la ligne de flottaison",
          ],
        },
        {
          title: "Navigation de la page d'accueil et liens internes",
          content:
            "Votre menu de navigation principal est sans doute l'element de liens internes le plus puissant de votre site car il apparait sur chaque page. Les categories que vous incluez dans la navigation principale recoivent l'equite de liens de chaque page indexee de votre domaine. Choisissez-les soigneusement, votre navigation principale devrait presenter vos categories les plus precieuses, pas des pages utilitaires comme \"A propos\" ou \"Contact.\"\n\nLimitez votre navigation principale a 7-10 elements de premier niveau. Les mega-menus avec des dizaines de liens diluent l'equite transmise a chaque page liee et peuvent submerger utilisateurs et moteurs de recherche.\n\nLes liens internes specifiques a la page d'accueil, ceux en dehors de la navigation principale, sont l'endroit ou vous pouvez etre strategique dans la direction de l'autorite. Liez vers des collections saisonnieres, les nouveautes ou les categories pour lesquelles vous essayez activement de vous positionner.\n\nN'oubliez pas les liens du pied de page. Bien qu'ils portent moins de poids que les liens de navigation principale, les liens du footer sont un bon endroit pour votre liste complete de categories et les pages de politique importantes.",
          tip: "Revoyez vos liens internes de page d'accueil tous les trimestres. Les changements saisonniers, les lancements de nouveaux produits et les categories abandonnees justifient tous des mises a jour sur les pages qui recoivent l'equite de liens au niveau de la page d'accueil.",
        },
        {
          title: "Balise title, meta description et schema",
          content:
            "La balise title de la page d'accueil est le seul endroit ou commencer par votre nom de marque a du sens, car la plupart des recherches de page d'accueil sont des requetes de marque. La formule optimale est : Nom de Marque + Mot-Cle Principal + Differenciant.\n\nVotre meta description de page d'accueil devrait servir de mini-publicite pour l'ensemble de votre boutique. Incluez vos principales categories de produits, un signal de confiance et un appel a l'action.\n\nImplementez le schema Organization sur votre page d'accueil pour informer Google de votre entite commerciale. Incluez votre nom d'entreprise, logo, coordonnees, profils de reseaux sociaux et date de creation. Ce schema aide Google a connecter votre marque avec son Knowledge Graph.\n\nNe negligez pas le schema SiteNavigationElement pour votre menu principal. Bien que ce ne soit pas un facteur de classement direct, il aide les moteurs de recherche a comprendre la structure de votre site et peut influencer l'apparition des sitelinks sous votre page d'accueil dans les resultats de recherche.",
        },
        {
          title: "Erreurs courantes de SEO de page d'accueil",
          content:
            "L'erreur la plus frequente que nous voyons est la page d'accueil \"toutes images, pas de texte\". Une banniere hero plein ecran, une grille d'images de produits et rien d'autre. Google peut lire le texte alternatif des images, mais ce n'est pas un substitut au contenu textuel reel qui etablit la pertinence thematique.\n\nUne autre erreur courante est d'utiliser le H1 de la page d'accueil pour un message promotionnel saisonnier qui change chaque semaine. \"Soldes d'Ete - Jusqu'a 50% de Reduction\" ne dit rien a Google sur ce que vous vendez. Votre H1 devrait etre stable et descriptif.\n\nLes carrousels de diaporamas nuisent a la fois au SEO et a la conversion. Seul le contenu de la premiere diapositive recoit l'attention complete des utilisateurs, et le contenu rotatif cree un signal confus pour les moteurs de recherche.\n\nEnfin, beaucoup de boutiques commettent l'erreur de bourrer leur page d'accueil de liens vers des produits individuels au lieu de categories. Votre page d'accueil devrait lier vers des categories, qui ensuite lient vers des produits.",
          items: [
            "Assurer au moins 200-300 mots de contenu textuel visible sur la page d'accueil",
            "Garder le H1 stable et descriptif, ne pas le remplacer par des slogans promotionnels",
            "Remplacer les carrousels par une seule section hero statique",
            "Lier vers les categories depuis la page d'accueil, pas vers des centaines de produits individuels",
            "Eviter d'orpheliner des pages importantes en les excluant entierement de la navigation",
          ],
        },
      ],
      navLabels: {
        previous: "SEO des pages categories",
        next: "Balises title & meta descriptions",
      },
    },
    es: {
      badge: "SEO On-Page",
      heading: "SEO de pagina de inicio para ecommerce",
      intro:
        "Tu pagina de inicio es la pagina mas autoritativa de todo tu dominio. Recibe la mayor parte de los backlinks, lleva la mayor equidad de enlaces internos y establece el tono de como los motores de busqueda entienden tu tienda. Sin embargo, muchos sitios de ecommerce desperdician esta autoridad con banners hero llamativos sin contenido de texto, dejando a Google adivinando que venden realmente. Una pagina de inicio estrategicamente optimizada canaliza la autoridad hacia tus categorias mas importantes y establece tu tienda como la autoridad tematica en tu nicho.",
      readTime: "10 min de lectura",
      sections: [
        {
          title: "El rol de tu pagina de inicio en el SEO de ecommerce",
          content:
            "Tu pagina de inicio sirve un proposito SEO fundamentalmente diferente al de cualquier otra pagina de tu sitio. Mientras que las paginas de producto y categoria apuntan a palabras clave transaccionales especificas, la pagina de inicio apunta a tu nombre de marca y la descripcion mas amplia de lo que ofrece tu tienda. Una tienda que vende equipamiento outdoor deberia tener una pagina de inicio que comunique claramente \"vendemos equipamiento outdoor y de camping\" tanto a humanos como a rastreadores.\n\nLa pagina de inicio tambien actua como el hub principal de distribucion de equidad de enlaces en todo tu sitio. Los enlaces externos de cobertura de prensa, asociaciones y directorios casi siempre apuntan a la pagina de inicio. Cada enlace interno desde la pagina de inicio pasa una porcion de esa autoridad acumulada a la pagina enlazada.\n\nLas busquedas de marca a menudo activan la pagina de inicio como el resultado principal, y Google usa la pagina de inicio para construir su comprension del tema general de tu sitio. Si Google no puede descifrar que vendes desde tu pagina de inicio, tendra dificultades para posicionar tus paginas mas profundas para consultas relevantes.",
        },
        {
          title: "Estructura de contenido de pagina de inicio que funciona",
          content:
            "La pagina de inicio de ecommerce ideal sigue una jerarquia de contenido que sirve tanto a objetivos de SEO como de conversion. Comienza con un H1 claro que incluya tu frase de palabra clave principal, algo como \"Equipamiento Outdoor Premium y Material de Camping\" en lugar de un eslogan vago como \"La Aventura Te Espera.\"\n\nDebajo del H1 y el area hero, incluye un parrafo introductorio corto (100-200 palabras) que describa tu tienda, lo que vendes y por que los compradores deberian comprarte. Este parrafo le da a Google el contexto semantico necesario para categorizar tu sitio.\n\nPresenta tus categorias de nivel superior con tarjetas visuales y enlaces de texto. Cada bloque de categoria deberia incluir el nombre de la categoria como H2 o H3, una breve descripcion (2-3 oraciones) y un enlace a la pagina de la categoria.\n\nTermina la pagina de inicio con una seccion de contenido mas larga (200-400 palabras) que amplíe tu historia de marca, experiencia o propuesta de valor unica.",
          items: [
            "Usar un H1 descriptivo con tu palabra clave comercial principal, no solo tu nombre de marca",
            "Incluir un parrafo introductorio de 100-200 palabras describiendo tu tienda y gama de productos",
            "Presentar las categorias principales con nombres, descripciones y enlaces",
            "Agregar una seccion de marca y experiencia de 200-400 palabras debajo del pliegue",
          ],
        },
        {
          title: "Navegacion de la pagina de inicio y enlaces internos",
          content:
            "Tu menu de navegacion principal es posiblemente el elemento de enlaces internos mas poderoso de tu sitio porque aparece en cada pagina. Las categorias que incluyes en la navegacion principal reciben equidad de enlaces de cada pagina indexada de tu dominio. Eligelas cuidadosamente, tu navegacion superior deberia presentar tus categorias de mayor valor, no paginas utilitarias como \"Sobre Nosotros\" o \"Contacto.\"\n\nLimita tu navegacion principal a 7-10 elementos de nivel superior. Los mega menus con docenas de enlaces diluyen la equidad pasada a cada pagina enlazada y pueden abrumar tanto a usuarios como a motores de busqueda.\n\nLos enlaces internos especificos de la pagina de inicio, aquellos fuera de la navegacion principal, son donde puedes ser estrategico sobre dirigir autoridad. Enlaza a colecciones estacionales, novedades o categorias para las que estas tratando activamente de posicionarte.\n\nNo olvides los enlaces del pie de pagina. Aunque llevan menos peso que los enlaces de navegacion principal, los enlaces del footer son un buen lugar para tu lista completa de categorias y paginas de politicas importantes.",
          tip: "Revisa tus enlaces internos de la pagina de inicio trimestralmente. Los cambios estacionales, los lanzamientos de nuevos productos y las categorias descontinuadas justifican actualizaciones sobre que paginas reciben equidad de enlaces a nivel de pagina de inicio.",
        },
        {
          title: "Etiqueta de titulo, meta descripcion y schema",
          content:
            "La etiqueta de titulo de la pagina de inicio es el unico lugar donde liderar con tu nombre de marca tiene sentido, porque la mayoria de las busquedas de pagina de inicio son consultas de marca. La formula optima es: Nombre de Marca + Palabra Clave Principal + Diferenciador.\n\nTu meta descripcion de la pagina de inicio deberia servir como un mini-anuncio para toda tu tienda. Incluye tus principales categorias de productos, una senal de confianza y un llamado a la accion.\n\nImplementa el schema Organization en tu pagina de inicio para decirle a Google sobre tu entidad comercial. Incluye tu nombre de empresa, logo, informacion de contacto, perfiles de redes sociales y fecha de fundacion.\n\nNo pases por alto el schema SiteNavigationElement para tu menu principal. Aunque no es un factor de ranking directo, ayuda a los motores de busqueda a entender la estructura de tu sitio y puede influir en como aparecen los sitelinks debajo de tu pagina de inicio en los resultados de busqueda.",
        },
        {
          title: "Errores comunes de SEO de pagina de inicio",
          content:
            "El error mas frecuente que vemos es la pagina de inicio \"todas imagenes, sin texto\". Un banner hero de pantalla completa, una cuadricula de imagenes de productos y nada mas. Google puede leer el texto alternativo de las imagenes, pero no es sustituto del contenido de texto real que establece relevancia tematica.\n\nOtro error comun es usar el H1 de la pagina de inicio para un mensaje promocional estacional que cambia cada semana. \"Rebajas de Verano - Hasta 50% de Descuento\" no le dice nada a Google sobre lo que vendes. Tu H1 deberia ser estable y descriptivo.\n\nLos carruseles de diapositivas danan tanto el SEO como la conversion. Solo el contenido de la primera diapositiva recibe atencion completa de los usuarios, y el contenido rotativo crea una senal confusa para los motores de busqueda.\n\nFinalmente, muchas tiendas cometen el error de llenar su pagina de inicio con enlaces a productos individuales en lugar de categorias. Tu pagina de inicio deberia enlazar a categorias, que luego enlazan a productos.",
          items: [
            "Asegurar al menos 200-300 palabras de contenido de texto visible en la pagina de inicio",
            "Mantener el H1 estable y descriptivo, no cambiarlo por eslóganes promocionales",
            "Reemplazar los carruseles con una sola seccion hero estatica",
            "Enlazar a categorias desde la pagina de inicio, no a cientos de productos individuales",
            "Evitar huerfanar paginas importantes excluyendolas completamente de la navegacion",
          ],
        },
      ],
      navLabels: {
        previous: "SEO de paginas de categoria",
        next: "Etiquetas de titulo y meta descripciones",
      },
    },
    it: {
      badge: "SEO On-Page",
      heading: "SEO della homepage per ecommerce",
      intro:
        "La tua homepage e la singola pagina piu autorevole dell'intero dominio. Riceve la maggior parte dei backlink, porta la maggiore equita di link interni e stabilisce il tono su come i motori di ricerca comprendono il tuo negozio. Eppure molti siti ecommerce sprecano questa autorita con banner hero appariscenti senza contenuto testuale, lasciando Google a indovinare cosa vendono effettivamente. Una homepage strategicamente ottimizzata incanala l'autorita verso le tue categorie piu importanti e stabilisce il tuo negozio come autorita tematica nella tua nicchia.",
      readTime: "10 min di lettura",
      sections: [
        {
          title: "Il ruolo della tua homepage nella SEO ecommerce",
          content:
            "La tua homepage serve uno scopo SEO fondamentalmente diverso da qualsiasi altra pagina del tuo sito. Mentre le pagine prodotto e categoria puntano a parole chiave transazionali specifiche, la homepage punta al tuo nome di marchio e alla descrizione piu ampia di cio che il tuo negozio offre. Un negozio che vende attrezzatura outdoor dovrebbe avere una homepage che comunichi chiaramente \"vendiamo attrezzatura outdoor e da campeggio\" sia agli umani che ai crawler.\n\nLa homepage agisce anche come hub principale di distribuzione dell'equita di link su tutto il tuo sito. I link esterni da copertura stampa, partnership e directory puntano quasi sempre alla homepage. Ogni link interno dalla homepage trasmette una porzione di quell'autorita accumulata alla pagina collegata.\n\nLe ricerche di marchio spesso attivano la homepage come primo risultato, e Google usa la homepage per costruire la sua comprensione dell'argomento generale del tuo sito. Se Google non riesce a capire cosa vendi dalla tua homepage, avra difficolta a posizionare le tue pagine piu profonde per le query pertinenti.",
        },
        {
          title: "Struttura del contenuto della homepage che funziona",
          content:
            "La homepage ecommerce ideale segue una gerarchia di contenuto che serve sia gli obiettivi SEO che di conversione. Inizia con un H1 chiaro che includa la tua frase chiave principale, qualcosa come \"Attrezzatura Outdoor Premium e Materiale da Campeggio\" piuttosto che uno slogan vago come \"L'Avventura Ti Aspetta.\"\n\nSotto l'H1 e l'area hero, includi un breve paragrafo introduttivo (100-200 parole) che descriva il tuo negozio, cosa vendi e perche gli acquirenti dovrebbero comprare da te. Questo paragrafo da a Google il contesto semantico necessario per categorizzare il tuo sito.\n\nPresenta le tue categorie di primo livello con card visive e link testuali. Ogni blocco di categoria dovrebbe includere il nome della categoria come H2 o H3, una breve descrizione (2-3 frasi) e un link alla pagina della categoria.\n\nConcludi la homepage con una sezione di contenuto piu lunga (200-400 parole) che espanda la tua storia di marchio, competenza o proposta di valore unica.",
          items: [
            "Usare un H1 descrittivo con la tua parola chiave commerciale principale, non solo il nome del marchio",
            "Includere un paragrafo introduttivo di 100-200 parole che descriva il tuo negozio e la gamma di prodotti",
            "Presentare le categorie principali con nomi, descrizioni e link",
            "Aggiungere una sezione di marchio e competenza di 200-400 parole sotto la piega",
          ],
        },
        {
          title: "Navigazione della homepage e link interni",
          content:
            "Il tuo menu di navigazione principale e probabilmente l'elemento di link interni piu potente del tuo sito perche appare su ogni pagina. Le categorie che includi nella navigazione principale ricevono equita di link da ogni pagina indicizzata del tuo dominio. Sceglile con cura, la tua navigazione principale dovrebbe presentare le tue categorie di maggior valore, non pagine utilitarie come \"Chi Siamo\" o \"Contatti.\"\n\nLimita la tua navigazione principale a 7-10 elementi di primo livello. I mega menu con dozzine di link diluiscono l'equita passata a ogni pagina collegata e possono sopraffare sia gli utenti che i motori di ricerca.\n\nI link interni specifici della homepage, quelli fuori dalla navigazione principale, sono dove puoi essere strategico nel dirigere l'autorita. Collega a collezioni stagionali, novita o categorie per cui stai attivamente cercando di posizionarti.\n\nNon dimenticare i link del footer. Sebbene portino meno peso dei link della navigazione principale, i link del footer sono un buon posto per la tua lista completa di categorie e le pagine di politiche importanti.",
          tip: "Rivedi i tuoi link interni della homepage trimestralmente. I cambiamenti stagionali, i lanci di nuovi prodotti e le categorie discontinue giustificano tutti aggiornamenti su quali pagine ricevono l'equita di link a livello di homepage.",
        },
        {
          title: "Title tag, meta description e schema",
          content:
            "Il title tag della homepage e l'unico posto dove iniziare con il nome del tuo marchio ha senso, perche la maggior parte delle ricerche sulla homepage sono query di marca. La formula ottimale e: Nome Marchio + Parola Chiave Principale + Differenziatore.\n\nLa tua meta description della homepage dovrebbe servire come una mini-pubblicita per l'intero negozio. Includi le tue principali categorie di prodotti, un segnale di fiducia e un invito all'azione.\n\nImplementa lo schema Organization sulla tua homepage per comunicare a Google la tua entita aziendale. Includi il nome dell'azienda, logo, informazioni di contatto, profili social media e data di fondazione.\n\nNon trascurare lo schema SiteNavigationElement per il tuo menu principale. Sebbene non sia un fattore di ranking diretto, aiuta i motori di ricerca a comprendere la struttura del tuo sito e puo influenzare come appaiono i sitelink sotto la tua homepage nei risultati di ricerca.",
        },
        {
          title: "Errori comuni di SEO della homepage",
          content:
            "L'errore piu frequente che vediamo e la homepage \"tutte immagini, nessun testo\". Un banner hero a schermo intero, una griglia di immagini prodotto e nient'altro. Google puo leggere il testo alternativo sulle immagini, ma non e un sostituto del contenuto testuale reale che stabilisce la pertinenza tematica.\n\nUn altro errore comune e usare l'H1 della homepage per un messaggio promozionale stagionale che cambia ogni settimana. \"Saldi Estivi - Fino al 50% di Sconto\" non dice nulla a Google su cosa vendi. Il tuo H1 dovrebbe essere stabile e descrittivo.\n\nI caroselli di slider danneggiano sia la SEO che la conversione. Solo il contenuto della prima slide riceve l'attenzione completa degli utenti, e il contenuto rotante crea un segnale confuso per i motori di ricerca.\n\nInfine, molti negozi commettono l'errore di riempire la loro homepage con link a prodotti individuali invece che a categorie. La tua homepage dovrebbe linkare a categorie, che poi linkano a prodotti.",
          items: [
            "Assicurare almeno 200-300 parole di contenuto testuale visibile sulla homepage",
            "Mantenere l'H1 stabile e descrittivo, non sostituirlo con slogan promozionali",
            "Sostituire i caroselli slider con una singola sezione hero statica",
            "Linkare alle categorie dalla homepage, non a centinaia di prodotti individuali",
            "Evitare di rendere orfane pagine importanti escludendole completamente dalla navigazione",
          ],
        },
      ],
      navLabels: {
        previous: "SEO delle pagine categoria",
        next: "Title tag e meta description",
      },
    },
    nl: {
      badge: "On-Page SEO",
      heading: "Homepage SEO voor ecommerce",
      intro:
        "Je homepage is de meest gezaghebbende pagina van je hele domein. Het ontvangt het leeuwendeel van de backlinks, draagt de meeste interne linkwaarde en zet de toon voor hoe zoekmachines je winkel begrijpen. Toch verspillen veel ecommercesites deze autoriteit aan flitsende herobanners zonder tekstinhoud, waardoor Google moet gissen wat ze eigenlijk verkopen. Een strategisch geoptimaliseerde homepage kanaliseert autoriteit naar je belangrijkste categorieen en vestigt je winkel als de thematische autoriteit in je niche.",
      readTime: "10 min leestijd",
      sections: [
        {
          title: "De rol van je homepage in ecommerce SEO",
          content:
            "Je homepage dient een fundamenteel ander SEO-doel dan elke andere pagina op je site. Terwijl product- en categoriepagina's specifieke transactionele zoekwoorden targeten, richt de homepage zich op je merknaam en de breedste beschrijving van wat je winkel biedt. Een shop die outdooruitrusting verkoopt, zou een homepage moeten hebben die duidelijk communiceert \"wij verkopen outdoor- en campinguitrusting\" aan zowel mensen als crawlers.\n\nDe homepage fungeert ook als de primaire distributiehub voor linkwaarde over je hele site. Externe links uit persberichten, partnerschappen en directories wijzen bijna altijd naar de homepage. Elke interne link vanaf de homepage geeft een deel van die opgebouwde autoriteit door aan de gelinkte pagina.\n\nMerkzoekopdrachten triggeren vaak de homepage als topresultaat, en Google gebruikt de homepage om zijn begrip van het algehele onderwerp van je site op te bouwen. Als Google niet kan achterhalen wat je verkoopt vanaf je homepage, zal het moeite hebben om je diepere pagina's te ranken voor relevante zoekopdrachten.",
        },
        {
          title: "Homepage-contentstructuur die werkt",
          content:
            "De ideale ecommerce-homepage volgt een contenthierarchie die zowel SEO- als conversiedoelen dient. Begin met een duidelijke H1 die je primaire zoekwoordfrase bevat, iets als \"Premium Outdooruitrusting & Campingmateriaal\" in plaats van een vage tagline zoals \"Avontuur Wacht.\"\n\nOnder de H1 en het herogebied neem je een kort inleidend alinea (100-200 woorden) op dat je winkel beschrijft, wat je verkoopt en waarom kopers bij jou moeten kopen. Dit alinea geeft Google de semantische context die het nodig heeft om je site te categoriseren.\n\nToon je topcategorieen met zowel visuele kaarten als tekstlinks. Elk categorieblok zou de categorienaam als H2 of H3 moeten bevatten, een korte beschrijving (2-3 zinnen) en een link naar de categoriepagina.\n\nSluit de homepage af met een langere contentsectie (200-400 woorden) die je merkverhaal, expertise of unieke waardepropositie uitbreidt.",
          items: [
            "Een beschrijvende H1 met je primaire commerciele zoekwoord gebruiken, niet alleen je merknaam",
            "Een inleidend alinea van 100-200 woorden opnemen dat je winkel en productassortiment beschrijft",
            "Topcategorieen tonen met namen, beschrijvingen en links",
            "Een merk- en expertisesectie van 200-400 woorden onder de vouw toevoegen",
          ],
        },
        {
          title: "Homepagenavigatie en interne links",
          content:
            "Je hoofdnavigatiemenu is misschien wel het krachtigste interne linkelement op je site omdat het op elke pagina verschijnt. De categorieen die je opneemt in de hoofdnavigatie ontvangen linkwaarde van elke geindexeerde pagina op je domein. Kies deze zorgvuldig, je topnavigatie zou je meest waardevolle categorieen moeten tonen, niet hulppagina's zoals \"Over ons\" of \"Contact.\"\n\nBeperk je hoofdnavigatie tot 7-10 items op het hoogste niveau. Megamenu's met tientallen links verdunnen de waarde die aan elke gelinkte pagina wordt doorgegeven en kunnen zowel gebruikers als zoekmachines overweldigen.\n\nHomepage-specifieke interne links, buiten de hoofdnavigatie, zijn waar je strategisch kunt zijn over het sturen van autoriteit. Link naar seizoenscollecties, nieuw binnengekomen producten of categorieen waarvoor je actief probeert te ranken.\n\nVergeet niet de footerlinks. Hoewel ze minder gewicht dragen dan hoofdnavigatielinks, zijn footerlinks een goede plek voor je volledige categorielijst en belangrijke beleidspagina's.",
          tip: "Bekijk je homepage interne links elk kwartaal. Seizoensverschuivingen, nieuwe productlanceringen en stopgezette categorieen rechtvaardigen allemaal updates over welke pagina's linkwaarde op homepage-niveau ontvangen.",
        },
        {
          title: "Title tag, meta-omschrijving en schema",
          content:
            "De homepage title tag is de enige plek waar beginnen met je merknaam zinvol is, omdat de meeste homepage-zoekopdrachten merkzoekopdrachten zijn. De optimale formule is: Merknaam + Primair Zoekwoord + Onderscheidend Kenmerk.\n\nJe homepage meta-omschrijving zou moeten dienen als een mini-advertentie voor je hele winkel. Neem je belangrijkste productcategorieen, een vertrouwenssignaal en een call-to-action op.\n\nImplementeer Organization schema op je homepage om Google over je bedrijfsentiteit te vertellen. Neem je bedrijfsnaam, logo, contactgegevens, social media profielen en oprichtingsdatum op.\n\nMis het SiteNavigationElement schema voor je hoofdmenu niet. Hoewel het geen directe rankingfactor is, helpt het zoekmachines je sitestructuur te begrijpen en kan het beinvloeden hoe sitelinks verschijnen onder je homepage in zoekresultaten.",
        },
        {
          title: "Veelvoorkomende homepage SEO-fouten",
          content:
            "De meest voorkomende fout die we zien is de \"alleen afbeeldingen, geen tekst\" homepage. Een volledig scherm herobanner, een raster van productafbeeldingen en verder niets. Google kan alt-tekst op afbeeldingen lezen, maar het is geen vervanging voor daadwerkelijke paragraafcontent die thematische relevantie vestigt.\n\nEen andere veelgemaakte fout is de homepage H1 gebruiken voor een seizoensgebonden promotieboodschap die elke week verandert. \"Zomeropruiming - Tot 50% Korting\" vertelt Google niets over wat je verkoopt. Je H1 zou stabiel en beschrijvend moeten zijn.\n\nSlidercarrousels schaden zowel SEO als conversie. Alleen de content van de eerste slide krijgt volledige aandacht van gebruikers, en de roterende content creëert een verwarrend signaal voor zoekmachines.\n\nTen slotte maken veel winkels de fout hun homepage vol te stoppen met links naar individuele producten in plaats van categorieen. Je homepage zou naar categorieen moeten linken, die vervolgens naar producten linken.",
          items: [
            "Minimaal 200-300 woorden zichtbare tekstcontent op de homepage waarborgen",
            "De H1 stabiel en beschrijvend houden, niet verwisselen voor promotionele slogans",
            "Carrouselsliders vervangen door een enkele statische herosectie",
            "Linken naar categorieen vanaf de homepage, niet naar honderden individuele producten",
            "Belangrijke pagina's niet verweesd laten door ze volledig uit de navigatie te sluiten",
          ],
        },
      ],
      navLabels: {
        previous: "Categoriepagina SEO",
        next: "Title tags & meta-omschrijvingen",
      },
    },
  },
};
