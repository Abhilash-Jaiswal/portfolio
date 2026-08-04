import { useEffect } from "react";
import { Award, Newspaper, Star, Building, Users } from "lucide-react";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const pressCoverage = [
  { source: "YourStory", title: "Video Interview with Founder Shradha Sharma", desc: "Invited to share KuKClean's origin, plant-based philosophy, and breaking industry stereotypes." },
  { source: "India Today", title: "'Cooking in a Crisis' Feature", desc: "National coverage of the #EatLikeKirti 21-day live lockdown nutrition initiative." },
  { source: "Deccan Herald", title: "'Some Women Doing Wow Things' & Community Dining", desc: "Profiled for leading plant-based food innovation and community wellness." },
  { source: "The Better India", title: "Plant-Based Vegan Sugar-Free Delights", desc: "Featured for creating clean-label Indian sweets suitable for health-conscious families & diabetes management." },
  { source: "HR Association of India", title: "Corporate Wellness Keynote", desc: "Keynote presentation to HR leaders on why corporates must prioritize employee nutrition." },
  { source: "iStart Rajasthan", title: "Women Entrepreneurship Spotlight", desc: "Invited by Rajasthan State Government to inspire young women founders." },
];

const corporateFlagship = ["JP Morgan", "Goldman Sachs", "Microsoft", "IBM", "ISRO", "Siemens"];
const corporateRoster = [
  "Applied Materials", "LAM Research", "Reliance Ajio", "HDFC", "WeWork", "PhonePe", 
  "Infoservices", "Dixcy", "The Design Cafe", "BigBasket", "Clear Route", "Ecopeak Solutions", "[24/7].ai", "Cisco", "Biocon", "Loyalytics.ai"
];

const linkedinRecs = [
  {
    name: "Neela Shashikumar",
    role: "Strategy Execution & Transformation Leader",
    quote: "Kirti is a passionate, engaging trainer with tremendous knowledge of nutrition. Her professionalism and commitment are exceptional, and her healthy products are fresh, eco-friendly, and made with love."
  },
  {
    name: "Shilpa Jain",
    role: "Professional Associate",
    quote: "A brilliant businesswoman with a commendable attitude of perseverance. She is a hustler who loves change and speed. I wish more people would meet her to attain a paradigm shift in how they view food and life."
  },
  {
    name: "Shikha S Mazumdar",
    role: "Long-time Associate",
    quote: "Her diligence, self-discipline, and drive to master new skills stand out. She is articulate, hard-working, and focused, with an infectious enthusiasm and passion to continuously excel."
  }
];

export function PressPage() {
  useReveal();

  return (
    <div className="min-h-screen bg-[#FCF8F7] font-body text-[#2E2326] pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-16 reveal">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2E2326] mb-4">Press & Recognition</h1>
          <p className="text-lg text-[#5F5358]">The conversations and organizations that have amplified my work.</p>
        </div>

        {/* Media & Press Highlights */}
        <div className="mb-24">
          <div className="reveal text-center mb-10">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#B55E79] block mb-2">Publications</span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#2E2326]">National Press & Media Features</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressCoverage.map((p, i) => (
              <div 
                key={i} 
                className="reveal bg-white border border-[#E8CDD3] p-7 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 group"
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

        {/* Corporate Client Roster */}
        <div className="reveal bg-white border border-[#E8CDD3] p-8 md:p-12 rounded-3xl shadow-sm space-y-8 mb-24">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="font-bold text-xs tracking-widest uppercase block text-[#B55E79]">Corporate Track Record</span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#2E2326]">Corporate Wellness Partnerships</h3>
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
          <div className="space-y-3 pt-6 border-t border-[#E8CDD3]">
            <span className="text-xs font-bold uppercase tracking-widest block text-center text-[#5F5358]">Additional Corporate & B2B Client Organizations:</span>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {corporateRoster.map((name) => (
                <span 
                  key={name} 
                  className="text-xs font-medium px-3.5 py-1.5 rounded-full border border-[#E8CDD3] bg-[#F4D9DE]/60 text-[#5F5358]"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Recommendations */}
        <div>
          <div className="reveal text-center mb-10">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#B55E79] block mb-2">Recommendations</span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#2E2326]">Professional Endorsements</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {linkedinRecs.map((rec, i) => (
              <div key={i} className="reveal bg-white border border-[#E8CDD3] p-8 rounded-3xl shadow-sm relative group hover:shadow-lg transition-shadow">
                <Star className="w-6 h-6 text-[#E8CDD3] absolute top-6 right-6 group-hover:text-[#F4D9DE] transition-colors" />
                <p className="text-sm font-light leading-relaxed text-[#5F5358] mb-6 italic">"{rec.quote}"</p>
                <div className="pt-4 border-t border-[#E8CDD3]/50">
                  <h4 className="font-bold text-[#2E2326] text-sm">{rec.name}</h4>
                  <p className="text-xs text-[#5F5358] mt-1">{rec.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
