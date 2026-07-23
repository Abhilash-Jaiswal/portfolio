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

const principles = [
  { icon: "🤝", grad: "from-[#A863AD] to-[#8E4C93]", title: "Open & Inclusive", desc: "No dietary ideology pushed. All approaches welcomed. Women are treated as intelligent, empowered adults capable of making their own decisions." },
  { icon: "💬", grad: "from-[#A863AD] to-[#8E4C93]", title: "WhatsApp-First", desc: "85–95% open rates versus 22% for email. Meeting women where they already are — on the platform they use every day." },
  { icon: "✨", grad: "from-[#A863AD] to-[#8E4C93]", title: "Aspirational Identity", desc: "Visual and verbal identity shows women thriving — travelling solo, trekking, active and vibrant at midlife. Not victims. Champions." },
  { icon: "🇮🇳", grad: "from-[#A863AD] to-[#8E4C93]", title: "India-Specific", desc: "Content, case studies, food references, and expert voices tailored to Indian bodies, diets, and family dynamics. Not adapted from Western frameworks." },
  { icon: "🩺", grad: "from-[#A863AD] to-[#8E4C93]", title: "Knowledge → Community → Doctors", desc: "Build trust through education, deepen through belonging, scale through clinical partnerships. The three-stage model of holistic support." },
];

const services = [
  {
    icon: "👩", grad: "from-[#A863AD] to-[#8E4C93]",
    title: "For Individual Women",
    items: ["Personalised 1-on-1 nutrition & menopause consultations", "Group guidance workshops & masterclasses", "WhatsApp community — warm, non-judgmental, always active", "City chapters across 7 major Indian metros"],
  },
  {
    icon: "🏢", grad: "from-[#A863AD] to-[#8E4C93]",
    title: "For Corporates",
    items: ["Menopause-at-work employee education sessions", "HR team sensitisation & policy consulting", "Multi-session midlife wellness programmes", "Retention-focused support for senior women professionals"],
  },
  {
    icon: "🏫", grad: "from-[#A863AD] to-[#8E4C93]",
    title: "For Educational Institutions",
    items: ["Menopause wellness sessions for teaching staff", "Hormonal health awareness for senior students", "Health-literate institution building", "Reducing stigma from the classroom up"],
  },
];

const cityChapters = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Pune", "Ahmedabad"];

