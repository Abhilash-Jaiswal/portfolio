import { Camera, MonitorPlay, Briefcase } from "lucide-react";

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
            {/* Mini brand dot */}
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#CF99A6" }}
              >
                <div className="w-2 h-2 rounded-full bg-white/80" />
              </div>
              <span
                className="font-serif font-bold text-base tracking-tight"
                style={{ color: "#2E2326" }}
              >
                Kirti<span style={{ color: "#B55E79" }}>.</span>
              </span>
            </div>

            <h3
              className="text-2xl lg:text-3xl font-serif font-bold leading-tight tracking-tight"
              style={{ color: "#2E2326" }}
            >
              Wellness architecture for the modern lifestyle
              <span style={{ color: "#B55E79" }}>&reg;</span>
            </h3>
            <p
              className="mt-3 text-sm font-normal leading-relaxed"
              style={{ color: "#5F5358" }}
            >
              Built on lived experience. Grounded in evidence.
              Designed for real Indian families.
            </p>
          </div>

          {/* Column 2: Kuk Clean Contact */}
          <div className="lg:w-[20%]">
            <h4
              className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: "#B55E79" }}
            >
              KuK Clean
            </h4>
            <div
              className="text-sm font-normal space-y-1 mb-4 leading-relaxed"
              style={{ color: "#5F5358" }}
            >
              <p>
                <a
                  href="mailto:hello@kukclean.com"
                  className="transition-colors"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "rgba(181,94,121,0.3)",
                    textUnderlineOffset: "4px",
                    color: "#5F5358"
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "#B55E79"}
                  onMouseLeave={e => e.currentTarget.style.color = "#5F5358"}
                >
                  hello@kukclean.com
                </a>
              </p>
              <p>+91 98765 43210</p>
              <p>Nutrihub ICAR-IIMR, Hyderabad</p>
            </div>
            <a
              href="https://kukclean.com"
              className="text-[10px] font-bold tracking-[0.2em] uppercase pb-1 transition-colors inline-block"
              style={{ borderBottom: "1.5px solid #CF99A6", color: "#2E2326" }}
              onMouseEnter={e => { e.currentTarget.style.color = "#B55E79"; e.currentTarget.style.borderBottomColor = "#B55E79"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#2E2326"; e.currentTarget.style.borderBottomColor = "#CF99A6"; }}
            >
              VISIT STORE &nearr;
            </a>
          </div>

          {/* Column 3: NotPaused Contact */}
          <div className="lg:w-[20%]">
            <h4
              className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: "#B55E79" }}
            >
              NotPaused.com
            </h4>
            <div
              className="text-sm font-normal space-y-1 mb-4 leading-relaxed"
              style={{ color: "#5F5358" }}
            >
              <p>
                <a
                  href="mailto:community@notpaused.com"
                  className="transition-colors"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "rgba(181,94,121,0.3)",
                    textUnderlineOffset: "4px",
                    color: "#5F5358"
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "#B55E79"}
                  onMouseLeave={e => e.currentTarget.style.color = "#5F5358"}
                >
                  community@notpaused.com
                </a>
              </p>
              <p>+91 98765 43210</p>
              <p>Community HQ, Bangalore</p>
            </div>
            <a
              href="https://notpaused.com"
              className="text-[10px] font-bold tracking-[0.2em] uppercase pb-1 transition-colors inline-block"
              style={{ borderBottom: "1.5px solid #CF99A6", color: "#2E2326" }}
              onMouseEnter={e => { e.currentTarget.style.color = "#B55E79"; e.currentTarget.style.borderBottomColor = "#B55E79"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#2E2326"; e.currentTarget.style.borderBottomColor = "#CF99A6"; }}
            >
              VISIT PLATFORM &nearr;
            </a>
          </div>

          {/* Column 4: Newsletter & Socials */}
          <div className="lg:w-[30%]">
            <h4
              className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: "#B55E79" }}
            >
              WANT TO BE THE HEALTHIEST IN YOUR OFFICE?
            </h4>
            <a
              href="#"
              className="text-sm font-medium underline underline-offset-4 transition-colors inline-block mb-6"
              style={{ textDecorationColor: "rgba(181,94,121,0.35)", color: "#2E2326" }}
              onMouseEnter={e => e.currentTarget.style.color = "#B55E79"}
              onMouseLeave={e => e.currentTarget.style.color = "#2E2326"}
            >
              SIGN UP FOR OUR NEWSLETTER &rarr;
            </a>

            <h4
              className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: "#B55E79" }}
            >
              FOLLOW US
            </h4>
            <div className="flex gap-4" style={{ color: "#CF99A6" }}>
              <a
                href="#"
                className="transition-all hover:scale-110 transform duration-200"
                onMouseEnter={e => e.currentTarget.style.color = "#B55E79"}
                onMouseLeave={e => e.currentTarget.style.color = "#CF99A6"}
              >
                <Camera size={18} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="transition-all hover:scale-110 transform duration-200"
                onMouseEnter={e => e.currentTarget.style.color = "#B55E79"}
                onMouseLeave={e => e.currentTarget.style.color = "#CF99A6"}
              >
                <MonitorPlay size={18} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="transition-all hover:scale-110 transform duration-200"
                onMouseEnter={e => e.currentTarget.style.color = "#B55E79"}
                onMouseLeave={e => e.currentTarget.style.color = "#CF99A6"}
              >
                <Briefcase size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-medium"
          style={{ borderTop: "1px solid #E8CDD3", color: "#5F5358" }}
        >
          <span>&copy; {new Date().getFullYear()} Kirti Yadav. All rights reserved.</span>
          <span style={{ color: "#CF99A6" }}>KuK Clean Wellness &middot; NotPaused.com</span>
        </div>
      </div>
    </footer>
  );
}