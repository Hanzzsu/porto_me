export default function MyProjectSection() {
  const personalProjects = [
    {
      title: "UI/UX Tukang GO APP",
      image: "/projects/Tukang Go.png",
      url: "https://example.com/portfolio",
    },
    {
      title: "UI/UX NeoSatsu APP",
      image: "/projects/Neo Satsu.png",
      url: "https://www.figma.com/design/56xawVoo4TjlPZgoDjnUlA/Neo-Satsu?node-id=133-284&m=dev&t=FowWAKYxqPb3KORS-1",
    },
    {
      title: "UI/UX Mobile Music APP",
      image: "/projects/Mobile Music.png",
      url: "https://www.figma.com/file/rBIpBtRM2GZlpfeZdfJ5FH/UI",
    },
  ];

  const academicProjects = [
    {
      title: "MedisGO APP",
      image: "/projects/MedisGoAPP.png",
      url: "https://github.com/Hanzzsu/MedisGo-App-Kotline",
    },
    {
      title: "Web Admin MedisGO",
      image: "/projects/Admin MedisGO.png",
      url: "https://github.com/Hanzzsu/medisgo-web",
    },
    {
      title: "Traffic Law Enforcer Game",
      image: "/projects/Game.png",
      url: "https://gamenesia.itch.io/traffic-law-enforcer",
    },
  ];

 const professionalProjects = [
  {
    title: "Intership PT LEN Industri (PERSERO) - Mobile Developer",
    image: "/projects/LEN.png",
    url: "https://drive.google.com/file/d/1p49grDhy3R3rjmQKeAcm0mCuHZwfJnPv/view?usp=sharing",
  },
  {
    title: "Free Lance Project - UI/UX SMA NU Kaplongan",
    image: "/projects/SMA.jpeg",
    url: "https://drive.google.com/file/d/1n94weFSDdeKxZZ2Jr8KBWTqu0jMycGYI/view?usp=sharing",
  },
];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 md:px-20 py-24"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-20 tracking-wide">
        All My Projects
      </h1>

      <ProjectGroup title="Personal Project" list={personalProjects} />
      <ProjectGroup title="Academic Project" list={academicProjects} />
      <ProjectGroup title="Professional Project" list={professionalProjects} />
    </section>
  );
}

/* REUSABLE COMPONENT */
function ProjectGroup({ title, list }) {
  return (
    <div className="mb-20">
      <h2 className="text-2xl font-semibold mb-6 tracking-wide text-purple-300">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {list.map((project, idx) => (
          <a
            key={idx}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div
              className="
                w-full h-48 relative
                rounded-xl overflow-hidden
                shadow-lg shadow-purple-500/10
                hover:shadow-purple-500/20 
                transition-all duration-300 cursor-pointer
              "
            >
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full h-full object-cover 
                  transition-transform duration-300 
                  group-hover:scale-110
                "
              />

              {/* OVERLAY VIEW DETAIL */}
              <div
                className="
                  absolute inset-0 bg-black/50 opacity-0
                  group-hover:opacity-100
                  flex items-center justify-center
                  text-white text-xl font-semibold
                  transition-all duration-300
                "
              >
                View Detail
              </div>
            </div>

            {/* PROJECT TITLE */}
            <p className="mt-3 text-lg font-semibold text-center">
              {project.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
