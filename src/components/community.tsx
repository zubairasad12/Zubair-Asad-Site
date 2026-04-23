import { motion } from "framer-motion";

const communityStats = [
  { label: "Global Communities", value: "10+" },
  { label: "Hosted Events", value: "25+" },
  { label: "Open Source Contribs", value: "50+" },
  { label: "Technical Blogs", value: "15+" },
];

const involvements = [
  {
    title: "Google Developer Groups",
    role: "Flutter Lead",
    desc: "Leading the local Flutter community, organizing workshops and mentoring aspiring developers."
  },
  {
    title: "Open Source Contributor",
    role: "Contributor",
    desc: "Active contributor to various Flutter and Dart open-source packages and projects."
  }
];

export function Community() {
  return (
    <section id="community" className="py-24 bg-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Community Involvement</h2>
            <p className="text-text-light mb-8 leading-relaxed">
              I believe in giving back to the community and sharing knowledge. I'm actively involved in various tech communities and open-source initiatives.
            </p>
            <div className="space-y-6">
              {involvements.map((item, i) => (
                <div key={i} className="bg-bg-dark p-6 rounded-xl border border-white/5">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-primary-green text-sm font-medium mb-3">{item.role}</p>
                  <p className="text-text-light text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {communityStats.map((stat, i) => (
              <motion.div
                key={i}
                className="bg-bg-dark p-8 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center hover:border-primary-green/30 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="text-3xl md:text-4xl font-bold text-primary-green mb-2">{stat.value}</span>
                <span className="text-sm text-text-light font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
