import { useEffect, useRef } from "react";
import {
  Award,
  Users,
  Star,
  Mic,
  MapPin,
  Rocket,
  Scale,
  Sprout,
  GraduationCap,
  Utensils,
  Building2,
  Newspaper,
  Radio,
  Laptop,
  FileText,
  Quote,
  Building
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
  primary:      "#B85470",   // rose-mauve
  primaryLight: "#D4889C",
  primarySoft:  "#FAF0F2",
  dark:         "#2D121A",
  muted:        "#7A5A62",
  border:       "#EACFD3",
  bg:           "#FDF8F8"
};

const milestones = [
  { year: "2024", category: "Award", icon: Award, title: "Womenpreneur Achievers Award 2024", short: "Honoured alongside Karnataka's most distinguished women leaders in entrepreneurship." },
  { year: "2024", category: "Speaking", icon: Mic, title: "ASSOCHAM Rajasthan Startup Summit", short: "Keynote speaker on 'Women Leading the Race' at RIC, Jaipur." },
  { year: "2024", category: "Pitching", icon: Rocket, title: "Women Leadership Conclave — Pitcher", short: "Selected nationally — pitched before IIT Guwahati & Embassy of Israel." },
  { year: "2024", category: "Jury", icon: Scale, title: "CAIAS Startup Summit — Jury Member", short: "Invited as Judge after KuKClean won Best Women-Led Startup." },
  { year: "2023", category: "Govt Grant", icon: Sprout, title: "Grant-in-Aid — RKVY-RAFTAAR", short: "Recognised at International Nutri Cereal Convention 5.0 by ICAR-IIMR, Ministry of Agriculture." },
  { year: "2023", category: "Incubation", icon: GraduationCap, title: "Goldman Sachs GS10K — IIM Bangalore", short: "Graduate of the GS 10,000 Women Entrepreneur Program at NSRCEL, IIMB." },
  { year: "2022", category: "Mentorship", icon: Users, title: "Walmart Vriddhi Mentoring Program", short: "Active mentor empowering early-stage women entrepreneurs across India." },
  { year: "2022", category: "Corporate B2B", icon: Utensils, title: "Applied Materials India Wellness Session", short: "Led 2-hour plant-based nutrition masterclass for 180 employees." },
  { year: "2021", category: "Incubation", icon: Building2, title: "IIM Bangalore WSP3 — Top 50 Ventures", short: "Incubated at IIMB Women Startup Programme (Cohort 3) for 1.5 years." },
  { year: "2020", category: "Media", icon: Newspaper, title: "India Today & YourStory Features", short: "#EatLikeKirti 21-day initiative covered by India Today; interviewed by Shradha Sharma." },
  { year: "2020", category: "Podcast", icon: Radio, title: "International Podcast Feature", short: "Featured speaker on Gigi Carter's global health podcast (mytrueself.com)." },
  { year: "2005", category: "Tech Degree", icon: Laptop, title: "BTech Computer Science — HBTI Kanpur", short: "Graduated with CS engineering degree before entering 9-year corporate career." },
];

const credentials = [
  { title: "Certified Holistic Nutritionist", org: "AFPA, USA", detail: "Specialized in whole-food plant-based nutrition and lifestyle medicine." },
  { title: "Plant-Based Athlete Coach", org: "AFPA, USA", detail: "Expertise in endurance fuel and high-performance plant nutrition." },
  { title: "Herbal & Natural Strategies for Menopause", org: "AFPA, USA", detail: "Clinical knowledge in natural hormone management & midlife wellness." },
  { title: "Goldman Sachs 10,000 Women Graduate", org: "NSRCEL, IIM Bangalore", detail: "Rigorous business strategy & growth framework for women entrepreneurs." },
  { title: "BTech Computer Science", org: "HBTI Kanpur (2001–2005)", detail: "Engineering foundation in algorithms and software systems." },
  { title: "C-PGDBA (IT)", org: "Symbiosis Centre (2007–2009)", detail: "Postgraduate diploma in Information Technology Management." },
];

const corporateFlagship = ["JP Morgan", "Goldman Sachs", "Microsoft", "IBM", "ISRO", "Siemens"];
const corporateRoster = [
  "Applied Materials", "LAM Research", "Reliance Ajio", "HDFC", "WeWork", "PhonePe", 
  "Infoservices", "Dixcy", "The Design Cafe", "BigBasket", "Clear Route", "Ecopeak Solutions", "[24/7].ai"
];

const b2bClients = ["Cisco", "Biocon", "Loyalytics.ai"];

