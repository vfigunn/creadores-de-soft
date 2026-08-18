import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  primaryColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
  icon?: string;
  bgImage?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText = "Comenzar",
  ctaHref = "#",
  secondaryCtaText,
  secondaryCtaHref,
  primaryColor = "var(--corp-primary)",
  gradientFrom,
  gradientTo,
  icon,
  bgImage,
}: HeroProps) {
  const bgGradient = gradientFrom && gradientTo
    ? `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 50%, #ffffff 50%)`
    : `linear-gradient(135deg, color-mix(in srgb, ${primaryColor} 6%, white) 0%, #ffffff 100%)`;

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: bgImage ? undefined : bgGradient }}
    >
      {bgImage && (
        <>
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="absolute inset-0 z-10 bg-neutral-900/70" />
        </>
      )}

      {/* Decorative elements */}
      {!bgImage && (
        <>
          <div
            className="absolute top-20 -right-20 w-96 h-96 rounded-full opacity-[0.07] blur-3xl z-0"
            style={{ backgroundColor: primaryColor }}
          />
          <div
            className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full opacity-[0.05] blur-3xl z-0"
            style={{ backgroundColor: primaryColor }}
          />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 relative z-20">
        <div className="max-w-3xl">
          {icon && (
            <div className="mb-6 animate-fade-in-up">
              <span className="text-5xl sm:text-6xl">{icon}</span>
            </div>
          )}

          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up ${bgImage ? 'text-white' : 'text-neutral-900'}`}>
            {title}
          </h1>

          <p className={`mt-6 text-lg sm:text-xl leading-relaxed max-w-2xl animate-fade-in-up delay-100 ${bgImage ? 'text-neutral-200' : 'text-neutral-600'}`} style={{ animationFillMode: "both" }}>
            {subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up delay-200" style={{ animationFillMode: "both" }}>
            <Link
              href={ctaHref}
              className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              style={{
                backgroundColor: primaryColor,
                boxShadow: `0 4px 14px color-mix(in srgb, ${primaryColor} 30%, transparent)`,
              }}
            >
              {ctaText}
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            {secondaryCtaText && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className={`inline-flex items-center px-7 py-3.5 text-sm font-semibold rounded-xl border-2 transition-all duration-300 hover:-translate-y-0.5 ${bgImage ? 'border-white/30 text-white hover:bg-white/10' : ''}`}
                style={bgImage ? undefined : {
                  color: primaryColor,
                  borderColor: `color-mix(in srgb, ${primaryColor} 30%, transparent)`,
                }}
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
