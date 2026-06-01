import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Richard Williams | Full Stack Developer",
  description:
    "Portfolio of Richard Williams built with Next.js, React, and modern full-stack tools.",
};

// =========================
// NAVBAR
// =========================
function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/60 border-b border-neutral-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="font-bold tracking-wide text-white">
          Richard Williams
        </h1>

        <div className="flex gap-6 text-sm text-neutral-300">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>
    </header>
  );
}

// =========================
// FOOTER
// =========================
function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-4 text-sm text-neutral-400">
        <p>© {new Date().getFullYear()} Richard Williams</p>

        <div className="flex gap-6">
          <a
            href="https://github.com/richdacoder"
            target="_blank"
            className="hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

// =========================
// ROOT LAYOUT
// =========================
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-black text-white flex flex-col">
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
