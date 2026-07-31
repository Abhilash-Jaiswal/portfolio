import { ArrowDown, MessageCircle } from "lucide-react";
import heroImage from "../../assets/Image.png";

export function HeroSection() {
  return (
    <section
      id="introduction"
      className="relative w-full flex flex-col justify-between overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #DDB5BE 0%, #CF99A6 55%, #C48F9C 100%)"
      }}
    >
      {/* ── Fixed Floating "Questions? Get Help" Pill (Marie Forleo Style) ── */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-40 bg-white/95 backdrop-blur-md border border-[#E8CDD3] text-[#2E2326] px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2.5 text-xs font-semibold hover:scale-105 transition-all duration-300 group"
      >
        <span>Questions? Get Help</span>
        <div className="w-6 h-6 rounded-full bg-[#B55E79]/10 flex items-center justify-center text-[#B55E79] group-hover:bg-[#B55E79] group-hover:text-white transition-colors">
          <MessageCircle className="w-3.5 h-3.5" strokeWidth={2} />
        </div>
      </a>

      {/* ─────────────────────────────────────────────────────────────
          TOP HERO: Huge Bright White Serif Typography ("KIRTI YADAV") + Cutout
         ───────────────────────────────────────────────────────────── */}
      <div className="relative min-h-[84vh] lg:min-h-[88vh] w-full flex flex-col justify-between items-center pt-20 px-4 sm:px-8">

        {/* ── Background Giant Bright White Typography ("KIRTI YADAV") ── */}
        <div
          className="absolute inset-0 pt-8 flex flex-col items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <h1 className="font-serif text-[21vw] sm:text-[19vw] lg:text-[16vw] font-bold leading-[0.80] tracking-tight text-white uppercase text-center drop-shadow-lg opacity-100">
            KIRTI
            <br />
            YADAV
          </h1>
        </div>

        {/* ── Center Cutout Portrait Image ── */}
        <div className="relative z-10 flex-1 flex items-end justify-center w-full max-w-4xl pt-6">
          <img
            src={heroImage}
            alt="Kirti Yadav"
            className="max-h-[62vh] sm:max-h-[70vh] lg:max-h-[77vh] w-auto object-contain object-bottom filter drop-shadow-2xl transition-transform duration-700 hover:scale-[1.01]"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>

        {/* ── Oval Scroll Down Button ( ( ↓ ) Marie Forleo Style ) ── */}
        <div className="relative z-20 pb-4 pt-2">
          <a
            href="#sub-hero-intro"
            className="group flex flex-col items-center text-white hover:text-white transition-all duration-300"
            aria-label="Scroll down"
          >
            <div className="w-9 h-16 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-[#B55E79] shadow-xl bg-white/15 backdrop-blur-sm">
              <ArrowDown className="w-4.5 h-4.5 animate-bounce text-white group-hover:text-[#B55E79]" strokeWidth={2.5} />
            </div>
          </a>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          SUB-HERO INTRO SECTION: Handwritten "Hey!" on Color Border Line + Marie Forleo Copy
         ───────────────────────────────────────────────────────────── */}
      <div
        id="sub-hero-intro"
        className="relative z-10 w-full pt-10 pb-20 px-6 sm:px-12 lg:px-20 border-t border-white/40"
        style={{
          background: "linear-gradient(180deg, #EDD4D9 0%, #E6BEC6 100%)"
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-center gap-6 lg:gap-16 relative">

          {/* Left: Handwritten "Hey!" Script Font */}
          <div className="flex-shrink-0 -mt-24 sm:-mt-28 lg:-mt-36 text-center lg:text-left z-20 pointer-events-none">
            <span
              className="font-script text-8xl sm:text-9xl lg:text-[11rem] font-normal text-white leading-none inline-block transform -rotate-6 select-none filter drop-shadow-md"
            >
              Hey!
            </span>
          </div>

          {/* Right / Centered: Minimal Marie Forleo Intro Copy */}
          <div className="flex-1 text-center lg:text-left pt-2">
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-[#2E2326] leading-relaxed tracking-wide max-w-3xl">
              I'm Kirti. An entrepreneur, speaker and certified nutritionist dedicated to helping you{" "}
              <strong className="font-bold text-[#2E2326]">
                create a healthy body, business and life you love.
              </strong>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}