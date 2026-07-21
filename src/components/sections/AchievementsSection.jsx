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
  { year: "2024", category: "Award", emoji: "🏆", color: "from-amber-400 to-yellow-500", title: "Womenpreneur Achievers Award 2024", short: "Honoured alongside Karnataka's most distinguished women leaders." },
  { year: "2024", category: "Speaking", emoji: "🎤", color: "from-pink-500 to-rose-600", title: "ASSOCHAM Rajasthan Startup Summit", short: "Speaker on 'Women Leading the Race' at RIC, Jaipur." },
  { year: "2024", category: "Pitching", emoji: "🚀", color: "from-violet-500 to-purple-600", title: "Women Leadership Conclave — Pitcher", short: "Selected nationally — pitched before IIT Guwahati & Embassy of Israel." },
  { year: "2024", category: "Jury", emoji: "⚖️", color: "from-indigo-500 to-blue-600", title: "CAIAS Startup Summit — Jury Member", short: "Invited as Judge after KuK Clean won Best Women-Led Startup." },
  { year: "2023", category: "Govt Grant", emoji: "🌾", color: "from-emerald-500 to-teal-600", title: "Grant-in-Aid — RKVY-RAFTAAR", short: "Recognised at International Nutri Cereal Convention 5.0, Hyderabad." },
  { year: "2023", category: "Incubation", emoji: "🎓", color: "from-cyan-500 to-sky-600", title: "Goldman Sachs GS10K — IIM Bangalore", short: "Completed the GS 10,000 Women Entrepreneur Program, NSRCEL." },
  { year: "2022", category: "Corporate B2B", emoji: "🏢", color: "from-fuchsia-500 to-pink-600", title: "Applied Materials India Wellness Session", short: "Led 2-hour session on plant-based nutrition for 180 employees." },
  { year: "2022", category: "Jury & Academic", emoji: "📚", color: "from-orange-500 to-amber-600", title: "CAIAS Jury & ISBR Guest Speaker", short: "Jury member for startup awards; guest speaker at ISBR Business School." },
  { year: "2020", category: "Media", emoji: "📰", color: "from-blue-500 to-indigo-600", title: "India Today, YourStory, Deccan Herald", short: "#EatLikeKirti initiative covered nationally during COVID-19 lockdown." },
  { year: "2020", category: "Media", emoji: "🎙️", color: "from-purple-500 to-violet-600", title: "Interviewed by Shradha Sharma — YourStory", short: "Invited to tell KuK Clean's story to India's startup ecosystem." },
  { year: "2020", category: "Community", emoji: "💬", color: "from-green-500 to-emerald-600", title: "#EatLikeKirti — 21-Day Initiative", short: "21 consecutive live sessions; 10 webinars in 21 days during lockdown." },
  { year: "Early", category: "Education", emoji: "🧒", color: "from-rose-400 to-pink-500", title: "EuroKids · Advaya Shaale · Prakriti", short: "Nutrition and wellness awareness sessions at early childhood institutions." },
];

