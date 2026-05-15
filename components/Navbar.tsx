"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Organizations", href: "#organizations" },
  { label: "Personal", href: "#personal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-30 transform-gpu transition-all duration-300 will-change-transform [backface-visibility:hidden] ${
        scrolled
          ? "border-b border-white/40 bg-white/95 py-3 shadow-md shadow-sky-100/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 to-white/10 opacity-70" />
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
        {/* Logo / Home */}
        <a
          href="#hero"
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/60 text-sky-600 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
          aria-label="Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.25L12 3l9 7.25" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 9.75V20h14V9.75" />
          </svg>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative px-1 py-1 text-sm font-medium text-sky-700 transition-colors duration-300 hover:text-sky-500"
              >
                {item.label}

                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 p-1 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-sky-600 transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`block h-0.5 w-6 bg-sky-600 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`block h-0.5 w-6 bg-sky-600 transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-3 border-t border-sky-100 bg-white/90 px-6 pb-4 pt-2 backdrop-blur-md">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block py-1.5 text-sm font-medium text-sky-700"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
