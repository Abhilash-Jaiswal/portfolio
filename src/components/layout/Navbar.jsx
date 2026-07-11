import { useState, useEffect, useRef } from "react";
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

  const [activeSection, setActiveSection] = useState("introduction");
  const activeSectionRef = useRef("introduction");

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    const handleScrollActive = () => {
      const sections = [
        "introduction",
        "life-story",
        "achievements",
        "kuk-clean",
        "notpaused",
        "influencer"
      ];

      const offset = 120; // offset detection height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom > offset) {
            if (activeSectionRef.current !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollActive);
    handleScrollActive();
    return () => window.removeEventListener("scroll", handleScrollActive);
  }, []);

  const isActive = (path) => {
    return activeSection === path.substring(1);
  };

  const navItems = [
    { name: "Introduction", path: "#introduction" },
    { name: "Life Story", path: "#life-story" },
    { name: "Achievements", path: "#achievements" },
    { name: "KuK Clean Wellness", path: "#kuk-clean" },
    { name: "notpaused.com", path: "#notpaused" },
    { name: "Influencer", path: "#influencer" }
  ];

  const handleNavClick = (e, path) => {
    e.preventDefault();
    const targetId = path.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
      ? "bg-[#F2EFE8]/90 backdrop-blur-md border-b border-stone-200/60 shadow-sm"
      : "bg-transparent"
      }`}>
      {/* 
        A premium fluid transition from height h-24 (not scrolled) 
        to h-20 (scrolled) for a sleek micro-animation response.
      */}
      <div className={`flex w-full items-center justify-between px-6 lg:px-16 transition-all duration-300 ${isScrolled ? "h-20" : "h-24"
        }`}>

        {/* Left Side (Logo wrapping Link) */}
        <div className="flex-shrink-0">
          <a
            href="#introduction"
            onClick={(e) => handleNavClick(e, "#introduction")}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-full bg-[#FF5C58] flex items-center justify-center relative overflow-hidden transition-transform group-hover:scale-105">
              <div className="absolute top-2.5 left-2.5 w-2 h-2 bg-white rounded-full"></div>
              <div className="absolute bottom-0 w-full h-1/2 bg-[#FF5C58] brightness-75"></div>
            </div>
            <span className="font-serif font-bold text-lg tracking-tight text-stone-900 group-hover:text-[#FF5C58] transition-colors">Kirti.</span>
          </a>
        </div>

        {/* Center Side (Navigation Links) */}
        <div className="hidden xl:flex items-center justify-center gap-6 xl:gap-8 font-medium text-[11px] tracking-[0.15em] uppercase">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className={`transition-all duration-200 pb-1.5 border-b-2 ${isActive(item.path)
                ? "border-[#FF5C58] text-[#FF5C58] font-semibold"
                : "border-transparent text-stone-600 hover:text-[#FF5C58]"
                }`}
            >
              {item.name}
            </a>
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
              className="pl-9 pr-4 py-2 w-36 lg:w-44 rounded-full border border-stone-300 focus:outline-none focus:border-[#FF5C58] focus:ring-1 focus:ring-[#FF5C58] text-[10px] font-bold tracking-[0.15em] transition-all bg-white/60 focus:bg-white text-stone-850 placeholder-stone-400 uppercase"
            />
          </div>
        </div>

      </div>
    </nav>
  );
}