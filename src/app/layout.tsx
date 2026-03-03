import type { Metadata } from "next";
import { DM_Sans, Figtree } from "next/font/google";
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
  title: "EcomSEO - Profit Focused Ecommerce SEO Agency",
  description:
    "We help ecommerce brands scale organic revenue with data-driven SEO strategies. Specialized in Shopify, WooCommerce, BigCommerce & more.",
  metadataBase: new URL("https://ecomseo.co"),
  openGraph: {
    title: "EcomSEO - Profit Focused Ecommerce SEO Agency",
    description:
      "We help ecommerce brands scale organic revenue with data-driven SEO strategies.",
    url: "https://ecomseo.co",
    siteName: "EcomSEO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcomSEO - Profit Focused Ecommerce SEO Agency",
    description:
      "We help ecommerce brands scale organic revenue with data-driven SEO strategies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
