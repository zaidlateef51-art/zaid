"use client";

import { useState } from "react";
import Link from "next/link";
import type { Experience } from "@/lib/experience";
import { awards } from "@/lib/awards";

interface Props {
  item: Experience;
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

export default function AeroLeadExperiencePage({ item }: Props) {
  const [awardOpen, setAwardOpen] = useState(false);
  const award = awards.find((a) => a.id === 1);

  return (
    <>
      <main className="mx-auto max-w-6xl px-6 py-24 space-y-28">
        {/* HERO */}
        <header className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/40">
              {item.company}
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              {item.role}
            </h1>

            <p className="mt-4 text-sm text-white/50">
              {item.period} · {item.focus}
            </p>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/60">
              {item.description}
            </p>
          </div>

          <ImageBox
            src={item.cover}
            alt={item.role}
            className="h-[340px] max-w-xl"
            fit="contain"
          />
        </header>

        {/* OVERVIEW */}
        <section>
          <h2 className="text-3xl font-semibold">Overview</h2>

          <div className="mt-6 max-w-5xl space-y-4 text-white/60 leading-8">
            <p>
              I serve as Co-Captain & Pilot for uOttawa Aeronautics, helping
              lead the design, manufacturing, and flight operations of
              competitive aircraft for the SAE Aero Design Competition.
            </p>

            <p>
              My role grew from team member and pilot into a leadership position
              focused on technical direction, team coordination, build
              execution, and competition readiness.
            </p>

            <p>
              I oversee key parts of airframe design, structural optimization,
              and system integration while also directing flight testing and
              serving as competition pilot.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <ImageBox
              src="/experience1/aerowork.webp"
              alt="Working on aircraft"
              className="h-[260px] w-full max-w-xl"
            />
          </div>
        </section>

        {/* ROLE PROGRESSION */}
        <section>
          <h2 className="text-3xl font-semibold">Role Progression</h2>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h3 className="text-2xl font-semibold">
              2024–2025 Season — Team Member & Pilot
            </h3>

            <p className="mt-4 leading-8 text-white/60">
              Contributed to the team’s first full competition cycle,
              supporting Micro and Advanced aircraft development, successful
              test flights, and competition preparation in Texas.
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-white/60">
              <li>Participated in aircraft construction and final assembly</li>
              <li>Provided design input during late-stage development</li>
              <li>Supported flight testing and aircraft validation</li>
              <li>Helped bring both aircraft from concept to flight</li>
            </ul>

            <p className="mt-6 text-sm leading-7 text-white/70">
              <span className="font-semibold text-white">Impact:</span> Helped
              support the team’s first-ever competition participation.
            </p>

            <div className="mt-6">
              <Link
                href="https://aeronautics.uottawa.xyz/competition/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                View uOttawa Aeronautics Competition Page
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <ImageBox
              src="/experience1/aero1.webp"
              alt="uOttawa Aeronautics aircraft and team"
              className="h-[210px]"
            />
            <ImageBox
              src="/experience1/aero2.webp"
              alt="Aircraft render"
              className="h-[210px]"
            />
            <ImageBox
              src="/experience1/aero3.webp"
              alt="Competition field"
              className="h-[210px]"
            />
            <ImageBox
              src="/experience1/aero4.webp"
              alt="Aircraft assembly"
              className="h-[210px]"
            />
          </div>
        </section>

        {/* 2025-2026 */}
        <section>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h2 className="text-3xl font-semibold">
              2025–2026 Season — Team Lead & Pilot
            </h2>

            <p className="mt-4 leading-8 text-white/60">
              Stepped into a leadership role overseeing both Micro and Advanced
              class teams as Co-Captain, responsible for technical execution and
              team coordination.
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-white/60">
              <li>
                Led airframe design decisions, including structure, materials,
                and aerodynamic configuration
              </li>
              <li>
                Coordinated manufacturing, integration, and subsystem alignment
              </li>
              <li>
                Directed 20+ flight testing sessions to refine performance and
                reliability
              </li>
              <li>
                Managed team workflow, timelines, and competition readiness
              </li>
              <li>Served as competition pilot during scored flights</li>
            </ul>

            <p className="mt-6 text-sm leading-7 text-white/70">
              <span className="font-semibold text-white">Impact:</span> Helped
              lead the team to its first international podium finish —{" "}
              <button
                type="button"
                onClick={() => setAwardOpen(true)}
                className="underline underline-offset-4 transition hover:text-white"
              >
                3rd in Presentation, 6th Overall (Micro Class)
              </button>
              .
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <ImageBox
              src="/experience1/aero5.webp"
              alt="SAE Aero Design team"
              className="h-[320px]"
            />
            <ImageBox
              src="/experience1/aero6.webp"
              alt="Competition aircraft team"
              className="h-[320px]"
            />
          </div>
        </section>

        {/* TEAM GROWTH */}
        <section>
          <h2 className="text-3xl font-semibold">Team Growth & Leadership</h2>

          <p className="mt-6 max-w-4xl leading-8 text-white/60">
            Beyond technical work, I helped strengthen the team environment by
            supporting onboarding, mentoring newer members, and improving design
            workflows.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-start">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <ul className="list-disc space-y-3 pl-6 text-white/60">
                <li>Organized CAD training sessions and design workshops</li>
                <li>Supported onboarding and mentorship for newer members</li>
                <li>Improved team communication and workflow consistency</li>
                <li>
                  Helped build a stronger culture of accountability and
                  technical development
                </li>
              </ul>

              <p className="mt-6 text-sm leading-7 text-white/70">
                <span className="font-semibold text-white">Impact:</span>{" "}
                Expanded team capability and improved consistency across design
                and manufacturing efforts.
              </p>
            </div>

            <ImageBox
              src="/experience1/aero7.webp"
              alt="Team growth and leadership"
              className="h-[320px] md:h-[360px]"
            />
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h2 className="text-3xl font-semibold">2025–2026 Aircraft Projects</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <ImageBox
                src="/project5/micro.webp"
                alt="SAE Micro aircraft"
                className="h-[360px]"
              />

              <h3 className="mt-6 text-2xl font-semibold">
                SAE Micro Class Aircraft
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/60">
                Lightweight aircraft optimized for payload efficiency and short
                takeoff performance.
              </p>

              <Link
                href="/projects/micro-aircraft"
                className="mt-5 inline-block text-sm font-medium text-white underline underline-offset-4"
              >
                View Project
              </Link>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <ImageBox
                src="/project4/vtol2.webp"
                alt="SAE Advanced VTOL aircraft"
                className="h-[360px]"
              />

              <h3 className="mt-6 text-2xl font-semibold">
                SAE Advanced Class VTOL Aircraft
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/60">
                Tilt-rotor tri-copter platform combining vertical takeoff and
                fixed-wing flight.
              </p>

              <Link
                href="/projects/AdvancedVtolProject"
                className="mt-5 inline-block text-sm font-medium text-white underline underline-offset-4"
              >
                View Project
              </Link>
            </div>
          </div>
        </section>

        {/* FUTURE WORK */}
        <section>
          <h2 className="text-3xl font-semibold">Future Work</h2>

          <p className="mt-4 text-white/50">2026–2027 Season</p>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-white/60">
            <li>Continue growing team membership and technical capability</li>
            <li>Expand manufacturing methods to improve build quality</li>
            <li>Improve aerodynamic performance and system integration</li>
            <li>Scale design workflows, training, and team processes</li>
          </ul>
        </section>
      </main>

      {/* AWARD MODAL */}
      {awardOpen && award && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
          <div className="relative max-h-[88vh] w-full max-w-4xl overflow-y-auto no-scrollbar rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-2xl md:p-8">
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
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {award.media.map((src) => (
                  <ImageBox
                    key={src}
                    src={src}
                    alt={award.title}
                    className="h-[220px]"
                  />
                ))}
              </div>
            )}

            {award.link && (
              <a
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                View Official SAE Results
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}