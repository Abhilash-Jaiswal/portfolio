import heroImage from "../../assets/Image.png";

export function HeroSection() {
   return (
      <section id="introduction" className="relative min-h-screen w-full flex overflow-hidden bg-background">

         {/* Left Content */}
         <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-24 relative z-20">
            <div className="max-w-[480px]">

               {/* Badge */}
               <div className="inline-flex items-center gap-2 bg-[#A863AD]/10 text-[#A863AD] text-sm font-semibold px-4 py-2 rounded-full mb-8 w-fit tracking-wide">
                  Consciously Nourishing <span>🍃</span>
               </div>

               {/* Headline */}
               <h1 className="font-serif font-extrabold text-5xl lg:text-6xl leading-[1.15] tracking-tight text-[#2E2433] mb-6 animate-fade-in-up">
                  Be The Change<br />
                  Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A863AD] to-[#C98BCD] animate-text-gradient">Health Deserves</span>
               </h1>

               {/* Paragraph */}
               <p className="text-[#6F6476] text-base lg:text-lg font-normal mb-10 max-w-[360px] leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  Our job is filling your day with honest nutrition and with flavour that keeps you coming back.
               </p>

               {/* CTA Row */}
               <div className="flex items-center gap-8 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <button 
                  // className="bg-[#A863AD] text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-[#96569B] transition-all duration-300 hover:shadow-lg animate-pulse-glow cursor-pointer"
                   className="w-full sm:w-auto btn-ai-gradient text-white text-sm font-bold tracking-widest uppercase px-8 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-sm transition-all duration-300 cursor-pointer animate-pulse-glow"
                  >
                     Get Started
                  </button>

                  <button className="flex items-center gap-3 text-[#2E2433] font-semibold text-base group cursor-pointer hover:text-[#A863AD] transition-colors">
                     <span className="w-10 h-10 rounded-full border border-[#E5DCE8] flex items-center justify-center group-hover:border-[#A863AD] group-hover:bg-[#A863AD]/5 transition-colors">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                           <path d="M2 1.5L10 6L2 10.5V1.5Z" fill="currentColor" />
                        </svg>
                     </span>
                     Watch Video
                  </button>
               </div>

               {/* Happy Customers */}
               <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                     {["#FB8C00", "#C98BCD", "#A863AD"].map((color, i) => (
                        <div
                           key={i}
                           className="w-10 h-10 rounded-full border-2 border-white"
                           style={{ backgroundColor: color }}
                        />
                     ))}
                  </div>
                  <div>
                     <p className="text-base font-bold text-[#2E2433]">👥 Our Happy Community </p>
                     <p className="text-sm text-[#6F6476]">
                        <span className="text-[#FB8C00]">★</span> 4.8 <span className="font-normal"> (1,200+ Clients)</span>
                     </p>
                  </div>
               </div>
            </div>
         </div>

         {/* Right Visual */}
         <div className="hidden lg:flex w-1/2 relative items-center justify-center">

            {/* Big Red Circle */}
            <div className="absolute top-1/2 left-1/2 right-[35%] -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-[#A863AD]/90 rounded-full z-0" />

            {/* Dotted Arc */}
            <div className="absolute top-[18%] right-[6%] w-[90px] h-[90px] border-2 border-dashed border-[#A863AD]/60 rounded-full z-10 animate-[spin_20s_linear_infinite]" />

            {/* Flame Icon */}
            <div className="absolute top-[10%] right-[18%] text-2xl z-10 hover:scale-125 transition-transform duration-300 cursor-default select-none">🔥</div>

            {/* Small red dot accents */}
            <div className="absolute bottom-[12%] left-[8%] w-2.5 h-2.5 rounded-full bg-[#A863AD] z-10" />
            <div className="absolute top-[45%] right-[3%] w-2.5 h-2.5 rounded-full bg-[#A863AD] z-10" />

            {/* Clock Badge */}
            <div className="absolute top-[14%] left-[14%] w-16 h-16 bg-[#A863AD] rounded-2xl rotate-6 flex items-center justify-center z-20 shadow-lg hover:rotate-12 transition-transform duration-300">
               <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" strokeLinecap="round" />
               </svg>
            </div>

            {/* Portrait */}
            <div className="relative z-10 w-[420px] h-[520px] flex items-end justify-center">
               <div className="relative w-full h-full rounded-t-full overflow-hidden shadow-2xl">
                  <img
                     src={heroImage}
                     alt="Happy customer"
                     className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
               </div>
            </div>

            {/* Courier Card */}
            <div className="absolute bottom-[22%] left-[2%] bg-white/95 backdrop-blur-md border border-[#E5DCE8]/50 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-30 w-[230px] hover:translate-y-[-4px] transition-transform duration-300">
               <div className="w-9 h-9 rounded-full bg-[#2E2433] flex-shrink-0 flex items-center justify-center text-white font-bold text-sm select-none">KY</div>
               <div className="flex-1">
                  <p className="text-base font-bold text-[#2E2433] leading-tight">KIRTI YADAV </p>
               </div>
               <div className="w-8 h-8 rounded-full bg-[#A863AD] flex items-center justify-center flex-shrink-0 text-white shadow-sm hover:bg-[#96569B] transition-colors cursor-pointer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                     <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.5 3 2.9 3.4 2.5 4 2.5h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" />
                  </svg>
               </div>
            </div>

            {/* Product Card */}
            {/* <div className="absolute bottom-[4%] right-[6%] bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-30 w-[220px]">
               <div className="w-14 h-14 rounded-xl bg-orange-200 flex-shrink-0 bg-cover bg-center" />
               <div>
                  <p className="text-base font-bold text-[#1A1A1A] leading-tight">Italian Pizza</p>
                  <p className="text-sm text-[#F6C453] leading-tight mb-1">★★★★★ 7.49</p>
                  <p className="text-base font-bold text-[#A863AD]">₹ 7.49</p>
               </div>
            </div> */}
         </div>

      </section>
   );
}