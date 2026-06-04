import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-20 bg-zinc-700/50">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Richard Williams. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/richdacoder"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              text-neutral-400
              hover:text-white
              transition
            "
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/richard-williams-65a39b33a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              text-neutral-400
              hover:text-[#0A66C2]
              transition
            "
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
