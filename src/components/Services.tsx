"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

type Service = {
  title: string;
  items: string[];
  icon: string;       // normal icon
  iconHover: string;  // hover icon
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
    icon: "/images/digital.png",
    iconHover: "/images/digitalh.png",
    href: "/digital-marketing",
  },
  {
    title: "Development Services",
    items: [
      "Custom Website Development",
      "E-commerce Solutions (Shopify & WooCommerce)",
      "Mobile App Development",
      "UI/UX Design & Optimization",
    ],
    icon: "/images/web.png",
    iconHover: "/images/webh.png",
    href: "/web-development",
  },
  {
    title: "Growth & Support",
    items: [
      "Analytics & Reporting",
      "Strategy Consulting",
      "Ongoing Maintenance & Support",
    ],
    icon: "/images/seo.png",
    iconHover: "/images/seoh.png",
    href: "/search-engine-optimization",
  },
  {
    title: "Graphic Designing",
    items: [
      "Logo & Brand Identity Design",
      "Marketing Materials (Flyers, Posters, Brochures)",
      "Social Media Graphics",
      "Packaging & Print Design",
    ],
    icon: "/images/graphic.png",
    iconHover: "/images/graphich.png",
    href: "/graphic-designing",
  },
  {
    title: "AI Automation",
    items: [
      "Workflow Automation",
      "AI Chatbot Development",
      "Business Process Optimization",
      "Integration of AI Tools & APIs",
    ],
    icon: "/images/ai.png",
    iconHover: "/images/aih.png",
    href: "/ai-automation",
  },
  {
    title: "Shopify Development",
    items: [
      "Custom Shopify Store Setup",
      "Theme Development & Customization",
      "App Integration & Optimization",
      "Conversion Rate Optimization",
    ],
    icon: "/images/shopify.png",
    iconHover: "/images/shopifyh.png",
    href: "/shopify-development",
  },
  {
    title: "UI/UX Designing",
    items: [
      "Wireframing & Prototyping",
      "Website & App Interface Design",
      "User Journey Mapping",
      "Design System & Style Guide Creation",
    ],
    icon: "/images/uiux.png",
    iconHover: "/images/uiuxh.png",
    href: "/ui-ux-designing",
  },
  {
    title: "Video Editing",
    items: [
      "Promotional & Marketing Videos",
      "Corporate & Business Presentations",
      "Social Media Reels & Shorts",
      "Motion Graphics & Animations",
    ],
    icon: "/images/video.png",
    iconHover: "/images/videoh.png",
    href: "/video-editing",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative bg-[#F2FBFD] py-20 px-6 overflow-hidden"
    >
      {/* Decorative bottom images */}
      <div
        className="absolute left-0 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src="/images/servicesbottom.svg"
          alt=""
          width={220}
          height={180}
          loading="lazy"
        />
      </div>
      <div
        className="absolute right-0 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src="/images/servicesbottomright.svg"
          alt=""
          width={160}
          height={160}
          loading="lazy"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 px-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-[#009FB2] uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="text-lg" aria-hidden="true">
                ✱
              </span>
              <span className="text-black">Our Services</span>
            </p>
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              Our Services
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-4 sm:mt-0"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200 text-sm font-medium hover:shadow-md transition"
              aria-label="View all services"
            >
              View All Services
            </Link>
          </motion.div>
        </header>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {services.map((s, idx) => (
            <SwiperSlide key={s.title} className="h-auto">
              <Link
                href={s.href}
                className="block group h-full"
                aria-label={`Open ${s.title} details`}
              >
                <article
                  className="bg-white p-8 border border-transparent transition-transform duration-500 transform hover:scale-110 hover:shadow-3xl relative flex flex-col items-center text-center cursor-pointer h-full min-h-[350px]"
                  role="group"
                  aria-labelledby={`service-title-${idx}`}
                >
                  {/* Icon block with hover swap */}
                  <div className="mb-6 relative w-20 h-20">
                    <Image
                      src={s.icon}
                      alt={`${s.title} icon`}
                      width={80}
                      height={80}
                      className="object-contain absolute inset-0 group-hover:hidden"
                    />
                    <Image
                      src={s.iconHover}
                      alt={`${s.title} icon hover`}
                      width={80}
                      height={80}
                      className="object-contain absolute inset-0 hidden group-hover:block"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    id={`service-title-${idx}`}
                    className="text-lg md:text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#00B7CD] transition-colors"
                  >
                    {s.title}
                  </h3>

                  {/* List */}
                  <ul
                    className="space-y-2 text-sm text-gray-600 text-left flex-1"
                    aria-label={`${s.title} features`}
                  >
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-3">
                        <Check
                          className="w-4 h-4 mt-1 text-[#00B7CD] flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom accent bar */}
                  <span className="absolute left-0 bottom-0 w-full h-1 rounded-b-xl bg-transparent group-hover:bg-[#00B7CD] transition-colors duration-300" />
                </article>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
