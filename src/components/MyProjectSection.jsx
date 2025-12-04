export default function MyProjectSection() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 md:px-20 py-24"
    >
      {/* MAIN TITLE */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-20 tracking-wide">
        My Project
      </h1>

      {/* SECTION COMPONENT */}
      <ProjectGroup title="Personal Project" count={3} />
      <ProjectGroup title="Univ Project" count={3} />
      <ProjectGroup title="Professional Project" count={1} />
    </section>
  );
}

/* REUSABLE COMPONENT */
function ProjectGroup({ title, count }) {
  return (
    <div className="mb-20">
      {/* SECTION TITLE */}
      <h2 className="text-2xl font-semibold mb-6 tracking-wide text-purple-300">
        {title}
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[...Array(count)].map((_, idx) => (
          <div
            key={idx}
            className="
              w-full h-48
              bg-white rounded-xl
              shadow-lg shadow-purple-500/10
              transition-all duration-300
              hover:scale-[1.04] hover:shadow-purple-500/20 cursor-pointer
              overflow-hidden
            "
          >
            <div className="w-full h-full bg-gray-200"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
