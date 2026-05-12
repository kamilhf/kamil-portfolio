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
      "Mentored junior students on a weekly basis through the Hydrography Expertise Group, facilitating in-depth discussion sessions covering course materials, problem sets, and practical surveying concepts. Played an active role in helping students build a strong foundation in hydroacoustic data collection and processing.",
    photos: [],
  },

  {
    id: "dpm",
    org: "IMG-ITB — Student Representative Council (DPM)",
    role: "Member",
    period: "May 2025 – January 2026",
    tags: ["Governance", "Student Advocacy", "Research"],
    description:
      "Developed and managed student aspiration platforms through bi-weekly surveys, structured interviews, and open discussion forums to systematically gather and analyze organizational evaluations. Produced monthly processed aspiration reports delivered to DPM IMG-ITB and executive boards for organizational improvement initiatives.",
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
    tags: ["Research", "Spatial Hazard", "Environmental Assessment"],
    description:
      "Contributed to two spatial research studies: vulnerability analysis and tsunami mitigation for the Tasikmalaya Regency coast, and a spatial assessment of tidal flood risk in Jakarta using environmental parameters.",
    photos: [
      {
        src: "/images/org/diskasi1.jpg",
        label: "Diskasi Documentation 1",
        aspect: "aspect-video",
      },
      {
        src: "/images/org/diskasi2.jpg",
        label: "Diskasi Documentation 2",
        aspect: "aspect-video",
      },
    ],
  },

  {
    id: "entertainment",
    org: "IMG-ITB — Wisuda Oktober 2024",
    role: "Head of Entertainment Division",
    period: "June 2024 – January 2025",
    tags: ["Leadership", "Event Planning", "Creative Direction"],
    description:
      "Directed a team of 11 staff in conceptualizing and delivering the entertainment program for IMG-ITB's October 2024 graduation celebration.",
    photos: [
      {
        src: "/images/org/wisok1.jpg",
        label: "Wisokto Documentation 1",
        aspect: "aspect-[3/4]",
      },
      {
        src: "/images/org/wisok2.jpg",
        label: "Wisokto Documentation 2",
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
      "Facilitated hands-on practical training sessions for IMG-ITB members on surveying techniques using ETS, photogrammetry, and TLS.",
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
];

export default function OrganizationalExperience() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
    <section
      id="organizations"
      className="bg-white/25 py-10"
    >
      <div className="max-w-5xl mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="section-title mb-12">
            Organizational Experience
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col gap-8">
          {orgs.map((o, i) => (
            <AnimateOnScroll key={o.id} delay={i * 80}>
              <div className="glass-card p-6 md:p-7">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display text-base font-semibold text-sky-800">
                      {o.org}
                    </h3>

                    <p className="text-sky-500 font-medium text-sm mt-0.5">
                      {o.role}
                    </p>
                  </div>

                  <span
                    className="flex-shrink-0 px-3 py-1 h-fit rounded-full
                               text-xs bg-sky-100 text-sky-600
                               font-medium whitespace-nowrap"
                  >
                    {o.period}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {o.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs rounded-full
                                 bg-sky-50 text-sky-600
                                 border border-sky-200 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-sky-800/75 leading-relaxed mb-5">
                  {o.description}
                </p>

                {/* Photos */}
                <div
                  className={`grid gap-2.5 ${
                    o.photos.length >= 3
                      ? "grid-cols-3"
                      : "grid-cols-2"
                  }`}
                >
                  {o.photos.map((photo, pi) => (
                  <div
                    key={pi}
                    className={`relative ${
                      photo.aspect ?? "aspect-video"
                    } rounded-xl overflow-hidden cursor-pointer`}
                    onClick={() => setSelectedImage(photo.src)}
                  >
                      <Image
                        src={photo.src}
                        alt={`${o.org} photo ${pi + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />

                      {/* Overlay */}
                      <div
                        className="absolute bottom-0 left-0 right-0
                                   p-2 text-center opacity-0
                                   hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background:
                            "linear-gradient(transparent, rgba(7, 89, 133, 0.9))",
                        }}
                      >
                        <span className="text-xs text-white font-medium">
                          {photo.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
      {selectedImage && (
  <div
    className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm
               flex items-center justify-center p-4"
    onClick={() => setSelectedImage(null)}
  >
      <div
        className="relative w-full h-[90vh] max-w-6xl
                  rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={selectedImage}
          alt="Expanded image"
          fill
          className="object-contain"
        />

      {/* Close button */}
      <button
        className="absolute top-1 right-1 text-white text-4xl
                   hover:text-sky-300 transition-colors"
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