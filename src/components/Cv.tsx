"use client";

export default function CvPage() {
  return (
    <section
      id="cv"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-20"
    >
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
        My Curriculum Vitae
      </h1>

      {/* Description */}
      <p className="text-gray-400 text-center max-w-xl mb-10 text-lg">
        You can download my full CV in PDF format by clicking the button below.
      </p>

      {/* Download Button */}
      <a
        href="/cv.pdf"
        download
        className="
          bg-gradient-to-r from-purple-500 to-blue-500
          px-10 py-4 rounded-xl font-semibold text-lg
          hover:scale-105 hover:opacity-90
          transition-all duration-300 shadow-lg shadow-blue-500/20
        "
      >
        Download PDF
      </a>
    </section>
  );
}
