import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import OrganizationalExperience from "@/components/OrganizationalExperience";
import PersonalLife from "@/components/PersonalLife";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <WorkExperience />
        <OrganizationalExperience />
        <PersonalLife />
      </main>
      <Footer />
    </>
  );
}
