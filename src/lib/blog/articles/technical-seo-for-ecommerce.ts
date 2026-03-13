import type { BlogArticle } from "../types";

export const technicalSeoForEcommerce: BlogArticle = {
  slug: "technical-seo-for-ecommerce",
  title: "Technical SEO for Ecommerce: Fix Key Issues",
  description: "Fix the technical SEO issues that prevent ecommerce stores from ranking. Covers crawl budget, site speed, canonicals, sitemaps, and Core Web Vitals.",
  category: "technical",
  publishDate: "2025-06-22",
  readingTime: 14,
  author: "Fabian van Til",
  authorRole: "CEO at EcomSEO",
  authorSlug: "fabian-van-til",
  primaryKeyword: "technical seo for ecommerce",
  secondaryKeywords: [
    "ecommerce technical seo",
    "technical seo for online stores",
    "ecommerce site technical optimization",
  ],
  sections: [
    {
      heading: "Technical SEO is the foundation you cannot skip",
      body: [
        "You can write the best product descriptions in your industry and build links from every major publication. None of it matters if Google cannot crawl and index your pages properly. Technical SEO is the foundation that everything else depends on, and ecommerce stores have more technical complexity than almost any other type of website.",
        "A typical content site has a few hundred pages with a simple structure. An ecommerce store might have 50,000 URLs between products, categories, filter combinations, pagination, and internal search results. Every one of those URLs is a potential problem if it is not handled correctly. Crawl budget gets wasted on junk URLs. Duplicate content confuses Google about which page to rank. Slow page speeds push customers away before they even see your products.",
        "We audit dozens of ecommerce stores every year, and technical issues are the number one reason stores underperform in organic search. Not weak content. Not insufficient links. Technical problems that prevent Google from doing its job. The good news is that fixing technical issues often produces the fastest and most measurable SEO gains. We have seen stores gain 20-40% organic traffic within 6 weeks of resolving major technical debt. Our [ecommerce SEO audit guide](/blog/ecommerce-seo-audit) walks through exactly how to find these issues.",
      ],
    },
    {
      heading: "Crawl budget management for large catalogs",
      body: [
        "Google allocates a crawl budget to every site. This is the number of pages Googlebot will crawl in a given time period. For small sites with a few hundred pages, crawl budget does not matter. For ecommerce stores with tens of thousands of URLs, it is a real constraint.",
        "The problem is not that Google will not crawl your site. The problem is what Google chooses to crawl. If your site has 50,000 URLs but only 5,000 are valuable (products and categories), and the other 45,000 are filter combinations, internal search results, and parameter variations, Google might spend most of its crawl budget on the junk URLs. Your actual product pages get crawled less frequently, which means they get indexed slower and updates take longer to appear in search results.",
        "Start by auditing what Google is actually crawling. In Google Search Console, check the Crawl Stats report under Settings. Look at the pages crawled per day and the response codes. If you see a high percentage of crawled URLs returning 404s or redirects, that is wasted budget. Then check your server logs if you have access. Server logs show you every single URL Googlebot requests, which is the most accurate view of crawl behavior.",
        "Block wasteful URLs from crawling using robots.txt. Common URLs to block on ecommerce stores include: internal search result pages (/search?q=), cart and checkout URLs (/cart, /checkout), account pages (/account, /login), and filter parameter combinations (/category?color=red&size=m). Be careful not to block CSS, JavaScript, or image files that Googlebot needs for rendering.",
        "Clean up your URL space. If faceted navigation has created 200,000 parameter URLs, these need to be either blocked in robots.txt or served with noindex tags. If your platform generates session IDs in URLs, those need to be removed or canonicalized. The goal is to reduce the total crawlable URL space to only the pages you actually want indexed. On a recent audit, we found a fashion retailer with 380,000 indexed URLs for a store with 4,200 products. After cleaning up filter URLs, session parameters, and orphaned pages, we reduced the index to 12,000 URLs. Organic traffic increased 28% in six weeks because Googlebot was finally spending its crawl budget on the right pages.",
      ],
    },
    {
      heading: "Site speed optimization for ecommerce",
      body: [
        "Page speed is a direct ranking factor and an indirect one. Google uses Core Web Vitals as a ranking signal. But speed also affects bounce rate and conversion rate, which influence rankings through user behavior signals. A 1-second delay in page load time can reduce conversions by 7%, according to data from Akamai.",
        "Start with the big wins. Image optimization is almost always the single biggest speed improvement for ecommerce stores. Convert images to WebP, compress them, and serve them at the correct dimensions for each device. If your product images average 500KB and you reduce them to 80KB, that is an 84% reduction in image payload across the entire site.",
        "Enable browser caching and CDN delivery. A content delivery network serves your static assets (images, CSS, JavaScript) from servers physically close to the user. This reduces latency from 200-500ms on a single origin server to 20-50ms from a CDN edge node. Cloudflare, Fastly, and AWS CloudFront all work well for ecommerce.",
        "Minimize render-blocking resources. If your page loads 15 JavaScript files and 8 CSS files before it can render any content, the user stares at a blank screen for 3-5 seconds. Defer non-critical JavaScript. Inline critical CSS (the styles needed for above-the-fold content) and load the rest asynchronously. Remove unused CSS and JavaScript entirely if possible.",
        "Third-party scripts are a common speed killer on ecommerce stores. Chat widgets, analytics tools, retargeting pixels, social share buttons, and review widgets each add 100-500ms to page load. Audit every third-party script. Remove any that are not actively providing value. Load the remaining ones asynchronously or after the main content has rendered. We audited one Shopify store that loaded 23 third-party scripts on every page. After removing 9 unused scripts and deferring 8 others, their LCP dropped from 4.8 seconds to 2.1 seconds on mobile. Our [Shopify SEO guide](/blog/shopify-ecommerce-seo) covers platform-specific speed optimization in detail.",
        "Test your actual user experience, not just lab scores. PageSpeed Insights shows lab data (simulated) and field data (real user measurements from CrUX). Field data is what Google uses for ranking. A page might score 90 in lab tests but have a 4-second LCP in the real world because of network conditions and device capabilities. Focus on the field data and test on mobile, because that is what most of your customers use.",
      ],
    },
    {
      heading: "Mobile-first indexing: what ecommerce stores get wrong",
      body: [
        "Google has used mobile-first indexing since 2023. This means Google crawls and indexes the mobile version of your site, not the desktop version. If your mobile site is missing content, links, or structured data that exists on the desktop version, Google does not see it.",
        "The most common mobile-first issue we find on ecommerce stores is hidden content. Desktop versions show full product descriptions, specifications, and reviews in the visible page area. Mobile versions hide them behind tabs, accordions, or 'read more' toggles to save screen space. Google has said it treats content in tabs and accordions normally, but our testing shows that content in the primary visible area performs better than content that requires interaction to reveal.",
        "Check that your mobile site includes all the content from your desktop site. Run a side-by-side comparison using Chrome DevTools device emulation. Verify that structured data, canonical tags, and meta tags are identical on mobile and desktop. If you use a separate mobile site (m.yourstore.com), consider migrating to a responsive design, because separate mobile sites create maintenance and parity issues.",
        "Mobile usability issues directly hurt rankings. Check Google Search Console's Mobile Usability report for errors. Common problems include text too small to read (under 16px), clickable elements too close together (buttons need at least 48px tap targets with 8px spacing between them), and content wider than the screen (causing horizontal scrolling). Fix every error flagged in this report.",
        "Test your checkout flow on mobile. If the mobile checkout has usability issues (small form fields, confusing layouts, slow loading), your mobile conversion rate suffers. Google notices when users consistently bounce from your pages on mobile, and it affects your rankings for mobile searches, which account for 60-70% of ecommerce traffic.",
      ],
    },
    {
      heading: "Canonical tags and duplicate content",
      body: [
        "Duplicate content is the most pervasive technical SEO problem in ecommerce. Products that appear in multiple categories. Filter URLs that create variations of the same page. Product variants with separate URLs. Pagination creating similar pages. HTTP and HTTPS versions. WWW and non-WWW versions. The duplicate content surface area on an ecommerce store is enormous.",
        "Canonical tags are your primary defense. Every indexable page should have a self-referencing canonical tag in the head section. For pages with multiple URL variations (like filter URLs or variant URLs), the canonical should point to the preferred version. If /shoes?color=blue and /shoes?color=red both exist but you want /shoes to be the indexed version, both parameter URLs get a canonical pointing to /shoes.",
        "Common canonical mistakes we fix regularly. Using relative URLs instead of absolute URLs in canonical tags (use https://yourstore.com/page not /page). Setting all paginated pages to canonical to page 1 (page 2 should canonical to page 2, not page 1, because they show different products). Canonicalizing pages to URLs that are themselves noindexed or redirected (creating canonical chains). Having conflicting signals where the canonical says one thing but the sitemap includes a different URL.",
        "For product variants, decide on a canonical strategy and apply it consistently. If each color variant has a separate URL, pick the most popular color as the canonical. Or canonical all variants to the main product URL without any color parameter. Either approach works, but mixing strategies across the catalog creates confusion.",
        "Audit your canonicals quarterly. Crawl the site with Screaming Frog and check the canonical column. Look for pages with no canonical, pages with incorrect canonicals, and pages where the canonical URL returns a non-200 status code. On a recent client audit, we found 1,200 product pages where canonicals pointed to deleted products. Each of those 1,200 pages was effectively telling Google to ignore them. Fixing those canonicals recovered rankings for hundreds of long-tail product keywords.",
      ],
    },
    {
      heading: "XML sitemaps for large ecommerce catalogs",
      body: [
        "An XML sitemap is a roadmap that tells Google what pages exist on your site and which ones are most important. For ecommerce stores with thousands of pages, a well-structured sitemap can meaningfully improve how quickly new products get discovered and indexed.",
        "Split your sitemap into multiple files by page type. Create separate sitemaps for product pages, category pages, blog posts, and other content pages. This makes it easier to diagnose indexing issues (if products are not getting indexed, you can check the product sitemap specifically) and keeps each file under the 50,000 URL / 50MB limit.",
        "Only include indexable, canonical URLs in your sitemap. Do not include URLs that have noindex tags, URLs that redirect, URLs blocked by robots.txt, or non-canonical URLs. Your sitemap should be a clean list of every page you want Google to index. If your sitemap has 80,000 URLs but only 15,000 are indexable, Google loses trust in the accuracy of your sitemap and may deprioritize crawling it.",
        "Use the lastmod tag accurately. If you update product prices or availability daily, the lastmod dates should reflect actual changes. Do not set all lastmod dates to today's date to try to game freshness signals. Google has confirmed they ignore lastmod if the data is unreliable. But accurate lastmod dates help Google prioritize crawling recently changed pages.",
        "Submit your sitemap in Google Search Console and monitor the index coverage. The Sitemaps report shows how many submitted URLs were indexed. If you submitted 10,000 product URLs and only 6,000 are indexed, investigate the missing 4,000. They might have thin content, canonical issues, or quality problems preventing indexation.",
        "For very large stores (100,000+ products), consider using sitemap index files and dynamically generating sitemaps. Static sitemaps that need manual regeneration every time a product is added or removed will always fall out of date. Most ecommerce platforms have plugins or built-in features for dynamic sitemap generation. Verify that yours actually includes new products within 24 hours of publication.",
      ],
    },
    {
      heading: "Robots.txt configuration for ecommerce",
      body: [
        "Your robots.txt file is a blunt instrument, but it is an important one. It tells crawlers which parts of your site to avoid, and getting it wrong can either waste crawl budget (too permissive) or block important pages (too restrictive).",
        "A good ecommerce robots.txt blocks: internal search results (/search), cart and checkout pages (/cart, /checkout, /account), admin and staging areas, tag pages that duplicate category functionality, and common parameter patterns that generate junk URLs. It allows: all product pages, category pages, content pages, CSS and JavaScript files (Google needs these to render your pages), and images.",
        "Here is a mistake that costs stores dearly: blocking JavaScript or CSS files in robots.txt. Some developers block /assets/ or /static/ directories to keep crawlers away from template files. But Google needs to load your CSS and JavaScript to render your pages. If Googlebot cannot render a page, it cannot evaluate the content properly, and rankings suffer. Test your robots.txt by using the URL Inspection tool in Search Console. If Google cannot render the page correctly, you have likely blocked something it needs.",
        "Use the Disallow directive carefully. A Disallow for /shoes/ blocks /shoes/, /shoes/nike/, /shoes/sale/, and every URL that starts with /shoes/. If you meant to block only /shoes/internal-report/ but wrote Disallow: /shoes/, you just blocked your entire shoes category. Always test your robots.txt changes using Google's robots.txt tester before deploying them live.",
        "Include a Sitemap directive at the bottom of your robots.txt pointing to your XML sitemap (or sitemap index). This helps crawlers find your sitemap even if they have not been to Google Search Console. The format is simple: Sitemap: https://yourstore.com/sitemap.xml.",
      ],
    },
    {
      heading: "Structured data implementation at scale",
      body: [
        "Structured data (schema markup) helps Google understand what your pages contain and can generate rich results that improve click-through rates from search. For ecommerce, the relevant schema types are Product, BreadcrumbList, FAQPage, Organization, and potentially LocalBusiness if you have physical stores.",
        "Implementing schema at scale requires a template-based approach. You cannot manually code schema for 5,000 product pages. Instead, build schema templates into your page templates and populate them dynamically from your product data. Your product template should pull name, price, availability, SKU, brand, images, and review data directly from your product database and output it as JSON-LD in the page head.",
        "JSON-LD is the recommended format over Microdata or RDFa. It lives in a script tag in the head or body of the page and is easier to implement, debug, and maintain. Google explicitly recommends JSON-LD for most schema types. Place the JSON-LD script tag in the head section for fastest processing. Our [schema generator tool](/tools/schema-generator) creates valid JSON-LD for Product, BreadcrumbList, and other ecommerce schema types.",
        "Test at the template level, not just the page level. If your product schema template has a bug, it affects every product page. Run the Rich Results Test on one product from each template variation. Then monitor the Enhancements section in Search Console for site-wide issues. Common errors include missing required fields (like image or offers), invalid values (a price of '$0.00' on a product that is actually $49.99), and markup that does not match the visible page content.",
        "Go beyond the basics. Product schema with just name and price is fine, but adding aggregateRating, review, brand, GTIN, and detailed offers data (including shipping and return policies) gives you richer search results. Breadcrumb schema on every page replaces the default URL display with a readable breadcrumb trail. FAQ schema on category pages can win additional SERP real estate. Each layer of structured data gives Google more to work with and gives you more opportunities to stand out in search results.",
      ],
    },
    {
      heading: "Core Web Vitals for ecommerce stores",
      body: [
        "Core Web Vitals are Google's metrics for page experience: Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). They are confirmed ranking factors, and ecommerce stores face unique challenges with each one.",
        "LCP measures how fast the largest visible element loads. On product pages, this is usually the main product image. On category pages, it is often the banner image or the first product image in the grid. Target: under 2.5 seconds. To improve LCP, optimize your hero images (WebP format, proper sizing, preload the image using a link rel=preload tag in the head), use a CDN, and minimize render-blocking resources. Server response time also impacts LCP, so ensure your hosting can handle traffic spikes without slowing down.",
        "INP measures responsiveness to user interactions. On ecommerce sites, the most common INP offenders are: filter interactions that trigger full page reloads, add-to-cart buttons that freeze the page while processing JavaScript, and search autocomplete that blocks the main thread. Target: under 200 milliseconds. Optimize by moving heavy JavaScript to web workers, using requestIdleCallback for non-critical tasks, and debouncing input handlers on search and filter components.",
        "CLS measures visual stability. Ecommerce sites are notorious for layout shift caused by: images loading without explicit width and height attributes (the content jumps when the image appears), banners or promotional bars injected at the top of the page after load, and font swaps where custom fonts load after the page renders and resize all text. Target: under 0.1. Fix by setting explicit dimensions on all images and ad slots, reserving space for dynamic content that loads after the initial render, and using font-display: optional or font-display: swap with size-adjusted fallback fonts.",
        "Monitor Core Web Vitals in two places: the Core Web Vitals report in Search Console (which uses real user data) and PageSpeed Insights for individual page testing. Focus on the real user data because that is what Google uses for ranking decisions. Lab scores are useful for debugging but do not reflect actual user experience on varying devices and networks.",
        "Prioritize your top landing pages. You do not need perfect CWV scores across every URL. Focus on the pages that drive the most organic traffic: your homepage, top [category pages](/blog/ecommerce-category-page-seo), and top [product pages](/blog/seo-for-ecommerce-product-pages). Improving CWV on your top 50 pages by traffic will have a bigger ranking impact than marginal improvements across 5,000 less-visited pages.",
      ],
    },
  ],
};
