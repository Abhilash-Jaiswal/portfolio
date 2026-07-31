import { Calendar, Users, Building2, Award, Sparkles } from "lucide-react";

export const THEME = {
  primary:      "#B55E79",   // burgundy accent
  primaryDark:  "#2E2326",   // rich dark plum
  primaryLight: "#E6BEC6",   // dusty rose
  primarySoft:  "#F4D9DE",   // soft blush surface
  dustyRose:    "#CF99A6",   // luxury dusty rose
  dark:         "#2E2326",   // rich dark text
  muted:        "#5F5358",   // muted mauve
  border:       "#E8CDD3",   // blush border
  bg:           "#FCF8F7",   // warm background
  cardBg:       "#FFF9FA"    // luxury card
};

export function QuickStatsSection() {
  const stats = [
    { value: "10+",  label: "Years Experience",      sub: "Corporate & Wellness", icon: Calendar },
    { value: "500+", label: "Clients Helped",         sub: "Holistic Health",       icon: Users },
    { value: "2",    label: "Companies Founded",      sub: "KuKClean & NotPaused",  icon: Building2 },
    { value: "15+",  label: "Industry Recognitions",  sub: "IIMB & Media Features", icon: Award },
  ];

  return (
    <section
      className="w-full py-16 relative overflow-hidden border-b"
      style={{
        background: "linear-gradient(180deg, #FCF8F7 0%, #F8EEF1 100%)",
        borderColor: THEME.border
      }}
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#CF99A6]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="group relative bg-[#FFF9FA]/80 backdrop-blur-md border border-[#E8CDD3] p-6 lg:p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#B55E79]/10 hover:border-[#CF99A6] flex flex-col items-center text-center"
              >
                {/* Top glow dot on hover */}
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#B55E79] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#B55E79] group-hover:text-white shadow-sm"
                  style={{ backgroundColor: THEME.primarySoft, color: THEME.primary }}
                >
                  <Icon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" strokeWidth={1.5} />
                </div>

                <span
                  className="font-serif font-bold mb-1 tracking-tight leading-none transition-colors duration-300 group-hover:text-[#B55E79]"
                  style={{ color: THEME.dark, fontSize: "clamp(2.2rem, 4vw, 3rem)" }}
                >
                  {stat.value}
                </span>

                <span
                  className="text-[11px] font-bold tracking-[0.18em] uppercase mt-2 mb-1"
                  style={{ color: THEME.primary }}
                >
                  {stat.label}
                </span>

                <span
                  className="text-[10px] font-normal text-[#5F5358]"
                >
                  {stat.sub}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}