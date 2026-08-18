import type { Metadata } from "next";
import { getProduct } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import BlogList from "@/components/BlogList";

const product = getProduct("cds-facturalo-simple")!;

export const metadata: Metadata = {
  title: `Blog — ${product.name}`,
  description: `Novedades, consejos y guías sobre facturación y gestión comercial.`,
};

export default function FacturaloBlogPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Blog"
          title="Novedades y guías prácticas"
          subtitle="Artículos sobre facturación, impuestos y gestión comercial para tu negocio."
          primaryColor={product.primaryColor}
        />
        <BlogList posts={product.blog} primaryColor={product.primaryColor} productSlug={product.slug} />
      </div>
    </section>
  );
}
