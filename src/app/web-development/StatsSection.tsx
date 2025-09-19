import React from "react";
import Image from "next/image";

export default function StatsSection() {
  return (
    <section
      aria-labelledby="why-heading"
      className="relative bg-gradient-to-r from-white to-cyan-50 py-16"
    >
     

      <div className="container mx-auto px-6">
        {/* Images row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 items-start justify-center mb-8">
          {/* Card 1 */}
          <div className="mx-auto w-full max-w-xs rounded-xl overflow-hidden shadow-md gap-6">
            <div className="relative w-full h-56 sm:h-44 md:h-52">
              <Image
                src="/images/about.svg"
                alt="Team collaborating around laptop"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
                priority
              />
            </div>
          </div>

          {/* Card 2 (center) */}
          <div className="mx-auto w-full max-w-xs rounded-xl overflow-hidden shadow-md">
            <div className="relative w-full h-56 sm:h-44 md:h-52">
              <Image
                src="/images/footer.svg"
                alt="Team meeting in office"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="mx-auto w-full max-w-xs rounded-xl overflow-hidden shadow-md">
            <div className="relative w-full h-56 sm:h-44 md:h-52">
              <Image
                src="/images/servicei.svg"
                alt="Team celebrating success"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="max-w-4xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-extrabold" aria-hidden="true">
              😎 34+
            </div>
            <div className="mt-2 text-sm text-gray-500">Years Experience</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-extrabold" aria-hidden="true">
              💖 68M
            </div>
            <div className="mt-2 text-sm text-gray-500">Followers Tik Tok</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-extrabold" aria-hidden="true">
              🤝 97%
            </div>
            <div className="mt-2 text-sm text-gray-500">Project Success</div>
          </div>
        </div>
      </div>
    </section>
  );
}
