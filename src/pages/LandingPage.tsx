import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import OpexModelSection from "../components/SimpleStepsSection";
import IndustriesSection from "../components/OurServicesSection";
import WhySolarSection from "../components/WhyUaeSection";
import SolarJourneySection from "../components/TeamSection";
import AboutSection from "../components/AboutSection";
import SolarFaqSection from "../components/FaqSection";
import HeroSection from "../components/herosection"

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".fade-in").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-800 scroll-smooth">
      <Navbar />

      <HeroSection />

      <div className="space-y-24 md:space-y-32 pt-20">
        <AboutSection />
        <WhySolarSection />
        <OpexModelSection />
        <IndustriesSection />
        <SolarJourneySection />
        <SolarFaqSection />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;