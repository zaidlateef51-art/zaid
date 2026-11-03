"use client";

import Carousel, { SlideData } from "@/components/ui/carousel";
import { experience } from "@/lib/experience";
import { motion } from "framer-motion";

export default function ExperienceCarousel() {
  const slides: SlideData[] = experience.map((item) => ({
    title: item.role,
    button: "View Experience",
    href: `/experience/${item.id}`,
    src: item.cover,
  }));

  return (
    <motion.div
      className="w-full py-6"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.35,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Carousel slides={slides} initialIndex={1} />
    </motion.div>
  );
}