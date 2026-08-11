import { useEffect, useRef, useState } from "react";
import { GraduationCap, Heart, Leaf, Mic, Flower2 } from "lucide-react";
import storyImage from "../../assets/file.png";

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

const theme = {
  primary:      "#B55E79",
  primaryLight: "#E6BEC6",
  primarySoft:  "#F4D9DE",
  dark:         "#2E2326",
  muted:        "#5F5358",
  border:       "#E8CDD3",
  bg:           "#FCF8F7"
};

/* ─── Chapter data ───────────────────────────────── */
const CHAPTERS = [
  {
    num: "01", icon: GraduationCap,
    title: "Growing Up in Kanpur",
    sub: "A girl, an education, and a family that believed differently",
    intro: "Growing up in Kanpur, at a time many families believed educating a girl wasn't worth the money. Her mum insisted on an English-medium school anyway; her dad backed that without wavering, and her teachers kept pushing her onto every stage to speak.",
    cards: [
      { heading: "A Different Kind of Upbringing", body: "'Ladki hai, padhane se kya fayda, baad mein rotiyan hi banayegi.' — That's what people around us used to say — she's a girl, why bother educating her, she'll just end up making rotis anyway. But her parents saw something different. Her mother's insistence on English-medium education and her father's quiet support opened doors that many girls in their community never got to walk through." },
      { heading: "Teachers Who Saw More", body: "Her teachers didn't just teach — they pushed her onto every stage, every competition, every chance to speak. They saw a girl who had something to say, and they made sure she had the platform to say it. Those early moments on stage planted a seed that would grow into a lifetime of public speaking and community leadership." },
      { heading: "The Foundation of Everything", body: "Those early lessons — that her voice mattered, that education was non-negotiable, that she could be more than what others expected — became the foundation she would build everything else on. Years later, as she spoke on national stages and led corporate sessions, she carried that same belief with her." },
    ],
    closing: "What began as a girl being told she'd just make rotis became a woman who would change plates across India — one meal, one family, one community at a time.",
  },
  {
    num: "02", icon: Heart,
    title: "The Corporate Career",
    sub: "Computer science, data systems, and a different kind of making",
    intro: "Studying computer science and building data systems for companies like IBM, Target, and AIG — work she's genuinely proud of. Becoming the first girl in her family into an engineering college and the first to work at an MNC.",
    cards: [
      { heading: "Breaking the Engineering Ceiling", body: "She became the first girl in her family to enter an engineering college — a quiet revolution that her parents, especially her mother, had quietly been working toward for years. Computer science, data systems, and the world of technology opened up before her." },
      { heading: "Building Systems for Global Giants", body: "At IBM, Target, and AIG, she built data systems that companies relied on. The analytical rigor, systems thinking, and leadership confidence she developed during those years would prove indispensable when building her own ventures. The skills were different, but the mindset was the same: build something that works." },
      { heading: "A Different Kind of Making", body: "She also married her husband across caste lines — another quiet act of conviction. The corporate career taught her how to build systems; marriage taught her how to build a life that was truly her own. Both would matter." },
    ],
    closing: "'It's a journey, not a goal — compounding beats sparks.' That philosophy, forged in corporate boardrooms and personal choices, would guide everything that came after.",
  },
  {
    num: "03", icon: Leaf,
    title: "Motherhood & Transformation",
    sub: "A small birth, a big reset, and 28 kilos of rediscovery",
    intro: "Her daughter's early, small birth rearranged everything she thought she'd figured out. The real start of paying attention to food, rest, and her own body.",
    cards: [
      { heading: "When Everything Changed", body: "Her daughter's premature birth was a wake-up call that no corporate training could have prepared her for. Suddenly, the systems she'd built for data no longer mattered. What mattered was survival, health, and figuring out how to show up for this tiny new life." },
      { heading: "The 28 Kilo Reset", body: "She lost 28 kilos without ever calling it a diet. It was slower than that — learning to understand her own plate, her own body, her own pace. She didn't fix it with willpower or strict rules. She fixed it by slowly understanding what her body actually needed." },
      { heading: "From Personal to Purpose", body: "What began as a personal struggle for survival transformed into a profound calling. 'If I can lose weight and become healthier following a plant-based lifestyle,' she realized, 'it might help others as well.' That thought became the seed of everything that followed." },
    ],
    closing: "Motherhood made her health personal. That personal journey would become her life's work: bringing plate-level change to Indian families.",
  },
  {
    num: "04", icon: Mic,
    title: "Building KuKClean",
    sub: "From sharing with friends to a certified nutrition practice",
    intro: "Not setting out to build a company — just sharing what was working for her, first with friends, then a growing community, then a certified nutrition practice, then KuKClean itself.",
    cards: [
      { heading: "Sharing What Worked", body: "She didn't start with a business plan. She started by sharing what she'd learned — first with friends, then a growing Facebook community, then a certified nutrition practice. Each step was organic, driven by people who wanted what she'd found." },
      { heading: "Incubation & Institutional Backing", body: "KuKClean was incubated at NSRCEL, IIM Bangalore — where she learned to think like an entrepreneur, not just a founder with a good idea. Goldman Sachs 10,000 Women and ICAR-IIMR's RKVY-RAFTAAR grant followed, validating what she'd built from the ground up." },
      { heading: "Clean Food That Actually Tastes Good", body: "The standards were simple: everything her family would eat. 'You will not find any product on KuKClean that our family does not believe in or does not consume. You have our word.' Clean-label, plant-based Indian gourmet treats that didn't sacrifice a single gram of flavour." },
    ],
    closing: "From a Facebook group to a nationally incubated brand — KuKClean proved that clean food could be delicious, and that a personal mission could become a movement.",
  },
  {
    num: "05", icon: Flower2,
    title: "Founding NotPaused.com",
    sub: "The gap that became a mission",
    intro: "Years into calling herself a nutritionist, she didn't recognize she was living through her own menopause — that gap is exactly why NotPaused exists, so no woman has to figure it out alone.",
    cards: [
      { heading: "The Unrecognized Symptom", body: "Even a certified nutritionist like her wasn't aware that her menopause was hitting — because nobody really talks about it. The cultural silence, the dismissal, the lack of trusted spaces to ask what's happening in your own body — she'd experienced it all herself." },
      { heading: "A Refusal to Accept Silence", body: "NotPaused.com was born as her direct refusal to accept that silence. Menopause is not a pause — it is a comma, a transition, a beginning of a new chapter. The platform would be a community for women to navigate this season together." },
      { heading: "What It Is, What It's Becoming", body: "Today, it's a free community for women navigating this season together. The vision is four pillars: Safe Community, Expert Support, Symptom Tracking, and Trusted Education. A place where no woman has to be the one at 3am with no answers." },
    ],
    closing: "'I built this because I was that woman at 3am with no answers. Now I make sure no Indian woman has to be.'",
  },
];

