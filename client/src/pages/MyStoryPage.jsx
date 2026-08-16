import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles, MessageCircle, Image as ImageIcon } from "lucide-react";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const CHAPTERS = [
  {
    num: "01", emoji: "🏫",
    title: "Early Education",
    sub: "Growing up in Kanpur",
    intro: "Growing up in Kanpur, at a time many families believed educating a girl wasn't worth the money. Her mum insisted on an English-medium school; her dad backed that without wavering, and her teachers kept pushing her onto every stage to speak.",
    pullQuote: {
      hindi: "Ladki hai, padhane se kya fayda, baad mein rotiyan hi banayegi.",
      english: "That's what people around us used to say   she's a girl, why bother educating her, she'll just end up making rotis anyway."
    }
  },
  {
    num: "02", emoji: "💻",
    title: "The Career",
    sub: "Data systems & Corporate",
    intro: "Studying computer science and building data systems for companies like IBM, Target, and AIG work I'm genuinely proud of. Becoming the first girl in her family into an engineering college and the first to work at an MNC, and marrying her husband across caste lines.",
    pullQuote: {
      english: "It's a journey, not a goal   compounding beats sparks."
    }
  },
   {
    num: "03", emoji: "💍",
    title: "Marriage",
    sub: "A quiet act of conviction",
    intro: "Marrying her husband Akar Misra across caste lines another quiet act of conviction. The corporate career taught her how to build systems; marriage taught her how to build a life that was truly her own.",
    pullQuote: {
      english: "The corporate career taught her how to build systems; marriage taught her how to build a life that was truly her own. Both would matter."
    }
  },
  {
    num: "04", emoji: "❤️",
    title: "Motherhood",
    sub: "Health & Transformation",
    intro: "Her daughter's early, small birth, and how it rearranged everything she thought she'd figured out   the real start of paying attention to food, rest, and her own body, eventually losing 28 kilos without ever calling it a diet."
  },
  {
    num: "05", emoji: "🌱",
    title: "Building KuKClean",
    sub: "Not setting out to build a company",
    intro: "Not setting out to build a company   just sharing what was working for her, first with friends, then a growing Facebook group, then a certified nutrition practice, then KuKClean itself, incubated at NSRCEL, IIM Bangalore."
  },
  {
    num: "06", emoji: "🌸",
    title: "Founding NotPaused",
    sub: "The gap in menopause care",
    intro: "Years into calling herself a nutritionist, not recognizing she was living through her own peri menopause   that gap is exactly why NotPaused exists, so no woman has to figure it out alone."
  },
 
];

