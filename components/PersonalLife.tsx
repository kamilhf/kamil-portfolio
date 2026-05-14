"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const personalBio = `Outside of geodesy and geomatics, I am someone who finds joy in staying curious and present. Growing up in Indonesia, I have always been drawn to the outdoors, whether it is hiking across Java’s volcanic landscapes, exploring coastlines, or simply taking long walks around Bandung’s hillside neighborhoods.

                    Beyond nature and travel, music has also become an important part of my daily life, offering both creativity and balance outside of work. I enjoy discovering different genres, attending live performances, performing in live stages, and experiencing how music connects people across cultures and experiences.
                    
                    I believe that the best engineers are also well-rounded people who are curious about the world beyond their field, empathetic to the communities their work impacts, and always willing to learn something new.`;

const hobbyCategories = [
  {
    id: "music",
    label: "Music",
    photos: [
      { src: "/images/hobbies/music1.jpg" },
      { src: "/images/hobbies/music2.jpg" },
      { src: "/images/hobbies/music3.jpg" },
    ],
  },
  {
    id: "sports",
    label: "Sports",
    photos: [
      { src: "/images/hobbies/sports1.jpg" },
      { src: "/images/hobbies/sports2.jpg" },
      { src: "/images/hobbies/sports3.jpg" },
    ],
  },
  {
    id: "nature",
    label: "Nature",
    photos: [
      { src: "/images/hobbies/nature1.jpg" },
      { src: "/images/hobbies/nature2.jpg" },
      { src: "/images/hobbies/nature3.jpg" },
    ],
  },
];

const AUTO_INTERVAL = 4000;

export default function PersonalLife() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActiveCategory((i) => (i + 1) % hobbyCategories.length);
  }, []);

  // Auto slide
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(next, AUTO_INTERVAL);

    return () => clearInterval(timer);
  }, [paused, next]);

  // Pause when user clicks tab
  const handleTabClick = (i: number) => {
    setActiveCategory(i);
    setPaused(true);

    setTimeout(() => {
      setPaused(false);
    }, 8000);
  };

  // Disable body scroll on modal open
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

  // ESC close
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
      className="relative scroll-mt-[70px] overflow-hidden border-t-4 border-orange-300 bg-orange-100 bg-[linear-gradient(to_right,#b4530940_1px,transparent_1px),linear-gradient(to_bottom,#b4530940_1px,transparent_1px)] bg-[size:150px_150px] py-10 text-white"
    >

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <AnimateOnScroll>
            <div className="mb-4 flex justify-center">
              <h2 className="section-title no-gradient-line text-orange-700">
                <span className="inline-block bg-gradient-to-r from-orange-700 to-orange-400 bg-clip-text text-transparent">
                  Personal Life
                </span>
              </h2>
            </div>
          </AnimateOnScroll>

        <div className="mx-auto flex w-full max-w-5xl flex-col gap-5">

          {/* TOP — Hobby Slider */}
          <AnimateOnScroll delay={100}>
            <div className="flex flex-col gap-3">

              {/* Slider */}
              <div className="relative overflow-hidden rounded-3xl border border-orange-200/80 bg-white/30 p-3 shadow-sm backdrop-blur-sm">

                {/* INNER MASK */}
                <div className="overflow-hidden rounded-2xl">
                  <div
                    className="flex w-full"
                    style={{
                      transform: `translateX(-${activeCategory * 100}%)`,
                      transition: "transform 500ms ease-in-out",
                    }}
                  >
                    {hobbyCategories.map((cat) => (
                      <div
                        key={cat.id}
                        className="grid min-w-full grid-cols-3 gap-3"
                      >
                        {cat.photos.map((photo, pi) => (
                          <div
                            key={pi}
                            className="relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl"
                            onClick={() => setSelectedImage(photo.src)}
                          >
                            <Image
                              src={photo.src}
                              alt={`${cat.label} photo ${pi + 1}`}
                              fill
                              sizes="(max-width: 768px) 33vw, 30vw"
                              className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Tabs */}
              <div className="flex justify-center gap-8">
                {hobbyCategories.map((cat, i) => (
                  <button
                    key={cat.id}
                    onClick={() => handleTabClick(i)}
                    className="flex flex-col items-center gap-1"
                  >
                    <span
                      className={`text-sm font-medium transition-colors duration-200 ${
                        activeCategory === i
                          ? "text-orange-600"
                          : "text-orange-400 hover:text-orange-500"
                      }`}
                    >
                      {cat.label}
                    </span>

                    <span className="relative h-0.5 w-12 overflow-hidden rounded-full bg-orange-200">
                      <span
                        className={`absolute left-0 top-0 h-full rounded-full bg-orange-500 ${
                          activeCategory === i && !paused
                            ? "animate-progress"
                            : activeCategory === i
                            ? "w-full"
                            : "w-0"
                        }`}
                        style={
                          activeCategory === i && !paused
                            ? {
                                animationDuration: `${AUTO_INTERVAL}ms`,
                              }
                            : undefined
                        }
                      />
                    </span>
                  </button>
                ))}
              </div>

            </div>
          </AnimateOnScroll>

          {/* BOTTOM — Bio */}
          <AnimateOnScroll delay={200}>
            <div className="rounded-2xl border border-orange-200/80 bg-white/30 p-5 shadow-sm backdrop-blur-sm">
              <p className="whitespace-pre-line text-sm leading-relaxed text-black/80 md:text-[15px] font-semibold">
                {personalBio}
              </p>
            </div>
          </AnimateOnScroll>

        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative h-[90vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Expanded image"
              fill
              className="rounded-2xl object-contain"
            />

            <button
              className="absolute -right-16 top-0 text-4xl text-white transition-colors hover:text-orange-300"
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