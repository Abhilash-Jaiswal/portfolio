import heroImage from "../../assets/Image.png";

export function HeroSection() {
   return (
      <section className="relative min-h-screen w-full flex overflow-hidden bg-white">

         {/* Left Content */}
         <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-16 relative z-20">
            <div className="max-w-[480px]">

               {/* Badge */}
               <div className="inline-flex items-center gap-2 bg-[#FDEDEA] text-[#FF5C58] text-xs font-semibold px-4 py-2 rounded-full mb-8 w-fit">
                  Consciously Nourishing <span>🍃</span>
               </div>

               {/* Headline */}
               <h1 className="font-extrabold text-5xl lg:text-6xl leading-[1.1] tracking-tight text-[#1A1A1A] mb-6">
                  Be The Change<br />

                  Your <span className="text-[#FF5C58]">Health Deserves</span>
               </h1>

               {/* Paragraph */}
               <p className="text-gray-500 text-base lg:text-lg font-normal mb-10 max-w-[340px] leading-relaxed">
                  Our job is filling your day with honest nutrition and with flavour that keeps you coming back.
               </p>

               {/* CTA Row */}
               <div className="flex items-center gap-8 mb-16">
                  <button className="bg-[#FF5C58] text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#e64f4b] transition-colors shadow-md shadow-red-200">
                     Get Started
                  </button>

                  <button className="flex items-center gap-3 text-[#1A1A1A] font-medium text-sm group">
                     <span className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#FF5C58] transition-colors">
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
                     {["#F6C453", "#FF8A65", "#FF5C58"].map((color, i) => (
                        <div
                           key={i}
                           className="w-10 h-10 rounded-full border-2 border-white"
                           style={{ backgroundColor: color }}
                        />
                     ))}
                  </div>
                  <div>
                     <p className="text-sm font-bold text-[#1A1A1A]">👥 Our Happy Community </p>
                     <p className="text-xs text-gray-400">
                        <span className="text-[#F6C453]">★</span> 4,8 <span className="font-normal"> (1,200+ Clients)</span>
                     </p>
                  </div>
               </div>
            </div>
         </div>

         {/* Right Visual */}
         <div className="hidden lg:flex w-1/2 relative items-center justify-center">

            {/* Big Red Circle */}
            {/* Big Red Circle */}
            <div className="absolute top-1/2 left-1/2 right-[35%] -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-[#FF5C58] rounded-full z-0" />

            {/* Dotted Arc */}
            <div className="absolute top-[18%] right-[6%] w-[90px] h-[90px] border-2 border-dashed border-[#F6C453]/60 rounded-full z-10" />

            {/* Flame Icon */}
            <div className="absolute top-[10%] right-[18%] text-2xl z-10">🔥</div>

            {/* Small red dot accents */}
            <div className="absolute bottom-[12%] left-[8%] w-2 h-2 rounded-full bg-[#FF5C58] z-10" />
            <div className="absolute top-[45%] right-[3%] w-2 h-2 rounded-full bg-[#FF5C58] z-10" />

            {/* Clock Badge */}
            <div className="absolute top-[14%] left-[14%] w-16 h-16 bg-[#F6C453] rounded-2xl rotate-6 flex items-center justify-center z-20 shadow-lg">
               <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" strokeLinecap="round" />
               </svg>
            </div>

            {/* Portrait */}
            <div className="relative z-10 w-[380px] h-[520px] flex items-end justify-center">
               <div className="relative w-full h-full rounded-t-full overflow-hidden">
                  <img
                     src={heroImage}
                     alt="Happy customer"
                     className="h-full w-full object-cover object-top"
                  />
               </div>
            </div>

            {/* Courier Card */}
            <div className="absolute bottom-[22%] left-[2%] bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-30 w-[230px]">
               <div className="w-9 h-9 rounded-full bg-gray-800 flex-shrink-0" />
               <div className="flex-1">
                  <p className="text-sm font-bold text-[#1A1A1A] leading-tight">KIRTI YADAV </p>
                  {/* <p className="text-xs text-gray-400 leading-tight">Food Courier</p> */}
               </div>
               <div className="w-8 h-8 rounded-full bg-[#FF5C58] flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                     <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.5 3 2.9 3.4 2.5 4 2.5h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" />
                  </svg>
               </div>
            </div>

            {/* Product Card */}
            {/* <div className="absolute bottom-[4%] right-[6%] bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-30 w-[220px]">
               <div className="w-14 h-14 rounded-xl bg-orange-200 flex-shrink-0 bg-cover bg-center" />
               <div>
                  <p className="text-sm font-bold text-[#1A1A1A] leading-tight">Italian Pizza</p>
                  <p className="text-xs text-[#F6C453] leading-tight mb-1">★★★★★ 7.49</p>
                  <p className="text-sm font-bold text-[#FF5C58]">₹ 7.49</p>
               </div>
            </div> */}
         </div>

      </section>
   );
}