export function AchievementsSection() {
  const achievements = [
    { year: "2021", title: "GS10K Women Program", desc: "Graduated from the prestigious Goldman Sachs Entrepreneur Program at IIM Bangalore." },
    { year: "2020", title: "ICAR-IIMR Grant", desc: "Awarded Grant-in-Aid by the Indian Institute of Millets Research for pioneering clean wellness." },
    { year: "2023", title: "National Feature", desc: "Featured in India Today for leading community health initiatives and plant-based nutrition." }
  ];

  return (
    <section className="py-24 bg-[#FF5C58]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 tracking-tight">Milestones & Recognition</h2>
          <p className="text-white/80 font-light text-lg">A track record of innovation and community impact.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {achievements.map((item, index) => (
            <div key={index} className="flex flex-col text-center border border-white/20 p-8 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <span className="font-serif text-3xl text-white mb-4">{item.year}</span>
              <h3 className="font-bold text-white text-[13px] tracking-widest uppercase mb-3">{item.title}</h3>
              <p className="text-white/80 font-light text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