const pressCoverage = [
  { source: "YourStory", title: "Video Interview with Founder Shradha Sharma", desc: "Invited to share KuKClean's origin, plant-based philosophy, and breaking industry stereotypes." },
  { source: "India Today", title: "'Cooking in a Crisis' Feature", desc: "National coverage of the #EatLikeKirti 21-day live lockdown nutrition initiative." },
  { source: "Deccan Herald", title: "'Some Women Doing Wow Things' & Community Dining", desc: "Profiled for leading plant-based food innovation and community wellness." },
  { source: "The Better India", title: "Plant-Based Vegan Sugar-Free Delights", desc: "Featured for creating clean-label Indian sweets suitable for health-conscious families & diabetes management." },
  { source: "HR Association of India", title: "Corporate Wellness Keynote", desc: "Keynote presentation to HR leaders on why corporates must prioritize employee nutrition." },
  { source: "iStart Rajasthan", title: "Women Entrepreneurship Spotlight", desc: "Invited by Rajasthan State Government to inspire young women founders." },
];

const speakingEngagements = [
  {
    event: "ASSOCHAM Rajasthan Startup Summit",
    icon: Award,
    role: "Keynote Speaker",
    location: "RIC, Jaipur",
    detail: "Spoke before national policymakers on 'Women Leading the Race'."
  },
  {
    event: "Women Leadership Conclave",
    icon: Users,
    role: "National Pitcher",
    location: "IIT Guwahati & Embassy of Israel",
    detail: "Selected as one of India's promising women founders to pitch."
  },
  {
    event: "CAIAS Startup Summit",
    icon: Star,
    role: "Jury Member & Judge",
    location: "CAIAS Bangalore",
    detail: "Evaluated early-stage startups following KuKClean's Best Startup Award."
  },
  {
    event: "HR Association of India",
    icon: Mic,
    role: "Corporate Wellness Panellist",
    location: "Virtual National Summit",
    detail: "Addressed 500+ CHROs and HR leaders on preventive nutrition."
  }
];

const linkedinRecs = [
  {
    name: "Shyam Sekhar",
    role: "Chief Analyst & Founder, iThought",
    quote: "Very impressed by Kirti's commitment to clean eating. Her knowledge and conviction shine through. Her work with KuKClean is both timely and transformative."
  },
  {
    name: "Shruti Sharma",
    role: "Program Manager, NSRCEL, IIM Bangalore",
    quote: "Kirti was an outstanding participant in the Goldman Sachs 10k Women program. Her clarity on building a scalable, purpose-driven brand was evident from day one."
  },
  {
    name: "Dr. Dayakar Rao",
    role: "CEO, Nutrihub ICAR-IIMR",
    quote: "KuKClean's work in millet innovation and clean-label food products represents exactly the kind of agritech entrepreneurship India needs right now."
  }
];

const clientQuotes = [
  {
    name: "Anand Raj",
    role: "VP of Engineering",
    rel: "1:1 Executive Nutrition Coaching",
    quote: "Kirti's guidance transformed my energy levels completely. No crazy diets—just real, actionable changes rooted in science. Down 12 kg and feeling sharper than ever.",
  },
  {
    name: "Priya Nair",
    role: "Senior HR Director",
    rel: "Corporate Wellness Client",
    quote: "We brought Kirti in for a company-wide wellness masterclass. The feedback was unanimous—the most engaging, practical, and non-preachy health session our team has ever had.",
  },
  {
    name: "Ritu Vardhan",
    role: "Entrepreneur & Mother",
    rel: "KuKClean Customer & Coaching Client",
    quote: "As a mother, finding food products I can trust blindly is rare. KuKClean is a staple in our home, and Kirti's personal guidance for my family's nutrition has been priceless.",
  },
  {
    name: "Vikram Sethi",
    role: "Corporate Director",
    rel: "Corporate & Individual Client",
    quote: "Kirti is a passionate and enthusiastic woman who has tremendous knowledge of nutrition and healthy eating. She is an engaging trainer and selfless consultant. She herself stands as a testament to good eating and a healthy lifestyle.",
  },
  {
    name: "Manish Kumar",
    role: "Data & AI Executive Talent Leader",
    rel: "1:1 Coaching Client",
    quote: "Kirti Yadav has helped keep better track of my food intake and my fitness goals. I have really come a long way in achieving what I wanted. Thanks to Kirti for making me a healthier person.",
  },
];

