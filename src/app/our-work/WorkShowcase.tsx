"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Website",
    category: "Web Development",
    video: "/videos/ecommerce.mp4",
    thumbnail: "/images/web.jpeg",
  },
  {
    title: "Brand Identity Design",
    category: "Graphic Design",
    video: "/videos/branding.mp4",
    thumbnail: "/images/graphic.jpg",
  },
  {
    title: "Social Media Ad Campaign",
    category: "Digital Marketing",
    video: "/videos/social.mp4",
    thumbnail: "/images/digital.jpeg",
  },
  {
    title: "Cinematic Product Video",
    category: "Video Editing",
    video: "/videos/product.mp4",
    thumbnail: "/images/video.jpg",
  },
];

export default function WorkShowcase() {
  return (
    <section
      id="work-showcase"
      className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-8"
    >
      {projects.map((project, index) => (
        <motion.article
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100"
        >
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={500}
              height={400}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
            />
            <motion.video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 object-cover w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              src={project.video}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute bottom-6 left-6 right-6 z-10 text-white"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm mt-1 opacity-90">{project.category}</p>
          </motion.div>
        </motion.article>
      ))}
    </section>
  );
}
