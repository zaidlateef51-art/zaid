import Navbar from "@/components/navbar";

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-20">
        {/* Page title */}
        <header className="mb-16 animate-fade-down animate-once animate-duration-500 animate-fill-forwards">
          <h1 className="text-3xl font-semibold tracking-tight">
            Education
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/60">
            Academic background, coursework, and technical focus areas in
            mechanical engineering.
          </p>
        </header>

        {/* University block */}
        <section className="space-y-10">
          <div className="rounded-2xl border border-white/10 bg-white/2 p-8 backdrop-blur
                          animate-fade-up animate-once animate-duration-700 animate-fill-forwards">

            {/* School + degree */}
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between
                            animate-fade-right animate-once animate-duration-500 animate-delay-100">
              <div>
                <h2 className="text-xl font-medium">
                  University of Ottawa
                </h2>
                <p className="text-sm text-white/60">
                  Bachelor of Applied Science · Mechanical Engineering
                </p>
              </div>

              <p className="mt-2 text-xs uppercase tracking-widest text-white/40 md:mt-0">
                Expected Graduation · 2028
              </p>
            </div>

            {/* Divider */}
            <div className="my-6 h-px w-full bg-white/10" />

            {/* Description */}
            <p className="max-w-3xl text-sm leading-relaxed text-white/70
                          animate-fade-up animate-once animate-duration-500 animate-delay-200">
              Entering Third-Year Mechanical Engineering at the University of Ottawa. Completed second-year core curriculum with strong emphasis on mechanics, thermodynamics, materials, and engineering design. Developed experience applying analytical methods, mathematical modeling, and hands-on prototyping to solve engineering problems.
            </p>

            {/* Coursework */}
            <div className="mt-8 animate-fade-left animate-once animate-duration-500 animate-delay-300">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-white/50">
                Relevant Coursework
              </h3>

              <ul className="grid grid-cols-1 gap-3 text-sm text-white/65 sm:grid-cols-2">
                <li>• Mechanics & Systems: Statics, Dynamics, System Dynamics</li>
                <li>• Thermal & Fluid: Thermodynamics I, Fluid Mechanics I</li>
                <li>• Materials: Engineering Materials I–II</li>
                <li>• Design & Electrical: Product Development for Engineers, Electric Circuits</li>
                <li>• Mathematics: Calculus I–III, Differential Equations, Linear Algebra</li>
                <li>• Electrical Systems for Mechanical Engineers</li>
                <li>• Product Development</li>
                <li>• Engineering Mathematics</li>
              </ul>
            </div>

            {/* Projects */}
            <div className="mt-10 animate-fade-right animate-once animate-duration-500 animate-delay-400">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-white/50">
                Academic Projects & Experience
              </h3>

              <ul className="space-y-3 text-sm text-white/65">
                <li>
                  • Designed and analyzed mechanical systems using CAD, simulation, and engineering calculations
                </li>
                <li>
                  • Executed team-based projects involving prototyping, testing, and iterative design
                </li>
                <li>
                  • Participated in engineering competitions emphasizing
                  innovation, efficiency, and performance
                </li>
              </ul>
            </div>

            {/* Distinctions */}
            <div className="mt-10 animate-fade-up animate-once animate-duration-500 animate-delay-500">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-white/50">
                Distinctions
              </h3>

              <ul className="space-y-2 text-sm text-white/65">
                <li>• Academic and competition-based awards</li>
                <li>• Recognition for engineering design excellence and project performance</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