export function AchievementsSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section 
      id="achievements" 
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
        style={{ background: `linear-gradient(135deg, #B85470 0%, #8C405A 100%)` }}
      >
        <div className="absolute -top-24 -left-16 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-white/8 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        
        <div className="relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-8">
            <Award className="w-3.5 h-3.5 text-[#E4BCC2]" strokeWidth={1.5} />
            Awards, Credentials &amp; Media
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1] mb-6">
            Institutional Credibility &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E4BCC2] to-[#F3E0E3] animate-text-gradient">Real-World Impact</span>
          </h1>
          <p className="text-white/75 text-base lg:text-lg font-light leading-relaxed max-w-2xl">
            From IIM Bangalore incubation and Government of India grants to 100+ corporate sessions and national media features — a record built strictly on conviction.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/15 mt-12">
            {[
              ["12+", "Key Milestones"],
              ["100+", "Corporate Sessions"],
              ["2", "Government Incubations"],
              ["6+", "National Media Features"]
            ].map(([n, l], i) => (
              <div key={i}>
                <span className="font-serif text-3xl font-bold text-white block">{n}</span>
                <span className="text-white/60 text-xs uppercase tracking-widest">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 space-y-20">

        {/* Opening Quote */}
        <div 
          className="reveal max-w-4xl mx-auto bg-white/80 border-l-4 rounded-r-3xl px-8 py-6 shadow-sm border border-[#EACFD3]"
          style={{ borderLeftColor: theme.primary }}
        >
          <p className="font-serif text-lg italic leading-relaxed" style={{ color: theme.dark }}>
            "Recognition, when it is earned rather than sought, carries a different weight. Every milestone connects to the same mission — not a list of accomplishments, but a narrative of systemic credibility."
          </p>
        </div>

        {/* Credentials & Certifications */}
        <div>
          <div className="reveal text-center mb-10">
            <div 
              className="inline-flex items-center gap-2 border-t-[3px] pt-2 mb-4"
              style={{ borderColor: theme.primary }}
            >
              <FileText className="w-4 h-4 text-[#B85470]" strokeWidth={1.5} />
              <span className="font-bold text-sm tracking-[0.2em] uppercase" style={{ color: theme.primary }}>Formal Qualifications</span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold" style={{ color: theme.dark }}>Credentials &amp; Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((c, i) => (
              <div 
                key={i} 
                className="reveal shimmer-card bg-white/80 border border-[#EACFD3] p-7 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 group"
              >
                <div 
                  className="w-12 h-12 rounded-2xl bg-[#F3E0E3] flex items-center justify-center text-[#B85470] group-hover:bg-[#B85470] group-hover:text-white transition-colors duration-500 shadow-sm"
                >
                  <Award className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider block text-[#B85470]">{c.org}</span>
                <h3 className="font-serif font-bold text-base text-[#0F0A0B]">{c.title}</h3>
                <p className="text-xs font-light leading-relaxed text-[#7A5A60]">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Client Roster */}
        <div 
          className="reveal bg-white/80 border border-[#EACFD3] p-10 rounded-3xl shadow-sm space-y-8"
        >
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="font-bold text-xs tracking-widest uppercase block text-[#B85470]">Corporate Track Record</span>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#0F0A0B]">Delivered 100+ Corporate Wellness Sessions</h3>
            <p className="text-sm font-light text-[#7A5A60]">Trusted by global Fortune 500 firms, Indian conglomerates, and government institutions across India.</p>
          </div>

          {/* Flagship shortlist */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest block text-center text-[#7A5A60]">Flagship Organizations Delivered At:</span>
            <div className="flex flex-wrap justify-center gap-3">
              {corporateFlagship.map((name) => (
                <span 
                  key={name} 
                  className="text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-sm flex items-center gap-2 bg-[#B85470]"
                >
                  <Building className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Extended Roster */}
          <div className="space-y-3 pt-4 border-t border-[#EACFD3]">
            <span className="text-xs font-bold uppercase tracking-widest block text-center text-[#7A5A60]">Additional Corporate &amp; B2B Client Organizations:</span>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {corporateRoster.concat(b2bClients).map((name) => (
                <span 
                  key={name} 
                  className="text-xs font-medium px-3.5 py-1.5 rounded-full border border-[#EACFD3] bg-[#FAF2F3] text-[#7A5A60]"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Media & Press Highlights */}
        <div>
          <div className="reveal text-center mb-10">
            <div 
              className="inline-flex items-center gap-2 border-t-[3px] pt-2 mb-4"
              style={{ borderColor: theme.primary }}
            >
              <Newspaper className="w-4 h-4 text-[#B85470]" strokeWidth={1.5} />
              <span className="font-bold text-sm tracking-[0.2em] uppercase" style={{ color: theme.primary }}>Media &amp; Publications</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: theme.dark }}>National Features</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressCoverage.map((p, i) => (
              <div 
                key={i} 
                className="reveal shimmer-card bg-white/80 border border-[#EACFD3] p-7 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F3E0E3] flex items-center justify-center text-[#B85470] group-hover:bg-[#B85470] group-hover:text-white transition-colors duration-500 shadow-sm">
                  <Newspaper className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest block text-[#B85470]">{p.source}</span>
                <h4 className="font-serif font-bold text-base text-[#0F0A0B]">{p.title}</h4>
                <p className="text-xs font-light leading-relaxed text-[#7A5A60]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* LinkedIn Professional Recommendations */}
        <div>
          <div className="reveal text-center mb-10">
            <div 
              className="inline-flex items-center gap-2 border-t-[3px] pt-2 mb-4"
              style={{ borderColor: theme.primary }}
            >
              <Users className="w-4 h-4 text-[#B85470]" strokeWidth={1.5} />
              <span className="font-bold text-sm tracking-[0.2em] uppercase" style={{ color: theme.primary }}>Professional Endorsements</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: theme.dark }}>LinkedIn Recommendations</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {linkedinRecs.map((r, i) => (
              <div 
                key={i} 
                className="reveal shimmer-card bg-white/80 border border-[#EACFD3] p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-2xl text-white flex items-center justify-center font-bold text-sm bg-[#B85470]"
                  >
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#0F0A0B]">{r.name}</h4>
                    <p className="text-[10px] font-semibold text-[#B85470]">{r.role}</p>
                  </div>
                </div>
                <p className="text-xs font-light leading-relaxed italic text-[#7A5A60]">"{r.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials Grid */}
        <div>
          <div className="reveal text-center mb-10">
            <div 
              className="inline-flex items-center gap-2 border-t-[3px] pt-2 mb-4"
              style={{ borderColor: theme.primary }}
            >
              <Quote className="w-4 h-4 text-[#B85470]" strokeWidth={1.5} />
              <span className="font-bold text-sm tracking-[0.2em] uppercase" style={{ color: theme.primary }}>Client Transformations</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: theme.dark }}>Real Stories, Real Results</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {clientQuotes.map((q, i) => (
              <div 
                key={i} 
                className="reveal shimmer-card bg-white/80 border border-[#EACFD3] p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-full bg-[#F3E0E3] flex items-center justify-center text-[#B85470]">
                    <Quote className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#B85470]">{q.rel}</span>
                </div>
                <p className="text-xs font-light leading-relaxed italic text-[#7A5A60]">"{q.quote}"</p>
                <div className="pt-2 border-t border-[#EACFD3]">
                  <h4 className="font-serif font-bold text-xs text-[#0F0A0B]">{q.name}</h4>
                  <span className="text-[10px] font-light text-[#7A5A60] block">{q.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Banner */}
        <div 
          className="reveal relative overflow-hidden rounded-3xl p-10 lg:p-14 text-center shadow-2xl"
          style={{ background: "linear-gradient(135deg, #B85470 0%, #8C405A 100%)" }}
        >
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/8 rounded-full blur-2xl" />
          <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-xl" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <p className="font-serif text-xl lg:text-2xl italic text-white leading-relaxed">
              "Credentialing matters because systemic health requires institutional trust. But real transformation happens when rigorous knowledge meets empathy."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-white/40" />
              <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Kirti Yadav, Founder</span>
              <div className="w-8 h-px bg-white/40" />
            </div>
          </div>
        </div>

        {/* Complete Timeline Cards Grid */}
        <div className="border-t pt-16" style={{ borderColor: `${theme.border}60` }}>
          <div className="reveal text-center mb-12">
            <div 
              className="inline-flex items-center gap-2 border-t-[3px] pt-2 mb-4"
              style={{ borderColor: theme.primary }}
            >
              <Award className="w-4 h-4 text-[#B85470]" strokeWidth={1.5} />
              <span className="font-bold text-sm tracking-[0.2em] uppercase" style={{ color: theme.primary }}>Complete Recognition Timeline</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: theme.dark }}>Every Milestone, in Sequence</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {milestones.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="reveal shimmer-card bg-white/80 border border-[#EACFD3] p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                  style={{ 
                    transitionDelay: `${(idx % 3) * 80}ms`
                  }}
                >
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#EACFD3]">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-2xl bg-[#F3E0E3] flex items-center justify-center shadow-sm text-[#B85470] group-hover:bg-[#B85470] group-hover:text-white transition-colors duration-500"
                      >
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <span className="font-serif text-xl font-bold text-[#B85470]">{item.year}</span>
                    </div>
                    <span 
                      className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-[#FAF2F3] text-[#B85470]"
                    >
                      {item.category}
                    </span>
                  </div>
                  <h4 
                    className="font-serif font-bold text-sm mb-2 leading-snug transition-colors text-[#0F0A0B] group-hover:text-[#B85470]"
                  >
                    {item.title}
                  </h4>
                  <p className="text-xs font-light leading-relaxed text-[#7A5A60]">{item.short}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}