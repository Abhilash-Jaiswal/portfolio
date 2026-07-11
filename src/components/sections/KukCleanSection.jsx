export function KukCleanSection() {
  return (
    <section id="kuk-clean" className="w-full flex flex-col md:flex-row overflow-hidden border-b border-stone-200/60">
      
      {/* Left Image/Graphic Side */}
      <div className="w-full md:w-1/2 bg-[#E5DFD3] relative min-h-[400px] flex items-center justify-center p-12">
         {/* Decorative Element */}
         <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] rounded-full border-[40px] border-white/20"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[200px] h-[200px] bg-white/10 rounded-full"></div>
         </div>
         
         <div className="relative z-10 text-center">
            <h2 className="font-serif text-5xl md:text-6xl text-[#FF5C58] tracking-tight font-bold mb-4 drop-shadow-sm">KuK Clean</h2>
            <p className="text-stone-700 text-[11px] uppercase tracking-[0.2em] font-bold">Plant-Based Wellness</p>
         </div>
      </div>

      {/* Right Content Side */}
      <div className="w-full md:w-1/2 bg-white/40 flex flex-col justify-center p-12 lg:p-20">
         <h3 className="font-serif text-3xl text-stone-900 leading-tight mb-6">
           Consciously Nourishing. <br/> 100% Plant-Based.
         </h3>
         <p className="text-stone-600 font-light leading-relaxed mb-10 max-w-md text-justify">
           India's pioneering clean-label specialty wellness store. Built on twin foundations of nutritional science and culinary delight. From stone-ground nut butters to baked healthy snacks, we bring ancient wisdom to the modern lifestyle.
         </p>
         
         <div className="flex gap-4">
            <button className="border border-[#FF5C58] text-[#FF5C58] font-bold text-[11px] tracking-[0.15em] uppercase px-8 py-3 btn-custom-shape hover:bg-[#FF5C58] hover:text-white hover:shadow-lg hover:shadow-red-200 transition-all duration-300 cursor-pointer">
               Explore Products
            </button>
         </div>
      </div>
      
    </section>
  );
}
