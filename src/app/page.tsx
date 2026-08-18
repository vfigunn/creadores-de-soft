import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import SectionHeader from "@/components/SectionHeader";
import ProductDemo from "@/components/ProductDemo";
import FAQ from "@/components/FAQ";
import { productList } from "@/lib/data";

const productGradients: Record<string, { from: string; to: string }> = {
  "cds-hoteleria": { from: "#7C3AED", to: "#A78BFA" },
  "cds-facturalo-simple": { from: "#0EA5E9", to: "#38BDF8" },
  "cds-academias": { from: "#1E3A5F", to: "#2D5A8E" },
};

const whyUs = [
  {
    icon: "🏗️",
    title: "Más de 10 años de experiencia",
    description:
      "Desde 2014 diseñamos y desarrollamos soluciones de software que resuelven problemas reales de empresas en toda Argentina.",
  },
  {
    icon: "🤝",
    title: "Soporte que entiende tu negocio",
    description:
      "No solo hacemos software: entendemos tu industria. Nuestro equipo de soporte habla tu idioma y conoce tus desafíos.",
  },
  {
    icon: "🔒",
    title: "Seguridad y disponibilidad",
    description:
      "Infraestructura en la nube con 99.9% de uptime garantizado, backups automáticos y encriptación de datos de extremo a extremo.",
  },
  {
    icon: "🚀",
    title: "Evolución constante",
    description:
      "Actualizaciones mensuales con nuevas funcionalidades basadas en el feedback real de nuestros clientes.",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* === HERO === */}
        <Hero
          title="Software que impulsa tu negocio"
          subtitle="Creamos soluciones SaaS para las industrias que más lo necesitan. Hotelería, facturación y gestión académica — todo en una familia de productos diseñados para simplificar lo complejo."
          ctaText="Conocé nuestros productos"
          ctaHref="#productos"
          secondaryCtaHref="#contacto"
          bgImage="/backgrounds/corp.png"
        />

        {/* === SOCIAL PROOF CAROUSEL === */}
        <LogoCarousel />

        {/* === PRODUCTS === */}
        <section id="productos" className="py-20 sm:py-28 bg-neutral-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Nuestros Productos"
              title="Tres productos, una misión: simplificar tu gestión"
              subtitle="Cada producto está pensado para resolver los desafíos específicos de su industria, con la misma filosofía de diseño y calidad."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {productList.map((product, index) => {
                const gradient = productGradients[product.slug];
                return (
                  <Link
                    key={product.slug}
                    href={product.routeBase}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-neutral-100 transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* Gradient top bar */}
                    <div
                      className="h-2 transition-all duration-500 group-hover:h-3"
                      style={{
                        background: `linear-gradient(90deg, ${gradient.from}, ${gradient.to})`,
                      }}
                    />

                    <div className="p-8 sm:p-10">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, color-mix(in srgb, ${product.primaryColor} 10%, transparent), color-mix(in srgb, ${product.primaryColor} 5%, transparent))`,
                        }}
                      >
                        {product.icon}
                      </div>

                      <h3
                        className="text-xl font-bold mb-3 transition-colors"
                        style={{ color: product.primaryColor }}
                      >
                        {product.name}
                      </h3>

                      <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        {product.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.modules.slice(0, 3).map((mod) => (
                          <span
                            key={mod.slug}
                            className="px-3 py-1 text-xs font-medium rounded-full"
                            style={{
                              color: product.primaryColor,
                              backgroundColor: `color-mix(in srgb, ${product.primaryColor} 8%, transparent)`,
                            }}
                          >
                            {mod.name}
                          </span>
                        ))}
                        {product.modules.length > 3 && (
                          <span className="px-3 py-1 text-xs text-neutral-400 rounded-full bg-neutral-100">
                            +{product.modules.length - 3} más
                          </span>
                        )}
                      </div>

                      <span
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3"
                        style={{ color: product.primaryColor }}
                      >
                        Explorar producto
                        <svg
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* === PRODUCT DEMO === */}
        <ProductDemo />

        {/* === WHY US === */}
        <section id="nosotros" className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[var(--corp-primary)] mb-3">
                  Sobre nosotros
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                  Tecnología que entiende tu industria
                </h2>
                <p className="text-lg text-neutral-500 leading-relaxed mb-8">
                  No somos una fábrica de software genérico. Nos especializamos en industrias
                  concretas para poder ofrecerte soluciones que realmente funcionan desde el día
                  uno, sin meses de personalización.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "+500 empresas confían en nosotros",
                    "+50.000 usuarios activos",
                    "99.9% de uptime garantizado",
                    "Soporte en español 24/7",
                  ].map((stat) => (
                    <div key={stat} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[var(--corp-primary)]" />
                      <span className="text-sm font-medium text-neutral-700">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {whyUs.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <span className="text-2xl mb-3 block">{item.icon}</span>
                    <h3 className="text-sm font-bold text-neutral-900 mb-2">{item.title}</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === FAQ === */}
        <FAQ />

        {/* === CTA === */}
        <section className="py-20 sm:py-28 relative overflow-hidden">
          <div
            className="absolute inset-0 animate-gradient"
            style={{
              background:
                "linear-gradient(135deg, var(--corp-primary) 0%, var(--corp-secondary) 50%, var(--corp-primary-dark) 100%)",
              backgroundSize: "200% 200%",
            }}
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Agendá una demo personalizada y descubrí cómo nuestras soluciones pueden
              simplificar la gestión de tu empresa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#contacto"
                className="px-8 py-4 bg-white text-[var(--corp-primary)] font-semibold rounded-xl hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Agendar demo gratis
              </Link>
              <Link
                href="#productos"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                Ver productos
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
