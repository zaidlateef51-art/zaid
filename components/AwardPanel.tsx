"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface AwardPanelProps {
  title: string;
  organization: string;
  year: string;
  description: string;
  media?: string[];
  link?: string;
}

export default function AwardPanel({
  title,
  organization,
  year,
  description,
  media,
  link,
}: AwardPanelProps) {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef, () => setOpen(false));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* COLLAPSED CARD */}
      <div
        onClick={() => setOpen(true)}
        className="group relative cursor-pointer border-t border-white/10 pt-10 pb-2 transition-colors hover:bg-white/[0.02] overflow-hidden"
      >
        {/* Animated divider */}
        <span className="absolute left-0 top-0 h-0.5 w-16 bg-white/60 transition-all duration-300 group-hover:w-72" />

        {/* Hover affordance */}
        <span className="absolute right-5 top-8 flex items-center gap-2 text-xs text-white/40 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
          View details
          <span className="text-base">→</span>
        </span>

        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          {title}
        </h2>

        <p className="mt-2 text-xs uppercase tracking-widest text-white/40">
          {organization} · {year}
        </p>

        <p className="mt-4 text-xs uppercase tracking-widest text-white/30">
          Includes media · design breakdown · documentation
        </p>
      </div>

      {/* EXPANDED OVERLAY */}
      {open && (
        <div className="fixed animate-fade animate-duration-300 animate-ease-in-out inset-0 z-50 flex items-start justify-center overflow-y-auto py-20">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

          <div
            ref={modalRef}
            className="relative z-50 w-full max-w-5xl rounded-xl bg-neutral-900 shadow-2xl animate-scale-in"
          >
            {/* Header */}
            <div className="relative border-b border-white/10 px-8 py-6">
              <button
                onClick={() => setOpen(false)}
                className="absolute right-6 top-6 text-white/40 hover:text-white"
              >
                ✕
              </button>

              <h2 className="text-3xl font-semibold leading-tight">
                {title}
              </h2>

              <p className="mt-2 text-xs uppercase tracking-widest text-white/40">
                {organization} · {year}
              </p>
            </div>

            {/* Content */}
            <div className="px-8 py-6 space-y-10">
              <p className="whitespace-pre-line text-white/70 text-sm leading-relaxed max-w-prose">
                {description}
              </p>

              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-white/60 underline hover:text-white"
                >
                  View full documentation →
                </a>
              )}

              {media && media.length > 0 && (
                <div>
                  <h3 className="mb-4 text-xs uppercase tracking-widest text-white/40">
                    Project Demonstration
                  </h3>

                  <div className="space-y-8">
                    {media.map((src, i) => {
                      const isPdf = src.toLowerCase().endsWith(".pdf");

                      return (
                        <div
                          key={src}
                          className="overflow-hidden rounded-lg border border-white/10 bg-black"
                        >
                          {isPdf ? (
                            <div className="relative w-full h-[70vh]">
                              <iframe
                                src={src}
                                title={`${title} PDF ${i + 1}`}
                                className="absolute inset-0 w-full h-full"
                              />
                            </div>
                          ) : (
                            <Image
                              src={src}
                              alt={`${title} demo ${i + 1}`}
                              width={1400}
                              height={800}
                              className="w-full h-auto object-contain"
                              unoptimized
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
