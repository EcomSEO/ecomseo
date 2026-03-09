import type { BlogArticle } from "../types";

export const ecommerceSeoAudit: BlogArticle = {
  slug: "ecommerce-seo-audit",
  title: "Ecommerce SEO Audit: Your Step-by-Step Guide",
  description: "A practical ecommerce SEO audit checklist covering crawlability, indexation, site speed, on-page elements, and backlinks. Based on 100+ real store audits.",
  category: "strategy",
  publishDate: "2025-06-15",
  readingTime: 14,
  author: "Fabian van Til",
  authorRole: "CEO at EcomSEO",
  authorSlug: "fabian-van-til",
  primaryKeyword: "ecommerce seo audit",
  secondaryKeywords: ["seo audit for ecommerce", "ecommerce site audit", "ecommerce seo analysis"],
  sections: [
    {
      heading: "Why generic SEO audits fail ecommerce sites",
      body: [
        "Running a standard SEO audit on an ecommerce site is like using a car mechanic's checklist to inspect a plane. Some things overlap. Most don't. Ecommerce stores have unique problems that generic audit templates miss entirely.",
        "We have run ecommerce SEO audits for over 100 online stores since 2019. The issues we find most often are things like 40,000 faceted navigation URLs eating crawl budget, product variants creating near-duplicate pages that compete with each other, and expired products returning 404 errors instead of redirecting to relevant alternatives. None of these show up in a standard SEO audit checklist.",
        "An ecommerce site audit needs to account for scale, dynamic inventory, platform-specific quirks (Shopify handles canonicals differently than Magento), and the commercial intent behind every page. This guide walks through exactly what we check and in what order.",
        "Before starting, you will need a few tools. Screaming Frog (or a similar crawler) for site-wide crawl data. Google Search Console for indexation and performance data. Google Analytics 4 for traffic and revenue data. Ahrefs or Semrush for backlink and keyword data. PageSpeed Insights for Core Web Vitals. Budget at least two full days for a thorough audit on a store with 5,000 or more pages."
      ],
    },
    {
      heading: "Step 1: crawlability and indexation",
      body: [
        "This is where we always start. If Google cannot find or access your pages, nothing else matters.",
        "Begin by checking your robots.txt file. Visit yourdomain.com/robots.txt and read it carefully. We frequently find ecommerce sites that accidentally block important paths. One Shopify store we audited had a custom robots.txt that blocked /collections/, which prevented Google from crawling any of their category pages. They had no idea. Their organic traffic had dropped 60% over three months and they assumed it was an algorithm update.",
        "Next, check your XML sitemaps. Are they submitted in Google Search Console? Do they include all the pages you want indexed and exclude the ones you don't? Run the sitemap through Screaming Frog to check for errors. Common issues: sitemaps that include noindexed pages, sitemaps with URLs that redirect or return 404 errors, and sitemaps that are too large (over 50,000 URLs per file without being split).",
        "Pull the Index Coverage report from Google Search Console. This is the most valuable report for ecommerce SEO analysis. Look at four things: how many pages are valid and indexed, how many are excluded and why, the ratio of 'Discovered, currently not indexed' to total discovered pages, and any spike in errors over time. A healthy ecommerce site should have at least 70% of its submitted URLs indexed. If you are below 50%, something is seriously wrong.",
        "Run a full site crawl with Screaming Frog. For large stores, you may need to crawl in segments (by subdirectory or sitemap). Check for: pages returning 404 or 5xx errors, redirect chains longer than two hops, pages with noindex tags that should be indexed, and orphan pages (pages not linked from anywhere else on the site). We typically find between 200 and 2,000 crawl issues on a mid-size ecommerce store."
      ],
    },
    {
      heading: "Step 2: site speed and core web vitals",
      body: [
        "Site speed directly impacts both rankings and conversion rates. For ecommerce, every second of load time matters. Research from Deloitte showed that a 0.1 second improvement in mobile site speed led to an 8.4% increase in conversions for retail sites.",
        "Start with the Core Web Vitals report in Google Search Console. This shows you how your pages perform on three metrics: Largest Contentful Paint (LCP), First Input Delay (FID) or Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). Google groups your pages into 'Good', 'Needs Improvement', and 'Poor.' Your goal is to get all URL groups into 'Good.'",
        "Run your homepage, a category page, and a product page through PageSpeed Insights. Look at the mobile scores specifically. Desktop scores are almost always better and they are less important since Google uses mobile-first indexing. Common ecommerce speed issues we find during audits include uncompressed or oversized product images (this is the number one issue, hands down), too many third-party scripts from apps, plugins, and tracking tools, render-blocking CSS and JavaScript, no browser caching configured, and slow server response times (especially on shared hosting).",
        "For Shopify stores, theme bloat is a frequent problem. Many stores install 15 to 20 apps that each inject their own JavaScript. We audited a fashion store where app scripts added 2.3 megabytes of JavaScript to every page load. Removing unused apps and replacing others with lighter alternatives cut their LCP from 5.8 seconds to 2.1 seconds.",
        "For Magento stores, full-page caching and CDN configuration are often misconfigured. A properly configured Magento 2 store with Varnish cache should serve pages in under 500 milliseconds. If your time-to-first-byte is over 1 second, your server setup needs attention."
      ],
    },
    {
      heading: "Step 3: mobile experience",
      body: [
        "This overlaps with site speed but deserves its own section because the issues go beyond load times. Google's mobile-first indexing means the mobile version of your site is what gets evaluated for rankings.",
        "Test your site on an actual mobile device, not just Chrome DevTools. Open your store on your phone and try to complete a purchase. Note every friction point. Is the navigation easy to use? Can you tap buttons without accidentally hitting the wrong one? Do product images load quickly and display at the right size? Is the text readable without zooming?",
        "Specific things we check in ecommerce mobile audits: font sizes (body text should be at least 16px), tap target spacing (buttons and links should have at least 48px of clickable area), horizontal scrolling (there should be none), intrusive interstitials (full-screen popups on mobile can trigger a Google penalty), and form usability (checkout forms should be easy to complete on mobile).",
        "We audited a home decor store where the desktop conversion rate was 2.8% but mobile was only 0.6%. The mobile product pages loaded images at full desktop resolution (3000px wide), the 'Add to Cart' button was partially hidden below the fold, and the product description font was 12px. After fixing these issues, mobile conversions climbed to 1.9% within two months. That represented an additional $45,000 per month in revenue from the same traffic."
      ],
    },
    {
      heading: "Step 4: on-page elements audit",
      body: [
        "On-page SEO for ecommerce needs to work at scale. You cannot manually optimize 10,000 product pages one at a time. The audit should identify both site-wide patterns and individual page issues.",
        "Title tags come first. Export all title tags from your Screaming Frog crawl and look for: duplicate titles (extremely common when product variants have separate URLs), titles that are too long (over 60 characters) or too short (under 30 characters), titles missing the primary keyword, and auto-generated titles that follow a bad pattern. A Shopify store using the default title structure might have every product page titled 'Product Name - Store Name,' which wastes character space on branding instead of keywords.",
        "Meta descriptions should be unique for every important page. In practice, most ecommerce sites have thousands of pages with either no meta description or duplicate ones. Our priority during audits is to fix meta descriptions for category pages and top-selling products first. These pages get the most impressions in search results, so improving their click-through rate has the biggest impact.",
        "Heading structure matters for both SEO and accessibility. Every page should have exactly one H1 tag, and it should include the primary keyword for that page. We regularly find ecommerce sites where the logo is wrapped in an H1 on every page, or where product pages have no H1 at all because the product title is styled with CSS instead of proper HTML headings.",
        "Image optimization is a major area of opportunity on most ecommerce sites. Check for: images without alt text (we typically find 30 to 60% of product images have no alt text), oversized image files (anything over 200KB for a product thumbnail is too large), images served in older formats like JPEG when WebP or AVIF would be significantly smaller, and missing lazy loading on below-the-fold images.",
        "URL structure should be clean and keyword-rich. Audit your URL patterns across page types. Category URLs should be short and descriptive (/mens-running-shoes, not /cat/345/running-sh). Product URLs should include the product name. Avoid unnecessary parameters and session IDs in URLs."
      ],
    },
    {
      heading: "Step 5: content quality assessment",
      body: [
        "Content quality on ecommerce sites is one of the most neglected areas. Product descriptions are often thin, duplicated from manufacturers, or missing entirely. Category pages frequently have no descriptive content at all.",
        "Start by identifying thin content pages. Using Screaming Frog, filter for pages with fewer than 100 words of body content. On a typical ecommerce store, 40 to 70% of product pages fall into this category. Not every product page needs 500 words, but pages targeting competitive keywords need meaningful, original content.",
        "Check for duplicate content across your own site. Product variants often create near-identical pages. Filter URLs, pagination URLs, and sort-order URLs can generate hundreds of duplicate pages. Use canonical tags to point Google to the preferred version. We find canonical tag issues on roughly 60% of the ecommerce sites we audit.",
        "Assess category page content. Each category page should have descriptive text that includes the target keyword naturally. We recommend 200 to 500 words for category pages, split between an introduction above the product grid and additional content below. If your category pages have zero text content, they are at a disadvantage against competitors who have invested in this.",
        "Check for manufacturer duplicate content. If you sell products from major brands and use their provided descriptions, you are competing with hundreds of other retailers using the exact same text. Google will typically rank the manufacturer's own site plus one or two large retailers. Rewriting product descriptions in your own voice, with details specific to your customer base, is one of the highest-ROI content tasks for ecommerce.",
        "Finally, review your blog or resource content if you have any. Is it relevant to your products? Does it include internal links to category and product pages? Is it updated regularly? Stale blog content from 2019 with broken links and outdated information does more harm than good."
      ],
    },
    {
      heading: "Step 6: backlink profile analysis",
      body: [
        "Backlinks remain one of the strongest ranking factors. For ecommerce sites, the challenge is that product and category pages rarely attract links naturally. People link to information, not shopping pages.",
        "Pull your backlink profile from Ahrefs or Semrush. Look at total referring domains, the growth trend over the past 12 months, and the distribution of links across your site. A healthy ecommerce backlink profile should show steady growth in referring domains and links distributed across multiple pages, not concentrated on just the homepage.",
        "Check for toxic backlinks. Ecommerce sites are frequent targets of negative SEO and spammy link building. Look for large numbers of links from irrelevant, low-quality sites, links with exact-match anchor text that look unnatural, and links from link farms or PBN (private blog network) sites. If you find a significant number of toxic links, consider using Google's Disavow Tool.",
        "Compare your backlink profile to your top competitors. How many referring domains do they have versus you? Which pages are attracting links? This competitive gap analysis shows you what it will take to outrank them. We had a client in the fitness equipment space with 340 referring domains competing against sites with 1,200 to 2,800. The backlink gap was the primary reason their category pages could not break into the top 10.",
        "Identify link-worthy assets on your site or opportunities to create them. Blog posts, buying guides, original research, tools, and visual content like infographics tend to attract links. If your site has nothing linkable beyond product pages, building these assets should be a priority in your SEO strategy."
      ],
    },
    {
      heading: "Step 7: structured data and rich results",
      body: [
        "Structured data helps Google understand your pages and can qualify your listings for rich results in search. For ecommerce, this directly impacts click-through rates.",
        "Check whether your product pages have Product schema markup. Test a sample of pages using Google's Rich Results Test tool. The markup should include at minimum: product name, description, price, currency, availability status, and aggregate reviews if you have them. Many ecommerce platforms add basic Product schema by default, but it is often incomplete or contains errors.",
        "Breadcrumb schema is another high-value markup type for ecommerce. It shows the page hierarchy in search results (Home > Category > Subcategory > Product), which helps users understand where the page fits in your site and improves click-through rates.",
        "FAQ schema on category pages and buying guides can generate rich results that take up more space in search results. We have seen FAQ rich results increase click-through rates by 15 to 25% on category pages.",
        "Other structured data types to check: Organization schema on your homepage, LocalBusiness schema if you have physical stores, and Article schema on blog posts. Review your implementation with Google Search Console's Enhancements reports, which show validation errors and the number of pages with detected structured data.",
        "A word of caution: do not add structured data that is not supported by visible content on the page. Google has penalized sites for misleading structured data, like adding review stars to pages that do not display reviews. Keep your markup honest and accurate."
      ],
    },
    {
      heading: "Prioritizing your audit findings",
      body: [
        "After completing all seven steps, you will likely have a list of 50 to 200 issues. Fixing everything at once is not realistic. You need a prioritization framework.",
        "We use a simple scoring system: each issue gets rated on two scales. First, potential impact (how much will fixing this improve rankings, traffic, or revenue). Second, effort required (how many hours or what resources are needed). Issues with high impact and low effort go first. Issues with low impact and high effort go last or get skipped entirely.",
        "In our experience, the highest-priority fixes for most ecommerce stores fall into a predictable pattern. Crawlability and indexation issues come first because they block everything else. If Google cannot crawl or index your pages, no other optimization matters. Site speed improvements come next because they affect every page simultaneously. Then on-page fixes to category pages, because these are your highest-value commercial pages. Content improvements to top product pages follow. Backlink building and content strategy are ongoing work that runs in parallel once the foundation is fixed.",
        "Create a roadmap with monthly milestones. We typically plan ecommerce SEO audits as 90-day implementation sprints: month one for technical fixes, month two for on-page optimization, month three for content and link building kickoff. After the initial sprint, shift to ongoing monitoring and iterative improvements.",
        "One more thing: run this audit again in six months. SEO is not a one-time project. Ecommerce sites change constantly as products are added and removed, new features are implemented, and platform updates roll out. Regular audits catch issues before they become problems. We run quarterly mini-audits for all our retainer clients and a full audit annually."
      ],
    },
  ],
};
