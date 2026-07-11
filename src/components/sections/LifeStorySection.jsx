export function LifeStorySection() {
  return (
    <section id="life-story" className="py-24 bg-white/40 border-b border-stone-200/60">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl lg:text-5xl text-stone-900 mb-8 tracking-tight">The Journey to Clean Wellness</h2>

          <div className="relative">
            <div className="absolute top-0 left-0 text-7xl text-stone-200 font-serif -ml-8 -mt-4 leading-none select-none">"</div>
            <p className="text-stone-600 text-lg md:text-xl font-light leading-relaxed mb-10 relative z-10 text-justify md:text-center">
              After a successful corporate career with giants like IBM and Target, I realized that true wealth is health. My journey pivoted dramatically when I saw the void in the Indian market for genuine, clean-label, plant-based nutrition. It wasn't just about launching a business; it was about creating the food I wanted my own daughter to eat without a second thought.
            </p>
          </div>

          <button className="border-b-2 border-[#FF5C58] text-[#FF5C58] font-bold text-[11px] tracking-[0.15em] uppercase pb-1 hover:text-[#e64f4b] hover:border-[#e64f4b] transition-all duration-300 cursor-pointer">
            Read Full Story
          </button>
        </div>
      </div>
    </section>
  );
}
