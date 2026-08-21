"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  /* ================= SCROLL PROGRESS ================= */

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;

        const documentHeight =
          document.documentElement.scrollHeight - window.innerHeight;

        const progress =
          documentHeight > 0
            ? (scrollTop / documentHeight) * 100
            : 0;

        setScrollProgress(progress);
        ticking = false;
      });

      ticking = true;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ================= CUSTOM CURSOR ================= */

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
      }

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform =
          `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-white">
      {/* ================= SCROLL PROGRESS ================= */}

      <motion.div
        className="fixed left-0 top-0 z-[100] h-[2px] bg-white"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ================= ANIMATED BACKGROUND ================= */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Main glow */}
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -40, 60, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[15%] top-[15%] h-[300px] w-[300px] rounded-full bg-white/[0.025] blur-[90px] sm:h-[400px] sm:w-[400px]"
        />

        {/* Secondary glow */}
        <motion.div
          animate={{
            x: [0, -70, 40, 0],
            y: [0, 50, -30, 0],
            scale: [1, 0.9, 1.08, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[10%] right-[10%] h-[280px] w-[280px] rounded-full bg-white/[0.02] blur-[90px] sm:h-[350px] sm:w-[350px]"
        />
      </div>

      {/* ================= CUSTOM CURSOR ================= */}

      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-8 w-8 rounded-full border border-white/30 md:block will-change-transform"
      />

      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed left-0 top-0 z-[998] hidden h-2 w-2 rounded-full bg-white md:block will-change-transform"
      />

      {/* ================= NAVBAR ================= */}

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl font-bold tracking-tight"
          >
            SJ<span className="text-white/40">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a href="#work" className="transition hover:text-white">
              Work
            </a>

            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>

            <a href="#resume" className="transition hover:text-white">
              Resume
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-4 py-2 text-white transition hover:bg-white hover:text-black"
            >
              Let&apos; Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/30 hover:text-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: mobileMenuOpen ? "auto" : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          className="overflow-hidden border-t border-white/10 bg-[#0a0a0a]/95 md:hidden"
        >
          <div className="flex flex-col px-5 py-5 sm:px-6">
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-white/10 py-4 text-white/60 transition hover:text-white"
            >
              Work
            </a>

            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-white/10 py-4 text-white/60 transition hover:text-white"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-white/10 py-4 text-white/60 transition hover:text-white"
            >
              Skills
            </a>

            <a
              href="#resume"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-white/10 py-4 text-white/60 transition hover:text-white"
            >
              Resume
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-white/10 py-4 text-white/60 transition hover:text-white"
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-5 rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-black"
            >
              Let&apos; Talk
            </a>
          </div>
        </motion.div>
      </nav>

      {/* ================= HERO ================= */}

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 py-28 sm:gap-16 sm:px-6 sm:py-32 md:grid-cols-2 md:items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 text-xs uppercase tracking-[0.25em] text-white/40 sm:mb-6 sm:text-sm sm:tracking-[0.3em]"
            >
              Computer Science Student
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-7xl"
            >
              Building ideas
              <br />
              into <span className="text-white/40">experiences.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="mt-6 max-w-xl text-base leading-7 text-white/50 sm:mt-7 sm:text-lg sm:leading-8"
            >
              I build interactive software experiences with a focus on
              full-stack development, algorithms, and thoughtful UI/UX.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <a
                href="#work"
                className="group flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
              >
                View My Work

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-white/80 transition hover:border-white/40 hover:text-white"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto flex h-[400px] w-full max-w-[450px] flex-col items-center justify-center p-5 sm:h-[460px] sm:p-6"
          >
            {/* Background Glass Panel */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl" />

            {/* Floating Photo */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] shadow-2xl backdrop-blur-sm sm:h-56 sm:w-56">
                {/* Outer Ring */}
                <div className="absolute -inset-3 rounded-full border border-white/[0.06]" />

                {/* Inner Ring */}
                <div className="absolute inset-2 rounded-full border border-white/10" />

                {/* Profile Photo */}
                <div className="relative h-40 w-40 overflow-hidden rounded-full border border-white/20 sm:h-48 sm:w-48">
                  <Image
                    src="/profile/Siddhesh.png"
                    alt="Siddhesh Jadhav"
                    width={192}
                    height={192}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Name and Title */}
            <div className="relative z-10 mt-6 text-center">
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Siddhesh Jadhav
              </h3>

              <p className="mt-1 text-sm text-white/70 sm:text-base">
                Full-Stack Development & UI/UX Enthusiast
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section id="work" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-white/30 sm:text-sm sm:tracking-[0.3em]">
              Selected Work
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Things I&apos;ve 
              <span className="text-white/30"> built.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
              A collection of projects where code, algorithms, and thoughtful
              UI/UX come together to solve real-world problems.
            </p>
          </motion.div>

          {/* Project Cards */}
          <div className="mt-12 grid gap-8 sm:mt-16 md:grid-cols-2">
            {/* PROJECT 01 */}
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] transition-all duration-500 hover:border-white/25 hover:bg-white/[0.04]"
            >
              {/* Preview */}
              <div className="relative h-64 overflow-hidden sm:h-72 md:h-80">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                    backgroundSize: "35px 35px",
                  }}
                />

                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-[80px]" />

                <div className="absolute left-5 top-5 z-10 sm:left-6 sm:top-6">
                  <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-white/40 backdrop-blur">
                    01
                  </span>
                </div>

                <div className="absolute right-5 top-5 z-10 sm:right-6 sm:top-6">
                  <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-white/40 backdrop-blur">
                    Featured
                  </span>
                </div>

                <div className="absolute inset-0">
                  <Image
                    src="/projects/dsa_visualizer.png"
                    alt="DSA Visualizer"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/20" />
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between sm:bottom-6 sm:left-6 sm:right-6">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-white/25 sm:text-xs sm:tracking-[0.2em]">
                    Interactive Learning
                  </span>

                  <span className="text-xs text-white/20">
                    DSA
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-white/30 sm:tracking-[0.25em]">
                  DSA • Education
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  DSA Visualizer
                </h3>

                <p className="mt-4 leading-7 text-white/45">
                  An interactive platform that visualizes data structures and
                  algorithms, helping students understand complex concepts
                  through visual interaction.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["React", "TypeScript", "Algorithms", "UI/UX"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-white/45 transition hover:border-white/25 hover:text-white/70"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="https://gutter-turtle-32541558.figma.site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/button inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-105"
                  >
                    Live Demo

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                    />
                  </a>

                  <a
                    href="https://github.com/siddheshjadhav331-sys/dsa-visualizer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/50 transition hover:border-white/30 hover:text-white"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>

            {/* PROJECT 02 */}
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] transition-all duration-500 hover:border-white/25 hover:bg-white/[0.04]"
            >
              {/* Preview */}
              <div className="relative h-64 overflow-hidden sm:h-72 md:h-80">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                    backgroundSize: "35px 35px",
                  }}
                />

                <div className="absolute right-1/2 top-1/2 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-[80px]" />

                <div className="absolute left-5 top-5 z-10 sm:left-6 sm:top-6">
                  <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-white/40 backdrop-blur">
                    02
                  </span>
                </div>

                <div className="absolute right-5 top-5 z-10 sm:right-6 sm:top-6">
                  <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-white/40 backdrop-blur">
                    ATS
                  </span>
                </div>

                <div className="absolute inset-0">
                  <Image
                    src="/projects/ats_resumeanalyzer.png"
                    alt="ATS Resume Analyzer"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/20" />
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between sm:bottom-6 sm:left-6 sm:right-6">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-white/25 sm:text-xs sm:tracking-[0.2em]">
                    Resume Intelligence
                  </span>

                  <span className="text-xs text-white/20">
                    ATS Score
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-white/30 sm:tracking-[0.25em]">
                  ATS Check • Career
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  ATS Resume Analyzer
                </h3>

                <p className="mt-4 leading-7 text-white/45">
                  A resume analysis tool that evaluates resume content,
                  identifies potential improvements, and provides an
                  ATS-focused score to help users create more recruiter-friendly
                  resumes.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["React", "Django", "NLP", "UI/UX"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-white/45 transition hover:border-white/25 hover:text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="https://ats-resume-analyzer-6ztl.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/button inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-105"
                  >
                    Live Demo

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                    />
                  </a>

                  <a
                    href="https://github.com/siddheshjadhav331-sys/ATS_Resume-Analyzer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/50 transition hover:border-white/30 hover:text-white"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="border-t border-white/10 bg-white/[0.02]"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-white/30 sm:text-sm sm:tracking-[0.3em]">
              About Me
            </p>

            <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-6xl">
              I don&apos;t just want to
              <span className="text-white/30"> write code.</span>
              <br />
              I want to build things
              <span className="text-white/30"> people can use.</span>
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-12 sm:mt-20 sm:gap-16 md:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xl leading-9 text-white/60 sm:text-2xl">
                I&apos;m a Computer Science student who enjoys turning ideas into
                interactive and useful digital experiences.
              </p>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
                My interests sit at the intersection of software development,
                data structures and algorithms, and UI/UX design. I like
                understanding how things work and then building them myself.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
                Through projects, I&apos;m continuously improving my problem-solving
                skills while learning how to build products that are simple,
                responsive, and enjoyable to use.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6 sm:mt-12 sm:grid-cols-3">
                <div className="border-l border-white/10 pl-5">
                  <p className="text-3xl font-bold">2+</p>
                  <p className="mt-1 text-sm text-white/35">
                    Projects Built
                  </p>
                </div>

                <div className="border-l border-white/10 pl-5">
                  <p className="text-3xl font-bold">3+</p>
                  <p className="mt-1 text-sm text-white/35">
                    Core Areas
                  </p>
                </div>

                <div className="col-span-2 border-l border-white/10 pl-5 sm:col-span-1">
                  <p className="text-3xl font-bold">∞</p>
                  <p className="mt-1 text-sm text-white/35">
                    Things to Learn
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
                <div className="flex h-44 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] sm:h-48">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-3xl font-bold"
                  >
                    SJ
                  </motion.div>
                </div>

                <div className="mt-7">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                    Currently
                  </p>

                  <h3 className="mt-3 text-xl font-semibold">
                    Learning. Building. Improving.
                  </h3>

                  <p className="mt-3 leading-7 text-white/40">
                    Exploring modern web development while strengthening my
                    foundations in computer science.
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Software Development",
                    "DSA",
                    "UI/UX",
                    "Problem Solving",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Journey */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 sm:mt-32"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-white/30 sm:text-sm sm:tracking-[0.3em]">
              My Journey
            </p>

            <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
              From learning to building.
            </h3>

            <div className="mt-10 border-t border-white/10 sm:mt-12">
              <JourneyItem
                number="01"
                label="FOUNDATION"
                title="Computer Science"
                description="Building fundamentals in programming, data structures, algorithms, and core computer science concepts."
              />

              <JourneyItem
                number="02"
                label="BUILDING"
                title="Real Projects"
                description="Applying what I learn by building projects such as the DSA Visualizer and ATS Resume Analyzer."
              />

              <JourneyItem
                number="03"
                label="NEXT"
                title="Becoming Better"
                description="Deepening my development skills, solving harder problems, and creating better digital experiences."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-white/30 sm:text-sm sm:tracking-[0.3em]">
              Skills & Technologies
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What I use
              <span className="text-white/30"> to build.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
              A growing set of technologies and computer science concepts that
              I use to build projects and solve problems.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2">
            <SkillCategory
              number="01"
              title="Languages"
              description="Languages I use for programming, problem solving, and application development."
              skills={[
                { name: "C" },
                { name: "C++" },
                { name: "Python" },
                { name: "JavaScript" },
                { name: "TypeScript" },
              ]}
            />

            <SkillCategory
              number="02"
              title="Web Development"
              description="Technologies I use to build modern, responsive, and interactive web applications."
              skills={[
                { name: "HTML" },
                { name: "CSS" },
                { name: "React" },
                { name: "Next.js" },
                { name: "Tailwind CSS" },
              ]}
            />

            <SkillCategory
              number="03"
              title="CS Fundamentals"
              description="Core computer science concepts that form my technical foundation."
              skills={[
                { name: "Data Structures" },
                { name: "Algorithms" },
                { name: "OOP" },
                { name: "DBMS" },
                { name: "Operating Systems" },
              ]}
            />

            <SkillCategory
              number="04"
              title="Tools & Design"
              description="Tools and design principles I use to build, prototype, and manage projects."
              skills={[
                { name: "Figma" },
                { name: "UI/UX" },
                { name: "Git" },
                { name: "GitHub" },
                { name: "VS Code" },
              ]}
            />
          </div>

          {/* Currently Learning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]"
          >
            <div className="flex flex-col gap-8 p-6 sm:p-9">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                  Currently Learning
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  Always improving.
                </h3>

                <p className="mt-3 max-w-xl leading-7 text-white/40">
                  I&apos;m continuously expanding my technical skills and exploring
                  technologies that help me build better products.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  "Advanced React",
                  "Next.js",
                  "Node.js",
                  "REST APIs",
                  "System Design",
                  "Git & GitHub",
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                    }}
                    whileHover={{ y: -3 }}
                    className="cursor-default rounded-full border border-white/10 px-3 py-2 text-sm text-white/50 transition hover:border-white/30 hover:bg-white/[0.05] hover:text-white"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Approach */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 border-t border-white/10 pt-8"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-white/30">
                My approach
              </p>

              <p className="max-w-2xl text-left text-base leading-7 text-white/50 sm:text-lg md:text-right">
                Learn the fundamentals → build real projects → understand meaningful problems → refine the solution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= RESUME ================= */}

      <section id="resume" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-12 md:grid-cols-[1fr_0.8fr] md:items-center"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/30 sm:text-sm sm:tracking-[0.3em]">
                Resume
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                A little more
                <span className="text-white/30">
                  {" "}about my journey.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
                Want to know more about my education, skills, projects, and
                experience? Take a look at my resume.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
                <a
                  href="/resume/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105"
                >
                  View Resume

                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="/resume/resume.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-white/60 transition hover:border-white/30 hover:text-white"
                >
                  Download PDF
                </a>
              </div>
            </div>

            {/* Resume Visual */}
            <motion.a
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -8,
                rotate: 1,
              }}
              transition={{ duration: 0.3 }}
              className="group relative mx-auto block w-full max-w-xs sm:max-w-sm"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-2xl">
                <div className="aspect-[8.5/11] rounded-lg bg-[#111] p-6 sm:p-7">
                  <div className="h-3 w-32 rounded bg-white/30" />
                  <div className="mt-3 h-1.5 w-48 max-w-full rounded bg-white/10" />

                  <div className="mt-10 space-y-3">
                    <div className="h-2 w-24 rounded bg-white/20" />
                    <div className="h-1.5 w-full rounded bg-white/10" />
                    <div className="h-1.5 w-11/12 rounded bg-white/10" />
                    <div className="h-1.5 w-4/5 rounded bg-white/10" />
                  </div>

                  <div className="mt-10 space-y-3">
                    <div className="h-2 w-28 rounded bg-white/20" />
                    <div className="h-1.5 w-full rounded bg-white/10" />
                    <div className="h-1.5 w-10/12 rounded bg-white/10" />
                    <div className="h-1.5 w-9/12 rounded bg-white/10" />
                  </div>

                  <div className="mt-10 space-y-3">
                    <div className="h-2 w-20 rounded bg-white/20" />
                    <div className="h-1.5 w-full rounded bg-white/10" />
                    <div className="h-1.5 w-8/12 rounded bg-white/10" />
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/40">
                  <span className="rounded-full border border-white/20 bg-black/60 px-5 py-2 text-sm text-white/0 backdrop-blur transition group-hover:text-white">
                    Open Resume
                  </span>
                </div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] px-5 py-16 text-center sm:px-8 sm:py-20 md:px-20"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-white/30 sm:text-sm sm:tracking-[0.3em]">
              Get In Touch
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl">
              Let&apos;s build something
              <br />
              <span className="text-white/30">
                meaningful.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
              Have an idea, opportunity, or just want to connect? Feel free to
              reach out.
            </p>

            <a
              href="mailto:siddheshjadhav331@gmail.com"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-medium text-black transition hover:scale-105"
            >
              Send Me an Email
              <ArrowUpRight size={18} />
            </a>

            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href="https://github.com/siddheshjadhav331-sys"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white hover:text-black"
              >
                <FaGithub
                  size={20}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/siddhesh-jadhav-b6a6a13b0/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white hover:text-black"
              >
                <FaLinkedinIn
                  size={20}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              <a
                href="mailto:siddheshjadhav331@gmail.com"
                aria-label="Email"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white hover:text-black"
              >
                <Mail
                  size={20}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-center text-sm text-white/30 sm:px-6 md:flex-row md:text-left">
          <span className="font-semibold text-white/60">
            SJ.
          </span>

          <span>
            Designed & built with Next.js
          </span>

          <span>
            © {new Date().getFullYear()} Siddhesh Jadhav. All Rights Reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}

/* =========================================================
   SKILL CATEGORY
========================================================= */

function SkillCategory({
  number,
  title,
  description,
  skills,
}: {
  number: string;
  title: string;
  description: string;
  skills: {
    name: string;
  }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20 sm:p-7"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-white/25">
            {number}
          </p>

          <h3 className="mt-3 text-2xl font-semibold">
            {title}
          </h3>
        </div>

        <span className="text-2xl text-white/10 transition group-hover:text-white/30">
          +
        </span>
      </div>

      <p className="mt-4 leading-7 text-white/40">
        {description}
      </p>

      <div className="mt-7 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/45 transition hover:border-white/25 hover:bg-white/[0.08] hover:text-white/70"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/* =========================================================
   JOURNEY ITEM
========================================================= */

function JourneyItem({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ x: 6 }}
      className="grid gap-4 border-b border-white/10 py-7 sm:py-8 md:grid-cols-[160px_1fr_auto] md:items-center"
    >
      <p className="text-sm text-white/30">
        {label}
      </p>

      <div>
        <h4 className="text-xl font-semibold">
          {title}
        </h4>

        <p className="mt-2 text-sm leading-7 text-white/40 sm:text-base">
          {description}
        </p>
      </div>

      <span className="text-sm text-white/20">
        {number}
      </span>
    </motion.div>
  );
}