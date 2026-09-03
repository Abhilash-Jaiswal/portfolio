 import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Award, Users, Star, Mic, Rocket, Scale, Sprout, GraduationCap, 
  Utensils, Building2, Video, ExternalLink, 
  CheckCircle, ArrowRight, HeartHandshake, Moon, Brain, Battery, Smile, ShieldCheck
} from "lucide-react";
import kirtiProfile from "../../assets/kirti_profile.jpg";

/* Custom LinkedIn Icon (To avoid import errors) */
const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

function useReveal(ref) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const theme = {
  primary: "#B55E79",
  primaryLight: "#E6BEC6",
  primarySoft: "#F4D9DE",
  dark: "#2E2326",
  muted: "#5F5358",
  border: "#E8CDD3",
  bg: "#FCF8F7"
};

const programOptions = [
  "Lifestyle Transformation Program",
  "Corporate Wellness",
  "Menopause Program",
  "Startup Mentoring"
];

export function WorkWithMePage() {
  const ref = useRef(null);
  useReveal(ref);

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedProgram = searchParams.get("program") || "";

  const handleCTA = (program) => {
    setSearchParams({ program: program });
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="work-with-me" ref={ref} className="min-h-screen pb-20" style={{ backgroundColor: theme.bg }}>
      {/* HERO BANNER */}
      <div className="relative overflow-hidden py-28 px-6 md:px-12 lg:px-20" style={{ background: `linear-gradient(135deg, #CF99A6 0%, #B55E79 100%)` }}>
        <div className="absolute -top-24 -left-16 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-white/8 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        
        <div className="relative z-10 max-w-5xl flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-8">
              <Award className="w-3.5 h-3.5 text-[#E6BEC6]" strokeWidth={1.5} />
              Work With Me
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1] mb-6">
              Ways We Can Work <br /> Together
            </h1>
            <p className="text-white/75 text-base lg:text-lg font-light leading-relaxed max-w-xl">
              Whether you're an individual ready for a lifestyle reset, a company investing in your team's wellbeing, or an institute looking to inspire the next generation of founders — there's a path here for you.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-80 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
            <img src={kirtiProfile} alt="Kirti Yadav" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 space-y-24">

        {/* 1. LIFESTYLE TRANSFORMATION PROGRAM */}
        <div id="lifestyle-transformation" className="reveal bg-white/80 border border-[#E8CDD3] rounded-[2.5rem] shadow-lg overflow-hidden">
          <div className="p-8 md:p-12 space-y-8">
            <div className="text-center space-y-4">
              <span className="font-bold text-xs tracking-widest uppercase text-[#B55E79]">Lifestyle Transformation</span>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#2E2326]">Your Reset Starts With What's On Your Plate</h2>
              <p className="max-w-2xl mx-auto text-sm font-light text-[#5F5358]">
                This isn't just a plan, it's steady, guided change built around real food, real habits, and real life. No fear, no comparison, no chasing anyone else's journey. Just you, moving toward a healthier, happier version of yourself.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#2E2326] mb-4 border-b pb-2" style={{ borderColor: theme.border }}>What's Included</h3>
                <ul className="space-y-3">
                  {[
                    "Live 1:1 sessions with me, personally",
                    "A complete, structured curriculum covering pantry resets, personalised meal plans, and mindful eating habits built for real life",
                    "100+ recipes across breakfast, lunch, snacks, dinner, raw, dairy-free, and travel-friendly categories",
                    "Weekly check-in emails",
                    "Daily motivation, delivered your way, to keep you going one day at a time",
                    "Private WhatsApp support, direct access to me throughout"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#5F5358]">
                      <CheckCircle className="w-5 h-5 text-[#B55E79] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div className="bg-[#F4D9DE] p-5 rounded-2xl border-l-4 shadow-sm" style={{ borderLeftColor: theme.primary }}>
                  <p className="font-serif italic text-sm text-[#2E2326]">
                    "I'm not just a nutritionist who studied this, I lived it too — my own 28kg transformation is where this program comes from."
                  </p>
                </div>

                <div className="w-full h-48 rounded-2xl overflow-hidden shadow-md bg-gray-200">
                  <img src="/images/lifestyle.jpg" alt="Kirti leading a session" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t" style={{ borderColor: `${theme.border}60` }}>
              <h3 className="font-serif text-xl font-bold text-[#2E2326] mb-6">Client Reviews</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-[#E8CDD3] p-6 rounded-3xl shadow-sm">
                  <h4 className="font-serif font-bold text-sm text-[#2E2326] mb-2">Seema</h4>
                  <p className="text-xs font-light leading-relaxed text-[#5F5358]">
                    "I enrolled with Kirti to help me reduce my weight, and it has been one of the best decisions I’ve made. She suggested a plant-based diet and guided me on how to maintain a balanced meal each day. Along with diet, she also focused on overall lifestyle changes that support both mind and body wellness. In just 3 months, I was able to reduce 12 kgs, and I am extremely happy with the results. Though the journey was not smooth, her guidance, motivation, and constant support made the journey smooth and achievable. I truly appreciate her knowledge and the personalised attention she gives. I also appreciate her patience and the way she helps us to be on track all through the journey. I highly recommend her to anyone looking for a healthy and balanced transformation!"
                  </p>
                </div>
                <div className="bg-white border border-[#E8CDD3] p-6 rounded-3xl shadow-sm">
                  <h4 className="font-serif font-bold text-sm text-[#2E2326] mb-2">Gareema</h4>
                  <p className="text-xs font-light leading-relaxed text-[#5F5358]">
                    "I really want to be thankful to Kirti for her efforts for last 3 months in reducing diabetes and managing the weight loss and enabling us for portion eating. From Day 1, the emphasis was on chewing and eating clean. That was the line to motivate me and keep moving ahead on the path of reversing diabetes. Thank u Kirti for all the magical changes."
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t flex flex-col lg:flex-row items-center justify-between gap-6" style={{ borderColor: `${theme.border}60` }}>
              <div className="flex gap-3">
                <a href="https://instagram.com/nutritionist.kirti" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-[#B55E79] px-5 py-3 rounded-full shadow-md hover:bg-[#a04f67] transition-colors">
                  <InstagramIcon className="w-4 h-4" /> Instagram
                </a>
              </div>
              <div className="flex gap-3">
                <button onClick={() => handleCTA("Lifestyle Transformation Program")} className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-[#B55E79] px-6 py-3 rounded-full shadow-md hover:bg-[#a04f67] transition-colors">
                  Join the Community
                </button>
                <button onClick={() => handleCTA("Lifestyle Transformation Program")} className="inline-flex items-center gap-2 text-[#B55E79] text-xs font-bold uppercase tracking-widest border-2 border-[#B55E79] px-6 py-3 rounded-full hover:bg-[#B55E79] hover:text-white transition-colors">
                  Start Your Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2. CORPORATE WELLNESS */}
        <div id="corporate-wellness" className="reveal bg-white/80 border border-[#E8CDD3] rounded-[2.5rem] shadow-lg overflow-hidden">
          <div className="p-8 md:p-12 space-y-8">
            <div className="text-center space-y-4">
              <span className="font-bold text-xs tracking-widest uppercase text-[#B55E79]">Corporate Wellness</span>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#2E2326]">Healthier Teams. Built From the Inside Out.</h2>
              <p className="max-w-2xl mx-auto text-sm font-light text-[#5F5358]">
                I work with organizations who believe their people are worth investing in, not just for productivity, but for how they actually feel, day to day. Every session is built around real food, real habits, and real change your team can carry forward.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="font-serif text-xl font-bold text-[#2E2326] mb-2">Signature Sessions</h3>
              <p className="text-sm font-light text-[#5F5358] mb-6">Book one session or build a series around your team's needs.</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Menopause Wellness Through Nutrition", desc: "Hormone-aware nutrition guidance for your women employees navigating perimenopause and menopause, delivered with the same care as my dedicated Menopause Program." },
                  { title: "NutriQuest: Holistic Wellness", desc: "A whole-team session on everyday nutrition, energy, and habit-building, our most popular starting point for organizations new to workplace wellness." },
                  { title: "Millets Unleashed", desc: "A live cooking demo bringing ancient grains into modern, everyday eating, hands-on, interactive, and genuinely fun for a team to experience together." },
                  { title: "Clean Eating for Peak Performance", desc: "Built for leadership and high-stress teams, nutrition strategies for sustained focus, energy, and resilience under pressure." }
                ].map((session, i) => (
                  <div key={i} className="bg-[#F4D9DE]/40 p-6 rounded-3xl border border-[#E8CDD3]">
                    <h4 className="font-serif font-bold text-base text-[#2E2326] mb-2">{session.title}</h4>
                    <p className="text-xs font-light leading-relaxed text-[#5F5358]">{session.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <h3 className="font-serif text-xl font-bold text-[#2E2326] mb-4">What's Included</h3>
              <ul className="space-y-3">
                {[
                  "Expert-led, interactive sessions with live Q&A",
                  "Downloadable recipe guides, meal plans, and habit trackers",
                  "Post-session support to answer follow-up questions",
                  "Employee feedback surveys to measure engagement",
                  "A summary report for HR with practical next steps"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#5F5358]">
                    <CheckCircle className="w-5 h-5 text-[#B55E79] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-6">
              <div className="space-y-6">
                <div className="bg-[#F4D9DE] p-5 rounded-2xl border-l-4 shadow-sm" style={{ borderLeftColor: theme.primary }}>
                  <p className="font-serif italic text-sm text-[#2E2326]">
                    "Trusted by HR and leadership teams who wanted more than a one-off wellness tick-box, and got a real shift in how their people feel."
                  </p>
                </div>
              </div>
              <div className="w-full h-64 md:h-auto rounded-2xl overflow-hidden shadow-md bg-gray-200">
                <img src="/images/corporate.jpg" alt="Kirti leading a corporate session" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="pt-6 border-t flex flex-col lg:flex-row items-center justify-between gap-6" style={{ borderColor: `${theme.border}60` }}>
              <div className="flex gap-3">
                <a href="https://linkedin.com/in/yadavkirti" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-[#0A66C2] px-5 py-3 rounded-full shadow-md hover:bg-[#004182] transition-colors">
                  <LinkedinIcon className="w-4 h-4" /> LinkedIn
                </a>
              </div>
              <div className="flex gap-3">
                <button onClick={() => handleCTA("Corporate Wellness")} className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-[#B55E79] px-6 py-3 rounded-full shadow-md hover:bg-[#a04f67] transition-colors">
                  Start a Corporate Inquiry <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. MENOPAUSE PROGRAM */}
        <div id="menopause-program" className="reveal bg-white/80 border border-[#E8CDD3] rounded-[2.5rem] shadow-lg overflow-hidden">
          <div className="p-8 md:p-12 space-y-8">
            <div className="text-center space-y-4">
              <span className="font-bold text-xs tracking-widest uppercase text-[#B55E79]">Perimenopause &amp; Menopause Support</span>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#2E2326]">Not a Decline. Not Losing Yourself. Just Your Wisdom Season.</h2>
              <p className="max-w-2xl mx-auto text-sm font-light text-[#5F5358]">
                If you're navigating the choppy waters of perimenopause or menopause, heat that comes out of nowhere, moods that shift like the tide, a fog that clouds your usually sharp mind, here's what I want you to know: you are not losing yourself, and your body is not broken. Once you understand the hormones behind what you're feeling, it stops being frightening and starts being information you can act on.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-4">
              {[
                { icon: Sprout, title: "Hormone-Balancing Nutrition", desc: "Phytoestrogens, protein, and anti-inflammatory whole foods for Indian bodies." },
                { icon: Moon, title: "Lifestyle Integration", desc: "Sleep hygiene, gentle movement, stress rituals, and a cooling toolkit." },
                { icon: HeartHandshake, title: "Mindset & Community", desc: "You cannot heal in isolation. Progress over perfection, no fear, no comparison." }
              ].map((pillar, i) => (
                <div key={i} className="bg-[#F4D9DE]/40 p-6 rounded-3xl border border-[#E8CDD3] text-center">
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-[#B55E79] text-white flex items-center justify-center mb-4 shadow-sm">
                    <pillar.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#2E2326] mb-2">{pillar.title}</h4>
                  <p className="text-xs font-light leading-relaxed text-[#5F5358]">{pillar.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <h3 className="font-serif text-xl font-bold text-[#2E2326] mb-6 text-center">What You'll Notice</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: Moon, word: "Sleep", phrase: "Falling into ease." },
                  { icon: Smile, word: "Mood", phrase: "Steadier, fewer surprises." },
                  { icon: Battery, word: "Energy", phrase: "Consistent, all day." },
                  { icon: ShieldCheck, word: "Body", phrase: "Stronger, calmer, freer." },
                  { icon: Brain, word: "Mind", phrase: "Sharper, more trusted." },
                  { icon: HeartHandshake, word: "Confidence", phrase: "A toolkit for life." }
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-[#E8CDD3] p-5 rounded-2xl text-center shadow-sm">
                    <item.icon className="w-6 h-6 text-[#B55E79] mx-auto mb-2" strokeWidth={1.5} />
                    <h5 className="font-serif font-bold text-base text-[#2E2326]">{item.word}</h5>
                    <p className="text-xs font-light text-[#5F5358] mt-1">{item.phrase}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-6">
              <div className="space-y-6">
                <div className="bg-[#F4D9DE] p-5 rounded-2xl border-l-4 shadow-sm" style={{ borderLeftColor: theme.primary }}>
                  <p className="font-serif italic text-sm text-[#2E2326]">
                    "Not Paused was built for the Indian woman's body and lifestyle — a hormone-balancing approach, grounded in science and carried with grace. We don't fight the change, we nourish it."
                  </p>
                </div>
                <div className="bg-white/60 border border-[#E8CDD3] p-6 rounded-3xl">
                  <p className="font-serif italic text-lg text-[#2E2326]">
                    This is your wisdom season. Let's navigate it together with grace, nourishment, and sisterhood.
                  </p>
                </div>
              </div>
              <div className="w-full h-64 md:h-auto rounded-2xl overflow-hidden shadow-md bg-gray-200">
                <img src="/images/menopause.jpg" alt="Kirti personal photo" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="pt-6 border-t" style={{ borderColor: `${theme.border}60` }}>
              <h3 className="font-serif text-xl font-bold text-[#2E2326] mb-6">Client Reviews</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-[#E8CDD3] p-6 rounded-3xl shadow-sm">
                  <h4 className="font-serif font-bold text-sm text-[#2E2326] mb-2">Padma</h4>
                  <p className="text-xs font-light leading-relaxed text-[#5F5358]">
                    "I am extremely happy to share that with Kirti's support I have lost nearly 6 kgs in 2.5 months. Thanks a ton Kirti for helping me achieve this. You have hand held me throughout the journey. You helped me manage my emotions too. In the last call I could feel that you could actually sense my emotions without even me explaining. We are in sync so to say. You are so involved with your clients. My heartfelt gratitude to you for bringing about the lifestyle change in me."
                  </p>
                </div>
                <div className="bg-white border border-[#E8CDD3] p-6 rounded-3xl shadow-sm">
                  <h4 className="font-serif font-bold text-sm text-[#2E2326] mb-2">Bharathi Mani</h4>
                  <p className="text-xs font-light leading-relaxed text-[#5F5358]">
                    "Consulting with Kirti was a game changer for me. I've always led an active lifestyle, but after turning fifty, I started struggling with recovery. Influenced by Instagram trends, I assumed the issue was a lack of protein in my plant-based diet. Kirti not only taught me easy and practical ways to boost my protein intake but also helped me understand the crucial role of fiber. Now, I feel more nourished and satisfied than ever!"
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t flex flex-col lg:flex-row items-center justify-between gap-6" style={{ borderColor: `${theme.border}60` }}>
              <div className="flex gap-3">
                <a href="https://instagram.com/nutritionist.kirti" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-[#B55E79] px-5 py-3 rounded-full shadow-md hover:bg-[#a04f67] transition-colors">
                  <InstagramIcon className="w-4 h-4" /> Instagram
                </a>
              </div>
              <div className="flex gap-3">
                <button onClick={() => handleCTA("Menopause Program")} className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-[#B55E79] px-6 py-3 rounded-full shadow-md hover:bg-[#a04f67] transition-colors">
                  Join the Community
                </button>
                <button onClick={() => handleCTA("Menopause Program")} className="inline-flex items-center gap-2 text-[#B55E79] text-xs font-bold uppercase tracking-widest border-2 border-[#B55E79] px-6 py-3 rounded-full hover:bg-[#B55E79] hover:text-white transition-colors">
                  Begin Your Wisdom Season
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4. STARTUP MENTORING (COMPLETELY UPDATED AS PER PDF) */}
        <div id="startup-mentoring" className="reveal bg-white/80 border border-[#E8CDD3] rounded-[2.5rem] shadow-lg overflow-hidden">
          <div className="p-8 md:p-12 space-y-8">
            
            {/* Header */}
            <div className="text-center space-y-4">
              <span className="font-bold text-xs tracking-widest uppercase text-[#B55E79]">Startup Mentoring</span>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#2E2326]">From "I Want to Do Something But I Don't Know What" to a Business That's Yours</h2>
              <p className="font-serif italic text-base text-[#B55E79]">Built in sync with your body's natural rhythm, not against it.</p>
              <p className="max-w-2xl mx-auto text-sm font-light text-[#5F5358]">
                Some founders start with a fully formed idea. Others start with just a feeling that they're meant for more. Both are welcome here. This is mentoring that meets you at your actual starting point, and builds with your energy, not against it.
              </p>
            </div>

            {/* The Journey Grid */}
            <div className="pt-6">
              <h3 className="font-serif text-xl font-bold text-[#2E2326] mb-6 text-center">The Journey</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { word: "Clarity", phrase: "From a vague feeling to a direction you can say out loud." },
                  { word: "Offer", phrase: "A real, priced offer people say yes to." },
                  { word: "Systems", phrase: "A business that runs without living in your memory." },
                  { word: "Visibility", phrase: "A presence that brings the right people to you." },
                  { word: "Sales", phrase: "Enquiries that turn into paying clients." },
                  { word: "Scale", phrase: "A clear plan for what comes next." }
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-[#E8CDD3] p-5 rounded-2xl text-center shadow-sm">
                    <h5 className="font-serif font-bold text-lg text-[#2E2326] mb-1">{item.word}</h5>
                    <p className="text-xs font-light text-[#5F5358]">{item.phrase}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Credibility & Photo */}
            <div className="grid md:grid-cols-2 gap-8 pt-6">
              <div className="space-y-6">
                <div className="bg-[#F4D9DE] p-5 rounded-2xl border-l-4 shadow-sm" style={{ borderLeftColor: theme.primary }}>
                  <p className="font-serif italic text-sm text-[#2E2326]">
                    "Currently mentoring founders through the Walmart Vriddhi Mentorship Program and Jagriti Enterprise Centre Purvanchal."
                  </p>
                </div>
              </div>
              <div className="w-full h-64 md:h-auto rounded-2xl overflow-hidden shadow-md bg-gray-200">
                <img src="/images/mentoring.jpg" alt="Kirti mentoring a group of founders" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Outbound Tabs & CTA */}
            <div className="pt-6 border-t flex flex-col lg:flex-row items-center justify-between gap-6" style={{ borderColor: `${theme.border}60` }}>
              <div className="flex gap-3">
                <a href="https://instagram.com/nutritionist.kirti" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-[#B55E79] px-5 py-3 rounded-full shadow-md hover:bg-[#a04f67] transition-colors">
                  <InstagramIcon className="w-4 h-4" /> Instagram
                </a>
                <a href="https://linkedin.com/in/yadavkirti" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-[#0A66C2] px-5 py-3 rounded-full shadow-md hover:bg-[#004182] transition-colors">
                  <LinkedinIcon className="w-4 h-4" /> LinkedIn
                </a>
              </div>
              <div className="flex gap-3">
                <button onClick={() => handleCTA("Startup Mentoring")} className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-[#B55E79] px-6 py-3 rounded-full shadow-md hover:bg-[#a04f67] transition-colors">
                  Apply for Mentoring <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* CLOSING CATCH-ALL */}
        <div className="reveal text-center bg-white/80 border border-[#E8CDD3] p-12 rounded-3xl shadow-sm">
          <h2 className="font-serif text-3xl font-bold text-[#2E2326] mb-4">Not Sure Where You Fit?</h2>
          <p className="text-sm font-light text-[#5F5358] max-w-xl mx-auto mb-6">
            Reach out and tell me a little about what you're looking for. I'll help you find the right path.
          </p>
          <button onClick={() => handleCTA("")} className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-[#B55E79] px-8 py-4 rounded-full shadow-md hover:bg-[#a04f67] transition-colors">
            Get in Touch
          </button>
        </div>

        {/* SHARED CONTACT US FORM */}
        <div id="contact-form" className="reveal max-w-4xl mx-auto bg-white border-2 rounded-[2.5rem] shadow-xl p-8 md:p-12" style={{ borderColor: theme.primary }}>
          <div className="text-center space-y-2 mb-10">
            <span className="font-bold text-xs tracking-widest uppercase text-[#B55E79]">Contact Us</span>
            <h2 className="font-serif text-3xl font-bold text-[#2E2326]">Let's Discuss Your Goals</h2>
            <p className="text-sm font-light text-[#5F5358]">Fill out your details and tell us what you're looking for. You'll hear back shortly.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#2E2326]">Name</label>
                <input type="text" placeholder="Your full name" className="w-full border border-[#E8CDD3] rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#B55E79]" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#2E2326]">Email or Phone</label>
                <input type="text" placeholder="How can we reach you?" className="w-full border border-[#E8CDD3] rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#B55E79]" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#2E2326]">What are you reaching out about?</label>
              <select 
                value={selectedProgram}
                onChange={(e) => setSearchParams({ program: e.target.value })}
                className="w-full border border-[#E8CDD3] rounded-2xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#B55E79]"
              >
                <option value="" disabled>Select a program</option>
                {programOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#2E2326]">Message</label>
              <textarea rows={4} placeholder="Tell me a little about what you need..." className="w-full border border-[#E8CDD3] rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#B55E79]"></textarea>
            </div>

            <button type="submit" className="w-full bg-[#B55E79] text-white font-bold uppercase tracking-widest text-xs py-4 rounded-2xl shadow-md hover:bg-[#a04f67] transition-colors">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}