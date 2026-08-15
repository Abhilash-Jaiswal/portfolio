import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { KukCleanSection } from "../components/sections/KukCleanSection";
import { NotPausedSection } from "../components/sections/NotPausedSection";
import { Sparkles, Leaf } from "lucide-react";

export function MyVenturesPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Slight delay ensures the page is fully rendered before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#FCF8F7]">
      {/* Top Banner Header */}
      <div 
        className="pt-28 pb-10 px-6 sm:px-12 text-center relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #F4D9DE 0%, #E6BEC6 40%, #FCF8F7 100%)"
        }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-[#B55E79] text-[10px] font-bold tracking-[0.25em] uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>My Ventures</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2E2326] font-bold tracking-tight leading-[1.1] mb-6">
            Two ventures, one belief: <br className="hidden sm:block" />
            <span className="font-serif italic text-[#B55E79]">Life gets better when we make room for what matters.</span>
          </h1>
          <p className="text-[#5F5358] text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            From cleaning up the plate to breaking the silence around menopause   these are the spaces I've built to support the lives we're still becoming.
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        {/* Equal billing side by side (stacked vertically since they are complex sections) */}
        <div id="kuk-clean" className="scroll-mt-24">
          <KukCleanSection />
        </div>
        <div id="notpaused" className="scroll-mt-24">
          <NotPausedSection />
        </div>
      </div>
    </div>
  );
}
