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
  Award,
  UserPlus,
  Quote,
  HeartHandshake,
  Mail,
  Phone,
  Send
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
  primary: "#B55E79",   // rose-mauve
  primaryLight: "#E6BEC6",
  primarySoft: "#F4D9DE",
  dark: "#2E2326",
  muted: "#5F5358",
  border: "#E8CDD3",
  bg: "#FCF8F7"
};

const pillars = [
  { icon: Shield, title: "Safe Community", desc: "Vetted, non-judgmental peer support spaces — breaking the silence and shame around midlife transitions." },
  { icon: Stethoscope, title: "Expert Support", desc: "Access to certified holistic nutritionists, gynaecologists, fitness coaches, and mental health professionals specializing in midlife health." },
  { icon: BarChart3, title: "Symptom Tracking", desc: "Evidence-based guidance covering recognized perimenopause symptoms — from sleep disturbances and brain fog to joint pain and mood shifts." },
  { icon: BookOpen, title: "Trusted Education", desc: "India-specific, culturally rooted health literacy built for Indian bodies, diets, and family dynamics — not adapted from Western templates." },
];

const principles = [
  { icon: Users, title: "Open & Inclusive", desc: "No single dietary or medical ideology pushed. All approaches welcomed — treating women as intelligent, empowered decision-makers." },
  { icon: MessageSquare, title: "Community-Led Approach", desc: "I've educated individuals and built communities to inspire them." },
  { icon: Sparkles, title: "Aspirational Midlife", desc: "Reframing midlife as an active, vibrant chapter — solo travel, trekking, career peaks, and personal strength, not decline." },
  { icon: Globe, title: "India-Specific Frameworks", desc: "Tailored to Indian family dynamics, kitchen ingredients, and cultural realities rather than imported Western guidelines." },
  { icon: Heart, title: "Holistic Care Arc", desc: "Bridging nutrition, community belonging, and clinical gynaecological access for end-to-end midlife wellness." },
];

