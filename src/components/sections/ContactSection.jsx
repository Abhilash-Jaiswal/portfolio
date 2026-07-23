import { useState } from "react";
import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="bg-[#FAF8FB] w-full px-8 sm:px-12 lg:px-24 py-16 lg:py-20 border-t border-[#E5DCE8]/60">
      <div className="max-w-[1600px] mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-serif font-medium text-[#2E2433] tracking-tighter inline-block relative pb-3">
            Contact me
            <div className="absolute bottom-0 left-1/4 right-1/4 h-[3px] bg-[#A863AD]"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6">

          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#2E2433] leading-tight">
              Let's co-create healthy ecosystems.
            </h3>
            <p className="text-[#6F6476] text-base font-light leading-relaxed">
              Whether you are looking to book B2B Corporate Wellness sessions, consult on school menu design, explore clean-label cafe supplies, or discuss a long-term brand ambassadorship, let's connect.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#E5DCE8]">
              <div className="flex items-center gap-3 text-[#6F6476]">
                <Mail size={18} className="text-[#A863AD]" />
                <div>
                  <span className="text-[10px] text-[#6F6476] font-bold uppercase tracking-wider block">Partnership Email</span>
                  <a href="mailto:hello@kukclean.com" className="text-[#2E2433] text-sm font-semibold hover:text-[#A863AD]">hello@kukclean.com</a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[#6F6476]">
                <MessageCircle size={18} className="text-[#A863AD]" />
                <div>
                  <span className="text-[10px] text-[#6F6476] font-bold uppercase tracking-wider block">WhatsApp Channels</span>
                  <span className="text-[#2E2433] text-sm font-semibold">Native B2B & Menopause Communities</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[#6F6476]">
                <MapPin size={18} className="text-[#A863AD]" />
                <div>
                  <span className="text-[10px] text-[#6F6476] font-bold uppercase tracking-wider block">Ecosystem HQ</span>
                  <span className="text-[#2E2433] text-sm font-semibold">Bangalore & Hyderabad, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white/70 border border-[#E5DCE8]/50 p-8 rounded-2xl shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 bg-[#43A047]/10 text-[#43A047] rounded-full flex items-center justify-center mx-auto text-xl font-bold">✓</div>
                <h4 className="font-serif text-lg font-bold text-[#2E2433]">Message Sent Successfully!</h4>
                <p className="text-[#6F6476] text-sm font-light">Thank you for reaching out. Kirti will review your request and get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-[#6F6476] uppercase tracking-widest block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-[#E5DCE8] text-sm focus:outline-none focus:border-[#A863AD] focus:ring-1 focus:ring-[#A863AD] bg-white/50"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-[#6F6476] uppercase tracking-widest block mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-[#E5DCE8] text-sm focus:outline-none focus:border-[#A863AD] focus:ring-1 focus:ring-[#A863AD] bg-white/50"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-[#6F6476] uppercase tracking-widest block mb-1">Message</label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your brand or wellness goals..."
                    className="w-full px-4 py-3 rounded-lg border border-[#E5DCE8] text-sm focus:outline-none focus:border-[#A863AD] focus:ring-1 focus:ring-[#A863AD] bg-white/50 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto btn-ai-gradient text-white text-sm font-bold tracking-widest uppercase px-8 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-sm transition-all duration-300 cursor-pointer animate-pulse-glow"
                >
                  Send Message <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
