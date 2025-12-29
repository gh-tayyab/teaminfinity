"use client";

import Image from "next/image";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";

type Service = {
  title: string;
  items: string[];
  icon: string;
  iconHover: string;
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
    href: "/services/digital-marketing",
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
    href: "/services/web-development",
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
    href: "/services/search-engine-optimization",
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
    href: "/services/graphic-designing",
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
    href: "/services/ai-automation",
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
    href: "/services/shopify-development",
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
    href: "/services/ui-ux-designing",
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
    href: "/services/video-editing",
  },
];

export default function ServicesSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section
      id="services"
      className="relative bg-[#F2FBFD] py-20 px-6 overflow-hidden"
    >
      {/* Decorative Images */}
      <div className="absolute left-0 bottom-0 pointer-events-none">
        <Image src="/images/servicesbottom.svg" alt="" width={220} height={180} />
      </div>
      <div className="absolute right-0 bottom-0 pointer-events-none">
        <Image src="/images/servicesbottomright.svg" alt="" width={160} height={160} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <header className="flex justify-between items-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-[#009FB2] uppercase mb-2">
              ✱ Our Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Services
            </h2>
          </motion.div>

          <Link
            href="/services"
            className="px-4 py-2 bg-white border rounded-full shadow-sm hover:shadow-md text-sm"
          >
            View All Services
          </Link>
        </header>

        {/* Custom Arrows */}
        <button
          ref={prevRef}
          className="swiper-prev absolute -left-6 top-1/2 -translate-y-1/2 z-10
          w-12 h-12 rounded-full bg-white shadow-lg border flex items-center justify-center
          hover:bg-[#00B7CD] hover:text-white transition disabled:opacity-0"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          ref={nextRef}
          className="swiper-next absolute -right-6 top-1/2 -translate-y-1/2 z-10
          w-12 h-12 rounded-full bg-white shadow-lg border flex items-center justify-center
          hover:bg-[#00B7CD] hover:text-white transition disabled:opacity-0"
        >
          <ChevronRight size={22} />
        </button>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {services.map((s, idx) => (
            <SwiperSlide key={idx}>
              <Link href={s.href} className="group block h-full">
                <article className="bg-white p-8 text-center border hover:shadow-2xl transition transform hover:scale-105 min-h-[360px]">
                  <div className="w-20 h-20 mx-auto mb-6 relative">
                    <Image
                      src={s.icon}
                      alt=""
                      fill
                      className="object-contain group-hover:hidden"
                    />
                    <Image
                      src={s.iconHover}
                      alt=""
                      fill
                      className="object-contain hidden group-hover:block"
                    />
                  </div>

                  <h3 className="text-xl font-semibold mb-4 group-hover:text-[#00B7CD]">
                    {s.title}
                  </h3>

                  <ul className="text-sm text-gray-600 space-y-2 text-left">
                    {s.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <Check className="w-4 h-4 text-[#00B7CD] mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
