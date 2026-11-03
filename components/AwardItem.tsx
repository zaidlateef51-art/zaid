// components/AwardItem.tsx
interface AwardItemProps {
  title: string;
  organization: string;
  year: string;
  description: string;
}

export default function AwardItem({
  title,
  organization,
  year,
  description,
}: AwardItemProps) {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/2 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/5">
      <h3 className="text-lg font-medium text-white">
        {title}
      </h3>

      <p className="mt-1 text-xs uppercase tracking-widest text-white/40">
        {organization} · {year}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-white/70">
        {description}
      </p>
    </div>
  );
}
