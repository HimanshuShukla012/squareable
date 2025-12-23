import React, { useEffect, useRef } from "react";
import { TrendingUp, DollarSign, Leaf, Shield } from "lucide-react";

const reasons = [
  {
    title: "Slash Energy Costs by 30%",
    description:
      "Lock in predictable energy rates for 25 years while grid electricity costs rise 5-7% annually. Start saving from day one.",
    icon: DollarSign,
    gradient: "from-emerald-600 via-green-500 to-emerald-700",
    shadowColor: "rgba(16, 185, 129, 0.3)",
    glowColor: "rgba(16, 185, 129, 0.12)",
    bgPattern: "radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
    accentColor: "#10b981",
  },
  {
    title: "Zero Capital Investment",
    description:
      "With our OPEX model, deploy your capital where it matters most—your core business. We handle everything.",
    icon: TrendingUp,
    gradient: "from-amber-600 via-orange-500 to-amber-700",
    shadowColor: "rgba(245, 158, 11, 0.3)",
    glowColor: "rgba(245, 158, 11, 0.12)",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)",
    accentColor: "#f59e0b",
  },
  {
    title: "Meet ESG Mandates",
    description:
      "Global brands demand carbon-neutral supply chains. Solar installation demonstrates environmental leadership and opens new markets.",
    icon: Leaf,
    gradient: "from-teal-600 via-cyan-500 to-teal-700",
    shadowColor: "rgba(20, 184, 166, 0.3)",
    glowColor: "rgba(20, 184, 166, 0.12)",
    bgPattern: "radial-gradient(circle at 20% 20%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)",
    accentColor: "#14b8a6",
  },
  {
    title: "Energy Independence",
    description:
      "Protect operations from grid instability and load shedding. Solar + storage ensures uninterrupted power for critical operations.",
    icon: Shield,
    gradient: "from-blue-600 via-indigo-500 to-blue-700",
    shadowColor: "rgba(37, 99, 235, 0.3)",
    glowColor: "rgba(37, 99, 235, 0.12)",
    bgPattern: "radial-gradient(circle at 80% 80%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)",
    accentColor: "#2563eb",
  },
];

const WhySolarSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".solar-card");

    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(60px) scale(0.9)';
      
      setTimeout(() => {
        card.style.transition = 'all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
      }, index * 200 + 300);
    });

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });

      card.addEventListener("mouseenter", () => {
        card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        card.style.transform = 'translateY(-12px) scale(1.03)';
        card.style.filter = 'brightness(1.05)';
      });

      card.addEventListener("mouseleave", () => {
        card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        card.style.transform = 'translateY(0) scale(1)';
        card.style.filter = 'brightness(1)';
      });
    });

    const floatingOrbs = document.querySelectorAll(".floating-orb");
    floatingOrbs.forEach((orb, index) => {
      const animate = () => {
        const randomX = (Math.random() - 0.5) * 80;
        const randomY = (Math.random() - 0.5) * 60;
        const randomRotation = Math.random() * 180;
        const duration = 6000 + Math.random() * 4000;
        
        orb.style.transition = `transform ${duration}ms ease-in-out`;
        orb.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
        
        setTimeout(animate, duration);
      };
      
      setTimeout(animate, index * 1000);
    });

  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-400 text-white py-32 px-6 md:px-24 overflow-hidden"
    >
      {/* Solar-themed Background with image */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200')`,
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        
        <div className="floating-orb absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-yellow-300/30 to-amber-300/30 rounded-full blur-3xl"></div>
        <div className="floating-orb absolute top-40 right-16 w-64 h-64 bg-gradient-to-r from-orange-300/35 to-red-300/35 rounded-full blur-3xl"></div>
        <div className="floating-orb absolute bottom-32 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/25 to-yellow-400/25 rounded-full blur-2xl"></div>
        <div className="floating-orb absolute bottom-20 right-1/3 w-72 h-72 bg-gradient-to-r from-orange-400/30 to-amber-400/30 rounded-full blur-3xl"></div>
      </div>

      {/* Sun rays pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 20px,
              rgba(255,255,255,0.1) 20px,
              rgba(255,255,255,0.1) 40px
            )`
          }}
        ></div>
      </div>

      <div className="relative z-10 text-center mb-24">
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium shadow-lg">
            <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
            The Time for Solar is NOW
          </div>
        </div>
        
        <h2 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="text-white drop-shadow-lg">
            Why Choose Solar
          </span>
          <br />
          <span className="bg-gradient-to-r from-yellow-200 via-white to-yellow-200 bg-clip-text text-transparent drop-shadow-lg">
            Energy Today?
          </span>
        </h2>
        
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-200"></div>
          <div className="w-3 h-3 bg-yellow-200 rounded-full shadow-lg"></div>
          <div className="h-px w-32 bg-gradient-to-r from-yellow-200 to-white"></div>
          <div className="w-2 h-2 bg-white rounded-full shadow-lg"></div>
          <div className="h-px w-16 bg-gradient-to-r from-white to-transparent"></div>
        </div>
        
        <p className="text-xl text-yellow-50 max-w-3xl mx-auto leading-relaxed">
          Every day without solar is money lost and opportunities missed. Grid electricity costs rise 5-7% annually while solar delivers fixed, predictable rates for 25 years.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 max-w-7xl mx-auto">
        {reasons.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="solar-card group relative overflow-hidden rounded-3xl backdrop-blur-xl transition-all duration-500 cursor-pointer border border-white/30 hover:border-white/50"
              style={{
                background: `
                  radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.25), transparent 60%),
                  ${item.bgPattern},
                  linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)
                `,
                boxShadow: `
                  0 25px 50px -12px ${item.shadowColor},
                  0 0 0 1px rgba(255,255,255,0.2),
                  inset 0 1px 0 rgba(255,255,255,0.3)
                `,
              }}
            >
              <div className="absolute inset-0 rounded-3xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `conic-gradient(from 0deg at 50% 50%, ${item.shadowColor}, transparent, ${item.shadowColor})`
                }}
              >
                <div className="w-full h-full bg-white/10 rounded-3xl"></div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full duration-1200 ease-in-out"></div>
              </div>

              <div className="p-8 relative z-10">
                <div className="mb-8 relative">
                  <div className="inline-flex p-5 rounded-2xl bg-white shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                    <Icon size={32} className={`text-${item.accentColor} relative z-10`} style={{ color: item.accentColor }} />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent rounded-2xl"></div>
                  </div>
                  <div className="absolute -inset-2 bg-white/50 opacity-30 blur-lg rounded-2xl group-hover:opacity-50 transition-opacity duration-300"></div>
                  
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-70 group-hover:scale-125 transition-transform duration-300"></div>
                </div>

                <h3 className="text-2xl font-bold mb-5 text-white group-hover:text-yellow-100 transition-all duration-300">
                  {item.title}
                </h3>
                
                <p className="text-yellow-50 text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center gap-2">
                  <div className="h-1 w-0 group-hover:w-8 bg-white rounded-full transition-all duration-500 ease-out"></div>
                  <div className="w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300"></div>
                  <div className="h-px w-0 group-hover:w-16 bg-white/50 rounded-full transition-all duration-700 delay-500"></div>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <div className="w-full h-full bg-gradient-to-bl from-white rounded-bl-2xl"></div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-60"></div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-yellow-200 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-24 relative z-10">
        <div className="inline-flex items-center gap-4 px-10 py-5 bg-white text-orange-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer">
          <span>Calculate Your 25-Year Savings</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
        <p className="mt-6 text-yellow-100 text-lg">
          See exactly how much you'll save over the next 25 years
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-900/30 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default WhySolarSection;