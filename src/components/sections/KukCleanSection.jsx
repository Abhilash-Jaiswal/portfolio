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

const products = [
  { icon: "🍬", grad: "from-pink-400 to-rose-500", title: "Healthy Indian Sweets", desc: "Traditional laddus, bars, bites & festive treats — 100% plant-based, no refined sugar, no dairy. Reimagined for the modern Indian family without sacrificing a single gram of flavour." },
  { icon: "🥨", grad: "from-amber-400 to-orange-500", title: "Healthy Snacks", desc: "Baked and slow-roasted alternatives to deep-fried, sodium-laden Indian snacking. Crunch without compromise — designed for the desk, the commute, and the classroom." },
  { icon: "🥜", grad: "from-emerald-400 to-teal-500", title: "Dips, Spreads & Nut Butters", desc: "Stone-ground to preserve natural oils and micronutrients that commercial processing destroys. Real ingredients. Nothing hidden." },
  { icon: "🥣", grad: "from-violet-400 to-purple-600", title: "Breakfast Cereals", desc: "Millet and whole-grain options bringing the nutritional power of ancient grains into modern mornings. A clean, energising start — every single day." },
  { icon: "🎁", grad: "from-fuchsia-400 to-pink-600", title: "Gifting & Travel Ranges", desc: "Thoughtfully packaged hampers and travel-friendly portions — clean eating on the road or as a meaningful gift that actually reflects your values." },
];

const audience = [
  { icon: "👨‍👩‍👧", grad: "from-pink-400 to-rose-500", title: "Health-Conscious Indian Families", desc: "Especially mothers making food decisions for their children — seeking nutrient-dense, transparent alternatives to what the supermarket offers." },
  { icon: "🌱", grad: "from-emerald-400 to-teal-500", title: "Vegan & Plant-Based Community", desc: "A rapidly growing, underserved demographic seeking genuine 100% plant-based, clean-label foods that don't compromise on taste or culture." },
  { icon: "🏃‍♀️", grad: "from-amber-400 to-orange-500", title: "Fitness & Wellness Practitioners", desc: "Those who deeply understand the food-performance relationship and require clean, uncompromised fuel — before, during, and after training." },
  { icon: "❤️", grad: "from-red-400 to-rose-600", title: "Lifestyle Disease Management", desc: "Individuals managing diabetes, obesity, cardiovascular health, and hypertension through food choices — not just pharmaceuticals." },
  { icon: "🌏", grad: "from-indigo-400 to-blue-600", title: "Diaspora & NRI Communities", desc: "Seeking authentic Indian tastes made with uncompromised, clean, premium ingredients that honour both culture and health." },
];

const b2bVerticals = [
  { num: "01", icon: "🏢", title: "Corporate Wellness", desc: "Multi-session plant-based nutrition programmes and cafeteria transformation consulting for large organisations — integrating clean eating into the workplace as a structural benefit." },
  { num: "02", icon: "🧘‍♀️", title: "Individual Wellness", desc: "Personalised programmes covering weight management, lifestyle disease reversal, and menopause nutrition — built around each person's body, background, and goals." },
  { num: "03", icon: "🏫", title: "School Wellness", desc: "Nutrition education programmes designed to build health literacy in children from the earliest years — partnered with EuroKids, Advaya Shaale, and Prakriti." },
  { num: "04", icon: "☕", title: "Cafe & F&B Consulting", desc: "Clean-label menu development and product consulting for cafes and food companies seeking to build genuinely healthy, genuinely delicious offerings." },
];

