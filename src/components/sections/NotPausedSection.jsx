export function NotPausedSection() {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col-reverse md:flex-row gap-16 items-center">
          
          {/* Left Content Side */}
          <div className="w-full md:w-1/2">
             <div className="mb-6 inline-block border-t-[3px] border-[#FF5C58] pt-2">
                <span className="text-[#FF5C58] font-bold text-[11px] tracking-[0.2em] uppercase">Women's Health Tech</span>
             </div>
             
             <h2 className="font-serif text-4xl lg:text-5xl text-gray-900 mb-6 tracking-tight leading-[1.1]">notpaused.com</h2>
             <p className="text-gray-500 font-serif italic text-xl mb-8">India's First Holistic Menopause Knowledge & Community Platform</p>
             
             <p className="text-gray-600 font-light leading-relaxed mb-10 max-w-md text-justify">
               ~65 million Indian women are currently in the perimenopause–menopause window, yet 75% will never receive adequate guidance. NotPaused was built so no woman has to navigate this 10–15 year transition in ignorance.
             </p>
             
             <button className="border-b-2 border-[#FF5C58] text-[#FF5C58] font-bold text-[11px] tracking-[0.15em] uppercase pb-1 hover:opacity-70 transition-opacity">
                Discover the Platform
             </button>
          </div>

          {/* Right Image/Graphic Side */}
          <div className="w-full md:w-1/2 relative min-h-[400px]">
             {/* Decorative Element */}
             <div className="absolute right-0 top-0 w-[80%] h-full bg-gray-50 border border-gray-200 rounded-tr-[150px] rounded-bl-[150px] overflow-hidden flex items-center justify-center relative">
                <div className="absolute top-10 left-10 w-20 h-20 bg-[#FFF0EF] rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-dots opacity-40"></div>
                <div className="z-10 font-serif text-3xl text-gray-300">App Preview</div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
