// app/layout.js — Root layout (must contain <html> and <body>)

import { Bowlby_One } from "next/font/google";
import "./globals.css";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

// Bowlby One for the whole site (it only comes in weight 400).
const bowlby = Bowlby_One({
  variable: "--font-bowlby",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Richard Williams | Full Stack Developer",
  description:
    "Portfolio of Richard Williams built with Next.js, React, and modern full-stack tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={bowlby.variable}>
      {/* bowlby.className sets the font directly on the whole page */}
      <body
        className={`${bowlby.className} relative flex min-h-screen flex-col overflow-x-hidden bg-ink text-lg md:text-xl font-normal tracking-wide text-cream antialiased selection:bg-sun selection:text-ink`}
      >
        {/* Colored glows behind the page. Decorative only. */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10"
        >
          <div className="absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-blue-600/30 blur-[130px]" />
          <div className="absolute top-1/2 -right-32 h-[30rem] w-[30rem] rounded-full bg-sun/15 blur-[130px]" />
          <div className="absolute bottom-0 -left-32 h-[26rem] w-[26rem] rounded-full bg-coral/15 blur-[130px]" />
        </div>

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
