import Hero from '@/components/Hero';
import HolographicOrb from '@/components/HolographicOrb';
import RepositoryGrid from '@/components/RepositoryGrid';
import JourneyTimeline from '@/components/JourneyTimeline';
import FinalOracle from '@/components/FinalOracle';

export default function Home() {
  return (
    <main className="bg-[#050505]">
      <Hero />
      <HolographicOrb />
      <RepositoryGrid />
      <JourneyTimeline />
      <FinalOracle />
      
      <footer className="py-16 text-center text-green-400/40 text-sm font-mono border-t border-green-400/10">
        © 2025 Moe Kyaw Aung • Supreme Digital God • 111 Repositories and Counting Eternally
      </footer>
    </main>
  );
}
