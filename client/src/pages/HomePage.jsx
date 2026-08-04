import { Link } from "react-router-dom";
import { Leaf, Sparkles } from "lucide-react";
import kukuImage from "../assets/kuku-image.jpeg";
import notPausedImage from "../assets/Not Paused.jpeg";


export function HomePage() {
  return (
    <div className="bg-[#FCF8F7] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden flex flex-col items-center text-center pt-32 pb-20"
               style={{ background: "linear-gradient(180deg, #E6BEC6 0%, #FCF8F7 100%)" }}>
        
        {/* Foreground Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-center">
          
          <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#B55E79] mb-8 drop-shadow-sm bg-white/30 px-4 py-1 rounded-full backdrop-blur-sm">
            Founder &middot; Nutritionist &middot; Menopause Coach &middot; Mentor
          </p>
          
          <h1 className="font-serif text-[24vw] sm:text-[22vw] lg:text-[20vw] font-bold leading-[0.85] tracking-tight text-white uppercase select-none mb-16 opacity-90 drop-shadow-md">
            KIRTI<br/>YADAV
          </h1>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#2E2326] mb-12 drop-shadow-sm">
            A life in motion, made more nourishing.
          </h2>
          <p className="text-4xl sm:text-6xl font-script text-[#B55E79] mb-12">Hey! I'm Kirti</p>
          <p className="text-lg text-[#5F5358] max-w-2xl mx-auto mb-16 leading-relaxed font-medium drop-shadow-sm">
            A founder, nutritionist, and builder of kinder systems for bodies, workplaces, and the lives we're still becoming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#work-together" className="px-8 py-3.5 bg-[#B55E79] text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#8e455c] transition-colors shadow-lg">
              Explore my work
            </a>
            <Link to="/life-story" className="px-8 py-3.5 bg-white text-[#B55E79] border border-[#B55E79] rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#B55E79] hover:text-white transition-colors shadow-lg">
              Read my story
            </Link>
          </div>
        </div>
      </section>

      {/* What I Believe Band */}
      <section className="bg-[#B55E79] text-white py-16 px-6 text-center flex flex-col items-center">
        <p className="font-serif text-2xl sm:text-3xl max-w-4xl mx-auto leading-relaxed mb-6">
          "I've always believed that we keep exploring, keep learning, and keep becoming someone slightly different from who we were yesterday."
        </p>
        <p className="font-script text-2xl sm:text-3xl opacity-90">— Kirti</p>
      </section>

      {/* A letter, before anything else */}
      <section className="py-24 px-6 sm:px-12 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-serif font-bold text-[#2E2326] mb-8">
          A fellow explorer, making room for what's next.
        </h3>
        <p className="text-lg text-[#5F5358] leading-relaxed mb-6">
          I didn't start out in wellness. I started in computer science, building systems for companies like IBM, Target, and AIG. Then life asked a different question — one that brought me closer to food, health, motherhood, and the quiet shifts that can change everything.
        </p>
        <p className="text-lg text-[#5F5358] leading-relaxed mb-10">
          Today I build spaces where people feel more supported: on the plate, at work, through menopause and everything it brings, and in the businesses they're brave enough to start.
        </p>
        <Link to="/life-story" className="text-[#B55E79] font-bold text-sm uppercase tracking-widest hover:underline underline-offset-4">
          Read my full story
        </Link>
      </section>

      {/* More Things I've Built (Ventures teaser) */}
      <section className="py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#2E2326] mb-4">
              Two ventures, one belief: life gets better when we make room for what matters.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl border border-[#E8CDD3] bg-[#FCF8F7] hover:shadow-xl transition-shadow flex flex-col items-center text-center">
              <img src={kukuImage} alt="KuKClean" className="h-28 w-auto object-contain mix-blend-multiply mb-6" />
              <h4 className="text-2xl font-bold text-[#2E2326] mb-2">KuKClean</h4>
              <p className="font-serif italic text-lg text-[#B55E79] mb-4">Food, made kinder.</p>
              <p className="text-[#5F5358] mb-8 flex-1">
                Clean-label, plant-based foods for cafes, workplaces, and your own kitchen.
              </p>
              <a href="https://kukclean.com" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white border border-[#E8CDD3] rounded-full text-xs font-bold text-[#2E2326] hover:border-[#B55E79] hover:text-[#B55E79] transition-all">
                Visit KuKClean
              </a>
            </div>
            <div className="p-10 rounded-3xl border border-[#E8CDD3] bg-[#FCF8F7] hover:shadow-xl transition-shadow flex flex-col items-center text-center">
              <img src={notPausedImage} alt="NotPaused" className="h-28 w-auto object-contain mb-6" style={{ mixBlendMode: 'multiply', filter: 'brightness(1.05) contrast(1.05)' }} />
              <h4 className="text-2xl font-bold text-[#2E2326] mb-2">NotPaused.com</h4>
              <p className="font-serif italic text-lg text-[#B55E79] mb-4">A conversation worth having.</p>
              <p className="text-[#5F5358] mb-8 flex-1">
                A community-led tech platform for women 35+, breaking the silence one honest conversation at a time.
              </p>
              <a href="https://notpaused.com" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white border border-[#E8CDD3] rounded-full text-xs font-bold text-[#2E2326] hover:border-[#B55E79] hover:text-[#B55E79] transition-all">
                Visit NotPaused
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ways We Can Work Together */}
      <section id="work-together" className="py-24 px-6 sm:px-12 bg-[#F4D9DE]/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#2E2326] mb-4">
              One calling, several ways of showing up for you.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Menopause Program", desc: "Navigating menopause supported." },
              { num: "02", title: "Corporate Wellness", desc: "Building a healthier team." },
              { num: "03", title: "Startup Mentoring", desc: "Getting mentored early-stage." },
              { num: "04", title: "Lifestyle Transformation", desc: "Resetting your plate one on one." },
              { num: "05", title: "Brand Collaborations", desc: "Collaborating on a brand." },
              { num: "06", title: "School Programs", desc: "Bringing clean eating to schools." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-white rounded-2xl border border-[#E8CDD3] shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#B55E79] font-bold text-sm mb-4 block">{item.num}</span>
                <h4 className="text-xl font-bold text-[#2E2326] mb-2">{item.title}</h4>
                <p className="text-[#5F5358] mb-6">{item.desc}</p>
                <Link to="/work-with-me" className="text-[#B55E79] text-xs font-bold uppercase tracking-widest hover:underline underline-offset-4">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility Band */}
      <section className="py-24 px-6 bg-[#FCF8F7] border-y border-[#E8CDD3] relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-[#B55E79]/20 to-transparent"></div>

        <div className="max-w-5xl mx-auto space-y-16 relative z-10">
          
          <div className="text-center group">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#B55E79] mb-8 flex items-center justify-center gap-4">
              <span className="w-12 sm:w-20 h-px bg-[#E8CDD3] group-hover:w-16 sm:group-hover:w-24 transition-all duration-500"></span>
              Teams I've Worked With
              <span className="w-12 sm:w-20 h-px bg-[#E8CDD3] group-hover:w-16 sm:group-hover:w-24 transition-all duration-500"></span>
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["JP Morgan", "Siemens", "Applied Materials", "LAM Research", "Reliance Ajio", "Christ University", "Tumkur University"].map(name => (
                <span key={name} className="px-5 py-2.5 rounded-full border border-[#E8CDD3]/80 bg-white text-sm font-medium text-[#5F5358] hover:border-[#B55E79] hover:text-[#B55E79] hover:-translate-y-1 transition-all duration-300 shadow-sm cursor-default">
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center group">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#B55E79] mb-8 flex items-center justify-center gap-4">
              <span className="w-12 sm:w-20 h-px bg-[#E8CDD3] group-hover:w-16 sm:group-hover:w-24 transition-all duration-500"></span>
              Recognized By
              <span className="w-12 sm:w-20 h-px bg-[#E8CDD3] group-hover:w-16 sm:group-hover:w-24 transition-all duration-500"></span>
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["NSRCEL IIM Bangalore", "IIMR NutriHub", "Goldman Sachs 10,000 Women"].map(name => (
                <span key={name} className="px-5 py-2.5 rounded-full border border-[#E8CDD3]/80 bg-white text-sm font-medium text-[#5F5358] hover:border-[#B55E79] hover:text-[#B55E79] hover:-translate-y-1 transition-all duration-300 shadow-sm cursor-default">
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center group">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#B55E79] mb-8 flex items-center justify-center gap-4">
              <span className="w-12 sm:w-20 h-px bg-[#E8CDD3] group-hover:w-16 sm:group-hover:w-24 transition-all duration-500"></span>
              You May Have Seen Me At
              <span className="w-12 sm:w-20 h-px bg-[#E8CDD3] group-hover:w-16 sm:group-hover:w-24 transition-all duration-500"></span>
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "YourStory", link: "/press" },
                { name: "India Today", link: "/press" },
                { name: "Deccan Herald", link: "/press" },
                { name: "The Better India", link: "/press" }
              ].map(pub => (
                <Link key={pub.name} to={pub.link} className="px-6 py-2.5 rounded-full border border-[#B55E79]/30 bg-[#F4D9DE]/30 text-sm font-bold text-[#B55E79] hover:bg-[#B55E79] hover:border-[#B55E79] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm">
                  {pub.name}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Latest Preview */}
      <section className="py-24 px-6 sm:px-12 bg-[#FCF8F7]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-serif font-bold text-[#2E2326] mb-10">What's been happening</h3>
          <div className="p-8 bg-white border border-[#E8CDD3] rounded-2xl shadow-sm text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B55E79] mb-2">New Update</p>
            <h4 className="text-xl font-bold text-[#2E2326] mb-4">Expanding the NotPaused Community</h4>
            <p className="text-[#5F5358] mb-6">Join us for the next series of open conversations and expert sessions designed for women 35+.</p>
            <Link to="/latest" className="text-[#B55E79] text-xs font-bold uppercase tracking-widest hover:underline underline-offset-4">
              Read the latest
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="bg-[#B55E79] text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
            If something here made you feel seen, let's begin there.
          </h2>
          <p className="text-white/80 mb-10">
            A single honest conversation can change everything.
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-white text-[#B55E79] rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#FDF5F6] transition-colors">
            Start a conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
