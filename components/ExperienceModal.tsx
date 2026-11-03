"use client";

import { useEffect } from "react";
import type { Experience } from "@/lib/experience";

export function ExperienceModal({
  experience,
  onClose,
}: {
  experience: Experience;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center py-20 animate-fade">
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-50 w-full max-w-5xl rounded-xl bg-neutral-900 shadow-2xl">
        <div className="border-b border-white/10 px-8 py-6 relative">
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-white/40 hover:text-white"
          >
            ✕
          </button>

          <h2 className="text-3xl font-semibold">
            {experience.role}
          </h2>
          <p className="mt-2 text-xs uppercase tracking-widest text-white/40">
            {experience.company} · {experience.period}
          </p>
        </div>

        <div className="px-8 py-10 space-y-8">
          <p className="text-xs uppercase tracking-widest text-white/40">
            {experience.focus}
          </p>
          <p className="text-sm leading-relaxed text-white/70 max-w-prose">
            {experience.description}
          </p>
        </div>
      </div>
    </div>
  );
}
