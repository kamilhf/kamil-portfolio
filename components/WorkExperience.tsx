"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import Image from "next/image";

import { useState, useEffect } from "react";

const experiences = [
  {
    id: "phr",
    company: "Pertamina Hulu Rokan (PHR)",
    role: "Capstone Project — Datum Transformation Information System",
    period: "February 2026 – Present",
    location: "Riau, Indonesia",
    tags: ["Geodesy", "Web Development", "Datum Transformation"],
    description:
      "Developed a web-based information system to automate datum transformation processes within Pertamina Hulu Rokan's operational area. The system integrates geodetic control network shift data and tectonic plate deformation models to enable accurate coordinate conversion between reference frames (ID74 to SRGI2013), supporting reliable spatial data management for oil and gas exploration and production activities.",
    photos: [
      {
        src: "/images/work/phr1.jpg",
        label: "PHR Documentation 1",
        aspect: "aspect-video",
      },
      {
        src: "/images/work/phr2.jpg",
        label: "PHR Documentation 2",
        aspect: "aspect-video",
      },
      {
        src: "/images/work/phr3.jpg",
        label: "PHR Documentation 3",
        aspect: "aspect-video",
      },
    ],
  },

  {
    id: "itb-asst",
    company: "Institut Teknologi Bandung",
    role: "Practicum Assistant — AI & Data Literacy Course",
    period: "April 2026 – Present",
    location: "Bandung, Indonesia",
    tags: ["Teaching", "Artificial Intelligence", "Machine Learning", "Data Literacy"],
    description:
      "Facilitated bi-weekly practicum sessions for 63 students, guiding them through modules covering descriptive statistics, scientific computing with NumPy and Matplotlib, spatial data visualization, and machine learning applications in earth sciences. Responsible for session preparation, live coding demonstrations, and student evaluation.",
    photos: [],
  },

  {
    id: "big",
    company: "Badan Informasi Geospasial (BIG)",
    role: "Intern",
    period: "August 2025 – September 2025",
    location: "Cibinong, Indonesia",
    tags: ["Hydrography", "SDB", "Machine Learning", "Remote Sensing"],
    description:
      "Integrated bathymetric data from primary hydroacoustic surveys (SBES, USV) with Satellite-Derived Bathymetry from Sentinel-2B imagery to produce a 74.5 km² Digital Bathymetric Model for the shallow waters of Laut Island, South Kalimantan. Evaluated multiple ML models (Random Forest, KNN) for SDB prediction, with the best model achieving RMSE of 0.38 m against in-situ echosounder data.",
    photos: [
      {
        src: "/images/work/big1.jpg",
        label: "BIG Documentation 1",
        aspect: "aspect-[4/3]",
      },
      {
        src: "/images/work/big2.png",
        label: "BIG Documentation 2",
        aspect: "aspect-[4/3]",
      },
      {
        src: "/images/work/big3.jpg",
        label: "BIG Documentation 3",
        aspect: "aspect-[4/3]",
      },
    ],
  },

  {
    id: "tortuga",
    company: "PT Tortuga Xcel Dynamics",
    role: "Intern",
    period: "January 2025 – February 2025",
    location: "Indonesia",
    tags: ["LiDAR", "Photogrammetry", "Quality Control"],
    description:
      "Processed LiDAR point cloud data for solar farm site planning in Batang and Pemalang Regency, generating DTM, DSM, and contour maps. Also conducted quality control on terrestrial survey data for the Pertamina Feed Pipeline RU III Plaju–Kertapati corridor, verifying measurement accuracy and compliance with project specifications.",
    photos: [
      {
        src: "/images/work/xcel1.jpg",
        label: "XCEL Documentation 1",
        aspect: "aspect-[3/4]",
        rounded: "rounded-3xl",
      },
      {
        src: "/images/work/xcel2.jpg",
        label: "XCEL Documentation 2",
        aspect: "aspect-[3/4]",
      },
      {
        src: "/images/work/xcel3.jpg",
        label: "XCEL Documentation 3",
        aspect: "aspect-[3/4]",
      },
    ],
  },
];

export default function WorkExperience() {
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
    <section id="work" className="scroll-mt-16 bg-white/25 py-10">
      <div className="mx-auto max-w-5xl px-6">
        <AnimateOnScroll>
          <h2 className="section-title mb-8">Work Experience</h2>
        </AnimateOnScroll>

        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <AnimateOnScroll key={exp.id} delay={i * 100}>
              <div className="glass-card p-6 md:p-8">
                {/* Header */}
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-sky-800">
                      {exp.company}
                    </h3>

                    <p className="mt-0.5 text-sm font-medium text-sky-600">{exp.role}</p>
                  </div>

                  <div className="flex flex-shrink-0 flex-col gap-1 sm:items-end">
                    <span className="self-start whitespace-nowrap rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-600 sm:self-auto">
                      {exp.period}
                    </span>
                    <span className="text-xs text-sky-400">{exp.location}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-sky-200 bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-sky-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-sky-800/75">{exp.description}</p>

                {/* Photo Grid */}
                {exp.photos.length > 0 && (
                  <div
                    className={`grid gap-3 ${
                      exp.photos.length === 2 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"
                    }`}
                  >
                    {exp.photos.map((photo, pi) => (
                      <div
                        key={pi}
                        className={`relative ${
                          photo.aspect ?? "aspect-video"
                        } ${photo.rounded ?? "rounded-xl"} cursor-pointer overflow-hidden`}
                        onClick={() => setSelectedImage(photo.src)}
                      >
                        <Image
                          src={photo.src}
                          alt={`${exp.company} documentation ${pi + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
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
            <Image
              src={selectedImage}
              alt="Expanded image"
              fill
              className="rounded-2xl object-contain"
            />

            {/* Close button */}
            <button
              className="-top absolute -right-20 text-3xl text-white transition-colors hover:text-sky-300"
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
