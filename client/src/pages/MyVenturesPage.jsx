import { useSearchParams } from "react-router-dom";
import { KukCleanSection } from "../components/sections/KukCleanSection";
import { NotPausedSection } from "../components/sections/NotPausedSection";
import { Sparkles } from "lucide-react";

export function MyVenturesPage() {
  const [searchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") === "notpaused" ? "notpaused" : "kuk-clean";

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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-[#E8CDD3] text-[#B55E79] text-xs font-bold uppercase tracking-[0.2em] shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Entrepreneurial Journey</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2E2326] tracking-tight mb-4">
            My Ventures
          </h1>
          <p className="font-body text-base sm:text-lg text-[#5F5358] max-w-2xl mx-auto leading-relaxed">
            Building purpose-driven wellness brands grounded in clean nutrition, empowerment, and evidence-based living.
          </p>
        </div>
      </div>

      {/* Active Venture Section */}
      <div>
        {currentTab === "kuk-clean" ? (
          <KukCleanSection />
        ) : (
          <NotPausedSection />
        )}
      </div>
    </div>
  );
}