/* ─── Chapter Nav Pill ───────────────────────────── */
function ChapterPill({ chap, active, onClick }) {
  const Icon = chap.icon;
  return (
    <button
      onClick={() => onClick(chap.num)}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer whitespace-nowrap
        ${active
          ? "text-white shadow-md shadow-[#B55E79]/30 scale-105"
          : "bg-white/70 border border-[#E8CDD3]/60 hover:bg-white"}`}
      style={{
        backgroundColor: active ? theme.primary : "rgba(255,255,255,0.7)",
        color: active ? "white" : theme.muted,
        borderColor: active ? "transparent" : `${theme.border}60`
      }}
    >
      {Icon && <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />}
      <span>Ch {chap.num}</span>
    </button>
  );
}

/* ─── Chapter image placeholder ───────────────── */
function ChapterImageBox({ chap }) {
  const Icon = chap.icon;

  return (
    <aside className="reveal">
      <div
        className="h-full rounded-[2rem] border border-[#E8CDD3]/70 bg-white/80 p-4 shadow-sm"
        style={{ borderColor: `${theme.border}90` }}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] border-2 border-dashed border-[#B55E79]/55 bg-gradient-to-br from-[#F8E9EC] to-white">
          <img
            src={storyImage}
            alt={`${chap.title} chapter`}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2E2326]/65 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-white shadow-md" style={{ backgroundColor: theme.primary }}>
              {Icon && <Icon className="w-7 h-7" strokeWidth={1.5} />}
            </div>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white">Chapter {chap.num}</span>
            <span className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-white/90">Image Story</span>
          </div>
        </div>

        <div className="mt-4 border-t border-[#E8CDD3]/70 pt-4">
          <div className="text-[10px] font-bold tracking-[0.28em] uppercase" style={{ color: theme.primary }}>Story Archive</div>
          <div className="mt-2 font-serif text-sm font-bold leading-snug" style={{ color: theme.dark }}>{chap.title}</div>
        </div>
      </div>
    </aside>
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
      className="reveal shimmer-card bg-white/85 border p-7 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-400 group"
      style={{ 
        borderColor: `${theme.border}60`,
        transitionDelay: `${delay}ms`
      }}
    >
      <h4 
        className="font-serif font-bold text-base mb-3 group-hover:transition-colors"
        style={{ color: theme.dark }}
        onMouseEnter={(e) => e.currentTarget.style.color = theme.primary}
        onMouseLeave={(e) => e.currentTarget.style.color = theme.dark}
      >
        {heading}
      </h4>
      <p className="text-sm font-light leading-relaxed text-justify" style={{ color: theme.muted }}>{body}</p>
    </div>
  );
}

/* ─── Philosophy Section ────────────────────────── */
function PhilosophySection() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); }, { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal max-w-4xl mx-auto space-y-12 mt-16">
      {/* Milestones Section */}
      <div>
        <h3 className="font-serif text-2xl font-bold text-center mb-8" style={{ color: theme.dark }}>
          The Moments That Shaped Me
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 border p-6 rounded-2xl" style={{ borderColor: `${theme.border}60` }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 text-white text-sm font-bold" style={{ backgroundColor: theme.primary }}>1</div>
            <p className="text-sm font-light leading-relaxed" style={{ color: theme.muted }}>
              "The moment health stopped being optional and started being personal — the real start of everything that came after."
            </p>
          </div>
          <div className="bg-white/80 border p-6 rounded-2xl" style={{ borderColor: `${theme.border}60` }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 text-white text-sm font-bold" style={{ backgroundColor: theme.primary }}>2</div>
            <p className="text-sm font-light leading-relaxed" style={{ color: theme.muted }}>
              "Where I learned to think like an entrepreneur, not just a founder with a good idea."
            </p>
          </div>
          <div className="bg-white/80 border p-6 rounded-2xl" style={{ borderColor: `${theme.border}60` }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 text-white text-sm font-bold" style={{ backgroundColor: theme.primary }}>3</div>
            <p className="text-sm font-light leading-relaxed" style={{ color: theme.muted }}>
              "Even as a nutritionist, I didn't see it coming in myself. That gap became a mission."
            </p>
          </div>
        </div>
      </div>

      {/* My Big Why Section */}
      <div className="bg-white/80 border p-8 rounded-3xl" style={{ borderColor: `${theme.border}60` }}>
        <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: theme.dark }}>My Big Why</h3>
        <div className="space-y-4 text-sm font-light leading-relaxed" style={{ color: theme.muted }}>
          <p>
            "I continue to feed her healthy, no matter what — that's the why that keeps me going in this direction, every single day."
          </p>
          <p>
            And why she has so much going at once — coaching, corporate work, two ventures, mentoring: "It's really one calling wearing several different coats. Once that's steady, everything else just finds its own place around it."
          </p>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="text-center space-y-4">
        <p className="font-serif text-lg italic" style={{ color: theme.dark }}>
          "Does this sound like the plot of my next Bollywood movie? Maybe I'll debut at 55."
        </p>
        <p className="text-sm" style={{ color: theme.muted }}>
          If any of this feels like your own story too, let's talk.
        </p>
        <button 
          className="px-8 py-3 rounded-full text-white font-bold text-sm transition-all hover:shadow-lg hover:scale-105"
          style={{ backgroundColor: theme.primary }}
        >
          Start a conversation
        </button>
      </div>
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
    <section 
      id="life-story" 
      className="border-b scroll-mt-20"
      style={{ 
        backgroundColor: theme.bg,
        borderColor: `${theme.border}60`
      }}
    >

      {/* ── HERO BANNER ────────────────────────────── */}
      <div
        className="relative overflow-hidden py-28 px-6 md:px-12 lg:px-20"
        style={{ background: `linear-gradient(135deg, #CF99A6 0%, #B55E79 100%)` }}
      >
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-[-30%] right-[-5%] w-[400px] h-[400px] bg-white/8 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
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
            <span className="font-serif font-bold italic drop-shadow-sm gradient-text-animated">Compounding &amp; Purpose</span>
          </h1>
          <p className="text-white/75 text-base lg:text-lg font-light leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            From computer science to clean food, from corporate data to community care — how one woman's journey became a movement.
          </p>
        </div>
      </div>

      {/* ── STICKY CHAPTER NAV ─────────────────────── */}
      <div 
        className="sticky top-16 z-40 backdrop-blur-md border-b shadow-sm"
        style={{ 
          backgroundColor: `${theme.bg}95`,
          borderColor: `${theme.border}60`
        }}
      >
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
        <div 
          className="reveal max-w-4xl mx-auto bg-white/60 border-l-4 rounded-r-3xl px-8 py-6 shadow-sm"
          style={{ borderColor: theme.primary }}
        >
          <p className="font-serif text-lg lg:text-xl italic leading-relaxed" style={{ color: theme.dark }}>
            "It's a journey, not a goal — compounding beats sparks. Keep going. You have to keep finding your peace and your purpose, because it's all about moving forward in your journey."
          </p>
          <span className="text-xs font-bold uppercase tracking-wider block mt-3" style={{ color: theme.primary }}>— Kirti Yadav</span>
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
            <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div className="flex items-center gap-4">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg timeline-dot flex-shrink-0"
                  style={{ backgroundColor: theme.primary }}
                >
                  {chap.icon && <chap.icon className="w-7 h-7 text-white" strokeWidth={1.5} />}
                </div>
                <div>
                  <span className="block text-[10px] font-bold tracking-[0.3em] uppercase mb-1" style={{ color: theme.primary }}>Chapter {chap.num}</span>
                  <h2 className="font-serif text-2xl lg:text-3xl font-bold tracking-tight leading-tight" style={{ color: theme.dark }}>{chap.title}</h2>
                  <p className="text-xs font-medium tracking-widest uppercase mt-1" style={{ color: theme.muted }}>{chap.sub}</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-1">
                {CHAPTERS.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => scrollToChap(CHAPTERS[i].num)}
                    className={`h-1.5 rounded-full cursor-pointer transition-all duration-500 ${CHAPTERS[i].num === chap.num ? "w-8" : "w-2 hover:opacity-70"}`}
                    style={{
                      backgroundColor: CHAPTERS[i].num === chap.num ? theme.primary : theme.border
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(260px,0.88fr)_minmax(640px,1.12fr)] gap-10 lg:gap-12 mb-10">
              <ChapterImageBox chap={chap} />

              <div className="reveal min-w-0">
                <div
                  className="mb-8 pl-6 border-l-2 rounded-r-xl py-1"
                  style={{ borderColor: theme.primary }}
                >
                  <p className="text-base lg:text-lg font-light leading-relaxed" style={{ color: theme.muted }}>{chap.intro}</p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  {chap.cards.map((card, i) => (
                    <StoryCard key={i} heading={card.heading} body={card.body} delay={i * 120} />
                  ))}
                </div>
              </div>
            </div>

            <div className="reveal max-w-3xl">
              <div 
                className="flex items-start gap-4 border rounded-2xl px-6 py-5 shadow-sm"
                style={{ 
                  backgroundColor: `${theme.primarySoft}60`,
                  borderColor: `${theme.border}60`
                }}
              >
                <span className="text-2xl flex-shrink-0 mt-0.5" style={{ color: theme.primary }}>✦</span>
                <p className="text-sm font-medium leading-relaxed italic" style={{ color: theme.muted }}>{chap.closing}</p>
              </div>
            </div>

            {ci < CHAPTERS.length - 1 && (
              <div className="mt-20 reveal flex items-center gap-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E8CDD3] to-transparent" />
                <div className="w-2 h-2 rounded-full opacity-40 animate-pulse" style={{ backgroundColor: theme.primary }} />
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E8CDD3] to-transparent" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── PHILOSOPHY SECTION ─────────────────────── */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pb-20">
        <PhilosophySection />
      </div>

      {/* ── CLOSING QUOTE BANNER ───────────────────── */}
      <div className="mx-6 md:mx-12 lg:mx-20 mb-20 reveal">
        <div 
          className="relative overflow-hidden rounded-3xl p-12 lg:p-16 text-center shadow-2xl"
          style={{ background: "linear-gradient(135deg, #CF99A6 0%, #B55E79 100%)" }}
        >
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/8 rounded-full blur-2xl" />
          <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-xl" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

          <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
            <span 
              className="text-white text-[9px] font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full inline-block border border-white/20"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              Personal Mantra
            </span>
            <p className="font-serif text-2xl lg:text-3xl text-white italic leading-relaxed">
              "Keep Going. I tell myself that you have to just keep going in a direction, and you have to keep finding your peace and your purpose, because it's all about moving forward in your journey."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-white/40" />
              <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Kirti Yadav · Founder, KuKClean & NotPaused.com</span>
              <div className="w-8 h-px bg-white/40" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}