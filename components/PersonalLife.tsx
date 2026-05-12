"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { useState, useEffect } from "react";
import Image from "next/image";

const personalBio = `
Outside of geodesy and geomatics, I am someone who finds joy in staying curious and present. 
Growing up in Indonesia, I have always been drawn to the outdoors — whether it is hiking across 
Jawa's volcanic landscapes, exploring coastlines, or simply taking long walks around Bandung's 
hillside neighborhoods.

I am passionate about photography and traveling, which give me a creative outlet 
away from the precision of technical work.

I believe that the best engineers are also well-rounded people: curious about the world beyond 
their field, empathetic to the communities their work impacts, and always willing to learn something new.
`.trim();

const hobbies = [
  {
    src: "/images/hobbies/hobby1.jpg",
  },
  {
    src: "/images/hobbies/hobby2.jpg",
  },
  {
    src: "/images/hobbies/hobby3.jpg",
  },
  {
    src: "/images/hobbies/hobby4.jpg",
  },
  {
    src: "/images/hobbies/hobby5.jpg",
  },
  {
    src: "/images/hobbies/hobby6.jpg",
  },
];

export default function PersonalLife() {
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
      id="personal"
      className="bg-gray-900 text-white relative overflow-hidden py-10"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimateOnScroll>
          <h2 className="section-title mb-12 !text-white">
            Personal Life
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE */}
          <AnimateOnScroll delay={100}>
            <div className="flex flex-col gap-6">
              {/* Bio */}
              <div>
                <p className="text-white leading-relaxed text-base whitespace-pre-line">
                  {personalBio}
                </p>
              </div>

              {/* Two portrait photos */}
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="relative w-full aspect-[9/16] 2xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage("/images/hobbies/hobby7.jpg")}
                >
                  <Image
                  src="/images/hobbies/hobby7.jpg"
                  alt="Personal Photo 1"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                </div>

                 <div
                  className="relative aspect-[9/16] 2xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage("/images/hobbies/hobby8.jpg")}
                >
                  <Image
                  src="/images/hobbies/hobby8.jpg"
                  alt="Personal Photo 1"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* RIGHT SIDE HOBBIES */}
          <AnimateOnScroll delay={200}>
            <div className="grid grid-cols-2 gap-3">
              {hobbies.map((hobby, i) => (
                <div
                  key={i}
                  className="group relative aspect-[3/4] -2xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(hobby.src)}
                >
                  <Image
                    src={hobby.src}
                    alt=""
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
>
                    <span className="text-sm text-white font-medium">
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
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
        className="absolute top-4 right-4 text-white text-4xl
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