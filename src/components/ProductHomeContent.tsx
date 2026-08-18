import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import FeatureGrid from "@/components/FeatureGrid";
import type { Product } from "@/lib/data";

interface ProductHomeContentProps {
  product: Product;
  bgImage?: string;
}

export default function ProductHomeContent({ product, bgImage }: ProductHomeContentProps) {
  return (
    <>
      {/* Hero */}
      <Hero
        title={product.heroTitle}
        subtitle={product.heroSubtitle}
        ctaText="Ver precios"
        ctaHref={`/${product.slug}/precios`}
        secondaryCtaText="Explorar módulos"
        secondaryCtaHref={`/${product.slug}/modulos`}
        primaryColor={product.primaryColor}
        icon={product.icon}
        bgImage={bgImage}
      />

      {/* Benefits */}
      <section className="py-20 sm:py-28 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Beneficios"
            title="¿Por qué elegir nuestro software?"
            subtitle="Diseñado para resolver los desafíos reales de tu industria."
            primaryColor={product.primaryColor}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="text-center p-6 bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${product.primaryColor} 10%, transparent)`,
                  }}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Preview */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Módulos"
            title="Todo lo que necesitás, en un solo lugar"
            subtitle="Conocé las funcionalidades principales de nuestra plataforma."
            primaryColor={product.primaryColor}
          />
          <FeatureGrid
            items={product.modules.map((mod) => ({
              icon: mod.icon,
              name: mod.name,
              description: mod.shortDescription,
              href: `/${product.slug}/modulos/${mod.slug}`,
            }))}
            primaryColor={product.primaryColor}
            columns={3}
          />
        </div>
      </section>

      {/* Types Preview */}
      <section className="py-20 sm:py-28 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Adaptado a tu negocio"
            title="Soluciones para cada tipo de organización"
            primaryColor={product.primaryColor}
          />
          <FeatureGrid
            items={product.types.map((t) => ({
              icon: t.icon,
              name: t.name,
              description: t.shortDescription,
              href: `/${product.slug}/tipos/${t.slug}`,
            }))}
            primaryColor={product.primaryColor}
            columns={product.types.length > 3 ? 4 : 3}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
            Empezá hoy con {product.name}
          </h2>
          <p className="text-lg text-neutral-500 mb-10 max-w-2xl mx-auto">
            Probá gratis durante 14 días, sin compromiso. Configurá tu cuenta en minutos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${product.slug}/precios`}
              className="px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              style={{
                backgroundColor: product.primaryColor,
                boxShadow: `0 4px 14px color-mix(in srgb, ${product.primaryColor} 30%, transparent)`,
              }}
            >
              Ver planes y precios
            </Link>
            <Link
              href="/#contacto"
              className="px-8 py-4 font-semibold rounded-xl border-2 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                color: product.primaryColor,
                borderColor: `color-mix(in srgb, ${product.primaryColor} 30%, transparent)`,
              }}
            >
              Solicitar demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
