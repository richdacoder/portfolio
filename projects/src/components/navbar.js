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
        {/* Logo (a link, not a heading: the page already has its own h1) */}
        <a
          href="/"
          className={`font-display text-xl text-sun transition hover:text-cream md:text-2xl ${focusRing}`}
        >
          Richard Williams
        </a>

        {/* Desktop menu */}
        <ul className="hidden gap-10 text-lg text-cream/80 md:flex">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`transition hover:text-sun ${focusRing}`}
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
          className={`text-2xl text-sun md:hidden ${focusRing}`}
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
                  className={`block py-2 text-cream/90 transition hover:text-sun ${focusRing}`}
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
