import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import zubairImg from "@/assets/zubair-asad.png";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="flex flex-col space-y-7 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Badge
                variant="secondary"
                className="mb-5 text-xs font-semibold px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors rounded-full w-fit"
              >
                <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse inline-block" />
                Available for freelance projects
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-3">
                Hi I am <span className="text-foreground">Zubair Asad</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                Flutter developer
              </h2>
            </motion.div>

            <motion.p
              className="text-muted-foreground text-base leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              I create beautiful, performant cross-platform mobile applications using Flutter and Dart.
              Passionate about clean code and exceptional user experiences.
            </motion.p>

            <motion.div
              className="space-y-2.5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Specialized in</span>
              <div className="flex flex-wrap gap-2">
                {["Flutter", "Dart", "Firebase", "iOS", "Android", "API Integration"].map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.06 }}
                  >
                    <Badge
                      variant="outline"
                      className="bg-background/50 text-xs font-medium px-3 py-1 rounded-full border-border/60"
                    >
                      {skill}
                    </Badge>
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 pt-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button size="lg" className="rounded-full font-semibold px-6" asChild>
                <a href="#projects">
                  View My Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full font-semibold px-6 border-border/60">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              {[
                { href: "https://github.com", icon: <Github className="h-5 w-5" />, label: "GitHub" },
                { href: "https://linkedin.com", icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
                { href: "mailto:zubairasad980@gmail.com", icon: <Mail className="h-5 w-5" />, label: "Email" },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="text-muted-foreground hover:text-primary transition-colors p-2.5 rounded-full hover:bg-primary/10"
                >
                  {icon}
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            className="order-1 md:order-2 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-72 h-80 md:w-96 md:h-[26rem]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-blue-400/20 to-purple-500/30 rounded-full blur-3xl opacity-80" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 bg-card/50 backdrop-blur-sm shadow-2xl z-10">
                <img
                  src={zubairImg}
                  alt="Zubair Asad"
                  className="w-full h-full object-cover object-top"
                  data-testid="img-profile"
                />
              </div>
              <motion.div
                className="absolute -bottom-3 -right-3 z-20"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="flex items-center gap-2 bg-card border border-border/60 shadow-xl rounded-full px-4 py-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-semibold">Available for hire</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
