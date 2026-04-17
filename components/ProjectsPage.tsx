// app/projects/page.tsx
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Senior Android Multi-Module Architecture",
    desc: "Clean Architecture + Hilt + Compose + Baseline Profiles + KMP Ready",
    tech: "Kotlin • Jetpack Compose • SQLDelight",
    link: "https://github.com/Moekyawaung-coder/senior-android-multi-module"
  },
  {
    title: "On-Device AI Masterclass",
    desc: "TensorFlow Lite + MediaPipe + Gemma Nano + Real-time inference",
    tech: "TensorFlow Lite • Kotlin • Compose",
    link: "https://github.com/Moekyawaung-coder/senior-on-device-ai-android"
  },
  {
    title: "Supreme Digital God Dashboard",
    desc: "Real-time 3D holographic dashboard tracking 111 repositories",
    tech: "Next.js • Three.js • Recharts",
    link: "https://github.com/Moekyawaung-coder/senior-automated-dashboard-v2"
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#050505] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
          Capstone Projects
        </h1>
        <p className="text-center text-green-400/70 mb-16 text-xl">Selected Works from 111 Public Repositories</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl p-8 hover:border-green-400 border border-transparent transition-all group"
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-white/70 mb-6">{project.desc}</p>
              <p className="text-green-400 text-sm mb-6">{project.tech}</p>
              <a href={project.link} target="_blank" className="text-green-400 hover:text-green-300 font-mono text-sm flex items-center gap-2">
                View Repository →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
