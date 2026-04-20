import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Briefcase, Code2, Layers, Wrench } from "lucide-react";

const skillGroups = [
  {
    label: "Mobile Development",
    icon: <Code2 className="h-4 w-4" />,
    color: "bg-blue-500",
    skills: [
      { name: "Flutter", level: 95 },
      { name: "Dart", level: 92 },
      { name: "State Management", level: 90 },
    ],
  },
  {
    label: "Backend",
    icon: <Layers className="h-4 w-4" />,
    color: "bg-emerald-500",
    skills: [
      { name: "Firebase", level: 87 },
      { name: "REST API", level: 85 },
      { name: "Git / GitHub", level: 90 },
    ],
  },
  {
    label: "Tools & Design",
    icon: <Wrench className="h-4 w-4" />,
    color: "bg-purple-500",
    skills: [
      { name: "Figma", level: 80 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 88 },
    ],
  },
];

const experience = [
  {
    role: "Flutter Developer Intern",
    company: "Digital Agency",
    period: "Jan 2023 – Sep 2023",
    description: "Built and deployed 3 client-facing Flutter apps. Contributed to UI design system and integrated Firebase services.",
    active: true,
  },
  {
    role: "Mobile Development Intern",
    company: "Sigma Agency",
    period: "May 2022 – Dec 2022",
    description: "Collaborated with senior developers on large-scale mobile projects. Focused on state management and performance optimization.",
    active: false,
  },
];

const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "2+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground text-xs">{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Skills & Experience</h2>
          <p className="text-muted-foreground max-w-xl text-base leading-relaxed">
            Passionate about Flutter development, focused on creating beautiful, performant mobile applications that users love.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: bio + stats */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <h3 className="text-xl font-bold">Building the Future of Mobile</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                As a rising Flutter developer, I am deeply passionate about crafting cutting-edge mobile applications that seamlessly blend functionality with aesthetic excellence. My journey in app development has cultivated a strong foundation in cross-platform architecture.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I thrive on solving complex challenges and transforming innovative ideas into polished, production-ready apps. My portfolio of building complete, production-ready applications demonstrates my dedication and fast-learning capabilities.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card border border-border/40 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-extrabold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Skills by category */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {skillGroups.map((group, gi) => (
                <div key={group.label}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`p-1.5 rounded-lg ${group.color} text-white`}>{group.icon}</div>
                    <span className="text-sm font-semibold">{group.label}</span>
                  </div>
                  <div className="space-y-3 pl-1">
                    {group.skills.map((skill, si) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        color={group.color}
                        delay={gi * 0.1 + si * 0.08}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Professional Experience */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Professional Experience</h3>
              </div>

              <div className="space-y-4">
                {experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="bg-card border border-border/40 rounded-2xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <h4 className="font-bold text-sm">{exp.role}</h4>
                        <p className="text-primary text-xs font-semibold mt-0.5">{exp.company}</p>
                      </div>
                      {exp.active && (
                        <Badge className="text-[10px] font-bold bg-primary/10 text-primary border-0">Active</Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{exp.period}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card border border-border/40 rounded-2xl p-5"
            >
              <h4 className="text-sm font-bold mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {["Flutter", "Dart", "Firebase", "REST API", "Figma", "Git", "Android", "iOS", "SQLite", "Provider", "Riverpod", "GetX"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium bg-muted/60 text-muted-foreground px-3 py-1 rounded-full border border-border/30 hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
