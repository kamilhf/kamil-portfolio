"use client";

import { useEffect, useState } from "react";

const roles = [
  "Geodesy & Geomatics Engineer",
  "GIS Enthusiast",
  "Hydrography Practitioner",
  "Spatial Data Analyst",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="hero-bg relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      <div
        className="absolute right-[8%] top-24 h-72 w-72 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #38bdf8, transparent 70%)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-20 left-[5%] h-48 w-48 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #0ea5e9, transparent 70%)",
          animation: "float 6s ease-in-out infinite 1s",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Big greeting */}
        <h1
          className="mb-2 font-display font-bold leading-none text-[#0c4a6e]"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
            animation: "fadeUp 0.6s ease forwards",
            animationDelay: "0.1s",
            opacity: 0,
          }}
        >
          {"Hi, I'm "}
          <span className="inline-block bg-gradient-to-r from-sky-600 to-sky-300 bg-clip-text text-transparent">
            Kamil
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="mb-8 font-medium text-sky-500"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            letterSpacing: "0.06em",
            animation: "fadeUp 0.6s ease forwards",
            animationDelay: "0.22s",
            opacity: 0,
            paddingLeft: "clamp(0.5rem, 4vw, -2rem)",
            paddingRight: "0",
          }}
        >
          Your Future Engineer!
        </p>

        {/* Animated role */}
        <div
          className="mb-6 flex h-10 items-center justify-center"
          style={{ animation: "fadeUp 0.6s ease forwards", animationDelay: "0.38s", opacity: 0 }}
        >
          <p
            className="text-xl font-medium text-sky-600 md:text-2xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
            }}
          >
            {roles[roleIndex]}
          </p>
        </div>

        {/* Short bio */}
        <p
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-sky-800/70 md:text-lg"
          style={{ animation: "fadeUp 0.6s ease forwards", animationDelay: "0.52s", opacity: 0 }}
        >
          4th-year student at{" "}
          <span className="font-semibold text-sky-700">Institut Teknologi Bandung</span>
          {", "}
          passionate about mapping the world through data — from ocean floors to the horizon.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col justify-center gap-3 sm:flex-row"
          style={{ animation: "fadeUp 0.6s ease forwards", animationDelay: "0.65s", opacity: 0 }}
        >
          <a
            href="#about"
            className="rounded-full bg-sky-500 px-7 py-3 text-sm font-medium text-white shadow-lg shadow-sky-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-sky-300"
          >
            Explore My Work
          </a>
          <a
            href="#personal"
            className="rounded-full border border-sky-200 bg-white px-7 py-3 text-sm font-medium text-sky-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400 hover:bg-sky-50"
          >
            Get to Know Me
          </a>
        </div>
      </div>

      {/* Scroll Indicator - PERBAIKAN */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-1 opacity-50" style={{ animation: "float 3s ease-in-out infinite" }}>
          <span className="text-xs uppercase tracking-widest text-sky-500">Scroll</span>
          <svg
            className="h-4 w-4 text-sky-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}