"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { projects } from "@/lib/projects";

const featuredProjects = projects.filter((project) => project.cover).slice(0, 5);

export default function HeroRight() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = useMemo(
    () => featuredProjects[activeIndex],
    [activeIndex]
  );

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!activeProject) return null;

  return (
    <section className="w-full">
      {/* <div className="mb-8 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.28em] text-white/35">
          Mechanical Engineering Portfolio
        </p>

        <h2 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-tight text-white">
          Design, build, test, refine.
        </h2>

        <p className="mt-5 max-w-xl text-base leading-7 text-white/58">
          A focused collection of aircraft, manufacturing, CAD, and
          prototyping work developed through competition and applied design
          projects.
        </p>
      </div> */}

      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/40">
        <Link href={`/projects/${activeProject.id}`} className="group block">
          <div className="relative h-[440px] overflow-hidden rounded-[1.5rem] bg-white/[0.03]">
            <Image
              src={activeProject.cover!}
              alt={activeProject.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 780px"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                Featured Project
              </p>

              <h3 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
                {activeProject.title}
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
                {activeProject.summary}
              </p>

              <div className="mt-5 inline-flex rounded-full border border-white/15 bg-white px-5 py-2 text-sm font-medium text-black transition group-hover:bg-white/90">
                View project
              </div>
            </div>
          </div>
        </Link>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-2">
            {featuredProjects.map((project, idx) => (
              <button
                key={project.id}
                aria-label={`View ${project.title}`}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === activeIndex ? "w-8 bg-white" : "w-2 bg-white/25"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              aria-label="Previous project"
              onClick={handlePrev}
              className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <IconArrowLeft size={18} />
            </button>

            <button
              aria-label="Next project"
              onClick={handleNext}
              className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <IconArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}