"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import Image from "next/image";
import { useState, useEffect } from "react";

const orgs = [
  {
    id: "img-itb",
    org: "IMG-ITB — Hydrography Expertise Group",
    role: "Academic Tutor",
    period: "June 2025 – December 2025",
    tags: ["Mentoring", "Hydrography", "Teaching"],
    description:
      "I mentored junior students through weekly discussion sessions covering hydrography course materials, problem-solving exercises, and practical surveying concepts. This role involved guiding students in understanding technical topics, encouraging collaborative learning, and supporting their academic development in hydrographic and geospatial studies.",
    photos: [],
  },

  {
    id: "dpm",
    org: "IMG-ITB — Student Representative Council (DPM)",
    role: "Member",
    period: "May 2025 – January 2026",
    tags: ["Governance", "Student Advocacy", "Collaborative"],
    description:
      "Contributed to the development and management of student aspiration platforms through regular surveys, interviews, and discussion forums. I was responsible for gathering, analyzing, and processing organizational evaluations submitted by students, which were then compiled into monthly reports for the council and executive boards to support evaluation and organizational improvement initiatives.",
    photos: [
      {
        src: "/images/org/dpm1.jpg",
        label: "DPM Documentation 1",
        aspect: "aspect-[4/3]",
      },
      {
        src: "/images/org/dpm2.jpg",
        label: "DPM Documentation 2",
        aspect: "aspect-[4/3]",
      },
    ],
  },

  {
    id: "disklit",
    org: "IMG-ITB — Discussion, Research & Literacy Dept.",
    role: "Staff",
    period: "July 2024 – April 2025",
    tags: ["Research", "Spatial Hazard", "Environmental Assessment", "Coastal Policies"],
    description:
      "Contributed to several spatial hazard, environmental assessment, and coastal policy studies focusing on marine and coastal issues. My work included projects titled “Marine Spatial Contestation in Coastal Areas: Policy Analysis and Social Reactions toward the Privatization of Sea Access” and “Spatial Assessment of Tidal Flood Risk in Jakarta Using Environmental Parameters.” Through these studies, I was involved in spatial analysis, environmental risk assessment, and the evaluation of socio-spatial dynamics affecting coastal communities and marine environments.",
    photos: [
      {
        src: "/images/org/diskasi1.jpg",
        label: "Diskasi Documentation 1",
        aspect: "aspect-video",
      },
      {
        src: "/images/org/diskasi2.jpg",
        label: "Diskasi Documentation 2",
        aspect: "aspect-[3/4]",
      },
      {
        src: "/images/org/diskasi3.jpg",
        label: "Diskasi Documentation 3",
        aspect: "aspect-[3/4]",
      },
    ],
  },

  {
    id: "entertainment",
    org: "IMG-ITB — Wisuda Oktober 2024",
    role: "Head of Entertainment Division",
    period: "June 2024 – January 2025",
    tags: ["Leadership", "Event Planning", "Creative Direction", "Teamwork"],
    description:
      "I led a team of 11 staff members in designing and executing entertainment programs for the event. I coordinated interactive activities aimed at strengthening connections between students and graduates, while also overseeing the production of graduation appreciation media such as commemorative magazines and social media-based graduate spotlight campaigns. Through this role, I developed leadership, event management, and creative coordination skills in managing large-scale student events.",
    photos: [
      {
        src: "/images/org/wisok1.jpg",
        label: "Wisokto Documentation 1",
        aspect: "aspect-[4/3]",
      },
      {
        src: "/images/org/wisok2.jpg",
        label: "Wisokto Documentation 2",
        aspect: "aspect-[3/4]",
      },
      {
        src: "/images/org/wisok3.jpg",
        label: "Wisokto Documentation 3",
        aspect: "aspect-[3/4]",
      },
    ],
  },

  {
    id: "proacad",
    org: "IMG-ITB — Professional Academy Department",
    role: "Staff",
    period: "October 2023 – April 2024",
    tags: ["Training", "ETS", "Photogrammetry", "TLS"],
    description:
      "Helped facilitate practical training sessions focused on surveying techniques using Electronic Total Station (ETS), photogrammetry, and Terrestrial Laser Scanning (TLS). My responsibilities included assisting participants throughout the complete workflow, from field preparation and data acquisition to data processing and interpretation, helping members strengthen both technical and practical surveying competencies.",
    photos: [
      {
        src: "/images/org/akprof1.jpg",
        label: "Prof. Academy Documentation 1",
        aspect: "aspect-video",
      },
      {
        src: "/images/org/akprof2.jpg",
        label: "Prof. Academy Documentation 2",
        aspect: "aspect-video",
      },
    ],
  },

  {
    id: "apres",
    org: "Apres! ITB",
    role: "Vice Head of Musical Arts Division",
    period: "June 2024 – June 2025",
    tags: ["Leadership", "Collaborative", "Curation", "Music"],
    description:
      "Served as a coordinator and supervisor for 10 members within Apres! ITB, managing music production activities including recording, mixing, and mastering songs created by members. Also led collaborative projects involving music album studies and analyses, as well as playlist curation tailored to selected thematic concepts, while fostering teamwork and creative development among members.",
    photos: [
      {
        src: "/images/org/apres1.jpg",
        label: "Apres! Documentation 1",
        aspect: "aspect-[4/3]",
      },
      {
        src: "/images/org/apres2.jpg",
        label: "Apres! Documentation 2",
        aspect: "aspect-[4/3]",
      },
    ],
  },
];

