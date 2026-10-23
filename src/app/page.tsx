
"use client";

import { useState } from "react";

const skills = [
  "Botany",
  "Plant Tissue Culture",
  "Heavy Metal Analysis",
  "Scientific Research",
  "Research Writing",
  "Statistical Analysis",
  "Python",
  "MS Excel",
  "Data Visualization",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Canva",
  "Communication",
];

const projects = [
  {
    number: "01",
    category: "Botany & Environmental Science",
    title: "Heavy Metal Contamination in Plants",
    description:
      "A research project exploring heavy metal accumulation in plants and agricultural produce, with an emphasis on environmental quality and food safety.",
    tags: ["Botany", "Environmental Science", "Research"],
    icon: "🌱",
    color: "from-emerald-500/20 to-teal-400/5",
  },
  {
    number: "02",
    category: "Agriculture & Research",
    title: "Smart Agriculture Research",
    description:
      "An academic project concept investigating how irrigation water quality and soil amendments may influence plant growth and metal accumulation in crops.",
    tags: ["Agriculture", "Soil Science", "Statistics"],
    icon: "🌿",
    color: "from-blue-500/20 to-cyan-400/5",
  },
  {
    number: "03",
    category: "Technology & Data Analysis",
    title: "Scientific Data Dashboard",
    description:
      "A planned interactive dashboard for organizing experimental data, comparing treatment groups, and presenting research findings through clear visualizations.",
    tags: ["Python", "Data Analysis", "Web Development"],
    icon: "📊",
    color: "from-violet-500/20 to-blue-400/5",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href =
      `mailto:your-email@example.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-slate-100 selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-black shadow-lg shadow-blue-600/20">
              HN
            </span>
            <span className="text-lg font-bold tracking-tight">
              Hina<span className="text-blue-400">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#home" className="transition hover:text-blue-400">
              Home
            </a>
            <a href="#about" className="transition hover:text-blue-400">
              About
            </a>
            <a href="#skills" className="transition hover:text-blue-400">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-blue-400">
              Research & Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
            >
              Contact Me
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="rounded-lg border border-white/10 p-2 text-slate-200 transition hover:bg-white/10 md:hidden"
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m18 6-12 12M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </nav>

        {menuOpen && (
          <div className="space-y-1 border-t border-white/10 px-5 py-4 md:hidden">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Research & Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-blue-400"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative scroll-mt-24 px-5 pb-24 pt-24 sm:px-8 sm:pb-32 sm:pt-32 lg:px-12"
      >
        <div className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
              MPhil Student · Researcher · Lifelong Learner
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I&apos;m Hina
              <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Nisar.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              An MPhil student at the University of Sargodha, passionate
              about Botany, environmental research, and emerging
              technologies. I&apos;m exploring how scientific research,
              data analysis, and digital innovation can contribute to
              sustainable agriculture and a healthier environment.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Explore My Research
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-white/15 bg-white/[0.03] px-7 py-4 font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-blue-400/50 hover:bg-white/[0.07]"
              >
                Get in Touch
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-blue-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M12 14 3 9l9-5 9 5-9 5Z" />
                  <path d="M7 11.2V16c3 2.5 7 2.5 10 0v-4.8M21 9v6" />
                </svg>
                University of Sargodha
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-blue-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" />
                </svg>
                Science Meets Innovation
              </div>
            </div>
          </div>

          {/* Profile visual */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 to-cyan-400/5 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1a2c] p-7 shadow-2xl shadow-black/30 sm:p-10">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                  Research & Discovery
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
              </div>

              <div className="relative mx-auto my-10 flex h-44 w-44 items-center justify-center rounded-full border border-blue-400/30 bg-gradient-to-br from-blue-600/30 via-[#102c4a] to-cyan-500/20 shadow-2xl shadow-blue-500/10">
                <div className="absolute inset-3 rounded-full border border-dashed border-blue-300/30" />
                <span className="bg-gradient-to-br from-white to-blue-300 bg-clip-text text-6xl font-black tracking-tighter text-transparent">
                  HN
                </span>
                <span className="absolute bottom-3 right-2 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#0c1a2c] text-xl">
                  ✦
                </span>
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-bold">
                  Science with Purpose
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Investigating the natural world, understanding
                  environmental challenges, and learning to use data and
                  technology to support evidence-based solutions.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/5 bg-white/[0.035] p-4">
                  <span className="text-2xl">🔬</span>
                  <p className="mt-3 font-semibold">Research</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Observe and investigate
                  </p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-white/[0.035] p-4">
                  <span className="text-2xl">🌱</span>
                  <p className="mt-3 font-semibold">Sustainability</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Learn and contribute
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 top-20 hidden rounded-2xl border border-white/10 bg-[#102238] px-4 py-3 shadow-xl sm:block">
              <span className="text-sm font-semibold text-blue-300">
                ✦ Scientific Thinking
              </span>
            </div>

            <div className="absolute -right-4 bottom-16 hidden rounded-2xl border border-white/10 bg-[#102238] px-4 py-3 shadow-xl sm:block">
              <span className="text-sm font-semibold text-cyan-300">
                ✦ Continuous Growth
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-24 border-y border-white/5 bg-[#0a1626] px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              Get to know me
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              About <span className="text-blue-400">Me</span>
            </h2>
            <div className="mt-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-400 sm:text-lg">
            <p>
              I&apos;m Hina Nisar, an MPhil student at the University of
              Sargodha with an academic interest in Botany, plant science,
              and environmental research.
            </p>
            <p>
              My research interests include heavy metal accumulation in
              plants, irrigation water quality, soil amendments, plant
              responses to environmental conditions, and agricultural
              sustainability. I value careful experimentation, reliable
              scientific methods, and evidence-based conclusions.
            </p>
            <p>
              Alongside my academic work, I&apos;m developing skills in
              programming, statistical analysis, and web development to
              organize research data and communicate scientific findings
              more effectively.
            </p>
            <p>
              My goal is to connect biological science with modern
              technology and contribute to meaningful research that
              benefits agriculture and the environment.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 pt-2 font-semibold text-blue-400 transition hover:gap-3 hover:text-cyan-300"
            >
              Let&apos;s connect
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              My areas of expertise
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Skills & <span className="text-blue-400">Interests</span>
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Combining academic knowledge with growing technical skills
              to support scientific research, data interpretation, and
              digital innovation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "🌿",
                title: "Scientific Research",
                description:
                  "Botany, plant tissue culture, environmental studies, experimental methods, and scientific writing.",
              },
              {
                icon: "📈",
                title: "Data & Statistics",
                description:
                  "Research data organization, MS Excel, descriptive statistics, data interpretation, and Python fundamentals.",
              },
              {
                icon: "💻",
                title: "Web Development",
                description:
                  "HTML, CSS, JavaScript, React, Next.js, TypeScript, and responsive website development.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#0c1a2c] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-950/20"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-10">
            <h3 className="mb-6 text-center text-lg font-bold">
              My Skills Toolkit
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="group rounded-xl border border-white/10 bg-[#0c1a2c] px-5 py-3 text-sm font-medium text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300"
                >
                  <span className="mr-2 text-blue-400 transition group-hover:text-cyan-300">
                    ✦
                  </span>
                  {skill}
                </span>
              ))}
            </div>
            <p className="mt-6 text-center text-xs leading-5 text-slate-500">
              This list includes academic interests and developing skills.
              Practical experience and proficiency may vary.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-24 border-y border-white/5 bg-[#0a1626] px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
                Academic & Digital Work
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Research & <span className="text-blue-400">Projects</span>
              </h2>
            </div>
            <p className="max-w-md leading-7 text-slate-400">
              Exploring the connection between plant science,
              environmental sustainability, and data-driven technology.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0c1a2c] transition duration-300 hover:-translate-y-2 hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-950/40"
              >
                <div
                  className={`relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}
                >
                  <div className="absolute inset-0 opacity-20">
                    <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:22px_22px]" />
                  </div>

                  <span className="absolute left-5 top-5 rounded-lg border border-white/10 bg-[#07111f]/50 px-3 py-1.5 text-xs font-bold tracking-widest text-slate-300 backdrop-blur">
                    PROJECT {project.number}
                  </span>

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/15 bg-[#07111f]/40 text-4xl shadow-xl backdrop-blur-sm transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {project.icon}
                  </div>

                  <div className="absolute -bottom-12 -right-8 h-32 w-32 rounded-full bg-blue-400/10 blur-2xl" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-400">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-xl font-bold transition group-hover:text-blue-300">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-7 text-center text-sm leading-6 text-slate-500">
            These cards are sample project descriptions and concepts.
            Update them to accurately reflect your completed research,
            publications, and practical work.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative scroll-mt-24 overflow-hidden px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              Let&apos;s connect
            </p>
            <h2 className="mt-5 max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Have a research idea?
              <span className="mt-2 block text-blue-400">
                Let&apos;s talk.
              </span>
            </h2>
            <p className="mt-6 max-w-lg leading-8 text-slate-400">
              I welcome opportunities to connect with researchers,
              students, educators, and technology enthusiasts interested
              in Botany, environmental science, sustainable agriculture,
              and digital innovation.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="mt-1 font-medium text-slate-200">
                    your-email@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500">University</p>
                  <p className="mt-1 font-medium text-slate-200">
                    University of Sargodha, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-[#0c1a2c] p-6 shadow-2xl shadow-black/20 sm:p-9"
          >
            <h3 className="text-2xl font-bold">Send a Message</h3>
            <p className="mt-2 text-sm text-slate-400">
              I&apos;d be glad to hear from you.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  required
                  minLength={2}
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    setSubmitted(false);
                  }}
                  className="w-full rounded-xl border border-white/10 bg-[#07111f] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    setSubmitted(false);
                  }}
                  className="w-full rounded-xl border border-white/10 bg-[#07111f] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  minLength={5}
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                    setSubmitted(false);
                  }}
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#07111f] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Send Message
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 2 15 22l-4-9-9-4 20-7ZM22 2 11 13" />
                </svg>
              </button>

              {submitted && (
                <p
                  role="status"
                  className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-sm leading-6 text-emerald-300"
                >
                  Your default email application should open with your
                  message prepared. Complete sending it there. If nothing
                  opens, check your email application settings.
                </p>
              )}

              <p className="text-center text-xs leading-5 text-slate-500">
                The form opens your default email application. Replace
                your-email@example.com in the code with your actual email
                address before publishing.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050c16] px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-black">
              HN
            </span>
            <span className="font-bold">
              Hina<span className="text-blue-400">.</span>
            </span>
          </a>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Hina Nisar. All rights reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-blue-400"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
