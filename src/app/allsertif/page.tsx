import { sertifData } from "@/src/data/sertif";

export default function AllSertifPage() {
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
    </section>
  );
}
