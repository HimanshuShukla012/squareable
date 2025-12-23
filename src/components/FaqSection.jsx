import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, Sun, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "What is the OPEX model and how does it work?",
    answer:
      "Our OPEX (Build-Own-Operate-Transfer) model means you pay ZERO upfront investment. We deploy 100% capital, own the system for 25 years, handle all operations & maintenance, and you simply purchase the electricity at a fixed tariff lower than grid rates. After 25 years, the fully operational system transfers to you FREE.",
    gradient: "from-amber-500 to-orange-500",
    shadowColor: "rgba(245, 158, 11, 0.4)",
  },
  {
    question: "How much space do I need for a solar installation?",
    answer:
      "For a 300 kW system, you need approximately 30,000-35,000 sq ft (0.7-0.8 acres) for ground-mounted, or 25,000-30,000 sq ft for rooftop installations. We can optimize designs for constrained spaces using higher-efficiency panels.",
    gradient: "from-blue-500 to-cyan-500",
    shadowColor: "rgba(59, 130, 246, 0.4)",
  },
  {
    question: "What happens on cloudy days or during monsoon?",
    answer:
      "Solar panels generate electricity even on cloudy days at 10-70% capacity depending on cloud cover. Our designs account for monsoon seasons - Lucknow's annual average of 5.5-6.0 peak sun hours/day ensures consistent yearly generation. During low generation, you simply use grid power at regular rates.",
    gradient: "from-emerald-500 to-teal-500",
    shadowColor: "rgba(16, 185, 129, 0.4)",
  },
  {
    question: "How long does the system last and what about warranties?",
    answer:
      "Solar panels have a 25-year output warranty (minimum 84% capacity) and 30-35+ years actual life. Inverters last 10-15 years (replaced mid-term). The complete system operates effectively for 30-35 years. Under OPEX, all warranties, replacements, and maintenance are our responsibility.",
    gradient: "from-purple-500 to-indigo-500",
    shadowColor: "rgba(139, 92, 246, 0.4)",
  },
  {
    question: "What is Net Energy Metering (NEM) and how does it benefit me?",
    answer:
      "NEM allows your meter to run backwards when you generate more than you consume. Excess solar energy flows to the grid, earning you credits. During evenings/cloudy days, you draw from grid and credits offset your bill. It maximizes financial benefits, especially for businesses with weekend closures or seasonal variations.",
    gradient: "from-rose-500 to-pink-500",
    shadowColor: "rgba(244, 63, 94, 0.4)",
  },
  {
    question: "How much will I actually save with solar?",
    answer:
      "For a 300 kW system: Year 1 savings ₹4.6L, Year 10 ₹27.9L annually. Over 25 years, total savings reach ₹9.75 Crores with OPEX model. Post-transfer (Years 26-35), enjoy virtually free electricity worth another ₹13 Crores. Total 35-year savings: ₹22-23 Crores.",
    gradient: "from-yellow-500 to-amber-500",
    shadowColor: "rgba(234, 179, 8, 0.4)",
  },
  {
    question: "What if my business relocates or closes?",
    answer:
      "Our PPA includes fair exit provisions. Options include: (1) Transfer PPA to new property owner, (2) System buyout at fair market value, (3) We relocate system if feasible, or (4) Negotiated early termination with compensation. All scenarios and formulas are detailed in the PPA upfront.",
    gradient: "from-cyan-500 to-blue-500",
    shadowColor: "rgba(6, 182, 212, 0.4)",
  },
  {
    question: "How long does installation take and what approvals are needed?",
    answer:
      "Total timeline: 8-10 months from application to operation. We handle all approvals: NEM approval (3-5 weeks), electrical safety clearance, building permits, fire safety NOC. You focus on your business while we navigate regulatory requirements and coordinate all installations.",
    gradient: "from-lime-500 to-green-500",
    shadowColor: "rgba(132, 204, 22, 0.4)",
  },
];

const SolarFaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const faqItems = document.querySelectorAll(".faq-item");
    
    faqItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(60px) scale(0.95)';
      
      setTimeout(() => {
        item.style.transition = 'all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0) scale(1)';
      }, index * 150 + 300);
    });

    faqItems.forEach((item, index) => {
      const faq = faqs[index];
      
      item.addEventListener("mousemove", (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        item.style.setProperty("--mouse-x", `${x}px`);
        item.style.setProperty("--mouse-y", `${y}px`);
      });

      item.addEventListener("mouseenter", () => {
        item.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        item.style.transform = 'translateY(-8px) scale(1.02)';
      });

      item.addEventListener("mouseleave", () => {
        item.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        item.style.transform = 'translateY(0) scale(1)';
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 md:px-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 text-gray-800 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-16 w-72 h-72 bg-gradient-to-r from-amber-300/20 to-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-80 h-80 bg-gradient-to-r from-yellow-300/25 to-amber-300/25 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-64 h-64 bg-gradient-to-r from-orange-300/15 to-red-300/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Sun Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 20% 80%, rgba(251, 146, 60, 0.2) 0%, transparent 40%),
                             radial-gradient(circle at 80% 20%, rgba(251, 146, 60, 0.2) 0%, transparent 40%)`
          }}
        ></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-20">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl shadow-lg">
            <Sun className="w-8 h-8 text-white" />
          </div>
          <Sparkles className="w-6 h-6 text-orange-500 animate-pulse" />
        </div>
        
        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
          <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent drop-shadow-lg">
            Your Solar
          </span>
          <br />
          <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent drop-shadow-lg">
            Questions Answered
          </span>
        </h2>
        
        <div className="w-32 h-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mx-auto shadow-lg mb-6"></div>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about going solar with Squareable India
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="faq-item group relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-500 cursor-pointer border border-orange-200/60 hover:border-orange-300"
              style={{
                background: `
                  radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(251, 146, 60, 0.08), transparent 50%),
                  linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)
                `,
                boxShadow: `
                  0 25px 50px -12px ${item.shadowColor},
                  0 0 0 1px rgba(251, 146, 60, 0.2),
                  inset 0 1px 0 rgba(255,255,255,0.9)
                `,
              }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-200/40 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full duration-1200 ease-in-out"></div>
              </div>

              {/* Question Button */}
              <button
                className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none transition-all duration-300 relative z-10"
                onClick={() => toggleFAQ(idx)}
              >
                <div className="flex items-center gap-4 flex-1">
                  {/* Question Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center shadow-lg transition-transform duration-300 ${isOpen ? 'scale-110 rotate-12' : ''}`}>
                    <span className="text-white font-bold text-lg">{idx + 1}</span>
                  </div>
                  
                  {/* Question Text */}
                  <span className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 pr-4">
                    {item.question}
                  </span>
                </div>

                {/* Chevron Icon */}
                <div className={`flex-shrink-0 transition-all duration-300 ${isOpen ? 'transform rotate-180' : ''}`}>
                  {isOpen ? (
                    <ChevronUp className="w-6 h-6 text-orange-500" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500 group-hover:text-orange-500" />
                  )}
                </div>
              </button>

              {/* Answer Section */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6 relative z-10">
                  <div className={`h-1 w-full bg-gradient-to-r ${item.gradient} rounded-full mb-4 transform origin-left transition-all duration-700 ${isOpen ? 'scale-x-100' : 'scale-x-0'}`}></div>
                  
                  <p className="text-gray-600 leading-relaxed text-base pl-16 animate-fade-in">
                    {item.answer}
                  </p>

                  <div className="flex justify-end mt-4 pr-16">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.gradient} opacity-60 animate-pulse`}></div>
                  </div>
                </div>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${item.gradient} opacity-5 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`}></div>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 relative z-10">
        <div className="inline-flex flex-col items-center gap-4">
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white font-bold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
          >
            Still Have Questions? Let's Talk Solar
          </a>
          <p className="text-gray-600 text-lg">
            Schedule a free consultation with our solar experts
          </p>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default SolarFaqSection;