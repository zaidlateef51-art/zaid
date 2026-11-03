import ExperiencePanel from "./ExperiencePanel";
import { experience } from "@/lib/experience";

export default function ExperienceStack() {
  return (
    <div className="space-y-24 md:hidden">
      {experience.map((item) => (
        <ExperiencePanel key={item.id} {...item} />
      ))}
    </div>
  );
}
