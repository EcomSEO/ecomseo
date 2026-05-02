import type { Metadata } from "next";
import Script from "next/script";
import { headers } from "next/headers";
import { DM_Sans, Figtree } from "next/font/google";
import IClosedFloatingLauncher from "@/components/ui/IClosedFloatingLauncher";
import VideoAutoUnmute from "@/components/ui/VideoAutoUnmute";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ecomseo.co"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/images/brand/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/brand/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/images/brand/favicon-180x180.png",
  },
  verification: {
    google: "5ghH4Yw3BL_EbnSv9o-SSir-6_1qaFcCbOaTDr1JzKY",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const locale = headersList.get("x-locale") || "en";

  return (
    <html lang={locale} className={`${dmSans.variable} ${figtree.variable}`}>
      <head>
        {/* Preload critical Satoshi fonts */}
        <link
          rel="preload"
          href="/fonts/Satoshi-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Satoshi-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Preconnect to GTM */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
      </head>
      <body>
        <noscript>
          {/* Force all Framer Motion animated content visible when JS is off (Googlebot initial pass) */}
          <style dangerouslySetInnerHTML={{ __html: `
            [style*="opacity: 0"], [style*="opacity:0"] {
              opacity: 1 !important;
              transform: none !important;
            }
          `}} />
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PWFC4VSN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        {/* Auto-unmute all <video> elements on first user interaction.
            Browsers block audio autoplay on cold load; this is the earliest
            we can legally flip muted=false. */}
        <VideoAutoUnmute />
        {/* Site-wide floating "Book a call" launcher — opens a compact card
            (not fullscreen). Lazy-loads the iClosed widget on first open. */}
        <IClosedFloatingLauncher />
        {/* GTM loaded after page interactive - not render-blocking */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PWFC4VSN');`,
          }}
        />
      </body>
    </html>
  );
}
