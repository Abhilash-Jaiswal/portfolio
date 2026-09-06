 import { useEffect, useRef, useState } from "react";
import img1 from "../../assets/WhatsApp Image 2026-07-24 at 21.04.49.jpeg";
import img2 from "../../assets/WhatsApp Image 2026-07-24 at 21.05.09 (1).jpeg";
import img3 from "../../assets/granolabar.webp";
import img4 from "../../assets/peanutbutter.jpeg";
import img5 from "../../assets/WhatsApp Image 2026-07-24 at 21.07.33.jpeg";
import img6 from "../../assets/WhatsApp Image 2026-07-24 at 21.13.35.jpeg";
import { Leaf, Sparkles, Heart, ChefHat, CheckCircle, TrendingUp, Award, ShieldCheck, Star } from "lucide-react";

// UPDATED: Array of objects with src and name
const wellnessImages = [
  { src: img1, name: "Almond Laddu" },
  { src: img2, name: "Raagi Laddu" },
  { src: img3, name: "Granola Bar" },
  { src: img4, name: "Peanut Butter Chocolate" },
  { src: img5, name: "Sweet & Sour Hamper" },
  { src: img6, name: "Trail Mix" },
];

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

function GoogleReviews() {
  const [place, setPlace] = useState(null);
  const listingUrl = place?.url || "https://www.google.com/maps/search/?api=1&query=KuKClean%20Bengaluru";

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
    const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;
    if (!apiKey || !placeId) return;

    fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews,url&key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setPlace(data.result || null))
      .catch(() => setPlace(null));
  }, []);

  return (
    <div className="reveal max-w-5xl mx-auto w-full">
      <div className="text-center mb-10">
        <div className="inline-block border-t-[3px] pt-2 mb-4" style={{ borderColor: theme.primary }}>
          <span className="font-bold text-sm tracking-[0.2em] uppercase" style={{ color: theme.primary }}>Google Reviews</span>
        </div>
        <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: theme.dark }}>Loved by the KuKClean community</h3>
      </div>
      <div className="bg-white/80 border p-8 md:p-10 rounded-3xl shadow-sm text-center" style={{ borderColor: `${theme.border}80` }}>
        {place ? (
          <>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="font-serif text-4xl font-bold" style={{ color: theme.dark }}>{place.rating.toFixed(1)}</span>
              <div className="text-left">
                <div className="flex gap-1" aria-label={`${place.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }, (_, index) => <Star key={index} size={18} fill={index < Math.round(place.rating) ? "currentColor" : "none"} style={{ color: theme.primary }} />)}
                </div>
                <span className="text-xs font-medium" style={{ color: theme.muted }}>{place.user_ratings_total.toLocaleString()} Google reviews</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
              {(place.reviews || []).slice(0, 3).map((review) => (
                <blockquote key={`${review.author_name}-${review.time}`} className="border-l-2 pl-4" style={{ borderColor: theme.primary }}>
                  <p className="text-sm font-light leading-relaxed" style={{ color: theme.muted }}>&quot;{review.text}&quot;</p>
                  <cite className="not-italic text-xs font-bold uppercase tracking-widest mt-4 block" style={{ color: theme.primary }}>{review.author_name}</cite>
                </blockquote>
              ))}
            </div>
          </>
        ) : (
          <p className="text-sm font-light leading-relaxed max-w-2xl mx-auto" style={{ color: theme.muted }}>
            Google keeps the current star rating, review count, and latest customer experiences up to date on the KuKClean listing.
          </p>
        )}
        <a href={listingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-white border px-6 py-3 mt-8 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-[#F4D9DE]" style={{ borderColor: theme.border, color: theme.primary }}>
          Read all reviews on Google
        </a>
      </div>
    </div>
  );
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
              
            </a>
          </div>


        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24 space-y-32">

        {/* Ch 02   Brand Origin & Philosophy */}
        <div className="space-y-8">
          <div className="reveal flex flex-col md:flex-row md:items-center gap-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg timeline-dot shrink-0 text-white"
              style={{ backgroundColor: theme.primary }}
            >
              <Leaf size={28} />
            </div>
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold" style={{ color: theme.dark }}>Brand Origin & Philosophy</h2>
              <p className="text-xs font-medium tracking-widest uppercase mt-1" style={{ color: theme.muted }}></p>
            </div>
          </div>
          <div
            className="reveal pl-6 border-l-2 rounded-r-xl"
            style={{ borderColor: theme.primary }}
          >
            <p className="text-base font-light leading-relaxed" style={{ color: theme.muted }}>
             KuKClean stands for Kitchen, You, and Kirti's Clean eating journey. It started as an idea for a blog about my own weight-loss story, one that never actually launched. But I believe in that universal energy, and trust that things happen the way they're meant to, so instead of the blog, the brand happened: a national brand solving the 4 o'clock snacking problem for health conscious families.
            </p>
          </div>
        </div>

        {/* Ch 02   Agritech & IIM Incubation */}
        <div className="space-y-8">
          <div className="reveal flex flex-col md:flex-row md:items-center gap-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg timeline-dot shrink-0 text-white"
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
          </div>
            
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {b2bFocus.map((b, i) => (
              <div
                key={i}
                className="reveal group bg-white/70 backdrop-blur-sm border p-8 rounded-4xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 space-y-4"
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

        {/* Product images - UPDATED WITH HOVER OVERLAY */}
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
            {wellnessImages.map((product, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-3xl shadow-sm border hover:shadow-xl transition-all duration-300 group"
                style={{ borderColor: `${theme.border}60` }}
              >
                <img
                  src={product.src}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 max-h-96"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-serif text-xl font-bold tracking-widest text-center px-4">
                    {product.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Reviews */}
        <GoogleReviews />

        
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