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

const milestones = [
  { year: "2024", category: "Award", emoji: "🏆", color: "from-[#5B21B6] to-[#3B0764]", title: "Womenpreneur Achievers Award 2024", short: "Honoured alongside Karnataka's most distinguished women leaders in entrepreneurship." },
  { year: "2024", category: "Speaking", emoji: "🎤", color: "from-[#5B21B6] to-[#3B0764]", title: "ASSOCHAM Rajasthan Startup Summit", short: "Keynote speaker on 'Women Leading the Race' at RIC, Jaipur." },
  { year: "2024", category: "Pitching", emoji: "🚀", color: "from-[#5B21B6] to-[#3B0764]", title: "Women Leadership Conclave — Pitcher", short: "Selected nationally — pitched before IIT Guwahati & Embassy of Israel." },
  { year: "2024", category: "Jury", emoji: "⚖️", color: "from-[#5B21B6] to-[#3B0764]", title: "CAIAS Startup Summit — Jury Member", short: "Invited as Judge after KuKClean won Best Women-Led Startup." },
  { year: "2023", category: "Govt Grant", emoji: "🌾", color: "from-[#5B21B6] to-[#3B0764]", title: "Grant-in-Aid — RKVY-RAFTAAR", short: "Recognised at International Nutri Cereal Convention 5.0 by ICAR-IIMR, Ministry of Agriculture." },
  { year: "2023", category: "Incubation", emoji: "🎓", color: "from-[#5B21B6] to-[#3B0764]", title: "Goldman Sachs GS10K — IIM Bangalore", short: "Graduate of the GS 10,000 Women Entrepreneur Program at NSRCEL, IIMB." },
  { year: "2022", category: "Mentorship", emoji: "🏢", color: "from-[#5B21B6] to-[#3B0764]", title: "Walmart Vriddhi Mentoring Program", short: "Active mentor empowering early-stage women entrepreneurs across India." },
  { year: "2022", category: "Corporate B2B", emoji: "🥗", color: "from-[#5B21B6] to-[#3B0764]", title: "Applied Materials India Wellness Session", short: "Led 2-hour plant-based nutrition masterclass for 180 employees." },
  { year: "2021", category: "Incubation", emoji: "🏛️", color: "from-[#5B21B6] to-[#3B0764]", title: "IIM Bangalore WSP3 — Top 50 Ventures", short: "Incubated at IIMB Women Startup Programme (Cohort 3) for 1.5 years." },
  { year: "2020", category: "Media", emoji: "📰", color: "from-[#5B21B6] to-[#3B0764]", title: "India Today & YourStory Features", short: "#EatLikeKirti 21-day initiative covered by India Today; interviewed by Shradha Sharma." },
  { year: "2020", category: "Podcast", emoji: "🎙️", color: "from-[#5B21B6] to-[#3B0764]", title: "International Podcast Feature", short: "Featured speaker on Gigi Carter's global health podcast (mytrueself.com)." },
  { year: "2005", category: "Tech Degree", emoji: "💻", color: "from-[#5B21B6] to-[#3B0764]", title: "BTech Computer Science — HBTI Kanpur", short: "Graduated with CS engineering degree before entering 9-year corporate career." },
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

const linkedinRecs = [
  {
    name: "Shikha S Mazumdar",
    role: "Asst. Vice President, Head of Marketing & VM at Home Centre India",
    rel: "Known for 15+ years",
    quote: "I have known Kirti for over 15 years now and one thing that stands out in her is her diligence, self discipline and her never ending drive to master new skills and pushing her personal limits. As a student I remember her being one of the most articulate, hard working and focused person and now as a professional I often see in addition her enthusiasm and passion to continuously excel.",
  },
  {
    name: "Neela Shashikumar",
    role: "Project Management | Test Automation | L&D Consulting | Training",
    rel: "Corporate & Individual Client",
    quote: "Kirti is a passionate and enthusiastic woman who has tremendous knowledge of nutrition and healthy eating. She is an engaging trainer and selfless consultant. She herself stands as a testament to good eating and a healthy lifestyle. Some of the engagements I had with her in a corporate and individual capacity were wonderful. Trail mix is my personal favourite.",
  },
  {
    name: "Manish Kumar",
    role: "Data & AI Executive Talent Leader",
    rel: "1:1 Coaching Client",
    quote: "Kirti Yadav has helped keep better track of my food intake and my fitness goals. I have really come a long way in achieving what I wanted. Thanks to Kirti for making me a healthier person. I would recommend Kirti for anyone who is looking to improve their lifestyle, lose weight, eat home made healthy food.",
  },
];

const clientQuotes = [
  { name: "Anuptha", role: "Product Manager", quote: "I joined Kirti's session after I tried everything and lost hope. Every place I went and paid money asked me to do the impossible. Kirti solved all the problems for me. I lost 4 kgs in 2 months. My cholesterol is in great condition now. After 3 years, I'm in love with myself again!" },
  { name: "Kanupriya", role: "Community Member", quote: "I feel eating healthy totally changes how you perceive and think about your life.. healthy eating is healthy Mind that's what I learn from you Kirti..! Also I learnt a great lesson that as a woman I have to take care of myself as well." },
  { name: "Prashant", role: "Coaching Client", quote: "Completely seeing the difference! Weight down from 77.5kg to 74.5kg, body seems more energetic with more stamina. Craving for biryani is gone and taste buds are sensitive to real spices. Veg curry with millets is my primary meal now!" },
  { name: "Seema", role: "Coaching Client", quote: "I wanted to reduce my weight for a long time, but did not want to do it without proper guidance. Since joining Kirti's weight loss program, I have lost 4 kgs. I feel light and happy, dream come true in a healthy way." },
];

export function AchievementsSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="achievements" ref={ref} className="bg-[#F8FAFC] border-b border-[#E2E8F0]/60 scroll-mt-20">

      {/* ── HERO BANNER ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#3B0764] via-[#5B21B6] to-[#7C3AED] py-28 px-6 md:px-12 lg:px-20">
        <div className="absolute -top-24 -left-16 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-white/8 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 max-w-5xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
            Track Record & Recognition
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1] mb-6">
            Institutional Credibility & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-[#EDE9FE] animate-text-gradient">Real-World Impact</span>
          </h1>
          <p className="text-white/75 text-base lg:text-lg font-light leading-relaxed max-w-2xl">
            From IIM Bangalore incubation and Government of India grants to 100+ corporate sessions and national media features — a record built strictly on conviction.
          </p>
          <div className="flex flex-wrap gap-8 mt-12">
            {[["100+", "Corporate Sessions"], ["10,000+", "Lives Impacted"], ["IIMB", "Incubated"], ["RKVY", "Govt Grant"]].map(([n, l]) => (
              <div key={l}>
                <span className="font-serif text-3xl font-bold text-white block">{n}</span>
                <span className="text-white/60 text-xs uppercase tracking-widest">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 space-y-20">

        {/* Opening Quote */}
        <div className="reveal max-w-4xl mx-auto bg-white/60 border-l-4 border-[#5B21B6] rounded-r-3xl px-8 py-6 shadow-sm">
          <p className="font-serif text-lg italic text-[#0F172A] leading-relaxed">
            "Recognition, when it is earned rather than sought, carries a different weight. Every milestone connects to the same mission — not a list of accomplishments, but a narrative of systemic credibility."
          </p>
        </div>

        {/* Credentials & Certifications */}
        <div>
          <div className="reveal text-center mb-12">
            <div className="inline-block border-t-[3px] border-[#5B21B6] pt-2 mb-4">
              <span className="text-[#5B21B6] font-bold text-sm tracking-[0.2em] uppercase">Professional Qualifications</span>
            </div>
            <h2 className="font-serif text-2xl lg:text-3xl text-[#0F172A] font-bold">Certifications & Education</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((c, i) => (
              <div key={i} className="reveal shimmer-card bg-white/80 border border-[#E2E8F0]/60 p-7 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5B21B6] to-[#3B0764] flex items-center justify-center text-white font-bold text-sm shadow-md">📜</div>
                <span className="text-[#5B21B6] text-xs font-bold uppercase tracking-wider block">{c.org}</span>
                <h3 className="font-serif font-bold text-[#0F172A] text-base">{c.title}</h3>
                <p className="text-[#475569] text-xs font-light leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Client Roster */}
        <div className="reveal bg-white/80 border border-[#E2E8F0]/60 p-10 rounded-3xl shadow-sm space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[#5B21B6] font-bold text-xs tracking-widest uppercase block">Corporate Track Record</span>
            <h3 className="font-serif text-2xl lg:text-3xl text-[#0F172A] font-bold">Delivered 100+ Corporate Wellness Sessions</h3>
            <p className="text-[#475569] text-sm font-light">Trusted by global Fortune 500 firms, Indian conglomerates, and government institutions across India.</p>
          </div>

          {/* Flagship shortlist */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#475569] block text-center">Flagship Organizations Delivered At:</span>
            <div className="flex flex-wrap justify-center gap-3">
              {corporateFlagship.map((name) => (
                <span key={name} className="bg-[#5B21B6] text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-sm">
                  🏢 {name}
                </span>
              ))}
            </div>
          </div>

          {/* Extended Roster */}
          <div className="space-y-3 pt-4 border-t border-[#E2E8F0]">
            <span className="text-xs font-bold uppercase tracking-widest text-[#475569] block text-center">Additional Corporate & B2B Client Organizations:</span>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {corporateRoster.concat(b2bClients).map((name) => (
                <span key={name} className="bg-[#F1F5F9] text-[#0F172A] text-xs font-medium px-3.5 py-1.5 rounded-full border border-[#E2E8F0]">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Press & Media Features */}
        <div>
          <div className="reveal text-center mb-10">
            <div className="inline-block border-t-[3px] border-[#5B21B6] pt-2 mb-4">
              <span className="text-[#5B21B6] font-bold text-sm tracking-[0.2em] uppercase">Press & Public Appearances</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl text-[#0F172A] font-bold">Media Features & Keynote Talks</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressCoverage.map((p, i) => (
              <div key={i} className="reveal shimmer-card bg-white/80 border border-[#E2E8F0]/60 p-7 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-3">
                <span className="bg-[#F1F5F9] text-[#5B21B6] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block">{p.source}</span>
                <h4 className="font-serif font-bold text-[#0F172A] text-base">{p.title}</h4>
                <p className="text-[#475569] text-xs font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* LinkedIn Professional Recommendations */}
        <div>
          <div className="reveal text-center mb-10">
            <div className="inline-block border-t-[3px] border-[#5B21B6] pt-2 mb-4">
              <span className="text-[#5B21B6] font-bold text-sm tracking-[0.2em] uppercase">Professional Endorsements</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl text-[#0F172A] font-bold">LinkedIn Recommendations</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {linkedinRecs.map((r, i) => (
              <div key={i} className="reveal shimmer-card bg-white/80 border border-[#E2E8F0]/60 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#5B21B6] text-white flex items-center justify-center font-bold text-sm">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#0F172A] text-sm">{r.name}</h4>
                    <p className="text-[10px] text-[#5B21B6] font-semibold">{r.role}</p>
                  </div>
                </div>
                <p className="text-[#475569] text-xs font-light leading-relaxed italic">"{r.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials Grid */}
        <div>
          <div className="reveal text-center mb-10">
            <div className="inline-block border-t-[3px] border-[#5B21B6] pt-2 mb-4">
              <span className="text-[#5B21B6] font-bold text-sm tracking-[0.2em] uppercase">Client Transformations</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl text-[#0F172A] font-bold">Real Stories, Real Results</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {clientQuotes.map((q, i) => (
              <div key={i} className="reveal shimmer-card bg-white/80 border border-[#E2E8F0]/60 p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 space-y-3">
                <span className="text-[#5B21B6] text-xs font-bold uppercase tracking-wider block">✦ {q.name} ({q.role})</span>
                <p className="text-[#475569] text-xs font-light leading-relaxed italic">"{q.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Banner */}
        <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#3B0764] via-[#5B21B6] to-[#7C3AED] p-10 lg:p-14 text-center shadow-2xl">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/8 rounded-full blur-2xl" />
          <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-xl" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="relative z-10 space-y-5 max-w-3xl mx-auto">
            <span className="bg-white/15 border border-white/20 text-white text-[9px] font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full inline-block">The Standard That Drives Everything</span>
            <p className="font-serif text-2xl lg:text-3xl italic text-white leading-relaxed">
              "I do not perform a persona or sell standard products. I live my values publicly, with my family's nourishment and community well-being as the single standard for everything I launch."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-white/40" />
              <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Kirti Yadav, Founder</span>
              <div className="w-8 h-px bg-white/40" />
            </div>
          </div>
        </div>

        {/* Complete Timeline Cards Grid */}
        <div className="border-t border-[#E2E8F0]/60 pt-16">
          <div className="reveal text-center mb-12">
            <div className="inline-block border-t-[3px] border-[#5B21B6] pt-2 mb-4">
              <span className="text-[#5B21B6] font-bold text-sm tracking-[0.2em] uppercase">Complete Recognition Timeline</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl text-[#0F172A] font-bold">Every Milestone, in Sequence</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="reveal shimmer-card bg-white/80 border border-[#E2E8F0]/60 p-6 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#5B21B6]/30 transition-all duration-300 group"
                style={{ transitionDelay: `${(idx % 3) * 80}ms` }}
              >
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-sm text-white`}>
                      <span className="text-sm">{item.emoji}</span>
                    </div>
                    <span className="font-serif text-xl font-bold text-[#5B21B6]">{item.year}</span>
                  </div>
                  <span className="bg-[#F1F5F9] text-[#5B21B6] text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-full">{item.category}</span>
                </div>
                <h4 className="font-serif font-bold text-[#0F172A] text-sm mb-2 leading-snug group-hover:text-[#5B21B6] transition-colors">{item.title}</h4>
                <p className="text-[#475569] text-xs font-light leading-relaxed">{item.short}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
