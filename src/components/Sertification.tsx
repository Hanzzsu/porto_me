export default function Sertification() {
  const items = [
    { id: 1, pdf: "/sertif/Figma for UIUX Design/COLLABORATION IN FIGMA.pdf" },
    { id: 2, pdf: "/sertif/Figma for UIUX Design/DESIGN DOCUMENTATION.pdf" },
    { id: 3, pdf: "/sertif/Figma for UIUX Design/DESIGNING CHECKOUT PROCESS.pdf" },
    { id: 4, pdf: "/sertif/Figma for UIUX Design/DESIGNING DASHBOARD UI.pdf" },
    { id: 5, pdf: "/sertif/Figma for UIUX Design/DESIGNING LANDING PAGE UI.pdf" },
    { id: 6, pdf: "/sertif/Figma for UIUX Design/DESIGNING ONBOARDING PROCESS.pdf" },
  ];

  return (
    <section
      id="sertification"
      className="min-h-screen bg-black text-white px-6 md:px-20 py-20"
    >
      {/* HEADER TITLE */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">MY SERTIVICATION</h2>

        <a
          href="/sertification"
          className="text-sm md:text-base text-white hover:text-purple-400 transition"
        >
          See All Sertivication
        </a>
      </div>

      {/* GRID ITEMS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            
            {/* PDF BOX */}
            <div className="w-full h-48 bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                src={item.pdf}
                className="w-full h-full"
                title={`pdf-${item.id}`}
              />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
