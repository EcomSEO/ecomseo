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
            "/:path((?!en|de|fr|es|it|nl|_next|api|favicon\\.ico|sitemap\\.xml|robots\\.txt|images|fonts).*)",
          destination: "/en/:path",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
