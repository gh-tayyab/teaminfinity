// components/ProjectsSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type Project = {
  key: string;
  title: string;
  img: string;
  desc: string;
  href?: string;
  tags?: string[]; // optional tags (we won't render social tags as you asked)
};

const featured = {
  title: "E-commerce Boost",
  subtitle:
    "Helping an online retail store increase website traffic and sales through targeted social media advertising.",
  tags: ["advertising", "social media strategy"],
  href: "/our-expertise",
  // stats for the boxed chart area
  stats: [
    { label: "User", value: "3.3K", delta: "↑10.1%" },
    { label: "New User", value: "1.3K", delta: "↓6.2%" },
    { label: "Revenue", value: "$84K", delta: "↑7.6%" },
    { label: "Conversion Rate", value: "0.7%", delta: "↑9.6%" },
  ],
};

const projects: Project[] = [
  {
    key: "macopieprivee",
    title: "Macopieprivee",
    img: "/projects/web1.png",
    desc: "A simple guide to help businesses reclaim fees, cut storage costs, and save thousands of euros.",
    href: "https://macopieprivee.com/",
  },
  {
    key: "noble-brit",
    title: "Noble Brit",
    img: "/projects/web2.png",
    desc: "An online store offering Nike essentials and more with no minimum order, free shipping, and secure shopping.",
    href: "https://noblebrit.com",
  },
  {
    key: "deepak-&-fahad",
    title: "Deepak & Fahad",
    img: "/projects/web3.png",
    desc: "A contemporary Pakistani fashion brand blending timeless tradition with modern tailoring in menswear and womenswear.",
    href: "https://www.deepakandfahad.com/",
  },
  // add more projects as needed — the .map below will render them
];

const ProjectsSection: React.FC = () => {
  return (
    <section
      aria-labelledby="projects-heading"
      className="py-16 bg-gradient-to-r from-white to-cyan-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-sm text-slate-500 uppercase tracking-wide">
            Our Projects
          </p>
          <h2
            id="projects-heading"
            className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900"
          >
            Stay Ahead of the Game:
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            See Our Most Recent and Innovative Projects
          </p>
        </div>

        {/* Top featured area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Left: framed stats/chart (now uses an image) */}
          <div className="flex justify-center lg:justify-start">
            <div
              className="bg-[#00b7cd] rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg"
              style={{ maxWidth: 540, width: "100%" }}
            >
              <div className="bg-white rounded-lg p-4 md:p-6">
                {/* top stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  {featured.stats.map((s) => (
                    <div
                      key={s.label}
                      className="text-center p-2 rounded-md bg-slate-50"
                    >
                      <div className="text-sm text-slate-500">{s.label}</div>
                      <div className="text-base font-semibold text-slate-900">
                        {s.value}
                      </div>
                      <div className="text-xs text-slate-400">{s.delta}</div>
                    </div>
                  ))}
                </div>

                {/* chart area - image (responsive) */}
                <div className="mt-2 border rounded-md p-3">
                  <div className="relative w-full h-36 sm:h-44 rounded-md overflow-hidden bg-white">
                    {/* Put your chart image at /public/images/chart.svg (or .png) */}
                    <Image
                      src="/images/chart.svg"
                      alt="Campaign performance chart"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: featured content */}
          <div className="flex flex-col justify-center relative">
            {/* ✅ Robot image only on large screens */}
            <div
          className="hidden lg:block absolute right-0 -top-80 z-20 pointer-events-none"
          aria-hidden="true"
        >
          <Image
            src="/images/robot2.svg"
            alt=""
            width={260}
            height={260}
            className="select-none"
            loading="lazy"
          />
        </div>

            <div className="max-w-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {featured.title}
              </h3>

              {/* tags */}
              <div className="flex gap-2 items-center mb-4">
                {featured.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-sm text-slate-600 mb-6">{featured.subtitle}</p>

              <Link
                href={featured.href}
                className="inline-flex items-center gap-3 px-5 py-3 bg-[#00b7cd] text-white rounded-full text-sm font-medium hover:bg-cyan-600 transition"
                aria-label={`View case study for ${featured.title}`}
              >
                View Case Study
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M5 12h14M13 5l6 7-6 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Projects grid (map) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <article key={p.key} className="overflow-hidden">
              <div className="relative h-44 sm:h-48 md:h-44 lg:h-48">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover rounded-tl-2xl border-2"
                />
              </div>

              <div className="p-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {p.title}
                </h4>
                <p className="text-sm text-slate-600 mb-4">{p.desc}</p>

                <div className="mt-2">
                  <Link
                    href={p.href ?? "#"}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#00b7cd] text-white rounded-full text-sm font-medium hover:bg-cyan-600 transition"
                    aria-label={`View case study ${p.title}`}
                  >
                    View Project
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M5 12h14M13 5l6 7-6 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
