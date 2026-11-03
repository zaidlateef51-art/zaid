import Navbar from "@/components/navbar";
import AwardPanel from "@/components/AwardPanel";
import { awards } from "@/lib/awards";

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-28">
        {/* Header */}
        <header className="mb-28 text-center animate-fade-down animate-once animate-duration-500">
          <h1 className="text-4xl font-semibold tracking-tight">
            Awards & Recognition
          </h1>
          <p className="mt-4 text-sm text-white/60">
            Selected academic, research, and competitive engineering honors.
          </p>
          <p className="mt-6 animate-pulse text-xs uppercase tracking-widest text-white/40">
            Click any award to explore full Award details
          </p>
        </header>

        {/* Awards */}
        <section className="space-y-28">
          {awards.map((award, i) => (
            <div key={award.id} id={`award-${award.id}`}>
              {i === 0 && (
                <p className="mb-4 text-xs uppercase tracking-widest text-white/40">
                  Featured project
                </p>
              )}
              <AwardPanel {...award} />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
