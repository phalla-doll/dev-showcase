'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Search, ArrowRight, Code2, Terminal, Cpu, Globe, Database, LayoutTemplate, Star, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const PROJECTS = [
  {
    id: 1,
    title: 'NexusDB',
    description: 'A distributed, edge-native database for modern serverless applications. Built with Rust.',
    tags: ['Database', 'Rust', 'Edge'],
    price: '$49/mo',
    author: 'Alex Chen',
    stars: 128,
    icon: Database,
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'group-hover:border-blue-500/50',
  },
  {
    id: 2,
    title: 'UI Forge',
    description: 'A comprehensive set of accessible, highly customizable React components with Tailwind CSS.',
    tags: ['React', 'Tailwind', 'UI Kit'],
    price: '$129',
    author: 'Sarah Drasner',
    stars: 342,
    icon: LayoutTemplate,
    color: 'from-purple-500/20 to-pink-500/20',
    border: 'group-hover:border-purple-500/50',
  },
  {
    id: 3,
    title: 'WASM Image Proc',
    description: 'High-performance image processing library compiled to WebAssembly. 10x faster than JS.',
    tags: ['WASM', 'C++', 'Media'],
    price: 'Free',
    author: 'David Kim',
    stars: 89,
    icon: Cpu,
    color: 'from-emerald-500/20 to-green-500/20',
    border: 'group-hover:border-emerald-500/50',
  },
  {
    id: 4,
    title: 'TermiSync',
    description: 'Sync your terminal configuration, aliases, and scripts across all your machines securely.',
    tags: ['CLI', 'Go', 'DevTools'],
    price: '$15',
    author: 'Elena Rostova',
    stars: 215,
    icon: Terminal,
    color: 'from-orange-500/20 to-red-500/20',
    border: 'group-hover:border-orange-500/50',
  },
  {
    id: 5,
    title: 'API Gateway Pro',
    description: 'Lightweight, high-throughput API gateway with built-in rate limiting and analytics.',
    tags: ['API', 'Node.js', 'Infrastructure'],
    price: '$99/yr',
    author: 'Marcus Johnson',
    stars: 156,
    icon: Globe,
    color: 'from-indigo-500/20 to-blue-500/20',
    border: 'group-hover:border-indigo-500/50',
  },
  {
    id: 6,
    title: 'Syntax Highlighter',
    description: 'Zero-dependency, blazing fast syntax highlighter with support for 150+ languages.',
    tags: ['Library', 'TypeScript', 'AST'],
    price: 'Free',
    author: 'Wei Lin',
    stars: 420,
    icon: Code2,
    color: 'from-yellow-500/20 to-amber-500/20',
    border: 'group-hover:border-yellow-500/50',
  },
];