const chapters = [
  {
    num: "01", emoji: "🎓", grad: "from-indigo-600 to-violet-700", accent: "#4F46E5",
    title: "Goldman Sachs & IIM Bangalore",
    sub: "GS10K Women Entrepreneur Program — NSRCEL",
    paras: [
      "Selection for the Goldman Sachs 10,000 Women Entrepreneur Program at NSRCEL, IIM Bangalore was not simply an academic milestone. It was one of the clearest signals that what Kirti had built from her kitchen table was ready to be tested against India's most rigorous standards of business evaluation. The GS10K programme is among the most selective entrepreneurship initiatives in the country, designed to identify women founders who combine vision with operational discipline and the capacity to build enterprises that scale responsibly.",
      "The programme gave Kirti access to mentorship from some of India's most accomplished business minds, a global network of women entrepreneurs, and frameworks for strategic growth. But perhaps more importantly, it gave her something no classroom can manufacture: the confidence to walk into a boardroom, a government office, or a national conference not as an enthusiastic founder but as a credible, validated entrepreneur with institutional backing.",
      "What emerged from NSRCEL was not just a better business plan — it was a clearer, more powerful vision for what KuK Clean could become at national scale. The analytical thinking from AIG, consumer intelligence from Target, and systems design from IBM had prepared her to engage at the highest level.",
    ],
  },
  {
    num: "02", emoji: "🌾", grad: "from-emerald-500 to-teal-700", accent: "#059669",
    title: "ICAR-IIMR Grant-in-Aid",
    sub: "RKVY-RAFTAAR · Ministry of Agriculture & Farmers' Welfare",
    paras: [
      "There is a particular significance in receiving government recognition for work that began, quite literally, at a kitchen counter. When ICAR-IIMR awarded KuK Clean a Grant-in-Aid under the RKVY-RAFTAAR programme, it signalled something important: what Kirti was doing with millets and clean-label nutrition was not merely commercially interesting. It was nationally relevant.",
      "The recognition was publicly celebrated at the International Nutri Cereal Convention 5.0 in Hyderabad — one of India's most prestigious gatherings at the intersection of agricultural science and food innovation. The timing coincided with the United Nations International Year of Millets, a global moment when ancient Indian grains were finally receiving the scientific attention they long deserved. KuK Clean's presence established Kirti not just as a food entrepreneur, but as a contributor to India's broader agricultural and nutritional future.",
      "Millets are not simply a food trend — they are a solution. High in fibre, protein, and micronutrients; drought-resistant; affordable and rooted in centuries of Indian culinary tradition. Kirti's work in bringing millets into modern, delicious, clean-label products was exactly the kind of innovation the country needed.",
    ],
  },
  {
    num: "03", emoji: "📰", grad: "from-pink-500 to-rose-700", accent: "#E11D48",
    title: "National Media Features",
    sub: "India Today · YourStory · Bangalore Insider · Deccan Herald",
    paras: [
      "The media recognition that came during and after the COVID-19 lockdown was not the result of a PR campaign. It was the natural consequence of the #EatLikeKirti initiative — twenty-one days of uninterrupted, generous, evidence-based nutrition education delivered to thousands of Indian households locked indoors and anxious about their health. When India Today published its feature, and Bangalore Insider profiled Kirti's journey, they were reporting on something a community had already decided was valuable.",
      "The most meaningful recognition came as an invitation from Shradha Sharma, founder of YourStory — India's most respected startup media platform. Being interviewed by Shradha Sharma happens when a founder's story has something genuinely instructive to offer India's entrepreneurial ecosystem. In Kirti's case, the conversation covered KuK Clean's origin, the plant-based philosophy underpinning it, and the complexities of challenging an entrenched dairy industry in a country where dairy is deeply embedded in cultural identity.",
      "These features served a purpose beyond profile-building. They extended the reach of ideas about the relationship between what we eat and how we feel, about transparency consumers deserve from food brands, about the possibility of clean, plant-based Indian food that is genuinely delicious. Every article was an invitation to a larger national conversation.",
    ],
  },
  {
    num: "04", emoji: "🏆", grad: "from-amber-500 to-orange-600", accent: "#D97706",
    title: "Awards, Stages & Jury Roles",
    sub: "Womenpreneur 2024 · ASSOCHAM · CAIAS · Women Leadership Conclave",
    paras: [
      "By 2024, the recognition had moved from institutional validation to public leadership. The Womenpreneur Achievers Award placed Kirti alongside Karnataka's most distinguished women entrepreneurs — a peer group defined by women who had built significant, lasting ventures against the full weight of systemic disadvantage. Being honoured in that company was a signal that the category of wellness entrepreneurship was being taken seriously at the highest levels.",
      "The invitation to speak at the ASSOCHAM Rajasthan Startup Summit in Jaipur — on the theme of 'Women Leading the Race' — represented something different. Standing before national delegates and policymakers, Kirti was speaking on behalf of a way of building — slowly, with community trust rather than capital blitz; with products that worked rather than branding that dazzled; with a mission that was genuinely personal. That way of building, she argued, was not a limitation. It was a competitive advantage.",
      "Perhaps the most telling arc of recognition was at the CAIAS Startup Summit. KuK Clean first attended as a participant and won the Best Women-Led Startup Award. The next time Kirti appeared, she was on the other side of the table — as jury member, evaluating the next generation of entrepreneurs. From winner to judge: the entire trajectory of her journey, captured in miniature.",
    ],
  },
];

