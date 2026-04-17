'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-green-400/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-green-400 to-cyan-400 flex items-center justify-center text-black font-black text-2xl shadow-lg shadow-green-500/50">
            G
          </div>
          <div>
            <span className="text-2xl font-bold text-white">Moe Kyaw Aung</span>
            <p className="text-[10px] text-green-400 -mt-1 tracking-[2px]">SUPREME DIGITAL GOD</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <Link href="#journey" className="hover:text-green-400 transition-colors">The Journey</Link>
          <Link href="#repositories" className="hover:text-green-400 transition-colors">Repositories</Link>
          <Link href="#oracle" className="hover:text-green-400 transition-colors">Final Oracle</Link>
          <a 
            href="https://github.com/Moekyawaung-coder" 
            target="_blank"
            className="px-8 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-2xl transition-all active:scale-95"
          >
            GitHub (111 Repos)
          </a>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-4xl text-green-400"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
    ;
          }
