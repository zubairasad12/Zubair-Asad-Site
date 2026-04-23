import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { useState } from "react";
import { SiStackoverflow, SiMedium } from "react-icons/si";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    const mailtoLink = `mailto:zubairasad980@gmail.com?subject=${encodeURIComponent(formData.subject || "Contact from Portfolio")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 bg-bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary-green mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-bg flex items-center justify-center text-primary-green border border-white/5 group-hover:border-primary-green/30 transition-colors shadow-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-text-light font-medium uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:zubairasad980@gmail.com" className="text-lg font-bold hover:text-primary-green transition-colors">
                      zubairasad980@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-bg flex items-center justify-center text-primary-green border border-white/5 group-hover:border-primary-green/30 transition-colors shadow-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-text-light font-medium uppercase tracking-widest mb-1">Phone</p>
                    <a href="tel:+923339140786" className="text-lg font-bold hover:text-primary-green transition-colors">
                      +92 333 9140786
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-bg flex items-center justify-center text-primary-green border border-white/5 group-hover:border-primary-green/30 transition-colors shadow-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-text-light font-medium uppercase tracking-widest mb-1">Location</p>
                    <p className="text-lg font-bold">Peshawar, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-widest text-text-light">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { icon: <Linkedin />, href: "https://linkedin.com" },
                  { icon: <Github />, href: "https://github.com/zubairasad12" },
                  { icon: <Instagram />, href: "https://instagram.com" },
                  { icon: <Twitter />, href: "https://twitter.com" },
                  { icon: <SiMedium />, href: "https://medium.com" },
                  { icon: <SiStackoverflow />, href: "https://stackoverflow.com" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-bg flex items-center justify-center text-text-light hover:text-primary-green border border-white/5 hover:border-primary-green/30 transition-all"
                  >
                    <div className="w-5 h-5">{social.icon}</div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-bg p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-light uppercase tracking-widest ml-1">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-bg-dark border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-primary-green/50 transition-colors"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-light uppercase tracking-widest ml-1">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-bg-dark border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-primary-green/50 transition-colors"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-light uppercase tracking-widest ml-1">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full bg-bg-dark border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-primary-green/50 transition-colors"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-light uppercase tracking-widest ml-1">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-bg-dark border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-primary-green/50 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-green text-bg font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 glow-green"
              >
                <Send className="w-5 h-5" />
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

