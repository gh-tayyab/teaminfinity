"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const certifications = [
  {
    id: 1,
    icon: "/images/fb.svg",
    title: "Meta Ads Specialist",
    desc: "Certified in creating ad strategies that drive real results.",
    year: "2022",
  },
  {
    id: 2,
    icon: "/images/google.svg",
    title: "Google Search Expert",
    desc: "Qualified to build search ads that drive clicks and impact.",
    year: "2023",
  },
  {
    id: 3,
    icon: "/images/hubspot.svg",
    title: "HubSpot Strategist",
    desc: "Trained in building strategic content plans boost engagement.",
    year: "2024",
  },
];

export default function Certifications() {
  return (
    <motion.section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="relative min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20 bg-[#27272B] overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Left Side - Certifications List */}
      <motion.aside
        className="relative z-10 md:w-1/2 bg-white rounded-2xl shadow-lg p-8 divide-y"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {certifications.map((cert) => (
          <motion.article
            key={cert.id}
            className="flex items-start justify-between py-4"
            aria-label={cert.title}
            variants={{
              hidden: { opacity: 0, x: -50 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-start gap-4">
              <Image
                src={cert.icon}
                alt={`${cert.title} icon`}
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <header>
                <h3 className="text-lg font-semibold text-gray-900">
                  {cert.title}
                </h3>
                <p className="text-gray-600 text-sm">{cert.desc}</p>
              </header>
            </div>
            <motion.time
              dateTime={cert.year}
              className="bg-cyan-500 text-white text-xs font-medium px-3 py-1 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {cert.year}
            </motion.time>
          </motion.article>
        ))}
      </motion.aside>

      {/* Right Side - Text Content */}
      <motion.div
        className="relative z-10 mt-10 md:mt-0 md:w-1/2 md:pl-12 space-y-6 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <span className="uppercase text-sm font-semibold text-cyan-400 tracking-wider">
          Certification
        </span>
        <h2
          id="certifications-heading"
          className="text-3xl md:text-4xl font-bold text-white leading-snug"
        >
          Trusted certifications that validate our proven marketing skills.
        </h2>
        <p className="text-gray-300 max-w-lg mx-auto md:mx-0">
          Each certification we hold reflects our commitment to staying ahead in
          the digital marketing landscape, ensuring your brand gets the expert
          attention it deserves.
        </p>
      </motion.div>

      {/* Decorative Blur Layer */}
      <motion.div
        aria-hidden="true"
        className="absolute left-[-150px] bottom-[-100px] w-[350px] h-[350px] bg-cyan-500/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
    </motion.section>
  );
}
