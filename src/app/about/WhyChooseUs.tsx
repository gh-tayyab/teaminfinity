import Image from "next/image";
import { Users, Lightbulb, Rocket, Layers } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white to-cyan-50">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 px-6">
        {/* Left Content */}
        <div>
          <p
            className="text-sm font-medium text-cyan-600 mb-2 flex items-center gap-1"
            aria-label="Why choose us section"
          >
            <span className="text-lg">✦</span> WHY CHOOSE US
          </p>
          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-6">
            Reasons why leading <br /> brands choose us.
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg">
            We blend strategy, creativity, and technology to deliver measurable
            impact. Our commitment to innovation and client success has made us
            the trusted partner of brands seeking results that truly matter.
          </p>

          {/* Clients */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {["avatar1.svg", "avatar2.svg", "avatar3.svg"].map(
                (avatar, index) => (
                  <Image
                    key={index}
                    src={`/images/${avatar}`}
                    alt={`Client avatar ${index + 1}`}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                )
              )}
            </div>
            <div>
              <p className="font-semibold text-gray-900">355K+</p>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map(({ id, Icon, title, description }) => (
            <div
              key={id}
              className="bg-white rounded-2xl shadow-sm p-6 border hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className="w-7 h-7 text-cyan-600" />
                <h3 className="font-semibold text-gray-900">{title}</h3>
              </div>
              <hr className="border-gray-200 mb-3" />
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Cards data
const cards = [
  {
    id: 1,
    Icon: Users,
    title: "Strategic-First Approach",
    description:
      "We craft data-driven strategies that drive long-term business growth and brand success.",
  },
  {
    id: 2,
    Icon: Lightbulb,
    title: "Creative That Converts",
    description:
      "Our visuals are not only eye-catching but also built to turn views into real conversions.",
  },
  {
    id: 3,
    Icon: Layers,
    title: "Expert Full-Service Team",
    description:
      "A multidisciplinary team that covers everything—strategy, design, and tech—all under one roof.",
  },
  {
    id: 4,
    Icon: Rocket,
    title: "Strong Proven Track Record",
    description:
      "Trusted by top brands, with a portfolio full of impactful, performance digital campaigns.",
  },
];