export default function OrganizationalExperience() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [selectedImage]);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section id="organizations" className="scroll-mt-16 bg-white/25 py-10">
      <div className="mx-auto max-w-5xl px-6">
        <AnimateOnScroll>
          <h2 className="section-title mb-8">Organizational Experience</h2>
        </AnimateOnScroll>

        <div className="flex flex-col gap-8">
          {orgs.map((o, i) => (
            <AnimateOnScroll key={o.id} delay={i * 80}>
              <div className="glass-card p-6 md:p-7">
                {/* Header */}
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-base font-semibold text-sky-800">{o.org}</h3>

                    <p className="mt-0.5 text-sm font-medium text-sky-500">{o.role}</p>
                  </div>

                  <span className="h-fit flex-shrink-0 self-start whitespace-nowrap rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-600 sm:self-auto">
                    {o.period}
                  </span>
                </div>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {o.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-sky-200 bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-sky-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-sky-800/75">{o.description}</p>

                {/* Photos */}
                {o.id === "disklit" ? (
                  // Custom layout: 3 foto dalam 1 baris, tinggi sama — foto pertama lebih lebar (16/9), dua kanan portrait (3/4)
                  <div
                    className="grid gap-2.5"
                    style={{
                      gridTemplateColumns: "2fr 1fr 1fr",
                      height: "240px",
                    }}
                  >
                    {o.photos.map((photo, pi) => (
                      <div
                        key={pi}
                        className="relative cursor-pointer overflow-hidden rounded-xl"
                        onClick={() => setSelectedImage(photo.src)}
                      >
                        <Image
                          src={photo.src}
                          alt={`${o.org} photo ${pi + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div
                          className="absolute bottom-0 left-0 right-0 p-2 text-center opacity-0 transition-opacity duration-300 hover:opacity-100"
                          style={{
                            background: "linear-gradient(transparent, rgba(7, 89, 133, 0.9))",
                          }}
                        >
                          <span className="text-xs font-medium text-white">{photo.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : o.id === "entertainment" ? (
                  // Custom layout: foto besar di kiri (span 2 baris), dua foto kecil di kanan
                  <div
                    className="grid gap-2.5"
                    style={{
                      gridTemplateColumns: "2fr 1fr",
                      gridTemplateRows: "1fr 1fr",
                      height: "400px",
                    }}
                  >
                    {/* Foto pertama: mengisi penuh kolom kiri (2 baris) */}
                    <div
                      className="relative cursor-pointer overflow-hidden rounded-xl"
                      style={{ gridRow: "span 2" }}
                      onClick={() => setSelectedImage(o.photos[0].src)}
                    >
                      <Image
                        src={o.photos[0].src}
                        alt={`${o.org} photo 1`}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div
                        className="absolute bottom-0 left-0 right-0 p-2 text-center opacity-0 transition-opacity duration-300 hover:opacity-100"
                        style={{
                          background: "linear-gradient(transparent, rgba(7, 89, 133, 0.9))",
                        }}
                      >
                        <span className="text-xs font-medium text-white">{o.photos[0].label}</span>
                      </div>
                    </div>

                    {/* Foto kedua & ketiga: masing-masing satu baris di kolom kanan */}
                    {o.photos.slice(1).map((photo, pi) => (
                      <div
                        key={pi + 1}
                        className="relative cursor-pointer overflow-hidden rounded-xl"
                        onClick={() => setSelectedImage(photo.src)}
                      >
                        <Image
                          src={photo.src}
                          alt={`${o.org} photo ${pi + 2}`}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div
                          className="absolute bottom-0 left-0 right-0 p-2 text-center opacity-0 transition-opacity duration-300 hover:opacity-100"
                          style={{
                            background: "linear-gradient(transparent, rgba(7, 89, 133, 0.9))",
                          }}
                        >
                          <span className="text-xs font-medium text-white">{photo.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Layout default untuk org lainnya
                  <div
                    className={`grid gap-2.5 ${o.photos.length >= 3 ? "grid-cols-3" : "grid-cols-2"}`}
                  >
                    {o.photos.map((photo, pi) => (
                      <div
                        key={pi}
                        className={`relative ${
                          photo.aspect ?? "aspect-video"
                        } cursor-pointer overflow-hidden rounded-xl`}
                        onClick={() => setSelectedImage(photo.src)}
                      >
                        <Image
                          src={photo.src}
                          alt={`${o.org} photo ${pi + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />

                        {/* Overlay */}
                        <div
                          className="absolute bottom-0 left-0 right-0 p-2 text-center opacity-0 transition-opacity duration-300 hover:opacity-100"
                          style={{
                            background: "linear-gradient(transparent, rgba(7, 89, 133, 0.9))",
                          }}
                        >
                          <span className="text-xs font-medium text-white">{photo.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative h-[90vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={selectedImage} alt="Expanded image" fill className="object-contain" />

            {/* Close button */}
            <button
              className="-top absolute -right-20 text-4xl text-white transition-colors hover:text-sky-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}