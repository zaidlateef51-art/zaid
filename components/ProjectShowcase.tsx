import Image from "next/image";
import Link from "next/link";

interface ProjectShowcaseProps {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  image: string;
}

export default function ProjectShowcase({
  id,
  title,
  subtitle,
  summary,
  image,
}: ProjectShowcaseProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Link
        href={`/projects/${id}`}
        className="group grid grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-white/35">
            {subtitle}
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {title}
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">
            {summary}
          </p>

          <p className="mt-8 text-xs uppercase tracking-[0.22em] text-white/35 transition group-hover:text-white">
            View project →
          </p>
        </div>
      </Link>
    </section>
  );
}