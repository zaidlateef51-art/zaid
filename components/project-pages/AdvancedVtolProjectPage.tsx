"use client";

import Navbar from "@/components/navbar";
import type { Project } from "@/lib/projects";

interface Props {
  project: Project;
}

function ImageBox({
  src,
  alt,
  fit = "cover",
  gallery = false,
}: {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
  gallery?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl bg-white/[0.03] ${gallery ? "h-[190px]" : "h-[300px]"
        }`}
    >
      <img
        src={src}
        alt={alt}
        className={`h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"
          }`}
      />
    </div>
  );
}

function getYouTubeEmbedUrl(url: string) {
  if (url.includes("youtube.com/embed/")) return url;

  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  if (url.includes("watch?v=")) {
    const id = url.split("watch?v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  return url;
}

function VideoBox({ url }: { url: string }) {
  const embedUrl = getYouTubeEmbedUrl(url);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <iframe
        src={embedUrl}
        title="VTOL flight demonstration"
        className="aspect-video w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

function SkillsSection({ content }: { content: string }) {
  const skills = content
    .split("\n")
    .map((skill) => skill.replace("•", "").trim())
    .filter(Boolean);

  return (
    <section className="mt-28 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
      <p className="text-xs uppercase tracking-[0.24em] text-white/35">
        Skills Demonstrated
      </p>

      <div className="mt-6 grid gap-3 text-sm text-white/65 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <p key={skill}>• {skill}</p>
        ))}
      </div>
    </section>
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

export default function AdvancedVtolProjectPage({ project }: Props) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl space-y-28 px-6 py-24">
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

                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.sections?.map((section) => {
          const isSkills = section.heading.toLowerCase().includes("skills");
          const isGallery = section.heading.toLowerCase().includes("gallery");
          const hasOneImage = section.images?.length === 1;

          if (isSkills) {
            return <SkillsSection key={section.heading} content={section.content} />;
          }

          if (isGallery) {
            return (
              <section key={section.heading}>
                <h2 className="text-3xl font-semibold">{section.heading}</h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {section.images?.map((image, index) => (
                    <ImageBox
                      key={image.src}
                      src={image.src}
                      alt={`${section.heading} image ${index + 1}`}
                      fit={image.fit ?? "cover"}
                      gallery
                    />
                  ))}
                </div>
              </section>
            );
          }

          if (section.videoUrl) {
            return (
              <section
                key={section.heading}
                className="grid gap-10 lg:grid-cols-[1fr_520px] lg:items-center"
              >
                <div>
                  <h2 className="text-3xl font-semibold">{section.heading}</h2>

                  <div className="mt-6 space-y-4">
                    {renderContent(section.content)}
                  </div>
                </div>

                <VideoBox url={section.videoUrl} />
              </section>
            );
          }

          if (hasOneImage) {
            const image = section.images![0];

            return (
              <section
                key={section.heading}
                className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center"
              >
                <div>
                  <h2 className="text-3xl font-semibold">{section.heading}</h2>

                  <div className="mt-6 space-y-4">
                    {renderContent(section.content)}
                  </div>
                </div>

                <ImageBox
                  src={image.src}
                  alt={`${section.heading} image`}
                  fit={image.fit ?? "cover"}
                />
              </section>
            );
          }

          return (
            <section key={section.heading}>
              <h2 className="text-3xl font-semibold">{section.heading}</h2>

              <div className="mt-6 max-w-5xl space-y-4">
                {renderContent(section.content)}
              </div>

              {section.images && section.images.length > 0 && (
                <div className="mt-10 grid items-center gap-8 md:grid-cols-2">
                  {section.images.map((image, index) => (
                    <ImageBox
                      key={image.src}
                      src={image.src}
                      alt={`${section.heading} image ${index + 1}`}
                      fit={image.fit ?? "cover"}
                    />
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </main>
    </div>
  );
}