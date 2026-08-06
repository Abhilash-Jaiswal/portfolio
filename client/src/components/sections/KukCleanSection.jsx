import { useEffect, useRef } from "react";
import img1 from "../../assets/WhatsApp Image 2026-07-24 at 21.04.49.jpeg";
import img2 from "../../assets/WhatsApp Image 2026-07-24 at 21.05.09 (1).jpeg";
import img3 from "../../assets/WhatsApp Image 2026-07-24 at 21.05.09.jpeg";
import img4 from "../../assets/WhatsApp Image 2026-07-24 at 21.07.11 (1).jpeg";
import img5 from "../../assets/WhatsApp Image 2026-07-24 at 21.07.33.jpeg";
import img6 from "../../assets/WhatsApp Image 2026-07-24 at 21.13.35.jpeg";
import { Leaf, Sparkles, Heart, ChefHat, Star, CheckCircle, TrendingUp, Award, ShieldCheck, Quote, BookOpen, FlaskConical, Target, Users, Mail, Phone, Globe } from "lucide-react";

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

const products = [
  { icon: <Leaf size={24} />, title: "Organic Ragi & Almond Laddus", desc: "Wholesome, gluten-free, and naturally sweetened—our Ragi Laddus are a calcium-rich powerhouse made with organic finger millet. The Kashmiri Almond Protein Laddus combine roasted Bengal gram and jaggery powder for a protein-packed bite. Zero refined sugar, zero dairy, 100% pure goodness." },
  { icon: <Sparkles size={24} />, title: "Date Bites & Sugar-Free Treats", desc: "Nature's candy, elevated. Premium Arabic dates are hand-pitted and blended with crunchy cashews, almonds, pumpkin seeds, dried figs, and a warm whisper of cardamom & cloves. A guilt-free indulgence that satisfies your sweet tooth and nourishes your body—no added sugar, ever." },
  { icon: <Heart size={24} />, title: "Baked Mathri & Millet Chivda", desc: "Crunch without the guilt. Our Ajwain Whole Wheat Mathri is baked, not fried—crispy, aromatic, and low-sodium. The Roasted Jowar Chivda is a millet-based marvel, tossed with subtle spices for a savory snack that's light on salt but heavy on flavor. Traditional taste, modern health." },
  { icon: <ChefHat size={24} />, title: "Stone-Ground Nut Butters & Dips", desc: "Slow and steady wins the health race. Our nut butters are crafted the old-fashioned way—stone-ground at low temperatures to preserve every precious micronutrient, enzyme, and healthy oil that high-heat processing destroys. 100% clean label, pure nutty perfection." },
  { icon: <Star size={24} />, title: "Artisanal Gift Hampers", desc: "Give the gift of health, thoughtfully curated. Choose from our KuKClean Wholesome, Sweet n Savour, or Healthy Nibbles hampers—each hand-assembled with our best-selling products and customized packaging for corporate gifting, festive celebrations, or simply spreading joy. Made for sharing, crafted for caring" },
];

const coreCategories = [
  { icon: <Heart size={22} />, title: "Healthy Indian Sweets", desc: "Clean-label artisanal laddus and wholesome Indian sweets crafted without refined sugar or artificial additives." },
  { icon: <Leaf size={22} />, title: "Healthy Breakfast", desc: "Nutrient-dense morning fuel including organic millet blends, natural sweeteners, and wholesome breakfast options." },
  { icon: <Sparkles size={22} />, title: "Healthy Snacks", desc: "Guilt-free crunchy snacks, baked mathris, and roasted millet chivda light on sodium and heavy on traditional flavor." },
  { icon: <ChefHat size={22} />, title: "Nut Butters & Dips/Sauces", desc: "Slow stone-ground at low temperatures to preserve vital micronutrients, enzymes, and natural healthy oils." },
];

