export function InfluencerSection() {
  return (
    <section id="influencer" className="py-24 bg-white/40 border-b border-stone-200/60">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">

        <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6 tracking-tight">Influence & Alignments</h2>
        <p className="text-stone-500 text-[11px] font-bold tracking-[0.2em] uppercase mb-16">
          I only recommend what I believe in. That's a promise.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-stone-200 pt-16">
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-16 h-16 rounded-full border border-stone-200 flex items-center justify-center mb-4 group-hover:border-[#A054A6] group-hover:bg-[#A054A6]/5 group-hover:scale-110 shadow-sm transition-all duration-300 bg-white/80">
              <span className="font-serif text-xl text-stone-400 group-hover:text-[#A054A6] transition-colors">In</span>
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-stone-500 group-hover:text-stone-700 transition-colors">Instagram</span>
          </div>

          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-16 h-16 rounded-full border border-stone-200 flex items-center justify-center mb-4 group-hover:border-[#A054A6] group-hover:bg-[#A054A6]/5 group-hover:scale-110 shadow-sm transition-all duration-300 bg-white/80">
              <span className="font-serif text-xl text-stone-400 group-hover:text-[#A054A6] transition-colors">Yt</span>
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-stone-500 group-hover:text-stone-700 transition-colors">YouTube</span>
          </div>

          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-16 h-16 rounded-full border border-stone-200 flex items-center justify-center mb-4 group-hover:border-[#A054A6] group-hover:bg-[#A054A6]/5 group-hover:scale-110 shadow-sm transition-all duration-300 bg-white/80">
              <span className="font-serif text-xl text-stone-400 group-hover:text-[#A054A6] transition-colors">Li</span>
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-stone-500 group-hover:text-stone-700 transition-colors">LinkedIn</span>
          </div>

          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-16 h-16 rounded-full border border-stone-200 flex items-center justify-center mb-4 group-hover:border-[#A054A6] group-hover:bg-[#A054A6]/5 group-hover:scale-110 shadow-sm transition-all duration-300 bg-white/80">
              <span className="font-serif text-xl text-stone-400 group-hover:text-[#A054A6] transition-colors">Wa</span>
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-stone-500 group-hover:text-stone-700 transition-colors">WhatsApp</span>
          </div>
        </div>

      </div>
    </section>
  );
}
