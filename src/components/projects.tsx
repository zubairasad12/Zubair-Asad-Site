import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Farmer App",
    badge: "New",
    badgeColor: "bg-green-500",
    description:
      "A comprehensive agriculture management app helping farmers track crops, manage resources, and get real-time weather updates for better yield.",
    tags: ["Flutter", "Dart", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
    stars: 128,
    gradient: "from-[#0f2027] via-[#203a43] to-[#2c5364]",
    screens: [
      { bg: "bg-emerald-600", bars: ["w-3/4", "w-1/2", "w-2/3"], color: "bg-emerald-300" },
      { bg: "bg-teal-700", bars: ["w-full", "w-3/4", "w-1/2"], color: "bg-teal-300" },
      { bg: "bg-green-800", bars: ["w-2/3", "w-full", "w-1/3"], color: "bg-green-300" },
    ],
  },
  {
    title: "Fitness Tracker",
    badge: "Popular",
    badgeColor: "bg-orange-500",
    description:
      "Health and wellness app with workout logging, calorie tracking, progress charts and seamless wearable device integration for iOS and Android.",
    tags: ["Flutter", "HealthKit", "SQLite"],
    liveUrl: "#",
    githubUrl: "#",
    stars: 214,
    gradient: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
    screens: [
      { bg: "bg-orange-600", bars: ["w-full", "w-3/4", "w-1/2"], color: "bg-orange-300" },
      { bg: "bg-red-700", bars: ["w-2/3", "w-full", "w-3/4"], color: "bg-red-300" },
      { bg: "bg-amber-700", bars: ["w-1/2", "w-2/3", "w-full"], color: "bg-amber-300" },
    ],
  },
  {
    title: "Habit Tracker",
    badge: "Featured",
    badgeColor: "bg-purple-500",
    description:
      "Minimalist daily habit tracking app with streaks, reminders, and beautiful analytics to help users build and maintain positive routines.",
    tags: ["Flutter", "Riverpod", "Local DB"],
    liveUrl: "#",
    githubUrl: "#",
    stars: 97,
    gradient: "from-[#2d1b69] via-[#11998e] to-[#38ef7d]",
    screens: [
      { bg: "bg-purple-600", bars: ["w-1/2", "w-3/4", "w-full"], color: "bg-purple-300" },
      { bg: "bg-violet-700", bars: ["w-3/4", "w-1/2", "w-2/3"], color: "bg-violet-300" },
      { bg: "bg-indigo-700", bars: ["w-full", "w-1/3", "w-3/4"], color: "bg-indigo-300" },
    ],
  },
  {
    title: "WalletWise",
    badge: "New",
    badgeColor: "bg-blue-500",
    description:
      "Personal finance management app with expense tracking, budget planning, bill reminders, and detailed spending analytics.",
    tags: ["Flutter", "Dart", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
    stars: 163,
    gradient: "from-[#0f0c29] via-[#302b63] to-[#24243e]",
    screens: [
      { bg: "bg-blue-600", bars: ["w-3/4", "w-full", "w-1/2"], color: "bg-blue-300" },
      { bg: "bg-cyan-700", bars: ["w-2/3", "w-1/3", "w-full"], color: "bg-cyan-300" },
      { bg: "bg-sky-700", bars: ["w-full", "w-2/3", "w-1/2"], color: "bg-sky-300" },
    ],
  },
  {
    title: "Event Planner",
    badge: "Popular",
    badgeColor: "bg-pink-500",
    description:
      "Complete event management platform for organizers and attendees — create events, manage RSVPs, send invites, and track everything in real-time.",
    tags: ["Flutter", "Firebase", "Google Maps"],
    liveUrl: "#",
    githubUrl: "#",
    stars: 89,
    gradient: "from-[#1a0533] via-[#6b21a8] to-[#db2777]",
    screens: [
      { bg: "bg-pink-600", bars: ["w-full", "w-1/2", "w-3/4"], color: "bg-pink-300" },
      { bg: "bg-rose-700", bars: ["w-2/3", "w-full", "w-1/2"], color: "bg-rose-300" },
      { bg: "bg-fuchsia-700", bars: ["w-3/4", "w-2/3", "w-full"], color: "bg-fuchsia-300" },
    ],
  },
  {
    title: "Social Media Dashboard",
    badge: "Featured",
    badgeColor: "bg-indigo-500",
    description:
      "Analytics dashboard for creators to track engagement across multiple social platforms with beautiful real-time data visualizations.",
    tags: ["Flutter", "GraphQL", "Charts"],
    liveUrl: "#",
    githubUrl: "#",
    stars: 201,
    gradient: "from-[#0d0d0d] via-[#1a1a2e] to-[#16213e]",
    screens: [
      { bg: "bg-indigo-600", bars: ["w-full", "w-3/4", "w-2/3"], color: "bg-indigo-300" },
      { bg: "bg-blue-700", bars: ["w-1/2", "w-full", "w-3/4"], color: "bg-blue-300" },
      { bg: "bg-violet-700", bars: ["w-2/3", "w-1/2", "w-full"], color: "bg-violet-300" },
    ],
  },
];

