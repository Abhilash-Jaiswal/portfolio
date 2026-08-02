import { Link } from "react-router-dom";
import { Camera, MonitorPlay, Briefcase, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full font-body">
      {/* Decorative top border stripe */}
      <div
        style={{
          height: "3px",
          background: "linear-gradient(90deg, #F4D9DE 0%, #CF99A6 40%, #B55E79 70%, #E6BEC6 100%)"
        }}
      />

      {/* Main footer — warm cream / off-white luxury */}
      <div
        className="py-14 px-6 sm:px-10 lg:px-20"
        style={{
          background: "linear-gradient(160deg, #FDF5F6 0%, #F9EEF1 50%, #F4E4E8 100%)",
          color: "#2E2326"
        }}
      >
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 max-w-[1600px] mx-auto">

          {/* Column 1: Brand Statement */}
          <div className="lg:w-[30%] lg:pr-8">
            <h3
              className="text-2xl lg:text-3xl font-serif font-bold leading-tight tracking-tight mb-2"
              style={{ color: "#2E2326" }}
            >
              KIRTI YADAV
            </h3>
            <p
              className="text-sm font-normal leading-relaxed"
              style={{ color: "#5F5358" }}
            >
              Founder, Nutritionist, Menopause Coach, Corporate Wellness Partner, Startup Mentor, and Lifelong Explorer. Bengaluru, India.
            </p>
          </div>

          {/* Column 2: Work With Me */}
          <div className="lg:w-[25%]">
            <h4
              className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#B55E79" }}
            >
              WORK WITH ME
            </h4>
            <div className="flex flex-col gap-2.5 text-xs font-medium" style={{ color: "#5F5358" }}>
              <Link to="/work-with-me" className="hover:text-[#B55E79] transition-colors">Lifestyle Transformation Program</Link>
              <Link to="/work-with-me" className="hover:text-[#B55E79] transition-colors">Corporate Wellness</Link>
              <Link to="/work-with-me" className="hover:text-[#B55E79] transition-colors">Menopause Program</Link>
              <Link to="/work-with-me" className="hover:text-[#B55E79] transition-colors">Startup Mentoring</Link>
              <Link to="/work-with-me" className="hover:text-[#B55E79] transition-colors">Brand Collaborations</Link>
              <Link to="/work-with-me" className="hover:text-[#B55E79] transition-colors">School Programs</Link>
            </div>
          </div>

          {/* Column 3: Explore */}
          <div className="lg:w-[25%]">
            <h4
              className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#B55E79" }}
            >
              EXPLORE
            </h4>
            <div className="flex flex-col gap-2.5 text-xs font-medium" style={{ color: "#5F5358" }}>
              <Link to="/life-story" className="hover:text-[#B55E79] transition-colors">Life Story</Link>
              <Link to="/press" className="hover:text-[#B55E79] transition-colors">Press</Link>
              <Link to="/latest" className="hover:text-[#B55E79] transition-colors">Latest</Link>
              <Link to="/contact" className="hover:text-[#B55E79] transition-colors">Contact</Link>
            </div>
          </div>

          {/* Column 4: My Ventures */}
          <div className="lg:w-[20%]">
            <h4
              className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#B55E79" }}
            >
              MY VENTURES
            </h4>
            <div className="flex flex-col gap-2.5 text-xs font-medium" style={{ color: "#5F5358" }}>
              <a href="https://kukclean.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B55E79] transition-colors">KuKClean</a>
              <a href="https://notpaused.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B55E79] transition-colors">NotPaused</a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-medium"
          style={{ borderTop: "1px solid #E8CDD3", color: "#5F5358" }}
        >
          <span>&copy; Kirti Yadav.</span>
          
          <div className="flex items-center gap-4">
            <span>Stay in touch:</span>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="transition-all hover:scale-110 transform duration-200 hover:text-[#B55E79]"
                aria-label="WhatsApp"
              >
                <MessageCircle size={14} strokeWidth={2} />
              </a>
              <a
                href="#"
                className="transition-all hover:scale-110 transform duration-200 hover:text-[#B55E79]"
                aria-label="Instagram"
              >
                <Camera size={14} strokeWidth={2} />
              </a>
              <a
                href="#"
                className="transition-all hover:scale-110 transform duration-200 hover:text-[#B55E79]"
                aria-label="LinkedIn"
              >
                <Briefcase size={14} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}