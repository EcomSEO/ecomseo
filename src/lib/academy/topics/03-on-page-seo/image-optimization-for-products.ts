import type { AcademyTopic } from "../../types";

export const imageOptimizationForProducts: AcademyTopic = {
  slug: "image-optimization-for-products",
  cluster: 3,
  resources: [{"label":"Google Image SEO Best Practices","url":"https://developers.google.com/search/docs/appearance/google-images","type":"docs"},{"label":"Squoosh Image Compressor","url":"https://squoosh.app/","type":"tool"},{"label":"TinyPNG","url":"https://tinypng.com/","type":"tool"},{"label":"Google PageSpeed Insights","url":"https://pagespeed.web.dev/","type":"tool"}],
  content: {
    en: {
      badge: "On-Page SEO",
      heading: "Image Optimization for Products",
      intro:
        "Product images are the bridge between browsing and buying in ecommerce. They also represent one of the largest untapped SEO opportunities for most online stores. Google Images drives 10-25% of organic traffic for visually-driven product categories like fashion, home decor, and electronics. Beyond image search traffic, poorly optimized images are the number one cause of slow page load times, which directly hurt both rankings and conversion rates. Addressing images is a key part of [site speed optimization](/academy/site-speed-optimization). A comprehensive image optimization strategy addresses file formats, compression, alt text, file naming, lazy loading, and responsive sizing to deliver fast pages and maximum search visibility.",
      readTime: "9 min read",
      sections: [
        {
          title: "Why Image Optimization Matters for Ecommerce SEO",
          content:
            "Images account for the majority of page weight on most ecommerce sites. A single product page with six high-resolution photographs can easily weigh 10-15 MB without optimization, resulting in load times of five seconds or more on mobile connections. Google's Core Web Vitals, particularly Largest Contentful Paint (LCP), are directly impacted by image file sizes, and pages that fail Core Web Vitals thresholds face ranking disadvantages in search results.\n\nBeyond page speed, product images create direct search traffic opportunities through Google Images. When a shopper searches for \"mid-century modern coffee table\" in Google Images and your product photo appears with an optimized alt tag and descriptive file name, they click directly to your product page. This image search traffic often converts at rates comparable to regular organic traffic because the shopper has already seen the product visually and chosen to click through.\n\nImage optimization also improves your product listings in Google Shopping and visual search results. Google Lens and similar visual search tools are growing rapidly, and products with properly optimized images are more likely to appear in these results. As visual search becomes a mainstream shopping behavior, stores with optimized product imagery will capture traffic that competitors with poorly named, uncompressed images simply cannot access.\n\nThe compound effect of image optimization across a large catalog is substantial. Reducing average image size by 60% across 5,000 product pages improves every page's load speed, which lifts rankings site-wide, reduces bounce rates, and increases the probability that Google can crawl your full catalog within its crawl budget. This is one of the highest-impact [on-page SEO](/blog/on-page-seo-for-ecommerce) improvements you can make.",
          items: [
            "Images typically account for 60-80% of total page weight on ecommerce product pages",
            "Google Images drives 10-25% of organic traffic for visually-driven product categories",
            "Core Web Vitals, especially LCP, are directly impacted by unoptimized product images",
            "Visual search via Google Lens is growing and favors properly optimized product imagery",
          ],
        },
        {
          title: "File Formats and Compression Techniques",
          content:
            "Choosing the right image format is the foundation of image optimization. For product photography, three formats dominate: JPEG, PNG, and WebP. JPEG is the traditional choice for photographs with complex color gradients, it produces small file sizes with acceptable quality loss. PNG is better for images requiring transparency, such as product shots on transparent backgrounds. WebP, developed by Google, delivers 25-35% smaller file sizes than JPEG at equivalent visual quality and supports both lossy and lossless compression.\n\nModern ecommerce sites should serve WebP images as the primary format, with JPEG fallbacks for older browsers that do not support WebP. The HTML picture element or server-side content negotiation can serve WebP to compatible browsers and JPEG to others automatically. AVIF is an even newer format that achieves 20% better compression than WebP, but browser support is still catching up. Consider adopting AVIF for progressive enhancement once your platform and CDN support it.\n\nCompression settings matter as much as format choice. A JPEG saved at 100% quality is far larger than necessary, most product images look identical to the human eye at 75-85% quality but are 40-60% smaller in file size. Tools like ShortPixel, TinyPNG, Squoosh, and ImageOptim can batch-compress images before upload. For automated compression at scale, integrate image optimization into your build pipeline or use a CDN that applies compression on the fly, such as Cloudflare Polish, Cloudinary, or Imgix.\n\nDo not compress images multiple times. Each round of lossy compression degrades quality further while providing diminishing size reductions. Start with the highest quality original, compress once to your target quality level, and store the original separately in case you need to reprocess later.",
          items: [
            "Serve WebP as the primary format with JPEG fallbacks for maximum compression and compatibility",
            "Compress JPEGs to 75-85% quality, visually identical to 100% but 40-60% smaller in file size",
            "Use automated compression tools or CDN-based optimization for large product catalogs",
            "Never compress an already-compressed image, always start from the original high-quality file",
          ],
          image: {
            src: "/images/academy/image-format-comparison.svg",
            alt: "Comparison table showing file size savings across JPEG, WebP, and AVIF formats for product photography",
            caption: "Switching from JPEG 100% to WebP saves 73% file size. For a product page with 6 images, that is 10+ MB less page weight.",
          },
          callout: {
            title: "Format Impact",
            text: "WebP delivers 25-35% smaller files than JPEG at equivalent visual quality and has 97% browser support. A 6-image product page drops from 14.4 MB to 3.9 MB, cutting load time from 5+ seconds to under 2 seconds on mobile.",
          },
          tip: "Set up automatic WebP conversion in your image pipeline. Most CDNs like Cloudinary, Cloudflare, and Imgix can serve WebP to supported browsers automatically without changing any image URLs in your HTML. This single change can reduce total image payload by 25-35% across your entire site.",
        },
        {
          title: "Alt Text Best Practices for Product Images",
          content:
            "Alt text (alternative text) serves two critical purposes: it describes images for visually impaired users relying on screen readers, and it provides keyword context that search engines use for image ranking. Every product image on your site needs unique, descriptive alt text that accurately describes what the image shows.\n\nFor the primary product image on your [product page](/academy/product-page-seo), write alt text that includes the product name and a key visual detail. \"Women's red leather crossbody bag with gold chain strap - front view\" is far more useful than \"bag\" or \"product image.\" The alt text should read naturally as a description, not as a keyword-stuffed phrase. \"Buy best red leather bag women's crossbody bag sale cheap\" is spammy alt text that hurts rather than helps.\n\nProduct pages with multiple images should have varied alt text for each photo. The front view, back view, detail shots, and lifestyle images each show something different, and the alt text should reflect those differences. \"Women's red leather crossbody bag - interior compartments and zipper\" describes a different view than \"Woman carrying red crossbody bag at outdoor market - lifestyle shot.\" This variation creates multiple ranking opportunities in Google Images for different search queries.\n\nFor variant-specific images, different colors, sizes, or configurations, include the variant attribute in the alt text. \"Men's hiking boot in forest green, size 10\" is more useful than a generic \"hiking boot\" for both SEO and accessibility. Shoppers searching for specific color or size variations in Google Images will find your product when the alt text matches their query.\n\nAvoid leaving alt text empty on any product image. Empty alt attributes tell screen readers to skip the image entirely, which is appropriate for decorative images but never appropriate for product photos that convey essential shopping information. Equally, avoid using the same alt text for every image on a product page, each image deserves its own description.",
          items: [
            "Write alt text that naturally includes the product name and key visual descriptors",
            "Vary alt text across multiple product images to capture different search queries",
            "Include variant-specific attributes like color, size, or material in alt text",
            "Never leave product image alt text empty or duplicate it across all images on a page",
          ],
        },
        {
          title: "File Naming and Image URLs",
          content:
            "Image file names are a ranking signal for Google Images that most ecommerce stores completely ignore. The default camera file name \"DSC_4821.jpg\" tells search engines nothing about the image content. Renaming that file to \"women-red-leather-crossbody-bag-front.jpg\" before uploading gives Google an additional signal about what the image depicts, improving its chances of appearing in relevant image search results.\n\nUse hyphens to separate words in file names, not shows or spaces. Google treats hyphens as word separators, so \"blue-running-shoes.jpg\" is interpreted as three separate words. Underscores are treated as word joiners, so \"blue_running_shoes.jpg\" is read as one compound term. Spaces in file names get converted to \"%20\" in URLs, which looks messy and can cause technical issues.\n\nKeep file names descriptive but concise. Include the product name, a key attribute like color or material, and the view type (front, back, detail, lifestyle). Avoid stuffing file names with excessive keywords, \"best-buy-cheap-blue-running-shoes-sale-discount-2024.jpg\" is over-optimized and looks spammy. Aim for three to six descriptive words that a human would use to describe the image.\n\nFor stores with large catalogs, automate file naming using a consistent pattern. Build a naming convention like: {product-name}-{color}-{view}.{format} and apply it programmatically when images are processed for upload. Consistent naming patterns make your images easier to manage, easier for search engines to understand, and easier to audit for optimization issues.\n\nImage URLs should also be clean and descriptive. Avoid URL structures that place images behind randomized hash strings like \"/images/a7f3b2e1.jpg\", these provide no context to search engines. Instead, use URL paths that reflect the product hierarchy: \"/images/products/bags/crossbody/red-leather-crossbody-bag-front.webp\" gives Google clear category and product signals within the URL itself.",
          tip: "Create a file naming template spreadsheet for your product photography team. Include columns for product name, color, material, and view type, with a formula that generates the standardized file name. Distribute this to your photographers or product content team so images arrive pre-named and ready for upload.",
        },
        {
          title: "Responsive Images and Lazy Loading",
          content:
            "Modern ecommerce sites must serve appropriately sized images for every device and screen size. A 3000x3000 pixel hero image designed for a desktop retina display wastes bandwidth when loaded on a mobile phone with a 375-pixel-wide screen. The srcset attribute in HTML lets you specify multiple image sizes, and the browser automatically selects the most appropriate one based on the device's screen width and pixel density.\n\nImplement srcset with at least three size breakpoints for product images: a small version for mobile (around 400px wide), a medium version for tablets (around 800px wide), and a large version for desktop (around 1200px wide). For product detail pages where users can zoom into images, provide an additional extra-large version (2000-3000px) that loads only when the zoom function is activated, not on initial page load.\n\nLazy loading defers the loading of off-screen images until the user scrolls near them. For product pages with multiple images below the fold, lazy loading can reduce initial page weight by 50% or more. Implement lazy loading using the native loading=\"lazy\" attribute on img tags, which is supported by all modern browsers. For more sophisticated control, use the Intersection Observer API to trigger image loading when images enter a defined viewport margin.\n\nDo not lazy load the primary product image or the LCP (Largest Contentful Paint) element. The main product image visible when the page first loads should be eagerly loaded with fetchpriority=\"high\" to ensure it appears as quickly as possible. Lazy loading the hero image would delay LCP and hurt your Core Web Vitals score. Only lazy load images that are below the fold or in secondary sections like related products and customer reviews.\n\nUse width and height attributes on all img tags to prevent Cumulative Layout Shift (CLS). When a browser knows the dimensions of an image before it loads, it can reserve the correct amount of space, preventing the page content from jumping around as images load. This is particularly important on product listing pages where dozens of product images load in a grid layout.",
          items: [
            "Serve multiple image sizes using srcset to match device screen widths and avoid wasted bandwidth",
            "Lazy load all below-the-fold images using loading='lazy' to reduce initial page weight",
            "Eagerly load the primary product image with fetchpriority='high' to optimize LCP",
            "Always include width and height attributes on img tags to prevent layout shift (CLS)",
          ],
          callout: {
            title: "LCP Priority Rule",
            text: "Never lazy-load the primary product image. Use fetchpriority='high' on the main visible image and loading='lazy' only on below-the-fold images. Lazy-loading the hero image delays Largest Contentful Paint and hurts Core Web Vitals.",
          },
        },
        {
          title: "Image SEO for Product Listing Pages and Sitemaps",
          content:
            "Product listing pages (category pages) display dozens of product thumbnails in a grid. Each thumbnail is a ranking opportunity in Google Images, but only if the images are properly optimized. Ensure that every product thumbnail in your grid has a unique alt text that includes the product name, do not use the same generic alt text like \"product thumbnail\" across all items.\n\nThumbnail sizing on category pages should be consistent and appropriately compressed. There is no need to load full-size product images in a grid where they are displayed at 200x200 or 300x300 pixels. Generate dedicated thumbnail versions at the exact display size and serve those instead. This alone can reduce category page weight by 70-80%, dramatically improving load times for pages that often contain 20-40 product images.\n\nCreate an image sitemap or include image tags within your existing XML sitemap. An image sitemap tells Google about all the images on your site and provides metadata like captions and license information. For ecommerce sites, the image sitemap should include every product image with its associated alt text and the product page URL. Most major ecommerce platforms can generate image sitemaps automatically through plugins or built-in features, but verify that your sitemap includes all product images and not just the primary photo for each product.\n\nMonitor your image search performance in Google Search Console. The Performance report can be filtered to show only Google Images traffic, giving you insights into which product images receive the most impressions and clicks. Use this data to identify opportunities, products with high image impressions but low clicks may need more compelling product photography, while products with zero image impressions may have missing or poorly optimized alt text and file names.\n\nConsider implementing structured data for product images. The Product schema supports the \"image\" property, which tells Google which images are associated with the product. Providing multiple image URLs in the schema helps Google display your product images in rich results, knowledge panels, and Google Shopping listings.",
          tip: "Run a quarterly image SEO audit: crawl your site to identify product images with missing alt text, oversized file sizes, default camera file names, and missing srcset attributes. Prioritize fixing images on your top 100 product and category pages by traffic volume for the fastest SEO impact.",
        },
      ],
      navLabels: {
        previous: "Previous",
        next: "Next",
      },
    },
    de: {
      badge: "On-Page SEO",
      heading: "Bildoptimierung fuer Produkte",
      intro:
        "Produktbilder sind die Bruecke zwischen Stoebern und Kaufen im E-Commerce. Sie repraesentieren auch eine der groessten ungenutzten SEO-Moeglichkeiten fuer die meisten Online-Shops. Google Bilder treibt 10-25% des organischen Traffics fuer visuell geprägte Produktkategorien wie Mode, Wohneinrichtung und Elektronik. Ueber den Bildsuch-Traffic hinaus sind schlecht optimierte Bilder die Hauptursache fuer langsame Ladezeiten, die sowohl Rankings als auch Konversionsraten direkt beeintraechtigen. Eine umfassende Bildoptimierungsstrategie behandelt Dateiformate, Komprimierung, Alt-Text, Dateibenennung, Lazy Loading und responsive Groessenanpassung. Weitere Informationen finden Sie in unserem Leitfaden zu [Seitenladezeit-Optimierung](/academy/site-speed-optimization).",
      readTime: "9 Min. Lesezeit",
      sections: [
        {
          title: "Warum Bildoptimierung fuer E-Commerce-SEO wichtig ist",
          content:
            "Bilder machen den Grossteil des Seitengewichts auf den meisten E-Commerce-Seiten aus. Eine einzelne Produktseite mit sechs hochaufloesenden Fotos kann ohne Optimierung leicht 10-15 MB wiegen, was zu Ladezeiten von fuenf Sekunden oder mehr auf mobilen Verbindungen fuehrt. Googles Core Web Vitals, insbesondere Largest Contentful Paint (LCP), werden direkt von Bilddateigroessen beeinflusst, und Seiten, die Core Web Vitals-Schwellenwerte verfehlen, haben Ranking-Nachteile in Suchergebnissen.\n\nUeber die Seitengeschwindigkeit hinaus schaffen Produktbilder direkte Suchverkehr-Moeglichkeiten ueber Google Bilder. Wenn ein Kaeufer in Google Bilder nach \"Couchtisch im Mid-Century-Modern-Stil\" sucht und Ihr Produktfoto mit optimiertem Alt-Tag und beschreibendem Dateinamen erscheint, klickt er direkt zu Ihrer Produktseite. Dieser Bildsuch-Traffic konvertiert oft mit Raten, die regulaerem organischem Traffic vergleichbar sind.\n\nBildoptimierung verbessert auch Ihre Produktlistings in Google Shopping und visuellen Suchergebnissen. Google Lens und aehnliche visuelle Suchtools wachsen rasant, und Produkte mit korrekt optimierten Bildern erscheinen eher in diesen Ergebnissen.\n\nDer kumulative Effekt der Bildoptimierung ueber einen grossen Katalog ist erheblich. Die Reduzierung der durchschnittlichen Bildgroesse um 60% ueber 5.000 Produktseiten verbessert die Ladegeschwindigkeit jeder Seite, was Rankings seitenweit hebt, Absprungraten reduziert und die Wahrscheinlichkeit erhoeht, dass Google Ihren vollstaendigen Katalog innerhalb seines Crawl-Budgets crawlen kann. Dies ist eine der wirkungsvollsten [On-Page-SEO](/blog/on-page-seo-for-ecommerce)-Verbesserungen, die Sie vornehmen k\u00f6nnen.",
          items: [
            "Bilder machen typischerweise 60-80% des gesamten Seitengewichts auf E-Commerce-Produktseiten aus",
            "Google Bilder treibt 10-25% des organischen Traffics fuer visuell getriebene Produktkategorien",
            "Core Web Vitals, insbesondere LCP, werden direkt von nicht optimierten Produktbildern beeinflusst",
            "Visuelle Suche ueber Google Lens waechst und bevorzugt korrekt optimierte Produktbilder",
          ],
        },
        {
          title: "Dateiformate und Komprimierungstechniken",
          content:
            "Die Wahl des richtigen Bildformats ist die Grundlage der Bildoptimierung. Fuer Produktfotografie dominieren drei Formate: JPEG, PNG und WebP. JPEG ist die traditionelle Wahl fuer Fotografien mit komplexen Farbverlaeufen, es produziert kleine Dateigroessen mit akzeptablem Qualitaetsverlust. PNG ist besser fuer Bilder, die Transparenz erfordern. WebP, von Google entwickelt, liefert 25-35% kleinere Dateigroessen als JPEG bei vergleichbarer visueller Qualitaet.\n\nModerne E-Commerce-Seiten sollten WebP-Bilder als primaeres Format ausliefern, mit JPEG-Fallbacks fuer aeltere Browser. Das HTML-Picture-Element oder serverseitige Content-Verhandlung kann WebP an kompatible Browser und JPEG an andere automatisch ausliefern. AVIF ist ein noch neueres Format, das 20% bessere Komprimierung als WebP erreicht, aber die Browser-Unterstuetzung holt noch auf.\n\nKomprimierungseinstellungen sind genauso wichtig wie die Formatwahl. Ein JPEG, das mit 100% Qualitaet gespeichert wird, ist weit groesser als noetig, die meisten Produktbilder sehen fuer das menschliche Auge bei 75-85% Qualitaet identisch aus, sind aber 40-60% kleiner in der Dateigroesse. Tools wie ShortPixel, TinyPNG, Squoosh und ImageOptim koennen Bilder vor dem Upload im Stapelverfahren komprimieren.\n\nKomprimieren Sie Bilder nicht mehrfach. Jede Runde verlustbehafteter Komprimierung verschlechtert die Qualitaet weiter bei abnehmendem Groessennutzen. Starten Sie mit dem hoechstqualitativen Original, komprimieren Sie einmal auf Ihr Ziel-Qualitaetsniveau und bewahren Sie das Original separat auf.",
          items: [
            "Liefern Sie WebP als primaeres Format mit JPEG-Fallbacks fuer maximale Komprimierung und Kompatibilitaet",
            "Komprimieren Sie JPEGs auf 75-85% Qualitaet, visuell identisch mit 100%, aber 40-60% kleiner",
            "Nutzen Sie automatisierte Komprimierungstools oder CDN-basierte Optimierung fuer grosse Produktkataloge",
            "Komprimieren Sie nie ein bereits komprimiertes Bild, starten Sie immer vom hoechstqualitativen Original",
          ],
          image: {
            src: "/images/academy/de/image-format-comparison.svg",
            alt: "Vergleichstabelle der Dateigrößeneinsparungen bei JPEG, WebP und AVIF für Produktfotografie",
            caption: "Der Wechsel von JPEG 100% zu WebP spart 73% Dateigröße. Bei einer Produktseite mit 6 Bildern sind das über 10 MB weniger Seitengewicht.",
          },
          callout: {
            title: "Format-Wirkung",
            text: "WebP liefert 25-35% kleinere Dateien als JPEG bei gleichwertiger visueller Qualität und hat 97% Browser-Unterstützung. Eine 6-Bilder-Produktseite sinkt von 14,4 MB auf 3,9 MB und verkürzt die Ladezeit von über 5 Sekunden auf unter 2 Sekunden auf Mobilgeräten.",
          },
          tip: "Richten Sie automatische WebP-Konvertierung in Ihrer Bild-Pipeline ein. Die meisten CDNs wie Cloudinary, Cloudflare und Imgix koennen WebP an unterstuetzte Browser automatisch ausliefern, ohne Bild-URLs in Ihrem HTML zu aendern. Diese einzelne Aenderung kann die gesamte Bild-Payload um 25-35% ueber Ihre gesamte Website reduzieren.",
        },
        {
          title: "Alt-Text Best Practices fuer Produktbilder",
          content:
            "Alt-Text (alternativer Text) erfuellt zwei kritische Zwecke: Er beschreibt Bilder fuer sehbehinderte Nutzer, die auf Screenreader angewiesen sind, und er liefert Keyword-Kontext, den Suchmaschinen fuer das Bild-Ranking verwenden. Jedes Produktbild auf Ihrer Website braucht einzigartigen, beschreibenden Alt-Text, der genau beschreibt, was das Bild zeigt.\n\nFuer das Hauptproduktbild schreiben Sie Alt-Text, der den Produktnamen und ein wichtiges visuelles Detail enthaelt. \"Damen Rote Leder-Umhaengetasche mit goldener Kettenschlaufe - Vorderansicht\" ist weitaus nuetzlicher als \"Tasche\" oder \"Produktbild.\" Der Alt-Text sollte sich natuerlich als Beschreibung lesen, nicht als keyword-gestopfte Phrase. Weitere Informationen finden Sie in unserem Leitfaden zu [Produktseite](/academy/product-page-seo).\n\nProduktseiten mit mehreren Bildern sollten fuer jedes Foto unterschiedlichen Alt-Text haben. Die Vorderansicht, Rueckansicht, Detailaufnahmen und Lifestyle-Bilder zeigen jeweils etwas anderes, und der Alt-Text sollte diese Unterschiede widerspiegeln. Diese Variation schafft mehrere Ranking-Moeglichkeiten in Google Bilder fuer verschiedene Suchanfragen.\n\nFuer variantenspezifische Bilder, verschiedene Farben, Groessen oder Konfigurationen, nehmen Sie das Variantenattribut in den Alt-Text auf. \"Herren Wanderstiefel in Waldgruen, Groesse 44\" ist nuetzlicher als ein generisches \"Wanderstiefel\" fuer sowohl SEO als auch Barrierefreiheit.\n\nVermeiden Sie es, Alt-Text bei Produktbildern leer zu lassen. Leere Alt-Attribute sagen Screenreadern, das Bild gaenzlich zu ueberspringen, was fuer dekorative Bilder angemessen, aber fuer Produktfotos nie angemessen ist.",
          items: [
            "Schreiben Sie Alt-Text, der natuerlich den Produktnamen und wichtige visuelle Beschreibungen enthaelt",
            "Variieren Sie den Alt-Text ueber mehrere Produktbilder, um verschiedene Suchanfragen abzudecken",
            "Fuegen Sie variantenspezifische Attribute wie Farbe, Groesse oder Material in den Alt-Text ein",
            "Lassen Sie den Alt-Text von Produktbildern nie leer und duplizieren Sie ihn nicht ueber alle Bilder einer Seite",
          ],
        },
        {
          title: "Dateibenennung und Bild-URLs",
          content:
            "Bilddateinamen sind ein Ranking-Signal fuer Google Bilder, das die meisten E-Commerce-Shops komplett ignorieren. Der Standard-Kamera-Dateiname \"DSC_4821.jpg\" sagt Suchmaschinen nichts ueber den Bildinhalt. Die Umbenennung in \"damen-rote-leder-umhaengetasche-vorne.jpg\" vor dem Upload gibt Google ein zusaetzliches Signal.\n\nVerwenden Sie Bindestriche zur Worttrennung in Dateinamen, keine Unterstriche oder Leerzeichen. Google behandelt Bindestriche als Worttrenner, sodass \"blaue-laufschuhe.jpg\" als zwei separate Woerter interpretiert wird. Unterstriche werden als Wortverbinder behandelt. Leerzeichen werden in URLs zu \"%20\" konvertiert.\n\nHalten Sie Dateinamen beschreibend, aber praegnant. Fuegen Sie den Produktnamen, ein Schluesselattribut wie Farbe oder Material und den Ansichtstyp ein. Vermeiden Sie das Vollstopfen von Dateinamen mit uebermässigen Keywords. Streben Sie drei bis sechs beschreibende Woerter an.\n\nFuer Shops mit grossen Katalogen automatisieren Sie die Dateibenennung mit einem konsistenten Muster. Bauen Sie eine Benennungskonvention wie: {produktname}-{farbe}-{ansicht}.{format} und wenden Sie sie programmatisch an.\n\nBild-URLs sollten ebenfalls sauber und beschreibend sein. Vermeiden Sie URL-Strukturen mit zufaelligen Hash-Strings wie \"/images/a7f3b2e1.jpg.\" Verwenden Sie stattdessen URL-Pfade, die die Produkthierarchie widerspiegeln.",
          tip: "Erstellen Sie eine Dateibenennungs-Vorlage fuer Ihr Produktfotografie-Team. Fuegen Sie Spalten fuer Produktname, Farbe, Material und Ansichtstyp ein, mit einer Formel, die den standardisierten Dateinamen generiert.",
        },
        {
          title: "Responsive Bilder und Lazy Loading",
          content:
            "Moderne E-Commerce-Seiten muessen angemessen dimensionierte Bilder fuer jedes Geraet und jede Bildschirmgroesse ausliefern. Ein 3000x3000 Pixel Hero-Bild fuer ein Desktop-Retina-Display verschwendet Bandbreite auf einem Mobiltelefon mit 375 Pixel Bildschirmbreite. Das srcset-Attribut in HTML ermoeglicht die Angabe mehrerer Bildgroessen, und der Browser waehlt automatisch die geeignetste aus.\n\nImplementieren Sie srcset mit mindestens drei Groessen-Breakpoints fuer Produktbilder: eine kleine Version fuer Mobil (ca. 400px breit), eine mittlere fuer Tablets (ca. 800px breit) und eine grosse fuer Desktop (ca. 1200px breit). Fuer Produktdetailseiten mit Zoom-Funktion stellen Sie eine zusaetzliche extra-grosse Version (2000-3000px) bereit, die nur bei Aktivierung der Zoom-Funktion geladen wird.\n\nLazy Loading verzoegert das Laden von Bildern ausserhalb des Sichtbereichs, bis der Nutzer in ihre Naehe scrollt. Fuer Produktseiten mit mehreren Bildern unter dem Falz kann Lazy Loading das initiale Seitengewicht um 50% oder mehr reduzieren. Implementieren Sie Lazy Loading mit dem nativen loading=\"lazy\" Attribut auf img-Tags.\n\nLaden Sie das primaere Produktbild oder das LCP-Element nicht lazy. Das Hauptproduktbild, das beim ersten Laden der Seite sichtbar ist, sollte eifrig mit fetchpriority=\"high\" geladen werden. Lazy Loading des Hero-Bildes wuerde LCP verzoegern und Ihren Core Web Vitals-Score verschlechtern.\n\nVerwenden Sie width- und height-Attribute auf allen img-Tags, um Cumulative Layout Shift (CLS) zu verhindern. Wenn ein Browser die Abmessungen eines Bildes kennt, bevor es geladen wird, kann er den richtigen Platz reservieren.",
          items: [
            "Liefern Sie mehrere Bildgroessen ueber srcset zur Anpassung an Geraete-Bildschirmbreiten",
            "Laden Sie alle Below-the-Fold-Bilder lazy mit loading='lazy' zur Reduzierung des initialen Seitengewichts",
            "Laden Sie das primaere Produktbild eifrig mit fetchpriority='high' zur LCP-Optimierung",
            "Fuegen Sie immer width- und height-Attribute auf img-Tags ein, um Layout-Shift (CLS) zu verhindern",
          ],
          callout: {
            title: "LCP-Prioritätsregel",
            text: "Das Hauptproduktbild niemals lazy-loaden. Verwenden Sie fetchpriority=\"high\" fuer das erste sichtbare Bild, um die LCP-Zeit zu minimieren und bessere Core-Web-Vitals-Werte zu erzielen.",
          },
        },
        {
          title: "Bild-SEO fuer Produktlistenseiten und Sitemaps",
          content:
            "Produktlistenseiten (Kategorieseiten) zeigen Dutzende von Produkt-Thumbnails in einem Raster. Jedes Thumbnail ist eine Ranking-Moeglichkeit in Google Bilder, aber nur wenn die Bilder korrekt optimiert sind. Stellen Sie sicher, dass jedes Produkt-Thumbnail in Ihrem Raster einen einzigartigen Alt-Text hat, der den Produktnamen enthaelt.\n\nThumbnail-Groessen auf Kategorieseiten sollten konsistent und angemessen komprimiert sein. Es ist nicht noetig, Bilder in voller Groesse in einem Raster zu laden, wo sie mit 200x200 oder 300x300 Pixeln angezeigt werden. Generieren Sie dedizierte Thumbnail-Versionen in der exakten Anzeigegrösse. Dies allein kann das Seitengewicht von Kategorieseiten um 70-80% reduzieren.\n\nErstellen Sie eine Bild-Sitemap oder fuegen Sie Bild-Tags in Ihre bestehende XML-Sitemap ein. Eine Bild-Sitemap informiert Google ueber alle Bilder auf Ihrer Website und liefert Metadaten wie Bildunterschriften. Fuer E-Commerce-Seiten sollte die Bild-Sitemap jedes Produktbild mit zugehoerigem Alt-Text und der Produktseiten-URL enthalten.\n\nUeberwachen Sie Ihre Bildsuch-Performance in der Google Search Console. Der Leistungsbericht kann gefiltert werden, um nur Google Bilder-Traffic anzuzeigen. Nutzen Sie diese Daten, um Moeglichkeiten zu identifizieren, Produkte mit hohen Bild-Impressionen aber niedrigen Klicks benoetigen moeglicherweise ansprechendere Produktfotografie.\n\nErwaegen Sie die Implementierung strukturierter Daten fuer Produktbilder. Das Product-Schema unterstuetzt die \"image\"-Eigenschaft, die Google mitteilt, welche Bilder mit dem Produkt verknuepft sind.",
          tip: "Fuehren Sie vierteljaehrlich ein Bild-SEO-Audit durch: Crawlen Sie Ihre Website, um Produktbilder mit fehlendem Alt-Text, uebergrossen Dateigroessen, Standard-Kamera-Dateinamen und fehlenden srcset-Attributen zu identifizieren. Priorisieren Sie die Behebung von Bildern auf Ihren Top-100-Produkt- und Kategorieseiten nach Traffic-Volumen.",
        },
      ],
      navLabels: {
        previous: "Zurueck",
        next: "Weiter",
      },
    },
    fr: {
      badge: "[SEO on-page](/blog/on-page-seo-for-ecommerce)",
      heading: "Optimisation des Images pour les Produits",
      intro:
        "Les images de produits sont le pont entre la navigation et l'achat en e-commerce. Elles representent egalement l'une des plus grandes opportunites SEO inexploitees pour la plupart des boutiques en ligne. Google Images genere 10 a 25 % du trafic organique pour les categories de produits visuellement orientees comme la mode, la decoration interieure et l'electronique. Au-dela du trafic de recherche d'images, les images mal optimisees sont la cause numero un des temps de chargement lents, ce qui nuit directement aux classements et aux taux de conversion. Une strategie complete d'optimisation des images aborde les formats de fichiers, la compression, le texte alternatif, le nommage des fichiers, le chargement differe et le dimensionnement adaptatif. Traiter les images est un élément clé de l'[optimisation de la vitesse du site](/academy/site-speed-optimization).",
      readTime: "9 min de lecture",
      sections: [
        {
          title: "Pourquoi l'optimisation des images compte pour le SEO e-commerce",
          content:
            "Les images representent la majorite du poids de page sur la plupart des sites e-commerce. Une seule [page produit](/academy/product-page-seo) avec six photographies haute resolution peut facilement peser 10-15 Mo sans optimisation, resultant en des temps de chargement de cinq secondes ou plus sur les connexions mobiles. Les Core Web Vitals de Google -- en particulier le Largest Contentful Paint (LCP) -- sont directement impactes par la taille des fichiers image.\n\nAu-dela de la vitesse de page, les images de produits creent des opportunites de trafic direct via Google Images. Quand un acheteur recherche \"table basse style mid-century\" dans Google Images et que votre photo de produit apparait avec un alt-tag optimise et un nom de fichier descriptif, il clique directement vers votre page produit.\n\nL'optimisation des images ameliore egalement vos listings produits dans Google Shopping et les resultats de recherche visuelle. Google Lens et les outils de recherche visuelle similaires se developpent rapidement, et les produits avec des images correctement optimisees ont plus de chances d'apparaitre dans ces resultats.\n\nL'effet compose de l'optimisation des images sur un grand catalogue est substantiel. Reduire la taille moyenne des images de 60 % sur 5 000 pages produits ameliore la vitesse de chargement de chaque page, ce qui augmente les classements sur l'ensemble du site et reduit les taux de rebond.",
          items: [
            "Les images representent typiquement 60-80 % du poids total des pages produits e-commerce",
            "Google Images genere 10-25 % du trafic organique pour les categories de produits visuellement orientees",
            "Les Core Web Vitals, en particulier le LCP, sont directement impactes par les images non optimisees",
            "La recherche visuelle via Google Lens se developpe et favorise les images de produits correctement optimisees",
          ],
        },
        {
          title: "Formats de fichiers et techniques de compression",
          content:
            "Choisir le bon format d'image est le fondement de l'optimisation des images. Pour la photographie de produits, trois formats dominent : JPEG, PNG et WebP. Le JPEG est le choix traditionnel pour les photographies avec des gradients de couleur complexes. Le PNG est meilleur pour les images necessitant de la transparence. Le WebP, developpe par Google, offre des tailles de fichiers 25-35 % plus petites que le JPEG a qualite visuelle equivalente.\n\nLes sites e-commerce modernes devraient servir des images WebP comme format principal, avec des alternatives JPEG pour les navigateurs anciens. L'element HTML picture ou la negociation de contenu cote serveur peut servir le WebP aux navigateurs compatibles et le JPEG aux autres automatiquement. L'AVIF est un format encore plus recent qui atteint 20 % de meilleure compression que le WebP.\n\nLes parametres de compression comptent autant que le choix du format. Un JPEG sauvegarde a 100 % de qualite est bien plus volumineux que necessaire -- la plupart des images de produits paraissent identiques a l'oeil humain a 75-85 % de qualite mais sont 40-60 % plus petites. Des outils comme ShortPixel, TinyPNG, Squoosh et ImageOptim peuvent compresser les images par lots avant le telechargement.\n\nNe compressez pas les images plusieurs fois. Chaque tour de compression avec perte degrade davantage la qualite tout en fournissant des reductions de taille decroissantes. Commencez avec l'original de la plus haute qualite, compressez une fois a votre niveau de qualite cible et conservez l'original separement.",
          items: [
            "Servez le WebP comme format principal avec des alternatives JPEG pour une compression et compatibilite maximales",
            "Compressez les JPEG a 75-85 % de qualite -- visuellement identiques a 100 % mais 40-60 % plus petits",
            "Utilisez des outils de compression automatises ou l'optimisation basee sur CDN pour les grands catalogues",
            "Ne compressez jamais une image deja compressee -- partez toujours du fichier original haute qualite",
          ],
          tip: "Configurez la conversion automatique en WebP dans votre pipeline d'images. La plupart des CDN comme Cloudinary, Cloudflare et Imgix peuvent servir le WebP aux navigateurs compatibles automatiquement sans changer les URLs d'images dans votre HTML. Ce seul changement peut reduire la charge totale d'images de 25-35 % sur l'ensemble de votre site.",
          image: {
            src: "/images/academy/fr/image-format-comparison.svg",
            alt: "Vergleichstabelle der Dateigrößeneinsparungen bei JPEG, WebP und AVIF für Produktfotografie",
            caption: "Der Wechsel von JPEG 100% zu WebP spart 73% Dateigröße. Bei einer Produktseite mit 6 Bildern sind das über 10 MB weniger Seitengewicht.",
          },
          callout: {
            title: "Format-Wirkung",
            text: "WebP liefert 25-35% kleinere Dateien als JPEG bei gleichwertiger visueller Qualität und hat 97% Browser-Unterstützung. Eine 6-Bilder-Produktseite sinkt von 14,4 MB auf 3,9 MB und verkürzt die Ladezeit von über 5 Sekunden auf unter 2 Sekunden auf Mobilgeräten.",
          },
        },
        {
          title: "Bonnes pratiques du texte alternatif pour les images produits",
          content:
            "Le texte alternatif (alt text) remplit deux fonctions critiques : il decrit les images pour les utilisateurs malvoyants utilisant des lecteurs d'ecran, et il fournit un contexte de mots-cles que les moteurs de recherche utilisent pour le classement des images. Chaque image de produit sur votre site a besoin d'un texte alternatif unique et descriptif qui decrit precisement ce que l'image montre.\n\nPour l'image produit principale, ecrivez un texte alternatif qui inclut le nom du produit et un detail visuel cle. \"Sac bandouliere femme en cuir rouge avec chaine doree - vue de face\" est bien plus utile que \"sac\" ou \"image produit.\" Le texte alternatif doit se lire naturellement comme une description, pas comme une phrase bourrée de mots-cles.\n\nLes pages produits avec plusieurs images devraient avoir un texte alternatif varie pour chaque photo. La vue de face, la vue arriere, les gros plans et les images lifestyle montrent chacun quelque chose de different, et le texte alternatif devrait refleter ces differences.\n\nPour les images specifiques aux variantes -- differentes couleurs, tailles ou configurations -- incluez l'attribut de variante dans le texte alternatif. \"Chaussure de randonnee homme en vert foret, taille 42\" est plus utile qu'un generique \"chaussure de randonnee.\"\n\nEvitez de laisser le texte alternatif vide sur toute image de produit. Les attributs alt vides indiquent aux lecteurs d'ecran de sauter l'image entierement, ce qui est approprie pour les images decoratives mais jamais pour les photos de produits.",
          items: [
            "Ecrivez un texte alternatif qui inclut naturellement le nom du produit et des descripteurs visuels cles",
            "Variez le texte alternatif entre les multiples images produits pour capturer differentes requetes de recherche",
            "Incluez les attributs specifiques aux variantes comme la couleur, la taille ou le materiau dans le texte alternatif",
            "Ne laissez jamais le texte alternatif des images produits vide et ne le dupliquez pas sur toutes les images d'une page",
          ],
        },
        {
          title: "Nommage des fichiers et URLs des images",
          content:
            "Les noms de fichiers d'images sont un signal de classement pour Google Images que la plupart des boutiques e-commerce ignorent completement. Le nom de fichier par defaut de l'appareil photo \"DSC_4821.jpg\" ne dit rien aux moteurs de recherche sur le contenu de l'image. Renommer ce fichier en \"sac-bandouliere-cuir-rouge-femme-face.jpg\" avant le telechargement donne a Google un signal supplementaire.\n\nUtilisez des tirets pour separer les mots dans les noms de fichiers, pas des shows ou des espaces. Google traite les tirets comme des separateurs de mots. Les shows sont traites comme des connecteurs de mots. Les espaces dans les noms de fichiers sont convertis en \"%20\" dans les URLs.\n\nGardez les noms de fichiers descriptifs mais concis. Incluez le nom du produit, un attribut cle comme la couleur ou le materiau, et le type de vue. Evitez de bourrer les noms de fichiers avec des mots-cles excessifs. Visez trois a six mots descriptifs.\n\nPour les boutiques avec de grands catalogues, automatisez le nommage des fichiers avec un schema coherent. Construisez une convention de nommage comme : {nom-produit}-{couleur}-{vue}.{format} et appliquez-la de maniere programmatique.\n\nLes URLs des images devraient egalement etre propres et descriptives. Evitez les structures d'URL qui placent les images derriere des chaines de hachage aleatoires comme \"/images/a7f3b2e1.jpg.\" Utilisez plutot des chemins d'URL qui refletent la hierarchie des produits.",
          tip: "Creez un tableur de modele de nommage de fichiers pour votre equipe de photographie de produits. Incluez des colonnes pour le nom du produit, la couleur, le materiau et le type de vue, avec une formule qui genere le nom de fichier standardise.",
        },
        {
          title: "Images responsives et chargement differe",
          content:
            "Les sites e-commerce modernes doivent servir des images de taille appropriee pour chaque appareil et taille d'ecran. Une image hero de 3000x3000 pixels concue pour un ecran retina de bureau gaspille de la bande passante sur un telephone mobile avec un ecran de 375 pixels de large. L'attribut srcset en HTML permet de specifier plusieurs tailles d'images.\n\nImplementez srcset avec au moins trois points de rupture pour les images produits : une petite version pour mobile (environ 400px de large), une moyenne pour les tablettes (environ 800px) et une grande pour le bureau (environ 1200px). Pour les pages de detail produit avec zoom, fournissez une version extra-large (2000-3000px) qui ne se charge que lorsque la fonction zoom est activee.\n\nLe chargement differe reporte le chargement des images hors ecran jusqu'a ce que l'utilisateur scroll pres d'elles. Pour les pages produits avec plusieurs images sous le pli, le chargement differe peut reduire le poids initial de la page de 50 % ou plus. Implementez-le en utilisant l'attribut natif loading=\"lazy\" sur les balises img.\n\nNe chargez pas en differe l'image produit principale ou l'element LCP. L'image produit principale visible au premier chargement devrait etre chargee immediatement avec fetchpriority=\"high\".\n\nUtilisez les attributs width et height sur toutes les balises img pour prevenir le Cumulative Layout Shift (CLS). Quand un navigateur connait les dimensions d'une image avant son chargement, il peut reserver l'espace correct.",
          items: [
            "Servez plusieurs tailles d'images via srcset pour correspondre aux largeurs d'ecran des appareils",
            "Chargez en differe toutes les images sous le pli avec loading='lazy' pour reduire le poids initial",
            "Chargez immediatement l'image produit principale avec fetchpriority='high' pour optimiser le LCP",
            "Incluez toujours les attributs width et height sur les balises img pour prevenir le decalage de mise en page (CLS)",
          ],
          callout: {
            title: "LCP-Prioritätsregel",
            text: "Das Hauptproduktbild niemals lazy-loaden. Verwenden Sie fetchpriority=\"high\" fuer das erste sichtbare Bild, um die LCP-Zeit zu minimieren und bessere Core-Web-Vitals-Werte zu erzielen.",
          },
        },
        {
          title: "SEO des images pour les pages listing et les sitemaps",
          content:
            "Les pages listing produits (pages categories) affichent des dizaines de vignettes dans une grille. Chaque vignette est une opportunite de classement dans Google Images, mais seulement si les images sont correctement optimisees. Assurez-vous que chaque vignette dans votre grille a un texte alternatif unique incluant le nom du produit.\n\nLa taille des vignettes sur les pages categories devrait etre coherente et compressée de maniere appropriee. Il n'est pas necessaire de charger des images en taille reelle dans une grille ou elles sont affichees a 200x200 ou 300x300 pixels. Generez des versions de vignettes dediees a la taille d'affichage exacte. Cela seul peut reduire le poids des pages categories de 70-80 %.\n\nCreez un sitemap d'images ou incluez des balises image dans votre sitemap XML existant. Un sitemap d'images informe Google de toutes les images sur votre site et fournit des metadonnees comme les legendes. Pour les sites e-commerce, le sitemap d'images devrait inclure chaque image de produit avec son texte alternatif associe et l'URL de la page produit.\n\nSurveillez votre performance de recherche d'images dans Google Search Console. Le rapport de Performance peut etre filtre pour afficher uniquement le trafic Google Images. Utilisez ces donnees pour identifier des opportunites.\n\nEnvisagez d'implementer des donnees structurees pour les images de produits. Le schema Product prend en charge la propriete \"image\", qui indique a Google quelles images sont associees au produit.",
          tip: "Lancez un audit SEO d'images trimestriel : crawlez votre site pour identifier les images produits avec un texte alternatif manquant, des tailles de fichiers surdimensionnees, des noms de fichiers de camera par defaut et des attributs srcset manquants. Priorisez la correction des images sur vos 100 pages produits et categories les plus visitees.",
        },
      ],
      navLabels: {
        previous: "Precedent",
        next: "Suivant",
      },
    },
    es: {
      badge: "SEO on-page",
      heading: "Optimizacion de Imagenes para Productos",
      intro:
        "Las imagenes de productos son el puente entre navegar y comprar en el ecommerce. Tambien representan una de las mayores oportunidades SEO sin explotar para la mayoria de las tiendas online. Google Imagenes genera del 10 al 25% del trafico organico para categorias de productos visualmente orientadas como moda, decoracion del hogar y electronica. Mas alla del trafico de busqueda de imagenes, las imagenes mal optimizadas son la causa numero uno de tiempos de carga lentos, lo que perjudica directamente tanto los rankings como las tasas de conversion. Una estrategia integral de optimizacion de imagenes aborda formatos de archivo, compresion, texto alternativo, nombrado de archivos, carga diferida y dimensionamiento responsivo. Abordar las imagenes es una parte clave de la [optimizacion de velocidad del sitio](/academy/site-speed-optimization).",
      readTime: "9 min de lectura",
      sections: [
        {
          title: "Por que la optimizacion de imagenes importa para el SEO de ecommerce",
          content:
            "Las imagenes representan la mayor parte del peso de pagina en la mayoria de los sitios de ecommerce. Una sola [pagina de producto](/academy/product-page-seo) con seis fotografias de alta resolucion puede pesar facilmente 10-15 MB sin optimizacion, resultando en tiempos de carga de cinco segundos o mas en conexiones moviles. Los Core Web Vitals de Google -- particularmente el Largest Contentful Paint (LCP) -- se ven directamente impactados por los tamanos de archivo de imagen.\n\nMas alla de la velocidad de pagina, las imagenes de productos crean oportunidades de trafico de busqueda directo a traves de Google Imagenes. Cuando un comprador busca \"mesa de centro estilo mid-century\" en Google Imagenes y tu foto de producto aparece con un alt-tag optimizado y un nombre de archivo descriptivo, hace clic directamente a tu pagina de producto.\n\nLa optimizacion de imagenes tambien mejora tus listados de productos en Google Shopping y resultados de busqueda visual. Google Lens y herramientas de busqueda visual similares estan creciendo rapidamente, y los productos con imagenes correctamente optimizadas tienen mas probabilidades de aparecer en estos resultados.\n\nEl efecto compuesto de la optimizacion de imagenes a traves de un gran catalogo es sustancial. Reducir el tamano promedio de imagen un 60% en 5,000 paginas de producto mejora la velocidad de carga de cada pagina, lo que eleva rankings en todo el sitio y reduce las tasas de rebote. Esta es una de las mejoras de [SEO on-page](/blog/on-page-seo-for-ecommerce) de mayor impacto que puedes hacer.",
          items: [
            "Las imagenes tipicamente representan el 60-80% del peso total de pagina en paginas de producto de ecommerce",
            "Google Imagenes genera el 10-25% del trafico organico para categorias de productos visualmente orientadas",
            "Los Core Web Vitals, especialmente LCP, se ven directamente impactados por imagenes de producto no optimizadas",
            "La busqueda visual via Google Lens esta creciendo y favorece imagenes de producto correctamente optimizadas",
          ],
        },
        {
          title: "Formatos de archivo y tecnicas de compresion",
          content:
            "Elegir el formato de imagen correcto es la base de la optimizacion de imagenes. Para la fotografia de productos, tres formatos dominan: JPEG, PNG y WebP. JPEG es la opcion tradicional para fotografias con gradientes de color complejos. PNG es mejor para imagenes que requieren transparencia. WebP, desarrollado por Google, ofrece tamanos de archivo 25-35% mas pequenos que JPEG con calidad visual equivalente.\n\nLos sitios de ecommerce modernos deberian servir imagenes WebP como formato principal, con respaldos JPEG para navegadores mas antiguos. El elemento picture de HTML o la negociacion de contenido del lado del servidor puede servir WebP a navegadores compatibles y JPEG a otros automaticamente. AVIF es un formato aun mas nuevo que logra un 20% mejor compresion que WebP.\n\nLos ajustes de compresion importan tanto como la eleccion del formato. Un JPEG guardado al 100% de calidad es mucho mas grande de lo necesario -- la mayoria de las imagenes de productos se ven identicas al ojo humano al 75-85% de calidad pero son 40-60% mas pequenas. Herramientas como ShortPixel, TinyPNG, Squoosh e ImageOptim pueden comprimir imagenes por lotes antes de subirlas.\n\nNo comprimas imagenes multiples veces. Cada ronda de compresion con perdida degrada mas la calidad con reducciones de tamano cada vez menores. Empieza con el original de mayor calidad, comprime una vez a tu nivel de calidad objetivo y almacena el original por separado.",
          items: [
            "Sirve WebP como formato principal con respaldos JPEG para maxima compresion y compatibilidad",
            "Comprime JPEGs al 75-85% de calidad -- visualmente identicos al 100% pero 40-60% mas pequenos",
            "Usa herramientas de compresion automatizadas u optimizacion basada en CDN para grandes catalogos de productos",
            "Nunca comprimas una imagen ya comprimida -- siempre empieza desde el archivo original de alta calidad",
          ],
          tip: "Configura la conversion automatica a WebP en tu pipeline de imagenes. La mayoria de los CDN como Cloudinary, Cloudflare e Imgix pueden servir WebP a navegadores compatibles automaticamente sin cambiar ninguna URL de imagen en tu HTML. Este unico cambio puede reducir la carga total de imagenes un 25-35% en todo tu sitio.",
          image: {
            src: "/images/academy/es/image-format-comparison.svg",
            alt: "Vergleichstabelle der Dateigrößeneinsparungen bei JPEG, WebP und AVIF für Produktfotografie",
            caption: "Der Wechsel von JPEG 100% zu WebP spart 73% Dateigröße. Bei einer Produktseite mit 6 Bildern sind das über 10 MB weniger Seitengewicht.",
          },
          callout: {
            title: "Format-Wirkung",
            text: "WebP liefert 25-35% kleinere Dateien als JPEG bei gleichwertiger visueller Qualität und hat 97% Browser-Unterstützung. Eine 6-Bilder-Produktseite sinkt von 14,4 MB auf 3,9 MB und verkürzt die Ladezeit von über 5 Sekunden auf unter 2 Sekunden auf Mobilgeräten.",
          },
        },
        {
          title: "Mejores practicas de texto alternativo para imagenes de productos",
          content:
            "El texto alternativo (alt text) cumple dos propositos criticos: describe imagenes para usuarios con discapacidad visual que dependen de lectores de pantalla, y proporciona contexto de palabras clave que los motores de busqueda usan para el ranking de imagenes. Cada imagen de producto en tu sitio necesita texto alternativo unico y descriptivo que describa con precision lo que la imagen muestra.\n\nPara la imagen principal del producto, escribe texto alternativo que incluya el nombre del producto y un detalle visual clave. \"Bolso bandolera mujer cuero rojo con cadena dorada - vista frontal\" es mucho mas util que \"bolso\" o \"imagen de producto.\" El texto alternativo debe leerse naturalmente como una descripcion.\n\nLas paginas de productos con multiples imagenes deberian tener texto alternativo variado para cada foto. La vista frontal, vista trasera, tomas de detalle e imagenes de estilo de vida muestran algo diferente cada una, y el texto alternativo deberia reflejar esas diferencias.\n\nPara imagenes especificas de variantes -- diferentes colores, tallas o configuraciones -- incluye el atributo de variante en el texto alternativo. \"Bota de senderismo hombre en verde bosque, talla 42\" es mas util que un generico \"bota de senderismo.\"\n\nEvita dejar el texto alternativo vacio en cualquier imagen de producto. Los atributos alt vacios le dicen a los lectores de pantalla que salten la imagen por completo, lo cual es apropiado para imagenes decorativas pero nunca para fotos de productos.",
          items: [
            "Escribe texto alternativo que incluya naturalmente el nombre del producto y descriptores visuales clave",
            "Varia el texto alternativo entre multiples imagenes de producto para capturar diferentes consultas de busqueda",
            "Incluye atributos especificos de variante como color, talla o material en el texto alternativo",
            "Nunca dejes vacio el texto alternativo de imagenes de producto ni lo dupliques en todas las imagenes de una pagina",
          ],
        },
        {
          title: "Nombrado de archivos y URLs de imagenes",
          content:
            "Los nombres de archivo de imagenes son una senal de ranking para Google Imagenes que la mayoria de las tiendas de ecommerce ignoran completamente. El nombre de archivo predeterminado de la camara \"DSC_4821.jpg\" no le dice nada a los motores de busqueda sobre el contenido de la imagen. Renombrar ese archivo a \"bolso-bandolera-cuero-rojo-mujer-frente.jpg\" antes de subirlo le da a Google una senal adicional.\n\nUsa guiones para separar palabras en los nombres de archivo, no guiones bajos ni espacios. Google trata los guiones como separadores de palabras. Los guiones bajos se tratan como unificadores de palabras. Los espacios se convierten en \"%20\" en las URLs.\n\nManten los nombres de archivo descriptivos pero concisos. Incluye el nombre del producto, un atributo clave como color o material, y el tipo de vista. Evita saturar los nombres de archivo con palabras clave excesivas. Apunta a tres a seis palabras descriptivas.\n\nPara tiendas con catalogos grandes, automatiza el nombrado de archivos usando un patron consistente. Construye una convencion de nombrado como: {nombre-producto}-{color}-{vista}.{formato} y aplicala programaticamente.\n\nLas URLs de imagenes tambien deben ser limpias y descriptivas. Evita estructuras de URL que colocan imagenes detras de cadenas hash aleatorias.",
          tip: "Crea una plantilla de hoja de calculo de nombrado de archivos para tu equipo de fotografia de productos. Incluye columnas para nombre del producto, color, material y tipo de vista, con una formula que genere el nombre de archivo estandarizado.",
        },
        {
          title: "Imagenes responsivas y carga diferida",
          content:
            "Los sitios de ecommerce modernos deben servir imagenes de tamano apropiado para cada dispositivo y tamano de pantalla. Una imagen hero de 3000x3000 pixeles disenada para una pantalla retina de escritorio desperdicia ancho de banda en un telefono movil con una pantalla de 375 pixeles de ancho. El atributo srcset en HTML te permite especificar multiples tamanos de imagen.\n\nImplementa srcset con al menos tres puntos de quiebre para imagenes de productos: una version pequena para movil (alrededor de 400px de ancho), una mediana para tablets (alrededor de 800px) y una grande para escritorio (alrededor de 1200px). Para paginas de detalle de producto con zoom, proporciona una version extra grande (2000-3000px) que solo se cargue cuando se active la funcion de zoom.\n\nLa carga diferida pospone la carga de imagenes fuera de pantalla hasta que el usuario se desplace cerca de ellas. Para paginas de productos con multiples imagenes debajo del pliegue, la carga diferida puede reducir el peso inicial de la pagina un 50% o mas. Implementa la carga diferida usando el atributo nativo loading=\"lazy\" en las etiquetas img.\n\nNo cargues de forma diferida la imagen principal del producto o el elemento LCP. La imagen principal del producto visible cuando la pagina se carga por primera vez debe cargarse inmediatamente con fetchpriority=\"high\".\n\nUsa atributos width y height en todas las etiquetas img para prevenir el Cumulative Layout Shift (CLS). Cuando un navegador conoce las dimensiones de una imagen antes de que se cargue, puede reservar la cantidad correcta de espacio.",
          items: [
            "Sirve multiples tamanos de imagen usando srcset para coincidir con los anchos de pantalla de los dispositivos",
            "Carga de forma diferida todas las imagenes debajo del pliegue con loading='lazy' para reducir el peso inicial",
            "Carga inmediatamente la imagen principal del producto con fetchpriority='high' para optimizar LCP",
            "Siempre incluye atributos width y height en las etiquetas img para prevenir el cambio de diseno (CLS)",
          ],
          callout: {
            title: "LCP-Prioritätsregel",
            text: "Das Hauptproduktbild niemals lazy-loaden. Verwenden Sie fetchpriority=\"high\" fuer das erste sichtbare Bild, um die LCP-Zeit zu minimieren und bessere Core-Web-Vitals-Werte zu erzielen.",
          },
        },
        {
          title: "SEO de imagenes para paginas de listado de productos y sitemaps",
          content:
            "Las paginas de listado de productos (paginas de categoria) muestran docenas de miniaturas de productos en una cuadricula. Cada miniatura es una oportunidad de ranking en Google Imagenes, pero solo si las imagenes estan correctamente optimizadas. Asegura que cada miniatura de producto en tu cuadricula tenga un texto alternativo unico que incluya el nombre del producto.\n\nEl tamano de las miniaturas en paginas de categoria debe ser consistente y estar comprimido adecuadamente. No hay necesidad de cargar imagenes a tamano completo en una cuadricula donde se muestran a 200x200 o 300x300 pixeles. Genera versiones de miniaturas dedicadas al tamano de visualizacion exacto. Esto solo puede reducir el peso de las paginas de categoria un 70-80%.\n\nCrea un sitemap de imagenes o incluye etiquetas de imagen dentro de tu sitemap XML existente. Un sitemap de imagenes le dice a Google sobre todas las imagenes en tu sitio y proporciona metadatos como subtitulos. Para sitios de ecommerce, el sitemap de imagenes deberia incluir cada imagen de producto con su texto alternativo asociado y la URL de la pagina del producto.\n\nMonitorea tu rendimiento de busqueda de imagenes en Google Search Console. El informe de Rendimiento puede filtrarse para mostrar solo el trafico de Google Imagenes. Usa estos datos para identificar oportunidades.\n\nConsidera implementar datos estructurados para imagenes de productos. El esquema Product soporta la propiedad \"image\", que le dice a Google que imagenes estan asociadas con el producto.",
          tip: "Ejecuta una auditoria SEO de imagenes trimestral: rastrea tu sitio para identificar imagenes de productos con texto alternativo faltante, tamanos de archivo sobredimensionados, nombres de archivo predeterminados de la camara y atributos srcset faltantes. Prioriza la correccion de imagenes en tus 100 paginas de producto y categoria principales por volumen de trafico.",
        },
      ],
      navLabels: {
        previous: "Anterior",
        next: "Siguiente",
      },
    },
    it: {
      badge: "SEO on-page",
      heading: "Ottimizzazione delle Immagini per i Prodotti",
      intro:
        "Le immagini dei prodotti sono il ponte tra la navigazione e l'acquisto nell'e-commerce. Rappresentano anche una delle piu grandi opportunita SEO inesplorate per la maggior parte dei negozi online. Google Immagini genera il 10-25% del traffico organico per categorie di prodotti visivamente orientate come moda, arredamento ed elettronica. Oltre al traffico di ricerca immagini, le immagini mal ottimizzate sono la causa numero uno dei tempi di caricamento lenti, che danneggiano direttamente sia i ranking che i tassi di conversione. Una strategia completa di ottimizzazione delle immagini affronta formati di file, compressione, testo alternativo, denominazione dei file, caricamento differito e dimensionamento responsivo. Approfondisci con la nostra guida sulla [ottimizzazione della velocità del sito](/academy/site-speed-optimization).",
      readTime: "9 min di lettura",
      sections: [
        {
          title: "Perche l'ottimizzazione delle immagini conta per il SEO e-commerce",
          content:
            "Le immagini rappresentano la maggior parte del peso della pagina sulla maggior parte dei siti e-commerce. Una singola pagina prodotto con sei fotografie ad alta risoluzione puo facilmente pesare 10-15 MB senza ottimizzazione, risultando in tempi di caricamento di cinque secondi o piu su connessioni mobili. I Core Web Vitals di Google -- in particolare il Largest Contentful Paint (LCP) -- sono direttamente influenzati dalle dimensioni dei file immagine.\n\nOltre alla velocita della pagina, le immagini dei prodotti creano opportunita di traffico diretto tramite Google Immagini. Quando un acquirente cerca \"tavolino da caffe stile mid-century\" in Google Immagini e la tua foto prodotto appare con un alt tag ottimizzato e un nome file descrittivo, clicca direttamente sulla tua pagina prodotto.\n\nL'ottimizzazione delle immagini migliora anche i tuoi listing prodotti in Google Shopping e nei risultati di ricerca visiva. Google Lens e strumenti di ricerca visiva simili stanno crescendo rapidamente, e i prodotti con immagini correttamente ottimizzate hanno piu probabilita di apparire in questi risultati.\n\nL'effetto composto dell'ottimizzazione delle immagini su un grande catalogo e sostanziale. Ridurre la dimensione media delle immagini del 60% su 5.000 pagine prodotto migliora la velocita di caricamento di ogni pagina, il che alza i ranking su tutto il sito e riduce i tassi di rimbalzo. Approfondisci con la nostra guida sulla [SEO on-page](/blog/on-page-seo-for-ecommerce).",
          items: [
            "Le immagini tipicamente rappresentano il 60-80% del peso totale della pagina nelle pagine prodotto e-commerce",
            "Google Immagini genera il 10-25% del traffico organico per categorie di prodotti visivamente orientate",
            "I Core Web Vitals, in particolare LCP, sono direttamente influenzati dalle immagini prodotto non ottimizzate",
            "La ricerca visiva tramite Google Lens sta crescendo e favorisce le immagini prodotto correttamente ottimizzate",
          ],
        },
        {
          title: "Formati di file e tecniche di compressione",
          content:
            "Scegliere il formato immagine corretto e il fondamento dell'ottimizzazione delle immagini. Per la fotografia di prodotti, tre formati dominano: JPEG, PNG e WebP. Il JPEG e la scelta tradizionale per le fotografie con gradienti di colore complessi. Il PNG e migliore per le immagini che richiedono trasparenza. Il WebP, sviluppato da Google, offre dimensioni di file 25-35% piu piccole del JPEG a qualita visiva equivalente.\n\nI siti e-commerce moderni dovrebbero servire immagini WebP come formato principale, con fallback JPEG per browser piu vecchi. L'elemento HTML picture o la negoziazione di contenuto lato server puo servire WebP ai browser compatibili e JPEG agli altri automaticamente. L'AVIF e un formato ancora piu recente che raggiunge il 20% di compressione migliore del WebP.\n\nLe impostazioni di compressione contano tanto quanto la scelta del formato. Un JPEG salvato al 100% di qualita e molto piu grande del necessario -- la maggior parte delle immagini prodotto appaiono identiche all'occhio umano al 75-85% di qualita ma sono 40-60% piu piccole. Strumenti come ShortPixel, TinyPNG, Squoosh e ImageOptim possono comprimere le immagini in batch prima del caricamento.\n\nNon comprimere le immagini piu volte. Ogni ciclo di compressione con perdita degrada ulteriormente la qualita fornendo riduzioni di dimensione decrescenti. Parti dall'originale di massima qualita, comprimi una volta al tuo livello di qualita target e conserva l'originale separatamente.",
          items: [
            "Servi WebP come formato principale con fallback JPEG per massima compressione e compatibilita",
            "Comprimi i JPEG al 75-85% di qualita -- visivamente identici al 100% ma 40-60% piu piccoli",
            "Usa strumenti di compressione automatizzati o ottimizzazione basata su CDN per grandi cataloghi prodotti",
            "Non comprimere mai un'immagine gia compressa -- parti sempre dal file originale di alta qualita",
          ],
          tip: "Configura la conversione automatica in WebP nella tua pipeline di immagini. La maggior parte dei CDN come Cloudinary, Cloudflare e Imgix possono servire WebP ai browser supportati automaticamente senza cambiare nessun URL di immagine nel tuo HTML. Questa singola modifica puo ridurre il payload totale delle immagini del 25-35% su tutto il tuo sito.",
          image: {
            src: "/images/academy/it/image-format-comparison.svg",
            alt: "Vergleichstabelle der Dateigrößeneinsparungen bei JPEG, WebP und AVIF für Produktfotografie",
            caption: "Der Wechsel von JPEG 100% zu WebP spart 73% Dateigröße. Bei einer Produktseite mit 6 Bildern sind das über 10 MB weniger Seitengewicht.",
          },
          callout: {
            title: "Format-Wirkung",
            text: "WebP liefert 25-35% kleinere Dateien als JPEG bei gleichwertiger visueller Qualität und hat 97% Browser-Unterstützung. Eine 6-Bilder-Produktseite sinkt von 14,4 MB auf 3,9 MB und verkürzt die Ladezeit von über 5 Sekunden auf unter 2 Sekunden auf Mobilgeräten.",
          },
        },
        {
          title: "Best practice del testo alternativo per le immagini prodotto",
          content:
            "Il testo alternativo (alt text) serve a due scopi critici: descrive le immagini per gli utenti ipovedenti che si affidano agli screen reader, e fornisce contesto di parole chiave che i motori di ricerca usano per il ranking delle immagini. Ogni immagine prodotto sul tuo sito ha bisogno di testo alternativo unico e descrittivo che descriva accuratamente cio che l'immagine mostra.\n\nPer l'immagine prodotto principale, scrivi testo alternativo che includa il nome del prodotto e un dettaglio visivo chiave. \"Borsa a tracolla donna in pelle rossa con catena dorata - vista frontale\" e molto piu utile di \"borsa\" o \"immagine prodotto.\" Approfondisci con la nostra guida sulla [pagina prodotto](/academy/product-page-seo).\n\nLe pagine prodotto con piu immagini dovrebbero avere testo alternativo variato per ogni foto. La vista frontale, la vista posteriore, i dettagli ravvicinati e le immagini lifestyle mostrano ciascuno qualcosa di diverso, e il testo alternativo dovrebbe riflettere queste differenze.\n\nPer le immagini specifiche delle varianti -- diversi colori, taglie o configurazioni -- includi l'attributo della variante nel testo alternativo. \"Scarpone da trekking uomo in verde foresta, taglia 43\" e piu utile di un generico \"scarpone da trekking.\"\n\nEvita di lasciare il testo alternativo vuoto su qualsiasi immagine prodotto. Gli attributi alt vuoti dicono agli screen reader di saltare completamente l'immagine, il che e appropriato per le immagini decorative ma mai per le foto di prodotti.",
          items: [
            "Scrivi testo alternativo che includa naturalmente il nome del prodotto e descrittori visivi chiave",
            "Varia il testo alternativo tra le molteplici immagini prodotto per catturare diverse query di ricerca",
            "Includi attributi specifici delle varianti come colore, taglia o materiale nel testo alternativo",
            "Non lasciare mai vuoto il testo alternativo delle immagini prodotto ne duplicarlo su tutte le immagini di una pagina",
          ],
        },
        {
          title: "Denominazione dei file e URL delle immagini",
          content:
            "I nomi dei file delle immagini sono un segnale di ranking per Google Immagini che la maggior parte dei negozi e-commerce ignora completamente. Il nome file predefinito della fotocamera \"DSC_4821.jpg\" non dice nulla ai motori di ricerca sul contenuto dell'immagine. Rinominare quel file in \"borsa-tracolla-pelle-rossa-donna-fronte.jpg\" prima del caricamento da a Google un segnale aggiuntivo.\n\nUsa trattini per separare le parole nei nomi dei file, non show o spazi. Google tratta i trattini come separatori di parole. Gli show sono trattati come connettori di parole. Gli spazi vengono convertiti in \"%20\" negli URL.\n\nMantieni i nomi dei file descrittivi ma concisi. Includi il nome del prodotto, un attributo chiave come colore o materiale, e il tipo di vista. Evita di riempire i nomi dei file con parole chiave eccessive. Punta a tre-sei parole descrittive.\n\nPer i negozi con grandi cataloghi, automatizza la denominazione dei file usando uno schema coerente. Costruisci una convenzione di denominazione come: {nome-prodotto}-{colore}-{vista}.{formato} e applicala programmaticamente.\n\nGli URL delle immagini dovrebbero anche essere puliti e descrittivi. Evita strutture URL che posizionano le immagini dietro stringhe hash casuali.",
          tip: "Crea un foglio di calcolo modello per la denominazione dei file per il tuo team di fotografia prodotti. Includi colonne per nome del prodotto, colore, materiale e tipo di vista, con una formula che generi il nome file standardizzato.",
        },
        {
          title: "Immagini responsive e caricamento differito",
          content:
            "I siti e-commerce moderni devono servire immagini di dimensioni appropriate per ogni dispositivo e dimensione dello schermo. Un'immagine hero di 3000x3000 pixel progettata per un display retina desktop spreca banda quando caricata su un telefono mobile con uno schermo largo 375 pixel. L'attributo srcset in HTML ti permette di specificare piu dimensioni di immagine.\n\nImplementa srcset con almeno tre breakpoint per le immagini prodotto: una versione piccola per mobile (circa 400px di larghezza), una media per tablet (circa 800px) e una grande per desktop (circa 1200px). Per le pagine di dettaglio prodotto con zoom, fornisci una versione extra-large (2000-3000px) che si carica solo quando la funzione zoom viene attivata.\n\nIl caricamento differito posticipa il caricamento delle immagini fuori schermo fino a quando l'utente scorre vicino ad esse. Per le pagine prodotto con piu immagini sotto il fold, il caricamento differito puo ridurre il peso iniziale della pagina del 50% o piu. Implementa il caricamento differito usando l'attributo nativo loading=\"lazy\" sui tag img.\n\nNon caricare in modo differito l'immagine prodotto principale o l'elemento LCP. L'immagine prodotto principale visibile al primo caricamento della pagina dovrebbe essere caricata immediatamente con fetchpriority=\"high\".\n\nUsa attributi width e height su tutti i tag img per prevenire il Cumulative Layout Shift (CLS). Quando un browser conosce le dimensioni di un'immagine prima che si carichi, puo riservare la quantita corretta di spazio.",
          items: [
            "Servi piu dimensioni di immagine usando srcset per corrispondere alle larghezze degli schermi dei dispositivi",
            "Carica in modo differito tutte le immagini sotto il fold con loading='lazy' per ridurre il peso iniziale della pagina",
            "Carica immediatamente l'immagine prodotto principale con fetchpriority='high' per ottimizzare LCP",
            "Includi sempre attributi width e height sui tag img per prevenire lo spostamento del layout (CLS)",
          ],
          callout: {
            title: "LCP-Prioritätsregel",
            text: "Das Hauptproduktbild niemals lazy-loaden. Verwenden Sie fetchpriority=\"high\" fuer das erste sichtbare Bild, um die LCP-Zeit zu minimieren und bessere Core-Web-Vitals-Werte zu erzielen.",
          },
        },
        {
          title: "SEO delle immagini per pagine listing prodotti e sitemap",
          content:
            "Le pagine listing prodotti (pagine di categoria) mostrano dozzine di miniature di prodotti in una griglia. Ogni miniatura e un'opportunita di ranking in Google Immagini, ma solo se le immagini sono correttamente ottimizzate. Assicurati che ogni miniatura prodotto nella tua griglia abbia un testo alternativo unico che includa il nome del prodotto.\n\nLe dimensioni delle miniature nelle pagine di categoria dovrebbero essere coerenti e compresse in modo appropriato. Non c'e bisogno di caricare immagini a dimensione piena in una griglia dove vengono visualizzate a 200x200 o 300x300 pixel. Genera versioni miniatura dedicate alla dimensione di visualizzazione esatta. Questo da solo puo ridurre il peso delle pagine di categoria del 70-80%.\n\nCrea una sitemap delle immagini o includi tag immagine nella tua sitemap XML esistente. Una sitemap delle immagini dice a Google di tutte le immagini sul tuo sito e fornisce metadati come didascalie. Per i siti e-commerce, la sitemap delle immagini dovrebbe includere ogni immagine prodotto con il suo testo alternativo associato e l'URL della pagina prodotto.\n\nMonitora le tue prestazioni di ricerca immagini in Google Search Console. Il rapporto sulle Prestazioni puo essere filtrato per mostrare solo il traffico da Google Immagini. Usa questi dati per identificare opportunita.\n\nConsidera l'implementazione di dati strutturati per le immagini dei prodotti. Lo schema Product supporta la proprieta \"image\", che dice a Google quali immagini sono associate al prodotto.",
          tip: "Esegui un audit SEO delle immagini trimestrale: crawla il tuo sito per identificare immagini prodotto con testo alternativo mancante, dimensioni di file eccessive, nomi file predefiniti della fotocamera e attributi srcset mancanti. Dai priorita alla correzione delle immagini sulle tue 100 pagine prodotto e categoria principali per volume di traffico.",
        },
      ],
      navLabels: {
        previous: "Precedente",
        next: "Successivo",
      },
    },
    nl: {
      badge: "On-page SEO",
      heading: "Beeldoptimalisatie voor Producten",
      intro:
        "Productafbeeldingen zijn de brug tussen browsen en kopen in e-commerce. Ze vertegenwoordigen ook een van de grootste onbenutte SEO-kansen voor de meeste webshops. Google Afbeeldingen genereert 10-25% van het organisch verkeer voor visueel georientereerde productcategorieen zoals mode, woondecoratie en elektronica. Naast beeldzoekverkeer zijn slecht geoptimaliseerde afbeeldingen de belangrijkste oorzaak van trage laadtijden, wat zowel rankings als conversiepercentages direct schaadt. Een uitgebreide beeldoptimalisatiestrategie behandelt bestandsformaten, compressie, alt-tekst, bestandsnaamgeving, lazy loading en responsieve groottebepaling.\n\nOns onderwerp over [sitesnelheidsoptimalisatie](/academy/site-speed-optimization) behandelt deze technieken uitgebreid.",
      readTime: "9 min leestijd",
      sections: [
        {
          title: "Waarom beeldoptimalisatie belangrijk is voor e-commerce SEO",
          content:
            "Afbeeldingen vormen het grootste deel van het paginagewicht op de meeste e-commerce sites. Een enkele productpagina met zes hoge-resolutie foto's kan zonder optimalisatie gemakkelijk 10-15 MB wegen, resulterend in laadtijden van vijf seconden of meer op mobiele verbindingen. Google's Core Web Vitals -- met name Largest Contentful Paint (LCP) -- worden direct beinvloed door bestandsgroottes van afbeeldingen.\n\nNaast paginasnelheid creeren productafbeeldingen directe zoekverkeermogelijkheden via Google Afbeeldingen. Wanneer een shopper zoekt naar \"mid-century modern salontafel\" in Google Afbeeldingen en jouw productfoto verschijnt met een geoptimaliseerde alt-tag en beschrijvende bestandsnaam, klikken ze direct naar je productpagina.\n\nBeeldoptimalisatie verbetert ook je productvermeldinmen in Google Shopping en visuele zoekresultaten. Google Lens en vergelijkbare visuele zoektools groeien snel, en producten met correct geoptimaliseerde afbeeldingen hebben meer kans om in deze resultaten te verschijnen.\n\nHet samengestelde effect van beeldoptimalisatie over een grote catalogus is aanzienlijk. Het verminderen van de gemiddelde beeldgrootte met 60% over 5.000 productpagina's verbetert de laadsnelheid van elke pagina, wat rankings site-breed verhoogt en bouncepercentages verlaagt.\n\nOnze gids over [on-page SEO voor ecommerce](/blog/on-page-seo-for-ecommerce) behandelt deze optimalisaties uitgebreid.",
          items: [
            "Afbeeldingen vormen typisch 60-80% van het totale paginagewicht op e-commerce productpagina's",
            "Google Afbeeldingen genereert 10-25% van het organisch verkeer voor visueel georientereerde productcategorieen",
            "Core Web Vitals, met name LCP, worden direct beinvloed door niet-geoptimaliseerde productafbeeldingen",
            "Visueel zoeken via Google Lens groeit en geeft de voorkeur aan correct geoptimaliseerde productafbeeldingen",
          ],
        },
        {
          title: "Bestandsformaten en compressietechnieken",
          content:
            "Het kiezen van het juiste beeldformaat is de basis van beeldoptimalisatie. Voor productfotografie domineren drie formaten: JPEG, PNG en WebP. JPEG is de traditionele keuze voor foto's met complexe kleurovergangen. PNG is beter voor afbeeldingen die transparantie vereisen. WebP, ontwikkeld door Google, levert 25-35% kleinere bestandsgroottes dan JPEG bij gelijkwaardige visuele kwaliteit.\n\nModerne e-commerce sites zouden WebP-afbeeldingen als primair formaat moeten serveren, met JPEG-fallbacks voor oudere browsers. Het HTML picture-element of server-side content negotiation kan WebP aan compatibele browsers en JPEG aan anderen automatisch serveren. AVIF is een nog nieuwer formaat dat 20% betere compressie bereikt dan WebP.\n\nCompressie-instellingen zijn even belangrijk als formaatkeuze. Een JPEG opgeslagen op 100% kwaliteit is veel groter dan nodig -- de meeste productafbeeldingen zien er identiek uit voor het menselijk oog op 75-85% kwaliteit maar zijn 40-60% kleiner. Tools zoals ShortPixel, TinyPNG, Squoosh en ImageOptim kunnen afbeeldingen in batch comprimeren voor upload.\n\nComprimeer afbeeldingen niet meerdere keren. Elke ronde van lossy compressie verslechtert de kwaliteit verder met afnemende groottereducties. Begin met het origineel van de hoogste kwaliteit, comprimeer een keer naar je doelkwaliteitsniveau en bewaar het origineel apart.",
          items: [
            "Serveer WebP als primair formaat met JPEG-fallbacks voor maximale compressie en compatibiliteit",
            "Comprimeer JPEG's naar 75-85% kwaliteit -- visueel identiek aan 100% maar 40-60% kleiner",
            "Gebruik geautomatiseerde compressietools of CDN-gebaseerde optimalisatie voor grote productcatalogussen",
            "Comprimeer nooit een al gecomprimeerde afbeelding -- begin altijd vanaf het originele hoge-kwaliteitsbestand",
          ],
          tip: "Stel automatische WebP-conversie in je beeldpipeline in. De meeste CDN's zoals Cloudinary, Cloudflare en Imgix kunnen WebP automatisch serveren aan ondersteunde browsers zonder beeldURL's in je HTML te wijzigen. Deze enkele wijziging kan de totale beeldbelasting met 25-35% verminderen over je hele site.",
          image: {
            src: "/images/academy/nl/image-format-comparison.svg",
            alt: "Vergleichstabelle der Dateigrößeneinsparungen bei JPEG, WebP und AVIF für Produktfotografie",
            caption: "Der Wechsel von JPEG 100% zu WebP spart 73% Dateigröße. Bei einer Produktseite mit 6 Bildern sind das über 10 MB weniger Seitengewicht.",
          },
          callout: {
            title: "Format-Wirkung",
            text: "WebP liefert 25-35% kleinere Dateien als JPEG bei gleichwertiger visueller Qualität und hat 97% Browser-Unterstützung. Eine 6-Bilder-Produktseite sinkt von 14,4 MB auf 3,9 MB und verkürzt die Ladezeit von über 5 Sekunden auf unter 2 Sekunden auf Mobilgeräten.",
          },
        },
        {
          title: "Alt-tekst best practices voor productafbeeldingen",
          content:
            "Alt-tekst (alternatieve tekst) dient twee kritieke doelen: het beschrijft afbeeldingen voor visueel beperkte gebruikers die afhankelijk zijn van schermlezers, en het biedt zoekwoordcontext die zoekmachines gebruiken voor beeldranking. Elke productafbeelding op je site heeft unieke, beschrijvende alt-tekst nodig die nauwkeurig beschrijft wat de afbeelding toont.\n\nVoor de primaire productafbeelding schrijf je alt-tekst die de productnaam en een belangrijk visueel detail bevat. \"Dames rode leren crossbody tas met gouden kettingriem - vooraanzicht\" is veel nuttiger dan \"tas\" of \"productafbeelding.\"\n\nProductpagina's met meerdere afbeeldingen zouden gevarieerde alt-tekst voor elke foto moeten hebben. Het vooraanzicht, achteraanzicht, detailshots en lifestyle-afbeeldingen tonen elk iets anders, en de alt-tekst zou deze verschillen moeten weerspiegelen.\n\nVoor variant-specifieke afbeeldingen -- verschillende kleuren, maten of configuraties -- neem je het variant-attribuut op in de alt-tekst. \"Heren wandelschoen in bosgroen, maat 43\" is nuttiger dan een generieke \"wandelschoen.\"\n\nVermijd het leeg laten van alt-tekst op productafbeeldingen. Lege alt-attributen vertellen schermlezers om de afbeelding volledig over te slaan, wat geschikt is voor decoratieve afbeeldingen maar nooit voor productfoto's.\n\nOns onderwerp over [productpagina-SEO](/academy/product-page-seo) behandelt deze optimalisaties uitgebreid.",
          items: [
            "Schrijf alt-tekst die op natuurlijke wijze de productnaam en belangrijke visuele beschrijvers bevat",
            "Varieer alt-tekst over meerdere productafbeeldingen om verschillende zoekopdrachten te vangen",
            "Neem variant-specifieke attributen zoals kleur, maat of materiaal op in alt-tekst",
            "Laat alt-tekst van productafbeeldingen nooit leeg en dupliceer het niet over alle afbeeldingen op een pagina",
          ],
        },
        {
          title: "Bestandsnaamgeving en beeld-URL's",
          content:
            "Bestandsnamen van afbeeldingen zijn een rankingsignaal voor Google Afbeeldingen dat de meeste webshops volledig negeren. De standaard camerabestandsnaam \"DSC_4821.jpg\" vertelt zoekmachines niets over de beeldinhoud. Het hernoemen van dat bestand naar \"dames-rode-leren-crossbody-tas-voor.jpg\" voor het uploaden geeft Google een extra signaal.\n\nGebruik koppeltekens om woorden in bestandsnamen te scheiden, geen shows of spaties. Google behandelt koppeltekens als woordscheidingstekens. Underscores worden behandeld als woordverbinders. Spaties worden omgezet naar \"%20\" in URL's.\n\nHoud bestandsnamen beschrijvend maar beknopt. Neem de productnaam, een belangrijk attribuut zoals kleur of materiaal, en het type weergave op. Vermijd het volstoppen van bestandsnamen met buitensporige zoekwoorden. Streef naar drie tot zes beschrijvende woorden.\n\nVoor winkels met grote catalogussen automatiseer je de bestandsnaamgeving met een consistent patroon. Bouw een naamgevingsconventie zoals: {productnaam}-{kleur}-{weergave}.{formaat} en pas het programmatisch toe.\n\nBeeld-URL's moeten ook schoon en beschrijvend zijn. Vermijd URL-structuren die afbeeldingen achter willekeurige hash-strings plaatsen.",
          tip: "Maak een bestandsnaamgeving-sjabloon spreadsheet voor je productfotografieteam. Neem kolommen op voor productnaam, kleur, materiaal en weergavetype, met een formule die de gestandaardiseerde bestandsnaam genereert.",
        },
        {
          title: "Responsieve afbeeldingen en lazy loading",
          content:
            "Moderne e-commerce sites moeten afbeeldingen van geschikte grootte serveren voor elk apparaat en schermgrootte. Een 3000x3000 pixel hero-afbeelding ontworpen voor een desktop retina-scherm verspilt bandbreedte wanneer geladen op een mobiele telefoon met een 375 pixel breed scherm. Het srcset-attribuut in HTML laat je meerdere beeldgroottes specificeren.\n\nImplementeer srcset met minstens drie grootte-breakpoints voor productafbeeldingen: een kleine versie voor mobiel (ongeveer 400px breed), een medium voor tablets (ongeveer 800px breed) en een grote voor desktop (ongeveer 1200px breed). Voor productdetailpagina's met zoomfunctie voorzie je een extra grote versie (2000-3000px) die alleen laadt wanneer de zoomfunctie wordt geactiveerd.\n\nLazy loading stelt het laden van off-screen afbeeldingen uit totdat de gebruiker er dichtbij scrollt. Voor productpagina's met meerdere afbeeldingen onder de fold kan lazy loading het initiele paginagewicht met 50% of meer verminderen. Implementeer lazy loading met het native loading=\"lazy\" attribuut op img-tags.\n\nLazy load niet de primaire productafbeelding of het LCP-element. De hoofdproductafbeelding zichtbaar bij het eerste laden van de pagina moet eager geladen worden met fetchpriority=\"high\".\n\nGebruik width- en height-attributen op alle img-tags om Cumulative Layout Shift (CLS) te voorkomen. Wanneer een browser de afmetingen van een afbeelding kent voordat deze laadt, kan het de juiste hoeveelheid ruimte reserveren.",
          items: [
            "Serveer meerdere beeldgroottes via srcset om aan te sluiten bij schermbreedte van apparaten",
            "Lazy load alle afbeeldingen onder de fold met loading='lazy' om het initiele paginagewicht te verminderen",
            "Laad de primaire productafbeelding eager met fetchpriority='high' om LCP te optimaliseren",
            "Neem altijd width- en height-attributen op in img-tags om layout shift (CLS) te voorkomen",
          ],
          callout: {
            title: "LCP-Prioritätsregel",
            text: "Das Hauptproduktbild niemals lazy-loaden. Verwenden Sie fetchpriority=\"high\" fuer das erste sichtbare Bild, um die LCP-Zeit zu minimieren und bessere Core-Web-Vitals-Werte zu erzielen.",
          },
        },
        {
          title: "Beeld-SEO voor productoverzichtpagina's en sitemaps",
          content:
            "Productoverzichtpagina's (categoriepagina's) tonen tientallen productminiaturen in een raster. Elke miniatuur is een rankingkans in Google Afbeeldingen, maar alleen als de afbeeldingen correct geoptimaliseerd zijn. Zorg ervoor dat elke productminiatuur in je raster unieke alt-tekst heeft die de productnaam bevat.\n\nMiniatuurgroottes op categoriepagina's moeten consistent en gepast gecomprimeerd zijn. Het is niet nodig om full-size productafbeeldingen te laden in een raster waar ze worden weergegeven op 200x200 of 300x300 pixels. Genereer speciale miniatuurversies op de exacte weergavegrootte. Dit alleen kan het paginagewicht van categoriepagina's met 70-80% verminderen.\n\nMaak een afbeeldingssitemap of neem afbeeldingstags op in je bestaande XML-sitemap. Een afbeeldingssitemap vertelt Google over alle afbeeldingen op je site en biedt metadata zoals bijschriften. Voor e-commerce sites zou de afbeeldingssitemap elke productafbeelding moeten bevatten met de bijbehorende alt-tekst en de productpagina-URL.\n\nMonitor je beeldzoekprestaties in Google Search Console. Het Prestatieoverzicht kan gefilterd worden om alleen Google Afbeeldingen-verkeer te tonen. Gebruik deze data om kansen te identificeren.\n\nOverweeg het implementeren van gestructureerde data voor productafbeeldingen. Het Product-schema ondersteunt de \"image\" eigenschap, die Google vertelt welke afbeeldingen bij het product horen.",
          tip: "Voer elk kwartaal een beeld-SEO-audit uit: crawl je site om productafbeeldingen te identificeren met ontbrekende alt-tekst, te grote bestandsgroottes, standaard camerabestandsnamen en ontbrekende srcset-attributen. Geef prioriteit aan het fixen van afbeeldingen op je top 100 product- en categoriepagina's op basis van verkeersvolume.",
        },
      ],
      navLabels: {
        previous: "Vorige",
        next: "Volgende",
      },
    },
  },
};
