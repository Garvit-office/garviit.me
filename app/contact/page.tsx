'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="pt-36 px-8 md:px-20 max-w-4xl mx-auto min-h-screen pb-32">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-4">Let's Build Together</h1>
        <p className="text-zinc-400 text-lg mb-12 font-light">
          Have a project in mind? Fill out the brief below or email directly at <span className="text-white underline">hello@yourdomain.com</span>
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-500 mb-2">Your Name</label>
              <input type="text" placeholder="John Doe" className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-700 focus:outline-none focus:border-white transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-500 mb-2">Email Address</label>
              <input type="email" placeholder="john@company.com" className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-700 focus:outline-none focus:border-white transition-colors" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-zinc-500 mb-2">Service Required</label>
            <select className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-colors">
              <option>Full-Stack Web/App Build</option>
              <option>Brand Identity & Logo Design</option>
              <option>Marketing & Growth Funnel</option>
              <option>All-in-One Digital Package</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-zinc-500 mb-2">Project Details</label>
            <textarea rows={5} placeholder="Tell me about your goals, timeline, and scope..." className="w-full bg-zinc-950 border border-white/10 rounded-xl p-4 text-white placeholder-zinc-700 focus:outline-none focus:border-white transition-colors"></textarea>
          </div>

          <button type="submit" className="w-full bg-white text-black font-semibold py-4 rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center gap-2">
            Send Message <ArrowUpRight className="w-4 h-4" />
          </button>
        </form>
      </motion.div>
    </main>
  );
}