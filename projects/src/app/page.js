"use client";

import { useState } from "react";

export default function Home() {
  const [hovered, setHovered] = useState(false);
  const [shovered, setHosvered] = useState(false);



  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div
            className={`relative w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden border border-neutral-800 shadow-xl transition-transform duration-300 ${
              hovered ? "scale-105" : "scale-100"
            }`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Using standard img instead of next/image for compatibility */}
            <img
              src="/me.jpg" // place image inside /public folder
              alt="Profile picture"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name + Intro */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Your Full Name
            </h1>

            <p className="mt-3 text-neutral-400 text-lg leading-relaxed max-w-md">
              I’m a full-stack developer focused on building clean, performant,
              and modern web experiences using Next.js and React.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="#projects"
                className="px-4 py-2 rounded-xl bg-white text-black text-sm font-medium hover:bg-neutral-200 transition"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-4 py-2 rounded-xl border border-neutral-700 text-sm hover:border-neutral-500 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </header>

        {/* Divider */}
        <div className="my-12 border-t border-neutral-800" />

        {/* About Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium">About</h2>
          <p className="text-neutral-400 leading-relaxed">
            I enjoy building modern web applications with a focus on usability,
            performance, and clean UI design. I work primarily with React,
            Next.js, and Node.js, and I’m currently expanding into full-stack
            architecture and deployment workflows.
          </p>
        </section>

        {/* Projects Preview */}
        <section id="projects" className="mt-12 space-y-4">
          <h2 className="text-xl font-medium">Projects</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-neutral-800 hover:border-neutral-600 transition">
              <h3 className="font-medium">Project One</h3>
              <p className="text-sm text-neutral-400 mt-2">
                A modern web app built with Next.js and Tailwind CSS.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-neutral-800 hover:border-neutral-600 transition">
              <h3 className="font-medium">Project Two</h3>
              <p className="text-sm text-neutral-400 mt-2">
                Full-stack application with authentication and API integration.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12">
          <h2 className="text-xl font-medium">Contact</h2>
          <p className="text-neutral-400 mt-2">
            Email: yourname@email.com
          </p>
        </section>
      </div>
    </main>
  );
}
