import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MapPin, Mail, Phone, CheckCircle, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) return;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoLink = `mailto:zubairasad980@gmail.com?subject=${encodeURIComponent(subject || "Portfolio Inquiry")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <section id="contact" className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest">
            Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-md text-base leading-relaxed">
            Have a project in mind? I'd love to hear how we can bring your mobile app idea to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left info */}
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-lg font-bold mb-5">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:zubairasad980@gmail.com" className="flex items-center gap-3 group" data-testid="link-email">
                  <div className="bg-primary/10 p-2.5 rounded-xl group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Email</p>
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">
                      zubairasad980@gmail.com
                    </span>
                  </div>
                </a>

                <a href="tel:+923339140786" className="flex items-center gap-3 group" data-testid="link-phone">
                  <div className="bg-primary/10 p-2.5 rounded-xl group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Phone</p>
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">
                      +92 333 9140786
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2.5 rounded-xl flex-shrink-0">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Location</p>
                    <p className="text-sm font-medium">Remote / Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold mb-3">Follow Me</h4>
              <div className="space-y-2">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <div className="bg-muted p-2 rounded-lg group-hover:bg-primary/10 transition-colors">
                    <Github className="h-4 w-4" />
                  </div>
                  <span className="font-medium">Github</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <div className="bg-muted p-2 rounded-lg group-hover:bg-primary/10 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </div>
                  <span className="font-medium">Muzamil Nawab</span>
                </a>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4">
              <p className="text-xs text-muted-foreground leading-relaxed">
                I'm currently available for freelance projects and full-time opportunities. Response time is usually within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="md:col-span-3 bg-card rounded-2xl p-7 border border-border/40 shadow-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-green-500/10 rounded-full p-5"
                >
                  <CheckCircle className="h-12 w-12 text-green-500" />
                </motion.div>
                <h3 className="text-xl font-bold">Message Sent!</h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Your email client opened with the message ready. I'll respond as soon as possible.
                </p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit} data-testid="form-contact">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Name *</label>
                    <Input id="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required data-testid="input-name" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email *</label>
                    <Input id="email" type="email" placeholder="john@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required data-testid="input-email" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Subject</label>
                  <Input id="subject" placeholder="What's this about?" value={subject} onChange={(e) => setSubject(e.target.value)} data-testid="input-subject" />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Message *</label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    className="min-h-[130px] resize-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    data-testid="input-message"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto rounded-full font-semibold px-7" data-testid="button-send">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
