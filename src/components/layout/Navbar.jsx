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

  const isActive = (path) => {
    // Exact match for Home (/), starts-with match for other routes
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Recipies", path: "/recipes" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm"
        : "bg-transparent"
      }`}>
      {/* 
        A premium fluid transition from height h-24 (not scrolled) 
        to h-20 (scrolled) for a sleek micro-animation response.
      */}
      <div className={`flex w-full items-center justify-between px-12 lg:px-20 transition-all duration-300 ${isScrolled ? "h-20" : "h-24"
        }`}>

        {/* Left Side (Logo wrapping Link) */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#FF5C58] flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full"></div>
              <div className="absolute bottom-0 w-full h-1/2 bg-[#FF5C58] brightness-75"></div>
            </div>
          </Link>
        </div>

        {/* Center Side (Navigation Links: Home, About, Recipies, Contact) */}
        <div className="hidden lg:flex items-center justify-center gap-10 font-bold text-[11px] tracking-[0.2em] uppercase">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`transition-all duration-200 pb-1.5 border-b-2 ${isActive(item.path)
                  ? "border-[#FF5C58] text-[#FF5C58]"
                  : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side (Search Bar) */}
        <div className="flex items-center justify-end">
          <div className="relative flex items-center">
            <span className="absolute left-3 text-gray-500">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
            <input
              type="text"
              placeholder="SEARCH"
              className="pl-9 pr-4 py-2 w-40 lg:w-48 rounded-full border border-gray-300 focus:outline-none focus:border-[#FF5C58] focus:ring-1 focus:ring-[#FF5C58] text-[10px] font-bold tracking-[0.15em] transition-all bg-white/80 focus:bg-white text-gray-700 placeholder-gray-400 uppercase"
            />
          </div>
        </div>

      </div>
    </nav>
  );
}