"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sun";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-cream/15 bg-ink/80 backdrop-blur-xl">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
      >
        {/* Logo */}
        <a
          href="/"
          className={`font-display text-xl text-sun transition duration-200 hover:text-cream motion-safe:hover:scale-105 md:text-2xl ${focusRing}`}
        >
          Richard Williams
        </a>

        {/* Desktop menu */}
        <ul className="hidden gap-4 text-lg text-cream/80 md:flex">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`block rounded-md px-4 py-2 transition duration-200 hover:bg-moss hover:text-black/40 hover:text-sun motion-safe:hover:-translate-y-0.5 ${focusRing}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className={`rounded-md p-2 text-2xl text-sun transition duration-200 hover:bg-moss hover:text-cream md:hidden ${focusRing}`}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t-2 border-cream/15 bg-ink md:hidden"
        >
          <ul className="flex flex-col gap-2 p-6 text-2xl">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-md px-3 py-2 text-cream/90 transition duration-200 hover:bg-moss hover:text-sun ${focusRing}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
