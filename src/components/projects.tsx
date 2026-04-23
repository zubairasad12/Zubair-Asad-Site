import { motion } from "framer-motion";
import { Github, ExternalLink, Play, Layout } from "lucide-react";

const projects = [
  {
    title: "Farmer App",
    category: "Product",
    description: "A comprehensive agriculture management app helping farmers track crops, manage resources, and get real-time weather updates.",
    tags: ["Flutter", "Dart", "Firebase"],
    githubUrl: "https://github.com/zubairasad12",
    liveUrl: "#",
    gradient: "from-[#0f2027] via-[#203a43] to-[#2c5364]",
  },
  {
    title: "Fitness Tracker",
    category: "Open Source",
    description: "Health and wellness app with workout logging, calorie tracking, and seamless wearable device integration.",
    tags: ["Flutter", "HealthKit", "SQLite"],
    githubUrl: "https://github.com/zubairasad12",
    liveUrl: "#",
    gradient: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
  },
  {
    title: "Habit Tracker",
    category: "Product",
    description: "Minimalist daily habit tracking app with streaks, reminders, and beautiful analytics.",
    tags: ["Flutter", "Riverpod", "Local DB"],
    githubUrl: "https://github.com/zubairasad12",
    liveUrl: "#",
    gradient: "from-[#2d1b69] via-[#11998e] to-[#38ef7d]",
  },
  {
    title: "WalletWise",
    category: "Product",
    description: "Personal finance management app with expense tracking, budget planning, and detailed spending analytics.",
    tags: ["Flutter", "Dart", "REST API"],
    githubUrl: "https://github.com/zubairasad12",
    liveUrl: "#",
    gradient: "from-[#0f0c29] via-[#302b63] to-[#24243e]",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary-green mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-bg rounded-2xl overflow-hidden border border-white/5 hover:border-primary-green/30 transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Project Image Placeholder / Header */}
              <div className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center p-8`}>
                <div className="absolute top-4 left-4 bg-primary-green text-bg text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full z-10">
                  {project.category}
                </div>
                
                {/* Visual Mockup Element */}
                <div className="w-32 h-64 bg-bg-dark rounded-[2rem] border-4 border-white/10 relative shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-black rounded-b-xl"></div>
                  <div className="p-4 space-y-3 mt-6">
                    <div className="h-2 w-full bg-white/5 rounded"></div>
                    <div className="h-2 w-3/4 bg-white/5 rounded"></div>
                    <div className="h-20 w-full bg-primary-green/5 rounded-xl border border-primary-green/10"></div>
                    <div className="flex gap-2">
                      <div className="h-8 w-8 rounded-full bg-white/5"></div>
                      <div className="h-8 w-8 rounded-full bg-white/5"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-green transition-colors">{project.title}</h3>
                <p className="text-text-light mb-6 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-text-light bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href="#" className="flex items-center gap-2 bg-primary-green/10 text-primary-green text-sm font-bold px-4 py-2 rounded-lg border border-primary-green/20 hover:bg-primary-green hover:text-bg transition-all">
                    <Play className="w-4 h-4" /> App
                  </a>
                  <a href={project.githubUrl} target="_blank" className="flex items-center gap-2 bg-white/5 text-text-light text-sm font-bold px-4 py-2 rounded-lg border border-white/5 hover:border-primary-green/30 hover:text-primary-green transition-all">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a href={project.liveUrl} className="flex items-center gap-2 bg-white/5 text-text-light text-sm font-bold px-4 py-2 rounded-lg border border-white/5 hover:border-primary-green/30 hover:text-primary-green transition-all">
                    <ExternalLink className="w-4 h-4" /> Web
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

