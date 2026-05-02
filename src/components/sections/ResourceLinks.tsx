"use client";

import { motion } from "framer-motion";
import LocaleLink from "@/components/ui/LocaleLink";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLocale } from "@/lib/i18n/useTranslations";
import { academyPreviewT, blogPreviewT } from "@/lib/i18n/translations/home";

export default function ResourceLinks() {
  const locale = useLocale();
  const academy = academyPreviewT[locale];
  const blog = blogPreviewT[locale];

  return (
    <SectionWrapper className="py-10">
      <div className="flex flex-col gap-8">
        {/* Academy cluster links */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-white/40 uppercase tracking-wider">
              {academy.badge} — {academy.clusters.length} topics, 66 lessons
            </p>
            <LocaleLink
              href="/academy"
              className="text-accent text-xs font-medium hover:underline"
            >
              {academy.cta} →
            </LocaleLink>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {academy.clusters.map((cluster) => (
              <LocaleLink
                key={cluster.href}
                href={cluster.href}
                className="group p-3 rounded-xl border border-border bg-white/[0.01] hover:bg-white/[0.04] transition-colors"
              >
                <p className="text-xs font-medium text-heading group-hover:text-accent transition-colors mb-1">
                  {cluster.title}
                </p>
                <p className="text-[10px] text-white/30 font-mono">
                  {cluster.count}
                </p>
              </LocaleLink>
            ))}
          </div>
          {/* Inline topic links for SEO text + link juice */}
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {academy.clusters.flatMap((cluster) =>
              cluster.topics.map((topic) => (
                <LocaleLink
                  key={topic.href}
                  href={topic.href}
                  className="text-body text-[11px] hover:text-accent transition-colors"
                >
                  {topic.title}
                </LocaleLink>
              ))
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Blog links */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-white/40 uppercase tracking-wider">
              {blog.badge}
            </p>
            <div className="flex items-center gap-4">
              <LocaleLink
                href="/blog"
                className="text-accent text-xs font-medium hover:underline"
              >
                {blog.ctaBlog} →
              </LocaleLink>
              <LocaleLink
                href="/academy"
                className="text-accent text-xs font-medium hover:underline"
              >
                {blog.ctaAcademy} →
              </LocaleLink>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {blog.articles.map((article) => (
              <LocaleLink
                key={article.href}
                href={article.href}
                className="group flex flex-col gap-1 p-3 rounded-xl border border-border bg-white/[0.01] hover:bg-white/[0.04] transition-colors"
              >
                <p className="text-sm font-medium text-heading group-hover:text-accent transition-colors">
                  {article.title}
                </p>
                <p className="text-body text-xs leading-relaxed">
                  {article.snippet}
                </p>
              </LocaleLink>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
