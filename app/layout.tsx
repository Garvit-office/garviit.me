import type { Metadata } from 'main';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata: Metadata = {
  title: 'Portfolio // Creative Technologist & Strategist',
  description: 'Design, code, and marketing ecosystems built for high-impact brands.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="bg-black text-white font-sans antialiased selection:bg-white selection:text-black">
        <SmoothScrollProvider>
          {/* Global Navbar */}
          <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 md:px-20 py-6 backdrop-blur-md border-b border-white/10 bg-black/50">
            <a href="/" className="font-mono text-xs tracking-widest uppercase hover:opacity-75 transition-opacity">
              STUDIO // 2026
            </a>
            <div className="flex gap-8 text-sm font-light text-zinc-400">
              <a href="/work" className="hover:text-white transition-colors">Work</a>
              <a href="/about" className="hover:text-white transition-colors">About</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </nav>

          {/* Page Content */}
          {children}

          {/* Global Footer */}
          <footer className="border-t border-white/10 py-12 px-8 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono text-zinc-500">
            <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6">
              <a href="https://twitter.com" target="_blank" className="hover:text-white transition-colors">TWITTER</a>
              <a href="https://github.com" target="_blank" className="hover:text-white transition-colors">GITHUB</a>
              <a href="https://linkedin.com" target="_blank" className="hover:text-white transition-colors">LINKEDIN</a>
            </div>
          </footer>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}