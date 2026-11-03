"use client";

import Plasma from "@/components/Plasma";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Plasma
        color="#ffffff"
        speed={0.25}
        direction="forward"
        scale={1.2}
        opacity={0.8}
        mouseInteractive={false}
      />
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}
