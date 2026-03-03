"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const navLinks = [
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
  { label: "Cases", href: "/cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "Team", href: "/team" },
  { label: "FAQ", href: "/faq" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[1200px] px-5 md:px-4 pt-4">
        <div className="flex items-center justify-between rounded-2xl bg-bg-nav backdrop-blur-[12px] border border-border px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white font-medium text-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="6" fill="rgb(123, 45, 233)" />
              <path d="M7 8h10M7 12h10M7 16h6" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            EcomSEO
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.children ? (
                  <button
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {link.label}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 pt-2 min-w-[200px]">
                        <div className="bg-bg-dropdown backdrop-blur-xl border border-border rounded-xl p-2">
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
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              href="https://w35pmime997.typeform.com/to/eqeeLQvb"
              variant="primary"
              className="hidden md:inline-flex text-xs px-4 py-2"
              external
            >
              Get in Touch
            </Button>
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                {mobileOpen ? (
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2 bg-bg-nav backdrop-blur-[12px] border border-border rounded-2xl p-4">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block py-3 text-white/70 hover:text-white border-b border-border/50"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
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
            <Button
              href="https://w35pmime997.typeform.com/to/eqeeLQvb"
              variant="primary"
              className="w-full justify-center mt-4"
              external
            >
              Get in Touch
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
