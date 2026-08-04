import Link from "next/link";
import { CgFacebook, CgInstagram } from "react-icons/cg";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-12 mt-16">
      <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div>
          <h2 className="text-2xl tracking-[4px] font-bold mb-3">LÄYRD</h2>
          <p className="text-sm text-gray-300">
            Espresso Shots &amp; Cake-in-a-Can.
            <br />
            Made fresh. Kept simple.
          </p>
        </div>

        <FooterColumn
          title="Support"
          links={["Shipping", "Request Refund", "Contact Us", "Wholesale"]}
        />
        <FooterColumn
          title="Information"
          links={["FAQ", "About LÄYRD", "Privacy Policy", "Terms of Service", "Community"]}
        />

        <div>
          <h4 className="text-gold font-bold text-sm mb-3 tracking-wide">OUR NEWSLETTER</h4>
          <p className="text-xs text-gray-300 mb-3">
            Join our newsletter to receive exclusive announcements, and offers!
          </p>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-transparent border border-gray-600 text-sm px-3 py-2 mb-2"
          />
          <button className="text-xs tracking-wide underline">SUBSCRIBE</button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex justify-between items-center mt-12 pt-6 border-t border-gray-700 text-xs text-gray-400">
        <span>©2026 LÄYRD. ALL RIGHTS RESERVED.</span>
        <div className="flex gap-4 text-lg">
          <CgFacebook />
          <CgInstagram />
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-gold font-bold text-sm mb-3 tracking-wide">{title.toUpperCase()}</h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <Link href="#" className="text-sm text-gray-300 underline">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}