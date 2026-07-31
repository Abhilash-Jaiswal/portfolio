import { useEffect, useRef } from "react";
import {
  BookOpen,
  Shield,
  Stethoscope,
  BarChart3,
  Users,
  MessageSquare,
  Sparkles,
  Globe,
  UserCheck,
  Building2,
  Building,
  Lightbulb,
  Heart,
  Award
} from "lucide-react";

function useReveal(ref) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    els?.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const theme = {
  primary:      "#B55E79",   // rose-mauve
  primaryLight: "#E6BEC6",
  primarySoft:  "#F4D9DE",
  dark:         "#2E2326",
  muted:        "#5F5358",
  border:       "#E8CDD3",
  bg:           "#FCF8F7"
};

const pillars = [
  { icon: Shield, title: "Safe Community", desc: "Vetted, non-judgmental peer support spaces for 1,100+ women across 7 metro chapters — breaking the silence and shame around midlife transitions." },
  { icon: Stethoscope, title: "Expert Support", desc: "Access to certified holistic nutritionists, gynaecologists, fitness coaches, and mental health professionals specializing in midlife health." },
  { icon: BarChart3, title: "Symptom Tracking", desc: "Evidence-based guidance covering 34+ recognized perimenopause symptoms — from sleep disturbances and brain fog to joint pain and mood shifts." },
  { icon: BookOpen, title: "Trusted Education", desc: "India-specific, culturally rooted health literacy built for Indian bodies, diets, and family dynamics — not adapted from Western templates." },
];

const principles = [
  { icon: Users, title: "Open & Inclusive", desc: "No single dietary or medical ideology pushed. All approaches welcomed — treating women as intelligent, empowered decision-makers." },
  { icon: MessageSquare, title: "WhatsApp-Native (85-95% Open)", desc: "Meeting women on the platform they use every single day, driving unprecedented engagement compared to traditional email (22%)." },
  { icon: Sparkles, title: "Aspirational Midlife", desc: "Reframing midlife as an active, vibrant chapter — solo travel, trekking, career peaks, and personal strength, not decline." },
  { icon: Globe, title: "India-Specific Frameworks", desc: "Tailored to Indian family dynamics, kitchen ingredients, and cultural realities rather than imported Western guidelines." },
  { icon: Heart, title: "Holistic Care Arc", desc: "Bridging nutrition, community belonging, and clinical gynaecological access for end-to-end midlife wellness." },
];

const services = [
  {
    icon: UserCheck,
    title: "5-Month 1:1 Perimenopause Coaching",
    items: ["Personalised midlife nutrition & symptom management", "Strength & mobility routines for bone density", "Sleep, stress & metabolic health optimization", "Vetted 1,100+ member WhatsApp community access"],
  },
  {
    icon: Building2,
    title: "Corporate Menopause Clinics",
    items: ["Employee education sessions for senior women leaders", "HR team sensitisation & menopause policy building", "Retaining female executive talent during midlife", "Multi-session midlife wellness masterclasses"],
  },
  {
    icon: Building,
    title: "Institutional & Community Workshops",
    items: ["Menopause awareness for educators & institutions", "Destigmatizing midlife health in family circles", "Group masterclasses on hormonal nutrition", "City chapter meetups across 7 Indian metros"],
  },
];

const saladFormulaBlocks = [
  { step: "1. Base", text: "Spinach, Fenugreek, Cabbage, Sprouted Mung, Millets (Pearl/Sorghum/Finger), Raw Papaya, Cucumber, Amaranth Leaves, Sweet Potato, Red Cabbage, Foxtail Millet, Sprouted Chickpeas." },
  { step: "2. Crunch", text: "Roasted Pumpkin Seeds, Toasted Almonds, Walnuts, Roasted Chana, Sesame Seeds, Sun-dried Tomatoes, Pomegranate Arils." },
  { step: "3. Dressing", text: "Lemon Juice, Extra Virgin Olive Oil, Apple Cider Vinegar, Cold-pressed Mustard Oil, Rock Salt, Roasted Cumin, Black Pepper, Garlic." },
];

