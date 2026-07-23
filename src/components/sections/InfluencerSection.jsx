import { useEffect, useRef } from "react";
import { 
  Camera, 
  Users, 
  MessageCircle, 
  Sparkles,
  Leaf,
  Mic,
  Star,
  MapPin,
  Mail,
  Phone,
  Heart,
  Zap,
  Award,
  Store
} from "lucide-react";

// ✅ These are the ONLY icons that work in your version
// Remove Linkedin, Instagram, Youtube, etc.

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
  { 
    icon: "💼", // Using emoji for LinkedIn
    grad: "from-[#1A4A44] to-[#0D2E2A]", 
    name: "LinkedIn", 
    handle: "/in/kirtiyadav", 
    count: "6,000+ Followers", 
    desc: "Corporate wellness positioning, thought leadership articles, and enterprise founder networking." 
  },
  { 
    icon: "📸", // Using emoji for Instagram
    grad: "from-[#1A4A44] to-[#0D2E2A]", 
    name: "Instagram", 
    handle: "@plantbasednutritionistkirti", 
    count: "4,500+ Followers", 
    desc: "Daily touchpoint — real-time plant nutrition tips, Q&A, and authentic unfiltered midlife health content." 
  },
  { 
    icon: "👥", // Using emoji for Facebook
    grad: "from-[#1A4A44] to-[#0D2E2A]", 
    name: "Facebook Community", 
    handle: "plantbasednutritionist_kirti", 
    count: "5,000+ Group Members", 
    desc: "Original vegan recipe sharing, live Q&As, and deep community discussions for Indian families." 
  },
  { 
    icon: "💬", // Using emoji for WhatsApp
    grad: "from-[#1A4A44] to-[#0D2E2A]", 
    name: "WhatsApp Ecosystem", 
    handle: "7 Metro Chapters", 
    count: "1,100+ Active Members", 
    desc: "85–95% open rates. High-intent community drops, perimenopause guidance, and curated recommendations." 
  },
  { 
    icon: "▶️", // Using emoji for YouTube
    grad: "from-[#1A4A44] to-[#0D2E2A]", 
    name: "YouTube & Podcasts", 
    handle: "@plantbasednutritionistkirti", 
    count: "10,000+ Views", 
    desc: "Long-form nutrition education, Gigi Carter international podcast guest, and YourStory video interviews." 
  },
];

const brandPartners = [
  { 
    name: "Pure and Sure", 
    icon: Leaf,
    category: "Organic Foods Partner", 
    desc: "Collaborated on clean organic ingredient awareness & sustainable food recipes." 
  },
  { 
    name: "Saptham India", 
    icon: "🫒", // Emoji for oil
    category: "Cold-Pressed Oils Partner", 
    desc: "Advocating traditional stone-ground cold-pressed oils for clean Indian cooking." 
  },
  { 
    name: "The Organic World", 
    icon: Store,
    category: "Organic Retail Partner", 
    desc: "In-store and digital wellness campaigns promoting clean-label Indian snack alternatives." 
  },
];

const speakingEngagements = [
  { 
    event: "ASSOCHAM Rajasthan Startup Summit", 
    icon: "🏆",
    role: "Keynote Speaker", 
    location: "RIC, Jaipur", 
    detail: "Spoke before national policymakers on 'Women Leading the Race'." 
  },
  { 
    event: "HR Association of India", 
    icon: "🎤",
    role: "Corporate Keynote", 
    location: "Virtual Summit", 
    detail: "Address to HR Vice Presidents on integrating midlife wellness into workplace policy." 
  },
  { 
    event: "iStart Rajasthan", 
    icon: "⭐",
    role: "State Mentor & Speaker", 
    location: "Jaipur", 
    detail: "Invited by Rajasthan State Government to inspire early-stage women founders." 
  },
  { 
    event: "International Podcast (Gigi Carter)", 
    icon: Mic,
    role: "Featured Health Expert", 
    location: "Global Podcast", 
    detail: "Interviewed on plant-based athletic performance and midlife hormonal health." 
  },
];