function PhoneMockup({ screens }: { screens: typeof projects[0]["screens"] }) {
  return (
    <div className="flex items-end justify-center gap-3 h-full px-4 pt-4 pb-0">
      {screens.map((screen, i) => (
        <div
          key={i}
          className={`relative flex-1 max-w-[72px] rounded-t-2xl overflow-hidden border-2 border-white/20 shadow-xl ${
            i === 1 ? "h-36" : "h-28"
          }`}
          style={{ transform: i === 0 ? "rotate(-5deg)" : i === 2 ? "rotate(5deg)" : "none" }}
        >
          {/* Phone top notch */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-black/50 z-10 flex items-center justify-center">
            <div className="w-6 h-1 bg-white/30 rounded-full" />
          </div>
          {/* Screen content */}
          <div className={`${screen.bg} h-full pt-5 px-1.5 pb-1`}>
            {/* Header bar */}
            <div className={`h-1.5 ${screen.color} rounded-full opacity-80 mb-1.5`} />
            {/* Content lines */}
            <div className="space-y-1">
              {screen.bars.map((w, j) => (
                <div key={j} className={`h-1 bg-white/30 rounded-full ${w}`} />
              ))}
            </div>
            {/* Chart simulation */}
            <div className="mt-2 flex items-end gap-0.5 h-8">
              {[40, 70, 50, 90, 60, 80, 45].map((h, j) => (
                <div
                  key={j}
                  className={`flex-1 ${screen.color} rounded-sm opacity-70`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest">
            My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-muted-foreground max-w-xl text-base leading-relaxed">
            A showcase of Flutter applications I've built, featuring clean design, smooth animations, and exceptional user experiences.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-card border border-border/40 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:border-border/70 transition-all duration-300 hover:-translate-y-1"
              data-testid={`card-project-${index}`}
            >
              {/* App mockup preview area */}
              <div className={`relative bg-gradient-to-br ${project.gradient} h-48 overflow-hidden`}>
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 70% 20%, rgba(255,255,255,0.15) 0%, transparent 60%)" }} />
                <PhoneMockup screens={project.screens} />
                {/* Top right icons */}
                <div className="absolute top-3 right-3 flex gap-2 z-10">
                  <a href={project.githubUrl} className="bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors p-1.5 rounded-full" data-testid={`link-github-${index}`}>
                    <Github className="h-3 w-3 text-white" />
                  </a>
                  <a href={project.liveUrl} className="bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors p-1.5 rounded-full" data-testid={`link-live-${index}`}>
                    <ExternalLink className="h-3 w-3 text-white" />
                  </a>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-bold text-white px-2 py-0.5 rounded-full ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      {project.stars}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[10px] font-medium px-2 py-0.5 rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="px-5 pb-5 flex gap-4 border-t border-border/20 pt-3.5">
                <a href={project.liveUrl} className="flex items-center text-xs font-semibold text-muted-foreground hover:text-primary transition-colors gap-1.5">
                  <ExternalLink className="h-3 w-3" /> Live Preview
                </a>
                <a href={project.githubUrl} className="flex items-center text-xs font-semibold text-muted-foreground hover:text-primary transition-colors gap-1.5">
                  <Github className="h-3 w-3" /> Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors border border-border/50 rounded-full px-6 py-2.5 hover:border-primary/40"
          >
            <Github className="h-4 w-4" /> View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