export function NotPausedSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section 
      id="notpaused" 
      ref={ref} 
      className="border-b scroll-mt-20"
      style={{ 
        backgroundColor: theme.bg,
        borderColor: `${theme.border}60`
      }}
    >

      {/* ── HERO BANNER ── */}
      <div
        className="relative overflow-hidden py-28 px-6 md:px-12 lg:px-20"
        style={{ background: `linear-gradient(135deg, #CF99A6 0%, #B55E79 100%)` }}
      >
        <div className="absolute -top-24 -right-16 w-[450px] h-[450px] bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -left-10 w-80 h-80 bg-white/8 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        
        <div className="relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
            NotPaused.com · Founded 2025
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1] mb-6">
            India's Dedicated <br />
            <span className="font-serif font-bold italic drop-shadow-sm animate-color-glow">Perimenopause &amp; Midlife Platform</span>
          </h1>
          <p className="text-white/75 text-base lg:text-lg font-light leading-relaxed max-w-2xl">
            Menopause is not a pause. It is a comma — a breath before the most powerful chapter of a woman's life. NotPaused.com was built to ensure no Indian woman navigates it alone.
          </p>
          <div className="flex flex-wrap gap-8 mt-12">
            {[["65M+", "Women in India Window"], ["75%", "Lack Guidance"], ["1,100+", "WhatsApp Members"], ["7 Metros", "City Chapters"]].map(([n, l]) => (
              <div key={l}>
                <span className="font-serif text-3xl font-bold text-white block">{n}</span>
                <span className="text-white/60 text-xs uppercase tracking-widest">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 space-y-20">

        {/* Problem Stat Banner */}
        <div 
          className="reveal relative overflow-hidden rounded-3xl p-10 text-white text-center shadow-xl"
          style={{ background: "linear-gradient(135deg, #CF99A6 0%, #B55E79 100%)" }}
        >
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="relative z-10 space-y-3 max-w-4xl mx-auto">
            <span className="bg-white/15 border border-white/20 text-white text-[9px] font-bold tracking-widest uppercase px-4 py-2 rounded-full inline-block">The National Scale</span>
            <p className="font-serif text-xl lg:text-3xl font-bold leading-relaxed">
              65 MILLION Indian women are currently in the perimenopause–menopause window. <br />
              <span className="font-light italic text-xl">75% navigate it without medical guidance or awareness.</span>
            </p>
            <p className="text-white/80 text-sm font-light">NotPaused.com was founded in 2025 by Kirti Yadav to bridge this precise gap.</p>
          </div>
        </div>

        {/* Ch 01 — Personal Origin */}
        <div className="space-y-8">
          <div className="reveal flex flex-col md:flex-row md:items-center gap-4">
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 text-white bg-[#B55E79]"
            >
              <Lightbulb className="w-7 h-7 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <span className="block text-[10px] font-bold tracking-[0.3em] uppercase mb-1 text-[#B55E79]">Chapter 01</span>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-[#2E2326]">The Personal Origin (2025)</h2>
              <p className="text-xs font-medium tracking-widest uppercase mt-1 text-[#5F5358]">Why a certified nutritionist found herself unprepared — and built the solution</p>
            </div>
          </div>
          <div 
            className="reveal pl-6 border-l-2 rounded-r-xl border-[#B55E79]"
          >
            <p className="text-base font-light leading-relaxed text-[#5F5358]">
              Kirti Yadav is an AFPA-certified holistic nutritionist specializing in herbal and natural strategies for menopause. Yet when she confronted her own perimenopause symptoms at 40, she found herself facing a stark reality: even with professional training, India-specific, culturally relevant guidance was virtually non-existent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { h: "The Cultural Silence", b: "Women in India are routinely told 'it's just age' or 'endure it in private'. Brain fog, joint pain, sleep disruption, anxiety, and weight redistribution are misattributed or dismissed. No guidance. No community. Just silence." },
              { h: "The Refusal to Accept That", b: "NotPaused.com was born in 2025 as Kirti's direct refusal to accept that silence. Built from lived experience and evidence-based nutrition, it provides women 35+ with a trusted ecosystem of education, coaching, and peer support." },
            ].map((item, i) => (
              <div 
                key={i} 
                className="reveal shimmer-card bg-white/80 border border-[#E8CDD3] p-7 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h4 className="font-serif font-bold text-base mb-3 text-[#2E2326]">{item.h}</h4>
                <p className="text-sm font-light leading-relaxed text-justify text-[#5F5358]">{item.b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Pillar Architecture */}
        <div>
          <div className="reveal text-center mb-10">
            <div 
              className="inline-flex items-center gap-2 border-t-[3px] pt-2 mb-4 border-[#B55E79]"
            >
              <Shield className="w-4 h-4 text-[#B55E79]" strokeWidth={1.5} />
              <span className="font-bold text-sm tracking-[0.2em] uppercase text-[#B55E79]">Solution Architecture</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#2E2326]">The Four Pillars of NotPaused.com</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div 
                  key={i} 
                  className="reveal shimmer-card bg-white/80 border border-[#E8CDD3] p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 group"
                >
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#F4D9DE] text-[#B55E79] group-hover:bg-[#B55E79] group-hover:text-white transition-colors duration-500 shadow-sm"
                  >
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#2E2326]">{p.title}</h4>
                  <p className="text-xs font-light leading-relaxed text-[#5F5358]">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Asset: The Salad Formula eBook */}
        <div
          className="reveal bg-gradient-to-br from-white to-[#FCF8F7] border border-[#E8CDD3] p-12 lg:p-16 rounded-[3rem] shadow-xl space-y-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F4D9DE]/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[#E8CDD3] relative z-10">
            <div className="space-y-4">
              <span
                className="text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2 bg-[#B55E79]"
              >
                <BookOpen size={14} strokeWidth={1.5} /> Lead Magnet Asset
              </span>
              <h3 className="font-serif text-3xl lg:text-4xl font-bold leading-tight text-[#2E2326]">&quot;The Salad Formula&quot; eBook</h3>
              <p className="text-sm font-medium uppercase tracking-[0.1em] text-[#5F5358]">An Indian Ingredient Guide to Building the Perfect Salad — Every Time</p>
            </div>
            <div className="md:text-right hidden sm:block">
              <span className="text-sm font-bold block mb-1 text-[#B55E79]">By Kirti Yadav</span>
              <span className="text-xs uppercase tracking-wider block text-[#5F5358]">Certified Holistic Nutritionist</span>
            </div>
          </div>

          <p className="text-base lg:text-lg font-serif italic leading-relaxed max-w-4xl relative z-10 text-[#5F5358]">
            "I started KuKClean with one simple belief: the plate in front of you can change your whole life — and it doesn't need to be complicated, imported, or expensive to do it. My mission is simple: one million plates, changed for the better by 2030."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 mt-10">
            {saladFormulaBlocks.map((b, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/80 backdrop-blur-md shadow-sm border border-[#E8CDD3] space-y-3 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-9 h-9 rounded-2xl flex items-center justify-center text-white text-[13px] font-bold shrink-0 shadow-sm bg-[#B55E79]">{b.step.charAt(0)}</div>
                  <span className="font-serif font-bold text-lg text-[#B55E79]">{b.step.substring(3)}</span>
                </div>
                <p className="text-sm font-light leading-relaxed text-[#5F5358]">{b.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Operating Principles */}
        <div>
          <div className="reveal text-center mb-10">
            <div 
              className="inline-flex items-center gap-2 border-t-[3px] pt-2 mb-4 border-[#B55E79]"
            >
              <Award className="w-4 h-4 text-[#B55E79]" strokeWidth={1.5} />
              <span className="font-bold text-sm tracking-[0.2em] uppercase text-[#B55E79]">Brand Ethos</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#2E2326]">Core Operating Principles</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map((pr, i) => {
              const Icon = pr.icon;
              return (
                <div 
                  key={i} 
                  className="reveal shimmer-card bg-white/80 border border-[#E8CDD3] p-7 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#F4D9DE] flex items-center justify-center text-[#B55E79] group-hover:bg-[#B55E79] group-hover:text-white transition-colors duration-500 shadow-sm">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#2E2326]">{pr.title}</h4>
                  <p className="text-xs font-light leading-relaxed text-[#5F5358]">{pr.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Services & Community Offerings */}
        <div>
          <div className="reveal text-center mb-10">
            <div 
              className="inline-flex items-center gap-2 border-t-[3px] pt-2 mb-4 border-[#B55E79]"
            >
              <Users className="w-4 h-4 text-[#B55E79]" strokeWidth={1.5} />
              <span className="font-bold text-sm tracking-[0.2em] uppercase text-[#B55E79]">Ecosystem Programs</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#2E2326]">Services &amp; Community Offerings</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div 
                  key={i} 
                  className="reveal shimmer-card bg-white/80 border border-[#E8CDD3] p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-5 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#F4D9DE] flex items-center justify-center text-[#B55E79] group-hover:bg-[#B55E79] group-hover:text-white transition-colors duration-500 shadow-sm">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-serif font-bold text-lg text-[#2E2326]">{s.title}</h4>
                    <ul className="space-y-2.5 pt-2 border-t border-[#E8CDD3]">
                      {s.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs font-light text-[#5F5358]">
                          <span className="text-[#B55E79] font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing Quote */}
        <div 
          className="reveal relative overflow-hidden rounded-3xl p-10 lg:p-14 text-center shadow-2xl"
          style={{ background: "linear-gradient(135deg, #CF99A6 0%, #B55E79 100%)" }}
        >
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/8 rounded-full blur-2xl" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <p className="font-serif text-xl lg:text-2xl italic text-white leading-relaxed">
              "We are building the platform we wished existed when we first needed answers. For every Indian woman who was told to just endure midlife in silence — this space is for you."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-white/40" />
              <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Kirti Yadav, Founder of NotPaused.com</span>
              <div className="w-8 h-px bg-white/40" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}