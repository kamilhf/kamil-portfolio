"use client";

import { useState, useEffect } from "react";

export default function ScrollbarManager() {
  const [isPersonalSection, setIsPersonalSection] = useState(false);

  useEffect(() => {
    const personalSection = document.getElementById("personal");

    if (!personalSection) return;

    const handleScroll = () => {
      const rect = personalSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate how much of the section is visible
      const visibleAmount = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
      const totalHeight = rect.height;
      const visiblePercentage = visibleAmount / totalHeight;

      // Change color when at least 10% of the section is visible
      if (visiblePercentage > 0.1) {
        setIsPersonalSection(true);
      } else {
        setIsPersonalSection(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isPersonalSection) {
      root.style.setProperty("--scrollbar-thumb", "#f97316");
      root.style.setProperty("--scrollbar-track", "#ffffff");
    } else {
      root.style.setProperty("--scrollbar-thumb", "#38bdf8");
      root.style.setProperty("--scrollbar-track", "#ffffff");
    }
  }, [isPersonalSection]);

  return null;
}
