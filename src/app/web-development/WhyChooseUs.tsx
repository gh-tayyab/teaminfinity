"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhyChooseUs() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.muted = false;
        videoRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log("Play error:", err));
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-white to-cyan-50 py-16 px-6">
      {/* Decorative Blur */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-[50px] left-0 w-[60px] h-[350px] bg-cyan-500 rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto text-left">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-cyan-600 mb-2 uppercase tracking-wide"
        >
          ✱ Why Choose Us
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Reasons why leading brands choose us.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-3 text-gray-600"
        >
          We blend strategy, creativity, and technology to deliver measurable
          impact. Our commitment to innovation and client success has made us
          the trusted partner of brands seeking results that truly matter.
        </motion.p>

        {/* Video Section */}
        <div className="mt-8 relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-300">
          <video
            ref={videoRef}
            className="w-full aspect-video object-cover"
            src="/videos/vido.mp4"
            loop
            playsInline
            poster="/images/video-poster.jpg"
          />

          {/* Overlay Play / Pause Button with Framer Motion */}
          <button
            type="button"
            aria-label={isPlaying ? "Pause video" : "Play video"}
            onClick={handleToggle}
            className={`absolute inset-0 flex items-center justify-center ${
              isPlaying ? "bg-black/10" : "bg-black/40 hover:bg-black/50"
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isPlaying ? "pause" : "play"}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-10 h-10"
                >
                  {isPlaying ? (
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /> // pause
                  ) : (
                    <path d="M8 5v14l11-7z" /> // play
                  )}
                </svg>
              </motion.div>
            </AnimatePresence>
          </button>
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-gray-600"
        >
          Placerat justo amet elit in tincidunt est risus vel purus. A convallis
          vel bibendum odio nunc. Lectus faucibus ac in ipsum amet nullam turpis.
          Vel vitae aliquam eget faucibus at libero dignissim arcu aliquam.
        </motion.p>
      </div>
    </section>
  );
}
