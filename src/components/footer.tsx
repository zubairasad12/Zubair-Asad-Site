import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { SiStackoverflow, SiMedium } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bg py-16 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <div className="flex gap-6 mb-10">
          {[
            { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com" },
            { icon: <Github className="w-5 h-5" />, href: "https://github.com/zubairasad12" },
            { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com" },
            { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com" },
            { icon: <SiMedium className="w-5 h-5" />, href: "https://medium.com" },
            { icon: <SiStackoverflow className="w-5 h-5" />, href: "https://stackoverflow.com" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              className="text-text-light hover:text-primary-green transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        <p className="text-lg font-medium text-white mb-4">
          Designed & Crafted by <span className="text-primary-green">Zubair Asad</span>
        </p>
        
        <p className="text-sm text-text-light">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

