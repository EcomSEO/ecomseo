import Link from "next/link";
import LocaleLink from "@/components/ui/LocaleLink";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "large" | "small";
  className?: string;
  external?: boolean;
}

export default function Button({
  href,
  children,
  variant = "primary",
  size = "large",
  className = "",
  external = false,
}: ButtonProps) {
  const isLarge = size === "large";
  const iconSize = isLarge ? 18 : 14;

  const baseStyles = `inline-flex items-center font-medium transition-all duration-300 ${
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

  const props = {
    className: `${baseStyles} ${variants[variant]} ${className}`,
    ...(external
      ? { target: "_blank" as const, rel: "noopener noreferrer" }
      : {}),
  };

  const icon = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M221.66 133.66l-72 72a8 8 0 01-11.32-11.32L196.69 136H40a8 8 0 010-16h156.69l-58.35-58.34a8 8 0 0111.32-11.32l72 72a8 8 0 010 11.32z"
        fill="currentColor"
      />
    </svg>
  );

  if (external) {
    return (
      <Link href={href} {...props}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <LocaleLink href={href} {...props}>
      {children}
      {icon}
    </LocaleLink>
  );
}
