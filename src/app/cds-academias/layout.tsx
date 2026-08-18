import { getProduct } from "@/lib/data";
import ProductLayoutShell from "@/components/ProductLayoutShell";

const product = getProduct("cds-academias")!;

export default function AcademiasLayout({ children }: { children: React.ReactNode }) {
  return <ProductLayoutShell product={product}>{children}</ProductLayoutShell>;
}
