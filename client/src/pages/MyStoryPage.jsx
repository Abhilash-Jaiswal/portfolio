import { useEffect, useRef } from "react";
import {
  GraduationCap,
  Heart,
  Leaf,
  Mic,
  Flower2,
  Award,
  Sun,
  FileText,
  Building,
  Newspaper,
  Users,
  Quote,
  Star,
  Rocket,
  Scale,
  Sprout,
  Utensils,
  Building2,
  Radio,
  Laptop,
  Sparkles
} from "lucide-react";

/* ─── Scroll reveal hook ───────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── DATA DEFINITIONS ─────────────────────────────── */

const CHAPTERS = [
  {
    num: "01", emoji: "🎓",
    title: "Computer Science & Corporate Mastery (2005–2014)",
    sub: "HBTI Kanpur · IBM · Target · AIG",
    intro: "Before Kirti Yadav became a certified holistic nutritionist, founder, speaker, or mentor, she built a robust 9-year corporate career in data engineering and corporate training — laying the analytical foundation for everything she would build later.",
    cards: [
      { heading: "Education & Tech Roots (2001–2009)", body: "Kirti graduated with a BTech in Computer Science from HBTI Kanpur in 2005, followed by a C-PGDBA in IT from Symbiosis. She began her corporate journey at IBM Global Process Services (2005–2011) as a Data Warehousing Consultant, mastering data systems and complex analytical frameworks." },
      { heading: "Global Project Leadership & Target (2011–2013)", body: "Joining Target India as Project Lead for Data Integration, Kirti spent 1.5 years onsite in the US working as a project coordinator for Chartis/AIG. During her corporate career, she conducted over 130 technical and leadership interviews, honing her keen understanding of people and performance." },
      { heading: "Training Manager at AIG (2013–2014)", body: "Transitioning to AIG as Training Manager, Kirti built the entire Training Department from scratch, personally training over 1,000 corporate professionals. 'I am a people's person, and I love interacting with people,' she recalls. This role planted the seed for her future coaching and public speaking identity." },
    ],
    closing: "A decade across global technology giants gave Kirti analytical rigor, systems thinking, and leadership confidence — tools that would prove indispensable when building her own ventures.",
  },
  {
    num: "02", emoji: "❤️",
    title: "Motherhood, Health Crisis & Transformation (2014–2018)",
    sub: "Preterm Birth · 28kg Weight Loss · Plattershare",
    intro: "In 2014, Kirti's life changed course completely. The birth of her daughter prematurely triggered postpartum complications — weight gain, high cholesterol, and elevated blood pressure — forcing a fundamental reset.",
    cards: [
      { heading: "A Life-Changing Catalyst (2014)", body: "Faced with health complications after her daughter's premature birth, Kirti stepped away from her corporate career. Driven by a mother's refusal to compromise and a deep desire to heal, she turned to researching natural health solutions, whole foods, and plant-based nutrition." },
      { heading: "The 28 kg Transformation (2018)", body: "By adopting a disciplined, whole-food plant-based lifestyle, Kirti lost 28 kg, reversed her health markers, and restored her vitality. The realization struck with power: 'If I can lose weight and become healthier following a plant-based lifestyle, it might help others as well.'" },
      { heading: "Plattershare & Community Seed (2014–2018)", body: "During this transitional chapter, Kirti co-founded Plattershare, one of India's first food networking platforms, pioneering digital campaigns. In 2018, she left Plattershare to dive full-time into nutrition, launching a Facebook group that grew to 5,000 members — the seed of KuKClean." },
    ],
    closing: "What began as a personal struggle for survival and recovery transformed into a profound calling: bringing plate-level change to Indian families.",
  },
  {
    num: "03", emoji: "🌱",
    title: "The Birth & Growth of KuKClean (2021–2023)",
    sub: "Clean-Label Foods · IIM Bangalore · RKVY-RAFTAAR",
    intro: "In July 2021, amid the COVID-19 pandemic, Kirti incorporated KuKClean Foods and Consulting Pvt Ltd alongside her husband and co-founder Akar Misra, creating a clean-label food brand rooted in transparency.",
    cards: [
      { heading: "The 'Kitchen You' Philosophy", body: "KuKClean stands for 'Kitchen' (KuK) + 'Clean', doubling as 'Kitchen, You' — teaching families how to cook clean in their own kitchens. Product standards were set by her daughter's honest reactions: 'When my daughter eats my snacks and says, Mummy, I'm so lucky to have you, that's why I make laddus.'" },
      { heading: "IIM Bangalore & Institutional Grants", body: "KuKClean was selected and incubated at IIM Bangalore's Women Startup Programme (Cohort 3 - WSP3), named among the 'Top 50 Women-Led Ventures'. She graduated from the Goldman Sachs 10,000 Women (GS10K) program at NSRCEL IIMB and received the RKVY-RAFTAAR Grant-in-Aid from ICAR-IIMR." },
      { heading: "Bootstrapped Traction & B2B Expansion", body: "Without VC funding, KuKClean generated ₹14 Lakhs in revenue in its first 7 bootstrapped months. The brand expanded into B2B supply — providing nut butters to cafes and positioning artisanal laddus into corporate Thalis for bulk canteen buyers, while employing women from disadvantaged backgrounds." },
    ],
    closing: "Incubated at top national institutes, KuKClean proved that clean-label, plant-based Indian gourmet treats could build a thriving business without sacrificing a single gram of flavour.",
  },
  {
    num: "04", emoji: "🎙️",
    title: "COVID-19 Leadership & #EatLikeKirti (2020–2021)",
    sub: "21 Days Live · Professional Certifications · National Media",
    intro: "When the 2020 lockdown forced families indoors, Kirti turned uncertainty into nationwide education, showing up every day to guide thousands of Indian households toward immune resilience.",
    cards: [
      { heading: "21 Days Live & 10 Webinars", body: "Kirti launched the #EatLikeKirti initiative, conducting 21 consecutive days of live social media broadcasts and 10 interactive webinars during lockdown. She taught families practical whole-food cooking, label literacy, and plant-based nutrition." },
      { heading: "Official Certifications (AFPA USA)", body: "To solidify her clinical expertise, Kirti earned formal credentials as a Certified Holistic Nutritionist (AFPA, USA), Plant-Based Athlete Coach (AFPA), and Specialist in Herbal & Natural Strategies for Menopause (AFPA)." },
      { heading: "National Press Features", body: "Her lockdown initiative was featured nationally by India Today ('Cooking in a Crisis'), YourStory (video interview with Shradha Sharma), Deccan Herald, The Better India, and Bangalore Insider." },
    ],
    closing: "Leading with generosity during crisis established Kirti as a trusted, evidence-based authority in holistic wellness across India.",
  },
  {
    num: "05", emoji: "🌸",
    title: "Founding NotPaused.com (2025–Present)",
    sub: "Women 35+ · Breaking Menopause Stigma · WhatsApp Movement",
    intro: "In 2025, Kirti confronted a startling personal blind spot: despite being a certified nutritionist, she experienced sleepless nights and unrecognized perimenopause symptoms because public awareness was practically non-existent.",
    cards: [
      { heading: "The Unrecognized Symptom Catalyst", body: "'Even a nutritionist like me was not aware that my menopause was hitting, because nobody really talks about it,' Kirti reflects. Realizing that 75% of India's 65 million midlife women receive no guidance, she took the plunge to build a dedicated movement." },
      { heading: "A Rebuttal to 'Pausing'", body: "She named the platform NotPaused.com — a direct rebuttal to the idea that women pause after menopause. Built for women 35+, the platform offers a free, vetted WhatsApp community of 1,100+ members across 7 metros and a 5-month 1:1 Perimenopause Coaching Program." },
      { heading: "Four-Pillar Solution Architecture", body: "NotPaused is expanding into corporate menopause awareness clinics and building a multidisciplinary bench (physiotherapists, doctors, journaling & meditation experts) to deliver Safe Community, Expert Support, Symptom Tracking, and Trusted Education." },
    ],
    closing: "'I built this because I was that woman at 3am with no answers. Now I make sure no Indian woman has to be.'",
  },
  {
    num: "06", emoji: "🏆",
    title: "Awards, Corporate Impact & Mentorship",
    sub: "Womenpreneur 2024 · 100+ Corporate Sessions · Walmart Vriddhi",
    intro: "From corporate boardrooms to national stages, Kirti's track record combines public leadership with practical mentoring for the next generation of founders.",
    cards: [
      { heading: "National Awards & Pitching Stages", body: "Honoured with the Womenpreneur Achievers Award 2024 and selected nationally for the Women Leadership Conclave 2024 (pitching before IIT Guwahati & Embassy of Israel). Speaker at ASSOCHAM Rajasthan Startup Summit ('Women Leading the Race')." },
      { heading: "100+ Corporate Wellness Sessions", body: "Delivered wellness talks and menu consultations for over 100 corporate organizations and 10,000+ lives, including JP Morgan, Goldman Sachs, Microsoft, IBM, ISRO, Siemens, Applied Materials, Reliance, and HDFC." },
      { heading: "Startup & Institutional Mentorship", body: "Active mentor under the Walmart Vriddhi Mentoring Program, guest speaker at ISBR Business School, jury member at CAIAS Startup Summit, and mentor for student programs at Ique Nation Venture and FKCCI." },
    ],
    closing: "From winning startup awards to serving as a jury judge and mentor, her journey represents the complete evolution of a purpose-driven leader.",
  },
  {
    num: "07", emoji: "☀️",
    title: "Personal Discipline & The Daily Routine",
    sub: "Non-Negotiable Mornings · 'Keep Going' Mantra",
    intro: "Kirti is a firm believer in practicing exactly what she preaches. Her daily energy is anchored in a strict, non-negotiable 2 to 3 hour morning routine.",
    cards: [
      { heading: "The 6-Step Morning Ritual", body: "1. Meditation for mental clarity, 2. Reflective Journaling, 3. Reading nutrition and motivational literature, 4. Cooking a fresh, healthy meal for her family, 5. 45 minutes of strength training, 6. Getting ready for work. These hours are non-negotiable on most days." },
      { heading: "Personal Mantra: 'Keep Going'", body: "Her personal mantra is 'Keep Going' — telling herself to keep moving in a direction, finding peace and purpose along the way. She pairs this with her signature philosophy: 'It's a journey, not a goal — compounding beats sparks.'" },
      { heading: "Horizontal Success & Single Ikigai", body: "Rather than climbing a single corporate ladder, Kirti measures achievement by horizontal success — tackling multiple causes (nutrition, menopause, mentoring). All ventures express one core ikigai: bringing plate-level change to families." },
    ],
    closing: "This grounded daily discipline provides the strength and stamina behind everything she creates across KuKClean, NotPaused, and corporate coaching.",
  },
  {
    num: "08", emoji: "🔮",
    title: "Vision for 2030 & Future Aspirations",
    sub: "1 Million Plates · Public Health Policy · Go With Slow",
    intro: "Kirti Yadav builds with a long-term perspective, focusing on deep, lasting societal impact rather than quick viral moments.",
    cards: [
      { heading: "1 Million Plate-Level Change by 2030", body: "'By 2030, I want one million people to change their plate, even if it's a small change — because India is becoming the diabetic capital of the world. Good, clean food close to nature can heal you.'" },
      { heading: "Near-Term Focus (Next 5 Years)", body: "For the next five years, her primary focus is building NotPaused.com into a nationwide movement, scaling WhatsApp city chapters, corporate clinics, and a multidisciplinary health coach bench." },
      { heading: "Long-Term Ambition (Public Health Policy)", body: "As a 'go-with-slow' builder who tackles new systemic problems every 5–7 years, her 7-year vision is to work in the public health sector, contributing to national policy changes around nutrition and women's health." },
    ],
    closing: "'I do not believe in hierarchy. I am a community-led leader — if everyone comes together, it is a better venture than building a hierarchy.'",
  },
];

