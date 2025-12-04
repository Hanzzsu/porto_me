import { sertifData } from "@/src/data/sertif";

export default function Sertification() {
  const allPdf = Object.entries(sertifData).flatMap(
    ([category, files]) =>
      files.map((file, index) => ({
        id: `${category}-${index}`,
        pdf: `/sertif/${category}/${file}`,
      }))
  );

  const preview = allPdf.slice(0, 3); // tampilkan 3 sertif saja

  return (
    <section id="sertification" className="min-h-screen bg-black text-white px-6 md:px-20 py-20">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">MY CERTIFICATION</h2>

        <a href="/allsertif" className="text-sm md:text-base text-white hover:text-purple-400 transition">
          See All Certification
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {preview.map((item) => (
          <div key={item.id}>
            <div className="w-full h-48 bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe src={item.pdf} className="w-full h-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
