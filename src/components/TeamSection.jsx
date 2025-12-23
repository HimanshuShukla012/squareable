import React, { useEffect, useRef, useState } from "react";
import { 
  Search, 
  FileText, 
  ShoppingCart, 
  Hammer, 
  Power, 
  CheckCircle,
  Clock,
  Calendar,
  TrendingUp,
  Zap,
  Shield,
  Award
} from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    title: "Assessment & Proposal",
    duration: "Weeks 1-4",
    icon: Search,
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
    shadowColor: "rgba(59, 130, 246, 0.4)",
    bgColor: "from-blue-50 to-cyan-50",
    steps: [
      {
        week: "Week 1",
        title: "Initial Consultation",
        description: "We analyze your 12-month electricity bills, conduct site visit, and assess energy needs",
        deliverables: ["Site photos", "Energy consumption data", "Initial feasibility"]
      },
      {
        week: "Week 2",
        title: "Site Assessment",
        description: "Physical measurements, shading analysis, structural assessment, and electrical infrastructure review",
        deliverables: ["Site measurements", "Shading report", "Structural analysis"]
      },
      {
        week: "Week 3",
        title: "Design & Modeling",
        description: "PVsyst simulation, multiple scenarios, financial modeling with CAPEX vs OPEX comparison",
        deliverables: ["Energy simulations", "Financial models", "ROI calculations"]
      },
      {
        week: "Week 4",
        title: "Proposal Delivery",
        description: "Comprehensive 50-80 page proposal with technical design, financial projections, and implementation plan",
        deliverables: ["Detailed proposal", "Executive summary", "Q&A session"]
      }
    ]
  },
  {
    phase: "Phase 2",
    title: "Agreements & Approvals",
    duration: "Weeks 5-8",
    icon: FileText,
    gradient: "from-emerald-500 via-teal-500 to-emerald-600",
    shadowColor: "rgba(16, 185, 129, 0.4)",
    bgColor: "from-emerald-50 to-teal-50",
    steps: [
      {
        week: "Week 5",
        title: "PPA Negotiation",
        description: "Legal review, terms finalization, tariff structure, and performance guarantees agreed",
        deliverables: ["PPA draft", "Terms sheet", "Legal clearance"]
      },
      {
        week: "Week 6",
        title: "Agreement Execution",
        description: "PPA signing ceremony, security deposit transfer, kick-off meeting with all teams",
        deliverables: ["Signed PPA", "Security deposit", "Project charter"]
      },
      {
        week: "Week 7-8",
        title: "Regulatory Approvals",
        description: "NEM application to DISCOM, building permits, fire safety, environmental clearances processed",
        deliverables: ["NEM approval", "Building permits", "Fire NOC"]
      }
    ]
  },
  {
    phase: "Phase 3",
    title: "Procurement",
    duration: "Weeks 9-18",
    icon: ShoppingCart,
    gradient: "from-amber-500 via-orange-500 to-amber-600",
    shadowColor: "rgba(245, 158, 11, 0.4)",
    bgColor: "from-amber-50 to-orange-50",
    steps: [
      {
        week: "Week 9-10",
        title: "Equipment Finalization",
        description: "Panel specs confirmation, inverter selection, mounting structure design, BOS components",
        deliverables: ["Equipment specs", "Vendor contracts", "Quality protocols"]
      },
      {
        week: "Week 11-14",
        title: "International Procurement",
        description: "Purchase orders to manufacturers, factory quality inspections, shipping arrangements",
        deliverables: ["POs issued", "QC reports", "Shipping docs"]
      },
      {
        week: "Week 15-18",
        title: "Shipping & Customs",
        description: "Sea freight transit (3-4 weeks), customs clearance, inland transportation to site",
        deliverables: ["Equipment delivery", "Customs clearance", "Site staging"]
      }
    ]
  },
  {
    phase: "Phase 4",
    title: "Installation",
    duration: "Weeks 19-28",
    icon: Hammer,
    gradient: "from-purple-500 via-violet-500 to-purple-600",
    shadowColor: "rgba(139, 92, 246, 0.4)",
    bgColor: "from-purple-50 to-violet-50",
    steps: [
      {
        week: "Week 19-20",
        title: "Site Mobilization",
        description: "Site office setup, safety protocols, material unloading, labor deployment",
        deliverables: ["Site setup", "Safety plan", "Material inventory"]
      },
      {
        week: "Week 21-23",
        title: "Civil & Foundation",
        description: "Site leveling, excavation, concrete pouring (14-21 day curing), foundation completion",
        deliverables: ["Foundations ready", "Civil work complete", "Curing certified"]
      },
      {
        week: "Week 24-25",
        title: "Structural Installation",
        description: "Mounting structure assembly, erection, alignment, torque specifications verified",
        deliverables: ["Structures erected", "Alignment certified", "QC passed"]
      },
      {
        week: "Week 26-28",
        title: "Module & Electrical",
        description: "Panel installation, DC cabling, inverter setup, AC integration, earthing, monitoring systems",
        deliverables: ["All panels installed", "Electrical complete", "Systems integrated"]
      }
    ]
  },
  {
    phase: "Phase 5",
    title: "Commissioning & Go-Live",
    duration: "Weeks 29-32",
    icon: Power,
    gradient: "from-rose-500 via-pink-500 to-rose-600",
    shadowColor: "rgba(244, 63, 94, 0.4)",
    bgColor: "from-rose-50 to-pink-50",
    steps: [
      {
        week: "Week 29",
        title: "System Integration",
        description: "Inverter configuration, monitoring setup, string-by-string testing, protection device checks",
        deliverables: ["System configured", "All tests passed", "Performance verified"]
      },
      {
        week: "Week 30",
        title: "Pre-Commissioning",
        description: "DISCOM inspection, bidirectional meter installation, integrated testing with all meters",
        deliverables: ["DISCOM inspection", "Meters installed", "Integration certified"]
      },
      {
        week: "Week 31",
        title: "Commissioning",
        description: "Grid synchronization, full system power-up, load testing, performance ratio verification",
        deliverables: ["Grid sync complete", "Full power achieved", "PR verified"]
      },
      {
        week: "Week 32",
        title: "Commercial Operation",
        description: "COD certificate issued, system handover, staff training, O&M services commence, billing begins",
        deliverables: ["COD certificate", "Training complete", "You start saving!"]
      }
    ]
  }
];

