import { ArrowDown, ArrowRight, Sparkles, Star, Users, BadgeCheck } from "lucide-react";
import heroImage from "../../assets/Image.png";

export function HeroSection() {
  return (
    <section
      id="introduction"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#E4BCC2" }}
    >
      {/* ── Layered background blobs ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Large radial glow top-right */}
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.35) 0%, transparent 70%)"
          }}
        />
        {/* Soft blush bottom-left */}
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full animate-float-slow"
          style={{
            background: "radial-gradient(circle, rgba(107,45,62,0.10) 0%, transparent 70%)"
          }}
        />
        {/* Subtle centre vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(160deg, rgba(255,255,255,0.18) 0%, transparent 50%, rgba(107,45,62,0.06) 100%)"
          }}
        />
      </div>

      {/* ── Main layout ── */}
      <div className="relative z-10 max-w-[1320px] w-full mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* ── LEFT COLUMN ── */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-7">

          {/* Category tags */}
          <div
            className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-bold tracking-[0.22em] uppercase"
            style={{ color: "#4A1E2B" }}
          >
            <span>Founder</span>
            <span style={{ color: "#6B2D3E", opacity: 0.5 }}>·</span>
            <span>Nutritionist</span>
            <span style={{ color: "#6B2D3E", opacity: 0.5 }}>·</span>
            <span>Menopause Coach</span>
            <span style={{ color: "#6B2D3E", opacity: 0.5 }}>·</span>
            <span>Mentor</span>
          </div>

          {/* Main headline */}
          <h1
            className="font-serif font-bold leading-[1.06] tracking-tight"
            style={{ color: "#0F0A0B", fontSize: "clamp(2.6rem, 5.5vw, 4.25rem)" }}
          >
            Nourishing lives,<br />
            building{" "}
            <span
              className="italic animate-text-gradient"
              style={{
                backgroundImage: "linear-gradient(135deg, #4A1E2B 0%, #6B2D3E 40%, #C9828F 70%, #4A1E2B 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% auto"
              }}
            >
              movements.
            </span>
          </h1>

          {/* Greeting */}
          <div className="space-y-2 max-w-lg">
            <div className="flex items-baseline gap-2.5">
              <span className="font-script text-4xl leading-none" style={{ color: "#6B2D3E" }}>
                Hey!
              </span>
              <span className="font-serif font-bold text-xl" style={{ color: "#0F0A0B" }}>
                I'm Kirti
              </span>
            </div>
            <p
              className="text-base lg:text-[1.05rem] font-normal leading-relaxed"
              style={{ color: "#4A1E2B", maxWidth: "420px" }}
            >
              A founder, certified nutritionist, and builder of kinder systems —
              for bodies, workplaces, and the lives we're still becoming.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="#introduction-details"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.97]"
              style={{
                backgroundColor: "#6B2D3E",
                color: "#FFFFFF",
                boxShadow: "0 4px 24px rgba(107,45,62,0.28)"
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#4A1E2B"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "#6B2D3E"}
            >
              Explore my work
              <ArrowRight
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="/life-story"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm border-2 transition-all duration-300 active:scale-[0.97]"
              style={{
                borderColor: "#6B2D3E",
                color: "#6B2D3E",
                backgroundColor: "transparent"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = "#6B2D3E";
                e.currentTarget.style.color = "#FFFFFF";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#6B2D3E";
              }}
            >
              Read my story
            </a>
          </div>

          {/* Keep reading */}
          <div className="pt-1">
            <a
              href="#introduction-details"
              className="inline-flex items-center gap-2 text-xs font-semibold group transition-colors"
              style={{ color: "#4A1E2B" }}
            >
              <span className="tracking-widest uppercase">Keep reading</span>
              <ArrowDown
                className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform duration-300"
              />
            </a>
          </div>

          {/* Community badge */}
          <div
            className="pt-5 border-t flex items-center gap-4 max-w-sm"
            style={{ borderColor: "rgba(107,45,62,0.2)" }}
          >
            <div className="flex -space-x-2.5">
              {["K","Y","M"].map((l, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: ["#6B2D3E","#4A1E2B","#C9828F"][i],
                    borderColor: "#E4BCC2",
                    color: "#FFFFFF"
                  }}
                >
                  {l}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold" style={{ color: "#0F0A0B" }}>
                <Users className="w-3.5 h-3.5" style={{ color: "#6B2D3E" }} />
                Our Happy Community
              </div>
              <p className="text-xs flex items-center gap-1 mt-0.5" style={{ color: "#7A5A60" }}>
                <Star className="w-3 h-3 fill-current" style={{ color: "#6B2D3E" }} />
                <span className="font-bold" style={{ color: "#0F0A0B" }}>4.9</span>
                <span>(1,200+ Clients)</span>
              </p>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN — Portrait card ── */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
          <div
            className="relative w-full max-w-[400px] group"
            style={{ aspectRatio: "4/5" }}
          >
            {/* Main card */}
            <div
              className="w-full h-full rounded-[2.5rem] flex flex-col justify-between p-5 transition-all duration-500 group-hover:shadow-2xl"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.70) 0%, rgba(255,255,255,0.40) 100%)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1.5px solid rgba(255,255,255,0.85)",
                boxShadow: "0 8px 48px rgba(107,45,62,0.14), inset 0 1px 0 rgba(255,255,255,0.6)"
              }}
            >
              {/* Portrait image area */}
              <div
                className="relative w-full rounded-2xl overflow-hidden flex items-center justify-center"
                style={{ height: "72%", backgroundColor: "rgba(228,188,194,0.30)" }}
              >
                <img
                  src={heroImage}
                  alt="Kirti Yadav — Founder, Nutritionist"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  onError={e => { e.target.style.display = "none"; }}
                />
                {/* Holistic badge */}
                <div
                  className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.88)",
                    backdropFilter: "blur(8px)",
                    color: "#6B2D3E",
                    border: "1px solid rgba(255,255,255,0.6)"
                  }}
                >
                  <BadgeCheck className="w-3.5 h-3.5" />
                  Certified Nutritionist
                </div>
                {/* Sparkle decoration */}
                <div
                  className="absolute bottom-3 left-3 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#6B2D3E" }}
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Quote area */}
              <div className="pt-3 pb-1 space-y-1.5">
                <p
                  className="font-serif italic text-sm leading-snug"
                  style={{ color: "#0F0A0B" }}
                >
                  "A little more human, a little more hopeful — always in motion."
                </p>
                <div
                  className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest pt-2"
                  style={{
                    color: "#7A5A60",
                    borderTop: "1px solid rgba(107,45,62,0.15)"
                  }}
                >
                  <span>Portrait · Kirti Yadav</span>
                  <span style={{ color: "#6B2D3E" }}>2026</span>
                </div>
              </div>
            </div>

            {/* Floating badge — top-left */}
            <div
              className="absolute -top-4 -left-4 px-3.5 py-2 rounded-2xl text-[11px] font-bold shadow-lg animate-float"
              style={{
                backgroundColor: "#6B2D3E",
                color: "#FFFFFF",
                animationDelay: "0.5s"
              }}
            >
              10+ yrs expertise
            </div>

            {/* Floating stats badge — bottom-right */}
            <div
              className="absolute -bottom-4 -right-4 px-3.5 py-2.5 rounded-2xl text-[11px] font-bold shadow-lg animate-float"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#6B2D3E",
                border: "1px solid rgba(228,188,194,0.6)",
                animationDelay: "1.2s"
              }}
            >
              <span className="font-serif text-lg font-bold block leading-none">500+</span>
              <span style={{ color: "#7A5A60", fontWeight: 600 }}>clients helped</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}