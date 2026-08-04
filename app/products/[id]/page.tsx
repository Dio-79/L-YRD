"use client";

import { useParams } from "next/navigation";
import { products } from "@/lib/data";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Header from "@/app/components/Header";

export default function ProductDetailsPage() {
  const params = useParams();
  const id = Number(params.id);
  const { addItem } = useCart();

  const product = products.find((p) => p.productID === id);

  if (!product) {
    return (
      <>
        <Header />
        <main className="px-8 py-10">
          <p>Product not found.</p>
          <Link href="/products" className="underline">Back to catalog</Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="px-8 py-10 max-w-5xl mx-auto">
        <Link href="/products" className="text-sm text-gray underline">
          Back to catalog
        </Link>

        <div className="flex gap-12 mt-6">
          {/* Image */}
          <div className="w-1/2">
            <div className="w-full aspect-square bg-gray-100">
              {/* <img src="/images/your-image.jpg" alt={product.name} className="w-full h-full object-cover" /> */}
            </div>
          </div>

          {/* Details */}
          <div className="w-1/2">
            <h1 className="text-3xl font-extrabold tracking-wide uppercase">
              {product.name}
            </h1>
            <p className="text-gold font-semibold text-xl mt-2">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray mt-4 leading-relaxed">
              {product.description}
            </p>

            <button
              onClick={() => addItem(product)}
              className="bg-black text-white px-8 py-3 mt-8 tracking-wide text-sm"
            >
              ADD TO BAG
            </button>

            <div className="mt-4">
              <Link href="/cart" className="text-sm underline text-gray">
                View cart
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}