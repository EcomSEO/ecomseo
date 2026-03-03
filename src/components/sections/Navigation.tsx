"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Cases", href: "/cases" },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Ecommerce SEO", href: "/ecommerce-seo" },
      { label: "Shopify SEO", href: "/shopify-seo" },
      { label: "Link Building", href: "/link-building" },
      { label: "Keyword Research", href: "/keyword-research" },
      { label: "Content Writing", href: "/content-writing" },
      { label: "Amazon SEO", href: "/amazon-seo" },
    ],
  },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Team", href: "/team" },
    ],
  },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[1200px] px-5 md:px-16 pt-6">
        <div className="flex items-center justify-between rounded-[12px] bg-bg-nav backdrop-blur-[12px] border border-border px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://framerusercontent.com/images/TQbukBV8G5LIkEwGfbxZAiZs.png"
              alt="EcomSEO"
              width={215}
              height={25}
              className="h-[25px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-[2px]">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  link.children && setOpenDropdown(link.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.children ? (
                  <button className="px-3 py-2 text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1 rounded-lg">
                    {link.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="px-3 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-lg"
                  >
                    {link.label}
                  </Link>
                )}
                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2 min-w-[200px] z-50">
                    <div className="bg-[rgba(10,10,10,0.9)] backdrop-blur-xl border border-border rounded-xl p-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <Button
                href="https://w35pmime997.typeform.com/to/eqeeLQvb"
                variant="primary"
                size="small"
                external
              >
                Get in Touch
              </Button>
            </div>
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                {mobileOpen ? (
                  <path
                    d="M6 6l12 12M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 8h16M4 16h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2 bg-bg-nav backdrop-blur-[12px] border border-border rounded-[12px] p-4">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <span className="block py-3 text-white/70 border-b border-border/50">
                    {link.label}
                  </span>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-3 text-white/70 hover:text-white border-b border-border/50"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
                {link.children && (
                  <div className="pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 text-sm text-white/50 hover:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4">
              <Button
                href="https://w35pmime997.typeform.com/to/eqeeLQvb"
                variant="primary"
                size="small"
                className="w-full justify-center"
                external
              >
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
