"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhyChooseUs() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const togglePlay = async () => {
    if (!videoRef.current) return;
    try {
      if (isPlaying) {
        videoRef.current.pause();
        // onPause handler will sync state
      } else {
        // If you want sound, unmute on user interaction:
        videoRef.current.muted = false;
        await videoRef.current.play();
        // onPlay handler will sync state
      }
    } catch (err) {
      console.error("Play error:", err);
    }
  };

  // visible if paused OR (playing && hovering anywhere over the video wrapper)
  const showButton = !isPlaying || (isPlaying && isHover);

  return (
    <section className="relative bg-[#F2FBFD] py-16 px-6">
      <div aria-hidden="true" className="hidden lg:block absolute top-[50px] left-0 w-[60px] h-[350px] bg-cyan-500 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-left">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-sm font-medium text-cyan-600 mb-2 uppercase tracking-wide">
          ✱ Why Choose Us
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-gray-900">
          Reasons why leading brands choose us.
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} viewport={{ once: true }} className="mt-3 text-gray-600">
          We blend strategy, creativity, and technology to deliver measurable impact. Our commitment to innovation and client success has made us the trusted partner of brands seeking results that truly matter.
        </motion.p>

        {/* VIDEO WRAPPER: hover tracked here so entire video area triggers */}
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="mt-8 relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-300"
        >
          <video
            ref={videoRef}
            className="w-full aspect-video object-cover"
            src="/videos/vido.mp4"
            loop
            playsInline
            poster="/images/video-poster.jpg"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* FULL-SIZE CLICKOVER: captures clicks anywhere on the video area.
              It's transparent (no background) so the video is visible, but it receives pointer events.
              Also handles keyboard toggles (Enter / Space). */}
          <div
            role="button"
            tabIndex={0}
            onClick={togglePlay}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                togglePlay();
              }
            }}
            className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {showButton && (
                <motion.div
                  key={isPlaying ? "pause-icon" : "play-icon"}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="w-24 h-24 bg-red-600/95 rounded-full flex items-center justify-center shadow-lg text-white"
                >
                  {/* show pause icon when playing, play icon when paused */}
                  {!isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="white" viewBox="0 0 24 24" className="w-12 h-12">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="white" viewBox="0 0 24 24" className="w-12 h-12">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} viewport={{ once: true }} className="mt-6 text-center text-gray-600">
          Placerat justo amet elit in tincidunt est risus vel purus. A convallis vel bibendum odio nunc. Lectus faucibus ac in ipsum amet nullam turpis. Vel vitae aliquam eget faucibus at libero dignissim arcu aliquam.
        </motion.p>
      </div>
    </section>
  );
}
