import { Linkedin, Github, Instagram } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row justify-between items-center min-h-screen overflow-hidden bg-black text-white px-6 md:px-20">
      {/* Aurora Background */}
      <div className="absolute inset-0">
        <div className="aurora absolute w-[130%] h-[130%] -top-16 -left-16 opacity-60 blur-3xl"></div>
      </div>

      {/* Konten Kiri */}
      <div className="relative z-10 flex flex-col justify-center md:w-1/2 text-left space-y-5 mt-10 md:mt-0">
        {/* Judul */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-center md:text-left">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            M Raihan Al Ayyubi
          </span>
        </h1>

        {/* Typing Text */}
        <p className="text-lg sm:text-xl md:text-2xl font-mono text-gray-300 text-center md:text-left max-w-full overflow-hidden">
          <span className="typing-fade-loop">
            D3 Software Engineering | Frontend Developer | UI/UX
          </span>
        </p>

        {/* Deskripsi */}
        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed text-center md:text-left max-w-md md:max-w-lg mx-auto md:mx-0">
          I’m a passionate software developer specializing in crafting beautiful
          and functional interfaces. I blend creativity and logic to build engaging,
          responsive, and efficient digital products using modern frontend technologies.
        </p>

        {/* 🌐 Sosial Media */}
        <div className="flex justify-center md:justify-start items-center gap-4 sm:gap-5 pt-2">
          <a
            href="https://www.linkedin.com/in/m-raihan-al-ayyubi-73a0a6275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-2.5 md:p-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/20"
          >
            <Linkedin className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </a>

          <a
            href="https://github.com/Hanzzsu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-2.5 md:p-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 hover:opacity-90 hover:scale-110 transition-all duration-300 shadow-lg shadow-gray-800/20"
          >
            <Github className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </a>

          <a
            href="https://instagram.com/hnzzsu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-2.5 md:p-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 hover:scale-110 transition-all duration-300 shadow-lg shadow-pink-500/20"
          >
            <Instagram className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </a>
        </div>

        {/* Tombol Aksi */}
        <div className="pt-4 flex justify-center md:justify-start flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold text-white text-sm sm:text-base hover:opacity-90 hover:scale-[1.03] transition-all duration-300 shadow-md shadow-purple-500/30"
          >
            View My Work
          </a>

          <a
            href="#about"
            className="border border-purple-400 px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold text-white text-sm sm:text-base hover:bg-purple-500/20 hover:scale-[1.03] transition-all duration-300"
          >
            About
          </a>
        </div>
      </div>

      {/* Foto Profil */}
      <div className="relative z-10 flex justify-center md:justify-end w-full md:w-1/2 mt-28 sm:mt-32 md:mt-0 mb-10 md:mb-0">
        <div className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-[24rem] md:h-[24rem] lg:w-[27rem] lg:h-[27rem] rounded-full p-[6px] bg-gradient-to-r from-purple-500 to-blue-500 shadow-2xl shadow-purple-500/20 md:translate-x-[-4rem] lg:translate-x-[-5rem]">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
