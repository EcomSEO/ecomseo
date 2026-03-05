import type { BlogArticle } from "../types";

export const ecommerceSeoChecklist: BlogArticle = {
  slug: "ecommerce-seo-checklist",
  title: "Ecommerce SEO checklist: optimize your store in 2026",
  description: "A complete ecommerce SEO checklist for 2026. Covers technical setup, on-page optimization, product pages, content, link building, and analytics.",
  category: "strategy",
  publishDate: "2025-06-22",
  readingTime: 13,
  author: "Fabian van Til",
  authorRole: "CEO at EcomSEO",
  primaryKeyword: "ecommerce seo checklist",
  secondaryKeywords: [
    "seo checklist for ecommerce",
    "ecommerce seo optimization checklist",
    "online store seo checklist",
  ],
  sections: [
    {
      heading: "How to use this ecommerce SEO checklist",
      body: [
        "This is the checklist we use when onboarding new ecommerce clients at EcomSEO. It covers everything from technical foundations to off-page work, organized in the order we recommend tackling each item. You do not need to complete everything at once. Start with the technical setup and on-page basics, then work through the remaining sections over 8-12 weeks.",
        "Each item includes what to check, why it matters, and how to verify it is done correctly. We have seen stores increase organic revenue by 30-60% just by working through a checklist like this systematically, because most ecommerce sites have dozens of small issues that compound into major lost opportunities.",
        "Copy this into a project management tool, assign owners, and track completion. SEO is not a mystery. It is a process. Treat it like one.",
      ],
    },
    {
      heading: "Technical setup checklist",
      body: [
        "SSL certificate installed and all pages serving over HTTPS. Check by navigating to your site with http:// and confirming it redirects to https://. Mixed content warnings (where some resources load over HTTP) count as a fail. Google has used HTTPS as a ranking signal since 2014, and browsers now flag non-HTTPS sites as insecure, which kills trust and conversion rates.",
        "XML sitemap generated and submitted to Google Search Console. Your sitemap should include all indexable product pages, category pages, and content pages. It should exclude parameter URLs, out-of-stock products you have set to noindex, and any pages behind login walls. Check your sitemap for accuracy by comparing the URL count to what you expect. If your store has 2,000 products but your sitemap lists 15,000 URLs, you have a problem.",
        "Robots.txt file configured correctly. Block crawlers from internal search results pages, cart and checkout URLs, account pages, and filter/sort parameter URLs. But do not block CSS or JavaScript files, because Google needs those to render your pages. Test your robots.txt with the Google Search Console robots.txt tester tool.",
        "Google Search Console and Google Analytics 4 connected. Verify site ownership in Search Console using DNS verification (the most reliable method). Set up GA4 with ecommerce tracking enabled so you can attribute revenue to organic traffic. If you are still running Universal Analytics, you need to migrate. It stopped processing data in July 2024.",
        "Core Web Vitals passing on mobile. Check your Core Web Vitals report in Search Console. Focus on LCP (Largest Contentful Paint) under 2.5 seconds, INP (Interaction to Next Paint) under 200 milliseconds, and CLS (Cumulative Layout Shift) under 0.1. Test your top 10 landing pages individually using PageSpeed Insights, because site-wide averages can hide page-level problems.",
        "Canonical tags implemented on all pages. Every indexable page should have a self-referencing canonical tag. Product pages with variants (size, color) that create separate URLs need canonicals pointing to the main product URL. Check by viewing page source and searching for 'rel=canonical.' If any page is missing a canonical, or if canonicals point to the wrong URL, fix it immediately.",
        "Structured data implemented for products. At minimum, every product page should have Product schema with name, price, availability, image, and review data (if you have reviews). Test with Google's Rich Results Test tool. Stores with valid product schema see higher click-through rates from search results because of the rich snippets showing price, availability, and star ratings.",
      ],
    },
    {
      heading: "On-page elements checklist",
      body: [
        "Unique title tags on every page. No two pages should share the same title tag. For product pages, use the format: [Product Name] | [Key Feature or Category] | [Brand]. Keep titles under 60 characters. Check for duplicates using Screaming Frog or the 'HTML Improvements' section in Search Console. We regularly find ecommerce stores with hundreds of duplicate titles, usually because the CMS template does not pull unique data for each page.",
        "Meta descriptions written for all product and category pages. Yes, Google rewrites meta descriptions about 70% of the time. But the 30% of the time they use yours matters, and a well-written description improves click-through rate by 5-10% compared to no description. Keep descriptions under 155 characters and include the primary keyword naturally. For product pages, include price and a key selling point.",
        "One H1 tag per page, matching the page's primary keyword. Your product pages should have the product name as the H1. Category pages should have the category name. Do not stuff keywords into the H1. Just make it clear and descriptive. Check for pages with missing H1s or multiple H1s using a crawl tool.",
        "Image alt text on all product images. Alt text should describe the image accurately: 'blue wool crew neck sweater front view' not 'sweater buy cheap best sweater 2026.' Include the product name naturally. Check for missing alt text using Screaming Frog's image tab. We typically find that 40-60% of product images on unoptimized stores are missing alt text entirely.",
        "Clean URL structure. URLs should be readable and include relevant keywords: /womens-running-shoes/ not /category.php?id=4827. Avoid URL parameters where possible. Keep URLs short. Remove unnecessary folder depth. A product URL like /shop/clothing/womens/tops/t-shirts/blue-cotton-tee/ has too many subdirectories. Aim for /womens-t-shirts/blue-cotton-tee/ instead.",
        "Internal links between related products and from category pages to subcategories. Every product page should link to at least 4-6 related products. Every category page should link to its subcategories and vice versa. Check for orphan pages (pages with no internal links pointing to them) using Screaming Frog or Sitebulb.",
      ],
    },
    {
      heading: "Product page checklist",
      body: [
        "Unique product descriptions on every page. This is non-negotiable. If you are using manufacturer descriptions that appear on 50 other stores, Google has no reason to rank your page. Write original descriptions that focus on benefits, not just specifications. For stores with thousands of products, prioritize your top 100 revenue-generating products first, then work through the rest systematically.",
        "Product images optimized for speed and SEO. Compress images to under 100KB where possible using WebP format. Use descriptive file names (blue-wool-sweater.webp not IMG_4827.webp). Include multiple product images with alt text variations. Serve images from a CDN with proper cache headers.",
        "Product schema markup validated and complete. Beyond the basics (name, price, availability), include aggregateRating if you have reviews, brand, SKU, and GTIN if applicable. Richer schema gives Google more data to work with and can result in more prominent rich snippets. Test every product page template with Google's Rich Results Test.",
        "Customer reviews enabled and displaying on product pages. Reviews provide unique, keyword-rich content that updates automatically. They also generate review schema data for search results. If you do not have a review system, implement one. If you have reviews but they are hidden behind tabs or accordions, consider displaying at least the first few reviews in the visible page content.",
        "Breadcrumb navigation with structured data. Breadcrumbs help users and search engines understand your site hierarchy. Implement BreadcrumbList schema so Google can display your breadcrumbs in search results. Check that breadcrumbs reflect the actual page hierarchy and that each level links correctly.",
        "Out-of-stock products handled correctly. Do not delete product pages for temporarily out-of-stock items. Keep the page live, mark the product as unavailable in schema, and suggest similar products. If a product is permanently discontinued, 301 redirect to the closest alternative product or the parent category page. Deleting high-traffic product pages is one of the most common ways ecommerce stores accidentally destroy their organic traffic.",
      ],
    },
    {
      heading: "Category page checklist",
      body: [
        "Category descriptions of 200-500 words minimum. Category pages are often your most valuable SEO assets because they target high-volume commercial keywords. A thin category page with just a grid of products rarely ranks well. Add a description above or below the product grid that naturally includes your target keyword and its variations. Include information that helps shoppers: what makes these products different, who they are for, and what to consider when choosing.",
        "Subcategory structure that matches search intent. If people search for 'men's leather boots,' 'men's hiking boots,' and 'men's chelsea boots' in significant volume, each needs its own subcategory page. Do not try to rank one generic 'men's boots' page for all of those terms. Check your keyword research and build subcategories for any group with 500+ monthly searches and distinct intent.",
        "Faceted navigation handled for SEO. Filters (size, color, price range, brand) create parameterized URLs that can cause massive crawl waste and duplicate content. The standard approach is to noindex filter combinations while keeping valuable pre-filtered pages (like a brand-specific category page) indexable. Verify by checking how many URLs your filters generate and whether they are appearing in Google's index. If Google has indexed 50,000 filter URLs for a store with 2,000 products, you have a problem that needs immediate attention.",
        "Pagination implemented correctly. Use rel=next and rel=prev tags if your category pages paginate. Better yet, consider infinite scroll with a crawlable pagination fallback so Google can access all products. Make sure page 2, page 3, etc. have unique title tags that indicate the page number. Never noindex paginated pages, because that prevents Google from finding products that only appear on later pages.",
        "Category pages linked prominently in site navigation. Your main navigation should feature your top-level categories. Subcategories should be accessible within one click from the main navigation. If a category page is only reachable through three layers of navigation, it will struggle to rank because it receives less internal link equity.",
      ],
    },
    {
      heading: "Content and blogging checklist",
      body: [
        "Content strategy aligned with keyword research. Every piece of content should target a specific keyword cluster that supports your commercial pages. Random blog posts about tangentially related topics do not help. A running shoe store should publish content about choosing running shoes, training plans, injury prevention, and shoe care. Not general fitness tips or celebrity gossip that happens to mention running.",
        "Buying guides for every major product category. Buying guides target mid-funnel keywords like 'best [product] for [use case]' and naturally link to your category and product pages. These are some of the highest-ROI content pieces for ecommerce because they capture people who are ready to buy but need guidance. Format them with clear headings, comparison tables, and direct product links.",
        "Internal links from blog content to product and category pages. Every blog post should include at least 2-4 contextual links to relevant product or category pages. Use descriptive anchor text that includes the target keyword of the linked page. Not 'click here' or 'check out our products.' Use something like 'our women's running shoes collection.' Verify these links regularly because products get removed and URLs change.",
        "Content updated regularly. Outdated content with last year's dates and recommendations hurts credibility and rankings. Audit your existing content quarterly. Update statistics, refresh product links, and change year references in titles (like this checklist does). Google rewards freshness for queries where recency matters, and 'best [product] 2026' queries are a perfect example.",
        "FAQ sections on commercial pages. FAQ content on product and category pages serves two purposes: it adds keyword-rich content to pages that might otherwise be thin, and it can win featured snippets for question-based queries. Add 4-6 frequently asked questions to each major category page. Use FAQPage schema to help Google identify and potentially display these in search results.",
      ],
    },
    {
      heading: "Off-page and link building checklist",
      body: [
        "Backlink profile audited for toxic links. Run your domain through Ahrefs or Semrush and review referring domains. If you see links from spammy directories, irrelevant foreign-language sites, or obvious link farms, disavow them using Google's Disavow Tool. This is not something you need to obsess over, but a quick cleanup at the start prevents problems later.",
        "Link building plan with monthly targets. Based on your competitive analysis, set a realistic monthly target for new referring domains. For most ecommerce stores in moderately competitive niches, acquiring 5-10 quality referring domains per month is a good target. Focus links on category pages and key content assets rather than the homepage.",
        "Google Business Profile claimed and optimized (if applicable). If you have a physical location or serve a local area, your Google Business Profile needs to be complete with accurate business information, photos, and regular posts. Even pure-play online stores benefit from having a verified GBP because it adds trust signals.",
        "Social media profiles linking back to your site. While social links are not direct ranking factors, they are trust signals and traffic sources. Make sure your main social profiles (Instagram, Facebook, Pinterest, LinkedIn, depending on your niche) link to your website and that your website links back to them.",
        "Brand mentions monitored and converted to links. Set up Google Alerts or use a tool like Mention to track when your brand is mentioned online without a link. Reach out to those sites and ask them to add a link. This is the easiest link building tactic because the hard part (getting mentioned) is already done.",
      ],
    },
    {
      heading: "Analytics and tracking checklist",
      body: [
        "GA4 ecommerce tracking verified. Go to GA4, navigate to Reports > Monetization > Ecommerce purchases, and confirm that transaction data is coming through correctly. Check that revenue numbers in GA4 match your Shopify, WooCommerce, or platform dashboard within a reasonable margin (5-10% discrepancy is normal due to tracking differences). If ecommerce tracking is broken, you cannot measure organic ROI, and your entire strategy is flying blind.",
        "Google Search Console monitored weekly. Check the Performance report for changes in impressions, clicks, CTR, and average position. Look for sudden drops that might indicate indexing issues or algorithm updates. Check the Coverage report for new errors. Set up email alerts for critical issues. We check Search Console every Monday morning for all client accounts, and catching problems early has saved several stores from extended traffic losses.",
        "Rank tracking set up for target keywords. Track your primary and secondary keywords for every priority page using a tool like Ahrefs Rank Tracker, Semrush Position Tracking, or AccuRanker. Track at least 50-100 keywords to start, grouped by page type (category pages, product pages, blog content). Set up weekly automated reports so you catch ranking changes quickly.",
        "Custom dashboards built for organic performance. Combine data from GA4, Search Console, and your rank tracker into a single dashboard using Looker Studio (formerly Google Data Studio). Include organic revenue, traffic, conversion rate, top landing pages, and keyword rankings. Having everything in one place makes it easy to spot trends and report to stakeholders. We build these for every client during the onboarding process, and they have become the single most valuable reporting tool for keeping everyone aligned.",
        "Conversion tracking for micro-conversions. Beyond purchases, track add-to-carts, email signups, wishlist additions, and product page views from organic search. These micro-conversions help you understand user behavior even when the final purchase happens through a different channel. If organic visitors are adding products to cart but not buying, the problem is likely checkout friction, not SEO.",
      ],
    },
  ],
};
