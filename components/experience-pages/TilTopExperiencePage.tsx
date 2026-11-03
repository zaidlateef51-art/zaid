"use client";

import Image from "next/image";
import type { Experience } from "@/lib/experience";

export default function TilTopExperiencePage({
  item,
}: {
  item: Experience;
}) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      {/* HERO */}
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            Experience
          </p>

          <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
            {item.role}
          </h1>

          <p className="mt-4 text-lg text-white/60">{item.company}</p>

          <div className="mt-5 flex flex-wrap gap-3 text-sm text-white/60">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              {item.period}
            </span>

            {item.position && (
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                {item.position}
              </span>
            )}

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              {item.focus}
            </span>
          </div>

          <p className="mt-8 max-w-2xl leading-relaxed text-white/75">
            {item.description}
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <Image
            src={item.cover}
            alt={item.company}
            width={900}
            height={650}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </section>

      {/* METRICS */}
      {item.metrics && (
        <section className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {item.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/4 p-6"
            >
              <p className="text-3xl font-semibold">{metric.value}</p>
              <p className="mt-2 text-sm text-white/50">{metric.label}</p>
            </div>
          ))}
        </section>
      )}

      {/* SKILLS */}
      {item.skills && (
        <section className="mt-20">
          <h2 className="text-2xl font-semibold">Technical Skills Applied</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {item.skills.map((skill) => (
              <div
                key={skill.title}
                className="rounded-2xl border border-white/10 bg-white/4 p-6"
              >
                <h3 className="font-medium">{skill.title}</h3>

                <ul className="mt-4 space-y-3 text-sm text-white/65">
                  {skill.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* RESPONSIBILITIES */}
{item.responsibilities && (
  <section className="mt-20 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
    <div className="lg:sticky lg:top-28">
      <p className="text-sm uppercase tracking-[0.25em] text-white/35">
        Responsibilities
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight">
        Core Responsibilities
      </h2>

      <div className="mt-5 h-1 w-16 rounded-full bg-white/20" />

      <p className="mt-6 max-w-sm text-sm leading-6 text-white/55">
        Key responsibilities handled during inspections, roof analysis, and
        client reporting.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-4 sm:p-6">
      <div className="divide-y divide-white/10">
        {item.responsibilities.map((point, index) => (
          <div
            key={point}
            className="grid gap-4 py-5 first:pt-2 last:pb-2 sm:grid-cols-[48px_1fr] sm:items-start"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-sm font-medium text-white/45">
              {String(index + 1).padStart(2, "0")}
            </div>

            <p className="max-w-3xl text-sm leading-7 text-white/72 md:text-base">
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
)}

      {/* INTERACTIONS */}
      {item.interactions && (
        <section className="mt-20 rounded-3xl border border-white/10 bg-white/4 p-8">
          <h2 className="text-2xl font-semibold">Client & Team Interaction</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {item.interactions.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-white/10 bg-black/30 p-5 text-sm text-white/65"
              >
                {point}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SHOWCASE (SIDE-BY-SIDE IMAGES) */}
      {item.showcase && (
        <section className="mt-24 space-y-16">
          {item.showcase.map((block, index) => (
            <div
              key={block.title}
              className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <Image
                  src={block.image}
                  alt={block.title}
                  width={1000}
                  height={700}
                  className="h-full max-h-[440px] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/4 p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-white/35">
                  0{index + 1}
                </p>

                <h2 className="mt-4 text-2xl font-semibold">
                  {block.title}
                </h2>

                <p className="mt-4 text-white/65">
                  {block.text}
                </p>
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}