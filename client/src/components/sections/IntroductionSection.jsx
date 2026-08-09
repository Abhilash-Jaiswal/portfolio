import { useState } from "react";
import { Link } from "react-router-dom";
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
  Target,
  ShieldCheck,
  TrendingUp,
  Users,
  ArrowRight,
  Quote,
  Check
} from "lucide-react";

export function IntroductionSection() {
  const [activeTab, setActiveTab] = useState("philosophy");

  const coreIdentity = [
    { label: "Founder & CEO", value: "KuK Clean Wellness", detail: "wellness.kukclean.com", icon: Leaf },
    { label: "Founder", value: "NotPaused.com", detail: "Holistic Menopause Platform", icon: Heart },
    { label: "Credentials", value: "Holistic Nutritionist", detail: "Certified (USA)", icon: GraduationCap },
    { label: "Corporate Alumni", value: "Ex-IBM · AIG · Target", detail: "10+ Yrs Corporate Strategy", icon: Briefcase },
    { label: "Incubations", value: "IIM Bangalore & ICAR", detail: "NSRCEL · NutriHub Hyderabad", icon: Building2 },
    { label: "Media Features", value: "India Today & YourStory", detail: "Bangalore Insider Coverage", icon: Newspaper }
  ];

  const credentials = [
    "Certified Holistic Nutritionist (USA)",
    "Goldman Sachs GS10K Women Entrepreneur — NSRCEL, IIM Bangalore",
    "Ecosystem Alignment & Projects — ISRO Alignment",
    "Incubatee — ICAR-IIMR (NutriHub), Hyderabad (Agritech & Millet Innovation)",
    "Jury Member — Christ Academy Institute for Advanced Studies (CAIAS)",
    "Keynote Speaker — ASSOCHAM Startup Summit & Women Leadership Conclave 2024",
    "Featured Leader — India Today · Bangalore Insider · YourStory (Interviewed by Shradha Sharma)",
    "Former Corporate Professional — Financial Strategy (AIG), Consumer Insights (Target), Systems (IBM)",
    "Founder & Architect — KuK Clean Wellness & NotPaused.com Platforms"
  ];

  const theme = {
    primary:      "#B55E79",   // burgundy accent
    dustyRose:    "#CF99A6",   // dusty rose primary
    primarySoft:  "#F4D9DE",   // soft blush surface
    dark:         "#2E2326",   // dark chocolate
    muted:        "#5F5358",   // body text
    border:       "#E8CDD3",   // thin border
    bg:           "#FCF8F7",   // warm light background
    cardBg:       "#FFF9FA",   // luxury card bg
    limeHighlight: "#E9F5B8"   // soft luxury lime CTA accent
  };

  return (
    <section
      id="introduction-details"
      className="py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden font-body"
      style={{ backgroundColor: theme.bg }}
    >
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-[#CF99A6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-[-10%] w-[500px] h-[500px] bg-[#B55E79]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── SECTION HEADER ── */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 bg-[#F4D9DE] border border-[#E8CDD3] text-[#B55E79] text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6 shadow-sm">
            <Sprout className="w-3.5 h-3.5" strokeWidth={2} />
            <span>Who Is Kirti Yadav?</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <h2
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-6"
                style={{ color: theme.dark }}
              >
                A fellow explorer, making room for{" "}
                <span className="relative inline-block text-[#B55E79]">
                  what's next.
                  <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#CF99A6]/40 rounded-full" />
                </span>
              </h2>
              <div className="space-y-4 max-w-3xl">
                <p
                  className="text-base sm:text-lg font-light leading-relaxed"
                  style={{ color: theme.muted }}
                >
                  I didn't start out in wellness. I started in computer science, building systems for companies like IBM, Target, and AIG. Then life asked a different question — one that brought me closer to food, health, motherhood, and the quiet shifts that can change everything.
                </p>
                <p
                  className="text-base sm:text-lg font-light leading-relaxed"
                  style={{ color: theme.muted }}
                >
                  Today I build spaces where people feel more supported: on the plate, at work, through menopause and everything it brings, and in the businesses they're brave enough to start.
                </p>
                <div className="pt-2">
                  <Link 
                    to="/life-story"
                    className="inline-flex items-center gap-2 font-medium hover:opacity-80 transition-opacity"
                    style={{ color: theme.primary }}
                  >
                    <span>Read my full story</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#FFF9FA] border border-[#E8CDD3] p-6 lg:p-8 rounded-3xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#F4D9DE]/50 rounded-bl-full pointer-events-none" />
              <Quote className="w-8 h-8 text-[#B55E79] mb-3 opacity-60" strokeWidth={1.5} />
              <p className="font-serif italic text-lg leading-relaxed text-[#2E2326] mb-4">
                “Real food is medicine. Knowledge is power. Community is everything.”
              </p>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#B55E79] block">
                — Kirti's Core Motto
              </span>
            </div>
          </div>
        </div>


        {/* ── CORE IDENTITY CARDS GRID ── */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="font-serif text-2xl font-bold text-[#2E2326]">Key Pillars &amp; Credentials</h3>
            <div className="h-[1px] flex-1 bg-[#E8CDD3]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreIdentity.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group bg-[#FFF9FA] border border-[#E8CDD3] p-7 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[#CF99A6] transition-all duration-400 flex items-start gap-4"
                >
                  <div className="w-13 h-13 rounded-2xl bg-[#F4D9DE] flex shrink-0 items-center justify-center text-[#B55E79] group-hover:bg-[#B55E79] group-hover:text-white transition-all duration-500 shadow-sm group-hover:scale-105">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#B55E79] block">
                      {item.label}
                    </span>
                    <h4 className="font-serif font-bold text-base text-[#2E2326] leading-snug">
                      {item.value}
                    </h4>
                    <p className="text-xs text-[#5F5358] font-normal">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        {/* ── PHILOSOPHY VS MISSION TABBED SECTION ── */}
        <div className="mb-24">
          <div className="bg-[#FFF9FA] border border-[#E8CDD3] p-8 lg:p-12 rounded-3xl shadow-sm">
            
            {/* Tab Controls */}
            <div className="flex flex-wrap border-b border-[#E8CDD3] mb-10 pb-4 gap-3 justify-start">
              <button
                onClick={() => setActiveTab("philosophy")}
                className={`py-3 px-6 rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  activeTab === "philosophy"
                    ? "bg-[#2E2326] text-white shadow-md scale-105"
                    : "bg-[#F4D9DE]/60 text-[#5F5358] hover:bg-[#F4D9DE] hover:text-[#2E2326]"
                }`}
              >
                <Sparkles className="w-4 h-4 text-[#B55E79]" strokeWidth={2} />
                <span>Core Philosophy</span>
              </button>

              <button
                onClick={() => setActiveTab("mission")}
                className={`py-3 px-6 rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  activeTab === "mission"
                    ? "bg-[#2E2326] text-white shadow-md scale-105"
                    : "bg-[#F4D9DE]/60 text-[#5F5358] hover:bg-[#F4D9DE] hover:text-[#2E2326]"
                }`}
              >
                <Target className="w-4 h-4 text-[#B55E79]" strokeWidth={2} />
                <span>Core Mission</span>
              </button>
            </div>

            {/* Tab Content */}
            <div className="transition-all duration-500">
              {activeTab === "philosophy" ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
                  <div className="p-6 rounded-2xl bg-[#FCF8F7] border border-[#E8CDD3]/80 space-y-4 hover:border-[#CF99A6] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#F4D9DE] text-[#B55E79] font-serif font-bold text-base flex items-center justify-center shadow-sm">
                      01
                    </div>
                    <h4 className="font-serif font-bold text-lg text-[#2E2326]">Health is a Daily Choice</h4>
                    <p className="text-sm leading-relaxed text-[#5F5358] font-light">
                      Health is a consistent, daily practice of conscious, nourishing choices—never a destination reached through shortcuts or quick-fix synthetic supplements.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#FCF8F7] border border-[#E8CDD3]/80 space-y-4 hover:border-[#CF99A6] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#F4D9DE] text-[#B55E79] font-serif font-bold text-base flex items-center justify-center shadow-sm">
                      02
                    </div>
                    <h4 className="font-serif font-bold text-lg text-[#2E2326]">Clean-Label Standards</h4>
                    <p className="text-sm leading-relaxed text-[#5F5358] font-light">
                      We advocate for clean-label, plant-based nutrition at KuK Clean and apply a deeply inclusive, evidence-based, non-prescriptive approach at NotPaused.com.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#FCF8F7] border border-[#E8CDD3]/80 space-y-4 hover:border-[#CF99A6] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#F4D9DE] text-[#B55E79] font-serif font-bold text-base flex items-center justify-center shadow-sm">
                      03
                    </div>
                    <h4 className="font-serif font-bold text-lg text-[#2E2326]">Empathy &amp; Warmth</h4>
                    <p className="text-sm leading-relaxed text-[#5F5358] font-light">
                      We meet individuals exactly where they are in their wellness journeys—free from rigid rules, dietary dogma, or any compromise on personal warmth.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
                  <div className="p-6 rounded-2xl bg-[#FCF8F7] border border-[#E8CDD3]/80 space-y-4 hover:border-[#CF99A6] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#F4D9DE] text-[#B55E79] font-serif font-bold text-base flex items-center justify-center shadow-sm">
                      01
                    </div>
                    <h4 className="font-serif font-bold text-lg text-[#2E2326]">Democratizing Clean Food</h4>
                    <p className="text-sm leading-relaxed text-[#5F5358] font-light">
                      Through KuK Clean Wellness, we democratize plant-based food systems, proving that nutrient-dense, clean food can be exceptionally delicious.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#FCF8F7] border border-[#E8CDD3]/80 space-y-4 hover:border-[#CF99A6] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#F4D9DE] text-[#B55E79] font-serif font-bold text-base flex items-center justify-center shadow-sm">
                      02
                    </div>
                    <h4 className="font-serif font-bold text-lg text-[#2E2326]">Dismantling Taboos</h4>
                    <p className="text-sm leading-relaxed text-[#5F5358] font-light">
                      Through NotPaused.com, we dismantle the last great taboo in Indian women's health—menopause—providing clinical-level guidance and community support.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#FCF8F7] border border-[#E8CDD3]/80 space-y-4 hover:border-[#CF99A6] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#F4D9DE] text-[#B55E79] font-serif font-bold text-base flex items-center justify-center shadow-sm">
                      03
                    </div>
                    <h4 className="font-serif font-bold text-lg text-[#2E2326]">Systemic Access</h4>
                    <p className="text-sm leading-relaxed text-[#5F5358] font-light">
                      Ensuring that every Indian woman, regardless of demographic or background, has open access to nourishing food, honest health information, and deep community.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>


        {/* ── MANIFESTO BANNER ── */}
        <div
          className="rounded-3xl p-8 lg:p-14 text-white mb-24 relative overflow-hidden shadow-2xl"
          style={{ background: "linear-gradient(135deg, #CF99A6 0%, #B55E79 100%)" }}
        >
          {/* Animated decorative shapes */}
          <div className="absolute top-[-30%] right-[-10%] w-[400px] h-[400px] bg-white/10 rounded-full blur-2xl animate-float pointer-events-none" />
          <div className="absolute bottom-[-20%] left-[-5%] w-[300px] h-[300px] bg-white/5 rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-6">
            <span className="text-white text-[10px] font-bold tracking-[0.22em] uppercase px-4 py-2 rounded-full inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25">
              <Award className="w-4 h-4 text-white" strokeWidth={1.5} />
              Founders' Manifesto
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl italic leading-relaxed text-white">
              “I built KuK Clean because my daughter deserved better than what the market was offering. I built NotPaused because no Indian woman should be awake at 3am with her body changing and no answers to be found.”
            </h3>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white font-serif font-bold text-lg">
                K
              </div>
              <div>
                <span className="text-white font-bold text-sm block uppercase tracking-wider">
                  Kirti Yadav
                </span>
                <span className="text-white/80 text-xs font-light">
                  Founder — KuK Clean Wellness &amp; NotPaused.com
                </span>
              </div>
            </div>
          </div>
        </div>


        {/* ── CREDENTIALS & POSITIONING SPLIT GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-stretch">
          
          {/* Credentials at a Glance */}
          <div className="lg:col-span-6 bg-[#FFF9FA] border border-[#E8CDD3] p-8 lg:p-10 rounded-3xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8CDD3]">
                <div className="w-10 h-10 rounded-xl bg-[#F4D9DE] flex items-center justify-center text-[#B55E79]">
                  <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2E2326]">
                  Credentials at a Glance
                </h3>
              </div>

              <ul className="space-y-3.5">
                {credentials.map((cred, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-[#5F5358] font-light group transition-transform duration-200 hover:translate-x-1">
                    <div className="w-5 h-5 rounded-full bg-[#F4D9DE] flex shrink-0 items-center justify-center text-[#B55E79] mt-0.5 group-hover:bg-[#B55E79] group-hover:text-white transition-colors">
                      <Check className="w-3 h-3" strokeWidth={2.5} />
                    </div>
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Unique Positioning */}
          <div className="lg:col-span-6 bg-[#FFF9FA] border border-[#E8CDD3] p-8 lg:p-10 rounded-3xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8CDD3]">
                <div className="w-10 h-10 rounded-xl bg-[#F4D9DE] flex items-center justify-center text-[#B55E79]">
                  <TrendingUp className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2E2326]">
                  Unique Positioning
                </h3>
              </div>

              <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 block text-[#B55E79]">
                In the Indian Wellness Landscape
              </span>

              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-[#FCF8F7] border border-[#E8CDD3]">
                  <h4 className="font-serif font-bold text-base mb-2 text-[#2E2326]">
                    Corporate Credibility Meets Government Validation
                  </h4>
                  <p className="text-sm leading-relaxed text-[#5F5358] font-light">
                    The convergence of Fortune 500 corporate strategy with government-validated agritech, incubated under IIM Bangalore and ICAR-IIMR, brings unprecedented rigor to community wellness.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FCF8F7] border border-[#E8CDD3]">
                  <h4 className="font-serif font-bold text-base mb-2 text-[#2E2326]">
                    Uncompromising Personal Authenticity
                  </h4>
                  <p className="text-sm leading-relaxed text-[#5F5358] font-light">
                    I do not perform a persona or sell standard products. I live my values publicly, with my family's nourishment and community well-being as the single standard for everything I launch.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 rounded-2xl border border-[#E8CDD3] bg-[#F4D9DE]/40 text-center">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase block mb-1 text-[#B55E79]">
                Key Differentiator
              </span>
              <p className="text-sm font-serif italic text-[#2E2326] leading-relaxed">
                “Integration of personal experience and professional identity is the greatest value in a crowded wellness market.”
              </p>
            </div>
          </div>

        </div>


        {/* ── VISION FOR THE NEXT CHAPTER (ROADMAP) ── */}
        <div className="border-t border-[#E8CDD3] pt-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-[#F4D9DE] text-[#B55E79] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3">
              <Users className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span>Future Roadmap</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E2326]">
              Vision for the Next Chapter
            </h3>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mt-2 text-[#B55E79]">
              Scaling Systemic Change Across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-3xl bg-[#FFF9FA] border border-[#E8CDD3] shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#CF99A6] transition-all duration-400 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F4D9DE] text-[#B55E79] font-serif font-bold text-lg flex items-center justify-center group-hover:bg-[#B55E79] group-hover:text-white transition-colors">
                I
              </div>
              <h4 className="font-serif font-bold text-lg uppercase tracking-tight text-[#2E2326]">
                KuK Clean Wellness
              </h4>
              <p className="text-sm leading-relaxed text-[#5F5358] font-light">
                Expanding our plant-based, clean-label product ranges, and establishing deep, customized corporate B2B wellness systems.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-[#FFF9FA] border border-[#E8CDD3] shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#CF99A6] transition-all duration-400 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F4D9DE] text-[#B55E79] font-serif font-bold text-lg flex items-center justify-center group-hover:bg-[#B55E79] group-hover:text-white transition-colors">
                II
              </div>
              <h4 className="font-serif font-bold text-lg uppercase tracking-tight text-[#B55E79]">
                NotPaused.com
              </h4>
              <p className="text-sm leading-relaxed text-[#5F5358] font-light">
                Building toward a 100,000-strong WhatsApp-native women's community and integrating a clinical, national doctor empanelment network.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-[#FFF9FA] border border-[#E8CDD3] shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#CF99A6] transition-all duration-400 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F4D9DE] text-[#B55E79] font-serif font-bold text-lg flex items-center justify-center group-hover:bg-[#B55E79] group-hover:text-white transition-colors">
                III
              </div>
              <h4 className="font-serif font-bold text-lg uppercase tracking-tight text-[#2E2326]">
                Systemic Ambition
              </h4>
              <p className="text-sm leading-relaxed text-[#5F5358] font-light">
                Our core mission is institutional health: ensuring every Indian child has access to clean food, and every Indian woman enters midlife with knowledge, confidence, and community.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}