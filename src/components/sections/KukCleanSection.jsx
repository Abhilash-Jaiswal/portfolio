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

// Theme colors
const theme = {
  primary: "#b76e4a",      // terracotta
  primaryLight: "#d9b094",
  primarySoft: "#f5ede8",
  dark: "#2d2a24",
  muted: "#4a453e",
  border: "#e8e0d8",
  bg: "#fcf9f6"
};

const products = [
  { icon: "🍬", title: "Organic Ragi & Almond Laddus", desc: "Organic, gluten-free, calcium-rich Ragi Laddus & Kashmiri Almond Protein Laddus with roasted Bengal gram and jaggery powder. No refined sugar, no dairy." },
  { icon: "🌴", title: "Date Bites & Sugar-Free Treats", desc: "Premium Arabic dates blended with cashews, almonds, pumpkin seeds, dried figs, and aromatic spices (cardamom & cloves)." },
  { icon: "🥨", title: "Baked Mathri & Millet Chivda", desc: "Baked Ajwain Whole Wheat Mathri & Roasted Jowar Chivda — wholesome, low-sodium, non-fried alternatives for guilt-free crunch." },
  { icon: "🥜", title: "Stone-Ground Nut Butters & Dips", desc: "Slow stone-ground to preserve natural micronutrients and healthy oils that high-heat industrial processing destroys. 100% clean label." },
  { icon: "🎁", title: "Artisanal Gift Hampers", desc: "KuKClean Wholesome, Sweet n Savour, and Healthy Nibbles gift hampers — handmade with customized packaging for corporate & festive gifting." },
];

const b2bFocus = [
  { num: "01", icon: "🍱", title: "Corporate Thalis & Canteen Supply", desc: "Supplying artisanal clean-label laddus directly to corporate canteens and caterers as part of daily corporate Thalis (meal trays)." },
  { num: "02", icon: "☕", title: "Cafe Menu Consulting & Supply", desc: "Partnering directly with cafes to supply stone-ground nut butters and consult on clean-label, plant-based menu redesigns." },
  { num: "03", icon: "🛍️", title: "Direct-to-Consumer & Bulk Gifting", desc: "Direct sales via kukclean.com plus bespoke onboarding and festival hampers for corporate clients (Cisco, Biocon, Loyalytics.ai)." },
  { num: "04", icon: "👩‍🍳", title: "Empowering Women Artisans", desc: "Every batch is handcrafted by a dedicated production team that employs women from economically disadvantaged backgrounds." },
];

const saladFormulaBlocks = [
  { step: "1. Base", text: "Spinach, Fenugreek, Cabbage, Sprouted Mung, Millets (Pearl/Sorghum/Finger), Raw Papaya, Cucumber, Amaranth Leaves, Sweet Potato, Red Cabbage, Foxtail Millet, Sprouted Chickpeas." },
  { step: "2. Protein", text: "Chickpeas, Kidney Beans, Green Peas, Tofu, Peanuts, Black-Eyed Peas, Soya Chunks, Red Lentils, Moth Beans, Horse Gram, Black Gram, Split Mung Beans, Edamame." },
  { step: "3. Crunch", text: "Sesame Seeds, Fox Nuts (Makhana), Roasted Chickpeas, Pumpkin Seeds, Flax Seeds, Roasted Peanuts, Cashews, Almonds, Watermelon Seeds, Sunflower Seeds, Chironji, Walnuts." },
  { step: "4. Color & Freshness", text: "Beetroot, Pomegranate, Carrot, Raw Mango, Mint, Coriander, Curry Leaves, Tomato, Bell Pepper, Red Onion, Radish, Indian Gooseberry (Amla), Basil, Spring Onion." },
  { step: "5. Dressing", text: "Lemon, Mustard Oil, Sesame Oil, Ginger-Garlic, Cumin Powder, Black Salt, Jaggery, Tamarind, Chaat Masala, Groundnut Oil, Carom Seeds (Ajwain), Amchur, Coconut Oil." },
];

