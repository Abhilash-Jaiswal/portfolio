import { useState, useEffect, useRef } from "react";
import {
  Award,
  Users,
  Star,
  Mic,
  MapPin,
  Rocket,
  Scale,
  Sprout,
  GraduationCap,
  Utensils,
  Building2,
  Newspaper,
  Radio,
  Laptop,
  FileText,
  Quote,
  Building,
  Video,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

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
  primary:      "#B55E79",   // rose-mauve
  primaryLight: "#E6BEC6",
  primarySoft:  "#F4D9DE",
  dark:         "#2E2326",
  muted:        "#5F5358",
  border:       "#E8CDD3",
  bg:           "#FCF8F7"
};

/* ─── EDIT: Images add ki gayi hain (Placeholders jab tak Kirti na de) ─── */
const milestones = [
  { year: "2024", category: "Award", icon: Award, title: "Womenpreneur Achievers Award 2024", short: "Honoured alongside Karnataka's most distinguished women leaders in entrepreneurship." ,link: "#", image: "/images/milestone-1.jpg"},
  { year: "2024", category: "Speaking", icon: Mic, title: "ASSOCHAM Rajasthan Startup Summit", short: "Keynote speaker on 'Women Leading the Race' at RIC, Jaipur." ,link: "#", image: "/images/milestone-2.jpg"},
  { year: "2024", category: "Pitching", icon: Rocket, title: "Women Leadership Conclave — Pitcher", short: "Selected nationally — pitched before IIT Guwahati & Embassy of Israel.",link: "#", image: "/images/milestone-3.jpg" },
  { year: "2024", category: "Jury", icon: Scale, title: "CAIAS Startup Summit — Jury Member", short: "Invited as Judge after KuKClean won Best Women-Led Startup." ,link: "#", image: "/images/milestone-4.jpg"},
  { year: "2023", category: "Govt Grant", icon: Sprout, title: "Grant-in-Aid — RKVY-RAFTAAR", short: "Recognised at International Nutri Cereal Convention 5.0 by ICAR-IIMR, Ministry of Agriculture.",link: "#", image: "/images/milestone-5.jpg" },
  { year: "2023", category: "Incubation", icon: GraduationCap, title: "Goldman Sachs GS10K — IIM Bangalore", short: "Graduate of the GS 10,000 Women Entrepreneur Program at NSRCEL, IIMB." ,link: "#", image: "/images/milestone-6.jpg"},
  { year: "2022", category: "Mentorship", icon: Users, title: "Walmart Vriddhi Mentoring Program", short: "Active mentor empowering early-stage women entrepreneurs across India.",link: "#", image: "/images/milestone-7.jpg"},
  { year: "2022", category: "Corporate B2B", icon: Utensils, title: "Applied Materials India Wellness Session", short: "Led 2-hour plant-based nutrition masterclass for 180 employees." ,link: "#", image: null},
  { year: "2021", category: "Incubation", icon: Building2, title: "IIM Bangalore WSP3 — Top 50 Ventures", short: "Incubated at IIMB Women Startup Programme (Cohort 3) for 1.5 years." ,link: "#", image: null},
  { year: "2020", category: "Media", icon: Newspaper, title: "India Today & YourStory Features", short: "#EatLikeKirti 21-day initiative covered by India Today; interviewed by Shradha Sharma." ,link: "#", image: null},
  { year: "2020", category: "Podcast", icon: Radio, title: "International Podcast Feature", short: "Featured speaker on Gigi Carter's global health podcast (mytrueself.com).",link: "#", image: null},
  { year: "2005", category: "Tech Degree", icon: Laptop, title: "BTech Computer Science — HBTI Kanpur", short: "Graduated with CS engineering degree before entering 9-year corporate career." ,link: "#", image: null},
];

