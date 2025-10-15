import Hero from "../components/Hero";
import About from "@/components/About";
import ServicesSection from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import OurIntroduction from "@/components/OurIntroduction";

export default function Home() {
  return (
    <>
    <Hero />
    <OurIntroduction />
    <About />
    <ServicesSection />
    <WhyChooseUs />
    <CaseStudies />
    <Testimonials />
    </>
  );
}
