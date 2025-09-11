import Hero from "../components/Hero";
import BrandsSection from "@/components/BrandsSection";
import About from "@/components/About";
import ServicesSection from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
    <Hero />
    <BrandsSection />
    <About />
    <ServicesSection />
    <WhyChooseUs />
    <CaseStudies />
    <Testimonials />
    </>
  );
}
