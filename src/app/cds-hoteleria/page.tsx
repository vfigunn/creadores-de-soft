import type { Metadata } from "next";
import { getProduct } from "@/lib/data";
import ProductHomeContent from "@/components/ProductHomeContent";

const product = getProduct("cds-hoteleria")!;

export const metadata: Metadata = {
  title: `${product.name} — ${product.tagline}`,
  description: product.description,
};

export default function HoteleriaPage() {
  return <ProductHomeContent product={product} bgImage="/backgrounds/restaurantes.png" />;
}
