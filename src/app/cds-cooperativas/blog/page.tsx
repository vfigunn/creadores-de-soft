import type { Metadata } from "next";
import { getProduct } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import BlogList from "@/components/BlogList";

const product = getProduct("cds-cooperativas")!;

export const metadata: Metadata = {
  title: `Blog — ${product.name}`,
  description: `Novedades, consejos y tendencias sobre gestión cooperativa.`,
};

export default function CooperativasBlogPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Blog"
          title="Novedades en gestión cooperativa"
          subtitle="Artículos sobre digitalización, gestión de aranceles y experiencia estudiantil."
          primaryColor={product.primaryColor}
        />
        <BlogList posts={product.blog} primaryColor={product.primaryColor} productSlug={product.slug} />
      </div>
    </section>
  );
}