const services = [
  {
    icon: UserCheck,
    title: "1:1 Perimenopause Coaching",
    items: ["Personalised midlife nutrition & symptom management", "Strength & mobility routines for bone density", "Sleep, stress & metabolic health optimization", "Vetted community access"],
  },
  {
    icon: Building2,
    title: "Corporate Menopause Clinics",
    items: ["Employee education sessions for senior women leaders", "HR team sensitisation & menopause policy building", "Retaining female executive talent during midlife", "Multi-session midlife wellness masterclasses"],
  },
  {
    icon: Building,
    title: "Institutional & Community Workshops",
    items: ["Menopause awareness for educators & institutions", "Destigmatizing midlife health in family circles", "Group masterclasses on hormonal nutrition", "City chapter meetups across Indian metros"],
  },
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
            NotPaused
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1] mb-6">
            India's Dedicated <br />
            <span className="font-serif font-bold italic drop-shadow-sm gradient-text-animated">Perimenopause &amp; Midlife Platform</span>
          </h1>
          <p className="text-white/75 text-base lg:text-lg font-light leading-relaxed max-w-2xl">
            Menopause is not a pause. It is a comma — a breath before the most powerful chapter of a woman's life. NotPaused.com was built to ensure no Indian woman navigates it alone.
          </p>
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
              Millions of Indian women are currently in the perimenopause–menopause window. <br />
              <span className="font-light italic text-xl">Most navigate it without medical guidance or awareness.</span>
            </p>
            <p className="text-white/80 text-sm font-light">NotPaused.com was founded by Kirti Yadav to bridge this precise gap.</p>
          </div>
        </div>

        {/* NEW PDF ADDITION: First-Person Founder Credibility Card */}
        <div className="reveal relative max-w-5xl mx-auto bg-gradient-to-br from-white to-[#FDF4F6] rounded-[2.5rem] p-8 md:p-12 shadow-md border border-[#E8CDD3]">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg bg-[#B55E79]">
              <Sparkles size={28} />
            </div>
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase block text-[#B55E79]">Corporate Credibility & Institutional Backing</span>
              <p className="font-serif text-lg md:text-xl italic leading-relaxed text-[#2E2326]">
                "I've built this the same way I built my corporate career and my company — carefully, with real institutions backing the work, not just good intentions."
              </p>
              <span className="text-xs font-bold uppercase tracking-widest block pt-2 text-[#5F5358]">— Kirti Yadav, Founder · NotPaused.com</span>
            </div>
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
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-[#2E2326]">The Personal Origin</h2>
              <p className="text-xs font-medium tracking-widest uppercase mt-1 text-[#5F5358]">Why a certified nutritionist found herself unprepared — and built the solution</p>
            </div>
          </div>
          <div
            className="reveal pl-6 border-l-2 rounded-r-xl border-[#B55E79]"
          >
            <p className="text-base font-light leading-relaxed text-[#5F5358]">
              I am a certified holistic nutritionist specializing in herbal and natural strategies for menopause. Yet when I confronted my own perimenopause symptoms, I found myself facing a stark reality: even with professional training, India-specific, culturally relevant guidance was virtually non-existent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { h: "The Cultural Silence", b: "Women in India are routinely told 'it's just age' or 'endure it in private'. Brain fog, joint pain, sleep disruption, anxiety, and weight redistribution are misattributed or dismissed. No guidance. No community. Just silence." },
              { h: "The Refusal to Accept That", b: "NotPaused.com was born as my direct refusal to accept that silence. Built from lived experience and evidence-based nutrition, it provides women with a trusted ecosystem of education, coaching, and peer support." },
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

        {/* NEW PDF ADDITION: Supreetha Bhat Testimonial Card */}
        <div className="reveal max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-[#E8CDD3] relative overflow-hidden">
          <Quote className="absolute top-6 left-6 w-16 h-16 opacity-5 text-[#B55E79]" />
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#F4D9DE] text-[#B55E79] text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
              <span>Community Story</span>
            </div>
            <p className="font-serif text-lg md:text-xl italic leading-relaxed text-[#2E2326]">
              "I'd been dealing with chronic inflammation, low weight, and was anaemic and borderline diabetic — and honestly, an irritable, stressed version of myself. I was a 'no salads' person until Kirti got strict with my diet, and I was sceptical it would work for me. Within two months: no more inflammation, my symptoms under control, my blood counts improving, and I'm handling stress so much better emotionally. All I did was follow her instructions. This is for Kirti, for the change she brought to my plate — and to me — that I hadn't expected at all."
            </p>
            <div className="pt-2 flex items-center justify-between border-t border-[#E8CDD3]/50">
              <div>
                <h5 className="font-serif font-bold text-base text-[#2E2326]">Supreetha Bhat</h5>
                <span className="text-xs text-[#5F5358] uppercase tracking-wider">NotPaused Community Member</span>
              </div>
              <HeartHandshake className="w-6 h-6 text-[#B55E79]" />
            </div>
          </div>
        </div>

        {/* Services & Community Offerings */}
        <div className="pb-10">
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
                  className="reveal bg-white border border-[#E8CDD3] p-8 rounded-3xl shadow-sm group hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="flex items-center gap-4 border-b border-[#E8CDD3] pb-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FDF5F6] flex items-center justify-center text-[#B55E79] shrink-0">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <h4 className="font-serif font-bold text-lg text-[#2E2326] leading-snug">{s.title}</h4>
                  </div>
                  <ul className="space-y-3">
                    {s.items.map((item, idx) => (
                      <li key={idx} className="text-sm font-light text-[#5F5358] flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B55E79]/50 shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* NEW PDF ADDITION: Interactive Community Join Request Form */}
        <div className="reveal max-w-3xl mx-auto bg-gradient-to-br from-white to-[#FDF7F8] border border-[#E8CDD3] rounded-[2.5rem] p-8 md:p-12 shadow-xl space-y-8">
          <div className="text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-[#F4D9DE] text-[#B55E79] flex items-center justify-center mx-auto shadow-sm">
              <UserPlus size={28} />
            </div>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase block text-[#B55E79]">Vetted Member Access</span>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#2E2326]">Join the NotPaused Community</h3>
            <p className="text-sm font-light text-[#5F5358] max-w-lg mx-auto">
              Request access to our non-judgmental, vetted peer support network for women 35+ navigating midlife transitions.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2E2326] mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-2xl border border-[#E8CDD3] bg-white text-sm focus:outline-none focus:border-[#B55E79] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2E2326] mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-2xl border border-[#E8CDD3] bg-white text-sm focus:outline-none focus:border-[#B55E79] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2E2326] mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 Mobile number"
                  className="w-full px-4 py-3 rounded-2xl border border-[#E8CDD3] bg-white text-sm focus:outline-none focus:border-[#B55E79] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2E2326] mb-2">Instagram ID (Optional)</label>
                <input
                  type="text"
                  placeholder="@yourhandle"
                  className="w-full px-4 py-3 rounded-2xl border border-[#E8CDD3] bg-white text-sm focus:outline-none focus:border-[#B55E79] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2E2326] mb-2">LinkedIn ID (Optional)</label>
                <input
                  type="text"
                  placeholder="in/profile"
                  className="w-full px-4 py-3 rounded-2xl border border-[#E8CDD3] bg-white text-sm focus:outline-none focus:border-[#B55E79] transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#B55E79] text-white text-sm font-bold uppercase tracking-widest hover:opacity-95 transition-opacity shadow-lg flex items-center justify-center gap-2 mt-4"
            >
              <Send size={16} />
              <span>Submit Join Request</span>
            </button>
          </form>
        </div>

        {/* NEW PDF ADDITION: Closing Quote Banner */}
        <div
          className="reveal relative overflow-hidden rounded-3xl p-10 lg:p-14 text-center shadow-2xl"
          style={{ background: "linear-gradient(135deg, #CF99A6 0%, #B55E79 100%)" }}
        >
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/8 rounded-full blur-2xl" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="relative z-10 space-y-5 max-w-4xl mx-auto">
            <span className="bg-white/15 border border-white/20 text-white text-[9px] font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full inline-block">The Vision for NotPaused</span>
            <p className="font-serif text-2xl lg:text-3xl italic text-white leading-relaxed">
              "I built NotPaused.com because I was that woman looking for answers..."
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