import type { Metadata } from "next";
import { getProduct } from "@/lib/data";
import ProductHomeContent from "@/components/ProductHomeContent";

const product = getProduct("cds-cooperativas")!;

export const metadata: Metadata = {
  title: `${product.name} — ${product.tagline}`,
  description: product.description,
};

export default function CooperativasPage() {
  return <ProductHomeContent product={product} bgImage="/backgrounds/cooperativas.png" />;
}
