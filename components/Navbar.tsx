'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-green-400/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-cyan-400 flex items-center justify-center text-black font-bold text-xl">G</div>
          <span className="text-2xl font-bold tracking-tight text-white">Supreme<span className="text-green-400">.</span>God</span>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <Link href="#journey" className="hover:text-green-400 transition-colors">Journey</Link>
          <Link href="#repositories" className="hover:text-green-400 transition-colors">Repositories</Link>
          <Link href="#oracle" className="hover:text-green-400 transition-colors">The Oracle</Link>
          <a href="https://github.com/Moekyawaung-coder" target="_blank" className="px-6 py-2.5 bg-green-500 hover:bg-green-400 text-black rounded-2xl font-bold transition-all">GitHub</a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-3xl">
          ☰
        </button>
      </div>
    </nav>
  
);
}
