import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative bg-gradient-to-r from-[#F2FBFD] to-[#EAFBFF] py-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Image */}
        <div className="relative w-full h-[350px] md:h-[400px]">
          <Image
            src="/images/about.svg"
            alt="Team Infinity professionals collaborating on a project"
            fill
            priority
            className="object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side Content */}
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold text-[#009FB2] uppercase tracking-wide mb-3">
            <span className="text-lg" aria-hidden="true">
              ✱
            </span>
            Who We Are
          </p>

          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            About Us
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            We are a full-service Marketing & Development Agency dedicated to
            helping businesses scale faster. Our team of experts blends
            creativity, strategy, and technology to deliver solutions that not
            only look great but also perform effectively.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Whether you&apos;re a startup or an established brand, we provide
            tailored strategies to strengthen your digital presence and maximize
            your ROI.
          </p>
        </div>
      </div>

      {/* Decorative Bottom-Right Image */}
      <div
        className="absolute bottom-0 right-0 w-[200px] md:w-[300px] opacity-70 pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src="/images/aboutbottom.svg"
          alt=""
          width={300}
          height={300}
          className="object-contain"
          loading="lazy"
          sizes="(max-width: 768px) 200px, 300px"
        />
      </div>
    </section>
  );
}
