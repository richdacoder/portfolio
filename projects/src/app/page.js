"use client";
import Image from 'next/image';
import { FaGithub, FaLinkedin } from "react-icons/fa";

import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { useState } from "react";

// =========================
// INTERACTIVE BACKGROUND
// =========================
function InteractiveBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 100,
    damping: 30,
  });

  const springY = useSpring(mouseY, {
    stiffness: 100,
    damping: 30,
  });

  const moveX = useTransform(springX, [0, 2000], [10, -10]);
  const moveY = useTransform(springY, [0, 1200], [10, -10]);

  // Mouse movement handler
  function handleMouseMove(e) {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="absolute inset-0 overflow-hidden"
    >

      {/* Overlay to dim the background */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
    </div>
  );
}

// =========================
// PROJECT CARD COMPONENT
// =========================
function ProjectCard({ title, description, tech }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      whileHover={{ scale: 1.02 }}
      className="moving group relative border border-neutral-800 hover:border-neutral-600 rounded-3xl p-8 transition-all duration-500 backdrop-blur-sm bg-white/[0.02]"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h3 className="text-2xl font-semibold group-hover:translate-x-1 transition-transform duration-300">
            {title}
          </h3>

          <p className="mt-3 text-neutral-400 max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>

        <p className="text-sm text-neutral-500 uppercase tracking-[0.2em]">
          {tech}
        </p>
      </div>
    </motion.div>
  );
}

// =========================
// HOME PAGE COMPONENT
// =========================
export default function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <InteractiveBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 min-h-[80vh]"
        >
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6">
              Full Stack Developer
            </p>
            <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.8 }}
  className="relative text-6xl md:text-8xl font-black tracking-tight leading-none uppercase italic"
>
  {/* Glow behind text */}
  <span
    className="absolute inset-0 blur-2xl opacity-50 bg-gradient-to-r from-[#009B3A] via-[#FED100] to-[#009B3A] bg-clip-text text-transparent"
    aria-hidden="true"
  >
    Richard Williams
  </span>

  {/* Main text */}
  <span
    className="relative bg-gradient-to-r from-[#009B3A] via-[#FED100] to-white bg-clip-text text-transparent"
    style={{
      textShadow:
        "4px 4px 0 rgba(0,0,0,0.5), 8px 8px 20px rgba(254,209,0,0.25)",
    }}
  >
    Richard Williams
  </span>
