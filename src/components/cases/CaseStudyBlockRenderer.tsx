import { parseInlineLinks } from "@/lib/parseInlineLinks";
import type { CaseStudyBlock } from "@/data/caseStudies";

export default function CaseStudyBlockRenderer({
  block,
}: {
  block: CaseStudyBlock;
}) {
  switch (block.type) {
    case "p":
      return (
        <p className="font-[family-name:var(--font-dm-sans)] text-body text-base md:text-lg leading-relaxed">
          {parseInlineLinks(block.text)}
        </p>
      );

    case "h3":
      return (
        <h3 className="font-[family-name:var(--font-dm-sans)] text-[18px] md:text-[20px] font-medium text-heading mt-2">
          {block.text}
        </h3>
      );

    case "list":
      return (
        <ul className="flex flex-col gap-2 pl-5">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="font-[family-name:var(--font-dm-sans)] text-body text-base leading-relaxed list-disc marker:text-accent"
            >
              {parseInlineLinks(item)}
            </li>
          ))}
        </ul>
      );

    case "metric":
      return (
        <div className="grid grid-cols-3 gap-3 p-5 rounded-2xl border border-border bg-white/[0.02]">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-white/40 uppercase tracking-wider">
              Metric
            </span>
            <span className="text-sm font-medium text-heading">
              {block.label}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-white/40 uppercase tracking-wider">
              Before
            </span>
            <span className="text-sm font-medium text-red-400">
              {block.before}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-white/40 uppercase tracking-wider">
              After
            </span>
            <span className="text-sm font-medium text-green-400">
              {block.after}
            </span>
          </div>
        </div>
      );

    case "metrics-grid":
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {block.items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-1 p-4 rounded-2xl border border-border bg-white/[0.02]"
            >
              <span className="text-xs font-medium text-white/40 uppercase tracking-wider">
                {item.label}
              </span>
              <span className="text-sm font-medium text-red-400 line-through decoration-red-400/40">
                {item.before}
              </span>
              <span className="text-lg font-semibold text-green-400">
                {item.after}
              </span>
            </div>
          ))}
        </div>
      );

    case "callout":
      return (
        <div className="p-5 rounded-2xl border border-accent/20 bg-accent/5">
          <p className="text-accent text-sm font-medium mb-2">
            {block.title}
          </p>
          <p className="font-[family-name:var(--font-dm-sans)] text-body text-base leading-relaxed">
            {parseInlineLinks(block.text)}
          </p>
        </div>
      );

    case "highlight":
      return (
        <div className="p-5 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 flex gap-3">
          <span className="text-yellow-400 text-lg shrink-0 mt-0.5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 12 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </span>
          <div>
            <p className="text-yellow-300 text-sm font-medium mb-1">
              Expert Insight
            </p>
            <p className="font-[family-name:var(--font-dm-sans)] text-body text-sm leading-relaxed">
              {parseInlineLinks(block.text)}
            </p>
          </div>
        </div>
      );

    case "tools":
      return (
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium text-white/40 uppercase tracking-wider">
            Tools &amp; Platforms Used
          </p>
          <div className="flex flex-wrap gap-2">
            {block.items.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 text-xs font-medium text-white/80 bg-[rgba(13,13,13,0.56)] border border-border rounded-xl"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      );

    case "quote":
      return (
        <blockquote className="border-l-2 border-accent pl-5 py-2">
          <p className="font-[family-name:var(--font-dm-sans)] text-body text-base leading-relaxed italic">
            &ldquo;{block.text}&rdquo;
          </p>
          {block.attribution && (
            <p className="text-white/40 text-sm mt-2">
              &mdash; {block.attribution}
            </p>
          )}
        </blockquote>
      );

    default:
      return null;
  }
}
