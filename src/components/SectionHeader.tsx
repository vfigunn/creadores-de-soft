interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryColor?: string;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  primaryColor = "var(--corp-primary)",
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 sm:mb-16 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p
          className="text-sm font-semibold uppercase tracking-wider mb-3"
          style={{ color: primaryColor }}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg text-neutral-500 leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
