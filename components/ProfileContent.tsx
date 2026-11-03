export default function ProfileContent({
  align = "left",
}: {
  align?: "left" | "center";
}) {
  const textAlign =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-5 ${textAlign}`}>
      <p className="max-w-md text-base leading-7 text-white/75">
        I’m a Mechanical Engineering student with a strong interest in designing
        and building real, working systems. I enjoy projects where ideas move
        quickly from concept to physical testing, iteration, and refinement.
      </p>

      <ul className="space-y-3 text-sm leading-6 text-white/65">
        <li>• CAD & mechanical design under real constraints</li>
        <li>• Prototyping, manufacturing, and validation</li>
        <li>• Research and competition-driven problem solving</li>
      </ul>

      <p className="text-sm font-medium text-white/80">
        3rd year Mechanical Engineering student
      </p>
    </div>
  );
}