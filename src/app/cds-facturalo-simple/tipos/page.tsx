import type { Metadata } from "next";
import { getProduct } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import FeatureGrid from "@/components/FeatureGrid";

const product = getProduct("cds-facturalo-simple")!;

export const metadata: Metadata = {
  title: `Tipos de negocio — ${product.name}`,
  description: `${product.name} se adapta a diferentes tipos de negocio y rubro.`,
};

export default function FacturaloTiposPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tipos de negocio"
          title="Adaptado a tu rubro"
          subtitle="No importa el tamaño o tipo de negocio: tenemos la configuración perfecta para vos."
          primaryColor={product.primaryColor}
        />
        <FeatureGrid
          items={product.types.map((t) => ({
            icon: t.icon,
            name: t.name,
            description: t.shortDescription,
            href: `/cds-facturalo-simple/tipos/${t.slug}`,
          }))}
          primaryColor={product.primaryColor}
          columns={product.types.length > 3 ? 4 : 3}
        />
      </div>
    </section>
  );
}
