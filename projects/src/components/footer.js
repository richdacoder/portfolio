import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/richdacoder",
    Icon: FaGithub,
    hover: "hover:text-sun",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/richard-williams-65a39b33a",
    Icon: FaLinkedin,
    hover: "hover:text-[#0A66C2]",
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t-2 border-cream/15 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <p className="text-base text-cream/70 md:text-lg">
          © {new Date().getFullYear()} Richard Williams. All rights reserved.
        </p>

        <ul className="flex items-center gap-6">
          {socials.map(({ label, href, Icon, hover }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`block text-cream/80 transition duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 ${hover} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sun`}
              >
                <Icon size={28} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
