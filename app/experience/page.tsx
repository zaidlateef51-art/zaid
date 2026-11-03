import Navbar from "@/components/navbar";
import ExperienceShowcase from "@/components/ExperienceShowcase";
import ProjectTrail from "@/components/ProjectTrail";
import { experience } from "@/lib/experience";

const delayMap = [
  "animate-delay-0",
  "animate-delay-100",
  "animate-delay-200",
  "animate-delay-300",
];

export default function ExperiencePage() {
  return (
    <div className="bg-black text-white">
      <Navbar />

      <main>
        <header
          className="
            mx-auto max-w-5xl px-6 py-24 text-center
            animate-fade-down animate-once animate-duration-500 animate-fill-forwards
          "
        >
          <h1 className="text-4xl font-semibold tracking-tight">
            Experience
          </h1>

          <p className="mt-4 text-sm text-white/60">
            Selected professional and academic engineering experience.
          </p>
        </header>

        {experience.map((item, index) => (
          <div
            key={item.id}
            className={`
              ${index === 0 ? "-mt-24" : ""}
              animate-fade-up animate-once animate-duration-700 animate-fill-forwards
              ${delayMap[Math.min(index, delayMap.length - 1)]}
            `}
          >
            <ExperienceShowcase
              id={item.id}
              title={item.role}
              subtitle={item.company}
              summary={item.description}
              image={item.cover}
              period={item.period}
            />

            {index < experience.length - 1 && (
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