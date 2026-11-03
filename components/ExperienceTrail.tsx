export default function ExperienceTrail() {
  return (
    <div className="relative flex h-full w-32 items-center justify-center">
      {/* Horizontal line */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent
                      animate-pulse animate-duration-700" />

      {/* Dot */}
      <div className="absolute h-2 w-2 rounded-full bg-white/30" />
    </div>
  );
}
