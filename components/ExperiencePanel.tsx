// components/ExperiencePanel.tsx
interface ExperienceProps {
  role: string;
  company: string;
  period: string;
  focus: string;
  description: string;
}

export default function ExperiencePanel({
  role,
  company,
  period,
  focus,
  description,
}: ExperienceProps) {
  return (
    <div className="flex h-full w-screen items-center justify-center px-6">
      {/* Content box */}
      <div className="mx-auto w-full max-w-xl text-center animate-fade animate-once">
        <p className="mb-2 text-xs uppercase tracking-widest text-white/50">
          {period}
        </p>

        <h2 className="text-3xl font-semibold tracking-tight">
          {role}
        </h2>

        <p className="mt-1 text-sm text-white/70">
          {company}
        </p>

        <p className="mt-4 text-xs uppercase tracking-wider text-white/50">
          {focus}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-white/65">
          {description}
        </p>
      </div>
    </div>
  );
}
