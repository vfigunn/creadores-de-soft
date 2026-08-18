import type { Metadata } from "next";
import { getProduct } from "@/lib/data";
import ProductHomeContent from "@/components/ProductHomeContent";

const product = getProduct("cds-academias")!;

export const metadata: Metadata = {
  title: `${product.name} — ${product.tagline}`,
  description: product.description,
};

export default function AcademiasPage() {
  return <ProductHomeContent product={product} bgImage="/backgrounds/academia.png" />;
}
