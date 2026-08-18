import Link from "next/link";

interface FeatureCardProps {
  icon: string;
  name: string;
  description: string;
  href?: string;
  primaryColor: string;
}

export function FeatureCard({ icon, name, description, href, primaryColor }: FeatureCardProps) {
  const content = (
    <div className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
      {/* Accent corner */}
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-bl-[80px] opacity-[0.06] transition-opacity group-hover:opacity-[0.12]"
        style={{ backgroundColor: primaryColor }}
      />

      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `color-mix(in srgb, ${primaryColor} 10%, transparent)` }}
      >
        {icon}
      </div>

      <h3 className="text-lg font-bold text-neutral-900 mb-2">{name}</h3>
      <p className="text-sm text-neutral-500 leading-relaxed">{description}</p>

      {href && (
        <div className="mt-5">
          <span
            className="text-sm font-semibold inline-flex items-center gap-1 transition-colors"
            style={{ color: primaryColor }}
          >
            Ver detalle
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{content}</Link>;
  }
  return content;
}

interface FeatureGridProps {
  items: {
    icon: string;
    name: string;
    description: string;
    href?: string;
  }[];
  primaryColor: string;
  columns?: 2 | 3 | 4;
}

export default function FeatureGrid({ items, primaryColor, columns = 3 }: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
      {items.map((item) => (
        <FeatureCard
          key={item.name}
          icon={item.icon}
          name={item.name}
          description={item.description}
          href={item.href}
          primaryColor={primaryColor}
        />
      ))}
    </div>
  );
}
