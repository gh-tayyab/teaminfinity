"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const services = [
  {
    key: "web-development",
    title: "Web Development",
    desc: "Custom, performant websites built with modern stacks — SEO friendly, responsive, and scalable.",
    bullets: [
      "Jam-packed with best practices",
      "Performance & accessibility",
      "CMS & headless setups",
    ],
    img: "/images/services/web-development.jpg",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 6h16M4 12h16M4 18h16"
          stroke="#06b6d4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "graphic-designing",
    title: "Graphic Designing",
    desc: "Brand visuals, logos, social assets and print-ready designs created to elevate your identity.",
    bullets: ["Brand identity", "Social & print assets", "Illustrations & icons"],
    img: "/images/serviceimage1.svg",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z"
          stroke="#06b6d4"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "digital-marketing",
    title: "Digital Marketing",
    desc: "ROI-focused campaigns, organic growth and data-driven strategies for measurable results.",
    bullets: ["Paid & organic", "Conversion tracking", "Campaign optimisation"],
    img: "/images/serviceimage2.svg",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M3 12h3l3 8 7-16 3 8h3"
          stroke="#06b6d4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "ai-automation",
    title: "AI Automation",
    desc: "Automate workflows, build smart helpers and integrate LLMs to save time and scale processes.",
    bullets: ["Custom agents & pipelines", "Chatbots & assistants", "Data automation"],
    img: "/images/services/ai-automation.jpg",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 2v20M2 12h20M4 4l16 16"
          stroke="#06b6d4"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "search-engine-optimization",
    title: "Search Engine Optimization",
    desc: "Technical SEO, content strategy and link-building to increase organic visibility and traffic.",
    bullets: ["On-page & technical", "Keyword strategy", "Content optimisation"],
    img: "/images/services/seo.jpg",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 20v-4a4 4 0 014-4h8a4 4 0 014 4v4"
          stroke="#06b6d4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 10a4 4 0 118 0"
          stroke="#06b6d4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "shopify-development",
    title: "Shopify Development",
    desc: "Full Shopify builds, theme customisation and headless commerce setups to convert visitors into customers.",
    bullets: ["Custom themes", "Checkout & integrations", "Scale & analytics"],
    img: "/images/serviceimage3.svg",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M3 3h18v4H3zM6 7v12a2 2 0 002 2h8a2 2 0 002-2V7"
          stroke="#06b6d4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "ui-ux-designing",
    title: "UI/UX Designing",
    desc: "User-centred design, prototypes and interfaces that feel intuitive and convert better.",
    bullets: ["Wireframes & prototypes", "Design systems", "Usability testing"],
    img: "/images/serviceimage3.svg",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#06b6d4" strokeWidth="1.4" />
        <path d="M8 12h8" stroke="#06b6d4" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "video-editing",
    title: "Video Editing",
    desc: "Short-form & long-form video edits, motion graphics and polish for social and brand storytelling.",
    bullets: ["Social-ready cuts", "Motion graphics", "Sound & color grading"],
    img: "/images/services/video-editing.jpg",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M23 7l-7 5 7 5V7zM1 5h14v14H1z"
          stroke="#06b6d4"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

// Large Card
const LargeCard = ({ s }: { s: (typeof services)[number] }) => (
  <article
    className="relative bg-white rounded-[16px] border border-gray-200 shadow-md overflow-hidden 
    w-full flex-1 h-auto lg:h-[308px]"
    aria-labelledby={`svc-${s.key}-title`}
  >
    <div className="h-full flex flex-col lg:flex-row">
      <div className="p-6 flex-1">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 bg-[#ECFEFF] rounded-lg p-3">{s.icon}</div>
          <div>
            <h3 id={`svc-${s.key}-title`} className="text-lg font-semibold text-gray-900 mb-1">
              {s.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3">{s.desc}</p>
            <ul className="text-sm text-gray-600 space-y-1">
              {s.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 text-[#06b6d4]">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="hidden lg:block w-[280px] h-full overflow-hidden">
        <Image
          src={s.img}
          alt={`${s.title} preview`}
          width={280}
          height={308}
          className="object-cover w-full h-full"
        />
      </div>
    </div>

    <div className="lg:absolute lg:left-6 lg:bottom-6 p-6 lg:p-0">
      <Link
        href={`/services/${s.key}`}
        aria-label={`Learn more about ${s.title}`}
        className="inline-flex items-center gap-2 px-4 py-2 bg-[#00B7CD] text-white rounded-full text-sm font-medium hover:bg-cyan-600 transition"
      >
        Learn More
      </Link>
    </div>
  </article>
);

// Small Card
const SmallCard = ({ s }: { s: (typeof services)[number] }) => (
  <article
    className="relative bg-white rounded-[16px] border border-gray-200 shadow-md overflow-hidden 
    w-full flex-1 h-auto lg:h-[308px]"
    aria-labelledby={`svc-${s.key}-title`}
  >
    <div className="p-6 h-full flex flex-col justify-between">
      <div>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 bg-[#ECFEFF] rounded-lg p-3">{s.icon}</div>
          <div>
            <h3 id={`svc-${s.key}-title`} className="text-lg font-semibold text-gray-900 mb-1">
              {s.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3">{s.desc}</p>
            <ul className="text-sm text-gray-600 space-y-1">
              {s.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 text-[#06b6d4]">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="lg:absolute lg:left-6 lg:bottom-6 mt-4 lg:mt-0">
        <Link
          href={`/services/${s.key}`}
          aria-label={`Learn more about ${s.title}`}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#00B7CD] text-white rounded-full text-sm font-medium hover:bg-cyan-600 transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  </article>
);

// Services Grid
const ServicesGrid: React.FC = () => {
  const rows: Array<[(typeof services)[number], (typeof services)[number] | undefined]> = [];
  for (let i = 0; i < services.length; i += 2) {
    rows.push([services[i], services[i + 1]]);
  }

  return (
    <section
      aria-labelledby="services-grid-heading"
      className="relative py-16 bg-gradient-to-b from-transparent to-white"
    >
            <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-[#00B7CD] opacity-20 blur-3xl z-0" />
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <h2
          id="services-grid-heading"
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-8"
        >
          Our Services
        </h2>

        <div className="flex flex-col gap-8">
          {rows.map(([a, b], rowIndex) => {
            const firstIsLarge = rowIndex % 2 === 1;
            const secondIsLarge = !firstIsLarge;

            return (
              <div
                key={rowIndex}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
              >
                {a && (firstIsLarge ? <LargeCard s={a} /> : <SmallCard s={a} />)}
                {b && (secondIsLarge ? <LargeCard s={b} /> : <SmallCard s={b} />)}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