export function AchievementsSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="achievements" ref={ref} className="bg-[#F7ECF2] border-b border-stone-200/60 scroll-mt-20">

      {/* ── HERO BANNER ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#A054A6] via-[#7c3aed] to-[#4338ca] py-28 px-6 md:px-12 lg:px-20">
        <div className="absolute -top-24 -left-16 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-white/8 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 max-w-5xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
            Achievements & Recognition
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1] mb-6">
            A Record Built on <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-amber-200 animate-text-gradient">Conviction, Not Chance</span>
          </h1>
          <p className="text-white/75 text-base lg:text-lg font-light leading-relaxed max-w-2xl">
            From a kitchen in Bangalore to national stages, government grants, and institutional recognition — a track record shaped entirely by purpose-driven entrepreneurship.
          </p>
          <div className="flex flex-wrap gap-8 mt-12">
            {[["4", "Chapters"], ["12+", "Milestones"], ["2024", "Latest Award"], ["National", "Recognition"]].map(([n, l]) => (
              <div key={l}>
                <span className="font-serif text-3xl font-bold text-white block">{n}</span>
                <span className="text-white/60 text-xs uppercase tracking-widest">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 space-y-20">

        {/* Opening */}
        <div className="reveal max-w-4xl mx-auto bg-white/60 border-l-4 border-[#A054A6] rounded-r-3xl px-8 py-6 shadow-sm">
          <p className="font-serif text-lg italic text-stone-800 leading-relaxed">
            "Recognition, when it is earned rather than sought, carries a different weight. Every milestone connects to the same mission — not a list of accomplishments, but a narrative of systemic credibility."
          </p>
        </div>

        {/* Story Chapters */}
        {chapters.map((ch, ci) => (
          <div key={ch.num} className="space-y-8">
            <div className="reveal flex flex-col md:flex-row md:items-center gap-4">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${ch.grad} flex items-center justify-center shadow-lg timeline-dot flex-shrink-0`}>
                <span className="text-2xl">{ch.emoji}</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold tracking-[0.3em] uppercase mb-1" style={{ color: ch.accent }}>Recognition 0{ci + 1}</span>
                <h2 className="font-serif text-2xl lg:text-3xl text-stone-900 font-bold tracking-tight">{ch.title}</h2>
                <p className="text-stone-500 text-xs font-medium tracking-widest uppercase mt-1">{ch.sub}</p>
              </div>
            </div>
            <div className="reveal pl-6 border-l-2 rounded-r-xl" style={{ borderColor: ch.accent }}>
              <p className="text-stone-700 text-base font-light leading-relaxed">{ch.paras[0]}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {ch.paras.slice(1).map((p, i) => (
                <div key={i} className={`reveal shimmer-card bg-white/80 border border-stone-200/60 p-7 rounded-3xl shadow-sm hover:shadow-lg hover:border-[#A054A6]/30 hover:-translate-y-1 transition-all duration-300`} style={{ transitionDelay: `${i * 100}ms` }}>
                  <p className="text-stone-600 text-sm font-light leading-relaxed text-justify">{p}</p>
                </div>
              ))}
            </div>
            {ci < chapters.length - 1 && (
              <div className="reveal flex items-center gap-4 pt-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
                <div className="w-2 h-2 rounded-full bg-[#A054A6] opacity-40 animate-pulse" />
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
              </div>
            )}
          </div>
        ))}

        {/* Quote Banner */}
        <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#A054A6] via-[#7c3aed] to-[#4338ca] p-10 lg:p-14 text-center shadow-2xl">
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

        {/* Timeline Cards Grid */}
        <div className="border-t border-stone-200/60 pt-16">
          <div className="reveal text-center mb-12">
            <div className="inline-block border-t-[3px] border-[#A054A6] pt-2 mb-4">
              <span className="text-[#A054A6] font-bold text-sm tracking-[0.2em] uppercase">Complete Recognition Timeline</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl text-stone-900 font-bold">Every Milestone, in Sequence</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="reveal shimmer-card bg-white/80 border border-stone-200/60 p-6 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#A054A6]/30 transition-all duration-300 group"
                style={{ transitionDelay: `${(idx % 3) * 80}ms` }}
              >
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-sm`}>
                      <span className="text-sm">{item.emoji}</span>
                    </div>
                    <span className="font-serif text-xl font-bold text-[#A054A6]">{item.year}</span>
                  </div>
                  <span className="bg-[#F7ECF2] text-[#A054A6] text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-full">{item.category}</span>
                </div>
                <h4 className="font-serif font-bold text-stone-900 text-sm mb-2 leading-snug group-hover:text-[#A054A6] transition-colors">{item.title}</h4>
                <p className="text-stone-600 text-xs font-light leading-relaxed">{item.short}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
