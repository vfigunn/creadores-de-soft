import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getProduct, getProductType } from "@/lib/data";

const product = getProduct("cds-cooperativas")!;

export async function generateStaticParams() {
  return product.types.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const type = getProductType("cds-cooperativas", slug);
  if (!type) return {};
  return {
    title: `${type.name} — ${product.name}`,
    description: type.shortDescription,
  };
}

export default async function CooperativasTipoDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const type = getProductType("cds-cooperativas", slug);
  if (!type) notFound();

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 flex items-center gap-2 text-sm text-neutral-400">
          <Link href="/cds-cooperativas" className="hover:text-neutral-600 transition-colors">{product.name}</Link>
          <span>/</span>
          <Link href="/cds-cooperativas/tipos" className="hover:text-neutral-600 transition-colors">Tipos</Link>
          <span>/</span>
          <span className="text-neutral-700 font-medium">{type.name}</span>
        </nav>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl" style={{ backgroundColor: `color-mix(in srgb, ${product.primaryColor} 10%, transparent)` }}>
            {type.icon}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900">{type.name}</h1>
        </div>

        <p className="text-lg text-neutral-600 leading-relaxed mb-12">{type.description}</p>

        <div className="bg-neutral-50 rounded-2xl p-8 sm:p-10">
          <h2 className="text-xl font-bold text-neutral-900 mb-6">Características específicas</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {type.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <svg className="w-5 h-5 shrink-0 mt-0.5" style={{ color: product.primaryColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-neutral-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/cds-cooperativas/precios" className="px-6 py-3 text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5" style={{ backgroundColor: product.primaryColor }}>
            Ver precios
          </Link>
          <Link href="/cds-cooperativas/tipos" className="px-6 py-3 text-sm font-semibold rounded-xl border-2 transition-all duration-300 hover:-translate-y-0.5" style={{ color: product.primaryColor, borderColor: `color-mix(in srgb, ${product.primaryColor} 30%, transparent)` }}>
            ← Todos los tipos
          </Link>
        </div>
      </div>
    </section>
  );
}