</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 text-lg text-neutral-300 leading-relaxed max-w-xl"
            >
              Building modern digital experiences with discipline, creativity,
              and performance-driven engineering.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <div className="mt-10 flex flex-wrap gap-4">
              <div className="mt-10 flex flex-wrap gap-4">

  <a
  href="https://github.com/richdacoder"
  target="_blank"
  rel="noopener noreferrer"
  className="
    flex items-center gap-3
    px-6 py-3 rounded-full
    font-bold text-white
    bg-[#D52B1E]
    hover:scale-105 hover:-translate-y-1
    transition-all duration-300
    border border-[#FF6A5C]
    shadow-[0_8px_20px_rgba(213,43,30,0.45)]
  "
>
<FaGithub size={20} />  GitHub
</a>

<a
    href="https://www.linkedin.com/in/richard-williams-65a39b33a"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="
      flex items-center justify-center
      w-12 h-12
      rounded-xl
      border border-neutral-700
      bg-white/[0.03]
      backdrop-blur-md
      text-neutral-300
      hover:text-[#0A66C2]
      hover:border-[#0A66C2]
      hover:-translate-y-1
      transition-all duration-300
    "
  >
    <FaLinkedin size={22} />
  </a>

</div>
</div>            </motion.div>
          </div>

          {/* RESTORED PROFILE CONTAINER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={`relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border border-neutral-800 transition-all duration-500 ${
              hovered ? "scale-105 rotate-1" : "scale-100"
            }`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Image
              src="/img/profilepic.JPEG" // Prefixed with slash to pull from public folder
              alt="Profile"
              fill
              priority
              sizes="(max-w-768px) 256px, 320px"
              className="object-cover"
            />
          </motion.div>

        </motion.header>

        <section className="border-t border-neutral-800 pt-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4">
                About
              </p>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Building scalable digital solutions that improve operations and customer convenience.
              </h2>
            </div>

            <p className="text-neutral-400 text-lg leading-relaxed">
            I’m a freelance web developer who designs and develops custom web solutions for local
            businesses, building professional and scalable web platforms tailored to their needs
            while improving customer experience and strengthening their online presence. I develop
            modern web applications using Next.js, React, and scalable full-stack architecture. My
            approach combines strong UI design principles with performance-focused engineering while
            helping businesses create more organized digital workflows and improve customer convenience.

            </p>
          </div>
        </section>

        <section id="projects" className="mt-32">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4">
                Selected Work
              </p>

              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                Projects
              </h2>
            </div>
          </div>
          <div className="space-y-4 max-w-sm">
            <a
              href="https://big-jumps-4-tods.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Image
                src="/img/bigjumps4tods.png"
                alt="Big Jumps 4 TODs project preview"
                width={320}
                height={240}
                sizes="(max-width: 768px) 256px, 320px"
                className="rounded-2xl border transition-transform duration-300 group-hover:scale-[1.02]"
              />
    <div className="mt-4 space-y-2">
      <h3 className="text-2xl font-bold">
        Big Jumps 4 TODs
      </h3>

      <p className="text-sm text-gray-400 leading-relaxed">
        A full-stack booking platform built for a local soft play
        and baby gym rental business. Customers can browse rentals,
        submit booking requests, and view real-time availability,
        while admins can efficiently manage schedules and prevent
        double bookings.
      </p>

      <p className="text-xs text-gray-500">
        Next.js · React · Express.js · PostgreSQL · Tailwind CSS
      </p>
    </div>
  </a>

  <a
                href="https://github.com/richdacoder/Big-jumps-4-tods"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-400 hover:text-white transition"
              >
    GitHub →
  </a>

</div>        </section>

<div className="space-y-4 max-w-sm">
  <div className="group">
    <a
      href="https://github.com/richdacoder/Russ-D-wings-"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/img/russ-d-wings.jpeg"
        alt="Russ D Wings project preview"
        width={320}
        height={240}
        sizes="(max-width: 768px) 256px, 320px"
        className="rounded-2xl border border-neutral-800 transition-transform duration-300 group-hover:scale-[1.02]"
      />
    </a>

    <div className="mt-4 space-y-2">
      <h3 className="text-2xl font-bold">
        Russ D Wings
      </h3>

      <p className="text-sm text-gray-400 leading-relaxed">
        A full-stack scheduling and order management platform built for a
        New Haven chicken wing business. Features conflict-free scheduling,
        admin-controlled order workflows, automated email notifications,
        and a scalable architecture designed to improve operational
        efficiency and customer communication.
      </p>

      <p className="text-xs text-gray-500">
        Next.js · React · Express.js · PostgreSQL · Knex · Resend · Docker
      </p>

      <div className="flex gap-4 pt-2">
        <a
          href="https://github.com/richdacoder/Russ-D-wings-"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-neutral-400 hover:text-white transition"
        >
          GitHub →
        </a>
      </div>
    </div>
  </div>
</div>

        <section
          id="contact"
          className="mt-32 border-t border-neutral-800 pt-20 pb-10"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Let’s build something great.
          </h2>

          <p className="mt-6 text-neutral-400 text-lg">
           Personal: Richard.williams5697@yahoo.com
          </p>
          <p className="mt-6 text-neutral-400 text-lg">
          Business: Shalimi.tech203@gmail.com
          </p>
        </section>
      </div>
    </main>
  );
}
