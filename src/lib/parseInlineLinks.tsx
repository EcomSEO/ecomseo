import LocaleLink from "@/components/ui/LocaleLink";

/**
 * Parses markdown-style links [anchor text](/path) in plain text
 * and returns React nodes with LocaleLink components for internal links.
 *
 * Example input:  "Learn more about [ecommerce SEO](/blog/ecommerce-seo) strategies."
 * Output:         ["Learn more about ", <LocaleLink href="/blog/ecommerce-seo">ecommerce SEO</LocaleLink>, " strategies."]
 */
export function parseInlineLinks(text: string): React.ReactNode {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const [, anchorText, href] = match;
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    if (isExternal) {
      parts.push(
        <a
          key={match.index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent/80 underline underline-offset-2 transition-colors"
        >
          {anchorText}
        </a>
      );
    } else {
      parts.push(
        <LocaleLink
          key={match.index}
          href={href}
          className="text-accent hover:text-accent/80 underline underline-offset-2 transition-colors"
        >
          {anchorText}
        </LocaleLink>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  // If no links found, return the original string
  if (parts.length === 0) {
    return text;
  }

  // Add remaining text after last link
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
}
