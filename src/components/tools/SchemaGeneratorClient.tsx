"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { SchemaGeneratorTranslation } from "@/lib/i18n/translations/seoTools";

const CURRENCIES = ["USD", "EUR", "GBP", "CAD", "AUD", "CHF", "SEK", "NOK", "DKK", "PLN", "CZK", "JPY"];

export default function SchemaGeneratorClient({ t }: { t: SchemaGeneratorTranslation }) {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [brand, setBrand] = useState("");
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [availability, setAvailability] = useState("https://schema.org/InStock");
  const [rating, setRating] = useState("");
  const [reviewCount, setReviewCount] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const schema = useMemo(() => {
    if (!productName) return null;

    const obj: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: productName,
    };

    if (description) obj.description = description;
    if (imageUrl) obj.image = imageUrl;
    if (productUrl) obj.url = productUrl;
    if (sku) obj.sku = sku;
    if (brand) obj.brand = { "@type": "Brand", name: brand };

    if (price) {
      obj.offers = {
        "@type": "Offer",
        price: price,
        priceCurrency: currency,
        availability: availability,
        ...(productUrl ? { url: productUrl } : {}),
      };
    }

    if (rating && reviewCount) {
      obj.aggregateRating = {
        "@type": "AggregateRating",
        ratingValue: rating,
        reviewCount: reviewCount,
      };
    }

    return obj;
  }, [productName, description, imageUrl, brand, sku, price, currency, availability, rating, reviewCount, productUrl]);

  const jsonOutput = schema ? JSON.stringify(schema, null, 2) : "";

  const scriptTag = schema
    ? `<script type="application/ld+json">\n${jsonOutput}\n</script>`
    : "";

  const warnings = useMemo(() => {
    const w: string[] = [];
    if (!description) w.push("description");
    if (!imageUrl) w.push("image");
    if (!brand) w.push("brand");
    if (!price) w.push("offers.price");
    if (!productUrl) w.push("url");
    if (!sku) w.push("sku");
    return w;
  }, [description, imageUrl, brand, price, productUrl, sku]);

  const handleCopy = async () => {
    if (!scriptTag) return;
    await navigator.clipboard.writeText(scriptTag);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setProductName("");
    setDescription("");
    setImageUrl("");
    setBrand("");
    setSku("");
    setPrice("");
    setCurrency("USD");
    setAvailability("https://schema.org/InStock");
    setRating("");
    setReviewCount("");
    setProductUrl("");
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-white/[0.03] px-4 py-2.5 text-sm text-heading placeholder:text-white/20 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors";
  const labelClass = "block text-xs font-medium text-body-strong mb-1.5";

  return (
    <div className="space-y-8">
      {/* Main Tool — two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-6 items-start">
        {/* Left: Form */}
        <div className="rounded-2xl border border-border bg-bg-card p-6 space-y-4">
          {/* Product Name */}
          <div>
            <label className={labelClass}>{t.productNameLabel}</label>
            <input className={inputClass} value={productName} onChange={(e) => setProductName(e.target.value)} placeholder={t.productNamePlaceholder} />
          </div>

          {/* Description */}
          <div>
            <label className={labelClass}>{t.descriptionLabel}</label>
            <textarea className={`${inputClass} resize-none`} rows={3} value={description} onChange={(e) => setDescription(e.target.value)} placeholder={t.descriptionPlaceholder} />
          </div>

          {/* Image URL */}
          <div>
            <label className={labelClass}>{t.imageUrlLabel}</label>
            <input className={inputClass} value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder={t.imageUrlPlaceholder} />
          </div>

          {/* Brand + SKU row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelClass}>{t.brandLabel}</label>
              <input className={inputClass} value={brand} onChange={(e) => setBrand(e.target.value)} placeholder={t.brandPlaceholder} />
            </div>
            <div>
              <label className={labelClass}>{t.skuLabel}</label>
              <input className={inputClass} value={sku} onChange={(e) => setSku(e.target.value)} placeholder={t.skuPlaceholder} />
            </div>
          </div>

          {/* Price + Currency row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelClass}>{t.priceLabel}</label>
              <input className={inputClass} type="text" inputMode="decimal" value={price} onChange={(e) => setPrice(e.target.value)} placeholder={t.pricePlaceholder} />
            </div>
            <div>
              <label className={labelClass}>{t.currencyLabel}</label>
              <select className={inputClass} value={currency} onChange={(e) => setCurrency(e.target.value)}>
                {CURRENCIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Availability */}
          <div>
            <label className={labelClass}>{t.availabilityLabel}</label>
            <select className={inputClass} value={availability} onChange={(e) => setAvailability(e.target.value)}>
              {t.availabilityOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* Rating + Review Count row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelClass}>{t.ratingLabel}</label>
              <input className={inputClass} type="text" inputMode="decimal" value={rating} onChange={(e) => setRating(e.target.value)} placeholder={t.ratingPlaceholder} />
            </div>
            <div>
              <label className={labelClass}>{t.reviewCountLabel}</label>
              <input className={inputClass} type="text" inputMode="numeric" value={reviewCount} onChange={(e) => setReviewCount(e.target.value)} placeholder={t.reviewCountPlaceholder} />
            </div>
          </div>

          {/* Product URL */}
          <div>
            <label className={labelClass}>{t.urlLabel}</label>
            <input className={inputClass} value={productUrl} onChange={(e) => setProductUrl(e.target.value)} placeholder={t.urlPlaceholder} />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={handleCopy}
              disabled={!schema}
              className="flex-1 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white hover:bg-accent/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {copied ? t.copiedButton : t.copyButton}
            </button>
            <button
              onClick={handleReset}
              className="rounded-lg border border-border px-4 py-2.5 text-sm text-body hover:bg-white/[0.03] transition-colors"
            >
              {t.resetButton}
            </button>
          </div>
        </div>

        {/* Right: JSON-LD Output + Validation */}
        <div className="space-y-4">
          {/* JSON Output */}
          <div className="rounded-2xl border border-border bg-bg-card overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-border">
              <span className="text-sm font-medium text-heading">{t.previewTitle}</span>
              {schema && (
                <button
                  onClick={handleCopy}
                  className="text-xs text-accent hover:text-primary-hover transition-colors"
                >
                  {copied ? t.copiedButton : t.copyButton}
                </button>
              )}
            </div>
            <div className="p-5 max-h-[500px] overflow-auto">
              {schema ? (
                <pre className="text-xs text-body font-mono whitespace-pre-wrap break-all leading-relaxed">
                  <code>{scriptTag}</code>
                </pre>
              ) : (
                <p className="text-sm text-white/20 text-center py-8">
                  Enter a product name to generate schema...
                </p>
              )}
            </div>
          </div>

          {/* Validation */}
          <AnimatePresence>
            {schema && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="rounded-2xl border border-border bg-bg-card p-5 space-y-3"
              >
                <h3 className="text-sm font-medium text-heading">{t.validationTitle}</h3>

                {/* Valid indicator */}
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-green-400" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-green-400">{t.validLabel}: @context, @type, name</span>
                </div>

                {/* Warnings for missing fields */}
                {warnings.length > 0 && (
                  <div className="space-y-1.5">
                    {warnings.map((field) => (
                      <div key={field} className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-yellow-400 shrink-0" viewBox="0 0 20 20" fill="none">
                          <path d="M10 6v4M10 14h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        <span className="text-yellow-400">{t.warningLabel}: {field}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8 text-center max-w-[700px] mx-auto">
        <h3 className="text-lg font-medium text-heading mb-2">{t.ctaBottom}</h3>
        <p className="text-sm text-body mb-6">{t.ctaBottomDesc}</p>
        <a
          href="https://d2fqmklduf8wng.typeform.com/to/cFBjPOkN"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent/90 transition-colors"
        >
          {t.ctaBottomButton}
        </a>
      </div>
    </div>
  );
}
