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
    num: "01", emoji: "💼",
    title: "The Foundation Years",
    sub: "AIG · Target · IBM",
    color: "from-[#A863AD] to-[#8E4C93]",
    accent: "#A863AD",
    intro: "Before Kirti Yadav became a certified holistic nutritionist, a founder, a speaker, or a mentor, she was something far more ordinary and far more valuable: a professional who knew how to think at scale.",
    cards: [
      { heading: "AIG — The Discipline of Precision", body: "At AIG, the global financial powerhouse, Kirti was immersed in risk management and large-scale institutional operations. She developed a discipline of analytical thinking — the ability to look at a problem from ten angles before committing to a single direction. That precision would later inform how she designed product formulations, built unit economics, and structured business plans rigorous enough to pass India's most demanding incubation programmes." },
      { heading: "Target — Understanding People at Scale", body: "Target operates at the intersection of commerce and psychology. Working within that culture, Kirti sharpened her commercial instincts — an intuitive grasp of consumer behaviour, brand positioning, and the mechanics of building something that genuinely connects with people. That insight became the invisible architecture behind every product she would later launch: designed to win in real kitchens, with real families." },
      { heading: "IBM — The Art of Designing Systems", body: "IBM was where systems thinking became a natural language. Kirti learned to see not just the problem in front of her, but the entire ecosystem around it. She does not build products; she builds platforms. Both KuK Clean and notpaused.com are interconnected systems designed to grow, evolve, and serve communities at scale. That thinking was planted at IBM." },
    ],
    closing: "By the time she stepped away from her corporate career, she carried three distinct, complementary forms of intelligence — financial acumen, consumer insight, and systems thinking. She was already, in the most complete sense, prepared for what was coming.",
  },
  {
    num: "02", emoji: "🌱",
    title: "The Turning Point",
    sub: "Motherhood & The Revelation of Nourishment",
    color: "from-[#A863AD] to-[#8E4C93]",
    accent: "#A863AD",
    intro: "The most important pivots in life rarely announce themselves with fanfare. They arrive quietly, wrapped in something personal. For Kirti Yadav, that pivot arrived with the birth of her daughter.",
    cards: [
      { heading: "Standing in Supermarket Aisles", body: "Motherhood changed everything in a deeply practical, visceral way. Kirti found herself turning product labels over and over — reading ingredient lists that seemed designed to confuse rather than inform. Emulsifiers. Artificial flavours. Refined sugars hiding behind nineteen different aliases. A mother's instinct has its own kind of intelligence. Something was deeply wrong with what the Indian food market was offering families trying to make better choices." },
      { heading: "A Personal Health Transformation", body: "During pregnancy, Kirti experienced the physical consequences of a diet not truly nourishing her — significant weight gain, persistent fatigue, digestive discomfort, and nutritional imbalances. She began exploring whole-food, plant-based nutrition not as a trend but as a genuine response to what her body was telling her. The transformation she experienced was profound. Energy returned. Balance was restored. A realisation crystallised: the food she had been eating before was not the food her body had been designed for." },
      { heading: "The Question That Would Not Leave", body: "If she, a well-educated professional with access to information, had been eating in a way that undermined her health — what was happening to millions of Indian families with even fewer tools to navigate the marketplace? That question would not leave her. It would eventually become the foundation of everything she built." },
    ],
    closing: "The discovery was personal, but its implications were vast. The gap between what families were being told was good for them and what genuinely was — that gap became the mission.",
  },
  {
    num: "03", emoji: "🍃",
    title: "Building KuK Clean",
    sub: "A Mother's Refusal to Compromise",
    color: "from-[#A863AD] to-[#8E4C93]",
    accent: "#A863AD",
    intro: "Kirti did not launch KuK Clean with venture capital backing or a dedicated team. She launched it with a conviction born at her own kitchen table and a quality standard established by her daughter's most honest reactions.",
    cards: [
      { heading: "The Non-Negotiable Standard", body: "The rule was simple: if her daughter asked for 'one more', the product was ready. If she was silent, it went back to the kitchen. Co-founded with her husband Akar Misra — whose credentials span Goldman Sachs, JP Morgan, and IBM — KuK Clean was built on twin foundations: nutritional science and genuine deliciousness. Clean, plant-based nutrition is not about deprivation. It is about discovering the extraordinary flavour that real, unprocessed ingredients produce when treated with knowledge." },
      { heading: "The Unglamorous Early Days", body: "Kirti wore every hat the business required — founder, nutritionist, recipe developer, quality curator, and in the most literal sense, delivery person. She drove across Bangalore personally delivering products, building a relationship with every customer. Every delivery was a conversation. Every feedback was data. Every satisfied customer confirmed that the gap she had identified was real and that what she was creating was genuinely filling it." },
      { heading: "Growth Built on Trust", body: "The product range grew deliberately: healthy Indian sweets without refined sugar or dairy; stone-ground nut butters preserving natural oils; baked snacks as real alternatives to deep-fried snacking; millet-based cereals bringing ancient grains into modern mornings. What KuK Clean did not do was equally important — it never compromised on ingredient transparency. The business grew entirely through word of mouth. Growth came because the products delivered what they promised." },
    ],
    closing: "No advertising. No purchased influence. Just trust, earned one product and one conversation at a time.",
  },
  {
    num: "04", emoji: "📢",
    title: "The Pandemic as Accelerant",
    sub: "#EatLikeKirti · Leading with Generosity",
    color: "from-[#A863AD] to-[#8E4C93]",
    accent: "#A863AD",
    intro: "When COVID-19 brought India to a standstill in March 2020, many businesses retreated into survival mode. Kirti Yadav moved in the opposite direction.",
    cards: [
      { heading: "21 Days, 21 Live Sessions", body: "She launched the #EatLikeKirti initiative — twenty-one consecutive days of live social media sessions on whole-food, plant-based nutrition. Every day, she showed up. She cooked, explained, answered questions, and debunked myths. She hosted ten interactive webinars in those twenty-one days — teaching people not just what to eat but how to think about food, how to read labels, and how to cook in ways that preserved nutrition without sacrificing taste." },
      { heading: "A Nation Cooking Differently", body: "The response was extraordinary. Households across India began cooking differently. Community members started sharing their transformations in real time — photographs of meals, messages about energy changes, accounts of children eating vegetables for the first time. This moment established, publicly and irrefutably, what kind of leader Kirti was: she did not retreat to safety when the world became uncertain. She moved toward people." },
      { heading: "National Media Recognition", body: "India Today published a feature on KuK Clean. Bangalore Insider profiled her story of navigating the crisis. And Shradha Sharma, founder of YourStory — India's most influential startup media platform — invited her to tell her story. These were signals that the conversation Kirti was trying to start was resonating far beyond Bangalore. The country was ready for what she was offering." },
    ],
    closing: "Lead with generosity. Lead with knowledge. Lead without fear. That posture — forged during lockdown — became the founding philosophy of everything she built going forward.",
  },
  {
    num: "05", emoji: "🏆",
    title: "Institutional Validation",
    sub: "Goldman Sachs · IIMR · Awards · National Recognition",
    color: "from-[#A863AD] to-[#8E4C93]",
    accent: "#A863AD",
    intro: "Great ideas must eventually meet rigorous scrutiny. Kirti Yadav welcomed that scrutiny, and it found her entirely prepared.",
    cards: [
      { heading: "Goldman Sachs GS10K — IIM Bangalore", body: "Her selection for the Goldman Sachs 10,000 Women Entrepreneur Program at NSRCEL, IIM Bangalore, signalled that what she had built from her kitchen table was institutionally credible. The GS10K programme is among India's most selective entrepreneurship initiatives. It gave her access to mentorship, a global women's network, and strategic frameworks for sustainable scaling — and the confidence to operate at a different level." },
      { heading: "ICAR-IIMR Government Grant", body: "The Grant-in-Aid under RKVY-RAFTAAR from the Indian Institute of Millets Research — celebrated at the International Nutri Cereal Convention 5.0 in Hyderabad during the UN International Year of Millets — confirmed that KuK Clean's millet work was not just entrepreneurially sound, but agriculturally, scientifically, and nationally relevant. An incubatee at Nutrihub, positioned at the precise intersection of agritech innovation and consumer health." },
      { heading: "Awards, Stages & Jury Roles", body: "The Womenpreneur Achievers Award 2024 placed her among Karnataka's most distinguished women leaders. She spoke at the ASSOCHAM Rajasthan Startup Summit. She was nationally selected to pitch at the Women Leadership Conclave before diplomats and academics. And at CAIAS, having won the Best Women-Led Startup Award, she was invited back — as jury member. From winner to judge: the entire arc of her journey, captured in miniature." },
    ],
    closing: "Every recognition connects to the same mission. Together, they form not a list of accomplishments, but a narrative of systemic credibility.",
  },
  {
    num: "06", emoji: "🌸",
    title: "The Birth of notpaused.com",
    sub: "Dismantling the Last Great Taboo in Indian Women's Health",
    color: "from-[#A863AD] to-[#8E4C93]",
    accent: "#A863AD",
    intro: "There are problems invisible not because they are small, but because the silence around them has been so thoroughly normalised that even the people experiencing them believe they must endure in private.",
    cards: [
      { heading: "A Trained Nutritionist, Unprepared", body: "When Kirti began her own perimenopause journey, she found a startling absence of India-specific, culturally relevant information. Even she, with all her training and resources, was unprepared. That experience was galvanising. If a trained nutritionist could feel lost, what was happening to the sixty-five million Indian women navigating this transition with none of those advantages? Three out of four would receive no adequate guidance whatsoever." },
      { heading: "A Declaration, Not Just a Platform", body: "notpaused.com was born from a refusal to accept that silence. The name itself is a statement of intent: menopause is not a pause — not an ending or a retreat from life. It is a comma; a breath before the most liberated chapter of a woman's existence. The platform was designed to provide what the market entirely failed to offer: honest, evidence-based, India-specific knowledge, delivered through WhatsApp — the format Indian women actually use — wrapped in community that is warm and non-judgmental." },
      { heading: "Three Verticals, One Mission", body: "For individual women: personalised consultations, group guidance, and WhatsApp city chapters across Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, and Ahmedabad. For corporates: menopause-at-work programmes addressing a critical gap in women's professional support. For schools: building health-literate institutions where women's health is spoken about honestly, with knowledge, and without shame. Every service connects to the same thread: no Indian woman navigates this alone." },
    ],
    closing: "\"I built this because I was that woman at 3am with no answers. Now I make sure no Indian woman has to be.\" — Kirti Yadav",
  },
  {
    num: "07", emoji: "🤝",
    title: "The Mentor, the Speaker, the Voice",
    sub: "Giving Back Without Calculation",
    color: "from-[#A863AD] to-[#8E4C93]",
    accent: "#A863AD",
    intro: "Alongside everything she was building, Kirti was also giving. Not strategically, not for the recognition it might generate, but because she understood — from her own journey — how much it matters to have someone extend a hand.",
    cards: [
      { heading: "Educating the Next Generation of Founders", body: "She served as guest speaker at ISBR Business School, sharing unfiltered entrepreneurship lessons with students beginning to think about building something of their own. She was invited to mentor at Incube Nation, where early-stage founders need guidance that is not just strategic but deeply human — the candid, contextual wisdom that business school curricula often leave out." },
      { heading: "Health Literacy from the Earliest Years", body: "She conducted nutrition and wellness sessions at EuroKids, Advaya Shaale, and Prakriti — institutions committed to holistic child development — and designed specialised child diet plans at Junior Toes. Kirti's conviction is that health literacy, like language, must be introduced in formative years. A child who learns to understand food grows into an adult who makes better choices not out of willpower but out of genuine understanding." },
      { heading: "Corporate Wellness — Proof of Concept", body: "The Applied Materials India session — a two-hour programme on plant-based nutrition for 180 employees — produced one of the most memorable responses of her career: 'If we get to eat like this every day, we're more than happy to switch.' It proved what she had always believed: the barrier to healthy eating is almost never desire. It is access and knowledge. Given the right information and the right experience, people choose well. Always." },
    ],
    closing: "Building, earning, and then giving back. That is the rhythm of a life lived with purpose rather than calculation.",
  },
  {
    num: "08", emoji: "🌍",
    title: "A Vision for Generations",
    sub: "Building for Generations, Not Quarters",
    color: "from-[#A863AD] to-[#8E4C93]",
    accent: "#A863AD",
    intro: "Kirti Yadav does not think in quarters. She thinks in generations. The ambition beneath everything she has built is institutional health — systemic, lasting, and accessible to all.",
    cards: [
      { heading: "KuK Clean — National Scale", body: "Expanding plant-based, clean-label product ranges and establishing deep corporate B2B wellness systems that bring genuine nutrition into the workplace as a structural benefit rather than an occasional initiative. The goal is not market share — it is to change what Indian families consider normal when it comes to food." },
      { heading: "notpaused.com — A National Ecosystem", body: "A community of 100,000 women active in WhatsApp networks. India's most comprehensive menopause knowledge base. A curated panel of 50+ verified Indian doctors available for teleconsultation. City chapters across India. Corporate and school programme integrations. The architecture of a platform that will outlast any single campaign or trend." },
      { heading: "The Ambition Beneath the Ambition", body: "Every Indian child with access to clean food. Every Indian woman entering midlife with the knowledge, the confidence, and the community she needs to thrive. These are not modest goals — they are the goals of someone who has looked at what is possible and decided that the possible is not enough. She did not build a brand. She built a life, and she shared it." },
    ],
    closing: "The integration of personal experience and professional identity is the source of everything real about what Kirti Yadav has created.",
  },
];

