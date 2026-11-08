import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
// import Philosophy from "@/components/Philosophy";
import Education from "@/components/Education";
import ProjectList from "@/components/ProjectList";
import SkillsGrid from "@/components/SkillsGrid";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getProjects, getSkills } from "@/lib/api";

export default async function Home() {
  const [projects, skills] = await Promise.all([getProjects(), getSkills()]);

  return (
    <main>
      <Nav />
      <Hero />
      <About />
      {/* <Philosophy /> */}
      {/* <Education /> */}
      <SkillsGrid groups={skills} />
      <ProjectList projects={projects} />
      {/* <SkillsGrid groups={skills} /> */}
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