const credentials = [
  { title: "Certified Holistic Nutritionist", org: "AFPA, USA", detail: "Specialized in whole-food plant-based nutrition and lifestyle medicine." },
  { title: "Plant-Based Athlete Coach", org: "AFPA, USA", detail: "Expertise in endurance fuel and high-performance plant nutrition." },
  { title: "Herbal & Natural Strategies for Menopause", org: "AFPA, USA", detail: "Clinical knowledge in natural hormone management & midlife wellness." },
  { title: "Goldman Sachs 10,000 Women Graduate", org: "NSRCEL, IIM Bangalore", detail: "Rigorous business strategy & growth framework for women entrepreneurs." },
  { title: "BTech Computer Science", org: "HBTI Kanpur (2001–2005)", detail: "Engineering foundation in algorithms and software systems." },
  { title: "C-PGDBA (IT)", org: "Symbiosis Centre (2007–2009)", detail: "Postgraduate diploma in Information Technology Management." },
];

const corporateFlagship = ["JP Morgan", "Goldman Sachs", "Microsoft", "IBM", "ISRO", "Siemens"];
const corporateRoster = [
  "Applied Materials", "LAM Research", "Reliance Ajio", "HDFC", "WeWork", "PhonePe", 
  "Infoservices", "Dixcy", "The Design Cafe", "BigBasket", "Clear Route", "Ecopeak Solutions", "[24/7].ai", "Cisco", "Biocon", "Loyalytics.ai"
];

