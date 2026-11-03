"use client";

import { useRef, useEffect } from "react";
import ExperiencePanel from "./ExperiencePanel";
import ExperienceTrail from "./ExperienceTrail";
import { experience } from "@/lib/experience";

export default function ExperienceRail() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Map vertical wheel → horizontal scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div
      ref={containerRef}
      className="hidden md:flex h-screen w-full overflow-x-scroll overflow-y-hidden scroll-smooth"
      style={{ scrollbarWidth: "none" }}
    >
      {experience.map((item, index) => (
        <div key={item.id} className="flex h-full">
          <ExperiencePanel {...item} />

          {index < experience.length - 1 && <ExperienceTrail />}
        </div>
      ))}
    </div>
  );
}
