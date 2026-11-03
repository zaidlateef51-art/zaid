import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/0 backdrop-blur-xl dark:border-zinc-800 dark:bg-neutral-900/10">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          Zaid Lateef
        </Link>

        <ul className="flex gap-6 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          <li><Link href="/resume">Resume</Link></li>
          <li><Link href="/education">Education</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/experience">Experience</Link></li>
          <li><Link href="/awards">Awards</Link></li>
          <li>
            <Link
              href="https://www.linkedin.com/in/zaid-lateef"
              target="_blank"
            >
              Linkedin
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}