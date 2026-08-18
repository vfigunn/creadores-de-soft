import type { Metadata } from "next";
import { getProduct } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import LearningGrid from "@/components/LearningGrid";

const product = getProduct("cds-hoteleria")!;

export const metadata: Metadata = {
  title: `Centro de Aprendizaje — ${product.name}`,
  description: `Tutoriales, guías y recursos para aprovechar al máximo ${product.name}.`,
};

export default function HoteleriaAprendizajePage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Aprendizaje"
          title="Centro de recursos"
          subtitle="Tutoriales, guías y webinars para que aproveches cada funcionalidad de la plataforma."
          primaryColor={product.primaryColor}
        />
        <LearningGrid resources={product.learning} primaryColor={product.primaryColor} />
      </div>
    </section>
  );
}
