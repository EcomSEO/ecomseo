/**
 * BookCallButton — styled like the regular <Button> but opens the iClosed
 * booking popup natively (using iClosed's own popup widget).
 *
 * Requires the iClosed widget script to be loaded on the page (it is, via
 * src/app/layout.tsx). The script intercepts clicks on any element with
 * data-iclosed-link + data-embed-type="popup" and opens the booking modal.
 */
interface BookCallButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "large" | "small";
  className?: string;
  ariaLabel?: string;
  dataUrl?: string;
}

const DEFAULT_URL = "https://app.iclosed.io/e/fabian/seo-fit-call";

export default function BookCallButton({
  children,
  variant = "primary",
  size = "large",
  className = "",
  ariaLabel = "Book a 30-minute SEO fit call",
  dataUrl = DEFAULT_URL,
}: BookCallButtonProps) {
  const isLarge = size === "large";
  const iconSize = isLarge ? 18 : 14;

  const baseStyles = `inline-flex items-center font-medium transition-all duration-300 cursor-pointer ${
    isLarge
      ? "gap-[10px] px-[18px] py-[12px] rounded-[12px] text-sm"
      : "gap-[8px] px-[13px] py-[9px] rounded-[10px] text-xs"
  }`;

  const variants = {
    primary: isLarge
      ? "bg-primary hover:bg-primary-hover text-white"
      : "bg-accent hover:bg-primary-hover text-white",
    secondary: "bg-bg border border-border text-white hover:bg-white/5",
  };

  const icon = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M221.66 133.66l-72 72a8 8 0 01-11.32-11.32L196.69 136H40a8 8 0 010-16h156.69l-58.35-58.34a8 8 0 0111.32-11.32l72 72a8 8 0 010 11.32z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <button
      type="button"
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label={ariaLabel}
      data-iclosed-link={dataUrl}
      data-embed-type="popup"
    >
      {children}
      {icon}
    </button>
  );
}
