import { useEffect, useRef } from "react";

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

// Theme colors
const theme = {
  primary: "#b76e4a",      // terracotta
  primaryLight: "#d9b094",
  primarySoft: "#f5ede8",
  dark: "#2d2a24",
  muted: "#4a453e",
  border: "#e8e0d8",
  bg: "#fcf9f6"
};

const pillars = [
  { icon: "🛡️", title: "Safe Community", desc: "Vetted, non-judgmental peer support spaces for 1,100+ women across 7 metro chapters — breaking the silence and shame around midlife transitions." },
  { icon: "🩺", title: "Expert Support", desc: "Access to certified holistic nutritionists, gynaecologists, fitness coaches, and mental health professionals specializing in midlife health." },
  { icon: "📊", title: "Symptom Tracking", desc: "Evidence-based guidance covering 34+ recognized perimenopause symptoms — from sleep disturbances and brain fog to joint pain and mood shifts." },
  { icon: "📚", title: "Trusted Education", desc: "India-specific, culturally rooted health literacy built for Indian bodies, diets, and family dynamics — not adapted from Western templates." },
];

const principles = [
  { icon: "🤝", title: "Open & Inclusive", desc: "No single dietary or medical ideology pushed. All approaches welcomed — treating women as intelligent, empowered decision-makers." },
  { icon: "💬", title: "WhatsApp-Native (85-95% Open)", desc: "Meeting women on the platform they use every single day, driving unprecedented engagement compared to traditional email (22%)." },
  { icon: "✨", title: "Aspirational Midlife", desc: "Reframing midlife as an active, vibrant chapter — solo travel, trekking, career peaks, and personal strength, not decline." },
  { icon: "🇮🇳", title: "India-Specific Frameworks", desc: "Tailored to Indian family dynamics, kitchen ingredients, and cultural realities rather than imported Western guidelines." },
  { icon: "🩺", title: "Holistic Care Arc", desc: "Bridging nutrition, community belonging, and clinical gynaecological access for end-to-end midlife wellness." },
];

const services = [
  {
    icon: "👩",
    title: "5-Month 1:1 Perimenopause Coaching",
    items: ["Personalised midlife nutrition & symptom management", "Strength & mobility routines for bone density", "Sleep, stress & metabolic health optimization", "Vetted 1,100+ member WhatsApp community access"],
  },
  {
    icon: "🏢",
    title: "Corporate Menopause Clinics",
    items: ["Employee education sessions for senior women leaders", "HR team sensitisation & menopause policy building", "Retaining female executive talent during midlife", "Multi-session midlife wellness masterclasses"],
  },
  {
    icon: "🏫",
    title: "Institutional & Community Workshops",
    items: ["Menopause awareness for educators & institutions", "Destigmatizing midlife health in family circles", "Group masterclasses on hormonal nutrition", "City chapter meetups across 7 Indian metros"],
  },
];