/* ─── Chapter Nav Pill ───────────────────────────── */
function ChapterPill({ chap, active, onClick }) {
  return (
    <button
      onClick={() => onClick(chap.num)}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer whitespace-nowrap
        ${active
          ? "bg-[#A863AD] text-white shadow-md shadow-[#A863AD]/30 scale-105"
          : "bg-white/70 text-[#6F6476] border border-[#E5DCE8]/60 hover:bg-white hover:text-[#A863AD]"}`}
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
      className="reveal shimmer-card bg-white/85 border border-[#E5DCE8]/60 p-7 rounded-3xl shadow-sm hover:shadow-lg hover:border-[#A863AD]/30 hover:-translate-y-1 transition-all duration-400 group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h4 className="font-serif font-bold text-[#2E2433] text-base mb-3 group-hover:text-[#A863AD] transition-colors">{heading}</h4>
      <p className="text-[#6F6476] text-sm font-light leading-relaxed text-justify">{body}</p>
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
    <section id="life-story" className="bg-[#FAF8FB] border-b border-[#E5DCE8]/60 scroll-mt-20">

      {/* ── HERO BANNER ────────────────────────────── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#A863AD] via-[#8E4C93] to-[#7F4484] py-28 px-6 md:px-12 lg:px-20">
        {/* Animated blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-[-30%] right-[-5%] w-[400px] h-[400px] bg-white/8 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        {/* Dotted grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="relative z-10 max-w-5xl">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
              Life Story
            </div>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Chapters of Purpose <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-purple-200 animate-text-gradient">and Evolution</span>
          </h1>
          <p className="text-white/75 text-base lg:text-lg font-light leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            From Fortune 500 boardrooms to a kitchen table in Bangalore — the story of how one woman's questions became two platforms, a movement, and a mission that continues to grow.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-12 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            {[["9", "Chapters"], ["2", "Brands Founded"], ["10+", "Years of Impact"]].map(([n, l]) => (
              <div key={l}>
                <span className="font-serif text-3xl font-bold text-white block">{n}</span>
                <span className="text-white/60 text-xs uppercase tracking-widest">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── STICKY CHAPTER NAV ─────────────────────── */}
      <div className="sticky top-20 z-40 bg-[#FAF8FB]/95 backdrop-blur-md border-b border-[#E5DCE8]/60 shadow-sm">
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
        <div className="reveal max-w-4xl mx-auto bg-white/60 border-l-4 border-[#A863AD] rounded-r-3xl px-8 py-6 shadow-sm">
          <p className="font-serif text-lg lg:text-xl italic text-[#2E2433] leading-relaxed">
            "There is a certain kind of person who does not simply adapt to the world as it is. Instead, they keep asking whether it could be better — better food, better knowledge, better care for the people they love. Kirti Yadav is that kind of person."
          </p>
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
                  <h2 className="font-serif text-2xl lg:text-3xl text-[#2E2433] font-bold tracking-tight leading-tight">{chap.title}</h2>
                  <p className="text-[#6F6476] text-xs font-medium tracking-widest uppercase mt-1">{chap.sub}</p>
                </div>
              </div>
              {/* Chapter progress indicator */}
              <div className="hidden md:flex items-center gap-1">
                {CHAPTERS.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => scrollToChap(CHAPTERS[i].num)}
                    className={`h-1.5 rounded-full cursor-pointer transition-all duration-500 ${CHAPTERS[i].num === chap.num ? "w-8 bg-[#A863AD]" : "w-2 bg-[#E5DCE8] hover:bg-[#A863AD]/50"}`}
                  />
                ))}
              </div>
            </div>

            {/* Intro paragraph with gradient left border */}
            <div
              className="reveal mb-10 pl-6 border-l-2 rounded-r-xl py-1"
              style={{ borderColor: chap.accent }}
            >
              <p className="text-[#6F6476] text-base lg:text-lg font-light leading-relaxed">{chap.intro}</p>
            </div>

            {/* Story cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {chap.cards.map((card, i) => (
                <StoryCard key={i} heading={card.heading} body={card.body} delay={i * 120} />
              ))}
            </div>

            {/* Closing line */}
            <div className="reveal max-w-3xl">
              <div className="flex items-start gap-4 bg-gradient-to-r from-stone-50 to-white/60 border border-[#E5DCE8]/60 rounded-2xl px-6 py-5 shadow-sm">
                <span className="text-2xl flex-shrink-0 mt-0.5">✦</span>
                <p className="text-[#6F6476] text-sm font-medium leading-relaxed italic">{chap.closing}</p>
              </div>
            </div>

            {/* Divider — not after last */}
            {ci < CHAPTERS.length - 1 && (
              <div className="mt-20 reveal flex items-center gap-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E5DCE8] to-transparent" />
                <div className="w-2 h-2 rounded-full bg-[#A863AD] opacity-40 animate-pulse" />
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E5DCE8] to-transparent" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── PHILOSOPHY CARDS (Ch 08 embeds these inline above; keep as standalone) ── */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pb-20">
        <div className="reveal text-center mb-12">
          <div className="inline-block border-t-[3px] border-[#A863AD] pt-2 mb-4">
            <span className="text-[#A863AD] font-bold text-sm tracking-[0.2em] uppercase">Three Convictions That Organise an Entire Life</span>
          </div>
          <h3 className="font-serif text-2xl lg:text-3xl text-[#2E2433] font-bold">A Philosophy Lived Out Loud</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { n: "01", title: "Health is a Daily Practice", body: "Health is not a destination reached through shortcuts. It is the accumulation of thousands of small, conscious choices — what you put into your body, how you move, how you rest. There are no shortcuts, and Kirti has never pretended otherwise." },
            { n: "02", title: "Clean-Label Integrity is Non-Negotiable", body: "Every product on KuK Clean, without exception, is something her family eats. This is not a marketing claim — it is the operational standard every product must meet before it reaches a customer. In a market full of wellness veneer, this commitment is both radical and refreshing." },
            { n: "03", title: "Empathy is a Core Competency", body: "Meeting people where they are — without judgment, without prescription — is the animating principle of both her platforms. Whether it is a woman navigating her first menopause symptom or a professional trying to eat better: begin with warmth, build with knowledge." },
          ].map((p, i) => (
            <div
              key={i}
              className="reveal shimmer-card bg-white/80 border border-[#E5DCE8]/60 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-[#A863AD]/30 hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full chapter-tag-gradient flex items-center justify-center text-white font-bold text-sm mb-4 shadow-md">{p.n}</div>
              <h4 className="font-serif font-bold text-[#2E2433] text-lg mb-3">{p.title}</h4>
              <p className="text-[#6F6476] text-sm font-light leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CLOSING QUOTE BANNER ───────────────────── */}
      <div className="mx-6 md:mx-12 lg:mx-20 mb-20 reveal">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#A863AD] via-[#8E4C93] to-[#7F4484] p-12 lg:p-16 text-center shadow-2xl">
          {/* decorative blobs */}
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/8 rounded-full blur-2xl" />
          <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-xl" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

          <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
            <span className="bg-white/15 text-white text-[9px] font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full inline-block border border-white/20">
              Core Ethos
            </span>
            <p className="font-serif text-2xl lg:text-3xl text-white italic leading-relaxed">
              "I have always believed that the most important things in life — food, health, community — should be accessible to everyone. That is the thread that runs through everything I have built."
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
