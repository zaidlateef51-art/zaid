"use client";

import { Suspense, useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import type { Project } from "@/lib/projects";
import { awards } from "@/lib/awards";
import { Canvas } from "@react-three/fiber";
import { Bounds, OrbitControls, useGLTF } from "@react-three/drei";

interface CompetitionProjectPageProps {
  project: Project;
}

/* ------------------ 3D MODEL ------------------ */

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);

  useEffect(() => {
    console.log("ModelViewer loaded:", url);
  }, [url]);

  return <primitive object={scene} />;
}

function ModelViewer({ url }: { url: string }) {
  return (
    <div className="relative mx-auto h-[280px] w-full max-w-[420px] overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04]">
      <div className="absolute left-3 top-3 z-20 rounded-full border border-white/15 bg-black/80 px-3 py-1 text-[11px] text-white/80">
        Interactive 3D model
      </div>

      <div className="absolute bottom-3 left-3 z-20 text-[11px] text-white/50">
        Drag to rotate · Scroll to zoom
      </div>

      <Canvas className="h-full w-full" camera={{ position: [0, 0, 5], fov: 35 }}>
        <ambientLight intensity={3} />
        <directionalLight position={[4, 5, 4]} intensity={2.5} />
        <directionalLight position={[-4, 2, -3]} intensity={1.5} />

        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1}>
            <Model url={url} />
          </Bounds>
        </Suspense>

        <OrbitControls
          makeDefault
          enablePan
          enableZoom
          enableRotate
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}

/* ------------------ IMAGE ------------------ */

function ProjectImage({
  src,
  alt,
  fit = "cover",
  size = "normal",
}: {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
  size?: "full" | "wide" | "normal" | "small";
}) {
  const sizeMap = {
    full: "max-w-6xl",
    wide: "max-w-5xl",
    normal: "max-w-3xl",
    small: "max-w-md",
  };

  return (
    <div className={`mx-auto w-full ${sizeMap[size]}`}>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
        <img
          src={src}
          alt={alt}
          className={`h-auto w-full ${
            fit === "contain" ? "object-contain" : "object-cover"
          }`}
        />
      </div>
    </div>
  );
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
        className={`h-full w-full ${
          fit === "contain" ? "object-contain p-4" : "object-cover"
        }`}
      />
    </div>
  );
}

/* ------------------ SWITCH IMAGE / MODEL ------------------ */

function ProjectVisual({
  src,
  alt,
  fit,
  size,
}: {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
  size?: "full" | "wide" | "normal" | "small";
}) {
  const isModel = src.toLowerCase().endsWith(".glb");

  if (isModel) {
    return <ModelViewer url={src} />;
  }

  return <ProjectImage src={src} alt={alt} fit={fit} size={size} />;
}

/* ------------------ PAGE ------------------ */

