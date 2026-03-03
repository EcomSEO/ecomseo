interface BadgeProps {
  text: string;
  className?: string;
}

export default function Badge({ text, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white/80 bg-[rgba(10,10,10,0.48)] border border-border ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
      {text}
    </span>
  );
}