export function NotPausedSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="notpaused" ref={ref} className="bg-[#FAF8FB] border-b border-[#E5DCE8]/60 scroll-mt-20">

      {/* ── HERO BANNER ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#A863AD] via-[#8E4C93] to-[#7F4484] py-28 px-6 md:px-12 lg:px-20">
        <div className="absolute -top-24 -right-16 w-[450px] h-[450px] bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -left-10 w-80 h-80 bg-white/8 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 max-w-5xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
            notpaused.com
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1] mb-6">
            India's First Holistic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-[#E7C9E8] animate-text-gradient">Menopause Platform</span>
          </h1>
          <p className="text-white/75 text-base lg:text-lg font-light leading-relaxed max-w-2xl">
            Menopause is not a pause. It is a comma — a breath before the most powerful chapter of a woman's life. notpaused.com was built to make sure no Indian woman navigates it alone.
          </p>
          <div className="flex flex-wrap gap-8 mt-12">
            {[["65M+", "Women in India"], ["75%", "Without Guidance"], ["7", "City Chapters"], ["WhatsApp", "Native Platform"]].map(([n, l]) => (
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
        <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#A863AD] to-[#8E4C93] p-10 text-white text-center shadow-xl">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="relative z-10 space-y-3 max-w-4xl mx-auto">
            <span className="bg-white/15 border border-white/20 text-white text-[9px] font-bold tracking-widest uppercase px-4 py-2 rounded-full inline-block">The Scale of the Problem</span>
            <p className="font-serif text-xl lg:text-3xl font-bold leading-relaxed">
              65 MILLION Indian women are currently in the perimenopause–menopause window. <br />
              <span className="font-light italic text-xl">75% will never receive proper guidance.</span>
            </p>
            <p className="text-white/80 text-sm font-light">notpaused.com exists for every single one of them.</p>
          </div>
        </div>

        {/* Ch 01 — Personal Origin */}
        <div className="space-y-8">
          <div className="reveal flex flex-col md:flex-row md:items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#A863AD] to-[#8E4C93] flex items-center justify-center shadow-lg timeline-dot flex-shrink-0">
              <span className="text-2xl">💡</span>
            </div>
            <div>
              <span className="block text-[10px] font-bold tracking-[0.3em] uppercase text-[#A863AD] mb-1">Chapter 01</span>
              <h2 className="font-serif text-2xl lg:text-3xl text-[#2E2433] font-bold">The Personal Origin</h2>
              <p className="text-[#6F6476] text-xs font-medium tracking-widest uppercase mt-1">Why a trained nutritionist found herself unprepared — and what she did about it</p>
            </div>
          </div>
          <div className="reveal pl-6 border-l-2 border-[#A863AD] rounded-r-xl">
            <p className="text-[#6F6476] text-base font-light leading-relaxed">
              Kirti Yadav is a certified holistic nutritionist. She has spent years studying how food affects the body, and years more sharing that knowledge with communities across India. Yet when she began her own perimenopause journey, she found herself confronting a startling absence. Even she, with all her training and resources, could not find India-specific, culturally sensitive, practically useful information about what was happening to her body.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { h: "What Women Were Being Told", b: "\"Just eat less and exercise more.\" \"This is normal for your age.\" No guidance. No education. No community. Just a door quietly closed. Superstition, silence, misattributed symptoms, and a pervasive cultural belief that the discomforts of menopause were simply something women were expected to endure in private." },
              { h: "The Refusal to Accept That", b: "notpaused.com was Kirti's refusal to accept that closed door. Built not from theory but from experience — from the visceral understanding of what it means to need something and not be able to find it. The platform she designed was everything she had wished existed: honest, evidence-based, India-specific, non-judgmental, delivered through the channels Indian women actually use." },
            ].map((item, i) => (
              <div key={i} className="reveal shimmer-card bg-white/80 border border-[#E5DCE8]/60 p-7 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#A863AD]/30 transition-all duration-300" style={{ transitionDelay: `${i * 100}ms` }}>
                <h4 className="font-serif font-bold text-[#2E2433] text-base mb-3">{item.h}</h4>
                <p className="text-[#6F6476] text-sm font-light leading-relaxed text-justify">{item.b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ch 02 — Name & Platform */}
        <div className="space-y-8">
          <div className="reveal flex flex-col md:flex-row md:items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#A863AD] to-[#8E4C93] flex items-center justify-center shadow-lg timeline-dot flex-shrink-0">
              <span className="text-2xl">🌸</span>
            </div>
            <div>
              <span className="block text-[10px] font-bold tracking-[0.3em] uppercase text-[#A863AD] mb-1">Chapter 02</span>
              <h2 className="font-serif text-2xl lg:text-3xl text-[#2E2433] font-bold">A Declaration, Not Just a Platform</h2>
              <p className="text-[#6F6476] text-xs font-medium tracking-widest uppercase mt-1">Why the name itself is a mission statement</p>
            </div>
          </div>
          <div className="reveal pl-6 border-l-2 border-[#A863AD] rounded-r-xl">
            <p className="text-[#6F6476] text-base font-light leading-relaxed">
              The name notpaused.com is not a brand exercise. It is a statement of belief. Menopause is not a pause — not a withdrawal from life, not a diminishment of capability, not a retreat from relevance. It is a transition. Demanding, often disorienting, and frequently misunderstood — but also the gateway to the most liberated chapter of a woman's life. The name says, with complete intentionality: this is not the end of your story. This is a comma, not a full stop.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { h: "Genuinely Inclusive", b: "Unlike other women's health platforms, notpaused.com does not push hormone replacement therapy as the default solution. It does not lead with supplement sales. It does not reduce the complexity of menopause to a diet plan. It treats women as the intelligent, multidimensional adults they are — capable of processing nuanced, evidence-based information and making their own informed choices about their health." },
              { h: "India-Specific by Design", b: "The content is built specifically for Indian women. It references Indian foods, Indian cooking methods, and the Indian cultural contexts that shape how women experience their bodies, their families, and their sense of self. This specificity is not a limitation. It is the platform's greatest asset — and the gap that no Western-adapted platform has ever been able to fill." },
            ].map((item, i) => (
              <div key={i} className="reveal shimmer-card bg-white/80 border border-[#E5DCE8]/60 p-7 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#A863AD]/30 transition-all duration-300" style={{ transitionDelay: `${i * 100}ms` }}>
                <h4 className="font-serif font-bold text-[#2E2433] text-base mb-3">{item.h}</h4>
                <p className="text-[#6F6476] text-sm font-light leading-relaxed text-justify">{item.b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <div className="reveal text-center mb-12">
            <div className="inline-block border-t-[3px] border-[#A863AD] pt-2 mb-4">
              <span className="text-[#A863AD] font-bold text-sm tracking-[0.2em] uppercase">Three Verticals, One Mission</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl text-[#2E2433] font-bold">Who notpaused.com Serves</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="reveal shimmer-card bg-white/80 border border-[#E5DCE8]/60 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-5" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.grad} flex items-center justify-center text-2xl shadow-md timeline-dot text-white`}>{s.icon}</div>
                <h4 className="font-serif font-bold text-[#2E2433] text-lg">{s.title}</h4>
                <ul className="space-y-2">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-[#6F6476] text-sm font-light">
                      <span className="text-[#A863AD] mt-0.5 flex-shrink-0">✦</span>
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
            <div className="inline-block border-t-[3px] border-[#A863AD] pt-2 mb-4">
              <span className="text-[#A863AD] font-bold text-sm tracking-[0.2em] uppercase">Platform Principles</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl text-[#2E2433] font-bold">What Makes notpaused.com Different</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {principles.map((p, i) => (
              <div key={i} className="reveal shimmer-card bg-white/80 border border-[#E5DCE8]/60 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#A863AD]/30 transition-all duration-300 space-y-3" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.grad} flex items-center justify-center text-xl shadow-md text-white`}>{p.icon}</div>
                <h4 className="font-serif font-bold text-[#2E2433] text-sm">{p.title}</h4>
                <p className="text-[#6F6476] text-xs font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* City Chapters */}
        <div className="reveal bg-white/80 border border-[#E5DCE8]/60 p-8 rounded-3xl shadow-sm text-center space-y-5">
          <span className="text-[#A863AD] font-bold text-xs tracking-widest uppercase block">WhatsApp-Native Community Chapters</span>
          <p className="text-[#6F6476] text-sm font-light max-w-2xl mx-auto">City chapters ensure local relevance — local doctors, local foods, local conversations — combined with the scale and warmth of a national community.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {cityChapters.map((city) => (
              <span key={city} className="bg-[#F4EFF6] text-[#2E2433] text-xs font-semibold px-4 py-2 rounded-full border border-[#E5DCE8] hover:bg-[#E7C9E8]/30 transition-colors">
                📍 {city}
              </span>
            ))}
          </div>
        </div>

        {/* Closing Quote */}
        <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#A863AD] via-[#8E4C93] to-[#7F4484] p-10 lg:p-14 text-center shadow-2xl">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/8 rounded-full blur-2xl" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="relative z-10 space-y-5 max-w-4xl mx-auto">
            <span className="bg-white/15 border border-white/20 text-white text-[9px] font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full inline-block">Why It Was Built</span>
            <p className="font-serif text-2xl lg:text-3xl italic text-white leading-relaxed">
              "I built this because I was that woman at 3am with no answers. Now I make sure no Indian woman has to be."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-white/40" />
              <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Kirti Yadav, Founder · notpaused.com</span>
              <div className="w-8 h-px bg-white/40" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
