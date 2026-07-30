import { Camera, MonitorPlay, Briefcase } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full font-sans">
      {/* Bottom Information Section - PDF Inspired Soft Teal - Reduced Height */}
      <div className="bg-[#1A4A44] text-white py-10 px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 max-w-[1600px] mx-auto">

          {/* Column 1: Brand Statement */}
          <div className="lg:w-[30%] lg:pr-8">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold leading-tight tracking-tight text-white">
              Wellness architecture for the modern lifestyle<span className="text-[#D4A051]">&reg;</span>
            </h3>
          </div>

          {/* Column 2: Kuk Clean Contact */}
          <div className="lg:w-[20%]">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#D4A051] uppercase mb-3">
              KuK Clean
            </h4>
            <div className="text-sm font-normal text-white/85 space-y-1 mb-4 leading-relaxed">
              <p><a href="mailto:hello@kukclean.com" className="hover:text-[#E8C28A] underline decoration-[#D4A051]/40 underline-offset-4 transition-colors">hello@kukclean.com</a></p>
              <p>+91 98765 43210</p>
              <p>Nutrihub ICAR-IIMR, Hyderabad</p>
            </div>
            <a href="https://kukclean.com" className="text-[10px] font-bold tracking-[0.2em] text-white uppercase border-b border-[#D4A051]/50 pb-1 hover:border-[#E8C28A] hover:text-[#E8C28A] transition-colors">
              VISIT STORE &nearr;
            </a>
          </div>

          {/* Column 3: NotPaused Contact */}
          <div className="lg:w-[20%]">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#D4A051] uppercase mb-3">
              NotPaused.com
            </h4>
            <div className="text-sm font-normal text-white/85 space-y-1 mb-4 leading-relaxed">
              <p><a href="mailto:community@notpaused.com" className="hover:text-[#E8C28A] underline decoration-[#D4A051]/40 underline-offset-4 transition-colors">community@notpaused.com</a></p>
              <p>+91 98765 43210</p>
              <p>Community HQ, Bangalore</p>
            </div>
            <a href="https://notpaused.com" className="text-[10px] font-bold tracking-[0.2em] text-white uppercase border-b border-[#D4A051]/50 pb-1 hover:border-[#E8C28A] hover:text-[#E8C28A] transition-colors">
              VISIT PLATFORM &nearr;
            </a>
          </div>

          {/* Column 4: Newsletter & Socials */}
          <div className="lg:w-[30%]">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#D4A051] uppercase mb-3">
              WANT TO BE THE HEALTHIEST IN YOUR OFFICE?
            </h4>
            <a href="#" className="text-sm font-medium text-white underline decoration-[#D4A051]/40 underline-offset-4 hover:decoration-[#E8C28A] hover:text-[#E8C28A] transition-colors inline-block mb-5">
              SIGN UP FOR OUR NEWSLETTER &rarr;
            </a>

            <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#D4A051] uppercase mb-3">
              FOLLOW US
            </h4>
            <div className="flex gap-4 text-[#D4A051]">
              <a href="#" className="hover:text-[#E8C28A] transition-colors"><Camera size={18} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-[#E8C28A] transition-colors"><MonitorPlay size={18} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-[#E8C28A] transition-colors"><Briefcase size={18} strokeWidth={1.5} /></a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}