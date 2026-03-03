"use client";

const platforms = [
  "Shopify",
  "WooCommerce",
  "BigCommerce",
  "Magento",
  "Lightspeed",
  "Adobe Commerce",
  "Shopware",
  "PrestaShop",
];

export default function ClientLogos() {
  return (
    <section className="w-full py-12 overflow-hidden border-y border-border/50">
      <div className="flex animate-ticker">
        {[...platforms, ...platforms].map((platform, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center px-10 md:px-16"
          >
            <span className="text-white/30 text-lg font-medium whitespace-nowrap">
              {platform}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
