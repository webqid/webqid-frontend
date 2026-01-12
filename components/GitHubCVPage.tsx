"use client";

import { SKILLS, EXPERIENCE, EDUCATION, LANGUAGES } from "@/data/cv-data";
import Image from "next/image";
import React from "react";

/**
 * GitHub-inspired CV page with repository-style design.
 */
export default function GitHubCVPage(): React.JSX.Element {
  const totalContributions = EXPERIENCE.reduce(
    (acc, exp) => acc + exp.highlights.length * 12,
    0
  );

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
      {/* GitHub-style header */}
      <header className="border-b border-[#30363d] bg-[#161b22]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <svg
              height="32"
              viewBox="0 0 16 16"
              width="32"
              className="fill-white"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <nav className="flex items-center gap-4 text-sm">
              <span className="text-[#e6edf3] font-semibold">
                christianvdweerd
              </span>
              <span className="text-[#8b949e]">/</span>
              <span className="text-[#e6edf3] font-semibold">career</span>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Profile */}
          <aside className="lg:w-80 shrink-0">
            {/* Avatar */}
            <div className="relative mb-4 max-w-[200px] mx-auto lg:max-w-none">
              <div className="w-full aspect-square rounded-full bg-gradient-to-br from-[#238636] to-[#1f6feb] p-1">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="/jcvandeweerd-pfp.png"
                    alt="Christian van de Weerd"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#238636] border-4 border-[#0d1117] flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            </div>

            {/* Name */}
            <h1 className="text-2xl font-bold text-[#e6edf3]">
              Christian van de Weerd
            </h1>
            <p className="text-xl text-[#8b949e] mb-4">christianvdweerd</p>

            {/* Bio */}
            <p className="text-[#e6edf3] mb-4">
              Senior Frontend Developer crafting pixel-perfect interfaces with
              20+ years of engineering excellence.
            </p>

            {/* Status */}
            <div className="flex items-center gap-2 text-sm text-[#8b949e] mb-4 p-2 border border-[#30363d] rounded-md">
              <span className="text-green-500">🟢</span>
              <span>Available for new opportunities</span>
            </div>

            {/* Follow button */}
            <button className="w-full py-1.5 px-4 bg-[#21262d] border border-[#30363d] rounded-md text-sm font-medium hover:bg-[#30363d] transition-colors mb-4">
              Contact
            </button>

            {/* Profile details */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-[#8b949e]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0z" />
                </svg>
                <span className="text-[#e6edf3]">webqid</span>
              </div>
              <div className="flex items-center gap-2 text-[#8b949e]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536z" />
                </svg>
                <span>Wageningen, Netherlands</span>
              </div>
              <div className="flex items-center gap-2 text-[#8b949e]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z" />
                </svg>
                <a href="https://webqid.com" className="text-[#58a6ff] hover:underline">
                  webqid.com
                </a>
              </div>
            </div>

            {/* Languages */}
            <div className="mt-6 pt-6 border-t border-[#30363d]">
              <h3 className="text-sm font-semibold mb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map((lang) => (
                  <span
                    key={lang.language}
                    className="inline-flex items-center gap-1 text-xs"
                  >
                    <span className="w-3 h-3 rounded-full bg-[#f1e05a]" />
                    <span className="text-[#e6edf3]">{lang.language}</span>
                    <span className="text-[#8b949e]">({lang.level})</span>
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            {/* Tabs */}
            <nav className="flex gap-4 border-b border-[#30363d] mb-6">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#e6edf3] border-b-2 border-[#f78166] -mb-px">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8z" />
                </svg>
                Overview
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-[#8b949e] hover:text-[#e6edf3]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16h-9.5A1.75 1.75 0 012 14.25V1.75z" />
                </svg>
                Projects
                <span className="px-1.5 py-0.5 text-xs bg-[#30363d] rounded-full">
                  {EXPERIENCE.length}
                </span>
              </button>
            </nav>

            {/* Contribution graph */}
            <section className="mb-8 p-4 bg-[#161b22] border border-[#30363d] rounded-md overflow-x-auto">
              <h2 className="text-sm text-[#8b949e] mb-4">
                {totalContributions} contributions in the last year
              </h2>
              <div className="grid grid-cols-[repeat(53,minmax(8px,1fr))] gap-0.5 min-w-[400px]">
                {Array.from({ length: 371 }).map((_, i) => {
                  const intensity = Math.random();
                  let bg = "bg-[#161b22]";
                  if (intensity > 0.8) bg = "bg-[#39d353]";
                  else if (intensity > 0.6) bg = "bg-[#26a641]";
                  else if (intensity > 0.4) bg = "bg-[#006d32]";
                  else if (intensity > 0.2) bg = "bg-[#0e4429]";
                  return (
                    <div
                      key={i}
                      className={`aspect-square rounded-sm ${bg}`}
                    />
                  );
                })}
              </div>
              <div className="flex items-center justify-end gap-1 mt-2 text-xs text-[#8b949e]">
                <span>Less</span>
                <div className="w-2.5 h-2.5 rounded-sm bg-[#161b22]" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#0e4429]" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#006d32]" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#26a641]" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#39d353]" />
                <span>More</span>
              </div>
            </section>

            {/* Skills as pinned repos */}
            <section className="mb-8">
              <h2 className="text-base font-semibold mb-4 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5z" />
                </svg>
                Pinned Skills
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(SKILLS)
                  .slice(0, 6)
                  .map(([category, skills]) => (
                    <div
                      key={category}
                      className="p-4 bg-[#161b22] border border-[#30363d] rounded-md hover:border-[#8b949e] transition-colors"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-[#8b949e]"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9z" />
                          </svg>
                          <span className="text-[#58a6ff] font-semibold text-sm hover:underline cursor-pointer">
                            {category.toLowerCase().replace(/\s+/g, "-")}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-[#8b949e] mb-3 line-clamp-2">
                        {skills.map((s) => s.label).join(", ")}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-[#8b949e]">
                        <span className="flex items-center gap-1">
                          <span
                            className="w-3 h-3 rounded-full"
                            style={{
                              backgroundColor:
                                category === "Frontend Architecture"
                                  ? "#3178c6"
                                  : category === "UI and Styling"
                                  ? "#f1e05a"
                                  : category === "Web3"
                                  ? "#8247e5"
                                  : "#e34c26",
                            }}
                          />
                          {skills[0]?.label || "TypeScript"}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                          </svg>
                          {Math.floor(skills.reduce((a, s) => a + s.level, 0) / skills.length)}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </section>

            {/* Experience as repositories */}
            <section>
              <h2 className="text-base font-semibold mb-4 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9z" />
                </svg>
                Work Experience
              </h2>
              <div className="space-y-4">
                {EXPERIENCE.map((exp, idx) => (
                  <article
                    key={idx}
                    className="p-4 bg-[#161b22] border border-[#30363d] rounded-md"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="flex items-center gap-2 mb-1">
                          <svg
                            className="w-4 h-4 text-[#8b949e]"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9z" />
                          </svg>
                          <span className="text-[#58a6ff] font-semibold hover:underline cursor-pointer">
                            {exp.company.toLowerCase().replace(/\s+/g, "-")}
                          </span>
                          <span className="text-xs px-1.5 py-0.5 border border-[#30363d] rounded-full text-[#8b949e]">
                            {exp.role}
                          </span>
                        </h3>
                        <p className="text-xs text-[#8b949e]">
                          {exp.location} • {exp.period}
                        </p>
                      </div>
                    </div>

                    {/* Highlights as commits */}
                    <ul className="mt-3 space-y-1.5 text-sm text-[#e6edf3]">
                      {exp.highlights.slice(0, 3).map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <svg
                            className="w-4 h-4 text-[#238636] shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                          </svg>
                          <span className="text-[#8b949e]">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.stack.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs bg-[#388bfd1a] text-[#58a6ff] rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    {exp.links && exp.links.length > 0 && (
                      <div className="flex gap-4 mt-3 pt-3 border-t border-[#30363d]">
                        {exp.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-[#58a6ff] hover:underline flex items-center gap-1"
                          >
                            <svg
                              className="w-3 h-3"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25z" />
                            </svg>
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mt-8">
              <h2 className="text-base font-semibold mb-4 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M7.693 1.066a.75.75 0 01.614 0l7.25 3.25a.75.75 0 010 1.368L8.307 8.934a.75.75 0 01-.614 0L.443 5.684a.75.75 0 010-1.368l7.25-3.25z" />
                  <path d="M2.5 8.25v4.25a.75.75 0 00.46.693l4.75 2a.75.75 0 00.58 0l4.75-2a.75.75 0 00.46-.693V8.25l-5 2.115a2.25 2.25 0 01-1.74 0L2.5 8.25z" />
                </svg>
                Education
              </h2>
              <div className="space-y-3">
                {EDUCATION.map((edu, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-3 bg-[#161b22] border border-[#30363d] rounded-md"
                  >
                    <div className="w-10 h-10 bg-[#21262d] rounded-md flex items-center justify-center text-[#8b949e]">
                      🎓
                    </div>
                    <div>
                      <p className="font-medium text-[#e6edf3]">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-[#8b949e]">
                        {edu.field} • {edu.period}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
