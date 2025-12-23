import React, { useEffect, useRef } from "react";
import {
  Factory,
  GraduationCap,
  Heart,
  Building2,
  Server,
  Wheat,
  Home,
  Store
} from "lucide-react";

const industries = [
  {
    title: "Manufacturing & Industrial",
    description: "100 kW to 5 MW+ systems. Perfect daytime consumption match. 20-30% cost reduction directly improves margins.",
    icon: Factory,
    capacity: "100 kW - 5 MW+",
    savings: "20-30%",
    gradient: "from-blue-600 via-indigo-500 to-blue-700",
    shadowColor: "rgba(37, 99, 235, 0.4)",
    bgImage: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800"
  },
  {
    title: "Educational Institutions",
    description: "Schools, colleges & universities. Daytime operations = perfect solar match. Summer vacation surplus exported via NEM.",
    icon: GraduationCap,
    capacity: "50 kW - 500 kW",
    savings: "₹10-50L Annually",
    gradient: "from-emerald-600 via-teal-500 to-emerald-700",
    shadowColor: "rgba(16, 185, 129, 0.4)",
    bgImage: "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
  },
  {
    title: "Healthcare Facilities",
    description: "24/7 critical operations. Solar + battery for life-support reliability. Green Healthcare certification support.",
    icon: Heart,
    capacity: "50 kW - 1 MW",
    savings: "₹30-50L Annually",
    gradient: "from-red-600 via-rose-500 to-red-700",
    shadowColor: "rgba(239, 68, 68, 0.4)",
    bgImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800"
  },
  {
    title: "Commercial Buildings",
    description: "Malls, offices, hotels. High AC loads. Lower CAM charges attract premium tenants. LEED certification synergy.",
    icon: Building2,
    capacity: "100 kW - 2 MW",
    savings: "₹50L-1Cr+ Annually",
    gradient: "from-amber-600 via-orange-500 to-amber-700",
    shadowColor: "rgba(245, 158, 11, 0.4)",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
  },
  {
    title: "IT Parks & Data Centers",
    description: "Highest energy intensity. Solar covers 40-50% of 24/7 load. PUE improvement. Green hosting competitive advantage.",
    icon: Server,
    capacity: "500 kW - 10 MW+",
    savings: "₹1-3Cr+ Annually",
    gradient: "from-purple-600 via-violet-500 to-purple-700",
    shadowColor: "rgba(139, 92, 246, 0.4)",
    bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800"
  },
  {
    title: "Agricultural & Cold Storage",
    description: "24/7 cold storage. Solar + thermal storage. Irrigation pumps optimized for solar hours. KUSUM subsidies.",
    icon: Wheat,
    capacity: "50 kW - 500 kW",
    savings: "₹20-30L Annually",
    gradient: "from-lime-600 via-green-500 to-lime-700",
    shadowColor: "rgba(132, 204, 22, 0.4)",
    bgImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800"
  },
  {
    title: "Residential Complexes",
    description: "Common area loads. Lower maintenance charges. Green community = 5-10% property value premium.",
    icon: Home,
    capacity: "50 kW - 500 kW",
    savings: "₹500-1000/flat/month",
    gradient: "from-cyan-600 via-blue-500 to-cyan-700",
    shadowColor: "rgba(6, 182, 212, 0.4)",
    bgImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800"
  },
  {
    title: "Retail Chains",
    description: "Multiple locations. Standardized designs. Portfolio approach. Brand sustainability messaging.",
    icon: Store,
    capacity: "25-100 kW/location",
    savings: "₹5-10L/location",
    gradient: "from-pink-600 via-rose-500 to-pink-700",
    shadowColor: "rgba(236, 72, 153, 0.4)",
    bgImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
  },
];

const IndustriesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".industry-card");

    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(60px) scale(0.9)';
      
      setTimeout(() => {
        card.style.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
      }, index * 100 + 300);
    });

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        card.style.transform = 'translateY(-10px) scale(1.02)';
      });

      card.addEventListener("mouseleave", () => {
        card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        card.style.transform = 'translateY(0) scale(1)';
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-50 via-white to-amber-50/30 py-32 px-6 md:px-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-200/25 to-cyan-200/25 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6 border border-orange-200/50">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          Tailored Solutions for Every Sector
        </div>

        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-gray-900">Industries We</span>
          <br />
          <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent">
            Empower with Solar
          </span>
        </h2>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Customized solar solutions delivering maximum value for your specific sector's energy profile
        </p>
      </div>

      {/* Industries Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 max-w-7xl mx-auto">
        {industries.map((industry, i) => {
          const Icon = industry.icon;
          return (
            <div
              key={i}
              className="industry-card group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{
                boxShadow: `
                  0 10px 30px -5px ${industry.shadowColor},
                  0 0 0 1px rgba(0,0,0,0.05)
                `
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                  style={{
                    backgroundImage: `url('${industry.bgImage}')`,
                  }}
                ></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-90 group-hover:opacity-95 transition-opacity duration-300`}></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 shadow-lg">
                    <Icon size={28} className="text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-100 transition-colors duration-300">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-white/90 text-sm leading-relaxed mb-4 flex-grow">
                  {industry.description}
                </p>

                {/* Stats */}
                <div className="space-y-2 pt-4 border-t border-white/20">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/80">Typical Capacity</span>
                    <span className="text-white font-semibold">{industry.capacity}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/80">Annual Savings</span>
                    <span className="text-yellow-300 font-semibold">{industry.savings}</span>
                  </div>
                </div>

                {/* Learn More Link */}
                <div className="mt-4 flex items-center gap-2 text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span>View Case Studies</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full duration-1000 ease-in-out"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20 relative z-10">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">Don't See Your Industry?</h3>
          <p className="text-amber-50 text-lg mb-6">
            We design custom solar solutions for businesses of all types. Let's discuss your specific energy needs.
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;