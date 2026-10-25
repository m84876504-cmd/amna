"use client";

import { useState } from "react";

/* ================= EDIT YOUR DETAILS HERE ================= */
const ME = {
  name: "Abdul Mateen",
  about:
    "BS IT student at University of Sargodha, learning web development and AI.",
  email: "mateeabdul@gmail.com",
  linkedin: "https://linkedin.com/in/your-link", // <- apna LinkedIn link
  github: "https://github.com/your-link", // <- apna GitHub link
};

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const TECH_SKILLS = [
  { emoji: "🌐", name: "HTML", text: "Structure and semantic markup for web pages." },
  { emoji: "⚛️", name: "Next.js", text: "Building modern React apps with the App Router." },
  { emoji: "🧊", name: "3D Modeling", text: "Creating 3D objects and visuals." },
];

const PRO_SKILLS = [
  { emoji: "📊", name: "MS Office", text: "Documents, spreadsheets and presentations." },
  { emoji: "💬", name: "Communication", text: "Clear, respectful written and spoken communication." },
];

const PROJECTS = [
  {
    emoji: "⚡",
    title: "Dybala10",
    text: "A personal project showcasing my creativity and development skills.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: true,
  },
  {
    emoji: "🤖",
    title: "Project 2",
    text: "Coming soon. An upcoming project in web development and AI.",
    stack: ["Next.js", "AI"],
    live: false,
  },
  {
    emoji: "🧊",
    title: "Project 3",
    text: "Coming soon. An upcoming project involving 3D modeling.",
    stack: ["3D Modeling", "HTML"],
    live: false,
  },
];

/* ================= STYLE HELPERS ================= */
const glass =
  "rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl shadow-black/30 backdrop-blur-xl";
const lift =
  "transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/50 hover:shadow-cyan-400/20";
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300";
const gradText =
  "bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent";

