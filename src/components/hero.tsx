import { Github, Linkedin, Instagram, Twitter, MessageCircle, Play } from "lucide-react";
import { SiStackoverflow, SiMedium } from "react-icons/si";
import zubairImg from "@/assets/zubair-asad.png";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function CountUp({ end, prefix = "", suffix = "" }: { end: number, prefix?: string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-32 pb-16 flex flex-col justify-center relative overflow-hidden bg-bg">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div 
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="green-pill w-fit">Software Engineer</div>
            
            <h1 className="text-5xl md:text-7xl font-light tracking-wider leading-tight">
              Zubair <span className="font-bold">Asad</span>
            </h1>

            <div className="text-2xl md:text-3xl flex items-center gap-3 text-white/90">
              <span className="text-primary-green"><Play fill="currentColor" className="w-5 h-5" /></span>
              <span className="font-medium">
                <Typewriter
                  words={["Flutter Developer", "Mobile App Developer", "Backend Engineer"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>

            <div className="flex gap-4 pt-4">
              {[
                { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com" },
                { icon: <Github className="w-5 h-5" />, href: "https://github.com/zubairasad12" },
                { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com" },
                { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com" },
                { icon: <SiMedium className="w-5 h-5" />, href: "https://medium.com" },
                { icon: <SiStackoverflow className="w-5 h-5" />, href: "https://stackoverflow.com" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="social-icon-circle glow-green"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <a 
              href="#contact" 
              className="group flex items-center gap-2 text-primary-green font-bold text-lg mt-4 w-fit"
            >
              LET'S CHAT!
              <span className="block h-0.5 bg-primary-green w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          </motion.div>

          {/* Right content: Photo */}
          <motion.div 
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full grad-circle flex items-center justify-center p-4">
              <div className="absolute top-10 right-10 w-4 h-4 rounded-full bg-primary-green animate-pulse"></div>
              <div className="absolute bottom-20 left-0 w-3 h-3 rounded-full bg-primary-green animate-bounce"></div>
              <div className="absolute top-1/2 -right-4 w-2 h-2 rounded-full bg-primary-green"></div>
              
              <div className="w-full h-full rounded-full overflow-hidden bg-[#1e1f23]">
                <img
                  src={zubairImg}
                  alt="Zubair Asad"
                  className="w-full h-full object-cover object-top grayscale-filter"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 border-t border-white/5 pt-12 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="text-5xl font-bold text-white/90">
              <CountUp end={5} prefix="~" />
            </span>
            <span className="text-text-light text-sm font-medium leading-tight">
              YEARS<br/>EXPERIENCE
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 border-y md:border-y-0 md:border-x border-white/5 py-8 md:py-0 md:px-8">
            <span className="text-5xl font-bold text-white/90">
              <CountUp end={20} suffix="+" />
            </span>
            <span className="text-text-light text-sm font-medium leading-tight">
              PROJECTS<br/>COMPLETED
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="text-5xl font-bold text-white/90">
              <CountUp end={50} prefix="~" suffix="k" />
            </span>
            <span className="text-text-light text-sm font-medium leading-tight">
              CODE<br/>COMMITS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

