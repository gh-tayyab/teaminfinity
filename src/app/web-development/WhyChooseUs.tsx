"use client";
import { useRef, useState } from "react";

export default function WhyChooseUs() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true); // overlay dikhana initially

  const handleToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.muted = false;
        videoRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setOverlayVisible(false); // play hone k baad overlay gayab
          })
          .catch((err) => console.log("Play error:", err));
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-white to-cyan-50 py-16 px-6">
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-[50px] left-0 w-[60px] h-[350px] bg-cyan-500 rounded-full blur-3xl"
      />
      <div className="max-w-4xl mx-auto text-left">
        {/* Heading */}
        <p className="text-sm font-medium text-cyan-600 mb-2 uppercase tracking-wide">
          ✱ Why Choose Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Reasons why leading brands choose us.
        </h2>
        <p className="mt-3 text-gray-600">
          We blend strategy, creativity, and technology to deliver measurable
          impact. Our commitment to innovation and client success has made us
          the trusted partner of brands seeking results that truly matter.
        </p>

        {/* Video Section */}
        <div
          className="mt-8 relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-400 cursor-pointer"
          onClick={handleToggle}
        >
          <video
            ref={videoRef}
            className="w-full aspect-video object-cover"
            src="/videos/myvido.mp4"
            loop
            playsInline
          />

          {/* Overlay Play Button */}
          {overlayVisible && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-10 h-10"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Text */}
        <p className="mt-6 text-center text-gray-600">
          Placerat justo amet elit in tincidunt est risus vel purus. A convallis
          vel bibendum odio nunc. Lectus faucibus ac in ipsum amet nullam
          turpis. Vel vitae aliquam eget faucibus at libero dignissim arcu
          aliquam.
        </p>
      </div>
    </section>
  );
}
