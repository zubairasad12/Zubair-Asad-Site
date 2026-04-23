import { motion } from "framer-motion";

const experiences = [
  {
    org: "Self-Employed",
    position: "Senior Flutter Developer",
    dates: "2021 - Present",
    tech: ["Flutter", "Dart", "Firebase", "Node.js"],
  },
  {
    org: "Digital Agency",
    position: "Flutter Developer",
    dates: "2019 - 2021",
    tech: ["Flutter", "Dart", "REST API", "Git"],
  },
  {
    org: "Tech Startup",
    position: "Mobile App Intern",
    dates: "2018 - 2019",
    tech: ["Java", "Android Studio", "Kotlin"],
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary-green mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative pl-8">
          <div className="timeline-line"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="timeline-dot"></div>
                <div className="bg-bg p-6 rounded-xl border border-white/5 shadow-xl hover:border-primary-green/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.org}</h3>
                      <p className="text-primary-green font-medium">{exp.position}</p>
                    </div>
                    <span className="text-sm text-text-light bg-white/5 px-3 py-1 rounded-full">{exp.dates}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tech.map(t => (
                      <span key={t} className="text-xs bg-primary-green/10 text-primary-green px-2 py-1 rounded-md border border-primary-green/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
