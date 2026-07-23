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
  { icon: "💼", grad: "from-[#5B21B6] to-[#3B0764]", name: "LinkedIn", handle: "/in/kirtiyadav", count: "6,000+ Followers", desc: "Corporate wellness positioning, thought leadership articles, and enterprise founder networking." },
  { icon: "📸", grad: "from-[#5B21B6] to-[#3B0764]", name: "Instagram", handle: "@plantbasednutritionistkirti", count: "4,500+ Followers", desc: "Daily touchpoint — real-time plant nutrition tips, Q&A, and authentic unfiltered midlife health content." },
  { icon: "👥", grad: "from-[#5B21B6] to-[#3B0764]", name: "Facebook Community", handle: "plantbasednutritionist_kirti", count: "5,000+ Group Members", desc: "Original vegan recipe sharing, live Q&As, and deep community discussions for Indian families." },
  { icon: "💬", grad: "from-[#5B21B6] to-[#3B0764]", name: "WhatsApp Ecosystem", handle: "7 Metro Chapters", count: "1,100+ Active Members", desc: "85–95% open rates. High-intent community drops, perimenopause guidance, and curated recommendations." },
  { icon: "🎥", grad: "from-[#5B21B6] to-[#3B0764]", name: "YouTube & Podcasts", handle: "@plantbasednutritionistkirti", count: "10,000+ Views", desc: "Long-form nutrition education, Gigi Carter international podcast guest, and YourStory video interviews." },
];

const brandPartners = [
  { name: "Pure and Sure", category: "Organic Foods Partner", desc: "Collaborated on clean organic ingredient awareness & sustainable food recipes." },
  { name: "Saptham India", category: "Cold-Pressed Oils Partner", desc: "Advocating traditional stone-ground cold-pressed oils for clean Indian cooking." },
  { name: "The Organic World", category: "Organic Retail Partner", desc: "In-store and digital wellness campaigns promoting clean-label Indian snack alternatives." },
];

const speakingEngagements = [
  { event: "ASSOCHAM Rajasthan Startup Summit", role: "Keynote Speaker", location: "RIC, Jaipur", detail: "Spoke before national policymakers on 'Women Leading the Race'." },
  { event: "HR Association of India", role: "Corporate Keynote", location: "Virtual Summit", detail: "Address to HR Vice Presidents on integrating midlife wellness into workplace policy." },
  { event: "iStart Rajasthan", role: "State Mentor & Speaker", location: "Jaipur", detail: "Invited by Rajasthan State Government to inspire early-stage women founders." },
  { event: "International Podcast (Gigi Carter)", role: "Featured Health Expert", location: "Global Podcast", detail: "Interviewed on plant-based athletic performance and midlife hormonal health." },
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
            Influencer & Brand Collaborations
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1] mb-6">
            A Voice Built on <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-[#E7C9E8] animate-text-gradient">Authenticity & Expertise</span>
          </h1>
          <p className="text-white/75 text-base lg:text-lg font-light leading-relaxed max-w-2xl">
            A certified nutritionist and 2x founder who developed an audience — not a social media performer. Connecting clean brands with high-intent Indian families.
          </p>
          <div className="flex flex-wrap gap-8 mt-12">
            {[["6,000+", "LinkedIn Network"], ["4,500+", "Instagram Reach"], ["1,100+", "WhatsApp Members"], ["5,000+", "Facebook Group"]].map(([n, l]) => (
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

        {/* Digital Reach Platforms */}
        <div>
          <div className="reveal text-center mb-10">
            <div className="inline-block border-t-[3px] border-[#5B21B6] pt-2 mb-4">
              <span className="text-[#5B21B6] font-bold text-sm tracking-[0.2em] uppercase">Ecosystem Reach</span>
            </div>
            <h2 className="font-serif text-2xl lg:text-3xl text-[#0F172A] font-bold">Digital Platforms & Active Communities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {platforms.map((p, i) => (
              <div key={i} className="reveal shimmer-card bg-white/80 border border-[#E2E8F0]/60 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#5B21B6]/30 transition-all duration-300 space-y-3" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.grad} flex items-center justify-center text-xl shadow-md text-white`}>{p.icon}</div>
                <h4 className="font-serif font-bold text-[#0F172A] text-base">{p.name}</h4>
                <span className="text-[#5B21B6] text-xs font-bold block">{p.count}</span>
                <span className="text-[#475569] text-[10px] font-mono block break-all">{p.handle}</span>
                <p className="text-[#475569] text-xs font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Collaborators */}
        <div>
          <div className="reveal text-center mb-10">
            <div className="inline-block border-t-[3px] border-[#5B21B6] pt-2 mb-4">
              <span className="text-[#5B21B6] font-bold text-sm tracking-[0.2em] uppercase">Collaborations & Brand Partners</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl text-[#0F172A] font-bold">Trusted by Clean Organic Brands</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brandPartners.map((bp, i) => (
              <div key={i} className="reveal shimmer-card bg-white/80 border border-[#E2E8F0]/60 p-8 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-4">
                <span className="bg-[#5B21B6] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block">{bp.category}</span>
                <h4 className="font-serif font-bold text-[#0F172A] text-xl">{bp.name}</h4>
                <p className="text-[#475569] text-xs font-light leading-relaxed">{bp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Keynote Speaking & Public Appearances */}
        <div>
          <div className="reveal text-center mb-10">
            <div className="inline-block border-t-[3px] border-[#5B21B6] pt-2 mb-4">
              <span className="text-[#5B21B6] font-bold text-sm tracking-[0.2em] uppercase">Public Speaking</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl text-[#0F172A] font-bold">Keynote Appearances & Summit Panels</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {speakingEngagements.map((se, i) => (
              <div key={i} className="reveal shimmer-card bg-white/80 border border-[#E2E8F0]/60 p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 space-y-3">
                <span className="text-[#5B21B6] text-[10px] font-bold uppercase tracking-wider block">📍 {se.location}</span>
                <h4 className="font-serif font-bold text-[#0F172A] text-base">{se.event}</h4>
                <p className="text-[11px] text-[#5B21B6] font-semibold">{se.role}</p>
                <p className="text-[#475569] text-xs font-light leading-relaxed">{se.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Media Kit CTA Banner */}
        <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#5B21B6] via-[#3B0764] to-[#4C1D95] p-10 lg:p-14 text-white text-center shadow-2xl space-y-6">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/8 rounded-full blur-2xl" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="bg-white/15 border border-white/20 text-white text-[9px] font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full inline-block">Work With Kirti</span>
            <h3 className="font-serif text-2xl lg:text-4xl font-bold">Request Kirti's Brand Media Kit</h3>
            <p className="text-white/80 text-sm font-light leading-relaxed">
              Interested in brand partnerships, corporate keynote speaking, or product endorsements aligned with clean nutrition & midlife wellness?
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a href="mailto:kirti.yadav29@gmail.com" className="bg-white text-[#5B21B6] font-bold text-xs px-6 py-3 rounded-full shadow-lg hover:bg-purple-50 transition-all">
                📧 Email: kirti.yadav29@gmail.com
              </a>
              <a href="tel:9880650049" className="bg-white/10 border border-white/30 text-white font-bold text-xs px-6 py-3 rounded-full shadow-lg hover:bg-white/20 transition-all">
                📞 Call: +91 9880650049
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
