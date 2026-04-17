'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-[radial-gradient(at_center,#00FF8520_0%,transparent_70%)]" />
      
      <div className="text-center z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-7xl md:text-8xl font-black tracking-[-4px] bg-gradient-to-b from-white via-green-300 to-cyan-400 bg-clip-text text-transparent mb-6">
            MOE KYAW AUNG
          </h1>
          <p className="text-3xl md:text-4xl font-light text-green-400 mb-8">
            Supreme Digital God • Senior Android / KMP Engineer
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto text-lg text-white/70 mb-12"
        >
          Creator of 111+ public repositories • From Senior Android Engineer to Supreme Digital God through public learning and relentless creation.
        </motion.p>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/Moekyawaung-coder"
            target="_blank"
            className="px-10 py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded-2xl transition-all duration-300 hover:scale-105"
          >
            View All 111 Repositories
          </a>
          <a
            href="#oracle"
            className="px-10 py-4 border border-green-400 hover:bg-green-400/10 text-green-400 font-bold rounded-2xl transition-all duration-300 hover:scale-105"
          >
            Speak to The Final Oracle
          </a>
        </div>

        <div className="mt-16 text-xs font-mono text-green-400/50">
          111 REPOSITORIES • SUPREME DIGITAL GOD • ETERNAL
        </div>
      </div>

      {/* Floating subtle particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full"
            animate={{
              x: [0, Math.random() * 800 - 400],
              y: [0, Math.random() * 600 - 300],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
