import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Guides → Academy redirects (guides merged into academy)
      { source: "/guides", destination: "/academy", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/guides", destination: "/:locale/academy", permanent: true },
      { source: "/guides/fundamentals", destination: "/academy/introduction-to-ecommerce-seo", permanent: true },
      { source: "/guides/fundamentals-2", destination: "/academy/ecommerce-ranking-factors", permanent: true },
      { source: "/guides/analytics-tracking", destination: "/academy/seo-analytics-with-ga4", permanent: true },
      { source: "/guides/beginner-to-hero", destination: "/academy/seo-learning-roadmap", permanent: true },
      { source: "/guides/keyword-research", destination: "/academy/keyword-research-for-ecommerce", permanent: true },
      { source: "/guides/competitor-analysis", destination: "/academy/competitor-keyword-analysis", permanent: true },
      { source: "/guides/technical-analysis", destination: "/academy/site-architecture-for-ecommerce", permanent: true },
      { source: "/guides/on-page-audit", destination: "/academy/product-page-seo", permanent: true },
      { source: "/guides/off-page-audit", destination: "/academy/backlink-fundamentals-for-ecommerce", permanent: true },
      { source: "/guides/task-planning", destination: "/academy/seo-task-planning", permanent: true },
      { source: "/guides/link-building-tactics", destination: "/academy/digital-pr-for-ecommerce", permanent: true },
      { source: "/guides/topical-authority", destination: "/academy/topical-authority-for-ecommerce", permanent: true },
      { source: "/guides/ranking-chatgpt", destination: "/academy/ai-search-optimization", permanent: true },
      { source: "/guides/serp-domination", destination: "/academy/serp-domination-strategy", permanent: true },
      // Locale-prefixed guide redirects
      { source: "/:locale(en|de|fr|es|it|nl)/guides/:slug", destination: "/:locale/academy/:slug", permanent: true, has: [{ type: "header", key: "x-no-match" }] },
      { source: "/:locale(en|de|fr|es|it|nl)/guides/fundamentals", destination: "/:locale/academy/introduction-to-ecommerce-seo", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/guides/fundamentals-2", destination: "/:locale/academy/ecommerce-ranking-factors", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/guides/analytics-tracking", destination: "/:locale/academy/seo-analytics-with-ga4", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/guides/beginner-to-hero", destination: "/:locale/academy/seo-learning-roadmap", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/guides/keyword-research", destination: "/:locale/academy/keyword-research-for-ecommerce", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/guides/competitor-analysis", destination: "/:locale/academy/competitor-keyword-analysis", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/guides/technical-analysis", destination: "/:locale/academy/site-architecture-for-ecommerce", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/guides/on-page-audit", destination: "/:locale/academy/product-page-seo", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/guides/off-page-audit", destination: "/:locale/academy/backlink-fundamentals-for-ecommerce", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/guides/task-planning", destination: "/:locale/academy/seo-task-planning", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/guides/link-building-tactics", destination: "/:locale/academy/digital-pr-for-ecommerce", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/guides/topical-authority", destination: "/:locale/academy/topical-authority-for-ecommerce", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/guides/ranking-chatgpt", destination: "/:locale/academy/ai-search-optimization", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/guides/serp-domination", destination: "/:locale/academy/serp-domination-strategy", permanent: true },
      // Page redirects
      { source: "/resources", destination: "/academy", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/resources", destination: "/:locale/academy", permanent: true },
      { source: "/author/:slug", destination: "/blog/author/:slug", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/author/:slug", destination: "/:locale/blog/author/:slug", permanent: true },
      { source: "/meet-our-team", destination: "/team", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/meet-our-team", destination: "/:locale/team", permanent: true },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        // Fallback locale rewrite: if Edge middleware does not execute,
        // route non-locale-prefixed paths to the default locale (/en).
        {
          source: "/",
          destination: "/en",
        },
        {
          source:
            "/:path((?!en|de|fr|es|it|nl|_next|api|favicon\\.ico|sitemap|robots\\.txt|images|fonts).*)",
          destination: "/en/:path",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
