import ScrollingPreview from "./ScrollingPreview";
import type { ToolPreviewStrings } from "@/lib/tools/previewStrings";

type Props = {
  /** Relative path to the screenshot under /public (e.g. "/images/tools/foo-preview.png"). */
  src: string;
  /** Intrinsic width of the screenshot file (px). */
  imgWidth: number;
  /** Intrinsic height of the screenshot file (px). */
  imgHeight: number;
  /** URL shown in the browser-chrome address bar. */
  url: string;
  /** Localized text (badge, title, subtitle, alt, bullets). */
  strings: ToolPreviewStrings;
};

/**
 * Reusable "What you'll see" section that wraps the ScrollingPreview
 * with a header (badge + title + subtitle) and a bullet list under the screenshot.
 * Renders identically on every tool page for consistency.
 */
export default function ToolPreviewSection({ src, imgWidth, imgHeight, url, strings }: Props) {
  return (
    <section className="relative px-5 md:px-16 py-20 border-t border-border overflow-hidden">
      <div className="relative z-10 max-w-[1100px] mx-auto">
        <div className="text-center max-w-[640px] mx-auto mb-10">
          <p className="text-[11px] tracking-[0.18em] text-accent/80 mb-3">{strings.badge}</p>
          <h2 className="text-[26px] md:text-[36px] font-medium text-heading leading-[1.15] tracking-[-0.02em] mb-4">
            {strings.title}
          </h2>
          <p className="text-body text-[15px] md:text-base leading-relaxed">{strings.subtitle}</p>
        </div>

        <ScrollingPreview
          src={src}
          alt={strings.alt}
          imgWidth={imgWidth}
          imgHeight={imgHeight}
          url={url}
        />

        <ul className="mt-10 grid md:grid-cols-2 gap-3 max-w-[840px] mx-auto">
          {strings.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex items-start gap-3 p-4 rounded-xl border border-border bg-bg-card"
            >
              <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 10l4.5 4.5L16 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm text-body-strong">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
