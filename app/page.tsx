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

        {/* Shared background wrapper */}
        <div
          id="personal"
          className="relative overflow-hidden"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/personal-bg.jpg')",
            }}
          />

          {/* Orange overlay */}
          <div className="absolute inset-0 bg-orange-500/15" />

          {/* Content */}
          <div className="relative z-10">
            <PersonalLife />
            <Footer />
          </div>
        </div>

      </main>
    </>
  );
}