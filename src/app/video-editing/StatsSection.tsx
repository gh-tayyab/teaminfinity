import React from "react";
import Image from "next/image";

export default function StatsSection() {
  return (
    <section
      aria-labelledby="why-heading"
      className="relative bg-gradient-to-r from-white to-cyan-50 py-16"
    >
      {/* Decorative blur (only desktop) */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-0 right-0 w-[60px] h-[350px] bg-cyan-500 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6">
        {/* ---- Mobile Layout (image + stat pair) ---- */}
        <div className="sm:hidden space-y-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-xs h-56 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/about.svg"
                alt="Team collaborating around laptop"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="mt-4 text-center">
              <div className="text-3xl font-extrabold">😎 34+</div>
              <div className="mt-2 text-sm text-gray-500">Years Experience</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-xs h-56 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/footer.svg"
                alt="Team meeting in office"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="mt-4 text-center">
              <div className="text-3xl font-extrabold">💖 68M</div>
              <div className="mt-2 text-sm text-gray-500">Followers Tik Tok</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-xs h-56 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/servicei.svg"
                alt="Team celebrating success"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="mt-4 text-center">
              <div className="text-3xl font-extrabold">🤝 97%</div>
              <div className="mt-2 text-sm text-gray-500">Project Success</div>
            </div>
          </div>
        </div>

        {/* ---- Desktop / Tablet Layout (3 images row + stats row) ---- */}
        <div className="hidden sm:block">
          {/* Images row */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="relative w-full h-52 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/about.svg"
                alt="Team collaborating around laptop"
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
            <div className="relative w-full h-52 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/footer.svg"
                alt="Team meeting in office"
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
            <div className="relative w-full h-52 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/servicei.svg"
                alt="Team celebrating success"
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          </div>

          {/* Stats row */}
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-extrabold">😎 34+</div>
              <div className="mt-2 text-sm text-gray-500">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold">💖 68M</div>
              <div className="mt-2 text-sm text-gray-500">Followers Tik Tok</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold">🤝 97%</div>
              <div className="mt-2 text-sm text-gray-500">Project Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
