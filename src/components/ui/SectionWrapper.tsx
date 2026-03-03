interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`w-full px-5 md:px-16 ${className}`}>
      <div className="mx-auto max-w-[1200px] w-full">{children}</div>
    </section>
  );
}
