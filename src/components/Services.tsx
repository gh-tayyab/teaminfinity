import Image from "next/image";
import { Check, Code, BarChart, Lightbulb } from "lucide-react";
import Link from "next/link";

type Service = {
  title: string;
  items: string[];
  icon: React.ReactNode;
  href: string;
};

const services: Service[] = [
  {
    title: "Marketing Solutions",
    items: [
      "Social Media Marketing & Management",
      "Branding & Creative Design",
      "Paid Advertising (Google & Social Ads)",
      "SEO & Content Marketing",
    ],
    icon: <Lightbulb className="w-8 h-8" aria-hidden="true" />,
    href: "/services/marketing",
  },
  {
    title: "Development Services",
    items: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Mobile App Development",
      "UI/UX Design & Optimization",
    ],
    icon: <Code className="w-8 h-8" aria-hidden="true" />,
    href: "/services/development",
  },
  {
    title: "Growth & Support",
    items: [
      "Analytics & Reporting",
      "Strategy Consulting",
      "Ongoing Maintenance & Support",
    ],
    icon: <BarChart className="w-8 h-8" aria-hidden="true" />,
    href: "/services/growth",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative bg-[#F2FBFD] py-20 px-6 overflow-hidden"
    >
      {/* Decorative bottom images (purely decorative) */}
      <div className="absolute left-6 bottom-0 pointer-events-none opacity-70" aria-hidden="true">
        <Image
          src="/images/servicesbottom.svg"
          alt=""
          width={220}
          height={180}
          loading="lazy"
          sizes="220px"
        />
      </div>
      <div className="absolute right-6 bottom-0 pointer-events-none opacity-70" aria-hidden="true">
        <Image
          src="/images/servicesbottomright.svg"
          alt=""
          width={160}
          height={160}
          loading="lazy"
          sizes="160px"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-10 px-2">
          <div>
            <p className="text-sm font-semibold text-[#009FB2] uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="text-lg" aria-hidden="true">✱</span> Our Services
            </p>
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              Our Services
            </h2>
          </div>

          <div>
            <Link
              href={'/services'}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200 text-sm font-medium hover:shadow-md transition"
              aria-label="View all services"
            >
              View All Services
            </Link>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {services.map((s, idx) => (
            <Link
              key={s.title}
              href={s.href}
              className="block group h-full"
              aria-label={`Open ${s.title} details`}
            >
              <article
                className="bg-white p-8 shadow-2xl border border-transparent transition-transform duration-300 transform hover:scale-105 hover:shadow-3xl hover:border-transparent relative flex flex-col items-center text-center cursor-pointer h-full"
                role="group"
                aria-labelledby={`service-title-${idx}`}
              >
                {/* Icon block */}
                <div className="mb-6">
                  <div className="w-20 h-20 rounded-lg border-2 border-gray-100 flex items-center justify-center transition-colors duration-300 group-hover:border-[#009FB2]">
                    <span className="text-gray-800 group-hover:text-[#009FB2]" aria-hidden="true">
                      {s.icon}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 id={`service-title-${idx}`} className="text-lg md:text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#009FB2]">
                  {s.title}
                </h3>

                {/* List */}
                <ul className="space-y-2 text-sm text-gray-600 text-left flex-1" aria-label={`${s.title} features`}>
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <Check className="w-4 h-4 mt-1 text-[#009FB2] flex-shrink-0" aria-hidden="true" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom accent bar */}
                <span className="absolute left-0 bottom-0 w-full h-1 rounded-b-xl bg-transparent group-hover:bg-[#009FB2] transition-colors duration-300" />
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
