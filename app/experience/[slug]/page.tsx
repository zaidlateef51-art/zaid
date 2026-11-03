import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import { experience } from "@/lib/experience";
import TilTopExperiencePage from "@/components/experience-pages/TilTopExperiencePage";
import AeroLeadExperiencePage from "@/components/experience-pages/AeroLeadExperiencePage";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ExperienceSlugPage({ params }: Props) {
  const { slug } = await params;

  const item = experience.find((e) => e.id === slug);

  if (!item) return notFound();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {item.id === "tiltop-roof" ? (
        <TilTopExperiencePage item={item} />
      ) : item.id === "aero-lead" ? (
        <AeroLeadExperiencePage item={item} />
      ) : (
        <main className="mx-auto max-w-4xl px-6 py-24">
          <h1 className="text-3xl font-semibold">{item.role}</h1>
          <p className="mt-2 text-white/60">{item.company}</p>

          <div className="mt-4 text-sm text-white/50">
            {item.period} · {item.focus}
          </div>

          <p className="mt-10 leading-relaxed text-white/80">
            {item.description}
          </p>
        </main>
      )}
    </div>
  );
}