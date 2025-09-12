// components/WhyChooseUs.tsx
import Image from "next/image";
import React from "react";

export default function WhyChooseUs(): React.JSX.Element {
  return (
    <section
      className="relative w-full flex justify-center items-start py-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/serviceswhychoose.svg')" }}
    >
      {/* Blur Circles */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0" />
      <div className="absolute -bottom-10 -right-20 w-80 h-72 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-cyan-600 font-semibold">
            Value Proposition
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us?</h2>
        </div>

        {/* Replaced content: image area (horizontal on desktop, vertical on smaller screens) */}
        <div className="w-full flex justify-center items-center">
          {/* Desktop (horizontal) */}
          <div className="hidden md:block w-full max-w-5xl">
            <Image
              src="/images/servicesprocess.svg"
              alt="Why choose us - horizontal visual"
              width={1200}
              height={420}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Mobile / Tablet (vertical) */}
          <div className="block md:hidden w-full max-w-xs">
            <Image
              src="/images/servicesprocess.svg"
              alt="Why choose us - vertical visual"
              width={420}
              height={840}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
