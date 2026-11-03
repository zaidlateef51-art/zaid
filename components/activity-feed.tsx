"use client";

import { ActivityStack } from "@/components/activity-stack";

const FEED = [
  {
    id: 0,
    title: "First Place — Engineering Design Competition",
    meta: "University of Ottawa · 2025",
    image: "/award1.webp",
    content: (
      <p>
        Awarded first place for designing an assistive device focused on
        improving independence and accessibility for users with limited
        mobility.
      </p>
    ),
  },

  {
    id: 1,
    title: "4-Axis Foam Cutting Machine",
    meta: "Design · Analysis · CAD",
    image: "/project1.webp",
    content: (
      <p>
        Designed and built a custom 4-axis CNC hot-wire foam cutter for
        producing precise aerodynamic components used in SAE and VTOL
        projects.
      </p>
    ),
  },

  {
    id: 2,
    title: "CAD & Manufacturing Workflow",
    meta: "Fusion 360 · Prototyping",
    content: (
      <p>
        Designed structural components and motion assemblies optimized
        for 3D printing, rapid iteration, and real-world manufacturing
        constraints.
      </p>
    ),
  },
];



export default function ActivityFeed() {
  return <ActivityStack items={FEED} />;
}