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
    tags: ["Geodesy", "Web Development", "Datum Transformation", "MATLAB"],
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
    tags: ["Teaching", "Python", "Machine Learning", "Data Literacy"],
    description:
      "Facilitated bi-weekly practicum sessions for 63 students, guiding them through modules covering descriptive statistics, scientific computing with NumPy and Matplotlib, spatial data visualization, and machine learning applications in earth sciences. Responsible for session preparation, live coding demonstrations, and student evaluation.",
    photos: [],
  },

  {
    id: "big",
    company: "Badan Informasi Geospasial (BIG)",
    role: "Intern — Hydrographic Survey & Satellite-Derived Bathymetry",
    period: "August 2025 – September 2025",
    location: "Cibinong, Indonesia",
    tags: ["Hydrography", "SDB", "Machine Learning", "Sentinel-2"],
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
    role: "Intern — LiDAR Processing & Terrestrial Survey QC",
    period: "January 2025 – February 2025",
    location: "Indonesia",
    tags: ["LiDAR", "DTM", "DSM", "Quality Control"],
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
    <section id="work" className="bg-white/50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="section-title mb-12">
            Work Experience
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <AnimateOnScroll key={exp.id} delay={i * 100}>
              <div className="glass-card p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-sky-800">
                      {exp.company}
                    </h3>

                    <p className="text-sky-600 font-medium text-sm mt-0.5">
                      {exp.role}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 flex-shrink-0">
                    <span
                      className="px-3 py-1 rounded-full text-xs
                                 bg-sky-100 text-sky-600 font-medium whitespace-nowrap"
                    >
                      {exp.period}
                    </span>

                    <span className="text-xs text-sky-400">
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs rounded-full
                                 bg-sky-50 text-sky-600 border border-sky-200 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-sky-800/75 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Photo Grid */}
                {exp.photos.length > 0 && (
                  <div
                    className={`grid gap-3 ${
                      exp.photos.length === 2
                        ? "grid-cols-2"
                        : "grid-cols-2 sm:grid-cols-3"
                    }`}
                  >
                    {exp.photos.map((photo, pi) => (
                      <div
                        key={pi}
                        className={`relative ${
                          photo.aspect ?? "aspect-video"
                        } ${photo.rounded ?? "rounded-xl"} overflow-hidden cursor-pointer`}
                        onClick={() => setSelectedImage(photo.src)}
                      >
                        <Image
                          src={photo.src}
                          alt={`${exp.company} documentation ${pi + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
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
    className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm
               flex items-center justify-center p-4"
    onClick={() => setSelectedImage(null)}
  >
    <div
      className="relative w-full max-w-5xl max-h-[90vh] aspect-video"
      onClick={(e) => e.stopPropagation()}
    >
      <Image
        src={selectedImage}
        alt="Expanded image"
        fill
        className="object-contain rounded-2xl"
      />

      {/* Close button */}
      <button
        className="absolute -top-12 right-0 text-white text-3xl"
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