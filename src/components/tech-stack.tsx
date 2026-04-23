import { SiFlutter, SiDart, SiFirebase, SiNodedotjs, SiReact, SiTypescript, SiPostgresql, SiMongodb, SiGit, SiDocker, SiKotlin, SiSwift } from "react-icons/si";
import { motion } from "framer-motion";

const techs = [
  { icon: <SiFlutter />, label: "Flutter" },
  { icon: <SiDart />, label: "Dart" },
  { icon: <SiFirebase />, label: "Firebase" },
  { icon: <SiNodedotjs />, label: "Node.js" },
  { icon: <SiReact />, label: "React" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <SiPostgresql />, label: "PostgreSQL" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <SiGit />, label: "Git" },
  { icon: <SiDocker />, label: "Docker" },
  { icon: <SiKotlin />, label: "Kotlin" },
  { icon: <SiSwift />, label: "Swift" },
];

export function TechStack() {
  return (
    <section id="tech" className="py-24 bg-bg">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <div className="w-20 h-1 bg-primary-green mx-auto mb-8 rounded-full"></div>
          <p className="text-text-light max-w-2xl mx-auto">
            These are the technologies I work with to build high-quality mobile and web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.label}
              className="tech-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(110, 243, 165, 0.15)" }}
            >
              <div className="text-4xl text-primary-green">
                {tech.icon}
              </div>
              <span className="text-sm font-medium text-white">{tech.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
