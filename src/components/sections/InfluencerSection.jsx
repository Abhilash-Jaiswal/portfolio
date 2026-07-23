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

const platforms = [
  { icon: "🎥", grad: "from-[#5B21B6] to-[#3B0764]", name: "YouTube", handle: "@plantbasednutritionistkirti", desc: "Long-form nutrition education, whole-food recipes, and wellness deep-dives. The trust-building channel." },
  { icon: "📸", grad: "from-[#5B21B6] to-[#3B0764]", name: "Instagram", handle: "@plantbasednutritionistkirti", desc: "Daily touchpoint — real-time philosophy, community Q&A, and authentic unfiltered content." },
  { icon: "👥", grad: "from-[#5B21B6] to-[#3B0764]", name: "Facebook", handle: "plantbasednutritionist_kirti", desc: "Reaching women in their 40s and 50s on the platform they're most active on. Live Q&As and community engagement." },
  { icon: "💬", grad: "from-[#5B21B6] to-[#3B0764]", name: "WhatsApp", handle: "KuK Clean & notpaused.com", desc: "85–95% open rates. The highest-engagement channel — drops, guidance, and real-time conversations." },
  { icon: "💼", grad: "from-[#5B21B6] to-[#3B0764]", name: "LinkedIn", handle: "/in/kirtiyadav", desc: "Thought leadership, corporate wellness positioning, and connecting with India's entrepreneurial ecosystem." },
];

const brandCategories = [
  { icon: "🌾", grad: "from-[#5B21B6] to-[#3B0764]", title: "Organic & Natural Foods", desc: "Clean-label Indian foods, superfoods, health snacks, and millet-based products aligned with KuK Clean's standards." },
  { icon: "🌿", grad: "from-[#5B21B6] to-[#3B0764]", title: "Ethical Supplements", desc: "Plant-based vitamins, adaptogens, and women's hormonal health supplements with genuine scientific backing." },
  { icon: "🍳", grad: "from-[#5B21B6] to-[#3B0764]", title: "Sustainable Kitchenware", desc: "Non-toxic, conscious cooking essentials. Because the vessel matters as much as what goes inside it." },
  { icon: "🥛", grad: "from-[#5B21B6] to-[#3B0764]", title: "Vegan & Plant-Based Brands", desc: "Dairy alternatives, plant proteins, and vegan lifestyle products that genuinely meet Kirti's clean-label standards." },
  { icon: "⌚", grad: "from-[#5B21B6] to-[#3B0764]", title: "Women's Wellness Tech", desc: "Fitness trackers, sleep tools, and hormone health testing. Technology in service of embodied knowledge." },
  { icon: "🌸", grad: "from-[#5B21B6] to-[#3B0764]", title: "Women's Health & Menopause", desc: "Products aligned with notpaused.com's holistic, inclusive, evidence-based philosophy for midlife wellness." },
  { icon: "🧳", grad: "from-[#5B21B6] to-[#3B0764]", title: "Conscious Travel & Lifestyle", desc: "Brands supporting the active, independent, aspirational living that Kirti embodies and advocates for women." },
];

const campaignFormats = [
  { icon: "📸", title: "Instagram Features", desc: "Personal endorsements woven authentically into daily content — not paid placements disguised as organic posts. Her community knows the difference." },
  { icon: "🎥", title: "YouTube Integrations", desc: "Product appearances within genuine educational content — in the context of recipes or nutritional explanations, not 30-second pre-rolls." },
  { icon: "💬", title: "WhatsApp Community Drops", desc: "Curated recommendations shared with the same care as personal advice — to the highest-engagement, highest-intent audience in her ecosystem." },
  { icon: "🌟", title: "Long-Term Ambassadorship", desc: "Sustained cross-platform integration over months. The format that produces the most meaningful commercial outcomes because it most closely mirrors the relationship her community already has with her brands." },
];

