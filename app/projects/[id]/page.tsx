// app/projects/[id]/page.tsx

import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

import FoamCncProjectPage from "@/components/project-pages/FoamCncProjectPage";
import ManufacturingProjectPage from "@/components/project-pages/ManufacturingProjectPage";
import CompetitionProjectPage from "@/components/project-pages/CompetitionProjectPage";
import AdvancedVtolProjectPage from "@/components/project-pages/AdvancedVtolProjectPage";
import MicroAircraftProjectPage from "@/components/project-pages/MicroAircraftProjectPage";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;

  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  switch (project.id) {
    case "micro-aircraft":
      return <MicroAircraftProjectPage project={project} />;

    case "AdvancedVtolProject":
      return <AdvancedVtolProjectPage project={project} />;

    case "foam-cnc":
      return <FoamCncProjectPage project={project} />;

    case "manufacturing-project":
      return <ManufacturingProjectPage project={project} />;

    case "competition-project":
      return <CompetitionProjectPage project={project} />;

    default:
      notFound();
  }
}