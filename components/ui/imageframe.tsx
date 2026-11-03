// components/ui/imageframe.tsx

export default function ImageFrame({
  children,
  fit = "cover",
  ratio = "4/3",
}: {
  children: React.ReactNode;
  fit?: "cover" | "contain";
  ratio?: "4/3" | "16/9" | "square" | "auto";
}) {
  const ratioClass =
    ratio === "16/9"
      ? "aspect-video"
      : ratio === "square"
      ? "aspect-square"
      : ratio === "auto"
      ? "min-h-[260px] sm:min-h-[320px]"
      : "aspect-[4/3]";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-black ${ratioClass}`}
    >
      <div
        className={`absolute inset-0 ${
          fit === "contain" ? "p-6" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
