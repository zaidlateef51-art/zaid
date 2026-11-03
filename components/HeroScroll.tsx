"use client";

import HeroBackground from "@/components/HeroBackground";
import HeroLayout from "@/components/HeroLayout";

export default function HeroScroll() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <HeroBackground />
      <HeroLayout />
    </section>
  );
}
