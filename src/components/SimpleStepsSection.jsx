import React, { useEffect, useRef, useState } from "react";
import { Zap, TrendingDown, Shield, Gift, CheckCircle, Clock } from "lucide-react";

const steps = [
  {
    title: "We Build",
    description: "100% capital deployment from us. Premium equipment, professional installation.",
    icon: Zap,
    number: "01",
    gradient: "from-blue-500 to-cyan-500",
    shadowColor: "rgba(59, 130, 246, 0.25)",
    duration: "6-8 Months",
    features: ["Zero Upfront Cost", "Tier-1 Equipment", "Expert Installation"]
  },
  {
    title: "We Own",
    description: "Asset ownership and all responsibilities stay with us throughout 25-year PPA.",
    icon: Shield,
    number: "02",
    gradient: "from-emerald-500 to-teal-500",
    shadowColor: "rgba(16, 185, 129, 0.25)",
    duration: "25 Years",
    features: ["Our Ownership", "Our Insurance", "Our Risk"]
  },
  {
    title: "We Operate",
    description: "Complete O&M, monitoring, repairs, and performance guarantee included.",
    icon: Clock,
    number: "03",
    gradient: "from-purple-500 to-indigo-500",
    shadowColor: "rgba(139, 92, 246, 0.25)",
    duration: "Ongoing",
    features: ["24/7 Monitoring", "Professional O&M", "Performance Guarantee"]
  },
  {
    title: "You Save",
    description: "Pay fixed tariff lower than grid rate. Immediate savings from day one.",
    icon: TrendingDown,
    number: "04",
    gradient: "from-orange-500 to-amber-500",
    shadowColor: "rgba(251, 146, 60, 0.25)",
    duration: "Immediate",
    features: ["Fixed Tariff", "Instant Savings", "Predictable Costs"]
  },
];

const OpexModelSection = () => {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".opex-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Solar panel background image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200')`,
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-indigo-900/95"></div>
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/8 to-teal-400/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-400/30 rounded-full text-sm font-medium text-amber-200 shadow-sm mb-6">
            <Gift className="w-4 h-4" />
            Revolutionary OPEX Model
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Zero Investment,</span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Maximum Returns
            </span>
          </h2>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Our Build-Own-Operate-Transfer (BOOT) model eliminates capital barriers. You enjoy immediate savings while we handle everything.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>₹0 Upfront Investment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Savings from Day 1</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>FREE Asset Transfer After 25 Years</span>
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div
                key={index}
                className="opex-card group relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border-2 border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 opacity-0 translate-y-8 cursor-pointer backdrop-blur-sm"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                style={{
                  boxShadow: activeStep === index 
                    ? `0 20px 40px ${step.shadowColor}, 0 0 0 1px rgba(255,255,255,0.3)` 
                    : `0 10px 25px ${step.shadowColor}`
                }}
              >
                {/* Step Number */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {step.number}
                  </div>
                  <div className="text-xs text-blue-200 font-medium bg-white/10 px-3 py-1 rounded-full">
                    {step.duration}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${step.gradient} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <Icon size={24} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {step.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-blue-200">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.gradient}`}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}></div>

                {/* Arrow for next step */}
                {index < steps.length - 1 && (
                  <div className="hidden xl:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-white/20 border-2 border-white/30 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Value Proposition */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-400/30 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">The Squareable Advantage</h3>
              <p className="text-amber-100 text-lg">Why our OPEX model transforms your business</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Capital Efficiency</h4>
                  <p className="text-blue-100 text-sm">Deploy your ₹40-80L equity in core business growth, not solar infrastructure</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Off-Balance Sheet</h4>
                  <p className="text-blue-100 text-sm">No debt on your books. No impact on credit capacity. Clean financials.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Zero Risk Transfer</h4>
                  <p className="text-blue-100 text-sm">We bear equipment, performance, and maintenance risks. You just consume power.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Future Asset Ownership</h4>
                  <p className="text-blue-100 text-sm">After 25 years, system transfers to you FREE. Enjoy 10+ more years of virtually free electricity.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                Download OPEX Model Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpexModelSection;