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

function SkillIcon({
  skill,
}: {
  skill: (typeof skillGroups)[0]["skills"][0];
}) {
  return (
    <div className="relative w-8 h-8 flex-shrink-0">
      <Image
        src={skill.icon}
        alt={skill.name}
        fill
        className="object-contain"
        unoptimized
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white/25 py-10"
    >
      <div className="max-w-5xl mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="section-title mb-12">
            Skills & Tools
          </h2>
        </AnimateOnScroll>

        {/* Skill groups */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <AnimateOnScroll key={group.category} delay={gi * 80}>
              <div
                className={`rounded-2xl border p-5 ${group.color} h-full`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-wider mb-4 ${group.accent}`}
                >
                  {group.category}
                </p>

                <div className="flex flex-col gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 bg-white/70 rounded-xl px-3 py-2.5
                                 hover:bg-white transition-colors duration-150 shadow-sm"
                    >
                      <SkillIcon skill={skill} />

                      <span className="text-sm font-medium text-sky-900">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Certifications */}
        <AnimateOnScroll delay={200}>
          <div className="mt-10 glass-card p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-500 mb-4">
              Licences & Certifications
            </p>

            <div className="flex flex-col gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-start gap-4 p-3 rounded-xl
                             bg-sky-50/80 hover:bg-sky-100/80
                             transition-colors"
                >
                  {/* Certification icon */}
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={cert.icon}
                      alt={cert.title}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-sm font-semibold text-sky-800">
                      {cert.title}
                    </p>

                    <p className="text-xs text-sky-500">
                      {cert.org} &nbsp;·&nbsp; {cert.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}