"use client";

import { useState, useEffect, useRef } from "react";
import { experience } from "@/lib/experience";
import { useOutsideClick } from "@/hooks/use-outside-click";  
import { ExperienceModal } from "./ExperienceModal";

const CARD_WIDTH = 420;
const GAP = 64;

export default function ExperienceSlider() {
  const [index, setIndex] = useState(1);
  const [activeExperience, setActiveExperience] = useState<any>(null);

  return (
    <>
      <div className="relative overflow-hidden py-32">
        {/* Track */}
        <div
          className="flex items-center transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(50% - ${
              index * (CARD_WIDTH + GAP) + CARD_WIDTH / 2
            }px))`,
            gap: `${GAP}px`,
          }}
        >
          {experience.map((item, i) => {
            const active = i === index;

            return (
              <div
                key={item.id}
                className={`shrink-0 transition-all duration-500 ${
                  active ? "opacity-100 scale-100" : "opacity-40 scale-95"
                }`}
                style={{ width: CARD_WIDTH }}
              >
                <ExperienceCard
                  {...item}
                  active={active}
                  onOpen={() => active && setActiveExperience(item)}
                />
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="mt-16 flex items-center justify-center gap-6">
          <button
            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
            className="rounded border border-white/20 px-4 py-1 text-sm text-white/70 hover:text-white disabled:opacity-30"
            disabled={index === 0}
          >
            ← Previous
          </button>

          <span className="text-xs text-white/40">
            {index + 1} / {experience.length}
          </span>

          <button
            onClick={() =>
              setIndex((i) => Math.min(i + 1, experience.length - 1))
            }
            className="rounded border border-white/20 px-4 py-1 text-sm text-white/70 hover:text-white disabled:opacity-30"
            disabled={index === experience.length - 1}
          >
            Next →
          </button>
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      {activeExperience && (
        <ExperienceModal
          experience={activeExperience}
          onClose={() => setActiveExperience(null)}
        />
      )}
    </>
  );
}
function ExperienceCard({
  role,
  company,
  period,
  focus,
  description,
  active,
  onOpen,
}: any) {
  return (
    <div
      onClick={onOpen}
      className={`rounded-2xl border border-white/10 bg-white/2 p-8 backdrop-blur transition-all
        ${
          active
            ? "shadow-xl cursor-pointer hover:bg-white/[0.04]"
            : "cursor-default"
        }
      `}
    >
      <p className="mb-2 text-xs uppercase tracking-widest text-white/40">
        {period}
      </p>

      <h3 className="text-xl font-semibold">{role}</h3>
      <p className="mt-1 text-sm text-white/70">{company}</p>

      <p className="mt-4 text-xs uppercase tracking-wide text-white/50">
        {focus}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-white/65 line-clamp-4">
        {description}
      </p>

      {active && (
        <p className="mt-4 text-xs uppercase tracking-widest text-white/40">
          Click to explore →
        </p>
      )}
    </div>
  );
}
