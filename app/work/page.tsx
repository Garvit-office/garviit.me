'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { title: 'Vortex Identity System', category: 'Design', type: 'Logo & Branding', year: '2026' },
  { title: 'Nexus SaaS Architecture', category: 'Development', type: 'Web App & Next.js', year: '2026' },
  { title: 'Aura Growth Funnel', category: 'Marketing', type: 'Conversion Strategy', year: '2025' },
  { title: 'Krono Mobile Experience', category: 'Development', type: 'Cross-platform App', year: '2025' },
  { title: 'Monolith Editorial Grid', category: 'Design', type: 'Graphic Systems', year: '2025' },
];

export default function WorkPage() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="pt-36 px-8 md:px-20 max-w-7xl mx-auto min-h-screen pb-32">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-6">Selected Archive</h1>
        <p className="text-zinc-400 text-lg max-w-xl font-light mb-12">
          A collection of digital products, brand identities, and high-performance marketing builds.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-16 border-b border-white/10 pb-6">
          {['All', 'Design', 'Development', 'Marketing'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase transition-all ${
                filter === cat ? 'bg-white text-black font-semibold' : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative border border-white/10 bg-zinc-950 p-8 rounded-2xl overflow-hidden hover:border-white/40 transition-colors"
              >
                <div className="aspect-video w-full bg-zinc-900 rounded-lg mb-6 flex items-center justify-center border border-white/5 group-hover:scale-[1.02] transition-transform duration-500">
                  <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest">[ Preview Mockup ]</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">{project.type} • {project.year}</span>
                    <h3 className="text-2xl font-semibold mt-1">{project.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </main>
  );
}