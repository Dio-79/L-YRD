"use client";

import { useParams } from "next/navigation";
import { products } from "@/lib/data";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ProductDetailsPage() {
  const params = useParams();
  const id = Number(params.id);
  const { addItem } = useCart();

  const product = products.find((p) => p.productID === id);

  if (!product) {
    return (
      <main>
        <p>Product not found.</p>
        <Link href="/products">Back to catalog</Link>
      </main>
    );
  }

  return (
    <main>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={() => addItem(product)}>Add to Cart</button>
      <Link href="/products">Back to catalog</Link>
      <Link href="/cart">view cart</Link>
    </main>
  );
}