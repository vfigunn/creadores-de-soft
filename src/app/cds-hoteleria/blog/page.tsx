import type { Metadata } from "next";
import { getProduct } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import BlogList from "@/components/BlogList";

const product = getProduct("cds-hoteleria")!;

export const metadata: Metadata = {
  title: `Blog — ${product.name}`,
  description: `Novedades, consejos y tendencias sobre gestión hotelera.`,
};

export default function HoteleriaBlogPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Blog"
          title="Novedades y tendencias"
          subtitle="Artículos, guías y consejos para mejorar la gestión de tu establecimiento."
          primaryColor={product.primaryColor}
        />
        <BlogList posts={product.blog} primaryColor={product.primaryColor} productSlug={product.slug} />
      </div>
    </section>
  );
}
