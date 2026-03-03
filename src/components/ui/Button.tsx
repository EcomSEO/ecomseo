import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-primary hover:bg-primary-hover text-white",
    secondary:
      "bg-transparent border border-border text-white hover:bg-white/5",
  };

  const props = {
    className: `${baseStyles} ${variants[variant]} ${className}`,
    ...(external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {}),
  };

  return (
    <Link href={href} {...props}>
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.333 8h9.334M8.667 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
