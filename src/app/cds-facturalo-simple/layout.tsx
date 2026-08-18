import { getProduct } from "@/lib/data";
import ProductLayoutShell from "@/components/ProductLayoutShell";

const product = getProduct("cds-facturalo-simple")!;

export default function FacturaloLayout({ children }: { children: React.ReactNode }) {
  return <ProductLayoutShell product={product}>{children}</ProductLayoutShell>;
}
