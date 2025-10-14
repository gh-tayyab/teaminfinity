"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const services = [
  {
    key: "web-development",
    title: "Web Development",
    desc: "Custom, performant websites built with modern stacks - Responsive, & scalable.",
    bullets: [
      "Jam-packed with best practices",
      "Performance & accessibility",
      "CMS & headless setups",
    ],
    img: "/images/web.jpeg",
    iconImg: "/images/web.png",
  },
  {
    key: "graphic-designing",
    title: "Graphic Designing",
    desc: "Brand visuals, logos, social assets and print-ready designs created to elevate your identity.",
    bullets: [
      "Brand identity",
      "Social & print assets",
      "Illustrations & icons",
    ],
    img: "/images/graphic.jpg",
    iconImg: "/images/graphic.png",
  },
  {
    key: "digital-marketing",
    title: "Digital Marketing",
    desc: "ROI-focused campaigns, organic growth and data-driven strategies for measurable results.",
    bullets: ["Paid & organic", "Conversion tracking", "Campaign optimisation"],
    img: "/images/digital.jpg",
    iconImg: "/images/digital.png",
  },
  {
    key: "ai-automation",
    title: "AI Automation",
    desc: "Automate workflows, build smart helpers & integrate LLM to save time & scale processes.",
    bullets: [
      "Custom agents & pipelines",
      "Chatbots & assistants",
      "Data automation",
    ],
    img: "/images/ai.jpg",
    iconImg: "/images/ai.png",
  },
  {
    key: "search-engine-optimization",
    title: "Search Engine Optimization",
    desc: "Technical SEO, content strategy and link-building to increase organic visibility and traffic.",
    bullets: [
      "On-page & technical",
      "Keyword strategy",
      "Content optimisation",
    ],
    img: "/images/seo.jpg",
    iconImg: "/images/seo.png",
  },
  {
    key: "shopify-development",
    title: "Shopify Development",
    desc: "Full Shopify builds, theme customisation and headless commerce setups to convert visitors into customers.",
    bullets: ["Custom themes", "Checkout & integrations", "E-Commerce"],
    img: "/images/shopify.jpg",
    iconImg: "/images/shopify.png",
  },
  {
    key: "ui-ux-designing",
    title: "UI/UX Designing",
    desc: "User-centred design, prototypes and interfaces that feel intuitive and convert better.",
    bullets: ["Wireframes & prototypes", "Design systems", "Usability testing"],
    img: "/images/uiux.jpg",
    iconImg: "/images/uiux.png",
  },
  {
    key: "video-editing",
    title: "Video Editing",
    desc: "Short-form & long-form video edits, motion graphics and polish for social and brand storytelling.",
    bullets: ["Social-ready cuts", "Motion graphics", "Sound & color grading"],
    img: "/images/video.jpg",
    iconImg: "/images/video.png",
  },
];

const Card = ({ s }: { s: (typeof services)[number] }) => {
  return (
    <Link
      href={`/services/${s.key}`}
      aria-label={`Open ${s.title} service page`}
      className="relative bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden w-full max-w-[620px] h-auto group focus:outline-none focus:ring-2 focus:ring-cyan-100 transition-transform flex flex-col hover:scale-[1.02]"
    >
      {/* Content */}
      <div className="flex-1 flex flex-col justify-between p-6 bg-white">
        <div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 hidden lg:block bg-[#ECFEFF] rounded-lg p-3">
              {s.iconImg ? (
                <Image
                  src={s.iconImg}
                  alt={`${s.title} icon`}
                  width={30}
                  height={30}
                  className="block"
                />
              ) : (
                <div className="w-6 h-6 bg-cyan-100 rounded-sm" />
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {s.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{s.desc}</p>

              {/* Bullets with Learn More button in last */}
              <ul className="text-sm text-gray-600 space-y-1">
                {s.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start justify-between gap-2"
                  >
                    <div className="flex items-start gap-2">
                      <span
                        className="mt-1 text-[#06b6d4]"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span>{b}</span>
                    </div>

                    {i === s.bullets.length - 1 && (
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#00B7CD] text-white rounded-full text-xs font-medium transition-transform transform group-hover:scale-105">
                        Learn More
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Image bottom full width */}
      <figure className="w-full h-48 lg:h-56 overflow-hidden bg-white">
        <Image
          src={s.img}
          alt={`${s.title} preview`}
          width={1200}
          height={420}
          className="object-cover w-full h-full"
        />
      </figure>
    </Link>
  );
};

// Services Grid (no motion)
const ServicesGrid: React.FC = () => {
  return (
    <section
      aria-labelledby="services-grid-heading"
      className="relative py-16 bg-[#F2FBFD]"
    >
      <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-[#00B7CD] opacity-20 blur-3xl z-0" />
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <header>
          <h2
            id="services-grid-heading"
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-8"
          >
            Our Services
          </h2>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {services.map((s) => (
            <Card key={s.key} s={s} />
          ))}
        </main>
      </div>
    </section>
  );
};

export default ServicesGrid;
