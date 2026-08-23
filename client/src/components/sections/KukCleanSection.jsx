import { useEffect, useRef } from "react";
import img1 from "../../assets/WhatsApp Image 2026-07-24 at 21.04.49.jpeg";
import img2 from "../../assets/WhatsApp Image 2026-07-24 at 21.05.09 (1).jpeg";
import img3 from "../../assets/WhatsApp Image 2026-07-24 at 21.05.09.jpeg";
import img4 from "../../assets/WhatsApp Image 2026-07-24 at 21.07.11 (1).jpeg";
import img5 from "../../assets/WhatsApp Image 2026-07-24 at 21.07.33.jpeg";
import img6 from "../../assets/WhatsApp Image 2026-07-24 at 21.13.35.jpeg";
import { Leaf, Sparkles, Heart, ChefHat, CheckCircle, TrendingUp, Award, ShieldCheck, Star } from "lucide-react";

const wellnessImages = [img1, img2, img3, img4, img5, img6];

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

const coreCategories = [
  { icon: <Heart size={22} />, title: "Healthy Indian Sweets", desc: "Clean label artisanal laddus and wholesome Indian sweets crafted without refined sugar or artificial additives." },
  { icon: <Leaf size={22} />, title: "Healthy Breakfast", desc: "Nutrient dense morning fuel, wholesome breakfast options like granola, made with natural sweeteners." },
  { icon: <Sparkles size={22} />, title: "Healthy Snacks", desc: "Guilt free crunchy snacks, light on sodium and heavy on traditional flavor." },
  { icon: <ChefHat size={22} />, title: "Nut Butters & Dips/Sauces", desc: "Slow stone ground at low temperatures to preserve vital micronutrients, enzymes, and natural healthy oils." },
];

const b2bFocus = [
  { num: "01", icon: <CheckCircle size={24} />, title: "Corporate Thalis & Canteen Supply", desc: "Our laddus, nut butters, and snacks show up in canteens and catering trays every day, giving employees an easy, better-for-you choice to reach for through the workday, so healthier eating becomes part of how a workplace runs, not an extra effort." },
  { num: "02", icon: <TrendingUp size={24} />, title: "Cafe Menu Consulting & Supply", desc: "We help cafes offer their customers something genuinely healthier without slowing their kitchen down, supplying stone ground nut butters and consulting on clean label, plant based menu redesigns that turn into a reason customers keep coming back." },
  { num: "03", icon: <Award size={24} />, title: "Direct to Consumer", desc: <>Individuals shop <a href="https://www.kukclean.com/" target="_blank" rel="noopener noreferrer" className="underline font-medium hover:opacity-80">kukclean.com</a> for clean label treats they can actually trust the ingredients on, and businesses come to us for bulk and festival gifting that feels thoughtful, not generic.</> },
  { num: "04", icon: <ShieldCheck size={24} />, title: "Private Label", desc: "Other brands trust us to make their laddus, so they can put a clean label product in front of their own customers without having to build a kitchen or supply chain from scratch." },
];

