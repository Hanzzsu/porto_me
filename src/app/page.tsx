import Hero from "@/src/components/Hero";
import Skills from "../components/Skills";
import CV from "../components/Cv";
import Sertification from "../components/Sertification";
import MyProjectSection from "../components/MyProjectSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <CV />
      <Sertification />
      <MyProjectSection />
    </>
  );
}
