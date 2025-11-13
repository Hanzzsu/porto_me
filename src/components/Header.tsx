"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("Home");

  const menuItems = ["Home", "Skills", "Cv", "Sertification", "About Me"];

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-wide">
          Portovolio
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-sm font-medium">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActive(item)}
              className={`relative pb-1 transition-all duration-300 ${
                active === item ? "after:w-full" : "after:w-0"
              } after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full`}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setActive(active === "menu" ? "" : "menu")}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {active === "menu" && (
        <div className="md:hidden bg-black border-t border-gray-700 px-6 py-3 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="block py-1"
              onClick={() => setActive(item)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
