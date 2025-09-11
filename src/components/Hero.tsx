import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-white to-cyan-50 top-6">
      {/* Spacer blank div (for clean look behind navbar) */}
      <div className="h-24"></div>

      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            We Build Brands & Digital Experiences That Drive Results
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            From strategy to execution we help businesses grow through powerful
            marketing and innovative development solutions
          </p>

          {/* Email Signup */}
          <div className="mt-6 flex items-center max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 border rounded-l-full outline-none"
            />
            <button className="px-5 py-3 bg-cyan-500 text-white rounded-r-full hover:bg-cyan-600 transition">
              Get Started
            </button>
          </div>

          {/* Clients */}
          <div className="flex items-center gap-3 mt-6">
            <div className="flex -space-x-3">
              <Image
                src="/images/avatar1.svg"
                alt="Client"
                width={40}
                height={40}
                className="rounded-full border"
              />
              <Image
                src="/images/avatar2.svg"
                alt="Client"
                width={40}
                height={40}
                className="rounded-full border"
              />
              <Image
                src="/images/avatar3.svg"
                alt="Client"
                width={40}
                height={40}
                className="rounded-full border"
              />
            </div>
            <p className="text-gray-700 font-medium">
              Happy Clients <span className="font-bold">357K+</span>
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <Image
            src="/images/hero.svg"
            alt="Business Woman"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
