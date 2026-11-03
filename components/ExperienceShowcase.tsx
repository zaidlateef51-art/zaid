import Link from "next/link";

interface ExperienceShowcaseProps {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  image: string;
  period: string;
}

export default function ExperienceShowcase({
  id,
  title,
  subtitle,
  summary,
  image,
  period,
}: ExperienceShowcaseProps) {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
      <div>
        <p className="text-sm text-white/45">{subtitle}</p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
          {title}
        </h2>

        <p className="mt-6 max-w-xl text-sm leading-7 text-white/55">
          {summary}
        </p>

        <div className="mt-8 flex flex-col items-start gap-3">
          <Link
            href={`/experience/${id}`}
            className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
          >
            View Experience
          </Link>

          <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/50">
            {period}
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <Link
        href={`/experience/${id}`}
        className="block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:border-white/25 hover:bg-white/[0.05]"
      >
        <div className="h-[320px] w-full">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
          />
        </div>
      </Link>
    </section>
  );
}