"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Partner() {
  return (
    <section
      id="partner"
      aria-labelledby="partner-heading"
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-white to-cyan-50 px-6 md:px-12 py-12 md:py-20 overflow-hidden"
    >
      {/* Decorative Blurs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-300/40 rounded-full blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 items-center gap-8 max-w-7xl w-full">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-full max-w-[420px]">
            <Image
              src="/images/partnerleft.jpg"
              alt="Creative partner collaboration illustration"
              width={400}
              height={500}
              sizes="(max-width: 768px) 90vw, 400px"
              className="rounded-2xl shadow-lg object-cover w-full h-auto"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Center Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center space-y-6 px-2"
        >
          <span className="uppercase tracking-widest text-sm font-semibold text-cyan-600">
            Start a Collaboration
          </span>
          <h2
            id="partner-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug"
          >
            Partner with us for <br /> bigger impact.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-lg mx-auto">
            Join our journey as a trusted client or creative partner and grow
            with a shared vision, purpose, and lasting impact.
          </p>
          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 w-full md:w-auto justify-center px-6 py-3 bg-cyan-500 text-white rounded-full shadow-md hover:bg-cyan-600 transition"
          >
            Get A Free Consultation <ArrowRight size={18} />
          </a>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-8">
            {[
              { value: "23+", label: "Years of Experience" },
              { value: "200+", label: "Projects Completed" },
              { value: "357K+", label: "Happy Clients" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="bg-white shadow rounded-2xl p-4 text-center transition min-w-0"
              >
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-full max-w-[420px]">
            <Image
              src="/images/partnerright.jpg"
              alt="Teamwork and success illustration"
              width={400}
              height={500}
              sizes="(max-width: 768px) 90vw, 400px"
              className="rounded-2xl shadow-lg object-cover w-full h-auto"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
