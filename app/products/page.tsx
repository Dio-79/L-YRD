import { products } from "@/lib/data";
import Link from "next/link";

export default function ProductCatalogPage() {
  return (
    <main>
      <h1>Product Catalog</h1>
      <div>
        {products.map((product) => (
          <div key={product.productID}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Link href={`/products/${product.productID}`}>View Details</Link>
          </div>
        ))}
      </div>
    </main>
  );
}