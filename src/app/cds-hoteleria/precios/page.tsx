import type { Metadata } from "next";
import { getProduct } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import PricingTable from "@/components/PricingTable";

const product = getProduct("cds-hoteleria")!;

export const metadata: Metadata = {
  title: `Precios — ${product.name}`,
  description: `Planes y precios de ${product.name}. Encontrá el plan perfecto para tu establecimiento.`,
};

export default function HoteleriaPreciosPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Precios"
          title="Planes transparentes, sin sorpresas"
          subtitle="Elegí el plan que mejor se adapte al tamaño de tu establecimiento. Todos incluyen 14 días de prueba gratis."
          primaryColor={product.primaryColor}
        />
        <PricingTable plans={product.pricing} primaryColor={product.primaryColor} />
      </div>
    </section>
  );
}