const saladFormulaBlocks = [
  { step: "1. Base", text: "Spinach, Fenugreek, Cabbage, Sprouted Mung, Millets (Pearl/Sorghum/Finger), Raw Papaya, Cucumber, Amaranth Leaves, Sweet Potato, Red Cabbage, Foxtail Millet, Sprouted Chickpeas." },
  { step: "2. Protein", text: "Chickpeas, Kidney Beans, Green Peas, Tofu, Peanuts, Black-Eyed Peas, Soya Chunks, Red Lentils, Moth Beans, Horse Gram, Black Gram, Split Mung Beans, Edamame." },
  { step: "3. Crunch", text: "Sesame Seeds, Fox Nuts (Makhana), Roasted Chickpeas, Pumpkin Seeds, Flax Seeds, Roasted Peanuts, Cashews, Almonds, Watermelon Seeds, Sunflower Seeds, Chironji, Walnuts." },
  { step: "4. Color & Freshness", text: "Beetroot, Pomegranate, Carrot, Raw Mango, Mint, Coriander, Curry Leaves, Tomato, Bell Pepper, Red Onion, Radish, Indian Gooseberry (Amla), Basil, Spring Onion." },
  { step: "5. Dressing", text: "Lemon, Mustard Oil, Sesame Oil, Ginger Garlic, Cumin Powder, Black Salt, Jaggery, Tamarind, Chaat Masala, Groundnut Oil, Carom Seeds (Ajwain), Amchur, Coconut Oil." },
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
        style={{ background: `linear-gradient(135deg, #CF99A6 0%, #B55E79 100%)` }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://cdn.shopify.com/videos/c/o/v/94b06b00c93544bcb8f744155ee632c8.mp4"
        />
        <div className="absolute inset-0 z-0 bg-[#6B2D3E]/35 backdrop-blur-[1px]" />
        <div className="absolute inset-0 z-0 bg-black/40" />

        <div className="absolute z-0 -top-24 -right-16 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute z-0 -bottom-20 -left-10 w-80 h-80 bg-white/8 rounded-full blur-2xl animate-float pointer-events-none" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 max-w-5xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-8">
            KUKCLEAN FOODS & CONSULTING
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1] mb-6">
            KuKClean <br />
            <span className="font-serif font-bold italic drop-shadow-sm gradient-text-animated"></span>
          </h1>
          <p className="text-white/75 text-base lg:text-lg font-light leading-relaxed max-w-2xl">
            Born in my kitchen. Incubated at IIM Bangalore and ICAR-IIMR NutriHub. KuKClean is proof that clean, plant based food and extraordinary Indian taste belong together.
          </p>

          <div className="mt-8">
            <a
              href="https://www.kukclean.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white text-[#6B2D3E] px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-[#FCF8F7] transition-colors shadow-lg"
            >
              Visit KuKClean
              <span className="ml-2">→</span>
            </a>
          </div>


        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24 space-y-32">

        {/* Ch 02   Agritech & IIM Incubation */}
        <div className="space-y-8">
          <div className="reveal flex flex-col md:flex-row md:items-center gap-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg timeline-dot flex-shrink-0 text-white"
              style={{ backgroundColor: theme.primary }}
            >
              <Leaf size={28} />
            </div>
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold" style={{ color: theme.dark }}>IIM Bangalore, ICAR-IIMR & Certifications</h2>
              <p className="text-xs font-medium tracking-widest uppercase mt-1" style={{ color: theme.muted }}>Government grants, agritech incubation, and FSSAI / APEDA / DPIIT approvals</p>
            </div>
          </div>
          <div
            className="reveal pl-6 border-l-2 rounded-r-xl"
            style={{ borderColor: theme.primary }}
          >
            <p className="text-base font-light leading-relaxed" style={{ color: theme.muted }}>
              KuKClean was incubated for 1.5 years at IIM Bangalore's Women Startup Programme (WSP Cohort 3), named among the Top 50 Women Led Ventures. The brand also graduated from the Goldman Sachs 10,000 Women (GS10K) program at NSRCEL IIMB and was incubated at NutriHub ICAR-IIMR Hyderabad, receiving the RKVY-RAFTAAR Grant-in-Aid from the Ministry of Agriculture & Farmers' Welfare. Fully certified under FSSAI, APEDA, and DPIIT.
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
              <span className="font-bold text-sm tracking-[0.2em] uppercase" style={{ color: theme.primary }}>Business Model</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: theme.dark }}>Primary Focus: Cafes & Corporate Thalis</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {b2bFocus.map((b, i) => (
              <div
                key={i}
                className="reveal group bg-white/70 backdrop-blur-sm border p-8 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 space-y-4"
                style={{
                  borderColor: `${theme.border}80`,
                  transitionDelay: `${i * 80}ms`
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner text-white group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundColor: theme.primary }}
                >
                  {b.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase block mb-1" style={{ color: theme.primary }}>Pillar {b.num}</span>
                  <h4 className="font-serif font-bold text-lg leading-tight" style={{ color: theme.dark }}>{b.title}</h4>
                </div>
                <p className="text-sm font-light leading-relaxed" style={{ color: theme.muted }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* NEW PDF ADDITION: Confirmed 4 Core Categories Showcase */}
        <div>
          <div className="reveal text-center mb-10">
            <div
              className="inline-block border-t-[3px] pt-2 mb-4"
              style={{ borderColor: theme.primary }}
            >
              <span className="font-bold text-sm tracking-[0.2em] uppercase" style={{ color: theme.primary }}>Core Offerings</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: theme.dark }}>4 Primary Product Categories</h3>
            <p className="text-sm font-light mt-2 max-w-xl mx-auto" style={{ color: theme.muted }}>
              The essential clean label product lines crafted with zero refined sugars, zero artificial preservatives, and whole grains and pulses.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCategories.map((cat, i) => (
              <div
                key={i}
                className="reveal group bg-white/80 border p-7 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                style={{ borderColor: `${theme.border}80`, transitionDelay: `${i * 70}ms` }}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-5 shadow-sm group-hover:scale-110 transition-transform" style={{ backgroundColor: theme.primary }}>
                    {cat.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest block mb-1" style={{ color: theme.primary }}>Category 0{i + 1}</span>
                  <h4 className="font-serif font-bold text-lg mb-2" style={{ color: theme.dark }}>{cat.title}</h4>
                  <p className="text-sm font-light leading-relaxed" style={{ color: theme.muted }}>{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wellness & Analysis Assessment Images */}
        <div className="pt-10">
          <div className="reveal text-center mb-10">
            <div
              className="inline-block border-t-[3px] pt-2 mb-4"
              style={{ borderColor: theme.primary }}
            >
              <span className="font-bold text-sm tracking-[0.2em] uppercase" style={{ color: theme.primary }}>Our Products</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: theme.dark }}>A Taste of KuKClean</h3>
          </div>
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wellnessImages.map((imageSrc, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-3xl shadow-sm border hover:shadow-xl transition-all duration-300 group"
                style={{ borderColor: `${theme.border}60` }}
              >
                <img
                  src={imageSrc}
                  alt={`Wellness Analysis Assessment ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 max-h-96"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Google Reviews */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white/80 border rounded-3xl p-8 md:p-10" style={{ borderColor: theme.border }}>
            <span className="font-bold text-sm tracking-[0.2em] uppercase" style={{ color: theme.primary }}>Google Reviews</span>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold mt-3" style={{ color: theme.dark }}>What people are saying about KuKClean</h3>
            <p className="text-sm font-light leading-relaxed mt-4" style={{ color: theme.muted }}>
              See KuKClean's live Google rating, review count, and latest customer feedback on the listing.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=KuKClean+Foods+and+Consulting+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-6 rounded-full bg-[#B55E79] text-white px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-[#6B2D3E] transition-colors"
            >
              <Star size={16} fill="currentColor" className="mr-2" />
              Read all reviews on Google
            </a>
          </div>
          <div className="overflow-hidden rounded-3xl border min-h-72" style={{ borderColor: theme.border }}>
            <iframe
              title="KuKClean on Google Maps"
              src="https://www.google.com/maps?q=KuKClean+Foods+and+Consulting+Bengaluru&output=embed"
              className="w-full h-full min-h-72 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Closing Quote Banner */}
        <div
          className="reveal relative overflow-hidden rounded-3xl p-10 lg:p-14 text-center shadow-2xl"
          style={{ background: "linear-gradient(135deg, #CF99A6 0%, #B55E79 100%)" }}
        >
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/8 rounded-full blur-2xl" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="relative z-10 space-y-5 max-w-4xl mx-auto">
            <span className="text-white text-[9px] font-bold tracking-widest uppercase inline-block">The Vision for KuKClean</span>
            <p className="font-serif text-2xl lg:text-3xl italic text-white leading-relaxed">
              "You will not find any product on KuKClean that our family does not believe in or does not consume. You have our word."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
