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

  const currentPath = location.pathname.replace(/\/$/, "");
  const isHomePage = currentPath === "" || currentPath === "/portfolio" || currentPath.endsWith("/portfolio");

  const isActive = (path) => {
    const target = path.replace(/\/$/, "");
    if (target === "") {
      return currentPath === "" || currentPath.endsWith("/portfolio");
    }
    return currentPath.endsWith(target);
  };

  const useDarkText = isScrolled || isHomePage;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
      ? "bg-[#FAF8FB]/80 backdrop-blur-md border-b border-[#E5DCE8]/60 shadow-sm"
      : "bg-transparent border-b border-transparent"
      }`}>
      <div className={`flex w-full items-center justify-between px-6 lg:px-16 transition-all duration-300 ${isScrolled ? "h-20" : "h-24"
        }`}>

        {/* Left Side (Logo) */}
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-full bg-[#A863AD] flex items-center justify-center relative overflow-hidden transition-transform group-hover:scale-105 border border-white/20">
              <div className="absolute top-2.5 left-2.5 w-2 h-2 bg-white rounded-full"></div>
              <div className="absolute bottom-0 w-full h-1/2 bg-[#8E4C93]"></div>
            </div>
            <span className={`font-serif font-bold text-xl tracking-tight transition-colors ${useDarkText ? "text-[#2E2433] group-hover:text-[#A863AD]" : "text-white group-hover:text-white/80"
              }`}>Kirti.</span>
          </Link>
        </div>

        {/* Center Side (Navigation Links as Separate Pages) */}
        <div className="hidden xl:flex items-center justify-center gap-6 xl:gap-8 font-medium text-sm tracking-[0.12em] uppercase">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-all duration-200 pb-1.5 border-b-2 ${active
                  ? useDarkText ? "border-[#A863AD] text-[#A863AD] font-semibold" : "border-white text-white font-semibold"
                  : useDarkText ? "border-transparent text-[#6F6476] hover:text-[#A863AD]" : "border-transparent text-white/80 hover:text-white"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Right Side (Search Bar) */}
        <div className="flex items-center justify-end">
          <div className="relative flex items-center">
            <span className={`absolute left-3 transition-colors ${useDarkText ? "text-[#6F6476]" : "text-white/80"}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
            <input
              type="text"
              placeholder="SEARCH"
              className={`pl-9 pr-4 py-2 w-36 lg:w-44 rounded-full border text-xs font-bold tracking-[0.15em] transition-all uppercase focus:outline-none ${useDarkText
                ? "border-[#E5DCE8] focus:border-[#A863AD] focus:ring-1 focus:ring-[#A863AD] bg-white/60 focus:bg-white text-[#2E2433] placeholder-[#6F6476]"
                : "border-white/30 focus:border-white focus:ring-1 focus:ring-white bg-white/10 focus:bg-white/20 text-white placeholder-white/70"
                }`}
            />
          </div>
        </div>

      </div>
    </nav>
  );
}