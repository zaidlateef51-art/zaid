import Image from "next/image";
import ProfileContent from "@/components/ProfileContent";

export default function MobileProfileCard() {
  return (
    <div className="animate-fade-up duration-300 ease-in-out">
      <div className="flex flex-col items-center gap-6 text-center">
        {/* Avatar */}
        <div className="h-24 w-24 overflow-hidden rounded-full border border-white/30">
          <Image
            src="/zaidpfp2.webp"
            alt="Zaid Lateef"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        {/* Text */}
        <ProfileContent align="center" />
      </div>
    </div>
  );
}
