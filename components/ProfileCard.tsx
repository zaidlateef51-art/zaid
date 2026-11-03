import Image from "next/image";
import ProfileContent from "@/components/ProfileContent";

export default function ProfileCard() {
  return (
    <aside className="pt-10">
      <div className="max-w-[330px]">
        {/* Top row */}
        <div className="flex items-center gap-5">
          {/* Square PFP */}
          <div className="h-32 w-32 overflow-hidden rounded-2xl border border-white/15 bg-white/5">
            <Image
              src="/zaidicon.webp"
              alt="Zaid Lateef"
              width={500}
              height={500}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Text aligned to the right of PFP */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-semibold tracking-tight text-white leading-tight">
              Zaid Lateef
            </h1>

            <p className="mt-2 max-w-[180px] text-sm leading-5 text-white/55">
              Mechanical Engineering · University of Ottawa
            </p>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-8">
          <ProfileContent />
        </div>
      </div>
    </aside>
  );
}