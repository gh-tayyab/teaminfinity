"use client";
import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaigns | Team Infinity Case Studies",
  description:
    "Campaign outcomes and case studies — discover campaigns that deliver measurable business results across industries.",
};

type CardProps = {
  index: string;
  title: string;
  description: string;
  client: string;
  category: string;
  service: string;
  year: string;
  imgSrc: string;
  imgAlt: string;
};

function CampaignCard({
  index,
  title,
  description,
  client,
  category,
  service,
  year,
  imgSrc,
  imgAlt,
}: CardProps) {
  return (
    <article className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col h-full">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 font-semibold">
                {index}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                {title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 max-w-xl">{description}</p>
            </div>
          </div>

          {/* Optional: keep vertical space for future actions */}
          <div className="hidden md:block" />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-5" />

        {/* Key-values */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
          <div>
            <div className="text-xs text-gray-400">Client</div>
            <div className="font-medium text-sm mt-1">{client}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Service</div>
            <div className="font-medium text-sm mt-1">{service}</div>
          </div>

          <div>
            <div className="text-xs text-gray-400">Category</div>
            <div className="font-medium text-sm mt-1">{category}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Year</div>
            <div className="font-medium text-sm mt-1">{year}</div>
          </div>
        </div>
      </div>

      {/* Image area */}
      <div className="w-full left-10 h-40 md:h-44 lg:h-80 relative rounded-3xl">
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
          className="object-cover"
          priority
        />
      </div>
    </article>
  );
}

export default function CampaignsSection(): React.JSX.Element {
  return (
    <section
      aria-labelledby="campaigns-heading"
      className="relative py-16 bg-gradient-to-r from-cyan-50/60 via-white to-white"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-start justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-xs text-cyan-600 uppercase tracking-wider mb-3">
              Case Studies
            </p>
            <h2
              id="campaigns-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight"
            >
              Campaigns that deliver measurable business results.
            </h2>
          </div>

          <div className="mt-2">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 bg-cyan-500 text-white rounded-full text-sm shadow-md hover:bg-cyan-600 transition"
              aria-label="View all case study"
            >
              View All Case Study
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <CampaignCard
            index="01"
            title="Fashion Brand Campaign"
            description="A streetwear label went viral with influencer drops and reels, gaining 4.2M views and a 60% sales boost."
            client="Street Hypeyard"
            category="Fashion & Apparel"
            service="Content Production"
            year="2022 - 2024"
            imgSrc="/images/campaign1.svg"
            imgAlt="Dancers in colorful streetwear campaign photoshoot"
          />

          <CampaignCard
            index="02"
            title="Beauty Product Hype"
            description="A clean indie beauty brand sold out in just 3 days with countdowns, teasers, and creator collabs."
            client="Pure Bloom Spa"
            category="Beauty & Skincare"
            service="Influencer Marketing"
            year="2023 - 2024"
            imgSrc="/images/campaign2.svg"
            imgAlt="Smiling model in beauty product photoshoot"
          />

          <CampaignCard
            index="03"
            title="Fitness Studio Comeback"
            description="A fitness studio revived its brand through a challenge and local ads—tripling inquiries."
            client="FlexVibe Fitness"
            category="Fitness & Wellness"
            service="Paid Advertising"
            year="2024 - 2025"
            imgSrc="/images/campaign3.svg"
            imgAlt="Trainer holding tablet in a gym with equipment"
          />

          <CampaignCard
            index="04"
            title="SaaS Brand Campaign"
            description="A B2B SaaS brand saw a 40% lead increase after refreshing content and running LinkedIn founder campaigns."
            client="TrueLogic Core"
            category="B2B SaaS"
            service="Social Strategy"
            year="2023 - 2025"
            imgSrc="/images/campaign4.svg"
            imgAlt="Team celebrating around a laptop in a modern office"
          />
        </div>
      </div>
    </section>
  );
}
