"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Header from "@/app/components/Header";
import { CgTrash } from "react-icons/cg";

export default function CartPage() {
  const { items, getTotal, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main className="px-8 py-20 max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold tracking-wide">YOUR CART</h1>
          <p className="text-gray mt-4">Your cart is empty.</p>
          <Link href="/products" className="underline text-sm mt-4 inline-block">
            Browse products
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="px-8 py-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold tracking-wide mb-2">YOUR CART</h1>
        <p className="text-gray text-sm mb-8">
          Review your selections before completing your order.
        </p>

        {/* Table header */}
        <div className="flex justify-between border-b border-border pb-2 text-xs font-semibold tracking-wide text-gray">
          <span>PRODUCT</span>
          <span>QUANTITY</span>
        </div>

        {/* Cart items */}
        {items.map((item) => (
          <div
            key={item.product.productID}
            className="flex items-center justify-between border-b border-border py-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-100 flex-shrink-0">
                {/* <img src="/images/your-image.jpg" alt={item.product.name} className="w-full h-full object-cover" /> */}
              </div>
              <div>
                <p className="font-semibold text-sm">{item.product.name}</p>
                <p className="text-gray text-xs">${item.product.price.toFixed(2)}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm">Qty: {item.quantity}</span>
              <button
                onClick={() => removeItem(item.product.productID)}
                aria-label="Remove item"
                className="text-lg text-gray hover:text-black"
              >
                <CgTrash />
              </button>
            </div>
          </div>
        ))}

        {/* Total */}
        <div className="flex justify-between items-center mt-8">
          <Link href="/products" className="text-sm underline text-gray">
            Continue shopping
          </Link>
          <h3 className="text-xl font-bold">Total: ${getTotal().toFixed(2)}</h3>
        </div>
      </main>
    </>
  );
}