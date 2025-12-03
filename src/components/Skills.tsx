export default function Skills() {
  const skills = [
    {
      title: "UI / UX Design",
      desc: "Crafting intuitive and user-centered experiences through in-depth research, wireframing, prototyping, and designing modern, clean, and responsive interfaces.",
      color: "from-blue-500 to-cyan-300",
    },
    {
      title: "Frontend Development",
      desc: "Building fast, responsive, and interactive websites using modern technologies, ensuring smooth performance and consistent visuals across all devices.",
      color: "from-pink-500 to-red-300",
    },
    {
      title: "Mobile Developer",
      desc: "Developing high-quality mobile applications with optimal performance, responsive layouts, and user-friendly features for Android platforms.",
      color: "from-cyan-500 to-teal-300",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-6 md:px-20 scroll-mt-28 py-20"
    >
      <h2 className="text-4xl font-bold mb-6 text-center">My Skills</h2>
      <p className="text-center text-gray-400 mb-12">
        Front End Development & Design Skills
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((item, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* ICON SECTION */}
            <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xl mb-6`}
            >
              {/* Figma */}
              {index === 0 && (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M12 8a4 4 0 100-8 4 4 0 000 8zM12 10a4 4 0 100 8 4 4 0 000-8zM12 20a4 4 0 100 8 4 4 0 000-8zM4 8a4 4 0 108 0 4 4 0 00-8 0zM20 8a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              )}

              {/* VS Code */}
              {index === 1 && (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M23 3l-6.5-2.5L8 9 2 6 0 7l6 5-6 5 2 1 6-3 8.5 8.5L23 21V3z" />
                </svg>
              )}

              {/* Android Studio */}
              {index === 2 && (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M12 1a9 9 0 00-9 9v7a3 3 0 003 3h2v-2H6a1 1 0 01-1-1v-7a7 7 0 1114 0v7a1 1 0 01-1 1h-2v2h2a3 3 0 003-3v-7a9 9 0 00-9-9zm-1 14h2v6h-2v-6z"/>
                </svg>
              )}
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
