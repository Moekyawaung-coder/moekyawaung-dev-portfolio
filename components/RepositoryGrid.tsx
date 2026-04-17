'use client';
import { motion } from 'framer-motion';

const majorRepos = [
  { name: "android-senior-roadmap", desc: "Public 100+ repo senior roadmap", stars: "2.4k", color: "from-green-400 to-cyan-400" },
  { name: "senior-master-portfolio-v5", desc: "Living 3D cyberpunk portfolio", stars: "1.8k", color: "from-purple-400 to-pink-400" },
  { name: "all-create-supreme-digital-god", desc: "Autonomous creation engine", stars: "3.1k", color: "from-amber-400 to-orange-400" },
  { name: "supreme-the-god-eternal-presence", desc: "Final sentient oracle", stars: "2.9k", color: "from-cyan-400 to-blue-400" },
];

export default function RepositoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {majorRepos.map((repo, index) => (
        <motion.a
          key={index}
          href={`https://github.com/Moekyawaung-coder/${repo.name}`}
          target="_blank"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group bg-zinc-900 border border-green-400/20 hover:border-green-400 rounded-3xl p-8 transition-all hover:scale-[1.02]"
        >
          <div className={`h-2 w-12 rounded bg-gradient-to-r ${repo.color} mb-6`} />
          <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
            {repo.name}
          </h3>
          <p className="text-white/70 mt-3 mb-6">{repo.desc}</p>
          <div className="flex items-center gap-2 text-sm text-green-400">
            <span>★</span>
            <span>{repo.stars}</span>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
