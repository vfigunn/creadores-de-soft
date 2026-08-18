import { notFound } from "next/navigation";
import { getProduct, type Product } from "@/lib/data";
import ProductHeader from "@/components/ProductHeader";
import Footer from "@/components/Footer";

// Shared product layout — used by all 3 product microsites
export default function ProductLayoutShell({
  product,
  children,
}: {
  product: Product;
  children: React.ReactNode;
}) {
  return (
    <div data-theme={product.theme}>
      <ProductHeader product={product} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
