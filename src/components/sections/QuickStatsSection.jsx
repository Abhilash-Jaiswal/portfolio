export function QuickStatsSection() {
  // Theme colors
  const theme = {
    primary: "#b76e4a",      // terracotta
    primaryLight: "#d9b094",
    primarySoft: "#f5ede8",
    dark: "#2d2a24",
    muted: "#4a453e",
    border: "#e8e0d8",
    bg: "#fcf9f6"
  };

  return (
    <section 
      className="w-full py-16 bg-transparent border-b"
      style={{ borderColor: `${theme.border}60` }}
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10">

        <div className="flex flex-col">
          <span 
            className="font-serif text-5xl font-bold mb-2"
            style={{ color: theme.primary }}
          >
            10+
          </span>
          <span 
            className="text-[11px] font-bold tracking-[0.2em] uppercase"
            style={{ color: theme.muted }}
          >
            Years Experience
          </span>
        </div>

        <div className="hidden md:block w-px h-12" style={{ backgroundColor: theme.border }}></div>

        <div className="flex flex-col">
          <span 
            className="font-serif text-5xl font-bold mb-2"
            style={{ color: theme.primary }}
          >
            500+
          </span>
          <span 
            className="text-[11px] font-bold tracking-[0.2em] uppercase"
            style={{ color: theme.muted }}
          >
            Clients Helped
          </span>
        </div>

        <div className="hidden md:block w-px h-12" style={{ backgroundColor: theme.border }}></div>

        <div className="flex flex-col">
          <span 
            className="font-serif text-5xl font-bold mb-2"
            style={{ color: theme.primary }}
          >
            2
          </span>
          <span 
            className="text-[11px] font-bold tracking-[0.2em] uppercase"
            style={{ color: theme.muted }}
          >
            Companies Founded
          </span>
        </div>

        <div className="hidden md:block w-px h-12" style={{ backgroundColor: theme.border }}></div>

        {/* Optional: Uncomment to add fourth stat */}
        {/* <div className="flex flex-col">
          <span className="font-serif text-5xl font-bold mb-2" style={{ color: theme.primary }}>65M</span>
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: theme.muted }}>Target Market</span>
        </div> */}

      </div>
    </section>
  );
}