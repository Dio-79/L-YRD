import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky top-0 z-50">
      {/* Announcement bar */}
      <div className="bg-black text-gold text-center text-xs tracking-wide py-2">
        NEW LIMITED EDITION FLAVORS OUT THIS WEEKEND!{" "}
        <Link href="#" className="underline">LEARN MORE</Link>
      </div>

      {/* Main header */}
      <header className="bg-white border-b border-border px-8 py-4">
        <div className="flex items-center justify-between">
          <button className="text-xl">☰</button>
          <h1 className="text-2xl tracking-[6px] font-bold">LÄYRD</h1>
          <div className="flex gap-4 text-lg">
            <span>🔍</span>
            <span>👤</span>
            <span>🛍</span>
          </div>
        </div>

        <nav className="flex justify-center gap-8 mt-3 text-sm font-semibold">
          <Link href="/drinks">DRINKS</Link>
          <Link href="/cake-in-a-can">CAKE-IN-A-CAN</Link>
          <Link href="/bundles">BUNDLES</Link>
          <Link href="/event-ordering">EVENT ORDERING</Link>
          <Link href="/more">MORE</Link>
        </nav>
      </header>
    </div>
  );
}