const milestones = [
  { title: "Zero Upfront Investment", icon: TrendingUp, color: "text-emerald-500" },
  { title: "25-Year Performance Guarantee", icon: Shield, color: "text-blue-500" },
  { title: "Professional Installation", icon: Award, color: "text-amber-500" },
  { title: "Immediate Savings", icon: Zap, color: "text-purple-500" }
];

const SolarJourneySection = () => {
  const sectionRef = useRef(null);
  const [activePhase, setActivePhase] = useState(0);
  const [expandedStep, setExpandedStep] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".journey-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateX(0)";
              }, index * 150);
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
      className="relative bg-gradient-to-br from-slate-50 via-white to-amber-50/30 py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200')`,
          }}
        ></div>
        
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-amber-200/15 to-orange-200/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-amber-100 to-orange-100 border border-orange-200 rounded-full text-sm font-medium text-orange-800 shadow-sm mb-6">
            <Calendar className="w-4 h-4" />
            Your Complete Solar Journey
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">From Concept to</span>
            <br />
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent">
              Clean Energy in 32 Weeks
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            A transparent, milestone-driven process ensuring you're informed at every step of your solar transformation
          </p>

          {/* Timeline Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {milestones.map((milestone, idx) => {
              const Icon = milestone.icon;
              return (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-md border border-gray-100">
                  <Icon className={`w-5 h-5 ${milestone.color}`} />
                  <span className="text-sm font-medium text-gray-700">{milestone.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Phase Navigation */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide">
            {phases.map((phase, idx) => {
              const Icon = phase.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActivePhase(idx)}
                  className={`flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 border-2 ${
                    activePhase === idx
                      ? `bg-gradient-to-r ${phase.gradient} text-white border-transparent shadow-lg scale-105`
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <Icon size={20} />
                  <div className="text-left">
                    <div className="text-xs opacity-80">{phase.phase}</div>
                    <div className="font-semibold text-sm">{phase.title}</div>
                    <div className="text-xs opacity-80">{phase.duration}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Phase Details */}
        <div className="max-w-6xl mx-auto">
          <div className={`bg-gradient-to-br ${phases[activePhase].bgColor} rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-2xl`}>
            {/* Phase Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${phases[activePhase].gradient} flex items-center justify-center shadow-lg`}>
                {React.createElement(phases[activePhase].icon, { size: 32, className: "text-white" })}
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500">{phases[activePhase].phase}</div>
                <h3 className="text-3xl font-bold text-gray-900">{phases[activePhase].title}</h3>
                <div className="flex items-center gap-2 mt-1 text-gray-600">
                  <Clock size={16} />
                  <span className="text-sm font-medium">{phases[activePhase].duration}</span>
                </div>
              </div>
            </div>

            {/* Phase Steps */}
            <div className="space-y-4">
              {phases[activePhase].steps.map((step, stepIdx) => (
                <div
                  key={stepIdx}
                  className="journey-card bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 opacity-0 translate-x-8 border border-gray-100"
                >
                  <button
                    onClick={() => setExpandedStep(expandedStep === stepIdx ? null : stepIdx)}
                    className="w-full px-6 py-5 flex items-start gap-4 text-left"
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-r ${phases[activePhase].gradient} flex items-center justify-center text-white font-bold shadow-md`}>
                      {stepIdx + 1}
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="text-xs font-medium text-gray-500">{step.week}</div>
                          <h4 className="text-lg font-bold text-gray-900">{step.title}</h4>
                        </div>
                        <div className={`transform transition-transform duration-300 ${expandedStep === stepIdx ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </button>

                  {/* Expanded Deliverables */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedStep === stepIdx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5 pl-20">
                      <div className={`h-px w-full bg-gradient-to-r ${phases[activePhase].gradient} mb-4 opacity-30`}></div>
                      <div className="space-y-2">
                        <h5 className="text-sm font-semibold text-gray-700 mb-3">Key Deliverables:</h5>
                        {step.deliverables.map((deliverable, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2">
                            <CheckCircle size={16} className={`flex-shrink-0`} style={{ color: phases[activePhase].gradient.match(/from-(\w+-\d+)/)[1].replace('from-', '') }} />
                            <span className="text-sm text-gray-600">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Phase CTA */}
            <div className="mt-8 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Ready to Start Your Solar Journey?</h4>
                  <p className="text-sm text-gray-600">Get a detailed timeline and proposal customized for your business</p>
                </div>
                <button className={`flex-shrink-0 px-6 py-3 bg-gradient-to-r ${phases[activePhase].gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                  Schedule Free Assessment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Timeline Visualization */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Complete Timeline Overview</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 via-amber-500 via-purple-500 to-rose-500 rounded-full"></div>
              
              {/* Phase Markers */}
              <div className="relative flex justify-between">
                {phases.map((phase, idx) => {
                  const Icon = phase.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center">
                      <div 
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${phase.gradient} flex items-center justify-center shadow-lg cursor-pointer transform hover:scale-110 transition-all duration-300 relative z-10`}
                        onClick={() => setActivePhase(idx)}
                      >
                        <Icon size={20} className="text-white" />
                      </div>
                      <div className="mt-3 text-center">
                        <div className="text-xs font-medium text-gray-500">{phase.phase}</div>
                        <div className="text-sm font-semibold text-gray-700 max-w-[100px]">{phase.title}</div>
                        <div className="text-xs text-gray-500">{phase.duration}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Total Duration */}
            <div className="mt-10 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-orange-200">
                <Clock className="w-5 h-5 text-orange-500" />
                <div className="text-left">
                  <div className="text-xs text-gray-600">Total Duration</div>
                  <div className="text-lg font-bold text-gray-900">8-10 Months (32 Weeks)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 text-white shadow-xl">
            <div className="text-5xl font-bold mb-2">100%</div>
            <div className="text-emerald-100 text-lg">Success Rate</div>
            <div className="text-emerald-50 text-sm mt-2">Every project commissioned on schedule</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl p-8 text-white shadow-xl">
            <div className="text-5xl font-bold mb-2">500+</div>
            <div className="text-blue-100 text-lg">Projects Delivered</div>
            <div className="text-blue-50 text-sm mt-2">Across manufacturing, commercial, and institutional sectors</div>
          </div>
          
          <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-8 text-white shadow-xl">
            <div className="text-5xl font-bold mb-2">₹9.75Cr</div>
            <div className="text-amber-100 text-lg">Average 25-Year Savings</div>
            <div className="text-amber-50 text-sm mt-2">For a typical 300 kW installation</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default SolarJourneySection;