export function QuickStatsSection() {
  return (
    <section className="w-full py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10">
        
        <div className="flex flex-col">
          <span className="font-serif text-5xl font-bold text-[#FF5C58] mb-2">10+</span>
          <span className="text-gray-500 text-[11px] font-bold tracking-[0.2em] uppercase">Years Experience</span>
        </div>
        
        <div className="hidden md:block w-px h-12 bg-gray-200"></div>

        <div className="flex flex-col">
          <span className="font-serif text-5xl font-bold text-[#FF5C58] mb-2">500+</span>
          <span className="text-gray-500 text-[11px] font-bold tracking-[0.2em] uppercase">Clients Helped</span>
        </div>
        
        <div className="hidden md:block w-px h-12 bg-gray-200"></div>

        <div className="flex flex-col">
          <span className="font-serif text-5xl font-bold text-[#FF5C58] mb-2">2</span>
          <span className="text-gray-500 text-[11px] font-bold tracking-[0.2em] uppercase">Companies Founded</span>
        </div>
        
        <div className="hidden md:block w-px h-12 bg-gray-200"></div>

        <div className="flex flex-col">
          <span className="font-serif text-5xl font-bold text-[#FF5C58] mb-2">65M</span>
          <span className="text-gray-500 text-[11px] font-bold tracking-[0.2em] uppercase">Target Market</span>
        </div>

      </div>
    </section>
  );
}
