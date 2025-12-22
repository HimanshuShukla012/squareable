import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import SimpleStepsSection from "../components/SimpleStepsSection";
import OurServicesSection from "../components/OurServicesSection";
import WhyUaeSection from "../components/WhyUaeSection";
import TeamSection from "../components/TeamSection";
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";

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

      <section className="relative h-screen w-full overflow-hidden fade-in">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="/Squareable_Cover.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</section>

      <div className="space-y-24 md:space-y-32 pt-20">
        <AboutSection />
        <WhyUaeSection />
        <SimpleStepsSection />
        <OurServicesSection />
        <TeamSection />
        <FaqSection />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;