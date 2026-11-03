// lib/projects.ts

export type ProjectOutcome = {
  title: string;
  value: string;
  description?: string;
};

export type ProjectSection = {
  heading: string;
  content: string;
  images?: ProjectImage[];
};

export interface ProjectImage {
  src: string;
  fit?: "cover" | "contain";
  size?: "full" | "wide" | "normal" | "small";
  ratio?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  cover?: string;
  videoUrl?: string;
  skills?: string[];

  outcomes?: {
    title: string;
    value: string;
    description?: string;
  }[];

  sections?: {
    heading: string;
    content: string;
    images?: ProjectImage[];
    videoUrl?: string;
  }[];

  media?: ProjectImage[];
}

export const projects: Project[] = [
  {
    id: "manufacturing-project",
    title: "Carbon Fiber Bobbin Assembly System",
    subtitle: "Mechanical design for robotic handling and controlled fiber winding",
    cover: "/project2/firstoverview.webp",

    summary:
      "Designed a mechanically integrated bobbin system for robotic handling and controlled carbon fiber winding, addressing key challenges in alignment, tension control, and twist prevention. The final design was recognized as a feasible and practical solution, successfully meeting client requirements for reliability, manufacturability, and system integration.",

    outcomes: [
      {
        title: "Yarn Compatibility",
        value: "0.25 × 4 mm",
        description: "Supports flat carbon fiber ribbon geometry",
      },
      {
        title: "Misalignment Tolerance",
        value: "±10 mm · ±10°",
        description:
          "Maintains reliable robotic engagement under imperfect alignment",
      },
      {
        title: "System Envelope",
        value: "≤ 30 × 30 × 30 cm",
        description: "Compact design for constrained robotic workspace",
      },
      {
        title: "Subsystem Integration",
        value: "3+ functions",
        description:
          "Handling, rotation control, and yarn management combined into one assembly",
      },
    ],

    sections: [
      {
        heading: "Problem Definition",
        content:
          "Under the research of a professor at the University of Ottawa, 3DTO manufacturing currently relies on manual weaving of carbon fiber yarn along 3D structures. Operators control placement, tension, and orientation by hand, enabling accurate fiber deposition. Challenge: Replace human operation with robotic systems, requiring a bobbin assembly that enables reliable fiber handling, transfer, and precise weaving.",
        images: [
          { src: "/project2/2ndoverview.webp", fit: "cover", size: "full" },
        ],
      },
      {
        heading: "Bobbin Assembly",
        content:
          "The bobbin assembly serves as the core of the system, enabling reliable robotic handling while maintaining controlled fiber winding behavior. The design integrates multiple mechanical features into a compact structure, balancing functionality, simplicity, and manufacturability.",
        images: [
          { src: "/project2/3rdview.webp", fit: "contain", size: "small" },
          { src: "/project2/3rdviewbut2.webp", fit: "contain", size: "small" },
        ],
      },
      {
        heading: "Key Design Features",
        content:
          "Twist-Lock Interface: Enables fast, reliable engagement between robotic prehensers with tolerance to misalignment. One-Way Bearing: Provides controlled, unidirectional rotation for stable winding and transfer. Yarn Retention & Guidance: Slit-based retention secures fiber, while rollers reduce friction and prevent damage. Anti-Twist Mechanism: Maintains flat fiber orientation and eliminates torsional deformation.",
        images: [
          { src: "/project2/4thview.webp", fit: "contain", size: "small" },
          { src: "/project2/4thview2.webp", fit: "contain", size: "normal" }
        ],
      },
      {
        heading: "Engineering Focus & Contributions",
        content:
          "Contributed to mechanical design and subsystem integration. Focused on simplifying complex functionality into reliable mechanical solutions. Iterated designs based on constraints, testing, and client feedback. Ensured the system remained practical and manufacturable.",
        images: [
          // { src: "/project2/4thview2.webp", fit: "contain", size: "normal" },
        ],
      },
      {
        heading: "Results & Outcome",
        content:
          "Delivered a fully integrated and feasible mechanical system. Recognized by the client for effective feature integration and compact design. Successfully addressed key challenges in robotic fiber handling. Produced a working physical prototype, validating core functionality.",
        images: [
          { src: "/project2/5thview.webp", fit: "contain", size: "normal" },
        ],
      },
      {
        heading: "Loading Mechanism",
        content:
          "A supporting system was developed to enable controlled yarn winding, even distribution, and accurate length measurement. Key features included even distribution using linkage-based motion, passive tension-controlled winding, twist removal via roller system, and length metering using encoder integration. The design approach simplified the system by removing unnecessary complexity, prioritized mechanical reliability over electronics, and ensured compatibility with varying yarn types and conditions.",
        images: [
          { src: "/project2/bobbin-model.glb", size: "normal" },
        ],
      },
    ],
  },

  {
    id: "micro-aircraft",
    title: "SAE Aero Design Micro Class Aircraft",
    subtitle:
      "Design, manufacturing, and flight testing of a lightweight payload-focused aircraft",
    cover: "/project5/micro.webp",

    summary:
      "Developed a lightweight fixed-wing aircraft for the SAE Aero Design Competition Micro Class, optimized for payload efficiency, short takeoff performance, and rapid iteration under strict power constraints.",

    outcomes: [
      {
        title: "Competition Performance",
        value: "6th Overall",
        description: "Placed 6th overall internationally",
      },
      {
        title: "Technical Presentation",
        value: "3rd Place",
        description: "Earned 3rd place in presentation",
      },
      {
        title: "Manufacturing Impact",
        value: "~50% Faster",
        description: "Reduced prototyping time through CNC tooling",
      },
      {
        title: "Flight Testing",
        value: "20+ Flights",
        description: "Validated performance through repeated testing",
      },
    ],

    sections: [
      {
        heading: "Overview",
        content:
          "Contributions focused on design support, in-house manufacturing development, and flight operations, including the development of a custom CNC system to accelerate aerodynamic prototyping. The project emphasized continuous iteration, practical manufacturing, and consistent flight performance, resulting in a competitive and reliable aircraft platform.",
        images: [
          { src: "/project5/micro8.webp", fit: "cover", size: "full" },
        ],
      },
      {
        heading: "My Focus: Manufacturing, Design & Flight Operations",
        content:
          "Contributed across design, manufacturing, and flight operations, with emphasis on rapid iteration and reliable performance. Designed and built a custom 4-axis CNC foam cutter for aerodynamic component fabrication, conducted continuous flight testing, contributed to tail configuration and supporting components, supported full aircraft assembly, and served as primary pilot for testing and competition flights. The CNC system became a key enabler of fast prototyping, improving both build speed and consistency of aerodynamic components.",
        images: [
          { src: "/project5/randomphoto.webp", fit: "cover", size: "small" },
          { src: "/project5/micro10.webp", fit: "cover", size: "small" },
        ],
      },
      {
        heading: "Design & Manufacturing Approach",
        content:
          "The aircraft was developed around an in-house CNC manufacturing workflow, rapid design-test cycles, lightweight airframe design, and flight-driven validation. The 4-axis foam cutter helped produce consistent wing and fuselage components while enabling faster refinement between tests.",
        images: [
          { src: "/project5/micro7.webp", fit: "cover", size: "normal" },
          { src: "/project5/foam9.webp", fit: "cover", size: "normal" },
        ],
      },
      {
        heading: "Results & Outcome",
        content:
          "Delivered a competitive and reliable aircraft, achieving 6th place internationally and 3rd place in technical presentation. Performance was validated through consistent flight testing, demonstrating strong takeoff characteristics and stable flight behavior. The project established an effective workflow combining in-house manufacturing, rapid iteration, and flight validation.",
        images: [
          { src: "/project5/microtest.webp", fit: "cover", size: "normal" },
        ],
      },
    ],

    skills: [
      "Aircraft Design & Flight Testing",
      "Manufacturing System Development",
      "CAD Modeling & Design Iteration",
      "Rapid Prototyping Workflows",
      "CNC Machine Design & Fabrication",
      "Mechanical Assembly & Integration",
    ],
  },

  {
    id: "AdvancedVtolProject",
    title: "SAE Aero Design Advanced Class VTOL Aircraft",
    subtitle:
      "Fuselage design, CAD development, and system integration for a hybrid tilt-rotor aircraft",
    cover: "/project4/vtol2.webp",

    summary:
      "Developed a hybrid VTOL aircraft for the SAE Aero Design Competition Advanced Class, capable of vertical takeoff and transition to fixed-wing flight. Primary contributions focused on CAD development of the fuselage and overall aircraft architecture, supporting integration of propulsion, control systems, and structural components within a compact airframe.",

    outcomes: [
      {
        title: "Aircraft Scale",
        value: "1.2 m Wingspan · 0.89 m Length",
        description:
          "Compact airframe designed for stable low-speed flight and VTOL transition.",
      },
      {
        title: "Aerodynamic Design",
        value: "0.18 m² Wing Area · 50 km/h Cruise",
        description:
          "Optimized for controllability and efficient lift generation in low-speed flight.",
      },
      {
        title: "Structural Architecture",
        value: "Hybrid Monocoque + Internal Frame",
        description:
          "3D printed aerodynamic shell paired with laser-cut wooden structure for strength and manufacturability.",
      },
    ],

    sections: [
      {
        heading: "Overview",
        content:
          "Developed a hybrid VTOL aircraft for the SAE Aero Design Competition Advanced Class, capable of vertical takeoff and transition to fixed-wing flight.\n\nThe project required balancing aerodynamic performance, structural integrity, and manufacturability, resulting in a fully integrated aircraft platform capable of stable hover and transition flight.",
        images: [
          {
            src: "/project4/vtol.webp",
            fit: "cover",
            size: "full",
          },
        ],
      },

      {
        heading: "My Focus: Fuselage Design & CAD",
        content:
          "Led the design of the aircraft fuselage, with additional contributions across overall aircraft configuration and system integration.\n\nDesigned a semi-monocoque fuselage to balance aerodynamic efficiency and structural strength. Developed internal structures to support load paths, mounting points, and subsystem integration. Designed geometry specifically for additive manufacturing, enabling rapid iteration and complex internal features. Integrated laser-cut wooden internal supports to improve rigidity while maintaining low weight.\n\nThe fuselage served as the central integration point of the aircraft, requiring careful coordination between mechanical, structural, and control system requirements.",
        images: [
          {
            src: "/project4/vtolgif.gif",
            fit: "cover",
            size: "normal",
          },
          {
            src: "/project4/vtol3.webp",
            fit: "cover",
            size: "normal",
          },
        ],
      },

      {
        heading: "Design Approach",
        content:
          "Aerodynamic Monocoque Structure\nThe fuselage was designed as a streamlined outer shell that contributes to both aerodynamic performance and structural load distribution, reducing drag while minimizing internal complexity.\n\nHybrid Manufacturing Strategy\nA combination of 3D printed external geometry and laser-cut internal supports was used to balance manufacturability, strength, and iteration speed.\n\nSystem Integration\nThe fuselage was designed to house avionics, propulsion interfaces, and structural members within a constrained volume, requiring efficient spatial planning and accessibility.\n\nIterative CAD Development\nMultiple design iterations were performed to resolve integration conflicts, refine geometry, and ensure the final design could be reliably manufactured and assembled.",
        images: [
          {
            src: "/project4/vtolcool.gif",
            fit: "cover",
            size: "normal",
          },
        ],
      },

      {
        heading: "Results & Outcome",
        content:
          "Delivered a fully integrated VTOL aircraft platform, contributing to successful hover and transition flight testing.\n\nValidated key design decisions in fuselage structure, system integration, and manufacturability, resulting in a buildable and flight-capable airframe.\n\nEstablished a strong foundation for future iterations and performance improvements within the team.",
        videoUrl: "https://youtu.be/KvO1wIxM_-Q",
      },

      {
        heading: "Project Gallery",
        content: "",
        images: [
          {
            src: "/project4/vtolgal.webp",
            fit: "cover",
            size: "small",
          },
          {
            src: "/project4/vtolgal2.webp",
            fit: "cover",
            size: "small",
          },
          {
            src: "/project4/vtolgal3.webp",
            fit: "cover",
            size: "small",
          },
          {
            src: "/project4/vtolgal4.webp",
            fit: "cover",
            size: "small",
          },
        ],
      },

      {
        heading: "Skills Demonstrated",
        content:
          "• Airframe & Fuselage Design\n• System Integration & Packaging\n• CAD Modeling (Fusion 360 / SolidWorks)\n• Design for Manufacturing (DFM)\n• Additive & Hybrid Manufacturing\n• Iterative Design & Testing",
      },
    ],
  },

  {
    id: "foam-cnc",
    title: "4-Axis Foam Cutting Machine",
    subtitle: "End-to-end design and implementation of a 4-axis CNC foam cutting machine for fast, repeatable aerodynamic component fabrication",
    cover: "/project1/project1.webp",

    summary:
      "Designed and built a 4-axis CNC foam cutting machine for rapid fabrication of aerodynamic components used in SAE and VTOL projects.",

    outcomes: [
      {
        title: "Precision",
        value: "±0.5 mm",
        description: "Cutting accuracy for aerodynamic foam components",
      },
      {
        title: "Efficiency",
        value: "~50%",
        description: "Reduction in prototyping time vs manual cutting",
      },
      {
        title: "Application",
        value: "SAE & VTOL",
        description: "Used for vehicle bodies and wing development",
      },
    ],

    sections: [
      {
        heading: "Project Overview",
        content:
          "This project involved the design and construction of a custom 4-axis CNC hot-wire foam cutting machine intended for rapid fabrication of aerodynamic components. The system was primarily developed to manufacture wing sections and fuselage profiles for SAE competition vehicles and personal VTOL aircraft projects, while remaining flexible enough for broader prototyping applications. The machine enables synchronized motion across four axes, allowing complex tapered geometries to be cut accurately and repeatably from foam stock.",
        images: [
          { src: "/project1/overview.webp", fit: "cover", size: "full" },
        ],
      },

      {
        heading: "Problem Definition",
        content:
          "Aerodynamic prototyping for student competition teams typically relies on manual hot-wire cutting or outsourced CNC services, both of which introduce limitations. Manual methods lack repeatability and precision, while commercial multi-axis CNC foam cutters are cost-prohibitive and inaccessible for student teams. The challenge was to create a low-cost, in-house manufacturing solution capable of producing accurate airfoil and fuselage geometries without sacrificing flexibility, precision, or iteration speed.",
        images: [
          { src: "/project1/problem.webp", fit: "cover", size: "full" },
        ],
      },

      {
        heading: "Design & Analysis",
        content:
          "The machine was designed from scratch in CAD, including the structural frame, axis layout, bearing mounts, and hot-wire carriage system. Components were modeled in Fusion 360 with attention to rigidity, alignment, and synchronized four-axis motion, achieving ±0.5 mm cutting accuracy.",
        images: [
          { src: "/project1/render1.webp", fit: "cover", size: "normal" },
          { src: "/project1/render2.webp", fit: "cover", size: "normal" },
        ],
      },

      {
        heading: "Software & Toolchain Integration",
        content:
          "Aerodynamic geometry generation was handled using specialized foam-cutting software. Open aerodynamic design tools were used for basic airfoil definition and analysis, while DevWing Foam and DevFus Foam were employed for generating advanced wing and fuselage geometries. Toolpaths were exported as G-code and executed through GRBL-based control for synchronized motion.",
        images: [
          { src: "/project1/devwing.webp", fit: "cover", size: "small" },
          { src: "/project1/grbl.webp", fit: "cover", size: "small" },
        ],
      },

      {
        heading: "Manufacturing & Assembly",
        content:
          "To keep the system accessible and cost-effective, most custom components were 3D printed, including mounts, bearing housings, and alignment fixtures. Aluminum extrusion and laser-cut plates were used where higher stiffness was required, enabling rapid iteration and quick mechanical fixes during development.",
        images: [
          { src: "/project1/assembly.webp", fit: "cover", size: "full" },
        ],
      },

      {
        heading: "Results & Outcome",
        content:
          "The completed machine successfully produced repeatable, high-quality foam components for aerodynamic testing and competition use. It reduced prototyping time by approximately 50% and enabled fast iteration for complex geometries.",
        images: [
          { src: "/project1/outcome.webp", fit: "contain", size: "full" },
        ],
      },
    ],

    media: [
      { src: "/project5/foam9.webp", fit: "cover", size: "normal" },
      { src: "/project5/foam10.webp", fit: "cover", size: "small" },
      { src: "/project1/bottom2.webp", fit: "cover", size: "small" },
      { src: "/project1/bottom3.webp", fit: "cover", size: "small" },
    ],
  },

  {
    id: "competition-project",
    title: "No-Grip Dog Waste Collection Device",
    subtitle: "Assistive device design, low-force actuation, CAD prototyping, and ergonomic optimization",
    cover: "/award1expand.gif",

    summary:
      "Designed and prototyped an assistive device enabling hands-free dog waste collection for users with limited grip strength and mobility.",

    outcomes: [
      {
        title: "Grip Force Required",
        value: "< 10 N",
        description:
          "Operable with minimal hand strength; no sustained squeezing required.",
      },
      {
        title: "Operation Time",
        value: "< 5 s",
        description:
          "Single-motion waste collection from approach to capture.",
      },
      {
        title: "Bending Requirement",
        value: "0°",
        description:
          "Fully upright operation; no bending or crouching needed.",
      },
    ],

    sections: [
      {
        heading: "Project Overview",
        content:
          "This project involved the design and development of an assistive dog waste collection device tailored for users with limited mobility and grip strength. The system was developed in collaboration with a real client, focusing on improving independence, ease of use, and reliability in outdoor environments. The final concept enables waste collection in a single motion while minimizing required force and user effort.",
        images: [
          {
            src: "/project3/model.webp",
            fit: "contain",
            size: "normal",
            ratio: "auto",
          },
        ],
      },
      {
        heading: "Problem Definition",
        content:
          "Existing dog waste collection tools require bending, squeezing, or fine motor control, making them difficult or unusable for individuals with limited hand function or mobility impairments. The challenge was to design a device that could be operated with minimal grip strength, function reliably in real-world conditions, and integrate smoothly with a wheelchair-based lifestyle.",
        images: [
          {
            src: "/award1expand.webp",
            fit: "contain",
            size: "normal",
            ratio: "auto",
          },
        ],
      },
      {
        heading: "Design & Development",
        content:
          "The device was developed through iterative prototyping, exploring multiple mechanical concepts including scoop mechanisms, compliant systems, and guided collection geometries. The final design integrates a simplified actuation mechanism that allows controlled motion with minimal user input, enabling reliable waste capture in a single operation.",
        images: [
          {
            src: "/project3/closeup.webp",
            fit: "contain",
            size: "small",
            ratio: "auto",
          },
        ],
      },
      {
        heading: "Ergonomic Considerations",
        content:
          "Ergonomics were central to the design. The device had to support upright operation, reduce hand strain, and remain intuitive during use. Reach, mounting possibilities, access angle, and ease of operation were considered so the system could be used without fine motor adjustments or excessive setup.",
        images: [
          {
            src: "/award1expand2.gif",
            fit: "contain",
            size: "normal",
            ratio: "auto",
          },
        ],
      },
      {
        heading: "Manufacturing & Prototyping",
        content:
          "Rapid prototyping methods were used to evaluate and refine the design. Components were modeled in CAD and fabricated using 3D printing, allowing quick iteration and testing of different geometries and mechanisms. This approach helped validate usability, alignment, and functional performance.",
        images: [
          {
            src: "/project3/detailed.webp",
            fit: "contain",
            size: "small",
            ratio: "auto",
          },
          {
            src: "/project3/servo.webp",
            fit: "contain",
            size: "small",
            ratio: "auto",
          },
        ],
      },
      {
        heading: "Results & Outcome",
        content:
          "The final prototype successfully demonstrated improved accessibility and ease of use compared to conventional tools. The device enabled independent operation with reduced physical strain, meeting key client requirements for usability and reliability. The project was recognized with 1st Place in the Engineering Design Competition with an accessibility focus.",
        images: [
          {
            src: "/project3/mainassembly1-v1.glb",
            fit: "contain",
            size: "normal",
            ratio: "auto",
          },
        ],
      },
    ],

    // media: [
    //   {
    //     src: "/award1expand.gif",
    //     fit: "contain",
    //     size: "normal",
    //     ratio: "auto",
    //   },
    // ],
  },
];