export function InfluencerSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section 
      id="influencer" 
      ref={ref} 
      className="bg-[#FAF7F2] border-b border-[#E8E0D6] scroll-mt-20"
    >
      {/* ── HERO BANNER ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1A4A44] via-[#0D2E2A] to-[#2D6B63] py-28 px-6 md:px-12 lg:px-20">
        <div className="absolute -top-24 -left-16 w-[450px] h-[450px] bg-[#D4A051]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-[#D4A051]/15 rounded-full blur-2xl animate-float" style={{ animationDelay: "1.8s" }} />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 max-w-5xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-3 h-3 text-[#D4A051] animate-pulse" />
            Influencer & Brand Collaborations
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1] mb-6">
            A Voice Built on <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8C28A] via-[#D4A051] to-[#F0DCC8] animate-text-gradient">
              Authenticity & Expertise
            </span>
          </h1>
          <p className="text-white/80 text-base lg:text-lg font-light leading-relaxed max-w-2xl">
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
        <div className="reveal max-w-4xl mx-auto bg-[#FAF7F2]/90 border-l-4 border-[#D4A051] rounded-r-3xl px-8 py-6 shadow-sm">
          <p className="font-serif text-lg italic text-[#2C3A37] leading-relaxed">
            "There is a meaningful difference between an influencer who became interested in wellness and a wellness expert who developed an audience. Kirti Yadav is unambiguously the latter."
          </p>
        </div>

        {/* Digital Reach Platforms */}
        <div>
          <div className="reveal text-center mb-10">
            <div className="inline-block border-t-[3px] border-[#D4A051] pt-2 mb-4">
              <span className="text-[#1A4A44] font-bold text-sm tracking-[0.2em] uppercase">📊 Ecosystem Reach</span>
            </div>
            <h2 className="font-serif text-2xl lg:text-3xl text-[#2C3A37] font-bold">Digital Platforms & Active Communities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {platforms.map((p, i) => {
              const Icon = p.icon;
              // Check if icon is an emoji (string) or component
              const isEmoji = typeof Icon === 'string';
              return (
                <div 
                  key={i} 
                  className="reveal bg-white/90 border border-[#E8E0D6] p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#D4A051]/40 transition-all duration-300 space-y-3" 
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.grad} flex items-center justify-center shadow-md text-white text-2xl`}>
                    {isEmoji ? Icon : <Icon className="w-5 h-5" strokeWidth={1.5} />}
                  </div>
                  <h4 className="font-serif font-bold text-[#2C3A37] text-base">{p.name}</h4>
                  <span className="text-[#1A4A44] text-xs font-bold block">{p.count}</span>
                  <span className="text-[#5A6F6A] text-[10px] font-mono block break-all">{p.handle}</span>
                  <p className="text-[#5A6F6A] text-xs font-light leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Brand Collaborators */}
        <div>
          <div className="reveal text-center mb-10">
            <div className="inline-block border-t-[3px] border-[#D4A051] pt-2 mb-4">
              <Heart className="w-4 h-4 inline-block text-[#D4A051] mr-2" />
              <span className="text-[#1A4A44] font-bold text-sm tracking-[0.2em] uppercase">Collaborations & Brand Partners</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl text-[#2C3A37] font-bold">Trusted by Clean Organic Brands</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brandPartners.map((bp, i) => {
              const Icon = bp.icon;
              const isEmoji = typeof Icon === 'string';
              return (
                <div 
                  key={i} 
                  className="reveal bg-white/90 border border-[#E8E0D6] p-8 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#1A4A44]/10 flex items-center justify-center text-2xl">
                      {isEmoji ? Icon : <Icon className="w-5 h-5 text-[#1A4A44]" strokeWidth={1.5} />}
                    </div>
                    <span className="bg-[#1A4A44] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block">
                      {bp.category}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-[#2C3A37] text-xl">{bp.name}</h4>
                  <p className="text-[#5A6F6A] text-xs font-light leading-relaxed">{bp.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Keynote Speaking & Public Appearances */}
        <div>
          <div className="reveal text-center mb-10">
            <div className="inline-block border-t-[3px] border-[#D4A051] pt-2 mb-4">
              <Mic className="w-4 h-4 inline-block text-[#D4A051] mr-2" />
              <span className="text-[#1A4A44] font-bold text-sm tracking-[0.2em] uppercase">Public Speaking</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl text-[#2C3A37] font-bold">Keynote Appearances & Summit Panels</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {speakingEngagements.map((se, i) => {
              const Icon = se.icon;
              const isEmoji = typeof Icon === 'string';
              return (
                <div 
                  key={i} 
                  className="reveal bg-white/90 border border-[#E8E0D6] p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div className="text-2xl">{isEmoji ? Icon : <Icon className="w-5 h-5 text-[#D4A051]" strokeWidth={1.5} />}</div>
                    <span className="text-[#D4A051] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {se.location}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-[#2C3A37] text-base">{se.event}</h4>
                  <p className="text-[11px] text-[#1A4A44] font-semibold">{se.role}</p>
                  <p className="text-[#5A6F6A] text-xs font-light leading-relaxed">{se.detail}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Media Kit CTA Banner */}
        <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A4A44] via-[#0D2E2A] to-[#2D6B63] p-10 lg:p-14 text-white text-center shadow-2xl space-y-6">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#D4A051]/10 rounded-full blur-2xl" />
          <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-[#D4A051]/5 rounded-full blur-2xl" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="bg-white/10 border border-white/20 text-white text-[9px] font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full inline-block flex items-center gap-2">
              <Zap className="w-3 h-3 text-[#D4A051]" />
              Work With Kirti
            </span>
            <h3 className="font-serif text-2xl lg:text-4xl font-bold">Request Kirti's Brand Media Kit</h3>
            <p className="text-white/80 text-sm font-light leading-relaxed">
              Interested in brand partnerships, corporate keynote speaking, or product endorsements aligned with clean nutrition & midlife wellness?
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:kirti.yadav29@gmail.com" 
                className="bg-[#D4A051] text-[#0D2E2A] font-bold text-xs px-6 py-3 rounded-full shadow-lg hover:bg-[#E8C28A] transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email: kirti.yadav29@gmail.com
              </a>
              <a 
                href="tel:9880650049" 
                className="bg-white/10 border border-white/30 text-white font-bold text-xs px-6 py-3 rounded-full shadow-lg hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call: +91 9880650049
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}