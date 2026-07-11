import { Camera, MonitorPlay, Briefcase, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full font-sans border-t border-gray-200">

      {/* Top CTA Section (White) */}
      <div className="bg-[#F2EFE8] w-full flex flex-row items-center justify-between px-8 sm:px-12 lg:px-24 py-16 lg:py-20 border-t border-stone-200/60">
        <div className="w-1/4 hidden md:block">
          <p className="text-xs font-bold text-stone-700 uppercase tracking-widest leading-tight">
            Heard <br />Enough? &rarr;
          </p>
        </div>

        <div className="w-full md:w-2/4 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-medium text-stone-900 tracking-tighter inline-block relative pb-3">
            Contact me
            {/* Colored underline mimicking the image */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FF5C58]"></div>
          </h2>
        </div>

        <div className="w-1/4 hidden md:flex justify-end">
          <button className="w-16 h-16 bg-[#FF5C58] hover:bg-[#e64f4b] hover:scale-105 transition-all rounded-full flex items-center justify-center text-white cursor-pointer shadow-sm">
            <ArrowRight strokeWidth={1.5} size={24} />
          </button>
        </div>
      </div>

      {/* Bottom Information Section (Black) */}
      <div className="bg-[#111111] text-white pt-16 pb-16 px-8 sm:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 max-w-[1600px] mx-auto">

          {/* Column 1: Brand Statement */}
          <div className="lg:w-[35%] lg:pr-12">
            <h3 className="text-3xl lg:text-4xl font-sans font-bold leading-tight tracking-tight text-white">
              Wellness architecture for the modern lifestyle&reg;
            </h3>
          </div>

          {/* Column 2: Kuk Clean Contact */}
          <div className="lg:w-[20%]">
            <h4 className="text-xs font-bold tracking-widest text-gray-300 uppercase mb-5">
              KuK Clean
            </h4>
            <div className="text-sm font-normal text-gray-100 space-y-2 mb-6 leading-relaxed">
              <p><a href="mailto:hello@kukclean.com" className="hover:text-white underline decoration-gray-500 underline-offset-4">hello@kukclean.com</a></p>
              <p>+91 98765 43210</p>
              <p>Nutrihub ICAR-IIMR,</p>
              <p>Hyderabad, India</p>
            </div>
            <a href="https://kukclean.com" className="text-xs font-bold tracking-widest text-white uppercase border-b border-gray-500 pb-1 hover:border-white transition-colors">
              VISIT STORE &nearr;
            </a>
          </div>

          {/* Column 3: NotPaused Contact */}
          <div className="lg:w-[20%]">
            <h4 className="text-xs font-bold tracking-widest text-gray-300 uppercase mb-5">
              NotPaused.com
            </h4>
            <div className="text-sm font-normal text-gray-100 space-y-2 mb-6 leading-relaxed">
              <p><a href="mailto:community@notpaused.com" className="hover:text-white underline decoration-gray-500 underline-offset-4">community@notpaused.com</a></p>
              <p>+91 98765 43210</p>
              <p>Community HQ,</p>
              <p>Bangalore, India</p>
            </div>
            <a href="https://notpaused.com" className="text-xs font-bold tracking-widest text-white uppercase border-b border-gray-500 pb-1 hover:border-white transition-colors">
              VISIT PLATFORM &nearr;
            </a>
          </div>

          {/* Column 4: Newsletter & Socials */}
          <div className="lg:w-[25%]">
            <h4 className="text-xs font-bold tracking-widest text-gray-300 uppercase mb-4">
              WANT TO BE THE HEALTHIEST IN YOUR OFFICE?
            </h4>
            <a href="#" className="text-sm font-medium text-white underline decoration-gray-500 underline-offset-4 hover:decoration-white transition-colors inline-block mb-8">
              SIGN UP FOR OUR NEWSLETTER &rarr;
            </a>

            <h4 className="text-xs font-bold tracking-widest text-gray-300 uppercase mb-5">
              FOLLOW US
            </h4>
            <div className="flex gap-5 text-gray-100">
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