export function MyStoryPage() {
  useReveal();

  return (
    <div className="min-h-screen bg-[#FCF8F7] font-body text-[#2E2326]">
      {/* ── 1. HERO BANNER ──────────────────────────────── */}
      <div
        className="relative overflow-hidden pt-36 pb-20 px-6 md:px-12 lg:px-20"
        style={{ background: `linear-gradient(135deg, #CF99A6 0%, #B55E79 100%)` }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="relative z-10 max-w-5xl mx-auto text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-white text-[13px] font-bold tracking-[0.25em] uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#f3dbe0]" />
            <span>My Story</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.15] mb-6">
            A Journey of Conviction, <br className="hidden md:block" />
            <span className="font-serif italic font-bold text-[#F4D9DE] drop-shadow-sm">Compounding &amp; Impact</span>
          </h1>
          <p className="text-white/85 text-base md:text-lg font-light leading-relaxed max-w-3xl mb-10">
            From corporate career to the founder of KuKClean and NotPaused   how personal health trials, motherly instinct, and community conviction created a movement.
          </p>
        </div>
      </div>

      {/* ── Chapter Navigation ───────────────────── */}
      <div className="relative z-40 flex justify-center w-full -mt-8 mb-4 px-4 pointer-events-none">
        <div className="bg-white/95 backdrop-blur-xl px-3 py-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#E8CDD3] flex items-center gap-2 md:gap-3 pointer-events-auto transition-transform duration-300">
          {CHAPTERS.map((chap) => (
            <button
              key={chap.num}
              title={chap.title}
              onClick={() => document.getElementById(`chapter-${chap.num}`)?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-[#B55E79] hover:text-white group transition-all duration-300 shadow-sm bg-[#FCF8F7] border border-[#E8CDD3]/50 hover:-translate-y-1 text-[#5F5358]"
            >
              <span className="text-sm group-hover:scale-110 transition-transform duration-300">{chap.emoji}</span>
              <span className="text-[11px] font-bold uppercase tracking-wider">
                Ch {parseInt(chap.num)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── 2. LIFE STORY CHAPTERS ──────────────────────── */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 space-y-12">
        <div className="space-y-28 max-w-4xl mx-auto">
          {CHAPTERS.map((chap, ci) => (
            <div key={chap.num} id={`chapter-${chap.num}`} className="scroll-mt-52">
              {/* Chapter Header */}
              <div className="reveal flex items-center gap-4 mb-6">
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

              <div className={["01", "04", "06"].includes(chap.num) ? "grid grid-cols-1 md:grid-cols-12 gap-8 items-center" : ""}>
                {/* Image Box placeholder on left side for Ch 1, 3, and 5 */}
                {["01", "04", "06"].includes(chap.num) && (
                  <div className="md:col-span-5 flex justify-center">
                    <div className="w-full max-w-xs sm:max-w-sm h-64 sm:h-56 rounded-3xl border-2 border-dashed border-[#B55E79]/40 bg-white shadow-xl flex flex-col items-center justify-center p-4 text-center group hover:border-[#B55E79] transition-all relative overflow-hidden">
                      <div className="w-12 h-12 rounded-xl bg-[#F4D9DE] text-[#B55E79] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
                        <ImageIcon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#B55E79] mb-1">
                        Image Box
                      </span>
                      <p className="text-xs text-[#5F5358] font-medium">
                        Add Photo Here
                      </p>
                    </div>
                  </div>
                )}

                <div className={["01", "04", "06"].includes(chap.num) ? "md:col-span-7" : ""}>
                  {/* Intro Paragraph */}
                  <div className="reveal mb-6 pl-6 border-l-2 border-[#B55E79] py-1">
                    <p className="text-lg font-light leading-relaxed text-[#5F5358]">
                      {chap.intro}
                    </p>
                  </div>

                  {/* Pull Quotes */}
                  {chap.pullQuote && (
                    <div className="reveal mt-6 bg-[#FDF5F6] border border-[#E8CDD3] p-6 rounded-2xl shadow-sm">
                      {chap.pullQuote.hindi && (
                        <p className="font-serif text-[#B55E79] italic font-bold text-lg mb-2">"{chap.pullQuote.hindi}"</p>
                      )}
                      {chap.pullQuote.english && (
                        <p className="font-serif text-[#2E2326] italic text-base">"{chap.pullQuote.english}"</p>
                      )}
                    </div>
                  )}
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

        {/* ── 3. AFTER CHAPTERS: PHILOSOPHY ──────────────── */}

        {/* The Moments That Shaped Me */}
        <div className="pt-20 border-t border-[#E8CDD3] max-w-4xl mx-auto">
          <div className="reveal text-center mb-12">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#2E2326]">The Moments That Shaped Me</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="reveal bg-white border border-[#E8CDD3] p-8 rounded-3xl shadow-sm text-center flex flex-col justify-center hover:shadow-md transition-shadow">
              <h4 className="font-serif font-bold text-lg text-[#B55E79] mb-4">Her daughter's birth</h4>
              <p className="text-sm font-light leading-relaxed text-[#5F5358]">The moment health stopped being optional and started being personal   the real start of everything that came after.</p>
            </div>
            <div className="reveal bg-white border border-[#E8CDD3] p-8 rounded-3xl shadow-sm text-center flex flex-col justify-center hover:shadow-md transition-shadow">
              <h4 className="font-serif font-bold text-lg text-[#B55E79] mb-4">Incubated at NSRCEL</h4>
              <p className="text-sm font-light leading-relaxed text-[#5F5358]">Where I learned to think like an entrepreneur, not just a founder with a good idea.</p>
            </div>
            <div className="reveal bg-white border border-[#E8CDD3] p-8 rounded-3xl shadow-sm text-center flex flex-col justify-center hover:shadow-md transition-shadow">
              <h4 className="font-serif font-bold text-lg text-[#B55E79] mb-4">Unrecognized Menopause</h4>
              <p className="text-sm font-light leading-relaxed text-[#5F5358]">Even as a nutritionist, I didn't see it coming in myself. That gap became a mission.</p>
            </div>
          </div>
        </div>

        {/* My Big Why */}
        <div className="pt-20 max-w-4xl mx-auto">
          <div className="reveal text-center mb-8">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#2E2326]">One Calling, Many Expressions</h3>
          </div>
          <div className="reveal bg-[#FCF8F7] border border-[#E8CDD3] p-8 md:p-12 rounded-3xl shadow-sm text-center">
            <p className="text-lg font-light leading-relaxed text-[#5F5358] mb-6">
              "I continue to feed her healthy, no matter what... that's the why that keeps me going in this direction, every single day."
            </p>
            <p className="text-lg font-light leading-relaxed text-[#5F5358]">
              "It's really one calling wearing several different coats... once that's steady, everything else just finds its own place around it."
            </p>
          </div>
        </div>

        {/* Closing Note and CTA */}
        <div className="pt-20 max-w-2xl mx-auto text-center pb-12">
          <p className="text-[#5F5358] italic mb-8">
            "Does this sound like the plot of my next Bollywood movie? Maybe I'll debut at 55."
          </p>
          <h3 className="font-serif text-2xl font-bold text-[#2E2326] mb-8">
            If any of this feels like your own story too, let's talk.
          </h3>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#B55E79] text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#8e455c] transition-colors shadow-lg">
            Start a conversation <MessageCircle className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
