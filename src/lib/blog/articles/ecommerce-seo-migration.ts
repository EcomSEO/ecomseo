import type { BlogArticle } from "../types";

export const ecommerceSeoMigration: BlogArticle = {
  slug: "ecommerce-seo-migration",
  title: "Ecommerce SEO migration: avoid ranking drops during switches",
  description:
    "Plan your ecommerce platform migration without losing organic traffic. URL mapping, redirect strategy, content preservation, and post-migration monitoring steps.",
  category: "technical",
  publishDate: "2025-07-01",
  readingTime: 12,
  author: "Fabian van Til",
  authorRole: "CEO at EcomSEO",
  primaryKeyword: "ecommerce seo migration",
  secondaryKeywords: [
    "seo migration ecommerce",
    "platform migration seo",
    "ecommerce replatforming seo",
  ],
  sections: [
    {
      heading: "Why ecommerce migrations are high-risk for SEO",
      body: [
        "Switching ecommerce platforms is one of the highest-risk events for organic search traffic. When you change platforms, you change URLs, templates, site structure, page speed characteristics, internal linking, and often content itself. Every one of those changes can trigger ranking drops.",
        "We have managed over 40 ecommerce platform migrations. Stores that plan properly typically see a 10-20% traffic dip in the first two weeks, followed by recovery within 4-8 weeks. Stores that rush or skip SEO planning often lose 40-60% of their organic traffic, and some never fully recover.",
        "A fashion retailer we took on had migrated from Magento to Shopify six months before contacting us. They skipped URL mapping, implemented incomplete redirects, and lost all their category page content. Organic traffic had dropped 58% and had not recovered. It took five months of intensive work to get them back to pre-migration levels. That is five months of lost revenue that proper planning would have prevented.",
        "This guide walks through every step of an ecommerce SEO migration, from the decision to migrate through post-launch monitoring. Follow this process and you will protect the organic traffic you have spent years building.",
      ],
    },
    {
      heading: "Deciding whether to migrate at all",
      body: [
        "Before you commit to a migration, be honest about whether you need one. Platform migrations are expensive, time-consuming, and risky. Sometimes the right answer is to stay and fix what you have.",
        "Valid reasons to migrate include genuine platform limitations that block business growth, end-of-life announcements for your current platform, unsustainable hosting or maintenance costs, and the need for features your current platform cannot support (like B2B functionality or headless architecture).",
        "Bad reasons to migrate include wanting a 'fresh start,' seeing a competitor on a different platform, or being sold on a new platform's marketing. We have talked clients out of migrations that would have cost 50,000+ euros in development and months of traffic disruption when their existing platform could have been optimized instead.",
        "If you are on Magento 1, migration is unavoidable since it reached end of life. If you are on a platform with active development and support, weigh the business benefits against the SEO risk and cost. We build a cost-benefit analysis for every client considering a migration, including projected traffic loss and the revenue impact of that loss.",
        "When the decision is to migrate, the SEO work should start immediately. Not after the new store is built. Not during the launch week. From the very first day of the project.",
      ],
    },
    {
      heading: "The pre-migration audit",
      body: [
        "Before you change anything, document exactly what you have. This baseline becomes your reference point for the entire migration and your benchmark for measuring post-launch performance.",
        "Crawl your entire existing site with Screaming Frog or Sitebulb. Export every URL with its status code, title tag, meta description, H1, canonical tag, and word count. This crawl data is the foundation of your URL mapping. For a store with 10,000 products and 200 categories, expect 15,000-20,000 rows of data when you include paginated pages, filter pages, and blog content.",
        "Export your Google Search Console data for the past 16 months. You need the queries report (which keywords drive traffic to which pages), the pages report (which URLs get clicks and impressions), and the coverage report (which pages are indexed). Save this data because Search Console only retains 16 months of history.",
        "Pull your backlink profile from Ahrefs or SEMrush. Identify your most-linked pages. These pages absolutely cannot break during migration because they carry link equity that supports rankings across your site. We flag any page with more than five referring domains as 'high-priority' in the URL map.",
        "Document your current site structure: main navigation, footer links, breadcrumb paths, and internal linking patterns. The new platform should replicate this structure as closely as possible, or consciously improve it based on an SEO strategy.",
        "Take screenshots of your top 20 landing pages from organic search. After migration, you will want to visually compare the old and new versions to ensure content, internal links, and user experience are preserved.",
      ],
    },
    {
      heading: "URL mapping is the most critical step",
      body: [
        "Every URL on your old site needs to map to a URL on the new site. Every single one. This is the most tedious part of a migration and also the most important.",
        "Create a spreadsheet with columns for: old URL, new URL, redirect type (301 or 410), page type (product, category, blog, CMS), monthly organic sessions, number of referring domains, and priority level. Populate the old URL column from your crawl data. Fill in organic sessions from Google Analytics and referring domains from your backlink audit.",
        "Product URLs usually change because different platforms use different URL patterns. Magento might use '/catalog/product/view/id/123/nike-air-max.html' while Shopify uses '/products/nike-air-max.' Map each old product URL to its new equivalent. For stores with thousands of products, use spreadsheet formulas or scripts to automate the mapping based on product handles or SKUs.",
        "Category URLs are even more likely to change. A Magento category at '/women/shoes/running.html' might become '/collections/womens-running-shoes' on Shopify. These mappings need manual attention because category structures frequently change during migrations. Resist the urge to restructure categories and migrate simultaneously. Do one, then the other.",
        "Do not forget about blog posts, CMS pages, image URLs, and PDF downloads. We have seen migrations where every product and category was properly redirected, but 200 blog posts were left behind because nobody thought to include them in the URL map.",
        "For pages with no equivalent on the new site (discontinued products, expired promotions), decide whether to redirect them to the closest relevant page or return a 410 status code. Redirecting everything to the homepage is lazy and wastes link equity. A discontinued running shoe product page should redirect to the running shoes category, not the homepage.",
      ],
    },
    {
      heading: "Implementing redirects without errors",
      body: [
        "Once your URL map is complete, implementing the redirects correctly is what prevents traffic loss. The technical execution matters as much as the planning.",
        "Use 301 (permanent) redirects for all URL changes. Not 302 (temporary). A 302 tells Google to keep the old URL in its index, which defeats the purpose. We have seen migration projects where a developer used 302 redirects by default, and three months later Google was still trying to index the old URLs.",
        "Implement redirects at the server level, not through JavaScript or meta refresh tags. Server-side 301 redirects transfer link equity immediately. JavaScript redirects may not be followed by all crawlers, and they add latency for users who hit the old URL.",
        "Test every redirect before launch. Not a sample. Every one. We use Screaming Frog's list mode to crawl the old URL column from our mapping spreadsheet and verify that each URL returns a 301 to the correct new destination. On a recent migration with 8,400 redirected URLs, this testing caught 127 incorrect redirect targets that would have sent users to the wrong pages.",
        "Watch for redirect chains. If old URL A redirects to old URL B, which redirects to new URL C, that is a chain. Google follows up to 10 hops, but each hop loses a small amount of link equity and adds latency. Clean up chains so every old URL redirects directly to its final destination in a single hop.",
        "Shopify has a built-in redirect tool, but it does not support regex redirects and has no bulk import in the basic admin. If you are migrating to Shopify with thousands of redirects, use an app like Easy Redirects or manage redirects through the Shopify API.",
        "Keep redirects in place permanently. Some store owners remove redirects after a few months thinking they are no longer needed. External links, bookmarks, and cached search results may point to old URLs for years. Removing redirects turns those into 404 errors and wastes the link equity you worked to preserve.",
      ],
    },
    {
      heading: "Content preservation during migration",
      body: [
        "URLs and redirects get the most attention during migrations, but content loss is equally damaging. If your old category pages had 400 words of SEO-optimized content and the new pages have none, rankings will drop regardless of how well your redirects work.",
        "Export all content from your old platform before the new site goes live. Product descriptions, category descriptions, blog posts, FAQ pages, about page copy, and any other content that contributes to rankings. Store this in a structured format (spreadsheets or a CMS export) that can be imported into the new platform.",
        "Category page content is the most commonly lost during migrations. Many migration projects focus on moving product data (titles, descriptions, images, prices) through automated import tools but ignore category descriptions because they do not fit neatly into standard data feeds. We create a separate content migration checklist for category pages and verify each one manually after import.",
        "Meta titles and descriptions need to come over too. If you spent months optimizing meta tags, losing them during migration resets all that work. Include meta title and meta description columns in your product and category data exports and import them alongside the content.",
        "Internal links within content often break during migration. A blog post that links to '/catalog/category/view/id/45' will have a broken link after migration unless you update it to the new URL. We search all content for internal links and update them to the new URL structure before or immediately after launch.",
        "Schema markup may not transfer between platforms. If your old site had custom structured data (FAQ schema, how-to schema, review schema), verify that the new platform generates equivalent markup. Missing structured data causes rich snippets to disappear from search results, reducing click-through rates even if rankings hold.",
      ],
    },
    {
      heading: "Post-migration monitoring and recovery",
      body: [
        "The first 48 hours after launch are critical. Monitor in real time for issues that could cause lasting damage.",
        "Immediately after launch, submit your new XML sitemap in Google Search Console. Then use the URL Inspection tool to test 10-15 of your highest-traffic pages. Verify they are accessible, that the canonical tags are correct, and that Google can render them properly. If you spot problems, fix them within hours, not days.",
        "Monitor crawl stats in Search Console daily for the first two weeks. A sudden spike in crawl errors (404s, 500s, redirect loops) indicates a problem with your redirect implementation. We set up automated alerts for crawl error spikes using third-party monitoring tools.",
        "Track keyword rankings daily during the first month. Use your pre-migration ranking data as the baseline. Some fluctuation is normal. A drop of 2-5 positions on most keywords in the first week typically resolves on its own within 2-4 weeks as Google reprocesses the redirects and re-evaluates the new pages.",
        "If a specific page drops more than 10 positions and does not recover within two weeks, investigate. Common causes include: the redirect for that URL is not working, the new page has less content than the old one, the new page has a different keyword focus, internal links to that page changed, or the new page loads significantly slower.",
        "Google Analytics (or your analytics platform) should show organic sessions returning to pre-migration levels within 4-8 weeks for a well-executed migration. If you are still down more than 15% after 8 weeks, something structural is wrong. Check for pages that lost content, redirects that point to the wrong destination, or new technical issues (noindex tags accidentally applied, canonical tags pointing to wrong URLs, JavaScript rendering problems).",
        "We run a full site audit at 30 days and 90 days post-migration. The 30-day audit catches issues that crept in during the launch rush. The 90-day audit confirms that rankings and traffic have stabilized and identifies any pages that need additional optimization on the new platform.",
      ],
    },
    {
      heading: "Common migration mistakes and realistic timelines",
      body: [
        "After managing dozens of ecommerce migrations, the same mistakes keep appearing.",
        "Launching without testing redirects is the most common and most damaging. A store with 5,000 products and 100 categories has at least 5,100 URLs that need redirects. If 10% of those are wrong, that is 500 broken redirect targets. Those 500 pages will lose rankings immediately. Always test the full redirect set in a staging environment before launch.",
        "Changing too many things at once makes it impossible to diagnose problems. If you migrate platforms, redesign the site, restructure categories, and rebrand all at the same time, a traffic drop could be caused by any of those changes. We advise migrating first (keeping design and structure as close to the original as possible), waiting 2-3 months for rankings to stabilize, then making design and structural changes incrementally.",
        "Forgetting about images and media files. Product images on the old platform often have different URLs than on the new one. If external sites link to your product images (which happens with shopping comparison sites and social media), those links break. Set up redirects for image URLs or ensure the new platform serves images from the same paths.",
        "Realistic timelines: a small store (under 500 products) can migrate in 4-6 weeks if the URL mapping and redirect work is done properly. A mid-sized store (500-5,000 products) needs 8-12 weeks. Large stores (5,000+ products) should plan for 12-16 weeks. These timelines include the SEO work, not just the platform development. Rushing a migration to meet an arbitrary deadline is how traffic gets lost.",
        "The goal of an SEO migration is not to gain traffic. It is to not lose the traffic you already have. Any migration that preserves 90%+ of organic traffic within 8 weeks is a success. Gains come later, after the migration stabilizes and you can optimize on the new platform's strengths.",
      ],
    },
  ],
};
