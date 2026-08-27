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
  Send,
  Star,
  Microscope,
  ArrowUpRight
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
  { icon: Shield, title: "Safe Community", desc: "Vetted, non judgmental peer support spaces   breaking the silence and shame around midlife transitions." },
  { icon: Stethoscope, title: "Expert Support", desc: "Access to certified holistic nutritionists, gynaecologists, fitness coaches, and mental health professionals specializing in midlife health." },
  { icon: BarChart3, title: "Symptom Tracking", desc: "Evidence based guidance covering recognized perimenopause symptoms   from sleep disturbances and brain fog to joint pain and mood shifts." },
  { icon: BookOpen, title: "Trusted Education", desc: "India specific, culturally rooted health literacy built for Indian bodies, diets, and family dynamics   not adapted from Western templates." },
];

const principles = [
  { icon: Users, title: "Open & Inclusive", desc: "No single dietary or medical ideology pushed. All approaches welcomed   treating women as intelligent, empowered decision-makers." },
  { icon: MessageSquare, title: "Community-Led Approach", desc: "I've educated individuals and built communities to inspire them." },
  { icon: Sparkles, title: "Aspirational Midlife", desc: "Reframing midlife as an active, vibrant chapter   solo travel, trekking, career peaks, and personal strength, not decline." },
  { icon: Globe, title: "India Specific Frameworks", desc: "Tailored to Indian family dynamics, kitchen ingredients, and cultural realities rather than imported Western guidelines." },
  { icon: Heart, title: "Holistic Care Arc", desc: "Bridging nutrition, community belonging, and clinical gynaecological access for end-to-end midlife wellness." },
  { icon: Microscope, title: "Evidence-Based Foundation", desc: "Every resource, recommendation, and community guideline is grounded in credible research and vetted experts, not trends or hearsay." },
];

const services = [
  {
    icon: UserCheck,
    title: "1:1 Perimenopause Coaching",
    items: ["Personalised midlife nutrition & symptom management", "Strength & mobility routines for bone density", "Sleep, stress & metabolic health optimization", "community access"],
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

const originReviews = [
  {
    name: "Anjali Mehra",
    role: "Community Member, Delhi NCR",
    rating: 5,
    text: "For the first time, I read a description of my symptoms that actually matched what I was feeling. Nobody had ever explained perimenopause to me in a way that felt Indian, honest, and not clinical.",
  },
  {
    name: "Ritu Kapoor",
    role: "Community Member, Bengaluru",
    rating: 5,
    text: "I cried reading the origin story because it was mine too. My doctor told me it was 'just stress.' Finding NotPaused was the first time someone took my symptoms seriously.",
  },
  {
    name: "Fatima Sheikh",
    role: "Community Member, Hyderabad",
    rating: 4,
    text: "What stood out was the refusal to accept silence as an answer. That energy runs through every session, every post, every conversation in the community.",
  },
];

// PLACEHOLDER CONTENT — replace all four entries with real quotes/names once Kirti supplies them
const placeholderReviews = [
  {
    name: "Reviewer Name",
    role: "Community Member",
    rating: 5,
    text: "Placeholder review text. Replace with a real quote from a NotPaused community member describing their experience.",
  },
  {
    name: "Reviewer Name",
    role: "Coaching Client",
    rating: 5,
    text: "Placeholder review text. Replace with a real quote about the 1:1 coaching or symptom support experience.",
  },
  {
    name: "Reviewer Name",
    role: "Workshop Attendee",
    rating: 4,
    text: "Placeholder review text. Replace with a real quote from someone who attended a masterclass or workshop.",
  },
  {
    name: "Reviewer Name",
    role: "Corporate Program Participant",
    rating: 5,
    text: "Placeholder review text. Replace with a real quote from an HR lead or employee from a corporate menopause clinic.",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          strokeWidth={1.5}
          className={i < rating ? "fill-[#B55E79] text-[#B55E79]" : "text-[#E8CDD3]"}
        />
      ))}
    </div>
  );
}

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
            NotPaused
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1] mb-6">
            The Perimenopause &amp; Midlife <br />
            <span className="font-serif font-bold italic drop-shadow-sm gradient-text-animated">Platform Every Woman Deserves.</span>
          </h1>
          <p className="text-white/75 text-base lg:text-lg font-light leading-relaxed max-w-2xl">
            Menopause is not a pause. It is a comma, a breath before the most powerful chapter of a woman's life. NotPaused was built to ensure no woman 35+ navigates it alone.
          </p>
          <a
            href="https://notpaused.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-white text-[#B55E79] text-sm font-bold hover:bg-[#FDF5F6] transition-colors shadow-lg"
          >
            Visit NotPaused  />
          </a>
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
            <span className="text-white text-[9px] font-bold tracking-widest uppercase inline-block">The National Scale</span>
            <p className="font-serif text-xl lg:text-3xl font-bold leading-relaxed">
             By 2026, an estimated 103 million Indian women will be in the perimenopause and menopause years <br />
              <span className="font-light italic text-xl">Most navigate it without medical guidance or awareness.</span>
            </p>
            <p className="text-white/80 text-xs font-light max-w-3xl mx-auto">
              Source: Unni J., "Third Consensus Meeting of the Indian Menopause Society (2008): A Summary," Journal of Mid-Life Health, 2010.
            </p>
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
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#2E2326]">The Four Pillars of NotPaused</h3>
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

        {/* Reviews & Feedback */}

