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
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/80 backdrop-blur-md shadow-sm shadow-sky-100"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Home */}
        <a
          href="#hero"
          className="flex items-center justify-center w-11 h-11 rounded-full
                     bg-sky-100 text-sky-600 hover:bg-sky-200
                     transition-colors duration-200 shadow-sm"
          aria-label="Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10.25L12 3l9 7.25"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 9.75V20h14V9.75"
            />
          </svg>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-sky-600 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />

          <span
            className={`block w-6 h-0.5 bg-sky-600 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`block w-6 h-0.5 bg-sky-600 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul
          className="flex flex-col px-6 pt-2 pb-4 gap-3
                     bg-white/90 backdrop-blur-md
                     border-t border-sky-100"
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block py-1.5 text-sky-700 font-medium text-sm"
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