export function KukCleanSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section 
      id="kuk-clean" 
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
        style={{ backgroundColor: theme.primary }}
      >
        <div className="absolute -top-24 -right-16 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -left-10 w-80 h-80 bg-white/8 rounded-full blur-2xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 max-w-5xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
            KuKClean Foods & Consulting
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1] mb-6">
            Kitchen You. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d9b094] to-[#f5ede8] animate-text-gradient">Consciously Nourishing.</span>
          </h1>
          <p className="text-white/75 text-base lg:text-lg font-light leading-relaxed max-w-2xl">
            Born in Kirti's kitchen. Incubated at IIM Bangalore and ICAR-IIMR NutriHub. KuKClean is proof that clean, plant-based food and extraordinary Indian taste belong together.
          </p>
          <div className="flex flex-wrap gap-8 mt-12">
            {[["₹14 Lakhs", "First 7 Mo Revenue"], ["IIMB WSP3", "Top 50 Venture"], ["ICAR-IIMR", "Govt Grant"], ["1M Plates", "Goal by 2030"]].map(([n, l]) => (
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
        <div 
          className="reveal max-w-4xl mx-auto bg-white/60 border-l-4 rounded-r-3xl px-8 py-6 shadow-sm"
          style={{ borderColor: theme.primary }}
        >
          <p className="font-serif text-lg italic leading-relaxed" style={{ color: theme.dark }}>
            "KuKClean stands for 'Kitchen' (KuK) + 'Clean', doubling as 'Kitchen, You'. In my kitchen, I teach you how to cook clean. Food should give you pleasure, not guilt."
          </p>
          <span className="text-xs font-bold uppercase tracking-wider block mt-3" style={{ color: theme.primary }}>— Kirti Yadav, Founder</span>
        </div>

        {/* Ch 01 — Origin & The Kitchen Standard */}
        <div className="space-y-8">
          <div className="reveal flex flex-col md:flex-row md:items-center gap-4">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg timeline-dot flex-shrink-0 text-white"
              style={{ backgroundColor: theme.primary }}
            >
              <span className="text-2xl">🍽️</span>
            </div>
            <div>
              <span className="block text-[10px] font-bold tracking-[0.3em] uppercase mb-1" style={{ color: theme.primary }}>Chapter 01</span>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: theme.dark }}>The Kitchen Standard & Husband Co-Founder</h2>
              <p className="text-xs font-medium tracking-widest uppercase mt-1" style={{ color: theme.muted }}>From a Facebook recipe group to incorporated venture with Akar Misra</p>
            </div>
          </div>
          <div 
            className="reveal pl-6 border-l-2 rounded-r-xl"
            style={{ borderColor: theme.primary }}
          >
            <p className="text-base font-light leading-relaxed" style={{ color: theme.muted }}>
              Incorporated in July 2021 as KuKClean Foods and Consulting Pvt Ltd, the venture is co-founded with Kirti's husband, Akar Misra, who runs operations full-time alongside a dedicated production team. Product quality is tested against one human standard — Kirti's daughter. 'When my daughter eats my snacks and says, Mummy, I'm so lucky to have you, that's why I make laddus.'
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div 
              className="reveal shimmer-card bg-white/80 border p-7 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              style={{ borderColor: `${theme.border}60` }}
            >
              <h4 
                className="font-serif font-bold text-base mb-3 transition-colors"
                style={{ color: theme.dark }}
                onMouseEnter={(e) => e.currentTarget.style.color = theme.primary}
                onMouseLeave={(e) => e.currentTarget.style.color = theme.dark}
              >
                ₹14 Lakhs Bootstrapped Growth
              </h4>
              <p className="text-sm font-light leading-relaxed text-justify" style={{ color: theme.muted }}>
                KuKClean generated ₹14 Lakhs in revenue within its first 7 bootstrapped months. Built without heavy ad spend or paid endorsements, the brand grew organically through word-of-mouth, 1,000+ original vegan recipes, and community trust.
              </p>
            </div>
            <div 
              className="reveal shimmer-card bg-white/80 border p-7 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              style={{ borderColor: `${theme.border}60`, transitionDelay: "100ms" }}
            >
              <h4 className="font-serif font-bold text-base mb-3" style={{ color: theme.dark }}>Employing Disadvantaged Women</h4>
              <p className="text-sm font-light leading-relaxed text-justify" style={{ color: theme.muted }}>
                Beyond nutrition, KuKClean carries social impact at its heart — employing women from economically disadvantaged backgrounds to handcraft every batch of clean-label sweets, savories, and stone-ground nut butter.
              </p>
            </div>
          </div>
        </div>

        {/* Ch 02 — Agritech & IIM Incubation */}
        <div className="space-y-8">
          <div className="reveal flex flex-col md:flex-row md:items-center gap-4">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg timeline-dot flex-shrink-0 text-white"
              style={{ backgroundColor: theme.primary }}
            >
              <span className="text-2xl">🌾</span>
            </div>
            <div>
              <span className="block text-[10px] font-bold tracking-[0.3em] uppercase mb-1" style={{ color: theme.primary }}>Chapter 02</span>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: theme.dark }}>IIM Bangalore, ICAR-IIMR & Certifications</h2>
              <p className="text-xs font-medium tracking-widest uppercase mt-1" style={{ color: theme.muted }}>Government grants, agritech incubation, and FSSAI / APEDA / DPIIT approvals</p>
            </div>
          </div>
          <div 
            className="reveal pl-6 border-l-2 rounded-r-xl"
            style={{ borderColor: theme.primary }}
          >
            <p className="text-base font-light leading-relaxed" style={{ color: theme.muted }}>
              KuKClean was incubated for 1.5 years at IIM Bangalore's Women Startup Programme (Cohort 3 - WSP3), named among the Top 50 Women-Led Ventures. The brand also graduated from the Goldman Sachs 10,000 Women (GS10K) program at NSRCEL IIMB and was incubated at NutriHub ICAR-IIMR Hyderabad, receiving the RKVY-RAFTAAR Grant-in-Aid from the Ministry of Agriculture & Farmers' Welfare (second-highest grant awarded). Fully certified under FSSAI, APEDA, and DPIIT.
            </p>
          </div>
        </div>

        {/* B2B Focus Section */}
        <div>
          <div className="reveal text-center mb-10">
            <div 
              className="inline-block border-t-[3px] pt-2 mb-4"
              style={{ borderColor: theme.primary }}
            >
              <span className="font-bold text-sm tracking-[0.2em] uppercase" style={{ color: theme.primary }}>B2B Business Model</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: theme.dark }}>Primary Focus: Cafes & Corporate Thalis</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {b2bFocus.map((b, i) => (
              <div 
                key={i} 
                className="reveal shimmer-card bg-white/80 border p-6 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-3"
                style={{ 
                  borderColor: `${theme.border}60`,
                  transitionDelay: `${i * 80}ms`
                }}
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg text-white font-bold"
                  style={{ backgroundColor: theme.primary }}
                >
                  {b.icon}
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase block" style={{ color: theme.primary }}>Pillar {b.num}</span>
                <h4 className="font-serif font-bold text-sm" style={{ color: theme.dark }}>{b.title}</h4>
                <p className="text-xs font-light leading-relaxed" style={{ color: theme.muted }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Product Catalog */}
        <div>
          <div className="reveal text-center mb-10">
            <div 
              className="inline-block border-t-[3px] pt-2 mb-4"
              style={{ borderColor: theme.primary }}
            >
              <span className="font-bold text-sm tracking-[0.2em] uppercase" style={{ color: theme.primary }}>Artisanal Product Portfolio</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: theme.dark }}>Handcrafted, Clean-Label Products</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {products.map((p, i) => (
              <div 
                key={i} 
                className="reveal shimmer-card bg-white/80 border p-7 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4"
                style={{ 
                  borderColor: `${theme.border}60`,
                  transitionDelay: `${i * 80}ms`
                }}
              >
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md text-xl timeline-dot text-white"
                  style={{ backgroundColor: theme.primary }}
                >
                  {p.icon}
                </div>
                <h4 className="font-serif font-bold text-sm" style={{ color: theme.dark }}>{p.title}</h4>
                <p className="text-xs font-light leading-relaxed" style={{ color: theme.muted }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Asset: The Salad Formula eBook */}
        <div 
          className="reveal bg-white/80 border p-10 rounded-3xl shadow-sm space-y-8"
          style={{ borderColor: `${theme.border}60` }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b" style={{ borderColor: theme.border }}>
            <div>
              <span 
                className="text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full inline-block mb-2"
                style={{ backgroundColor: theme.primary }}
              >
                Lead Magnet Asset
              </span>
              <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: theme.dark }}>"The Salad Formula" eBook</h3>
              <p className="text-xs font-medium uppercase tracking-wider mt-1" style={{ color: theme.muted }}>An Indian Ingredient Guide to Building the Perfect Salad — Every Time</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold block" style={{ color: theme.primary }}>By Kirti Yadav</span>
              <span className="text-[10px]" style={{ color: theme.muted }}>Certified Holistic Nutritionist</span>
            </div>
          </div>
          <p className="text-sm font-light leading-relaxed" style={{ color: theme.muted }}>
            "I started KuKClean with one simple belief: the plate in front of you can change your whole life — and it doesn't need to be complicated, imported, or expensive to do it. My mission is simple: one million plates, changed for the better by 2030."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {saladFormulaBlocks.map((b, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl border space-y-2"
                style={{ 
                  backgroundColor: theme.primarySoft,
                  borderColor: theme.border
                }}
              >
                <span className="font-serif font-bold text-sm block" style={{ color: theme.primary }}>{b.step}</span>
                <p className="text-xs font-light leading-relaxed" style={{ color: theme.muted }}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Quote Banner */}
        <div 
          className="reveal relative overflow-hidden rounded-3xl p-10 lg:p-14 text-center shadow-2xl"
          style={{ backgroundColor: theme.primary }}
        >
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/8 rounded-full blur-2xl" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="relative z-10 space-y-5 max-w-4xl mx-auto">
            <span className="bg-white/15 border border-white/20 text-white text-[9px] font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full inline-block">The Vision for KuKClean</span>
            <p className="font-serif text-2xl lg:text-3xl italic text-white leading-relaxed">
              "You will not find any product on KuKClean that our family does not believe in or does not consume. You have our word."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-white/40" />
              <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Kirti Yadav & Akar Misra, Co-Founders · KuKClean Foods</span>
              <div className="w-8 h-px bg-white/40" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}