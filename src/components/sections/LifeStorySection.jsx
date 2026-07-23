import { useEffect, useRef, useState } from "react";

/* ─── Scroll-reveal hook ─────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── Chapter data ───────────────────────────────── */
const CHAPTERS = [
  {
    num: "01", emoji: "🎓",
    title: "Computer Science & Corporate Mastery (2005–2014)",
    sub: "HBTI Kanpur · IBM · Target · AIG",
    color: "from-[#5B21B6] to-[#3B0764]",
    accent: "#5B21B6",
    intro: "Before Kirti Yadav became a certified holistic nutritionist, founder, speaker, or mentor, she built a robust 9-year corporate career in data engineering and corporate training — laying the analytical foundation for everything she would build later.",
    cards: [
      { heading: "Education & Tech Roots (2001–2009)", body: "Kirti graduated with a BTech in Computer Science from HBTI Kanpur in 2005, followed by a C-PGDBA in IT from Symbiosis. She began her corporate journey at IBM Global Process Services (2005–2011) as a Data Warehousing Consultant, mastering data systems and complex analytical frameworks." },
      { heading: "Global Project Leadership & Target (2011–2013)", body: "Joining Target India as Project Lead for Data Integration, Kirti spent 1.5 years onsite in the US working as a project coordinator for Chartis/AIG. During her corporate career, she conducted over 130 technical and leadership interviews, honing her keen understanding of people and performance." },
      { heading: "Training Manager at AIG (2013–2014)", body: "Transitioning to AIG as Training Manager, Kirti built the entire Training Department from scratch, personally training over 1,000 corporate professionals. 'I am a people's person, and I love interacting with people,' she recalls. This role planted the seed for her future coaching and public speaking identity." },
    ],
    closing: "A decade across global technology giants gave Kirti analytical rigor, systems thinking, and leadership confidence — tools that would prove indispensable when building her own ventures.",
  },
  {
    num: "02", emoji: "👶",
    title: "Motherhood, Health Crisis & Transformation (2014–2018)",
    sub: "Preterm Birth · 28kg Weight Loss · Plattershare",
    color: "from-[#5B21B6] to-[#3B0764]",
    accent: "#5B21B6",
    intro: "In 2014, Kirti's life changed course completely. The birth of her daughter prematurely triggered postpartum complications — weight gain, high cholesterol, and elevated blood pressure — forcing a fundamental reset.",
    cards: [
      { heading: "A Life-Changing Catalyst (2014)", body: "Faced with health complications after her daughter's premature birth, Kirti stepped away from her corporate career. Driven by a mother's refusal to compromise and a deep desire to heal, she turned to researching natural health solutions, whole foods, and plant-based nutrition." },
      { heading: "The 28 kg Transformation (2018)", body: "By adopting a disciplined, whole-food plant-based lifestyle, Kirti lost 28 kg, reversed her health markers, and restored her vitality. The realization struck with power: 'If I can lose weight and become healthier following a plant-based lifestyle, it might help others as well.'" },
      { heading: "Plattershare & Community Seed (2014–2018)", body: "During this transitional chapter, Kirti co-founded Plattershare, one of India's first food networking platforms, pioneering digital campaigns. In 2018, she left Plattershare to dive full-time into nutrition, launching a Facebook group that grew to 5,000 members — the seed of KuKClean." },
    ],
    closing: "What began as a personal struggle for survival and recovery transformed into a profound calling: bringing plate-level change to Indian families.",
  },
  {
    num: "03", emoji: "🥗",
    title: "The Birth & Growth of KuKClean (2021–2023)",
    sub: "Clean-Label Foods · IIM Bangalore · RKVY-RAFTAAR",
    color: "from-[#5B21B6] to-[#3B0764]",
    accent: "#5B21B6",
    intro: "In July 2021, amid the COVID-19 pandemic, Kirti incorporated KuKClean Foods and Consulting Pvt Ltd alongside her husband and co-founder Akar Misra, creating a clean-label food brand rooted in transparency.",
    cards: [
      { heading: "The 'Kitchen You' Philosophy", body: "KuKClean stands for 'Kitchen' (KuK) + 'Clean', doubling as 'Kitchen, You' — teaching families how to cook clean in their own kitchens. Product standards were set by her daughter's honest reactions: 'When my daughter eats my snacks and says, Mummy, I'm so lucky to have you, that's why I make laddus.'" },
      { heading: "IIM Bangalore & Institutional Grants", body: "KuKClean was selected and incubated at IIM Bangalore's Women Startup Programme (Cohort 3 - WSP3), named among the 'Top 50 Women-Led Ventures'. She graduated from the Goldman Sachs 10,000 Women (GS10K) program at NSRCEL IIMB and received the RKVY-RAFTAAR Grant-in-Aid from ICAR-IIMR." },
      { heading: "Bootstrapped Traction & B2B Expansion", body: "Without VC funding, KuKClean generated ₹14 Lakhs in revenue in its first 7 bootstrapped months. The brand expanded into B2B supply — providing nut butters to cafes and positioning artisanal laddus into corporate Thalis for bulk canteen buyers, while employing women from disadvantaged backgrounds." },
    ],
    closing: "Incubated at top national institutes, KuKClean proved that clean-label, plant-based Indian gourmet treats could build a thriving business without sacrificing a single gram of flavour.",
  },
  {
    num: "04", emoji: "📢",
    title: "COVID-19 Leadership & #EatLikeKirti (2020–2021)",
    sub: "21 Days Live · Professional Certifications · National Media",
    color: "from-[#5B21B6] to-[#3B0764]",
    accent: "#5B21B6",
    intro: "When the 2020 lockdown forced families indoors, Kirti turned uncertainty into nationwide education, showing up every day to guide thousands of Indian households toward immune resilience.",
    cards: [
      { heading: "21 Days Live & 10 Webinars", body: "Kirti launched the #EatLikeKirti initiative, conducting 21 consecutive days of live social media broadcasts and 10 interactive webinars during lockdown. She taught families practical whole-food cooking, label literacy, and plant-based nutrition." },
      { heading: "Official Certifications (AFPA USA)", body: "To solidify her clinical expertise, Kirti earned formal credentials as a Certified Holistic Nutritionist (AFPA, USA), Plant-Based Athlete Coach (AFPA), and Specialist in Herbal & Natural Strategies for Menopause (AFPA)." },
      { heading: "National Press Features", body: "Her lockdown initiative was featured nationally by India Today ('Cooking in a Crisis'), YourStory (video interview with Shradha Sharma), Deccan Herald, The Better India, and Bangalore Insider." },
    ],
    closing: "Leading with generosity during crisis established Kirti as a trusted, evidence-based authority in holistic wellness across India.",
  },
  {
    num: "05", emoji: "🌸",
    title: "Founding NotPaused.com (2025–Present)",
    sub: "Women 35+ · Breaking Menopause Stigma · WhatsApp Movement",
    color: "from-[#5B21B6] to-[#3B0764]",
    accent: "#5B21B6",
    intro: "In 2025, Kirti confronted a startling personal blind spot: despite being a certified nutritionist, she experienced sleepless nights and unrecognized perimenopause symptoms because public awareness was practically non-existent.",
    cards: [
      { heading: "The Unrecognized Symptom Catalyst", body: "'Even a nutritionist like me was not aware that my menopause was hitting, because nobody really talks about it,' Kirti reflects. Realizing that 75% of India's 65 million midlife women receive no guidance, she took the plunge to build a dedicated movement." },
      { heading: "A Rebuttal to 'Pausing'", body: "She named the platform NotPaused.com — a direct rebuttal to the idea that women pause after menopause. Built for women 35+, the platform offers a free, vetted WhatsApp community of 1,100+ members across 7 metros and a 5-month 1:1 Perimenopause Coaching Program." },
      { heading: "Four-Pillar Solution Architecture", body: "NotPaused is expanding into corporate menopause awareness clinics and building a multidisciplinary bench (physiotherapists, doctors, journaling & meditation experts) to deliver Safe Community, Expert Support, Symptom Tracking, and Trusted Education." },
    ],
    closing: "'I built this because I was that woman at 3am with no answers. Now I make sure no Indian woman has to be.'",
  },
  {
    num: "06", emoji: "🏆",
    title: "Awards, Corporate Impact & Mentorship",
    sub: "Womenpreneur 2024 · 100+ Corporate Sessions · Walmart Vriddhi",
    color: "from-[#5B21B6] to-[#3B0764]",
    accent: "#5B21B6",
    intro: "From corporate boardrooms to national stages, Kirti's track record combines public leadership with practical mentoring for the next generation of founders.",
    cards: [
      { heading: "National Awards & Pitching Stages", body: "Honoured with the Womenpreneur Achievers Award 2024 and selected nationally for the Women Leadership Conclave 2024 (pitching before IIT Guwahati & Embassy of Israel). Speaker at ASSOCHAM Rajasthan Startup Summit ('Women Leading the Race')." },
      { heading: "100+ Corporate Wellness Sessions", body: "Delivered wellness talks and menu consultations for over 100 corporate organizations and 10,000+ lives, including JP Morgan, Goldman Sachs, Microsoft, IBM, ISRO, Siemens, Applied Materials, Reliance, and HDFC." },
      { heading: "Startup & Institutional Mentorship", body: "Active mentor under the Walmart Vriddhi Mentoring Program, guest speaker at ISBR Business School, jury member at CAIAS Startup Summit, and mentor for student programs at Ique Nation Venture and FKCCI." },
    ],
    closing: "From winning startup awards to serving as a jury judge and mentor, her journey represents the complete evolution of a purpose-driven leader.",
  },
  {
    num: "07", emoji: "☀️",
    title: "Personal Discipline & The Daily Routine",
    sub: "Non-Negotiable Mornings · 'Keep Going' Mantra",
    color: "from-[#5B21B6] to-[#3B0764]",
    accent: "#5B21B6",
    intro: "Kirti is a firm believer in practicing exactly what she preaches. Her daily energy is anchored in a strict, non-negotiable 2 to 3 hour morning routine.",
    cards: [
      { heading: "The 6-Step Morning Ritual", body: "1. Meditation for mental clarity, 2. Reflective Journaling, 3. Reading nutrition and motivational literature, 4. Cooking a fresh, healthy meal for her family, 5. 45 minutes of strength training, 6. Getting ready for work. These hours are non-negotiable on most days." },
      { heading: "Personal Mantra: 'Keep Going'", body: "Her personal mantra is 'Keep Going' — telling herself to keep moving in a direction, finding peace and purpose along the way. She pairs this with her signature philosophy: 'It's a journey, not a goal — compounding beats sparks.'" },
      { heading: "Horizontal Success & Single Ikigai", body: "Rather than climbing a single corporate ladder, Kirti measures achievement by horizontal success — tackling multiple causes (nutrition, menopause, mentoring). All ventures express one core ikigai: bringing plate-level change to families." },
    ],
    closing: "This grounded daily discipline provides the strength and stamina behind everything she creates across KuKClean, NotPaused, and corporate coaching.",
  },
  {
    num: "08", emoji: "🔮",
    title: "Vision for 2030 & Future Aspirations",
    sub: "1 Million Plates · Public Health Policy · Go With Slow",
    color: "from-[#5B21B6] to-[#3B0764]",
    accent: "#5B21B6",
    intro: "Kirti Yadav builds with a long-term perspective, focusing on deep, lasting societal impact rather than quick viral moments.",
    cards: [
      { heading: "1 Million Plate-Level Change by 2030", body: "'By 2030, I want one million people to change their plate, even if it's a small change — because India is becoming the diabetic capital of the world. Good, clean food close to nature can heal you.'" },
      { heading: "Near-Term Focus (Next 5 Years)", body: "For the next five years, her primary focus is building NotPaused.com into a nationwide movement, scaling WhatsApp city chapters, corporate clinics, and a multidisciplinary health coach bench." },
      { heading: "Long-Term Ambition (Public Health Policy)", body: "As a 'go-with-slow' builder who tackles new systemic problems every 5–7 years, her 7-year vision is to work in the public health sector, contributing to national policy changes around nutrition and women's health." },
    ],
    closing: "'I do not believe in hierarchy. I am a community-led leader — if everyone comes together, it is a better venture than building a hierarchy.'",
  },
];

