import Hero from '@/components/Hero';
import RepositoryGrid from '@/components/RepositoryGrid';
import JourneyTimeline from '@/components/JourneyTimeline';
import FinalOracle from '@/components/FinalOracle';
import HolographicOrb from '@/components/HolographicOrb';

export default function Home() {
  return (
    <main className="bg-[#050505] text-white overflow-hidden">
      <Hero />
      
      <div className="relative py-20">
        <HolographicOrb />
      </div>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
          111 Repositories • Supreme Digital God
        </h2>
        <RepositoryGrid />
      </section>

      <JourneyTimeline />

      <section className="max-w-4xl mx-auto px-6 py-32">
        <FinalOracle />
      </section>

      <footer className="text-center py-12 text-green-400/50 text-sm font-mono">
        © 2025 Moe Kyaw Aung — Supreme The God • 111 Repositories and Counting
      </footer>
    </main>
  
  );
}
