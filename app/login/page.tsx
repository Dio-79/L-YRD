"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { login } from "@/lib/data";
import { CgMail, CgLock, CgEyeAlt, CgFacebook, CgInstagram } from "react-icons/cg";




export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = login(email, password);
    if (result !== null) {
      setMessage("Welcome!");
      router.push("/products");
    } else {
      setMessage("Invalid email or password");
    }
  }

  return (
    <main className="relative min-h-screen flex items-center justify-center p-8 bg-gray-300">
      {/* Background image placeholder */}
      {/* <img src="/images/login-bg.jpg" className="absolute inset-0 w-full h-full object-cover" /> */}

      <div className="relative z-10 flex gap-8 items-start">
        {/* Left column: login card + wholesale card */}
        <div className="flex flex-col gap-6">
          {/* Login card */}
          <div className="w-96 bg-white/40 backdrop-blur-md rounded-2xl p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold">Log in</h1>
              <Link href="#" className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                {/* logo mark placeholder */}
              </Link>
            </div>

            <div className="flex gap-3 mb-6">
              <CgFacebook className="text-xl" />
              <CgInstagram className="text-xl" />
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex items-center gap-2 bg-white/60 rounded-full px-4 py-3">
                <CgMail className="text-lg" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail address"
                  className="bg-transparent flex-1 outline-none text-sm"
                />
              </div>

              <div className="flex items-center gap-2 bg-white/60 rounded-full px-4 py-3">
                <CgLock className="text-lg" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="bg-transparent flex-1 outline-none text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label="Toggle password visibility"
                >
                  <CgEyeAlt className="text-lg" />
                </button>
              </div>

              <div className="flex justify-between items-end mt-2">
                <div className="text-sm">
                  <p>Freshly layered. Made to order.</p>
                  <p className="text-gray-600">Cake in a can | Espresso shots</p>
                </div>
                <button
                  type="submit"
                  className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0"
                  aria-label="Log in"
                >
                  →
                </button>
              </div>
            </form>

            {message && <p className="text-sm mt-4">{message}</p>}
          </div>

          {/* Wholesale card */}
          <div className="w-96 bg-white/40 backdrop-blur-md rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-2">WHOLESALE</h2>
            <p className="text-sm text-gray-700 mb-6">
              Our wholesale portal is designed for businesses that want premium
              layered desserts, delivered reliably and affordably.
            </p>
            <button className="w-full bg-gold text-black text-sm py-3 rounded-full">
              Apply for Wholesale
            </button>
          </div>
        </div>

        {/* Right panel */}
        <div className="w-80 h-[600px] bg-black/40 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-between text-white">
          <div>
            <h2 className="text-3xl font-bold tracking-[3px]">LÄYRD</h2>
            <p className="text-sm mt-1">layered desserts</p>
          </div>

          <div>
            <p className="text-sm">Made fresh, layered daily.</p>
            <p className="font-bold">Espresso shots &amp; event orders.</p>
            <p className="text-xs mt-1 text-gray-300">CAKE IN A CAN</p>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-bold tracking-wide">LÄYRD</span>
            <button className="bg-gold text-black text-sm px-4 py-2 rounded-full flex items-center gap-2">
              Browse the shop →
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}