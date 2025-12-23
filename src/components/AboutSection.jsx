import React, { useEffect, useRef } from "react";
import { Award, Users, Zap, TrendingUp, Sun, ShieldCheck, Leaf, Target } from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Content animation
    const contentElements = document.querySelectorAll(".about-animate");
    contentElements.forEach((element, index) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(40px)";

      setTimeout(() => {
        element.style.transition = "all 1s cubic-bezier(0.175, 0.885, 0.32, 1)";
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, index * 200 + 300);
    });

    // Stats animation
    const statCards = document.querySelectorAll(".stat-card");
    statCards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px) scale(0.95)";

      setTimeout(() => {
        card.style.transition =
          "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        card.style.opacity = "1";
        card.style.transform = "translateY(0) scale(1)";
      }, index * 150 + 600);

      // Hover effects
      card.addEventListener("mouseenter", () => {
        card.style.transition = "all 0.3s ease";
        card.style.transform = "translateY(-5px) scale(1.02)";
      });

      card.addEventListener("mouseleave", () => {
        card.style.transition = "all 0.3s ease";
        card.style.transform = "translateY(0) scale(1)";
      });
    });

    // Logo box hover
    const logoBox = document.querySelector(".logo-box");
    if (logoBox) {
      logoBox.addEventListener("mouseenter", () => {
        logoBox.style.transition =
          "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        logoBox.style.transform = "scale(1.05) rotateY(5deg)";
      });

      logoBox.addEventListener("mouseleave", () => {
        logoBox.style.transition =
          "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        logoBox.style.transform = "scale(1) rotateY(0deg)";
      });
    }
  }, []);

  const stats = [
    {
      icon: Sun,
      value: "100 MW+",
      label: "Project Capacity",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Users,
      value: "500+",
      label: "Clients Served",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Leaf,
      value: "50,000+",
      label: "Tons CO₂ Saved",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: TrendingUp,
      value: "25 Years",
      label: "Performance Guarantee",
      color: "from-purple-500 to-violet-500",
    },
  ];

  const expertise = [
    {
      icon: Award,
      title: "Financial Engineering Excellence",
      description: "CA-backed project structuring with proven bankability and transparent financial modeling"
    },
    {
      icon: Zap,
      title: "Technical Mastery",
      description: "Design and deployment of systems from 100 kW to 100 MW utilizing global best practices"
    },
    {
      icon: ShieldCheck,
      title: "Operational Excellence",
      description: "Comprehensive O&M services ensuring optimal performance throughout system lifetime"
    },
    {
      icon: Target,
      title: "Regulatory Navigation",
      description: "End-to-end management of DISCOM approvals, net metering installations, and compliance"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-white via-amber-50/20 to-orange-50/30 text-gray-800 py-20 px-6 md:px-24 overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-yellow-100/40 to-amber-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-100/20 to-amber-100/20 rounded-full blur-3xl"></div>
      </div>

      {/* Connecting line from hero */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-amber-300 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="about-animate">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6 border border-orange-200/50">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                Leading Solar Energy Solutions Provider
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                About{" "}
                <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent">
                  Squareable India
                </span>
                <br />
                <span className="text-gray-700">Private Limited</span>
              </h2>
            </div>

            <div className="about-animate space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Squareable India Private Limited stands at the forefront of India's renewable energy revolution, delivering comprehensive solar photovoltaic solutions that blend technological innovation with financial intelligence.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                We specialize in large-scale ground-mounted and rooftop solar PV systems, with particular mastery in OPEX (Operational Expenditure) financing models that eliminate capital barriers to solar adoption. Our comprehensive approach ensures seamless business operations across jurisdictions.
              </p>
            </div>

            <div className="about-animate">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span>Explore Our Solutions</span>
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>

          {/* Logo Section */}
          <div className="about-animate flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/30 to-orange-400/30 rounded-3xl blur-2xl"></div>

              {/* Main logo container */}
              <div className="logo-box relative w-80 h-80 bg-gradient-to-br from-white via-amber-50/50 to-orange-50/50 backdrop-blur-sm border border-amber-200/60 rounded-3xl overflow-hidden shadow-2xl">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 to-orange-100/30 rounded-3xl"></div>

                

                {/* Actual company logo */}
                <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                  <img 
                    src="img/Squareable Logo.svg" 
                    alt="Squareable India Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-400/20 to-transparent rounded-bl-2xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-400/20 to-transparent rounded-tr-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Expertise Section */}
        <div className="about-animate mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our <span className="text-orange-500">Expertise</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="stat-card group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200/60 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="about-animate mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Our <span className="text-orange-500">Impact</span>
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Delivering measurable results and sustainable value across India's renewable energy landscape
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="stat-card group text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200/60 shadow-lg cursor-pointer"
                style={{
                  background: `
                    linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)
                  `,
                  boxShadow: `
                    0 10px 25px -5px rgba(251,146,60,0.15),
                    0 0 0 1px rgba(251,191,36,0.3)
                  `,
                }}
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg mb-3 group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <Icon size={24} className="text-white" />
                </div>

                <div className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                  {stat.value}
                </div>

                <div className="text-sm text-gray-600 font-medium group-hover:text-gray-700 transition-colors">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Our Promise Section */}
        <div className="about-animate mt-20 text-center max-w-4xl mx-auto">
          <div className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl border border-amber-200/60 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              When you partner with Squareable India, you're not just getting a solar plant—you're gaining a committed partner invested in your long-term energy success. We stand behind every kilowatt-hour generated, every rupee saved, and every ton of carbon offset.
            </p>
          </div>
        </div>
      </div>

      {/* Connecting line to next section */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-amber-300"></div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-orange-50/30 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default AboutSection;