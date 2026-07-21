import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Introduction", path: "/" },
    { name: "Life Story", path: "/life-story" },
    { name: "Achievements", path: "/achievements" },
    { name: "KuK Clean Wellness", path: "/kuk-clean" },
    { name: "notpaused.com", path: "/notpaused" },
    { name: "Influencer", path: "/influencer" },
  ];

  const isActive = (path) => {
    const current = location.pathname.replace(/\/$/, "");
    const target = path.replace(/\/$/, "");
    if (target === "") {
      return current === "" || current.endsWith("/portfolio");
    }
    return current.endsWith(target);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
      ? "bg-[#F7ECF2]/90 backdrop-blur-md border-b border-stone-200/60 shadow-sm"
      : "bg-[#F7ECF2]/80 backdrop-blur-sm border-b border-stone-200/40"
      }`}>
      <div className={`flex w-full items-center justify-between px-6 lg:px-16 transition-all duration-300 ${isScrolled ? "h-20" : "h-24"
        }`}>

        {/* Left Side (Logo) */}
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-full bg-[#A054A6] flex items-center justify-center relative overflow-hidden transition-transform group-hover:scale-105">
              <div className="absolute top-2.5 left-2.5 w-2 h-2 bg-white rounded-full"></div>
              <div className="absolute bottom-0 w-full h-1/2 bg-[#A054A6] brightness-75"></div>
            </div>
            <span className="font-serif font-bold text-lg tracking-tight text-stone-900 group-hover:text-[#A054A6] transition-colors">Kirti.</span>
          </Link>
        </div>

        {/* Center Side (Navigation Links as Separate Pages) */}
        <div className="hidden xl:flex items-center justify-center gap-6 xl:gap-8 font-medium text-[11px] tracking-[0.15em] uppercase">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`transition-all duration-200 pb-1.5 border-b-2 ${isActive(item.path)
                ? "border-[#A054A6] text-[#A054A6] font-semibold"
                : "border-transparent text-stone-600 hover:text-[#A054A6]"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side (Search Bar) */}
        <div className="flex items-center justify-end">
          <div className="relative flex items-center">
            <span className="absolute left-3 text-stone-400">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
            <input
              type="text"
              placeholder="SEARCH"
              className="pl-9 pr-4 py-2 w-36 lg:w-44 rounded-full border border-stone-300 focus:outline-none focus:border-[#A054A6] focus:ring-1 focus:ring-[#A054A6] text-[10px] font-bold tracking-[0.15em] transition-all bg-white/60 focus:bg-white text-stone-850 placeholder-stone-400 uppercase"
            />
          </div>
        </div>

      </div>
    </nav>
  );
}