'use client';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="pt-36 px-8 md:px-20 max-w-5xl mx-auto min-h-screen pb-32">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-12">The Hybrid Studio Model</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-zinc-300 font-light leading-relaxed mb-20">
          <div>
            <p className="text-xl text-white font-normal mb-6">
              Most businesses face a major bottleneck: their designer doesn't understand code, their developer lacks visual taste, and their marketer operates in a silo.
            </p>
            <p className="text-zinc-400">
              I bridge these disciplines. By combining elite graphic architecture, high-end full-stack development, and aggressive conversion optimization under one roof, your brand launches with unified intent.
            </p>
          </div>
          <div className="border border-white/10 p-8 rounded-2xl bg-zinc-950 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">Core Tech Stack & Tools</h3>
              <ul className="space-y-3 font-mono text-sm text-zinc-300">
                <li>01. Next.js, React, TypeScript</li>
                <li>02. Tailwind CSS, Framer Motion</li>
                <li>03. Figma, Adobe Illustrator (Branding)</li>
                <li>04. SEO Architectures & Funnel Metrics</li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 font-mono text-xs text-zinc-500">
              STATUS: ACCEPTING Q3 CONTRACTS
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}