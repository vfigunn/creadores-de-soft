import { getProduct } from "@/lib/data";
import ProductLayoutShell from "@/components/ProductLayoutShell";

const product = getProduct("cds-hoteleria")!;

export default function HoteleriaLayout({ children }: { children: React.ReactNode }) {
  return <ProductLayoutShell product={product}>{children}</ProductLayoutShell>;
}
