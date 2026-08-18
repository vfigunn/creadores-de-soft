import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getProduct, getModule } from "@/lib/data";

const product = getProduct("cds-hoteleria")!;

export async function generateStaticParams() {
  return product.modules.map((mod) => ({ slug: mod.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const mod = getModule("cds-hoteleria", slug);
  if (!mod) return {};
  return {
    title: `${mod.name} — ${product.name}`,
    description: mod.shortDescription,
  };
}

export default async function HoteleriaModuloDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mod = getModule("cds-hoteleria", slug);
  if (!mod) notFound();

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-neutral-400">
          <Link href="/cds-hoteleria" className="hover:text-neutral-600 transition-colors">
            {product.name}
          </Link>
          <span>/</span>
          <Link href="/cds-hoteleria/modulos" className="hover:text-neutral-600 transition-colors">
            Módulos
          </Link>
          <span>/</span>
          <span className="text-neutral-700 font-medium">{mod.name}</span>
        </nav>

        <div className="flex items-center gap-4 mb-8">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
            style={{ backgroundColor: `color-mix(in srgb, ${product.primaryColor} 10%, transparent)` }}
          >
            {mod.icon}
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900">{mod.name}</h1>
          </div>
        </div>

        <p className="text-lg text-neutral-600 leading-relaxed mb-12">
          {mod.description}
        </p>

        <div className="bg-neutral-50 rounded-2xl p-8 sm:p-10">
          <h2 className="text-xl font-bold text-neutral-900 mb-6">Funcionalidades incluidas</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mod.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 shrink-0 mt-0.5"
                  style={{ color: product.primaryColor }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-neutral-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/cds-hoteleria/precios"
            className="px-6 py-3 text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            style={{ backgroundColor: product.primaryColor }}
          >
            Ver precios
          </Link>
          <Link
            href="/cds-hoteleria/modulos"
            className="px-6 py-3 text-sm font-semibold rounded-xl border-2 transition-all duration-300 hover:-translate-y-0.5"
            style={{
              color: product.primaryColor,
              borderColor: `color-mix(in srgb, ${product.primaryColor} 30%, transparent)`,
            }}
          >
            ← Todos los módulos
          </Link>
        </div>
      </div>
    </section>
  );
}
