import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      heading: "Power Your Future with Solar Energy",
      subheading: "Leading India's renewable energy revolution with comprehensive solar photovoltaic solutions. We've successfully delivered 100 MW+ of clean, sustainable power across diverse industries and geographies."
    },
    {
      heading: "Zero Capital Investment Solutions",
      subheading: "Our innovative OPEX financing models eliminate upfront capital barriers, allowing you to transition to solar energy with zero investment. Pay only for the clean energy you consume while we handle everything else."
    },
    {
      heading: "25 Years Performance Guarantee",
      subheading: "We stand behind every kilowatt-hour generated with comprehensive operation and maintenance services. Our commitment ensures your solar investment delivers optimal performance throughout its entire system lifetime."
    },
    {
      heading: "From Design to Deployment",
      subheading: "Complete end-to-end solar solutions from 100 kW rooftop systems to 100 MW ground-mounted plants. Our expert team manages everything from DISCOM approvals to net metering installations and ongoing compliance."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
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

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-start justify-center px-6 md:px-12 lg:px-24 max-w-7xl">
        {/* Main Content */}
        <div className="max-w-3xl w-full space-y-6">
          {/* Animated Heading */}
          <div className="min-h-[100px] md:min-h-[140px] flex items-center">
            <h1
              key={`heading-${currentSlide}`}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fadeInUp text-left"
              style={{
                textShadow: "0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 8px rgba(0, 0, 0, 0.6)",
                animation: "fadeInUp 1s ease-out"
              }}
            >
              {slides[currentSlide].heading}
            </h1>
          </div>

          {/* Animated Subheading */}
          <div className="min-h-[80px] md:min-h-[100px] flex items-center">
            <p
              key={`subheading-${currentSlide}`}
              className="text-base md:text-lg text-white/90 font-light leading-relaxed animate-fadeInUp text-left"
              style={{
                textShadow: "0 2px 12px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.6)",
                animation: "fadeInUp 1s ease-out 0.3s both"
              }}
            >
              {slides[currentSlide].subheading}
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 items-start pt-6 animate-fadeInUp"
            style={{
              animation: "fadeInUp 1s ease-out 0.6s both"
            }}
          >
            <a
              href="#about"
              className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Explore Our Solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border-2 border-white/40 hover:bg-white/20 hover:border-white/60 transition-all duration-300 hover:scale-105 shadow-xl"
              style={{
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.6)"
              }}
            >
              Get Started Today
            </a>
          </div>

          {/* Progress Indicators */}
          <div className="flex gap-3 pt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? "w-12 bg-amber-500"
                    : "w-8 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/80" strokeWidth={2} />
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;