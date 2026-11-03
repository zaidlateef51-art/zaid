import Navbar from "@/components/navbar";
import ProjectShowcase from "@/components/ProjectShowcase";
import ProjectTrail from "@/components/ProjectTrail";
import { projects } from "@/lib/projects";

const delayMap = ["animate-delay-0", "animate-delay-100", "animate-delay-200", "animate-delay-300", "animate-delay-500"];

export default function ProjectsPage() {
  return (
    <div className="bg-black text-white">
      <Navbar />

      <main>
        {/* Intro */}
        <header
          className="
            mx-auto max-w-5xl px-6 py-24 text-center
            animate-fade-down animate-once animate-duration-500 animate-fill-forwards
          "
        >
          <h1 className="text-4xl font-semibold tracking-tight">
            Projects
          </h1>
          <p className="mt-4 text-sm text-white/60">
            Selected engineering work focused on design, manufacturing,
            and applied problem-solving.
          </p>
        </header>

        {/* Project sections */}
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`
              ${index === 0 ? "-mt-24" : ""}
              animate-fade-up animate-once animate-duration-700 animate-fill-forwards
              ${delayMap[Math.min(index, delayMap.length - 1)]}
            `}
          >
            <ProjectShowcase
              id={project.id}
              title={project.title}
              subtitle={project.subtitle}
              summary={project.summary}
              image={project.cover ?? "/placeholder.webp"}
            />

            {index < projects.length - 1 && (
              <div className="animate-fade-up animate-once animate-duration-500 animate-fill-forwards animate-delay-200">
                <ProjectTrail />
              </div>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}
