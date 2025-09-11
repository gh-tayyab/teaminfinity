import Image from "next/image"

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-r from-[#F2FBFD] to-[#EAFBFF] py-20"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side image */}
        <div className="relative w-full h-[350px] md:h-[400px]">
          <Image
            src="/images/about.svg"
            alt="Team Infinity professionals collaborating on a project"
            fill
            className="object-cover rounded-xl shadow-lg"
            priority
          />
        </div>

        {/* Right side content */}
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold text-[#009FB2] uppercase tracking-wide mb-3">
            <span className="text-lg">✱</span> Who We Are
          </p>
          <h2
            id="about-heading"
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            About Us
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We are a full-service Marketing & Development Agency dedicated to
            helping businesses scale faster. Our team of experts blends
            creativity, strategy, and technology to deliver solutions that not
            only look great but also perform.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you&apos;re a startup or an established brand, we provide
            tailored strategies to strengthen your digital presence and maximize
            your ROI.
          </p>
        </div>
      </div>

      {/* Decorative bottom-right image */}
      <div className="absolute bottom-0 right-0 w-[200px] md:w-[300px] opacity-70 pointer-events-none">
        <Image
          src="/images/aboutbottom.svg"
          alt="Decorative technology pattern"
          width={400}
          height={500}
          className="object-contain"
        />
      </div>
    </section>
  )
}
