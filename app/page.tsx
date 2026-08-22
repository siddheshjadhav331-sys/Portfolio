"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  ExternalLink,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const projects = [
  {
    number: "01",
    featured: true,
    category: "Software Engineering · Interactive Learning",
    title: "DSA Visualizer",
    description:
      "Interactive learning platform that visualizes data structures and algorithms through step-by-step execution and direct user interaction.",
    image: "/projects/dsa_visualizer.png",
    stack: ["React", "TypeScript", "Algorithms", "UI/UX"],
    highlights: [
      "Step-by-step algorithm visualization",
      "Interactive data structure operations",
      "Learning-focused interaction design",
      "Responsive interface",
    ],
    live: "https://gutter-turtle-32541558.figma.site",
    github: "https://github.com/siddheshjadhav331-sys/dsa-visualizer",
  },
  {
    number: "02",
    featured: false,
    category: "Career Technology · NLP",
    title: "ATS Resume Analyzer",
    description:
      "Full-stack resume analysis tool that evaluates content and provides ATS-focused feedback to improve clarity and recruiter readability.",
    image: "/projects/ats_resumeanalyzer.png",
    stack: ["React", "Django", "NLP", "REST APIs"],
    highlights: [
      "Resume content analysis",
      "ATS-focused scoring",
      "Actionable improvement suggestions",
      "React + Django full stack",
    ],
    live: "https://ats-resume-analyzer-6ztl.onrender.com/",
    github: "https://github.com/siddheshjadhav331-sys/ATS_Resume-Analyzer",
  },
];

