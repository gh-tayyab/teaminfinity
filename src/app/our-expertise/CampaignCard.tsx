"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // ✅ Framer Motion import

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
  href?: string;
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
  href = "#",
}: CardProps) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      whileHover={{ scale: 1.02 }}
      className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col h-full transition"
      aria-labelledby={`campaign-${index}`}
    >
      <div className="p-6 flex-1 flex flex-col">
        <header className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 font-semibold">
                {index}
              </div>
            </div>
            <div>
              <h3
                id={`campaign-${index}`}
                className="text-lg font-semibold text-gray-900 leading-tight"
              >
                {title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 max-w-xl">
                {description}
              </p>
            </div>
          </div>
        </header>

        {/* Divider */}
        <div className="border-t border-gray-100 my-5" />

        {/* Key details */}
        <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
          <div>
            <dt className="text-xs text-gray-400">Client</dt>
            <dd className="font-medium text-sm mt-1">{client}</dd>
          </div>
          <div>
            <dt className="text-xs text-gray-400">Service</dt>
            <dd className="font-medium text-sm mt-1">{service}</dd>
          </div>
          <div>
            <dt className="text-xs text-gray-400">Category</dt>
            <dd className="font-medium text-sm mt-1">{category}</dd>
          </div>

          {/* ✅ Year + Button side by side */}
          <div className="flex items-center justify-between mt-1">
            <div>
              <dt className="text-xs text-gray-400">Year</dt>
              <dd className="font-medium text-sm mt-1">{year}</dd>
            </div>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 mt-4 inline-block text-sm font-medium text-cyan-600 hover:text-cyan-800 transition"
            >
              View Site →
            </Link>
          </div>
        </dl>
      </div>

      {/* Image */}
      <figure className="w-full left-14 h-40 md:h-44 lg:h-[440px] relative">
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
          className="object-cover"
          priority
        />
        <figcaption className="sr-only">{title} campaign visual</figcaption>
      </figure>
    </motion.article>
  );
}

export default function CampaignsSection(): React.JSX.Element {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  return (
    <section
      aria-labelledby="campaigns-heading"
      className="relative py-16 bg-[#F2FBFD]"
    >
      <div className="container mx-auto px-6">
        <motion.header
          className="flex flex-col md:flex-row items-start justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
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
        </motion.header>

        {/* Grid */}
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <CampaignCard
            index="01"
            title="Clothing Brand"
            description="We helped a growing clothing brand refresh its style and reach from creative visuals to smart social media campaigns, turning followers into real customers."
            client="Weave Wardrobe"
            category="Fashion & Apparel"
            service="Content Production"
            year="2024 - 2025"
            imgSrc="/images/campaign1.jpg"
            imgAlt="Dancers in colorful streetwear campaign photoshoot"
            href="https://weavewardrobe.com/"
          />

          <CampaignCard
            index="02"
            title="Jewelry Brand Success"
            description="We helped a modern jewelry brand elevate its online presence through elegant design, smart marketing, and authentic brand storytelling."
            client="RUSSET"
            category="Jewelry"
            service="Marketing & Web Design"
            year="2023 - 2024"
            imgSrc="/images/campaign2.jpg"
            imgAlt="Smiling model in beauty product photoshoot"
            href="https://shoprusset.com/"
          />

          <CampaignCard
            index="03"
            title="Fashion design"
            description="We partnered with Asta Aray, a rising clothing brand, to elevate their online presence and boost sales through creative visuals, targeted ads, and a strong digital strategy — helping them turn style into a fast-growing brand loved by customers."
            client="ASTA ARAY"
            category="Designing"
            service="Web Designing & SEO"
            year="2024 - 2025"
            imgSrc="/images/campaign3.png"
            imgAlt="Trainer holding tablet in a gym with equipment"
            href="https://www.astaaray.com/"
          />

          <CampaignCard
            index="04"
            title="Clothing Brand"
            description="We worked with IVAR, a Pakistani clothing brand, to enhance their digital presence through impactful marketing and eye-catching graphic design — helping them attract more customers and build a stronger identity online."
            client="IVAR Clothing"
            category="eCommerce"
            service="Digital Marketing & UI/UX design"
            year="2023 - 2025"
            imgSrc="/images/campaign4.jpg"
            imgAlt="Team celebrating around a laptop in a modern office"
            href="https://ivarclothing.com/"
          />
        </motion.div>
      </div>
    </section>
  );
}
