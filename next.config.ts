import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false, // Remove X-Powered-By: Next.js header
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Fix #7: Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
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
      // Locale-prefixed guide redirects (specific before catch-all)
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
      // Generic catch-all (AFTER specific rules)
      { source: "/:locale(en|de|fr|es|it|nl)/guides/:slug", destination: "/:locale/academy/:slug", permanent: true },
      { source: "/guides/:slug", destination: "/academy/:slug", permanent: true },
      // Page redirects
      { source: "/audit", destination: "/demo", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/audit", destination: "/:locale/demo", permanent: true },
      { source: "/resources", destination: "/academy", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/resources", destination: "/:locale/academy", permanent: true },
      { source: "/author/:slug", destination: "/blog/author/:slug", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/author/:slug", destination: "/:locale/blog/author/:slug", permanent: true },
      { source: "/meet-our-team", destination: "/team", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/meet-our-team", destination: "/:locale/team", permanent: true },
      // Blog article rename: ecommerce-seo-audit → how-to-make-ecommerce-seo-audit
      { source: "/blog/ecommerce-seo-audit", destination: "/blog/how-to-make-ecommerce-seo-audit", permanent: true },
      { source: "/de/ratgeber/ecommerce-seo-audit-leitfaden", destination: "/de/ratgeber/wie-ecommerce-seo-audit-machen", permanent: true },
      { source: "/es/articulos/auditoria-seo-ecommerce", destination: "/es/articulos/como-hacer-auditoria-seo-ecommerce", permanent: true },
      { source: "/fr/articles/audit-seo-ecommerce", destination: "/fr/articles/comment-faire-audit-seo-ecommerce", permanent: true },
      { source: "/it/articoli/audit-seo-ecommerce", destination: "/it/articoli/come-fare-audit-seo-ecommerce", permanent: true },
      { source: "/nl/kennisbank/ecommerce-seo-audit-gids", destination: "/nl/kennisbank/hoe-ecommerce-seo-audit-maken", permanent: true },
      // Fix 404s from external links / crawlers
      { source: "/Home", destination: "/", permanent: true },
      { source: "/mens-running-shoes/:path*", destination: "/ecommerce-seo", permanent: true },
      { source: "/services/ecommerce-seo", destination: "/ecommerce-seo", permanent: true },
      { source: "/services/:slug", destination: "/ecommerce-seo-services", permanent: true },
      { source: "/about", destination: "/team", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/services/ecommerce-seo", destination: "/:locale/ecommerce-seo", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/services/:slug", destination: "/:locale/ecommerce-seo-services", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/about", destination: "/:locale/team", permanent: true },
      // Demo funnel — funnel any legacy "book a call" / "audit" / "proposal" entry points to /demo
      // (intentionally leaving /contact + /pricing alone — they are real existing pages)
      { source: "/book", destination: "/demo", permanent: true },
      { source: "/book-a-call", destination: "/demo", permanent: true },
      { source: "/proposal", destination: "/demo", permanent: true },
      { source: "/get-a-proposal", destination: "/demo", permanent: true },
      { source: "/free-proposal", destination: "/demo", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/book", destination: "/:locale/demo", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/book-a-call", destination: "/:locale/demo", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/proposal", destination: "/:locale/demo", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/get-a-proposal", destination: "/:locale/demo", permanent: true },
      { source: "/:locale(en|de|fr|es|it|nl)/free-proposal", destination: "/:locale/demo", permanent: true },
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
        // UK location pages: their public URLs have NO locale prefix
        // (e.g. /seo-agency-london instead of /en/seo-agency-london), so
        // the middleware's locale-prefix slug-translation never fires.
        // Map them directly to the canonical [locale]/location/[slug]
        // route. Without this rewrite, /seo-agency-london (and its 13
        // siblings) hit the catch-all below and 404 against /en/seo-agency-london.
        {
          source: "/seo-agency-:city(london|birmingham|manchester|bristol|edinburgh|essex|newcastle|leeds|surrey|hertfordshire|oxford|sheffield|liverpool|nottingham)",
          destination: "/en/location/:city",
        },
        {
          // Negative lookahead matches WHOLE path segments only — "demo" must not
          // be treated as locale "de" because it starts with "de".
          source:
            "/:path((?!(?:en|de|fr|es|it|nl|_next|api|favicon\\.ico|sitemap[\\w-]*\\.xml|robots\\.txt|images|fonts|videos)(?:/|$)).*)",
          destination: "/en/:path",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
