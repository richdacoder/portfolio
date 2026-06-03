"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

// =========================
// HOME
// =========================
export default function Home() {
  const [hovered, setHovered] = useState(false);

  const imageClass =
    "rounded-2xl shadow-xl shadow-black/60 border border-neutral-800 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/80";

  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full flex flex-col lg:flex-row justify-between items-center gap-16">

          {/* LEFT */}
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-400">
              Full Stack Developer
            </p>

            <h1 className="text-6xl md:text-8xl font-black mt-4">
              Richard Williams
            </h1>

            <p className="mt-6 text-neutral-300 max-w-xl">
              Building modern, scalable web applications with performance and UX focus.
            </p>

            {/* SOCIALS (UNCHANGED) */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/richdacoder"
                target="_blank"
                className="
                        flex items-center gap-2 px-5 py-3
                        bg-white text-black rounded-full font-semibold
                        transition-all duration-300
                        hover:scale-105
                        hover:-translate-y-1
                        hover:shadow-[0_15px_35px_rgba(255,255,255,0.2)]
                        active:scale-95
                      "              >
                <FaGithub /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/richard-williams-65a39b33a"
                target="_blank"
                className="
                          flex items-center gap-2 px-5 py-3
                          border border-white rounded-full
                          transition-all duration-300
                          hover:scale-105
                          hover:-translate-y-1
                          hover:bg-[#0A66C2]
                          hover:border-[#0A66C2]
                          hover:shadow-[0_15px_35px_rgba(10,102,194,0.35)]
                          active:scale-95
                        "              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE (ONLY SHADOW ADDED) */}
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`relative w-72 h-72 md:w-80 md:h-80 overflow-hidden rounded-3xl border border-neutral-700 transition-transform duration-300 ${
              hovered ? "scale-105 rotate-1" : ""
            }`}
          >
            <Image
              src="/img/profilepic.JPEG"
              alt="Profile"
              fill
              className="object-cover shadow-2xl shadow-black/70"
            />
          </div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="bg-white text-black py-24" id="about">
  <div className="max-w-3xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-8">
      About
    </h2>

    <p className="text-lg text-gray-700 leading-relaxed">
      I build scalable web systems for businesses using Next.js, React,
      and backend APIs. My focus is clean UI, performance, and real-world
      usability.
    </p>
  </div>
</section>
      {/* ================= PROJECTS ================= */}
      <section className="bg-black text-white py-24" id="projects">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-12">Projects</h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* PROJECT 1 (LINKS RESTORED) */}
            <div>
              <a
                href="https://big-jumps-4-tods.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                              <h3 className="text-2xl mt-4 font-bold">
                Big Jumps 4 TODs
              </h3>
                <Image
                  src="/img/bigjumps4tods.png"
                  width={600}
                  height={400}
                  alt="Project 1"
                  className={imageClass}
                />
              </a>
              <p className="text-neutral-400 mt-2">
                Booking + admin scheduling system for a local business.
              </p>

              <a
                href="https://github.com/richdacoder/Big-jumps-4-tods"
                target="_blank"
                className="text-sm text-neutral-300 hover:text-white"
              >
                GitHub →
              </a>
            </div>

            {/* PROJECT 2 (LINKS RESTORED) */}
            <div>
              <a
                href="https://github.com/richdacoder/Russ-D-wings-"
                target="_blank"
                rel="noopener noreferrer"
              >
              <h3 className="text-2xl mt-4 font-bold">
                Russ D Wings
              </h3>

                <Image
                  src="/img/russ-d-wings.jpeg"
                  width={600}
                  height={400}
                  alt="Project 2"
                  className={imageClass}
                />
              </a>
              <p className="text-neutral-400 mt-2">
                Full-stack order + scheduling system with notifications.
              </p>

              <a
                href="https://github.com/richdacoder/Russ-D-wings-"
                target="_blank"
                className="text-sm text-neutral-300 hover:text-white"
              >
                GitHub →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="bg-white text-black py-24" id="contact">
        <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">
                Contact </h2>
            <p className="mt-6 text-lg text-gray-700 text-center">
            Personal: richard.williams5697@yahoo.com
          </p>
<p className="mt-3 text-lg text-gray-700 text-center">
  Business: Shalimi.tech203@gmail.com
</p>
        </div>
      </section>

    </main>
  );
}
