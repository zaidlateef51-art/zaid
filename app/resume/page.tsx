import Navbar from "@/components/navbar";
import Link from "next/link";

export default function ResumePage() {
  const resumePath = "Mechanical_Engineering_Resume_Zaid_Lateef.pdf";

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-20">
        <header className="mb-12 animate-fade-down animate-once animate-duration-500 animate-fill-forwards">
          <p className="text-xs uppercase tracking-[0.25em] text-white/35">
            Resume
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight">
            Zaid Lateef Resume
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
            View Zaid&apos;s resume directly in the browser or download a copy
            for reference.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={resumePath}
              target="_blank"
              className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-white/85"
            >
              Open PDF
            </Link>

            <Link
              href={resumePath}
              download
              className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/75 transition hover:border-white/30 hover:text-white"
            >
              Download Resume
            </Link>
          </div>
        </header>

        <section className="animate-fade-up animate-once animate-duration-700 animate-fill-forwards">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/2 p-3 backdrop-blur">
            <div className="overflow-hidden rounded-xl bg-white">
              <iframe
                src={resumePath}
                title="Zaid Lateef Resume"
                className="h-[850px] w-full"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}