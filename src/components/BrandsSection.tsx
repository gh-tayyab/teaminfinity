"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function BrandsSection() {
  const brands = [
    ["/images/brand1.svg", "/images/brand2.svg", "/images/brand3.svg", "/images/brand4.svg", "/images/brand5.svg"],
    ["/images/brand6.svg", "/images/brand7.svg", "/images/brand8.svg", "/images/brand9.svg"],
    ["/images/brand10.svg", "/images/brand11.svg", "/images/brand12.svg"],
  ];

  return (
    <main id="main-content">
      <article
        id="brands"
        aria-labelledby="brands-heading"
        className="relative py-16 bg-[#F2FBFD] overflow-hidden"
      >
        {/* Background blur (keeps same) */}
        <motion.div
          className="absolute top-20 right-0 w-32 h-80 bg-[#00B7CD] opacity-20 rounded-full blur-3xl"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Container */}
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Decorative left image (absolute so it doesn't push center content) */}
          <motion.div
            className="hidden md:block -left-10 -top-20 absolute z-10 pointer-events-none"
            aria-hidden="true"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/image17.svg"
              alt=""
              width={220}
              height={220}
              className="object-contain"
              loading="lazy"
              sizes="220px"
              role="presentation"
            />
          </motion.div>

          {/* Centered content wrapper (this is the important change) */}
          <section className="relative z-20 flex flex-col items-center text-center">
            {/* Heading */}
            <motion.header
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="max-w-4xl mx-auto">
                <h2
                  id="brands-heading"
                  className="flex items-center justify-center gap-2 mb-8 text-sm font-semibold text-[#27272B] tracking-wider"
                >
                  <Star aria-hidden="true" className="w-4 h-4 text-[#36E1F8]" />
                  <span>We Work With</span>
                </h2>
              </div>
            </motion.header>

            {/* Logos Grid -> centered via max-w wrapper */}
            <div className="w-full">
              <div className="max-w-4xl mx-auto space-y-8">
                {brands.map((row, rowIndex) => (
                  <motion.ul
                    key={rowIndex}
                    className="flex items-center justify-center gap-6 md:gap-8 lg:gap-10 flex-wrap"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: rowIndex * 0.08 }}
                    viewport={{ once: true }}
                  >
                    {row.map((logo, logoIndex) => {
                      const rawName = logo.split("/").pop() || `brand-${rowIndex}-${logoIndex}`;
                      const friendlyName = rawName
                        .replace(/\.(svg|png|jpg|jpeg)/i, "")
                        .replace(/[-_\d]+/g, " ")
                        .trim();

                      return (
                        <li
                          key={logoIndex}
                          className="flex items-center justify-center min-w-[80px] h-12 px-2"
                        >
                          <Image
                            src={logo}
                            alt={friendlyName ? `${friendlyName} logo` : `Brand logo ${logoIndex + 1}`}
                            width={90}
                            height={40}
                            className="object-contain grayscale hover:grayscale-0 transition"
                            loading="lazy"
                            sizes="(max-width: 640px) 60px, 90px"
                          />
                        </li>
                      );
                    })}
                  </motion.ul>
                ))}
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
