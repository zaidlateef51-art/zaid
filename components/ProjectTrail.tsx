export default function ProjectTrail() {
  return (
    <div className="relative flex h-32 items-center justify-center">
      {/* Vertical line */}
      <div className="h-full w-px bg-linear-to-b animate-pulse from-transparent via-white/20 to-transparent
                        animate-duration-700" />

      {/* Optional subtle dot (anchor) */}
      <div className="absolute h-2 w-2 rounded-full bg-white/30" />
    </div>
  );
}
