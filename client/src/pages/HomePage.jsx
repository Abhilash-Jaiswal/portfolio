import { Link } from "react-router-dom";
import { Leaf, Sparkles } from "lucide-react";
import heroImage from "../assets/Image.png";

export function HomePage() {
  return (
    <div className="bg-[#FCF8F7] min-h-screen">
      {/* Hero Section with Marie Forleo Style Background Text */}
      <section className="relative w-full overflow-hidden flex flex-col items-center text-center pt-32 pb-20"
               style={{ background: "linear-gradient(180deg, #E6BEC6 0%, #FCF8F7 100%)" }}>
        
        {/* Background Giant Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0 mt-8 opacity-90 select-none">
          <h1 className="font-serif text-[24vw] sm:text-[22vw] lg:text-[20vw] font-bold leading-[0.8] tracking-tight text-white uppercase">
            KIRTI<br/>YADAV
          </h1>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-center">
          <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#B55E79] mb-6 drop-shadow-sm bg-white/30 px-4 py-1 rounded-full backdrop-blur-sm">
            Founder &middot; Nutritionist &middot; Menopause Coach &middot; Mentor
          </p>
          
          <div className="relative w-full max-w-3xl mx-auto mb-10">
            <img src={heroImage} alt="Kirti Yadav" className="w-full h-auto object-contain max-h-[60vh] drop-shadow-2xl" />
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#2E2326] mb-4 drop-shadow-sm">
            A life in motion, made more nourishing.
          </h2>
          <p className="text-xl sm:text-2xl font-script text-[#B55E79] mb-4">Hey! I'm Kirti</p>
          <p className="text-lg text-[#5F5358] max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-sm">
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
      <section className="bg-[#B55E79] text-white py-12 px-6 text-center">
        <p className="font-serif text-2xl sm:text-3xl max-w-4xl mx-auto leading-relaxed">
          "We keep exploring, keep learning, keep becoming someone slightly different from who we were yesterday."
        </p>
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
              <Leaf className="w-12 h-12 text-[#B55E79] mb-6" />
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
              <Sparkles className="w-12 h-12 text-[#B55E79] mb-6" />
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
      <section className="py-20 px-6 bg-white border-y border-[#E8CDD3]">
        <div className="max-w-6xl mx-auto space-y-12 text-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B55E79] mb-4">Teams I've Worked With</p>
            <p className="text-[#5F5358] font-medium leading-relaxed">
              JP Morgan &middot; Siemens &middot; Applied Materials &middot; LAM Research &middot; Reliance Ajio &middot; Christ University &middot; Tumkur University
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B55E79] mb-4">Recognized By</p>
            <p className="text-[#5F5358] font-medium leading-relaxed">
              NSRCEL IIM Bangalore &middot; IIMR NutriHub &middot; Goldman Sachs 10,000 Women
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B55E79] mb-4">You May Have Seen Me At</p>
            <p className="text-[#5F5358] font-medium leading-relaxed">
              <Link to="/press" className="hover:text-[#B55E79] underline underline-offset-4">YourStory</Link> &middot; <Link to="/press" className="hover:text-[#B55E79] underline underline-offset-4">India Today</Link> &middot; <Link to="/press" className="hover:text-[#B55E79] underline underline-offset-4">Deccan Herald</Link> &middot; <Link to="/press" className="hover:text-[#B55E79] underline underline-offset-4">The Better India</Link>
            </p>
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
