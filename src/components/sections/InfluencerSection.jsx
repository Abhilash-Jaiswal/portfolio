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
  Store,
  PlayCircle,
  Droplet
} from "lucide-react";
import kirtiImage from "../../assets/kirti_profile.jpg";

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

const LinkedinIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 1.76-6.98 6.208-.058 1.281-.072 1.688-.072 4.947s.014 3.666.072 4.947c.2 4.458 2.62 6.008 6.98 6.208 1.281.058 1.689.072 4.947.072s3.668-.014 4.948-.072c4.354-.2 6.782-1.75 6.979-6.208.059-1.281.073-1.689.073-4.947s-.014-3.666-.072-4.947c-.196-4.448-2.622-6.008-6.979-6.208-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);

const WhatsappIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.031 0C5.394 0 .005 5.389.005 12.03c0 2.128.555 4.192 1.613 6.01L0 24l6.115-1.602c1.78.966 3.784 1.472 5.916 1.472 6.637 0 12.026-5.388 12.026-12.03 0-6.643-5.388-12.03-12.026-12.03zm6.446 17.337c-.287.807-1.401 1.523-2.146 1.637-.604.092-1.36.195-3.834-.82-2.981-1.222-4.908-4.321-5.053-4.516-.145-.195-1.206-1.607-1.206-3.067 0-1.46.758-2.181 1.026-2.482.268-.302.583-.377.778-.377.194 0 .385.004.551.01.166.002.388-.063.606.464.218.527.747 1.815.815 1.954.068.139.113.301.024.485-.088.184-.132.298-.262.451-.131.155-.276.321-.397.437-.13.125-.268.261-.122.502.146.241.644 1.054 1.367 1.696.93.827 1.705 1.085 1.947 1.224.242.139.384.113.528-.035.143-.148.618-.724.783-.972.164-.248.332-.206.551-.123.22.083 1.385.654 1.621.776.236.124.394.185.452.287.058.102.058.59-.229 1.397z" />
  </svg>
);

const YoutubeIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const platforms = [
  {
    icon: LinkedinIcon,
    grad: "from-[#0A66C2] to-[#004182]",
    name: "LinkedIn",
    handle: "in/yadavkirti",
    link: "https://www.linkedin.com/in/yadavkirti/",
    count: "6,000+ Followers",
    desc: "Corporate wellness positioning, thought leadership articles, and enterprise founder networking."
  },
  {
    icon: InstagramIcon,
    grad: "from-[#E1306C] to-[#833AB4]",
    name: "Instagram",
    handle: "@nutritionist.kirti",
    link: "https://www.instagram.com/nutritionist.kirti/",
    count: "4,500+ Followers",
    desc: "Daily touchpoint — real-time plant nutrition tips, Q&A, and authentic unfiltered midlife health content."
  },
  {
    icon: FacebookIcon,
    grad: "from-[#1877F2] to-[#0C58BD]",
    name: "Facebook Community",
    handle: "plantbasednutritionist_kirti",
    link: null,
    count: "5,000+ Group Members",
    desc: "Original vegan recipe sharing, live Q&As, and deep community discussions for Indian families."
  },
  {
    icon: WhatsappIcon,
    grad: "from-[#25D366] to-[#128C7E]",
    name: "WhatsApp Ecosystem",
    handle: "7 Metro Chapters",
    link: null,
    count: "1,100+ Active Members",
    desc: "85–95% open rates. High-intent community drops, perimenopause guidance, and curated recommendations."
  },
  {
    icon: YoutubeIcon,
    grad: "from-[#FF0000] to-[#CC0000]",
    name: "YouTube & Podcasts",
    handle: "@plantbasednutritionistkirti",
    link: null,
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
    icon: Droplet,
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
    icon: Award,
    role: "Keynote Speaker",
    location: "RIC, Jaipur",
    detail: "Spoke before national policymakers on 'Women Leading the Race'."
  },
  {
    event: "HR Association of India",
    icon: Users,
    role: "Corporate Keynote",
    location: "Virtual Summit",
    detail: "Address to HR Vice Presidents on integrating midlife wellness into workplace policy."
  },
  {
    event: "iStart Rajasthan",
    icon: Star,
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
      className="bg-[#FDF8F8] border-b border-[#EACFD3] scroll-mt-20"
    >
      {/* ── HERO BANNER ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#6B2D3E] via-[#4A1E2B] to-[#3A1623] py-28 px-6 md:px-12 lg:px-20">
        <div className="absolute -top-24 -left-16 w-[450px] h-[450px] bg-[#E4BCC2]/8 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-[#E4BCC2]/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "1.8s" }} />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-3 h-3 text-[#E4BCC2] animate-pulse" />
              Influencer & Brand Collaborations
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1] mb-6">
              A Voice Built on <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E0E3] via-[#E4BCC2] to-[#FDF8F8] animate-text-gradient">
                Authenticity & Expertise
              </span>
            </h1>
            <p className="text-white/80 text-base lg:text-lg font-light leading-relaxed max-w-2xl">
              A certified nutritionist and 2x founder who developed an audience — not a social media performer. Connecting clean brands with high-intent Indian families.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-16 pt-10 border-t border-white/20">
              {[["6,000+", "LinkedIn Network"], ["4,500+", "Instagram Reach"], ["1,100+", "WhatsApp Members"], ["5,000+", "Facebook Group"]].map(([n, l]) => (
                <div key={l} className="group cursor-default">
                  <span className="font-serif text-3xl md:text-4xl font-bold text-white block group-hover:-translate-y-1 transition-transform duration-300">{n}</span>
                  <span className="text-white/70 text-[10px] uppercase tracking-[0.25em] font-medium mt-2 block">{l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-[350px] lg:max-w-[450px] shrink-0 animate-fade-in-up md:block" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-[3rem] overflow-hidden border border-white/20 p-2 bg-white/5 backdrop-blur-md shadow-2xl group hover:-translate-y-2 transition-transform duration-500">
              <img
                src={kirtiImage}
                alt="Kirti Yadav"
                className="w-full h-auto object-cover rounded-[2.5rem] group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24 space-y-32">

        {/* Opening Quote */}
          <div className="reveal max-w-4xl mx-auto bg-[#FAF2F3]/90 border-l-4 border-[#6B2D3E] rounded-r-3xl px-8 py-6 shadow-sm">
          <p className="font-serif text-lg italic text-[#0F0A0B] leading-relaxed">
            "There is a meaningful difference between an influencer who became interested in wellness and a wellness expert who developed an audience. Kirti Yadav is unambiguously the latter."
          </p>
        </div>

        {/* Digital Reach Platforms */}
        <div>
          <div className="reveal text-center mb-16">
            <div className="inline-block border-t-[3px] border-[#6B2D3E] pt-2 mb-4">
              <span className="text-[#6B2D3E] font-bold text-sm tracking-[0.2em] uppercase">📊 Ecosystem Reach</span>
            </div>
            <br />
            <h2 className="font-serif text-3xl lg:text-4xl text-[#0F0A0B] font-bold">Digital Platforms & Active Communities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {platforms.map((p, i) => {
              const Icon = p.icon;
              return (
                <a
                  href={p.link || "#"}
                  target={p.link ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  key={i}
                  className="reveal shimmer-card group bg-white/70 backdrop-blur-sm border p-8 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 space-y-4 flex flex-col items-start block"
                  style={{
                  borderColor: '#EACFD3',
                    transitionDelay: `${i * 80}ms`
                  }}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.grad} flex shrink-0 items-center justify-center shadow-inner text-white group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 w-full">
                    <span className="text-[#6B2D3E] text-[10px] uppercase font-bold tracking-[0.1em] block mb-2">{p.count}</span>
                    <h4 className="font-serif font-bold text-lg text-[#0F0A0B] leading-tight">{p.name}</h4>
                    <span className="text-[#7A5A60] text-xs font-semibold block mt-1">{p.handle}</span>
                  </div>
                  <p className="text-[#7A5A60] text-sm font-light leading-relaxed">{p.desc}</p>
                </a>
              );
            })}
          </div>
        </div>

        {/* Brand Collaborators */}
        <div>
          <div className="reveal text-center mb-16">
            <div className="inline-block border-t-[3px] border-[#6B2D3E] pt-2 mb-4">
              <span className="text-[#6B2D3E] font-bold text-sm tracking-[0.2em] uppercase whitespace-nowrap">
                <Heart className="w-4 h-4 inline-block relative -top-0.5 text-[#C9828F] mr-2" />
                Collaborations & Brand Partners
              </span>
            </div>
            <br />
            <h3 className="font-serif text-3xl lg:text-4xl text-[#0F0A0B] font-bold">Trusted by Clean Brands</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandPartners.map((bp, i) => {
              const Icon = bp.icon;
              return (
                <div
                  key={i}
                  className="reveal shimmer-card group bg-white/80 backdrop-blur-sm border border-[#EACFD3] p-8 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 space-y-5"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#F3E0E3] flex shrink-0 items-center justify-center text-2xl group-hover:bg-[#6B2D3E] group-hover:text-white transition-colors duration-500">
                      <Icon className="w-6 h-6" style={{ color: "#6B2D3E" }} strokeWidth={1.5} />
                    </div>
                    <span className="bg-[#6B2D3E] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full inline-block">
                      {bp.category}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-[#0F0A0B] text-xl">{bp.name}</h4>
                  <p className="text-[#7A5A60] text-sm font-light leading-relaxed">{bp.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Keynote Speaking & Public Appearances */}
        <div>
          <div className="reveal text-center mb-16">
            <div className="inline-block border-t-[3px] border-[#6B2D3E] pt-2 mb-4">
              <span className="text-[#6B2D3E] font-bold text-sm tracking-[0.2em] uppercase">
                <Mic className="w-4 h-4 relative -top-0.5 inline-block text-[#C9828F] mr-2" />
                Public Speaking
              </span>
            </div>
            <br />
            <h3 className="font-serif text-3xl lg:text-4xl text-[#0F0A0B] font-bold">Keynotes & Panels</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakingEngagements.map((se, i) => {
              const Icon = se.icon;
              return (
                <div
                  key={i}
                  className="reveal shimmer-card group bg-white/80 backdrop-blur-sm border border-[#EACFD3] p-8 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 space-y-4"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF2F3] flex items-center justify-center border border-[#EACFD3] text-[#6B2D3E] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <span className="text-[#6B2D3E] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 bg-[#F3E0E3] px-2 py-1 rounded truncate">
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span className="truncate">{se.location}</span>
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-[#0F0A0B] text-lg leading-tight">{se.event}</h4>
                  <p className="text-[11px] text-[#6B2D3E] uppercase tracking-wider font-bold mb-2">{se.role}</p>
                  <p className="text-[#7A5A60] text-sm font-light leading-relaxed border-t border-[#EACFD3] pt-3">{se.detail}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Media Kit CTA Banner */}
        <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#6B2D3E] via-[#4A1E2B] to-[#3A1623] p-10 lg:p-14 text-white text-center shadow-2xl space-y-6">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#E4BCC2]/8 rounded-full blur-2xl" />
          <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-[#E4BCC2]/5 rounded-full blur-2xl" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="bg-white/10 border border-white/20 text-white text-[9px] font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full inline-block flex items-center gap-2">
              <Zap className="w-3 h-3 text-[#E4BCC2]" />
              Work With Kirti
            </span>
            <h3 className="font-serif text-2xl lg:text-4xl font-bold">Request Kirti's Brand Media Kit</h3>
            <p className="text-white/80 text-sm font-light leading-relaxed">
              Interested in brand partnerships, corporate keynote speaking, or product endorsements aligned with clean nutrition & midlife wellness?
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:kirti.yadav29@gmail.com"
                className="bg-[#E4BCC2] text-[#4A1E2B] font-bold text-xs px-6 py-3 rounded-full shadow-lg hover:bg-[#F3E0E3] transition-all flex items-center gap-2"
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