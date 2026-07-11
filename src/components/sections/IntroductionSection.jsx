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

  return (
    <section id="introduction-details" className="py-24 bg-[#F2EFE8] border-b border-stone-200/60 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Bio & Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block border-t-[3px] border-[#FF5C58] pt-2">
              <span className="text-[#FF5C58] font-bold text-xs tracking-[0.2em] uppercase">Who Is Kirti Yadav?</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-stone-900 font-bold tracking-tight leading-tight">
              Bridging Corporate Precision <br/> with <span className="text-[#FF5C58]">Holistic Wellness</span>
            </h2>
            <p className="text-stone-700 text-base lg:text-lg font-light leading-relaxed text-justify">
              An entrepreneur, certified holistic nutritionist, new-age mother, and dedicated vegan. I build wellness ecosystems rooted in real, clean food, honest evidence-based knowledge, and deep, supportive communities.
            </p>
            <div className="border-l-2 border-[#FF5C58] pl-6 my-6 italic text-stone-850 font-serif text-base leading-relaxed">
              "Real food is medicine. Knowledge is power. Community is everything."
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/60 border border-stone-200/50 p-8 rounded-2xl shadow-sm">
            <h3 className="font-serif text-lg text-stone-900 font-bold mb-6">Core Identity</h3>
            <div className="space-y-4">
              {coreIdentity.map((id, idx) => (
                <div key={idx} className="flex gap-4 items-start pb-3 border-b border-stone-155 last:border-b-0 last:pb-0">
                  <span className="text-xl">{id.icon}</span>
                  <div>
                    <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">{id.label}</span>
                    <span className="text-stone-850 font-medium text-xs lg:text-sm">{id.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy vs Mission Tabs Selector */}
        <div className="mb-20">
          <div className="flex border-b border-stone-200 mb-8 justify-center lg:justify-start">
            <button
              onClick={() => setActiveTab("philosophy")}
              className={`pb-4 px-6 font-bold text-xs tracking-wider uppercase transition-all border-b-2 cursor-pointer ${
                activeTab === "philosophy" ? "border-[#FF5C58] text-[#FF5C58]" : "border-transparent text-stone-500 hover:text-stone-805"
              }`}
            >
              Core Philosophy
            </button>
            <button
              onClick={() => setActiveTab("mission")}
              className={`pb-4 px-6 font-bold text-xs tracking-wider uppercase transition-all border-b-2 cursor-pointer ${
                activeTab === "mission" ? "border-[#FF5C58] text-[#FF5C58]" : "border-transparent text-stone-500 hover:text-stone-805"
              }`}
            >
              Core Mission
            </button>
          </div>

          <div className="bg-white/80 border border-stone-200/60 p-8 rounded-3xl shadow-sm">
            {activeTab === "philosophy" ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF5C58]/10 flex items-center justify-center text-[#FF5C58] font-bold text-sm">01</div>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Health is a Daily Choice</h4>
                  <p className="text-stone-500 text-xs leading-relaxed font-light">Health is a consistent, daily practice of conscious, nourishing choices—never a destination reached through shortcuts or quick-fix synthetic supplements.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF5C58]/10 flex items-center justify-center text-[#FF5C58] font-bold text-sm">02</div>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Clean-Label Standards</h4>
                  <p className="text-stone-500 text-xs leading-relaxed font-light">We advocate for clean-label, plant-based nutrition at KuK Clean and apply a deeply inclusive, evidence-based, non-prescriptive approach at notpaused.com.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF5C58]/10 flex items-center justify-center text-[#FF5C58] font-bold text-sm">03</div>
                  <h4 className="font-serif font-bold text-stone-905 text-sm">Empathy & Warmth</h4>
                  <p className="text-stone-500 text-xs leading-relaxed font-light">We meet individuals exactly where they are in their wellness journeys—free from rigid rules, dietary dogma, or any compromise on personal warmth.</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF5C58]/10 flex items-center justify-center text-[#FF5C58] font-bold text-sm">01</div>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Democratizing Clean Food</h4>
                  <p className="text-stone-500 text-xs leading-relaxed font-light">Through KuK Clean Wellness, we democratize plant-based food systems, proving that nutrient-dense, clean food can be exceptionally delicious.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF5C58]/10 flex items-center justify-center text-[#FF5C58] font-bold text-sm">02</div>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Dismantling Taboos</h4>
                  <p className="text-stone-500 text-xs leading-relaxed font-light">Through notpaused.com, we dismantle the last great taboo in Indian women's health—menopause—providing clinical-level guidance and community support.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF5C58]/10 flex items-center justify-center text-[#FF5C58] font-bold text-sm">03</div>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Systemic Access</h4>
                  <p className="text-stone-500 text-xs leading-relaxed font-light">Ensuring that every Indian woman, regardless of demographic or background, has open access to nourishing food, honest health information, and deep community.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Highlighted Quote Box */}
        <div className="bg-[#FF5C58] rounded-3xl p-8 lg:p-12 text-white mb-20 relative overflow-hidden shadow-xl shadow-red-950/10">
          <div className="absolute right-[-10%] bottom-[-20%] w-[300px] h-[300px] bg-white/5 rounded-full pointer-events-none"></div>
          <div className="relative z-10 space-y-6">
            <span className="bg-white/10 text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full inline-block">
              Founders' Manifesto
            </span>
            <p className="font-serif text-2xl lg:text-3xl italic leading-relaxed">
              "I built KuK Clean because my daughter deserved better than what the market was offering. I built notpaused because no Indian woman should be awake at 3am with her body changing and no answers to be found."
            </p>
            <span className="text-white/80 text-xs block font-bold uppercase tracking-wider">
              — Kirti Yadav, Founder
            </span>
          </div>
        </div>

        {/* Credentials & Landscape Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Credentials at a Glance */}
          <div className="lg:col-span-6 bg-white/60 border border-stone-200/50 p-8 rounded-3xl shadow-sm">
            <h3 className="font-serif text-xl text-stone-900 font-bold mb-6 pb-2 border-b border-stone-150">
              Credentials at a Glance
            </h3>
            <ul className="space-y-4">
              {credentials.map((cred, idx) => (
                <li key={idx} className="flex gap-3 text-xs text-stone-650 leading-relaxed font-light">
                  <span className="text-[#FF5C58] font-bold">✓</span>
                  <span>{cred}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Unique Position */}
          <div className="lg:col-span-6 bg-white/60 border border-stone-200/50 p-8 rounded-3xl shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-xl text-stone-900 font-bold mb-6 pb-2 border-b border-stone-150">
                Unique Positioning
              </h3>
              <p className="text-stone-500 text-xs font-light tracking-widest uppercase mb-6 block">
                In the Indian Wellness Landscape
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-sm mb-1.5">
                    Corporate Credibility Meets Government Validation
                  </h4>
                  <p className="text-stone-600 text-xs leading-relaxed font-light">
                    The convergence of Fortune 500 corporate strategy with government-validated agritech, incubated under IIM Bangalore and ICAR-IIMR, brings unprecedented rigor to community wellness.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-sm mb-1.5">
                    Uncompromising Personal Authenticity
                  </h4>
                  <p className="text-stone-600 text-xs leading-relaxed font-light">
                    I do not perform a persona or sell standard products. I live my values publicly, with my family's nourishment and community well-being as the single standard for everything I launch.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 rounded-xl bg-[#F2EFE8]/50 border border-stone-200 text-center">
              <span className="text-stone-500 text-[10px] font-bold tracking-widest uppercase block mb-1">Differentiator</span>
              <p className="text-stone-850 text-xs font-medium font-serif leading-relaxed">
                "Integration of personal experience and professional identity is the greatest value in a crowded wellness market."
              </p>
            </div>
          </div>

        </div>

        {/* Vision for the Next Chapter */}
        <div className="border-t border-stone-200/60 pt-20">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl text-stone-900 font-bold">Vision for the Next Chapter</h3>
            <p className="text-stone-500 text-xs font-light mt-2 uppercase tracking-widest">Scaling Systemic Change Across India</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white border border-stone-200/60 shadow-sm flex flex-col justify-between hover:border-[#FF5C58]/20 transition-all duration-300">
              <div className="space-y-3">
                <span className="text-stone-400 font-serif text-3xl font-extrabold block select-none">I</span>
                <h4 className="font-serif font-bold text-stone-900 text-sm uppercase">KuK Clean Wellness</h4>
                <p className="text-stone-550 text-xs leading-relaxed font-light">
                  Expanding our plant-based, clean-label product ranges, and establishing deep, customized corporate B2B wellness systems.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200/60 shadow-sm flex flex-col justify-between hover:border-[#FF5C58]/20 transition-all duration-300">
              <div className="space-y-3">
                <span className="text-stone-400 font-serif text-3xl font-extrabold block select-none">II</span>
                <h4 className="font-serif font-bold text-[#FF5C58] text-sm uppercase">notpaused.com</h4>
                <p className="text-stone-550 text-xs leading-relaxed font-light">
                  Building toward a 100,000-strong WhatsApp-native women's community and integrating a clinical, national doctor empanelment network.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200/60 shadow-sm flex flex-col justify-between hover:border-[#FF5C58]/20 transition-all duration-300">
              <div className="space-y-3">
                <span className="text-stone-400 font-serif text-3xl font-extrabold block select-none">III</span>
                <h4 className="font-serif font-bold text-stone-900 text-sm uppercase">Systemic Ambition</h4>
                <p className="text-stone-550 text-xs leading-relaxed font-light">
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
