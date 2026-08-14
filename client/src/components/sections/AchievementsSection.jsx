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
import kirtiProfile from "../../assets/kirti_profile.jpg";

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

const milestones = [
  { year: "2024", category: "Award", icon: Award, title: "Womenpreneur Achievers Award 2024", short: "Honoured alongside Karnataka's most distinguished women leaders in entrepreneurship." },
  { year: "2024", category: "Speaking", icon: Mic, title: "ASSOCHAM Rajasthan Startup Summit", short: "Keynote speaker on 'Women Leading the Race' at RIC, Jaipur." },
  { year: "2024", category: "Pitching", icon: Rocket, title: "Women Leadership Conclave — Pitcher", short: "Selected nationally — pitched before IIT Guwahati & Embassy of Israel." },
  { year: "2024", category: "Jury", icon: Scale, title: "CAIAS Startup Summit — Jury Member", short: "Invited as Judge after KuKClean won Best Women-Led Startup." },
  { year: "2023", category: "Govt Grant", icon: Sprout, title: "Grant-in-Aid — RKVY-RAFTAAR", short: "Recognised at International Nutri Cereal Convention 5.0 by ICAR-IIMR, Ministry of Agriculture." },
  { year: "2023", category: "Incubation", icon: GraduationCap, title: "Goldman Sachs GS10K — IIM Bangalore", short: "Graduate of the GS 10,000 Women Entrepreneur Program at NSRCEL, IIMB." },
  { year: "2022", category: "Mentorship", icon: Users, title: "Walmart Vriddhi Mentoring Program", short: "Active mentor empowering early-stage women entrepreneurs across India." },
  { year: "2022", category: "Corporate B2B", icon: Utensils, title: "Applied Materials India Wellness Session", short: "Led a plant-based nutrition masterclass for corporate employees." },
  { year: "2021", category: "Incubation", icon: Building2, title: "IIM Bangalore WSP3 — Top 50 Ventures", short: "Incubated at IIMB Women Startup Programme (Cohort 3)." },
  { year: "2020", category: "Media", icon: Newspaper, title: "India Today & YourStory Features", short: "#EatLikeKirti 21-day initiative covered by India Today; interviewed by Shradha Sharma." },
  { year: "2020", category: "Podcast", icon: Radio, title: "International Podcast Feature", short: "Featured speaker on Gigi Carter's global health podcast (mytrueself.com)." },
  { year: "2005", category: "Tech Degree", icon: Laptop, title: "BTech Computer Science — HBTI Kanpur", short: "Graduated with CS engineering degree before entering 9-year corporate career." },
];

const credentials = [
  { title: "Certified Holistic Nutritionist", org: "", detail: "Specialized in whole-food plant-based nutrition and lifestyle medicine." },
  { title: "Plant-Based Athlete Coach", org: "", detail: "Expertise in endurance fuel and high-performance plant nutrition." },
  { title: "Herbal & Natural Strategies for Menopause", org: "", detail: "Clinical knowledge in natural hormone management & midlife wellness." },
  { title: "Certified Menopause Coach", org: "Nerdy Grad", detail: "Specialized training in midlife hormonal wellness." },
  { title: "BTech Computer Science", org: "HBTI Kanpur", detail: "Engineering foundation in algorithms and software systems." },
  { title: "C-PGDBA (IT)", org: "Symbiosis Centre", detail: "Postgraduate diploma in Information Technology Management." },
  // NEW PDF ADDITIONS: Verified Credentials
  { title: "Introduction to Food and Health", org: "Stanford Online", detail: "Completed Stanford Online course, verified through Coursera." },
  { title: "Vegan Cooking Diploma", org: "Centre of Excellence, UK", detail: "Completed with Distinction — plant-based culinary techniques & nutrition." },
];

const corporateFlagship = ["JP Morgan", "Goldman Sachs", "Microsoft", "IBM", "ISRO", "Siemens"];
const corporateRoster = [
  "Applied Materials", "LAM Research", "Reliance Ajio", "HDFC", "WeWork", "PhonePe", 
  "Infoservices", "Dixcy", "The Design Cafe", "BigBasket", "Clear Route", "Ecopeak Solutions", "[24/7].ai"
];

