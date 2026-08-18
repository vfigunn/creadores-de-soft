import type { Metadata } from "next";
import { getProduct } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import PricingTable from "@/components/PricingTable";

const product = getProduct("cds-facturalo-simple")!;

export const metadata: Metadata = {
  title: `Precios — ${product.name}`,
  description: `Planes y precios de ${product.name}. Encontrá el plan perfecto para tu negocio.`,
};

export default function FacturaloPreciosPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Precios"
          title="Planes simples para negocios reales"
          subtitle="Sin costos ocultos. Elegí el plan que necesitás y empezá a facturar hoy."
          primaryColor={product.primaryColor}
        />
        <PricingTable plans={product.pricing} primaryColor={product.primaryColor} />
      </div>
    </section>
  );
}
