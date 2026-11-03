export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  focus: string;
  description: string;
  cover: string;

  position?: string;

  metrics?: {
    value: string;
    label: string;
  }[];

  skills?: {
    title: string;
    bullets: string[];
  }[];

  responsibilities?: string[];
  interactions?: string[];

  showcase?: {
    title: string;
    text: string;
    image: string;
  }[];
}

export const experience: Experience[] = [
  {
    id: "aero-lead",
    role: "Co-Captain & Pilot",
    company: "uOttawa Aeronautics",
    period: "Sep. 2024 – Present",
    focus: "Structural Design · Flight Operations · Team Leadership",
    description:
      "Serve as Co-Captain & Pilot for uOttawa Aeronautics, leading aircraft design, manufacturing, team coordination, and flight operations for SAE Aero Design competition aircraft. Progressed from team member and pilot into a leadership role responsible for technical direction, build execution, testing, and competition readiness.",
    cover: "/experience1/logoaero.webp",
  },

  {
    id: "tiltop-roof",
    role: "UAV Roof Inspection Technician",
    company: "TilTop Roofing",
    period: "May 2024 – Sep. 2025",
    focus: "UAV Inspection · Roof Geometry · Estimation Support",
    description:
      "Conducted UAV-based residential roof inspections to identify roof damage, measure roof geometry, and support repair cost estimation. Combined aerial imaging with geometric reasoning to assess roof condition, detect defects, and prepare data for material and pricing quotations.",
    cover: "/tilt/TILT.webp",

    position: "Part-time / Contract",

    metrics: [
      { value: "500+", label: "Roof Inspections" },
      { value: "1.1M+ sq ft", label: "Roof Area Inspected" },
      { value: "$8k–$18k", label: "Quote Value Range" },
      { value: "15,000+", label: "Inspection Images" },
    ],

    skills: [
      {
        title: "UAV & Data Acquisition",
        bullets: [
          "Planned drone flights for full roof coverage and safe operation.",
          "Captured top-down and angled imagery for inspection and measurement.",
        ],
      },
      {
        title: "Engineering & Analysis",
        bullets: [
          "Interpreted roof geometry by identifying planes, ridges, and valleys.",
          "Estimated roof area using grid overlays and pitch adjustments.",
          "Turned inspection imagery into inputs for material and cost estimates.",
        ],
      },
      {
        title: "Data & Workflow Management",
        bullets: [
          "Organized and reviewed large image sets for each inspection.",
          "Kept documentation consistent for estimation and client use.",
        ],
      },
      {
        title: "Client & CRM Tools",
        bullets: [
          "Used Sales Rabbit and HubSpot to manage inspection records, client information, and project status.",
          "Logged inspection data and follow-ups to track projects from inspection to quotation.",
        ],
      },
    ],

    responsibilities: [
      "Operated UAVs to capture high-resolution top-down and angled imagery of residential roofing systems.",
      "Inspected roofs for damage including missing shingles, wind-lifted shingles, and localized material deterioration.",
      "Analyzed ridges, valleys, roof planes, and penetrations needed for area calculations.",
      "Captured imagery used for roof area estimation and material quantity takeoffs.",
      "Managed image datasets so observations could be traced back to final estimates.",
      "Documented findings and shared results with internal teams and clients to support repair planning and quotations.",
    ],

    interactions: [
      "Worked directly with clients to explain inspection findings, damage locations, and repair scope.",
      "Communicated technical observations clearly to non-technical audiences.",
      "Coordinated with internal teams to align inspection data with estimation and scheduling needs.",
    ],

    showcase: [
      {
        title: "Roof Measurement & Estimation",
        text: "Used aerial roof imagery to support area measurements, pitch review, and quote preparation for residential roofing projects.",
        image: "/tilt/inspection.webp",
      },
      {
        title: "Top-Down Roof Inspection",
        text: "Captured full roof coverage from above to identify roof planes, ridges, valleys, penetrations, and visible damage patterns.",
        image: "/tilt/topside.webp",
      },
      {
        title: "Live UAV Field Operation",
        text: "Operated drone equipment on-site while monitoring flight position, image framing, and roof visibility during inspections.",
        image: "/tilt/drone.webp",
      },
      {
        title: "Damage Documentation",
        text: "Collected close inspection images showing missing shingles, lifted material, and localized roof deterioration for repair planning.",
        image: "/tilt/collage.webp",
      },
    ],
  }
];
