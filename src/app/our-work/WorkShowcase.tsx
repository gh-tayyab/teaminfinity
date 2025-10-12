"use client";

import React from "react";

type WorkItem = {
  id: number;
  title: string;
  category: string;
  videoSrc?: string;
  thumbnail: string;
};

const workData: WorkItem[] = [
  {
    id: 1,
    title: "E-Commerce Website for Fashion Brand",
    category: "Web Development",
    videoSrc: "/videos/vido.mp4",
    thumbnail: "/images/work1.jpg",
  },
  {
    id: 2,
    title: "Animated Promo for App Launch",
    category: "Video Editing",
    videoSrc: "/videos/vido.mp4",
    thumbnail: "/images/work2.jpg",
  },
  {
    id: 3,
    title: "AI Chatbot Integration for Client Support",
    category: "AI Automation",
    videoSrc: "/videos/vido.mp4",
    thumbnail: "/images/work3.jpg",
  },
];

export default function WorkShowcase() {
  return (
    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {workData.map((work) => (
        <div
          key={work.id}
          className="group relative overflow-hidden rounded-2xl shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-all duration-300"
        >
          <div className="relative w-full h-60 bg-gray-200 overflow-hidden">
            {/* Video or Thumbnail */}
            {work.videoSrc ? (
              <video
                src={work.videoSrc}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                controls
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={work.thumbnail}
                alt={work.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            )}
          </div>

          {/* Content */}
          <div className="p-5 text-center">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#06859F] transition-colors duration-300">
              {work.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{work.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
