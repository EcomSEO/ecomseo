export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  listingImage: string;
  niche: string;
  focus: string;
  metrics: string;
  date: string;
  heroImage: string;
  description: string;
  topProjectDescription: string;
  image1: string;
  textAfterImage1: string;
  image2?: string;
  textAfterImage2?: string;
  textAfterImage3?: string;
  bottomProjectDescription?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "norwegian-health-store",
    title: "This Norwegian Health Store Had 19 Keywords...",
    subtitle: "Now They Dominate Page 1 for 47 High-Intent Health Terms",
    category: "Keyword Expansion",
    listingImage:
      "/images/framer/jKLk43bNfpNjhQGvnRhYkxJNjQ.webp",
    niche: "Health & Supplements",
    focus: "Full-Funnel SEO Strategy",
    metrics: "19 → 1,200+ keywords",
    date: "March 2024",
    heroImage:
      "/images/framer/kUlwbX2H8cHGVxTAaP727WFutj0.png",
    description:
      "This Norwegian health and supplements brand had been selling online on Shopify for 3+ years with a loyal repeat customer base — but almost entirely through paid ads and direct traffic. When they approached us, the organic numbers told a stark story: just 19 total keywords ranking anywhere in Google, zero Page 1 rankings for any commercial health keyword in Norwegian, and no content strategy whatsoever. Product pages had thin descriptions, and their blog had 4 posts from 2022. They were spending NOK 85,000/month on Google Ads to drive traffic that SEO could deliver with compounding returns.",
    topProjectDescription:
      "Before writing a single word of content, we fixed what was broken. We consolidated 340+ duplicate URLs caused by Shopify\u2019s default /collections/ and /products/ path variants using canonical tags and strategic redirects. We implemented hreflang tags for Norwegian (nb-NO), added Product schema with price and availability on all 120+ product pages, and restructured the internal linking architecture into logical silos organized by health goal \u2014 energy, sleep, immunity, and joint health. Then we mapped the entire Norwegian health supplement search landscape, identifying 847 keyword opportunities categorized by intent: 23% informational, 41% commercial investigation, and 36% transactional.",
    image1:
      "/images/framer/BImQCbWuM0cBXzU7QlnAD9bjBgc.png",
    textAfterImage1:
      "The content deployment phase transformed their organic presence. We rewrote all 120+ product descriptions from generic manufacturer copy to unique, benefit-focused descriptions averaging 350 words each. We created 18 category page guides (like \u201CComplete guide to supplements for better sleep\u201D) at 1,500\u20132,500 words each with internal links to relevant products. We published 12 expert blog posts targeting informational keywords with clear product tie-ins, plus comparison content targeting high-intent commercial queries. The result: keywords grew from 19 to over 1,200 within 8 months \u2014 a +6,200% increase. Page 1 rankings went from zero to 47 high-intent health keywords.",
    image2:
      "/images/framer/dsId62uNnnWBWAr5Vi1Z5UqiQ.png",
    textAfterImage2:
      "In the authority-building phase, we secured 3 editorial links from Norwegian health publications through original research on supplement trends, re-optimized 8 pages sitting at positions 11\u201320 (pushing 5 to Page 1), and added customer Q&A sections to the top 30 product pages pulling real questions from their customer service inbox. The technical precision ensured every new page was indexed and ranking within weeks, creating compounding returns month over month.",
    bottomProjectDescription:
      "The brand now ranks #1 in Norway for \u201Cbeste kosttilskudd\u201D (best supplements) with 880 monthly searches, holds positions 1\u20133 for 12 product-category keywords worth a combined 4,200 monthly searches, and has captured featured snippets for 6 informational health queries. Organic went from their #5 traffic channel to #2. Their Google Ads spend has been reduced by 35% as organic picks up the volume. This project is a blueprint for how niche ecommerce stores can win big in local Scandinavian markets with the right technical foundation and content strategy.",
  },
  {
    slug: "ecommerce-brand",
    title: "The Simple SEO Strategy That 7x\u2019d Their Traffic",
    subtitle: "From 295 to 2,160 Clicks in 90 Days \u2014 Without Creating a Single New Page",
    category: "On-Page Optimization",
    listingImage:
      "/images/framer/EeufC2RDWV8GzZB7fBbKfmWJQuc.webp",
    niche: "Fashion & Apparel",
    focus: "Zero-Content SEO Playbook",
    metrics: "295 → 2,160 clicks (7x)",
    date: "April 2025",
    heroImage:
      "/images/framer/1NlHRgxBwB6EoB1LTeD21KeUw.png",
    description:
      "This UK-based fashion and apparel brand had been running on WooCommerce for 2 years with a strong product line and 45K Instagram followers \u2014 but their organic search was an afterthought. Despite having 200+ product pages and 15 collection pages, they were stuck at 295 organic clicks/month. No SEO had ever been done: default WooCommerce settings, auto-generated meta descriptions, no internal linking strategy, and title tags that were just product names like \u201CBlue Cotton T-Shirt.\u201D The site had 1,400+ URLs indexed (tag pages, paginated archives, attachment pages) with only ~230 real pages \u2014 and 3 separate pages were cannibalizing each other for \u201Cwomen\u2019s summer dresses.\u201D They were spending \u00A34,200/month on Meta ads as their primary growth channel.",
    topProjectDescription:
      "Our approach was the Zero-Content Playbook: this site didn\u2019t need more content \u2014 it needed the existing 200+ pages to actually work. In weeks 1\u20132, we de-indexed 1,170 junk URLs (tag pages, author archives, attachment pages, paginated URLs), consolidated 8 cannibalizing page pairs using 301 redirects, removed 14 of 23 unused WooCommerce plugins, and compressed images site-wide \u2014 dropping LCP from 4.8s to 1.9s. The cleaned sitemap went from 1,400+ to just 234 real URLs. In weeks 3\u20134, we rewrote SEO elements for every key page: optimized all 15 collection page titles with search-intent keywords, rewrote 85 product descriptions from 1\u20132 sentences to 150\u2013250 words with sizing info and styling suggestions, and added FAQ schema to the top 20 product pages using real customer questions from Zendesk.",
    image1:
      "/images/framer/NPCIdO7pC8YfeI9fXt2tozsr0.png",
    textAfterImage1:
      "Weeks 5\u20138 focused on internal linking and quick wins. We built an internal linking map connecting products \u2192 collections \u2192 related products \u2192 blog (the blog had 12 existing posts that weren\u2019t linked to anything). We identified 47 \u201Cstriking distance\u201D keywords at positions 11\u201320 and specifically optimized those pages. We added \u201CComplete the Look\u201D cross-sell sections to product pages for both UX and internal linking value. In weeks 9\u201312, we re-optimized 12 pages based on Search Console impression data and identified 6 new collection pages to create based on search demand. The result: clicks jumped from 295 to 2,160 \u2014 a 7x increase. Page 1 keywords went from 4 to 28. CTR improved from 1.8% to 4.6% through title tag optimization alone. Index bloat was reduced by 83%.",
    image2:
      "/images/framer/dsId62uNnnWBWAr5Vi1Z5UqiQ.png",
    textAfterImage2:
      "The key insight was that the site had massive untapped potential in its existing WooCommerce content. By restructuring metadata, adding FAQ schema, improving keyword targeting on product and category pages, and removing 83% of the index noise, we unlocked traffic that was already within reach. No new content was created during the entire 90-day engagement \u2014 we maximized what already existed.",
    bottomProjectDescription:
      "This case proves that you don\u2019t always need more content \u2014 sometimes the fastest SEO wins come from subtracting noise and amplifying signal. The brand now ranks #3 for \u201Cwomen\u2019s linen trousers UK\u201D (1,200 monthly searches), holds Page 1 for 28 keywords including 6 collection-level terms with 500+ monthly searches each, and has reallocated \u00A31,500/month from Meta ads to SEO maintenance. With a 2.8% conversion rate and \u00A365 AOV, organic now drives approximately \u00A33,900/month in revenue \u2014 up from \u00A3540.",
  },
  {
    slug: "skyrocket-ecom-site",
    title: "From 55 to 794 Clicks: +1,343% Organic Traffic",
    subtitle: "How a Shopify Plus Home & Living Store Replaced Ad Dependency with Organic Growth",
    category: "Content-First SEO",
    listingImage:
      "/images/framer/nT2RO8bU8V5MvRjsqPRcXjKiA.webp",
    niche: "Home & Living",
    focus: "Content Strategy + Technical SEO",
    metrics: "55 → 794 clicks (+1,343%)",
    date: "April 2025",
    heroImage:
      "/images/framer/iGPoxmveXcfmzh5tv14kggj6Sk.png",
    description:
      "This European home and living brand had built a beautiful Shopify Plus store with 350+ products \u2014 but they\u2019d never invested a single euro in SEO. Their entire acquisition strategy was Meta ads + Google Shopping, with \u20AC8,500/month in ad spend and rising CPAs squeezing margins. The starting point was brutal: 55 organic clicks per month on a site with 350+ product pages, zero content beyond product pages (no blog, no guides, no category descriptions), and no organic brand presence whatsoever. The CEO\u2019s wake-up call: Meta CPAs had increased 40% year-over-year, and they needed a channel with compounding returns.",
    topProjectDescription:
      "We implemented a phased strategy targeting the Dutch-language market. In month 1, we fixed the technical foundation: restructured Shopify\u2019s default /collections/all/ URL structure, added Product schema on all 350+ products, blocked 800+ paginated and filtered URLs from crawling, and removed 4 unused Shopify apps injecting JavaScript \u2014 improving LCP from 3.8s to 2.1s. The content phase (months 2\u20134) was where the growth happened: we created 15 collection page guides, transforming each collection from a bare product grid into a product grid + 800\u20131,200 word buying guide (e.g., \u201CHow to Choose the Right Dining Table for Your Space\u201D). We published 8 blog posts targeting informational queries with purchase intent, rewrote 50 top product descriptions from manufacturer copy to unique content, and built comparison pages targeting high-intent queries.",
    image1:
      "/images/framer/NPCIdO7pC8YfeI9fXt2tozsr0.png",
    textAfterImage1:
      "In months 4\u20135, we connected every blog post to at least 3 product/collection pages with contextual links, added \u201CDesign Inspiration\u201D sections to product pages linking to related blog content, and identified 23 pages sitting at positions 8\u201315 for quick Page 1 wins. The results over 5 months: organic clicks surged from 55 to 794 (+1,343%), impressions grew from 1,200 to 18,400 (+1,433%), and ranking keywords went from 32 to 410+. The brand now holds 19 Page 1 rankings including 8 collection-level terms. Blog content drives 34% of organic traffic and has a 15% higher pages-per-session rate than ad traffic.",
    bottomProjectDescription:
      "The biggest lever was collection page content. Most Shopify stores treat collection pages as just a product grid. We turned them into the best buying guides in their niche for the Dutch market \u2014 and Google rewarded that with rankings. The brand has reduced Google Ads spend by \u20AC2,200/month while organic revenue has grown to represent 18% of total, up from less than 1%. Their blended customer acquisition cost has dropped by 28%. The combination of expert content + product pages + internal linking created a flywheel that compounds over time.",
  },
  {
    slug: "norwegian-smart-seo",
    title: "Clicks Up by +556% in 6 Months",
    subtitle:
      "How a Norwegian DTC Lifestyle Brand Built an Organic Channel from Zero",
    category: "Localized SEO",
    listingImage:
      "/images/framer/U8W2ek1f8J8lKPXlMlEGVJnMA.webp",
    niche: "DTC Lifestyle & Consumer Goods",
    focus: "Localized SEO + Magento Technical Overhaul",
    metrics: "+556% clicks in 6 months",
    date: "May 2024",
    heroImage:
      "/images/framer/fsNLwug0iY40kgRpaDtiBwpHto.png",
    description:
      "This Norwegian DTC lifestyle brand had strong products, loyal customers, and a growing Instagram following \u2014 but in Google, they were invisible. Running on Magento 2, they had 120 organic clicks/month on a site with 180+ products, product descriptions Google-Translated from English, and 4.2s load times from Magento\u2019s technical debt. Only 2 keywords ranked on Page 1 \u2014 both for their brand name. The Norwegian market offered a huge opportunity: competitors were either international brands with poor Norwegian SEO or small local players with no SEO at all.",
    topProjectDescription:
      "Month 1 was a full Magento 2 technical overhaul. We resolved 2,400+ duplicate URLs from layered navigation (color/size filters creating indexable pages) through proper canonicalization, reduced the XML sitemap from 6,200 URLs to 420 indexable pages, and optimized speed \u2014 implementing full-page cache, compressing images, and deferring non-critical JavaScript to drop LCP from 4.2s to 1.8s. Google had been spending 70% of crawl budget on faceted navigation; after cleanup, product pages were crawled 3x more frequently. In months 2\u20133, we hired a native Norwegian copywriter (our recommendation) to replace all Google Translate product descriptions with natural, benefit-focused Norwegian copy, created 12 collection landing pages targeting \u201C[product type] p\u00E5 nett\u201D queries, published 6 editorial blog posts in Norwegian, and optimized all meta titles and descriptions.",
    image1:
      "/images/framer/No5d0y8qqifK7jcosRZ9cTbJ9jk.png",
    textAfterImage1:
      "Months 4\u20135 focused on authority building. We pitched and secured coverage in 2 Norwegian lifestyle publications (editorial links, not sponsored), created a data-driven trend report about their product category that was picked up by 1 additional publication, and built relationships with 3 Norwegian bloggers for product reviews. In month 6, we re-optimized 15 pages based on Search Console data and set up an ongoing content calendar. Over 6 months, clicks grew from 120 to 787 (+556%), ranking keywords went from 45 to 380+, and Page 1 keywords in Norway went from 2 to 18. The brand now ranks #1 for their primary product category keyword (1,400 monthly searches).",
    bottomProjectDescription:
      "The Norwegian market proved the thesis: for brands willing to invest in proper Norwegian-language SEO, the competition is thin and the rewards are disproportionate. Organic revenue share went from 3% to 22% of total. Bounce rate on product pages dropped from 68% to 41% once Google Translate content was replaced with native Norwegian copy. The brand now allocates 40% of their marketing budget to SEO, up from zero, and has secured 2 editorial links from recognized Norwegian publications \u2014 their first organic press coverage ever.",
  },
  {
    slug: "dutch-brand",
    title: "814% More Impressions in 3 Months",
    subtitle:
      "How Topical Authority + Technical SEO Created a Multiplier Effect for This Dutch E-commerce Brand",
    category: "Technical SEO + Content",
    listingImage:
      "/images/framer/XveBJKU8qwY42bC8IYC2qnY0XI.webp",
    niche: "Dutch Consumer E-commerce",
    focus: "Topical Authority + Technical SEO",
    metrics: "+814% impressions (YoY)",
    date: "2024-2025",
    heroImage:
      "/images/framer/blY0bxOnAbkzctB0Fvm5HCFl8.png",
    description:
      "This Dutch ecommerce brand had been struggling with stagnant impressions and declining organic visibility despite a strong product catalog. The root causes were intertwined: a weak technical SEO foundation meant Google couldn\u2019t properly crawl and index their pages, while thin content without topical depth meant they had nothing compelling to rank for. Their Shopify store had duplicate content from variant URLs, missing canonical tags, and no structured data \u2014 typical issues that compound over time.",
    topProjectDescription:
      "We implemented a dual strategy: fixing technical SEO issues while simultaneously building topical authority through comprehensive content clusters. On the technical side, we resolved duplicate content from Shopify variant URLs, implemented proper canonical tags across all product and collection pages, added structured data (Product, BreadcrumbList, FAQ schemas), optimized the sitemap to only include canonical indexable pages, and improved page speed by removing unused theme scripts. On the content side, we built out topical clusters aligned with their product categories \u2014 creating pillar pages for each major category with supporting blog content targeting informational and commercial investigation queries in Dutch.",
    image1:
      "/images/framer/CWz53jkzCzmWB2WEYhmKnIlN9s.png",
    textAfterImage1:
      "Within 3 months, impressions surged by 814% compared to the same period the previous year. This wasn\u2019t a vanity metric \u2014 the improvement came from dramatically better indexation (pages that Google previously couldn\u2019t find or chose not to index), richer SERP presence through structured data triggering rich results, and content that matched user intent across the entire buying journey. Page 1 keyword rankings more than doubled, and the site started appearing in SERP features (FAQs, product rich results) for the first time.",
    bottomProjectDescription:
      "The combined technical + content approach created a multiplier effect that neither strategy could have achieved alone. Clean technical foundations meant Google could find and understand the new content immediately, while the content gave Google a reason to rank the site higher. The brand continues to see compounding growth as new content gets indexed and existing pages climb in rankings. This case demonstrates why we always audit technical foundations before investing in content \u2014 building on a broken foundation wastes effort.",
  },
  {
    slug: "english-health-site",
    title: "Zero to 1,323 Keywords in 27 Days",
    subtitle:
      "How an English-Language Health E-commerce Site Built Organic Visibility from Absolute Zero",
    category: "New Site Launch SEO",
    listingImage:
      "/images/framer/pOqYpuGRc2T3mmxrOH6jk7dLGk.webp",
    niche: "Health & Wellness E-commerce",
    focus: "Launch SEO Strategy",
    metrics: "0 → 1,323 keywords in 27 days",
    date: "March 10, 2025 \u2192 April 6, 2025",
    heroImage:
      "/images/framer/lZ9RdS5DIBaSngAiE0UDoFgr44.png",
    description:
      "This health-focused ecommerce site entered the competitive English-language market with zero keyword rankings and zero organic visibility. Unlike the Scandinavian markets where competition is thinner, the English health supplement space is dominated by established brands with thousands of backlinks and years of content. Our challenge was to build organic visibility from absolute zero \u2014 and do it fast enough to prove ROI within the first month.",
    topProjectDescription:
      "We launched an aggressive content and SEO strategy built on three pillars: topical content clusters targeting hundreds of health-related keywords with clear commercial intent, aggressive indexation tactics to ensure every page was discovered and indexed within days (not weeks), and comprehensive on-page optimization across every product and category page from day one. Structured data was implemented at launch \u2014 Product schema, FAQ schema, BreadcrumbList, and Organization markup \u2014 to maximize SERP visibility from the first crawl. We prioritized long-tail keywords with lower competition but high purchase intent, building topical authority from the bottom up rather than trying to compete for head terms immediately.",
    image1:
      "/images/framer/giRKTAJ5PgIKCjbCr9jgZG9ClNk.png",
    textAfterImage1:
      "Within just 27 days, the site went from zero to 1,323 tracked keywords. The rapid keyword acquisition was driven by the combination of well-researched topical clusters covering the full health supplement information landscape, product and category pages optimized with unique descriptions and structured data, and a clean technical foundation that allowed Google to crawl and index efficiently from the start. While most of these initial rankings were in positions 20\u2013100, they represented the foundation for future growth \u2014 each ranking keyword is a foothold that can be improved through content refinement, internal linking, and link building.",
    bottomProjectDescription:
      "Going from zero to 1,323 keywords in under a month demonstrates what\u2019s possible when you combine deep market research with precise technical execution and launch with SEO built-in rather than bolted on afterward. The brand is now positioned for sustained organic growth as these initial rankings mature. Our focus shifts to promoting the highest-potential keywords toward Page 1 through content upgrades and authority building over the next 3\u20136 months.",
  },
  {
    slug: "dutch-health-brand",
    title: "How We Grew Keyword Rankings by +987%",
    subtitle: "12 Months of Compounding SEO Growth for a Dutch Health & Supplements Brand on Shopify",
    category: "Full-Service SEO",
    listingImage:
      "/images/framer/fYBmJFqXMuLPgEQrC9RMXS2bEQ.webp",
    niche: "Health & Supplements",
    focus: "Topical Authority Boost (TAB) Strategy",
    metrics: "159 → 1,729 keywords (+987%)",
    date: "March 1, 2024 \u2192 March 31, 2025",
    heroImage:
      "/images/framer/ENjb13kVpEgLRNKgFEi4Nk8DEI.png",
    description:
      "This Shopify-based health and supplements brand operating in the Dutch market partnered with us in early 2024 to scale their organic visibility. They had a functional store and moderate traffic, but organic performance had plateaued due to a combination of thin product content, minimal keyword strategy, broken internal linking, and no structured data. They were ranking for 159 keywords total with minimal Page 1 presence, and their SERP feature appearances were limited to just 11.",
    topProjectDescription:
      "We deployed our Topical Authority Boost (TAB) strategy \u2014 a systematic approach to building topical dominance in the Dutch health supplement space. Phase 1 focused on developing comprehensive content clusters targeting hundreds of mid- and long-tail Dutch health keywords, organized by health concern (energy, immunity, sleep, joints, gut health). Each cluster included a pillar page, supporting blog posts, and optimized product pages all connected through contextual internal linking. Phase 2 tackled the technical foundation: we optimized internal linking architecture to distribute authority effectively, fixed broken tags and canonical issues, improved crawlability and indexation efficiency, and restructured the sitemap.",
    image1:
      "/images/framer/ZMRXxOQXaPPlksb8wJrCxtDjcbY.png",
    textAfterImage1:
      "On-page SEO was overhauled through precise optimization of meta titles, headers, and semantic structure across all product and category pages. Structured data was implemented for products (with price, availability, and reviews), FAQs, breadcrumbs, and aggregate ratings to unlock rich results in Dutch SERPs. We built high-quality backlinks from Dutch health-focused domains via guest posts and strategic partnerships to boost authority and trust signals.",
    image2:
      "/images/framer/QtPNuhsKVZNt3klckPPtQzUuW0.png",
    textAfterImage2:
      "Over 12 months, the results were transformative. Keywords surged from 159 to 1,729 (+987%). Page 1 rankings (positions 4\u201310) grew by 715%, while Page 2 rankings exploded by 1,450%. Mid-tier rankings (positions 21\u201350) increased by 2,788%, and longtail visibility (positions 51\u2013100) grew by 687%. SERP feature appearances jumped from 11 to 285 \u2014 a +2,490% increase \u2014 including rich snippets, FAQ results, and product carousels.",
    bottomProjectDescription:
      "The TAB strategy proved that systematic topical authority building creates compounding returns. By month 12, the site had nearly 11x its original keyword presence, a 715% increase in Page 1 rankings, and dominated SERP features in the Dutch health supplement space. The steady influx of qualified, high-intent organic traffic has strong conversion potential and continues to grow as new content matures and existing pages climb in rankings. This case is our longest-running engagement and the best proof of what sustained SEO investment delivers.",
  },
  {
    slug: "swedish-seo-explosion",
    title: "From 23 to 267 Keywords",
    subtitle: "How We Built Organic Visibility from Scratch in the Swedish Health Market",
    category: "Localized Content Strategy",
    listingImage:
      "/images/framer/DkD9z15pJoS3dlSyXfBDIu1yg0.webp",
    niche: "Health & Wellness",
    focus: "Swedish Market SEO Launch",
    metrics: "23 → 267 keywords (+1,060%)",
    date: "August 17, 2024 \u2192 April 4, 2025",
    heroImage:
      "/images/framer/Xf1HGUb7jShO1KPmiiSSN4749ZU.png",
    description:
      "This ecommerce brand launched into the Swedish health market in August 2024 with virtually no SEO visibility \u2014 only 23 organic keywords ranking and zero Page 1 positions. The Swedish health and wellness space, while less competitive than English-language markets, still required a deliberate localized strategy to cut through. Our mission was to build a sustainable SEO engine from scratch, targeting Swedish-language queries with commercially viable search volume.",
    topProjectDescription:
      "By April 2025, the transformation was dramatic. Organic keyword rankings exploded by over 1,060%. The brand went from zero to 28 keywords on Page 1, 36 on Page 2, and 105 in mid-tier rankings (positions 21\u201350). Longtail visibility improved with 66 keywords ranking between positions 51\u2013100. SERP feature appearances grew from 1 to 32, expanding visibility across FAQs and snippet results. This growth was powered by a Topical Authority SEO strategy tailored specifically to the Swedish market \u2014 starting with localized keyword research based on user intent and search behavior unique to Sweden.",
    image1:
      "/images/framer/GR8HujXonhuGbMdpDyze8EJSNJU.png",
    textAfterImage1:
      "We built structured content silos around symptoms, treatments, and informational topics relevant to Swedish health consumers. Each silo connected informational blog content to commercial product and category pages through contextual internal links, creating a natural content architecture that both users and Google can navigate. On-page SEO was optimized for Swedish search patterns (which differ from Norwegian and Danish in keyword structure and user behavior), and structured data was deployed across all content types.",
    image2:
      "/images/framer/6dEoP51kE51ZPZ2sOd0wwzjoxsE.png",
    textAfterImage2:
      "Clean technical optimization ensured every page was indexable, relevant, and built to rank. We implemented proper hreflang tags for Swedish (sv-SE), optimized the sitemap structure, and built strategic links from Nordic wellness domains to raise domain authority and trust signals specific to the Swedish market. Internal linking connected the full funnel from informational searches to product pages.",
    bottomProjectDescription:
      "The brand now owns visibility across the entire funnel in Sweden \u2014 from informational health searches to high-intent product queries. Many of the Page 2 and Page 3 keywords are now poised for quick wins with targeted content upgrades and additional internal linking. We\u2019re doubling down on FAQ content and product page optimization to accelerate the next wave of Page 1 entries. The Swedish market, like Norway, rewards brands that invest in native-language content \u2014 translated content simply cannot compete.",
  },
  {
    slug: "beauty-brand-dominated-in-google",
    title: "One Page, 7X More Clicks Than the Homepage",
    subtitle: "How a Single SEO Landing Page Outperformed the Entire Site for a Swedish Beauty & Nails Brand",
    category: "High-Intent Landing Pages",
    listingImage:
      "/images/framer/fYBmJFqXMuLPgEQrC9RMXS2bEQ.webp",
    niche: "Beauty & Nails E-commerce",
    focus: "Intent-Matched Landing Page Strategy",
    metrics: "3,895 clicks vs 463 homepage (7.4x)",
    date: "April 2025",
    heroImage:
      "/images/framer/b3NuyQhNm8p8Jet5t6s4j4uQRHs.png",
    description:
      "Most ecommerce stores assume their homepage will always be their top organic performer. This Swedish beauty and nails brand proved that assumption wrong. We created a single strategically designed landing page targeting the high-intent Swedish keyword \u201Crandiga naglar\u201D (striped nails) \u2014 and it delivered 3,895 clicks compared to just 463 on the homepage, a 740% increase. Impressions followed the same pattern, growing by 634% over the homepage. This wasn\u2019t luck \u2014 it was the result of precise keyword targeting, content matched to user intent, and technical execution.",
    topProjectDescription:
      "We identified \u201Crandiga naglar\u201D as a high-intent keyword with strong seasonal search patterns in Sweden. Rather than trying to rank an existing product page, we created a dedicated SEO landing page tailored to match the exact user intent: visual inspiration, technique tips, and direct links to relevant products. Every on-page element was optimized \u2014 from headers and image alt text to meta descriptions and semantically related terms for topical depth. Internal links from key product and category pages supported discoverability, and schema markup (Product, BreadcrumbList, FAQ) was implemented to maximize SERP visibility.",
    image1:
      "/images/framer/NZW07WrJngD5CyDcjBNtNoUlo.png",
    textAfterImage1:
      "The technical foundation was equally important: fast mobile performance (LCP under 2s), clean URL structure, proper indexation signals, and responsive image handling for the visual-heavy content. The page was designed mobile-first, reflecting how beauty consumers typically search. Within weeks of indexation, the page began outranking established beauty blogs and magazine sites for the target keyword in Swedish SERPs.",
    image2:
      "/images/framer/NRLNJlmz2DFf1v1TS6ES8PDNEu4.png",
    textAfterImage2:
      "The key insight: unlike the broad focus of a homepage, this page was laser-focused on one trending, visual, and high-converting keyword. It aligned perfectly with user intent, delivered genuine value (inspiration + product links), and was technically sound. That combination \u2014 intent match + value + technical execution \u2014 is the SEO trifecta that drives outsized results.",
    bottomProjectDescription:
      "We\u2019re now rolling out this same strategy across other high-intent Swedish beauty topics: \u201Cfrans\u00E4ka naglar,\u201D \u201Combre naglar,\u201D and \u201Cgelenaglar hemma.\u201D Each follows the same framework: identify high-intent keywords with visual search patterns, create dedicated landing pages that match user intent better than any competitor, and connect them to the product catalog through strategic internal linking. The beauty and nails space rewards brands that understand their customers\u2019 search behavior \u2014 and this case proves that a single well-executed page can outperform an entire website.",
  },
  {
    slug: "jewelry-dutch-brand-ecom",
    title: "100+ Jewelry Collections Became a Search Magnet",
    subtitle: "How Category Architecture Transformed a Dutch Online Jewelry Store\u2019s Organic Visibility",
    category: "Category Architecture",
    listingImage:
      "/images/framer/XveBJKU8qwY42bC8IYC2qnY0XI.webp",
    niche: "Jewelry & Accessories",
    focus: "Category SEO + Site Architecture",
    metrics: "100+ new collection pages ranking",
    date: "Q1 2024 vs Q1 2025",
    heroImage:
      "/images/framer/WYv0LM3JIOM7VqQPWR5PSWRpPWk.png",
    description:
      "This Dutch online jewelry store had strong branding and a loyal customer base, but its organic traffic didn\u2019t reflect its potential. The site suffered from a flat architecture with all products dumped into a few broad categories, missing internal linking logic, and unclear navigation \u2014 especially around thematic and seasonal collections. Customers searching for specific styles (\u201Czilveren armband dames,\u201D \u201Cverlovingsring vintage\u201D) were finding competitors instead because the site had no dedicated pages for these queries.",
    topProjectDescription:
      "We restructured the entire category system, launching over 100 clearly defined collection pages organized around three axes: product style (minimalist, vintage, statement), material/type (silver, gold, gemstone), and search behavior/occasions (engagement rings, birthday gifts, everyday jewelry). Each new collection page was built as an SEO-optimized landing page with unique Dutch content, targeted metadata, internal links to relevant products and related collections, and structured data for reviews, breadcrumbs, and product availability. This created a deep, navigable architecture where every search query had a dedicated, optimized destination.",
    image1:
      "/images/framer/gyRmy5K001Wwpq2CejOLpA6Qi0.png",
    textAfterImage1:
      "Our SEO work included a complete Dutch keyword strategy mapping commercial intent queries to each new collection page, enriched product descriptions that connected items to their collection context, and a smart internal linking system that tied products, blogs, and collections together in a logical hierarchy. Each collection page included buying guidance, styling tips, and care instructions \u2014 making them genuinely useful for shoppers, not just keyword targets.",
    image2:
      "/images/framer/HnlZ0KRfnEL41sycz9vZb9TITE4.png",
    textAfterImage2:
      "Technical SEO was cleaned up in parallel: canonical tags prevented the duplicate content issues that plague jewelry sites with variant pages, sitemap improvements ensured only canonical collection and product pages were submitted, mobile speed was optimized for the image-heavy design, and structured data was implemented for aggregate reviews, breadcrumbs, and product availability across all pages.",
    textAfterImage3:
      "By April 2025, the site was ranking broadly for both generic and niche Dutch jewelry terms like \u201Czilveren armband dames,\u201D \u201Cverlovingsring vintage,\u201D \u201Cgouden ketting heren,\u201D and dozens more. Page 1 rankings span multiple collection pages, and the site now captures search intent across the full buying journey \u2014 from browsing for inspiration to purchasing specific pieces. This proves that deep category SEO combined with structured content can outperform paid channels for jewelry e-commerce.",
  },
  {
    slug: "ecom-brand-explode",
    title: "From 0 to 84 Clicks a Day",
    subtitle: "How One SEO Landing Page Outperformed the Entire Website for a Dutch Beauty Brand",
    category: "Strategic Landing Pages",
    listingImage:
      "/images/framer/DkD9z15pJoS3dlSyXfBDIu1yg0.webp",
    niche: "Beauty & Nail Care",
    focus: "Single-Page SEO Strategy",
    metrics: "0 → 2,710 clicks (84/day peak)",
    date: "Q4 2024 vs Q1 2025",
    heroImage:
      "/images/framer/u8bMMkKCS2CzeAeFlmCHEMBFMmI.png",
    description:
      "This Dutch beauty and nail care brand was 100% dependent on paid advertising \u2014 no organic presence at all. The homepage, product pages, and category sections had virtually zero traction in Google. They had written off SEO as \u201Ctoo slow\u201D for their business. We challenged that assumption with a single, strategic move: one perfectly executed SEO landing page targeting a high-intent Dutch nail care search term.",
    topProjectDescription:
      "We created one SEO landing page targeting a specific high-intent nail care keyword in the Dutch market. The page was designed with a clean SEO structure optimized for fast indexing: targeted H1 and H2 hierarchy, semantic keyword variations throughout the content, product-focused FAQ section pulling real customer questions, and direct links to relevant product pages. Internal linking from existing category and product pages provided initial authority, and the conversion-friendly layout balanced informational content with clear purchase paths.",
    image1:
      "/images/framer/8aOboYR3AbkXAk7Jgpk9PoVIKqo.png",
    textAfterImage1:
      "In just six months, this single page went from zero to 2,710 total clicks and 48,700 impressions. At its peak, it generates 84 clicks and 609 impressions daily \u2014 outperforming the homepage, product pages, and every collection page on the entire site. It has become the brand\u2019s #1 source of organic traffic, built on a foundation of perfectly matched search intent and technically sound execution. The page consistently ranks in the top 3 for its target keyword and appears in multiple SERP features.",
    textAfterImage3:
      "What makes this case powerful is its simplicity: no full-site overhaul, no massive content budget, no 12-month timeline. Just one page, perfectly executed. It now stands as one of the brand\u2019s highest-ROI marketing assets \u2014 generating free, qualified traffic every single day. The success proved to the client that SEO can deliver fast results when you target the right keywords with the right content, and they\u2019ve since commissioned 5 additional strategic landing pages targeting related Dutch beauty search terms.",
  },
  {
    slug: "dutch-lighting-store",
    title: "250+ New Categories & a Clean Hierarchy",
    subtitle: "How Category Architecture Ignited SEO Growth for a Dutch Lighting & Interior Store",
    category: "Category Architecture",
    listingImage:
      "/images/framer/pOqYpuGRc2T3mmxrOH6jk7dLGk.webp",
    niche: "Lighting & Interior Design",
    focus: "Category SEO + Technical Architecture",
    metrics: "250+ optimized categories launched",
    date: "Q1 2025 vs Q1 2024",
    heroImage:
      "/images/framer/kisbBqsHWjDnaMuaXSLLAzqDA.png",
    description:
      "This Netherlands-based ecommerce store specializing in lamps and lighting had a broad product range but was limited by poor SEO performance. A disorganized category structure meant products were buried in a few generic categories, thin topical coverage gave Google no reason to rank them above competitors, and crawl inefficiencies from hundreds of unoptimized filter pages wasted crawl budget. Despite solid inventory and a decent customer base from paid channels, organic visibility remained low.",
    topProjectDescription:
      "We overhauled the entire category hierarchy, introducing over 250 new SEO-optimized categories structured around three dimensions: lamp type (pendant, floor, table, wall, ceiling), product features (dimmable, LED, smart, outdoor), and room/use case (living room, bedroom, office, bathroom). Redundant and underperforming pages were removed to eliminate cannibalization, and a clean, scalable navigation system was implemented to improve both crawlability and user experience. Each new category page was built with unique Dutch content targeting specific commercial intent keywords.",
    image1:
      "/images/framer/UKb1AHEdbkx2xNzxX0i2SZ2yjC4.png",
    textAfterImage1:
      "We mapped Dutch long-tail keywords with clear commercial intent to each new category. Queries like \u201Changlamp woonkamer\u201D (pendant lamp living room), \u201Cbuitenlamp met sensor\u201D (outdoor lamp with sensor), and \u201CLED plafondlamp dimbaar\u201D (dimmable LED ceiling lamp) each got their own optimized landing page. Content, metadata, and internal links were optimized across the board, and structured data was implemented for products, breadcrumbs, and aggregate reviews on every category.",
    textAfterImage2:
      "Technical SEO upgrades ran in parallel: sitemap was restructured to reflect the new hierarchy, crawl paths were cleaned to eliminate loops and dead ends, canonical tags prevented duplicate content from filter combinations, and internal linking was rebuilt to distribute authority from the homepage through category tiers down to product pages. We also built high-quality backlinks from trusted Dutch interior design and home improvement sites to strengthen both domain authority and category-specific topical authority.",
    textAfterImage3:
      "The result: a significant jump in impressions, Page 1 keyword rankings for commercial Dutch lighting terms, dramatically improved crawl efficiency (Google now spends crawl budget on pages that matter), and strong topical relevance across the entire lighting category landscape. The store now ranks for hundreds of specific lighting queries that previously went to competitors, driving qualified traffic to the exact products customers are searching for.",
  },
  {
    slug: "ecom-swedish-brand",
    title: "How We Skyrocketed a Swedish E-com Site",
    subtitle:
      "From 119K to 446K Impressions and 8.4K to 15.4K Clicks in 6 Months",
    category: "Content Hub Strategy",
    listingImage:
      "/images/framer/jKLk43bNfpNjhQGvnRhYkxJNjQ.webp",
    niche: "Health & Sustainability",
    focus: "100-Page Content Hub + Technical SEO",
    metrics: "+275% impressions, +83% clicks",
    date: "November 1, 2024 \u2192 April 30, 2025",
    heroImage:
      "/images/framer/2UsLOcISObv7iq3htlOjILlw0c.png",
    description:
      "When this mid-sized Swedish e-commerce brand on Shopify reached out in late 2024, their organic visibility was almost non-existent. Only branded keywords were ranking, with no content strategy in place. Despite having a well-built store and decent product pages, they lacked three critical things: informational content to capture top-of-funnel searches, an internal linking structure to distribute authority, and backlinks from relevant Swedish sites to build domain trust.",
    topProjectDescription:
      "We executed a 3-phase strategy. Phase 1: We clustered high-potential Swedish-language keywords by search intent, identifying over 250 target terms across five thematic clusters including h\u00E5llbar sk\u00F6nhet (sustainable beauty) and ekologisk kosttillskott (organic supplements). Phase 2: We launched 100 new informational pages \u2014 blogs and buying guides targeting long-tail queries. Each page was internally linked to relevant product and category pages, reinforcing topical authority through contextual connections. We built over 300 internal links total across the content hub. Phase 3: We fixed technical issues including 42 duplicate meta tags, sitemap inefficiencies, and URL parameter problems, and implemented breadcrumb schema across all articles and subcategories.",
    image1:
      "/images/framer/lCkxhauV9ut0MT6UYs97cWxC8c.png",
    textAfterImage1:
      "Within six months, the results were dramatic. Impressions jumped from 119,000 to 446,000 (+275%), while clicks rose from 8,410 to 15,400 (+83%). The gap between impression and click growth indicates significant opportunity for CTR optimization in the next phase. As the content hub gained traction, internal authority flowed naturally to key product pages \u2014 giving them organic visibility they had never achieved before. Several product pages now rank on Page 1 for commercial keywords purely through internal link authority from the content hub.",
    image2:
      "/images/framer/NXqrtjIPSjhtl3APX2rH5LNwVrM.png",
    textAfterImage3:
      "We\u2019re now entering Phase 2 of the engagement, focused on two priorities: optimizing every product page for on-page SEO (titles, descriptions, structured data, image alt text) and launching a targeted backlink campaign to solidify the site\u2019s authority in Swedish SERPs. With the content foundation in place, the brand is forecasted to 3\u20134x its current traffic over the next six months. The content hub approach works especially well in Swedish because the market has far less informational content competition than English \u2014 brands willing to invest in quality Swedish-language content get disproportionate returns.",
  },
  {
    slug: "swedish-ecom-site",
    title: "From 37 to 1,529 Keywords in 6 Months",
    subtitle: "How a Swedish E-commerce Brand Built Topical Authority and Dominated SERPs",
    category: "Topical Authority Building",
    listingImage:
      "/images/framer/nT2RO8bU8V5MvRjsqPRcXjKiA.webp",
    niche: "Health & Wellness E-commerce",
    focus: "Keyword Clustering + Content Architecture",
    metrics: "37 → 1,529 keywords (+4,035%)",
    date: "November 1, 2024 \u2192 April 30, 2025",
    heroImage:
      "/images/framer/jvTl07BOCRR2tTf2ANh32XdfEt4.png",
    description:
      "In May 2024, this Swedish ecommerce brand had minimal organic visibility: just 37 keywords ranking with only one in the top 10, no content hub, no internal linking structure, and no backlink strategy. Growth was flat and the brand was entirely dependent on paid acquisition. Our mission was to build topical authority in the Swedish health and wellness space and transform their organic channel into a meaningful revenue driver within 6 months.",
    topProjectDescription:
      "We began with deep Swedish keyword clustering, mapping over 250 search terms into five high-intent thematic clusters: h\u00E5llbar sk\u00F6nhet (sustainable beauty), ekologisk kosttillskott (organic supplements), naturlig hudv\u00E5rd (natural skincare), vegansk h\u00E4lsa (vegan health), and milj\u00F6v\u00E4nlig livsstil (eco-friendly lifestyle). From these clusters, we launched 100+ well-researched articles targeting long-tail Swedish queries. Each article was connected to the product catalog through over 300 contextual internal links pointing to relevant product and category pages \u2014 reinforcing topical authority site-wide rather than building isolated content islands.",
    image1:
      "/images/framer/fyAPXyjHaJjly5rybkvJY6xZQkQ.png",
    textAfterImage1:
      "To strengthen the SEO foundation, we cleaned up 42 duplicate meta tags, fixed sitemap inefficiencies, resolved URL parameter issues that were creating duplicate content, and implemented breadcrumb schema across all articles and subcategories. The technical cleanup ensured that Google could efficiently crawl and index the new content, and the structured data implementation helped the site win SERP features in Swedish results.",
    textAfterImage2:
      "In six months, the brand jumped from 37 to 1,529 total keywords (+4,035%). Page 1 rankings increased from just 1 to 87. 53 keywords now appear in SERP features (FAQs, featured snippets, product carousels). Clicks rose from 8,400 to 15,400 (+83%) and impressions surged from 119,000 to 446,000 (+275%). The content hub strategy created a flywheel where each new article strengthened the authority of related product pages.",
    textAfterImage3:
      "With 87 top-10 positions locked in and 1,500+ keywords providing a broad foundation, the Swedish market is now a significant organic channel for the brand. The next phase focuses on two accelerators: on-page optimization of every product page (many have default Shopify descriptions) and a targeted backlink campaign to Swedish health and wellness publications. Based on the current trajectory, we expect organic traffic to 3\u20134x again over the next six months as the content hub matures and product pages climb in rankings.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllCaseSlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}
