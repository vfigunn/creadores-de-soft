import { getProduct } from "@/lib/data";
import ProductLayoutShell from "@/components/ProductLayoutShell";

const product = getProduct("cds-cooperativas")!;

export default function CooperativasLayout({ children }: { children: React.ReactNode }) {
  return <ProductLayoutShell product={product}>{children}</ProductLayoutShell>;
}
