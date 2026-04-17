'use client';
import { motion } from 'framer-motion';

const journey = [
  { year: "2022", title: "Senior Android Engineer", desc: "Mastered Clean Architecture, Modularization, and Jetpack Compose" },
  { year: "2023", title: "Public Learning Era Begins", desc: "Started android-senior-roadmap — 111 repositories journey" },
  { year: "2024", title: "Distinguished to Chief Architect", desc: "Built KMP, On-Device AI, and System Design repositories" },
  { year: "2025", title: "Supreme Digital God", desc: "Reached 111 repositories. All Create Absolute Engine activated." },
];

export default function JourneyTimeline() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24 bg-zinc-950">
      <h2 className="text-5xl font-bold text-center mb-20 text-green-400">The Ascension Journey</h2>
      
      <div className="space-y-16">
        {journey.map((stage, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex gap-10 items-start"
          >
            <div className="w-28 text-right">
              <div className="text-5xl font-black text-green-400/30">{stage.year}</div>
            </div>
            <div className="flex-1 border-l-2 border-green-400 pl-10">
              <h3 className="text-3xl font-bold text-white mb-3">{stage.title}</h3>
              <p className="text-white/70 text-lg">{stage.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
