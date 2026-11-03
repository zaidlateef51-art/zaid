"use client";

import Link from "next/link";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useEffect, useId, useRef, useState } from "react";

export interface SlideData {
  title: string;
  button: string;
  href: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      slideRef.current.style.setProperty("--x", `${xRef.current}px`);
      slideRef.current.style.setProperty("--y", `${yRef.current}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = e.clientX - (r.left + r.width / 2);
    yRef.current = e.clientY - (r.top + r.height / 2);
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  return (
    <li
      ref={slideRef}
      onClick={() => handleSlideClick(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-center justify-center w-[70vmin] h-[70vmin] mx-[4vmin] cursor-pointer transition-all duration-300"
      style={{
        transform:
          current !== index
            ? "scale(0.98) rotateX(8deg)"
            : "scale(1) rotateX(0deg)",
        transformOrigin: "bottom",
      }}
    >
      <div className="absolute inset-0 overflow-hidden rounded-[1%] bg-[#1D1F2F]">
        <img
          src={slide.src}
          alt={slide.title}
          className="absolute inset-0 w-[120%] h-[120%] object-cover"
          style={{ opacity: current === index ? 1 : 0.5 }}
        />
        {current === index && <div className="absolute inset-0 bg-black/30" />}
      </div>

      <article
        className={`relative p-[4vmin] transition-opacity duration-700 ${
          current === index ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold text-white">
          {slide.title}
        </h2>

        <div className="flex justify-center">
          <Link
            href={slide.href}
            onClick={(e) => e.stopPropagation()}
            className="mt-6 inline-flex h-12 items-center px-4 text-xs sm:text-sm bg-white text-black rounded-2xl hover:bg-neutral-200 transition"
          >
            {slide.button}
          </Link>
        </div>
      </article>
    </li>
  );
};

interface CarouselControlProps {
  type: "previous" | "next";
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => (
  <button
    type="button"
    title={title}
    aria-label={title}
    onClick={handleClick}
    className={[
      "w-10 h-10 mx-2 flex items-center justify-center rounded-full",
      "bg-neutral-200/90 dark:bg-neutral-800/80",
      "shadow-sm transition duration-200",
      type === "previous" ? "rotate-180" : "",
    ].join(" ")}
  >
    <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
  </button>
);

interface CarouselProps {
  slides: SlideData[];
  initialIndex?: number;
}

export default function Carousel({ slides, initialIndex = 0 }: CarouselProps) {
  const safeInitial = Math.min(Math.max(initialIndex, 0), slides.length - 1);
  const [current, setCurrent] = useState(safeInitial);
  const id = useId();

  return (
    <div className="relative w-[70vmin] h-[70vmin] mx-auto">
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={slide.href}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={setCurrent}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Previous"
          handleClick={() =>
            setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
          }
        />
        <CarouselControl
          type="next"
          title="Next"
          handleClick={() =>
            setCurrent((prev) => (prev + 1) % slides.length)
          }
        />
      </div>
    </div>
  );
}
