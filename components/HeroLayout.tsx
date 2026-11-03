import ProfileCard from "@/components/ProfileCard";
import MobileProfileCard from "@/components/MobileProfileCard";
import HeroRight from "@/components/HeroRight";

export default function HeroLayout() {
  return (
    <section className="relative z-10 min-h-screen text-white">
      <div className="mx-auto max-w-7xl px-5 pt-10 sm:px-6 lg:pt-16">
        <div className="lg:hidden">
          <MobileProfileCard />
        </div>

        <div className="hidden items-start gap-14 lg:grid lg:grid-cols-[330px_1fr]">
          <ProfileCard />
          <HeroRight />
        </div>
      </div>
    </section>
  );
}