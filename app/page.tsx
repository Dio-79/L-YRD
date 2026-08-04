import Header from "@/app/components/Header";
import Footer from "@/app/components/footer";
import Link from "next/link";
import { products } from "@/lib/data";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[500px] bg-gray-800 flex items-center justify-center text-center text-white">
        {/* Background image placeholder */}
        {/* <img src="/images/hero.jpg" className="absolute inset-0 w-full h-full object-cover" /> */}
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="text-4xl font-extrabold tracking-wide leading-tight">
            ESPRESSO SHOTS &amp;
            <br />
            CAKE-IN-A-CAN
            <br />
            MADE FRESH. KEPT SIMPLE.
          </h1>
          <p className="mt-4 text-sm">
            Discover a new standard of premium cakes crafted with fresh and simple
            ingredients. Delivered in our signature cans.
          </p>
          <button className="bg-white text-black text-xs tracking-wide px-6 py-3 mt-6">
            EXPLORE OUR CATALOGUE
          </button>
        </div>
      </section>

      {/* Featured collection */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold tracking-wide">
            OUR <span className="text-gold underline">FEATURED</span> COLLECTION
          </h2>
          <Link href="/products" className="text-sm underline">
            VIEW ALL PRODUCTS
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-6 items-start">
          {featured.map((product) => (
            <div key={product.productID} className="border border-gold rounded overflow-hidden flex flex-col">
              <div className="relative w-full h-56 bg-gray-100">
                {product.tag && (
                  <span className="absolute top-2 right-2 bg-black text-white text-[10px] px-2 py-1 tracking-wide">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-4 flex flex-col">
                <h3 className="font-bold text-sm tracking-wide uppercase">{product.name}</h3>
                <p className="text-sm text-gray mt-1">{product.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-gold font-semibold text-sm">FROM ${product.price}</span>
                  <Link
                    href={`/products/${product.productID}`}
                    className="bg-black text-white text-xs px-4 py-2"
                  >
                    DETAILS
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand values */}
      <section className="bg-black text-white px-8 py-16">
        <div className="max-w-6xl mx-auto flex gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-gold text-2xl font-extrabold tracking-wide mb-8">
              PREMIUM. SIMPLE. ELEVATED
            </h2>
            <ul className="space-y-6">
              <BrandValue
                title="PREMIUM CAKES-IN-A-CAN"
                description="A refined twist on classic deserts. Beautifully layered and sealed. Ready to enjoy anywhere. Each can delivers a premium, spoon-ready experience from the very first bite."
              />
              <BrandValue
                title="SIMPLE, FRESH INGREDIENTS"
                description="Real, recognizable, and fresh ingredients that bring richness and elegance into every bite. Each element carefully selected for purity and taste."
              />
              <BrandValue
                title="ESPRESSO, ELEVATED"
                description="Freshly ground beans, perfectly measured and tamped. Sealed to preserve purity, and extracted into a shot."
              />
            </ul>
            <button className="border border-white text-xs tracking-wide px-6 py-3 mt-8">
              OUR STORY
            </button>
          </div>
          <div className="flex-1 flex gap-4">
            <div className="w-2/3 h-72 bg-gray-700" />
            <div className="w-1/3 h-72 bg-gray-700" />
          </div>
        </div>
      </section>

      {/* Instagram grid */}
      <section className="px-8 py-16 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-wide">@l.a.y.r.d</h2>
        <p className="text-gold text-sm mt-2">Share your moments with #LAYRD</p>

        <div className="grid grid-cols-3 gap-3 mt-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-square bg-gray-100" />
          ))}
        </div>

        <Link href="#" className="text-sm underline mt-8 inline-block">
          Follow us on our Instagram for more announcements!
        </Link>
      </section>

      <Footer />
    </>
  );
}

function BrandValue({ title, description }: { title: string; description: string }) {
  return (
    <li>
      <h4 className="font-bold text-sm tracking-wide">{title}</h4>
      <p className="text-sm text-gray-300 mt-1 leading-relaxed">{description}</p>
    </li>
  );
}