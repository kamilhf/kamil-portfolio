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
    <section
      id="personal"
      className="relative scroll-mt-20 overflow-hidden border-t-4 border-orange-300 bg-orange-100 bg-[linear-gradient(to_right,#b4530940_1px,transparent_1px),linear-gradient(to_bottom,#b4530940_1px,transparent_1px)] bg-[size:150px_150px] py-10 text-white"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <AnimateOnScroll>
          <h2 className="section-title no-gradient-line mb-4 text-orange-700">
            <span className="inline-block bg-gradient-to-r from-orange-700 to-orange-400 bg-clip-text text-transparent">
              Personal Life
            </span>
          </h2>
        </AnimateOnScroll>

        <div className="grid items-start gap-10 md:grid-cols-2">
          {/* LEFT SIDE */}
          <AnimateOnScroll delay={100}>
            <div className="flex flex-col gap-6">
              {/* Bio */}
              <div>
                <p className="whitespace-pre-line text-base leading-relaxed text-black">
                  {personalBio}
                </p>
              </div>

              {/* Two portrait photos */}
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="2xl relative aspect-[9/16] w-full cursor-pointer overflow-hidden"
                  onClick={() => setSelectedImage("/images/hobbies/hobby7.jpg")}
                >
                  <Image
                    src="/images/hobbies/hobby7.jpg"
                    alt="Personal Photo 1"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div
                  className="2xl relative aspect-[9/16] cursor-pointer overflow-hidden"
                  onClick={() => setSelectedImage("/images/hobbies/hobby8.jpg")}
                >
                  <Image
                    src="/images/hobbies/hobby8.jpg"
                    alt="Personal Photo 1"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
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
                  className="-2xl group relative aspect-[3/4] cursor-pointer overflow-hidden"
                  onClick={() => setSelectedImage(hobby.src)}
                >
                  <Image
                    src={hobby.src}
                    alt=""
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-sm font-medium text-black"></span>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
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
