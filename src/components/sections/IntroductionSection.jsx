import { useState } from "react";

export function IntroductionSection() {
  const [activeTab, setActiveTab] = useState("philosophy");

  const coreIdentity = [
    { label: "Founder & CEO", value: "KuK Clean Wellness (wellness.kukclean.com)", icon: "🍃" },
    { label: "Founder", value: "notpaused.com — Holistic Menopause Platform", icon: "🌸" },
    { label: "Credentials", value: "Certified Holistic Nutritionist (USA)", icon: "🎓" },
    { label: "Corporate Alumni", value: "ex-AIG · ex-Target · ex-IBM", icon: "💼" },
    { label: "Incubations", value: "IIM Bangalore (NSRCEL) · ICAR-IIMR (Nutrihub)", icon: "🏫" },
    { label: "Media Features", value: "India Today · YourStory · Bangalore Insider", icon: "📰" }
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

  // Theme colours — deep plum / blush
  const theme = {
    primary:      "#6B2D3E",
    primaryLight: "#C9828F",
    primarySoft:  "#F3E0E3",
    dark:         "#0F0A0B",
    muted:        "#7A5A60",
    border:       "#EACFD3"
  };

  return (
    <section
      id="introduction-details"
      className="py-24 px-4 md:px-8 lg:px-12 scroll-mt-20"
      style={{ backgroundColor: "#FDF8F8", borderBottom: `1px solid ${theme.border}` }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Bio & Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-center">
          <div className="lg:col-span-12 space-y-6">
            <div 
              className="inline-block border-t-[3px] pt-2"
              style={{ borderColor: theme.primary }}
            >
              <span 
                className="font-bold text-sm tracking-[0.2em] uppercase"
                style={{ color: theme.primary }}
              >
                <i className="fas fa-seedling mr-2" style={{ color: theme.primary }}></i> Who Is Kirti Yadav?
              </span>
            </div>
            <h2 
              className="font-serif text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ color: theme.dark }}
            >
              Bridging Corporate Precision with <span style={{ color: theme.primary }}>Holistic Wellness</span>
            </h2>
            <p 
              className="text-base lg:text-lg font-light leading-relaxed text-justify max-w-3xl"
              style={{ color: theme.muted }}
            >
              An entrepreneur, certified holistic nutritionist, new-age mother, and dedicated vegan. I build wellness ecosystems rooted in real, clean food, honest evidence-based knowledge, and deep, supportive communities.
            </p>
            <div 
              className="border-l-2 pl-6 my-6 italic font-serif text-base leading-relaxed max-w-2xl"
              style={{ borderColor: theme.primary, color: theme.dark }}
            >
              “Real food is medicine. Knowledge is power. Community is everything.”
            </div>
          </div>
        </div>

        {/* Philosophy vs Mission Tabs */}
        <div className="mb-20">
          <div 
            className="flex border-b mb-8 justify-center lg:justify-start gap-2"
            style={{ borderColor: theme.border }}
          >
            <button
              onClick={() => setActiveTab("philosophy")}
              className={`pb-4 px-6 font-bold text-sm tracking-wider uppercase transition-all cursor-pointer border-b-2 ${
                activeTab === "philosophy" 
                  ? `text-[${theme.primary}] border-[${theme.primary}]` 
                  : `text-[${theme.muted}] border-transparent hover:text-[${theme.dark}]`
              }`}
              style={{
                color: activeTab === "philosophy" ? theme.primary : theme.muted,
                borderBottomColor: activeTab === "philosophy" ? theme.primary : "transparent"
              }}
              onMouseEnter={(e) => {
                if (activeTab !== "philosophy") {
                  e.currentTarget.style.borderBottomColor = theme.primary + "66";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== "philosophy") {
                  e.currentTarget.style.borderBottomColor = "transparent";
                }
              }}
            >
              Core Philosophy
            </button>
            <button
              onClick={() => setActiveTab("mission")}
              className={`pb-4 px-6 font-bold text-sm tracking-wider uppercase transition-all cursor-pointer border-b-2 ${
                activeTab === "mission" 
                  ? `text-[${theme.primary}] border-[${theme.primary}]` 
                  : `text-[${theme.muted}] border-transparent hover:text-[${theme.dark}]`
              }`}
              style={{
                color: activeTab === "mission" ? theme.primary : theme.muted,
                borderBottomColor: activeTab === "mission" ? theme.primary : "transparent"
              }}
              onMouseEnter={(e) => {
                if (activeTab !== "mission") {
                  e.currentTarget.style.borderBottomColor = theme.primary + "66";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== "mission") {
                  e.currentTarget.style.borderBottomColor = "transparent";
                }
              }}
            >
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
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-base"
                    style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
                  >
                    01
                  </div>
                  <h4 className="font-serif font-bold text-base" style={{ color: theme.dark }}>Health is a Daily Choice</h4>
                  <p className="text-sm leading-relaxed font-light" style={{ color: theme.muted }}>Health is a consistent, daily practice of conscious, nourishing choices—never a destination reached through shortcuts or quick-fix synthetic supplements.</p>
                </div>
                <div className="space-y-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-base"
                    style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
                  >
                    02
                  </div>
                  <h4 className="font-serif font-bold text-base" style={{ color: theme.dark }}>Clean-Label Standards</h4>
                  <p className="text-sm leading-relaxed font-light" style={{ color: theme.muted }}>We advocate for clean-label, plant-based nutrition at KuK Clean and apply a deeply inclusive, evidence-based, non-prescriptive approach at notpaused.com.</p>
                </div>
                <div className="space-y-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-base"
                    style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
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
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-base"
                    style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
                  >
                    01
                  </div>
                  <h4 className="font-serif font-bold text-base" style={{ color: theme.dark }}>Democratizing Clean Food</h4>
                  <p className="text-sm leading-relaxed font-light" style={{ color: theme.muted }}>Through KuK Clean Wellness, we democratize plant-based food systems, proving that nutrient-dense, clean food can be exceptionally delicious.</p>
                </div>
                <div className="space-y-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-base"
                    style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
                  >
                    02
                  </div>
                  <h4 className="font-serif font-bold text-base" style={{ color: theme.dark }}>Dismantling Taboos</h4>
                  <p className="text-sm leading-relaxed font-light" style={{ color: theme.muted }}>Through notpaused.com, we dismantle the last great taboo in Indian women's health—menopause—providing clinical-level guidance and community support.</p>
                </div>
                <div className="space-y-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-base"
                    style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
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
          style={{ backgroundColor: theme.primary }}
        >
          <div 
            className="absolute right-[-10%] bottom-[-20%] w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          ></div>
          <div className="relative z-10 space-y-6">
            <span 
              className="text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full inline-block"
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              Founders' Manifesto
            </span>
            <p className="font-serif text-2xl lg:text-3xl italic leading-relaxed">
              "I built KuK Clean because my daughter deserved better than what the market was offering. I built notpaused because no Indian woman should be awake at 3am with her body changing and no answers to be found."
            </p>
            <span className="text-white/80 text-sm block font-bold uppercase tracking-wider">
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
            <h3 
              className="font-serif text-xl font-bold mb-6 pb-2 border-b"
              style={{ color: theme.dark, borderColor: theme.border }}
            >
              Credentials at a Glance
            </h3>
            <ul className="space-y-4">
              {credentials.map((cred, idx) => (
                <li key={idx} className="flex gap-3 text-sm leading-relaxed font-light" style={{ color: theme.muted }}>
                  <span style={{ color: theme.primary, fontWeight: "bold" }}>✓</span>
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
              <h3 
                className="font-serif text-xl font-bold mb-6 pb-2 border-b"
                style={{ color: theme.dark, borderColor: theme.border }}
              >
                Unique Positioning
              </h3>
              <p 
                className="text-sm font-light tracking-widest uppercase mb-6 block"
                style={{ color: theme.muted }}
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
                className="text-[10px] font-bold tracking-widest uppercase block mb-1"
                style={{ color: theme.muted }}
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
            <h3 className="font-serif text-2xl font-bold" style={{ color: theme.dark }}>Vision for the Next Chapter</h3>
            <p className="text-sm font-light mt-2 uppercase tracking-widest" style={{ color: theme.muted }}>Scaling Systemic Change Across India</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="p-6 rounded-2xl bg-white border shadow-sm hover:border-theme transition-all duration-300"
              style={{ borderColor: `${theme.border}60` }}
            >
              <div className="space-y-3">
                <span className="font-serif text-3xl font-extrabold block select-none" style={{ color: theme.muted }}>I</span>
                <h4 className="font-serif font-bold text-base uppercase" style={{ color: theme.dark }}>KuK Clean Wellness</h4>
                <p className="text-sm leading-relaxed font-light" style={{ color: theme.muted }}>
                  Expanding our plant-based, clean-label product ranges, and establishing deep, customized corporate B2B wellness systems.
                </p>
              </div>
            </div>

            <div 
              className="p-6 rounded-2xl bg-white border shadow-sm hover:border-theme transition-all duration-300"
              style={{ borderColor: `${theme.border}60` }}
            >
              <div className="space-y-3">
                <span className="font-serif text-3xl font-extrabold block select-none" style={{ color: theme.muted }}>II</span>
                <h4 className="font-serif font-bold text-base uppercase" style={{ color: theme.primary }}>notpaused.com</h4>
                <p className="text-sm leading-relaxed font-light" style={{ color: theme.muted }}>
                  Building toward a 100,000-strong WhatsApp-native women's community and integrating a clinical, national doctor empanelment network.
                </p>
              </div>
            </div>

            <div 
              className="p-6 rounded-2xl bg-white border shadow-sm hover:border-theme transition-all duration-300"
              style={{ borderColor: `${theme.border}60` }}
            >
              <div className="space-y-3">
                <span className="font-serif text-3xl font-extrabold block select-none" style={{ color: theme.muted }}>III</span>
                <h4 className="font-serif font-bold text-base uppercase" style={{ color: theme.dark }}>Systemic Ambition</h4>
                <p className="text-sm leading-relaxed font-light" style={{ color: theme.muted }}>
                  Our core mission is institutional health: ensuring every Indian child has access to clean food, and every Indian woman enters midlife with knowledge, confidence, and community.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}