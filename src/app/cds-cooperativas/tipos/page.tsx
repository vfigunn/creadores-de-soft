import type { Metadata } from "next";
import { getProduct } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import FeatureGrid from "@/components/FeatureGrid";

const product = getProduct("cds-cooperativas")!;

export const metadata: Metadata = {
  title: `Tipos de institución — ${product.name}`,
  description: `${product.name} se adapta a diferentes tipos de instituciones educativas.`,
};

export default function CooperativasTiposPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tipos de institución"
          title="Para cada tipo de institución educativa"
          subtitle="Cooperativas, institutos terciarios, escuelas de oficios y más."
          primaryColor={product.primaryColor}
        />
        <FeatureGrid
          items={product.types.map((t) => ({
            icon: t.icon,
            name: t.name,
            description: t.shortDescription,
            href: `/cds-cooperativas/tipos/${t.slug}`,
          }))}
          primaryColor={product.primaryColor}
          columns={3}
        />
      </div>
    </section>
  );
}