const b2bClients = ["Cisco", "Biocon", "Loyalytics.ai"];

const pressCoverage = [
  { source: "YourStory", title: "Video Interview with Founder Shradha Sharma", desc: "Invited to share KuKClean's origin, plant-based philosophy, and breaking industry stereotypes." },
  { source: "India Today", title: "'Cooking in a Crisis' Feature", desc: "National coverage of the #EatLikeKirti live lockdown nutrition initiative." },
  { source: "Deccan Herald", title: "'Some Women Doing Wow Things' & Community Dining", desc: "Profiled for leading plant-based food innovation and community wellness." },
  { source: "The Better India", title: "Plant-Based Vegan Sugar-Free Delights", desc: "Featured for creating clean-label Indian sweets suitable for health-conscious families & diabetes management." },
  { source: "HR Association of India", title: "Corporate Wellness Keynote", desc: "Keynote presentation to HR leaders on why corporates must prioritize employee nutrition." },
  { source: "iStart Rajasthan", title: "Women Entrepreneurship Spotlight", desc: "Invited by Rajasthan State Government to inspire young women founders." },
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
    quote: "I enrolled with Kirti to help me reduce my weight, and it has been one of the best decisions I've made. She built me a complete meal plan and guided me on how to maintain a balanced meal each day, alongside overall lifestyle changes that support both mind and body wellness. I was able to reduce 12 kgs, and I am extremely happy with the results. The journey wasn't always smooth, but her guidance, motivation, and constant support made it achievable. I truly appreciate her knowledge, her personalised attention, and her patience in helping me stay on track throughout.",
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
    name: "Pooja",
    role: "Coaching Client",
    rel: "Lifestyle Transformation Program",
    quote: "What Kirti teaches is her experiential knowledge not just some bookish knowledge. Despite doing a beginner's course in Ayurveda, I found it difficult to make all the required changes in my diet. What KuKClean gave was a guide in Kirti to inspire me, and a community for motivation and support when it felt like I couldn't do it. I have lost weight but most importantly have much more energy and am better able to recuperate from any health issues!",
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
            From IIM Bangalore incubation and Government of India grants to corporate wellness sessions and national media features — a record built strictly on conviction.
          </p>

          {/* Grid removed as per user request */}
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
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#2E2326]">Delivering Corporate Wellness Across India</h3>
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
              <div 
                key={i} 
                className="reveal shimmer-card bg-white/80 border border-[#E8CDD3] p-7 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F4D9DE] flex items-center justify-center text-[#B55E79] group-hover:bg-[#B55E79] group-hover:text-white transition-colors duration-500 shadow-sm">
                  <Newspaper className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest block text-[#B55E79]">{p.source}</span>
                <h4 className="font-serif font-bold text-base text-[#2E2326]">{p.title}</h4>
                <p className="text-xs font-light leading-relaxed text-[#5F5358]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* NEW PDF ADDITION: Featured Video Conversation Card */}
        <div className="reveal max-w-4xl mx-auto bg-gradient-to-br from-white to-[#FDF4F6] border border-[#E8CDD3] p-8 md:p-12 rounded-[2.5rem] shadow-lg space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-full md:w-64 aspect-video rounded-2xl overflow-hidden shadow-md flex-shrink-0">
              <img src={kirtiProfile} alt="Video Thumbnail" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 text-[#B55E79] flex items-center justify-center shadow-lg backdrop-blur-sm transition-transform hover:scale-110 cursor-pointer">
                  <Video size={20} fill="currentColor" className="ml-1" />
                </div>
              </div>
            </div>
            <div className="space-y-2 text-center md:text-left flex-1">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase block text-[#B55E79]">Featured Extended Media Conversation</span>
              <h3 className="font-serif text-2xl font-bold text-[#2E2326]">A conversation on building with purpose — with Shraddha Sharma, YourStory.</h3>
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
        <div>
          <div className="reveal text-center mb-10">
            <div 
              className="inline-flex items-center gap-2 border-t-[3px] pt-2 mb-4"
              style={{ borderColor: theme.primary }}
            >
              <Users className="w-4 h-4 text-[#B55E79]" strokeWidth={1.5} />
              <span className="font-bold text-sm tracking-[0.2em] uppercase" style={{ color: theme.primary }}>Professional Endorsements</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: theme.dark }}>LinkedIn Recommendations</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {linkedinRecs.map((r, i) => (
              <div 
                key={i} 
                className="reveal shimmer-card bg-white/80 border border-[#E8CDD3] p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-2xl text-white flex items-center justify-center font-bold text-sm bg-[#B55E79]"
                  >
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#2E2326]">{r.name}</h4>
                    <p className="text-[10px] font-semibold text-[#B55E79]">{r.role}</p>
                  </div>
                </div>
                <p className="text-xs font-light leading-relaxed italic text-[#5F5358]">"{r.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials 3-Card Continuous Slider */}
        <div>
          <div className="reveal text-center mb-10">
            <div 
              className="inline-flex items-center gap-2 border-t-[3px] pt-2 mb-4"
              style={{ borderColor: theme.primary }}
            >
              <Quote className="w-4 h-4 text-[#B55E79]" strokeWidth={1.5} />
              <span className="font-bold text-sm tracking-[0.2em] uppercase" style={{ color: theme.primary }}>Client Transformations</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold" style={{ color: theme.dark }}>Real Stories, Real Results</h3>
          </div>

          <div 
            className="reveal relative max-w-6xl mx-auto px-4 md:px-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-[#E8CDD3] text-[#B55E79] shadow-lg hover:bg-[#B55E79] hover:text-white transition-all duration-300 flex items-center justify-center -ml-2 md:-ml-6"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-[#E8CDD3] text-[#B55E79] shadow-lg hover:bg-[#B55E79] hover:text-white transition-all duration-300 flex items-center justify-center -mr-2 md:-mr-6"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slider Container */}
            <div className="overflow-hidden rounded-3xl p-1">
              <div 
                className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                onTransitionEnd={handleTransitionEnd}
              >
                {[0, 1, 2, 0].map((slideIdx, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {clientQuotes.slice(slideIdx * 3, slideIdx * 3 + 3).map((q, i) => (
                        <div 
                          key={i} 
                          className="bg-white/90 border border-[#E8CDD3] p-7 rounded-[2rem] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="w-10 h-10 rounded-2xl bg-[#F4D9DE] flex items-center justify-center text-[#B55E79] shadow-sm">
                                <Quote className="w-5 h-5" strokeWidth={1.5} />
                              </div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B55E79] bg-[#F4D9DE]/60 px-3.5 py-1 rounded-full border border-[#E8CDD3]">
                                {q.rel}
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm font-light leading-relaxed italic text-[#5F5358]">"{q.quote}"</p>
                          </div>
                          <div className="pt-4 border-t border-[#E8CDD3] flex items-center gap-3 mt-4">
                            <div className="w-10 h-10 rounded-full bg-[#B55E79] text-white flex items-center justify-center font-serif font-bold text-sm shadow-sm shrink-0">
                              {q.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-serif font-bold text-sm text-[#2E2326]">{q.name}</h4>
                              <span className="text-[11px] font-light text-[#5F5358] block">{q.role}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (!isTransitioning) setIsTransitioning(true);
                    setActiveSlide(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    (activeSlide % totalSlides) === idx ? "w-8 bg-[#B55E79]" : "w-2.5 bg-[#E8CDD3] hover:bg-[#B55E79]/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

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

        {/* Complete Timeline Cards Grid */}
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
                <div
                  key={idx}
                  className="reveal shimmer-card bg-white/80 border border-[#E8CDD3] p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                  style={{ 
                    transitionDelay: `${(idx % 3) * 80}ms`
                  }}
                >
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E8CDD3]">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-2xl bg-[#F4D9DE] flex items-center justify-center shadow-sm text-[#B55E79] group-hover:bg-[#B55E79] group-hover:text-white transition-colors duration-500"
                      >
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                    </div>
                    <span 
                      className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-[#F4D9DE] text-[#B55E79]"
                    >
                      {item.category}
                    </span>
                  </div>
                  <h4 
                    className="font-serif font-bold text-sm mb-2 leading-snug transition-colors text-[#2E2326] group-hover:text-[#B55E79]"
                  >
                    {item.title}
                  </h4>
                  <p className="text-xs font-light leading-relaxed text-[#5F5358]">{item.short}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}