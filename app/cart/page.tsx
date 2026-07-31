"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { items, getTotal } = useCart();

  if (items.length === 0) {
    return (
      <main>
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>
        <Link href="/products">Browse products</Link>
      </main>
    );
  }

  return (
    <main>
      <h1>Your Cart</h1>
      <div>
        {items.map((item) => (
          <div key={item.product.productID}>
            <h3>{item.product.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.product.price}</p>
          </div>
        ))}
      </div>
      <h3>Total: ${getTotal()}</h3>
      <Link href="/products">Back to catalog</Link>
    </main>
  );
}