const b2bFocus = [
  { num: "01", icon: <CheckCircle size={24} />, title: "Corporate Thalis & Canteen Supply", desc: "Supplying artisanal clean-label laddus directly to corporate canteens and caterers as part of daily corporate Thalis (meal trays)." },
  { num: "02", icon: <TrendingUp size={24} />, title: "Cafe Menu Consulting & Supply", desc: "Partnering directly with cafes to supply stone-ground nut butters and consult on clean-label, plant-based menu redesigns." },
  { num: "03", icon: <Award size={24} />, title: "Direct-to-Consumer & Bulk Gifting", desc: <>Direct sales via <a href="https://www.kukclean.com/" target="_blank" rel="noopener noreferrer" className="underline font-medium hover:opacity-80">kukclean.com</a> plus bespoke onboarding and festival hampers for corporate clients (Cisco, Biocon, Loyalytics.ai).</> },
  { num: "04", icon: <ShieldCheck size={24} />, title: "Empowering Women Artisans", desc: "Every batch is handcrafted by a dedicated production team that employs women from economically disadvantaged backgrounds." },
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
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
            KuKClean Foods & Consulting
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1] mb-6">
            Kitchen You. <br />
            <span className="font-serif font-bold italic drop-shadow-sm gradient-text-animated">Consciously Nourishing.</span>
          </h1>
          <p className="text-white/75 text-base lg:text-lg font-light leading-relaxed max-w-2xl">
            Born in Kirti's kitchen. Incubated at IIM Bangalore and ICAR-IIMR NutriHub. KuKClean is proof that clean, plant-based food and extraordinary Indian taste belong together.
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

        {/* Opening Pull Quote */}
        <div
          className="reveal relative max-w-5xl mx-auto bg-white/80 backdrop-blur-md rounded-[2.5rem] p-10 md:p-14 shadow-xl border border-white"
        >
          <Quote className="absolute top-8 left-8 w-16 h-16 opacity-5" style={{ color: theme.primary }} />
          <p className="font-serif text-2xl md:text-3xl italic leading-relaxed text-center relative z-10" style={{ color: theme.dark }}>
            "KuKClean stands for 'Kitchen' (KuK) + 'Clean', doubling as 'Kitchen, You'. In my kitchen, I teach you how to cook clean. Food should give you pleasure, not guilt."
          </p>
          <span className="text-sm font-bold uppercase tracking-[0.2em] block mt-8 text-center" style={{ color: theme.primary }}>— Kirti Yadav, Founder</span>
        </div>

        {/* NEW PDF ADDITION: Origin & Universal Energy Story Quote Card */}
        <div className="reveal relative max-w-5xl mx-auto bg-gradient-to-br from-white to-[#FDF4F6] rounded-[2.5rem] p-8 md:p-12 shadow-md border border-[#E8CDD3]">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg" style={{ backgroundColor: theme.primary }}>
              <Sparkles size={28} />
            </div>
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase block" style={{ color: theme.primary }}>Brand Origin & Philosophy</span>
              <p className="font-serif text-lg md:text-xl italic leading-relaxed" style={{ color: theme.dark }}>
                "KuKClean stands for 'Kitchen U' — tied to my own clean-eating journey. It started as an idea for a blog about my weight-loss story, one that never actually launched. But sometimes the universe has bigger plans than what we think — so I believe in that universal energy, and trust that things happen the way they're meant to. Instead of the blog, the brand happened."
              </p>
              <span className="text-xs font-bold uppercase tracking-widest block pt-2" style={{ color: theme.muted }}>— Kirti Yadav, Founder</span>
            </div>
          </div>
        </div>

        {/* Ch 01 — Origin & The Kitchen Standard */}
        <div className="space-y-8">
          <div className="reveal flex flex-col md:flex-row md:items-center gap-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg timeline-dot flex-shrink-0 text-white"
              style={{ backgroundColor: theme.primary }}
            >
              <ChefHat size={28} />
            </div>
            <div>
              <span className="block text-[10px] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: theme.primary }}>Chapter 01</span>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold" style={{ color: theme.dark }}>The Kitchen Standard & Husband Co-Founder</h2>
              <p className="text-xs font-medium tracking-widest uppercase mt-1" style={{ color: theme.muted }}>From a Facebook recipe group to incorporated venture with Akar Misra</p>
            </div>
          </div>
          <div
            className="reveal pl-6 border-l-2 rounded-r-xl"
            style={{ borderColor: theme.primary }}
          >
            <p className="text-base font-light leading-relaxed" style={{ color: theme.muted }}>
              Incorporated as KuKClean Foods and Consulting Pvt Ltd, the venture is co-founded with Kirti's husband, Akar Misra, who runs operations full-time alongside a dedicated production team. Product quality is tested against one human standard — Kirti's daughter. 'When my daughter eats my snacks and says, Mummy, I'm so lucky to have you, that's why I make laddus.'
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
                n just 7 months, KuKClean achieved ₹14 Lakhs in revenue—entirely bootstrapped and built on trust, not advertising. No heavy ad spends, no paid influencer endorsements. Just the power of 1,000+ original vegan recipes, a growing community of health-conscious food lovers, and the relentless word-of-mouth that comes from making food that truly nourishes. Proof that authentic quality speaks for itself.
              </p>
            </div>
            <div
              className="reveal shimmer-card bg-white/80 border p-7 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              style={{ borderColor: `${theme.border}60`, transitionDelay: "100ms" }}
            >
              <h4 className="font-serif font-bold text-base mb-3" style={{ color: theme.dark }}>Employing Disadvantaged Women</h4>
              <p className="text-sm font-light leading-relaxed text-justify" style={{ color: theme.muted }}>
                Our mission goes far beyond the plate. Every batch of our clean-label sweets, savories, and stone-ground nut butters is handcrafted by women from economically disadvantaged backgrounds. We provide dignified employment, fair wages, and skill development—transforming lives, one recipe at a time. Because real nourishment isn't just about what's in the food; it's about who makes it and how they're valued.
              </p>
            </div>

            {/* NEW PDF ADDITION: Dual Testing Standards Card */}
            <div
              className="reveal shimmer-card bg-white/80 border p-7 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 col-span-1 md:col-span-2"
              style={{ borderColor: `${theme.border}60`, transitionDelay: "150ms" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0" style={{ backgroundColor: theme.primary }}>
                  <FlaskConical size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase block" style={{ color: theme.primary }}>Quality Assurance</span>
                  <h4 className="font-serif font-bold text-base" style={{ color: theme.dark }}>Dual Testing Standards: Real Lab Testing & The Human Benchmark</h4>
                </div>
              </div>
              <p className="text-sm font-light leading-relaxed text-justify" style={{ color: theme.muted }}>
                Product quality at KuKClean is tested against two uncompromising standards: real laboratory testing for biological purity and nutritional excellence, and one deeply personal human standard — Kirti's daughter. Scientific legitimacy and genuine family trust are combined into every recipe crafted.
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
              <Leaf size={28} />
            </div>
            <div>
              <span className="block text-[10px] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: theme.primary }}>Chapter 02</span>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold" style={{ color: theme.dark }}>IIM Bangalore, ICAR-IIMR & Certifications</h2>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {products.map((p, i) => (
              <div
                key={i}
                className="reveal group bg-white/70 backdrop-blur-sm border p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-start gap-4"
                style={{
                  borderColor: `${theme.border}80`,
                  transitionDelay: `${i * 60}ms`
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex flex-shrink-0 items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 shadow-inner"
                  style={{ backgroundColor: theme.primary }}
                >
                  {p.icon}
                </div>
                <h4 className="font-serif font-bold text-base leading-tight" style={{ color: theme.dark }}>{p.title}</h4>
                <p className="text-sm font-light leading-relaxed" style={{ color: theme.muted }}>{p.desc}</p>
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
              The essential clean-label product lines crafted with zero refined sugars, zero artificial preservatives, and 100% natural ingredients.
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
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold" style={{ color: theme.primary }}>
                  <span>100% Clean Label</span>
                  <CheckCircle size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NEW PDF ADDITION: Mission & Community Impact Cards */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-[#FAF0F2] to-white border p-8 md:p-10 rounded-[2.5rem] shadow-sm flex flex-col justify-between" style={{ borderColor: theme.border }}>
            <div>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md" style={{ backgroundColor: theme.primary }}>
                <Target size={24} />
              </div>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase block mb-2" style={{ color: theme.primary }}>Core Purpose</span>
              <h3 className="font-serif text-2xl font-bold mb-3" style={{ color: theme.dark }}>The Plate-Level Mission</h3>
              <p className="font-serif text-xl italic font-medium leading-relaxed mb-4" style={{ color: theme.primary }}>
                "My mission is simple: 1 million plate-level changes."
              </p>
              <p className="text-sm font-light leading-relaxed" style={{ color: theme.muted }}>
                Transforming daily nutrition not through drastic restrictions, but through small, conscious, plate-level upgrades that nourish the body naturally.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#FAF0F2] to-white border p-8 md:p-10 rounded-[2.5rem] shadow-sm flex flex-col justify-between" style={{ borderColor: theme.border }}>
            <div>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md" style={{ backgroundColor: theme.primary }}>
                <Users size={24} />
              </div>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase block mb-2" style={{ color: theme.primary }}>Community & Education</span>
              <h3 className="font-serif text-2xl font-bold mb-3" style={{ color: theme.dark }}>Empowering & Inspiring</h3>
              <p className="font-serif text-xl italic font-medium leading-relaxed mb-4" style={{ color: theme.primary }}>
                "I've educated individuals and built communities to inspire them."
              </p>
              <p className="text-sm font-light leading-relaxed" style={{ color: theme.muted }}>
                Fostering grassroots wellness awareness, clean eating habits, and supportive health communities across households, cafes, and workplaces.
              </p>
            </div>
          </div>
        </div>

        {/* Wellness & Analysis Assessment Images */}
        <div className="pt-10">
          <div className="reveal text-center mb-10">
            <div
              className="inline-block border-t-[3px] pt-2 mb-4"
              style={{ borderColor: theme.primary }}
            >
              <span className="font-bold text-sm tracking-[0.2em] uppercase" style={{ color: theme.primary }}>Wellness Assessment</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: theme.dark }}>Kuk Clean Wellness & Analysis</h3>
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

        {/* Closing Quote Banner */}
        <div
          className="reveal relative overflow-hidden rounded-3xl p-10 lg:p-14 text-center shadow-2xl"
          style={{ background: "linear-gradient(135deg, #CF99A6 0%, #B55E79 100%)" }}
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