const pressCoverage = [
  { source: "YourStory", title: "Video Interview with Founder Shradha Sharma", desc: "Invited to share KuKClean's origin, plant-based philosophy, and breaking industry stereotypes." },
  { source: "India Today", title: "'Cooking in a Crisis' Feature", desc: "National coverage of the #EatLikeKirti 21-day live lockdown nutrition initiative." },
  { source: "Deccan Herald", title: "'Some Women Doing Wow Things' & Community Dining", desc: "Profiled for leading plant-based food innovation and community wellness." },
  { source: "The Better India", title: "Plant-Based Vegan Sugar-Free Delights", desc: "Featured for creating clean-label Indian sweets suitable for health-conscious families & diabetes management." },
  { source: "HR Association of India", title: "Corporate Wellness Keynote", desc: "Keynote presentation to HR leaders on why corporates must prioritize employee nutrition." },
  { source: "iStart Rajasthan", title: "Women Entrepreneurship Spotlight", desc: "Invited by Rajasthan State Government to inspire young women founders." },
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

const milestones = [
  { year: "2024", category: "Award", icon: Award, title: "Womenpreneur Achievers Award 2024", short: "Honoured alongside Karnataka's most distinguished women leaders in entrepreneurship." },
  { year: "2024", category: "Speaking", icon: Mic, title: "ASSOCHAM Rajasthan Startup Summit", short: "Keynote speaker on 'Women Leading the Race' at RIC, Jaipur." },
  { year: "2024", category: "Pitching", icon: Rocket, title: "Women Leadership Conclave — Pitcher", short: "Selected nationally — pitched before IIT Guwahati & Embassy of Israel." },
  { year: "2024", category: "Jury", icon: Scale, title: "CAIAS Startup Summit — Jury Member", short: "Invited as Judge after KuKClean won Best Women-Led Startup." },
  { year: "2023", category: "Govt Grant", icon: Sprout, title: "Grant-in-Aid — RKVY-RAFTAAR", short: "Recognised at International Nutri Cereal Convention 5.0 by ICAR-IIMR, Ministry of Agriculture." },
  { year: "2023", category: "Incubation", icon: GraduationCap, title: "Goldman Sachs GS10K — IIM Bangalore", short: "Graduate of the GS 10,000 Women Entrepreneur Program at NSRCEL, IIMB." },
  { year: "2022", category: "Mentorship", icon: Users, title: "Walmart Vriddhi Mentoring Program", short: "Active mentor empowering early-stage women entrepreneurs across India." },
  { year: "2022", category: "Corporate B2B", icon: Utensils, title: "Applied Materials India Wellness Session", short: "Led 2-hour plant-based nutrition masterclass for 180 employees." },
  { year: "2021", category: "Incubation", icon: Building2, title: "IIM Bangalore WSP3 — Top 50 Ventures", short: "Incubated at IIMB Women Startup Programme (Cohort 3) for 1.5 years." },
  { year: "2020", category: "Media", icon: Newspaper, title: "India Today & YourStory Features", short: "#EatLikeKirti 21-day initiative covered by India Today; interviewed by Shradha Sharma." },
  { year: "2020", category: "Podcast", icon: Radio, title: "International Podcast Feature", short: "Featured speaker on Gigi Carter's global health podcast (mytrueself.com)." },
  { year: "2005", category: "Tech Degree", icon: Laptop, title: "BTech Computer Science — HBTI Kanpur", short: "Graduated with CS engineering degree before entering 9-year corporate career." },
];

/* ─── SUB-COMPONENTS ───────────────────────────────── */

function StoryCard({ heading, body, delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); }, { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className="reveal shimmer-card bg-white border border-[#E8CDD3]/70 p-7 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h4 className="font-serif font-bold text-base mb-3 transition-colors text-[#2E2326] group-hover:text-[#B55E79]">
        {heading}
      </h4>
      <p className="text-sm font-light leading-relaxed text-[#5F5358] text-justify">{body}</p>
    </div>
  );
}

/* ─── MAIN COMPONENT ───────────────────────────────── */

export function MyStoryPage() {
  useReveal();

  return (
    <div className="min-h-screen bg-[#FCF8F7] font-body text-[#2E2326]">
      
      {/* ── 1. HERO BANNER ──────────────────────────────── */}
      <div
        className="relative overflow-hidden pt-36 pb-20 px-6 md:px-12 lg:px-20"
        style={{ background: `linear-gradient(135deg, #CF99A6 0%, #B55E79 100%)` }}
      >
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-[-20%] right-[-5%] w-[450px] h-[450px] bg-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2.5s" }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

        <div className="relative z-10 max-w-5xl mx-auto text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#E6BEC6]" />
            <span>My Story &amp; Leadership Narrative</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.15] mb-6">
            A Journey of Conviction, <br className="hidden md:block" />
            <span className="font-serif italic font-bold text-[#F4D9DE] drop-shadow-sm">Compounding &amp; Impact</span>
          </h1>

          <p className="text-white/85 text-base md:text-lg font-light leading-relaxed max-w-3xl mb-10">
            From Data Warehousing Consultant at IBM &amp; Target to founder of KuKClean and NotPaused.com — personal health trials, motherly devotion, and community conviction creating a movement.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/20">
            {[
              ["8", "Life Chapters"],
              ["2005", "Career Journey Began"],
              ["100+", "Corporate Sessions"],
              ["1M", "Plate Change Goal 2030"]
            ].map(([n, label], i) => (
              <div key={i} className="text-center md:text-left">
                <span className="font-serif text-2xl md:text-3xl font-bold text-white block">{n}</span>
                <span className="text-white/70 text-[11px] font-medium uppercase tracking-wider block mt-0.5">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 2. LIFE STORY CHAPTERS ──────────────────────── */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 space-y-20">

        {/* Opening Pull Quote */}
        <div className="reveal max-w-4xl mx-auto bg-white border-l-4 border-[#B55E79] rounded-r-3xl p-8 shadow-sm border border-[#E8CDD3]/70">
          <p className="font-serif text-lg md:text-xl italic leading-relaxed text-[#2E2326]">
            "It's a journey, not a goal — compounding beats sparks. Keep going. You have to keep finding your peace and your purpose, because it's all about moving forward in your journey."
          </p>
          <span className="text-xs font-bold uppercase tracking-wider block mt-3 text-[#B55E79]">— Kirti Yadav</span>
        </div>

        {/* Chapters Listing */}
        <div className="space-y-28">
          {CHAPTERS.map((chap, ci) => (
            <div key={chap.num} className="scroll-mt-36">
              {/* Chapter Header */}
              <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#B55E79] flex items-center justify-center shadow-lg text-white font-serif font-bold text-2xl flex-shrink-0">
                    {chap.emoji}
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold tracking-[0.25em] uppercase text-[#B55E79] mb-1">
                      Chapter {chap.num}
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2E2326] leading-tight">
                      {chap.title}
                    </h2>
                    <p className="text-xs font-medium tracking-wider uppercase text-[#5F5358] mt-1">
                      {chap.sub}
                    </p>
                  </div>
                </div>
              </div>

              {/* Intro Paragraph */}
              <div className="reveal mb-8 pl-6 border-l-2 border-[#B55E79] py-1">
                <p className="text-base md:text-lg font-light leading-relaxed text-[#5F5358]">
                  {chap.intro}
                </p>
              </div>

              {/* Story Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {chap.cards.map((card, i) => (
                  <StoryCard key={i} heading={card.heading} body={card.body} delay={i * 100} />
                ))}
              </div>

              {/* Closing Insight Pill */}
              <div className="reveal max-w-3xl">
                <div className="flex items-start gap-3.5 bg-[#F4D9DE]/60 border border-[#E8CDD3] rounded-2xl p-5 shadow-sm">
                  <span className="text-xl text-[#B55E79] flex-shrink-0">✦</span>
                  <p className="text-xs md:text-sm font-medium leading-relaxed italic text-[#5F5358]">
                    {chap.closing}
                  </p>
                </div>
              </div>

              {/* Divider */}
              {ci < CHAPTERS.length - 1 && (
                <div className="mt-20 flex items-center gap-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E8CDD3] to-transparent" />
                  <div className="w-2 h-2 rounded-full bg-[#B55E79]/40 animate-pulse" />
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E8CDD3] to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Leadership Philosophy */}
        <div className="pt-16 border-t border-[#E8CDD3]">
          <div className="reveal text-center mb-12">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#B55E79] block mb-2">Core Convictions</span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#2E2326]">Leadership Philosophy</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: "01", title: "Community Leadership", body: "'I am a community-led leader. I believe that if everyone comes together, it is a better venture than building a hierarchy.' Everything Kirti builds starts with genuine connection." },
              { n: "02", title: "Embodied Practice", body: "Kirti's 2 to 3 hour daily morning ritual — meditation, journaling, family meal prep, and 45 minutes of strength training — is non-negotiable. She preaches only what she lives." },
              { n: "03", title: "Horizontal Success", body: "Kirti measures achievement by horizontal success — the breadth of causes tackled and lives touched — rather than climbing a traditional corporate ladder." },
            ].map((p, i) => (
              <div key={i} className="reveal bg-white border border-[#E8CDD3] p-7 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#B55E79] text-white flex items-center justify-center font-bold text-xs mb-4">
                  {p.n}
                </div>
                <h4 className="font-serif font-bold text-lg text-[#2E2326] mb-2">{p.title}</h4>
                <p className="text-xs md:text-sm font-light leading-relaxed text-[#5F5358]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. ACHIEVEMENTS & CREDENTIALS SECTION ─────── */}
        <div className="pt-20 border-t border-[#E8CDD3]">
          
          {/* Section Header */}
          <div className="reveal text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 bg-[#F4D9DE] text-[#B55E79] text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full">
              <Award className="w-3.5 h-3.5" />
              <span>Institutional Credibility &amp; Impact</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2E2326]">
              Achievements &amp; Credentials
            </h2>
            <p className="text-sm font-light text-[#5F5358]">
              From IIM Bangalore incubation and Government grants to 100+ corporate sessions and national press features.
            </p>
          </div>

          {/* Credentials Grid */}
          <div className="mb-20">
            <h3 className="font-serif font-bold text-xl text-[#2E2326] mb-6 text-center">Formal Qualifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {credentials.map((c, i) => (
                <div 
                  key={i} 
                  className="reveal shimmer-card bg-white border border-[#E8CDD3] p-7 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#F4D9DE] flex items-center justify-center text-[#B55E79] group-hover:bg-[#B55E79] group-hover:text-white transition-colors duration-500 shadow-sm">
                    <Award className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider block text-[#B55E79]">{c.org}</span>
                  <h4 className="font-serif font-bold text-base text-[#2E2326]">{c.title}</h4>
                  <p className="text-xs font-light leading-relaxed text-[#5F5358]">{c.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Corporate Client Roster */}
          <div className="reveal bg-white border border-[#E8CDD3] p-8 md:p-12 rounded-3xl shadow-sm space-y-8 mb-20">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="font-bold text-xs tracking-widest uppercase block text-[#B55E79]">Corporate Track Record</span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#2E2326]">Delivered 100+ Corporate Wellness Sessions</h3>
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
              <span className="text-xs font-bold uppercase tracking-widest block text-center text-[#5F5358]">Additional Corporate &amp; B2B Client Organizations:</span>
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

          {/* Media & Press Highlights */}
          <div className="mb-20">
            <div className="reveal text-center mb-10">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#B55E79] block mb-1">Publications</span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#2E2326]">National Press &amp; Media Features</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pressCoverage.map((p, i) => (
                <div 
                  key={i} 
                  className="reveal shimmer-card bg-white border border-[#E8CDD3] p-7 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 group"
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

          {/* Professional Recommendations & Client Reviews */}
          <div className="mb-20">
            <div className="reveal text-center mb-10">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#B55E79] block mb-1">Testimonials</span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#2E2326]">Professional Recommendations</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {linkedinRecs.map((r, i) => (
                <div key={i} className="reveal bg-white border border-[#E8CDD3] p-7 rounded-3xl shadow-sm space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl text-white flex items-center justify-center font-bold text-sm bg-[#B55E79]">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {clientQuotes.map((q, i) => (
                <div key={i} className="reveal bg-white border border-[#E8CDD3] p-5 rounded-2xl shadow-sm space-y-3">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#B55E79] block">{q.rel}</span>
                  <p className="text-xs font-light leading-relaxed italic text-[#5F5358]">"{q.quote}"</p>
                  <div className="pt-2 border-t border-[#E8CDD3]">
                    <h4 className="font-serif font-bold text-xs text-[#2E2326]">{q.name}</h4>
                    <span className="text-[10px] font-light text-[#5F5358] block">{q.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Complete Milestone Timeline Grid */}
          <div className="pt-16 border-t border-[#E8CDD3]">
            <div className="reveal text-center mb-12">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#B55E79] block mb-2">Chronological Recognition</span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#2E2326]">Milestone Timeline</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {milestones.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="reveal bg-white border border-[#E8CDD3] p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-3 pb-3 border-b border-[#E8CDD3]">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-[#F4D9DE] flex items-center justify-center text-[#B55E79] group-hover:bg-[#B55E79] group-hover:text-white transition-colors duration-300">
                          <Icon className="w-4 h-4" strokeWidth={1.5} />
                        </div>
                        <span className="font-serif text-lg font-bold text-[#B55E79]">{item.year}</span>
                      </div>
                      <span className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-[#F4D9DE] text-[#B55E79]">
                        {item.category}
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-sm mb-2 text-[#2E2326] group-hover:text-[#B55E79] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs font-light leading-relaxed text-[#5F5358]">{item.short}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* ── 4. CLOSING STATEMENT BANNER ─────────────────── */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pb-20">
        <div className="reveal relative overflow-hidden rounded-3xl p-10 md:p-14 text-center shadow-xl" style={{ background: "linear-gradient(135deg, #CF99A6 0%, #B55E79 100%)" }}>
          <div className="relative z-10 max-w-3xl mx-auto space-y-4 text-white">
            <p className="font-serif text-xl md:text-2xl italic leading-relaxed">
              "Credentialing matters because systemic health requires institutional trust. But real transformation happens when rigorous knowledge meets empathy."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-white/40" />
              <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Kirti Yadav · Founder &amp; Holistic Nutritionist</span>
              <div className="w-8 h-px bg-white/40" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
