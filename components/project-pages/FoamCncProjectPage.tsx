"use client";

import Navbar from "@/components/navbar";
import type { Project } from "@/lib/projects";

interface FoamCncProjectPageProps {
  project: Project;
}

type ImageSize = "small" | "normal" | "full";

function ImageBox({
  src,
  alt,
  fit = "cover",
  size = "normal",
  gallery = false,
}: {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
  size?: ImageSize;
  gallery?: boolean;
}) {
  const sizeClass = gallery
    ? "h-[260px]"
    : size === "full"
      ? "h-[380px]"
      : size === "small"
        ? "h-[240px]"
        : "h-[300px]";

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] ${sizeClass}`}
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

function renderContent(content: string) {
  if (!content.trim()) return null;

  return content.split("\n\n").map((block, index) => (
    <p key={index} className="text-base leading-8 text-white/60">
      {block}
    </p>
  ));
}

export default function FoamCncProjectPage({
  project,
}: FoamCncProjectPageProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl space-y-28 px-6 py-24">
        {/* Hero */}
        <header className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
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

          {project.cover && (
            <ImageBox src={project.cover} alt={project.title} fit="cover" />
          )}
        </header>

        {/* Outcomes */}
        {project.outcomes && project.outcomes.length > 0 && (
          <section>
            <div className="grid gap-4 md:grid-cols-3">
              {project.outcomes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                    {item.title}
                  </p>

                  <p className="mt-3 text-xl font-semibold">{item.value}</p>

                  {item.description && (
                    <p className="mt-3 text-sm leading-6 text-white/55">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Sections */}
        {project.sections?.map((section, index) => {
          const hasOneImage = section.images?.length === 1;
          const hasMultipleImages =
            section.images && section.images.length > 1;

          const isDesignAnalysis =
            section.heading.toLowerCase() === "design & analysis";

          if (isDesignAnalysis) {
            return (
              <section key={section.heading}>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/30">
                    0{index + 1}
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                    {section.heading}
                  </h2>

                  <div className="mt-6 max-w-4xl space-y-4">
                    {renderContent(section.content)}
                  </div>
                </div>

                {section.images && section.images.length > 0 && (
                  <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {section.images.map((image, imageIndex) => (
                      <ImageBox
                        key={image.src}
                        src={image.src}
                        alt={`${section.heading} image ${imageIndex + 1}`}
                        fit={image.fit ?? "cover"}
                        size={(image.size as ImageSize) ?? "normal"}
                      />
                    ))}
                  </div>
                )}
              </section>
            );
          }

          if (hasOneImage) {
            const image = section.images![0];

            return (
              <section
                key={section.heading}
                className="grid gap-10 lg:grid-cols-[1fr_520px] lg:items-center"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/30">
                    0{index + 1}
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                    {section.heading}
                  </h2>

                  <div className="mt-6 space-y-4">
                    {renderContent(section.content)}
                  </div>
                </div>

                <ImageBox
                  src={image.src}
                  alt={`${section.heading} image`}
                  fit={image.fit ?? "cover"}
                  size={(image.size as ImageSize) ?? "normal"}
                />
              </section>
            );
          }

          return (
            <section
              key={section.heading}
              className={
                hasMultipleImages
                  ? "grid gap-10 lg:grid-cols-[520px_1fr] lg:items-center"
                  : ""
              }
            >
              {hasMultipleImages && (
                <div className="grid gap-6">
                  {section.images?.map((image, imageIndex) => (
                    <ImageBox
                      key={image.src}
                      src={image.src}
                      alt={`${section.heading} image ${imageIndex + 1}`}
                      fit={image.fit ?? "cover"}
                      size={(image.size as ImageSize) ?? "normal"}
                    />
                  ))}
                </div>
              )}

              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/30">
                  0{index + 1}
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                  {section.heading}
                </h2>

                <div className="mt-6 max-w-4xl space-y-4">
                  {renderContent(section.content)}
                </div>

                {!hasMultipleImages && section.images && (
                  <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {section.images.map((image, imageIndex) => (
                      <ImageBox
                        key={image.src}
                        src={image.src}
                        alt={`${section.heading} image ${imageIndex + 1}`}
                        fit={image.fit ?? "cover"}
                        size={(image.size as ImageSize) ?? "normal"}
                      />
                    ))}
                  </div>
                )}
              </div>
            </section>
          );
        })}

        {/* Project Media */}
        {project.media && project.media.length > 0 && (
          <section>
            <p className="text-xs uppercase tracking-[0.24em] text-white/35">
              Gallery
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Project Media
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-4">
              {project.media.map((item, index) => (
                <ImageBox
                  key={`${item.src}-${index}`}
                  src={item.src}
                  alt={`${project.title} media ${index + 1}`}
                  fit={item.fit ?? "cover"}
                  size={(item.size as ImageSize) ?? "small"}
                  gallery
                />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}