export function KukCleanSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="kuk-clean" ref={ref} className="bg-[#F7ECF2] border-b border-stone-200/60 scroll-mt-20">

      {/* ── HERO BANNER ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-[#A054A6] py-28 px-6 md:px-12 lg:px-20">
        <div className="absolute -top-24 -right-16 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -left-10 w-80 h-80 bg-white/8 rounded-full blur-2xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 max-w-5xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
            KuK Clean Wellness
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1] mb-6">
            Consciously Nourishing. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-200 to-teal-200 animate-text-gradient">Unapologetically Delicious.</span>
          </h1>
          <p className="text-white/75 text-base lg:text-lg font-light leading-relaxed max-w-2xl">
            Born in a kitchen. Validated by a daughter's honest reaction. Recognised by the Government of India. KuK Clean is proof that clean food and extraordinary taste are not opposites.
          </p>
          <div className="flex flex-wrap gap-8 mt-12">
            {[["5", "Product Lines"], ["B2B", "Corporate Wellness"], ["IIMR", "Govt Recognised"], ["100%", "Plant-Based"]].map(([n, l]) => (
              <div key={l}>
                <span className="font-serif text-3xl font-bold text-white block">{n}</span>
                <span className="text-white/60 text-xs uppercase tracking-widest">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 space-y-20">

        {/* Opening Pull Quote */}
        <div className="reveal max-w-4xl mx-auto bg-white/60 border-l-4 border-emerald-500 rounded-r-3xl px-8 py-6 shadow-sm">
          <p className="font-serif text-lg italic text-stone-800 leading-relaxed">
            "KuK Clean was not conceived in a boardroom. It was born in a kitchen, driven by a mother's refusal to accept what the market was offering her family."
          </p>
        </div>

        {/* Ch 01 — The Kitchen Standard */}
        <div className="space-y-8">
          <div className="reveal flex flex-col md:flex-row md:items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-lg timeline-dot flex-shrink-0">
              <span className="text-2xl">🍽️</span>
            </div>
            <div>
              <span className="block text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-1">Chapter 01</span>
              <h2 className="font-serif text-2xl lg:text-3xl text-stone-900 font-bold">The Kitchen Standard</h2>
              <p className="text-stone-500 text-xs font-medium tracking-widest uppercase mt-1">How KuK Clean's quality was defined — one daughter's reaction at a time</p>
            </div>
          </div>
          <div className="reveal pl-6 border-l-2 border-rose-400 rounded-r-xl">
            <p className="text-stone-700 text-base font-light leading-relaxed">
              The quality standard at KuK Clean is simple, human, and entirely non-negotiable. Kirti's daughter is the ultimate taste-tester. If she asks for one more, the product is ready. If she is silent, it goes back to the kitchen. No metric, no market research, no focus group has ever overruled that standard. This is the operational philosophy of a brand that decided, from day one, that its integrity would not be negotiated away for commercial convenience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="reveal shimmer-card bg-white/80 border border-stone-200/60 p-7 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#A054A6]/30 transition-all duration-300">
              <h4 className="font-serif font-bold text-stone-900 text-base mb-3 hover:text-[#A054A6]">The Unglamorous Early Days</h4>
              <p className="text-stone-600 text-sm font-light leading-relaxed text-justify">
                In the early days, Kirti was the entire operation — recipe developer, quality curator, and in the most literal sense, delivery person. She drove across Bangalore delivering products personally, building relationships one conversation at a time. Every customer became a relationship, every relationship a feedback loop that made the products better.
              </p>
            </div>
            <div className="reveal shimmer-card bg-white/80 border border-stone-200/60 p-7 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#A054A6]/30 transition-all duration-300" style={{ transitionDelay: "100ms" }}>
              <h4 className="font-serif font-bold text-stone-900 text-base mb-3">Growth Built on Trust</h4>
              <p className="text-stone-600 text-sm font-light leading-relaxed text-justify">
                The business grew without advertising. Without paid influencer endorsements. It grew because the products worked — because families who tried them found that clean, plant-based food could be genuinely satisfying, and a brand whose founder answers her own WhatsApp messages is a brand that can be trusted.
              </p>
            </div>
          </div>
        </div>

        {/* Ch 02 — Agritech */}
        <div className="space-y-8">
          <div className="reveal flex flex-col md:flex-row md:items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-lg timeline-dot flex-shrink-0">
              <span className="text-2xl">🌾</span>
            </div>
            <div>
              <span className="block text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-600 mb-1">Chapter 02</span>
              <h2 className="font-serif text-2xl lg:text-3xl text-stone-900 font-bold">Millets, Science & National Recognition</h2>
              <p className="text-stone-500 text-xs font-medium tracking-widest uppercase mt-1">From kitchen innovation to government-recognised agritech — ICAR-IIMR & Nutrihub</p>
            </div>
          </div>
          <div className="reveal pl-6 border-l-2 border-emerald-500 rounded-r-xl">
            <p className="text-stone-700 text-base font-light leading-relaxed">
              KuK Clean's pioneering work in bringing millets into modern, clean-label, consumer-friendly products attracted the attention of ICAR-IIMR — the Indian Institute of Millets Research, operating under the Ministry of Agriculture and Farmers' Welfare. KuK Clean was awarded a Grant-in-Aid under the RKVY-RAFTAAR programme, with recognition celebrated at the International Nutri Cereal Convention 5.0 in Hyderabad during the United Nations International Year of Millets.
            </p>
          </div>
          <div className="reveal bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/60 rounded-3xl p-8">
            <p className="text-stone-700 text-sm font-light leading-relaxed text-justify">
              This recognition positioned KuK Clean not merely as a consumer food brand, but as a contributor to India's agricultural and nutritional future. The incubation at Nutrihub ICAR-IIMR gave the brand access to cutting-edge food science resources, research partnerships, and a national network of agritech innovators. It confirmed what Kirti had believed from the beginning: that the intersection of ancient nutritional wisdom and modern food science is where the future of Indian food lives.
            </p>
          </div>
        </div>

        {/* Founder Promise Banner */}
        <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-[#A054A6] p-10 lg:p-12 shadow-xl">
          <div className="absolute -right-10 -bottom-10 w-56 h-56 bg-white/8 rounded-full blur-2xl" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="relative z-10 space-y-4">
            <span className="bg-white/15 border border-white/20 text-white text-[9px] font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full inline-block">Founders' Promise</span>
            <p className="font-serif text-xl lg:text-2xl italic text-white leading-relaxed max-w-3xl">
              "You will not find any product on KuK Clean that our family does not believe in or does not consume. You have our word."
            </p>
            <span className="text-white/80 text-sm font-bold uppercase tracking-wider block">— Kirti Yadav & Akar Misra, Founders</span>
          </div>
        </div>

        {/* Ch 03 — B2B */}
        <div className="space-y-8">
          <div className="reveal flex flex-col md:flex-row md:items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-lg timeline-dot flex-shrink-0">
              <span className="text-2xl">🏢</span>
            </div>
            <div>
              <span className="block text-[10px] font-bold tracking-[0.3em] uppercase text-violet-500 mb-1">Chapter 03</span>
              <h2 className="font-serif text-2xl lg:text-3xl text-stone-900 font-bold">Corporate Wellness & B2B Consulting</h2>
              <p className="text-stone-500 text-xs font-medium tracking-widest uppercase mt-1">Taking clean nutrition into boardrooms, cafeterias, and institutions</p>
            </div>
          </div>
          <div className="reveal pl-6 border-l-2 border-violet-400 rounded-r-xl">
            <p className="text-stone-700 text-base font-light leading-relaxed">
              The 2022 corporate wellness session at Applied Materials India — a two-hour programme on plant-based nutrition delivered to 180 employees — became one of the clearest validations of this opportunity. The feedback was unambiguous: "If we get to eat like this every day, we're more than happy to switch." The barrier to healthy eating is almost never desire. It is access and knowledge.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {b2bVerticals.map((v, i) => (
              <div key={i} className="reveal shimmer-card bg-white/80 border border-stone-200/60 p-6 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-violet-300/50 transition-all duration-300 space-y-3" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-10 h-10 rounded-full chapter-tag-gradient flex items-center justify-center text-lg">{v.icon}</div>
                <span className="text-[10px] font-bold tracking-widest text-violet-500 uppercase block">Vertical {v.num}</span>
                <h4 className="font-serif font-bold text-stone-900 text-sm">{v.title}</h4>
                <p className="text-stone-600 text-xs font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Product Range */}
        <div>
          <div className="reveal text-center mb-10">
            <div className="inline-block border-t-[3px] border-emerald-500 pt-2 mb-4">
              <span className="text-emerald-600 font-bold text-sm tracking-[0.2em] uppercase">Product Portfolio</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl text-stone-900 font-bold">Five Lines, One Standard</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {products.map((p, i) => (
              <div key={i} className="reveal shimmer-card bg-white/80 border border-stone-200/60 p-7 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#A054A6]/30 transition-all duration-300 space-y-4" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.grad} flex items-center justify-center shadow-md text-xl timeline-dot`}>{p.icon}</div>
                <h4 className="font-serif font-bold text-stone-900 text-sm">{p.title}</h4>
                <p className="text-stone-600 text-xs font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Audience */}
        <div>
          <div className="reveal text-center mb-10">
            <div className="inline-block border-t-[3px] border-[#A054A6] pt-2 mb-4">
              <span className="text-[#A054A6] font-bold text-sm tracking-[0.2em] uppercase">Target Audience</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl text-stone-900 font-bold">Who KuK Clean is For</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {audience.map((a, i) => (
              <div key={i} className="reveal shimmer-card bg-white/80 border border-stone-200/60 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#A054A6]/30 transition-all duration-300 space-y-3" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${a.grad} flex items-center justify-center shadow-md text-xl`}>{a.icon}</div>
                <h4 className="font-serif font-bold text-stone-900 text-sm">{a.title}</h4>
                <p className="text-stone-600 text-xs font-light leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Quote Banner */}
        <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#A054A6] via-[#7c3aed] to-emerald-700 p-10 lg:p-14 text-center shadow-2xl">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/8 rounded-full blur-2xl" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="relative z-10 space-y-5 max-w-4xl mx-auto">
            <span className="bg-white/15 border border-white/20 text-white text-[9px] font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full inline-block">The Vision for KuK Clean</span>
            <p className="font-serif text-2xl lg:text-3xl italic text-white leading-relaxed">
              "I built KuK Clean because my daughter deserved better than what the market was offering. Every product we make begins and ends with that standard."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-white/40" />
              <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Kirti Yadav, Founder · KuK Clean Wellness</span>
              <div className="w-8 h-px bg-white/40" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
