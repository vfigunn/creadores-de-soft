import type { Metadata } from "next";
import { getProduct } from "@/lib/data";
import ProductHomeContent from "@/components/ProductHomeContent";

const product = getProduct("cds-facturalo-simple")!;

export const metadata: Metadata = {
  title: `${product.name} — ${product.tagline}`,
  description: product.description,
};

export default function FacturaloPage() {
  return <ProductHomeContent product={product} bgImage="/backgrounds/factura.png" />;
}