export default function CompetitionProjectPage({
  project,
}: CompetitionProjectPageProps) {
  const [awardOpen, setAwardOpen] = useState(false);
  const award = awards.find((a) => a.id === 2);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-24">
        {/* HERO */}
        <header className="space-y-10">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.24em] text-white/40">
              {project.subtitle}
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/60">
              {project.summary}
            </p>
          </div>

          {project.cover && (
            <div className="mt-6 flex justify-center">
              <div className="w-full max-w-3xl">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="h-auto w-full rounded-2xl border border-white/10 bg-white/[0.03] object-contain"
                />
              </div>
            </div>
          )}
        </header>

        {/* RESULTS & OUTCOME */}
        {project.outcomes && (
          <section className="mt-20">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                {/* <p className="text-xs uppercase tracking-[0.24em] text-white/35">
                  Results & Outcome
                </p> */}

                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  Competition Recognition
                </h2>
              </div>

              {award && (
                <button
                  type="button"
                  onClick={() => setAwardOpen(true)}
                  className="w-fit rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  View Award Details
                </button>
              )}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {project.outcomes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                    {item.title}
                  </p>

                  <p className="mt-3 text-3xl font-semibold tracking-tight">
                    {item.value}
                  </p>

                  {item.description && (
                    <p className="mt-3 text-sm leading-6 text-white/55">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {award && (
              <p className="mt-6 max-w-4xl text-sm leading-7 text-white/65">
                This project was recognized with{" "}
                <button
                  type="button"
                  onClick={() => setAwardOpen(true)}
                  className="font-medium text-white underline underline-offset-4 transition hover:text-white/75"
                >
                  {award.title}
                </button>{" "}
                for its accessibility-focused design and assistive device
                engineering.
              </p>
            )}
          </section>
        )}

        {/* SECTIONS */}
        {project.sections && (
          <section className="mt-28 space-y-28">
            {project.sections.map((section, index) => (
              <article
                key={section.heading}
                className={`
                  grid gap-10 lg:grid-cols-2 lg:items-center
                  ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}
                `}
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/30">
                    0{index + 1}
                  </p>

                  <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                    {section.heading}
                  </h2>

                  <p className="mt-5 leading-8 text-white/60">
                    {section.content}
                  </p>
                </div>

                {section.images && (
                  <div className="space-y-6">
                    {section.images.map((img, i) => (
                      <ProjectVisual
                        key={img.src + i}
                        src={img.src}
                        alt={section.heading}
                        fit={img.fit}
                        size={img.size ?? "normal"}
                      />
                    ))}
                  </div>
                )}
              </article>
            ))}
          </section>
        )}

        {/* SKILLS */}
        <section className="mt-28 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-white/35">
            Skills Demonstrated
          </p>

          <div className="mt-6 grid gap-3 text-sm text-white/65 sm:grid-cols-2 lg:grid-cols-3">
            <p>• Assistive device design</p>
            <p>• Human-centered engineering</p>
            <p>• Mechanical prototyping</p>
            <p>• CAD modeling</p>
            <p>• Rapid iteration & testing</p>
            <p>• Client-driven design process</p>
          </div>
        </section>

        {/* MEDIA */}
        {project.media && project.media.length > 0 && (
          <section className="mt-28">
            <h2 className="text-3xl font-semibold tracking-tight">
              Project Media
            </h2>

            <div className="mt-8 space-y-8">
              {project.media.map((item, index) => (
                <ProjectVisual
                  key={item.src + index}
                  src={item.src}
                  alt={project.title}
                  fit={item.fit}
                  size={item.size ?? "normal"}
                />
              ))}
            </div>
          </section>
        )}

        {/* VIDEO */}
        <div className="mx-auto mt-12 w-full max-w-3xl">
          <div className="mb-3 text-sm text-white/60">Project Demonstration</div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/_YLicuOzawc"
              title="Project demo video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </main>

      {/* AWARD MODAL */}
      {awardOpen && award && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
          <div className="relative no-scrollbar max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-2xl md:p-8">
            <button
              type="button"
              onClick={() => setAwardOpen(false)}
              className="absolute right-5 top-5 rounded-full border border-white/10 px-3 py-1 text-sm text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              Close
            </button>

            <p className="text-xs uppercase tracking-[0.24em] text-white/40">
              {award.organization} · {award.year}
            </p>

            <h2 className="mt-4 pr-16 text-3xl font-semibold tracking-tight md:text-4xl">
              {award.title}
            </h2>

            <p className="mt-6 whitespace-pre-line leading-8 text-white/70">
              {award.description}
            </p>

            {award.media && (
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {award.media.map((src) => (
                  <ImageBox
                    key={src}
                    src={src}
                    alt={award.title}
                    className="h-[240px]"
                    fit={src.endsWith(".gif") ? "contain" : "cover"}
                  />
                ))}
              </div>
            )}

            {award.link && (
              <a
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-full border no-scrollbar border-white/10 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                View Project Award Page
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}