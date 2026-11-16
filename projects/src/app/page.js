import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Big Jumps 4 TODs",
    description: "Booking and admin scheduling system for a local business.",
    image: "/img/bigjumps4todss.png",
    alt: "Screenshot of the Big Jumps 4 TODs website",
    tags: ["Booking", "Admin scheduling"],
    live: "https://big-jumps-4-tods.onrender.com/",
    github: "https://github.com/richdacoder/Big-jumps-4-tods",
  },
  {
    title: "Russ D Wings",
    description: "Full-stack order and scheduling system with notifications.",
    image: "/img/russ-d-wings.jpeg",
    alt: "Screenshot of the Russ D Wings website",
    tags: ["Orders", "Scheduling", "Notifications"],
    live: "https://russ-d-wings.onrender.com",
    github: "https://github.com/richdacoder/Russ-D-wings-",
  },
];

const elsewhere = [
  {
    label: "GitHub",
    value: "github.com/richdacoder",
    href: "https://github.com/richdacoder",
    Icon: FaGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Richard Williams",
    href: "https://www.linkedin.com/in/richard-williams-65a39b33a",
    Icon: FaLinkedin,
    external: true,
  },
  {
    label: "Business email",
    value: "Shalimi.tech203@gmail.com",
    href: "mailto:Shalimi.tech203@gmail.com",
    Icon: FaEnvelope,
  },
  {
    label: "Personal email",
    value: "richwill3232@gmail.com",
    href: "mailto:richwill3232@gmail.com",
    Icon: FaEnvelope,
  },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun";

// One row of the page: Roman numeral on the left, content on the right.
function Section({ id, numeral, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-8 grid gap-6 border-t-2 border-cream/20 py-16 md:grid-cols-[7rem_1fr] md:gap-10 md:py-20"
    >
      <p aria-hidden="true" className="font-display text-5xl text-sun md:text-6xl">
        {numeral}
      </p>
      <div>
        <h2 className="font-display text-5xl sm:text-6xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6">
      {/* ================= INTRO ================= */}
      <header className="py-20 md:py-28">
        <p className="text-base text-cream/70 md:text-xl">
          Founder &amp; Full-Stack Developer at Shalimi Tech
        </p>
        <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-7xl lg:text-8xl">
          Richard
          <br />
          <span className="bg-gradient-to-r from-sun to-coral bg-clip-text text-transparent">
            Williams
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-cream/70 md:text-2xl">
          Building modern, scalable web applications with performance and UX
          focus.
        </p>
        <a
          href="#projects"
          className={`mt-10 inline-block rounded-full bg-sun px-8 py-4 text-lg text-ink transition hover:text-black/40 ${focusRing}`}
        >
          See my work
        </a>
      </header>

      {/* ================= I. ABOUT ================= */}
      <Section id="about" numeral="I" title="About">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start">
          <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-full border-2 border-sun bg-surface">
            <Image
              src="/img/profilepic.JPEG"
              alt="Portrait of Richard Williams"
              fill
              priority
              sizes="176px"
              className="object-cover"
            />
          </div>
          <p className="max-w-2xl text-xl leading-relaxed text-cream/80 md:text-2xl">
            I build scalable web systems for businesses using Next.js, React,
            and backend APIs. My focus is clean UI, performance, and real-world
            usability.
          </p>
        </div>
      </Section>

      {/* ================= II. PROJECTS ================= */}
      <Section id="projects" numeral="II" title="Projects">
        <ul className="divide-y-2 divide-cream/15">
          {projects.map((project) => (
            <li
              key={project.title}
              className="grid gap-8 py-10 first:pt-0 last:pb-0 lg:grid-cols-[1fr_1.1fr] lg:items-center"
            >
              <div>
                <h3 className="font-display text-3xl sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-cream/70 md:text-xl">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-cream/25 px-4 py-1.5 text-sm text-cream/90"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 rounded-full bg-sun px-6 hover:text-black/30 py-3 text-base text-ink transition hover:text-cream ${focusRing}`}
                  >
                    Live site <FaExternalLinkAlt className="text-xs " />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 hover:text-black/30 rounded-full border border-cream/30 px-6 py-3 text-base transition hover:border-cream/60 hover:bg-cream/10 ${focusRing}`}
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live site`}
                className={`relative block aspect-[3/2] overflow-hidden rounded-2xl border-2 border-cream/20 bg-surface transition hover:bg-green/50 ${focusRing}`}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover object-top"
                />
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {/* ================= III. CONTACT ================= */}
      <Section id="contact" numeral="III" title="Contact">
        <p className="max-w-2xl text-xl leading-relaxed text-cream/80 md:text-2xl">
          Reach out about a project, a role, or a business website.
        </p>
        <ul className="mt-10 divide-y-2 divide-cream/15 border-y-2 border-cream/15">
          {elsewhere.map(({ label, value, href, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`group flex flex-col gap-1 py-5  sm:flex-row sm:items-center sm:justify-between ${focusRing}`}
              >
                <span className="flex items-center gap-3 text-xl transition duration-200 motion-safe:hover:-translate-y-1 md:text-2xl">
                  <Icon aria-hidden="true" className="transition duration-200 motion-safe:hover:-translate-y-1" /> {label}
                </span>
                <span className="break-all text-base text-cream/70 transition group-hover:text-sun md:text-lg">
                  {value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
