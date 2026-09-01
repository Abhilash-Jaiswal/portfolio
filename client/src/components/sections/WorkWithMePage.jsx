import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Award, Users, Star, Mic, Rocket, Scale, Sprout, GraduationCap, 
  Utensils, Building2, Video, ExternalLink, MessageCircle, 
  CheckCircle, ArrowRight
} from "lucide-react";
import kirtiProfile from "../../assets/kirti_profile.jpg";

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
  "Startup Mentoring",
  "Brand Collaborations",
  "School Programs"
];

export function WorkWithMePage() {
  const ref = useRef(null);
  useReveal(ref);

  // PDF Requirement: "wire this up as a URL parameter or similar"
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
    <section
      id="work-with-me"
      ref={ref}
      className="min-h-screen pb-20"
      style={{ backgroundColor: theme.bg }}
    >
      {/* ── HERO BANNER ── */}
      <div className="relative overflow-hidden py-28 px-6 md:px-12 lg:px-20"
        style={{ background: `linear-gradient(135deg, #CF99A6 0%, #B55E79 100%)` }}
      >
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
                    "A complete, structured curriculum: the pantry shift, your personalised meal plan, millet and balanced-plate practices, raw eating, a dairy-free reset, lighter oil-free and grain-free cooking, mindful fasting awareness, travel-friendly habits, and nature cure practices",
                    "100+ recipes across breakfast, lunch, snacks, dinner, raw, dairy-free, and travel-friendly categories",
                    "Weekly check-in emails",
                    "A daily motivational poster",
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
                    "I enrolled with Kirti to help me reduce my weight, and it has been one of the best decisions I’ve made. She suggested a plant-based diet and guided me on how to maintain a balanced meal each day. Along with diet, she also focused on overall lifestyle changes that support both mind and body wellness.
                    In just 3 months, I was able to reduce 12 kgs, and I am extremely happy with the results. Though the journey was not smooth, her guidance, motivation, and constant support made the journey smooth and achievable. I truly appreciate her knowledge and the personalised attention she gives. I also appreciate her patience and the way she helps us to be on track all through the journey. I highly recommend her to anyone looking for a healthy and balanced transformation!"
                  </p>
                </div>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white border border-[#E8CDD3] p-6 rounded-3xl shadow-sm flex flex-col justify-center items-center text-center min-h-[150px]">
                    <span className="text-gray-300 text-xs font-bold uppercase tracking-widest">Waiting for testimonial {i + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t flex flex-col lg:flex-row items-center justify-between gap-6" style={{ borderColor: `${theme.border}60` }}>
              <div className="flex gap-3">
                <a href="https://instagram.com/nutritionist.kirti" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-[#B55E79] px-5 py-3 rounded-full shadow-md hover:bg-[#a04f67] transition-colors">
                  <InstagramIcon className="w-4 h-4" /> Instagram
                </a>
                <button onClick={() => handleCTA("Lifestyle Transformation Program")} className="inline-flex items-center gap-2 text-[#B55E79] text-xs font-bold uppercase tracking-widest bg-[#F4D9DE] px-5 py-3 rounded-full shadow-sm hover:bg-[#E6BEC6] transition-colors">
                  <MessageCircle size={16} /> Join WhatsApp Community
                </button>
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

        {/* 2 to 6. OTHER PROGRAMS (Added IDs for Navbar Links) */}
        <div className="space-y-10">
          
          <div id="corporate-wellness" className="reveal grid md:grid-cols-[1fr_300px] gap-8 bg-white/80 border border-[#E8CDD3] p-8 rounded-3xl shadow-sm">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B55E79]">Corporate Wellness</span>
              <h3 className="font-serif text-2xl font-bold text-[#2E2326]">Bring Real Wellness to Your Workplace</h3>
              <p className="text-sm font-light text-[#5F5358]">Employee wellness programs, speaking sessions (a 1-hour talk and demo, or a full day of team-building), menu design revised every six months, and menopause awareness sessions for teams. Delivered at JP Morgan, Goldman Sachs, Microsoft, IBM, ISRO, Siemens, and more.</p>
              <p className="font-serif italic text-xs text-[#B55E79]">100+ corporate sessions delivered, reaching thousands of employees across India.</p>
              <button onClick={() => handleCTA("Corporate Wellness")} className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-[#B55E79] px-6 py-3 rounded-full shadow-md hover:bg-[#a04f67] transition-colors">
                Start a Corporate Inquiry <ArrowRight size={14} />
              </button>
            </div>
            <div className="w-full h-48 md:h-auto rounded-2xl overflow-hidden shadow-md bg-gray-200">
              <img src="/images/corporate.jpg" alt="Kirti on stage" className="w-full h-full object-cover" />
            </div>
          </div>

          <div id="menopause-program" className="reveal grid md:grid-cols-[1fr_300px] gap-8 bg-white/80 border border-[#E8CDD3] p-8 rounded-3xl shadow-sm">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B55E79]">Menopause Program</span>
              <h3 className="font-serif text-2xl font-bold text-[#2E2326]">You Don't Have to Navigate This Alone</h3>
              <p className="text-sm font-light text-[#5F5358]">A 5-month 1:1 program focused on energy and hormonal reset, alongside a free, closed WhatsApp community of 1,100+ women. Built from Kirti's own experience of not recognizing her own perimenopause, even as a certified nutritionist.</p>
              <p className="font-serif italic text-xs text-[#B55E79]">Menopause is not a pause in a woman's life, it's the beginning of a new her.</p>
              <button onClick={() => handleCTA("Menopause Program")} className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-[#B55E79] px-6 py-3 rounded-full shadow-md hover:bg-[#a04f67] transition-colors">
                Get Started <ArrowRight size={14} />
              </button>
            </div>
            <div className="w-full h-48 md:h-auto rounded-2xl overflow-hidden shadow-md bg-gray-200">
              <img src="/images/menopause.jpg" alt="Kirti personal photo" className="w-full h-full object-cover" />
            </div>
          </div>

          <div id="startup-mentoring" className="reveal grid md:grid-cols-[1fr_300px] gap-8 bg-white/80 border border-[#E8CDD3] p-8 rounded-3xl shadow-sm">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B55E79]">Startup Mentoring</span>
              <h3 className="font-serif text-2xl font-bold text-[#2E2326]">Mentoring the Next Generation of Women Founders</h3>
              <p className="text-sm font-light text-[#5F5358]">Group mentoring sessions for early-stage women entrepreneurs, including students, across any sector. Currently active through the Walmart Vriddhi Mentoring Program, with sessions delivered at Christ University, Tumkur University, FKCCI, and Ique Nation Venture.</p>
              <p className="font-serif italic text-xs text-[#B55E79]">I don't believe in hierarchy. I believe that when founders come together, we all move forward faster.</p>
              <button onClick={() => handleCTA("Startup Mentoring")} className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-[#B55E79] px-6 py-3 rounded-full shadow-md hover:bg-[#a04f67] transition-colors">
                Request a Mentoring Session <ArrowRight size={14} />
              </button>
            </div>
            <div className="w-full h-48 md:h-auto rounded-2xl overflow-hidden shadow-md bg-gray-200">
              <img src="/images/mentoring.jpg" alt="Kirti mentoring" className="w-full h-full object-cover" />
            </div>
          </div>

          <div id="brand-collaborations" className="reveal grid md:grid-cols-[1fr_300px] gap-8 bg-white/80 border border-[#E8CDD3] p-8 rounded-3xl shadow-sm">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B55E79]">Brand Collaborations</span>
              <h3 className="font-serif text-2xl font-bold text-[#2E2326]">Partnering with Brands I Believe In</h3>
              <p className="text-sm font-light text-[#5F5358]">Instagram reels, YouTube content, product reviews, and event appearances, for brands that are vegan or sustainable. Past partners include Pure and Sure, Saptham India, and The Organic World.</p>
              <p className="font-serif italic text-xs text-[#B55E79]">The brands I love partnering with are the ones already living this mission with me.</p>
              <button onClick={() => handleCTA("Brand Collaborations")} className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-[#B55E79] px-6 py-3 rounded-full shadow-md hover:bg-[#a04f67] transition-colors">
                Request My Media Kit <ArrowRight size={14} />
              </button>
            </div>
            <div className="w-full h-48 md:h-auto rounded-2xl overflow-hidden shadow-md bg-gray-200">
              <img src="/images/brand.jpg" alt="Kirti filming content" className="w-full h-full object-cover" />
            </div>
          </div>

          <div id="school-programs" className="reveal grid md:grid-cols-[1fr_300px] gap-8 bg-white/80 border border-[#E8CDD3] p-8 rounded-3xl shadow-sm">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B55E79]">School Programs</span>
              <h3 className="font-serif text-2xl font-bold text-[#2E2326]">Bringing Healthy Habits into Schools</h3>
              <p className="text-sm font-light text-[#5F5358]">Talks for students and parents, hands-on student workshops, and school menu design — a paid engagement, delivered at Junior Toes International Preschool, EuroKids School, Adavaya Shaale, Prakriti School, and Navkis International School.</p>
              <p className="font-serif italic text-xs text-[#B55E79]">Kids learn healthy habits best when the whole school community learns them together.</p>
              <button onClick={() => handleCTA("School Programs")} className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-[#B55E79] px-6 py-3 rounded-full shadow-md hover:bg-[#a04f67] transition-colors">
                Get in Touch <ArrowRight size={14} />
              </button>
            </div>
            <div className="w-full h-48 md:h-auto rounded-2xl overflow-hidden shadow-md bg-gray-200">
              <img src="/images/school.jpg" alt="Kirti with students" className="w-full h-full object-cover" />
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