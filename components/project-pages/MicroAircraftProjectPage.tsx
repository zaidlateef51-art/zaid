"use client";

import Navbar from "@/components/navbar";
import type { Project } from "@/lib/projects";

interface Props {
  project: Project;
}

function ImageBox({
  src,
  alt,
  className = "",
  fit = "cover",
}: {
  src: string;
  alt: string;
  className?: string;
  fit?: "cover" | "contain";
}) {
  return (
    <div
      className={`overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={`h-full w-full ${fit === "contain" ? "object-contain p-5" : "object-cover"
          }`}
      />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.25em] text-white/35">
      {children}
    </p>
  );
}

export default function MicroAircraftProjectPage({ project }: Props) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-24 space-y-28">
        {/* HERO */}
        <header className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel>Design, manufacturing, and flight testing of a lightweight payload-focused aircraft</SectionLabel>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/60">
              {project.subtitle}
            </p>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/55">
              {project.summary}
            </p>
          </div>

          <ImageBox
            src={project.cover!}
            alt={project.title}
            className="h-[360px] lg:h-[430px]"
          />
        </header>

        {/* METRICS */}
        <section>
          <SectionLabel>Key Metrics</SectionLabel>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {project.outcomes?.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                  {item.title}
                </p>

                <p className="mt-4 text-2xl font-semibold">{item.value}</p>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* DATA SECTIONS */}
        {project.sections?.map((section, index) => (
          <section key={section.heading}>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <SectionLabel>
                  {index === 0
                    ? "Overview"
                    : index === 1
                      ? "My Focus"
                      : index === 2
                        ? "Approach"
                        : "Outcome"}
                </SectionLabel>

                <h2 className="mt-4 text-3xl font-semibold">
                  {section.heading}
                </h2>
              </div>

              <p className="text-base leading-8 text-white/60">
                {section.content}
              </p>
            </div>

            {section.images && section.images.length > 0 && (
              <div
                className={`mt-10 grid gap-6 ${section.images.length === 1
                    ? "grid-cols-1"
                    : "md:grid-cols-2"
                  }`}
              >
                {section.images.map((image) => (
                  <ImageBox
                    key={image.src}
                    src={image.src}
                    alt={section.heading}
                    fit={image.fit as "cover" | "contain"}
                    className={
                      image.size === "full"
                        ? "h-[420px]"
                        : image.size === "small"
                          ? "h-[300px]"
                          : "h-[340px]"
                    }
                  />
                ))}
              </div>
            )}
          </section>
        ))}

        {/* SKILLS */}
        {project.skills && (
          <section className="mt-28 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-white/35">
              Skills Demonstrated
            </p>

            <div className="mt-6 grid gap-3 text-sm text-white/65 sm:grid-cols-2 lg:grid-cols-3">
              {project.skills.map((skill) => (
                <p key={skill}>• {skill}</p>
              ))}
            </div>
          </section>
        )}

        {/* GALLERY */}
        <section>
          <SectionLabel>Project Gallery</SectionLabel>

          <h2 className="mt-4 text-3xl font-semibold">
            Flight, Fabrication, and Assembly
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <ImageBox
              src="/project5/micro2.webp"
              alt="Aircraft overview"
              className="h-[300px]"
            />
            <ImageBox
              src="/project5/micro3.webp"
              alt="Aircraft flight"
              className="h-[300px]"
            />
            {/* <ImageBox
              src="/project5/micro4.webp"
              alt="CNC foam cutter"
              className="h-[300px]"
            /> */}
            <ImageBox
              src="/project5/micro5.webp"
              alt="Aircraft assembly"
              className="h-[300px]"
            />
          </div>
        </section>
      </main>
    </div>
  );
}