import type { BlogArticle } from "../types";

export const magentoEcommerceSeo: BlogArticle = {
  slug: "magento-ecommerce-seo",
  title: "Magento ecommerce SEO: optimize your store for search",
  description:
    "Fix common Magento SEO problems including layered navigation, URL rewrites, and site speed. Platform-specific tips for Magento 2 and Adobe Commerce stores.",
  category: "platforms",
  publishDate: "2025-07-01",
  readingTime: 11,
  author: "Fabian van Til",
  authorRole: "CEO at EcomSEO",
  authorSlug: "fabian-van-til",
  primaryKeyword: "magento ecommerce seo",
  secondaryKeywords: [
    "magento seo",
    "magento seo optimization",
    "adobe commerce seo",
  ],
  sections: [
    {
      heading: "Magento has SEO potential but it takes work to unlock",
      body: [
        "Magento (now Adobe Commerce) is one of the most flexible ecommerce platforms available. It powers stores doing millions in annual revenue and handles product catalogs with 100,000+ SKUs. But that flexibility comes with complexity, and from an SEO perspective, Magento out of the box is a mess.",
        "A default Magento 2 installation creates duplicate content, generates bloated URLs from layered navigation, loads slowly due to unoptimized assets, and mishandles canonical tags. We have audited dozens of Magento stores, and every single one had SEO issues that the store owner did not know existed.",
        "The good news is that Magento gives you the control to fix everything. Unlike hosted platforms that restrict what you can modify, Magento lets you change URL structures, edit robots.txt rules, customize canonical tag logic, and control indexation at a granular level. You just need to know what to change.",
        "This guide covers the Magento-specific SEO problems we see most often and the exact fixes for each one. Whether you are running Magento 2 Open Source or Adobe Commerce (the paid version), these issues and solutions apply to you.",
      ],
    },
    {
      heading: "Fixing layered navigation to prevent index bloat",
      body: [
        "Layered navigation is Magento's filtering system for category pages. Customers use it to filter by size, color, price, brand, and other attributes. It is great for usability. It is terrible for SEO if left unconfigured.",
        "The problem is that every filter combination generates a unique URL. A category page for 'women's shoes' with filters for size, color, brand, and price range can produce thousands of URL variations. Magento indexes all of them by default. We audited a Magento store with 200 categories and found that layered navigation had created over 340,000 indexable URLs, most of which were thin content duplicates of the parent category.",
        "Google wastes crawl budget on these URLs, and the duplicate content dilutes ranking signals across thousands of pages instead of concentrating them on the category pages that should actually rank.",
        "The fix depends on your SEO strategy. For filter combinations that have genuine search demand (like 'red Nike running shoes'), you want those pages indexed with unique content and canonical tags pointing to themselves. For everything else, you want to prevent indexation.",
        "In Magento 2, go to Stores > Configuration > Catalog > Catalog > Layered Navigation. Set 'Use In Search Results Layered Navigation' carefully. Then use robots meta tags to noindex filter combinations that lack search demand. We typically add a custom module that applies noindex,follow to any URL containing more than one filter parameter, while keeping single meaningful filter pages indexable.",
        "Another approach is using AJAX-based filtering that does not change the URL at all. This keeps all the filtering functionality for users while presenting a single, clean URL to search engines. Magento extensions like Amasty Improved Layered Navigation and Mirasvit Layered Navigation handle this well.",
      ],
    },
    {
      heading: "URL rewrites and the Magento URL problem",
      body: [
        "Magento's URL rewrite system is powerful but easily breaks. Every time you change a product name, move a product to a different category, or update a category name, Magento creates a new URL rewrite. Over time, these accumulate. We have seen Magento stores with over 2 million entries in the url_rewrite database table, causing severe performance issues.",
        "The default Magento URL structure includes the category path in product URLs. A product might be accessible at '/women/shoes/running-shoes/nike-air-zoom.html' and also at '/nike-air-zoom.html' and '/sale/nike-air-zoom.html.' That is the same product at three different URLs. Magento does add canonical tags, but the canonical logic sometimes picks the wrong URL, especially for products in multiple categories.",
        "Our recommended approach is to remove category paths from product URLs entirely. In Magento 2, go to Stores > Configuration > Catalog > Catalog > Search Engine Optimization and set 'Use Categories Path for Product URLs' to 'No.' This gives each product a single URL like '/nike-air-zoom.html' regardless of which categories it belongs to. Run this change through a staging environment first and set up redirects from the old category-path URLs.",
        "Clean up the url_rewrite table periodically. Old redirects from products that no longer exist, rewrites for deleted categories, and duplicate entries all accumulate. We run a cleanup script quarterly that removes orphaned rewrites. On one client's store, clearing 1.8 million stale url_rewrite entries reduced the database table size by 94% and improved admin page load times noticeably.",
        "For URL suffixes, Magento defaults to '.html' on both category and product URLs. There is no SEO reason to keep or remove this suffix, but be consistent. If you decide to remove it, do so during a migration or redesign, not as an isolated change, because every existing URL will need a redirect.",
      ],
    },
    {
      heading: "Site speed on Magento requires real investment",
      body: [
        "Magento is not fast out of the box. A default Magento 2 installation on basic hosting typically loads in 4-6 seconds. That is too slow for both users and search engines. Google has explicitly stated that page speed is a ranking factor, and their Core Web Vitals metrics penalize slow-loading pages.",
        "Full page cache is the single most impactful speed improvement. Magento 2 supports Varnish as a full page cache, and you should use it. Varnish sits in front of Magento and serves cached HTML for most page requests, eliminating the need for Magento to process PHP on every visit. With Varnish properly configured, page load times drop to under one second for cached pages.",
        "Image optimization is the second priority. Product images on Magento stores are often uploaded as 3000x3000px originals with no compression. We implement WebP conversion, lazy loading, and responsive image sets through Magento extensions or CDN-level transformations. A typical store reduces image payload by 60-75% after optimization.",
        "JavaScript and CSS bundling in Magento 2 is notoriously problematic. The built-in bundling often makes things worse by creating massive bundle files. We disable Magento's native bundling and instead use custom build processes with tools like Webpack or, increasingly, move to a headless frontend (Hyvae or a custom PWA) that handles asset optimization independently.",
        "Hosting infrastructure matters more for Magento than for simpler platforms. A shared hosting plan will not cut it. At minimum, you need a VPS or dedicated server with SSD storage, PHP 8.1+, Redis for session and cache storage, Elasticsearch or OpenSearch for catalog search, and Varnish for full page caching. For stores doing over 10,000 monthly visits, we recommend managed Magento hosting providers who specialize in performance tuning.",
        "We benchmark every Magento project against Core Web Vitals targets: LCP under 2.5 seconds, FID under 100ms, and CLS under 0.1. Meeting these thresholds on Magento is possible but requires deliberate optimization at every layer of the stack.",
      ],
    },
    {
      heading: "Magento SEO extensions worth installing",
      body: [
        "Magento's extension marketplace has hundreds of SEO-related modules. Most are unnecessary if you know how to configure Magento's built-in settings. But a few fill genuine gaps.",
        "Mirasvit SEO Suite handles many common Magento SEO issues in one package. It manages canonical URLs, generates XML sitemaps with better control than Magento's default, adds structured data markup, and provides SEO templates for mass-generating title tags and meta descriptions. We use it on about 60% of our Magento projects.",
        "Amasty SEO Toolkit is the main alternative. It covers similar ground with different approaches to canonical handling and duplicate content prevention. Both Mirasvit and Amasty are well-maintained and regularly updated for new Magento versions.",
        "For structured data specifically, we often use a dedicated extension rather than relying on the SEO suite modules. Magefan or Amasty's Product Schema extensions generate proper JSON-LD markup for products, including price, availability, reviews, and aggregate ratings. Getting structured data right drives rich snippets in search results, which noticeably improves click-through rates.",
        "Avoid installing multiple SEO extensions that overlap in functionality. Two extensions both trying to manage canonical tags will conflict and cause unpredictable results. Pick one primary SEO suite and supplement it with specialized extensions only where needed.",
        "XML sitemap generation in Magento's default implementation is basic. It dumps all URLs into one file with no priority differentiation and no intelligent change frequency settings. An extension like Amasty XML Sitemap or Mirasvit SEO Suite lets you split sitemaps by type (products, categories, CMS pages), exclude specific URLs, and set priorities based on actual page importance.",
      ],
    },
    {
      heading: "Magento vs headless architecture for SEO",
      body: [
        "Headless ecommerce separates the frontend presentation layer from the backend commerce engine. For Magento, this means using Magento purely as an API and building the frontend with a framework like React, Vue, or a Magento-specific solution like Hyvae.",
        "The SEO implications of going headless are significant. Traditional Magento renders HTML on the server, which search engines can crawl without issues. A JavaScript-heavy headless frontend may rely on client-side rendering, which Google can process but not as efficiently. If your headless frontend does not implement server-side rendering (SSR) or static site generation (SSG), you risk pages not being indexed properly.",
        "Hyvae is the headless solution we recommend most often for Magento stores that want speed improvements. It replaces Magento's default Luma or Blank frontend with a modern tech stack while maintaining server-side rendering. Pages load in under one second on average, and the SEO output (HTML structure, meta tags, structured data) can be controlled precisely.",
        "PWA Studio, Adobe's official headless solution for Magento, has had persistent SEO problems. Dynamic rendering, inconsistent canonical tag handling, and difficulty implementing hreflang tags have made it a risky choice for SEO-conscious stores. The situation has improved with recent versions, but we still see issues on PWA Studio stores that do not exist on traditional Magento or Hyvae implementations.",
        "Our advice: if your Magento store's speed problems are the primary concern, try optimizing the existing setup first (Varnish, Redis, image optimization). Going headless introduces complexity and cost. If you do go headless, choose a solution that supports SSR out of the box and test thoroughly with Google's URL Inspection tool before launching.",
      ],
    },
    {
      heading: "Common Magento SEO mistakes we keep finding",
      body: [
        "After auditing Magento stores for years, certain mistakes show up repeatedly. Here are the ones that cause the most damage.",
        "Duplicate content from store views is rampant on multi-language Magento installations. Each store view generates its own set of URLs, and without proper hreflang tags and canonical configuration, Google sees the same content at multiple URLs. We find this on almost every multi-store Magento setup we audit.",
        "Default Magento meta titles follow the format 'Product Name - Category Name - Store Name.' That template creates excessively long title tags that get truncated in search results and waste character space on the store name. We strip the store name from product and category title tags and customize the template to put the most important keyword first.",
        "The Magento sitemap often includes noindex pages, 404 URLs, and redirect chains. Export your sitemap and crawl every URL in it. We routinely find 10-30% of sitemap URLs that should not be there. Clean sitemaps help Google spend its crawl budget on pages that matter.",
        "CMS pages created for promotions and campaigns get forgotten after the event ends. These abandoned pages accumulate over time. One Magento store we audited had 450 CMS pages, of which 280 were empty or outdated promotional pages that still appeared in the sitemap. Either redirect them to relevant category pages or delete them and return proper 410 status codes.",
        "Magento's default robots.txt is too permissive. It allows crawling of customer account pages, checkout pages, wishlist pages, and comparison pages. None of these should be crawled. Update robots.txt to disallow /customer/, /checkout/, /wishlist/, /catalog/product_compare/, and any other paths that lead to user-specific or non-content pages.",
      ],
    },
    {
      heading: "Planning a Magento SEO project from start to finish",
      body: [
        "Magento SEO is not something you configure once and forget. The platform's complexity means ongoing maintenance is necessary. Here is how we structure a Magento SEO project.",
        "Phase one is the technical audit. We crawl the entire site with Screaming Frog, analyze the url_rewrite table, check layered navigation indexation, test page speed across device types, and validate structured data. This typically takes 2-3 weeks for a store with over 5,000 products and produces a prioritized list of fixes.",
        "Phase two is fixing the infrastructure issues. URL structure changes, canonical tag fixes, robots.txt updates, sitemap cleanup, and speed optimizations happen here. This phase usually takes 4-6 weeks because many changes require development work and staging environment testing before deployment.",
        "Phase three is on-page optimization. With the technical foundation solid, we optimize title tags, meta descriptions, H1s, and content across category and product pages. Keyword mapping drives this phase. We often use Magento's SEO extension templates to apply optimizations at scale, then manually refine the highest-priority pages.",
        "Phase four is monitoring and iteration. We track crawl stats in Google Search Console, monitor Core Web Vitals, watch for new indexation issues after Magento updates, and adjust the strategy based on ranking and traffic data. Magento updates sometimes reintroduce SEO problems that were previously fixed, so post-update audits are part of the routine.",
        "Magento is a powerful platform for stores with large catalogs and complex requirements. But it demands SEO attention that simpler platforms do not. If you are on Magento and your organic traffic is not growing, the platform configuration is almost certainly part of the problem.",
      ],
    },
  ],
};
