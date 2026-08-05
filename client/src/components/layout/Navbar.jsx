import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ChevronDown, Leaf, Sparkles } from "lucide-react";
import logoImage from "../../assets/woman_entrepreneur_logo.png";

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
    { name: "Home", path: "/" },
    { name: "Life Story", path: "/life-story" },
    {
      name: "My Ventures",
      path: "/my-ventures",
      subItems: [
        { name: "KuK Clean", path: "/my-ventures#kuk-clean", icon: Leaf },
        { name: "notpaused.com", path: "/my-ventures#notpaused", icon: Sparkles },
      ],
    },
    
    { name: "Achievement", path: "/achievements" },
    { name: "Work with Me", path: "/work-with-me" },
    { name: "Latest", path: "/latest" },
    { name: "Contact", path: "/contact" },
  ];

  const currentPath = location.pathname.replace(/\/$/, "");

  const isActive = (path) => {
    const target = path.replace(/\/$/, "");
    if (target === "") return currentPath === "" || currentPath.endsWith("/portfolio");
    if (target === "/my-ventures") {
      return (
        currentPath.endsWith("/my-ventures") ||
        currentPath.endsWith("/kuk-clean") ||
        currentPath.endsWith("/notpaused")
      );
    }
    return currentPath.endsWith(target);
  };

  // Determine if current page has a dark banner at top
  const isHomePage = currentPath === "" || currentPath.endsWith("/portfolio");
  const isLifeStory = currentPath.endsWith("/life-story");
  const hasDarkHeader = isLifeStory; // Only Life Story has a dark banner now
  const useWhiteTextAtTop = hasDarkHeader && !isScrolled;

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled
          ? "rgba(252, 248, 247, 0.15)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(24px) saturate(1.8) brightness(1.05)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(24px) saturate(1.8) brightness(1.05)" : "none",
        borderBottom: isScrolled
          ? "1px solid rgba(232, 205, 211, 0.35)"
          : "1px solid transparent",
        boxShadow: isScrolled ? "0 4px 30px rgba(181, 94, 121, 0.06)" : "none"
      }}
    >
      <div
        className="flex w-full items-center justify-between px-6 lg:px-16 transition-all duration-300"
        style={{ height: isScrolled ? "72px" : "84px" }}
      >

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-14 h-14 flex items-center justify-center mr-2.5 rounded-full bg-white shadow-md transition-transform duration-500 group-hover:scale-105 overflow-hidden border border-[#E8CDD3]/80">
              <img 
                src={logoImage} 
                alt="Women Entrepreneur Logo" 
                className="w-[120%] h-[120%] object-cover mix-blend-multiply" 
              />
            </div>
            <div className="flex flex-col justify-center">
              <span
                className="font-serif font-bold text-[1.35rem] tracking-tight transition-colors duration-200 leading-none"
                style={{ color: useWhiteTextAtTop ? "#FFFFFF" : "#2E2326" }}
              >
                Kirti<span style={{ color: "#B55E79" }}>.</span>
              </span>
              <span className="text-[8px] sm:text-[9px] font-sans font-bold uppercase tracking-[0.15em] mt-1.5 opacity-70"
                    style={{ color: useWhiteTextAtTop ? "rgba(255,255,255,0.8)" : "#5F5358" }}>
                Multi-Passionate Entrepreneur
              </span>
            </div>
          </Link>
        </div>

        {/* Nav links */}
        <div className="hidden xl:flex items-center justify-center gap-7 font-body font-medium text-[11px] tracking-[0.14em] uppercase">
          {navItems.map((item) => {
            const active = isActive(item.path);
            const defaultTextColor = useWhiteTextAtTop ? "rgba(255, 255, 255, 0.95)" : "#2E2326";
            const activeTextColor = useWhiteTextAtTop ? "#E6BEC6" : "#B55E79";

            if (item.subItems) {
              return (
                <div key={item.name} className="relative group py-2">
                  <Link
                    to={item.path}
                    className="flex items-center gap-1 pb-1 transition-colors duration-200"
                    style={{ color: active ? activeTextColor : defaultTextColor }}
                  >
                    <span className={active ? "font-bold" : "group-hover:opacity-100 transition-opacity"}>
                      {item.name}
                    </span>
                    <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
                    {/* Animated underline */}
                    <span
                      className="absolute bottom-1 left-0 h-[2px] rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: useWhiteTextAtTop ? "#E6BEC6" : "#B55E79",
                        width: active ? "100%" : "0%",
                      }}
                    />
                  </Link>

                  {/* Dropdown Menu Wrapper (Invisible bridge) */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                    <div className="py-2 px-1.5 rounded-2xl shadow-xl border border-[#E8CDD3]/80 bg-white/95 backdrop-blur-md transform scale-95 group-hover:scale-100 transition-transform duration-200">
                      {item.subItems.map((sub) => {
                        const Icon = sub.icon;
                        return (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold normal-case text-[#2E2326] hover:bg-[#F4D9DE]/40 hover:text-[#B55E79] transition-colors"
                          >
                            <Icon className="w-4 h-4 text-[#B55E79]" />
                            <span>{sub.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                to={item.path}
                className="relative pb-1 transition-colors duration-200 group"
                style={{ color: active ? activeTextColor : defaultTextColor }}
              >
                <span className={active ? "font-bold" : "group-hover:opacity-100 transition-opacity"}>
                  {item.name}
                </span>
                {/* Animated underline */}
                <span
                  className="absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: useWhiteTextAtTop ? "#E6BEC6" : "#B55E79",
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
              style={{ color: useWhiteTextAtTop ? "#E6BEC6" : "#B55E79" }}
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
                border: useWhiteTextAtTop ? "1.5px solid rgba(255, 255, 255, 0.5)" : "1.5px solid #E8CDD3",
                backgroundColor: useWhiteTextAtTop ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.8)",
                color: useWhiteTextAtTop ? "#FFFFFF" : "#2E2326",
              }}
              onFocus={e => {
                e.target.style.borderColor = "#B55E79";
                e.target.style.boxShadow = "0 0 0 3px rgba(181,94,121,0.15)";
                e.target.style.backgroundColor = "rgba(255,255,255,0.95)";
                e.target.style.color = "#2E2326";
              }}
              onBlur={e => {
                e.target.style.borderColor = useWhiteTextAtTop ? "rgba(255, 255, 255, 0.5)" : "#E8CDD3";
                e.target.style.boxShadow = "none";
                e.target.style.backgroundColor = useWhiteTextAtTop ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.8)";
                e.target.style.color = useWhiteTextAtTop ? "#FFFFFF" : "#2E2326";
              }}
            />
          </div>
        </div>

      </div>
    </nav>
  );
}