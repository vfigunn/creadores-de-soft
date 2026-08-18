import type { Metadata } from "next";
import { getProduct } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import FeatureGrid from "@/components/FeatureGrid";

const product = getProduct("cds-facturalo-simple")!;

export const metadata: Metadata = {
  title: `Módulos — ${product.name}`,
  description: `Conocé todos los módulos y funcionalidades de ${product.name}.`,
};

export default function FacturaloModulosPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Módulos"
          title="Todo lo que tu negocio necesita para facturar"
          subtitle="Facturación electrónica, control de stock, reportes y más. Todo integrado."
          primaryColor={product.primaryColor}
        />
        <FeatureGrid
          items={product.modules.map((mod) => ({
            icon: mod.icon,
            name: mod.name,
            description: mod.shortDescription,
            href: `/cds-facturalo-simple/modulos/${mod.slug}`,
          }))}
          primaryColor={product.primaryColor}
          columns={3}
        />
      </div>
    </section>
  );
}
