"use client";
import Image from "next/image";
import { Users, Lightbulb, Rocket, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <motion.section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="relative py-20 bg-gradient-to-br from-white to-cyan-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 px-6">
        {/* Left Content */}
        <motion.header
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-cyan-600 mb-2 flex items-center gap-1">
            <span className="text-lg">✦</span> WHY CHOOSE US
          </p>
          <h2
            id="why-choose-us-heading"
            className="text-4xl font-bold text-gray-900 leading-snug mb-6"
          >
            Reasons why leading <br /> brands choose us.
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg">
            We blend strategy, creativity, and technology to deliver measurable
            impact. Our commitment to innovation and client success has made us
            the trusted partner of brands seeking results that truly matter.
          </p>

          {/* Clients */}
          <aside className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {["avatar1.svg", "avatar2.svg", "avatar3.svg"].map(
                (avatar, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src={`/images/${avatar}`}
                      alt={`Client avatar ${index + 1}`}
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-white"
                    />
                  </motion.div>
                )
              )}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="font-semibold text-gray-900">355K+</p>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </motion.div>
          </aside>
        </motion.header>

        {/* Right Grid */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {cards.map(({ id, Icon, title, description }) => (
            <motion.article
              key={id}
              className="bg-white rounded-2xl shadow-sm p-6 border hover:shadow-md transition"
              aria-labelledby={`card-title-${id}`}
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className="w-7 h-7 text-cyan-600" />
                <h3
                  id={`card-title-${id}`}
                  className="font-semibold text-gray-900"
                >
                  {title}
                </h3>
              </div>
              <hr className="border-gray-200 mb-3" />
              <p className="text-gray-600 text-sm">{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

// Cards data
const cards = [
  {
    id: 1,
    Icon: Users,
    title: "Strategic-First Approach",
    description:
      "We craft data-driven strategies that drive long-term business growth and brand success.",
  },
  {
    id: 2,
    Icon: Lightbulb,
    title: "Creative That Converts",
    description:
      "Our visuals are not only eye-catching but also built to turn views into real conversions.",
  },
  {
    id: 3,
    Icon: Layers,
    title: "Expert Full-Service Team",
    description:
      "A multidisciplinary team that covers everything—strategy, design, and tech—all under one roof.",
  },
  {
    id: 4,
    Icon: Rocket,
    title: "Strong Proven Track Record",
    description:
      "Trusted by top brands, with a portfolio full of impactful, performance digital campaigns.",
  },
];
