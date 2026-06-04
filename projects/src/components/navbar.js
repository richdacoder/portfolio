"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-700/50 border-b border-neutral-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="font-bold text-white">
          Richard Williams
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm text-neutral-300 ">
          <a className="hover:text-white" href="/">Home</a>
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#projects">Projects</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </div>

        {/* Mobile Burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-black/95">
          <div className="flex flex-col p-6 gap-4 ">
            <a href="/" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
