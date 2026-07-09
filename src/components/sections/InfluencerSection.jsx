export function InfluencerSection() {
  return (
    <section className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        
        <h2 className="font-serif text-3xl md:text-5xl text-gray-900 mb-6 tracking-tight">Influence & Alignments</h2>
        <p className="text-gray-500 text-[11px] font-bold tracking-[0.2em] uppercase mb-16">
           I only recommend what I believe in. That's a promise.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-gray-200 pt-16">
           <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center mb-4 group-hover:border-[#FF5C58] transition-colors bg-white">
                 <span className="font-serif text-xl text-gray-400 group-hover:text-[#FF5C58]">In</span>
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Instagram</span>
           </div>
           
           <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center mb-4 group-hover:border-[#FF5C58] transition-colors bg-white">
                 <span className="font-serif text-xl text-gray-400 group-hover:text-[#FF5C58]">Yt</span>
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">YouTube</span>
           </div>

           <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center mb-4 group-hover:border-[#FF5C58] transition-colors bg-white">
                 <span className="font-serif text-xl text-gray-400 group-hover:text-[#FF5C58]">Li</span>
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">LinkedIn</span>
           </div>

           <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center mb-4 group-hover:border-[#FF5C58] transition-colors bg-white">
                 <span className="font-serif text-xl text-gray-400 group-hover:text-[#FF5C58]">Wa</span>
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">WhatsApp</span>
           </div>
        </div>
        
      </div>
    </section>
  );
}
