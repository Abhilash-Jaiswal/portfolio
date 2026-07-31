import { Camera, MonitorPlay, Briefcase } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full font-body">
      {/* Main footer — warm rose-mauve theme */}
      <div
        className="py-14 px-6 sm:px-10 lg:px-20"
        style={{
          background: "linear-gradient(135deg, #944058 0%, #7A3246 100%)",
          color: "#FFFFFF"
        }}
      >
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 max-w-[1600px] mx-auto">

          {/* Column 1: Brand Statement */}
          <div className="lg:w-[30%] lg:pr-8">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold leading-tight tracking-tight text-white">
              Wellness architecture for the modern lifestyle
              <span style={{ color: "#E4BCC2" }}>&reg;</span>
            </h3>
            <p className="mt-3 text-sm font-normal leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
              Built on lived experience. Grounded in evidence.
              Designed for real Indian families.
            </p>
          </div>

          {/* Column 2: Kuk Clean Contact */}
          <div className="lg:w-[20%]">
            <h4
              className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: "#E4BCC2" }}
            >
              KuK Clean
            </h4>
            <div className="text-sm font-normal space-y-1 mb-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
              <p>
                <a
                  href="mailto:hello@kukclean.com"
                  className="transition-colors"
                  style={{ textDecoration: "underline", textDecorationColor: "rgba(228,188,194,0.4)", textUnderlineOffset: "4px" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#E4BCC2"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.85)"}
                >
                  hello@kukclean.com
                </a>
              </p>
              <p>+91 98765 43210</p>
              <p>Nutrihub ICAR-IIMR, Hyderabad</p>
            </div>
            <a
              href="https://kukclean.com"
              className="text-[10px] font-bold tracking-[0.2em] uppercase pb-1 transition-colors"
              style={{ borderBottom: "1px solid rgba(228,188,194,0.5)", color: "#FFFFFF" }}
              onMouseEnter={e => e.currentTarget.style.color = "#E4BCC2"}
              onMouseLeave={e => e.currentTarget.style.color = "#FFFFFF"}
            >
              VISIT STORE &nearr;
            </a>
          </div>

          {/* Column 3: NotPaused Contact */}
          <div className="lg:w-[20%]">
            <h4
              className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: "#E4BCC2" }}
            >
              NotPaused.com
            </h4>
            <div className="text-sm font-normal space-y-1 mb-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
              <p>
                <a
                  href="mailto:community@notpaused.com"
                  className="transition-colors"
                  style={{ textDecoration: "underline", textDecorationColor: "rgba(228,188,194,0.4)", textUnderlineOffset: "4px" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#E4BCC2"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.85)"}
                >
                  community@notpaused.com
                </a>
              </p>
              <p>+91 98765 43210</p>
              <p>Community HQ, Bangalore</p>
            </div>
            <a
              href="https://notpaused.com"
              className="text-[10px] font-bold tracking-[0.2em] uppercase pb-1 transition-colors"
              style={{ borderBottom: "1px solid rgba(228,188,194,0.5)", color: "#FFFFFF" }}
              onMouseEnter={e => e.currentTarget.style.color = "#E4BCC2"}
              onMouseLeave={e => e.currentTarget.style.color = "#FFFFFF"}
            >
              VISIT PLATFORM &nearr;
            </a>
          </div>

          {/* Column 4: Newsletter & Socials */}
          <div className="lg:w-[30%]">
            <h4
              className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: "#E4BCC2" }}
            >
              WANT TO BE THE HEALTHIEST IN YOUR OFFICE?
            </h4>
            <a
              href="#"
              className="text-sm font-medium underline underline-offset-4 transition-colors inline-block mb-6"
              style={{ textDecorationColor: "rgba(228,188,194,0.4)", color: "#FFFFFF" }}
              onMouseEnter={e => e.currentTarget.style.color = "#E4BCC2"}
              onMouseLeave={e => e.currentTarget.style.color = "#FFFFFF"}
            >
              SIGN UP FOR OUR NEWSLETTER &rarr;
            </a>

            <h4
              className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: "#E4BCC2" }}
            >
              FOLLOW US
            </h4>
            <div className="flex gap-4" style={{ color: "#E4BCC2" }}>
              <a
                href="#"
                className="transition-colors hover:scale-110 transform duration-200"
                onMouseEnter={e => e.currentTarget.style.color = "#FFFFFF"}
                onMouseLeave={e => e.currentTarget.style.color = "#E4BCC2"}
              >
                <Camera size={18} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="transition-colors hover:scale-110 transform duration-200"
                onMouseEnter={e => e.currentTarget.style.color = "#FFFFFF"}
                onMouseLeave={e => e.currentTarget.style.color = "#E4BCC2"}
              >
                <MonitorPlay size={18} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="transition-colors hover:scale-110 transform duration-200"
                onMouseEnter={e => e.currentTarget.style.color = "#FFFFFF"}
                onMouseLeave={e => e.currentTarget.style.color = "#E4BCC2"}
              >
                <Briefcase size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-medium"
          style={{ borderTop: "1px solid rgba(228,188,194,0.2)", color: "rgba(255,255,255,0.6)" }}
        >
          <span>&copy; {new Date().getFullYear()} Kirti Yadav. All rights reserved.</span>
          <span>KuK Clean Wellness &middot; NotPaused.com</span>
        </div>
      </div>
    </footer>
  );
}