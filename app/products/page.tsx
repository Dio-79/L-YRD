import Header from "@/app/components/Header";
import { products } from "@/lib/data";
import Link from "next/link";

const filterGroups = [
  { title: "Categories", options: ["Cakes", "Coffee", "Bundles", "Limited"] },
  { title: "Price", options: ["Under $5", "$6-15", "$15+"] },
  { title: "Size", options: ["150ml", "100ml", "50ml", "4-Pack", "6+ Pack"] },
  { title: "Flavor Profile", options: ["Fruity", "Cookie", "Chocolatey", "Classic", "Creamy"] },
];

export default function ProductCatalogPage() {
  return (
    <>
      <Header />

      <main className="px-8 py-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-extrabold tracking-wide">OUR COLLECTION</h2>
          <div className="flex items-center gap-6 text-sm text-gray">
            <span>Showing {products.length} items</span>
            <span>SORT BY: Newest</span>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar */}
          <aside className="w-56 flex-shrink-0">
            {filterGroups.map((group) => (
              <FilterGroup key={group.title} title={group.title} options={group.options} />
            ))}
          </aside>

          {/* Product grid */}
          <div className="grid grid-cols-3 gap-6 flex-1 items-start">
            {products.map((product) => (
              <ProductCard key={product.productID} product={product} />
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

function ProductCard({
  product,
}: {
  product: { productID: number; name: string; price: number };
}) {
  return (
    <div className="border border-gold rounded overflow-hidden flex flex-col">
      {/* Image placeholder — swap with your saved image */}
      <div className="relative w-full h-56 bg-gray-100">
        {/* <img src="/images/your-image.jpg" alt={product.name} className="w-full h-full object-cover" /> */}
        <span className="absolute top-2 right-2 bg-black text-white text-[10px] px-2 py-1 tracking-wide">
          TAG
        </span>
      </div>

      <div className="p-4 flex flex-col">
        <h3 className="font-bold text-sm tracking-wide uppercase">{product.name}</h3>
        <p className="text-sm text-gray mt-1">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, voluptatibus.
        </p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-gold font-semibold text-sm">FROM ${product.price}</span>
          <Link
            href={`/products/${product.productID}`}
            className="bg-black text-white text-xs px-4 py-2"
          >
            Customize
          </Link>
        </div>
      </div>
    </div>
  );
}