import Skills from "@/components/skills";
import Hero from "../components/hero";
import Experience from "@/components/experience";
import Project from "@/components/projects";
import SocialLinks from "@/components/footer";
import { VideoPlayerDemo } from "@/components/video-intro";

export default function Home() {
  return (
    <main>
      <VideoPlayerDemo />
      <Hero />
      <Skills />
      <Experience />
      <Project />
      <SocialLinks />
    </main>
  );
}
