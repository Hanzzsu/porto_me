"use client";

import { useEffect, useState } from "react";
import { sertifData } from "@/src/data/sertif";

export default function AllSertifPage() {
  // State untuk tombol scroll-to-top
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const allPdf = Object.entries(sertifData).flatMap(
    ([category, files]) =>
      files.map((file, index) => ({
        id: `${category}-${index}`,
        pdf: `/sertif/${category}/${file}`,
        category,
        file,
      }))
  );

  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 py-20">

      {/* Header: Back + Title sejajar */}
      <div className="flex justify-between items-center pt-20 mb-16">
        <a
          href="/#sertification"
          className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 transition rounded-lg text-white"
        >
          ← Back
        </a>

        <h1 className="text-3xl md:text-4xl font-bold text-center">
          All Certification
        </h1>
      </div>

      {/* GRID LIST PDF */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {allPdf.map((item) => (
          <div key={item.id} className="flex flex-col items-center">

            <p className="text-sm mb-2 text-purple-300">
              {item.category.toUpperCase()}
            </p>

            <div className="w-full h-60 bg-white rounded-xl shadow-xl overflow-hidden">
              <iframe
                src={item.pdf}
                className="w-full h-full"
                title={item.id}
              />
            </div>

            <p className="text-xs mt-2 text-gray-300 text-center">
              {item.file}
            </p>

          </div>
        ))}
      </div>

      {/* BUTTON SCROLL TO TOP */}
      {showButton && (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="
      fixed bottom-8 right-8 z-50
      bg-purple-600/80 backdrop-blur-md
      hover:bg-purple-700/90
      text-white w-14 h-14
      rounded-full shadow-[0_0_15px_rgba(168,85,247,0.6)]
      hover:shadow-[0_0_25px_rgba(168,85,247,0.9)]
      flex items-center justify-center
      text-3xl font-bold
      transition-all duration-300
      animate-bounce-slow
    "
  >
    ^
  </button>
)}


    </section>
  );
}