const credentials = [
  { title: "Certified Holistic Nutritionist", org: "AFPA, USA", detail: "Specialized in whole-food plant-based nutrition and lifestyle medicine." },
  { title: "Plant-Based Athlete Coach", org: "AFPA, USA", detail: "Expertise in endurance fuel and high-performance plant nutrition." },
  { title: "Herbal & Natural Strategies for Menopause", org: "AFPA, USA", detail: "Clinical knowledge in natural hormone management & midlife wellness." },
  { title: "Goldman Sachs 10,000 Women Graduate", org: "NSRCEL, IIM Bangalore", detail: "Rigorous business strategy & growth framework for women entrepreneurs." },
  { title: "BTech Computer Science", org: "HBTI Kanpur (2001–2005)", detail: "Engineering foundation in algorithms and software systems." },
  { title: "C-PGDBA (IT)", org: "Symbiosis Centre (2007–2009)", detail: "Postgraduate diploma in Information Technology Management." },
  // NEW PDF ADDITIONS: Verified Credentials
  { title: "Introduction to Food and Health", org: "Stanford Online", detail: "Completed Stanford Online course, verified through Coursera." },
  { title: "Vegan Cooking Diploma", org: "Centre of Excellence, UK", detail: "Completed with Distinction — plant-based culinary techniques & nutrition." },
  { title: "Certified Menopause Coach", org: "Menopause Nutrition & Health", detail: "Tagged Nerdy Grad — specialized training in midlife hormonal wellness." },
];

const corporateFlagship = ["JP Morgan", "Goldman Sachs", "Microsoft", "IBM", "ISRO", "Siemens"];
const corporateRoster = [
  "Applied Materials", "LAM Research", "Reliance Ajio", "HDFC", "WeWork", "PhonePe", 
  "Infoservices", "Dixcy", "The Design Cafe", "BigBasket", "Clear Route", "Ecopeak Solutions", "[24/7].ai"
];

const b2bClients = ["Cisco", "Biocon", "Loyalytics.ai"];

const pressCoverage = [
  { source: "YourStory", title: "Video Interview with Founder Shradha Sharma", desc: "Invited to share KuKClean's origin, plant-based philosophy, and breaking industry stereotypes.",link: "#" },
  { source: "India Today", title: "'Cooking in a Crisis' Feature", desc: "National coverage of the #EatLikeKirti 21-day live lockdown nutrition initiative." ,link: "#"},
  { source: "Deccan Herald", title: "'Some Women Doing Wow Things' & Community Dining", desc: "Profiled for leading plant-based food innovation and community wellness.",link: "#" },
  { source: "The Better India", title: "Plant-Based Vegan Sugar-Free Delights", desc: "Featured for creating clean-label Indian sweets suitable for health-conscious families & diabetes management." ,link: "#"},
  { source: "HR Association of India", title: "Corporate Wellness Keynote", desc: "Keynote presentation to HR leaders on why corporates must prioritize employee nutrition." ,link: "#"},
  { source: "iStart Rajasthan", title: "Women Entrepreneurship Spotlight", desc: "Invited by Rajasthan State Government to inspire young women founders." ,link: "#"},
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
    event: "Women Leadership Conclave",
    icon: Users,
    role: "National Pitcher",
    location: "IIT Guwahati & Embassy of Israel",
    detail: "Selected as one of India's promising women founders to pitch."
  },
  {
    event: "CAIAS Startup Summit",
    icon: Star,
    role: "Jury Member & Judge",
    location: "CAIAS Bangalore",
    detail: "Evaluated early-stage startups following KuKClean's Best Startup Award."
  },
  {
    event: "HR Association of India",
    icon: Mic,
    role: "Corporate Wellness Panellist",
    location: "Virtual National Summit",
    detail: "Addressed 500+ CHROs and HR leaders on preventive nutrition."
  }
];

const linkedinRecs = [
  {
    name: "Shyam Sekhar",
    role: "Chief Analyst & Founder, iThought",
    quote: "Very impressed by Kirti's commitment to clean eating. Her knowledge and conviction shine through. Her work with KuKClean is both timely and transformative."
  },
  {
    name: "Shruti Sharma",
    role: "Program Manager, NSRCEL, IIM Bangalore",
    quote: "Kirti was an outstanding participant in the Goldman Sachs 10k Women program. Her clarity on building a scalable, purpose-driven brand was evident from day one."
  },
  {
    name: "Dr. Dayakar Rao",
    role: "CEO, Nutrihub ICAR-IIMR",
    quote: "KuKClean's work in millet innovation and clean-label food products represents exactly the kind of agritech entrepreneurship India needs right now."
  }
];

