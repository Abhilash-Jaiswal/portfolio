import { useState } from "react";
import { Camera, MonitorPlay, Briefcase, ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setFormData({ name: "", email: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <footer className="w-full font-sans border-t border-gray-200">

      {/* Top CTA Section (White) */}
      <div className="bg-[#F2EFE8] w-full px-8 sm:px-12 lg:px-24 py-16 lg:py-20 border-t border-stone-200/60">
        <div className="max-w-[1600px] mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-serif font-medium text-stone-900 tracking-tighter inline-block relative pb-3">
              Contact me
              {/* Colored underline mimicking the image */}
              <div className="absolute bottom-0 left-1/4 right-1/4 h-[3px] bg-[#FF5C58]"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6">
            
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-stone-900 leading-tight">
                Let's co-create healthy ecosystems.
              </h3>
              <p className="text-stone-600 text-sm font-light leading-relaxed">
                Whether you are looking to book B2B Corporate Wellness sessions, consult on school menu design, explore clean-label cafe supplies, or discuss a long-term brand ambassadorship, let's connect.
              </p>
              
              <div className="space-y-4 pt-4 border-t border-stone-200">
                <div className="flex items-center gap-3 text-stone-700">
                  <Mail size={18} className="text-[#FF5C58]" />
                  <div>
                    <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">Partnership Email</span>
                    <a href="mailto:hello@kukclean.com" className="text-stone-850 text-xs font-semibold hover:text-[#FF5C58]">hello@kukclean.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-stone-700">
                  <MessageCircle size={18} className="text-[#FF5C58]" />
                  <div>
                    <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">WhatsApp Channels</span>
                    <span className="text-stone-850 text-xs font-semibold">Native B2B & Menopause Communities</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-stone-700">
                  <MapPin size={18} className="text-[#FF5C58]" />
                  <div>
                    <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">Ecosystem HQ</span>
                    <span className="text-stone-850 text-xs font-semibold">Bangalore & Hyderabad, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-white/70 border border-stone-200/50 p-8 rounded-2xl shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">✓</div>
                  <h4 className="font-serif text-lg font-bold text-stone-900">Message Sent Successfully!</h4>
                  <p className="text-stone-500 text-xs font-light">Thank you for reaching out. Kirti will review your request and get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-1">Your Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe" 
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 text-xs focus:outline-none focus:border-[#FF5C58] focus:ring-1 focus:ring-[#FF5C58] bg-white/50"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-1">Your Email</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com" 
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 text-xs focus:outline-none focus:border-[#FF5C58] focus:ring-1 focus:ring-[#FF5C58] bg-white/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-1">Message</label>
                    <textarea 
                      rows="4" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your brand or wellness goals..." 
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 text-xs focus:outline-none focus:border-[#FF5C58] focus:ring-1 focus:ring-[#FF5C58] bg-white/50 resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full sm:w-auto bg-[#FF5C58] hover:bg-[#e64f4b] text-white text-xs font-bold tracking-widest uppercase px-8 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-sm transition-all duration-300 cursor-pointer"
                  >
                    Send Message <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>


      {/* Bottom Information Section (Black) */}
      <div className="bg-[#111111] text-white pt-16 pb-16 px-8 sm:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 max-w-[1600px] mx-auto">

          {/* Column 1: Brand Statement */}
          <div className="lg:w-[35%] lg:pr-12">
            <h3 className="text-3xl lg:text-4xl font-sans font-bold leading-tight tracking-tight text-white">
              Wellness architecture for the modern lifestyle&reg;
            </h3>
          </div>

          {/* Column 2: Kuk Clean Contact */}
          <div className="lg:w-[20%]">
            <h4 className="text-xs font-bold tracking-widest text-gray-300 uppercase mb-5">
              KuK Clean
            </h4>
            <div className="text-sm font-normal text-gray-100 space-y-2 mb-6 leading-relaxed">
              <p><a href="mailto:hello@kukclean.com" className="hover:text-white underline decoration-gray-500 underline-offset-4">hello@kukclean.com</a></p>
              <p>+91 98765 43210</p>
              <p>Nutrihub ICAR-IIMR,</p>
              <p>Hyderabad, India</p>
            </div>
            <a href="https://kukclean.com" className="text-xs font-bold tracking-widest text-white uppercase border-b border-gray-500 pb-1 hover:border-white transition-colors">
              VISIT STORE &nearr;
            </a>
          </div>

          {/* Column 3: NotPaused Contact */}
          <div className="lg:w-[20%]">
            <h4 className="text-xs font-bold tracking-widest text-gray-300 uppercase mb-5">
              NotPaused.com
            </h4>
            <div className="text-sm font-normal text-gray-100 space-y-2 mb-6 leading-relaxed">
              <p><a href="mailto:community@notpaused.com" className="hover:text-white underline decoration-gray-500 underline-offset-4">community@notpaused.com</a></p>
              <p>+91 98765 43210</p>
              <p>Community HQ,</p>
              <p>Bangalore, India</p>
            </div>
            <a href="https://notpaused.com" className="text-xs font-bold tracking-widest text-white uppercase border-b border-gray-500 pb-1 hover:border-white transition-colors">
              VISIT PLATFORM &nearr;
            </a>
          </div>

          {/* Column 4: Newsletter & Socials */}
          <div className="lg:w-[25%]">
            <h4 className="text-xs font-bold tracking-widest text-gray-300 uppercase mb-4">
              WANT TO BE THE HEALTHIEST IN YOUR OFFICE?
            </h4>
            <a href="#" className="text-sm font-medium text-white underline decoration-gray-500 underline-offset-4 hover:decoration-white transition-colors inline-block mb-8">
              SIGN UP FOR OUR NEWSLETTER &rarr;
            </a>

            <h4 className="text-xs font-bold tracking-widest text-gray-300 uppercase mb-5">
              FOLLOW US
            </h4>
            <div className="flex gap-5 text-gray-100">
              <a href="#" className="hover:text-white transition-colors"><Camera size={20} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-white transition-colors"><MonitorPlay size={20} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-white transition-colors"><Briefcase size={20} strokeWidth={1.5} /></a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}