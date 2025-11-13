"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["Home", "Skills", "Cv", "Sertification", "About Me"];

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50 
        backdrop-blur-2xl bg-black/30 border-b border-white/10
        transition-all duration-500
      "
    >
      <div
        className="
          max-w-7xl mx-auto flex justify-between items-center 
          px-6 md:px-10 py-5 md:py-7
        "
      >
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white select-none">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Portofolio
          </span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12 text-base font-medium text-white">
          {menuItems.map((item) =>
            item === "About Me" ? (
              <Link
                key={item}
                href="#about-me"
                onClick={() => setActive(item)}
                className="
                  bg-gradient-to-r from-purple-500 to-blue-500 
                  px-6 py-2.5 rounded-lg font-semibold text-white
                  hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-md shadow-purple-500/30
                "
              >
                {item}
              </Link>
            ) : (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActive(item)}
                className={`relative pb-1 transition-all duration-300 ${
                  active === item
                    ? "after:w-full text-white"
                    : "after:w-0 text-white/70 hover:text-white"
                } after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-gradient-to-r after:from-purple-400 after:to-blue-400 after:transition-all hover:after:w-full`}
              >
                {item}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-black/70 backdrop-blur-md border-t border-white/10`}
      >
        <div className="px-6 py-4 space-y-3">
          {menuItems.map((item) =>
            item === "About Me" ? (
              <Link
                key={item}
                href="#about-me"
                className="
                  block py-2.5 text-center text-lg
                  bg-gradient-to-r from-purple-500 to-blue-500
                  rounded-lg font-semibold hover:opacity-90 hover:scale-[1.02] transition-all
                "
                onClick={() => {
                  setActive(item);
                  setMenuOpen(false);
                }}
              >
                {item}
              </Link>
            ) : (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block py-2 text-center text-lg text-white/80 hover:text-white transition"
                onClick={() => {
                  setActive(item);
                  setMenuOpen(false);
                }}
              >
                {item}
              </Link>
            )
          )}
        </div>
      </div>
    </header>
  );
}
