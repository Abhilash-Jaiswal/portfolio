import { Calendar, Users, Building2, Award } from "lucide-react";

// ── Shared theme ──────────────────────────────────
export const THEME = {
  primary:      "#B85470",   // rose-mauve
  primaryDark:  "#2D121A",   // rich dark plum
  primaryLight: "#D4889C",   // dusty rose
  primarySoft:  "#FAF0F2",   // soft blush surface
  blush:        "#E4BCC2",   // hero blush
  dark:         "#2D121A",   // rich dark text
  muted:        "#7A5A62",   // muted mauve
  border:       "#EACFD3",   // blush border
  bg:           "#FDF8F8",   // warm white
};

export function QuickStatsSection() {
  const stats = [
    { value: "10+",  label: "Years Experience",      icon: Calendar },
    { value: "500+", label: "Clients Helped",         icon: Users },
    { value: "2",    label: "Companies Founded",      icon: Building2 },
    { value: "15+",  label: "Industry Recognitions",  icon: Award },
  ];

  return (
    <section
      className="w-full py-14 border-b"
      style={{ backgroundColor: THEME.bg, borderColor: THEME.border }}
    >
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="flex flex-col items-center p-5 rounded-2xl transition-all duration-300 cursor-default group hover:-translate-y-1 hover:shadow-lg"
              style={{ backgroundColor: "transparent" }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = THEME.primarySoft}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                style={{ backgroundColor: THEME.primarySoft, color: THEME.primary }}
              >
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <span
                className="font-serif font-bold mb-1 tracking-tight leading-none"
                style={{ color: THEME.primary, fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
              >
                {stat.value}
              </span>
              <span
                className="text-[11px] font-bold tracking-[0.18em] uppercase mt-1"
                style={{ color: THEME.muted }}
              >
                {stat.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}