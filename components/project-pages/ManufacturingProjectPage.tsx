"use client";

import Navbar from "@/components/navbar";
import ModelViewer from "@/components/ModelViewer";
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
        className={`h-auto w-full ${fit === "contain" ? "object-contain p-4" : "object-cover"
          }`}
      />
    </div>
  );
}

export default function ManufacturingProjectPage({ project }: Props) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-24 space-y-28">
        {/* HERO */}
        <header className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/40">
              {project.subtitle}
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/60">
              {project.summary}
            </p>
          </div>

          <ImageBox src={project.cover!} alt={project.title} className="max-w-md" />
        </header>

        {/* METRICS */}
        <section>
          {/* <h2 className="text-2xl font-semibold">Key Metrics</h2> */}

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {project.outcomes?.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                  {item.title}
                </p>
                <p className="mt-3 text-2xl font-semibold">{item.value}</p>
                <p className="mt-3 text-sm text-white/55">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROBLEM */}
        <section>
          <h2 className="text-3xl font-semibold">Problem Definition</h2>

          <div className="mt-6 max-w-5xl space-y-4 text-white/60 leading-8">
            <p>
              Under the research of a professor at the University of Ottawa,
              3DTO manufacturing currently relies on manual weaving of carbon
              fiber yarn along 3D structures.
            </p>

            <p>
              Operators control placement, tension, and orientation by hand,
              enabling accurate fiber deposition.
            </p>

            <p>
              <span className="text-white font-semibold">Challenge:</span>{" "}
              Replace human operation with robotic systems, requiring a bobbin
              assembly that enables reliable fiber handling, transfer, and
              precise weaving.
            </p>
          </div>

          <div className="mt-10 max-w-5xl">
            <ImageBox src="/project2/2ndoverview.webp" alt="Problem overview" />
          </div>
        </section>

        {/* BOBBIN */}
        <section>
          <h2 className="text-3xl font-semibold">Bobbin Assembly</h2>
          <h3 className="mt-6 text-2xl font-semibold">Design Overview</h3>

          <div className="mt-6 max-w-5xl space-y-4 text-white/60 leading-8">
            <p>
              The bobbin assembly serves as the core of the system, enabling
              reliable robotic handling while maintaining controlled fiber
              winding behavior.
            </p>

            <p>
              The design integrates multiple mechanical features into a compact
              structure, balancing functionality, simplicity, and
              manufacturability.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <ImageBox src="/project2/3rdview.webp" alt="Render" fit="cover" />
            <ImageBox
              src="/project2/3rdviewbut2.webp"
              alt="Robot setup"
              fit="cover"
            />
          </div>

          {/* MODEL */}
          <section className="mt-24">
            <div className="mx-auto w-full max-w-xl">
              <ModelViewer url="/project2/bobbin-model.glb" />
            </div>
          </section>
        </section>

        {/* FEATURES */}
        <section>
          <h2 className="text-3xl font-semibold">Key Design Features</h2>

          <div className="mt-8 space-y-6 text-white/60">
            <div>
              <p className="font-semibold text-white">◆ Twist-Lock Interface</p>
              <p>
                Enables fast, reliable engagement between robotic prehensers
                with tolerance to misalignment
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">◆ One-Way Bearing</p>
              <p>
                Provides controlled, unidirectional rotation for stable winding
                and transfer
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">
                ◆ Yarn Retention & Guidance
              </p>
              <p>
                Slit-based retention secures fiber, while rollers reduce
                friction and prevent damage
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">
                ◆ Anti-Twist Mechanism
              </p>
              <p>
                Maintains flat fiber orientation and eliminates torsional
                deformation
              </p>
            </div>
          </div>

          {/* FIXED IMAGES */}
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <img
                src="/project2/4thview.webp"
                alt="Fiber closeup"
                className="h-full max-h-[360px] w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <img
                src="/project2/4thview2.webp"
                alt="CAD views"
                className="h-full max-h-[560px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* CONTRIBUTIONS */}
        <section>
          <h2 className="text-3xl font-semibold">
            Engineering Focus & Contributions
          </h2>

          <ul className="mt-6 list-disc pl-6 space-y-3 text-white/60">
            <li>Contributed to mechanical design and subsystem integration</li>
            <li>
              Focused on simplifying complex functionality into reliable
              mechanical solutions
            </li>
            <li>Iterated designs based on constraints, testing, and feedback</li>
            <li>Ensured the system remained practical and manufacturable</li>
          </ul>
        </section>

        {/* RESULTS */}
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <h2 className="text-3xl font-semibold">Results & Outcome</h2>

            <ul className="mt-6 list-disc pl-6 space-y-3 text-white/60">
              <li>Delivered a fully integrated and feasible mechanical system</li>
              <li>Recognized for effective feature integration</li>
              <li>Addressed robotic fiber handling challenges</li>
              <li>Validated through working prototype</li>
            </ul>
          </div>

          <ImageBox
            src="/project2/5thview.webp"
            alt="Result"
            className="max-w-xl"

          />
        </section>

        {/* LOADING MECHANISM */}
        <section>
          <h2 className="text-3xl font-semibold">Loading Mechanism</h2>

          <p className="mt-4 max-w-4xl text-white/60 leading-8">
            A supporting system was developed to enable controlled yarn winding,
            even distribution, and accurate length measurement.
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold">Key Features</h3>
              <ul className="mt-4 list-disc pl-6 space-y-2 text-white/60">
                <li>Even distribution via linkage motion</li>
                <li>Passive tension control</li>
                <li>Twist removal rollers</li>
                <li>Length metering (encoder)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Design Approach</h3>
              <ul className="mt-4 list-disc pl-6 space-y-2 text-white/60">
                <li>Simplified system design</li>
                <li>Mechanical reliability prioritized</li>
                <li>Compatible across yarn types</li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <div className="w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <img
                src="/project2/6thview.webp"
                alt="Loading mechanism system"
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}