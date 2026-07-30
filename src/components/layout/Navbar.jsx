import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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

  const isActive = (path) => {
    const target = path.replace(/\/$/, "");
    if (target === "") return currentPath === "" || currentPath.endsWith("/portfolio");
    return currentPath.endsWith(target);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-400"
      style={{
        backgroundColor: isScrolled ? "rgba(253,248,248,0.92)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px) saturate(1.4)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(20px) saturate(1.4)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(234,207,211,0.7)" : "1px solid transparent",
        boxShadow: isScrolled ? "0 2px 24px rgba(107,45,62,0.06)" : "none"
      }}
    >
      <div
        className="flex w-full items-center justify-between px-6 lg:px-16 transition-all duration-300"
        style={{ height: isScrolled ? "72px" : "88px" }}
      >

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm"
              style={{ backgroundColor: "#6B2D3E" }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: "#E4BCC2" }}
              />
            </div>
            <span
              className="font-serif font-bold text-[1.35rem] tracking-tight transition-colors duration-200"
              style={{ color: "#0F0A0B" }}
            >
              Kirti<span style={{ color: "#6B2D3E" }}>.</span>
            </span>
          </Link>
        </div>

        {/* Nav links */}
        <div className="hidden xl:flex items-center justify-center gap-7 font-body font-medium text-[11px] tracking-[0.14em] uppercase">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                className="relative pb-1 transition-colors duration-200 group"
                style={{ color: active ? "#6B2D3E" : "#7A5A60" }}
              >
                <span className={active ? "font-bold" : "group-hover:text-[#6B2D3E] transition-colors"}>
                  {item.name}
                </span>
                {/* Animated underline */}
                <span
                  className="absolute bottom-0 left-0 h-[1.5px] rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: "#6B2D3E",
                    width: active ? "100%" : "0%",
                  }}
                />
              </Link>
            );
          })}
        </div>

        {/* Search */}
        <div className="flex items-center justify-end">
          <div className="relative flex items-center">
            <span
              className="absolute left-3.5 pointer-events-none transition-colors"
              style={{ color: "#6B2D3E" }}
            >
              <Search className="w-3.5 h-3.5" />
            </span>
            <input
              type="text"
              value={searchVal}
              onChange={e => setSearchVal(e.target.value)}
              placeholder="SEARCH"
              className="pl-9 pr-4 py-2.5 w-36 lg:w-44 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-200 focus:outline-none focus:w-48 lg:focus:w-52"
              style={{
                border: "1.5px solid #EACFD3",
                backgroundColor: isScrolled ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.4)",
                color: "#0F0A0B",
              }}
              onFocus={e => {
                e.target.style.borderColor = "#6B2D3E";
                e.target.style.boxShadow = "0 0 0 3px rgba(107,45,62,0.10)";
                e.target.style.backgroundColor = "rgba(255,255,255,0.95)";
              }}
              onBlur={e => {
                e.target.style.borderColor = "#EACFD3";
                e.target.style.boxShadow = "none";
                e.target.style.backgroundColor = isScrolled ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.4)";
              }}
            />
          </div>
        </div>

      </div>
    </nav>
  );
}