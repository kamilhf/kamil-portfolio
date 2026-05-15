"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import Image from "next/image";

const skillGroups = [
  {
    category: "GIS & Mapping",
    color: "bg-sky-50 border-sky-200",
    accent: "text-sky-600",
    skills: [
      {
        name: "ArcGIS Pro",
        icon: "https://cdn.simpleicons.org/arcgis/007AC2",
        fallback: "🗺️",
      },
      {
        name: "QGIS",
        icon: "https://cdn.simpleicons.org/qgis/589632",
        fallback: "🌍",
      },
      {
        name: "Global Mapper",
        icon: "/icons/gm.png",
        fallback: "🗺️",
      },
    ],
  },
  {
    category: "Remote Sensing & Photogrammetry",
    color: "bg-sky-50 border-sky-200",
    accent: "text-sky-600",
    skills: [
      {
        name: "Agisoft Metashape",
        icon: "/icons/agisoft.png",
        fallback: "📷",
      },
      {
        name: "ENVI",
        icon: "/icons/envi.png",
        fallback: "🛰️",
      },
      {
        name: "Spatix",
        icon: "/icons/spatix.jpg",
        fallback: "🔭",
      },
    ],
  },
  {
    category: "Programming & Data",
    color: "bg-sky-50 border-sky-200",
    accent: "text-sky-600",
    skills: [
      {
        name: "Python",
        icon: "https://cdn.simpleicons.org/python/3776AB",
        fallback: "🐍",
      },
      {
        name: "MATLAB",
        icon: "/icons/matlab.png",
        fallback: "📊",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.simpleicons.org/postgresql/4169E1",
        fallback: "🐘",
      },
    ],
  },
  {
    category: "Geodesy & Surveying",
    color: "bg-sky-50 border-sky-200",
    accent: "text-sky-600",
    skills: [
      {
        name: "Bernese GNSS",
        icon: "/icons/bernese.png",
        fallback: "📡",
      },
      {
        name: "Trimble Business Center",
        icon: "/icons/tbc.png",
        fallback: "📐",
      },
    ],
  },
  {
    category: "Hydrography & Oceanography",
    color: "bg-sky-50 border-sky-200",
    accent: "text-sky-600",
    skills: [
      {
        name: "Delft3D",
        icon: "/icons/delft.png",
        fallback: "🌊",
      },
      {
        name: "MB System",
        icon: "/icons/mbsystem.jpg",
        fallback: "🔊",
      },
    ],
  },
  {
    category: "Design & Productivity",
    color: "bg-sky-50 border-sky-200",
    accent: "text-sky-600",
    skills: [
      {
        name: "AutoCAD",
        icon: "https://cdn.simpleicons.org/autocad/E51050",
        fallback: "✏️",
      },
      {
        name: "Microsoft Office",
        icon: "/icons/office.png",
        fallback: "📋",
      },
    ],
  },
];

const certifications = [
  {
    title: "Certified Drone Pilot",
    org: "Terra Drone Indonesia",
    date: "Mar 2026 – Mar 2028",
    icon: "/icons/pilot.png",
  },
  {
    title: "Processing & Accuracy Assessment of SBES Data",
    org: "Aksara Lab Indonesia",
    date: "Feb 2025",
    icon: "/icons/aksara.png",
  },
  {
    title: "Hydrological Modeling Using SWAT+",
    org: "Geoaccess Indonesia",
    date: "Feb 2025",
    icon: "/icons/geoaccess.png",
  },
];

function SkillIcon({ skill }: { skill: (typeof skillGroups)[0]["skills"][0] }) {
  return (
    <div className="relative h-8 w-8 flex-shrink-0">
      <Image
        src={skill.icon}
        alt={skill.name}
        fill
        sizes="48px"
        className="object-contain"
        unoptimized
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 bg-white/25 py-10">
      <div className="mx-auto max-w-5xl px-6">
        <AnimateOnScroll>
          <h2 className="section-title mb-8">Skills & Tools</h2>
        </AnimateOnScroll>

        {/* Skill groups */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <AnimateOnScroll key={group.category} delay={gi * 80}>
              <div
                className={`group relative overflow-hidden rounded-2xl border p-5 ${group.color} h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-200/40`}
              >
                {/* Animated Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-sky-300/20 blur-3xl" />
                  <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-cyan-300/20 blur-3xl" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10">
                  <p
                    className={`mb-4 text-xs font-semibold uppercase tracking-wider ${group.accent}`}
                  >
                    {group.category}
                  </p>

                  <div className="flex flex-col gap-3">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/item flex items-center gap-3 rounded-xl bg-white/70 px-3 py-2.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                      >
                        <div className="transition-transform duration-300 group-hover/item:rotate-3 group-hover/item:scale-110">
                          <SkillIcon skill={skill} />
                        </div>

                        <span className="text-sm font-medium text-sky-900">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Certifications */}
        <AnimateOnScroll delay={200}>
          <div className="glass-card mt-10 p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-sky-500">
              Licences & Certifications
            </p>

            <div className="flex flex-col gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="group flex items-start gap-4 rounded-xl border border-sky-100 bg-sky-50/70 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-100/70 hover:shadow-md"
                >
                  {/* Certification icon */}
                  <div className="relative h-12 w-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={cert.icon}
                      alt={cert.title}
                      fill
                      className="rounded-lg object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-sm font-semibold text-sky-800">{cert.title}</p>

                    <p className="text-xs text-sky-500">
                      {cert.org} &nbsp;·&nbsp; {cert.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Languages */}
<AnimateOnScroll delay={260}>
  <div className="glass-card mt-6 p-6">

    <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-sky-500">
      Languages
    </p>

    <div className="grid gap-3 md:grid-cols-2">

      {/* Bahasa Indonesia */}
      <div className="group rounded-2xl border border-sky-100 bg-sky-50/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-100/70 hover:shadow-md">

        <div className="mb-2 flex items-center gap-2">
          <span className="text-lg">🇮🇩</span>

          <h3 className="font-semibold text-sky-800">
            Bahasa Indonesia
          </h3>
        </div>

        <p className="text-sm text-sky-600">
          Native Proficiency
        </p>

      </div>

      {/* English */}
      <div className="group rounded-2xl border border-sky-100 bg-sky-50/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-100/70 hover:shadow-md">

        <div className="mb-2 flex items-center gap-2">
          <span className="text-lg">🇬🇧</span>

          <h3 className="font-semibold text-sky-800">
            English
          </h3>
        </div>

        <p className="text-sm text-sky-600">
          EF SET 84/100 — C2 Proficient
        </p>

      </div>

    </div>

  </div>
</AnimateOnScroll>
      </div>
    </section>
  );
}
