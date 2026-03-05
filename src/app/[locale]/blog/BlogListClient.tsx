"use client";

import { useState } from "react";
import LocaleLink from "@/components/ui/LocaleLink";
import type { BlogCategory } from "@/lib/blog/types";

type ArticleCard = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishDate: string;
  readingTime: number;
  author: string;
  authorSlug: string;
};

export default function BlogListClient({
  articles,
  categories,
  allLabel,
  readMoreLabel,
  minReadLabel,
}: {
  articles: ArticleCard[];
  categories: BlogCategory[];
  allLabel: string;
  readMoreLabel: string;
  minReadLabel: string;
}) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const categoryLabel = (id: string) =>
    categories.find((c) => c.id === id)?.label || id;

  return (
    <>
      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            activeCategory === "all"
              ? "bg-accent text-white"
              : "bg-white-05 text-body hover:text-heading hover:bg-white/[0.08]"
          }`}
        >
          {allLabel}
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeCategory === cat.id
                ? "bg-accent text-white"
                : "bg-white-05 text-body hover:text-heading hover:bg-white/[0.08]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Article grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((article) => (
          <div
            key={article.slug}
            className="group relative flex flex-col rounded-xl border border-border bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all p-6"
          >
            <LocaleLink
              href={`/blog/${article.slug}`}
              className="absolute inset-0 z-0"
              aria-label={article.title}
            />

            {/* Category tag */}
            <span className="text-xs font-medium text-accent uppercase tracking-wider mb-3">
              {categoryLabel(article.category)}
            </span>

            {/* Title */}
            <h2 className="text-lg font-semibold text-heading group-hover:text-white mb-2 leading-snug">
              {article.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-body leading-relaxed mb-4 line-clamp-3 flex-1">
              {article.description}
            </p>

            {/* Meta row */}
            <div className="flex items-center justify-between text-xs text-body/60 pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <LocaleLink
                  href={`/blog/author/${article.authorSlug}`}
                  className="relative z-10 hover:text-accent transition-colors underline underline-offset-2"
                >
                  {article.author}
                </LocaleLink>
                <span className="w-1 h-1 rounded-full bg-body/30" />
                <span>{article.readingTime} {minReadLabel}</span>
              </div>
              <span className="text-accent group-hover:underline">
                {readMoreLabel} &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-body text-center py-12">No articles found in this category.</p>
      )}
    </>
  );
}