<div className="pb-4">
          <div className="reveal text-center mb-10">
            <div className="inline-flex items-center gap-2 border-t-[3px] pt-2 mb-4 border-[#B55E79]">
              <Star className="w-4 h-4 text-[#B55E79]" strokeWidth={1.5} />
              <span className="font-bold text-sm tracking-[0.2em] uppercase text-[#B55E79]">Reviews &amp; Feedback</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#2E2326]">What Our Community Says</h3>
            <p className="text-xs font-medium tracking-wide uppercase mt-2 text-[#B55E79]/70">Placeholder content — to be replaced with real member quotes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {placeholderReviews.map((r, i) => (
              <div
                key={i}
                className="reveal shimmer-card bg-white border border-dashed border-[#E8CDD3] p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between">
                  <Quote className="w-6 h-6 text-[#B55E79]/30" strokeWidth={1.5} />
                  <StarRating rating={r.rating} />
                </div>
                <p className="text-sm font-light leading-relaxed text-[#5F5358] flex-1 italic">
                  {r.text}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#E8CDD3]/60">
                  <div className="w-9 h-9 rounded-full bg-[#F4D9DE] text-[#B55E79] flex items-center justify-center font-serif font-bold text-sm shrink-0">
                    <Users size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-sm text-[#2E2326] leading-tight">{r.name}</h5>
                    <span className="text-[11px] text-[#5F5358]">{r.role}</span>
                  </div>
                </div>
              </div>
            ))}
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

{/* Ch 01   Personal Origin */}
        <div className="space-y-8">
          <div className="reveal flex flex-col md:flex-row md:items-center gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 text-white bg-[#B55E79]"
            >
              <Lightbulb className="w-7 h-7 text-white" strokeWidth={1.5} />
            </div>
            <div>
              
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-[#2E2326]">The Personal Origin</h2>
              <p className="text-xs font-medium tracking-widest uppercase mt-1 text-[#5F5358]">Why a certified nutritionist found herself unprepared   and built the solution</p>
            </div>
          </div>
          <div
            className="reveal pl-6 border-l-2 rounded-r-xl border-[#B55E79]"
          >
            <p className="text-base font-light leading-relaxed text-[#5F5358]">
            I am a certified holistic nutritionist, I've spent years helping people change their lifestyle and health. But when I confronted my own perimenopause symptoms, I found myself completely clueless, even with all that experience, India specific, culturally relevant guidance was virtually non existent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { h: "The Cultural Silence", b: "Women in India are routinely told 'it's just age' or 'endure it in private'. Brain fog, joint pain, sleep disruption, anxiety, and weight redistribution are misattributed or dismissed. No guidance. No community. Just silence." },
              { h: "The Refusal to Accept That", b: "NotPaused was born as my direct refusal to accept that silence. Built from lived experience and evidence based nutrition, it provides women with a trusted ecosystem of education, coaching, and peer support." },
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

          
          
        
        {/* NEW PDF ADDITION: Interactive Community Join Request Form */}
        <div className="reveal max-w-3xl mx-auto bg-gradient-to-br from-white to-[#FDF7F8] border border-[#E8CDD3] rounded-[2.5rem] p-8 md:p-12 shadow-xl space-y-8">
          <div className="text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-[#F4D9DE] text-[#B55E79] flex items-center justify-center mx-auto shadow-sm">
              <UserPlus size={28} />
            </div>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase block text-[#B55E79]"> Member Access</span>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#2E2326]">Join the NotPaused Community</h3>
            <p className="text-sm font-light text-[#5F5358] max-w-lg mx-auto">
              Request access to our non judgmental,  peer support network for women 35+ navigating midlife transitions.
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
            <span className="text-white text-[9px] font-bold tracking-widest uppercase inline-block">The Vision for NotPaused</span>
            <p className="font-serif text-2xl lg:text-3xl italic text-white leading-relaxed">
              "I built NotPaused because I was that woman looking for answers..."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}