const skillGroups = [
  {
    title: "Programming",
    items: ["C", "C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    items: ["Django", "Node.js", "REST APIs"],
  },
  {
    title: "CS Fundamentals",
    items: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems"],
  },
  {
    title: "Tools & Design",
    items: ["Git", "GitHub", "Figma", "UI/UX", "VS Code"],
  },
];

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={reduceMotion ? undefined : { duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={reduceMotion ? undefined : { duration: 0.55, delay: index * 0.08 }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className={`group overflow-hidden rounded-[1.75rem] border bg-white/[0.025] ${
        project.featured
          ? "border-white/20"
          : "border-white/10 hover:border-white/20"
      }`}
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-[#111]">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 768px"
          className="object-cover opacity-90 transition duration-700 ease-out group-hover:scale-[1.025] group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

        <div className="absolute left-5 top-5 flex items-center gap-2">
          <span className="rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-[11px] font-medium text-white/70 backdrop-blur-md">
            {project.number}
          </span>
          {project.featured && (
            <span className="rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-black">
              Featured
            </span>
          )}
        </div>

        <span className="absolute bottom-5 right-5 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-[11px] text-white/60 backdrop-blur-md">
          {project.category}
        </span>
      </div>

      <div className="p-6 sm:p-8">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/35">
          Project {project.number}
        </p>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/50 sm:text-base">
          {project.description}
        </p>

        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          {project.highlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-xl border border-white/8 bg-white/[0.02] px-3 py-2.5 text-sm text-white/55"
            >
              {highlight}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/55"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-5 text-xs leading-6 text-white/35">
          Built as a hands-on project with an emphasis on implementation,
          usability, and practical problem solving.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open live demo for ${project.title}`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
          >
            Live Demo
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code for ${project.title} on GitHub`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/12 px-5 py-2.5 text-sm text-white/70 transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
          >
            GitHub
            <FaGithub size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
        frame = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-[200] rounded-md bg-white px-4 py-2 text-sm font-semibold text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <main id="main-content" className="min-h-screen overflow-x-clip bg-[#080808] text-white selection:bg-white selection:text-black">
      {/* Performance-friendly background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute left-[8%] top-[10%] h-72 w-72 rounded-full bg-white/[0.025] blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute bottom-[5%] right-[5%] h-80 w-80 rounded-full bg-white/[0.018] blur-3xl sm:h-[28rem] sm:w-[28rem]" />
      </div>

      <motion.div
        className="fixed left-0 top-0 z-[100] h-[2px] bg-white"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav aria-label="Primary navigation" className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#080808]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight"
            aria-label="Siddhesh Jadhav home"
          >
            SJ<span className="text-white/35">.</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-white/55 md:flex">
            <a href="#work" className="rounded-sm transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Work</a>
            <a href="#skills" className="rounded-sm transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Skills</a>
            <a href="#about" className="rounded-sm transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">About</a>
            <a href="#resume" className="rounded-sm transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Resume</a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-4 py-2 text-white transition hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Let&apos;s Talk
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/75 transition hover:border-white/30 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/8 bg-[#080808]/98 px-5 py-3 md:hidden">
            {["work", "skills", "about", "resume", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={closeMenu}
                className="block rounded-sm border-b border-white/8 py-4 text-sm capitalize text-white/75 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-4 block rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
            >
              Let&apos;s Talk
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="relative flex min-h-[92svh] items-center pt-20">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-16">
          <div>
            <FadeIn>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-3.5 py-2 text-xs text-white/55">
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                Computer Science Student · Software Developer
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="max-w-4xl text-[2.8rem] font-bold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[5.4rem]">
                I build software
                <br />
                <span className="text-white/35">that solves problems.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-7 max-w-2xl text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
                I build reliable, user-focused software with a strong foundation in
                data structures & algorithms, full-stack development, and
                modern web technologies.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#work"
                  className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
                >
                  View My Work
                  <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
                <a
                  href="/resume/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/12 px-6 py-3.5 text-sm text-white/70 transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
                >
                  View Resume
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/35 sm:text-sm">
                <span>2+ Software Projects</span>
                <span>Full-Stack</span>
                <span>DSA</span>
                <span>UI/UX</span>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.12} className="mx-auto w-full max-w-md">
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 shadow-2xl shadow-black/30 sm:p-7">
              <div className="absolute right-5 top-5 rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/35">
                Developer
              </div>

              <div className="flex min-h-[380px] flex-col items-center justify-center sm:min-h-[440px]">
                <motion.div
                  animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                  transition={reduceMotion ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="absolute -inset-4 rounded-full border border-white/[0.06]" />
                  <div className="relative h-48 w-48 overflow-hidden rounded-full border border-white/15 bg-white/[0.04] sm:h-56 sm:w-56">
                    <Image
                      src="/profile/Siddhesh.png"
                      alt="Siddhesh Jadhav"
                      fill
                      sizes="224px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>

                <div className="mt-7 text-center">
                  <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Siddhesh Jadhav
                  </h2>
                  <p className="mt-2 text-sm text-white/45">
                    Software Development · DSA · UI/UX
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap justify-center gap-2">
                  {["React", "Next.js", "TypeScript", "Python", "C++"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-white/45"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <a
          href="#work"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-white/25 transition hover:text-white/60 sm:flex"
        >
          Scroll to explore
          <ArrowDown size={14} aria-hidden="true" />
        </a>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">
              Selected Work
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Projects built to
              <span className="text-white/30"> solve real problems.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              A focused selection of projects demonstrating software engineering,
              computer science fundamentals, and practical product thinking.
            </p>
          </FadeIn>

          <div className="mt-12 space-y-7 sm:mt-16">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* What I build */}
      <section className="border-t border-white/8 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">
              What I Build
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
              Engineering with purpose.
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["01", "Full-Stack Applications", "Responsive applications with clean interfaces, APIs, and practical architecture."],
              ["02", "Interactive Experiences", "Interfaces that turn complex information into clear, usable experiences."],
              ["03", "Problem Solving", "Applying DSA and core CS concepts to design efficient, maintainable solutions."],
            ].map(([number, title, description], index) => (
              <FadeIn key={title} delay={index * 0.06}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-7">
                  <span className="text-xs text-white/25">{number}</span>
                  <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/40">
                    {description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">
              Technical Skills
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
              Tools I use to build.
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, index) => (
              <FadeIn key={group.title} delay={index * 0.04}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-white/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-8">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-white/30">
                Currently Learning
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Strengthening my engineering depth.
              </h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Node.js", "REST APIs", "System Design", "Backend Architecture", "Deployment"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About / Education */}
      <section id="about" className="border-t border-white/8 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
            <FadeIn>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">
                About
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-[-0.035em] sm:text-5xl">
                Curious about how systems work.
                <span className="text-white/30"> Focused on building them well.</span>
              </h2>

              <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-white/45 sm:text-lg">
                <p>
                  I&apos;m a Computer Science student focused on turning ideas into
                  useful, reliable, and maintainable software.
                </p>
                <p>
                  My interests sit at the intersection of software development,
                  data structures and algorithms, and product-focused UI/UX. I
                  enjoy understanding fundamentals, applying them in projects, and
                  refining the engineering behind the result.
                </p>
                <p>
                  I&apos;m continuously strengthening my engineering skills through hands-on
                  projects, problem solving, and modern web technologies.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.22em] text-white/30">
                  Education
                </p>
                <h3 className="mt-4 text-2xl font-semibold">
                  B.Tech · Computer Science & Engineering
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/40">
                  Building a strong foundation in programming, data structures,
                  algorithms, software engineering, and core computer science.
                </p>

                <div className="mt-8 border-t border-white/10 pt-7">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/30">
                    Current Focus
                  </p>
                  <div className="mt-4 space-y-3">
                    {[
                      "Data Structures & Algorithms",
                      "Full-Stack Development",
                      "Problem Solving",
                      "Software Engineering",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-white/55"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-white/45" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
          <FadeIn>
            <div className="grid items-center gap-10 rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-14">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">
                  Resume
                </p>
                <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
                  The complete picture.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/45">
                  Education, technical skills, projects, and experience in one
                  concise document.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/resume/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
                  >
                    View Resume
                    <ExternalLink size={15} aria-hidden="true" />
                  </a>
                  <a
                    href="/resume/resume.pdf"
                    download
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/12 px-6 py-3 text-sm text-white/70 transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
                  >
                    Download PDF
                    <Download size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="hidden w-48 rotate-2 rounded-2xl border border-white/10 bg-[#111] p-4 shadow-2xl sm:block">
                <div className="aspect-[8.5/11] rounded-lg border border-white/5 bg-[#0b0b0b] p-4">
                  <div className="h-2.5 w-20 rounded bg-white/25" />
                  <div className="mt-3 h-1 w-28 rounded bg-white/10" />
                  <div className="mt-8 space-y-2">
                    <div className="h-1 w-full rounded bg-white/10" />
                    <div className="h-1 w-11/12 rounded bg-white/10" />
                    <div className="h-1 w-4/5 rounded bg-white/10" />
                  </div>
                  <div className="mt-7 space-y-2">
                    <div className="h-1.5 w-14 rounded bg-white/20" />
                    <div className="h-1 w-full rounded bg-white/10" />
                    <div className="h-1 w-10/12 rounded bg-white/10" />
                  </div>
                  <div className="mt-7 space-y-2">
                    <div className="h-1.5 w-16 rounded bg-white/20" />
                    <div className="h-1 w-full rounded bg-white/10" />
                    <div className="h-1 w-9/12 rounded bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
          <FadeIn>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-20">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">
                Get In Touch
              </p>

              <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Open to software engineering
                <span className="text-white/30"> opportunities.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                Seeking software engineering internships and opportunities to build
                reliable, real-world software while learning from strong engineering teams.
              </p>

              <a
                href="mailto:siddheshjadhav331@gmail.com"
                className="mt-9 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
              >
                Email Me
                <Mail size={16} aria-hidden="true" />
              </a>

              <div className="mt-8 flex justify-center gap-3">
                <a
                  href="https://github.com/siddheshjadhav331-sys"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/55 transition hover:border-white/30 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
                >
                  <FaGithub size={18} aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/siddhesh-jadhav-b6a6a13b0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/55 transition hover:border-white/30 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
                >
                  <FaLinkedin size={18} aria-hidden="true" />
                </a>
                <a
                  href="mailto:siddheshjadhav331@gmail.com"
                  aria-label="Email"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/55 transition hover:border-white hover:bg-white hover:text-black"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="border-t border-white/8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-center text-xs text-white/30 sm:px-6 md:flex-row md:items-center md:justify-between md:text-left">
          <span className="font-semibold text-white/60">SJ.</span>
          <span>Designed & built with Next.js.</span>
          <span>© {new Date().getFullYear()} Siddhesh Jadhav.</span>
          <a href="#home" className="rounded-sm transition hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
    </>
  );
}