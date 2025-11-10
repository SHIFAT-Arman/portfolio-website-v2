import Skills from "@/components/skills";
import Hero from "../components/hero";
import Experience from "@/components/experience";
import Project from "@/components/projects";
import SocialLinks from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Experience />
      <Project />
      <SocialLinks />
    </main>
  );
}
