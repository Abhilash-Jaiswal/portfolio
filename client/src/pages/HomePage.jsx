import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Leaf, Sparkles, Award, Quote, Play, ShieldCheck, Heart, GraduationCap, Milestone, Star, CheckCircle2, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import kukuImage from "../assets/kuku-image.jpeg";
import notPausedImage from "../assets/Not Paused.jpeg";


export function HomePage() {
  const [activeHomeStoryIdx, setActiveHomeStoryIdx] = useState(0);
  const [isHomeTransitioning, setIsHomeTransitioning] = useState(true);
  const [isHomePaused, setIsHomePaused] = useState(false);
  const totalHomeSlides = 2;

  const nextHomeSlide = () => {
    if (!isHomeTransitioning) setIsHomeTransitioning(true);
    setActiveHomeStoryIdx((prev) => prev + 1);
  };

  const prevHomeSlide = () => {
    if (!isHomeTransitioning) setIsHomeTransitioning(true);
    setActiveHomeStoryIdx((prev) => (prev <= 0 ? totalHomeSlides - 1 : prev - 1));
  };

  useEffect(() => {
    if (isHomePaused) return;
    const timer = setInterval(() => {
      nextHomeSlide();
    }, 3500);
    return () => clearInterval(timer);
  }, [isHomePaused, activeHomeStoryIdx, isHomeTransitioning]);

  const handleHomeTransitionEnd = () => {
    if (activeHomeStoryIdx >= totalHomeSlides) {
      setIsHomeTransitioning(false);
      setActiveHomeStoryIdx(0);
    }
  };
  return (
    <div className="bg-[#FCF8F7] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden flex flex-col items-center text-center pt-28 pb-16 sm:pt-32 sm:pb-20"
        style={{ background: "linear-gradient(180deg, #E6BEC6 0%, #FCF8F7 100%)" }}>

        {/* Foreground Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-center">

          <h1 className="font-serif text-[22vw] sm:text-[20vw] lg:text-[18vw] font-bold leading-[0.85] tracking-tight text-white uppercase select-none mb-4 sm:mb-7 opacity-90 drop-shadow-md text-center">
            KIRTI<br />YADAV
          </h1>

          <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#B55E79] mb-12 drop-shadow-sm bg-white/30 px-4 py-1 rounded-full backdrop-blur-sm text-center">
            Founder &middot; Nutritionist &middot; Menopause Coach &middot; Startup Mentor
          </p>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2E2326] mb-8 sm:mb-12 drop-shadow-sm px-4">
            A life in motion, made more nourishing.
          </h2>
          <p className="text-3xl sm:text-5xl lg:text-6xl font-script text-[#B55E79] mb-8 sm:mb-12">Hey! I'm Kirti</p>
          <p className="text-lg text-[#5F5358] max-w-2xl mx-auto mb-16 leading-relaxed font-medium drop-shadow-sm">
            A founder, nutritionist, and builder of kinder systems for bodies, workplaces, and the lives we're still becoming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-4">
            <a href="#work-together" className="w-full sm:w-auto px-8 py-3.5 bg-[#B55E79] text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#8e455c] transition-colors shadow-lg">
              Explore my work
            </a>
            <Link to="/life-story" className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#B55E79] border border-[#B55E79] rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#B55E79] hover:text-white transition-colors shadow-lg">
              Read my story
            </Link>
          </div>
        </div>
      </section>

      {/* What I Believe Band */}
      <section className="relative bg-[#B55E79] text-white py-20 px-6 sm:px-12 text-center flex flex-col items-center overflow-hidden">
        {/* Decorative background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          {/* <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/80 bg-white/10 px-4 py-1.5 rounded-full mb-6 border border-white/20">
            Core Philosophy
          </span> */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">
            What I Believe
          </h2>
          <div className="w-16 h-0.5 bg-white/40 mb-6"></div>
          <p className="font-serif text-lg sm:text-xl text-white/95 max-w-2xl leading-relaxed italic mb-6 font-normal">
            "We keep exploring, keep learning, and keep becoming someone slightly different from who we were yesterday."
          </p>
          
        </div>
      </section>

      {/* A letter, before anything else */}
      <section className="py-24 px-6 sm:px-12 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B55E79] bg-[#F4D9DE]/40 px-4 py-1.5 rounded-full inline-block mb-4 border border-[#E8CDD3]/60">
            A letter, before anything else
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#2E2326]">
            A fellow explorer, making room for what's next.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Owner Image Box 2: Letter / Story Portrait */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-xs sm:max-w-sm !h-80 sm:h-56 rounded-3xl border-2 border-dashed border-[#B55E79]/40 bg-white shadow-xl flex flex-col items-center justify-center p-4 text-center group hover:border-[#B55E79] transition-all relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[#F4D9DE] text-[#B55E79] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
                <ImageIcon className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B55E79] mb-1">
                Image Box
              </span>
              <p className="text-xs text-[#5F5358] font-medium">
                Add Personal Story Photo here
              </p>
            </div>
          </div>

          {/* Letter Text Content */}
          <div className="md:col-span-7 text-center md:text-left">
            <p className="text-lg text-[#5F5358] leading-relaxed mb-6">
              I didn't start out in wellness. I started in computer science, building systems for companies like IBM, Target, and AIG. Then life asked a different question — one that brought me closer to food, health, motherhood, and the quiet shifts that can change everything.
            </p>
            <p className="text-lg text-[#5F5358] leading-relaxed mb-10">
              Today I build spaces where people feel more supported: on the plate, at work, through menopause and everything it brings, and in the businesses they're brave enough to start.
            </p>
            <Link to="/life-story" className="text-[#B55E79] font-bold text-sm uppercase tracking-widest hover:underline underline-offset-4 inline-block">
              Read my full story
            </Link>
          </div>
        </div>
      </section>


      {/* More Things I've Built (Ventures teaser) */}
      <section className="py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B55E79] bg-[#F4D9DE]/40 px-4 py-1.5 rounded-full inline-block !mb-6 border border-[#E8CDD3]/60">
              More things I have built
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#2E2326] mb-4">
              Two ventures, one belief: life gets better when we make room for what matters.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl border border-[#E8CDD3] bg-[#FCF8F7] hover:shadow-xl transition-shadow flex flex-col items-center text-center">
              <img src={kukuImage} alt="KuKClean" className="h-28 w-auto object-contain mix-blend-multiply mb-6" />
              <h4 className="text-2xl font-bold text-[#2E2326] mb-2"></h4>
              <p className="font-serif italic text-lg text-[#B55E79] mb-4">Food, made kinder.</p>
              <p className="text-[#5F5358] mb-8 flex-1">
                Clean-label, plant-based seeds & snacks for cafes, workplaces, and your own kitchen.
              </p>
              <a href="https://kukclean.com" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white border border-[#E8CDD3] rounded-full text-xs font-bold text-[#2E2326] hover:border-[#B55E79] hover:text-[#B55E79] transition-all">
                Visit KuKClean
              </a>
            </div>
            <div className="p-10 rounded-3xl border border-[#E8CDD3] bg-[#FCF8F7] hover:shadow-xl transition-shadow flex flex-col items-center text-center">
              <img src={notPausedImage} alt="NotPaused" className="h-28 w-auto object-contain mb-6" style={{ mixBlendMode: 'multiply', filter: 'brightness(1.05) contrast(1.05)' }} />
              <h4 className="text-2xl font-bold text-[#2E2326] mb-2"></h4>
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
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B55E79] bg-white px-4 py-1.5 rounded-full inline-block mb-6 border border-[#E8CDD3]">
              Ways we can work together
            </span>
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

      {/* NEW CONTENT SECTION: Featured Media / In-depth Conversation (PDF Sec 3.3) */}
      <section className="py-20 px-6 sm:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#FCF8F7] to-[#F4D9DE]/40 border border-[#E8CDD3] shadow-md flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B55E79] bg-white px-3.5 py-1 rounded-full border border-[#E8CDD3] mb-4">
                Featured Conversation
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2E2326] mb-4 leading-tight">
                A conversation on building with purpose — with Shraddha Sharma the founder of kukclean, YourStory
              </h3>
              <p className="text-[#5F5358] text-sm leading-relaxed mb-6">
                A wide-ranging, extended discussion capturing Kirti's own philosophy in her own words — reflecting on her journey from computer science to clean eating, entrepreneurship, and supporting women's midlife health.
              </p>
              <Link to="https://www.youtube.com/watch?v=QesR-jmlJeY"  target="_blank"
   className="inline-flex items-center gap-2 px-6 py-3 bg-[#B55E79] text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#8e455c] transition-colors shadow-sm">
                <Play className="w-4 h-4 fill-current" /> Watch / Read Press Story
              </Link>
            </div>
            <div className="w-full md:w-1/2 bg-[#2E2326] rounded-2xl overflow-hidden shadow-xl aspect-video relative flex items-center justify-center group cursor-pointer border border-[#E8CDD3]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
              <div className="relative z-20 flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-[#B55E79] text-white flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
                <span className="text-white font-serif font-bold text-lg mb-1">YourStory Extended Interview</span>
                <span className="text-white/80 text-xs font-medium">Building With Purpose & Systemic Health</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Band */}
   <section className="py-24 px-6 w-full bg-[#FCF8F7] border-y border-[#E8CDD3] relative overflow-hidden">
  {/* Subtle background decoration */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-[#B55E79]/20 to-transparent"></div>

  <div className=" mx-auto relative z-10">

    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">

      {/* LEFT - IMAGE BOX */}
      <div className="md:col-span-2 flex justify-center">
        <div className="w-full max-w-sm h-[350px] sm:h-[450px] rounded-3xl border-2 border-dashed border-[#B55E79]/40 bg-white shadow-xl flex flex-col items-center justify-center p-6 text-center overflow-hidden">
          <div className="w-14 h-14 rounded-2xl bg-[#F4D9DE] text-[#B55E79] flex items-center justify-center mb-4 shadow-sm">
            <ImageIcon className="w-7 h-7" />
          </div>

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B55E79] mb-2">
            Image Box
          </span>

          <p className="text-xs text-[#5F5358] font-medium">
            Add Photo Here
          </p>
        </div>
      </div>

      {/* RIGHT - THREE SECTIONS */}
      <div className="md:col-span-3 space-y-16">

        {/* TEAMS */}
        <div className="text-center">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#B55E79] mb-8 flex items-center justify-center gap-4">
            <span className="w-12 sm:w-20 h-px bg-[#E8CDD3]"></span>
            Teams I've Worked With
            <span className="w-12 sm:w-20 h-px bg-[#E8CDD3]"></span>
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "The Better India", logo: "https://img-cdn.publive.online/fit-in/360x160/filters:format(webp)/english-betterindia/media/agency_attachments/2025/06/24/2025-06-24t114615552z-img_3553-meghna-bhati-2025-06-24-17-16-15.png" },
              { name: "Applied Materials", logo: "https://www.google.com/s2/favicons?domain=appliedmaterials.com&sz=64" },
              { name: "LAM Research", logo: "https://www.google.com/s2/favicons?domain=lamresearch.com&sz=64" },
              { name: "Reliance Ajio", logo: "https://www.google.com/s2/favicons?domain=ajio.com&sz=64" },
              { name: "Christ University", logo: "https://www.google.com/s2/favicons?domain=christuniversity.in&sz=64" },
              { name: "Tumkur University", logo: "https://www.google.com/s2/favicons?domain=tumkuruniversity.ac.in&sz=64" }
            ].map(team => (
              <span
                key={team.name}
                className="px-5 py-3 rounded-full border border-[#E8CDD3]/80 bg-white flex items-center gap-2 text-sm font-medium text-[#5F5358] hover:border-[#B55E79] hover:text-[#B55E79] hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <img
                  src={team.logo}
                  alt={`${team.name} logo`}
                  className="w-5 h-5 object-contain rounded-sm"
                />
                {team.name}
              </span>
            ))}
          </div>
        </div>

        {/* RECOGNIZED BY */}
        <div className="text-center">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#B55E79] mb-8 flex items-center justify-center gap-4">
            <span className="w-12 sm:w-20 h-px bg-[#E8CDD3]"></span>
            Recognized By
            <span className="w-12 sm:w-20 h-px bg-[#E8CDD3]"></span>
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "NSRCEL IIM Bangalore", logo: "https://www.google.com/s2/favicons?domain=nsrcel.org&sz=64" },
              { name: "IIMR NutriHub", logo: "https://www.google.com/s2/favicons?domain=nutrihub-tbi-iimr.org&sz=64" },
              { name: "Goldman Sachs 10,000 Women", logo: "https://www.google.com/s2/favicons?domain=goldmansachs.com&sz=64" }
            ].map(org => (
              <span
                key={org.name}
                className="px-5 py-3 rounded-full border border-[#E8CDD3]/80 bg-white flex items-center gap-2 text-sm font-medium text-[#5F5358] hover:border-[#B55E79] hover:text-[#B55E79] hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <img
                  src={org.logo}
                  alt={`${org.name} logo`}
                  className="w-5 h-5 object-contain rounded-sm"
                />
                {org.name}
              </span>
            ))}
          </div>
        </div>

        {/* YOU MAY HAVE SEEN ME AT */}
        <div className="text-center">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#B55E79] mb-8 flex items-center justify-center gap-4">
            <span className="w-12 sm:w-20 h-px bg-[#E8CDD3]"></span>
            You May Have Seen Me At
            <span className="w-12 sm:w-20 h-px bg-[#E8CDD3]"></span>
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "YourStory", link: "https://yourstory.com/smbstory/woman-entrepreneur-bengaluru-healthy-snacks-vegan-food-kukclean", logo: "https://www.google.com/s2/favicons?domain=yourstory.com&sz=64" },
              { name: "India Today", link: "https://yourstory.com/smbstory/woman-entrepreneur-bengaluru-healthy-snacks-vegan-food-kukclean", logo: "https://www.google.com/s2/favicons?domain=indiatoday.in&sz=64" },
              { name: "Deccan Herald", link: "https://www.deccanherald.com/india/karnataka/bengaluru/virus-outbreak-nudges-many-towards-veganism-909373.html", logo: "https://www.google.com/s2/favicons?domain=deccanherald.com&sz=64" },
              { name: "The Better India", link: "https://thebetterindia.com/306747/kirti-yadav-kukclean-bengaluru-offers-plant-based-vegan-sugar-free-healthy-snacks-for-diabetes-patients/", logo: "https://www.google.com/s2/favicons?domain=thebetterindia.com&sz=64" }
            ].map(pub => (
              <a
                key={pub.name}
                href={pub.link}
                 target="_blank"
  rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-[#B55E79]/30 bg-[#F4D9DE]/30 flex items-center gap-2 text-sm font-bold text-[#B55E79] hover:bg-[#B55E79] hover:border-[#B55E79] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <img
                  src={pub.logo}
                  alt={`${pub.name} logo`}
                  className="w-5 h-5 object-contain rounded-sm"
                />
                {pub.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* NEW CONTENT SECTION: Founders' Manifesto & Core Mission (PDF Sec 2.2, 2.3, 5) */}
      <section className="py-20 px-6 sm:px-12 bg-[#8C4356] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 text-[#E6BEC6]/60 mx-auto mb-6" />
          <p className="font-serif text-2xl sm:text-4xl leading-snug mb-8 drop-shadow-sm font-medium">
            My mission is simple: 1 million plate-level changes.
          </p>
          <div className="w-20 h-0.5 bg-[#E6BEC6]/40 mx-auto mb-8"></div>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-light mb-4">
            I've educated individuals and built communities to inspire them. I do not perform a persona or sell standard products — I work with real people, real bodies, and real lives.
          </p>
          {/* <p className="font-script text-2xl sm:text-3xl text-[#E6BEC6]">— Kirti Yadav</p> */}
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