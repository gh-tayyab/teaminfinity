// app/about/page.tsx
import Image from "next/image";
import { Metadata } from "next";
import AboutBuzzz from "./AboutBuzz";
import Certifications from "./Certifications";
import WhyChooseUs from "./WhyChooseUs";

export const metadata: Metadata = {
  title: "About Us - Team Infinity",
  description:
    "From strategy to execution, Team Infinity helps businesses grow through powerful marketing and innovative development solutions.",
};

export default function About() {
  return (
    <>
      <section
        id="about-hero"
        aria-labelledby="about-heading"
        className="relative h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-20 bg-gradient-to-b from-white to-cyan-50 overflow-hidden"
      >
        {/* Left Blur Layer */}
        <div
          aria-hidden="true"
          className="absolute top-[130px] left-[-150px] w-[350px] h-[350px] bg-cyan-200/40 rounded-full blur-3xl"
        />

        {/* Left Content */}
        <div className="relative z-10 md:w-1/2 space-y-6 text-center md:text-left">
          <h1
            id="about-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            About Us
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-lg mx-auto md:mx-0">
            From strategy to execution we help businesses grow through powerful
            marketing and innovative development solutions.
          </p>

          {/* Email Input */}
          <form
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mt-4"
            role="form"
            aria-label="Subscribe to get started"
          >
            <label htmlFor="about-email" className="sr-only">
              Enter your email
            </label>
            <input
              id="about-email"
              type="email"
              placeholder="Enter your email"
              className="w-64 md:w-80 px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-400 outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 sm:py-3 sm:px-8 bg-[#36E1F8] text-black font-bold rounded-full border-b-4 border-black hover:bg-cyan-600 transition whitespace-nowrap"
            >
              Get Started
            </button>
          </form>
        </div>

        {/* Right Image */}
        <div className="relative z-10 mt-10 md:mt-20 md:w-120 flex justify-center">
          <Image
            src="/images/services.svg"
            alt="Team Infinity professionals illustration"
            width={500}
            height={200}
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Subsections */}
      <AboutBuzzz />
      <Certifications />
      <WhyChooseUs />
    </>
  );
}