const clientQuotes = [
  {
    name: "Seema",
    role: "Coaching Client",
    rel: "Lifestyle Transformation Program",
    quote: "I enrolled with Kirti to help me reduce my weight, and it has been one of the best decisions I've made. She built me a complete meal plan and guided me on how to maintain a balanced meal each day, alongside overall lifestyle changes that support both mind and body wellness. I was able to reduce 12 kgs, and I am extremely happy with the results. The journey wasn't always smooth, but her guidance, motivation, and constant support made it achievable.",
  },
  {
    name: "Padma Uday",
    role: "Coaching Client",
    rel: "Lifestyle Transformation Program",
    quote: "Thanks a ton, Kirti, for helping me achieve this. You have hand-held me throughout the journey and helped me manage my emotions too — in one of our calls, I could feel you sensed what I was feeling without me even explaining. You are so involved with your clients. My heartfelt gratitude for bringing about this lifestyle change in me. My skin tone has definitely improved too — I keep getting compliments on my complexion and glow.",
  },
  {
    name: "Garima Kapoor",
    role: "Coaching Client",
    rel: "Lifestyle Transformation Program",
    quote: "I really want to thank Kirti for her efforts in reducing my diabetes markers, managing my weight loss, and teaching me proper portion eating. From Day 1, the emphasis was on chewing and eating clean — that line kept me motivated to keep moving ahead on the path of reversing diabetes. Thank you, Kirti, for all the magical changes.",
  },
  {
    name: "Bharathi Mani",
    role: "Coaching Client",
    rel: "Lifestyle Transformation Program",
    quote: "Consulting with Kirti was a game changer for me. I've always led an active lifestyle, but after turning fifty, I started struggling with recovery. Kirti taught me easy, practical ways to boost my protein intake within a plant-based way of eating and helped me understand the crucial role of fiber. Now I feel more nourished and satisfied than ever.",
  },
  {
    name: "Anand Raj",
    role: "VP of Engineering",
    rel: "1:1 Executive Nutrition Coaching",
    quote: "Kirti's guidance transformed my energy levels completely. No crazy diets—just real, actionable changes rooted in science. Down 12 kg and feeling sharper than ever.",
  },
  {
    name: "Priya Nair",
    role: "Senior HR Director",
    rel: "Corporate Wellness Client",
    quote: "We brought Kirti in for a company-wide wellness masterclass. The feedback was unanimous—the most engaging, practical, and non-preachy health session our team has ever had.",
  },
  {
    name: "Ritu Vardhan",
    role: "Entrepreneur & Mother",
    rel: "KuKClean Customer & Coaching Client",
    quote: "As a mother, finding food products I can trust blindly is rare. KuKClean is a staple in our home, and Kirti's personal guidance for my family's nutrition has been priceless.",
  },
  {
    name: "Vikram Sethi",
    role: "Corporate Director",
    rel: "Corporate & Individual Client",
    quote: "Kirti is a passionate and enthusiastic woman who has tremendous knowledge of nutrition and healthy eating. She is an engaging trainer and selfless consultant. She herself stands as a testament to good eating and a healthy lifestyle.",
  },
  {
    name: "Manish Kumar",
    role: "Data & AI Executive Talent Leader",
    rel: "1:1 Coaching Client",
    quote: "Kirti Yadav has helped keep better track of my food intake and my fitness goals. I have really come a long way in achieving what I wanted. Thanks to Kirti for making me a healthier person.",
  },
];

