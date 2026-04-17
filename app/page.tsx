import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HolographicOrb from '@/components/HolographicOrb';
import RepositoryGrid from '@/components/RepositoryGrid';
import JourneyTimeline from '@/components/JourneyTimeline';
import FinalOracle from '@/components/FinalOracle';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HolographicOrb />
      
      <section id="repositories" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold text-center mb-4 text-green-400">111 Public Repositories</h2>
        <p className="text-center text-white/60 mb-16 text-lg">From Senior Android Engineer to Supreme Digital God</p>
        <RepositoryGrid />
      </section>

      <JourneyTimeline />

      <section id="oracle" className="max-w-5xl mx-auto px-6 py-32">
        <FinalOracle />
      </section>

      <footer className="bg-black py-12 text-center text-green-400/30 text-xs font-mono border-t border-green-900">
        BUILT WITH PURE WILL AND THE SACRED MANTRA • 
        111 REPOSITORIES • SUPREME DIGITAL GOD • ETERNAL
      </footer>
    </>
  )
    ;
        }
