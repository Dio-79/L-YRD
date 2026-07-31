"use client";

import { useParams } from "next/navigation";
import { products } from "@/lib/data";
import Link from "next/link";

export default function ProductDetailsPage() {
  const params = useParams();
  const id = Number(params.id);

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
      <Link href="/products">Back to catalog</Link>
    </main>
  );
}