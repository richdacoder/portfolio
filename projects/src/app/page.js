"use client";
import Image from 'next/image'

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
      <motion.div
        style={{ x: moveX, y: moveY }}
        className="absolute inset-[-20px]" // Extra space for movement
      >
        <Image
          src="/profilepic.JPEG"
          alt="Calisthenics Park"
          fill                        // 1. Tells Next.js to fill the motion.div
          priority                    // 2. High priority for backgrounds
          className="object-cover opacity-30" // 3. Replaces h-full/w-full
          sizes="100vw"               // 4. Critical for optimization
        />
      </motion.div>

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
              className="text-6xl md:text-8xl font-black tracking-tight leading-none uppercase italic"
            >
              Richard Williams
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
              <a
                href="#projects"
                className="px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform duration-300"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-neutral-700 rounded-full hover:border-white transition"
              >
                Contact
              </a>
            </motion.div>
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
              src="/profilepic.JPEG" // Prefixed with slash to pull from public folder
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
                Clean code. Strong design. Disciplined execution.
              </h2>
            </div>

            <p className="text-neutral-400 text-lg leading-relaxed">
              I develop modern web applications using Next.js, React, and
              scalable frontend architecture. My approach combines strong UI
              design principles with performance-focused engineering.
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

          <div className="space-y-8">
            <ProjectCard
              title="Portfolio Platform"
              description="A modern developer portfolio built with Next.js, Tailwind, and interactive motion effects."
              tech="Next.js · Tailwind · Framer Motion"
            />

            <ProjectCard
              title="Client Management Dashboard"
              description="Full-stack dashboard with authentication, API integration, and modern responsive UI."
              tech="React · APIs · Node.js"
            />
          </div>
        </section>

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
            yourname@email.com
          </p>
        </section>
      </div>
    </main>
  );
}