const cityChapters = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Pune", "Ahmedabad"];

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
        style={{ backgroundColor: theme.primary }}
      >
        <div className="absolute -top-24 -right-16 w-[450px] h-[450px] bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -left-10 w-80 h-80 bg-white/8 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 max-w-5xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
            NotPaused.com · Founded 2025
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1] mb-6">
            India's Dedicated <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d9b094] to-[#f5ede8] animate-text-gradient">Perimenopause & Midlife Platform</span>
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
          style={{ backgroundColor: theme.primary }}
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
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg timeline-dot flex-shrink-0 text-white"
              style={{ backgroundColor: theme.primary }}
            >
              <span className="text-2xl">💡</span>
            </div>
            <div>
              <span className="block text-[10px] font-bold tracking-[0.3em] uppercase mb-1" style={{ color: theme.primary }}>Chapter 01</span>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: theme.dark }}>The Personal Origin (2025)</h2>
              <p className="text-xs font-medium tracking-widest uppercase mt-1" style={{ color: theme.muted }}>Why a certified nutritionist found herself unprepared — and built the solution</p>
            </div>
          </div>
          <div 
            className="reveal pl-6 border-l-2 rounded-r-xl"
            style={{ borderColor: theme.primary }}
          >
            <p className="text-base font-light leading-relaxed" style={{ color: theme.muted }}>
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
                className="reveal shimmer-card bg-white/80 border p-7 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ 
                  borderColor: `${theme.border}60`,
                  transitionDelay: `${i * 100}ms`
                }}
              >
                <h4 className="font-serif font-bold text-base mb-3" style={{ color: theme.dark }}>{item.h}</h4>
                <p className="text-sm font-light leading-relaxed text-justify" style={{ color: theme.muted }}>{item.b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Pillar Architecture */}
        <div>
          <div className="reveal text-center mb-10">
            <div 
              className="inline-block border-t-[3px] pt-2 mb-4"
              style={{ borderColor: theme.primary }}
            >
              <span className="font-bold text-sm tracking-[0.2em] uppercase" style={{ color: theme.primary }}>Solution Architecture</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: theme.dark }}>The Four Pillars of NotPaused.com</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <div 
                key={i} 
                className="reveal shimmer-card bg-white/80 border p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3"
                style={{ 
                  borderColor: `${theme.border}60`,
                  transitionDelay: `${i * 80}ms`
                }}
              >
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-md text-white"
                  style={{ backgroundColor: theme.primary }}
                >
                  {p.icon}
                </div>
                <h4 className="font-serif font-bold text-sm" style={{ color: theme.dark }}>{p.title}</h4>
                <p className="text-xs font-light leading-relaxed" style={{ color: theme.muted }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services & Coaching */}
        <div>
          <div className="reveal text-center mb-12">
            <div 
              className="inline-block border-t-[3px] pt-2 mb-4"
              style={{ borderColor: theme.primary }}
            >
              <span className="font-bold text-sm tracking-[0.2em] uppercase" style={{ color: theme.primary }}>Services & Corporate Offerings</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: theme.dark }}>How NotPaused.com Serves Women & Employers</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div 
                key={i} 
                className="reveal shimmer-card bg-white/80 border p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-5"
                style={{ 
                  borderColor: `${theme.border}60`,
                  transitionDelay: `${i * 100}ms`
                }}
              >
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-md timeline-dot text-white"
                  style={{ backgroundColor: theme.primary }}
                >
                  {s.icon}
                </div>
                <h4 className="font-serif font-bold text-lg" style={{ color: theme.dark }}>{s.title}</h4>
                <ul className="space-y-2">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm font-light" style={{ color: theme.muted }}>
                      <span className="mt-0.5 flex-shrink-0" style={{ color: theme.primary }}>✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Principles */}
        <div>
          <div className="reveal text-center mb-10">
            <div 
              className="inline-block border-t-[3px] pt-2 mb-4"
              style={{ borderColor: theme.primary }}
            >
              <span className="font-bold text-sm tracking-[0.2em] uppercase" style={{ color: theme.primary }}>Core Philosophy</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: theme.dark }}>What Sets NotPaused.com Apart</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {principles.map((p, i) => (
              <div 
                key={i} 
                className="reveal shimmer-card bg-white/80 border p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3"
                style={{ 
                  borderColor: `${theme.border}60`,
                  transitionDelay: `${i * 80}ms`
                }}
              >
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-md text-white"
                  style={{ backgroundColor: theme.primary }}
                >
                  {p.icon}
                </div>
                <h4 className="font-serif font-bold text-sm" style={{ color: theme.dark }}>{p.title}</h4>
                <p className="text-xs font-light leading-relaxed" style={{ color: theme.muted }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* City Chapters & Community Reach */}
        <div 
          className="reveal bg-white/80 border p-8 rounded-3xl shadow-sm text-center space-y-5"
          style={{ borderColor: `${theme.border}60` }}
        >
          <span className="font-bold text-xs tracking-widest uppercase block" style={{ color: theme.primary }}>1,100+ Member WhatsApp Ecosystem across 7 Metro Chapters</span>
          <p className="text-sm font-light max-w-2xl mx-auto" style={{ color: theme.muted }}>Vetted WhatsApp groups connecting women with local gynaecologists, nutritionists, and peer circles across India's largest metros.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {cityChapters.map((city) => (
              <span 
                key={city} 
                className="text-xs font-semibold px-4 py-2 rounded-full border transition-colors"
                style={{ 
                  backgroundColor: theme.primarySoft,
                  color: theme.dark,
                  borderColor: theme.border
                }}
              >
                📍 {city}
              </span>
            ))}
          </div>
        </div>

        {/* Closing Quote */}
        <div 
          className="reveal relative overflow-hidden rounded-3xl p-10 lg:p-14 text-center shadow-2xl"
          style={{ backgroundColor: theme.primary }}
        >
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/8 rounded-full blur-2xl" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="relative z-10 space-y-5 max-w-4xl mx-auto">
            <span className="bg-white/15 border border-white/20 text-white text-[9px] font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full inline-block">Why It Was Built</span>
            <p className="font-serif text-2xl lg:text-3xl italic text-white leading-relaxed">
              "I built NotPaused.com because I was that woman looking for answers. Now I make sure no Indian woman has to go through perimenopause alone."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-white/40" />
              <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Kirti Yadav, Founder · NotPaused.com</span>
              <div className="w-8 h-px bg-white/40" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}