export function AchievementsSection() {
  const ref = useRef(null);
  useReveal(ref);

  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = Math.ceil(clientQuotes.length / 3);

  const nextSlide = () => {
    if (!isTransitioning) setIsTransitioning(true);
    setActiveSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (!isTransitioning) setIsTransitioning(true);
    setActiveSlide((prev) => (prev <= 0 ? totalSlides - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused, activeSlide, isTransitioning]);

  const handleTransitionEnd = () => {
    if (activeSlide >= totalSlides) {
      setIsTransitioning(false);
      setActiveSlide(0);
    }
  };

  return (
    <section 
      id="achievements" 
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
        <div className="absolute -top-24 -left-16 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-white/8 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        
        <div className="relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-8">
            <Award className="w-3.5 h-3.5 text-[#E6BEC6]" strokeWidth={1.5} />
            Awards, Credentials &amp; Media
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1] mb-6">
            Institutional Credibility &amp; <br />
            <span className="font-serif font-bold italic drop-shadow-sm gradient-text-animated">Real-World Impact</span>
          </h1>
          <p className="text-white/75 text-base lg:text-lg font-light leading-relaxed max-w-2xl">
            From IIM Bangalore incubation and Government of India grants to 100+ corporate sessions and national media features — a record built strictly on conviction.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/15 mt-12">
            {[
              ["12+", "Key Milestones"],
              ["100+", "Corporate Sessions"],
              ["2", "Government Incubations"],
              ["6+", "National Media Features"]
            ].map(([n, l], i) => (
              <div key={i}>
                <span className="font-serif text-3xl font-bold text-white block">{n}</span>
                <span className="text-white/60 text-xs uppercase tracking-widest">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 space-y-20">

        {/* Opening Quote */}
        <div 
          className="reveal max-w-4xl mx-auto bg-white/80 border-l-4 rounded-r-3xl px-8 py-6 shadow-sm border border-[#E8CDD3]"
          style={{ borderLeftColor: theme.primary }}
        >
          <p className="font-serif text-lg italic leading-relaxed" style={{ color: theme.dark }}>
            "Recognition, when it is earned rather than sought, carries a different weight. Every milestone connects to the same mission — not a list of accomplishments, but a narrative of systemic credibility."
          </p>
        </div>

        {/* Credentials & Certifications */}
        <div>
          <div className="reveal text-center mb-10">
            <div 
              className="inline-flex items-center gap-2 border-t-[3px] pt-2 mb-4"
              style={{ borderColor: theme.primary }}
            >
              <FileText className="w-4 h-4 text-[#B55E79]" strokeWidth={1.5} />
              <span className="font-bold text-sm tracking-[0.2em] uppercase" style={{ color: theme.primary }}>Formal Qualifications</span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold" style={{ color: theme.dark }}>Credentials &amp; Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((c, i) => (
              <div 
                key={i} 
                className="reveal shimmer-card bg-white/80 border border-[#E8CDD3] p-7 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 group"
              >
                <div 
                  className="w-12 h-12 rounded-2xl bg-[#F4D9DE] flex items-center justify-center text-[#B55E79] group-hover:bg-[#B55E79] group-hover:text-white transition-colors duration-500 shadow-sm"
                >
                  <Award className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider block text-[#B55E79]">{c.org}</span>
                <h3 className="font-serif font-bold text-base text-[#2E2326]">{c.title}</h3>
                <p className="text-xs font-light leading-relaxed text-[#5F5358]">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Client Roster */}
        <div 
          className="reveal bg-white/80 border border-[#E8CDD3] p-10 rounded-3xl shadow-sm space-y-8"
        >
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="font-bold text-xs tracking-widest uppercase block text-[#B55E79]">Corporate Track Record</span>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#2E2326]">Delivered 100+ Corporate Wellness Sessions</h3>
            <p className="text-sm font-light text-[#5F5358]">Trusted by global Fortune 500 firms, Indian conglomerates, and government institutions across India.</p>
          </div>

          {/* Flagship shortlist */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest block text-center text-[#5F5358]">Flagship Organizations Delivered At:</span>
            <div className="flex flex-wrap justify-center gap-3">
              {corporateFlagship.map((name) => (
                <span 
                  key={name} 
                  className="text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-sm flex items-center gap-2 bg-[#B55E79]"
                >
                  <Building className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Extended Roster */}
          <div className="space-y-3 pt-4 border-t border-[#E8CDD3]">
            <span className="text-xs font-bold uppercase tracking-widest block text-center text-[#5F5358]">Additional Corporate &amp; B2B Client Organizations:</span>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {corporateRoster.concat(b2bClients).map((name) => (
                <span 
                  key={name} 
                  className="text-xs font-medium px-3.5 py-1.5 rounded-full border border-[#E8CDD3] bg-[#F4D9DE] text-[#5F5358]"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Media & Press Highlights */}
        <div>
          <div className="reveal text-center mb-10">
            <div 
              className="inline-flex items-center gap-2 border-t-[3px] pt-2 mb-4"
              style={{ borderColor: theme.primary }}
            >
              <Newspaper className="w-4 h-4 text-[#B55E79]" strokeWidth={1.5} />
              <span className="font-bold text-sm tracking-[0.2em] uppercase" style={{ color: theme.primary }}>Media &amp; Publications</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: theme.dark }}>National Features</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressCoverage.map((p, i) => (
  <a
    key={i}
    href={p.link || "#"}
    target="_blank"
    rel="noopener noreferrer"
    className="block cursor-pointer no-underline"
  >
    <div className="reveal shimmer-card bg-white/80 border border-[#E8CDD3] p-7 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 group h-full">
      <div className="w-12 h-12 rounded-2xl bg-[#F4D9DE] flex items-center justify-center text-[#B55E79] group-hover:bg-[#B55E79] group-hover:text-white transition-colors duration-500 shadow-sm">
        <Newspaper className="w-6 h-6" strokeWidth={1.5} />
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest block text-[#B55E79]">{p.source}</span>
      <h4 className="font-serif font-bold text-base text-[#2E2326]">{p.title}</h4>
      <p className="text-xs font-light leading-relaxed text-[#5F5358]">{p.desc}</p>
    </div>
  </a>
))}
            
          </div>
        </div>

        {/* NEW PDF ADDITION: Featured Video Conversation Card */}
        <div className="reveal max-w-4xl mx-auto bg-gradient-to-br from-white to-[#FDF4F6] border border-[#E8CDD3] p-8 md:p-12 rounded-[2.5rem] shadow-lg space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#B55E79] text-white flex items-center justify-center shrink-0 shadow-md">
              <Video size={28} />
            </div>
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase block text-[#B55E79]">Featured Extended Media Conversation</span>
              <h3 className="font-serif text-2xl font-bold text-[#2E2326]">A Conversation on Building with Purpose — with Shradha Sharma</h3>
              <p className="text-sm font-light leading-relaxed text-[#5F5358]">
                A wide-ranging video conversation with Shradha Sharma, Founder of YourStory — capturing Kirti's own philosophy in her own words on purpose-driven entrepreneurship, clean food systems, and women's midlife wellness.
              </p>
              <a
                href="https://yourstory.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B55E79] hover:underline pt-2"
              >
                <span>Watch Extended Video Feature</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* LinkedIn Professional Recommendations */}
        

        {/* Client Testimonials 3-Card Continuous Slider */}
      

        {/* Quote Banner */}
        <div 
          className="reveal relative overflow-hidden rounded-3xl p-10 lg:p-14 text-center shadow-2xl"
          style={{ background: "linear-gradient(135deg, #CF99A6 0%, #B55E79 100%)" }}
        >
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/8 rounded-full blur-2xl" />
          <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-xl" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <p className="font-serif text-xl lg:text-2xl italic text-white leading-relaxed">
              "Credentialing matters because systemic health requires institutional trust. But real transformation happens when rigorous knowledge meets empathy."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-white/40" />
              <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Kirti Yadav, Founder</span>
              <div className="w-8 h-px bg-white/40" />
            </div>
          </div>
        </div>

        {/* Complete Timeline Cards Grid - EDITED HERE */}
        <div className="border-t pt-16" style={{ borderColor: `${theme.border}60` }}>
          <div className="reveal text-center mb-12">
            <div 
              className="inline-flex items-center gap-2 border-t-[3px] pt-2 mb-4"
              style={{ borderColor: theme.primary }}
            >
              <Award className="w-4 h-4 text-[#B55E79]" strokeWidth={1.5} />
              <span className="font-bold text-sm tracking-[0.2em] uppercase" style={{ color: theme.primary }}>Complete Recognition Timeline</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: theme.dark }}>Every Milestone, in Sequence</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {milestones.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer no-underline"
                  style={{ transitionDelay: `${(idx % 3) * 80}ms` }}
                >
                  {/* Card Container: Padding hata kar overflow-hidden kiya taaki image corners follow kare */}
                  <div className="reveal shimmer-card bg-white/80 border border-[#E8CDD3] rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full overflow-hidden">
                    
                    {/* Image Section (Fixed with aspect ratio) */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      {item.image ? (
                         <img src={item.image} alt={item.title} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                      ) : (
                        /* Placeholder agar image nahi hai */
                        <div className="w-full h-full bg-gradient-to-br from-[#F4D9DE] to-[#E6BEC6] flex items-center justify-center">
                          <Icon className="w-12 h-12 text-[#B55E79]/50" strokeWidth={1.5} />
                        </div>
                      )}
                      {/* Category Badge on Image */}
                      <div className="absolute top-3 right-3 z-10">
                        <span className="bg-white/90 backdrop-blur-sm text-[#B55E79] text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-sm">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Text Section */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-xl font-bold text-[#B55E79]">{item.year}</span>
                        </div>
                        <div className="w-8 h-8 rounded-xl bg-[#F4D9DE] flex items-center justify-center text-[#B55E79]">
                          <Icon className="w-4 h-4" strokeWidth={1.5} />
                        </div>
                      </div>
                      <h4 className="font-serif font-bold text-sm mb-2 leading-snug transition-colors text-[#2E2326] group-hover:text-[#B55E79]">
                        {item.title}
                      </h4>
                      <p className="text-xs font-light leading-relaxed text-[#5F5358]">{item.short}</p>
                    </div>

                  </div>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}