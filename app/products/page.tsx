import Header from "@/app/components/Header";
import { products } from "@/lib/data";
import Link from "next/link";

export default function ProductCatalogPage() {
  return (
    <>
      <Header />

      <main className="px-8 py-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-extrabold tracking-wide">OUR COLLECTION</h2>
        </div>

        <div className="flex gap-12">
          {/* Sidebar */}
          <aside className="w-56 flex-shrink-0">
            <FilterGroup title="Categories" options={["Cakes", "Coffee", "Bundles", "Limited"]} />
            <FilterGroup title="Price" options={["Under $5", "$6-15", "$15+"]} />
            <FilterGroup title="Size" options={["150ml", "100ml", "50ml", "4-Pack", "6+ Pack"]} />
            <FilterGroup title="Flavor Profile" options={["Fruity", "Cookie", "Chocolatey", "Classic", "Creamy"]} />
          </aside>

          {/* Product grid */}
          <div className="grid grid-cols-3 gap-6 flex-1">
            {products.map((product) => (
              <div key={product.productID} className="border border-border rounded">
                <h3 className="px-4 pt-4 font-bold">{product.name}</h3>
                <p className="px-4 text-sm text-gray">{/* description if you add one */}</p>
                <div className="flex justify-between items-center px-4 py-3">
                  <span className="text-gold font-semibold">${product.price}</span>
                  <Link href={`/products/${product.productID}`} className="bg-black text-white text-xs px-4 py-2">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

function FilterGroup({ title, options }: { title: string; options: string[] }) {
  return (
    <div className="mb-8">
      <h4 className="font-bold text-lg mb-3">{title}</h4>
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-2 mb-2 text-sm">
          <input type="checkbox" />
          {opt}
        </label>
      ))}
    </div>
  );
}