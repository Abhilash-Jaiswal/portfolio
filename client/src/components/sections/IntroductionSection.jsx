import { useState } from "react";
import {
  Leaf,
  Heart,
  GraduationCap,
  Briefcase,
  Building2,
  Newspaper,
  Sprout,
  CheckCircle2,
  Award,
  Sparkles,
  BookOpen,
  Target,
  ShieldCheck,
  TrendingUp,
  Users
} from "lucide-react";

export function IntroductionSection() {
  const [activeTab, setActiveTab] = useState("philosophy");

  const coreIdentity = [
    { label: "Founder & CEO", value: "KuK Clean Wellness (wellness.kukclean.com)", icon: Leaf },
    { label: "Founder", value: "notpaused.com — Holistic Menopause Platform", icon: Heart },
    { label: "Credentials", value: "Certified Holistic Nutritionist (USA)", icon: GraduationCap },
    { label: "Corporate Alumni", value: "ex-AIG · ex-Target · ex-IBM", icon: Briefcase },
    { label: "Incubations", value: "IIM Bangalore (NSRCEL) · ICAR-IIMR (Nutrihub)", icon: Building2 },
    { label: "Media Features", value: "India Today · YourStory · Bangalore Insider", icon: Newspaper }
  ];

  const credentials = [
    "Certified Holistic Nutritionist",
    "Goldman Sachs GS10K Women Entrepreneur Program — NSRCEL, IIM Bangalore",
    "Ecosystem Alignment & Projects — ISRO",
    "Incubatee — ICAR-IIMR (Nutrihub), Hyderabad — Agritech & Millet Innovation",
    "Jury Member — Christ Academy Institute for Advanced Studies (CAIAS) Startup Awards",
    "Speaker — ASSOCHAM Rajasthan Startup Summit 2024 & Women Leadership Conclave 2024",
    "Featured Leader — India Today · Bangalore Insider · YourStory (interviewed by Shradha Sharma)",
    "Former Corporate Professional — Financial Acumen (AIG), Consumer Insights (Target), Systems (IBM)",
    "Founder — KuK Clean Wellness & notpaused.com platforms"
  ];

  // Theme colours — rose-mauve / blush
  const theme = {
    primary:      "#B55E79",
    primaryLight: "#E6BEC6",
    primarySoft:  "#F4D9DE",
    dark:         "#2E2326",
    muted:        "#5F5358",
    border:       "#E8CDD3"
  };

  return (
    <section
      id="introduction-details"
      className="py-24 px-4 md:px-8 lg:px-12 scroll-mt-20"
      style={{ backgroundColor: "#FCF8F7", borderBottom: `1px solid ${theme.border}` }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Bio & Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-center">
          <div className="lg:col-span-12 space-y-6">
            <div 
              className="inline-flex items-center gap-2 border-t-[3px] pt-2"
              style={{ borderColor: theme.primary }}
            >
              <Sprout className="w-4 h-4 text-[#B55E79]" strokeWidth={1.5} />
              <span 
                className="font-bold text-sm tracking-[0.2em] uppercase"
                style={{ color: theme.primary }}
              >
                Who Is Kirti Yadav?
              </span>
            </div>
            <h2 
              className="font-serif text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ color: theme.dark }}
            >
              Bridging Corporate Precision with <span style={{ color: theme.primary }}>Holistic Wellness</span>
            </h2>
            <p 
              className="text-base lg:text-lg font-light leading-relaxed max-w-3xl"
              style={{ color: theme.muted }}
            >
              An entrepreneur, certified holistic nutritionist, new-age mother, and dedicated vegan. I build wellness ecosystems rooted in real, clean food, honest evidence-based knowledge, and deep, supportive communities.
            </p>
            <div 
              className="border-l-2 pl-6 my-6 italic font-serif text-base lg:text-lg leading-relaxed max-w-2xl"
              style={{ borderColor: theme.primary, color: theme.dark }}
            >
              “Real food is medicine. Knowledge is power. Community is everything.”
            </div>
          </div>
        </div>

        {/* Core Identity Grid (Influencer Page Icon Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {coreIdentity.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-white/80 border border-[#E8CDD3] p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F4D9DE] flex shrink-0 items-center justify-center text-[#B55E79] group-hover:bg-[#B55E79] group-hover:text-white transition-colors duration-500 shadow-sm">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#B55E79]">
                    {item.label}
                  </span>
                  <p className="font-serif font-bold text-sm text-[#2E2326] leading-snug">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy vs Mission Tabs */}
        <div className="mb-20">
          <div 
            className="flex border-b mb-8 justify-center lg:justify-start gap-2"
            style={{ borderColor: theme.border }}
          >
            <button
              onClick={() => setActiveTab("philosophy")}
              className={`pb-4 px-6 font-bold text-sm tracking-wider uppercase transition-all cursor-pointer border-b-2 flex items-center gap-2`}
              style={{
                color: activeTab === "philosophy" ? theme.primary : theme.muted,
                borderBottomColor: activeTab === "philosophy" ? theme.primary : "transparent"
              }}
            >
              <Sparkles className="w-4 h-4" strokeWidth={1.5} />
              Core Philosophy
            </button>
            <button
              onClick={() => setActiveTab("mission")}
              className={`pb-4 px-6 font-bold text-sm tracking-wider uppercase transition-all cursor-pointer border-b-2 flex items-center gap-2`}
              style={{
                color: activeTab === "mission" ? theme.primary : theme.muted,
                borderBottomColor: activeTab === "mission" ? theme.primary : "transparent"
              }}
            >
              <Target className="w-4 h-4" strokeWidth={1.5} />
              Core Mission
            </button>
          </div>

          <div 
            className="bg-white/80 border p-8 rounded-3xl shadow-sm"
            style={{ borderColor: `${theme.border}60` }}
          >
            {activeTab === "philosophy" ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <div 
                    className="w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm bg-[#F4D9DE] text-[#B55E79]"
                  >
                    01
                  </div>
                  <h4 className="font-serif font-bold text-base" style={{ color: theme.dark }}>Health is a Daily Choice</h4>
                  <p className="text-sm leading-relaxed font-light" style={{ color: theme.muted }}>Health is a consistent, daily practice of conscious, nourishing choices—never a destination reached through shortcuts or quick-fix synthetic supplements.</p>
                </div>
                <div className="space-y-3">
                  <div 
                    className="w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm bg-[#F4D9DE] text-[#B55E79]"
                  >
                    02
                  </div>
                  <h4 className="font-serif font-bold text-base" style={{ color: theme.dark }}>Clean-Label Standards</h4>
                  <p className="text-sm leading-relaxed font-light" style={{ color: theme.muted }}>We advocate for clean-label, plant-based nutrition at KuK Clean and apply a deeply inclusive, evidence-based, non-prescriptive approach at notpaused.com.</p>
                </div>
                <div className="space-y-3">
                  <div 
                    className="w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm bg-[#F4D9DE] text-[#B55E79]"
                  >
                    03
                  </div>
                  <h4 className="font-serif font-bold text-base" style={{ color: theme.dark }}>Empathy & Warmth</h4>
                  <p className="text-sm leading-relaxed font-light" style={{ color: theme.muted }}>We meet individuals exactly where they are in their wellness journeys—free from rigid rules, dietary dogma, or any compromise on personal warmth.</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <div 
                    className="w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm bg-[#F4D9DE] text-[#B55E79]"
                  >
                    01
                  </div>
                  <h4 className="font-serif font-bold text-base" style={{ color: theme.dark }}>Democratizing Clean Food</h4>
                  <p className="text-sm leading-relaxed font-light" style={{ color: theme.muted }}>Through KuK Clean Wellness, we democratize plant-based food systems, proving that nutrient-dense, clean food can be exceptionally delicious.</p>
                </div>
                <div className="space-y-3">
                  <div 
                    className="w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm bg-[#F4D9DE] text-[#B55E79]"
                  >
                    02
                  </div>
                  <h4 className="font-serif font-bold text-base" style={{ color: theme.dark }}>Dismantling Taboos</h4>
                  <p className="text-sm leading-relaxed font-light" style={{ color: theme.muted }}>Through notpaused.com, we dismantle the last great taboo in Indian women's health—menopause—providing clinical-level guidance and community support.</p>
                </div>
                <div className="space-y-3">
                  <div 
                    className="w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm bg-[#F4D9DE] text-[#B55E79]"
                  >
                    03
                  </div>
                  <h4 className="font-serif font-bold text-base" style={{ color: theme.dark }}>Systemic Access</h4>
                  <p className="text-sm leading-relaxed font-light" style={{ color: theme.muted }}>Ensuring that every Indian woman, regardless of demographic or background, has open access to nourishing food, honest health information, and deep community.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Highlighted Quote Box */}
        <div 
          className="rounded-3xl p-8 lg:p-12 text-white mb-20 relative overflow-hidden shadow-xl"
          style={{ background: "linear-gradient(135deg, #CF99A6 0%, #B55E79 100%)" }}
        >
          <div 
            className="absolute right-[-10%] bottom-[-20%] w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          ></div>
          <div className="relative z-10 space-y-6">
            <span 
              className="text-white text-[9px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20"
            >
              <Award className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
              Founders' Manifesto
            </span>
            <p className="font-serif text-2xl lg:text-3xl italic leading-relaxed">
              "I built KuK Clean because my daughter deserved better than what the market was offering. I built notpaused because no Indian woman should be awake at 3am with her body changing and no answers to be found."
            </p>
            <span className="text-white/90 text-sm block font-bold uppercase tracking-wider">
              — Kirti Yadav, Founder
            </span>
          </div>
        </div>

        {/* Credentials & Landscape Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Credentials at a Glance */}
          <div 
            className="lg:col-span-6 bg-white/60 border p-8 rounded-3xl shadow-sm"
            style={{ borderColor: `${theme.border}50` }}
          >
            <div className="flex items-center gap-2.5 mb-6 pb-2 border-b" style={{ borderColor: theme.border }}>
              <ShieldCheck className="w-5 h-5 text-[#B55E79]" strokeWidth={1.5} />
              <h3 
                className="font-serif text-xl font-bold"
                style={{ color: theme.dark }}
              >
                Credentials at a Glance
              </h3>
            </div>
            <ul className="space-y-4">
              {credentials.map((cred, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed font-light" style={{ color: theme.muted }}>
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#B55E79] mt-0.5" strokeWidth={2} />
                  <span>{cred}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Unique Positioning */}
          <div 
            className="lg:col-span-6 bg-white/60 border p-8 rounded-3xl shadow-sm flex flex-col justify-between"
            style={{ borderColor: `${theme.border}50` }}
          >
            <div>
              <div className="flex items-center gap-2.5 mb-6 pb-2 border-b" style={{ borderColor: theme.border }}>
                <TrendingUp className="w-5 h-5 text-[#B55E79]" strokeWidth={1.5} />
                <h3 
                  className="font-serif text-xl font-bold"
                  style={{ color: theme.dark }}
                >
                  Unique Positioning
                </h3>
              </div>
              <p 
                className="text-xs font-bold tracking-widest uppercase mb-6 block text-[#B55E79]"
              >
                In the Indian Wellness Landscape
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-serif font-bold text-base mb-1.5" style={{ color: theme.dark }}>
                    Corporate Credibility Meets Government Validation
                  </h4>
                  <p className="text-sm leading-relaxed font-light" style={{ color: theme.muted }}>
                    The convergence of Fortune 500 corporate strategy with government-validated agritech, incubated under IIM Bangalore and ICAR-IIMR, brings unprecedented rigor to community wellness.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base mb-1.5" style={{ color: theme.dark }}>
                    Uncompromising Personal Authenticity
                  </h4>
                  <p className="text-sm leading-relaxed font-light" style={{ color: theme.muted }}>
                    I do not perform a persona or sell standard products. I live my values publicly, with my family's nourishment and community well-being as the single standard for everything I launch.
                  </p>
                </div>
              </div>
            </div>
            
            <div 
              className="mt-8 p-4 rounded-xl border text-center"
              style={{ backgroundColor: `${theme.primarySoft}50`, borderColor: theme.border }}
            >
              <span 
                className="text-[10px] font-bold tracking-widest uppercase block mb-1 text-[#B55E79]"
              >
                Differentiator
              </span>
              <p className="text-sm font-medium font-serif leading-relaxed" style={{ color: theme.dark }}>
                “Integration of personal experience and professional identity is the greatest value in a crowded wellness market.”
              </p>
            </div>
          </div>

        </div>

        {/* Vision for the Next Chapter */}
        <div className="border-t pt-20" style={{ borderColor: `${theme.border}60` }}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#F4D9DE] px-4 py-1.5 rounded-full text-[#B55E79] text-xs font-bold uppercase tracking-widest mb-3">
              <Users className="w-3.5 h-3.5" strokeWidth={1.5} />
              Future Roadmap
            </div>
            <h3 className="font-serif text-2xl font-bold" style={{ color: theme.dark }}>Vision for the Next Chapter</h3>
            <p className="text-sm font-light mt-2 uppercase tracking-widest" style={{ color: theme.muted }}>Scaling Systemic Change Across India</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="p-6 rounded-2xl bg-white border border-[#E8CDD3] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3"
            >
              <span className="w-10 h-10 rounded-2xl bg-[#F4D9DE] text-[#B55E79] font-serif font-bold text-base flex items-center justify-center">I</span>
              <h4 className="font-serif font-bold text-base uppercase" style={{ color: theme.dark }}>KuK Clean Wellness</h4>
              <p className="text-sm leading-relaxed font-light" style={{ color: theme.muted }}>
                Expanding our plant-based, clean-label product ranges, and establishing deep, customized corporate B2B wellness systems.
              </p>
            </div>

            <div 
              className="p-6 rounded-2xl bg-white border border-[#E8CDD3] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3"
            >
              <span className="w-10 h-10 rounded-2xl bg-[#F4D9DE] text-[#B55E79] font-serif font-bold text-base flex items-center justify-center">II</span>
              <h4 className="font-serif font-bold text-base uppercase" style={{ color: theme.primary }}>notpaused.com</h4>
              <p className="text-sm leading-relaxed font-light" style={{ color: theme.muted }}>
                Building toward a 100,000-strong WhatsApp-native women's community and integrating a clinical, national doctor empanelment network.
              </p>
            </div>

            <div 
              className="p-6 rounded-2xl bg-white border border-[#E8CDD3] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3"
            >
              <span className="w-10 h-10 rounded-2xl bg-[#F4D9DE] text-[#B55E79] font-serif font-bold text-base flex items-center justify-center">III</span>
              <h4 className="font-serif font-bold text-base uppercase" style={{ color: theme.dark }}>Systemic Ambition</h4>
              <p className="text-sm leading-relaxed font-light" style={{ color: theme.muted }}>
                Our core mission is institutional health: ensuring every Indian child has access to clean food, and every Indian woman enters midlife with knowledge, confidence, and community.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}