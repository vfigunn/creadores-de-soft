import type { Metadata } from "next";
import { getProduct } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import FeatureGrid from "@/components/FeatureGrid";

const product = getProduct("cds-hoteleria")!;

export const metadata: Metadata = {
  title: `Tipos de alojamiento — ${product.name}`,
  description: `${product.name} se adapta a diferentes tipos de alojamiento.`,
};

export default function HoteleriaTiposPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tipos de alojamiento"
          title="Adaptado a cada tipo de establecimiento"
          subtitle="No importa el tamaño o formato de tu alojamiento: tenemos la solución perfecta."
          primaryColor={product.primaryColor}
        />
        <FeatureGrid
          items={product.types.map((t) => ({
            icon: t.icon,
            name: t.name,
            description: t.shortDescription,
            href: `/cds-hoteleria/tipos/${t.slug}`,
          }))}
          primaryColor={product.primaryColor}
          columns={product.types.length > 3 ? 4 : 3}
        />
      </div>
    </section>
  );
}
