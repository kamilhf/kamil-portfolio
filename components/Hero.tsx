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
      className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div
        className="absolute top-24 right-[8%] w-72 h-72 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #38bdf8, transparent 70%)", animation: "float 8s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-20 left-[5%] w-48 h-48 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #0ea5e9, transparent 70%)", animation: "float 6s ease-in-out infinite 1s" }}
      />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

        {/* Big greeting */}
        <h1
          className="font-display font-bold text-sky-900 leading-none mb-2"
          style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", animation: "fadeUp 0.6s ease forwards", animationDelay: "0.1s", opacity: 0 }}
        >
          {"Hi, I'm "}
          <span className="text-gradient">Kamil</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-sky-500 font-medium mb-8"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)", letterSpacing: "0.06em", animation: "fadeUp 0.6s ease forwards", animationDelay: "0.22s", opacity: 0 }}
        >
          Your Future Engineer!  
        </p>

        {/* Animated role */}
        <div
          className="h-10 flex items-center justify-center mb-6"
          style={{ animation: "fadeUp 0.6s ease forwards", animationDelay: "0.38s", opacity: 0 }}
        >
          <p
            className="text-xl md:text-2xl font-medium text-sky-600"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(8px)", transition: "opacity 0.35s ease, transform 0.35s ease" }}
          >
            {roles[roleIndex]}
          </p>
        </div>

        {/* Short bio */}
        <p
          className="text-base md:text-lg text-sky-800/70 max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ animation: "fadeUp 0.6s ease forwards", animationDelay: "0.52s", opacity: 0 }}
        >
          4th-year student at{" "}
          <span className="font-semibold text-sky-700">Institut Teknologi Bandung</span>{" "}
          passionate about mapping the world through data — from ocean floors to the skies.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 justify-center"
          style={{ animation: "fadeUp 0.6s ease forwards", animationDelay: "0.65s", opacity: 0 }}
        >
          <a href="#about" className="px-7 py-3 rounded-full bg-sky-500 text-white font-medium text-sm hover:bg-sky-600 transition-all duration-200 shadow-lg shadow-sky-200 hover:shadow-sky-300 hover:-translate-y-0.5">
            Explore My Work
          </a>
          <a href="#personal" className="px-7 py-3 rounded-full bg-white text-sky-600 font-medium text-sm border border-sky-200 hover:border-sky-400 hover:bg-sky-50 transition-all duration-200 hover:-translate-y-0.5">
            Get to Know Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50" style={{ animation: "float 3s ease-in-out infinite" }}>
        <span className="text-xs text-sky-500 tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
