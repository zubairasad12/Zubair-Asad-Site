import { motion } from "framer-motion";
import { Github, ExternalLink, Play } from "lucide-react";
import farmerImg from "@/assets/farmer.jpg";
import fitnessImg from "@/assets/fitness.jpg";
import habitImg from "@/assets/habit.jpg";
import walletImg from "@/assets/wallet.jpg";

const projects = [
  {
    title: "Farmer App",
    category: "Product",
    description: "A comprehensive agriculture management app helping farmers track crops, manage resources, and get real-time weather updates.",
    tags: ["Flutter", "Dart", "Firebase"],
    githubUrl: "https://github.com/zubairasad12",
    liveUrl: "#",
    image: farmerImg,
  },
  {
    title: "Fitness Tracker",
    category: "Open Source",
    description: "Health and wellness app with workout logging, calorie tracking, and seamless wearable device integration.",
    tags: ["Flutter", "HealthKit", "SQLite"],
    githubUrl: "https://github.com/zubairasad12",
    liveUrl: "#",
    image: fitnessImg,
  },
  {
    title: "Habit Tracker",
    category: "Product",
    description: "Minimalist daily habit tracking app with streaks, reminders, and beautiful analytics.",
    tags: ["Flutter", "Riverpod", "Local DB"],
    githubUrl: "https://github.com/zubairasad12",
    liveUrl: "#",
    image: habitImg,
  },
  {
    title: "WalletWise",
    category: "Product",
    description: "Personal finance management app with expense tracking, budget planning, and detailed spending analytics.",
    tags: ["Flutter", "Dart", "REST API"],
    githubUrl: "https://github.com/zubairasad12",
    liveUrl: "#",
    image: walletImg,
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
              {/* Project Image */}
              <div className="h-64 bg-bg-dark relative overflow-hidden">
                <div className="absolute top-4 left-4 bg-primary-green text-bg text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full z-10">
                  {project.category}
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent pointer-events-none"></div>
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