export function InfluencerSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="influencer" ref={ref} className="bg-[#F8FAFC] border-b border-[#E2E8F0]/60 scroll-mt-20">

      {/* ── HERO BANNER ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#5B21B6] via-[#3B0764] to-[#4C1D95] py-28 px-6 md:px-12 lg:px-20">
        <div className="absolute -top-24 -left-16 w-[450px] h-[450px] bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-white/8 rounded-full blur-2xl animate-float" style={{ animationDelay: "1.8s" }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 max-w-5xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
            Influencer & Brand Endorsements
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1] mb-6">
            A Voice Earned Through Living, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-[#E7C9E8] animate-text-gradient">Not Performing</span>
          </h1>
          <p className="text-white/75 text-base lg:text-lg font-light leading-relaxed max-w-2xl">
            A wellness expert who developed an audience — not an influencer who became interested in wellness. The most trusted voice in clean nutrition and midlife women's health for the Indian market.
          </p>
          <div className="flex flex-wrap gap-8 mt-12">
            {[["5", "Platforms"], ["2", "Brands Founded"], ["10+", "Years of Impact"], ["∞", "Building"]].map(([n, l]) => (
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
            "There is a meaningful difference between an influencer who became interested in wellness and a wellness expert who developed an audience. Kirti Yadav is unambiguously the latter."
          </p>
        </div>

        {/* Ch 01 — The Audience */}
        <div className="space-y-8">
          <div className="reveal flex flex-col md:flex-row md:items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5B21B6] to-[#3B0764] flex items-center justify-center shadow-lg timeline-dot flex-shrink-0">
              <span className="text-2xl">👥</span>
            </div>
            <div>
              <span className="block text-[10px] font-bold tracking-[0.3em] uppercase text-[#5B21B6] mb-1">Chapter 01</span>
              <h2 className="font-serif text-2xl lg:text-3xl text-[#0F172A] font-bold">The Audience — Who They Are and Why They Listen</h2>
              <p className="text-[#475569] text-xs font-medium tracking-widest uppercase mt-1">A community defined by intent, not demographics</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { grad: "from-[#5B21B6] to-[#3B0764]", tag: "Primary Audience", h: "Women Aged 30–55", b: "High-intent, high-disposable-income women who have made a conscious decision to prioritise their health. The range spans young mothers seeking clean nutrition, working professionals managing lifestyle diseases, women in perimenopause who have just discovered their symptoms have a name and a science, and post-menopausal women building the most active chapter of their lives. They are actively looking for knowledge they can act on." },
              { grad: "from-[#5B21B6] to-[#3B0764]", tag: "Secondary Audience", h: "Health-Conscious Indian Families", b: "Brand-loyal, community-oriented, values-driven households who are not trend-chasers. The primary food decision-makers in these families follow Kirti because she represents what they are seeking: a credible, warm, deeply knowledgeable voice in a marketplace full of noise. When Kirti recommends something, these families buy it, and they keep buying it, because the recommendation has never once let them down." },
            ].map((card, i) => (
              <div key={i} className="reveal shimmer-card bg-white/80 border border-[#E2E8F0]/60 p-8 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-4" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className={`inline-flex items-center gap-1 bg-gradient-to-r ${card.grad} text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full`}>{card.tag}</div>
                <h3 className="font-serif font-bold text-[#0F172A] text-xl">{card.h}</h3>
                <p className="text-[#475569] text-sm font-light leading-relaxed text-justify">{card.b}</p>
              </div>
            ))}
          </div>
          <div className="reveal flex items-start gap-4 bg-gradient-to-r from-stone-50 to-white/60 border border-[#E2E8F0]/60 rounded-2xl px-6 py-5 shadow-sm max-w-3xl">
            <span className="text-2xl flex-shrink-0 mt-0.5">✦</span>
            <p className="text-[#475569] text-sm font-medium leading-relaxed italic">What unites both audiences is intent. Kirti's community did not arrive through an algorithm's recommendation. They arrived through genuine need — a search for guidance that wasn't generic. This quality of audience is the most valuable thing any brand partnership with Kirti can access.</p>
          </div>
        </div>

        {/* Ch 02 — Platforms */}
        <div className="space-y-8">
          <div className="reveal flex flex-col md:flex-row md:items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5B21B6] to-[#3B0764] flex items-center justify-center shadow-lg timeline-dot flex-shrink-0 text-white">
              <span className="text-2xl">📲</span>
            </div>
            <div>
              <span className="block text-[10px] font-bold tracking-[0.3em] uppercase text-[#5B21B6] mb-1">Chapter 02</span>
              <h2 className="font-serif text-2xl lg:text-3xl text-[#0F172A] font-bold">Digital Presence Across Every Channel That Matters</h2>
              <p className="text-[#475569] text-xs font-medium tracking-widest uppercase mt-1">Building with consistency, not campaigns</p>
            </div>
          </div>
          <div className="reveal pl-6 border-l-2 border-[#5B21B6] rounded-r-xl">
            <p className="text-[#475569] text-base font-light leading-relaxed">
              Kirti's digital presence spans five platforms, each serving a distinct and complementary purpose. Together they form an ecosystem — not a content calendar — where trust is built across formats and audiences, and where a brand's appearance is always in context rather than as an interruption.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {platforms.map((p, i) => (
              <div key={i} className="reveal shimmer-card bg-white/80 border border-[#E2E8F0]/60 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#5B21B6]/30 transition-all duration-300 space-y-4" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.grad} flex items-center justify-center text-xl shadow-md timeline-dot text-white`}>{p.icon}</div>
                <h4 className="font-serif font-bold text-[#0F172A] text-base">{p.name}</h4>
                <span className="text-[#5B21B6] text-[10px] font-mono font-semibold block break-all">{p.handle}</span>
                <p className="text-[#475569] text-xs font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Promise Banner */}
        <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#5B21B6] via-[#3B0764] to-[#4C1D95] p-10 lg:p-12 shadow-xl">
          <div className="absolute -right-10 -bottom-10 w-56 h-56 bg-white/8 rounded-full blur-2xl" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="relative z-10 space-y-4">
            <span className="bg-white/15 border border-white/20 text-white text-[9px] font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full inline-block">Brand Ambassador Pledge</span>
            <p className="font-serif text-xl lg:text-2xl italic text-white leading-relaxed max-w-3xl">
              "I will only recommend something to my community that I genuinely believe in. That's not a policy — it's a promise."
            </p>
            <span className="text-white/80 text-sm font-bold uppercase tracking-wider block">— Kirti Yadav</span>
          </div>
        </div>

        {/* Ch 03 — Partnership Philosophy */}
        <div className="space-y-8">
          <div className="reveal flex flex-col md:flex-row md:items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5B21B6] to-[#3B0764] flex items-center justify-center shadow-lg timeline-dot flex-shrink-0 text-white">
              <span className="text-2xl">🤝</span>
            </div>
            <div>
              <span className="block text-[10px] font-bold tracking-[0.3em] uppercase text-[#5B21B6] mb-1">Chapter 03</span>
              <h2 className="font-serif text-2xl lg:text-3xl text-[#0F172A] font-bold">Partnership Philosophy — Alignment, Not Advertising</h2>
              <p className="text-[#475569] text-xs font-medium tracking-widest uppercase mt-1">What brand collaboration looks like when trust is the foundation</p>
            </div>
          </div>
          <div className="reveal pl-6 border-l-2 border-[#5B21B6] rounded-r-xl">
            <p className="text-[#475569] text-base font-light leading-relaxed">
              Kirti Yadav does not do advertising. She does advocacy — which is an entirely different proposition. When a brand appears in her content, it is because she uses it, trusts it, and believes it will genuinely benefit the people in her community. The categories she will work with are defined by alignment with her mission rather than category adjacency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {campaignFormats.map((f, i) => (
              <div key={i} className="reveal shimmer-card bg-white/80 border border-[#E2E8F0]/60 p-7 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#5B21B6]/30 transition-all duration-300 space-y-4" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="text-3xl block">{f.icon}</span>
                <h4 className="font-serif font-bold text-[#0F172A] text-base">{f.title}</h4>
                <p className="text-[#475569] text-xs font-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Categories */}
        <div>
          <div className="reveal text-center mb-10">
            <div className="inline-block border-t-[3px] border-[#5B21B6] pt-2 mb-4">
              <span className="text-[#5B21B6] font-bold text-sm tracking-[0.2em] uppercase">Partnership Categories</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl text-[#0F172A] font-bold">Brands Kirti Will Work With</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {brandCategories.map((c, i) => (
              <div key={i} className="reveal shimmer-card bg-white/80 border border-[#E2E8F0]/60 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#5B21B6]/30 transition-all duration-300 space-y-3" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${c.grad} flex items-center justify-center text-xl shadow-md text-white`}>{c.icon}</div>
                <h4 className="font-serif font-bold text-[#0F172A] text-sm">{c.title}</h4>
                <p className="text-[#475569] text-xs font-light leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-5">
          {[["2", "Brands Founded"], ["10+", "Years of Impact"], ["1,200+", "Lives Transformed"], ["∞", "Still Building"]].map(([n, l], i) => (
            <div key={i} className="shimmer-card bg-white/80 border border-[#E2E8F0]/60 p-7 rounded-3xl shadow-sm text-center hover:shadow-lg hover:-translate-y-1 hover:border-[#5B21B6]/30 transition-all duration-300" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="font-serif text-4xl text-[#5B21B6] font-bold block">{n}</span>
              <span className="text-[#475569] text-xs font-bold uppercase tracking-wider mt-2 block">{l}</span>
            </div>
          ))}
        </div>

        {/* Closing Quote */}
        <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#5B21B6] via-[#3B0764] to-[#4C1D95] p-10 lg:p-14 text-white text-center shadow-2xl">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/8 rounded-full blur-2xl" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
            <p className="font-serif text-2xl lg:text-3xl italic leading-relaxed">
              "The most important investment you will ever make is in understanding your body. Everything else follows from that."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-white/40" />
              <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Kirti Yadav</span>
              <div className="w-8 h-px bg-white/40" />
            </div>
            <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto text-sm">
              <div className="text-left">
                <h4 className="font-serif font-bold text-lg tracking-tight">KIRTI YADAV</h4>
                <p className="text-white/70 text-xs font-light">Certified Holistic Nutritionist · Founder, KuK Clean Wellness & notpaused.com</p>
              </div>
              <div className="text-right text-white/60 text-xs font-mono">
                @plantbasednutritionistkirti &nbsp;·&nbsp; /in/kirtiyadav
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
