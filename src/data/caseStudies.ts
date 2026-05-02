export type CaseStudyBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "callout"; title: string; text: string }
  | { type: "metric"; label: string; before: string; after: string }
  | {
      type: "metrics-grid";
      items: { label: string; before: string; after: string }[];
    }
  | { type: "list"; items: string[] }
  | { type: "highlight"; text: string }
  | { type: "tools"; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

export type CaseStudySection = {
  id: string;
  title: string;
  blocks: CaseStudyBlock[];
};

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
  sections?: CaseStudySection[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "norwegian-health-store",
    title: "This Norwegian Health Store Had 19 Keywords...",
    subtitle: "Now They Own Page 1 for 47 High-Intent Health Terms",
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
      "This Norwegian health and supplements brand had been selling online on Shopify for 3+ years with a loyal repeat customer base, but almost entirely through paid ads and direct traffic. When they approached us, the organic numbers told a stark story: just 19 total keywords ranking anywhere in Google, zero Page 1 rankings for any commercial health keyword in Norwegian, and no content strategy at all. Product pages had thin descriptions, and their blog had 4 posts from 2022. They were spending NOK 85,000/month on Google Ads to drive traffic that SEO could deliver for a fraction of the cost.",
    topProjectDescription:
      "Before writing a single word of content, we fixed what was broken. We consolidated 340+ duplicate URLs caused by Shopify\u2019s default /collections/ and /products/ path variants using canonical tags and strategic redirects. We implemented hreflang tags for Norwegian (nb-NO), added Product schema with price and availability on all 120+ product pages, and restructured the internal linking into logical silos organized by health goal: energy, sleep, immunity, and joint health. Then we mapped the entire Norwegian health supplement search space, identifying 847 keyword opportunities categorized by intent: 23% informational, 41% commercial investigation, and 36% transactional.",
    image1:
      "/images/framer/BImQCbWuM0cBXzU7QlnAD9bjBgc.png",
    textAfterImage1:
      "The content deployment phase changed everything. We rewrote all 120+ product descriptions from generic manufacturer copy to unique, benefit-focused descriptions averaging 350 words each. We created 18 category page guides (like \u201CComplete guide to supplements for better sleep\u201D) at 1,500\u20132,500 words each with internal links to relevant products. We published 12 expert blog posts targeting informational keywords with clear product tie-ins, plus comparison content targeting high-intent commercial queries. The result: keywords grew from 19 to over 1,200 within 8 months, a +6,200% increase. Page 1 rankings went from zero to 47 high-intent health keywords.",
    image2:
      "/images/framer/dsId62uNnnWBWAr5Vi1Z5UqiQ.png",
    textAfterImage2:
      "In the authority-building phase, we secured 3 editorial links from Norwegian health publications through original research on supplement trends, re-optimized 8 pages sitting at positions 11\u201320 (pushing 5 to Page 1), and added customer Q&A sections to the top 30 product pages pulling real questions from their customer service inbox. The technical work meant every new page was indexed and ranking within weeks, and organic growth kept building on itself month over month.",
    bottomProjectDescription:
      "The brand now ranks #1 in Norway for \u201Cbeste kosttilskudd\u201D (best supplements) with 880 monthly searches, holds positions 1\u20133 for 12 product-category keywords worth a combined 4,200 monthly searches, and has captured featured snippets for 6 informational health queries. Organic went from their #5 traffic channel to #2. Their Google Ads spend has been reduced by 35% as organic picks up the volume. This is exactly what happens when niche ecommerce stores in Scandinavian markets get the right technical foundation and content strategy.",
    sections: [
      {
        id: "challenge",
        title: "The Challenge",
        blocks: [
          { type: "p", text: "This Norwegian health and supplements brand had been selling online on Shopify for 3+ years with a loyal repeat customer base, but almost entirely through paid ads and direct traffic. When they approached us, organic was an afterthought." },
          { type: "metrics-grid", items: [
            { label: "Keywords Ranking", before: "19", after: "Target: 500+" },
            { label: "Page 1 Rankings", before: "0", after: "Target: 20+" },
            { label: "Monthly Ad Spend", before: "NOK 85,000", after: "Reduce by 30%" },
          ]},
          { type: "h3", text: "Root Causes We Identified" },
          { type: "list", items: [
            "Product pages had thin, manufacturer-copy descriptions averaging 40 words each. Google had no reason to rank them over competitors with 300+ word unique descriptions",
            "Shopify\u2019s default URL structure created 340+ duplicate URLs (/collections/ and /products/ variants), splitting crawl budget and link equity",
            "No hreflang implementation, so Google was confused about language targeting for the Norwegian market",
            "Blog had 4 posts from 2022, all untouched. Zero topical authority being built",
            "No structured data: Product schema, FAQ schema, and BreadcrumbList all missing",
          ]},
          { type: "tools", items: ["Ahrefs", "Screaming Frog", "Google Search Console", "Shopify Admin", "Google Sheets"] },
        ],
      },
      {
        id: "approach",
        title: "Our Approach: Full-Funnel SEO in 4 Phases",
        blocks: [
          { type: "h3", text: "Phase 1: Technical Foundation (Month 1\u20132)" },
          { type: "p", text: "Before writing a single word of content, we fixed what was broken. We consolidated 340+ duplicate URLs using canonical tags and strategic 301 redirects. We implemented hreflang tags for Norwegian (nb-NO) to prevent Google from treating their pages as English content. We added Product schema with price, availability, and reviews on all 120+ product pages. And we restructured internal linking into logical silos organized by health goal: energy, sleep, immunity, and joint health." },
          { type: "highlight", text: "We almost skipped the internal linking restructure due to time constraints. Glad we didn\u2019t. The silo structure alone was responsible for an estimated 30% of the initial keyword gains. Google needs clear topical signals, especially in health niches where E-E-A-T scrutiny is highest." },
          { type: "h3", text: "Phase 2: Keyword Research & Content Mapping (Month 2\u20133)" },
          { type: "p", text: "Using Ahrefs and Google Search Console data combined with manual SERP analysis of Norwegian health queries, we mapped the entire Norwegian health supplement search space. We identified 847 keyword opportunities and categorized them by intent:" },
          { type: "list", items: [
            "23% informational: \u201Chva er magnesium godt for\u201D (what is magnesium good for)",
            "41% commercial investigation: \u201Cbeste magnesium tilskudd\u201D (best magnesium supplement)",
            "36% transactional: \u201Ckj\u00F8p magnesium tabletter\u201D (buy magnesium tablets)",
          ]},
          { type: "callout", title: "What We Found", text: "Norwegian-language health content is seriously underserved. The top-ranking competitors were thin affiliate sites, not authoritative brands. This meant a well-resourced content strategy could win relatively quickly compared to English-language markets." },
          { type: "h3", text: "Phase 3: Content Deployment (Month 3\u20136)" },
          { type: "list", items: [
            "Rewrote all 120+ product descriptions from generic manufacturer copy to unique, benefit-focused descriptions averaging 350 words each",
            "Created 18 category page guides (e.g., \u201CComplete guide to supplements for better sleep\u201D) at 1,500\u20132,500 words each",
            "Published 12 expert blog posts targeting informational keywords with clear product tie-ins",
            "Built comparison content: \u201CX vs Y\u201D supplement comparisons targeting high-intent commercial queries",
          ]},
          { type: "h3", text: "Phase 4: Authority & Iteration (Month 6\u20138)" },
          { type: "list", items: [
            "Secured 3 editorial links from Norwegian health publications through original research on supplement trends",
            "Re-optimized 8 pages sitting at positions 11\u201320 based on GSC data, pushing 5 to Page 1",
            "Added customer Q&A sections to top 30 product pages using real questions from their customer service inbox",
          ]},
        ],
      },
      {
        id: "didnt-work",
        title: "What Didn\u2019t Work (And What We Learned)",
        blocks: [
          { type: "p", text: "Not everything went to plan, and that\u2019s where the real lessons came from." },
          { type: "h3", text: "Automated translation for product descriptions" },
          { type: "p", text: "Initially, we tested using AI-assisted translation from English product descriptions to Norwegian as a time-saver. The output was grammatically correct but lacked the natural phrasing Norwegian consumers expect. Bounce rates on AI-translated pages were 23% higher than manually written ones. We scrapped the approach after 2 weeks and invested in native Norwegian copywriting for all remaining pages." },
          { type: "h3", text: "Generic FAQ schema" },
          { type: "p", text: "We initially added FAQ schema with generic health questions on all category pages. Google showed them for about 3 weeks, then stopped. When we replaced them with questions pulled directly from the brand\u2019s customer service inbox (real questions real customers asked), FAQ rich results returned within 10 days and have been stable since." },
          { type: "highlight", text: "Generic FAQ content gets filtered quickly by Google\u2019s quality systems. Real customer questions have natural language patterns that Google recognizes as authentic. Always source FAQ content from actual user interactions." },
        ],
      },
      {
        id: "results",
        title: "The Results: 8-Month Transformation",
        blocks: [
          { type: "metrics-grid", items: [
            { label: "Total Keywords", before: "19", after: "1,200+" },
            { label: "Page 1 Rankings", before: "0", after: "47" },
            { label: "Monthly Organic Clicks", before: "~40", after: "1,800+" },
            { label: "Avg. Position (Target KWs)", before: "38.4", after: "6.2" },
            { label: "Google Ads Spend", before: "NOK 85,000/mo", after: "NOK 55,000/mo" },
            { label: "Organic Traffic Ranking", before: "#5 channel", after: "#2 channel" },
          ]},
          { type: "h3", text: "Headline Wins" },
          { type: "list", items: [
            "#1 in Norway for \u201Cbeste kosttilskudd\u201D (best supplements) with 880 monthly searches",
            "Positions 1\u20133 for 12 product-category keywords worth 4,200 combined monthly searches",
            "Captured featured snippets for 6 informational health queries",
            "Google Ads spend reduced by 35% as organic absorbs the volume",
          ]},
        ],
      },
      {
        id: "takeaway",
        title: "Key Takeaway: The Scandinavian Market Opportunity",
        blocks: [
          { type: "p", text: "Norwegian (and Swedish, Danish) ecommerce SEO is years behind English-speaking markets. Most competitors have thin, translated content and no technical SEO foundations. For brands willing to invest in native-language content with proper technical execution, the competition is thin and the payoff is huge." },
          { type: "callout", title: "The EcomSEO Framework Applied", text: "Technical cleanup \u2192 Keyword mapping by intent \u2192 Content deployment in phases \u2192 Authority building through PR \u2192 Iterate based on GSC data. This framework works across all Scandinavian health markets." },
          { type: "tools", items: ["Shopify", "Ahrefs", "Screaming Frog", "Google Search Console", "Google Analytics 4", "Surfer SEO", "ChatGPT (for content briefs)", "Schema.org Product Markup"] },
        ],
      },
    ],
  },
  {
    slug: "ecommerce-brand",
    title: "The Simple SEO Strategy That 7x\u2019d Their Traffic",
    subtitle: "From 295 to 2,160 Clicks in 90 Days Without Creating a Single New Page",
    category: "On-Page Optimization",
    listingImage:
      "/images/framer/EeufC2RDWV8GzZB7fBbKfmWJQuc.webp",
    niche: "Shapewear & Bodysuits",
    focus: "Zero-Content SEO Playbook",
    metrics: "295 → 2,160 clicks (7x)",
    date: "April 2025",
    heroImage:
      "/images/framer/1NlHRgxBwB6EoB1LTeD21KeUw.png",
    description:
      "This US-based shapewear and bodysuits brand had been running on Shopify for 2 years with a strong product line and 45K Instagram followers, but their organic search was an afterthought. Despite having 200+ product pages and 15 collection pages, they were stuck at 295 organic clicks/month. No SEO had ever been done: default Shopify settings, auto-generated meta descriptions, no internal linking strategy, and title tags that were just product names like \u201CBlack Bodysuit Shapewear.\u201D The site had 1,400+ URLs indexed (tag pages, paginated archives, collection filter pages) with only ~230 real pages. 3 separate pages were cannibalizing each other for \u201Cshapewear bodysuits.\u201D They were spending $4,200/month on Meta ads as their primary growth channel.",
    topProjectDescription:
      "Our approach was the Zero-Content Playbook: this site didn\u2019t need more content. It needed the existing 200+ pages to actually work. In weeks 1\u20132, we de-indexed 1,170 junk URLs (tag pages, author archives, attachment pages, paginated URLs), consolidated 8 cannibalizing page pairs using 301 redirects, removed 14 unused Shopify apps, and compressed images site-wide, dropping LCP from 4.8s to 1.9s. The cleaned sitemap went from 1,400+ to just 234 real URLs. In weeks 3\u20134, we rewrote SEO elements for every key page: optimized all 15 collection page titles with search-intent keywords like \u201Cshapewear bodysuits\u201D and \u201Ctummy control bodysuit,\u201D rewrote 85 product descriptions from 1\u20132 sentences to 150\u2013250 words with sizing info, compression levels, and styling suggestions, and added FAQ schema to the top 20 product pages using real customer questions from Zendesk.",
    image1:
      "/images/framer/NPCIdO7pC8YfeI9fXt2tozsr0.png",
    textAfterImage1:
      "Weeks 5\u20138 focused on internal linking and quick wins. We built an internal linking map connecting products \u2192 collections \u2192 related products \u2192 blog (the blog had 12 existing posts that weren\u2019t linked to anything). We identified 47 \u201Cstriking distance\u201D keywords at positions 11\u201320 and specifically optimized those pages. We added \u201CComplete the Look\u201D cross-sell sections to product pages for both UX and internal linking value. In weeks 9\u201312, we re-optimized 12 pages based on Search Console impression data and identified 6 new collection pages to create based on search demand. The result: clicks jumped from 295 to 2,160, a 7x increase. Page 1 keywords went from 4 to 28. CTR improved from 1.8% to 4.6% through title tag optimization alone. Index bloat was reduced by 83%.",
    image2:
      "/images/framer/dsId62uNnnWBWAr5Vi1Z5UqiQ.png",
    textAfterImage2:
      "The key insight was that the site had massive untapped potential in its existing Shopify content. By restructuring metadata, adding FAQ schema, improving keyword targeting on product and category pages, and removing 83% of the index noise, we unlocked traffic that was already within reach. No new content was created during the entire 90-day engagement . We maximized what already existed.",
    bottomProjectDescription:
      "This case proves that you don\u2019t always need more content. Sometimes the fastest SEO wins come from subtracting noise and amplifying signal. The brand now ranks on Page 1 for \u201Cshapewear bodysuits\u201D and \u201Ctummy control bodysuit\u201D among other high-intent US keywords, holds Page 1 for 28 keywords including 6 collection-level terms with 500+ monthly searches each, and has reallocated $1,500/month from Meta ads to SEO maintenance. With a 2.8% conversion rate and $85 AOV, organic now drives approximately $5,100/month, up from $720.",
    sections: [
      {
        id: "challenge",
        title: "The Challenge",
        blocks: [
          { type: "p", text: "This US-based shapewear and bodysuits brand had been running on Shopify for 2 years with a strong product line and 45K Instagram followers, but their organic search was an afterthought. No SEO had ever been done: default Shopify settings, auto-generated meta descriptions, no internal linking strategy, and title tags that were just product names. They were spending $4,200/month on Meta ads as their primary growth channel." },
          { type: "metrics-grid", items: [
            { label: "Monthly Organic Clicks", before: "295", after: "Target: 1,500+" },
            { label: "Indexed URLs", before: "1,400", after: "Target: ~230" },
            { label: "Cannibalizing Pages", before: "3 pages", after: "Target: 0" },
            { label: "Monthly Meta Ad Spend", before: "$4,200", after: "Reduce by 30%" },
          ]},
          { type: "h3", text: "Root Causes We Identified" },
          { type: "list", items: [
            "1,400+ URLs indexed including tag pages, paginated collection filters, and duplicate /collections/ URLs. Only ~230 were real pages worth indexing",
            "3 separate pages cannibalizing each other for \u201Cshapewear bodysuits\u201D, splitting click-through and confusing Google",
            "Title tags were bare product names like \u201CBlack Bodysuit Shapewear\u201D with no search-intent keywords",
            "Product descriptions were 1\u20132 sentences of manufacturer copy with no unique value",
            "No internal linking strategy. 12 existing blog posts weren\u2019t linked to any product or collection pages",
            "14 unused Shopify apps injecting scripts and slowing load times (LCP at 4.8s)",
          ]},
          { type: "tools", items: ["Ahrefs", "Screaming Frog", "Google Search Console", "Google Analytics 4", "Shopify Admin"] },
        ],
      },
      {
        id: "approach",
        title: "Our Approach: The Zero-Content Playbook",
        blocks: [
          { type: "h3", text: "Phase 1: Index Cleanup & Speed (Weeks 1\u20132)" },
          { type: "p", text: "This site didn\u2019t need more content. It needed the existing 200+ pages to actually work. We de-indexed 1,170 junk URLs (tag pages, collection filter pages, paginated URLs), consolidated 8 cannibalizing page pairs using 301 redirects, removed 14 unused Shopify apps, and compressed images site-wide, dropping LCP from 4.8s to 1.9s. The cleaned sitemap went from 1,400+ to just 234 real URLs." },
          { type: "highlight", text: "The biggest single win was index cleanup. Removing 1,170 junk URLs meant Google could focus 100% of crawl budget on pages that actually mattered. Within 2 weeks of submitting the cleaned sitemap, we saw crawl frequency on product pages increase by 4x." },
          { type: "h3", text: "Phase 2: On-Page Optimization (Weeks 3\u20134)" },
          { type: "p", text: "We rewrote SEO elements for every key page: optimized all 15 collection page titles with search-intent keywords, rewrote 85 product descriptions from 1\u20132 sentences to 150\u2013250 words with sizing info, fabric details, and styling suggestions. We added FAQ schema to the top 20 product pages using real customer questions pulled directly from Zendesk support tickets." },
          { type: "callout", title: "What We Found", text: "47 keywords were sitting at positions 11\u201320, the \u201Cstriking distance\u201D zone. These pages needed only minor optimization (better title tags, 1\u20132 internal links, slightly expanded content) to jump to Page 1. We prioritized these for the fastest ROI." },
          { type: "h3", text: "Phase 3: Internal Linking & Quick Wins (Weeks 5\u20138)" },
          { type: "p", text: "We built an internal linking map connecting products \u2192 collections \u2192 related products \u2192 blog. The 12 existing blog posts that weren\u2019t linked to anything became link hubs to relevant product and collection pages. We added \u201CComplete the Look\u201D cross-sell sections to product pages for both UX and internal linking value." },
          { type: "h3", text: "Phase 4: Iteration (Weeks 9\u201312)" },
          { type: "p", text: "We re-optimized 12 pages based on Search Console impression data and identified 6 new collection pages to create based on actual search demand we discovered during the engagement." },
        ],
      },
      {
        id: "didnt-work",
        title: "What Didn\u2019t Work (And What We Learned)",
        blocks: [
          { type: "p", text: "Not everything worked on the first attempt. Here\u2019s what we had to course-correct." },
          { type: "h3", text: "Keeping Shopify tag pages indexed with nofollow links" },
          { type: "p", text: "Our initial strategy was to keep Shopify tag filter pages indexed but add nofollow to internal links pointing to them, hoping to preserve any existing rankings while reducing crawl waste. It didn\u2019t work. Google continued crawling and indexing them, and they still diluted the site\u2019s crawl budget. After 2 weeks of no improvement, we fully noindexed all tag pages. Crawl efficiency improved immediately." },
          { type: "h3", text: "First round of product descriptions was too keyword-stuffed" },
          { type: "p", text: "The first batch of rewritten product descriptions leaned too heavily on exact-match keywords. CTR actually dropped on those pages in weeks 3\u20134 because the meta descriptions read like SEO spam rather than compelling copy. We rewrote them with natural language, focused on USPs and customer benefits, and wove keywords in organically. CTR recovered and exceeded baseline within 2 weeks." },
          { type: "highlight", text: "Modern SEO copywriting needs to serve the click, not just the ranking. A page that ranks #5 with a 6% CTR outperforms a page that ranks #3 with a 2% CTR. Always write for humans first, then optimize for search engines." },
        ],
      },
      {
        id: "results",
        title: "The Results: 90-Day Transformation",
        blocks: [
          { type: "metrics-grid", items: [
            { label: "Monthly Organic Clicks", before: "295", after: "2,160 (7x)" },
            { label: "Page 1 Keywords", before: "4", after: "28" },
            { label: "CTR", before: "1.8%", after: "4.6%" },
            { label: "Indexed URLs", before: "1,400", after: "234" },
            { label: "Monthly Organic Revenue", before: "$720", after: "$5,100" },
            { label: "Meta Ad Spend Reallocated", before: "$4,200/mo", after: "$2,700/mo" },
          ]},
          { type: "h3", text: "Headline Wins" },
          { type: "list", items: [
            "Ranks on Page 1 for \u201Cshapewear bodysuits\u201D and \u201Ctummy control bodysuit\u201D with combined 2,400+ monthly searches",
            "28 Page 1 keywords including 6 collection-level terms with 500+ monthly searches each",
            "Index bloat reduced , from 1,400 to 234 URLs",
            "CTR improved from 1.8% to 4.6% through title tag optimization alone",
            "$1,500/month reallocated from Meta ads to SEO maintenance",
            "No new content created during the entire 90-day . Pure optimization of existing pages",
          ]},
        ],
      },
      {
        id: "takeaway",
        title: "Key Takeaway: The Subtraction Principle",
        blocks: [
          { type: "p", text: "Sometimes removing is more powerful than adding. This site had 200+ real pages buried under 1,170 junk URLs, with cannibalization splitting their best keyword\u2019s potential across 3 pages. By subtracting the noise (junk URLs, unused plugins, duplicate content) and amplifying the signal (better titles, richer descriptions, strategic internal links), we unlocked 7x traffic growth without creating a single new page." },
          { type: "callout", title: "The EcomSEO Framework Applied", text: "Index cleanup \u2192 Cannibalization fixes \u2192 On-page optimization \u2192 Internal linking map \u2192 Striking distance targeting \u2192 Iterate with GSC data. This \u201CZero-Content Playbook\u201D works for any Shopify or WooCommerce store with existing product pages that aren\u2019t pulling their weight." },
          { type: "tools", items: ["Shopify", "Ahrefs", "Screaming Frog", "Google Search Console", "Zendesk", "Google Analytics 4"] },
        ],
      },
    ],
  },
  {
    slug: "skyrocket-ecom-site",
    title: "From 55 to 794 Clicks: +1,343% Organic Traffic",
    subtitle: "How We Grew a Shopify Plus Home & Living Store from 55 to 794 Organic Clicks",
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
      "This European home and living brand had built a beautiful Shopify Plus store with 350+ products, but they\u2019d never invested a single euro in SEO. Their entire acquisition strategy was Meta ads + Google Shopping, with \u20AC8,500/month in ad spend and rising CPAs squeezing margins. The starting point was brutal: 55 organic clicks per month on a site with 350+ product pages, zero content beyond product pages (no blog, no guides, no category descriptions), and no organic brand presence whatsoever. The CEO\u2019s wake-up call: Meta CPAs had increased 40% year-over-year, and they needed a channel where returns grow over time.",
    topProjectDescription:
      "We implemented a phased strategy targeting the Dutch-language market. In month 1, we fixed the technical foundation: restructured Shopify\u2019s default /collections/all/ URL structure, added Product schema on all 350+ products, blocked 800+ paginated and filtered URLs from crawling, and removed 4 unused Shopify apps , improving LCP from 3.8s to 2.1s. The content phase (months 2\u20134) was where the growth happened: we created 15 collection page guides, transforming each collection from a bare product grid into a product grid + 800\u20131,200 word buying guide (e.g., \u201CHow to Choose the Right Dining Table for Your Space\u201D). We published 8 blog posts targeting informational queries with purchase intent, rewrote 50 top product descriptions from manufacturer copy to unique content, and built comparison pages targeting high-intent queries.",
    image1:
      "/images/framer/NPCIdO7pC8YfeI9fXt2tozsr0.png",
    textAfterImage1:
      "In months 4\u20135, we connected every blog post to at least 3 product/collection pages with contextual links, added \u201CDesign Inspiration\u201D sections to product pages linking to related blog content, and identified 23 pages sitting at positions 8\u201315 for quick Page 1 wins. The results over 5 months: organic clicks surged from 55 to 794 (+1,343%), impressions grew from 1,200 to 18,400 (+1,433%), and ranking keywords went from 32 to 410+. The brand now holds 19 Page 1 rankings including 8 collection-level terms. Blog content drives 34% of organic traffic and has a 15% higher pages-per-session rate than ad traffic.",
    bottomProjectDescription:
      "The biggest lever was collection page content. Most Shopify stores treat collection pages as just a product grid. We turned them into the best buying guides in their niche for the Dutch market. Google rewarded that with rankings. The brand has reduced Google Ads spend by \u20AC2,200/month while organic revenue has grown to represent 18% of total, up from less than 1%. Their blended customer acquisition cost has dropped by 28%. Expert content, product pages, and internal linking all feed each other. The organic growth keeps building on itself.",
    sections: [
      {
        id: "challenge",
        title: "The Challenge",
        blocks: [
          { type: "p", text: "This European home and living brand had built a beautiful Shopify Plus store with 350+ products, but they\u2019d never invested a single euro in SEO. Their entire acquisition strategy was Meta ads + Google Shopping, with \u20AC8,500/month in ad spend and rising CPAs squeezing margins. Organic was essentially invisible." },
          { type: "metrics-grid", items: [
            { label: "Monthly Organic Clicks", before: "55", after: "Target: 500+" },
            { label: "Monthly Ad Spend", before: "\u20AC8,500", after: "Reduce by 25%" },
            { label: "Products with Content", before: "0 of 350+", after: "Target: Top 50+" },
            { label: "Blog Posts", before: "0", after: "Target: 8+" },
          ]},
          { type: "h3", text: "Root Causes We Identified" },
          { type: "list", items: [
            "350+ product pages with . Only manufacturer copy or bare product names",
            "No blog, no guides, no . Zero content beyond product pages",
            "Shopify\u2019s default /collections/all/ URL structure creating crawl waste",
            "800+ paginated and filtered URLs being crawled and indexed unnecessarily",
            "4 unused Shopify apps injecting JavaScript and dragging LCP to 3.8s",
            "Meta CPAs had increased 40% year-over-year with no organic channel to offset rising costs",
          ]},
          { type: "tools", items: ["Ahrefs", "Screaming Frog", "Google Search Console", "Google Analytics 4", "PageSpeed Insights"] },
        ],
      },
      {
        id: "approach",
        title: "Our Approach: Content-First in 3 Phases",
        blocks: [
          { type: "h3", text: "Phase 1: Technical Cleanup & Speed (Month 1)" },
          { type: "p", text: "We restructured Shopify\u2019s default /collections/all/ URL structure, added Product schema on all 350+ products, blocked 800+ paginated and filtered URLs from crawling, and removed 4 unused Shopify apps , improving LCP from 3.8s to 2.1s. This gave Google a clean, fast foundation to crawl." },
          { type: "highlight", text: "Speed improvements alone moved 3 existing product pages from position 15\u201320 to position 8\u201312 , before we\u2019d written a single word of new content. Google rewards fast Shopify stores, especially on mobile where most home & living searches happen." },
          { type: "h3", text: "Phase 2: Content Deployment (Months 2\u20134)" },
          { type: "p", text: "This was where the growth happened. We created 15 collection page guides, transforming each collection from a bare product grid into a product grid + 800\u20131,200 word buying guide (e.g., \u201CHow to Choose the Right Dining Table for Your Space\u201D). We published 8 blog posts targeting informational queries with purchase intent, rewrote 50 top product descriptions from manufacturer copy to unique content, and built comparison pages targeting high-intent queries." },
          { type: "callout", title: "What We Found", text: "Collection pages were the single biggest growth lever. Most Shopify stores treat them as bare product grids. By adding 800\u20131,200 words of genuine buying guidance with interior design advice, each collection page became the best resource in the niche, and Google ranked them accordingly." },
          { type: "h3", text: "Phase 3: Internal Linking & Striking Distance (Months 4\u20135)" },
          { type: "p", text: "We connected every blog post to at least 3 product/collection pages with contextual links, added \u201CDesign Inspiration\u201D sections to product pages linking to related blog content, and identified 23 pages sitting at positions 8\u201315 for quick Page 1 wins. Each blog post was designed as a traffic entry point that funneled visitors toward commercial pages." },
        ],
      },
      {
        id: "didnt-work",
        title: "What Didn\u2019t Work (And What We Learned)",
        blocks: [
          { type: "p", text: "Two significant course corrections shaped the final strategy." },
          { type: "h3", text: "Generic \u201CTop X\u201D listicle format for collection guides" },
          { type: "p", text: "We initially wrote collection page guides as generic \u201CTop 10 Dining Tables\u201D listicle-style content. They didn\u2019t rank. The format was too similar to affiliate review sites, and Google didn\u2019t see an ecommerce brand as the right source for that content type. When we rewrote them as genuine buying guides with interior design advice, room measurement tips, and material comparisons (content only a home furnishing expert would write), they started ranking within weeks." },
          { type: "h3", text: "Programmatic AI product descriptions" },
          { type: "p", text: "We tested using AI to generate product descriptions at scale for all 350+ products. The output . Some were decent, others were generic or contained subtle inaccuracies about materials and dimensions. After quality-checking the first 50, we switched to manual writing for the top 50 products (by revenue) and left lower-priority products for a later phase. Quality over quantity was the right call." },
          { type: "highlight", text: "Google can tell when collection page content is generic listicle filler vs. genuine expertise. For ecommerce brands, the winning format is buyer\u2019s guide content that demonstrates , not affiliate-style \u201Cbest of\u201D lists." },
        ],
      },
      {
        id: "results",
        title: "The Results: 5-Month Growth Engine",
        blocks: [
          { type: "metrics-grid", items: [
            { label: "Monthly Organic Clicks", before: "55", after: "794 (+1,343%)" },
            { label: "Monthly Impressions", before: "1,200", after: "18,400 (+1,433%)" },
            { label: "Ranking Keywords", before: "32", after: "410+" },
            { label: "Page 1 Rankings", before: "0", after: "19" },
            { label: "Organic Revenue Share", before: "<1%", after: "18%" },
            { label: "Google Ads Reduction", before: "\u20AC8,500/mo", after: "\u20AC6,300/mo" },
          ]},
          { type: "h3", text: "Headline Wins" },
          { type: "list", items: [
            "+1,343% organic click growth in 5 months",
            "19 Page 1 rankings including 8 collection-level terms",
            "Blog content drives 34% of organic traffic with 15% higher pages-per-session than ad traffic",
            "Organic revenue grew from <1% to 18% of total revenue",
            "Google Ads spend reduced by \u20AC2,200/month",
            "Blended customer acquisition cost dropped by 28%",
          ]},
        ],
      },
      {
        id: "takeaway",
        title: "Key Takeaway: Collection Pages Are the SEO Secret Weapon",
        blocks: [
          { type: "p", text: "Most Shopify stores waste their collection pages as bare product grids with no text content. These pages have natural commercial intent, category-level authority, and internal links to every . They are the highest-leverage pages on any ecommerce site. By transforming 15 collection pages into genuine buying guides with 800\u20131,200 words of expert content, we created the foundation for 19 Page 1 rankings and a self-reinforcing loop of organic growth." },
          { type: "callout", title: "The EcomSEO Framework Applied", text: "Technical speed fix \u2192 Collection page content strategy \u2192 Blog posts for informational intent \u2192 Internal linking connecting the funnel \u2192 Striking distance optimization \u2192 Iterate with GSC data. This content-first approach works especially well for Shopify Plus stores with large product catalogs." },
          { type: "tools", items: ["Shopify Plus", "Ahrefs", "Screaming Frog", "Google Search Console", "Google Analytics 4", "PageSpeed Insights", "Surfer SEO"] },
        ],
      },
    ],
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
      "This Norwegian DTC lifestyle brand had strong products, loyal customers, and a growing , but in Google, they were invisible. Running on Magento 2, they had 120 organic clicks/month on a site with 180+ products, product descriptions Google-Translated from English, and 4.2s load times from Magento\u2019s technical debt. Only 2 keywords ranked on Page 1, both for their brand name. The Norwegian market offered a huge opportunity: competitors were either international brands with poor Norwegian SEO or small local players with no SEO at all.",
    topProjectDescription:
      "Month 1 was a full Magento 2 technical overhaul. We resolved 2,400+ duplicate URLs from layered navigation (color/size filters creating indexable pages) through proper canonicalization, reduced the XML sitemap from 6,200 URLs to 420 indexable pages, and , implementing full-page cache, compressing images, and deferring non-critical JavaScript to drop LCP from 4.2s to 1.8s. Google had been spending 70% of crawl budget on faceted navigation; after cleanup, product pages were crawled 3x more frequently. In months 2\u20133, we hired a native Norwegian copywriter (our recommendation) to replace all Google Translate product descriptions with natural, benefit-focused Norwegian copy, created 12 collection landing pages targeting \u201C[product type] p\u00E5 nett\u201D queries, published 6 editorial blog posts in Norwegian, and optimized all meta titles and descriptions.",
    image1:
      "/images/framer/No5d0y8qqifK7jcosRZ9cTbJ9jk.png",
    textAfterImage1:
      "Months 4\u20135 focused on authority building. We pitched and secured coverage in 2 Norwegian lifestyle publications (editorial links, not sponsored), created a data-driven trend report about their product category that was picked up by 1 additional publication, and built relationships with 3 Norwegian bloggers for product reviews. In month 6, we re-optimized 15 pages based on Search Console data and set up an ongoing content calendar. Over 6 months, clicks grew from 120 to 787 (+556%), ranking keywords went from 45 to 380+, and Page 1 keywords in Norway went from 2 to 18. The brand now ranks #1 for their primary product category keyword (1,400 monthly searches).",
    bottomProjectDescription:
      "The Norwegian market proved the thesis: for brands willing to invest in proper Norwegian-language SEO, the competition is thin and the rewards are disproportionate. Organic revenue share went from 3% to 22% of total. Bounce rate on product pages dropped from 68% to 41% once Google Translate content was replaced with native Norwegian copy. The brand now allocates 40% of their marketing budget to SEO, up from zero, and has secured 2 editorial links from recognized Norwegian . Their first organic press coverage ever.",
    sections: [
      {
        id: "challenge",
        title: "The Challenge",
        blocks: [
          { type: "p", text: "This Norwegian DTC lifestyle brand had strong products, loyal customers, and a growing , but in Google, they were invisible. Running on Magento 2, they had a technical nightmare on top of a content problem. The Norwegian market offered a huge opportunity, but the site was actively working against itself." },
          { type: "metrics-grid", items: [
            { label: "Monthly Organic Clicks", before: "120", after: "Target: 500+" },
            { label: "Duplicate URLs", before: "2,400+", after: "Target: 0" },
            { label: "Page 1 Rankings", before: "2 (brand only)", after: "Target: 15+" },
            { label: "Load Time (LCP)", before: "4.2s", after: "Target: <2s" },
          ]},
          { type: "h3", text: "Root Causes We Identified" },
          { type: "list", items: [
            "Magento 2\u2019s layered navigation was creating 2,400+ duplicate URLs from color/size filter , all indexable",
            "XML sitemap contained 6,200 URLs when only ~420 were real, indexable pages",
            "Product descriptions were Google-Translated . Grammatically awkward and unnatural to Norwegian speakers",
            "Load time at 4.2s due to Magento\u2019s technical debt: no full-page cache, uncompressed images, render-blocking JavaScript",
            "Only 2 Page 1 rankings, both for the . Zero commercial keyword visibility",
            "Google was spending 70% of crawl budget on faceted navigation pages that shouldn\u2019t exist",
          ]},
          { type: "tools", items: ["Ahrefs", "Screaming Frog", "Google Search Console", "Google Trends", "Google PageSpeed Insights"] },
        ],
      },
      {
        id: "approach",
        title: "Our Approach: Localized SEO in 4 Phases",
        blocks: [
          { type: "h3", text: "Phase 1: Magento Technical Overhaul (Month 1)" },
          { type: "p", text: "We resolved 2,400+ duplicate URLs from layered navigation through proper canonicalization and robots.txt directives, reduced the XML sitemap from 6,200 URLs to 420 indexable pages, and , implementing full-page cache, compressing images, and deferring non-critical JavaScript to drop LCP from 4.2s to 1.8s. After cleanup, product pages were crawled 3x more frequently." },
          { type: "highlight", text: "Magento\u2019s layered navigation is one of the worst default SEO configurations of any major ecommerce platform. Without intervention, every color/size/material filter combination generates a unique, indexable URL. For a site with 180 products and 5 filter options each, that\u2019s thousands of junk pages competing with real product pages." },
          { type: "h3", text: "Phase 2: Native Norwegian Content (Months 2\u20133)" },
          { type: "p", text: "We hired a native Norwegian copywriter (our recommendation to the client) to replace all Google Translate product descriptions with natural, benefit-focused Norwegian copy. We created 12 collection landing pages targeting \u201C[product type] p\u00E5 nett\u201D (online) queries, published 6 editorial blog posts in Norwegian covering lifestyle and product-use topics, and optimized all meta titles and descriptions in natural Norwegian." },
          { type: "callout", title: "What We Found", text: "Bounce rate dropped from 68% to 41% on product pages once Google Translate content was replaced with native Norwegian copy. Norwegian consumers can immediately detect translated content, and it erodes trust. Investing in a native copywriter was the highest-ROI decision in this entire engagement." },
          { type: "h3", text: "Phase 3: Authority Building (Months 4\u20135)" },
          { type: "p", text: "We pitched and secured coverage in 2 Norwegian lifestyle publications (editorial links, not sponsored), created a data-driven trend report about their product category that was picked up by 1 additional publication, and built relationships with 3 Norwegian bloggers for product reviews. These were the brand\u2019s first organic press mentions ever." },
          { type: "h3", text: "Phase 4: Optimization & Iteration (Month 6)" },
          { type: "p", text: "We re-optimized 15 pages based on Search Console data, set up an ongoing content calendar for continued Norwegian content production, and identified the next wave of keyword targets based on 6 months of performance data." },
        ],
      },
      {
        id: "didnt-work",
        title: "What Didn\u2019t Work (And What We Learned)",
        blocks: [
          { type: "p", text: "Magento presented unique challenges that required debugging we didn\u2019t anticipate." },
          { type: "h3", text: "Magento\u2019s default canonical implementation conflicted with manual canonicals" },
          { type: "p", text: "We set up manual canonical tags for all product and category pages, but rankings didn\u2019t improve as expected. After a week of debugging, we discovered Magento\u2019s built-in canonical module was overriding our manual canonicals on certain page types, creating conflicting signals. We had to disable Magento\u2019s built-in canonical module entirely before our canonical strategy could take effect. This is a Magento-specific gotcha that\u2019s poorly documented." },
          { type: "h3", text: "Norwegian keyword volumes in Ahrefs were unreliable for long-tail terms" },
          { type: "p", text: "Ahrefs showed zero search volume for many Norwegian long-tail keywords that we suspected had real demand. We supplemented with Google Trends data and GSC impression counts to validate actual search interest. Several keywords showing \u201C0 volume\u201D in Ahrefs turned out to have 200\u2013500 monthly impressions in GSC. For small-language markets, third-party keyword tools . Always cross-reference with GSC impression data." },
          { type: "highlight", text: "For Norwegian, Swedish, and other Scandinavian markets, keyword research tools significantly underestimate search volumes for long-tail queries. Google Search Console impression data is the most reliable signal for actual demand in these markets. Build your keyword strategy around GSC data, not just Ahrefs volumes." },
        ],
      },
      {
        id: "results",
        title: "The Results: 6-Month Transformation",
        blocks: [
          { type: "metrics-grid", items: [
            { label: "Monthly Organic Clicks", before: "120", after: "787 (+556%)" },
            { label: "Ranking Keywords", before: "45", after: "380+" },
            { label: "Page 1 Rankings", before: "2 (brand only)", after: "18" },
            { label: "Organic Revenue Share", before: "3%", after: "22%" },
            { label: "Bounce Rate", before: "68%", after: "41%" },
            { label: "LCP", before: "4.2s", after: "1.8s" },
          ]},
          { type: "h3", text: "Headline Wins" },
          { type: "list", items: [
            "+556% organic click growth in 6 months",
            "#1 ranking for primary product  with 1,400 monthly searches",
            "18 Page 1 rankings, up from 2 (both previously brand-name only)",
            "Organic revenue share grew from 3% to 22% of total",
            "Bounce rate dropped 27 percentage points with native Norwegian content",
            "2 editorial links from recognized Norwegian . First organic press coverage ever",
            "Brand now allocates 40% of marketing budget to SEO, up from zero",
          ]},
        ],
      },
      {
        id: "takeaway",
        title: "Key Takeaway: The Localization Premium",
        blocks: [
          { type: "p", text: "Norwegian and Scandinavian markets reward native content disproportionately. Competitors in these markets are either international brands with poor local-language SEO or small local players with no SEO strategy at all. For brands willing to invest in native-language content with proper technical execution, the competition is thin and the returns are outsized. Translated content, whether by Google Translate or human translators working from English templates, simply cannot compete with content written natively." },
          { type: "callout", title: "The EcomSEO Framework Applied", text: "Magento technical overhaul \u2192 Duplicate URL cleanup \u2192 Native-language content creation \u2192 PR and authority building in local market \u2192 Iterate with GSC data. This framework applies to any Scandinavian ecommerce brand on any platform, but Magento sites especially benefit from the technical phase." },
          { type: "tools", items: ["Magento 2", "Ahrefs", "Screaming Frog", "Google Search Console", "Google Trends", "Google Analytics 4", "Google PageSpeed Insights", "Schema.org"] },
        ],
      },
    ],
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
      "This Dutch ecommerce brand had been struggling with stagnant impressions and declining organic visibility despite a strong product catalog. The root causes were intertwined: a weak technical SEO foundation meant Google couldn\u2019t properly crawl and index their pages, while thin content without topical depth meant they had nothing compelling to rank for. Their Shopify store had duplicate content from variant URLs, missing canonical tags, and no . Typical issues that compound over time.",
    topProjectDescription:
      "We implemented a dual strategy: fixing technical SEO issues while simultaneously building topical authority through comprehensive content clusters. On the technical side, we resolved duplicate content from Shopify variant URLs, implemented proper canonical tags across all product and collection pages, added structured data (Product, BreadcrumbList, FAQ schemas), optimized the sitemap to only include canonical indexable pages, and improved page speed by removing unused theme scripts. On the content side, we built out topical clusters aligned with their , creating pillar pages for each major category with supporting blog content targeting informational and commercial investigation queries in Dutch.",
    image1:
      "/images/framer/CWz53jkzCzmWB2WEYhmKnIlN9s.png",
    textAfterImage1:
      "Within 3 months, impressions surged by 814% compared to the same period the previous year. This wasn\u2019t . The improvement came from much better indexation (pages that Google previously couldn\u2019t find or chose not to index), richer SERP presence through structured data triggering rich results, and content that matched user intent across the entire buying journey. Page 1 keyword rankings more than doubled, and the site started appearing in SERP features (FAQs, product rich results) for the first time.",
    bottomProjectDescription:
      "The combined technical + content approach created a multiplier effect that neither strategy could have achieved alone. Clean technical foundations meant Google could find and understand the new content immediately, while the content gave Google a reason to rank the site higher. The brand keeps growing as new content gets indexed and existing pages climb in rankings. That is why we always audit technical foundations before investing . Building on a broken foundation wastes effort.",
    sections: [
      {
        id: "challenge",
        title: "The Challenge",
        blocks: [
          { type: "p", text: "This Dutch ecommerce brand had a strong product catalog but stagnant organic visibility. Impressions were flat year-over-year, and the site was barely registering in Dutch SERPs for anything beyond branded terms. The problem was two-fold: Google couldn't properly crawl what existed, and what it could crawl wasn't worth ranking." },
          { type: "metrics-grid", items: [
            { label: "YoY Impression Growth", before: "Flat", after: "Target: +500%" },
            { label: "Duplicate URLs", before: "Hundreds", after: "Target: 0" },
            { label: "Structured Data", before: "None", after: "Full coverage" },
            { label: "Content Depth", before: "Thin/generic", after: "Topical clusters" },
          ]},
          { type: "h3", text: "Root Causes We Identified" },
          { type: "list", items: [
            "Shopify variant URLs were creating hundreds of duplicate pages that split crawl budget and confused Google about which version to index",
            "Missing canonical tags across product and collection pages, so Google was picking random variants as the 'main' page",
            "Zero structured data on the entire site. No Product schema, no BreadcrumbList, no FAQ markup. The site was invisible in rich results",
            "Product content was thin manufacturer copy with no unique value. Collection pages were bare product grids with no text",
            "No topical authority signals. The site had products but no content proving expertise in their niche",
          ]},
          { type: "tools", items: ["Ahrefs", "Screaming Frog", "Google Search Console", "Google PageSpeed Insights", "Schema Markup Validator"] },
        ],
      },
      {
        id: "approach",
        title: "Our Approach: The Dual Strategy",
        blocks: [
          { type: "h3", text: "Phase 1: Technical Cleanup (Month 1)" },
          { type: "p", text: "We resolved duplicate content from Shopify variant URLs by implementing proper canonical tags across every product and collection page. The sitemap was rebuilt to include only canonical, indexable pages. We removed unused theme scripts that were adding 1.2s to load times. Structured data went live across the entire site: Product schema with price and availability, BreadcrumbList for navigation context, and FAQ schema on collection pages." },
          { type: "highlight", text: "After the technical cleanup, Google's crawl rate on product pages doubled within two weeks. Pages that had been sitting in supplemental index for months started getting re-crawled and re-evaluated. The technical fixes alone moved 6 pages from positions 30-50 into the 15-25 range before we'd published any new content." },
          { type: "h3", text: "Phase 2: Topical Authority Building (Months 1-3)" },
          { type: "p", text: "We built content clusters aligned with each major product category. Every cluster had a pillar page (a comprehensive guide on the topic in Dutch), supporting blog posts targeting informational and commercial investigation queries, and optimized product pages connected through contextual internal links. The content was written by native Dutch speakers, not translated." },
          { type: "callout", title: "What We Found", text: "The Dutch ecommerce space had a content gap we didn't expect. Most competitors had product pages but almost no informational content in Dutch. By publishing genuinely helpful buying guides and category explainers, we filled a void that Google was eager to surface. First-page rankings came faster than our projections." },
          { type: "h3", text: "Phase 3: Internal Linking & Iteration (Month 2-3)" },
          { type: "p", text: "Every new piece of content was connected to at least 3 relevant product or collection pages. We also added contextual links from product pages back to pillar content. This created a web of topical signals that reinforced authority across the entire site. We monitored GSC data weekly and adjusted titles, descriptions, and content based on actual impression and click patterns." },
        ],
      },
      {
        id: "didnt-work",
        title: "What Didn't Work (And What We Learned)",
        blocks: [
          { type: "p", text: "We hit two walls early on that forced us to rethink parts of the strategy." },
          { type: "h3", text: "Batch-deploying structured data broke page speed" },
          { type: "p", text: "We initially added all structured data types (Product, FAQ, BreadcrumbList, Organization) to every page at once through a single Shopify theme update. The JSON-LD injection method we used conflicted with the theme's existing scripts and added 800ms to load time on mobile. Google's Core Web Vitals scores dropped, and we saw a temporary dip in rankings for pages that had been stable. We rolled it back, then re-implemented structured data incrementally, testing each schema type in isolation before deploying site-wide." },
          { type: "h3", text: "English-language keyword research didn't map to Dutch search behavior" },
          { type: "p", text: "Our initial content plan was built by translating English keyword clusters into Dutch. The search volumes looked right in Ahrefs, but the actual Dutch search behavior was different. Dutch consumers use different phrasing patterns and compound words that don't translate directly. We scrapped the translated keyword map after week 2 and rebuilt it from scratch using Dutch Google Suggest data, GSC impressions, and manual SERP analysis in the Dutch market." },
          { type: "highlight", text: "Never assume keyword research translates across languages. Dutch compound words, informal phrasing, and regional search habits are genuinely different from English. Start with native-language search data, not translations." },
        ],
      },
      {
        id: "results",
        title: "The Results: 3-Month Multiplier",
        blocks: [
          { type: "metrics-grid", items: [
            { label: "YoY Impressions", before: "Flat", after: "+814%" },
            { label: "Page 1 Keywords", before: "Minimal", after: "2x+ increase" },
            { label: "SERP Features", before: "0", after: "Active (FAQ, Product rich results)" },
            { label: "Indexation Rate", before: "~60% of pages", after: "98% of target pages" },
            { label: "Crawl Frequency", before: "Low", after: "2x on product pages" },
            { label: "Page Speed (LCP)", before: "3.4s", after: "2.1s" },
          ]},
          { type: "h3", text: "Headline Wins" },
          { type: "list", items: [
            "+814% impression growth year-over-year in just 3 months",
            "Page 1 keyword rankings more than doubled",
            "First-ever SERP feature appearances: FAQ rich results and product carousels",
            "Much better indexation. Pages that Google previously ignored are now crawled and ranked",
            "Content clusters generating organic traffic across the full buying journey in Dutch",
          ]},
        ],
      },
      {
        id: "takeaway",
        title: "Key Takeaway: The Multiplier Effect",
        blocks: [
          { type: "p", text: "Technical SEO and content are not separate strategies. They multiply each other. Clean technical foundations let Google find and understand new content immediately. Quality content gives Google a reason to rank the site higher. Neither works well alone. We've seen brands invest heavily in content on broken sites and get nothing. We've seen technically perfect sites with no content stay invisible. The magic is in combining both." },
          { type: "callout", title: "The Dual Strategy Framework", text: "Fix crawlability and indexation first. Then deploy content clusters with internal linking. Then add structured data for rich results. Then iterate based on GSC data. The order matters because each phase builds on the previous one." },
          { type: "tools", items: ["Shopify", "Ahrefs", "Screaming Frog", "Google Search Console", "Google Analytics 4", "Schema Markup Validator", "Surfer SEO"] },
        ],
      },
    ],
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
      "This health-focused ecommerce site entered the competitive English-language market with zero keyword rankings and zero organic visibility. Unlike the Scandinavian markets where competition is thinner, the English health supplement space is dominated by established brands with thousands of backlinks and years of content. Our challenge was to build organic visibility , and we needed to do it fast enough to prove ROI within the first month.",
    topProjectDescription:
      "We launched an aggressive content and SEO strategy built on three pillars: topical content clusters targeting hundreds of health-related keywords with clear commercial intent, aggressive indexation tactics to ensure every page was discovered and indexed within days (not weeks), and comprehensive on-page optimization across every product and category page from day one. Structured data was implemented at launch (Product schema, FAQ schema, BreadcrumbList, and Organization markup) to maximize SERP visibility from the first crawl. We prioritized long-tail keywords with lower competition but high purchase intent, building topical authority from the bottom up rather than trying to compete for head terms immediately.",
    image1:
      "/images/framer/giRKTAJ5PgIKCjbCr9jgZG9ClNk.png",
    textAfterImage1:
      "Within just 27 days, the site went from zero to 1,323 tracked keywords. The rapid keyword acquisition was driven by the combination of well-researched topical clusters covering the full health supplement search space, product and category pages optimized with unique descriptions and structured data, and a clean technical foundation that allowed Google to crawl and index efficiently from the start. While most of these initial rankings were in positions 20\u2013100, they represented the foundation for . Each ranking keyword is a foothold that can be improved through content refinement, internal linking, and link building.",
    bottomProjectDescription:
      "Going from zero to 1,323 keywords in under a month demonstrates what\u2019s possible when you combine deep market research with precise technical execution and launch with SEO built-in rather than bolted on afterward. The brand is now positioned for sustained organic growth as these initial rankings mature. Our focus shifts to promoting the highest-potential keywords toward Page 1 through content upgrades and authority building over the next 3\u20136 months.",
    sections: [
      {
        id: "challenge",
        title: "The Challenge",
        blocks: [
          { type: "p", text: "This health-focused ecommerce site entered the English-language market with literally nothing. Zero keywords. Zero organic visibility. Zero content indexed. The English health supplement space is one of the most competitive SEO markets on the planet, dominated by brands with thousands of backlinks and years of content history." },
          { type: "metrics-grid", items: [
            { label: "Starting Keywords", before: "0", after: "Target: 500+ in 30 days" },
            { label: "Indexed Pages", before: "0", after: "Target: Full catalog" },
            { label: "Backlinks", before: "0", after: "Target: Foundation links" },
            { label: "Organic Clicks", before: "0", after: "Target: First traffic" },
          ]},
          { type: "h3", text: "Root Causes We Identified" },
          { type: "list", items: [
            "Brand new domain with zero authority. No backlink profile, no indexed pages, no search history",
            "English health supplement space is saturated with established players who have 5-10 years of content and thousands of referring domains",
            "No content beyond product pages. The site launched with bare product descriptions and no informational content",
            "No structured data, no XML sitemap submitted, no Google Search Console setup. Google didn't know the site existed",
            "Head terms like 'best supplements' were unrealistic targets. We needed a long-tail-first approach",
          ]},
          { type: "tools", items: ["Ahrefs", "Google Search Console", "Google Analytics 4", "Screaming Frog", "IndexNow API"] },
        ],
      },
      {
        id: "approach",
        title: "Our Approach: Launch SEO in 3 Phases",
        blocks: [
          { type: "h3", text: "Phase 1: Technical Launch Foundation (Days 1-5)" },
          { type: "p", text: "Before publishing any content, we set up the technical foundation for fast indexation. We submitted an XML sitemap through GSC, set up IndexNow for real-time page discovery, implemented structured data on every page from day one (Product, FAQ, BreadcrumbList, Organization), and verified all technical basics: robots.txt, canonical tags, mobile responsiveness, and page speed under 2s LCP." },
          { type: "highlight", text: "Most new sites wait weeks for Google to discover their pages organically. By combining XML sitemap submission, IndexNow API pings, and internal linking from day one, we got pages crawled within 24-48 hours of publication. Speed of indexation is everything for a new site trying to prove ROI fast." },
          { type: "h3", text: "Phase 2: Content Cluster Deployment (Days 5-20)" },
          { type: "p", text: "We built topical clusters targeting hundreds of health-related keywords with clear commercial intent. But we were strategic about it. Instead of going after head terms, we targeted long-tail keywords with lower competition but genuine purchase intent. Terms like 'magnesium glycinate vs citrate for sleep' instead of 'best magnesium supplement.' Each cluster had a pillar page, supporting articles, and optimized product pages all connected through contextual internal links." },
          { type: "callout", title: "What We Found", text: "Long-tail health keywords with purchase intent had surprisingly low competition even in English. Most established brands were fighting over head terms and ignoring the long tail. We found hundreds of keywords with 100-500 monthly searches where the top results were thin forum posts or outdated articles. Easy wins for a site with quality content." },
          { type: "h3", text: "Phase 3: On-Page Optimization & Monitoring (Days 20-27)" },
          { type: "p", text: "We optimized every product and category page with unique descriptions, benefit-focused copy, and semantic keyword variations. We monitored GSC daily for indexation status and early ranking signals. Any page not indexed within 48 hours got a manual inspection request. By day 27, we had 1,323 keywords tracked and a foundation of rankings across positions 20-100 ready to be improved." },
        ],
      },
      {
        id: "didnt-work",
        title: "What Didn't Work (And What We Learned)",
        blocks: [
          { type: "p", text: "Launching a brand-new site into a competitive market taught us some hard lessons fast." },
          { type: "h3", text: "Publishing too many pages at once triggered a soft sandbox" },
          { type: "p", text: "In the first week, we published 40 pages in a single day. Google crawled them all but ranked almost none. After some research, we realized that new domains publishing large amounts of content very quickly can trigger what appears to be a soft evaluation period. We slowed down to 5-8 pages per day, and indexation-to-ranking times improved noticeably. The pages from the initial batch eventually ranked too, but it took an extra week compared to the staggered approach." },
          { type: "h3", text: "Generic product descriptions didn't rank even with structured data" },
          { type: "p", text: "We launched 30 product pages with relatively thin descriptions (80-120 words) thinking structured data and good technical SEO would compensate. They got indexed fine but ranked for almost nothing. When we rewrote them to 250-400 words with unique benefit-focused copy, comparison information, and usage guidance, they started picking up long-tail rankings within days. On a new domain, content quality on product pages matters even more than on an established site." },
          { type: "highlight", text: "New domains don't get the benefit of the doubt from Google. Every page needs to clearly demonstrate value. Thin product descriptions that might rank on a domain with authority will get completely ignored on a fresh domain." },
        ],
      },
      {
        id: "results",
        title: "The Results: 27-Day Launch",
        blocks: [
          { type: "metrics-grid", items: [
            { label: "Total Keywords", before: "0", after: "1,323" },
            { label: "Time to First Rankings", before: "N/A", after: "~5 days" },
            { label: "Pages Indexed", before: "0", after: "Full catalog" },
            { label: "Structured Data Coverage", before: "0", after: "100%" },
            { label: "Avg. Indexation Speed", before: "N/A", after: "24-48 hours" },
            { label: "Long-tail KWs (pos 20-50)", before: "0", after: "400+" },
          ]},
          { type: "h3", text: "Headline Wins" },
          { type: "list", items: [
            "1,323 keywords ranking from absolute zero in 27 days",
            "Full catalog indexed within the first two weeks",
            "400+ long-tail keywords in positions 20-50, ready for content upgrades to push toward Page 1",
            "Structured data live from day one, triggering rich results within the first month",
            "Foundation set for sustained growth through content refinement and link building over the next 3-6 months",
          ]},
        ],
      },
      {
        id: "takeaway",
        title: "Key Takeaway: Launch with SEO Built In",
        blocks: [
          { type: "p", text: "Most ecommerce brands launch their site first and think about SEO months later. That's backwards. By building SEO into the launch from day one, this brand had 1,323 keywords ranking before most new sites even get fully indexed. The difference is preparation: keyword research done before launch, structured data implemented from the start, content clusters planned and deployed in the first weeks, and aggressive indexation tactics to make sure Google finds everything fast." },
          { type: "callout", title: "The Launch SEO Framework", text: "Technical foundation first (sitemap, schema, IndexNow). Then deploy content clusters targeting long-tail keywords with low competition. Then optimize product pages with unique, benefit-focused copy. Then monitor GSC daily and iterate. Speed matters on a new domain because early ranking signals compound." },
          { type: "tools", items: ["Ahrefs", "Google Search Console", "Google Analytics 4", "Screaming Frog", "IndexNow API", "Schema.org Product Markup", "Surfer SEO"] },
        ],
      },
    ],
  },
  {
    slug: "dutch-health-brand",
    title: "How We Grew Keyword Rankings by +987%",
    subtitle: "12 Months of Sustained SEO Growth for a Dutch Health & Supplements Brand on Shopify",
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
      "This Shopify-based health and supplements brand operating in the Dutch market partnered with us in early 2024 to scale their organic visibility. They had a functional store and moderate traffic, but organic performance had plateaued. Thin product content, no keyword strategy, broken internal linking, and missing structured data were all holding them back. They were ranking for 159 keywords total with minimal Page 1 presence, and their SERP feature appearances were limited to just 11.",
    topProjectDescription:
      "We deployed our Topical Authority Boost (TAB) strategy, a systematic approach to building topical dominance in the Dutch health supplement space. Phase 1 focused on developing comprehensive content clusters targeting hundreds of mid- and long-tail Dutch health keywords, organized by health concern (energy, immunity, sleep, joints, gut health). Each cluster included a pillar page, supporting blog posts, and optimized product pages all connected through contextual internal linking. Phase 2 tackled the technical foundation: we optimized internal linking architecture to distribute authority effectively, fixed broken tags and canonical issues, improved crawlability and indexation efficiency, and restructured the sitemap.",
    image1:
      "/images/framer/ZMRXxOQXaPPlksb8wJrCxtDjcbY.png",
    textAfterImage1:
      "On-page SEO was overhauled through precise optimization of meta titles, headers, and semantic structure across all product and category pages. Structured data was implemented for products (with price, availability, and reviews), FAQs, breadcrumbs, and aggregate ratings to unlock rich results in Dutch SERPs. We built high-quality backlinks from Dutch health-focused domains via guest posts and strategic partnerships to boost authority and trust signals.",
    image2:
      "/images/framer/QtPNuhsKVZNt3klckPPtQzUuW0.png",
    textAfterImage2:
      "Over 12 months, the numbers tell the story. Keywords surged from 159 to 1,729 (+987%). Page 1 rankings (positions 4\u201310) grew by 715%, while Page 2 rankings exploded by 1,450%. Mid-tier rankings (positions 21\u201350) increased by 2,788%, and longtail visibility (positions 51\u2013100) grew by 687%. SERP feature appearances jumped from 11 to 285 (+2,490%), including rich snippets, FAQ results, and product carousels.",
    bottomProjectDescription:
      "The TAB strategy proved that systematic topical authority building creates returns that grow over time. By month 12, the site had nearly 11x its original keyword presence, a 715% increase in Page 1 rankings, and dominated SERP features in the Dutch health supplement space. The steady influx of qualified, high-intent organic traffic has strong conversion potential and continues to grow as new content matures and existing pages climb in rankings. This case is our longest-running engagement and the best proof of what sustained SEO investment delivers.",
    sections: [
      {
        id: "challenge",
        title: "The Challenge",
        blocks: [
          { type: "p", text: "This Shopify-based health and supplements brand in the Dutch market had a functional store and moderate traffic, but organic growth had completely stalled. They'd been ranking for 159 keywords with minimal Page 1 presence, and their SERP feature appearances were limited to just 11. The site had all the classic symptoms of an SEO plateau: thin content, broken internal linking, and no structured data." },
          { type: "metrics-grid", items: [
            { label: "Total Keywords", before: "159", after: "Target: 1,000+" },
            { label: "SERP Features", before: "11", after: "Target: 100+" },
            { label: "Page 1 Rankings", before: "Minimal", after: "Target: 5x increase" },
            { label: "Content Clusters", before: "0", after: "Target: 5 health topics" },
          ]},
          { type: "h3", text: "Root Causes We Identified" },
          { type: "list", items: [
            "Product descriptions were thin manufacturer copy. Most under 100 words with no unique value for Dutch consumers",
            "Internal linking was essentially random. No logical connection between related products, categories, and content",
            "Zero structured data. No Product schema, no FAQ markup, no BreadcrumbList. The site was missing from all rich results",
            "No content beyond product and category pages. Zero blog posts, zero buying guides, zero informational content",
            "Canonical tags and sitemap had issues that caused crawl waste and confused Google about page priority",
          ]},
          { type: "tools", items: ["Ahrefs", "Screaming Frog", "Google Search Console", "Google Analytics 4", "Shopify Admin"] },
        ],
      },
      {
        id: "approach",
        title: "Our Approach: Topical Authority Boost (TAB)",
        blocks: [
          { type: "h3", text: "Phase 1: Content Clusters (Months 1-4)" },
          { type: "p", text: "We built comprehensive content clusters organized by health concern: energy, immunity, sleep, joints, and gut health. Each cluster had a pillar page (a 2,000+ word guide in Dutch), supporting blog posts targeting mid- and long-tail keywords, and optimized product pages. Everything was connected through contextual internal links. We published consistently over 4 months, building topical depth that signaled expertise to Google." },
          { type: "highlight", text: "The pillar page for 'immuunsysteem versterken' (strengthen immune system) alone generated 47 keyword rankings in its first 6 weeks. Pillar content in underserved Dutch health niches performs disproportionately well because there's so little quality competition." },
          { type: "h3", text: "Phase 2: Technical Foundation (Months 2-5)" },
          { type: "p", text: "While content was being published, we fixed the technical issues holding the site back. Internal linking was rebuilt with a logical hierarchy connecting pillar pages to supporting content to product pages. Broken canonical tags were fixed. The sitemap was cleaned up. Crawlability got noticeably better, and pages that Google had been ignoring started getting regular crawls." },
          { type: "callout", title: "What We Found", text: "The internal linking restructure had an outsized impact on mid-tier rankings (positions 21-50). Pages that had been stuck in positions 40-60 jumped to positions 20-35 within weeks of getting proper internal link support. Internal links from topically relevant content pages carry more weight than we initially estimated for Dutch-language sites." },
          { type: "h3", text: "Phase 3: Structured Data & Backlinks (Months 5-8)" },
          { type: "p", text: "We implemented structured data across the entire site: Product schema with price, availability, and reviews, FAQ schema on collection and pillar pages, BreadcrumbList for navigation context, and aggregate rating markup. Simultaneously, we built backlinks from Dutch health-focused domains through guest posts and strategic partnerships." },
          { type: "h3", text: "Phase 4: Optimization & Scaling (Months 8-12)" },
          { type: "p", text: "The final phase was pure iteration. We re-optimized meta titles and headers based on 8 months of GSC data. We expanded content clusters into sub-topics that were generating impressions but didn't have dedicated pages. We pushed striking-distance keywords (positions 11-20) toward Page 1 with targeted content upgrades." },
        ],
      },
      {
        id: "didnt-work",
        title: "What Didn't Work (And What We Learned)",
        blocks: [
          { type: "p", text: "Over 12 months, we had plenty of time to make mistakes and fix them. Here are the two biggest." },
          { type: "h3", text: "Guest post links from non-Dutch domains didn't move the needle" },
          { type: "p", text: "In month 5, we secured 4 guest post links from English-language health blogs with decent domain authority. Rankings didn't budge. When we switched to Dutch-language health domains with lower DA but strong topical relevance in the Netherlands, we saw ranking improvements within 3 weeks. For a Dutch-language site, links from Dutch domains with topical relevance matter far more than links from high-DA English sites. We wasted about 3 weeks and budget on the wrong link targets." },
          { type: "h3", text: "FAQ schema on product pages with generic questions got filtered" },
          { type: "p", text: "We added FAQ schema to all product pages using questions we wrote ourselves based on keyword research. Google showed the FAQ rich results for about 2 weeks, then stopped. When we replaced them with real customer questions (pulled from their support inbox and product reviews), FAQ rich results came back and stayed. Google's quality systems can detect manufactured FAQ content. It's not worth faking." },
          { type: "highlight", text: "Two clear lessons from 12 months of work. First: for Dutch-language sites, prioritize Dutch-language backlinks with topical relevance over high-DA English links. Second: FAQ schema only works long-term with genuine customer questions. Google filters the rest." },
        ],
      },
      {
        id: "results",
        title: "The Results: 12 Months of Steady Growth",
        blocks: [
          { type: "metrics-grid", items: [
            { label: "Total Keywords", before: "159", after: "1,729 (+987%)" },
            { label: "Page 1 Rankings (4-10)", before: "Minimal", after: "+715% increase" },
            { label: "Page 2 Rankings", before: "Low", after: "+1,450% increase" },
            { label: "Mid-tier (21-50)", before: "Low", after: "+2,788% increase" },
            { label: "SERP Features", before: "11", after: "285 (+2,490%)" },
            { label: "Longtail (51-100)", before: "Low", after: "+687% increase" },
          ]},
          { type: "h3", text: "Headline Wins" },
          { type: "list", items: [
            "+987% keyword growth over 12 months. From 159 to 1,729 total keywords",
            "SERP features exploded from 11 to 285 appearances. Rich snippets, FAQ results, and product carousels",
            "Page 1 rankings grew by 715%. The site went from barely visible to competing for top positions",
            "Mid-tier rankings (positions 21-50) increased by 2,788%, building a massive pipeline of keywords ready to push higher",
            "Growth kept accelerating: each month outperformed the last as content matured and authority built",
          ]},
        ],
      },
      {
        id: "takeaway",
        title: "Key Takeaway: Why TAB Keeps Working Over Time",
        blocks: [
          { type: "p", text: "The Topical Authority Boost strategy works because it compounds. Month 1 content strengthens month 3 content through internal links. Month 6 backlinks boost pages published in month 2. By month 12, the entire site is stronger than the sum of its parts. This is our longest-running engagement and the clearest proof that sustained SEO investment doesn't just add up. It multiplies." },
          { type: "callout", title: "The TAB Framework", text: "Build content clusters by health concern. Connect everything with contextual internal links. Fix technical foundations in parallel. Add structured data for rich results. Build topically relevant backlinks from Dutch domains. Iterate monthly with GSC data. Repeat for 12 months. The results compound every quarter." },
          { type: "tools", items: ["Shopify", "Ahrefs", "Screaming Frog", "Google Search Console", "Google Analytics 4", "Surfer SEO", "Schema.org Markup", "Google Trends"] },
        ],
      },
    ],
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
      "This ecommerce brand launched into the Swedish health market in August 2024 with virtually no . Only 23 organic keywords ranking and zero Page 1 positions. The Swedish health and wellness space, while less competitive than English-language markets, still required a deliberate localized strategy to cut through. We needed to build a sustainable SEO engine from scratch, targeting Swedish-language queries with commercially viable search volume.",
    topProjectDescription:
      "By April 2025, the numbers spoke for themselves. Organic keyword rankings exploded by over 1,060%. The brand went from zero to 28 keywords on Page 1, 36 on Page 2, and 105 in mid-tier rankings (positions 21\u201350). Longtail visibility improved with 66 keywords ranking between positions 51\u2013100. SERP feature appearances grew from 1 to 32, expanding visibility across FAQs and snippet results. This growth was powered by a Topical Authority SEO strategy tailored specifically to the , starting with localized keyword research based on user intent and search behavior unique to Sweden.",
    image1:
      "/images/framer/GR8HujXonhuGbMdpDyze8EJSNJU.png",
    textAfterImage1:
      "We built structured content silos around symptoms, treatments, and informational topics relevant to Swedish health consumers. Each silo connected informational blog content to commercial product and category pages through contextual internal links, creating a natural content architecture that both users and Google can navigate. On-page SEO was optimized for Swedish search patterns (which differ from Norwegian and Danish in keyword structure and user behavior), and structured data was deployed across all content types.",
    image2:
      "/images/framer/6dEoP51kE51ZPZ2sOd0wwzjoxsE.png",
    textAfterImage2:
      "Clean technical optimization ensured every page was indexable, relevant, and built to rank. We implemented proper hreflang tags for Swedish (sv-SE), optimized the sitemap structure, and built strategic links from Nordic wellness domains to raise domain authority and trust signals specific to the Swedish market. Internal linking connected the full funnel from informational searches to product pages.",
    bottomProjectDescription:
      "The brand now owns visibility across the entire : from informational health searches to high-intent product queries. Many of the Page 2 and Page 3 keywords are now poised for quick wins with targeted content upgrades and additional internal linking. We\u2019re doubling down on FAQ content and product page optimization to accelerate the next wave of Page 1 entries. The Swedish market, like Norway, rewards brands that invest in . Translated content simply cannot compete.",
    sections: [
      {
        id: "challenge",
        title: "The Challenge",
        blocks: [
          { type: "p", text: "This ecommerce brand launched into the Swedish health market in August 2024 with almost nothing to show organically. Just 23 keywords ranking. Zero Page 1 positions. The Swedish health and wellness space is less competitive than English-language markets, but it still requires a deliberate localized strategy to gain traction." },
          { type: "metrics-grid", items: [
            { label: "Starting Keywords", before: "23", after: "Target: 200+" },
            { label: "Page 1 Rankings", before: "0", after: "Target: 15+" },
            { label: "SERP Features", before: "1", after: "Target: 20+" },
            { label: "Content in Swedish", before: "Minimal", after: "Full coverage" },
          ]},
          { type: "h3", text: "Root Causes We Identified" },
          { type: "list", items: [
            "No Swedish-language content strategy. Product pages had basic descriptions but nothing targeting informational or commercial investigation queries",
            "No content silos or topical structure. The site was flat with no logical grouping of related content",
            "Missing hreflang tags for Swedish (sv-SE). Google wasn't confident about the site's language targeting",
            "No internal linking architecture connecting blog content to product and category pages",
            "SERP feature presence was limited to 1 appearance. No FAQ schema, no structured data beyond basic product info",
          ]},
          { type: "tools", items: ["Ahrefs", "Google Search Console", "Google Trends (Sweden)", "Screaming Frog", "Surfer SEO"] },
        ],
      },
      {
        id: "approach",
        title: "Our Approach: Swedish Market SEO Launch",
        blocks: [
          { type: "h3", text: "Phase 1: Localized Keyword Research (Month 1)" },
          { type: "p", text: "We started with deep keyword research specific to Swedish search behavior. Swedish health consumers search differently than Norwegian or Danish ones. The compound word structures, informal phrasing, and seasonal patterns are distinct. We mapped keywords by intent across symptoms, treatments, and product categories relevant to Swedish health consumers." },
          { type: "highlight", text: "Swedish search behavior differs from Norwegian more than most people assume. Swedish consumers use longer compound words and more specific symptom-based queries. 'Kosttillskott for better somn' (supplements for better sleep) patterns are more common in Sweden than the direct product searches we see in Norway. This shaped our entire content strategy." },
          { type: "h3", text: "Phase 2: Content Silo Construction (Months 2-5)" },
          { type: "p", text: "We built structured content silos around symptoms, treatments, and informational topics. Each silo connected informational blog content to commercial product and category pages through contextual internal links. On-page SEO was optimized for Swedish search patterns, and structured data was deployed across all content types. We implemented proper hreflang tags for sv-SE to give Google clear language signals." },
          { type: "callout", title: "What We Found", text: "The Swedish health content market has even less competition than Norwegian. We found entire topic clusters where the top-ranking pages were thin affiliate sites or machine-translated content from English. A brand publishing genuine, native Swedish health content can dominate these spaces with relatively modest investment." },
          { type: "h3", text: "Phase 3: Authority & Technical Polish (Months 5-8)" },
          { type: "p", text: "We built strategic links from Nordic wellness domains. The sitemap was optimized. Internal linking connected the full funnel from informational searches to product pages. Every page was checked for proper indexation signals, mobile performance, and clean URL structure." },
        ],
      },
      {
        id: "didnt-work",
        title: "What Didn't Work (And What We Learned)",
        blocks: [
          { type: "p", text: "The Swedish market had a few surprises that forced mid-project adjustments." },
          { type: "h3", text: "Reusing Norwegian content structures for the Swedish market" },
          { type: "p", text: "We'd had success with certain content formats in Norway, so we initially applied the same templates to Sweden. The articles ranked poorly. After analyzing Swedish SERPs more carefully, we realized Swedish users expect more detailed, research-backed content. The casual, practical tone that works in Norwegian health content felt too light for Swedish audiences. We rewrote 8 articles with more depth, added citations to Swedish health authorities, and rankings improved within 3 weeks." },
          { type: "h3", text: "Targeting English-style product category keywords" },
          { type: "p", text: "Our initial category page targets were direct translations of English commercial keywords like 'best magnesium supplement.' In Swedish, these queries have much lower volume than we expected. Swedish consumers tend to search by symptom ('kosttillskott mot trotthet' = supplements for tiredness) rather than by product category. We rebuilt our category page keyword strategy around symptom-based queries, and traffic to those pages tripled within 6 weeks." },
          { type: "highlight", text: "Don't assume Scandinavian markets are interchangeable. Swedish health consumers search by symptom and concern. Norwegian consumers search more by product type. The content strategy needs to match the local search behavior, not just translate the language." },
        ],
      },
      {
        id: "results",
        title: "The Results: 8-Month Growth Explosion",
        blocks: [
          { type: "metrics-grid", items: [
            { label: "Total Keywords", before: "23", after: "267 (+1,060%)" },
            { label: "Page 1 Rankings", before: "0", after: "28" },
            { label: "Page 2 Rankings", before: "0", after: "36" },
            { label: "Mid-tier (21-50)", before: "~10", after: "105" },
            { label: "SERP Features", before: "1", after: "32" },
            { label: "Longtail (51-100)", before: "~13", after: "66" },
          ]},
          { type: "h3", text: "Headline Wins" },
          { type: "list", items: [
            "+1,060% keyword growth in 8 months. From 23 to 267 total keywords ranking",
            "28 Page 1 keywords from zero. The brand went from invisible to competitive in Swedish SERPs",
            "SERP feature appearances grew from 1 to 32, including FAQ results and featured snippets",
            "36 Page 2 keywords now positioned for quick wins with targeted content upgrades",
            "Full-funnel visibility in Sweden: informational health searches through to product purchase queries",
          ]},
        ],
      },
      {
        id: "takeaway",
        title: "Key Takeaway: The Swedish Market Opportunity",
        blocks: [
          { type: "p", text: "The Swedish health and wellness market is wide open for brands willing to invest in native content. Competition is thin. Most existing content is either translated from English or produced by low-quality affiliate sites. A brand that publishes genuine, well-researched Swedish health content with proper technical SEO can own entire topic areas within months. The 36 Page 2 keywords and 105 mid-tier rankings are a pipeline of future Page 1 positions waiting to be pushed over the line." },
          { type: "callout", title: "The Swedish Market Framework", text: "Research Swedish-specific search behavior (symptom-based queries, compound words). Build content silos around health concerns, not product categories. Write natively in Swedish with citations to Swedish health authorities. Implement hreflang and structured data. Build links from Nordic wellness domains. The market rewards quality content with fast ranking improvements." },
          { type: "tools", items: ["Ahrefs", "Google Search Console", "Google Trends (Sweden)", "Screaming Frog", "Surfer SEO", "Schema.org Markup", "Google Analytics 4"] },
        ],
      },
    ],
  },
  {
    slug: "beauty-brand-dominated-in-google",
    title: "One Page, 7X More Clicks Than the Homepage",
    subtitle: "How One SEO Landing Page Pulled 7x More Clicks Than the Homepage for a Swedish Beauty Brand",
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
      "Most ecommerce stores assume their homepage will always be their top organic performer. This Swedish beauty and nails brand proved that assumption wrong. We created a single strategically designed landing page targeting the high-intent Swedish keyword \u201Crandiga naglar\u201D , and it delivered 3,895 clicks compared to just 463 on the homepage, a 740% increase. Impressions followed the same pattern, growing by 634% over the homepage. This . It was the result of precise keyword targeting, content matched to user intent, and technical execution.",
    topProjectDescription:
      "We identified \u201Crandiga naglar\u201D as a high-intent keyword with strong seasonal search patterns in Sweden. Rather than trying to rank an existing product page, we created a dedicated SEO landing page tailored to match the exact user intent: visual inspiration, technique tips, and direct links to relevant products. Every on-page element : headers, image alt text, meta descriptions and semantically related terms for topical depth. Internal links from key product and category pages supported discoverability, and schema markup (Product, BreadcrumbList, FAQ) was implemented to maximize SERP visibility.",
    image1:
      "/images/framer/NZW07WrJngD5CyDcjBNtNoUlo.png",
    textAfterImage1:
      "The technical foundation was equally important: fast mobile performance (LCP under 2s), clean URL structure, proper indexation signals, and responsive image handling for the visual-heavy content. The page was designed mobile-first because beauty consumers mostly search on their phones. Within weeks of indexation, the page began outranking established beauty blogs and magazine sites for the target keyword in Swedish SERPs.",
    image2:
      "/images/framer/NRLNJlmz2DFf1v1TS6ES8PDNEu4.png",
    textAfterImage2:
      "The key insight: unlike the broad focus of a homepage, this page was laser-focused on one trending, visual, and high-converting keyword. It matched user intent exactly, delivered genuine value (inspiration + product links), and was technically sound. That combination of intent match, value, and technical execution is what drives outsized results.",
    bottomProjectDescription:
      "We\u2019re now rolling out this same strategy across other high-intent Swedish beauty topics: \u201Cfrans\u00E4ka naglar,\u201D \u201Combre naglar,\u201D and \u201Cgelenaglar hemma.\u201D Each follows the same framework: identify high-intent keywords with visual search patterns, create dedicated landing pages that match user intent better than any competitor, and connect them to the product catalog through strategic internal linking. The beauty and nails space rewards brands that understand their customers\u2019 . This case proves that a single well-executed page can outperform an entire website.",
    sections: [
      {
        id: "challenge",
        title: "The Challenge",
        blocks: [
          { type: "p", text: "This Swedish beauty and nails brand had decent product pages and a homepage that pulled some branded traffic. But for non-branded searches, they were invisible. The homepage was getting 463 clicks per month from organic. Product and category pages were barely registering. The brand assumed SEO meant optimizing what already existed. We had a different idea." },
          { type: "metrics-grid", items: [
            { label: "Homepage Organic Clicks", before: "463/mo", after: "Benchmark" },
            { label: "Non-branded Rankings", before: "Near zero", after: "Target: Top 3 for key term" },
            { label: "Landing Pages for SEO", before: "0", after: "Target: 1 proof of concept" },
            { label: "SERP Features", before: "None", after: "Target: FAQ + Product results" },
          ]},
          { type: "h3", text: "Root Causes We Identified" },
          { type: "list", items: [
            "No dedicated landing pages for high-intent non-branded keywords. All traffic was going to generic category or product pages that didn't match search intent",
            "The homepage was trying to rank for everything and ranking well for nothing specific",
            "Product pages were optimized for browsing, not for search. No long-form content, no FAQ sections, no topical depth",
            "Swedish beauty keywords with visual intent (nail designs, styles, techniques) had no content on the site at all",
            "Competitors ranking for these terms were beauty blogs and magazines, not ecommerce brands. The SERP format favored visual, inspirational content",
          ]},
          { type: "tools", items: ["Ahrefs", "Google Search Console", "Google Trends (Sweden)", "Screaming Frog", "PageSpeed Insights"] },
        ],
      },
      {
        id: "approach",
        title: "Our Approach: Intent-Matched Landing Page Strategy",
        blocks: [
          { type: "h3", text: "Phase 1: Keyword & Intent Analysis (Week 1)" },
          { type: "p", text: "We identified 'randiga naglar' (striped nails) as the target keyword. It had strong seasonal search patterns in Sweden, clear commercial intent (people searching this want products to create striped nails), and the current top results were beauty blogs with mediocre content. An ecommerce brand with great visual content and actual products had a real shot at outranking them." },
          { type: "highlight", text: "We picked this keyword because the SERP was beatable. The top results were image-light blog posts with no product links. A page combining visual inspiration with actual products to buy would be a better result for the searcher. Google rewards pages that satisfy intent better than the current top results." },
          { type: "h3", text: "Phase 2: Page Creation & Optimization (Weeks 2-3)" },
          { type: "p", text: "We built a dedicated landing page designed mobile-first (beauty consumers overwhelmingly search on phones). The page combined visual inspiration images, technique tips, and direct links to relevant products. Every on-page element was optimized: headers with semantic variations, image alt text describing each nail design, meta descriptions written for click-through, and FAQ schema using real questions from beauty forums and social media." },
          { type: "callout", title: "What We Found", text: "Beauty and nail keywords in Sweden have a strong visual intent component. The pages that rank best aren't text-heavy guides. They're visual-first pages with helpful context. We designed the page as a visual gallery with supporting text, not an article with supporting images. This matched what users actually wanted to see." },
          { type: "h3", text: "Phase 3: Technical Execution & Internal Linking (Week 3-4)" },
          { type: "p", text: "We ensured fast mobile performance with LCP under 2s, implemented responsive image handling for the visual-heavy content, added Product and BreadcrumbList schema, and built internal links from key product and category pages to support discoverability. The page was submitted through GSC and indexed within 48 hours." },
        ],
      },
      {
        id: "didnt-work",
        title: "What Didn't Work (And What We Learned)",
        blocks: [
          { type: "p", text: "Even a focused single-page strategy had its missteps." },
          { type: "h3", text: "The first version was too text-heavy" },
          { type: "p", text: "Our initial page design followed a standard SEO content template: long paragraphs of text with images interspersed. It ranked on page 2 but didn't climb further. When we analyzed the user behavior data, bounce rate was 72% and average time on page was just 18 seconds. Users wanted visual inspiration, not a blog post. We redesigned the page with images as the primary content and text as supporting context. Bounce rate dropped to 38% and time on page tripled. Rankings jumped to top 3 within two weeks of the redesign." },
          { type: "h3", text: "Original image sizes killed mobile load times" },
          { type: "p", text: "The visual-first design meant lots of high-resolution images. Our first deployment had images averaging 400KB each, and the page had 15+ images. Mobile LCP hit 4.1s. Google's CWV scores dropped the page from position 8 to position 14 within a week. We implemented responsive images with srcset, WebP format, and lazy loading for below-fold images. LCP dropped to 1.8s and rankings recovered within 10 days." },
          { type: "highlight", text: "Visual-intent pages need careful performance optimization. More images means more risk of slow load times. Always use responsive images, modern formats (WebP/AVIF), and lazy loading. A beautiful page that loads slowly will lose rankings to an ugly page that loads fast." },
        ],
      },
      {
        id: "results",
        title: "The Results: One Page, Massive Impact",
        blocks: [
          { type: "metrics-grid", items: [
            { label: "Landing Page Clicks", before: "0", after: "3,895/mo" },
            { label: "Homepage Clicks", before: "463/mo", after: "463/mo (unchanged)" },
            { label: "Page vs Homepage", before: "N/A", after: "7.4x more clicks" },
            { label: "Impressions vs Homepage", before: "N/A", after: "+634%" },
            { label: "Target Keyword Position", before: "Not ranking", after: "Top 3" },
            { label: "Bounce Rate (final)", before: "72% (v1)", after: "38% (v2)" },
          ]},
          { type: "h3", text: "Headline Wins" },
          { type: "list", items: [
            "Single landing page generates 3,895 clicks/month. That's 7.4x more than the homepage",
            "Impressions 634% higher than the homepage from one page targeting one keyword",
            "Top 3 ranking for 'randiga naglar' in Swedish SERPs, outranking established beauty magazines",
            "Page outperforms every product page, category page, and the homepage combined for organic traffic",
            "Strategy now being rolled out to 'franska naglar,' 'ombre naglar,' and 'gelenaglar hemma'",
          ]},
        ],
      },
      {
        id: "takeaway",
        title: "Key Takeaway: One Perfect Page Beats a Thousand Mediocre Ones",
        blocks: [
          { type: "p", text: "Most ecommerce brands spread SEO effort thin across hundreds of pages. The opposite approach can work better. One page, built with precision for one high-intent keyword, generated 7.4x more organic traffic than the homepage. The secret isn't volume. It's intent matching. This page gave searchers exactly what they wanted: visual inspiration plus products to buy. No competitor was doing that." },
          { type: "callout", title: "The Intent-Match Landing Page Framework", text: "Find a high-intent keyword where the current top results don't fully satisfy the searcher. Build a dedicated page that matches the intent better than anything else in the SERPs. For visual keywords, lead with images. For research keywords, lead with data. For comparison keywords, lead with tables. Match the format to the intent, then execute technically. One great page beats ten average ones." },
          { type: "tools", items: ["Ahrefs", "Google Search Console", "Google Trends (Sweden)", "PageSpeed Insights", "Screaming Frog", "Schema.org Markup", "Squoosh (image optimization)"] },
        ],
      },
    ],
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
      "This Dutch online jewelry store had strong branding and a loyal customer base, but its organic traffic didn\u2019t reflect its potential. The site suffered from a flat architecture with all products dumped into a few broad categories, missing internal linking logic, and , especially around thematic and seasonal collections. Customers searching for specific styles (\u201Czilveren armband dames,\u201D \u201Cverlovingsring vintage\u201D) were finding competitors instead because the site had no dedicated pages for these queries.",
    topProjectDescription:
      "We restructured the entire category system, launching over 100 clearly defined collection pages organized around three axes: product style (minimalist, vintage, statement), material/type (silver, gold, gemstone), and search behavior/occasions (engagement rings, birthday gifts, everyday jewelry). Each new collection page was built as an SEO-optimized landing page with unique Dutch content, targeted metadata, internal links to relevant products and related collections, and structured data for reviews, breadcrumbs, and product availability. This created a deep, navigable architecture where every search query had a dedicated, optimized destination.",
    image1:
      "/images/framer/gyRmy5K001Wwpq2CejOLpA6Qi0.png",
    textAfterImage1:
      "Our SEO work included a complete Dutch keyword strategy mapping commercial intent queries to each new collection page, enriched product descriptions that connected items to their collection context, and a smart internal linking system that tied products, blogs, and collections together in a logical hierarchy. Each collection page included buying guidance, styling tips, and . They were genuinely useful for shoppers rather than empty keyword targets.",
    image2:
      "/images/framer/HnlZ0KRfnEL41sycz9vZb9TITE4.png",
    textAfterImage2:
      "Technical SEO was cleaned up in parallel: canonical tags prevented the duplicate content issues that plague jewelry sites with variant pages, sitemap improvements ensured only canonical collection and product pages were submitted, mobile speed was optimized for the image-heavy design, and structured data was implemented for aggregate reviews, breadcrumbs, and product availability across all pages.",
    textAfterImage3:
      "By April 2025, the site was ranking broadly for both generic and niche Dutch jewelry terms like \u201Czilveren armband dames,\u201D \u201Cverlovingsring vintage,\u201D \u201Cgouden ketting heren,\u201D and dozens more. Page 1 rankings span multiple collection pages, and the site now captures search intent across the full , from browsing for inspiration to purchasing specific pieces. Deep category SEO with structured content can outperform paid channels for jewelry e-commerce.",
    sections: [
      {
        id: "challenge",
        title: "The Challenge",
        blocks: [
          { type: "p", text: "This Dutch jewelry store had beautiful branding and repeat customers. Organic search was a different story. Products sat in a handful of broad categories, and Google had zero reason to rank them above competitors who had proper collection pages for every search intent." },
          { type: "metrics-grid", items: [
            { label: "Category Pages", before: "12 generic", after: "Target: 100+" },
            { label: "Page 1 Rankings (Dutch)", before: "~8", after: "Target: 50+" },
            { label: "Internal Links to Products", before: "Minimal", after: "Full silo structure" },
          ]},
          { type: "h3", text: "Root Causes We Identified" },
          { type: "list", items: [
            "Flat architecture: all products dumped into broad categories like 'Armbanden' and 'Ringen' with no subcategories for style, material, or occasion",
            "No dedicated pages for high-intent Dutch queries like 'zilveren armband dames' or 'verlovingsring vintage' that competitors were already ranking for",
            "Internal linking between collections, products, and blog posts was basically non-existent",
            "Variant pages for size and color were creating duplicate content issues with no canonical tags in place",
            "Structured data was missing entirely: no Product schema, no breadcrumbs, no aggregate reviews",
          ]},
          { type: "tools", items: ["Ahrefs", "Screaming Frog", "Google Search Console", "Shopify Admin"] },
        ],
      },
      {
        id: "approach",
        title: "Our Approach: Category Architecture Overhaul",
        blocks: [
          { type: "h3", text: "Phase 1: Keyword Mapping & Architecture Planning (Month 1)" },
          { type: "p", text: "We mapped every commercial jewelry query in Dutch we could find. Then we organized them into three axes: product style (minimalist, vintage, statement), material/type (silver, gold, gemstone), and occasion/search behavior (engagement rings, birthday gifts, everyday jewelry). This gave us a plan for 100+ new collection pages. Each one targeted a specific cluster of search intent." },
          { type: "highlight", text: "The three-axis approach was the real unlock here. A single ring can appear in 'zilveren ringen,' 'minimalistische sieraden,' and 'verlovingsringen' simultaneously. This multiplied our ranking surface without creating thin pages." },
          { type: "h3", text: "Phase 2: Collection Page Buildout (Month 2-3)" },
          { type: "p", text: "We launched over 100 new collection pages. Each one got unique Dutch content, targeted metadata, internal links to relevant products and related collections, plus structured data for reviews, breadcrumbs, and product availability. These were real landing pages with buying guidance, styling tips, and care instructions. Not keyword-stuffed placeholders." },
          { type: "h3", text: "Phase 3: Technical Cleanup & Internal Linking (Month 3-4)" },
          { type: "list", items: [
            "Implemented canonical tags across all variant pages to stop duplicate content from diluting rankings",
            "Rebuilt the sitemap to include only canonical collection and product pages",
            "Optimized mobile page speed for the image-heavy jewelry design",
            "Connected products, blogs, and collections through a logical internal linking hierarchy",
          ]},
          { type: "callout", title: "Discovery", text: "Image-heavy jewelry pages were loading at 5+ seconds on mobile. Compressing product images and implementing lazy loading cut load times by 60%. Google started crawling the new collection pages much faster after this fix." },
        ],
      },
      {
        id: "didnt-work",
        title: "What Didn't Work (And What We Learned)",
        blocks: [
          { type: "h3", text: "Launching all 100+ collection pages at once" },
          { type: "p", text: "We initially tried to push every new collection page live in a single batch. Bad idea. Google's crawl rate couldn't keep up. About 40% of the pages sat unindexed for three weeks. We switched to batched launches of 15-20 pages per week with manual indexing requests. The indexing rate jumped to 90% within 5 days of each batch." },
          { type: "highlight", text: "Batch your page launches. Google has a crawl budget, and flooding it with 100+ new URLs at once means many will sit in the queue for weeks. Smaller batches with indexing requests get you ranking faster." },
          { type: "h3", text: "Auto-generated collection descriptions from product attributes" },
          { type: "p", text: "To save time, we built a template that pulled product attributes (material, style, price range) into collection descriptions automatically. The output was technically accurate but read like a spreadsheet. Bounce rates on template-generated pages were 31% higher than hand-written ones. We went back and rewrote every collection description manually in natural Dutch. Took an extra week but the engagement metrics improved right away." },
        ],
      },
      {
        id: "results",
        title: "The Results: Architecture-Driven Growth",
        blocks: [
          { type: "metrics-grid", items: [
            { label: "Collection Pages", before: "12", after: "100+" },
            { label: "Page 1 Rankings (Dutch)", before: "~8", after: "60+" },
            { label: "Organic Impressions", before: "Low baseline", after: "Significant increase" },
            { label: "Internal Links", before: "Minimal", after: "Full silo structure" },
            { label: "Duplicate Content Issues", before: "Hundreds", after: "0" },
          ]},
          { type: "h3", text: "Headline Wins" },
          { type: "list", items: [
            "Ranking for 'zilveren armband dames,' 'verlovingsring vintage,' 'gouden ketting heren' and dozens more high-intent Dutch queries",
            "Collection pages now capture search intent across the full buying journey from browsing to purchase",
            "Structured data drove rich results for product availability and reviews in Dutch SERPs",
            "Category architecture turned the site from a flat catalog into a proper search magnet",
          ]},
        ],
      },
      {
        id: "takeaway",
        title: "Key Takeaway: The Multi-Axis Category Principle",
        blocks: [
          { type: "p", text: "Jewelry e-commerce has a unique advantage: a single product can legitimately belong to multiple categories. A silver minimalist engagement ring fits into style, material, and occasion categories all at once. Most jewelry stores waste this by using flat navigation. Build your categories around how people actually search, not how your warehouse is organized." },
          { type: "callout", title: "The EcomSEO Framework Applied", text: "Map search intent to three category axes (style, material, occasion). Build dedicated landing pages for each intersection. Connect everything with internal links. Add structured data. Clean up technical debt. Let Google do the rest." },
          { type: "tools", items: ["Shopify", "Ahrefs", "Screaming Frog", "Google Search Console", "Google Analytics 4", "Schema.org Product + BreadcrumbList Markup"] },
        ],
      },
    ],
  },
  {
    slug: "ecom-brand-explode",
    title: "From 0 to 84 Clicks a Day",
    subtitle: "How We Built One Landing Page That Now Gets 84 Clicks a Day for a Dutch Beauty Brand",
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
      "This Dutch beauty and nail care brand was 100% dependent on  with no organic presence at all. The homepage, product pages, and category sections had virtually zero traction in Google. They had written off SEO as \u201Ctoo slow\u201D for their business. We challenged that assumption with a single, strategic move: one perfectly executed SEO landing page targeting a high-intent Dutch nail care search term.",
    topProjectDescription:
      "We created one SEO landing page targeting a specific high-intent nail care keyword in the Dutch market. The page was designed with a clean SEO structure optimized for fast indexing: targeted H1 and H2 hierarchy, semantic keyword variations throughout the content, product-focused FAQ section pulling real customer questions, and direct links to relevant product pages. Internal linking from existing category and product pages provided initial authority, and the conversion-friendly layout balanced informational content with clear purchase paths.",
    image1:
      "/images/framer/8aOboYR3AbkXAk7Jgpk9PoVIKqo.png",
    textAfterImage1:
      "In just six months, this single page went from zero to 2,710 total clicks and 48,700 impressions. At its peak, it generates 84 clicks and 609 , outperforming the homepage, product pages, and every collection page on the entire site. It has become the brand\u2019s #1 source of organic traffic, built on a foundation of perfectly matched search intent and technically sound execution. The page consistently ranks in the top 3 for its target keyword and appears in multiple SERP features.",
    textAfterImage3:
      "What makes this case powerful is its simplicity: no full-site overhaul, no massive content budget, no 12-month timeline. Just one page, perfectly executed. It is now one of the brand\u2019s highest-ROI  that generates free, qualified traffic every single day. The success proved to the client that SEO can deliver fast results when you target the right keywords with the right content, and they\u2019ve since commissioned 5 additional strategic landing pages targeting related Dutch beauty search terms.",
    sections: [
      {
        id: "challenge",
        title: "The Challenge",
        blocks: [
          { type: "p", text: "This Dutch beauty brand had zero organic traffic. None. Every sale came through paid ads. The client genuinely believed SEO was too slow to matter for their business. We needed to prove them wrong, fast." },
          { type: "metrics-grid", items: [
            { label: "Organic Clicks", before: "0", after: "Target: meaningful traffic" },
            { label: "Organic Keywords", before: "0 ranking", after: "Target: top 3 for primary term" },
            { label: "Revenue from SEO", before: "EUR 0", after: "Target: prove ROI" },
          ]},
          { type: "h3", text: "Root Causes We Identified" },
          { type: "list", items: [
            "No page on the site targeted any specific search query. Product pages had generic titles and descriptions pulled from suppliers",
            "The site had no informational content at all. Just products and a homepage",
            "Internal linking was flat: homepage linked to categories, categories linked to products, and that was it",
            "No structured data, no FAQ sections, no content that could earn SERP features",
          ]},
          { type: "tools", items: ["Ahrefs", "Google Search Console", "Screaming Frog", "SurferSEO"] },
        ],
      },
      {
        id: "approach",
        title: "Our Approach: One Perfect Page",
        blocks: [
          { type: "h3", text: "Phase 1: Keyword Selection (Week 1)" },
          { type: "p", text: "We analyzed the entire Dutch nail care search space. We needed one keyword that had high commercial intent, decent volume, and weak competition. We found it: a specific nail care term where the top results were thin affiliate pages and outdated forum posts. No major brand owned the SERP." },
          { type: "highlight", text: "We spent more time picking the right keyword than writing the page. That ratio matters. A perfectly written page targeting the wrong keyword gets you nothing. A good page targeting a weak SERP gets you traffic." },
          { type: "h3", text: "Phase 2: Page Design & Content (Week 2-3)" },
          { type: "p", text: "The landing page was built with a clean SEO structure: targeted H1 and H2 hierarchy, semantic keyword variations throughout the content, a product-focused FAQ section pulling real customer questions, and direct links to relevant product pages. We balanced informational content with clear purchase paths. The goal was to satisfy the search intent completely so users had no reason to hit the back button." },
          { type: "h3", text: "Phase 3: Internal Linking & Indexation (Week 3-4)" },
          { type: "list", items: [
            "Added contextual internal links from existing category and product pages to pass authority to the new page",
            "Submitted the URL through Google Search Console for fast indexation",
            "Implemented FAQ schema to target rich snippet positions",
            "Set up rank tracking for the target keyword and 15 related variations",
          ]},
          { type: "callout", title: "What We Found", text: "The page started ranking on page 2 within 10 days. By week 6 it was in the top 3. The speed surprised even us. Dutch-language beauty SERPs are far less competitive than English ones, and Google seems to reward well-structured content quickly when there is nothing better available." },
        ],
      },
      {
        id: "didnt-work",
        title: "What Didn't Work (And What We Learned)",
        blocks: [
          { type: "h3", text: "Overly aggressive product pushing in the content" },
          { type: "p", text: "Our first draft of the landing page had product CTAs in every section. The page read more like a sales brochure than a helpful resource. Early engagement data showed high bounce rates and low time-on-page. We rewrote the top half to be genuinely informational, moving product links to the lower sections where purchase intent naturally peaks. Bounce rate dropped by 18% after the revision." },
          { type: "highlight", text: "Search intent pages need to earn the click-through to products. Front-loading CTAs kills engagement because users haven't gotten what they came for yet. Inform first, sell second." },
          { type: "h3", text: "Ignoring related long-tail keywords initially" },
          { type: "p", text: "We optimized the page solely for the primary keyword and missed easy wins. GSC data showed the page was getting impressions for 30+ related queries we hadn't considered. We added H2 subsections targeting the top 5 long-tail variations. Within two weeks, total impressions jumped by 40% from those additions alone." },
        ],
      },
      {
        id: "results",
        title: "The Results: One Page, Massive Impact",
        blocks: [
          { type: "metrics-grid", items: [
            { label: "Total Clicks (6 months)", before: "0", after: "2,710" },
            { label: "Total Impressions", before: "0", after: "48,700" },
            { label: "Peak Daily Clicks", before: "0", after: "84" },
            { label: "Peak Daily Impressions", before: "0", after: "609" },
            { label: "Ranking Position", before: "Not indexed", after: "Top 3" },
          ]},
          { type: "h3", text: "Headline Wins" },
          { type: "list", items: [
            "Single page now outperforms the homepage, product pages, and every collection page combined for organic traffic",
            "Page consistently ranks in the top 3 and appears in multiple SERP features",
            "Client commissioned 5 additional strategic landing pages after seeing these results",
            "SEO went from 'too slow' in the client's mind to their highest-ROI marketing channel",
          ]},
        ],
      },
      {
        id: "takeaway",
        title: "Key Takeaway: The Strategic Beachhead Principle",
        blocks: [
          { type: "p", text: "You don't always need a full-site SEO overhaul. Sometimes one page, done right, is enough to prove the channel and fund everything that comes next. The trick is picking the right keyword: high intent, weak competition, and a clear path to conversion. Nail that, and you've built your beachhead." },
          { type: "callout", title: "The EcomSEO Framework Applied", text: "Analyze the full keyword space. Pick ONE high-intent term with weak SERP competition. Build the best possible page for that query. Add internal links and structured data. Prove ROI fast. Then scale to more pages." },
          { type: "tools", items: ["Ahrefs", "Google Search Console", "SurferSEO", "Screaming Frog", "Schema.org FAQ + Product Markup"] },
        ],
      },
    ],
  },
  {
    slug: "dutch-lighting-store",
    title: "250+ New Categories & a Clean Hierarchy",
    subtitle: "How We Rebuilt 250+ Categories and Grew Organic Rankings for a Dutch Lighting Store",
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
      "The result: a clear jump in impressions, Page 1 keyword rankings for commercial Dutch lighting terms, much better crawl efficiency (Google now spends crawl budget on pages that matter), and strong topical relevance across the entire lighting category space. The store now ranks for hundreds of specific lighting queries that previously went to competitors, driving qualified traffic to the exact products customers are searching for.",
    sections: [
      {
        id: "challenge",
        title: "The Challenge",
        blocks: [
          { type: "p", text: "This Dutch lighting store had a huge product catalog. But the site architecture was working against them. Products were buried in a few generic categories. Hundreds of unoptimized filter pages were eating crawl budget. Google had no reason to rank them above competitors with properly structured category pages." },
          { type: "metrics-grid", items: [
            { label: "Category Pages", before: "~20 generic", after: "Target: 250+" },
            { label: "Crawl Waste (filter pages)", before: "Hundreds", after: "Target: 0" },
            { label: "Page 1 Rankings (Dutch)", before: "Low", after: "Target: 100+" },
          ]},
          { type: "h3", text: "Root Causes We Identified" },
          { type: "list", items: [
            "Disorganized category structure: products dumped into broad buckets like 'Lampen' and 'Verlichting' with no meaningful subcategories",
            "Hundreds of filter combination pages (color + style + price) were indexed and wasting crawl budget without adding search value",
            "No dedicated landing pages for high-intent Dutch queries like 'hanglamp woonkamer' or 'LED plafondlamp dimbaar'",
            "Internal linking was shallow: homepage to category to product, with no cross-linking between related categories",
            "No structured data on any page. Missing Product schema, breadcrumbs, and review markup",
          ]},
          { type: "tools", items: ["Ahrefs", "Screaming Frog", "Google Search Console", "Shopify Admin", "Google Analytics 4"] },
        ],
      },
      {
        id: "approach",
        title: "Our Approach: Full Category Hierarchy Rebuild",
        blocks: [
          { type: "h3", text: "Phase 1: Keyword Research & Category Planning (Month 1)" },
          { type: "p", text: "We mapped the entire Dutch lighting search space and organized it around three dimensions: lamp type (pendant, floor, table, wall, ceiling), product features (dimmable, LED, smart, outdoor), and room/use case (living room, bedroom, office, bathroom). This gave us a matrix of 250+ category pages, each targeting a real search query cluster." },
          { type: "highlight", text: "Lighting is one of the best niches for category SEO because the product dimensions map perfectly to how people search. Nobody Googles 'lamp.' They search 'hanglamp woonkamer' or 'buitenlamp met sensor.' Each combination is a category page waiting to be built." },
          { type: "h3", text: "Phase 2: Category Buildout & Content (Month 2-4)" },
          { type: "p", text: "We launched 250+ new category pages. Each one got unique Dutch content targeting specific commercial intent keywords. We removed redundant and underperforming pages to eliminate cannibalization. A clean navigation system made the new hierarchy browsable for both users and crawlers." },
          { type: "h3", text: "Phase 3: Technical Cleanup & Link Building (Month 4-6)" },
          { type: "list", items: [
            "Restructured the sitemap to reflect the new hierarchy and exclude filter pages",
            "Cleaned crawl paths to eliminate loops and dead-end URLs",
            "Implemented canonical tags to prevent duplicate content from filter combinations",
            "Rebuilt internal linking to distribute authority from homepage through category tiers to products",
            "Built backlinks from trusted Dutch interior design and home improvement sites",
          ]},
          { type: "callout", title: "Discovery", text: "The filter pages were the biggest hidden problem. Screaming Frog found over 400 indexed filter URLs that were essentially duplicate content with minor parameter differences. De-indexing these alone freed up enough crawl budget that Google started discovering our new category pages 3x faster." },
        ],
      },
      {
        id: "didnt-work",
        title: "What Didn't Work (And What We Learned)",
        blocks: [
          { type: "h3", text: "Keeping old category pages as redirects" },
          { type: "p", text: "When we launched the new hierarchy, we initially set up 301 redirects from every old category page to the closest new equivalent. This created redirect chains 3-4 hops deep in some cases because the old structure was so different from the new one. Google was slow to process them. We ended up mapping direct redirects from old URLs to final destinations, cutting all chains to a single hop. Indexation speed improved noticeably within two weeks." },
          { type: "highlight", text: "Redirect chains kill crawl efficiency. When you rebuild a category structure, map every old URL directly to its final destination. Never chain redirects through intermediate pages, even if the mapping takes more manual work." },
          { type: "h3", text: "Using translated English content for initial category descriptions" },
          { type: "p", text: "To hit our launch timeline, we used machine-translated descriptions for the first batch of 80 category pages. The Dutch read fine grammatically but lacked the natural phrasing Dutch shoppers expect. Engagement metrics were measurably worse: 25% higher bounce rates versus categories with native Dutch copy. We hired a Dutch copywriter and rewrote all 80 pages. The lesson cost us about two weeks of timeline." },
        ],
      },
      {
        id: "results",
        title: "The Results: Category Architecture at Scale",
        blocks: [
          { type: "metrics-grid", items: [
            { label: "Category Pages", before: "~20", after: "250+" },
            { label: "Page 1 Rankings (Dutch)", before: "Low", after: "100+ commercial terms" },
            { label: "Crawl Waste Pages", before: "400+", after: "0" },
            { label: "Organic Impressions", before: "Baseline", after: "Significant jump" },
            { label: "Backlinks Built", before: "0 from campaign", after: "15+ from Dutch design sites" },
          ]},
          { type: "h3", text: "Headline Wins" },
          { type: "list", items: [
            "Ranking for 'hanglamp woonkamer,' 'buitenlamp met sensor,' 'LED plafondlamp dimbaar' and hundreds more Dutch lighting queries",
            "Crawl efficiency improved dramatically as Google stopped wasting budget on filter pages",
            "Internal authority now flows cleanly from homepage through category tiers to product pages",
            "Store captures qualified traffic at every stage of the lighting buying journey",
          ]},
        ],
      },
      {
        id: "takeaway",
        title: "Key Takeaway: The Product Dimension Matrix",
        blocks: [
          { type: "p", text: "Lighting, furniture, and home goods stores have a natural advantage for category SEO. Products have clear dimensions (type, feature, room) that map directly to how people search. Build your category hierarchy around these dimensions instead of your internal product taxonomy. Every meaningful dimension intersection is a category page that can rank." },
          { type: "callout", title: "The EcomSEO Framework Applied", text: "Identify your product's natural search dimensions. Build a category matrix from those dimensions. Create unique content for each intersection. Kill crawl waste from filter and parameter pages. Connect everything with clean internal linking. Add structured data." },
          { type: "tools", items: ["Shopify", "Ahrefs", "Screaming Frog", "Google Search Console", "Google Analytics 4", "Schema.org Product + BreadcrumbList Markup"] },
        ],
      },
    ],
  },
  {
    slug: "ecom-swedish-brand",
    title: "How We Skyrocketed a Swedish E-com Site",
    subtitle:
      "We Published 100 Pages and Grew Impressions from 119K to 446K in 6 Months",
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
      "We executed a 3-phase strategy. Phase 1: We clustered high-potential Swedish-language keywords by search intent, identifying over 250 target terms across five thematic clusters including h\u00E5llbar sk\u00F6nhet (sustainable beauty) and ekologisk kosttillskott (organic supplements). Phase 2: We launched 100 new : blogs and buying guides targeting long-tail queries. Each page was internally linked to relevant product and category pages, reinforcing topical authority through contextual connections. We built over 300 internal links total across the content hub. Phase 3: We fixed technical issues including 42 duplicate meta tags, sitemap inefficiencies, and URL parameter problems, and implemented breadcrumb schema across all articles and subcategories.",
    image1:
      "/images/framer/lCkxhauV9ut0MT6UYs97cWxC8c.png",
    textAfterImage1:
      "Here is what happened in six months. Impressions jumped from 119,000 to 446,000 (+275%), while clicks rose from 8,410 to 15,400 (+83%). The gap between impression and click growth indicates significant opportunity for CTR optimization in the next phase. As the content hub gained traction, internal authority flowed naturally to key , giving them organic visibility they had never achieved before. Several product pages now rank on Page 1 for commercial keywords purely through internal link authority from the content hub.",
    image2:
      "/images/framer/NXqrtjIPSjhtl3APX2rH5LNwVrM.png",
    textAfterImage3:
      "We\u2019re now entering Phase 2 of the engagement, focused on two priorities: optimizing every product page for on-page SEO (titles, descriptions, structured data, image alt text) and launching a targeted backlink campaign to solidify the site\u2019s authority in Swedish SERPs. With the content foundation in place, the brand is forecasted to 3\u20134x its current traffic over the next six months. The content hub approach works especially well in Swedish because the market has far less informational content competition . Brands willing to invest in quality Swedish-language content get outsized returns.",
    sections: [
      {
        id: "challenge",
        title: "The Challenge",
        blocks: [
          { type: "p", text: "This mid-sized Swedish e-commerce brand on Shopify had a well-built store and decent product pages. But organic visibility was almost non-existent. Only branded keywords were ranking. No content strategy existed at all." },
          { type: "metrics-grid", items: [
            { label: "Organic Impressions", before: "119,000/6mo", after: "Target: 300K+" },
            { label: "Organic Clicks", before: "8,410/6mo", after: "Target: 15K+" },
            { label: "Content Pages", before: "0 informational", after: "Target: 100" },
          ]},
          { type: "h3", text: "Root Causes We Identified" },
          { type: "list", items: [
            "Zero informational content to capture top-of-funnel Swedish searches. The site was products-only",
            "No internal linking structure to distribute authority from any page to another",
            "No backlinks from relevant Swedish sites. Domain trust was low",
            "42 duplicate meta tags across the site confusing Google about which pages to rank",
            "Sitemap included parameter URLs and other junk that diluted crawl budget",
          ]},
          { type: "tools", items: ["Ahrefs", "Screaming Frog", "Google Search Console", "Shopify Admin", "Surfer SEO"] },
        ],
      },
      {
        id: "approach",
        title: "Our Approach: 100-Page Content Hub + Technical Fix",
        blocks: [
          { type: "h3", text: "Phase 1: Swedish Keyword Clustering (Month 1)" },
          { type: "p", text: "We clustered high-potential Swedish-language keywords by search intent. We identified over 250 target terms across five thematic clusters: hallbar skonhet (sustainable beauty), ekologisk kosttillskott (organic supplements), and three more verticals. Each cluster had a clear content plan mapping informational articles to commercial product pages." },
          { type: "highlight", text: "Swedish-language content competition is much lower than English. We found hundreds of keywords with 200-1,000 monthly searches where the top results were thin translated pages or generic health portals. A brand willing to create quality Swedish content can dominate these SERPs quickly." },
          { type: "h3", text: "Phase 2: Content Hub Launch (Month 2-4)" },
          { type: "p", text: "We launched 100 new informational pages: blogs and buying guides targeting long-tail Swedish queries. Every page was internally linked to relevant product and category pages. We built over 300 internal links total across the hub. The goal was to create a web of topical authority, not isolated content islands." },
          { type: "h3", text: "Phase 3: Technical Cleanup (Month 4-6)" },
          { type: "list", items: [
            "Fixed 42 duplicate meta tags that were confusing Google about page identity",
            "Cleaned up sitemap inefficiencies and removed parameter URLs",
            "Resolved URL parameter issues creating duplicate indexed content",
            "Implemented breadcrumb schema across all articles and subcategories",
          ]},
          { type: "callout", title: "What We Found", text: "The content hub started driving product page rankings before we even built any backlinks. Internal link authority from 100 well-interlinked articles pushed several product pages to Page 1 for commercial keywords. We didn't expect that to happen without external links, but the Swedish market competition was low enough that internal authority alone did the job." },
        ],
      },
      {
        id: "didnt-work",
        title: "What Didn't Work (And What We Learned)",
        blocks: [
          { type: "h3", text: "Publishing all 100 articles without CTR-optimized titles" },
          { type: "p", text: "We focused so heavily on content quality and internal linking that we used descriptive but boring title tags for the initial batch. Impressions grew fast, but clicks lagged behind. The gap between +275% impressions and +83% clicks told the story. We went back and rewrote titles for the top 40 articles to be more click-worthy while keeping keyword targeting intact. CTR improved by about 30% on the rewritten titles." },
          { type: "highlight", text: "Impressions without clicks means your titles are not doing their job. Always optimize title tags for both keywords AND click-through rate. A ranking you don't get clicked on is a wasted ranking." },
          { type: "h3", text: "Skipping product page optimization in Phase 1" },
          { type: "p", text: "We planned to optimize product pages in a later phase. But as the content hub gained traction and pushed product pages higher in search results, those pages were showing up with default Shopify descriptions. Users clicked through from a well-written blog post to a product page with two sentences of generic copy. Conversion data showed these users bounced at a higher rate. We should have done basic product page optimization alongside the content hub launch." },
        ],
      },
      {
        id: "results",
        title: "The Results: Content Hub Performance",
        blocks: [
          { type: "metrics-grid", items: [
            { label: "Organic Impressions", before: "119,000", after: "446,000 (+275%)" },
            { label: "Organic Clicks", before: "8,410", after: "15,400 (+83%)" },
            { label: "Content Pages", before: "0", after: "100" },
            { label: "Internal Links Built", before: "Minimal", after: "300+" },
            { label: "Product Pages on Page 1", before: "0 (from content)", after: "Several (via hub authority)" },
          ]},
          { type: "h3", text: "Headline Wins" },
          { type: "list", items: [
            "Content hub drove product page rankings to Page 1 through internal link authority alone",
            "Several product pages now rank for commercial keywords they never targeted directly",
            "Impression growth of +275% shows broad topical authority building across Swedish health searches",
            "Brand forecasted to 3-4x current traffic in the next phase with product page optimization and backlinks",
          ]},
        ],
      },
      {
        id: "takeaway",
        title: "Key Takeaway: How a Content Hub Builds Authority",
        blocks: [
          { type: "p", text: "A content hub is an authority engine, not a blog. When you build 100 interlinked articles around your product topics, the internal link authority compounds. Product pages start ranking for commercial keywords they never directly targeted. This effect is real, and it is strongest in markets like Swedish where content competition is low." },
          { type: "callout", title: "The EcomSEO Framework Applied", text: "Cluster keywords by search intent and topic. Build a content hub of 100+ interlinked informational pages. Connect every article to relevant products through contextual internal links. Fix technical debt in parallel. Let the authority build on itself over time." },
          { type: "tools", items: ["Shopify", "Ahrefs", "Screaming Frog", "Google Search Console", "Google Analytics 4", "Surfer SEO", "Schema.org BreadcrumbList Markup"] },
        ],
      },
    ],
  },
  {
    slug: "swedish-ecom-site",
    title: "From 37 to 1,529 Keywords in 6 Months",
    subtitle: "How We Built Topical Authority from 37 Keywords to 1,529 in the Swedish Health Market",
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
      "In May 2024, this Swedish ecommerce brand had minimal organic visibility: just 37 keywords ranking with only one in the top 10, no content hub, no internal linking structure, and no backlink strategy. Growth was flat and the brand was entirely dependent on paid acquisition. We set out to build topical authority in the Swedish health and wellness space and transform their organic channel into a meaningful revenue driver within 6 months.",
    topProjectDescription:
      "We began with deep Swedish keyword clustering, mapping over 250 search terms into five high-intent thematic clusters: h\u00E5llbar sk\u00F6nhet (sustainable beauty), ekologisk kosttillskott (organic supplements), naturlig hudv\u00E5rd (natural skincare), vegansk h\u00E4lsa (vegan health), and milj\u00F6v\u00E4nlig livsstil (eco-friendly lifestyle). From these clusters, we launched 100+ well-researched articles targeting long-tail Swedish queries. Each article was connected to the product catalog through over 300 contextual internal links pointing to relevant product and , reinforcing topical authority site-wide rather than building isolated content islands.",
    image1:
      "/images/framer/fyAPXyjHaJjly5rybkvJY6xZQkQ.png",
    textAfterImage1:
      "To strengthen the SEO foundation, we cleaned up 42 duplicate meta tags, fixed sitemap inefficiencies, resolved URL parameter issues that were creating duplicate content, and implemented breadcrumb schema across all articles and subcategories. The technical cleanup ensured that Google could efficiently crawl and index the new content, and the structured data implementation helped the site win SERP features in Swedish results.",
    textAfterImage2:
      "In six months, the brand jumped from 37 to 1,529 total keywords (+4,035%). Page 1 rankings increased from just 1 to 87. 53 keywords now appear in SERP features (FAQs, featured snippets, product carousels). Clicks rose from 8,400 to 15,400 (+83%) and impressions surged from 119,000 to 446,000 (+275%). Each new article in the content hub strengthened the authority of related product pages, and that effect kept growing.",
    textAfterImage3:
      "With 87 top-10 positions locked in and 1,500+ keywords providing a broad foundation, the Swedish market is now a significant organic channel for the brand. The next phase focuses on two accelerators: on-page optimization of every product page (many have default Shopify descriptions) and a targeted backlink campaign to Swedish health and wellness publications. Based on the current trajectory, we expect organic traffic to 3\u20134x again over the next six months as the content hub matures and product pages climb in rankings.",
    sections: [
      {
        id: "challenge",
        title: "The Challenge",
        blocks: [
          { type: "p", text: "37 keywords. That was it. This Swedish health and wellness brand had one keyword in the top 10, no content hub, no internal linking, and no backlink strategy. Growth was flat. Every sale came from paid ads." },
          { type: "metrics-grid", items: [
            { label: "Total Keywords", before: "37", after: "Target: 1,000+" },
            { label: "Top 10 Rankings", before: "1", after: "Target: 50+" },
            { label: "Organic Clicks", before: "8,400/6mo", after: "Target: 15K+" },
            { label: "SERP Features", before: "0", after: "Target: 20+" },
          ]},
          { type: "h3", text: "Root Causes We Identified" },
          { type: "list", items: [
            "No content beyond product pages. Zero informational articles, guides, or resources",
            "No internal linking structure connecting pages to each other. Products, categories, and the homepage existed as isolated islands",
            "No backlink strategy. The domain had almost no external links from relevant Swedish sites",
            "42 duplicate meta tags creating confusion about page identity and purpose",
            "URL parameter issues generating duplicate indexed content that wasted crawl budget",
          ]},
          { type: "tools", items: ["Ahrefs", "Screaming Frog", "Google Search Console", "Shopify Admin", "Surfer SEO"] },
        ],
      },
      {
        id: "approach",
        title: "Our Approach: Keyword Clustering + Content Architecture",
        blocks: [
          { type: "h3", text: "Phase 1: Deep Swedish Keyword Clustering (Month 1)" },
          { type: "p", text: "We mapped over 250 Swedish search terms into five high-intent thematic clusters: hallbar skonhet (sustainable beauty), ekologisk kosttillskott (organic supplements), naturlig hudvard (natural skincare), vegansk halsa (vegan health), and miljovanlig livsstil (eco-friendly lifestyle). Each cluster became a content silo with its own pillar page and supporting articles." },
          { type: "highlight", text: "The five-cluster approach let us build topical authority across the full Swedish health space rather than going deep on one topic and hoping for the best. Google rewards breadth when you back it up with depth in each cluster." },
          { type: "h3", text: "Phase 2: 100+ Article Launch (Month 2-4)" },
          { type: "p", text: "We launched 100+ well-researched articles targeting long-tail Swedish queries. Each article was connected to the product catalog through contextual internal links. Over 300 internal links total. The articles were not fluff pieces. Each one answered a specific Swedish search query better than anything else on page 1." },
          { type: "h3", text: "Phase 3: Technical Foundation (Month 4-6)" },
          { type: "list", items: [
            "Cleaned up 42 duplicate meta tags across the entire site",
            "Fixed sitemap inefficiencies so Google only crawled real pages",
            "Resolved URL parameter issues creating duplicate content",
            "Implemented breadcrumb schema across all articles and subcategories",
            "Set up FAQ schema on key articles to target SERP features",
          ]},
          { type: "callout", title: "What We Found", text: "We tracked which content clusters drove keyword growth fastest. The 'ekologisk kosttillskott' (organic supplements) cluster outperformed everything else by 3x in keyword acquisition speed. The reason: this sub-niche had almost zero quality Swedish content. We essentially owned the entire topic within 8 weeks of publishing." },
        ],
      },
      {
        id: "didnt-work",
        title: "What Didn't Work (And What We Learned)",
        blocks: [
          { type: "h3", text: "Spreading internal links evenly across all products" },
          { type: "p", text: "Our initial internal linking strategy distributed links evenly across all product pages. Democratic, but wrong. Some products had far more search demand than others. We wasted link equity on products nobody was searching for. When we shifted to a weighted approach, concentrating internal links on high-demand product pages, those pages jumped 10-15 positions within three weeks. The low-demand pages didn't drop at all." },
          { type: "highlight", text: "Not all products deserve equal internal link authority. Concentrate your linking on pages with actual search demand. Use GSC impression data to identify which products Google is already trying to rank, and give those pages more internal support." },
          { type: "h3", text: "Writing articles at inconsistent quality levels" },
          { type: "p", text: "With 100+ articles to produce, we used multiple writers. Quality varied. Some articles were thorough 2,000-word guides. Others were thin 500-word pieces that barely scratched the surface. The thin articles indexed but didn't rank. We identified the 25 weakest articles by performance data and rewrote them to match the quality standard of the top performers. Rankings improved on 18 of the 25 within a month." },
        ],
      },
      {
        id: "results",
        title: "The Results: Topical Authority at Scale",
        blocks: [
          { type: "metrics-grid", items: [
            { label: "Total Keywords", before: "37", after: "1,529 (+4,035%)" },
            { label: "Top 10 Rankings", before: "1", after: "87" },
            { label: "SERP Features", before: "0", after: "53" },
            { label: "Organic Clicks", before: "8,400", after: "15,400 (+83%)" },
            { label: "Organic Impressions", before: "119,000", after: "446,000 (+275%)" },
          ]},
          { type: "h3", text: "Headline Wins" },
          { type: "list", items: [
            "From 1 top-10 keyword to 87 in six months. That is a completely different organic presence",
            "53 keywords appearing in SERP features including FAQs, featured snippets, and product carousels",
            "The content hub made every new article boost related product page rankings, and the effect kept growing",
            "The brand now has a real organic channel instead of 100% dependence on paid acquisition",
          ]},
        ],
      },
      {
        id: "takeaway",
        title: "Key Takeaway: The Topical Authority Compound Effect",
        blocks: [
          { type: "p", text: "Topical authority compounds. Article 1 helps article 2 rank. Article 50 makes articles 1-49 rank better. By article 100, you own the topic in Google's eyes. This works especially well in Swedish because the competition for quality informational content is so thin. Brands that invest in native-language content hubs get outsized returns compared to English markets." },
          { type: "callout", title: "The EcomSEO Framework Applied", text: "Cluster keywords into 5 thematic silos. Build 100+ articles distributed across all clusters. Connect every article to products through contextual internal links. Fix technical debt so Google can crawl efficiently. Let topical authority compound over time." },
          { type: "tools", items: ["Shopify", "Ahrefs", "Screaming Frog", "Google Search Console", "Google Analytics 4", "Surfer SEO", "Schema.org BreadcrumbList + FAQ Markup"] },
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllCaseSlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}
