import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Decorative Graphic */}
          <motion.div 
            className="hidden md:flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-80 h-80 border-2 border-primary-green/20 rounded-2xl rotate-3 flex items-center justify-center">
              <div className="absolute inset-4 border-2 border-primary-green/10 rounded-2xl -rotate-6"></div>
              <div className="text-primary-green font-cursive text-6xl -rotate-3">&lt; Zubair /&gt;</div>
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
            <div className="space-y-6 text-text-light text-lg leading-relaxed">
              <p>
                Hello! I'm <span className="text-primary-green font-medium">Zubair Asad</span>, a passionate 
                <span className="text-primary-green font-medium"> Flutter Developer</span> with over 5 years of experience in building 
                high-performance mobile applications.
              </p>
              <p>
                I specialize in creating <span className="text-primary-green font-medium">cross-platform</span> solutions that offer 
                native-like performance and beautiful user interfaces. My journey in tech is driven by a desire to solve 
                real-world problems through <span className="text-primary-green font-medium">clean code</span> and 
                <span className="text-primary-green font-medium"> innovative design</span>.
              </p>
              <p>
                When I'm not coding, you can find me contributing to <span className="text-primary-green font-medium">open-source projects</span>, 
                mentoring junior developers, or exploring the latest trends in <span className="text-primary-green font-medium">mobile architecture</span>.
              </p>
            </div>

            <div className="mt-10">
              <a 
                href={`${import.meta.env.BASE_URL}resume.html`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-green text-bg font-bold px-8 py-3 rounded-lg hover:scale-105 transition-transform glow-green"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

