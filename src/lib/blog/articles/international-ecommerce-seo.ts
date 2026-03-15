import type { BlogArticle } from "../types";

export const internationalEcommerceSeo: BlogArticle = {
  slug: "international-ecommerce-seo",
  category: "industry",
  publishDate: "2025-07-01",
  readingTime: 12,
  author: "Fabian van Til",
  authorRole: "CEO at EcomSEO",
  authorSlug: "fabian-van-til",
  primaryKeyword: "international ecommerce seo",
  secondaryKeywords: [
    "international seo for ecommerce",
    "multilingual ecommerce seo",
    "global ecommerce seo",
  ],
  content: {
    en: {
      title: "International Ecommerce SEO: Go Global Right",
      description:
        "Set up international SEO for your ecommerce store with proper hreflang, domain structure, content localization, and geo-targeting for new markets.",
      sections: [
        {
          heading: "Selling internationally means thinking about SEO differently",
          body: [
            "Expanding your ecommerce store to new countries is exciting. More markets mean more customers and more revenue. But from an SEO perspective, international expansion introduces complexity that can either multiply your organic traffic or completely tank it.",
            "Google operates separate indexes for different countries and languages. Your product page that ranks number one in the Netherlands will not automatically rank in Germany, even though the countries are neighbors. Each market requires its own SEO signals: the right language, the right domain structure, the right keyword targeting, and the right technical implementation. Our [international SEO service](/international-seo) covers the full setup for stores expanding to new markets.",
            "We have helped ecommerce stores expand from a single market into 5, 10, and even 22 countries. The stores that get international SEO right see compounding traffic growth as each new market starts contributing organic sessions. A home goods store we work with went from 100% Dutch traffic to generating 45% of their organic revenue from Germany, France, and Belgium within 18 months of launching those markets.",
            "The stores that get it wrong end up with confusing signals that hurt their original market's rankings while failing to gain traction in new ones. This guide covers the technical and strategic decisions that determine which outcome you get.",
          ],
        },
        {
          heading: "Choosing your domain structure: ccTLD, subdomain, or subfolder",
          body: [
            "This is the first and most consequential decision in international ecommerce SEO. You have three main options, and each has trade-offs.",
            "Country-code top-level domains (ccTLDs) like example.de, example.fr, and example.nl give the strongest geo-targeting signal. Google inherently associates a .de domain with Germany. Users in Germany trust .de domains more than .com domains, which can improve click-through rates. The downside is that each ccTLD starts with zero domain authority. You are building a new site from scratch in each country. Link equity does not transfer between domains.",
            "Subdomains (de.example.com, fr.example.com) keep everything under one root domain but create separate entities for each market. Google treats subdomains as semi-separate, meaning some domain authority carries over, but not as much as with subfolders. Few stores actually benefit from this middle ground.",
            "Subfolders (example.com/de/, example.com/fr/) keep all markets under one domain and one authority pool. Every link you earn for any market benefits the entire domain. This is the approach we recommend for most ecommerce stores, especially those expanding for the first time. A fashion brand we moved from ccTLDs to a subfolder structure saw their German market traffic increase by 34% within four months because the subfolders inherited the authority of the main domain.",
            "The right choice depends on your resources and goals. If you have the budget to build and maintain separate link profiles for each country, ccTLDs provide the strongest local signal. If you want to maximize the value of your existing domain authority and minimize maintenance overhead, subfolders are the way to go. We rarely recommend subdomains for ecommerce because they combine the disadvantages of both approaches without the full benefits of either. The technical side of this setup is covered in our [technical SEO for ecommerce](/blog/technical-seo-for-ecommerce) guide.",
          ],
        },
        {
          heading: "Hreflang implementation that actually works",
          body: [
            "Hreflang tags tell Google which language and country version of a page to show in search results. They are the technical backbone of international SEO. They are also the most commonly broken element on international ecommerce sites.",
            "The syntax is straightforward. Each page needs a set of hreflang tags listing every language-country version of that page, including itself. A product page available in English for the US, English for the UK, German for Germany, and French for France needs four hreflang tags on each version, plus an x-default tag pointing to the default version.",
            "Where things go wrong is at scale. A store with 5,000 products in 6 markets needs 30,000 pages, each with 7 hreflang annotations. That is 210,000 hreflang tags. If even 5% of those contain errors (wrong URLs, missing reciprocal tags, incorrect language codes), Google starts ignoring the entire hreflang implementation.",
            "The most common error we find is missing reciprocal tags. If the German version of a page points to the French version with hreflang, the French version must point back to the German version. Every hreflang relationship must be bidirectional. When you add a new market, you need to update hreflang tags on every existing page in every existing market. Manual management breaks down fast.",
            "For large stores, we implement hreflang through XML sitemaps rather than on-page tags. Each market gets its own sitemap, and each sitemap entry includes the alternate language URLs. This approach scales better because updating a sitemap is easier than modifying HTML templates, and it keeps page size down (on-page hreflang tags on a page serving 15 markets can add several KB of HTML).",
            "Validate your hreflang using Ahrefs' Site Audit, Screaming Frog's hreflang report, or our free [hreflang validator](/tools/hreflang-validator). Run these checks monthly because new products, deleted pages, and URL changes can break hreflang relationships silently. We caught a client's broken implementation three weeks after a developer changed URLs on their French store without updating hreflang on the other five markets.",
          ],
        },
        {
          heading: "Content localization vs translation",
          body: [
            "Machine-translating your product catalog and calling it international SEO is the fastest way to fail in new markets. We have seen this approach dozens of times. It does not work.",
            "Translation converts words from one language to another. Localization adapts the entire content experience for a specific market. The difference matters enormously for both user experience and search rankings.",
            "Consider a UK store expanding to Germany. A translated product description might be grammatically correct but sound unnatural to German speakers. German consumers search differently. They use different product terminology. They expect different information in product descriptions (Germans tend to want more detailed technical specifications). Reviews and social proof carry different weight in different cultures.",
            "Keyword research must be done separately for each market. You cannot just translate your English keywords into German and assume they are correct. The German word for 'sneakers' is often 'Turnschuhe,' but many German consumers actually search for 'Sneaker' (the English word, just capitalized as all German nouns are). If you only target the translated term, you miss half the search volume.",
            "Category naming needs localization too. A UK store might have a category called 'Trainers.' The US equivalent is 'Sneakers.' The German might be 'Sportschuhe' or 'Sneaker' depending on the product. We do keyword research for every market independently to find the terms with the most search demand, not just the literal translation.",
            "Product descriptions should be rewritten, not translated, for each market. Invest in native speakers who understand ecommerce copywriting. The upfront cost is higher than machine translation, but the ranking and conversion improvements justify it. One client switched from translated to locally written product descriptions for their German market and saw conversion rate increase from 1.1% to 2.4% on organic traffic within two months.",
          ],
        },
        {
          heading: "International keyword research for ecommerce",
          body: [
            "Each market has its own search behavior, and assuming that search volume patterns from one country apply elsewhere is a costly mistake.",
            "Start with your best-performing keywords in your home market. Then research the equivalent terms in each target market using local keyword tools. Ahrefs and SEMrush both support country-specific keyword databases. Set the country and language to your target market before running any queries.",
            "Search volume can vary dramatically between markets. 'Yoga mat' gets 40,000 monthly searches in the US but only 6,000 in the Netherlands. That does not mean the Netherlands is not worth targeting. It means you need to set realistic expectations for each market based on its search volume ceiling.",
            "Local competitors differ by market. In the UK, a furniture store might compete against John Lewis and IKEA. In Germany, the competitors might be Otto, Wayfair Germany, and Westwing. Analyze the top-ranking pages in each market to understand what content Google rewards for your target keywords locally.",
            "Long-tail keyword patterns also vary by language. German compound words create unique keyword opportunities. 'Gartenmoebelset' (garden furniture set) is one word in German and functions as a long-tail keyword. French ecommerce searches often include more qualifiers than English equivalents. Spanish searches in Spain use different terminology than Spanish searches in Mexico.",
            "We build separate keyword maps for each market, even when the products are identical. The investment in market-specific keyword research pays for itself many times over compared to the alternative of ranking for translated terms that nobody actually searches for. Our [ecommerce SEO strategy guide](/blog/ecommerce-seo-strategy) covers how to structure this kind of multi-market keyword planning.",
          ],
        },
        {
          heading: "Handling currency, pricing, and geo-targeting",
          body: [
            "Showing the right currency and price to visitors from different countries affects both user experience and SEO. Google does not rank pages lower for showing the 'wrong' currency, but users bounce faster when they see prices in an unfamiliar currency, which indirectly hurts rankings.",
            "The cleanest approach is to have each market version of your store display prices in the local currency. If you use subfolders, your /de/ pages show prices in euros, your /gb/ pages show prices in pounds, and your /us/ pages show prices in dollars. Product structured data (schema markup) should include the local currency for each market version. Google uses this data for rich results, and incorrect currency in schema can cause products to show in the wrong Google Shopping results.",
            "Geo-targeting in Google Search Console tells Google which country each section of your site targets. For subfolder structures, add each subfolder as a separate property in Search Console (example.com/de/, example.com/fr/) and set the target country for each. For ccTLDs, geo-targeting is handled automatically by the domain extension.",
            "IP-based redirects (automatically sending German visitors to the German version) seem helpful but cause SEO problems. If Googlebot crawls from US IP addresses and gets redirected to the English version every time, it may never see your German pages. Instead of redirects, use a banner or popup suggesting the local version while letting all users (and bots) access any version they want.",
            "Pricing differences between markets can create issues with product structured data. If you sell the same product for 50 euros in Germany and 55 euros in France, and Google sees both prices, it may display one or the other unpredictably in rich results. Make sure each market version's structured data only includes the price for that specific market.",
          ],
        },
        {
          heading: "Building links in international markets",
          body: [
            "Link building for international ecommerce requires market-specific efforts. A backlink from a German website helps your German market rankings. A backlink from a US website has minimal impact on German rankings, even if both links point to the same domain.",
            "Start with the tactics that scale across markets. Manufacturer 'where to buy' listings work internationally. If you are an authorized retailer for a brand, their German website likely has a German retailer page. Their French website has a French one. Contact each regional office to get listed.",
            "Local directories and industry associations in each market provide relevant, geo-targeted links. Every European country has its own business directories, trade associations, and industry publications. A listing in a German industry directory carries far more weight for German rankings than a listing in an international directory.",
            "Digital PR needs to be executed in each market's language with pitches to local publications. A data study that gets coverage in Dutch media will not automatically get picked up by German publications. We work with PR contacts or freelancers in each target market who understand the local media and can pitch stories in the native language.",
            "Guest posting and content partnerships work internationally too, but you need to find blogs and publications in each target language. A guest post on a German cooking blog (in German) supporting a kitchenware store's German market is worth more than a guest post on an international English-language blog.",
            "Cross-linking between your own market versions passes some authority. Your German blog post about winter fashion can link to your French collection page for winter coats. This internal cross-market linking helps Google understand the relationship between your different market versions.",
          ],
        },
        {
          heading: "Avoiding the mistakes that derail international expansion",
          body: [
            "The biggest mistake in international ecommerce SEO is treating it as a translation project rather than a market entry strategy. Each new country is effectively a new SEO campaign that requires its own keyword research, content creation, link building, and performance monitoring.",
            "Auto-translating content with Google Translate or DeepL and publishing it as-is creates thin, low-quality content in every market. Even when translations are technically accurate, they rarely contain the local search terms that people actually use.",
            "Launching all markets simultaneously spreads resources too thin. We recommend expanding one market at a time, getting it to a stable traffic level (usually 4-6 months), then adding the next. A Dutch electronics store we worked with tried launching Germany, France, and Belgium simultaneously. After six months, none were performing because efforts were split three ways. We paused France and Belgium, focused entirely on Germany for four months, got it to profitability, then reopened France.",
            "Neglecting hreflang maintenance is a slow-building problem. When you first set up hreflang, everything works. Then you add products, delete pages, change URLs, and add new markets. Each change can break hreflang relationships. Without regular validation (we check monthly), your implementation degrades over time and Google starts showing the wrong language versions in search results.",
            "Ignoring local payment methods and shipping information affects conversion but also indirectly affects SEO through user engagement signals. If a German visitor lands on your page but bounces because you do not accept PayPal or offer reasonable shipping to Germany, that behavioral signal works against your rankings over time.",
            "International ecommerce SEO takes patience, investment in local content, and consistent technical maintenance. But for stores that execute it properly, each new market becomes an additional source of organic revenue that compounds as your international authority grows. For Shopify-based stores expanding internationally, our [Shopify ecommerce SEO guide](/blog/shopify-ecommerce-seo) covers platform-specific implementation details.",
          ],
        },
      ],
    },
  },
};
