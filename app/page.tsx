'client'
import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code, Palette, TrendingUp } from 'lucide-react';

export default function Home() {
  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 backdrop-blur-md border-b border-white/10 bg-black/50">
        <div className="font-mono text-sm tracking-widest uppercase">STUDIO // 2026</div>
        <div className="flex gap-6 text-sm font-light text-zinc-400">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section with Staggered Reveal */}
      <section className="h-screen flex flex-col justify-center px-8 md:px-20 max-w-7xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-3 py-1 mb-6 border border-white/20 rounded-full text-xs font-mono uppercase tracking-wider text-zinc-400">
            Available For Freelance • Design & Dev
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none uppercase mb-8">
            Digital Form <br />
            <span className="text-zinc-600">&amp; Function.</span>
          </h1>
          <p className="max-w-xl text-zinc-400 text-lg font-light leading-relaxed mb-10">
            I engineer high-converting apps, build immersive web experiences, and craft bold brand identities that command attention.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition-all"
          >
            Let's Talk <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-8 md:px-20 max-w-7xl mx-auto border-t border-white/10">
        <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-500 mb-16">01 / Capabilities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="border border-white/10 p-8 rounded-2xl bg-zinc-950 hover:border-white/40 transition-colors">
            <Palette className="w-8 h-8 mb-6 text-white" />
            <h3 className="text-xl font-semibold mb-3">Brand &amp; Graphic Design</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Logos, comprehensive design systems, high-end editorial assets, and visual identities built to stand out.
            </p>
          </div>

          {/* Service 2 */}
          <div className="border border-white/10 p-8 rounded-2xl bg-zinc-950 hover:border-white/40 transition-colors">
            <Code className="w-8 h-8 mb-6 text-white" />
            <h3 className="text-xl font-semibold mb-3">Web &amp; App Builds</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Blazing fast Next.js websites, mobile applications, heavy animations, and clean code architecture.
            </p>
          </div>

          {/* Service 3 */}
          <div className="border border-white/10 p-8 rounded-2xl bg-zinc-950 hover:border-white/40 transition-colors">
            <TrendingUp className="w-8 h-8 mb-6 text-white" />
            <h3 className="text-xl font-semibold mb-3">Marketing &amp; Growth</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Strategic conversion funnels, campaign execution, and performance-driven positioning to scale revenue.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}