function SectionTitle({ title, text }: { title: string; text?: string }) {
  return (
    <div className="mb-12 text-center">
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${gradText}`}>{title}</h2>
      {text && <p className="mx-auto mt-3 max-w-xl text-slate-400">{text}</p>}
      <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
    </div>
  );
}

/* ================= PAGE ================= */
export default function Page() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${ME.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const field =
    "w-full rounded-xl border border-white/10 bg-[#0a0f24]/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-400/20";

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#070b1a] text-slate-300 antialiased [font-family:ui-sans-serif,system-ui,-apple-system,'Segoe_UI',Roboto,sans-serif]">
      <style>{`
        html { scroll-behavior: smooth; scroll-padding-top: 5rem; }
        @keyframes drift { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.12); } }
        @keyframes drift2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-50px,30px) scale(1.08); } }
        @keyframes spinSlow { to { transform: rotate(360deg); } }
        @keyframes spinRev { to { transform: rotate(-360deg); } }
        @keyframes bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes sweep { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
        @keyframes blink { 50% { opacity: 0; } }
        .blob1 { animation: drift 14s ease-in-out infinite; }
        .blob2 { animation: drift2 18s ease-in-out infinite; }
        .ring1 { animation: spinSlow 24s linear infinite; }
        .ring2 { animation: spinRev 18s linear infinite; }
        .bob { animation: bob 5s ease-in-out infinite; }
        .sweep { background-size: 200% 100%; animation: sweep 6s linear infinite; }
        .caret { animation: blink 1s step-end infinite; }
        .grid-bg {
          background-image:
            linear-gradient(rgba(34,211,238,.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,.07) 1px, transparent 1px);
          background-size: 44px 44px;
          -webkit-mask-image: radial-gradient(ellipse at center, #000 30%, transparent 75%);
          mask-image: radial-gradient(ellipse at center, #000 30%, transparent 75%);
        }
        @media (prefers-reduced-motion: reduce) {
          .blob1,.blob2,.ring1,.ring2,.bob,.sweep,.caret { animation: none; }
          html { scroll-behavior: auto; }
        }
      `}</style>

      {/* page-wide background */}
      <div className="pointer-events-none fixed inset-0 -z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1230] via-[#070b1a] to-[#0d0b1f]" />
        <div className="grid-bg absolute inset-0" />
        <div className="blob1 absolute -left-24 top-10 h-[26rem] w-[26rem] rounded-full bg-cyan-500/20 blur-[110px]" />
        <div className="blob2 absolute -right-24 top-1/3 h-[28rem] w-[28rem] rounded-full bg-violet-600/25 blur-[120px]" />
        <div className="blob1 absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-indigo-600/15 blur-[110px]" />
      </div>

      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-5xl items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 shadow-lg shadow-black/30 backdrop-blur-2xl"
        >
          <a href="#home" className={`rounded text-lg font-bold text-white ${focusRing}`}>
            Mateen<span className="text-cyan-300">.</span>
            <span className="text-violet-400">dev</span>
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className={`rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-cyan-200 ${focusRing}`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className={`rounded-lg border border-white/15 px-3 py-1.5 text-sm text-white md:hidden ${focusRing}`}
          >
            {open ? "✕" : "☰"}
          </button>
        </nav>
        {open && (
          <div className="mx-auto mt-2 max-w-5xl rounded-2xl border border-white/10 bg-[#0a1030]/90 p-2 backdrop-blur-2xl md:hidden">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/10 ${focusRing}`}
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="relative z-10">
        {/* ================= HERO ================= */}
        <section id="home" className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pb-16 pt-32 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1.5 text-sm text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9]" />
              Student · Web · AI
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building the web of tomorrow with{" "}
              <span className={`sweep bg-gradient-to-r from-cyan-300 via-violet-400 to-cyan-300 bg-clip-text text-transparent`}>
                code and AI
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              Hi, I&apos;m {ME.name}. {ME.about}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className={`rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-7 py-3 text-sm font-semibold text-[#050816] shadow-lg shadow-cyan-500/30 transition hover:-translate-y-1 hover:shadow-cyan-400/50 ${focusRing}`}
              >
                View Projects 🚀
              </a>
              <a
                href="#contact"
                className={`rounded-xl border border-cyan-300/40 bg-white/5 px-7 py-3 text-sm font-semibold text-cyan-200 backdrop-blur transition hover:-translate-y-1 hover:bg-cyan-400/10 ${focusRing}`}
              >
                Contact Me ✉️
              </a>
            </div>
          </div>

          {/* decorative tech visual */}
          <div className="relative mx-auto flex h-[22rem] w-full max-w-md items-center justify-center sm:h-[26rem]" aria-hidden="true">
            <div className="ring1 absolute h-72 w-72 rounded-full border border-dashed border-cyan-300/40 sm:h-80 sm:w-80" />
            <div className="ring2 absolute h-56 w-56 rounded-full border border-violet-400/40 sm:h-64 sm:w-64" />
            <div className="absolute h-40 w-40 rounded-full bg-gradient-to-br from-cyan-400/40 to-violet-500/40 blur-2xl" />

            <div className={`${glass} bob relative w-64 p-4 font-mono text-xs leading-6 shadow-cyan-500/10 sm:w-72`}>
              <div className="mb-2 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <p><span className="text-violet-400">const</span> <span className="text-cyan-300">student</span> = {"{"}</p>
              <p className="pl-4">name: <span className="text-emerald-300">&quot;Abdul Mateen&quot;</span>,</p>
              <p className="pl-4">uni: <span className="text-emerald-300">&quot;Sargodha&quot;</span>,</p>
              <p className="pl-4">learning: [<span className="text-emerald-300">&quot;Web&quot;</span>, <span className="text-emerald-300">&quot;AI&quot;</span>],</p>
              <p>{"}"}<span className="caret ml-0.5 text-cyan-300">▍</span></p>
            </div>

            <span className="bob absolute left-2 top-10 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl backdrop-blur">⚛️</span>
            <span className="bob absolute right-2 top-20 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl backdrop-blur [animation-delay:1s]">🤖</span>
            <span className="bob absolute bottom-10 left-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl backdrop-blur [animation-delay:2s]">🧊</span>
            <span className="bob absolute bottom-16 right-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl backdrop-blur [animation-delay:3s]">💻</span>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="mx-auto max-w-5xl px-5 py-20">
          <SectionTitle title="About Me" />
          <div className={`${glass} grid items-center gap-8 p-8 md:grid-cols-[auto_1fr]`}>
            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-6xl shadow-lg shadow-violet-500/30">
              👨‍💻
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{ME.name}</h3>
              <p className="mt-1 text-cyan-300">BS IT Student · University of Sargodha</p>
              <p className="mt-4 leading-relaxed text-slate-400">
                I am a BS Information Technology student at the University of Sargodha. I am
                learning web development and artificial intelligence, and I enjoy turning ideas
                into clean, modern websites. I am also exploring 3D modeling to add creativity to
                my work.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="mx-auto max-w-5xl px-5 py-20">
          <SectionTitle title="Skills" text="The tools I use and the strengths I bring." />
          <div className="grid gap-6 md:grid-cols-2">
            <div className={`${glass} p-6`}>
              <h3 className="mb-5 text-xl font-bold text-white">
                <span className="mr-2">🖥️</span>Technology
              </h3>
              <ul className="space-y-4">
                {TECH_SKILLS.map((s) => (
                  <li key={s.name} className={`flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 ${lift}`}>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-2xl">{s.emoji}</span>
                    <span>
                      <span className="block font-semibold text-white">{s.name}</span>
                      <span className="text-sm text-slate-400">{s.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${glass} p-6`}>
              <h3 className="mb-5 text-xl font-bold text-white">
                <span className="mr-2">🤝</span>Professional
              </h3>
              <ul className="space-y-4">
                {PRO_SKILLS.map((s) => (
                  <li key={s.name} className={`flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 ${lift}`}>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-violet-400/10 text-2xl">{s.emoji}</span>
                    <span>
                      <span className="block font-semibold text-white">{s.name}</span>
                      <span className="text-sm text-slate-400">{s.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
          <SectionTitle title="Projects" text="My work so far, with more on the way." />
          <div className="grid gap-6 md:grid-cols-3">
            {PROJECTS.map((p) => (
              <article key={p.title} className={`${glass} ${lift} flex flex-col overflow-hidden`}>
                <div className="flex h-36 items-center justify-center bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-violet-500/30 text-6xl">
                  {p.emoji}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-bold text-white">{p.title}</h3>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        p.live ? "bg-emerald-400/15 text-emerald-300" : "bg-white/10 text-slate-400"
                      }`}
                    >
                      {p.live ? "Project" : "Coming soon"}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{p.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span key={t} className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="mx-auto max-w-5xl px-5 py-20">
          <SectionTitle title="Contact" text="Have a question or an idea? Send me a message." />
          <div className="grid gap-6 md:grid-cols-5">
            <div className="space-y-4 md:col-span-2">
              <a href={`mailto:${ME.email}`} className={`${glass} ${lift} flex items-center gap-4 p-5 ${focusRing}`}>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl">✉️</span>
                <span className="min-w-0">
                  <span className="block text-sm text-slate-500">Email</span>
                  <span className="block break-all font-medium text-white">{ME.email}</span>
                </span>
              </a>
              <a href={ME.linkedin} target="_blank" rel="noreferrer" className={`${glass} ${lift} flex items-center gap-4 p-5 ${focusRing}`}>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-400/10 text-2xl">💼</span>
                <span>
                  <span className="block text-sm text-slate-500">LinkedIn</span>
                  <span className="block font-medium text-white">View profile</span>
                </span>
              </a>
              <a href={ME.github} target="_blank" rel="noreferrer" className={`${glass} ${lift} flex items-center gap-4 p-5 ${focusRing}`}>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl">🐙</span>
                <span>
                  <span className="block text-sm text-slate-500">GitHub</span>
                  <span className="block font-medium text-white">View repositories</span>
                </span>
              </a>
            </div>

            <form onSubmit={submit} className={`${glass} space-y-4 p-6 md:col-span-3`}>
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-slate-300">Name</label>
                <input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className={field} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-slate-300">Email</label>
                <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className={field} />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-slate-300">Message</label>
                <textarea id="message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can I help?" className={`${field} resize-none`} />
              </div>
              <button
                type="submit"
                className={`w-full rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 py-3 text-sm font-semibold text-[#050816] shadow-lg shadow-cyan-500/30 transition hover:-translate-y-1 hover:shadow-cyan-400/50 ${focusRing}`}
              >
                Send Message 🚀
              </button>
              {sent && (
                <p role="status" className="text-center text-sm text-emerald-300">
                  Opening your email app to send the message...
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-10 border-t border-white/10 bg-[#050816]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {ME.name}. Built with Next.js and Tailwind CSS.
          </p>
          <div className="flex gap-3 text-sm">
            <a href={ME.github} target="_blank" rel="noreferrer" className={`rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-200 ${focusRing}`}>
              GitHub
            </a>
            <a href={ME.linkedin} target="_blank" rel="noreferrer" className={`rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-300 transition hover:border-violet-300/50 hover:text-violet-200 ${focusRing}`}>
              LinkedIn
            </a>
            <a href={`mailto:${ME.email}`} className={`rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-200 ${focusRing}`}>
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}