export default function Home() {
  const [bgMode, setBgMode] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const renderBackground = () => {
    switch(bgMode) {
      case 0: // Base Noise
        return <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-screen" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>;
      case 1: // Stage Spotlight
        return (
          <>
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-screen" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-500/20 via-zinc-900/5 to-transparent pointer-events-none z-0"></div>
          </>
        );
      case 2: // Interactive Cursor Reveal
        return (
          <>
            <div className="absolute inset-0 z-0 bg-[#0a0a0a]"></div>
            <div 
              className="absolute inset-0 z-0 pointer-events-none opacity-30 transition-opacity duration-300"
              style={{
                backgroundImage: 'radial-gradient(circle 1px at center, #ffffff 1px, transparent 1px)',
                backgroundSize: '24px 24px',
                maskImage: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
                WebkitMaskImage: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`
              }}
            ></div>
          </>
        );
      case 3: // Micro-Patterns
        return (
          <>
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-screen" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
                 style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 16v8M16 20h8\' stroke=\'%23ffffff\' stroke-width=\'1\' fill=\'none\'/%3E%3C/svg%3E")' }}>
            </div>
          </>
        );
      case 4: // Deep Vignette
        return (
          <>
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-screen" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
            <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_100%)]"></div>
          </>
        );
      case 5: // Monochromatic Mesh
        return (
          <>
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-screen" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
              <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,_#18181b_0%,_transparent_70%)] blur-3xl"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,_#09090b_0%,_transparent_70%)] blur-3xl"></div>
              <div className="absolute top-[20%] right-[20%] w-[40%] h-[40%] rounded-full bg-[radial-gradient(circle,_#27272a_0%,_transparent_70%)] blur-3xl opacity-30"></div>
            </div>
          </>
        );
      case 6: // Refined Glassmorphism
        return (
          <>
            <div className="absolute inset-0 z-0 bg-black"></div>
            <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-screen" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
          </>
        );
      default:
        return null;
    }
  };

  const bgNames = [
    "Base Noise",
    "Stage Spotlight",
    "Interactive Cursor",
    "Micro-Patterns",
    "Deep Vignette",
    "Monochromatic Mesh",
    "Refined Glassmorphism"
  ];

  return (
    <div className={`min-h-screen ${bgMode === 6 ? 'bg-black' : 'bg-[#0a0a0a]'} text-zinc-300 font-sans selection:bg-zinc-800 selection:text-white overflow-hidden relative`}>
      {renderBackground()}

      <nav className={`relative z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto ${bgMode === 6 ? 'sticky top-0 bg-black/40 backdrop-blur-xl border-b border-white/5' : ''}`}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
            <Code2 className="w-5 h-5 text-black" />
          </div>
          <span className="font-mono font-medium text-white tracking-tight">DevShowcase</span>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="#" className="hover:text-white transition-colors">Explore</Link>
          <Link href="#" className="hover:text-white transition-colors">Creators</Link>
          <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium hover:text-white transition-colors">Log in</button>
          <button className="text-sm font-medium bg-white text-black px-4 py-2 rounded-md hover:bg-zinc-200 transition-colors">Submit Project</button>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="min-h-[65vh] flex flex-col items-center justify-center text-center pt-12 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-xs font-mono text-zinc-400 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Discover the best developer tools
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-medium text-white tracking-tighter max-w-4xl leading-[1.1] mb-6"
          >
            The marketplace for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
              developer products.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12"
          >
            Discover, buy, and sell high-quality developer tools, libraries, UI kits, and boilerplates. Built by developers, for developers.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="w-full max-w-2xl relative group"
          >
            <div className="relative flex items-center bg-zinc-900/80 border border-zinc-800 rounded-xl p-2 backdrop-blur-sm transition-all duration-300 focus-within:border-zinc-600 focus-within:bg-zinc-900">
              <Search className="w-5 h-5 text-zinc-500 ml-3" />
              <input 
                type="text" 
                placeholder="Search for React templates, Rust libraries, APIs..." 
                className="w-full bg-transparent border-none outline-none text-white px-4 py-3 placeholder:text-zinc-600 font-mono text-sm"
              />
              <button className="bg-white text-black px-6 py-3 rounded-lg font-medium text-sm hover:bg-zinc-200 transition-colors flex items-center gap-2">
                Search <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6 text-xs font-mono text-zinc-500">
              <span>Popular:</span>
              <button className="hover:text-zinc-300 transition-colors">React</button>
              <button className="hover:text-zinc-300 transition-colors">Next.js</button>
              <button className="hover:text-zinc-300 transition-colors">Tailwind</button>
              <button className="hover:text-zinc-300 transition-colors">Rust</button>
            </div>
          </motion.div>
        </section>

        {/* Grid Section */}
        <section className="pb-32">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-medium text-white tracking-tight">Featured Projects</h2>
            <Link href="#" className="text-sm font-mono text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group relative flex flex-col ${bgMode === 6 ? 'bg-white/[0.02] backdrop-blur-xl border-white/5' : 'bg-zinc-900/40 border-zinc-800/50'} rounded-2xl p-6 hover:bg-zinc-900/80 transition-all duration-300 ${project.border}`}
              >
                {/* Card Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 pointer-events-none`}></div>
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50 group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="w-6 h-6 text-zinc-300" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-white font-mono font-medium">{project.price}</span>
                    <div className="flex items-center gap-1 text-xs text-zinc-500 mt-1">
                      <Star className="w-3 h-3 fill-zinc-500" /> {project.stars}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 mb-6 flex-grow line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-col gap-4 mt-auto relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-zinc-800/50 rounded-md border border-zinc-700/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs text-white font-medium">
                        {project.author.charAt(0)}
                      </div>
                      <span className="text-xs text-zinc-400">{project.author}</span>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors">
                        <Github className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Bento Grid Section */}
        <section className="pb-32">
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-white tracking-tight mb-2">Why DevShowcase?</h2>
            <p className="text-zinc-400">Everything you need to launch and scale your developer tools.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`md:col-span-2 ${bgMode === 6 ? 'bg-white/[0.02] backdrop-blur-xl border-white/5' : 'bg-zinc-900/40 border-zinc-800/50'} rounded-2xl p-8 relative overflow-hidden group`}
            >
              <h3 className="text-xl font-medium text-white mb-2 relative z-10">Reach the right audience</h3>
              <p className="text-zinc-400 max-w-md relative z-10">Get your tools in front of thousands of developers actively looking for solutions to their technical problems.</p>
              
              <div className="absolute bottom-4 right-4 flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-12 h-12 rounded-lg bg-zinc-800/80 border border-zinc-700 flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-zinc-400" />
                </div>
                <div className="w-12 h-12 rounded-lg bg-zinc-800/80 border border-zinc-700 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-zinc-400" />
                </div>
                <div className="w-12 h-12 rounded-lg bg-zinc-800/80 border border-zinc-700 flex items-center justify-center">
                  <Database className="w-5 h-5 text-zinc-400" />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`${bgMode === 6 ? 'bg-white/[0.02] backdrop-blur-xl border-white/5' : 'bg-zinc-900/40 border-zinc-800/50'} rounded-2xl p-8 relative overflow-hidden group`}
            >
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-500/10 to-transparent"></div>
              <h3 className="text-xl font-medium text-white mb-2">Zero fees on free tools</h3>
              <p className="text-zinc-400 text-sm">We only make money when you do. Free open-source projects are always free to list.</p>
              <div className="mt-6 text-4xl font-mono font-medium text-emerald-400 group-hover:scale-110 transition-transform origin-left">0%</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`${bgMode === 6 ? 'bg-white/[0.02] backdrop-blur-xl border-white/5' : 'bg-zinc-900/40 border-zinc-800/50'} rounded-2xl p-8 relative overflow-hidden group flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Analytics</h3>
                <p className="text-zinc-400 text-sm">Track views, clicks, and conversions in real-time.</p>
              </div>
              <div className="flex items-end gap-1 h-16 mt-4">
                {[40, 70, 45, 90, 65, 100, 85].map((height, i) => (
                  <div 
                    key={i} 
                    className="w-full bg-zinc-800 rounded-t-sm group-hover:bg-zinc-600 transition-colors duration-300"
                    style={{ height: `${height}%`, transitionDelay: `${i * 50}ms` }}
                  ></div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={`md:col-span-2 ${bgMode === 6 ? 'bg-white/[0.02] backdrop-blur-xl border-white/5' : 'bg-zinc-900/40 border-zinc-800/50'} rounded-2xl p-8 relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/code/800/400')] opacity-5 grayscale group-hover:grayscale-0 group-hover:opacity-10 transition-all duration-700 bg-cover bg-center"></div>
              <div className="relative z-10 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-medium text-white mb-2">Ready to launch?</h3>
                <p className="text-zinc-400 max-w-md mb-6">Join hundreds of developers who are already monetizing their side projects and tools.</p>
                <button className="w-fit bg-white text-black px-6 py-3 rounded-lg font-medium text-sm hover:bg-zinc-200 transition-colors flex items-center gap-2">
                  Submit your project <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800/50 py-12 mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-zinc-500" />
            <span className="font-mono font-medium text-zinc-500 tracking-tight">DevShowcase</span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
          </div>
          <div className="text-sm text-zinc-600 font-mono">
            © 2026 DevShowcase. All rights reserved.
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 p-2 rounded-full shadow-2xl">
        <span className="text-xs font-mono text-zinc-400 pl-3">{bgNames[bgMode]}</span>
        <button 
          onClick={() => setBgMode((prev) => (prev + 1) % 7)}
          className="bg-white text-black px-3 py-1.5 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors"
        >
          Next Style
        </button>
      </div>
    </div>
  );
}
