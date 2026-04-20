import { Github, Linkedin, Mail, Code2 } from "lucide-react";

const quickLinks = ["Home", "Projects", "About", "Contact"];
const services = ["Mobile Development", "UI/UX Design", "API Integration", "Flutter Consulting"];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/40 pt-14 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm">
                ZA
              </div>
              <span className="font-bold text-base">Zubair Asad</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[180px]">
              Building beautiful, performant mobile applications that users love.
            </p>
            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="mailto:zubairasad980@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Services</h4>
            <ul className="space-y-2.5">
              {services.map((svc) => (
                <li key={svc}>
                  <span className="text-sm text-muted-foreground">{svc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:zubairasad980@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                  zubairasad980@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+923339140786" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +92 333 9140786
                </a>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Zubair Asad. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            Built with <Code2 className="h-3 w-3 text-primary" /> Flutter & React
          </p>
        </div>
      </div>
    </footer>
  );
}
