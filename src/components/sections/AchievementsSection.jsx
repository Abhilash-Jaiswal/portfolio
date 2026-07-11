export function AchievementsSection() {
  const achievements = [
    { year: "2021", title: "GS10K Women Program", desc: "Graduated from the prestigious Goldman Sachs Entrepreneur Program at IIM Bangalore." },
    { year: "2020", title: "ICAR-IIMR Grant", desc: "Awarded Grant-in-Aid by the Indian Institute of Millets Research for pioneering clean wellness." },
    { year: "2023", title: "National Feature", desc: "Featured in India Today for leading community health initiatives and plant-based nutrition." }
  ];

  return (
    <section id="achievements" className="py-24 bg-[#FF5C58] relative overflow-hidden">
      {/* Decorative vector background details */}
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] rounded-full bg-white/5 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[200px] h-[200px] rounded-full bg-white/5 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 tracking-tight">Milestones & Recognition</h2>
          <p className="text-white/80 font-light text-lg">A track record of innovation and community impact.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="flex flex-col text-center border border-white/20 p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-red-950/20"
            >
              <span className="font-serif text-4xl text-white font-bold mb-4">{item.year}</span>
              <h3 className="font-bold text-white text-[13px] tracking-widest uppercase mb-3">{item.title}</h3>
              <p className="text-white/90 font-light text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