/* ─── Chapter Nav Pill ───────────────────────────── */
function ChapterPill({ chap, active, onClick }) {
  return (
    <button
      onClick={() => onClick(chap.num)}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer whitespace-nowrap
        ${active
          ? "bg-[#5B21B6] text-white shadow-md shadow-[#5B21B6]/30 scale-105"
          : "bg-white/70 text-[#475569] border border-[#E2E8F0]/60 hover:bg-white hover:text-[#5B21B6]"}`}
    >
      <span>{chap.emoji}</span>
      <span>Ch {chap.num}</span>
    </button>
  );
}

/* ─── Sub-card ───────────────────────────────────── */
function StoryCard({ heading, body, delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); }, { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className="reveal shimmer-card bg-white/85 border border-[#E2E8F0]/60 p-7 rounded-3xl shadow-sm hover:shadow-lg hover:border-[#5B21B6]/30 hover:-translate-y-1 transition-all duration-400 group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h4 className="font-serif font-bold text-[#0F172A] text-base mb-3 group-hover:text-[#5B21B6] transition-colors">{heading}</h4>
      <p className="text-[#475569] text-sm font-light leading-relaxed text-justify">{body}</p>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────── */
export function LifeStorySection() {
  useReveal();

  const [activeChap, setActiveChap] = useState("01");
  const chapRefs = useRef({});

  const scrollToChap = (num) => {
    setActiveChap(num);
    chapRefs.current[num]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* Track which chapter is in view */
  useEffect(() => {
    const ios = CHAPTERS.map((c) => {
      const el = chapRefs.current[c.num];
      if (!el) return null;
      const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActiveChap(c.num); }, { rootMargin: "-40% 0px -40% 0px" });
      io.observe(el);
      return io;
    });
    return () => ios.forEach((io) => io?.disconnect());
  }, []);

  const active = CHAPTERS.find((c) => c.num === activeChap);

  return (
    <section id="life-story" className="bg-[#F8FAFC] border-b border-[#E2E8F0]/60 scroll-mt-20">

      {/* ── HERO BANNER ────────────────────────────── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#3B0764] via-[#5B21B6] to-[#7C3AED] py-28 px-6 md:px-12 lg:px-20">
        {/* Animated blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-[-30%] right-[-5%] w-[400px] h-[400px] bg-white/8 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        {/* Dotted grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="relative z-10 max-w-5xl">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
              Life Story & Leadership Narrative
            </div>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            A Journey of Conviction, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-[#EDE9FE] animate-text-gradient">Compounding & Purpose</span>
          </h1>
          <p className="text-white/75 text-base lg:text-lg font-light leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            From Data Warehousing Consultant at IBM to founder of KuKClean and NotPaused.com — how personal health trials, motherly devotion, and community conviction created a movement.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-12 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            {[["8", "Detailed Chapters"], ["2005", "Career Journey Began"], ["28 kg", "Health Reset"], ["1M", "Plate Goal 2030"]].map(([n, l]) => (
              <div key={l}>
                <span className="font-serif text-3xl font-bold text-white block">{n}</span>
                <span className="text-white/60 text-xs uppercase tracking-widest">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── STICKY CHAPTER NAV ─────────────────────── */}
      <div className="sticky top-20 z-40 bg-[#F8FAFC]/95 backdrop-blur-md border-b border-[#E2E8F0]/60 shadow-sm">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-3">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {CHAPTERS.map((c) => (
              <ChapterPill key={c.num} chap={c} active={activeChap === c.num} onClick={scrollToChap} />
            ))}
          </div>
        </div>
      </div>

      {/* ── OPENING PULL QUOTE ─────────────────────── */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-8">
        <div className="reveal max-w-4xl mx-auto bg-white/60 border-l-4 border-[#5B21B6] rounded-r-3xl px-8 py-6 shadow-sm">
          <p className="font-serif text-lg lg:text-xl italic text-[#0F172A] leading-relaxed">
            "It's a journey, not a goal — compounding beats sparks. Keep going. You have to keep finding your peace and your purpose, because it's all about moving forward in your journey."
          </p>
          <span className="text-[#5B21B6] text-xs font-bold uppercase tracking-wider block mt-3">— Kirti Yadav</span>
        </div>
      </div>

      {/* ── CHAPTERS ───────────────────────────────── */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 space-y-32">
        {CHAPTERS.map((chap, ci) => (
          <div
            key={chap.num}
            ref={(el) => (chapRefs.current[chap.num] = el)}
            className="scroll-mt-36"
          >
            {/* Chapter header row */}
            <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div className="flex items-center gap-4">
                {/* Animated chapter number badge */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${chap.color} flex items-center justify-center shadow-lg timeline-dot flex-shrink-0`}>
                  <span className="font-serif font-bold text-white text-xl">{chap.emoji}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold tracking-[0.3em] uppercase mb-1" style={{ color: chap.accent }}>Chapter {chap.num}</span>
                  <h2 className="font-serif text-2xl lg:text-3xl text-[#0F172A] font-bold tracking-tight leading-tight">{chap.title}</h2>
                  <p className="text-[#475569] text-xs font-medium tracking-widest uppercase mt-1">{chap.sub}</p>
                </div>
              </div>
              {/* Chapter progress indicator */}
              <div className="hidden md:flex items-center gap-1">
                {CHAPTERS.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => scrollToChap(CHAPTERS[i].num)}
                    className={`h-1.5 rounded-full cursor-pointer transition-all duration-500 ${CHAPTERS[i].num === chap.num ? "w-8 bg-[#5B21B6]" : "w-2 bg-[#E2E8F0] hover:bg-[#5B21B6]/50"}`}
                  />
                ))}
              </div>
            </div>

            {/* Intro paragraph with gradient left border */}
            <div
              className="reveal mb-10 pl-6 border-l-2 rounded-r-xl py-1"
              style={{ borderColor: chap.accent }}
            >
              <p className="text-[#475569] text-base lg:text-lg font-light leading-relaxed">{chap.intro}</p>
            </div>

            {/* Story cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {chap.cards.map((card, i) => (
                <StoryCard key={i} heading={card.heading} body={card.body} delay={i * 120} />
              ))}
            </div>

            {/* Closing line */}
            <div className="reveal max-w-3xl">
              <div className="flex items-start gap-4 bg-gradient-to-r from-slate-50 to-white/60 border border-[#E2E8F0]/60 rounded-2xl px-6 py-5 shadow-sm">
                <span className="text-2xl flex-shrink-0 mt-0.5 text-[#5B21B6]">✦</span>
                <p className="text-[#475569] text-sm font-medium leading-relaxed italic">{chap.closing}</p>
              </div>
            </div>

            {/* Divider — not after last */}
            {ci < CHAPTERS.length - 1 && (
              <div className="mt-20 reveal flex items-center gap-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />
                <div className="w-2 h-2 rounded-full bg-[#5B21B6] opacity-40 animate-pulse" />
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── PHILOSOPHY CARDS ── */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pb-20">
        <div className="reveal text-center mb-12">
          <div className="inline-block border-t-[3px] border-[#5B21B6] pt-2 mb-4">
            <span className="text-[#5B21B6] font-bold text-sm tracking-[0.2em] uppercase">Leadership Philosophy & Core Convictions</span>
          </div>
          <h3 className="font-serif text-2xl lg:text-3xl text-[#0F172A] font-bold">A Practice Lived Out Loud</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { n: "01", title: "Storyteller & Community Leadership", body: "'I am a community-led leader. I believe that if everyone comes together, it is a better venture than building a hierarchy. I do not believe in hierarchy, honestly.' Everything Kirti builds starts with storytelling and genuine connection." },
            { n: "02", title: "Practice What You Preach", body: "Kirti's 2 to 3 hour daily morning ritual — meditation, journaling, reading, family meal prep, and 45 minutes of strength training — is non-negotiable. She preaches only what she embodies herself every single day." },
            { n: "03", title: "Horizontal Success over Vertical Climbing", body: "Kirti measures achievement by horizontal success — the breadth of causes tackled and lives touched (KuKClean, NotPaused, mentorship) — rather than climbing a traditional corporate ladder. All express her single ikigai." },
          ].map((p, i) => (
            <div
              key={i}
              className="reveal shimmer-card bg-white/80 border border-[#E2E8F0]/60 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-[#5B21B6]/30 hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full chapter-tag-gradient flex items-center justify-center text-white font-bold text-sm mb-4 shadow-md">{p.n}</div>
              <h4 className="font-serif font-bold text-[#0F172A] text-lg mb-3">{p.title}</h4>
              <p className="text-[#475569] text-sm font-light leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CLOSING QUOTE BANNER ───────────────────── */}
      <div className="mx-6 md:mx-12 lg:mx-20 mb-20 reveal">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#3B0764] via-[#5B21B6] to-[#7C3AED] p-12 lg:p-16 text-center shadow-2xl">
          {/* decorative blobs */}
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/8 rounded-full blur-2xl" />
          <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-xl" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

          <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
            <span className="bg-white/15 text-white text-[9px] font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full inline-block border border-white/20">
              Personal Mantra
            </span>
            <p className="font-serif text-2xl lg:text-3xl text-white italic leading-relaxed">
              "Keep Going. I tell myself that you have to just keep going in a direction, and you have to keep finding your peace and your purpose, because it's all about moving forward in your journey."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-white/40" />
              <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Kirti Yadav · Founder, KuK Clean Wellness & notpaused.com</span>
              <div className="w-8 h-px bg-white/40" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
