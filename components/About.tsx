import AnimateOnScroll from "./AnimateOnScroll";
import Image from "next/image";

const contacts = [
  {
    name: "Gmail",
    href: "mailto:kamilhayyunaji@gmail.com",
    label: "kamilhayyunaji@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.907 1.528-1.147C21.69 2.28 24 3.434 24 5.457z" />
      </svg>
    ),
    color: "#EA4335",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/6281267550652",
    label: "+62-812-6755-0652",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
    color: "#25D366",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/kamilhf",
    label: "linkedin.com/in/kamilhf",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "#0A66C2",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-10 bg-white/25 py-10">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="section-title mb-12">About Me</h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Photo + contacts */}
          <AnimateOnScroll delay={100}>
            <div className="flex flex-col items-center gap-6">
              <div className="relative w-56 h-56 rounded-2xl overflow-hidden shadow-xl shadow-sky-200/60 ring-4 ring-sky-200">
                <Image src="/images/profile.jpg" alt="Kamil Hayyunaji Fabriano" fill className="object-cover" />
              </div>

              {/* Contact links */}
              <div className="w-full flex flex-col gap-3">
                {contacts.map((c) => (
                  <a
                    key={c.name}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-sky-50 hover:bg-sky-100
                               border border-sky-100 hover:border-sky-300 transition-all duration-200
                               group hover:-translate-y-0.5"
                  >
                    <span
                      className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-white shadow-sm"
                      style={{ backgroundColor: c.color }}
                    >
                      {c.icon}
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-sky-500 uppercase tracking-wide">{c.name}</p>
                      <p className="text-sm text-sky-800 group-hover:text-sky-600 transition-colors">{c.label}</p>
                    </div>
                    <svg className="w-4 h-4 text-sky-300 group-hover:text-sky-500 ml-auto transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Download CV */}
              <a
                href="/cv/CV_Kamil.pdf"
                download
                className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl
                           bg-sky-500 text-white font-medium text-sm hover:bg-sky-600
                           transition-all duration-200 shadow-md shadow-sky-200 hover:shadow-sky-300
                           hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download my CV!
              </a>
            </div>
          </AnimateOnScroll>

          {/* Right: Bio text + education */}
          <AnimateOnScroll delay={200}>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sky-800/80 leading-relaxed text-base mb-4">
                  I am a fourth-year Geodesy and Geomatics Engineering student at{" "}
                  <strong className="text-sky-700">Institut Teknologi Bandung</strong>, with a GPA of 3.36/4.00 and a
                  place on the Dean&apos;s List for Semesters 3 and 6. My academic journey has shaped me into a
                  practitioner who bridges rigorous geodetic theory with real-world spatial problems.
                </p>
                <p className="text-sky-800/80 leading-relaxed text-base mb-4">
                  My technical interests lie at the intersection of{" "}
                  <strong className="text-sky-700">hydrographic surveying</strong>,{" "}
                  <strong className="text-sky-700">GIS & remote sensing</strong>, and{" "}
                  <strong className="text-sky-700">geodetic datum transformation</strong>. I have carried these
                  interests through internships at BIG (Badan Informasi Geospasial) and Pertamina Hulu Rokan, where I
                  worked on bathymetric modelling, LiDAR processing, and web-based datum transformation systems.
                </p>
                <p className="text-sky-800/80 leading-relaxed text-base">
                  Beyond the technical, I value collaboration and mentorship — serving as an Academic Tutor for
                  Hydrography and a Practicum Assistant for AI & Data Literacy at ITB, helping peers navigate
                  complex spatial and computational concepts.
                </p>
              </div>

              {/* Education card */}
              <div className="glass-card p-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sky-800">Institut Teknologi Bandung</h3>
                    <p className="text-sm text-sky-600">B.Sc. Geodesy & Geomatics Engineering</p>
                    <p className="text-xs text-sky-500 mt-1">2022 – Present &nbsp;·&nbsp; GPA 3.36/4.00</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {["Hydrography", "GIS", "Photogrammetry", "GNSS", "Remote Sensing", "Metocean"].map((tag) => (
                        <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-sky-100 text-sky-600 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
