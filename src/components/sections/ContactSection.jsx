import { useState } from "react";
import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // Theme colours — deep plum / blush
  const theme = {
    primary:      "#B85470",
    primaryLight: "#D4889C",
    primarySoft:  "#FAF0F2",
    dark:         "#2D121A",
    muted:        "#7A5A62",
    border:       "#EACFD3",
    bg:           "#FDF8F8"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div 
      className="w-full px-8 sm:px-12 lg:px-24 py-16 lg:py-20 border-t"
      style={{ backgroundColor: theme.bg, borderColor: `${theme.border}60` }}
    >
      <div className="max-w-[1600px] mx-auto">

        <div className="text-center mb-12">
          <h2 
            className="text-5xl md:text-6xl font-serif font-medium tracking-tighter inline-block relative pb-3"
            style={{ color: theme.dark }}
          >
            Contact me
            <div 
              className="absolute bottom-0 left-1/4 right-1/4 h-[3px]"
              style={{ backgroundColor: theme.primary }}
            ></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6">

          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-2xl font-bold leading-tight" style={{ color: theme.dark }}>
              Let's co-create healthy ecosystems.
            </h3>
            <p className="text-base font-light leading-relaxed" style={{ color: theme.muted }}>
              Whether you are looking to book B2B Corporate Wellness sessions, consult on school menu design, explore clean-label cafe supplies, or discuss a long-term brand ambassadorship, let's connect.
            </p>

            <div className="space-y-4 pt-4 border-t" style={{ borderColor: theme.border }}>
              <div className="flex items-center gap-3" style={{ color: theme.muted }}>
                <Mail size={18} style={{ color: theme.primary }} />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider block" style={{ color: theme.muted }}>Partnership Email</span>
                  <a 
                    href="mailto:hello@kukclean.com" 
                    className="text-sm font-semibold hover:opacity-70 transition-opacity"
                    style={{ color: theme.dark }}
                  >
                    hello@kukclean.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3" style={{ color: theme.muted }}>
                <MessageCircle size={18} style={{ color: theme.primary }} />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider block" style={{ color: theme.muted }}>WhatsApp Channels</span>
                  <span className="text-sm font-semibold" style={{ color: theme.dark }}>Native B2B & Menopause Communities</span>
                </div>
              </div>

              <div className="flex items-center gap-3" style={{ color: theme.muted }}>
                <MapPin size={18} style={{ color: theme.primary }} />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider block" style={{ color: theme.muted }}>Ecosystem HQ</span>
                  <span className="text-sm font-semibold" style={{ color: theme.dark }}>Bangalore & Hyderabad, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div 
            className="lg:col-span-7 bg-white/70 border p-8 rounded-2xl shadow-sm"
            style={{ borderColor: `${theme.border}50` }}
          >
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl font-bold"
                  style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
                >
                  ✓
                </div>
                <h4 className="font-serif text-lg font-bold" style={{ color: theme.dark }}>Message Sent Successfully!</h4>
                <p className="text-sm font-light" style={{ color: theme.muted }}>Thank you for reaching out. Kirti will review your request and get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest block mb-1" style={{ color: theme.muted }}>Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-1 bg-white/50"
                      style={{ 
                        borderColor: theme.border,
                        color: theme.dark
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = theme.primary;
                        e.target.style.ringColor = theme.primary;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = theme.border;
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest block mb-1" style={{ color: theme.muted }}>Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-1 bg-white/50"
                      style={{ 
                        borderColor: theme.border,
                        color: theme.dark
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = theme.primary;
                        e.target.style.ringColor = theme.primary;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = theme.border;
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest block mb-1" style={{ color: theme.muted }}>Message</label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your brand or wellness goals..."
                    className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-1 bg-white/50 resize-none"
                    style={{ 
                      borderColor: theme.border,
                      color: theme.dark
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = theme.primary;
                      e.target.style.ringColor = theme.primary;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = theme.border;
                    }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto text-white text-sm font-bold tracking-widest uppercase px-8 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-sm transition-all duration-300 cursor-pointer hover:opacity-90 hover:scale-[1.02]"
                  style={{ backgroundColor: theme.primary }}
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