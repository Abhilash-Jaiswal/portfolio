import { Camera, MonitorPlay, Briefcase } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full font-sans">
      {/* Bottom Information Section (Brand Color) */}
      <div className="bg-[#A863AD] text-white pt-16 pb-16 px-8 sm:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 max-w-[1600px] mx-auto">

          {/* Column 1: Brand Statement */}
          <div className="lg:w-[35%] lg:pr-12">
            <h3 className="text-3xl lg:text-4xl font-sans font-bold leading-tight tracking-tight text-white">
              Wellness architecture for the modern lifestyle&reg;
            </h3>
          </div>

          {/* Column 2: Kuk Clean Contact */}
          <div className="lg:w-[20%]">
            <h4 className="text-sm font-bold tracking-widest text-[#E7C9E8] uppercase mb-5">
              KuK Clean
            </h4>
            <div className="text-base font-normal text-white/90 space-y-2 mb-6 leading-relaxed">
              <p><a href="mailto:hello@kukclean.com" className="hover:text-white underline decoration-[#E7C9E8]/60 underline-offset-4">hello@kukclean.com</a></p>
              <p>+91 98765 43210</p>
              <p>Nutrihub ICAR-IIMR,</p>
              <p>Hyderabad, India</p>
            </div>
            <a href="https://kukclean.com" className="text-sm font-bold tracking-widest text-white uppercase border-b border-[#E7C9E8]/60 pb-1 hover:border-white transition-colors">
              VISIT STORE &nearr;
            </a>
          </div>

          {/* Column 3: NotPaused Contact */}
          <div className="lg:w-[20%]">
            <h4 className="text-sm font-bold tracking-widest text-[#E7C9E8] uppercase mb-5">
              NotPaused.com
            </h4>
            <div className="text-base font-normal text-white/90 space-y-2 mb-6 leading-relaxed">
              <p><a href="mailto:community@notpaused.com" className="hover:text-white underline decoration-[#E7C9E8]/60 underline-offset-4">community@notpaused.com</a></p>
              <p>+91 98765 43210</p>
              <p>Community HQ,</p>
              <p>Bangalore, India</p>
            </div>
            <a href="https://notpaused.com" className="text-sm font-bold tracking-widest text-white uppercase border-b border-[#E7C9E8]/60 pb-1 hover:border-white transition-colors">
              VISIT PLATFORM &nearr;
            </a>
          </div>

          {/* Column 4: Newsletter & Socials */}
          <div className="lg:w-[25%]">
            <h4 className="text-sm font-bold tracking-widest text-[#E7C9E8] uppercase mb-4">
              WANT TO BE THE HEALTHIEST IN YOUR OFFICE?
            </h4>
            <a href="#" className="text-base font-medium text-white underline decoration-[#E7C9E8]/60 underline-offset-4 hover:decoration-white transition-colors inline-block mb-8">
              SIGN UP FOR OUR NEWSLETTER &rarr;
            </a>

            <h4 className="text-sm font-bold tracking-widest text-[#E7C9E8] uppercase mb-5">
              FOLLOW US
            </h4>
            <div className="flex gap-5 text-[#E7C9E8]">
              <a href="#" className="hover:text-white transition-colors"><Camera size={20} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-white transition-colors"><MonitorPlay size={20} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-white transition-colors"><Briefcase size={20} strokeWidth={1.5} /></a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}